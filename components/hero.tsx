"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { HeroCanvas } from "@/components/hero-canvas"

export function Hero() {
  return (
    <section id="top" className="relative px-6 pb-16 pt-32 lg:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] overflow-hidden">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[54rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-[8%] top-[6rem] h-[16rem] w-[16rem] rounded-full bg-accent/10 blur-[110px]" />
      </div>
      <HeroCanvas />
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          The briefing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-display text-[3rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          AI-Powered Full-Stack Engineering{" "}
          <em className="text-primary">for High-Growth SaaS</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I bridge the gap between complex AI capabilities and real-world business outcomes. I
          build scalable, secure, and production-ready applications that drive efficiency and
          revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            See what I do
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="/Djaouad_Frih_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Download CV <Download className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}