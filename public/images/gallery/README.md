# Gallery Images Directory

Place concession stand and event photos in this folder for the gallery section.

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 1200x900px for best quality
- **Aspect Ratio**: 4:3 recommended
- **File Size**: Optimize images to < 1MB
- **Naming**: Descriptive names (e.g., `stand-setup-festival.jpg`, `cooking-turkey-legs.jpg`)

## Using Gallery Images

To use real images instead of placeholders:

1. Add your images to this directory
2. Update `src/components/home/Gallery.tsx`
3. Replace the placeholder div with actual images:

```tsx
const galleryItems = [
  { id: 1, src: '/images/gallery/stand-setup.jpg', alt: 'Concession stand setup' },
  { id: 2, src: '/images/gallery/food-prep.jpg', alt: 'Food preparation' },
  // ... more images
];

// In the component JSX:
<img 
  src={item.src} 
  alt={item.alt} 
  className={styles.image}
  loading="lazy"
/>
```

## Image Ideas

- Concession stand exterior
- Food preparation/cooking
- Customers enjoying food
- Different menu items being served
- Event setups (festivals, fairs, etc.)
- Team members at work
