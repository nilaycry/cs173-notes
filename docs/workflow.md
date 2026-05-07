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
