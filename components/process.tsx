"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "A free 15-minute call. We talk about your business, what's frustrating you, and what success looks like. You leave with a clear idea of scope — whether we work together or not.",
  },
  {
    number: "02",
    title: "Fixed quote",
    description:
      "Within 48 hours you get a fixed-price proposal: what I'll build, the timeline, and exactly what it costs. No hourly meters, no surprise invoices, no scope creep.",
  },
  {
    number: "03",
    title: "Build & demo",
    description:
      "I build in small weekly increments you can see and test. You review real progress, not promises. A milestone payment model means you only pay as you see value.",
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We ship, you get handover, and I stick around after launch. A post-launch support window covers fixes and tweaks so you're never left with a fragile handoff.",
  },
]

export function Process() {
  return (
    <section id="process" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="How it works"
          title="A process built to remove risk."
          description="No mystery, no uncertainty. Four clear steps from first call to launched product — with money-back style safety at every stage."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative min-w-0 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
            >
              <p className="mb-4 font-mono text-sm tracking-[0.25em] text-primary">
                {step.number}
              </p>
              <h3 className="font-display text-xl tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
