import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Workflow, Bot } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Dedykowane Oprogramowanie",
    description:
      "Twój biznes jest unikalny, więc Twoje oprogramowanie też powinno takie być. Budujemy skalowalne systemy, aplikacje webowe i narzędzia, które rosną razem z Tobą, a nie Cię ograniczają.",
  },
  {
    icon: Workflow,
    title: "Inteligentna Automatyzacja",
    description:
      "Przestań tracić czas na powtarzalne zadania. Projektujemy boty i skrypty, które przejmują nudne procesy, uwalniając kreatywny potencjał Twojego zespołu. Zwiększ wydajność z dnia na dzień.",
  },
  {
    icon: Bot,
    title: "Wdrożenia AI i Agenci",
    description:
      "Przekuwamy szum wokół AI w realne wyniki. Implementujemy praktyczne modele sztucznej inteligencji i budujemy autonomicznych agentów, którzy wspierają obsługę klienta i analizę danych 24/7.",
  },
]

export function CoreServices() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 break-words">
            Podstawowe Usługi Cyfrowe
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Kompleksowe rozwiązania technologiczne dopasowane do Twoich celów biznesowych
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-2 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:-translate-y-2 bg-card relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
