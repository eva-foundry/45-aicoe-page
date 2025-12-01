import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IconCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'default' | 'accent' | 'primary'
  className?: string
}

export function IconCard({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className 
}: IconCardProps) {
  return (
    <div 
      className={cn(
        'relative group p-6 rounded-lg border-2 transition-all duration-200',
        variant === 'default' && 'border-border bg-card hover:border-accent hover:shadow-lg',
        variant === 'accent' && 'border-accent bg-accent/5 hover:shadow-lg',
        variant === 'primary' && 'border-primary bg-primary/5 hover:shadow-lg',
        className
      )}
    >
      <div className={cn(
        'inline-flex p-3 rounded-full mb-4 transition-transform duration-200 group-hover:scale-110',
        variant === 'default' && 'bg-accent/10 text-accent',
        variant === 'accent' && 'bg-accent/20 text-accent',
        variant === 'primary' && 'bg-primary/20 text-primary'
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-foreground/80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
