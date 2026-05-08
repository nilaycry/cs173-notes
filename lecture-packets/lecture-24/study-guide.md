# Lecture 24: Modular Congruence

## Big Picture

Modular congruence is a way to say that two integers are the same from the perspective of divisibility by a fixed positive integer.

The core definition is:

$$
x \equiv y \pmod n
\quad\Longleftrightarrow\quad
n \mid (x-y).
$$

Read this as:

> x is congruent to y modulo n if and only if x and y differ by a multiple of n.

Equivalently, $x$ and $y$ leave the same remainder when divided by $n$.

## Formal Definitions

### Divisibility

> **Definition.** For $a,b \in \mathbb{Z}$, write $a \mid b$ if and only if there exists $k \in \mathbb{Z}$ such that $ak=b$.

Read this as "$a$ divides $b$." The expression $a \mid b$ is a sentence, not a number.

### Modular Congruence

> **Definition.** Let $n \in \mathbb{N}^+$ and let $a,b \in \mathbb{Z}$. Write $a \equiv b \pmod n$ if and only if $n \mid (a-b)$.

Here $n$ is the modulus. The whole expression "$a \equiv b \pmod n$" is a sentence.

### Add and Multiply Both Sides

> **Theorem.** Let $n \in \mathbb{N}^+$ and $x,y,k \in \mathbb{Z}$. If $x \equiv y \pmod n$, then $x+k \equiv y+k \pmod n$ and $kx \equiv ky \pmod n$.

In proofs about congruence, the domains matter. A typical proof begins by fixing $n \in \mathbb{N}^+$ and taking the relevant variables, such as $x,y,k$, to be integers.

## Euclidean Division

> **Theorem.** If $y \in \mathbb{N}^+$ and $x \in \mathbb{Z}$, then there are unique integers $q,r \in \mathbb{Z}$ such that $x=yq+r$ and $0\le r<y$.

Here:

- $q$ is the quotient
- $r$ is the remainder

The bound on the remainder matters. It forces the remainder to be one of

$$
0,1,2,\ldots,y-1.
$$

## Divisibility and Remainders

If $y \mid x$, then the remainder when dividing $x$ by $y$ is $0$.

If $y \nmid x$, then the remainder is nonzero.

Example:

$$
5 = 2\cdot 2 + 1.
$$

So 5 has remainder 1 after division by 2.

This is why 5 is odd: from the perspective of divisibility by 2, it sits one step after a multiple of 2.

## Same Remainder Implies Congruence

> **Proposition.** Fix $n \in \mathbb{N}^+$. If two integers have the same remainder after division by $n$, then they are congruent modulo $n$.

Example:

$$
11 = 6\cdot 1 + 5
$$

and

$$
5 = 6\cdot 0 + 5.
$$

Both 11 and 5 have remainder 5 after division by 6, so

$$
11 \equiv 5 \pmod 6.
$$

Using the definition:

$$
11-5=6,
$$

and $6 \mid 6$, so $11 \equiv 5 \pmod 6$.

## Syntax: Congruence Is a Statement

The expression

$$
x \equiv y \pmod n
$$

is a statement, not a number.

It says something true or false about $x$, $y$, and $n$.

Here, "$\pmod n$" is part of the relation notation. It is not being used as a binary operation that takes two integers and returns a number.

## Modulo 2: Even and Odd

Modulo 2, there are two possible remainders:

$$
0,1.
$$

All even numbers are congruent to 0 modulo 2.

All odd numbers are congruent to 1 modulo 2.

So from the perspective of modulo 2, every integer belongs to one of two types:

- even numbers
- odd numbers

## Modulo 6: Remainder Classes

Modulo 6, the possible remainders are

$$
0,1,2,3,4,5.
$$

Numbers with the same remainder are congruent modulo 6.

For example:

$$
5 \equiv 11 \pmod 6
$$

because both have remainder 5 after division by 6.

Also:

$$
-1 \equiv 5 \pmod 6
$$

because

$$
-1 - 5 = -6,
$$

and $6 \mid -6$.

