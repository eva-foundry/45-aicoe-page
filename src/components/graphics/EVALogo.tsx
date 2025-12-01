import { cn } from '@/lib/utils'

interface EVALogoProps {
  className?: string
  variant?: 'full' | 'icon' | 'compact'
  size?: 'sm' | 'md' | 'lg'
}

export function EVALogo({ className, variant = 'full', size = 'md' }: EVALogoProps) {
  const sizeMap = {
    sm: { iconWidth: 60, iconHeight: 60, textSize: 'text-sm' },
    md: { iconWidth: 90, iconHeight: 90, textSize: 'text-base' },
    lg: { iconWidth: 120, iconHeight: 120, textSize: 'text-lg' }
  }

  const dimensions = sizeMap[size]

  const iconElement = (
    <svg 
      width={dimensions.iconWidth} 
      height={dimensions.iconHeight} 
      viewBox="0 0 140 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EVA - ESDC Virtual Assistant"
    >
      <circle cx="12" cy="85" r="5" fill="#8B4789" />
      <circle cx="28" cy="48" r="5" fill="#8B4789" />
      <circle cx="45" cy="28" r="5" fill="#2E5C8A" />
      <circle cx="50" cy="65" r="5" fill="#8B4789" />
      <circle cx="70" cy="18" r="5" fill="#2E5C8A" />
      <circle cx="95" cy="15" r="5" fill="#2E5C8A" />
      <circle cx="70" cy="102" r="5" fill="#2E5C8A" />
      <circle cx="95" cy="108" r="5" fill="#2E5C8A" />

      <path d="M 17 85 L 28 48" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 28 53 L 45 28" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 28 L 70 18" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 75 18 L 90 15" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 33 48 L 50 65" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 55 65 Q 60 80 70 102" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 75 102 L 90 108" stroke="#2E5C8A" strokeWidth="2.5" strokeLinecap="round" />

      <path
        d="M 68 33 Q 68 38 70 42 Q 72 46 75 48 Q 80 52 85 55 L 88 57 Q 90 58 92 60 Q 95 63 96 66 Q 97 69 96 72 Q 95 75 92 77 Q 90 79 88 80 L 85 82 Q 80 85 75 88 Q 72 90 70 94 Q 68 98 68 103"
        stroke="#2E5C8A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      <ellipse cx="110" cy="65" rx="7" ry="20" fill="none" stroke="#2E5C8A" strokeWidth="3" />
    </svg>
  )

  if (variant === 'icon') {
    return <div className={className}>{iconElement}</div>
  }

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <div className="scale-75">{iconElement}</div>
        <span className={cn('font-bold text-primary', dimensions.textSize)}>EVA</span>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {iconElement}
      <div className="flex flex-col">
        <span className={cn('font-bold text-primary leading-tight', dimensions.textSize, size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-base')}>
          ESDC
        </span>
        <span className={cn('font-bold text-primary leading-tight', dimensions.textSize, size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-base')}>
          Virtual
        </span>
        <span className={cn('font-bold text-primary leading-tight', dimensions.textSize, size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-base')}>
          Assistant
        </span>
      </div>
    </div>
  )
}
