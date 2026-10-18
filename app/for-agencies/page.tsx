import type { Metadata } from "next";
import Link from "next/link";

import { AGENCY_OFFER } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "White-Label AI Delivery for Agencies · Djaouad Frih",
  description:
    "Scoped, fixed-price white-label AI builds for software agencies and product studios. Agents, RAG, and the application around them — delivered under your brand, your margin, your client.",
  alternates: { canonical: "https://djaouad.is-a.dev/for-agencies" },
};

const primaryBtn =
  "inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90";
const chip =
  "rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] transition-colors hover:border-primary hover:text-primary";

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

const contractingSteps = [
  {
    title: "NDA",
    body: "We sign NDAs first; your scope and data stay yours.",
  },
  {
    title: "Scope",
    body: "I scope strictly to the signed AI/RAG feature — no open-ended discovery.",
  },
  {
    title: "Fixed price",
    body: "A milestone-based price, locked before any code. Change orders only.",
  },
  {
    title: "Weekly delivery",
    body: "Deliveries land at your cadence and in your repo, not mine.",
  },
  {
    title: "Handover",
    body: "Source, infra credentials, and a handover doc transfer to your accounts.",
  },
  {
    title: "Defect window",
    body: "30-day defect window. Fixes inside it, no extra charge.",
  },
];

const whatYouGet = [
  ...AGENCY_OFFER.deliverables,
  "I never appear in your proposal, deck, or client calls",
];

const whatIDontDo = [
  "I don't sit in on your sales calls or speak to your client.",
  "I don't become your ongoing support or account manager after handover.",
  "I don't sell strategy decks — we scope from the work you've already sold.",
  "I don't stay on as a permanent hire; this is contracted delivery.",
];

const disqualifiers = [
  "you want me to speak to your client or sit in on your sales calls",
  "you need it live in under two weeks",
  "the budget is under $5,000",
];

export default function ForAgencies() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="relative mx-auto max-w-4xl px-6">
        <section className="pt-20 pb-16">
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            AI ENGINEERING · WHITE-LABEL DELIVERY
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
            The AI feature your agency sold — already built, tested, and handed over.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            White-label AI delivery for software agencies and product studios. Agents,
            RAG, and the application around them — scoped, fixed-price, milestone-based.
            Your client, your brand, your margin. I never appear in your proposal.
          </p>

          <div className="mt-8">
            <Link href="/contact?for=agency" className={primaryBtn}>
              Bring capacity to your agency →
            </Link>
          </div>
        </section>

        <section id="who" className="pb-16">
          <SectionHeading title="Who it's for" />
          <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            5–50 person agencies and product studios with signed AI or RAG work and no
            one to deliver it on your team.
          </p>
          <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            AI skills are now the single hardest role to fill globally — 72% of 39,000
            employers across 41 countries report difficulty, and AI skills overtook
            engineering and IT (ManpowerGroup, 2026 Talent Shortage). Meanwhile,
            subcontractor cost as a share of revenue at major IT providers has been
            rising 10–20bps per quarter for ten consecutive quarters (Moody's, 22 Sep
            2026). This is the capacity gap this page fills.
          </p>
        </section>

        <section id="contracting" className="pb-16">
          <SectionHeading title="How contracting works" />
          <ol className="grid gap-6 sm:grid-cols-2">
            {contractingSteps.map((s) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {s.title}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="what-you-get" className="pb-16">
          <SectionHeading title="What you get · What I don't do" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                What you get
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 pl-1 text-sm text-muted-foreground">
                {whatYouGet.map((d) => (
                  <li key={d} className="leading-snug">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                What I don't do
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 pl-1 text-sm text-muted-foreground">
                {whatIDontDo.map((d) => (
                  <li key={d} className="leading-snug">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="proof" className="pb-16">
          <SectionHeading title="Proof" />
          <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            Everything below is public and openable — not a claim you have to take.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="https://github.com/djoudad292"
              target="_blank"
              rel="noopener noreferrer"
              className={chip}
            >
              repositories →
            </a>
            <a
              href="https://github.com/djoudad292/ai-virtual-receptionist/actions"
              target="_blank"
              rel="noopener noreferrer"
              className={chip}
            >
              CI run history →
            </a>
            <Link href="/benchmark" className={chip}>
              retrieval benchmark →
            </Link>
            <Link href="/work" className={chip}>
              work →
            </Link>
          </div>
          <p className="mt-6 max-w-3xl font-mono text-xs text-muted-foreground">
            Two named client references exist. Both were website builds, not AI
            systems, and I've labelled them as such on the homepage.
          </p>
        </section>

        <section id="rate" className="pb-16">
          <SectionHeading title="Rate" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              From $12,000 / month
            </p>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Or per-project from $8,000. Minimum three weeks. Deposit under 50%.
            </p>
          </div>
        </section>

        <section id="not-for-you" className="pb-16">
          <SectionHeading title="This is not for you if…" />
          <ul className="list-disc list-inside space-y-2 pl-1 text-sm text-muted-foreground">
            {disqualifiers.map((d) => (
              <li key={d} className="leading-snug">
                {d}
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-24">
          <h2 className="font-display text-3xl tracking-tight">
            Start with the audit, not with a sales call.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            The free reliability audit is five working days, scoped against your own
            documents, and you keep the report either way — including the line that says
            this isn't the right fit. If it is, it becomes the written spec for your next
            build.
          </p>
          <div className="mt-6">
            <Link href="/contact?for=agency" className={primaryBtn}>
              Bring capacity to your agency →
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            contact@djaouad.is-a.dev
          </p>
        </section>
      </div>
    </main>
  );
}
