import { cn } from '@/lib/utils'

/**
 * The mono eyebrow that opens every page and major section.
 *
 * Replaces the hand-rolled `<span className="inline-block rounded-md border
 * ... font-mono text-[var(--text-xs)] uppercase tracking-wider">` that was
 * duplicated in five page files, each with slightly different padding.
 *
 * Set `rule` to stretch a hairline to the right edge — used for section
 * headings, where the label and the rule read as one gesture.
 */
export function Eyebrow({
  children,
  rule = false,
  tone = 'muted',
  className,
}: {
  children: React.ReactNode
  rule?: boolean
  tone?: 'muted' | 'brand'
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {rule ? (
        <p
          className={cn(
            'font-mono text-xs uppercase tracking-[0.18em]',
            tone === 'brand' ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          {children}
        </p>
      ) : (
        <span
          className={cn(
            'inline-flex items-center rounded-sm border border-border bg-secondary/60',
            'px-2.5 py-1 font-mono text-xs uppercase tracking-[0.14em]',
            tone === 'brand' ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          {children}
        </span>
      )}
      {rule && <span aria-hidden className="h-px flex-1 bg-border" />}
    </div>
  )
}