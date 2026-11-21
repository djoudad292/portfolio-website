import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Download } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionCard } from "@/components/section-card";
import { ChipButton } from "@/components/page-buttons";

import { AUDIT_OFFER, PRICE_ANCHOR } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Djaouad Frih — Measured AI Systems, Fixed Price",
  description:
    "I build retrieval layers and agent loops that run on your existing Postgres estate and monolith, scored against your own documents before a single prompt is written. Fixed price. Full builds start at $3,500.",
  alternates: { canonical: "https://djaouad.is-a.dev" },
};

const primaryBtnClasses =
  "w-full sm:w-auto rounded-xl bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-[var(--text-base)] font-semibold text-primary-foreground transition-colors hover:opacity-90";
const secondaryBtnClasses =
  "w-full sm:w-auto rounded-xl border border-border bg-card px-5 sm:px-6 py-3 sm:py-3.5 text-[var(--text-base)] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary";
const problems = [
  {
    t: "Your chatbot doesn't know your business.",
    b: "A demo answers from a prompt. Production answers from your data — with the source attached, a measured refusal rate, and a benchmark showing where it fails.",
  },
  {
    t: "Your pilot works in the demo and breaks on real traffic.",
    b: "Real systems need tool-calling loops that terminate, arguments validated before they execute, retrieval measured against a goldset, and a human escalation path with the conversation attached.",
  },
];

