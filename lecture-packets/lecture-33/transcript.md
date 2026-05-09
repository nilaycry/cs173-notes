# Lecture 33 Transcript

Source: lecture-33.mp4

[00:00:00 - 00:00:04] Any questions, comments, and concerns?

[00:00:04 - 00:00:05] Oh, okay.

[00:00:05 - 00:00:09] From the wrong side, the last comment.

[00:00:09 - 00:00:11] Any questions?

[00:00:11 - 00:00:14] Really?

[00:00:14 - 00:00:20] So, let me comment really quickly on problem number five, because I did update yesterday.

[00:00:20 - 00:00:25] So, first of all, there was a typo initially, but also initially I made the problem way, way, way too hard.

[00:00:25 - 00:00:28] I still didn't find the problem a little bit. Let me also explain what some of the words mean.

[00:00:28 - 00:00:42] I'm asking you how many infinite following strings containing exactly one,

[00:00:42 - 00:00:55] continuous, or contiguous, sub-string. So, continuous, finite, sub-string.

[00:00:55 - 00:01:03] System of just once.

[00:01:03 - 00:01:04] There are.

[00:01:04 - 00:01:11] So, for example, so, like, the thing you're counting are infinite binary strings.

[00:01:11 - 00:01:15] Infinite binary strings, but certain kinds of infinite binary strings.

[00:01:15 - 00:01:19] I describe in that problem what infinite binary strings, what a finite binary string is.

[00:01:19 - 00:01:27] You're counting infinite binary strings that contain exactly one, continuous, sub-string of just once.

[00:01:27 - 00:01:32] So, what I mean by this, continuous, sub-string, consisting of just once.

[00:01:32 - 00:01:37] If I have a binary string like this, this is a finite binary string.

[00:01:37 - 00:01:40] So, I'll call this string B.

[00:01:40 - 00:01:54] This is a sub-string. I'll call that A. It is a sub-string of B.

[00:01:54 - 00:01:59] You're not going to have to prove that anything is a sub-string of anything else in this problem,

[00:01:59 - 00:02:03] but if you want to more precise definition of what a sub-string is, that's in the reference.

[00:02:03 - 00:02:07] In the reference, I go very much in detail about what infinite strings or what finite strings are.

[00:02:07 - 00:02:11] I do a bunch of examples. I talk about what it means to be a sub-string, what it means to be a cap in a string.

[00:02:11 - 00:02:15] There's a lot of detail in the reference. Feel free to use any of that in this problem set,

[00:02:15 - 00:02:17] especially with respect to this problem.

[00:02:17 - 00:02:20] But you don't necessarily need any of that to start thinking about this problem.

[00:02:20 - 00:02:25] You can address this problem by just knowing what a string is, what a finite and what an infinite binary string is.

[00:02:25 - 00:02:31] You're counting infinite binary strings. So, an example of an infinite binary string would be something like this.

[00:02:31 - 00:02:38] Call this C. That's infinite binary string written in form.

[00:02:38 - 00:02:42] You can call this in form. You can call this in a string.

[00:02:42 - 00:02:49] You can call this in a string. But this is a function. C is a function from n to 17 0 1.

[00:02:49 - 00:02:52] That's the coordinate. This is the set of characters of the string possible.

[00:02:52 - 00:02:55] This is the set of characters that compose the string.

[00:02:55 - 00:02:59] The domain is the index section. When the domain is finite, it's a finite binary string.

[00:02:59 - 00:03:02] When the domain is infinite, it's a infinite binary string.

[00:03:02 - 00:03:06] These are the indices for the string. So, for example, C of 0,

[00:03:06 - 00:03:16] in this situation is 1. That's the first character in this string. C of 1 is 0. C of 2 is 1.

[00:03:16 - 00:03:20] So, it's sort of like indexing into an array of C if you're not familiar with that.

[00:03:20 - 00:03:23] This is the same thing with different sequences. A sequence is a string.

[00:03:23 - 00:03:28] They're completely synonymous. It's just sometimes nice to think about sequences as strings

[00:03:28 - 00:03:30] because you guys have a lot of intuition built around strings.

[00:03:30 - 00:03:33] So, when you're programming, all of that intuition plus.

[00:03:33 - 00:03:37] Formally, this string is a function with vectoring vectoring.

[00:03:37 - 00:03:41] And it's given by C of, you can read next i.

[00:03:41 - 00:03:48] And that by definition is 1. If i is even 0 otherwise.

[00:03:48 - 00:03:54] That is a formal definition for that string. That's a different binary string.

[00:03:54 - 00:03:58] This infinite binary string contains infinite and many ones.

[00:03:58 - 00:04:05] And it contains them in a non-retiguous string. They're not all grouped together. They're separated by 0.

[00:04:05 - 00:04:15] That's what the word contiguous means here. That they're all together.

[00:04:15 - 00:04:24] So, an example of an infinite binary string with only finitely many ones would be something like this.

[00:04:24 - 00:04:33] That's called T of the string. 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0.

[00:04:33 - 00:04:38] This is the string given by it. This going back way, 8.

[00:04:38 - 00:04:48] And d of 0 is 1, d of 1, d of et cetera, up until we get to 0, 1, 2, 3, 4, 5, 6, 7, 8.

[00:04:48 - 00:04:52] So, go all those in. And then, for all of the internationals,

[00:04:52 - 00:05:01] if i is greater than 7, then d of i would have a mission set.

[00:05:02 - 00:05:07] Once you write all that out, that formally defines exactly what that string is.

[00:05:07 - 00:05:12] This string only has finally many ones. But they're not all contiguous.

[00:05:12 - 00:05:18] I've got three contiguous ones here. That's a contiguous substring consisting only of ones.

[00:05:18 - 00:05:20] I've got another one there, and I've got another one there.

[00:05:20 - 00:05:24] I've got three contiguous substrates existing at just points.

[00:05:24 - 00:05:27] So, you're not counting this kind of thing either.

[00:05:27 - 00:05:32] If you're counting things like this, call this b.

[00:05:32 - 00:05:34] I don't know how to use b, but I erase this a lot of the time.

[00:05:34 - 00:05:41] b, for example, the string, 1, 1, 1, 0, 0, 0, et cetera, correct.

[00:05:41 - 00:05:47] This is a function from f, 2, 0, 1. Give them one.

[00:05:47 - 00:05:56] b of x by that mission is 1, if x is less than 0, 1, 2, 3, so less than or 3,

[00:05:56 - 00:06:03] 0, all of us. This is the kind of thing you're counting.

[00:06:03 - 00:06:09] This has finally many ones, and they're all grouped together, not separated by zeroes.

[00:06:09 - 00:06:11] Can you give me another example of a string?

[00:06:11 - 00:06:17] You have to find out many ones that are all grouped together.

[00:06:17 - 00:06:18] Yeah?

[00:06:18 - 00:06:21] Same thing to use.

[00:06:21 - 00:06:23] Yeah, sure. Add more ones to it.

[00:06:23 - 00:06:24] Sure. Yeah. Nice to, by the way.

[00:06:24 - 00:06:28] But here's a more interesting example.

[00:06:28 - 00:06:32] Think about the string.

[00:06:32 - 00:06:39] It's going to have just as many ones as that string.

[00:06:39 - 00:06:43] We'll call this e.

[00:06:43 - 00:06:45] And it's going to start with a bunch of zeroes.

[00:06:45 - 00:06:50] First, how would I formally define this string?

[00:06:50 - 00:06:51] Well, this is a function.

[00:06:51 - 00:06:54] And it's got 9 numbers, 2, and the second thing is 0, 1.

[00:06:54 - 00:06:57] And e of x, and of course here, whenever you call it,

[00:06:57 - 00:07:00] x, x is going to be the main.

[00:07:00 - 00:07:04] So for all x and the main, this kind of mission is,

[00:07:04 - 00:07:10] well, it's 0, if x is less than or equal to 3.

[00:07:10 - 00:07:18] One is, x is between 4 and 4 times in 7.

[00:07:18 - 00:07:21] And 0, almost.

[00:07:21 - 00:07:24] And what I need to otherwise is when x is greater than 8,

[00:07:24 - 00:07:25] you're going to be able to do it.

[00:07:25 - 00:07:30] That's a total definition for that string.

[00:07:30 - 00:07:34] These are the kinds of things you're coming.

[00:07:34 - 00:07:36] Exactly.

[00:07:36 - 00:07:38] Am I counting the string of all zeroes?

[00:07:38 - 00:07:49] Doesn't this have to find out many ones?

[00:07:49 - 00:07:51] Aren't they all grouped together?

[00:07:51 - 00:07:53] What did you say no sign of them?

[00:07:54 - 00:07:59] Exactly one, continuous substrate.

[00:07:59 - 00:08:04] This has, how many substrates, consisting of just ones?

[00:08:04 - 00:08:06] It seems like none.

[00:08:06 - 00:08:07] Right?

[00:08:07 - 00:08:11] What about the end string?

[00:08:11 - 00:08:13] Is the end string a string?

[00:08:13 - 00:08:15] I think you guys all learned in your program,

[00:08:15 - 00:08:16] possibly the end string is a string.

[00:08:16 - 00:08:17] Why is it a string?

[00:08:17 - 00:08:19] Does it fit my definition of what a string is?

[00:08:19 - 00:08:22] Is it a function?

[00:08:22 - 00:08:23] I think it is.

[00:08:23 - 00:08:25] All this s.

[00:08:25 - 00:08:28] S is a function from what's the length of the string?

[00:08:28 - 00:08:33] From the end, you said, to the second thing, 0, 1.

[00:08:33 - 00:08:36] And what is s and x?

[00:08:36 - 00:08:37] Well, there are no maxes.

[00:08:37 - 00:08:38] Here's the string and z.

[00:08:38 - 00:08:40] Is that a function?

[00:08:40 - 00:08:44] Yes, that's a function.

[00:08:44 - 00:08:47] It's good that this is a function because I'm describing strings

[00:08:47 - 00:08:48] as functions.

[00:08:48 - 00:08:50] We talked about the fact that if you have an e-domain,

[00:08:50 - 00:08:51] you do actually have a function.

[00:08:51 - 00:08:53] This fits all the definitions of what a function is.

[00:08:53 - 00:08:56] It fits all my definitions or what a finite string is.

[00:08:56 - 00:08:57] What's the length of the string?

[00:08:57 - 00:08:58] 0.

[00:09:01 - 00:09:02] It's the end of the function.

[00:09:02 - 00:09:04] It's the end binary string in this case.

[00:09:04 - 00:09:08] Does this string consist of only once?

[00:09:08 - 00:09:09] What does that mean?

[00:09:09 - 00:09:11] Are all the characters in this string just one?

[00:09:11 - 00:09:18] That weren't the case.

[00:09:18 - 00:09:19] Let's say you said no.

[00:09:19 - 00:09:22] That string doesn't just consist of once.

[00:09:22 - 00:09:25] Okay, so then it consists of something other than a one.

[00:09:25 - 00:09:26] Where is it?

[00:09:26 - 00:09:29] There's nothing in the string.

[00:09:29 - 00:09:31] So you don't have a counter example when I tell you,

[00:09:31 - 00:09:33] this string only contains once.

[00:09:33 - 00:09:35] When I say the string only contains once,

[00:09:35 - 00:09:37] that's a universally quantified claim.

[00:09:37 - 00:09:39] I'm saying for all characters in the string,

[00:09:39 - 00:09:40] that character is a one.

[00:09:40 - 00:09:41] How many characters are there to check?

[00:09:41 - 00:09:45] No, so of course all the characters are one.

[00:09:45 - 00:09:47] If you said that wasn't the case,

[00:09:47 - 00:09:49] you are saying something existential,

[00:09:49 - 00:09:51] so you have to go find a character that is not a one.

[00:09:51 - 00:09:54] There are no such characters, so you can never do that.

[00:09:54 - 00:09:56] So, this counts.

[00:09:56 - 00:09:57] That is a substrate.

[00:09:57 - 00:10:02] Does that make sense?

[00:10:02 - 00:10:05] So, in my opinion, unless you take a different interpretation

[00:10:05 - 00:10:08] of the sentence, and if you do not describe your interpretation

[00:10:08 - 00:10:10] with this interpretation,

[00:10:10 - 00:10:12] this string is something you're counting.

[00:10:12 - 00:10:14] If it's not something you're counting,

[00:10:14 - 00:10:16] if you interpret this slightly differently in such a way

[00:10:16 - 00:10:18] that you exclude the end of the string,

[00:10:18 - 00:10:20] first of all, I don't like explaining that to me,

[00:10:20 - 00:10:22] because I'd be interested to see that.

[00:10:22 - 00:10:24] But also, it doesn't really change what the problem is,

[00:10:24 - 00:10:26] but I do want you to at least think about that.

[00:10:26 - 00:10:27] It's important to think about edge cases.

[00:10:27 - 00:10:29] This is a potential edge case.

[00:10:29 - 00:10:32] If you interpret this as not counting the string of all zeros,

[00:10:32 - 00:10:36] fine, what I want to know is how many of these are there.

[00:10:36 - 00:10:38] And actually, it doesn't matter if you count that or not.

[00:10:38 - 00:10:39] They're still the same amount.

[00:10:39 - 00:10:41] They should be a hint as to how many there are.

[00:10:41 - 00:10:43] But I want to know exactly how many there are,

[00:10:43 - 00:10:46] and the way that you should answer this question is by telling me

[00:10:46 - 00:10:50] that the cardinality of a set of all these strings,

[00:10:50 - 00:10:52] describe that as a set formally.

[00:10:52 - 00:10:56] The cardinality of that set equals the cardinality of some set.

[00:10:56 - 00:10:58] What set do you figure out what set?

[00:10:58 - 00:11:00] And then you prove this.

[00:11:00 - 00:11:01] How do you prove this?

