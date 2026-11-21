import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionCard } from "@/components/section-card";

export const metadata: Metadata = {
  title: "Who I Work Best With · Property Management, E-commerce, Clinics, Legal, Founders, Agencies | Djaouad Frih",
  description:
    "The six segments where production AI systems pay for themselves fastest: maintenance operations, high-volume support, after-hours lead loss, document-heavy work, AI-first products, and agencies needing delivery capacity.",
  alternates: { canonical: "https://djaouad.is-a.dev/industries" },
};

const segments = [
  {
    slug: "property-management",
    name: "Property managers running 100–5,000 units",
    text: "Maintenance requests arrive on WhatsApp, email, phone and tenant portals, and the triage, quoting, lease check, owner approval and dispatch all happen by hand. An orchestration layer that sits on the property software you already run: one intake queue, lease-aware triage, vendor dispatch, an owner-approval gate, and a field-crew app that closes the loop with photo evidence.",
    fit: "Composition of the live receptionist and document workspace, with a written demo spec",
  },
  {
    slug: "online-stores",
    name: "E-commerce and SaaS with high-volume support",
    text: "Order status, returns, product detail, plan limits. The same questions all day, answered by an agent that pulls from your own knowledge base, opens the ticket, and escalates the genuine edge cases. Built to shrink a support queue, not to add another inbox.",
    fit: "Support Agent, live at customer.djaouad.is-a.dev",
  },
  {
    slug: "clinics-doctors",
    name: "Clinics and service businesses losing after-hours leads",
    text: "Enquiries that arrive at 9pm and are answered the next morning, if at all. An always-on receptionist that answers, books, captures and qualifies the lead, routes it to the right department, and hands off to a person with a drafted reply ready to send.",
    fit: "AI Receptionist, live at chat.djaouad.is-a.dev",
  },
  {
    slug: "law-firms",
    name: "Legal, compliance and research teams with document-heavy work",
    text: "Contracts, filings, policies and reports where the answer is worthless without the citation. Vector retrieval over your own corpus, sentence-aware chunking, and a source attached to every response so a reviewer can check it in seconds.",
    fit: "Document workspace, live at docs.djaouad.is-a.dev",
  },
  {
    slug: "ai-founders",
    name: "Founders building an AI-first product",
    text: "You know what the agent should do and who it is for. The work is the parts that make it real: retrieval that finds the right passage, tools the agent can call safely, latency and cost you can see, and a backend that holds up when a customer is looking at it.",
    fit: "Full system builds, from the agent up to the deployed application",
  },
  {
    slug: "agencies",
    name: "Agencies needing delivery capacity",
    text: "You have the client, the agreed scope and the date. You need a production engineer who can own a build end to end and hand over code and deployment you own outright. Fixed scope, milestones, no hourly surprises.",
    fit: "White-label delivery, fixed-price per project",
  },
];

const alsoApplies = [
  "Real estate agencies",
  "Hotels and riads",
  "Restaurants and cafés",
  "Gyms and studios",
  "Salons and barbershops",
  "Recruiters and staffing firms",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SectionWrapper>
        <Link href="/" className="font-mono text-[var(--text-xs)] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
          &larr; djaouad.is-a.dev
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-[var(--text-xs)] uppercase tracking-[0.25em] text-primary">
          Who I work best with
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-[var(--text-4xl)] sm:text-[var(--text-5xl)] leading-[1.05] tracking-tight">
          Six kinds of buyer get the most out of this.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          These are the segments where a production AI system pays for itself
          fastest, because the workload is repetitive, the data already exists,
          and a wrong answer has somewhere obvious to land. Three of them have
          a live system you can open right now.
        </p>

        <div className="mt-10 space-y-4">
          {segments.map((s) => (
            <SectionCard key={s.slug} padding="6" id={s.slug}>
              <h2 className="font-display text-[var(--text-lg)] tracking-tight">{s.name}</h2>
              <p className="mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <p className="mt-3 font-mono text-[var(--text-xs)] leading-relaxed text-primary">
                <span className="text-muted-foreground">Closest thing I have shipped:</span> {s.fit}
              </p>
            </SectionCard>
          ))}
        </div>

        <SectionCard padding="6" className="mt-8 border-dashed border-border bg-card/50">
          <h2 className="font-display text-[var(--text-lg)] tracking-tight">Also applies to</h2>
          <p className="mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">
            The same engineering transfers to these. Worth a conversation, but I
            have not shipped a dedicated system in each one, so I am not going to
            imply otherwise.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {alsoApplies.map((a) => (
              <span key={a} className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[var(--text-xs)] text-muted-foreground">
                {a}
              </span>
            ))}
          </div>
        </SectionCard>

        <SectionCard padding="8" className="mt-10 border-primary/25 bg-primary/10 text-center">
          <p className="font-display text-[var(--text-xl)] tracking-tight text-foreground">
            Not on this list, but you think it fits?
          </p>
          <p className="mt-2 text-[var(--text-xs)] sm:text-sm text-muted-foreground">
            Tell me what you need built. I&apos;ll review the scope and send a fixed quote.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 sm:px-8 py-3 text-[var(--text-xs)] sm:text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Describe your project
          </Link>
        </SectionCard>
      </SectionWrapper>
    </main>
  );
}
