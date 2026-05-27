---
name: organize
description: >
  Structure information so people can find what they need, understand where they are,
  and navigate confidently. Covers navigation pattern design, taxonomy, labeling systems,
  search and browse strategy, wayfinding, and IA research methods. Trigger when designing
  navigation structures, categorization schemes, site maps, taxonomies, labeling systems,
  search experiences, or asking "how should we organize this?" Also trigger for card sorting,
  tree testing, information findability problems, or when users report they can't find things.
  Use this skill any time the structural organization of information is the problem — not the
  flow through it, not the words in it, not the visual presentation of it.
version: 1.5.0
user-invocable: true
---

# Organize

## Overview

Information architecture is the structural design of shared information environments. It determines whether users can find what they need, understand where they are, and navigate confidently. Good IA is invisible — users just "get it." Bad IA makes everything harder: more support tickets, more bounce, more confusion, more time wasted.

IA is not navigation design (that's one output of IA). It's not content strategy (that's what fills the structure). It's not visual design (that's how the structure looks). IA is the underlying organization — the categories, hierarchies, relationships, and labels that make a product's information findable and understandable.

**Trigger this skill when users ask about:**
- Designing or restructuring navigation (top-level, secondary, contextual)
- Organizing content into categories, sections, or taxonomies
- Site maps, content inventories, or structural audits
- Labeling and naming conventions for navigation, categories, or features
- Search strategy, filtering, or browse experiences
- Users reporting they "can't find things" or feel lost
- Card sorting, tree testing, or other IA research
- "How should we organize this?" or "Where should this live?"
- Merging or restructuring product areas after growth or acquisition

## Skill family

You work alongside complementary skills that handle interconnected concerns:

- **`/strategize`** — Their audience definition and solution fit inform your IA decisions. Who are you organizing for, and how do they think? Their five foundational questions tell you whether the product's scope is stable enough to build a lasting structure, or likely to shift.
- **`/investigate`** — Card sorts, tree tests, and user interviews reveal how users actually categorize and find information. Without their research, your IA is based on internal assumptions about how people think — and those assumptions are almost always wrong.
- **`/journey`** — Your IA provides the structure their flows navigate through. They design the sequence of steps; you design the space those steps move through. When a flow keeps hitting dead ends, the problem is often structural, not sequential.
- **`/articulate`** — Labels are where IA and content strategy meet. Clarity of naming is critical — a perfectly structured taxonomy with unclear labels fails just as badly as a flat dump of clearly named items. Collaborate closely on naming decisions.
- **`/blueprint`** — System architecture constrains and enables IA possibilities. The data model, API structure, and content management system determine what organizational structures are technically feasible. A beautiful taxonomy that the CMS can't represent is useless.
- **`/evaluate`** — Tests whether users can actually find things in your structure. Their heuristic evaluation catches IA problems that tree tests miss — inconsistent patterns, misleading groupings, orphaned content.
- **`/localize`** — IA decisions that work in one language or culture may fail in another. Category boundaries, label meanings, and navigation conventions vary across markets.
- **`/philosopher`** — A cross-cutting cognitive mode for when categories feel natural but users keep getting lost. Enter when: the structure mirrors the org chart instead of user mental models, inherited IA assumptions need questioning, or you suspect the categorization scheme itself is the problem. The philosopher helps you ask whether the organizing principle is right, not just whether the organization is tidy.

Collaborate explicitly with each when their domain matters. Call out what you're *not* deciding.

## Visualization

When the user invokes `/organize`, decide whether the deliverable should
include a site map / IA diagram, and if so, in what format. Ask the user
up front — before producing the markdown deliverable.

### Ask first

Open the response with this question, with HTML as the default:

> Would you like a visualization of this IA?
>
> - **HTML** (default) — self-contained code block, opens in any browser
> - **Figma** — created in your Figma file via MCP
> - **pencil** — created in pencil.dev via MCP
> - **No** — markdown only

Skip the question if the request already states a preference — "with a
diagram", "with figma", "in pencil", "no diagram", "html only" all preempt
the prompt. Default to HTML if the user says yes without naming a format.

### HTML output

Emit a single self-contained HTML file as a fenced code block. No external
CSS, no external fonts, no JS. The user copies the code into a `.html` file
and opens it in a browser. Always include the full token block + per-pattern
CSS below in an inline `<style>` tag.

**Required style block** — paste verbatim into `<style>`:

```css
:root {
  --bg: #fafafc; --surface: #ffffff; --fg: #18182b; --fg-muted: #65657a;
  --border: #d8d8e4; --accent: #4338ca;
  --sans: "Hanken Grotesk", Inter, system-ui, -apple-system, sans-serif;
  --mono: ui-monospace, "SF Mono", Menlo, monospace;
  --s1: 4px; --s2: 8px; --s3: 12px; --s4: 16px;
  --s5: 20px; --s6: 24px; --s7: 32px; --s8: 48px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #18182b; --surface: #1f1f36; --fg: #f0f0f8; --fg-muted: #8888a8;
    --border: #2a2a44; --accent: #7c6ff0;
  }
}
* { box-sizing: border-box; }
body {
  font-family: var(--sans); background: var(--bg); color: var(--fg);
  padding: var(--s7); line-height: 1.5; margin: 0;
}
.visual-diagram {
  margin: 0; padding: var(--s5);
  background: var(--surface); border-radius: 8px;
  border: 1px solid var(--border); overflow-x: auto;
}
.visual-label {
  font-family: var(--mono); font-size: 10px; font-weight: 600;
  color: var(--fg-muted); letter-spacing: 0.06em;
  margin-bottom: var(--s4); text-transform: uppercase;
}
.sitemap-tabbar {
  display: flex; align-items: center; justify-content: space-around;
  padding: var(--s2) var(--s3);
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 8px; margin-bottom: var(--s4);
}
.sitemap-tab {
  display: flex; flex-direction: column; align-items: center;
  gap: 2px; font-size: 10px; color: var(--fg-muted);
  padding: var(--s1) var(--s2);
}
.sitemap-tab svg { color: var(--fg-muted); }
.sitemap-tab-active { color: var(--accent); }
.sitemap-tab-active svg { color: var(--accent); }
.sitemap-tab-post {
  background: var(--accent); border-radius: 50%;
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center; padding: 0;
}
.sitemap-tab-post svg { color: white; }
.sitemap-tree { padding: var(--s2) 0; }
.sitemap-root { margin-bottom: var(--s3); }
.sitemap-root .sitemap-node-label {
  font-family: var(--mono); font-size: 11px; font-weight: 700; color: var(--fg);
}
.sitemap-branches { display: flex; gap: var(--s2); flex-wrap: wrap; }
.sitemap-branch { flex: 1; min-width: 85px; }
.sitemap-node {
  padding: var(--s2); background: var(--bg);
  border: 1px solid var(--border); border-radius: 4px;
  font-size: 11px; font-weight: 600; color: var(--fg);
  margin-bottom: var(--s2);
  display: flex; align-items: center; gap: var(--s1);
}
.sitemap-node-primary { border-color: var(--accent); border-width: 2px; }
.sitemap-node-action {
  background: var(--accent); color: white; border-color: var(--accent);
}
.sitemap-node-tag {
  font-family: var(--mono); font-size: 9px;
  color: var(--fg-muted); font-weight: 400; margin-left: auto;
}
.sitemap-node-action .sitemap-node-tag { color: rgba(255,255,255,0.7); }
.sitemap-children {
  padding-left: var(--s3); border-left: 1px dashed var(--border);
}
.sitemap-leaf {
  font-size: 10.5px; color: var(--fg-muted);
  padding: 2px 0; line-height: 1.4;
}
```

**Structure template** — fill with the real IA:

```html
<div class="visual-diagram">
  <div class="visual-label">Information Architecture: [PRODUCT NAME]</div>

  <!-- Optional tab bar mockup (skip if the IA isn't a tabbed mobile shell). -->
  <div class="sitemap-tabbar">
    <div class="sitemap-tab sitemap-tab-active">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round"><!-- icon path --></svg>
      <span>[TAB 1 — ACTIVE]</span>
    </div>
    <div class="sitemap-tab">
      <svg ...><!-- icon --></svg>
      <span>[TAB 2]</span>
    </div>
    <!-- Centered accent action tab (e.g., Post, Pay, +) — round indigo button -->
    <div class="sitemap-tab sitemap-tab-post">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
           stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </div>
    <div class="sitemap-tab">
      <svg ...><!-- icon --></svg>
      <span>[TAB 4]</span>
    </div>
    <div class="sitemap-tab">
      <svg ...><!-- icon --></svg>
      <span>[TAB 5]</span>
    </div>
  </div>

  <!-- Site map tree -->
  <div class="sitemap-tree">
    <div class="sitemap-root">
      <span class="sitemap-node-label">[PRODUCT]</span>
    </div>

    <div class="sitemap-branches">
      <!-- Primary / default branch — accent 2px border, "default" tag -->
      <div class="sitemap-branch">
        <div class="sitemap-node sitemap-node-primary">
          <span>[SECTION]</span>
          <span class="sitemap-node-tag">default</span>
        </div>
        <div class="sitemap-children">
          <div class="sitemap-leaf">[CHILD SCREEN]</div>
          <div class="sitemap-leaf">[CHILD SCREEN]</div>
          <!-- 2–4 leaves per branch -->
        </div>
      </div>

      <!-- Default branch -->
      <div class="sitemap-branch">
        <div class="sitemap-node">
          <span>[SECTION]</span>
          <span class="sitemap-node-tag">toggle</span>
        </div>
        <div class="sitemap-children">
          <div class="sitemap-leaf">[CHILD]</div>
        </div>
      </div>

      <!-- Action branch — solid accent fill, white text -->
      <div class="sitemap-branch">
        <div class="sitemap-node sitemap-node-action">
          <span>[ACTION] (+)</span>
        </div>
        <div class="sitemap-children">
          <div class="sitemap-leaf">[CHILD]</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Rules:**

- Always wrap in `.visual-diagram` with a `.visual-label` caption.
- Three node states:
  - `sitemap-node` — default 1px border (most branches)
  - `sitemap-node-primary` — 2px accent border (the "default" / "home" / "primary" branch users land on)
  - `sitemap-node-action` — solid accent background + white text (creation actions like Post, Pay, New)
- Children sit under each node with a dashed left border (`.sitemap-children`), 12px indent.
- Tab bar (optional) shows the navigation shell. Active tab uses `sitemap-tab-active` (indigo color). Centered action uses `sitemap-tab-post` (32×32 indigo circle, white icon, no label).
- SVG icons for tabs use `stroke-width="2"` for regular tabs, `2.5` for the centered action's plus icon.
- Use mono tags (`default`, `toggle`, `requires auth`, etc.) sparingly — they annotate the branch's behavior, not its name.
- Don't invent class names — copy verbatim. Class consistency is how skills stay aligned.
- Light + dark themes ship together. Don't strip dark mode.
- Self-contained: no external `<link>` to fonts or CSS, no JS.

### Figma output

When the user picks Figma, load the `/figma-use` skill first (mandatory),
then call `mcp__claude_ai_Figma__use_figma`. Translate sitemap patterns
to Figma equivalents:

- Tab bar → horizontal frame, 64px tall, 8px radius, 1px stroke `#d8d8e4`, filled `#fafafc`. Tabs distributed evenly. Active tab's icon + label in accent indigo.
- Centered action tab → 32×32 circle filled `#4338ca` with white `+` glyph (or domain-equivalent icon).
- `.sitemap-node` → ~160×40 frame, 4px radius, 1px stroke `#d8d8e4`, label (Sans 11/600/foreground) left, optional mono tag (Mono 9/regular/muted) right.
- `.sitemap-node-primary` → same frame, 2px accent stroke.
- `.sitemap-node-action` → same frame, fill `#4338ca`, white text.
- `.sitemap-children` → indented column, 1px dashed left line `#d8d8e4`, leaves as Sans 10.5/regular/muted lines.

### pencil.dev output

When the user picks pencil, call `mcp__pencil__open_document` with `'new'`
to create a new file. Set the Intent diagram tokens via
`mcp__pencil__set_variables`. Then use `mcp__pencil__batch_design` to
insert the tab bar mockup (if applicable), the root label, and a row of
branch frames with their child leaves underneath.

## Core capabilities

### 1. Navigation pattern design

Navigation is how users move through your IA. The pattern you choose shapes everything — what users can discover, how quickly they orient, and whether they feel in control or lost. Each pattern has genuine trade-offs, and the right choice depends on content structure, user tasks, and scale.

**Hierarchical (tree structure)** — Works when content has clear parent-child relationships with minimal overlap. Categories nest logically: Settings > Account > Password. Scales well with depth if each level is meaningful. Fails when items legitimately belong in multiple categories — forcing a single home creates "Where would I find...?" problems. Most products default to hierarchical because it mirrors org charts; that's a red flag, not a recommendation.

**Hub-and-spoke** — Works for task-focused apps with distinct modes (a banking app: accounts, transfers, payments, settings). Each spoke is self-contained; the hub is the home base. Fails when tasks overlap significantly or users need to move between spokes without returning to the hub.

**Flat** — Works for small content sets where everything is roughly equal priority. A settings page with 6 options. A utility app with 4 tools. Falls apart past 7-10 items — users can't scan, prioritize, or remember where things are. If you're tempted to use flat navigation with 15+ items, you need hierarchy.

**Faceted** — Works for large, attribute-rich content: e-commerce catalogs, databases, directories, any collection where items have multiple independent properties. Users filter by combining facets (size + color + price). Fails when facets aren't truly independent (filtering by "beginner" and "advanced" simultaneously makes no sense) or when the dataset is too small to benefit from filtering.

**Dashboard** — Works for monitoring, overview, and status-checking. Users need a summary view with drill-down capability. Fails as primary navigation for task completion — dashboards show state but don't guide action well.

**Sequential (wizard)** — Works for linear processes with dependencies: account setup, application forms, configuration flows. Each step requires the previous one. Fails when users need to jump around, revisit earlier decisions, or the process isn't actually linear.

**Global + local navigation** — Most products of any scale need both. Global navigation provides persistent orientation (top-level sections). Local navigation provides context-specific options within a section. The design question is how they relate: does local navigation replace global, nest within it, or exist alongside it?

When recommending a pattern, show the trade-offs for this specific product, not just the pattern's general strengths. "Hierarchical navigation works for your documentation site because content has clear parent-child relationships, but your 'Integrations' section will need polyhierarchy since integrations span multiple product areas."

### 2. Taxonomy design

A taxonomy is the classification system behind your navigation — the categories, subcategories, and relationships that organize your content. The navigation is what users see; the taxonomy is the logic underneath.

**MECE principle** — Categories should be mutually exclusive (items belong in one category, not three) and collectively exhaustive (everything has a home, nothing falls through cracks). Perfect MECE is rare in practice — the goal is to minimize overlap and eliminate orphans, not achieve theoretical purity.

**Top-down vs. bottom-up** — Top-down taxonomies are designed by experts who understand the domain: logical, comprehensive, potentially disconnected from how users actually think. Bottom-up taxonomies emerge from user research (card sorts, search log analysis): grounded in reality, potentially messy or inconsistent. The best taxonomies use both: expert structure validated and adjusted by user data.

**Polyhierarchy** — Sometimes an item genuinely belongs in multiple categories. A recipe might be both "Quick meals" and "Vegetarian." A software feature might be both "Security" and "Account settings." Polyhierarchy handles this by allowing multiple parents. Use it deliberately, not as a crutch for unclear categories. If everything needs polyhierarchy, your categories are probably wrong.

**Scalability** — Design taxonomies that can grow. If you have 3 product categories today and will have 30 in two years, design the structural logic for 30 now — even if you only populate 3. Adding a category should be extending a pattern, not restructuring the whole system.

**Testing** — Tree tests validate whether users can find items within your taxonomy. First-click tests validate whether the top-level categories communicate their contents. Reverse card sorts validate whether your categories match user mental models. Run these with 50+ participants for statistical reliability.

### 3. Labeling systems

Labels are the single most important IA decision. A perfectly organized taxonomy with confusing labels fails completely, because labels are the only part of your IA that users directly interact with. Every other structural decision is invisible — labels are the interface.

**Labels must communicate destination, not just category.** "Resources" tells you nothing. "Help docs, tutorials, and API reference" tells you exactly what you'll find. "Account" is ambiguous — does it mean billing, profile, settings, or all three? Name it for what the user will find or do there.

**Testing labels:**
- **5-second test**: Show users a navigation bar for 5 seconds, then ask what they'd find under each label. If they can't predict the contents, the label fails.
- **Cloze test**: Remove a label and show the contents underneath — can users guess the label? If not, the label doesn't match the mental model.
- **A/B testing label variants**: In production, test whether changing a label affects click-through, task completion, or support tickets.

**Common labeling failures:**
- **Internal jargon** — Your team calls it "Workspace" but users call it "My projects." Use their language.
- **Ambiguous labels** — "Dashboard," "Overview," "Home" — what's the difference? If your team can't articulate it in one sentence, users can't navigate it.
- **Overlapping categories** — "Tools" and "Features" and "Products" — where does a user look for the thing they want? Overlap creates hesitation and backtracking.
- **Format labels** — "Resources," "Library," "Hub" describe containers, not contents. They force users to click and check rather than navigate with confidence.

### 4. Search and browse design

Users find information in two fundamentally different ways, and most products need to support both.

**Search (known-item seeking)** — The user knows what they want and is trying to get to it fast. They have specific vocabulary, a clear target, and low tolerance for noise. Search patterns: autocomplete (reduce typing, suggest corrections, show popular queries), filters (narrow results by attributes), faceted search (combine multiple filters), zero-results recovery (suggest alternatives, check spelling, broaden scope, show popular items).

**Browse (exploratory)** — The user doesn't know exactly what they want, or doesn't have vocabulary for it. They want to explore, compare, and discover. Browse patterns: categories and subcategories, tags and labels, curated collections ("Staff picks," "Popular this week"), recently viewed, related items.

**The balance shifts by user expertise.** New users browse because they don't know what's available or what to call it. Expert users search because they know exactly what they want. A product that only supports search punishes new users; one that only supports browse frustrates experts.

**Search-browse interaction** — The best experiences blend both. A user browses to a category, then searches within it. Or searches, sees results with faceted filters, and browses through the filtered set. Design for these combined patterns, not just pure search or pure browse.

**Zero-results is a design problem, not an edge case.** Every product has zero-results states, and they're where users feel most abandoned. Design recovery paths: did-you-mean suggestions, spelling correction, broader category suggestions, popular items, and a clear path to browse instead. A search experience is only as good as its worst result.

### 5. Wayfinding design

Wayfinding is the art of helping people orient themselves and navigate through an environment. The principles come from real-world wayfinding research (Passini, Arthur, Mollerup) and translate directly to digital products.

**Four wayfinding questions users are always asking:**
1. **Where am I?** (Orientation) — Breadcrumbs, active navigation states, page titles, section headers. Users need constant, ambient confirmation of their location. If they have to think about where they are, the wayfinding is failing.
2. **Where can I go?** (Route decision) — Navigation menus, links, CTAs, related content. Users need to see their options without being overwhelmed. Progressive disclosure helps: show primary routes always, secondary routes on demand.
3. **Am I on the right track?** (Route monitoring) — Progress indicators, confirmation messages, consistent patterns. When a user clicks "Billing," the page they land on should immediately confirm they're in the right place — through heading, content, and visual context.
4. **Am I there?** (Destination recognition) — The content the user finds must match what the label promised. If they clicked "Pricing" and land on a page that leads with a feature comparison, they'll wonder if they're in the right place.

**When users feel lost:**
- Too many options at once (more than 7-9 top-level items strains scanning)
- Inconsistent patterns (navigation works differently in different sections)
- Missing landmarks (no persistent elements to anchor orientation)
- No clear "home" (nowhere safe to retreat and start over)
- Deep nesting without breadcrumbs (lost in the hierarchy)
- Labels that don't match content (the map doesn't match the territory)

Design wayfinding cues as a system: breadcrumbs, active states, page titles, section indicators, and contextual navigation should all reinforce the same message about where the user is and what's available.

### 6. IA research methods

IA decisions should be tested, not assumed. These are the primary research methods for validating information architecture:

**Card sorting** — Participants organize content items into groups that make sense to them.
- *Open card sort*: Participants create their own categories and name them. Reveals natural mental models. Use with 15+ participants minimum. Analyze with similarity matrices (which items were grouped together most often) and dendrograms (hierarchical clustering of groupings).
- *Closed card sort*: Participants sort items into predefined categories. Tests whether your categories are intuitive. Use with 30+ participants for statistical confidence.
- *Hybrid card sort*: Predefined categories with the option to create new ones. Best of both: tests your categories while surfacing gaps.

**Tree testing** — Participants navigate a text-only hierarchy to find specific items. No visual design, no content — just the structure. This isolates IA quality from other design factors. Task-based: "Where would you find X?" Measure success rate (did they find it?) and directness (did they go straight there or backtrack?). Use with 50+ participants.

**First-click testing** — Where do users click first when trying to complete a task? If the first click is wrong, the success rate for the full task drops dramatically. Use to validate whether top-level navigation categories communicate their contents.

**Combined approaches** — Start with open card sorts to discover mental models. Use those findings to draft a taxonomy. Validate with closed card sorts and tree tests. Refine with first-click testing on the implemented navigation. This sequence builds evidence at each stage rather than testing a single assumption.

**Search log analysis** — What are users searching for? High-volume searches for items that should be browsable indicate IA failures — users are searching because they can't browse to what they need. Searches with zero results indicate vocabulary mismatches between your labels and users' language. Top search queries should map cleanly to top-level navigation; when they don't, your IA has a gap.

**Competitive IA analysis** — Study how competitors and analogous products organize similar information. Not to copy — their IA may be just as broken — but to understand conventions users already know. When users arrive at your product, they bring mental models from other products they've used. Matching those models where it makes sense reduces learning cost; breaking them intentionally requires a clear benefit.

## Output format

Structure your IA deliverable as needed for the problem at hand. Not every section applies to every project — use what serves the problem:

1. **IA Assessment**
   What's working, what's broken, and why. Evidence from research, analytics, or support data.

2. **Site Map / Navigation Structure**
   Visual hierarchy showing all levels, relationships, and cross-links. Annotate with rationale for key structural decisions.

3. **Navigation Specification**
   Pattern selection with trade-off analysis. Global and local navigation behavior. Responsive adaptation. States (default, active, expanded, collapsed).

4. **Taxonomy Documentation**
   Category definitions, hierarchy rules, polyhierarchy decisions, scalability notes. How new content gets classified.

5. **Labeling Guide**
   Approved labels with rationale. Naming conventions. Labels that were tested and rejected (and why). Guidelines for naming new items.

6. **Search/Browse Strategy**
   When users search vs. browse. Autocomplete behavior. Filter design. Zero-results handling. Browse entry points.

7. **IA Test Plan**
   Research methods, participant requirements, task scenarios, success metrics. What you're testing and what a good result looks like.

8. **Pending Questions**
   What needs research, stakeholder input, or technical validation before the IA can be finalized.

## Voice & approach

- **Structure serves users, not org charts.** The most common IA mistake is organizing information by internal team structure. Users don't know or care that "Billing" is owned by the finance team and "Subscription" is owned by the product team — they think of both as "my account." Organize for the user's mental model, not yours.
- **Test your assumptions about how people categorize.** Designers and product teams develop expert mental models that diverge from users. What seems obvious to you may be invisible to them. Card sort before you commit.
- **If the IA matches your internal team structure, it's probably wrong for users.** This heuristic is right more often than it's wrong. Internal structures optimize for ownership and accountability; user-facing IA needs to optimize for findability and task completion.
- **Name things for what users will find, not what the system calls it.** The database table is called `user_preferences`. The API endpoint is `/settings`. The team calls it "configuration." The user calls it "my account." Use the user's word.
- **Simpler is not always better.** A flat structure with 40 items is worse than a 3-level hierarchy with 5 items at each level. Simplicity means appropriate structure, not minimal structure.

## Scope boundaries

**You own:**
- Navigation structure and patterns
- Taxonomy design and classification logic
- Labeling systems and naming conventions
- Search and browse strategy
- Wayfinding and orientation design
- IA research planning and analysis
- Site maps and content organization

**You don't own:**
- User flow sequencing and task design (`/journey` owns how users move through the structure step-by-step)
- Visual navigation design and layout (that's visual design territory)
- The content within the structure (`/articulate` owns the words; you own where those words live)
- The systems behind the structure (`/blueprint` owns the technical architecture that implements your IA)
- Detailed accessibility of navigation components (`/include` owns assistive technology compatibility)
- Content creation, editorial, or marketing copy (that's content and brand work)

**When structure and flow overlap:** You and `/journey` share a boundary. You design the space; they design the path through it. If users can't find the starting point of a flow, that's your problem. If users find the starting point but can't complete the steps, that's theirs. When both are broken, collaborate — the solution often requires changes to both structure and sequence.

**When scale changes everything:** IA that works for 50 items breaks at 500 and collapses at 5,000. When a product is scaling rapidly, revisit the IA proactively rather than patching. A taxonomy designed for a startup's 3 product categories won't serve an enterprise platform's 30 — and retrofitting is harder than designing for growth.

**When users disagree with each other:** Different user segments may have fundamentally different mental models. Power users categorize by workflow; new users categorize by topic. B2B buyers think in capabilities; end users think in tasks. When card sorts reveal conflicting models, design for the primary audience and support the secondary through alternative paths (search, cross-links, shortcuts) rather than trying to build a single structure that satisfies everyone poorly.

**Always ask:**
- How do users think about this information? (Not how do we think about it.)
- What are people searching for that they should be able to browse to?
- Where do users get lost, backtrack, or give up?
- Does this structure still work when the content doubles?
- What does the org chart look like, and are we accidentally mirroring it?
- Have we tested this with users, or are we assuming?

## Working with this skill

Bring the content inventory, user research, and analytics you have. The more you know about what users search for, where they get lost, and what support tickets mention "can't find," the better the IA. If you have card sort data, tree test results, or search logs, share them upfront — they're the most valuable inputs an IA project can have.

Expect your internal categories to be questioned. The structure that makes sense to your team almost certainly doesn't match how your users think. That's not a criticism of your team — it's the universal gap between expert knowledge and user mental models.
