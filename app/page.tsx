import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  AUDIT_OFFER,
  PRICE_ANCHOR,
  PRICE_ANCHOR_NOTE,
  TIMEZONE_CLAIM,
} from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Djaouad Frih — AI Reliability, Retrieval & Agents · White-Label Delivery",
  description:
    "Independent AI engineer. I build retrieval and agent systems for software agencies and mid-market teams — benchmarked against your goldset, with an eval suite and a handover doc on every build. White-label delivery, fixed price.",
  alternates: { canonical: "https://djaouad.is-a.dev" },
};

const primaryBtn =
  "rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const secondaryBtn =
  "rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary";
const chip =
  "rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary";

const problems = [
  {
    t: "Your chatbot doesn't know your business.",
    b: "A demo answers from a prompt. Production answers from your data — with the source attached, a measured refusal rate, and a benchmark showing where it fails.",
  },
  {
    t: "You can't hire the capability.",
    b: "AI skills are now the single hardest role to fill globally — 72% of 39,000 employers across 41 countries report difficulty, and AI skills overtook engineering and IT. (ManpowerGroup, 26 Feb 2026)",
  },
  {
    t: "Your pilot works in the demo and breaks on real traffic.",
    b: "Real systems need tool-calling loops that terminate, arguments validated before they execute, retrieval measured against a goldset, and a human escalation path with the conversation attached.",
  },
  {
    t: "You can't tell whether your vendor's AI actually works.",
    b: "Ask for the eval suite, the refusal rate, the latency distribution and the failure list. If a supplier can't produce them, they haven't measured their system.",
  },
];

const offers = [
  {
    label: "Free entry offer",
    title: "AI Reliability Audit",
    price: AUDIT_OFFER.price,
    who: "Teams shipping AI features who need an independent check before launch.",
    bullets: [
      "Precision/recall/F1 against a goldset built from your corpus",
      "Refusal rate on out-of-scope questions",
      "Citation correctness",
      "p50 / p95 latency and token cost",
      "Server-side authorization review",
    ],
    not: AUDIT_OFFER.terms,
    cta: "Run the audit →",
    href: "/ai-reliability-audit",
  },
  {
    label: "Scoped build",
    title: "Scoped Build",
    price: PRICE_ANCHOR,
    who: "Mid-market teams with a real AI feature ready to ship.",
    bullets: [
      "Production-ready code in your repo, with documentation",
      "Retrieval benchmarked against a goldset you approve",
      "Source handed over with a handover call",
      "Severity-tagged eval dataset gates each deploy",
      "Fixed price, scoped change orders only",
    ],
    not: PRICE_ANCHOR_NOTE,
    cta: "Scope a build →",
    href: "/contact?for=build",
  },
  {
    label: "Primary offer",
    title: "White-Label Delivery Capacity",
    price: "Fixed price, after the free audit",
    who: "Software and product agencies with signed AI/RAG work and no one to deliver it.",
    bullets: [
      "Production-ready code in your repo or mine, with documentation",
      "Retrieval benchmarked against a goldset you approve",
      "Source handed over with a handover call",
      "Weeklies at your cadence, not mine",
      "Fixed price, milestone-based",
    ],
    not: "Not a SaaS subscription. Not a template.",
    cta: "Bring capacity to your agency →",
    href: "/for-agencies",
  },
];

const work = [
  {
    name: "WhatsApp CRM / ERP",
    desc: "Agent reads WhatsApp, checks real stock, creates orders — behind human approval gates with an audit trail.",
    url: "https://crm.djaouad.is-a.dev/try",
    img: "/shots/kit-crm-erp.png",
    repo: "https://github.com/djoudad292/ai-whatsapp-crm-erp",
    label: "Production · my own use",
    limit: "No customer. No published agent benchmark — 2 committed test files.",
  },
  {
    name: "AI Receptionist",
    desc: "Answers questions, books appointments & captures leads from your own docs. 232-query retrieval benchmark.",
    url: "https://chat.djaouad.is-a.dev",
    img: "/shots/kit-receptionist.png",
    repo: "https://github.com/djoudad292/ai-virtual-receptionist",
    apk: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk",
    label: "Production · my own use",
    limit: "Single-tenant, single-language. FPR 76.9% at the F1-optimal threshold.",
  },
  {
    name: "PDF Workspace",
    desc: "Ask your contracts, invoices & PDFs. Answers with sources, and the retrieval mode that produced each one.",
    url: "https://docs.djaouad.is-a.dev",
    img: "/shots/kit-pdf-workspace.png",
    repo: "https://github.com/djoudad292/smart-pdf-workspace",
    apk: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk",
    label: "Production · my own use",
    limit: "Text layer only, no OCR. No published retrieval benchmark.",
  },
  {
    name: "Support Agent",
    desc: "Handles support, creates tickets & escalates to humans — schema-validated tool calls.",
    url: "https://customer.djaouad.is-a.dev",
    img: "/shots/kit-support-agent.png",
    repo: "https://github.com/djoudad292/ai-customer-support-agent",
    apk: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk",
    label: "Production · my own use",
    limit: "No published retrieval benchmark. 2 committed test files.",
  },
];

