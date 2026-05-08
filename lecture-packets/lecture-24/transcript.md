# Transcript: lecture-24.mp4

- Detected language: en (1.00)
- Duration: 00:51:29
- Model: faster-whisper base.en, CPU int8

## Segments

[00:00:00 - 00:00:09] Okay. All right, we'll go ahead and get started.

[00:00:09 - 00:00:11] Are there any questions on problems at six?

[00:00:11 - 00:00:14] Did we all see that I changed problem number three?

[00:00:14 - 00:00:15] All right, good.

[00:00:15 - 00:00:19] If you, for some reason, actually think that you have a correct group

[00:00:19 - 00:00:21] of the previous version of problem number three.

[00:00:21 - 00:00:24] I haven't got it, but I've been surprised before.

[00:00:24 - 00:00:26] You can go ahead and talk to me after class, or you can send me

[00:00:26 - 00:00:27] a DM through Slack.

[00:00:27 - 00:00:30] And when I have time, I'll take a look at it, and if it is actually

[00:00:30 - 00:00:37] it is actually correct when you have a conversation, but it's really not worth doing that, because

[00:00:37 - 00:00:41] based on what I was doing, when I was working on the problems and thinking about what problems

[00:00:41 - 00:00:44] are from the problem set, I just didn't think that the proof number three of you, which the

[00:00:44 - 00:00:49] version would be so involved. It's not involved for a very interesting reason. It's like some

[00:00:49 - 00:00:53] conceptual, like, oh, really difficult thing. It's like, you got to do a lot of work. You

[00:00:53 - 00:00:58] got to do one of the most strict old ways to do the old version is to do tripping estimate

[00:00:58 - 00:01:01] and it's just like not worth doing that, right?

[00:01:01 - 00:01:03] Like why do so much work for just more public

[00:01:03 - 00:01:05] when it's not that important?

[00:01:06 - 00:01:09] If there are no questions on that, no?

[00:01:09 - 00:01:10] Then I want to make an announcement.

[00:01:10 - 00:01:13] There is, so midterm two, this priority,

[00:01:13 - 00:01:15] I'll talk a little bit about midterm today

[00:01:15 - 00:01:16] and I'm getting up to the midterm,

[00:01:16 - 00:01:17] but there will be review sessions,

[00:01:17 - 00:01:22] there's a four, there's been review of today

[00:01:23 - 00:01:27] in Mandarin and, oh my God,

[00:01:27 - 00:01:30] Great, where is something called?

[00:01:30 - 00:01:31] In certain terms?

[00:01:31 - 00:01:33] It's going to be one for the fall.

[00:01:33 - 00:01:36] It's going to stop the fall next to about how long?

[00:01:36 - 00:01:36] One for the fall?

[00:01:36 - 00:01:38] What's the room on the chair?

[00:01:38 - 00:01:39] One for the tree.

[00:01:39 - 00:01:40] One for the tree.

[00:01:40 - 00:01:43] That's today at 6 p.m.

[00:01:43 - 00:01:45] And it goes to 8 p.m.

[00:01:45 - 00:01:47] Or I guess it's going to get to the town.

[00:01:47 - 00:01:51] So that's today.

[00:01:51 - 00:01:58] And then on Thursday, there will be an English period

[00:01:58 - 00:02:14] in the same place in number 4, 3, 1, 3, and it will start, like, 5 to 30-ish until 8.

[00:02:14 - 00:02:17] Basically, I'll walk from my office hours to a month for a haul, and then we can start

[00:02:17 - 00:02:18] third reset.

[00:02:18 - 00:02:21] Because math starts in the pie.

[00:02:21 - 00:02:25] The format is going to be the same, like I'm not going to surprise you on midterm 2,

[00:02:25 - 00:02:26] or on midterm 3.

[00:02:26 - 00:02:27] We're on the final.

[00:02:27 - 00:02:30] The format of the prop of the exams is not going to change at all, so if you want me

[00:02:30 - 00:02:34] want me to talk to you about that, that's going to take time out of class, maybe better

[00:02:34 - 00:02:37] to talk to me about that in office hours, because nothing fun and mentally has changed.

[00:02:37 - 00:02:43] I will post a review exam sometime later the day or tomorrow, I'm a little bit behind

[00:02:43 - 00:02:51] all of this. Any questions? Any questions? Any questions? Is it cumulative or, like,

[00:02:51 - 00:02:56] propositional? It's spiritually cumulative, meaning none of the stuff from before is irrelevant

[00:02:56 - 00:02:58] And you should remember all of it.

[00:02:58 - 00:03:01] But I'm focusing the examination mainly on stuff

[00:03:01 - 00:03:04] since the previous midterm, up until last Friday,

[00:03:04 - 00:03:07] including last Friday.

[00:03:07 - 00:03:11] So it's not infeasible, and it's not against the law.

[00:03:11 - 00:03:12] If I ask you about compositional logic,

[00:03:12 - 00:03:13] you shouldn't forget about that.

[00:03:13 - 00:03:15] And information for compositional logic

[00:03:15 - 00:03:16] is relatively important.

[00:03:16 - 00:03:18] But I probably won't have a dedicated proof

[00:03:18 - 00:03:22] about compositional logic, right?

[00:03:22 - 00:03:24] On the final exam, just being limited,

[00:03:24 - 00:03:25] that is much more likely, that I just

[00:03:25 - 00:03:34] something about like a dedicated topic from before. Anything else? All right, cool. Then

[00:03:34 - 00:03:40] we are basically done talking about number period. We finished last class by talking about

[00:03:40 - 00:03:45] the issues that day and needed this identity in order to recruit people as well, which

[00:03:45 - 00:03:55] on the tree emphasizes, so we important them up. This says that for every tree for every

[00:03:55 - 00:04:03] The key in the national numbers is that every A and B in the national numbers, if P is time

[00:04:03 - 00:04:14] and P divides A times B, then P divides A or P divides B. That's a massive theorem.

[00:04:14 - 00:04:21] And you need the zuchedenian, the zuchedenian, you need the equation of vision law and et cetera, et cetera.

[00:04:21 - 00:04:25] So, like, all that stuff sort of builds up to this group of important theories.

[00:04:25 - 00:04:30] And today I want to talk about something that is going to sound different.

[00:04:30 - 00:04:36] But that's where like the basic number theory, the things that you can call basic number theory

[00:04:36 - 00:04:37] ends.

[00:04:37 - 00:04:42] And that's where the topics up until exam two, midterm two end, they end right up in Utah.

[00:04:42 - 00:04:47] And everything is covered up until that, including from set six and all this stuff.

[00:04:47 - 00:04:51] Now this thing that we're studying right now, which I'm calling basic number theory, a lot

[00:04:51 - 00:04:56] of people just call this number theory, I'm calling it basic number theory to distinguish

[00:04:56 - 00:05:03] it from something more modern than it's relevant to computer science right now. But it's all

[00:05:03 - 00:05:09] based on like, first of all, we already feel like we sort of understand arithmetic as we

[00:05:09 - 00:05:13] discuss it. The semester has been talking about the natural numbers and what popular

[00:05:13 - 00:05:18] natural numbers have under addition on the multiplication. Number theory is concerned

[00:05:18 - 00:05:24] with this algebraic structure, this algebraic structure. So instead of natural numbers and

[00:05:24 - 00:05:26] Instead of integers, with additional position

[00:05:26 - 00:05:29] to find both of them, they have slightly different properties

[00:05:29 - 00:05:31] because here we have added in versus for our element,

[00:05:31 - 00:05:32] here we go, but otherwise they seem

[00:05:32 - 00:05:34] to have most of the same properties.

[00:05:34 - 00:05:38] But it's concerned with studying how these algebraic structures,

[00:05:38 - 00:05:41] how these numbers relate to each other,

[00:05:41 - 00:05:47] not under additional location, but under divisible.

[00:05:47 - 00:05:48] Everything we've studied so far has really

[00:05:48 - 00:05:52] been consequences of analyzing that relation.

[00:05:52 - 00:05:54] What it means for one number to divide another number,

[00:05:54 - 00:05:57] one integer to divide another integer.

[00:05:57 - 00:06:01] And, tell me if I'm wrong, is it always the case

[00:06:01 - 00:06:02] that an integer divides another integer,

[00:06:02 - 00:06:05] given two random integers?

[00:06:05 - 00:06:07] What about the other one?

[00:06:07 - 00:06:11] Is one of these always true for two given integers?

[00:06:11 - 00:06:12] No, sometimes they're both false.

[00:06:12 - 00:06:16] Sometimes, neither x divides y nor y divides x, right?

[00:06:16 - 00:06:17] And you can gain some insight into that

[00:06:17 - 00:06:20] by looking at the front factorizations.

[00:06:20 - 00:06:23] You can also gain some insight into this

[00:06:23 - 00:06:25] by thinking about the Euclidean division

[00:06:25 - 00:06:33] So I'll remind you real quickly, this is, because division, lemma,

[00:06:33 - 00:06:38] says that whenever x is not an instance,

[00:06:38 - 00:06:43] there exists meaning in part, integers.

[00:06:43 - 00:06:44] When the quotient becomes a remainder,

[00:06:44 - 00:06:49] so that if I try to divide x by y, then the division of x

