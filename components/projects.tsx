"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight } from "lucide-react"

interface Project {
  year: string
  label: string
  meta: string
  title: string
  description: string
  highlights: string[]
  links: { label: string; meta: string; href: string; isPrimary?: boolean }[]
}

const projects: Project[] = [
  {
    year: "2025",
    label: "Featured project",
    meta: "Next.js · NestJS · pgvector · React Native · Socket.io · Gemini",
    title: "AI Virtual Receptionist",
    description:
      "A 24/7 receptionist that answers questions from your own documents, books appointments, captures leads, and hands off to a human the moment it should. Businesses get a receptionist that never sleeps — and never invents answers.",
    highlights: [
      "Real-time chat with streaming AI answers",
      "Knowledge base (RAG) — every answer cites its source",
      "Department routing and human takeover when needed",
      "Appointment booking and lead capture",
      "Native Android app plus an embeddable widget",
    ],
    links: [
      { label: "Live demo", meta: "chat.djaouad.tech", href: "https://chat.djaouad.tech", isPrimary: true },
      { label: "GitHub", meta: "github.com/djoudad292/ai-virtual-receptionist", href: "https://github.com/djoudad292/ai-virtual-receptionist" },
      { label: "Android app", meta: "Download APK", href: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk/ai-receptionist.apk" },
    ],
  },
  {
    year: "2025",
    label: "Document AI",
    meta: "Next.js · NestJS · pgvector · pdf-parse · OpenRouter · JWT",
    title: "Smart PDF Workspace",
    description:
      "A multi-tenant workspace to upload PDFs, ask AI questions about them with cited sources, generate summaries, and publish an embeddable ask-your-docs widget. RAG over your own documents, grounded and verifiable.",
    highlights: [
      "Multi-tenant JWT auth with refresh and token revocation",
      "PDF text extraction, chunking, and pgvector similarity search",
      "RAG answers with similarity sources shown",
      "One-click AI summaries, cached per document",
      "Embeddable ask-your-docs widget plus an Expo mobile app",
    ],
    links: [
      { label: "Live demo", meta: "smart-pdf.netlify.app", href: "https://smart-pdf.netlify.app", isPrimary: true },
      { label: "GitHub", meta: "github.com/djoudad292/smart-pdf-workspace", href: "https://github.com/djoudad292/smart-pdf-workspace" },
      { label: "Widget", meta: "docs.djaouad.tech", href: "https://docs.djaouad.tech" },
    ],
  },
]

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Selected work"
          title="Two products, different problems."
          description="One AI receptionist, one document workspace — both grounded in your data, both live, both built end-to-end from database to UI."
        />

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-7 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:px-10">
                <span>
                  {project.year} — {project.label}
                </span>
                <span>{project.meta}</span>
              </div>

              <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div>
                  <h3 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group rounded-xl border p-5 transition-colors ${
                          link.isPrimary
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
                            link.isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {link.meta}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <ul className="flex flex-col justify-center gap-4 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  {project.highlights.map((item, j) => (
                    <li key={item} className="flex gap-4 text-sm text-foreground">
                      <span className="font-mono text-xs text-primary">0{j + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
