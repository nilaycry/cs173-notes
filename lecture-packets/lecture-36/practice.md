# Practice: Connectivity, Trees, and Spanning Trees

## Definitions

### Problem 1

Let $G$ be a graph and let $k \in \mathbb{N}$. State the formal definition of a walk of length $k$ on $G$.

Answer:

A walk of length $k$ on $G$ is a function

$$
w:k+1\to V(G)
$$

such that for every $i<k$,

$$
\{w(i),w(i+1)\}\in E(G).
$$

### Problem 2

What extra condition turns a walk into a path?

Answer:

A path is an injective walk. So if

$$
p:k+1\to V(G)
$$

is a path, then for all $i,j\in k+1$,

$$
p(i)=p(j)\Rightarrow i=j.
$$

### Problem 3

State the definition of connectedness for a graph $G$.

Answer:

The graph $G$ is connected iff for every $x,y\in V(G)$ with $x\ne y$, there exists a path from $x$ to $y$.

### Problem 4

State the definition of a tree.

Answer:

A graph is a tree iff it is connected and contains no cycles.

## Concept Checks

### Problem 5

Is every acyclic graph a tree?

Answer:

No. An acyclic graph may be disconnected. A disconnected acyclic graph is a forest, not a tree.

### Problem 6

Is every connected graph a tree?

Answer:

No. A connected graph may contain cycles. A tree must be connected and acyclic.

### Problem 7

Why can an edge on a cycle be removed without disconnecting the graph?

Answer:

If an edge lies on a cycle, then its endpoints are still connected by the rest of the cycle. Any path that used that edge can be rerouted around the remaining part of the cycle.

### Problem 8

What is a cut edge?

Answer:

A cut edge is an edge whose removal disconnects the graph.

## Proof Practice

### Problem 9

Prove that if there is a walk from $x$ to $y$ in a graph $G$, then there is a path from $x$ to $y$ in $G$.

Solution:

Start with a walk from $x$ to $y$. If no vertex repeats, the walk is already a path.

If some vertex repeats, remove the closed part of the walk between the first occurrence and the later occurrence of that vertex. This keeps the same start and end vertices and produces a shorter walk.

Repeat this loop-removal process until no vertex repeats. Since the original walk is finite, the process terminates. The resulting walk is a path from $x$ to $y$.

### Problem 10

Prove that if $T$ is a tree and $e\in E(T)$, then removing $e$ disconnects $T$.

Solution:

Let $e=\{u,v\}$. Suppose, for contradiction, that $T-e$ is still connected.

Then there is a path from $u$ to $v$ in $T-e$. Adding the edge $e$ to that path creates a cycle in $T$.

But $T$ is a tree, so $T$ has no cycles. This contradiction shows that $T-e$ is disconnected.

### Problem 11

Let $G$ be connected and suppose $G$ contains a cycle. Explain how to create a connected graph with the same vertices and fewer edges.

Answer:

Choose an edge $e$ on the cycle and remove it. The graph $G-e$ has the same vertex set as $G$, has one fewer edge, and remains connected because the rest of the cycle still connects the endpoints of $e$.

### Problem 12

Prove that every connected graph contains a spanning tree.

Solution:

Use induction on the number of edges.

Let $G$ be connected. If $G$ has no cycles, then $G$ is connected and acyclic, so $G$ is a tree. Since it contains all its own vertices, $G$ is a spanning tree of itself.

If $G$ contains a cycle, choose an edge $e$ on that cycle. Removing $e$ preserves connectedness and does not remove any vertices. By applying the inductive hypothesis to $G-e$, we get a spanning tree $T$ of $G-e$.

Since $V(G-e)=V(G)$ and every edge of $T$ is also an edge of $G$, the same tree $T$ is a spanning tree of $G$.
