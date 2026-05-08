# Lecture 27: Finite Cardinality, Inverses, and Trichotomy

## Big Picture

Cardinality comparisons are statements about the existence of functions. The next layer is to understand how these function statements interact with finite sets, composition, inverses, and comparability.

The main theme is:

- cardinality symbols are definitions about functions
- finite cardinality lets us identify a set's size with a natural number
- composition is not commutative, so left inverses and right inverses are different ideas
- injections are controlled by left inverses
- surjections are controlled by right inverses
- to compare arbitrary sets cleanly, trichotomy of cardinality is accepted as an axiom

The goal is to translate every cardinality statement back into a precise function statement.

## Definition: Function as a Set of Ordered Pairs

Let $A$ and $B$ be sets. A function

$$
f:A\to B
$$

is a special kind of subset of the Cartesian product $A\times B$.

Formally, a function $f:A\to B$ must satisfy:

$$
f\subseteq A\times B
$$

and for every $a\in A$, there exists a unique $b\in B$ such that

$$
(a,b)\in f.
$$

This matters because when the domain is empty, many universal statements become true vacuously.

## Proposition: The Empty Function

For any set $B$, there is a function

$$
\emptyset \to B.
$$

It is the empty set of ordered pairs:

$$
f=\emptyset.
$$

Proof:

First,

$$
\emptyset \times B=\emptyset,
$$

so $f=\emptyset$ is certainly a subset of $\emptyset\times B$.

Second, the statement

$$
(\forall x\in \emptyset)(\exists! y\in B)((x,y)\in f)
$$

is vacuously true, because there is no $x\in\emptyset$ to check.

The same function is injective. To prove injectivity, it is enough to show

$$
(\forall x_1,x_2\in \emptyset)(f(x_1)=f(x_2)\Rightarrow x_1=x_2).
$$

Again, there are no inputs to check, so the statement is true.

Therefore, for every set $B$,

$$
|\emptyset|\le |B|.
$$

The reverse-looking idea is different. If $B\ne\emptyset$, there is no function

$$
B\to \emptyset,
$$

because an element $b\in B$ would need an output in $\emptyset$, and no such output exists.

This is the important lesson: do not flip cardinality statements by visual intuition alone. Translate them back into functions.

## Theorem: Cantor-Schroeder-Bernstein

If $A$ and $B$ are sets and

$$
|A|\le |B|
\quad\text{and}\quad
|B|\le |A|,
$$

then

$$
|A|=|B|.
$$

Equivalently:

If there is an injection $A\to B$ and an injection $B\to A$, then there exists a bijection $A\to B$.

This is useful because direct bijections can be difficult to invent. Proving two injections is often easier than proving one function is both injective and surjective.

## Definition: Finite Set

Natural numbers are represented as sets:

$$
n=\{0,1,2,\dots,n-1\}.
$$

A set $S$ is finite if there exists some $n\in\mathbb{N}$ such that

$$
|S|=|n|.
$$

In function language, this means there exists a bijection

$$
S\to n.
$$

When $S$ is finite, its cardinality can be represented by the natural number $n$. In that case it becomes reasonable to write arithmetic expressions involving $|S|$, such as $2^{|S|}$, because $|S|$ is being represented by a natural number.

## Proposition: Power Sets of Finite Sets

For a finite set $X$,

$$
|\mathcal{P}(X)|=2^{|X|}
$$

for finite $X$.

If $|X|=n$, then the statement means:

There exists a bijection between $\mathcal{P}(X)$ and a set with $2^n$ elements.

One clean mental model is to encode each subset of $X$ by a binary choice for each element:

- include the element
- do not include the element

So if $X$ has $n$ elements, a subset of $X$ behaves like a length-$n$ binary string. There are $2^n$ such strings.

A formal proof still needs a function and a proof that the function is bijective. The phrase "each element has two choices" is useful intuition, but the formal argument must turn that intuition into an actual bijection or induction step.

## Definition: Function Composition

Let

$$
f:A\to B
\quad\text{and}\quad
g:B\to C.
$$

The composition

$$
g\circ f:A\to C
$$

is defined by

$$
(g\circ f)(a)=g(f(a))
$$

for every $a\in A$.

The order matters: $g\circ f$ means first apply $f$, then apply $g$.

Composition is not commutative. Even when both orders make sense, the results may differ.

For example, on $\mathbb{R}_{>0}$, let

$$
p(x)=x+1
\quad\text{and}\quad
q(x)=x^2.
$$

Then

$$
(p\circ q)(x)=x^2+1,
$$

but

$$
(q\circ p)(x)=(x+1)^2.
$$

These are not the same function.

This is why left inverses and right inverses must be distinguished.

## Definition: Identity Function

For any set $A$, the identity function on $A$ is

$$
\operatorname{id}_A:A\to A
$$

defined by

$$
\operatorname{id}_A(a)=a
$$

for every $a\in A$.

It behaves like an identity for composition:

$$
f\circ \operatorname{id}_A=f
$$

when $f:A\to B$, and

$$
\operatorname{id}_B\circ f=f
$$

when $f:A\to B$.

## Definition: Left Inverse

Let

$$
f:A\to B.
$$

A function

$$
g:B\to A
$$

is a left inverse for $f$ if

$$
g\circ f=\operatorname{id}_A.
$$

This means: start with $a\in A$, apply $f$, then apply $g$, and you get back the original $a$.

So $g$ undoes $f$ on the left side of the composition.

## Definition: Right Inverse

Let

$$
f:A\to B.
$$

A function

$$
g:B\to A
$$

