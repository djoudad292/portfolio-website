import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { Projects } from "@/components/projects"
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
      <Projects />
      <Process />
      <Pricing />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
      <ClosingCTA />
      <Footer />
      <Toaster
        theme="light"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#fbf7ee",
            border: "1px solid #d9ceb6",
            color: "#1e211a",
          },
        }}
      />
    </main>
  )
}