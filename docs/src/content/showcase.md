---
project: Nearby
tagline: A neighborhood marketplace for buying, selling, and trading within walking distance.
---

## /intent
agent: Noor
summary: Set the project's context: who Nearby serves, its design principles and its constraints.

Nearby is a tool for neighbors, and its trust comes from proximity: the person selling lives down the street. The principles put safety and simplicity first.

### Output

**Nearby, a walking-distance marketplace**

---

**Users**

**Sellers** are moving, decluttering or upgrading. They post in bursts: a moving weekend, a garage cleanout. Most have tried Craigslist or Facebook Marketplace and found the effort too high for a $10 lamp. When posting takes more than 60 seconds, they put the item on the curb with a "FREE" sign.

**Buyers** want a bargain or a short trip, and prefer walking two blocks to waiting two days for shipping. They open the app with no item in mind, so browsing serves them better than search. They come for the walking-distance limit.

**Organizers** are block captains, community garden coordinators and buy-nothing group admins. They run lending, gifting and sharing through Facebook Groups, group texts and paper flyers, and want better tools for it. They are the likeliest early advocates and the hardest group to satisfy.

---

**Product**

Nearby is a new marketplace for buying, selling and trading within walking distance. Its value is exchange density per square mile. It has to work in one neighborhood before it expands, and it grows outward from each active neighborhood.

Revenue: optional promoted listings and partnerships with neighborhood businesses.

---

**Design principles**

- **Walking distance decides what belongs.** A feature that does not depend on proximity is left out.
- **Effort matches the price.** Most items cost under $20, and each step is sized to that.
- **Distance before reputation.** "3 blocks away" earns more trust than "4.8 stars". Listings show the neighborhood and no star ratings.
- **Speed for sellers, discovery for buyers.** Neither is improved at the other's cost.

---

**Constraints**

- Mobile first. More than 90% of expected use is on a phone, in motion.
- No identity verification at signup. In a small market, signup friction stops adoption.
- Works in a neighborhood with as few as 50 active users.
- No delivery. People walk to collect.
- An exact address stays hidden until both people agree to share it.
- No transaction fees, and no payment step between neighbors.
- WCAG 2.2 AA on every screen.

---

**Ethical stance**

- No fabricated urgency or social proof. No "3 others are looking at this".
- Every notification is opt-in. No re-engagement notifications.
- Data minimization: only what the core function needs. Home location is never sold and never used for ad targeting.
- Every promoted listing is labeled.
- Feedback about a person is private and constructive. A person's conduct is never shown in public.
- No pattern that manipulates a neighbor into an exchange. If revenue depends on one, the revenue model changes.

---

**Success**

For sellers, the item is gone and posting took under a minute. For buyers, something worth the walk turns up close to home. A person who opens the app less often because they found what they needed quickly is a success.

For the business, success is exchange density: completed exchanges per 1,000 households per week within a walkable radius. A neighborhood where 20 things change hands every week, sold, traded or given away, is a success. A city with 100,000 users across 50 neighborhoods, none of them dense, is a failure.

---

**Open questions**

- Which city and country is the first neighborhood in?
- When does the first neighborhood launch?
- Who approves the brief and the wireframes?
- Can a person under 18 hold an account?
- What does a neighborhood business get from a partnership?

## /strategize
agent: Ember
summary: Framed the opportunity, mapped competitors, wrote a testable hypothesis and scoped the MVP.

Marketplace, Craigslist and Nextdoor treat location as a search filter. In Nearby, walking distance is the product, and each bet in the brief says what a pilot neighborhood would show if it were wrong.

### Output

**Nearby's walking-distance marketplace**

---

**Context**

US peer-to-peer exchange exceeds $200B. Nearby competes with the products below and with habits that involve no product: the group text, the paper flyer, and the item left on the curb with a FREE sign [project context].

| Competitor | Thesis | Trust rests on | Use of location | Estimated completion |
|---|---|---|---|---|
| Facebook Marketplace | Scale wins | Facebook identity, eroding | Filter | About 25% |
| Craigslist | Open classifieds | Nothing | City | About 15% for local items |
| Nextdoor | Neighborhood social network; commerce secondary | Verified address | Minimal | Very low |
| Buy Nothing groups | Gift economy inside a community | Facebook group membership | Group, no distance within it | About 60% within a group |

---

**Gap**

Every competitor uses location as a search filter or as group membership. None builds trust, discovery and handover on walking distance.

---

**Opportunity**

Neighbors exchange at a high rate where membership is local, using manual tools.

---

**Goals**

- Most listings end in an exchange.

---

**Constraints**

- Cold start: an empty neighborhood gives a buyer no reason to return, so activation precedes growth spending. The product has to work with 50 active users [project context].

---

**Guiding Principles**

2. The walking radius decides. Cut a feature that works the same without it.

4. Trust comes from tenure and proximity. Choose "3 blocks away" over a star rating.

---

**Key Assumptions & Open Questions**

**Proximity and neighborhood trust signals raise completion.** Listings limited to walking distance, each showing the other person's tenure and distance, complete more often, because the handover is a walk and the other person is a neighbor. Every goal depends on this. Wrong if pilot listings complete no more often than Facebook Marketplace listings.

**Walking distance holds enough supply.** A low-density radius may hold too few listings to browse. Buyers who find nothing new churn, and sellers follow. Wrong if a pilot neighborhood with 50 active users has no new listing inside a buyer's radius in most weeks.

**A tap is enough to arrange a handover.** The first version has no messaging, so two people agree a time and place through an expression of interest alone. If they cannot, interest does not convert to an exchange. Wrong if most pilot exchanges are arranged outside Nearby, or if interest is expressed and the item does not change hands.

---

**Proposed Scope (Phase 1)**

A neighborhood is a 10-minute walking radius, about half a mile, around the person's home location.

Included:

- Post an item with a photo, a price or "free", and a location radius, in under 30 seconds.

- One-tap expression of interest in an item.

- Trust signals per person: account age, neighborhood tenure, approximate distance.

Waiting:

- Messaging, in the second version.

### Philosopher

What does "neighborhood" mean? On a dense city block, walking distance might be 0.2 miles, and you can see the seller's building from your window. In a suburb it might be the subdivision, a mile across. In a rural town it might be the whole town. Nearby assumes everyone shares one definition of "nearby", and they don't. Whether it means a radius, a census tract, a zip code or a felt sense of community changes the whole trust model.

### Storytelling

Situation, complication, resolution works only if the complication is checked against evidence before the brief is written. Nearby's first complication was sized to fit a plan to compete with Marketplace. The evidence cut it down to what holds: existing tools are the wrong shape for walking distance.

## /investigate
agent: Ember
summary: Planned the research, with interview scripts for buyers, sellers and community organizers.

Before any design, the research goes to people who already trade locally: neighbors selling furniture from their stoops, buy-nothing admins sorting requests in Facebook comments, and people who walk past "FREE" signs and wonder what they're missing.

### Output

**Nearby neighborhood exchange interviews**

---

**Research objective**

- What does walking distance change about an exchange, and how far is it in an urban and a suburban neighborhood? Tests the bet that walking distance differentiates exchange, its risk of thin supply at low density, and the open question of what defines a neighborhood [brief].
- Does proximity to the other person raise trust in the exchange or safety concerns? Tests the bet that people trust neighbors more than online strangers, and its risk that proximity raises safety concerns [brief].
- At which steps do Facebook Marketplace, Buy Nothing groups and Craigslist fail an exchange between neighbors? Tests the claim that these tools do not fit walking-distance trust and logistics, which the 60% completion hypothesis rests on [brief].

---

**Method**

Semi-structured interviews, 45 minutes each, 13 sessions. The bets concern listing choice, the decision to show up and the causes of failed exchanges, which participants can report from past exchanges. The guides ask about past behavior only.

---

**Participants**

People who exchange locally, in an urban neighborhood (more than 5,000 households per km²) and a suburban one (1,000 to 3,000 households per km²). Every group draws from both.

| Group | Sessions | Must have | Mix | Excluded |
|---|---|---|---|---|
| Sellers | 5 | Sold or gave away 3 or more items locally in the past 6 months | Facebook, Craigslist, curb alerts, word of mouth | Professional resellers, business accounts |
| Buyers | 5 | Bought or picked up an item from a local stranger in the past 3 months | Searchers for a specific item and browsers | |
| Community organizers | 3 | Current admin or moderator of a Buy Nothing group, neighborhood exchange group or community swap with 50 or more members | | |

Recruitment channels: Buy Nothing group admins, Nextdoor posts, and flyers at coffee shops and on community boards. Target: 18 recruits for 13 sessions, leaving 5 reserves.

---

**Timeline**

| Stage | Dates | Work |
|---|---|---|
| Recruitment | November 16 to 20, 2026 | Outreach, screening, scheduling |
| Pilot | November 23 | One session with a reserve seller; wording and timing corrected the same day |
| Fieldwork | November 24 to December 4, no sessions November 26 or 27 | 3 to 4 interviews a day, with a debrief between sessions |
| Synthesis | December 7 to 10 | Affinity mapping of the session notes |
| Reporting | December 11 | Findings report |

---

**Protocol**

**Opening (5 min)**

- Purpose: "We are learning how people in neighborhoods sell, give away and trade things. We are not testing you or any product, and there are no wrong answers."
- Consent: "I would like to record the audio of this call so that my notes are accurate. Only the research team hears the recording, and your name will not appear in anything we write. You can skip any question or stop at any time, and the gift card is yours either way. Is it all right if I record?"

**Sellers: core questions (35 min)**

**Distance**

- Tell me about the last thing you sold or gave away locally. Walk me through it from the moment you decided to get rid of it.
  - Probe: How did you decide where to list it? What made you choose that over the other places?
  - Probe: How long did it take from that decision until the item was gone?
- How far did the person who took it come?
  - Probe: Where did the handover happen, and who chose the place?
  - Probe: Tell me about a time someone came from much farther away. What was different?
- When you say "my neighborhood", where does it start and end?
  - Probe: Which of your exchanges happened inside it?

**Trust**

- What did you know about that person before you met?
  - Probe: How did you learn it?
  - Probe: How did it affect the handover?
- Tell me about a time the person who took an item turned out to live close to you.
  - Probe: What changed once you knew?
- How have you told people where to come for a pickup?
  - Probe: Tell me about a time you hesitated to say where you live. What did you do?

**Where today's tools fail**

- What was the hardest part of that last sale or giveaway?
  - Probe: Walk me through that part step by step.