const work = [
  {
    name: "AI Receptionist",
    desc: "24/7 receptionist that answers questions, books appointments, and captures leads from your own documents.",
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

const credibility = [
  {
    label: "AI support agent — live result",
    value: "~92% of support questions handled by AI, ~25 hours saved per week, 0 missed bookings",
  },
  {
    label: "AI virtual receptionist — live result",
    value: "24/7 lead capture, booking, and human handoff — running in production since August 2026",
  },
  {
    label: "Retrieval benchmark",
    value: "93.4% F1 on a 232-query goldset, every failing query published",
    href: "/benchmark",
  },
];

const process = [
  { step: "01", title: "Free audit", body: "One week, target. Scored against your documents. No call required first." },
  { step: "02", title: "Fixed-price scope", body: "The audit becomes a written spec with acceptance criteria and a deploy-gating eval." },
  { step: "03", title: "Build + handover", body: "Source in your repo, docs, credentials, and 30 days to find defects." },
];

const faq = [
  { q: "How long does it take?", a: "Audit: one week, target. Scoped build: 3–6 weeks. Production system: 6–12 weeks." },
  { q: "What does the audit include?", a: "Precision/recall/F1 against a goldset built from your corpus, refusal rate on out-of-scope questions, citation correctness, p50/p95 latency and token cost, and a server-side authorization review." },
  { q: "What happens after the audit?", a: "You keep the report either way — including the line that says you don't need AI here yet. If you go ahead, the audit fee is credited in full against the build." },
  { q: "Who owns the code?", a: "You do. Source, infra credentials, and a handover doc land in your repo. Your team reruns the benchmark." },
  { q: "What if I don't need AI?", a: "I'll tell you. If an existing tool or subscription solves your problem, that's the honest answer and I'll say it first." },
  { q: "What's the guarantee?", a: "30-day defect window. If something breaks, I fix it. No change orders for defects." },
];

const industries = [
  { name: "Dental clinics", href: "/dental-clinics" },
  { name: "Agencies", href: "/for-agencies" },
  { name: "Industries", href: "/industries" },
  { name: "ROI calculator", href: "/roi" },
];

const dontDo = [
  "I'm not a full-service digital agency.",
  "I don't take work where I'm the cheapest credible option.",
  "I don't start engagements without written scope and acceptance criteria.",
  "I'll tell you if your project is a SaaS subscription rather than a build.",
];

const social = [
  { name: "GitHub", href: "https://github.com/djoudad292", icon: <Github className="h-3 w-3 shrink-0" /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/djaouad-frih-16ab7323a", icon: <ExternalLink className="h-3 w-3 shrink-0" /> },
];

function SectionHeadingLocal({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="mb-5 sm:mb-7 flex items-center gap-2 sm:gap-3">
      <h2 className="font-display text-[var(--text-2xl)] sm:text-[var(--text-3xl)] tracking-tight">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <SectionWrapper>
        <section className="pt-14 sm:pt-20 pb-10 sm:pb-16">
          <div className="max-w-[var(--container-sm)]">
            <span className="inline-block rounded-md border border-border bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[var(--text-xs)] uppercase tracking-wider">
              MEASURED AI SYSTEMS · FIXED PRICE · NO HOURLY SURPRISES
            </span>

            <h1 className="mt-4 sm:mt-5 font-display text-[var(--text-3xl)] sm:text-[var(--text-4xl)] lg:text-[var(--text-5xl)] leading-[1.06] tracking-tight">
              Your AI support agent should be measured before you trust it. I build it that way.
            </h1>

            <p className="mt-4 sm:mt-5 text-[var(--text-base)] sm:text-[var(--text-lg)] leading-relaxed text-muted-foreground">
              I build retrieval layers and agent loops that run on your existing Postgres estate
              and monolith, scored against your own documents before a single prompt is written.
              Fixed price. {PRICE_ANCHOR}.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-3">
              <Link href="/ai-reliability-audit" className={primaryBtnClasses}>
                Get the free reliability audit →
              </Link>
              <a
                href="https://linkedin.com/in/djaouad-frih-16ab7323a"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryBtnClasses}
              >
                <ExternalLink className="h-3 w-3 shrink-0 mr-1 sm:mr-2" />
                LinkedIn profile
              </a>
            </div>

            <p className="mt-4 sm:mt-5 font-mono text-[var(--text-xs)] text-muted-foreground">
              One week, target. Scored against your documents. No call required first.
              Failures are published alongside the scores.
            </p>

            <p className="mt-6 sm:mt-7 font-mono text-[var(--text-xs)] leading-relaxed text-muted-foreground">
              Remote · serves EU and US-East clients during overlapping business hours.
            </p>
          </div>
        </section>

        <section id="problems" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="The problems I solve" id="problems" />
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <SectionCard key={p.t} padding="4">
                <h3 className="font-display text-[var(--text-sm)] sm:text-[var(--text-base)] leading-snug tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-2 sm:mt-2.5 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                  {p.b}
                </p>
              </SectionCard>
            ))}
          </div>
        </section>

        <section id="credibility" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="What I can show you" id="credibility" />
          <dl className="grid gap-2 sm:gap-3 sm:grid-cols-[auto_1fr] sm:gap-4">
            {credibility.map((c) => (
              <div key={c.label} className="grid gap-1">
                <dt className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </dt>
                <dd className="text-[var(--text-xs)] sm:text-sm text-foreground">
                  {c.href ? (
                    <Link href={c.href} className="text-primary hover:underline">
                      {c.value}
                    </Link>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="testimonials" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="What they said" id="testimonials" />
          <SectionCard padding="6">
            <blockquote className="text-[var(--text-base)] sm:text-[var(--text-lg)] leading-relaxed text-muted-foreground italic">
              "The audit scored our chatbot on our own documents before we paid
              anything. It found exactly where it was guessing, and the build
              that followed fixed those same failures. Fixed price, source
              handed over, no surprises."
            </blockquote>
            <footer className="mt-5 sm:mt-6 flex items-baseline gap-2">
              <span className="font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">
                Clinic principal — EU dental group
              </span>
              <span className="text-[var(--text-xs)] text-muted-foreground">· anonymized</span>
            </footer>
          </SectionCard>
          <p className="mt-4 sm:mt-5 font-mono text-[var(--text-xs)] text-muted-foreground">
            One anonymized client. Working with dental clinics in the EU on
            after-hours reception and booking. References available on request.
          </p>
        </section>

        <section id="process" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="How it works" id="process" />
          <ol className="grid gap-3 sm:gap-4 sm:grid-cols-3">
            {process.map((p) => (
              <SectionCard key={p.step} padding="4">
                <span className="font-mono text-[var(--text-xs)] text-primary">{p.step}</span>
                <h3 className="mt-1 sm:mt-2 font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </SectionCard>
            ))}
          </ol>
        </section>

        <section id="work" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="Selected work" id="work" />
          <p className="mb-4 sm:mb-5 font-mono text-[var(--text-xs)] text-muted-foreground">
            Systems I built and operate. Each one states what it cannot do, because a page that
            only lists strengths is a page you have learned to distrust.
          </p>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => (
              <SectionCard key={w.name} padding="4">
                <span className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                  {w.label}
                </span>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-2.5 block font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight group-hover:text-primary"
                >
                  {w.name}
                </a>
                <p className="mt-1 sm:mt-1.5 text-[var(--text-xs)] sm:text-sm leading-snug text-muted-foreground">{w.desc}</p>
                <p className="mt-1 font-mono text-[var(--text-xs)] text-muted-foreground">{w.limit}</p>
                <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 font-mono text-[var(--text-xs)]">
                  <ChipButton href={w.url}>
                    <ExternalLink className="h-3 w-3 shrink-0" /> try it
                  </ChipButton>
                  <ChipButton href={w.repo}>
                    <Github className="h-3 w-3 shrink-0" /> code
                  </ChipButton>
                  {w.apk && (
                    <ChipButton href={w.apk}>
                      <Download className="h-3 w-3 shrink-0" /> android
                    </ChipButton>
                  )}
                </div>
              </SectionCard>
            ))}
          </div>
        </section>

        <section id="case-study" className="pb-10 sm:pb-14">
          <SectionCard padding="6">
            <SectionHeadingLocal title="Case study" />
            <p className="text-[var(--text-xs)] sm:text-[var(--text-sm)] leading-relaxed text-muted-foreground">
              Pro-bono build for an EU dental clinic (anonymized). The after-hours
              enquiry that never got answered was losing bookings to clinics that
              replied. Here is how it went from audit to result.
            </p>

            <div className="mt-5 sm:mt-6 space-y-4">
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                <SectionCard padding="4" className="bg-background border-border/50">
                  <span className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                    01 · Problem
                  </span>
                  <h4 className="mt-1 sm:mt-2 font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">
                    After-hours enquiries dropped
                  </h4>
                  <p className="mt-1 sm:mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                    Patients messaging on WhatsApp after closing got no reply
                    until the next morning — and many had already booked elsewhere.
                  </p>
                </SectionCard>
                <SectionCard padding="4" className="bg-background border-border/50">
                  <span className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                    02 · Audit
                  </span>
                  <h4 className="mt-1 sm:mt-2 font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">
                    Scored against real messages
                  </h4>
                  <p className="mt-1 sm:mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                    Free reliability audit on 180 real patient messages. The bot
                    answered from its prompt, not the clinic's price list — wrong
                    prices, no booking links, and no refusal on clinical questions.
                  </p>
                </SectionCard>
                <SectionCard padding="4" className="bg-background border-border/50">
                  <span className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                    03 · Build
                  </span>
                  <h4 className="mt-1 sm:mt-2 font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">
                    Fixed-price receptionist
                  </h4>
                  <p className="mt-1 sm:mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                    Multilingual receptionist (French, Arabic, English) quoting
                    from the clinic's own price list, holding appointments, and
                    escalating clinical questions with the conversation attached.
                    3-week build.
                  </p>
                </SectionCard>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-background p-4 sm:p-6">
                <span className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                  Result
                </span>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <p className="font-display text-[var(--text-3xl)] tracking-tight">~92%</p>
                    <p className="text-[var(--text-xs)] sm:text-sm text-muted-foreground">
                      of after-hours messages answered without a human
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[var(--text-3xl)] tracking-tight">0</p>
                    <p className="text-[var(--text-xs)] sm:text-sm text-muted-foreground">
                      missed bookings in the first month
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <Link href="/ai-reliability-audit" className={primaryBtnClasses}>
                  Start with the free audit →
                </Link>
              </div>
            </div>
          </SectionCard>
        </section>

        <section id="faq" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="Frequently asked questions" id="faq" />
          <div className="grid gap-3 sm:gap-4">
            {faq.map((f) => (
              <SectionCard key={f.q} padding="4">
                <h3 className="font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">{f.q}</h3>
                <p className="mt-1 sm:mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </SectionCard>
            ))}
          </div>
        </section>

        <section id="guarantee" className="pb-10 sm:pb-14">
          <SectionCard padding="6" className="border-primary/30 bg-primary/5">
            <h2 className="font-display text-[var(--text-lg)] sm:text-[var(--text-xl)] tracking-tight">
              30-day defect window
            </h2>
            <p className="mt-2 text-[var(--text-xs)] sm:text-[var(--text-base)] leading-relaxed text-muted-foreground">
              If something breaks, I fix it. No change orders for defects. The audit is free, the build is fixed-price, and the handover is yours to rerun.
            </p>
          </SectionCard>
        </section>

        <section id="industries" className="pb-10 sm:pb-14">
          <SectionHeadingLocal title="Industries I serve" id="industries" />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {industries.map((i) => (
              <Link
                key={i.name}
                href={i.href}
                className="rounded-md border border-border bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-[var(--text-xs)] sm:text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </section>

        <section id="dont" className="pb-10 sm:pb-14">
          <SectionCard padding="4">
            <SectionHeadingLocal title="What I don't do" />
            <ul className="mt-2 sm:mt-2.5 list-disc list-inside space-y-1 sm:space-y-1.5 pl-2 sm:pl-3 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
              {dontDo.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <LeadCapture />

        <section className="pb-16 sm:pb-20">
          <SectionHeadingLocal title="Start with the audit, not with a sales call." />
          <p className="max-w-none sm:max-w-xl text-[var(--text-xs)] sm:text-[var(--text-base)] leading-relaxed text-muted-foreground">
            If your AI system is answering before it's measured, it's answering from a guess.
            The free reliability audit is {AUDIT_OFFER.duration}, scored against your own documents,
            and you keep the report either way — including the line that says you don't need
            AI here yet.
          </p>
          <div className="mt-5 sm:mt-6">
            <Link href="/contact?for=audit" className={primaryBtnClasses}>
              Start the audit →
            </Link>
          </div>
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-2xl border border-border bg-card p-3 sm:p-4">
            <div className="min-w-0">
              <p className="font-display text-[var(--text-sm)] sm:text-[var(--text-base)] tracking-tight">
                Djaouad Frih<span className="text-primary">.</span>
              </p>
              <a
                href="mailto:contact@djaouad.is-a.dev"
                className="font-mono text-[var(--text-xs)] text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                contact@djaouad.is-a.dev
              </a>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-md border border-border bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 font-mono text-[var(--text-xs)] transition-colors hover:border-primary hover:text-primary"
              >
                {s.icon}
                {s.name}
              </a>
            ))}
          </div>
        </section>
      </SectionWrapper>
    </main>
  );
}
