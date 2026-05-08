import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

export default function GraphTheoryPage() {
  const notes = getAllNotes("graph-theory");

  return (
    <>
      <style>{`
        .cs-note-row { transition: background 0.15s ease; }
        .cs-note-row:hover { background: rgba(0,0,0,0.03) !important; }
        .cs-summary-card:hover { background: rgba(0,0,0,0.04) !important; }
        .nav-pill:hover {
          color: #1c1917 !important;
          border-color: rgba(0,0,0,0.15) !important;
          background: rgba(0,0,0,0.02);
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: BG,
          color: FG,
          fontFamily: "STIX Two Text, Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(247, 244, 239, 0.85)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          <nav
            className="cs-page-nav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 48px",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <Link
              href="/"
              className="nav-pill group"
              style={{
                color: FAINT,
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.06em",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 20,
                padding: "5px 14px",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 4 }}>←</span> back
            </Link>
            <span
              className="nav-pill"
              style={{
                color: FAINT,
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.06em",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 20,
                padding: "5px 14px",
              }}
            >
              graph theory
            </span>
          </nav>
        </div>

        <section
          className="cs-hero"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 48px 72px",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 400,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              display: "block",
              marginBottom: 20,
            }}
          >
            graph theory
          </span>

          <h1
            style={{
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.2,
              color: FG,
              margin: "0 0 32px 0",
              maxWidth: 700,
              letterSpacing: "-0.01em",
            }}
          >
            definitions first, then the counting and induction moves
          </h1>

          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.8,
                color: MUTED,
                margin: "0 0 18px 0",
              }}
            >
              This section is built around the formal graph definitions in Problem
              Set 9 and the proof style the course seems to prefer. The focus is on
              learning the language cleanly before trying to solve graph theory
              problems from the set.
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.8,
                color: MUTED,
                margin: 0,
              }}
            >
              The order matters. Graph data comes first, then the degree-sum
              theorem, then movement through a graph, then trees, then the first
              two structural tree proofs, then the parity consequence, then
              induction on graphs, and finally a guide to the main proof patterns
              in the section.
            </p>
          </div>
        </section>

        <div
          className="cs-content"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 120px" }}
        >
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 48,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                color: FAINT,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              notes
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {notes.map((note) => (
              <Link
                key={note.slug}
                href={`/graph-theory/${note.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="cs-note-row"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    borderBottom: `1px solid ${BORDER}`,
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: FG,
                        display: "block",
                        marginBottom: 4,
                      }}
                    >
                      {note.title}
                    </span>
                    <span style={{ fontSize: 13, color: FAINT, lineHeight: 1.5 }}>
                      {note.description}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      color: FAINT,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      flexShrink: 0,
                      marginLeft: 24,
                    }}
                  >
                    note {note.order}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
