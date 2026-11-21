import type { Metadata } from "next";

import { AUDIT_OFFER, PRICE_ANCHOR, PRICE_ANCHOR_NOTE, AGENCY_ANCHOR, AGENCY_ANCHOR_META } from "@/lib/positioning";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionCard } from "@/components/section-card";
import { PrimaryButton, SecondaryButton } from "@/components/page-buttons";
import { SectionHeading } from "@/components/section-heading";

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
    <main className="relative min-h-screen text-foreground">
      <SectionWrapper>
        <section className="pt-28 pb-16">
          <span className="inline-block rounded-md border border-border bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[var(--text-xs)] uppercase tracking-wider">
            PRICING
          </span>

          <h1 className="mt-6 font-display text-[var(--text-4xl)] sm:text-[var(--text-5xl)] leading-[1.04] tracking-tight">
            A fixed price only means something if the edge of it is written down.
          </h1>

          <p className="mt-6 max-w-xl text-[var(--text-lg)] leading-relaxed text-muted-foreground">
            Three tiers, one entry offer that costs you nothing, and a published list of
            what each one doesn't include. No hourly billing, no estimate that becomes a
            change order in week three.
          </p>
        </section>

        <section className="pb-16">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <SectionCard
                key={t.title}
                padding="6"
                className={`flex flex-col ${
                  t.featured
                    ? "border-primary/60 shadow-[0_0_40px_-12px] shadow-primary/30"
                    : "border-border bg-card/60"
                }`}
              >
                <p className="font-mono text-[var(--text-xs)] uppercase tracking-wider text-muted-foreground">
                  {t.label}
                </p>
                <h2 className="mt-2 font-display text-[var(--text-xl)] tracking-tight">{t.title}</h2>
                <p className="mt-3 font-display text-[var(--text-3xl)] tracking-tight">{t.price}</p>
                <p className="mt-1 font-mono text-[var(--text-xs)] text-muted-foreground">{t.meta}</p>
                <p className="mt-4 text-[var(--text-sm)] leading-relaxed text-muted-foreground">{t.who}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="text-primary">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border pt-4 text-[var(--text-xs)] text-muted-foreground">
                  {t.not}
                </p>
                <PrimaryButton href={t.href}>{t.cta}</PrimaryButton>
              </SectionCard>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="Not included, published rather than discovered" size="3xl" />
          <SectionCard padding="6">
            <ul className="space-y-2">
              {exclusions.map((item) => (
                <li key={item} className="flex gap-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <section className="pb-16">
          <SectionHeading title="Why it costs what it costs" size="3xl" />
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
          <SectionHeading title="This is not for you if…" size="3xl" />
          <SectionCard padding="6">
            <ul className="space-y-2">
              {notFor.map((item) => (
                <li key={item} className="flex gap-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">×</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[var(--text-xs)] text-muted-foreground">
              I'd rather lose the sale here than three weeks in.
            </p>
          </SectionCard>
        </section>

        <section className="pb-24">
          <SectionCard padding="8">
            <h2 className="font-display text-[var(--text-3xl)] tracking-tight">
              Start with the audit. It costs nothing and it settles most of it.
            </h2>
            <p className="mt-2 max-w-lg text-[var(--text-xs)] sm:text-[var(--text-sm)] leading-relaxed text-muted-foreground">
              {AUDIT_OFFER.duration} on your own documents, a written report you keep either way,
              and a fixed price afterwards if you want to go further. If the answer is that you
              don't need a build, that's what the report says.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <PrimaryButton href="/contact?for=audit">Request the audit</PrimaryButton>
              <SecondaryButton href="/for-agencies">White-label delivery</SecondaryButton>
            </div>
          </SectionCard>
        </section>
      </SectionWrapper>
    </main>
  );
}
