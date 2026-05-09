# Practice: Completing the Handshake Proof

## Definitions And Setup

### Problem 1

Let $A=\{0,1,\dots,n-1\}$ model a group of $n\ge 2$ people. Define the handshake-count function using a relation $H\subseteq A\times A$.

Answer:

Define

$$
f:A\to B
$$

by

$$
f(p)=|\{q\in A\mid (p,q)\in H\}|.
$$

Here $(p,q)\in H$ means person $p$ has shaken person $q$'s hand, and $B$ is the set of actual handshake counts.

### Problem 2

What are the sets $D$ and $B$ in the handshake proof, and how are they related?

Answer:

The set

$$
D=\{0,1,\dots,n-1\}
$$

is the set of all possible handshake counts.

The set $B$ is the set of actual handshake counts:

$$
B=\{f(p)\mid p\in A\}.
$$

Since every actual count is possible,

$$
B\subseteq D.
$$

### Problem 3

Why is the codomain $D$ too large for the pigeonhole step?

Answer:

Since

$$
|D|=n=|A|,
$$

the pigeonhole principle does not imply that a function $A\to D$ is non-injective. To force non-injectivity, the proof needs a codomain with fewer than $n$ elements.

## Proof Practice

### Problem 4

Prove that if every person has shaken at least one other person's hand, then $|B|<|A|$.

Solution:

If every person has shaken at least one hand, then $0$ is not an actual handshake count. Thus

$$
0\notin B.
$$

Since $B\subseteq D=\{0,1,\dots,n-1\}$, it follows that

$$
B\subseteq D\setminus\{0\}.
$$

The set $D\setminus\{0\}$ has $n-1$ elements. Therefore

$$
|B|\le n-1<n=|A|.
$$

So $|B|<|A|$.

### Problem 5

Assume there exists $p\in A$ such that $f(p)=0$. Prove that $n-1\notin B$.

Solution:

Suppose, for contradiction, that $n-1\in B$.

Then there exists $u\in A$ such that

$$
f(u)=n-1.
$$

The set

$$
S=\{q\in A\mid (u,q)\in H\}
$$

is a subset of $A\setminus\{u\}$, because no one shakes their own hand. Also,

$$
|S|=f(u)=n-1=|A\setminus\{u\}|.
$$

Since the sets are finite and $S\subseteq A\setminus\{u\}$ with equal cardinality,

$$
S=A\setminus\{u\}.
$$

Since $f(p)=0$ and $f(u)=n-1$, and $n\ge 2$, we have $p\ne u$. Hence

$$
p\in A\setminus\{u\}=S.
$$

So $(u,p)\in H$. By symmetry, $(p,u)\in H$. Therefore $p$ has shaken at least one person's hand, contradicting $f(p)=0$.

Thus $n-1\notin B$.

### Problem 6

Finish the handshake-count theorem using the two cases.

Solution:

Let $A$ be the set of $n\ge 2$ people and let $B$ be the set of actual handshake counts. Define $f:A\to B$ by sending each person to their handshake count.

There are two cases.

Case 1: Everyone has shaken at least one hand. Then $0\notin B$, so

$$
B\subseteq \{1,2,\dots,n-1\}.
$$

Therefore $|B|\le n-1<n=|A|$.

Case 2: Some person has shaken no hands. By Problem 5, $n-1\notin B$, so

$$
B\subseteq \{0,1,\dots,n-2\}.
$$

Therefore $|B|\le n-1<n=|A|$.

In either case, $|A|>|B|$. By the pigeonhole principle, $f:A\to B$ is not injective. Thus there exist distinct $p_1,p_2\in A$ such that

$$
f(p_1)=f(p_2).
$$

So two distinct people have the same handshake count.

### Problem 7

Explain where the finite-set fact "a finite subset with the same size as the whole set must equal the whole set" is used in the proof.

Answer:

It is used when $f(u)=n-1$.

The set

$$
\{q\in A\mid (u,q)\in H\}
$$

is a subset of $A\setminus\{u\}$. Both sets have $n-1$ elements. Since they are finite, the subset must equal $A\setminus\{u\}$.

This lets us conclude that $u$ shook every other person's hand.

### Problem 8

Give an infinite-set example showing that $X\subseteq Y$ and $|X|=|Y|$ do not always imply $X=Y$.

Answer:

Let

$$
X=\{0,2,4,6,\dots\}
$$

and

$$
Y=\mathbb{N}.
$$

Then $X\subsetneq Y$, but $|X|=|Y|$ because the function

$$
f:\mathbb{N}\to X,\qquad f(n)=2n
$$

is a bijection.

### Problem 9

Translate the handshake-count theorem into graph theory language.

Answer:

People become vertices, and handshakes become edges. The handshake count of a person becomes the degree of a vertex.

The theorem becomes:

If $G$ is a finite simple graph with at least two vertices, then there exist distinct vertices $u,v\in V(G)$ such that

$$
\deg_G(u)=\deg_G(v).
$$

### Problem 10

Prove the graph version: every finite simple graph with at least two vertices has two vertices of the same degree.

Solution:

Let $G$ be a finite simple graph with $|V(G)|=n\ge 2$. Define

$$
d:V(G)\to \{0,1,\dots,n-1\}
$$

by

$$
d(v)=\deg_G(v).
$$

Let $B=\{d(v)\mid v\in V(G)\}$ be the set of actual degree values.

If no vertex has degree $0$, then $B\subseteq \{1,2,\dots,n-1\}$, so $|B|\le n-1$.

If some vertex has degree $0$, then no vertex has degree $n-1$, because a degree $n-1$ vertex would be adjacent to every other vertex, including the degree-$0$ vertex. Thus $B\subseteq \{0,1,\dots,n-2\}$, so $|B|\le n-1$.

In either case, $|V(G)|=n>|B|$. By pigeonhole, $d$ is not injective. Therefore there exist distinct vertices $u,v\in V(G)$ such that

$$
d(u)=d(v),
$$

which means

$$
\deg_G(u)=\deg_G(v).
$$
