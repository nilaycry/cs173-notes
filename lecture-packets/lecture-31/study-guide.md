# Lecture 31: Completing the Handshake Proof

## Big Picture

This lecture finishes the pigeonhole proof started in Lecture 29.

The theorem is:

> In any group of at least two people, two distinct people have shaken the same number of other people's hands.

The proof is a model for how pigeonhole arguments should be written. The theorem is not proved by saying "there are more people than counts" immediately. The possible counts first look like

$$
\{0,1,\dots,n-1\},
$$

which has the same size as the set of people. The work is to show that the actual set of counts is smaller.

## The Pigeonhole Target

> **Theorem.** Let $A$ and $B$ be sets. If $|A|>|B|$, then every function $f:A\to B$ is not injective.

To use this theorem, the proof needs a function

$$
f:A\to B
$$

where:

- $A$ is the set of people
- $B$ is the set of actual handshake counts
- $f(p)$ is the handshake count of person $p$

If $f$ is not injective, then there exist distinct $p_1,p_2\in A$ such that

$$
f(p_1)=f(p_2).
$$

That means the two people have the same handshake count.

## The Sets In The Model

Let $n\in\mathbb{N}$ with $n\ge 2$. Model the people by

$$
A=\{0,1,\dots,n-1\}.
$$

Thus $|A|=n$.

Let

$$
H\subseteq A\times A
$$

model handshakes, where

$$
(p,q)\in H
$$

means that person $p$ has shaken person $q$'s hand.

The model uses two assumptions:

- no self-handshakes: $(p,p)\notin H$ for every $p\in A$
- symmetry: if $(p,q)\in H$, then $(q,p)\in H$

The set of all possible handshake counts is

$$
D=\{0,1,\dots,n-1\}.
$$

The set of actual handshake counts is

$$
B=\left\{\left|\{q\in A\mid (p,q)\in H\}\right|\mid p\in A\right\}.
$$

Then define

$$
f:A\to B
$$

by

$$
f(p)=\left|\{q\in A\mid (p,q)\in H\}\right|.
$$

So $f(p)$ is the number of other people's hands that $p$ has shaken.

## Why The Codomain Is $B$, Not $D$

The function could be written as a function

$$
f:A\to D.
$$

That would be a valid function, but it would not help with pigeonhole because

$$
|A|=|D|=n.
$$

Pigeonhole needs a smaller codomain. The point of defining $B$ as the set of actual handshake counts is that we can prove

$$
|B|<|A|.
$$

Then the pigeonhole principle forces $f:A\to B$ to be non-injective.

This is a general proof-writing lesson:

> **Proof Move.** In a pigeonhole proof, choose the smallest codomain that still contains all actual outputs of the function.

## Case 1: No One Has Count Zero

Suppose every person has shaken at least one other person's hand. Then

$$
0\notin B.
$$

Since every handshake count is still in $D$, we have

$$
B\subseteq D\setminus\{0\}.
$$

The set $D\setminus\{0\}$ has $n-1$ elements. Therefore

$$
|B|\le n-1<n=|A|.
$$

So

$$
|A|>|B|.
$$

By pigeonhole, $f:A\to B$ is not injective.

## Case 2: Someone Has Count Zero

Now suppose there exists $p\in A$ such that

$$
f(p)=0.
$$

This means $p$ has shaken no one's hand. The goal is to prove that no one can have handshake count $n-1$.

> **Claim.** If some person has handshake count $0$, then $n-1\notin B$.

Proof of the claim:

Assume for contradiction that

$$
n-1\in B.
$$

Then there exists $u\in A$ such that

$$
f(u)=n-1.
$$

By definition,

$$
f(u)=\left|\{q\in A\mid (u,q)\in H\}\right|.
$$

The set

$$
\{q\in A\mid (u,q)\in H\}
$$

is a subset of $A\setminus\{u\}$, because $u$ cannot shake their own hand. Both sets have $n-1$ elements, so since they are finite and one is a subset of the other, they are equal:

$$
\{q\in A\mid (u,q)\in H\}=A\setminus\{u\}.
$$

