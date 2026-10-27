import type { Metadata } from "next";
import Link from "next/link";

import { AUDIT_OFFER, PRICE_ANCHOR } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Free AI Reliability Audit · Retrieval, Refusals & Latency Measured | Djaouad Frih",
description:
      `A free ${AUDIT_OFFER.duration} audit of your AI system on your own documents: precision, recall and F1 against a goldset built from your corpus, refusal rate on out-of-scope questions, citation correctness, latency, token cost and a permissions review. Failures published alongside the scores.`,
  alternates: { canonical: "https://djaouad.is-a.dev/ai-reliability-audit" },
  openGraph: {
    title: "Free AI Reliability Audit · Djaouad Frih",
    description:
      "Five working days. Measured on your documents. Credited in full against any build that follows.",
    url: "https://djaouad.is-a.dev/ai-reliability-audit",
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

const measured = [
  {
    t: "Precision, recall and F1",
    b: "Measured against a goldset built from your corpus, not a demo set. If retrieval misses, the answer is downstream of a known-bad input — this is the first thing to check.",
  },
  {
    t: "Refusal rate on out-of-scope questions",
    b: "The number that tells you whether the system knows what it doesn't know. A system that answers everything has no boundary, and you will find that out in production.",
  },
  {
    t: "Citation correctness",
    b: "Does the answer point at the passage that actually supports it, or merely at a passage from the same document? These are different, and only one of them is useful.",
  },
  {
    t: "Latency and cost",
    b: "p50 and p95, and token cost per conversation, so the economics conversation happens against real numbers instead of an estimate.",
  },
  {
    t: "Server-side authorization review",
    b: "Retrieval that ignores permissions is the fastest way an AI pilot exposes data it should not. This is checked before anything else.",
  },
  {
    t: "Failures, published alongside the scores",
    b: "The report lists what broke. An audit that only reports wins is marketing, and you would be able to tell.",
  },
];

const forWho = [
  "A mid-market team whose AI feature works in a demo and stalls on real traffic",
  "An agency with a client-facing AI system nobody has independently measured",
  "A team about to launch and wanting to know what breaks before customers find it",
  "Anyone who has been told a system is 'working' and has never seen the numbers",
];

const notFor = [
  "You want a demo, a strategy deck, or a sales call. This is none of those three.",
  "You have no documents and no corpus to score against. There is nothing to measure yet.",
  "You want a guaranteed accuracy figure in advance. I will not commit to a number I haven't measured on your data.",
  "You need the answer before the audit turnaround. Then this isn't the right entry point.",
];

const isNot = [
  "Not a demo. It runs against your data, not mine.",
  "Not a strategy deck. There is no roadmap in it.",
  "Not a sales call. If the report says you don't need this yet, that's the report, and you keep it.",
  "Not a commitment to work together. Scoping a build without looking at your data is guessing, and you would be paying for the guess.",
];

const delivered = [
  "A written report — PDF and markdown — that you own outright",
  "The goldset built from your corpus, in your repository, so you can rerun it",
  "The measurements themselves, not just the conclusions",
  "The permission findings, listed explicitly",
  "A recommendation, including \"you don't need this yet\" if that's the truth",
];

export default function AiReliabilityAuditPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            FREE · {AUDIT_OFFER.duration.toUpperCase()}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            Most AI pilots die between the demo and production. That&rsquo;s the part I do.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Only 25% of enterprises have moved 40% or more of their AI pilots into
            production.
            <span className="font-mono text-xs"> Deloitte, 21 Jan 2026</span> The rest are
            stuck somewhere between a convincing demo and something you can be paged for.
            This audit measures where exactly they&rsquo;re stuck.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?for=audit" className={primaryBtn}>
              Request the audit
            </Link>
            <Link href="/benchmark" className={secondaryBtn}>
              See a benchmark you can rerun
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="What gets measured" />
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            {AUDIT_OFFER.summary}
          </p>
          <div className="mt-8 space-y-5">
            {measured.map((item) => (
              <div key={item.t} className="border-l-2 border-border pl-5">
                <h3 className="font-display text-lg tracking-tight">{item.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="What you get" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-2">
              {delivered.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-muted-foreground">{AUDIT_OFFER.terms}</p>
          </div>
        </section>

        <section className="pb-16">
          <SectionHeading title="Who it's for" />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg tracking-tight">Worth requesting if</h3>
              <ul className="mt-4 space-y-2">
                {forWho.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg tracking-tight">Not worth it if</h3>
              <ul className="mt-4 space-y-2">
                {notFor.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="text-primary">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Eligibility is simple: you need a real corpus, a real system to point at it, and
            someone who owns the process for the five days. I review every audit request
            personally and decline most. That is the filter — not a form.
          </p>
        </section>

        <section className="pb-16">
          <SectionHeading title="What it is not" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-2">
              {isNot.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="text-primary">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The reason this is free: it replaces the sales pitch with the work. Most studios
            argue from slides and case studies, and you can argue back from a report. If the
            answer is that you should not build this yet, the report will say that and you
            will still have the map.
          </p>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">Send me something to measure.</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A folder of documents, a link to a knowledge base, or a description of the
              system that isn&rsquo;t performing. {AUDIT_OFFER.duration} later you get the report.
              If you want to keep building afterwards, the audit comes off the price —{" "}
              {PRICE_ANCHOR.toLowerCase()}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?for=audit" className={primaryBtn}>
                Request the audit
              </Link>
              <Link href="/pricing" className={secondaryBtn}>
                See the full price map
              </Link>
            </div>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              Reply within one business day — including &ldquo;this isn&rsquo;t for you&rdquo;.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}