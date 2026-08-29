import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "CV — Djaouad Frih | Full-Stack AI Engineer",
  description:
    "Djaouad Frih — Full-Stack AI Engineer. AI agents, RAG/knowledge systems, LLM integrations and the web/mobile apps around them. Take projects end-to-end from database to deployment.",
};

const skills = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
  { group: "Backend", items: ["NestJS", "Node.js", "Express", "PostgreSQL", "pgvector"] },
  { group: "AI / ML", items: ["LLMs", "RAG", "Gemini", "OpenAI", "LangGraph", "Tool Calling", "Embeddings", "Vector Search"] },
  { group: "Tools", items: ["Git", "Docker", "Linux", "WebSocket", "REST APIs"] },
  { group: "Security", items: ["Web Pentesting", "OWASP"] },
];

const projects = [
  {
    title: "AI Virtual Receptionist",
    stack: "Next.js · NestJS · pgvector · React Native · Socket.io · Gemini",
    desc: "A 24/7 AI receptionist that ensures no inbound lead is ever missed — books appointments, captures and qualifies leads, routes conversations to the right department, and hands off to humans with AI-drafted replies. Real-time streaming chat, RAG knowledge base, native Android app, and embeddable widget. Deployed to production.",
    link: "chat.djaouad.tech",
    href: "https://chat.djaouad.tech",
    git: "github.com/djoudad292/ai-virtual-receptionist",
  },
  {
    title: "Smart PDF Workspace",
    stack: "Next.js · NestJS · pgvector · Gemini · WebSocket",
    desc: "Turns static documents into a working knowledge base: upload PDFs, auto-extract text, chunk and embed into pgvector, then ask natural-language questions grounded in your own files — no more hunting through folders. Team management, publishable embeddable widget, and real-time analytics dashboard.",
    link: "docs.djaouad.tech",
    href: "https://docs.djaouad.tech",
    git: "github.com/djoudad292/smart-pdf-workspace",
  },
  {
    title: "AI Customer Support Agent",
    stack: "Next.js · NestJS · LangGraph · pgvector · OpenAI · TypeScript",
    desc: "Automates the repetitive layer of customer support so the human team focuses on what matters: answers common questions from a RAG knowledge base, checks orders, creates tickets, and escalates to humans only when genuinely needed. Includes admin dashboard and embeddable widget, live in production.",
    link: "customer.djaouad.tech",
    href: "https://customer.djaouad.tech",
    git: "github.com/djoudad292/ai-customer-support-agent",
  },
  {
    title: "Developer Portfolio",
    stack: "Next.js · Tailwind CSS · Framer Motion · Netlify",
    desc: "High-conversion portfolio engineered for client acquisition — direct booking via Calendly, social-proof metrics, urgency-driven CTAs, and a live AI chatbot demo embedded directly on the page.",
    link: "djaouad.tech",
    href: "https://djaouad.tech",
    git: null,
  },
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
                AI-powered full-stack engineering that moves from demo to revenue.
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
            <a href="mailto:djaouad.frih@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Mail className="h-3.5 w-3.5 text-primary" />djaouad.frih@gmail.com</a>
            <a href="tel:+213780688125" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Phone className="h-3.5 w-3.5 text-primary" />+213 780 688 125</a>
            <a href="https://github.com/djoudad292" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Github className="h-3.5 w-3.5 text-primary" />github.com/djoudad292</a>
            <a href="https://www.linkedin.com/in/djaouad-frih" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Linkedin className="h-3.5 w-3.5 text-primary" />linkedin.com/in/djaouad-frih</a>
            <a href="https://djaouad.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><ArrowUpRight className="h-3.5 w-3.5 text-primary" />djaouad.tech</a>
          </div>
        </section>

        <section className="pb-20">
          <div className="grid gap-12">
            <Block title="Profile">
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Engineering graduate from ESI SBA focused on one thing: turning AI capability into
                measurable business outcomes. I design, build, and deploy production-grade AI products —
                LLM integrations, RAG pipelines, and the web and mobile apps around them — taking each
                project end-to-end from database design to deployment. Every system I ship is built to
                drive efficiency, capture revenue, and serve real users in production, not just in demos.
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
                    <p className="text-sm text-muted-foreground">Algérie Télécom — Sidi Bel-Abbès</p>
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

            <Block title="Education">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl">Engineering Degree in Computer Science</h3>
                  <p className="mt-1 text-sm text-muted-foreground">École Supérieure en Informatique (ESI SBA)</p>
                  <p className="mt-3 text-sm text-muted-foreground">State engineering diploma with specialization in software development and AI.</p>
                  <span className="mt-3 inline-block font-mono text-xs text-muted-foreground">2023 — 2026</span>
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
                    {["AI Agents", "Open Source", "Automation", "Web Security", "Real-time Systems"].map((i) => (
                      <span key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Block>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-8 text-center">
            <h2 className="font-display text-3xl tracking-tight">Talking to a CV is boring.</h2>
            <p className="max-w-md text-muted-foreground">
              Try the live AI agent instead — ask it about my work, pricing and availability.
            </p>
            <Link
              href="https://chat.djaouad.tech"
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
