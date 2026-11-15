import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/content"

const NAV_LINKS = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">IT42U</div>
        </div>

        <nav aria-label="Główna" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 gap-2 text-base md:text-lg font-semibold px-6 py-6"
        >
          <a href={CONTACT.phoneHref}>
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">{CONTACT.phone}</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
