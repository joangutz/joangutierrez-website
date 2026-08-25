# Website Brief — Joan Gutiérrez

Somatic sex education practice. Chicago / Brooklyn / online.

---

## 0. Before you build

Read this file, then `/content/`, then `/reference/`. Then give me a design plan — palette
(5 named hex values), type pairing, layout concept, and the one signature element — and wait
for my go-ahead. Don't skip the plan. Put it in `/reference/design-plan.md`.

Once approved: build the whole site, commit in logical chunks, run it locally so I can see it.

**The actual problem.** The current site is not short on content. It has a strong approach
statement, a deep lineage-based CV, and four fully specified priced offerings. All of it is
crammed into one page behind hash anchors, so nothing has room to land and no visitor ever
gets a short version with a door into more. The content is good; the container is wrong.
This is not a blank-page project — it's giving existing material the space and sequence it
never had.

---

## 1. Stack

- **Astro** + Tailwind. Content in markdown/MDX so copy is editable without touching components.
- Static output, deploy to Netlify or Vercel.
- No CMS, no database, no auth. Booking already runs on Cal.com (`joan.gutierrez/20min`) —
  keep it, load the embed lazily so it doesn't block first paint.
- Quality floor, non-negotiable: responsive to 375px, visible keyboard focus,
  `prefers-reduced-motion` respected, real alt text on every image, images sized and lazy-loaded.

## 2. Site map

| Page | Job |
|---|---|
| **Home** | Land the feeling in seconds. Short. Every section a teaser with a door into more. |
| **The Work** | Philosophy. What erotic embodiment is, how the body learns, what pleasure actually is. |
| **Sessions** | Four offerings, what's included, why the approach, what it costs. |
| **Roots** | About. Personal mythology + lineage. Credentials quiet, at the bottom. |
| **For Clinicians** | Addressed to therapists and pelvic floor PTs. How this work complements theirs, how to refer. |
| **Begin** | Free consultation. One clear action. |

Nav: The Work · Sessions · Roots · Begin. Clinicians is linked from Sessions and the footer,
not in the primary nav — it's for a different audience, but must be linkable on its own.

### Home structure

1. Hero — see §5
2. Who this work is for — four short lines → The Work
3. The three realms: feel / connect / play — see §7 → The Work
4. The four offerings as collage cards — see §6 → Sessions
5. One portrait, two sentences of story → Roots
6. Seasonal letter signup — email field only, no popup, ever
7. Book a free consultation

---

## 3. Voice

Two existing sources, different temperatures. `current-site-content.md` is spare, precise,
restrained. `erotic-embodiment.md` is warmer, more direct-address. Same person. Use the
restrained register for structure and framing, the warmer one where someone is deciding
whether to trust this work. **Do not rewrite either.** Flag contradictions rather than
blending them into an average.

For connective copy — nav, buttons, alt text, empty states:

- Plain verbs, sentence case, no exclamation marks.
- Poetic but never vague. Every sentence says a real thing.
- Never clinical-euphemistic, never coy. The subject is named directly and calmly.
- Buttons say what happens: "Book a free consultation," not "Get started."

Banned: transform your life, unlock, journey, empower, elevate, dive deep, game-changing.

**Open positioning question — ask before you pick.** The current hero targets
"high-performance creatives." The longer copy addresses anyone carrying numbness or shame.
Those are different visitors with different fears. This is a strategy decision, not a design one.

---

## 4. Design direction

**Feeling:** elegant simplicity. Bold and soft at once. Provocative in a subtle way — bare,
confident, embodied, holding some mystery back. Reverent and earthy, never clinical, never
new-age. Space is the primary luxury.

**Palette.** Reds and pinks, warm and bodily, not candy. The current site's theme color is
`#D49B9B` — a dusty rose, cooler and quieter than the coral used by selfcervix (see
`/reference/`). Take the *approach* from selfcervix — a saturated ground with a deeper red
carrying nearly all the type, rather than a neutral page with a red accent — but pick our own
temperature. Propose 5 named hex values and say why.

**Do not** default to cream `#F4F1EA` with a terracotta accent. That is the house style of
every AI-generated wellness site and reads instantly as a template. Note that Dr. Alyssa
Barba's site in `/reference/` uses exactly that palette — take her *structures*, not her colors.

**Grain is load-bearing.** Flat color reads as a design tool default. Dust every gradient and
ground with fine noise — it gives the screen a skin. Cheap in CSS, large effect.

