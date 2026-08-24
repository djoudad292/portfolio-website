import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Service | Djaouad Frih" };

const sections = [
  ["Services", "Freelance software engineering services: AI agent development, RAG systems, web/mobile product builds. Every engagement is defined by a written scope with fixed price, deliverables and timeline before work begins."],
  ["Payment terms", "Milestone-based: a starting payment secures the slot, remaining payments release as working software is demonstrated. Invoices due within 7 days. Work may pause on unpaid overdue milestones."],
  ["Intellectual property", "On full payment, all project source code and deliverables transfer to the client. Pre-existing tools and libraries used remain under their original licenses."],
  ["Revisions & scope", "Each milestone includes the revisions stated in its scope. New features after scope approval are quoted separately before any work starts."],
  ["Warranty & support", "Post-launch support window per contract (7–30 days depending on tier). After that, support and maintenance are available by separate agreement."],
  ["Liability", "Services are provided with professional care but without guarantee of specific business outcomes. Total liability is limited to fees paid for the engagement in question."],
  ["Communication", "English, French or Arabic. Response within one business day; weekly demos during active builds."],
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">← djaouad.tech</Link>
        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Legal / <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Last updated: August 2026</p>
        {sections.map(([t, b]) => (
          <div key={t} className="mt-8">
            <h2 className="font-display text-xl tracking-tight">{t}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
