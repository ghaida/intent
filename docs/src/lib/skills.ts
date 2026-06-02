import fs from 'node:fs';
import path from 'node:path';

export type Cluster = 'strategy' | 'systems' | 'quality' | 'communication';

export interface Skill {
  slug: string;
  name: string;
  description: string;
  summary: string;
  category: string;
  cluster: Cluster;
  shape: string;
}

const CATEGORIES: Record<string, { label: string; order: number }> = {
  intent:      { label: 'Foundation',              order: 0 },
  strategize:  { label: 'Strategy & Research',     order: 1 },
  investigate: { label: 'Strategy & Research',     order: 1 },
  blueprint:   { label: 'Strategy & Research',     order: 1 },
  journey:     { label: 'Experience Design',       order: 2 },
  organize:    { label: 'Experience Design',       order: 2 },
  articulate:  { label: 'Experience Design',       order: 2 },
  evaluate:    { label: 'Quality & Evaluation',    order: 3 },
  fortify:     { label: 'Quality & Evaluation',    order: 3 },
  include:     { label: 'Quality & Evaluation',    order: 3 },
  transpose:   { label: 'Adaptation & Context',    order: 4 },
  localize:    { label: 'Adaptation & Context',    order: 4 },
  measure:     { label: 'Measurement',             order: 5 },
  philosopher: { label: 'Cross-cutting',           order: 6 },
  storytelling: { label: 'Cross-cutting',           order: 6 },
  specify:     { label: 'Handoff',                 order: 7 },
};

const SKILL_CLUSTERS: Record<string, Cluster> = {
  intent:       'strategy',
  strategize:   'strategy',
  investigate:  'strategy',
  philosopher:  'strategy',
  blueprint:    'systems',
  organize:     'systems',
  journey:      'systems',
  transpose:    'systems',
  localize:     'systems',
  evaluate:     'quality',
  fortify:      'quality',
  include:      'quality',
  measure:      'quality',
  articulate:   'communication',
  storytelling: 'communication',
  specify:      'communication',
};

const SKILL_SHAPES: Record<string, string> = {
  intent:       'An opening — the moment of orientation before any work begins.',
  strategize:   'Many framings → judgment → one chosen frame.',
  investigate:  'From a question, attention extends outward; judgment selects.',
  philosopher:  'Openness — the suspension of frame.',
  blueprint:    'A system rendered as scaffolded territories with paths between them.',
  organize:     'Chaos sorted into named territories with paths between them.',
  journey:      'A path across territory, with dual registers (action / feeling).',
  transpose:    'A design recomposed for different conditions.',
  localize:     'A design refracted through different cultural mediums.',
  evaluate:     'An existing system, examined under structured pressure, weighted by severity.',
  fortify:      'Bounded territory under stress, reinforced at the points of impact.',
  include:      'A single design extending its reach across human difference.',
  measure:      'Comparison made structural, judgment held at the aperture.',
  articulate:   'Noise → signal.',
  storytelling: 'An arc — a designed sequence with felt rhythm.',
  specify:      'Design rendered into instruction, every element accounted for.',
};

function parseFrontmatter(content: string): { data: Record<string, string>; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, body: content };

  const data: Record<string, string> = {};
  let currentKey = '';
  let currentValue = '';

  for (const line of match[1].split('\n')) {
    const kvMatch = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (kvMatch) {
      if (currentKey) data[currentKey] = currentValue.trim();
      currentKey = kvMatch[1];
      currentValue = kvMatch[2].replace(/^>\s*$/, '');
    } else if (currentKey) {
      currentValue += ' ' + line.trim();
    }
  }
  if (currentKey) data[currentKey] = currentValue.trim();

  return { data, body: match[2] };
}

// One-line catalog entry: the first sentence of the frontmatter `description`,
// trimmed to its headline clause (drop an em-dash aside or a colon-led example
// list). Keeps the reference index scannable: "what this skill does" in a line.
function summarize(description: string): string {
  let s = (description.split(/(?<=[.!?])\s+/)[0] || description).trim();
  s = s.split(/\s+—\s+|:\s+/)[0].trim();
  if (s && !/[.!?]$/.test(s)) s += '.';
  return s;
}

export function loadSkills(): Skill[] {
  const skillsDir = path.resolve(process.cwd(), '..', 'skills');
  const dirs = fs.readdirSync(skillsDir).filter((d: string) => {
    return fs.statSync(path.join(skillsDir, d)).isDirectory();
  });

  const skills: Skill[] = [];

  for (const dir of dirs) {
    const filePath = path.join(skillsDir, dir, 'SKILL.md');
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = parseFrontmatter(content);

    const slug = dir;
    const cat = CATEGORIES[slug];
    if (!cat) continue;

    const cluster = SKILL_CLUSTERS[slug];
    const shape = SKILL_SHAPES[slug];
    if (!cluster) {
      throw new Error(`skills.ts: SKILL_CLUSTERS missing entry for "${slug}". Add a cluster mapping.`);
    }
    if (!shape) {
      throw new Error(`skills.ts: SKILL_SHAPES missing entry for "${slug}". Add a shape line.`);
    }

    skills.push({
      slug,
      name: data.name || slug,
      description: data.description || '',
      summary: summarize(data.description || ''),
      category: cat.label,
      cluster,
      shape,
    });
  }

  // Sort by category order, then alphabetically within category
  skills.sort((a, b) => {
    const aOrder = CATEGORIES[a.slug]?.order ?? 99;
    const bOrder = CATEGORIES[b.slug]?.order ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.slug.localeCompare(b.slug);
  });

  return skills;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export function groupByCategory(skills: Skill[]): SkillCategory[] {
  const groups: Map<string, Skill[]> = new Map();
  for (const skill of skills) {
    if (!groups.has(skill.category)) groups.set(skill.category, []);
    groups.get(skill.category)!.push(skill);
  }
  return Array.from(groups.entries()).map(([label, skills]) => ({ label, skills }));
}