**Typography.** A characterful display serif with real weight, used with restraint at large
sizes and letterspaced-uppercase for small utility text; a quiet body face set generously —
long measure, tall line-height, air. Two faces, three at most. selfcervix runs one serif for
all three jobs; that discipline is worth considering.

**Imagery.**
- `/assets/collage/` — Joan's own collage work. Feminine, earth, transformation, devotion,
  the body, the erotic. Original art: give it space, never crop it into a decorative strip,
  never overlay text on it. Credit it as hers somewhere — every reference site either credits
  an outside artist or has no art of its own. This is a real differentiator.
- `/assets/portraits/` — portrait photography, rendered black and white.
- The flower is the central symbol of this practice: resilience, femininity, cyclical return,
  unhurried opening. Let it structure things — section marks, transitions, the shape of the
  layout — rather than sitting on the page as an icon.

**Motion.** One orchestrated idea, not scattered effects. Slow. Nothing bounces, snaps, or
uses spring physics. Reveals should feel like opening.

---

## 5. The hero

Not a headline over a gradient. The most characteristic thing in this practice is *slowing
down and paying attention* — build a hero that makes the visitor do that for one beat before
they read anything. A single collage held in silence; a line of type arriving at breath-pace;
an image that opens.

Must work on a phone, and must not delay meaningful content by more than about a second for
someone who scrolls immediately.

---

## 6. Sessions — the two-part structure

Four offerings, already written and priced:

| Offering | Container | Price |
|---|---|---|
| Erotic Embodiment Education | Three-month study | $1800 |
| Desire & Pleasure Mapping | Monthly study | $780 |
| Scar Tissue Care | Monthly practice | $580 |
| All-In-One | Monthly / 3-month | $780 / $1700 |

**Problem:** these are structurally parallel but unequal in weight — Erotic Embodiment runs
roughly three times the length of Scar Tissue Care. Four identical cards will either starve
the big one or pad the small ones.

**Solution, borrowed from two references:**

**(a) Split each offering into two columns.** From Dr. Alyssa Barba's care-plan cards
(`/reference/`): a single card, ruled frame, **left panel = what you get** (title, bulleted
includes — sessions, durations, what arrives between sessions); **right panel = why the
approach works** (the reasoning, in prose). Same card, four times. This equalizes them —
Erotic Embodiment isn't longer because it's more important, it's longer because its rationale
is currently fused to its contents. Split them and all four fit the same frame.

Joan's "on duration" argument (the 3-3-3 rule, three months as the honest container) goes in
the right panel. So does "why mapping," and "why scar tissue care." These are already written.

**(b) The cards open.** From Shannon Schultz (`/reference/`): each offering rests as a
collage form showing only its title; on interaction it reveals the description and a way in.
Slow, deliberate, unhurried — a turning toward, not a UI transition. Must work by tap on
mobile and by keyboard; cross-fade rather than rotate under `prefers-reduced-motion`; the
back must have an obvious way home.

Use Joan's own collages as the four faces, one per offering, each in a different register of
red. This is likely the signature element — it comes from her own hands rather than a stock
aesthetic, and it solves the unequal-weight problem because images can differ in scale
without looking broken.

**(c) A separate price grid.** From Sacred Womb (`/reference/`): every offering, duration,
and price laid out as tiles, each with its own tinted ground, where **the price itself is the
booking button**. No "contact for rates," no scrolling to compare. The free consultation sits
*inside* this grid as the lowest rung, not as a floating CTA. Payment plans stated as a plain
line next to the numbers, not a badge.

Two different jobs: the collage cards carry depth, the price grid carries comparison. Don't
merge them.

**Then, below:** the arc of a practice session. It's a real sequence, so numbering is honest
here — and it's one of the few places numbered markers are earned; don't sprinkle them
elsewhere. Then consent. Then the "Note on all plans" scope-of-practice text, **verbatim**.
It's a professional boundary statement, not a disclaimer: set it calm and matter-of-fact at
readable size, mid-page, the way Sacred Womb and Remember Pleasure do — not small grey type
in a footer.

---

## 7. The three realms diagram

From Dr. Barba's triad (`/reference/`): a plain triangle, three words, one paragraph beneath.
No icons, no illustration — a shape asserting that three things are one thing.

Joan's equivalent is already written: Mosher's three realms — **feel** (trance, pure
sensation), **connect** (partner engagement), **play** (role and fantasy). One diagram, and a
visitor understands the model before reading any prose. Sits on Home, expands on The Work.

