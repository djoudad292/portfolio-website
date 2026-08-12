"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Monitor, Smartphone, Server, BrainCircuit } from "lucide-react"

const categories = [
  {
    icon: Monitor,
    title: "Web Frontend",
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "HTML5",
      "CSS3",
      "JavaScript",
      "PWA",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    techs: [
      "React Native",
      "Expo",
      "EAS Builds",
      "Android APK",
      "Push Notifications",
      "Responsive Design",
    ],
  },
  {
    icon: Server,
    title: "Backend & DevOps",
    techs: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "WebSockets",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "Netlify",
      "Render",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Data",
    techs: [
      "LLM Integration",
      "RAG (pgvector)",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
      "OpenAI",
      "Gemini / OpenRouter",
      "AI Chatbots",
      "Intelligent Automation",
    ],
  },
]

export function TechStack() {
  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="SKILLS"
          title="Technologies I Work With"
          description="My toolkit for building production-grade web, mobile, and AI-powered applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.15 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-primary/10 p-2.5">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + techIndex * 0.03,
                    }}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
