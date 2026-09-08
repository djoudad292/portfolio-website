"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "./section-heading"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  company: string
  whatShouldItDo: string
  projectType: string
  contactMethod: string
}

const PROJECT_TYPES = [
  "AI Integration",
  "Custom AI System",
  "AI-Powered Product",
  "Full-Stack Build",
  "Mobile App",
  "Other / Not sure",
]

const CONTACT_PREFERENCES = [
  "Email",
  "WhatsApp",
  "Calendly call",
]

export function ProjectIntake() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    whatShouldItDo: "",
    projectType: "",
    contactMethod: "Email",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType) {
      toast.error("Please fill in the required fields.")
      return
    }

    setSubmitting(true)

    try {
      await emailjs.send(
        "service_h4fap1u",
        "template_03xa579",
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "—",
          what_should_it_do: formData.whatShouldItDo || "—",
          project_type: formData.projectType,
          contact_method: formData.contactMethod,
          message: `[Project Intake] Name: ${formData.name}, Email: ${formData.email}, Company: ${formData.company || "—"}, What it should do: ${formData.whatShouldItDo || "—"}, Project type: ${formData.projectType}, Preferred contact: ${formData.contactMethod}`,
        },
        { publicKey: "3x5_0D_b9liuJXcsr" }
      )

      setSubmitted(true)
    } catch {
      toast.error("Something went wrong. Please try again or reach out directly.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="project-intake" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            index="08"
            label="Project intake"
            title="Tell me what you need built."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/25 bg-primary/5 p-10 text-center"
          >
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h3 className="mt-4 font-display text-2xl text-foreground">
              Project brief received.
            </h3>
            <p className="mt-3 text-muted-foreground">
              I&apos;ll review the requirements and get back to you with the next step — usually within a few hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="project-intake" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="08"
          label="Project intake"
          title="Tell me what you need built."
          description="Share the basics. I'll review the scope and get back to you with a clear plan — or questions if anything needs clarification."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="intake-name" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="intake-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="intake-email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="intake-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="intake-company" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Company
              </label>
              <input
                id="intake-company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Company or team name"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>

            {/* What should it do? */}
            <div>
              <label htmlFor="intake-what" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What should it do?
              </label>
              <textarea
                id="intake-what"
                rows={4}
                value={formData.whatShouldItDo}
                onChange={(e) => setFormData({ ...formData, whatShouldItDo: e.target.value })}
                placeholder="Describe the problem, the workflow, or what you're trying to achieve. Even a rough idea helps."
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="intake-type" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Project type <span className="text-primary">*</span>
              </label>
              <select
                id="intake-type"
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full appearance-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="" disabled>Select project type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Preferred Contact */}
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Preferred contact method
              </p>
              <div className="flex flex-wrap gap-3">
                {CONTACT_PREFERENCES.map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData({ ...formData, contactMethod: method })}
                    className={`rounded-xl border px-4 py-2.5 text-sm transition-colors ${
                      formData.contactMethod === method
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-foreground"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send project brief"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
