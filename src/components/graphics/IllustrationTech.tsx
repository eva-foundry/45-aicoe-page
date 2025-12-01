import { cn } from '@/lib/utils'

interface IllustrationTechProps {
  className?: string
  variant?: 'server' | 'cloud' | 'security' | 'analytics' | 'automation' | 'integration'
}

export function IllustrationTech({ className, variant = 'server' }: IllustrationTechProps) {
  const illustrations = {
    server: (
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="60" width="160" height="40" rx="4" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        <rect x="40" y="110" width="160" height="40" rx="4" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        <rect x="40" y="160" width="160" height="40" rx="4" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        
        <circle cx="60" cy="80" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="72" cy="80" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="84" cy="80" r="4" fill="currentColor" opacity="0.4" />
        
        <circle cx="60" cy="130" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="72" cy="130" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="84" cy="130" r="4" fill="currentColor" opacity="0.4" />
        
        <circle cx="60" cy="180" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="72" cy="180" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="84" cy="180" r="4" fill="currentColor" opacity="0.8" />
        
        <rect x="110" y="73" width="70" height="14" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <rect x="110" y="123" width="70" height="14" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <rect x="110" y="173" width="70" height="14" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 120 Q60 90 90 90 Q90 60 120 60 Q150 60 150 90 Q180 90 180 120 Q180 150 150 150 L90 150 Q60 150 60 120 Z" 
              stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        
        <circle cx="80" cy="110" r="6" fill="currentColor" opacity="0.6" />
        <circle cx="110" cy="100" r="8" fill="currentColor" opacity="0.7" />
        <circle cx="140" cy="105" r="6" fill="currentColor" opacity="0.5" />
        <circle cx="160" cy="115" r="7" fill="currentColor" opacity="0.6" />
        
        <path d="M100 130 L100 170 M120 130 L120 180 M140 130 L140 175" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
        
        <circle cx="100" cy="170" r="8" fill="currentColor" opacity="0.4" />
        <circle cx="120" cy="180" r="10" fill="currentColor" opacity="0.5" />
        <circle cx="140" cy="175" r="8" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 40 L180 70 L180 120 Q180 160 120 200 Q60 160 60 120 L60 70 Z" 
              stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        
        <circle cx="120" cy="110" r="25" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.2" />
        <rect x="110" y="120" width="20" height="30" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="115" cy="105" width="10" height="15" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
        
        <path d="M85 85 L95 95 M145 95 L155 85 M85 155 L95 145 M145 145 L155 155" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="140" height="140" rx="4" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.05" />
        
        <rect x="70" y="140" width="20" height="40" fill="currentColor" opacity="0.6" />
        <rect x="100" y="110" width="20" height="70" fill="currentColor" opacity="0.7" />
        <rect x="130" y="90" width="20" height="90" fill="currentColor" opacity="0.8" />
        <rect x="160" y="120" width="20" height="60" fill="currentColor" opacity="0.6" />
        
        <path d="M70 140 L100 110 L130 90 L160 120" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        
        <circle cx="80" cy="140" r="4" fill="currentColor" />
        <circle cx="110" cy="110" r="4" fill="currentColor" />
        <circle cx="140" cy="90" r="4" fill="currentColor" />
        <circle cx="170" cy="120" r="4" fill="currentColor" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="120" r="60" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        
        <circle cx="120" cy="120" r="20" fill="currentColor" opacity="0.6" />
        
        <rect x="115" y="50" width="10" height="30" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="115" y="160" width="10" height="30" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="50" y="115" width="30" height="10" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="160" y="115" width="30" height="10" rx="2" fill="currentColor" opacity="0.5" />
        
        <circle cx="120" cy="60" r="8" fill="currentColor" opacity="0.7" />
        <circle cx="120" cy="180" r="8" fill="currentColor" opacity="0.7" />
        <circle cx="60" cy="120" r="8" fill="currentColor" opacity="0.7" />
        <circle cx="180" cy="120" r="8" fill="currentColor" opacity="0.7" />
        
        <path d="M145 95 L165 75 M95 95 L75 75 M95 145 L75 165 M145 145 L165 165" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    integration: (
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="80" r="30" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="180" cy="80" r="30" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="60" cy="160" r="30" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="180" cy="160" r="30" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
        <circle cx="120" cy="120" r="35" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.2" />
        
        <path d="M80 90 L100 110 M140 110 L160 90 M80 150 L100 130 M140 130 L160 150" 
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        
        <circle cx="60" cy="80" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="180" cy="80" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="60" cy="160" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="180" cy="160" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="120" cy="120" r="10" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  }

  return (
    <div className={cn('text-accent', className)}>
      {illustrations[variant]}
    </div>
  )
}
