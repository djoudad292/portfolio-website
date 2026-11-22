'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { ArrowRight, CornerDownLeft, Search, Sparkles } from 'lucide-react'

import { CHAT_URL, COMPANY_ID } from '@/lib/chat'
import { cn } from '@/lib/utils'

/**
 * Command palette — routes the site's navigation and the portfolio agent.
 *
 * Type an exact page name to jump, or ask a question and the same support
 * agent that answers on client sites replies. Previously every "jump to"
 * action dispatched a `console:navigate` event that no mounted component
 * listened to, so all of them were silent no-ops.
 */
const ROUTES = [
  { label: 'Work', hint: 'projects case studies', href: '/work' },
  { label: 'Pricing', hint: 'cost rates quote', href: '/pricing' },
  { label: 'Benchmark', hint: 'retrieval eval numbers', href: '/benchmark' },
  { label: 'Free audit', hint: 'reliability measure', href: '/ai-reliability-audit' },
  { label: 'Contact', hint: 'hire brief start', href: '/contact' },
] as const

type Mode = 'idle' | 'thinking' | 'answered' | 'error'

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState<Mode>('idle')
  const [answer, setAnswer] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)
  const convRef = useRef<string | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setMode('idle')
    setAnswer('')
    abortRef.current?.abort()
    abortRef.current = null
  }, [])

  const go = useCallback(
    (href: string) => {
      close()
      router.push(href)
    },
    [close, router],
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') close()
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [close])

  useEffect(() => {
    if (open) {
      const id = setTimeout(() => inputRef.current?.focus(), 30)
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        clearTimeout(id)
        document.body.style.overflow = previous
      }
    }
  }, [open])

  const askAgent = useCallback((question: string) => {
    setMode('thinking')
    setAnswer('')

    abortRef.current?.abort()
    const ac = new AbortController()
    abortRef.current = ac

    ;(async () => {
      try {
        const res = await fetch(CHAT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: question,
            conversationId: convRef.current,
            companyId: COMPANY_ID,
          }),
          signal: ac.signal,
        })
        if (!res.ok) throw new Error(`http ${res.status}`)
        const d = (await res.json()) as {
          type: string
          content: string
          conversationId?: string | null
        }
        if (d.type === 'error') throw new Error('backend error')
        if (d.conversationId) convRef.current = d.conversationId
        setMode('answered')
        setAnswer(String(d.content || ''))
      } catch {
        if (ac.signal.aborted) return
        setMode('error')
        setAnswer(
          'The agent did not answer — it may be cold-starting. Try again in a few seconds, or email contact@djaouad.is-a.dev.',
        )
      }
    })()
  }, [])

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    const q = query.trim()
    if (!q) return
    const exact = ROUTES.find(
      (r) =>
        r.label.toLowerCase() === q.toLowerCase() ||
        r.hint.split(' ').includes(q.toLowerCase()),
    )
    if (exact && mode === 'idle') {
      go(exact.href)
      return
    }
    askAgent(q)
  }

  const filtered = ROUTES.filter(
    (r) =>
      !query ||
      r.label.toLowerCase().includes(query.toLowerCase()) ||
      r.hint.includes(query.toLowerCase()),
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
        aria-label="Ask anything — opens command palette"
      >
        <Search className="size-4" aria-hidden />
        <span className="hidden xl:inline">Ask anything</span>
        <kbd className="hidden rounded-sm border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] xl:inline">
          ⌘K
        </kbd>
      </button>

      {/*
        Portalled to document.body on purpose. This component is mounted inside
        the desktop nav cluster, which is display:none below lg — a modal
        rendered in place would inherit that and stay invisible.

        The overlay stays mounted and toggles visibility rather than mounting
        on open: the OPEN state is the natural state, so the palette is
        readable even where animation frames are throttled. Closed, it is
        inert so its buttons stay out of the tab order.
      */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              'fixed inset-0 z-[100] flex items-start justify-center bg-background/80 px-4 pt-[12vh] backdrop-blur-sm',
              open ? 'visible' : 'invisible pointer-events-none',
            )}
            onClick={close}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Ask anything"
              aria-hidden={!open}
              inert={!open}
              className={cn(
                'w-full max-w-xl overflow-hidden rounded-xl border border-border bg-popover shadow-[var(--shadow-overlay)]',
                'transition-transform duration-200 ease-out',
                open
                  ? 'visible translate-y-0 scale-100'
                  : 'invisible -translate-y-1 scale-[0.98]',
              )}
              onClick={(e) => e.stopPropagation()}
            >
                  <form
                    onSubmit={onSubmit}
                    className="flex items-center gap-3 border-b border-border px-5 py-4"
                  >
                    <Sparkles className="size-4 shrink-0 text-primary" aria-hidden />
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value)
                        if (mode !== 'idle') {
                          setMode('idle')
                          setAnswer('')
                        }
                      }}
                      placeholder="Ask about my work, pricing, availability…"
                      aria-label="Ask a question"
                      className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/70"
                    />
                    <kbd className="rounded-sm border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                      esc
                    </kbd>
                  </form>

                  <div className="max-h-[50vh] overflow-y-auto p-2">
                    {mode === 'thinking' && (
                      <div className="flex items-center gap-3 px-4 py-6 text-sm text-muted-foreground">
                        <span className="size-2 animate-pulse rounded-full bg-primary" />
                        Asking my agent…
                      </div>
                    )}

                    {mode === 'error' && (
                      <p className="px-4 py-6 text-sm leading-relaxed text-muted-foreground">
                        {answer}
                      </p>
                    )}

                    {mode === 'answered' && (
                      <div className="px-4 py-4">
                        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                          {answer}
                        </p>
                        <button
                          type="button"
                          onClick={() => go('/contact')}
                          className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                        >
                          Start a project <ArrowRight className="size-3.5" aria-hidden />
                        </button>
                      </div>
                    )}

                    {(mode === 'idle' || mode === 'answered') &&
                      filtered.length > 0 && (
                        <>
                          <p className="px-4 pb-1 pt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            Jump to
                          </p>
                          <ul>
                            {filtered.map((r) => (
                              <li key={r.href}>
                                <button
                                  type="button"
                                  onClick={() => go(r.href)}
                                  className={cn(
                                    'flex w-full items-center justify-between rounded-md px-4 py-2.5 text-left text-sm',
                                    'text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
                                  )}
                                >
                                  {r.label}
                                  <CornerDownLeft
                                    className="size-3 opacity-40"
                                    aria-hidden
                                  />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                  </div>

                  <div className="border-t border-border px-5 py-2.5 font-mono text-[10px] text-muted-foreground/70">
                    Answers come from the same agent I deploy for clients
                  </div>
                </div>
          </div>,
          document.body,
        )}
    </>
  )
}