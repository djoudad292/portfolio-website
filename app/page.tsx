import { Hero } from "@/components/hero"
import { WhatIBuild } from "@/components/what-i-build"
import { Projects } from "@/components/projects"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { ProjectIntake } from "@/components/project-intake"
import { Contact } from "@/components/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Djaouad Frih — AI Developer Who Builds and Ships Production Systems",
  description:
    "I build AI integrations, custom AI systems, and AI-powered products for teams that already know what they need. Fixed-price, milestone-based, production-ready code. Tell me what you need built.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <Hero />
      <WhatIBuild />
      <Projects />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <ProjectIntake />
      <Contact />
    </main>
  )
}