- Tell me about something you wanted to sell or give away locally and did not.
  - Probe: What stopped you?
  - Probe: What happened to the item?
- Tell me about an exchange that went badly.
  - Probe: What did you do next?
  - Probe: Where did you list the next item?

**Buyers: core questions (35 min)**

**Distance**

- How did you get there, and how long did the trip take?
  - Probe: Tell me about an item you wanted and did not go to get. How far away was it?
  - Probe: Tell me about the last time you passed a "FREE" sign or items left on a curb. What did you do?

**Community organizers: core questions (35 min)**

**Where today's tools fail**

- What do you do for the group outside its platform: texts, lists, paper?
  - Probe: What made you start doing that?
- Tell me about a time you tried a different tool for the group.
  - Probe: What made you stay with it, or go back?

---

**Logistics**

- **Incentive:** $50 gift card for each participant, including the pilot participant.
- **Observers:** One interviewer and one note-taker per session, no other attendees. They debrief after each session and add what the notes missed before the next one starts.

## /blueprint
agent: Wren
summary: Mapped the service blueprint: the actors, what each one sees, the work behind it and the dependencies.

A $5 exchange runs on geolocation, notification timing, trust signals and moderation, and ends with a handoff on the sidewalk that the app never sees. The blueprint maps each of those and what happens when one fails.

### Output

**Nearby item exchange service blueprint**

**System overview**

A neighbor posts an item, and another neighbor within walking distance claims it and collects it on foot. Sellers want the item gone with little effort, buyers browse what is close, and organizers moderate their neighborhood's listings [project context] [brief].

---

**Service blueprint**

**An exchange, from post to handoff**

*Frontstage.* The seller, selling a couch during a moving week. Post to handoff takes 4 to 48 hours.

| Step | What the seller does and sees | Pain point |
|---|---|---|
| 1 | Photographs the couch. Sees a suggested title and category. | |
| 2 | Sets a price or free, and a pickup preference: porch, meet outside or flexible. The preference is prefilled from the last listing. | |
| 3 | Posts. Sees the listing as a pin on the neighbors' map. | A first-time seller clearing a home stops at 3 listings. |
| 8 | Gets a push notification of the buyer's interest. Sees the buyer's walking time and neighborhood tenure. | Notification batching delays it up to 15 minutes after the buyer's tap. |
| 9 | Accepts or ignores. Sees a suggested meeting point and time. | |
| 11 | Meets the buyer outside and hands over the couch. Any payment passes between them. | The app records nothing at the handoff. |
| 12 | Marks the couch exchanged. Sees their exchange count in Capitol Hill. | |

*Line of interaction.* Until they meet at 11, the seller and the buyer reach each other only through the platform.

*Frontstage.* The buyer, walking home with nothing in mind to buy. Seeing the couch to carrying it takes 20 minutes to 2 hours.

| Step | What the buyer does and sees | Pain point |
|---|---|---|
| 4 | Opens the app. Sees items within walking distance as map pins, or as a list sorted by distance. | |
| 5 | Opens the couch. Sees the photo, the description, the walking time, the seller's neighborhood tenure and the pickup type. | |
| 6 | Expresses interest in one tap. Optimistic UI confirms it, with undo for 5 seconds. | |
| 7 | Checks the activity tab. Sees a waiting status and the seller's usual response time. | The buyer waits on the batch, then on the seller, and may be home by then. |
| 10 | Gets a push notification that the seller accepted. Sees the meeting point and a time window. | |
| 11 | Walks over, meets the seller and takes the couch. | |
| 12 | Marks it received. Can say whether the couch was as described. | |

*Line of visibility.* Hidden from the seller and the buyer: each other's address, the 15-minute notification batching, content moderation of the listing, and trust inference.

*Backstage*

| Service | What it does |
|---|---|
| Notification Service | Batches interest from 6 every 15 minutes and sends it at 8. Notifies the buyer at 10 that the seller accepted. Sends both a pickup reminder 1 hour before the agreed time. |

**A listing held or reported**

*Frontstage.* The seller, and a neighbor who reports.

| Step | What they do and see |
|---|---|
| 1 | The seller posts a listing that automated moderation holds. It stays off the map while held. |
| 1 | A neighbor reports a listing, or reports a person for harassment. |

*Line of interaction.* The held listing or the report goes to that neighborhood's organizer.

*Frontstage.* The organizer, who runs a group's exchanges by hand and is present for as long as the neighborhood is.

| Step | What the organizer does and sees | Pain point |
|---|---|---|
| 2 | Opens the held or reported listing in the moderation tools. | One organizer reviews every held listing in the neighborhood. |
| 3 | Escalates to Nearby staff when the case needs a suspension or legal action. | |
| 4 | Otherwise releases the listing, hides it, or warns the person. | |

---

**Ecosystem & dependencies**

| What relies on it | Relies on | Failure when it goes |
|---|---|---|
| Interest notifications, acceptance notifications, pickup reminders | Notification Service and the push notification service | Notification service down; Push rate limit reached |
| A held listing reaching the map | An organizer's review | Held listing waits for review |
| Any exchange | Enough active neighbors inside the walking radius | Too few listings in the radius |
| Closing a listing and counting the exchange | The seller or the buyer confirming a handoff the app does not see | Handoff not confirmed |

- A listing's map pin and walking time allow triangulation of the seller's home before both sides have agreed [project context].
- The daily digest is the one push sent with no exchange in progress, so it is where engagement messaging could grow. The push rate limit and the digest's last place in the sending order limit it [project context].

---

**Process architecture**

**Neighborhood.** The walking radius sets what a person can browse. A named neighborhood, such as Capitol Hill, is the area one organizer moderates and the name on a person's exchange count. A listing belongs to the named neighborhood its seller lives in.

**Addresses.** Neither address is shown before both have agreed: the buyer by expressing interest, the seller by accepting. Both then see the meeting point. A porch pickup shows the seller's address to the buyer at that point [project context].

**Pushes.** Push notifications are rate-limited to 5 per person per day. One interest batch is one push, covering all of that person's listings. The daily digest carries 3 to 5 items posted in the person's closest radius and is sent only on a day with no other push. The fifth push of a day is reserved for a pickup reminder.

---

**State & failure analysis**

| Failure | What the person experiences | Blast radius | Recovery |
|---|---|---|---|
| Push rate limit reached | A seller with many listings in one day gets no interest notifications after the fourth push. New interest waits in the activity tab. | One person for the rest of that day, and the buyers waiting on them. | The limit resets the next day. A pickup reminder still arrives as the fifth push. |
| Handoff not confirmed | The listing stays open after the item is gone, other interested neighbors keep waiting, and the exchange is not counted for either person. | One listing and the neighbors waiting on it. | Either person's confirmation closes it. With neither, the seller is asked once, the day after the agreed time, whether the exchange happened. On a no, the listing returns to the map with its other interest. |

| How a listing ends | What ends it | What happens next |
|---|---|---|
| Data deleted | Any ending. | The meeting point, the time window and any address shown for a porch pickup are deleted 24 hours after the listing ends. Photos and listing text are deleted 30 days after. The exchange count and the as-described answer are kept as trust inputs. |

---

**Open questions**

- Is an organizer's area a named neighborhood with a fixed boundary, or the listings inside the organizer's walking radius?
- Should an organizer or Nearby staff be the first to review a listing held for a prohibited item?
- Does the limit of 3 active listings hold for a first-time seller clearing a home in one week?

### Storytelling

The easy drawing is a straight line from buyer to backend to seller. The service runs across people who don't know each other yet: the buyer, the seller, the moderator catching abuse, and the future buyers whose trust depends on this exchange going well. Where the blueprint flattened the seller into a system role, it went back to who sellers are at each step: Sarah in her moving week, a buy-nothing organizer answering fifteen messages.

## /journey
agent: Wren
summary: Designed the core flows: posting, discovering, buying and messaging.

Each flow takes fewer taps than the alternatives. When the seller lives down the street, paying is the easy part. Finding things and arranging the pickup are the hard ones, and the flows spend their effort there.

### Output

**Problem Statement**

A neighbor posts an item from their phone. Another neighbor finds it within walking distance and sends interest, and the two arrange a pickup on foot. The flow starts when either opens Nearby and ends when both confirm the exchange and the item leaves the map. Payment is in person, outside the app [project context]. Target: 60% of listings end in an exchange, against 20 to 30% on broad platforms [brief].

---

**User Context & Variations**

- **A seller clearing out in a burst.** In her moving week, she posts several items in spare minutes on a weak connection, and leaves the item on the curb if a post takes more than a minute [project context] [blueprint]. + opens the camera with no menu, the pickup choice defaults to her last listing's, and an offline post goes to the offline queue.
- **A buyer with nothing in mind.** He opens the app on the walk home and wants nothing until he sees it [blueprint]. The app opens on the map of items in walking range, with no search box, and interest is one tap that commits him to no time or place.
- **An organizer moving a gift group.** Her group gives things away [blueprint]. Free has the same weight as a price on Details, is a filter in discovery, and follows the same path as a priced item.

---

**Screen-by-Screen Flow**

**Posting an item**

- Start: + on any screen
- 1 Camera: photo or gallery
  - Camera permission denied? Gallery
- 2 Photo check: title suggested
- 3 Details: price, Free or Trade
  - Price far above similar items? Warn, never block
- 4 Pickup: how and when
- 5 Preview: as neighbors see it
  - Flagged at Post? Held for review
- 6 Live: pin on the map
  - Offline? Offline queue, posts on reconnect

**Pickup.** The handover method (porch pickup, meet outside or flexible) and her availability. The answer sets what the accepted buyer sees on the Pickup plan. It defaults to her last listing's, so in a burst she confirms it.

**Discovering what is nearby**

- Start: Open Nearby
  - Location off? Turn on, then retry
- 1 Map or List: items in walking range
  - Nothing in range? Widen the radius or post
- 2 Item card: photo, price, walk time
  - From the daily digest? Card stack in place of the map
- 3 Item detail: buying starts here
  - From a push notification or deep link? Opens here

**Map.** Home. Buyers do not know what they want until they see it [project context], so the app opens on the items in walking range: pins with thumbnails, the radius labeled in walking minutes, and the neighborhood name. Pinch or the 5, 10 and 20 minute presets set the radius; items outside it stay visible, faded. A pin opens the Item card. Without geolocation the map cannot render: the screen requests location with a link to settings, and retry returns here [blueprint]. The empty state offers the 20 minute radius and posting an item, which opens the Camera.

