import {
  BrandVariants,
  createLightTheme,
  Theme,
} from '@fluentui/react-components'

const gcBrand: BrandVariants = {
  10: '#020305',
  20: '#0D1117',
  30: '#141B24',
  40: '#1A2431',
  50: '#26374A',
  60: '#335075',
  70: '#4A6B99',
  80: '#6489BD',
  90: '#82A7D8',
  100: '#A3C4ED',
  110: '#C5DFFF',
  120: '#E3F2FF',
  130: '#F0F8FF',
  140: '#F8FBFF',
  150: '#FCFDFF',
  160: '#FFFFFF',
}

export const gcTheme: Theme = createLightTheme(gcBrand)

export const gcTokens = {
  colors: {
    primary: '#26374A',
    primaryHover: '#335075',
    primaryActive: '#1A2431',
    accent: '#AF3C43',
    accentHover: '#8B3035',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    border: '#E0E0E0',
    text: '#26374A',
    textSecondary: '#535353',
    textLight: '#6B6B6B',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  shadows: {
    card: '0 2px 4px rgba(0, 0, 0, 0.08)',
    cardHover: '0 4px 12px rgba(0, 0, 0, 0.12)',
  },
}
