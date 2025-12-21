import { Card } from "@/components/ui/card"
import { CreditCard, Tag, Sparkles } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const features = [
  {
    icon: CreditCard,
    title: "Wizytówki Hybrydowe (NFC)",
    description:
      "Zrób wrażenie, które trwa. Projektujemy eleganckie, fizyczne wizytówki i tagi z wbudowanym chipem NFC. Jedno zbliżenie telefonu klienta natychmiast przenosi go do Twojego portfolio, kontaktu lub oferty.",
    image: `${basePath}/modern-nfc-business-card-hovering-over-smartphone-.jpg`,
  },
  {
    icon: Tag,
    title: "Interaktywne Promocje",
    description:
      "Materiały promocyjne i kody rabatowe, które żyją. Łączymy fizyczny design z cyfrowym śledzeniem skuteczności kampanii.",
    image: `${basePath}/digital-promotional-discount-coupon-on-screen-mode.jpg`,
  },
]

export function HybridSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Hybrydowe Rozwiązania</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl break-words px-4">
            Gdzie świat cyfrowy spotyka{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              fizyczną formę
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Nie zamykamy się tylko w kodzie. Tworzymy nowoczesną identyfikację wizualną, która łączy tradycyjne
            materiały z cyfrową interakcją.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-2 transition-all duration-500 hover:border-accent hover:shadow-2xl bg-card/50 backdrop-blur ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 lg:gap-0 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`p-6 sm:p-8 lg:p-12 space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-primary break-words">{feature.title}</h3>

                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>

                <div
                  className={`relative h-[250px] sm:h-[300px] lg:h-[400px] ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 lg:hidden" />
                  <div
                    className={`absolute inset-0 ${
                      index % 2 === 1
                        ? "lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent"
                        : "lg:bg-gradient-to-l lg:from-background lg:via-transparent lg:to-transparent"
                    } z-10`}
                  />
                  <img
                    src={feature.image || `${basePath}/placeholder.svg`}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
