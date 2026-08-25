import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarPlus, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Djaouad Frih | AI Chatbots & Agents for Your Business",
  description:
    "I build AI chatbots and agents that answer customers, book appointments and capture leads 24/7. Fixed price from $500, live in 1-3 weeks. Test my live demos first.",
};

const products = [
  { name: "AI Receptionist", desc: "Books appointments and captures leads 24/7.", url: "https://chat.djaouad.tech", img: "/shots/kit-receptionist.png" },
  { name: "PDF Workspace", desc: "Ask your documents anything. Answers with sources.", url: "https://docs.djaouad.tech", img: "/shots/kit-pdf-workspace.png" },
  { name: "Support Agent", desc: "Trained on your policies. Passes hard cases to staff.", url: "https://customer.djaouad.tech", img: "/shots/kit-support-agent.png" },
  { name: "HireMe MCP", desc: "My portfolio as a server AI assistants can read.", url: "https://mcp.djaouad.tech", img: "/shots/kit-hireme-mcp.png" },
];

const tiers = [
  { name: "Starter", price: "$500", note: "1-2 weeks", lines: ["AI chatbot trained on your content", "On your website + WhatsApp", "Answers, books, captures leads"] },
  { name: "Product Sprint", price: "$2,000", note: "2-3 weeks", featured: true, lines: ["Chatbot + document search + dashboard", "Integrations with your tools", "Weekly demos while I build"] },
  { name: "Custom product", price: "Quote", note: "2-8 weeks", lines: ["SaaS platforms, payments, mobile apps", "Scoped together on a free call"] },
];

const reviews = [
  { q: "Made my website within 2 weeks, very professional, great communication. Would highly recommend.", n: "Bilal Kadri", c: "UK", u: "https://www.facebook.com/share/r/18MiUF32rd/" },
  { q: "Complete full-stack build delivered right on schedule. That's how it's done. Star developer.", n: "Muhhamet Novruzov", c: "Cyprus", u: "https://www.facebook.com/share/r/18MiUF32rd/" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available now
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          An AI employee for<br className="hidden sm:block" /> your business.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          It answers your customers in seconds, books appointments and never
          sleeps. I build it, run it on my own site first, then deploy it for
          you. Fixed price from $500.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#demos" className="rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            See it working
          </a>
          <a href="https://calendly.com/oufr29/30min" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border px-7 py-3.5 text-sm font-semibold hover:border-primary">
            Book a free call
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Djaouad Frih · Full-stack AI engineer · Remote worldwide
        </p>
      </section>

      {/* LIVE DEMOS */}
      <section id="demos" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-center font-display text-3xl tracking-tight">Don't read a pitch. Test the products.</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
          All four run on my own domains right now. Click one, ask it something real.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {products.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
               className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary">
              <img src={p.img} alt={p.name} className="aspect-[16/9] w-full object-cover object-top" />
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-lg tracking-tight group-hover:text-primary">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="border-y border-border bg-card/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl tracking-tight">Fixed prices. No surprises.</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">Free call → fixed quote in 24h → weekly demos → you own the code.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name}
                   className={`relative rounded-2xl border p-7 ${t.featured ? "border-primary bg-card shadow-lg" : "border-border bg-background"}`}>
                {t.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg tracking-tight">{t.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl tracking-tight">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.note}</span>
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {t.lines.map((l) => (
                    <li key={l} className="flex gap-2"><Star className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl tracking-tight">Built for your industry</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Clinics · Dentists · Restaurants · Real estate · Law firms · Hotels · Gyms · Stores · Salons
        </p>
        <Link href="/industries" className="mt-6 inline-block rounded-xl border border-border px-6 py-3 text-sm font-semibold hover:border-primary">
          See how it works in yours →
        </Link>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-tight">Clients said</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <a key={r.n} href={r.u} target="_blank" rel="noopener noreferrer"
                 className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <p className="leading-relaxed text-foreground">&ldquo;{r.q}&rdquo;</p>
                <footer className="mt-4 font-mono text-xs text-muted-foreground">{r.n} · {r.c}</footer>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 pb-20 pt-4 text-center">
        <h2 className="font-display text-3xl tracking-tight">Start this week</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Free call, fixed quote within 24 hours. Or send a message — I answer fast.
        </p>
        <div className="mx-auto mt-8 grid max-w-md gap-3">
          <a href="https://calendly.com/oufr29/30min" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Book a free call <CalendarPlus className="h-4 w-4" />
          </a>
          <a href="https://wa.me/213780688125" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between rounded-xl border border-border px-6 py-4 text-sm hover:border-primary">
            WhatsApp me <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="mailto:oufr29@gmail.com"
             className="flex items-center justify-between rounded-xl border border-border px-6 py-4 text-sm hover:border-primary">
            oufr29@gmail.com <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">
          GitHub <a href="https://github.com/djoudad292" className="hover:text-primary">djoudad292</a>
          {" · "}LinkedIn <a href="https://linkedin.com/in/djaouad-frih" className="hover:text-primary">djaouad-frih</a>
          {" · "}Blog <Link href="/blog" className="hover:text-primary">notes</Link>
        </p>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          Verification habit: point any AI assistant at mcp.djaouad.tech/mcp
        </p>
        <div className="mt-8 space-x-4 font-mono text-[11px] text-muted-foreground">
          <Link href="/industries" className="hover:text-primary">Industries</Link>
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          <Link href="/terms" className="hover:text-primary">Terms</Link>
        </div>
      </section>
    </main>
  );
}
