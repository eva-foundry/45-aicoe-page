import { useI18n } from '@/i18n/I18nContext'
import { makeStyles, Link } from '@fluentui/react-components'
import { GCSymbol } from '@/components/graphics'

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#F8F9FA',
    borderTop: '1px solid #E0E0E0',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #E0E0E0',
  },
  linksGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  groupTitle: {
    fontWeight: 600,
    color: '#26374A',
    fontSize: '16px',
    marginBottom: '4px',
  },
  footerLink: {
    color: '#335075',
    textDecoration: 'none',
    fontSize: '14px',
    ':hover': {
      textDecoration: 'underline',
      color: '#26374A',
    },
  },
  bottomSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
    paddingTop: '24px',
  },
  copyright: {
    color: '#535353',
    fontSize: '14px',
    margin: 0,
  },
})

export function FluentFooter() {
  const { t } = useI18n()
  const styles = useStyles()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.linksGroup}>
            <h3 className={styles.groupTitle}>{t.footer.about_government}</h3>
            <Link href="https://www.canada.ca/en.html" className={styles.footerLink}>
              Canada.ca
            </Link>
          </div>
          <div className={styles.linksGroup}>
            <h3 className={styles.groupTitle}>{t.footer.about_site}</h3>
            <Link href="#" className={styles.footerLink}>
              {t.footer.terms_conditions}
            </Link>
            <Link href="#" className={styles.footerLink}>
              {t.footer.privacy}
            </Link>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>{t.footer.copyright}</p>
          <GCSymbol />
        </div>
      </div>
    </footer>
  )
}
