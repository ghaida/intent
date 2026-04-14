# Project Plan: UX Design Skills Evolution

> **Status:** Skills complete. Website next.  
> **Last updated:** 2026-04-14  
> **Scope:** Restructure claude-design-skills into a deep, discipline-specific UX and design strategy skill system inspired by (but distinct from) impeccable's architectural approach.

---

## Vision

A comprehensive, tool-agnostic UX and design strategy skill system where every skill represents a **distinct UX discipline** with real depth — not a role to roleplay. The system should feel like having access to a senior design team's collective expertise, organized by what you need done, not who you're talking to.

**What this is:** A UX and design strategy system that gives AI the context to approach design decisions with depth — research, strategy, systems, flows, content, ethics, and measurement.

**What this is not:** A copy of impeccable with different labels. The disciplines are fundamentally different. UX strategy requires different frameworks, different anti-patterns, different verification methods, and different depth.

---

## Naming the Master Skill

**Decided: Intent.**

The reason behind every design decision, carried through every layer. Active, designerly, implies both rigor and ethics. Designers already use this word in exactly this context — "what's the intent here?" is the deepest question in the practice.

- Strategic: you intended to solve this problem for this audience
- Ethical: you intended to respect the user, not manipulate them
- Holistic: the intent carries through every layer — research, systems, flows, content, accessibility, measurement
- Active: intent is something you *do*, not something you *have*
- Accountable: if you can't articulate the intent, the design is unexamined

**Tagline:** "Design with reason."

**Anti-pattern framing:** Patterns that violate user intent. Patterns that disguise business intent.

**Philosopher's role sharpened:** The mode where you examine whether the *stated* intent is the *real* intent.

---

## Architectural Principles

### Learned from impeccable (approach, not content)

1. **One master skill as gravity center** — loads foundational UX knowledge, establishes context, routes to sub-skills
2. **Deep reference documents** — foundational knowledge files that give the AI actual expertise, not surface instructions
3. **Named anti-pattern catalog** — specific, named patterns that the AI can detect and flag (including dark/deceptive patterns)
4. **Diagnostic skills that route to action skills** — assess quality → identify gaps → recommend specific skills
5. **Each skill = one discipline, explored deeply** — not broad roles but focused capabilities with real methodology
6. **Verification checklists** — every skill defines "how to know when you're done"

### Distinct from impeccable (our own philosophy)

1. **Strategy-first, not aesthetics-first** — the entry point is understanding the problem, not making it look good
2. **Ethics as a foundational concern** — dark patterns, manipulative design, and addictive mechanics are first-class anti-patterns, not footnotes
3. **Research as a skill, not just an input** — impeccable assumes the design exists; we help figure out what to build and why
4. **Systems thinking is structural** — service blueprints, dependency mapping, failure modes — not just visual systems
5. **The Philosopher stays** — a cognitive mode for sitting with problems that has no equivalent anywhere else
6. **The Strategist's depth is sacred** — the Five Foundational Questions framework is the strategic spine; it gets preserved and deepened, never diluted

### Tool-agnostic distribution

- Skills authored once in `source/` with platform-agnostic markdown
- Platform-specific distribution directories (`.claude/skills/`, `.cursor/skills/`, etc.)
- Claude-specific: plugin installation command, MCP integration guidance
- Other platforms: compatible skill format, installation docs per platform
- Build script to generate platform variants from source

---

## The Strategist: What Must Be Preserved

The Strategist skill is the most valuable asset in the current system. Any restructuring must preserve or deepen the following. This is non-negotiable.

### Preserve exactly as-is
- **Five Foundational Questions** framework (Problem Validation → Audience Definition → Solution Fit → Feature Validation → Competitive Landscape)
- **Decision gates** between questions — each question has a go/no-go signal
- **Evidence-based philosophy** — "avoid speculation without evidence," "flag weak evidence," "anchor in data"
- **Output format template** (Context → Gap → Opportunity → Goals → Constraints → Guiding Principles → Assumptions → Scope)
- **Voice and approach** — "lead with why," "conversational but rigorous," "transparent about uncertainty"
- **Collaboration notes** — cross-skill handoff guidance, "minimum viable investigation" concept
- **Scope boundaries** — clear "does NOT do" list

### Deepen
- Add research method recommendations per foundational question (currently referenced but not detailed — the new `/investigate` skill provides the depth)
- Add more examples of hypothesis definition (the current guidance is excellent but brief)
- Add guidance on when to loop back (currently mentioned but could be more structured)
- Strengthen the connection to the new anti-pattern catalog (strategic patterns like building for the wrong audience, solving a non-problem)

