# Video

Drop web-sized `.mp4` here (and `.webm` beside it if you have one — smaller
again, and used first where supported). The filename is passed to
`<VideoGround src="…" poster="…">`; the poster is a still from `../photos/`.

## Do not upload camera files

A few hundred megabytes cannot go in this repository. GitHub refuses anything
over 100MB outright, and — more importantly — git keeps every version of every
file forever, so a large upload makes the repo permanently slower to clone even
after the file is deleted. Compress first, upload second.

## What a background loop needs

| | Target |
|---|---|
| Length | 6–12 seconds, cut so the end meets the beginning |
| Size | **under 5MB**; 2–3MB is better |
| Width | 1280px is plenty — it sits behind a scrim |
| Frame rate | 24 or 30 |
| Audio | none. Remove the track entirely; it cannot play anyway |
| Format | H.264 MP4, plus VP9 WebM if you can |

Autoplay is only permitted for muted video, so the audio track is dead weight
in every browser — stripping it also saves space.

## Compressing on an iPad

1. **Photos app** — trim to the seconds you want, then Share → Save. Export
   at 720p rather than 4K if the option appears.
2. **iMovie** — drop the clip in, then Share → File → 720p, Low quality. This
   alone usually takes hundreds of megabytes to single digits.
3. If it is still over 5MB, shorten the clip. Length costs more than quality.

Check the file size before uploading. If it is over 25MB, it is not ready.

## What happens without a file

Nothing breaks. `VideoGround` shows the still and requests no video at all —
so the section can ship now and gain motion later.

## Who never sees the video

Anyone with reduced motion turned on, and anyone whose browser reports
Save-Data. Both get the still. That is deliberate: it means the still has to
be a good picture in its own right, not a placeholder.
