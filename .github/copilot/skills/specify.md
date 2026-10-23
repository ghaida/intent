---
name: specify
description: >
  Packages an approved design for the people or agents who will build it.
  Part of the Intent design strategy system. The handoff is the project's
  own artifacts, the brief and the wireframes always and the service
  blueprint, journey map, information architecture, state inventory,
  accessibility documentation, measurement framework and copy deck when
  the project made them, with one entry page in front that says what the
  product is, what is in the package, how the pieces fit, and what is
  left to the builder. No visual design. Checks readiness first and runs
  the ethical review before packaging. Trigger when: a design is approved
  and someone needs to build it, "prepare the handoff", "package this for
  the build", "what does the coding agent need", "write the handoff",
  "is this ready to build".
version: 1.7.2
user-invocable: true
---

# Specify — Package the design for the build

## Overview

This skill packages an approved design for whoever builds it: an engineering team or a coding agent. The handoff is the project's own artifacts. The brief says what the product is for; the wireframes say what every screen holds; the journey, the information architecture and the blueprint say how the screens connect and what runs behind them; the state inventory, the accessibility documentation and the measurement framework say how the design behaves outside the happy path and how its success will be read. Nothing re-describes those artifacts. The skill writes one page in front of them that says what the product is, what is in the package, how the pieces fit, and what is left to the builder.

No visual design: the package carries no color, type, spacing or motion beyond what the journey's interaction specification states. The builder picks the stack.

---

## Skill family

Each of these makes an artifact that rides in the package when the project made it:

- **`/strategize`**: the design brief. Always in the package; the entry page's first paragraph is drawn from it.
- **`/wireframe`**: the full-page wireframes, with the prototype view when one exists. Always in the package; every screen the journey names has one.
- **`/journey`**: the user journey map and its interaction specification.
- **`/organize`**: the information architecture.
- **`/blueprint`**: the service blueprint.
- **`/fortify`**: the state inventory and the edge case catalog.
- **`/include`**: the screen reader flow documentation, the keyboard navigation map and the remediation plan.
- **`/measure`**: the measurement framework.
- **`/articulate`**: the copy deck, where copy exists beyond what the wireframes carry (an error message inventory, a voice framework).
- **`/transpose`** and **`/localize`**: the platform adaptation specs, the cross-device journey map, the market requirement matrix and the cultural adaptation brief, where the project went to a new platform or market.
- **`/evaluate`**: its findings are settled before packaging; an open critical finding means the design is not ready.
- **`/present`**: decks. This skill builds none; hand the package to `/present` as source material when the build needs a room's approval.
- **`/philosopher`**: a cross-cutting cognitive mode. Enter when readiness keeps failing and no one can say why, or when the map of how the pieces fit shows a seam the design papered over.

---

## Readiness

Package only when all of these hold:

- The brief exists and is approved.
- Wireframes exist at the full-page rung, or as the prototype view, and are approved. An idea board of thumbnails alone is not ready.
- When a journey exists, every screen it names has a wireframe.
- No critical finding from an evaluation is open.
- Approval is the host's state in a host app, and the designer's word in conversation otherwise.

When they do not hold, say in one or two sentences what is missing and propose the step that settles it: the brief to `/strategize`, the missing screens to `/wireframe`, the open critical finding to the skill that fixes it. Never propose the package before they hold.

---

## The ethical check

Before packaging, check the design against the Intent anti-pattern catalog: prechecked consent, confirmshaming, fabricated urgency, asymmetric options, addictive mechanics, and the rest. The outcome is one entry in the decision log: each pattern that could apply to this design and how the design handles it, in design terms, with no catalog codes and no statement that the design was cleared. Nothing separate ships in the package; the log carries it to the builder, who then knows the consent box is unchecked on purpose.

A pattern the design cannot justify from the user's side blocks the package. Take it to the designer in conversation; it goes back to the skill that owns the screen.

---

## What goes in the package

Always:

- The design brief.
- The wireframes, at the full-page rung, with the prototype view when it exists.

When the project made them, by the rule that anything the project made which states what to build belongs in the package:

- The service blueprint.
- The user journey map.
- The information architecture.
- The state inventory and edge case catalog.
- The screen reader flow documentation, the keyboard navigation map and the remediation plan.
- The measurement framework.
- The copy deck, where copy exists beyond what the wireframes carry.
- The platform adaptation specs and cross-device journey map, the market requirement matrix and the cultural adaptation brief.
- The decision log, which carries the ethical review's outcome among its entries.

Never: visual design. No color, type, spacing or motion beyond what the journey's interaction specification states. The builder picks the stack.

Copy and labels ride inside the wireframes, which carry real content by rule; `/articulate`'s work needs no file of its own unless it made one.

---

## The entry page

