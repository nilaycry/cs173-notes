# Flashcards: Finite Cardinality, Inverses, and Trichotomy

Use these as quick recall prompts before checking the answers.

## Definitions

Q: What does it mean for $f:A\to B$ to be a function in set language?

A: It means $f\subseteq A\times B$ and for every $a\in A$, there exists a unique $b\in B$ such that $(a,b)\in f$.

---

Q: What is the identity function on a set $A$?

A: It is $\operatorname{id}_A:A\to A$ defined by $\operatorname{id}_A(a)=a$ for every $a\in A$.

---

Q: What is the composition $g\circ f$ when $f:A\to B$ and $g:B\to C$?

A: It is the function $g\circ f:A\to C$ defined by $(g\circ f)(a)=g(f(a))$.

---

Q: What is a left inverse for $f:A\to B$?

A: A function $g:B\to A$ such that $g\circ f=\operatorname{id}_A$.

---

Q: What is a right inverse for $f:A\to B$?

A: A function $g:B\to A$ such that $f\circ g=\operatorname{id}_B$.

---

Q: What does it mean for a set $S$ to be finite?

A: There exists $n\in\mathbb{N}$ such that $|S|=|n|$, meaning $S$ is in bijection with $n=\{0,1,\dots,n-1\}$.

---

Q: What is a monomorphism for functions between sets?

A: A function with a left inverse. For sets, this is equivalent to being injective.

---

Q: What is an epimorphism for functions between sets?

A: A function with a right inverse. For sets, after the relevant choice principle is accepted, this is equivalent to being surjective.

---

Q: What is an isomorphism between sets?

A: A function that is both monic and epic; for sets, this corresponds to a bijection.

---

Q: What does the trichotomy of cardinality say?

A: For any sets $A$ and $B$, their cardinalities are comparable: $|A|<|B|$, $|A|=|B|$, or $|A|>|B|$.

## Theorem Cards

Q: What does Cantor-Schroeder-Bernstein say?

A: If there is an injection $A\to B$ and an injection $B\to A$, then there is a bijection $A\to B$.

---

Q: If $f:A\to B$ is injective, what kind of inverse does it have?

A: It has a left inverse $g:B\to A$ with $g\circ f=\operatorname{id}_A$.

---

Q: If $f:A\to B$ is injective and $g$ is a left inverse, what property does $g$ have?

A: $g$ is surjective onto $A$.

---

Q: If $f:A\to B$ is surjective, what kind of inverse do we want?

A: A right inverse $g:B\to A$ with $f\circ g=\operatorname{id}_B$.

---

Q: Why is getting a right inverse from a surjection subtle for arbitrary sets?

A: Because one must choose a preimage in $A$ for every $b\in B$, which uses a choice principle for arbitrary sets.

---

Q: What cardinality implication comes from injections having left inverses?

A: $|A|\le |B|$ implies $|B|\ge |A|$.

---

Q: What cardinality implication comes from surjections having right inverses?

A: $|A|\ge |B|$ implies $|B|\le |A|$.

## Concept Cards

Q: Why is there always a function $\emptyset\to B$?

A: The empty set of ordered pairs is a subset of $\emptyset\times B$, and the required output condition is vacuously true.

---

Q: Why is there no function $B\to\emptyset$ when $B\ne\emptyset$?

A: Any $b\in B$ would need an output in $\emptyset$, but $\emptyset$ has no elements.

---

Q: Why does the empty function $\emptyset\to B$ count as injective?

A: The injectivity condition has no inputs to check, so it is vacuously true.

---

Q: Why is composition not commutative?

A: Even when both orders are defined, applying functions in different orders can produce different outputs.

---

Q: What does $|\mathcal{P}(X)|=2^{|X|}$ mean when $X$ is finite?

A: It means there is a bijection between the power set of $X$ and a set with $2^{|X|}$ elements.

---

Q: What is the binary-string intuition for $\mathcal{P}(X)$ when $|X|=n$?

A: Each subset is encoded by $n$ choices, one for each element: include it or do not include it.

## Multiple Choice Drill

### MCQ 1

For any set $B$, what is the function $\emptyset\to B$?

A. The empty set of ordered pairs.

B. The set $B$ itself.

C. The identity function on $B$.

D. No such function exists unless $B=\emptyset$.

Answer: A

---

### MCQ 2

Why is the empty function $\emptyset\to B$ injective?

A. It hits every element of $B$.

B. It has no inputs on which injectivity could fail.

C. It maps every input to itself.

D. It has exactly one ordered pair.

Answer: B

---

### MCQ 3

If $B\ne\emptyset$, why is there no function $B\to\emptyset$?

A. The domain is too large to be finite.

B. Some input in $B$ would need an output in $\emptyset$.

C. Empty sets cannot appear as codomains.

D. Every function into $\emptyset$ must be surjective.

Answer: B

---

### MCQ 4

What does $g\circ f=\operatorname{id}_A$ say about $g$ relative to $f:A\to B$?

A. $g$ is a left inverse for $f$.

B. $g$ is a right inverse for $f$.

C. $f$ is not a function.

D. $f$ and $g$ have the same domain.

Answer: A

---

### MCQ 5

What does $f\circ g=\operatorname{id}_B$ say about $g$ relative to $f:A\to B$?

A. $g$ is a left inverse for $f$.

B. $g$ is a right inverse for $f$.

C. $g$ is the identity on $A$.

D. $f$ is not injective.

Answer: B

---

### MCQ 6

Which statement is guaranteed when $f:A\to B$ is injective?

A. There exists $g:B\to A$ such that $g\circ f=\operatorname{id}_A$.

B. There exists $g:B\to A$ such that $f\circ g=\operatorname{id}_B$.

C. $f$ is automatically surjective.

D. $A=B$.

Answer: A

---

### MCQ 7

If $g:B\to A$ satisfies $g\circ f=\operatorname{id}_A$, why is $g$ surjective?

A. For every $a\in A$, $g(f(a))=a$.

B. For every $b\in B$, $g(b)=b$.

C. Because $f$ is the empty function.

D. Because every function is surjective.

Answer: A

---

### MCQ 8

Which condition is associated with a monomorphism between sets?

A. Injective / left-invertible.

B. Surjective / right-invertible.

C. Constant / non-invertible.

D. Empty / undefined.

Answer: A

---

### MCQ 9

Which condition is associated with an epimorphism between sets after accepting the needed choice principle?

A. Injective / left-invertible.

B. Surjective / right-invertible.

C. Identity / self-inverse.

D. Empty / vacuous.

Answer: B

---

### MCQ 10

What does the trichotomy of cardinality allow you to assume for arbitrary sets $A$ and $B$?

A. Their cardinalities can be compared.

B. They are always finite.

C. They are always equal.

D. One is always a subset of the other.

Answer: A

---

### MCQ 11

Why is composition order-sensitive?

A. Function composition is not generally commutative.

B. Every function has the same domain.

C. Functions cannot be composed at all.

D. The identity function changes every output.

Answer: A

---

### MCQ 12

For finite $X$, what is the best interpretation of $|\mathcal{P}(X)|=2^{|X|}$?

A. There is a bijection between subsets of $X$ and binary choices for elements of $X$.

B. Every subset of $X$ has exactly two elements.

C. $X$ must have two elements.

D. The power set is always infinite.

Answer: A
