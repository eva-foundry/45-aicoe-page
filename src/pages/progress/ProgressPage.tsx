import {
  Badge,
  Body1,
  Caption1,
  Card,
  CardHeader,
  Link,
  ProgressBar,
  Subtitle1,
  Title1,
  Title2,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { progressSnapshot } from "../../data/progressSnapshot";
import type { ProgressBoard, ProgressItem } from "../../data/progressTypes";

const useStyles = makeStyles({
  hero: {
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXL}`,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundImage: `linear-gradient(135deg, ${tokens.colorBrandBackground2} 0%, ${tokens.colorNeutralBackground2} 100%)`,
    marginBottom: tokens.spacingVerticalXXL,
  },
  heroTitle: {
    display: "block",
    marginBottom: tokens.spacingVerticalM,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  heroSub: {
    display: "block",
    maxWidth: "56rem",
    color: tokens.colorNeutralForegroundOnBrand,
    opacity: 0.92,
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: tokens.spacingHorizontalL,
    marginTop: tokens.spacingVerticalXL,
  },
  sourceNote: {
    display: "block",
    marginTop: tokens.spacingVerticalM,
    color: tokens.colorNeutralForegroundOnBrand,
    opacity: 0.9,
  },
  statCard: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  statValue: {
    display: "block",
    marginTop: tokens.spacingVerticalXS,
    fontSize: tokens.fontSizeHero800,
    lineHeight: tokens.lineHeightHero800,
    color: tokens.colorBrandForeground1,
  },
  section: {
    marginBottom: tokens.spacingVerticalXXL,
  },
  sectionHeader: {
    display: "block",
    marginBottom: tokens.spacingVerticalL,
  },
  boardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  boardMeta: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: tokens.spacingHorizontalM,
    marginTop: tokens.spacingVerticalM,
  },
  boardRecent: {
    marginTop: tokens.spacingVerticalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  boardRecentTitle: {
    display: "block",
    color: tokens.colorNeutralForeground3,
  },
  boardRecentItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    alignItems: "start",
  },
  boardRecentItemTitle: {
    minWidth: 0,
  },
  boardRecentItemMeta: {
    flexShrink: 0,
  },
  boardMetaLabel: {
    display: "block",
    color: tokens.colorNeutralForeground3,
  },
  boardMetaValue: {
    display: "block",
    marginTop: tokens.spacingVerticalXXS,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  badgeRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXS,
    marginTop: tokens.spacingVerticalM,
  },
  boardFooter: {
    marginTop: tokens.spacingVerticalL,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  itemMeta: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    marginTop: tokens.spacingVerticalM,
  },
  itemMetaLine: {
    display: "flex",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
  metaLabel: {
    color: tokens.colorNeutralForeground3,
  },
  emptyState: {
    padding: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
    border: `1px dashed ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralBackground2,
  },
});

function getCount(source: Record<string, number>, key: string) {
  return source[key] ?? 0;
}

function getPriorityWeight(priority: string | null) {
  switch (priority) {
    case "High":
      return 3;
    case "Medium":
      return 2;
    case "Low":
      return 1;
    default:
      return 0;
  }
}

function sortItems(items: ProgressItem[]) {
  return [...items].sort((left, right) => {
    const updatedDelta = Date.parse(right.updatedAt) - Date.parse(left.updatedAt);
    if (updatedDelta !== 0) {
      return updatedDelta;
    }

    return getPriorityWeight(right.priority) - getPriorityWeight(left.priority);
  });
}

function getBadgeAppearance(status: string) {
  switch (status) {
    case "Done":
      return "success" as const;
    case "In Progress":
      return "warning" as const;
    default:
      return "informative" as const;
  }
}

function getPriorityAppearance(priority: string | null) {
  switch (priority) {
    case "High":
      return "danger" as const;
    case "Medium":
      return "warning" as const;
    case "Low":
      return "informative" as const;
    default:
      return "subtle" as const;
  }
}

function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

