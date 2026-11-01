# Notes status — Joan's notes and the build-session notes, side by side

Checked on 1 November against the live build. **Done** means it is on the
site now. **Open** means it is waiting on something from Joan. **Clash**
means two notes pull different ways; what the site does now is described,
and the choice is Joan's.

## Joan's first spec (the big rebrand message)

| Note | Status |
|---|---|
| Navigation at the bottom of the page | **Done** |
| Name: Ma Somatix, in place of Joan Gutierrez | **Done** as **Ma Somatrix** (spelling corrected later) |
| Domain masomatix.com | **Open / clash** — the name is Soma**tr**ix but the domain is masoma**tix**. Joan to decide which to register; moving the site is three steps, listed in `astro.config.mjs` |
| Delete the Roots page and its CV; a simple About page | **Done** — old /roots address forwards to About |
| An image banner to open Work with me / About / Resource / Begin | **Done** — Begin now opens as one full-screen photograph |
| Drop-down tabs under Work with me and Resource | **Clash** — later replaced, in a build session, by four plain tabs. Every offering is a card on Work with me; the gift and Substack are cards on Resource |
| The Red Rose Visualization as a gift that collects emails | **Done** as a card that turns over. **Open:** collecting emails needs the Kit form address (TODO-KIT in `src/site.ts`); until then the card offers Joan's email |
| "Recorded for my w.s at CPR" | **Open** — not stated on the site (an earlier guess at "CPR" was removed). WRITING.md asks where and for whom |
| Burnt / sepia salmon colour | **Clash** — superseded by later choices: a linen ground (Joan picked "D Linen") and now the **Driftwood** palette. The salmon-era Wine palette is saved and can be tried at `?palette=wine` |
| Stu Pender soundscape while browsing | **Open** — needs the audio file (TODO-SOUND in `src/site.ts`) |
| Application form that lands in joankgutz@gmail.com | **Done** for now — it opens the visitor's email app addressed to Joan. **Open:** a Formspree address would let it send directly (TODO-FORM) |
| Homepage 1: the image, MA … SOMATRIX across the width, subtitle, Chicago and Beyond | **Done** — subtitle is now "Somatic education delivered with artistry for vibrant health" |
| Homepage 1: egg logo a little bigger, where it was | **Clash** — a build session asked to leave the logo out of the title card "for now" |
| Homepage 2: "What if the reason you're here…" | **Done** (now after the triangle, in the order set later) |
| Homepage 3: the triangle as "The sacred process of embodiment", Matrix / Ma / Soma with The Source / The Space / The Body, much larger, clickable, deletions | **Done** — clicking a bubble opens Joan's full definition beside it (her later note) |
| Homepage 4: Founder & Educator, colour photo, Learn more | **Done** — text updated to the 10/31 version |
| Erase "Sessions – Four Ways in"; Begin Here with the five offerings | **Done** |
| Homepage 5: A Gift | **Done** — on the rose |
| Phone: content scrolling visibly behind the menu bar | **Clash** — fixed by moving the bar to the bottom, but a later session asked for a translucent bar, so the page shows softly through it (blurred). A solid bar is a one-line change |
| WHERE: Chicago, IL — in-person / Internationally — online / Open to travel | **Done** — on Begin and in the phone menu |
| Descriptions to write (Spine Society, This Very Body, Erotic Embodiment weekly class, 1:1 short / medium / long, application questions, Inspiration and Library lists) | **Open** — Joan's to write; WRITING.md has prompts. Inspiration and Library appear on Resource automatically once written |
| "Only my words" | **Done** — every sentence on the site is Joan's; interface words are listed in WRITING.md |
| Triangle definitions shown in full, not summarised | **Done** |

## Joan's 10/31 notes

| Note | Status |
|---|---|
| Updated ABOUT bio | **Done**, verbatim |
| About banner: delete "About", read "Hello, I am Joan." | **Done** |
| The quote as its own larger section below the bio, like the Audre Lorde quote | **Done** — centred, large, in the display face, as the epigraph was |
| LINEAGES as a drop-down in the ABOUT tab: Founder / Lineage of Modalities | **Done, adapted (clash)** — the bar no longer has drop-downs, so these are two tabs at the top of the About page. /about/#lineage opens the second. Each modality folds open |
| Homepage Founder & Educator text | **Done**, verbatim |
| Remove the text below BEGIN HERE ("five ways in…") | **Done** — nothing shows under the heading |
| Nav headers "all lead the header page when you click it" — delete | **Done as understood** — this was the drop-down tabs also opening their own page; with no drop-downs it no longer happens. **Check with Joan:** if she meant the photo banner at the top of each page, that would undo her first note asking for one |
| HAPPENINGS: RELATIONAL → HAPPENINGS | **Done** — the heading over the two gatherings on Work with me |
| Images "not so stretched out" | **Done in part** — no image is distorted; the Work with me banner was a tall photo cropped into a thin strip (now a wide photo), and About now keeps Joan in frame. **Open:** two originals are small for full width — `about.jpg` (1024 px) and `rose.jpg` (1062 px). Larger files (2000 px+) would make them crisp |

## Build-session notes this round

| Note | Status |
|---|---|
| Resource as cards: the gift turns over, ripples when touched; Substack as a card; empty Inspiration / Library hidden until written | **Done** |
| Begin as one invitation: photograph, glass pane, one large action, quiet email and phone, WHERE as a line, "Cheers to being alive." | **Done** |
