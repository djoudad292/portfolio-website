import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work · Five systems, honestly labelled | Djaouad Frih",
  description:
    "Five systems built and shipped: a side-effecting WhatsApp agent under approval gates, a RAG receptionist benchmarked on 232 labelled queries, a multi-tenant document workspace, a LangGraph support agent and an MCP server. Personal work, labelled, limitations stated.",
  alternates: { canonical: "https://djaouad.is-a.dev/work" },
  openGraph: {
    title: "Work · Djaouad Frih",
    description:
      "Five systems, each labelled for what it actually is. Architecture decisions, committed benchmarks, and what each one cannot do.",
    url: "https://djaouad.is-a.dev/work",
    type: "website",
  },
};

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
    name: "AI WhatsApp CRM / ERP",
    label: "Production · my own use",
    problem:
      "Order capture by chat message is the classic small-business automation: someone sends a WhatsApp message with a product and a quantity, and a human retypes it into a system. The hard part is not the reply — it is that the agent takes side-effecting actions on real inventory, and a wrong action is worse than no action.",
    decisions: [
      {
        t: "Human approval gates in front of the writes",
        b: "The agent may read and draft; order creation sits behind an approval queue with a full audit trail. This costs latency on every order. The alternative — trusting the agent with writes unsupervised — is the failure mode that ends the engagement, so the gate stays.",
      },
      {
        t: "Tool arguments validated before execution, not after",
        b: "An order that references a SKU that doesn't exist must fail loudly at the boundary. Discovering it from a customer complaint three weeks later is a different and much more expensive class of bug.",
      },
      {
        t: "Stateless backend function, Postgres as the only state",
        b: "Every request boots the app, reads Postgres, and returns. No long-lived server and no in-memory queue to lose. Buys deploy simplicity and removes a whole class of production incident.",
      },
    ],
    measured: [
      ["Committed test files", "2 in the backend — the weakest evidence on this page"],
      ["Repository", "28 commits, public"],
      ["Size", "~7,900 lines of TypeScript"],
      ["Live demo", "no signup required — create a real order in the sandbox"],
      ["Stack", "Next.js · NestJS · Postgres (Neon) · BullMQ/Redis"],
    ],
    cannot: [
      "No paying customer and no conversion. It is a demonstration, not a business.",
      "No published agent benchmark yet. Two committed test files is the honest current state, and the gap I am closing next.",
      "It does not measure refusal rate on out-of-scope requests or argument-validation failure rates — the two numbers that matter most for an agent that writes to a database.",
    ],
    links: [
      { l: "Try it (no signup)", h: "https://crm.djaouad.is-a.dev/try", external: true },
      { l: "Live app", h: "https://crm.djaouad.is-a.dev", external: true },
      { l: "Repository", h: "https://github.com/djoudad292/ai-whatsapp-crm-erp", external: true },
    ],
  },
  {
    n: "02",
    name: "AI Receptionist",
    label: "Production · my own use",
    problem:
      "A small business loses enquiries at the exact hour a customer decides to act — 9pm, lunch, a busy line. This is the system that closes that gap: qualify, book, capture, escalate to a human. It is also the system I used to build a measurement practice rather than assert that retrieval works.",
    decisions: [
      {
        t: "Routing as a LangGraph state machine, not one long prompt",
        b: "Buys bounded loops and a step you can inspect per node. Costs more code and more state to hold. A prompt you cannot take apart is a prompt you cannot debug at 11pm when a customer is waiting.",
      },
      {
        t: "Retrieval measured before any answer is written",
        b: "If retrieval misses, the answer is downstream of a known-bad input. The benchmark below exists because I could not otherwise tell the difference between 'the model is weak' and 'we retrieved the wrong chunk'.",
      },
      {
        t: "One trace span per graph node, per model call, per tool call",
        b: "Lets me attribute a bad answer to a retrieval miss or a model failure instead of guessing. This is not distributed tracing — there are no database or queue spans — and I would rather say that than let the word imply more coverage than exists.",
      },
      {
        t: "Token usage and latency recorded from the first milestone",
        b: "The cost conversation then happens against real numbers rather than an estimate. Costs instrumentation work before the first feature ships, which is exactly why it gets skipped and then regretted.",
      },
    ],
    measured: [
      ["Retrieval goldset", "232 labelled queries · 45-chunk knowledge base · 177 single-chunk, 29 multi-chunk, 26 distractor"],
      ["Vector (production path)", "F1 93.4% · Precision 90.8% · Recall 96.1% · FPR 76.9%"],
      ["Keyword (fallback)", "F1 91.2% · Precision 94.3% · Recall 88.3% · FPR 42.3%"],
      ["Conversation eval set", "69 cases · 97 turn assertions · 15 categories · severity tags that gate a deploy"],
      ["Committed test files", "13 in the backend, run in CI on every push"],
      ["Repository", "104 commits · ~24,000 lines of TypeScript"],
    ],
    cannot: [
      "Single-tenant and single-language. Multilingual intake is not shipped.",
      "The benchmark measures the retrieval policy — the similarity floor, the top-k cut, the vector-vs-keyword choice — not the production embedder and not end-to-end answer quality.",
      "The goldset is synthetic: hand-written paraphrases authored against this corpus, not captured visitor logs. It is still one knowledge base.",
      "The 76.9% false-positive rate at the F1-optimal threshold is real and is the weakest number on this page.",
    ],
    links: [
      { l: "Try it", h: "https://chat.djaouad.is-a.dev", external: true },
      { l: "Read the benchmark", h: "/benchmark", external: false },
      { l: "Repository", h: "https://github.com/djoudad292/ai-virtual-receptionist", external: true },
      { l: "CI runs", h: "https://github.com/djoudad292/ai-virtual-receptionist/actions", external: true },
    ],
  },
  {
    n: "03",
    name: "Smart PDF Workspace",
    label: "Production · my own use",
    problem:
      "Document Q&A is the most requested and most badly-served AI feature: people upload a contract or a report and want an answer with the source attached. The failure modes are specific and measurable — scanned PDFs with no text layer, and tables that get chunked into nonsense.",
    decisions: [
      {
        t: "Scanned and image-only PDFs rejected with a clear OCR message",
        b: "Silently returning nothing for a scanned document looks identical to 'the model cannot answer this', and the user concludes the product is broken. An explicit refusal is more useful than an empty answer.",
      },
      {
        t: "Low-text-density warning on table- and image-heavy documents",
        b: "Indexes them, but tells you the text density is low so a bad answer is diagnosable rather than mysterious.",
      },
      {
        t: "Every answer reports the retrieval mode that produced it",
        b: "An answer carries the `retrievalMode` that generated it, so you can tell whether it came from vector search, keyword fallback or a direct summary. A summary reads the whole document and performs no retrieval, so it correctly returns no mode at all.",
      },
      {
        t: "Multi-tenant auth with token revocation, not just login",
        b: "JWT access and refresh, revocation, company slugs, agent invites, password reset. Buys nothing visible and prevents the incident that ends a B2B contract.",
      },
    ],
    measured: [
      ["Committed test files", "10 across the stack"],
      ["Repository", "47 commits · ~12,300 lines of TypeScript"],
      ["Stack", "NestJS · Postgres + pgvector (vector(1536)) · Next.js · Expo Android · embeddable widget"],
      ["Embeddable widget", "one-line script, config per workspace"],
    ],
    cannot: [
      "Text layer only — no OCR. Scanned documents are refused rather than guessed at.",
      "No published retrieval benchmark. The 232-query goldset belongs to the receptionist, not this project, and implying otherwise would be dishonest.",
      "No paying customer. The live demo has no real users.",
    ],
    links: [
      { l: "Try it", h: "https://docs.djaouad.is-a.dev", external: true },
      { l: "Repository", h: "https://github.com/djoudad292/smart-pdf-workspace", external: true },
    ],
  },
  {
    n: "04",
    name: "AI Support Agent",
    label: "Production · my own use",
    problem:
      "Tier-one support is a volume problem that keeps setting your headcount. This resolves what the knowledge base can answer, checks orders, creates the ticket as a real side-effecting action, and escalates to a human only when it should.",
    decisions: [
      {
        t: "Tool arguments validated against a schema before execution",
        b: "A malformed argument must fail loudly instead of quietly doing the wrong thing to a customer's record. The failure mode this prevents is not a crash — it is a confident wrong action nobody notices for a week.",
      },
      {
        t: "Escalation carries full conversation state, not a summary",
        b: "A summary loses the thing the human actually needed. When the handoff arrives empty, the customer repeats themselves, which is the exact moment they decide you are not worth staying with.",
      },
      {
        t: "Routing as a state machine rather than one long prompt",
        b: "Same reasoning as the receptionist: a routing decision you cannot inspect is a routing decision you cannot debug.",
      },
    ],
    measured: [
      ["Committed test files", "2 in the backend"],
      ["Repository", "80 commits, public"],
      ["Live demo", "runs on my own domain"],
    ],
    cannot: [
      "No published retrieval benchmark for this one. The committed goldset and eval suite exist only for the receptionist, and I would rather say that than imply the evidence is uniform when it isn't.",
      "Two committed test files is the whole evidence base. That is the honest state and it is the weakest project on this page.",
      "It has not been load-tested against production traffic volumes.",
    ],
    links: [
      { l: "Try it", h: "https://customer.djaouad.is-a.dev", external: true },
      { l: "Repository", h: "https://github.com/djoudad292/ai-customer-support-agent", external: true },
    ],
  },
{
    n: "05",
    name: "HireMe MCP Server",
    label: "Personal project · no client",
    problem:
      "MCP is how agents call tools, and almost nobody ships one. This exposes a real profile, shipped projects and fixed pricing over the Model Context Protocol, so a client or an agent can vet the work and file a structured brief without a human in the loop.",
    decisions: [
      {
        t: "Four read tools and one write tool, deliberately",
        b: "get_profile, search_projects, get_pricing, get_next_slot are side-effect free. submit_project_brief is the only write — it persists, emails and is rate limited per IP. A tool surface that is all reads is a library; one that can write is an agent, and the blast radius is why there is only one.",
      },
      {
        t: "Stateless Streamable HTTP, plus the same handlers over REST",
        b: "MCP clients hit POST /mcp; the widget and mobile app hit /api/tools/:id. One implementation, two transports, so neither drifts from the other.",
      },
      {
        t: "This is tooling, not a client system",
        b: "It proves I can build against a protocol, define a typed tool surface and reason about which tools should be permitted to act. It is not evidence of production delivery volume, and I am not presenting it as such.",
      },
    ],
    measured: [
      ["Tools", "4 read · 1 write (brief submission, persisted + emailed, rate-limited per IP)"],
      ["Repository", "30 commits · ~1,900 lines · Express + @modelcontextprotocol/sdk"],
      ["Endpoint", "live and callable by any MCP client"],
    ],
    cannot: [
      "No client and no users. It was built to demonstrate protocol competence and to make my own work machine-readable.",
      "At ~1,900 lines it is the smallest project here. I am not going to inflate it into an enterprise integration.",
      "It says nothing about delivery volume — the thing a buyer most wants to know and the thing I cannot yet evidence.",
    ],
    links: [
      { l: "MCP endpoint", h: "https://mcp.djaouad.is-a.dev/mcp", external: true },
      { l: "Repository", h: "https://github.com/djoudad292/hireme-mcp", external: true },
    ],
  },
];

