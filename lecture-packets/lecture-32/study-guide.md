# Lecture 32: Infinity and Cardinality

## Big Picture

This lecture changes the topic from pigeonhole-style finite counting to the behavior of infinite sets.

The central surprise is that infinite sets can have proper subsets of the same size. A full hotel with one room for each natural number can still make room for one more guest by moving the guest in room $n$ to room $n+1$. Formally, this is the same phenomenon as

$$
|\mathbb{N}|=|\mathbb{N}^+|.
$$

The lecture also reinforces a proof-writing distinction:

> **Proof-Writing Rule.** A definition does not need a proof, but a theorem or claim does. When writing "by definition," the named definition must actually contain the statement being used.

## Definitions Versus Theorems

Definitions introduce the meaning of a symbol or phrase. Theorems assert facts that have truth values and require proof.

For example, if the successor of $x$ is defined by

$$
\operatorname{succ}(x)=x\cup\{x\},
$$

then that equation can be used by definition. A later fact about how successor behaves under addition is not automatically "by definition." It is a theorem unless it was literally part of the definition.

This matters in proof writing because a proof step should identify the real reason the step is valid:

- use "by definition" only when expanding the definition of a symbol or term
- use a theorem name, lemma name, or previously proved fact when applying a proposition with truth value
- introduce variables before making claims about them
- distinguish "let $n=0$" from "assume $n=0$"

> **Definition.** The statement "let $n=0$" defines the symbol $n$ to be the object $0$. The statement "assume $n=0$" treats $n=0$ as a hypothesis with a truth value.

## Binomial Coefficients

Before starting infinity, the lecture clarified the notation $\binom{n}{k}$.

> **Definition.** Let $n,k\in\mathbb{N}$, and let $X$ be any finite set with $|X|=n$. Then
> $$
> \binom{n}{k}
> =
> \left|\{Z\subseteq X\mid |Z|=k\}\right|.
> $$
> In words, $\binom{n}{k}$ is the number of $k$-element subsets of an $n$-element set.

The identities of the elements do not matter. If $X=\{a,b,c,d,e\}$, then $\binom{5}{2}$ counts the two-element subsets such as $\{a,b\}$, $\{b,c\}$, and $\{d,e\}$.

The important distinction is that subsets do not remember order. The set $\{b,c\}$ is the same subset as $\{c,b\}$.

## Cardinality By Functions

Cardinality compares sets using functions.

> **Definition.** A function $f:X\to Y$ is injective if
> $$
> \forall a,b\in X,\quad f(a)=f(b)\Rightarrow a=b.
> $$

> **Definition.** A function $f:X\to Y$ is surjective if
> $$
> \forall y\in Y,\ \exists x\in X\text{ such that }f(x)=y.
> $$

> **Definition.** A function is bijective if it is both injective and surjective.

> **Definition.** Two sets $A$ and $B$ have the same cardinality, written $|A|=|B|$, if there exists a bijection $h:A\to B$.

For finite sets, this agrees with ordinary counting. For infinite sets, this definition is the source of the surprising behavior.

## Finite And Infinite Sets

The course uses natural numbers as canonical finite sizes. Under the usual convention,

$$
n=\{0,1,\dots,n-1\}.
$$

> **Definition.** A set $F$ is finite if there exists $n\in\mathbb{N}$ such that
> $$
> |F|=|n|.
> $$

> **Definition.** A set $X$ is infinite if it is not finite. Equivalently,
> $$
> \forall n\in\mathbb{N},\quad |X|\ne |n|.
> $$

For finite sets, proper subsets are strictly smaller:

> **Theorem.** If $A$ and $B$ are finite sets, $A\subsetneq B$, then
> $$
> |A|<|B|.
> $$

This theorem is false if "finite" is removed.

## Hilbert's Hotel

Imagine a hotel with one room for each natural number:

$$
0,1,2,3,\dots
$$

Every room is occupied. A new guest arrives. The clerk can make room by moving every current guest:

$$
n\mapsto n+1.
$$

The guest from room $0$ moves to room $1$, the guest from room $1$ moves to room $2$, and so on. Room $0$ becomes available, and no old guest loses a room.

This is not just a story. It describes a bijection.

