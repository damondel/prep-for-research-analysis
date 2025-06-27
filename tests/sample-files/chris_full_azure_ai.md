---
title: Complete Azure Arc Interview - Shutterfly IT Discussion
created: '2025-06-27T18:39:22.534Z'
content_type: transcript
tags:
  - transcript
  - interview
  - azure-arc
  - vmware
  - hybrid-cloud
  - shutterfly
  - broadcom
  - transcript
  - azure-ai-foundry
azure_ai_foundry:
  ready: true
  format_version: '1.0'
---

# Transcript

## Speaker Key

- (DM): [Speaker anonymized]
- (CS): [Speaker anonymized]
- (JP): [Speaker anonymized]

---

**(DM):** I I know that you feel that a Screener, but I'm wondering if you could tell me a

**(DM):** little bit about maybe you know where your work,

**(DM):** your role and then what types of environments exist within your kind of

**(DM):** organizations, hybrid inventory?

**(CS):** Sure. So with Shutterfly.

**(CS):** The.

**(CS):** The tech stacks that I manage include.

**(CS):** Enterprise backup, storage, virtualization, Linux.

**(CS):** Hundreds of Dell physical servers.

**(CS):** And then I collaborate with and work with the cloud teams to obviously to for our

**(DM):** Hmm.

**(CS):** secondary and tertiary backup solutions, right?

**(CS):** AWS 3 glacier.

**(CS):** It's pretty much it.

**(CS):** So a lot of operating systems team about 12 people.

**(DM):** OK, cool.

**(DM):** And.

**(DM):** Let's see what what are the I think you mentioned in your Screener that you at

**(DM):** least played around with Azure Ark.

**(DM):** Is that something that you've you've spent some time with?

**(DM):** And I'm gonna, if that's the OK. Do you mind telling me a little bit about

**(CS):** I have.

**(DM):** what drove your explorations with with arc?

**(CS):** So just looking for.

**(CS):** I guess better ways to manage data and services.

**(DM):** Hmm.

**(CS):** On virtual machine bits, there's a whole bunch of components

**(CS):** within ARC that I'm interested in.

**(CS):** I inherited a lot of redundancies.

**(CS):** And a lot of.

**(CS):** Well, not the most efficient systems ever. So looking to leverage.

**(DM):** Mm hmm mm hmm.

**(CS):** Arc towards managing the VM realm I have.

**(DM):** Hmm.

**(CS):** We have thousands of VM servers right now.

**(DM):** Mm hmm.

**(CS):** We're Broadcom shop, so we're on VM Ware.

**(CS):** We're looking to migrate off of that on the Hyper V so as we do that,

**(CS):** obviously looking at deeper into the into the Microsoft Tech STACK solutions and

**(DM):** Hmm.

**(CS):** ways to manage it obviously.

**(DM):** OK, great.

**(DM):** Perfect. Let's see.

**(DM):** How do you remember how arc first came to your attention?

**(DM):** Is a possible solution for helping you to to manage all the stuff within your

**(DM):** within your inventory.

**(CS):** So.

**(CS):** When I first inherited the VM realm, you know V Center V sphere,

**(CS):** all the clients just looking to to figure out how to more effectively manage it.

**(CS):** I've got a really.

**(DM):** Mm hmm.

**(CS):** I've got a really small team, so leveraging tool sets to, you know,

**(CS):** provide.

**(CS):** Efficiencies and and access and management and all those things,

**(CS):** looking at looking at improving day-to-day operational steps.

**(CS):** So any way that we can get in and manage those resources better is is a good thing.

**(CS):** Plus like I said, as we first started talking about it.

**(CS):** With our the VM Ware world here is.

**(CS):** Not huge. You know, from an enterprise perspective,

**(CS):** we're not monstrous. We got thousands.

**(DM):** Mm hmm.

**(CS):** Not 10s of thousands or hundreds of thousands of instances,

**(DM):** Mm hmm.

**(CS):** but with Broadcom changing their their their structure, right? Everybody knows.

**(DM):** Right, yeah.

**(CS):** Everybody knows.

**(CS):** Broadcom got really pretty stupid.

**(CS):** And they changed.

**(CS):** They changed their licensing structure too.

**(DM):** Mm hmm.

**(CS):** Forcing companies like us into things.

**(CS):** Is that we don't need fully loaded licenses that we may use 10% of you know

**(CS):** what's available, so.

**(CS):** That I think managing our existing VM and then when looking at Hyper V and looking

**(CS):** to get deeper into the the Microsoft stack,

**(CS):** that's what really drove my curiosity about Ark.

**(DM):** OK.

**(DM):** Great, that's that's perfect.

**(DM):** Thanks for that response. As you started to play around with arc

**(DM):** and he was trying to kind of evaluate whether or not it was going to help you

**(DM):** in some of those things that you were looking to optimize.

**(DM):** What were you using to as criteria to sort of evaluate its utility for you

**(DM):** specifically?

**(CS):** So when I start messing around with new tool sets or looking at other resources,

**(DM):** Mm hmm.

**(CS):** I just I go in kind of blindly.

**(DM):** Mm hmm.

**(CS):** Yeah, I like.

**(CS):** I like to not know sometimes a lot about the solution.

**(CS):** When you start to play with it, because that forces a deeper level of.

**(CS):** Research, if you will.

**(CS):** I mean it digging into hey, what does this do and how can I better

**(CS):** leverage it? And you know the Kubernetes and and the

**(CS):** managing hybrid assets, right, because a lot of people,

**(CS):** well this company. Anyways, we went into the cloud very.

**(CS):** Enthusiastically I guess since the term and so a lot.

**(DM):** Hmm, OK.

**(CS):** A lot of companies jumped in the cloud.

**(CS):** It's like Cloud's brilliant. Let's go.

**(CS):** And then the bills start to hit.

**(CS):** So it's exceedingly expensive.

**(CS):** It's somebody else's data center.

**(CS):** It's just not.

**(CS):** That's all it is.

**(CS):** So when you look at.

**(CS):** Making a hybrid environment, which we really are from a compute and

**(CS):** certainly from my side, from a storage perspective.

**(CS):** Looking into managing those resources.

**(CS):** And then leveraging the VM, the VM realm we also we also used it to

**(CS):** start to help us choose what to get out of from AVM perspective because a lot of

**(CS):** a lot of what we have was over provision.

**(DM):** Mm hmm.

**(CS):** So my predecessor.

**(CS):** Bought Ferraris when we needed Volkswagens.

**(CS):** That's the best analogy, right?

**(DM):** Mm hmm.

**(DM):** Sure. Yeah, yeah.

**(CS):** So so we got, you know, 16 core that are running print servers

**(CS):** and DNS and.

**(CS):** What I call utility boxes.

**(CS):** They're not highly transactional.

**(CS):** You don't need that many Cpu's. You don't.

**(CS):** It's not calculating a lot of data. It's not doing, you know.

**(CS):** It's like the difference between word and Excel, right?

**(CS):** So Excel, Excel needs a lot of horsepower sometimes,

**(DM):** Sure.

**(CS):** depending on what you're doing, because it's it's it's manipulating and

**(CS):** calculating a lot of data, whereas you know a word application.

**(CS):** Is just.

**(CS):** It's just a a whiteboard.

**(CS):** Basically, you're just typing into it.

**(DM):** Mm hmm mm hmm.

**(CS):** It's not really thinking.

**(CS):** It's not doing anything so.

**(CS):** That really helped us to shave down.

**(CS):** So we went from, I'm just looking at a number.

**(CS):** We went from 2800 cores to about 1200.

**(DM):** Hmm.

**(CS):** Just for my environment.

**(CS):** And then the next step obviously is gonna be getting into Hyper V and so using

**(CS):** leveraging, you know a management plane resource like

**(CS):** ARC.

**(DM):** Yeah.

**(CS):** Really, really helps us to to take a look at the.

**(CS):** Take a look at the environment.

**(CS):** Determine how we can approach it and then obviously you know the management piece

**(CS):** too, breaking it down across multiple data

**(CS):** centers and colos so.

**(CS):** Yeah, it looking looking at getting smarter,