[00:11:01 - 00:11:03] Find a digestion, or find two new injections,

[00:11:03 - 00:11:04] you can use your reverse.

[00:11:04 - 00:11:05] Does that make sense?

[00:11:05 - 00:11:12] Any questions on this?

[00:11:12 - 00:11:13] I'm thinking about, and in fact,

[00:11:13 - 00:11:15] I should say that you've got a very sort of a read to this,

[00:11:15 - 00:11:18] I will be hosting office hours on Saturday,

[00:11:18 - 00:11:21] some people ask for them, starting around 4 p.m.

[00:11:21 - 00:11:26] So, Saturday, around 4 p.m.

[00:11:26 - 00:11:27] Until I get tired.

[00:11:27 - 00:11:29] We'll do that in the basement like usual.

[00:11:29 - 00:11:32] Otherwise, I'm going to have a hundred and upsellers on Tuesdays.

[00:11:32 - 00:11:34] And then this is due, this public set has a few next points

[00:11:34 - 00:11:36] that there was a type of an issue and what to do get with.

[00:11:36 - 00:11:37] Of course, you'll always get a week.

[00:11:37 - 00:11:38] I assigned this on Wednesday,

[00:11:38 - 00:11:40] so it's due to the following one.

[00:11:40 - 00:11:43] Any questions on the whole problem set before we start?

[00:11:43 - 00:11:46] I guess I'm going to be able to do it again.

[00:11:46 - 00:11:48] Yeah?

[00:11:48 - 00:11:51] So, for that, let me count the string of all zeros

[00:11:51 - 00:11:55] because this is about the substrate.

[00:11:55 - 00:11:57] I would count it under this definition.

[00:11:57 - 00:12:00] I think that it is a continuous substrate

[00:12:00 - 00:12:01] consisting of just ones.

[00:12:01 - 00:12:04] First of all, because that fits exactly what the definition is.

[00:12:04 - 00:12:05] Right?

[00:12:05 - 00:12:09] And you may only notice why I left it a little bit open to interpretation.

[00:12:09 - 00:12:11] You may or may not argue about this one.

[00:12:11 - 00:12:12] Exactly one.

[00:12:12 - 00:12:16] Because thinking about the substrate as a substrate

[00:12:16 - 00:12:18] is a little bit weird.

[00:12:18 - 00:12:20] But whether you agree that you count this or not

[00:12:20 - 00:12:23] it doesn't really change the answer, I would count this.

[00:12:23 - 00:12:24] And I think it's a positive problem,

[00:12:24 - 00:12:26] and I do want you to think like that.

[00:12:26 - 00:12:28] First of all, because you think like that would be 74.

[00:12:28 - 00:12:32] But also, I've been training you all semester to think very carefully

[00:12:32 - 00:12:33] about the means of words.

[00:12:33 - 00:12:35] And with the other interpretation for something

[00:12:35 - 00:12:38] and dangerously written, like almost everything in this problem set

[00:12:38 - 00:12:41] because I've written everything intentionally, informally,

[00:12:41 - 00:12:43] then interpret the words.

[00:12:43 - 00:12:45] That's part of the exercise in this problem set.

[00:12:45 - 00:12:47] Interpret the words describe your interpretation.

[00:12:47 - 00:12:49] If you start proving things in this problem set,

[00:12:49 - 00:12:50] you're not going to get very much better.

[00:12:50 - 00:12:53] You need to model the problems.

[00:12:53 - 00:12:55] And then once you've interpreted the describe your interpretation

[00:12:55 - 00:12:57] you have a full statement, you should do it.

[00:12:57 - 00:12:59] Make sense?

[00:12:59 - 00:13:00] Both.

[00:13:00 - 00:13:04] So, with that said, I'll talk about the problem set.

[00:13:04 - 00:13:07] Last class we talked about infinity.

[00:13:07 - 00:13:11] And we left off with the realization that a bunch of sets

[00:13:11 - 00:13:13] have the same cardinality.

[00:13:13 - 00:13:20] The set of natural numbers has the same cardinality set of positive

[00:13:20 - 00:13:21] natural numbers.

[00:13:21 - 00:13:23] And that has the same cardinality set of integers.

[00:13:23 - 00:13:26] And there might be more sets with the same cardinality.

[00:13:26 - 00:13:28] In fact, I gave you a couple more sets in this problem set

[00:13:28 - 00:13:30] as just three periods that have the same cardinality

[00:13:30 - 00:13:32] as the same cardinality set of natural numbers.

[00:13:32 - 00:13:37] Before we continue looking at more sets

[00:13:37 - 00:13:39] that have the same cardinality set of natural numbers,

[00:13:39 - 00:13:41] I want to ask that this is the answer for the problem set.

[00:13:41 - 00:13:45] I'm going to ask, is this set infinity?

[00:13:45 - 00:13:49] Where's it going to happen?

[00:13:49 - 00:13:52] Not finite.

[00:13:52 - 00:13:54] Is this set not finite?

[00:13:54 - 00:14:02] Intuitively, what do you think?

[00:14:02 - 00:14:03] Yeah.

[00:14:03 - 00:14:04] Okay, yeah, sure.

[00:14:04 - 00:14:06] So, hopefully, formally, also, yes.

[00:14:06 - 00:14:08] Otherwise, my definitions don't have any sense.

[00:14:08 - 00:14:10] So, yes, this is infinite.

[00:14:10 - 00:14:15] We should prove that because we actually don't know that

[00:14:15 - 00:14:16] formally yet.

[00:14:16 - 00:14:19] Here, the set of natural numbers is an infinite set.

[00:14:19 - 00:14:37] It reminded me, by definition, if no one means not finite,

[00:14:37 - 00:14:39] what does that mean?

[00:14:39 - 00:14:41] There exists no natural number.

[00:14:41 - 00:14:46] There exists no natural number, which means for all natural numbers.

[00:14:46 - 00:14:47] Right?

[00:14:47 - 00:14:48] So, I'm going to say it like that.

[00:14:48 - 00:14:50] For all natural numbers, and I think what you're saying

[00:14:50 - 00:14:54] makes sense, the cardinality of that natural number is not

[00:14:54 - 00:14:56] the cardinality set of all that numbers.

[00:14:56 - 00:14:57] Right?

[00:14:58 - 00:15:00] That's what it means to be infinite.

[00:15:00 - 00:15:02] So, how am I going to prove this?

[00:15:02 - 00:15:05] Am I going to take an arbitrary natural number and show that

[00:15:05 - 00:15:07] it's not a bijection of the set of natural numbers?

[00:15:07 - 00:15:11] I thought they could.

[00:15:11 - 00:15:13] In fact, that's essentially what I'm going to do.

[00:15:13 - 00:15:15] I'm going to argue by contradiction.

[00:15:15 - 00:15:20] I'm going to say, towards a contradiction.

[00:15:20 - 00:15:24] But I'm going to write this just to make a small point about, like,

[00:15:24 - 00:15:26] syntax and notation at the point I'm going to make the most

[00:15:26 - 00:15:28] of it, just to emphasize this point, by contradiction,

[00:15:28 - 00:15:29] I'm going to argumentation this.

[00:15:29 - 00:15:33] I'm going to argue that there is a natural number,

[00:15:33 - 00:15:36] whose polynomial is the same as the polynomial,

[00:15:36 - 00:15:37] the same as all that numbers.

[00:15:37 - 00:15:41] And I want to just ask you a question.

[00:15:41 - 00:15:44] Since you guys have just put the exam, I've been given a lot of

[00:15:44 - 00:15:46] feedback on things like syntax and communication and whatever.

[00:15:46 - 00:15:54] Can I now say, therefore, there exists a function from N to the

[00:15:54 - 00:15:55] set of all natural numbers?

[00:15:55 - 00:15:58] So, that F is a financial.

[00:15:58 - 00:16:05] Can people shake their heads?

[00:16:05 - 00:16:06] Why not?

[00:16:06 - 00:16:07] Either of you.

[00:16:07 - 00:16:10] You still need to introduce N.

[00:16:10 - 00:16:14] I don't know who N is.

[00:16:14 - 00:16:15] I don't know who N is.

[00:16:15 - 00:16:17] Why don't I know who N is?

[00:16:17 - 00:16:19] N in this expression is a variable.

[00:16:19 - 00:16:23] This variable is quantified inside the scope.

[00:16:23 - 00:16:26] If I want to talk about N, I have to talk about it inside the scope

[00:16:26 - 00:16:28] because that's where it makes sense to talk about N.

[00:16:28 - 00:16:32] Otherwise, I have to tell the reader who N is.

[00:16:33 - 00:16:35] So, the solution to this, there's two solutions.

[00:16:35 - 00:16:38] The solution is, apply existential elimination.

[00:16:38 - 00:16:42] Expecial elimination, which is the rule of inference on the way back

[00:16:42 - 00:16:45] in the first rule of architecture, takes a bona fide instruction

[00:16:45 - 00:16:50] in existential bona fide instruction and introduces a new term

[00:16:50 - 00:16:53] that satisfies this predicate.

[00:16:53 - 00:16:55] But it doesn't mean English.

[00:16:55 - 00:16:58] The other alternative is, just don't write this, apply existential

[00:16:58 - 00:17:01] elimination immediately before human rights.

[00:17:01 - 00:17:02] That's what I'm going to do.

[00:17:02 - 00:17:03] I'm just going to erase this.

[00:17:03 - 00:17:04] If you go to the point of writing this,

[00:17:04 - 00:17:07] when I'm immediately going to apply existential elimination,

[00:17:07 - 00:17:09] let me just do that.

[00:17:09 - 00:17:14] Let me just say, in English, there exists, and these are people

[00:17:14 - 00:17:15] who only do things.

[00:17:15 - 00:17:17] If there are other things, these are the similar things to do.

[00:17:17 - 00:17:19] There exists.

[00:17:19 - 00:17:22] A national number of N sucks out.

[00:17:22 - 00:17:24] They're called an algorithm.

[00:17:24 - 00:17:26] People are called an algorithm.

[00:17:26 - 00:17:28] Now I know who N is.

[00:17:28 - 00:17:30] That was a very significant point.

[00:17:30 - 00:17:32] Several people made that mistake.

[00:17:32 - 00:17:35] I commented on this mistake in the exam, and I talked about writing

[00:17:35 - 00:17:38] yesterday, last class, so I remember to keep myself there.

[00:17:38 - 00:17:40] But that is a subtle point.

[00:17:40 - 00:17:43] If you make that mistake, try not to, but it's not depending

[00:17:43 - 00:17:44] on the world.

[00:17:44 - 00:17:45] Okay.

[00:17:45 - 00:17:49] Therefore, there is this function from that domain to that domain.

[00:17:49 - 00:17:50] That function is by virtue.

[00:17:50 - 00:17:51] Is that true?

[00:17:51 - 00:17:56] Is that the definition of the two-part domain being the same?

[00:17:56 - 00:17:59] So I think we're all on the same page so far, right?

[00:18:00 - 00:18:01] Okay.

[00:18:01 - 00:18:02] This is a proof of contradiction.

[00:18:02 - 00:18:04] I'm going to try to find a contradiction.

[00:18:04 - 00:18:07] What's my intuition behind this problem?

[00:18:07 - 00:18:13] I have a function from N to the set of natural numbers, N is the set

[00:18:13 - 00:18:17] 0, 1, 2 at the top N minus 1.

[00:18:17 - 00:18:20] That's who N is.

[00:18:20 - 00:18:25] So I have a function that turns these numbers into natural numbers.

[00:18:26 - 00:18:28] And I know that that's impossible to do.

[00:18:28 - 00:18:29] F is by general.

[00:18:29 - 00:18:30] Because F is surjective.

[00:18:30 - 00:18:33] F has to cover the entire prototype, right?

[00:18:33 - 00:18:34] Because F is by judgment.

[00:18:34 - 00:18:36] There's no way you could possibly do that.

[00:18:36 - 00:18:40] With only this in your domain, because every input can only

[00:18:40 - 00:18:42] produce one output, at most.

[00:18:42 - 00:18:44] And I think we're going to announce my prototype.

[00:18:44 - 00:18:48] But where does that position come from?

[00:18:48 - 00:18:49] Yeah?

[00:18:49 - 00:18:51] You can find a successor to any absolute number.

[00:18:51 - 00:18:52] Sure.

[00:18:53 - 00:18:56] But if you're N minus 1, there's no success of that in N.

[00:18:56 - 00:18:57] Yeah.

[00:18:57 - 00:19:00] And that's good, except the fact that, like, formerly speaking,

[00:19:00 - 00:19:01] what's the actual problem?

[00:19:01 - 00:19:06] Because N would not mean that you'll mean about what's the problem.

[00:19:06 - 00:19:09] Like, yeah, N minus 1 has a successor.

[00:19:09 - 00:19:11] But, like, F is a bad direction by assumption.

[00:19:11 - 00:19:13] You have to take that assumption.

[00:19:13 - 00:19:15] You can't fight the assumption.

[00:19:15 - 00:19:19] There's something in the Supreme Court here.

[00:19:19 - 00:19:21] It's like, you have a lawyer talking to one of the justices

[00:19:21 - 00:19:23] who just said, don't fight my hypothetical problem.

[00:19:23 - 00:19:26] You can say, keep arguing with, like, I don't like your premise.

[00:19:26 - 00:19:28] You know, we have to take the fact that that's a bad direction.

[00:19:28 - 00:19:30] It is a bad direction.

[00:19:30 - 00:19:32] So, yeah, N is a successor of N minus 1.

[00:19:32 - 00:19:33] What's the big deal?

[00:19:33 - 00:19:35] Here's one way to think about the big deal.

[00:19:35 - 00:19:39] If these all turn into numbers.

[00:19:39 - 00:19:41] So, this is some number, X1.

[00:19:41 - 00:19:42] That's a number of X2.

