import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Djaouad Frih — AI chatbots for your business",
  description:
    "I build AI assistants that answer customers and book appointments 24/7. Fixed price from $500, live in 1-2 weeks. Try the live demo first.",
};

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-xl px-6 py-16 text-foreground">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">● Available now</p>

      <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        AI assistant for your business.
      </h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        It answers your customers and books appointments 24/7.
        I build it in 1–2 weeks. Fixed price from $500. You own the code.
      </p>

      <a
        href="https://chat.djaouad.tech"
        className="mt-6 block rounded-xl bg-primary px-6 py-4 text-center font-semibold text-primary-foreground hover:opacity-90"
      >
        Try the live demo →
      </a>

      <h2 className="mt-12 font-display text-xl tracking-tight">More of my work</h2>
      <ul className="mt-3 space-y-1 text-sm">
        <li><a className="text-primary hover:underline" href="https://docs.djaouad.tech">Document Q&A with cited answers</a></li>
        <li><a className="text-primary hover:underline" href="https://customer.djaouad.tech">Support agent for stores & services</a></li>
        <li><a className="text-primary hover:underline" href="https://mcp.djaouad.tech">My portfolio as an AI-readable server</a></li>
        <li><Link className="text-primary hover:underline" href="/industries">Built per industry — clinics, restaurants, more</Link></li>
      </ul>

      <h2 className="mt-12 font-display text-xl tracking-tight">What clients said</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>"Made my website within 2 weeks, very professional. Would highly recommend." — Bilal, UK</p>
        <p>"Complete full-stack build delivered right on schedule. Star developer." — Muhhamet, Cyprus</p>
      </div>

      <h2 className="mt-12 font-display text-xl tracking-tight">Start</h2>
      <div className="mt-3 space-y-1 text-sm">
        <p>Free call: <a className="text-primary hover:underline" href="https://calendly.com/oufr29/30min">calendly.com/oufr29/30min</a></p>
        <p>WhatsApp: <a className="text-primary hover:underline" href="https://wa.me/213780688125">+213 780 68 81 25</a></p>
        <p>Email: <a className="text-primary hover:underline" href="mailto:oufr29@gmail.com">oufr29@gmail.com</a></p>
      </div>

      <p className="mt-10 border-t border-border pt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">
        Djaouad Frih · Full-stack AI engineer, remote worldwide<br />
        <a className="hover:text-primary" href="https://github.com/djoudad292">GitHub</a> ·{" "}
        <a className="hover:text-primary" href="https://linkedin.com/in/djaouad-frih">LinkedIn</a> ·{" "}
        <Link className="hover:text-primary" href="/blog">Blog</Link> ·{" "}
        <Link className="hover:text-primary" href="/privacy">Privacy</Link>
      </p>
    </main>
  );
}
