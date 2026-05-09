# Flashcards: Pigeonhole Modeling and Handshake Counts

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What does the injective form of the pigeonhole principle say?

A: If $|A|>|B|$, then every function $f:A\to B$ is not injective.

---

Q: What does it mean for a function $f:A\to B$ to be non-injective?

A: There exist distinct $a_1,a_2\in A$ such that $f(a_1)=f(a_2)$.

---

Q: In a pigeonhole proof, what should the function record?

A: The property that the problem wants two or more objects to share.

---

Q: In the handshake-count proof, what is the domain?

A: The set $A$ of people in the room, often modeled as $A=\{0,1,\dots,n-1\}$.

---

Q: In the handshake-count proof, what is the function?

A: The function $d:A\to \{0,1,\dots,n-1\}$ defined by
$$
d(a)=|\{b\in A\mid \text{$a$ has shaken $b$'s hand}\}|.
$$

---

Q: What does $d(a)$ represent?

A: The number of other people whose hands person $a$ has shaken.

---

Q: What does it mean for the handshake relation to be symmetric?

A: If $a$ has shaken $b$'s hand, then $b$ has shaken $a$'s hand.

---

Q: What does it mean for the handshake relation to be irreflexive?

A: No person counts as shaking their own hand.

## Theorems And Proof Moves

Q: State the handshake-count theorem.

A: In any group of at least two people, two distinct people have shaken the same number of other people's hands.

---

Q: Why is the codomain $\{0,1,\dots,n-1\}$ too large for an immediate pigeonhole argument?

A: It has $n$ elements, the same as the domain, so pigeonhole does not force non-injectivity.

---

Q: What is the key observation that shrinks the possible output set?

A: The counts $0$ and $n-1$ cannot both occur.

---

Q: Why can $0$ and $n-1$ not both be handshake counts?

A: If someone has shaken all $n-1$ other people's hands, then everyone has shaken at least one hand, so no one has count $0$.

---

Q: If everyone has shaken at least one hand, what possible output set can be used?

A: $\{1,2,\dots,n-1\}$, which has $n-1$ elements.

---

Q: If some person has shaken no one's hand, what possible output set can be used?

A: $\{0,1,\dots,n-2\}$, which has $n-1$ elements.

---

Q: After the codomain is reduced to $n-1$ values, what does pigeonhole imply?

A: The handshake-count function is not injective, so two distinct people have the same count.

---

Q: What graph-theory theorem matches the handshake-count theorem?

A: Every finite simple graph with at least two vertices has two distinct vertices of the same degree.

---

Q: In the graph translation, what are people and handshakes?

A: People are vertices, and handshakes are edges.

---

Q: In the graph translation, what is the handshake count?

A: The degree of a vertex.

## Multiple Choice Drill

### MCQ 1

What is the most useful function for the handshake-count theorem?

A. A function from each person to the number of other people whose hands they shook.

B. A function from each person to their name.

C. A function from each possible count to a person with that count.

D. A function from each handshake to the room.

Answer: A

---

### MCQ 2

If there are $n$ people, what are the initially possible handshake counts for one person?

A. $1,2,\dots,n$.

B. $0,1,\dots,n-1$.

C. $0,1,\dots,n$.

D. Only $0$ and $n-1$.

Answer: B

---

### MCQ 3

Why does the initial codomain $\{0,\dots,n-1\}$ not immediately prove the theorem?

A. It is infinite.

B. It has the same size as the set of people.

C. It has no natural numbers.

D. It is not a set.

Answer: B

---

### MCQ 4

Which two handshake counts cannot both occur in the same room?

A. $1$ and $2$.

B. $0$ and $1$.

C. $0$ and $n-1$.

D. $n-2$ and $n-1$.

Answer: C

---

### MCQ 5

If every person has shaken at least one hand, which value is excluded?

A. $0$.

B. $1$.

C. $n-2$.

D. $n-1$.

Answer: A

---

### MCQ 6

If some person has handshake count $0$, which value is excluded?

A. $0$.

B. $1$.

C. $n-2$.

D. $n-1$.

Answer: D

---

### MCQ 7

What does non-injectivity of the handshake-count function give?

A. Two people shook hands with each other.

B. Two people shook no hands.

C. Two distinct people have the same handshake count.

D. Everyone shook the same number of hands.

Answer: C

---

### MCQ 8

In graph language, the handshake-count function is the:

A. path function.

B. degree function.

C. edge-deletion function.

D. connected-component function.

Answer: B

---

### MCQ 9

Why is the condition $n\ge 2$ necessary?

A. The conclusion requires two distinct people.

B. Pigeonhole never works with one element.

C. No functions exist from one-element sets.

D. One person can shake infinitely many hands.

Answer: A

---

### MCQ 10

What is the main proof-writing lesson of this lecture?

A. Always choose $\mathbb{N}$ as the codomain.

B. A pigeonhole proof must define the relevant function explicitly.

C. Every finite function is non-injective.

D. Handshake problems do not need case splits.

Answer: B
