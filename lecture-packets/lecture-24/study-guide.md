# CS 173 Lecture Study Guide: Modular Congruence

Source video: `lecture-24.mp4`

Generated from a local transcript and checked against frame samples. The transcript has normal ASR errors, but the main content is clear: this lecture introduces modular congruence through Euclidean division and uses it as the first major example of an equivalence-like relation.

## Big Picture

This lecture is about what it means for two integers to be "the same" from the perspective of divisibility by a fixed positive integer.

The core definition is:

$$
x \equiv y \pmod n
\quad\Longleftrightarrow\quad
n \mid (x-y).
$$

Read this as:

> x is congruent to y modulo n if and only if x and y differ by a multiple of n.

Equivalently, x and y leave the same remainder when divided by n.

## Source-Aligned Definition Sheet

Use this wording when you want to match the course's exact style.

### Divisibility

For $a,b \in \mathbb{Z}$,

$$
a \mid b
\quad\Longleftrightarrow\quad
(\exists k \in \mathbb{Z})(ak=b).
$$

Read this as "$a$ divides $b$." The expression $a \mid b$ is a sentence, not a number.

### Modular Congruence

Let $n \in \mathbb{N}^+$ and let $a,b \in \mathbb{Z}$.

$$
a \equiv b \pmod n
\quad\Longleftrightarrow\quad
n \mid (a-b).
$$

Here $n$ is the modulus. The whole expression "$a \equiv b \pmod n$" is a sentence.

### Add and Multiply Both Sides

Let $n \in \mathbb{N}^+$ and $x,y,k \in \mathbb{Z}$. If

$$
x \equiv y \pmod n,
$$

then

$$
x+k \equiv y+k \pmod n
$$

and

$$
kx \equiv ky \pmod n.
$$

When writing a proof, start by naming the domains: "Let $n \in \mathbb{N}^+$ and let $x,y \in \mathbb{Z}$."

## Euclidean Division Reminder

The Euclidean division lemma says that if $y$ is a positive integer and $x$ is an integer, then there are unique integers $q$ and $r$ such that

$$
x = yq + r
$$

and

$$
0 \le r < y.
$$

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

## Same Remainder Means Same Modulo n

Fix a positive integer $n$.

If two integers have the same remainder after division by $n$, then they are congruent modulo $n$.

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

## Definition of Modular Congruence

Let $n \in \mathbb{N}^+$ and let $x,y \in \mathbb{Z}$.

We say

$$
x \equiv y \pmod n
$$

if and only if

$$
n \mid (x-y).
$$

This is a complete sentence. The "mod n" part is not optional. You should not write only "$x \equiv y$" when the modulus matters.

## Important Syntax Warning

In this course, the expression

$$
x \equiv y \pmod n
$$

is a statement, not a number.

It says something true or false about $x$, $y$, and $n$.

The lecture emphasized that "mod" is not being introduced here as a binary operation that takes two numbers and returns a number. The definition in this lecture is about a relation between integers.

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

For a fixed positive integer $n$, congruence modulo $n$ has three important properties.

### Reflexive

For every integer $x$,

$$
x \equiv x \pmod n.
$$

Reason:

$$
x-x=0,
$$

and every positive integer divides 0.

### Symmetric

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

### Transitive

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

Congruences behave a lot like equations in some ways.

If

$$
x \equiv y \pmod n,
$$

then for any integer $z$,

$$
x+z \equiv y+z \pmod n.
$$

Also,

$$
xz \equiv yz \pmod n.
$$

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

## What You Should Be Able To Say Out Loud

By the end of this lecture, you should be able to say:

> Congruence modulo n means two integers differ by a multiple of n. Equivalently, they have the same remainder after division by n. This relation is reflexive, symmetric, and transitive. We can add or multiply both sides of a congruence by the same integer, but cancellation is not automatically valid, because multiplication modulo n can destroy information.
