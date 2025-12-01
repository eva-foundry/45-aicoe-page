import { useI18n } from '@/i18n/I18nContext'
import { GCContainer } from '@/components/gc/GCContainer'
import { GCBreadcrumbs } from '@/components/gc/GCBreadcrumbs'
import { GCCard, GCCardHeader, GCCardTitle, GCCardContent } from '@/components/gc/GCCard'
import { GCNotice } from '@/components/gc/GCUtils'
import { Check } from '@phosphor-icons/react'

export function ContactPage() {
  const { t } = useI18n()

  return (
    <>
      <GCBreadcrumbs items={[{ label: t.contact.breadcrumb }]} />
      <main id="main-content" className="py-12">
        <GCContainer size="lg">
          <h1 className="text-4xl font-bold text-primary mb-8">
            {t.contact.title}
          </h1>

          <p className="text-lg text-foreground leading-relaxed mb-12">
            {t.contact.intro}
          </p>

          <section className="mb-12">
            <GCCard variant="bordered" className="border-accent/30 bg-accent/5">
              <GCCardHeader>
                <GCCardTitle className="text-2xl">{t.contact.who_title}</GCCardTitle>
              </GCCardHeader>
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.contact.who_intro}
                </p>
                <ul className="space-y-3">
                  {[
                    t.contact.who_point_1,
                    t.contact.who_point_2,
                    t.contact.who_point_3,
                    t.contact.who_point_4,
                    t.contact.who_point_5,
                  ].map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </GCCardContent>
            </GCCard>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t.contact.how_title}
            </h2>
            <GCCard variant="bordered" className="border-primary">
              <GCCardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {t.contact.how_intro}
                </p>
                <div className="bg-muted p-6 rounded border-2 border-accent mb-4">
                  <p className="text-lg font-semibold text-foreground">
                    {t.contact.how_contact}
                  </p>
                </div>
                <GCNotice variant="info">
                  <p className="text-sm">{t.contact.how_note}</p>
                </GCNotice>
              </GCCardContent>
            </GCCard>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t.contact.prepare_title}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {t.contact.prepare_intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                t.contact.prepare_point_1,
                t.contact.prepare_point_2,
                t.contact.prepare_point_3,
                t.contact.prepare_point_4,
                t.contact.prepare_point_5,
                t.contact.prepare_point_6,
              ].map((point, index) => (
                <div key={index} className="flex gap-3 p-4 bg-card border border-border rounded">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-foreground pt-0.5">{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t.contact.expect_title}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {t.contact.expect_intro}
            </p>
            <ul className="space-y-3">
              {[
                t.contact.expect_point_1,
                t.contact.expect_point_2,
                t.contact.expect_point_3,
                t.contact.expect_point_4,
                t.contact.expect_point_5,
              ].map((point, index) => (
                <li key={index} className="flex gap-3">
                  <Check size={20} weight="bold" className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <GCCard variant="elevated" className="border-2 border-accent bg-accent/5">
              <GCCardContent>
                <p className="text-xl text-foreground leading-relaxed font-semibold text-center">
                  {t.contact.cta}
                </p>
              </GCCardContent>
            </GCCard>
          </section>
        </GCContainer>
      </main>
    </>
  )
}
