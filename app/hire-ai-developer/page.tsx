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
  "w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 sm:py-3.5";
const secondaryBtn =
  "w-full rounded-xl border border-border bg-card px-6 py-4 text-sm font-semibold transition-colors hover:border-primary sm:py-3.5";

export default function HirePage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">

        <section className="pt-16 sm:pt-20 pb-10 sm:pb-14">
          <span className="inline-block rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-primary">
            MEASURED AI SYSTEMS · FIXED PRICE
          </span>

          <h1 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.06] tracking-tight">
            AI systems that work <span className="text-primary">in production.</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
            I build retrieval layers and agent loops that run on your existing Postgres estate
            and monolith, scored against your own documents before a single prompt is written.
            Fixed price. Full builds start at $3,500.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:gap-3">
            <a href="/contact" className={primaryBtn}>
              Describe your project
            </a>
            <a href="/ai-reliability-audit" className={secondaryBtn}>
              Start with a free audit
            </a>
            <a href={BOOKING_URL} className={secondaryBtn}>
              Book a free 30-min scope call
            </a>
          </div>

          <div className="mt-6 sm:mt-7 grid gap-2 sm:gap-3 sm:grid-cols-3">
            {["Fixed-price builds, quoted after a free audit", "Retrieval benchmarked, not guessed", "Remote · EU hours + US-East overlap"].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card px-3 sm:px-4 py-2 sm:py-3 text-[11px] sm:text-sm text-muted-foreground">{t}</div>
            ))}
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="rounded-2xl border border-border bg-card p-3 sm:p-4 sm:p-6">
            <h2 className="font-display text-xl sm:text-2xl tracking-tight">
              Start with the audit
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              The free reliability audit is how I get a client case study — measured on your
              documents first, scored against a goldset you approve, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-4 sm:mt-5">
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
