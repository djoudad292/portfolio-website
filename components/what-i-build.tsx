"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Bot,
  FileSearch,
  Headset,
  Layers,
  MessageSquareCode,
  Workflow,
  Smartphone,
} from "lucide-react"

const categories = [
  {
    icon: FileSearch,
    title: "Retrieval and document intelligence",
    description:
      "Extraction, sentence-aware chunking, embeddings and vector search with an HNSW index, returning answers that cite the exact source. Built so you can check whether it is right, not so the demo looks confident.",
    bestFor:
      "Legal, compliance, research and support teams whose answers have to trace back to a document.",
  },
  {
    icon: Bot,
    title: "Tool-using AI agents",
    description:
      "LangGraph state machines with real tool-calling loops and conditional routing. The agent decides which tool to call, and knows when the case is beyond it. The receptionist validates every tool argument against a Zod schema before execution.",
    bestFor:
      "Processes with more than one step, where a single prompt and a search box are not enough.",
  },
  {
    icon: Headset,
    title: "Receptionists and support agents",
    description:
      "Always-on agents that answer, book, capture leads, open tickets and route to the right team, with a human handoff that includes a drafted reply so nothing is lost in the transition.",
    bestFor:
      "Small and mid-size businesses losing enquiries after hours or drowning in repetitive support.",
  },
  {
    icon: MessageSquareCode,
    title: "MCP server development",
    description:
      "Model Context Protocol servers that put your systems behind a typed tool interface, so AI assistants can read your data and run your workflows instead of scraping a page.",
    bestFor:
      "Teams shipping AI assistants, or anyone whose product needs to be callable by other agents.",
  },
  {
    icon: Layers,
    title: "AI added to an existing stack",
    description:
      "Chat, search, extraction or automation connected to the database, API and CRM you already run. No rebuild of what works, and no new vendor bill for a platform you do not need.",
    bestFor:
      "Teams with a product in production that needs AI in one specific place.",
  },
  {
    icon: Workflow,
    title: "Internal tools replacing manual work",
    description:
      "The approval queue, the intake form, the report nobody enjoys building. A real application on your own data with auth, roles and an audit trail, so the process stops living in one person's inbox.",
    bestFor:
      "Operations where the bottleneck is a manual process, not a missing feature.",
  },
]

const supporting = [
  {
    icon: Smartphone,
    title: "Web and mobile around the AI",
    text: "Next.js front ends, NestJS services, Postgres, and React Native apps shipped as APKs against the same backend. Supporting work, not the headline: most projects need it, few lead with it.",
  },
]

export function WhatIBuild() {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="What I build"
          title="Six things, in the order they usually come up."
          description="Most projects touch two or three of these. The order below roughly follows how a build tends to go: retrieve, reason, expose, then productise."
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

        <div className="mt-5">
          {supporting.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-dashed border-border bg-card/50 p-7 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                <s.icon className="h-6 w-6 shrink-0 text-muted-foreground" />
                <div>
                  <h3 className="font-display text-xl text-muted-foreground">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Supporting:{" "}
                    </span>
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}