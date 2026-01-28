# Big Bite Concession - Marketing Website

A production-ready static marketing website for Big Bite Concession, built with Vite, React, TypeScript, and CSS Modules.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server (Windows)
# Due to spaces in the path, use the helper batch file:
dev.bat

# OR use node directly:
node .\node_modules\vite\bin\vite.js

# Build for production (Windows)
build.bat

# OR use node directly:
node .\node_modules\typescript\bin\tsc && node .\node_modules\vite\bin\vite.js build

# For other operating systems or if path has no spaces:
npm run dev
npm run build
npm run preview
```

The development server will start at `http://localhost:5173`

**Note**: If you encounter path issues with `npm run` commands due to spaces in the folder name, use the provided `.bat` files or run node directly as shown above.

## 📁 Project Structure

```
big-bite-front-end/
├── public/
│   └── images/
│       └── menu/           # Place menu item images here
├── src/
│   ├── assets/
│   │   └── logo.png        # Logo placeholder (replace with actual logo)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AppLayout.tsx
│   │   ├── home/           # Home page sections
│   │   ├── ContactForm/
│   │   ├── MenuCard/
│   │   ├── SEO/
│   │   └── FloatingCallButton/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── menu.ts         # Menu items configuration
│   ├── styles/
│   │   ├── tokens.css      # CSS variables (colors, spacing, etc.)
│   │   ├── global.css      # Global styles and reset
│   │   └── utilities.css   # Utility classes
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## 🖼️ Managing Images

### Menu Images

1. **Location**: Place menu item images in `/public/images/menu/`

2. **Current Image Mappings**:
   - `turkey_chicken_leg.png` → Jumbo Turkey Legs
   - `blooming_onion.png` → Blooming Onions
   - `cheese_steak.png` → Philly Steak
   - `chicken_fingers_with_fries.png` → Chicken Fingers
   - `funnel_cake.png` → Funnel Cake
   - `loaded_fries.png` → Loaded Fries
   - `loaded_nachos_supreme.png` → Loaded Nachos Supreme

3. **Adding New Images**: 
   - Add image file to `/public/images/menu/`
   - Update the menu item in `src/data/menu.ts` with the `imagePath` property

### Logo

1. Replace the placeholder logo at `/src/assets/logo.png` with your actual logo
2. Recommended size: 200x200px or larger
3. Supported formats: PNG (with transparency), SVG

### Gallery Images

To add concession stand photos to the gallery:

1. Place images in `/public/images/gallery/`
2. Update `src/components/home/Gallery.tsx` to use real images instead of placeholders

## 📝 Managing Menu Items

Edit `/src/data/menu.ts` to manage menu items:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 'unique-id',
    name: 'Item Name',
    description: 'Description of the item',
    imagePath: '/images/menu/image-name.png', // Optional
    featured: true, // Shows on home page if true
  },
  // ... more items
];
```

### Adding a New Menu Item

1. Open `src/data/menu.ts`
2. Add a new object to the `menuItems` array:

```typescript
{
  id: 'new-item-id',
  name: 'New Menu Item',
  description: 'Description of your new item',
  imagePath: '/images/menu/new-item.png', // Optional
  featured: false, // Set to true to show on home page
}
```

3. If you have an image, add it to `/public/images/menu/` and reference it in `imagePath`

## 🎨 Customizing Colors and Styles

### CSS Variables

Edit `/src/styles/tokens.css` to change colors, spacing, and other design tokens:

```css
:root {
  --color-primary: #14b8a6;      /* Teal */
  --color-accent: #fbbf24;        /* Warm Yellow */
  /* ... more variables */
}
```

### Component Styles

Each component has its own CSS Module file (e.g., `ComponentName.module.css`). Edit these files to customize component-specific styles.

## 📞 Contact Information

Update business information in:

- **Footer**: `src/components/layout/Footer.tsx`
- **Contact Page**: `src/pages/Contact.tsx`
- **ContactTeaser**: `src/components/home/ContactTeaser.tsx`
- **FloatingCallButton**: `src/components/FloatingCallButton/FloatingCallButton.tsx`

Current contact info:
- Phone: 843-997-2666
- Email: bigbiteconcession@gmail.com
- Address: 627 Slash Pine Ct, Myrtle Beach

## 🌐 Deployment on Netlify

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

4. Follow the prompts to connect your site

### Option 2: Deploy via Netlify UI

1. **Build the project locally** (optional, for testing):
   ```bash
   npm run build
   ```

2. **Push code to GitHub/GitLab/Bitbucket**

3. **Go to [Netlify](https://app.netlify.com/)**

4. **Click "Add new site" → "Import an existing project"**

5. **Connect your Git repository**

6. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

7. **Click "Deploy site"**

### Option 3: Drag and Drop Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag the `dist` folder** to the upload area

### Post-Deployment

- Set up a custom domain in Netlify settings
- Enable HTTPS (automatic with Netlify)
- Configure redirects if needed (create `public/_redirects` file)

## 🔧 Build Optimization

The production build is automatically optimized with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Semantic HTML and ARIA labels for accessibility
- ✅ Keyboard navigation support
- ✅ SEO optimized with react-helmet-async
- ✅ Fast page loads with lazy loading
- ✅ Mobile floating call button
- ✅ Smooth scrolling and animations
- ✅ Form validation
- ✅ Sticky navigation

## 🎯 Pages

- **Home** (`/`): Hero, Featured Menu, Why Us, Gallery, Contact Teaser
- **About** (`/about`): Business story, values, service types
- **Contact** (`/contact`): Contact form, business info, call-to-action

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Routing**: React Router 6
- **SEO**: react-helmet-async
- **Styling**: CSS Modules (no external UI libraries)

## 📧 Contact Form Behavior

The contact form opens the user's default email client with pre-filled information. No backend is required. The form:
- Validates all required fields
- Checks email format
- Validates phone number format
- Opens mailto link with form data

## 🐛 Troubleshooting

### Images not showing
- Verify images are in `/public/images/menu/`
- Check that `imagePath` in `menu.ts` matches the actual filename
- Clear browser cache and rebuild

### Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 18+

### Styles not applying
- CSS Modules require `.module.css` extension
- Import styles as: `import styles from './Component.module.css'`
- Use className as: `className={styles.className}`

## 📄 License

© 2026 Big Bite Concession LLC. All rights reserved.

## 🤝 Support

For technical support or questions about the website, contact your development team.

For business inquiries, contact Big Bite Concession:
- Phone: 843-997-2666
- Email: bigbiteconcession@gmail.com
