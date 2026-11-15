import { TECHNOLOGIES } from "@/lib/content"

export function TechStrip() {
  return (
    <section aria-labelledby="technologie" className="py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
        <h2 id="technologie" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-5">
          Technologie, w których pracujemy
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech}
              className="rounded-full border-2 border-accent/30 bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
