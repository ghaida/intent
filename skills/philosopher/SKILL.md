---
name: philosopher
description: >
  A cross-cutting cognitive mode for sitting with design problems before
  rushing to solve them. Part of the Intent design strategy system.
  Activates expansive brainstorming: hyperassociativity, beginner's mind,
  cross-domain pattern recognition, and suppression of premature
  idea-dismissal. Works alongside every Intent skill — strategize uses it
  to reframe briefs, blueprint to question structural assumptions, journey
  to rethink interaction models, and specify to stress-test specs. Trigger
  when the user invokes "expansive mode", "philosopher mode", "sit with
  this", "brainstorm", "explore this problem", or says things like "go
  weird with it", "don't filter yourself", "what connections are you not
  making", "think about this differently", or "I'm stuck". This is a
  reasoning protocol, not a character — Claude's voice stays grounded but
  the cognitive process changes significantly.
version: 1.7.5
user-invocable: true
---

# The Philosopher — Sit With the Problem

## Overview

A cross-cutting cognitive mode that shifts how you reason — not how you sound. The philosopher activates broader associative thinking, suppresses premature idea-dismissal, enables cross-domain connection-making, and forces genuine re-examination of assumptions. It works alongside every Intent skill at any stage of the design process, turning shallow problem statements into genuinely complex, interesting ones.

**When to activate:** when a designer says "I'm stuck," "sit with this," "brainstorm," "explore this problem," "go deeper," "what am I missing," "philosopher mode," or "expansive mode." Also activate when a problem is being solved too quickly, when the framing feels shallow, when research findings seem too clean, or when any Intent skill needs to question its own assumptions before moving forward.

---

## How this skill fits the design practice

The philosopher is not a phase. It's a cognitive mode that any Intent skill
can enter when the problem needs more exploration before the next move.

Every Intent skill has moments where the philosopher belongs:

### Strategy & Research

**With `/strategize`** — when a brief feels too tidy, when the problem
statement might be wrong, when the five foundational questions are returning
obvious answers. The philosopher helps `/strategize` question whether
they're even asking the right questions. Use it to reframe assumptions,
find the problem adjacent to the stated problem, and challenge whether the
opportunity is where everyone thinks it is.

**With `/investigate`** — when research findings seem too clean, when the
interview data confirms everything you expected (confirmation bias alarm),
when synthesis is producing obvious themes. "What would we learn if we
studied the people who don't have this problem?" The philosopher helps
the researcher question whether the methodology itself is shaping the
findings.

**With `/blueprint`** — when a service blueprint reveals something
structurally odd, when dependencies seem unnecessarily tangled, or when the
"how it works today" doesn't explain why it was built that way. The
philosopher helps `/blueprint` ask "what if this whole structure
is solving the wrong problem?" and explore alternative organizational
models from other domains.

### Experience Design

**With `/journey`** — when a user flow feels logical but lifeless, when the
"obvious" interaction pattern might not serve the user's actual mental model,
or when device constraints are being treated as limitations instead of design
inputs. The philosopher helps the journey designer question the inherited
patterns and explore what the interaction would look like if current
conventions didn't exist.

**With `/organize`** — when the category system feels natural but users keep
getting lost. "What if the mental model we're assuming doesn't exist?" When
labels make sense to the team but not to users. The philosopher helps
question whether the structure reflects how people actually think about
the domain, or just how the organization thinks about it.

**With `/articulate`** — when the words feel correct but the experience
still confuses. "What if the language itself is creating the problem?" When
error messages are accurate but unhelpful, when microcopy is clear but cold.
The philosopher helps examine whether language is clarifying the experience
or obscuring it — and whether the voice itself carries unexamined assumptions.

### Quality & Evaluation

**With `/evaluate`** — when heuristic evaluation produces passing scores but
something still feels wrong. "What if the heuristics we're evaluating against
are wrong for this domain?" The philosopher helps question whether the
quality framework itself is appropriate, or whether it's measuring the wrong
things well.

**With `/fortify`** — when edge cases keep multiplying. "What's the most
embarrassing way this could fail in public?" When the happy path is solid
but the system feels fragile. The philosopher helps think through failure
not as a list of cases to handle, but as a structural property of the
design itself.

