import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents by Industry — Clinics, Restaurants, Real Estate & More | Djaouad Frih",
  description:
    "Production AI agents tailored per industry: clinics, dental, restaurants, real estate, law firms, hotels, gyms, e-commerce and salons. Live demos, fixed prices.",
};

const doors = [
  { slug: "clinics", name: "Clinics & doctors", line: "AI receptionist that books patients 24/7" },
  { slug: "dentists", name: "Dental clinics", line: "Chair booking, treatment FAQs, recalls" },
  { slug: "restaurants", name: "Restaurants & cafés", line: "Orders and reservations at rush hour" },
  { slug: "realestate", name: "Real estate", line: "Buyer qualification from your listings" },
  { slug: "lawyers", name: "Law firms", line: "Confidential client intake & screening" },
  { slug: "hotels", name: "Hotels & riads", line: "Bookings, concierge upsells, guest requests" },
  { slug: "gyms", name: "Gyms & studios", line: "Trials, class booking, churn recovery" },
  { slug: "ecommerce", name: "E-commerce stores", line: "Order status, returns, cart recovery" },
  { slug: "salons", name: "Salons & barbershops", line: "Stylist-level booking, no-show killers" },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
          ← djaouad.tech
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          01 / Pick your industry
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          One agent.
          <span className="block text-muted-foreground">Built for how your industry actually works.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Generic chatbots answer generic questions. These are configured per industry — real
          booking flows, your data, your languages — running live on my own infrastructure first.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doors.map((d) => (
            <Link key={d.slug} href={`/${d.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
              <h2 className="font-display text-lg tracking-tight group-hover:text-primary">{d.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.line}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                See it →
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-sm leading-relaxed text-muted-foreground">
          Your industry not listed? The pattern transfers to almost any service business —{" "}
          <a href="https://calendly.com/oufr29/30min" className="text-primary underline underline-offset-4">book a call</a> and we scope yours.
        </p>
      </div>
    </main>
  );
}
