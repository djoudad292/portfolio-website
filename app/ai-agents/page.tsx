import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, CalendarCheck, FileSearch, Headset, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents for Business| Production LangGraph Agents · Djaouad Frih",
  description:
    "Tool-calling AI agents built as LangGraph state machines: support agents, booking receptionists and document assistants with vector retrieval and real human handoff. Two live in production, source available.",
  alternates: { canonical: "https://djaouad.is-a.dev/ai-agents" },
  openGraph: {
    title: "Production AI Agents · Djaouad Frih",
    description:
      "LangGraph agents with real tool-calling loops, conditional routing and vector retrieval. Two shipped and live, both with public repositories.",
    url: "https://djaouad.is-a.dev/ai-agents",
    type: "website",
  },
};

const agents = [
  { icon: Headset, title: "Customer support agent", text: "Answers from a vector knowledge base, checks orders, creates tickets, and escalates to a human only when it matters. Tool arguments are validated before anything runs, and the routing is a state machine rather than one long prompt." },
  { icon: CalendarCheck, title: "Receptionist and booking agent", text: "Always on. Books appointments, captures and qualifies leads, routes conversations to the right department, and hands off to a person with a drafted reply already written. Nobody is left staring at an unanswered message." },
  { icon: FileSearch, title: "Document and retrieval assistant", text: "Ask your own documents anything and get an answer with its source attached. Sentence-aware chunking, embeddings, and vector search with an HNSW index, benchmarked on a goldset rather than trusted." },
  { icon: Bot, title: "Multi-step agentic workflows", text: "Data collection, document routing, follow-ups, handoffs between systems and people. Every step is inspectable and every tool call is typed, so a bad input fails loudly instead of quietly doing the wrong thing." },
];

const usecases = [
  { title: "E-commerce and SaaS", text: "Order status, product questions and returns answered from your catalog, so support volume stops setting your headcount." },
  { title: "Clinics and service businesses", text: "The 9pm enquiry gets answered at 9pm, qualified, and booked. Follow-up happens in the morning instead of never." },
  { title: "Legal, compliance and research", text: "Ask across a document set and get an answer with a citation, so a reviewer can check it in seconds rather than an afternoon." },
  { title: "Founders and agencies", text: "An agent inside a product you are shipping, plus the delivery capacity to build it. Fixed scope, milestones, source handed over." },
];

const boundaries = [
  "Retrieval quality is measured on a goldset. The most recent run scored 93.8% F1 on vector retrieval.",
  "That benchmark covers retrieval. It does not score written answer quality or how well an agent chooses between tools, and I do not claim it does.",
  "Every model call records token usage and latency, exposed through an authenticated metrics endpoint. That is cost and latency capture, not full distributed tracing.",
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
            Agents that decide and <span className="text-primary">know when to stop.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build agents as LangGraph state machines with real tool-calling
            loops and conditional routing, grounded in your data through vector
            retrieval, with a human handoff that carries the whole conversation.
            Two are running in production now, both with public repositories.
            Fixed-price and milestone-based.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://chat.djaouad.is-a.dev" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              Try a live agent <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="mailto:contact@djaouad.is-a.dev"
              className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15">
              Email me <ArrowUpRight className="h-4 w-4" />
            </a>
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

        <section className="pb-16">
          <h2 className="font-display text-3xl tracking-tight">What is measured, and what is not</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Agent work is easy to oversell, so here is the boundary I hold.
          </p>
          <ul className="mt-6 space-y-3">
            {boundaries.map((b) => (
              <li key={b} className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden className="font-mono text-xs text-primary">/</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-20">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/25 bg-primary/10 p-10 text-center">
            <Search className="h-8 w-8 text-primary" />
            <h2 className="font-display text-3xl tracking-tight">See one working right now</h2>
            <p className="max-w-md text-muted-foreground">
              The agent below is a live production system, running on my real business data. Ask it about pricing or your project.
            </p>
            <Link href="https://chat.djaouad.is-a.dev" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Try the live demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
