import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Download } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionCard } from "@/components/section-card";
import { ChipButton } from "@/components/page-buttons";

export const metadata: Metadata = {
  title: "Work · Measured AI Systems | Djaouad Frih",
  description:
    "Systems I built and operate: AI receptionist, support agent, and retrieval benchmark. Each one measured against real documents, with failures published.",
  alternates: { canonical: "https://djaouad.is-a.dev/work" },
};

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
    <main className="relative min-h-screen text-foreground">
      <SectionWrapper>
        <section className="pt-16 sm:pt-20 pb-10 sm:pb-14">
          <span className="inline-block rounded-md border border-border bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[var(--text-xs)] uppercase tracking-wider">
            SELECTED WORK
          </span>

          <h1 className="mt-4 sm:mt-5 font-display text-[var(--text-3xl)] sm:text-[var(--text-4xl)] leading-[1.06] tracking-tight">
            Systems I built and operate.
          </h1>

          <p className="mt-4 sm:mt-5 max-w-none sm:max-w-xl text-[var(--text-base)] sm:text-[var(--text-lg)] leading-relaxed text-muted-foreground">
            Each one is measured against real documents, with the failures published. No
            demo-only claims — every number comes from a committed benchmark you can re-run.
          </p>
        </section>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <SectionCard key={c.name} padding="4">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight group-hover:text-primary"
              >
                {c.name}
              </a>
              <span className="mt-1 sm:mt-1.5 block font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                {c.label}
              </span>
              <p className="mt-1 sm:mt-1.5 text-[var(--text-xs)] sm:text-sm leading-snug text-muted-foreground">{c.desc}</p>
              <p className="mt-1 font-mono text-[var(--text-xs)] text-muted-foreground">{c.limit}</p>
              <p className="mt-2 sm:mt-2.5 font-mono text-[var(--text-xs)] text-primary">{c.outcome}</p>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 font-mono text-[var(--text-xs)]">
                <ChipButton href={c.url}>
                  <ExternalLink className="h-3 w-3 shrink-0" /> try it
                </ChipButton>
                <ChipButton href={c.repo}>
                  <Github className="h-3 w-3 shrink-0" /> code
                </ChipButton>
                {c.apk && (
                  <ChipButton href={c.apk}>
                    <Download className="h-3 w-3 shrink-0" /> android
                  </ChipButton>
                )}
              </div>
            </SectionCard>
          ))}
        </div>

        <section className="pb-16 sm:pb-20 mt-10 sm:mt-14">
          <SectionCard padding="6">
            <h2 className="font-display text-[var(--text-xl)] sm:text-[var(--text-2xl)] tracking-tight">
              Start with the audit
            </h2>
            <p className="mt-2 sm:mt-3 max-w-none sm:max-w-lg text-[var(--text-xs)] sm:text-[var(--text-base)] leading-relaxed text-muted-foreground">
              The free reliability audit is how I get a client case study — measured on your
              documents first, scored against a goldset you approve, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-4 sm:mt-5">
              <Link href="/contact?for=audit" className="inline-flex items-center rounded-xl bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-[var(--text-base)] sm:text-[var(--text-lg)] font-semibold text-primary-foreground transition-colors hover:opacity-90">
                Start with the audit
              </Link>
            </div>
          </SectionCard>
        </section>
      </SectionWrapper>
    </main>
  );
}
