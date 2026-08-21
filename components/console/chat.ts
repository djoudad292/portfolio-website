"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { COMPANY_ID, WS_URL } from "./data"

export type ChatMessage = {
  role: "user" | "agent"
  text: string
  done?: boolean
}

// Shared WS chat hook for the Console assistant + intake wizard helper.
export function useConsoleChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [thinking, setThinking] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)

  const stop = useCallback(() => {
    wsRef.current?.close()
    wsRef.current = null
    setThinking(false)
  }, [])

  const send = useCallback((text: string) => {
    if (!text.trim()) return
    setMessages((m) => [...m, { role: "user", text }])
    setThinking(true)

    // close any previous socket — one question per connection keeps state simple
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
            if (i >= full.length) clearInterval(timer)
          }, 12)
        }
      } catch { /* ignore malformed frames */ }
    }
    ws.onerror = () => {
      if (!settled) {
        setThinking(false)
        setMessages((m) => [
          ...m,
          { role: "agent", text: "The agent is cold-starting (free hosting) — ask again in ~30 seconds.", done: true },
        ])
      }
    }
  }, [])

  useEffect(() => () => wsRef.current?.close(), [])

  return { messages, thinking, send, stop, setMessages }
}
