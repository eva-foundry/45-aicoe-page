import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCStepper } from '@/components/gc/GCUtils'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Check, MapTrifold, FlagCheckered } from '@phosphor-icons/react'
import { HeroBanner, StepConnector, DecorativePattern, DataVisualization, ProcessDiagram } from '@/components/graphics'

export function RoadmapPage() {
  const { t } = useI18n()

  const phases = [
    {
      title: `${t.roadmap.phase_1_title} - ${t.roadmap.phase_1_subtitle}`,
      description: t.roadmap.phase_1_desc,
    },
    {
      title: `${t.roadmap.phase_2_title} - ${t.roadmap.phase_2_subtitle}`,
      description: t.roadmap.phase_2_desc,
    },
    {
      title: `${t.roadmap.phase_3_title} - ${t.roadmap.phase_3_subtitle}`,
      description: t.roadmap.phase_3_desc,
    },
  ]

  const phaseActivities = [
    [
      t.roadmap.phase_1_activity_1,
      t.roadmap.phase_1_activity_2,
      t.roadmap.phase_1_activity_3,
      t.roadmap.phase_1_activity_4,
      t.roadmap.phase_1_activity_5,
    ],
    [
      t.roadmap.phase_2_activity_1,
      t.roadmap.phase_2_activity_2,
      t.roadmap.phase_2_activity_3,
      t.roadmap.phase_2_activity_4,
      t.roadmap.phase_2_activity_5,
    ],
    [
      t.roadmap.phase_3_activity_1,
      t.roadmap.phase_3_activity_2,
      t.roadmap.phase_3_activity_3,
      t.roadmap.phase_3_activity_4,
      t.roadmap.phase_3_activity_5,
    ],
  ]

  const outcomes = [
    { title: t.roadmap.outcome_1_title, desc: t.roadmap.outcome_1_desc },
    { title: t.roadmap.outcome_2_title, desc: t.roadmap.outcome_2_desc },
    { title: t.roadmap.outcome_3_title, desc: t.roadmap.outcome_3_desc },
    { title: t.roadmap.outcome_4_title, desc: t.roadmap.outcome_4_desc },
    { title: t.roadmap.outcome_5_title, desc: t.roadmap.outcome_5_desc },
    { title: t.roadmap.outcome_6_title, desc: t.roadmap.outcome_6_desc },
    { title: t.roadmap.outcome_7_title, desc: t.roadmap.outcome_7_desc },
    { title: t.roadmap.outcome_8_title, desc: t.roadmap.outcome_8_desc },
  ]

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.roadmap.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <HeroBanner
            title={t.roadmap.title}
            variant="gradient"
            icon={<MapTrifold size={48} weight="fill" />}
          />

          <div className="my-12">
            <ProcessDiagram 
              steps={[
                { label: phases[0].title.split(' - ')[0], status: 'complete' },
                { label: phases[1].title.split(' - ')[0], status: 'active' },
                { label: phases[2].title.split(' - ')[0], status: 'pending' },
              ]}
              orientation="horizontal"
            />
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t.roadmap.plan_title}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {t.roadmap.plan_intro}
            </p>

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index}>
                  <div className="flex gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-foreground leading-relaxed mb-4">{phase.description}</p>
                      <GCCard variant="bordered" className="bg-muted">
                        <ul className="space-y-2">
                          {phaseActivities[index].map((activity, actIndex) => (
                            <li key={actIndex} className="flex gap-3">
                              <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </GCCard>
                    </div>
                  </div>
                  {index < phases.length - 1 && (
                    <div className="ml-6 border-l-4 border-accent h-8"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="relative">
              <DecorativePattern type="circuit" className="text-primary" opacity={0.03} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <FlagCheckered size={32} weight="fill" className="text-accent" />
                  <h2 className="text-3xl font-bold text-foreground">
                    {t.roadmap.outcomes_title}
                  </h2>
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  {t.roadmap.outcomes_intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {outcomes.map((outcome, index) => (
                    <GCCard key={index} variant="elevated">
                      <GCCardHeader>
                        <GCCardTitle>{outcome.title}</GCCardTitle>
                      </GCCardHeader>
                      <GCCardContent>
                        <p className="text-foreground leading-relaxed">
                          {outcome.desc}
                        </p>
                      </GCCardContent>
                    </GCCard>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <GCCard variant="bordered" className="border-2 border-accent bg-accent/5">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.roadmap.conclusion_title}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-lg text-foreground leading-relaxed">
                  {t.roadmap.conclusion_text}
                </p>
              </GCCardContent>
            </GCCard>
          </section>
        </GCContainer>
      </main>
    </>
  )
}
