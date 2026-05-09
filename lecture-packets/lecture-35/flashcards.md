# Flashcards: Graph Degrees and the Degree-Sum Theorem

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What is a graph in this unit?

A: A finite vertex set $V(G)$ together with an edge set
$$
E(G)\subseteq\{e\subseteq V(G)\mid |e|=2\}.
$$

---

Q: Why are self-edges impossible in this definition of graph?

A: An edge must have cardinality $2$, but a self-edge would look like $\{v\}$, which has cardinality $1$.

---

Q: Why are multiple edges impossible in this definition of graph?

A: $E(G)$ is a set. Repeating the same edge $\{v,w\}$ does not create a new element.

---

Q: Why are the graphs undirected?

A: Edges are sets, and $\{v,w\}=\{w,v\}$.

---

Q: What is the neighborhood of $v$ in $G$?

A:
$$
N_G(v)=\{w\in V(G)\mid \{v,w\}\in E(G)\}.
$$

---

Q: What is the incidence set of $v$ in $G$?

A:
$$
I_G(v)=\{e\in E(G)\mid v\in e\}.
$$

---

Q: What is the degree of $v$ in $G$?

A:
$$
\deg_G(v)=|I_G(v)|.
$$

---

Q: What is the order of a graph?

A: The number of vertices, $|V(G)|$.

---

Q: What is the size of a graph, when the term is used in the usual graph-theory way?

A: The number of edges, $|E(G)|$.

## Theorems And Proof Moves

Q: State the degree-sum theorem.

A: For every graph $G$,
$$
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
$$

---

Q: What is the intuition behind the degree-sum theorem?

A: Each edge has two endpoints, so each edge contributes exactly $2$ to the total degree sum.

---

Q: What is the induction parameter in the lecture proof of the degree-sum theorem?

A: The number of vertices, $|V(G)|$.

---

Q: What is the base case for the degree-sum theorem proof?

A: Graphs with $|V(G)|=0$.

---

Q: Why does a graph with no vertices have no edges?

A: Every edge must be a two-element subset of $V(G)$, and the empty set has no two-element subsets.

---

Q: In the inductive step, how is the smaller graph $H$ built from $G$?

A: Choose $x\in V(G)$, set
$$
V(H)=V(G)\setminus\{x\},
$$
and
$$
E(H)=E(G)\setminus I_G(x).
$$

---

Q: If $v$ is not adjacent to $x$, how do $\deg_G(v)$ and $\deg_H(v)$ compare?

A:
$$
\deg_G(v)=\deg_H(v).
$$

---

Q: If $v\in N_G(x)$, how do $\deg_G(v)$ and $\deg_H(v)$ compare?

A:
$$
\deg_G(v)=\deg_H(v)+1.
$$

---

Q: Why is the change exactly $1$ for a neighbor of $x$?

A: In a simple graph, there is exactly one edge between $v$ and $x$.

---

Q: What edge-set identity finishes the induction proof?

A:
$$
E(G)=E(H)\cup I_G(x)
$$
as a disjoint union, so
$$
|E(G)|=|E(H)|+\deg_G(x).
$$

## Multiple Choice Drill

### MCQ 1

Which object is an edge in a simple graph?

A. An ordered pair $(v,w)$

B. A two-element subset $\{v,w\}$ of $V(G)$

C. A single vertex $\{v\}$

D. Any subset of $E(G)$

Answer: B

---

### MCQ 2

What kind of object is $N_G(v)$?

A. A set of vertices

B. A set of edges

C. A natural number

D. A graph

Answer: A

---

### MCQ 3

What kind of object is $I_G(v)$?

A. A set of vertices

B. A set of edges

C. A path

D. A cardinality theorem

Answer: B

---

### MCQ 4

Which equality holds in a simple graph?

A. $N_G(v)=I_G(v)$

B. $|N_G(v)|=|I_G(v)|$

C. $E(G)=V(G)$

D. $\deg_G(v)=v$

Answer: B

---

### MCQ 5

Why is deleting a vertex from an arbitrary graph of order $k+1$ often safer than adding a vertex to an arbitrary graph of order $k$?

A. Deleting vertices never changes degrees.

B. Adding a vertex requires choices and may not represent every graph of order $k+1$.

C. Graphs cannot have new vertices.

D. Induction cannot use vertices.

Answer: B

---

### MCQ 6

In the degree-sum proof, which vertices have their degree changed when $x$ is deleted?

A. All vertices

B. No vertices

C. Exactly the vertices in $N_G(x)$

D. Exactly the vertices outside $N_G(x)$

Answer: C

---

### MCQ 7

What does the degree-sum theorem imply about the number of odd-degree vertices?

A. It is odd.

B. It is even.

C. It is always zero.

D. It equals $|E(G)|$.

Answer: B
