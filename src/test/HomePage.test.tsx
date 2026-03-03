// EVA-STORY: F45-06-002
import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { HomePage } from "../pages/home/HomePage";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn(), language: "en" },
  }),
}));

describe("HomePage", () => {
  it("renders the hero heading", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText("Welcome to AICOE")).toBeInTheDocument();
  });

  it("renders the EVA-JP and EVA Accelerator tool cards", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText("EVA-JP")).toBeInTheDocument();
    expect(screen.getByText("EVA Accelerator")).toBeInTheDocument();
  });
});
