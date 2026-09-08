"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative px-6 pb-16 pt-32 lg:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] overflow-hidden">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[54rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-[8%] top-[6rem] h-[16rem] w-[16rem] rounded-full bg-accent/10 blur-[110px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          AI &amp; full-stack developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-display text-[3rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          Build the AI system you{" "}
          <em className="text-primary">already have in mind.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I&apos;m Djaouad — an AI developer for teams that already know what they
          need built. AI integrations, custom systems, AI-powered products — from
          requirements through deployment. Fixed-price, milestone-based, remote
          worldwide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-2xl font-mono text-sm text-muted-foreground"
        >
          Already have requirements?{" "}
          <a href="#project-intake" className="text-primary hover:underline">
            Skip the sales pitch and tell me what you&apos;re building.
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#project-intake"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Describe your project
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            See what I&apos;ve built
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 font-mono text-xs text-muted-foreground"
        >
          Remote · overlaps US/EU hours · usually replies within an hour
        </motion.p>
      </div>
    </section>
  )
}