---

## 8. Roots page

**Structure it as named territories, not chronology.** From Pooja Prema (`/reference/`):
large letterspaced titles — THE SOIL, HOLY GROUND, GROWING UP LIKE A WEED — each opening a
passage. The life arrives as places you can stand in rather than a résumé with better
adjectives.

Joan's territories are already in the copy: the Ciudad Juárez–El Paso borderland; art and
somatic education as one practice, not two; Zen as the ground under the ethics.

**Claim the unformalized training first.** Pooja's boldest move is a passage stating plainly
that most of her training will never be certified or instagrammed — followed by what she
actually did. Joan can do this and it's *more* earned, because she has both: a decade of
Butoh under a dozen named teachers, Noguchi Taiso, Zen Mountain Monastery since 2018, plus
real certifications. Lead with the lineage as inheritance — who taught this, where it comes
from, what each tradition contributes. Named teachers carry more authority than acronyms.

**Then demote the credentials.** Keep the full list, complete and verifiable, in one quiet
block at the bottom for those who need it. Link the ethics body
(sexologicalbodyworkers.org/ethics) from there.

**The land as a designed moment.** Pooja gives her origin and current ground a full section on
a soil photograph, not a footer line. Joan's borderland-to-Chicago-and-Brooklyn is the same
gesture and arguably stronger. The Audre Lorde epigraph gets a page to itself, or near enough.

**A torn-paper edge** as a section transition — physical, collage-native, already her medium.

---

## 9. For Clinicians page

From Remember Pleasure (`/reference/`), which has separate pages addressed to therapists and
to pelvic floor PTs. This is a referral channel, and it should read as professional
correspondence between practitioners rather than marketing.

Content: what somatic sex education is; what it does that talk therapy can't reach; what it
does that pelvic floor PT doesn't cover; scope of practice and where Joan refers out; how to
refer. Cite the distinction plainly — sex therapists don't do hands-on work; pelvic PTs offer
hands-on work but don't work with arousal and the emotions arising from it.

Include a short client-readiness note, also from Remember Pleasure: this work asks for a
reliable emotional support system already in place, and Joan is not a therapist.

---

## 10. Tone calibration — what to take from each reference

Everything below is in `/reference/`. **Take the layer named, not the whole site.**

- **selfcervix** — the skin. Saturated ground, one deep red for all type, grain, narrow text
  column with an empty left third, numbered sections. Note their logo is the *colon* in
  Self:Cervix, scaled from 8px to 250px across the site: one mark doing brand and layout work
  at once. Find our equivalent in the flower.
- **Shannon Schultz** — the card mechanic that separates the fields, and her clarity about
  who the work is for and how modalities overlap. Not her palette (white/watercolor/navy) and
  not her register, which is reassuring where ours is unhurried.
- **Sacred Womb** — the price grid and the plain statement of sliding scale. Not the design;
  that site is visually plain.
- **Dr. Alyssa Barba** — the two-column care-plan card, the "why this duration" argument, the
  triad diagram, the repeated-title section device. **Not the cream-and-terracotta palette.**
- **Pooja Prema** — the About architecture: named territories, the uncertified-training claim,
  the land as designed moment, torn edges, sparse line art floating in emptiness. Not her
  greys, and not the Offerings register — Joan's note says it reads too academic.
- **yOniversity** — permission for botanical/anatomical collage and approachable humor in
  intimidating territory. Soft wave-shaped section dividers. Dusty rose ground closest to our
  own `#D49B9B`. Take the playfulness sparingly; their density is the opposite of our goal.
- **Andy Buru** — naming the themes he works with as concrete human territories. Joan names
  one more than he does: **innocence**, alongside power, surrender, desire. Also: his nav
  items are questions rather than labels. Worth one experiment, not a whole system.

---

## 11. Non-goals

- No payments, client portal, or booking engine beyond the existing Cal.com embed.
- No blog. The seasonal letter is a signup field posting to a form endpoint.
- No testimonials section until there are real testimonials. Leave the slot, comment it out.
- No cookie banner, no chat widget, no exit-intent anything.

## 12. Repo layout

```
/content/          copy — source of truth, do not rewrite
/assets/collage/   original collage artwork
/assets/portraits/ portrait photography
/reference/        inspiration notes + reference screenshots
/src/              your code
```