**Item card.** An overlay on the map with the photo, title, price and walk time. Tapping the card opens Item detail; tapping the map closes it.

**Buying**

- Start: Item detail
- 1 Interest sent: one tap, with undo
  - Taken? Similar items nearby
- 2 Waiting: status in Activity
  - No answer? Interest expires
- 3 Interest from a neighbor: seller accepts one
  - Seller passes? Buyer is told
- 4 Pickup plan: place and time, for both
  - Cannot make it? Reschedule by quick reply
- 5 Exchanged: both confirm
  - Fell through? Listing stays live

**Interest sent.** A state of Item detail. The button uses optimistic UI, because notification batching delays the seller's alert [blueprint]. An undo window follows, and the interest is sent to the seller when it closes. If the item was just taken, the screen says so and offers the 3 nearest similar items. Offline, the interest goes to the offline queue and shows as pending.

**Interest from a neighbor.** A push notification names the interested neighbor, their walk time and their tenure [blueprint], and opens the listing's interested neighbors; with push off or undelivered, the list is on the listing at her next app open. She accepts one with "It's yours" or leaves it. Accepting moves her and that buyer to the Pickup plan. The other interested neighbors stay waiting until the exchange is confirmed.

**Pickup plan.** One screen for both: a meeting place and a time window, suggested from the listing's pickup choice and availability. For meet outside and flexible the place is the nearest intersection [blueprint]. For porch pickup it is the seller's address, shown from acceptance and only to the accepted buyer, because acceptance is where both have agreed [project context]. The acceptance notification opens this screen for the buyer. Quick replies are sent here, and both confirm the exchange here.

**Exchanged.** After meeting, the seller marks the item exchanged and the buyer confirms he got it. On both confirmations the item leaves the map, both exchange counts increment, the waiting neighbors are told it is gone, and the buyer may give private feedback on whether it was as described. If either says it fell through, the listing stays live, that buyer's interest ends, and the seller returns to her interested neighbors.

**Messaging**

- Start: Interest accepted
- 1 Thread opens: on the Pickup plan
  - 3 exchanges together? Free text opens
- 2 Quick reply: one tap sends
  - Message reported? Sender loses messaging
- 3 Thread ends: deleted after the exchange

**Thread.** Messaging coordinates one pickup. The thread opens on acceptance, between the seller and the accepted buyer, on the Pickup plan; there is no inbox. No messaging before acceptance keeps out spam, haggling and harassment [blueprint].

**Quick replies.** Canned replies: on my way, I can come now, hold it until tomorrow, I need to reschedule, and never mind. One tap sends. The reschedule reply reopens the time window, and the person rescheduling picks a time inside the seller's availability. The never mind reply ends the plan as "it fell through" does.

---

**Interaction Specifications**

| Moment | Change | Timing |
|---|---|---|
| Tap "I want this" | Optimistic UI: the button becomes a checkmark and "Interest sent" | 150 ms, spring |
| Interest sent | Undo window; undo returns the button to its first state; on expiry the interest is sent to the seller | 5 seconds |
| Interest unanswered | It expires; the buyer is told and the seller is asked once | 48 hours after it was sent |
| Both confirm the exchange | The item leaves the map and both exchange counts increment | At the second confirmation |

---

**Multi-Channel Map**

| Handoff | What passes |
|---|---|
| Phone to the sidewalk | The buyer takes the meeting place and the time window. Payment and the item change hands in person, and only the two confirmations return to the app [project context]. |

---

**Open Questions**

- Messaging is outside the first release's scope, and interest is meant to need no messaging [brief]. Do the quick replies ship with the first release, or does coordination stop at the suggested place and time?
- Trade is a choice on Details, but before acceptance a buyer can send only interest. How does a buyer say what they would trade?

### Philosopher

Buying and selling assume every exchange has a price. In real neighborhoods, the most common exchange is a gift: lemons from someone's tree, a bike a kid outgrew, moving boxes. If Nearby only supports buying and selling, it misses the giving that builds trust between neighbors. Should Free be a price, or should giving be its own mode with its own social rules?

### Storytelling

The protagonist arc keeps the journey honest about whose experience it is. Sarah moved in three weeks ago, needs her couch gone before her parents visit on Saturday, and is posting from a hallway with bad reception, hoping someone in her building saves her a trip to Goodwill. Other sellers are excited, or anxious, or not moving at all and have a bike to pass on. Each kept its own arc, since one blended arc would hide the differences the team needs to see.

## /organize
agent: Wren
summary: Defined the information architecture: categories, navigation, search and wayfinding.

People open Nearby to see what's around, so proximity comes first and category second. The map is the main navigation, categories filter it, and search is a second way in.

### Output

**Site Map / Navigation Structure**

- **Explore** (default)
  - Map of items within the walking radius
  - Item card, over the map
  - Radius: 5, 10 or 20 min walk
  - Filters
- **List** (same items)
  - Items by walking time
  - Groups: On your block, 5-min walk, 10-min walk
  - Search, on pull-down
  - Filters
- **Post (+)**
  - Photo
  - Details and category
  - Pickup
  - Preview and post
- **Activity**
  - Interests you sent
  - Interests in your listings
  - Pickup, with quick replies
- **You**
  - Your listings
  - Your profile, as neighbors see it
  - Settings: location, notifications
  - Moderation, for organizers

**Decisions in the structure**

| Decision | Reason | Depends on |
|---|---|---|
| Explore is the first tab and the launch screen. Its label is Explore, not Map. | Buyers browse without a target item [context]. Walking distance is the product, so its map is the home screen [brief]. The label names the task. | Location permission: with location off, every tab is empty [blueprint]. The neighborhood name in the header depends on the neighborhood definition [brief]. |
| Explore and List are separate tabs over one item set. | A map and a scrolling list use different gestures. Radius and filters persist across both [journey]. | The walking radius from geolocation [blueprint] |
| Free and Wanted are browse entries beside the categories. | A quarter of listings are meant to be free [brief], and a price filter would put them one step further than a couch for sale. Wanted shows demand in a neighborhood with few listings. | The Free price option in the posting flow [journey] |

---

**Navigation Specification**

The pattern is hub and spoke, with the map as the hub. Browsing, posting, arranging a pickup and managing listings are separate tasks with different interactions: a map, a camera and a form, a status list [journey]. Each has a tab. The app launches on the map, which is centered by geolocation.

**Wayfinding**

| What the person needs to know | What tells them |
|---|---|
| Where they are | The neighborhood name in the header, such as Capitol Hill, and a location dot at the map center |
| What they are seeing | The radius label, persistent on Explore and List: "Showing items within a 10-min walk", with the item count |

---

**Taxonomy Documentation**

| Category | Holds | Goes elsewhere | Pilot note |
|---|---|---|---|
| Furniture & Home | Tables, chairs, shelves, lamps, decor, TVs over 40 inches | Appliances go to Kitchen & Dining. Patio furniture goes to Garden & Outdoor. | The largest category [pilot data] |
| Electronics & Gadgets | Phones, laptops, cables, small devices | TVs over 40 inches go to Furniture & Home | |
| Kids & Baby | Kids' clothing, toys, gear, strollers, cribs | | A high share of free items [pilot data] |
| Sports & Fitness | Equipment, bikes, weights | | Bikes are the most-listed single item [pilot data] |

**Rules**

- A listing has exactly one category. Image classification suggests it from the photo and the seller confirms or changes it [journey].
- When two categories fit, such as a kid's bike in Kids & Baby or Sports & Fitness, the seller chooses.
- Free and Wanted are the second parents. A listing priced at $0 appears under Free and in its category. A Wanted listing requests an item and appears under Wanted only.

---

**Search/Browse Strategy**

Browsing is the primary path. Buyers open the app without a target item [context], and Explore and List need no query. Search serves known-item lookup.

**Search**

- The search field is in List, on pull-down. Explore has none.
- Results sort by walking distance, then relevance, with infinite scroll.
- A zero-results search offers a wider radius or posting a Wanted listing.

---

**Open Questions**

- Explore and List show the same items. Do they stay two tabs, or become one tab with a map and list toggle?
- Does a Wanted listing start from Post as well, or only from a zero-results search?
- Bikes are the most-listed single item in the pilot. Do they get a category?

## /wireframe
agent: Wren
summary: Compared posting mechanisms on an idea board, then drew the chosen one as interactive grayscale wireframes and a click-through prototype.

Posting could work in mechanically different ways, so the first artifact was an idea board: each candidate drawn as a small piece of real UI, side by side. Photo-first won and became full wireframes from a grayscale kit where every control works: inputs take typing, chips toggle and buttons press.

### Output

The wireframes below are live markup from the kit: the inputs take typing, the controls are native, and the site's theme flows through them. The idea board holds mechanically different answers to "how does posting work," each a fragment of real UI with its trade-off in the caption. Photo-first won and moved up a rung; the losers stay on the board, so "why isn't it a form?" has an artifact for an answer.

The indigo markers are annotations, each anchored to the element whose decision it records. A few of them:

**Browse ②** Free is a first-class price, with a badge on the card and a chip in the taxonomy. Free exchange is the social glue of a walking-distance market, so it gets its own scan channel. **③** Pending items stay visible: a market that visibly moves reads as alive.

**Post an item ①** The camera owns the top of the screen: this is the photo-first mechanism from the idea board. The photo does the describing, so fields follow it. **④** Audience and cost ("within 1 mile · no fees") sit directly above the commit button, answered at the moment of commitment.

**Posted ①** The confirmation names the audience (842 neighbors), so the seller knows real people nearby will see the listing.

## /articulate
agent: Wren
summary: Set the voice and tone and wrote the copy for empty states, errors and trust signals.

Nearby sounds casual and warm, like a note on a neighborhood bulletin board. The copy covers the hard moments: an empty neighborhood, an error, and deciding to trust a stranger enough to walk to their house.

### Output

**Voice and Tone Framework**

Nearby speaks as one neighbor to another about items that mostly cost under $20 [project context].

| Principle | What it is | What it is not | Do | Don't |
|---|---|---|---|---|
| Neighborly | Warm, direct. Names, contractions, "you". | Corporate or chummy. No emoji, no exclamation marks. | "Dana wants your bookshelf." | "You have received an offer on your listing." |
| Local | Names the neighborhood. Distance is walking time [project context]. | Generic ("near you"), or finer than a minute of walking. No addresses. | "Capitol Hill is quiet right now." | "No items found in your area." |
| Plain | Everyday words that survive translation. | Idiom, slang, culture-bound jokes. No joke in an error. | "Have something you don't need? A neighbor might want it." | "After that, you'll wonder why you ever drove to Goodwill." |
| Honest | States what Nearby knows and what it can't do. | Unbacked reassurance, urgency, or a claim of verification. Signup has no identity verification [project context]. | "New to Nearby" | "Verified neighbor" |

