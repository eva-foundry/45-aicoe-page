import { cn } from '@/lib/utils'

interface DecorativePatternProps {
  type: 'dots' | 'grid' | 'waves' | 'circuit'
  className?: string
  opacity?: number
}

export function DecorativePattern({ 
  type, 
  className,
  opacity = 0.1 
}: DecorativePatternProps) {
  const patterns = {
    dots: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    ),
    grid: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
    waves: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    ),
    circuit: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="3" fill="currentColor" />
            <path d="M30 30 L30 0 M30 30 L60 30" stroke="currentColor" strokeWidth="1" />
            <circle cx="30" cy="0" r="2" fill="currentColor" />
            <circle cx="60" cy="30" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    )
  }

  return (
    <div 
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ opacity }}
    >
      {patterns[type]}
    </div>
  )
}
