import type { Metadata } from "next";
import Link from "next/link";
import { BedDouble, ConciergeBell, Database, Languages, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Booking & Concierge Agent for Hotels | Djaouad Frih",
  description: "Hotel AI agent: takes room bookings, answers amenity questions, upsells services, handles guest requests 24/7 in Arabic, French, English.",
};

const features = [
  { icon: BedDouble, title: "Bookings from real inventory", body: "Room types, dates, occupancy and rates checked live - no overbooking, no lost reservations." },
  { icon: ConciergeBell, title: "Concierge upsells", body: "Airport pickup, dinner reservations, excursions - offered naturally at the right moment of the conversation." },
  { icon: Database, title: "Grounded in your property", body: "Amenities, policies, seasons and rates answered strictly from your information, with sources." },
  { icon: Languages, title: "Arabic, French, English", body: "International guests switch languages mid-sentence. The agent keeps up." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
          ← djaouad.tech
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          01 / For hotels & riads
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          The 11 PM booking question
          <span className="block text-muted-foreground">went to the hotel next door.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Travelers message five properties and reserve wherever someone answers. This agent confirms availability from your real room inventory, takes bookings, answers the usual hundred questions, and sells late checkouts and airport transfers while you sleep.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://chat.djaouad.tech" className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Test the live agent
          </a>
          <a href="https://calendly.com/oufr29/30min" className="rounded-lg border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
            Book a free scoping call
          </a>
        </div>

        <p className="mb-4 mt-20 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          02 / What it does
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
              <h2 className="mt-4 font-display text-lg tracking-tight">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <p className="mb-4 mt-20 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          03 / Fixed prices. No surprises.
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-display text-lg tracking-tight">AI Feature</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl tracking-tight">$500</span>
              <span className="text-sm text-muted-foreground">starting at</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
                <li key="Booking assistant live on site & WhatsApp" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Booking assistant live on site & WhatsApp</li>
                <li key="Arabic, French, English" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Arabic, French, English</li>
                <li key="Launch in about a week" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Launch in about a week</li>
            </ul>
          </div>
          <div className="relative rounded-2xl border border-primary bg-card p-7 shadow-lg">
            <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Most popular</span>
            <h3 className="font-display text-lg tracking-tight">Product Sprint</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl tracking-tight">$2,000</span>
              <span className="text-sm text-muted-foreground">typical</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
                <li key="Live inventory & rate logic" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Live inventory & rate logic</li>
                <li key="Upsell flows with revenue reporting" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Upsell flows with revenue reporting</li>
                <li key="Front-desk dashboard & handoff" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Front-desk dashboard & handoff</li>
                <li key="2-3 weeks, weekly demos, code yours" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />2-3 weeks, weekly demos, code yours</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/50 p-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            The verification habit
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Don&apos;t take this page&apos;s word for anything. Every product I sell runs on my own domains
            first — test them, then decide. Prefer an agent? Point any AI assistant at 
            <span className="font-mono text-foreground">mcp.djaouad.tech/mcp</span> and let it inspect my work directly.
          </p>
        </div>
      </div>
    </main>
  );
}
