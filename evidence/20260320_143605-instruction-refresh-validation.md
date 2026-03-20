# Instruction Refresh Validation

## Packet

- Date: 2026-03-20
- Scope: refresh authority surfaces for the public progress publication packet and revalidate the 45-aicoe-page delivery path
- D3PDCA posture: D1 Discover, P1 Plan, D2 Do, C1 Check, A1 Act completed for this bounded refresh pass

## D1 Discover

- Workspace authority at `C:\eva-foundry\.github\copilot-instructions.md` was already aligned to the approved March 20 paperless posture.
- Project 07 authority at `C:\eva-foundry\07-foundation-layer\.github\copilot-instructions.md` was already aligned to the same active cycle posture.
- Local project authority at `.github/copilot-instructions.md` in `45-aicoe-page` was still carrying placeholder project context and Phase 3-era guidance.
- The repo already contained the public progress implementation: `/progress`, `scripts/generate-progress-snapshot.mjs`, `.github/workflows/pages.yml`, and the checked-in snapshot data.

## P1 Plan

- Leave workspace and Project 07 instructions unchanged because no posture drift was detected.
- Refresh the `45-aicoe-page` local instruction file with actual commands, patterns, dependencies, and residual risks for the public progress surface.
- Re-run the repo-native validation sequence, including live snapshot generation against GitHub Projects.

## D2 Do

- Updated `.github/copilot-instructions.md` in `45-aicoe-page` with live Phase 4/public progress details.
- Normalized `PLAN.md` headings and URL formatting so the local governance docs remain parseable and closer to current markdown rules.
- Regenerated `src/data/progressSnapshot.ts` from the live five-board GitHub Projects surface.

## C1 Check

- `npm run generate:progress` PASS
- `npm run build` PASS
- `npm run lint` PASS
- `npm run test -- --run` PASS
- Current snapshot summary after regeneration:
  - boards: 5
  - items: 66
  - status: 30 in progress, 33 done, 3 todo
- Non-blocking validation note: the Vite build still emits the existing chunk-size warning for the main bundle.

## A1 Act

- Workspace root and Project 07 authority surfaces remain the active references for the current cycle without requiring edits in this pass.
- `45-aicoe-page` local authority is now aligned with the public progress publication behavior that already exists in the repo.
- The public progress packet remains ready for GitHub Pages publication, subject to the repository or organization continuing to provide the Azure OIDC secrets required by `.github/workflows/pages.yml`.
