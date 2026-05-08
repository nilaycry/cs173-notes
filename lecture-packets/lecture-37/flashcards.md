# Flashcards: The Pigeonhole Principle

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What does $|A|\le |B|$ mean in function language?

A: There exists an injective function $f:A\to B$.

---

Q: What does $|A|=|B|$ mean in function language?

A: There exists a bijective function $f:A\to B$.

---

Q: What does it mean for $f:A\to B$ to be injective?

A: For all $a_1,a_2\in A$, if $a_1\ne a_2$, then $f(a_1)\ne f(a_2)$.

---

Q: What is the negation of injectivity?

A: There exist $a_1,a_2\in A$ such that $a_1\ne a_2$ and $f(a_1)=f(a_2)$.

---

Q: What is a fiber of a function $f:A\to B$ over $b\in B$?

A: The set $\{a\in A\mid f(a)=b\}$.

---

Q: In pigeonhole language, what are the "pigeons"?

A: The elements of the domain, meaning the objects being assigned.

---

Q: In pigeonhole language, what are the "holes"?

A: The elements of the codomain, meaning the possible labels, buckets, or properties.

## Theorems And Proof Moves

Q: State the injective form of the pigeonhole principle.

A: If $|A|>|B|$, then every function $f:A\to B$ is not injective.

---

Q: State the surjective form of the pigeonhole principle.

A: If $|A|<|B|$, then every function $f:A\to B$ is not surjective.

---

Q: State the finite quantitative form of the pigeonhole principle.

A: If $|A|=n$, $|B|=k$, and $n,k\in\mathbb{N}^+$, then for every $f:A\to B$, there exists $b\in B$ such that
$$
\left|\{a\in A\mid f(a)=b\}\right|\ge \left\lceil\frac{n}{k}\right\rceil.
$$

---

Q: What does the bound $\lceil n/k\rceil$ measure?

A: It is the minimum size that at least one fiber must have when $n$ inputs are assigned to $k$ outputs.

---

Q: What are the three required parts of a pigeonhole model?

A: The domain, the codomain, and the function from the domain to the codomain.

---

Q: Why is an arbitrary function usually not enough in a modeling problem?

A: The function must record the property in the original problem. Otherwise non-injectivity may not translate into the desired real-world or mathematical conclusion.

---

Q: Why does the function $f:\mathbb{N}\to\mathbb{N}$ given by $f(x)=2x$ not prove that $\mathbb{N}$ is smaller than itself?

A: It is injective and not surjective, but for infinite sets a particular injective non-surjective function does not establish strict inequality.

---

Q: In the sock-color model, what is the relevant function?

A: The function $c:A\to C$ that sends each sock in $A$ to its color in $C$.

---

Q: If $c(s_i)=c(s_j)$ for distinct socks $s_i,s_j$, what has been proved?

A: The two socks have the same color.

---

Q: What is the proof strategy for showing two vertices in a finite simple graph have the same degree?

A: Use the degree function from vertices to possible degree values, then show there are fewer possible degree values than vertices.

---

Q: Why can a simple graph on $n\ge 2$ vertices not have both degree $0$ and degree $n-1$ vertices?

A: A degree $n-1$ vertex is adjacent to every other vertex, so no vertex can be isolated.

## Multiple Choice Drill

### MCQ 1

Which statement best matches the pigeonhole principle?

A. A function from a larger set to a smaller set cannot be injective.

B. Every function from a larger set to a smaller set is surjective.

C. Every function between finite sets is bijective.

D. A function from a smaller set to a larger set cannot be injective.

Answer: A

---

### MCQ 2

A proof wants to show that two different students have the same birth month. What should the function most naturally record?

A. Each student mapped to their birth month.

B. Each month mapped to a student.

C. Each student mapped to their name.

D. Each month mapped to the number $12$.

Answer: A

---

### MCQ 3

What conclusion follows from proving $f:A\to B$ is not injective?

A. Some $b\in B$ is not hit by $f$.

B. There exist distinct $a_1,a_2\in A$ with $f(a_1)=f(a_2)$.

C. Every element of $B$ has two preimages.

D. The sets $A$ and $B$ are equal.

Answer: B

---

### MCQ 4

If $|A|=17$ and $|B|=5$, what size fiber is guaranteed for every function $f:A\to B$?

A. At least $3$.

B. At least $4$.

C. At least $5$.

D. At least $12$.

Answer: B

---

### MCQ 5

Why is the answer to MCQ 4 equal to $4$?

A. Because $17-5=12$.

B. Because $\lceil 17/5\rceil=4$.

C. Because $5$ divides $20$.

D. Because every fiber has exactly $4$ elements.

Answer: B

---

### MCQ 6

Which mistake most commonly breaks a pigeonhole proof?

A. Defining the function after applying the theorem.

B. Using too many variables.

C. Writing the codomain with braces.

D. Using finite sets.

Answer: A

---

### MCQ 7

If $|A|<|B|$, what does the surjective form of the pigeonhole principle say about $f:A\to B$?

A. $f$ must be injective.

B. $f$ must be bijective.

C. $f$ cannot be surjective.

D. $f$ has exactly one fiber.

Answer: C

---

### MCQ 8

In a simple graph with $n$ vertices, why is the degree function not immediately a map into only $n-1$ values?

A. Because degrees are not numbers.

B. Because degrees can initially range from $0$ to $n-1$, which gives $n$ possible values.

C. Because every graph is regular.

D. Because vertices do not have degrees.

Answer: B

---

### MCQ 9

What extra observation makes the equal-degree graph proof work?

A. A graph cannot have any degree $0$ vertices.

B. A graph cannot have any degree $n-1$ vertices.

C. A graph cannot have both a degree $0$ vertex and a degree $n-1$ vertex.

D. Every graph has a cycle.

Answer: C

---

### MCQ 10

What is the main role of modeling in a pigeonhole problem?

A. It converts the original claim into a statement about a specific function.

B. It avoids using definitions.

C. It proves that all sets are finite.

D. It replaces the need to compare sizes.

Answer: A
