# Practice: Countability and Cantor's Theorem

## Strings And Modeling

### Problem 1

Define an infinite binary string formally.

Answer:

An infinite binary string is a function

$$
b:\mathbb{N}\to\{0,1\}.
$$

The value $b(i)$ is the $i$th character of the string.

### Problem 2

For $a\in\mathbb{N}$ and $\ell\in\mathbb{N}^+$, define the infinite binary string that has exactly one block of $\ell$ consecutive $1$s starting at index $a$.

Answer:

Define

$$
b_{a,\ell}:\mathbb{N}\to\{0,1\}
$$

by

$$
b_{a,\ell}(i)=
\begin{cases}
1, & a\le i<a+\ell,\\
0, & \text{otherwise}.
\end{cases}
$$

### Problem 3

Explain why the set of strings in Problem 2 is countable.

Answer:

Each string is determined by a pair

$$
(a,\ell)\in\mathbb{N}\times\mathbb{N}^+.
$$

Since

$$
|\mathbb{N}\times\mathbb{N}|=|\mathbb{N}|
$$

and $\mathbb{N}^+\subseteq\mathbb{N}$, the set of such pairs is countable. Therefore the set of such strings is countable.

## Countability

### Problem 4

Prove that the function

$$
f:\mathbb{N}\to\mathbb{N}\times\mathbb{N},\qquad f(n)=(0,n)
$$

is injective.

Solution:

Let $a,b\in\mathbb{N}$ and suppose

$$
f(a)=f(b).
$$

Then

$$
(0,a)=(0,b).
$$

Ordered pairs are equal exactly when their corresponding coordinates are equal, so $a=b$.

Therefore $f$ is injective.

### Problem 5

Prove that

$$
g:\mathbb{N}\times\mathbb{N}\to\mathbb{N},\qquad g(x,y)=2^x3^y
$$

is injective.

Solution:

Let $(x,y),(x',y')\in\mathbb{N}\times\mathbb{N}$ and suppose

$$
g(x,y)=g(x',y').
$$

Then

$$
2^x3^y=2^{x'}3^{y'}.
$$

By unique prime factorization, the exponent of $2$ must agree on both sides, so

$$
x=x'.
$$

The exponent of $3$ must also agree on both sides, so

$$
y=y'.
$$

Therefore

$$
(x,y)=(x',y'),
$$

and $g$ is injective.

### Problem 6

Use Cantor-Schroder-Bernstein to prove

$$
|\mathbb{N}|=|\mathbb{N}\times\mathbb{N}|.
$$

Solution:

Problem 4 gives an injection

$$
\mathbb{N}\to\mathbb{N}\times\mathbb{N}.
$$

Problem 5 gives an injection

$$
\mathbb{N}\times\mathbb{N}\to\mathbb{N}.
$$

By Cantor-Schroder-Bernstein, injections in both directions imply the existence of a bijection. Hence

$$
|\mathbb{N}|=|\mathbb{N}\times\mathbb{N}|.
$$

### Problem 7

Why does the countability of $\mathbb{N}\times\mathbb{N}$ help prove that $\mathbb{Q}$ is countable?

Answer:

Every rational number can be represented as a fraction

$$
\frac{a}{b}
$$

where $a\in\mathbb{Z}$ and $b\in\mathbb{Z}\setminus\{0\}$.

Thus rational numbers can be encoded using ordered pairs of integers. Since

$$
|\mathbb{Z}|=|\mathbb{N}|
$$

and

$$
|\mathbb{N}\times\mathbb{N}|=|\mathbb{N}|,
$$

the set of possible integer-pair encodings is countable. Therefore $\mathbb{Q}$ is countable.

## Cantor's Theorem

### Problem 8

State Cantor's theorem.

Answer:

For every set $X$,

$$
|X|<|\mathcal{P}(X)|.
$$

### Problem 9

Let $\varphi:X\to\mathcal{P}(X)$. Define the diagonal set used in Cantor's theorem, and explain why it is an element of $\mathcal{P}(X)$.

Answer:

Define

$$
\Delta=\{x\in X\mid x\notin\varphi(x)\}.
$$

Every element of $\Delta$ is an element of $X$, so

$$
\Delta\subseteq X.
$$

Therefore

$$
\Delta\in\mathcal{P}(X).
$$

The existence of $\Delta$ is justified by separation, because it is a definable subset of the already-existing set $X$.

### Problem 10

Suppose $\varphi:X\to\mathcal{P}(X)$ is surjective, and let

$$
\Delta=\{x\in X\mid x\notin\varphi(x)\}.
$$

Why does there exist $\delta\in X$ such that $\varphi(\delta)=\Delta$?

Answer:

Since $\Delta\subseteq X$, we know

$$
\Delta\in\mathcal{P}(X).
$$

The codomain of $\varphi$ is $\mathcal{P}(X)$. Since $\varphi$ is surjective, every element of $\mathcal{P}(X)$ has a preimage under $\varphi$. Therefore there exists $\delta\in X$ such that

$$
\varphi(\delta)=\Delta.
$$

### Problem 11

Complete the contradiction in Cantor's theorem.

Assume $\varphi:X\to\mathcal{P}(X)$ is surjective, define

$$
\Delta=\{x\in X\mid x\notin\varphi(x)\},
$$

and choose $\delta\in X$ such that $\varphi(\delta)=\Delta$.

Solution:

There are two cases.

Case 1: Suppose $\delta\in\Delta$. By definition of $\Delta$,

$$
\delta\notin\varphi(\delta).
$$

Since $\varphi(\delta)=\Delta$, this means

$$
\delta\notin\Delta,
$$

contradicting $\delta\in\Delta$.

Case 2: Suppose $\delta\notin\Delta$. Since $\delta\in X$, the definition of $\Delta$ implies

$$
\delta\in\varphi(\delta).
$$

Since $\varphi(\delta)=\Delta$, this means

$$
\delta\in\Delta,
$$

contradicting $\delta\notin\Delta$.

Both cases contradict themselves, so no surjection $\varphi:X\to\mathcal{P}(X)$ exists.

### Problem 12

Use Cantor's theorem to prove that $\mathcal{P}(\mathbb{N})$ is uncountable.

Solution:

By Cantor's theorem, for every set $X$,

$$
|X|<|\mathcal{P}(X)|.
$$

Apply this with $X=\mathbb{N}$. Then

$$
|\mathbb{N}|<|\mathcal{P}(\mathbb{N})|.
$$

Therefore $\mathcal{P}(\mathbb{N})$ has cardinality greater than $\mathbb{N}$, so it is not countable. Hence $\mathcal{P}(\mathbb{N})$ is uncountable.

### Problem 13

Explain why there is no largest set cardinality.

Answer:

Let $X$ be any set. By Cantor's theorem,

$$
|X|<|\mathcal{P}(X)|.
$$

So given any set, its power set has strictly larger cardinality. Therefore no set can have the largest possible cardinality.
