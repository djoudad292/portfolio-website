"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="px-6 pb-16 pt-32 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          AI &amp; full-stack developer — rescue, internal tools, integrations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-display text-[3rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          Stalled app, spreadsheet chaos,{" "}
          <em className="text-primary">systems that don&apos;t talk?</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I&apos;m Djaouad — I take over existing web and mobile codebases,
          replace spreadsheet-driven ops with internal tools your team
          actually uses, and connect the systems that don&apos;t talk to each
          other. Fixed-price, milestone-based, remote worldwide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-2xl font-mono text-sm text-muted-foreground"
        >
          Developer gone quiet? Something half-built?{" "}
          <a href="#project-intake" className="text-primary hover:underline">
            Skip the sales pitch and show me what&apos;s stuck.
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
            Describe what&apos;s stuck
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
