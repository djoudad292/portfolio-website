import { Navbar } from "@/components/navbar"
import { Rail } from "@/components/rail"
import { Hero } from "@/components/hero"
import { LiveStatus } from "@/components/live-status"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { AiTwin } from "@/components/ai-twin"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CommandPalette } from "@/components/command-palette"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr]">
      {/* Fixed intelligence rail — desktop only */}
      <aside className="hidden border-r border-border lg:block">
        <Rail />
      </aside>

      {/* Mobile top navigation */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* The briefing chapters */}
      <main className="min-w-0">
        <Hero />
        <LiveStatus />
        <Services />
        <Projects />
        <AiTwin />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      <CommandPalette />
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
    </div>
  )
}
