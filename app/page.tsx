import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BOOKING_URL } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Djaouad Frih — Full Stack Developer | AI, Web & Mobile",
  description:
    "Full stack developer for hire. I build web apps, mobile apps & AI features. Fixed prices. No fluff.",
};

const work = [
  { name: "AI Receptionist", desc: "Answers questions, books appointments & captures leads from your own docs.", url: "https://chat.djaouad.is-a.dev", img: "/shots/kit-receptionist.png",
    repo: "https://github.com/djoudad292/ai-virtual-receptionist", apk: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk-receptionist/ai-receptionist.apk" },
  { name: "Support Agent", desc: "Handles support, creates tickets & escalates to humans when needed.", url: "https://customer.djaouad.is-a.dev", img: "/shots/kit-support-agent.png",
    repo: "https://github.com/djoudad292/ai-customer-support-agent", apk: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-customer-support.apk" },
  { name: "PDF Workspace", desc: "Chat with contracts, invoices & PDFs. Get answers with page references.", url: "https://docs.djaouad.is-a.dev", img: "/shots/kit-pdf-workspace.png",
    repo: "https://github.com/djoudad292/smart-pdf-workspace", apk: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk-pdf/smart-pdf.apk" },
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
            Available for freelance & hire
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">
            Full Stack Developer — Web, Mobile & AI
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I build fast, clean web apps, mobile apps, and AI features that actually solve problems.
            No fluff. Delivered on time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work"
               className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
              See my work →
            </a>
            <a href="#contact"
               className="rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">
              Get in touch
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Remote · Fixed price · Clear scope
          </p>
        </section>

        {/* WORK */}
        <section id="work" className="pb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-3xl tracking-tight">Selected Work</h2>
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

        {/* SKILLS */}
        <section className="pb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-3xl tracking-tight">What I Do</h2>
            <span aria-hidden className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Full Stack Web Apps",
              "React Native & Mobile",
              "AI Integration & Chatbots",
              "APIs & Backend",
              "RAG & Knowledge Bases",
              "Clean, Maintainable Code",
            ].map((skill) => (
              <div key={skill} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">
                {skill}
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
              { p: "$2,000", t: "Simple chatbot/web app", f: false },
              { p: "$3,000–$5,000", t: "Full app with backend", f: true },
              { p: "Quote", t: "Freelance per project", f: false },
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
            Fixed price. Clear scope. No hourly surprises.
          </p>
        </section>

        {/* REVIEWS */}
        <section className="pb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-3xl tracking-tight">What Clients Say</h2>
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
        <section id="contact" className="pb-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">Ready to Build</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Have a project in mind? I'll help you clarify scope and ship it.
            </p>
            <div className="mt-6 grid max-w-md gap-3">
              <a href={BOOKING_URL}
                 className="flex items-center justify-between rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
                Book a free call <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/213780688125"
                 className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary">
                WhatsApp +213 780 68 81 25 <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="mailto:contact@djaouad.is-a.dev"
                 className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary">
                Email contact@djaouad.is-a.dev <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { n: "GitHub", u: "https://github.com/djoudad292" },
                  { n: "LinkedIn", u: "https://linkedin.com/in/djaouad-frih-16ab7323a" },
                  { n: "DEV.to", u: "https://dev.to/djoudad292" },
                  { n: "Telegram", u: "https://t.me/djaouadfrih_bot" },
                ].map((s) => (
                  <a key={s.n} href={s.u} target="_blank" rel="noopener noreferrer"
                     className="rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary">
                    {s.n}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 font-mono text-xs text-muted-foreground">
            GitHub <a href="https://github.com/djoudad292" className="hover:text-primary">djoudad292</a>
            {" · "}LinkedIn <a href="https://linkedin.com/in/djaouad-frih-16ab7323a" className="hover:text-primary">djaouad-frih-16ab7323a</a>
            {" · "}DEV.to <a href="https://dev.to/djoudad292" className="hover:text-primary">@djoudad292</a>
          </p>
          <p className="mt-3 space-x-4 font-mono text-[11px] text-muted-foreground/70">
            <Link href="/industries" className="hover:text-primary">Industries</Link>
          </p>
        </section>
      </div>
    </main>
  )
}
