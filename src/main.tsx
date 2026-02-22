import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import '@github/spark/spark'

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webLightTheme}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </FluentProvider>
)
