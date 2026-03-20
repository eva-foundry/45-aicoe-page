// EVA-STORY: F45-03-001 F45-03-002
import { makeStyles, tokens } from "@fluentui/react-components";
import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAnnouncer } from "../../hooks/useAnnouncer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  skipLink: {
    position: "absolute",
    top: tokens.spacingVerticalS,
    left: tokens.spacingHorizontalS,
    transform: "translateY(-200%)",
    zIndex: 9999,
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    textDecoration: "none",
    "&:focus": {
      transform: "translateY(0)",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  brand: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase500,
    color: tokens.colorBrandForeground1,
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
  },
  navLink: {
    color: tokens.colorNeutralForeground1,
    textDecoration: "none",
    fontSize: tokens.fontSizeBase300,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  langToggle: {
    cursor: "pointer",
    background: "none",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    color: tokens.colorNeutralForeground1,
    fontSize: tokens.fontSizeBase300,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  main: {
    flex: 1,
    padding: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
  },
  footer: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXL}`,
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    textAlign: "center",
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  shell: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

export function Layout() {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const announce = useAnnouncer();
  const location = useLocation();

  const toggleLang = () => {
    const next = i18n.language.startsWith("fr") ? "en" : "fr";
    i18n.changeLanguage(next);
    announce(t(next === "fr" ? "Switch interface language to French" : "Switch interface language to English"));
  };

  useEffect(() => {
    announce(document.title);
    const h2 = document.querySelector<HTMLElement>("#mainContent h2");
    if (h2) setTimeout(() => h2.focus(), 150);
  }, [location.pathname, announce]);

  return (
    <div className={styles.shell}>
      <a href="#mainContent" className={styles.skipLink}>
        {t("Skip to main content")}
      </a>

      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          {t("AI Centre of Excellence")}
        </NavLink>

        <nav aria-label={t("Primary navigation")} className={styles.nav}>
          <NavLink to="/" className={styles.navLink}>{t("Home")}</NavLink>
          <NavLink to="/about" className={styles.navLink}>{t("About")}</NavLink>
          <NavLink to="/products" className={styles.navLink}>{t("Products")}</NavLink>
          <NavLink to="/progress" className={styles.navLink}>{t("Progress")}</NavLink>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={t(i18n.language.startsWith("fr")
              ? "Switch interface language to English"
              : "Switch interface language to French"
            )}
          >
            {i18n.language.startsWith("fr") ? "EN" : "FR"}
          </button>
        </nav>
      </header>

      <main id="mainContent" className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        {t("Footer note")}
      </footer>
    </div>
  );
}