Voice is constant across strings.

| Moment | Tone | How it sounds |
|---|---|---|
| An empty neighborhood, list or tab | Inviting | Says why the screen is empty and offers one action. No guilt, no promise about demand. |
| A system failure | Steady | What failed, what is saved, what to do. No humor. |
| A neighbor passed or didn't reply | Kind | Blames neither person. Points to other nearby items. |
| A trust signal | Factual | A fact about the neighbor. No adjective, score or judgment [brief]. |

---

**Terminology**

| Term | What it means to the person | Words not to use |
|---|---|---|
| Free | A price. Always capitalized. | $0, giveaway, no charge |
| Interest | Telling a neighbor "I want this". The neighbor answers "It's yours" or passes. | Offer, bid, claim, order |
| Exchange | An item changing hands: sold, traded or given. | Transaction, sale, deal, order |
| Walk | Distance as walking time in minutes: "4 min walk" as a label, "within a 10-min walk" in a sentence. Item detail appends miles: "4 min walk (0.2 mi)". | Radius, range, miles alone, near you |

---

**Copy Deck**

Braces mark variables. In Notes, "Longer in translation" marks a fixed-width label.

*Explore and List*

| State | Tone | Copy | Actions | Notes |
|---|---|---|---|---|
| No listings within the walk [journey, Discovering nearby items] | Inviting | **{neighborhood} is quiet right now.** Nothing is listed within a {minutes}-min walk. | Post an item / Look within a 20-min walk | No neighborhood name: "Your neighborhood is quiet right now." Second action hidden at 20 minutes. Longer in translation: both buttons. |
| Neighborhood with no listing posted yet | Inviting | **You're one of the first in {neighborhood}.** Nearby works when neighbors join. Invite people on your block, or post the first item. | Invite neighbors / Post an item | No neighborhood name: "You're one of the first here." |

*Location*

| State | Tone | Copy | Actions | Notes |
|---|---|---|---|---|
| Location permission not granted, first launch | Direct | **Nearby needs your location.** It shows you what's within walking distance. Neighbors see how far away you are, not your address. | Allow location / Not now | "Allow location" opens the OS permission prompt. |

*Post an item*

| State | Tone | Copy | Actions | Notes |
|---|---|---|---|---|
| Photo upload fails [journey, Posting an item] | Steady | **That photo didn't upload.** Your listing is saved as a draft. | Try again | |

*Interest and pickup*

| State | Tone | Copy | Actions | Notes |
|---|---|---|---|---|
| No reply in 48 hours, shown to the person who asked [journey, Expressing interest] | Kind | **{neighbor} didn't reply, so this one is closed.** We'll tell you if the item is listed again. | See what's nearby | |
| The neighbor passed [journey, Expressing interest] | Kind | **{neighbor} passed this time.** Here's what else is nearby. | None | Similar items follow, sorted by distance. |

*Trust signals*

Nearby shows no stars, scores or public reviews [brief].

| Signal | Copy | Where it shows | Notes |
|---|---|---|---|
| Tenure [blueprint, Trust Inference Engine] | Your neighbor since {month} {year} | Item detail, profile card, list card, interest notification | Always month and year, in the locale's date format. |
| New account [blueprint, Trust Inference Engine] | New to Nearby | Replaces tenure for an account's first 4 weeks | Longer in translation: badge. |
| Distance | {n} min walk | Item detail, profile card, list card, interest notification | Rounded to the nearest minute. Under 1 minute: "Close by". Never says where a neighbor lives. Needs plural rules. |
| Exchange history [blueprint, Trust Inference Engine] | {n} exchanges in {neighborhood} | Item detail, profile card | Singular: "1 exchange in {neighborhood}". Hidden at zero. Needs plural rules. |
| Meeting point [journey, Expressing interest] | Meet at {intersection}. Your address stays private unless you choose to share it. | Pickup screen | Intersection from map data. |

---

**Open Questions**

- Should the deck's words follow the journey (Activity, walking minutes, interest before any message) or the posting wireframes (Messages, miles, neighbors messaging directly)?

## /evaluate
agent: Vigil
summary: Found the launch blockers, ranked every issue by severity and named the fix for each.

Each issue got its severity, the heuristic it breaks and the change that fixes it. Both launch blockers are in the handoff between neighbors: the strategy, the flows and the wireframes each start an exchange a different way, and no step gets the buyer to the seller's door.

### Output

**Nearby before launch: posting, browsing and the exchange between neighbors**

---

**Anti-Pattern Verdict**

Minor Issues: dead ends and missing feedback. No deceptive, consent, urgency or addictive pattern.

---

**Priority Issues**

*Critical: blocks core task completion or violates regulations*

**The brief, flows and wireframes disagree on how an exchange starts**
- **What happens:** The launch scope has one-tap interest and defers messaging; the flows route interests to an Activity tab and unlock quick replies on seller acceptance [brief; journey, Flows 3 and 4]. The wireframes have a Messages tab, no Activity, and Posted says interested neighbors "message you directly" [wireframes, Posted].
- **Why it matters:** The seller watches Messages for replies that cannot arrive before she accepts, and no screen lets her accept.
- **Breaks:** consistency and standards.
- **Change:** Decide whether messaging ships at launch, draw one path from incoming interest to seller acceptance, and make Posted describe it.

**A pickup at the seller's door cannot be arranged**
- **What happens:** After acceptance, the meeting point is the nearest intersection for every pickup type [journey, Flow 3]. Addresses stay hidden until both people agree, no step records that agreement, and a first exchange has quick replies only [context; journey, Flow 4].
- **Why it matters:** A seller who chose porch pickup cannot tell the buyer which door, so the couch stays in the apartment or is carried to the corner.
- **Breaks:** match between system and the real world.
- **Change:** Add a mutual address-release step, and show the address on the pickup screen for pickups at the seller's home.

*Major: significant friction, potential user harm*

**The post screen leads sellers to publish their street**
- **What happens:** Post an item lacks the pickup choice and location preview the posting flow has [journey, Flow 1; wireframes, Post an item]. The description hint asks for a line on pickup, and the sample text ends "Porch pickup on Birch St." [wireframes, Post an item].
- **Why it matters:** Sellers put their street in public listing text, the exposure the privacy constraint prevents [context].
- **Breaks:** error prevention.
- **Change:** Restore the pickup choice and location preview on the post screen, and remove pickup from the description hint.

**Browse is a search grid with distances in miles**
- **What happens:** Browse opens on a search bar and a newest-first grid, with distances in miles and no seller tenure on the cards [wireframes, Browse]. The flow and the navigation make the map home, sort by distance, give walking minutes, put tenure on every card and hide search [journey, Flow 2; navigation specification].
- **Why it matters:** Buyers get a general marketplace with a distance filter, without the walking-distance view or the trust signal that differentiate Nearby [brief].
- **Breaks:** consistency and standards.
- **Change:** Redraw Browse with the map as home, the walking radius visible, distance as walking time and seller tenure on each card.

**Neither neighbor can say no once interest is sent**
- **What happens:** The seller can tap "It's yours" or ignore the interest, and the buyer's only exit is a 5-second undo [blueprint, seller touchpoints; journey, Flow 3]. An unanswered interest times out after 48 hours, and no step produces the "Passed" status [journey, Flow 3].
- **Why it matters:** A buyer whose visit lasts 20 minutes to 2 hours waits two days for an answer the seller knows, and a buyer who changed their mind becomes a no-show [blueprint].
- **Breaks:** user control and freedom.
- **Change:** Give the seller a pass action and a way to choose among several interested neighbors, and let the buyer withdraw from Activity.

**The listing cap and the push limit stop a seller without telling them**
- **What happens:** A new account is capped at 3 active listings until its first exchange completes, and push notifications are rate-limited to 5 a day per account [blueprint]. Neither limit has a message or a screen, and pickup reminders share the rate limit with the daily digest [blueprint; copy deck].
- **Why it matters:** A seller clearing a home in one weekend is stopped at the fourth item with no explanation, and can miss a pickup reminder on the day buyers arrive [context; journey].
- **Breaks:** missing feedback.
- **Change:** Tell the seller when a limit is reached and what lifts it, and prioritize pickup reminders over every other push notification.

**Reports reach an organizer who has no screen**
- **What happens:** Organizers are first-line moderators and receive harassment flags silently, yet no flow, tab or screen gives them a moderation queue, or lets them hide a listing or warn a person [blueprint; journey, Flow 4; navigation specification]. Only messages have a report control, and a reported person loses messaging pending a review that has no screen [journey, Flow 4].
- **Why it matters:** A neighbor who sees an unsafe listing cannot report it, and a person reported in error stays unable to arrange a pickup.
- **Breaks:** user control and freedom.
- **Change:** Give organizers a moderation queue with actions, add a report control to listings, and show a reported person their status.

**The screens show only a busy neighborhood**
- **What happens:** Browse shows 38 listings, and Posted says 842 neighbors can see the listing "right now" and that a first reply "usually arrives within a day" [wireframes, Browse and Posted]. Every neighborhood starts below the density the service needs, and the empty states exist only as copy [blueprint; copy deck, empty states].
- **Why it matters:** The first sellers in a new neighborhood, the ones a cold start depends on, are promised an audience and a reply time that neighborhood cannot deliver.
- **Breaks:** visibility of system status.
- **Change:** Draw Browse and Posted for a low-density neighborhood, and compute audience and reply time from that neighborhood's activity.

*Minor: degraded experience, recoverable*

**Trade and Wanted cannot be posted**
- **What happens:** Onboarding promises things "for trade" and the search empty state offers "Post a Wanted" [copy deck]. The price field has only a Free chip, and posting starts with a photo of the item [wireframes, Post an item].
- **Why it matters:** A buyer who follows the empty state to post a Wanted lands on a camera with nothing to photograph, and Wanted is the demand signal a new neighborhood relies on [navigation specification].
- **Breaks:** consistency and standards.
- **Change:** Give the price field a Trade choice and Wanted a text-first form, or remove both from the copy.