const alsoBuilt = [
  {
    name: "Retrieval benchmark harness",
    desc: "The instrument behind the receptionist's numbers: threshold sweep, precision/recall/F1/FPR, committed goldset, deterministic offline embedder, zero dependencies, exits non-zero below an F1 floor, runs on every push in CI.",
    meta: "Clone and re-run with one command",
    href: "/benchmark",
  },
  {
    name: "Android builds",
    desc: "Expo/React Native APKs published as GitHub releases for the receptionist, support agent and PDF workspace, plus an embeddable JS widget on the PDF product.",
    meta: "Published release artifacts",
    href: "https://github.com/djoudad292?tab=repositories",
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
            Five systems, labelled for what they actually are.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every item here is my own work, running on my own infrastructure. None of them
            is client work, and none is presented as client work. Each case states what it
            cannot do, because a page that only lists strengths is a page you have learned
            to distrust.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Read them in this order: the first takes side-effecting actions on a database
            under human approval gates, the second is the retrieval benchmark behind the
            headline numbers, the third handles documents you already have, the fourth is a
            support agent with tool calling, and the fifth is an MCP server that lets an
            agent read this work and file a brief.
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
                No paying customer and no conversion. These are demonstrations, not revenue.
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
          <SectionHeading title="Also built" />
          <div className="space-y-3">
            {alsoBuilt.map((a) => (
              <a
                key={a.name}
                href={a.href}
                {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-base tracking-tight">{a.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{a.meta}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </a>
            ))}
          </div>
        </section>

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
              a paying client with agreed numbers — and two systems here have a benchmark
              where I&apos;d rather publish the absence. That gap closes the only way it should:
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