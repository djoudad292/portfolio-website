"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const categories = [
  {
    index: "01",
    title: "AI Integrations",
    text: "Connect AI to your existing products, APIs, CRMs, databases, and business systems. Add intelligent features — chat, search, extraction, automation — without rebuilding what you already have.",
    examples: ["RAG over your internal docs", "AI chatbot in your SaaS", "Automated data extraction"],
  },
  {
    index: "02",
    title: "Custom AI Systems",
    text: "Build AI systems that use your business data, tools, APIs, and workflows to perform real tasks. Multi-step agents, knowledge bases, support systems, and automation pipelines.",
    examples: ["AI receptionist with booking", "Customer support agent", "Document Q&A system"],
  },
  {
    index: "03",
    title: "AI Products & Internal Tools",
    text: "Complete production-ready applications built around a specific AI use case. Full-stack web or mobile apps with auth, dashboards, payments, and real-time features.",
    examples: ["SaaS platform with AI core", "Internal ops dashboard", "Mobile app with AI features"],
  },
]

export function WhatIBuild() {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="What I get hired to build"
          title="Three types of systems."
          description="Each one is already live in production. I take your project from requirements through architecture, implementation, and deployment."
        />

        <div className="space-y-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8 sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {cat.index}
                  </span>
                  <h3 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                    {cat.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {cat.text}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.examples.map((ex) => (
                  <span
                    key={ex}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
