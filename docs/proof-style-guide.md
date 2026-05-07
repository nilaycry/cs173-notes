# Proof Style Guide

## The main idea

`CS 173` is not one single proof language repeated all semester.

The standards move with the subject. A student who does not notice that will
often feel like they understood one unit and then suddenly started failing at
the next one for no obvious reason.

This project should make those shifts explicit.

## Early logic

Main habits:

- parse statements carefully
- distinguish propositions from open sentences
- track connectives and quantifiers
- justify steps with formal logical rules when the course expects that

What a good proof often looks like here:

- symbolic
- tightly justified
- explicit about which rule allows each move

Common failure mode:

- writing intuitive English when the exercise is really asking for formal derivation

## Set theory

Main habits:

- expand definitions
- reason about arbitrary elements
- keep membership and subset language separate

What a good proof often looks like here:

- "let x be arbitrary"
- assume membership
- unpack the set definition
- prove the target membership claim

Common failure mode:

- carrying over logic-rule citation when the real task is element chasing

## Functions and relations

Main habits:

- identify domain and codomain clearly
- use definitions of injective, surjective, bijective, and relation properties precisely
- track what is assumed and what must be shown

What a good proof often looks like here:

- choose the right arbitrary objects
- expand the exact definition
- do not skip the sentence that links the algebra back to the definition

Common failure mode:

- doing symbolic manipulation without connecting it to the function property being proved

## Induction

Main habits:

- state the claim carefully
- keep base case, inductive hypothesis, and inductive step distinct
- know exactly what is assumed in the inductive step

What a good proof often looks like here:

- a visible scaffold
- disciplined transitions
- no vague "by induction" shortcut

Common failure mode:

- using the inductive hypothesis imprecisely or proving the wrong statement in the step

## Counting and later units

Main habits:

- explain what is being counted
- justify why a counting model matches the problem
- reason structurally instead of only symbolically

What a good proof often looks like here:

- careful case setup
- explicit counting interpretation
- clean statement of why cases are complete and non-overlapping

Common failure mode:

- jumping into formulas without naming the combinatorial object

## Graph theory

Main habits:

- define the graph object clearly
- track vertices, edges, paths, or components precisely
- use examples to build intuition, not as substitutes for proof

What a good proof often looks like here:

- structural reasoning
- careful object tracking
- direct use of graph definitions
- explicit quantified statements when induction is used
- cardinality arguments written as actual derivations, not just proof summaries
- formal case splits when the statement asks about all pairs or all graph configurations

Common failure mode:

- drawing a convincing picture and treating it as a proof
- leaving the key graph transformation informal instead of defining the smaller graph precisely
- replacing the core derivation with explanatory prose

## What each note should say explicitly

Whenever useful, a note should answer:

- what counts as a complete proof here?
- what kind of sentences are we proving?
- what definition is doing the real work?
- what writing habit from the previous unit no longer transfers cleanly?

## Local rule for graph proofs

For graph theory in this project:

- if a theorem is presented formally in lecture, mirror that formal structure
- if the proof depends on a partition of vertices or edges, write the partition explicitly
- if a proof constructs a walk, path, or cycle, define the object carefully enough that the proof can be checked line by line
- if informal sequence notation would hide the proof, introduce notation for subwalks, reversal, or concatenation instead
