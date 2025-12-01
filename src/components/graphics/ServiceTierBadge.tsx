import { cn } from '@/lib/utils'
import { Sparkle, Lightning, Rocket } from '@phosphor-icons/react'

interface ServiceTierBadgeProps {
  tier: 1 | 2 | 3
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function ServiceTierBadge({ tier, className, size = 'md' }: ServiceTierBadgeProps) {
  const icons = {
    1: Sparkle,
    2: Lightning,
    3: Rocket
  }
  
  const colors = {
    1: 'bg-accent/10 text-accent border-accent',
    2: 'bg-accent/15 text-accent border-accent',
    3: 'bg-primary/10 text-primary border-primary'
  }
  
  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  }
  
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22
  }
  
  const Icon = icons[tier]
  
  return (
    <div 
      className={cn(
        'inline-flex items-center gap-2 rounded-full border-2 font-bold',
        colors[tier],
        sizes[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} weight="fill" />
      <span>Tier {tier}</span>
    </div>
  )
}
