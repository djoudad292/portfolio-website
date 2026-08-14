"use client"

import { motion, useReducedMotion } from "framer-motion"

const words = [
  "Web Development",
  "Mobile Apps",
  "AI Integration",
  "Full Stack",
  "React Native",
  "LLM Chatbots",
  "RAG Knowledge Bases",
]

export function Ticker() {
  const reduceMotion = useReducedMotion()
  const items = [...words, ...words]
  return (
    <div aria-hidden className="overflow-hidden border-y border-border bg-foreground py-3">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {items.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.3em] text-background"
          >
            {word}
            <span className="text-primary">✳</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}