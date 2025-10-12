# Seva Shiksha Repository Overview

## Project Summary
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS, custom utility classes in src/index.css
- **Animations**: Framer Motion, AOS, custom keyframes

## Directory Highlights
- **src/components**: Reusable component modules (home, layout, common, etc.)
- **src/pages**: Route views assembling component sections
- **public/images**: Static images for content
- **tailwind.config.js** & **postcss.config.js**: Tailwind + PostCSS setup

## Scripts (package.json)
1. 
pm install
2. 
pm run dev – launch Vite dev server
3. 
pm run build – production build
4. 
pm run preview – preview build output

## Libraries in Use
- **lucide-react** for icons
- **react-hook-form** for forms
- **react-select** for dropdowns
- **swiper** (carousel usage)

## Conventions
- Functional React components with hooks
- Tailwind utility-first classes
- Framer Motion for enter/exit animations
- Keep accessibility attributes (ria-*, lt) on interactive elements and images

## Testing
- No automated tests present; manual verification recommended after changes

