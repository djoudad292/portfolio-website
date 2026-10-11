import type { Metadata } from "next";
import Link from "next/link";
import { TryYourSite } from "@/components/try-your-site";

export const metadata: Metadata = {
  title: "AI Receptionist for Dental Clinics · After-Hours Booking, No-Shows | Djaouad Frih",
  description:
    "A multilingual AI receptionist for dental clinics: answers on WhatsApp after closing, confirms appointments, reduces no-shows, and hands anything clinical to your team with a drafted reply. Live demo, one-week pilot.",
  alternates: { canonical: "https://djaouad.is-a.dev/dental-clinics" },
};

const leak = [
  {
    title: "The 9pm enquiry",
    body: "Someone sees your Instagram at 21:40, wants Invisalign, wants to know the price and your next free slot. Your phone is off. They message, get nothing, and book with the clinic that answered.",
  },
  {
    title: "The form that collects instead of booking",
    body: "A 16-field form gets the patient to hand you their details, then a human still has to phone back to fix the actual appointment. They do the work, then they wait. Most of them don't come back.",
  },
  {
    title: "The no-show nobody chased",
    body: "A confirmed veneer or implant appointment is high-ticket and cancellable with a text. One reminder, sent at the right hour, is often the difference between a full slot and an empty one.",
  },
];

const does = [
  "Answers in French, Arabic and English, the moment the message arrives — not next morning",
  "Quotes from your own price list and treatment data, so the first reply is real",
  "Confirms and holds the appointment instead of collecting a message for someone to call back",
  "Sends reminders with one-tap rebooking to cut no-shows",
  "Escalates anything clinical to a person, with the conversation attached and a reply already drafted",
];

const doesNot = [
  "Diagnose, advise on symptoms, or make a clinical judgement",
  "Replace your receptionist, your practice manager, or your phone line",
  "Invent prices or availability that your own data does not contain",
];

export default function DentalClinicsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest opacity-60">
        Dental clinics
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
        The patient who messages after closing is already gone.
      </h1>
      <p className="mt-6 text-lg opacity-80">
        Most dental clinics are not short of patients. They are short of
        answered enquiries at the exact hour the patient decides to act. That
        is a scheduling problem, not a marketing one.
      </p>

      <section className="mt-14 space-y-8">
        {leak.map((item) => (
          <div key={item.title} className="border-l-2 border-current/20 pl-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 opacity-75">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">What it actually does</h2>
        <ul className="mt-5 space-y-3">
          {does.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="opacity-50">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">What it does not do</h2>
        <ul className="mt-5 space-y-3">
          {doesNot.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="opacity-50">
                —
              </span>
              <span className="opacity-70">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-xl border border-current/15 p-7">
        <h2 className="text-2xl font-semibold">Try it on your own clinic</h2>
        <p className="mt-3 opacity-80">
          Not a recording and not a generic bot. Paste your website and it reads
          your real treatments, prices and hours before it answers a single
          question.
        </p>
        <TryYourSite lead="dental-clinics" defaultLabel="Build my clinic's demo" />

        <p className="mt-7 text-sm opacity-60">Prefer to look at a running system first?</p>
        <div className="mt-3 flex flex-wrap gap-4">
          <Link
            href="https://chat.djaouad.is-a.dev"
            className="rounded-lg border border-current/25 px-5 py-2.5 text-sm font-medium"
          >
            chat.djaouad.is-a.dev
          </Link>
          <Link
            href="https://customer.djaouad.is-a.dev"
            className="rounded-lg border border-current/25 px-5 py-2.5 text-sm font-medium"
          >
            customer.djaouad.is-a.dev
          </Link>
        </div>
      </section>

      <section className="mt-14 rounded-xl border border-current/15 p-7">
        <h2 className="text-2xl font-semibold">The pilot</h2>
        <p className="mt-3 opacity-80">
          One week. One treatment. One location. Your own price list and
          opening hours, nothing generic.
        </p>
        <p className="mt-3 opacity-80">
          Measure it on one number — bookings that came from outside opening
          hours. If that number does not move, you stop and I have lost a week,
          not you a fee.
        </p>
        <p className="mt-6">
          <Link
            href="/contact"
            className="rounded-lg bg-current px-5 py-2.5 text-sm font-medium text-background"
          >
            Request the pilot
          </Link>
        </p>
        <p className="mt-6 text-sm opacity-60">
          Djaouad Frih · Full-stack + AI engineer ·{" "}
          <a href="mailto:contact@djaouad.is-a.dev">contact@djaouad.is-a.dev</a>
        </p>
      </section>

      <p className="mt-16 text-sm opacity-60">
        Prefer a broader write-up?{" "}
        <Link href="/industries/clinics-doctors" className="underline">
          Clinics and service businesses
        </Link>
        .
      </p>
    </main>
  );
}