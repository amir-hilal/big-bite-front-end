# Big Bite Logo

Place your logo file here as `logo.png` (or update the import path in Navbar.tsx).

**Recommended specifications:**
- Format: PNG with transparency or SVG
- Minimum size: 200x200px
- Square aspect ratio preferred
- Transparent background recommended

**How to replace:**
1. Save your logo as `logo.png` in this directory
2. If using a different format or filename, update the import in:
   - `src/components/layout/Navbar.tsx`

**Temporary Solution:**
The navbar currently uses an emoji (🍔) as a placeholder. Once you add your logo:
1. Add the logo file here
2. Update the Navbar component to import and use the image:

```tsx
import logo from '../../assets/logo.png';

// In the component:
<img src={logo} alt="Big Bite Concession Logo" className={styles.logoImage} />
```
