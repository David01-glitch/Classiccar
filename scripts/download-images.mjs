// Validates that every image referenced by src/assets/images.js exists on disk
// and is a non-empty file. Run with: npm run images
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = path.join(__dirname, '..', 'src', 'assets', 'images')

const expected = [
  'hero/hero-showcase.jpg',
  'restorations/restoration-in-progress.jpg',
  'roadtrips/route66-convertible.jpg',
  'roadtrips/route66-gas-station.jpg',
  'garages/vintage-garage-workshop.jpg',
  'musclecars/muscle-car-showroom.jpg',
  'musclecars/v8-engine.jpg',
  'community/car-show-community.jpg',
  'community/founder-mechanic.jpg',
  'tools/vintage-tools.jpg',
  'blog/vintage-dashboard.jpg'
]

let ok = true
for (const rel of expected) {
  const full = path.join(IMAGES_DIR, rel)
  if (!fs.existsSync(full)) {
    console.error(`MISSING: ${rel}`)
    ok = false
    continue
  }
  const { size } = fs.statSync(full)
  if (size < 1024) {
    console.error(`TOO SMALL (${size}B): ${rel}`)
    ok = false
  } else {
    console.log(`OK (${Math.round(size / 1024)}KB): ${rel}`)
  }
}

if (!ok) {
  console.error('\nImage validation failed.')
  process.exit(1)
}
console.log(`\nAll ${expected.length} images present and valid.`)
