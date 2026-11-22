import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'

import {
  AGENCY_ANCHOR,
  AGENCY_ANCHOR_META,
  AUDIT_OFFER,
  PRICE_ANCHOR,
  PRICE_ANCHOR_NOTE,
} from '@/lib/positioning'
import { Section } from '@/components/section'
import { SectionCard } from '@/components/section-card'
import { SectionHeading } from '@/components/section-heading'
import { ButtonLink } from '@/components/button'
import { Eyebrow } from '@/components/eyebrow'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing · Scope-to-Price Map, Not an Estimate | Djaouad Frih',
  description:
    'Three published tiers with the boundary of each one written down: free AI reliability audit, scoped build from $3,500, and white-label delivery capacity from $8,000 per project. Fixed price, published exclusions.',
  alternates: { canonical: 'https://djaouad.is-a.dev/pricing' },
  openGraph: {
    title: 'Pricing · Djaouad Frih',
    description:
      'A fixed price only means something if the edge of it is written down. Three tiers, published exclusions, and a list of what this isn’t for.',
    url: 'https://djaouad.is-a.dev/pricing',
    type: 'website',
  },
}

const tiers = [
  {
    label: 'Entry',
    title: 'AI Reliability Audit',
    price: AUDIT_OFFER.price,
    priceNote: AUDIT_OFFER.duration,
    who: 'Teams shipping AI features who need an independent check before launch.',
    bullets: [
      'Precision, recall and F1 against a goldset built from your corpus',
      'Refusal rate on out-of-scope questions',
      'Citation correctness',
      'p50 / p95 latency and token cost',
      'Server-side authorization review',
      'A written report listing the failures',
    ],
    not: AUDIT_OFFER.terms,
    cta: 'Request the audit',
    href: '/contact?for=audit',
    featured: false,
  },
  {
    label: 'Build',
    title: 'Scoped Build',
    price: 'From $3,500',
    priceNote: '3–6 weeks · milestone-based',
    who: 'A deadline and a scope, with a real deliverable at the end of it.',
    bullets: [
      'Retrieval and document intelligence: extraction, sentence-aware chunking, embeddings, vector search on an HNSW index, answers with sources attached',
      'Tool-calling agents as LangGraph state machines — conditional routing, validated tool arguments, bounded loops',
      'Human handoff that carries the whole conversation, not a summary of it',
      'A committed test suite and a benchmark run against a goldset before handover',
      'Token and latency reporting wired in from the first milestone',
      'Source, deployment, documentation and a handover call',
    ],
    not: PRICE_ANCHOR_NOTE,
    cta: 'Scope a build',
    href: '/contact?for=build',
    featured: true,
  },
  {
    label: 'White-label',
    title: 'Delivery Capacity',
    price: AGENCY_ANCHOR,
    priceNote: AGENCY_ANCHOR_META,
    who: 'Software agencies and product studios with signed AI work and no one to deliver it.',
    bullets: [
      'You keep the client, the relationship and the margin',
      'I own the build end to end, under your brand, in your repo or mine',
      'Your name is on the proposal; my name is not in it',
      'Weekly delivery at your cadence',
      'Retrieval benchmarked against a goldset you approve',
      'Source and infrastructure transferred to your accounts',
    ],
    not: 'Not a sales call, and not a seat on your client-facing calls.',
    cta: 'Request a capacity conversation',
    href: '/contact?for=agency',
    featured: false,
  },
]

const exclusions = [
  'Model and cloud usage fees — billed by the provider, not by me',
  'Third-party licences (vector stores, transcription, telephony, payment providers)',
  'Ongoing maintenance after the 30-day defect window',
  'Work outside the agreed scope — quoted as a change order, never absorbed silently',
  'A platform subscription, a per-seat charge, or any dependency on me after handover',
]

const notFor = [
  'You want the cheapest credible option. There are cheaper ones; they will cost you more later.',
  'You want a quote before anyone looks at your data. Scoping without looking is guessing, and you’d be paying for the guess.',
  'You want an accuracy figure guaranteed in advance. I will not commit to a number I haven’t measured on your corpus.',
  'You have no deadline and no scope yet. Come back when you do — I’d rather tell you that now than spend your time.',
]

/** Inclusions and exclusions use different markers so the two lists never
 *  read as the same kind of statement. */
