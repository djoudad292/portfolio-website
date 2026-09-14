"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Check } from "lucide-react"

const criteria = [
  {
    title: "Something already exists — and it's stuck",
    description: "A half-built app, a developer who went quiet, a system nobody can change. You don't need a fresh start — you need someone who can read what's there and finish it.",
  },
  {
    title: "Your team runs on spreadsheets and manual work",
    description: "Copy-paste Mondays, five tools that don't talk, reports built by hand. You want one reliable tool instead — built around your data and your rules.",
  },
  {
    title: "You need custom implementation",
    description: "Off-the-shelf tools don't fit. You need something built around your data, your rules, your stack — not a generic template.",
  },
  {
    title: "You need one person who owns the whole fix",
    description: "Codebase, APIs, database, deployment — plus the AI layer where it pays. One person who reads the mess, ranks the fixes, and ships them.",
  },
]

export function WhoThisIsFor() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Who this is for"
          title="This works best if you…"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {criteria.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <Check className="mb-3 h-5 w-5 text-primary" />
              <h3 className="font-display text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Not sure about the technical approach?{" "}
          <a href="#project-intake" className="text-primary hover:underline">
            Describe the problem
          </a>{" "}
          and I&apos;ll help you figure out the right path.
        </motion.p>
      </div>
    </section>
  )
}
