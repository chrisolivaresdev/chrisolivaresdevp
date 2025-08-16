import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackgroundEffects } from "@/components/background-effects"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
