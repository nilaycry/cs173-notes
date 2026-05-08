# Practice: Finite Cardinality, Inverses, and Trichotomy

## Empty Domains and Empty Codomains

### Problem 1

Let $B$ be any set. Define

$$
f:\emptyset\to B
$$

by $f=\emptyset$. Prove that $f$ is a function.

Solution:

A function $\emptyset\to B$ must be a subset of $\emptyset\times B$ and must assign every input in $\emptyset$ a unique output in $B$.

Since $\emptyset\times B=\emptyset$, we have

$$
f=\emptyset\subseteq \emptyset\times B.
$$

The output condition says

$$
(\forall x\in\emptyset)(\exists! y\in B)((x,y)\in f).
$$

This is vacuously true because there is no $x\in\emptyset$. Therefore $f$ is a function.

### Problem 2

Let $B$ be any set. Prove that the empty function

$$
f:\emptyset\to B
$$

is injective.

Solution:

To prove injectivity, we need to show

$$
(\forall x_1,x_2\in\emptyset)(f(x_1)=f(x_2)\Rightarrow x_1=x_2).
$$

There are no elements $x_1,x_2\in\emptyset$, so there are no cases where injectivity can fail. The universal statement is vacuously true. Hence $f$ is injective.

### Problem 3

Suppose $B\ne\emptyset$. Prove that there is no function

$$
B\to\emptyset.
$$

Solution:

Since $B\ne\emptyset$, choose $b\in B$. If $h:B\to\emptyset$ were a function, then $h$ would have to assign $b$ a unique output in $\emptyset$. That means there would exist $y\in\emptyset$ such that $h(b)=y$.

But $\emptyset$ has no elements. This is impossible. Therefore no function $B\to\emptyset$ exists when $B\ne\emptyset$.

## Composition and Inverses

### Problem 4

Let

$$
p:\mathbb{R}_{>0}\to\mathbb{R}_{>0},
\quad
p(x)=x+1
$$

and

$$
q:\mathbb{R}_{>0}\to\mathbb{R}_{>0},
\quad
q(x)=x^2.
$$

Compute $p\circ q$ and $q\circ p$. Are they the same function?

Answer:

For $x\in\mathbb{R}_{>0}$,

$$
(p\circ q)(x)=p(q(x))=p(x^2)=x^2+1.
$$

Also,

$$
(q\circ p)(x)=q(p(x))=q(x+1)=(x+1)^2.
$$

These are not the same function. For example, at $x=1$,

$$
x^2+1=2
$$

but

$$
(x+1)^2=4.
$$

### Problem 5

Let $f:A\to B$ and $g:B\to A$. Explain the difference between the statements

$$
g\circ f=\operatorname{id}_A
$$

and

$$
f\circ g=\operatorname{id}_B.
$$

Answer:

The equation

$$
g\circ f=\operatorname{id}_A
$$

says $g$ is a left inverse for $f$. Starting with $a\in A$, applying $f$ and then $g$ returns $a$.

The equation

$$
f\circ g=\operatorname{id}_B
$$

says $g$ is a right inverse for $f$. Starting with $b\in B$, applying $g$ and then $f$ returns $b$.

They are different because composition is not generally commutative.

### Problem 6

Let $f:A\to B$ be injective. Suppose there exists $g:B\to A$ such that

$$
g\circ f=\operatorname{id}_A.
$$

Prove that $g$ is surjective.

Solution:

Let $a\in A$. We need to find some $b\in B$ such that $g(b)=a$.

Use

$$
b=f(a).
$$

Since $f:A\to B$, we know $f(a)\in B$. Also, because $g\circ f=\operatorname{id}_A$,

$$
g(f(a))=\operatorname{id}_A(a)=a.
$$

Thus every $a\in A$ is hit by $g$, so $g$ is surjective.

### Problem 7

Let $f:A\to B$ be surjective. Suppose there exists $g:B\to A$ such that

$$
f\circ g=\operatorname{id}_B.
$$

Prove that $g$ is injective.

Solution:

Let $b_1,b_2\in B$ and suppose

$$
g(b_1)=g(b_2).
$$

Apply $f$ to both sides:

$$
f(g(b_1))=f(g(b_2)).
$$

Since $f\circ g=\operatorname{id}_B$,

$$
b_1=b_2.
$$

Therefore $g$ is injective.

## Finite Cardinality

### Problem 8

Let $S=\{a,b,c\}$. Give a bijection from $S$ to $3=\{0,1,2\}$ and explain why this shows $S$ is finite.

Answer:

Define $h:S\to 3$ by

$$
h(a)=0,\quad h(b)=1,\quad h(c)=2.
$$

This function is injective because different elements of $S$ have different outputs. It is surjective because every element of $\{0,1,2\}$ is hit.

Thus $h$ is a bijection, so $|S|=|3|$. Therefore $S$ is finite.

### Problem 9

Let $X=\{a,b,c\}$. Explain why $\mathcal{P}(X)$ has $2^3$ elements by describing a bijective encoding.

Answer:

Encode each subset of $X$ by a binary string of length $3$, where the positions correspond to $a,b,c$.

For a subset $Y\subseteq X$, define its code by:

- first bit is $1$ if $a\in Y$, otherwise $0$
- second bit is $1$ if $b\in Y$, otherwise $0$
- third bit is $1$ if $c\in Y$, otherwise $0$

For example,

$$
\{a,c\}\mapsto 101.
$$

Every subset gives exactly one binary string, and every binary string gives exactly one subset. So this encoding is bijective. There are $2^3$ binary strings of length $3$, hence $|\mathcal{P}(X)|=2^3$.

## Cardinality Translations

### Problem 10

Translate the following statement into a function-existence statement:

$$
|A|\le |B|.
$$

Answer:

It means there exists an injective function

$$
f:A\to B.
$$

### Problem 11

Translate the following statement into a function-existence statement:

$$
|A|\ge |B|.
$$

Answer:

It means there exists a surjective function

$$
f:A\to B.
$$

### Problem 12

Assume there is an injection $A\to B$ and an injection $B\to A$. What theorem lets you conclude $|A|=|B|$, and what does that conclusion mean?

Answer:

The Cantor-Schroeder-Bernstein theorem lets us conclude

$$
|A|=|B|.
$$

By definition, this means there exists a bijection

$$
h:A\to B.
$$

### Problem 13

State the trichotomy of cardinality in words.

Answer:

For any two sets $A$ and $B$, their cardinalities can be compared: either $A$ is smaller than $B$, $A$ and $B$ have the same cardinality, or $A$ is larger than $B$.

Equivalently, in comparison form, either

$$
|A|\le |B|
$$

or

$$
|B|\le |A|.
$$
