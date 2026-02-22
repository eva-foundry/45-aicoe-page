# Architecture (ASCII)

This document describes the current runtime and code architecture for the Spark Template web app.

## 1) System Context

```text
┌────────────────────────────────────────────────────────────────────┐
│                          End User Browser                         │
│                     (EN/FR bilingual interface)                   │
└───────────────────────────────┬────────────────────────────────────┘
                                │ HTTPS
                                ▼
┌────────────────────────────────────────────────────────────────────┐
│                    Vite-built Static React App                    │
│                 (served by dev server or static host)             │
└───────────────────────────────┬────────────────────────────────────┘
                                │
                                ▼
┌────────────────────────────────────────────────────────────────────┐
│                     React + Fluent UI Runtime                     │
│  - Routing (react-router-dom)                                     │
│  - Theming (FluentProvider + gcTheme)                             │
│  - i18n context (I18nProvider + translations)                     │
│  - EVA assistant widget                                           │
└───────────────────────────────┬────────────────────────────────────┘
                                │
                                ▼
┌────────────────────────────────────────────────────────────────────┐
│                    Persistence / Platform Layer                   │
│                   @github/spark hooks (KV storage)               │
└────────────────────────────────────────────────────────────────────┘
```

## 2) Runtime Composition

```text
main.tsx
  └─ ErrorBoundary (react-error-boundary)
      └─ App
          └─ FluentProvider (gcTheme)
              └─ I18nProvider
                  └─ BrowserRouter
                      ├─ FluentHeader
                      ├─ Route Outlet (lazy-loaded pages)
                      │   ├─ /                       -> HomePageFluent
                      │   ├─ /program-overview       -> ProgramOverviewPage
                      │   ├─ /how-it-works           -> HowItWorksPage
                      │   ├─ /services               -> ServicesPage
                      │   ├─ /intake-optimization    -> IntakeOptimizationPage
                      │   ├─ /use-case               -> UseCasePage
                      │   ├─ /roadmap                -> RoadmapPage
                      │   └─ /contact                -> ContactPage
                      ├─ FluentFooter
                      └─ EVAAskMeFluent
```

## 3) Source Layout and Migration State

```text
src/
├─ App.tsx                      # Provider tree + route definitions
├─ main.tsx                     # Entry point + ErrorBoundary
├─ i18n/
│  ├─ I18nContext.tsx           # Language state + translation selection
│  └─ translations.ts           # EN/FR content
├─ lib/
│  └─ fluent-theme.ts           # gcTheme + design tokens
├─ components/
│  ├─ fluent/                   # Target design system (active)
│  ├─ gc/                       # Legacy GC components (migration debt)
│  ├─ ui/                       # Legacy shadcn components (migration debt)
│  ├─ graphics/                 # SVG/illustration components
│  ├─ EVAAskMeFluent.tsx        # Active assistant widget
│  └─ EVAAskMe.tsx              # Legacy assistant widget
└─ pages/
   ├─ HomePageFluent.tsx        # Migrated page
   └─ *.tsx                     # Remaining pages still using legacy stack
```

## 4) Request and Rendering Flow

```text
User clicks route link
      │
      ▼
React Router resolves path
      │
      ▼
Lazy import() loads page chunk (if not cached)
      │
      ▼
Page renders using:
  - i18n text (I18nContext)
  - Fluent theme tokens (FluentProvider)
  - shared shell (header/footer/EVA)
      │
      ▼
Browser paints updated UI
```

## 5) Build and Deployment Flow

```text
npm run build
   │
   ├─ tsc -b --noCheck          # type-build pipeline
   └─ vite build                # bundling + chunking + assets
           │
           ▼
         dist/
           │
           ▼
Static hosting target
(GitHub Pages / Azure SWA / Netlify / Vercel / S3+CloudFront)
```

## 6) Architecture Notes

- The app currently runs in a hybrid state: Fluent shell + legacy page internals.
- Lazy-loaded routes are enabled in App.tsx to reduce initial bundle pressure.
- Current migration priority should be pages under src/pages still relying on gc/ui/Phosphor components.
- Architecture source of truth for runtime composition is App.tsx + main.tsx.
