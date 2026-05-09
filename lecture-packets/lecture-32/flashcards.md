# Flashcards: Infinity and Cardinality

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What does $\binom{n}{k}$ count?

A: It counts the number of $k$-element subsets of an $n$-element set.

---

Q: What does it mean for two sets $A$ and $B$ to have the same cardinality?

A: There exists a bijection $h:A\to B$.

---

Q: What does it mean for a function $f:X\to Y$ to be injective?

A: For all $a,b\in X$, if $f(a)=f(b)$, then $a=b$.

---

Q: What does it mean for a function $f:X\to Y$ to be surjective?

A: For every $y\in Y$, there exists $x\in X$ such that $f(x)=y$.

---

Q: What does it mean for a function to be bijective?

A: It is both injective and surjective.

---

Q: What does it mean for a set $F$ to be finite?

A: There exists $n\in\mathbb{N}$ such that $|F|=|n|$.

---

Q: What does it mean for a set $X$ to be infinite?

A: It is not finite. Equivalently, for every $n\in\mathbb{N}$, $|X|\ne |n|$.

---

Q: What does it mean for $X$ to be Dedekind infinite?

A: There exists a proper subset $Y\subsetneq X$ such that $|Y|=|X|$.

---

Q: What does it mean for $X$ to be Dedekind finite?

A: Every proper subset $Y\subsetneq X$ has $|Y|<|X|$.

## Theorems And Proof Moves

Q: What is the Hilbert's hotel move for fitting one new guest into rooms indexed by $\mathbb{N}$?

A: Move the current guest in room $n$ to room $n+1$, leaving room $0$ empty.

---

Q: Which function proves $|\mathbb{N}|=|\mathbb{N}^+|$?

A: The function $f:\mathbb{N}\to\mathbb{N}^+$ given by $f(n)=n+1$.

---

Q: Why is $f(n)=n+1$ from $\mathbb{N}$ to $\mathbb{N}^+$ injective?

A: If $f(a)=f(b)$, then $a+1=b+1$, so $a=b$.

---

Q: Why is $f(n)=n+1$ from $\mathbb{N}$ to $\mathbb{N}^+$ surjective?

A: For any $y\in\mathbb{N}^+$, $y-1\in\mathbb{N}$ and $f(y-1)=y$.

---

Q: What theorem lets you prove $|X|=|Y|$ using injections in both directions?

A: The Cantor-Schröder-Bernstein theorem.

---

Q: What are two injections used to show $|\mathbb{Z}|=|\mathbb{N}|$?

A: Use $g:\mathbb{N}\to\mathbb{Z}$ by $g(n)=n$, and use $f:\mathbb{Z}\to\mathbb{N}$ by
$$
f(z)=
\begin{cases}
2z, & z\ge 0,\\
-2z-1, & z<0.
\end{cases}
$$

---

Q: What finite-set fact fails for infinite sets?

A: For finite sets, $A\subsetneq B$ implies $|A|<|B|$. Infinite sets can have $A\subsetneq B$ and $|A|=|B|$.

---

Q: What should "by definition" mean in a proof?

A: The step follows by expanding the actual definition of a symbol or term.

---

Q: Why is a list like $0,-1,1,-2,2,\dots$ not automatically a complete proof?

A: It suggests a function, but a proof must define the function and verify the needed property, usually injectivity, surjectivity, or both.

## Multiple Choice Drill

### MCQ 1

What does $\binom{5}{2}$ count?

A. Ordered pairs from a five-element set.

B. Two-element subsets of a five-element set.

C. Functions from $5$ to $2$.

D. Subsets of size at most two.

Answer: B

---

### MCQ 2

Which statement proves $|A|=|B|$ by definition?

A. There is an injection $A\to B$.

B. There is a surjection $A\to B$.

C. There is a bijection $A\to B$.

D. $A\subseteq B$.

Answer: C

---

### MCQ 3

Which function proves $|\mathbb{N}|=|\mathbb{N}^+|$ when $\mathbb{N}$ includes $0$?

A. $f(n)=n-1$

B. $f(n)=n+1$

C. $f(n)=2n$

D. $f(n)=0$

Answer: B

---

### MCQ 4

Why does $A\subsetneq B$ not always imply $|A|<|B|$?

A. Subset notation has no meaning for infinite sets.

B. Infinite sets can be in bijection with proper subsets.

C. Bijections only work for finite sets.

D. Proper subsets must be empty.

Answer: B

---

### MCQ 5

What does Dedekind infinite mean?

A. The set is not equal to any natural number.

B. The set has a proper subset of the same cardinality.

C. The set has no subsets.

D. The set has a largest element.

Answer: B

---

### MCQ 6

Which theorem says that injections $X\to Y$ and $Y\to X$ imply $|X|=|Y|$?

A. Pigeonhole Principle

B. Binomial Theorem

C. Cantor-Schröder-Bernstein

D. Inclusion-Exclusion

Answer: C

---

### MCQ 7

For
$$
f(z)=
\begin{cases}
2z, & z\ge 0,\\
-2z-1, & z<0,
\end{cases}
$$
what is $f(-3)$?

A. $-6$

B. $6$

C. $5$

D. $7$

Answer: C

---

### MCQ 8

Which proof step is a valid use of "by definition"?

A. Claiming every infinite set is Dedekind infinite without naming any assumption.

B. Expanding $|A|=|B|$ into "there exists a bijection $A\to B$."

C. Saying $2+2=4$ in any proof.

D. Applying a theorem without citing it.

Answer: B
