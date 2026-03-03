// EVA-STORY: F45-06-002
import { render, type RenderOptions } from "@testing-library/react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { MemoryRouter } from "react-router-dom";
import type { ReactElement } from "react";
import { AnnouncerProvider } from "../components/Announcement/AnnouncerProvider";

// Minimal wrapper — uses FluentProvider (avoids GCThemeProvider/canvas in jsdom)
function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <MemoryRouter>
      <FluentProvider theme={webLightTheme}>
        <AnnouncerProvider>{children}</AnnouncerProvider>
      </FluentProvider>
    </MemoryRouter>
  );
}

function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export * from "@testing-library/react";
export { renderWithProviders };
