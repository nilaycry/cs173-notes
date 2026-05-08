import fs from "fs";
import path from "path";

export interface LecturePacket {
  slug: string;
  number: number;
  title: string;
  description: string;
  basePath: string;
  studyGuidePath?: string;
  flashcardsPath?: string;
  practicePath?: string;
  transcriptPath?: string;
  contactSheetPath?: string;
}

const lectureRoot = path.resolve(process.cwd(), "lecture-packets");

function existingFile(...parts: string[]) {
  const filePath = path.join(...parts);
  return fs.existsSync(filePath) ? filePath : undefined;
}

function readTitle(filePath: string | undefined, fallback: string) {
  if (!filePath) return fallback;
  const firstLine = fs
    .readFileSync(filePath, "utf-8")
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith("# "));

  return firstLine ? firstLine.replace(/^#\s+/, "").trim() : fallback;
}

export function getAllLecturePackets(): LecturePacket[] {
  if (!fs.existsSync(lectureRoot)) return [];

  return fs
    .readdirSync(lectureRoot)
    .filter((entry) => /^lecture-\d+$/.test(entry))
    .map((slug) => {
      const basePath = path.join(lectureRoot, slug);
      const number = Number(slug.replace("lecture-", ""));
      const studyGuidePath = existingFile(basePath, "study-guide.md");
      const flashcardsPath = existingFile(basePath, "flashcards.md");
      const practicePath = existingFile(basePath, "practice.md");
      const transcriptPath = existingFile(basePath, "transcript.md");
      const contactSheetPath = existingFile(basePath, "contact_sheet.jpg");
      const title = readTitle(studyGuidePath, `Lecture ${number}`);

      return {
        slug,
        number,
        title,
        description: [
          studyGuidePath ? "study guide" : null,
          flashcardsPath ? "flashcards" : null,
          practicePath ? "practice" : null,
          transcriptPath ? "transcript" : null,
        ]
          .filter(Boolean)
          .join(", "),
        basePath,
        studyGuidePath,
        flashcardsPath,
        practicePath,
        transcriptPath,
        contactSheetPath,
      };
    })
    .sort((a, b) => a.number - b.number);
}

export function getLecturePacket(slug: string) {
  return getAllLecturePackets().find((lecture) => lecture.slug === slug);
}

export function getLectureSlugs() {
  return getAllLecturePackets().map((lecture) => lecture.slug);
}

export function getLectureMarkdown(filePath: string | undefined) {
  if (!filePath || !fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}