[00:06:49 - 00:06:54] by y gives me x as y times a quotient,

[00:06:54 - 00:06:55] plus a remainder.

[00:06:55 - 00:06:58] And this is a really important part that a lot of people

[00:06:58 - 00:07:01] seem to under-appreciate, not only is x written

[00:07:01 - 00:07:05] as partial plus remainder, but this remainder

[00:07:05 - 00:07:09] is strictly between 0 and the epsilon y,

[00:07:09 - 00:07:11] possibly between 0 and non-linear epsilon y.

[00:07:11 - 00:07:16] It's strictly inside the search.

[00:07:16 - 00:07:20] And whenever x divides y, we know

[00:07:20 - 00:07:28] that this remainder can't be less than y.

[00:07:28 - 00:07:29] It's got to be 0.

[00:07:29 - 00:07:30] It's got to be 0.

[00:07:30 - 00:07:33] is x divided by y, meaning x is in a multiple one,

[00:07:33 - 00:07:37] then x equals major nth y.

[00:07:37 - 00:07:40] That integers unique, because this theorem says uniqueness,

[00:07:40 - 00:07:43] so that number has to be zero, right?

[00:07:43 - 00:07:45] Otherwise, it screws up, right?

[00:07:45 - 00:07:49] x as an integer times y, make sense?

[00:07:49 - 00:07:54] So if x doesn't divide by y, then this remainder is non-zero.

[00:07:54 - 00:07:59] For example, there's two divided by five.

[00:07:59 - 00:08:00] No, right?

[00:08:00 - 00:08:08] 2 doesn't divide 5, let me try to write, yeah, let me try to write 5 divided by 2 in the

[00:08:08 - 00:08:13] Euclidean division 1. I mean Euclidean division will be divided because I'm actually how to

[00:08:13 - 00:08:17] actually divide these things. But on the bottom of this sense, 5 divided by 2. So 5

[00:08:17 - 00:08:22] is 2 times the quotient plus 1. So the quotient goes here. The numerator goes here. What

[00:08:22 - 00:08:33] of my remainder. Two, and one. This remainder is non-zero, right? Okay. Think about the number.

[00:08:33 - 00:08:40] About it. Just two by the left. Let me write the lambda by two with quotient remainder.

[00:08:40 - 00:08:46] A lot of it is some quotient kind of two plus a remainder. What's my quotient remainder?

[00:08:46 - 00:08:54] Five end. One, two, one, one. Oh look. They have the same remainder.

[00:08:54 - 00:09:01] do finally let them have anything in common, other than another crime.

[00:09:01 - 00:09:03] They're both positive, right?

[00:09:03 - 00:09:08] In fact, the common way to think about what an odd number is, is something that's not even.

[00:09:08 - 00:09:14] But if it's not even, meaning it's not divisible by 2, then actually, if the remainder has to be non-zero,

[00:09:14 - 00:09:18] and because of the way that this derivative is stated,

[00:09:18 - 00:09:20] what does that remainder have to be if it's non-zero?

[00:09:20 - 00:09:22] Well, it can only possibly be 1.

[00:09:22 - 00:09:27] This remainder has to be between 0 and 2, not an equivalent to 2.

[00:09:27 - 00:09:29] So it's gotta be one.

[00:09:29 - 00:09:32] So in fact, every odd number has the same remainder

[00:09:32 - 00:09:35] when divided by two using the Euclidean division.

[00:09:35 - 00:09:37] That remainder is one.

[00:09:37 - 00:09:39] And this is potentially an equivalent way

[00:09:39 - 00:09:41] you could have defined what it means to be odd.

[00:09:41 - 00:09:43] Oh, that this remainder, which is unique

[00:09:43 - 00:09:46] and which definitely exists, is exactly one.

[00:09:46 - 00:09:48] If that remainder is that zero, then equality,

[00:09:48 - 00:09:50] it's a slightly more complicated definition

[00:09:50 - 00:09:52] of even a random one that we have,

[00:09:52 - 00:09:55] but they're told the equivalent concepts.

[00:09:55 - 00:09:59] But this now starts like banging the question.

[00:09:59 - 00:10:01] Even numbers have something in common.

[00:10:01 - 00:10:06] All even numbers, if X is even,

[00:10:06 - 00:10:09] have two as a prime divisor.

[00:10:09 - 00:10:15] I can't talk about the shared prime divisors of odd numbers.

[00:10:15 - 00:10:17] Because just because Y is odd, meaning Y is not even,

[00:10:17 - 00:10:21] doesn't actually tell me anything about the divisors of Y.

[00:10:21 - 00:10:25] But it does tell me that Y shares something in common

[00:10:25 - 00:10:27] with any other odd number,

[00:10:27 - 00:10:28] that if I were to divide it by two,

[00:10:28 - 00:10:33] I'll get the same, maybe I'll get the mean of one, right?

[00:10:33 - 00:10:36] From the perspective, and this is gonna sound a little bit weird,

[00:10:36 - 00:10:38] but I'm using this thing for the purpose,

[00:10:38 - 00:10:44] from the perspective of two, of the number two,

[00:10:44 - 00:10:47] there are only two kinds of images.

[00:10:47 - 00:10:51] There are the ones that have a mean or zero,

[00:10:51 - 00:10:52] but ones that are even, right?

[00:10:52 - 00:10:54] And there are the ones that have a mean of one,

[00:10:54 - 00:10:56] the ones that are off,

[00:10:56 - 00:10:59] because if you're measuring stick for what an integer is,

[00:10:59 - 00:11:02] and you're gonna be a little bit administrative,

[00:11:02 - 00:11:03] And if what I'm trying to say right now doesn't make sense,

[00:11:03 - 00:11:05] this is meaningful motivation.

[00:11:05 - 00:11:06] So I'm not going to be testing you

[00:11:06 - 00:11:08] on any of the stupid things I'm saying right now.

[00:11:08 - 00:11:10] But let's look at number five real quick.

[00:11:10 - 00:11:11] So here's zero.

[00:11:11 - 00:11:14] One, two, three, four, five.

[00:11:14 - 00:11:19] Five and 11, six, seven, nine, seven, 11.

[00:11:19 - 00:11:21] Have so many comfortable with perspective of two.

[00:11:21 - 00:11:23] Here's number two.

[00:11:23 - 00:11:27] I'm going to think about how the number line looks like

[00:11:27 - 00:11:31] if I'm only allowed to take steps of size two.

[00:11:31 - 00:11:33] So I'm going to look at the number line,

[00:11:33 - 00:11:40] from the perspective of 2, and if I only announce this exercise 2, then here's 4, and I know

[00:11:40 - 00:11:46] that this is 4 because it's 2 times 2, and I know that this is 6 because it's 2 times

[00:11:46 - 00:11:51] 3, so if I take steps of size 2, I get exactly 2, this number, this number, this number.

[00:11:51 - 00:11:59] Notice that it's divisible by 2. In between two of these, even numbers, two of these,

[00:11:59 - 00:12:01] Here I have number five.

[00:12:01 - 00:12:03] And so two, the number two,

[00:12:03 - 00:12:06] the number five says you're not remaining to zero,

[00:12:06 - 00:12:09] you're remaining one plus zero.

[00:12:09 - 00:12:11] This is a remainder, one number.

[00:12:11 - 00:12:14] According to the visibility by two, right?

[00:12:14 - 00:12:16] If you keep taking sets of size two,

[00:12:16 - 00:12:19] eventually you get two 11, there's 12.

[00:12:19 - 00:12:21] And you make the same realization that,

[00:12:21 - 00:12:24] oh, 11 is one more than a multiple of two.

[00:12:24 - 00:12:27] It's a remainder, one number.

[00:12:27 - 00:12:30] And so from the perspective of the visibility by two,

[00:12:30 - 00:12:32] We seem to have the same party.

[00:12:32 - 00:12:34] They seem to be equivalent, right?

[00:12:34 - 00:12:38] Because if I restrict my attention to this box

[00:12:38 - 00:12:43] and to this box, five and 11 seem to be aligned

[00:12:43 - 00:12:45] in the same place.

[00:12:45 - 00:12:47] Maybe this illustration is a little kind of interesting,

[00:12:47 - 00:12:49] just people were talking about two in particular,

[00:12:49 - 00:12:53] but we can take this idea and think about

[00:12:53 - 00:12:56] how numbers look from the perspective of the visibility

[00:12:56 - 00:12:58] by some other number.

[00:12:58 - 00:13:01] So let's think about, for example, six.

[00:13:01 - 00:13:03] That's a nice number.

[00:13:03 - 00:13:05] So I'm going to think about the visibility by 6 per foot.

[00:13:05 - 00:13:06] And I want to think about 5.

[00:13:06 - 00:13:08] And I want to think about 11.

[00:13:08 - 00:13:12] And I want to think about another number like 15.

[00:13:12 - 00:13:15] So here's our number 1.

[00:13:15 - 00:13:16] There's 0.

[00:13:16 - 00:13:20] There's 1, 2, 3, 4, 5, 6.

[00:13:20 - 00:13:29] 1, 10, 11, 12, 14, 15, 16, 17, 18.

[00:13:29 - 00:13:33] So I'm going to take a step of size 6.

