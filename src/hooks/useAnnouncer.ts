// EVA-STORY: F45-01-002
import { useContext } from "react";
import { AnnouncerContext } from "../components/Announcement/AnnouncerProvider";

/**
 * Returns a stable `announce(message: string) => void` function.
 * Sets the hidden aria-live region; screen readers will announce it.
 */
export function useAnnouncer(): (message: string) => void {
  const ctx = useContext(AnnouncerContext);
  if (!ctx) throw new Error("useAnnouncer must be used inside <AnnouncerProvider>");
  return ctx.announce;
}
