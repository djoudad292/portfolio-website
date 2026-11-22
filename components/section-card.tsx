import { cn } from '@/lib/utils'

type Padding = 'sm' | 'md' | 'lg'

const paddingMap: Record<Padding, string> = {
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
}

/**
 * The card surface. Every boxed region on the site is this component, so the
 * border colour, radius and padding cannot drift page to page.
 *
 * Depth comes from the border and the one-step background lift — not from a
 * shadow. Cards that need to read as interactive opt in via `interactive`.
 */
export function SectionCard({
  className,
  padding = 'md',
  interactive = false,
  flat = false,
  children,
  ...props
}: {
  className?: string
  padding?: Padding
  interactive?: boolean
  flat?: boolean
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="section-card"
      className={cn(
        'rounded-lg border',
        flat ? 'border-border/60 bg-background' : 'border-border bg-card',
        paddingMap[padding],
        interactive &&
          'transition-colors hover:border-primary/40 hover:bg-accent/40',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}