[00:19:42 - 00:19:43] That's a number of X2.

[00:19:43 - 00:19:44] That's a number of X.

[00:19:44 - 00:19:48] And, for example, I'll label them with their actual privileges.

[00:19:48 - 00:19:51] X0, X1, X2, X1, X1, X1.

[00:19:52 - 00:19:59] What happens if I add all these up?

[00:19:59 - 00:20:00] Do I get a number?

[00:20:00 - 00:20:01] Yeah.

[00:20:01 - 00:20:03] And we have quite the many of these, right?

[00:20:03 - 00:20:09] The sum from I equals 0 to N of XI is a natural number.

[00:20:09 - 00:20:11] On that matter, for this, you can do this by and on.

[00:20:11 - 00:20:14] This, maybe we shall back into the original discussion.

[00:20:14 - 00:20:15] You only have 500 many numbers here.

[00:20:15 - 00:20:17] We have a formal definition for what this is.

[00:20:17 - 00:20:20] You can prove by induction for any natural number.

[00:20:20 - 00:20:22] This is always a matching number.

[00:20:22 - 00:20:24] As long as all these XIs are natural numbers.

[00:20:25 - 00:20:27] So, we'll leave that as an exercise of yours in a minute.

[00:20:27 - 00:20:31] But, my intuition is, this is a natural number.

[00:20:31 - 00:20:34] And so, what's the problem you thought in Savior about the fact that

[00:20:34 - 00:20:36] N minus 1 has a successor?

[00:20:36 - 00:20:39] That doesn't actually cause a contribution, right?

[00:20:39 - 00:20:42] But, does this number have a successor?

[00:20:42 - 00:20:45] There's a number of after this, right?

[00:20:45 - 00:20:48] The sum, plus 1.

[00:20:48 - 00:20:50] Where's the contribution?

[00:20:50 - 00:20:55] Greater than any number.

[00:20:55 - 00:20:59] This is going to be bigger than any of these numbers, isn't it?

[00:20:59 - 00:21:00] It's not.

[00:21:00 - 00:21:01] Stripping bigger.

[00:21:01 - 00:21:02] Okay, what's the problem?

[00:21:02 - 00:21:04] Because that's not the sum of the outputs of that.

[00:21:04 - 00:21:05] So, what's the big one?

[00:21:05 - 00:21:06] It's the big one.

[00:21:06 - 00:21:07] It's the big one.

[00:21:07 - 00:21:09] Now, do you know what will be in the second natural number?

[00:21:09 - 00:21:10] There's no big one.

[00:21:10 - 00:21:13] This is in the codo in.

[00:21:13 - 00:21:15] So, it must have a preimage.

[00:21:15 - 00:21:19] But, it can't have a preimage because it's bigger than any of these numbers.

[00:21:19 - 00:21:22] And, those are all the images of that.

[00:21:22 - 00:21:26] So, if I take all of these and I add them up, it's too big.

[00:21:26 - 00:21:30] This sum is too big to be an output of F.

[00:21:30 - 00:21:35] But, it has to be an output of F because it's in the codo.

[00:21:35 - 00:21:37] There's a contradiction.

[00:21:37 - 00:21:39] Let's write that out.

[00:21:39 - 00:21:43] I'm doing this a little bit quickly just because I want to get through all of the things I want to talk about today,

[00:21:43 - 00:21:45] so that we can talk about factory on Monday.

[00:21:45 - 00:21:48] But, if any of this is confusing, we don't shut out the cost.

[00:21:48 - 00:21:49] We're going to pop stars.

[00:21:49 - 00:21:51] So, here's my idea.

[00:21:51 - 00:21:52] Observe.

[00:21:53 - 00:22:00] That the sum from I equals zero to N minus one, F and I, is a natural number.

[00:22:00 - 00:22:02] I'm going to give that a name.

[00:22:02 - 00:22:04] I'm going to call that S.

[00:22:04 - 00:22:10] I'm going to say, let S by definition be that sum.

[00:22:10 - 00:22:16] And, observe that S is a natural number.

[00:22:16 - 00:22:20] If you have a doubt about whether or not S actually is a natural number,

[00:22:20 - 00:22:25] then you should think about proving by induction that the sum of finally meaning natural numbers is always a natural number.

[00:22:25 - 00:22:28] It's a preferred induction, so it's not very interesting.

[00:22:28 - 00:22:31] But, it's perfectly fine for a fine notion.

[00:22:31 - 00:22:42] Now that I know this, I also know that this sum plus one must be strictly greater than any of the actual images of that,

[00:22:42 - 00:22:44] any of the actual outputs of that.

[00:22:44 - 00:22:45] How am I going to prove that?

[00:22:45 - 00:22:51] How am I going to prove that the sum plus one is actually there?

[00:22:51 - 00:22:58] Let me say, for N, let's say odd in the domain.

[00:22:58 - 00:23:00] So, the domain is N.

[00:23:00 - 00:23:02] I'll just write that as a set of all Z.

[00:23:02 - 00:23:05] And that covers 6 times Z equals 1 to N.

[00:23:05 - 00:23:07] So, this is a quantification.

[00:23:07 - 00:23:15] I'm simply just quantifying in English so that I can be a little bit more expressive, but what I'm about to write is a one-part sentence.

[00:23:15 - 00:23:18] So, after the end of the sentence, I'm not going to know who I is anymore.

[00:23:18 - 00:23:22] Again, that's a subtle detail, but it's very good to learn how to be clear in your communication,

[00:23:22 - 00:23:25] especially when you get to a complicated topic like I want.

[00:23:25 - 00:23:35] So, for N, I, in this set, F of I is less than or equal to F of I plus the rest of the notes.

[00:23:36 - 00:23:42] The sum from I equals zero to N minus one, where I is not going to actually use J.

[00:23:42 - 00:23:45] Where J is coming to I of F of J.

[00:23:45 - 00:23:46] Why is that a case?

[00:23:46 - 00:23:52] It's like monotony.

[00:23:52 - 00:23:54] This is monotonyicity of addition.

[00:23:54 - 00:23:55] I'm skipping some steps.

[00:23:55 - 00:23:57] We're no longer going to be a rhythmic section.

[00:23:57 - 00:23:59] This would have to be another proof by induction.

[00:23:59 - 00:24:01] Look at how many proofs by induction.

[00:24:01 - 00:24:04] If you actually take a rhythmic series, there's a whole bunch of things very boring and tedious,

[00:24:04 - 00:24:07] but we use signals due to visual and natural numbers.

[00:24:07 - 00:24:08] They're all non-negative.

[00:24:09 - 00:24:15] So, if I take that number and I add a bunch of non-negative numbers to it, it gets bigger,

[00:24:15 - 00:24:18] or it's like the same thing as making the rules are.

[00:24:18 - 00:24:22] You don't know how many there are here, but there's a finite commitment.

[00:24:22 - 00:24:23] So, does that make sense?

[00:24:23 - 00:24:24] You file it.

[00:24:24 - 00:24:25] Yeah?

[00:24:25 - 00:24:30] Well, what I'm trying to do is first here is that, and again, I'm using like a slightly

[00:24:30 - 00:24:31] augmented summation notation.

[00:24:31 - 00:24:35] I haven't technically used a summation, but hopefully you understand what this means.

[00:24:35 - 00:24:37] What I'm trying to say here is that this is the other numbers.

[00:24:37 - 00:24:38] The rest of the other numbers.

[00:24:38 - 00:24:43] So, once I add in f of i to this, this equals the full sum.

[00:24:43 - 00:24:47] Do you do?

[00:24:47 - 00:24:50] And that's s.

[00:24:50 - 00:24:53] This equals s by definition.

[00:24:53 - 00:24:59] So, s is greater than or equal to f of i for every i in the doing.

[00:24:59 - 00:25:05] Can you just give rid of, kind of, j does the y, and give rid of the f of i?

[00:25:05 - 00:25:07] Yeah, because then the question is y.

[00:25:07 - 00:25:09] I'm trying to like explain to you y, right?

[00:25:09 - 00:25:15] One, because when I take this number and I add natural numbers to it, it gets bigger.

[00:25:15 - 00:25:16] Potential.

[00:25:16 - 00:25:18] It never gets small.

[00:25:18 - 00:25:19] Right?

[00:25:19 - 00:25:23] So, if this is confusing, it's very obvious to you that this must be that.

[00:25:23 - 00:25:24] Okay, but I'm trying to explain why.

[00:25:24 - 00:25:25] Right?

[00:25:25 - 00:25:26] I could be more detailed.

[00:25:26 - 00:25:30] I could prove this by induction, but I feel like that's unnecessary at this point.

[00:25:30 - 00:25:31] Cool.

[00:25:31 - 00:25:32] Okay, good.

[00:25:32 - 00:25:42] So, now that I know that, and just to summarize, what that said is this, that's what that said.

[00:25:42 - 00:25:43] Now that I know this.

[00:25:43 - 00:25:45] What happens if I add one?

[00:25:45 - 00:25:50] Well, what that means is, I can put a strict inequality.

[00:25:50 - 00:25:51] Right?

[00:25:51 - 00:25:54] Because s plus one is strictly greater than s.

[00:25:54 - 00:26:11] So, I'm going to say, therefore, for every i in the domain, strictly less than or equal to s,

[00:26:11 - 00:26:13] strictly less than s plus one.

[00:26:13 - 00:26:19] What's my idea?

[00:26:19 - 00:26:21] My idea was, right?

[00:26:21 - 00:26:23] It's our idea, because we talked about this way.

[00:26:23 - 00:26:24] We discussed this.

[00:26:24 - 00:26:27] s plus one is in the polynomial.

[00:26:27 - 00:26:30] And f is a bijection, f is surjective.

[00:26:30 - 00:26:34] So, there has to be something in the domain that maps to s plus one.

[00:26:34 - 00:26:39] Since f is surjective, if there's a hand, like when I have my head turn especially, I'll just get my attention.

[00:26:39 - 00:26:42] Because if you have a question, I'm going to answer your question.

[00:26:42 - 00:27:02] But since f is surjective, by definition, there exists, in the domain, to this s plus one.

[00:27:02 - 00:27:23] Does that contradict this?

[00:27:23 - 00:27:33] I think it does, because this, if I read it out formally, literally says, there exists some j in n, such that f of j equals s plus one.

[00:27:33 - 00:27:35] So, what am I saying here?

[00:27:35 - 00:27:41] It's the exact, the negation of, well, not the exact negation, but more or less the negation of this.

[00:27:41 - 00:27:43] These two things are contradiction.

[00:27:43 - 00:27:49] I can't have, as a mess between where s plus one, if f of x is always strictly less than x plus one.

[00:27:49 - 00:27:51] So, it's where I'm going in my next line.

[00:27:51 - 00:28:02] However, we know that s is less than s plus one.

[00:28:02 - 00:28:06] So, f of x is not equal to s plus one.

[00:28:06 - 00:28:10] Therefore, n is anything.

[00:28:10 - 00:28:14] You develop this thing from the assumption that n was not infinite, that n was finite.

[00:28:14 - 00:28:20] So, therefore, the 7x numbers is infinite.

[00:28:20 - 00:28:28] Any questions? Does that ever sense?

[00:28:28 - 00:28:29] Yeah?

[00:28:29 - 00:28:32] All right.

[00:28:32 - 00:28:34] Which result?

[00:28:34 - 00:28:40] I was going to help you here.

[00:28:40 - 00:28:46] Because knowing that the positive, the positive, the natural numbers are 7, the natural numbers are 7, the natural numbers.

[00:28:46 - 00:28:49] So, I can say anything, anything, anything.

[00:28:49 - 00:28:54] So, that theorem, that equivalent is between infinite and embedded and infinite.

[00:28:54 - 00:28:55] I guess you're right.

[00:28:55 - 00:28:58] Like, since I gave you that first, but I shouldn't have given you that first.

[00:28:58 - 00:29:03] Like, you need to develop a little bit of theory in order to get to the point where you can talk about that in infinity.

[00:29:03 - 00:29:06] And in order to prove that equivalent is used to know a little bit about infinite sets.

[00:29:06 - 00:29:09] And that requires you to know that there exists infinite sets.

[00:29:09 - 00:29:13] This, actually, is our first proof of the existence of an infinite set.

[00:29:13 - 00:29:17] But, you don't know all those details, and I did talk about that before.

[00:29:17 - 00:29:20] So, like, for example, if on an exam, I gave you that argument's perfectly fine.

[00:29:20 - 00:29:25] Yeah, if you use that equivalence, you show that a sub-natural number is not equal, but it's a sub-seventent derivative.

[00:29:25 - 00:29:33] But, I also just wanted to show you how you could explicitly construct an argument around the intuition that there's always a success.

[00:29:33 - 00:29:37] The intuition behind why a sub-natural number is infinite is because there's always a success.

[00:29:37 - 00:29:45] But, talking about that with respect to the domain of this kind of action, or if you go around a sub-natural code domain, it's not helpful.

[00:29:45 - 00:29:47] So, there's that intuition.

[00:29:47 - 00:29:50] But the intuition is really easy when you want to do something more creative.

[00:29:50 - 00:29:52] And I wanted to show you that.

[00:29:52 - 00:29:57] And it's also a good idea for more complicated problems, because you can take this idea and apply it in other places.

[00:29:57 - 00:29:59] So, hopefully that makes sense.

[00:29:59 - 00:30:00] Any other questions?

[00:30:00 - 00:30:05] So, we have an infinite set of set-natural numbers.

[00:30:05 - 00:30:09] It's equal to a part 9 to the set of positive-natural numbers, the set of integers.

[00:30:09 - 00:30:12] And, as you saw, it's actually a problem set.

[00:30:12 - 00:30:19] It's equal in cardinality to the set of ordered pairs of natural numbers, to the Cartesian product of n with n.

