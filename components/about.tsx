"use client"

import { SectionHeading } from "./section-heading"

const focus = [
  {
    title: "Web apps",
    text: "React and Next.js products with clean, accessible interfaces — from landing pages to full dashboards.",
  },
  {
    title: "Mobile apps",
    text: "React Native and Expo apps shipped to the App Store and Google Play, built once and run on both.",
  },
  {
    title: "AI features",
    text: "Chatbots, knowledge bases, and automation — grounded in real data, honest about what they don't know.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="About" title="A developer who ships the whole thing." />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            I'm Djaouad, a full-stack developer who helps businesses and entrepreneurs ship
            software that works — on schedule and to scope. Most recently I delivered a website
            within two weeks for a client in the UK, and a complete full-stack build on schedule
            for a client in Cyprus.
            <br />
            <br />
            What you get is the whole picture: the interface, the API, the database, and — more
            recently — the AI layer. The systems I build cite their sources and hand off to a
            human when they're unsure.
          </p>

          <div className="flex flex-col">
            {focus.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-5 border-t border-border py-5 first:border-t-0 lg:py-6"
              >
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}