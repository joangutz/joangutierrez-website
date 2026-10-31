# What the site needs from Joan

Everything the build is waiting on, in one place. Each item names exactly
where it goes. Grep-able markers: `TODO-KIT`, `TODO-FORM`, `TODO-SOUND`,
`TODO-DOMAIN`, `TODO-JOAN`, `todo: true`.

The first four are the ones that change what a visitor can actually do.

---

## 1 · The domain — masomatix.com, or masomatrix.com?

**Decide this first.** The name is now Ma Somatrix everywhere, but the
domain you gave me is `masomatix.com` — without the R. I have not changed
it, because a domain is something you buy, not something I can rename. If
you own `masomatrix.com` (or can get it), use that and the name and address
match; if you keep `masomatix.com`, people will type the R and miss you.
Whichever you settle on, it's one value: `site.domain` in `src/site.ts`.

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
   - Begin, below the booking button
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
(for the waitlist). It asks only for name, email, pronouns, location and a
message; the questions you want to ask are in `WRITING.md`, item 4.

## 4 · The soundscape

Stu's loop goes in `/public/audio/` and `sound.file` in `src/site.ts` names
it. No control appears anywhere until it does. Full spec in
`public/audio/README.md`; the short version is: mp3, 60–180 seconds, loops
seamlessly, quiet, under 3 MB.

It never autoplays — browsers block that, and a site that asks people to
settle shouldn't make noise at a stranger. The control sits in the bottom
bar, off by default, fades in and out, and remembers the choice.

---

## 5 · Writing — see WRITING.md

Everything that needs your words is in one place: `WRITING.md`, with a few
questions for each to start from. Every sentence now on the site is yours;
where there were sentences I had written for you, they are gone.

## 6 · The name — settled

**Ma Somatrix** everywhere: the title card, the bar, the menu, page titles,
descriptions, the application form's subject line. The one place it is not
yet is the domain — see item 1.

## 7 · (Settled) The wordmark reads MA at the left, SOMATRIX at the right

## 8 · (Moved) Common questions and For Clinicians — see WRITING.md

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

- ~~**Share image**~~ — done: `public/share.png`, the Driftwood lotus with
  the name and tagline on linen, shown when a link is texted or posted. A
  photograph could replace it later if you prefer one.
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
