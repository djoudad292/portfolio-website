"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { EVIDENCE_ARTIFACTS, EVIDENCE_NO_QUOTES_LINE } from "@/lib/evidence"

export function Evidence() {
  return (
    <section id="evidence" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="07"
          label="Evidence"
          title="Check it yourself."
          description={`${EVIDENCE_NO_QUOTES_LINE} Instead: the artifacts you can inspect in one click.`}
        />

        <div className="space-y-6">
          {EVIDENCE_ARTIFACTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-7 sm:p-8"
            >
              <h3 className="font-display text-xl text-foreground">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {a.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-primary underline-offset-4 hover:underline"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
