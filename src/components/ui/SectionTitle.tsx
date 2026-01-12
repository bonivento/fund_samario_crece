import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        { 'text-center': centered },
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'w-20 h-1 bg-primary mt-4',
          { 'mx-auto': centered }
        )}
      />
    </div>
  )
}
