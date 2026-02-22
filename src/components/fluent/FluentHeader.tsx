import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { Button, makeStyles, tokens } from '@fluentui/react-components'
import { CanadaWordmark, ESDCLogo } from '@/components/graphics'

const useStyles = makeStyles({
  header: {
    borderBottom: `4px solid #26374A`,
  },
  skipLink: {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    ':focus': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      display: 'block',
      padding: '16px',
      backgroundColor: '#26374A',
      color: '#FFFFFF',
      zIndex: 1000,
    },
  },
  topBar: {
    backgroundColor: '#26374A',
    color: '#FFFFFF',
    padding: '8px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexGap: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  mainSection: {
    backgroundColor: '#FFFFFF',
    padding: '16px 0',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.8,
    },
  },
  nav: {
    borderTop: '1px solid #E0E0E0',
    paddingTop: '16px',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#26374A',
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: 600,
    fontSize: '14px',
    transition: 'all 0.2s',
    ':hover': {
      backgroundColor: '#F8F9FA',
      color: '#335075',
    },
  },
  navLinkActive: {
    backgroundColor: '#335075',
    color: '#FFFFFF',
    ':hover': {
      backgroundColor: '#335075',
      color: '#FFFFFF',
    },
  },
  languageButton: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontWeight: 600,
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
})

export function FluentHeader() {
  const { language, setLanguage, t } = useI18n()
  const location = useLocation()
  const styles = useStyles()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: t.navigation.home },
    { path: '/program-overview', label: t.navigation.program_overview },
    { path: '/how-it-works', label: t.navigation.how_it_works },
    { path: '/services', label: t.navigation.services },
    { path: '/intake-optimization', label: t.navigation.intake_optimization },
    { path: '/use-case', label: t.navigation.use_case },
    { path: '/roadmap', label: t.navigation.roadmap },
    { path: '/contact', label: t.navigation.contact },
  ]

  return (
    <header className={styles.header}>
      <a href="#main-content" className={styles.skipLink}>
        {t.common.skip_to_main}
      </a>

      <div className={styles.topBar}>
        <div className={`${styles.container} ${styles.flexBetween}`}>
          <div className={styles.flexGap}>
            <CanadaWordmark />
          </div>
          <Button
            appearance="subtle"
            onClick={toggleLanguage}
            className={styles.languageButton}
            aria-label={t.common.language_selection}
          >
            {language === 'en' ? 'Français' : 'English'}
          </Button>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link to="/" className={styles.logoLink}>
              <ESDCLogo size="lg" />
            </Link>

            <nav aria-label="Main navigation" className={styles.nav}>
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`${styles.navLink} ${isActive(item.path) ? styles.navLinkActive : ''}`}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
