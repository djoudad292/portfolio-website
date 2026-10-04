"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { AUDIT_OFFER } from "@/lib/positioning"

const refusals = [
  {
    title: "Generic AI receptionists or chatbots.",
    body: "Those are $14–$399/month products with free setup. If a subscription solves your problem, I'll tell you so — and you should buy the subscription.",
  },
  {
    title: "n8n / Zapier / Make wiring.",
    body: "n8n is free and self-hostable with unlimited executions. I'd be reselling you a browser tab.",
  },
  {
    title: "Anything touching your PHI or card data without a signed data-handling agreement.",
    body: "Ask me for the subprocessor list and the retention policy. No agreement, no data.",
  },
  {
    title: "A large build for an unvalidated idea.",
    body: `The ${AUDIT_OFFER.price} audit exists so you find out whether the idea works before you pay for the build. I'm not going to sell you a system to find out it was the wrong system.`,
  },
]

export function WhatIDontDo() {
  return (
    <section id="dont-do" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03.1"
          label="What I don't do"
          title="Four things I don't sell."
          description="Most suppliers will say yes to all four of these. They are listed here because the requests are predictable, the right answer already exists without me, and you should hear it from me rather than after a deposit."
        />

        <div className="border-t border-border">
          {refusals.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid gap-4 border-b border-border py-8 sm:grid-cols-[auto_1fr] sm:gap-6 lg:py-10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40">
                <X className="h-4 w-4 text-muted-foreground" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="text-pretty font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl border-l-2 border-primary pl-6 text-lg leading-relaxed text-foreground sm:text-xl"
        >
          If any of the above is what you need, the answer is a tool or a
          different person, and I'd rather say so now than after a deposit.
        </motion.p>
      </div>
    </section>
  )
}
