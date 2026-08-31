/**
 * The collage is greyscale figures with cut fruit, but it was photographed
 * under a cool light: neutral areas measure B−G of +13 to +19, so the paper
 * and the bodies all carry a blue wash.
 *
 * Hue-selective desaturation fixes both problems at once. Keep chroma only
 * where the fruit is — orange through green — and drive everything else to
 * zero saturation, which is neutral grey *by definition*. The cast cannot
 * survive that, because a pixel with no saturation has no cast to carry.
 *
 * Luminance is left exactly alone. Only chroma is touched, so every value in
 * the artwork stays where the camera put it.
 */
import sharp from 'sharp';
import { existsSync } from 'node:fs';

const HUE_IN = [8, 22];    // ramps up across this range (reds -> orange)
const HUE_OUT = [150, 172]; // ramps down across this (green -> cyan)
const SAT_IN = [0.16, 0.34]; // weak chroma is cast, not fruit
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

export async function correct(src, dest, width = 1200) {
  const img = sharp(src).rotate().resize({ width, withoutEnlargement: true });
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;

  for (let i = 0; i < data.length; i += ch) {
    const [h, s, l] = rgbToHsl(data[i], data[i + 1], data[i + 2]);
    // how much this pixel looks like fruit rather than cast
    const keep =
      smooth(HUE_IN[0], HUE_IN[1], h) *
      (1 - smooth(HUE_OUT[0], HUE_OUT[1], h)) *
      smooth(SAT_IN[0], SAT_IN[1], s);
    const ns = Math.min(1, s * keep * BOOST);
    const [r, g, b] = hslToRgb(h, ns, l);
    data[i] = r; data[i + 1] = g; data[i + 2] = b;
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(dest);
  return dest;
}

if (process.argv[2]) {
  const [, , src, dest, w] = process.argv;
  if (!existsSync(src)) throw new Error('no such file: ' + src);
  await correct(src, dest, w ? Number(w) : 1200);
  console.log('wrote', dest);
}
