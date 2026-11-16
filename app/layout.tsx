import type React from "react"
import type { Metadata } from "next"
import { KitScripts } from "@/components/kit-scripts"

// Wygląd strony: zestaw taste-skill (public/assets). Deal (taste-skill 2.5.1):
// type software · hero split · nav-mega · close-word · footer-statement · rhythm surface-pairs
// buttons arrow · mark arc · kolory: start.mjs brand z kolorów marki IT42U (granat + cyjan), ciemna strona
// footer: footer-dark zamiast dealt footer-statement (statement wymaga jasnego tła, strona jest ciemna)
// type onest · effect grain-gradient (ramka hero; silk-folds był jasny, strona jest ciemna) · moment counter-rolls (#wspolpraca)

const base = process.env.NEXT_PUBLIC_BASE_PATH || ""

export const metadata: Metadata = {
  title: "IT42U – AI i automatyzacja dla firm z Myszkowa i Zawiercia",
  description:
    "Pomagamy lokalnym firmom z Myszkowa, Zawiercia i okolic wdrażać automatyzację, agentów AI i oprogramowanie na miarę. Ponad 17 lat doświadczenia.",
  openGraph: {
    type: "website",
    title: "IT42U – AI i automatyzacja dla lokalnych firm",
    description: "Agenci AI, automatyzacja i oprogramowanie na miarę dla firm z Myszkowa, Zawiercia i okolic.",
  },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "software", "page-type": "software" },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: "/icon.svg" },
}

export const viewport = { themeColor: "#0f1724" }

const ROOT = `:root {
  --p-bg: #0f1724; --p-surface: #172234; --p-ink: #e6ebf2; --p-muted: #93a0b4;
  --p-accent: #22a6dd; --p-accent-ink: #0f1724; --p-action: #22a6dd; --p-action-ink: #0f1724;
  --p-inv-bg: #e6ebf2; --p-inv-surface: #d5dae2; --p-inv-ink: #0f1724; --p-inv-muted: #515965;
  --p-inv-accent: #0f1724; --p-inv-accent-ink: #e6ebf2; --p-inv-action: #0f1724; --p-inv-action-ink: #e6ebf2;
  --font-display: "Onest", system-ui, sans-serif;
  --font-text: "Onest", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --display-weight: 400;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.04em;
}`

const PAGE_CSS = `
h1, h2 { hyphens: manual; -webkit-hyphens: manual; }
@media (min-width: 1024px) { .hero--split h1 { font-size: clamp(44px, 3.9vw, 56px); } }
.hero__media .panel { height: 100%; min-height: 240px; }
#uslugi .panel { --p-h: 300px; }
@media (max-width: 639px) { #uslugi .panel { --p-h: 150px; } #wspolpraca .panel { --p-h: 200px; } }
#wspolpraca .panel { --p-h: 280px; }
.stats-row { display: grid; grid-template-columns: 1fr; gap: var(--s-5); align-content: start; }
#realizacje .panel { --p-h: 190px; margin-bottom: var(--s-7); background: var(--p-surface); }
@media (max-width: 639px) { .app__pane--open > .at-over { display: none; } }
.app__pane--open > .at-over { position: absolute; width: min(380px, calc(100% - 48px)); }
@media (max-width: 639px) { #realizacje .panel { --p-h: 420px; } }
.app.ui { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); margin-top: var(--s-7); background: var(--u-bg); border: 1px solid var(--u-border); border-radius: var(--u-r); box-shadow: var(--u-shadow); }
.app > .app__pane { position: relative; min-width: 0; min-height: 0; overflow: hidden; }
.app > .app__pane + .app__pane { border-left: 1px solid var(--u-line); }
.app > .app__pane > .ui-panel { width: 100%; border: 0; border-radius: 0; box-shadow: none; }
.app > .app__pane::after { content: ""; position: absolute; inset: auto 0 0 0; height: 64px; background: linear-gradient(transparent, var(--u-bg)); pointer-events: none; }
@media (min-width: 1024px) and (max-width: 1279px) { .app.ui { grid-template-columns: minmax(0, 4fr) minmax(0, 8fr); } }
@media (max-width: 1023px) {
  .app.ui { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto minmax(0, 1fr); }
  .app > .app__pane--list { max-height: 252px; }
  .app > .app__pane--list::after { display: none; }
  .app .ui-win__side { display: none; }
  .app .ui-win__body { grid-template-columns: minmax(0, 1fr); }
  .app > .app__pane + .app__pane { border-left: 0; border-top: 1px solid var(--u-line); }
}
@media (max-width: 639px) {
  .app.ui { grid-template-rows: minmax(0, 1fr); }
  .app > .app__pane--list { display: none; }
  .app > .app__pane + .app__pane { border-top: 0; }
}
@media (max-width: 639px) { .hero .ui-chat__day, .hero .ui-chat__srcs { display: none; } }
#realizacje .tech-row { display: flex; flex-wrap: wrap; gap: var(--s-3); align-items: center; margin-top: var(--s-7); }
`

const KIT_CSS = [
  "system.css",
  "ui/cards.css",
  "motion/motion.css",
  "backgrounds/backgrounds.css",
  "layout/layout.css",
  "icons/icon.css",
  "ui/base.css",
  "ui/window/fragment.css",
  "ui/chat/fragment.css",
  "ui/notify/fragment.css",
  "ui/code/fragment.css",
  "ui/terminal-run/fragment.css",
  "ui/pipeline-board/fragment.css",
  "ui/checklist/fragment.css",
  "ui/toggles/fragment.css",
  "diagrams/diagram.css",
  "moments/counter-rolls/moment.css",
]

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" data-type="software" data-radius="soft" data-ground="sky" data-buttons="arrow" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400..700&family=JetBrains+Mono:wght@400..500&display=swap"
          rel="stylesheet"
        />
        {KIT_CSS.map((f) => (
          <link key={f} rel="stylesheet" href={`${base}/assets/${f}`} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: ROOT + PAGE_CSS }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)",
          }}
        />
        <script src={`${base}/assets/backgrounds/backgrounds.js`} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
      </body>
    </html>
  )
}
