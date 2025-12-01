import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Check, Target, Warning } from '@phosphor-icons/react'
import { HeroBanner, DecorativePattern, IllustrationTech, FeatureIcon } from '@/components/graphics'

export function ProgramOverviewPage() {
  const { t } = useI18n()

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.program.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <HeroBanner
            title={t.program.title}
            variant="default"
            icon={<Target size={48} weight="fill" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
            <div className="flex flex-col items-center text-center p-4">
              <FeatureIcon type="innovation" className="text-accent mb-3" />
              <h3 className="text-sm font-bold">Innovation</h3>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <FeatureIcon type="security" className="text-accent mb-3" />
              <h3 className="text-sm font-bold">Security</h3>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <FeatureIcon type="speed" className="text-accent mb-3" />
              <h3 className="text-sm font-bold">Efficiency</h3>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <FeatureIcon type="training" className="text-accent mb-3" />
              <h3 className="text-sm font-bold">Training</h3>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <IllustrationTech variant="integration" className="w-56 h-56 opacity-20" />
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t.program.exec_summary_title}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {t.program.exec_summary_intro}
            </p>
            <ul className="space-y-3">
              {[
                t.program.exec_point_1,
                t.program.exec_point_2,
                t.program.exec_point_3,
                t.program.exec_point_4,
                t.program.exec_point_5,
                t.program.exec_point_6,
              ].map((point, index) => (
                <li key={index} className="flex gap-3">
                  <Check size={24} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <GCCard variant="bordered" className="border-destructive/30 bg-destructive/5">
              <GCCardHeader>
                <div className="flex items-center gap-3">
                  <Warning size={28} weight="fill" className="text-destructive" />
                  <GCCardTitle className="text-2xl">{t.program.problem_title}</GCCardTitle>
                </div>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.program.problem_text_1}
                </p>
                <p className="text-foreground leading-relaxed">
                  {t.program.problem_text_2}
                </p>
              </GCCardContent>
            </GCCard>
          </section>

          <section className="mb-12">
            <GCCard variant="bordered" className="border-accent/30 bg-accent/5">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.program.opportunity_title}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.program.opportunity_text}
                </p>
                <ul className="space-y-3">
                  {[
                    t.program.opportunity_point_1,
                    t.program.opportunity_point_2,
                    t.program.opportunity_point_3,
                    t.program.opportunity_point_4,
                  ].map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <Check size={24} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </GCCardContent>
            </GCCard>
          </section>

          <section className="mb-12">
            <div className="relative">
              <DecorativePattern type="waves" className="text-accent" opacity={0.05} />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t.program.goals_title}
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {t.program.goals_intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    t.program.goal_1,
                    t.program.goal_2,
                    t.program.goal_3,
                    t.program.goal_4,
                    t.program.goal_5,
                    t.program.goal_6,
                  ].map((goal, index) => (
                    <GCCard key={index} variant="elevated">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <p className="text-foreground leading-relaxed pt-1">{goal}</p>
                      </div>
                    </GCCard>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </GCContainer>
      </main>
    </>
  )
}
