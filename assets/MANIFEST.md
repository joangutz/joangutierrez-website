# Image Manifest

## What is placed

| Slot | File | Picture |
|---|---|---|
| Home hero | `photos/hero.jpg` | Body in low warm light — full-bleed behind the title |
| Sessions 1 · Erotic Embodiment | `collage/erotic-embodiment.jpg` | Profile and cantaloupe |
| Sessions 2 · Desire & Pleasure Mapping | `collage/desire-mapping.jpg` | Reclining figure, melons along the body |
| Sessions 3 · Scar Tissue Care | `collage/scar-tissue.jpg` | Arms and open hands — the gentlest of the set |
| Sessions 4 · All-In-One | `collage/all-in-one.jpg` | Seated figure, watermelon and melon |
| Roots · the land | `photos/land.jpg` | The ceremonial fire |
| Home · story | `portraits/joan-home.jpg` | Direct gaze, flower behind the ear |
| Roots | `portraits/joan-roots.jpg` | Seated and laughing |

Every upload is kept in `library/`. To swap one, copy it over the slot name —
`cp library/collage/DSCF2519.jpg collage/all-in-one.jpg` — and change the alt
text in `/content/` to match. Nothing else moves.

Still unplaced: `share.jpg`, the 1200×630 image that appears when someone texts
or posts a link. There is none, so links currently preview blank.

Two things worth deciding rather than defaulting:

- **Photographs are not collage.** The brief treated the image slots as Joan's
  original collage work, and the footer credits them as such: "Collage artwork by
  Joan Gutiérrez." If the site carries photographs instead, that line wants
  rewording, and the credit should say who took them.
- **Portraits render black and white.** That was a deliberate rule, but the sea
  photograph's turquoise is most of what it has. The rule can become a per-image
  choice.


Every image slot the site expects. Until a real file exists at the path, the component
renders a grain-and-gradient placeholder in that slot's register — the layout is final either
way, so adding art is a filename swap with no component changes.

Per brief §4: collage is original art. Give it space, never crop it into a decorative strip,
never overlay text on it, and credit it as Joan's. Portraits render black and white.

## Collage — `/assets/collage/`

| File | Where | Register | Aspect | Notes |
|---|---|---|---|---|
| `hero.jpg` | Home hero (§5) | — | 4:5 portrait | Held in silence by the aperture. The LCP element: export at 1600px wide, quality ~78, plus AVIF/WebP. |
| `erotic-embodiment.jpg` | Sessions card 1 | Plumstone `#2C0B12` | 3:4 | |
| `desire-mapping.jpg` | Sessions card 2 | Cochineal `#5A121C` | 3:4 | |
| `scar-tissue.jpg` | Sessions card 3 | Brick `#7E2A26` | 3:4 | |
| `all-in-one.jpg` | Sessions card 4 | Clay `#8E3B2E` | 3:4 | |

Card faces may differ in scale without looking broken — that is the point of the mechanic
(§6b), so these four do not need identical crops. They do need to be recognisably a set.

## Portraits — `/assets/portraits/`

| File | Where | Aspect | Notes |
|---|---|---|---|
| `joan-home.jpg` | Home, above the two sentences of story | 4:5 | Rendered b&w in CSS; supply colour originals. |
| `joan-roots.jpg` | Roots | 4:5 | |

## Other

| File | Where | Notes |
|---|---|---|
| `land.jpg` | Roots — "the land as a designed moment" (§8) | Borderland ground/soil. Full-bleed section. |
| `share.jpg` | OG share image | 1200×630. Current site has one at `/assets/images/share.jpg`. |

## Alt text

Every image needs real alt text written by Joan or approved by her — it is in the §1 quality
floor and it describes original artwork, so it is not mine to invent. Placeholders carry a
clearly-marked TODO alt string that fails an obvious grep before launch:

    grep -rn "TODO-ALT" src/

## Not yet supplied

Nothing in this manifest exists in the repo yet. The five images carried over from the current
site (`image06`, `07`, `09`, `10`, `11`) may cover some of these slots — send them and I will
map them.
