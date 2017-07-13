---
layout: post
title:  "What you understand well, you enunciate clearly"
date: 2015-07-08 18:00:00
category: process
tags: documentation, teamwork, source control, desambiguation
comments: true
og-image: /img/posts/2015-07-08-well-understood/graphic_notetaking.jpg
credit: <a href="https://www.flickr.com/photos/deathtogutenberg/3432296447">Austin Kleon</a>
---

Nicolas Boileau was a french poet from the 17th century. This is one of his most famous quote :

> Ce qui se conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.

<!--more-->
These alexandrines can be translated by "_Whatever we conceive well, we express clearly, and words then flow with ease_". This, of course, refers to the art of writing and speaking, but what Boileau could not predict, is that his words would also be relevant in computer sciences.

![graphic notetaking](/img/posts/2015-07-08-well-understood/graphic_notetaking.jpg)

One of my current focus at work, is to get my team to explain more the code they are writing, whether it is by writing documentation or pushing commits/pull-requests with detailed messages. Actually, we even use a custom made pull-request message template to explain what we did, how we did it, and why it had been done that way (and sometimes why it had been done at all). We also encourage conversations within code reviews, instead of just error fixing.

This has multiple benefits. 

First, it provides a **more documented** codebase, which is always a good thing. 

It also help the developers to **properly truncate their task**, because pushing a commit called "various fixes and optimization" is not an option anymore (yes, we all did it at least once, their is no reason to be ashamed of it ... unless of course you are still doing it ! ). 

Another upside is that your peers will **start reviewing your code knowing what it contains**. This can prevent a lot of headaches trying to figure out what you are actually reviewing. 

And last but not least, as Boileau stated, if you want to properly explain your code, **you will first have to understand it**. This can sound stupid, because if you wrote it, you should understand it. But we all had our share of copy/pasted tutorials, blindly followed best practices, anti-patterns or simply "bad code" we write on a shitty day. By trying to explain what we did and why we did it that way, we can easily spot this kind of bad code, and fix it. (This is quite close to [rubber duck debugging](/debugging/2015/02/24/talk-to-a-duck.html)).

So please, next time you implement a sophisticated architecture, a complex algorithm (or ideally, anytime you push code), try to answer these 3 simple questions : **what ? how ?** and **why ?** Chances are this might be enough to improve your code.
