import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "CV · Djaouad Frih | AI Systems Engineer",
  description:
    "Djaouad Frih, AI Systems Engineer. Tool-calling agents, vector retrieval with source citations, MCP servers, and the production applications around them. Projects taken from database design to deployment, with retrieval benchmarked and usage reported.",
};

const skills = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
  { group: "Backend", items: ["NestJS", "Node.js", "Express", "PostgreSQL", "pgvector", "Prisma", "Socket.IO"] },
  { group: "AI / ML", items: ["LangGraph", "LangChain", "Tool Calling", "Zod tool schemas", "RAG", "Vector Search", "Embeddings", "OpenAI", "Gemini", "MCP"] },
  { group: "Quality", items: ["Eval harnesses", "Precision / recall / F1", "Threshold tuning", "Token and latency metrics"] },
  { group: "Tools", items: ["Git", "Docker", "Linux", "Vercel", "Render", "REST APIs"] },
  { group: "Security", items: ["JWT + refresh rotation", "bcrypt", "Multi-tenant isolation", "Web Pentesting", "OWASP"] },
];

const projects = [
  {
    title: "AI Customer Support Agent",
    stack: "Next.js · NestJS · LangGraph · pgvector · OpenAI · TypeScript",
    desc: "A LangGraph state machine with a real tool-calling loop and conditional routing. Answers come from a vector knowledge base; orders are checked, tickets created, and anything genuinely uncertain is escalated to a human with the full conversation attached. Multi-tenant backend with JWT access tokens and per-tenant row isolation. Admin dashboard with live analytics, plus an embeddable widget over a WebSocket gateway. Live in production.",
    link: "ai-support-frontend-livid.vercel.app",
    href: "https://ai-support-frontend-livid.vercel.app",
    git: "github.com/djoudad292/ai-customer-support-agent",
  },
  {
    title: "Smart PDF Workspace",
    stack: "Next.js · NestJS · pgvector + HNSW · OpenAI text-embedding-3-small",
    desc: "Document intelligence built as a real retrieval pipeline: PDF and text extraction, sentence-aware chunking, embeddings with text-embedding-3-small, then cosine-distance search over pgvector with an HNSW index. Every answer carries the source it came from. The pipeline is scored offline against a goldset of queries with known-correct documents, computing precision, recall and F1 across a similarity-threshold sweep. Multi-tenant, with JWT access and refresh tokens plus server-side revocation through a token version, an embeddable widget and a mobile app.",
    link: "docs.djaouad.is-a.dev",
    href: "https://docs.djaouad.is-a.dev",
    git: "github.com/djoudad292/smart-pdf-workspace",
  },
  {
    title: "AI Virtual Receptionist",
    stack: "Next.js · NestJS · LangGraph · pgvector · React Native · Socket.io · Gemini",
    desc: "A 24/7 receptionist, and the longest-running system I maintain. A LangGraph agent with a tool-calling loop answers from a vector-retrieval knowledge base, with tool arguments validated by Zod schemas before execution. It handles booking, captures and qualifies leads, and routes conversations to the right department. Human handoff carries an AI-drafted reply so the transition loses nothing. Multi-tenant, with JWT access and refresh tokens plus server-side revocation through a token version. Real-time streaming chat, a native Android app, and an embeddable widget. Deployed to production and still being worked on.",
    link: "chat.djaouad.is-a.dev",
    href: "https://chat.djaouad.is-a.dev",
    git: "github.com/djoudad292/ai-virtual-receptionist",
  },
  {
    title: "HireMe MCP Server",
    stack: "MCP · TypeScript · Express · Netlify · Render",
    desc: "A production Model Context Protocol server with five tools: four read tools and one rate-limited, persisted write. Any compatible assistant can connect to the live endpoint and use it directly. Protocol and integration work, not agent work: the server makes no model calls of its own, and I present it that way.",
    link: "mcp.djaouad.is-a.dev",
    href: "https://mcp.djaouad.is-a.dev",
    git: "github.com/djoudad292/hireme-mcp",
  },
];

const internalWork = [
  "A B2B sales-intelligence pipeline of 12 MCP tools behind a 9-step orchestrator, with an automated QA gate before anything is sent. Internal tooling, not a public repository, and not listed above for that reason.",
  "A lead and outreach MCP server of roughly 60 files covering discovery, scoring and sequence management. Internal, and deliberately not public.",
  "An offline eval harness that scores retrieval against a goldset, with a threshold sweep to pick the operating point.",
  "Token usage and latency capture persisted per request and served through an authenticated metrics endpoint, so a running system's cost is readable rather than guessed.",
  "A content pipeline with a human approval gate: strategy, generation, automated quality check, human sign-off, publish, analytics, and the results fed back into the next cycle.",
];

