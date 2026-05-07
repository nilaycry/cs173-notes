import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

export default function HomePage() {
  const logicNotes = getAllNotes("logic");
  const graphNotes = getAllNotes("graph-theory");

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
              CS 173
            </span>
            <Link
              href="/logic"
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
                transition: "all 0.2s",
              }}
            >
              first unit
            </Link>
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
            discrete structures · cs 173
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
            a full course resource built around mathematical writing
          </h1>

          <div style={{ maxWidth: 700 }}>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.8,
                color: MUTED,
                margin: "0 0 18px 0",
              }}
            >
              This site is being built as a structured reference for CS 173. The
              aim is not only to collect topics, but to explain what each part of
              the course is asking students to do, how proofs are written in that
              part of the course, and how the standards shift from logic to sets,
              induction, counting, and graph theory.
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
              The current draft starts with zeroth-order logic. The long-term goal
              is a resource students can use to learn, review, and write at the
              level the course expects.
            </p>
          </div>
        </section>

        <div
          className="cs-content"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 56px" }}
        >
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 48,
              marginBottom: 24,
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
              current direction
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div
              className="cs-summary-card"
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "18px 20px",
                flex: "1 1 260px",
                maxWidth: 360,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: FG,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                concept notes
              </span>
              <span style={{ fontSize: 12, color: FAINT, lineHeight: 1.6 }}>
                pages that teach the mathematics directly and define the local
                objects of study
              </span>
            </div>
            <div
              className="cs-summary-card"
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "18px 20px",
                flex: "1 1 260px",
                maxWidth: 360,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: FG,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                proof-writing notes
              </span>
              <span style={{ fontSize: 12, color: FAINT, lineHeight: 1.6 }}>
                pages that make the expected style of justification explicit
              </span>
            </div>
            <div
              className="cs-summary-card"
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "18px 20px",
                flex: "1 1 260px",
                maxWidth: 360,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: FG,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                problem guides
              </span>
              <span style={{ fontSize: 12, color: FAINT, lineHeight: 1.6 }}>
                pages that explain what assignments and review sets are testing
              </span>
            </div>
          </div>
        </div>

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
              current unit
            </span>
          </div>

          <Link href="/logic" style={{ textDecoration: "none", color: "inherit" }}>
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
                  zeroth-order logic
                </span>
                <span style={{ fontSize: 13, color: FAINT, lineHeight: 1.5 }}>
                  sentencehood, truth value, proof-writing expectations, and the
                  first problem set
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
                {logicNotes.length} pages
              </span>
            </div>
          </Link>

          <Link href="/graph-theory" style={{ textDecoration: "none", color: "inherit" }}>
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
                  graph theory
                </span>
                <span style={{ fontSize: 13, color: FAINT, lineHeight: 1.5 }}>
                  graph data, walks and cycles, trees, degree sums, and induction on graphs
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
                {graphNotes.length} pages
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
