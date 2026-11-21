import type { Metadata } from "next"
import Link from "next/link"

import { MissedCallCalculator } from "@/components/missed-call-calculator"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Missed-Call ROI Calculator · What Unanswered Enquiries Cost You | Djaouad Frih",
  description:
    "A plain calculator for clinics and service businesses: enter your unanswered enquiries, average booking value, and see the monthly and annual figure a 24/7 AI receptionist can recover. Free, no email required.",
  alternates: { canonical: "https://djaouad.is-a.dev/roi" },
}

const assumptions = [
  {
    title: "Unanswered, not ignored",
    body: "It counts enquiries nobody reached in time — after hours, at lunch, on a busy line. It does not assume you answered and lost them.",
  },
  {
    title: "Your own booking value",
    body: "You set the average value and the recovery share. Nothing is benchmarked against an industry average you cannot check.",
  },
  {
    title: "Nothing is stored",
    body: "The calculation runs in your browser. No email, no form, no data leaves the page until you decide to get in touch.",
  },
]

export default function RoiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SectionWrapper>
        <div className="mx-auto max-w-[var(--container-lg)] px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <p className="font-mono text-[var(--text-xs)] uppercase tracking-widest opacity-60">
            Missed-call ROI
          </p>
          <h1 className="mt-4 text-[var(--text-4xl)] sm:text-[var(--text-5xl)] font-semibold leading-tight">
            The enquiries you never see are the ones that pay.
          </h1>
          <p className="mt-6 text-[var(--text-lg)] opacity-80">
            A practice is rarely short of demand. It is short of answers at the exact
            hour someone decides to act. Put your numbers in and watch the leak become
            a figure.
          </p>

          <div className="mt-12">
            <MissedCallCalculator />
          </div>

          <section className="mt-16">
            <h2 className="text-[var(--text-2xl)] font-semibold">What the number is based on</h2>
            <div className="mt-6 space-y-6">
              {assumptions.map((item) => (
                <div key={item.title} className="border-l-2 border-current/20 pl-5">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 opacity-75">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-xl border border-current/15 p-7">
            <h2 className="text-[var(--text-2xl)] font-semibold">Turn the estimate into evidence</h2>
            <p className="mt-3 opacity-80">
              I run a free reliability audit first: retrieval and refusal scores on
              your own documents, latency and token cost, and a server-side
              authorization review. Failures are published next to the scores. It is
              credited in full against any build that follows.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-current px-5 py-2.5 text-[var(--text-xs)] sm:text-sm font-medium text-background"
              >
                Request the free audit
              </Link>
              <Link
                href="/dental-clinics"
                className="rounded-lg border border-current/25 px-5 py-2.5 text-[var(--text-xs)] sm:text-sm font-medium"
              >
                AI receptionist for clinics
              </Link>
            </div>
            <p className="mt-6 text-[var(--text-xs)] sm:text-sm opacity-60">
              Djaouad Frih · Full-stack + AI engineer ·{" "}
              <a href="mailto:contact@djaouad.is-a.dev">contact@djaouad.is-a.dev</a>
            </p>
          </section>
        </div>
      </SectionWrapper>
    </main>
  )
}
