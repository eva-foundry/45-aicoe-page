# Progress Page GitHub Pages Evidence

## Packet

- Date: 2026-03-20
- Scope: expose EVA Foundry GitHub Project boards as a public, read-only progress surface in 45-aicoe-page
- Source boards:
  - <https://github.com/orgs/eva-foundry/projects/1>
  - <https://github.com/orgs/eva-foundry/projects/2>
  - <https://github.com/orgs/eva-foundry/projects/3>
  - <https://github.com/orgs/eva-foundry/projects/4>
  - <https://github.com/orgs/eva-foundry/projects/5>

## Delivered

- Added `/progress` route to the public site.
- Added a build-time snapshot generator at `scripts/generate-progress-snapshot.mjs`.
- Generated a live snapshot into `src/data/progressSnapshot.ts` with 66 items across 5 boards.
- Added a GitHub Pages workflow that:
  - logs into Azure with OIDC
  - retrieves `github-pat-projects` from Key Vault `msubsandkv202603031449`
  - regenerates the board snapshot
  - builds the site and deploys to GitHub Pages
- Fixed the repo so it can build standalone in GitHub Actions by removing workspace-only file dependencies.
- Repaired CI workflow path assumptions so the standalone repo can validate on push and PR.

## Validation

- `npm run generate:progress`
  - PASS
  - Result: `Generated progress snapshot for 66 items across 5 boards.`
- `npm run build`
  - PASS
- `npm run lint`
  - PASS
- `npm run test -- --run`
  - PASS
  - Result: 7 tests passed

## Notes

- The public page is read-only by design. It does not update GitHub Projects.
- Refresh cadence is driven by `.github/workflows/pages.yml` on push, manual dispatch, and every 30 minutes.
- Vite uses `base: "./"` so the build works on repository-scoped GitHub Pages.

## Residual Risk

- Current production bundle emits a Vite chunk-size warning (`544.75 kB` main bundle) but the build completes successfully.
- GitHub Pages deployment still depends on repo/org secrets `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, and `AZURE_SUBSCRIPTION_ID` being available to this repository.
