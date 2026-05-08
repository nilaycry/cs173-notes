# Transcript: lecture-36.mp4

- Detected language: en (1.00)
- Duration: 00:56:19
- Model: faster-whisper base.en, CPU int8

## Segments

[00:00:01 - 00:00:09] Okay. Any questions from the problem set from last class from anything else? Comments, concerns?

[00:00:09 - 00:00:20] No? Okay. So, I was mentioning a few minutes ago. I'm basically done writing a practice exam with 95% of what you're done.

[00:00:20 - 00:00:25] So within an hour or two of lecture being over, I'll go in and post that to the website, I'll put an answer on Slack,

[00:00:25 - 00:00:31] and then I'll start working on getting pump set 8 solutions out. Pump set 8 solutions are like halfway done.

[00:00:31 - 00:00:33] So we'll need you by the night, we'll need you by tomorrow night,

[00:00:33 - 00:00:35] how the set eight solutions will be done.

[00:00:35 - 00:00:38] Club Ipila 10 will be posted ASAP.

[00:00:38 - 00:00:40] If I can get posted by tomorrow,

[00:00:40 - 00:00:41] then I'll try to get up posted by tomorrow.

[00:00:41 - 00:00:43] If not, I'll post it by Sunday.

[00:00:43 - 00:00:44] Well, I can't take my phone right now,

[00:00:44 - 00:00:48] but I did submit a request for a room

[00:00:48 - 00:00:50] for a review session on Sunday.

[00:00:50 - 00:00:51] If that request gets accepted,

[00:00:51 - 00:00:53] then there will be a review session on Sunday,

[00:00:53 - 00:00:55] starting at 2 p.m. to 6 p.m.

[00:00:55 - 00:00:56] Something like this.

[00:00:56 - 00:00:59] But regardless, I'll hold office hours on Saturday

[00:00:59 - 00:01:04] because a lot of people have asked for officers.

[00:01:04 - 00:01:09] So Saturday, starting, let's say 2 p.m.

[00:01:09 - 00:01:15] And until I get tired, which is how I usually do it.

[00:01:15 - 00:01:17] Meantrum is on Monday.

[00:01:17 - 00:01:20] And Fumset 9, oh, there was an announcement in Slack.

[00:01:20 - 00:01:21] So maybe you didn't hear it.

[00:01:21 - 00:01:23] But I talked to one of my colleagues.

[00:01:23 - 00:01:29] And I don't think I'll get fired if I make the deadline for Fumset 9

[00:01:29 - 00:01:30] after reading day.

[00:01:30 - 00:01:32] So I think the latest I can do it

[00:01:32 - 00:01:34] is the day before our final.

[00:01:34 - 00:01:37] So I've set the deadline for this to be made false.

[00:01:40 - 00:01:42] I don't know if I posted the rates for the second already,

[00:01:42 - 00:01:44] but if I didn't, I'll post it tonight.

[00:01:44 - 00:01:46] Feel free to turn it in before being 12, of course,

[00:01:46 - 00:01:48] as long as the rates go up and it's not,

[00:01:48 - 00:01:50] we'll just follow it up.

[00:01:50 - 00:01:53] But I'm making it do this later,

[00:01:53 - 00:01:54] so that you have more time to do it.

[00:01:54 - 00:01:57] This is not a work on this until the day

[00:01:57 - 00:01:59] break up for the final and then it looks like the final.

[00:01:59 - 00:02:01] You need to learn how to manage your time.

[00:02:01 - 00:02:03] So hopefully you can do that with that constraint.

[00:02:03 - 00:02:05] This should be strictly beneficial to you

[00:02:05 - 00:02:06] to have more time to submit,

[00:02:06 - 00:02:08] because the deadline was next week.

[00:02:08 - 00:02:12] Any questions?

[00:02:12 - 00:02:18] So in office at nine, I can find a whole bunch of stuff.

[00:02:18 - 00:02:21] I'm gonna talk about some of that stuff today.

[00:02:21 - 00:02:23] But most of the focus of office at nine

[00:02:23 - 00:02:24] is on these things called trees.

[00:02:24 - 00:02:27] And in order for me to describe what trees do you,

[00:02:27 - 00:02:33] I need to talk to you about connectivity.

[00:02:33 - 00:02:36] If you were following along the last couple lectures,

[00:02:36 - 00:02:39] a graph is an abstract connectivity structure.

[00:02:39 - 00:02:41] Yeah, to get up and have a bunch of things connected together

[00:02:41 - 00:02:44] in some way is precisely what a graph is meant to represent,

[00:02:44 - 00:02:47] so it's what a graph is meant to model.

[00:02:47 - 00:02:49] And so the way that a graph is connected together

[00:02:49 - 00:02:51] is like of fundamental importance.

[00:02:51 - 00:02:53] And the first thing we should feel,

[00:02:53 - 00:02:55] like the first thing we should understand

[00:02:55 - 00:02:58] is what does it mean for a graph to be connected

[00:02:58 - 00:02:58] in the first place?

[00:02:58 - 00:03:01] And what does it mean for a graph to be disconnected?

[00:03:01 - 00:03:02] And then after you understand that,

[00:03:02 - 00:03:04] you can talk about different kinds of productivity

[00:03:04 - 00:03:07] and there's a whole long competition you have.

[00:03:07 - 00:03:08] In order to talk about connectivity,

[00:03:08 - 00:03:12] I need to tell you about paths.

[00:03:12 - 00:03:14] And I'm not going to go over all of the definitions

[00:03:14 - 00:03:17] in as much detail as I did in front of set nine.

[00:03:17 - 00:03:18] I'm going to do front of set nine.

[00:03:18 - 00:03:20] That'll give you a lot of intuition, thinking,

[00:03:20 - 00:03:22] and whatever, as long as it has conditions.

[00:03:22 - 00:03:25] But I want to talk in detail about paths.

[00:03:25 - 00:03:26] So I'm talking about competition.

[00:03:26 - 00:03:27] You can talk about trees.

[00:03:27 - 00:03:29] You can talk about a really interesting feeling.

[00:03:29 - 00:03:32] And then we'll be done talking about rational disaster.

[00:03:32 - 00:03:34] So what is a path?

[00:03:34 - 00:03:35] And I guess I'll just poll, because I know

[00:03:35 - 00:03:37] if there were people in my office or yesterday,

[00:03:37 - 00:03:43] They don't know what a path is based on definition of onset.

[00:03:43 - 00:03:45] I'll pause on the sign, nice to go ahead.

[00:03:45 - 00:03:49] It's an indjective walk.

[00:03:49 - 00:03:51] Walk, and what is a walk?

[00:03:51 - 00:03:53] So I'll give you a graph.

[00:03:53 - 00:03:56] Here's a graph.

[00:03:56 - 00:04:00] All label notes, A, B, C, D, D, and I'm going to make it

[00:04:00 - 00:04:03] in some way.

[00:04:03 - 00:04:06] What is an example of a walk along this graph?

[00:04:06 - 00:04:17] OK, set of natural numbers to the set of match numbers.

[00:04:17 - 00:04:22] Okay, so you're about to describe the formal definition.

[00:04:22 - 00:04:23] It's actually not quite right.

[00:04:23 - 00:04:24] You're just intuitive.

[00:04:24 - 00:04:25] Intuitively.

[00:04:25 - 00:04:26] What is a wall?

[00:04:26 - 00:04:33] To make sure that you actually understood the formal definitions that I had in the public.

[00:04:33 - 00:04:37] It's like a, I don't want to say path because that's kind of a definition.

[00:04:37 - 00:04:38] Okay, yeah.

[00:04:38 - 00:04:39] A path is defined in terms of blocks.

[00:04:39 - 00:04:40] So what is a wall?

[00:04:40 - 00:04:43] It's like a, in order of traversal.

[00:04:43 - 00:04:45] Okay, it's a traversal form of graph.

[00:04:45 - 00:04:46] What does that mean?

[00:04:46 - 00:04:50] example for a walk would be. So I would like to describe a walk. A walk would be like

[00:04:50 - 00:04:57] A to D. Okay, so I'll start at A. Yeah. And then I'll go to E to the second. Yeah. Okay.

[00:04:57 - 00:05:05] Along this edge, there's an edge between A to D. Okay. And then you could go with B to

[00:05:05 - 00:05:16] B. From B to D. And then D to B to some? Yeah. Sure. Yeah. When I go back to B again,

[00:05:16 - 00:05:19] Again, under a walk, yes.

[00:05:19 - 00:05:21] For me, sure, yeah, why not?

[00:05:21 - 00:05:24] I'm literally walking along the graph, right?

[00:05:24 - 00:05:27] I walk along the graph, I started somewhere.

[00:05:27 - 00:05:30] I started a node, and then I take edges from this node

[00:05:30 - 00:05:32] to some other node.

[00:05:32 - 00:05:34] I keep on taking edges more and more edges

[00:05:34 - 00:05:35] until I end somewhere.

[00:05:35 - 00:05:36] So let's say I end edge.

[00:05:36 - 00:05:39] I will do A to D to D to D again.

[00:05:39 - 00:05:40] I start here, I end here.

[00:05:40 - 00:05:42] That's a wall.

[00:05:42 - 00:05:45] What if, from me, I decide I want

