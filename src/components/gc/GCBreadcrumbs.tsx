import { Link } from 'react-router-dom'
import { CaretRight } from '@phosphor-icons/react'
import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from './GCContainer'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface GCBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function GCBreadcrumbs({ items }: GCBreadcrumbsProps) {
  const { t } = useI18n()

  return (
    <nav aria-label="Breadcrumb" className="bg-muted py-3 border-b border-border">
      <GCContainer>
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-accent hover:underline">
              {t.common.home}
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CaretRight size={16} className="text-muted-foreground" weight="bold" />
              {item.path ? (
                <Link to={item.path} className="text-accent hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </GCContainer>
    </nav>
  )
}
