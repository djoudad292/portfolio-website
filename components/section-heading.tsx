"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  index?: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl lg:mb-16"
    >
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {index ? `${index} / ` : ""}
        {label}
        <span aria-hidden className="h-px flex-1 bg-border" />
      </p>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}