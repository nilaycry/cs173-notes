# Lecture 36: Connectivity, Trees, and Spanning Trees

## Big Picture

Graph connectivity describes which vertices can reach which other vertices by following edges. Trees are the connected graphs with no redundant cyclic structure. The main target theorem is:

> Every connected graph contains a spanning tree.

That means if a graph is connected but has extra redundant edges, you can delete enough redundant edges to keep all vertices connected while removing every cycle. What remains is a tree touching every original vertex.

## Formal Definitions

### Walk

Let $G$ be a graph and let $k \in \mathbb{N}$. A walk of length $k$ on $G$ is a function

$$
w : k+1 \to V(G)
$$

such that, for every $i < k$,

$$
\{w(i),w(i+1)\} \in E(G).
$$

The length is the number of edges traveled, not the number of vertices listed.

### Path

A path of length $k$ on $G$ is an injective walk of length $k$ on $G$.

So if $p : k+1 \to V(G)$ is a path, then

$$
p(i)=p(j) \Rightarrow i=j.
$$

### Connected

A graph $G$ is connected iff every distinct pair of vertices is joined by a path.

Formally, for all $x,y \in V(G)$ with $x \ne y$, there exists some $m \in \mathbb{N}$ and a path

$$
p : m+1 \to V(G)
$$

such that

$$
p(0)=x
\quad\text{and}\quad
p(m)=y.
$$

### Tree

A graph is a tree iff it is connected and contains no cycles.

In proofs about connectedness, the domains matter. A typical proof starts by fixing a graph $G$ and taking $x,y \in V(G)$ with $x \ne y$.

## Core Vocabulary

### Graph

A graph is a way of modeling objects and connections.

- Vertices, also called nodes, are the objects.
- Edges are the connections between vertices.

In this lecture, graphs are simple undirected graphs.

### Walk

A walk is a sequence of vertices where every consecutive pair is connected by an edge.

Example:

```text
A, B, C, F
```

is a walk if `AB`, `BC`, and `CF` are edges.

Repeating vertices is allowed in a walk. You can go around in circles, backtrack, and revisit the same place.

Formally, a walk of length `k` can be viewed as a function

```text
w : {0, 1, ..., k} -> V
```

such that for every `i < k`, the pair `{w(i), w(i + 1)}` is an edge.

### Path

A path is a walk with no repeated vertices.

The lecture phrases this as:

> A path is an injective walk.

That means different positions in the sequence produce different vertices. You do not visit the same vertex twice.

Walks are loose. Paths are clean.

### Connected Graph

A graph is connected if every pair of vertices can reach each other by a path.

Formally:

```text
For all x, y in V, there exists a path from x to y.
```

You could also say "there exists a walk," because any walk from `x` to `y` can be simplified into a path from `x` to `y` by deleting loops.

### Connected Component

A connected component is a largest connected piece of a graph.

If a graph has two separate clusters of vertices with no edge between them, then it is disconnected and has at least two connected components.

### Cut Edge

A cut edge, also called a bridge in many graph theory texts, is an edge whose removal disconnects the graph.

If removing an edge breaks the only route between two parts of the graph, it is a cut edge.

If an edge lies on a cycle, it is not a cut edge, because the cycle gives another way around.

### Cycle

A cycle is like a path that returns to its starting vertex.

It starts and ends at the same vertex, and apart from that repeated endpoint, it does not repeat vertices.

The key property of a cycle:

> Between vertices on a cycle, there are two ways around.

So if you remove one edge from a cycle, the vertices on the cycle can still reach each other by going the other way around.

### Acyclic

A graph is acyclic if it has no cycles.

### Tree

A tree is a connected graph with no cycles.

This is the central definition:

```text
tree = connected + acyclic
```

Trees are minimally connected. They have just enough edges to connect everything, but no redundant edges.

### Forest

A forest is an acyclic graph that may be disconnected.

Equivalently, a forest is a collection of trees: each connected component is a tree.

So:

```text
tree   = one connected acyclic component
forest = zero or more acyclic components
```

### Spanning Tree

A subgraph `T` of a graph `G` is a spanning tree if:

1. `T` has the same vertices as `G`.
2. `T` is a tree.

So a spanning tree touches every vertex of the original graph, but may use fewer edges.

## Key Ideas From The Lecture

### 1. Walks Can Repeat; Paths Cannot

In a graph, there can be infinitely many walks between two vertices because you can loop around before eventually arriving.

But there are only finitely many paths in a finite graph, because a path cannot repeat vertices.

This is why connectivity is usually defined using paths. Paths capture real reachability without irrelevant wandering.

### 2. Walk Connectivity Implies Path Connectivity

If there is a walk from `x` to `y`, then there is also a path from `x` to `y`.

Reason:

If the walk repeats a vertex, the portion between the two repeats is a loop. Delete that loop. Keep doing this until no vertex repeats. The result is a path.

### 3. Edges on Cycles Are Redundant for Connectivity

Suppose an edge `e` lies on a cycle. If you delete `e`, the two endpoints of `e` are still connected by the rest of the cycle.