[00:13:33 - 00:13:38] So, there's six, there's another step inside six,

[00:13:38 - 00:13:40] and notice where 11 blocks,

[00:13:40 - 00:13:44] 11 has remained what after division by six?

[00:13:44 - 00:13:46] Meaning five, right?

[00:13:46 - 00:13:50] And I can know that by figuring out that the 11 is,

[00:13:50 - 00:13:52] sorry, one times six plus five,

[00:13:52 - 00:13:54] and I can just figure out what Q and R are,

[00:13:54 - 00:13:56] or I can apply the division algorithm,

[00:13:56 - 00:13:58] and I can figure out what the two main values are.

[00:13:58 - 00:14:01] Or, I can see that here on the number line,

[00:14:01 - 00:14:03] starting from a multiple of six,

[00:14:03 - 00:14:06] This guy has a major 0, so this guy would have a major 1,

[00:14:06 - 00:14:09] a major 2, a major 3, a major 4, a major 5.

[00:14:09 - 00:14:11] That's a lot of it.

[00:14:11 - 00:14:18] If you do the same thing and look at, oh, here's 5.

[00:14:18 - 00:14:20] I never talked about 5.

[00:14:20 - 00:14:22] If you do the same thing here with 5,

[00:14:22 - 00:14:24] you get the same conclusion.

[00:14:24 - 00:14:28] This has a major 5, not only because, well,

[00:14:28 - 00:14:32] it would have to be 5 equals 0 times 6 plus 5,

[00:14:32 - 00:14:34] including division 1, not only because of this,

[00:14:34 - 00:14:42] But also because when I look at the normal length of a perspective of 6, 5 and 11 are in the same place.

[00:14:42 - 00:14:45] They're both 5 more than a multiple of 6.

[00:14:45 - 00:14:49] Or if you want to think about it, they're both 1 and less than a multiple of 6.

[00:14:49 - 00:14:51] So I'm going to think of these as being 5.

[00:14:51 - 00:15:01] So both of these sort of look like 5 from the perspective of the visibility by 6.

[00:15:01 - 00:15:09] They also look like negative 1 from the perspective of the visibility by 6.

[00:15:09 - 00:15:13] And so, why is this interesting, why is this suggestible?

[00:15:13 - 00:15:17] First of all, 15 looks different, right?

[00:15:17 - 00:15:20] 15 doesn't seem to lie in the same place

[00:15:20 - 00:15:21] when we started talking about the lower line

[00:15:21 - 00:15:23] in terms of chunks of size six.

[00:15:23 - 00:15:27] 15 has remained what, one, two, three,

[00:15:27 - 00:15:28] after the visibility by six.

[00:15:28 - 00:15:32] So, seemingly, from a perspective of visibility by six,

[00:15:32 - 00:15:34] because it has a different remainder,

[00:15:34 - 00:15:35] because it lies in a different place,

[00:15:35 - 00:15:38] maybe it has different problems.

[00:15:38 - 00:15:40] But these two seem to have the same problems

[00:15:40 - 00:15:43] And in fact, if I treated this like the number five,

[00:15:43 - 00:15:45] sorry, if I treated this like the number five,

[00:15:45 - 00:15:49] and I added to a number that looks like the number three.

[00:15:49 - 00:15:52] So 15, looks like these look like the number five.

[00:15:52 - 00:15:54] 15 sort of looks like the number three.

[00:15:54 - 00:15:55] These is about the number three.

[00:15:55 - 00:16:02] What would you expect the remainder of that sum to be?

[00:16:02 - 00:16:05] Well, if these actually look like the numbers five and three,

[00:16:05 - 00:16:08] what's five plus three, eight?

[00:16:08 - 00:16:11] So if I wanna know what 11 plus 15 looks like

[00:16:11 - 00:16:13] for the perspective of six.

[00:16:13 - 00:16:15] What the remainder is, when I add 11 to 15,

[00:16:15 - 00:16:20] what number is this, 20, now 30, what?

[00:16:20 - 00:16:22] That's 30, 26?

[00:16:22 - 00:16:24] Yeah, 26, thank you.

[00:16:24 - 00:16:26] If I let her know what 26 looks like from the perspective

[00:16:26 - 00:16:28] of six, what that remainder is,

[00:16:28 - 00:16:32] well, suggestively, maybe it's eight,

[00:16:32 - 00:16:34] maybe it's just the remainder of this guy,

[00:16:34 - 00:16:38] plus the remainder, plus the remainder of that guy,

[00:16:38 - 00:16:41] which would be eight, and eight would be what?

[00:16:41 - 00:16:45] Well, eight would be two, it'd be seven, eight,

[00:16:45 - 00:16:48] this is eight, so maybe that's two,

[00:16:48 - 00:16:50] so maybe the remainder is two,

[00:16:50 - 00:16:55] and then you can check, two, 26, 26, 24 plus two, right?

[00:16:55 - 00:16:59] So it's two more than multiple of six, 24 is multiple of six.

[00:16:59 - 00:17:02] So you can start playing around with the number line

[00:17:02 - 00:17:05] and thinking about what happens to these remainders,

[00:17:05 - 00:17:07] when you do different numbers, you just put these numbers,

[00:17:07 - 00:17:10] and whether or not these remainders

[00:17:10 - 00:17:12] actually seem to represent something that people like

[00:17:12 - 00:17:14] remember, something that we can do a rhythm take place,

[00:17:14 - 00:17:17] something that we can do the algebra for both, right?

[00:17:17 - 00:17:20] The fundamental thing, the fundamental definition

[00:17:20 - 00:17:22] that I want to motivate right now,

[00:17:22 - 00:17:34] is something called modular groups.

[00:17:34 - 00:17:36] When I understand this, well, this is a various,

[00:17:36 - 00:17:38] this begins, a discussion of a very deep

[00:17:38 - 00:17:40] and interesting topic that we could spend

[00:17:40 - 00:17:41] the rest of this another topic about,

[00:17:41 - 00:17:43] and not even get a close description of the termism.

[00:17:43 - 00:17:45] When I'm gonna talk about this very much,

[00:17:45 - 00:17:47] but I wanna talk a little bit about modular groups,

[00:17:47 - 00:17:49] because it motivates the medicine that we'll do.

[00:17:49 - 00:17:52] And also, it's really, really interesting in its own right

[00:17:52 - 00:17:55] and really, really relevant to, for example,

[00:17:55 - 00:17:56] things like monocrotography.

[00:17:56 - 00:18:01] It's relevant because this touches on a topic

[00:18:01 - 00:18:02] called commutative development.

[00:18:02 - 00:18:05] Commutative development is insanely relevant to

[00:18:05 - 00:18:07] monocrotography and monoclear science

[00:18:07 - 00:18:10] in like a whole bunch of things.

[00:18:10 - 00:18:13] So, this definition of monocrotography groups,

[00:18:13 - 00:18:14] what I want to define to be,

[00:18:14 - 00:18:18] is what it means for two numbers to look the same

[00:18:18 - 00:18:19] from the perspective of another number,

[00:18:19 - 00:18:23] from the perspective of the visibility by another number.

[00:18:23 - 00:18:31] So if these two numbers seem to be playing the same role

[00:18:31 - 00:18:34] seem to look the same, one way that I can define

[00:18:34 - 00:18:37] what it means for these two to be equivalent

[00:18:37 - 00:18:40] from the perspective of six is to say,

[00:18:40 - 00:18:43] well, two numbers are equivalent from the perspective of six

[00:18:43 - 00:18:45] when you try to divide them by six,

[00:18:45 - 00:18:49] you can include in division, and you get the same remaining.

[00:18:49 - 00:18:51] Would you agree with that definition?

[00:18:51 - 00:18:54] Is that a nice definition?

[00:18:54 - 00:18:55] You should ask yourself that question.

[00:18:55 - 00:18:57] I think it's a nice definition, except it's

[00:18:57 - 00:18:59] very worded definition, right?

[00:18:59 - 00:19:02] So if I want to say that some number of x

[00:19:02 - 00:19:04] and some number of y, these are both fingers,

[00:19:04 - 00:19:06] if I want to say that they both look the same

[00:19:06 - 00:19:10] from the perspective of some positive natural number of n,

[00:19:10 - 00:19:12] I could say what I just said, which

[00:19:12 - 00:19:17] is take x divided by n with position and remainder.

[00:19:17 - 00:19:20] Take y divided by x with position and remainder

[00:19:20 - 00:19:29] if you have a bunch of issues, plus y2.

[00:19:29 - 00:19:33] And of course, we have constraints on both, oh, this is r.

[00:19:33 - 00:19:35] We have constraints on both of these r to 0, plus 3 to r,

[00:19:35 - 00:19:38] r is less than x to the value of m,

[00:19:38 - 00:19:40] and 0, plus 3 to the power of 2, which

[00:19:40 - 00:19:43] is less than x to the value of m.

[00:19:43 - 00:19:45] And then I can say, well, r1 equals r2.

[00:19:45 - 00:19:49] But if r1 equals r2, then look at what

[00:19:49 - 00:19:53] happens if I subtract x from 1.

[00:19:53 - 00:19:58] If I subtract x from y, assuming that r1 equals r2,

[00:19:58 - 00:20:06] so we're going to work under the position of r1 equals r2,