[00:05:45 - 00:05:52] I'm going to go to a gene vertex, F.

[00:05:52 - 00:05:55] Look, at the end of this walk by the side, I'm at B.

[00:05:55 - 00:06:00] I'd like to then go to F.

[00:06:00 - 00:06:03] Which is between B and E.

[00:06:03 - 00:06:06] And it's which is between B and E, what?

[00:06:06 - 00:06:08] Oh, you're right, thank you.

[00:06:08 - 00:06:11] That's silly.

[00:06:11 - 00:06:14] But that is an interesting question.

[00:06:14 - 00:06:15] Can I go for the B to F?

[00:06:15 - 00:06:17] Thank you.

[00:06:17 - 00:06:21] Yeah, you can't.

[00:06:21 - 00:06:22] Now, there are one step at least, right?

[00:06:22 - 00:06:24] I can't just teleport from B to F, right?

[00:06:24 - 00:06:26] I am literally walking along the graph,

[00:06:26 - 00:06:28] and I'm pretending I can't fly if I can tell for whatever.

[00:06:28 - 00:06:32] So if I say I want to walk from a to b to b to b,

[00:06:32 - 00:06:33] that's fine.

[00:06:33 - 00:06:37] If I then want to go to f, I can't go there from b.

[00:06:37 - 00:06:43] If I want to go to f, I have to go to f through c and then up.

[00:06:43 - 00:06:44] And I guess what it should be, the d, right?

[00:06:44 - 00:06:45] It should be b.

[00:06:45 - 00:06:47] So I messed up your walk.

[00:06:47 - 00:06:50] But in order for me to get to f and to go to c,

[00:06:50 - 00:06:52] and then I can go to f.

[00:06:52 - 00:06:54] So what is a walk?

[00:06:54 - 00:06:56] A walk is a sequence of notes.

[00:06:56 - 00:07:01] And consecutive notes in this sequence have to form X.

[00:07:01 - 00:07:04] That's the definition that I was giving you in the problem set.

[00:07:04 - 00:07:06] And in fact, I give you a more detailed definition

[00:07:06 - 00:07:07] of the problem set.

[00:07:07 - 00:07:09] I tell you what a walk of length K is.

[00:07:09 - 00:07:15] A walk of length K and K is a natural number

[00:07:15 - 00:07:17] is a function, not from the sub-natural numbers,

[00:07:17 - 00:07:24] but from K plus one through the set of vertices of G.

[00:07:24 - 00:07:26] But that's not enough, because all this

[00:07:26 - 00:07:29] describes here is a sequence of K plus one notes.

[00:07:29 - 00:07:36] An example of such a sequence in this graph might just be A, A, C, A, C, E, if K is 1,

[00:07:36 - 00:07:43] 2, 3, 4, 5, 1, 2, 4, 5, 6, so K is 5.

[00:07:43 - 00:07:49] Now we have an example of a function from 6 to the verses.

[00:07:49 - 00:07:55] It's just a sequence of 1, 2, 3, 4, 5, 6 different verses.

[00:07:55 - 00:07:56] But this is not a walk.

[00:07:56 - 00:08:00] Life is not a walk because there's no edge between A and A.

[00:08:00 - 00:08:05] There's no edge between A and C. There's no edge between C and A. There's an edge between

[00:08:05 - 00:08:10] C and E. No, there's no edge between A and C. Like this is just teleporting all around

[00:08:10 - 00:08:17] the rack. So a walk is a function. It's a sequence of k plus one nodes. And notice the length

[00:08:17 - 00:08:22] of the walk is k, but in multiples one nodes. But it has an additional condition. It's

[00:08:22 - 00:08:31] a function like this. It's such that whenever you look at consecutive nodes. So f of i is

[00:08:31 - 00:08:33] So f of i is a node.

[00:08:33 - 00:08:37] f of i plus 1 is the next node in the sequence.

[00:08:37 - 00:08:40] They have to form an edge.

[00:08:40 - 00:08:47] This has to be an edge in the graph.

[00:08:47 - 00:08:49] Otherwise, there are new constrances.

[00:08:49 - 00:08:50] As long as you're following edges,

[00:08:50 - 00:08:52] you're walking along the graph.

[00:08:52 - 00:08:54] Now, why is the domain in k plus 1

[00:08:54 - 00:08:56] when I'm following the walk of left k?

[00:08:56 - 00:08:59] Because even though I'm visiting nodes,

[00:08:59 - 00:09:01] I started a node, I visit other nodes,

[00:09:01 - 00:09:02] I ended another node.

[00:09:02 - 00:09:06] I am traversing the graph by taking edges.

[00:09:06 - 00:09:09] And so you can think intuitively that the distance

[00:09:09 - 00:09:13] that I'm traversing is related to the number of edges

[00:09:13 - 00:09:16] that I'm using in my walk.

[00:09:16 - 00:09:19] And if I have K plus one nodes, and each of these

[00:09:19 - 00:09:21] is pairwise connected by an edge, how many edges

[00:09:21 - 00:09:22] are involved in the walk?

[00:09:22 - 00:09:24] K edits.

[00:09:24 - 00:09:27] So a walk has one up K, it's a multi K,

[00:09:27 - 00:09:30] different edits for K edits.

[00:09:30 - 00:09:32] But for most people, it gets a sequence of nodes.

[00:09:32 - 00:09:33] Does that make sense?

[00:09:33 - 00:09:35] There's some other ways you can define this,

[00:09:35 - 00:09:37] OK, now what is a path?

[00:09:37 - 00:09:40] A path is, and Isaac said a path

[00:09:40 - 00:09:42] wasn't an injective walk that's exactly right.

[00:09:42 - 00:09:52] A path is, and let's say, I don't like A,

[00:09:52 - 00:10:03] is an injective walk of life.

[00:10:03 - 00:10:05] And now what on earth does that mean?

[00:10:05 - 00:10:12] What does it mean for a walk to be injective?

[00:10:12 - 00:10:13] You cannot do this at the same note,

[00:10:13 - 00:10:16] because a walk is a function, right?

[00:10:16 - 00:10:19] Injectivity means different inputs

[00:10:19 - 00:10:25] produce different outputs. The inputs correspond to the location in the sequence of the vertices

[00:10:25 - 00:10:30] in the wall. If I have different locations in the sequence, I must have different nodes.

[00:10:30 - 00:10:44] So I can't repeat a node in a path. This is a wall, a node, repeated vertices. And if

[00:10:44 - 00:10:48] you're comfortable with all of this stuff we've been doing in Congress, then a very concise

[00:10:48 - 00:10:55] way to express this is it's an injective wall. It's a wall. It's just a sequence. An injective

[00:10:55 - 00:11:01] sequence is a sequence that doesn't repeat itself. Okay. What does it mean for a graph

[00:11:01 - 00:11:11] to be connected? And let's look at an example of the graph. There's a graph. Is this graph

[00:11:11 - 00:11:18] a wall of G connected? How do we know? What about this graph tells you that it's connected?

[00:11:18 - 00:11:28] Let's compare this graph to a different one. Here's graph H. Is that graph connected? What

[00:11:28 - 00:11:40] about the entire graph just to be clear, is this?

[00:11:40 - 00:11:42] What changed when I added this new,

[00:11:42 - 00:11:44] what I call this component,

[00:11:44 - 00:11:46] this new component to the graph?

[00:11:46 - 00:11:49] Why is this graph not connected,

[00:11:49 - 00:11:53] but this one connected?

[00:11:53 - 00:11:54] So if you started a walk

[00:11:54 - 00:11:56] at any node, you could reach every other node in a tree.

[00:11:56 - 00:11:59] Right, there are nodes in this graph

[00:11:59 - 00:12:01] that can't reach each other through walls.

[00:12:01 - 00:12:03] If I started this node X,

[00:12:03 - 00:12:05] and I want to reach this node Y,

[00:12:05 - 00:12:06] I think this is what you're saying, right?

[00:12:06 - 00:12:08] Can I walk along the graph,

[00:12:08 - 00:12:11] starting at x and right at y.

[00:12:11 - 00:12:15] So what about this node x here and this node y here?

[00:12:15 - 00:12:18] Can I do that over here?

[00:12:18 - 00:12:20] Can I start at x and a right at y through a wall?

[00:12:20 - 00:12:21] Give me an example of a wall.

[00:12:21 - 00:12:25] Let's say that this is a, b, and c.

[00:12:25 - 00:12:30] What's a wall in this graph in g from x to y?

[00:12:30 - 00:12:31] x, b, and then y.

[00:12:31 - 00:12:34] That's an example of a wall, right?

[00:12:34 - 00:12:37] What about x, b, c, x, b, y?

[00:12:37 - 00:12:39] Is that a wall?

[00:12:39 - 00:12:42] That's also a wall.

[00:12:42 - 00:12:45] So that's kind of a redundant walk, right?

[00:12:45 - 00:12:48] Because this walk comes back to x eventually,

[00:12:48 - 00:12:52] and then continues back along some other walk to y.

[00:12:52 - 00:12:55] If I know that I have a walk between x and y,

[00:12:55 - 00:13:01] do I know that I definitely have a path between x and a y?

[00:13:01 - 00:13:03] Does having a walk between two nodes

