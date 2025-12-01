import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { GCNotice } from '@/components/gc/GCUtils'
import { Check, ArrowRight } from '@phosphor-icons/react'

export function IntakeOptimizationPage() {
  const { t } = useI18n()

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.intake.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <h1 className="text-4xl font-bold text-primary mb-8">
            {t.intake.title}
          </h1>

          <p className="text-lg text-foreground leading-relaxed mb-12">
            {t.intake.intro}
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {t.intake.benefits_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GCCard variant="elevated">
                <GCCardHeader>
                  <GCCardTitle>{t.intake.benefit_1}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.intake.benefit_1_desc}
                  </p>
                </GCCardContent>
              </GCCard>

              <GCCard variant="elevated">
                <GCCardHeader>
                  <GCCardTitle>{t.intake.benefit_2}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.intake.benefit_2_desc}
                  </p>
                </GCCardContent>
              </GCCard>

              <GCCard variant="elevated">
                <GCCardHeader>
                  <GCCardTitle>{t.intake.benefit_3}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.intake.benefit_3_desc}
                  </p>
                </GCCardContent>
              </GCCard>

              <GCCard variant="elevated">
                <GCCardHeader>
                  <GCCardTitle>{t.intake.benefit_4}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.intake.benefit_4_desc}
                  </p>
                </GCCardContent>
              </GCCard>

              <GCCard variant="elevated" className="md:col-span-2">
                <GCCardHeader>
                  <GCCardTitle>{t.intake.benefit_5}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.intake.benefit_5_desc}
                  </p>
                </GCCardContent>
              </GCCard>
            </div>
          </section>

          <section className="mb-12">
            <GCNotice variant="info" title={t.intake.before_title}>
              <p className="mb-4">{t.intake.before_intro}</p>
              <ul className="space-y-2">
                {[
                  t.intake.before_point_1,
                  t.intake.before_point_2,
                  t.intake.before_point_3,
                  t.intake.before_point_4,
                  t.intake.before_point_5,
                ].map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </GCNotice>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {t.intake.process_title}
            </h2>
            <div className="space-y-4">
              {[
                t.intake.process_step_1,
                t.intake.process_step_2,
                t.intake.process_step_3,
                t.intake.process_step_4,
                t.intake.process_step_5,
              ].map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground leading-relaxed">{step}</p>
                  </div>
                  {index < 4 && (
                    <ArrowRight size={20} className="text-muted-foreground flex-shrink-0 mt-1" weight="bold" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </GCContainer>
      </main>
    </>
  )
}
