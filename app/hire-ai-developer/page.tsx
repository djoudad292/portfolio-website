import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Bot, FileSearch, Layers, MessageSquareCode, Workflow, Headset } from "lucide-react";

import { PRICE_ANCHOR } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Hire an AI Systems Engineer | Djaouad Frih · Agents, Retrieval, Production Builds",
  description:
    "Hire an AI systems engineer to build production AI: tool-calling agents, vector retrieval with citations, MCP servers, and the application around them. Fixed-price, milestone-based, source handed over.",
  alternates: { canonical: "https://djaouad.is-a.dev/hire-ai-developer" },
  openGraph: {
    title: "Hire an AI Systems Engineer · Djaouad Frih",
    description:
      "Agents, retrieval, MCP servers and production applications. Fixed-price, milestone-based, four live systems with public repositories.",
    url: "https://djaouad.is-a.dev/hire-ai-developer",
    type: "website",
  },
};

const services = [
  { icon: FileSearch, title: "Retrieval and document intelligence", text: "Extraction, sentence-aware chunking, embeddings and vector search with an HNSW index. Answers arrive with the source attached, and retrieval is checked against a goldset rather than eyeballed." },
  { icon: Bot, title: "Tool-using AI agents", text: "LangGraph state machines with real tool-calling loops, conditional routing and validated tool arguments. Handoff to a human carries the full conversation." },
  { icon: Headset, title: "Receptionists and support agents", text: "Always-on agents for small and mid-size businesses. Answer, book, capture, route and escalate, embedded on your site with one line of script." },
  { icon: MessageSquareCode, title: "MCP server development", text: "Model Context Protocol servers that put your systems behind a typed tool interface, so AI assistants can read your data and run your workflows directly." },
  { icon: Layers, title: "AI added to an existing stack", text: "Connect models to the database, API and CRM you already run. No rebuild of what works, no new platform subscription." },
  { icon: Workflow, title: "Internal tools replacing manual work", text: "Approval queues, intake forms and reporting on your own data, with auth, roles and an audit trail. Supporting role: the web and mobile app around the AI." },
];

const process = [
  { step: "01", title: "Tell me what you're building", text: "Share the brief. What it must do, what data it reads, what it has to be able to explain." },
  { step: "02", title: "I review the scope", text: "Feasibility, architecture, and a fixed-price proposal with clear milestones. If AI is the wrong answer here, I say so at this step." },
  { step: "03", title: "We build in milestones", text: "Working software at each milestone. Retrieval gets tested against a set before it ships, and token and latency reporting goes in early." },
  { step: "04", title: "You get the production system", text: "Code, deployment, documentation and reporting, all handed over. The system and the infrastructure account are yours." },
];

export default function HirePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">
        <section className="pt-28 pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
            AI SYSTEMS ENGINEER
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            Hire an engineer who ships <span className="text-primary">working AI systems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build the agent, the retrieval layer behind it, and the production
            application around it. Four of these are running on real domains with
            public repositories, so you can check the work before we speak.
            Retrieval is benchmarked, usage and latency are reported, and the code
            and the deployment are yours. Fixed-price, remote worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#project-intake"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Describe your project
            </a>
            <a href="/cv" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              View CV
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[`AI system builds from ${PRICE_ANCHOR}`, "Retrieval benchmarked, not guessed", "Remote, US/EU hours"].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">{t}</div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">What I get hired to build</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <s.icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">How it works</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-sm text-primary">{p.step}</div>
                <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">Proof of work, live in production</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each of these is a running deployment with a public repository, not a
            prototype. Open any of them and use it.
          </p>
          <div className="mt-6 grid gap-5">
            <DemoCard title="AI Customer Support Agent" link="ai-support-frontend-livid.vercel.app" href="https://ai-support-frontend-livid.vercel.app"
              git="github.com/djoudad292/ai-customer-support-agent"
              desc="A LangGraph agent with a real tool-calling loop and conditional routing. It answers from a vector knowledge base, checks orders, creates tickets, and escalates to a human with the full conversation attached. Embeddable with one line of script." />
            <DemoCard title="Smart PDF Workspace" link="docs.djaouad.is-a.dev" href="https://docs.djaouad.is-a.dev"
              git="github.com/djoudad292/smart-pdf-workspace"
              desc="Document intelligence with sentence-aware chunking, OpenAI text-embedding-3-small embeddings, and pgvector cosine search over an HNSW index. Every answer carries its source. Retrieval is benchmarked separately on the AI Virtual Receptionist knowledge base." />
            <DemoCard title="AI Virtual Receptionist" link="chat.djaouad.is-a.dev" href="https://chat.djaouad.is-a.dev"
              git="github.com/djoudad292/ai-virtual-receptionist"
              desc="A 24/7 receptionist that answers from a vector-retrieval knowledge base, books appointments, captures and qualifies leads, routes visitors to the right department, and hands off to a human with an AI-drafted reply ready to send." />
            <DemoCard title="HireMe MCP Server" link="mcp.djaouad.is-a.dev" href="https://mcp.djaouad.is-a.dev"
              git="github.com/djoudad292/hireme-mcp"
              desc="MCP server proof rather than agent work. Five tools, four reads and one rate-limited write, exposed over the Model Context Protocol so any compatible assistant can use them. It makes no model calls of its own." />
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">How the claims get checked</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              ["Retrieval is benchmarked", "A goldset of queries with known-correct sources, run offline through the pipeline, computing precision, recall and F1 with a threshold sweep. The benchmark runs on the AI Virtual Receptionist knowledge base (dental clinic KB, 15 chunks, 18 queries) with a deterministic offline embedder. Most recent vector retrieval run: 93.8% F1 at threshold 0.35. This covers retrieval policy only, not the production embedder (text-embedding-3-small) or written answer quality."],
              ["Cost and latency are reported", "Every model call records token counts and latency, persisted and exposed on an authenticated metrics endpoint. That is token and latency capture rather than full distributed tracing, and I describe it that way."],
              ["The code is public", "All four systems have public repositories. Read them, fork them, or run them yourself."],
              ["Multi-tenant by default", "Short-lived JWT access tokens with bcrypt hashing and row-level isolation between tenants on all four. The receptionist and document workspace go further, with rotating refresh tokens and server-side revocation through a token version."],
            ].map(([h, t]) => (
              <div key={h} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl">{h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-10 text-center">
            <h2 className="font-display text-3xl tracking-tight">Have a project in mind?</h2>
            <p className="max-w-md text-muted-foreground">
              Tell me what you need built. I&apos;ll review the scope and send a fixed-price proposal with clear milestones.
            </p>
            <Link href="/#project-intake"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Describe your project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function DemoCard({ title, link, href, git, desc }: { title: string; link: string; href: string; git: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl">{title}</h3>
        <div className="flex gap-4 font-mono text-xs">
          <a href={`https://${git}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
            <ArrowUpRight className="h-3.5 w-3.5" /> {link}
          </a>
        </div>
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
