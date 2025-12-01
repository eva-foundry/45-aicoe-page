import { cn } from '@/lib/utils'

interface FeatureIconProps {
  className?: string
  type: 'prompt' | 'workflow' | 'support' | 'security' | 'speed' | 'innovation' | 'collaboration' | 'training' | 'deployment' | 'monitoring'
}

export function FeatureIcon({ className, type }: FeatureIconProps) {
  const icons = {
    prompt: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 26 L28 26 M20 32 L36 32 M20 38 L32 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="44" cy="38" r="3" fill="currentColor" opacity="0.8" />
        <path d="M44 44 L44 50 M40 48 L48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <rect x="28" y="26" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="52" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M22 32 L28 32 M40 32 L46 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 38 L34 48 L52 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" opacity="0.6" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 48 Q20 38 32 38 Q44 38 44 48" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="18" cy="32" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <circle cx="46" cy="32" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M28 20 L32 16 L36 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12 L48 20 L48 36 Q48 46 32 54 Q16 46 16 36 L16 20 Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M28 32 L30 34 L36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    speed: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="36" r="18" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M32 36 L42 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="36" r="3" fill="currentColor" />
        <path d="M16 20 L24 20 M12 28 L20 28 M48 12 L56 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M50 20 L54 20 M46 28 L50 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    innovation: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16 Q38 16 38 24 Q42 26 42 32 Q42 38 36 40 L36 46 L28 46 L28 40 Q22 38 22 32 Q22 26 26 24 Q26 16 32 16 Z" 
              stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <rect x="28" y="46" width="8" height="4" rx="1" fill="currentColor" opacity="0.3" />
        <path d="M32 10 L32 14 M16 32 L20 32 M44 32 L48 32 M22 20 L24 22 M40 22 L42 20" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="32" cy="30" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    collaboration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="40" cy="24" r="7" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="32" cy="44" r="7" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M28 28 L28 40 M36 28 L36 40" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />
        <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    training: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="20" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 28 L28 28 M20 34 L36 34 M20 40 L32 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 12 L42 20 L32 20 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="40" cy="42" r="2" fill="currentColor" />
      </svg>
    ),
    deployment: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16 L42 28 L38 28 L38 42 L26 42 L26 28 L22 28 Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <rect x="20" y="42" width="24" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <circle cx="32" cy="24" r="2" fill="currentColor" />
        <path d="M18 48 L46 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    monitoring: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M18 38 L22 32 L26 34 L30 28 L34 32 L38 24 L42 30 L46 26" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="22" cy="32" r="2" fill="currentColor" />
        <circle cx="30" cy="28" r="2" fill="currentColor" />
        <circle cx="38" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  }

  return (
    <div className={cn('inline-block w-16 h-16 text-current', className)}>
      {icons[type]}
    </div>
  )
}
