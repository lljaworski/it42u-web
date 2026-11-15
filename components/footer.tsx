import { Phone, Mail, MapPin } from "lucide-react"
import { CONTACT } from "@/lib/content"

export function Footer() {
  return (
    <footer id="kontakt" className="scroll-mt-20 bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Zadzwoń i zacznijmy działać</h2>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-accent hover:text-accent/90 transition-colors"
            >
              <Phone className="h-8 w-8" />
              {CONTACT.phone}
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 space-y-4">
            <p className="text-lg text-primary-foreground/90">IT42U - Twój partner w stabilnym rozwoju.</p>

            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              {CONTACT.email}
            </a>

            <p className="inline-flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-5 w-5" />
              {CONTACT.region}
            </p>
          </div>

          <div className="pt-4 text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} IT42U. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  )
}
