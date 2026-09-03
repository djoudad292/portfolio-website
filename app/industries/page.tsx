import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents for Your Industry | Djaouad Frih",
  description:
    "AI agents and RAG applied to real businesses — clinics, real estate, law firms, hospitality, e-commerce and more. Grounded in your own data, live demos, fixed-price and milestone-based.",
};

const industries = [
  { slug: "clinics-doctors", name: "Clinics & doctors", text: "Most clinics miss patient calls during busy hours. Those patients book somewhere else. Your receptionist answers every call and message and books them into your calendar.", demo: "https://chat.djaouad.tech", demoLabel: "Try receptionist live →" },
  { slug: "dental-clinics", name: "Dental clinics", text: "Patients call. If nobody answers, they call another dentist. Yours always answers, explains your treatments and prices, and books the appointment.", demo: "https://chat.djaouad.tech", demoLabel: "Try receptionist live →" },
  { slug: "restaurants-cafes", name: "Restaurants & cafés", text: "During rush hour the phone gets ignored - and that is a table lost. Your agent takes every order and reservation on your website and WhatsApp, right away.", demo: "https://chat.djaouad.tech", demoLabel: "Try live demo →" },
  { slug: "real-estate", name: "Real estate", text: "Buyers message five agencies and visit whoever replies first. Your agent replies in seconds from your listings, filters serious buyers and books viewings.", demo: "https://chat.djaouad.tech", demoLabel: "Try live demo →" },
  { slug: "law-firms", name: "Law firms", text: "People contact three law firms and hire whoever answers first. Your agent answers right away, asks the right questions and books the consultation.", demo: "https://customer.djaouad.tech", demoLabel: "Try support agent live →" },
  { slug: "hotels-riads", name: "Hotels & riads", text: "Guests message five hotels and book wherever someone answers. Your agent checks your real rooms, takes bookings and sells late checkouts while you sleep.", demo: "https://chat.djaouad.tech", demoLabel: "Try live demo →" },
  { slug: "gyms-studios", name: "Gyms & studios", text: "People decide on a gym within hours. Your agent answers right away, books trial sessions and follows up with the ones who go quiet.", demo: "https://chat.djaouad.tech", demoLabel: "Try live demo →" },
  { slug: "online-stores", name: "Online stores", text: "More sales means more support messages. Your agent handles order status, product questions and returns instantly, using your catalog.", demo: "https://customer.djaouad.tech", demoLabel: "Try support agent live →" },
  { slug: "salons-barbershops", name: "Salons & barbershops", text: "Whoever confirms first wins the booking. Your agent checks your stylists' real availability, books the slot and sends reminders.", demo: "https://chat.djaouad.tech", demoLabel: "Try receptionist live →" },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
          ← djaouad.tech
        </Link>

        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          For your business
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          An AI agent that knows your work.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Same idea everywhere: it answers your customers in seconds, books them,
          and passes the hard cases to you. Built per industry, running live on my
          own site first.
        </p>

        <div className="mt-10 space-y-4">
          {industries.map((i) => (
            <div key={i.name} id={i.slug} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg tracking-tight">{i.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
              <p className="mt-3 font-mono text-xs">
                <a href={i.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{i.demoLabel}</a>
                <span className="text-muted-foreground"> · </span>
                <a href="https://calendly.com/oufr29/30min" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:underline">Book free call</a>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-primary px-6 py-4 text-center">
          <a href="https://calendly.com/oufr29/30min" className="font-semibold text-primary-foreground">
            Book a free call — get a fixed quote within 24h
          </a>
        </div>
      </div>
    </main>
  );
}
