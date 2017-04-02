---
layout: post
title: "CASL's Anti-Malware Provisions and Online Behavioural Advertising"
date: 2017-04-02
---

A lot has been written in the last couple years about [Canada's Anti-Spam Legislation (CASL)](http://laws-lois.justice.gc.ca/eng/acts/E-1.6/FullText.html). Much of this writing has focused on the impact the legislation will have for companies involved in the sending of commercial electronic messages (CEMs), such as e-mails and text messages. But the legislation also prohibits malware. And it is here where businesses that profit primarily from the collection and marketing of user data should pay close attention.

### CASL's Anti-Malware Provisions

Section 8(1) of CASL prohibits a person from, in the course of a commercial activity, installing or causing to be installed "a computer program on any other person’s computer system or, having so installed or caused to be installed a computer program, cause an electronic message to be sent from that computer system, unless" the person has obtained "the express consent of the owner or an authorized user of the computer system and complies with subsection 11(5) (the withdrawal of consent provision)".

The statute provides that a "computer program" shall have the same meaning as that in section 342.1 of the *Criminal Code*: "computer data representing instructions or statements that, when executed in a computer system, causes the computer system to perform a function".[^Criminal Code, R.S.C., 1985, c. C-46, s. 342.1.] 

A person is deemed to "expressly consent to the installation of a computer program" if:

> (a) the program is

> > (i) a cookie,

> > (ii) HTML code,

> > (iii) Java Scripts,

> > (iv) an operating system,

> > (v) any other program that is executable only through the use of another computer program whose installation or use the person has previously expressly consented to, or

> > (vi) any other program specified in the regulations; **and**

> (b) **the person’s conduct is such that it is reasonable to believe that they consent to the program’s installation.**

The implication here is that a cookie or JavaScript code is in fact a kind of computer program for the purposes of the CASL. However, as computer programs, they are of a type to which there is deemed express consent, unless it can be shown that it is not reasonable to believe that the user consented to the program’s installation.

### Application to Web Tracking and Online Behavioural Advertising

Many first party content publishers and third party advertising networks use cookies and JavaScript code to track visitors for various purposes. 

Increasingly, the ad tech industry is moving away from more benign cookies towards newer "fingerprinting" techniques that leverage actual JavaScript code to  track users with unique identifiers across browsers and devices.

These newer fingerprinting techniques rely on JavaScript code that runs quickly in the background and instructs browsers to perform a variety of tasks to learn more about a user's device properties. Very few devices are configured identically. Accordingly, these device configuration properties can be mapped to create a unique identifier for a user (thus the term 'fingerprinting'). 

The tasks run by fingerprinting scripts draw on operating-system and hardware resources, including graphics cards, multiple CPU cores, audio cards, and installed fonts—that are slightly different for each computer. Some properties such as IP address, operating system, user agent, language and HTTP accept headers, can be passively learned from network traffic. But other properties like CPU type, time zone, display settings and installed fonts, require active discovery through a script or plug-in.

Steven Englehardt and Arvin Narayanan's comprehensive 2016 research into online tracking shows that many third party advertisers are using such device fingerprint techniques and in some cases using JavaScript code to abuse the new HTML5 APIs such as the Battery Status API and the Audio API for device fingerprinting.[^2]

CASL establishes a kind of strict liability for installing malware on a user's machine, subject to a test in the case of JavaScript code and cookies regarding the reasonableness of inferring that a user consented to the installation. 

In many cases, users are not made aware of JavaScript code being run to assist in device fingerprinting by first party content publishers or third party advertisers. Indeed, most privacy policies on first party sites do not even communicate who the third party advertisers are, the nature of the tracking technologies they are using, or the details of the third party privacy policies, which may be altogether different than those of the first party content publisher. In these circumstances, the reasonableness of inferring user consent to the installation of JavaScript tracking code becomes far more debatable, opening companies up to liability for installing or "causing to be installed" a computer program on a user's computer system without the user's express consent.

### The Coming Private Right of Action

As of July 1, 2017, individuals and organizations will be entitled to institute a "private right of action" before the courts against those that contravene certain provisions of CASL, including the anti-malware provisions.[^3]

The court may order compensation equal to the amount of loss or damages suffered and expenses incurred ("compensatory damages"), in addition to $200 for each contravention, up to a maximum of $1,000,000 per day of contravention ("non-compensatory damages").[^4]

First party content providers and third party advertising publishers will want to look carefully at their current privacy policies and terms of service before July 1, 2017 to ensure that it can be reasonably inferred that users of their site, or targets of their tracking, have consented to the installation of any cookie or javascript code used for web tracking or online behavioural advertising.

-----

[^1]: See [http://laws-lois.justice.gc.ca/eng/acts/E-1.6/FullText.html](http://laws-lois.justice.gc.ca/eng/acts/E-1.6/FullText.html)
[^2]: Steven Englehardt and Arvin Narayanan, "Online Tracking: A 1-million-site Measurement and Analysis", presented at the Association for Computing Machinery Conference on Computer and Communications Security 2016, [https://webtransparency.cs.princeton.edu/webcensus/](https://webtransparency.cs.princeton.edu/webcensus/)
[^3]: CASL, at ss. 47 to 51, 55.
[^4]: CASL, ss. 51(1) CASL.