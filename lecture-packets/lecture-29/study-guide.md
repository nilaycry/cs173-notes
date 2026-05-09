# Lecture 29: Pigeonhole Modeling and Handshake Counts

## Big Picture

The pigeonhole principle is useful only after a problem has been turned into a statement about a specific function. Lecture 28 introduced the theorem. This lecture focuses on the modeling step:

- identify the objects that will be inputs
- identify the possible outputs
- define the function explicitly
- prove the codomain is small enough
- translate non-injectivity back into the original statement

The central example is the handshake-count theorem:

> In any room with at least two people, two distinct people have shaken the same number of other people's hands.

This sounds informal, but it can be proved with a precise pigeonhole argument. The proof is also the same structural idea behind a standard graph-theory theorem: every finite simple graph with at least two vertices has two vertices of the same degree.

## The Pigeonhole Principle Recalled

> **Theorem.** Let $A$ and $B$ be sets. If $|A|>|B|$, then every function $f:A\to B$ is not injective.

Equivalently, for every function $f:A\to B$, there exist distinct $a_1,a_2\in A$ such that

$$
f(a_1)=f(a_2).
$$

This is why pigeonhole arguments are useful for "two different objects have the same property" statements. The function records the property. Non-injectivity gives two inputs with the same recorded value.

The finite quantitative version says more.

> **Theorem.** Let $A$ and $B$ be finite sets with $|A|=n$, $|B|=k$, and $n,k\in\mathbb{N}^+$. For any function $f:A\to B$, there exists $b\in B$ such that
>
> $$
> \left|\{a\in A\mid f(a)=b\}\right|
> \ge
> \left\lceil\frac{n}{k}\right\rceil.
> $$

In this lecture's main proof, the ordinary non-injective form is enough.

## What Non-Injectivity Says

> **Definition.** A function $f:A\to B$ is injective if, for all $a_1,a_2\in A$,
>
> $$
> a_1\ne a_2 \Rightarrow f(a_1)\ne f(a_2).
> $$

Its negation is

$$
\exists a_1,a_2\in A
\quad
\bigl(a_1\ne a_2 \text{ and } f(a_1)=f(a_2)\bigr).
$$

So if $f$ maps each person to the number of other people whose hands they shook, non-injectivity says:

> There are two distinct people with the same handshake count.

The proof does not need to know who those two people are. It proves that they must exist.

## Modeling The Handshake Situation

Let $n\in\mathbb{N}$ with $n\ge 2$. Model the people in the room by the set

$$
A=\{0,1,\dots,n-1\}.
$$

Thus $|A|=n$. Each element of $A$ represents one person.

To model handshakes, define a relation

$$
H\subseteq A\times A
$$

where

