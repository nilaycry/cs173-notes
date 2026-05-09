# Workflow

## Purpose

This workflow is for turning mixed course material into clean notes that can
actually teach the course.

The source material may include:

- past lecture notes
- current course notes
- practice midterms
- problem sets
- solutions or proof writeups

The output should not feel copied from any one source. It should feel rebuilt
into a coherent course resource organized around what a student needs in order
to understand, write, and review.

## Source priority

Use sources in this order:

1. past lecture notes for main sequence and topic coverage
2. current course notes for current phrasing and pacing
3. problem sets for what students are actually asked to do
4. practice midterms for what the course compresses under pressure
5. solutions and proofs for proof expectations and common move patterns

## Drafting workflow

1. Identify the topic and unit.
2. Read the relevant course sources for that topic.
3. Write down:
   - the main distinction
   - the exact definitions
   - the proof shapes students need
   - the common mistake patterns
   - whether the note needs a fully written derivation or only a proof skeleton
   - whether a small visual would clarify a definition
4. Draft `content.mdx`.
5. If the topic needs practice immediately, add `problems.mdx`.
6. Revise for tone, accuracy, and note type.
7. Remove filler, note-about-notes commentary, and generic motivation that does not help solve problems.
8. End with a concise takeaway, transition, or proof expectation.

## Unit-aware drafting

Each draft should keep asking:

- What does a complete justification look like in this unit?
- What habits from the previous unit will mislead students here?
- Is this a note about content, proof writing, or both?
- Does this page read like course-facing material or like private notebook commentary?
- Am I defining the relevant object formally enough to support later proofs?
- If I added a visual, does it clarify a specific local issue, or is it just decoration?

## Good pilot-note choices

The first notes to build should probably be:

- `what this course is really asking you to do`
- `statements, open sentences, and logical form`
- `how proof style changes across cs 173`

Those notes define the whole project.

## Graph-theory workflow

For graph-theory notes in particular:

1. start from the exact set-theoretic or function-theoretic definition
2. state the object or theorem in math as early as possible
3. identify whether the proof is by cardinality, contradiction, or induction
4. if induction is used, write the quantified induction statement explicitly
5. if the proof builds a cycle or path, define enough notation to write that construction formally
6. add only minimal visuals, and only when they remove a real ambiguity

## Post-packet section synthesis

After the lecture packets for a course section are finished, do a second pass that turns the packet sequence into an official unit resource under `notes/`.

This pass should not merely copy packet prose. It should synthesize the section into a coherent course-facing sequence.

Use this workflow:

1. List all lecture packets that belong to the section.
2. Read the packet study guides, flashcards, and practice problems for coverage and emphasis.
3. Cross-check exact definitions and theorem statements against `sources/`, especially current problem sets, current course notes, and past lecture notes.
4. Compare the lecture-derived material against the existing `notes/<unit>/` pages.
5. Identify missing definitions, theorem statements, proof patterns, examples, and common confusions.
6. Restructure the unit order so prerequisite definitions come before proof-heavy notes.
7. Promote lecture-only material into durable notes when it belongs in the official section.
8. Rewrite notes in formal course style, using blocks such as `> **Definition.**`, `> **Theorem.**`, `> **Lemma.**`, and `> **Proposition.**`.
9. Add or revise problem-guide pages when problem sets reveal a proof pattern students must practice.
10. Update unit landing-page copy and note-type labels if the public sequence changed.
11. Run `npm run build`.
12. Commit and push the completed synthesis once the build passes.

The goal is a section resource that can stand on its own after the packet work is done: lecture coverage, source definitions, problem-set expectations, and proof-writing guidance should all agree.
