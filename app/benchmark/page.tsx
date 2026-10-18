import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retrieval Benchmark · 232 Queries, Goldset and Failures Published | Djaouad Frih",
  description:
    "A re-runnable retrieval benchmark on a 45-chunk knowledge base and 232 labelled queries, with the full threshold sweep, the failing cases, and the run command. Precision, recall, F1 and false-positive rate, published including the failures.",
  alternates: { canonical: "https://djaouad.is-a.dev/benchmark" },
  openGraph: {
    title: "Retrieval Benchmark · Djaouad Frih",
    description:
      "232 labelled queries, 45 chunks, full threshold sweep, failing cases listed. Measures the retrieval policy, not the model.",
    url: "https://djaouad.is-a.dev/benchmark",
    type: "website",
  },
};

const REPO = "https://github.com/djoudad292/ai-virtual-receptionist";

const primaryBtn =
  "rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const secondaryBtn =
  "rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary";
const chip =
  "rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary";

function SectionHeading({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="mb-8 flex items-center gap-4">
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

const sweep = [
  { thr: "0.20", tp: 198, fp: 20, fn: 8, tn: 6, p: "90.8", r: "96.1", f1: "93.4", fpr: "76.9", best: true },
  { thr: "0.30", tp: 196, fp: 19, fn: 10, tn: 7, p: "91.2", r: "95.1", f1: "93.1", fpr: "73.1" },
  { thr: "0.35", tp: 188, fp: 17, fn: 18, tn: 9, p: "91.7", r: "91.3", f1: "91.5", fpr: "65.4" },
  { thr: "0.40", tp: 174, fp: 17, fn: 32, tn: 9, p: "91.1", r: "84.5", f1: "87.7", fpr: "65.4" },
  { thr: "0.50", tp: 147, fp: 6, fn: 59, tn: 20, p: "96.1", r: "71.4", f1: "81.9", fpr: "23.1" },
  { thr: "0.60", tp: 78, fp: 1, fn: 128, tn: 25, p: "98.7", r: "37.9", f1: "54.7", fpr: "3.8" },
];

const keywordSweep = [
  { thr: "0.30", p: "94.3", r: "88.3", f1: "91.2", fpr: "42.3", best: true },
  { thr: "0.35", p: "95.9", r: "79.6", f1: "87.0", fpr: "26.9" },
  { thr: "0.50", p: "96.8", r: "73.3", f1: "83.4", fpr: "19.2" },
  { thr: "0.60", p: "99.1", r: "53.9", f1: "69.8", fpr: "3.8" },
];

const failures = [
  { q: "amex accepted?", got: "(nothing above threshold)", type: "false-negative", note: "Terse, all-lowercase, zero stopwords. A real visitor types exactly this." },
  { q: "What kinds of dental work do you do?", got: "(nothing above threshold)", type: "false-negative", note: "The broadest question in the set, and the one the corpus answers most directly. The embedder has no concept dimension for it." },
  { q: "Do you treat pets?", got: "faq-services, faq-whitening, faq-privacy", type: "false-positive", note: "Tokens 'you', 'treat' overlap with service language. Answering this is a confident wrong answer." },
  { q: "Do you take passport photos here?", got: "faq-cosmetic, faq-whitening, faq-privacy", type: "false-positive", note: "'photos' matches the cosmetic consultation's photography. Single-token collision." },
  { q: "Can you sponsor a visa for your dental assistants?", got: "faq-insurance", type: "false-positive", note: "Out-of-domain request answered from insurance vocabulary." },
  { q: "How much does it cost to ship a replacement night guard to Brazil?", got: "faq-nightguard, faq-insurance, faq-mouthguard", type: "false-positive", note: "Contains a genuine domain noun inside an out-of-domain request. The hardest class of false positive." },
];

const limits = [
  {
    t: "This measures the retrieval policy, not the embedder",
    b: "The harness uses a deterministic offline embedder (concept lens + hashed lexical residual) so runs are reproducible with no network and no API key. Production uses text-embedding-3-small and degrades to keyword matching. Absolute numbers here are a regression guard for the harness and the threshold — not a score for text-embedding-3-small.",
  },
  {
    t: "Retrieval, not answer quality",
    b: "A question counts as answered when a gold chunk surfaces. Nothing here scores whether the written answer is correct, whether the citations support it, or how well an agent chooses between tools. Those are separate measurements and I do not claim them here.",
  },
  {
    t: "Synthetic queries, not visitor logs",
    b: "These 232 questions are hand-written paraphrases in five registers — colloquial, formal, terse, multi-clause, typo-laden — authored against this corpus. They are not captured real traffic. They tell you how the retrieval policy behaves under phrasing pressure; they do not tell you what your customers actually ask.",
  },
  {
    t: "One knowledge base",
    b: "45 chunks from a single dental clinic. Every figure here is n=1 corpus. A CTO's fair follow-up is whether this generalises across domains and corpus sizes, and the honest answer is that this benchmark cannot answer it.",
  },
];

export default function BenchmarkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            PUBLIC BENCHMARK · RE-RUNNABLE
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            Here is the retrieval benchmark. Including the part where it fails.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A retrieval system that answers everything, wrongly, is worse than one that
            knows what it doesn&apos;t cover. So this page publishes the false-positive
            rate and the failing queries alongside the headline score, not after it.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href={`${REPO}/blob/main/backend/eval/goldset.json`} target="_blank" rel="noopener noreferrer" className={chip}>
              goldset.json
            </a>
            <a href={`${REPO}/blob/main/backend/eval/benchmark-results.json`} target="_blank" rel="noopener noreferrer" className={chip}>
              results
            </a>
            <a href={`${REPO}/blob/main/backend/eval/benchmark.js`} target="_blank" rel="noopener noreferrer" className={chip}>
              run command
            </a>
            <a href={`${REPO}/actions`} target="_blank" rel="noopener noreferrer" className={chip}>
              CI runs
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {[
              { l: "Queries", v: "232" },
              { l: "Knowledge base", v: "45 chunks" },
              { l: "Out-of-scope", v: "26" },
              { l: "Failing cases shown", v: "all" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="font-mono text-[10px] text-muted-foreground">{s.l}</p>
                <p className="mt-1 font-display text-xl tracking-tight">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="How to re-run it" />
          <pre className="overflow-x-auto rounded-2xl border border-border bg-card p-5 font-mono text-xs leading-relaxed"><code>{`git clone ${REPO}
cd ai-virtual-receptionist/backend
npm ci
npm run eval

# tighten the gate
EVAL_MIN_F1=0.8 npm run eval

# change the retrieval depth
EVAL_TOP_K=3 npm run eval`}</code></pre>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            No API key, no network, no database. The run is hermetic and deterministic, so
            you get the same numbers I get. It exits non-zero if F1 drops below the floor,
            and it runs on every push in CI — so it is a regression guard, not a
            number in a file.
          </p>
        </section>

        <section className="pb-16">
          <SectionHeading title="Threshold sweep — vector (production path)" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-3 font-normal">Thr</th>
                  <th className="py-2 pr-3 font-normal">TP</th>
                  <th className="py-2 pr-3 font-normal">FP</th>
                  <th className="py-2 pr-3 font-normal">FN</th>
                  <th className="py-2 pr-3 font-normal">TN</th>
                  <th className="py-2 pr-3 font-normal">Prec</th>
                  <th className="py-2 pr-3 font-normal">Rec</th>
                  <th className="py-2 pr-3 font-normal">F1</th>
                  <th className="py-2 font-normal">FPR</th>
                </tr>
              </thead>
              <tbody>
                {sweep.map((s) => (
                  <tr key={s.thr} className={`border-b border-border/50 ${s.best ? "text-primary" : "text-muted-foreground"}`}>
                    <td className="py-2 pr-3">{s.thr}{s.best ? " ←" : ""}</td>
                    <td className="py-2 pr-3">{s.tp}</td>
                    <td className="py-2 pr-3">{s.fp}</td>
                    <td className="py-2 pr-3">{s.fn}</td>
                    <td className="py-2 pr-3">{s.tn}</td>
                    <td className="py-2 pr-3">{s.p}%</td>
                    <td className="py-2 pr-3">{s.r}%</td>
                    <td className="py-2 pr-3">{s.f1}%</td>
                    <td className="py-2">{s.fpr}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Best F1 is <span className="font-mono text-foreground">93.4% at threshold 0.2</span> —
            and it is the <em>worst</em> row for false positives. That is the whole point of
            publishing the sweep instead of the best row.
          </p>
        </section>

        <section className="pb-16">
          <SectionHeading title="The finding: F1 is the wrong thing to maximise" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-3 font-normal">Retriever</th>
                  <th className="py-2 pr-3 font-normal">Best</th>
                  <th className="py-2 pr-3 font-normal">F1</th>
                  <th className="py-2 pr-3 font-normal">FPR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 text-muted-foreground">
                  <td className="py-2 pr-3">vector</td>
                  <td className="py-2 pr-3">0.20</td>
                  <td className="py-2 pr-3">93.4%</td>
                  <td className="py-2 pr-3 text-destructive">76.9%</td>
                </tr>
                <tr className="border-b border-border/50 text-foreground">
                  <td className="py-2 pr-3">keyword</td>
                  <td className="py-2 pr-3">0.30</td>
                  <td className="py-2 pr-3">91.2%</td>
                  <td className="py-2 pr-3 text-primary">42.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            The keyword fallback costs <span className="font-mono text-foreground">2.2 F1 points</span> and
            buys <span className="font-mono text-foreground">half the false-positive rate</span>. For a
            receptionist workload, where most inbound traffic is genuinely out-of-scope, refusing
            correctly matters more than recalling one more chunk. So the safer default is not the
            one that maximises F1 — and a benchmark that only reported the best-F1 row would have
            hidden that entirely.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-3 font-normal">Keyword thr</th>
                  <th className="py-2 pr-3 font-normal">Prec</th>
                  <th className="py-2 pr-3 font-normal">Rec</th>
                  <th className="py-2 pr-3 font-normal">F1</th>
                  <th className="py-2 font-normal">FPR</th>
                </tr>
              </thead>
              <tbody>
                {keywordSweep.map((s) => (
                  <tr key={s.thr} className="border-b border-border/50 text-muted-foreground">
                    <td className="py-2 pr-3">{s.thr}{s.best ? " ←" : ""}</td>
                    <td className="py-2 pr-3">{s.p}%</td>
                    <td className="py-2 pr-3">{s.r}%</td>
                    <td className="py-2 pr-3">{s.f1}%</td>
                    <td className="py-2">{s.fpr}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="Where it fails" />
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Sampled from the 8 false negatives and 20 false positives at the best threshold.
            An audit that only reports wins is marketing.
          </p>
          <div className="mt-6 space-y-4">
            {failures.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${
                      f.type === "false-positive"
                        ? "border-destructive/40 text-destructive"
                        : "border-primary/40 text-primary"
                    }`}
                  >
                    {f.type}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">&ldquo;{f.q}&rdquo;</p>
                </div>
                <p className="mt-2 font-mono text-[11px] text-muted-foreground">retrieved: {f.got}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="What this does not measure" />
          <div className="space-y-5 border-l-2 border-border pl-5">
            {limits.map((l) => (
              <div key={l.t}>
                <h3 className="font-display text-lg tracking-tight">{l.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every one of those limits is also something I measure when I audit someone
            else&apos;s system — which is what the{" "}
            <Link href="/ai-reliability-audit" className="text-primary underline-offset-4 hover:underline">
              free five-day audit
            </Link>{" "}
            produces, on your documents rather than mine.
          </p>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">Run it and check my work.</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Clone the repo, run one command, and you get the same table. If my numbers here
              don&apos;t match yours, that&apos;s a finding worth telling me about.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?for=build" className={primaryBtn}>
                Discuss a build
              </Link>
              <Link href="/work" className={secondaryBtn}>
                See the case studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}