[00:20:06 - 00:20:16] then x minus y is this, q1n plus r1 minus q2n plus r2.

[00:20:16 - 00:20:17] And if I manipulate this expression a little bit,

[00:20:17 - 00:20:23] I'll get q1 minus q2n plus r1 minus r2.

[00:20:23 - 00:20:26] If r1 equals r2, then what's this?

[00:20:26 - 00:20:26] 0.

[00:20:26 - 00:20:32] And so what I get here is u1 minus u2.

[00:20:32 - 00:20:37] And so what does this sum, then x minus y

[00:20:37 - 00:20:40] is the visible by, for example, 6,

[00:20:40 - 00:20:46] is 11 minus 5, visible by 6, which is 1 minus 5, 6.

[00:20:46 - 00:20:48] That's definitely the visible by 6.

[00:20:48 - 00:20:50] 15 had remainder 3.

[00:20:50 - 00:20:51] What's the number of remainder 3?

[00:20:51 - 00:20:57] After division by 6, for example, maybe 27 as a remainder 3.

[00:20:57 - 00:21:00] Yeah, 27 also has a range of 3.

[00:21:00 - 00:21:02] 27 minus 15 is what?

[00:21:02 - 00:21:03] 12, right?

[00:21:03 - 00:21:05] 12 is this plus 6.

[00:21:05 - 00:21:07] They have the same remainder.

[00:21:07 - 00:21:10] And as a consequence, when I subtract one from the other,

[00:21:10 - 00:21:13] I get something divisible by 6.

[00:21:13 - 00:21:14] That's kind of nice.

[00:21:14 - 00:21:16] And it makes sense also with this picture, right?

[00:21:16 - 00:21:20] If this is 11, and this is 5, then 11 minus 5

[00:21:20 - 00:21:24] should wind up somewhere at one of these boundaries.

[00:21:24 - 00:21:28] is I'm taking this chunk, and I'm taking this chunk,

[00:21:28 - 00:21:30] and this chunk must stop that chunk.

[00:21:30 - 00:21:31] The remainder part takes a lot,

[00:21:31 - 00:21:34] and everything else you've got left over

[00:21:34 - 00:21:35] is an integer multiple of six,

[00:21:35 - 00:21:38] because you're taking steps of size six.

[00:21:38 - 00:21:40] So this is number one, right?

[00:21:40 - 00:21:42] This is a simpler version, but that definition

[00:21:42 - 00:21:45] is the same thing, and this is how I wanted to find

[00:21:45 - 00:21:47] what it means for two numbers to be modularly congruence.

[00:21:47 - 00:21:53] Congruent modulo n, and this word modulo,

[00:21:53 - 00:21:57] which, you know, you inflect this word depending on what you're doing,

[00:21:57 - 00:22:00] like modular, if this is an additive, or modulus, if it's an element,

[00:22:00 - 00:22:06] the word modulo is the Latin word that means from the perspective of it.

[00:22:06 - 00:22:07] I love these lines at some point.

[00:22:07 - 00:22:09] There's a reaction of Latin with this correctly, but like,

[00:22:09 - 00:22:12] it means something along the lines that I think folks thought about

[00:22:12 - 00:22:17] from the perspective of it.

[00:22:17 - 00:22:20] And it's a phrase that shows up a lot in math and computer science,

[00:22:20 - 00:22:25] and even a couple of other fields, when you want to look at something

[00:22:25 - 00:22:29] and say that distinct things actually are more or less the same.

[00:22:29 - 00:22:33] But two things that are normally different are equivalence.

[00:22:33 - 00:22:34] Equivalence according to what?

[00:22:34 - 00:22:36] Equivalence according to whatever.

[00:22:36 - 00:22:39] This is the thing that your equivalence is according to.

[00:22:39 - 00:22:42] Equivalence according to six, for example,

[00:22:42 - 00:22:45] means they should have a safe neighbor and need to buy buy buy six.

[00:22:45 - 00:22:48] Equivalence according to two means they should both be even

[00:22:48 - 00:22:50] or they should both be odd.

[00:22:50 - 00:22:54] If two numbers are even, they're a equivalence modulo two.

[00:22:54 - 00:22:57] If two numbers are both, ah, they're 0.1 modulo 2.

[00:22:57 - 00:22:59] If two numbers are both, one, one, or maybe your sixth,

[00:22:59 - 00:23:03] and they're both equivalent, congruent modulo 6.

[00:23:03 - 00:23:14] So we say, two integers, and I need to be clear about the fact

[00:23:14 - 00:23:18] that one mod to right here is, like, the same text is very rigid.

[00:23:18 - 00:23:20] I think throughout the semester, I've made it good.

[00:23:20 - 00:23:23] I've done a pretty good job of, like, making it clear

[00:23:23 - 00:23:24] that the same text is important.

[00:23:24 - 00:23:26] The way that things are phrased is important.

[00:23:26 - 00:23:30] And the way that we use the same text is really important.

[00:23:30 - 00:23:34] And if you manipulate the syntax in a way that doesn't make sense

[00:23:34 - 00:23:38] by saying this, for example, even though it's very similar

[00:23:38 - 00:23:40] in a public figure out what we mean,

[00:23:40 - 00:23:41] you didn't say the right thing.

[00:23:41 - 00:23:44] So this technique is nonsense.

[00:23:44 - 00:23:47] And I've been so, like, such a hard-ass about being like,

[00:23:47 - 00:23:49] this, first of all, because I'm trying to teach you

[00:23:49 - 00:23:50] different schools, and good habits.

[00:23:50 - 00:23:53] But second of all, because if you walk into a situation

[00:23:53 - 00:23:57] like this definition, and you don't have in your mind

[00:23:57 - 00:23:59] that the way that I've written things down

[00:23:59 - 00:24:02] is important in addition to the ideas of the motivation,

[00:24:02 - 00:24:04] then you will take this definition

[00:24:04 - 00:24:05] and you will do what I've seen in a million students

[00:24:05 - 00:24:09] before, which is abuse the syntax and then say things

[00:24:09 - 00:24:12] that are not limited to say, and also for false,

[00:24:12 - 00:24:15] and then also potentially if they're not false or meaningless.

[00:24:15 - 00:24:17] And all three of those things are bad, right?

[00:24:17 - 00:24:21] Part of this course is weird and purposeful communication,

[00:24:21 - 00:24:23] which is what you do in the red group,

[00:24:23 - 00:24:24] and the other things are just like, okay,

[00:24:24 - 00:24:25] you should not say false things,

[00:24:25 - 00:24:27] and you should say, you need no things, right?

[00:24:27 - 00:24:30] So like, don't speak nonsense and don't say, don't mind, right?

[00:24:30 - 00:24:32] So give it some other integers.

[00:24:32 - 00:24:41] We say that x is ruined to y, modulo,

[00:24:41 - 00:24:43] and I guess I need another number.

[00:24:43 - 00:24:47] So give it x to my integers, just to erase this.

[00:24:47 - 00:24:51] Let's have a read of which the sentence.

[00:24:51 - 00:24:56] And given a positive natural for n,

[00:24:56 - 00:25:05] we say it's come through it to y, modulo n.

[00:25:05 - 00:25:09] Then, this is what I'm defining right now.

[00:25:09 - 00:25:14] This entire thing, if they don't need it by definition,

[00:25:14 - 00:25:14] the following.

[00:25:14 - 00:25:18] I have syntax for this, but first I want to pause and ask,

[00:25:18 - 00:25:25] what kind of thing is this that I put in the box?

[00:25:25 - 00:25:26] It's a sentence.

[00:25:26 - 00:25:29] Is this a number?

[00:25:29 - 00:25:30] No.

[00:25:30 - 00:25:31] So the thing that I'm about to define,

[00:25:31 - 00:25:33] if you manipulate it like a number,

[00:25:33 - 00:25:36] if you don't treat it like a sentence, that's a problem.

[00:25:36 - 00:25:38] If you don't say the full sentence,

[00:25:38 - 00:25:42] If you say x is complete to y, and you leave that part out,

[00:25:42 - 00:25:44] you're not applying the definition

[00:25:44 - 00:25:46] that I've given you're saying something else.

[00:25:46 - 00:25:48] So all the parts of this are meaningful.

[00:25:48 - 00:25:55] And I say x for this, or this, or this, and this.

[00:25:55 - 00:26:04] So x is congruent to y mod n.

[00:26:04 - 00:26:08] This is one complete indivisible syntactic human.

[00:26:08 - 00:26:12] All of this forms a complete sentence.

[00:26:12 - 00:26:18] If I say x is the root of y, actually, that's not what that says.

[00:26:18 - 00:26:20] This says x is logically equivalent to y

[00:26:20 - 00:26:23] using the old notation for logical equivalence.

[00:26:23 - 00:26:26] So if I leave this part out, I'm not talking

[00:26:26 - 00:26:27] about mod 13 roots.

[00:26:27 - 00:26:30] I'm going to be super fucking looking at this.

[00:26:30 - 00:26:32] In other mistakes, niggas will say, oh, this actually

[00:26:32 - 00:26:34] is the same as, this is a slightly less

[00:26:34 - 00:26:36] greater state than it's almost a.

