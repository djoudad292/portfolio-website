import type { Metadata } from 'next'
import { ArrowRight, AlertTriangle } from 'lucide-react'

import { Section } from '@/components/section'
import { SectionCard } from '@/components/section-card'
import { SectionHeading } from '@/components/section-heading'
import { ButtonLink } from '@/components/button'
import { Eyebrow } from '@/components/eyebrow'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Retrieval Benchmark · 232 Queries, Goldset and Failures Published | Djaouad Frih',
  description:
    'A re-runnable retrieval benchmark on a 45-chunk knowledge base and 232 labelled queries, with the full threshold sweep, the failing cases, and the run command. Precision, recall, F1 and false-positive rate, published including the failures.',
  alternates: { canonical: 'https://djaouad.is-a.dev/benchmark' },
  openGraph: {
    title: 'Retrieval Benchmark · Djaouad Frih',
    description:
      '232 labelled queries, 45 chunks, full threshold sweep, failing cases listed. Measures the retrieval policy, not the model.',
    url: 'https://djaouad.is-a.dev/benchmark',
    type: 'website',
  },
}

const REPO = 'https://github.com/djoudad292/ai-virtual-receptionist'

const sweep = [
  { thr: '0.20', tp: 198, fp: 20, fn: 8, tn: 6, p: '90.8', r: '96.1', f1: '93.4', fpr: '76.9', best: true },
  { thr: '0.30', tp: 196, fp: 19, fn: 10, tn: 7, p: '91.2', r: '95.1', f1: '93.1', fpr: '73.1' },
  { thr: '0.35', tp: 188, fp: 17, fn: 18, tn: 9, p: '91.7', r: '91.3', f1: '91.5', fpr: '65.4' },
  { thr: '0.40', tp: 174, fp: 17, fn: 32, tn: 9, p: '91.1', r: '84.5', f1: '87.7', fpr: '65.4' },
  { thr: '0.50', tp: 147, fp: 6, fn: 59, tn: 20, p: '96.1', r: '71.4', f1: '81.9', fpr: '23.1' },
  { thr: '0.60', tp: 78, fp: 1, fn: 128, tn: 25, p: '98.7', r: '37.9', f1: '54.7', fpr: '3.8' },
]

const keywordSweep = [
  { thr: '0.30', p: '94.3', r: '88.3', f1: '91.2', fpr: '42.3', best: true },
  { thr: '0.35', p: '95.9', r: '79.6', f1: '87.0', fpr: '26.9' },
  { thr: '0.50', p: '96.8', r: '73.3', f1: '83.4', fpr: '19.2' },
  { thr: '0.60', p: '99.1', r: '53.9', f1: '69.8', fpr: '3.8' },
]

const failures = [
  { q: 'amex accepted?', got: '(nothing above threshold)', type: 'false-negative', note: 'Terse, all-lowercase, zero stopwords. A real visitor types exactly this.' },
  { q: 'What kinds of dental work do you do?', got: '(nothing above threshold)', type: 'false-negative', note: 'The broadest question in the set, and the one the corpus answers most directly. The embedder has no concept dimension for it.' },
  { q: 'Do you treat pets?', got: 'faq-services, faq-whitening, faq-privacy', type: 'false-positive', note: 'Tokens “you”, “treat” overlap with service language. Answering this is a confident wrong answer.' },
  { q: 'Do you take passport photos here?', got: 'faq-cosmetic, faq-whitening, faq-privacy', type: 'false-positive', note: '“photos” matches the cosmetic consultation’s photography. Single-token collision.' },
  { q: 'Can you sponsor a visa for your dental assistants?', got: 'faq-insurance', type: 'false-positive', note: 'Out-of-domain request answered from insurance vocabulary.' },
  { q: 'How much does it cost to ship a replacement night guard to Brazil?', got: 'faq-nightguard, faq-insurance, faq-mouthguard', type: 'false-positive', note: 'Contains a genuine domain noun inside an out-of-domain request. The hardest class of false positive.' },
]

const limits = [
  {
    t: 'This measures the retrieval policy, not the embedder',
    b: 'The harness uses a deterministic offline embedder (concept lens + hashed lexical residual) so runs are reproducible with no network and no API key. Production uses text-embedding-3-small and degrades to keyword matching. Absolute numbers here are a regression guard for the harness and the threshold — not a score for text-embedding-3-small.',
  },
  {
    t: 'Retrieval, not answer quality',
    b: 'A question counts as answered when a gold chunk surfaces. Nothing here scores whether the written answer is correct, whether the citations support it, or how well an agent chooses between tools. Those are separate measurements and I do not claim them here.',
  },
  {
    t: 'Synthetic queries, not visitor logs',
    b: 'These 232 questions are hand-written paraphrases in five registers — colloquial, formal, terse, multi-clause, typo-laden — authored against this corpus. They are not captured real traffic. They tell you how the retrieval policy behaves under phrasing pressure; they do not tell you what your customers actually ask.',
  },
  {
    t: 'One knowledge base',
    b: '45 chunks from a single dental clinic. Every figure here is n=1 corpus. A CTO’s fair follow-up is whether this generalises across domains and corpus sizes, and the honest answer is that this benchmark cannot answer it.',
  },
]