So negative numbers can represent the same remainder classes as positive numbers.

## Why Same Remainder Implies Congruence

Suppose

$$
x = q_1n + r
$$

and

$$
y = q_2n + r.
$$

Then

$$
x-y = (q_1n+r)-(q_2n+r).
$$

So

$$
x-y = (q_1-q_2)n.
$$

Therefore $n \mid (x-y)$, and hence

$$
x \equiv y \pmod n.
$$

The shared remainder cancels out.

## Modular Congruence Is an Equivalence Relation

> **Theorem.** For fixed $n \in \mathbb{N}^+$, congruence modulo $n$ is an equivalence relation on $\mathbb{Z}$.

### Reflexivity

For every integer $x$,

$$
x \equiv x \pmod n.
$$

Reason:

$$
x-x=0,
$$

and every positive integer divides 0.

### Symmetry

If

$$
x \equiv y \pmod n,
$$

then

$$
y \equiv x \pmod n.
$$

Reason: if $n \mid (x-y)$, then $n \mid -(x-y)$, and

$$
-(x-y)=y-x.
$$

### Transitivity

If

$$
x \equiv y \pmod n
$$

and

$$
y \equiv z \pmod n,
$$

then

$$
x \equiv z \pmod n.
$$

Reason: if $n \mid (x-y)$ and $n \mid (y-z)$, then $n$ divides their sum:

$$
(x-y)+(y-z)=x-z.
$$

## Algebra With Congruences

> **Theorem.** Let $n \in \mathbb{N}^+$ and $x,y,z \in \mathbb{Z}$. If $x \equiv y \pmod n$, then $x+z \equiv y+z \pmod n$ and $xz \equiv yz \pmod n$.

The proofs use the divisibility definition.

For addition:

$$
(x+z)-(y+z)=x-y.
$$

For multiplication:

$$
xz-yz=z(x-y).
$$

If $n \mid (x-y)$, then $n \mid z(x-y)$.

## Cancellation Is Dangerous

Ordinary equations allow cancellation:

$$
xz=yz,\ z\ne 0 \Rightarrow x=y.
$$

For modular congruence, this is not always valid.

The tempting but false move is:

$$
xz \equiv yz \pmod n
\quad\Rightarrow\quad
x \equiv y \pmod n.
$$

This can fail even when $z \ne 0$ as an integer.

Example modulo 6:

$$
2\cdot 6 \equiv 4\cdot 6 \pmod 6.
$$

Both sides are congruent to 0 modulo 6. But

$$
2 \not\equiv 4 \pmod 6.
$$

The issue is that multiplying by something congruent to 0 modulo 6 destroys information.

## What 0 Represents Modulo n

Modulo $n$, the number 0 represents all multiples of $n$.

That is:

$$
x \equiv 0 \pmod n
$$

if and only if

$$
n \mid x.
$$

So modulo 6, all of these act like 0:

$$
\ldots,-12,-6,0,6,12,18,\ldots
$$

## Residue Representatives

Modulo $n$, every integer is congruent to exactly one of

$$
0,1,2,\ldots,n-1.
$$

These are the standard remainder representatives.

For modulo 6, the standard representatives are

$$
0,1,2,3,4,5.
$$

But other representatives can describe the same classes. For example:

$$
-1 \equiv 5 \pmod 6.
$$

## Modular Arithmetic Intuition

You can add and multiply remainders, then reduce again modulo $n$.

Modulo 6:

$$
11 \equiv 5 \pmod 6
$$

and

$$
15 \equiv 3 \pmod 6.
$$

Then

$$
11+15=26.
$$

Since

$$
5+3=8 \equiv 2 \pmod 6,
$$

we expect

$$
26 \equiv 2 \pmod 6.
$$

And indeed,

$$
26 = 6\cdot 4 + 2.
$$

## Core Summary

> Congruence modulo n means two integers differ by a multiple of n. Equivalently, they have the same remainder after division by n. This relation is reflexive, symmetric, and transitive. We can add or multiply both sides of a congruence by the same integer, but cancellation is not automatically valid, because multiplication modulo n can destroy information.