function hasOpenWork(board: ProgressBoard) {
  return Object.entries(board.statusCounts).some(([status, count]) => status !== "Done" && count > 0);
}

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function BoardCard({ board, locale, t }: { board: ProgressBoard; locale: string; t: (key: string) => string }) {
  const styles = useStyles();
  const doneCount = getCount(board.statusCounts, "Done");
  const inProgressCount = getCount(board.statusCounts, "In Progress");
  const todoCount = getCount(board.statusCounts, "Todo");
  const completion = board.itemCount === 0 ? 0 : doneCount / board.itemCount;
  const recentItems = board.items.slice(0, 3);

  return (
    <Card>
      <CardHeader
        header={<Subtitle1>{board.title}</Subtitle1>}
        description={<Body1>{board.summary}</Body1>}
      />
      <div className={styles.boardMeta}>
        <div>
          <Caption1 className={styles.boardMetaLabel}>{t("progress.board.items")}</Caption1>
          <Body1 className={styles.boardMetaValue}>{board.itemCount}</Body1>
        </div>
        <div>
          <Caption1 className={styles.boardMetaLabel}>{t("progress.board.inProgress")}</Caption1>
          <Body1 className={styles.boardMetaValue}>{inProgressCount}</Body1>
        </div>
        <div>
          <Caption1 className={styles.boardMetaLabel}>{t("progress.board.updated")}</Caption1>
          <Body1 className={styles.boardMetaValue}>{formatDate(board.items[0]?.updatedAt ?? progressSnapshot.generatedAt, locale)}</Body1>
        </div>
      </div>

      {recentItems.length > 0 ? (
        <div className={styles.boardRecent}>
          <Caption1 className={styles.boardRecentTitle}>{t("progress.board.recent")}</Caption1>
          {recentItems.map((item) => (
            <div key={item.id} className={styles.boardRecentItem}>
              <Body1 className={styles.boardRecentItemTitle}>{item.title}</Body1>
              <Badge className={styles.boardRecentItemMeta} appearance="outline" color={getBadgeAppearance(item.status)}>
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      ) : null}

      <div className={styles.badgeRow}>
        <Badge appearance="filled" color="success">{`Done ${doneCount}`}</Badge>
        <Badge appearance="filled" color="warning">{`In Progress ${inProgressCount}`}</Badge>
        <Badge appearance="filled" color="informative">{`Todo ${todoCount}`}</Badge>
      </div>

      <div className={styles.boardFooter}>
        <div style={{ flex: 1 }}>
          <Caption1 className={styles.boardMetaLabel}>{t("progress.board.complete")}</Caption1>
          <ProgressBar value={completion} thickness="medium" />
        </div>
        <Link href={board.url} target="_blank" rel="noreferrer">
          {t("progress.board.open")}
        </Link>
      </div>
    </Card>
  );
}

function ItemCard({ item, locale, t }: { item: ProgressItem; locale: string; t: (key: string) => string }) {
  const styles = useStyles();

  return (
    <Card>
      <CardHeader
        header={<Subtitle1>{item.title}</Subtitle1>}
        description={<Body1>{item.boardTitle}</Body1>}
      />
      <div className={styles.badgeRow}>
        <Badge appearance="filled" color={getBadgeAppearance(item.status)}>{item.status}</Badge>
        {item.priority ? (
          <Badge appearance="filled" color={getPriorityAppearance(item.priority)}>{item.priority}</Badge>
        ) : null}
        {item.sprint ? <Badge appearance="outline">{item.sprint}</Badge> : null}
      </div>
      <div className={styles.itemMeta}>
        <div className={styles.itemMetaLine}>
          <Caption1 className={styles.metaLabel}>{t("progress.item.repo")}</Caption1>
          {item.repositoryUrl && item.repository ? (
            <Link href={item.repositoryUrl} target="_blank" rel="noreferrer">{item.repository}</Link>
          ) : (
            <Body1>{item.repository ?? "-"}</Body1>
          )}
        </div>
        <div className={styles.itemMetaLine}>
          <Caption1 className={styles.metaLabel}>{t("progress.item.updated")}</Caption1>
          <Body1>{formatDate(item.updatedAt, locale)}</Body1>
        </div>
      </div>
      <div className={styles.boardFooter}>
        <Body1>{item.boardTitle}</Body1>
        <Link href={item.itemUrl ?? item.boardUrl} target="_blank" rel="noreferrer">
          {t("progress.item.open")}
        </Link>
      </div>
    </Card>
  );
}

export function ProgressPage() {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith("fr") ? "fr-CA" : "en-CA";
  const boardCount = progressSnapshot.summary.boardCount;
  const itemCount = progressSnapshot.summary.itemCount;
  const doneCount = progressSnapshot.summary.statusCounts.Done ?? 0;
  const inProgressCount = progressSnapshot.summary.statusCounts["In Progress"] ?? 0;
  const todoCount = progressSnapshot.summary.statusCounts.Todo ?? 0;
  const highPriorityCount = progressSnapshot.summary.priorityCounts.High ?? 0;
  const activeBoardCount = progressSnapshot.boards.filter(hasOpenWork).length;
  const completionRate = itemCount === 0 ? 0 : doneCount / itemCount;
  const activeRate = itemCount === 0 ? 0 : inProgressCount / itemCount;
  const backlogRate = itemCount === 0 ? 0 : todoCount / itemCount;
  const highPriorityRate = itemCount === 0 ? 0 : highPriorityCount / itemCount;
  const activeItems = sortItems(
    progressSnapshot.boards.flatMap((board) =>
      board.items.filter((item) => item.status !== "Done")
    )
  ).slice(0, 12);
  const completedItems = sortItems(
    progressSnapshot.boards.flatMap((board) =>
      board.items.filter((item) => item.status === "Done")
    )
  ).slice(0, 8);

  return (
    <>
      <section className={styles.hero} aria-labelledby="progress-heading">
        <Title1 id="progress-heading" className={styles.heroTitle}>
          <h2 style={{ margin: 0, fontWeight: "inherit", fontSize: "inherit" }}>
            {t("Progress")}
          </h2>
        </Title1>
        <Body1 className={styles.heroSub}>{t("progress.hero.sub")}</Body1>
        <Caption1 className={styles.sourceNote}>
          {t("progress.source.live")}
        </Caption1>
        <div className={styles.statGrid}>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.stat.boards")}</Caption1>}
              description={<span className={styles.statValue}>{boardCount}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.stat.items")}</Caption1>}
              description={<span className={styles.statValue}>{itemCount}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.stat.inProgress")}</Caption1>}
              description={<span className={styles.statValue}>{inProgressCount}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.stat.lastSync")}</Caption1>}
              description={<span className={styles.statValue}>{formatDate(progressSnapshot.generatedAt, locale)}</span>}
            />
          </Card>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="metrics-heading">
        <Title2 id="metrics-heading" className={styles.sectionHeader}>{t("progress.section.metrics")}</Title2>
        <div className={styles.statGrid}>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.metric.completion")}</Caption1>}
              description={<span className={styles.statValue}>{formatPercent(completionRate)}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.metric.boardsActive")}</Caption1>}
              description={<span className={styles.statValue}>{`${activeBoardCount}/${boardCount}`}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.metric.highPriority")}</Caption1>}
              description={<span className={styles.statValue}>{formatPercent(highPriorityRate)}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.metric.backlog")}</Caption1>}
              description={<span className={styles.statValue}>{formatPercent(backlogRate)}</span>}
            />
          </Card>
          <Card className={styles.statCard}>
            <CardHeader
              header={<Caption1>{t("progress.metric.inProgressShare")}</Caption1>}
              description={<span className={styles.statValue}>{formatPercent(activeRate)}</span>}
            />
          </Card>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="boards-heading">
        <Title2 id="boards-heading" className={styles.sectionHeader}>{t("progress.section.boards")}</Title2>
        <div className={styles.boardGrid}>
          {progressSnapshot.boards.map((board) => (
            <BoardCard key={board.number} board={board} locale={locale} t={t} />
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="active-heading">
        <Title2 id="active-heading" className={styles.sectionHeader}>{t("progress.section.active")}</Title2>
        {activeItems.length > 0 ? (
          <div className={styles.itemGrid}>
            {activeItems.map((item) => (
              <ItemCard key={item.id} item={item} locale={locale} t={t} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Body1>{t("progress.empty")}</Body1>
          </div>
        )}
      </section>

      <section className={styles.section} aria-labelledby="done-heading">
        <Title2 id="done-heading" className={styles.sectionHeader}>{t("progress.section.done")}</Title2>
        {completedItems.length > 0 ? (
          <div className={styles.itemGrid}>
            {completedItems.map((item) => (
              <ItemCard key={item.id} item={item} locale={locale} t={t} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Body1>{t("progress.empty")}</Body1>
          </div>
        )}
      </section>
    </>
  );
}