"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ExternalLink, Github, Smartphone } from "lucide-react"

const highlights = [
  "Real-time chat with streaming AI answers",
  "Knowledge base (RAG) — every answer cites its source",
  "Department routing and human takeover when needed",
  "Appointment booking and lead capture",
  "Native Android app plus an embeddable widget",
]

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Selected work"
          title="One product, three platforms."
          description="The project I'm most proud of ships as a web dashboard, a native Android app, and an embeddable widget — one codebase, one database."
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                2025 — Featured
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                AI Virtual Receptionist
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                A 24/7 receptionist that answers questions from your own documents, books
                appointments, captures leads, and hands off to a human the moment it should.
                Businesses get a receptionist that never sleeps — and never invents answers.
              </p>
              <p className="mt-6 font-mono text-xs text-muted-foreground">
                Next.js · NestJS · PostgreSQL + pgvector · React Native · Socket.io · Gemini
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 border-t border-border bg-secondary/50 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground">
                    <span aria-hidden className="text-primary">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://chat.djaouad.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
                <a
                  href="https://github.com/djoudad292/ai-virtual-receptionist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk/ai-receptionist.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  <Smartphone className="h-4 w-4" />
                  Android app
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}