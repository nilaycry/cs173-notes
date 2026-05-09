# Lecture 33: Countability and Cantor's Theorem

## Big Picture

This lecture finishes the combinatorics and cardinality unit.

The main point is that "infinite" does not mean "all the same size." Some infinite sets are countable, meaning they can be injected into the natural numbers. Other infinite sets are uncountable, meaning they are too large to be counted by natural numbers.

The lecture develops three levels:

- $\mathbb{N}$ is infinite
- $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{N}\times\mathbb{N}$, and $\mathbb{Q}$ have the same cardinality
- every set is strictly smaller than its power set

The final theorem gives an explicit source of uncountable sets:

$$
|\mathbb{N}|<|\mathcal{P}(\mathbb{N})|.
$$

## Strings As Functions

A string is a function whose domain is an index set.

> **Definition.** Let $A$ be an alphabet. A finite string over $A$ of length $n\in\mathbb{N}$ is a function
> $$
> b:n\to A.
> $$

Here

$$
n=\{0,1,\dots,n-1\}.
$$

Thus $b(i)$ is the $i$th character of the string.

> **Definition.** An infinite string over $A$ is a function
> $$
> b:\mathbb{N}\to A.
> $$

For binary strings, the alphabet is $\{0,1\}$. An infinite binary string is therefore a function

$$
b:\mathbb{N}\to\{0,1\}.
$$

This is the same object as an infinite binary sequence.

## Modeling A Contiguous Block Of Ones

Problem-set language such as "one contiguous finite substring consisting only of $1$s" must be turned into a precise model before counting begins.

A typical string being counted has one finite block of $1$s and zeros everywhere else, for example

$$
0001111000\cdots.
$$

Such a string can be described by two natural numbers:

- the starting position $a\in\mathbb{N}$
- the block length $\ell\in\mathbb{N}^+$

Then define

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

So the set of such strings is naturally modeled by pairs

$$
(a,\ell)\in\mathbb{N}\times\mathbb{N}^+.
$$

If the all-zero string is included by convention, that only adds one extra string. Adding finitely many elements does not change the countable cardinality.

## The Natural Numbers Are Infinite

The proof that $\mathbb{N}$ is infinite uses contradiction and surjectivity.

> **Theorem.** The set $\mathbb{N}$ is infinite.

Proof.

Suppose, toward a contradiction, that $\mathbb{N}$ is finite. Then there exists $n\in\mathbb{N}$ such that

$$
|n|=|\mathbb{N}|.
$$

So there is a bijection

$$
f:n\to\mathbb{N}.
$$

Define

$$
S=\sum_{i=0}^{n-1} f(i).
$$

The sum is a natural number because it is a finite sum of natural numbers.

For every $i\in n$, each term in the sum is nonnegative, so

$$
f(i)\le S<S+1.
$$

Thus no input $i\in n$ satisfies

$$
f(i)=S+1.
$$

But $S+1\in\mathbb{N}$, and $f$ is surjective, so there must exist $j\in n$ such that

$$
f(j)=S+1.
$$

This contradicts the previous inequality. Therefore $\mathbb{N}$ is infinite.

The proof also illustrates a writing point: after assuming that an existential statement holds, introduce the witness before using its name. Do not use a quantified variable outside the scope where it was introduced.

## Countable Sets

> **Definition.** A set $X$ is countable if
> $$
> |X|\le |\mathbb{N}|.
> $$
> Equivalently, there exists an injection
> $$
> X\to\mathbb{N}.
> $$

Finite sets are countable. Countably infinite sets are countable sets that are also infinite.

Examples:

$$
|\mathbb{N}|=|\mathbb{N}^+|=|\mathbb{Z}|.
$$

The new countable example is $\mathbb{N}\times\mathbb{N}$.

## Why $\mathbb{N}\times\mathbb{N}$ Is Countable

The clean method is Cantor-Schroder-Bernstein.

> **Theorem.** If there are injections $X\to Y$ and $Y\to X$, then $|X|=|Y|$.

To prove

$$
|\mathbb{N}|=|\mathbb{N}\times\mathbb{N}|,
$$

construct injections in both directions.

First, define

$$
f:\mathbb{N}\to\mathbb{N}\times\mathbb{N}
$$

by

$$
f(n)=(0,n).
$$

This is injective because

$$
(0,a)=(0,b)\Rightarrow a=b.
$$

Second, define

$$
g:\mathbb{N}\times\mathbb{N}\to\mathbb{N}
$$

by

$$
g(x,y)=2^x3^y.
$$

This is injective by unique prime factorization. If

$$
2^x3^y=2^{x'}3^{y'},
$$

then the exponent of $2$ on both sides must be the same, so $x=x'$, and the exponent of $3$ on both sides must be the same, so $y=y'$.

Therefore

$$
(x,y)=(x',y').
$$

