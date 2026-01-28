# Menu Images Directory

Place menu item images in this folder.

## Current Image Mappings

The following images are expected and mapped in `src/data/menu.ts`:

- `turkey_chicken_leg.png` → Jumbo Turkey Legs
- `blooming_onion.png` → Blooming Onions
- `cheese_steak.png` → Philly Steak
- `chicken_fingers_with_fries.png` → Chicken Fingers
- `funnel_cake.png` → Funnel Cake
- `loaded_fries.png` → Loaded Fries
- `loaded_nachos_supreme.png` → Loaded Nachos Supreme

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 800x600px
- **Aspect Ratio**: 4:3 recommended (will be displayed at 4:3)
- **File Size**: Optimize images to < 500KB for fast loading
- **Naming**: Use lowercase with underscores (e.g., `item_name.png`)

## Adding New Images

1. Add your image file to this directory
2. Update `src/data/menu.ts` and add the `imagePath` property:
   ```typescript
   imagePath: '/images/menu/your-image.png'
   ```

## Missing Images

Items without images will display a placeholder with "Image Coming Soon" text.
