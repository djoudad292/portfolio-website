import type { Metadata } from "next";
import Link from "next/link";

import { TIMEZONE_CLAIM, AGENCY_ANCHOR } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Brownfield AI Integration for Agencies · Legacy Estates, Measured | Djaouad Frih",
  description:
    "I make RAG and agents work on the Postgres estate and monolith your client already runs — with a measured recall floor and the failures published. White-label delivery for agencies, fixed price, source handed over.",
  alternates: { canonical: "https://djaouad.is-a.dev/for-agencies" },
  openGraph: {
    title: "Brownfield AI Integration · Djaouad Frih",
    description:
      "The model is 20% of the cost. The integration is the other 80%. You keep the client and the margin; I never appear in your proposal.",
    url: "https://djaouad.is-a.dev/for-agencies",
    type: "website",
  },
};

const primaryBtn =
  "rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const secondaryBtn =
  "rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary";

function SectionHeading({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="mb-8 flex items-center gap-4">
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

const facts = [
  { n: "53%", d: "of organisations cite legacy integration complexity as their top barrier to scaling AI." },
  { n: "9%", d: "of leaders say they fully understand their own applications' dependencies." },
  { n: "81%", d: "say technical debt is already constraining their AI success." },
];

const steps = [
  {
    n: "01",
    t: "NDA before anything moves",
    b: "Mutual, signed before the first substantive call. If your client requires one, I use yours.",
  },
  {
    n: "02",
    t: "I look at the estate before I quote",
    b: "The schema, the data hygiene, the permission model, what already exists. A price quoted without looking at the system is a guess, and you'd be paying for the guess.",
  },
  {
    n: "03",
    t: "Fixed price, and the number comes first",
    b: "One figure, tied to a measurable outcome — a retrieval recall floor, or a token-cost reduction reconciled to the provider invoice. Not an hourly meter.",
  },
  {
    n: "04",
    t: "We build into what exists",
    b: "Your client's Postgres, their ORM, their auth. No rebuild of what works, no new platform subscription, no parallel system nobody adopts.",
  },
  {
    n: "05",
    t: "Measured before handover",
    b: "Retrieval scored against a goldset built from their own corpus. Refusal rate on out-of-scope questions. p50/p95 latency and cost per conversation.",
  },
  {
    n: "06",
    t: "Source and infrastructure transferred to your accounts",
    b: "Your repo or mine, your cloud accounts, your keys. Not held in mine and rented back.",
  },
];

const youGet = [
  "Production code with documentation — not a zip file and a wish",
  "A committed goldset built from your client's documents, in your repository, so you can rerun it",
  "A measured recall floor and a published refusal rate, which is what your client's risk review will ask for",
  "Severity-tagged eval data that gates deploys, so the AI cannot silently regress in production",
  "A handover call with your team, recorded",
  "A 30-day defect window",
];

const idont = [
  "I don't appear in your proposal. Your name is on it.",
  "I don't talk to your client unless you ask me to be in the room.",
  "I don't hold your source, your infrastructure accounts or your keys after handover.",
  "I don't start engagements without written scope and acceptance criteria.",
  "I don't quote an hourly meter when the work has a measurable outcome.",
];

const notFor = [
  "You want a greenfield demo on a clean schema. That's a smaller job than I'm priced for, and there are cheaper people who do it well.",
  "You want me to speak to your client directly. This is a delivery relationship, not an agency-of-record one.",
  "You need it live in under two weeks. That's a capacity problem, not a scoping problem, and I'd rather tell you now.",
  "The budget is under $8,000. At that level you want a scoped build on its own, not a subcontracting relationship.",
];

export default function ForAgenciesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            WHITE-LABEL · BROWNFIELD AI
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            I make RAG and agents work on the systems your client already has.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The model is maybe 20% of the cost. The integration is the other 80% — and
            that is the part that goes wrong. I build retrieval and agents inside your
            client&apos;s existing Postgres estate and monolith, with a measured recall
            floor and the failures published. White-label, fixed price, source handed
            over. I never appear in your proposal.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?for=agency" className={primaryBtn}>
              Request a capacity conversation
            </Link>
            <Link href="/benchmark" className={secondaryBtn}>
              See a benchmark you can rerun
            </Link>
          </div>

          <p className="mt-8 font-mono text-xs text-muted-foreground">{TIMEZONE_CLAIM}</p>
        </section>

        <section className="pb-16">
          <SectionHeading title="Why brownfield, and not greenfield" />
          <div className="grid gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.n} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display text-3xl tracking-tight text-primary">{f.n}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            HFS/Genpact Data Modernization and AI 2026 (n=48) · Kyndryl Enterprise IT
            Modernization Trends, October 2026 (n=2,000) · CAST via IBM brownfield
            modernization study, February 2026.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Almost nobody can hire for this. The person who understands both the ML side
            and the legacy estate well enough to design the integration barely exists as a
            defined job — which is exactly why an agency subcontracts it.
          </p>
        </section>

        <section className="pb-16">
          <SectionHeading title="What I actually do" />
          <div className="space-y-5 border-l-2 border-border pl-5">
            <div>
              <h3 className="font-display text-lg tracking-tight">Retrieval against your client's own corpus</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Extraction, sentence-aware chunking, embeddings, vector search with an HNSW
                index, answers carrying their source. Built against their schema and their
                permission model, not a clean-room demo database.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg tracking-tight">Tool-calling agents that terminate</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                LangGraph state machines: conditional routing, bounded loops, tool arguments
                validated against a schema before execution, and human handoff that carries
                the whole conversation rather than a summary of it.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg tracking-tight">Writes behind approval gates, with an audit trail</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                An agent that creates a record is a different risk class from one that
                answers a question. Every write path goes behind a human approval queue and
                lands in an audit log. This is the part most demos skip and most
                production incidents are about.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg tracking-tight">Cost and latency you can defend</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Token usage and p50/p95 latency recorded from the first milestone, not
                retrofitted. Where the engagement is cost-shaped, the fee can be indexed to a
                verified reduction reconciled against the provider invoice — with a floor, so
                the downside is bounded.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="How an engagement runs" />
          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-xs text-primary">{s.n}</p>
                <h3 className="mt-2 font-display text-lg tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="What you get, and what I don't do" />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg tracking-tight">What you get</h3>
              <ul className="mt-4 space-y-2">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg tracking-tight">What I don't do</h3>
              <ul className="mt-4 space-y-2">
                {idont.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="Proof you can check before you reply" />
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            You are going to verify this, because you are the one who gets blamed if it is
            wrong. So here is the part most suppliers cannot show you.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                l: "The benchmark",
                d: "232 labelled queries against a 45-chunk knowledge base. Full threshold sweep, committed goldset, one command re-runs it.",
                h: "/benchmark",
              },
              {
                l: "The unflattering number",
                d: "At the F1-optimal threshold the vector path scores 93.4% F1 and a 76.9% false-positive rate. It answers 20 of 26 out-of-scope queries. That number is on the page on purpose.",
                h: "/benchmark",
              },
              {
                l: "A side-effecting agent",
                d: "Reads WhatsApp, checks real stock, creates orders — behind human approval gates with an audit trail. Live, no signup.",
                h: "https://crm.djaouad.is-a.dev/try",
              },
              {
                l: "The systems themselves",
                d: "Five, each labelled for what it actually is, with limitations stated rather than buried.",
                h: "/work",
              },
            ].map((item) =>
              item.h.startsWith("http") ? (
                <a
                  key={item.l}
                  href={item.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <p className="font-display text-base tracking-tight">{item.l}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </a>
              ) : (
                <Link
                  key={item.l}
                  href={item.h}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <p className="font-display text-base tracking-tight">{item.l}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </Link>
              ),
            )}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Two named client references exist. Both were website builds, not AI systems, and
            the homepage says so rather than dressing them up. What they establish is remote
            delivery — on schedule, twice, for real businesses in the UK and Cyprus.
          </p>
        </section>

        <section className="pb-16">
          <SectionHeading title="Rate" />
          <div className="rounded-2xl border border-primary/60 bg-card p-6">
            <p className="font-display text-3xl tracking-tight">{AGENCY_ANCHOR}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Deposit under 50%, milestone payments, source and infrastructure
              transferred to your accounts at handover.
            </p>
            <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              On a cost-shaped engagement I will index the fee to a verified reduction and
              reconcile it against your provider invoice, with a floor so the downside is
              bounded. On a quality-shaped engagement the price is fixed against a recall
              floor we agree up front. In both cases the number is the deliverable, not the
              hours.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="This is not for you if…" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-3">
              {notFor.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">×</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              Published rather than discovered. A fixed price only means anything if the edge
              of it is written down.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">
              Send me a client with a legacy estate and an AI feature that isn&apos;t behaving.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              I&apos;ll tell you in writing whether it&apos;s fixable, and what the number is.
              If the answer is that you don&apos;t need a build, you&apos;ll get that instead —
              and you keep the report either way.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?for=agency" className={primaryBtn}>
                Request a capacity conversation
              </Link>
              <Link href="/ai-reliability-audit" className={secondaryBtn}>
                Start with the free audit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}