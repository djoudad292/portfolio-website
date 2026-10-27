import type { Metadata } from "next";
import Link from "next/link";

import { AUDIT_OFFER, PRICE_ANCHOR, PRICE_ANCHOR_NOTE, AGENCY_ANCHOR, AGENCY_ANCHOR_META } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Pricing · Scope-to-Price Map, Not an Estimate | Djaouad Frih",
  description:
    "Three published tiers with the boundary of each one written down: free AI reliability audit, scoped build from $3,500, and white-label delivery capacity from $8,000 per project. Fixed price, published exclusions.",
  alternates: { canonical: "https://djaouad.is-a.dev/pricing" },
  openGraph: {
    title: "Pricing · Djaouad Frih",
    description:
      "A fixed price only means something if the edge of it is written down. Three tiers, published exclusions, and a list of what this isn't for.",
    url: "https://djaouad.is-a.dev/pricing",
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

const tiers = [
  {
    label: "Entry",
    title: "AI Reliability Audit",
    price: AUDIT_OFFER.price,
    meta: AUDIT_OFFER.duration,
    who: "Teams shipping AI features who need an independent check before launch.",
    bullets: [
      "Precision, recall and F1 against a goldset built from your corpus",
      "Refusal rate on out-of-scope questions",
      "Citation correctness",
      "p50 / p95 latency and token cost",
      "Server-side authorization review",
      "A written report listing the failures",
    ],
    not: AUDIT_OFFER.terms,
    cta: "Request the audit",
    href: "/contact?for=audit",
    featured: false,
  },
  {
    label: "Core",
    title: "Scoped Build",
    price: PRICE_ANCHOR,
    meta: "3–6 weeks · milestone-based",
    who: "A deadline and a scope, with a real deliverable at the end of it.",
    bullets: [
      "Retrieval and document intelligence: extraction, sentence-aware chunking, embeddings, vector search with an HNSW index, answers with sources attached",
      "Tool-calling agents as LangGraph state machines — conditional routing, validated tool arguments, bounded loops",
      "Human handoff that carries the whole conversation, not a summary of it",
      "A committed test suite and a benchmark run against a goldset before handover",
      "Token and latency reporting wired in from the first milestone",
      "Source, deployment, documentation and a handover call",
    ],
    not: PRICE_ANCHOR_NOTE,
    cta: "Scope a build",
    href: "/contact?for=build",
    featured: true,
  },
  {
    label: "Primary",
    title: "White-Label Delivery Capacity",
    price: AGENCY_ANCHOR,
    meta: AGENCY_ANCHOR_META,
    who: "Software agencies and product studios with signed AI work and no one to deliver it.",
    bullets: [
      "You keep the client, the relationship and the margin",
      "I own the build end to end, under your brand, in your repo or mine",
      "Your name is on the proposal; my name is not in it",
      "Weekly delivery at your cadence",
      "Retrieval benchmarked against a goldset you approve",
      "Source and infrastructure transferred to your accounts",
    ],
    not: "Not a sales call, and not a seat on your client-facing calls.",
    cta: "Request a capacity conversation",
    href: "/contact?for=agency",
    featured: false,
  },
];

const exclusions = [
  "Model and cloud usage fees — billed by the provider, not by me",
  "Third-party licences (vector stores, transcription, telephony, payment providers)",
  "Ongoing maintenance after the 30-day defect window",
  "Work outside the agreed scope — quoted as a change order, never absorbed silently",
  "A platform subscription, a per-seat charge, or any dependency on me after handover",
];

const notFor = [
  "You want the cheapest credible option. There are cheaper ones; they will cost you more later.",
  "You want a quote before anyone looks at your data. Scoping without looking is guessing, and you'd be paying for the guess.",
  "You want an accuracy figure guaranteed in advance. I will not commit to a number I haven't measured on your corpus.",
  "You have no deadline and no scope yet. Come back when you do — I'd rather tell you that now than spend your time.",
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            PRICING
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            A fixed price only means something if the edge of it is written down.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Three tiers, one entry offer that costs you nothing, and a published list of
            what each one doesn't include. No hourly billing, no estimate that becomes a
            change order in week three.
          </p>
        </section>

        <section className="pb-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.title}
                className={`flex flex-col rounded-2xl border p-6 ${
                  t.featured
                    ? "border-primary/60 bg-card shadow-[0_0_40px_-12px] shadow-primary/30"
                    : "border-border bg-card/60"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {t.label}
                </p>
                <h2 className="mt-2 font-display text-xl tracking-tight">{t.title}</h2>
                <p className="mt-3 font-display text-2xl tracking-tight">{t.price}</p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground">{t.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.who}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="text-primary">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  {t.not}
                </p>
                <Link href={t.href} className={primaryBtn + " mt-5 w-full text-center"}>
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="Not included, published rather than discovered" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-2">
              {exclusions.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="Why it costs what it costs" />
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            The variable is not how long I take — it's what breaks if I get it wrong. Retrieval
            that quietly returns the wrong chunk, a tool call that executes an unvalidated
            argument, a handoff that arrives without the conversation attached: each one is
            cheap to build and expensive to discover in production, which is why the
            measurement work is inside the price rather than bolted on afterwards.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            A cheaper quote can still carry a higher total cost, and a higher fee does not
            prove better results. Compare the same scope, the same acceptance criteria and the
            same handover. If a tier above doesn't fit, the one below will be quoted honestly
            rather than padded up to reach it.
          </p>
        </section>

        <section className="pb-16">
          <SectionHeading title="This is not for you if…" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-2">
              {notFor.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">×</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              I'd rather lose the sale here than three weeks in.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">
              Start with the audit. It costs nothing and it settles most of it.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {AUDIT_OFFER.duration} on your own documents, a written report you keep either way,
              and a fixed price afterwards if you want to go further. If the answer is that you
              don't need a build, that's what the report says.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?for=audit" className={primaryBtn}>
                Request the audit
              </Link>
              <Link href="/for-agencies" className={secondaryBtn}>
                White-label delivery
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}