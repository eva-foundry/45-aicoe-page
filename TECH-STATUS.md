# Tech Status

> **Updated**: 2026-02-24 22:38 ET

## Active stack (Phase 2)

| Library | Version | Role |
|---|---|---|
| React | 19 | UI runtime |
| TypeScript | 5 strict | Language |
| Vite | 7 | Build + dev server |
| @vitejs/plugin-react-swc | ^4.2 | SWC transform |
| @fluentui/react-components | ^9.61 | UI primitives + tokens |
| @fluentui/react-icons | ^2.0 | Icon set |
| @eva/gc-design-system | file: (31-eva-faces) | GCThemeProvider + GC tokens |
| @eva/ui | file: (31-eva-faces) | EvaXxx component wrappers |
| react-router-dom | ^6.26 | HashRouter + Routes |
| i18next | ^25 | i18n engine |
| i18next-browser-languagedetector | ^8 | Locale detection |
| react-i18next | ^16 | React bindings |
| react-error-boundary | ^6 | Runtime error UI |

## Removed

| Package | Reason |
|---|---|
| @github/spark | Spark plugin + runtime removed Phase 2 -- not needed for GC product |
| shadcn UI scaffold | Phase 1 -- no app code consumed it |
| Radix component set | Phase 1 -- removed with shadcn |
| Tailwind | Phase 1 -- replaced by Fluent tokens |
| webLightTheme / FluentProvider | Phase 2 -- replaced by GCThemeProvider |

## Dependency install notes

```bash
# Windows: file: deps require install-links mode (no symlinks)
npm install --legacy-peer-deps
# .npmrc already sets: install-links=true, legacy-peer-deps=true
```

## Build status

| Check | Result |
|---|---|
| `tsc --noEmit` | PASS -- zero errors |
| `vite build` | PASS -- 2120 modules, 488 KB bundle |
| `npm run lint` | PASS |
| Veritas MTI | 50 -- 10/14 stories covered |

## Shared package build requirements

Before installing in this repo, ensure shared packages are built:
```bash
# gc-design-system
cd ../31-eva-faces/shared/gc-design-system && npm run build
# eva-ui
cd ../31-eva-faces/shared/eva-ui && npx tsup
```