By Cantor-Schroder-Bernstein,

$$
|\mathbb{N}|=|\mathbb{N}\times\mathbb{N}|.
$$

## Rational Numbers Are Countable

Every rational number can be represented by a fraction

$$
\frac{a}{b}
$$

where $a\in\mathbb{Z}$ and $b\in\mathbb{Z}\setminus\{0\}$.

So rational numbers can be encoded using ordered pairs of integers. Since

$$
|\mathbb{Z}|=|\mathbb{N}|
$$

and

$$
|\mathbb{N}\times\mathbb{N}|=|\mathbb{N}|,
$$

the set of rational numbers is countable:

$$
|\mathbb{Q}|=|\mathbb{N}|.
$$

The fact that the same rational number has multiple fraction representations, such as

$$
\frac12=\frac24,
$$

does not ruin countability. It only means the encoding by integer pairs is not one-to-one unless reduced fractions are chosen. For countability, it is enough to inject or otherwise organize the rational numbers using countable data.

## Power Sets

> **Definition.** The power set of $X$ is
> $$
> \mathcal{P}(X)=\{Y\mid Y\subseteq X\}.
> $$

For finite sets,

$$
|\mathcal{P}(X)|=2^{|X|}.
$$

This suggests that a power set should be larger than the original set. Cantor's theorem proves this for every set, finite or infinite.

## Cantor's Theorem

> **Theorem.** For every set $X$,
> $$
> |X|<|\mathcal{P}(X)|.
> $$

The key is to show that no function

$$
\varphi:X\to\mathcal{P}(X)
$$

can be surjective.

Proof.

Let $X$ be a set. Suppose, toward a contradiction, that

$$
|X|\ge |\mathcal{P}(X)|.
$$

By the definition of cardinal comparison, there exists a surjection

$$
\varphi:X\to\mathcal{P}(X).
$$

Define the diagonal set

$$
\Delta=\{x\in X\mid x\notin \varphi(x)\}.
$$

This set exists by separation, because it is a subset of the already-existing set $X$. Since

$$
\Delta\subseteq X,
$$

we have

$$
\Delta\in\mathcal{P}(X).
$$

Since $\varphi$ is surjective, there exists $\delta\in X$ such that

$$
\varphi(\delta)=\Delta.
$$

Now ask whether

$$
\delta\in\Delta.
$$

Case 1: Suppose $\delta\in\Delta$. By definition of $\Delta$,

$$
\delta\notin\varphi(\delta).
$$

Since $\varphi(\delta)=\Delta$, this means

$$
\delta\notin\Delta,
$$

a contradiction.

Case 2: Suppose $\delta\notin\Delta$. By definition of $\Delta$, because $\delta\in X$,

$$
\delta\in\varphi(\delta).
$$

Since $\varphi(\delta)=\Delta$, this means

$$
\delta\in\Delta,
$$

a contradiction.

Both cases contradict themselves. Therefore no such surjection $\varphi:X\to\mathcal{P}(X)$ exists, and hence

$$
|X|<|\mathcal{P}(X)|.
$$

## Consequences

Applying Cantor's theorem to $X=\mathbb{N}$ gives

$$
|\mathbb{N}|<|\mathcal{P}(\mathbb{N})|.
$$

Therefore $\mathcal{P}(\mathbb{N})$ is uncountable.

Applying the theorem repeatedly gives an endless hierarchy:

$$
|\mathbb{N}|
<
|\mathcal{P}(\mathbb{N})|
<
|\mathcal{P}(\mathcal{P}(\mathbb{N}))|
<
\cdots.
$$

There is no largest set cardinality, because every set has a strictly larger power set.

## Common Confusions

Countable does not mean finite. Finite sets are countable, and some infinite sets are countable.

Uncountable means not countable. It does not mean "too big to describe informally." The proof must show that no injection into $\mathbb{N}$ exists, or equivalently that the set has cardinality greater than $\mathbb{N}$.

The set $\mathbb{Q}$ is countable even though it is dense on the number line. Density and cardinality measure different things.

The diagonal set $\Delta$ is not arbitrary. It is built to disagree with every candidate output $\varphi(x)$ exactly at the input $x$.

## Core Summary

The final combinatorics picture is:

$$
|\mathbb{N}|=|\mathbb{N}^+|=|\mathbb{Z}|=|\mathbb{N}\times\mathbb{N}|=|\mathbb{Q}|.
$$

These are countably infinite sets.

Cantor's theorem shows that countable infinity is not the only infinite size:

$$
|\mathbb{N}|<|\mathcal{P}(\mathbb{N})|.
$$

The central proof move is diagonalization: given a supposed surjection $\varphi:X\to\mathcal{P}(X)$, build

$$
\Delta=\{x\in X\mid x\notin\varphi(x)\},
$$

then show $\Delta$ cannot be hit by $\varphi$ without contradiction.
