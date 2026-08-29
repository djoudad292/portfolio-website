"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { WhatsAppIcon } from "@/lib/socials"

const CHAPTERS = [
  { id: "services", num: "01", label: "What I do" },
  { id: "work", num: "02", label: "Proof of work" },
  { id: "ask", num: "03", label: "Ask my AI" },
  { id: "pricing", num: "04", label: "Terms" },
  { id: "testimonials", num: "05", label: "Reviews" },
  { id: "connect", num: "07", label: "Start" },
]

const CALENDLY_URL = "https://calendly.com/oufr29/30min"
const GITHUB = "https://github.com/djoudad292"
const LINKEDIN = "https://linkedin.com/in/djaouad-frih-16ab7323a"

export function Rail() {
  const [active, setActive] = useState("services")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-0 flex h-screen flex-col justify-between p-10 xl:p-14">
      {/* Identity */}
      <div>
        <a href="#top" className="font-display text-xl tracking-tight text-foreground">
          Djaouad Frih<span className="text-primary">.</span>
        </a>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Full-Stack AI Engineer
        </p>
        <p className="mt-6 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
          I bridge complex AI with real business outcomes — scalable, secure,
          production-ready applications built end-to-end and shipped.
        </p>
      </div>

      {/* Chapter navigation with scroll-spy */}
      <nav aria-label="Chapters" className="my-10 space-y-1">
        {CHAPTERS.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`group flex items-baseline gap-4 rounded-lg px-3 py-2 transition-colors ${
              active === c.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span
              className={`font-mono text-[10px] ${active === c.id ? "text-primary" : "opacity-40"}`}
            >
              {c.num}
            </span>
            <span className={`text-sm ${active === c.id ? "font-medium" : ""}`}>{c.label}</span>
            {active === c.id && (
              <span aria-hidden className="ml-auto h-px w-6 bg-primary transition-all" />
            )}
          </a>
        ))}
      </nav>

      {/* Availability + actions */}
      <div>
        <button
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          className="mb-5 flex w-full items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Ask this portfolio anything
          <kbd className="ml-auto rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
            ⌘K
          </kbd>
        </button>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book a free call
        </a>

        <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Booking projects — starts within days
        </p>

        <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a
            href="https://wa.me/213780688125"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
