import { cn } from '@/lib/utils'

interface DataVisualizationProps {
  className?: string
  type: 'progress-timeline' | 'tier-comparison' | 'success-metrics' | 'workflow-funnel'
}

export function DataVisualization({ className, type }: DataVisualizationProps) {
  if (type === 'progress-timeline') {
    return (
      <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('w-full', className)}>
        <line x1="50" y1="100" x2="550" y2="100" stroke="currentColor" strokeWidth="3" opacity="0.2" />
        
        <circle cx="50" cy="100" r="12" fill="currentColor" opacity="0.9" />
        <circle cx="200" cy="100" r="12" fill="currentColor" opacity="0.9" />
        <circle cx="350" cy="100" r="12" fill="currentColor" opacity="0.6" />
        <circle cx="500" cy="100" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        
        <text x="50" y="140" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.8">Submit</text>
        <text x="200" y="140" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.8">Review</text>
        <text x="350" y="140" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.6">Develop</text>
        <text x="500" y="140" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.4">Deploy</text>
        
        <text x="50" y="70" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">✓</text>
        <text x="200" y="70" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">✓</text>
        <text x="350" y="70" textAnchor="middle" fontSize="16" fill="currentColor">→</text>
      </svg>
    )
  }

  if (type === 'tier-comparison') {
    return (
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('w-full', className)}>
        <rect x="50" y="150" width="80" height="100" fill="currentColor" opacity="0.3" rx="4" />
        <rect x="160" y="100" width="80" height="150" fill="currentColor" opacity="0.5" rx="4" />
        <rect x="270" y="50" width="80" height="200" fill="currentColor" opacity="0.7" rx="4" />
        
        <text x="90" y="270" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">Tier 1</text>
        <text x="200" y="270" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">Tier 2</text>
        <text x="310" y="270" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">Tier 3</text>
        
        <text x="90" y="140" textAnchor="middle" fontSize="12" fill="currentColor">Basic</text>
        <text x="200" y="90" textAnchor="middle" fontSize="12" fill="currentColor">Enhanced</text>
        <text x="310" y="40" textAnchor="middle" fontSize="12" fill="currentColor">Premium</text>
        
        <line x1="20" y1="250" x2="380" y2="250" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>
    )
  }

  if (type === 'success-metrics') {
    return (
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('w-full', className)}>
        <path d="M50 250 L100 200 L150 220 L200 150 L250 170 L300 100 L350 120" 
              stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
        
        <circle cx="50" cy="250" r="5" fill="currentColor" />
        <circle cx="100" cy="200" r="5" fill="currentColor" />
        <circle cx="150" cy="220" r="5" fill="currentColor" />
        <circle cx="200" cy="150" r="5" fill="currentColor" />
        <circle cx="250" cy="170" r="5" fill="currentColor" />
        <circle cx="300" cy="100" r="5" fill="currentColor" />
        <circle cx="350" cy="120" r="5" fill="currentColor" />
        
        <line x1="40" y1="260" x2="360" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="50" x2="40" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        
        <text x="30" y="265" textAnchor="end" fontSize="10" fill="currentColor" opacity="0.6">0</text>
        <text x="30" y="55" textAnchor="end" fontSize="10" fill="currentColor" opacity="0.6">100</text>
        
        <path d="M50 250 L350 120" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('w-full', className)}>
      <path d="M100 50 L300 50 L280 100 L120 100 Z" fill="currentColor" opacity="0.7" stroke="currentColor" strokeWidth="2" />
      <path d="M120 100 L280 100 L260 150 L140 150 Z" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="2" />
      <path d="M140 150 L260 150 L240 200 L160 200 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" />
      <path d="M160 200 L240 200 L220 250 L180 250 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      
      <text x="200" y="75" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">1000</text>
      <text x="200" y="125" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">750</text>
      <text x="200" y="175" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">500</text>
      <text x="200" y="225" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">250</text>
      
      <text x="360" y="75" textAnchor="start" fontSize="12" fill="currentColor">Requests</text>
      <text x="360" y="125" textAnchor="start" fontSize="12" fill="currentColor">Approved</text>
      <text x="360" y="175" textAnchor="start" fontSize="12" fill="currentColor">In Progress</text>
      <text x="360" y="225" textAnchor="start" fontSize="12" fill="currentColor">Deployed</text>
    </svg>
  )
}
