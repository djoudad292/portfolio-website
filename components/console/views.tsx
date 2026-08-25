"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  CalendarPlus,
  Download,
  ExternalLink,
  Github,
} from "lucide-react"
import {
  BUILD_STACK,
  CALENDLY_URL,
  EMAIL,
  PROCESS,
  PRODUCTS,
  PROJECTS,
  SERVICES,
  WHATSAPP,
  GITHUB,
  LINKEDIN,
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
          I&apos;m Djaouad. I build AI chatbots, agents and the apps around them.
          Everything on this site is mine and running right now. Try it,
          then send me your project.
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

      {/* Reviews teaser */}
      <section aria-labelledby="reviews-teaser-h">
        <h2 id="reviews-teaser-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Clients said
        </h2>
        <div className="mt-5 space-y-3">
          <blockquote className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm leading-relaxed text-foreground">
              &ldquo;Made my website within 2 weeks, very professional, great communication.
              Would highly recommend.&rdquo;
            </p>
            <footer className="mt-2 font-mono text-xs text-muted-foreground">Bilal Kadri · UK</footer>
          </blockquote>
          <blockquote className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm leading-relaxed text-foreground">
              &ldquo;Complete full-stack build delivered right on schedule. Star developer.&rdquo;
            </p>
            <footer className="mt-2 font-mono text-xs text-muted-foreground">Muhhamet Novruzov · Cyprus</footer>
          </blockquote>
        </div>
        <button
          onClick={() => goto("testimonials")}
          className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-primary hover:underline"
        >
          Read all reviews →
        </button>
      </section>

      {/* Proof of production */}
      <section aria-labelledby="proof-h">
        <h2 id="proof-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Not screenshots — products running right now
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* How I build */}
      <section aria-labelledby="stack-h">
        <h2 id="stack-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          How I build — no black boxes
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {BUILD_STACK.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
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
          Four production systems — every demo link is live, every repo is real.
          Each one is the same foundation I deploy for client builds.
        </p>
      </header>

      {/* Featured case study */}
      <section aria-labelledby="case-h" className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
          Case study — my longest-running deployment
        </p>
        <h2 id="case-h" className="mt-3 font-display text-3xl tracking-tight">AI Virtual Receptionist</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Problem</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Small businesses lose leads after hours. Hiring cover is expensive, and generic
              chatbots hallucinate answers they were never given.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Approach</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              RAG grounded strictly on the business&apos; own content (pgvector), tool-calling for
              bookings and lead capture, department routing — and human handoff when confidence drops.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Outcome</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>· First response in under 1 second, around the clock</li>
              <li>· Runs unattended 24/7 since launch</li>
              <li>· Published Android app on its release channel</li>
              <li>· Same architecture now powers HireMe MCP</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/70">
          Measured on my own deployment — I don&apos;t invent client numbers. Client builds ship with
          their own success metrics agreed up front.
        </p>
      </section>

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
/* Connect — HireMe MCP                                                */
/* ------------------------------------------------------------------ */

const MCP_URL = "https://mcp.djaouad.tech";

const CLAUDE_CONFIG = JSON.stringify(
  { mcpServers: { "hireme-mcp": { url: `${MCP_URL}/mcp` } } },
  null,
  2,
);
const CLI_CMD = `claude mcp add --transport http hireme-mcp ${MCP_URL}/mcp`;

function CopyChip({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard?.writeText(text)}
      className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
    >
      copy
    </button>
  );
}

