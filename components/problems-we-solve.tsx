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
    problem: "The same support question, a hundred times a week",
    solution:
      "AI Support Agent. Answers from your knowledge base, opens tickets, checks orders, escalates the rest",
    label: "Try it live",
    href: "https://ai-support-frontend-livid.vercel.app/",
    external: true,
  },
  {
    problem: "Enquiries that arrive when nobody is awake",
    solution:
      "AI Receptionist. Answers, books, captures the lead, routes it, hands off to a human with a drafted reply",
    label: "Try it live",
    href: "https://chat.djaouad.is-a.dev/",
    external: true,
  },
  {
    problem: "The answer is in a document nobody has read",
    solution:
      "Retrieval and document intelligence. Vector search over your files, every answer carrying its source",
    label: "Try it live",
    href: "https://docs.djaouad.is-a.dev/",
    external: true,
  },
  {
    problem: "A manual process eating your best people's week",
    solution:
      "Internal tool built on your own data. Auth, roles, an audit trail, and the spreadsheet retired",
    label: "Describe the process",
    href: "#contact",
    external: false,
  },
  {
    problem: "An AI product you know exactly what to do with",
    solution:
      "AI-first build. The agent, the retrieval layer behind it, the application around it, deployed to your domain",
    label: "Describe the product",
    href: "#contact",
    external: false,
  },
  {
    problem: "Software an AI assistant cannot reach",
    solution:
      "MCP server. Your systems behind a typed tool interface, callable by Claude, Cursor or your own agent",
    label: "Describe the system",
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
          title="Start with the problem, not the stack."
          description="The first three are running systems you can open right now. The rest is the same engineering, scoped to your data and your workflow."
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
