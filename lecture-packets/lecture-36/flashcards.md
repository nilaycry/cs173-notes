# Flashcards: Connectivity, Trees, and Spanning Trees

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What is a walk in a graph?

A: Let $G$ be a graph and $k \in \mathbb{N}$. A walk of length $k$ is a function $w:k+1 \to V(G)$ such that for every $i<k$, $\{w(i),w(i+1)\}\in E(G)$. Repeated vertices are allowed.

---

Q: What is a path?

A: A walk with no repeated vertices; formally, an injective walk.

---

Q: What does it mean for a graph to be connected?

A: For every distinct $x,y \in V(G)$, there exists a path from $x$ to $y$.

---

Q: What is a connected component?

A: A largest connected subgraph/piece of a graph.

---

Q: What is a cycle?

A: A path-like closed route that starts and ends at the same vertex, with no other repeated vertices.

---

Q: What does acyclic mean?

A: Having no cycles.

---

Q: What is a tree?

A: A connected acyclic graph.

---

Q: What domain sentence should appear before proving a connectedness claim?

A: Let $G$ be a graph, and let $x,y \in V(G)$ with $x \ne y$.

---

Q: What is a forest?

A: An acyclic graph, possibly disconnected; each connected component is a tree.

---

Q: What is a spanning tree of a graph `G`?

A: A subgraph of `G` that contains all vertices of `G` and is a tree.

---

Q: What is a cut edge?

A: An edge whose removal disconnects the graph.

## Theorems and Ideas

Q: Why can every walk from `x` to `y` be turned into a path from `x` to `y`?

A: Delete loops created by repeated vertices until no vertex repeats.

---

Q: Why is an edge on a cycle redundant for connectivity?

A: If that edge is removed, the rest of the cycle still connects its endpoints.

---

Q: Why does a tree become disconnected if you remove any edge?

A: If it stayed connected, there would be another path between the edge's endpoints, which together with the removed edge would form a cycle.

---

Q: Why is "acyclic" alone not enough to be a tree?

A: The graph might be disconnected. Then it is a forest, not a tree.

---

Q: Why is "connected" alone not enough to be a tree?

A: The graph might contain cycles.

---

Q: State the main theorem from the lecture.

A: Every connected graph contains a spanning tree.

---

Q: What is the proof strategy for the spanning tree theorem?

A: Induct on the number of edges. If there is no cycle, the graph is already a tree. If there is a cycle, remove one edge from it, preserve connectivity, then apply induction.

---

Q: In the induction proof, why remove an edge instead of a vertex?

A: Removing an edge keeps the same vertex set, so a spanning tree of the smaller graph still spans the original graph.

---

Q: In the induction proof, why can we not remove an arbitrary edge?

A: Some edges are cut edges. Removing one could disconnect the graph, making the inductive hypothesis unusable.

---

Q: If a connected graph has no cycles, what is its spanning tree?

A: The graph itself.

---

Q: If a connected graph has cycles, what is the high-level algorithm for finding a spanning tree?

A: Repeatedly remove an edge from a cycle until no cycles remain.

## Multiple Choice Drill

### MCQ 1

Which statement best describes a walk?

A. A sequence of vertices where consecutive vertices are adjacent, with repeats allowed.

B. A sequence of vertices where no vertex repeats.

C. A connected graph with no cycles.

D. A graph containing all possible edges.

Answer: A

---

### MCQ 2

What is the difference between a walk and a path?

A. A walk uses edges, but a path does not.

B. A path is a walk with no repeated vertices.

C. A walk must start and end at the same vertex.

D. A path must contain every vertex of the graph.

Answer: B

---

### MCQ 3

Which condition is enough to prove that a graph is a tree?

A. It is connected.

B. It is acyclic.

C. It is connected and acyclic.

D. It has at least one path.

Answer: C

---

### MCQ 4

If a graph is acyclic but disconnected, what is it called?

A. A tree.

B. A forest.

C. A spanning tree.

D. A cycle.

Answer: B

---

### MCQ 5

Why can an edge on a cycle be removed without disconnecting a connected graph?

A. Cycles are never part of connected graphs.

B. The endpoints of that edge are still connected by the rest of the cycle.

C. Removing any edge from any connected graph preserves connectedness.

D. A cycle contains no vertices.

Answer: B

---

### MCQ 6

What is a cut edge?

A. An edge whose removal disconnects the graph.

B. An edge that lies on a cycle.

C. An edge whose endpoints are equal.

D. An edge that appears in every graph.

Answer: A

---

### MCQ 7

What must a spanning tree of a graph `G` contain?

A. Every edge of `G`.

B. Every vertex of `G`.

C. Every cycle of `G`.

D. Only the vertices of degree 1.

Answer: B

---

### MCQ 8

In the proof that every connected graph has a spanning tree, why is induction on the number of edges useful?

A. Removing an edge keeps the same vertex set.

B. Removing an edge always preserves connectedness.

C. Graphs cannot be inducted on by vertices.

D. Every graph has exactly one edge.

Answer: A

---

### MCQ 9

In the induction proof, why can we not remove an arbitrary edge?

A. Some edges may be cut edges, so removing them can disconnect the graph.

B. Edges cannot be removed from graphs.

C. Removing an edge always creates a new vertex.

D. Only vertices can appear in cycles.

Answer: A

---

### MCQ 10

If a connected graph has no cycles, what is its spanning tree?

A. It has no spanning tree.

B. The graph itself.

C. Any single vertex.

D. The graph with all vertices removed.

Answer: B