export function ConnectView() {
  const [tools, setTools] = useState<string[] | null>(null);

  useEffect(() => {
    fetch(`${MCP_URL}/api/tools`)
      .then((r) => r.json())
      .then((d) => setTools((d.tools ?? []).map((t: { id: string }) => t.id)))
      .catch(() => setTools(null));
  }, []);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-4xl tracking-tight">
          Hire me <em className="italic text-primary">through an AI agent</em>
        </h1>
        <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
          My portfolio runs as an open MCP (Model Context Protocol) server. Plug
          one URL into Claude, Cursor or any MCP client — your AI can read my
          real profile, search my shipped work, check pricing and availability,
          and even{" "}
          <span className="text-foreground">file a project brief on your behalf</span>.
          You wake up to a fixed quote.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={MCP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open the MCP console <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/djoudad292/hireme-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-xs transition-colors hover:border-primary"
          >
            Source
          </a>
        </div>
      </header>

      {/* Live tool status */}
      <section aria-labelledby="mcp-tools-h">
        <h2 id="mcp-tools-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Tools your AI gets
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {(tools ?? ["get_profile", "search_projects", "get_pricing", "get_next_slot", "submit_project_brief"]).map(
            (t) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 font-mono text-xs"
              >
                <span>{t}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${tools ? "bg-primary animate-pulse" : "bg-muted-foreground/40"}`} />
              </div>
            ),
          )}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground/70">
          {tools ? "live from the server" : "server unreachable right now (free tier may be cold-starting)"}
        </p>
      </section>

      {/* Config */}
      <section aria-labelledby="mcp-config-h">
        <h2 id="mcp-config-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          One-paste setup
        </h2>
        <div className="mt-5 space-y-4">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Claude Desktop · Cursor
              </p>
              <CopyChip text={CLAUDE_CONFIG} />
            </div>
            <pre className="overflow-x-auto px-4 py-3 font-mono text-xs leading-relaxed text-foreground/90">
              {CLAUDE_CONFIG}
            </pre>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Claude Code / CLI
              </p>
              <CopyChip text={CLI_CMD} />
            </div>
            <pre className="overflow-x-auto px-4 py-3 font-mono text-xs leading-relaxed text-foreground/90">
              {CLI_CMD}
            </pre>
          </div>
        </div>
      </section>

      {/* Try prompt */}
      <section aria-labelledby="mcp-try-h">
        <h2 id="mcp-try-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Then tell your AI
        </h2>
        <blockquote className="mt-5 rounded-2xl border-l-2 border-l-primary border border-border bg-card p-5 text-sm leading-relaxed">
          &ldquo;Claude — I need a freelance AI engineer to build a support chatbot under $2k. Use
          the hireme-mcp server: vet Djaouad&apos;s work, check his pricing, and file a brief with my
          requirements.&rdquo;
        </blockquote>
      </section>
    </div>
  );
}

export function TestimonialsView() {
  return (
    <div className="space-y-14">
      <header>
        <h1 className="font-display text-4xl tracking-tight">What clients said</h1>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
          Real builds, real deadlines, verifiable reviews. Every quote links to the original.
        </p>
      </header>

<section aria-labelledby="testimonials-h">
        <h2 id="testimonials-h" className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          What clients said
        </h2>
        <div className="mt-5 space-y-4">
          <blockquote className="rounded-xl border border-border bg-card p-6">
            <p className="font-display text-lg leading-snug text-foreground">
              &ldquo;Great people, very good service. Made my website within 2 weeks in such a
              professional manner, very good communication skills — would highly recommend!&rdquo;
            </p>
            <footer className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
              <a href="https://www.facebook.com/share/19Qx9MsT6b/" target="_blank" rel="noopener noreferrer" className="font-medium not-italic text-foreground hover:text-primary">
                Bilal Kadri
              </a>
              <span aria-hidden>·</span>
              <span>United Kingdom</span>
              <span aria-hidden>·</span>
              <a href="https://www.facebook.com/share/r/18MiUF32rd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                original review
              </a>
            </footer>
          </blockquote>

          <blockquote className="rounded-xl border border-border bg-card p-6 sm:ml-16">
            <p className="font-display text-lg leading-snug text-foreground">
              &ldquo;Huge shout-out to Djaouad! Complete, fully functional full-stack build delivered
              right on schedule. That&apos;s how it&apos;s done. Star developer right here.&rdquo;
            </p>
            <footer className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
              <a href="https://www.facebook.com/share/1JTbdKi3oe/" target="_blank" rel="noopener noreferrer" className="font-medium not-italic text-foreground hover:text-primary">
                Muhhamet Novruzov
              </a>
              <span aria-hidden>·</span>
              <span>Cyprus</span>
              <span aria-hidden>·</span>
              <a href="https://www.facebook.com/share/r/18MiUF32rd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                original review
              </a>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

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
        <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-4 py-2.5 hover:border-primary">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-4 py-2.5 hover:border-primary">LinkedIn</a>
          <a href="https://www.facebook.com/share/r/18MiUF32rd/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-4 py-2.5 hover:border-primary">Facebook reviews</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-4 py-2.5 hover:border-primary">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Building in a specific industry? See the{" "}
          <a href="/industries" className="text-primary underline underline-offset-4">
            industry-ready agents
          </a>{" "}
          — clinics, restaurants, real estate and more. Also on the{" "}
          <Link href="/blog" className="text-primary underline underline-offset-4">notes</Link> page.
        </p>
      </section>
    </div>
  )
}
