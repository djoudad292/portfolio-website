import type { Metadata } from "next";

import { BOOKING_URL } from "@/lib/positioning";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionCard } from "@/components/section-card";
import { PrimaryButton, SecondaryButton } from "@/components/page-buttons";

export const metadata: Metadata = {
  title: "AI Systems That Work in Production | Djaouad Frih",
  description:
    "I build retrieval layers and agent loops that run on your existing Postgres estate and monolith, scored against your own documents before a single prompt is written. Fixed price. Full builds start at $3,500.",
  alternates: { canonical: "https://djaouad.is-a.dev/hire-ai-developer" },
};

export default function HirePage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <SectionWrapper>
        <section className="pt-16 sm:pt-20 pb-10 sm:pb-14">
          <span className="inline-block rounded-md border border-border bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[var(--text-xs)] uppercase tracking-wider text-primary">
            MEASURED AI SYSTEMS · FIXED PRICE
          </span>

          <h1 className="mt-4 sm:mt-5 font-display text-[var(--text-3xl)] sm:text-[var(--text-4xl)] lg:text-[var(--text-5xl)] leading-[1.06] tracking-tight">
            AI systems that work <span className="text-primary">in production.</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-[var(--text-base)] sm:text-[var(--text-lg)] leading-relaxed text-muted-foreground">
            I build retrieval layers and agent loops that run on your existing Postgres estate
            and monolith, scored against your own documents before a single prompt is written.
            Fixed price. Full builds start at $3,500.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-3">
            <PrimaryButton href="/contact">Describe your project</PrimaryButton>
            <SecondaryButton href="/ai-reliability-audit">Start with a free audit</SecondaryButton>
            <SecondaryButton href={BOOKING_URL} external>
              Book a free 30-min scope call
            </SecondaryButton>
          </div>

          <div className="mt-6 sm:mt-7 grid gap-2 sm:gap-3 sm:grid-cols-3">
            {[
              "Fixed-price builds, quoted after a free audit",
              "Retrieval benchmarked, not guessed",
              "Remote · EU hours + US-East overlap",
            ].map((t) => (
              <SectionCard
                key={t}
                padding="4"
                className="bg-background border-border/50 text-[var(--text-xs)] sm:text-sm text-muted-foreground"
              >
                {t}
              </SectionCard>
            ))}
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <SectionCard padding="6">
            <h2 className="font-display text-[var(--text-xl)] sm:text-[var(--text-2xl)] tracking-tight">
              Start with the audit
            </h2>
            <p className="mt-2 sm:mt-3 text-[var(--text-xs)] sm:text-[var(--text-base)] leading-relaxed text-muted-foreground">
              The free reliability audit is how I get a client case study — measured on your
              documents first, scored against a goldset you approve, and the fee comes off any
              build that follows.
            </p>
            <div className="mt-4 sm:mt-5">
              <PrimaryButton href="/contact?for=audit">Start with the audit</PrimaryButton>
            </div>
          </SectionCard>
        </section>
      </SectionWrapper>
    </main>
  );
}
