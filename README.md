# joangutierrez.com

Somatic sex and embodiment education. Astro + Tailwind, static output.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Where things live

```
/content/          copy — the source of truth
  _source/         the two verbatim source documents. Never rendered.
  home/            Home's structured copy
  sessions/        the arc, consent, and the Note on all plans
  offerings/       the four offerings, split into the two card panels
  territories/     the Roots sections, in order
  roots/           the land, the epigraph, the credentials
  pages/           The Work (MDX) and For Clinicians
/assets/collage/   Joan's collage artwork — see MANIFEST.md
/assets/portraits/ portrait photography, rendered black and white
/reference/        the brief, the inspiration notes, the design plan
/src/              components, layouts, pages, tokens
```

Copy is editable without touching components. The one exception is Home's
sequence of teasers, whose structure lives in `content/home/home.md` as
frontmatter rather than prose.

## The design system

`reference/design-plan.md` is the reference, with the measured contrast behind
each decision. In short:

- **Madder** `#D6A09B` ground · **Cochineal** `#5A121C` ink · **Plumstone**
  `#2C0B12` deep ground · **Bract** `#EED4CB` lifted panels · **Quick**
  `#ED3943` the one live red, used as a field.
- Two colours flip by context, both hanging off a single `.on-dark` class:
  the aperture's core (Quick on dark grounds, `#A11119` on light) and the
  focus ring (Bract on dark, Plumstone on light).
- Type on a Quick field is **Plumstone, never Bract** — Bract measures 2.83:1
  there.
- **The aperture** (`src/components/Aperture.astro`) is one mark with one
  parameter, `--open`. It is the section mark, the transitions, the ground of
  Begin, and the motion the session cards turn with. Pass `bloom` or
  `bloomOnView` as props rather than as classes.

## Adding the artwork

Nothing in `/assets/` exists yet; every image slot renders a grained
placeholder in its register until the real file lands. Drop files in at the
names listed in `assets/MANIFEST.md` and they appear — no component changes.

Placeholder alt text is marked so it cannot ship unnoticed:

```bash
grep -rn "TODO-ALT" content/
```

## Still open

- `TODO-EMAIL` in `src/site.ts` — Joan's address was obfuscated on the old
  site and could not be recovered. Every contact route currently falls back to
  SMS and the consultation booking.
- `content/pages/for-clinicians.md` is a **draft awaiting Joan's approval** —
  the only prose on the site not carried across from her own writing.
- Two pricing inconsistencies are rendered exactly as written, and the price
  grid now makes both visible. See `reference/design-plan.md` §9.

## Deploying

Netlify, configured in `netlify.toml`. Static output, no server, no database.
Booking stays on Cal.com and the seasonal letter stays on Substack; neither is
loaded until the visitor asks for it.
