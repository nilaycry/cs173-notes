# Practice: Modular Congruence

## Quick Computations

### Problem 1

Decide whether

$$
17 \equiv 5 \pmod 6.
$$

Answer:

Yes. Since $17-5=12$ and $6 \mid 12$, we have $17 \equiv 5 \pmod 6$.

### Problem 2

Decide whether

$$
14 \equiv 2 \pmod 5.
$$

Answer:

No. Since $14-2=12$ and $5 \nmid 12$, the congruence is false.

### Problem 3

Find the standard representative of $-3$ modulo 7.

Answer:

Since $-3+7=4$, we have

$$
-3 \equiv 4 \pmod 7.
$$

So the standard representative is 4.

### Problem 4

Find the standard representative of 41 modulo 6.

Answer:

$$
41 = 6\cdot 6 + 5.
$$

So

$$
41 \equiv 5 \pmod 6.
$$

## Proof Practice

### Problem 5

Prove that congruence modulo $n$ is reflexive.

Solution:

Let $x \in \mathbb{Z}$. We need to prove

$$
x \equiv x \pmod n.
$$

By definition, this means we need to prove

$$
n \mid (x-x).
$$

But $x-x=0$, and $n \mid 0$ because $0=n\cdot 0$.

Therefore $x \equiv x \pmod n$.

### Problem 6

Prove that congruence modulo $n$ is symmetric.

Solution:

Assume

$$
x \equiv y \pmod n.
$$

By definition,

$$
n \mid (x-y).
$$

So there exists $k \in \mathbb{Z}$ such that

$$
x-y=nk.
$$

Multiplying both sides by $-1$ gives

$$
y-x=n(-k).
$$

Since $-k \in \mathbb{Z}$, we have

$$
n \mid (y-x).
$$

Therefore

$$
y \equiv x \pmod n.
$$

### Problem 7

Prove that congruence modulo $n$ is transitive.

Solution:

Assume

$$
x \equiv y \pmod n
$$

and

$$
y \equiv z \pmod n.
$$

Then there exist integers $a$ and $b$ such that

$$
x-y=na
$$

and

$$
y-z=nb.
$$

Add the equations:

$$
(x-y)+(y-z)=na+nb.
$$

So

$$
x-z=n(a+b).
$$

Since $a+b \in \mathbb{Z}$, we have $n \mid (x-z)$.

Therefore

$$
x \equiv z \pmod n.
$$

### Problem 8

Prove that if $x \equiv y \pmod n$, then $x+z \equiv y+z \pmod n$.

Solution:

Assume $x \equiv y \pmod n$. Then $n \mid (x-y)$.

Now

$$
(x+z)-(y+z)=x-y.
$$

Since $n \mid (x-y)$, it follows that

$$
n \mid ((x+z)-(y+z)).
$$

Therefore

$$
x+z \equiv y+z \pmod n.
$$

### Problem 9

Prove that if $x \equiv y \pmod n$, then $xz \equiv yz \pmod n$.

Solution:

Assume $x \equiv y \pmod n$. Then there exists $k \in \mathbb{Z}$ such that

$$
x-y=nk.
$$

Multiply by $z$:

$$
z(x-y)=znk.
$$

So

$$
xz-yz=n(zk).
$$

Since $zk \in \mathbb{Z}$, we have

$$
n \mid (xz-yz).
$$

Therefore

$$
xz \equiv yz \pmod n.
$$

## Trap Problems

### Problem 10

Explain why the following inference is invalid:

$$
2\cdot 6 \equiv 4\cdot 6 \pmod 6
\quad\Rightarrow\quad
2 \equiv 4 \pmod 6.
$$

Answer:

The left side is true because both $2\cdot 6$ and $4\cdot 6$ are multiples of 6, so both are congruent to 0 modulo 6.

But the conclusion is false because

$$
2-4=-2,
$$

and $6 \nmid -2$.

So cancellation is not automatically valid in modular congruence.

### Problem 11

Give a counterexample to the claim:

If $xz \equiv yz \pmod n$ and $z \ne 0$, then $x \equiv y \pmod n$.

Answer:

Let $n=6$, $x=2$, $y=4$, and $z=6$.

Then

$$
xz=12
$$

and

$$
yz=24.
$$

Since $12-24=-12$ and $6 \mid -12$,

$$
12 \equiv 24 \pmod 6.
$$

But

$$
2 \not\equiv 4 \pmod 6.
$$

So the claim is false.

### Problem 12

Explain why $x \equiv y \pmod n$ should be treated as a sentence, not a number.

Answer:

It asserts that $n$ divides $x-y$. That assertion is either true or false. In this lecture, "mod n" is part of the relation notation, not a standalone operation that returns a number.