const credibility = [
  { label: "Public repositories", value: "~214 commits across three main repositories" },
  { label: "CI on every push", value: "The failing runs are the interesting ones." },
  { label: "Committed test suites", value: "13 test files in the receptionist backend, 2 in the support agent backend" },
  { label: "Versioned eval datasets", value: "69-case conversation dataset, 97 turn assertions, 15 categories, severity tags that gate a deploy" },
  { label: "Retrieval benchmark", value: "the retrieval benchmark", href: "/benchmark" },
  { label: "Codebase", value: "~24,000 lines of TypeScript" },
];

const howIBuild = [
  "Measure first. A retrieval + authorization audit runs on your documents and the scores are published before any code is written.",
  "Scope with acceptance criteria. We write the spec, the goldset, and the deploy-gating severity tags together.",
  "Build the loop. Retrieval + agent + application, tested against the goldset on every push.",
  "Evaluate before ship. Precision/recall/F1, refusal rate, citation correctness, and latency/token cost are published with the build.",
  "Hand over. Source, infra credentials, and a handover doc land in your repo; your team reruns the benchmark.",
  "Defend the window. A scoped defect window, change orders only, no surprises.",
];

const processSteps = [
  { step: "01", title: "Reliability audit", body: "Five working days, scored against your documents. No call required first." },
  { step: "02", title: "Fixed-price scope", body: "The audit becomes a written spec with acceptance criteria and a deploy-gating eval." },
  { step: "03", title: "Build at your cadence", body: "Weekly handoffs. Source in your repo. The benchmark is yours to rerun." },
  { step: "04", title: "Handover + defect window", body: "Docs, credentials, and 30 days to find defects." },
];