**(CS):** especially especially while getting away from Broadcom like I said.

**(DM):** That's a good thank you so much for that response.

**(DM):** That's that's great.

**(DM):** And do you mind just briefly before I leave this topic talking a little bit

**(DM):** about you?

**(DM):** You mentioned how kind of.

**(DM):** Repositioning how you were using getting closer to Volkswagens from Ferraris?

**(DM):** Is there anything that that arc specifically allowed you to learn about

**(DM):** your inventory that helped you get to that spot where you were maybe better

**(DM):** positioned for what you were trying to do?

**(CS):** I think leveraging site manager helped.

**(DM):** Oh, OK.

**(CS):** It's a, it's.

**(CS):** So the management plan is very important when you're managing enterprise level

**(CS):** resources, right?

**(CS):** They're spread out geographically, right?

**(DM):** Mm hmm. Yep.

**(CS):** Plus, we've got the hybrid components with the

**(CS):** cloud connections, so.

**(CS):** I think leveraging site manager really really helped us.

**(CS):** Take a look at our environment.

**(CS):** And determine.

**(CS):** What makes the most sense?

**(CS):** Because when you throw geography in there, you have so many variables that include

**(CS):** Wan connections, your routing, switching the the actual the actual

**(CS):** networks themselves, and then determining where should we put

**(DM):** Mm hmm.

**(CS):** our resources, you know.

**(DM):** Mm hmm.

**(CS):** Plus, this is a it's a manufacturing company.

**(CS):** So we've got our sites have typical office,

**(CS):** but then we have office that's combined like here in Tempe with a huge

**(CS):** manufacturing facility.

**(DM):** Mm hmm.

**(CS):** So our resource allocation where we physically put things where we run these

**(CS):** resources, how we manage them across the Wan links

**(CS):** is very important because it impacts everything.

**(CS):** It impacts performance, it impacts the cost of the the circuits.

**(CS):** And having so it's kind of like the way I look at it. The way I look at.

**(CS):** This sort of structure is kinda like manufacturing and logistics.

**(CS):** Right. You wanna you wanna kinda put your

**(DM):** Mm hmm.

**(CS):** manufacturing near where your logistic base is as well as your customer base,

**(DM):** Sure.

**(CS):** right?

**(DM):** Mm hmm.

**(CS):** So you're trying to save money trying to save time and that in that scenario,

**(CS):** in this scenario, we're trying to save money in terms of

**(CS):** the circuits, the the fully loaded, you know network and all the requirements

**(DM):** Yeah.

**(CS):** for this plus the speed, you know, the latency if we.

**(DM):** Mm hmm.

**(CS):** Can drop 3 hops from.

**(CS):** From system to user or or system to data.

**(CS):** To user right.

**(CS):** Because our data isn't necessarily the storage.

**(DM):** Mm hmm.

**(CS):** Won't necessarily be in the same location as those VMS.

**(DM):** Mm hmm mm hmm.

**(CS):** So architecture is really, really important.

**(CS):** I mean that's a long answer, but.

**(DM):** No, I think it's very rebellious.

**(DM):** It's helpful 'cause it you touched on.

**(DM):** You know what specifically with with Anarch helped you understand your

**(DM):** inventory a little bit better and and specifically,

**(DM):** you know it sounds like site manager was instructive in that way and specifically

**(DM):** what allowed you to do so that that I think that was great.

**(DM):** The last thing before we start to get into the the concepts of wondering if we

**(DM):** can talk a little bit about, you mentioned your approach to learning

**(DM):** any sort of new tool set as kind of going in with a blank slate.

**(DM):** And how that sort of force you to to learn or kind of think a little bit

**(CS):** Mm hmm.

**(DM):** deeper than maybe you would with any sort of preconceived notions?

**(DM):** I'm wondering if you could talk, maybe reflect a little bit on your your

**(DM):** approach to arc in that way and was there anything that was really helpful within

**(DM):** the experience to get you up to speed or was there anything that was missing from

**(CS):** Yeah.

**(DM):** the experience that that you?

**(DM):** Would have liked to have seen those two.

**(CS):** So there was.

**(DM):** Kind of.

**(DM):** Those are the kinds.

**(CS):** I mean so it so it sounds kind of strange that go in without any.

**(CS):** We don't have a benchmark, right?

**(CS):** So we go in there and start to dig into it,

**(DM):** OK.

**(CS):** not knowing what's where to learn the system.

**(CS):** And then from there you build a A compare and contrast framework between that and

**(DM):** Mm hmm.

**(CS):** like AV Center, right, so.

**(CS):** What functionality does does ARCA have versus V Center and how does that touch?

**(CS):** Our environment, well-being our environment is highly,

**(CS):** is very hybrid.

**(CS):** Our provided a a more.

**(CS):** A broader visual of our of the architecture of our systems.

**(CS):** So our physical assets, really the virtual world and then how

**(CS):** they connect and how they relate to the cloud bits. So cloud storage,

**(DM):** Mm hmm.

**(CS):** cloud compute as well as.

**(CS):** As well as the physical and the the virtual machines.

**(CS):** The that's one thing I think that art provides and we're a huge Microsoft shop

**(CS):** too.

**(CS):** I mean, I've got a level set with that, right?

**(CS):** So we're a huge Microsoft.

**(CS):** That's why we're going to Hyper V.

**(CS):** But it provided a better view than Broadcom does because Broadcom is very

**(CS):** product centric, right?

**(CS):** It's looking at their VM realm.

**(CS):** It doesn't.

**(CS):** There are some cloud connectivity components that you can add to it and

**(CS):** expand from and and you know tool sets, but it's not as comprehensive.

**(CS):** I think.

**(DM):** Hmm.

**(CS):** And that plus are the two the two realms.

**(CS):** I'm infrastructure. I'm physical infrastructure.

**(CS):** So there's a cloud, there's a whole cloud team that manages

**(DM):** Mm hmm.

**(CS):** cloud compute.

**(CS):** We do touch in terms of storage, right?

**(CS):** So we're leveraging that, but in terms of compute and application

**(DM):** Mm hmm.

**(CS):** deployment, all those other things, there's another team.

**(CS):** So what?

**(CS):** What arc has done is enable us to better.

**(CS):** It's the best word.

**(CS):** Connect.

**(DM):** Mm hmm.

**(DM):** Hmm.

**(DM):** Hmm.

**(CS):** Av Center would be VM specific and it would just be my realm.

**(CS):** It won't necessarily take in the cloud components.

**(CS):** The storage in the compute that the that the rest of the Windows teams are doing.

**(CS):** So this really help.

**(CS):** I think it helped more collaboration, I think is the word.

**(DM):** Hmm, OK.

**(CS):** I think that's the word.

**(DM):** Perfect. That's again.

**(DM):** Thank you for that. Very thoughtful.

**(DM):** Response. I think just one last thing before we

**(DM):** transition over to the to the concepts.

**(DM):** So that seems like something that you found to be very useful for arc within

**(DM):** your organization as being able to facilitate that collaboration between

**(DM):** teams that that kind of connect in certain ways on the resources they manage.

**(DM):** Was there anything that as you explored arc,

**(DM):** you were kind of wanting that you didn't discover or that would have been helpful

**(DM):** and maybe gotten you up to speed?

**(DM):** Little bit faster that you had to maybe dig for through other sources.

**(CS):** I think so.

**(CS):** So I'm big on notifications, right?

**(DM):** OK, OK.

**(CS):** I'm big on.

**(CS):** I'm big on monitoring and thread setting thresholds for notifications,

**(CS):** so I think it's probably my lack of understanding of it.

**(DM):** OK.

**(CS):** But when you look at capacity planning, when you look at because it's got the

**(CS):** Linux bits, it's got the virtual bits, it's got the cloud bits,

**(CS):** it's got all those things.

**(CS):** But when?

**(CS):** When you look at.

**(CS):** Leveraging resources and tracking your resources because.

**(CS):** Like I said our previous.

**(CS):** And actually, we're still going through.

**(CS):** We're going through the big migration with with with Hyper V but the previous

**(CS):** management was over provisioned so to be able to track and right size,

