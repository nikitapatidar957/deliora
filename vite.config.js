import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  server: {
    port: 5173,
    open: false,
    fs: {
      allow: ['.']
    }
  },
  publicDir: false,
  plugins: [
    {
      name: 'copy-perfumes-assets',
      closeBundle() {
        const src = path.resolve(__dirname, 'perfumes_images1');
        const dest = path.resolve(__dirname, 'dist/perfumes_images1');
        copyDir(src, dest);
        console.log('✓ Successfully copied perfumes_images1 into dist/perfumes_images1');
      }
    }
  ]
});

