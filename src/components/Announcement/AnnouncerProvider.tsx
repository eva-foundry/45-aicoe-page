// EVA-STORY: F45-01-002
/* eslint-disable react-refresh/only-export-components -- context + provider intentionally co-located */
import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@fluentui/react-components";

// ─── Context ─────────────────────────────────────────────────────────────────

export interface AnnouncerContextValue {
  announce: (message: string) => void;
}

export const AnnouncerContext = createContext<AnnouncerContextValue | null>(null);

// ─── Styles ───────────────────────────────────────────────────────────────────

const useStyles = makeStyles({
  announcer: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: "0",
  },
});

// ─── Provider ────────────────────────────────────────────────────────────────

interface AnnouncerProviderProps {
  children: React.ReactNode;
}

export function AnnouncerProvider({ children }: AnnouncerProviderProps) {
  const styles = useStyles();
  const [message, setMessage] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const announce = useCallback((msg: string) => {
    // Clear first, then set — forces re-announcement of the same text
    setMessage("");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setMessage(msg), 50);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <AnnouncerContext.Provider value={{ announce }}>
      <div
        className={styles.announcer}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </div>
      {children}
    </AnnouncerContext.Provider>
  );
}
