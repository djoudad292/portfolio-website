"use client"

import { motion } from "framer-motion"

import { POSITIONING } from "@/lib/positioning"

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
          AI systems engineer · agents, retrieval, and the product around them
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-display text-[3rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          I build AI systems that <em className="text-primary">run in production.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I'm Djaouad. Two shipped LangGraph agents with real tool-calling
          loops, sharing a common backend scaffold. Retrieval pipelines that
          cite their sources. Multi-tenant backends, mobile apps and MCP
          servers. Every one of them is deployed on a real domain with a public
          repository, so you can open it and try it before you talk to me.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground"
        >
          Retrieval scored offline on a goldset · token and latency metrics on
          every build · {POSITIONING}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a project
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