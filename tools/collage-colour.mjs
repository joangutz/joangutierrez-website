/**
 * The collage is greyscale figures with cut fruit, photographed under a cool
 * light. Two things have to happen, and the order matters more than either.
 *
 * FIRST the white balance, THEN the hue-selective desaturation.
 *
 * Doing it the other way round — which is what the first two attempts did —
 * cannot work, and the reason is worth writing down. Under a blue cast every
 * hue is dragged toward blue: a green rind lands around 180-210 degrees,
 * sitting on top of the blue paper, which the cast has also made genuinely
 * saturated. Measured on six of these images, 85% of all high-chroma pixels
 * fell between 195 and 225 degrees, and almost none read as green at all. So
 * any hue window drawn in that space either cuts the greens or keeps the
 * paper. There is no setting that separates them, because in cast space they
 * are the same colour.
 *
 * Neutralise first and the problem dissolves: the paper falls to near-zero
 * saturation, the greens return to green, and a wide window over the fruit
 * hues catches all of it without touching the figure.
 *
 * Luminance is preserved throughout. Only chroma moves.
 */
import sharp from 'sharp';
import { existsSync } from 'node:fs';

/**
 * Everything from watermelon pink through deep green, once balanced.
 *
 * The window is measured on a hue axis rotated so that red sits in the
 * middle rather than at the seam. Pink-red flesh lands around 350-360, and
 * a window starting at 4 cut all of it — the rinds came back green and the
 * watermelon's inside went grey. Hue is circular; a range written as two
 * plain numbers is not.
 */
const HUE_IN = [-26, -8];
const HUE_OUT = [168, 190];

/** Put the seam behind us: 350 becomes -10, so red is a continuous range. */
const unwrap = (h) => (h > 300 ? h - 360 : h);
/** Only the faintest tints read as cast; the hue gate does the real work. */
const SAT_IN = [0.10, 0.22];
const BOOST = 1.12;

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  const l = (mx + mn) / 2;
  if (!d) return [0, 0, l];
  const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
  let h;
  if (mx === r) h = ((g - b) / d + (g < b ? 6 : 0));
  else if (mx === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h * 60, s, l];
}

function hslToRgb(h, s, l) {
  if (!s) { const v = Math.round(l * 255); return [v, v, v]; }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const f = (t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  h /= 360;
  return [f(h + 1 / 3), f(h), f(h - 1 / 3)].map((v) => Math.round(v * 255));
}

/**
 * Channel gains taken from what should have been grey. The paper and the
 * bodies are the overwhelming majority of these frames, so the near-neutral
 * population is a fair reference — this is grey-world balancing restricted to
 * pixels that were nearly grey already, rather than over the whole image,
 * which the fruit would skew.
 */
function balance(data, ch) {
  let n = 0, sr = 0, sg = 0, sb = 0;
  for (let i = 0; i < data.length; i += ch) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    if (mx < 25 || mx > 245) continue;          // no signal in clipped pixels
    if ((mx - mn) / mx > 0.34) continue;        // that is fruit, not paper
    n++; sr += r; sg += g; sb += b;
  }
  if (!n) return [1, 1, 1];
  const mr = sr / n, mg = sg / n, mb = sb / n;
  const target = (mr + mg + mb) / 3;
  return [target / mr, target / mg, target / mb];
}

export async function correct(src, dest, width = 1200) {
  const img = sharp(src).rotate().resize({ width, withoutEnlargement: true });
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;

  const [gr, gg, gb] = balance(data, ch);

  for (let i = 0; i < data.length; i += ch) {
    const r = Math.min(255, data[i] * gr);
    const g = Math.min(255, data[i + 1] * gg);
    const b = Math.min(255, data[i + 2] * gb);

    const [h, s, l] = rgbToHsl(r, g, b);
    const hu = unwrap(h);
    const keep =
      smooth(HUE_IN[0], HUE_IN[1], hu) *
      (1 - smooth(HUE_OUT[0], HUE_OUT[1], hu)) *
      smooth(SAT_IN[0], SAT_IN[1], s);
    const ns = Math.min(1, s * keep * BOOST);
    const [nr, ng, nb] = hslToRgb(h, ns, l);
    data[i] = nr; data[i + 1] = ng; data[i + 2] = nb;
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(dest);
  return { gains: [gr, gg, gb] };
}

if (process.argv[2]) {
  const [, , src, dest, w] = process.argv;
  if (!existsSync(src)) throw new Error('no such file: ' + src);
  const { gains } = await correct(src, dest, w ? Number(w) : 1200);
  console.log('wrote', dest, 'gains', gains.map((g) => g.toFixed(3)).join(' '));
}
