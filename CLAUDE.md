# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing landing page for IT42U, a Polish technology company. All user-facing copy is in **Polish**. Originally generated with v0.app. The only deployment target is **GitHub Pages** via `.github/workflows/deploy.yml`; Vercel was intentionally removed — do not add Vercel-specific packages or config.

## Commands

Package manager is **pnpm**.

- `pnpm dev` — dev server
- `pnpm build` — static export into `out/` (this is exactly what CI runs)
- `pnpm lint` — `eslint .` (note: ESLint is not in devDependencies, so this fails until it is installed)

There is no test suite.

## Architecture

- **Next.js 16 App Router, static export.** `next.config.mjs` sets `output: 'export'` and `images.unoptimized: true`, so no server features (API routes, server actions, dynamic rendering, `next/image` optimization) can be used. `typescript.ignoreBuildErrors: true` means `pnpm build` will NOT catch type errors — run `pnpm exec tsc --noEmit` to check.
- **Deployment:** push to `main` → GitHub Actions builds with pnpm/Node 20 and uploads `./out` to Pages.
- **Asset paths / base path:** images in `public/` are referenced as `` `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/file.jpg` `` (see `hero-section.tsx`, `hybrid-section.tsx`). `NEXT_PUBLIC_BASE_PATH` is set in `next.config.mjs` (currently `''`, i.e. site served from domain root). If the site moves to a `/<repo>` sub-path, set `basePath` and that env var together and keep using this prefix pattern for new assets.
- **Page composition:** `app/page.tsx` stacks section components from `components/` (`Header`, `HeroSection`, `CoreServices`, `HybridSection`, `Footer`). New sections are added there. `components/neural-network-bg.tsx` is the animated hero background.
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`) with theme tokens as CSS custom properties in oklch in `app/globals.css` (the one imported by `layout.tsx`; `styles/globals.css` is an unused v0 leftover). Primary is deep navy `oklch(0.25 0.04 250)`, accent electric cyan `oklch(0.65 0.15 220)`; use semantic classes (`text-primary`, `bg-accent`, …). Custom animations like `animate-fade-in-up`, `animate-pulse-slow` are defined there.
- **UI primitives:** shadcn/ui pattern (`components.json`), only `components/ui/button.tsx` and `card.tsx` present; combine classes with `cn()` from `@/lib/utils`. Many Radix packages are installed but unused.

## Conventions (from `.github/copilot-instructions.md`)

- Component files kebab-case (`hero-section.tsx`), exports PascalCase named exports (`HeroSection`).
- `@/` path alias for imports; add `"use client"` only when a component needs it.
- Mobile-first responsive design with `sm:`/`md:`/`lg:`/`xl:` prefixes.

## Site content context

Audience, mission, section structure and content rules (no client names, neutral wording for the casino industry, company voice — not personal) are defined in `docs/superpowers/specs/2026-11-15-strona-firmowa-design.md`. Read it before changing any copy.