[00:30:20 - 00:30:26] Here, the cardinality of n is the same as the Cartesian product.

[00:30:26 - 00:30:28] Now, we have n cross n.

[00:30:28 - 00:30:34] I'm not going to prove this, but I'm going to sketch this for you, because the easiest way to do this,

[00:30:34 - 00:30:37] that I know of at least, maybe there's an easier way, and I just don't know it.

[00:30:37 - 00:30:41] The easiest way is to construct two injections, and apply tenor short reverse.

[00:30:41 - 00:30:46] So, I'm going to construct an injection from n to n cross n.

[00:30:46 - 00:30:53] And I'm going to construct an injection from n cross n to n.

[00:30:53 - 00:30:59] This one, I claim, I'll give you a couple of sentences to think about it, but I claim this is really easy to come up with.

[00:30:59 - 00:31:02] And it's really easy to prove it's injective once you've got it.

[00:31:02 - 00:31:04] What injection can I come up with here?

[00:31:04 - 00:31:05] It's actually a few.

[00:31:05 - 00:31:22] I'm going to pause on you.

[00:31:22 - 00:31:23] Beautiful.

[00:31:23 - 00:31:26] f of n, by definition, is zero comma n.

[00:31:26 - 00:31:28] That's an injection.

[00:31:28 - 00:31:31] Here's another injection. f of n equals n comma zero.

[00:31:31 - 00:31:35] What's another injection?

[00:31:35 - 00:31:36] n comma n.

[00:31:36 - 00:31:37] n comma n.

[00:31:37 - 00:31:38] What's another injection?

[00:31:38 - 00:31:39] 2n comma n.

[00:31:39 - 00:31:40] What's another injection?

[00:31:40 - 00:31:41] 2n comma n.

[00:31:41 - 00:31:42] 2n comma 1.

[00:31:42 - 00:31:43] What's another injection?

[00:31:43 - 00:31:46] 3n squared plus 3ch on constant injections.

[00:31:46 - 00:31:52] And they're all, well, depending on which one you pick actually made your cursor harder, but like all of the basic ones are very easy to show that they're injected,

[00:31:52 - 00:31:57] because you have theories about ordered pairs from way back in the day when you prove things about ordered pairs.

[00:31:57 - 00:32:00] Order pairs for people when their coordinates are equal.

[00:32:00 - 00:32:02] So if order pairs are equal, then order pairs are equal.

[00:32:02 - 00:32:04] Okay, then n equals n.

[00:32:04 - 00:32:06] And injective is like three hundred.

[00:32:06 - 00:32:13] Oh, in the other direction, it's slightly trickier, but it's much easier than coming up with an actual bijection.

[00:32:13 - 00:32:17] Coming up with a bijection between these two sets is surprisingly difficult.

[00:32:17 - 00:32:20] At least writing it down precisely and proving it's a bijection.

[00:32:20 - 00:32:22] There are explicit bijections.

[00:32:22 - 00:32:24] And I can show you after class, for example.

[00:32:24 - 00:32:30] But if you wanted to come up with one of those, I think that that would be beyond the scope of this class.

[00:32:30 - 00:32:34] Not because of your intelligence, but because of your time coming in, so you've got other stuff to worry about.

[00:32:34 - 00:32:39] You would spend probably, I think, a lot of time thinking about how to actually come up with a bijection.

[00:32:39 - 00:32:42] But in injection, in this direction, it's much more feasible.

[00:32:42 - 00:32:53] And there are a couple of different ways to do this, but the easiest way in mind is you've got order pairs of natural numbers,

[00:32:53 - 00:32:58] and you need to associate them with natural numbers in an injective way.

[00:32:58 - 00:33:07] So I've got order pairs like this of natural numbers, and I need to inject them,

[00:33:07 - 00:33:13] send them in injectively to the set of natural numbers.

[00:33:13 - 00:33:18] So I need to send this guy to like some z in n.

[00:33:18 - 00:33:23] And what would be a natural thing to try, an obvious thing to try?

[00:33:23 - 00:33:28] I can send that order pair of three from zero. I can send that, for example, to three.

[00:33:28 - 00:33:33] And if I take the order pair of four times zero, I can send that to four.

[00:33:33 - 00:33:41] I can send the order pair of x from a y to x. That's something to try. Is that injective?

[00:33:41 - 00:33:54] If I'm at x from a y to x, so do you call it one? What else would it be?

[00:33:54 - 00:34:00] That's not injective, because these two order pairs are different.

[00:34:00 - 00:34:04] So how can I fix this? Sending the first coordinate.

[00:34:04 - 00:34:07] Sending this is the first coordinate for the order. Sending to the second one does work.

[00:34:07 - 00:34:12] Sending to the sum of the coordinates doesn't work either.

[00:34:12 - 00:34:16] If I send x from a y to x times y, that doesn't work.

[00:34:16 - 00:34:20] Because two times three equals three times two, multiplication is commutative, unfortunately.

[00:34:20 - 00:34:21] Right?

[00:34:21 - 00:34:24] Do you like to use that one of them?

[00:34:24 - 00:34:25] Yeah, good.

[00:34:25 - 00:34:26] That's literally exactly where I was going.

[00:34:26 - 00:34:28] There's other and more complicated things you can do.

[00:34:28 - 00:34:33] But in my opinion, the simplest thing to realize is that multiplication is commutative,

[00:34:33 - 00:34:36] but prime factorization is unique.

[00:34:36 - 00:34:39] This is a fundamental theorem of arithmetic.

[00:34:39 - 00:34:47] So if I have a number, and I express that number as a product of primes as p1 and p2 and p3,

[00:34:47 - 00:34:50] there's only one way to do that.

[00:34:50 - 00:34:52] I've got two numbers here.

[00:34:52 - 00:34:55] I would like to send these guys to a prime number.

[00:34:55 - 00:34:57] My question is, how do I actually do that?

[00:34:57 - 00:35:01] Because if I associate this guy with a prime number and that guy with a prime number,

[00:35:01 - 00:35:06] that is a prime factorization, and then when I change these numbers, I change the prime factorization.

[00:35:06 - 00:35:09] And that sends injector.

[00:35:09 - 00:35:10] How do I do that?

[00:35:10 - 00:35:13] Because what prime number do I send x to?

[00:35:13 - 00:35:14] I've got a particular one.

[00:35:14 - 00:35:15] Right?

[00:35:15 - 00:35:19] For example, if I'm looking at the actual order pair two comma five,

[00:35:19 - 00:35:21] where do I send two, and where do I send five?

[00:35:21 - 00:35:22] Which prime numbers?

[00:35:22 - 00:35:29] Well, in this case, two and five happen to be prime.

[00:35:29 - 00:35:31] So I could send two to you and five to five.

[00:35:31 - 00:35:34] But then what if I plug in an input that isn't prime?

[00:35:34 - 00:35:35] Like four.

[00:35:35 - 00:35:42] What if I plug in an input that isn't prime, that has multiple different prime factors like ten?

[00:35:42 - 00:35:49] Looking at the actual numbers themselves may or may not be useful.

[00:35:49 - 00:35:51] But here's your idea.

[00:35:51 - 00:35:54] And you might think about this idea and realize, wow, that's surprisingly

[00:35:54 - 00:35:56] difficult to actually implement and prove things about.

[00:35:56 - 00:35:58] But it's a very nice idea, especially for programming.

[00:35:58 - 00:36:02] When you're coding, this is a very nice idea for encoding numbers.

[00:36:02 - 00:36:07] Send ten to the ten prime numbers.

[00:36:07 - 00:36:12] Send five to the fifth prime number.

[00:36:12 - 00:36:13] The prime numbers are order.

[00:36:13 - 00:36:19] It's two, three, five, seven, eleven, thirteen, seventeen, and seven.

[00:36:19 - 00:36:20] Twenty-three, whatever.

[00:36:20 - 00:36:21] Nineteen, twenty-three, or ten.

[00:36:21 - 00:36:22] Right?

[00:36:22 - 00:36:24] I have a duration of the prime numbers.

[00:36:24 - 00:36:25] This is the first one.

[00:36:25 - 00:36:26] That's the second one.

[00:36:26 - 00:36:27] That's the third one.

[00:36:27 - 00:36:35] If I just send each coordinate to the corresponding index in this sequence, in the sequence of five numbers,

[00:36:35 - 00:36:37] that would be an injection.

[00:36:37 - 00:36:41] And especially in your programming, that's a very nice idea for encoding things.

[00:36:41 - 00:36:44] And so you start running into some issues and you will run into the issues.

[00:36:44 - 00:36:49] But if I'm trying to formally write that down, especially in a problem set,

[00:36:49 - 00:36:52] I now have to describe exactly how this works.

[00:36:52 - 00:36:54] And that's kind of a mean in the X.

[00:36:54 - 00:36:58] There's a simpler thing to do with the same idea.

[00:36:58 - 00:37:01] Instead of sending this coordinate to the corresponding natural number,

[00:37:01 - 00:37:03] send something ten to the tenth prime number.

[00:37:03 - 00:37:08] I'm going to associate these first coordinates with the first prime number.

[00:37:08 - 00:37:13] So I'm going to associate them with two, but I'm not sending all of them to two.

[00:37:13 - 00:37:17] I want to send them to different powers of two.

[00:37:17 - 00:37:23] So I'll send ten, not to the tenth prime number, but to two to the ten.

[00:37:23 - 00:37:26] To the first prime number, raise to that power.

[00:37:26 - 00:37:31] Now if I change ten to nine, that's a different factorization.

[00:37:31 - 00:37:38] If I send this coordinate to a different prime number, for example three,

[00:37:38 - 00:37:43] raise to that power, once I start changing these coordinates, the factorization changes,

[00:37:43 - 00:37:47] because the number of prime numbers in the factorization changes.

[00:37:47 - 00:37:51] This will repair essentially get sent to a prime factorization

[00:37:51 - 00:37:54] where the first coordinate tells me how many twos there are in the factorization

[00:37:54 - 00:37:56] and the second coordinate tells me how many threes there are.

[00:37:56 - 00:37:59] If I change the number of twos, I change the number.

[00:37:59 - 00:38:03] If I change the number of threes, I change the number.

[00:38:03 - 00:38:06] So when I change the coordinates, I change the factorization.

[00:38:06 - 00:38:07] That's an injection.

[00:38:07 - 00:38:11] I'm explaining this to you first of all because I think it's a very nice,

[00:38:11 - 00:38:14] very beautiful idea that might be applicable if you're not thinking about

[00:38:14 - 00:38:16] a cryptography class or a co-theory class or something like that.

[00:38:16 - 00:38:20] But also this is very relevant for problem number five on this problem set.

[00:38:20 - 00:38:24] You might want to think about this idea and it might make that problem much easier to do.

[00:38:24 - 00:38:27] If you're thinking about what the lines are, can they show diversity

[00:38:27 - 00:38:29] for problem number five on the problem set?

[00:38:29 - 00:38:32] Here's how I would explicitly write this function down.

[00:38:32 - 00:38:35] I'm not going to prove that it's an injection, but maybe if there's interest,

[00:38:35 - 00:38:38] I'll make a supplementary video and I'll do it in that video.

[00:38:38 - 00:38:40] But you should really try to do this as an extra step on your own.

[00:38:40 - 00:38:43] Even if you do problem five on the problem set, here's the function.

[00:38:43 - 00:38:49] So g of x on the y, my definition is g of x,

[00:38:49 - 00:38:52] three of all, thirds.

[00:38:52 - 00:38:55] I think that's an injection.

[00:38:55 - 00:38:57] I hope you can't do it.

[00:38:57 - 00:38:58] Any questions?

[00:38:58 - 00:39:02] I know it was a little fast, but I've only got ten minutes.

[00:39:02 - 00:39:04] I realize now I'm not going to get through everything I wanted to get through,

[00:39:04 - 00:39:08] so I won't make a supplementary video about infinity because even though

[00:39:08 - 00:39:11] I'm probably not going to test you on a kind of diagonal argument itself,

[00:39:11 - 00:39:13] I do want you to see it.

[00:39:13 - 00:39:16] So if I don't get to it today, I'm going to get to it in a supplementary video.

[00:39:16 - 00:39:18] That's why I'm going right after this.

[00:39:18 - 00:39:19] Any questions on this?

[00:39:19 - 00:39:24] Okay, cool.

[00:39:24 - 00:39:33] So the seven action numbers is the same in size as a bunch of other things in its sense.

[00:39:33 - 00:39:36] We've got z, we've got n plus, we've got n.

[00:39:36 - 00:39:39] If you remove, find it in the yellow, it's actually just a matter of how many

[00:39:39 - 00:39:42] or how you remove them, as long as it's find it in many,

[00:39:42 - 00:39:45] n has the same size as all of these sites.

[00:39:45 - 00:39:50] And because n has the same size as n plus n,

[00:39:50 - 00:39:53] it in fact has the same part of n as the set of rational numbers,

[00:39:53 - 00:39:57] the set of all integer fractions with non-zero denominator.

[00:39:57 - 00:39:58] Why?

[00:39:58 - 00:40:02] Because an integer fraction is essentially an order pair of natural numbers.

[00:40:02 - 00:40:05] And if you're worried about the fact that some fractions are negative,

[00:40:05 - 00:40:07] it's an order pair of integers.

[00:40:07 - 00:40:09] And if the integer has the same size as a matrix,

[00:40:09 - 00:40:12] so you can then round that way through that,

[00:40:12 - 00:40:13] based on what the rational number is,

[00:40:13 - 00:40:16] the set of rational numbers has the same part now and yet the set of rational numbers

[00:40:16 - 00:40:18] by using all these facts.

[00:40:18 - 00:40:20] All of these sets are infinite.

[00:40:20 - 00:40:24] And they can keep coming up with more and more and more complicated infinite sets

[00:40:24 - 00:40:26] that have the state of the cardinality as the set of natural numbers.

