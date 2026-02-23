"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Server, Monitor, Cloud, Smartphone } from "lucide-react"

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    techs: [
      "React Native",
      "Expo",
      "Android",
      "iOS",
      "Push Notifications",
      "App Store Deployment",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    techs: [
      "Node.js",
      "NestJS",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Microservices",
      "REST APIs",
      "WebSockets",
      "WebRTC",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Tools",
    techs: ["Docker", "GitHub Actions", "Nginx", "Linux", "Firebase", "Git"],
  },
]

export function TechStack() {
  return (
    <section id="tech" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="TECH STACK"
          title="Technologies I Work With"
          description="My core toolkit for building production-grade web and mobile applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