const RUN = `git clone ${REPO}
cd ai-virtual-receptionist/backend
npm ci
npm run eval

# tighten the gate
EVAL_MIN_F1=0.8 npm run eval

# change the retrieval depth
EVAL_TOP_K=3 npm run eval`

/** Numeric table shell. One recipe for every table on the page so the
 *  benchmark reads as a single instrument rather than four different grids. */
function Table({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card">
      <table className={cn('w-full min-w-[34rem] border-collapse text-left', className)}>
        {children}
      </table>
    </div>
  )
}

function Th({
  children,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      scope="col"
      className={cn(
        'border-b border-border bg-secondary/50 px-3 py-3 font-mono text-xs font-normal uppercase tracking-[0.1em] text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        'border-b border-border/60 px-3 py-2.5 font-mono text-xs tabular-nums text-muted-foreground last:border-b-0',
        className,
      )}
      {...props}
    >
      {children}
    </td>
  )
}

export default function BenchmarkPage() {
  return (
    <main>
      <Section className="pb-10 pt-28 sm:pt-32">
        <Eyebrow>Public benchmark · Re-runnable</Eyebrow>
        <h1 className="mt-6 max-w-[26ch] font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Here is the retrieval benchmark. Including the part where it fails.
        </h1>
        <p className="mt-6 max-w-[var(--prose-max)] text-lg leading-relaxed text-muted-foreground">
          A retrieval system that answers everything, wrongly, is worse than one that knows
          what it doesn&rsquo;t cover. So this page publishes the false-positive rate and the
          failing queries alongside the headline score, not after it.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { label: 'goldset.json', href: `${REPO}/blob/main/backend/eval/goldset.json` },
            { label: 'results', href: `${REPO}/blob/main/backend/eval/benchmark-results.json` },
            { label: 'run command', href: `${REPO}/blob/main/backend/eval/benchmark.js` },
            { label: 'CI runs', href: `${REPO}/actions` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border bg-secondary/50 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { l: 'Queries', v: '232', s: '5 phrasing registers' },
            { l: 'Knowledge base', v: '45', s: 'chunks, single corpus' },
            { l: 'Out-of-scope', v: '26', s: 'refusal cases' },
            { l: 'Failing cases', v: '28', s: 'all published below' },
          ].map((s) => (
            <SectionCard key={s.l} padding="sm" flat>
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {s.l}
              </dt>
              <dd className="mt-2 font-display text-3xl tracking-tight tabular-nums">
                {s.v}
              </dd>
              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {s.s}
              </dd>
            </SectionCard>
          ))}
        </dl>
      </Section>

      {/* Run it */}
      <Section>
        <SectionHeading title="How to re-run it" />
        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2.5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              shell
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/70">
              no API key · no network · deterministic
            </p>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
            <code>{RUN}</code>
          </pre>
        </div>
        <p className="mt-4 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground">
          The run is hermetic, so you get the same numbers I get. It exits non-zero if F1 drops
          below the floor, and it runs on every push in CI — so it is a regression guard, not a
          number in a file.
        </p>
      </Section>

      {/* Vector sweep */}
      <Section>
        <SectionHeading
          title="Threshold sweep — vector (production path)"
          description="Best F1 is the first row, and it is also the worst row for false positives. That is the whole point of publishing the sweep instead of the best row."
        />
        <div className="mt-8">
          <Table>
            <caption className="sr-only">
              Vector threshold sweep: true positives, false positives, false negatives, true
              negatives, precision, recall, F1 and false-positive rate.
            </caption>
            <thead>
              <tr>
                <Th>Thr</Th>
                <Th>TP</Th>
                <Th>FP</Th>
                <Th>FN</Th>
                <Th>TN</Th>
                <Th>Prec</Th>
                <Th>Rec</Th>
                <Th>F1</Th>
                <Th>FPR</Th>
              </tr>
            </thead>
            <tbody>
              {sweep.map((s) => (
                <tr
                  key={s.thr}
                  className={cn(
                    'transition-colors',
                    s.best
                      ? 'bg-primary/[0.07] text-primary'
                      : 'hover:bg-accent/40',
                  )}
                >
                  <Td className={cn('font-medium', s.best ? 'text-primary' : 'text-foreground')}>
                    {s.thr}
                    {s.best && <span aria-label="best F1"> ←</span>}
                  </Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.tp}</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.fp}</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.fn}</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.tn}</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.p}%</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.r}%</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.f1}%</Td>
                  <Td
                    className={cn(
                      s.best ? 'text-primary' : 'text-destructive',
                    )}
                  >
                    {s.fpr}%
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <p className="mt-4 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground">
          Best F1 is{' '}
          <span className="font-mono text-foreground">93.4% at threshold 0.2</span> — and the
          false-positive rate at that threshold is{' '}
          <span className="font-mono text-destructive">76.9%</span>.
        </p>
      </Section>

      {/* Finding */}
      <Section>
        <SectionHeading title="The finding: F1 is the wrong thing to maximise" />
        <div className="mt-8">
          <Table className="min-w-[26rem]">
            <caption className="sr-only">
              Comparison of vector and keyword retrievers at their best F1 threshold.
            </caption>
            <thead>
              <tr>
                <Th>Retriever</Th>
                <Th>Best thr</Th>
                <Th>F1</Th>
                <Th>FPR</Th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-colors hover:bg-accent/40">
                <Td className="text-foreground">vector</Td>
                <Td>0.20</Td>
                <Td className="text-foreground">93.4%</Td>
                <Td className="text-destructive">76.9%</Td>
              </tr>
              <tr className="bg-primary/[0.07] transition-colors">
                <Td className="font-medium text-primary">keyword</Td>
                <Td className="text-primary">0.30</Td>
                <Td className="text-primary">91.2%</Td>
                <Td className="text-primary">42.3%</Td>
              </tr>
            </tbody>
          </Table>
        </div>
        <p className="mt-5 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground sm:text-base">
          The keyword fallback costs{' '}
          <span className="font-mono text-foreground">2.2 F1 points</span> and buys{' '}
          <span className="font-mono text-foreground">half the false-positive rate</span>. For a
          receptionist workload, where most inbound traffic is genuinely out-of-scope, refusing
          correctly matters more than recalling one more chunk. So the safer default is not the
          one that maximises F1 — and a benchmark that only reported the best-F1 row would have
          hidden that entirely.
        </p>

        <div className="mt-6">
          <Table className="min-w-[30rem]">
            <caption className="sr-only">
              Keyword threshold sweep: precision, recall, F1 and false-positive rate.
            </caption>
            <thead>
              <tr>
                <Th>Keyword thr</Th>
                <Th>Prec</Th>
                <Th>Rec</Th>
                <Th>F1</Th>
                <Th>FPR</Th>
              </tr>
            </thead>
            <tbody>
              {keywordSweep.map((s) => (
                <tr
                  key={s.thr}
                  className={cn(
                    'transition-colors',
                    s.best ? 'bg-primary/[0.07] text-primary' : 'hover:bg-accent/40',
                  )}
                >
                  <Td className={s.best ? 'font-medium text-primary' : 'text-foreground'}>
                    {s.thr}
                    {s.best && <span aria-label="best F1"> ←</span>}
                  </Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.p}%</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.r}%</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.f1}%</Td>
                  <Td className={s.best ? 'text-primary' : undefined}>{s.fpr}%</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>

      {/* Failures */}
      <Section>
        <SectionHeading
          title="Where it fails"
          description="Sampled from the 8 false negatives and 20 false positives at the best threshold. An audit that only reports wins is marketing."
        />
        <div className="mt-8 space-y-4">
          {failures.map((f) => {
            const isFalsePositive = f.type === 'false-positive'
            return (
              <SectionCard key={f.q} padding="md">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]',
                      isFalsePositive
                        ? 'border-destructive/40 text-destructive'
                        : 'border-primary/40 text-primary',
                    )}
                  >
                    <AlertTriangle aria-hidden className="size-3" />
                    {f.type}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    &ldquo;{f.q}&rdquo;
                  </p>
                </div>
                <p className="mt-3 break-words font-mono text-xs leading-relaxed text-muted-foreground">
                  retrieved: {f.got}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.note}
                </p>
              </SectionCard>
            )
          })}
        </div>
      </Section>

      {/* Limits */}
      <Section>
        <SectionHeading title="What this does not measure" />
        <div className="mt-8 space-y-6 border-l-2 border-border pl-5 sm:pl-6">
          {limits.map((l) => (
            <div key={l.t}>
              <h3 className="font-display text-lg tracking-tight">{l.t}</h3>
              <p className="mt-1.5 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground">
                {l.b}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground">
          Every one of those limits is also something I measure when I audit someone
          else&rsquo;s system — which is what the{' '}
          <a
            href="/ai-reliability-audit"
            className="text-primary underline-offset-4 hover:underline"
          >
            free reliability audit
          </a>{' '}
          produces, on your documents rather than mine.
        </p>
      </Section>

      {/* Closing */}
      <Section>
        <SectionCard padding="lg">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Run it and check my work.
          </h2>
          <p className="mt-3 max-w-[var(--prose-max)] text-sm leading-relaxed text-muted-foreground sm:text-base">
            Clone the repo, run one command, and you get the same table. If my numbers here
            don&rsquo;t match yours, that&rsquo;s a finding worth telling me about.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?for=build" size="lg">
              Discuss a build
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg">
              See the case studies
            </ButtonLink>
          </div>
        </SectionCard>
      </Section>
    </main>
  )
}