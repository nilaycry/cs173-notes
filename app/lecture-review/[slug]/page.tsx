import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  getAllLecturePackets,
  getLectureMarkdown,
  getLecturePacket,
  getLectureSlugs,
} from "@/lib/lectures";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

export function generateStaticParams() {
  return getLectureSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lecture = getLecturePacket(params.slug);
  if (!lecture) return { title: "Not Found" };
  return {
    title: `Lecture ${lecture.number} Review - CS 173`,
    description: lecture.title,
  };
}

async function renderMarkdown(source: string | null) {
  if (!source) return null;
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });
  return content;
}

export default async function LecturePacketPage({
  params,
}: {
  params: { slug: string };
}) {
  const lecture = getLecturePacket(params.slug);
  if (!lecture) notFound();

  const studyGuide = await renderMarkdown(getLectureMarkdown(lecture.studyGuidePath));
  const flashcards = await renderMarkdown(getLectureMarkdown(lecture.flashcardsPath));
  const practice = await renderMarkdown(getLectureMarkdown(lecture.practicePath));

  const lectures = getAllLecturePackets();
  const currentIndex = lectures.findIndex((item) => item.slug === lecture.slug);
  const prevLecture = currentIndex > 0 ? lectures[currentIndex - 1] : null;
  const nextLecture = currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null;

  return (
    <div
      className="note-accent-cs173"
      style={{
        minHeight: "100vh",
        backgroundColor: BG,
        color: FG,
      }}
    >
      <nav
        className="co-note-shell-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 48px",
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <Link href="/lecture-review" className="co-note-button">
          {"<-"} lecture review
        </Link>
        <span className="co-note-button" style={{ cursor: "default" }}>
          lecture {lecture.number}
        </span>
      </nav>

      <header
        className="co-note-header"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "48px 48px 40px",
        }}
      >
        <div style={{ marginBottom: 14 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 400,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            CS 173 - Lecture Review
          </span>
        </div>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 500,
            lineHeight: 1.2,
            color: FG,
            marginBottom: 14,
            letterSpacing: "-0.01em",
          }}
        >
          Lecture {lecture.number}
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, margin: "0 0 20px 0" }}>
          {lecture.title.replace(/^CS 173 Lecture Study Guide:\s*/, "")}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {studyGuide ? (
            <a href="#study-guide" className="co-note-button">
              study guide
            </a>
          ) : null}
          {flashcards ? (
            <a href="#flashcards" className="co-note-button">
              flashcards
            </a>
          ) : null}
          {practice ? (
            <>
              <a href="#practice" className="co-note-button">
                practice
              </a>
              <Link href={`/practice/${lecture.slug}`} className="co-note-button">
                practice only
              </Link>
            </>
          ) : null}
        </div>
        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginTop: 0 }} />
      </header>

      <main
        className="co-note-main"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 48px 48px",
        }}
      >
        <section id="study-guide" style={{ marginBottom: 42 }}>
          <span style={sectionLabelStyle}>study guide</span>
          <article className="notes-prose" style={{ maxWidth: "none" }}>
            {studyGuide ?? <p>No study guide has been generated for this lecture yet.</p>}
          </article>
        </section>

        <section id="flashcards" style={{ marginBottom: 42 }}>
          <span style={sectionLabelStyle}>flashcards and mcqs</span>
          <article className="notes-prose" style={{ maxWidth: "none" }}>
            {flashcards ?? <p>No flashcards have been generated for this lecture yet.</p>}
          </article>
        </section>

        {practice ? (
          <section id="practice" style={{ marginBottom: 42 }}>
            <span style={sectionLabelStyle}>practice</span>
            <article className="notes-prose" style={{ maxWidth: "none" }}>
              {practice}
            </article>
          </section>
        ) : null}
      </main>

      <footer
        className="co-note-footer"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "32px 48px 80px",
          borderTop: `1px solid ${BORDER}`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {prevLecture ? (
          <Link
            href={`/lecture-review/${prevLecture.slug}`}
            className="co-note-nav-card"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            <span style={navSmallStyle}>{"<-"} previous</span>
            <span style={navTitleStyle}>Lecture {prevLecture.number}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextLecture ? (
          <Link
            href={`/lecture-review/${nextLecture.slug}`}
            className="co-note-nav-card"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}
          >
            <span style={navSmallStyle}>next {"->"}</span>
            <span style={navTitleStyle}>Lecture {nextLecture.number}</span>
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </div>
  );
}

const sectionLabelStyle = {
  display: "block",
  borderTop: `1px solid ${BORDER}`,
  paddingTop: 28,
  marginBottom: 12,
  fontSize: 11,
  fontWeight: 400,
  color: FAINT,
  textTransform: "uppercase",
  letterSpacing: "0.14em",
} as const;

const navSmallStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  fontSize: 11,
  color: FAINT,
  marginBottom: 5,
  lineHeight: 1.2,
} as const;

const navTitleStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: MUTED,
  lineHeight: 1.35,
} as const;
