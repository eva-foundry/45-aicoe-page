// EVA-FEATURE: F45-UI
// EVA-STORY: F45-UI-001
// EVA-STORY: F45-UI-002
// EVA-STORY: F45-UI-003
// EVA-STORY: F45-UI-004
// EVA-STORY: F45-UI-005
// EVA-STORY: F45-UI-006
// EVA-STORY: F45-01-001 F45-01-003 F45-01-004
import React from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { GCThemeProvider } from "@eva/gc-design-system";
import { HashRouter } from "react-router-dom";
import { AnnouncerProvider } from "./components/Announcement/AnnouncerProvider";
import "./i18n/i18n";

import App from "./App";
import { ErrorFallback } from "./ErrorFallback";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GCThemeProvider>
      <AnnouncerProvider>
        <HashRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
          </ErrorBoundary>
        </HashRouter>
      </AnnouncerProvider>
    </GCThemeProvider>
  </React.StrictMode>
);