[00:26:36 - 00:26:40] This is x to root of y mod n.

[00:26:40 - 00:26:42] You left off the parentheses.

[00:26:42 - 00:26:44] I better see these parentheses here.

[00:26:44 - 00:26:46] In other contexts, in other books,

[00:26:46 - 00:26:47] you might see the parentheses in a different place,

[00:26:47 - 00:26:49] or you might see the parentheses totally dropped.

[00:26:49 - 00:26:52] This semester, in my class, for the one time in your life,

[00:26:52 - 00:26:53] you'll probably ever do this topic,

[00:26:53 - 00:26:55] unless you decide to be another parish or something,

[00:26:55 - 00:26:57] or a talk to it.

[00:26:57 - 00:26:59] I will be very thinking of the fact

[00:26:59 - 00:27:02] that the parentheses have to be here here.

[00:27:02 - 00:27:06] So this is that, slightly less of a moral sense,

[00:27:06 - 00:27:10] but civil sense looks like a legal search, something.

[00:27:10 - 00:27:11] And if our main was such a big deal,

[00:27:11 - 00:27:14] obviously, because if you interpret this as,

[00:27:14 - 00:27:17] X is who grew up to.

[00:27:17 - 00:27:21] Why, I don't know what that means,

[00:27:21 - 00:27:22] and also I don't know what that means,

[00:27:22 - 00:27:24] and also your syntax is wrong,

[00:27:24 - 00:27:26] so what are you talking about?

[00:27:26 - 00:27:31] What is mod in this definition?

[00:27:31 - 00:27:33] Is it an operation?

[00:27:33 - 00:27:35] Do I know how to compute, for example,

[00:27:35 - 00:27:39] to mod 1 based on this definition?

[00:27:39 - 00:27:41] Based on any other definition I'm giving this semester.

[00:27:41 - 00:27:43] Now, if you don't want to do this,

[00:27:43 - 00:27:46] you have a different interpretation of what this means

[00:27:46 - 00:27:47] than the one we're giving.

[00:27:47 - 00:27:49] You're importing that into this class,

[00:27:49 - 00:27:50] And you're probably going to say something that's

[00:27:50 - 00:27:51] in school with your groups.

[00:27:51 - 00:27:54] Because I have defined an operation

[00:27:54 - 00:27:58] that given two numbers return to the number called the month,

[00:27:58 - 00:28:00] we put it but it happens.

[00:28:00 - 00:28:02] And it probably won't be all that useful for the class, right?

[00:28:02 - 00:28:07] If you want something, they might need to find it.

[00:28:07 - 00:28:12] But this is how I say that s is the root of y by n.

[00:28:12 - 00:28:15] And I say this, if it will be if by definition,

[00:28:15 - 00:28:18] n divided by s minus 1, that's the definition.

[00:28:18 - 00:28:21] So s is the root of y by n, if it will be if,

[00:28:21 - 00:28:25] Their difference is a multiple event,

[00:28:25 - 00:28:26] which means they're essentially the same

[00:28:26 - 00:28:27] from the perspective of them.

[00:28:27 - 00:28:28] Does that make sense?

[00:28:28 - 00:28:29] Everything I said so far, any questions?

[00:28:29 - 00:28:30] Yeah.

[00:28:30 - 00:28:32] Is there a reason a lot to work with ones

[00:28:32 - 00:28:33] is like the same symbol or the same?

[00:28:33 - 00:28:35] No, there's a good reason actually.

[00:28:35 - 00:28:36] And it's kind of frustrating, but it's also like

[00:28:36 - 00:28:38] an important matter of like this happens

[00:28:38 - 00:28:39] all over mathematics.

[00:28:39 - 00:28:41] This symbol is a very common symbol

[00:28:41 - 00:28:45] to express that two things are not actually necessarily equal,

[00:28:45 - 00:28:47] but they're essentially equal.

[00:28:47 - 00:28:48] They're essentially the same.

[00:28:48 - 00:28:52] And when we use that symbol between two propositions,

[00:28:52 - 00:28:55] When I said that P was logically equivalent to Q,

[00:28:55 - 00:28:59] I didn't mean that syntactic P is the same sentence of Q,

[00:28:59 - 00:29:00] that when you write them down,

[00:29:00 - 00:29:02] the symbols were all in the same places.

[00:29:02 - 00:29:04] What I meant was, they're the same from the perspective

[00:29:04 - 00:29:06] of truth values.

[00:29:06 - 00:29:08] They have the same truth value.

[00:29:08 - 00:29:11] Here, when I say this, I'm saying X and Y are the same

[00:29:11 - 00:29:15] from the perspective of division by F, right?

[00:29:15 - 00:29:17] So they have the same remainder,

[00:29:17 - 00:29:18] along to low F, right?

[00:29:18 - 00:29:20] Single remainder, active division by F.

[00:29:20 - 00:29:22] And in a bunch of different places in mathematics,

[00:29:22 - 00:29:26] And you want to talk about equivalence, which

[00:29:26 - 00:29:29] has all the same properties that a quality has, except it

[00:29:29 - 00:29:32] doesn't say they're really the same.

[00:29:32 - 00:29:36] It says, if two things are equal, then the two things

[00:29:36 - 00:29:37] are equal if you look around.

[00:29:37 - 00:29:39] And if three things are equal, then you get transitivity.

[00:29:39 - 00:29:41] And everything is equal to itself.

[00:29:41 - 00:29:43] And all of the properties that are quality mass.

[00:29:43 - 00:29:45] If you want something with all those properties,

[00:29:45 - 00:29:46] this is the status that we'll use.

[00:29:46 - 00:29:49] Things distinct from that symbol, because that symbol

[00:29:49 - 00:29:53] says something very specific, not only do P and Q

[00:29:53 - 00:29:57] have all the characters as you want, but also they're really the same objects.

[00:29:57 - 00:30:02] It has all the same properties, but it's distinct enough from that symbol that you won't get

[00:30:02 - 00:30:03] them confused.

[00:30:03 - 00:30:07] Well, and it shows up another context that I've ever been saying.

[00:30:07 - 00:30:08] There's another symbol.

[00:30:08 - 00:30:11] There's no reason for me to talk about this right now, but we'll talk about it eventually.

[00:30:11 - 00:30:15] There's another symbol that looks like an equality with tilde over it.

[00:30:15 - 00:30:20] That is not the same as this symbol, which is three balls, three balls on the box.

[00:30:20 - 00:30:30] This typically denotes the equivalence, and I'll just give this to you because I know you've got a package list of equivalence, and this typically contains the smell and the smell of it.

[00:30:30 - 00:30:35] We're going to talk about as a equivalence in like two or three classes. That's coming up very soon.

[00:30:35 - 00:30:38] Okay? But they are different symbols that mean different things.

[00:30:38 - 00:30:42] We have a lot of it in clear. Does any of those seem confusing? Can I answer your question?

[00:30:42 - 00:30:43] Yes.

[00:30:43 - 00:30:44] Anything else?

[00:30:44 - 00:30:51] So, modular equivalence has a bunch of properties. Some of the properties that modular equivalence has.

[00:30:51 - 00:30:56] Sure, just come up here.

[00:30:56 - 00:30:58] And if you care to solve part of these groups,

[00:30:58 - 00:30:59] are both of you developing some intuition

[00:30:59 - 00:31:01] about how part of these groups would be?

[00:31:01 - 00:31:02] And both of you should be able to see

[00:31:02 - 00:31:04] that both of these groups are not very hard.

[00:31:04 - 00:31:05] Those are, so either not hard if you want to take

[00:31:05 - 00:31:07] any exercises, maybe do them after the exam.

[00:31:07 - 00:31:08] But even if you do them before the exam,

[00:31:08 - 00:31:11] those could be good practice, all the definitions

[00:31:11 - 00:31:12] that I've given you.

[00:31:12 - 00:31:18] Theorem, modular congruence is an equivalent relation.

[00:31:18 - 00:31:21] So modular congruence has the three properties

[00:31:21 - 00:31:22] that equivalence has.

[00:31:22 - 00:31:29] for all x in the integers, x is the n, actually I should say,

[00:31:29 - 00:31:31] right, n plus n.

[00:31:31 - 00:31:33] Remember, this is for any moment in the n.

[00:31:33 - 00:31:44] x is from root to x mod n, s in mod in the n.

[00:31:44 - 00:31:56] If x is from root to y mod n, then y is from root to x mod n.

[00:31:56 - 00:31:57] That's our facility.

[00:31:57 - 00:31:58] This is similar.

[00:31:58 - 00:32:05] The last property is transitivity for all x, y, z,

[00:32:05 - 00:32:07] and integers.

[00:32:07 - 00:32:16] If x is equal to y, mod n, and y is equal to z, mod n.

[00:32:16 - 00:32:17] And I'm not doing a very good job of this,

[00:32:17 - 00:32:19] but especially if you're typing things up,

[00:32:19 - 00:32:21] typically, you can be left with a little bit of space

[00:32:21 - 00:32:24] between the mod tag.

[00:32:24 - 00:32:27] Because this is like a tag on the equals, between this tag

[00:32:27 - 00:32:30] and the number of the solve, do that right here.

[00:32:30 - 00:32:32] If you want to know how to do that in the mod,

