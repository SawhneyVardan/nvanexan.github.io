---
layout: post
date: 2016-08-03
title: "User Registration and the Enforceability of your Terms"
category: "litigation"
excerpt: "A recent U.S. District Court decision regarding the enforceability of Uber’s Terms of Service has given new fire to the clickwrap / browsewrap / enforceability of terms of service issue. If you’re designing a user registration system for your new app, you should read on."
description: "A recent U.S. District Court decision regarding the enforceability of Uber’s Terms of Service has given new fire to the clickwrap / browsewrap / enforceability of terms of service issue."
---

### The Case in a Nutshell

The case, [Meyer v. Kalanick, 2016 WL 4073012 (S.D.N.Y. July 29, 2016)](https://dlbjbjzgnk95t.cloudfront.net/0823000/823375/https-ecf-nysd-uscourts-gov-doc1-127118619239.pdf), began as an antitrust case against Travis Kalanick, the founder of Uber. The Plaintiff alleged that Mr. Kalanick “orchestrated and participated in an antitrust conspiracy.” Uber successfully intervened in the case. It then sought to force the case out of the courts and into private arbitration, as required under its Terms of Service. But the Court denied the motion to compel arbitration, finding fault with Uber’s contract formation process.

The key facts regarding Uber’s registration / sign-up flow are as follows:

- the user had to input their payment details, then “register” to form an account
- the text under the “register” button stated: “By creating an Uber account, you agree to the Terms of Service and Privacy Policy.”
- the terms of service and privacy policy were links
- clicking on each link brought the user to another screen where they were then required to press another button to access the terms

The Plaintiff stated that he did not recall the hyperlinks and did not click on them. These facts were not disputed.

The Court held that Uber’s registration process did not result in a legally binding contractual agreement because it did not require the user to affirmatively click any back, positively giving his consent / agreement to the terms of service. Specifically, the Court held:

> Here, the User Agreement to which plaintiff Meyer allegedly assented was clearly not a clickwrap agreement. Mr. Meyer did not need to affirmatively click any box saying that he agreed to Uber’s “Terms of Service.” On the contrary, he could sign up for Uber by clicking on the “Register” button without explicitly indicating his assent to the terms and conditions that included the arbitration provision. See Mi Deel., Exhibit A, at 002. As with a browsewrap agreement, an Uber user could access Uber’s services “without visiting the page hosting the browsewrap agreement or even knowing that such a webpage exists.” .

The decision is something of an outlier, but it raises the question: how do you design a user registration flow that will ensure your terms of service will be enforceable? Is an unambiguous manifestation of assent all that’s needed? Or should the user also be required to scroll through your terms of service before registering with your application?

### Practice Points for UX Designers

Generally, you have three options on a scale of most legally risky to least risky when implementing a user sign-up process:

- **Most risky:** add a register button, with a link to terms of service below that does not require the user to positively assent to having read the terms (what Uber did);

- **Middle risky:** build a system where a user must expressly assent to the terms, which are linked, which gives evidence of their understanding they are entering into a contractual relationship and thus giving up rights; or

- **Least risky:** design a system whereby the user is required to scroll through the terms of service before they can even give such assent (as iTunes does), thereby weakening arguments that the user did not know — or could not have known — about the content of the terms / rights being bargained away.

Many UX designers will be tempted to choose the former, as it creates less friction and allows for easy sign-up. That’s super cool. And we users will thank you for that. Courts may, too. Courts have in fact upheld contractual relations in all 3 scenarios.

The problem, though, from a practical point of view, is that you always run the risk of a sympathetic judge in a sympathetic case looking for ways to not enforce onerous clauses, as happened in this case. If you’re at all concerned about the enforceability of your terms, you should be striving to implement at least option 2, which is generally seen by most courts as good enough.

Whether you move to a model / design like option 3 will depend in part on your tolerance for risk and the nature of your product. If your app has business / corporate users, the inconvenience of forcing them to scroll past terms of service before registering is likely less of an issue. If it’s a consumer product, you’ll have to think more carefully about what you’re giving up to improve the UX of your on-boarding flow. If one of the things you might be giving up is a mandatory arbitration clause that kills the possibility of class actions, this is a fairly big concession, and one that might be worth the burden of a more cumbersome UX.
