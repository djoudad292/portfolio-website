"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, CornerDownLeft, Sparkles } from "lucide-react"
import { CHAT_URL, COMPANY_ID } from "@/components/console/data"

const ACTIONS = [
  { label: "Briefing", hint: "about, who", view: "briefing" },
  { label: "See the work", hint: "projects", view: "work" },
  { label: "Ask my AI", hint: "chat, agent", view: "assistant" },
  { label: "Scope a project", hint: "intake, quote", view: "intake" },
  { label: "Process & pricing", hint: "terms, cost, rates", view: "terms" },
  { label: "Connect via MCP", hint: "hireme, agent hire", view: "connect" },
]

type Mode = "idle" | "thinking" | "answered" | "error"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState("")
  const [mode, setMode] = useState<Mode>("idle")
  const [answer, setAnswer] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)
  const convRef = useRef<string | null>(null)
  const answerRef = useRef("")

  const close = useCallback(() => {
    setOpen(false)
    setQuery("")
    setMode("idle")
    setAnswer("")
    abortRef.current?.abort()
    abortRef.current = null
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === "Escape") close()
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener("open-command-palette", onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("open-command-palette", onOpen)
    }
  }, [close])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  const askAgent = useCallback((question: string) => {
    setMode("thinking")
    setAnswer("")
    answerRef.current = ""

    abortRef.current?.abort()
    const ac = new AbortController()
    abortRef.current = ac

    ;(async () => {
      try {
        const res = await fetch(CHAT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: question,
            conversationId: convRef.current,
            companyId: COMPANY_ID,
          }),
          signal: ac.signal,
        })
        if (!res.ok) throw new Error(`http ${res.status}`)
        const d = (await res.json()) as { type: string; content: string; conversationId?: string | null }
        if (d.type === "error") throw new Error("backend error")
        if (d.conversationId) convRef.current = d.conversationId

        // typewriter reveal for the full answer
        setMode("answered")
        const text = String(d.content || "")
        let i = 0
        const timer = setInterval(() => {
          i += 3
          setAnswer(text.slice(0, i))
          if (i >= text.length) clearInterval(timer)
        }, 12)
      } catch {
        if (ac.signal.aborted) return
        setMode("error")
        setAnswer("The agent did not answer (host busy or cold start) — try again in a few seconds.")
      }
    })()
  }, [])

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    const q = query.trim()
    if (!q) return
    const exact = ACTIONS.find(
      (a) => a.label.toLowerCase() === q.toLowerCase() || a.hint.split(", ").includes(q.toLowerCase()),
    )
    if (exact && mode === "idle") {
      if (exact.view) window.dispatchEvent(new CustomEvent("console:navigate", { detail: exact.view }))
      close()
      return
    }
    askAgent(q)
  }

  const filtered = ACTIONS.filter(
    (a) =>
      !query ||
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.hint.includes(query.toLowerCase()),
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground md:inline-flex"
        aria-label="Open AI command palette"
      >
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        Ask anything
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
      </button>

      {/*
        Portalled to document.body on purpose. This component is mounted inside
        the desktop nav <ul className="hidden ... md:flex">, so a modal rendered
        in place inherits display:none and collapses to 0x0 on a phone — the
        palette would "open" while staying invisible. Portalling also lifts it
        out of the header's stacking/containing-block context.
      */}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-background/80 px-4 pt-[12vh] backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={onSubmit} className="flex items-center gap-3 border-b border-border px-5 py-4">
                <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); if (mode !== "idle") { setMode("idle"); setAnswer("") } }}
                  placeholder="Ask about me, my work, pricing… or jump to a section"
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
                />
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  esc
                </kbd>
              </form>

              <div className="max-h-[46vh] overflow-y-auto p-2">
                {mode === "thinking" && (
                  <div className="flex items-center gap-3 px-4 py-6 text-sm text-muted-foreground">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    Asking my AI twin…
                  </div>
                )}

                {mode === "error" && (
                  <div className="px-4 py-6 text-sm text-muted-foreground">{answer}</div>
                )}

                {mode === "answered" && (
                  <div className="px-4 py-4">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{answer}</p>
                    <button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent("console:navigate", { detail: "intake" }))
                        close()
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Scope my project <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                )}

                {(mode === "idle" || query) && filtered.length > 0 && (
                  <>
                    {mode === "idle" && (
                      <p className="px-4 pb-1 pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Jump to
                      </p>
                    )}
                    {filtered.map((a) =>
                      a.view ? (
                        <button
                          key={a.label}
                          onClick={() => {
                            window.dispatchEvent(new CustomEvent("console:navigate", { detail: a.view }))
                            close()
                          }}
                          className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {a.label}
                          <CornerDownLeft className="h-3 w-3 opacity-40" />
                        </button>
                      ) : null,
                    )}
                  </>
                )}
              </div>

              <div className="border-t border-border px-5 py-2.5 font-mono text-[10px] text-muted-foreground/60">
                powered by the same AI agent I ship for clients
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
