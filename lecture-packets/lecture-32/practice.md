# Practice: Infinity and Cardinality

## Definitions And Notation

### Problem 1

Let $X=\{a,b,c,d,e\}$. What does $\binom{5}{2}$ count in terms of $X$? Give three examples of objects being counted.

Answer:

It counts the two-element subsets of $X$:

$$
\binom{5}{2}=\left|\{Z\subseteq X\mid |Z|=2\}\right|.
$$

Examples include

$$
\{a,b\},\quad \{b,c\},\quad \{d,e\}.
$$

The order does not matter, so $\{a,b\}=\{b,a\}$.

### Problem 2

State the definition of $|A|=|B|$.

Answer:

The statement $|A|=|B|$ means there exists a bijection

$$
h:A\to B.
$$

Equivalently, there exists a function $h:A\to B$ that is both injective and surjective.

### Problem 3

State the definition of "finite" used in the course.

Answer:

A set $F$ is finite if there exists $n\in\mathbb{N}$ such that

$$
|F|=|n|.
$$

Here $n$ is the canonical $n$-element natural number, usually

$$
n=\{0,1,\dots,n-1\}.
$$

## Hilbert's Hotel

### Problem 4

Define a bijection $f:\mathbb{N}\to\mathbb{N}^+$.

Solution:

Define

$$
f:\mathbb{N}\to\mathbb{N}^+
$$

by

$$
f(n)=n+1.
$$

Injectivity: Suppose $a,b\in\mathbb{N}$ and $f(a)=f(b)$. Then

$$
a+1=b+1.
$$

Subtracting $1$ from both sides gives $a=b$. So $f$ is injective.

Surjectivity: Let $y\in\mathbb{N}^+$. Since $y$ is positive, $y-1\in\mathbb{N}$. Also,

$$
f(y-1)=(y-1)+1=y.
$$

So $f$ is surjective. Therefore $f$ is bijective, and

$$
|\mathbb{N}|=|\mathbb{N}^+|.
$$

### Problem 5

Use Hilbert's hotel to describe how to fit $m$ new guests into rooms indexed by $\mathbb{N}$, where $m\in\mathbb{N}$.

Answer:

Move every current guest from room $n$ to room $n+m$.

This leaves rooms

$$
0,1,\dots,m-1
$$

free for the $m$ new guests. No old guest loses a room because each old room number $n$ is sent to a distinct new room number $n+m$.

### Problem 6

Prove that $\mathbb{N}$ is Dedekind infinite.

Solution:

Let

$$
Y=\mathbb{N}^+.
$$

Then $Y\subsetneq\mathbb{N}$ because $0\in\mathbb{N}$ but $0\notin\mathbb{N}^+$.

By Problem 4, there is a bijection

$$
f:\mathbb{N}\to\mathbb{N}^+,\qquad f(n)=n+1.
$$

Thus

$$
|\mathbb{N}|=|\mathbb{N}^+|=|Y|.
$$

So $\mathbb{N}$ has a proper subset of the same cardinality as itself. Therefore $\mathbb{N}$ is Dedekind infinite.

## Integers And Natural Numbers

### Problem 7

Define an injection $g:\mathbb{N}\to\mathbb{Z}$.

Solution:

Define

$$
g:\mathbb{N}\to\mathbb{Z}
$$

by

$$
g(n)=n.
$$

This is well-defined because every natural number is an integer.

To prove injectivity, suppose $a,b\in\mathbb{N}$ and $g(a)=g(b)$. Then $a=b$. Therefore $g$ is injective.

### Problem 8

Define an injection $f:\mathbb{Z}\to\mathbb{N}$ that lists the integers in the order

$$
0,-1,1,-2,2,-3,3,\dots
$$

Solution:

Define

$$
f:\mathbb{Z}\to\mathbb{N}
$$

by

$$
f(z)=
\begin{cases}
2z, & z\ge 0,\\
-2z-1, & z<0.
\end{cases}
$$

This sends nonnegative integers to even natural numbers and negative integers to odd natural numbers.

To prove injectivity, suppose $a,b\in\mathbb{Z}$ and $f(a)=f(b)$.

If $a,b\ge 0$, then $2a=2b$, so $a=b$.

If $a,b<0$, then $-2a-1=-2b-1$, so $a=b$.

If one of $a,b$ is nonnegative and the other is negative, then one of $f(a),f(b)$ is even and the other is odd. They cannot be equal.

Therefore $f$ is injective.

### Problem 9

Use Cantor-Schröder-Bernstein to prove $|\mathbb{Z}|=|\mathbb{N}|$ from Problems 7 and 8.

Solution:

Problem 7 gives an injection

$$
g:\mathbb{N}\to\mathbb{Z}.
$$

Problem 8 gives an injection

$$
f:\mathbb{Z}\to\mathbb{N}.
$$

By the Cantor-Schröder-Bernstein theorem, injections in both directions imply that there exists a bijection between the two sets. Hence

$$
|\mathbb{Z}|=|\mathbb{N}|.
$$

## Proof-Writing Checks

### Problem 10

A student writes:

"$\mathbb{N}^+\subsetneq\mathbb{N}$, so $|\mathbb{N}^+|<|\mathbb{N}|$."

What is wrong with this proof step?

Answer:

The implication

$$
A\subsetneq B\Rightarrow |A|<|B|
$$

is valid for finite sets, but it is not valid for arbitrary infinite sets.

In fact,

$$
\mathbb{N}^+\subsetneq\mathbb{N}
$$

but

$$
|\mathbb{N}^+|=|\mathbb{N}|.
$$

The equality follows from the bijection $f:\mathbb{N}\to\mathbb{N}^+$ given by $f(n)=n+1$.

### Problem 11

A student writes:

"By definition, every infinite set has a proper subset of the same cardinality."

How should this sentence be corrected?

Answer:

The statement "has a proper subset of the same cardinality" is the definition of Dedekind infinite, not the definition of infinite.

A better sentence is:

"By definition, a set $X$ is Dedekind infinite if there exists $Y\subsetneq X$ such that $|Y|=|X|$."

If the student wants to connect this to infinite sets, they should cite the relevant theorem or course assumption:

"Under the usual cardinality comparison assumptions used here, infinite sets are Dedekind infinite."

### Problem 12

Suppose $A$ and $B$ are finite sets and $A\subsetneq B$. What can you conclude about their cardinalities? Why does this conclusion not contradict Hilbert's hotel?

Answer:

Since $A$ and $B$ are finite and $A\subsetneq B$, we can conclude

$$
|A|<|B|.
$$

This does not contradict Hilbert's hotel because Hilbert's hotel uses an infinite set of rooms. Infinite sets can have proper subsets of the same cardinality as the whole set.
