---
layout: post
title: My Experience in Dissertating
date: 2024-07-10 12:00:00
description: The trials and tribulations of the end of a PhD
tags: PhD Academia
categories:
---

Its two days since I've successfully defended my dissertation. Its been quite the experience. Some ups, and many downs. But, ultimately, I've made it.
I say many downs, but these are internal downs. I've been very down on this process because its so easy to be self-critical. After all, no one should know 
more about your work then yourself. You can see all the flaws, the duct tape holding things together. It may look like a house of cards at times and the 
slightest breeze will knock it all down. This is not actually the case. If your advisor has signed off and told you that you are ready to defend, you
will have a strong body of work with serious contributions. Now that I'm through it all, I can see that better, but at the time, I was looking for all
of the ways anyone could detract from my work so I was ready for my defense.

My proposal was 8ish months before my defense. I spent about 1 of those months finishing my (successful) job hunt and another month finishing teaching a class and taking time off for the holidays. 
The next 3 months were retooling a paper and testing out some of the work I proposed in my proposal. This left 3 more months to write my dissertation and running the experiments for my proposed work.
Those final three months are what I would consider as me working on my dissertation. I'm going to talk about those here. 

## The Ramp-Up
So, its April. I had just submitted the re-tooled version of the paper, and I have about half of my proposed work "done". There was still some rough edges to polish, but its more or less done.
The second half is significantly more unknown. To further complicate things, I have about three weeks before I'm moving back home to live with my parents while I wait for my lease to start in 
Minnesota, where I'll be working after I, presumably, graduate. At this point, I have not done any serious writing. As a result, I have no idea what I'm about to get myself into, so I'm feeling pretty
ok. 

<img src="/assets/img/fool.png" alt="drawing" width="100%"/>

The next three weeks were pretty eventful with life stuff, packing my stuff, saying goodbye to people, etc., but work stuff moved along pretty ok. I tried, and failed, to use existing libraries to
help do my proposed work. Eventually, I decided to do it from scratch and it was kinda working. I dug further into the papers introducing the underlying concept related to my work and realized
their notation did not match their implementation. I edited my code to match the text, not the notation, and it started working better. Remember kids, do your reading and read carefully. Once that 
was all done, it was time to move back home. Also, before I left, I scheduled my defense for July 8th, which meant I had about 3 months left to write everything and perform my experiments.

## Writing Time
So, I'm home, back at my stomping grounds. Good Ole' TP. Erm, maybe we don't call Tinley Park by its initials for a reason. I'm working out of my parents guest room. Its my first meeting since with
my advisor since I've moved and we're talking about the writing process. We're breaking down how much time I have left and what I have to write when the reality of the situation sets in. My goodness,
I have about 9 chapters to write and 10 weeks before I have to turn it in to my committee. Panic begins setting in. As the conversation continues, I start to come down. We break down how I'll do it,
start talking about a schedule, and discuss how we'll integrate feedback. While I'm still worried, my advisor is cool as a cucumber. If I had the confidence my advisor had in me, or at least appeared
to have in me, this process could've been a lot easier on me. We decide for next week, I will get him a draft of one of the chapters, as well as outline of the dissertation, and a schedule.

Now, 9 chapters in 10 weeks seems like a lot, and it is, but a decent amount of the writing was effectively done. One third of the chapters correspond to papers I had already written, so I mostly 
just needed to lift information from those, and massage it into the dissertation. Another chapter is background, which once again is mostly covered in prior work. The main work to do is the third
chapter which ties things together, and the 7th and 8th chapter detailing my proposed work. So I set off to begin. I got the first chapter done pretty easy, and with the schedule I pretty much 
know what I have to do. I'm also running some experiments in the meantime for the final two chapters which cover my proposed work.

The writing process had a pretty recognizable pattern. 

* Monday:  Attempt to start writing. Put some words down, delete them, struggle trying to put my thoughts in order, doubt my abilities, repeat.
* Tuesday: Begin thinking "WHAT AM I DOING", when the thoughts start coming and things are flowing.
* Wednesday: Continue where Tuesday left off. Things are flowing along, minor hiccups here and there, but we figure it out.
* Thursday: Finish up a draft and start editing.
* Friday: Keep editing and tighten things up.

Now do this for about 4ish weeks and you'll have the introduction, main chapter tying tying things together, and two of the three pieces of prior work done. At this point, my lease in Minnesota is ready,
so its time to move again.  

