// EVA-STORY: F45-06-002
import "@testing-library/jest-dom";
import { afterEach } from "vitest";

// Prevent uncaught errors from timers that fire after jsdom teardown
afterEach(() => {
  vi.clearAllTimers();
});
