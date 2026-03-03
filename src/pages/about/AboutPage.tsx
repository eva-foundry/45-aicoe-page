// EVA-STORY: F45-05-001
import {
  Body1,
  makeStyles,
  Subtitle1,
  Title1,
  Title2,
  tokens,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  hero: {
    textAlign: "center",
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXL}`,
    marginBottom: tokens.spacingVerticalXL,
  },
  heroTitle: {
    display: "block",
    marginBottom: tokens.spacingVerticalM,
    color: tokens.colorBrandForeground1,
  },
  heroSub: {
    display: "block",
    color: tokens.colorNeutralForeground2,
    maxWidth: "640px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  section: {
    maxWidth: "720px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: tokens.spacingVerticalXXL,
  },
  sectionHeader: {
    display: "block",
    marginBottom: tokens.spacingVerticalM,
    color: tokens.colorNeutralForeground1,
  },
  body: {
    display: "block",
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase400,
  },
  pillars: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: tokens.spacingHorizontalL,
    marginTop: tokens.spacingVerticalL,
  },
  pillarCard: {
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground2,
    borderLeft: `4px solid ${tokens.colorBrandForeground1}`,
    "@media (forced-colors: active)": {
      border: "2px solid CanvasText",
    },
  },
  pillarTitle: {
    display: "block",
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: tokens.spacingVerticalXS,
    color: tokens.colorNeutralForeground1,
  },
  pillarBody: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
  },
});

export function AboutPage() {
  const styles = useStyles();
  const { t } = useTranslation();

  const pillars = [
    { title: t("about.pillar1.title"), body: t("about.pillar1.body") },
    { title: t("about.pillar2.title"), body: t("about.pillar2.body") },
    { title: t("about.pillar3.title"), body: t("about.pillar3.body") },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="about-heading">
        <Title1 id="about-heading" className={styles.heroTitle}>
          <h2 style={{ margin: 0, fontWeight: "inherit", fontSize: "inherit" }}>
            {t("About AICOE")}
          </h2>
        </Title1>
        <Subtitle1 className={styles.heroSub}>
          {t("About description")}
        </Subtitle1>
      </section>

      {/* Mission */}
      <section className={styles.section} aria-labelledby="mission-heading">
        <Title2 id="mission-heading" className={styles.sectionHeader}>
          {t("about.mission.heading")}
        </Title2>
        <Body1 className={styles.body}>
          {t("about.mission.body")}
        </Body1>
      </section>

      {/* Pillars */}
      <section className={styles.section} aria-labelledby="pillars-heading">
        <Title2 id="pillars-heading" className={styles.sectionHeader}>
          {t("about.pillars.heading")}
        </Title2>
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.pillarCard}>
              <Subtitle1 className={styles.pillarTitle}>{p.title}</Subtitle1>
              <Body1 className={styles.pillarBody}>{p.body}</Body1>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.section} aria-labelledby="contact-heading">
        <Title2 id="contact-heading" className={styles.sectionHeader}>
          {t("Get in touch")}
        </Title2>
        <Body1 className={styles.body}>
          {t("about.contact.body")}
        </Body1>
      </section>
    </>
  );
}
