'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Loader2, Mail, MessageSquare, Send, X } from 'lucide-react'

import { email } from '@/lib/socials'
import { controlClass } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Floating contact widget.
 *
 * Submits by opening the visitor's mail client, so there is no endpoint to
 * fail and no data captured server-side. Status is announced through a live
 * region and the form is disabled while a send is in flight.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isMobile, setIsMobile] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Must match the lg: breakpoint the panel layout switches at, not an
  // arbitrary 640px — a viewport between the two got the narrow mobile panel
  // with no backdrop and no scroll lock.
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    window.addEventListener('orientationchange', check)
    return () => {
      window.removeEventListener('resize', check)
      window.removeEventListener('orientationchange', check)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    if (!open || !isMobile) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open, isMobile])

  const update = (field: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const body = [`Name: ${form.name}`, `Email: ${form.email}`, '', form.message].join('\n')
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      `Message from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`

    const opened = window.open(mailto, '_blank')
    if (!opened) window.location.href = mailto

    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => {
      setStatus('idle')
      setOpen(false)
    }, 3200)
  }

  const busy = status === 'sending' || status === 'sent'

  return (
    <div className="fixed bottom-5 right-5 z-[100] lg:bottom-6 lg:right-6">
      {/* Backdrop and panel stay mounted and toggle visibility. Opacity is
          deliberately NOT animated: any element whose visibility depends on a
          transition or animation reaching its end state is unreadable where
          animation frames are throttled (background tabs, low-power mode,
          headless). Transform-only motion degrades to a few pixels of offset,
          never to invisible content. */}
      <div
        className={cn(
          'fixed inset-0 z-[99] bg-background/70 backdrop-blur-sm lg:hidden',
          open && isMobile ? 'visible' : 'invisible pointer-events-none',
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal={isMobile || undefined}
        aria-label="Send a message"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          'fixed inset-x-3 bottom-[5.5rem] z-[101] mx-auto flex max-h-[calc(100dvh-7rem)] max-w-md flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-overlay)]',
          'transition-transform duration-200 ease-out',
          'lg:absolute lg:inset-x-auto lg:bottom-16 lg:right-0 lg:mx-0 lg:w-[22rem] lg:max-h-none',
          open
            ? 'visible translate-y-0 scale-100'
            : 'invisible translate-y-2 scale-[0.98] pointer-events-none',
        )}
      >
            <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/40 px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/15">
                  <Mail aria-hidden className="size-4 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">Send a message</p>
                  <p className="truncate font-mono text-[10px] text-muted-foreground">
                    Opens in your email app
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="-mr-1 inline-flex size-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>

            <form
              onSubmit={submit}
              className="flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto overscroll-contain p-4"
            >
              <div className="space-y-1.5">
                <label htmlFor="chat-name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="chat-name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  disabled={busy}
                  className={cn(controlClass, 'h-10 py-2')}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="chat-email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="chat-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  disabled={busy}
                  className={cn(controlClass, 'h-10 py-2')}
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="chat-message"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="chat-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  disabled={busy}
                  className={cn(controlClass, 'resize-none')}
                  placeholder="What can I help you build?"
                />
              </div>

              <button
                type="submit"
                disabled={busy}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
              >
                {status === 'sending' && (
                  <>
                    <Loader2 aria-hidden className="size-4 animate-spin" />
                    Opening email…
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <Check aria-hidden className="size-4" />
                    Sent — check your email app
                  </>
                )}
                {status !== 'sending' && status !== 'sent' && (
                  <>
                    <Send aria-hidden className="size-4" />
                    Send via email
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === 'error' && (
                  <p role="alert" className="text-xs leading-relaxed text-destructive">
                    Could not open your email app. Email{' '}
                    <a
                      href={`mailto:${email}`}
                      className="underline underline-offset-4"
                    >
                      {email}
                    </a>{' '}
                    directly.
                  </p>
                )}
              </div>

              <p className="text-center text-[10px] leading-relaxed text-muted-foreground/80">
                No data leaves this page until you hit send in your mail client.
              </p>
            </form>
        </div>

      {/* z-[101] keeps the trigger above the mobile backdrop: an un-z-indexed
          button sat underneath the overlay and could not be tapped to close. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact form' : 'Open contact form'}
        aria-expanded={open}
        className={cn(
          'relative z-[101] flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground',
          'shadow-lg transition-transform duration-200 hover:scale-105',
          open && 'rotate-90',
        )}
      >
        {open ? (
          <X className="size-6" aria-hidden />
        ) : (
          <MessageSquare className="size-6" aria-hidden />
        )}
      </button>

      {!open && (
        <div className="absolute bottom-16 right-0 mb-2 hidden animate-in whitespace-nowrap fade-in-0 slide-in-from-right-2 duration-300 sm:block">
          <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[11px] shadow-[var(--shadow-panel)]">
            <span className="relative flex size-1.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-success" />
            </span>
            <span className="font-medium text-foreground">Available</span>
            <span className="text-muted-foreground">· new project enquiries</span>
          </div>
        </div>
      )}
    </div>
  )
}