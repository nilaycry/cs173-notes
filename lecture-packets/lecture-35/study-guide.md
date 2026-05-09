# Lecture 35: Graph Degrees and the Degree-Sum Theorem

## Big Picture

This lecture begins the graph-theory unit in earnest. The objects are finite simple graphs, and the first major theorem relates local information at vertices to the global number of edges:

> **Theorem.** For every finite simple graph $G$,
> $$
> \sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
> $$

The intuition is that every edge touches two vertices, so every edge contributes exactly twice to the total degree count. The proof is a model for induction on graphs: state the theorem as a quantified statement about $|V(G)|$, delete a vertex to obtain a smaller graph, apply the inductive hypothesis, then add back the deleted vertex and its incident edges.

## Simple Graphs

> **Definition.** A graph $G$ consists of a finite vertex set $V(G)$ and an edge set $E(G)$ such that
> $$
> E(G)\subseteq \{e\subseteq V(G)\mid |e|=2\}.
> $$

In this course, "graph" means finite simple undirected graph unless another kind of graph is explicitly named.

The definition forces three restrictions:

- no self-edges, because $\{v\}$ has cardinality $1$, not $2$
- no multiple edges, because $E(G)$ is a set, so repeating $\{v,w\}$ does not create a new edge
- no direction, because $\{v,w\}=\{w,v\}$

If $v,w\in V(G)$ and $\{v,w\}\in E(G)$, then $v$ and $w$ are adjacent.

## Neighborhoods, Incidence, and Degree

> **Definition.** Let $G$ be a graph and let $v\in V(G)$. The neighborhood of $v$ in $G$ is
> $$
> N_G(v)=\{w\in V(G)\mid \{v,w\}\in E(G)\}.
> $$

The neighborhood is a set of vertices.

> **Definition.** Let $G$ be a graph and let $v\in V(G)$. The incidence set of $v$ in $G$ is
> $$
> I_G(v)=\{e\in E(G)\mid v\in e\}.
> $$

The incidence set is a set of edges.

> **Definition.** The degree function of $G$ is
> $$
> \deg_G:V(G)\to\mathbb{N}
> $$
> defined by
> $$
> \deg_G(v)=|I_G(v)|.
> $$

In a simple graph,

$$
|N_G(v)|=|I_G(v)|.
$$

Each neighbor $w\in N_G(v)$ corresponds to the unique incident edge $\{v,w\}$, and each incident edge contains exactly one other endpoint.

## Order and Size

The order of a graph is the number of vertices:

$$
|V(G)|.
$$

The size of a graph usually means the number of edges:

$$
|E(G)|.
$$

Because "size" is sometimes used ambiguously, a careful proof should name the actual cardinality being used.

## The Degree-Sum Theorem

> **Theorem.** For every graph $G$,
> $$
> \sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
> $$

The proof below uses induction on the order $|V(G)|$.

Formally, prove:

$$
(\forall n\in\mathbb{N})(\forall G)\Bigl((G\text{ is a graph}\wedge |V(G)|=n)\Rightarrow
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|\Bigr).
$$

## Base Case

Assume $|V(G)|=0$. Then

$$
V(G)=\varnothing.
$$

Since every edge must be a two-element subset of $V(G)$, there are no possible edges. Thus

$$
E(G)=\varnothing.
$$

So

$$
2|E(G)|=2\cdot 0=0.
$$

The right side is an empty sum:

$$
\sum_{v\in V(G)}\deg_G(v)
=
\sum_{v\in\varnothing}\deg_G(v)
=0.
$$

Therefore the theorem holds for graphs of order $0$.

## Inductive Setup

Fix $k\in\mathbb{N}$ and assume:

> **Inductive Hypothesis.** For every graph $H$ with $|V(H)|=k$,
> $$
> \sum_{v\in V(H)}\deg_H(v)=2|E(H)|.
> $$

Now let $G$ be an arbitrary graph with

$$
|V(G)|=k+1.
$$

Since $k+1>0$, choose a vertex

$$
x\in V(G).
$$

Define a smaller graph $H$ by deleting $x$ and every edge incident to $x$:

$$
V(H)=V(G)\setminus\{x\},
$$

and

$$
E(H)=E(G)\setminus I_G(x)
=
\{e\in E(G)\mid x\notin e\}.
$$

