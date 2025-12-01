import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCStepper } from '@/components/gc/GCUtils'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { Check, FlowArrow } from '@phosphor-icons/react'
import { HeroBanner, IllustrationTech, DataVisualization, FeatureIcon } from '@/components/graphics'

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
              <FeatureIcon type="prompt" className="text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Prompt Services</h3>
              <p className="text-sm text-muted-foreground">Curated prompts and templates</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
              <FeatureIcon type="workflow" className="text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Workflow Automation</h3>
              <p className="text-sm text-muted-foreground">Streamlined approval process</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
              <FeatureIcon type="support" className="text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Tiered assistance levels</p>
            </div>
          </div>

          <div className="flex justify-center my-12">
            <IllustrationTech variant="automation" className="w-64 h-64" />
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
