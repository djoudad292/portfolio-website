import { cn } from '@/lib/utils'

/**
 * The page shell. Provides the content column and the horizontal gutters so
 * every route lines up on the same grid.
 *
 * The width is a fixed rem value, not a percentage of the viewport: the
 * previous percentage token resolved through Tailwind's default container
 * scale and silently capped the entire site at 576px on a 1440px screen.
 */
export function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[var(--shell-max)] px-5 sm:px-8 lg:px-10',
        className,
      )}
    >
      {children}
    </div>
  )
}

/**
 * A vertical band on a page. Applies the shared section rhythm and, unless
 * `bleed` is set, the shared content column.
 */
export function Section({
  children,
  className,
  id,
  bleed = false,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  bleed?: boolean
}) {
  return (
    <section id={id} className={cn('py-12 sm:py-16 lg:py-20', className)}>
      {bleed ? children : <SectionWrapper>{children}</SectionWrapper>}
    </section>
  )
}

/**
 * Reading column for long-form prose. Keeps line length in the 60–75ch band
 * where long text stays readable instead of running edge to edge.
 */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('max-w-[var(--prose-max)]', className)}>{children}</div>
}