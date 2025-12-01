import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from '@phosphor-icons/react'

export function HomePage() {
  const { t } = useI18n()

  return (
    <main id="main-content" className="py-12">
      <GCContainer>
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t.home.title}
          </h1>
          <p className="text-2xl text-secondary font-semibold mb-6">
            {t.home.subtitle}
          </p>
          <p className="text-lg text-foreground leading-relaxed max-w-4xl">
            {t.home.hero_text}
          </p>
        </div>

        <div className="bg-card border-2 border-primary rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t.home.value_prop_title}
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            {t.home.value_prop_text}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {t.home.quick_links_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GCCard variant="elevated" className="hover:border-accent transition-colors">
              <GCCardHeader>
                <GCCardTitle>{t.navigation.program_overview}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t.home.link_program}
                </p>
                <Link to="/program-overview">
                  <Button className="w-full sm:w-auto">
                    {t.common.learn_more}
                    <ArrowRight size={18} weight="bold" className="ml-2" />
                  </Button>
                </Link>
              </GCCardContent>
            </GCCard>

            <GCCard variant="elevated" className="hover:border-accent transition-colors">
              <GCCardHeader>
                <GCCardTitle>{t.navigation.how_it_works}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t.home.link_workflow}
                </p>
                <Link to="/how-it-works">
                  <Button className="w-full sm:w-auto">
                    {t.common.learn_more}
                    <ArrowRight size={18} weight="bold" className="ml-2" />
                  </Button>
                </Link>
              </GCCardContent>
            </GCCard>

            <GCCard variant="elevated" className="hover:border-accent transition-colors">
              <GCCardHeader>
                <GCCardTitle>{t.navigation.services}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t.home.link_services}
                </p>
                <Link to="/services">
                  <Button className="w-full sm:w-auto">
                    {t.common.learn_more}
                    <ArrowRight size={18} weight="bold" className="ml-2" />
                  </Button>
                </Link>
              </GCCardContent>
            </GCCard>

            <GCCard variant="elevated" className="hover:border-accent transition-colors">
              <GCCardHeader>
                <GCCardTitle>{t.navigation.contact}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {t.home.link_contact}
                </p>
                <Link to="/contact">
                  <Button variant="default" className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                    {t.common.get_started}
                    <ArrowRight size={18} weight="bold" className="ml-2" />
                  </Button>
                </Link>
              </GCCardContent>
            </GCCard>
          </div>
        </div>
      </GCContainer>
    </main>
  )
}
