'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'

import { CommandPalette } from '@/components/command-palette'
import { buttonClass } from '@/components/button'
import { cn } from '@/lib/utils'

/**
 * Primary navigation.
 *
 * The previous version listed two links ("Work", "Free Audit") while the site
 * shipped six routes, so Pricing, Benchmark and Work were reachable only by
 * scrolling the homepage or from a footer that did not exist. Every route is
 * now in the nav, with the current one marked via aria-current.
 */
const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/benchmark', label: 'Benchmark' },
  { href: '/ai-reliability-audit', label: 'Free audit' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet on navigation, on Escape, and lock the page behind it.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || open
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[var(--shell-max)] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Djaouad Frih — home"
        >
          <Image
            src="/djaouad-logo-trimmed.png"
            alt=""
            width={362}
            height={357}
            className="h-8 w-auto object-contain brightness-125 saturate-110"
            priority
          />
          <span className="hidden font-display text-xl tracking-tight sm:inline">
            Djaouad Frih<span className="text-primary">.</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'rounded-md px-3 py-2 text-sm transition-colors',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CommandPalette />
          <Link
            href="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            className={cn(
              buttonClass({ size: 'sm' }),
              isActive('/contact') && 'ring-2 ring-primary/40 ring-offset-2 ring-offset-background',
            )}
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/*
        Mobile sheet. Shown and hidden instantly rather than animated: an
        animated panel whose height or opacity has to transition to its end
        state is unusable where animation frames are throttled (background
        tabs, low-power mode, headless). Closed, the sheet is inert and
        aria-hidden so its links stay out of the tab order.
      */}
      <div className={cn('lg:hidden', open ? 'block' : 'hidden')}>
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background"
        >
          <div className="mx-auto max-w-[var(--shell-max)] px-5 py-4 sm:px-8">
            <ul className="flex flex-col">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={cn(
                      'flex min-h-12 items-center rounded-md px-3 text-base transition-colors',
                      isActive(link.href)
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                aria-current={isActive('/contact') ? 'page' : undefined}
                className={buttonClass({ size: 'md', className: 'w-full' })}
              >
                Start a project
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  window.dispatchEvent(new Event('open-command-palette'))
                }}
                className="min-h-11 w-full rounded-md px-3 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Ask about my work, pricing, availability…
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}