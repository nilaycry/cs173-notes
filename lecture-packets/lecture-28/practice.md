# Practice: The Pigeonhole Principle

## Definitions And Translations

### Problem 1

State the injective form of the pigeonhole principle.

Answer:

Let $A$ and $B$ be sets. If $|A|>|B|$, then for every function $f:A\to B$, the function $f$ is not injective.

Equivalently, for every $f:A\to B$, there exist $a_1,a_2\in A$ such that

$$
a_1\ne a_2
\quad\text{and}\quad
f(a_1)=f(a_2).
$$

### Problem 2

State the surjective form of the pigeonhole principle.

Answer:

Let $A$ and $B$ be sets. If $|A|<|B|$, then for every function $f:A\to B$, the function $f$ is not surjective.

Equivalently, for every $f:A\to B$, there exists $b\in B$ such that no $a\in A$ satisfies $f(a)=b$.

### Problem 3

Negate the definition of injective for a function $f:A\to B$.

Answer:

The injective statement is

$$
\forall a_1,a_2\in A,\quad
a_1\ne a_2\Rightarrow f(a_1)\ne f(a_2).
$$

Its negation is

$$
\exists a_1,a_2\in A
\quad
\bigl(a_1\ne a_2 \text{ and } f(a_1)=f(a_2)\bigr).
$$

So non-injective means two distinct inputs have the same output.

### Problem 4

Let $|A|=n$, $|B|=k$, and $n,k\in\mathbb{N}^+$. State the finite quantitative form of the pigeonhole principle.

Answer:

For every function $f:A\to B$, there exists $b\in B$ such that

$$
\left|\{a\in A\mid f(a)=b\}\right|
\ge
\left\lceil\frac{n}{k}\right\rceil.
$$

Equivalently,

$$
\left|\{a\in A\mid f(a)=b\}\right|
\ge
\left\lfloor\frac{n-1}{k}\right\rfloor+1.
$$

## Modeling Problems

### Problem 5

Suppose $13$ students are in a room. Prove that two students were born in the same month.

Solution:

Let $S$ be the set of students, so $|S|=13$. Let

$$
M=\{\text{January},\text{February},\dots,\text{December}\},
$$

so $|M|=12$.

Define $b:S\to M$ by sending each student to their birth month.

Since $|S|>|M|$, the pigeonhole principle says that $b$ is not injective. Therefore there exist distinct students $s_1,s_2\in S$ such that

$$
b(s_1)=b(s_2).
$$

Thus two students were born in the same month.

### Problem 6

Suppose $22$ files are assigned one of $5$ priority labels. Prove that some priority label is assigned to at least $5$ files.

Solution:

Let $F$ be the set of files, so $|F|=22$. Let $P$ be the set of priority labels, so $|P|=5$.

Define $p:F\to P$ by sending each file to its priority label.

By the finite quantitative pigeonhole principle, there exists $\ell\in P$ such that

$$
\left|\{f\in F\mid p(f)=\ell\}\right|
\ge
\left\lceil\frac{22}{5}\right\rceil
=5.
$$

So at least one priority label is assigned to at least $5$ files.

### Problem 7

A drawer contains socks in exactly three possible colors. Suppose $8$ socks are chosen. What is the strongest color-class size guaranteed by the finite pigeonhole principle?

Answer:

Model the chosen socks as a set $A$ with $|A|=8$, the colors as a set $C$ with $|C|=3$, and define $c:A\to C$ by sending each sock to its color.

The finite pigeonhole principle gives some color $r\in C$ such that

$$
\left|\{a\in A\mid c(a)=r\}\right|
\ge
\left\lceil\frac{8}{3}\right\rceil
=3.
$$

So some color appears on at least $3$ of the chosen socks.

### Problem 8

Let $A$ be a set of $9$ integers. Prove that two distinct elements of $A$ have the same remainder when divided by $8$.

Solution:

Let

$$
R=\{0,1,2,3,4,5,6,7\}.
$$

Define $r:A\to R$ by letting $r(a)$ be the remainder of $a$ after division by $8$.

Since $|A|=9$ and $|R|=8$, the pigeonhole principle says that $r$ is not injective. Therefore there exist distinct $a_1,a_2\in A$ such that

$$
r(a_1)=r(a_2).
$$

Thus $a_1$ and $a_2$ have the same remainder modulo $8$.

## Proof Practice

### Problem 9

Let $G$ be a finite simple graph with $n\ge 2$ vertices. Prove that two distinct vertices of $G$ have the same degree.

Solution:

Let

$$
d:V(G)\to \mathbb{N}
$$

be the degree function, $d(v)=\deg_G(v)$.

Every vertex degree lies between $0$ and $n-1$. However, $G$ cannot have both a degree $0$ vertex and a degree $n-1$ vertex. If a vertex has degree $n-1$, it is adjacent to every other vertex, so no vertex is isolated.

There are two cases.

If $G$ has an isolated vertex, then no vertex has degree $n-1$, so all degrees lie in

$$
\{0,1,\dots,n-2\}.
$$

If $G$ has no isolated vertex, then all degrees lie in

$$
\{1,2,\dots,n-1\}.
$$

In either case, the degree function maps the $n$ vertices of $G$ into a set of at most $n-1$ possible degree values. By the pigeonhole principle, $d$ is not injective.

Therefore there exist distinct $u,v\in V(G)$ such that

$$
d(u)=d(v).
$$

Hence

$$
\deg_G(u)=\deg_G(v).
$$

### Problem 10

Explain why the following proof is incomplete:

"There are $4$ socks and $3$ colors, so by pigeonhole two socks match."

Answer:

The proof has the right idea but does not define the function. A complete proof should say what set represents the socks, what set represents the colors, and what function sends each sock to its color.

The missing function matters because the pigeonhole principle is a theorem about functions. To conclude that two socks match, the repeated output must be a repeated color under the actual color function.

### Problem 11

Let $A$ be a set of $10$ people. Each person chooses one day of the week as a favorite day. Prove that some day is chosen by at least $2$ people.

Solution:

Let

$$
D=\{\text{Monday},\text{Tuesday},\dots,\text{Sunday}\}.
$$

Then $|D|=7$. Define $f:A\to D$ by sending each person to their favorite day.

By the finite pigeonhole principle, there exists $d\in D$ such that

$$
\left|\{a\in A\mid f(a)=d\}\right|
\ge
\left\lceil\frac{10}{7}\right\rceil
=2.
$$

So some day is chosen by at least $2$ people.

### Problem 12

Suppose $A$ and $B$ are finite sets with $|A|=6$ and $|B|=10$. What does the surjective form of the pigeonhole principle say about functions $f:A\to B$?

Answer:

Since $|A|<|B|$, every function $f:A\to B$ is not surjective.

So for every $f:A\to B$, there exists some $b\in B$ such that no $a\in A$ satisfies $f(a)=b$.
