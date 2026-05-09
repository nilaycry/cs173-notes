# Practice: Graph Degrees and the Degree-Sum Theorem

## Graph Definitions

### Problem 1

Let $V(G)=\{a,b,c\}$ and

$$
E(G)=\{\{a,b\},\{a,c\}\}.
$$

Compute $N_G(a)$, $I_G(a)$, and $\deg_G(a)$.

Answer:

The vertex $a$ is adjacent to $b$ and $c$, so

$$
N_G(a)=\{b,c\}.
$$

The edges incident to $a$ are both edges:

$$
I_G(a)=\{\{a,b\},\{a,c\}\}.
$$

Therefore

$$
\deg_G(a)=|I_G(a)|=2.
$$

### Problem 2

Why is $\{a,a\}$ not an edge in this graph formalism?

Answer:

As a set,

$$
\{a,a\}=\{a\}.
$$

This set has cardinality $1$, not $2$. Since every edge must be a two-element subset of $V(G)$, $\{a,a\}$ is not an edge.

### Problem 3

Suppose a drawing has three separate lines between $c$ and $d$. Why does the simple-graph edge set still contain only one edge between $c$ and $d$?

Answer:

The edge between $c$ and $d$ is represented by the set

$$
\{c,d\}.
$$

An edge set is a set, so listing $\{c,d\}$ multiple times does not create multiple elements. Simple graphs therefore cannot encode multiple edges between the same two vertices.

## Degree-Sum Computations

### Problem 4

Let a graph have vertex degrees

$$
3,3,2,2,2.
$$

How many edges does the graph have?

Answer:

The total degree sum is

$$
3+3+2+2+2=12.
$$

By the degree-sum theorem,

$$
12=2|E(G)|.
$$

So

$$
|E(G)|=6.
$$

### Problem 5

Can a graph have vertex degrees

$$
1,2,2,4?
$$

Answer:

No. The sum of the degrees would be

$$
1+2+2+4=9.
$$

But the degree-sum theorem says the total degree sum must equal $2|E(G)|$, which is even. Since $9$ is odd, no graph has exactly this degree list.

### Problem 6

Prove that every graph has an even number of odd-degree vertices.

Solution:

Let the odd-degree vertices have degrees

$$
d_1,d_2,\dots,d_m.
$$

The even-degree vertices contribute an even number to the total degree sum. By the degree-sum theorem, the total degree sum is also even:

$$
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
$$

Therefore

$$
d_1+d_2+\cdots+d_m
$$

must be even. A sum of $m$ odd integers is even exactly when $m$ is even. Hence the number of odd-degree vertices is even.

## Induction On Graphs

### Problem 7

State the degree-sum theorem as a statement suitable for induction on $|V(G)|$.

Answer:

Prove

$$
(\forall n\in\mathbb{N})(\forall G)\Bigl((G\text{ is a graph}\wedge |V(G)|=n)\Rightarrow
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|\Bigr).
$$

### Problem 8

In the inductive step, let $G$ be a graph with $|V(G)|=k+1$ and choose $x\in V(G)$. Define the smaller graph $H$.

Answer:

Define

$$
V(H)=V(G)\setminus\{x\}
$$

and

$$
E(H)=E(G)\setminus I_G(x).
$$

Equivalently,

$$
E(H)=\{e\in E(G)\mid x\notin e\}.
$$

This deletes $x$ and every edge incident to $x$.

### Problem 9

Let $v\in V(G)\setminus(N_G(x)\cup\{x\})$. Prove $\deg_G(v)=\deg_H(v)$.

Solution:

Since $v\notin N_G(x)$, there is no edge between $v$ and $x$.

Thus every edge incident to $v$ in $G$ is not incident to $x$. Those are exactly the incident edges of $v$ that remain in $H$.

Therefore

$$
I_G(v)=I_H(v),
$$

and hence

$$
\deg_G(v)=|I_G(v)|=|I_H(v)|=\deg_H(v).
$$

### Problem 10

Let $v\in N_G(x)$. Prove $\deg_G(v)=\deg_H(v)+1$.

Solution:

Since $v\in N_G(x)$,

$$
\{v,x\}\in E(G).
$$

Because the graph is simple, this is the unique edge containing both $v$ and $x$.

When $x$ is deleted, the edge $\{v,x\}$ is removed, and all other incident edges of $v$ remain. Thus

$$
I_G(v)=I_H(v)\cup\{\{v,x\}\}
$$

as a disjoint union. Therefore

$$
\deg_G(v)=|I_G(v)|=|I_H(v)|+1=\deg_H(v)+1.
$$

### Problem 11

Finish the final edge-count step in the degree-sum theorem proof. Assume the proof has reached

$$
\sum_{v\in V(G)}\deg_G(v)=2\deg_G(x)+2|E(H)|.
$$

Show this equals $2|E(G)|$.

Solution:

The edge set of $G$ is the disjoint union of:

- edges not incident to $x$, which are exactly $E(H)$
- edges incident to $x$, which are exactly $I_G(x)$

So

$$
|E(G)|=|E(H)|+|I_G(x)|.
$$

By definition,

$$
\deg_G(x)=|I_G(x)|.
$$

Therefore

$$
|E(G)|=|E(H)|+\deg_G(x).
$$

Multiplying by $2$ gives

$$
2|E(G)|=2|E(H)|+2\deg_G(x).
$$

Thus

$$
\sum_{v\in V(G)}\deg_G(v)=2|E(G)|.
$$