[00:13:03 - 00:13:05] mean you have a path between two nodes

[00:13:05 - 00:13:07] as a question and ask them?

[00:13:07 - 00:13:10] What's your name?

[00:13:10 - 00:13:13] I believe you have a path on the table.

[00:13:13 - 00:13:17] You just remove the x gap there.

[00:13:17 - 00:13:18] So let's look at that real quick.

[00:13:18 - 00:13:19] Yeah, so let's look at this path.

[00:13:19 - 00:13:24] I composed x to b, to c, to x, to b, to y.

[00:13:24 - 00:13:26] That's a walk, but this walk is not a path,

[00:13:26 - 00:13:30] but this is a walk that starts at x and arrives at y.

[00:13:30 - 00:13:33] Can I take this walk and turn it into a path

[00:13:33 - 00:13:35] that's not already at, and you're saying yes, you can,

[00:13:35 - 00:13:37] because when you revisit a note,

[00:13:37 - 00:13:40] which note do you want to say in your visit?

[00:13:40 - 00:13:46] b, for example, so I saw b, and then I see b again.

[00:13:46 - 00:13:49] Why, like, how can I use this fact

[00:13:49 - 00:13:59] in order to make this path from x to y.

[00:13:59 - 00:14:00] No people, I'm looking at you, yeah.

[00:14:00 - 00:14:05] So if you can get from x to b, and then you need to y,

[00:14:05 - 00:14:07] y, when you need to be in the field, just take a look.

[00:14:07 - 00:14:10] That's fantastic reason, like, why do anything in between?

[00:14:10 - 00:14:12] If I can get to b already from x,

[00:14:12 - 00:14:14] because I've got from x to b,

[00:14:14 - 00:14:15] and then I repeat myself again,

[00:14:15 - 00:14:17] by writing that b again,

[00:14:17 - 00:14:19] by going along this cycle,

[00:14:19 - 00:14:21] I've got a lot of cycles in a second.

[00:14:21 - 00:14:24] Then, and then for b, I get to y,

[00:14:24 - 00:14:25] Why did I move on this cycle?

[00:14:25 - 00:14:27] Why did I waste my time in doing that?

[00:14:27 - 00:14:29] I didn't have to do that.

[00:14:29 - 00:14:31] I can take this part of my walk

[00:14:31 - 00:14:34] and I can replace all of it with just be.

[00:14:34 - 00:14:37] And this would be a path,

[00:14:37 - 00:14:40] or at least it would be slightly closer to being a path

[00:14:40 - 00:14:42] between X and one, right?

[00:14:42 - 00:14:44] Does that make sense?

[00:14:44 - 00:14:46] So, okay, I think this feels connected

[00:14:46 - 00:14:49] because whenever I have any two nodes,

[00:14:49 - 00:14:52] I can walk along the graph from one node to the other one.

[00:14:52 - 00:14:54] I can't do that over here.

[00:14:54 - 00:14:57] There are two nodes, and there's no way

[00:14:57 - 00:14:59] for you to walk from one to the other.

[00:14:59 - 00:15:02] But whenever I walk, I can take a path instead

[00:15:02 - 00:15:06] and paths are nice, paths are nice because in general,

[00:15:06 - 00:15:09] there are a lot of walks along the graph,

[00:15:09 - 00:15:11] and some of them are not very nice,

[00:15:11 - 00:15:13] like some of them are not, like,

[00:15:13 - 00:15:15] what you would consider a walk.

[00:15:15 - 00:15:22] Here's an example of a graph, A, B, C, D.

[00:15:22 - 00:15:26] How many walks in this graph are there

[00:15:26 - 00:15:29] between A and B.

[00:15:29 - 00:15:30] I'm gonna go from A to B.

[00:15:30 - 00:15:34] How many watts are in the men, right?

[00:15:34 - 00:15:37] Here's an example of a walk, A and B.

[00:15:37 - 00:15:41] Here's another walk, A, D, C, B.

[00:15:41 - 00:15:47] But A, B, A, B is another walk between A and B.

[00:15:49 - 00:15:56] A, B, C, D, C, B is another walk between A and B.

[00:15:56 - 00:15:58] In fact, I can actually just keep going around

[00:15:58 - 00:16:01] in circles like this, A, B, C, B, A, B, A, B, A, B, A, B.

[00:16:01 - 00:16:08] That is a walk.

[00:16:08 - 00:16:10] Do that for as many times as you want, end on beat,

[00:16:10 - 00:16:12] and that'll be a walk between A and B.

[00:16:12 - 00:16:13] There's a lot of walks.

[00:16:13 - 00:16:18] But how many paths are in this route between A and B?

[00:16:18 - 00:16:21] Just two.

[00:16:21 - 00:16:22] This is a path.

[00:16:22 - 00:16:23] So these are all walks.

[00:16:23 - 00:16:25] But this is a path.

[00:16:25 - 00:16:28] And this is a path.

[00:16:28 - 00:16:29] And there are no other paths.

[00:16:29 - 00:16:32] Because if you try to extend any of these paths,

[00:16:32 - 00:16:35] you're going to have to repeat a note.

[00:16:35 - 00:16:37] And then your path won't be a path that would be a walk.

[00:16:37 - 00:16:40] So in general, it's nicer to think in terms

[00:16:40 - 00:16:42] when you're like typing that, being able to write,

[00:16:42 - 00:16:45] to think in terms of paths than to think in terms of walls.

[00:16:45 - 00:16:48] So a nice definition for what it might be to be connected

[00:16:48 - 00:16:50] is that between any two nodes,

[00:16:50 - 00:16:52] not say there's a wall between those nodes,

[00:16:52 - 00:16:54] but say there's a path between those nodes.

[00:16:54 - 00:16:56] And it should feel intuitive,

[00:16:56 - 00:16:58] and maybe actually this is a sketch of a proof

[00:16:58 - 00:16:59] that you might think about,

[00:16:59 - 00:17:00] oh, how would I write this proof?

[00:17:00 - 00:17:04] Whenever you have a wall between any two nodes,

[00:17:04 - 00:17:05] you actually have a path between those two nodes.

[00:17:05 - 00:17:09] you can take your walk and turn it into a laugh.

[00:17:09 - 00:17:20] So definition, for what it means for a graphic to be connected.

[00:17:20 - 00:17:25] We say, G is connected.

[00:17:25 - 00:17:27] And we're only gonna talk about being

[00:17:27 - 00:17:28] or not being connected in this class,

[00:17:28 - 00:17:31] but like, if you have more complicated kinds of graphs,

[00:17:31 - 00:17:33] like directed graphs, multi graphs, et cetera,

[00:17:33 - 00:17:35] you can think of different notions of connectivity,

[00:17:35 - 00:17:36] even with simple graphs,

[00:17:36 - 00:17:39] so you can think of more precise notions of connectivity

[00:17:39 - 00:17:41] than just being connected or not being connected.

[00:17:41 - 00:17:44] But just for a versus, we say that a graph is connected,

[00:17:44 - 00:17:48] it will get by definition, for any two haters or notes

[00:17:48 - 00:17:56] in the graph, there exists a path from x to y,

[00:17:56 - 00:17:59] and I'm writing this in a form over here,

[00:17:59 - 00:18:00] but if you wanted to write this form,

[00:18:00 - 00:18:03] you would say there exists a natural number,

[00:18:03 - 00:18:04] and there exists a function from,

[00:18:04 - 00:18:07] that natural number plus one to this other vertices,

[00:18:07 - 00:18:08] such that it starts at x,

[00:18:08 - 00:18:11] it ends at y, and it's a path, meaning,

[00:18:11 - 00:18:14] and it's injected.

[00:18:14 - 00:18:15] I give that definition less than us,

[00:18:15 - 00:18:16] So wrap your head around that mission,

[00:18:16 - 00:18:22] but here it is, intuitively.

[00:18:22 - 00:18:34] I want to describe what a minimally connected graph is.

[00:18:34 - 00:18:44] So here's an example of a graph.

[00:18:44 - 00:18:48] This graph is connected, do you agree?

[00:18:48 - 00:18:51] Can I remove any edges in this graph

[00:18:51 - 00:18:56] and maintain quantity?

[00:18:56 - 00:19:01] Give me a table, with problems.

[00:19:01 - 00:19:03] At to E and E to D.

[00:19:03 - 00:19:05] At to E, okay, at to E.

[00:19:05 - 00:19:07] Graph is still connected, right?

[00:19:07 - 00:19:08] Yep.

[00:19:08 - 00:19:09] And then you said E to D.

[00:19:09 - 00:19:11] Okay, so I'm going to remove two elements.

[00:19:11 - 00:19:12] and it's still connected.

[00:19:12 - 00:19:16] Can I remove it anymore?

[00:19:16 - 00:19:19] So if I pick an edge, I have one, two, three, four, five edges.

[00:19:19 - 00:19:22] If I pick a random edge and I remove it,

[00:19:22 - 00:19:23] is this graph still connected?

[00:19:23 - 00:19:24] No.

[00:19:24 - 00:19:25] How do you know?

[00:19:25 - 00:19:28] How do you prove this graph is not connected?

[00:19:28 - 00:19:30] There exists two numbers that you're saying about it.

[00:19:30 - 00:19:31] For example, which notes?

