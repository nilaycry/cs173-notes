import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

function typeLabel(noteType: string) {
  switch (noteType) {
    case "main":
      return "concept note";
    case "writing-companion":
      return "proof-writing note";
    case "problem-guide":
      return "problem guide";
    default:
      return noteType;
  }
}

export default function LogicPage() {
  const notes = getAllNotes("logic");
  const mainNotes = notes.filter((note) => note.noteType === "main");
  const writingNotes = notes.filter((note) => note.noteType === "writing-companion");
  const problemGuides = notes.filter((note) => note.noteType === "problem-guide");

  return (
    <>
      <style>{`
        .cs-note-row { transition: background 0.15s ease; }
        .cs-note-row:hover { background: rgba(0,0,0,0.03) !important; }
        .cs-companion-card:hover { background: rgba(0,0,0,0.04) !important; }
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
              unit 1
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
            logic · first section
          </span>

          <h1
            style={{
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.2,
              color: FG,
              margin: "0 0 32px 0",
              maxWidth: 620,
              letterSpacing: "-0.01em",
            }}
          >
            zeroth-order logic
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
              This section introduces the first logical objects in the course:
              declarative sentences, truth value, logical connectives, and the
              earliest proof formats. It also establishes the style of
              justification expected before the course moves into sets and
              quantifiers.
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
              The pages are grouped by purpose. Concept notes teach the
              mathematics directly. Proof-writing notes explain how solutions
              should be presented. Problem guides explain what the early course
              materials are testing.
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
              section structure
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div
              className="cs-companion-card"
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
                pages on sentencehood, truth value, connectives, equivalence, and proof
              </span>
            </div>
            <div
              className="cs-companion-card"
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
                pages on formal justification, structure, and rule citation
              </span>
            </div>
            <div
              className="cs-companion-card"
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
                pages on what the early sets and reviews are actually testing
              </span>
            </div>
          </div>
        </div>

        <div
          className="cs-content"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 32px" }}
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
              concept notes
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {mainNotes.map((note) => (
              <Link
                key={note.slug}
                href={`/logic/${note.slug}`}
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
                    {typeLabel(note.noteType)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="cs-content"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 32px" }}
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
              proof-writing notes
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {writingNotes.map((note) => (
              <Link
                key={note.slug}
                href={`/logic/${note.slug}`}
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
                    {typeLabel(note.noteType)}
                  </span>
                </div>
              </Link>
            ))}
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
              problem guides
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {problemGuides.map((note) => (
              <Link
                key={note.slug}
                href={`/logic/${note.slug}`}
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
                    {typeLabel(note.noteType)}
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
