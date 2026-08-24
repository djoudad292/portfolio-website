import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy | Djaouad Frih" };

const sections = [
  ["What I collect", "Contact details you submit voluntarily (name, email, WhatsApp number, project briefs), and anonymous usage analytics (page views, referral source). Chat agents store conversations only to answer your questions and improve responses."],
  ["What is never collected", "No payment card data on this site (payments happen via agreed invoices). No sensitive personal data through chat agents. No selling or renting your data — ever."],
  ["How data is used", "Exclusively to respond to inquiries, deliver contracted work, and send project updates. Occasional follow-up emails are sent per legitimate business interest and stop immediately on request."],
  ["Third parties", "Hosting: Vercel, Render. Database: Neon/PostgreSQL. Email: Gmail. AI processing: model providers (Google Gemini, OpenAI) under their enterprise data terms. Each processes data under its own privacy policy."],
  ["Your rights", "Email oufr29@gmail.com at any time to access, correct or delete your data. Requests are honored within 72 hours."],
  ["Contact", "Djaouad Frih — oufr29@gmail.com — WhatsApp +213 780 68 81 25"],
];

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">← djaouad.tech</Link>
        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Legal / <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Privacy Policy</h1>
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