[00:40:26 - 00:40:29] All of these sets are what we call countable.

[00:40:29 - 00:40:39] Because the definition, we say,

[00:40:39 - 00:40:44] set, fast, is countable.

[00:40:44 - 00:40:47] It can be a bad definition.

[00:40:47 - 00:40:51] The cardinality of us is less than the root whole to the cardinality of the natural numbers.

[00:40:51 - 00:40:54] What does that mean?

[00:40:54 - 00:40:57] If I can inject x into the set of natural numbers,

[00:40:57 - 00:40:59] x is countable.

[00:40:59 - 00:41:01] Alternatively, if I can surge at x,

[00:41:01 - 00:41:04] with the natural numbers, x is countable.

[00:41:04 - 00:41:06] Question.

[00:41:06 - 00:41:10] I know I'm going to go a little fast, so I should pause for a second, but I have a question.

[00:41:10 - 00:41:17] Are finite sets countable? Definitely.

[00:41:17 - 00:41:18] Right?

[00:41:18 - 00:41:21] Is the set of natural numbers countable?

[00:41:21 - 00:41:24] Are infinite sets countable?

[00:41:24 - 00:41:28] Also, I mean, I have some examples of infinite countable sets.

[00:41:28 - 00:41:31] We call those sets countable infinite sets.

[00:41:31 - 00:41:35] A countable infinite set is a countable set, which is also infinite.

[00:41:35 - 00:41:39] Finite sets are countable, but not infinite, they're just finite.

[00:41:39 - 00:41:42] Countable encompasses countable infinite and also finite.

[00:41:42 - 00:41:45] We have examples of both infinite sets are countable,

[00:41:45 - 00:41:46] finite sets are countable.

[00:41:46 - 00:41:48] Are there countable sets?

[00:41:48 - 00:41:52] Can a finite set be uncountable?

[00:41:52 - 00:41:54] What would that mean?

[00:41:54 - 00:42:00] When we say x is uncountable, if it will be other,

[00:42:00 - 00:42:05] it's not countable, and you can apply those fields and realize that that actually means this.

[00:42:05 - 00:42:16] For finite sets uncountable, are there any examples of those?

[00:42:16 - 00:42:17] No, definitely not.

[00:42:17 - 00:42:18] Right?

[00:42:18 - 00:42:23] Because whenever I have a finite set, it's in conjunction with a natural number,

[00:42:23 - 00:42:26] that natural number is a subset of the set of natural numbers,

[00:42:26 - 00:42:30] and you have a theorem that tells you that that means it's called value,

[00:42:30 - 00:42:32] it's less than equal to you.

[00:42:32 - 00:42:35] So every finite set has to be counted.

[00:42:35 - 00:42:37] There's a three-line proof of that.

[00:42:37 - 00:42:38] Very easy.

[00:42:38 - 00:42:41] That means it cannot have a greater cardinality,

[00:42:41 - 00:42:44] because greater cardinality means you have an surjection,

[00:42:44 - 00:42:46] or a random structure, you're going an indjection,

[00:42:46 - 00:42:50] a surjection which is not indjected, or an indjection which is not surjected.

[00:42:50 - 00:42:52] A bijection has to be told.

[00:42:52 - 00:43:00] So are there examples of uncountable sets?

[00:43:00 - 00:43:02] Which one, for example?

[00:43:02 - 00:43:03] Three wheels.

[00:43:03 - 00:43:06] So part of the problem with the set of real numbers,

[00:43:06 - 00:43:09] you guys may have heard or you guys may know or think you know,

[00:43:09 - 00:43:11] you may actually know, I don't know,

[00:43:11 - 00:43:14] that the set of real numbers is uncountable.

[00:43:14 - 00:43:21] This is true, at least with standard models set theory,

[00:43:21 - 00:43:22] this is uncountable.

[00:43:22 - 00:43:25] We can prove that this has greater cardinality

[00:43:25 - 00:43:26] than the set of natural numbers,

[00:43:26 - 00:43:28] but the truth is surprisingly involved.

[00:43:28 - 00:43:30] But part of the problem with that proof is,

[00:43:30 - 00:43:33] I don't think you guys know what a real number is.

[00:43:33 - 00:43:35] What do you think a real number is?

[00:43:35 - 00:43:37] Can you even be brave?

[00:43:37 - 00:43:39] There's not a math major who's like seeing this material already,

[00:43:39 - 00:43:43] maybe.

[00:43:44 - 00:43:46] It's one that's not an integer fraction.

[00:43:46 - 00:43:49] Well, non-injured fractions are real numbers,

[00:43:49 - 00:43:50] but it's more than just that,

[00:43:50 - 00:43:52] because integer fractions are also real numbers.

[00:43:52 - 00:43:54] Like two, if you remember from your linear calculus,

[00:43:54 - 00:43:55] if you're taking that order,

[00:43:55 - 00:43:57] your calculus sucks, you're taking calculus,

[00:43:57 - 00:43:58] or you're taking calculus.

[00:43:58 - 00:43:59] Two is a real number.

[00:43:59 - 00:44:01] And so is two quarters.

[00:44:01 - 00:44:02] That's a real number.

[00:44:02 - 00:44:04] But so is the problem.

[00:44:04 - 00:44:09] And so is the square root root.

[00:44:09 - 00:44:11] And part of the problem is it's actually very important

[00:44:11 - 00:44:14] to write down a description of what a real number is

[00:44:14 - 00:44:16] and in fact, this is because of the fact

[00:44:16 - 00:44:18] that there are so many real numbers that some of them

[00:44:18 - 00:44:20] are undefining them.

[00:44:20 - 00:44:22] There's a kind of thing called undefinability,

[00:44:22 - 00:44:23] just like definedability.

[00:44:23 - 00:44:25] We've been defining a bunch of things in the semester.

[00:44:25 - 00:44:28] There are some real numbers that you cannot write down

[00:44:28 - 00:44:30] a sentence that describes that number

[00:44:30 - 00:44:31] and only that number.

[00:44:31 - 00:44:33] Because there's too many of them.

[00:44:33 - 00:44:34] And that's kind of interesting.

[00:44:34 - 00:44:35] But that prevents me from just saying,

[00:44:35 - 00:44:37] oh, a real number is this.

[00:44:37 - 00:44:40] Or at least it comes from doing that very easily.

[00:44:40 - 00:44:41] There is a way I can do.

[00:44:41 - 00:44:42] I can describe a real number,

[00:44:42 - 00:44:44] but it would take us a few lectures.

[00:44:44 - 00:44:46] So we're not going to do that semester, of course.

[00:44:46 - 00:44:48] If you're interested, we can talk about that course.

[00:44:48 - 00:44:49] Does that mean it's interesting?

[00:44:49 - 00:44:52] But for that reason, I don't think this is a very

[00:44:52 - 00:44:55] nice example because I don't think you really understand

[00:44:55 - 00:44:57] what that set is.

[00:44:57 - 00:45:00] Are there other examples of uncountable sets?

[00:45:00 - 00:45:01] How was it?

[00:45:01 - 00:45:02] How was it here?

[00:45:02 - 00:45:03] How was it here?

[00:45:03 - 00:45:04] How was it here?

[00:45:04 - 00:45:09] How do you know that?

[00:45:09 - 00:45:10] So maybe you just know that.

[00:45:10 - 00:45:12] But grass would be right in the car.

[00:45:12 - 00:45:14] Now the set of the house of the national

[00:45:14 - 00:45:16] numbers is greater than the car.

[00:45:16 - 00:45:17] Now the national numbers.

[00:45:17 - 00:45:20] And I think we understand exactly who this set is.

[00:45:20 - 00:45:23] It's a set of all subsets of M.

[00:45:23 - 00:45:26] I can just start writing down precisely what all the elements

[00:45:26 - 00:45:27] of that set are.

[00:45:27 - 00:45:32] Now, intuitively, you might have been guided to this

[00:45:32 - 00:45:34] if you sat and thought about this problem for long enough,

[00:45:34 - 00:45:35] even without access to the internet.

[00:45:35 - 00:45:38] Because you know, you've heard this

[00:45:38 - 00:45:43] since I hope you know, that if X is finite,

[00:45:43 - 00:45:51] then the car now to the power set of X as well.

[00:45:51 - 00:45:52] Two to the power of 90 X.

[00:45:52 - 00:45:56] Is it two to the power of 90 X greater than the power of 90 X?

[00:45:56 - 00:45:59] Yeah.

[00:45:59 - 00:46:00] Actually, always.

[00:46:00 - 00:46:02] This is a property of the exponential quantity.

[00:46:02 - 00:46:03] Big sub base.

[00:46:03 - 00:46:06] Two to the X is almost strictly greater than X.

[00:46:06 - 00:46:08] At least the X is a problem.

[00:46:08 - 00:46:09] X is a negative amount.

[00:46:09 - 00:46:11] I don't know.

[00:46:11 - 00:46:13] I don't know if you want to go there.

[00:46:13 - 00:46:15] It's still working.

[00:46:15 - 00:46:16] It's still working.

[00:46:16 - 00:46:18] So, when I think about signs and stuff like that,

[00:46:18 - 00:46:19] I get confused.

[00:46:19 - 00:46:20] I don't want to say something false,

[00:46:20 - 00:46:21] but at least with non-negative numbers,

[00:46:21 - 00:46:22] it's definitely true.

[00:46:22 - 00:46:23] Well, it's absolutely right.

[00:46:23 - 00:46:25] Well, so it depends on what you can get.

[00:46:25 - 00:46:26] Anyways, I'm not even going to.

[00:46:26 - 00:46:27] It doesn't matter.

[00:46:27 - 00:46:28] This is just intuition.

[00:46:28 - 00:46:29] That is true about finding sets.

[00:46:29 - 00:46:31] Maybe it's also true about infinite sets.

[00:46:31 - 00:46:34] However, a lot of our intuition for finding sets

[00:46:34 - 00:46:37] hasn't carried over to infinite sets.

[00:46:37 - 00:46:41] So maybe this intuition also doesn't carry over, actually.

[00:46:41 - 00:46:42] So, I've got four minutes.

[00:46:42 - 00:46:45] I'm going to, for the benefit of the recording,

[00:46:45 - 00:46:47] you know what I'm about to start doing,

[00:46:47 - 00:46:48] which is prove this.

[00:46:48 - 00:46:50] If I'm not going to take it super long,

[00:46:50 - 00:46:51] but just be aware,

[00:46:51 - 00:46:52] I'm going to go for minutes.

[00:46:52 - 00:46:53] I've got some Ruby to start going now,

[00:46:53 - 00:46:55] so if you don't like interrupt the recording

[00:46:55 - 00:46:56] or whatever, put your noise.

[00:46:56 - 00:46:57] But I'm going to finish that short proof,

[00:46:57 - 00:46:58] and then I'll stop the class there,

[00:46:58 - 00:47:00] and I'll do a supplementary video on

[00:47:00 - 00:47:01] Campus Diagonal Argument,

[00:47:01 - 00:47:04] which is related to this being uncountable.

[00:47:04 - 00:47:06] Well, I'll do that in a supplementary video

[00:47:06 - 00:47:07] of some kind of leaving.

[00:47:07 - 00:47:09] Now, what I want to prove,

[00:47:09 - 00:47:10] if that makes sense,

[00:47:10 - 00:47:12] what I really thought about

[00:47:12 - 00:47:14] is that it is exactly like that.

[00:47:14 - 00:47:15] This set, the power set, the set,

[00:47:15 - 00:47:17] the natural number is strictly greater

[00:47:17 - 00:47:18] in part now than the set,

[00:47:18 - 00:47:20] the natural number is given back.

[00:47:20 - 00:47:22] That's true, not just to the set,

[00:47:22 - 00:47:24] the natural number, but it's true for any set.

[00:47:24 - 00:47:26] Whenever you have a set,

[00:47:26 - 00:47:34] here, whenever you have a set,

[00:47:34 - 00:47:40] the cardinality of that set is

[00:47:40 - 00:47:41] strictly,

[00:47:41 - 00:47:44] smaller than the cardinality of its power set.

[00:47:44 - 00:47:47] And once we notice,

[00:47:47 - 00:47:48] we can just write these,

[00:47:48 - 00:47:50] the set of natural numbers, please, particularly.

[00:47:50 - 00:47:56] This, in my opinion, is remarkable,

[00:47:56 - 00:47:58] in part because it's a very big,

[00:47:58 - 00:48:00] powerful set in this set of a lot

[00:48:00 - 00:48:01] about sensory,

[00:48:01 - 00:48:04] and it has a remarkably simple group.

[00:48:04 - 00:48:05] The proof is very short,

[00:48:05 - 00:48:06] and that's why I decided I'm going

[00:48:06 - 00:48:07] to go over time today,

[00:48:07 - 00:48:08] unfortunately.

[00:48:08 - 00:48:09] I'm going to do this proof

[00:48:09 - 00:48:10] because it's not going to take

[00:48:10 - 00:48:11] all that long.

[00:48:11 - 00:48:13] And this proof is due to

[00:48:13 - 00:48:15] a guy I haven't talked about very much,

[00:48:15 - 00:48:16] because some messages

[00:48:16 - 00:48:17] running out of time,

[00:48:17 - 00:48:18] and I don't want to stop

[00:48:18 - 00:48:19] the U.S. history lessons of the election,

[00:48:19 - 00:48:20] but we could have done that

[00:48:20 - 00:48:21] for every single lesson.

[00:48:21 - 00:48:22] There are history lessons

[00:48:22 - 00:48:24] in like every single lesson we've done.

[00:48:24 - 00:48:25] This is due to George Cameron.

[00:48:25 - 00:48:30] And this result is so monumental

[00:48:30 - 00:48:31] that the theory is being acted,

[00:48:31 - 00:48:33] and this is called the Kansas theory.