[00:19:31 - 00:19:32] A and B.

[00:19:32 - 00:19:33] A and B.

[00:19:33 - 00:19:35] And you would have to prove that there is no path

[00:19:35 - 00:19:37] between A and B, right?

[00:19:37 - 00:19:39] And you could prove there's no path between A and B

[00:19:39 - 00:19:40] by a couple of departments.

[00:19:40 - 00:19:43] If you had to do this on paper, we kind of like tedious.

[00:19:43 - 00:19:45] you can actually just like enumerate all the paths,

[00:19:45 - 00:19:46] there's quite a few paths,

[00:19:46 - 00:19:48] but there's no way to get from A to D,

[00:19:48 - 00:19:50] and therefore this graph is disconnected.

[00:19:50 - 00:19:51] But what if I don't remove that F?

[00:19:51 - 00:19:54] What if I remove a differential?

[00:19:54 - 00:19:55] Pick another edge.

[00:19:55 - 00:19:56] A to D, A to D.

[00:19:56 - 00:19:59] A to D is a graphically connected.

[00:19:59 - 00:20:01] No matter what edge I remove,

[00:20:01 - 00:20:04] this graph becomes disconnected, doesn't it?

[00:20:04 - 00:20:13] This graph here is minimally connected.

[00:20:13 - 00:20:13] What do I mean by that?

[00:20:13 - 00:20:16] If I remove any edges from this graph,

[00:20:16 - 00:20:17] no matter where I remove them from,

[00:20:17 - 00:20:20] I will disconnect the graph.

[00:20:20 - 00:20:22] A very interesting question to ask yourself in general

[00:20:22 - 00:20:26] when you have a graph is, how many graphs,

[00:20:26 - 00:20:30] how many edges do I need to remove at a minimum

[00:20:30 - 00:20:31] in order to disconnect the graph?

[00:20:31 - 00:20:33] This is our original graph.

[00:20:33 - 00:20:34] With the smallest number of edges,

[00:20:34 - 00:20:40] you need to remove to disconnect the graph, right?

[00:20:40 - 00:20:42] So you and then you get to the point

[00:20:42 - 00:20:44] where any edge being removed will disconnect the graph.

[00:20:44 - 00:20:48] If you have to remove three edges to disconnect the graph,

[00:20:48 - 00:20:50] there's a name forward that probably describes

[00:20:50 - 00:20:52] a class of graphs, that's a k-connected graph.

[00:20:52 - 00:20:54] This is a three-connected graph, because if you remove

[00:20:54 - 00:20:56] three edges, it comes disconnected.

[00:20:56 - 00:20:58] So you have more refined notions of connectivity

[00:20:58 - 00:21:01] than just the distribution.

[00:21:01 - 00:21:04] But it's interesting to think about the fact that there

[00:21:04 - 00:21:08] are graphs where if you remove any edge,

[00:21:08 - 00:21:10] no matter where the edge is, it will become disconnected.

[00:21:10 - 00:21:17] But let me look at a different example.

[00:21:17 - 00:21:26] Let's look at this graph.

[00:21:26 - 00:21:27] This is a benefit.

[00:21:27 - 00:21:28] This is not what I wanted.

[00:21:28 - 00:21:36] Let's do something like this.

[00:21:36 - 00:21:38] How many edges do I need to remove

[00:21:38 - 00:21:42] in order to disconnect this graph.

[00:21:42 - 00:21:45] In fact, with just one, I can disconnect this graph, right?

[00:21:45 - 00:21:49] By just removing this edge, the graph is disconnected.

[00:21:49 - 00:21:51] But what if I don't want that edge?

[00:21:51 - 00:21:55] What if I remove this edge?

[00:21:55 - 00:21:57] It's still connected.

[00:21:57 - 00:21:58] So this doesn't have the same properties

[00:21:58 - 00:22:01] that went over there where any edge being removed

[00:22:01 - 00:22:02] will disconnect the graph.

[00:22:02 - 00:22:04] There are some edges that are removed

[00:22:04 - 00:22:06] that will disconnect the graph, like this one,

[00:22:06 - 00:22:09] is what we call a cut edge.

[00:22:09 - 00:22:10] And there's a lot of different issues,

[00:22:10 - 00:22:13] Sometimes, in other contexts, cut edge means something

[00:22:13 - 00:22:15] slightly different, especially for use of law algorithms.

[00:22:15 - 00:22:18] But I'm calling this a cut edge or a separate edge,

[00:22:18 - 00:22:20] because if you cut this edge, you remove it,

[00:22:20 - 00:22:21] it'll disconnect the graph.

[00:22:21 - 00:22:24] But this one is not.

[00:22:24 - 00:22:26] Removing that edge is totally fine.

[00:22:26 - 00:22:28] Why is removing this edge fine?

[00:22:28 - 00:22:32] Why does removing this edge maintain connectivity?

[00:22:32 - 00:22:34] There's something special about this edge

[00:22:34 - 00:22:36] that is natural about the center.

[00:22:36 - 00:22:38] There's an algorithm.

[00:22:38 - 00:22:42] So if you look at these two nodes, for example,

[00:22:42 - 00:22:45] Removing this edge would seem to sever a connection

[00:22:45 - 00:22:47] between those two nodes and seem to disconnect

[00:22:47 - 00:22:49] those two nodes, right?

[00:22:49 - 00:22:54] But that's not the only path between those two nodes.

[00:22:54 - 00:22:56] There's another path between those two nodes.

[00:22:56 - 00:22:58] So if I remove this edge that eliminates

[00:22:58 - 00:23:02] one of the potential paths I had between these two nodes,

[00:23:02 - 00:23:03] and in order for the graph to be connected,

[00:23:03 - 00:23:06] I need to have a path between any pair of nodes.

[00:23:06 - 00:23:08] But I had an alternative path over it.

[00:23:08 - 00:23:11] I had two distinct paths between these two nodes.

[00:23:11 - 00:23:14] So if I remove an edge along one of those paths,

[00:23:14 - 00:23:15] I can always just take the other path,

[00:23:15 - 00:23:17] and the graph stays connected.

[00:23:17 - 00:23:20] What's the problem with this edge?

[00:23:20 - 00:23:25] Any path that connects, for example, this node,

[00:23:25 - 00:23:31] to this node must use that edge.

[00:23:31 - 00:23:33] It has to, right?

[00:23:33 - 00:23:35] There are still a few different paths,

[00:23:35 - 00:23:37] because how many paths are there from this node

[00:23:37 - 00:23:41] x to this node y?

[00:23:41 - 00:23:43] I count two, right?

[00:23:43 - 00:23:45] I count, since it's got these edges of names,

[00:23:45 - 00:23:49] So one of those names, A, D, C, D, E.

[00:23:49 - 00:23:53] Here's one path, X, C, D, Y.

[00:23:53 - 00:23:59] Here's another path, X, C, D, E, Y.

[00:23:59 - 00:24:01] If I started here at A, how many paths

[00:24:01 - 00:24:04] are other between A and Y?

[00:24:04 - 00:24:05] Four.

[00:24:05 - 00:24:08] Because I can go through X, through this edge,

[00:24:08 - 00:24:10] and then I can follow those two paths.

[00:24:10 - 00:24:12] Or I can go through B first, and then reach X,

[00:24:12 - 00:24:13] and then take those paths.

[00:24:13 - 00:24:16] So for each of those paths, I have two ways to get set X.

[00:24:16 - 00:24:19] and then take those paths, so I have four different paths.

[00:24:19 - 00:24:22] But all of those paths, no matter which path I take

[00:24:22 - 00:24:25] from x to y, or from a to y, even from anyone

[00:24:25 - 00:24:29] on this side of the graph to anyone on this side of the graph,

[00:24:29 - 00:24:30] this edge has to be used.

[00:24:30 - 00:24:34] So if I remove that edge, I must disconnect the graph.

[00:24:34 - 00:24:39] What is another way of seeing this?

[00:24:39 - 00:24:42] There's a special meaning for this kind of structure.

[00:24:42 - 00:24:45] This structure here, when you have a bunch of edges

[00:24:45 - 00:24:46] that's going to be going in the circle,

[00:24:46 - 00:24:50] This is called a cycle.

[00:24:50 - 00:24:53] A cycle is a special piece of something called a circuit.

[00:24:53 - 00:24:54] I'm not going to bother describing a circuit.

[00:24:54 - 00:24:56] But cycles, and I think the circuit

[00:24:56 - 00:24:57] is not really called an important,

[00:24:57 - 00:24:59] just like blocks really aren't called that important,

[00:24:59 - 00:25:02] but unless you're doing something like very specific.

[00:25:02 - 00:25:04] But paths and cycles are super important.

[00:25:04 - 00:25:06] And a cycle is essentially a path,

[00:25:06 - 00:25:08] but it starts and ends at the same place.

[00:25:08 - 00:25:12] So a cycle is a path, and I'll just put a path in quotes

[00:25:12 - 00:25:15] because a path cannot repeat verses,

[00:25:15 - 00:25:17] but I'm about to say this is a path

[00:25:17 - 00:25:25] that starts and ends the same note.

[00:25:25 - 00:25:36] Who, an edge from a cycle, you don't disconnect the graph

[00:25:36 - 00:25:38] that that cycle is inside of.

