# Photography

Photographs go here; Joan's collage artwork goes in `../collage/`. A slot takes
either — the filename decides which slot, the folder decides how it is credited.

| Filename | Slot |
|---|---|
| `hero.jpg` | Home hero |
| `resources-wing.jpg` | Resources, the opening banner (11/17; option 8 of eight), untouched (the client tried the Offerings treatment and chose the original, 11/18; the toned version is kept in `/content/_source/photos/resources-wing-toned.jpg`). `resources-flower.jpg`, the banner before, is kept |
| `offerings-hands.jpg` | Offerings, beside the quote (11/17; chosen from seven). Toned 11/17 to a faded, grainy beige (treatment A of three); the untouched photo is in `/content/_source/photos/offerings-hands-original.jpg`. Recipe below |
| `erotic-embodiment.jpg` | Sessions card 1 |
| `desire-mapping.jpg` | Sessions card 2 |
| `scar-tissue.jpg` | Sessions card 3 |
| `all-in-one.jpg` | Sessions card 4 |
| `land.jpg` | Roots, full width |

If a name exists in both folders the collage wins, so a photograph can hold a
slot until the artwork for it is ready.

## The Offerings photograph's treatment (11/17)

Faded, warm beige, a soft glow and baked-in film grain, after two reference
images the client sent. From the original:

```
ffmpeg -i offerings-hands-original.jpg -filter_complex "[0]eq=saturation=0.58:contrast=0.8:gamma=1.1,curves=r='0/0.14 0.5/0.6 1/0.96':g='0/0.12 0.5/0.56 1/0.93':b='0/0.10 0.5/0.48 1/0.86',split[a][b];[b]gblur=sigma=14[g];[a][g]blend=all_mode=screen:all_opacity=0.24,gblur=sigma=0.7[base];[0]format=gray,geq=lum='128',noise=alls=70:allf=u,gblur=sigma=0.55,format=yuv420p[n];[base]format=yuv420p[bb];[bb][n]blend=all_mode=overlay:all_opacity=0.55" -map_metadata -1 -q:v 2 offerings-hands.jpg
```

The wing (Resources) was tried with the same treatment (not used; kept for reference), with two changes: it is first
enlarged to 2028px wide (the original is 1014px, small for a full-screen
banner) so the grain stays fine, and warmed so its beige matches the hands
(the original is near-white, and desaturating alone left it grey-green):

```
ffmpeg -i resources-wing-original.jpg -filter_complex "[0]scale=2028:-2:flags=lanczos,split[s0][s1];[s0]eq=saturation=0.85:contrast=0.8:gamma=1.1,colorbalance=rs=0.05:bs=-0.05:rm=0.06:bm=-0.06:rh=0.03:bh=-0.05,curves=r='0/0.14 0.5/0.6 1/0.96':g='0/0.12 0.5/0.56 1/0.93':b='0/0.10 0.5/0.48 1/0.86',split[a][b];[b]gblur=sigma=28[g];[a][g]blend=all_mode=screen:all_opacity=0.24,gblur=sigma=0.7[base];[s1]format=gray,geq=lum='128',noise=alls=70:allf=u,gblur=sigma=0.55,format=yuv420p[n];[base]format=yuv420p[bb];[bb][n]blend=all_mode=overlay:all_opacity=0.55" -map_metadata -1 -q:v 2 resources-wing.jpg
```
