'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  UtensilsCrossed,
  CreditCard,
  Globe,
  Lock,
} from "lucide-react"

interface Project {
  icon: any
  title: string
  category: string
  description: string
  techStack: string[]
  features: string[]
  architecture: string
  github?: string
  githubBackend?: string
  demo?: string
}

// CLIENT PROJECTS - No links, confidential
const clientProjects: Project[] = [
  {
    icon: CreditCard,
    title: "LordHavale",
    category: "Payment Gateway Provider",
    description:
      "Sophisticated payment gateway serving Turkish market with enterprise-grade security, HTTP API integration, and VPS deployment via Docker containerization.",
    techStack: ["Next.js", "Nest.js", "PostgreSQL", "Docker", "TypeScript"],
    features: [
      "HTTP REST API with webhook integration",
      "Turkish localization and compliance",
      "AES-256 encryption for transactions",
      "Docker containerized production deployment",
      "Rate limiting and fraud detection",
      "TLS/SSL security protocols",
    ],
    architecture:
      "Next.js frontend with Nest.js microservices backend. PostgreSQL with ACID compliance handles transaction integrity. Docker Compose orchestrates containerized deployment on dedicated VPS. Security layer implements TLS encryption, request validation, and rate limiting middleware. Payment processing uses idempotency tokens and webhook verification.",
  },
  {
    icon: Globe,
    title: "Cuvva",
    category: "Progressive Web Platform",
    description:
      "Feature-rich PWA for British market with advanced automation: email workflows, dynamic PDF generation, certificate automation, and comprehensive document management.",
    techStack: ["Next.js", "Express.js", "MySQL", "PWA", "TypeScript"],
    features: [
      "Progressive Web App with offline support",
      "Automated email notification system",
      "Dynamic PDF and certificate generation",
      "Interactive hyperlinked document features",
      "MySQL-backed user data persistence",
      "Service worker caching strategy",
    ],
    architecture:
      "Next.js PWA framework with service workers for offline functionality. Express.js backend orchestrates automation workflows: Nodemailer for email templates, puppeteer for PDF generation, and custom certificate rendering. MySQL stores user profiles, documents, and transaction history. Frontend implements Redux state management with API caching for optimal performance.",
  },
]

// PORTFOLIO PROJECTS - With live links
const portfolioProjects: Project[] = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Landing Page",
    category: "Landing Page & Booking System",
    description:
      "Modern, SEO-optimized landing page for restaurant startup. Features hero section, menu showcase, online reservations, and testimonials built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive"],
    features: [
      "Server-side rendering for SEO optimization",
      "Menu management system",
      "Online reservation form integration",
      "Customer testimonials section",
      "Mobile-first responsive design",
      "Fast static page generation",
    ],
    architecture:
      "Next.js static site generation for optimal performance. Tailwind CSS provides responsive utility-first styling. Reservation system communicates with backend API for booking persistence. Component-based architecture enables easy content updates and maintenance.",
    github: "https://github.com/djoudad292/jordan_client",
    demo: "https://landingpagerestaurent.netlify.app",
  },
  {
    icon: MessageCircle,
    title: "AI Client Support Chatbot",
    category: "AI Chatbot & Real-time Chat",
    description:
      "Intelligent chatbot solution with real-time messaging. Next.js frontend paired with Express.js backend API, featuring AI-powered responses and conversation management.",
    techStack: ["Next.js", "Express.js", "AI/LLM", "TypeScript", "WebSocket"],
    features: [
      "Real-time bidirectional chat",
      "AI-powered response generation",
      "Conversation history persistence",
      "Multi-user session management",
      "Responsive chat interface",
      "Message delivery confirmation",
    ],
    architecture:
      "Next.js frontend with Socket.io for real-time communication. Express.js backend handles message routing, LLM API integration, and session management. Conversation context is maintained across sessions for coherent responses. Frontend deployed on Netlify, backend independently scaled.",
    github: "https://github.com/djoudad292/chatme",
    githubBackend: "https://github.com/djoudad292/chatbot-temp",
    demo: "https://djaouad-chat.netlify.app",
  },
]

interface ProjectCardProps {
  project: Project
  index: number
  isClient?: boolean
}

function ProjectCard({ project, index, isClient = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group flex flex-col rounded-lg border transition-all duration-300 ${
        isClient
          ? "border-primary/30 bg-card hover:border-primary/50"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div
              className={`rounded-lg p-2.5 flex-shrink-0 ${
                isClient ? "bg-primary/15" : "bg-primary/10"
              }`}
            >
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                {isClient && <Lock className="h-4 w-4 text-primary/60 flex-shrink-0" />}
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {project.category}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 gap-4">
        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Architecture Expandable */}
        <div className="mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors"
          >
            {isExpanded ? "Hide" : "View"} Technical Details
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3"
              >
                <div className="rounded-lg border border-border/50 bg-secondary/30 p-4">
                  <p className="text-xs leading-relaxed text-muted-foreground/90">
                    {project.architecture}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer - Links only for portfolio projects */}
      {!isClient && (
        <div className="border-t border-border p-6 pt-4">
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              >
                <Github size={16} />
                Frontend
              </a>
            )}
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              >
                <Github size={16} />
                Backend
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ml-auto"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}

      {isClient && (
        <div className="border-t border-border p-6 pt-4">
          <p className="text-xs text-muted-foreground/60 italic">Client project • Details available upon request</p>
        </div>
      )}
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="WORK"
          title="Projects & Experience"
          description="A curated selection of professional work spanning client solutions and open-source experiments."
        />

        <div className="mt-20 space-y-20">
          {/* CLIENT WORK SECTION */}
          <div>
            <div className="mb-10 border-b border-border pb-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Client Projects
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Production applications built for international clients. Details confidential.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {clientProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isClient={true}
                />
              ))}
            </div>
          </div>

          {/* PORTFOLIO SECTION */}
          <div>
            <div className="mb-10 border-b border-border pb-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Portfolio & Open Source
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Publicly available projects with live demos and source code access.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {portfolioProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} isClient={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
