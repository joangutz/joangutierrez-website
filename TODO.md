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

## Later / watch-list

- First offering card pre-turned if turn rates prove low (needs analytics
  first — none installed, by design).
- A light table of contents on The Work if it still reads long.
- Substack stays a separate thing: the letter link remains in the footer
  as content; the site's captures all feed Kit.
