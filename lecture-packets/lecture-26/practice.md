# Practice: Cardinality Through Functions

## Function Checks

### Problem 1

Suppose a proposed function is given by

$$
f:\mathbb{Z}\times\mathbb{Z}\to\mathbb{N}^+
$$

with

$$
f(x,y)=\gcd(x,y).
$$

Explain why this may fail to be a function if $\gcd(0,0)=0$.

Answer:

The input $(0,0)$ belongs to $\mathbb{Z}\times\mathbb{Z}$. If $f(0,0)=0$, then the output is not in the codomain $\mathbb{N}^+$, since $0\notin\mathbb{N}^+$. Therefore this proposed map does not assign every input an output in the codomain.

### Problem 2

Suppose $\gcd(m,n)=1$. Prove that every integer is an integer linear combination of $m$ and $n$.

Solution:

Since $\gcd(m,n)=1$, Bezout's identity gives integers $a,b\in\mathbb{Z}$ such that

$$
ma+nb=1.
$$

Let $z\in\mathbb{Z}$. Multiply both sides by $z$:

$$
z(ma+nb)=z.
$$

So

$$
m(za)+n(zb)=z.
$$

Since $za,zb\in\mathbb{Z}$, the integer $z$ is an integer linear combination of $m$ and $n$.

## Injectivity and Surjectivity

### Problem 3

Let $A=\{1,2,3\}$ and $B=\{a,b,c,d\}$. Define

$$
f:A\to B
$$

by

$$
f(1)=a,\quad f(2)=b,\quad f(3)=c.
$$

Is $f$ injective? Is $f$ surjective?

Answer:

The function is injective because no two distinct inputs have the same output.

It is not surjective because $d\in B$ is not hit by any element of $A$.

### Problem 4

Let $A=\{1,2,3\}$ and $B=\{a,b\}$. Define

$$
g:A\to B
$$

by

$$
g(1)=a,\quad g(2)=a,\quad g(3)=b.
$$

Is $g$ injective? Is $g$ surjective?

Answer:

The function is not injective because $1\ne 2$ but $g(1)=g(2)=a$.

It is surjective because both elements of $B$ are hit: $a=g(1)$ and $b=g(3)$.

## Cardinality Proofs

### Problem 5

Prove that if $A\subseteq B$, then $|A|\le |B|$.

Solution:

Assume $A\subseteq B$. Define

$$
i:A\to B
$$

by

$$
i(a)=a
$$

for every $a\in A$.

This is a function because every element of $A$ is also an element of $B$.

We prove $i$ is injective. Let $a_1,a_2\in A$ and suppose

$$
i(a_1)=i(a_2).
$$

By definition of $i$,

$$
a_1=a_2.
$$

So $i$ is injective. Therefore there exists an injection $A\to B$, and hence

$$
|A|\le |B|.
$$

### Problem 6

Let $A=\{1,2,3\}$ and $B=\{a,b\}$. Use the function

$$
g(1)=a,\quad g(2)=a,\quad g(3)=b
$$

to prove $|A|\ge |B|$.

Solution:

By definition, to prove $|A|\ge |B|$, we need a surjection from $A$ to $B$.

The function $g:A\to B$ is surjective because for every $b_0\in B$, there exists $a_0\in A$ such that $g(a_0)=b_0$:

- for $a\in B$, use input $1$
- for $b\in B$, use input $3$

Thus there exists a surjection $A\to B$, so $|A|\ge |B|$.

### Problem 7

Let $A=\{1,2,3\}$ and $B=\{a,b,c\}$. Define

$$
h:A\to B
$$

by

$$
h(1)=a,\quad h(2)=b,\quad h(3)=c.
$$

Prove $|A|=|B|$.

Solution:

We prove $h$ is bijective.

Injectivity: Let $x,y\in A$ and suppose $h(x)=h(y)$. From the definition of $h$, equal outputs occur only when the inputs are the same. Therefore $x=y$.

Surjectivity: Let $b_0\in B$. If $b_0=a$, then $h(1)=b_0$. If $b_0=b$, then $h(2)=b_0$. If $b_0=c$, then $h(3)=b_0$.

So $h$ is both injective and surjective, hence bijective. Therefore $|A|=|B|$.

## Theorem Use

### Problem 8

Suppose there is an injection $f:A\to B$ and an injection $g:B\to A$. What theorem lets you conclude $|A|=|B|$?

Answer:

The Cantor-Schroeder-Bernstein theorem.

### Problem 9

Explain why the following is not a definition:

$$
|A|\le |B| \quad\Rightarrow\quad |B|\ge |A|.
$$

Answer:

The statement may be a theorem, but it is not the definition. By definition, $|A|\le |B|$ means there exists an injection $A\to B$. By definition, $|B|\ge |A|$ means there exists a surjection $B\to A$. These are different existence statements, so one does not become the other just by rewriting the symbols.

### Problem 10

What should you do if a problem asks you to prove $|A|\le |B|$ and you do not know any theorem that applies?

Answer:

Return to the definition: define a function $f:A\to B$ and prove that it is injective.
