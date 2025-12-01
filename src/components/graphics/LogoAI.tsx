import { cn } from '@/lib/utils'

interface LogoAIProps {
  className?: string
  variant?: 'full' | 'icon' | 'text'
  size?: 'sm' | 'md' | 'lg'
}

export function LogoAI({ className, variant = 'full', size = 'md' }: LogoAIProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const iconElement = (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={sizeClasses[size]}>
      <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
      
      <circle cx="22" cy="26" r="3" fill="currentColor" />
      <circle cx="42" cy="26" r="3" fill="currentColor" />
      
      <path d="M32 26 L32 38 M28 32 L36 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      <path d="M22 38 Q27 42 32 42 Q37 42 42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      <path d="M16 14 L20 18 M48 18 L44 14 M12 32 L16 32 M52 32 L48 32 M16 46 L20 50 M48 50 L44 46" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )

  if (variant === 'icon') {
    return <div className={className}>{iconElement}</div>
  }

  if (variant === 'text') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <span className="text-2xl font-bold">AI Centre</span>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {iconElement}
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-tight">AI Centre</span>
        <span className="text-xs font-semibold opacity-80 leading-tight">of Enablement</span>
      </div>
    </div>
  )
}
