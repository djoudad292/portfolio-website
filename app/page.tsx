import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Download, Github } from 'lucide-react'

import { LeadCapture } from '@/components/lead-capture'
import { Section } from '@/components/section'
import { SectionCard } from '@/components/section-card'
import { SectionHeading } from '@/components/section-heading'
import { ButtonLink, ChipLink } from '@/components/button'
import { Eyebrow } from '@/components/eyebrow'

import { AUDIT_OFFER, PRICE_ANCHOR, TIMEZONE_CLAIM } from '@/lib/positioning'

export const metadata: Metadata = {
  title: 'Djaouad Frih — Measured AI Systems, Fixed Price',
  description:
    'I build retrieval layers and agent loops that run on your existing Postgres estate and monolith, scored against your own documents before a single prompt is written. Fixed price. Full builds start at $3,500.',
  alternates: { canonical: 'https://djaouad.is-a.dev' },
}

const work = [
  {
    name: 'AI Receptionist',
    desc: 'Answers questions, books appointments and captures leads from your own documents.',
    outcome: 'In production since August 2026',
    url: 'https://chat.djaouad.is-a.dev',
    repo: 'https://github.com/djoudad292/ai-virtual-receptionist',
    apk: 'https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk',
    limit: 'Single-tenant, single-language',
  },
  {
    name: 'Support Agent',
    desc: 'Handles tier-one support, checks orders, creates tickets, escalates with the full conversation attached.',
    outcome: '~92% of questions handled by AI',
    url: 'https://customer.djaouad.is-a.dev',
    repo: 'https://github.com/djoudad292/ai-customer-support-agent',
    apk: 'https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk',
    limit: 'No published retrieval benchmark',
  },
  {
    name: 'WhatsApp CRM / ERP',
    desc: 'Reads WhatsApp messages, checks real stock and creates orders behind human approval gates.',
    outcome: 'Every write is human-approved',
    url: 'https://crm.djaouad.is-a.dev/try',
    repo: 'https://github.com/djoudad292/ai-whatsapp-crm-erp',
    limit: 'Human approval on every write',
  },
  {
    name: 'Smart PDF Workspace',
    desc: 'Ask your contracts, invoices and PDFs. Answers with sources and the retrieval mode used.',
    outcome: 'Every answer cites its passage',
    url: 'https://docs.djaouad.is-a.dev',
    repo: 'https://github.com/djoudad292/smart-pdf-workspace',
    apk: 'https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk',
    limit: 'Text layer only — no OCR',
  },
  {
    name: 'HireMe MCP Server',
    desc: 'Exposes profile, projects and pricing so AI assistants can vet the work and file a brief.',
    outcome: 'Read tools plus one gated write',
    url: 'https://mcp.djaouad.is-a.dev/mcp',
    repo: 'https://github.com/djoudad292/hireme-mcp',
    limit: 'Protocol tooling, not a client system',
  },
]

const process = [
  {
    step: '01',
    title: 'Free audit',
    body: 'One week, target. Scored against your documents. No call required first.',
  },
  {
    step: '02',
    title: 'Fixed-price scope',
    body: 'The audit becomes a written spec with acceptance criteria and a deploy-gating eval.',
  },
  {
    step: '03',
    title: 'Build and handover',
    body: 'Source in your repo, docs, credentials, and 30 days to find defects.',
  },
]

const dontDo = [
  "I'm not a full-service digital agency.",
  "I don't take work where I'm the cheapest credible option.",
  "I don't start engagements without written scope and acceptance criteria.",
  "I'll tell you if your project is a SaaS subscription rather than a build.",
]

