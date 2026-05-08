import Link from "next/link";
import { getAllLecturePackets, getPracticeProblems } from "@/lib/lectures";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

export default function PracticeIndexPage() {
  const lectures = getAllLecturePackets().filter((lecture) => lecture.practicePath);
  const problems = getPracticeProblems();

  return (
    <>
      <style>{`
        .cs-note-row { transition: background 0.15s ease; }
        .cs-note-row:hover { background: rgba(0,0,0,0.03) !important; }
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
            <Link href="/lecture-review" className="nav-pill" style={navPillStyle}>
              {"<-"} lecture review
            </Link>
            <span className="nav-pill" style={navPillStyle}>
              practice
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
            review drills
          </span>
          <h1
            style={{
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.2,
              color: FG,
              margin: "0 0 24px 0",
              maxWidth: 760,
              letterSpacing: "-0.01em",
            }}
          >
            practice problems by lecture
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.8,
              color: MUTED,
              margin: 0,
              maxWidth: 720,
            }}
          >
            Jump directly into the practice set for a lecture, or use the problem
            list to target a specific drill.
          </p>
        </section>

        <main
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
            <span style={labelStyle}>practice sets</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 48 }}>
            {lectures.map((lecture) => (
              <Link
                key={lecture.slug}
                href={`/practice/${lecture.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="cs-note-row" style={rowStyle}>
                  <div>
                    <span style={rowTitleStyle}>Lecture {lecture.number}</span>
                    <span style={rowDescriptionStyle}>{lecture.title}</span>
                  </div>
                  <span style={rowMetaStyle}>practice set</span>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 48,
              marginBottom: 12,
            }}
          >
            <span style={labelStyle}>all problems</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {problems.map((problem) => (
              <Link
                key={`${problem.lectureSlug}-${problem.problemNumber}`}
                href={`/practice/${problem.lectureSlug}#${problem.anchor}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="cs-note-row" style={rowStyle}>
                  <div>
                    <span style={rowTitleStyle}>
                      Lecture {problem.lectureNumber}: {problem.title}
                    </span>
                    <span style={rowDescriptionStyle}>{problem.lectureTitle}</span>
                  </div>
                  <span style={rowMetaStyle}>problem {problem.problemNumber}</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const navPillStyle = {
  color: FAINT,
  textDecoration: "none",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.06em",
  border: "1px solid rgba(0,0,0,0.06)",
  borderRadius: 20,
  padding: "5px 14px",
  transition: "all 0.2s",
} as const;

const labelStyle = {
  fontSize: 11,
  fontWeight: 400,
  color: FAINT,
  textTransform: "uppercase",
  letterSpacing: "0.14em",
} as const;

const rowStyle = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  padding: "16px 0",
  borderBottom: `1px solid ${BORDER}`,
  cursor: "pointer",
} as const;

const rowTitleStyle = {
  fontSize: 15,
  fontWeight: 400,
  color: FG,
  display: "block",
  marginBottom: 4,
} as const;

const rowDescriptionStyle = {
  fontSize: 13,
  color: FAINT,
  lineHeight: 1.5,
} as const;

const rowMetaStyle = {
  fontSize: 11,
  color: FAINT,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  flexShrink: 0,
  marginLeft: 24,
} as const;
