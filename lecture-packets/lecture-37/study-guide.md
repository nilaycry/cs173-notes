# Lecture 37: The Pigeonhole Principle

## Big Picture

The pigeonhole principle turns a size comparison into a statement about functions.

If too many inputs are assigned to too few outputs, then two different inputs must share an output. In proof language, that means the function cannot be injective. If too few inputs are assigned to too many possible outputs, then at least one output is missed. In proof language, that means the function cannot be surjective.

The main habit is modeling. Before applying the theorem, choose:

- the domain, meaning the objects being assigned
- the codomain, meaning the possible labels, buckets, residues, colors, or degrees
- the function that sends each object to the property being compared

The theorem proves a statement about that function. The final step translates non-injectivity or non-surjectivity back into the original problem.

## Cardinality Comparisons As Function Statements

Cardinality comparisons are not just arithmetic symbols. They are statements about the existence or nonexistence of functions with particular properties.

> **Definition.** For sets $A$ and $B$, the statement $|A|\le |B|$ means that there exists an injective function $f:A\to B$.

> **Definition.** For sets $A$ and $B$, the statement $|A|=|B|$ means that there exists a bijective function $f:A\to B$.

For finite sets, this agrees with ordinary comparison of natural numbers. If $|A|=4$ and $|B|=3$, then $|A|>|B|$ in the usual numerical sense. The function language matters because the same ideas are used later for infinite sets, where ordinary finite counting intuition is not enough.

For example, the function

$$
f:\mathbb{N}\to \mathbb{N},\qquad f(x)=2x
$$

is injective but not surjective. This does not prove that $\mathbb{N}$ is strictly smaller than itself. It proves only that one particular injection misses some values. For infinite sets, the existence of an injective non-surjective function is not enough by itself to establish strict inequality.

## Non-Injectivity Means A Shared Output

The most common pigeonhole conclusion is that two different objects have the same property. That conclusion is exactly the negation of injectivity.

> **Definition.** A function $f:A\to B$ is injective if, for all $a_1,a_2\in A$,
>
> $$
> a_1\ne a_2 \Rightarrow f(a_1)\ne f(a_2).
> $$

Negating this statement gives:

$$
\exists a_1,a_2\in A
\quad
\bigl(a_1\ne a_2 \text{ and } f(a_1)=f(a_2)\bigr).
$$

So if a proof shows that $f$ is not injective, it has shown that two distinct inputs land at the same output.

This is the reusable proof move:

1. Build a function whose output records the property of interest.
2. Use a size comparison to show the function is not injective.
3. Translate the repeated output back into the original language.

## The Pigeonhole Principle

> **Theorem.** Let $A$ and $B$ be sets.
>
> If $|A|>|B|$, then every function $f:A\to B$ is not injective.
>
> If $|A|<|B|$, then every function $f:A\to B$ is not surjective.

The first statement says that a larger domain cannot be assigned into a smaller codomain with all outputs distinct.

The second statement says that a smaller domain cannot cover a larger codomain.

The names "pigeons" and "holes" are only a memory aid. The mathematical object is a function. The inputs are the objects being assigned, and the outputs are the buckets or labels.

## Modeling A Sock Problem

Suppose four distinct socks are chosen, and every sock has one of three colors. To prove that two socks have the same color, use a function.

Let

$$
A=\{s_1,s_2,s_3,s_4\}
$$

represent the chosen socks, and let

$$
C=\{\text{black},\text{green},\text{brown}\}
$$

represent the possible colors. Define

$$
c:A\to C
$$

by sending each sock to its color.

Since $|A|=4$ and $|C|=3$, the pigeonhole principle says that $c$ is not injective. Therefore there exist distinct socks $s_i,s_j\in A$ such that

$$
c(s_i)=c(s_j).
$$

That equality says exactly that the two socks have the same color.

The proof depends on using the relevant function. An arbitrary function $A\to C$ might not represent the real colors of the socks. The theorem applies to every function, but the translation back to the original problem uses the particular function whose output is the color.

## The Finite Quantitative Version

For finite sets, the pigeonhole principle also gives a lower bound on how crowded one output must be.

