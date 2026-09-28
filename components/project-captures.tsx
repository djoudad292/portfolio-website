"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface CaptureImage {
  src: string
  alt: string
  caption: string
}

interface CaptureVideo {
  src: string
  label: string
  duration: string
  caption: string
}

interface ProjectCapturesProps {
  videos: CaptureVideo[]
  images: CaptureImage[]
}

type CaptureItem = CaptureVideo | CaptureImage

function isVideo(item: CaptureItem): item is CaptureVideo {
  return "label" in item
}

export function ProjectCaptures({ videos, images }: ProjectCapturesProps) {
  const items: CaptureItem[] = [...videos, ...images]
  if (items.length === 0) return null

  const [selected, setSelected] = useState(0)
  const current = items[selected]

  return (
    <div className="mt-6">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card">
        {isVideo(current) ? (
          <video
            controls
            preload="none"
            aria-label={current.caption}
            className="h-full w-full object-cover object-top"
          >
            <source src={current.src} type="video/webm" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current.src}
            alt={current.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>

      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {current.caption}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isActive = idx === selected
          const video = isVideo(item)
          return (
            <button
              key={item.src}
              type="button"
              aria-label={video ? `Show video: ${item.label}` : item.alt}
              aria-selected={isActive}
              onClick={() => setSelected(idx)}
              className={`relative flex h-[17px] w-[28px] shrink-0 items-center justify-center overflow-hidden rounded border transition-all ${
                isActive
                  ? "ring-2 ring-primary"
                  : "border-border hover:border-primary"
              }`}
            >
              {video ? (
                <>
                  <span className="absolute inset-0 flex items-center justify-center bg-muted">
                    <Play className="h-2.5 w-2.5 text-foreground" />
                  </span>
                  <span className="absolute bottom-0.5 right-0.5 rounded bg-black/60 px-0.5 text-[7px] leading-none text-white">
                    {item.duration}
                  </span>
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
