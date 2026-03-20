// EVA-STORY: F45-06-002
import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { Layout } from "../pages/layout/Layout";

// Stub i18n — returns the key so assertions use stable English key strings
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn(), language: "en" },
  }),
}));

describe("Layout", () => {
  it("renders the skip-to-main-content link", () => {
    renderWithProviders(<Layout />);
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  it("renders primary navigation links", () => {
    renderWithProviders(<Layout />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Progress")).toBeInTheDocument();
  });

  it("renders the language toggle button showing FR", () => {
    renderWithProviders(<Layout />);
    // language is "en" so toggle shows "FR"
    expect(screen.getByText("FR")).toBeInTheDocument();
  });
});
