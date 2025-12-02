import { cn } from '@/lib/utils'

interface VirtualAssistantIconProps {
  className?: string
  size?: number
}

export function VirtualAssistantIcon({ className, size = 56 }: VirtualAssistantIconProps) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn(className)}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="80" height="80" rx="10" fill="white"/>
      
      <g transform="translate(40, 20)">
        <rect x="-6" y="-8" width="4" height="16" fill="#FF0000"/>
        <rect x="-2" y="-8" width="4" height="16" fill="white"/>
        <rect x="2" y="-8" width="4" height="16" fill="#FF0000"/>
        
        <g transform="translate(0, 0)">
          <path d="M -1 -3 L 0 -5.5 L 1 -3 L 0.5 -3 L 0.5 -1 L -0.5 -1 L -0.5 -3 Z" fill="#FF0000"/>
          <path d="M -1 3 L 0 5.5 L 1 3 L 0.5 3 L 0.5 1 L -0.5 1 L -0.5 3 Z" fill="#FF0000"/>
          <path d="M -3 -1 L -5.5 0 L -3 1 L -3 0.5 L -1 0.5 L -1 -0.5 L -3 -0.5 Z" fill="#FF0000"/>
          <path d="M 3 -1 L 5.5 0 L 3 1 L 3 0.5 L 1 0.5 L 1 -0.5 L 3 -0.5 Z" fill="#FF0000"/>
          
          <path d="M -2.5 -2.5 L -3.5 -3.5 L -2.5 -3 L -1.5 -1.5 L -2 -2 Z" fill="#FF0000"/>
          <path d="M 2.5 -2.5 L 3.5 -3.5 L 2.5 -3 L 1.5 -1.5 L 2 -2 Z" fill="#FF0000"/>
          <path d="M -2.5 2.5 L -3.5 3.5 L -2.5 3 L -1.5 1.5 L -2 2 Z" fill="#FF0000"/>
          <path d="M 2.5 2.5 L 3.5 3.5 L 2.5 3 L 1.5 1.5 L 2 2 Z" fill="#FF0000"/>
          
          <circle cx="0" cy="0" r="1.2" fill="#FF0000"/>
        </g>
      </g>
      
      <text x="40" y="46" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        EVA
      </text>
      <text x="40" y="59" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        AskMe
      </text>
    </svg>
  )
}