Then

$$
|V(H)|=k,
$$

so the inductive hypothesis applies to $H$.

## Why Delete Instead of Add?

A tempting graph-induction proof starts with an arbitrary graph of order $k$ and adds a vertex. That is usually risky: adding a vertex requires choices about which new edges to add, and those choices may not represent every graph of order $k+1$.

The safer pattern is:

1. take an arbitrary graph $G$ of order $k+1$
2. remove a vertex or edge to build a smaller graph $H$
3. apply the inductive hypothesis to $H$
4. compare $G$ and $H$

This proves the statement for an arbitrary larger graph, not just for a graph built by a particular construction.

## Comparing Degrees After Deleting a Vertex

Deleting $x$ affects exactly the vertices that were adjacent to $x$.

If

$$
v\in V(G)\setminus (N_G(x)\cup\{x\}),
$$

then $v$ was not adjacent to $x$, so no edge incident to $v$ was deleted. Hence

$$
\deg_G(v)=\deg_H(v).
$$

If

$$
v\in N_G(x),
$$

then exactly one edge incident to $v$ was deleted, namely $\{v,x\}$. Because the graph is simple, there cannot be more than one such edge. Therefore

$$
\deg_G(v)=\deg_H(v)+1.
$$

Also,

$$
|N_G(x)|=|I_G(x)|=\deg_G(x).
$$

## Splitting the Sum

The vertex set decomposes as a disjoint union:

$$
V(G)=N_G(x)\cup\bigl(V(G)\setminus(N_G(x)\cup\{x\})\bigr)\cup\{x\}.
$$

Thus

$$
\sum_{v\in V(G)}\deg_G(v)
=
\sum_{v\in N_G(x)}\deg_G(v)
+
\sum_{v\in V(G)\setminus(N_G(x)\cup\{x\})}\deg_G(v)
+
\deg_G(x).
$$

Substitute the degree comparisons:

$$
\sum_{v\in V(G)}\deg_G(v)
=
\sum_{v\in N_G(x)}(1+\deg_H(v))
+
\sum_{v\in V(G)\setminus(N_G(x)\cup\{x\})}\deg_H(v)
+
\deg_G(x).
$$

Expand:

$$
\sum_{v\in V(G)}\deg_G(v)
=
|N_G(x)|
+
\sum_{v\in V(H)}\deg_H(v)
+
\deg_G(x).
$$

Since $|N_G(x)|=\deg_G(x)$,

$$
\sum_{v\in V(G)}\deg_G(v)
=
2\deg_G(x)+\sum_{v\in V(H)}\deg_H(v).
$$

By the inductive hypothesis,

$$
\sum_{v\in V(H)}\deg_H(v)=2|E(H)|.
$$

So

$$
\sum_{v\in V(G)}\deg_G(v)
=
2\deg_G(x)+2|E(H)|.
$$

## Recovering the Edge Count

The edge set of $G$ splits into two disjoint parts:

$$
E(G)=E(H)\cup I_G(x).
$$

The first part contains edges not incident to $x$. The second part contains edges incident to $x$.

Therefore

$$
|E(G)|=|E(H)|+|I_G(x)|.
$$

Since

$$
|I_G(x)|=\deg_G(x),
$$

we get

$$
|E(G)|=|E(H)|+\deg_G(x).
$$

Multiplying by $2$ gives

$$
2|E(G)|=2|E(H)|+2\deg_G(x).
$$

This matches the expression for the total degree sum. Hence

$$
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
$$

The inductive step is complete.

## Consequences

> **Corollary.** In every graph, the sum of all vertex degrees is even.

This follows because the sum is $2|E(G)|$.

> **Corollary.** Every graph has an even number of odd-degree vertices.

The sum of the even degrees is even. Since the total degree sum is even, the sum of the odd degrees must also be even. A sum of odd integers is even exactly when there are an even number of odd summands.

## Core Summary

Graphs in this unit are finite, simple, and undirected. Degrees count incident edges.

The degree-sum theorem says:

$$
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
$$

The proof habit is the important part: when inducting on graphs, take an arbitrary larger graph and delete structure to get a smaller graph. Then compare the quantities in the original graph and the smaller graph carefully.
