import { ReactNode } from 'react'
import { Card as FluentCard, makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
  card: {
    padding: '24px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    transition: 'box-shadow 0.2s ease',
    ':hover': {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    },
  },
})

interface FluentCardCustomProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function FluentCardCustom({ children, className, style }: FluentCardCustomProps) {
  const styles = useStyles()
  
  return (
    <FluentCard className={`${styles.card} ${className || ''}`} style={style}>
      {children}
    </FluentCard>
  )
}
