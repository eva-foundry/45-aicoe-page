import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCStepper } from '@/components/gc/GCUtils'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Check, FlowArrow } from '@phosphor-icons/react'
import { HeroBanner } from '@/components/graphics/HeroBanner'
import { IllustrationAI } from '@/components/graphics/IllustrationAI'

export function HowItWorksPage() {
  const { t } = useI18n()

  const workflowSteps = [
    {
      title: t.workflow.step_1_title,
      description: t.workflow.step_1_desc,
    },
    {
      title: t.workflow.step_2_title,
      description: t.workflow.step_2_desc,
    },
    {
      title: t.workflow.step_3_title,
      description: t.workflow.step_3_desc,
    },
    {
      title: t.workflow.step_4_title,
      description: t.workflow.step_4_desc,
    },
    {
      title: t.workflow.step_5_title,
      description: t.workflow.step_5_desc,
    },
    {
      title: t.workflow.step_6_title,
      description: t.workflow.step_6_desc,
    },
    {
      title: t.workflow.step_7_title,
      description: t.workflow.step_7_desc,
    },
  ]

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.workflow.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <HeroBanner
            title={t.workflow.title}
            description={t.workflow.intro}
            variant="default"
            icon={<FlowArrow size={48} weight="fill" />}
          />

          <div className="flex justify-center my-12">
            <IllustrationAI variant="workflow" className="w-48 h-48" />
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {t.workflow.model_title}
            </h2>
            <GCStepper steps={workflowSteps} />
          </section>

          <section>
            <GCCard variant="bordered" className="border-accent/30 bg-accent/5">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.workflow.enterprise_tools_title}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-6">
                  {t.workflow.enterprise_tools_intro}
                </p>
                <ul className="space-y-4">
                  {[
                    t.workflow.tool_eva,
                    t.workflow.tool_copilot,
                    t.workflow.tool_other,
                  ].map((tool, index) => (
                    <li key={index} className="flex gap-3">
                      <Check size={24} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{tool}</span>
                    </li>
                  ))}
                </ul>
              </GCCardContent>
            </GCCard>
          </section>
        </GCContainer>
      </main>
    </>
  )
}
