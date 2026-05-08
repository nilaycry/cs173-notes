# Lecture 26: Cardinality Through Functions

## Big Picture

Cardinality is the formal language of "how large a set is." For finite sets this often agrees with ordinary counting, but cardinal comparison is defined using functions rather than intuition.

The main idea is:

- injections show one set fits inside another
- surjections show one set covers another
- bijections show two sets have the same size

This makes size comparison meaningful even before every set has been assigned a numerical size.

## Function Check: GCD

If $A$ and $B$ are sets, a function

$$
f : A \to B
$$

must assign every input $a \in A$ exactly one output $f(a) \in B$.

So when checking whether a proposed rule is a function, ask:

1. Is every input in the domain assigned an output?
2. Is that output unique?
3. Is the output actually in the codomain?

For example, consider a proposed map

$$
f : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}
$$

given by

$$
f(x,y)=\gcd(x,y).
$$

The key question is not just whether the formula is familiar. The key question is whether, for every $(x,y) \in \mathbb{Z}\times\mathbb{Z}$, there exists a unique output in $\mathbb{Z}$.

Changing the codomain can change the answer. If the codomain is $\mathbb{N}^+$, then the input $(0,0)$ causes trouble, because $\gcd(0,0)=0$ and $0 \notin \mathbb{N}^+$.

## Theorem: Linear Combinations from Bezout's Identity

For integers $m,n \in \mathbb{Z}$, the set of integer linear combinations of $m$ and $n$ is

$$
\{ma+nb \mid a,b \in \mathbb{Z}\}.
$$

If $\gcd(m,n)=1$, then Bezout's identity says there exist $a,b \in \mathbb{Z}$ such that

$$
ma+nb=1.
$$

Multiplying by any integer $z$ gives

$$
m(za)+n(zb)=z.
$$

So when $\gcd(m,n)=1$, every integer is an integer linear combination of $m$ and $n$.

If both $m$ and $n$ are even, then every linear combination

$$
ma+nb
$$

is even. In that case, the set of linear combinations cannot be all of $\mathbb{Z}$.

## Definition: Injective Function

Let $A$ and $B$ be sets, and let

$$
f : A \to B
$$

be a function.

The function $f$ is injective if distinct inputs always have distinct outputs.

Formally:

$$
(\forall a_1,a_2 \in A)(f(a_1)=f(a_2) \Rightarrow a_1=a_2).
$$

Equivalently:

$$
(\forall a_1,a_2 \in A)(a_1 \ne a_2 \Rightarrow f(a_1)\ne f(a_2)).
$$

Intuition:

An injection lets the elements of $A$ fit into $B$ without collisions.

If there is an injection from $A$ to $B$, then $A$ is no larger than $B$.

## Definition: Surjective Function

Let $A$ and $B$ be sets, and let

$$
f : A \to B
$$

be a function.

The function $f$ is surjective if every element of the codomain is hit by some input.

Formally:

$$
(\forall b \in B)(\exists a \in A)(f(a)=b).
$$

Intuition:

A surjection from $A$ to $B$ means $A$ has enough elements to cover all of $B$.

Several elements of $A$ may map to the same element of $B$. Surjectivity does not require uniqueness of preimages.

## Definition: Bijective Function

A function

$$
f : A \to B
$$

is bijective if it is both injective and surjective.

So every element of $B$ is hit, and no two different elements of $A$ collide.

Intuition:

A bijection pairs the elements of $A$ and $B$ perfectly. This is why bijections are used to define equal cardinality.

## Definitions: Cardinality Comparison

Let $A$ and $B$ be sets.

We define

$$
|A| \le |B|
$$

if and only if there exists an injective function

$$
f : A \to B.
$$

This means $A$ can be injected into $B$, so $A$ is no larger than $B$.

We define

$$
|A| \ge |B|
$$

if and only if there exists a surjective function

$$
g : A \to B.
$$

This means $A$ can cover all of $B$, so $A$ is no smaller than $B$.

We define

$$
|A| = |B|
$$

if and only if there exists a bijective function

$$
h : A \to B.
$$

This means $A$ and $B$ have the same cardinality.

## The Notation Is Not Ordinary Arithmetic Yet

The notation

$$
|A| \le |B|
$$

looks like a numerical inequality, but by definition it means:

$$
(\exists f)(f:A\to B \text{ and } f \text{ is injective}).
$$

Likewise,

$$
|A| \ge |B|
$$

means:

$$
(\exists g)(g:A\to B \text{ and } g \text{ is surjective}).
$$

Do not freely manipulate these symbols as if they were ordinary inequalities unless the needed theorem has been proven.

## Proving Cardinality Statements

To prove

$$
|A| \le |B|,
$$

define a function $f:A\to B$ and prove it is injective.

To prove

$$
|A| \ge |B|,
$$

define a function $g:A\to B$ and prove it is surjective.

To prove

$$
|A| = |B|,
$$

define a function $h:A\to B$ and prove it is bijective.

This means proving both:

- injectivity
- surjectivity

## Injective and Surjective Notation

Some texts use special arrows:

- $f : A \hookrightarrow B$ means $f$ is an injection from $A$ to $B$
- $f : A \twoheadrightarrow B$ means $f$ is a surjection from $A$ onto $B$
- $f : A \leftrightarrow B$ or similar notation may be used for bijections, depending on the text

Use this notation only when the property has already been established or is part of what is being explicitly defined.

If the injectivity or surjectivity has not been proven yet, write the ordinary function type

$$
f:A\to B
$$

and then prove the relevant property.

## Same Cardinality: Two Possible Ideas

There are two tempting ways to express that $A$ and $B$ have the same size.

One idea is:

$$
|A| \le |B|
\quad\text{and}\quad
|A| \ge |B|.
$$

By definition, this gives:

- an injection from $A$ to $B$
- a surjection from $A$ to $B$

Another idea is:

$$
|A|=|B|.
$$

By definition, this gives a single bijection from $A$ to $B$.

These are not syntactically the same statement. A single bijection is immediately both an injection and a surjection, but building one bijection from separate comparison data is a theorem-level task.

## Theorem: Cantor-Schroeder-Bernstein

If

$$
|A| \le |B|
$$

and

$$
|B| \le |A|,
$$

then

$$
|A|=|B|.
$$

In function language:

If there is an injection from $A$ to $B$ and an injection from $B$ to $A$, then there is a bijection between $A$ and $B$.

This is powerful because it lets you prove equal cardinality without constructing the bijection directly.

## Common Confusions

### "Does $|A|\le |B|$ mean $|B|\ge |A|$ automatically?"

Not by definition alone.

The first statement means there exists an injection $A\to B$.

The second statement means there exists a surjection $B\to A$.

Those are different function-existence statements. A theorem may connect them, but the definitions are not identical.

### "Does surjective mean each output has exactly one input?"

No.

Surjective means each codomain element has at least one preimage. It can have more than one.

### "Does injective mean every codomain element is hit?"

No.

Injective means no collisions. It does not require covering the whole codomain.

### "Can I use injection notation before proving injectivity?"

No. If the notation asserts injectivity, then using it before proving injectivity is claiming something not yet established.

## Core Summary

> Set sizes are compared using functions. To show $|A|\le |B|$, build an injection from $A$ to $B$. To show $|A|\ge |B|$, build a surjection from $A$ to $B$. To show $|A|=|B|$, build a bijection. These symbols look like ordinary inequalities, but they are definitions about the existence of functions.