**(CS):** but the notification bit I think it's just as important or more so important to

**(DM):** Mm hmm.

**(CS):** to have the system say hey look you.

**(CS):** Know what?

**(CS):** You're at 5% utilization on this?

**(CS):** But you've got other.

**(CS):** You've got other environments or other service,

**(CS):** whether the physical servers or you know the Linux or the VM or the cloud that are

**(DM):** Mm hmm.

**(CS):** pushing 80 percent, 90%.

**(DM):** Mm.

**(CS):** So what does it look like from a utilization perspective across the board

**(CS):** and are you best using resources?

**(CS):** To me, that's really important because.

**(DM):** Hmm.

**(CS):** COVID created a lot of challenges for companies, right?

**(DM):** Mm hmm mm hmm.

**(CS):** No, no surprise.

**(CS):** Cost control.

**(CS):** Cost management cost.

**(CS):** Avoidance is a large part of what happened, right?

**(CS):** And and trying to get smarter with what you're doing,

**(CS):** not just facilities and like how is it that was at Wells Fargo,

**(CS):** I was an AVP over network implementation over there and Wells Fargo as a bank you

**(CS):** probably saw they started closing the retail branches because they fig.

**(DM):** MMM.

**(CS):** Out it's like, wait, we don't need this, right?

**(CS):** We've had we've got mobile ability, we've gotms.

**(DM):** Mm hmm.

**(CS):** We got all this stuff that people can access,

**(CS):** so that's similar to what we do too, because I've got 450 servers out there.

**(DM):** Mm hmm.

**(CS):** Being able to see them those instances the the Linux figure out what's running

**(CS):** where and ownership to because we're we.

**(CS):** This isn't proprietary, but we are seriously challenged when it

**(CS):** comes to cmbb, so a content management database, right?

**(DM):** Mm hmm.

**(CS):** So telling me what's where, what the, what the utilization looks like.

**(CS):** What applications are running in those environments?

**(CS):** And then who are the customers?

**(CS):** So when we have an instance where.

**(DM):** Hmm.

**(CS):** We have a system that goes down.

**(CS):** I wanna know in real time or actually have the information more,

**(DM):** Mm hmm.

**(CS):** more aptly have the information beforehand to know if this system goes

**(CS):** down.

**(CS):** This is what's gonna be impacted.

**(CS):** It's gonna impact revenue.

**(DM):** I see.

**(CS):** It's gonna impact. You know, we're a huge Oracle shop too.

**(CS):** We've got SQL out there, but we're a huge Oracle shop.

**(DM):** Mm hmm.

**(CS):** You know, is it impacting SAP?

**(CS):** Is it? Is it impacting manufacturing?

**(CS):** We've got some systems that that manage the workflow process for our

**(DM):** Mm hmm.

**(CS):** manufacturing.

**(CS):** So in their combination between BM and Linux.

**(DM):** Mm hmm.

**(CS):** And obviously physical boxes in there too.

**(CS):** So I wanna know what those look like and if they're starting to bounce off

**(CS):** capacity.

**(DM):** OK.

**(CS):** Very important because it went systems went down two years ago,

**(CS):** I inherited something.

**(CS):** I've been here just under two years and I my team inherited a huge enterprise

**(CS):** application suite because they figured out putting it in the cloud was too

**(CS):** expensive.

**(CS):** And nobody owned it and #3.

**(CS):** They had had an incident where they needed to restore and the restore the the

**(CS):** actual backup was corrupt so they were down and it was a production.

**(DM):** Hmm.

**(CS):** When you think about.

**(CS):** David, it's a production system that not only is

**(CS):** product creation and then all the workflow, right.

**(CS):** So, you know, ideation design.

**(CS):** Creation. Storage.

**(DM):** Yeah.

**(CS):** But then also.

**(CS):** Also, the connection to the to the B to C side.

**(CS):** So it's the catalog too.

**(CS):** It's it's product development, creation, storage and then the catalog that's

**(CS):** offered up ultimately on the web. So as a manufacturing company,

**(DM):** Hmm.

**(CS):** you know pillows and books and all the stuff that Shutterfly does.

**(DM):** Yeah.

**(DM):** Yeah.

**(CS):** You know, you go down for a month.

**(CS):** Luckily, it wasn't. During our peak season.

**(CS):** Our peak season is like October one through January.

**(CS):** 15 That's that's a no touch window for anything because that's where that's

**(DM):** Mm hmm.

**(DM):** I see, yeah.

**(CS):** where people are online.

**(CS):** They're buying Christmas stuff.

**(CS):** They're doing, you know, a litany of things.

**(DM):** Yeah, right.

**(CS):** But I think this this actually happened in March.

**(CS):** So thankfully.

**(CS):** The the impact was about a million to five or it could have been.

**(DM):** Mm hmm.

**(DM):** But much bigger.

**(CS):** 20304050 oh huge huge.

**(DM):** Yeah. Wow.

**(DM):** So that's that's. That's a great, yeah.

**(CS):** So yeah.

**(DM):** Well, thanks for for filling me in a little bit

**(DM):** on on what you think would be what what you might have been looking for as you

**(DM):** were starting to come on to arc that you didn't see initially and that would have

**(DM):** been really helpful in in sort of.

**(DM):** Your assessment and also your use of of the of the solution.

**(DM):** So with that, I think I'm gonna transition out over to

**(DM):** some of the concepts that we've prepared. I wanna make sure we have enough time to

**(DM):** get through those.

**(DM):** So the way to do that, or the way I'm gonna do that is I'm gonna

**(CS):** OK.

**(DM):** share a link here with you.

**(DM):** It's a link to a figma.

**(DM):** File and if you could open that up and share your screen,

**(DM):** I think it's just gonna be the easiest way to have you navigate some of the

**(DM):** content.

**(DM):** And yeah, there should be a password required.

**(DM):** And the password is simply arc.

**(DM):** And it's it's all lowercase that should be able to get you in.

**(CS):** OK.

**(CS):** Give me a second I'll share.

**(DM):** Yeah, yeah.

**(CS):** It's just it's just now coming up figmafigma.com proto.

**(DM):** OK.

**(CS):** Oh cool.

**(CS):** OK.

**(CS):** Yep, I've seen something very similar to this

**(CS):** before.

**(DM):** And do you mind?

**(DM):** I I'm not seeing your screen come through yet.

**(CS):** No, I'll share.

**(CS):** I sure it just it it just it just now came up.

**(DM):** Do you mind? OK. Perfect. OK.

**(DM):** OK.

**(DM):** Perfect. OK. Awesome. Awesome. Awesome. OK, so let's see.

**(CS):** So yeah, I'm right here.

**(DM):** So now we're sharing the concepts I'm gonna as we review these concepts,

**(DM):** it'll be really helpful to hear kind of your thoughts as you you see them and

**(DM):** maybe reflecting on on as you know, you mentioned already that you kind of

**(CS):** Sure.

**(DM):** see something similar to this, but let.

**(DM):** Just imagine that you're kind of back at that stage where.

**(DM):** You're you're coming to arc and you're trying to learn a little bit about it.

**(DM):** And.

**(DM):** You're charged with sort of getting everything set up.

**(DM):** Your companies decide.

**(DM):** You know what?

**(DM):** Arc is the solution.

**(DM):** We're gonna go with and you're kind of in charge of setting up and connecting some

**(CS):** Right.

**(DM):** of the resources to Ark.

**(DM):** So that's kind of the mindset I'd like you to approach these with.

**(DM):** So you've come and you could have landed on this overview page and I'd love for

**(DM):** you to talk me through your thought process as you navigate around, you know,

**(DM):** with that goal of trying to initially connect things to arc, you know,

**(DM):** what are some of the questions that?

**(DM):** Are top of mind for you and actually, do you mind exting out of this one this

**(DM):** this page right now there's an X at the top.

**(DM):** Right there on top, right.

**(DM):** So the X yeah.

**(CS):** Upright.

**(DM):** Oh, I'm sorry.

**(DM):** Just below that below Connie Wilson, there's an X.

**(CS):** All right there. OK, contoso.

