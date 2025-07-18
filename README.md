# Bootstrap to Tailwind CSS Migration Guide

This document provides a comprehensive guide for migrating our Next.js application from Bootstrap to Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Migration Strategy](#migration-strategy)
- [Component Mapping](#component-mapping)
- [Common Bootstrap to Tailwind Conversions](#common-bootstrap-to-tailwind-conversions)
- [Page-by-Page Migration Checklist](#page-by-page-migration-checklist)
- [Testing Guidelines](#testing-guidelines)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

This project currently uses Bootstrap 5.3.0 for styling and needs to be migrated to Tailwind CSS for better customization, smaller bundle sizes, and utility-first approach.

### Current Architecture
- **Framework**: Next.js 13.5.1
- **Styling**: Bootstrap 5.3.0 (CDN)
- **Pages**: 10 pages with Bootstrap components
- **Components**: Navbar component with Bootstrap classes

### Target Architecture
- **Framework**: Next.js 13.5.1 (unchanged)
- **Styling**: Tailwind CSS 3.3+
- **Pages**: Same 10 pages with Tailwind utilities
- **Components**: Converted to Tailwind classes

## Prerequisites

Before starting the migration, ensure you have:
- Node.js 16+ installed
- Basic understanding of Tailwind CSS utilities
- Familiarity with the current Bootstrap implementation
- Access to design specifications or mockups

## Installation Steps

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind

Update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // Add custom colors to match Bootstrap theme
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

### 3. Update CSS File

Replace Bootstrap imports in `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom component classes */
@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md border border-gray-200;
  }
}
```

### 4. Remove Bootstrap Dependencies

Remove Bootstrap CDN links from `app/layout.tsx`:

```typescript
// Remove these lines:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## Migration Strategy

### Phase 1: Setup and Core Components (Week 1)
1. Install and configure Tailwind CSS
2. Remove Bootstrap dependencies
3. Migrate layout and navigation components
4. Create utility classes for common patterns

### Phase 2: Page Migration (Week 2-3)
1. Migrate pages one by one
2. Test each page thoroughly
3. Ensure responsive design works correctly
4. Update any custom components

### Phase 3: Optimization and Testing (Week 4)
1. Remove unused CSS
2. Optimize bundle size
3. Cross-browser testing
4. Performance testing

## Component Mapping

### Bootstrap to Tailwind Class Conversions

| Bootstrap Class | Tailwind Equivalent | Notes |
|----------------|-------------------|-------|
| `container` | `container mx-auto px-4` | Add horizontal padding |
| `row` | `flex flex-wrap -mx-4` | Negative margin for gutters |
| `col-*` | `flex-1 px-4` or `w-full md:w-1/2` | Responsive width classes |
| `btn btn-primary` | `bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded` | Custom button styling |
| `card` | `bg-white rounded-lg shadow-md border` | Card component |
| `navbar` | `bg-white shadow-sm` | Navigation bar |
| `text-center` | `text-center` | Same utility |
| `mb-4` | `mb-4` | Same spacing |
| `d-flex` | `flex` | Display flex |
| `justify-content-center` | `justify-center` | Flexbox justify |
| `align-items-center` | `items-center` | Flexbox align |

### Complex Component Migrations

#### Bootstrap Navbar → Tailwind Navigation
```typescript
// Before (Bootstrap)
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/">Brand</a>
  </div>
</nav>

// After (Tailwind)
<nav className="bg-blue-600 shadow-lg">
  <div className="container mx-auto px-4">
    <a className="text-white font-bold text-xl" href="/">Brand</a>
  </div>
</nav>
```

#### Bootstrap Card → Tailwind Card
```typescript
// Before (Bootstrap)
<div className="card shadow-sm">
  <div className="card-body">
    <h5 className="card-title">Title</h5>
    <p className="card-text">Content</p>
  </div>
</div>

// After (Tailwind)
<div className="bg-white rounded-lg shadow-sm border border-gray-200">
  <div className="p-6">
    <h5 className="text-xl font-semibold mb-2">Title</h5>
    <p className="text-gray-600">Content</p>
  </div>
</div>
```

## Common Bootstrap to Tailwind Conversions

### Layout Classes
```css
/* Bootstrap → Tailwind */
.container → .container .mx-auto .px-4
.row → .flex .flex-wrap .-mx-4
.col-12 → .w-full .px-4
.col-md-6 → .w-full .md:w-1/2 .px-4
.col-lg-4 → .w-full .lg:w-1/3 .px-4
```

### Spacing Classes
```css
/* Bootstrap → Tailwind */
.p-3 → .p-3
.px-4 → .px-4
.py-5 → .py-5
.m-auto → .mx-auto
.mb-4 → .mb-4
.mt-5 → .mt-5
```

### Typography Classes
```css
/* Bootstrap → Tailwind */
.display-4 → .text-5xl .font-bold
.lead → .text-xl .text-gray-600
.fw-bold → .font-bold
.text-muted → .text-gray-500
.text-center → .text-center
```

### Color Classes
```css
/* Bootstrap → Tailwind */
.bg-primary → .bg-blue-600
.text-primary → .text-blue-600
.bg-success → .bg-green-600
.text-white → .text-white
.bg-light → .bg-gray-100
```

### Button Classes
```css
/* Bootstrap → Tailwind */
.btn → .px-4 .py-2 .rounded .font-medium .transition-colors
.btn-primary → .bg-blue-600 .hover:bg-blue-700 .text-white
.btn-outline-primary → .border .border-blue-600 .text-blue-600 .hover:bg-blue-600 .hover:text-white
.btn-lg → .px-6 .py-3 .text-lg
.btn-sm → .px-3 .py-1 .text-sm
```

## Page-by-Page Migration Checklist

### ✅ Home Page (`app/page.tsx`)
- [ ] Hero section layout
- [ ] Feature cards grid
- [ ] Statistics section
- [ ] Responsive design
- [ ] Button interactions

### ✅ About Page (`app/about/page.tsx`)
- [ ] Two-column layout
- [ ] Vision/Mission/Values cards
- [ ] Call-to-action section
- [ ] Image placeholders

### ✅ Services Page (`app/services/page.tsx`)
- [ ] Service cards grid
- [ ] Icon integration
- [ ] Hover effects
- [ ] CTA section

### ✅ Portfolio Page (`app/portfolio/page.tsx`)
- [ ] Filter buttons
- [ ] Project cards
- [ ] Grid layout
- [ ] Modal interactions (if needed)

### ✅ Contact Page (`app/contact/page.tsx`)
- [ ] Contact form
- [ ] Contact information sidebar
- [ ] Form validation styling
- [ ] Social media buttons

### ✅ Blog Page (`app/blog/page.tsx`)
- [ ] Featured post layout
- [ ] Blog post grid
- [ ] Pagination
- [ ] Category badges

### ✅ Team Page (`app/team/page.tsx`)
- [ ] Team member cards
- [ ] Social media links
- [ ] Join team CTA
- [ ] Grid responsive layout

### ✅ Pricing Page (`app/pricing/page.tsx`)
- [ ] Pricing cards
- [ ] Feature comparison table
- [ ] Toggle switch
- [ ] Popular badge

### ✅ FAQ Page (`app/faq/page.tsx`)
- [ ] Accordion component
- [ ] Search functionality
- [ ] Category filters
- [ ] Support CTA

### ✅ Login Page (`app/login/page.tsx`)
- [ ] Login/signup forms
- [ ] Form validation
- [ ] Social login buttons
- [ ] Toggle between forms

### ✅ Navigation (`components/Navbar.tsx`)
- [ ] Mobile responsive menu
- [ ] Active state styling
- [ ] Dropdown menus (if any)
- [ ] Brand logo

## Testing Guidelines

### Visual Testing
1. **Desktop Testing**: Test on 1920x1080, 1366x768
2. **Tablet Testing**: Test on iPad (768x1024)
3. **Mobile Testing**: Test on iPhone (375x667), Android (360x640)

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Functionality Testing
- Navigation between pages
- Form submissions
- Button interactions
- Responsive behavior
- Loading performance

### Testing Commands
```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Best Practices

### 1. Use Tailwind's Design System
- Stick to Tailwind's spacing scale (4px increments)
- Use Tailwind's color palette
- Follow Tailwind's typography scale

### 2. Create Reusable Components
```typescript
// Create reusable button component
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = 'font-medium rounded transition-colors focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### 3. Use @apply for Complex Components
```css
@layer components {
  .card {
    @apply bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden;
  }
  
  .card-header {
    @apply px-6 py-4 border-b border-gray-200 bg-gray-50;
  }
  
  .card-body {
    @apply p-6;
  }
}
```

### 4. Maintain Consistent Spacing
- Use Tailwind's spacing scale consistently
- Create spacing variables for custom values
- Use negative margins for grid systems

### 5. Optimize for Performance
- Use PurgeCSS (built into Tailwind)
- Remove unused utilities
- Minimize custom CSS

## Troubleshooting

### Common Issues and Solutions

#### 1. Styles Not Applying
**Problem**: Tailwind classes not working
**Solution**: 
- Check `tailwind.config.ts` content paths
- Ensure CSS imports are correct
- Restart development server

#### 2. Bootstrap Conflicts
**Problem**: Bootstrap styles still showing
**Solution**:
- Remove all Bootstrap CDN links
- Clear browser cache
- Check for remaining Bootstrap classes

#### 3. Responsive Issues
**Problem**: Mobile layout broken
**Solution**:
- Use mobile-first approach (`sm:`, `md:`, `lg:`)
- Test on actual devices
- Use browser dev tools

#### 4. Custom Colors Not Working
**Problem**: Custom colors not available
**Solution**:
- Add colors to `tailwind.config.ts`
- Use proper color naming convention
- Restart development server

### Performance Optimization

#### Bundle Size Analysis
```bash
# Analyze bundle size
npm run build
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

#### Tailwind Optimization
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Remove unused utilities
  safelist: [
    // Add classes that might be generated dynamically
  ],
}
```

## Migration Timeline

### Week 1: Foundation
- [ ] Install Tailwind CSS
- [ ] Configure build process
- [ ] Remove Bootstrap dependencies
- [ ] Migrate navigation component

### Week 2: Core Pages
- [ ] Migrate Home page
- [ ] Migrate About page
- [ ] Migrate Services page
- [ ] Test responsive design

### Week 3: Remaining Pages
- [ ] Migrate Portfolio page
- [ ] Migrate Contact page
- [ ] Migrate Blog page
- [ ] Migrate Team page

### Week 4: Final Pages & Polish
- [ ] Migrate Pricing page
- [ ] Migrate FAQ page
- [ ] Migrate Login page
- [ ] Final testing and optimization

## Resources

### Documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js with Tailwind CSS](https://nextjs.org/docs/basic-features/built-in-css-support#tailwind-css)
- [Tailwind UI Components](https://tailwindui.com/)

### Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (VS Code Extension)
- [Headless UI](https://headlessui.com/) (Unstyled components)
- [Heroicons](https://heroicons.com/) (Icon library)

### Migration Tools
- [Windy](https://usewindy.com/) - Bootstrap to Tailwind converter
- [Transform](https://transform.tools/html-to-jsx) - HTML to JSX converter

## Support

For questions or issues during migration:
1. Check this README first
2. Review Tailwind CSS documentation
3. Test changes in isolation
4. Document any custom solutions

---

**Note**: This migration should be done incrementally, testing each component thoroughly before moving to the next. Always keep a backup of the current Bootstrap implementation until the migration is complete and tested.