const clients = [
  {
    name: "Bilal Kadri",
    place: "United Kingdom",
    quote:
      "Great people, very good service. Made my website within 2 weeks in such a professional manner, very good communication skills — would highly recommend!",
    href: "https://www.facebook.com/share/19Qx9MsT6b/",
  },
  {
    name: "Muhhamet Novruzov",
    place: "Cyprus",
    quote:
      "Huge shout-out to Djaouad! Complete, fully functional full-stack build delivered right on schedule. That's how it's done. Star developer right here.",
    href: "https://www.facebook.com/share/1JTbdKi3oe/",
  },
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
  { name: "MCP server", href: "https://mcp.djaouad.is-a.dev/mcp" },
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
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            AI ENGINEERING · WHITE-LABEL DELIVERY
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            Your AI system should be measured before you trust it. I build it that way.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Djaouad Frih — independent AI engineer. I build retrieval and agent systems
            for software agencies and mid-market teams, with a benchmark, an eval suite
            and a handover doc attached to every build. Fixed price. {PRICE_ANCHOR}.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/ai-reliability-audit" className={primaryBtn}>
              Get the free 5-day audit →
            </Link>
            <p className="font-mono text-xs text-muted-foreground">
              Five working days. Scored against your documents. No call required first.
            </p>

            <Link href="/benchmark" className={secondaryBtn}>
              See a benchmark you can rerun →
            </Link>
            <p className="font-mono text-xs text-muted-foreground">
              The retrieval eval, the goldset, and the run command are public.
            </p>
          </div>

          <p className="mt-8 font-mono text-xs text-muted-foreground">{TIMEZONE_CLAIM}</p>
        </section>

        <section className="pb-16">
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            I'm Djaouad, an independent AI engineer. I build the retrieval layer and the
            agent loop that sits on top of it, plus the production application around the
            two. The thread through every build is measurement: a benchmark before the
            first prompt is written, an eval suite that ships in CI, and a handover that
            leaves you able to rerun both.
          </p>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            I work fixed-price on scoped work — the kind where the spec is written down and
            the refusal rate is measured against your own documents. If the honest answer is
            that an existing tool or a subscription solves your problem, I'll tell you that
            first.
          </p>
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

        <section id="offers" className="pb-16">
          <SectionHeading title="Three offers" />
          <div className="grid gap-5 sm:grid-cols-3">
            {offers.map((o, i) => {
              const emphasised = i === 1;
              return (
                <div
                  key={o.title}
                  className={
                    "flex flex-col rounded-2xl border p-6 " +
                    (emphasised
                      ? "border-primary/60 bg-card shadow-[0_0_40px_-12px] shadow-primary/30"
                      : "border-border bg-card")
                  }
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {o.label}
                  </span>
                  <h3 className="mt-2 font-display text-xl tracking-tight">{o.title}</h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">{o.price}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{o.who}</p>
                  <ul className="mt-4 list-disc list-inside space-y-1.5 pl-1 text-sm">
                    {o.bullets.map((b) => (
                      <li key={b} className="leading-snug text-muted-foreground">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">{o.not}</p>
                  <Link href={o.href} className={secondaryBtn + " mt-auto"}>
                    {o.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section id="work" className="pb-16">
          <SectionHeading title="Selected work" />
          <p className="mb-6 font-mono text-xs text-muted-foreground">
            Every item below is my own project. Two run on my own infrastructure. None of
            them is client work — and I'm not presenting them as client work.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {work.map((w) => (
              <div
                key={w.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary"
              >
                <span className="absolute top-3 left-3 rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px]">
                  {w.label}
                </span>
                <a href={w.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={w.img}
                    alt={w.name}
                    className="aspect-video w-full object-cover object-top"
                  />
                </a>
                <div className="p-5 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base tracking-tight group-hover:text-primary"
                    >
                      {w.name}
                    </a>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{w.desc}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{w.limit}</p>
                  <div className="mt-3 flex gap-2 font-mono text-[10px]">
                    <a
                      href={w.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={chip}
                    >
                      code
                    </a>
                    {w.apk && (
                      <a
                        href={w.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={chip}
                      >
                        android ↓
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl tracking-tight">
                More work &amp; the benchmark
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                More of my projects and the public retrieval benchmark.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/work" className={secondaryBtn}>
                  View work →
                </Link>
                <Link href="/benchmark" className={chip}>
                  benchmark →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="credibility" className="pb-16">
          <SectionHeading title="The parts you can open" />
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
          <ol className="mt-10 list-decimal list-outside space-y-3 pl-4 text-sm leading-relaxed text-muted-foreground">
            {howIBuild.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>

        <section id="process" className="pb-16">
          <SectionHeading title="How an engagement runs" />
          <ol className="grid gap-6 sm:grid-cols-2">
            {processSteps.map((p) => (
              <li key={p.step} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {p.step}
                </span>
                <h3 className="mt-2 font-display text-xl tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-mono text-xs text-muted-foreground">
            Audit five working days · scoped build 3–6 weeks · production system 6–12 weeks.
          </p>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">
            Every inquiry gets a reply within one business day — including "this isn't for
            you".
          </p>
        </section>

        <section id="clients" className="pb-16">
          <SectionHeading title="Two clients, two countries, and what they actually hired me for" />
          <p className="mb-6 font-mono text-xs text-muted-foreground">
            Both were website builds, not AI systems. I'm not going to present them as
            something they weren't.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {clients.map((c) => (
              <blockquote key={c.href} className="rounded-2xl border border-border bg-card p-6">
                <p className="leading-relaxed text-foreground">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-primary"
                  >
                    {c.name} · {c.place}
                  </a>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            What they establish is the thing no screenshot on this page can: someone working
            remotely from Algeria delivered on schedule, twice, for real businesses in two
            countries.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Happy to arrange a reference call — ask on the call and I'll connect you directly.
          </p>
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

        <section className="pb-24">
          <SectionHeading title="Start with the audit, not with a sales call." />
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            If your AI system is answering before it's measured, it's answering from a guess.
            The free reliability audit is five working days, scored against your own documents,
            and you keep the report either way — including the line that says you don't need
            AI here yet.
          </p>
          <div className="mt-6">
            <Link href="/contact?for=audit" className={primaryBtn}>
              Start the audit →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={chip}
              >
                {s.name}
              </a>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            contact@djaouad.is-a.dev
          </p>
        </section>

      </div>
    </main>
  );
}
