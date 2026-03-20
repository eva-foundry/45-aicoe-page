import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { ProgressPage } from "../pages/progress/ProgressPage";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn(), language: "en" },
  }),
}));

describe("ProgressPage", () => {
  it("renders the progress hero heading", () => {
    renderWithProviders(<ProgressPage />);
    expect(screen.getByText("Progress")).toBeInTheDocument();
  });

  it("renders the project board section", () => {
    renderWithProviders(<ProgressPage />);
    expect(screen.getByText("progress.section.boards")).toBeInTheDocument();
  });

  it("renders the calculated metrics section", () => {
    renderWithProviders(<ProgressPage />);
    expect(screen.getByText("progress.section.metrics")).toBeInTheDocument();
  });
});