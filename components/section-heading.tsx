import { cn } from '@/lib/utils'

type Size = '2xl' | '3xl' | '4xl' | '5xl'

const sizeMap: Record<Size, string> = {
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-3xl sm:text-4xl',
  '5xl': 'text-4xl sm:text-5xl',
}

/**
 * Section heading: mono eyebrow + hairline, display title, optional lede.
 *
 * This is the only heading pattern for sections. It replaces the previous
 * split between a framer-motion client component on four pages and a
 * duplicated `SectionHeadingLocal` inside the homepage.
 *
 * It is deliberately not animated: a scroll-triggered fade on every heading
 * means content is invisible until JS runs and until the element intersects.
 */
export function SectionHeading({
  title,
  eyebrow,
  index,
  description,
  size = '3xl',
  className,
  as: Tag = 'h2',
}: {
  title: string
  eyebrow?: string
  index?: string
  description?: React.ReactNode
  size?: Size
  className?: string
  as?: 'h2' | 'h3'
}) {
  return (
    <div className={cn('max-w-[var(--prose-max)]', className)}>
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {index ? `${index} / ` : ''}
            {eyebrow}
          </p>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
      )}
      <Tag
        className={cn(
          'font-display font-normal tracking-tight text-foreground',
          sizeMap[size],
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}