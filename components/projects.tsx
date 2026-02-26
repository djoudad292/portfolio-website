"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Server,
  ShoppingCart,
  Video,
  Shield,
  MessageCircle,
  UtensilsCrossed,
} from "lucide-react"

interface Project {
  icon: typeof Server
  title: string
  description: string
  techStack: string[]
  features: string[]
  architecture: string
  github?: string
  githubBackend?: string
  demo?: string
}

const projects: Project[] = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Landing Page",
    description:
      "A modern, responsive landing page for a restaurant startup built with Next.js and Tailwind CSS. Features an attractive hero section, menu showcase, reservation system, and customer testimonials.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
    ],
    features: [
      "Hero section with eye-catching call-to-action",
      "Menu showcase with categorized dishes",
      "Online reservation booking system",
      "Customer testimonials and ratings",
      "Mobile-first responsive design",
      "Fast loading and SEO optimized",
    ],
    architecture:
      "Built with Next.js for server-side rendering and optimal performance. Tailwind CSS handles all styling for a modern, clean design. Pages are statically generated where possible for instant loading. The reservation system integrates with a backend API for booking management. Component-based architecture ensures maintainability and reusability.",
    github: "https://github.com/djoudad292/jordan-client",
    demo: "https://landingpagerestaurent.netlify.app",
  },
  {
    icon: MessageCircle,
    title: "AI Client Support Chatbot",
    description:
      "A real-time AI-powered chatbot for client support, built with Next.js on the frontend and Express.js on the backend. Uses AI APIs to provide intelligent, context-aware responses to customer queries.",
    techStack: [
      "Next.js",
      "Express.js",
      "AI API",
      "TypeScript",
      "TailwindCSS",
      "WebSocket",
    ],
    features: [
      "Real-time AI-powered conversational responses",
      "Clean, responsive chat interface",
      "Express.js backend handling API orchestration",
      "Context-aware message history",
      "Deployed frontend on Netlify, backend independently",
    ],
    architecture:
      "The frontend is a Next.js app providing a polished chat UI with real-time message streaming. The Express.js backend acts as a middleware layer, handling user sessions, message routing, and AI API integration. Messages are processed server-side to maintain context history and deliver intelligent, relevant responses to client queries.",
    github: "https://github.com/djoudad292/chatme",
    githubBackend: "https://github.com/djoudad292/chatbot-temp",
    demo: "https://djaouad-chat.netlify.app",
  },
  {
    icon: Server,
    title: "Microservices Car Rental System",
    description:
      "A fully distributed car rental platform built on microservices architecture. Each service operates independently with its own database, communicating through an API Gateway and Service Registry for seamless orchestration.",
    techStack: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Redis",
      "RabbitMQ",
      "TypeORM",
    ],
    features: [
      "API Gateway for centralized routing",
      "Service Registry for dynamic discovery",
      "Independent services with isolated databases",
      "Database-per-service pattern",
      "Fully containerized with Docker Compose",
    ],
    architecture:
      "The system follows a microservices architecture with an API Gateway acting as the single entry point. Each service (Users, Cars, Bookings, Payments) has its own PostgreSQL database and communicates via RabbitMQ message queues. The Service Registry handles dynamic service discovery, and Docker Compose orchestrates all containers.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with secure authentication, admin dashboard, integrated payments, and role-based access control for managing products, orders, and users.",
    techStack: [
      "NestJS",
      "React",
      "PostgreSQL",
      "JWT",
      "Stripe",
      "TypeORM",
      "TailwindCSS",
    ],
    features: [
      "JWT-based authentication system",
      "Admin dashboard with analytics",
      "Stripe payment integration",
      "Role-based access control (RBAC)",
      "Complete order management workflow",
    ],
    architecture:
      "Built on a monolithic NestJS backend with clear module separation. Authentication uses JWT with access and refresh tokens. The admin panel is a separate React SPA communicating via REST APIs. Stripe handles payment processing with webhook-based order confirmation. Guards and decorators enforce role-based permissions throughout.",
  },
  {
    icon: Video,
    title: "Real-Time Communication App",
    description:
      "A real-time communication platform supporting peer-to-peer audio/video calls, WebSocket-based signaling, and live messaging with presence detection.",
    techStack: [
      "Node.js",
      "WebRTC",
      "WebSocket",
      "React",
      "Redis",
      "Socket.io",
    ],
    features: [
      "WebRTC peer-to-peer audio and video",
      "WebSocket signaling server",
      "Live text messaging",
      "User presence detection",
      "Room-based communication",
    ],
    architecture:
      "The signaling server runs on Socket.io over WebSocket, facilitating WebRTC peer connection negotiation (SDP offer/answer, ICE candidates). Redis pub/sub enables horizontal scaling across multiple server instances. React handles the frontend with custom hooks for media stream management.",
  },
  {
    icon: Shield,
    title: "Advanced Authentication System",
    description:
      "A production-grade authentication system with access and refresh token rotation, rate limiting, email verification, and comprehensive security guards.",
    techStack: [
      "NestJS",
      "PostgreSQL",
      "JWT",
      "Redis",
      "Nodemailer",
      "bcrypt",
    ],
    features: [
      "Access and refresh token rotation",
      "Custom NestJS guards and decorators",
      "Rate limiting with Redis",
      "Email verification flow",
      "Brute-force protection",
    ],
    architecture:
      "Implements a dual-token authentication pattern: short-lived access tokens (15min) paired with long-lived refresh tokens (7d) stored in Redis. Rate limiting uses a sliding window counter in Redis. Guards are composable NestJS decorators. Email verification uses time-limited signed URLs via Nodemailer.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="PROJECTS"
          title="Featured Work"
          description="A selection of projects demonstrating full-stack web development, real-time systems, and distributed architecture."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col rounded-xl border border-border bg-card transition-colors hover:border-primary/30"
    >
      {/* Project screenshot placeholder */}
      <div className="relative overflow-hidden rounded-t-xl border-b border-border bg-secondary/50">
        <div className="flex h-48 items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <project.icon className="h-10 w-10 text-primary/60" />
            <span className="font-mono text-xs">{project.title}</span>
          </div>
        </div>
        {/* Window chrome decoration */}
        <div className="absolute left-4 top-4 flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features list */}
        <ul className="mb-4 space-y-1.5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Architecture expandable */}
        <div className="mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-3 flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Architecture Details
            {isExpanded ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mb-4 rounded-lg border border-border bg-secondary/50 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.architecture}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <Github className="h-4 w-4" />
                {project.githubBackend ? "Frontend" : "GitHub"}
              </a>
            )}
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <Github className="h-4 w-4" />
                Backend
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {!project.github && !project.demo && (
              <>
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground">
                  <Github className="h-4 w-4" />
                  GitHub
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-primary/50 px-4 py-2 text-sm font-medium text-primary-foreground/70">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
