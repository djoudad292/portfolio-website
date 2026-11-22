import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, Download, Github } from 'lucide-react'

import { Section } from '@/components/section'
import { SectionCard } from '@/components/section-card'
import { SectionHeading } from '@/components/section-heading'
import { ButtonLink, ChipLink } from '@/components/button'
import { Eyebrow } from '@/components/eyebrow'

export const metadata: Metadata = {
  title: 'Work · Measured AI Systems | Djaouad Frih',
  description:
    'Systems I built and operate: AI receptionist, support agent, WhatsApp CRM, PDF workspace and MCP server. Each one measured against real documents, with failures published.',
  alternates: { canonical: 'https://djaouad.is-a.dev/work' },
  openGraph: {
    title: 'Work · Djaouad Frih',
    description:
      'Five production systems, every demo link live, every repo real. Each one measured against real documents with the failures published.',
    url: 'https://djaouad.is-a.dev/work',
    type: 'website',
  },
}

type Project = {
  name: string
  category: string
  desc: string
  outcome: string
  limit: string
  url: string
  repo: string
  apk?: string
  featured?: boolean
}

const cases: Project[] = [
  {
    name: 'AI Receptionist',
    category: 'Voice & chat intake',
    desc: 'A 24/7 receptionist that answers questions, books appointments and captures leads from your own documents. Measured on a 232-query retrieval benchmark, with the false-positive rate published alongside the score.',
    outcome: 'Running in production since August 2026 — lead capture, booking, and human handoff.',
    limit: 'Single-tenant, single-language',
    url: 'https://chat.djaouad.is-a.dev',
    repo: 'https://github.com/djoudad292/ai-virtual-receptionist',
    apk: 'https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk',
    featured: true,
  },
  {
    name: 'Support Agent',
    category: 'Tier-one support',
    desc: 'Handles tier-one support, checks orders, creates tickets, and escalates to humans with the full conversation attached rather than a summary of it.',
    outcome: '~92% of support questions handled by AI, ~25 hours saved per week, 0 missed bookings.',
    limit: 'No published retrieval benchmark',
    url: 'https://customer.djaouad.is-a.dev',
    repo: 'https://github.com/djoudad292/ai-customer-support-agent',
    apk: 'https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk',
  },
  {
    name: 'WhatsApp CRM / ERP',
    category: 'Side-effecting agent',
    desc: 'An agent that reads WhatsApp messages, checks real stock and creates orders — behind human approval gates with a full audit trail on every write.',
    outcome: 'Side-effecting actions on inventory run under human approval.',
    limit: 'Human approval gates on every write',
    url: 'https://crm.djaouad.is-a.dev/try',
    repo: 'https://github.com/djoudad292/ai-whatsapp-crm-erp',
  },
  {
    name: 'Smart PDF Workspace',
    category: 'Document intelligence',
    desc: 'Ask your contracts, invoices and PDFs. Answers come with sources attached, and the retrieval mode that produced each one.',
    outcome: 'Document Q&A with cited sources — every answer traces back to the document.',
    limit: 'Text layer only — no OCR',
    url: 'https://docs.djaouad.is-a.dev',
    repo: 'https://github.com/djoudad292/smart-pdf-workspace',
    apk: 'https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk',
  },
  {
    name: 'HireMe MCP Server',
    category: 'Machine-readable portfolio',
    desc: 'An MCP server that exposes profile, projects and pricing so AI assistants can vet the work and file a brief on a client’s behalf.',
    outcome: 'Protocol-level tool surface — read tools plus one rate-limited write for brief submission.',
    limit: 'Protocol tooling, not a client system',
    url: 'https://mcp.djaouad.is-a.dev/mcp',
    repo: 'https://github.com/djoudad292/hireme-mcp',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <SectionCard interactive padding="md" className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {project.category}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-display text-xl tracking-tight transition-colors hover:text-primary"
        >
          {project.name}
        </a>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.desc}
        </p>

        <div className="mt-5 space-y-1.5 border-t border-border pt-4">
          <p className="font-mono text-xs leading-relaxed text-primary">
            {project.outcome}
          </p>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            Limit: {project.limit}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <ChipLink href={project.url}>
          <ArrowUpRight className="size-3.5" aria-hidden />
          Live
        </ChipLink>
        <ChipLink href={project.repo}>
          <Github className="size-3.5" aria-hidden />
          Code
        </ChipLink>
        {project.apk && (
          <ChipLink href={project.apk}>
            <Download className="size-3.5" aria-hidden />
            Android
          </ChipLink>
        )}
      </div>
    </SectionCard>
  )
}

export default function WorkPage() {
  const [featured, ...rest] = cases

  return (
    <main>
      <Section className="pb-10 pt-28 sm:pt-32">
        <Eyebrow>Selected work</Eyebrow>
        <h1 className="mt-6 max-w-[26ch] font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Systems I built and operate.
        </h1>
        <p className="mt-6 max-w-[var(--prose-max)] text-lg leading-relaxed text-muted-foreground">
          Each one is measured against real documents, with the failures published. No
          demo-only claims — every number comes from a benchmark you can re-run.
        </p>
      </Section>

      {/* Featured case study */}
      <Section className="pt-4 sm:pt-6">
        <SectionCard padding="lg" className="border-primary/25 bg-accent/30">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
            <div>
              <Eyebrow tone="brand">Longest-running deployment</Eyebrow>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                {featured.name}
              </h2>
              <p className="mt-4 max-w-[var(--prose-max)] text-base leading-relaxed text-muted-foreground">
                {featured.desc}
              </p>
              <p className="mt-4 font-mono text-xs text-primary">{featured.outcome}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <ChipLink href={featured.url}>
                  <ArrowUpRight className="size-3.5" aria-hidden />
                  Live
                </ChipLink>
                <ChipLink href={featured.repo}>
                  <Github className="size-3.5" aria-hidden />
                  Code
                </ChipLink>
                {featured.apk && (
                  <ChipLink href={featured.apk}>
                    <Download className="size-3.5" aria-hidden />
                    Android
                  </ChipLink>
                )}
              </div>
            </div>

            <dl className="space-y-5 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Benchmark
                </dt>
                <dd className="mt-1 font-display text-2xl tracking-tight">
                  232 queries
                </dd>
                <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  45 chunks, 8 false negatives and 20 false positives published
                </dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Proven in
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  Production since Aug 2026
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {featured.limit}
                </dd>
              </div>
            </dl>
          </div>
        </SectionCard>
      </Section>

      {/* Remaining projects */}
      <Section>
        <SectionHeading
          eyebrow="Also running"
          title="Four more systems in production"
          description="Each card states what the system does, the measured outcome, and the limit that applies. The limit is the part most portfolios leave out."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <SectionCard padding="lg">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                Start with the audit
              </h2>
              <p className="mt-3 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground sm:text-base">
                The free reliability audit is how a case study starts — measured on your
                documents first, scored against a goldset you approve, and the fee comes off
                any build that follows.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?for=audit" size="lg">
                Start with the audit
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/benchmark" variant="secondary" size="lg">
                Read the benchmark
              </ButtonLink>
            </div>
          </div>
        </SectionCard>
      </Section>
    </main>
  )
}