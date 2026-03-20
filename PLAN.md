# Project Plan

<!-- eva-primed-plan -->

## EVA Ecosystem Tools

- Data model: `GET <http://localhost:8010/model/projects/45-aicoe-page>`
- 29-foundry agents: C:\eva-foundry\eva-foundation\29-foundry\agents\
- 48-eva-veritas audit: run audit_repo MCP tool

---

<!-- veritas-normalized 2026-02-25 prefix=F45 source=PLAN.md -->

## Feature: EVA Team Structural Alignment [ID=F45-01]

### Story: Replace FluentProvider with GCThemeProvider [ID=F45-01-001]

### Story: Add AnnouncerProvider for WCAG aria-live [ID=F45-01-002]

### Story: Add HashRouter and React.StrictMode [ID=F45-01-003]

### Story: Wire @eva shared deps [ID=F45-01-004]

### Story: Remove @github/spark Vite plugin [ID=F45-01-005]

## Feature: Bilingual i18n Scaffold [ID=F45-02]

### Story: Add i18next with LanguageDetector [ID=F45-02-001]

### Story: Seed EN and FR locale files [ID=F45-02-002]

## Feature: Layout Shell [ID=F45-03]

### Story: Build Layout component with skip-link and nav [ID=F45-03-001]

### Story: Wire route-change announcer effect [ID=F45-03-002]

## Feature: Home Page [ID=F45-04]

### Story: Build HomePage with hero and tool cards [ID=F45-04-001]

## Feature: Content Pages [ID=F45-05]

### Story: Build AboutPage route-- COMPLETE 2026-02-24 [ID=F45-05-001]

- [ ] Create src/pages/about/AboutPage.tsx [ID=F45-05-001-T01]
- [ ] Add /about route to App.tsx Routes [ID=F45-05-001-T02]
- [ ] Add EN/FR locale keys [ID=F45-05-001-T03]

### Story: Build ProductsPage route-- COMPLETE 2026-02-24 [ID=F45-05-002]

- [ ] Create src/pages/products/ProductsPage.tsx with EVA product cards [ID=F45-05-002-T01]
- [ ] Add /products route to App.tsx Routes [ID=F45-05-002-T02]
- [ ] Add EN/FR locale keys [ID=F45-05-002-T03]

## Feature: CI and Test Coverage [ID=F45-06]

### Story: Add GitHub Actions build + lint CI-- COMPLETE 2026-02-24 [ID=F45-06-001]

- [ ] Create .github/workflows/ci.yml: node setup, npm ci --legacy-peer-deps, npm run build, npm run lint [ID=F45-06-001-T01]

### Story: Add Vitest and first component tests-- COMPLETE 2026-02-24 [ID=F45-06-002]

- [ ] Add vitest + @testing-library/react + @testing-library/dom to dev deps [ID=F45-06-002-T01]
- [ ] Add test for Layout renders skip-link (3 tests) [ID=F45-06-002-T02]
- [ ] Add test for HomePage renders hero heading (2 tests) [ID=F45-06-002-T03]
- [ ] All 5 tests pass, exit 0 [ID=F45-06-002-T04]

## Feature: UI Pages [ID=F45-UI]

### Story: Route about [ID=F45-UI-001]

### Story: Route products [ID=F45-UI-002]

### Story: ABOUTPAGE page [ID=F45-UI-003]

### Story: HOMEPAGE page [ID=F45-UI-004]

### Story: LAYOUT page [ID=F45-UI-005]

### Story: PRODUCTSPAGE page [ID=F45-UI-006]
