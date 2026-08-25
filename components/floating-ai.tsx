"use client"

import { useEffect, useRef, useState } from "react"
import { COMPANY_ID, WS_URL } from "./console/data"

type Msg = { role: "user" | "agent"; text: string }

export function FloatingAI() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [thinking, setThinking] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [messages, thinking])

  useEffect(() => () => wsRef.current?.close(), [])

  const send = (text: string) => {
    if (!text.trim() || thinking) return
    setMessages((m) => [...m, { role: "user", text }])
    setInput("")
    setThinking(true)
    wsRef.current?.close()

    let settled = false
    const ws = new WebSocket(WS_URL)
    wsRef.current = ws

    ws.onopen = () => {
      ws.send(JSON.stringify({ event: "chat", data: { message: text, conversationId: null, companyId: COMPANY_ID } }))
    }
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data)
        if (msg.type === "message") {
          settled = true
          setThinking(false)
          const full = String(msg.content || "")
          setMessages((m) => [...m, { role: "agent", text: "", done: false }])
          let i = 0
          const timer = setInterval(() => {
            i += 3
            setMessages((m) => {
              const copy = [...m]
              copy[copy.length - 1] = { role: "agent", text: full.slice(0, i), done: i >= full.length }
              return copy
            })
            if (i >= full.length) clearInterval(timer)
          }, 12)
        }
      } catch { /* ignore */ }
    }
    ws.onerror = () => {
      if (!settled) {
        setThinking(false)
        setMessages((m) => [...m, { role: "agent", text: "The agent is waking up (free hosting) — ask again in ~30 seconds.", done: true }])
      }
    }
  }

  return (
    <>
      {/* bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with my AI"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? "×" : "AI"}
      </button>

      {/* panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[440px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Djaouad&apos;s AI</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                trained on this portfolio
              </p>
            </div>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="space-y-2 pt-6 text-center">
                <p className="text-sm text-muted-foreground">Ask about my work, prices or availability.</p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {["What do you build?", "Pricing?", "Available when?"].map((q) => (
                    <button key={q} onClick={() => send(q)}
                            className="rounded-full border border-border px-3 py-1.5 text-xs hover:border-primary">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user" ? "bg-primary text-primary-foreground" : "border border-border bg-background"
                }`}>
                  {m.text}
                  {thinking && m.role === "agent" && !m.done && <span className="animate-pulse">▍</span>}
                </p>
              </div>
            ))}
            {thinking && messages[messages.length - 1]?.role === "user" && (
              <div className="justify-start flex"><p className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm animate-pulse">…</p></div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button type="submit" disabled={thinking}
                    className="rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-40">
              →
            </button>
          </form>
        </div>
      )}
    </>
  )
}
