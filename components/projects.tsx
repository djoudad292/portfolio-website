"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight, ExternalLink } from "lucide-react"

interface Project {
  year: string
  label: string
  meta: string
  title: string
  problem: string
  built: string
  capability: string
  outcome: string
  whoFor: string
  image?: string
  imageAlt?: string
  highlights: string[]
  links: { label: string; meta: string; href: string; isPrimary?: boolean; fullWidth?: boolean }[]
}

const projects: Project[] = [
  {
    year: "2025",
    label: "Custom AI System",
    meta: "Next.js · NestJS · pgvector · React Native · Socket.io · Gemini",
    title: "AI Virtual Receptionist",
    image: "/receptionist-hero-new.png",
    imageAlt: "AI Virtual Receptionist — live chat demo showing a real conversation",
    problem: "Businesses lose leads and bookings when messages go unanswered after hours.",
    built: "A 24/7 AI receptionist with real-time streaming chat, department routing, and human handoff with AI-drafted replies.",
    capability: "Answers questions, handles booking, captures leads, routes to the right team — all grounded in the business's own knowledge base.",
    outcome: "Answers routine questions after hours — 24/7, no staff on call.",
    whoFor: "For clinics and small service businesses.",
    highlights: [
      "Real-time chat with streaming AI answers",
      "Department routing — sends visitors to the right team",
      "Human takeover with an AI-drafted reply for your team",
      "Appointment booking and lead capture",
      "Native Android app",
    ],
    links: [
      { label: "See it live", meta: "chat.djaouad.tech", href: "https://chat.djaouad.tech/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/ai-virtual-receptionist", href: "https://github.com/djoudad292/ai-virtual-receptionist" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk" },
    ],
  },
  {
    year: "2025",
    label: "AI Integration",
    meta: "Next.js · NestJS · pgvector · pdf-parse · OpenRouter · JWT",
    title: "Smart PDF Workspace",
    image: "/pdf-workspace-hero-new.png",
    imageAlt: "Smart PDF Workspace — ask questions across your PDFs with cited sources",
    problem: "Teams need reliable answers from long documents — contracts, reports, manuals — but searching manually is slow.",
    built: "A document intelligence system that extracts, chunks, and embeds PDFs into pgvector. RAG-powered Q&A with cited sources and one-click summaries.",
    capability: "Answers questions with page citations from any uploaded document. Embeddable as a widget or used as a standalone knowledge base.",
    outcome: "Finds answers in uploaded PDFs with page citations — no manual reading required.",
    whoFor: "For legal, compliance, and research teams drowning in documents.",
    highlights: [
      "Multi-tenant JWT auth with refresh and token revocation",
      "PDF text extraction, chunking, and pgvector similarity search",
      "RAG answers with cited sources shown",
      "One-click AI summaries, cached per document",
      "Embeddable ask-your-docs widget plus an Expo mobile app",
    ],
    links: [
      { label: "See it live", meta: "docs.djaouad.tech", href: "https://docs.djaouad.tech/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/smart-pdf-workspace", href: "https://github.com/djoudad292/smart-pdf-workspace" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk" },
    ],
  },
  {
    year: "2026",
    label: "Custom AI System",
    meta: "Next.js · NestJS · LangGraph · pgvector · OpenAI · TypeScript",
    title: "AI Customer Support Agent",
    image: "/support-agent-hero-new.png",
    imageAlt: "AI Customer Support Agent — LangGraph-powered hero with live phone mockup",
    problem: "Support teams answer the same questions repeatedly — order status, return policies, product details.",
    built: "A production-ready AI support agent using LangGraph with tool calling, RAG knowledge base, and human escalation.",
    capability: "Handles repeated support questions, creates tickets, checks orders, and escalates to humans — embeddable via a one-line widget.",
    outcome: "Resolves up to 70% of routine tickets automatically — human agents handle only the complex cases.",
    whoFor: "For e-commerce and SaaS teams with high-volume support.",
    highlights: [
      "Multi-turn conversations with context memory",
      "Tool calling — create tickets, check orders, search FAQ",
      "RAG-powered knowledge base with vector search",
      "Human escalation with full conversation context",
      "Admin dashboard with live analytics",
      "Embeddable widget for any website",
    ],
    links: [
      { label: "See it live", meta: "customer.djaouad.tech", href: "https://customer.djaouad.tech/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/ai-customer-support-agent", href: "https://github.com/djoudad292/ai-customer-support-agent" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk" },
    ],
  },
  {
    year: "2026",
    label: "Agent Interface",
    meta: "Express · Model Context Protocol · Next.js · Expo · Render",
    title: "HireMe MCP Server",
    image: "/hireme-mcp-hero-new.png",
    imageAlt: "HireMe MCP Server — MCP endpoint with live playground",
    problem: "Founders and recruiters delegate vetting to AI agents — but portfolios are unreadable to agents.",
    built: "An open MCP server exposing real profile, shipped projects, fixed pricing, and a project-brief intake — so Claude, Cursor, or ChatGPT can vet the work and file a brief. The server is itself the demo.",
    capability: "5 tools: get_profile, search_projects, get_pricing, get_next_slot, submit_project_brief (rate-limited, persisted + emailed). Same handlers over REST + embeddable widget + Expo app.",
    outcome: "Lets AI agents vet a developer and file a project brief — no human middleman needed.",
    whoFor: "For founders and recruiters who use AI to evaluate hires.",
    highlights: [
      "MCP endpoint live: mcp.djaouad.tech/mcp — one-paste client config",
      "Write tool with abuse controls: per-IP rate limit, persisted briefs, email notify",
      "Console with live playground + connection configs",
    ],
    links: [
      { label: "See it live", meta: "mcp.djaouad.tech/mcp", href: "https://mcp.djaouad.tech/mcp", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/hireme-mcp", href: "https://github.com/djoudad292/hireme-mcp" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/hireme-mcp/releases/download/latest-apk/hireme-mcp.apk" },
    ],
  },
]

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Proof of work"
          title="Real systems, live in production."
          description="Each project started with a specific problem and was built end-to-end — from requirements through deployment. These are not demos. They're production systems handling real traffic."
        />

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-xl border border-border bg-card"
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

                  <div className="mt-6 space-y-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Problem</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Built</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.built}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Capability</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.capability}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Outcome</span>
                      <p className="mt-1 text-sm leading-relaxed text-foreground font-medium">{project.outcome}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">For</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.whoFor}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.links.map((link) => {
                      const isSource = link.label === "source"
                      return (
                        <a
                          key={`${link.label}-${link.meta}`}
                          href={link.href}
                          target={link.href.startsWith("#") ? undefined : "_blank"}
                          rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
                          className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            link.isPrimary
                              ? "bg-primary text-primary-foreground hover:opacity-90"
                              : isSource
                              ? "text-muted-foreground hover:text-primary border border-transparent hover:border-primary"
                              : "border border-border bg-background text-foreground hover:border-primary hover:text-primary"
                          }`}
                        >
                          {link.label}
                          {link.isPrimary && <ArrowUpRight className="h-3.5 w-3.5" />}
                          {isSource && <ExternalLink className="h-3.5 w-3.5 opacity-60" />}
                          {!isSource && !link.isPrimary && (
                            <span className="font-mono text-[11px] opacity-60">{link.meta}</span>
                          )}
                        </a>
                      )
                    })}
                  </div>
                </div>

                <ul className="flex min-w-0 flex-col justify-center gap-3 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  {project.highlights.map((item, j) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground">
                      <span className="font-mono text-xs text-primary shrink-0">0{j + 1}</span>
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