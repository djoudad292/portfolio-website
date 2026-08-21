"use client"

import { useEffect, useState } from "react"

const PRODUCTS = [
  { name: "AI Receptionist", url: "https://chat.djaouad.tech" },
  { name: "PDF Workspace", url: "https://docs.djaouad.tech" },
  { name: "Support Agent", url: "https://ai-customer-support-backend-ldbf.onrender.com/health" },
]

type Status = { state: "checking" | "up" | "slow" | "down"; ms: number }

export function LiveStatus() {
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
            await fetch(p.url, { mode: "no-cors", cache: "no-store", signal: AbortSignal.timeout(15000) })
            const ms = Math.round(performance.now() - t0)
            if (!cancelled) {
              setStatuses((s) => ({ ...s, [p.name]: { state: ms < 2500 ? "up" : "slow", ms } }))
            }
          } catch {
            if (!cancelled) setStatuses((s) => ({ ...s, [p.name]: { state: "down", ms: 0 } }))
          }
        }),
      )
    }

    ping()
    const id = setInterval(ping, 60_000)
    return () => { cancelled = true; clearInterval(id) }
  }, [])

  const color = (s: Status["state"]) =>
    s === "up" ? "bg-primary" : s === "slow" ? "bg-yellow-400" : s === "down" ? "bg-red-400" : "bg-muted-foreground/40"

  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 pb-10">
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        Live right now
      </span>
      {PRODUCTS.map((p) => {
        const s = statuses[p.name]
        return (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${color(s.state)} ${s.state === "up" ? "animate-pulse" : ""}`} />
            {p.name}
            <span className="font-mono text-[10px] opacity-60">
              {s.state === "checking" ? "…" : s.state === "down" ? "cold start" : `${s.ms}ms`}
            </span>
          </a>
        )
      })}
    </div>
  )
}
