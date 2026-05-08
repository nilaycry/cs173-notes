# Flashcards: Cardinality Through Functions

Use these as quick recall prompts before checking the answers.

## Definitions

Q: What does it mean for $f:A\to B$ to be injective?

A: For all $a_1,a_2 \in A$, if $f(a_1)=f(a_2)$, then $a_1=a_2$.

---

Q: What is the contrapositive-style version of injectivity?

A: For all $a_1,a_2 \in A$, if $a_1\ne a_2$, then $f(a_1)\ne f(a_2)$.

---

Q: What does it mean for $f:A\to B$ to be surjective?

A: For every $b\in B$, there exists $a\in A$ such that $f(a)=b$.

---

Q: What does it mean for $f:A\to B$ to be bijective?

A: It means $f$ is both injective and surjective.

---

Q: What does $|A|\le |B|$ mean by definition?

A: There exists an injective function $f:A\to B$.

---

Q: What does $|A|\ge |B|$ mean by definition?

A: There exists a surjective function $g:A\to B$.

---

Q: What does $|A|=|B|$ mean by definition?

A: There exists a bijective function $h:A\to B$.

---

Q: Why does an injection from $A$ to $B$ suggest $A$ is no larger than $B$?

A: Because the elements of $A$ can be placed into $B$ without collisions.

---

Q: Why does a surjection from $A$ to $B$ suggest $A$ is no smaller than $B$?

A: Because the elements of $A$ can cover every element of $B$.

---

Q: What is the Cantor-Schroeder-Bernstein theorem?

A: If there is an injection $A\to B$ and an injection $B\to A$, then there is a bijection between $A$ and $B$.

## Proof Moves

Q: How do you prove $|A|\le |B|$?

A: Define a function $f:A\to B$ and prove $f$ is injective.

---

Q: How do you prove $|A|\ge |B|$?

A: Define a function $g:A\to B$ and prove $g$ is surjective.

---

Q: How do you prove $|A|=|B|$ directly?

A: Define a function $h:A\to B$ and prove it is both injective and surjective.

---

Q: What should you prove to show $f:A\to B$ is injective?

A: Assume $f(a_1)=f(a_2)$ for arbitrary $a_1,a_2\in A$, then prove $a_1=a_2$.

---

Q: What should you prove to show $f:A\to B$ is surjective?

A: Let $b\in B$ be arbitrary, then find some $a\in A$ such that $f(a)=b$.

---

Q: Why is it risky to treat $|A|\le |B|$ as an ordinary numerical inequality?

A: Because it is defined as a statement about the existence of an injection, not as arithmetic on numbers.

## Review Cards

Q: What does $\gcd(x,y)$ need to be if it is the output of a function with codomain $\mathbb{N}^+$?

A: It must be a positive natural number; this can fail at $(0,0)$ if $\gcd(0,0)=0$.

---

Q: If $\gcd(m,n)=1$, what does Bezout's identity give?

A: There exist $a,b\in\mathbb{Z}$ such that $ma+nb=1$.

---

Q: If $ma+nb=1$, why can every integer $z$ be written as a linear combination of $m$ and $n$?

A: Multiply by $z$ to get $m(za)+n(zb)=z$.

## Multiple Choice Drill

### MCQ 1

What does $|A|\le |B|$ mean?

A. There exists an injection $A\to B$.

B. There exists a surjection $A\to B$.

C. There exists a bijection $B\to A$.

D. $A$ is a subset of $B$.

Answer: A

---

### MCQ 2

What does $|A|\ge |B|$ mean?

A. There exists an injection $A\to B$.

B. There exists a surjection $A\to B$.

C. There exists a bijection $A\to B$.

D. $A$ and $B$ are equal sets.

Answer: B

---

### MCQ 3

What does $|A|=|B|$ mean?

A. There exists a bijection $A\to B$.

B. There exists any function $A\to B$.

C. There exists a surjection $B\to A$.

D. Every element of $A$ is an element of $B$.

Answer: A

---

### MCQ 4

Which statement is the formal definition of injective?

A. $(\forall b\in B)(\exists a\in A)(f(a)=b)$

B. $(\forall a_1,a_2\in A)(f(a_1)=f(a_2)\Rightarrow a_1=a_2)$

C. $(\exists a\in A)(\forall b\in B)(f(a)=b)$

D. $(\forall a\in A)(f(a)=a)$

Answer: B

---

### MCQ 5

Which statement is the formal definition of surjective?

A. $(\forall b\in B)(\exists a\in A)(f(a)=b)$

B. $(\forall a_1,a_2\in A)(f(a_1)=f(a_2)\Rightarrow a_1=a_2)$

C. $(\forall a\in A)(\exists b\in B)(f(a)=b)$

D. $(\exists b\in B)(\forall a\in A)(f(a)=b)$

Answer: A

---

### MCQ 6

If $f:A\to B$ is injective, what is allowed?

A. Two different inputs may have the same output.

B. Some elements of $B$ may fail to be outputs.

C. Every element of $B$ must have exactly two preimages.

D. $A$ and $B$ must be equal sets.

Answer: B

---

### MCQ 7

If $f:A\to B$ is surjective, what is allowed?

A. Some elements of $B$ may not be hit.

B. Two different inputs may have the same output.

C. No input may have an output.

D. $f$ must be injective.

Answer: B

---

### MCQ 8

What does Cantor-Schroeder-Bernstein allow you to prove?

A. If there are injections both ways between $A$ and $B$, then $|A|=|B|$.

B. If there is any function $A\to B$, then $|A|=|B|$.

C. If $A\subseteq B$, then $A=B$.

D. If there is a surjection $A\to B$, then $A=B$.

Answer: A

---

### MCQ 9

To prove $|A|\le |B|$, what should you build?

A. An injection $A\to B$.

B. A surjection $A\to B$.

C. A bijection $B\to A$.

D. A subset proof $B\subseteq A$.

Answer: A

---

### MCQ 10

To prove $|A|\ge |B|$, what should you build?

A. An injection $A\to B$.

B. A surjection $A\to B$.

C. A contradiction involving $A\cap B$.

D. A proof that $A=B$.

Answer: B

---

### MCQ 11

Why can changing the codomain of a proposed function change whether it is a function?

A. The output must belong to the codomain.

B. The domain becomes irrelevant.

C. Functions do not have codomains.

D. Every codomain must be finite.

Answer: A

---

### MCQ 12

If $\gcd(m,n)=1$, what can you conclude about integer linear combinations of $m$ and $n$?

A. They can produce every integer.

B. They can produce only positive integers.

C. They can produce no multiples of $m$.

D. They can produce only 0.

Answer: A