[00:32:32 - 00:32:33] that's under lots of which are the nicest.

[00:32:33 - 00:32:35] I'm talking, I know a bunch of not lots of it.

[00:32:35 - 00:32:40] If both features are true, then S is the multiplicity

[00:32:40 - 00:32:43] model.

[00:32:43 - 00:32:46] And with these three properties, we

[00:32:46 - 00:32:51] know that if X and Y are essentially interchangeable,

[00:32:51 - 00:32:53] because you can always split these

[00:32:53 - 00:32:54] and grip this around, or you can grip this itself,

[00:32:54 - 00:32:56] and transitive takes you from one thing

[00:32:56 - 00:32:59] to another thing.

[00:32:59 - 00:33:07] Additionally, you can take congruences,

[00:33:07 - 00:33:09] and you can act on them algebraically.

[00:33:09 - 00:33:12] I can take the congruence and add the same thing

[00:33:12 - 00:33:15] to both sides and maintain congruence.

[00:33:15 - 00:33:18] And in fact, I can add not just the same actual word,

[00:33:18 - 00:33:19] but the same integer to both sides,

[00:33:19 - 00:33:22] which means I can also subtract from both sides

[00:33:22 - 00:33:24] of the congruence and maintain congruence.

[00:33:24 - 00:33:29] So for all n, we can have methods,

[00:33:29 - 00:33:36] and all the integers, and for all,

[00:33:36 - 00:33:39] if x is from root to y,

[00:33:39 - 00:33:44] not n, then x plus z is from root.

[00:33:44 - 00:33:56] So if you have any sort of intuition, or if you've been following along my intuition

[00:33:56 - 00:34:01] about moving along the number line, any multiple, six or multiple, two or multiple, and whatever

[00:34:01 - 00:34:03] it is, then this should make sense.

[00:34:03 - 00:34:04] Right?

[00:34:04 - 00:34:08] Because I'm basically just looking at the remains of x and y.

[00:34:08 - 00:34:11] And I'm adding the same number to the two remains.

[00:34:11 - 00:34:16] Anything that is divisible by n takes the loved ones and the quotients.

[00:34:16 - 00:34:18] And anything that remains is actually

[00:34:18 - 00:34:22] just going to be the same name on both sides,

[00:34:22 - 00:34:24] because I haven't seen enough on both sides.

[00:34:24 - 00:34:25] Does that make sense?

[00:34:25 - 00:34:28] Any questions on this?

[00:34:28 - 00:34:32] Based on this, if I had congruent that looked like x plus z,

[00:34:32 - 00:34:37] this congruent to y plus z mod m, do

[00:34:37 - 00:34:49] I know that x is the integral to y mod m?

[00:34:49 - 00:34:50] I do.

[00:34:50 - 00:34:51] I do.

[00:34:51 - 00:34:51] Why?

[00:34:51 - 00:34:55] Because for any integral, z.

[00:34:55 - 00:34:58] If z is an integer, I can take this from the groans,

[00:34:58 - 00:35:01] and I can add a negative z to both sides.

[00:35:01 - 00:35:05] And these are integers, so z plus negative z is zero.

[00:35:05 - 00:35:08] And x to zero is less.

[00:35:08 - 00:35:11] So question, what does zero represent

[00:35:11 - 00:35:18] in terms of mod of the groans?

[00:35:18 - 00:35:20] Zero represents, and zero is the additive identity,

[00:35:20 - 00:35:23] zero represents the multiples of n.

[00:35:23 - 00:35:27] Any multiple event is going to be the groans of zero,

[00:35:27 - 00:35:30] mod n, right?

[00:35:30 - 00:35:43] I'm not a big number of peers, but I've got some really nice intuition developed, like

[00:35:43 - 00:35:47] from necessity, from having past my own computer classes and undergrad, about modulating

[00:35:47 - 00:35:48] groups.

[00:35:48 - 00:35:49] And it's been really helpful to me as a computer scientist.

[00:35:49 - 00:35:50] It's difficult for me to develop an intuition for you, but I'm going to give you throughout

[00:35:50 - 00:35:51] the next few weeks some exercises that will hopefully help with that.

[00:35:51 - 00:35:54] But a lot of it is going to be trying to answer questions like this abstract, weird,

[00:35:54 - 00:35:55] like fluffy questions like, what does this represent?

[00:35:55 - 00:35:56] What does this represent?

[00:35:56 - 00:35:59] So a lot of it is going to be trying to answer questions

[00:35:59 - 00:36:01] like this abstract, weird, like fluffy questions like,

[00:36:01 - 00:36:03] what does this represent?

[00:36:03 - 00:36:05] What does one represent from the perspective

[00:36:05 - 00:36:07] of congruence model of N?

[00:36:07 - 00:36:09] And trying to really dig into the consequences

[00:36:09 - 00:36:10] of those questions, developing that intuition

[00:36:10 - 00:36:12] for me at least is the math department.

[00:36:12 - 00:36:16] So that's no set on this except I want to make

[00:36:16 - 00:36:21] one more points.

[00:36:21 - 00:36:31] Here's another Twitter, all N and math numbers,

[00:36:31 - 00:36:38] All x, y, and integers, but all z, and integers,

[00:36:38 - 00:36:48] if x times z is in root of y times z, mod n.

[00:36:48 - 00:36:56] Then do I know that x is in root of y, mod n.

[00:36:56 - 00:36:58] That's the question I want to ask you.

[00:36:58 - 00:37:00] Before I ask you that question, think about that.

[00:37:00 - 00:37:02] We'll come back to it.

[00:37:02 - 00:37:04] Why don't you know, if x is in root of y,

[00:37:04 - 00:37:12] is x times z congruent to y times z, yes or no?

[00:37:12 - 00:37:15] So you should have one out.

[00:37:15 - 00:37:16] What if z is zero?

[00:37:16 - 00:37:18] This is good to think about edge pieces, right?

[00:37:18 - 00:37:20] What if z is zero?

[00:37:20 - 00:37:23] But then this last equivalent says zeroes

[00:37:23 - 00:37:25] to zero to zero to y on the edge of it.

[00:37:25 - 00:37:28] Yeah, zeroes is more acidic, right?

[00:37:28 - 00:37:30] And in fact, I can just see.

[00:37:30 - 00:37:32] And in order to zero minus zeroes, zero minus zero

[00:37:32 - 00:37:34] to zero, everyone about zero, zeroes

[00:37:34 - 00:37:37] and universal dividends, when we're there to get it.

[00:37:37 - 00:37:38] It's important, right?

[00:37:38 - 00:37:42] So even C zero, is this true?

[00:37:42 - 00:37:43] I think so, right?

[00:37:43 - 00:37:46] Very similar to I can take an equation

[00:37:46 - 00:37:49] and I can add the same thing to both sides of an equation.

[00:37:49 - 00:37:52] I do the same thing with a modular congruence.

[00:37:52 - 00:37:54] And the same thing with multiplication,

[00:37:54 - 00:37:56] if I have two things that are congruent,

[00:37:56 - 00:37:57] I can multiply the same thing on both sides

[00:37:57 - 00:37:59] and maintain congruence.

[00:37:59 - 00:38:02] But this is the other way.

[00:38:02 - 00:38:07] So if x times z is congruent to y times z mod n,

[00:38:07 - 00:38:17] of m, does that mean that x is congruent to y?

[00:38:17 - 00:38:21] Okay, so let's say z is not zero, sure.

[00:38:21 - 00:38:22] I'll give that to you.

[00:38:22 - 00:38:23] Instead of saying not equal to zero,

[00:38:23 - 00:38:31] I'll say not congruent to zero, okay?

[00:38:31 - 00:38:51] z is not congruent to zero, this is not true.

[00:38:51 - 00:38:56] Even if z is not zero, and this is part of my emphasis

[00:38:56 - 00:39:00] of we do not know how to divide integers.

[00:39:00 - 00:39:02] We don't know how to divide

[00:39:02 - 00:39:06] on both sides of a modular group.

[00:39:06 - 00:39:10] You actually don't have a multiplicative cancelativity.

[00:39:10 - 00:39:14] For this operation, this is not regular multiplication.

[00:39:14 - 00:39:18] This is modular multiplication. This would lead into a very long discussion.

[00:39:18 - 00:39:22] It's very interesting and beautiful about modular algebra. But you can't have discussions

[00:39:22 - 00:39:26] if you don't have enough time. But if you want to talk more about this, especially if you're

[00:39:26 - 00:39:30] not actually going to talk to me about this, if you're taking through your internet or something,

[00:39:30 - 00:39:32] And from that point here for the discrete math people,

[00:39:32 - 00:39:37] which isn't everyone, is we lose one of the properties

[00:39:37 - 00:39:39] that the integers have, once we start looking

[00:39:39 - 00:39:40] at marginal arguments, this is not

[00:39:40 - 00:39:42] like a quality between entities.

[00:39:42 - 00:39:42] OK?

[00:39:42 - 00:39:44] And you should think about it a lot.

[00:39:44 - 00:39:45] It's actually a game set.

[00:39:45 - 00:39:48] It ties things you are a secret talk to.

[00:39:48 - 00:39:53] So with all of this set, we are basically

[00:39:53 - 00:39:55] done talking about number theory.

