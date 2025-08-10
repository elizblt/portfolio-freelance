# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Elise Boillat, a freelance web developer. Built with React 19, TypeScript, and Tailwind CSS, it showcases her services, skills, and work experience.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Architecture and Structure

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: General Sans font family (loaded from Fontshare)
- **Utilities**: clsx + tailwind-merge via `cn()` utility

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with global styles and navbar
│   ├── page.tsx            # Homepage with all portfolio sections
│   ├── about/page.tsx      # Dedicated about page
│   └── globals.css         # Global Tailwind styles
├── components/             # All React components (flat structure)
│   ├── Hero.tsx           # Landing section with photo and CTA
│   ├── Navbar.tsx         # Navigation with scroll effects
│   ├── Services.tsx       # Service offerings
│   ├── Skills.tsx         # Technical skills display
│   ├── CaseStudies.tsx    # Project showcases
│   ├── About.tsx          # About section
│   ├── Process.tsx        # Work process explanation
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form/info
│   └── StatusBadge.tsx    # Availability status component
└── lib/
    └── utils.ts           # Tailwind utility function (cn)
```

### Design System
- **Colors**: Custom "arsen" color palette defined in Tailwind config
  - Background: `#f9f9f9` 
  - Primary text: `#111111`
  - Secondary text: `#666666`
  - Accent: `#22c55e` (green)
- **Typography**: General Sans font with various weights
- **Component Pattern**: Single-file components with inline Framer Motion animations

### Key Features
- Responsive design with mobile-first approach
- Scroll-based navbar visibility and active state management
- Smooth animations using Framer Motion
- French language content
- SEO optimized with proper metadata
- Image optimization with Next.js Image component

## Configuration Files

### Tailwind CSS
Custom configuration in `tailwind.config.ts` with:
- General Sans font family setup
- Custom color palette (arsen theme)
- Content paths for src and components directories

### shadcn/ui Integration
Configured via `components.json` with:
- New York style
- TypeScript and RSC enabled
- Path aliases for components and utilities

### Deployment
- Configured for Netlify deployment via `netlify.toml`
- Uses `@netlify/plugin-nextjs` for optimized builds

## Development Notes

### Styling Approach
- Uses Tailwind utility classes extensively
- Custom animations with Framer Motion for interactive elements
- Consistent spacing and typography scale
- Mobile-responsive design patterns

### Component Architecture
- All components are client components using "use client" directive
- Flat component structure (no nested directories)
- Each major section is a separate component
- Reusable utilities in `/lib/utils.ts`

### State Management
- Local state with React hooks (useState, useEffect)
- No external state management library
- Scroll position tracking for navbar behavior

When working with this codebase:
- Follow the established French language patterns for content
- Maintain the clean, minimal design aesthetic
- Use Framer Motion for animations to match existing patterns
- Preserve the mobile-first responsive design approach
- Utilize the custom Tailwind color palette and spacing system