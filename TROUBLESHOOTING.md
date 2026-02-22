# Troubleshooting Guide

## Vite Module Resolution Error

If you encounter the error:
```
Cannot find module '/workspaces/spark-template/node_modules/vite/dist/node/chunks/dist.js'
```

This indicates corrupted node_modules. To fix:

### Solution 1: Use Fix Script (Easiest)

**On Linux/Mac:**
```bash
chmod +x fix-dependencies.sh
./fix-dependencies.sh
```

**On Windows:**
```cmd
fix-dependencies.bat
```

### Solution 2: Manual Clean Reinstall

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Remove workspace node_modules
rm -rf packages/spark-tools/node_modules

# Clear npm cache
npm cache clean --force

# Reinstall all dependencies
npm install
```

### Solution 2: If Using pnpm or yarn

```bash
# For pnpm
rm -rf node_modules pnpm-lock.yaml
pnpm install

# For yarn
rm -rf node_modules yarn.lock
yarn install
```

### Solution 3: Verify Node Version

Ensure you're using a compatible Node.js version (18.x or 20.x recommended):

```bash
node --version
```

### After Reinstall

Try running the dev server:

```bash
npm run dev
```

## Common Issues

### Port Already in Use

If port 5000 is in use:

```bash
npm run kill
npm run dev
```

### TypeScript Errors

If you see TypeScript compilation errors:

```bash
npm run build
```

Check `tsconfig.json` for any configuration issues.

### Fluent UI Components Not Rendering

Ensure FluentProvider is wrapping your app in `App.tsx`:

```tsx
import { FluentProvider } from '@fluentui/react-components'
import { gcTheme } from './lib/fluent-theme'

function App() {
  return (
    <FluentProvider theme={gcTheme}>
      {/* Your app content */}
    </FluentProvider>
  )
}
```