function List({
  items,
  tone,
}: {
  items: string[]
  tone: 'include' | 'exclude'
}) {
  const Icon = tone === 'include' ? Check : X
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
        >
          <Icon
            aria-hidden
            className={cn(
              'mt-1 size-3.5 shrink-0',
              tone === 'include' ? 'text-primary' : 'text-muted-foreground/70',
            )}
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PricingPage() {
  return (
    <main>
      <Section className="pb-10 pt-28 sm:pt-32">
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="mt-6 max-w-[24ch] font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          A fixed price only means something if the edge of it is written down.
        </h1>
        <p className="mt-6 max-w-[var(--prose-max)] text-lg leading-relaxed text-muted-foreground">
          Three tiers, one entry offer that costs you nothing, and a published list of what
          each one doesn&rsquo;t include. No hourly billing, no estimate that becomes a change
          order in week three.
        </p>
      </Section>

      {/* Tiers */}
      <Section className="pt-6 sm:pt-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {tiers.map((t) => (
            <SectionCard
              key={t.title}
              padding="md"
              className={cn(
                'flex flex-col',
                // The featured tier is marked by a stronger border and a small
                // label — not by a glow or a coloured shadow.
                t.featured
                  ? 'border-primary/50 bg-accent/40'
                  : 'border-border',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {t.label}
                </p>
                {t.featured && (
                  <span className="rounded-sm bg-primary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                    Most common
                  </span>
                )}
              </div>

              <h2 className="mt-3 font-display text-xl tracking-tight">{t.title}</h2>

              <p className="mt-4 font-display text-3xl tracking-tight">{t.price}</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                {t.priceNote}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.who}
              </p>

              <div className="mt-6 flex-1">
                <List items={t.bullets} tone="include" />
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <List items={[t.not]} tone="exclude" />
              </div>

              <ButtonLink
                href={t.href}
                variant={t.featured ? 'primary' : 'secondary'}
                className="mt-6 w-full"
              >
                {t.cta}
              </ButtonLink>
            </SectionCard>
          ))}
        </div>
      </Section>

      {/* Exclusions */}
      <Section>
        <SectionHeading
          title="Not included — published rather than discovered"
          description="Every line below is a cost that would otherwise surface in week three as a surprise. They are written down here instead."
        />
        <SectionCard padding="md" className="mt-8">
          <List items={exclusions} tone="exclude" />
        </SectionCard>
      </Section>

      {/* Rationale */}
      <Section>
        <SectionHeading title="Why it costs what it costs" />
        <div className="mt-6 max-w-[var(--prose-max)] space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            The variable is not how long I take — it&rsquo;s what breaks if I get it wrong.
            Retrieval that quietly returns the wrong chunk, a tool call that executes an
            unvalidated argument, a handoff that arrives without the conversation attached:
            each one is cheap to build and expensive to discover in production, which is why
            the measurement work is inside the price rather than bolted on afterwards.
          </p>
          <p>
            A cheaper quote can still carry a higher total cost, and a higher fee does not
            prove better results. Compare the same scope, the same acceptance criteria and
            the same handover. If a tier above doesn&rsquo;t fit, the one below will be quoted
            honestly rather than padded up to reach it.
          </p>
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          {PRICE_ANCHOR} · quoted after the audit, once the scope is real.
        </p>
      </Section>

      {/* Not for you */}
      <Section>
        <SectionHeading title="This is not for you if…" />
        <SectionCard padding="md" className="mt-8">
          <List items={notFor} tone="exclude" />
          <p className="mt-6 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
            I&rsquo;d rather lose the sale here than three weeks in.
          </p>
        </SectionCard>
      </Section>

      {/* Closing */}
      <Section>
        <SectionCard padding="lg">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                Start with the audit. It costs nothing and it settles most of it.
              </h2>
              <p className="mt-3 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground sm:text-base">
                {AUDIT_OFFER.duration} on your own documents, a written report you keep either
                way, and a fixed price afterwards if you want to go further. If the answer is
                that you don&rsquo;t need a build, that&rsquo;s what the report says.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?for=audit" size="lg">
                Request the audit
              </ButtonLink>
              <ButtonLink href="/contact?for=agency" variant="secondary" size="lg">
                White-label delivery
              </ButtonLink>
            </div>
          </div>
        </SectionCard>
      </Section>
    </main>
  )
}