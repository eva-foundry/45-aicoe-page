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
      <rect x="4" y="4" width="72" height="72" rx="10" fill="white" stroke="#2B50A2" strokeWidth="3"/>
      
      <g transform="translate(40, 22)">
        <rect x="-9" y="-10" width="6" height="20" fill="#FF0000"/>
        <rect x="-3" y="-10" width="6" height="20" fill="white"/>
        <rect x="3" y="-10" width="6" height="20" fill="#FF0000"/>
        
        <g transform="translate(0, 0)">
          <path d="M -1.5 -5 L 0 -8 L 1.5 -5 L 0.75 -5 L 0.75 -2 L -0.75 -2 L -0.75 -5 Z" fill="#FF0000"/>
          <path d="M -1.5 5 L 0 8 L 1.5 5 L 0.75 5 L 0.75 2 L -0.75 2 L -0.75 5 Z" fill="#FF0000"/>
          <path d="M -5 -1.5 L -8 0 L -5 1.5 L -5 0.75 L -2 0.75 L -2 -0.75 L -5 -0.75 Z" fill="#FF0000"/>
          <path d="M 5 -1.5 L 8 0 L 5 1.5 L 5 0.75 L 2 0.75 L 2 -0.75 L 5 -0.75 Z" fill="#FF0000"/>
          
          <path d="M -4 -4 L -5.5 -5.5 L -4 -4.5 L -2.5 -2.5 L -3 -3 Z" fill="#FF0000"/>
          <path d="M 4 -4 L 5.5 -5.5 L 4 -4.5 L 2.5 -2.5 L 3 -3 Z" fill="#FF0000"/>
          <path d="M -4 4 L -5.5 5.5 L -4 4.5 L -2.5 2.5 L -3 3 Z" fill="#FF0000"/>
          <path d="M 4 4 L 5.5 5.5 L 4 4.5 L 2.5 2.5 L 3 3 Z" fill="#FF0000"/>
          
          <circle cx="0" cy="0" r="1.8" fill="#FF0000"/>
        </g>
      </g>
      
      <text x="40" y="52" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        EVA
      </text>
      <text x="40" y="62" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        AskMe
      </text>
    </svg>
  )
}
