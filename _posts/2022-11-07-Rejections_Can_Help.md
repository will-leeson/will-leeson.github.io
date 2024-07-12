---
layout: post
title: Rejections Can Help
date: 2022-11-07 12:00:00
description: Sometimes its good not to succeed on the first try
tags: PhD Academia
categories:
---

I recently had my first paper rejected. Well, 4 months ago, so somewhat recently. And technically I had submitted a journal paper before this one, but I hadn't heard back from them until after this. The rejection was relatively surprising. My advisor and our collaborator were both pretty happy with our results and confident that we had a good paper on our hands. I got the results around 6 or so. I had just finished playing basketball at the gym, so my phone was in a locker when I got the email. I read the email and saw the dreaded "We regret to inform you...". Most conferences have a rebuttal phase, allowing the authors to push back on a reviewers gripes or answer their questions, but this conference did not. This was the final say. It stung pretty hard at the time, but within a few days I was over it and ready to update the paper and resubmit it. With this behind me, I thought it would be a good time to talk about the experience and what I had learned.

## Background
The subject matter of the paper is not very important, but it might simplify things to give a brief description of what we're trying to do in this paper. There is a fundamental problem in computer science called [Boolean Satisfiability](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem), often called simply the SAT problem. The point of the problem is to determine if a formula consisting of boolean values (a collection of true or false values) is true or false as a whole. If you do not know the SAT problem, the wikipedia page has a good introduction to it. 

The SAT problem is limited to boolean values, but what about numbers? or lists of numbers? or even words? Well, thats where [Satisfiability modulo theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories), or SMT, comes in. SMT allows you to write formulas in different "theories". For example, the theory of Linear Integer Arithmetic allows you to solve formulas dealing with integers (whole numbers) that are linear (addition, subtraction, multiplication, division, but no powers or anything wonky like that). You can solve these things by hand, but, as with most things, computers can do it faster. To do so, there are tools called "SMT Solvers". Given a formula, or query as they call them, and a theory, the SMT solver will return 1 of 3 responses: SAT (there is a solution), UN-SAT (there is no solution), or Unknown. 

You may ask yourself, what does this matter? So you can solve a formula, my excel spreadsheet can do that too. Fair enough. Solving a problem for the sake of seeing if there is a solution is not that important (to some people). However, these tools come in handy in software engineering (SE). Often times, SE tools will take the problem they are trying to solve, rewrite it as a SMT query, and then the SMT solver tells them if its SAT or UN-SAT. 

