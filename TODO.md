# What the site needs from Joan

Everything the build is waiting on, in one place. Each item names exactly
where it goes. Grep-able markers: `TODO-KIT`, `TODO-EMAIL`, `TODO-ALT`,
`todo: true`.

## 1 · Kit — activates five signup blocks with one line

The whole Red Rose Meditation funnel is built and invisible. It turns on
everywhere at once when one value is set.

1. In Kit, create a **form** for the Red Rose Meditation.
2. Give it an **incentive email** that delivers the audio (Kit hosts the
   file or links it — no page needed on this site).
3. From the form's HTML embed, copy the **action URL** — it looks like
   `https://app.kit.com/forms/1234567/subscriptions`.
4. Paste it into `src/site.ts` at the `TODO-KIT` marker
   (`kit.formAction`). Commit. Done — all five placements go live:
   - mid-way through The Work (after "The numbness nobody talks about")
   - Sessions, after the price grid ("Not ready?")
   - Begin, below the booking ("Not ready to book?")
   - Home, section six
   - the footer of every page, compact
5. One check: the site's forms submit the field `email_address`, Kit's
   standard. Confirm your form's embed uses the same name; if it differs,
   change it in `src/components/KitSignup.astro`.

## 2 · The Red Rose Meditation audio

Record/finalise the mp3 and attach it to the Kit incentive email above.
Nothing on the site hosts it.

## 3 · FAQ answers — four questions need your words

`content/sessions/sessions.md` renders four answers assembled from your
existing copy, and holds four more marked `todo: true` that will not
render until you write them:

- What do I wear? Do I undress?
- Is what happens in sessions confidential?
- How do online sessions work?
- What is your cancellation policy?

Replace each `a:` and delete its `todo: true` line.

## 4 · For Clinicians — approve or rewrite

`content/pages/for-clinicians.md` is the one page not in your words, and
it makes scope-of-practice statements publicly. Read it; edit freely; then
delete the DRAFT comment at the top.

## 5 · Email address

`src/site.ts`, `TODO-EMAIL` marker. Until set, contact falls back to SMS
and the consultation. One line.

## 6 · Images and alt text

Drop files into `/assets/collage/` and `/assets/portraits/` at the names
in `assets/MANIFEST.md` — they appear with no code changes. Then replace
every `TODO-ALT` string in `/content/` with real descriptions
(`grep -rn "TODO-ALT" content/`).

## 7 · Two pricing decisions (currently rendered exactly as written)

- Desire & Pleasure Mapping and All-In-One are both **$780/month**.
- All-In-One's 3 months ($1,700) is **cheaper** than Erotic Embodiment's
  3 months ($1,800), which it contains.

Change the numbers in `content/offerings/*.md` or confirm they stand.

## 8 · Two judgement calls only your eyes can make

- The vessel mark in the nav at 34px, on your own devices.
- The new favicon in a real browser tab.

## 9 · Testimonials — the section is built and empty

Drop one `.md` per quote into `content/testimonials/` (that folder's README
has the format) and they appear on Home and under the price grid on
Sessions, with a Prev/Next control. Nothing renders until then.

Two things worth holding to: get permission in writing, and let the client
choose how they are named — a first initial and a city is plenty, and for
this work it is often the most anyone will want.

## 10 · A decision on the display face

The lowercase f you disliked was a real bug, now fixed: the site was
loading a weight-only cut of Fraunces, so every optical-size and softness
setting in the stylesheet was being discarded and headings rendered at the
text optical size. Compare the live pages now before deciding anything.

If you still want to move, the closest free faces to Lovelace Text are
Petrona (warm, slightly condensed — my pick), Faustina, and Literata. All
three are installed and one line in `src/styles/global.css` switches the
site over. Say which and I'll do it.

## 11 · Photography and video — the biggest remaining gap

Everything about "gradient and photo-forward headers, a place to rest"
waits on real images. There is nowhere to put them yet because there are
none; the slots exist and render labelled placeholders.

- Hero and page headers: the photo-forward treatment needs its photographs
  first. Send them and the headers get built around them.
- The looping video you mentioned — Oaxaca hand-crafting — same. An mp4
  plus a poster frame, and it goes in the Home hero or Roots.
- Everything in item 6 below (collages, portraits, alt text) is the same
  blocker wearing a different hat.

## Later / watch-list

- First offering card pre-turned if turn rates prove low (needs analytics
  first — none installed, by design).
- A light table of contents on The Work if it still reads long.
- Substack stays a separate thing: the letter link remains in the footer
  as content; the site's captures all feed Kit.
- Check the Cal.com booking on Begin. It now asks for Cal's dark theme and
  the site's reds, which is the only styling reachable across an iframe
  boundary. Cal is unreachable from the build environment, so this has
  never been seen rendered. If it still fights the page, the embed becomes
  a link and that is a five-minute change.
- Verify the four outbound links resolve — see item 12.

## 12 · The outbound links, and which to check

All four came from the original site's own content file rather than from
guesswork, and none can be reached from the build environment, so none is
verified:

| Link | Where it goes | Used on |
| --- | --- | --- |
| `joangutz.com` | the art practice | footer, every page |
| `eroticbecoming.substack.com` | the seasonal letter | footer, every page |
| `sexologicalbodyworkers.org/ethics` | ACSB code of ethics | footer + Sessions trust line |
| `cal.com/joan.gutierrez/20min` | the booking | Begin, every price tile |

Open each once. The art site is the one you flagged; if the address is
wrong, it is one line in `src/site.ts` (`contact.art`) and it updates
everywhere.
