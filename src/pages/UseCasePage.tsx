import { useState } from 'react'
import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCCard, GCCardHeader, GCCardTitle, GCCardSubtitle, GCCardContent } from '@/components/gc/GCCard'
import { GCNotice } from '@/components/gc/GCUtils'
import { Check, X, CaretDown, CaretUp } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function UseCasePage() {
  const { t } = useI18n()
  const [expandedOption, setExpandedOption] = useState<number | null>(null)

  const toggleOption = (index: number) => {
    setExpandedOption(expandedOption === index ? null : index)
  }

  const options = [
    {
      title: t.useCase.option_1_title,
      subtitle: t.useCase.option_1_subtitle,
      desc: t.useCase.option_1_desc,
      pros: [
        t.useCase.option_1_pro_1,
        t.useCase.option_1_pro_2,
        t.useCase.option_1_pro_3,
        t.useCase.option_1_pro_4,
      ],
      cons: [
        t.useCase.option_1_con_1,
        t.useCase.option_1_con_2,
        t.useCase.option_1_con_3,
      ],
      prosTitle: t.useCase.option_1_pros_title,
      consTitle: t.useCase.option_1_cons_title,
    },
    {
      title: t.useCase.option_2_title,
      subtitle: t.useCase.option_2_subtitle,
      desc: t.useCase.option_2_desc,
      pros: [
        t.useCase.option_2_pro_1,
        t.useCase.option_2_pro_2,
        t.useCase.option_2_pro_3,
      ],
      cons: [
        t.useCase.option_2_con_1,
        t.useCase.option_2_con_2,
        t.useCase.option_2_con_3,
        t.useCase.option_2_con_4,
      ],
      prosTitle: t.useCase.option_2_pros_title,
      consTitle: t.useCase.option_2_cons_title,
    },
    {
      title: t.useCase.option_3_title,
      subtitle: t.useCase.option_3_subtitle,
      desc: t.useCase.option_3_desc,
      pros: [
        t.useCase.option_3_pro_1,
        t.useCase.option_3_pro_2,
        t.useCase.option_3_pro_3,
        t.useCase.option_3_pro_4,
      ],
      cons: [
        t.useCase.option_3_con_1,
        t.useCase.option_3_con_2,
        t.useCase.option_3_con_3,
        t.useCase.option_3_con_4,
      ],
      prosTitle: t.useCase.option_3_pros_title,
      consTitle: t.useCase.option_3_cons_title,
    },
    {
      title: t.useCase.option_4_title,
      subtitle: t.useCase.option_4_subtitle,
      desc: t.useCase.option_4_desc,
      pros: [
        t.useCase.option_4_pro_1,
        t.useCase.option_4_pro_2,
        t.useCase.option_4_pro_3,
        t.useCase.option_4_pro_4,
      ],
      cons: [
        t.useCase.option_4_con_1,
        t.useCase.option_4_con_2,
        t.useCase.option_4_con_3,
        t.useCase.option_4_con_4,
      ],
      prosTitle: t.useCase.option_4_pros_title,
      consTitle: t.useCase.option_4_cons_title,
    },
  ]

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.useCase.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer>
          <h1 className="text-4xl font-bold text-primary mb-8">
            {t.useCase.title}
          </h1>

          <section className="mb-12">
            <GCCard variant="bordered" className="border-destructive/30 bg-destructive/5">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.useCase.problem_title}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.useCase.problem_intro}
                </p>
                <ul className="space-y-2">
                  {[
                    t.useCase.problem_point_1,
                    t.useCase.problem_point_2,
                    t.useCase.problem_point_3,
                    t.useCase.problem_point_4,
                  ].map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <X size={20} weight="bold" className="text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </GCCardContent>
            </GCCard>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GCCard variant="bordered" className="border-accent/30">
                <GCCardHeader>
                  <GCCardTitle>{t.useCase.challenge_title}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.useCase.challenge_text}
                  </p>
                </GCCardContent>
              </GCCard>

              <GCCard variant="bordered" className="border-accent/30">
                <GCCardHeader>
                  <GCCardTitle>{t.useCase.impact_title}</GCCardTitle>
                </GCCardHeader>
                <GCCardContent>
                  <p className="text-foreground leading-relaxed">
                    {t.useCase.impact_text}
                  </p>
                </GCCardContent>
              </GCCard>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t.useCase.options_title}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {t.useCase.options_intro}
            </p>

            <div className="space-y-6">
              {options.map((option, index) => (
                <GCCard key={index} variant="elevated" className="border-2 hover:border-accent transition-colors">
                  <GCCardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <GCCardTitle className="text-xl">{option.title}</GCCardTitle>
                        <GCCardSubtitle>{option.subtitle}</GCCardSubtitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleOption(index)}
                        className="flex-shrink-0"
                        aria-expanded={expandedOption === index}
                      >
                        {expandedOption === index ? (
                          <>
                            {t.common.close}
                            <CaretUp size={16} weight="bold" className="ml-2" />
                          </>
                        ) : (
                          <>
                            {t.common.open}
                            <CaretDown size={16} weight="bold" className="ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </GCCardHeader>
                  <GCCardContent>
                    <p className="text-foreground leading-relaxed mb-4">
                      {option.desc}
                    </p>

                    {expandedOption === index && (
                      <div className="pt-4 border-t border-border space-y-6">
                        <div>
                          <h4 className="font-bold text-foreground mb-3 text-lg">
                            {option.prosTitle}
                          </h4>
                          <ul className="space-y-2">
                            {option.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex gap-3">
                                <Check size={20} weight="bold" className="text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-foreground mb-3 text-lg">
                            {option.consTitle}
                          </h4>
                          <ul className="space-y-2">
                            {option.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex gap-3">
                                <X size={20} weight="bold" className="text-destructive flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </GCCardContent>
                </GCCard>
              ))}
            </div>
          </section>

          <section>
            <GCNotice variant="success" title={t.useCase.recommendation_title}>
              <p className="text-foreground leading-relaxed">
                {t.useCase.recommendation_text}
              </p>
            </GCNotice>
          </section>
        </GCContainer>
      </main>
    </>
  )
}
