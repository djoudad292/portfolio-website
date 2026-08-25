import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Djaouad Frih — AI chatbots for your business",
  description:
    "I build AI assistants that answer customers and book appointments 24/7. Fixed price from $500, live in 1-2 weeks. Try the live demo first.",
};

const work = [
  { name: "AI Receptionist", desc: "Made for clinics and salons: answers in under a second, books the slot, sends reminders.", url: "https://chat.djaouad.tech", img: "/shots/kit-receptionist.png",
    repo: "https://github.com/djoudad292/ai-virtual-receptionist", apk: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk" },
  { name: "PDF Workspace", desc: "Drop a 40-page contract, ask what the payment terms are. It replies with page numbers.", url: "https://docs.djaouad.tech", img: "/shots/kit-pdf-workspace.png",
    repo: "https://github.com/djoudad292/smart-pdf-workspace", apk: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk" },
  { name: "Support Agent", desc: "Reads your return policy once, then handles the same question 400 times without complaining.", url: "https://customer.djaouad.tech", img: "/shots/kit-support-agent.png",
    repo: "https://github.com/djoudad292/ai-customer-support-agent", apk: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk" },
  { name: "HireMe MCP", desc: "This whole site, readable by Claude and ChatGPT. Listed in the official registry.", url: "https://mcp.djaouad.tech", img: "/shots/kit-hireme-mcp.png",
    repo: "https://github.com/djoudad292/hireme-mcp", apk: "https://github.com/djoudad292/hireme-mcp/releases/download/latest-apk/hireme-mcp.apk" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      

      <div className="relative mx-auto max-w-4xl px-6">

        {/* HERO */}
        <section className="pt-20 pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-wide text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Booking projects — next slot early September
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            I&apos;m Djaouad. I build AI assistants for businesses.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            If your customers message you at 2 AM, something should answer.
            I build that thing. Last one took me nine days. Fixed price,
            no hourly billing, and when it&apos;s done the code is yours.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://chat.djaouad.tech"
               className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              Try the live demo →
            </a>
            <a href="https://calendly.com/oufr29/30min"
               className="rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              Book a free call
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground">
            GMT+1 · Oran · usually replies within an hour
          </p>
        </section>

        {/* WORK */}
        <section className="pb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-3xl tracking-tight">Things I built</h2>
            <span aria-hidden className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {work.map((w) => (
              <div key={w.name}
                   className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary">
                <a href={w.url} target="_blank" rel="noopener noreferrer">
                  <img src={w.img} alt={w.name}
                       className="aspect-video w-full object-cover object-top " />
                </a>
                <div className="p-5 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <a href={w.url} target="_blank" rel="noopener noreferrer"
                       className="font-display text-base tracking-tight group-hover:text-primary">
                      {w.name}
                    </a>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{w.desc}</p>
                  <div className="mt-3 flex gap-2 font-mono text-[10px]">
                    <a href={w.repo} target="_blank" rel="noopener noreferrer"
                       className="rounded-md border border-border bg-background px-2 py-1 transition-colors hover:border-primary hover:text-primary">code</a>
                    <a href={w.apk} target="_blank" rel="noopener noreferrer"
                       className="rounded-md border border-border bg-background px-2 py-1 transition-colors hover:border-primary hover:text-primary">android ↓</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="pb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-3xl tracking-tight">Pricing</h2>
            <span aria-hidden className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { p: "$500", t: "Chatbot on your content", f: false },
              { p: "$2,000", t: "Full build + dashboard", f: true },
              { p: "Quote", t: "Custom products", f: false },
            ].map((x) => (
              <div key={x.p}
                   className={`rounded-2xl border p-6 transition-colors ${
                     x.f ? "border-primary/60 bg-card shadow-[0_0_40px_-12px] shadow-primary/30" : "border-border bg-card/60"
                   }`}>
                <p className="font-display text-3xl tracking-tight">{x.p}</p>
                <p className="mt-2 text-sm text-muted-foreground">{x.t}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Free call → fixed quote in 24h. Industry-specific?{" "}
            <Link href="/industries" className="text-primary hover:underline">see it applied →</Link>
          </p>
        </section>

        {/* REVIEWS */}
        <section className="pb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-3xl tracking-tight">Two clients, verbatim</h2>
            <span aria-hidden className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { q: "Made my website within 2 weeks, very professional, great communication. Would highly recommend.", n: "Bilal Kadri · UK" },
              { q: "Complete full-stack build delivered right on schedule. That's how it's done. Star developer.", n: "Muhhamet Novruzov · Cyprus" },
            ].map((r) => (
              <blockquote key={r.n} className="rounded-2xl border border-border bg-card p-6">
                <p className="leading-relaxed text-foreground">&ldquo;{r.q}&rdquo;</p>
                <footer className="mt-4 font-mono text-xs text-muted-foreground">{r.n}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">Talk to me</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I reply fast — usually within an hour. Prefer a call? Grab any slot.
            </p>
            <div className="mt-6 grid max-w-md gap-3">
              <a href="https://calendly.com/oufr29/30min"
                 className="flex items-center justify-between rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
                Book a free call <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/213780688125"
                 className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary">
                WhatsApp +213 780 68 81 25 <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="mailto:oufr29@gmail.com"
                 className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary">
                oufr29@gmail.com <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <p className="mt-10 font-mono text-xs text-muted-foreground">
            GitHub <a href="https://github.com/djoudad292" className="hover:text-primary">djoudad292</a>
            {" · "}LinkedIn <a href="https://linkedin.com/in/djaouad-frih" className="hover:text-primary">djaouad-frih</a>
            {" · "}Blog <Link href="/blog" className="hover:text-primary">notes</Link>
            {" · "}Android apps on every project above
          </p>
          <p className="mt-3 space-x-4 font-mono text-[11px] text-muted-foreground/70">
            <Link href="/industries" className="hover:text-primary">Industries</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