**(DM):** We'll start.

**(DM):** Yeah. We'll start on, yeah, we'll start.

**(CS):** Yeah, I got it.

**(DM):** We'll start on this page.

**(CS):** Sorry, I start clicking.

**(DM):** No, I know, I know.

**(DM):** It's that's good.

**(DM):** That's good to know, but so I'm kind of curious.

**(DM):** Like what do you with with that mindset around, you know,

**(DM):** starting to initially connect things to arc?

**(DM):** What are some of the questions that you have and and do does this does this page

**(DM):** that we're looking at now help anticipate those or address those?

**(CS):** So so from the interface perspective, right?

**(DM):** Yeah.

**(DM):** Yeah.

**(CS):** What are my thoughts in terms of usability, look and feel?

**(CS):** Eventually functionality, right? So I.

**(DM):** I think for for us right now, what's actually most crucial is just the

**(DM):** the content like, does this help address?

**(DM):** I'm curious to hear some of those other things as well,

**(DM):** but does this help in address some of the questions you have and also help you help

**(DM):** direct you or guide you in a way that's that's intuitive for for you?

**(CS):** It it does so the the thing that the thing that stands out is this bit right

**(CS):** here.

**(CS):** On Prem, hybrid multi Cloud and edge platforms,

**(CS):** right?

**(CS):** Because when you look at managing the environment,

**(CS):** those are all the things you I wanna see, right?

**(CS):** So right away that tells me that it connected across, you know,

**(CS):** the hybrid infrastructure.

**(CS):** Terms of the rest of the content.

**(CS):** I kinda like the this the compare onboarding options without seeing it

**(CS):** right.

**(DM):** Mm hmm.

**(DM):** Mm hmm.

**(CS):** I like options, I really do.

**(CS):** And I and it's really it's really important that it doesn't just give you

**(DM):** OK.

**(CS):** one solution, right?

**(CS):** So here you go.

**(CS):** Click here. Do this. Do that. Do that this I like because I'm assuming

**(CS):** without knowing right, David, I haven't seen it, but.

**(CS):** It will allow me to bring resources on board into the management console the way

**(CS):** I want to do it, and I think hopefully it'll.

**(CS):** It'll allow me to do it either like right here in the machine.

**(CS):** So onboarding option should give me an option to onboard individual assets,

**(CS):** right?

**(CS):** Or assets based on the operating system. So Linux versus VMware Windows,

**(DM):** Mm hmm.

**(DM):** Hmm.

**(CS):** you know 12 or 16 vers 25 or whatever.

**(CS):** But then it should also allow me to onboard the structure based on going back

**(CS):** to the geographic thing, right? So.

**(DM):** Hmm.

**(CS):** Where are they located?

**(CS):** So you know where in.

**(CS):** Indiana, we're in Minnesota. We're in Tempe, we're in Texas.

**(CS):** We're in Haifa, Israel, so being able to onboard it and then

**(CS):** assign.

**(CS):** That asset to well, hopefully it'll bring it up as as part of

**(CS):** location, I would hope, but if it doesn't then being able to

**(DM):** Hmm.

**(CS):** assign it and align it that way.

**(CS):** But then maybe even be able to put it into use groups, right?

**(CS):** So if if I were to onboard something.

**(CS):** I'd like to know if it were an enterprise application server.

**(CS):** I'd like to know if it were and this is individual, right?

**(CS):** So I'd like to know what it does.

**(DM):** OK.

**(CS):** What's the function of that box is?

**(DM):** Mm hmm.

**(CS):** It is it managing?

**(CS):** Is an Active Directory box.

**(CS):** Is it managing andds?

**(CS):** Is it managing print?

**(CS):** What's it doing?

**(CS):** Oh, I don't know why my display thing just

**(CS):** dropped.

**(CS):** I don't know why.

**(CS):** Sorry about that, but.

**(DM):** That's OK.

**(CS):** So yeah, it's it's having.

**(CS):** It's a. It's an HP.

**(CS):** It's a new HP laptop.

**(CS):** It's getting kinda funky, which is not surprising me at all,

**(DM):** OK.

**(CS):** but I'm still looking at the screen, right?

**(DM):** OK.

**(CS):** So bringing on individual assets, being able to associate them in not

**(DM):** Yeah.

**(CS):** knowing how deep of a dive it does from an SNMP perspective,

**(DM):** Mm hmm mm hmm.

**(CS):** being able to associate those by applications.

**(CS):** So if I can slice and dice here.

**(DM):** OK.

**(CS):** Are you know there's 20 servers?

**(CS):** Five of each may be doing different things.

**(CS):** You know that one group may be the utility boxes. Like I said,

**(DM):** Mm hmm.

**(CS):** NDS or or not NDS, but Active Directory or print server or

**(DM):** Mm hmm.

**(CS):** or DHCP or those things utility. What I consider utility servers,

**(DM):** Mm hmm.

**(CS):** another group maybe database servers. So they may be part of the Oracle Su.

**(DM):** Great.

**(CS):** Right or or all SQL servers and then?

**(DM):** Mm hmm.

**(CS):** Something else maybe?

**(CS):** In the Informatica or the SAP world. So being able to.

**(DM):** Mm hmm.

**(CS):** I think slice dice and and build pools such that it it goes,

**(CS):** it goes back to the performance thing too right?

**(DM):** OK.

**(CS):** Because like a A DHCP box on a print server those are they should never be

**(DM):** Yeah.

**(CS):** bouncing off. You know 80% utility application servers

**(DM):** Mm hmm.

**(CS):** relative to how.

**(CS):** Many departments have access to it.

**(CS):** Like for financial application or especially like Oracle rack nodes.

**(DM):** Yeah.

**(DM):** Mm hmm.

**(CS):** Very important that we track and trend the performance of those because they can

**(CS):** be.

**(CS):** Highly.

**(CS):** Transactional right?

**(CS):** So there's a lot of compute, a lot of data.

**(DM):** That's good.

**(DM):** Yeah. So I think that that's great.

**(DM):** I think that that's really it and it's a really it's helpful for me to understand

**(DM):** kind of what you're expecting to see behind some of the compare onboarding

**(DM):** options and and what would be specifically useful for for you in, in,

**(DM):** in your your setup. I'm kind of wonder.

**(DM):** Also, what else on this page besides the

**(DM):** comparing onboarding options catches your eye?

**(DM):** And and how you kind of understand some of the other information on this page?

**(CS):** So going back right?

**(DM):** Mm hmm.

**(CS):** Monitoring for me is.

**(CS):** Very important.

**(DM):** OK.

**(CS):** Highly important.

**(CS):** I want to know what's going on where and it and it sort of touches on the what's

**(CS):** running where.

**(DM):** Mm hmm mm hmm.

**(CS):** But what's running where?

**(CS):** And then what is that?

**(CS):** What does the health of that system look like? And and that would be in terms of,

**(CS):** you know, IO and storage?

**(CS):** So hopefully we're not bouncing off of high IO.

**(DM):** OK.

**(CS):** You know, meaning that we may have provisioned it

**(CS):** with too few cores or not enough storage in terms of the Luns.

**(DM):** Mm H.

**(CS):** We wanna be able to watch that because I've got a lot of internal customers.

**(DM):** Mm hmm.

**(CS):** I mean basically I'm in customer service. That's it.

**(DM):** Yeah.

**(DM):** I see.

**(CS):** I you know, I work for the company, but more on customer service and there's

**(CS):** pods of people out there that we serve relative to their applications.

**(DM):** I see.

**(CS):** So that's really, really important.

**(CS):** Licensing is huge.

**(CS):** Licensing is huge because one thing that.

**(DM):** Mm hmm.

**(CS):** Not every company does well, I don't think we're different than a lot

**(DM):** Mm hmm.

**(CS):** of other companies.

**(CS):** I don't think we do well in managing licenses.

**(DM):** Mm.

**(CS):** I think that because there's an inherent cost to that, right?

**(DM):** Mm hmm mm hmm.

**(CS):** And and each company has its own approach towards licensing.

**(CS):** So Broadcom licenses by the core Oracle licensed by the the database instance.

