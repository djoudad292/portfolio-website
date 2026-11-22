import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

import { email, whatsappUrl } from '@/lib/socials'
import { PRICE_ANCHOR, TIMEZONE_CLAIM } from '@/lib/positioning'

const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/benchmark', label: 'Benchmark' },
  { href: '/ai-reliability-audit', label: 'Free audit' },
  { href: '/contact', label: 'Contact' },
] as const

/**
 * Site footer.
 *
 * The site previously had none: every route ended mid-page with no sitemap, no
 * contact route and no legal or availability line, so a visitor who scrolled to
 * the bottom had nowhere to go. This carries the route map plus the one
 * commercial anchor, imported from lib/positioning so it cannot drift.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[var(--shell-max)] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div>
            <p className="font-display text-2xl tracking-tight">
              Djaouad Frih<span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
              Retrieval layers and agent loops scored against your own documents,
              with the failures published alongside the scores. {PRICE_ANCHOR}.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {TIMEZONE_CLAIM}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Elsewhere
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  <Mail className="size-3.5" aria-hidden />
                  {email}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/djoudad292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  <Github className="size-3.5" aria-hidden />
                  GitHub
                  <ArrowUpRight className="size-3 opacity-50" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/djaouad-frih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  <Linkedin className="size-3.5" aria-hidden />
                  LinkedIn
                  <ArrowUpRight className="size-3 opacity-50" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  WhatsApp
                  <ArrowUpRight className="size-3 opacity-50" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Djaouad Frih
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with Next.js · every claim on this site links to something you can open
          </p>
        </div>
      </div>
    </footer>
  )
}