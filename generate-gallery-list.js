#!/usr/bin/env node

/**
 * Automatically generates a JSON file listing all photo files in the gallery folder.
 * This eliminates the need to manually update the galleryPhotos array in index.html.
 * 
 * Usage: node generate-gallery-list.js
 */

const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, 'assets', 'gallery');
const OUTPUT_FILE = path.join(__dirname, 'assets', 'gallery', 'photos.json');

// Supported image file extensions (raster photo formats only)
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

try {
  // Ensure the gallery directory exists; create it if it does not
  if (!fs.existsSync(GALLERY_DIR)) {
    fs.mkdirSync(GALLERY_DIR, { recursive: true });
  }
  // Read all files in the gallery directory
  const files = fs.readdirSync(GALLERY_DIR);
  
  // Filter for image files only (exclude non-images and the photos.json itself)
  const photoFiles = files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    })
    .sort(); // Sort alphabetically for consistent ordering

  // Validate that filenames do not contain spaces, which can break image URLs in browsers
  const invalidPhotoFiles = photoFiles.filter(file => file.includes(' '));
  if (invalidPhotoFiles.length > 0) {
    console.error('❌ The following image files have spaces in their names and cannot be processed:');
    invalidPhotoFiles.forEach(file => console.error(`   - ${file}`));
    console.error('\nPlease rename these files to remove spaces (for example, replace spaces with "-" or "_") and run this script again.');
    process.exit(1);
  }
  
  // Create the JSON output
  const output = {
    photos: photoFiles,
    generatedAt: new Date().toISOString(),
    count: photoFiles.length
  };
  
  // Write to the output file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
  
  console.log('✅ Gallery photo list generated successfully!');
  console.log(`📸 Found ${photoFiles.length} photo(s):`);
  photoFiles.forEach(photo => console.log(`   - ${photo}`));
  console.log(`💾 Saved to: ${OUTPUT_FILE}`);
  
} catch (error) {
  console.error('❌ Error generating gallery photo list:', error.message);
  process.exit(1);
}
