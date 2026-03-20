# AICOE Public Page

<!-- eva-primed -->
<!-- foundation-primer: 2026-03-03 by agent:copilot -->

## EVA Ecosystem Integration

| Tool | Purpose | How to Use |
| ------ | --------- | ------------ |
| 37-data-model | Single source of truth for all project entities | `GET <http://localhost:8010/model/projects/45-aicoe-page>` |
| 29-foundry | Agentic capabilities (search, RAG, eval, observability) | `C:\eva-foundry\eva-foundation\29-foundry` |
| 48-eva-veritas | Trust score and coverage audit | `MCP tool: audit_repo / get_trust_score` |
| 07-foundation-layer | Copilot instructions primer + governance templates | `MCP tool: apply_primer / audit_project` |

**Agent rule**: Query the data model API before reading source files.

```powershell
Invoke-RestMethod "http://localhost:8010/model/agent-guide"   # complete protocol
Invoke-RestMethod "http://localhost:8010/model/agent-summary" # all layer counts
```

---

> **2026-03-20** -- Public progress route and GitHub Pages publication flow added. The site now exposes live EVA Foundry board progress as a read-only public status surface.

Public-facing Government of Canada AICOE landing page.
React 19 + Vite 7 + Fluent UI v9 + i18n EN/FR.

## EVA Ecosystem Position

```text
31-eva-faces (monorepo shell)
  admin-face         -- internal admin console
  chat-face          <-- 44-eva-jp-spark (bilingual GC AI assistant)
  portal-face        -- sprint board + home
  [future]           <-- 46-accelerator (workspace booking)

45-aicoe-page        <-- THIS REPO (public landing page, standalone SPA)
  /                  -- HomePage: hero + EVA tool cards
  /about             -- [Phase 3] About AICOE
  /products          -- [Phase 3] EVA-JP + EVA Accelerator product pages
  /progress          -- [Phase 4] Live EVA Foundry delivery progress from GitHub Projects

33-eva-brain-v2      -- API backend :8001 brain / :8002 roles
  (44 and 46 point here; 45 is public -- no Brain API calls)
```

## Current stack

| Layer | Library |
| --- | --- |
| Runtime | React 19 + TypeScript 5 strict |
| Build | Vite 7 + @vitejs/plugin-react-swc |
| UI | @fluentui/react-components ^9.61 + @fluentui/react-icons ^2 |
| Theme | FluentProvider + `webLightTheme` |
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

Generate live board data for the progress page:

```bash
$env:GH_PROJECTS_TOKEN = "<github-projects-pat>"
npm run generate:progress
```

## Public Progress Page

- Route: `/progress`
- Purpose: public, read-only delivery visibility for EVA Foundry work already synchronized into GitHub Projects v2
- Data source: the five EVA Foundry org boards
- Snapshot output: `src/data/progressSnapshot.ts`
- Refresh model: GitHub Pages workflow regenerates the snapshot on `push`, `workflow_dispatch`, and every 30 minutes

## GitHub Pages Deployment

The Pages workflow lives at `.github/workflows/pages.yml` and expects:

- `AZURE_CLIENT_ID`
- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`

During the workflow run, Azure OIDC is used to read `github-pat-projects` from Key Vault `msubsandkv202603031449`. That token is used only inside CI to query Project v2 GraphQL and regenerate the public snapshot before the site is published.

## Veritas (MTI)

```bash
node C:\eva-foundry\eva-foundation\48-eva-veritas\src\cli.js audit --repo .
# MTI=50  10/14 stories covered  4 gaps (Phase 3 work)
```

See `STATUS.md` and `evidence/20260320_113428-progress-page-github-pages.md` for the current publication packet and verification record. <!-- end -->