**The post form adds fields the posting flow leaves out**
- **What happens:** The flow posts in four taps: photo, title, price, publish [journey, Flow 1]. The form adds Condition, and a Description whose hint encourages filling it in [wireframes, Post an item].
- **Why it matters:** Sellers abandon a post that takes more than 60 seconds, and each added field moves the form toward that limit [context].
- **Breaks:** flexibility and efficiency of use.
- **Change:** Require only photo, title and price, and collapse Condition and Description into an optional section.

**Declining location ends the app**
- **What happens:** "Not now" on the location permission prompt leaves an app that "can't show you anything", with Settings as the only way back [copy deck, onboarding]. No state covers approximate location permission, which cannot meet the 100-meter accuracy the radius needs [blueprint].
- **Why it matters:** A person careful about location, in a privacy-first product, must grant precise location before seeing anything, or leave.
- **Breaks:** dead ends.
- **Change:** Let a person who declines see a neighborhood without precise location, and design the approximate-location state.

**A neighborhood is a name on screen and a radius underneath**
- **What happens:** The screens name a place and a flat range: "Post to Maplewood", "Visible to neighbors within 1 mile" [wireframes, Post an item]. The service computes a per-user walking radius from housing density, bounded by highways and rivers [blueprint].
- **Why it matters:** A seller cannot tell who will see the listing, and an organizer moderating a neighborhood has no boundary to apply.
- **Breaks:** match between system and the real world.
- **Change:** Settle one definition of neighborhood and show the seller the listing's reach.

**Trust signals state where people live**
- **What happens:** "Your neighbor since March 2025" and "Lives about a 3-minute walk from you" state residence [copy deck, trust signals]. Signup has no identity verification, so both come from geolocation history [context].
- **Why it matters:** A buyer deciding whether to walk to a stranger's door reads an inferred location as a verified neighbor.
- **Breaks:** match between system and the real world.
- **Change:** Word tenure and distance as observed location.

**Nothing says how the seller gets paid**
- **What happens:** Payment is off-platform, and no listing, pickup screen or quick reply says whether the seller takes cash or a payment app [brief; journey, Flows 3 and 4].
- **Why it matters:** With free text locked, a buyer arrives at the door without knowing what to bring.
- **Breaks:** help and documentation.
- **Change:** Let the seller state accepted payment on the listing, and show it on the pickup screen.

**The digest, the new-item dots and the return overlay cannot be turned off**
- **What happens:** A daily digest push notification, a new-item badge on two tabs and an overlay after a day away each prompt a return [journey, Flow 2; navigation specification]. No notification settings are designed.
- **Why it matters:** A person who wants notifications only about their exchanges cannot stop the rest, against the stance that opening the app less often is success [context].
- **Breaks:** user control and freedom.
- **Change:** Design notification settings with a toggle for the digest and for the new-item prompts.

**Free-text messaging unlocks under conflicting rules**
- **What happens:** One flow unlocks free text when each person has three prior exchanges, and the other when the same two people have completed three together [journey, Flows 3 and 4].
- **Why it matters:** Under the first rule a regular can type to anyone and under the second almost no pair can, so which neighbors can explain themselves depends on which rule gets built.
- **Breaks:** consistency and standards.
- **Change:** State one unlock rule in both flows.

**The tab bar on the screens differs from the navigation**
- **What happens:** The screens' tabs are Browse, Saved, Post, Messages and Profile, and the navigation's are Explore, List, Post, Activity and You [wireframes, Browse; navigation specification]. Saved, and the "Share to nearby groups" button on Posted, have no flow [wireframes, Posted; journey].
- **Why it matters:** A person who taps Saved or Share reaches a feature with no defined behavior.
- **Breaks:** dead ends.
- **Change:** Use the navigation's tabs, and give Saved and Share to nearby groups a flow or remove them.

**Posting errors blame the wrong cause**
- **What happens:** The upload failure ends "Good lighting helps it sell faster anyway", which blames the photo for a network fault [copy deck, error messages]. The image moderation message, "This photo was flagged", does not name the rule the photo broke [journey, Flow 1].
- **Why it matters:** The seller retakes a photo that was fine, or guesses at what to change.
- **Breaks:** help users recognize, diagnose, and recover from errors.
- **Change:** Make the upload failure name the connection, and the moderation message name the rule.

*Cosmetic: polish, not blocking*

**Category names differ between Browse and the taxonomy**
- **What happens:** Browse chips read "Plants & garden", "Electronics" and "Free", and the taxonomy reads "Garden & Outdoor", "Electronics & Gadgets" and "Free Stuff" [wireframes, Browse; navigation specification].
- **Why it matters:** A seller picks a category under one name and a buyer filters by another.
- **Breaks:** consistency and standards.
- **Change:** Use one category vocabulary for posting and filtering.

**Posted shows clock time**
- **What happens:** Posted reads "Today, 9:41 AM", and the copy patterns use relative time, "Posted 2 hours ago" [wireframes, Posted; copy deck, microcopy patterns].
- **Why it matters:** The seller reads absolute time on this screen and relative time everywhere else.
- **Breaks:** consistency and standards.
- **Change:** Show posting time as relative time.

---

**Positive Findings**

- A failed upload or a lost connection keeps the draft, and the offline queue posts it on reconnect [journey, Flow 1].
- A denied camera permission falls back to the gallery [journey, Flow 1].
- Optimistic UI shows the buyer "Interest sent" while seller notifications are batched every 15 minutes [blueprint].
- Messaging unlocks on the seller's acceptance, which keeps spam and lowball offers out [blueprint].
- Trust rests on tenure, distance and exchange counts with no star ratings, and a new account is labeled as new [copy deck, trust signals].
- Audience and cost sit above the Post button [wireframes, Post an item].
- Free has a badge and a filter, and a pending item stays visible as plain status [wireframes, Browse].
- The list groups items by walking distance, and every empty state ends in an action [journey, Flow 2; copy deck, empty states].

## /fortify
agent: Vigil
summary: Designed for what goes wrong: ghost sellers, misdescribed items, empty neighborhoods and abuse.

People ghost, misdescribe items and harass neighbors, and every neighborhood starts empty. The design answers with light friction that makes bad behavior harder and good behavior easier.

### Output

**State Inventory**

Severity: Critical causes confusion or data loss; Major significantly harms the experience; Minor reduces trust or perceived quality; Cosmetic is a nice-to-have.

*Every screen*

| State | What the person sees and can do | Recovery and timing | Message | Severity |
|---|---|---|---|---|
| Report sent | Report is on every listing, profile, quick reply and finished pickup in Activity [evaluation]. A confirmation replaces the report sheet. Sending a report blocks the reported neighbor: their listings, interests and quick replies are filtered from the reporter's Explore, List and Activity. A pickup between the two is cancelled. | The block is immediate and permanent, whatever the review decides. The organizer has 24 hours to decide [blueprint]. The report escalates to platform review immediately where the neighborhood has no organizer or the organizer is the person reported, and otherwise after 24 hours without a decision. | "Report sent. You won't see [Name] on Nearby anymore, and they can't contact you. We'll tell you when a reviewer has looked at it. If you're in danger right now, call 911." | Critical |
| The neighbor who was reported | During the review, the pickup with the reporter shows as cancelled and the reporter's listings are filtered out. No screen discloses the report. Pickups and quick replies with other neighbors continue. | No rule broken: nothing is shown. Listing removed: Activity names the listing and the rule, and the seller can edit and repost. Warning: Activity names the rule. Suspension [blueprint]: the sign-in screen names the rule and the appeal address. No message names the reporter. | "This pickup was cancelled." / "A reviewer removed [item] because it breaks this rule: [rule]. Edit it to post again." / "A reviewer found that something you sent broke this rule: [rule]. Another report like this can suspend your account." / "Your account is suspended because of this rule: [rule]. To ask for a second look, write to [address]." | Major |

*Explore and List*

| State | What the person sees and can do | Recovery and timing | Message | Severity |
|---|---|---|---|---|
| No listing has ever been posted within a 20-minute walk | Cold-start empty state: Explore shows the map with the radius and no pins, and List shows the same card. The person can invite neighbors or post. First use lands here after the location permission prompt. | Ends when the first listing goes live in the radius. | The cold-start message [copy deck], with "Post an item" as a second action. | Major |
| Listings were posted before and none is live in the current radius | Empty state on the map or list, with the quiet-neighborhood message and the one-tap expansion to a 20-minute walk [journey, Flow 2]. The expansion action is removed where the 20-minute radius is also empty. Listings from other neighborhoods are not shown [brief: multi-neighborhood browsing is out of scope]. | Pull to refresh. Ends when a listing goes live in the radius. | The map empty-state message [copy deck]. | Major |

*Post an item and Posted*

| State | What the person sees and can do | Recovery and timing | Message | Severity |
|---|---|---|---|---|
| Listing cap reached | A new account has 3 active listings and no finished pickup [blueprint]. The seller can photograph and fill in a fourth listing. The commit button reads "Save draft", with an explanation above it. | The draft posts with one tap when a listing ends or the first pickup is confirmed. Activity notifies the seller. | "New accounts can have 3 listings up until the first pickup is done. This one is saved, ready to post when a spot opens." / "A spot opened. Post [item]?" | Major |
| Slow mode | The seller has 3 missed pickups in the past 30 days. The pickup step disables the availability autofill from the last listing [journey, Flow 1], and the window is required before the listing goes live. | Lifts when fewer than 3 missed pickups remain in the past 30 days. The line is removed with no announcement. | "A few of your pickups fell through this month. Set when you can hand this over before it goes live." | Major |

*Activity, while a buyer waits for a seller*

| State | What the person sees and can do | Recovery and timing | Message | Severity |
|---|---|---|---|---|
| Interest ended with no reply | The buyer sees the ended message [journey, Flow 3]. The listing is delisted from Explore and List. Other neighbors waiting on the listing get the same message at the same moment. | The listing stays delisted until the seller answers. It still expires 14 days after it was posted. | The ended-interest message [journey, Flow 3]. | Major |
| The seller comes back to a hidden or archived listing | The top of Activity lists each listing that changed while the seller was away. For a listing hidden after an unanswered interest: "Still available" relists it and notifies the neighbors whose interest ended; "It's gone" archives it. For a listing archived at 14 days after the day-12 "Still available?" push notification went unanswered: one-tap repost. | No time limit on either answer. | "[Buyer] wanted [item], and the request ended after 2 days without a reply. It's hidden until you tell us it's still available." / "[Item] was up for 14 days, so we archived it. Post it again?" | Major |

*Pickup*

