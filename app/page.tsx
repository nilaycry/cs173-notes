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
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Link
                href="/lecture-review"
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
                lecture review
              </Link>
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
                start with logic
              </Link>
            </div>
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
            a course resource for learning, reviewing, and writing CS 173 correctly
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
              This site is organized as a full course resource for CS 173. The
              goal is not just to list definitions and theorems, but to teach the
              mathematics, make the expected proof style explicit, and give
              students something they can actually study from when lecture notes
              are not enough.
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
              The course changes its standards as the objects change. Logic,
              trees, degree arguments, and induction do not ask to be written in
              the same way. These notes are meant to make those shifts visible
              instead of leaving students to infer them on their own.
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
              what this site provides
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
                formal notes that teach the mathematics directly, define the local
                objects, and make the main distinctions explicit
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
                pages that spell out what a complete justification looks like in
                that part of the course
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
                pages that explain what assignments are testing and which proof
                moves they are trying to train
              </span>
            </div>
          </div>
        </div>

        <div
          className="cs-content"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 56px" }}
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
              how to use it
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div
              className="cs-summary-card"
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "18px 20px",
                flex: "1 1 320px",
                maxWidth: 380,
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
                learn a topic
              </span>
              <span style={{ fontSize: 12, color: FAINT, lineHeight: 1.6 }}>
                start with the concept note, then read the proof-writing note if
                the unit has one, and only then move to the problem guide
              </span>
            </div>
            <div
              className="cs-summary-card"
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "18px 20px",
                flex: "1 1 320px",
                maxWidth: 380,
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
                study for an exam
              </span>
              <span style={{ fontSize: 12, color: FAINT, lineHeight: 1.6 }}>
                use the unit pages to review definitions, theorem statements, and
                the standard proof patterns that keep repeating
              </span>
            </div>
            <div
              className="cs-summary-card"
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "18px 20px",
                flex: "1 1 320px",
                maxWidth: 380,
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
                write a proof
              </span>
              <span style={{ fontSize: 12, color: FAINT, lineHeight: 1.6 }}>
                check what definitions need to be expanded, what earlier results
                are available, and what kind of proof move the statement is asking
                for
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
              current coverage
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
                  sentencehood, truth value, formal logical vocabulary, and the
                  first proof-writing expectations of the course
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

          <Link href="/lecture-review" style={{ textDecoration: "none", color: "inherit" }}>
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
                  lecture review
                </span>
                <span style={{ fontSize: 13, color: FAINT, lineHeight: 1.5 }}>
                  processed recordings with cleaned study guides, flashcards,
                  multiple-choice checks, and practice prompts
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
                review
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
                  graph definitions, trees, degree arguments, induction, and the
                  main proof patterns from the first graph theory problems
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