[00:39:55 - 00:39:55] I'm going to pause.

[00:39:55 - 00:39:58] I have come a minute and I want to make a next topic.

[00:39:58 - 00:40:00] But I'll just pause and ask other questions.

[00:40:00 - 00:40:12] So for that, so for the congruent symbol, there is more symbol, or we'll use this one.

[00:40:12 - 00:40:14] Yeah, the three equals?

[00:40:14 - 00:40:21] Yeah, so even with like any other congruent with respect to any other property, well they always have those three, like...

[00:40:21 - 00:40:23] Not always, but this is a very common symbol.

[00:40:23 - 00:40:30] It's literally just like the cultural thing about mathematicians, you sometimes use the same symbols in different contexts when they can sexually mean the same thing.

[00:40:30 - 00:40:33] So like, number of theorists use this for much of the congruence,

[00:40:33 - 00:40:35] but we just saw that logicians use this

[00:40:35 - 00:40:37] for propositional logical equivalence,

[00:40:37 - 00:40:38] a different notion of equivalence.

[00:40:38 - 00:40:40] And it shows up in different places.

[00:40:40 - 00:40:43] Technically, anytime you have an equivalence relation,

[00:40:43 - 00:40:46] it's appropriate to use that simple equivalence relation.

[00:40:46 - 00:40:48] I never formally defined when equivalence relation is,

[00:40:48 - 00:40:52] but the fundamental thing is that it's a relationship

[00:40:52 - 00:40:54] between objects with three properties

[00:40:54 - 00:40:56] of a silly symmetry density.

[00:40:56 - 00:40:58] In sort of the view of absorb that,

[00:40:58 - 00:41:01] And if this is your notion of equivalence,

[00:41:01 - 00:41:03] then anything that has these properties,

[00:41:03 - 00:41:04] you can use this symbol.

[00:41:04 - 00:41:08] OK, so you may see this symbol used with.

[00:41:08 - 00:41:10] OK, so it has that symbol, and it also

[00:41:10 - 00:41:12] probably has those three properties.

[00:41:12 - 00:41:15] Most of the time, unless someone is just using the symbol

[00:41:15 - 00:41:18] in a really non-standard way, which also has.

[00:41:18 - 00:41:20] The mathematics has a lot of consistency,

[00:41:20 - 00:41:22] and it's also a lot of inconsistencies,

[00:41:22 - 00:41:23] because there's a lot of people like you now

[00:41:23 - 00:41:27] for a long time, so it's like it's a mess.

[00:41:27 - 00:41:35] the other questions? Yeah. Um, is there a difference between, you know, zero, um, non-module of

[00:41:35 - 00:41:43] 0.0? Zero, not zero. Yeah, and z not equal zero. Well, yeah, yeah, there's, there's a very

[00:41:43 - 00:41:48] gap. So, so a good question. I mean, all these questions have been good. I don't know, like,

[00:41:48 - 00:41:52] whenever I go and ask the question, it's almost always, it's been a good question. I don't think

[00:41:52 - 00:41:56] I can remember that question, but to talk about that for just a second,

[00:41:56 - 00:42:10] If I know that two times something is congruent to four times something, and I'm looking at this mod 6,

[00:42:10 - 00:42:14] and I'm thinking, oh, is this going to imply that two is congruent to four?

[00:42:14 - 00:42:18] Mod 6.

[00:42:18 - 00:42:23] But the something that I'm multiplying by happens to be zero,

[00:42:23 - 00:42:26] then, of course, no, not necessarily these two can be congruent to four.

[00:42:26 - 00:42:29] And this is what we saw with multiplicative cancelativity.

[00:42:29 - 00:42:31] I have to make an exception about multiplying by 0.

[00:42:31 - 00:42:33] It's multiplying by 0 and 9.

[00:42:33 - 00:42:36] It gets rid of this information, so I can't just

[00:42:36 - 00:42:38] take it away and recover the 2 and the 4.

[00:42:38 - 00:42:38] That can happen.

[00:42:38 - 00:42:46] But what if I multiply by 6 and by 12?

[00:42:46 - 00:42:52] Well, 2 times 6 is a multiple of 6.

[00:42:52 - 00:42:53] So this is 0.

[00:42:53 - 00:42:56] That can move into 0, month 6.

[00:42:56 - 00:42:59] 4 times 12 tells a multiple of 6, 12 times 2 times 6.

[00:42:59 - 00:43:02] So this is all can move into what?

[00:43:02 - 00:43:04] It's a 0, month 6.

[00:43:04 - 00:43:07] So actually, even though these are not 0, the integer,

[00:43:07 - 00:43:10] they say the same thing as if it had been 0.

[00:43:10 - 00:43:14] What this actually says is 0 to be 0 into 0, mod 6, 0,

[00:43:14 - 00:43:17] but not just 0, and the multiple of 6,

[00:43:17 - 00:43:20] acts like a multiplicative annihilator, modulo 6.

[00:43:20 - 00:43:22] It acts like 0.

[00:43:22 - 00:43:25] That's what I meant over there by 0

[00:43:25 - 00:43:28] is congruent to all of the things that are multiples of n.

[00:43:28 - 00:43:31] 0 acts like a representative for all

[00:43:31 - 00:43:33] of the multiples of n, right?

[00:43:33 - 00:43:34] but vice versa.

[00:43:34 - 00:43:37] Whenever you have a multiple event, it acts like zero

[00:43:37 - 00:43:38] because they're equivalent.

[00:43:38 - 00:43:39] So they have all the same properties

[00:43:39 - 00:43:41] from the perspective of what there is ability by sex,

[00:43:41 - 00:43:46] from the perspective of modular congruent onto a sex, right?

[00:43:46 - 00:43:47] And so even though that's not zero,

[00:43:47 - 00:43:49] even though that's not zero,

[00:43:49 - 00:43:51] I still can't say it was equivalent to four,

[00:43:51 - 00:43:52] it was congruent to four on six.

[00:43:52 - 00:43:53] No, right?

[00:43:53 - 00:43:55] But this is true.

[00:43:55 - 00:43:58] So you only can't say.

[00:43:58 - 00:44:01] Now, think about why this happens sometimes,

[00:44:01 - 00:44:03] even when that's not congruent to zero,

[00:44:03 - 00:44:04] because that's what I'm saying over there.

[00:44:04 - 00:44:06] Even when you guarantee that this is not

[00:44:06 - 00:44:09] congruent to zero, months six,

[00:44:09 - 00:44:12] sometimes cancel to be goes.

[00:44:12 - 00:44:14] It's interesting to think about what, okay.

[00:44:14 - 00:44:19] Any other questions?

[00:44:19 - 00:44:21] Then I really only got five minutes now.

[00:44:21 - 00:44:23] So I'm gonna very likely go to make the next topic,

[00:44:23 - 00:44:29] which is there is, so if you wanted to go down,

[00:44:30 - 00:44:31] I'm not gonna call it a radical,

[00:44:31 - 00:44:33] because it's very nice and interesting enough

[00:44:33 - 00:44:35] that log over here that you go on.

[00:44:35 - 00:44:37] But if you wanted to learn a little bit more

[00:44:37 - 00:44:39] about modular algebra,

[00:44:39 - 00:44:42] like all the things that I'm heating at that are like fancy

[00:44:42 - 00:44:44] and that common consequences of thinking deeply

[00:44:44 - 00:44:48] about this definition of modular agreements.

[00:44:48 - 00:44:49] An important thing that'll come up,

[00:44:49 - 00:44:51] and this has come up, I'm sure, for a lot of math majors

[00:44:51 - 00:44:54] in class work, just learning right now about the theory,

[00:44:54 - 00:44:58] that when I look at this set of numbers,

[00:44:58 - 00:45:01] let's look at what I'm doing algebra,

[00:45:01 - 00:45:03] I'm looking at congruence into this ability,

[00:45:03 - 00:45:07] the disability, modulo m, so I'm looking at modulo m,

[00:45:07 - 00:45:09] and it's also natural number.

[00:45:09 - 00:45:15] I can think about these numbers, 0, 1, 2, 1, 2, 1, and like some,

[00:45:15 - 00:45:22] as all being representative of different kinds of remains.

[00:45:22 - 00:45:24] After you're divided by n.

[00:45:24 - 00:45:26] So for example, if I'm divided by 6,

[00:45:26 - 00:45:29] what are all my possible regenders after division by 6?

[00:45:29 - 00:45:32] Well, you do remain your 0 if you're an local 6.

[00:45:32 - 00:45:37] Or you do remain 1, or 2, or 3, or 4, or 5.

[00:45:37 - 00:45:40] Can you do your major 6?

[00:45:40 - 00:45:42] I mean, conceptually sort of, yeah,

[00:45:42 - 00:45:44] but you wouldn't really call that a remainder

[00:45:44 - 00:45:46] because you can bump that into a quotient, right?

[00:45:46 - 00:45:48] So like six, is it really a remainder?

[00:45:48 - 00:45:50] Six is the same as zero.

[00:45:50 - 00:45:52] What about a major seven?

[00:45:52 - 00:45:54] Seven is the same as one.

[00:45:54 - 00:45:55] Eight is the same as two.

[00:45:55 - 00:45:57] Nine is the same as three.

