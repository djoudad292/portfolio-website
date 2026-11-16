import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work · Measured AI Systems | Djaouad Frih",
  description:
    "Systems I built and operate: AI receptionist, support agent, and retrieval benchmark. Each one measured against real documents, with failures published.",
  alternates: { canonical: "https://djaouad.is-a.dev/work" },
};

const primaryBtn =
  "rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const chip =
  "rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary";

const cases = [
  {
    name: "AI Receptionist",
    desc: "24/7 receptionist that answers questions, books appointments, and captures leads from your own documents. Measured on a 232-query retrieval benchmark.",
    outcome: "Running in production since August 2026 — lead capture, booking, and human handoff.",
    url: "https://chat.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/ai-virtual-receptionist",
  },
  {
    name: "Support Agent",
    desc: "Handles tier-one support, checks orders, creates tickets, and escalates to humans with the full conversation attached.",
    outcome: "~92% of support questions handled by AI, ~25 hours saved per week, 0 missed bookings.",
    url: "https://customer.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/ai-customer-support-agent",
  },
  {
    name: "WhatsApp CRM / ERP",
    desc: "Agent reads WhatsApp messages, checks real stock, and creates orders — behind human approval gates with an audit trail.",
    outcome: "Side-effecting actions on inventory run under human approval, so a wrong agent action can't reach production.",
    url: "https://crm.djaouad.is-a.dev/try",
    repo: "https://github.com/djoudad292/ai-whatsapp-crm-erp",
  },
  {
    name: "Smart PDF Workspace",
    desc: "Ask your contracts, invoices & PDFs. Answers with sources, and the retrieval mode that produced each one.",
    outcome: "Document Q&A with cited sources — every answer traces back to the document it came from.",
    url: "https://docs.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/smart-pdf-workspace",
  },
  {
    name: "HireMe MCP Server",
    desc: "MCP server that exposes your profile, projects, and pricing so AI assistants can vet your work and file a brief without a human in the loop.",
    outcome: "Protocol-level tool surface — read tools plus one rate-limited write for brief submission.",
    url: "https://mcp.djaouad.is-a.dev/mcp",
    repo: "https://github.com/djoudad292/hireme-mcp",
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            SELECTED WORK
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            Systems I built and operate.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Each one is measured against real documents, with the failures published. No
            demo-only claims — every number comes from a committed benchmark you can re-run.
          </p>
        </section>

        <div className="grid gap-5 sm:grid-cols-2">
          {cases.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card p-6">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-display text-xl tracking-tight group-hover:text-primary"
              >
                {c.name}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <p className="mt-2 font-mono text-xs text-primary">{c.outcome}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={chip}
                >
                  try it
                </a>
                <a
                  href={c.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={chip}
                >
                  code
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="pb-24 mt-16">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">
              Start with the audit
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              The free reliability audit is how I get a client case study — measured on your
              documents first, scored against a goldset you approve, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-6">
              <Link href="/contact?for=audit" className={primaryBtn}>
                Start with the audit
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
