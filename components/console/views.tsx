"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  CalendarPlus,
  Download,
  ExternalLink,
  Github,
} from "lucide-react"
import {
  CALENDLY_URL,
  EMAIL,
  PROCESS,
  PRODUCTS,
  PROJECTS,
  SERVICES,
  TESTIMONIALS,
  WHATSAPP,
} from "./data"

const goto = (view: string) =>
  window.dispatchEvent(new CustomEvent("console:navigate", { detail: view }))

/* ------------------------------------------------------------------ */
/* Briefing — the crawlable landing view                               */
/* ------------------------------------------------------------------ */

export function BriefingView() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <header>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          Full-Stack AI Engineer · Remote worldwide
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-4 max-w-[20ch] font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl"
        >
          The portfolio that <em className="italic text-primary">runs</em> on the
          product it sells.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted-foreground"
        >
          I&apos;m Djaouad Frih. I build production AI agents, RAG systems and the
          web/mobile products around them — solo, end-to-end, shipped not demoed.
          Every agent on this site is my own deployment: ask it anything, or hand
          it your project brief.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => goto("assistant")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ask my AI anything <ArrowUpRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => goto("intake")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            Scope my project
          </button>
          <p className="flex items-center gap-2 pl-1 font-mono text-[11px] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Booking projects — starts within days
          </p>
        </motion.div>
      </header>

      {/* Services */}
      <section aria-labelledby="services-h">
        <div className="flex items-baseline justify-between">
          <h2 id="services-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            What I do — fixed quotes, no hourly surprises
          </h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <p className="mt-4 font-mono text-xs text-primary">{s.price}</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{s.eta}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proof of production */}
      <section aria-labelledby="proof-h">
        <h2 id="proof-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Not screenshots — products running right now
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/40"
            >
              <span className="text-sm">{p.name}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="reviews-h">
        <h2 id="reviews-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Client reviews
        </h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border-l-2 border-l-primary border border-border bg-card p-5"
            >
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-3 font-mono text-[11px] text-muted-foreground">
                {t.name} — {t.country}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

export function WorkView() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-display text-4xl tracking-tight">Proof of work</h1>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
          Three production systems — every demo link is live, every repo is real.
          Each one is the same foundation I deploy for client builds.
        </p>
      </header>

      {PROJECTS.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.02 * i }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="relative aspect-[21/9] w-full bg-secondary">
            <Image
              src={p.image.replace(".png", "-new.png")}
              alt={p.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-top"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              <span className="font-mono text-[11px] text-muted-foreground/70">{p.stack}</span>
            </div>

            <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={p.demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Live demo <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs text-foreground transition-colors hover:border-primary"
              >
                <Github className="h-3 w-3" /> Source
              </a>
              <a
                href={p.apk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs text-foreground transition-colors hover:border-primary"
              >
                <Download className="h-3 w-3" /> Android app
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Terms & process                                                     */
/* ------------------------------------------------------------------ */

export function TermsView() {
  return (
    <div className="space-y-14">
      <header>
        <h1 className="font-display text-4xl tracking-tight">How we&apos;d work together</h1>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
          Fixed-price milestones, weekly live demos, full source ownership.
          No agencies, no account managers — you talk to the person writing the code.
        </p>
      </header>

      {/* Process */}
      <section aria-labelledby="process-h">
        <h2 id="process-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          The process
        </h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-2">
          {PROCESS.map((s) => (
            <li key={s.step} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-mono text-xs text-primary">{s.step}</p>
              <h3 className="mt-2 font-medium">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section aria-labelledby="pricing-h">
        <h2 id="pricing-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Pricing
        </h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-5 ${
                i % 2 === 0 ? "bg-card" : "bg-background"
              } ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div>
                <h3 className="text-sm font-medium">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </div>
              <div className="text-right font-mono text-xs">
                <p className="text-primary">{s.price}</p>
                <p className="mt-0.5 text-muted-foreground">{s.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-h">
        <h2 id="contact-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Reach me directly
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a free call <CalendarPlus className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-primary"
          >
            WhatsApp <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 text-sm transition-colors hover:border-primary"
          >
            Email <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </section>
    </div>
  )
}
