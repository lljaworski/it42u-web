import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { NeuralNetworkBg } from "./neural-network-bg"

export function HeroSection() {
  return (
    <section className="relative overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 overflow-hidden">
        <NeuralNetworkBg />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse-slower" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full" />

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">IT for to you</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-primary">IT42U</span>
                <br />
                <span className="text-foreground/90">Technologia,</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  która Cię rozumie
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nie sprzedajemy gotowych pudełek. Tworzymy rozwiązania cyfrowe i hybrydowe skrojone dokładnie na miarę
                Twoich potrzeb biznesowych.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-6 py-6 sm:px-8 shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 group w-full"
                >
                  <span className="text-pretty text-center flex-1">Porozmawiajmy o Twoim projekcie</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl z-10" />
              <img
                src="/abstract-digital-technology-network-connected-to-h.jpg"
                alt="Wizualizacja technologii cyfrowej"
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
