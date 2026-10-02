"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const steps = [
  {
    step: "01",
    title: "Tell me what you're building",
    text: "Share your project brief. What it needs to do, what data it reads, what it has to be able to explain, and what success looks like.",
  },
  {
    step: "02",
    title: "I review the requirements and define scope",
    text: "I assess feasibility, define the architecture, and send you a fixed-price proposal with clear milestones. If AI is the wrong tool, I say so here.",
  },
  {
    step: "03",
    title: "We build in milestones",
    text: "You see working software at each milestone. Retrieval gets checked against a test set before it ships. Feedback is incorporated before the next one starts.",
  },
  {
    step: "04",
    title: "You receive the production-ready system",
    text: "Code, deployment, documentation, and the usage and latency reporting. All handed over, so the system is yours to run and to change.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          label="How it works"
          title="From brief to production."
          description="No surprises. You see working software at each step."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-sm text-primary">{s.step}</span>
              <h3 className="mt-3 font-display text-xl tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