Since $f(p)=0$ and $f(u)=n-1$, we have $p\ne u$. Therefore

$$
p\in A\setminus\{u\}.
$$

By the equality above,

$$
p\in \{q\in A\mid (u,q)\in H\}.
$$

So

$$
(u,p)\in H.
$$

By symmetry of handshakes,

$$
(p,u)\in H.
$$

Thus $p$ has shaken at least one person's hand, so

$$
f(p)>0.
$$

This contradicts $f(p)=0$. Therefore $n-1\notin B$.

Now return to the case. Since $n-1\notin B$ and $B\subseteq D$,

$$
B\subseteq D\setminus\{n-1\}.
$$

The set $D\setminus\{n-1\}$ has $n-1$ elements. Therefore

$$
|B|\le n-1<n=|A|.
$$

So again

$$
|A|>|B|.
$$

By pigeonhole, $f:A\to B$ is not injective.

## Completing The Proof

In both cases,

$$
|A|>|B|.
$$

Since $f:A\to B$, the pigeonhole principle says that $f$ is not injective. Therefore there exist $p_1,p_2\in A$ such that

$$
p_1\ne p_2
\quad\text{and}\quad
f(p_1)=f(p_2).
$$

By definition of $f$, this means $p_1$ and $p_2$ are two distinct people who have shaken the same number of other people's hands.

That proves the theorem.

## The Finite-Set Step

The proof uses a fact about finite sets:

> **Proposition.** If $X$ and $Y$ are finite sets, $X\subseteq Y$, and $|X|=|Y|$, then $X=Y$.

This is not true for arbitrary infinite sets. For example,

$$
\{0,2,4,6,\dots\}\subsetneq \mathbb{N},
$$

but both sets have the same cardinality.

The finite condition matters. In the handshake proof, the relevant sets are finite because they are subsets of the finite set $A$.

## Graph-Theory Meaning

The handshake theorem is a graph theorem in disguise.

> **Definition.** A simple graph $G$ has a vertex set $V(G)$ and an edge set $E(G)$, where each edge is a two-element subset of $V(G)$.

> **Definition.** For $v\in V(G)$, the degree $\deg_G(v)$ is the number of edges incident on $v$, equivalently the number of neighbors of $v$ in a simple graph.

People are vertices. Handshakes are edges. A person's handshake count is the degree of the corresponding vertex.

So the theorem becomes:

> **Theorem.** If $G$ is a finite simple graph with at least two vertices, then there exist distinct vertices $u,v\in V(G)$ such that
>
> $$
> \deg_G(u)=\deg_G(v).
> $$

The proof is the same: the degree values are in $\{0,\dots,n-1\}$, but values $0$ and $n-1$ cannot both occur.

## Common Confusions

### "Why not use $D$ as the codomain?"

You can, but it does not prove the theorem. Since $|D|=|A|$, pigeonhole does not force a collision. The proof needs the smaller set $B$ of actual counts.

### "Why does $f(u)=n-1$ mean $u$ shook everyone else's hand?"

The set of people whose hands $u$ shook is a subset of $A\setminus\{u\}$. Both sets have $n-1$ elements. Since the sets are finite, the subset must equal the whole set.

### "Where is symmetry used?"

Symmetry turns $(u,p)\in H$ into $(p,u)\in H$. Without symmetry, $u$ having $p$ as an output would not necessarily mean $p$ has shaken $u$'s hand.

### "What did this lecture add beyond Lecture 29?"

Lecture 29 set up the function and completed the easier case. This lecture finished the harder case, where someone has handshake count $0$, and then applied pigeonhole to complete the proof.

## Core Summary

> The handshake proof works by defining the handshake-count function $f:A\to B$, where $B$ is the set of actual counts. The possible count set $D=\{0,\dots,n-1\}$ is too large, but the actual count set omits either $0$ or $n-1$. Hence $|B|<|A|$, so pigeonhole forces $f$ to be non-injective. Equal outputs of $f$ are exactly equal handshake counts.