The thing is, there are many different SMT solvers and they are built using different techniques. There are many ways to skin the SMT cat. So, which one should I use? This is precisely the problem we are trying to solve. I do not consider myself an SMT expert, but I know someone who is, and he told me its not always easy to tell which solver you should use. So, we created a tool, called [Sibyl](https://en.wikipedia.org/wiki/Sibyl), which chooses for you. We compared it against other tools that do this, and we were able to select tools better than them. So much better, that we were 63% faster than them. This is a sizeable improvement.

## The Reviews
With this marked improvement, I felt pretty confident that the paper would be accepted. However, the reviewers did not feel the same. There were three common points the reviewers made:
1. You did not compare to all related work
2. This is more of an empirical paper
3. Your technique is slow

For the first point, there were two related tools they wanted us to compare against, [Medley Solver](https://github.com/uclid-org/medley-solver) and a different [unnamed tool](https://ieeexplore.ieee.org/abstract/document/9643296). Medley Solver is a fair point. Its available and performed relatively similarly to [MachSMT](https://github.com/MachSMT/MachSMT), the tool we did compare against. The unnamed tool, however, had no available implementation, so we had no way to compare against it.

For the second point, when I say slow, I mean any benefit we were seeing was being eaten away by the slowness. I had seen this coming. We tried to curtail this complaint by saying "This is a proof of concept. It can definitely be faster if we spent time optimizing it", but the reviewers did not buy it.

In hindsight, I agree with their third point. The description of our experiments and our results were roughly 60% of the paper. The approach section, which described the research contributions, was not even 10% of the paper. This was supposed to be a research paper. There were research ideas in the paper, but I was rather concise in my description. Strong, empirical results are great, but you want there to be a good explanation for what you did, why you did it, and why it worked. We were lacking in all three.

So we had three actionable items:
1. Compare to Medley Solver, explain that you can't compare to the unnamed tool
2. Prove that you can make it not be slow
3. Dedicate more of the paper to explaining decisions we made

There was a deadline in about a month and a half that we wanted to hit. Since we were starting with a complete paper, this wasn't too bad. I've definitely heard of worse situations to be in.

## The Revision
Step 1 was pretty simple. Medley Solver ran pretty easily and we could collect our results. From there, we could plug it into our table. What we found was a little surprising. They did not do very well, but there were some pretty clear reasons as to why this was the case, which we outlined in our new submission.

Next was dealing with the efficiency, or inefficiency, of Sibyl. I built this tool using Python. Python is great for many things, but it is not always the most efficient. The bigger problem was the Python library I was using. For non-CS people, a library is a pre-written program that provides functionality for different problems. In this case, I was using the library pySMT, which allows you to do things with SMT formulas. Because I was using this library, I was at the mercy of its efficiency. In general, 90% of the queries we're looking at take less than 1s to solve, but the remaining 10% take account for 90% of the time spent. Let me be clear, pySMT is a great library with tons of fantastic functionality, but Python is not where you go for lightning fast speed. For speed, we turn to C and C++. As I expected, once it was written in C++, Sibyl sped up incredibly. It went from taking on average 0.8s per query to 0.012s. 

Finally, I needed to revamp the explanation of the technique. This was a bit of a struggle. I didn't want to simply pad the paper with unnecessary information. There needed to be substance. We have a 10 page limit after all. In some ways, the approach section read like someone recounting each component to our technique and their mechanics, but there wasn't much explanation as to why each component needed to exist. What did it add? When you get into a subject deeply, you can tend to forget what it was like not to know something. You don't feel the need to explain your moves, because they seem obvious. So, I had to take a step back and explain how each component helped improve the technique.

What was lacking that I wasn't showing the difference between existing techniques and Sibyl. To me, the difference was obvious. The whole approach was the difference. However, I wasn't explicit in showing how this difference mattered. So, I had to take a step back and think "where does the power lie in Sibyl that is absent elsewhere". Sibyl maintains a more faithful representation of a query, while previous techniques try to summarize it using statistics. For example, take the formula "x+3/x-2=5". The competitors could describe this as "There are three constants, two variables, a division, an addition, and a subtraction". This doesn't tell you how these things interact. Sibyl can say "A constant is divided by a variable. This value is added to the same variable. This value is then subtracted by a constant. This whole value is equal to a constant". Sibyl is operating a more descriptive model of the problem, allowing it to learn more about it.

With this in mind, I added some more detail into the paper. When I was describing previous techniques, I made sure to describe how their descriptions weren't expressive enough. When describing Sybil, I emphasized what it can capture. This helped hammer home the value Sybil added. 

## In Summary
This may sound like rationalization, but as much as it stunk at the time, I am grateful the first version of this paper got rejected. In all honestly, I still think it was good enough to be accepted last time. I've definitely read worse at similar venues. But I think the paper has gone from having good merit and a fine description to having good merit and a great description. What really helped was the time between the initial submission and the rejection. I was able to look at it with fresh eyes and be more honest with myself. So, yeah. It stinks to get a rejection on a piece of work you think is good, but take it as an opportunity to revaluate it and try and improve it. This is fairly generic advice, but it has rung true to me. It may mean more once you've gone through it.

Also, this paper just got accepted and will appear at ICSE 2023. 

Update: It also received a best paper award.