**(CS):** And.

**(CS):** The.

**(CS):** Hitachi.

**(CS):** And some of the other hardware things that I've got,

**(CS):** they licensed by the device.

**(CS):** And that's why understanding not a rabbit hole,

**(CS):** but understanding the the health and the performance of their device helps us

**(CS):** determine how many devices we have, right?

**(CS):** Are we over provision like in a Veritas perspective?

**(DM):** Yeah, right.

**(DM):** Mm hmm.

**(CS):** Just an example. We've got a number.

**(DM):** It sounds like licensing and and health are are two areas that are important for

**(CS):** They are.

**(DM):** you in this list, so taking a look at the the content on on

**(CS):** They are.

**(DM):** this page.

**(DM):** So we looked at the stuff above and the stuff below,

**(DM):** and I'm wondering if you could tell me a little bit about how you understand the

**(DM):** relationship between those items and and how you understand sort of the flow of

**(DM):** the information on this page.

**(CS):** Well, it all comes down to the asset itself,

**(CS):** right?

**(CS):** So the the components, the the capabilities right there, right?

**(DM):** OK. Yeah.

**(CS):** So secure resources I don't understand the concept the the context right?

**(DM):** OK, OK.

**(CS):** Because I do.

**(CS):** Because when you say secure, it means a lot of things.

**(DM):** Right.

**(CS):** But monitoring health and containerization of the workloads this is

**(CS):** all about resource management, allocation and and then to the bit of

**(DM):** OK.

**(CS):** performance.

**(DM):** Mm hmm.

**(CS):** So when you put when you deploy, you know the Kubernetes or the the

**(CS):** containerized workloads.

**(CS):** That is really important for you to track to make sure that they're actually

**(CS):** functioning properly and you're not over, you're not over.

**(CS):** And again, it goes back to provisioning too.

**(CS):** You're not over provision in terms of that and people aren't utilizing them as

**(CS):** much as you're licensed for and it goes back to license, so.

**(CS):** Managing the health, managing the the resource allocation.

**(CS):** And then rightsizing things to make sure are we doing just what we need ±2% or 5%,

**(DM):** Mm hmm.

**(DM):** I see.

**(DM):** Mm hmm.

**(CS):** not ±30%, which is what I inherited or 50%?

**(DM):** Right. Oh, man, right. And so that's that's great and and

**(CS):** So the the relationship is good. That's what you asked about.

**(DM):** specific.

**(DM):** Yeah, right.

**(DM):** The relationship is good and so the relationship not only on on this

**(DM):** component, but we also took a look at the the the

**(DM):** piece above around you know the the comparing onboarding options and I'm

**(DM):** wondering what you see is the relationship between the the first set of

**(DM):** options.

**(DM):** You see here on the page and then that content that you're just reviewing down

**(DM):** below.

**(DM):** Yeah. Any any sort of relation to receive?

**(CS):** On what can I dig into it?

**(DM):** Yeah. I think for for time, let's let's go ahead and and and dig into

**(DM):** it, yeah.

**(CS):** OK.

**(CS):** So.

**(CS):** OK.

**(CS):** Alright, here's your input.

**(CS):** So the machines onboard single machine or multiple with service principal right?

**(CS):** So a service principal to me would be the relationship between the machines and

**(CS):** that's what we were talking about before.

**(CS):** So actually building a relational connection between machines, right?

**(CS):** Like I said, application servers or utility boxes or

**(DM):** Hmm.

**(CS):** whatever.

**(CS):** Or is it a finance you know? Is it a pool of finance?

**(CS):** Applications.

**(CS):** And servers. Is it a pool of manufacturing?

**(CS):** Is it a pool of HR?

**(CS):** Is it a pool of?

**(CS):** So being able to build the relationships which.

**(CS):** The the service principal and also and also the support component of it too,

**(DM):** Mm hmm.

**(CS):** because when you build something it's not. You're not just building a static device,

**(CS):** you're building something that requires patching. It requires maintenance.

**(DM):** Yeah.

**(CS):** All my 400 Dell boxes are either under warranty with Dell or warranty from an

**(CS):** extended service provider.

**(CS):** So the service principal to me would be all right.

**(CS):** Well, how often you patch it?

**(CS):** What do you how do you handle tickets if something goes wrong with it, right?

**(DM):** Mm hmm.

**(DM):** And so for for looking at the content on on this page,

**(DM):** we're we're still looking at in the spot of you know you're coming to arc,

**(DM):** you're trying to understand what you need in order to connect some of the stuff

**(DM):** that's in your inventory to Ark and if.

**(DM):** You're you're looking here and you're looking at some of the different options

**(DM):** that are outlined on this page.

**(DM):** I'm I'm wondering how you understand them and and you know how you might choose

**(DM):** among the different options that are listed here.

**(CS):** That's weird.

**(CS):** I just disappeared again.

**(CS):** The camera.

**(DM):** That's pretty funny.

**(CS):** The camera is stupid.

**(CS):** I'm sorry, could you ask me one more time? I apologize.

**(DM):** Yeah. No, no.

**(DM):** It's it's, it's it's fun.

**(DM):** So with the scenario, if you're coming to arc and you're trying

**(DM):** to understand how to connect some of your resources to it,

**(DM):** and there's a couple different options, I'm wondering if you know this,

**(CS):** Mm hmm.

**(DM):** the content here, if you understand the different options

**(DM):** that are listed here or what.

**(DM):** Sort of questions you might have about the different options here.

**(DM):** Yeah.

**(CS):** I.

**(CS):** I do.

**(CS):** I like.

**(CS):** I like the options of of single versus multiple, right?

**(CS):** So multiple machines with the same with the same shared component and it it

**(DM):** OK.

**(CS):** mentioned service principal right?

**(DM):** Mm hmm.

**(CS):** But to me it would be application family or.

**(DM):** Mm hmm.

**(DM):** Hmm.

**(CS):** Something that would relate them besides your service right services component of

**(DM):** I see.

**(CS):** what we do, but to me understand the environment and

**(CS):** building them going back to.

**(CS):** If you think about it.

**(CS):** A map you know geographically, what does it look like?

**(CS):** Can I build it in that view like you can with Active Directory, right?

**(CS):** You can see you can see containers OS O us you can see the whole tree.

**(DM):** Yep.

**(CS):** You can see the way it's laid out basically, but.

**(CS):** Clustering the the server or the instances the environments,

**(DM):** Mm hmm mm hmm.

**(CS):** whatever you wanna call it in logical ways would be tremendously valuable.

**(DM):** Mm hmm.

**(CS):** And how you do that? How you do that? There's like I said, a lot of options.

**(DM):** OK.

**(CS):** You can go by department. You go by application type.

**(DM):** Sure.

**(CS):** You can go by the the amount of user base right is an enterprise application like

**(DM):** Yeah.

**(CS):** like exchanges. Or is it a departmental application?

**(DM):** Mm hmm.

**(CS):** And then obviously physical location and then the health or?

**(DM):** Mm hmm.

**(CS):** Gee, there's a whole bunch of different stuff.

**(DM):** Sure. Yeah.

**(DM):** And when you take a look at the the content on the right side of the of the

**(DM):** page here, like initial onboarding time and common

**(DM):** prerequisites, I'm kinda interested to hear from you

**(DM):** what you make of the content that's there. If it's valuable at the stage or what.

**(DM):** Else you might be looking for.

**(CS):** So what I like just first blush is the onboarding time.

**(CS):** So setting expectations is really, really important because you don't know

**(DM):** OK.

**(DM):** Mm hmm.

**(CS):** if it's performing well or not, unless you have some sort of framework,

**(CS):** right?

**(CS):** So when it says 5 to 15 minutes depending on network speed,

**(DM):** Mm hmm.

**(DM):** Hmm.

**(CS):** it it sets an expectation right away that if if we go if if it takes longer than 15

**(CS):** minutes to build that asset or asset pool or whatever, it looks like,

**(CS):** then there's something wrong.

**(CS):** Right. It may speak to our network latency or it

**(DM):** Hmm.

**(CS):** may speak to the geographic locations of that pool.