[00:48:33 - 00:48:36] The cardinality of the power set of a set

[00:48:36 - 00:48:39] is always larger than the cardinality of that set.

[00:48:39 - 00:48:41] Let's prove this proof.

[00:48:41 - 00:48:45] I'm going to argue

[00:48:45 - 00:48:46] by contradiction.

[00:48:46 - 00:48:47] Words of contradiction,

[00:48:47 - 00:48:48] I'm going to assume

[00:48:48 - 00:48:50] that the cardinality of that

[00:48:50 - 00:48:51] stays greater than or equal to

[00:48:51 - 00:48:53] the cardinality of the power set of x.

[00:48:53 - 00:48:55] Words of contradiction.

[00:48:55 - 00:48:56] I guess I should introduce that.

[00:48:56 - 00:48:59] So let's pass this up.

[00:48:59 - 00:49:03] Words of contradiction.

[00:49:03 - 00:49:12] The cardinality of x

[00:49:12 - 00:49:14] is greater than or equal to.

[00:49:14 - 00:49:17] The cardinality of it counts.

[00:49:17 - 00:49:18] What does that mean by definition?

[00:49:18 - 00:49:25] Projection.

[00:49:25 - 00:49:26] Projection.

[00:49:26 - 00:49:27] There's this is surjection.

[00:49:27 - 00:49:28] I mean, you can class with theorems

[00:49:28 - 00:49:29] and say, you know,

[00:49:29 - 00:49:30] a bunch of different things.

[00:49:30 - 00:49:31] But I'm going to do the straightforward thing

[00:49:31 - 00:49:33] because it's how this proof works out so

[00:49:33 - 00:49:34] for me, otherwise it's

[00:49:34 - 00:49:36] a different definition or a different theorem.

[00:49:36 - 00:49:37] It might be much longer

[00:49:37 - 00:49:38] and more about proof.

[00:49:38 - 00:49:39] But straightforwardly,

[00:49:39 - 00:49:40] based on how I've defined

[00:49:40 - 00:49:41] this symbol in this class,

[00:49:41 - 00:49:43] this means there needs a

[00:49:43 - 00:49:46] surjection from x to its power set.

[00:49:46 - 00:49:53] So there exists a function

[00:49:53 - 00:49:58] of whole assumption p from x to

[00:49:58 - 00:50:02] power set x, such that p is

[00:50:02 - 00:50:03] surjection.

[00:50:03 - 00:50:15] I have not seen this.

[00:50:15 - 00:50:16] Oh, well, good.

[00:50:16 - 00:50:17] This means for...

[00:50:17 - 00:50:19] I have to derive a contradiction.

[00:50:19 - 00:50:20] So now I'm going to take

[00:50:20 - 00:50:25] answers from you since you've not seen this.

[00:50:25 - 00:50:26] I need a contradiction.

[00:50:26 - 00:50:28] Where's it going to come from?

[00:50:28 - 00:50:29] Yeah.

[00:50:29 - 00:50:31] Every element can be mapped

[00:50:31 - 00:50:33] to its single thing.

[00:50:33 - 00:50:34] Okay.

[00:50:34 - 00:50:36] So why do you have every element of x

[00:50:36 - 00:50:39] to the second thing that element?

[00:50:39 - 00:50:42] But is that what p does?

[00:50:42 - 00:50:47] But then there's more elements.

[00:50:47 - 00:50:48] Well, first of all,

[00:50:48 - 00:50:49] my problem is I don't know

[00:50:49 - 00:50:50] that this is what p does.

[00:50:50 - 00:50:52] p might not map x to the second thing

[00:50:52 - 00:50:54] and x is not.

[00:50:54 - 00:50:55] In fact,

[00:50:55 - 00:50:56] p definitely can't do that

[00:50:56 - 00:50:58] because that wouldn't be surjected

[00:50:58 - 00:51:00] as long as x has more than one element.

[00:51:00 - 00:51:03] In fact, if x has just one element

[00:51:03 - 00:51:04] that's still on surjective,

[00:51:04 - 00:51:06] what about n to the second?

[00:51:06 - 00:51:08] So that can't be p.

[00:51:08 - 00:51:10] I've assumed that p is surjected.

[00:51:10 - 00:51:11] You can't...

[00:51:11 - 00:51:13] might not have to cut it off.

[00:51:13 - 00:51:14] p is surjected.

[00:51:14 - 00:51:15] p is surjected.

[00:51:15 - 00:51:16] So like, yeah, this function would sub

[00:51:16 - 00:51:18] but that can't be p.

[00:51:18 - 00:51:22] Where's that contradiction?

[00:51:22 - 00:51:24] p has to map something to the

[00:51:24 - 00:51:25] symbol.

[00:51:25 - 00:51:26] Sure.

[00:51:26 - 00:51:27] Yeah.

[00:51:27 - 00:51:29] And so what?

[00:51:29 - 00:51:30] So...

[00:51:30 - 00:51:34] So then I think...

[00:51:34 - 00:51:35] You might have a problem

[00:51:35 - 00:51:36] if you work very hard.

[00:51:36 - 00:51:37] If you're thinking about the same

[00:51:37 - 00:51:38] instance, you're going to have to do

[00:51:38 - 00:51:39] a lot of work.

[00:51:39 - 00:51:40] And you might be able to drive a

[00:51:40 - 00:51:41] contradiction from this.

[00:51:41 - 00:51:42] But it will cost you.

[00:51:42 - 00:51:43] It will cost you a lot of jobs

[00:51:43 - 00:51:44] or anything,

[00:51:44 - 00:51:45] or whatever it is you're doing.

[00:51:45 - 00:51:46] Also, like,

[00:51:46 - 00:51:47] try them off your life.

[00:51:47 - 00:51:49] There's a very short, simple argument

[00:51:49 - 00:51:51] because there's a particular set

[00:51:51 - 00:51:53] that I know is in the quota wing.

[00:51:53 - 00:51:55] How would you think of this set

[00:51:55 - 00:51:56] I have no idea?

[00:51:56 - 00:51:57] But sometime,

[00:51:57 - 00:51:58] somewhere,

[00:51:58 - 00:51:59] someone came down,

[00:51:59 - 00:52:00] got me down,

[00:52:00 - 00:52:01] touched,

[00:52:01 - 00:52:02] came through and he's seeking

[00:52:02 - 00:52:03] and told him this set.

[00:52:03 - 00:52:05] This is the set you must think about.

[00:52:05 - 00:52:08] This is what I'm calling a diagonal set.

[00:52:08 - 00:52:12] And you'll see a second one

[00:52:12 - 00:52:13] calling the diagonal set,

[00:52:13 - 00:52:14] or you might even call it

[00:52:14 - 00:52:16] like an anti-diagonal set.

[00:52:16 - 00:52:17] If you want,

[00:52:17 - 00:52:18] then I'm going to call it a diagonal set,

[00:52:18 - 00:52:19] a diagonalizing set.

[00:52:19 - 00:52:24] Because this is an example

[00:52:24 - 00:52:26] of a diagonal argument.

[00:52:26 - 00:52:27] This is not a counter-diagonal

[00:52:27 - 00:52:28] argument.

[00:52:28 - 00:52:29] That is a specific theorem,

[00:52:29 - 00:52:31] that is a specific argument

[00:52:31 - 00:52:32] that I'll do in a supplementary lecture.

[00:52:32 - 00:52:34] It's about certain kinds of spritz.

[00:52:34 - 00:52:36] But this is an example

[00:52:36 - 00:52:38] of that kind of argument

[00:52:38 - 00:52:39] done more generally.

[00:52:39 - 00:52:40] And there are other examples

[00:52:40 - 00:52:41] of this kind of argument

[00:52:41 - 00:52:43] of diagonal arguments.

[00:52:43 - 00:52:48] It's nice to really agree

[00:52:48 - 00:52:49] on going over time,

[00:52:49 - 00:52:50] because now I can actually give you

[00:52:50 - 00:52:51] a little bit of flavor.

[00:52:51 - 00:52:53] This is a very interesting thing

[00:52:53 - 00:52:55] that happened in the late 1800s

[00:52:55 - 00:52:56] in mathematics.

[00:52:56 - 00:52:58] And it has ramifications

[00:52:58 - 00:53:00] that you still feel

[00:53:00 - 00:53:01] in computer science

[00:53:01 - 00:53:03] because you know already

[00:53:03 - 00:53:05] not kind of diagonal argument,

[00:53:05 - 00:53:06] not kind of theorem.

[00:53:06 - 00:53:07] You know what,

[00:53:07 - 00:53:08] another diagonal argument

[00:53:08 - 00:53:09] already,

[00:53:09 - 00:53:11] probably before you came into this class.

[00:53:11 - 00:53:13] Have you heard of the halting problem?

[00:53:13 - 00:53:15] The halting problem,

[00:53:15 - 00:53:17] which if you've never heard of this,

[00:53:17 - 00:53:18] then don't feel bad,

[00:53:18 - 00:53:19] but like this is something that you

[00:53:19 - 00:53:20] talked about in 3.74.

[00:53:20 - 00:53:21] It's a very famous theorem

[00:53:21 - 00:53:22] in computer science.

[00:53:22 - 00:53:24] It's a theorem that says

[00:53:24 - 00:53:25] whenever you have something

[00:53:25 - 00:53:26] like a computer,

[00:53:26 - 00:53:28] you can never tell

[00:53:28 - 00:53:29] me whether or not

[00:53:29 - 00:53:31] that computer halts

[00:53:31 - 00:53:33] like whether that computer

[00:53:33 - 00:53:34] stops computing

[00:53:34 - 00:53:35] on a certain input

[00:53:35 - 00:53:37] using an algorithm.

[00:53:37 - 00:53:39] There are like 20 asterisks

[00:53:39 - 00:53:40] on what I just said.

[00:53:40 - 00:53:42] A slightly more precise version

[00:53:42 - 00:53:44] of what I just said is

[00:53:44 - 00:53:45] there is no Turing machine

[00:53:45 - 00:53:46] that can always tell me

[00:53:46 - 00:53:47] whether or not

[00:53:47 - 00:53:48] another Turing machine

[00:53:48 - 00:53:50] on a given input pulse.

[00:53:50 - 00:53:51] That still requires

[00:53:51 - 00:53:52] some asterisks,

[00:53:52 - 00:53:53] so if you want a precise

[00:53:53 - 00:53:54] statement of that theorem,

[00:53:54 - 00:53:55] you should be able to take

[00:53:55 - 00:53:56] this on the board

[00:53:56 - 00:53:57] or we can talk after class

[00:53:57 - 00:53:58] and that can give you

[00:53:58 - 00:53:59] a little bit of background

[00:53:59 - 00:54:00] so you can understand it.

[00:54:00 - 00:54:01] But that famous argument,

[00:54:01 - 00:54:02] this argument was due to

[00:54:02 - 00:54:03] I think it was due to

[00:54:03 - 00:54:04] out term actually given,

[00:54:04 - 00:54:06] is another example

[00:54:06 - 00:54:07] of the same kind of thing

[00:54:07 - 00:54:08] you're about to see.

[00:54:08 - 00:54:10] And there are even more.

[00:54:10 - 00:54:11] Have you ever heard like

[00:54:11 - 00:54:12] you don't GCP?

[00:54:12 - 00:54:14] The C compiler?

[00:54:14 - 00:54:16] And you know a client?

[00:54:16 - 00:54:18] Another C compiler?

[00:54:18 - 00:54:19] Both D C compilers

[00:54:19 - 00:54:21] are written in C.

[00:54:21 - 00:54:22] And there are some

[00:54:22 - 00:54:23] theorems in it.

[00:54:23 - 00:54:24] It's a little bit weird,

[00:54:24 - 00:54:25] right?

[00:54:25 - 00:54:26] Because they're C compilers

[00:54:26 - 00:54:27] that they can be written in C.

[00:54:27 - 00:54:28] There's a weird theorem

[00:54:30 - 00:54:31] that says,

[00:54:31 - 00:54:32] but this is something you can

[00:54:32 - 00:54:33] do with ordinary,

[00:54:33 - 00:54:34] just called bootstrapping,

[00:54:34 - 00:54:35] where like you write

[00:54:35 - 00:54:36] a compiler for the language

[00:54:36 - 00:54:37] that you're designing

[00:54:37 - 00:54:38] in the language that you're

[00:54:38 - 00:54:39] designing.

[00:54:39 - 00:54:40] And there's a way to do this.

[00:54:40 - 00:54:41] That is not an example

[00:54:41 - 00:54:42] of diagonalization,

[00:54:42 - 00:54:43] but it's very related to

[00:54:43 - 00:54:44] diagonalization.

[00:54:44 - 00:54:45] You can do it in high

[00:54:45 - 00:54:46] diagonalization,

[00:54:46 - 00:54:48] is you think about self-referencing,

[00:54:48 - 00:54:49] you think about what happens

[00:54:49 - 00:54:51] when you have a matrix,

[00:54:51 - 00:54:52] this is why it's called

[00:54:52 - 00:54:53] the diagonal argument.

[00:54:53 - 00:54:54] And you go down the diagonal

[00:54:54 - 00:54:55] of that argument and you

[00:55:01 - 00:55:03] start thinking about these things.

[00:55:03 - 00:55:04] You start thinking along the

[00:55:04 - 00:55:06] lines of the diagonal argument

[00:55:06 - 00:55:07] almost always.

[00:55:07 - 00:55:08] Or at least in this context

[00:55:08 - 00:55:09] when you're thinking about

[00:55:09 - 00:55:10] logic stuff and set there's

[00:55:10 - 00:55:11] stuff.

[00:55:11 - 00:55:12] If you're doing linear

[00:55:12 - 00:55:13] algorithms, then that's

[00:55:13 - 00:55:14] different, right?

[00:55:14 - 00:55:15] But if you're interested in

