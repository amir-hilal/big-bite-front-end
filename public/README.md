# Public Assets Directory

Place your logo and other static assets in this directory.

## Logo

**Location**: `/public/logo.png`

The logo is already configured in the Navbar component and will automatically display when you add it here.

**Specifications:**
- Filename: `logo.png` (or update Navbar.tsx if using different name)
- Format: PNG with transparency recommended
- Size: 200x200px minimum (will display at 48x48px)
- Square aspect ratio preferred

**How to replace:**
1. Add your logo file as `logo.png` in this directory
2. Refresh the browser - it will automatically appear in the navbar

## Other Assets

You can also place:
- Favicon: `favicon.ico`
- Hero images
- Any other static files

Files in `/public` are served at the root URL path (e.g., `/public/logo.png` → `/logo.png`)
