"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Gauge, Lock, Radio, ScanLine, GitBranch, Activity } from "lucide-react"

import {
  RETRIEVAL_F1,
  RETRIEVAL_PRECISION,
  RETRIEVAL_RECALL,
  RETRIEVAL_THRESHOLD,
} from "@/lib/positioning"

const checks = [
  {
    icon: ScanLine,
    title: "Retrieval is benchmarked, not assumed",
    body: [
      "There is a goldset of queries with known-correct source documents, and the retrieval pipeline runs offline against it. The harness computes precision, recall and F1, then sweeps the similarity threshold to find the operating point that actually works on this data.",
    ],
    stat: `${RETRIEVAL_F1} F1`,
    statNote: `Most recent run: vector retrieval at threshold ${RETRIEVAL_THRESHOLD}. Precision ${RETRIEVAL_PRECISION}, recall ${RETRIEVAL_RECALL}.`,
    caveat:
      "What this does not measure: whether the written answer is any good, or whether an agent picks the right tool. Those are not benchmarked and I do not claim them.",
  },
  {
    icon: Activity,
    title: "Token usage and latency are recorded",
    body: [
      "Every model call captures its token counts and its latency. Those records are persisted and exposed through an authenticated metrics endpoint, so the running cost of a system is a number you can read rather than an estimate.",
    ],
    stat: "/metrics/ai",
    statNote: "Authenticated endpoint over persisted usage and latency records.",
    caveat:
      "What this is not: full distributed tracing. It is token and latency capture. I do not have per-step trace inspection across a whole agent run.",
  },
  {
    icon: Radio,
    title: "The systems are live, and the code is readable",
    body: [
      "Every demo on this page is a running deployment on a real domain, and every one of them has a public repository. Nothing here is a screenshot of something that worked once on a laptop.",
    ],
    stat: "4 live domains",
    statNote: "Receptionist, document workspace, support agent, MCP endpoint.",
    caveat: null,
  },
  {
    icon: Lock,
    title: "Auth and tenant isolation are part of the build",
    body: [
      "Short-lived JWT access tokens with rotating refresh tokens, bcrypt password hashing, and server-side revocation through a token version so a session can actually be killed. Row-level isolation means one tenant's rows are never returned to another.",
    ],
    stat: "Multi-tenant",
    statNote: "Deployed on managed Postgres, with admin dashboards per tenant.",
    caveat: null,
  },
  {
    icon: GitBranch,
    title: "The agent decides, and it knows when to stop",
    body: [
      "The support and receptionist agents are state machines, not one long prompt. They route conditionally, call tools with validated arguments, and escalate to a person with the full conversation rather than guessing.",
    ],
    stat: "2 agents",
    statNote: "Both LangGraph, both independently built, both in production.",
    caveat: null,
  },
  {
    icon: Gauge,
    title: "A human stays in the loop where it matters",
    body: [
      "My own content pipeline runs the whole loop: strategy, generation, an automated quality gate, human approval, publish, analytics, and the results feed back into the next cycle. The gate is not a formality, nothing publishes without the approval step.",
    ],
    stat: "6 stages",
    statNote: "Strategy, generate, gate, approve, publish, learn.",
    caveat: null,
  },
]

const notMeasured = [
  "Deflection rate",
  "Hours saved per week",
  "Revenue attributed",
  "Customer count",
]

export function HowVerified() {
  return (
    <section id="verification" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label="How this is verified"
          title="Every claim here has a check behind it."
          description="Technical buyers do not need adjectives, they need to see the method and the number. So here is the method, the numbers, and the parts I have not measured."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {checks.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <c.icon className="h-6 w-6 shrink-0 text-primary" />
                <span className="font-mono text-sm text-primary">{c.stat}</span>
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">{c.title}</h3>
              {c.body.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <p className="mt-3 font-mono text-xs leading-relaxed text-foreground">
                {c.statNote}
              </p>
              {c.caveat && (
                <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                  {c.caveat}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-5 rounded-2xl border border-dashed border-border bg-card/50 p-7 sm:p-8"
        >
          <h3 className="font-display text-xl text-foreground">
            Numbers I have deliberately not published
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            These are the slots where a portfolio usually puts invented figures. I
            would rather leave them empty than print something I cannot reproduce
            on request. If your project needs them, they get instrumented during
            the build and reported per project, against your baseline.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {notMeasured.map((n) => (
              <li
                key={n}
                className="rounded-full border border-border bg-background px-4 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {n} <span aria-hidden>·</span> not measured
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}