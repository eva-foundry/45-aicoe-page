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
      
      <g transform="translate(40, 26)">
        <rect x="-12" y="-14" width="8" height="28" fill="#FF0000"/>
        <rect x="-4" y="-14" width="8" height="28" fill="white"/>
        <rect x="4" y="-14" width="8" height="28" fill="#FF0000"/>
        
        <g transform="translate(0, 0)">
          <path d="M -2 -7 L 0 -11 L 2 -7 L 1 -7 L 1 -3 L -1 -3 L -1 -7 Z" fill="#FF0000"/>
          <path d="M -2 7 L 0 11 L 2 7 L 1 7 L 1 3 L -1 3 L -1 7 Z" fill="#FF0000"/>
          <path d="M -7 -2 L -11 0 L -7 2 L -7 1 L -3 1 L -3 -1 L -7 -1 Z" fill="#FF0000"/>
          <path d="M 7 -2 L 11 0 L 7 2 L 7 1 L 3 1 L 3 -1 L 7 -1 Z" fill="#FF0000"/>
          
          <path d="M -5.5 -5.5 L -7.5 -7.5 L -5.5 -6.5 L -3.5 -3.5 L -4.5 -4.5 Z" fill="#FF0000"/>
          <path d="M 5.5 -5.5 L 7.5 -7.5 L 5.5 -6.5 L 3.5 -3.5 L 4.5 -4.5 Z" fill="#FF0000"/>
          <path d="M -5.5 5.5 L -7.5 7.5 L -5.5 6.5 L -3.5 3.5 L -4.5 4.5 Z" fill="#FF0000"/>
          <path d="M 5.5 5.5 L 7.5 7.5 L 5.5 6.5 L 3.5 3.5 L 4.5 4.5 Z" fill="#FF0000"/>
          
          <circle cx="0" cy="0" r="2.5" fill="#FF0000"/>
        </g>
      </g>
      
      <text x="40" y="60" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        EVA
      </text>
      <text x="40" y="70" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#2B50A2" textAnchor="middle">
        AskMe
      </text>
    </svg>
  )
}