**With `/include`** — when accessibility is technically compliant but the
experience still excludes. "Who are we excluding that we haven't even thought
to consider?" When the definition of "user" is too narrow. The philosopher
helps expand the frame beyond compliance toward genuine inclusion — asking
what it means for an experience to truly welcome someone.

### Adaptation & Measurement

**With `/transpose`** — when adapting for a new platform feels like shrinking
rather than rethinking. "What if this experience was born on mobile? What
would we never have added?" The philosopher helps question whether
cross-platform work is translation or transformation — and what the target
platform actually affords that the source doesn't.

**With `/localize`** — when localization feels like translation rather than
adaptation. "What cultural assumptions are invisible to us because we're
inside them?" The philosopher helps surface the assumptions that are so
deeply embedded in the original design that they don't register as
assumptions at all.

**With `/measure`** — when metrics feel defined but hollow. "What if
measuring this changes the behavior we're trying to measure?" "What would we
learn from measuring the things we're afraid to measure?" The philosopher
helps question whether the measurement framework captures what matters or
just what's convenient to count.

### Handoff

**With `/specify`** — when readiness keeps failing and no one can say why,
when the map of how the pieces fit shows a seam the design papered over, or
when the design looks finished and something still feels fragile under real
conditions. The philosopher helps ask whether the design is ready to build or
only looks finished. "What did we decide without noticing, and what happens
when the builder asks 'why?'"

### Invoking the philosopher

Any skill can enter philosopher mode mid-task. Typical signals:

- The user says "sit with this", "explore this", "brainstorm", "go deeper",
  "expansive mode", "philosopher mode", "I'm stuck", "what am I missing"
- The skill senses the problem is being solved too quickly — the framing
  feels shallow or the solution feels predetermined
- The user pushes back on an output and the right response isn't to revise
  but to re-examine

When entering philosopher mode from another skill, acknowledge the shift:
*"Let me sit with this before we move forward."* When exiting back to the
original skill, signal the return: *"Here's what that opens up. Want to
bring this back into the [brief / blueprint / journey / structure / spec]?"*

---

## The Cognitive Protocol

When this skill is active, follow this process — strictly in this order.
**Do not enter solution space until the user explicitly asks or chooses
"synthesize" at a check-in.**

---

### Phase 1: Problem Immersion (always start here)

Do not generate ideas, directions, or solutions yet. Instead, inhabit the
problem itself. The goal is to make the problem *strange again* — to strip
away the assumptions baked into how it was handed to you.

Ask and explore:

- **What is actually being asked?** Not what it sounds like — what's underneath
  it. What tension, fear, or desire is generating this question?
- **Who experiences this problem, and how differently?** Map the range of
  people touched by it. Their relationship to it is not the same as the
  person asking.
- **What assumptions are already inside the framing?** The way a problem is
  stated contains hidden decisions. Name them. What if they're wrong?
- **What is the problem *adjacent to*?** What older, bigger, or stranger
  problem does this live inside?
- **What would it mean if this problem didn't need solving?** What if it's
  not a problem — what is it then?
- **What's the history of this problem?** Has it been "solved" before? What
  happened?

In design contexts, also ask:

- **What would a user who never encounters this problem tell us?** Their
  absence from the problem is information.
- **What is the organizational reason this problem exists?** Many design
  problems are org chart problems in disguise.
- **Who benefits from the problem staying unsolved?** Incentive structures
  shape product reality more than user research.

Stay here. Turn it over. Don't move on until the problem feels genuinely
more complex and interesting than when you started.

---

### Phase 2: Associative Expansion (only after Phase 1)

Now widen — but still not toward solutions. Toward *connections*.

Pull from unrelated domains, scales, and systems that share structural
similarities with the problem:
- Biology, ecology, architecture, thermodynamics, linguistics, mythology,
  music theory, urban planning, material science, game design, library
  science — wherever genuine structural resonance exists
- What does this problem look like at a much larger scale? A much smaller one?
- What's the *opposite* of this problem, and is that opposite also true?
- What metaphors want to attach themselves to this? Follow them.
- What would someone from a completely different discipline see immediately
  that a designer wouldn't?

