"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, CornerDownLeft, Sparkles } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/oufr29/30min"

const COMPANY_ID = "e207c632-ca30-48d2-a41b-87c76f3bc3fb"
const WS_URL = `wss://ai-customer-support-backend-ldbf.onrender.com/ws?company=${COMPANY_ID}`

const ACTIONS = [
  { label: "See the work", hint: "projects", href: "#work" },
  { label: "How I work", hint: "process", href: "#process" },
  { label: "Pricing", hint: "cost, rates", href: "#pricing" },
  { label: "FAQ", hint: "questions", href: "#faq" },
  { label: "Testimonials", hint: "reviews", href: "#testimonials" },
  { label: "About me", hint: "who", href: "#about" },
  { label: "Contact", hint: "hire, email", href: "#contact" },
]

type Mode = "idle" | "thinking" | "answered" | "error"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [mode, setMode] = useState<Mode>("idle")
  const [answer, setAnswer] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const wsRef = useRef<WebSocket | null>(null)
  const answerRef = useRef("")

  const close = useCallback(() => {
    setOpen(false)
    setQuery("")
    setMode("idle")
    setAnswer("")
    wsRef.current?.close()
    wsRef.current = null
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
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  const askAgent = useCallback((question: string) => {
    setMode("thinking")
    setAnswer("")
    answerRef.current = ""

    const ws = new WebSocket(WS_URL)
    wsRef.current = ws
    let firstChunk = true

    ws.onopen = () => {
      ws.send(JSON.stringify({ event: "chat", data: { message: question, conversationId: null, companyId: COMPANY_ID } }))
    }
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data)
        if (msg.type === "message") {
          // typewriter reveal for the full answer
          setMode("answered")
          const text = String(msg.content || "")
          let i = 0
          const timer = setInterval(() => {
            i += 3
            setAnswer(text.slice(0, i))
            if (i >= text.length) clearInterval(timer)
          }, 12)
        }
      } catch {
        /* ignore malformed frames */
      }
    }
    ws.onerror = () => {
      if (firstChunk) {
        setMode("error")
        setAnswer("The agent is waking up (free tier cold start). Try again in ~30 seconds.")
      }
    }
    ws.onclose = () => {
      if (mode === "thinking") {
        setMode("error")
        setAnswer("Connection dropped before an answer arrived. Try again.")
      }
    }
    setTimeout(() => { firstChunk = false }, 5000)
  }, [mode])

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    const q = query.trim()
    if (!q) return
    const exact = ACTIONS.find(
      (a) => a.label.toLowerCase() === q.toLowerCase() || a.hint.split(", ").includes(q.toLowerCase()),
    )
    if (exact && mode === "idle") {
      window.location.hash = exact.href
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
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Book a free call <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                )}

                {(mode === "idle" || query) && filtered.length > 0 && (
                  <>
                    {mode === "idle" && (
                      <p className="px-4 pb-1 pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Jump to
                      </p>
                    )}
                    {filtered.map((a) => (
                      <a
                        key={a.href}
                        href={a.href}
                        onClick={close}
                        className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {a.label}
                        <CornerDownLeft className="h-3 w-3 opacity-40" />
                      </a>
                    ))}
                  </>
                )}
              </div>

              <div className="border-t border-border px-5 py-2.5 font-mono text-[10px] text-muted-foreground/60">
                powered by the same AI agent I ship for clients
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
