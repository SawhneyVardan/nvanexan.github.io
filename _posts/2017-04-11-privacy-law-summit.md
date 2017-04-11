---
layout: post
date: 2017-04-11
title: "Reflections on the OBA Privacy Law Summit 2017"
category: "privacy"
excerpt: "The Ontario Bar Association ('OBA') held its annual Privacy Law Summit last week. Here are a few of my  observations and take-aways from my attendance."
description: "The Ontario Bar Association ('OBA') held its annual Privacy Law Summit last week. Here are a few of my observations and take-aways from my attendance."
---

The OBA held a fantastic privacy law conference last week. The panels were timely and divided evenly into business law and health law topics. I attended the business law program. Among the many issues discussed and debated during the conference, there were several recurring themes:

- privacy by design and the role of privacy pros in the software development lifecycle;
- the privacy complexities of data analytics;
- the interplay between regulatory investigations and litigation;
- CASL and the privacy challenges for mobile tech; and
- the illusory pursuit of meaningful privacy policies

My thoughts and some of the key take-aways in respect of these themes are set out below.

### Privacy by Design - Where are the Privacy Pros?

[Dr. Ann Cavoukian](http://www.ryerson.ca/pbdi/about/people/cavoukian/) (Executive Director, [Privacy and Big Data Institute, Ryerson University](http://www.ryerson.ca/pbdi/)) spoke about her ["privacy by design" framework](http://www.science20.com/newswire/landmark_resolution_passed_preserve_future_privacy) and how organizations can be more successful if they incorporate privacy into the design and development of their applications and internet-connected devices early in the process. Significantly, Dr. Cavoukian mentioned that in her experience the failure of companies to incorporate privacy by design was not so much a failure of engineering but rather a failure at a broader organizational level to properly set a company's privacy ethos and define the appropriate privacy requirements for engineers.

Dr. Cavoukian's comments are interesting because many hold the opposing view: that engineers or technologists are often unwilling or unable to implement features in a privacy-preserving way.[^1]

As an engineer and a lawyer, I found Dr. Cavoukian's comments more reflective of my actual experience helping teams at large software companies implement features. Engineers can literally build anything given the requisite time, money and resources. But it's up to the product owners and product managers to define the requirements of what the engineering teams build. If a company's legal counsel, chief privacy officer or data protection officer aren't actively communicating privacy requirements to the product managers and owners, their efforts to protect the company will likely amount to naught.

**The key take-away here is that privacy professionals can't operate in silos. They need to work directly with the teams that are building out new features of an application to ensure that privacy-related requirements are being embedded in the user stories the engineering teams are implementing.**

One thought experiment would be to [consider what Spotify and others are doing](https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/) to organize themselves into 'squads'.[^2] Just as modern software teams typically have representatives from design and UX on a feature team, who also work with a broader design team, perhaps so too should privacy pros provide support to each feature team at the beginning of a design sprint. This would likely produce more privacy by design, and more successful privacy-related outcomes.

### The Privacy Complexities of Data Analytics

Pamela Snively, Counsel at Telus, spoke about the challenge of using the telecom company's vast reservoir of data that it collects from mobile subscribers to create new products, provide new services and compete in other markets. Ms Snively spoke about concerns of data re-identification and her company's efforts to build a de-identification centre of excellence.

The issue surrounding re-identification of user data and the realities of that threat surfaced during the panel.  It's a timely topic. Data re-identification can occur in many ways and even with hashed data sets or data sets that reveal what is typically regarded as public information. In [a recent study](http://randomwalker.info/publications/browsing-history-deanonymization.pdf), for example, researchers at Stanford and Princeton succeeded in identifying 72% of users by comparing their web-browsing history to publicly available information on social networks.[^3] Specifically, the researchers found that it was possible to reattach identities to 374 sets of apparently anonymous browsing histories to social media profiles on Twitter, Facebook, or Reddit accounts. They observed that most users subscribe to a distinctive set of other users on a social media service. Since users are more likely to click on links posted by accounts that they follow, these distinctive patterns persist in their browsing history. A third party can therefore de-anonymize a given browsing history by finding the social media profile whose "feed" shares the history’s idiosyncratic characteristics.

The debate about re-identification and de-identification, and whether de-identification is a "use" of information for which additional consent is required under PIPEDA, quickly devolved into a debate about whether Telus should be hindered in its use of information to do other meaningful things, which of course is not the point. The point is consent. No one's saying Telus can't use data to build other helpful products and services. But it must have the appropriate meaningful consent to use the data in the way that it wants. Getting that express consent can be a challenge, but it's not something that should be taken lightly.

It's funny how quickly these kinds of conversations devolve into an argument about barriers to innovation. But I digress...

**The key take-away here is that companies should take the risk of re-identification of personal information seriously and work like Telus to make the de-identification of user data a primary concern within the organization. At the same time, companies should not assume that simply because they have collected a vast well of de-identified user information that they can do whatever they like with it. The issue always comes back to consent to use, and you have to make express consent to use a similarly important pillar of your personal data handling efforts.**

### The Interplay Between Regulatory Investigations and Litigation

There was a great panel on regulatory investigations by the Office of the Privacy Commissioner and the increase in class action litigation in the privacy law area, particularly following the Ontario Court of Appeal's decision in [*Jones v. Tsige*](https://www.canlii.org/en/on/onca/doc/2012/2012onca32/2012onca32.html).

The key take-aways on this topic were:

- class action litigation in the privacy area is just getting started and you can expect a lot more on the horizon as CASL's private right of action comes into force this year and PIPEDA's mandatory breach notification requirements come into force next year;
- privacy class actions are almost universally being certified because of the novelty of the issues involved;
- regulatory investigations are also likely to increase in scale and scope with the legislative changes under CASL and PIPEDA; and
- your company should have in place a number of privacy-related practices (such as privacy impact assessments, breach response policies, etc.) that can be used as evidence of a kind of 'due diligence' in the event you suffer a data breach or are the subject of a regulatory investigation - these can help reduce liability if (when?) your organization suffers a cybersecurity breach.


### CASL and the Privacy Challenges for Mobile Tech

[Daniel Glover](https://www.mccarthy.ca/lawyer_detail.aspx?id=6000) of McCarthy Tetrault gave a great talk on CASL and the privacy challenges for mobile apps. While his presentation focused mostly on the issue of commercial electronic messages (CEMs), he mentioned as well the issues arising from the legislation's anti-malware provisions.

Section 8(1) of CASL prohibits a person from, in the course of a commercial activity, installing **or causing to be installed** "a computer program on any other person’s computer system or, having so installed or caused to be installed a computer program, cause an electronic message to be sent from that computer system, unless" the person has obtained "the express consent of the owner or an authorized user of the computer system and complies with subsection 11(5) (the withdrawal of consent provision)".

In the mobile app world, the risk of being unable to demonstrate express consent for an application installed on a device is somewhat tapered by the fact that a user has to manually agree to install the application onto its phone. However, Mr. Glover noted that many companies only include terms and conditions in the information about their apps that appear before download, and both Google and Apple app stores are wanting in their calling to user attention the terms of your privacy policies.

**The key take-away here is that mobile app developers should always include their privacy policy along with their terms and conditions in their app's app store description and do as much as possible to evidence the explicit consent required for the installation of a computer program on a device. Do your best to get consent within the constraints of the app store platform.**

Significantly, no one at the conference discussed the impact of s. 8(1) for web apps that have an advertising or analytics component that involves tracking users via cookies or JavaScript. My prediction is that ad-tech companies as well as first party content publishers inadvertently causing third party ad-tech companies to install malware on user devices will be feeling some heat from this provision once the private right of action comes into force this summer. Time will tell.

## The illusory pursuit of meaningful privacy policies

A final theme of the conference was "Privacy Policies of the Future". The discussion focused on companies that the panel thought were doing privacy policies right and wrong, and what the future of privacy policies might look like.

The discussion was very much focused on web apps and failed to really explore the implications of IoT and the implications of devices like Google Home or Amazon Echo that may collect and use personal information about individuals within range who did not purchase the product and therefore did not read or ever assent to the privacy policy that may have come with the device.

The discussion also highlighted an enormous amount of confusion, even among experts, regarding sufficiency of notice and consent even to privacy policies included as part of a web site or web app.

**The key take-away for me was that privacy policies are increasingly problematic artifacts of consent as novel uses of technology outpace methods for bringing the terms of the privacy policies to the attention of individuals navigating an IoT world. While many counsel seem focused on the readability of privacy policies, similar attention and effort should be devoted to ensuring that consent to such policies is meaningful, which requires, firstly, greater consideration of how your privacy policies are made visible / known.**

Given the wave of privacy class action litigation that is likely to come in the next few years, counsel would do well to review and focus on improving the language and visibility of their privacy policies.

---

[^1]: See, for example, Ari Ezra Waldman's paper, "Designing Without Privacy", [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2944185](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2944185)

[^2]: See [https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/](https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/)

[^3]: Jessica Su, Sharad Goel, Ansh Shukla and Arvind Narayanan, "De-anonymizing Web Browsing Data with Social Networks", [http://randomwalker.info/publications/browsing-history-deanonymization.pdf](http://randomwalker.info/publications/browsing-history-deanonymization.pdf); Martin Andersen, "72% of ‘anonymous’ browsing history can be attached to the real user", [https://thestack.com/security/2017/02/07/72-of-anonymous-browsing-history-can-be-attached-to-the-real-user/](https://thestack.com/security/2017/02/07/72-of-anonymous-browsing-history-can-be-attached-to-the-real-user/).
