import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ProcessDiagramProps {
  className?: string
  steps: Array<{
    label: string
    icon?: ReactNode
    status?: 'complete' | 'active' | 'pending'
  }>
  orientation?: 'horizontal' | 'vertical'
}

export function ProcessDiagram({ className, steps, orientation = 'horizontal' }: ProcessDiagramProps) {
  if (orientation === 'vertical') {
    return (
      <div className={cn('flex flex-col gap-4', className)}>
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all',
                step.status === 'complete' && 'bg-accent border-accent text-accent-foreground',
                step.status === 'active' && 'bg-primary border-primary text-primary-foreground',
                step.status === 'pending' && 'bg-muted border-border text-muted-foreground'
              )}>
                {step.icon || (
                  <span className="text-lg font-bold">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  'w-0.5 h-12 mt-2',
                  step.status === 'complete' ? 'bg-accent' : 'bg-border'
                )} />
              )}
            </div>
            <div className="flex-1 pt-2">
              <p className={cn(
                'font-semibold',
                step.status === 'pending' && 'text-muted-foreground'
              )}>
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1">
          <div className="flex flex-col items-center flex-1">
            <div className={cn(
              'w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all mb-3',
              step.status === 'complete' && 'bg-accent border-accent text-accent-foreground',
              step.status === 'active' && 'bg-primary border-primary text-primary-foreground',
              step.status === 'pending' && 'bg-muted border-border text-muted-foreground'
            )}>
              {step.icon || (
                <span className="text-lg md:text-xl font-bold">{index + 1}</span>
              )}
            </div>
            <p className={cn(
              'text-sm md:text-base font-semibold text-center',
              step.status === 'pending' && 'text-muted-foreground'
            )}>
              {step.label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className={cn(
              'hidden md:block h-0.5 flex-1 mx-2',
              step.status === 'complete' ? 'bg-accent' : 'bg-border'
            )} />
          )}
        </div>
      ))}
    </div>
  )
}
