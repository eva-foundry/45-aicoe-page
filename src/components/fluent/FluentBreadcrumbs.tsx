import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { makeStyles } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'

const useStyles = makeStyles({
  breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    fontSize: '14px',
    marginBottom: '24px',
  },
  breadcrumbLink: {
    color: '#335075',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
      color: '#26374A',
    },
  },
  breadcrumbCurrent: {
    color: '#535353',
    fontWeight: 600,
  },
  separator: {
    color: '#6B6B6B',
  },
})

interface Breadcrumb {
  label: string
  path?: string
}

interface FluentBreadcrumbsProps {
  items: Breadcrumb[]
}

export function FluentBreadcrumbs({ items }: FluentBreadcrumbsProps) {
  const { t } = useI18n()
  const styles = useStyles()

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbLink}>
        {t.common.home}
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ChevronRight20Regular className={styles.separator} />
            {isLast || !item.path ? (
              <span className={styles.breadcrumbCurrent} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className={styles.breadcrumbLink}>
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
