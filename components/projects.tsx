"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Github,
  ExternalLink,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Bot,
  MessageSquare,
  Database,
  CalendarClock,
  Users,
  Gauge,
} from "lucide-react"

const project = {
  icon: Bot,
  title: "AI Virtual Receptionist",
  category: "AI-Powered Platform · Web + Mobile + Website Widget",
  description:
    "A 24/7 AI receptionist that answers customer questions, captures leads, books appointments, and routes chats to the right department. Built full-stack with a RAG knowledge base so every answer is grounded in the company's own documents — with visible citations and a strict no-invention policy.",
  techStack: [
    "Next.js",
    "React Native",
    "NestJS",
    "PostgreSQL",
    "pgvector",
    "Socket.io",
    "OpenRouter (Gemini)",
    "TypeScript",
    "TailwindCSS",
  ],
  features: [
    { icon: MessageSquare, text: "Real-time chat with streaming AI responses" },
    { icon: Database, text: "RAG knowledge base (upload docs → chunk → embed → cite)" },
    { icon: Users, text: "Department routing + live human agent takeover" },
    { icon: CalendarClock, text: "Appointment booking parsed from natural language" },
    { icon: Gauge, text: "Lead capture, analytics, and multi-tenant isolation" },
    { icon: Smartphone, text: "Native mobile app + embeddable website widget" },
  ],
  architecture:
    "NestJS + Socket.io backend on Render, Next.js dashboard on Netlify, and a React Native (Expo/EAS) Android app — all sharing one Postgres + pgvector database. Knowledge is chunked and embedded (OpenAI 1536-dim) into pgvector; the AI retrieval pipeline gates every answer on published, retrieved context with a structured intent/lead/appointment schema. Deploys run automatically via GitHub Actions (CI, Netlify, EAS, APK).",
  links: {
    demo: "https://chat.djaouad.tech",
    github: "https://github.com/djoudad292/ai-virtual-receptionist",
    mobile:
      "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk/ai-receptionist.apk",
  },
}

function FeatureRow({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </span>
      <span>{text}</span>
    </li>
  )
}

export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = project.icon

  return (
    <section id="project" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="FEATURED PROJECT"
          title="AI Virtual Receptionist"
          description="A complete product I designed and shipped end-to-end — web, mobile, and AI."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card transition-all duration-300 hover:border-primary/50"
        >
          {/* Header */}
          <div className="border-b border-border p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-secondary/60 px-3 py-1 font-mono text-xs text-secondary-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <FeatureRow key={f.text} icon={f.icon} text={f.text} />
              ))}
            </ul>

            {/* Technical details (expandable) */}
            <div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-primary/80 transition-colors hover:text-primary"
              >
                {isExpanded ? "Hide" : "View"} Technical Details
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isExpanded && (
                <div className="mt-3 rounded-lg border border-border/50 bg-secondary/30 p-4">
                  <p className="text-xs leading-relaxed text-muted-foreground/90">
                    {project.architecture}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 border-t border-border p-6 pt-5 sm:p-8">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={project.links.mobile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Smartphone size={16} />
              Mobile App (APK)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
