import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Zadzwoń i zacznijmy działać</h2>
            <a
              href="tel:+48660953068"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-accent hover:text-accent/90 transition-colors"
            >
              <Phone className="h-8 w-8" />
              +48 660 953 068
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-lg mb-4 text-primary-foreground/90">IT42U - Twój partner w stabilnym rozwoju.</p>

            <a
              href="mailto:kontakt@it42u.pl"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              kontakt@it42u.pl
            </a>
          </div>

          <div className="pt-4 text-sm text-primary-foreground/60">© 2025 IT42U. Wszelkie prawa zastrzeżone.</div>
        </div>
      </div>
    </footer>
  )
}
