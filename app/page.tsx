import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoreServices } from "@/components/core-services"
import { HybridSection } from "@/components/hybrid-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoreServices />
        <HybridSection />
      </main>
      <Footer />
    </div>
  )
}
