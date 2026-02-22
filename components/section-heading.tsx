"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center lg:mb-16"
    >
      <p className="mb-2 font-mono text-sm tracking-widest text-primary">{label}</p>
      <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