## Writing Time (But I'm living alone)
I'm now in a more permanent residence. Its an upgrade from my grad school life, but there's a lot to do. Life stuff aside, back to the grind. At this point, about half of the chapters are done and I have 
about 6 or so weeks before I need to give this to my committee. I'm on track. I continue my lovely writing regiment described earlier, but I'm not worried about getting it done. I'm worried about it being
good enough. What's also great is some of my future colleagues have been inviting me to be social and I have people that I can talk to who have been through this process. Let me tell you, they are an
invaluable resource. Not for writing tips or anything, but for people who can validate your feelings. You are not alone. Writing is a slog, odds are no one will read it, you just need it to be good enough.
This is great. I feel heard, understood, and a little more ok with the way things are going. I should say, I'm pretty confident in my writing abilities. As a result, I want my writing to be good. I have 
standards. But, since I'm going at this pace, I don't feel as confident and I'm a bit worried it isn't up to my standard. Even though my advisor tells me its looking good, I still worry. You are your own
worst enemy.

## Experiments
So, I've written basically everything that is not related to my proposed work. At this point, I need to actually run my experiments. I had set-up all of the infrastructure, but I hadn't run the full fledged
experiments. This is because I wanted to get stuff on the page, so I focused on writing what I could. I'm not great at context switching, so I didn't also work on running the experiments. I had the experiments
set-up, so it should be as easy as just hitting go and the results will turn out as you expect... right?

<img src="/assets/img/fool.png" alt="drawing" width="100%"/>

To pull the curtain back without getting into technical details, my proposed work deals with a search. I've devised two types of searches. Search A is simple but requires a lot of computation. Search B is a 
bit complicated but requires less computation. So, my hope is the Search A works, but Search B works as well or better so I can say just use search B. I run the first experiment. Search A works great, Search 
B performs worse. So, I'm starting to freak out. Things aren't going to plan, the sky is falling, AHHHHHHHH. I then talk to a dear friend who also got his Ph.D. and he talks me down the ledge. Things are ok.
Your results are still fine. Lets keep moving. I'm feeling a bit better. Its Saturday, why not get ahead of things and work on the next experiments. Saturday evening, the results come back and they are bad.
Like comically bad. Like if you were intentionally trying to do bad bad. I'm freaking out. What could I have done wrong? The first experiment worked and this is basically the same thing. I went to my friends
house to watch a TV show we've been watching, and I go to their backyard and pace while I'm talking to another friend on the phone. That night, I hardly sleep a wink. I don't know what I've done. Its awful.
Eventually, I retrace my steps, find the old code that worked, slowly integrate it in when I find the issue. It was a minor, nuanced thing, but it makes a big difference. I fix it, and what do you know,
everything works.
I perform the last two experiments and the results come back ok. I continue on, finish writing up the results and the day comes. Two weeks before the defense. I have done some editing and its time to submit 
the dissertation. Sweet relief. No I just got to make the presentation. EZPZ.

<img src="/assets/img/fool.png" alt="drawing" width="100%"/>

## Pre-Defense Limbo
So, the evening and night after I turn in my dissertation is pretty good. I'm relieved and happy to have it behind me. The next morning however is weird. Its like I'm lost and wondering whats the point.
I've spent the last 10ish weeks putting the pedal to the metal trying to get this done. And now its done. I guess I should start working on the presentation, but motivation is low. I start by taking what I
can from my proposal and re-purposing it. There is a lot there. This is helpful because it builds up the presentation, but most of it gets removed or edited before the presentation is finished. Once I start
working, I'm getting in the groove. Things are coming along and I'm feeling good. I'm working on the results slides for the proposed work when I notice and issue. I discrepancy. Its a bit in the weeds, and
it would be hard for someone to spot, but I know this work back and forth. I know what I wrote in the dissertation. Something is amiss. I delve into the data and it confirms it. In the grand scheme of things,
this issue is extremely minor, and does not invalidate any of my results, but I'm worried. I'm agonizing over this for days because I can't explain it. I have a small respite when I hang out with my friends,
but it starts digging into my brain. I can't sleep, I can't eat, I'm a mess. Monday morning rolls around (a week before my defense), when it dawns on me. I figure out what happened and it all makes sense. I can
explain this. I will have to revise a few sentences in the dissertation, but that's fine. Crisis averted.

After this, there is one more thing I agonize over, but it effectively follows exactly what I just described. It doesn't require a revision, but I'm thinking of things the committee could be take issue with.
I figure it out, run some things so I have data to back it up. It never comes up it. Thems the breaks. Its now time to fly back to Virginia and give my presentation. I've practiced it several times and I'm ready.
I land in Virginia anxious, cause why wouldn't I be. But not about the defense. I'm worried about what comes next. What am I going to work on next. I've spent the last 9ish months focusing on this work. What if
I can't think of truly new things to do. So, I go to the hotel bar, grab a beer, and think. I had an idea, but I wasn't sure if it had legs. So, I sit, I sip, and I try to unknot this idea in my brain. Its 
wonderful. I'm walking through the idea, thinking about why it could work, and I can see it. In theory, this may work. Maybe I do know what I'm doing. Maybe 5 years of training has actually prepared me for this.
I go back to my room, watch a video essay about some thing, I can't remember now and then, oh yeah I have a presentation in about 36 hours.

