import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from './GCContainer'

export function GCFooter() {
  const { t } = useI18n()

  return (
    <footer className="bg-muted mt-16 border-t-4 border-primary">
      <GCContainer>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {t.footer.about_government}
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-accent hover:underline text-sm">
                    {t.footer.about_site}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {t.footer.terms_conditions}
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-accent hover:underline text-sm">
                    {t.footer.privacy}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {t.footer.copyright}
              </div>
              <div>
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='30' viewBox='0 0 120 30'%3E%3Ctext x='0' y='20' font-family='Arial' font-size='14' font-weight='bold' fill='%2326374A'%3ECanada%3C/text%3E%3C/svg%3E"
                  alt="Government of Canada"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </GCContainer>
    </footer>
  )
}
