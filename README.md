# Spark Template (React + Fluent UI)

This repository has been refactored from the default shadcn/radix + Tailwind scaffold to a React + Fluent UI baseline.

## Current app

- Runtime: React 19 + Vite 7
- UI framework: Fluent UI (`@fluentui/react-components`)
- Error handling: `react-error-boundary` with Fluent-based fallback UI
- Spark integration: `@github/spark` runtime + Vite plugins

## Project documents

- Plan: [PLAN.md](PLAN.md)
- Status: [STATUS.md](STATUS.md)
- Architecture + diagrams: [ARCHITECTURE.md](ARCHITECTURE.md)
- Tech inventory/status: [TECH-STATUS.md](TECH-STATUS.md)

## Development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
npm run lint
```

## Notes

Legacy UI scaffold artifacts and no-value dependencies were removed to establish a clean migration baseline.