The next day, I wake up, grab breakfast and coffee, and then I practice. I get through my presentation and I think I've got it down pretty good. I'm off book. I do some random tasks around town and do another run 
through. I grab dinner, say some affirmations in a mirror, and then I watch a The Birdcage. Its one of my favorite. For my money, its Nathan Lane and Robin Williams at their best. The movie unfolds, things start 
to go wrong and Robin Williams says "F*** it. It's one night. I can live through it." This resonated with me like you wouldn't believe. It's one presentation. I can live through it.

The big day is here. So many anxious days and nights are behind me. I wake up and get ready for the day. I see the good people at the Seth Meyers and Lonely Island podcast have published an episode (Not a sponsor 
of this random impromptu blog BTW). What a great distraction to start the day. I go grab coffee and a muffin downstairs in the hotel lobby and listen. I sit on campus (grounds, excuse me UVA people) and have my
breakfast. Time passes and I head back to the room, get dressed and my kind labmate picks me up and drives me to the lab since its crazy hot out and I don't want to sweat through my clothes walking 30 minutes. My
advisor sent me an email earlier saying I can stop by before the defense if I want to talk about anything, so I do to say hi. We have a chat and he explains to me one more time what is about to happen. I leave,
prepare the conference room where the defense is and wait for the moment to come. People trickle in on Zoom and in the physical room. It is time.

## The Defense
To be perfectly honest, my memory of the defense is *a bit* hazy. I know it started and I felt robotic. I was repeating the lines as I had practiced them so often and I was a wondering what people are thinking.
It always has amazed me that we can be saying one thinking while maintaining a different line of thought in our brains. That's pretty cool. Eventually, someone chimes in with a question. Really a critique wrapped
in a question. Honestly, I feel like this was a test. I was able to pretty much refute their critique. The point of my dissertation is to make a general approach that can be applied to many problems. In the defense, 
I illustrate the general approach with a specific example. They question whether this contradicts the general idea with the specific approach. It does not. We can use the general approach perfectly well here, I'm
simply showing how we can tailor it to a specific problem. This was great because it built up my confidence (Hey, maybe I do know what I'm talking about), and it also knocked me out of robot mode. The presentation 
feels more fluid now.

Things go on for a while with questions being peppered throughout the presentation. There is one line of questions that is a little sticky, but its perfectly fine. Basically, they want to look at the evaluation a 
certain way that is not normally done. I concede that we could do it as they suggest, but the cost would be too high and its not how things are normally done. Eventually, we reach the end. I describe future work 
and conclude. All told, it took about 1 hour and 50 minutes because of all of the questions. Once I finish the conclusion, and get to the thank you slides where I thank my labmates, my friends, my family, and most
of all my advisor. I get a bit choked up. Then, the final round of questioning happens. Luckily, most of the questions had been had, so its pretty minor. The final question was basically "Why should this work be 
published?". This could be a very combative question, but it felt like it was being served as a softball. I was able to extol the virtues of my work. Why it matters, who it will help, it was great. I left the room.
Sat outside for about 5-10 minutes. Then, out of the room comes the head of my committee "Congratulations, Doctor" with an outstretched hand. It's over. I've done it.

## Takeaways
So, why am I writing this? Well, for people who make the questionable decision of pursuing a doctorate, this will likely be the most stressful time of their life in terms of concentration. To be honest, I hope it is
for me because I'm not sure I could take much more. Its a time full of doubt. I was not so worried about not being en expert. I know my work pretty well. My concern was always "is this enough?". Have I done enough 
work? Have I written it well enough? Is this presentation going to cover everything? The moments of respite I had were when I was distracted with the people I love or when I was talking to people who had been through
it before. Odds are, I'm not someone you love. That's ok. Odds are, I don't love you either. However, I have been through it. Will reading this make it easier, probably not. But, know you are not alone. It may feel 
very isolating, because in many ways it is. It feels like a herculean task. As my advisor said, research is hard, otherwise, everyone would do it. I suggest you talk to people who have been through it. Maybe not your
advisor, or the people on your committee. That always felt like a conflict of interest to me. But, if you've had people recently finish, they are great people to talk to. They know the struggle first hand, and they can sympathize. Your mileage may vary, so maybe test the waters first. There are some prickly academics out there.