**(CS):** So I could have.

**(CS):** And again, I go back to polling because I like

**(CS):** categorizing things.

**(CS):** It helps in so many in so many ways, but I can have an application.

**(DM):** OK.

**(CS):** It could have a finance application, whatever HR application we got, you know,

**(CS):** couple servers in Muncie IN.

**(CS):** We've got a couple servers in San Francisco.

**(CS):** We got a couple servers in Plano, TX.

**(DM):** Mm hmm.

**(CS):** We got a couple here so.

**(CS):** When?

**(CS):** When you try to bring those on, well, one onboarding from an individual

**(DM):** Mm hmm.

**(CS):** perspective or onboarding, like I said, in a pool which would be a tremendous,

**(DM):** OK.

**(CS):** which would be a great way to do it, there'd be a lot of it.

**(DM):** OK.

**(CS):** It'd be hard to do from a from a database perspective for your application. OK,

**(DM):** Mm hmm.

**(CS):** it'd be tough, but if you had options to be able to pull

**(CS):** so as you build individuals, so say I build 20 individual servers

**(CS):** right onboard a single machine.

**(DM):** Yeah.

**(DM):** Yeah.

**(CS):** So I onboard 20 servers then in management.

**(CS):** Whether it's a view or whether it's a way to manage patching or the scripting bits

**(DM):** Mm hmm.

**(CS):** right so.

**(CS):** Once I build those 20 assets, it'd be great to pull those based on.

**(CS):** Like I said, application owner geographic location.

**(DM):** Yep.

**(CS):** Even machine type.

**(CS):** There'd be a lot.

**(CS):** And like I said, it'd be difficult.

**(DM):** Yeah.

**(CS):** It'd be difficult to build something that everybody would love.

**(CS):** Of but having options to to cluster those after that.

**(DM):** Mm hmm.

**(DM):** Mm hmm.

**(CS):** But going back initial onboarding time, that's great.

**(CS):** I know to expect minimum 5 minutes Max 15 minutes if it's beyond that there's

**(DM):** Yeah.

**(DM):** Mm hmm.

**(CS):** something wrong, I might have to restart or you might have

**(CS):** to look at the network.

**(DM):** Yep.

**(CS):** The the common prerequisites. Obviously you're telling me I've got to

**(CS):** have administrator rights, right?

**(DM):** Mm hmm mm hmm.

**(CS):** At least on the on the local machine. So if I try to build these.

**(CS):** It's going to fail.

**(CS):** I'll unless my credentials have the proper level of access.

**(CS):** So you're again, you're setting expectation.

**(DM):** Mm hmm.

**(CS):** I think it's a good thing.

**(DM):** Mm hmm.

**(CS):** Because.

**(CS):** It's like, look, if you don't, if you're not local admin or if like if

**(DM):** Yeah.

**(CS):** it's a service account that I'm trying to leverage,

**(CS):** if it doesn't have the proper administrative rights to run scripts,

**(DM):** Mm hmm.

**(CS):** then guess what, you're not gonna be able to onboard it,

**(DM):** Mm hmm.

**(CS):** so.

**(CS):** It it just it helps because basically if it breaks I look at that and say, OK,

**(DM):** OK.

**(CS):** well, This is why you know.

**(CS):** And then supported operating systems?

**(CS):** I don't if any of this is interactive. It's not.

**(CS):** Not it's just a it's picture, OK, so.

**(DM):** Yeah. So, yeah, I think, yeah, if there's other prerequisites.

**(DM):** So it sounds like some of the information that's listed here and again it sounds

**(DM):** like on the monitoring side of the management side,

**(DM):** this this concept of grouping is is important,

**(DM):** but on the actual connection side, which is kind of what we're we're

**(DM):** focusing on for these scre.

**(CS):** Uh, huh. Sure.

**(DM):** Is there any sort of additional information on prerequisites or that

**(DM):** you'd like to see here to better understand?

**(CS):** You know what instead?

**(DM):** The options.

**(DM):** You're choosing among.

**(CS):** Instead of a, learn more under supported operating

**(DM):** Mm hmm.

**(CS):** systems. I'd like to see a list of EM and so if

**(CS):** you had REL, you know this'll run on REL 6 through 9.

**(CS):** This'll run on Windows, you know, 2010 through 25.

**(DM):** Mm hmm.

**(DM):** Mm hmm.

**(CS):** Or it will run on these and it won't run on these, right?

**(DM):** OK.

**(CS):** So that provides a minimum build requirement for me to understand to get

**(CS):** it in there because compatibility is huge.

**(CS):** Huge in what we do, right?

**(DM):** Yeah, right.

**(CS):** So backups my backup systems. Some of our instances that are still

**(CS):** being run by some of our Subs, our companies.

**(DM):** Mm hmm.

**(CS):** They are beyond end of life and support life,

**(DM):** Yeah.

**(CS):** so we can't back up and and if we want to migrate to a new system,

**(CS):** they've got to uplift them. They've got to upgrade to a newer

**(DM):** Yep.

**(CS):** operating system.

**(CS):** So having a list of what what this will run on and what it won't,

**(DM):** Mm hmm.

**(CS):** or at least inferring what it won't so.

**(DM):** Mm hmm.

**(DM):** OK.

**(CS):** Windows 2012 and beyond.

**(DM):** Mm hmm.

**(CS):** You know, relate and above.

**(DM):** Yeah, I see.

**(CS):** Yeah.

**(DM):** That's great.

**(DM):** That's great.

**(DM):** I think the last thing before we leave this page and go to the the last one.

**(DM):** On the left side, currently we're looking at the options

**(DM):** for any environment.

**(DM):** There's some other options there, and I'm wondering if there's anything

**(CS):** Location management.

**(DM):** that you so like a multi cloud host environment, Edge hardware,

**(DM):** Internet of Things.

**(DM):** So we're looking at any environment right now.

**(DM):** I'm wondering if there's any questions you have about some of the other options.

**(CS):** So if if if you could expand that right.

**(DM):** Or.

**(CS):** So any environment to me and you don't have to get too long winded.

**(DM):** Mm hmm.

**(DM):** Mm hmm.

**(CS):** So multicloud host environment is kind of vague.

**(CS):** So host environment should be, you know, maybe under host environment onprem or

**(CS):** OFFPREM or.

**(DM):** OK.

**(CS):** Physical host environment, right?

**(DM):** OK.

**(CS):** Or something that would equate that because multi cloud we're talking cloud,

**(CS):** right?

**(CS):** So AWS and Azure and and you know Google and everybody else.

**(DM):** Yeah.

**(DM):** OK.

**(CS):** I get that host environments to me is kind of vague because if because I have

**(DM):** I see.

**(CS):** on Prem and off Prem so host environments could mean.

**(DM):** OK.

**(CS):** On Prem and multicloud.

**(CS):** So it's kind of redundant, right?

**(DM):** I see. OK.

**(CS):** Edge Hardware makes sense because you're talking about, you know, Edge routers and,

**(CS):** and you know, probably I would think DMZ type hardware

**(DM):** OK.

**(CS):** and DC, DC related things on the edge which makes

**(DM):** OK.

**(CS):** sense I know.

**(DM):** OK.

**(CS):** What that means? IoT?

**(DM):** Yeah.

**(CS):** OK, but kind of vague too.

**(DM):** OK.

**(DM):** OK.

**(DM):** Those are. That's great.

**(DM):** That's that's a perfect loss of of just understanding.

**(DM):** You know what stands out to you?

**(DM):** What? What?

**(DM):** You catch your sleep on and then the last last again.

**(DM):** Last thing, before we we go to the next screen of the

**(DM):** option that were listed here. If you were coming here and you were

**(DM):** trying to just make that initial connection to some of your resources,

**(DM):** which of the options on this page would you choose and why? Or?

**(DM):** Which option would you choose and why?

**(CS):** So of the whole page, right?

**(DM):** Of this of this page. Yeah. Or yeah. What would you choose as the as the way

**(DM):** you would make that initial connection?

**(CS):** So.

**(CS):** Infrastructure huge, assuming that slices it out between

**(CS):** layers, right?