> **Example.** Define
> $$
> f:\mathbb{N}\to\mathbb{N}^+
> $$
> by
> $$
> f(n)=n+1.
> $$
> Then $f$ is bijective, so
> $$
> |\mathbb{N}|=|\mathbb{N}^+|.
> $$

Injectivity: if $f(a)=f(b)$, then $a+1=b+1$, so $a=b$.

Surjectivity: let $y\in\mathbb{N}^+$. Since $y$ is positive, $y-1\in\mathbb{N}$, and

$$
f(y-1)=y.
$$

So deleting $0$ from $\mathbb{N}$ does not change its cardinality.

## Dedekind Finite And Dedekind Infinite

The hotel story motivates a property that finite sets do not have.

> **Definition.** A set $X$ is Dedekind infinite if there exists a proper subset $Y\subsetneq X$ such that
> $$
> |Y|=|X|.
> $$

> **Definition.** A set $X$ is Dedekind finite if every proper subset $Y\subsetneq X$ has strictly smaller cardinality:
> $$
> \forall Y\subsetneq X,\quad |Y|<|X|.
> $$

The set $\mathbb{N}$ is Dedekind infinite because

$$
\mathbb{N}^+\subsetneq\mathbb{N}
$$

but

$$
|\mathbb{N}^+|=|\mathbb{N}|.
$$

For the set theory assumptions used in this course, finite sets are exactly Dedekind finite, and infinite sets are exactly Dedekind infinite. Without choice-like assumptions, that equivalence is more delicate; this course treats the usual cardinality comparison principles as available.

## Fitting More Than One Extra Element

The same idea can fit any finite number of extra guests into Hilbert's hotel.

For example, to make room for $m\in\mathbb{N}$ new guests, move every current guest from room $n$ to room

$$
n+m.
$$

The rooms

$$
0,1,\dots,m-1
$$

are then free.

The lecture also previews stronger facts: countably infinite groups of new guests can sometimes be fit into the hotel too, including one guest for each rational number. That requires more careful enumeration and is continued later.

## Integers And Natural Numbers

The lecture sketches the proof that

$$
|\mathbb{Z}|=|\mathbb{N}|.
$$

One direct way is to list the integers in an order indexed by natural numbers:

$$
0,-1,1,-2,2,-3,3,\dots
$$

A clean function from integers to natural numbers is:

$$
f:\mathbb{Z}\to\mathbb{N},\qquad
f(z)=
\begin{cases}
2z, & z\ge 0,\\
-2z-1, & z<0.
\end{cases}
$$

This sends

$$
0\mapsto 0,\quad -1\mapsto 1,\quad 1\mapsto 2,\quad -2\mapsto 3,\quad 2\mapsto 4.
$$

It is injective. The canonical inclusion

$$
g:\mathbb{N}\to\mathbb{Z},\qquad g(n)=n
$$

is also injective.

> **Theorem.** If there are injections $f:X\to Y$ and $g:Y\to X$, then $|X|=|Y|$.

This is the Cantor-Schröder-Bernstein theorem. Applying it to the two injections above gives

$$
|\mathbb{Z}|=|\mathbb{N}|.
$$

The lecture did not write out the full verification of injectivity before time ran out; it gave the functions and left the remaining proof work as the familiar step.

## Common Confusions

The statement $A\subsetneq B$ does not always imply $|A|<|B|$. It does imply that when the sets are finite. Infinite sets can have proper subsets of the same cardinality.

The notation $\binom{n}{k}$ counts subsets, not ordered lists. The object $\{a,b\}$ is the same subset as $\{b,a\}$.

Showing two infinite sets have the same size means constructing a bijection or using a theorem such as Cantor-Schröder-Bernstein. A suggestive list is helpful, but the proof must still identify the function and verify the required property.

"By definition" is not a decoration. It should point to the definition being expanded.

## Core Summary

Infinite cardinality is measured by bijection, not by containment. A proper subset of an infinite set can have the same cardinality as the whole set.

The model examples are:

$$
|\mathbb{N}|=|\mathbb{N}^+|
$$

via $n\mapsto n+1$, and

$$
|\mathbb{Z}|=|\mathbb{N}|
$$

via injections in both directions.

The proof habit is to name the exact function, state its domain and codomain, and prove injectivity or surjectivity from the definitions.
