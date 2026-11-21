"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  index?: string
  label?: string
  title: string
  description?: string
  size?: "3xl" | "4xl" | "5xl" | "6xl"
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  size = "4xl",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-12 lg:mb-16 max-w-[var(--container-lg)]"
    >
      {label && (
        <p className="mb-3 sm:mb-4 flex items-center gap-3 font-mono text-[var(--text-xs)] uppercase tracking-[0.25em] text-primary">
          {index ? `${index} / ` : ""}
          {label}
          <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
      )}
      <h2 className={`font-display leading-[1.05] tracking-tight text-foreground text-[var(--text-${size})]`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-pretty leading-relaxed text-[var(--text-base)] text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
