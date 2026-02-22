import { ReactNode, CSSProperties } from 'react'
import { makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  },
})

interface FluentContainerProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
}

export function FluentContainer({ children, style, className }: FluentContainerProps) {
  const styles = useStyles()
  
  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      {children}
    </div>
  )
}
