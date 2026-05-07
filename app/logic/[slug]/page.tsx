import { notFound } from "next/navigation";
import { getAllNotes, getAllNoteSlugs, getNoteBySlug, getNoteContent, type NoteMeta } from "@/lib/notes";
import type { Metadata } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const BG = "#f7f4ef";
const FG = "#1c1917";
const MUTED = "#78716c";
const FAINT = "#a8a29e";
const BORDER = "#e8e5df";
const ACCENT = "#2f6b6f";

function noteTypeLabel(noteType: string) {
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

export async function generateStaticParams() {
  const slugs = getAllNoteSlugs("logic");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const note = getNoteBySlug("logic", params.slug);
  if (!note) return { title: "Not Found" };
  return {
    title: `${note.title} - CS 173`,
    description: note.description,
  };
}

export default async function NotePage({
  params,
}: {
  params: { slug: string };
}) {
  const note = getNoteBySlug("logic", params.slug);
  if (!note) notFound();

  const mdxSource = getNoteContent("logic", params.slug);
  if (!mdxSource) notFound();

  const { content } = await compileMDX({
    source: mdxSource,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  const allNotes = getAllNotes("logic").filter((n): n is NoteMeta => n !== undefined);
  const currentIndex = allNotes.findIndex((n) => n.slug === params.slug);
  const prevNote = currentIndex > 0 ? allNotes[currentIndex - 1] : null;
  const nextNote = currentIndex < allNotes.length - 1 ? allNotes[currentIndex + 1] : null;

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
        <Link href="/logic" className="co-note-button">
          {"<-"} notes
        </Link>
        <span className="co-note-button" style={{ cursor: "default" }}>
          {noteTypeLabel(note.noteType)}
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
            cs 173 · zeroth-order logic
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
          {note.title}
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, margin: "0 0 20px 0" }}>
          {note.description}
        </p>
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
        <article className="notes-prose" style={{ maxWidth: "none" }}>
          {content}
        </article>
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
        {prevNote ? (
          <Link
            href={`/logic/${prevNote.slug}`}
            className="co-note-nav-card"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: FAINT, marginBottom: 5, lineHeight: 1.2 }}>
              {"<-"} previous
            </span>
            <span style={{ fontSize: 14, fontWeight: 500, color: MUTED, lineHeight: 1.35 }}>
              {prevNote.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextNote ? (
          <Link
            href={`/logic/${nextNote.slug}`}
            className="co-note-nav-card"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: FAINT, marginBottom: 5, lineHeight: 1.2 }}>
              next {"->"}
            </span>
            <span style={{ fontSize: 14, fontWeight: 500, color: MUTED, lineHeight: 1.35 }}>
              {nextNote.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </div>
  );
}
