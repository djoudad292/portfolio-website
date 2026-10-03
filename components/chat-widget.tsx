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
  const widgetRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
      // Popup blocked — fallback to location.href which can't be blocked
      window.location.href = mailtoLink
    }
    // Can't reliably detect mail client, so assume success if no exception
    setStatus("sent")
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => {
      setStatus("idle")
      setIsOpen(false)
    }, 3000)
  }

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 shadow-xl transition-all hover:scale-105 hover:shadow-2xl ${
          isOpen ? "rotate-45" : ""
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-6 w-6 text-primary-foreground" />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-full max-w-sm"
          >
            <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Mail className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Send a message</p>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      Opens in your email app
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <div>
                  <label
                    htmlFor="chat-name"
                    className="block text-xs font-medium text-muted-foreground mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="chat-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                    disabled={status === "sending" || status === "sent"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-email"
                    className="block text-xs font-medium text-muted-foreground mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="chat-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                    disabled={status === "sending" || status === "sent"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-message"
                    className="block text-xs font-medium text-muted-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="chat-message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="What can I help you build?"
                    disabled={status === "sending" || status === "sent"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {status === "sent" && <Check className="h-4 w-4" />}
                  {status !== "sending" && status !== "sent" && <Send className="h-4 w-4" />}
                  {status === "sending"
                    ? "Opening email…"
                    : status === "sent"
                    ? "Sent! Check your email app"
                    : "Send via email"}
                </button>

                {status === "error" && (
                  <p className="text-center text-xs text-red-500">
                    Could not open email app. Please email{" "}
                    <a href={`mailto:${email}`} className="underline">
                      {email}
                    </a>{" "}
                    directly.
                  </p>
                )}

                <p className="text-center text-[10px] text-muted-foreground">
                  No data leaves this page until you hit send in your mail client.
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Business hours indicator */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="absolute bottom-16 right-0 hidden sm:block"
        >
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs text-muted-foreground shadow-lg">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Available · Usually replies within an hour
          </div>
        </motion.div>
      )}
    </div>
  )
}