[00:25:38 - 00:25:41] Because what is a nice property of cycles,

[00:25:41 - 00:25:44] if I draw an example of a left-five cycle,

[00:25:44 - 00:25:49] here's a left-five cycle, between any two notes in a cycle,

[00:25:49 - 00:25:52] there are two distinct paths.

[00:25:52 - 00:25:56] If this is s and this is y, I can reach y from x like this,

[00:25:56 - 00:26:01] or like this, so removing edge from a cycle

[00:26:01 - 00:26:04] does not disconnect the cycle.

[00:26:04 - 00:26:05] If this cycle appears in a graph,

[00:26:05 - 00:26:08] you've got a graph that has a cycle in it,

[00:26:08 - 00:26:10] and you remove an edge from that cycle,

[00:26:10 - 00:26:12] the graph stays connected.

[00:26:12 - 00:26:13] But if you remove an edge somewhere else,

[00:26:13 - 00:26:17] it might become disconnected.

[00:26:17 - 00:26:19] In fact, it must become disconnected.

[00:26:19 - 00:26:20] That's such a story.

[00:26:20 - 00:26:23] Does this make sense?

[00:26:23 - 00:26:25] So it's interesting to think about different graphs.

[00:26:25 - 00:26:26] It's going to hold up something, but the graphs.

[00:26:26 - 00:26:29] And I want to think about minimally connected graphs.

[00:26:29 - 00:26:31] These graphs that have this property

[00:26:31 - 00:26:34] that we're moving any edge disconnects them.

[00:26:34 - 00:26:37] The important thing about minimally connected graphs

[00:26:37 - 00:26:38] is can they have a cycle?

[00:26:41 - 00:26:45] If a graph contains a cycle,

[00:26:45 - 00:26:47] then it's not minimally connected.

[00:26:47 - 00:26:49] I know there's an edge somewhere in the graph

[00:26:49 - 00:26:53] that I can remove without destroying connectivity.

[00:26:53 - 00:26:55] I go to the cycle and I find one of those edges

[00:26:55 - 00:26:58] and I remove it.

[00:26:58 - 00:27:00] And then I know, this is a theorem,

[00:27:00 - 00:27:04] of this theorem, that will maintain connectivity of the graph.

[00:27:04 - 00:27:12] So theorem.

[00:27:12 - 00:27:16] Now, you should not use this theorem in problem set 9,

[00:27:16 - 00:27:18] because in problem set 9, you're going to improve a lot of things

[00:27:18 - 00:27:20] that you need in order to use this theorem.

[00:27:20 - 00:27:22] But I'm going somewhere with today's class,

[00:27:22 - 00:27:24] and I want to see if you can sketch a proof of something

[00:27:24 - 00:27:25] I should have to get into this class.

[00:27:25 - 00:27:27] I'm going to use this fact.

[00:27:27 - 00:27:29] But you're going to improve a lot of important properties

[00:27:29 - 00:27:31] of these things called trees that I'll talk about in a second.

[00:27:31 - 00:27:35] In the problem set, don't use this theorem in those proofs.

[00:27:35 - 00:27:37] You need those proofs actually to do this set.

[00:27:37 - 00:27:38] or they're both.

[00:27:38 - 00:27:44] Here, form any graph G.

[00:27:44 - 00:27:50] If G contains the psyche, then it also

[00:27:50 - 00:27:58] writes intuitively in English, removing any edge,

[00:27:58 - 00:28:11] any single edge, from that lousy mass cycle.

[00:28:11 - 00:28:13] And let's say for any connected graph G,

[00:28:13 - 00:28:21] which is a connected graph, for any connected graph G,

[00:28:21 - 00:28:33] This is a new graph that is still connected.

[00:28:33 - 00:28:35] So the remaining graph is still connected

[00:28:35 - 00:28:40] after removing an edge from a cycle in a graph.

[00:28:40 - 00:28:41] Are we open?

[00:28:41 - 00:28:43] What I mean by the graph containing a cycle?

[00:28:43 - 00:28:45] Does that make sense?

[00:28:45 - 00:28:49] What I mean is you can find a path in the graph

[00:28:49 - 00:28:51] except for the fact that it starts

[00:28:51 - 00:28:54] and hits the same place or something really a path.

[00:28:54 - 00:28:55] And another way to think about it is

[00:28:55 - 00:28:58] there is a sub graph of G that looks like this,

[00:28:58 - 00:29:08] that looks like what's called a 2 regular connected graph.

[00:29:08 - 00:29:10] And that we find that being 2 regular is that being k regular

[00:29:10 - 00:29:12] is an important property of some graphs.

[00:29:12 - 00:29:14] It comes about sometimes in algorithms, actually.

[00:29:14 - 00:29:16] But it also comes about when you're studying graphs

[00:29:16 - 00:29:17] like this formula.

[00:29:17 - 00:29:19] And you have to be interested to look at regularity graphs.

[00:29:19 - 00:29:21] It's related to the degree of graphs.

[00:29:21 - 00:29:22] That's a whole long story.

[00:29:22 - 00:29:24] But these graphs have names.

[00:29:24 - 00:29:27] This graph has a name called CPAP.

[00:29:27 - 00:29:29] It's the cycle on five minutes.

[00:29:29 - 00:29:30] There are these things called cyclic graphs.

[00:29:30 - 00:29:34] a specific graph that you see called path graphs and line graphs and complete graphs

[00:29:34 - 00:29:40] and a whole bunch of different types of graphs that we've spent a lot of time talking about.

[00:29:40 - 00:29:47] But importantly, because of this property, what I want to describe as a minimally connected

[00:29:47 - 00:29:53] graph is a graph that doesn't contain a cycle, because if it contains a cycle, I can remove

[00:29:53 - 00:29:57] something from the graph and maintain connectivity. It's not minimally connected. So hold a line

[00:29:57 - 00:30:09] a tree, a graph, and what I want this to mean is a minimally connected graph.

[00:30:09 - 00:30:18] Is this a redefinition, a graph that is connected, and that I cannot remove any edges from without

[00:30:18 - 00:30:19] destroying conicative?

[00:30:19 - 00:30:20] Is that a redefinition?

[00:30:20 - 00:30:27] I don't think so.

[00:30:27 - 00:30:36] So why do I have to say that the graph is connected, it comes in, and it has no cycles.

[00:30:36 - 00:30:40] So I can't go that any cycle on the graph and remove an edge and maintain conicative.

[00:30:40 - 00:30:41] You shouldn't this be minimally connected.

[00:30:41 - 00:30:49] What if I have a graph that looks like this?

[00:30:49 - 00:30:56] Are there any cycles in this graph?

[00:30:56 - 00:31:01] There's no cycles in this graph, but if I remove the edge from anywhere in this graph,

[00:31:01 - 00:31:03] it becomes disconnected.

[00:31:03 - 00:31:04] Why does it become disconnected?

[00:31:04 - 00:31:06] This is not a minute to take.

[00:31:06 - 00:31:09] It's possible for a graph to be disconnected with your cycles,

[00:31:09 - 00:31:12] because you might have multiple problems in moments.

[00:31:12 - 00:31:18] This is called a connected component.

[00:31:18 - 00:31:23] It's a maximal sub-graph that is connected in the graph.

[00:31:23 - 00:31:26] So the minimality, maximality, this comes about a lot when you're talking about graphs.

[00:31:26 - 00:31:29] I'm not going to spend time here to find what a connected component is,

[00:31:29 - 00:31:35] but the largest portion of a graph that is connected is called a connected component.

[00:31:35 - 00:31:38] And this graph has two connected components.

[00:31:38 - 00:31:43] So I would like to say a tree is a graph of no cycle that's connected.

[00:31:43 - 00:31:44] It only has one component.

[00:31:44 - 00:32:05] So this definition is bad. This is what a forest is. A forest is a collection of trees. A tree is a connected graph with no cycles.

[00:32:05 - 00:32:06] Does that make sense?

[00:32:06 - 00:32:15] Importantly, the thing that makes a tree, what it is, the thing that makes trees nice is that they don't have cycles.

[00:32:15 - 00:32:22] They have this minimal amount of connectivity. If you're just interested in connecting a bunch of notes to each other,

[00:32:22 - 00:32:26] and you're not interested in the nature of other connections and how exactly they're connected together,

[00:32:26 - 00:32:28] you just want them to be connected together.

[00:32:28 - 00:32:32] A tree is an efficient way of doing that.

[00:32:32 - 00:32:37] It's a way of connecting a bunch of nodes without wasting any edges.

[00:32:37 - 00:32:41] If you're connecting a bunch of nodes, but you're not connecting them with a tree,

[00:32:41 - 00:32:45] then you're using access edges, you're introducing cycles.

[00:32:45 - 00:32:47] And those cycles can be gotten rid of.

[00:32:47 - 00:33:08] And this is what I would like to prove today that whenever you have a connected graph, this connected graph contains a special sub graph.

[00:33:08 - 00:33:20] It contains what's called a spanning tree. Any connected graph contains a spanning tree.

[00:33:20 - 00:33:28] What is a spanning tree? It's a tree contained inside of that graph, so it's a sub graph which is a tree that spans all of the nodes.

[00:33:28 - 00:33:37] So here's an example of a graph.

