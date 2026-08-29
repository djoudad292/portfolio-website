import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Github, Bot, FileSearch, Layers, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire an AI Developer | Djaouad Frih — AI Agents, RAG & Full-Stack Builds",
  description:
    "Hire a full-stack AI developer to build AI agents, RAG/knowledge systems, chatbots and AI-powered SaaS end-to-end. Fixed-price, milestone-based, shipped to production — not demos. Try the live products first.",
  alternates: { canonical: "https://djaouad.tech/hire-ai-developer" },
  openGraph: {
    title: "Hire an AI Developer — Djaouad Frih",
    description: "AI agents, RAG systems and full-stack AI products, built and shipped to production. Fixed-price and milestone-based.",
    url: "https://djaouad.tech/hire-ai-developer",
    type: "website",
  },
};

const services = [
  { icon: Bot, title: "AI agents & chatbots", text: "Customer-facing agents trained on your own content — they answer, book, qualify leads, and hand off to humans when it matters. Live demo below." },
  { icon: FileSearch, title: "Document intelligence (RAG)", text: "Your PDFs and documents become a cited, searchable knowledge base — for your team or embedded in your product as an ask-your-docs widget." },
  { icon: Layers, title: "Full-stack AI SaaS", text: "Multi-tenant products end-to-end: auth, payments, dashboards, real-time features, with AI woven through. Next.js + NestJS + PostgreSQL." },
  { icon: Smartphone, title: "Mobile apps with AI", text: "One React Native codebase shipped to both app stores, connected to your backend and AI features, built to update fast." },
];

const process = [
  { step: "01", title: "Free discovery call", text: "We talk about your problem, the workflow, and whether AI is actually the right fix. If it isn't, I'll tell you." },
  { step: "02", title: "Fixed quote & milestones", text: "A fixed project price split into milestones, with a signed scope. No hourly surprises, no runaway invoices." },
  { step: "03", title: "Build, ship, hand over", text: "I build end-to-end and deploy it to production. The code, the domain, and the deployment are yours at the end." },
];

export default function HirePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">
        <section className="pt-28 pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
            HIRE AN AI DEVELOPER
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            Hire an AI developer who ships, <span className="text-primary">not just demos.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build AI agents, RAG/knowledge systems, and AI-powered full-stack apps — end-to-end, from
            architecture to deployment. The portfolio below runs entirely on the AI I build. Try it:
            every product is live in production. Fixed-price, milestone-based, remote worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://calendly.com/oufr29/30min" target="_blank" rel="noopener noreferrer"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Book a free call
            </Link>
            <Link href="/cv" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              <ArrowDownToLine className="h-4 w-4" /> View CV
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["🚀 Shipped not demoed", "📦 Fixed-price, milestone-based", "🌍 Remote, US/EU hours"].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">{t}</div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">Proof of work — live in production</h2>
          <div className="mt-6 grid gap-5">
            <DemoCard title="AI Receptionist" link="chat.djaouad.tech" href="https://chat.djaouad.tech"
              git="github.com/djoudad292/ai-virtual-receptionist"
              desc="A 24/7 AI receptionist that answers in under a second, books appointments, captures and qualifies leads, routes to the right department, and hands off to humans with AI-drafted replies. Real-time chat, RAG knowledge base, and native Android app." />
            <DemoCard title="Smart PDF Workspace" link="docs.djaouad.tech" href="https://docs.djaouad.tech"
              git="github.com/djoudad292/smart-pdf-workspace"
              desc="Drop a document, ask questions, get answers with page citations. Auto-extracts, chunks, and embeds your files into pgvector — an ask-your-docs knowledge base your team or your customers can use." />
            <DemoCard title="AI Customer Support Agent" link="customer.djaouad.tech" href="https://customer.djaouad.tech"
              git="github.com/djoudad292/ai-customer-support-agent"
              desc="Answers common questions from a RAG knowledge base, checks orders, creates tickets, and escalates to humans only when genuinely needed. Admin dashboard + embeddable widget." />
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">What I build for you</h2>
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
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-sm text-primary">{p.step}</div>
                <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-10 text-center">
            <h2 className="font-display text-3xl tracking-tight">Don't read — try the AI I build.</h2>
            <p className="max-w-md text-muted-foreground">
              The receptionist on this site is a live product. Ask it about pricing, availability, or your project brief.
            </p>
            <Link href="https://chat.djaouad.tech" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Try the live demo <ArrowUpRight className="h-4 w-4" />
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
