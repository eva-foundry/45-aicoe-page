import { cn } from '@/lib/utils'

interface VirtualAssistantIconProps {
  className?: string
  size?: number
}

export function VirtualAssistantIcon({ className, size = 56 }: VirtualAssistantIconProps) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn('drop-shadow-lg', className)}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="72" height="72" rx="8" fill="white" stroke="#2B50A2" strokeWidth="3"/>
      
      <g transform="translate(40, 30)">
        <rect x="-12" y="-16" width="8" height="32" fill="#FF0000"/>
        <rect x="-4" y="-16" width="8" height="32" fill="white"/>
        <rect x="4" y="-16" width="8" height="32" fill="#FF0000"/>
        
        <g transform="translate(0, 0)">
          <path d="M -2 -8 L 0 -12 L 2 -8 L 1 -8 L 1 -4 L -1 -4 L -1 -8 Z" fill="#FF0000"/>
          <path d="M -2 8 L 0 12 L 2 8 L 1 8 L 1 4 L -1 4 L -1 8 Z" fill="#FF0000"/>
          <path d="M -8 -2 L -12 0 L -8 2 L -8 1 L -4 1 L -4 -1 L -8 -1 Z" fill="#FF0000"/>
          <path d="M 8 -2 L 12 0 L 8 2 L 8 1 L 4 1 L 4 -1 L 8 -1 Z" fill="#FF0000"/>
          
          <path d="M -6 -6 L -8 -8 L -6 -7 L -4 -4 L -5 -5 Z" fill="#FF0000"/>
          <path d="M 6 -6 L 8 -8 L 6 -7 L 4 -4 L 5 -5 Z" fill="#FF0000"/>
          <path d="M -6 6 L -8 8 L -6 7 L -4 4 L -5 5 Z" fill="#FF0000"/>
          <path d="M 6 6 L 8 8 L 6 7 L 4 4 L 5 5 Z" fill="#FF0000"/>
          
          <circle cx="0" cy="0" r="3" fill="#FF0000"/>
        </g>
      </g>
      
      <text x="40" y="64" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        Virtual
      </text>
      <text x="40" y="72" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        Assistant
      </text>
    </svg>
  )
}
