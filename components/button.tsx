import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * One button, used everywhere a call to action appears.
 *
 * Every previous variant of this component (PrimaryButton, SecondaryButton,
 * ChipButton, plus a dozen hand-inlined copies across the pages) had drifted
 * to a different radius, padding and text size. This is the only one.
 *
 * Render it as a link with `href`, or as a real <button> by omitting `href`.
 */
type Variant = 'primary' | 'secondary' | 'ghost' | 'quiet'
type Size = 'sm' | 'md' | 'lg'

const base = cn(
  'group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap',
  'font-medium transition-colors duration-150',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
  'disabled:pointer-events-none disabled:opacity-50',
)

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/85',
  secondary:
    'border border-border bg-card text-foreground hover:border-primary/60 hover:text-primary',
  ghost: 'text-muted-foreground hover:bg-accent hover:text-foreground',
  quiet: 'text-primary hover:text-primary/80',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 rounded-md px-3.5 text-sm',
  md: 'h-11 rounded-md px-5 text-sm sm:text-base',
  lg: 'h-13 rounded-md px-6 text-base sm:px-7 sm:text-lg',
}

export function buttonClass({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: Variant
  size?: Size
  className?: string
} = {}) {
  return cn(base, variants[variant], sizes[size], className)
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClass({ variant, size, className })} {...props} />
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  href,
  external,
  children,
  ...props
}: CommonProps & {
  href: string
  external?: boolean
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass({ variant, size, className })}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </Link>
  )
}

/**
 * Compact mono tag used for links to a live demo, source, or download.
 * Distinct from Button on purpose: these sit inside cards, several per row.
 */
export function ChipLink({
  href,
  className,
  children,
  ...props
}: { href: string; className?: string; children: React.ReactNode } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border border-border bg-background/60',
        'px-2.5 py-1.5 font-mono text-xs text-muted-foreground',
        'transition-colors hover:border-primary/60 hover:text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}