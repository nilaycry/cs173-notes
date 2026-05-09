# Flashcards: Countability and Cantor's Theorem

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What is a finite string over an alphabet $A$?

A: A function $b:n\to A$ for some $n\in\mathbb{N}$.

---

Q: What is an infinite string over an alphabet $A$?

A: A function $b:\mathbb{N}\to A$.

---

Q: What is an infinite binary string?

A: A function $b:\mathbb{N}\to\{0,1\}$.

---

Q: What does it mean for a set $X$ to be countable?

A: $|X|\le |\mathbb{N}|$. Equivalently, there exists an injection $X\to\mathbb{N}$.

---

Q: What does countably infinite mean?

A: The set is both countable and infinite.

---

Q: What does uncountable mean?

A: Not countable. Equivalently, the set cannot be injected into $\mathbb{N}$.

---

Q: What is the power set of $X$?

A:
$$
\mathcal{P}(X)=\{Y\mid Y\subseteq X\}.
$$

---

Q: What is the diagonal set in Cantor's theorem?

A: Given $\varphi:X\to\mathcal{P}(X)$,
$$
\Delta=\{x\in X\mid x\notin\varphi(x)\}.
$$

## Theorems And Proof Moves

Q: What theorem proves $|X|=|Y|$ from injections in both directions?

A: Cantor-Schroder-Bernstein.

---

Q: What function injects $\mathbb{N}$ into $\mathbb{N}\times\mathbb{N}$?

A: For example,
$$
f(n)=(0,n).
$$

---

Q: What function injects $\mathbb{N}\times\mathbb{N}$ into $\mathbb{N}$?

A:
$$
g(x,y)=2^x3^y.
$$

---

Q: Why is $g(x,y)=2^x3^y$ injective?

A: By unique prime factorization. The exponents of $2$ and $3$ determine $x$ and $y$ uniquely.

---

Q: What is the cardinality relationship between $\mathbb{N}$ and $\mathbb{Q}$?

A:
$$
|\mathbb{N}|=|\mathbb{Q}|.
$$

---

Q: Why are the rational numbers countable?

A: Rationals can be encoded by ordered pairs of integers, and $\mathbb{Z}$ and $\mathbb{N}\times\mathbb{N}$ are countable.

---

Q: State Cantor's theorem.

A: For every set $X$,
$$
|X|<|\mathcal{P}(X)|.
$$

---

Q: In Cantor's theorem, what assumption starts the contradiction?

A: Assume there exists a surjection
$$
\varphi:X\to\mathcal{P}(X).
$$

---

Q: Why is $\Delta\in\mathcal{P}(X)$?

A: $\Delta$ is defined as a subset of $X$, so it is an element of the power set of $X$.

---

Q: Why does surjectivity give a $\delta\in X$ such that $\varphi(\delta)=\Delta$?

A: Because $\Delta$ is in the codomain $\mathcal{P}(X)$, and surjectivity says every codomain element has a preimage.

---

Q: What contradiction occurs if $\delta\in\Delta$?

A: By definition of $\Delta$, $\delta\notin\varphi(\delta)=\Delta$, contradicting $\delta\in\Delta$.

---

Q: What contradiction occurs if $\delta\notin\Delta$?

A: By definition of $\Delta$, $\delta\in\varphi(\delta)=\Delta$, contradicting $\delta\notin\Delta$.

---

Q: What does Cantor's theorem imply about $\mathcal{P}(\mathbb{N})$?

A: It is uncountable, because
$$
|\mathbb{N}|<|\mathcal{P}(\mathbb{N})|.
$$

## Multiple Choice Drill

### MCQ 1

Which object is an infinite binary string?

A. A subset of $\{0,1\}$.

B. A function $\mathbb{N}\to\{0,1\}$.

C. A function $\{0,1\}\to\mathbb{N}$.

D. A finite list of zeros and ones.

Answer: B

---

### MCQ 2

What does countable mean?

A. Finite.

B. Infinite.

C. Has cardinality at most $|\mathbb{N}|$.

D. Has a power set.

Answer: C

---

### MCQ 3

Which set is countably infinite?

A. $\{0,1,2\}$

B. $\mathbb{Z}$

C. $\mathcal{P}(\mathbb{N})$

D. $\mathcal{P}(\{0,1\})$

Answer: B

---

### MCQ 4

Why does the map $(x,y)\mapsto x+y$ fail to inject $\mathbb{N}\times\mathbb{N}$ into $\mathbb{N}$?

A. Addition is undefined on natural numbers.

B. Different pairs can have the same sum.

C. The codomain is too large.

D. It is not a function.

Answer: B

---

### MCQ 5

Why does the map $(x,y)\mapsto 2^x3^y$ work as an injection?

A. Every natural number is prime.

B. Addition is commutative.

C. Unique prime factorization recovers $x$ and $y$.

D. Every output is even.

Answer: C

---

### MCQ 6

What is the diagonal set used for in Cantor's theorem?

A. To construct a finite subset of $X$.

B. To build an element of $\mathcal{P}(X)$ that cannot be hit by a supposed surjection.

C. To list all elements of $X$.

D. To prove $\mathbb{Q}$ is finite.

Answer: B

---

### MCQ 7

If $\varphi(\delta)=\Delta$ and $\delta\in\Delta$, what follows by definition of $\Delta$?

A. $\delta\notin\varphi(\delta)$

B. $\delta\in\varphi(\delta)$

C. $\Delta=\emptyset$

D. $\varphi$ is injective

Answer: A

---

### MCQ 8

What does Cantor's theorem imply about largest cardinalities?

A. There is a largest finite set.

B. $\mathbb{N}$ is the largest set.

C. No set has a largest possible cardinality, because its power set is larger.

D. Every infinite set has the same cardinality.

Answer: C
