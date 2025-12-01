import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GCStepperProps {
  steps: {
    title: string
    description: string
  }[]
  className?: string
}

export function GCStepper({ steps, className }: GCStepperProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-foreground leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

interface GCNoticeProps {
  children: ReactNode
  variant?: 'info' | 'warning' | 'success'
  title?: string
  className?: string
}

export function GCNotice({ children, variant = 'info', title, className }: GCNoticeProps) {
  const variantClasses = {
    info: 'bg-accent/10 border-accent',
    warning: 'bg-destructive/10 border-destructive',
    success: 'bg-green-50 border-green-600',
  }

  return (
    <div className={cn('border-l-4 p-4 rounded-r', variantClasses[variant], className)}>
      {title && <h4 className="font-bold text-foreground mb-2">{title}</h4>}
      <div className="text-foreground">{children}</div>
    </div>
  )
}