[00:45:57 - 00:45:58] 10 is the same as four.

[00:45:58 - 00:46:00] What about a negative one?

[00:46:00 - 00:46:01] Can you have a remainder of a negative one

[00:46:01 - 00:46:05] after your vision by end?

[00:46:05 - 00:46:07] No, but sort of, you can, right?

[00:46:07 - 00:46:09] Because I can take that same number line

[00:46:09 - 00:46:12] and I can go back to my number line, right?

[00:46:12 - 00:46:16] And I was taking steps of size 6 of your negative 6.

[00:46:16 - 00:46:19] Instead of going in this direction, I didn't go in this direction.

[00:46:19 - 00:46:22] And I can say, OK, where is negative 1?

[00:46:22 - 00:46:23] Why?

[00:46:23 - 00:46:27] So there's negative 1, negative 2, negative 3, negative 4, negative 5.

[00:46:27 - 00:46:30] And here's 1, 2, 3, 4, 5.

[00:46:30 - 00:46:36] Well, negative 1 lies in the same place that 5 does.

[00:46:36 - 00:46:41] And in fact, you can just check that 5 is congruent to negative 1.

[00:46:41 - 00:46:49] Mod 6. Check the definition. Here's what's 5 minus 1, 6. And for the same reason, negative

[00:46:49 - 00:46:54] 1, it's going to be 5. Here's negative 1 minus 5 minus negative 6. Here's a book, multiples

[00:46:54 - 00:47:02] of 6, right? And so, what I'm getting at here is, you can think of, like, defining operations

[00:47:02 - 00:47:05] like being actually really explicit in a way that we're not going to be a semester.

[00:47:05 - 00:47:11] You can think about defining operations on this set. Operations like addition and multiplication

[00:47:11 - 00:47:14] modular versions of those operations that

[00:47:14 - 00:47:16] can work from the integers.

[00:47:16 - 00:47:18] And you can start asking the same questions

[00:47:18 - 00:47:20] that we ask about natural numbers and about integers,

[00:47:20 - 00:47:22] but about this set.

[00:47:22 - 00:47:27] For example, I might say that 1 plus 1 is 2.

[00:47:27 - 00:47:30] And I might say that 2 plus 1 is 3.

[00:47:30 - 00:47:34] But if I'm looking up all of this mod 6,

[00:47:34 - 00:47:38] then 1 plus 5 gives me 0, right?

[00:47:38 - 00:47:42] And 2 plus 4 gives me 0.

[00:47:42 - 00:47:45] and 2 plus 5, which is 1.

[00:47:45 - 00:47:47] And you can start asking questions about, OK,

[00:47:47 - 00:47:48] do I have all the same problems?

[00:47:48 - 00:47:51] Do I always have, for example, associativity and addition?

[00:47:51 - 00:47:52] Turns out you do.

[00:47:52 - 00:47:53] You have associativity.

[00:47:53 - 00:47:54] But can you do it?

[00:47:54 - 00:47:55] Yes, you do.

[00:47:55 - 00:47:58] Do you have associativity and could you

[00:47:58 - 00:47:59] do multiplication?

[00:47:59 - 00:47:59] Yes, you do.

[00:47:59 - 00:48:01] The one time is 2, is mean 2.

[00:48:01 - 00:48:03] 2 times 2 is mean 4.

[00:48:03 - 00:48:09] Four times 4 is 16, which is negative 2, which is 4.

[00:48:09 - 00:48:11] Four times 4 is 4, a lot of sets.

[00:48:11 - 00:48:13] And you can see that you preserve some properties,

[00:48:13 - 00:48:15] but you don't preserve other properties.

[00:48:15 - 00:48:17] Do you still have this to be significantly

[00:48:17 - 00:48:22] a multiplication of a addition?

[00:48:22 - 00:48:24] You're just so easily influenced.

[00:48:24 - 00:48:26] I am using this a little bit by the way that I place things.

[00:48:26 - 00:48:28] Yes, you still have the strictivity

[00:48:28 - 00:48:29] of multiplication of a addition.

[00:48:29 - 00:48:31] Think about it and convince yourself,

[00:48:31 - 00:48:32] you still have this to be divvied.

[00:48:32 - 00:48:35] But do you still have added in inverses?

[00:48:35 - 00:48:38] I was wondering the important things about inverses.

[00:48:38 - 00:48:40] Do I have added in inverses?

[00:48:40 - 00:48:41] Here we go.

[00:48:41 - 00:48:43] That's how you do it.

[00:48:43 - 00:48:46] One plus five is zero.

[00:48:46 - 00:48:49] Two plus four is zero.

[00:48:49 - 00:48:50] Three plus three is zero.

[00:48:50 - 00:48:53] Zero is like additive identity.

[00:48:53 - 00:48:56] Zero plus zero is zero.

[00:48:56 - 00:48:58] There are all the inverses.

[00:48:58 - 00:48:59] Two is negative four.

[00:48:59 - 00:49:01] Four is negative two.

[00:49:01 - 00:49:03] The way that you define what the negative means,

[00:49:03 - 00:49:04] additive inverses, right?

[00:49:04 - 00:49:06] It's also the same in if you.

[00:49:06 - 00:49:08] Three is negative three.

[00:49:08 - 00:49:09] Zero is negative zero.

[00:49:09 - 00:49:11] You have additive inverses always.

[00:49:11 - 00:49:14] Do you have a little bit of emphasis?

[00:49:14 - 00:49:17] Well, in the integers, you see, do you

[00:49:17 - 00:49:20] have a little bit of emphasis?

[00:49:20 - 00:49:22] Only for two elements.

[00:49:22 - 00:49:24] What are the two integers that have

[00:49:24 - 00:49:26] a little bit of emphasis?

[00:49:26 - 00:49:28] 1 and negative 1, right?

[00:49:28 - 00:49:30] Because 1 times 1 is 1, negative 1 times negative 1

[00:49:30 - 00:49:32] is 1.

[00:49:32 - 00:49:34] There are no other integers with a little bit of emphasis.

[00:49:34 - 00:49:40] But in here, I might have non-zero numbers

[00:49:40 - 00:49:42] with a little bit of emphasis.

[00:49:42 - 00:49:44] In fact, you can find one in here.

[00:49:44 - 00:49:47] There's a number in here that has a whole point of interest

[00:49:47 - 00:49:49] on those six.

[00:49:49 - 00:49:51] But, and I'll finish this in just a few minutes,

[00:49:51 - 00:49:53] six more seconds.

[00:49:53 - 00:49:55] But once you're thinking about all of these interesting

[00:49:55 - 00:49:57] algebraic properties, things that are really fun and interesting,

[00:49:57 - 00:49:59] think about some of them really technical and difficult,

[00:49:59 - 00:50:01] but have interesting consequences.

[00:50:01 - 00:50:03] Something that comes out that the math games in the cluster

[00:50:03 - 00:50:06] company getting to know very easily right now

[00:50:06 - 00:50:12] is that the size of this set, actually and unintuitively,

[00:50:12 - 00:50:15] influences the algebraic properties of this set.

[00:50:15 - 00:50:18] Whether or not I have multiplicative inverses,

[00:50:18 - 00:50:23] I can determine just based on how many elements this set has.

[00:50:23 - 00:50:26] And whether or not this has all different properties

[00:50:26 - 00:50:28] or whatever, I might also be able to get information

[00:50:28 - 00:50:30] about based on how big the set is,

[00:50:30 - 00:50:32] which is unrelated to the definition

[00:50:32 - 00:50:34] of additional location, what the current set

[00:50:34 - 00:50:35] relates to any of that stuff.

[00:50:35 - 00:50:37] But the size of the set matters.

[00:50:37 - 00:50:39] Do we know how to judge the size of a set?

[00:50:39 - 00:50:41] How big is this set formal?

[00:50:41 - 00:50:42] Do I know what to do?

[00:50:42 - 00:50:49] Yeah, I don't know what that means. We haven't formally defined or talked about how to judge

[00:50:49 - 00:50:53] the size of a set, how it counts the number of elements in this set. I know this set has

[00:50:53 - 00:50:58] 6 elements, but what does that mean? Formal. If I was asked to prove that this set has

[00:50:58 - 00:51:02] 6 elements, I could, with the things we have right now, because I don't even know what that

[00:51:02 - 00:51:07] means. Next class, we're going to define what it means to count the number of elements in

[00:51:07 - 00:51:10] Certain kinds of sets, and eventually we'll be able to do this for any set.

[00:51:10 - 00:51:11] Okay?

[00:51:11 - 00:51:14] Plus the test.

[00:51:14 - 00:51:15] And then we'll store it at 1,000.

[00:51:15 - 00:51:16] We'll start at 1,000.

[00:51:16 - 00:51:23] We'll start at 1,000.

[00:51:23 - 00:51:24] You know what?

[00:51:24 - 00:51:25] Because you're welcome.

[00:51:25 - 00:51:26] Because you're welcome.

[00:51:26 - 00:51:27] Yeah.

[00:51:27 - 00:51:28] That was awesome.

[00:51:28 - 00:51:29] Amazing.

[00:51:29 - 00:51:30] Thank you.

[00:51:30 - 00:51:31] Thank you.
