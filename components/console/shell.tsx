"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Briefcase,
  FileText,
  Home,
  MessageSquareText,
  PenLine,
  Sparkles,
} from "lucide-react"
import { PRODUCTS, WHATSAPP } from "./data"
import { BriefingView, TermsView, WorkView } from "./views"
import { ChatView } from "./chat-view"
import { IntakeWizard } from "./wizard"
import { WhatsAppIcon } from "@/lib/socials"

const CALENDLY_URL = "https://calendly.com/oufr29/30min"
const GITHUB = "https://github.com/djoudad292"
const LINKEDIN = "https://linkedin.com/in/djaouad-frih"

type View = "briefing" | "work" | "assistant" | "intake" | "terms"

const NAV: { id: View; num: string; label: string; hint: string }[] = [
  { id: "briefing", num: "01", label: "Briefing", hint: "who I am & what I do" },
  { id: "work", num: "02", label: "Proof of work", hint: "live products" },
  { id: "assistant", num: "03", label: "Ask my AI", hint: "chat with my agent" },
  { id: "intake", num: "04", label: "Scope a project", hint: "get a fixed quote" },
  { id: "terms", num: "05", label: "Process & terms", hint: "how we'd work" },
]

const VALID = new Set(NAV.map((n) => n.id))
const isView = (v: string): v is View => VALID.has(v as View)

function readViewFromUrl(): View {
  if (typeof window === "undefined") return "briefing"
  const v = new URLSearchParams(window.location.search).get("view")
  return v && isView(v) ? v : "briefing"
}

/* ------------------------------------------------------------------ */
/* Live ops strip — real health of the three deployed products         */
/* ------------------------------------------------------------------ */

type Status = { state: "checking" | "up" | "slow" | "down"; ms: number }

