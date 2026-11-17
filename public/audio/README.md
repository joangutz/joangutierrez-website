# The site's audio

| File | What it is |
|---|---|
| `pacific-equinox.mp3` | Stu Pender's Pacific Equinox, the soundscape. `sound.file` in `/src/site.ts` names it |
| `red-rose-visualization.mp3` | The Red Rose Visualization, for those who sign up for it |

## How the soundscape loops

Joan's upload (kept as `content/_source/audio/pacific-equinox-original.mp3`)
runs 20:16 and fades to silence over its last ten seconds. To make it repeat
without a pause or a jump, its final fifteen seconds (19:55–20:10, the fade)
are laid over its first fifteen, the opening easing in beneath the fade, and
the near-silent tail after 20:10 is dropped. The file is 19:55 long and
plays straight through its end into its beginning; the player loops it.

Made with ffmpeg from the original:

```sh
ffmpeg -i original.mp3 -t 1210 pe.wav
ffmpeg -i pe.wav -filter_complex "
[0:a]asplit=3[a][b][c];
[a]atrim=0:15,asetpts=N/SR/TB,afade=t=in:st=0:d=5:curve=qsin[head];
[b]atrim=1195:1210,asetpts=N/SR/TB[tail];
[c]atrim=15:1195,asetpts=N/SR/TB[mid];
[tail][head]amix=inputs=2:normalize=0[mix];
[mix][mid]concat=n=2:v=0:a=1[out]" -map "[out]" -c:a pcm_s16le loop.wav
ffmpeg -i loop.wav -af "afade=t=in:d=0.01,afade=t=out:st=1194.99:d=0.01" \
  -c:a libmp3lame -b:a 128k pacific-equinox.mp3
```

## How it behaves

It never plays by itself. The control sits in the bar at the head of every
page, silent until someone chooses otherwise; it fades in and out rather
than cutting, and it remembers the choice between visits. Once on, it keeps
playing as the reader moves around the site. Only one thing ever plays at a
time; the small tray beside the control switches to the Red Rose for those
who have it.