[00:55:15 - 00:55:16] this, you might want to google,

[00:55:16 - 00:55:17] there's a nice website,

[00:55:17 - 00:55:18] but so what you can do

[00:55:18 - 00:55:19] is you can test it for math,

[00:55:19 - 00:55:20] there's a nice website called

[00:55:20 - 00:55:21] and pat lab,

[00:55:21 - 00:55:23] and you might google

[00:55:23 - 00:55:24] diagonalization,

[00:55:24 - 00:55:25] like diagonal argument

[00:55:25 - 00:55:26] and diagonalization.

[00:55:26 - 00:55:27] On and pat lab,

[00:55:27 - 00:55:28] you'll see that there's

[00:55:28 - 00:55:29] a hero that talks about

[00:55:29 - 00:55:30] this kind of diagonal argument

[00:55:30 - 00:55:31] is actually just a special

[00:55:31 - 00:55:32] case of this thing.

[00:55:32 - 00:55:33] It's a beautiful theory.

[00:55:33 - 00:55:35] I am going to talk about

[00:55:35 - 00:55:37] a particular set in the

[00:55:37 - 00:55:38] code of meaning and this is

[00:55:38 - 00:55:39] going to be a set that

[00:55:39 - 00:55:40] sounds a little self-referential.

[00:55:40 - 00:55:42] I'm going to call it

[00:55:42 - 00:55:43] delta, delta four diagonal,

[00:55:43 - 00:55:45] so consider, you can say

[00:55:45 - 00:55:47] left, delta by the emission

[00:55:47 - 00:55:49] of B, the set of all

[00:55:49 - 00:55:54] elements of x that are not

[00:55:54 - 00:55:57] elements of phi of x.

[00:55:57 - 00:56:03] That might sound familiar

[00:56:03 - 00:56:04] from when we talk about

[00:56:04 - 00:56:05] Russell's paradox of truly

[00:56:05 - 00:56:06] the years ago.

[00:56:06 - 00:56:08] Russell's paradox is an example

[00:56:08 - 00:56:12] of a diagonal argument.

[00:56:12 - 00:56:13] This is going to be another

[00:56:13 - 00:56:14] example of diagonal argument,

[00:56:14 - 00:56:16] but set of all x that are not

[00:56:16 - 00:56:18] contained in their image.

[00:56:18 - 00:56:20] This makes sense because

[00:56:20 - 00:56:22] phi of x has to be a set

[00:56:22 - 00:56:23] of elements of x,

[00:56:23 - 00:56:24] so I can ask the question,

[00:56:24 - 00:56:25] is x an element of the

[00:56:25 - 00:56:26] the event?

[00:56:26 - 00:56:27] It's not an element of the event

[00:56:27 - 00:56:28] and it's not a dumb question.

[00:56:28 - 00:56:29] That question is sometimes

[00:56:29 - 00:56:31] true, sometimes not true.

[00:56:31 - 00:56:34] Because this is

[00:56:34 - 00:56:36] a subset of x.

[00:56:36 - 00:56:39] Is delta a set?

[00:56:39 - 00:56:44] Like this delta exists.

[00:56:44 - 00:56:45] Okay, but I'm bringing this back

[00:56:45 - 00:56:46] now to set here.

[00:56:46 - 00:56:47] If I know it's ends,

[00:56:47 - 00:56:48] if I know it's ends,

[00:56:48 - 00:56:49] comprehends it.

[00:56:49 - 00:56:50] It's cumulative.

[00:56:50 - 00:56:51] Just because I define something

[00:56:51 - 00:56:52] doesn't mean it exists.

[00:56:52 - 00:56:53] I can define the set that

[00:56:53 - 00:56:54] Russell talked about.

[00:56:54 - 00:56:55] That set doesn't exist.

[00:56:55 - 00:56:56] If you want to ask

[00:56:56 - 00:56:57] it in a set,

[00:56:57 - 00:56:58] separation, right?

[00:56:58 - 00:56:59] Yes, in separation,

[00:56:59 - 00:57:01] this is a subset of x.

[00:57:01 - 00:57:02] Since it's a subset of

[00:57:02 - 00:57:04] x and I assume that x is a set,

[00:57:04 - 00:57:05] this must also be a set

[00:57:05 - 00:57:06] by separation.

[00:57:06 - 00:57:07] Right?

[00:57:07 - 00:57:08] So I'm just confirming that.

[00:57:08 - 00:57:09] Also reminding you about

[00:57:09 - 00:57:10] the axis of set here

[00:57:10 - 00:57:12] in case you forgot about them.

[00:57:12 - 00:57:14] But this tells me,

[00:57:14 - 00:57:17] observe that delta is

[00:57:17 - 00:57:21] in the code domain of feet.

[00:57:21 - 00:57:22] Since delta's in the code domain

[00:57:22 - 00:57:24] and B is surjective,

[00:57:24 - 00:57:29] delta has a bridge under feet.

[00:57:29 - 00:57:31] There's something in the domain

[00:57:31 - 00:57:33] that I plug into feet

[00:57:33 - 00:57:34] and then get back.

[00:57:34 - 00:57:36] That set delta.

[00:57:36 - 00:57:37] Do I know anything about

[00:57:37 - 00:57:38] that set delta?

[00:57:38 - 00:57:41] Is delta empty?

[00:57:41 - 00:57:42] No, you don't know that.

[00:57:42 - 00:57:43] Is delta non-empty?

[00:57:43 - 00:57:46] You don't know that either.

[00:57:46 - 00:57:47] You don't know anything about

[00:57:47 - 00:57:48] delta because you don't know

[00:57:48 - 00:57:49] what e is.

[00:57:49 - 00:57:50] Yeah.

[00:57:50 - 00:57:51] But why wouldn't it be empty?

[00:57:51 - 00:57:53] Because we're taking the set

[00:57:53 - 00:57:54] of all the events

[00:57:54 - 00:57:55] of x which are not.

[00:57:55 - 00:57:57] Let me give you a concrete example.

[00:57:57 - 00:57:58] So like,

[00:57:58 - 00:57:59] let's say that x is

[00:57:59 - 00:58:00] something zero and answer.

[00:58:00 - 00:58:02] And think about the function

[00:58:02 - 00:58:05] f that sends middle A

[00:58:05 - 00:58:06] along the backs.

[00:58:06 - 00:58:09] Two, the same thing.

[00:58:09 - 00:58:11] Sorry, let's not say the same thing.

[00:58:11 - 00:58:12] Let's take x minus the same thing.

[00:58:12 - 00:58:19] f of zero is the second thing.

[00:58:19 - 00:58:20] One and zero.

[00:58:20 - 00:58:24] Zero is not an element of f of zero.

[00:58:24 - 00:58:27] Right.

[00:58:27 - 00:58:28] But if that is,

[00:58:28 - 00:58:29] f is not a suggestion.

[00:58:29 - 00:58:31] Would every element of x also be

[00:58:31 - 00:58:32] in the power set of x?

[00:58:32 - 00:58:33] Sure.

[00:58:33 - 00:58:34] Yeah.

[00:58:34 - 00:58:35] But my point is

[00:58:35 - 00:58:36] that set might be empty

[00:58:36 - 00:58:37] and might not be empty

[00:58:37 - 00:58:38] but you don't know.

[00:58:38 - 00:58:39] Because you don't know what the

[00:58:39 - 00:58:42] function is.

[00:58:42 - 00:58:43] Or maybe I have a solution

[00:58:43 - 00:58:44] for your question.

[00:58:44 - 00:58:45] Yeah.

[00:58:45 - 00:58:46] I can come up with examples where

[00:58:46 - 00:58:47] that set is empty.

[00:58:47 - 00:58:48] I can come up with examples

[00:58:48 - 00:58:49] where that set is not empty.

[00:58:49 - 00:58:51] It depends on what the function is.

[00:58:51 - 00:58:52] And all of these examples

[00:58:52 - 00:58:53] of the function

[00:58:53 - 00:58:54] will not be subjected.

[00:58:54 - 00:58:55] Because this is a proof by

[00:58:55 - 00:58:56] contradiction.

[00:58:56 - 00:58:57] I cannot have a suggestion.

[00:58:57 - 00:58:58] Right.

[00:58:58 - 00:58:59] But what I'm pointing out

[00:58:59 - 00:59:00] is you don't know anything about

[00:59:00 - 00:59:01] that set delta.

[00:59:01 - 00:59:02] Think about that set.

[00:59:02 - 00:59:03] But we don't know anything

[00:59:03 - 00:59:04] about it apart from.

[00:59:04 - 00:59:06] All of the elements in that set

[00:59:06 - 00:59:08] cannot be elements of their

[00:59:08 - 00:59:09] image under view.

[00:59:09 - 00:59:10] That's the definition

[00:59:10 - 00:59:11] of the set.

[00:59:11 - 00:59:12] I know the set exists.

[00:59:12 - 00:59:13] So when everything is

[00:59:13 - 00:59:14] relevant it has to meet the

[00:59:14 - 00:59:15] definition.

[00:59:15 - 00:59:21] That phi is

[00:59:21 - 00:59:22] surjective.

[00:59:22 - 00:59:24] Since phi is

[00:59:24 - 00:59:25] surjective.

[00:59:25 - 00:59:32] There exists some little

[00:59:32 - 00:59:35] delta in the domain such that

[00:59:35 - 00:59:37] phi of little delta

[00:59:37 - 00:59:38] equals capital delta.

[00:59:38 - 00:59:42] That's a

[00:59:42 - 00:59:43] definition of a

[00:59:43 - 00:59:46] derivative.

[00:59:46 - 00:59:47] And now it's going to

[00:59:47 - 00:59:48] sound very similar.

[00:59:48 - 00:59:49] Because I'm going to

[00:59:49 - 00:59:50] ask the same question

[00:59:50 - 00:59:51] Russell asked,

[00:59:51 - 00:59:53] what is delta in elements of

[00:59:53 - 00:59:54] capital delta?

[00:59:54 - 00:59:59] Is this guy in that set?

[00:59:59 - 01:00:00] I don't know.

[01:00:00 - 01:00:02] So let's try to figure it out.

[01:00:02 - 01:00:03] Case one.

[01:00:03 - 01:00:05] One of those two things has to

[01:00:05 - 01:00:06] be true.

[01:00:06 - 01:00:07] Right?

[01:00:07 - 01:00:09] Either delta is in capital

[01:00:09 - 01:00:10] delta or delta is not in

[01:00:10 - 01:00:11] capital delta.

[01:00:11 - 01:00:12] One of those two things has to

[01:00:12 - 01:00:13] be true.

[01:00:13 - 01:00:14] So case one.

[01:00:14 - 01:00:15] Suppose it is.

[01:00:15 - 01:00:16] Let me see if I can

[01:00:16 - 01:00:17] derive a contradiction.

[01:00:17 - 01:00:18] Suppose.

[01:00:18 - 01:00:20] Little delta is now in

[01:00:20 - 01:00:21] capital.

[01:00:21 - 01:00:22] What does that mean by

[01:00:22 - 01:00:23] definition?

[01:00:23 - 01:00:29] If you have to see it.

[01:00:29 - 01:00:30] Right?

[01:00:30 - 01:00:31] Yeah.

[01:00:31 - 01:00:32] The little delta is not an

[01:00:32 - 01:00:33] element of phi of little

[01:00:33 - 01:00:34] delta.

[01:00:34 - 01:00:35] Right?

[01:00:35 - 01:00:36] By definition, I would

[01:00:36 - 01:00:37] place little x by little

[01:00:37 - 01:00:38] delta.

[01:00:38 - 01:00:39] And when I see this by

[01:00:39 - 01:00:43] definition, little delta is

[01:00:43 - 01:00:45] non-melons of phi of little

[01:00:45 - 01:00:46] delta.

[01:00:46 - 01:00:48] What's phi of little

[01:00:48 - 01:00:49] delta?

[01:00:49 - 01:00:54] Oh, it's capital delta.

[01:00:54 - 01:00:55] If I assume

[01:00:55 - 01:00:58] it's an element, no it's not.

[01:00:58 - 01:01:02] That's a contradiction.

[01:01:02 - 01:01:03] In case one.

[01:01:03 - 01:01:07] But I have another case.

[01:01:07 - 01:01:08] Maybe it's just non-melons.

[01:01:08 - 01:01:09] Is it?

[01:01:09 - 01:01:10] Is it?

[01:01:10 - 01:01:11] Not in the same.

[01:01:11 - 01:01:16] So suppose delta is not an

[01:01:16 - 01:01:17] element of capital delta.

[01:01:17 - 01:01:19] Well, what does that mean by

[01:01:19 - 01:01:20] definition?

[01:01:20 - 01:01:22] Negation of the predicate.

[01:01:22 - 01:01:27] Then, negation, delta is

[01:01:27 - 01:01:29] non-melons of capital delta.

[01:01:30 - 01:01:31] Sorry.

[01:01:31 - 01:01:32] A field.

[01:01:32 - 01:01:37] What does that mean?

[01:01:37 - 01:01:39] Not double negation here.

[01:01:39 - 01:01:42] That means delta is non-melons

[01:01:42 - 01:01:43] of phi of delta.

[01:01:43 - 01:01:45] Who's phi of delta?

[01:01:45 - 01:01:51] That's half of a delta.

[01:01:51 - 01:01:55] So if I assume it is not, then

[01:01:55 - 01:01:56] it is.

[01:01:56 - 01:01:59] Contribution.

[01:01:59 - 01:02:01] No matter what, I get a

[01:02:01 - 01:02:02] contradiction.

[01:02:02 - 01:02:03] If the same kind of

[01:02:03 - 01:02:04] contradiction, you got any

[01:02:04 - 01:02:05] difference.

[01:02:05 - 01:02:06] It's the same kind of

[01:02:06 - 01:02:07] contradiction that you'll get