export default function CVPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">
        <section className="pt-28 pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
            CV · CURRICULUM VITAE
          </p>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
                Djaouad Frih<span className="text-primary">.</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                AI systems engineer. The agent, the retrieval layer behind it, and
                the application around it.
              </p>
            </div>
            <a
              href="/cv/Djaouad_Frih_CV.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download PDF
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" />Mascara, Algeria</span>
            <a href="mailto:contact@djaouad.is-a.dev" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Mail className="h-3.5 w-3.5 text-primary" />E-mail</a>
            <a href="tel:+213780688125" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Phone className="h-3.5 w-3.5 text-primary" />+213 78 06 88 125</a>
            <a href="https://github.com/djoudad292" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Github className="h-3.5 w-3.5 text-primary" />github.com/djoudad292</a>
            <a href="https://www.linkedin.com/in/djaouad-frih" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Linkedin className="h-3.5 w-3.5 text-primary" />linkedin.com/in/djaouad-frih</a>
            <a href="https://djaouad.is-a.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><ArrowUpRight className="h-3.5 w-3.5 text-primary" />djaouad.is-a.dev</a>
          </div>
        </section>

        <section className="pb-20">
          <div className="grid gap-12">
            <Block title="Profile">
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Engineering graduate from ESI SBA, working on one thing: putting AI
                into systems that hold up in production. I design, build and deploy
                the whole stack, from vector retrieval and agent tool-calling through
                to auth, tenancy and deployment. Two LangGraph agents and two
                production retrieval pipelines are running on real domains now, all
                with public repositories.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                I hold a line on measurement. Retrieval is scored offline against a
                goldset rather than assumed. The benchmark runs on the AI Virtual
                Receptionist knowledge base (dental clinic KB, 15 chunks, 18 queries)
                with a deterministic offline embedder (concept lens + hashed lexical
                residual). The most recent run reached 93.8% F1 at threshold 0.35.
                This measures the retrieval policy (the similarity floor, top-k cut,
                and vector-vs-keyword choice), not the production embedder
                (text-embedding-3-small) or end-to-end answer quality. Token usage
                and latency are recorded per request and served through an
                authenticated metrics endpoint. Where something is not measured, I
                say so rather than implying it is.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                On tenure: these systems were built between August and October 2026,
                and the receptionist is the one I have kept running longest. I am
                early in my career and I would rather say that plainly than dress it
                up. What I bring is depth on the AI-systems side and the ability to
                own a build from schema to production without handing it to someone
                else.
              </p>
            </Block>

            <Block title="Skills">
              <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((s) => (
                  <div key={s.group}>
                    <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">{s.group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Experience">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl">IT Intern</h3>
                    <p className="text-sm text-muted-foreground">Algérie Télécom, Sidi Bel-Abbès</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">2024</span>
                </div>
                <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
                  <li>Shipped and maintained internal web applications used daily by the enterprise.</li>
                  <li>Operated production-grade systems and databases under real traffic.</li>
                  <li>Delivered in agile teams, owning tasks end-to-end from breakdown to rollout.</li>
                </ul>
              </div>
            </Block>

            <Block title="Projects">
              <div className="grid gap-5">
                {projects.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl">{p.title}</h3>
                      <div className="flex gap-4 font-mono text-xs">
                        {p.git && (
                          <a href={`https://${p.git}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
                            <Github className="h-3.5 w-3.5" /> GitHub
                          </a>
                        )}
                        <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
                          <ArrowUpRight className="h-3.5 w-3.5" /> {p.link}
                        </a>
                      </div>
                    </div>
                    <p className="mt-2 font-mono text-xs text-primary">{p.stack}</p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Internal Tooling">
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Not public projects, and listed separately for that reason. These
                have no public repository and some involve outreach tooling, so I am
                describing the capability rather than inviting you to inspect a repo.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
                {internalWork.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Block>

            <Block title="Education">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl">Engineering Degree in Computer Science</h3>
                  <p className="mt-1 text-sm text-muted-foreground">École Supérieure en Informatique (ESI SBA)</p>
                  <p className="mt-3 text-sm text-muted-foreground">State engineering diploma with specialization in software development and AI.</p>
                  <span className="mt-3 inline-block font-mono text-xs text-muted-foreground">2023 to 2026</span>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl">Master&apos;s Degree in Computer Science</h3>
                  <p className="mt-1 text-sm text-muted-foreground">École Supérieure en Informatique (ESI SBA)</p>
                  <p className="mt-3 text-sm text-muted-foreground">Advanced coursework in AI, software engineering, and distributed systems.</p>
                  <span className="mt-3 inline-block font-mono text-xs text-muted-foreground">2026</span>
                </div>
              </div>
            </Block>

            <Block title="Languages & Interests">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Arabic", "English", "French"].map((l) => (
                      <span key={l} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">{l}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI Agents", "Open Source", "Retrieval Systems", "LLM Evaluation", "Automation", "Web Security", "Real-time Systems"].map((i) => (
                      <span key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Block>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-8 text-center">
            <h2 className="font-display text-3xl tracking-tight">Skip the CV.</h2>
            <p className="max-w-md text-muted-foreground">
              The receptionist below is the same system described above, running in
              production. Ask it about my work, pricing or availability.
            </p>
            <Link
              href="https://chat.djaouad.is-a.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              Try the live demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-4">
        <h2 className="font-display text-3xl tracking-tight">{title}</h2>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}
