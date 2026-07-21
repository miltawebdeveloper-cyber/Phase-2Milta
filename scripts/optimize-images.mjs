// One-shot image optimizer. Downscales oversized images and recompresses them
// in place (same path + format, so all import/src references keep working).
//
// Every file it modifies is first copied to assets-originals/_backup/<path>, so
// this is fully reversible. Re-running is safe: already-small images are skipped.
//
//   node scripts/optimize-images.mjs           # optimize
//   node scripts/optimize-images.mjs --dry      # report only, change nothing
//
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const DIRS = ['src/assets', 'public'];
const MAX_EDGE = 1600;        // longest side cap (px) — ample for a 500px @3x hero
const JPEG_QUALITY = 78;
const MIN_BYTES = 200 * 1024; // ignore anything already under 200 KB
const BACKUP_ROOT = 'assets-originals/_backup';
const DRY = process.argv.includes('--dry');

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);
let scanned = 0, changed = 0, before = 0, after = 0;

async function walk(dir) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); }
  catch { return; }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { await walk(p); continue; }
    if (!exts.has(path.extname(e.name).toLowerCase())) continue;
    await optimize(p);
  }
}

async function optimize(file) {
  const stat = await fs.stat(file);
  if (stat.size < MIN_BYTES) return;
  scanned++;

  const ext = path.extname(file).toLowerCase();
  // Read into a Buffer so sharp never holds a handle on the path we write back to
  // (writing in place while sharp has the input open fails on Windows).
  const input = await fs.readFile(file);
  const img = sharp(input, { failOn: 'none' });
  const meta = await img.metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);

  let pipe = img.rotate(); // honour EXIF orientation, then strip metadata
  if (longest > MAX_EDGE) {
    pipe = pipe.resize({ width: meta.width >= meta.height ? MAX_EDGE : null,
                         height: meta.height > meta.width ? MAX_EDGE : null,
                         withoutEnlargement: true });
  }

  // Re-encode to the format the extension advertises so the bytes match the name.
  if (ext === '.png') pipe = pipe.png({ compressionLevel: 9, palette: true, quality: 80 });
  else if (ext === '.webp') pipe = pipe.webp({ quality: JPEG_QUALITY });
  else pipe = pipe.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const out = await pipe.toBuffer();
  if (out.length >= stat.size) return; // no improvement — leave original alone

  before += stat.size; after += out.length; changed++;
  const savedPct = (100 * (1 - out.length / stat.size)).toFixed(0);
  console.log(
    `${(stat.size / 1024).toFixed(0).padStart(6)}KB -> ${(out.length / 1024).toFixed(0).padStart(5)}KB` +
    ` (-${savedPct}%)  ${meta.width}x${meta.height}  ${file}`
  );

  if (DRY) return;
  const backup = path.join(BACKUP_ROOT, file);
  await fs.mkdir(path.dirname(backup), { recursive: true });
  try { await fs.access(backup); } catch { await fs.copyFile(file, backup); }
  await fs.writeFile(file, out);
}

for (const d of DIRS) await walk(d);

console.log('\n' + '-'.repeat(60));
console.log(`${DRY ? '[DRY RUN] ' : ''}files touched: ${changed}/${scanned}`);
console.log(`total: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB` +
  (before ? `  (saved ${(100 * (1 - after / before)).toFixed(0)}%)` : ''));
if (!DRY && changed) console.log(`originals backed up under ${BACKUP_ROOT}/`);
