# What the site needs from Joan

Everything the build is waiting on, in one place. Each item names exactly
where it goes. Grep-able markers: `TODO-KIT`, `TODO-FORM`, `TODO-SOUND`,
`TODO-DOMAIN`, `TODO-JOAN`, `todo: true`.

The first four are the ones that change what a visitor can actually do.

---

## 1 · The domain — masomatix.com

The name is changed everywhere in the site. The **deploy** is not, and it
cannot be until DNS points somewhere, or the current preview URL goes dark
with nothing in its place. Three steps, in this order:

1. Point DNS at GitHub Pages — four `A` records on the apex
   (`185.199.108/109/110/111.153`), or a `CNAME` for `www` →
   `joangutz.github.io`. Then set the custom domain under the repository's
   **Settings → Pages**.
2. Add a file `public/CNAME` containing exactly one line: `masomatix.com`
3. In `astro.config.mjs` change `site` to `'https://masomatix.com'` and
   `base` to `'/'`.

Step 3 is two words. Every internal link already routes through `withBase()`,
so nothing else moves. Say the word once DNS is live and I'll do 2 and 3.

## 2 · Kit — activates every signup on the site with one line

The Red Rose Visualization funnel is built and invisible. One value turns it
on everywhere at once.

1. In Kit, create a **form** for the Red Rose Visualization.
2. Give it an **incentive email** that delivers the audio (Kit hosts the
   file — no page on this site needs to).
3. From the form's HTML embed, copy the **action URL**: it looks like
   `https://app.kit.com/forms/1234567/subscriptions`.
4. Paste it into `src/site.ts` at `TODO-KIT` (`kit.formAction`). Done — all
   of these go live at once:
   - Home, the gift section (currently a link to the gift page instead)
   - `/resource/gift/`, which currently falls back to an email link
   - Work with me, after the price grid
   - Begin, below the booking
   - the footer of every page, compact
5. One check: the site's forms submit the field `email_address`, Kit's
   standard. If your embed uses a different name, change it in
   `src/components/KitSignup.astro`.

## 3 · The application form — where submissions land

You asked for something like a Google Form that drops into
`joankgutz@gmail.com`. A static site cannot send mail by itself, so one
service has to receive the submission and forward it. **Formspree** is the
closest thing, free at this volume, and needs no code:

1. formspree.io → sign up with `joankgutz@gmail.com`
2. New Form → name it *Ma Somatix application*
3. copy the endpoint (`https://formspree.io/f/xxxxxxxx`)
4. paste it into `src/site.ts` at `TODO-FORM` (`form.endpoint`)

**Until then the form still works.** It gathers the answers into a prefilled
email addressed to you, and the page says so plainly. That works everywhere,
but it asks more of the applicant and loses anyone whose device has no mail
app set up — so this one is worth ten minutes.

The form appears on **Work with me** (for 1:1) and on **This Very Body**
(for the waitlist). The questions are in one array at the top of
`src/components/ApplicationForm.astro` — change them freely.

## 4 · The soundscape

Stu's loop goes in `/public/audio/` and `sound.file` in `src/site.ts` names
it. No control appears anywhere until it does. Full spec in
`public/audio/README.md`; the short version is: mp3, 60–180 seconds, loops
seamlessly, quiet, under 3 MB.

It never autoplays — browsers block that, and a site that asks people to
settle shouldn't make noise at a stranger. The control sits in the bottom
bar, off by default, fades in and out, and remembers the choice.

---

## 5 · The writing you listed as yours

Each of these has a page built and waiting, marked `TODO-JOAN` in the file:

| What | Where it goes |
| --- | --- |
| **This Very Body** — the programme description | `src/pages/work-with-me/this-very-body.astro` |
| **Relational Integrity Labs** — description, dates | `src/pages/work-with-me/happenings.astro` |
| **Spine Society** — description, dates | same file, second block |
| **Erotic Embodiment weekly class** | not placed yet — tell me where it belongs and I'll build it |
| **1:1 sessions**: who it's for / what to expect / what may be explored, short–medium–long | `content/offerings/one-to-one.md` — the long form is already there; the short and medium are not |
| **Inspiration** list | `content/pages/inspiration.md` — plain markdown, example shape in the comment |
| **Library** list | `content/pages/library.md` — same |

