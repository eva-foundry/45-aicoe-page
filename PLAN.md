# Migration Plan

## Goal
Migrate the application UI baseline to React + Fluent UI and remove legacy scaffold artifacts that no longer provide value.

## Scope completed
1. Audit repository structure and runtime usage.
2. Replace shadcn/radix UI runtime usage with Fluent UI components.
3. Remove unused UI scaffold directories and Tailwind/radix theme artifacts.
4. Trim dependencies to the minimum set required by the app baseline.
5. Document architecture, current status, and technology inventory.

## Next execution steps
1. Build out product-specific UI features on top of Fluent UI primitives.
2. Re-introduce additional dependencies only when tied to shipped features.
3. Add test coverage as business logic and components are introduced.
4. Establish CI checks (`build`, `lint`, and tests once available).