**(CS):** So layer one through layer 7.

**(DM):** Oh, I'm sorry. I'm sorry.

**(DM):** The options in the in the middle of the page here.

**(CS):** But.

**(DM):** So like the the onboarding option, yeah.

**(CS):** Oh oh, the onboarding options, OK.

**(DM):** Yeah, yeah.

**(CS):** I think.

**(CS):** Onboard a Windows Server with installer to me seems kinda vague too.

**(CS):** I don't know if that's a if that's a new resource that I need to build.

**(DM):** OK.

**(CS):** You know what I mean?

**(DM):** Mm hmm.

**(CS):** I need to.

**(CS):** I need to load it.

**(CS):** The environment itself, as opposed to it's an existing operating

**(DM):** Hmm.

**(CS):** system in a box somewhere that I add. So onboard single machine makes sense.

**(CS):** Get it?

**(DM):** Yeah.

**(CS):** Use it right?

**(CS):** I can and and.

**(CS):** Actually, both of these speak to a test environment.

**(CS):** Two, which is very, very important.

**(CS):** I'm boarding a single machine to understand how to do that.

**(CS):** Would make a lot of sense.

**(CS):** I'd go there first, and then onboarding multiple machines.

**(DM):** Hmm.

**(CS):** I dig into that because of the slice and dice thing that I told you about.

**(DM):** Yes, OK.

**(CS):** How do you?

**(CS):** How do you do that by application?

**(CS):** By location, by user base.

**(CS):** By whatever onboard a Windows Server with installer that to me is super vague.

**(DM):** Mm hmm.

**(CS):** I don't know if if this utility is the installer bit it's talking about.

**(DM):** OK.

**(CS):** About or if I'm talking about building a brand new Windows Instance and then

**(DM):** OK.

**(CS):** onboarding it, you know.

**(DM):** I see.

**(DM):** That's great. That's great.

**(DM):** Yep, that's a great call out, OK.

**(DM):** So I think just for the sake of time, we got about 10 minutes left of the hour.

**(DM):** If we go 5 minutes over.

**(DM):** Is that something you could accommodate? I'm just trying to.

**(CS):** I.

**(CS):** I I got a hard stop.

**(DM):** Get a hard stop, OK, so.

**(CS):** I've got Thursdays, Thursdays, team meetings from me. Sorry.

**(DM):** OK.

**(DM):** No, no, that's OK.

**(DM):** That's fine.

**(DM):** With that understanding, let's go with the last set of screens.

**(DM):** So if you hit the X again at the top of the screen just below the Connie Wilson

**(CS):** By Connie.

**(DM):** right there.

**(DM):** Yep. And then at the top of the screen here.

**(DM):** There's some pills like right next to Azure Arc that they help me find right

**(DM):** solutions.

**(DM):** Did you notice this the first time we took a look at this page?

**(CS):** You don't know. I didn't.

**(CS):** Honestly know I.

**(DM):** OK.

**(DM):** So I'm wondering if if yeah.

**(CS):** 'Cause it kinda it kinda draws your eyes right in here.

**(CS):** And that's exactly where I want.

**(CS):** I did.

**(DM):** OK, OK.

**(CS):** Not even notice those.

**(DM):** So are those questions that you think you might have again,

**(DM):** you know when you're coming to this spot to begin to onboard resources to our,

**(CS):** OK, so so so the center one highly valuable

**(DM):** yeah.

**(DM):** Mm hmm. OK OK.

**(CS):** to me because it speaks.

**(CS):** It speaks to what will work and what won't. What we just talked about, right.

**(DM):** I see. Yep.

**(CS):** Exactly what we just talked about the help me find the right solutions.

**(CS):** That's very vague.

**(CS):** I don't know.

**(DM):** Uh huh.

**(CS):** I don't know what that means, right? It is.

**(DM):** OK, OK.

**(CS):** Help me find solutions to managing my environment or pooling resources or

**(DM):** Hmm.

**(CS):** ensuring that resources are equally balanced across.

**(CS):** It's a very vague question.

**(DM):** I see.

**(CS):** What management services can I enable?

**(CS):** That's that's a great question.

**(CS):** It's like what? What?

**(DM):** OK.

**(CS):** You know what?

**(CS):** Can I do within the arc enabled machine?

**(CS):** Can I can I check the CPU utilization?

**(CS):** Can I check memory utilization?

**(CS):** Can I check Nick?

**(CS):** Can I check throughput speed?

**(CS):** Can I check?

**(CS):** You know all those performance categories you can think about?

**(CS):** So that makes sense to me that the middle one makes perfect sense to me.

**(DM):** Mm hmm.

**(CS):** The one on the left.

**(CS):** Very vague.

**(DM):** OK.

**(CS):** Umm.

**(DM):** That's that's. That's all great to to hear about,

**(DM):** kind of how you interpret some of the additional questions.

**(DM):** What do you what would you expect to happen if you were to click on on one of

**(DM):** these questions?

**(CS):** So this one right?

**(CS):** The middle one I like.

**(DM):** Yeah. What would you?

**(DM):** What would you expect to happen after you click on it?

**(CS):** My expectation is that it would show me the base operating systems that.

**(CS):** Are compatible, right?

**(DM):** Mm hmm.

**(CS):** And then other things like Java Patch level security level.

**(DM):** Mm hmm.

**(DM):** OK.

**(CS):** I would think they would be the the prerequisites would mean at a base

**(CS):** minimum this is what it's gonna take for us to onboard that box.

**(DM):** Mm hmm.

**(DM):** OK, great.

**(CS):** And that would have a lot of components.

**(DM):** OK, perfect.

**(DM):** That's good to know. Some of what you would expect here,

**(DM):** just for the sake of looking at this experience.

**(DM):** Do you mind clicking on the 1st question?

**(DM):** Because that's what's gonna trigger a look at some of what this interaction

**(DM):** might look like.

**(DM):** So you would be presented with this experience where it would open up copilot

**(DM):** and it would ask you a question. And again the question that you clicked

**(DM):** on was help me find the right solutions. And this is the first.

**(CS):** Isn't good enough.

**(CS):** It's not good enough because you got on Prem or cloud.

**(CS):** You don't have hybrid.

**(CS):** So what?

**(DM):** So you. Yep. Wait, so there's it's not you.

**(CS):** It's it's, it's both.

**(DM):** You would you have resources in both and there's no way for you to make that

**(DM):** selection right now with.

**(CS):** Can I?

**(CS):** Can I choose?

**(CS):** Can I choose both of them and probably not?

**(DM):** That this is single select right now, right? Yep.

**(CS):** It's an either or, right, right.

**(CS):** So single select. To me you're limiting my ability to do

**(CS):** what I want to do because you're assuming that it's either on Prem or in the cloud,

**(DM):** I see.

**(CS):** but you're not saying, hey, guess what? It's a shared environment and whether

**(DM):** Mm hmm.

**(CS):** it's shared for compute storage or well, actually comp.

**(CS):** In storage.

**(CS):** In the cloud. So I might have onprem applications.

**(CS):** In servers, but my my backup is likely going to be

**(CS):** have cloud components, so a single a single select is not a good

**(DM):** Yeah. Yeah. OK.

**(CS):** question.

**(DM):** Got it. That's good. That's good.

**(DM):** Really good feedback. So let's assume just for the sake of

**(DM):** going through the last few screens here that you you select onprem and what you

**(DM):** would see next if you click next.

**(DM):** Let's take a look at that.

**(DM):** So you have these four options after you've selected on Prem and I'm wondering

**(DM):** is this against a single select like the previous question are these?

**(DM):** Is this list exhaustive of what you would expect to see,

**(DM):** or are there things that are missing?

**(DM):** Are the things that shouldn't be here or?

**(CS):** I think it's. I think it's OK, but I would.

**(DM):** OK.

**(CS):** I would make it a five question.

**(DM):** Oh, OK.

**(CS):** Physical server. Next question virtual machines.

**(DM):** I see. OK.

**(CS):** Next question, SQL Server and then SQL Server can be

**(CS):** physical and or virtual so.

**(DM):** Mm hmm.

