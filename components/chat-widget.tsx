"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Loader2, Check, Mail } from "lucide-react"
import { email } from "@/lib/socials"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isMobile, setIsMobile] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when open on mobile
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen, isMobile])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n")

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      `Chat widget message from ${formData.name}`
    )}&body=${encodeURIComponent(body)}`

    const opened = window.open(mailtoLink, "_blank")
    if (!opened) {
      window.location.href = mailtoLink
    }
    setStatus("sent")
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => {
      setStatus("idle")
      setIsOpen(false)
    }, 3000)
  }

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-[100]">
      {/* Backdrop on mobile when open */}
      {isOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99] lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat panel — positioned above button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-16 right-0 mb-2 w-full max-w-sm sm:max-w-md lg:max-w-sm"
          >
            <div className="rounded-2xl border border-border bg-card shadow-[0_25px_50px_-12px_rgb(0,0,0,0.25)] overflow-hidden ring-1 ring-black/5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">Send a message</p>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      Opens in your email app
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 space-y-3.5">
                <div>
                  <label
                    htmlFor="chat-name"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="chat-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-colors"
                    placeholder="Your name"
                    disabled={status === "sending" || status === "sent"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-email"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="chat-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    disabled={status === "sending" || status === "sent"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-message"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="chat-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-colors resize-none"
                    placeholder="What can I help you build?"
                    disabled={status === "sending" || status === "sent"}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {status === "sending" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Opening email…
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <Check className="h-4 w-4" />
                      Sent! Check your email app
                    </>
                  )}
                  {status !== "sending" && status !== "sent" && (
                    <>
                      <Send className="h-4 w-4" />
                      Send via email
                    </>
                  )}
                </motion.button>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs text-red-500"
                  >
                    Could not open email app. Please email{" "}
                    <a href={`mailto:${email}`} className="underline hover:text-red-400">
                      {email}
                    </a>{" "}
                    directly.
                  </motion.p>
                )}

                <p className="text-center text-[10px] text-muted-foreground/70">
                  No data leaves this page until you hit send in your mail client.
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action button — always visible */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl ${
          isOpen ? "rotate-45" : ""
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-7 w-7 text-primary-foreground" />
      </motion.button>

      {/* Availability indicator — only when closed, above button */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="absolute bottom-16 right-0 mb-2 hidden sm:block"
        >
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-[11px] text-muted-foreground shadow-lg ring-1 ring-black/5">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-500/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            <span className="font-medium text-foreground">Available</span>
            <span className="text-muted-foreground">· Usually replies within an hour</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}