The one thing this skill writes. `README.md` at the package directory's root, so a coding agent reads it first. Its title names the product and the change.

```
# [Product and change]

[One paragraph: the product, the change, who it is for, from the brief.]

## Contents

| Artifact | Path | What it holds |
|---|---|---|
| Brief | ../brief-<topic>.md | … |

## How the pieces fit

| Screen | Wireframe | Journey step | IA node | Blueprint touchpoint | States | Copy |
|---|---|---|---|---|---|---|

## Left to the builder

- Visual design: color, type, spacing, motion beyond the journey's interaction specification
- Technology
- [anything the design leaves open on purpose]

## Open questions

- [a plain question] (the artifact that holds the detail)
```

**What this is.** One paragraph: the product, the change, who it is for, from the brief.

**Contents.** Each artifact, its path relative to the entry page, and one line on what it holds, in the order to read them: the brief first, then the maps, then the wireframes, then the hardening and requirements, then the decision log. This table is the package's snapshot: it names exactly what the handoff was made from.

**How the pieces fit.** One row per screen: the wireframe frame, the journey step it serves, the IA node it lives under, the blueprint touchpoint behind it, the states drawn for it, and where its copy lives when not in the frame. Every row says what the screen is for. This is the map a coding agent needs most and none of the artifacts gives.

**Left to the builder.** Visual design. The technology. Anything the design leaves open on purpose, listed. Not a place for things the design should have settled: a missing state is a readiness failure, not a builder's choice.

**Open questions.** The open questions from the artifacts that affect the build, each a plain question, pointing at the artifact that holds the detail. Only questions about the work.

The page has no narrator: no byline, no account of how it was assembled, no statement that the design was cleared, no ownership block. It never grows a per-screen section; if a screen needs more than its row, the wireframe or the journey is where it goes.

---

## Form

A directory named `handoff` in the project, or `handoff-<topic>` where a project has more than one, holding the entry page. The artifacts stay where the skills wrote them and the entry page references each by relative path. Nothing is copied: a copy made through a read tool truncates silently past the tool's limit, and two copies of a wireframe drift. The Contents table is the snapshot. A coding agent is handed the entry page's path and follows the references.

When the design changes after packaging, say that in conversation and offer to package again, which rewrites the entry page. Nothing is written into the old one. In a host app, the host decides where the directory lives and may bundle the referenced artifacts from its own store.

---

## Voice and approach

**Intent over inventory.** Every row of the map says what the screen is for, not only what it holds. "Browse: the map is home because the brief pins geography as the product's unit" is a row; "Browse: a map, a list, a tab bar" is inventory.

This is how the skill speaks in conversation. The work has no narrator: no first person, no byline, no line about the document itself, no account of how it was made, nothing about the designer or the team, no marks or keys on its claims. It opens with its first section. Claims still cite their sources, in brackets or footnotes with no key, and no piece of the team's work is the subject of a sentence ("the brief rejects", "the review found"). The request sets the scope: cover the cases that change a decision, leave out sections the request did not call for, and give each fact one home, so a finding is described once and later sections name it by title. A fact a trimmed section held alone moves into its home; it is never dropped. Shortening never removes a value a builder sets: a timing, a size, a threshold, a string. A value is written as the value, once, and the log records why; nothing in the work says a value is open, proposed or untested, and open questions hold only what only the designer can answer. Removing the narrator removes no content: before delivering, check that every condition the request names is answered in the work or asked in its open questions. The decision log holds the decisions someone might reopen, one entry each: a dated heading stating the decision, then Decided by, Why, Rejected and Rests on, a sentence each; file names, formats and individual strings are not decisions. The reply that comes with the work is a few sentences: where the file is, the one question whose answer unblocks the next step with options short enough to pick from, the one default the designer is most likely to overturn, anything inside the request the work does not cover, and who is next. It never retells the work, adds a second default, points at the log, or re-sorts findings by owner. Plain sentences, no framing openers, no counts that introduce a list. The writing rules in `/articulate` apply to everything you write.

---

## Scope boundaries

### This skill does:
- Check readiness and say what is missing
- Run the ethical check and log its outcome
- Gather the project's artifacts
- Write the entry page

### This skill does NOT:
- Write a spec of its own (the artifacts are the handoff)
- Make design decisions (the designer's work)
- Write code or pick the technology
- Define success metrics (`/measure`)
- Assess UX quality (`/evaluate`)
- Build decks (`/present`)
- Fill gaps in the design (a gap is a readiness failure or an open question)

---

## When to use this skill

Trigger Specify when:
- **"Prepare the handoff"** or **"write the handoff"**: a design is approved and someone needs to build it
- **"Package this for the build"**
- **"What does the coding agent need?"**
- **"Is this ready to build?"**: run readiness and say what is missing