**(CS):** I would separate physical and virtual machines.

**(DM):** OK. And and do you mind telling me a little

**(DM):** bit about why you would make that separation?

**(CS):** Well.

**(CS):** Because I might only wanna look at a virtual environment, right?

**(CS):** So if I, if I understand the physical nature of

**(DM):** Yeah.

**(CS):** the machines right?

**(DM):** Mm hmm mm hmm.

**(CS):** So they're all pure Edge Eight 50s and you know,

**(CS):** we've got three more years of maintenance before its end of life and the service

**(CS):** life, whatever. If I understand that, which I should before I go in here,

**(DM):** Mm hmm.

**(DM):** Mm hmm.

**(CS):** I'm probably only looking at the virtual machine. So I wanna.

**(DM):** Mm hmm.

**(CS):** Take a look at that virtual machine.

**(CS):** And I don't.

**(CS):** I I already understand where it where it sits.

**(CS):** You know what I mean?

**(DM):** Yeah, I see what you're saying.

**(DM):** OK, so let's yeah.

**(CS):** And I don't. So so if I check.

**(CS):** So if I check that.

**(DM):** Yeah.

**(CS):** File here Gale in case you're using service principal and start to refresh

**(CS):** expansion.

**(CS):** I just.

**(CS):** I'm not sure yet.

**(CS):** Interesting.

**(CS):** Using a service principal.

**(CS):** I like that.

**(CS):** So that would be, that'd be a policy level thing, right?

**(CS):** Using a service principal, so setting the the requirement of what

**(CS):** you're looking for.

**(CS):** Infrastructure refresher expansion.

**(CS):** At distributed location.

**(CS):** So refresh I don't necessarily care about, right?

**(CS):** So if I want to take a look at the location,

**(CS):** I'm going to determine whether we need a refresh or not.

**(CS):** So if I look at infrastructure at distributed location,

**(CS):** that to me is a good question.

**(CS):** Refresh your expansion.

**(CS):** We're not there yet.

**(CS):** What if I just want to look at my existing inventory there?

**(DM):** OK, OK.

**(CS):** I I don't want to refresh or I don't want to.

**(CS):** I don't want to grow that environment.

**(CS):** I just want to see it.

**(DM):** OK.

**(CS):** Enhanced VM management lifecycle power cycle.

**(CS):** That makes sense to me.

**(DM):** OK.

**(DM):** Are these all scenarios that you were aware arc could do or are these is some

**(DM):** of this kind of new information for you on the scenarios that are listed here?

**(CS):** No, the it's not new.

**(DM):** OK.

**(CS):** The at scale authentication familiar with the refresh and expansion.

**(CS):** I don't remember that because that strikes me as strange because it's making

**(DM):** OK.

**(CS):** assumptions, right?

**(DM):** OK.

**(CS):** VM management.

**(CS):** Yeah, absolutely.

**(CS):** I get that because that's that's what drove me to look at it in the first place.

**(DM):** OK.

**(DM):** And if you are coming for the first time and starting to connect things,

**(DM):** which of these options would you would you?

**(DM):** Would you choose?

**(CS):** Probably 3 VM management.

**(DM):** Over three. OK, got it. All right.

**(CS):** Yep.

**(DM):** And so for the just for the sake of seeing the last screen here,

**(DM):** do you mind clicking on submit and and we'll see what I'm sorry, submit.

**(DM):** Yeah. At the bottom there.

**(CS):** Oh, got it.

**(DM):** And so this is what it would what it would recommend based off of the

**(CS):** Click onboarding. Generate a script on target. Yep, Yep,

**(DM):** selections you made previously.

**(CS):** Yep. That's all the stuff. This is all what I expect.

**(DM):** OK. And then yeah.

**(CS):** Generous script pointed to the target server onboard single yes testing and

**(CS):** validate before. Oh that all. I like actually testing and validation

**(DM):** Hmm.

**(CS):** because just because you build it doesn't mean it's good.

**(DM):** Hmm.

**(CS):** And to just because it's even though it's good, it doesn't mean scalable, right?

**(CS):** So is it part of a server pool you know is it?

**(CS):** Is it a load balanced environment?

**(CS):** That would be valuable to know.

**(CS):** Is this ready?

**(CS):** Is this ready to be load balanced or added to an application pool across

**(CS):** multiple physical servers?

**(CS):** That would be important to know.

**(DM):** Mm hmm.

**(CS):** Insurance compliance.

**(CS):** Absolutely. Number four, 100%.

**(CS):** I I think that's something that we don't really do as well as we should.

**(DM):** OK.

**(CS):** So setting assuming we can set security policies policies,

**(CS):** you know like minimum patch level.

**(DM):** Yep.

**(CS):** File scanning.

**(CS):** You know, malware detection and all that other

**(CS):** stuff, so.

**(CS):** That would be valuable.

**(DM):** So I I want to be a sensitive time.

**(DM):** I know you have.

**(DM):** We just have a little minute left jisu.

**(DM):** I'm sorry I didn't leave more time for us to ask questions, but jisu do you have?

**(CS):** Sure. No.

**(CS):** It's OK. No, it's OK.

**(DM):** Do you have a question that you'd like to ask a participant based off some of the

**(DM):** stuff we've covered today?

**(JP):** And maybe one last question, after looking at all this experience,

**(DM):** Yeah.

**(JP):** if you were to make a decision to onboard, what else information do you think you

**(JP):** will still need to dig through and find more about in the documentation?

**(JP):** Or do you think you have a sufficient information to make onboarding decision?

**(CS):** I.

**(CS):** I think I have good information to make onboarding decisions.

**(CS):** The the questions I would have and I keep going back to the same theme,

**(JP):** Mm hmm.

**(CS):** right pooling. So determining how you how you slice and

**(CS):** dice and how you manage and maintain your resources. That to me is would be.

**(CS):** Exceedingly valuable.

**(CS):** So onboarding no question.

**(CS):** So you're asking about minimum patch level security level.

**(CS):** All those other things.

**(CS):** These are compliant.

**(CS):** These aren't, you know what I said to David about

**(CS):** showing what operating systems are compliant or or.

**(CS):** Are onboardable right?

**(CS):** That would really help.

**(CS):** And then also you know the Java or the security patch level and those things

**(CS):** that here's our minimum requirement to onboard bang right there in front of me.

**(CS):** So I can look at a server and say all right,

**(CS):** I'm not even gonna try to do this because it's not.

**(CS):** It's not compatible yet.

**(CS):** We need to upgrade.

**(CS):** It's pretty.

**(DM):** So.

**(CS):** It's pretty intuitive.

**(CS):** I mean the whole onboarding bit is, is super intuitive.

**(CS):** That's just that's the intuitive part.

**(CS):** Now the question is the downstream value.

**(CS):** That's where I'm focused.

**(DM):** Mm hmm.

**(DM):** Perfect. Well, Chris, I really appreciate.

**(DM):** I know you have to to scoot.

**(DM):** I sent in the chat a link to the form. If you wouldn't mind just opening that up

**(DM):** so you have access to it.

**(DM):** It's a 3 short questions in the in the chat there and you don't obviously don't

**(DM):** have to fill it out right now if you have to run, but it's 3 short questions.

**(DM):** Just kind of reflecting on what we took a look at and and highlighting where you

**(CS):** OK.

**(DM):** think we need to improve the most, but I really appreciate all the feedback.

**(CS):** Sure.

**(DM):** And reflection on your experience. And then also on the stuff we put in

**(CS):** Well, this is.

**(DM):** front of you.

**(DM):** So thanks so much.

**(CS):** Yeah, I mean this is.

**(CS):** I like this was interesting.

**(CS):** It was interesting you got. You got me thinking about it a lot

**(DM):** OK.

**(CS):** broader now than I was before, so.

**(DM):** Well, thank you so much, Chris.

**(DM):** It's been.

**(DM):** It's been a pleasure talking to you.

**(CS):** Good stuff.

**(CS):** Alright guys, take care.

**(DM):** All right.

**(DM):** You too have a good rest of your day.

**(JP):** Thank you so much.

**(CS):** Bye.

**(DM):** Bye.

