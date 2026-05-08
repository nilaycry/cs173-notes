"use client";

import { useState, type ReactNode } from "react";

export function AnswerReveal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ margin: "1.25rem 0 2rem" }}>
      <button
        type="button"
        className="co-note-button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        style={{ cursor: "pointer" }}
      >
        {isOpen ? "Hide answer" : "Show answer"}
      </button>
      {isOpen ? (
        <div
          style={{
            borderLeft: "3px solid #6c8f92",
            marginTop: "1rem",
            paddingLeft: "1.1rem",
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
