// EVA-STORY: F45-04-001
import {
  Body1,
  Card,
  CardHeader,
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
  heroSubtitle: {
    display: "block",
    color: tokens.colorNeutralForeground2,
  },
  section: {
    marginBottom: tokens.spacingVerticalXXL,
  },
  sectionHeader: {
    display: "block",
    marginBottom: tokens.spacingVerticalL,
    color: tokens.colorNeutralForeground1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  card: {
    height: "100%",
  },
});

export function HomePage() {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <Title1 id="hero-heading" className={styles.heroTitle}>
          <h2 style={{ margin: 0, fontWeight: "inherit", fontSize: "inherit" }}>
            {t("Welcome to AICOE")}
          </h2>
        </Title1>
        <Subtitle1 className={styles.heroSubtitle}>
          {t("Empowering the Government of Canada with responsible AI.")}
        </Subtitle1>
      </section>

      {/* Tools */}
      <section className={styles.section} aria-labelledby="tools-heading">
        <Title2 id="tools-heading" className={styles.sectionHeader}>
          {t("Our Tools")}
        </Title2>
        <div className={styles.grid}>
          <Card className={styles.card}>
            <CardHeader
              header={<Subtitle1>{t("EVA-JP")}</Subtitle1>}
              description={<Body1>{t("EVA-JP description")}</Body1>}
            />
          </Card>
          <Card className={styles.card}>
            <CardHeader
              header={<Subtitle1>{t("EVA Accelerator")}</Subtitle1>}
              description={<Body1>{t("EVA Accelerator description")}</Body1>}
            />
          </Card>
        </div>
      </section>

      {/* About */}
      <section className={styles.section} aria-labelledby="about-heading">
        <Title2 id="about-heading" className={styles.sectionHeader}>
          {t("About AICOE")}
        </Title2>
        <Body1>{t("About description")}</Body1>
      </section>
    </>
  );
}
