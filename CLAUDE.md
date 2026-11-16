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
- **Asset paths / base path:** images in `public/` are referenced as `` `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/file.jpg` `` (e.g. `case-studies.tsx`). `NEXT_PUBLIC_BASE_PATH` is set in `next.config.mjs` (currently `''`, i.e. site served from domain root). If the site moves to a `/<repo>` sub-path, set `basePath` and that env var together and keep using this prefix pattern for new assets.
- **Page composition:** `app/page.tsx` stacks `Header, HeroSection, AgentSection, CoreServices, CaseStudies, WhyLocal, Footer`. Section list/contact copy lives in `lib/content.ts`.
- **Styling: taste-skill kit, not Tailwind.** The page uses the taste-skill plugin's design kit copied into `public/assets` (system.css/js, UI fragments, motion, effects, diagrams, moments, icons) and its class names (`section`, `wrap`, `grid`, `span-6`, `card`, `ui-*`, `dg`...). Kit CSS links, the `:root` palette (brand navy `#0f1724` + cyan `#22a6dd`, Onest font) and page CSS are in `app/layout.tsx`; the dealt design choices are in a comment at its top. Avoid editing files in `public/assets` (they are the kit). Three deliberate one-line patches exist, all marked `IT42U`: `system.js`, `ui/ui.js` and `diagrams/diagram.js` no longer hold animations still on phones (<640px); re-apply them if the kit is re-copied from the plugin.
- **Kit scripts load after hydration** via `components/kit-scripts.tsx` (they mutate the DOM; loading them earlier would fight React hydration).
- Checks: `node <taste-skill>/scripts/consistency.mjs out/index.html --root out ...` and `gate.mjs` after `pnpm build`; waivers in `.taste-skill/waivers.json` (git-ignored). `app/globals.css`, `components/ui/*` and Tailwind are leftovers no longer used by the page.

## Conventions (from `.github/copilot-instructions.md`)

- Component files kebab-case (`hero-section.tsx`), exports PascalCase named exports (`HeroSection`).
- `@/` path alias for imports; add `"use client"` only when a component needs it.
- Mobile-first responsive design with `sm:`/`md:`/`lg:`/`xl:` prefixes.

## Site content context

Audience, mission, section structure and content rules (no client names, neutral wording for the casino industry, company voice — not personal) are defined in `docs/superpowers/specs/2026-11-15-strona-firmowa-design.md`. Read it before changing any copy.
