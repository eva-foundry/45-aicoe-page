# Tech Status

## Active stack
- React 19
- Fluent UI v9 (`@fluentui/react-components`)
- Vite 7 + SWC React plugin
- TypeScript 5
- Spark runtime/plugin (`@github/spark`)
- `react-error-boundary`

## Removed from active runtime
- shadcn UI scaffold (`src/components/ui`)
- Radix component dependency set
- Tailwind runtime + theme scaffold artifacts
- Utility/helper files only consumed by removed scaffold

## Dependency posture
- Current dependencies are intentionally minimal and runtime-focused.
- Legacy packages were removed because no app code imported them.
- `node_modules` should be regenerated after dependency changes to ensure lockfile consistency.

## Operational status
- Codebase is now positioned as a clean Fluent baseline for feature implementation.
- Build validation completed successfully after reinstall.
