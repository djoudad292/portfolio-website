import Link from 'next/link'

import { ButtonLink } from '@/components/button'

/*
 * Not-found page.
 *
 * Next's built-in 404 renders an unstyled 24px `next-error-h1` with inline
 * styles, which reads as a different website inside this one. This mirrors
 * `error.tsx` so the last reachable surface uses the same type scale, eyebrow
 * and button as every other page.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">404</p>
      <h1 className="mt-5 max-w-[20ch] font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
        That page isn&rsquo;t here.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
        The link may be out of date, or the page moved. Everything published here is
        reachable from one of these.
      </p>

      <nav aria-label="Main pages" className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/work" variant="primary">
          Work
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary">
          Pricing
        </ButtonLink>
        <ButtonLink href="/benchmark" variant="secondary">
          Benchmark
        </ButtonLink>
        <ButtonLink href="/ai-reliability-audit" variant="secondary">
          Free audit
        </ButtonLink>
      </nav>

      <Link
        href="/"
        className="mt-6 font-mono text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
      >
        Or go back to the homepage &rarr;
      </Link>
    </main>
  )
}