So deleting `e` does not destroy connectivity inside a connected graph.

This is the intuition behind stripping a connected graph down to a tree: every time you see a cycle, delete one edge from it.

### 4. Trees Are Minimally Connected

A tree has no cycles. Therefore, none of its edges are redundant.

If you remove any edge from a tree, the graph becomes disconnected.

Intuition:

If removing an edge did not disconnect the graph, then there would still be another path between that edge's endpoints. That alternate path plus the removed edge would form a cycle. But a tree has no cycles.

### 5. Connected Graphs Always Contain Spanning Trees

Main theorem:

```text
Every connected graph has a spanning tree.
```

Intuition:

Start with a connected graph `G`.

- If `G` has no cycles, then `G` is already a tree. Since it includes all its own vertices, it is its own spanning tree.
- If `G` has a cycle, remove one edge from that cycle. The graph stays connected.
- Repeat until no cycles remain.

The final graph is connected, has all the original vertices, and has no cycles. Therefore, it is a spanning tree.

## Proof Sketch: Every Connected Graph Has a Spanning Tree

The lecture frames this as an induction proof, naturally using the number of edges.

Claim:

For every connected graph `G`, there is a spanning tree of `G`.

Induct on the number of edges.

Base case:

If the graph has very few edges and is connected, it is already acyclic, so it is a tree and hence its own spanning tree.

Inductive step:

Assume every connected graph with `k` edges has a spanning tree.

Let `G` be a connected graph with `k + 1` edges.

There are two cases.

Case 1: `G` has no cycle.

Then `G` is connected and acyclic, so `G` is a tree. Therefore `G` is its own spanning tree.

Case 2: `G` has a cycle.

Pick an edge `e` on that cycle. Remove `e`.

By the cycle-removal theorem, `G - e` is still connected. It also has `k` edges.

By the inductive hypothesis, `G - e` has a spanning tree `T`.

Since removing `e` did not remove any vertices, `T` still spans all vertices of `G`. Also, `T` is still a subgraph of `G`.

Therefore, `T` is a spanning tree of `G`.

That completes the proof.

## Common Confusions

### "If a graph has no cycles, is it automatically a tree?"

No.

It might be disconnected. A disconnected acyclic graph is a forest, not a tree.

To be a tree, it must be both connected and acyclic.

### "If a graph is connected, is it automatically a tree?"

No.

It might contain cycles. A connected graph with cycles has extra edges.

### "Why remove an edge from a cycle?"

Because that kind of edge is safe to delete. The rest of the cycle still provides an alternate route.

Removing a random edge may disconnect the graph.

### "Does a spanning tree have all the edges of the original graph?"

No.

It has all the vertices, but usually fewer edges.

## Fast Mental Checklist

When you see a graph problem, ask:

1. Is the graph connected?
2. Does it have a cycle?
3. If connected and acyclic, it is a tree.
4. If acyclic but disconnected, it is a forest.
5. If connected but cyclic, it contains a spanning tree.
6. If an edge is on a cycle, removing it should preserve connectivity.
7. If an edge is the only route between two regions, it is a cut edge.

## Practice Problems

### Problem 1

In a graph, suppose there is a walk from `u` to `v`. Explain why there must be a path from `u` to `v`.

Answer:

If the walk repeats a vertex, remove the closed loop between the first and later occurrence of that vertex. This keeps the same start and end. Repeat until no vertices repeat. The resulting walk is a path from `u` to `v`.

### Problem 2

True or false: every acyclic graph is a tree.

Answer:

False. It also needs to be connected. A disconnected acyclic graph is a forest.

### Problem 3

True or false: every connected graph is a tree.

Answer:

False. A connected graph can contain cycles. A tree must be connected and acyclic.

### Problem 4

Why does removing an edge from a cycle preserve connectivity?

Answer:

The endpoints of the removed edge are still connected by the rest of the cycle. Any route that used the removed edge can be rerouted around the remaining part of the cycle.

### Problem 5

Let `G` be connected and contain a cycle. How can you create a smaller connected graph with the same vertices?

Answer:

Choose an edge on the cycle and remove it. The graph remains connected and has the same vertex set but one fewer edge.

### Problem 6

What is a spanning tree of `G`?

Answer:

A subgraph of `G` that contains every vertex of `G` and is a tree.

### Problem 7

Explain the proof strategy for showing every connected graph has a spanning tree.

Answer:

Use induction on the number of edges. If the graph has no cycle, it is already a tree. If it has a cycle, remove one edge from the cycle, preserving connectivity. Apply the inductive hypothesis to the smaller connected graph. Its spanning tree is also a spanning tree of the original graph.

## What You Should Be Able To Say Out Loud

By the end of this lecture, you should be able to say:

> A tree is a connected graph with no cycles. A spanning tree of a graph is a tree subgraph that includes all the vertices. Every connected graph has a spanning tree because whenever the graph has a cycle, we can delete an edge from that cycle without disconnecting the graph. Repeating this process leaves a connected acyclic graph on the same vertices, which is a spanning tree.
