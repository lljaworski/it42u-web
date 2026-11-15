import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoreServices } from "@/components/core-services"
import { CaseStudies } from "@/components/case-studies"
import { TechStrip } from "@/components/tech-strip"
import { WhyLocal } from "@/components/why-local"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoreServices />
        <CaseStudies />
        <TechStrip />
        <WhyLocal />
      </main>
      <Footer />
    </div>
  )
}
