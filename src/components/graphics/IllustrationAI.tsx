import { cn } from '@/lib/utils'

interface IllustrationAIProps {
  className?: string
  variant?: 'brain' | 'network' | 'workflow' | 'collaboration'
}

export function IllustrationAI({ className, variant = 'brain' }: IllustrationAIProps) {
  const illustrations = {
    brain: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" opacity="0.2" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="3" opacity="0.3" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="3" opacity="0.4" />
        <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.5" />
        
        <path d="M100 20 L100 60" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M180 100 L140 100" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M100 180 L100 140" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M20 100 L60 100" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        
        <circle cx="100" cy="20" r="6" fill="currentColor" opacity="0.7" />
        <circle cx="180" cy="100" r="6" fill="currentColor" opacity="0.7" />
        <circle cx="100" cy="180" r="6" fill="currentColor" opacity="0.7" />
        <circle cx="20" cy="100" r="6" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.6" />
        <circle cx="150" cy="50" r="12" fill="currentColor" opacity="0.6" />
        <circle cx="100" cy="100" r="16" fill="currentColor" opacity="0.8" />
        <circle cx="50" cy="150" r="12" fill="currentColor" opacity="0.6" />
        <circle cx="150" cy="150" r="12" fill="currentColor" opacity="0.6" />
        
        <path d="M50 50 L100 100 L150 50" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <path d="M50 150 L100 100 L150 150" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <path d="M50 50 L50 150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <path d="M150 50 L150 150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        <rect x="80" y="30" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        <rect x="140" y="30" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        
        <rect x="50" y="100" width="40" height="40" rx="8" fill="currentColor" opacity="0.4" />
        <rect x="110" y="100" width="40" height="40" rx="8" fill="currentColor" opacity="0.4" />
        
        <path d="M40 70 L70 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M100 70 L70 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M90 100 L110 100" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <path d="M160 70 L130 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        
        <circle cx="70" cy="160" r="8" fill="currentColor" opacity="0.7" />
        <circle cx="130" cy="160" r="8" fill="currentColor" opacity="0.7" />
        <path d="M70 140 L70 160" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <path d="M130 140 L130 160" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
    collaboration: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        <circle cx="140" cy="60" r="25" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        <circle cx="100" cy="140" r="25" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        
        <circle cx="60" cy="60" r="12" fill="currentColor" opacity="0.4" />
        <circle cx="140" cy="60" r="12" fill="currentColor" opacity="0.4" />
        <circle cx="100" cy="140" r="12" fill="currentColor" opacity="0.4" />
        
        <path d="M75 75 L90 125" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M125 75 L110 125" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M85 60 L115 60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        
        <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.7" />
      </svg>
    )
  }

  return (
    <div className={cn('text-accent', className)}>
      {illustrations[variant]}
    </div>
  )
}
