# AICOE Public Page

<!-- eva-primed -->
<!-- foundation-primer: 2026-03-03 by agent:copilot -->

## EVA Ecosystem Integration

| Tool | Purpose | How to Use |
|------|---------|------------|
| 37-data-model | Single source of truth for all project entities | GET http://localhost:8010/model/projects/45-aicoe-page |
| 29-foundry | Agentic capabilities (search, RAG, eval, observability) | C:\eva-foundry\eva-foundation\29-foundry |
| 48-eva-veritas | Trust score and coverage audit | MCP tool: audit_repo / get_trust_score |
| 07-foundation-layer | Copilot instructions primer + governance templates | MCP tool: apply_primer / audit_project |

**Agent rule**: Query the data model API before reading source files.
```powershell
Invoke-RestMethod "http://localhost:8010/model/agent-guide"   # complete protocol
Invoke-RestMethod "http://localhost:8010/model/agent-summary" # all layer counts
```

---


> **2026-02-24 22:38 ET** -- Phase 2 (EVA team alignment) complete. Phase 3 active.

Public-facing Government of Canada AICOE landing page.
React 19 + Vite 7 + Fluent UI v9 + GC Design System + i18n EN/FR.

## EVA Ecosystem Position

```
31-eva-faces (monorepo shell)
  admin-face         -- internal admin console
  chat-face          <-- 44-eva-jp-spark (bilingual GC AI assistant)
  portal-face        -- sprint board + home
  [future]           <-- 46-accelerator (workspace booking)

45-aicoe-page        <-- THIS REPO (public landing page, standalone SPA)
  /                  -- HomePage: hero + EVA tool cards
  /about             -- [Phase 3] About AICOE
  /products          -- [Phase 3] EVA-JP + EVA Accelerator product pages

33-eva-brain-v2      -- API backend :8001 brain / :8002 roles
  (44 and 46 point here; 45 is public -- no Brain API calls)
```

## Current stack

| Layer | Library |
|---|---|
| Runtime | React 19 + TypeScript 5 strict |
| Build | Vite 7 + @vitejs/plugin-react-swc |
| UI | @fluentui/react-components ^9.61 + @fluentui/react-icons ^2 |
| Theme | @eva/gc-design-system (GCThemeProvider -- GC design tokens) |
| Components | @eva/ui (EvaXxx wrappers from 31-eva-faces shared) |
| Routing | react-router-dom ^6 (HashRouter) |
| i18n | i18next ^25 + browser-languagedetector + react-i18next ^16 |
| a11y | AnnouncerProvider (aria-live polite), skip-link, WCAG 2.1 AA target |

## Project documents

- Plan: [PLAN.md](PLAN.md)
- Status: [STATUS.md](STATUS.md)
- Architecture + diagrams: [ARCHITECTURE.md](ARCHITECTURE.md)
- Tech inventory: [TECH-STATUS.md](TECH-STATUS.md)

## Development

```bash
npm install --legacy-peer-deps
npm run dev
```

Build + lint:

```bash
npm run build    # tsc --noEmit + vite build
npm run lint
```

## Veritas (MTI)

```bash
node C:\eva-foundry\eva-foundation\48-eva-veritas\src\cli.js audit --repo .
# MTI=50  10/14 stories covered  4 gaps (Phase 3 work)
```

