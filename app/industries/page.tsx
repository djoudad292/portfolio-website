import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries — AI Systems Applied to Real Businesses | Djaouad Frih",
  description:
    "Examples of how AI agents, knowledge bases, and automation apply across different business types. Each system is built custom and grounded in your own data.",
};

const industries = [
  { slug: "clinics-doctors", name: "Clinics & doctors", text: "Automated appointment booking, patient communication, and lead capture — grounded in your practice's own knowledge base." },
  { slug: "dental-clinics", name: "Dental clinics", text: "Patient intake, appointment scheduling, and treatment Q&A — always available, even outside business hours." },
  { slug: "restaurants-cafes", name: "Restaurants & cafés", text: "Order taking, reservation management, and menu questions — handling peak hours without missing a customer." },
  { slug: "real-estate", name: "Real estate", text: "Property inquiries, listing lookups, and viewing bookings — responding instantly from your listings database." },
  { slug: "law-firms", name: "Law firms", text: "Client intake, consultation booking, and initial case screening — answering common questions while your team focuses on cases." },
  { slug: "hotels-riads", name: "Hotels & riads", text: "Guest communication, room availability checks, and booking confirmation — serving guests across time zones." },
  { slug: "gyms-studios", name: "Gyms & studios", text: "Trial session booking, membership inquiries, and class scheduling — converting interest into signups." },
  { slug: "online-stores", name: "Online stores", text: "Order status, product questions, and return processing — handling repetitive support at scale." },
  { slug: "salons-barbershops", name: "Salons & barbershops", text: "Stylist availability checks, appointment booking, and service descriptions — confirming bookings without manual effort." },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
          &larr; djaouad.tech
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Examples
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          AI systems applied to real businesses.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          These are examples of how the same technology — AI agents, knowledge bases,
          and automation — applies across different business types. Every system is built
          custom for the specific use case.
        </p>

        <div className="mt-10 space-y-4">
          {industries.map((i) => (
            <div key={i.name} id={i.slug} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg tracking-tight">{i.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/25 bg-primary/10 p-8 text-center">
          <p className="font-display text-xl tracking-tight text-foreground">
            Have a specific project in mind?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell me what you need built. I&apos;ll review the scope and send a fixed quote.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Describe your project
          </a>
        </div>
      </div>
    </main>
  );
}
