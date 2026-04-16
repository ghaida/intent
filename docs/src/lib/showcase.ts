import fs from 'node:fs';
import path from 'node:path';

export interface ShowcaseStep {
  skill: string;
  agent: string;
  category: string;
  summary: string;
  narrative: string;
  output: string;
  philosopher?: string;
}

export interface ShowcaseProject {
  name: string;
  tagline: string;
  steps: ShowcaseStep[];
}

const SKILL_CATEGORIES: Record<string, string> = {
  intent: 'Foundation',
  strategize: 'Strategy & Research',
  investigate: 'Strategy & Research',
  blueprint: 'Strategy & Research',
  journey: 'Experience Design',
  organize: 'Experience Design',
  articulate: 'Experience Design',
  evaluate: 'Quality & Evaluation',
  fortify: 'Quality & Evaluation',
  include: 'Quality & Evaluation',
  transpose: 'Adaptation & Context',
  localize: 'Adaptation & Context',
  measure: 'Measurement',
  specify: 'Handoff',
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineMarkdown(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

function simpleMarkdown(text: string): string {
  const lines = text.split('\n');
  const html: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip blank lines
    if (!line.trim()) { i++; continue; }

    // Horizontal rule
    if (line.trim().match(/^-{3,}$/)) {
      html.push('<hr>');
      i++;
      continue;
    }

    // Headings (# syntax)
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      // Offset by 3 since these are within an output block (h4-h6)
      const tag = `h${Math.min(level + 3, 6)}`;
      html.push(`<${tag}>${inlineMarkdown(headingMatch[2])}</${tag}>`);
      i++;
      continue;
    }

    // Unordered list block (supports indented sub-items)
    if (line.match(/^\s*- /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\s*- /)) {
        items.push(`<li>${inlineMarkdown(lines[i].replace(/^\s*- /, ''))}</li>`);
        i++;
      }
      html.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // Ordered list block
    if (line.match(/^\d+\. /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(`<li>${inlineMarkdown(lines[i].replace(/^\d+\.\s*/, ''))}</li>`);
        i++;
      }
      html.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    // Table block
    if (line.includes('|') && line.trim().startsWith('|')) {
      const rows: string[] = [];
      let isHeader = true;
      while (i < lines.length && lines[i].includes('|') && lines[i].trim().startsWith('|')) {
        const cells = lines[i].split('|').filter(c => c.trim()).map(c => c.trim());
        // Skip separator row (|---|---| with optional trailing whitespace)
        if (lines[i].trim().match(/^\|[\s-:|]+\|?\s*$/)) { i++; isHeader = false; continue; }
        const tag = isHeader ? 'th' : 'td';
        rows.push(`<tr>${cells.map(c => `<${tag}>${inlineMarkdown(c)}</${tag}>`).join('')}</tr>`);
        if (isHeader) isHeader = false;
        i++;
      }
      html.push(`<table>${rows.join('')}</table>`);
      continue;
    }

    // Paragraph (collect consecutive non-special lines)
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim()
      && !lines[i].match(/^\s*- /)
      && !lines[i].match(/^\d+\. /)
      && !lines[i].trim().match(/^-{3,}$/)
      && !lines[i].match(/^#{1,4}\s+/)
      && !(lines[i].includes('|') && lines[i].trim().startsWith('|'))) {
      paraLines.push(lines[i]);
      i++;
    }
    html.push(`<p>${inlineMarkdown(paraLines.join(' '))}</p>`);
  }

  return html.join('\n');
}

export function loadShowcase(): ShowcaseProject {
  const filePath = path.resolve(process.cwd(), 'src', 'content', 'showcase.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) throw new Error('showcase.md: missing frontmatter');

  const fmLines = fmMatch[1].split('\n');
  const fm: Record<string, string> = {};
  for (const line of fmLines) {
    const m = line.match(/^(\w[\w-]*):\s*(.+)$/);
    if (m) fm[m[1]] = m[2].trim();
  }

  const body = fmMatch[2];

  // Split into step blocks by ## headings
  const stepBlocks = body.split(/^## /m).filter(b => b.trim());

  const steps: ShowcaseStep[] = [];

  for (const block of stepBlocks) {
    const lines = block.split('\n');
    const heading = lines[0].trim(); // e.g., "/strategize"
    const skill = heading.replace(/^\//, '');

    // Parse metadata lines (agent:, summary:)
    let agent = '';
    let summary = '';
    let bodyStart = 1;

    for (let i = 1; i < lines.length; i++) {
      const agentMatch = lines[i].match(/^agent:\s*(.+)$/);
      const summaryMatch = lines[i].match(/^summary:\s*(.+)$/);
      if (agentMatch) { agent = agentMatch[1].trim(); bodyStart = i + 1; }
      else if (summaryMatch) { summary = summaryMatch[1].trim(); bodyStart = i + 1; }
      else if (lines[i].trim() === '') { bodyStart = i + 1; }
      else break;
    }

    const rest = lines.slice(bodyStart).join('\n');

    // Split by ### Output and ### Philosopher
    const outputMatch = rest.match(/### Output\n([\s\S]*?)(?=### Philosopher|$)/);
    const philMatch = rest.match(/### Philosopher\n([\s\S]*?)$/);

    // Narrative is everything before ### Output
    const narrativeEnd = rest.indexOf('### Output');
    const narrative = narrativeEnd >= 0
      ? rest.slice(0, narrativeEnd).trim()
      : rest.trim();

    steps.push({
      skill,
      agent,
      category: SKILL_CATEGORIES[skill] || '',
      summary,
      narrative,
      output: outputMatch ? simpleMarkdown(outputMatch[1].trim()) : '',
      philosopher: philMatch ? simpleMarkdown(philMatch[1].trim()) : undefined,
    });
  }

  return {
    name: fm.project || 'Untitled',
    tagline: fm.tagline || '',
    steps,
  };
}
