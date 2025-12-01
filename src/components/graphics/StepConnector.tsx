import { cn } from '@/lib/utils'

interface StepConnectorProps {
  orientation?: 'vertical' | 'horizontal'
  variant?: 'solid' | 'dashed' | 'dotted'
  className?: string
}

export function StepConnector({ 
  orientation = 'vertical', 
  variant = 'solid',
  className 
}: StepConnectorProps) {
  const lineStyles = {
    solid: 'border-accent',
    dashed: 'border-accent border-dashed',
    dotted: 'border-accent border-dotted'
  }
  
  return (
    <div 
      className={cn(
        'flex items-center justify-center',
        orientation === 'vertical' && 'h-12 w-full',
        orientation === 'horizontal' && 'w-12 h-full',
        className
      )}
    >
      <div 
        className={cn(
          'border-2',
          lineStyles[variant],
          orientation === 'vertical' && 'h-full w-0',
          orientation === 'horizontal' && 'w-full h-0'
        )}
      />
    </div>
  )
}