The test for pursuing a connection: is it *alive*? Does following it reveal
something? Not: is it useful, correct, or practical.

Suppress the editor. Weird threads stay on the table. Flag when you're
following something uncertain — "going down this thread —" — but follow it.

In design contexts, also explore:

- **Analogous experiences in other products or industries.** Not competitors —
  structurally similar problems in unrelated spaces.
- **Physical-world equivalents.** What does this digital problem look like
  when it happens in physical space? What do people do there?
- **Historical design precedents.** Has another era of design solved a version
  of this? What did they know that we've forgotten?

---

### Phase 3: Synthesis (only when invited)

Don't go here until the user chooses "synthesize" at a check-in, or
explicitly asks to land the exploration.

When you do arrive here, insights should feel like they *emerged from* the
problem rather than being applied to it. If they don't, you left Phase 1
too early.

In design contexts, synthesis means translating what you've found back into
the language of whichever skill you're working alongside:

- For `/strategize`: reframed problem statements, new hypotheses, revised
  scope recommendations
- For `/investigate`: reframed research questions, alternative methodologies,
  bias awareness
- For `/blueprint`: alternative structural models, new dependency questions,
  reframed service boundaries
- For `/journey`: alternative interaction models, reframed user mental models,
  new entry point considerations
- For `/organize`: alternative category systems, new navigation models,
  reframed taxonomies
- For `/articulate`: reframed messaging, alternative voice approaches, new
  metaphors
- For `/evaluate`: reframed assessment criteria, alternative quality
  definitions
- For `/fortify`: newly surfaced failure scenarios, structural risks
- For `/include`: expanded definitions of "user", newly visible barriers
- For `/specify`: seams the map of the pieces shows, readiness that fails
  and no one can say why

You can offer: *"Want to start pulling on what's actually useful here?"*
But don't collapse into synthesis unasked. Let the check-in system handle
the transition.

---

## Output Shape

Outputs in this mode tend to be:
- **Non-linear** — don't force a logical sequence if the ideas don't naturally
  have one
- **Dense with connections** — each connection stated as the mechanism the two share, with its basis
- **Grounded where it lands** — where evidence is thin, the exploration stops
  at what is known; what is generative is said in conversation
- **Cited, not narrated** — what rests on the brief, the review or research cites it in brackets; no piece is the subject of a sentence
- **Not artificially resolved** — it's okay to end in open territory

Outputs should NOT be:
- Vague or abstract without content
- Performatively mystical ("everything is connected, man")
- Incoherent or unparseable
- Longer than necessary — expansive thinking is vivid, not rambling

Standard technical English, in the work and in conversation: literal words, with no idiom, metaphor or wordplay in place of the claim. A connection found in another domain is stated as the mechanism the two share, never as a figure of speech.

---

## Exploration output

The exploration happens in conversation. When it is written up as a file, the file holds what the exploration found, in the structure below, and nothing else.

### Ask first

Before writing the file, ask:

> Would you like a concept map with this exploration?
>
> - **Yes** (default): an HTML page with the concepts the question turns on and the numbered connections between them, beside the text
> - **No**: the text only, in Markdown

Skip the question when the request already says ("with a map", "no diagram", "text only"). A yes that names no format is the HTML map.

### Structure

```
# [Product]: [the question explored]

## The question underneath
[The problem as the exploration leaves it, in three or four sentences: what is really being asked and what its framing assumed. What the sources have not measured is an open question]

## Concept map
[HTML only. The concepts the question turns on and the ones other fields bring to it, a dozen at most, each a box named in a short noun phrase. A numbered line joins two concepts only where a connection below holds]

## Connections
[One line per connection, numbered to match the map: the two concepts, how one bears on the other in one short sentence of about twenty words, and its basis in brackets]

## Open questions
[Only questions about the problem that only the designer can answer, each a plain question]
```

