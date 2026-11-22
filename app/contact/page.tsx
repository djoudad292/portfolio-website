'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, ArrowUpRight, Check, Github, Linkedin, Loader2, Mail, Send } from 'lucide-react'

import { email, whatsappUrl } from '@/lib/socials'
import { Button } from '@/components/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Section } from '@/components/section'
import { SectionCard } from '@/components/section-card'
import { Eyebrow } from '@/components/eyebrow'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const ENQUIRY_TYPES = [
  'Free reliability audit',
  'Scoped build',
  'White-label delivery',
  'Not sure yet',
] as const

const TIMELINES = ['Exploring', 'Within 30 days', '1–3 months', 'Already in production'] as const

const BUDGETS = [
  'Audit first / deciding',
  '$3.5k – $7.5k',
  '$7.5k – $15k',
  '$15k+',
  'Agency milestone budget',
] as const

const emptyForm = {
  name: '',
  company: '',
  email: '',
  enquiryType: 'Free reliability audit',
  timeline: '',
  budget: '',
  message: '',
}

/**
 * Contact form.
 *
 * Submissions open the visitor's mail client with the brief pre-filled — there
 * is no backend to lose a message, and the form says so below the button.
 *
 * The previous version passed `noValidate` to the <form>, which disabled the
 * browser's own required/type=email validation, so submitting an empty form
 * silently "succeeded" and opened a blank email. Native validation is now left
 * on, and every status change is announced through a live region.
 */
export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState(emptyForm)

  // ?for=audit / ?for=build / ?for=agency preselect the enquiry type.
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get('for')
    const map: Record<string, string> = {
      audit: 'Free reliability audit',
      build: 'Scoped build',
      agency: 'White-label delivery',
    }
    if (preset && map[preset]) {
      setForm((f) => ({ ...f, enquiryType: map[preset] }))
    }
  }, [])

  const update = (field: keyof typeof emptyForm, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || '—'}`,
      `Email: ${form.email}`,
      `Enquiry: ${form.enquiryType}`,
      `Timeline: ${form.timeline || '—'}`,
      `Budget: ${form.budget || '—'}`,
      '',
      form.message,
    ].join('\n')

    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      `${form.enquiryType} — ${form.name}`,
    )}&body=${encodeURIComponent(body)}`

    const opened = window.open(mailto, '_blank')
    if (!opened) window.location.href = mailto

    setStatus('success')
    setForm(emptyForm)
  }

  const channels = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'WhatsApp',
      value: 'Message directly',
      href: whatsappUrl,
      icon: ArrowUpRight,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'djoudad292',
      href: 'https://github.com/djoudad292',
      icon: Github,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'djaouad-frih',
      href: 'https://www.linkedin.com/in/djaouad-frih',
      icon: Linkedin,
      external: true,
    },
  ]

  return (
    <main>
      <Section className="pb-10 pt-28 sm:pt-32">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-6 max-w-[22ch] font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Start a project
        </h1>
        <p className="mt-6 max-w-[var(--prose-max)] text-lg leading-relaxed text-muted-foreground">
          Tell me what you&rsquo;re building. I read every brief and reply with a plan, or
          honest questions if the scope needs clarifying.
        </p>
      </Section>

      <Section className="pt-4 sm:pt-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          {/* ------------------------------------------------------------ Form */}
          <form onSubmit={handleSubmit} className="min-w-0 space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Company or project (optional)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Work email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@company.com"
                aria-describedby="email-hint"
              />
              <p id="email-hint" className="text-xs text-muted-foreground">
                Used only to reply to this enquiry.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enquiryType">What do you need?</Label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={form.enquiryType}
                onChange={(e) => update('enquiryType', e.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {ENQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                What are you building? <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="The product, feature or problem you want solved — a few concrete details beat a polished brief."
                aria-describedby="message-hint"
              />
              <p id="message-hint" className="text-xs text-muted-foreground">
                Where does it fail today, and what does it cost you?
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={form.timeline}
                  onChange={(e) => update('timeline', e.target.value)}
                  className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select one</option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget range</Label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select one</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
              <Button
                type="submit"
                size="lg"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto"
              >
                {status === 'submitting' ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : (
                  <Send className="size-4" aria-hidden />
                )}
                {status === 'submitting' ? 'Opening your email app…' : 'Send brief via email'}
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-xs">
                Opens your email app with everything pre-filled. Nothing leaves this page
                until you hit send.
              </p>
            </div>

            {/* Status is announced, not just coloured. */}
            <div aria-live="polite" className="empty:hidden">
              {status === 'success' && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 rounded-lg border border-success/30 bg-success/[0.07] p-4 text-sm text-foreground"
                >
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>
                    Your email app opened with the brief pre-filled. Just hit send.
                  </span>
                </div>
              )}
              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/[0.07] p-4 text-sm text-foreground"
                >
                  <AlertCircle
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-destructive"
                  />
                  <span>
                    Could not open your email app. Email{' '}
                    <a
                      href={`mailto:${email}`}
                      className="text-primary underline underline-offset-4"
                    >
                      {email}
                    </a>{' '}
                    directly with your brief.
                  </span>
                </div>
              )}
            </div>
          </form>

          {/* ------------------------------------------------------- Sidebar */}
          <aside className="space-y-6">
            <SectionCard padding="md">
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Direct channels
              </h2>
              <ul className="mt-4 space-y-1">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-accent"
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <c.icon
                          aria-hidden
                          className="size-4 shrink-0 text-muted-foreground group-hover:text-primary"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm text-foreground">{c.label}</span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {c.value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="size-3.5 shrink-0 text-muted-foreground opacity-50"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard padding="md" flat>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3">
                {[
                  'I read the brief myself — no SDR, no sequence.',
                  'You get a reply within one business day.',
                  'If it fits, the free audit starts from your documents.',
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <span className="min-w-0">{step}</span>
                  </li>
                ))}
              </ol>
            </SectionCard>
          </aside>
        </div>
      </Section>
    </main>
  )
}