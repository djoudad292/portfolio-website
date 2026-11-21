import Link from "next/link"
import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = PropsWithChildren<{
  className?: string
  href: string
  external?: boolean
}>

/**
 * Primary call-to-action button. Fluid padding, rem-based text size.
 */
export function PrimaryButton({ className, href, external, children, ...props }: ButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-[var(--text-base)] font-semibold text-primary-foreground transition-colors hover:opacity-90",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-[var(--text-base)] font-semibold text-primary-foreground transition-colors hover:opacity-90",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

/**
 * Secondary (outline) call-to-action button. Mirrors PrimaryButton styling.
 */
export function SecondaryButton({ className, href, external, children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-border bg-card px-5 sm:px-6 py-3 sm:py-3.5 text-[var(--text-base)] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, className)}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cn(base, className)} {...props}>
      {children}
    </Link>
  )
}

/**
 * Small chip-style link button (used for try/code/android links on project cards).
 */
export function ChipButton({
  className,
  href,
  children,
  ...props
}: PropsWithChildren<{
  className?: string
  href: string
}>) {
  const base =
    "flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 font-mono text-[var(--text-xs)] transition-colors hover:border-primary hover:text-primary"
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, className)} {...props}>
      {children}
    </a>
  )
}
