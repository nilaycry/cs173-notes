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
import { AnswerReveal } from "./AnswerReveal";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

export function generateStaticParams() {
  return getAllLecturePackets()
    .filter((lecture) => lecture.practicePath)
    .map((lecture) => ({ slug: lecture.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lecture = getLecturePacket(params.slug);
  if (!lecture) return { title: "Not Found" };
  return {
    title: `Lecture ${lecture.number} Practice - CS 173`,
    description: `Practice problems for ${lecture.title}`,
  };
}

function preparePracticeMarkdown(markdown: string) {
  const withAnchors = markdown.replace(/^### Problem\s+(\d+)(?::\s*(.+))?$/gm, (_match, number, title) => {
    const label = title ? `Problem ${number}: ${title}` : `Problem ${number}`;
    return `<h3 id="problem-${number}">${label}</h3>`;
  });

  const lines = withAnchors.split(/\r?\n/);
  const prepared: string[] = [];
  let inAnswer = false;

  for (const line of lines) {
    const trimmed = line.trim();
    const startsNextSection =
      trimmed.startsWith('<h3 id="problem-') || /^##\s+/.test(trimmed);

    if (inAnswer && startsNextSection) {
      prepared.push("</AnswerReveal>", "");
      inAnswer = false;
    }

    if (/^(Answer|Solution):\s*$/.test(trimmed)) {
      if (inAnswer) {
        prepared.push("</AnswerReveal>", "");
      }
      prepared.push("<AnswerReveal>", "");
      inAnswer = true;
      continue;
    }

    prepared.push(line);
  }

  if (inAnswer) {
    prepared.push("</AnswerReveal>");
  }

  return prepared.join("\n");
}

async function renderPractice(source: string) {
  const { content } = await compileMDX({
    source: preparePracticeMarkdown(source),
    components: { AnswerReveal },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });
  return content;
}

export default async function PracticeLecturePage({
  params,
}: {
  params: { slug: string };
}) {
  const lecture = getLecturePacket(params.slug);
  if (!lecture || !lecture.practicePath) notFound();

  const source = getLectureMarkdown(lecture.practicePath);
  if (!source) notFound();

  const content = await renderPractice(source);

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
        <Link href="/practice" className="co-note-button">
          {"<-"} practice
        </Link>
        <Link href={`/lecture-review/${lecture.slug}`} className="co-note-button">
          study guide
        </Link>
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
            CS 173 - Practice
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
          Lecture {lecture.number} Practice
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
