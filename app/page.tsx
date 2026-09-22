import { Hero } from "@/components/hero"
import { WhoThisIsFor } from "@/components/who-this-is-for"
import { WhatIBuild } from "@/components/what-i-build"
import { Projects } from "@/components/projects"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { ProjectIntake } from "@/components/project-intake"
import { Contact } from "@/components/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Djaouad Frih | AI Developer — Build the AI System You Already Have in Mind",
  description:
    "I build AI integrations, custom AI systems, and AI-powered products for teams that already know what they need. Fixed-price, milestone-based, production-ready. Tell me what you need built.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
        <Hero />
        <WhoThisIsFor />
        <WhatIBuild />
        <Projects />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <ProjectIntake />
        <Contact />
    </main>
  )
}
