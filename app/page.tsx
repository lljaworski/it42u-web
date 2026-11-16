import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AgentSection } from "@/components/agent-section"
import { CoreServices } from "@/components/core-services"
import { CaseStudies } from "@/components/case-studies"
import { WhyLocal } from "@/components/why-local"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <AgentSection />
        <CoreServices />
        <CaseStudies />
        <WhyLocal />
      </main>
      <Footer />
    </>
  )
}
