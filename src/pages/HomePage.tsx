import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkle, Users, Lightbulb, Rocket } from '@phosphor-icons/react'
import { HeroBanner } from '@/components/graphics/HeroBanner'
import { IconCard } from '@/components/graphics/IconCard'
import { IllustrationAI } from '@/components/graphics/IllustrationAI'
import { DecorativePattern } from '@/components/graphics/DecorativePattern'

export function HomePage() {
  const { t } = useI18n()

  return (
    <main id="main-content" className="py-12">
      <GCContainer>
        <HeroBanner
          title={t.home.title}
          subtitle={t.home.subtitle}
          description={t.home.hero_text}
          variant="pattern"
          icon={<Sparkle size={48} weight="fill" />}
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <IconCard
            icon={<Lightbulb size={32} weight="fill" />}
            title="AI-Powered Innovation"
            description="Leverage cutting-edge AI tools to transform how ESDC employees work"
            variant="accent"
          />
          <IconCard
            icon={<Users size={32} weight="fill" />}
            title="Collaborative Support"
            description="Expert guidance and tiered support for every level of complexity"
            variant="accent"
          />
          <IconCard
            icon={<Rocket size={32} weight="fill" />}
            title="Rapid Deployment"
            description="Streamlined workflows to get your AI solutions into production faster"
            variant="accent"
          />
        </div>

        <div className="bg-card border-2 border-primary rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t.home.value_prop_title}
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            {t.home.value_prop_text}
          </p>
        </div>

        <div className="relative mb-12">
          <DecorativePattern type="dots" className="text-accent" opacity={0.05} />
          <div className="relative z-10">
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
        </div>

        <div className="mt-16 flex justify-center">
          <IllustrationAI variant="collaboration" className="w-64 h-64 opacity-20" />
        </div>
      </GCContainer>
    </main>
  )
}
