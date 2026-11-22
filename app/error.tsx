'use client'

import Link from 'next/link'

import { ButtonLink } from '@/components/button'

/**
 * Route error boundary. Uses the shared button and type scale instead of the
 * one-off rounded-full button the generated version shipped with.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
        Something failed
      </p>
      <h1 className="mt-5 max-w-[20ch] font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
        This page didn&rsquo;t load.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
        {error.digest ? (
          <>
            The error was logged with reference{' '}
            <span className="font-mono text-xs text-foreground">{error.digest}</span>. Try
            again, or email{' '}
            <a
              href="mailto:contact@djaouad.is-a.dev"
              className="text-primary underline-offset-4 hover:underline"
            >
              contact@djaouad.is-a.dev
            </a>{' '}
            if it keeps happening.
          </>
        ) : (
          'An unexpected error occurred. Try again, or email contact@djaouad.is-a.dev if it keeps happening.'
        )}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" variant="primary">
          Back to home
        </ButtonLink>
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary sm:text-base"
        >
          Try again
        </button>
      </div>
      <Link
        href="/work"
        className="mt-6 font-mono text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
      >
        Or see what I&rsquo;ve built →
      </Link>
    </main>
  )
}