[00:33:37 - 00:33:42] This graph is connected, isn't it?

[00:33:42 - 00:33:43] But it's not minimally connected.

[00:33:43 - 00:33:45] I've got a bunch of cycles in this graph.

[00:33:45 - 00:33:47] How many cycles do I have in this graph?

[00:33:47 - 00:33:50] Two cycles, exactly two cycles.

[00:33:50 - 00:33:52] Before we go to what standard it is,

[00:33:52 - 00:33:53] let me just quiz you.

[00:33:53 - 00:33:57] How many cycles are in this graph?

[00:33:57 - 00:34:04] I have an image.

[00:34:04 - 00:34:09] Here's a cycle, here's another cycle,

[00:34:09 - 00:34:15] here's another cycle, here's another cycle,

[00:34:15 - 00:34:21] here's another cycle, here's another one,

[00:34:21 - 00:34:28] I think that's something interesting for you to think about how many paths there are, how many cycles there are between those and graphed.

[00:34:28 - 00:34:37] Here's that graphed event, and we read that this graph is connected, but it's not minimally connected because it contains cycles.

[00:34:37 - 00:34:46] If I would like to write a more efficient representation of the graph, I think that's something interesting for you to think about how many paths there are, how many cycles there are between those and graphed.

[00:34:46 - 00:34:53] And we read that this graph is connected, but it's not minimally connected because it contains

[00:34:53 - 00:34:54] cycles.

[00:34:54 - 00:34:59] If I would like a more efficient representation of the connectivity structure of this graph

[00:34:59 - 00:35:05] that uses as few edges as possible, I can throw away, for example, this edge, and I can

[00:35:05 - 00:35:07] throw away, for example, this edge.

[00:35:07 - 00:35:16] And if I throw those two edges away, so I'm just putting them down, the remaining graph

[00:35:16 - 00:35:22] has no cycle. Doesn't it? If I go to every cycle and I start deleting edges until it stops

[00:35:22 - 00:35:28] becoming a cycle, then the remaining graph is no cycle, but it's still connected, isn't

[00:35:28 - 00:35:38] it? How many nodes were in the graph? This is G. The G was one. But originally, G had

[00:35:38 - 00:35:44] six edges. But I threw away enough edges to turn G into a tree. How many edges does G

[00:35:44 - 00:35:48] have a noun, now that it's a tree.

[00:35:48 - 00:35:54] Or, interestingly, this always happens.

[00:35:54 - 00:35:56] And it's part of what you're going to prove on set nine.

[00:35:56 - 00:35:59] Whenever you have a tree, you always

[00:35:59 - 00:36:03] must have one more node than the number of edges.

[00:36:03 - 00:36:06] And as long as you have a connected graph with one more

[00:36:06 - 00:36:09] node than the number of edges, that graph must be a tree.

[00:36:09 - 00:36:11] It's impossible for that graph to be cyclic,

[00:36:11 - 00:36:12] to have a cyclic.

[00:36:12 - 00:36:14] This graph is called a-cyclic.

[00:36:14 - 00:36:15] It doesn't contain any cycles.

[00:36:15 - 00:36:17] But what am I trying to point out here?

[00:36:17 - 00:36:22] This, the remaining graph, is a sub graph of g.

[00:36:22 - 00:36:25] And that sub graph is a tree.

[00:36:25 - 00:36:31] This sub graph touches all of the nodes in g,

[00:36:31 - 00:36:34] and is connected, and it contains no cycles.

[00:36:34 - 00:36:36] That's what I'm calling a spanning tree.

[00:36:36 - 00:36:40] A spanning tree for a graph.

[00:36:40 - 00:36:45] So here's an infinite value of a tree.

[00:36:45 - 00:36:53] A sub graph, let's say, a sub graph of a graph g.

[00:36:53 - 00:37:06] is a spanning tree, if only if, by definition,

[00:37:06 - 00:37:11] t has just as many nodes as g does,

[00:37:11 - 00:37:13] and t is a tree.

[00:37:17 - 00:37:20] Tree that covers all the nodes of g.

[00:37:20 - 00:37:21] As long as we're graphed up, why not?

[00:37:21 - 00:37:24] This is a good enough condition for being a spanning tree.

[00:37:24 - 00:37:27] You have as many nodes as the original graphed.

[00:37:27 - 00:37:29] It's interesting to think about that.

[00:37:29 - 00:37:32] That's not enough if you're graphing it anymore.

[00:37:32 - 00:37:35] But if we're graphed up, then this is not true.

[00:37:35 - 00:37:39] So I'd like to prove for you guys, and I'd like to see how the thinking, I'd like to

[00:37:39 - 00:37:41] see how the thinking, the proof works.

[00:37:41 - 00:37:46] I'd like to prove that any connected graph contains a span tree, of us, yep.

[00:37:46 - 00:37:51] So is the, is the spanning tree like the same thing as the middle of the connected graph?

[00:37:51 - 00:37:57] It's a minimally connected sub-graph of G. So now I guess I'll pause it before we actually

[00:37:57 - 00:38:00] like think about how we do that proof, and let's look at G again, this is the same graph

[00:38:00 - 00:38:04] from over there.

[00:38:04 - 00:38:07] How many span trees does this graph have?

[00:38:07 - 00:38:09] Yeah, oh

[00:38:12 - 00:38:15] What what counts the sub graph is it like all the same vertices with

[00:38:17 - 00:38:24] So I sort of I guess I never lose one of the finest but H is a sub graph of

[00:38:33 - 00:38:37] You don't know them taking any amount of them is enough and the

[00:38:38 - 00:38:42] are a subset of the edges we need.

[00:38:42 - 00:38:44] And of course, h on its own has to be a graph.

[00:38:44 - 00:38:47] So you can't take random edges between nodes that don't exist.

[00:38:47 - 00:38:49] These have to be edges in h.

[00:38:49 - 00:38:52] So h has to make sense as a graph on its own.

[00:38:52 - 00:38:54] That's what sub graphs.

[00:38:54 - 00:38:55] Hopefully that's intuitive.

[00:38:55 - 00:38:56] So whenever you take a picture of a graph,

[00:38:56 - 00:38:59] if you just trace some of the edges

[00:38:59 - 00:39:01] and the nodes between those edges,

[00:39:01 - 00:39:02] that's an example of a sub graph.

[00:39:02 - 00:39:04] If you just take some of the nodes

[00:39:04 - 00:39:05] and some of the edges between them,

[00:39:05 - 00:39:08] that's another example of a sub graph.

[00:39:08 - 00:39:09] If you do this visually,

[00:39:09 - 00:39:15] How many spanning trees are there?

[00:39:15 - 00:39:16] There's quite a few, right?

[00:39:16 - 00:39:17] I should go along the top of my head,

[00:39:17 - 00:39:18] I would have to sit down and think about it,

[00:39:18 - 00:39:21] but there's more than just one, which is interesting, right?

[00:39:21 - 00:39:23] And it's interesting, in part because,

[00:39:23 - 00:39:24] or I guess it's like, not interesting,

[00:39:24 - 00:39:28] but like, it should seem obvious with a little bit of thought

[00:39:28 - 00:39:31] in part because this wrap contains cycles.

[00:39:31 - 00:39:33] Whenever you have a wrap with cycles in it,

[00:39:33 - 00:39:35] you can remove edges from the cycles,

[00:39:35 - 00:39:38] maintain connectivity, which edges you decide to remove

[00:39:38 - 00:39:41] might produce different spanning trees.

[00:39:41 - 00:39:42] to introduce different tree-like structures.

[00:39:42 - 00:39:45] If I remove this edge, as opposed to this edge,

[00:39:45 - 00:39:47] I get two different tree-like structures,

[00:39:47 - 00:39:50] but it won't still be connected, right?

[00:39:50 - 00:39:57] So, a question, if I have a tree,

[00:39:57 - 00:40:00] and let me just disabuse you of a notion,

[00:40:00 - 00:40:03] because maybe at some point when you look at the polyset

[00:40:03 - 00:40:05] and you thought about, oh, well, what is a tree?

[00:40:05 - 00:40:06] You sort of find what a tree is a tree,

[00:40:06 - 00:40:09] is it something that looks like this?

[00:40:09 - 00:40:11] Trees don't have to look like that,

[00:40:11 - 00:40:13] but this is an example of what a tree might look like

[00:40:13 - 00:40:16] if you define a special note as being what's called the root.

[00:40:16 - 00:40:19] There's nothing special about a root, except for the fact

[00:40:19 - 00:40:21] that you just put the point at it, and you say this note

[00:40:21 - 00:40:24] is special, and when you have a note

[00:40:24 - 00:40:26] denoted to be the root of a tree,

[00:40:26 - 00:40:28] then you can pull that note up, and you can always

[00:40:28 - 00:40:30] draw a tree in like a cascading way like this.

[00:40:30 - 00:40:32] You can define some things about the tree called the height,

[00:40:32 - 00:40:35] and you can define the leaves, and you can find the turnal notes.

[00:40:35 - 00:40:37] And this is very important for algorithms

[00:40:37 - 00:40:39] that you talk about in G25, and in G74,

[00:40:39 - 00:40:40] but I'm not going to talk about others,

[00:40:40 - 00:40:42] because we're not going to talk about algorithms this semester.