| State | What the person sees and can do | Recovery and timing | Message | Severity |
|---|---|---|---|---|
| The buyer answers "It fell through" | A follow-up question with answers by pickup type. Porch pickup: "It wasn't there". Meeting outside: "[Seller] didn't come". Both: "It wasn't as described" and "I couldn't make it". | "It wasn't there" and "[Seller] didn't come" delist the listing and ask the seller what happened. "It wasn't as described" records the feedback, relists the listing, and tells the seller only that the buyer did not take the item. "I couldn't make it" relists the listing immediately. | "What happened?" Then, for the first two answers: "Sorry about that. We've asked [Seller], and we'll tell you if they want to try again." | Major |
| The seller comes back after the buyer reported a missed pickup | Activity shows the buyer's answer and the actions "Set a new time", "Offer it to someone else" and "It's gone". Any answer within 48 hours records no missed pickup. | After 48 hours with no answer, a missed pickup is recorded and the listing is archived. | Meeting outside: "[Buyer] says they came for [item] and missed you. Want to set a new time or offer it to someone else?" Porch pickup: "[Buyer] came for [item] and says it wasn't on the porch. Is it still available?" | Major |

*After a pickup*

| State | What the person sees and can do | Recovery and timing | Message | Severity |
|---|---|---|---|---|
| The item turns out wrong after the buyer has it | The "As described" and "Not as described" choice [blueprint] persists in Activity after the sidewalk prompt and is editable. After "Not as described", the buyer sees what happens with the answer and gets a quick reply to send the seller. | The choice stays open for 48 hours after the pickup, matching message retention [journey, Flow 4]. | "Thanks. [Seller] isn't told who said this. Nearby doesn't handle payment, so a refund is between you and [Seller]." Quick reply: "Something's wrong with the item. Can we sort it out?" | Major |

---

**Edge Case Catalog**

| Scenario | What the design does now | Change | Severity |
|---|---|---|---|
| One neighbor reports another to cut off their pickups, or reports in error | A reported person loses all messaging immediately, pending review [journey, Flow 4]. A seller in a moving week loses coordination on every pending pickup. | A report blocks contact between the two people only. The reported person's other pickups continue until a reviewer decides. | Major |
| A neighbor keeps tapping "I want this" on one seller's listings to reach them or learn their meeting point | The seller can only ignore each interest until its 48-hour timeout, and accepting reveals the meeting point [journey, Flow 3]. | Each incoming interest carries a "Block" action with the effect of a report and no review. The blocked neighbor stops seeing the seller's listings and is not notified. | Major |
| Harassment is reported after the messages are gone | Messages auto-delete 48 hours after the exchange, and Report is only on a message [journey, Flow 4]. | Report is also on the finished pickup in Activity, and a reported conversation is retained until the review closes. | Major |
| The seller edits the price, condition or photos after accepting a buyer | No flow covers an edit after acceptance. The buyer walks over for a listing that has changed. | The Pickup screen shows "Listing changed" with the old and new values. The buyer can withdraw with nothing recorded against either person. | Major |

---

**Open Questions**

- Who staffs platform review, and how soon can it decide a report or a held listing that an organizer has not handled?
- Does seeding a new neighborhood import listings from buy-nothing groups whose owners have not joined Nearby? An imported listing whose owner is not a member cannot answer an interest.

## /include
agent: Vigil
summary: Audited accessibility for screen readers, keyboards, cognitive load and motor access.

A map-first interface shuts out people who can't see the map. The audit finds where the list view and the pickup screen fall short of it.

### Output

**Accessibility Audit, per WCAG Principle**

Severity: Critical blocks a task for someone using assistive technology. High makes the task very difficult but possible. Medium fails a WCAG criterion without blocking access. Low meets WCAG and falls short of inclusive design.

**Perceivable**

**Critical: the camera controls have no accessible names, so a blind seller cannot take the first photo.** The viewfinder's shutter, gallery shortcut and flash toggle are icon-only, and the copy deck gives the screen no strings [journey, Flow 1] [copy deck]. A screen reader announces each as "button".

- Criterion: 1.1.1 Non-text Content
- Change: accessible names "Take photo", "Choose from gallery" and "Flash". Flash exposes its on or off state.
- Done when: a tester using VoiceOver with the screen curtain on takes a photo and reaches the title field unaided.

**Critical: the meeting point is a map pin with no text alternative, so a blind neighbor cannot learn where to meet.** The pickup screen is a map with a meeting point pin and a row of quick replies; the intersection and the time window have no text [journey, Flow 3].

- Criterion: 1.1.1 Non-text Content
- Change: one text line above the map, "[Street] and [Street], [minutes] min walk. [Day], [start] to [end]." The map is hidden from screen readers.
- Done when: with the screen curtain on, a tester states the place and the time from the first announcement.

**High: Explore's pins have no accessible names, and List has no radius control.** The app opens on the map, where items are pins with thumbnail previews [journey, Flow 2]. A screen reader user has to find the List tab to browse, and on List cannot widen the radius or reach the items beyond it: the presets and the faded pins exist only on the map [journey, Flow 2] [information architecture].

- Criterion: 1.1.1 Non-text Content
- Change: with VoiceOver or TalkBack running, the app opens on List. On Explore the map is one image named "[count] items within a [minutes]-minute walk. Open List to browse them." List gains the 5, 10 and 20 minute presets and shows items beyond the radius under a last group heading, "Further away".
- Done when: with VoiceOver on, a first launch lands on List, and every item and radius setting on Explore is reachable on List.

- Keep: Free and Pending pickup are text on the card; neither relies on color or a muted price [wireframes, Browse].

**Operable**

**High: the undo toast times out after 5 seconds, too short for a screen reader or a switch.** "Interest sent. Undo" closes after 5 seconds, and the "new items since you last checked" notice is a brief overlay [journey, Flow 3] [information architecture]. A person who needs longer loses the undo, and the seller is notified of an interest the buyer did not mean.

- Criterion: 2.2.1 Timing Adjustable
- Change: after "I want this", item detail and the item's Activity row show a Withdraw button until the seller accepts. The toast remains as a shortcut. The new-items notice becomes a persistent line under the header, removed on tap or dismiss.
- Done when: using VoiceOver alone, a tester withdraws an interest one minute after sending it, and the new-items line is still on screen after one minute.

- Keep: the radius has tap presets at 5, 10 and 20 minutes beside the pinch [journey, Flow 2].

**Understandable**

**Medium: Post an item has no validation state for a missing photo, title or price.** No artifact shows what happens when Post is pressed with a field missing [wireframes, Post an item] [state inventory]. A seller who cannot see the form cannot find the field that blocked the post.

- Criterion: 3.3.1 Error Identification
- Change: pressing Post with a field missing preserves all input and shows an inline error under each missing field, associated with the field, with an icon and text: "Add at least one photo.", "Add a title.", "Add a price, or choose Free."
- Done when: a tester using a screen reader presses Post on an empty form, hears the first error, fixes it, and finds the other fields unchanged.

- Keep: sending an interest is one tap, with no message to write [journey, Flow 3].

**Robust**

**Medium: chips and tabs expose their state only visually.** A chip reports a pressed state only when it is on, Free reports none, the current tab is marked by style alone, and the tab badges are dots and counts with no text [wireframes, Browse] [wireframes, Post an item] [information architecture].

- Criterion: 4.1.2 Name, Role, Value
- Change: every filter chip and the Free chip report pressed or not pressed. The current tab reports selected. A tab with a badge appends it to its accessible name: "Explore, new items", "Activity, [count] unread", "You, needs attention".
- Done when: a screen reader announces on or off for every chip and tab, and reads each badge.

- Keep: icon-only buttons have accessible names: "Notifications", "Close and return to browse", "Add another photo" [wireframes].

---

**Screen Reader Flow Documentation**

| Change the person must hear | Announced | Politeness |
|---|---|---|
| A title is suggested from the photo | "Suggested title: [title]." | Polite |
| A photo upload fails | The upload-failure message [copy deck] | Assertive |
| A filter chip or radius preset changes the results | "[count] items within a [minutes]-minute walk." | Polite |
| An interest is sent | "Interest sent." [copy deck] | Polite |
| An interest is withdrawn | "Interest withdrawn." | Polite |

Missing-field errors on Post an item and the taken-item message have no live region; they are announced when focus moves to them.

---

**Keyboard Navigation Map**

| When | Focus lands on | On close, focus returns to |
|---|---|---|
| The camera opens | Take photo | Add another photo, or Add photos when no photo was taken |
| "I want this" is pressed | The "Interest sent" status | |
| Withdraw is pressed | "I want this" | |
| The pickup screen opens | The meeting place and time | The Activity row that opened it |

- Explore: the focus order is the neighborhood header, the radius presets, then the tab bar. The map and its pins are out of the focus order.

---

**Open Questions**

- Does Nearby ship on the web as well as on phones? On the web the map needs keyboard operation; on a phone, List can carry keyboard browsing.

## /transpose
agent: Wren
summary: Planned the phone and web experiences, offline use and moving between devices.

Most exchanges happen on a phone, on the move: passing a "FREE" sign, browsing from the porch. The laptop suits posting a weekend's decluttering in one sitting. And the design plans for the sidewalk where the signal drops.

### Output

**Platform-specific adaptation specs**

**Phone app (iOS and Android)**

More than 90% of use is on a phone, on the move [project context]: walking, often one-handed, in short glances.

| What the phone app does | What about the phone forces it |
|---|---|
| Requests location permission in onboarding [copy deck], camera permission on the first Post [journey, Flow 1], and notification permission after the first post or first interest. | iOS and Android show each permission prompt once. A notification prompt shown before the person has anything to be notified about is declined, and the app cannot re-prompt. |
| The iOS edge swipe and Android Back gesture close an open item card, then leave the screen. In the posting flow they go back one step and keep the input. A drag that starts inside the map pans the map; a drag from the screen edge is the system gesture. | Both systems reserve the edge swipe, and people use it without looking to undo the last step. A map that captures the edge swipe traps them on the screen. |

**Phone app without signal**

Signal drops on sidewalks, in basements and on subway platforms, and a seller posts from a hallway with bad reception [journey]. The app is offline-first: every action is stored locally and synced on reconnect.

| What the person is doing | Without signal | When signal returns |
|---|---|---|
| Posting | The draft, photos and every field, is stored locally, as in Draft saved (offline) [state inventory, Posting flow]. | The listing auto-publishes. A failed photo upload follows Photo upload failed [state inventory, Posting flow]. |

