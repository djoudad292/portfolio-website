"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"

interface Problem {
  problem: string
  solution: string
  label: string
  href: string
  external: boolean
}

const problems: Problem[] = [
  {
    problem: "Customer support overload",
    solution: "AI Support Agent — answers, tickets, escalation",
    label: "Try it live",
    href: "https://customer.djaouad.is-a.dev/",
    external: true,
  },
  {
    problem: "Missed leads after hours",
    solution: "AI Receptionist — 24/7 answers, booking, lead capture",
    label: "Try it live",
    href: "https://chat.djaouad.is-a.dev/",
    external: true,
  },
  {
    problem: "Too much manual / document work",
    solution: "AI Document System — cited answers, summaries",
    label: "Try it live",
    href: "https://docs.djaouad.is-a.dev/",
    external: true,
  },
  {
    problem: "Spreadsheet / manual processes",
    solution: "Business Automation — internal tools built around your data",
    label: "Describe the problem",
    href: "#contact",
    external: false,
  },
  {
    problem: "Disconnected software",
    solution: "System Integrations — connect the tools that don't talk",
    label: "Describe the problem",
    href: "#contact",
    external: false,
  },
  {
    problem: "Need for custom apps",
    solution: "Web & Mobile Development — production apps, deployed",
    label: "Describe the problem",
    href: "#contact",
    external: false,
  },
]

export function ProblemsWeSolve() {
  return (
    <section id="problems" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Start with the problem"
          title="If this is your problem, the system already exists."
          description="Pick the problem — try the live system that solves it. No signup, no call required."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 sm:p-8"
            >
              <h3 className="font-display text-xl text-foreground">{item.problem}</h3>
              <div className="mt-3 flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.solution}
                </p>
              </div>
              <div className="mt-5">
                {item.external ? (
                  <Button asChild>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
