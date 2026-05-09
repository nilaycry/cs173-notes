# Practice: Pigeonhole Modeling and Handshake Counts

## Definitions And Setup

### Problem 1

State the injective form of the pigeonhole principle.

Answer:

Let $A$ and $B$ be sets. If $|A|>|B|$, then every function $f:A\to B$ is not injective.

Equivalently, for every function $f:A\to B$, there exist $a_1,a_2\in A$ such that

$$
a_1\ne a_2
\quad\text{and}\quad
f(a_1)=f(a_2).
$$

### Problem 2

Let $A$ be a set of $n$ people. Define a function that records each person's handshake count.

Answer:

Let $H\subseteq A\times A$ be the handshake relation, where $(a,b)\in H$ means that person $a$ has shaken person $b$'s hand.

Define

$$
d:A\to \{0,1,\dots,n-1\}
$$

by

$$
d(a)=|\{b\in A\mid (a,b)\in H\}|.
$$

This sends each person to the number of other people whose hands they have shaken.

### Problem 3

Why is $\{0,1,\dots,n-1\}$ the first natural codomain for the handshake-count function?

Answer:

In a group of $n$ people, a person can shake no hands, giving count $0$, and can shake at most every other person's hand, giving count $n-1$. So every handshake count lies in

$$
\{0,1,\dots,n-1\}.
$$

### Problem 4

Explain why the counts $0$ and $n-1$ cannot both occur.

Answer:

If some person has count $n-1$, then that person shook every other person's hand. Since handshaking is symmetric, every other person has shaken at least that person's hand, so no person has count $0$.

Equivalently, if some person has count $0$, then no one shook that person's hand, so no person can have count $n-1$.

## Proof Practice

### Problem 5

Prove that in any group of $n\ge 2$ people, if everyone has shaken at least one other person's hand, then two people have the same handshake count.

Solution:

Let $A$ be the set of people, with $|A|=n$. Define

$$
d(a)=|\{b\in A\mid \text{$a$ has shaken $b$'s hand}\}|.
$$

Since everyone has shaken at least one other person's hand, $d(a)\ne 0$ for every $a\in A$. Also, no person can shake more than $n-1$ other people's hands.

Thus $d$ maps $A$ into

$$
\{1,2,\dots,n-1\},
$$

which has $n-1$ elements.

Since $|A|=n>n-1$, the pigeonhole principle implies that $d$ is not injective. Therefore there exist distinct people $a_1,a_2\in A$ such that

$$
d(a_1)=d(a_2).
$$

So two people have the same handshake count.

### Problem 6

Prove that in any group of $n\ge 2$ people, if some person has shaken no one's hand, then two people have the same handshake count.

Solution:

Let $A$ be the set of people, with $|A|=n$. Define $d:A\to \{0,1,\dots,n-1\}$ by sending each person to their handshake count.

Assume some person $a_0\in A$ has $d(a_0)=0$.

Then no person can have handshake count $n-1$. If some person had count $n-1$, that person would have shaken every other person's hand, including $a_0$'s hand. That would force $a_0$ to have shaken at least one hand, contradicting $d(a_0)=0$.

So every value of $d$ lies in

$$
\{0,1,\dots,n-2\},
$$

which has $n-1$ elements.

Since $|A|=n>n-1$, the pigeonhole principle implies that $d$ is not injective. Therefore two distinct people have the same handshake count.

### Problem 7

Prove the full handshake-count theorem.

Solution:

Let $A$ be the set of people, with $|A|=n\ge 2$. Define $d:A\to \{0,1,\dots,n-1\}$ by sending each person to the number of other people's hands they have shaken.

There are two cases.

Case 1: Everyone has shaken at least one hand.

Then the image of $d$ lies in $\{1,2,\dots,n-1\}$, a set of size $n-1$. Since the domain has size $n$, pigeonhole implies that $d$ is not injective.

Case 2: Some person has shaken no hands.

Then no one has handshake count $n-1$, so the image of $d$ lies in $\{0,1,\dots,n-2\}$, a set of size $n-1$. Since the domain has size $n$, pigeonhole implies that $d$ is not injective.

In either case, there exist distinct people $a_1,a_2\in A$ such that $d(a_1)=d(a_2)$. Thus two distinct people have the same handshake count.

### Problem 8

Translate the handshake-count theorem into graph language.

Answer:

Represent each person by a vertex and each handshake by an edge. The number of other people's hands a person has shaken becomes the degree of the corresponding vertex.

The theorem becomes:

If $G$ is a finite simple graph with at least two vertices, then there exist distinct vertices $u,v\in V(G)$ such that

$$
\deg_G(u)=\deg_G(v).
$$

### Problem 9

Prove that every finite simple graph with $n\ge 2$ vertices has two vertices of the same degree.

Solution:

Let $G$ be a finite simple graph with $|V(G)|=n\ge 2$. Consider the degree function

$$
d:V(G)\to \{0,1,\dots,n-1\},
\qquad
d(v)=\deg_G(v).
$$

If no vertex has degree $0$, then all degree values lie in $\{1,2,\dots,n-1\}$, which has $n-1$ elements. By pigeonhole, $d$ is not injective.

If some vertex has degree $0$, then no vertex has degree $n-1$. A degree $n-1$ vertex would be adjacent to every other vertex, including the degree $0$ vertex, which is impossible. Thus all degree values lie in $\{0,1,\dots,n-2\}$, which has $n-1$ elements. By pigeonhole, $d$ is not injective.

In either case, there exist distinct vertices $u,v\in V(G)$ with

$$
\deg_G(u)=\deg_G(v).
$$

### Problem 10

Why is the following proof incomplete?

"Map each person to a natural number. Since there are finitely many people, two people map to the same number."

Answer:

The proof does not define the function precisely, and the codomain $\mathbb{N}$ is too large for pigeonhole to force a collision.

A complete proof must define the function as the handshake-count function and then show that its actual possible outputs fit into a set of size $n-1$.

### Problem 11

Suppose a room has $8$ people and everyone has shaken at least one other person's hand. What smaller codomain can be used for the handshake-count function?

Answer:

Since everyone has shaken at least one hand, count $0$ is impossible. The handshake-count function maps into

$$
\{1,2,3,4,5,6,7\}.
$$

This set has $7$ elements, while there are $8$ people.

### Problem 12

Suppose a room has $8$ people and some person has shaken no one's hand. What smaller codomain can be used for the handshake-count function?

Answer:

If some person has count $0$, then count $7$ is impossible. The handshake-count function maps into

$$
\{0,1,2,3,4,5,6\}.
$$

This set has $7$ elements, while there are $8$ people.
