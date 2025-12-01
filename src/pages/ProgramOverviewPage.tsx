import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Check } from '@phosphor-icons/react'

export function ProgramOverviewPage() {
  const { t } = useI18n()

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.program.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <h1 className="text-4xl font-bold text-primary mb-8">
            {t.program.title}
          </h1>

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
                <GCCardTitle className="text-2xl">{t.program.problem_title}</GCCardTitle>
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
          </section>
        </GCContainer>
      </main>
    </>
  )
}
