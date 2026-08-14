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
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {index ? `${index} / ` : ""}
        {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
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