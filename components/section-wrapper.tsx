"use client"

import { PropsWithChildren } from "react"

/**
 * Consistent page shell. Every page wraps its content in this so max-width,
 * horizontal padding, and scroll behaviour are identical surface-wide.
 * Widths are percentages of the viewport; padding is rem-based.
 */
export function SectionWrapper({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto max-w-[var(--container-xl)] px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  )
}
