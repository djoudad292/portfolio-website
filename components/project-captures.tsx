"use client"

import { useEffect, useState } from "react"
import { Play, X } from "lucide-react"

interface CaptureImage {
  src: string
  alt: string
  caption: string
}

interface CaptureVideo {
  src: string
  poster?: string
  label: string
  duration: string
  caption: string
}

interface ProjectCapturesProps {
  videos: CaptureVideo[]
  images: CaptureImage[]
}

export function ProjectCaptures({ videos, images }: ProjectCapturesProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeydown)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKeydown)
    }
  }, [open])

  if (videos.length === 0 && images.length === 0) return null

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {videos.map((video) => (
          <button
            key={video.src}
            type="button"
            aria-label={`Watch ${video.label} (${video.duration})`}
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Play className="h-4 w-4" />
            Watch the {video.label} ({video.duration})
          </button>
        ))}
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            aria-label={image.alt}
            onClick={() => setOpen(true)}
            className="relative flex h-[17px] w-[28px] shrink-0 items-center justify-center overflow-hidden rounded border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Demo captures viewer"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div
            className="relative mx-auto my-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-card p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Recorded live
              </span>
              <button
                type="button"
                aria-label="Close"
                autoFocus
                onClick={() => setOpen(false)}
                className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground opacity-70 hover:bg-muted hover:opacity-100 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {videos.map((video) => (
                <div key={video.src}>
                  <video
                    controls
                    preload="metadata"
                    poster={video.poster}
                    aria-label={video.caption}
                    className="aspect-video w-full rounded-lg"
                  >
                    <source src={video.src} type="video/webm" />
                  </video>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {video.caption}
                  </p>
                </div>
              ))}
              {images.map((image) => (
                <div key={image.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg"
                  />
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
