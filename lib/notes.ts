import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NoteType = "main" | "writing-companion" | "problem-guide";

export interface NoteMeta {
  slug: string;
  unit: string;
  title: string;
  description: string;
  order: number;
  noteType: NoteType;
  status?: string;
}

function unitDir(unit: string) {
  return path.join(process.cwd(), "notes", unit);
}

function readNoteMeta(unit: string, slug: string): NoteMeta | null {
  const filePath = path.join(unitDir(unit), slug, "content.mdx");
  if (!fs.existsSync(filePath)) return null;

  const { data } = matter(fs.readFileSync(filePath, "utf-8"));

  return {
    slug,
    unit,
    title: data.title as string,
    description: data.description as string,
    order: data.order as number,
    noteType: data.noteType as NoteType,
    status: (data.status as string | undefined) ?? undefined,
  };
}

export function getAllNotes(unit: string): NoteMeta[] {
  const dir = unitDir(unit);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((entry) => fs.statSync(path.join(dir, entry)).isDirectory())
    .map((slug) => readNoteMeta(unit, slug))
    .filter((note): note is NoteMeta => note !== null)
    .sort((a, b) => a.order - b.order);
}

export function getNoteBySlug(unit: string, slug: string): NoteMeta | undefined {
  return getAllNotes(unit).find((note) => note.slug === slug);
}

export function getAllNoteSlugs(unit: string): string[] {
  return getAllNotes(unit).map((note) => note.slug);
}

export function getNoteContent(unit: string, slug: string): string | null {
  const filePath = path.join(unitDir(unit), slug, "content.mdx");
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}