$$
(a,b)\in H
\quad\text{means}\quad
\text{person $a$ has shaken person $b$'s hand.}
$$

The relation should satisfy two natural conditions:

- no one counts as shaking their own hand, so $(a,a)\notin H$ for every $a\in A$
- handshaking is symmetric, so if $(a,b)\in H$, then $(b,a)\in H$

Now define the function

$$
d:A\to \{0,1,\dots,n-1\}
$$

by

$$
d(a)=\left|\{b\in A\mid (a,b)\in H\}\right|.
$$

This function sends each person to the number of other people whose hands they have shaken.

This is the key modeling step. A proof that says only "consider a function $f:A\to B$" has not done enough. The function must be defined so its repeated outputs mean the repeated property in the original problem.

## Why The Obvious Codomain Is Not Small Enough

Each person can shake anywhere from $0$ to $n-1$ other people's hands, so the first natural codomain is

$$
D=\{0,1,\dots,n-1\}.
$$

But $|D|=n=|A|$. The pigeonhole principle does not force a function from an $n$-element domain to an $n$-element codomain to be non-injective.

To apply pigeonhole, the codomain must have fewer than $n$ possible values. The proof therefore needs one extra observation:

> **Observation.** In a room with $n\ge 2$ people, the handshake counts $0$ and $n-1$ cannot both occur.

If someone has handshake count $n-1$, they shook everyone else's hand. Then no person can have handshake count $0$. Conversely, if someone has handshake count $0$, then no one shook that person's hand, so no person has handshake count $n-1$.

This removes at least one possible output value.

## The Handshake Count Theorem

> **Theorem.** Let $n\in\mathbb{N}$ with $n\ge 2$. In any group of $n$ people, there exist two distinct people who have shaken the same number of other people's hands.

Proof:

Let $A=\{0,1,\dots,n-1\}$ represent the people in the room, and let $H\subseteq A\times A$ represent the handshake relation. Assume $H$ is symmetric and irreflexive.

Define

$$
d(a)=\left|\{b\in A\mid (a,b)\in H\}\right|
$$

for each $a\in A$.

Every value of $d$ lies in $\{0,1,\dots,n-1\}$.

There are two cases.

Case 1: Every person has shaken at least one other person's hand.

Then $d(a)\ne 0$ for every $a\in A$. So the image of $d$ is contained in

$$
\{1,2,\dots,n-1\}.
$$

This set has $n-1$ elements. Since $|A|=n>n-1$, the pigeonhole principle implies that $d$ is not injective. Therefore there exist distinct $a_1,a_2\in A$ such that

$$
d(a_1)=d(a_2).
$$

Case 2: Some person has shaken no one's hand.

Then there exists $a_0\in A$ such that $d(a_0)=0$. Since $H$ is symmetric, no one has shaken $a_0$'s hand. Therefore no person can have shaken all $n-1$ other people's hands. So $d(a)\ne n-1$ for every $a\in A$.

Thus the image of $d$ is contained in

$$
\{0,1,\dots,n-2\}.
$$

This set has $n-1$ elements. Since $|A|=n>n-1$, the pigeonhole principle again implies that $d$ is not injective. Therefore there exist distinct $a_1,a_2\in A$ such that

$$
d(a_1)=d(a_2).
$$

In either case, two distinct people have the same handshake count.

## Graph-Theory Translation

The same proof becomes shorter once the situation is stated as a graph theorem.

> **Definition.** A simple graph $G$ consists of a finite vertex set $V(G)$ and an edge set $E(G)$ where each edge is a two-element subset of $V(G)$.

People become vertices. A handshake between two people becomes an edge between the corresponding vertices.

> **Definition.** For a vertex $v\in V(G)$, the degree of $v$ is
>
> $$
> \deg_G(v)=|\{e\in E(G)\mid v\in e\}|.
> $$

Equivalently, in a simple graph, $\deg_G(v)$ is the number of neighbors of $v$.

> **Theorem.** If $G$ is a finite simple graph with $|V(G)|=n\ge 2$, then there exist distinct vertices $u,v\in V(G)$ such that
>
> $$
> \deg_G(u)=\deg_G(v).
> $$

The proof is the handshake proof with new language. The degree function

$$
\deg_G:V(G)\to \{0,1,\dots,n-1\}
$$

cannot use both values $0$ and $n-1$. Therefore its actual possible outputs fit into a set of size $n-1$, while the domain has size $n$. By pigeonhole, two vertices have the same degree.

## Proof-Writing Lessons

The hard part in this proof is not the final pigeonhole step. The hard part is setting up the right codomain.

Common proof pattern:

1. Define the function that records the desired property.
2. Start with a broad codomain.
3. Prove one output value is impossible, often by cases.
4. Replace the broad codomain by a smaller set of possible outputs.
5. Apply pigeonhole.
6. Translate equal outputs back into the original statement.

In the handshake proof, the broad codomain is $\{0,\dots,n-1\}$. The impossible-pair observation says $0$ and $n-1$ cannot both occur, so the actual outputs fit inside either $\{0,\dots,n-2\}$ or $\{1,\dots,n-1\}$.

## Common Confusions

### "Why not map people to people?"

Because equal outputs would mean two people map to the same person. The theorem asks for two people with the same number of handshakes, so the function must output handshake counts.

### "Why not use all natural numbers as the codomain?"

The function does land in $\mathbb{N}$, but $\mathbb{N}$ is much too large for pigeonhole to force non-injectivity. A useful codomain should be as small as the problem allows.

### "Why is $n\ge 2$ needed?"

The conclusion asks for two distinct people. If there is only one person, no such pair exists.

### "Why can $0$ and $n-1$ not both occur?"

If one person shook everyone else's hand, then every other person shook at least that person's hand. So no one has handshake count $0$.

### "Is this really a graph theorem?"

Yes. Once people are vertices and handshakes are edges, the handshake count is the degree of a vertex. The theorem becomes: every finite simple graph with at least two vertices has two vertices of the same degree.

## Core Summary

> Pigeonhole proofs require explicit modeling. In the handshake-count theorem, the function sends each person to the number of other people whose hands they shook. The possible counts appear to be $0,\dots,n-1$, but the counts $0$ and $n-1$ cannot both occur. Therefore the actual outputs fit into only $n-1$ possible values, while there are $n$ people. By the pigeonhole principle, two distinct people have the same handshake count.
