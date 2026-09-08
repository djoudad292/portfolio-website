"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Send, Loader2, ArrowUpRight } from "lucide-react"
import { email } from "@/lib/socials"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

const inputClass =
  "w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"

export function ProjectIntake() {
  const [name, setName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [company, setCompany] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  const [existingProduct, setExistingProduct] = useState("")
  const [integrations, setIntegrations] = useState("")
  const [deadline, setDeadline] = useState("")
  const [budget, setBudget] = useState("")
  const [additional, setAdditional] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !emailAddress.trim() || !projectDesc.trim()) {
      toast.error("Please fill in your name, email, and project description.")
      return
    }

    setIsSending(true)
    try {
      const message = [
        `Project: ${projectDesc}`,
        existingProduct && `Existing product: ${existingProduct}`,
        integrations && `Integrations: ${integrations}`,
        deadline && `Deadline: ${deadline}`,
        budget && `Budget: ${budget}`,
        additional && `Additional context: ${additional}`,
      ]
        .filter(Boolean)
        .join("\n")

      await emailjs.send(
        "service_h4fap1u",
        "template_03xa579",
        {
          name,
          email: emailAddress,
          time: new Date().toLocaleString(),
          title: `Project inquiry from ${name}${company ? ` (${company})` : ""}`,
          message,
        },
        "3x5_0D_b9liuJXcsr"
      )
      toast.success("Project brief sent! I'll review the scope and respond within 24h.")
      setName("")
      setEmailAddress("")
      setCompany("")
      setProjectDesc("")
      setExistingProduct("")
      setIntegrations("")
      setDeadline("")
      setBudget("")
      setAdditional("")
    } catch (error) {
      console.error("Failed to send:", error)
      toast.error("Failed to send. Please try again or email directly.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <SectionHeading
            index="04"
            label="Start a project"
            title="Have a specific project in mind?"
            description="Tell me what you're trying to build, what it needs to connect to, and what outcome you need. I'll review the scope and respond with a realistic implementation plan and fixed quote."
          />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col justify-center gap-5"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="intake-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="intake-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="intake-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="intake-email"
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
              <label htmlFor="intake-company" className="mb-1.5 block text-sm font-medium text-foreground">
                Company <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="intake-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="intake-project" className="mb-1.5 block text-sm font-medium text-foreground">
                What do you want to build? <span className="text-primary">*</span>
              </label>
              <textarea
                id="intake-project"
                rows={4}
                required
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                placeholder="Describe the system, feature, or product you need built..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="intake-existing" className="mb-1.5 block text-sm font-medium text-foreground">
                  Existing product/system <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="intake-existing"
                  type="text"
                  value={existingProduct}
                  onChange={(e) => setExistingProduct(e.target.value)}
                  placeholder="e.g. SaaS app, mobile app, internal tool"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="intake-integrations" className="mb-1.5 block text-sm font-medium text-foreground">
                  What should it integrate with? <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="intake-integrations"
                  type="text"
                  value={integrations}
                  onChange={(e) => setIntegrations(e.target.value)}
                  placeholder="e.g. Stripe, Salesforce, PostgreSQL, APIs"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="intake-deadline" className="mb-1.5 block text-sm font-medium text-foreground">
                  Desired deadline <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="intake-deadline"
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="e.g. 3 weeks, end of October"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="intake-budget" className="mb-1.5 block text-sm font-medium text-foreground">
                  Budget range <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="intake-budget"
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. $2,000 - $5,000"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="intake-additional" className="mb-1.5 block text-sm font-medium text-foreground">
                Additional context <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="intake-additional"
                rows={3}
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
                placeholder="Anything else I should know — technical constraints, preferences, prior work..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
                    Describe your project
                  </>
                )}
              </button>
              <span className="text-xs text-muted-foreground">
                or{" "}
                <a
                  href="https://calendly.com/oufr29/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  book a call <ArrowUpRight className="inline h-3 w-3" />
                </a>
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
