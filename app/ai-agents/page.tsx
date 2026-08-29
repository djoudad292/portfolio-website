import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, CalendarCheck, FileSearch, Headset, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents for Business | Build & Integrate — Djaouad Frih",
  description:
    "Build AI agents for your business: customer support agents, appointment-booking receptionists, document/RAG assistants, and lead capture. Live demos, fixed-price, shipped to production.",
  alternates: { canonical: "https://djaouad.tech/ai-agents" },
  openGraph: {
    title: "AI Agents for Business — Djaouad Frih",
    description: "Build and integrate AI agents: support, receptionist, document assistants, lead capture. Live in production.",
    url: "https://djaouad.tech/ai-agents",
    type: "website",
  },
};

const agents = [
  { icon: Headset, title: "Customer support agent", text: "Answers common questions from your knowledge base, checks orders, creates tickets, and escalates to a human only when it matters. Cuts support load instantly." },
  { icon: CalendarCheck, title: "Receptionist & booking agent", text: "An always-on agent that books appointments, captures and qualifies leads, and sends reminders. No missed calls, no missed bookings." },
  { icon: FileSearch, title: "Document / RAG assistant", text: "Ask your own documents anything and get answers with citations. Perfect for contracts, manuals, policies, and product knowledge." },
  { icon: Bot, title: "Agentic workflows", text: "Automate multi-step business processes — data collection, document routing, follow-ups, and handoffs between systems and humans." },
];

const usecases = [
  { title: "Clinics & dental", text: "Patients call, nobody answers, they book elsewhere. An AI receptionist books and reminds every patient — 24/7." },
  { title: "E-commerce & stores", text: "Handle order status, product questions and returns instantly from your catalog, so you don't lose sales to a slow inbox." },
  { title: "Law firms", text: "People contact three firms and hire whoever answers first. Your agent answers right away, asks the right questions, books the consult." },
  { title: "SaaS & agencies", text: "Add an ask-your-docs widget or AI support layer to your product — without growing your support team." },
];

export default function AiAgentsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">
        <section className="pt-28 pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
            AI AGENTS FOR BUSINESS
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            AI agents that do real work, <span className="text-primary">live in production.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build AI agents that answer, book, qualify, route, and handle the repetitive work that costs you
            leads every day — trained on your own content, grounded in your data, and shipped so your team and
            customers actually use them. Fixed-price and milestone-based.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://calendly.com/oufr29/30min" target="_blank" rel="noopener noreferrer"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Book a free call
            </Link>
            <Link href="https://chat.djaouad.tech" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              Try a live agent <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">Types of agents I build</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {agents.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
                <a.icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-display text-xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">Where they help most</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {usecases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-10 text-center">
            <Search className="h-8 w-8 text-primary" />
            <h2 className="font-display text-3xl tracking-tight">See one working right now</h2>
            <p className="max-w-md text-muted-foreground">
              The agent on this site is a live product, trained on my real business data. Ask it about pricing or your project.
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
