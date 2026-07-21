// Generates the hero slide images actually used by components/homeComp/Hero.jsx.
//
// The hero renders a square box (aspectRatio 1/1, max 500px) with
// object-fit: cover, so anything beyond a 1000px square (500 @2x) is downloaded
// and then cropped away by the browser. This pre-crops to exactly that, in webp.
//
// Sources stay untouched under src/assets/images/; derivatives are written to
// src/assets/images/hero/ and are what Hero.jsx imports. Re-running is safe.
//
// Note: scripts/optimize-images.mjs deliberately skips these (its 200 KB floor
// and 1600px cap target big page images, not small-but-oversized hero art).
//
//   node scripts/build-hero-images.mjs
//
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const OUT_DIR = 'src/assets/images/hero';
const EDGE = 1000;   // 500px CSS box @2x
const QUALITY = 74;

// Center-crop matches CSS object-fit: cover / object-position: center.
const SOURCES = [
  'src/assets/images/tax.jpg',
  'src/assets/images/payroll.jpg',
  'src/assets/images/cpa.jpg',
];

await fs.mkdir(OUT_DIR, { recursive: true });

let before = 0, after = 0;
for (const src of SOURCES) {
  const input = await fs.readFile(src);
  const meta = await sharp(input).metadata();
  const out = path.join(OUT_DIR, path.basename(src).replace(/\.\w+$/, '.webp'));

  const buf = await sharp(input)
    .rotate()
    .resize(EDGE, EDGE, { fit: 'cover', position: 'centre', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();

  await fs.writeFile(out, buf);
  before += input.length; after += buf.length;
  console.log(
    `${(input.length / 1024).toFixed(0).padStart(5)}KB -> ${(buf.length / 1024).toFixed(0).padStart(4)}KB` +
    `  ${meta.width}x${meta.height} -> ${EDGE}x${EDGE}  ${out}`
  );
}

console.log('-'.repeat(58));
console.log(`hero payload: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB` +
  `  (saved ${(100 * (1 - after / before)).toFixed(0)}%)`);
