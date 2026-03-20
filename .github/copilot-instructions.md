<!-- eva-primed-copilot -->

# GitHub Copilot Instructions -- AICOE Public Page

**Template Version**: 7.0.0 (Session 71 - project authority contract)  
**Last Updated**: 2026-03-20T15:10:00Z  
**Project**: AICOE Public Page  
**Path**: C:\eva-foundry\45-aicoe-page\

---

## Bootstrap First

Before using this file, complete the workspace bootstrap from `C:\eva-foundry\.github\copilot-instructions.md`.

Minimum bootstrap proof:

```powershell
$session.guide.layers_available.Count
$session.userGuide.categories.Count
```

If `$session` is undefined or either call fails, stop and bootstrap first.

---

## Project Role

This file is the **project-level operating contract** for `45-aicoe-page`.

Use it to capture:
- what this project is for
- what local patterns or constraints matter here
- how local docs should be interpreted after workspace bootstrap

Do not use it to restate the full workspace policy set. Workspace-wide authority stays in `C:\eva-foundry\.github\copilot-instructions.md`.

---

## Read Order

After bootstrap, read local material in this order:

1. `README.md` for purpose, setup, and local architecture
2. `PLAN.md` for current scope and intended work
3. `STATUS.md` for latest verified state and recent decisions
4. `ACCEPTANCE.md` for quality gates and done criteria

If local docs conflict with API-governed truth, treat the Data Model API as authoritative for governance state and treat local files as working context that must be reconciled.

---

## Core Rules

1. Confirm live API access before governance or synchronization work.
2. Discover actual build, test, lint, and run commands from repo files instead of assuming defaults.
3. Preserve existing project patterns unless the task explicitly requires changing them.
4. Keep edits scoped and evidence-backed.
5. Store execution evidence in `evidence/` and operational logs in `logs/` when automation or validation is part of the work.
6. Use Project 48 veritas tooling for governed quality checks when the task materially affects delivery quality.
7. Inherit context-governance policy from the workspace instructions; do not restate fixed token thresholds locally.

---

## Data Model Use

Start with the domain views and project record before drilling into specific layers:

```powershell
Invoke-RestMethod "$($session.base)/model/domain-views"
Invoke-RestMethod "$($session.base)/model/projects/45-aicoe-page"
```

Use `$session.userGuide.category_instructions` for session, sprint, evidence, governance, observability, and ontology runbooks. Do not hardcode layer counts or static workflow assumptions.

---

## Traceability

When this project uses veritas story linking, tag implementation files with the applicable story and feature identifiers:

```python
# EVA-STORY: F045-01-001
# EVA-FEATURE: F045-01
```

```javascript
// EVA-STORY: F045-01-001
// EVA-FEATURE: F045-01
```

Use timestamped evidence names when saving outputs tied to a story or verification step.

---

## Project-Owned Context

This section is intended to be edited by the project team and preserved by foundation reseed operations.

Document only the project-specific facts that do not belong in workspace instructions:
- domain purpose
- important dependencies
- real build and test commands
- local architectural constraints
- known exceptions or delivery hazards

Replace the placeholders below during project customization.

**Status**: active  
**Current Phase**: Phase 4 -- Public Progress Publication -- COMPLETE  
**Dependencies**: GitHub Project v2 board data, GitHub Pages workflow, Azure OIDC access for Key Vault secret retrieval in CI, and the data model governance surfaces referenced in README.md, PLAN.md, STATUS.md, and project_work records.  
**Primary Stack**: React 19, TypeScript 5, Vite 7, Fluent UI v9, React Router, i18next, Vitest

### Local Commands

List the real commands used in this project:
- build: `npm run build`
- build-pages: `npm run build:pages`
- generate-progress: `npm run generate:progress`
- test: `npm run test -- --run`
- lint: `npm run lint`
- typecheck: `npm run typecheck`
- run: `npm run dev`

### Local Patterns

- The site is a public, read-only SPA that uses `HashRouter` and pre-generated TypeScript snapshot data instead of live client-side GitHub API calls.
- The progress route is generated at build time from the five `eva-foundry` GitHub Project v2 boards via `scripts/generate-progress-snapshot.mjs`, which writes `src/data/progressSnapshot.ts`.
- GitHub Pages publication is handled by `.github/workflows/pages.yml`; CI retrieves `github-pat-projects` from Key Vault `msubsandkv202603031449` using Azure OIDC so the token is not stored directly in the repository.

### Local Risks Or Exceptions

- Progress snapshot generation requires `GH_PROJECTS_TOKEN` or `GH_TOKEN`; without one of those, `npm run generate:progress` fails by design.
- GitHub Pages publication depends on `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, and `AZURE_SUBSCRIPTION_ID` being available to the repository or organization and authorized to read Key Vault secrets.
- The current production bundle emits a non-blocking Vite chunk-size warning; treat it as a hardening follow-up, not a publish blocker.

---

## Validation Pattern

Before commit or handoff:
- run the repo-native validation commands that exist
- run `npm run generate:progress` when a Projects-capable token is available and the packet touches the public progress surface
- verify changed behavior with the smallest relevant check
- update `STATUS.md` if the task changed delivery state, scope, or risk
- save evidence if validation or automation was part of the work

---

## Context Governance

Context-governance policy is owned by the workspace instructions.

- Use the workspace utilization bands and checkpoint guidance.
- Add project-specific recovery or closure rules only if this repo materially increases continuity risk.
- Do not hardcode model-window assumptions or fixed token ceilings in project instructions.

---

## References

- Workspace authority: C:\eva-foundry\.github\copilot-instructions.md
- Data model guide: C:\eva-foundry\37-data-model\USER-GUIDE.md
- Category runbooks: C:\eva-foundry\37-data-model\docs\CATEGORY-RUNBOOK-EXAMPLES.md
- Local governance: README.md -> PLAN.md -> STATUS.md -> ACCEPTANCE.md
