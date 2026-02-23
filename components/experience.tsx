"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Briefcase, GraduationCap } from "lucide-react"

const timeline = [
  {
    type: "work" as const,
    title: "Full-Stack Web & Mobile Developer",
    company: "Djaouad Tech",
    period: "2023 - Present",
    description:
      "Building end-to-end web and mobile solutions. Architecting scalable backend services, crafting responsive frontends, and shipping cross-platform mobile apps with React Native.",
    techs: ["React Native", "NestJS", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    type: "work" as const,
    title: "Full-Stack Developer",
    company: "Freelance & Agency Work",
    period: "2021 - 2023",
    description:
      "Delivered full-stack web and mobile applications for clients across e-commerce, real-time communication, and SaaS domains. Built both frontend interfaces and backend APIs.",
    techs: ["React", "Node.js", "TypeScript", "React Native", "MySQL"],
  },
  {
    type: "education" as const,
    title: "Computer Science",
    company: "University",
    period: "2017 - 2021",
    description:
      "Studied algorithms, data structures, distributed systems, and software engineering. Built foundational skills in both web and mobile development.",
    techs: ["Algorithms", "Databases", "Mobile Dev", "Web Dev"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="EXPERIENCE"
          title="Career Timeline"
          description="My professional journey in software engineering."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex flex-col gap-4 pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-[14px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-2 flex items-center gap-2">
                    {item.type === "work" ? (
                      <Briefcase className="h-4 w-4 text-primary" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-primary" />
                    )}
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mb-2 text-sm text-primary">{item.company}</p>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
