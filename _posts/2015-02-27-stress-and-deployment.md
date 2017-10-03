---
layout: post
title:  "Removing stress in production deployment"
date: 2015-02-27 09:00:00
category: production 
tags: stress, deployment, quality
comments: true
author: "Cédric Spalvieri"
header-img: /img/posts/2015-02-27-stress-and-deployment/space-shuttle-discovery-on-launch-pad.jpg
credit: Dennis Biela, Lightspeed Media, LLC, courtesy of NASA
---
One particularity of the digital agencies like the one I work for is the opportunity to work on very different kind of project, with very different kind of business.
The one I'm going to talk about today is a mobile application we recently had to develop for a multinational group.

These are often very instructive projects but they also are sometimes very tricky.
Those kind of client generally have good skills in project management fields, but they can be a real pain when it comes to the IT department.
<!--more-->

Let's for instance walk through the deployment process of the foregoing application.

- First, we have to agree with the product manager that we have a version ready for distribution ;
- the project leader then asks an offshore subcontractor to start a deployment process ;
- after a document filled with information about the new version is provided, the subcontractor opens some kind of deposit box ;
- we build the application binary with a specific secure certificate (previously provided) and send it to the subcontractor ;
- the subcontractor submit the application to the App Store for review, before going live ;
- if the application is rejected (shit happens), we are warned by the subcontractor, we will then restart the process from the beginning (because the deposit box has a lifespan of 3 days).

With all these processes, the deployment can take a whole day (plus the Store validation).

Don't get me wrong, security is important, especially when working (like this particular client) with very sensitive data.
And even if this some application are not sensitive at all,
there should not be a two-speed system, where some deployments would require a lower security level.

However I couldn't help but notice how much **stress** was induced when we had to publish a change as irrelevant as a *mailto* button.

> **Managing stress is crucial when deploying a computer program.**

We often speak about automated testing, code reviews, continuous integration servers and other tools as **quality tools**.

These tools are not only here to deploy clean code faster, they also provide **relief**. When a developer does not have to think to much about the problems that might occur during the deployment,
he can be more focused on the task at hand. If you've ever edited a website via FTP in production (the good old days),
you know what I'm talking about. (If you're still _voluntarily_ doing it, please find another job). 

When trying to provide a good environment to developers, removing stress is a key point. 
Deployment as a source of stress should not be taken lightly then.
  
There's an old commandment among developers : "_Thou shalt not deploy to production on a Friday_". I think that you can say you have achieved
stress-free deployment when you can publish serenely everyday, especially on fridays.

> **But beware, doing stress-free deployment is not (nor it should be) responsibility free deployment ! It's more about removing as much friction as possible.**