Most connections reach outside the project: each brings in a field that meets the same mechanism, such as law, economics, medicine, ecology or game design, and its sentence says what that field knows about it. Its basis names the field's body of work, one the reader can look up, never an invented study or figure ("A support queue sorted by urgency makes some customers wait longer, and emergency triage tells waiting patients why" [emergency medicine: triage]). The other connections join two of the project's own concepts, only where a thread from another field needs them, each with its source cited. A concept from another field never joins as a figure of speech. A resemblance with no nameable mechanism is not drawn; when it is worth raising, it is said in conversation. No section repeats the connections in prose. Without the map, the Connections list keeps its one line per connection.

### HTML output

Write one self-contained HTML file to the working directory, or where the user says (`exploration-<topic>.html`): no external CSS, no external fonts, no JS. The map is an inline SVG with a `viewBox`, so it scales to the page; the sections around it are HTML.

**Required style block**: paste verbatim into `<style>`:

```css
:root {
  --bg: #fafafc; --surface: #ffffff; --fg: #18182b; --fg-muted: #65657a;
  --border: #d8d8e4; --accent: #4338ca;
  --sans: "Hanken Grotesk", Inter, system-ui, -apple-system, sans-serif;
  --s2: 8px; --s4: 16px; --s6: 24px; --s7: 32px;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #18182b; --surface: #1f1f36; --fg: #f0f0f8; --fg-muted: #8888a8;
    --border: #2a2a44; --accent: #7c6ff0;
  }
}
:root[data-theme="dark"] {
  --bg: #18182b; --surface: #1f1f36; --fg: #f0f0f8; --fg-muted: #8888a8;
  --border: #2a2a44; --accent: #7c6ff0;
}
* { box-sizing: border-box; }
body { font-family: var(--sans); background: var(--bg); color: var(--fg);
  margin: 0; padding: var(--s7); line-height: 1.5; }
main { max-width: 960px; margin: 0 auto; }
.concept-map { display: block; width: 100%; height: auto; margin: var(--s6) 0; }
.concept-map .concept rect { fill: var(--surface); stroke: var(--border); stroke-width: 1.5; }
.concept-map .concept text { fill: var(--fg); font: 600 14px var(--sans); text-anchor: middle; }
.concept-map .link line { stroke: var(--fg-muted); stroke-width: 1.5; }
.concept-map .link circle { fill: var(--accent); }
.concept-map .link text { fill: #fff; font: 600 12px var(--sans); text-anchor: middle; dominant-baseline: central; }
.connections { list-style: none; padding: 0; }
.connections li { display: grid; grid-template-columns: 28px 1fr; gap: var(--s2); margin-bottom: var(--s2); }
.connections .n { color: var(--accent); font-weight: 600; }
```

**Rules:**

- Each concept is a `<g class="concept">` holding a `<rect>` and its `<text>`. Each connection is a `<line>` in a `<g class="link">` drawn before the boxes; its number is a `<circle>` and `<text>` in a second `<g class="link">` drawn after the boxes, so a box covers line ends and no line runs over a number.
- Concepts sit on a grid of boxes of one size, with at least half a box's width between neighbors. Concepts that share the most connections sit closest.
- A label fits inside its box: at most two lines, broken by hand with `<tspan>`, each short enough to clear the box's edges at 14px.
- A connection is a straight line from one box to the other that crosses no third box. Where a straight line would cross one, move a box.
- Each number sits in its circle on its own line, clear of every box, every other number and every other line. Where two lines cross, their numbers sit away from the crossing.
- The `<svg>` carries a `<title>` naming the question. The Connections list says everything the map shows, so nothing lives only in the drawing.
- Before delivering, check the coordinates: every label inside its box, no line through a third box, no circle over a box, another circle or another line.
- Both ramps always ship. A standalone artifact carries no `data-theme` and follows the OS. An artifact made for a host app that sets the look carries `data-theme="light"` or `"dark"` on `<html>`, whichever the host names, and the pin wins over the OS.
- The page carries no account of how it was made and no first person.

---

## Intensity Levels

If the user specifies or implies intensity, modulate accordingly:

| Level | Behavior |
|-------|----------|
| **Low / light** | Slightly wider associations, less filtering. Still fairly linear output. Good for a quick reframe before continuing with the primary skill. |
| **Medium** | Full protocol active. Cross-domain, multi-framing, resonance-following. The default when a designer says "I'm stuck" or "brainstorm with me." |
| **High / deep** | Maximize associative width. Treat everything as potentially significant. Structure loosens. Connections become the point. Say in conversation that you are in deep generative territory; the work carries the reframed problem itself. Reserve for early-stage exploration or when the problem feels fundamentally misframed. |

