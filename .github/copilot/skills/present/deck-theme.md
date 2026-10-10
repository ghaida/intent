# /present default theme

Use this theme only when the user supplies no template, brand kit or prior deck. A user template replaces everything visual here; the structural rules in SKILL.md still apply.

## Tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| ink | `#1a1a2e` | `#ececf4` | titles, body |
| muted | `#5b5b72` | `#a0a0b8` | subtitles, attributions, source credits |
| rule | `#b8b8c8` | `#3a3a52` | hairlines, de-emphasized chart series |
| surface | `#f1f1f6` | `#1f1f33` | placeholder frames, quote panels |
| canvas | `#ffffff` | `#12121f` | slide background |
| accent | `#4338ca` | `#7c6ff0` | the one highlighted series, the ask; nothing decorative |

One sans-serif family throughout (system UI stack in HTML; the template's theme font in .pptx). Weight carries hierarchy: titles bold, everything else regular.

## Type sizes

| | Live (projected) | Read (sent) | Read, projected (presented and sent) |
|---|---|---|---|
| Title | 36pt (44pt on title/section slides) | 28pt | 32pt |
| Body / bullets | 24pt, never below 18pt | 14pt | 18pt |
| Small (subtitle, source) | 18pt | 12pt | 14pt |

## Layouts

| Layout | Holds | Use for |
|---|---|---|
| `title` | deck title + subtitle (audience, date) | slide 1 |
| `claim_visual` | claim title + one visual (screen, diagram, photo, placeholder) | most slides |
| `claim_chart` | claim title + one chart, highlighted series in accent | data |
| `claim_bullets` | claim title + up to a few short flat bullets | when there's nothing to show |
| `quote` | claim title + one quote + attribution | research evidence; the title states the insight |
| `section` | section claim | turning points in a long deck, not an agenda |
| `ask` | the ask as the title + what/who/by-when as subtitle | last slide (or the takeaway, if just informing) |

Read decks add a body-text block under the title on every content slide.

## Grid

The same frame on every slide makes a deck read as one argument, not a stack of pages. Content that touches the edge reads as cramped, and projectors crop it. The grid is invisible: it decides where things sit and never draws.

Stage 1280 × 720 (16:9). In PowerPoint that's 13.333 × 7.5 in, 96 units per inch.

| | Units | Inches | Where |
|---|---|---|---|
| Margins | 80 left/right, 64 top/bottom | 0.833 / 0.667 | identical on every slide and layout, live and read |
| Content box | x 80–1200, y 64–656 | | 1120 × 592 |
| Columns | 12 × 64, gutters 32 | 0.667 / 0.333 | column n starts at x = 80 + (n−1)·96 |
| Title band | y 64–192 | | every title, top-aligned, columns 1–10 |
| Body region | y 224–656 | | all non-title content, 32 below the title band |
| Rhythm | 8 | | vertical offsets inside the body region are multiples of 8 |

| Layout | Placement |
|---|---|
| `title`, `section` | hero title in columns 1–10 at the top of the body region (y 224), subtitle directly below; no title-band title; the hero is the title |
| `ask` | the ask as the title in the band, columns 1–10; what/who/by-when at the top of the body region, columns 1–8 |
| `claim_visual`, `claim_chart` alone | the visual spans columns 1–12 and the full body region |
| visual with bullets | visual columns 1–7, bullets columns 8–12 |
| `claim_bullets` | columns 1–8, so line length stays readable |
| `quote` | quote and attribution in columns 1–9 |
| read decks | the body-text block sits at the top of the body region in columns 1–8; whatever follows starts below it on the 8-unit rhythm and keeps its column span |

Images and placeholders fit inside their column span and the body region, aspect ratio kept.

## Placeholders

A visual the skill can't produce becomes a surface-filled frame with a hairline border and a bracketed label: `[SCREENSHOT: checkout step 2, mobile]`. Never stock imagery.