[00:40:42 - 00:40:46] But a tree is a trap that is connected with those cycles,

[00:40:46 - 00:40:48] and so a question just to make sure

[00:40:48 - 00:40:56] if your wish is right, is this a tree?

[00:40:56 - 00:41:01] That's a tree, is this a tree?

[00:41:01 - 00:41:03] Is this a tree?

[00:41:03 - 00:41:07] Yes, this in fact is called a comb.

[00:41:07 - 00:41:08] This is a tree.

[00:41:08 - 00:41:11] But a tree can look one of several weird ways,

[00:41:11 - 00:41:12] depending on how you draw it,

[00:41:12 - 00:41:14] and it could be the exact same graph.

[00:41:14 - 00:41:17] I can draw a binary tree in such a way

[00:41:17 - 00:41:18] this is a binary tree, it turns out.

[00:41:18 - 00:41:20] So a full binary tree is not a balanced binary tree,

[00:41:20 - 00:41:22] because it's on your tree, you have to know what the root is

[00:41:22 - 00:41:25] and it's referred to make sense as by your tree,

[00:41:25 - 00:41:28] but a tree can look any weird way when you draw it.

[00:41:28 - 00:41:31] The important thing is that it's connected and has no cycles.

[00:41:31 - 00:41:38] I want to, I'll just pause it,

[00:41:38 - 00:41:40] have it be going too fast, this is all making sense.

[00:41:40 - 00:41:42] If it has, then I think that,

[00:41:42 - 00:41:43] since I can't remember where I was going,

[00:41:43 - 00:41:44] I thought we'll just start the proof,

[00:41:44 - 00:41:48] and I'm gonna sketch this proof, any questions.

[00:41:48 - 00:41:50] Okay, so let's try sketching this proof.

[00:41:50 - 00:41:58] And this will be another example of proof by induction.

[00:41:58 - 00:42:01] And importantly, I'm gonna rely on this theory,

[00:42:01 - 00:42:03] So I'm not going to erase this here and there.

[00:42:03 - 00:42:05] But I'm going to use that theorem somewhere in the group.

[00:42:05 - 00:42:06] But I want to ask the question.

[00:42:06 - 00:42:09] I'm very told we're going to prove this by induction.

[00:42:09 - 00:42:16] What should I do in induction on?

[00:42:16 - 00:42:19] There are many things I can do in induction on.

[00:42:19 - 00:42:21] But what are two obvious things to do in induction on

[00:42:21 - 00:42:24] when you're looking at a graph?

[00:42:24 - 00:42:28] Number of edges or number of vertices.

[00:42:28 - 00:42:30] Last class, we did an example of proof

[00:42:30 - 00:42:32] that did induction on, the number of nodes

[00:42:32 - 00:42:34] in a graph, and that worked out just fine.

[00:42:34 - 00:42:37] We could also do that here.

[00:42:37 - 00:42:39] But it might be sensible here to do induction

[00:42:39 - 00:42:43] when a number of n's, if you have an idea already

[00:42:43 - 00:42:44] what the proof is going to go like.

[00:42:44 - 00:42:46] And so it's a good idea to have intuition

[00:42:46 - 00:42:48] before you sort of jump it into these brackets at first.

[00:42:48 - 00:42:51] Otherwise, mechanically, there's not

[00:42:51 - 00:42:53] going to be a lot to do in your proof by induction.

[00:42:53 - 00:42:54] There's not going to be an equation

[00:42:54 - 00:42:56] that you just push terms around in

[00:42:56 - 00:42:59] and then solve for something to make the inductive step work.

[00:42:59 - 00:43:01] You need to actually have an idea when you refer to a proof

[00:43:01 - 00:43:03] by induction about something like a graph.

[00:43:03 - 00:43:05] So here's an idea about how we might

[00:43:05 - 00:43:18] improve this inductive. Let's say that we have a big graph. So here's a graph. It's got a few cycles in it.

[00:43:18 - 00:43:24] Let's see this. You know, those are already connected. No, no, no.

[00:43:24 - 00:43:31] If I'm doing induction on the number of edges, so say this is a graph in my inductive step with k plus 1 edges,

[00:43:31 - 00:43:37] I would assume in my inductive step that any graph with k or less edges, if you're doing strong induction,

[00:43:37 - 00:43:45] or K edges, let's say, has what's,

[00:43:45 - 00:43:47] do we all know we're about to start brewing?

[00:43:47 - 00:43:50] Is the animal clear?

[00:43:50 - 00:43:52] Is there a one on top or?

[00:43:52 - 00:43:53] Yeah, I want to prove that.

[00:43:53 - 00:43:55] I want to prove that until let me just,

[00:43:55 - 00:43:57] I'll just write it here, see there.

[00:43:57 - 00:43:59] Sometimes I can carry away just something.

[00:43:59 - 00:44:00] So this is good.

[00:44:00 - 00:44:04] We're going to prove any connected,

[00:44:04 - 00:44:13] wrapped, and tamed, is staying true.

[00:44:13 - 00:44:17] So I want to prove that a connective wrap has a staying true.

[00:44:17 - 00:44:21] So if I look at a graph with K edges,

[00:44:21 - 00:44:24] what should I assume is true about it?

[00:44:24 - 00:44:25] It has a spanning tree.

[00:44:25 - 00:44:26] It has a spanning tree.

[00:44:26 - 00:44:28] So if this is a graph with K plus one edges,

[00:44:28 - 00:44:30] and I'm in my inductive step,

[00:44:30 - 00:44:32] I can think about doing something like

[00:44:32 - 00:44:33] removing an edge from this graph,

[00:44:33 - 00:44:39] and then you have to just make the graph a little bigger.

[00:44:39 - 00:44:41] I can remove an edge from this graph,

[00:44:41 - 00:44:42] apply my inductive hypothesis,

[00:44:42 - 00:44:46] and observe that it contains a spanning tree.

[00:44:46 - 00:44:48] And then I want to use the fact that this contains

[00:44:48 - 00:44:50] spanning tree, to build a spanning tree,

[00:44:50 - 00:44:52] or the bigger graph, right?

[00:44:52 - 00:44:57] So let me, for example, take this graph and remove an edge.

[00:44:57 - 00:44:58] Last time when we did proof-by induction,

[00:44:58 - 00:45:00] we took a graph and then removed a node.

[00:45:00 - 00:45:02] So we're doing induction on the number of nodes.

[00:45:02 - 00:45:03] And we obtain a graph with less nodes

[00:45:03 - 00:45:05] that falls in our vector side.

[00:45:05 - 00:45:06] Here, we're going to remove an edge.

[00:45:06 - 00:45:08] For example, let's now remove this edge.

[00:45:08 - 00:45:12] So now the graph has k edges.

[00:45:12 - 00:45:16] What does my inductive hypothesis tell me?

[00:45:16 - 00:45:18] That there is a spanning tree for this graph,

[00:45:18 - 00:45:22] this smaller graph, after removing edge.

[00:45:22 - 00:45:25] So here's an example of what that spanning tree might be.

[00:45:25 - 00:45:34] Let's say that it's this.

[00:45:34 - 00:45:36] Let's say these bolded edges are the edges

[00:45:36 - 00:45:40] that make up the spanning tree for this graph.

[00:45:40 - 00:45:43] When I re-add this edge back in,

[00:45:43 - 00:45:46] do I have a spanning tree for my new graph?

[00:45:46 - 00:45:50] What should I do when I get a spanning tree for my new graph?

[00:45:50 - 00:45:54] My favorite graph.

[00:45:54 - 00:45:57] State spanning tree.

[00:45:57 - 00:45:59] The same spanning tree works.

[00:45:59 - 00:46:00] That's nice.

[00:46:00 - 00:46:03] If you did induction on the number of nodes in the graph,

[00:46:03 - 00:46:04] and you remove a node,

[00:46:04 - 00:46:07] And you obtain a spanning tree for a smaller version of the graph,

[00:46:07 - 00:46:10] maybe, for example, for that part of the graph.

[00:46:10 - 00:46:13] By removing a node instead of removing the edge.

[00:46:13 - 00:46:15] Then when you add that node back in,

[00:46:15 - 00:46:17] there's work that has to be done to take the smallest spanning

[00:46:17 - 00:46:22] tree and create a bigger spanning tree or the whole graph.

[00:46:22 - 00:46:24] But if you could do it, it would work.

[00:46:24 - 00:46:25] You'd just have to be careful about it.

[00:46:25 - 00:46:27] But if you induction on the number of edges

[00:46:27 - 00:46:29] instead of on the number of nodes, the nice thing is,

[00:46:29 - 00:46:32] a spanning tree for a smaller version of the graph

[00:46:32 - 00:46:35] will still be a spanning tree for a bigger version of the graph.

[00:46:35 - 00:46:40] because all you're doing are introducing edges that add cycles.

[00:46:40 - 00:46:44] But this spanning tree for the smaller version of the graph

[00:46:44 - 00:46:46] is a tree, and it covers all the nodes,

[00:46:46 - 00:46:47] because instead of the nodes, it's exactly the same,

[00:46:47 - 00:46:50] so it's still a spanning tree by definition.

[00:46:50 - 00:46:53] This is a nice idea, we agree.