**Web (nearby.app)**

The web is used at a desk, with a keyboard, a pointer, a large screen and a steady connection, in a planned session. It takes the work that is slow on the phone: long descriptions, batch posting and settings. Feature parity with the app is a non-goal.

| What the web does | What about the desk forces it |
|---|---|
| Batch posting. Photos are added by drag-and-drop from a folder or by an equivalent file picker [accessibility audit, motor accessibility]. Title, price and description are typed. "Post another" opens the next item with the pickup preference prefilled [journey, Flow 1]. | Sellers post in bursts, on a moving weekend or after a garage cleanout [project context]. Posting 15 items one at a time is slow on a phone, and so is typing a description on its keyboard. |
| The map centers on the phone's last reported position, under the badge "Showing items near your last known location." Walking times are measured from that position. The web never asks for a typed address. | A laptop has no GPS. Exact addresses stay private [project context], and geolocation sets the neighborhood [state inventory, Duplicate accounts]. |

**Moving between devices**

The web signs in with the app's phone number [state inventory, Duplicate accounts], so the account, its neighborhood and its drafts are the same on both. Sync is silent: no "continue where you left off" screen.

| Switch | What the second device has | How it gets there |
|---|---|---|
| Starting a listing on the laptop, then taking its photos on the phone | The draft with its title, price, description and pickup preference. Post on the phone opens the draft, and photos taken there attach to it. The listing publishes from either device. | The draft autosaves to the account. |
| Drafting on the phone without signal, then opening the laptop | Nothing until the phone reconnects. The draft is stored on the phone only. | The phone syncs the draft on reconnect. |

---

**Priority mapping per context**

**Phone app**

- First: the map around the person's live position, and the camera on Post. The person is outdoors, near the listed items.
- Demoted: the description, which is optional and the last field on the form [wireframes, Post an item], because typing on a phone is slow. Settings sit inside the profile tab [information architecture], because they are set once.
- Dropped: batch posting and the flyer. Both need files or a printer.

**Web**

- First: batch posting, the wide map and the account pages. A person at a desk has a keyboard and time.
- Demoted: the person's position, which is the phone's last report and is labeled as such.
- Dropped: the camera, push notifications and the offline queue. The desk has none of the conditions they answer.

---

**Open questions**

- Can a person join Nearby on the web alone, or does every account start on a phone?
- Do the flyer and the widget ship with the MVP, or after it?

## /localize
agent: Wren
summary: Mapped what changes across cultures: trust signals, payment norms, content and right-to-left layouts.

A local marketplace runs on local norms: how people negotiate, how they build trust, what they'll trade with strangers, and what "neighbor" means. The work names the assumptions in the current design and what changes in each market.

### Output

**Localization readiness checklist**

**Right-to-left layout: Arabic, Hebrew and Urdu**

| Where | Gap | Change |
|---|---|---|
| Tab bar [wireframes, Browse] | Order is fixed left to right. | Order mirrors: first tab at the right edge, last at the left, Post in the center. |
| Map [journey, Flow 2] | Zoom buttons sit on the right; radius presets read 5, 10, 20 from the left. | Zoom buttons move to the left; presets read 5, 10, 20 from the right. The map is never mirrored. |
| Prices, distances and counts [wireframes, Browse] | Digits and units have no direction set. | Digits render left to right inside right-to-left text. Prices use Western numerals (0 to 9) in every market; Eastern Arabic numerals (٠ to ٩) are a display preference. |

**Strings, formats and content**

| Where | Gap | Change |
|---|---|---|
| Free listings [wireframes, Browse; Post an item] | A zero price and "Free" are the same value. | Free is a price type, shown as the translated word, never as a zero amount. |
| Quick replies [journey, Flow 4] | A reply is sent as text, so the recipient reads it in the sender's language. | A reply is sent as a string key and rendered in each reader's app language. |

---

**Cultural adaptation brief**

**Japan**

| What changes | Reason | In the design now |
|---|---|---|
| Nearby sends the buyer's interest to the seller as an introduction. The seller accepts a meeting request. | Platform mediation is the trust signal between strangers; direct contact before an introduction reads as rude. | The seller receives "[Name], 4 min walk away, is interested" and responds to the interest [blueprint; journey, Flow 3]. |
| No offer control. "I want this" commits the buyer to the listed price. | Listed prices are almost never negotiated. | Matches the current design. |

**India**

| What changes | Reason | In the design now |
|---|---|---|
| Phone verification is offered after signup and is the first trust signal on the profile. Browsing and posting never require it. | An unverified, anonymous account signals low investment. | Signup has no identity verification [project context]. |
| "Make an offer" sits beside "I want this". The buyer suggests a price; the seller accepts, counters or declines. Each step is a control. | Negotiation is expected, and the listed price is an opening position. Free text is locked until the same two neighbors have completed 3 exchanges [journey, Flow 4]. | The price is final, with no offer control [journey, Flow 3]. |

**Germany**

| What changes | Reason | In the design now |
|---|---|---|
| A seller's walking time is opt-in. Until the seller opts in, the card, item detail and profile say "In your neighborhood", and the listing has no distance group in the list. | A stated walking time to a person's home reads as surveillance. | "Lives about a 3-minute walk from you" and a walking time on every card [copy deck; journey, Flow 2]. |
| Formal address (Sie) by default; informal address (du) is a setting. | The person chooses informal address. | The voice sits 80% toward casual [copy deck]. |

**Brazil**

| What changes | Reason | In the design now |
|---|---|---|
| After an exchange, each neighbor can leave a short thank-you note. It shows on the other person's profile once that person approves it. | Visible social warmth builds trust. | No public reviews, and feedback is private [copy deck; project context]. |

**Mexico**

| What changes | Reason | In the design now |
|---|---|---|
| India's offer control appears on listings priced over 200 MXN. | Negotiation is expected above that price. | The price is final, with no offer control [journey, Flow 3]. |

---

**Market-specific requirement matrix**

**Formats**

| Requirement | US (current design) | Japan | India | Germany | Brazil | Mexico |
|---|---|---|---|---|---|---|
| Payment methods a seller can name on a listing | Venmo, cash | Cash, PayPay | UPI, cash | Bank transfer, cash, PayPal | Cash | Cash, MercadoPago |

Nearby does not process, hold or record a payment in any market [project context]. The seller picks the payment methods as labels.

**Legal**

| Market | Requirement | Change to the design |
|---|---|---|
| EU and EEA, Germany included (GDPR) | Location is personal data; processing it needs explicit consent beyond the OS location permission. People can delete and export their data. | A consent screen before the location request states that location is used to show nearby items and that exact location is never shared with other people. Account deletion removes location history, exchange history and profile data. Settings has a data export. |

---

**Localization test plan**

| Test | Risk it catches | Pass line |
|---|---|---|
| Right-to-left build with Arabic content written by a native speaker, on Browse, the posting steps, Posted, item detail and the pickup screen | Elements left unmirrored, and elements mirrored in error | Every row of the right-to-left table holds. The map, digits and non-directional glyphs are unchanged. |
| Sessions in Germany: 5 sellers post with distance hidden, and 5 buyers browse those listings | "In your neighborhood" gives buyers too little to act on | 4 of 5 sellers keep the default or opt in with a stated reason. 4 of 5 buyers express interest in a listing with no walking time. |

---

**Open questions**

- Which market launches first?
- Does the rule against identity verification at signup allow phone verification in India when it is offered after signup?

### Philosopher

Does the Western marketplace, with individual sellers, posted prices and two-party exchange, fit other cultures? In many communities, things circulate through family networks, places of worship or community centers and are never listed. A bazaar expects haggling. A gift economy expects favors returned over time. Is a marketplace app importing a frame that fits only some of its users? What would Nearby look like built for circular exchange?

## /measure
agent: Vigil
summary: Defined success by community health and trust, with counter-metrics.

Gross merchandise value is the wrong north star: a neighborhood where everyone gives things away is doing better than one where everyone haggles. The framework tracks exchange density, trust and community health, with counter-metrics that flag growth that harms the product.

### Output

**Measurement framework (GSM map)**

Every chain is segmented by neighborhood and density tier: urban core, medium density, suburban and rural [blueprint, Neighborhood Graph Service]. City-wide totals are never a result [project context, success definition].

A completed exchange: the buyer confirms "Yes, got it", or the seller marks "Exchanged" and the buyer does not answer "It fell through" [journey, Flow 3]. An active neighbor: an account that posted an item or sent an interest in the last 30 days.

**Exchange density**

Goal: 15 or more exchanges per 1,000 households per week in a mature neighborhood [brief, goal 1].

- Signal: neighbors inside one walking radius complete exchanges every week, sold, traded or given.
- Metric: completed exchanges in the neighborhood in the week ÷ (households in the neighborhood ÷ 1,000). A free exchange counts the same as a sale; prices are not summed.
- Source: server exchange-completion events; census household estimates for the neighborhood boundary.
- Frequency: weekly, 4-week rolling average.
- Threshold: 15 or more in neighborhoods active for 3 months or longer.
- Counter-metric: median weekly minutes in app per weekly active user. Ceiling: 20 minutes. Density that rises with time in app comes from browsing without exchange [project context, ethical stance].

**Listing completion**

Goal: 60% or more of listings end in a handoff, against 20 to 30% on broad platforms [brief, goal 2 and hypothesis].

- Signal: a published listing reaches a confirmed exchange.
- Metric: listings with a completed exchange ÷ listings published, by weekly publish cohort, read at the 14-day listing expiry [edge cases, abandoned listings]. Expired, archived and withdrawn listings stay in the denominator.
- Source: server listing-published and exchange-completion events.
- Frequency: weekly.
- Threshold: 60% or higher.
- Counter-metric: "As described" answers ÷ all answers to the post-exchange feedback prompt, reported with n [blueprint, buyer step 6]. Floor: 90%. Completion that rises while this falls means items do not match their listings.

**Trust between neighbors**

Goal: tenure, distance and exchange counts are enough for a neighbor to meet a stranger, with no ratings [brief, guiding principle 4 and hypothesis].

- Signal: a neighbor who completed one exchange with a stranger completes another.
- Metric: active neighbors with 2 or more completed exchanges in the calendar month ÷ active neighbors in that month.
- Source: server exchange-completion events per account.
- Frequency: monthly.
- Threshold: 30% or higher.
- Counter-metric: reports of a message, a listing or a person per 100 completed exchanges [journey, Flow 4]. Ceiling: 1. Repeat exchange that rises with reports means the neighbors retained are the ones doing harm.

