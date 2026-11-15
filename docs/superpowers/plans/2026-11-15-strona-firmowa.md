# IT42U strona firmowa – Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Przebudować treść i układ strony zgodnie ze specyfikacją: przekaz lokalny (Myszków, Zawiercie), usługi językiem korzyści, realizacje jako dowody, pas technologii, kontakt.

**Architecture:** Jedna strona `app/page.tsx` składana z komponentów sekcji w `components/`. Treść sekcji z listami (usługi, realizacje, technologie) trzymana jako tablice stałych w `lib/content.ts`, komponenty tylko renderują.

**Tech Stack:** Next.js 16 (static export), React 19, Tailwind v4, lucide-react.

**Spec:** `docs/superpowers/specs/2026-11-15-strona-firmowa-design.md`

## Global Constraints

- Statyczny eksport (`output: 'export'`), bez funkcji serwerowych i formularzy z backendem.
- Treść po polsku, głos firmy („my”), zwrot do klienta („Twoja firma”); brak imienia i zdjęcia właściciela.
- Zakazane na stronie: nazwy klientów, miast przetargowych, zleceniodawców; słowo „kasyno”/„kasyna”/„hazard”.
- Branża rozrywkowa nazywana „platformy rozrywki online”.
- Bez wymyślonych liczb w realizacjach.
- Kontakt: telefon `+48 660 953 068`, e-mail `kontakt@it42u.pl`; region: „Myszków, Zawiercie i okolice”.
- Zachować paletę oklch i `NeuralNetworkBg`; obrazy z `public/` z prefiksem `process.env.NEXT_PUBLIC_BASE_PATH || ''`.

## Verification (brak test suite)

Każde zadanie kończy się:
- `pnpm exec tsc --noEmit` → brak błędów
- `pnpm build` → kończy się „prerendered as static content”
- `grep -riE "kasyn|hazard|IT for to you|NFC" app components lib out/index.html` → brak wyników (od Task 1 dalej)

## Review Focus

1. Szerokość telefonu (~360px): karty usług/realizacji i długi nagłówek hero nie wychodzą poza ekran — sprawdzić w `pnpm dev` przy 360px po Task 2 i 3.
2. Linki kontaktowe działają na telefonie: `href="tel:+48660953068"` i `href="mailto:kontakt@it42u.pl"` — grep w `out/index.html` w Task 4.
3. Ciemny motyw: nowe sekcje używają tokenów (`bg-background`, `text-foreground`, `text-muted-foreground`), nie kolorów na sztywno — grep `#[0-9a-f]{3,6}|bg-white|text-black` w nowych komponentach w Task 3.
4. Kotwice w headerze trafiają w istniejące `id` sekcji — grep w Task 4.
5. Rok w stopce aktualny — `new Date().getFullYear()` (renderowany w czasie buildu; akceptowalne, deploy na każdym pushu).

---

### Task 1: Usunięcie sekcji hybrydowej i poprawki globalne

**Files:**
- Delete: `components/hybrid-section.tsx`, `public/modern-nfc-business-card-hovering-over-smartphone-.jpg`, `public/digital-promotional-discount-coupon-on-screen-mode.jpg`
- Modify: `app/page.tsx` (usunąć import i `<HybridSection />`)
- Modify: `app/layout.tsx` (metadata)

- [ ] **Step 1:** Usunąć pliki i odwołania w `app/page.tsx`.
- [ ] **Step 2:** W `app/layout.tsx` ustawić:
  - `title: "IT42U – AI i automatyzacja dla firm z Myszkowa i Zawiercia"`
  - `description: "Pomagamy lokalnym firmom z Myszkowa, Zawiercia i okolic wdrażać automatyzację, agentów AI i oprogramowanie na miarę. Ponad 17 lat doświadczenia."`
  - usunąć `generator: "v0.app"`.
- [ ] **Step 3:** Weryfikacja (sekcja Verification) — grep `NFC|hybrid` w `app components` pusty.
- [ ] **Step 4:** Commit `feat: remove hybrid/NFC section, update SEO metadata`.

### Task 2: Treść w `lib/content.ts` + Hero

**Files:**
- Create: `lib/content.ts`
- Modify: `components/hero-section.tsx`

