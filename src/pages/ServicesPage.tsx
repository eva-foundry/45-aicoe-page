import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCCard, GCCardHeader, GCCardTitle, GCCardSubtitle, GCCardContent } from '@/components/gc/GCCard'
import { Check, Lightbulb } from '@phosphor-icons/react'

export function ServicesPage() {
  const { t } = useI18n()

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.services.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <h1 className="text-4xl font-bold text-primary mb-8">
            {t.services.title}
          </h1>

          <p className="text-lg text-foreground leading-relaxed mb-12">
            {t.services.intro}
          </p>

          <div className="space-y-8">
            <GCCard variant="elevated" className="border-2 border-accent">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.services.tier_1_title}</GCCardTitle>
                <GCCardSubtitle>{t.services.tier_1_subtitle}</GCCardSubtitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.services.tier_1_desc}
                </p>
                <h4 className="font-bold text-foreground mb-3">{t.services.tier_1_includes}</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    t.services.tier_1_point_1,
                    t.services.tier_1_point_2,
                    t.services.tier_1_point_3,
                    t.services.tier_1_point_4,
                  ].map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 items-start bg-accent/10 p-3 rounded">
                  <Lightbulb size={20} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>{t.services.tier_1_best}</strong>
                  </p>
                </div>
              </GCCardContent>
            </GCCard>

            <GCCard variant="elevated" className="border-2 border-accent">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.services.tier_2_title}</GCCardTitle>
                <GCCardSubtitle>{t.services.tier_2_subtitle}</GCCardSubtitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.services.tier_2_desc}
                </p>
                <h4 className="font-bold text-foreground mb-3">{t.services.tier_2_includes}</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    t.services.tier_2_point_1,
                    t.services.tier_2_point_2,
                    t.services.tier_2_point_3,
                    t.services.tier_2_point_4,
                  ].map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 items-start bg-accent/10 p-3 rounded">
                  <Lightbulb size={20} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>{t.services.tier_2_best}</strong>
                  </p>
                </div>
              </GCCardContent>
            </GCCard>

            <GCCard variant="elevated" className="border-2 border-primary">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.services.tier_3_title}</GCCardTitle>
                <GCCardSubtitle>{t.services.tier_3_subtitle}</GCCardSubtitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.services.tier_3_desc}
                </p>
                <h4 className="font-bold text-foreground mb-3">{t.services.tier_3_includes}</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    t.services.tier_3_point_1,
                    t.services.tier_3_point_2,
                    t.services.tier_3_point_3,
                    t.services.tier_3_point_4,
                    t.services.tier_3_point_5,
                  ].map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 items-start bg-accent/10 p-3 rounded">
                  <Lightbulb size={20} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>{t.services.tier_3_best}</strong>
                  </p>
                </div>
              </GCCardContent>
            </GCCard>
          </div>
        </GCContainer>
      </main>
    </>
  )
}