**Cold start**

Goal: a launched neighborhood reaches working density before the next one opens [brief, constraints and guiding principle 1].

- Signal: a new neighborhood has enough neighbors posting and responding for a listing to be seen.
- Metric: neighborhoods with 10 or more active neighbors 30 days after launch ÷ neighborhoods launched.
- Source: server account, listing and interest events by neighborhood.
- Frequency: day 30 per neighborhood; the rate monthly.
- Threshold: 40% or higher.
- Counter-metric: active neighbors in a neighborhood with 10 or more active neighbors ÷ all active neighbors. Floor: 80%. Launches that outrun this put new neighbors on an empty map [project context, success definition].

**Never a target**

- GMV: it ranks a $50 sale above a gift, and the platform takes no fee on either [project context, hard constraints].
- DAU/MAU: it rises with compulsive daily checking, and fewer opens after a quick find is success [project context, ethical stance].
- Push notification open rate: it rises with more frequent and more urgent pushes, past the rate limit of 5 a day and the 15-minute notification batching [blueprint, Notification Service].
- Blended CAC and city-wide user counts: a signup in an empty neighborhood adds nothing, and a blended figure hides it [project context, success definition].

---

**Learning plan**

Product and design read every checkpoint together.

| When | Chains read | What the result triggers |
|---|---|---|
| Every week, per neighborhood | All, each with its counter-metric | A threshold met while its counter-metric is past its limit does not count as met. A counter-metric past its limit two weeks running: the change that moved it is rolled back, and interviews at that step find the cause before another change ships. |
| 30 days after a neighborhood launches | Cold start | 10 or more active neighbors: the neighborhood moves to the weekly read. Fewer: the seeding steps come before any other work there [edge cases, cold start]. Rate under 40%, or the counter-metric under its floor: launches stop until both recover. |
| 3 months after a neighborhood launches | Exchange density, Listing completion, Time to exchange, Free listings | All met with counter-metrics inside their limits: the neighborhood counts as mature and the next neighborhood outward opens [project context, product and business]. Listing completion between 30% and 60%: the brief stands, and work goes to the step between interest and handoff with the largest drop-off. Listing completion at 30% or lower: the hypothesis is contradicted, and reopening the brief is requested. Density under 15 in suburban and rural neighborhoods while urban ones meet it: the assumption that walking distance yields enough supply at low density is contradicted, and reopening the brief is requested [brief, key assumptions]. The brief is reopened once per iteration at most. |
| Every month | Trust between neighbors, Organizer moderation | Repeat exchange under 30%, or reports past the ceiling: the trust questions in the interview guides run in that neighborhood before any trust signal changes [research plan]. Organizer coverage under 50%: organizers are recruited in the uncovered neighborhoods before the next launch. Flags acted on under 90%: that neighborhood's flags escalate to platform moderation until a second organizer joins [blueprint, Content Moderation System]. |

## /specify
agent: Rune
summary: Packaged the posting scope for the build, with one page that says how the pieces fit.

Posting was approved while browsing and the exchange were still being redesigned, so posting goes to the build first. The handoff is the project's own files: brief, blueprint, flows, site map, wireframes, copy, states, accessibility and metrics. The one new page says how they fit: each screen's flow step, navigation, service and states, and what the builder decides. Before packaging, Rune checked that the brief and the posting screens were approved, and logged the ethical review. Browsing and the exchange get their own package once item detail and the pickup screen are designed.

### Output

**Nearby: posting**

Nearby is a walking-distance marketplace: neighbors sell, trade and give things away, and the buyer picks the item up on foot [brief]. This package covers posting an item, for a neighbor who wants something gone with the effort of a yard sign; the target is a post in under 30 seconds [brief]. Browse is included as the entry and return screen for posting. Out of scope: the rest of browsing, and the exchange from interest to pickup, whose item detail, Activity and pickup screens have no wireframes.

---

**Contents**

| Artifact | What it holds |
|---|---|
| Brief | The walking-distance hypothesis, goals, constraints and MVP scope, with posting under 30 seconds |
| User journey map | Flow 1, posting: steps, decision gates, error paths, tap and time targets. Flows 2 to 4: discovery, interest, messaging |
| Wireframes | Full-page screens for Browse, Post an item and Posted, with the click-through from Browse's Post tab to Posted and back |

---

**How the pieces fit**

| Screen | Wireframe | Journey step | IA node | Blueprint touchpoint | States | Copy |
|---|---|---|---|---|---|---|
| Post an item: photo first, then fields, because the photo does the describing | Post an item | Flow 1, steps 1 to 3 (capture, confirm photo, set details) on one screen; Post to Maplewood publishes. Step 4 (pickup) and step 5 (map preview) have no wireframe | Post tab. Category takes one taxonomy category | Seller steps 1 to 4. Image and text moderation at post time. Listing cap: 3 active per new account until its first exchange | On the screen: the filled form with 2 of 8 photos. In the state inventory: upload in progress, upload failed, offline draft, moderation hold, duplicate detected. In Flow 1: camera permission denied, flagged photo, price warning | On the screen. Error messages: copy deck |
| Posted: confirms the item is live and states its audience and that posting is free | Posted | After Flow 1, step 5 | Post tab, active | Seller step 4, Publish. Notification batching: interest alerts every 15 minutes (seller step 5) | On the screen: the live listing. In the state inventory: moderation hold; offline queue, pending publish | On the screen |

---

**Left to the builder**

- Visual design: color, type, spacing, motion beyond the journey's interaction specification
- Technology
- Title and category suggestion from the photo. The design fixes that both are prefilled and editable [journey, Flow 1]

---

**Open questions**

- Does posting keep the pickup step and the map preview? Post an item draws neither, and its description hint asks for pickup details in public text. (journey, Flow 1, steps 4 and 5; wireframes, Post an item)
- Where does Posted say interest arrives: in Messages, as the screen says, or in Activity, with no messaging before the seller accepts? (wireframes, Posted; journey, Flows 3 and 4; brief, MVP scope)
- Who sees a listing: every neighbor within the 1 mile the screens state, or every neighbor inside the density-tiered walking radius of 400, 800 or 1,600 m, bounded by highways, rivers and railways? (wireframes; service blueprint, Neighborhood Graph Service)

## /present
agent: Noor
summary: Turned the engagement into a deck asking Nearby's leadership for a go, with the outline approved before any slide was built.

Noor first settled who would be in the room, what they should feel, and the ask: a go on the MVP at Monday's meeting. The evaluation changed that ask. Both launch blockers sit in the handoff between neighbors, so the deck asks to build posting now and hold the launch until the handoff works. Competitor rates appear as labeled estimates, the unsourced market size stays out, and the seller in the walkthrough is labeled a design scenario.

### Output

The slides below are the deck's own markup, the file /present produced. The grid and margins come from the skill's theme, and the site's light and dark modes flow through them. Read only the titles, top to bottom, and the argument holds; that's the headlines test a deck passes before it's built.

Every number traces to an earlier chapter, and the source line at the foot of each slide says which. Estimates say they're estimates, and targets don't pretend to have baselines. Missing evidence stays visible: the plan says no engineering estimate exists yet. The notes stay at three plain sentences a slide, short enough to read at a glance mid-talk.

**The approved outline**

**Pattern:** Situation → complication → resolution. Leadership has to see where the design stands before it can decide, and the complication is the evaluation's own finding.

**Governing message:** Start building Nearby's MVP now, and launch once the handoff between neighbors works.

1. **Start building Nearby's MVP now, and launch once the handoff between neighbors works** | Visual: title slide | Source: /evaluate summary
2. **The MVP tests one bet: walking distance lifts completion to 60%+** | Visual: bar chart from zero of estimated completion by platform, Nearby's target as a dashed outline | Source: /strategize competitive landscape, measurable hypothesis
3. **The foundations hold: no dark patterns, and trust without star ratings** | Visual: two panels quoting the interface copy | Source: /evaluate anti-pattern verdict and positive findings; /wireframe; /articulate trust signal copy
4. **Two findings block launch, and both sit in the handoff between neighbors** | Visual: unit chart, one square per finding, by severity | Source: /evaluate priority issues
5. **A seller can list her couch, then can't get it picked up** | Visual: the eight walkthrough steps with their verdicts | Source: /evaluate cognitive walkthrough
6. **The brief, the flows and the screens start an exchange three ways** | Visual: three panels side by side | Source: /evaluate, the exchange-start finding; /strategize MVP scope; /journey flows 3 and 4; /wireframe
7. **On a first exchange, nothing gets the buyer to the seller's door** | Visual: three closed paths for an address, one outcome | Source: /evaluate, the pickup finding; /intent hard constraints; /journey flows 3 and 4
8. **Decide today: quick replies once the seller accepts, no open messaging** | Visual: the recommended option beside the current one | Source: /blueprint decision documentation; /journey flow 4; /evaluate, both blocking findings
9. **The bet's assumptions are untested: the interviews were written, not run** | Visual: the hypothesis's "because" clause, quoted | Source: /strategize measurable hypothesis; /investigate research plan
10. **Beyond the blockers, two major issues need new design** | Visual: the five major issues, grouped into new design and redraws | Source: /evaluate, the five major findings
11. **Engineering starts on the packaged scope while design fixes the handoff** | Visual: plan in three stages: today, in parallel, before launch | Source: /evaluate recommended actions; /investigate timeline; /specify
12. **The MVP is judged on completed exchanges, never time in app** | Visual: four target tiles and the counter-metrics | Source: /measure framework
13. **Approve the build today; launch once the handoff between neighbors works** | Visual: the ask, with go, gate and scope | Source: /evaluate recommended actions; /investigate timeline

**Gaps:**

- The interviews are planned, not run, so the trust model, the reply-time promise and pickup safety rest on assumptions.
- The brief's platform completion rates are estimates with no source, and its 20 to 30% range does not match its own table, which puts Craigslist near 15%.
- Nothing in the material says when launch could happen; the build estimate is engineering's.
- Whether Trade and Wanted ship in the MVP has no recommendation in the material, so it stays off the ask.

**Refusal checks:**

- An unconditional go would engineer assent by leaving out the launch blockers, so the deck asks for a gated go instead.
- The brief's "why now" and its market size have no source. They stay out so they can't create urgency.
- The walkthrough's seller is the evaluation's design scenario, labeled on the slide as not a research participant.
- The completion chart keeps Buy Nothing's ~60% instead of showing only the platforms Nearby would beat.
