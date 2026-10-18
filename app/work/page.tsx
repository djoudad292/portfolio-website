import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work · Three Systems, Honestly Labelled | Djaouad Frih",
  description:
    "Three working systems with their architecture decisions, benchmarks and stated limitations. Personal projects, prototypes and production runs labelled separately — no client work presented as anything it wasn't.",
  alternates: { canonical: "https://djaouad.is-a.dev/work" },
  openGraph: {
    title: "Work · Djaouad Frih",
    description:
      "Three systems, each labelled for what it actually is. Architecture decisions, committed benchmarks, and what each one cannot do.",
    url: "https://djaouad.is-a.dev/work",
    type: "website",
  },
};

const REPO = "https://github.com/djoudad292/ai-virtual-receptionist";
const SUPPORT = "https://github.com/djoudad292/ai-customer-support-agent";

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

const cases = [
  {
    n: "01",
    name: "AI Receptionist",
    label: "Production · my own use",
    labelNote: "Runs on my own domain and answers real traffic. There is no paying customer, so there is no revenue figure on this page.",
    problem:
      "A small business loses enquiries at the exact hour a customer decides to act — 9pm, lunch, a busy line. The gap is not marketing, it is unanswered intake. This is the shape of the system that closes it: qualify, book, capture, escalate.",
    decisions: [
      {
        t: "Routing as a LangGraph state machine, not one long prompt",
        b: "Buys bounded loops and a step you can inspect per node. Costs more code and more state to hold. A prompt you cannot take apart is a prompt you cannot debug at 11pm when a customer is waiting.",
      },
      {
        t: "One trace span per graph node, per model call, per tool call",
        b: "Lets you attribute a bad answer to a retrieval miss or a model failure instead of guessing. This is not distributed tracing — there are no database or queue spans — and I would rather say that than let the word 'tracing' imply more coverage than exists.",
      },
      {
        t: "Token usage and latency recorded from the first milestone",
        b: "The cost conversation then happens against real numbers rather than an estimate. Costs instrumentation work before the first feature ships, which is exactly why it gets skipped and then regretted.",
      },
    ],
    measured: [
      ["Committed test files", "13 in the backend, run in CI on every push"],
      ["Public CI history", "green and red — the failing runs are the interesting ones"],
      ["Conversation eval set", "69 cases · 97 turn assertions · 15 categories · severity tags that gate a deploy"],
      ["Retrieval benchmark", "232 labelled queries against a 45-chunk knowledge base"],
    ],
    cannot: [
      "Single-tenant and single-language. Multilingual intake is not shipped.",
      "No production SLA, because it is my own infrastructure, not a client's.",
      "The retrieval benchmark measures the retrieval policy, not end-to-end answer quality.",
    ],
    links: [
      { l: "Try it", h: "https://chat.djaouad.is-a.dev", external: true },
      { l: "Repository", h: REPO, external: true },
      { l: "CI runs", h: `${REPO}/actions`, external: true },
      { l: "Eval dataset", h: `${REPO}/blob/main/frontend/evals/demo-conversation.dataset.json`, external: true },
    ],
  },
  {
    n: "02",
    name: "AI Support Agent",
    label: "Production · my own use",
    labelNote: "Live on my own domain. Same disclosure as above: my infrastructure, my traffic, no paying customer.",
    problem:
      "Tier-one support is a volume problem that keeps setting your headcount. This resolves what the knowledge base can answer, checks orders, creates the ticket as a real side-effecting action, and escalates to a human only when it should.",
    decisions: [
      {
        t: "Tool arguments validated against a schema before execution",
        b: "A malformed argument must fail loudly instead of quietly doing the wrong thing to a customer's record. The failure mode this prevents is not a crash — it is a confident wrong action that nobody notices for a week.",
      },
      {
        t: "Escalation carries full conversation state, not a summary",
        b: "A summary loses the thing the human actually needed. When the handoff arrives empty, the customer repeats themselves, which is the exact moment they decide you are not worth staying with.",
      },
    ],
    measured: [
      ["Committed test files", "2 in the backend"],
      ["Public CI history", "runs on every push"],
      ["Repository", "public, 80 commits"],
    ],
    cannot: [
      "No published retrieval benchmark for this one. The committed goldset and eval suite exist only for the receptionist, and I would rather say that than imply the evidence is uniform when it isn't.",
      "It has not been load-tested against production traffic volumes.",
    ],
    links: [
      { l: "Try it", h: "https://customer.djaouad.is-a.dev", external: true },
      { l: "Repository", h: SUPPORT, external: true },
    ],
  },
  {
    n: "03",
    name: "Retrieval benchmark",
    label: "Personal project · re-runnable",
    labelNote: "The measurement harness itself, published so a third party can execute it rather than take my word for a number.",
    problem:
      "Almost nobody publishing AI results publishes the failures. That makes every AI benchmark unfalsifiable, which is why buyers have learned to discount them. This one ships the goldset, the sweep, the run command and the failing cases.",
    decisions: [
      {
        t: "Offline deterministic embedder, so runs are hermetic",
        b: "No network, no API key, no database — anyone gets my exact numbers in CI. The cost is honesty: it measures the retrieval policy (similarity floor, top-k, vector-vs-keyword choice), not text-embedding-3-small. The site says so on the benchmark page too.",
      },
      {
        t: "The sweep is published, not just the best row",
        b: "The best-F1 row was also the worst row for false positives. Reporting only the winner would have hidden the single most useful thing this benchmark produced.",
      },
    ],
    measured: [
      ["Queries", "232 · 177 single-chunk, 29 multi-chunk, 26 distractor"],
      ["Knowledge base", "45 chunks"],
      ["Vector (production)", "F1 93.4% · P 90.8% · R 96.1% · FPR 76.9%"],
      ["Keyword (fallback)", "F1 91.2% · P 94.3% · R 88.3% · FPR 42.3%"],
      ["Gate", "exits non-zero below F1 0.70; runs on every push"],
    ],
    cannot: [
      "Synthetic queries, authored against this corpus — not captured visitor logs.",
      "One knowledge base. Every figure is n=1 corpus and cannot tell you how this generalises.",
      "It does not score written answer quality or agent tool selection.",
    ],
    links: [
      { l: "Read it", h: "/benchmark", external: false },
      { l: "Goldset", h: `${REPO}/blob/main/backend/eval/goldset.json`, external: true },
      { l: "Run command", h: `${REPO}/blob/main/backend/eval/benchmark.js`, external: true },
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            SELECTED WORK
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            Three systems, labelled for what they actually are.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every item here is my own work. Two run on my own infrastructure and take real
            traffic. None of them is client work, and none is presented as client work.
            Each case states what it cannot do, because a page that only lists strengths is
            a page you have learned to distrust.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className={chip}>Production · my own use</span>
            <span className={chip}>Prototype — not production</span>
            <span className={chip}>Personal project · no client</span>
            <span className={chip}>Client work</span>
          </div>
        </section>

        {cases.map((c) => (
          <section key={c.n} className="pb-16">
            <SectionHeading title={c.name} />

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                  {c.label}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{c.n}</span>
              </div>

              <h3 className="mt-4 font-display text-xl tracking-tight">
                The problem this demonstrates the ability to solve
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.problem}</p>

              <h3 className="mt-7 font-display text-xl tracking-tight">How it is put together</h3>
              <div className="mt-3 space-y-4">
                {c.decisions.map((d) => (
                  <div key={d.t} className="border-l-2 border-border pl-4">
                    <p className="text-sm font-medium">{d.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.b}</p>
                  </div>
                ))}
              </div>

              <h3 className="mt-7 font-display text-xl tracking-tight">
                What I measured, and what it does not measure
              </h3>
              <dl className="mt-3 divide-y divide-border">
                {c.measured.map(([k, v]) => (
                  <div key={k} className="grid gap-1 py-2 sm:grid-cols-[180px_1fr] sm:gap-4">
                    <dt className="font-mono text-[11px] text-muted-foreground">{k}</dt>
                    <dd className="text-sm leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-7 font-display text-xl tracking-tight">What this cannot do</h3>
              <ul className="mt-3 space-y-2">
                {c.cannot.map((x) => (
                  <li key={x} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="text-destructive">×</span>
                    {x}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {c.labelNote}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.links.map((l) =>
                  l.external ? (
                    <a key={l.l} href={l.h} target="_blank" rel="noopener noreferrer" className={chip}>
                      {l.l}
                    </a>
                  ) : (
                    <Link key={l.l} href={l.h} className={chip}>
                      {l.l}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </section>
        ))}

        <section className="pb-16">
          <SectionHeading title="The client work I don't have yet" />
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Two clients, two countries, and what they actually hired me for:
            </p>
            <blockquote className="mt-5 border-l-2 border-primary/50 pl-4">
              <p className="leading-relaxed">
                &ldquo;Great people, very good service. Made my website within 2 weeks in such
                a professional manner, very good communication skills — would highly
                recommend!&rdquo;
              </p>
              <footer className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                <a href="https://www.facebook.com/share/19Qx9MsT6b/" target="_blank" rel="noopener noreferrer" className="text-foreground underline-offset-4 hover:underline">
                  Bilal Kadri
                </a>
                <span>·</span>
                <span>United Kingdom</span>
              </footer>
            </blockquote>
            <blockquote className="mt-5 border-l-2 border-primary/50 pl-4">
              <p className="leading-relaxed">
                &ldquo;Huge shout-out to Djaouad! Complete, fully functional full-stack build
                delivered right on schedule. That&apos;s how it&apos;s done. Star developer right
                here.&rdquo;
              </p>
              <footer className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                <a href="https://www.facebook.com/share/1JTbdKi3oe/" target="_blank" rel="noopener noreferrer" className="text-foreground underline-offset-4 hover:underline">
                  Muhhamet Novruzov
                </a>
                <span>·</span>
                <span>Cyprus</span>
              </footer>
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Both were website builds, not AI systems. I&apos;m not going to present them as
              something they weren&apos;t.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              What they do establish is the thing no screenshot on this page can: someone
              working remotely from Algeria delivered on schedule, twice, for real businesses
              in two countries. If that&apos;s the question you&apos;re actually asking — and
              for a cross-border hire it usually is — that&apos;s the answer.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Happy to arrange a reference call. Ask on the call and I&apos;ll connect you
              directly.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">
              The gap is client case studies, and I&apos;d rather name it than fill it with a logo wall.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Everything above is my own work. What I don&apos;t have is a public case study from
              a paying client with agreed numbers. That gap closes the only way it should —
              by building something for someone and measuring it together. The{" "}
              <Link href="/ai-reliability-audit" className="text-primary underline-offset-4 hover:underline">
                free five-day audit
              </Link>{" "}
              is the front door: measured on your documents first, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?for=audit" className={primaryBtn}>
                Start with the audit
              </Link>
              <Link href="/benchmark" className={secondaryBtn}>
                Re-run the benchmark
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}