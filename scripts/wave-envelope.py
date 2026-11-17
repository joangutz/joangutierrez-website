"""Nine-band loudness envelope of an audio file, 10 frames a second, for the
bar's waveform. Usage: envelope.py in.mp3 out.json"""
import json, math, re, subprocess, sys
from concurrent.futures import ThreadPoolExecutor

src, out = sys.argv[1], sys.argv[2]
FPS = 10
RATE = 44100
edges = [60 * (8000 / 60) ** (k / 9) for k in range(10)]

def band(k):
    lo, hi = edges[k], edges[k + 1]
    af = (f"aformat=channel_layouts=mono,highpass=f={lo:.1f}:poles=2,highpass=f={lo:.1f}:poles=2,"
          f"lowpass=f={hi:.1f}:poles=2,lowpass=f={hi:.1f}:poles=2,"
          f"asetnsamples={RATE // FPS},astats=metadata=1:reset=1,"
          f"ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-")
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-loglevel", "error", "-i", src,
                        "-ar", str(RATE), "-af", af, "-f", "null", "-"], capture_output=True, text=True)
    vals = []
    for m in re.finditer(r"RMS_level=(-?[0-9.]+|-inf)", r.stdout):
        v = m.group(1)
        vals.append(-120.0 if v == "-inf" else float(v))
    return vals

with ThreadPoolExecutor(9) as ex:
    bands = list(ex.map(band, range(9)))

n = min(len(b) for b in bands)
# dB to 0..1. Mostly against the band's own last few seconds (a rolling
# window), so a quiet passage moves as much as a loud one and the opening
# seconds are alive; a little against the band's whole range, so a swell
# still stands taller than a hush.
W = 15  # frames either side: three seconds in all
rows = []
for b in bands:
    b = b[:n]
    s = sorted(b)
    lo, hi = s[int(0.05 * (n - 1))], s[int(0.99 * (n - 1))]
    span = max(hi - lo, 1e-6)
    pre = [0.0]
    for v in b:
        pre.append(pre[-1] + v)
    row = []
    for i, v in enumerate(b):
        a0, a1 = max(0, i - W), min(n, i + W + 1)
        mean = (pre[a1] - pre[a0]) / (a1 - a0)
        local = 0.5 + (v - mean) / 7.0
        whole = (v - lo) / span
        x = 0.7 * local + 0.3 * whole
        row.append(max(0, min(35, round(x * 35))))
    rows.append(row)

# One printable character per value (0..35 as 0-9a-z): small, and gzips well.
alpha = "0123456789abcdefghijklmnopqrstuvwxyz"
json.dump({"fps": FPS, "bands": ["".join(alpha[v] for v in r) for r in rows]}, open(out, "w"), separators=(",", ":"))
print(out, n, "frames")
