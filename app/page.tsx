import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { SocialProof } from "@/components/social-proof"
import { Projects } from "@/components/projects"
import { AiTwin } from "@/components/ai-twin"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { ClosingCTA } from "@/components/closing-cta"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <SocialProof />
      <Projects />
      <AiTwin />
      <Process />
      <Pricing />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
      <ClosingCTA />
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#11141b",
            border: "1px solid #232936",
            color: "#f4f6fb",
          },
        }}
      />
    </main>
  )
}