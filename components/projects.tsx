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
    year: "2026",
    label: "AI Agent",
    title: "AI Customer Support Agent",
    for: "For e-commerce and SaaS teams with high-volume support.",
    problem: "Support teams answer the same questions all day. Order status, return policies, product details, plan limits.",
    solution: "A LangGraph agent with a real tool-calling loop and conditional routing. It answers from a vector knowledge base, checks orders, opens tickets, and escalates to a human with the full conversation attached. Embeddable in any site with a one-line widget.",
    result: "Handles the routine layer itself and hands the rest to your team. Watch it decide, act and explain in the demo.",
    proof: "Live demo + 50s refund-to-ticket TKT-0022 on camera",
    builtWith: "LangGraph state machine · pgvector · admin analytics",
    image: "/support-agent-hero-new.png",
    imageAlt: "AI Customer Support Agent, production agent with live phone mockup",
    highlights: [
      "LangGraph agent: tool-calling loop with conditional routing between paths",
      "Multi-turn conversations with context memory",
      "Answers retrieved from a vector knowledge base, not keyword matching",
      "Human escalation with the full conversation context",
      "Admin dashboard with live analytics, plus an embeddable widget",
    ],
    links: [
      { label: "See it live", meta: "ai-support-frontend-livid.vercel.app", href: "https://ai-support-frontend-livid.vercel.app/", isPrimary: true },
      { label: "Get this for your business", meta: "contact", href: "#contact", isPrimary: false },
      { label: "source", meta: "github.com/djoudad292/ai-customer-support-agent", href: "https://github.com/djoudad292/ai-customer-support-agent" },
      { label: "source", meta: "APK", href: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk" },
    ],
    captures: {
      videos: [
        { src: "/captures/support/support-flow.webm", poster: "/support-agent-hero-new.png", label: "flow", duration: "0:50", caption: "Refund chip to ticket + side panel, live" },
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
    label: "Retrieval System",
    title: "Smart PDF Workspace",
    for: "For legal, compliance and research teams working through documents.",
    problem: "Teams need answers from long documents. Contracts, reports, manuals. Searching manually is slow, and an answer you cannot trace is an answer you cannot use.",
    solution: "Upload PDFs and ask questions. The pipeline extracts text, chunks it sentence-aware, embeds it with OpenAI text-embedding-3-small, and searches pgvector by cosine distance over an HNSW index. Every answer carries the source it came from. Multi-tenant accounts, an embeddable widget, and a mobile app.",
    result: "Answers from your documents with the citation attached. Retrieval benchmarked separately on the AI Virtual Receptionist knowledge base.",
    proof: "Live sandbox + cited answers on camera + retrieval benchmark at #verification",
    builtWith: "pgvector + HNSW · multi-tenant · embeddable widget",
    image: "/pdf-workspace-hero-new.png",
    imageAlt: "Smart PDF Workspace, ask questions across your PDFs with cited sources",
    highlights: [
      "Sentence-aware chunking, not fixed-size windows",
      "OpenAI text-embedding-3-small embeddings in pgvector, cosine search",
      "HNSW index, so search stays fast as the corpus grows",
      "Source citation on every answer",
      "Secure multi-tenant accounts with row-level isolation",
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
        { src: "/captures/pdf/pdf-flow.webm", poster: "/pdf-workspace-hero-new.png", label: "flow", duration: "0:33", caption: "Question to cited answer, live" },
      ],
      images: [
        { src: "/captures/pdf/pdf-landing.png", alt: "Smart PDF Workspace landing page showing the upload area", caption: "Landing" },
        { src: "/captures/pdf/pdf-try.png", alt: "Ask-a-question demo over an uploaded PDF", caption: "Live try chat" },
      ],
    },
  },
  {
    year: "2026",
    label: "AI Agent",
    title: "AI Virtual Receptionist",
    for: "For clinics and service businesses losing enquiries after hours.",
    problem: "Businesses lose leads and bookings when messages go unanswered overnight. The follow-up happens the next morning, if at all.",
    solution: "A 24/7 LangGraph receptionist with a tool-calling loop. It answers from the business knowledge base over vector retrieval, handles booking, captures and qualifies leads, routes visitors to the right team, and hands off to a human with an AI-drafted reply already written.",
    result: "Answers routine questions after hours, with no staff on call. Retrieval benchmarked at 93.8% F1 on the receptionist knowledge base (15 chunks, 18 queries, dental clinic domain), scored offline with a deterministic stub embedder, not the production text-embedding-3-small, so it measures the retrieval policy rather than embedding quality.",
    proof: "Live demo + 28s recorded booking ending in a saved lead",
    builtWith: "Website chat · AI answers · Android app",
    image: "/receptionist-hero-new.png",
    imageAlt: "AI Virtual Receptionist, live chat demo showing a real conversation",
    highlights: [
      "Real-time chat with streaming AI answers",
      "Tool arguments validated against Zod schemas before execution",
      "Vector-retrieval knowledge base with source citations",
      "Department routing that sends visitors to the right team",
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
    year: "2026",
    label: "MCP Server",
    title: "HireMe MCP Server",
    for: "For teams that want their systems callable by AI assistants.",
    problem: "Agents in other products cannot use your software. They scrape a web page and guess, because nothing exposes a typed interface to them.",
    solution: "A production MCP server that puts a real interface in front of a business. Five tools: get profile, search projects, get pricing, get next slot, and file a brief. The write tool is rate-limited per IP, persisted, and emailed. Claude, Cursor or ChatGPT can connect and use it directly. Stated plainly: this server makes no model calls of its own. It is protocol and integration work, and it is here as proof of that, not as an AI agent.",
    result: "Any MCP client can read the data and act on it, with no human in the middle.",
    proof: "Live endpoint, 5 tools verified + brief filed on camera (id 5ae693eb)",
    builtWith: "MCP protocol · TypeScript · rate limiting · persisted intake",
    image: "/hireme-mcp-hero-new.png",
    imageAlt: "HireMe MCP Server, endpoint with live playground",
    highlights: [
      "Live endpoint at mcp.djaouad.is-a.dev/mcp, one-paste client config",
      "Five tools: four reads and one gated write",
      "File-brief tool with per-IP rate limit, persisted briefs, email notify",
      "Console with a live playground and connection configs",
      "No model calls inside the server, by design",
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
          index="04"
          label="Proof of work"
          title="Real systems, live in production."
          description="Each of these started as a specific problem and was built end to end, from requirements through deployment. They are running deployments on real domains with public repositories, ordered by how much evidence sits behind them rather than by date."
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
                  {project.year} · {project.label}
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
