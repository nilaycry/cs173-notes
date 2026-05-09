# Flashcards: Completing the Handshake Proof

Use these as quick recall prompts before looking at the answers.

## Definitions

Q: What is the handshake-count theorem?

A: In any group of at least two people, there are two distinct people who have shaken the same number of other people's hands.

---

Q: In the handshake proof, what does $A$ represent?

A: The set of people, often modeled as $A=\{0,1,\dots,n-1\}$.

---

Q: In the handshake proof, what does $H\subseteq A\times A$ represent?

A: The handshake relation. The statement $(p,q)\in H$ means person $p$ has shaken person $q$'s hand.

---

Q: What does the function $f:A\to B$ do?

A: It sends each person to their handshake count:
$$
f(p)=|\{q\in A\mid (p,q)\in H\}|.
$$

---

Q: What is $D$ in the handshake proof?

A: The set of all possible handshake counts, $D=\{0,1,\dots,n-1\}$.

---

Q: What is $B$ in the handshake proof?

A: The set of actual handshake counts that occur among the people in the room.

---

Q: Why is $B\subseteq D$?

A: Every actual handshake count is a possible handshake count.

## Theorems And Proof Moves

Q: Why is $D$ not enough as the codomain for pigeonhole?

A: $|D|=|A|=n$, so pigeonhole does not force a function $A\to D$ to be non-injective.

---

Q: What must be proved about $B$ before pigeonhole applies?

A: That $|B|<|A|$.

---

Q: If every person has shaken at least one hand, which value is not in $B$?

A: $0$.

---

Q: If some person has shaken no hands, which value is not in $B$?

A: $n-1$.

---

Q: Why does $f(u)=n-1$ imply $u$ shook everyone else's hand?

A: The set of people whose hands $u$ shook is a subset of $A\setminus\{u\}$, and both sets have $n-1$ elements, so they are equal.

---

Q: Where is the symmetry of handshakes used?

A: It turns $(u,p)\in H$ into $(p,u)\in H$.

---

Q: What contradiction appears in the second case?

A: A person $p$ is assumed to have count $0$, but the argument forces $(p,u)\in H$ for some $u$, so $f(p)>0$.

---

Q: What finite-set fact is used in the second case?

A: If $X$ and $Y$ are finite, $X\subseteq Y$, and $|X|=|Y|$, then $X=Y$.

---

Q: What graph-theory theorem matches the handshake theorem?

A: Every finite simple graph with at least two vertices has two distinct vertices with the same degree.

---

Q: In the graph translation, what is a handshake count?

A: A vertex degree.

## Multiple Choice Drill

### MCQ 1

What is the main reason to define $B$ as the set of actual handshake counts?

A. To make the codomain small enough for pigeonhole.

B. To make the domain infinite.

C. To avoid defining a function.

D. To prove every count occurs.

Answer: A

---

### MCQ 2

If $n$ people are in the room, what is $D$?

A. $\{1,2,\dots,n\}$

B. $\{0,1,\dots,n-1\}$

C. $\{0,1,\dots,n\}$

D. $\mathbb{N}$

Answer: B

---

### MCQ 3

Why does pigeonhole not immediately apply to $f:A\to D$?

A. $D$ is empty.

B. $D$ has the same size as $A$.

C. $D$ is not finite.

D. $f$ is not a function.

Answer: B

---

### MCQ 4

If some person has handshake count $0$, why is count $n-1$ impossible?

A. No one can shake more than one hand.

B. A person with count $n-1$ would have shaken the count-$0$ person's hand.

C. $n-1$ is not a natural number.

D. Pigeonhole says so directly.

Answer: B

---

### MCQ 5

Which assumption lets us conclude that if $(u,p)\in H$, then $(p,u)\in H$?

A. Injectivity.

B. Surjectivity.

C. Symmetry of handshakes.

D. Finite cardinality.

Answer: C

---

### MCQ 6

In the second case, why is $p\ne u$?

A. Because $f(p)=0$ and $f(u)=n-1$, and $n\ge 2$.

B. Because $p$ and $u$ are chosen from different sets.

C. Because no two people can have the same count.

D. Because $H$ is empty.

Answer: A

---

### MCQ 7

What conclusion follows once $|A|>|B|$?

A. $f:A\to B$ is not injective.

B. $f:A\to B$ is bijective.

C. $B=A$.

D. Every person has count $0$.

Answer: A

---

### MCQ 8

What does non-injectivity of $f$ mean in the handshake proof?

A. Two distinct people have the same handshake count.

B. Some person shook everyone's hand.

C. Some person shook no one's hand.

D. No handshakes occurred.

Answer: A

---

### MCQ 9

Which statement is true for finite sets but not for arbitrary infinite sets?

A. If $X\subseteq Y$ and $|X|=|Y|$, then $X=Y$.

B. If $X=Y$, then $X\subseteq Y$.

C. If $X\subseteq Y$, then $|X|\le |Y|$.

D. If $X$ is empty, then $X\subseteq Y$.

Answer: A

---

### MCQ 10

In graph language, the theorem says:

A. Every finite simple graph with at least two vertices has two vertices of the same degree.

B. Every finite simple graph is connected.

C. Every finite simple graph has a cycle.

D. Every finite simple graph has a vertex of degree $n-1$.

Answer: A
