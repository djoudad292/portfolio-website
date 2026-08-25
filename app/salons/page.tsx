import type { Metadata } from "next";
import Link from "next/link";
import { Scissors, CalendarCheck, Sparkles, Database, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Booking Agent for Salons & Barbershops | Djaouad Frih",
  description: "Salon AI agent: books appointments 24/7, answers service and price questions, fills empty slots automatically. Arabic, French, English. From $500.",
};

const features = [
  { icon: Scissors, title: "Books by stylist & service", body: "Cut, color, beard, braids - each with the right duration, price and specialist, from your real setup." },
  { icon: CalendarCheck, title: "No-shows drop sharply", body: "Confirmations and reminders go out automatically; last-minute cancellations trigger instant re-fill offers." },
  { icon: Sparkles, title: "Quiet days fill themselves", body: "Slow Tuesday? Regulars get a gentle offer of open slots before the day arrives." },
  { icon: Database, title: "Grounded in your price list", body: "Services, durations and prices answered strictly from your data - no invented offers." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
          ← djaouad.tech
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          01 / For salons & barbershops
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          She wanted Saturday 5 PM.
          <span className="block text-muted-foreground">You replied Sunday.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Whoever confirms first wins the booking. This agent checks your stylists' real availability, books the slot and sends reminders.
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
                <li key="Booking agent live on site & WhatsApp" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Booking agent live on site & WhatsApp</li>
                <li key="Reminder messages included" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Reminder messages included</li>
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
                <li key="Stylist-level calendar sync" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Stylist-level calendar sync</li>
                <li key="Smart quiet-slot filling" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Smart quiet-slot filling</li>
                <li key="Owner dashboard with retention stats" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Owner dashboard with retention stats</li>
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