[01:02:07 - 01:02:08] in canada diagonal order.

[01:02:08 - 01:02:10] It's the same kind of

[01:02:10 - 01:02:11] contradiction you get in the

[01:02:11 - 01:02:12] helping problem.

[01:02:12 - 01:02:13] You get the same kind of

[01:02:13 - 01:02:14] contradiction in all these

[01:02:14 - 01:02:15] arguments because they're all

[01:02:15 - 01:02:18] special cases of the same idea

[01:02:18 - 01:02:19] that canada was one of the

[01:02:19 - 01:02:20] first people ever to come up with,

[01:02:20 - 01:02:21] which I think is a part of.

[01:02:21 - 01:02:22] Right.

[01:02:22 - 01:02:23] But this idea shows

[01:02:23 - 01:02:24] them in a lot of different

[01:02:24 - 01:02:25] places.

[01:02:25 - 01:02:26] I'll just make one small comment

[01:02:26 - 01:02:27] and then we'll finish this up.

[01:02:27 - 01:02:28] There's something called

[01:02:28 - 01:02:29] La Viers.

[01:02:29 - 01:02:30] Fixes come here.

[01:02:30 - 01:02:33] And I know that this class is

[01:02:33 - 01:02:35] a lot of math and it's a lot of

[01:02:35 - 01:02:36] math related to computer science

[01:02:36 - 01:02:37] and computer science belongs to

[01:02:37 - 01:02:38] math.

[01:02:38 - 01:02:39] Engineering tries to take it

[01:02:39 - 01:02:40] away from us, but like now

[01:02:40 - 01:02:41] it belongs to math.

[01:02:41 - 01:02:42] But it's a lot of a very

[01:02:42 - 01:02:43] particular kind of math.

[01:02:43 - 01:02:45] If you're into other kinds of

[01:02:45 - 01:02:46] math, like linear algebra,

[01:02:46 - 01:02:47] what are common tools?

[01:02:47 - 01:02:48] What do you do?

[01:02:48 - 01:02:50] In linear algebra, analysis,

[01:02:50 - 01:02:52] calculus, things like that.

[01:02:52 - 01:02:54] A lot of that other kind of

[01:02:54 - 01:02:55] math sounds very different to

[01:02:55 - 01:02:57] this until you start setting

[01:02:57 - 01:02:58] where you did.

[01:02:58 - 01:02:59] But this kind of argument

[01:02:59 - 01:03:00] shows up over there as well.

[01:03:00 - 01:03:02] This is an argument from

[01:03:02 - 01:03:03] topology.

[01:03:03 - 01:03:04] But it's also related to an

[01:03:04 - 01:03:06] argument in linear algebra called

[01:03:06 - 01:03:08] the development theorem for

[01:03:08 - 01:03:11] vector spaces.

[01:03:11 - 01:03:12] So if you're interested in that,

[01:03:12 - 01:03:13] you can always talk about it.

[01:03:13 - 01:03:15] But now that I've got

[01:03:15 - 01:03:17] contradictions, that means my initial

[01:03:17 - 01:03:18] claim that the cardinality

[01:03:18 - 01:03:19] of x is greater than equal to

[01:03:19 - 01:03:21] the cardinality of x is false.

[01:03:21 - 01:03:24] So we conclude that the

[01:03:24 - 01:03:26] cardinality of x is

[01:03:26 - 01:03:28] strictly small than the

[01:03:28 - 01:03:29] cardinality of x.

[01:03:29 - 01:03:31] And the cardinality of x is

[01:03:31 - 01:03:32] greater than the cardinality of

[01:03:32 - 01:03:33] x.

[01:03:33 - 01:03:34] And that's for any set.

[01:03:34 - 01:03:35] I'm going to make one more

[01:03:35 - 01:03:36] comment.

[01:03:36 - 01:03:37] What is the input of this

[01:03:37 - 01:03:38] theorem?

[01:03:38 - 01:03:40] There are uncountable sets.

[01:03:40 - 01:03:42] I have an explicit example.

[01:03:42 - 01:03:43] The power set of the set

[01:03:43 - 01:03:44] and action numbers is

[01:03:44 - 01:03:46] uncountable because it's

[01:03:46 - 01:03:47] bigger than once I apply this

[01:03:47 - 01:03:48] theorem.

[01:03:48 - 01:03:49] It cannot be counted

[01:03:49 - 01:03:50] by definition.

[01:03:50 - 01:03:53] But is there a set bigger than

[01:03:53 - 01:03:55] this?

[01:03:55 - 01:03:57] So n is here.

[01:03:57 - 01:03:59] It's smaller than, power set

[01:03:59 - 01:04:00] than.

[01:04:00 - 01:04:01] Is there a bigger set than

[01:04:01 - 01:04:02] that?

[01:04:02 - 01:04:04] It's power set.

[01:04:04 - 01:04:08] Is there a bigger set than

[01:04:08 - 01:04:09] that?

[01:04:09 - 01:04:11] Is there a bigger set?

[01:04:11 - 01:04:12] Is there a bigger set?

[01:04:12 - 01:04:13] Yeah.

[01:04:13 - 01:04:14] There is an infinite

[01:04:14 - 01:04:16] hierarchy of increasingly

[01:04:16 - 01:04:18] large infinite sets, and the

[01:04:18 - 01:04:19] hierarchy never stops.

[01:04:19 - 01:04:21] And these are only some of

[01:04:21 - 01:04:22] them.

[01:04:22 - 01:04:23] Where is the set of your

[01:04:23 - 01:04:24] numbers live?

[01:04:24 - 01:04:25] We know that it's uncountable

[01:04:25 - 01:04:26] because maybe you've

[01:04:26 - 01:04:27] heard it, and once I

[01:04:27 - 01:04:29] describe candies like an

[01:04:29 - 01:04:30] argument in a supplementary

[01:04:30 - 01:04:31] video, you'll have a good

[01:04:31 - 01:04:32] idea of how you would prove

[01:04:32 - 01:04:33] it.

[01:04:33 - 01:04:34] But it's surprisingly

[01:04:34 - 01:04:35] complicated.

[01:04:35 - 01:04:36] It's subtle proof.

[01:04:36 - 01:04:38] But where does the

[01:04:38 - 01:04:40] formula number is live?

[01:04:40 - 01:04:41] It can't be counted.

[01:04:41 - 01:04:44] So it's over here somewhere.

[01:04:44 - 01:04:45] But where?

[01:04:45 - 01:04:46] Anyone?

[01:04:46 - 01:04:49] We need the last.

[01:04:49 - 01:04:50] There is no last.

[01:04:50 - 01:04:51] I guess the end.

[01:04:51 - 01:04:52] There is no end.

[01:04:52 - 01:04:53] This goes forever.

[01:04:53 - 01:04:54] This is part of the problem

[01:04:54 - 01:04:56] that like sets get bigger.

[01:04:56 - 01:04:57] Whenever you think

[01:04:57 - 01:04:58] you've got the biggest set,

[01:04:58 - 01:04:59] I know the bigger set.

[01:04:59 - 01:05:00] It's power set.

[01:05:00 - 01:05:01] It must be bigger.

[01:05:01 - 01:05:02] The infinite set just

[01:05:02 - 01:05:03] gets bigger and bigger.

[01:05:03 - 01:05:04] They get more big than you

[01:05:04 - 01:05:05] could possibly imagine.

[01:05:05 - 01:05:06] Some sets are so big that

[01:05:06 - 01:05:07] we can't prove they exist,

[01:05:07 - 01:05:08] and it's a problem.

[01:05:08 - 01:05:09] Some sets are so big that if

[01:05:09 - 01:05:10] you assume they exist, set

[01:05:10 - 01:05:11] every fundamental changes.

[01:05:11 - 01:05:12] And you start proving weird

[01:05:12 - 01:05:13] things like, oh, some

[01:05:13 - 01:05:14] integrals are not possible.

[01:05:14 - 01:05:15] Or some integrals are

[01:05:15 - 01:05:16] supposed to be impossible or

[01:05:16 - 01:05:17] possible like weird things

[01:05:17 - 01:05:18] start to happen.

[01:05:18 - 01:05:19] When you start assuming

[01:05:19 - 01:05:20] that you're not

[01:05:20 - 01:05:21] possible, you're not

[01:05:21 - 01:05:22] possible.

[01:05:22 - 01:05:23] And you start proving

[01:05:23 - 01:05:24] weird things.

[01:05:27 - 01:05:28] That's a really big set

[01:05:28 - 01:05:29] to exist.

[01:05:29 - 01:05:30] But...

[01:05:30 - 01:05:31] Our company is big as

[01:05:31 - 01:05:32] you want it to be.

[01:05:32 - 01:05:33] Yeah, well, that's weird.

[01:05:33 - 01:05:34] But part of the, like,

[01:05:34 - 01:05:35] you're not the problem.

[01:05:35 - 01:05:36] Right?

[01:05:36 - 01:05:37] Our company is big.

[01:05:37 - 01:05:38] I want that.

[01:05:38 - 01:05:39] That's a very subtle

[01:05:39 - 01:05:40] social.

[01:05:40 - 01:05:41] The thing I want to tell you

[01:05:41 - 01:05:42] and then you guys can all

[01:05:42 - 01:05:43] name and then we've done,

[01:05:43 - 01:05:44] is that we don't know.

[01:05:44 - 01:05:45] And in fact, it's not just

[01:05:45 - 01:05:46] that we don't know.

[01:05:46 - 01:05:47] We cannot know.

[01:05:47 - 01:05:48] With the actions of

[01:05:48 - 01:05:49] the sector, we cannot know

[01:05:49 - 01:05:50] how big this is.

[01:05:50 - 01:05:51] It's bigger than N.

[01:05:51 - 01:05:53] In standard models of

[01:05:53 - 01:05:54] sector.

[01:05:54 - 01:05:55] There are models of sector

[01:05:55 - 01:05:56] where the sets count

[01:05:56 - 01:05:58] in the normal universe of

[01:05:58 - 01:05:59] sector.

[01:05:59 - 01:06:00] This set is one capital,

[01:06:00 - 01:06:01] so it's bigger.

[01:06:01 - 01:06:02] But I don't know how big

[01:06:02 - 01:06:03] and I cannot know how big.

[01:06:03 - 01:06:04] In fact, there's a

[01:06:04 - 01:06:06] theorem that says, you do not

[01:06:06 - 01:06:08] know how big this is.

[01:06:08 - 01:06:09] Theorem.

[01:06:09 - 01:06:10] That's all,

[01:06:10 - 01:06:11] continuing.

[01:06:11 - 01:06:12] Have offices.

[01:06:12 - 01:06:17] People used to think

[01:06:17 - 01:06:18] that when

[01:06:18 - 01:06:19] sector is being developed,

[01:06:19 - 01:06:20] that when computer

[01:06:20 - 01:06:21] science was being founded

[01:06:21 - 01:06:22] as a field,

[01:06:22 - 01:06:23] people used to think that

[01:06:23 - 01:06:25] the set of real numbers

[01:06:25 - 01:06:27] was as big as the power

[01:06:27 - 01:06:28] set of the set of

[01:06:28 - 01:06:29] real numbers.

[01:06:29 - 01:06:30] And there's some nice

[01:06:30 - 01:06:32] intuition for why you might

[01:06:32 - 01:06:33] want that to be true.

[01:06:33 - 01:06:35] But that cannot be true

[01:06:35 - 01:06:36] because you can't prove it.

[01:06:36 - 01:06:38] Its negation also cannot

[01:06:38 - 01:06:39] be true because you can't

[01:06:39 - 01:06:40] prove it.

[01:06:40 - 01:06:41] You can't prove that this has

[01:06:41 - 01:06:42] that part now,

[01:06:42 - 01:06:43] but you can't prove it

[01:06:43 - 01:06:44] and it doesn't have that

[01:06:44 - 01:06:45] part now.

[01:06:45 - 01:06:46] You have no idea

[01:06:46 - 01:06:47] what the part now

[01:06:47 - 01:06:48] into the set is.

[01:06:48 - 01:06:49] Even with the icy

[01:06:49 - 01:06:50] choice that we were thinking

[01:06:50 - 01:06:51] that I told you about

[01:06:51 - 01:06:52] the sense of personal

[01:06:52 - 01:06:53] sector, even then we don't

[01:06:53 - 01:06:54] know.

[01:06:54 - 01:06:55] This is an

[01:06:55 - 01:06:56] independence sentence.

[01:06:56 - 01:06:57] If you want to know

[01:06:57 - 01:06:58] how big a set of real numbers,

[01:06:58 - 01:06:59] you need a new accident

[01:06:59 - 01:07:00] for a set of real numbers.

[01:07:00 - 01:07:01] That's the

[01:07:01 - 01:07:02] essence.

[01:07:02 - 01:07:03] I'm going to do a part of this.

[01:07:03 - 01:07:04] Thank you for letting me go

[01:07:04 - 01:07:08] over time.

[01:07:08 - 01:07:09] I appreciate it.

[01:07:09 - 01:07:10] Now we can actually

[01:07:10 - 01:07:11] start doing the

[01:07:11 - 01:07:12] grad theory on Monday.

[01:07:12 - 01:07:13] This is so cool.

[01:07:13 - 01:07:14] I think it kind of makes sense

[01:07:14 - 01:07:16] that you can do this in the

[01:07:16 - 01:07:17] Brussels very often.

[01:07:17 - 01:07:18] That's cool.

[01:07:18 - 01:07:19] I've never seen that.

[01:07:19 - 01:07:20] Yeah.

[01:07:20 - 01:07:21] Yeah.

[01:07:21 - 01:07:22] And I'm surprised

[01:07:22 - 01:07:23] that we have people that

[01:07:23 - 01:07:24] have never seen

[01:07:24 - 01:07:25] something short and beautiful

[01:07:25 - 01:07:26] arguments because

