import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeroBannerProps {
  title: string
  subtitle?: string
  description?: string
  icon?: ReactNode
  variant?: 'default' | 'gradient' | 'pattern'
  className?: string
}

export function HeroBanner({ 
  title, 
  subtitle, 
  description, 
  icon,
  variant = 'default',
  className 
}: HeroBannerProps) {
  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-lg p-8 md:p-12 mb-8',
        variant === 'gradient' && 'bg-gradient-to-br from-primary via-accent to-primary',
        variant === 'pattern' && 'bg-primary',
        variant === 'default' && 'bg-card border-2 border-primary',
        className
      )}
    >
      {variant === 'pattern' && (
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}
      
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
        {icon && (
          <div className={cn(
            'flex-shrink-0 p-4 rounded-full',
            variant === 'default' ? 'bg-primary/10 text-primary' : 'bg-white/20 text-white'
          )}>
            {icon}
          </div>
        )}
        
        <div className="flex-1">
          <h1 className={cn(
            'text-4xl md:text-5xl font-bold mb-3',
            variant === 'default' ? 'text-primary' : 'text-white'
          )}>
            {title}
          </h1>
          
          {subtitle && (
            <p className={cn(
              'text-xl md:text-2xl font-semibold mb-4',
              variant === 'default' ? 'text-secondary' : 'text-white/90'
            )}>
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className={cn(
              'text-base md:text-lg leading-relaxed max-w-3xl',
              variant === 'default' ? 'text-foreground' : 'text-white/80'
            )}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