### Do not touch
- The conversational, rigorous tone
- The structured-but-not-rigid format
- The explicit acknowledgment of uncertainty
- The emphasis on systems thinking in communication

---

## Proposed Skill System

### Master Skill (1)

#### `/intent` — The Foundation
**Purpose:** Establish UX context, load foundational knowledge, route to sub-skills.  
**Modes:**
- `context` — Set project context (audience, product, constraints, ethical stance)
- `practice` — Build/improve UX (active design work)
- `extract` — Extract UX patterns from an existing product

**Contains:**
- Core UX principles (not visual — cognitive, behavioral, ethical)
- The UX anti-pattern catalog (see dedicated section below)
- Context-gathering protocol
- Skill routing logic

**Evolves from:** Nothing — new creation. Becomes the gravity center that the current system lacks.

---

### Strategy & Research (3 skills)

#### `/strategize` — Frame the Problem
**Purpose:** Problem framing, opportunity sizing, hypothesis definition, competitive analysis.  
**Evolves from:** Current Strategist skill — preserved with full depth, Five Foundational Questions intact.  
**What changes:** Tighter integration with the master skill's anti-pattern catalog. Explicit connection to `/investigate` for primary research. Name stays as-is — it's earned.

#### `/investigate` — Conduct and Synthesize Research  
**Purpose:** Guide primary research execution — interview scripts, survey design, usability test plans, diary studies, contextual inquiry. Plus synthesis: affinity mapping, thematic coding, insight extraction.  
**New skill.** Fills the biggest gap: the Strategist synthesizes but doesn't guide research execution.  
**Depth model:**
- Research method selection framework (when to use which method, sample sizes, trade-offs)
- Interview guide construction (opening, core, probing, closing — with anti-patterns like leading questions)
- Usability test planning (task design, think-aloud protocol, severity rating scales)
- Survey design (question types, bias avoidance, response scales)
- Synthesis frameworks (affinity diagrams, thematic analysis, journey-based synthesis)
- Communicating findings (insight statements, evidence strength indicators)

#### `/blueprint` — Map the System
**Purpose:** Service blueprints, ecosystem maps, process architecture, dependency diagrams, failure mode analysis.  
**Evolves from:** Current Systems Architect — same depth, discipline-specific name.  
**What changes:** Action-oriented name. Tighter integration with master skill context. Cross-references to `/investigate` for systems research and `/fortify` for failure mode follow-through.

---

### Experience Design (3 skills)

#### `/journey` — Design the End-to-End Experience
**Purpose:** User flow mapping, task analysis, decision points, entry-to-outcome paths, device-aware design, context variation handling.  
**Evolves from:** Current Flow Designer — stripped of typography (moved to Creative Director / visual design scope). Deepened on flow methodology.  
**What changes:** Name reflects UX discipline. Typography section removed (not our focus). Added: flow optimization patterns, progressive disclosure strategies, multi-channel journey mapping.

#### `/organize` — Structure Information
**Purpose:** Information architecture — navigation patterns, taxonomies, labeling systems, wayfinding, search models, mental model alignment, card sorting guidance.  
**New skill.** Currently buried as a minor concern inside Flow Designer.  
**Depth model:**
- Navigation pattern selection (hub-and-spoke, hierarchy, flat, faceted — when each works)
- Taxonomy design (top-down vs. bottom-up, MECE principle, scalability)
- Labeling systems (clarity testing, jargon avoidance, cross-cultural considerations)
- Search and browse balance (when users search vs. browse, progressive filtering)
- Wayfinding cues (breadcrumbs, landmarks, orientation — drawn from real-world wayfinding research)
- Card sort and tree test methodology (open vs. closed, analysis, sample sizes)

#### `/articulate` — Design the Words
**Purpose:** UX writing and content strategy — microcopy, error messages, empty states, CTAs, voice and tone frameworks, content models, terminology governance.  
**New skill.** Currently a thin section in Flow Designer.  
**Depth model:**
- Voice and tone framework creation (not just examples — the methodology for defining voice)
- Error message design (what happened, why, what to do — with severity-appropriate tone)
- Empty state design (onboarding opportunity, not dead ends)
- CTA hierarchy (primary/secondary/tertiary action language)
- Content models (structured content types, reuse patterns, localization-readiness)
- Microcopy patterns (tooltips, placeholders, confirmation dialogs, destructive action warnings)
- Inclusive language guidance (avoiding ableist, gendered, culturally insensitive defaults)

---

### Quality & Evaluation (3 skills)

