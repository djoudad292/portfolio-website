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
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-14 text-foreground">
      {/* Hero */}
      <p className="font-mono text-xs uppercase tracking-widest text-primary">● Booking projects — next slot early September</p>
      <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        I'm Djaouad. I build AI assistants<br className="hidden sm:block" /> for businesses.
      </h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
      If your customers message you at 2 AM, something should answer.
        I build that thing. Last one took me nine days. Fixed price,
        no hourly billing, and when it&apos;s done the code is yours.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://chat.djaouad.tech" className="rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90">
          Try the live demo
        </a>
        <a href="https://calendly.com/oufr29/30min" className="rounded-xl border border-border px-6 py-3.5 font-semibold hover:border-primary">
          Book a free call
        </a>
      </div>

      {/* About */}
      <section className="mt-12 flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">DF</div>
        <div className="text-sm leading-relaxed text-muted-foreground">
          <b className="text-foreground">Djaouad Frih</b> — AI engineer from Oran, Algeria.
          Speaks Arabic, French and English. Builds for clients worldwide.
          Replies within hours.
        </div>
        <a href="/cv/Djaouad_Frih_CV.pdf" download
           className="ml-auto hidden shrink-0 rounded-lg border border-border px-4 py-2.5 text-xs font-semibold hover:border-primary sm:block">
          Download CV
        </a>
      </section>
      <a href="/cv/Djaouad_Frih_CV.pdf" download className="mt-3 block rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold sm:hidden">
        Download my CV (PDF)
      </a>

      {/* Work — visual cards */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Things I built</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {work.map((w) => (
          <div key={w.name} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary">
            <a href={w.url} target="_blank" rel="noopener noreferrer">
              <img src={w.img} alt={w.name} className="aspect-video w-full object-cover object-top" />
            </a>
            <div className="p-4 pt-3">
              <div className="flex items-center justify-between gap-2">
                <a href={w.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold group-hover:text-primary">
                  {w.name}
                </a>
                <a href={w.url} target="_blank" rel="noopener noreferrer" aria-label={w.name}>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{w.desc}</p>
              <div className="mt-2.5 flex gap-2 font-mono text-[10px]">
                <a href={w.repo} target="_blank" rel="noopener noreferrer"
                   className="rounded-md bg-background px-2 py-1 border border-border hover:border-primary hover:text-primary">code</a>
                <a href={w.apk} target="_blank" rel="noopener noreferrer"
                   className="rounded-md bg-background px-2 py-1 border border-border hover:border-primary hover:text-primary">android ↓</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* App + repo */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://github.com/djoudad292/hireme-mcp/releases/download/latest-apk/hireme-mcp.apk"
           className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:border-primary">
          📱 Download Android app
        </a>
        <a href="https://github.com/djoudad292/hireme-mcp"
           className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:border-primary">
          ⭐ Open source on GitHub
        </a>
      </div>

      {/* How it works */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">How it works</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {[["1", "Free call"], ["2", "Fixed quote in 24h"], ["3", "I build, you watch demos"], ["4", "Launch + you own code"]].map(([n, t]) => (
          <div key={n} className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="font-mono text-xs text-primary">{n}</p>
            <p className="mt-1 text-sm font-medium">{t}</p>
          </div>
        ))}
      </div>

      {/* Pricing — one clean line */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Pricing</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4"><b>$500</b><p className="mt-1 text-xs text-muted-foreground">Chatbot on your content</p></div>
        <div className="rounded-xl border border-primary bg-card p-4"><b>$2,000</b><p className="mt-1 text-xs text-muted-foreground">Full build + dashboard ★</p></div>
        <div className="rounded-xl border border-border bg-card p-4"><b>Quote</b><p className="mt-1 text-xs text-muted-foreground">Custom products</p></div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Free call → fixed quote in 24h. For your industry? <Link href="/industries" className="text-primary hover:underline">See it applied →</Link></p>

      {/* Reviews */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Two clients, verbatim</h2>
      <div className="mt-4 space-y-3">
        <p className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
          "Made my website within 2 weeks, very professional. Would highly recommend."
          <span className="block pt-1 font-mono text-xs text-muted-foreground">Bilal, UK</span>
        </p>
        <p className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
          "Complete full-stack build delivered right on schedule. Star developer."
          <span className="block pt-1 font-mono text-xs text-muted-foreground">Muhhamet, Cyprus</span>
        </p>
      </div>

      {/* FAQ */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Common questions</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed">
        <p><b>I'm not technical. Is that a problem?</b><br />No — you get a finished product on your domain. I handle everything.</p>
        <p><b>Do I own the code?</b><br />Yes, fully. Source code and accounts are yours at launch.</p>
        <p><b>What about my data?</b><br />Your agent only uses your own content. Nothing is shared with other clients.</p>
        <p><b>Languages?</b><br />Arabic, French, English — your customers can switch anytime.</p>
      </div>

      {/* Contact */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Talk to me</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        I reply fast — usually within an hour (I&apos;m GMT+1, Oran).
        Free call: <a className="text-primary hover:underline" href="https://calendly.com/oufr29/30min">calendly.com/oufr29/30min</a><br />
        WhatsApp: <a className="text-primary hover:underline" href="https://wa.me/213780688125">+213 780 68 81 25</a><br />
        Email: <a className="text-primary hover:underline" href="mailto:oufr29@gmail.com">oufr29@gmail.com</a>
      </p>

      <p className="mt-12 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground">
        Djaouad Frih · Full-stack AI engineer ·{" "}
        <a className="hover:text-primary" href="https://github.com/djoudad292">GitHub</a> ·{" "}
        <a className="hover:text-primary" href="https://linkedin.com/in/djaouad-frih">LinkedIn</a> ·{" "}
        <Link className="hover:text-primary" href="/blog">Blog</Link> ·{" "}
        <Link className="hover:text-primary" href="/privacy">Privacy</Link>
      </p>
    </main>
  );
}
