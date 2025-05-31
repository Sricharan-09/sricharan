import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateFavicons() {
  console.log('Generating favicons from profile picture...');
    // Source image path
  const sourceImage = path.join(__dirname, 'public', 'profile_pic.jpg');
  const targetDir = path.join(__dirname, 'public', 'favicon');
  
  // Ensure favicon directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  try {
    // Generate favicon.ico (16x16, 32x32, 48x48)
    await sharp(sourceImage)
      .resize(32, 32)
      .toFile(path.join(__dirname, 'public', 'favicon.ico'));
    
    // Generate favicon-16x16.png
    await sharp(sourceImage)
      .resize(16, 16)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));
    
    // Generate favicon-32x32.png
    await sharp(sourceImage)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
    
    // Generate apple-touch-icon.png (180x180)
    await sharp(sourceImage)
      .resize(180, 180)
      .png()
      .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
    
    // Generate android-chrome icons
    await sharp(sourceImage)
      .resize(192, 192)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon', 'android-chrome-192x192.png'));
    
    await sharp(sourceImage)
      .resize(512, 512)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon', 'android-chrome-512x512.png'));
    
    // Generate og-image.jpg for social media sharing
    await sharp(sourceImage)
      .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
      .jpeg({ quality: 90 })
      .toFile(path.join(__dirname, 'public', 'og-image.jpg'));
      
    console.log('Favicon generation completed successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();