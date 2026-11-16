import { CASE_STUDIES, TECHNOLOGIES } from "@/lib/content"

const base = process.env.NEXT_PUBLIC_BASE_PATH || ""

// Logotypy technologii (pobrane przez icons.mjs do public/assets/icons).
const TECH_ICONS: Record<string, { file: string; cls: string; w: number; h: number }> = {
  PHP: { file: "php.svg", cls: "ic ic-24 ic-wide", w: 46, h: 24 },
  Java: { file: "java.svg", cls: "ic ic-24 ic-tall", w: 18, h: 24 },
  Python: { file: "python.svg", cls: "ic ic-24", w: 24, h: 24 },
}

const TIMELINE = {
  layout: "timeline",
  alt: "Kolejne realizacje od pierwszego zlecenia do dziś: agencja pracy, serwisy miast, platforma B2B, medycyna online, platforma afiliacyjna, CRM i AI.",
  steps: [
    { label: "Agencja pracy", sub: "pierwsze zlecenie", icon: "ui:briefcase" },
    { label: "Serwisy miast", sub: "przetargi", icon: "ui:landmark" },
    { label: "Platforma B2B", sub: "hurtownia", icon: "ui:shopping-cart" },
    { label: "Medycyna online", sub: "aplikacja", icon: "ui:heart-pulse" },
    { label: "Afiliacja", sub: "wieloletni kontrakt", icon: "ui:link" },
    { label: "CRM i AI", sub: "dziś", icon: "ui:bot" },
  ],
}

// Sekcja #realizacje: sześć realizacji w dwóch kolumnach, pod nimi technologie.
export function CaseStudies() {
  const half = Math.ceil(CASE_STUDIES.length / 2)
  const cols = [CASE_STUDIES.slice(0, half), CASE_STUDIES.slice(half)]
  return (
    <section className="section" id="realizacje" aria-labelledby="realizacje-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="realizacje-h">
            Realizacje IT42U.{" "}
            <span className="muted">Od pierwszego zlecenia do dziś.</span>
          </h2>
        </div>
        <div className="panel">
          <div className="dg" data-diagram={JSON.stringify(TIMELINE)} data-dg-still=""></div>
        </div>
        <div className="grid">
          {cols.map((col, i) => (
            <ul className={`rows span-6${i ? " start-7" : ""}`} key={i}>
              {col.map((s) => (
                <li key={s.title}>
                  <span className="rows__name">{s.solution}</span>
                  <span className="rows__value">{s.sector}</span>
                  {s.tech.length > 0 && <p className="t-small">{s.tech.join(" · ")}</p>}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="tech-row" aria-label="Technologie, w których pracujemy">
          <span className="t-label">Pracujemy w</span>
          {TECHNOLOGIES.map((t) => {
            const icon = TECH_ICONS[t]
            return (
              <span className="ic-chip ic-chip--lg" key={t}>
                {icon && (
                  <img data-icon={icon.file.replace(".svg", "")} className={`${icon.cls} ic-tile`} src={`${base}/assets/icons/${icon.file}`} alt="" width={icon.w} height={icon.h} />
                )}
                {t}
              </span>
            )
          })}
          <span className="t-small muted">Nazw klientów nie publikujemy. Szczegóły opowiemy przy rozmowie.</span>
        </div>
      </div>
    </section>
  )
}
