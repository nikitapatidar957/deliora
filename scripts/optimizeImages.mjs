import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../perfumes_images1');
const backupDir = path.resolve(__dirname, '../perfumes_images1_backup');

async function run() {
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const files = fs.readdirSync(targetDir);
  let totalOrigBytes = 0;
  let totalOptBytes = 0;

  console.log('--------------------------------------------------------------------------');
  console.log('Optimizing Images in perfumes_images1...');
  console.log('--------------------------------------------------------------------------');

  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      continue;
    }

    const srcPath = path.join(targetDir, f);
    const backupPath = path.join(backupDir, f);
    const origSize = fs.statSync(srcPath).size;
    totalOrigBytes += origSize;

    // Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(srcPath, backupPath);
    }

    try {
      let pipeline = sharp(backupPath); // read from backup

      if (['.jpg', '.jpeg'].includes(ext)) {
        // High quality JPEG optimization: max 1600px width/height, mozjpeg quality 82
        pipeline = pipeline
          .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true, progressive: true });
      } else if (ext === '.png') {
        // High quality PNG optimization: resize max 1600px, 8-bit palette compression with alpha
        pipeline = pipeline
          .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
          .png({ quality: 85, compressionLevel: 9, palette: true });
      }

      const buffer = await pipeline.toBuffer();

      // Only write if buffer is smaller than original
      if (buffer.length < origSize) {
        fs.writeFileSync(srcPath, buffer);
        totalOptBytes += buffer.length;
        const savedPercent = (((origSize - buffer.length) / origSize) * 100).toFixed(1);
        console.log(`✓ ${f.padEnd(25)} | ${(origSize / 1024).toFixed(0)} KB -> ${(buffer.length / 1024).toFixed(0)} KB (-${savedPercent}%)`);
      } else {
        totalOptBytes += origSize;
        console.log(`= ${f.padEnd(25)} | ${(origSize / 1024).toFixed(0)} KB (already optimal)`);
      }
    } catch (err) {
      totalOptBytes += origSize;
      console.error(`✗ Error optimizing ${f}: ${err.message}`);
    }
  }

  const savedMb = ((totalOrigBytes - totalOptBytes) / 1024 / 1024).toFixed(2);
  const totalPercent = (((totalOrigBytes - totalOptBytes) / totalOrigBytes) * 100).toFixed(1);

  console.log('--------------------------------------------------------------------------');
  console.log(`TOTAL BEFORE: ${(totalOrigBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`TOTAL AFTER:  ${(totalOptBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`SAVED:        ${savedMb} MB (${totalPercent}% reduction)`);
  console.log('--------------------------------------------------------------------------');
}

run();
