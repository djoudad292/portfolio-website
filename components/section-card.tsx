import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

/**
 * Consistent card surface. All cards share the same border, radius, and
 * padding tokens so the design reads as one system across pages.
 */
export function SectionCard({
  className,
  padding = "6",
  ...props
}: PropsWithChildren<{
  className?: string
  padding?: "3" | "4" | "5" | "6" | "8" | "10"
}> & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="section-card"
      className={cn(
        "rounded-2xl border border-border bg-card",
        padding === "3" && "p-3 sm:p-4",
        padding === "4" && "p-4 sm:p-5",
        padding === "5" && "p-5 sm:p-6",
        padding === "6" && "p-6 sm:p-8",
        padding === "8" && "p-8 sm:p-10",
        padding === "10" && "p-10 sm:p-12",
        className,
      )}
      {...props}
    />
  )
}
