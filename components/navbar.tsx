"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Sparkles, X, Briefcase, Rocket, Target } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"

const navLinks = [
  { href: "/#work", label: "Work", icon: Briefcase },
  { href: "/hire-ai-developer", label: "What I Build", icon: Rocket },
  { href: "/ai-reliability-audit", label: "Free Audit", icon: Target },
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/#top" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/djaouad-logo-trimmed.png"
            alt="Djaouad Frih"
            width={362}
            height={357}
            className="h-9 sm:h-10 w-auto object-contain brightness-[1.25] saturate-[1.15]"
            priority
          />
          <span className="hidden font-display text-sm sm:text-xl tracking-tight text-foreground sm:inline">
            Djaouad Frih<span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-4 sm:gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="h-3 sm:h-3.5 w-3 sm:w-3.5 shrink-0" />
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <CommandPalette />
          </li>
          <li>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Rocket className="h-3 sm:h-3.5 w-3 sm:w-3.5 shrink-0 mr-1 sm:mr-2" />
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
          className="-mr-1 inline-flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center text-foreground md:hidden"
        >
          {isOpen ? <X className="h-4 sm:h-5 w-4 sm:w-5" /> : <Menu className="h-4 sm:h-5 w-4 sm:w-5" />}
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
            <ul className="flex flex-col px-4 sm:px-6 py-3 sm:py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 sm:gap-3 block px-3 sm:px-4 py-3 sm:py-3.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <link.icon className="h-3.5 w-3.5 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    window.dispatchEvent(new CustomEvent("open-command-palette"))
                  }}
                  className="flex min-h-10 sm:min-h-11 w-full items-center gap-2 sm:gap-3 px-3 sm:px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Sparkles className="h-3.5 sm:h-4 w-3.5 sm:w-4 shrink-0 text-primary" />
                  Ask anything
                </button>
              </li>
            </ul>

            <div className="px-4 sm:px-6 pb-3 sm:pb-4">
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-10 sm:min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 sm:px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Rocket className="h-3 sm:h-3.5 w-3 sm:w-3.5 shrink-0 mr-1 sm:mr-2" />
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