function useOps() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(PRODUCTS.map((p) => [p.name, { state: "checking", ms: 0 }])),
  )

  useEffect(() => {
    let cancelled = false
    const ping = async () => {
      await Promise.all(
        PRODUCTS.map(async (p) => {
          const t0 = performance.now()
          try {
            await fetch(p.ping ?? p.url, { mode: "no-cors", cache: "no-store", signal: AbortSignal.timeout(15000) })
            const ms = Math.round(performance.now() - t0)
            if (!cancelled) setStatuses((s) => ({ ...s, [p.name]: { state: ms < 2500 ? "up" : "slow", ms } }))
          } catch {
            if (!cancelled) setStatuses((s) => ({ ...s, [p.name]: { state: "down", ms: 0 } }))
          }
        }),
      )
    }
    ping()
    const id = setInterval(ping, 60_000)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return statuses
}

function OpsStrip({ compact = false }: { compact?: boolean }) {
  const statuses = useOps()
  const color = (s: Status["state"]) =>
    s === "up" ? "bg-primary" : s === "slow" ? "bg-yellow-400" : s === "down" ? "bg-red-400" : "bg-muted-foreground/40"

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${compact ? "" : "px-1 py-3"}`}>
      {!compact && (
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Live right now
        </span>
      )}
      {PRODUCTS.map((p) => {
        const s = statuses[p.name]
        return (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${p.name} — ${s.state}`}
            className="group flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${color(s.state)} ${s.state === "up" ? "animate-pulse" : ""}`} />
            <span className={compact ? "hidden sm:inline" : ""}>{p.name}</span>
            <span className="opacity-50">
              {s.state === "checking" ? "…" : s.state === "down" ? "cold" : `${s.ms}ms`}
            </span>
          </a>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* The Console shell                                                   */
/* ------------------------------------------------------------------ */

export function Shell() {
  const [view, setView] = useState<View>("briefing")

  // deep links (?view=…) + back/forward
  useEffect(() => setView(readViewFromUrl()), [])
  useEffect(() => {
    const onPop = () => setView(readViewFromUrl())
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const navigate = useCallback((next: string) => {
    if (!isView(next)) return
    setView(next)
    const url = next === "briefing" ? "/" : `/?view=${next}`
    history.replaceState(null, "", url)
    document.querySelector<HTMLDivElement>("#console-main")?.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    const onNav = (e: Event) => navigate((e as CustomEvent<string>).detail)
    window.addEventListener("console:navigate", onNav)
    return () => window.removeEventListener("console:navigate", onNav)
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
      {/* ---------------- Desktop dock ---------------- */}
      <aside className="hidden w-[300px] shrink-0 flex-col justify-between border-r border-border p-8 xl:w-[340px] xl:p-10 lg:flex">
        <div>
          <button onClick={() => navigate("briefing")} className="text-left">
            <p className="font-display text-xl tracking-tight text-foreground">
              Djaouad Frih<span className="text-primary">.</span>
            </p>
          </button>
          <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Full-Stack AI Engineer
          </p>

          <nav aria-label="Console sections" className="mt-12 space-y-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => navigate(n.id)}
                aria-current={view === n.id ? "page" : undefined}
                className={`group flex w-full items-baseline gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                  view === n.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`font-mono text-[10px] ${view === n.id ? "text-primary" : "opacity-40"}`}>
                  {n.num}
                </span>
                <span className="flex-1">
                  <span className={`block text-sm ${view === n.id ? "font-medium" : ""}`}>{n.label}</span>
                  <span className="block font-mono text-[10px] text-muted-foreground/60">{n.hint}</span>
                </span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            className="mt-8 flex w-full items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Ask this portfolio anything
            <kbd className="ml-auto rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
          </button>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a free call
          </a>
        </div>

        <div className="space-y-4">
          <OpsStrip compact />
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
              <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </aside>

      {/* ---------------- Main viewport ---------------- */}
      <div className="flex min-w-0 flex-1 flex-col lg:h-screen">
        {/* Mobile header */}
        <header className="flex items-center justify-between border-b border-border px-5 py-3.5 lg:hidden">
          <button onClick={() => navigate("briefing")} className="font-display text-lg tracking-tight">
            Djaouad Frih<span className="text-primary">.</span>
          </button>
          <OpsStrip compact />
        </header>

        {/* Desktop ops bar */}
        <div className="hidden items-center justify-between border-b border-border px-8 py-2.5 lg:flex xl:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            djaouad.tech console
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            available for projects
          </p>
        </div>

        <main
          id="console-main"
          className="min-h-0 flex-1 overflow-y-auto scroll-smooth px-6 pb-28 pt-10 md:px-10 lg:px-12 lg:pb-12 xl:px-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="mx-auto h-full max-w-4xl"
            >
              {view === "briefing" && <BriefingView />}
              {view === "work" && <WorkView />}
              {view === "assistant" && (
                <div className="flex h-full min-h-[540px] max-h-[720px] flex-col">
                  <ChatView />
                </div>
              )}
              {view === "intake" && (
                <div className="mx-auto max-w-2xl">
                  <IntakeWizard />
                </div>
              )}
              {view === "terms" && <TermsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* ---------------- Mobile bottom tabs ---------------- */}
      <nav
        aria-label="Console sections"
        className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-stretch justify-around border-t border-border bg-background/95 backdrop-blur lg:hidden"
      >
        {NAV.map((n) => {
          const Icon =
            n.id === "briefing" ? Home :
            n.id === "work" ? Briefcase :
            n.id === "assistant" ? MessageSquareText :
            n.id === "intake" ? PenLine : FileText
          return (
            <button
              key={n.id}
              onClick={() => navigate(n.id)}
              aria-current={view === n.id ? "page" : undefined}
              className={`flex min-w-[56px] flex-col items-center justify-center gap-0.5 px-2 text-[10px] ${
                view === n.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-4.5 w-4.5" strokeWidth={view === n.id ? 2.2 : 1.6} />
              {n.label.split(" ")[0]}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
