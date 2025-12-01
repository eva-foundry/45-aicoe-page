import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from './GCContainer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function GCHeader() {
  const { language, setLanguage, t } = useI18n()
  const location = useLocation()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="border-b-4 border-primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground">
        {t.common.skip_to_main}
      </a>
      
      <div className="bg-primary text-primary-foreground py-2">
        <GCContainer>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='30' viewBox='0 0 120 30'%3E%3Ctext x='0' y='20' font-family='Arial' font-size='14' font-weight='bold' fill='white'%3ECanada%3C/text%3E%3C/svg%3E"
                alt={t.common.gouvernement_of_canada}
                className="h-6"
              />
            </div>
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
              aria-label={t.common.language_selection}
            >
              {language === 'en' ? 'Français' : 'English'}
            </Button>
          </div>
        </GCContainer>
      </div>

      <div className="bg-background py-4">
        <GCContainer>
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold text-primary">
                {t.home.title}
              </div>
            </Link>
            
            <nav aria-label="Main navigation" className="border-t border-border pt-4">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link
                    to="/"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.home}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/program-overview"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/program-overview') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.program_overview}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/how-it-works') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.how_it_works}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/services') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.services}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/intake-optimization"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/intake-optimization') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.intake_optimization}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/use-case"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/use-case') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.use_case}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/roadmap"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/roadmap') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.roadmap}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={cn(
                      'text-sm font-semibold hover:text-accent underline-offset-4',
                      isActive('/contact') ? 'text-accent underline' : 'text-foreground hover:underline'
                    )}
                  >
                    {t.navigation.contact}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </GCContainer>
      </div>
    </header>
  )
}