> **Theorem.** Let $A$ and $B$ be finite sets. Suppose $n,k\in\mathbb{N}^+$, $|A|=n$, and $|B|=k$. For every function $f:A\to B$, there exists some $b\in B$ such that
>
> $$
> \left|\{a\in A\mid f(a)=b\}\right|
> \ge
> \left\lfloor\frac{n-1}{k}\right\rfloor+1
> =
> \left\lceil\frac{n}{k}\right\rceil.
> $$

The set

$$
\{a\in A\mid f(a)=b\}
$$

is the fiber over $b$. It is the collection of all inputs assigned to the same output $b$.

Example: if $8$ socks are assigned to $3$ possible colors, then some color has at least

$$
\left\lceil\frac{8}{3}\right\rceil=3
$$

socks of that color.

This is stronger than merely saying that two socks share a color. It says that one color class must contain at least three socks.

## How To Write A Pigeonhole Proof

A good pigeonhole proof should not begin and end with "by pigeonhole." It should identify the function.

Use this structure:

1. Define the set $A$ of objects.
2. Define the set $B$ of possible labels or properties.
3. Define $f:A\to B$ by the property being tracked.
4. Compare $|A|$ and $|B|$.
5. Apply the pigeonhole principle to $f$.
6. Translate the conclusion about $f$ back into the statement being proved.

For a repeated-property claim, the translation usually looks like:

$$
f(a_1)=f(a_2)
\quad\Rightarrow\quad
\text{$a_1$ and $a_2$ have the same tracked property.}
$$

For a missed-output claim, the translation usually looks like:

$$
b\notin \operatorname{im}(f)
\quad\Rightarrow\quad
\text{the label $b$ is not used by any object.}
$$

## Example: Equal Degrees In A Graph

The pigeonhole principle often proves existence statements in graph theory.

> **Proposition.** Let $G$ be a finite simple graph with $n\ge 2$ vertices. Then there exist distinct vertices $u,v\in V(G)$ such that
>
> $$
> \deg_G(u)=\deg_G(v).
> $$

Proof sketch:

Let

$$
d:V(G)\to \mathbb{N}
$$

be the degree function, $d(v)=\deg_G(v)$.

Each vertex degree is between $0$ and $n-1$. However, a graph cannot have both a vertex of degree $0$ and a vertex of degree $n-1$. If some vertex is adjacent to every other vertex, then no vertex is isolated. If some vertex is isolated, then no vertex is adjacent to every other vertex.

So the degree values actually used lie in one of the following sets:

$$
\{0,1,\dots,n-2\}
\quad\text{or}\quad
\{1,2,\dots,n-1\}.
$$

Each set has $n-1$ possible values. Thus $d$ assigns $n$ vertices to at most $n-1$ possible degree values. By the pigeonhole principle, $d$ is not injective. Therefore there exist distinct $u,v\in V(G)$ such that $d(u)=d(v)$, which means

$$
\deg_G(u)=\deg_G(v).
$$

## Common Confusions

### "Can I apply the theorem without defining a function?"

Not in a complete proof. The theorem is a statement about functions. The proof must say what the inputs are, what the outputs are, and what function sends each input to its output.

### "Does non-injective always mean there is a matching pair?"

It means two distinct inputs share the same output. Whether that is a "matching pair" depends on what the function records. If the function records sock color, then a repeated output means two socks have the same color.

### "Why is the codomain part of the proof?"

The codomain is the set of possible labels. Its size is the number of buckets. A wrong codomain gives the wrong size comparison and may not prove the intended claim.

### "Why does the finite version use a ceiling?"

If $n$ inputs are distributed among $k$ outputs, the most even distribution still forces one output to receive at least $\lceil n/k\rceil$ inputs. The ceiling is needed because a fractional number of inputs is impossible.

## Core Summary

> The pigeonhole principle says that a larger domain cannot be injected into a smaller codomain, and a smaller domain cannot surject onto a larger codomain. In finite form, any function from an $n$-element set to a $k$-element set has some fiber of size at least $\lceil n/k\rceil$. The main proof skill is modeling: define the function whose output records the property you want two objects to share, then translate non-injectivity back into the original statement.