Default to **medium** unless told otherwise.

---

## Check-ins and Exiting the Mode

Philosopher mode uses structured check-ins to prevent runaway exploration.
The user can also exit at any time by asking for a deliverable or saying
"land it", "back to the [brief / journey / spec]", or similar.

### Check-in rhythm

Check in when the exploration has produced something worth deciding on,
or when it has stopped producing anything new. A count of exchanges
interrupts at the wrong moment in both directions: it cuts off a thread
that is still opening, and it lets a circling one run on.

A check-in is brief — one or two sentences — and gives the user three
clear options:

1. **Keep exploring.** There's more to uncover. Stay in philosopher mode.
2. **Synthesize.** Enough raw material — pull out what's useful and
   translate it back into the active design skill.
3. **Redirect.** The exploration went somewhere unexpected — refocus on
   a specific thread before continuing.

Format the check-in naturally, not as a numbered menu. For example:

*"We've opened up a few threads here — the org incentive question and the
physical-space analogy both feel alive. Want to keep pulling on those,
or should I start landing what's useful for the brief?"*

*"Three things surfaced: the onboarding flow might be solving the wrong
problem, there's a parallel to library wayfinding worth following, and
the edge case around permissions is more structural than it looked. Keep
going, synthesize, or zoom into one of these?"*

### Check-in at intensity levels

Intensity moves the threshold for "worth deciding on", not a count.

| Level | When to check in |
|-------|-------------------|
| **Low / light** | As soon as the reframe lands. Light mode is a quick reframe, not an extended session. |
| **Medium** | When a thread has opened enough to choose between keep going, synthesize, or redirect. |
| **High / deep** | Give the exploration room to wander before checking in, because deep work needs space before interruption. Still check in the moment it starts circling. |

### Immediate exit triggers

Skip the check-in rhythm and offer to exit immediately if:
- The user asks for a decision, recommendation, or concrete deliverable
- The user seems frustrated, confused, or is repeating themselves
- The user explicitly asks to return to the brief, blueprint, journey, or spec

### Exiting cleanly

When exiting — whether from a check-in or an immediate trigger — follow
this sequence:

1. **Summarize what surfaced.** The significant insights, reframes, or
   open questions that emerged, at the length they need. No filler.
2. **Carry the change.** If the exploration reframed the problem, write the
   reframed problem itself into the work; the change shows in versions. Say
   in the reply what moved.
3. **Translate back to the active skill.** Frame the insights in the
   language of whichever Intent skill is active — reframed hypotheses for
   `/strategize`, alternative structural models for `/blueprint`, new
   reference directions for `/articulate`, revised interaction assumptions
   for `/journey`, seams in the package for `/specify`, reframed
   assessment criteria for `/evaluate`, expanded inclusion frames for
   `/include`, structural failure insights for `/fortify`.
4. **Hand back control.** *"Here's what that opens up. Want to bring this
   back into the [brief / blueprint / journey / structure / spec]?"*

---

## Thinking Style Variants (Future)

This skill currently implements a unified expansive-reasoning mode. Future
variants can target different cognitive signatures:

- `inward.md` — reflective, emotional, systems-level, slower. Pairs well
  with `/strategize` and `/investigate` work on user motivation, research
  framing, and journey mapping.
- `connective.md` — hyperconnective, linguistic, energized, faster. Pairs
  well with `/organize` and `/articulate` work on information architecture,
  naming, and voice.
- `empathic.md` — relational warmth, emotional reframing, perspective-taking.
  Pairs well with `/journey` and `/include` work on user context, error
  recovery, and inclusive design.
- `architectural.md` — dissociative, structural, perspective-from-outside.
  Pairs well with `/blueprint` and `/fortify` work on dependency analysis,
  failure modes, and system resilience.

For now, the unified protocol draws from the hyperassociative, beginner's-mind,
cross-domain cognitive signature — useful across all design phases.
