import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle, Database, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Receptionist for Dental Clinics - Books Patients 24/7 | Djaouad Frih",
  description: "Dental AI receptionist: answers calls and WhatsApp in Arabic, French, English, books appointments, handles treatment FAQs. Live demo, fixed price from $500.",
};

const features = [
  { icon: CalendarCheck, title: "Fills your real schedule", body: "Syncs with your calendar so double-bookings simply cannot happen." },
  { icon: MessageCircle, title: "Treatment FAQs answered", body: "Implants vs bridges, whitening duration, payment plans - explained politely, from your own data." },
  { icon: Database, title: "Recalls and follow-ups", body: "Automatic reminders cut no-shows; post-treatment follow-ups bring patients back on schedule." },
  { icon: ShieldCheck, title: "Data-conscious by design", body: "Qualifies on non-sensitive fields only and escalates clinical questions to your staff." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
          ← djaouad.tech
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          01 / For dental clinics
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Every missed call is a
          <span className="block text-muted-foreground">crown for your competitor.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Dental patients book with whoever answers first. This receptionist picks up every call and message, explains treatments from your own price list, checks your real availability and books the chair - nights, weekends and rush hours included.
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
                <li key="Receptionist live on site & WhatsApp" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Receptionist live on site & WhatsApp</li>
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
                <li key="Patient-intake flow with booking" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Patient-intake flow with booking</li>
                <li key="Automated recall & no-show reminders" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Automated recall & no-show reminders</li>
                <li key="Staff dashboard with conversation history" className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />Staff dashboard with conversation history</li>
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
