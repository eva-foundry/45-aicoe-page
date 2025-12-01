import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/I18nContext'

interface ESDCLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function ESDCLogo({ className, size = 'md' }: ESDCLogoProps) {
  const { language } = useI18n()

  const sizeMap = {
    sm: { flagWidth: 40, flagHeight: 20, textSize: 'text-xs', gap: 'gap-2' },
    md: { flagWidth: 60, flagHeight: 30, textSize: 'text-sm', gap: 'gap-3' },
    lg: { flagWidth: 80, flagHeight: 40, textSize: 'text-base', gap: 'gap-4' }
  }

  const dimensions = sizeMap[size]

  return (
    <div className={cn('flex items-center', dimensions.gap, className)}>
      <svg 
        width={dimensions.flagWidth} 
        height={dimensions.flagHeight} 
        viewBox="0 0 90 45"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Flag of Canada"
      >
        <rect width="30" height="45" fill="#FF0000"/>
        <rect x="60" width="30" height="45" fill="#FF0000"/>
        <rect x="30" width="30" height="45" fill="#FFFFFF"/>
        <path
          d="M 45 12 L 47 18 L 52 17 L 48 21 L 51 26 L 46 24 L 45 29 L 44 24 L 39 26 L 42 21 L 38 17 L 43 18 Z"
          fill="#FF0000"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={cn('font-semibold text-foreground', dimensions.textSize)}>
          {language === 'en' ? 'Employment and' : 'Emploi et'}
        </span>
        <span className={cn('font-semibold text-foreground', dimensions.textSize)}>
          {language === 'en' ? 'Social Development Canada' : 'Développement social Canada'}
        </span>
      </div>
    </div>
  )
}
