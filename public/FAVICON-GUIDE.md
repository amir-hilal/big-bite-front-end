# Favicon Setup Guide

Add these favicon files to the `/public` directory:

## Required Files

1. **favicon.ico** (16x16 or 32x32)
   - Traditional favicon for older browsers
   - Can be created from a PNG using online tools

2. **favicon-16x16.png**
   - Small favicon for browser tabs
   - 16x16 pixels

3. **favicon-32x32.png**
   - Standard favicon
   - 32x32 pixels

4. **favicon-192x192.png**
   - Android Chrome icon
   - 192x192 pixels

5. **favicon-512x512.png**
   - High-resolution icon for PWA
   - 512x512 pixels

6. **apple-touch-icon.png**
   - iOS home screen icon
   - 180x180 pixels

## How to Create Favicons

### Option 1: Online Tools
Use free favicon generators:
- https://realfavicongenerator.net/
- https://favicon.io/

Upload your logo and download all sizes.

### Option 2: From Existing Logo
1. Start with your logo at least 512x512px
2. Use an image editor to create each size
3. Export as PNG (with transparency if possible)

### Option 3: Quick Setup (if you have logo.png)
1. Use your logo as the base
2. Rename and resize:
   - 16x16 → favicon-16x16.png
   - 32x32 → favicon-32x32.png
   - 192x192 → favicon-192x192.png
   - 512x512 → favicon-512x512.png
   - 180x180 → apple-touch-icon.png
3. Convert 32x32 to .ico format → favicon.ico

## Tips
- Use a simple, recognizable version of your logo
- Ensure good contrast for visibility at small sizes
- Test on different backgrounds (light/dark)
- Keep the design simple - details get lost at small sizes

## Current Setup
The HTML is already configured to use all these favicons. Just add the files to `/public` and they'll work automatically.
