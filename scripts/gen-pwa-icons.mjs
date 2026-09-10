// Regenerates the PWA icons referenced by public/manifest.json from public/logo.svg.
// Run from the milta-web/ directory:  node scripts/gen-pwa-icons.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const svg = await readFile('public/logo.svg');

async function make(size, out) {
  const inner = Math.round(size * 0.78);
  const logo = await sharp(svg, { density: 384 })
    .resize({ width: inner, fit: 'inside' })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: '#ffffff' },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(out);
  console.log('wrote', out);
}

await make(192, 'public/logo192.png');
await make(512, 'public/logo512.png');