Every one of those pages says truthfully that the thing is coming rather
than standing empty or carrying words I made up for you.

## 6 · Two names that disagree

You wrote **Ma Somatix** for the site, the menu and the domain — that is
what is live. Your own bio text says **Ma Somatrix** twice ("founder of Ma
Somatrix Vibrant Health Education", "This is Ma Somatrix"), and Stu's piece
calls the concept **Ma Soma Matrix**.

I left your writing exactly as you wrote it rather than silently correcting
you, because the three might be deliberate — the practice, the entity, the
concept. If they aren't, say which one wins and it's a find-and-replace.

## 7 · The wordmark's order

The hero currently reads **MA** at the far left and **SOMATIX** at the far
right, because that is reading order. Your note said *MA (top far right)*
and *SOMATIX (top far left)*, which would read "Somatix Ma". I assumed a
slip; if it was deliberate, it's one line in `src/pages/index.astro`.

## 8 · FAQ answers — four questions need your words

`content/sessions/sessions.md` holds four answers marked `todo: true` that
will not render until you write them:

- What do I wear? Do I undress?
- Is what happens in sessions confidential?
- How do online sessions work?
- What is your cancellation policy?

Replace each `a:` and delete its `todo: true` line.

## 9 · For Clinicians — approve or rewrite

`content/pages/for-clinicians.md` is the one page not in your words, and it
makes scope-of-practice statements publicly. Read it; edit freely; then
delete the DRAFT comment at the top.

## 10 · Two offerings I archived rather than deleted

Your new list of five replaced the old four, and two of the old ones had no
home in it: **Desire & Pleasure Mapping** and **All-In-One**. Their full
text and pricing is kept in `content/_source/archived-*.md`. Say the word and
either comes back in a minute; otherwise it stays safely out of the way.

Note also that **This Very Body** replaced Desire & Pleasure Mapping's slot
but not its content — the old copy would have been mislabelled, so the new
page is a waitlist, not a rewrite.

## 11 · Testimonials — built and empty

Drop one `.md` per quote into `content/testimonials/` (that folder's README
has the format) and they appear on Home and under the price grid, with a
Prev/Next control. Nothing renders until then.

Two things worth holding to: get permission in writing, and let the client
choose how they are named — a first initial and a city is plenty, and for
this work it is often the most anyone will want.

## 12 · Photographs and video

Every page now opens with a photograph, drawn from what you uploaded. Eight
library photographs are placed; nothing is left unused. What is still
missing:

- **`share.jpg`** — 1200×630. Without it, every link you text or post
  previews blank. This is the cheapest high-value item on the list.
- **Video.** The spec is in `assets/video/README.md`: under 5 MB, 6–12
  seconds, silent, 1280px, H.264. The clay-kneading clip is earmarked for
  the Founder section. I have no ffmpeg here, so compression has to happen
  on your side before upload.
- More body photographs, if you have them — the banners currently reuse one
  image in two places.

## 13 · Typefaces — decided

Sprat (display) and Ronzino (labels) from Collletttivo, with Newsreader kept
for reading. Done; nothing needed. Both are SIL Open Font License, and the
licence files ship with the site in `public/fonts/`.

## 14 · The outbound links

None can be reached from the build environment, so none is verified. Open
each once:

| Link | Where it goes | Used on |
| --- | --- | --- |
| `joangutz.com` | the art practice | footer, every page |
| `eroticbecoming.substack.com` | the seasonal letter | footer, every page |
| `sexologicalbodyworkers.org/ethics` | ACSB code of ethics | footer + trust line |
| `cal.com/joan.gutierrez/20min` | the booking | Begin |

If the art address is wrong it is one line in `src/site.ts`
(`contact.art`), and it updates everywhere.

## 15 · Two pricing numbers to confirm

Both survive from the old offerings and now sit under new names:

- **1:1 Sessions** (was Erotic Embodiment Education): $1,800 / three months
- **Liberate the Pelvis** (was Scar Tissue Care): $580 / month

Confirm they stand, or change them in `content/offerings/*.md`.
