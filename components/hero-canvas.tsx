"use client"

import { useEffect, useRef } from "react"

// Ambient particle field: drifting nodes linked by faint lines, gently
// attracted to the cursor. Pure canvas, no dependencies, pauses for
// prefers-reduced-motion and when the tab is hidden.
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let running = true
    const mouse = { x: -9999, y: -9999 }

    type P = { x: number; y: number; vx: number; vy: number }
    let particles: P[] = []

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const LINK = 130

    const tick = () => {
      if (!running) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        // gentle cursor attraction
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 180 && dist > 0.001) {
          p.vx += (dx / dist) * 0.012
          p.vy += (dy / dist) * 0.012
        }
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))
      }

      // links
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(163, 230, 53, ${(1 - d / LINK) * 0.14})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const p of particles) {
        ctx.fillStyle = "rgba(163, 230, 53, 0.35)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onVisibility = () => {
      running = !document.hidden
      if (running) raf = requestAnimationFrame(tick)
      else cancelAnimationFrame(raf)
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMove)
    canvas.parentElement?.addEventListener("mouseleave", onLeave)
    document.addEventListener("visibilitychange", onVisibility)
    raf = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      canvas.parentElement?.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  )
}
