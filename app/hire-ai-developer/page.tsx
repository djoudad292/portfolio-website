import type { Metadata } from "next";
import Link from "next/link";

import { BOOKING_URL } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "AI Systems That Work in Production | Djaouad Frih",
  description:
    "I build retrieval layers and agent loops that run on your existing Postgres estate and monolith, scored against your own documents before a single prompt is written. Fixed price. Full builds start at $3,500.",
  alternates: { canonical: "https://djaouad.is-a.dev/hire-ai-developer" },
};

const primaryBtn =
  "rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const secondaryBtn =
  "rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary";

export default function HirePage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">

        <section className="pt-28 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
            MEASURED AI SYSTEMS · FIXED PRICE
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            AI systems that work <span className="text-primary">in production.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build retrieval layers and agent loops that run on your existing Postgres estate
            and monolith, scored against your own documents before a single prompt is written.
            Fixed price. Full builds start at $3,500.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact"
               className={primaryBtn}>
              Describe your project
            </a>
            <a href="/ai-reliability-audit"
               className={secondaryBtn}>
              Start with a free audit
            </a>
            <a href={BOOKING_URL}
               className={secondaryBtn}>
              Book a free 30-min scope call
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Fixed-price builds, quoted after a free audit", "Retrieval benchmarked, not guessed", "Remote · EU hours + US-East overlap"].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">{t}</div>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">
              Start with the audit
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              The free reliability audit is how I get a client case study — measured on your
              documents first, scored against a goldset you approve, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-6">
              <Link href="/contact?for=audit" className={primaryBtn}>
                Start with the audit
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
