"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Check } from "lucide-react"
import { email } from "@/lib/socials"

const processItems = [
  {
    title: "Fixed-price projects",
    text: "No hourly surprises. You get a fixed quote before development begins.",
  },
  {
    title: "Milestone-based delivery",
    text: "Pay as you see working software. Each milestone is a real deliverable.",
  },
  {
    title: "Scope reviewed before development",
    text: "I assess feasibility, define architecture, and confirm scope before writing code.",
  },
  {
    title: "Code and deployment handed over to you",
    text: "Source code, deployment, documentation — everything is yours.",
  },
]

const features = [
  "Free scope review and fixed quote",
  "Weekly demos at each milestone",
  "Working software before you pay the next milestone",
  "Source code and deployment handed over",
  "Post-launch support included",
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label="How pricing works"
          title="Fixed scope. No surprises."
          description="Every project starts with a free scope review. I assess what's needed, define the architecture, and send a fixed-price proposal. Development proceeds in milestones — you see working software at each step."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-center font-mono text-sm text-muted-foreground"
        >
          Projects typically start from{" "}
          <span className="text-primary">$800 – $1,500</span>{" "}
          depending on scope.
        </motion.p>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-8 sm:p-10"
          >
            <h3 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              What you get
            </h3>
            <ul className="mt-6 flex-1 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#project-intake"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Describe your project
              </a>
            </div>
          </motion.div>

          <div className="space-y-4">
            {processItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h4 className="font-display text-lg tracking-tight text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Every project is different — tell me about yours and get a{" "}
          <a
            href="#project-intake"
            className="underline decoration-primary underline-offset-4 hover:text-foreground"
          >
            free, no-obligation quote within 24 hours
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
