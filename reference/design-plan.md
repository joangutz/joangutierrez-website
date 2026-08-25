# Design Plan — joangutierrez.com

For approval before build. Nothing in `/src/` has been written yet.

---

## 0. Two decisions already taken

**Positioning (§3's open question).** The hero names *the state, not the job*. It addresses
the condition both source documents share — being perceptive and capable while quietly
overriding yourself — without naming a profession. "High-performance creatives" is not
discarded; it moves to *The Work*, as one recognisable portrait among several, where it reads
as recognition rather than a gate. The current hero line is the most memorable sentence on the
existing site, and it is the one sentence that tells most visitors the site is not for them.
Demoting it costs a little sharpness at the door and recovers the entire audience the longer
copy was already written for.

**Images.** No collage or portrait files exist in the repo. The card mechanic, hero, and
portrait blocks get built against a documented manifest (`/assets/MANIFEST.md`) with
grain-and-gradient placeholders in the four card reds. Dropping real files in later is a
filename swap — no component changes. One consequence, stated plainly: the four card reds
below are *chosen*, not sampled from the actual collages. When the art arrives, expect one
palette revision to make the reds agree with it.

---

## 1. Palette

The approach is selfcervix's, not the temperature. A **saturated ground** carrying **one deep
red for nearly all type** — not a neutral page with a red accent. No cream. No terracotta.

| Name | Hex | Job |
|---|---|---|
| **Madder** | `#D6A09B` | The ground. Every page, nearly everywhere. |
| **Cochineal** | `#5A121C` | The ink. Nearly all type, all sizes. |
| **Plumstone** | `#2C0B12` | Deep ground for inverted sections; the aperture mark; focus rings on light grounds. |
| **Bract** | `#E9CAC0` | Lifted panels — session cards, price tiles; type on dark grounds. |
| **Quick** | `#8E241F` | The one live red. Rules, the open aperture's centre, the price-as-button. Never carries body text. |

**Why these.**

*Madder* is the current `#D49B9B` warmed and given one step of saturation so it survives being
a full-page ground rather than a browser theme colour. Madder is a real root pigment — the
name is earthy and true, and it keeps continuity with the site being replaced.

*Cochineal* is the deep carmine-brown that does the work selfcervix's deep red does. The name
is not decoration: cochineal is a pigment from the nopal cactus of the Mexican desert, which
is Joan's borderland. The palette's central colour is named for the place §1 of the current
copy says formed her sensibility.

*Plumstone* is the seed inside the fruit — dark, bodily, and on-symbol for cyclical return.
It gives the site somewhere to go deep without introducing black, which would read clinical.

*Bract* is the leaf-like sheath that holds a flower before it opens. It is a pale warm pink,
emphatically **not** cream — it lifts cards off the ground without leaving the flower.

*Quick* is "the quick": the living flesh under a nail. Sparing, hot, alive.

**Contrast, measured.** Cochineal on Madder is **6.09:1** — AA at body size with room, which is
what lets one ink carry everything. Cochineal on Bract is 8.89:1. Bract on Plumstone is 11.75:1.

Two findings that change the build:

- **Quick can never carry text.** At its brightest usable value it reaches 2.96:1 on the
  ground. `#8E241F` was chosen as the darkest value that still reads hot, giving **3.86:1** —
  enough for a *meaningful non-text mark* (the aperture), not enough for a word. So Quick is
  strictly a graphic colour. This is a constraint, and it is also the discipline the brief
  asked for: one ink, one live mark.
- **The focus ring flips.** Plumstone rings fail on the dark grounds (1.0–2.4:1); Bract rings
  fail on the light ones (1.0–1.5:1). One token, two values resolved by context — Plumstone on
  Madder/Bract, Bract on Plumstone/card faces. Visible keyboard focus is in §1's quality floor,
  so this gets built as a token, not remembered per-component.

**The four card registers**, one per offering, each verified to carry a Bract title:

| Offering | Register | Bract on it |
|---|---|---|
| Erotic Embodiment Education | Plumstone `#2C0B12` | 11.75:1 |
| Desire & Pleasure Mapping | Cochineal `#5A121C` | 8.89:1 |
| Scar Tissue Care | Brick `#7E2A26` | 6.09:1 |
| All-In-One | Clay `#8E3B2E` | 4.86:1 |

These are tints of the five, not new colours.

---

## 2. Type

Two faces. Self-hosted via `@fontsource-variable` — no external font requests, no layout shift.

**Display — Fraunces (variable).** Characterful with real weight, and its variable axes are the
argument: `opsz` lets it be genuinely enormous with tight fitting, and `SOFT` literally softens
the terminals — "bold and soft at once" as a font setting rather than a mood board. `WONK` stays
at 0 so it reads reverent rather than cute. Used at large sizes with restraint, and
letterspaced-uppercase at low weight for small utility text — nav, labels, prices.

**Body — Newsreader (variable).** Quiet, warm, low-contrast, built for reading. Set generously:
~66ch measure, 1.75 line-height, 19px. It recedes under Fraunces instead of competing.

I tested the one-face option — Fraunces alone across all three jobs, the selfcervix discipline
§4 says is worth considering. Fraunces has a genuine text optical size and it works, but the
character that makes it right at 120px is a tax on a 900-word philosophy page. Two faces, and
Newsreader is the one that lets *The Work* be long.

---

## 3. Layout concept — the empty left third

A 12-column grid where, on every reading section, the left three columns stay **empty** and
prose sits in columns 5–10 at a long-but-narrow measure. Space is the primary luxury, and the
cheapest way to make space read as intentional rather than unfinished is to give it a consistent
edge.

The empty column is not decoration — it is where the aperture mark sits, where the torn-paper
edge tears from, and where section numbers appear **only on the session arc**, which is the one
place §6 says numbering is earned. Nowhere else gets a number.

Below 900px the left column collapses and the mark moves to a hairline rule above each section.
Full responsive floor at 375px.

---

## 4. The signature element — the aperture

One flower mark with exactly one parameter: **how open it is.**

It is drawn as nested petal arcs in a single SVG whose geometry is driven by one CSS custom
property, `--open`, from 0 to 1. That one object does four jobs:

- **8px** — the section mark in the empty left column, nearly closed.
- **~64px** — the transition between sections, opening as it enters.
- **250px** — the ground of the *Begin* page, fully open.
- **The card mechanic** — a session card opens *by the same motion at the same easing*. Opening
  a card and opening the mark are one gesture, not two effects.

This is the answer to §10's "find our equivalent in the flower" in selfcervix's colon: one mark
doing brand, layout, motion, and interaction at once, scaled 8px to 250px. It also satisfies §4's
demand that the flower **structure** things rather than sit on the page as an icon — the mark is
never placed as ornament; it always marks a threshold, which is the word §1 of the copy opens with.

The collage cards remain the signature *content* — the art is hers, and that is the real
differentiator. The aperture is the signature *system* that opens them.

---

## 5. Hero

The visitor slows down for one beat before reading anything.

A single collage sits in silence on the Madder ground, held by the aperture. On load the
aperture opens over ~1.2s and one line of type arrives in three breath-paced groups. Nothing
else is on the screen. No scroll cue, no button above the fold.

**How this stays fast.** The collage is the LCP element and loads eagerly with `fetchpriority`;
the type is in the DOM from the first byte and animates on `opacity` only, so it is readable
immediately to a scroller, to a crawler, and if JS never runs. The animation is pure CSS —
nothing is gated on JavaScript, so nothing can delay meaningful content. Under
`prefers-reduced-motion` the whole hero is simply present, open, at rest.

---

## 6. Motion and grain

**Motion is one idea: opening.** 900ms, `cubic-bezier(.22,.61,.36,1)`, no spring, no bounce,
nothing snaps. Reveals are apertures widening or cross-fades — never slides, never scale-ups.
Under `prefers-reduced-motion`, cards cross-fade and everything else is at rest.

**Grain is load-bearing**, per §4. An `feTurbulence` fractal-noise tile (~200×200, `baseFrequency`
0.8) inlined as a data URI, fixed over the viewport at ~6% with `mix-blend-mode: soft-light`,
`pointer-events: none`. Every gradient gets the same tile locally so no ground is ever flat.
One tile, one paint, negligible cost.

---

## 7. Pages

**Home** — hero; four short lines on who this is for; the three realms triangle; the four collage
cards; one portrait and two sentences; seasonal letter (inline field, never a popup); book a free
consultation. Every section a teaser with a door.

**The Work** — philosophy at long measure. The three realms expand here.

**Sessions** — the two-part structure exactly as §6 specifies. Four collage cards that open
(tap, click, and keyboard; obvious way back). Then the **separate** price grid where the price
itself is the booking button and the free consultation is the lowest rung. Then the session arc,
numbered, because it is a real sequence. Then consent. Then the "Note on all plans" **verbatim**,
mid-page, at readable size, set calm — it is a professional boundary, not fine print.

**Roots** — named territories (the borderland; art and somatic education as one practice; Zen as
the ground under the ethics), not chronology. The unformalized training claimed first, lineage as
inheritance with teachers named. Credentials complete but quiet, at the bottom, with the ethics
body linked. The land gets a full section. The Audre Lorde epigraph gets a page to itself.
Torn-paper edge as the section transition.

**For Clinicians** — professional correspondence, not marketing. Linked from Sessions and the
footer, not the primary nav, and independently linkable.

**Begin** — one action. Cal.com `joan.gutierrez/20min`, lazy-loaded on interaction so it never
touches first paint.

Nav: The Work · Sessions · Roots · Begin.

---

## 8. Stack

Astro 5 + Tailwind 4, content collections reading markdown/MDX straight out of `/content/` so
copy is editable without touching components. Static output, `netlify.toml`, no CMS, no database,
no auth. Cal.com kept, lazily embedded. Quality floor built in from the first component rather
than audited at the end: 375px, visible focus, reduced motion, real alt text, sized lazy images.

---

## 9. What I need from you — and three things in the copy that don't line up

**Missing, and blocking one page:**

1. **`/content/erotic-embodiment.md` does not exist in the repo and was not in what I was given.**
   The brief names it as the warmer of the two voice sources, and *The Work* is built from it —
   including Mosher's three realms (§7), which §7 says is "already written." I have the current
   site copy only. I can build *The Work*'s structure and the triangle, but the prose in them
   would be mine, not hers. Send this file and that page is real; without it I will build the
   page with the material I do have and mark every passage that needs her words.
2. **For Clinicians copy doesn't exist anywhere.** §9 specifies what it must contain. I'll draft
   it in the restrained register from the facts already in the brief and the scope-of-practice
   text, and mark the whole page as awaiting her approval — flagging it now so a draft isn't
   mistaken for her voice.
3. **Contact email and SMS** are obfuscated on the current site. I need both, plus the form
   endpoint for the seasonal letter (default: Netlify Forms, with the Substack link alongside).

**Contradictions — flagging rather than averaging, per §3:**

4. **Two offerings cost the same $780/month.** Desire & Pleasure Mapping (monthly) and All-In-One
   (monthly) are both $780. In the price grid, side by side, that reads as a mistake: the
   whole-ecosystem option and one of its three components are priced identically, so the
   narrower one has no reason to be chosen. Comparison is the price grid's entire job, so this
   will be visible in a way it never was on the current site.
5. **The three-month prices invert.** Erotic Embodiment (3 months) is $1800; All-In-One
   (3 months) — which explicitly includes Erotic Embodiment's material plus the other two — is
   $1700. The more inclusive option is cheaper.
6. **The reference notes and the brief disagree about credentials.** The notes admire Pooja
   Prema's Roots/Lineage page *"instead of citing certifications and credentials."* Brief §8 says
   keep the full list, complete and verifiable, in a quiet block at the bottom. I'm following the
   brief — the CV is genuinely deep and some visitors need it — but noting that the earlier
   instinct was to cut it entirely.

Items 4 and 5 are pricing decisions, not design ones. I'll build the grid with the numbers as
written and leave them unchanged unless you say otherwise.

---

## 10. Build order once approved

1. Astro + Tailwind scaffold, tokens, grain, type, the aperture component, quality floor.
2. Content collections wired to `/content/`; layout, nav, footer.
3. Home, including hero and the three realms triangle.
4. Sessions — cards, price grid, session arc, consent, the verbatim note.
5. The Work · Roots · For Clinicians · Begin.
6. Responsive, focus, reduced-motion, and alt-text pass; run it locally for review.

Committed in logical chunks along the way.