[00:46:53 - 00:46:57] We'll use this as a sketch for our proof by induction.

[00:46:57 - 00:47:04] Question, does it matter which edge are removed?

[00:47:04 - 00:47:07] How am I gonna stick my inductive hypothesis?

[00:47:07 - 00:47:08] Let's just, I see some hints,

[00:47:08 - 00:47:10] but let's just start, let's begin this group,

[00:47:10 - 00:47:13] And I want to show you a potential failure mode

[00:47:13 - 00:47:14] when you're not paying attention,

[00:47:14 - 00:47:16] when you're writing out these proofs,

[00:47:16 - 00:47:44] when you're trying to apply your dot-by-

[00:47:44 - 00:48:06] So, G is graphing. That is connected to James' same gene. I'm going to say, let G be graphed.

[00:48:06 - 00:48:11] And I'm doing induction on the number of it, and of course it should be graphed with K edges.

[00:48:11 - 00:48:17] So, and now I'm going to give G to G, K. I'm doing induction on the cardinality of F test.

[00:48:17 - 00:48:21] Let's be a graphing. So now, if I'm going to put up the addition of D,

[00:48:21 - 00:48:27] it is table small. And I'm going to start trying to implement

[00:48:27 - 00:48:30] like I said, this is going to be a sketchbook group.

[00:48:30 - 00:48:36] I was going to need some detail about this.

[00:48:36 - 00:48:38] But I'll start people moving my idea

[00:48:38 - 00:48:43] by defining a new graph, which is a smaller version of G.

[00:48:43 - 00:48:47] But H, be the graph.

[00:48:47 - 00:48:49] And I'll probably go over by that two or three minutes.

[00:48:49 - 00:48:51] But I just want you to see the thing that I'm saying

[00:48:51 - 00:48:53] is like a contemporary remote, so that you're aware of this.

[00:48:53 - 00:49:00] There is a graph given by H, which is by definition,

[00:49:00 - 00:49:03] B of G minus, and we pick a node.

[00:49:03 - 00:49:05] So let's do this.

[00:49:05 - 00:49:13] I'm going to remove, oh sorry not that note, but this can etch.

[00:49:13 - 00:49:28] B, I'm going to remove that etch, and this is going to be the seventh note except for

[00:49:28 - 00:49:29] the above.

[00:49:29 - 00:49:32] Actually it's going to be the whole seventh note.

[00:49:32 - 00:49:38] So I'm going to keep all the notes but I'm going to remove the etch, and I can observe

[00:49:38 - 00:49:45] that the cardinality of H is tables 1, minus 1, which is here.

[00:49:45 - 00:49:50] And so I can apply my inductive hypothesis to H, correct?

[00:49:50 - 00:49:52] No.

[00:49:52 - 00:49:52] No, I cannot.

[00:49:52 - 00:49:54] This is the fairly look, right?

[00:49:54 - 00:49:56] I cannot apply my inductive hypothesis to H

[00:49:56 - 00:49:58] because of, and I have all this and I'm going a little bit

[00:49:58 - 00:50:01] faster, but if you want to be respectful of time,

[00:50:01 - 00:50:03] it matters which edge I remove.

[00:50:03 - 00:50:06] I can't just pick an edge and move it

[00:50:06 - 00:50:07] and apply my inductive hypothesis to this.

[00:50:07 - 00:50:10] What do my inductive hypothesis say?

[00:50:10 - 00:50:14] for any graph on k-note that is connected.

[00:50:14 - 00:50:15] Whenever we move an edge from g,

[00:50:15 - 00:50:19] do I know that the remaining graph is still connected?

[00:50:19 - 00:50:20] Not necessarily.

[00:50:20 - 00:50:22] Here, this is it, we removed that edge.

[00:50:22 - 00:50:26] But what if I removed this edge?

[00:50:26 - 00:50:28] My graph is no longer connected.

[00:50:28 - 00:50:31] I don't have a scaling tree for that graph.

[00:50:31 - 00:50:34] So where should I remove an edge?

[00:50:34 - 00:50:37] I can't just think of random one.

[00:50:37 - 00:50:39] From a cycle, do I know that there is a cycle in g?

[00:50:43 - 00:50:45] No, you don't.

[00:50:45 - 00:50:46] So what do you do about that?

[00:50:46 - 00:50:49] you would like to remove an etch from a cycle in G1.

[00:50:49 - 00:50:51] If you know there's a cycle,

[00:50:51 - 00:50:53] take any etch, remove it, apply that thermal there,

[00:50:53 - 00:50:55] and then you can apply your duct of apoxis,

[00:50:55 - 00:50:57] and then you can make everything work.

[00:50:57 - 00:50:58] But what should you do about this?

[00:50:58 - 00:51:00] Do you like cases of whether or not there is a cycle?

[00:51:00 - 00:51:02] You can do two cases.

[00:51:02 - 00:51:04] What happens if there is a cycle,

[00:51:04 - 00:51:05] if there is a cycle in G,

[00:51:05 - 00:51:07] then you pick an etch and you remove it,

[00:51:07 - 00:51:09] and now you can apply your duct of apoxis.

[00:51:09 - 00:51:10] If there are no cycles, what do you do?

[00:51:10 - 00:51:14] Because removing any etch will destroy the connectivity of G2.

[00:51:14 - 00:51:27] Yeah, then it's already a tree, if you can see it's no cycles, by definition, and it's a tree connecting all the nodes in G, so you've already got a spang tree, G is its own spang tree that is.

[00:51:27 - 00:51:33] That was the thing I wanted you to see, plus this, let me know if you have questions, and we'll talk about Big Oak Complexity on Wednesday.

[00:51:33 - 00:51:38] If you haven't filled out the flex, please please fill out the flex survey, I would really appreciate it.

[00:51:38 - 00:51:55] I will ask about brass, but not about trees and ponders.

[00:52:25 - 00:52:30] That's okay if they're from restaurants, they'll be able to do that.

[00:52:30 - 00:52:33] So a tree is at one commitment, right?

[00:52:40 - 00:52:42] A connected component, yeah.

[00:52:42 - 00:52:44] Go to all the different products and components,

[00:52:44 - 00:52:45] and you can find them, use them,

[00:52:45 - 00:52:47] or use them, or use them to search for them,

[00:52:47 - 00:52:48] or use whatever.

[00:52:48 - 00:52:51] And each of those is going to be connected to the unit of all of those

[00:54:21 - 00:54:29] What do you mean, if we're showing that there is a cycle in the ground, yeah, that's part of your movement.

[00:54:29 - 00:54:35] So I didn't get the chance to do it, we were actually not going to have a question until I sketched what we were going to do more,

[00:54:35 - 00:54:37] because I was going to talk a little bit about countries.

[00:54:37 - 00:54:43] There are a bunch of things, and I think it's got like five different bacteria that are in equipment to de-entry,

[00:54:43 - 00:54:45] and since you guys are here, I was starting to look in the dark.

[00:54:45 - 00:54:49] So being a tree, you know.

[00:55:19 - 00:55:21] Actually, I'm not going to set up for this.

[00:55:21 - 00:55:23] There's like no, we've already chosen them yet, yes.

[00:55:23 - 00:55:25] We'll set the brackets in the next half.

[00:55:25 - 00:55:27] So, please, no, no, no, no, no, no.

[00:55:27 - 00:55:28] There's just plus one.

[00:55:28 - 00:55:29] The graph has to be used.

[00:55:29 - 00:55:30] That's all the time, guys.

[00:55:30 - 00:55:31] All right.

[00:55:31 - 00:55:33] Wait, before we get to the next half of this,

[00:55:33 - 00:55:34] we're going to do a lot more of this.

[00:55:34 - 00:55:35] Okay.

[00:55:35 - 00:55:36] So, yeah, that's going to be a free game.

[00:55:36 - 00:55:38] How many of those cycles?

[00:55:38 - 00:55:39] Of course.

[00:55:39 - 00:55:40] I'm not going to read.

[00:55:40 - 00:55:41] Those are going to be connected.

[00:55:41 - 00:55:42] Anybody?

[00:55:42 - 00:55:43] Anybody?

[00:55:43 - 00:55:44] Anybody?

[00:55:44 - 00:55:45] Yeah, a little bit.

[00:55:45 - 00:55:49] Does it, too, on the phone?

[00:55:49 - 00:55:51] Uh, sorry, two phones a month.

[00:55:51 - 00:55:52] There are a couple of them.

[00:55:52 - 00:55:53] All of these are going to be both of them.

[00:55:53 - 00:55:55] Like, one, two, and three, all of these are going to be both.

[00:55:55 - 00:55:58] So, all apps and models are going to send a person to you.

[00:55:58 - 00:56:02] There is just a unique app.

[00:56:02 - 00:56:04] From apps to models.

[00:56:04 - 00:56:06] That is a little bit easier.

[00:56:06 - 00:56:08] Which is part of what you're proving about that.

[00:56:08 - 00:56:10] That being a tree, when you happen to go a second,

[00:56:10 - 00:56:12] is a couple of two uniqueness of a pack.

[00:56:12 - 00:56:15] If you have a cycle, that means there is more than one half bit

[00:56:15 - 00:56:16] of graphics in that.

[00:56:16 - 00:56:19] If you have a second, then okay, there might not be that.
