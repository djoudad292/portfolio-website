import * as React from 'react'

import { cn } from '@/lib/utils'
import { controlClass } from '@/components/ui/input'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(controlClass, 'min-h-24 resize-y py-3', className)}
      {...props}
    />
  )
}

export { Textarea }