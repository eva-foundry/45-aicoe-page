import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { Button, makeStyles } from '@fluentui/react-components'
import { 
  ArrowRight24Regular, 
  Sparkle24Filled, 
  People24Regular, 
  Lightbulb24Regular, 
  Rocket24Regular 
} from '@fluentui/react-icons'
import { FluentContainer, FluentCardCustom } from '@/components/fluent'

const useStyles = makeStyles({
  main: {
    paddingTop: '48px',
    paddingBottom: '48px',
  },
  heroSection: {
    position: 'relative',
    marginBottom: '48px',
    padding: '64px 32px',
    backgroundColor: '#F8F9FA',
    borderRadius: '8px',
    textAlign: 'center',
  },
  heroIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
    color: '#AF3C43',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#26374A',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#335075',
    marginBottom: '16px',
  },
  heroDescription: {
    fontSize: '18px',
    color: '#535353',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  featureCard: {
    textAlign: 'center',
    padding: '32px 24px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  featureIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
    color: '#AF3C43',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#26374A',
    marginBottom: '12px',
  },
  featureDescription: {
    fontSize: '14px',
    color: '#535353',
    lineHeight: '1.5',
  },
  valueSection: {
    backgroundColor: '#FFFFFF',
    border: '3px solid #26374A',
    borderRadius: '8px',
    padding: '48px 32px',
    marginBottom: '64px',
    textAlign: 'center',
  },
  valueTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#26374A',
    marginBottom: '16px',
  },
  valueText: {
    fontSize: '18px',
    color: '#535353',
    lineHeight: '1.7',
    maxWidth: '900px',
    margin: '0 auto',
  },
  linksSection: {
    marginBottom: '48px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#26374A',
    marginBottom: '32px',
    textAlign: 'center',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
  },
  linkCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  linkCardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#26374A',
    marginBottom: '12px',
  },
  linkCardText: {
    fontSize: '16px',
    color: '#535353',
    marginBottom: '24px',
    lineHeight: '1.6',
    flexGrow: 1,
  },
})

export function HomePage() {
  const { t } = useI18n()
  const styles = useStyles()

  return (
    <main id="main-content" className={styles.main}>
      <FluentContainer>
        <div className={styles.heroSection}>
          <div className={styles.heroIcon}>
            <Sparkle24Filled style={{ width: '64px', height: '64px' }} />
          </div>
          <h1 className={styles.heroTitle}>{t.home.title}</h1>
          <h2 className={styles.heroSubtitle}>{t.home.subtitle}</h2>
          <p className={styles.heroDescription}>{t.home.hero_text}</p>
        </div>

        <div className={styles.featureGrid}>
          <FluentCardCustom className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Sparkle24Filled style={{ width: '48px', height: '48px' }} />
            </div>
            <h3 className={styles.featureTitle}>AI-Powered Innovation</h3>
            <p className={styles.featureDescription}>
              Leverage cutting-edge AI tools to transform how ESDC employees work
            </p>
          </FluentCardCustom>

          <FluentCardCustom className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <People24Regular style={{ width: '48px', height: '48px' }} />
            </div>
            <h3 className={styles.featureTitle}>Collaborative Support</h3>
            <p className={styles.featureDescription}>
              Expert guidance and tiered support for every level of complexity
            </p>
          </FluentCardCustom>

          <FluentCardCustom className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Rocket24Regular style={{ width: '48px', height: '48px' }} />
            </div>
            <h3 className={styles.featureTitle}>Rapid Deployment</h3>
            <p className={styles.featureDescription}>
              Streamlined workflows to get your AI solutions into production faster
            </p>
          </FluentCardCustom>
        </div>

        <div className={styles.valueSection}>
          <h2 className={styles.valueTitle}>{t.home.value_prop_title}</h2>
          <p className={styles.valueText}>{t.home.value_prop_text}</p>
        </div>

        <div className={styles.linksSection}>
          <h2 className={styles.sectionTitle}>{t.home.quick_links_title}</h2>
          <div className={styles.linksGrid}>
            <FluentCardCustom className={styles.linkCard}>
              <h3 className={styles.linkCardTitle}>{t.navigation.program_overview}</h3>
              <p className={styles.linkCardText}>{t.home.link_program}</p>
              <Link to="/program-overview" style={{ textDecoration: 'none' }}>
                <Button appearance="primary" icon={<ArrowRight24Regular />} iconPosition="after">
                  {t.common.learn_more}
                </Button>
              </Link>
            </FluentCardCustom>

            <FluentCardCustom className={styles.linkCard}>
              <h3 className={styles.linkCardTitle}>{t.navigation.how_it_works}</h3>
              <p className={styles.linkCardText}>{t.home.link_workflow}</p>
              <Link to="/how-it-works" style={{ textDecoration: 'none' }}>
                <Button appearance="primary" icon={<ArrowRight24Regular />} iconPosition="after">
                  {t.common.learn_more}
                </Button>
              </Link>
            </FluentCardCustom>

            <FluentCardCustom className={styles.linkCard}>
              <h3 className={styles.linkCardTitle}>{t.navigation.services}</h3>
              <p className={styles.linkCardText}>{t.home.link_services}</p>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <Button appearance="primary" icon={<ArrowRight24Regular />} iconPosition="after">
                  {t.common.learn_more}
                </Button>
              </Link>
            </FluentCardCustom>

            <FluentCardCustom className={styles.linkCard}>
              <h3 className={styles.linkCardTitle}>{t.navigation.contact}</h3>
              <p className={styles.linkCardText}>{t.home.link_contact}</p>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button appearance="primary" icon={<ArrowRight24Regular />} iconPosition="after">
                  {t.common.get_started}
                </Button>
              </Link>
            </FluentCardCustom>
          </div>
        </div>
      </FluentContainer>
    </main>
  )
}
