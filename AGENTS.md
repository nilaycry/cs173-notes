# CS 173 Notes

This workspace is for a full course resource for UIUC `CS 173`.

The goal is not to dump lecture notes into a website. The goal is to build a
resource that could realistically support the course at scale, especially in the
parts students often struggle to reconstruct from lecture notes alone: how to
read statements, how to write proofs, and how proof expectations change across
the semester.

## What this project is

- a structured course resource
- a study site that covers the course from logic through graph theory
- a writing-aware set of notes, not just a theorem list
- a resource that can eventually be used by the course as a serious reference

## Default output

Prefer notebook notes under `notes/`, not interactive lessons.

For a new topic, the default deliverable is:

1. `notes/<unit>/<slug>/content.mdx`
2. optionally `notes/<unit>/<slug>/problems.mdx`

Use interactive material only if a topic clearly benefits from it.

For lecture-recording work, use the lecture-packet workflow instead of the
normal `notes/` workflow. Raw videos live outside this repo in
`C:\dev\notebook\lecture-ingest\173`; published packet markdown lives in
`lecture-packets/lecture-N/`.

## Writing priorities

- teach the mathematical content
- teach what a proof in this unit is supposed to look like
- make changes in proof style explicit
- sound rigorous, readable, and dependable
- avoid both textbook filler and diary-like commentary
- prefer formal statements and explicit definitions over motivational setup
- write enough derivation for the note to be used directly for study and exam review
- make lecture-derived packets feel like primary course notes, not transcript
  summaries
- judge in-class problem discussions by whether they teach reusable technique;
  include them only when they improve the standalone resource

## Strong defaults

- Start from the distinction that matters.
- Name what kind of statement or object is being studied.
- Say what a complete justification has to do here.
- Expand the definition that carries the proof.
- Name the step that is actually hard.
- Use formal notation when the course uses it.
- Write proof cases explicitly when the statement naturally splits into cases.
- Add a visual only when it clarifies a concrete definition or example.

## Style rules

- Use title case headings.
- Keep paragraphs short.
- Prefer one idea per paragraph.
- Define symbols before using them.
- Use first person sparingly.
- Do not use em dashes.
- Do not use filler like "In this note we will..."
- Do not use filler like "In this course..." when the sentence can be stated directly.
- Do not write "clearly", "obviously", or "it is important to note that".
- Do not smooth over a subtle proof move just to sound polished.
- Do not lean on conversational scaffolding when a direct statement will do.
- Do not leave a proof at the level of summary if the course expects a derivation.
- Do not use informal ellipsis-style sequence notation inside a formal proof when explicit notation can be defined instead.
- Do not write visible notes as if they came from a recording. Avoid phrases
  such as "the lecture states", "the professor says", "from the transcript",
  "generated from a lecture", or "use this wording".
- Do not make formal statements feel bureaucratic. Prefer topic headings like
  `## Finite Sets`, then put the formal label inside the prose block:
  `> **Definition.** ...`, `> **Theorem.** ...`, `> **Proposition.** ...`,
  or `> **Axiom.** ...`.
- Use `## Core Summary` instead of "What You Should Be Able To Say Out Loud".

## Course-specific priorities

This course changes character as it moves:

- logic asks for formal symbolic justification
- set theory asks for definition-based reasoning
- induction asks for scaffolded proof structure
- later units ask for more structural proof language

Good notes in this project should make those shifts visible.

## Lecture Packet Workflow

When the user adds a lecture recording, process it as a polished replacement
resource, not as a transcript cleanup.

Raw-video workflow:

1. Look in `C:\dev\notebook\lecture-ingest\173\incoming`.
2. Move the video to `C:\dev\notebook\lecture-ingest\173\lecture-N\lecture-N.mp4`.
3. Create work files under `C:\dev\notebook\lecture-ingest\173\lecture-N\work`.
4. Sample frames/contact sheets and use them to correct transcript/math errors.
5. Transcribe locally when possible, writing progressively so interruptions do
   not lose all progress.
6. Publish only markdown into `lecture-packets/lecture-N/`; keep raw videos out
   of Git.

Published packet files:

- `study-guide.md`
- `flashcards.md`
- `practice.md`
- `transcript.md` as archival source material

Published study-guide shape:

- `# Lecture N: Topic`
- `## Big Picture`
- topic sections in the order a student should learn them
- formal statements as quote blocks, for example `> **Definition.** ...`
- examples and proof sketches with explicit domains and definitions
- `## Common Confusions` when useful
- `## Core Summary`

Published flashcards should include:

- definition cards
- theorem/proof-move cards
- multiple-choice questions that test distinctions and traps, not only
  vocabulary

Published practice should include:

- focused problems aligned with the packet
- `Answer:` or `Solution:` blocks, because the site hides these by default with
  a show-answer button

Quality bar for lecture packets:

- Do not treat transcript text as final prose.
- Do not include process notes, transcript caveats, or pipeline commentary.
- Cross-check exact math definitions against `sources/` when relevant.
- Include domain statements where they matter, such as
  `n \in \mathbb{N}^+`, `x,y \in \mathbb{Z}`, `x,y \in V(G)`, and
  `f:A\to B`.
- Correct obvious ASR errors in mathematical terms.
- Prefer a smaller, high-signal packet over a giant summary.
- After editing, run `npm run build`.
- If publishing is requested or expected, commit intentionally and push to
  `main`.

## Graph-unit specific defaults

The graph theory notes should follow these local rules:

- define graph objects formally in set-theoretic language
- make walk, path, circuit, and cycle definitions explicit in math
- prefer cardinality-based statements and proofs when they are available
- write induction proofs in quantified form when that is how the course presents them
- keep visuals minimal, clean, and textbook-like
- use visuals only for local clarification, not for atmosphere

## Note types

Every page should visibly be one of the following:

- `Concept Note`
- `Proof-Writing Note`
- `Problem Guide`
- `Review Note`

The type should affect both the structure and the tone of the page.

## Before drafting

Read:

1. `docs/writing-guidelines.md`
2. `docs/proof-style-guide.md`
3. `docs/note-standards.md`
4. `docs/workflow.md`
5. `docs/course-outline.md`

Then inspect the relevant source material in `sources/`.
