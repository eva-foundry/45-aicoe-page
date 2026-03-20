# Status

## Date

2026-03-20 15:42 UTC

## Summary

Phase 4 progress-publication packet complete. 45-aicoe-page now exposes EVA Foundry delivery progress at `/progress` and includes a GitHub Pages workflow that regenerates a read-only Project v2 snapshot before publish.

## Completed (Phase 4 -- 2026-03-20)

- Added `ProgressPage` and `/progress` route with board overview, active work, and recently finished work sections.
- Added `scripts/generate-progress-snapshot.mjs` to query the five EVA Foundry Project v2 boards and emit `src/data/progressSnapshot.ts`.
- Generated a live snapshot with 66 items across 5 boards.
- Added `.github/workflows/pages.yml` to publish the site to GitHub Pages on push, manual dispatch, and every 30 minutes.
- Removed workspace-only file dependencies so the repo builds as a standalone GitHub repository in Actions.
- Corrected `.github/workflows/ci.yml` so push and PR validation run from the actual repo root.
- Added progress-page tests and expanded navigation coverage.

## Validation

- `npm run generate:progress` exits 0.
- `npm run build` exits 0.
- `npm run lint` exits 0.
- `npm run test -- --run` exits 0. 7 tests passed.
- GitHub repo `eva-foundry/45-aicoe-page` now exposes `Publish Progress Page` on the remote default branch after landing commit `cc97d2f`.
- CI run `23350226409` completed successfully on GitHub.
- GitHub Pages publish run `23350334823` completed successfully on `workflow_dispatch` after Pages enablement.
- Public Pages URL `https://eva-foundry.github.io/45-aicoe-page/` returns HTTP `200`.
- msub wiring validated: managed identity `msub-kernel-engine-identity` now has federated credential `github-45-aicoe-page-main`, repo secrets `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, and `AZURE_SUBSCRIPTION_ID` are configured, and Key Vault `msubsandkv202603031449` provided `github-pat-projects` during the publish workflow.

## Residual Risks

- The production Vite bundle still emits a chunk-size warning around the main JS bundle; this is non-blocking for publish.
- GitHub Pages depends on the `msub-kernel-engine-identity` federated credential and the three repo-level Azure secrets remaining intact.

## Next Tasks

- If needed, split the progress route into lazy-loaded chunks to remove the current bundle-size warning.
- If needed, add a second public slice focused only on portfolio KPIs for executive reporting.

## Historical Baseline (2026-02-24)

Phase 2 (EVA team alignment) complete. 45-aicoe-page is now structurally on par with 44-eva-jp-spark. Build clean. Veritas MTI=50. Data model updated (rv=3).

## Completed (Phase 1 ? 2026-02-22)

- Switched app rendering and fallback UI to Fluent components.
- Removed shadcn/radix component scaffold and related helper folders.
- Removed Tailwind/theme scaffold files.
- Reduced top-level dependencies to currently used runtime packages.

## Completed (Phase 2 ? 2026-02-24)

- Replaced bare `FluentProvider + webLightTheme` with `GCThemeProvider` from `@eva/gc-design-system`.
- Added `AnnouncerProvider` (visually-hidden `role=status` aria-live region) for WCAG compliance.
- Added `HashRouter` + `React.StrictMode` wrapping.
- Added i18n scaffold: EN/FR locales via i18next + LanguageDetector (same pattern as 44-eva-jp-spark).
- Added `Layout` shell: skip-link, header with brand + nav links + language toggle, main content area, footer.
- Added `HomePage`: hero section + EVA tool product cards (EVA-JP, EVA Accelerator).
- Wired `@eva/gc-design-system` and `@eva/ui` as file: deps pointing to 31-eva-faces shared packages.
- Removed `@github/spark` Vite plugin; `vite.config.ts` cleaned.
- Build exits 0: `tsc --noEmit` zero errors + Vite 2120 modules transformed.
- `.npmrc` set with `install-links=true` + `legacy-peer-deps=true`.

## Historical Validation

- `npm run build` exits 0, zero TS errors, zero Vite errors.

## Completed (Phase 3 -- 2026-02-24)

- Built `AboutPage` (`/about`): hero, mission, three pillars (Responsible AI / Bilingual by Design / Accessible), contact section.
- Built `ProductsPage` (`/products`): product cards for EVA-JP (active) and EVA Accelerator (poc) with feature lists.
- Added EN/FR locale keys for both pages to `resources_en.json` and `resources_fr.json`.
- Wired `/about` and `/products` routes in `App.tsx`.
- Added GitHub Actions CI workflow: `.github/workflows/ci.yml` (build + lint + test on push/PR).
- Added Vitest 3.2.4 + `@testing-library/react` + `@testing-library/dom` test harness.
- 5 component tests passing: 3 Layout, 2 HomePage -- exit 0, zero errors.
- `npm run build` + `npm run lint` + `npm run test -- --run` all exit 0.

## Historical Next Tasks

- Add auth posture decision (public-only vs. light authenticated).
- Expand test coverage to `AboutPage` and `ProductsPage`.

---

## 2026-03-03 -- Re-primed by agent:copilot

<!-- eva-primed-status -->

Data model: `GET <http://localhost:8010/model/projects/45-aicoe-page>`
29-foundry agents: C:\eva-foundry\eva-foundation\29-foundry\agents\
48-eva-veritas: run audit_repo MCP tool
