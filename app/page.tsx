import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LiveStatus } from "@/components/live-status"
import { Projects } from "@/components/projects"
import { AiTwin } from "@/components/ai-twin"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LiveStatus />
      <Projects />
      <AiTwin />
      <Pricing />
      <Testimonials />
      <Contact />
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