import fs from 'node:fs';
import path from 'node:path';

export interface Agent {
  slug: string;
  name: string;
  tagline: string;
  domain: string;
  skills: string[];
  description: string;
}

const AGENT_META: Record<string, { domain: string; skills: string[] }> = {
  noor: {
    domain: 'Foundation & Context',
    skills: ['intent'],
  },
  ember: {
    domain: 'Strategy & Research',
    skills: ['strategize', 'investigate'],
  },
  wren: {
    domain: 'Experience Design',
    skills: ['journey', 'organize', 'articulate'],
  },
  vigil: {
    domain: 'Quality & Inclusion',
    skills: ['evaluate', 'fortify', 'include'],
  },
  rune: {
    domain: 'Engineering Handoff',
    skills: ['specify'],
  },
  sage: {
    domain: 'Cross-cutting Wisdom',
    skills: ['philosopher'],
  },
};

export function loadAgents(): Agent[] {
  const agentsDir = path.resolve(process.cwd(), '..', 'agents');
  const files = fs.readdirSync(agentsDir).filter((f: string) => f.endsWith('.md'));

  // Cross-validate AGENT_META against the actual agents/ directory so
  // an agent file added without a matching meta entry is loud, not silent.
  const knownSlugs = new Set(files.map((f) => f.replace('.md', '')));
  const orphanMetas = Object.keys(AGENT_META).filter((slug) => !knownSlugs.has(slug));
  if (orphanMetas.length > 0) {
    throw new Error(
      `agents.ts: AGENT_META contains entries with no matching agent file: ${orphanMetas.join(', ')}.`,
    );
  }
  const missingMetas = [...knownSlugs].filter((slug) => !AGENT_META[slug]);
  if (missingMetas.length > 0) {
    throw new Error(
      `agents.ts: agents/ contains files with no AGENT_META entry: ${missingMetas.join(', ')}. ` +
      `Add a domain/skills mapping for each new agent.`,
    );
  }

  const agents: Agent[] = [];

  for (const file of files) {
    const slug = file.replace('.md', '');
    const meta = AGENT_META[slug];
    if (!meta) continue;

    const content = fs.readFileSync(path.join(agentsDir, file), 'utf-8');

    // Extract name and tagline from first heading: # Name — Tagline
    const headingMatch = content.match(/^# (.+?) — (.+)$/m);
    const name = headingMatch ? headingMatch[1] : slug;
    const tagline = headingMatch ? headingMatch[2] : '';

    // Extract first paragraph after heading as description
    const lines = content.split('\n');
    let desc = '';
    let foundHeading = false;
    for (const line of lines) {
      if (line.startsWith('# ')) { foundHeading = true; continue; }
      if (foundHeading && line.trim() && !line.startsWith('#')) {
        desc = line.trim();
        break;
      }
    }

    agents.push({
      slug,
      name,
      tagline,
      domain: meta.domain,
      skills: meta.skills,
      description: desc,
    });
  }

  // Maintain order: noor, ember, wren, vigil, rune, sage
  const order = ['noor', 'ember', 'wren', 'vigil', 'rune', 'sage'];
  agents.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

  return agents;
}
