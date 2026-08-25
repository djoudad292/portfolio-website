import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Djaouad Frih — AI chatbots for your business",
  description:
    "I build AI assistants that answer customers and book appointments 24/7. Fixed price from $500, live in 1-2 weeks. Try the live demo first.",
};

const work = [
  { name: "AI Receptionist", desc: "Books appointments, captures leads, answers 24/7.", url: "https://chat.djaouad.tech", img: "/shots/kit-receptionist.png" },
  { name: "PDF Workspace", desc: "Ask your documents anything. Cited answers.", url: "https://docs.djaouad.tech", img: "/shots/kit-pdf-workspace.png" },
  { name: "Support Agent", desc: "Trained on your policies. Escalates when needed.", url: "https://customer.djaouad.tech", img: "/shots/kit-support-agent.png" },
  { name: "HireMe MCP", desc: "My portfolio as a server AI can read.", url: "https://mcp.djaouad.tech", img: "/shots/kit-hireme-mcp.png" },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-14 text-foreground">
      {/* Hero */}
      <p className="font-mono text-xs uppercase tracking-widest text-primary">● Available now</p>
      <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        AI assistant for<br />your business.
      </h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
        Answers your customers and books appointments 24/7.
        Built in 1–2 weeks, fixed price from $500, you own the code.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://chat.djaouad.tech" className="rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90">
          Try the live demo
        </a>
        <a href="https://calendly.com/oufr29/30min" className="rounded-xl border border-border px-6 py-3.5 font-semibold hover:border-primary">
          Book a free call
        </a>
      </div>

      {/* Work — visual cards */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Running right now</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {work.map((w) => (
          <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer"
             className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary">
            <img src={w.img} alt={w.name} className="aspect-video w-full object-cover object-top" />
            <div className="flex items-center justify-between gap-2 p-4">
              <div>
                <b className="text-sm">{w.name}</b>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{w.desc}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </div>
          </a>
        ))}
      </div>

      {/* Pricing — one clean line */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Simple pricing</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4"><b>$500</b><p className="mt-1 text-xs text-muted-foreground">Chatbot on your content</p></div>
        <div className="rounded-xl border border-primary bg-card p-4"><b>$2,000</b><p className="mt-1 text-xs text-muted-foreground">Full build + dashboard ★</p></div>
        <div className="rounded-xl border border-border bg-card p-4"><b>Quote</b><p className="mt-1 text-xs text-muted-foreground">Custom products</p></div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Free call → fixed quote in 24h. For your industry? <Link href="/industries" className="text-primary hover:underline">See it applied →</Link></p>

      {/* Reviews */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Clients said</h2>
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

      {/* Contact */}
      <h2 className="mt-14 font-display text-2xl tracking-tight">Start this week</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
