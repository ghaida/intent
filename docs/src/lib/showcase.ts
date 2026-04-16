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

function simpleMarkdown(text: string): string {
  const blocks = text.split(/\n\n+/).filter(b => b.trim());
  return blocks.map(block => {
    // List block
    if (block.match(/^- /m)) {
      const items = block.split('\n')
        .filter(l => l.trim())
        .map(l => `<li>${inlineMarkdown(l.replace(/^- /, ''))}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    }
    // Numbered list block
    if (block.match(/^\d+\. /m)) {
      const items = block.split('\n')
        .filter(l => l.trim())
        .map(l => `<li>${inlineMarkdown(l.replace(/^\d+\.\s*/, ''))}</li>`)
        .join('');
      return `<ol>${items}</ol>`;
    }
    // Paragraph
    return `<p>${inlineMarkdown(block.replace(/\n/g, ' '))}</p>`;
  }).join('\n');
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
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
