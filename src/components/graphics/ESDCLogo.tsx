import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/I18nContext'

interface ESDCLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function ESDCLogo({ className, size = 'md' }: ESDCLogoProps) {
  const { language } = useI18n()

  const sizeMap = {
    sm: { height: 30 },
    md: { height: 40 },
    lg: { height: 50 }
  }

  const dimensions = sizeMap[size]
  
  const logoUrl = language === 'en' 
    ? 'https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg'
    : 'https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-fr.svg'

  return (
    <img 
      src={logoUrl}
      alt={language === 'en' ? 'Government of Canada' : 'Gouvernement du Canada'}
      height={dimensions.height}
      className={cn('h-auto', className)}
      style={{ height: `${dimensions.height}px` }}
    />
  )
}