export default function Home() {
  return (
    <main>
      {/* ---------------------------------------------------------------- Hero */}
      <Section className="pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>Measured AI systems · Fixed price</Eyebrow>

            <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Your AI support agent should be measured before you trust it. I build it that way.
            </h1>

            <p className="mt-6 max-w-[var(--prose-max)] text-lg leading-relaxed text-muted-foreground">
              I build retrieval layers and agent loops that run on your existing Postgres
              estate and monolith, scored against your own documents before a single prompt
              is written. Fixed price. {PRICE_ANCHOR}.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/ai-reliability-audit" size="lg">
                Get the free reliability audit
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/djaouad-frih"
                external
                variant="secondary"
                size="lg"
              >
                LinkedIn profile
                <ArrowUpRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>

            <p className="mt-6 font-mono text-xs leading-relaxed text-muted-foreground">
              One week, target. Scored against your documents. No call required first.
              <br className="hidden sm:block" /> Failures are published alongside the scores.
            </p>
          </div>

          {/* At-a-glance panel. Uses the wide column the hero would otherwise
              leave empty, and puts the commercial facts where they are read. */}
          <SectionCard padding="md" className="lg:mt-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              At a glance
            </p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Entry offer
                </dt>
                <dd className="mt-1 font-display text-2xl tracking-tight">
                  {AUDIT_OFFER.price}
                  <span className="ml-2 font-sans text-sm text-muted-foreground">
                    {AUDIT_OFFER.duration}
                  </span>
                </dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Full builds
                </dt>
                <dd className="mt-1 font-display text-2xl tracking-tight text-primary">
                  From $3,500
                </dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Availability
                </dt>
                <dd className="mt-2 flex items-center gap-2 text-sm text-foreground">
                  <span className="relative flex size-2 shrink-0">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-success" />
                  </span>
                  Taking new projects
                </dd>
                <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {TIMEZONE_CLAIM}
                </dd>
              </div>
            </dl>
          </SectionCard>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- Work */}
      <Section>
        <SectionHeading
          eyebrow="Selected work"
          title="Systems I built and operate"
          description="Every demo below is a live production deployment, not a mockup. Each one is measured against real documents, with the failures published."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {work.map((w) => (
            <SectionCard key={w.name} interactive className="flex flex-col">
              <div className="flex flex-1 flex-col">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl tracking-tight transition-colors hover:text-primary"
                >
                  {w.name}
                </a>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
                <p className="mt-4 font-mono text-xs text-primary">{w.outcome}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{w.limit}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <ChipLink href={w.url}>
                  <ArrowUpRight className="size-3.5" aria-hidden />
                  Live
                </ChipLink>
                <ChipLink href={w.repo}>
                  <Github className="size-3.5" aria-hidden />
                  Code
                </ChipLink>
                {w.apk && (
                  <ChipLink href={w.apk}>
                    <Download className="size-3.5" aria-hidden />
                    Android
                  </ChipLink>
                )}
              </div>
            </SectionCard>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/work" variant="ghost" size="sm">
            All case studies
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </Section>

      {/* ------------------------------------------------------------- Process */}
      <Section>
        <SectionHeading eyebrow="How it works" title="Three steps, no discovery theatre" />

        <ol className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-12">
          {process.map((p) => (
            <li key={p.step}>
              <SectionCard padding="md" className="h-full">
                <span className="font-mono text-xs text-primary">{p.step}</span>
                <h3 className="mt-3 font-display text-xl tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </SectionCard>
            </li>
          ))}
        </ol>
      </Section>

      {/* --------------------------------------------------------- What I don't */}
      <Section>
        <SectionCard padding="lg">
          <SectionHeading
            as="h2"
            eyebrow="Scope discipline"
            title="What I don't do"
            size="2xl"
          />
          <ul className="mt-6 space-y-3">
            {dontDo.map((d) => (
              <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-0.5 font-mono text-xs text-destructive">
                  ×
                </span>
                {d}
              </li>
            ))}
          </ul>
        </SectionCard>
      </Section>

      {/* -------------------------------------------------------- Lead capture */}
      <LeadCapture />

      {/* ------------------------------------------------------------- Closing */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Eyebrow rule>Start here</Eyebrow>
            <h2 className="mt-5 max-w-[24ch] font-display text-3xl tracking-tight sm:text-4xl">
              Start with the audit, not with a sales call.
            </h2>
            <p className="mt-4 max-w-[var(--prose-max)] text-base leading-relaxed text-muted-foreground">
              If your AI system is answering before it&rsquo;s measured, it&rsquo;s answering
              from a guess. The free reliability audit is {AUDIT_OFFER.duration}, scored
              against your own documents, and you keep the report either way — including the
              line that says you don&rsquo;t need AI here yet.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <ButtonLink href="/contact?for=audit" size="lg">
              Start the audit
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              See the price map
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg tracking-tight">
              Djaouad Frih<span className="text-primary">.</span>
            </p>
            <a
              href="mailto:contact@djaouad.is-a.dev"
              className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              contact@djaouad.is-a.dev
            </a>
          </div>
          <Link
            href="/benchmark"
            className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            See the retrieval benchmark, including where it fails →
          </Link>
        </div>
      </Section>
    </main>
  )
}