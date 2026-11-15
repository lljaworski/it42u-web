# IT42U Web Project - Copilot Instructions

## Project Overview
This is a Next.js 16 landing page for IT42U, a Polish technology company. The site is in Polish language.

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with CSS custom properties (oklch color space)
- **UI Library**: Custom components following shadcn/ui patterns
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages via `.github/workflows/deploy.yml` (static export)

## Code Style Guidelines

### Components
- Use functional components with TypeScript
- Mark client components with `"use client"` directive when needed
- Use the `cn()` utility from `@/lib/utils` for conditional classNames
- Follow the existing component patterns in `components/ui/`

### Styling
- Use Tailwind CSS utility classes
- Reference CSS variables for colors (e.g., `text-primary`, `bg-accent`)
- Custom colors are defined in `app/globals.css` using oklch color space
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### File Structure
- Page components go in `app/`
- Reusable UI components go in `components/ui/`
- Feature components go in `components/`
- Utilities go in `lib/`

### Naming Conventions
- Component files: kebab-case (e.g., `hero-section.tsx`)
- Component exports: PascalCase (e.g., `HeroSection`)
- Use descriptive Polish text for user-facing content

### Imports
- Use `@/` path alias for absolute imports
- Import order: React, external libs, internal components, utils, types

## Color Palette
- Primary: Deep navy blue (`oklch(0.25 0.04 250)`)
- Accent: Electric blue/cyan (`oklch(0.65 0.15 220)`)
- Use semantic color variables: `primary`, `secondary`, `accent`, `muted`, etc.

## Best Practices
- Keep components small and focused
- Use semantic HTML elements
- Ensure mobile-first responsive design
- Add smooth transitions with Tailwind's `transition-*` classes
- Follow existing animation patterns (`animate-fade-in-up`, `animate-pulse-slow`)
