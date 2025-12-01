import { cn } from '@/lib/utils'

interface BannerGraphicProps {
  className?: string
  variant?: 'hero' | 'wave' | 'geometric' | 'particles' | 'gradient-mesh'
}

export function BannerGraphic({ className, variant = 'hero' }: BannerGraphicProps) {
  const graphics = {
    hero: (
      <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.05 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.02 }} />
          </linearGradient>
        </defs>
        
        <circle cx="200" cy="100" r="120" fill="url(#grad1)" />
        <circle cx="1000" cy="300" r="150" fill="url(#grad2)" />
        <circle cx="600" cy="200" r="80" fill="url(#grad1)" />
        
        <path d="M0 250 Q300 200 600 250 T1200 250 L1200 400 L0 400 Z" fill="currentColor" opacity="0.05" />
        <path d="M0 280 Q300 240 600 280 T1200 280 L1200 400 L0 400 Z" fill="currentColor" opacity="0.03" />
        
        <circle cx="300" cy="150" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="450" cy="180" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="750" cy="120" r="5" fill="currentColor" opacity="0.5" />
        <circle cx="900" cy="200" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="500" cy="100" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 150 Q300 50 600 150 T1200 150 L1200 300 L0 300 Z" fill="currentColor" opacity="0.1" />
        <path d="M0 180 Q300 100 600 180 T1200 180 L1200 300 L0 300 Z" fill="currentColor" opacity="0.08" />
        <path d="M0 210 Q300 140 600 210 T1200 210 L1200 300 L0 300 Z" fill="currentColor" opacity="0.06" />
        
        <circle cx="200" cy="100" r="60" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        <circle cx="1000" cy="150" r="80" stroke="currentColor" strokeWidth="2" opacity="0.12" />
        <circle cx="600" cy="80" r="50" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      </svg>
    ),
    geometric: (
      <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect x="100" y="50" width="150" height="150" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.15" transform="rotate(15 175 125)" />
        <rect x="950" y="200" width="180" height="180" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.12" transform="rotate(-20 1040 290)" />
        <rect x="500" y="100" width="120" height="120" rx="8" fill="currentColor" opacity="0.08" transform="rotate(25 560 160)" />
        
        <circle cx="300" cy="250" r="40" stroke="currentColor" strokeWidth="2" opacity="0.1" />
        <circle cx="800" cy="100" r="60" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        
        <path d="M400 150 L450 200 L400 250 L350 200 Z" stroke="currentColor" strokeWidth="2" opacity="0.12" />
        <path d="M700 250 L750 300 L700 350 L650 300 Z" fill="currentColor" opacity="0.08" />
        
        <line x1="150" y1="300" x2="250" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.1" />
        <line x1="900" y1="50" x2="1000" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      </svg>
    ),
    particles: (
      <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.4">
          <circle cx="100" cy="80" r="3" fill="currentColor" />
          <circle cx="250" cy="120" r="4" fill="currentColor" />
          <circle cx="180" cy="200" r="2" fill="currentColor" />
          <circle cx="420" cy="90" r="5" fill="currentColor" />
          <circle cx="350" cy="180" r="3" fill="currentColor" />
          <circle cx="550" cy="140" r="4" fill="currentColor" />
          <circle cx="480" cy="260" r="2" fill="currentColor" />
          <circle cx="720" cy="100" r="3" fill="currentColor" />
          <circle cx="650" cy="220" r="5" fill="currentColor" />
          <circle cx="880" cy="160" r="4" fill="currentColor" />
          <circle cx="820" cy="280" r="3" fill="currentColor" />
          <circle cx="1050" cy="110" r="2" fill="currentColor" />
          <circle cx="980" cy="200" r="4" fill="currentColor" />
          <circle cx="1150" cy="150" r="3" fill="currentColor" />
        </g>
        
        <g opacity="0.15">
          <line x1="100" y1="80" x2="250" y2="120" stroke="currentColor" strokeWidth="1" />
          <line x1="250" y1="120" x2="420" y2="90" stroke="currentColor" strokeWidth="1" />
          <line x1="420" y1="90" x2="550" y2="140" stroke="currentColor" strokeWidth="1" />
          <line x1="550" y1="140" x2="720" y2="100" stroke="currentColor" strokeWidth="1" />
          <line x1="720" y1="100" x2="880" y2="160" stroke="currentColor" strokeWidth="1" />
          <line x1="880" y1="160" x2="1050" y2="110" stroke="currentColor" strokeWidth="1" />
          <line x1="180" y1="200" x2="350" y2="180" stroke="currentColor" strokeWidth="1" />
          <line x1="350" y1="180" x2="480" y2="260" stroke="currentColor" strokeWidth="1" />
          <line x1="480" y1="260" x2="650" y2="220" stroke="currentColor" strokeWidth="1" />
          <line x1="650" y1="220" x2="820" y2="280" stroke="currentColor" strokeWidth="1" />
          <line x1="820" y1="280" x2="980" y2="200" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>
    ),
    'gradient-mesh': (
      <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="mesh1" cx="30%" cy="30%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="mesh2" cx="70%" cy="60%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.25 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="mesh3" cx="50%" cy="80%">
            <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        
        <ellipse cx="360" cy="120" rx="300" ry="200" fill="url(#mesh1)" />
        <ellipse cx="840" cy="240" rx="350" ry="220" fill="url(#mesh2)" />
        <ellipse cx="600" cy="320" rx="280" ry="180" fill="url(#mesh3)" />
        
        <g opacity="0.1">
          <path d="M0 0 L1200 0 L1200 400 L0 400 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="40 40" />
          <path d="M0 100 L1200 100 M0 200 L1200 200 M0 300 L1200 300" stroke="currentColor" strokeWidth="0.5" />
          <path d="M300 0 L300 400 M600 0 L600 400 M900 0 L900 400" stroke="currentColor" strokeWidth="0.5" />
        </g>
      </svg>
    ),
  }

  return (
    <div className={cn('w-full h-full text-accent', className)}>
      {graphics[variant]}
    </div>
  )
}
