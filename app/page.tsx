import { Hero } from "@/components/hero"
import { ProblemsWeSolve } from "@/components/problems-we-solve"
import { WhoThisIsFor } from "@/components/who-this-is-for"
import { WhatIBuild } from "@/components/what-i-build"
import { WhatIDontDo } from "@/components/what-i-dont-do"
import { Projects } from "@/components/projects"
import { HowVerified } from "@/components/how-verified"
import { HowItWorks } from "@/components/how-it-works"
import { Evidence } from "@/components/evidence"
import { Pricing } from "@/components/pricing"
import { ProjectIntake } from "@/components/project-intake"
import { Contact } from "@/components/contact"
import { POSITIONING } from "@/lib/positioning"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Djaouad Frih · AI Systems Engineer | Agents, Retrieval, Production Builds",
  description:
    "I build production AI systems: tool-calling agents, vector retrieval with source citations, MCP servers, and the application around them. Live on real domains, open source. Retrieval benchmarked on the AI Virtual Receptionist knowledge base (dental clinic KB, 15 chunks, 18 queries) at 93.8% F1 with an offline embedder.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
        <Hero />
        <ProblemsWeSolve />
        <WhoThisIsFor />
        <WhatIBuild />
        <WhatIDontDo />
         <Projects />
         <HowVerified />
         <HowItWorks />
        <Evidence />
        <Pricing />
        <ProjectIntake />
        <Contact />
        <p className="sr-only">{POSITIONING}</p>
    </main>
  )
}
