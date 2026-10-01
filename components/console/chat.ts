"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { CHAT_URL, COMPANY_ID } from "./data"

export type ChatMessage = {
  role: "user" | "agent"
  text: string
  done?: boolean
}

type ChatReply = {
  type: string
  content: string
  conversationId?: string | null
}

// Shared REST chat hook for the Console assistant + intake wizard helper.
// Serverless backend has no long-lived socket, so each turn is a POST to
// /widget/chat; the returned conversationId threads turns together.
export function useConsoleChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [thinking, setThinking] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const convRef = useRef<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stop = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    setThinking(false)
  }, [])

  const send = useCallback((text: string) => {
    if (!text.trim()) return
    setMessages((m) => [...m, { role: "user", text }])
    setThinking(true)

    abortRef.current?.abort()
    if (timerRef.current) clearInterval(timerRef.current)
    const ac = new AbortController()
    abortRef.current = ac

    ;(async () => {
      try {
        const res = await fetch(CHAT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            conversationId: convRef.current,
            companyId: COMPANY_ID,
          }),
          signal: ac.signal,
        })
        if (!res.ok) throw new Error(`http ${res.status}`)
        const d = (await res.json()) as ChatReply
        if (d.type === "error") throw new Error(d.content || "backend error")
        if (d.conversationId) convRef.current = d.conversationId

        setThinking(false)
        const full = String(d.content || "")
        // typewriter reveal
        setMessages((m) => [...m, { role: "agent", text: "", done: false }])
        let i = 0
        const timer = setInterval(() => {
          i += 3
          setMessages((m) => {
            const copy = [...m]
            copy[copy.length - 1] = { role: "agent", text: full.slice(0, i), done: i >= full.length }
            return copy
          })
          if (i >= full.length) {
            clearInterval(timer)
            timerRef.current = null
          }
        }, 12)
        timerRef.current = timer
      } catch {
        if (ac.signal.aborted) return // user pressed stop
        setThinking(false)
        setMessages((m) => [
          ...m,
          { role: "agent", text: "The agent did not answer (host busy or cold start) — ask again in a few seconds.", done: true },
        ])
      }
    })()
  }, [])

  useEffect(
    () => () => {
      abortRef.current?.abort()
      if (timerRef.current) clearInterval(timerRef.current)
    },
    [],
  )

  return { messages, thinking, send, stop, setMessages }
}
