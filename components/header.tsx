import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">IT42U</div>
        </div>

        <a href="#contact" className="group">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/30 gap-2 text-base md:text-lg font-semibold px-6 py-6"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">+48 660 953 068</span>
            <span className="sm:hidden">Zadzwoń</span>
          </Button>
        </a>
      </div>
    </header>
  )
}
