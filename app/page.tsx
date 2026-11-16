import type { Metadata } from "next";
import Link from "next/link";
import { LeadCapture } from "@/components/lead-capture";

import { AUDIT_OFFER, PRICE_ANCHOR } from "@/lib/positioning";

export const metadata: Metadata = {
  title:
    "Djaouad Frih — Measured AI Systems, Fixed Price",
  description:
    "I build retrieval layers and agent loops that run on your existing Postgres estate and monolith, scored against your own documents before a single prompt is written. Fixed price. Full builds start at $3,500.",
  alternates: { canonical: "https://djaouad.is-a.dev" },
};

const primaryBtn =
  "rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
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
    desc: "Answers questions, books appointments & captures leads from your own docs. 232-query retrieval benchmark.",
    url: "https://chat.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/ai-virtual-receptionist",
    label: "Built and operated by me",
    limit: "Single-tenant, single-language. FPR 76.9% at the F1-optimal threshold.",
  },
  {
    name: "Support Agent",
    desc: "Handles support, creates tickets & escalates to humans — schema-validated tool calls.",
    url: "https://customer.djaouad.is-a.dev",
    repo: "https://github.com/djoudad292/ai-customer-support-agent",
    label: "Built and operated by me",
    limit: "No published retrieval benchmark. 2 committed test files.",
  },
];

const credibility = [
  { label: "AI support agent — live result", value: "~92% of support questions handled by AI, ~25 hours saved per week, 0 missed bookings" },
  { label: "AI virtual receptionist — live result", value: "24/7 lead capture, booking, and human handoff — running in production since August 2026" },
  { label: "Retrieval benchmark", value: "93.4% F1 on a 232-query goldset, every failing query published", href: "/benchmark" },
];

const dontDo = [
  "I'm not a full-service digital agency.",
  "I don't take work where I'm the cheapest credible option.",
  "I don't start engagements without written scope and acceptance criteria.",
  "I'll tell you if your project is a SaaS subscription rather than a build.",
];

const social = [
  { name: "GitHub", href: "https://github.com/djoudad292" },
  { name: "LinkedIn", href: "https://linkedin.com/in/djaouad-frih-16ab7323a" },
];

function SectionHeading({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="mb-8 flex items-center gap-4">
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-20 pb-16">
          <div className="max-w-lg">
            <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
              MEASURED AI SYSTEMS · FIXED PRICE · NO HOURLY SURPRISES
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
              Your AI support agent should be measured before you trust it. I build it that way.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I build retrieval layers and agent loops that run on your existing Postgres estate
              and monolith, scored against your own documents before a single prompt is written.
              Fixed price. {PRICE_ANCHOR}.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link href="/ai-reliability-audit" className={primaryBtn}>
                Get the free reliability audit →
              </Link>
              <p className="font-mono text-xs text-muted-foreground">
                One week, target. Scored against your documents. No call required first.
                Failures are published alongside the scores.
              </p>
            </div>

            <p className="mt-8 font-mono text-xs text-muted-foreground">Remote · serves EU and US-East clients during overlapping business hours.</p>
          </div>
        </section>

        <section id="problems" className="pb-16">
          <SectionHeading title="The problems I solve" />
          <div className="grid gap-5 sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base leading-snug tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="credibility" className="pb-16">
          <SectionHeading title="What I can show you" />
          <dl className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
            {credibility.map((c) => (
              <div key={c.label} className="grid gap-1">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </dt>
                <dd className="text-sm text-foreground">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="text-primary hover:underline"
                    >
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

        <section id="work" className="pb-16">
          <SectionHeading title="Selected work" />
          <p className="mb-6 font-mono text-xs text-muted-foreground">
            Systems I built and operate. Each one states what it cannot do, because a page that
            only lists strengths is a page you have learned to distrust.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {work.map((w) => (
              <div
                key={w.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {w.label}
                </span>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-base tracking-tight group-hover:text-primary"
                >
                  {w.name}
                </a>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{w.desc}</p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground">{w.limit}</p>
                <a
                  href={w.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary"
                >
                  code
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="dont" className="pb-16">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <SectionHeading title="What I don't do" />
            <ul className="mt-2 list-disc list-inside space-y-2 pl-1 text-sm leading-relaxed text-muted-foreground">
              {dontDo.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>

        <LeadCapture />

        <section className="pb-24">
          <SectionHeading title="Start with the audit, not with a sales call." />
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            If your AI system is answering before it's measured, it's answering from a guess.
            The free reliability audit is {AUDIT_OFFER.duration}, scored against your own documents,
            and you keep the report either way — including the line that says you don't need
            AI here yet.
          </p>
          <div className="mt-6">
            <Link href="/contact?for=audit" className={primaryBtn}>
              Start the audit →
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
            <div className="min-w-0">
              <p className="font-display text-lg tracking-tight">
                Djaouad Frih<span className="text-primary">.</span>
              </p>
              <a
                href="mailto:contact@djaouad.is-a.dev"
                className="font-mono text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                contact@djaouad.is-a.dev
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary"
              >
                {s.name}
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
