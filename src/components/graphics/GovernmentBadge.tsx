import { cn } from '@/lib/utils'

interface GovernmentBadgeProps {
  className?: string
  variant?: 'esdc' | 'canada' | 'official'
}

export function GovernmentBadge({ className, variant = 'canada' }: GovernmentBadgeProps) {
  if (variant === 'esdc') {
    return (
      <div className={cn('inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-lg', className)}>
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" />
          <path d="M16 8 L16 24 M10 16 L22 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3" fill="white" />
        </svg>
        <div className="flex flex-col">
          <span className="text-xs text-primary-foreground font-semibold leading-tight">EMPLOYMENT AND</span>
          <span className="text-xs text-primary-foreground font-semibold leading-tight">SOCIAL DEVELOPMENT</span>
        </div>
      </div>
    )
  }

  if (variant === 'official') {
    return (
      <div className={cn('inline-flex items-center gap-2 px-3 py-1.5 bg-primary border-2 border-accent rounded', className)}>
        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
          <svg viewBox="0 0 12 12" className="w-3 h-3" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1 L7 5 L11 5 L8 7 L9 11 L6 9 L3 11 L4 7 L1 5 L5 5 Z" />
          </svg>
        </div>
        <span className="text-xs font-bold text-primary-foreground tracking-wide">OFFICIAL</span>
      </div>
    )
  }

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#FF0000" />
        <path d="M20 8 L20 12 M20 28 L20 32 M8 20 L12 20 M28 20 L32 20" stroke="white" strokeWidth="2" />
        <path d="M14 14 L17 17 M23 17 L26 14 M14 26 L17 23 M23 23 L26 26" stroke="white" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" fill="white" />
        <path d="M20 15 L20.5 18 L23 18 L21 19.5 L21.5 22 L20 20.5 L18.5 22 L19 19.5 L17 18 L19.5 18 Z" fill="#FF0000" />
      </svg>
    </div>
  )
}