is a right inverse for $f$ if

$$
f\circ g=\operatorname{id}_B.
$$

This means: start with $b\in B$, apply $g$, then apply $f$, and you get back the original $b$.

Left inverse and right inverse are different conditions because composition is not commutative.

## Theorem: Injections Have Left Inverses

Let $A$ and $B$ be sets, and let

$$
f:A\to B.
$$

If $f$ is injective, then $f$ has a left inverse. That is, there exists a function

$$
g:B\to A
$$

such that

$$
g\circ f=\operatorname{id}_A.
$$

The intuition is that an injection loses no information: if $f(a)$ is known, then the original input $a$ is recoverable.

The left inverse is also surjective onto $A$. Indeed, for every $a\in A$,

$$
g(f(a))=a.
$$

So every element of $A$ is hit by $g$.

This gives the cardinality direction:

$$
|A|\le |B|
\quad\Rightarrow\quad
|B|\ge |A|.
$$

The left side means there is an injection $A\to B$. The right side means there is a surjection $B\to A$.

## Definition: Monomorphism

A monomorphism is a function with a left inverse.

For functions between sets:

$$
f \text{ is monic}
\quad\Longleftrightarrow\quad
f \text{ is injective}.
$$

For functions between sets, monic means left-invertible, and this is equivalent to injective.

## Theorem: Surjections and Right Inverses

The matching statement for surjections is:

If

$$
f:A\to B
$$

is surjective, then one would like to choose, for each $b\in B$, some $a\in A$ such that $f(a)=b$. This would define a function

$$
g:B\to A
$$

with

$$
f\circ g=\operatorname{id}_B.
$$

Then $g$ would be a right inverse for $f$.

The subtle point is that this requires making a choice from each nonempty fiber

$$
f^{-1}(\{b\})=\{a\in A\mid f(a)=b\}.
$$

For finite sets this is harmless. For arbitrary sets, this choice principle is not provable from the earlier set-theory axioms.

Once the needed choice principle is accepted, surjections are right-invertible and the right inverse is injective.

This gives the reverse cardinality direction:

$$
|A|\ge |B|
\quad\Rightarrow\quad
|B|\le |A|.
$$

## Definition: Epimorphism

An epimorphism is a function with a right inverse.

For functions between sets, after accepting the needed choice principle:

$$
f \text{ is epic}
\quad\Longleftrightarrow\quad
f \text{ is surjective}.
$$

For functions between sets, epic means right-invertible, and this matches surjectivity once the choice/trichotomy principle is available.

## Definition: Isomorphism

A function is an isomorphism if it is both monic and epic.

For sets, this corresponds to being bijective.

So in the category of sets:

- monic corresponds to injective
- epic corresponds to surjective
- isomorphism corresponds to bijective

## Axiom: Trichotomy of Cardinality

For ordinary finite numbers, any two numbers can be compared. Cardinality needs a set-theoretic version of that idea.

The axiom of trichotomy of cardinality says that for any sets $A$ and $B$, exactly one of the three size relationships should hold:

$$
|A|<|B|,
\quad
|A|=|B|,
\quad\text{or}\quad
|A|>|B|.
$$

Equivalently, one can state the comparison form:

$$
|A|\le |B|
\quad\text{or}\quad
|B|\le |A|.
$$

This comparability principle is intuitive if cardinality is meant to measure size. For arbitrary sets, however, it is not provable from the earlier axioms by itself. It is closely related to the axiom of choice.

## Proof Templates

When a problem asks for a cardinality statement, first translate it.

To prove

$$
|A|\le |B|,
$$

build an injection $A\to B$.

To prove

$$
|A|\ge |B|,
$$

build a surjection $A\to B$.

To prove

$$
|A|=|B|,
$$

either build a bijection $A\to B$, or prove injections both ways and use Cantor-Schroeder-Bernstein.

To prove a function has a left inverse, try to show it is injective and define a function that undoes it on its image.

To prove a function has a right inverse, try to show it is surjective and choose one preimage for each output.

## Common Confusions

### "If there is a function $\emptyset\to B$, is there a function $B\to\emptyset$?"

Only if $B=\emptyset$.

There is always a function from the empty set to $B$, because there are no inputs to assign. But if $B$ has even one element, a function $B\to\emptyset$ would need to assign that input an output in $\emptyset$, which is impossible.

### "Does $|A|\le |B|$ automatically mean $|B|\ge |A|$?"

It is not a definition. The first statement means there is an injection $A\to B$. The second means there is a surjection $B\to A$.

After proving or accepting the relevant theorem, you may move between them. But the movement is backed by a theorem about functions, not by symbol flipping.

### "Is a left inverse the same as a right inverse?"

No. A left inverse satisfies

$$
g\circ f=\operatorname{id}_A.
$$

A right inverse satisfies

$$
f\circ g=\operatorname{id}_B.
$$

The order matters.

### "Why does a surjection need choice to get a right inverse?"

For every $b\in B$, surjectivity says at least one preimage exists. To define a right inverse, you must pick one such preimage for every $b$. For finite sets this is routine. For arbitrary sets, this kind of simultaneous choice is a serious set-theoretic principle.

## Core Summary

> Cardinality comparisons are function-existence statements. Finite sets are sets that can be bijected with some natural number $n=\{0,\dots,n-1\}$. Composition is order-sensitive, so left and right inverses are different. Injections have left inverses, and surjections have right inverses once the needed choice principle is available. The trichotomy axiom says arbitrary sets can be compared by cardinality, making cardinality a genuine size ordering.
