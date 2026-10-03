"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Sparkles, X } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "What I Build" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/cv", label: "About" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/#top" className="flex shrink-0 items-center gap-3">
          <Image
            src="/djaouad-logo-trimmed.png"
            alt="Djaouad Frih"
            width={362}
            height={357}
            className="h-12 w-12 object-contain brightness-[1.25] saturate-[1.15]"
            priority
          />
          <span className="hidden font-display text-2xl tracking-tight text-foreground sm:inline">
            Djaouad Frih<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <CommandPalette />
          </li>
          <li>
            <a
              href="/#project-intake"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a Project
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <ul className="flex flex-col px-6 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            {/*
                The desktop command palette trigger is `hidden md:inline-flex`, so
                on a phone the feature was unreachable. CommandPalette listens for
                this event, so dispatching it opens the palette without needing
                keyboard shortcuts.
              */}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    window.dispatchEvent(new CustomEvent("open-command-palette"))
                  }}
                  className="flex min-h-11 w-full items-center gap-2 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                  Ask anything
                </button>
              </li>
            </ul>

            <div className="px-6 pb-4">
              <a
                href="/#project-intake"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
