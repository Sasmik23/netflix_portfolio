/**
 * Script to generate thumbnail versions of images
 * 
 * This script uses sharp library to create optimized thumbnails
 * Install with: npm install sharp
 * Run with: node scripts/generateThumbnails.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('ERROR: sharp module not found. Please install it first:');
  console.error('npm install --save-dev sharp');
  process.exit(1);
}

// Configuration
const THUMBNAIL_WIDTH = 800; // Max width for thumbnails
const THUMBNAIL_QUALITY = 80; // JPEG quality (1-100)
const SOURCE_DIRS = [
  path.join(__dirname, '../src/images/saavadi'),
  path.join(__dirname, '../src/images/sangae25'),
  path.join(__dirname, '../src/images/naai'),
  path.join(__dirname, '../src/images/players'),
];

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Generate thumbnail for a single image
 */
async function generateThumbnail(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(THUMBNAIL_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: THUMBNAIL_QUALITY })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⊘ Directory not found: ${dirPath}`);
    return;
  }

  console.log(`\nProcessing directory: ${dirPath}`);
  const files = fs.readdirSync(dirPath);
  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const ext = path.extname(file).toLowerCase();
    
    // Skip if not an image or already a thumbnail
    if (!IMAGE_EXTENSIONS.includes(ext) || file.includes('_thumb')) {
      continue;
    }

    // Skip if it's a directory or index.ts
    if (fs.statSync(filePath).isDirectory() || file === 'index.ts') {
      continue;
    }

    // Generate thumbnail path
    const nameWithoutExt = path.basename(file, ext);
    const thumbnailName = `${nameWithoutExt}_thumb${ext}`;
    const thumbnailPath = path.join(dirPath, thumbnailName);

    // Skip if thumbnail already exists
    if (fs.existsSync(thumbnailPath)) {
      console.log(`⊙ Thumbnail exists: ${thumbnailName}`);
      skipped++;
      continue;
    }

    // Generate thumbnail
    const success = await generateThumbnail(filePath, thumbnailPath);
    if (success) processed++;
  }

  console.log(`Processed: ${processed}, Skipped: ${skipped}`);
}

/**
 * Main function
 */
async function main() {
  console.log('=== Image Thumbnail Generator ===');
  console.log(`Thumbnail width: ${THUMBNAIL_WIDTH}px`);
  console.log(`JPEG quality: ${THUMBNAIL_QUALITY}`);

  for (const dir of SOURCE_DIRS) {
    await processDirectory(dir);
  }

  console.log('\n✓ Thumbnail generation complete!');
  console.log('\nNext steps:');
  console.log('1. Review the generated thumbnails in your image folders');
  console.log('2. Update your drama data to reference the thumbnail files if needed');
  console.log('3. The code will automatically use *_thumb.* versions when available');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
