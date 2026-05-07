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

## Writing priorities

- teach the mathematical content
- teach what a proof in this unit is supposed to look like
- make changes in proof style explicit
- sound rigorous, readable, and dependable
- avoid both textbook filler and diary-like commentary
- prefer formal statements and explicit definitions over motivational setup
- write enough derivation for the note to be used directly for study and exam review

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

## Course-specific priorities

This course changes character as it moves:

- logic asks for formal symbolic justification
- set theory asks for definition-based reasoning
- induction asks for scaffolded proof structure
- later units ask for more structural proof language

Good notes in this project should make those shifts visible.

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
