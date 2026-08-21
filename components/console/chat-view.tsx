"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, CalendarPlus, CornerDownLeft, Sparkles } from "lucide-react"
import { CALENDLY_URL } from "./data"
import { useConsoleChat } from "./chat"

const SUGGESTED = [
  "What does Djaouad charge?",
  "What has he built before?",
  "Which stack does he use?",
  "Is he available right now?",
]

export function ChatView() {
  const { messages, thinking, send } = useConsoleChat()
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault()
    const q = input.trim()
    if (!q || thinking) return
    send(q)
    setInput("")
  }

  return (
    <div className="flex h-full flex-col">
      {/* header line */}
      <div className="flex items-center gap-3 border-b border-border px-1 pb-4">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <div>
          <p className="text-sm font-medium">Djaouad&apos;s agent — online</p>
          <p className="font-mono text-[11px] text-muted-foreground">
            the exact agent I deploy for clients, running on my own portfolio
          </p>
        </div>
      </div>

      {/* messages */}
      <div
        ref={scrollRef}
        aria-live="polite"
        className="mt-5 flex-1 space-y-4 overflow-y-auto pr-1"
      >
        {messages.length === 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[52ch] rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground"
            >
              Hi — I&apos;m trained on Djaouad&apos;s real projects, pricing and
              availability. Ask me anything, or pick a question below.
            </motion.div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex justify-end">
              <p className="max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                {m.text}
              </p>
            </div>
          ) : (
            <div key={i} className="flex justify-start">
              <p
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-3 text-sm leading-relaxed ${
                  m.done ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {m.text}
              </p>
            </div>
          ),
        )}

        {thinking && (
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
            thinking…
          </div>
        )}
      </div>

      {/* answer CTA */}
      {messages.some((m) => m.role === "agent" && m.done) && (
        <div className="flex flex-wrap gap-2 border-t border-border pt-4 mt-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <CalendarPlus className="h-3.5 w-3.5" /> Book a free call
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("console:navigate", { detail: "intake" }))}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs text-foreground transition-colors hover:border-primary"
          >
            Scope my project <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* input */}
      <form onSubmit={submit} className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 focus-within:border-primary">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about pricing, stack, availability…"
          aria-label="Message the AI agent"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
        />
        <button
          type="submit"
          disabled={!input.trim() || thinking}
          aria-label="Send message"
          className="rounded-full bg-primary p-2 text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-30"
        >
          <CornerDownLeft className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  )
}