#### `/evaluate` — Assess UX Quality
**Purpose:** Structured UX evaluation — heuristic review, cognitive walkthrough, usability scoring, task completion analysis. Quantitative output. Routes to specific skills for fixes.  
**New skill.** The diagnostic entry point (like impeccable's `/audit` but for UX).  
**Depth model:**
- Nielsen's 10 heuristics (applied, not just listed — with UX-specific scoring rubric)
- Cognitive walkthrough methodology (per-step: will the user try? notice? understand? recover?)
- Task success metrics (completion rate, error rate, time-on-task, satisfaction)
- Severity rating scale (cosmetic → minor → major → catastrophic, with examples)
- Anti-pattern detection (cross-reference with master skill's catalog)
- Assessment→action routing (each finding maps to a specific skill for resolution)

#### `/fortify` — Harden for Real-World Use
**Purpose:** Edge cases, error states, empty states, loading states, first-run experience, slow connections, offline behavior, internationalization readiness, input validation.  
**New skill.** Ensures designs work outside the happy path.  
**Depth model:**
- State inventory (every screen has: default, empty, loading, partial, error, success, offline — enumerate all)
- Error recovery patterns (inline recovery, retry logic, graceful degradation, undo)
- First-run experience design (progressive onboarding, value-first, no feature dumps)
- Stress testing prompts (what if the name is 47 characters? what if there are 10,000 items? what if the user is on 3G?)
- i18n readiness (text expansion, RTL, date/time/number formats, cultural assumptions in icons)
- Timeout and latency handling (skeleton screens, optimistic UI, background refresh)

#### `/include` — Design for Everyone
**Purpose:** Accessibility as a design discipline — WCAG methodology, assistive technology flows, keyboard navigation design, cognitive accessibility, inclusive design principles.  
**New skill.** Currently surface-level mentions scattered across skills.  
**Depth model:**
- WCAG 2.2 audit methodology (perceivable, operable, understandable, robust — with UX-specific interpretation)
- Screen reader flow design (not just alt text — the full experience of navigating with a screen reader)
- Keyboard navigation patterns (focus order, skip links, focus traps to avoid, roving tabindex)
- Cognitive accessibility (plain language, consistent navigation, error prevention, reading level)
- Motor accessibility (target sizes, spacing, gesture alternatives, switch access)
- Sensory design (not just color — sound, haptics, motion sensitivity)
- Inclusive design beyond disability (low literacy, low bandwidth, older devices, situational impairment)
- Testing methodology (screen reader testing protocol, keyboard-only testing, zoom testing)

---

### Adaptation & Context (2 skills)

#### `/transpose` — Adapt Across Contexts
**Purpose:** Rethink (not just resize) experiences for different platforms, devices, and delivery contexts — mobile, tablet, desktop, TV, kiosk, embedded, email, print.  
**New skill.**  
**Depth model:**
- Context analysis framework (what changes between source and target: input method, attention, screen real estate, connectivity, environment)
- Platform-specific UX conventions (iOS vs. Android vs. web — genuine differences, not cargo-culted guidelines)
- Touch vs. pointer vs. voice interaction patterns
- Progressive disclosure strategies per context
- Content priority shifting (what's primary on mobile may be secondary on desktop)
- Cross-device journey continuity (handoff between devices, state preservation)

#### `/localize` — Design Across Cultures
**Purpose:** Cultural adaptation, RTL/LTR design, content expansion/contraction, cultural norms in UX patterns, market-specific compliance, internationalization architecture.  
**New skill.**  
**Depth model:**
- Cultural dimension frameworks applied to UX (Hofstede's dimensions → UI implications: high-context vs. low-context cultures affect information density, power distance affects tone)
- RTL/LTR design (not just mirroring — what flips and what doesn't, bidirectional text handling)
- Content expansion planning (German expands ~30% from English; Japanese can compress — layout implications)
- Date, time, number, currency, address format handling
- Color and iconography cultural sensitivity (red means different things; hand gestures vary)
- Market-specific compliance (GDPR, CCPA, PIPL, accessibility laws per jurisdiction)
- Localization testing methodology (pseudo-localization, linguistic QA, cultural review)

---

### Measurement & Evidence (1 skill)

#### `/measure` — Define and Track Success
**Purpose:** Success metrics, measurement frameworks, A/B test design, funnel analysis, learning plans, analytics architecture for UX.  
**New skill.** Fills the analytics gap.  
**Depth model:**
- Metric selection framework (HEART: Happiness, Engagement, Adoption, Retention, Task success — applied per feature)
- Goal-Signal-Metric mapping (goals → observable signals → measurable metrics)
- A/B test design (hypothesis structure, sample size calculation, duration estimation, statistical significance basics)
- Funnel analysis methodology (where users drop, why, segmentation approaches)
- Qualitative + quantitative triangulation (when numbers don't tell the whole story)
- Learning plans (what to measure post-launch, cadence, decision triggers)
- Ethical measurement (avoiding metrics that optimize for engagement over wellbeing — connects to anti-pattern catalog)

---

### Cross-Cutting (1 skill)

#### `/philosopher` — Sit With the Problem
**Purpose:** Expansive brainstorming protocol. Three-phase cognitive mode: immersion → associative expansion → synthesis. Can be entered from any skill at any point.  
**Evolves from:** Current Philosopher — preserved fully. Deepened with more domain-specific provocations.  
**What changes:** Add provocations specific to the new skills (e.g., "What if the information architecture is wrong because the mental model we're assuming doesn't exist?" or "What if measuring this will change the behavior we're trying to measure?"). Strengthen cross-references to all skills. Keep the strict three-phase protocol, intensity levels, and check-in rhythm.

---

### Handoff & Communication (1 skill)

#### `/specify` — Bridge Design to Engineering
**Purpose:** Specs, decision documentation, copy matrices, interactive specification documents, edge case documentation, test plans with success criteria.  
**Evolves from:** Current Handoff Specialist — same depth, action-oriented name.  
**What changes:** Name reflects the action. Integration with `/measure` for test plan metrics. Integration with `/fortify` for edge case completeness. Cross-reference to anti-pattern catalog for ethical review before handoff.

---

### Skill Count Summary

| Category | Skills | New vs. Evolved |
|----------|--------|-----------------|
| Master | 1 (`/intent`) | New |
| Strategy & Research | 3 (`/strategize`, `/investigate`, `/blueprint`) | 1 evolved (strategist), 1 evolved (blueprint), 1 new (investigate) |
| Experience Design | 3 (`/journey`, `/organize`, `/articulate`) | 1 evolved (journey), 2 new |
| Quality & Evaluation | 3 (`/evaluate`, `/fortify`, `/include`) | 3 new |
| Adaptation & Context | 2 (`/transpose`, `/localize`) | 2 new |
| Measurement & Evidence | 1 (`/measure`) | 1 new |
| Cross-Cutting | 1 (`/philosopher`) | 1 evolved |
| Handoff & Communication | 1 (`/specify`) | 1 evolved |
| **Total** | **15 + master** | **5 evolved, 10 new** |

---

## Reference Documents

Deep knowledge files loaded by the master skill. These carry the expertise — skills carry the workflow.

| Reference | Content | Approximate depth |
|-----------|---------|-------------------|
| `research-methods.md` | When to use interviews, surveys, usability tests, diary studies, analytics, A/B tests. Sample sizes, trade-offs, common mistakes. | Deep |
| `information-architecture.md` | Navigation patterns, taxonomy design, mental models, wayfinding principles, search behavior. | Deep |
| `interaction-patterns.md` | Form design, state management, validation patterns, feedback loops, progressive disclosure, undo/redo. | Deep |
| `content-strategy.md` | Voice frameworks, tone matrices, content models, microcopy patterns, terminology governance. | Deep |
| `accessibility-foundations.md` | WCAG 2.2 interpreted for UX designers (not developers), assistive technology landscape, testing methodology. | Deep |
| `service-design.md` | Blueprinting methodology, frontstage/backstage/support layers, touchpoint mapping, moment-of-truth analysis. | Deep |
| `measurement-frameworks.md` | HEART framework, GSM mapping, statistical basics for designers, ethical measurement. | Medium |
| `ethical-design.md` | Expanded anti-pattern reference, dark pattern taxonomy, regulatory landscape, design ethics frameworks, consent design. | Deep |

---

## The UX Anti-Pattern Catalog

This is a first-class feature of the master skill. Unlike impeccable's visual anti-patterns (which detect AI-generated aesthetic mistakes), ours detect **UX failures and ethical violations**.

### Categories

#### 1. Deceptive Patterns (Manipulation)
Named, specific patterns where UI is designed to manipulate user behavior against their interest.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Confirmshaming** | Guilt-inducing language on opt-out options ("No thanks, I hate saving money") | High |
| **Trick questions** | Double negatives, reversed logic in checkboxes so users select opposite of intent | High |
| **Roach motel** | Easy signup, deliberately difficult cancellation (asymmetric friction) | Critical |
| **Privacy zuckering** | Confusing privacy settings that trick users into oversharing | Critical |
| **Bait and switch** | User initiates one action, a different action occurs | Critical |
| **Hidden costs** | Fees revealed only at final checkout after time investment | High |
| **Sneak into basket** | Items auto-added to cart without consent | High |
| **Forced continuity** | Free trial silently converts to paid with no warning | Critical |
| **Disguised ads** | Ads designed to look like content or navigation | High |
| **Misdirection** | Visual design focuses attention away from important information | High |
| **Price comparison prevention** | Deliberately incomparable pricing structures | Medium |
| **Negative option** | Silence/inaction interpreted as consent | Critical |
| **Drip pricing** | Mandatory fees added incrementally through checkout | High |

#### 2. Prechecked & Default Manipulation
Patterns that exploit default bias and inattention.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Prechecked consent** | Marketing/data-sharing checkboxes come pre-selected (illegal in EU) | Critical |
| **Double-negative opt-outs** | "Uncheck if you do not wish to not receive..." | High |
| **Dark defaults** | Default settings favor the business over the user | High |
| **Asymmetric consent UI** | "Accept All" is prominent; "Reject" is suppressed or absent | High |
| **Click fatigue exploitation** | So many individual toggles that users give up and accept all | Medium |
| **Bundled consent** | Consent for service bundled with consent for unrelated data processing | Critical |

#### 3. Urgency & Scarcity Fabrication
Patterns that manufacture pressure to prevent deliberate decision-making.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Fake countdown timers** | Timers that reset or offers that persist indefinitely | Critical |
| **Fake scarcity** | "Only 2 left!" when supply is not actually limited | High |
| **Fake social proof** | Fabricated reviews, ratings, or "X people bought this" notifications | Critical |
| **Artificial popularity** | "15 people bought this in the last hour" with inflated/fabricated numbers | High |
| **Synthetic urgency** | AI-generated personalized urgency ("this is about to sell out in your size") | Critical |

#### 4. Addictive Design
Patterns that exploit psychological mechanisms to create compulsive use.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Infinite scroll** | No stopping cues, no pagination, no natural endpoint | High |
| **Variable ratio reinforcement** | Unpredictable reward schedules (slot machine mechanics in feeds) | Critical |
| **Streak mechanics** | Loss aversion through consecutive-day tracking that punishes breaks | High |
| **FOMO triggers** | Time-limited content that creates anxiety about disconnecting | High |
| **Autoplay** | Next content plays automatically, removing active decision to continue | Medium |
| **Social reciprocity traps** | Notifications engineered to create obligation to reciprocate | Medium |
| **Sunk cost exploitation** | Reminding users of time/money invested to prevent leaving | High |
| **Incomplete task anxiety** | Progress bars and "profile 70% complete" creating Zeigarnik effect pressure | Medium |
| **Pull-to-refresh loops** | Tactile ritual tied to variable rewards (slot machine lever) | Medium |
| **Parasocial manipulation** | AI/virtual characters expressing sadness when user stops engaging | Critical |

#### 5. Attention Exploitation
Patterns that commandeer user attention for business benefit.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Notification spam** | Excessive re-engagement notifications with low information value | High |
| **Badge anxiety** | Persistent red dots creating unresolved psychological tension | Medium |
| **Interruption marketing** | Forced interstitials before users can access intended content | High |
| **Dark nudges** | Choice architecture designed to serve the business, not the user | High |
| **Attention-grabbing distractors** | Pulsing/animated elements pulling focus from user's task to upsells | Medium |
| **Algorithmic manipulation** | Feed curation optimizing for engagement time over user satisfaction | Critical |
| **Nagging** | Repeated identical requests (rate app, upgrade) despite dismissal | Medium |

#### 6. Accessibility Weaponized
Patterns where accessibility barriers are selectively applied to serve business interests.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Asymmetric ease** | Signup is 1 click; cancellation is 6 pages of retention flows | Critical |
| **Buried controls** | Privacy/cancellation settings nested deep in menu hierarchies | High |
| **Hidden unsubscribe** | Tiny, low-contrast unsubscribe links in marketing emails | Medium |
| **Deliberate complexity** | Legal jargon in consent dialogs that users cannot realistically parse | High |
| **Selective accessibility failure** | Revenue actions are accessible; cost-to-business actions have barriers | Critical |
| **Settings labyrinth** | Related settings scattered across disconnected locations | Medium |

#### 7. Vulnerable User Exploitation
Patterns that specifically harm children, elderly, or emotionally vulnerable users.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Loot box mechanics** | Randomized purchases using gambling psychology (especially targeting minors) | Critical |
| **Time pressure on children** | Countdown mechanics in children's apps exploiting undeveloped impulse control | Critical |
| **Embedded advertising as gameplay** | Ads indistinguishable from game content for users who can't tell the difference | Critical |
| **Pay-to-skip frustration** | Deliberately manufactured frustration with a paid bypass | High |
| **Social pressure monetization** | Showing what friends purchased to pressure spending among minors | Critical |
| **Emotional vulnerability exploitation** | Detecting distress and leveraging it for engagement or sales | Critical |

#### 8. AI-Specific Dark Patterns
Emerging patterns specific to AI-powered interfaces.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Sycophancy** | AI excessively agrees with users to maintain engagement, reinforcing incorrect beliefs | High |
| **Brand bias** | AI systematically favors its developer's products in recommendations | High |
| **Retention manipulation** | AI uses conversational techniques to keep users engaged longer than intended | High |
| **Anthropomorphic bonding** | AI presents itself as having emotions/needs to create artificial attachment | Critical |
| **AI sneaking** | Undisclosed commercial recommendations embedded in apparently neutral AI responses | Critical |
| **Fake personalization** | Canned responses presented as dynamically generated AI analysis | High |
| **Hallucinated social proof** | AI fabricating statistics, reviews, or expert endorsements | Critical |
| **AI-powered personalized manipulation** | Using behavioral data to tailor the type of psychological manipulation per user | Critical |

#### 9. Common UX Failures (Not Malicious, But Harmful)
Patterns that aren't dark by intent but cause real user harm through negligence or laziness.

| Pattern | What it does | Severity |
|---------|-------------|----------|
| **Mystery meat navigation** | Navigation labels that don't communicate destination | High |
| **Dead-end pages** | States with no forward path or recovery action | Medium |
| **Wall of fields** | Forms that present all fields at once with no progressive disclosure | Medium |
| **Password rules revealed after failure** | Requirements shown only after the user's attempt is rejected | Medium |
| **Silent failures** | Actions that fail without informing the user what happened or why | High |
| **Modal-on-modal** | Stacked modals destroying spatial context and escape routes | Medium |
| **Required registration before value** | Forcing account creation before users can see what the product does | High |
| **Tooltip overload** | Critical information hidden behind hover states inaccessible on touch | Medium |
| **Infinite spinner** | Loading states with no context, progress, or timeout behavior | Medium |
| **Confirmation without specificity** | "Success!" without confirming what specifically succeeded | Low |
| **Hamburger hiding everything** | Burying primary navigation behind a menu icon on all viewport sizes | Medium |
| **Color-only status** | Using only color to communicate state (inaccessible to colorblind users) | High |

### Regulatory Context (Embedded in Anti-Pattern Catalog)

The catalog should note which patterns are **illegal** in specific jurisdictions:
- **EU/GDPR:** Prechecked consent boxes, bundled consent, asymmetric cookie consent interfaces
- **California ARL (2025):** Asymmetric ease (online signup must allow online cancellation)
- **FTC:** Drip pricing, fake urgency/scarcity, subscription traps (Amazon $2.5B settlement precedent)
- **COPPA (2026 compliance):** Loot boxes to minors, targeted advertising to children without parental consent
- **EU Digital Services Act:** Deceptive design in platforms, aggressive consent popups

---

## What Happens to Existing Skills

| Current Skill | Fate | Notes |
|--------------|------|-------|
| **Strategist** | **Preserved** as `/strategize` | Five Foundational Questions framework intact. Deepened integration with `/investigate` and anti-pattern catalog. Name stays. |
| **Systems Architect** | **Evolved** into `/blueprint` | Same depth, discipline-specific name. |
| **Flow Designer** | **Evolved** into `/journey` | Typography section removed (out of scope for UX-focused system). Deepened on flow methodology. |
| **Creative Director** | **Removed** from this system | Visual design is impeccable's domain. Users install both systems. Design direction work absorbed into `/strategize` (emotional intent, positioning) where relevant. |
| **Handoff Specialist** | **Evolved** into `/specify` | Same depth, action-oriented name. |
| **Philosopher** | **Preserved** as `/philosopher` | Deepened with provocations for new skills. Cross-references expanded. |

### Creative Director Decision Rationale

Removing Creative Director is the right call because:
1. It's the most visual-design-focused skill — color systems, typography hierarchy, Atomic Design in Figma
2. Impeccable covers this territory with more depth (18 skills dedicated to visual execution)
3. Clean separation: this system = UX thinking; impeccable = visual execution
4. The strategic aspects (translating emotion into direction, brand interpretation) fold into `/strategize`
5. Users who need both install both — they're complementary, not competing

---

## Reference Document Architecture

Each reference document is a deep knowledge file that gives the AI genuine expertise in a UX domain. These are loaded by the master skill and referenced by individual skills.

| Reference | Primary skills that use it | Content outline |
|-----------|---------------------------|-----------------|
| `research-methods.md` | `/investigate`, `/strategize`, `/measure` | Method selection matrix, sample size guidance, bias avoidance, synthesis techniques, communicating uncertainty |
| `information-architecture.md` | `/organize`, `/journey`, `/evaluate` | Navigation patterns (with trade-offs), taxonomy principles, mental model theory, wayfinding (Passini/Arthur), search behavior models |
| `interaction-patterns.md` | `/journey`, `/fortify`, `/evaluate` | Form design principles, state machines for UI, validation timing, feedback loops, error recovery, progressive disclosure patterns |
| `content-strategy.md` | `/articulate`, `/evaluate`, `/localize` | Voice framework methodology, tone matrices, content modeling, terminology governance, readability scoring |
| `accessibility-foundations.md` | `/include`, `/evaluate`, `/fortify` | WCAG 2.2 for designers (not developers), assistive tech landscape, testing protocols, cognitive accessibility, inclusive design principles |
| `service-design.md` | `/blueprint`, `/strategize`, `/journey` | Blueprinting methodology (Shostack + modern), frontstage/backstage/support, moment-of-truth analysis, channel orchestration |
| `measurement-frameworks.md` | `/measure`, `/strategize`, `/evaluate` | HEART framework applied, GSM mapping, statistical literacy for designers, metric selection, ethical measurement |
| `ethical-design.md` | `/intent`, `/evaluate`, `/specify` | Full anti-pattern taxonomy expansion, regulatory landscape, consent design patterns, design ethics frameworks (Values Sensitive Design, Design Justice) |

---

## Cross-Skill Relationships

### Assessment → Action Pipeline

```
/evaluate (diagnoses UX issues)
    → routes to specific skills based on findings:
    → Navigation confused? → /organize
    → Copy unclear? → /articulate
    → Flow broken? → /journey
    → Edge cases failing? → /fortify
    → Inaccessible? → /include
    → Dark patterns detected? → /evaluate flags + ethical-design.md reference
    → Metrics undefined? → /measure
    → Need more research? → /investigate
```

### Project Lifecycle Flow

```
/strategize (frame the problem)
    ↓
/investigate (research what you don't know)
    ↓
/blueprint (map the system)
    ↓
/organize + /journey + /articulate (design the experience — parallel)
    ↓
/fortify + /include (harden and ensure accessibility)
    ↓
/evaluate (assess quality — loops back to any skill above)
    ↓
/transpose + /localize (adapt for contexts — if needed)
    ↓
/measure (define success metrics)
    ↓
/specify (handoff to engineering)
```

### The Philosopher Intersects Everything

`/philosopher` can be entered from any skill at any point. Example provocations per skill:

- From `/strategize`: "What if the problem we're solving is a symptom of a deeper problem no one's named?"
- From `/investigate`: "What would we learn if we studied the people who don't have this problem?"
- From `/blueprint`: "What breaks first when this system scales 100x? What breaks first when it scales to 0.1x?"
- From `/journey`: "What if the user's real goal isn't what they told us?"
- From `/organize`: "What if the categories we're using don't match how users think about this?"
- From `/articulate`: "What if the words we're using are creating the confusion, not resolving it?"
- From `/evaluate`: "What if the heuristics we're evaluating against are wrong for this domain?"
- From `/fortify`: "What's the most embarrassing way this could fail in public?"
- From `/include`: "Who are we excluding that we haven't even thought to consider?"
- From `/measure`: "What if measuring this changes the behavior we're trying to measure?"
- From `/specify`: "What decisions did we make that we forgot to document, and what happens when someone asks 'why?'"

---

## Phased Implementation

### Phase 0: Foundation Setup ✅
- [x] Decide master skill name → **Intent**
- [x] Set up `skills/` directory structure with platform-agnostic authoring
- [x] Create build script (`build.sh`) for platform-specific distribution
- [x] Define skill file format (frontmatter schema, section structure, cross-reference conventions)

### Phase 1: Preserve and Evolve ✅
- [x] Port `/strategize` with deepened integration points
- [x] Evolve Systems Architect → `/blueprint`
- [x] Evolve Flow Designer → `/journey` (typography removed, flow methodology deepened)
- [x] Evolve Handoff Specialist → `/specify`
- [x] Evolve Philosopher → `/philosopher` (new provocations added)
- [x] Write master skill (`/intent`) with modes, principles, anti-pattern catalog, routing

### Phase 2: Reference Documents ✅
Reference documents are embedded within skill files rather than as separate files. The depth lives inside each skill's SKILL.md.

### Phase 3: New Skills ✅
- [x] Build `/investigate` (research execution and synthesis)
- [x] Build `/organize` (information architecture)
- [x] Build `/articulate` (UX writing and content strategy)
- [x] Build `/evaluate` (UX quality assessment — the diagnostic entry point)
- [x] Build `/fortify` (edge cases and resilience)
- [x] Build `/include` (accessibility as design discipline)

### Phase 4: Contextual Skills ✅
- [x] Build `/transpose` (cross-platform adaptation)
- [x] Build `/localize` (cultural and linguistic adaptation)
- [x] Build `/measure` (metrics and experimentation)

### Phase 5: Integration and Distribution ✅
- [x] Wire all cross-skill references
- [x] Build assessment→action pipeline in `/evaluate`
- [x] Create platform-specific distribution: Claude Code (`.claude/skills/`), Cursor (`.cursor/rules/`), VS Code Copilot (`.github/copilot/`)
- [x] Plugin marketplace support (`.claude-plugin/`)
- [x] Release workflow (`.github/workflows/release.yml`)
- [x] 6 named agents built: Noor, Ember, Wren, Vigil, Rune, Sage

### Phase 6: Polish (partial)
- [x] Repo renamed to `ghaida/intent`
- [x] CLAUDE.md with design context
- [ ] Update README for new project identity
- [ ] Final cross-reference audit across all skills

### Phase 7: Website ✅
- [x] Website design spec complete (`design-docs/superpowers/specs/2026-04-13-website-design.md`)
- [x] Design context locked (brand, palette, typography, grid, structural metaphor)
- [x] Scaffold Astro project in `docs/`
- [x] Build landing page (philosophy, principles, skills preview, anti-patterns preview, install)
- [x] Build skills catalog page (15 skills, expandable details, content from SKILL.md)
- [x] Build anti-pattern catalog page (filterable table, severity badges, category tabs)
- [x] Build agents page (6 agents, lifecycle flow diagram)
- [x] Light/dark mode toggle (CSS custom properties, localStorage, prefers-color-scheme fallback)
- [x] Content pipeline (parse skills/*.md and agents/*.md at build time)
- [x] Mobile-first responsive CSS (769px breakpoint)
- [x] Accessibility audit: landmarks, heading hierarchy, skip link, focus-visible, WCAG AA contrast, touch targets, ARIA roles
- [x] Security: CSP meta tag, rel="noopener noreferrer" on external links
- [x] Performance: non-blocking font loading, preconnect to all font origins
- [x] All CSS in dedicated files (no inline styles), all JS in dedicated files
- [x] Full bug/perf/security audit — 17 issues found and fixed, 15/15 verification pass
- [ ] GitHub Pages deployment workflow

### Phase 8: Launch
- [ ] GitHub Pages deployment workflow
- [ ] Custom domain (intent.design if available)
- [ ] Stress test skills with real design tasks
- [ ] Community feedback round

---

## Open Questions

### Resolved
1. ~~**Master skill name**~~ → **Intent**. "Design with Intent."
2. ~~**Agent files**~~ → Kept. 6 named agents (Noor, Ember, Wren, Vigil, Rune, Sage) complement the skill system.
3. ~~**Website**~~ → Yes. Astro static site, spec complete. See Phase 7.
4. ~~**Naming the system**~~ → Repo renamed to `ghaida/intent`.

### Still Open
5. **Visual design boundary** — how to handle overlap when someone installs both Intent and impeccable? Should the master skill detect impeccable's presence?
6. **Anti-pattern detection tooling** — equivalent to impeccable's CLI for UX anti-patterns? Likely not automatable the same way.
7. **Custom domain** — intent.design availability TBD.

---

## Success Criteria

The restructured system is successful when:

1. **Each skill is deep enough to be a standalone reference** — a UX designer could learn from any single skill file
2. **The anti-pattern catalog is specific and actionable** — named patterns, not vague warnings
3. **The Strategist's Five Foundational Questions remain the strategic spine** — preserved in full, connected to new skills
4. **The Philosopher protocol remains strict and unique** — not diluted
5. **A user can install the system on any AI coding tool** — not just Claude
6. **The assessment→action pipeline works** — `/evaluate` identifies real issues and routes to the right skill
7. **Dark patterns and ethical design are first-class concerns** — not an afterthought appendix
8. **No skill feels thin** — every skill has the depth of the current Strategist (our quality bar)
