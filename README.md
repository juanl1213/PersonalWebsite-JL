# Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS. Designed to be fast, SEO-friendly, and easy to update.

## Features

- 🎨 Professional and minimalist design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with optimized assets
- 🔍 SEO-friendly with proper meta tags
- 📝 Easy to update content
- 🎯 Smooth scrolling navigation
- 📧 Contact form

## Sections

- **Homepage**: Brief introduction with call-to-action buttons
- **About**: Personal background and skills
- **Portfolio**: Showcase of projects and work
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

To build for GitHub Pages:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

1. Update the `base` path in `vite.config.ts` to match your repository name:
   ```ts
   base: '/your-repo-name/',
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Configure GitHub Pages to serve from the `dist` folder:
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select a branch (e.g., `gh-pages`)
   - Folder: `/ (root)` or `/dist` depending on your setup

4. Alternatively, use GitHub Actions for automatic deployment (recommended)

## Customization

### Update Personal Information

1. **Name**: Update in `src/components/Navigation.tsx` and `src/components/Hero.tsx`
2. **About Section**: Edit `src/components/About.tsx`
3. **Projects**: Modify the `projects` array in `src/components/Portfolio.tsx`
4. **Contact Info**: Update links in `src/components/Contact.tsx` and `src/components/Footer.tsx`
5. **Meta Tags**: Update `index.html` with your information

### Styling

The project uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React DOM

## License

MIT

