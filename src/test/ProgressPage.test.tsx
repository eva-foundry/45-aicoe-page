import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { progressSnapshot } from "../data/progressSnapshot";
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

  it("renders recent items in the board cards", () => {
    renderWithProviders(<ProgressPage />);
    const boardsWithRecentItems = progressSnapshot.boards.filter((board) => board.items.length > 0).length;

    expect(screen.getAllByText("progress.board.recent")).toHaveLength(boardsWithRecentItems);
  });

  it("renders the calculated metrics section", () => {
    renderWithProviders(<ProgressPage />);
    expect(screen.getByText("progress.section.metrics")).toBeInTheDocument();
  });
});