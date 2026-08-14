"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight } from "lucide-react"

const highlights = [
  "Real-time chat with streaming AI answers",
  "Knowledge base (RAG) — every answer cites its source",
  "Department routing and human takeover when needed",
  "Appointment booking and lead capture",
  "Native Android app plus an embeddable widget",
]

const links = [
  {
    label: "Live demo",
    meta: "chat.djaouad.tech",
    href: "https://chat.djaouad.tech",
  },
  {
    label: "GitHub",
    meta: "github.com/djoudad292/ai-virtual-receptionist",
    href: "https://github.com/djoudad292/ai-virtual-receptionist",
  },
  {
    label: "Android app",
    meta: "Download APK",
    href: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk/ai-receptionist.apk",
  },
]

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Selected work"
          title="One product, three platforms."
          description="Ships as a web dashboard, a native Android app, and an embeddable widget — one codebase, one database."
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-7 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:px-10">
            <span>2025 — Featured project</span>
            <span>Next.js · NestJS · pgvector · React Native · Socket.io · Gemini</span>
          </div>

          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <h3 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                AI Virtual Receptionist
              </h3>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                A 24/7 receptionist that answers questions from your own documents, books
                appointments, captures leads, and hands off to a human the moment it should.
                Businesses get a receptionist that never sleeps — and never invents answers.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {links.map((link) => {
                  const isPrimary = link.label === "Live demo"
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group rounded-xl border p-5 transition-colors ${
                        isPrimary
                          ? "border-primary bg-primary text-primary-foreground hover:opacity-90"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-sm font-medium">{link.label}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span
                        className={`mt-1 block truncate font-mono text-[11px] ${
                          isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {link.meta}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            <ul className="flex flex-col justify-center gap-4 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {highlights.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm text-foreground">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  )
}