"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, Github, Mail, Bot, Smartphone, Code2 } from "lucide-react"

const roles = [
  "Full Stack Web Developer",
  "Mobile Developer",
  "AI Integration Specialist",
]

const focusAreas = [
  { icon: Code2, label: "Web Apps" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Bot, label: "AI & RAG" },
]

function useTypewriter(words: string[], typeSpeed = 70, pause = 1600) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === "") {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)))
        },
        deleting ? typeSpeed / 2 : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, pause])

  return text
}

function Typewriter() {
  const text = useTypewriter(roles)
  return (
    <span className="text-primary">
      {text}
      <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary align-middle" aria-hidden="true" />
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Animated grid + glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-10" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance &amp; full-time projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="text-primary">Djaouad Frih</span>
          <br />
          <span className="font-mono text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl">
            <Typewriter />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I build complete digital products — from web apps and mobile apps to
          AI-powered features like chatbots, RAG knowledge bases, and intelligent
          automation — delivered end-to-end with clean, scalable code.
        </motion.p>

        {/* Focus areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {focusAreas.map((area) => (
            <span
              key={area.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground"
            >
              <area.icon className="h-4 w-4 text-primary" />
              {area.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#project"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View My Project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="https://github.com/djoudad292"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-20"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
