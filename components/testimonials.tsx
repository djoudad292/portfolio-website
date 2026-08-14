"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const testimonials = [
  {
    quote:
      "Great people, very good service. Made my website within 2 weeks in such a professional manner, very good communication skills would highly recommend!!",
    name: "Bilal Kadri",
    country: "United Kingdom",
    reviewUrl: "https://www.facebook.com/share/r/18MiUF32rd/",
    profileUrl: "https://www.facebook.com/share/19Qx9MsT6b/",
  },
  {
    quote:
      "Huge shout-out to djaouad! 🙌 Complete, fully functional full-stack build delivered right on schedule. That's how it's done! 💥 Star developer right here. ⭐",
    name: "Muhhamet Novruzov",
    country: "Cyprus",
    reviewUrl: "https://www.facebook.com/share/r/18MiUF32rd/",
    profileUrl: "https://www.facebook.com/share/1JTbdKi3oe/",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="02"
          label="Testimonials"
          title="What clients said."
        />

        <div className="space-y-10">
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-primary pl-6 sm:pl-8"
            >
              <p className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
                “{t.quote}”
              </p>
              <footer className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <cite className="font-semibold not-italic text-foreground">{t.name}</cite>
                <span aria-hidden>·</span>
                <span>{t.country}</span>
                <span aria-hidden>·</span>
                <a
                  href={t.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  Read on Facebook
                </a>
                <a
                  href={t.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  profile
                </a>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}