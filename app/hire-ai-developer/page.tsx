import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Bot, FileSearch, Layers, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire an AI Developer | Djaouad Frih — Custom AI Systems & Full-Stack Builds",
  description:
    "Hire an AI developer to build AI integrations, custom AI systems, and AI-powered products — end-to-end from requirements through deployment. Fixed-price, milestone-based, production-ready.",
  alternates: { canonical: "https://djaouad.tech/hire-ai-developer" },
  openGraph: {
    title: "Hire an AI Developer — Djaouad Frih",
    description: "AI integrations, custom AI systems, and production builds — fixed-price, milestone-based.",
    url: "https://djaouad.tech/hire-ai-developer",
    type: "website",
  },
};

const services = [
  { icon: Bot, title: "AI Integrations", text: "Connect AI to your existing products, APIs, CRMs, and databases. Add chat, search, extraction, or automation without rebuilding what you have." },
  { icon: FileSearch, title: "Custom AI Systems", text: "AI systems that use your business data, tools, and workflows to perform real tasks — agents, knowledge bases, support systems, automation pipelines." },
  { icon: Layers, title: "AI Products & Internal Tools", text: "Complete production-ready applications built around a specific AI use case. Full-stack web or mobile with auth, dashboards, and real-time features." },
  { icon: Smartphone, title: "Mobile Apps", text: "React Native apps shipped to both app stores — connected to your backend and AI features, built to update fast." },
];

const process = [
  { step: "01", title: "Tell me what you're building", text: "Share your project brief — what it needs to do, what it connects to, and what success looks like." },
  { step: "02", title: "I review the scope", text: "I assess feasibility, define the architecture, and send a fixed-price proposal with clear milestones." },
  { step: "03", title: "We build in milestones", text: "You see working software at each milestone. Feedback is incorporated before moving to the next one." },
  { step: "04", title: "You get the production system", text: "Code, deployment, documentation — everything handed over. The system is yours." },
];

export default function HirePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">
        <section className="pt-28 pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
            AI DEVELOPER
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            Hire a developer who builds <span className="text-primary">production systems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build AI integrations, custom AI systems, and AI-powered products — end-to-end,
            from architecture to deployment. If you already know what you need built,
            I&apos;ll scope it, build it in milestones, and hand over production-ready code.
            Fixed-price, remote worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Describe your project
            </a>
            <a href="/cv" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              View CV
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Fixed-price, milestone-based", "Working software at each step", "Remote, US/EU hours"].map((t) => (
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
          <h2 className="font-display text-3xl tracking-tight">Proof of work — live in production</h2>
          <div className="mt-6 grid gap-5">
            <DemoCard title="AI Receptionist" link="chat.djaouad.tech" href="https://chat.djaouad.tech"
              git="github.com/djoudad292/ai-virtual-receptionist"
              desc="24/7 AI receptionist that answers in real time, books appointments, captures leads, and hands off to humans — grounded in the business's own knowledge base." />
            <DemoCard title="Smart PDF Workspace" link="docs.djaouad.tech" href="https://docs.djaouad.tech"
              git="github.com/djoudad292/smart-pdf-workspace"
              desc="Document intelligence system that answers questions from PDFs with cited sources. Embeddable as a widget or used standalone." />
            <DemoCard title="AI Customer Support Agent" link="customer.djaouad.tech" href="https://customer.djaouad.tech"
              git="github.com/djoudad292/ai-customer-support-agent"
              desc="Handles repeated support questions using company knowledge, creates tickets, checks orders, and escalates to humans when needed." />
          </div>
        </section>

        <section className="pb-20">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-10 text-center">
            <h2 className="font-display text-3xl tracking-tight">Have a project in mind?</h2>
            <p className="max-w-md text-muted-foreground">
              Tell me what you need built. I&apos;ll review the scope and send a fixed-price proposal with clear milestones.
            </p>
            <Link href="/#contact"
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