**Interfaces — Produces (`lib/content.ts`):**
```ts
export const CONTACT = { phone: "+48 660 953 068", phoneHref: "tel:+48660953068", email: "kontakt@it42u.pl", region: "Myszków, Zawiercie i okolice" } as const
export type Service = { icon: LucideIcon; title: string; problem: string; description: string }
export type CaseStudy = { title: string; sector: string; problem: string; solution: string; tech: string[] }
export const SERVICES: Service[]
export const CASE_STUDIES: CaseStudy[]
export const TECHNOLOGIES: string[]   // ["PHP", "Java", "Python", "Automatyzacja testów", "Agenci AI"]
```

- [ ] **Step 1:** Utworzyć `lib/content.ts`. `SERVICES` – 4 pozycje w kolejności: oprogramowanie na miarę, automatyzacja powtarzalnych zadań, agenci AI / asystenci obsługi klienta, automatyzacja testów; copy językiem korzyści (problem klienta → co robimy). `CASE_STUDIES` – 6 pozycji dokładnie wg listy w specyfikacji, sekcja „Struktura strony” pkt 4, bez nazw i liczb; pozycje 5–6 jako „platformy rozrywki online”.
- [ ] **Step 2:** Hero: usunąć `IT for to you`; nagłówek „AI i automatyzacja dla firm z Myszkowa, Zawiercia i okolic”; podtytuł z „ponad 17 lat doświadczenia” i „od 2020 roku”; dwa CTA: `Zadzwoń` (`CONTACT.phoneHref`) i `Napisz` (`mailto:` + `CONTACT.email`).
- [ ] **Step 3:** Weryfikacja + podgląd `pnpm dev` przy 360px (Review Focus 1).
- [ ] **Step 4:** Commit `feat: content module and local-focused hero`.

### Task 3: Sekcje Usługi, Realizacje, Technologie, Dlaczego lokalnie

**Files:**
- Modify: `components/core-services.tsx` (renderuje `SERVICES`, `id="uslugi"`)
- Create: `components/case-studies.tsx` → `export function CaseStudies()` (renderuje `CASE_STUDIES`, `id="realizacje"`, nagłówek „Doświadczenie, które przekłada się na Twój projekt”)
- Create: `components/tech-strip.tsx` → `export function TechStrip()` (renderuje `TECHNOLOGIES`, nagłówek dla kontrahentów np. „Technologie, w których pracujemy”)
- Create: `components/why-local.tsx` → `export function WhyLocal()` (`id="dlaczego-lokalnie"`; akapit: wsparcie lokalnego biznesu, przeciwwaga dla korporacji, możliwość spotkania na miejscu)
- Modify: `app/page.tsx` – kolejność: `Header, HeroSection, CoreServices, CaseStudies, TechStrip, WhyLocal, Footer`

**Interfaces — Consumes:** `SERVICES`, `CASE_STUDIES`, `TECHNOLOGIES` z `@/lib/content`; `Card` z `@/components/ui/card`; `cn` z `@/lib/utils`.

- [ ] **Step 1:** Zaimplementować komponenty (server components, bez `"use client"`, chyba że animacja wymaga).
- [ ] **Step 2:** Weryfikacja + grep kolorów na sztywno (Review Focus 3) + podgląd 360px i dark mode.
- [ ] **Step 3:** Commit `feat: services, case studies, tech strip, why-local sections`.

### Task 4: Header, Footer, kontakt

**Files:**
- Modify: `components/header.tsx` – telefon z `CONTACT`; kotwice `#uslugi`, `#realizacje`, `#kontakt` (ukryte na mobile poniżej `md:`).
- Modify: `components/footer.tsx` – `id="kontakt"`; telefon, e-mail (`mailto:`), `CONTACT.region`; `© {new Date().getFullYear()} IT42U`.

- [ ] **Step 1:** Implementacja.
- [ ] **Step 2:** Weryfikacja + `grep -o 'href="tel:+48660953068"\|href="mailto:kontakt@it42u.pl"' out/index.html` zwraca oba; każda kotwica z headera ma odpowiadające `id=` w `out/index.html`.
- [ ] **Step 3:** Commit `feat: header anchors and contact footer`.
