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
  image?: string
  imageAlt?: string
  highlights: string[]
  metrics?: string[]
  links: { label: string; meta: string; href: string; isPrimary?: boolean; fullWidth?: boolean }[]
}

const projects: Project[] = [
  {
    year: "2025",
    label: "Featured project",
    meta: "Next.js · NestJS · pgvector · React Native · Socket.io · Gemini",
    title: "AI Virtual Receptionist",
    image: "/receptionist-hero.png",
    imageAlt: "AI Virtual Receptionist — live chat demo showing a real conversation",
    description:
      "A 24/7 receptionist that talks to your customers in real time — books appointments, captures leads, routes to the right department, and hands off to a human the moment it should. Every answer is grounded in your knowledge base, so it never invents anything.",
    highlights: [
      "Real-time chat with streaming AI answers",
      "Department routing — sends visitors to the right team",
      "Human takeover with an AI-drafted reply for your team",
      "Appointment booking and lead capture",
      "Native Android app",
    ],
    metrics: [
      "< 1s first response time",
      "24/7 uptime with zero manual intervention",
      "Deployed to production and serving live traffic",
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
    image: "/pdf-workspace-hero.png",
    imageAlt: "Smart PDF Workspace — ask questions across your PDFs with cited sources",
    description:
      "Upload PDFs, ask AI questions about them with cited sources, generate summaries, and publish an embeddable ask-your-docs widget. It turns your documents into the knowledge base that powers your AI products.",
    highlights: [
      "Multi-tenant JWT auth with refresh and token revocation",
      "PDF text extraction, chunking, and pgvector similarity search",
      "RAG answers with cited sources shown",
      "One-click AI summaries, cached per document",
      "Embeddable ask-your-docs widget plus an Expo mobile app",
    ],
    metrics: [
      "Sub-second PDF ingestion and search",
      "Cost-free: fully self-hosted, zero API spend",
      "Embeddable widget deployed and live",
    ],
    links: [
      { label: "Live demo", meta: "docs.djaouad.tech", href: "https://docs.djaouad.tech", isPrimary: true },
      { label: "GitHub", meta: "github.com/djoudad292/smart-pdf-workspace", href: "https://github.com/djoudad292/smart-pdf-workspace" },
      { label: "Android app", meta: "Download APK", href: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk/smart-pdf.apk", fullWidth: true },
    ],
  },
  {
    year: "2026",
    label: "Featured project",
    meta: "Next.js · NestJS · LangGraph · pgvector · OpenAI · TypeScript",
    title: "AI Customer Support Agent",
    image: "/support-agent-hero.png",
    imageAlt: "AI Customer Support Agent — LangGraph-powered hero with live phone mockup",
    description:
      "A production-ready AI support agent that handles real customer conversations, creates support tickets, checks order statuses, searches a knowledge base using semantic vector search, and seamlessly escalates to human agents when needed — complete with an admin dashboard showing live conversation analytics and an embeddable widget companies can add to their site with one line of code.",
    highlights: [
      "Multi-turn conversations with context memory",
      "Tool calling — create tickets, check orders, search FAQ",
      "RAG-powered knowledge base with vector search",
      "Human escalation with full conversation context",
      "Admin dashboard with live analytics",
      "Embeddable widget for any website",
    ],
    metrics: [
      "Production-ready with real-time streaming",
      "Self-hosted on Vercel + Supabase",
      "Deployed and serving live traffic",
    ],
    links: [
      { label: "Live demo", meta: "customer.djaouad.tech", href: "https://customer.djaouad.tech", isPrimary: true },
      { label: "GitHub", meta: "github.com/djoudad292/ai-customer-support-agent", href: "https://github.com/djoudad292/ai-customer-support-agent" },
      { label: "Android app", meta: "Download APK", href: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-support.apk", fullWidth: true },
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
          title="Three products, one pipeline."
          description="The Smart PDF Workspace turns your documents into a searchable knowledge base; the AI Receptionist puts that knowledge to work in real conversations; the AI Support Agent handles customer conversations end-to-end. One feeds the other — build once, talk to customers forever."
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

              {project.image && (
                <a href={project.links.find((l) => l.isPrimary)?.href} target="_blank" rel="noopener noreferrer" className="group block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="aspect-[16/10] w-full border-b border-border object-cover object-top transition-opacity group-hover:opacity-90"
                  />
                </a>
              )}

              <div className="grid min-w-0 gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div className="min-w-0">
                  <h3 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group min-w-0 rounded-xl border p-5 transition-colors ${link.fullWidth ? "sm:col-span-3 " : ""}${
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

                <ul className="flex min-w-0 flex-col justify-center gap-4 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
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
