# The soundscape

One looping file lives here, and `sound.file` in `/src/site.ts` names it.
Until that value is set, no sound control appears anywhere on the site.

## What to supply

| | |
|---|---|
| Format | `.mp3` (and `.ogg` beside it if you have one — Safari and Firefox pick whichever they prefer) |
| Length | 60–180 seconds, composed so the end meets the beginning without a seam |
| Level | quiet. It plays under reading, not over it — mastered around −20 LUFS |
| Size | under 3 MB, or it costs more to load than the page it accompanies |

Name it `soundscape.mp3`, drop it in this folder, then set in `/src/site.ts`:

```ts
export const sound = {
  file: 'soundscape.mp3',
  ...
```

## How it behaves

It never plays by itself. Browsers block unprompted audio, and a site that
asks people to settle should not make noise at a stranger. The control sits in
the bar at the foot of every page, silent until someone chooses otherwise; it
fades in and out rather than cutting, and it remembers the choice between
visits.

Once it is on, it keeps playing as the reader moves around the site: pages
change without reloading, and the one sound carries on underneath them,
unbroken, until it is turned off.

The same player plays the Red Rose Visualization for anyone who has signed
up for it: from the gift card on Resources, or from the small tray beside
the bar's control (the arrow), where the two can be switched between and
the Red Rose scrubbed. Only one thing ever plays at a time.
