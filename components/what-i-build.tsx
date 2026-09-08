"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Bot, Layers, FileSearch, Smartphone } from "lucide-react"

const categories = [
  {
    icon: Bot,
    title: "AI Integrations",
    description:
      "Add AI capabilities to what you already have — connect models to your APIs, CRMs, databases, or internal tools. Chat, search, extraction, automation — without rebuilding your stack.",
    bestFor: "Teams with existing products that need AI added — chat, search, extraction, or automation connected to their current tools and data.",
  },
  {
    icon: FileSearch,
    title: "Custom AI Systems",
    description:
      "End-to-end systems where AI is the core — agents, knowledge bases, support automation, document processing. Built around your data, your workflows, your business rules.",
    bestFor: "Projects where the AI system IS the product — agents, knowledge bases, automation pipelines that use your own data and workflows.",
  },
  {
    icon: Layers,
    title: "AI-Powered Products",
    description:
      "Full production applications built around an AI use case — dashboards, internal tools, SaaS products. Full-stack with auth, real-time features, and deployment.",
    bestFor: "Founders and teams building a product where AI is central — dashboards, internal tools, SaaS apps with auth and real-time features.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "React Native apps for iOS and Android — connected to your backend, integrated with AI features, shipped to both app stores.",
    bestFor: "Teams that need a mobile front-end for their AI system or product — shipped to both app stores from one codebase.",
  },
]

export function WhatIBuild() {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="What I build"
          title="AI systems, integrations, and production builds."
          description="Four categories — most projects span two or more."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 sm:p-8"
            >
              <cat.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-display text-2xl text-foreground">{cat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <p className="mt-4 border-t border-border pt-4 font-mono text-xs leading-relaxed text-muted-foreground">
                <span className="text-primary">Best for:</span> {cat.bestFor}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
