"use client"

import { useState, type ComponentType, type FormEvent } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Mail, Github, Linkedin, Send, Loader2, ArrowUpRight } from "lucide-react"
import { socials, WhatsAppIcon, whatsappNumber, whatsappHref, email } from "@/lib/socials"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

const iconFor: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  WhatsApp: WhatsAppIcon,
  Email: Mail,
}

export function Contact() {
  const [name, setName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !emailAddress.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.")
      return
    }

    setIsSending(true)
    try {
      await emailjs.send(
        "service_h4fap1u",
        "template_03xa579",
        {
          name: name,
          time: new Date().toLocaleString(),
          message: message,
          title: subject,
          email: email,
        },
        "3x5_0D_b9liuJXcsr"
      )
      toast.success("Email sent successfully!")
      setName("")
      setEmailAddress("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("Failed to send email:", error)
      toast.error("Failed to send email. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading index="04" label="Contact" title="Let's build something." />
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Tell me what you're working on — a website, a mobile app, or an AI feature. I
              usually reply within a day, and I'm happy to jump on a quick call or WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">WhatsApp</span>
                    <span className="block font-medium text-foreground">{whatsappNumber}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="block font-medium text-foreground">{email}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            </div>

            <p className="mb-3 mt-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Elsewhere
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = iconFor[social.label] ?? ArrowUpRight
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-5 rounded-2xl border border-border bg-card p-7 sm:p-10"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Project inquiry"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}