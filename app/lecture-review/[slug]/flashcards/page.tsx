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
} from "@/lib/lectures";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

export function generateStaticParams() {
  return getAllLecturePackets()
    .filter((lecture) => lecture.flashcardsPath)
    .map((lecture) => ({ slug: lecture.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lecture = getLecturePacket(params.slug);
  if (!lecture) return { title: "Not Found" };
  return {
    title: `Lecture ${lecture.number} Flashcards - CS 173`,
    description: `Flashcards and MCQs for ${lecture.title}`,
  };
}

async function renderMarkdown(source: string) {
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

export default async function LectureFlashcardsPage({
  params,
}: {
  params: { slug: string };
}) {
  const lecture = getLecturePacket(params.slug);
  if (!lecture || !lecture.flashcardsPath) notFound();

  const source = getLectureMarkdown(lecture.flashcardsPath);
  if (!source) notFound();

  const content = await renderMarkdown(source);

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
        <Link href={`/lecture-review/${lecture.slug}`} className="co-note-button">
          {"<-"} study guide
        </Link>
        {lecture.practicePath ? (
          <Link href={`/practice/${lecture.slug}`} className="co-note-button">
            practice
          </Link>
        ) : (
          <span className="co-note-button" style={{ cursor: "default" }}>
            flashcards
          </span>
        )}
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
            CS 173 - Flashcards
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
          Lecture {lecture.number} Flashcards
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, margin: "0 0 20px 0" }}>
          {lecture.title}
        </p>
        <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, marginTop: 0 }} />
      </header>

      <main
        className="co-note-main"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 48px 80px",
        }}
      >
        <article className="notes-prose" style={{ maxWidth: "none" }}>
          {content}
        </article>
      </main>
    </div>
  );
}
