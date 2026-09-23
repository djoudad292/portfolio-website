import { Hero } from "@/components/hero"
import { WhoThisIsFor } from "@/components/who-this-is-for"
import { WhatIBuild } from "@/components/what-i-build"
import { Projects } from "@/components/projects"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Djaouad Frih — I Finish & Fix Business Software: Rescue, Internal Tools, Integrations",
  description:
    "Stalled app? Developer gone? Spreadsheet chaos? I take over existing web/mobile codebases, replace manual ops with internal tools, and connect systems that don't talk. Fixed-price, milestone-based. Show me what's stuck.",
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
        <Contact />
    </main>
  )
}
