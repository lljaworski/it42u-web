import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CASE_STUDIES } from "@/lib/content"

export function CaseStudies() {
  return (
    <section id="realizacje" className="scroll-mt-20 py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl mb-4 md:mb-6 break-words">
            Doświadczenie, które przekłada się na Twój projekt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Od ponad 17 lat budujemy systemy dla firm, instytucji i dużych platform. Skoro robiliśmy rzeczy złożone, Twoją sprawę zrobimy dobrze.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Card key={study.title} className="border-2 bg-card">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{study.sector}</p>
                <CardTitle className="text-lg sm:text-xl text-primary leading-snug break-words">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Problem</p>
                  <CardDescription className="text-sm leading-relaxed">{study.problem}</CardDescription>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Co zrobiliśmy</p>
                  <CardDescription className="text-sm leading-relaxed">{study.solution}</CardDescription>
                </div>
                {study.tech.length > 0 && (
                  <ul className="flex flex-wrap gap-2" aria-label="Technologie">
                    {study.tech.map((t) => (
                      <li key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
