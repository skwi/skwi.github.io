---
layout: post
title:  "Removing stress in production deployment"
date: 2015-02-27 09:00:00
categories: production 
tags: stress, deployment, quality
comments: true
image: /assets/article_images/2015-02-27-stress-and-deployment/space-shuttle-discovery-on-launch-pad.jpg
credit: Dennis Biela, Lightspeed Media, LLC, courtesy of NASA
---
One particularity of the digital agencies like the one I work for is the opportunity to work on very different kind of project, with very different kind of business.
The one I'm going to talk about today is a mobile application we recently had to develop for a multinationnal group.

These are often very instructive projects but they also are sometimes very tricky.
Those kind of client generaly have good skills in project management fields, but they can be a real pain when it comes to the IT department.

Let's for instance walk through the deployment process of the foregoing application.

- First, we have to agree with the product manager that we have a version ready for distribution ;
- the project leader then asks an offshore subcontracator to start a deployment process ;
- after a document filled with information about the aplication is provided, the subcontractor opens some kind of deposit box ;
- we build the application binary with a secure certificates (previoulsy provided) and send it to the subcontractor ;
- the subcontractor submit the application to the App Store for review, before going live ;
- if the application is rejected (shit happens), we are warned by the subcontractor, we will then restart the processs from the begining (because the deposit box has a lifespan of 3 days)

Don't get me wrong, security is important, especialy when working (like this particular client) with very sensitive data.
Even if this application is not sensitive at all,
there should not be a two-speed system, where some deployments would require a lower security level.

However couldn't help but notice how much **stress** was induced when we had to publish a change as irrelevant as a contact form email.

> **Managing stress is crutial when deploying a computer program.**

We often speak about automated testing, code reviews, continuous integration servers and other tools as **quality tools**.

These tools also provide **relief**. When a developper does not have to think to much about the problems that might occur during the deployment,
he can be more focused on the task at hand. If you've ever edited a website via FTP in production (the good old days),
you know what I'm talking about. (If you're still _voluntarily_ doing it, please find another job). 

When trying to provide a good environment to developpers, removing stress is a key point. 
Deployment as a source of stress shoud not be taken lightly then.    

> **But beware, doing stress free deployment is not (nor it should be) responsibility free deployment ! It's more about removing as much friction as possible.**