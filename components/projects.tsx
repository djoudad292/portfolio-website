"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { ProjectCaptures } from "./project-captures"

interface Project {
  year: string
  label: string
  title: string
  for: string
  problem: string
  solution: string
  result: string
  proof: string
  builtWith: string
  image?: string
  imageAlt?: string
  highlights: string[]
  links: { label: string; meta: string; href: string; isPrimary?: boolean; fullWidth?: boolean }[]
  captures: {
    images: { src: string; alt: string; caption: string }[]
    videos: { src: string; poster?: string; label: string; duration: string; caption: string }[]
  }}

const projects: Project[] = [
  {
    year: "2025",
    label: "Custom AI System",
    title: "AI Virtual Receptionist",
    for: "For clinics and small service businesses.",
    problem: "Businesses lose leads and bookings when messages go unanswered after hours.",
    solution: "A 24/7 AI receptionist that answers questions, handles booking, captures leads, and routes visitors to the right team, with a human handoff that includes an AI-drafted reply.",
    result: "Answers routine questions after hours — 24/7, no staff on call.",
    proof: "Live demo + 28s recorded booking ending in a saved lead",
    builtWith: "Website chat · AI answers · Android app",
    image: "/receptionist-hero-new.png",
    imageAlt: "AI Virtual Receptionist — live chat demo showing a real conversation",
    highlights: [
      "Real-time chat with streaming AI answers",
      "Department routing — sends visitors to the right team",
      "Human takeover with an AI-drafted reply for your team",
      "Appointment booking and lead capture",
      "Native Android app",
    ],
    links: [
      { label: "See it live", meta: "chat.djaouad.is-a.dev", href: "https://chat.djaouad.is-a.dev/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/ai-virtual-receptionist", href: "https://github.com/djoudad292/ai-virtual-receptionist" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk" },
    ],
    captures: {
      videos: [
        { src: "/captures/receptionist/receptionist-flow.webm", poster: "/receptionist-hero-new.png", label: "flow", duration: "0:28", caption: "Booking + lead capture, live" },
        { src: "/captures/receptionist/receptionist-dashboard.webm", poster: "/captures/receptionist/receptionist-dashboard.png", label: "dashboard tour", duration: "0:20", caption: "Dashboard tour" },
      ],
      images: [
        { src: "/captures/receptionist/receptionist-landing.png", alt: "AI Virtual Receptionist landing page with the chat welcome screen", caption: "Landing" },
        { src: "/captures/receptionist/receptionist-try.png", alt: "Live chat demo with a visitor asking a question", caption: "Live try chat" },
        { src: "/captures/receptionist/receptionist-dashboard.png", alt: "Admin dashboard showing conversation analytics", caption: "Dashboard" },
        { src: "/captures/receptionist/receptionist-inbox.png", alt: "Inbox with routed messages from visitors", caption: "Inbox" },
      ],
    },
  },
  {
    year: "2025",
    label: "AI Integration",
    title: "Smart PDF Workspace",
    for: "For legal, compliance, and research teams drowning in documents.",
    problem: "Teams need reliable answers from long documents — contracts, reports, manuals — but searching manually is slow.",
    solution: "Upload your PDFs and ask questions — the workspace reads them and answers with a page citation from the source. One-click summaries save hours of manual reading. Embeddable as a widget or used as a standalone knowledge base.",
    result: "Finds answers in uploaded PDFs with page citations — no manual reading required.",
    proof: "Live sandbox + cited answers on camera",
    builtWith: "Document search · cited answers · mobile app",
    image: "/pdf-workspace-hero-new.png",
    imageAlt: "Smart PDF Workspace — ask questions across your PDFs with cited sources",
    highlights: [
      "Secure multi-tenant accounts",
      "Reads and finds answers across your uploaded documents",
      "Cites its sources on every answer",
      "Summarizes any document in one click",
      "Ask-your-docs widget plus a mobile app",
    ],
    links: [
      { label: "See it live", meta: "docs.djaouad.is-a.dev", href: "https://docs.djaouad.is-a.dev/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/smart-pdf-workspace", href: "https://github.com/djoudad292/smart-pdf-workspace" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk" },
    ],
    captures: {
      videos: [
        { src: "/captures/pdf/pdf-flow.webm", poster: "/pdf-workspace-hero-new.png", label: "flow", duration: "0:33", caption: "Question → cited answer, live" },
      ],
      images: [
        { src: "/captures/pdf/pdf-landing.png", alt: "Smart PDF Workspace landing page showing the upload area", caption: "Landing" },
        { src: "/captures/pdf/pdf-try.png", alt: "Ask-a-question demo over an uploaded PDF", caption: "Live try chat" },
      ],
    },
  },
  {
    year: "2026",
    label: "Custom AI System",
    title: "AI Customer Support Agent",
    for: "For e-commerce and SaaS teams with high-volume support.",
    problem: "Support teams answer the same questions repeatedly — order status, return policies, product details.",
    solution: "A production-ready AI support agent that handles repeated questions, creates tickets, checks orders, and escalates to humans — embeddable via a one-line widget.",
    result: "Handles routine questions itself and hands tricky cases to your team — watch it decide, act and explain in the demo.",
    proof: "Live demo + 50s refund-to-ticket TKT-0022 on camera",
    builtWith: "AI agent · analytics dashboard",
    image: "/support-agent-hero-new.png",
    imageAlt: "AI Customer Support Agent — production-ready agent with live phone mockup",
    highlights: [
      "Multi-turn conversations with context memory",
      "Tool calling — create tickets, check orders, search FAQ",
      "Built-in knowledge base",
      "Human escalation with full conversation context",
      "Admin dashboard with live analytics",
      "Embeddable widget for any website",
    ],
    links: [
      { label: "See it live", meta: "ai-support-frontend-livid.vercel.app", href: "https://ai-support-frontend-livid.vercel.app/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/ai-customer-support-agent", href: "https://github.com/djoudad292/ai-customer-support-agent" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk" },
    ],
    captures: {
      videos: [
        { src: "/captures/support/support-flow.webm", poster: "/support-agent-hero-new.png", label: "flow", duration: "0:50", caption: "Refund chip → ticket + side panel, live" },
        { src: "/captures/support/support-dashboard.webm", poster: "/captures/support/support-dashboard.png", label: "dashboard tour", duration: "0:24", caption: "Dashboard tour" },
      ],
      images: [
        { src: "/captures/support/support-landing.png", alt: "AI Customer Support Agent landing page with the chat widget preview", caption: "Landing" },
        { src: "/captures/support/support-try.png", alt: "Live support conversation with a customer", caption: "Live try chat" },
        { src: "/captures/support/support-dashboard.png", alt: "Admin dashboard with live support analytics", caption: "Dashboard" },
        { src: "/captures/support/support-tickets.png", alt: "Ticket list showing open and resolved support cases", caption: "Tickets view" },
      ],
    },
  },
  {
    year: "2026",
    label: "Agent Interface",
    title: "HireMe MCP Server",
    for: "For founders and recruiters who use AI to evaluate hires.",
    problem: "Founders and recruiters delegate vetting to AI agents — but portfolios are unreadable to agents.",
    solution: "The HireMe MCP Server (lets AI assistants use your business info) exposes a real profile, shipped projects, fixed pricing, and a project-brief intake — so Claude, Cursor, or ChatGPT can vet the work and file a brief. 5 tools: get profile, search projects, get pricing, get next slot, file a brief (rate-limited, persisted and emailed). The server is itself the demo.",
    result: "Lets AI agents vet a developer and file a project brief — no human middleman needed.",
    proof: "Live endpoint, 5 tools verified + brief filed on camera (id 5ae693eb)",
    builtWith: "AI-assistant interface · live playground · mobile app",
    image: "/hireme-mcp-hero-new.png",
    imageAlt: "HireMe MCP Server — endpoint with live playground",
    highlights: [
      "Live endpoint: mcp.djaouad.is-a.dev/mcp — one-paste client config",
      "File-brief tool with abuse controls: per-IP rate limit, persisted briefs, email notify",
      "Console with live playground + connection configs",
    ],
    links: [
      { label: "See it live", meta: "mcp.djaouad.is-a.dev/mcp", href: "https://mcp.djaouad.is-a.dev/mcp", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/hireme-mcp", href: "https://github.com/djoudad292/hireme-mcp" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/hireme-mcp/releases/download/latest-apk/hireme-mcp.apk" },
    ],
    captures: {
      videos: [
        { src: "/captures/mcp/mcp-flow.webm", poster: "/hireme-mcp-hero-new.png", label: "flow", duration: "0:36", caption: "Live tool calls, no sign-in" },
      ],
      images: [
        { src: "/captures/mcp/mcp-landing.png", alt: "HireMe MCP Server landing page with the endpoint details", caption: "Landing" },
        { src: "/captures/mcp/mcp-playground.png", alt: "Live playground calling MCP tools", caption: "Playground" },
      ],
    },
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

              <ProjectCaptures videos={project.captures.videos} images={project.captures.images} />

              <div className="grid min-w-0 gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div className="min-w-0">
                  <h3 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">{project.for}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Problem</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Solution</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Result</span>
                      <p className="mt-1 text-sm leading-relaxed text-foreground font-medium">{project.result}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Proof</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.proof}</p>
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

                  <span className="mt-3 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Built with · {project.builtWith}
                  </span>
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
