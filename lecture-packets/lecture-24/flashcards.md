# Flashcards: Modular Congruence

Use these as quick recall prompts before checking the answers.

## Definitions

Q: What does $x \equiv y \pmod n$ mean?

A: For $n \in \mathbb{N}^+$ and $x,y \in \mathbb{Z}$, it means $n \mid (x-y)$.

---

Q: What is the remainder condition in the Euclidean division lemma?

A: If $x = yq+r$ with $y>0$, then $0 \le r < y$.

---

Q: What are the possible remainders modulo $n$?

A: $0,1,2,\ldots,n-1$.

---

Q: What does $x \equiv 0 \pmod n$ mean?

A: It means $n \mid x$, so $x$ is a multiple of $n$.

---

Q: What does it mean for two integers to have the same remainder modulo $n$?

A: It means they are congruent modulo $n$.

---

Q: What is the formal definition of divisibility?

A: For $a,b \in \mathbb{Z}$, $a \mid b$ means $(\exists k \in \mathbb{Z})(ak=b)$.

---

Q: Modulo 2, what do the two remainder classes represent?

A: Remainder 0 represents even integers, and remainder 1 represents odd integers.

---

Q: Why is $11 \equiv 5 \pmod 6$?

A: Because $11-5=6$, and $6 \mid 6$.

---

Q: Why is $-1 \equiv 5 \pmod 6$?

A: Because $-1-5=-6$, and $6 \mid -6$.

---

Q: What domain sentence should usually appear before proving something about congruence modulo $n$?

A: Let $n \in \mathbb{N}^+$ and let the relevant variables, usually $x,y,z,k$, belong to $\mathbb{Z}$.

## Properties

Q: What are the three equivalence-relation properties?

A: Reflexive, symmetric, and transitive.

---

Q: Why is congruence modulo $n$ reflexive?

A: Because $x-x=0$, and $n \mid 0$.

---

Q: Why is congruence modulo $n$ symmetric?

A: If $n \mid (x-y)$, then $n \mid -(x-y)=y-x$.

---

Q: Why is congruence modulo $n$ transitive?

A: If $n \mid (x-y)$ and $n \mid (y-z)$, then $n$ divides their sum, $x-z$.

---

Q: If $x \equiv y \pmod n$, what can you say about $x+z$ and $y+z$?

A: $x+z \equiv y+z \pmod n$.

---

Q: If $x \equiv y \pmod n$, what can you say about $xz$ and $yz$?

A: $xz \equiv yz \pmod n$.

---

Q: Why is cancellation dangerous in modular congruence?

A: Multiplication can destroy information modulo $n$, especially when the multiplier shares factors with $n$ or is congruent to 0.

---

Q: Give an example where cancellation fails modulo 6.

A: $2\cdot 6 \equiv 4\cdot 6 \pmod 6$, but $2 \not\equiv 4 \pmod 6$.

## Multiple Choice Drill

### MCQ 1

What does $x \equiv y \pmod n$ mean?

A. $x=y+n$

B. $n \mid (x-y)$

C. $x \mid (y-n)$

D. $x$ and $y$ are both positive

Answer: B

---

### MCQ 2

Which pair is congruent modulo 6?

A. 5 and 11

B. 5 and 15

C. 2 and 5

D. 4 and 9

Answer: A

---

### MCQ 3

Which statement is true?

A. $x \equiv y \pmod n$ is a number.

B. $x \equiv y \pmod n$ is a sentence that can be true or false.

C. The "mod n" part can always be omitted.

D. Congruence modulo $n$ means $x=y$.

Answer: B

---

### MCQ 4

What is the remainder of 26 after division by 6?

A. 0

B. 1

C. 2

D. 6

Answer: C

---

### MCQ 5

Which integer is congruent to $-1$ modulo 6?

A. 0

B. 2

C. 5

D. 6

Answer: C

---

### MCQ 6

Which property says that $x \equiv x \pmod n$?

A. Reflexivity

B. Symmetry

C. Transitivity

D. Associativity

Answer: A

---

### MCQ 7

Which property says that if $x \equiv y \pmod n$, then $y \equiv x \pmod n$?

A. Reflexivity

B. Symmetry

C. Transitivity

D. Distributivity

Answer: B

---

### MCQ 8

Which property says that if $x \equiv y \pmod n$ and $y \equiv z \pmod n$, then $x \equiv z \pmod n$?

A. Reflexivity

B. Symmetry

C. Transitivity

D. Commutativity

Answer: C

---

### MCQ 9

If $x \equiv y \pmod n$, why is $x+z \equiv y+z \pmod n$?

A. Because $(x+z)-(y+z)=x-y$.

B. Because $z$ must be a multiple of $n$.

C. Because addition is undefined modulo $n$.

D. Because $x+z=y+z$.

Answer: A

---

### MCQ 10

Why does cancellation not always work modulo $n$?

A. Modular congruence is not reflexive.

B. Multiplication can collapse different classes into the same class.

C. Addition is not allowed in modular arithmetic.

D. Congruence only works for positive integers.

Answer: B

---

### MCQ 11

Modulo 6, what does the class represented by 0 contain?

A. Only 0

B. Only 6

C. All multiples of 6

D. All odd integers

Answer: C

---

### MCQ 12

Which is the standard list of representatives modulo 6?

A. $1,2,3,4,5,6$

B. $0,1,2,3,4,5$

C. $-6,-5,-4,-3,-2,-1$

D. $0,2,4,6,8,10$

Answer: B
