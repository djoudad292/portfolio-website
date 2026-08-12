"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Quote, Star } from "lucide-react"

interface Testimonial {
  name: string
  country: string
  flag: string
  quote: string
  reviewUrl: string
  profileUrl: string
}

const testimonials: Testimonial[] = [
  {
    name: "Bilal Kadri",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "Great people, very good service made my website within 2 weeks in such a professional manner, very good communication skills would highly recommend!!",
    reviewUrl: "https://www.facebook.com/share/r/18MiUF32rd/",
    profileUrl: "https://www.facebook.com/share/19Qx9MsT6b/",
  },
  {
    name: "Muhhamet Novruzov",
    country: "Cyprus",
    flag: "🇨🇾",
    quote:
      "Huge shout-out to djaouad! 🙌 Complete, fully functional full-stack build delivered right on schedule. That's how it's done! 💥 Star developer right here. ⭐",
    reviewUrl: "https://www.facebook.com/share/r/18MiUF32rd/",
    profileUrl: "https://www.facebook.com/share/1JTbdKi3oe/",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:p-8"
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" />

      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="flex-1 text-pretty text-base leading-relaxed text-foreground/90">
        “{t.quote}”
      </p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
            {initials(t.name)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {t.flag} {t.country}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5 text-xs">
          <a
            href={t.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            View on Facebook →
          </a>
          <a
            href={t.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Profile
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="TESTIMONIALS"
          title="What Clients Say"
          description="Real feedback from people I've built products for."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
