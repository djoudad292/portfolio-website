import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Work · Measured AI Systems | Djaouad Frih",
  description:
    "Systems I built and operate: AI receptionist, support agent, and retrieval benchmark. Each one measured against real documents, with failures published.",
  alternates: { canonical: "https://djaouad.is-a.dev/work" },
};

const primaryBtn =
  "w-full sm:w-auto rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const chip =
  "rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary";

const cases = [
  {
    name: "AI Receptionist",
    desc: "24/7 receptionist that answers questions, books appointments, and captures leads from your own documents. Measured on a 232-query retrieval benchmark.",
    outcome: "Running in production since August 2026 — lead capture, booking, and human handoff.",
    url: "https://chat.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/ai-virtual-receptionist",
    apk: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk",
    label: "Built and operated by me",
    limit: "Single-tenant, single-language.",
  },
  {
    name: "Support Agent",
    desc: "Handles tier-one support, checks orders, creates tickets, and escalates to humans with the full conversation attached.",
    outcome: "~92% of support questions handled by AI, ~25 hours saved per week, 0 missed bookings.",
    url: "https://customer.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/ai-customer-support-agent",
    apk: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk",
    label: "Built and operated by me",
    limit: "No published retrieval benchmark.",
  },
  {
    name: "WhatsApp CRM / ERP",
    desc: "Agent reads WhatsApp messages, checks real stock, and creates orders — behind human approval gates with an audit trail.",
    outcome: "Side-effecting actions on inventory run under human approval.",
    url: "https://crm.djaouad.is-a.dev/try",
    repo: "https://github.com/djoudad292/ai-whatsapp-crm-erp",
    label: "Built and operated by me",
    limit: "Human approval gates on every write.",
  },
  {
    name: "Smart PDF Workspace",
    desc: "Ask your contracts, invoices & PDFs. Answers with sources, and the retrieval mode that produced each one.",
    outcome: "Document Q&A with cited sources — every answer traces back to the document.",
    url: "https://docs.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/smart-pdf-workspace",
    apk: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk",
    label: "Built and operated by me",
    limit: "Text layer only — no OCR.",
  },
  {
    name: "HireMe MCP Server",
    desc: "MCP server that exposes your profile, projects, and pricing so AI assistants can vet your work and file a brief.",
    outcome: "Protocol-level tool surface — read tools plus one rate-limited write for brief submission.",
    url: "https://mcp.djaouad.is-a.dev/mcp",
    repo: "https://github.com/djoudad292/hireme-mcp",
    label: "Built and operated by me",
    limit: "Protocol tooling, not a client system.",
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <section className="pt-20 sm:pt-28 pb-12 sm:pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            SELECTED WORK
          </span>

          <h1 className="mt-5 sm:mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.04] tracking-tight">
            Systems I built and operate.
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Each one is measured against real documents, with the failures published. No
            demo-only claims — every number comes from a committed benchmark you can re-run.
          </p>
        </section>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card p-4 sm:p-6">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-display text-base sm:text-lg tracking-tight group-hover:text-primary"
              >
                {c.name}
              </a>
              <span className="mt-1 sm:mt-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {c.label}
              </span>
              <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm leading-snug text-muted-foreground">{c.desc}</p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">{c.limit}</p>
              <p className="mt-2 sm:mt-3 font-mono text-[10px] sm:text-xs text-primary">{c.outcome}</p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 font-mono text-[10px]">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={chip}
                >
                  <ExternalLink className="h-3 w-3 shrink-0 mr-1" /> try it
                </a>
                <a
                  href={c.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={chip}
                >
                  <Github className="h-3 w-3 shrink-0 mr-1" /> code
                </a>
                {c.apk && (
                  <a
                    href={c.apk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chip}
                  >
                    <Download className="h-3 w-3 shrink-0 mr-1" /> android
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="pb-20 sm:pb-24 mt-12 sm:mt-16">
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tight">
              Start with the audit
            </h2>
            <p className="mt-3 sm:mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
              The free reliability audit is how I get a client case study — measured on your
              documents first, scored against a goldset you approve, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-6 sm:mt-7">
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
