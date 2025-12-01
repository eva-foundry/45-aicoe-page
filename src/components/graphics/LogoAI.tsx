import { cn } from '@/lib/utils'

interface LogoAIProps {
  className?: string
  variant?: 'full' | 'icon' | 'text'
  size?: 'sm' | 'md' | 'lg'
}

export function LogoAI({ className, variant = 'full', size = 'md' }: LogoAIProps) {
  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 72, height: 72 }
  }

  const dimensions = sizeMap[size]

  const iconElement = (
    <svg 
      width={dimensions.width} 
      height={dimensions.height} 
      viewBox="0 0 180 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ESDC Virtual Assistant"
    >
      <circle cx="15" cy="78" r="6" fill="#8B4789" />
      <circle cx="89" cy="44" r="6" fill="#2E5C8A" />
      <circle cx="105" cy="38" r="6" fill="#2E5C8A" />
      <circle cx="52" cy="56" r="6" fill="#8B4789" />
      <circle cx="89" cy="105" r="6" fill="#2E5C8A" />
      <circle cx="105" cy="118" r="6" fill="#2E5C8A" />
      
      <path
        d="M 21 78 Q 40 68 52 56"
        stroke="#2E5C8A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 58 56 Q 75 50 89 44"
        stroke="#2E5C8A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 95 44 L 105 38"
        stroke="#2E5C8A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 52 62 Q 70 80 89 99"
        stroke="#2E5C8A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 89 111 Q 95 114 105 118"
        stroke="#2E5C8A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      <path
        d="M 120 30 Q 125 55 125 78 Q 125 101 120 126"
        stroke="#2E5C8A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      <path
        d="M 135 40 Q 138 50 140 60 L 145 65 Q 148 70 150 75 Q 152 78 150 83 L 145 88 Q 140 95 138 105 L 135 115"
        stroke="#2E5C8A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      <ellipse cx="165" cy="75" rx="8" ry="18" fill="none" stroke="#2E5C8A" strokeWidth="4" />
    </svg>
  )

  if (variant === 'icon') {
    return <div className={className}>{iconElement}</div>
  }

  if (variant === 'text') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <span className="text-2xl font-bold">ESDC Virtual Assistant</span>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {iconElement}
    </div>
  )
}
