import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GCCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'elevated'
}

export function GCCard({ children, className, variant = 'bordered' }: GCCardProps) {
  const variantClasses = {
    default: 'bg-card',
    bordered: 'bg-card border-2 border-border',
    elevated: 'bg-card border border-border shadow-md hover:shadow-lg transition-shadow',
  }

  return (
    <div className={cn('rounded-lg p-6', variantClasses[variant], className)}>
      {children}
    </div>
  )
}

interface GCCardHeaderProps {
  children: ReactNode
  className?: string
}

export function GCCardHeader({ children, className }: GCCardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

interface GCCardTitleProps {
  children: ReactNode
  className?: string
}

export function GCCardTitle({ children, className }: GCCardTitleProps) {
  return <h3 className={cn('text-xl font-bold text-foreground', className)}>{children}</h3>
}

interface GCCardSubtitleProps {
  children: ReactNode
  className?: string
}

export function GCCardSubtitle({ children, className }: GCCardSubtitleProps) {
  return <p className={cn('text-sm font-semibold text-muted-foreground mt-1', className)}>{children}</p>
}

interface GCCardContentProps {
  children: ReactNode
  className?: string
}

export function GCCardContent({ children, className }: GCCardContentProps) {
  return <div className={cn('text-foreground', className)}>{children}</div>
}
