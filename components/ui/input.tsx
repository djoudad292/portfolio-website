import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * Shared control chrome. Every text input, textarea and select on the site
 * uses this exact recipe so field height, radius, border and focus behaviour
 * are identical across the contact form, the lead intake and the chat widget.
 *
 * Kept as a plain class string (not a component) so it can be applied to a
 * native <select>, which needs no extra wrapper.
 */
export const controlClass = cn(
  'w-full min-w-0 rounded-md border border-input bg-background text-base text-foreground',
  'px-3.5 py-2.5 placeholder:text-muted-foreground/70',
  'transition-colors outline-none',
  'focus:border-primary focus:ring-2 focus:ring-primary/20',
  'disabled:cursor-not-allowed disabled:opacity-60',
  'aria-invalid:border-destructive aria-invalid:focus:border-destructive aria-invalid:focus:ring-destructive/20',
)

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(controlClass, 'h-11', className)}
      {...props}
    />
  )
}

export { Input }