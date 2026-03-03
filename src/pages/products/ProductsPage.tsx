// EVA-STORY: F45-05-002
import {
  Badge,
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
  heroSub: {
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
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  card: {
    height: "100%",
  },
  cardBody: {
    padding: `0 ${tokens.spacingHorizontalM} ${tokens.spacingVerticalM}`,
  },
  featureList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    marginTop: tokens.spacingVerticalS,
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
  },
  featureBullet: {
    color: tokens.colorBrandForeground1,
    marginTop: "2px",
    flexShrink: 0,
  },
  badgeRow: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
    flexWrap: "wrap",
    marginTop: tokens.spacingVerticalS,
  },
});

interface ProductCardProps {
  title: string;
  description: string;
  status: "active" | "poc";
  statusLabel: string;
  features: string[];
}

function ProductCard({ title, description, status, statusLabel, features }: ProductCardProps) {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <div style={{ display: "flex", alignItems: "center", gap: tokens.spacingHorizontalS }}>
            <Subtitle1>{title}</Subtitle1>
            <Badge
              appearance="filled"
              color={status === "active" ? "success" : "informative"}
              size="small"
            >
              {statusLabel}
            </Badge>
          </div>
        }
        description={<Body1>{description}</Body1>}
      />
      <div className={styles.cardBody}>
        <ul className={styles.featureList}>
          {features.map((f) => (
            <li key={f} className={styles.featureItem}>
              <span className={styles.featureBullet} aria-hidden="true">›</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export function ProductsPage() {
  const styles = useStyles();
  const { t } = useTranslation();

  const products: ProductCardProps[] = [
    {
      title: t("EVA-JP"),
      description: t("EVA-JP description"),
      status: "active",
      statusLabel: t("products.status.active"),
      features: [
        t("products.eva-jp.feature1"),
        t("products.eva-jp.feature2"),
        t("products.eva-jp.feature3"),
        t("products.eva-jp.feature4"),
      ],
    },
    {
      title: t("EVA Accelerator"),
      description: t("EVA Accelerator description"),
      status: "poc",
      statusLabel: t("products.status.poc"),
      features: [
        t("products.accelerator.feature1"),
        t("products.accelerator.feature2"),
        t("products.accelerator.feature3"),
        t("products.accelerator.feature4"),
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="products-heading">
        <Title1 id="products-heading" className={styles.heroTitle}>
          <h2 style={{ margin: 0, fontWeight: "inherit", fontSize: "inherit" }}>
            {t("Products")}
          </h2>
        </Title1>
        <Subtitle1 className={styles.heroSub}>
          {t("products.hero.sub")}
        </Subtitle1>
      </section>

      {/* Product grid */}
      <section className={styles.section} aria-labelledby="product-list-heading">
        <Title2 id="product-list-heading" className={styles.sectionHeader}>
          {t("products.section.heading")}
        </Title2>
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}
