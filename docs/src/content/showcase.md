---
project: Nearby
tagline: A neighborhood marketplace for buying, selling, and trading within walking distance.
---

## /intent
agent: Noor
summary: Set the project's context: who Nearby serves, its design principles and its constraints.

Nearby is a tool for neighbors, and its trust comes from proximity: the person selling lives down the street. The principles put safety and simplicity first.

### Output

**Nearby**

---

**Users**

- **Sellers** have things to get rid of because they are moving, decluttering or upgrading. They post in bursts: a moving weekend, a garage cleanout. Most have tried Craigslist or Facebook Marketplace and found them too much work for a $10 lamp. A post that takes longer than 60 seconds loses to leaving the item on the curb with a "FREE" sign.
- **Buyers** want bargains and convenience, and would walk two blocks before waiting two days for shipping. They browse with no item in mind and buy on impulse, so they find things by seeing what is around more than by searching.
- **Organizers** are block captains, community garden coordinators and buy-nothing group admins. They run lending, gifting and sharing through Facebook Groups, group texts and paper flyers, and they want better tools for that work. They are the likeliest first advocates in a neighborhood and the least tolerant of a tool that falls short.

---

**Product**

Nearby is a new marketplace for buying, selling and trading within walking distance, used on phones. Most items are under $20.

Revenue comes from optional promoted listings and partnerships with neighborhood businesses.

Value depends on density: exchanges per square mile. One neighborhood reaches critical mass before the product expands outward from it.

---

**Constraints**

- No identity verification at signup: signup friction stops adoption in a small market.
- Works in a neighborhood with as few as 50 active users.
- No delivery. Buyers and sellers walk.
- Exact addresses stay hidden until both parties agree.
- Mobile-first: 90%+ of expected usage is on phones, on the move.
- No transaction fees. The platform never handles money between neighbors.

---

**Design principles**

1. **Proximity is the product.** A feature that does not depend on walking distance is out.
2. **Lower the stakes.** The effort the product asks matches a $20 item.
3. **Trust through transparency.** "3 blocks away" builds more trust than "4.8 stars".
4. **Respect the asymmetry.** Sellers want speed and buyers want discovery. Neither is served at the other's cost.

---

**Ethical stance**

- No fake social proof and no fabricated urgency: nothing like "3 others are looking at this".
- No notification spam. Every push notification is opt-in.
- A user who opens the app less often because they found what they needed is a success.
- Collect only the data core functions need. Where a user lives is never monetized.
- Promoted listings are labeled as promoted.
- Feedback between neighbors is private and constructive. Nothing about a neighbor's conduct is shown publicly.
- If revenue requires manipulating neighbors into transactions, the revenue model changes.

---

**Success**

Success is exchange density: completed exchanges each week among the households within a walkable radius. A neighborhood where 20 things change hands every week, sold, traded or given away, is succeeding. A city with 100,000 users across 50 neighborhoods and density in none of them is failing. Revenue follows the same density: promoted listings and business partnerships have value only where neighbors exchange often.

---

**Open questions**

- When does the first neighborhood launch, and which neighborhood is it?
- Which countries or states will Nearby operate in?
- What is the minimum age for an account?
- Is Nearby a native app, a web app or both?
- Who approves the design work?

## /strategize
agent: Ember
summary: Framed the opportunity, mapped competitors, wrote a testable hypothesis and scoped the MVP.

Marketplace, Craigslist and Nextdoor treat location as a search filter. In Nearby, walking distance is the product, and each bet in the brief says what a pilot neighborhood would show if it were wrong.

### Output

**Nearby's walking-distance marketplace**

---

**Context**

Nearby is a mobile marketplace for buying, selling, trading and giving within walking distance. It serves sellers clearing things out, buyers who browse what is around them, and organizers who run lending and gifting for a block or a group [project context].

It enters peer-to-peer exchange, a US activity of more than $200B a year. Neighbors exchange today through Facebook Marketplace, Craigslist, Nextdoor and Buy Nothing groups, and through group texts, paper flyers and a "FREE" sign on the curb [project context].

---

**Gap**

Each of these tools treats location as a filter on a city-wide or group-wide inventory. None offers a market whose inventory is what a person can walk to, where trust comes from living nearby and pickup is a walk.

- Sellers found Marketplace and Craigslist too heavy for a $10 lamp. When posting takes more than 60 seconds they leave the item on the curb [project context].
- Buyers do not know what they want until they see it, so discovery matters more to them than search [project context].
- Organizers run lending, gifting and sharing through Facebook Groups, group texts and flyers, and want better tools for work they do today [project context].

---

**Opportunity**

For neighbors with low-value items, most under $20, where the effort a broad platform asks for costs more than the item is worth [project context]. Organizers are the first audience inside each neighborhood: they run exchange today and are the most likely early evangelists [project context].

Why now: local exchange is moving to neighborhood scale, and the broad platforms are built on city-wide inventory and account identity. Rebuilding them around a walking radius is an architectural change that takes years.

Nearby's value depends on density, so the opportunity is sized by exchanges per 1,000 households in a walkable radius. User totals across a city do not size it [project context].

---

**Goals**

- In a mature neighborhood, things change hands every week: some sold, some traded, some given away [project context].
- Most listings end in an exchange.
- A listing is exchanged within days of posting.
- Giving is a regular part of the market, with free listings a large share of what is posted.
- A person who finds what they need and opens the app less often counts as a success [project context].

---

**Constraints**

- **Cold start.** A neighborhood with no listings gives a buyer nothing to see. Activation inside one neighborhood comes before growth to the next, and the product has to work with 50 active users [project context].
- **Privacy.** Neighbors expect more privacy from each other than from a general marketplace. An interest in a bookshelf must not tell a stranger where the seller lives. Exact addresses stay hidden until both people agree, and location data is used only for the core function [project context].
- **Revenue.** Income comes from optional promoted listings and neighborhood business partnerships. It cannot depend on transaction fees, transaction volume or engagement optimization [project context].
- **Signup.** No identity verification [project context].
- **Logistics.** No delivery. Walking is the delivery method [project context].
- **Ethics.** No manufactured urgency, no notification spam, no public ratings or shaming, no dark patterns [project context].
- **Device.** More than 90% of expected use is on phones, on the move [project context].

---

**Guiding Principles**

- **Density before breadth.** Between a feature that makes one neighborhood busier and one that reaches more neighborhoods, build the first.
- **The walking radius decides.** A feature that works the same without walking distance is cut [project context].
- **Casual over transactional.** Between a step that protects a sale and a step that keeps posting as light as a sign in the yard, keep posting light.
- **Trust from tenure and proximity.** Where a trust signal is needed, show how long someone has lived nearby and how close they are. Star ratings and public reviews are never the answer.

---

**Key Assumptions & Open Questions**

- **Walking distance makes more listings end in an exchange.** A marketplace limited to walking distance, showing tenure and distance, completes more listings than a broad platform, because walking removes the logistics and living nearby lowers the doubt about a stranger. The product is built on this. Wrong if listings in a pilot neighborhood end in an exchange no more often than local listings on Marketplace.
- **A walking radius holds enough supply.** In a low-density area the radius can hold too few listings to bring a buyer back. It matters because the product has to work with 50 active users. Wrong if buyers in a suburban pilot open the map to an empty radius on most days.
- **Proximity raises trust.** Living close can raise safety concerns in place of trust, most of all for people who are vulnerable at home. It matters because distance is the main trust signal. Wrong if people in interviews say they hesitate more to exchange with someone who lives on their block, or sellers hold back listings because the buyers are near.
- **One tap of interest is enough to arrange a pickup.** The first version has no messaging. It matters because an interest that cannot become a time and a place ends in no exchange. Wrong if pilot exchanges stall after the seller accepts, or the two people move to text or Facebook to finish.
- **Organizers bring their groups.** Cold start depends on organizers moving exchanges they run elsewhere. Wrong if organizers in interviews say their Facebook group is good enough, or a pilot organizer joins and the group's exchanges stay where they were.
- **The baseline is low.** Local listings on broad platforms are estimated to complete 20–30% of the time: about 25% on Marketplace and 15% on Craigslist, against about 60% inside a Buy Nothing group. The gap and the completion goal are set against these figures, and none has been measured. Wrong if sellers in interviews report that most of their local listings end in an exchange.

Questions for the designer:

- Which neighborhoods run the pilot?
- What are the timeline, the budget and the team for the first version?

---

**Proposed Scope (Phase 1)**

A mobile app. A neighborhood is the walking radius around each person's location.

Included:

- Post an item with a photo, a price or Free, and a pickup radius, in under 30 seconds.
- Browse items within walking distance, on a map and in a list.
- Express interest with one tap.
- Neighborhood identity: each person sees their area, scoped to their surroundings.
- Trust signals: account age, neighborhood tenure and approximate distance.

Waits:

- Messaging, until the second version.
- Browsing other neighborhoods.
- Mutual connections as a trust signal.

Out of scope: payments, which neighbors settle between themselves, and delivery.

### Philosopher

What does "neighborhood" mean? On a dense city block, walking distance might be 0.2 miles, and you can see the seller's building from your window. In a suburb it might be the subdivision, a mile across. In a rural town it might be the whole town. Nearby assumes everyone shares one definition of "nearby", and they don't. Whether it means a radius, a census tract, a zip code or a felt sense of community changes the whole trust model.

### Storytelling

Situation, complication, resolution works only if the complication is checked against evidence before the brief is written. Nearby's first complication was sized to fit a plan to compete with Marketplace. The evidence cut it down to what holds: existing tools are the wrong shape for walking distance.

## /investigate
agent: Ember
summary: Planned the research, with interview scripts for buyers, sellers and community organizers.

Before any design, the research goes to people who already trade locally: neighbors selling furniture from their stoops, buy-nothing admins sorting requests in Facebook comments, and people who walk past "FREE" signs and wonder what they're missing.

### Output

**Research objective**

| Question the study answers | Bet in the brief it tests |
|---|---|
| What distance do people treat as near enough for an exchange, and what changes inside it? | Walking distance is a strong enough constraint to make the experience different; in low-density areas it may leave too little supply. The answer also informs the open question of what defines a neighborhood [brief]. |
| Does knowing the other person lives close raise trust or raise concern about safety? | People trust neighbors more than strangers from the internet; proximity can increase safety concerns [brief]. |
| At which steps do Facebook Marketplace, Buy Nothing groups and Craigslist fail an exchange between neighbors? | The existing tools are the wrong shape for walking-distance trust and logistics [brief]. |

---

**Method**

Semi-structured interviews: 13 sessions of 45 minutes by video call, with 5 minutes of opening, 35 minutes of core questions and 5 minutes of closing. The three questions concern motivation, trust and the steps of past exchanges, and the answers worth counting at scale are not yet known. An interview follows each participant's account of a real exchange and can ask about what the guide did not anticipate.

Sessions run in two neighborhoods, one urban and one suburban, so the distance question is answered at both densities.

---

**Participants**

| Group | Sessions | Qualifies | Mix |
|---|---|---|---|
| Sellers | 5 | Sold or gave away 3 or more items locally in the past 6 months | Facebook, Craigslist, curb alerts and word of mouth all represented |
| Buyers | 5 | Bought or picked up an item from a local stranger in the past 3 months | Active seekers and casual browsers |
| Organizers | 3 | Admin or moderate a Buy Nothing group, neighborhood exchange group or community swap with 50 or more members | |

Professional resellers and business accounts are excluded. A person who qualifies for more than one group is interviewed in one.

Each group includes participants from both neighborhoods: one urban, above 5,000 households per km², and one suburban, at 1,000 to 3,000 households per km².

Recruitment runs through outreach to Buy Nothing group admins, Nextdoor posts, and flyers at coffee shops and on community boards. The target is 18 recruits for 13 sessions; the 5 spares cover the pilot and no-shows.

**Screener**

| Question | Answer that qualifies |
|---|---|
| Which neighborhood do you live in? | One of the two study neighborhoods |
| In the past 6 months, how many items have you sold or given away to someone in your area? (None, 1 to 2, 3 to 5, 6 or more) | 3 to 5 or 6 or more, for sellers |
| Where did you offer them? (Facebook Marketplace, a Buy Nothing or other Facebook group, Craigslist, Nextdoor, the curb, word of mouth, other) | Any; used to balance the mix |
| Do you sell items as a business or buy items to resell? | No |
| When did you last buy or pick up an item from someone local you had not met before? (Past 3 months, 3 to 12 months ago, longer, never) | Past 3 months, for buyers |
| How did you come across that item? (I was searching for it, I saw it while browsing, someone told me, other) | Any; used to balance seekers and browsers |
| Do you admin or moderate a group where neighbors sell, give, lend or swap things? How many members does it have? | Yes, with 50 or more members, for organizers |

---

**Timeline**

| Stage | Dates (2026) | Work |
|---|---|---|
| Recruitment | 23 to 27 November | Outreach, screening and scheduling |
| Pilot | 30 November | One seller session from the spare recruits; question wording and theme timings are fixed afterwards |
| Fieldwork | 1 to 11 December | 13 sessions, at most 4 a day, with a debrief after each |
| Synthesis | 14 to 17 December | Affinity mapping across all sessions |
| Reporting | 18 December | Findings report, organized by theme. Each finding states how many of the 13 sessions showed it, with quotes under participant codes and the change it calls for |

---

**Protocol**

**Opening (5 min)**

- Purpose: "We're exploring how people in neighborhoods sell, give away and trade things. We're not testing anything, just learning from your experience. There are no wrong answers."
- Consent: confirm permission to record, how the recording and quotes are used, and that the participant can skip a question or stop at any time.
- Warm-up: "Tell me a bit about your neighborhood. How long have you lived there?"
- Organizers only: "Tell me about the group you run and how you got involved."

**Sellers**

**Where the current tools fail (13 min)**

- Tell me about the last thing you sold or gave away locally. Walk me through what happened from the moment you decided to get rid of it.
  - Probe: Walk me through that step by step.
  - Probe: How long did it take from deciding to the item being gone?
- How did you decide where to list it?
  - Probe: What made you choose that over the other places you considered?
- What was the hardest part?
- Tell me about a time you wanted to sell or give something away locally and did not. What stopped you?
- Tell me about an exchange that went wrong. What happened?
  - Probe: What did you do next?

**Distance (11 min)**

- For that last item, how far did the other person come to get it?
  - Probe: How did they get there?
- When you say "local", what area do you mean?
  - Probe: Where does your neighborhood end?
- Think of the nearest person you have sold or given something to, and the farthest. What was different about the two exchanges?
- Tell me about a time someone was interested and distance ended the exchange.

**Trust and safety (11 min)**

- What did you know about the person who took the last item before you agreed to hand it over?
  - Probe: Had you met them before? How did that affect the exchange?
- How did you decide where to hand it over?
  - Probe: What made you choose that place?
- Has there been a time you hesitated to tell someone where you live? What happened?
- Have you sold or given something to a person who lives on your block? How did that exchange compare with the others?

**Buyers**

**Where the current tools fail (13 min)**

- Tell me about the last thing you bought or picked up from someone local. Walk me through it from the moment you first saw it.
  - Probe: Walk me through that step by step.
- How did you come across it?
  - Probe: Were you looking for it at the time?
- In the past month, when did you look at local listings?
  - Probe: What prompted you to look?
- What was the hardest part of getting the item?
- Tell me about a pickup that went wrong. What happened?
  - Probe: What did you do next?

**Distance (11 min)**

- How did you get to that last pickup?
  - Probe: How far was it?
- When you look for things nearby, what area do you mean?
  - Probe: Where does your neighborhood end?
- Tell me about an item you wanted and did not go for because of where it was.
- What have you picked up close to home that you would not have travelled for?
- Tell me about the last time you passed a "FREE" sign on a curb. What did you do?

**Trust and safety (11 min)**

- What did you know about the seller before you went?
  - Probe: What made you trust them enough to go?
- Where did you meet?
  - Probe: Who chose the place?
- How did you pay?
- Has there been a pickup where you felt uncomfortable? What happened?
- Have you bought or picked up something from a person who lives on your block? How did that exchange compare with the others?

**Organizers**

**Where the current tools fail (13 min)**

- Walk me through the past week of running exchanges in your group. What did you do?
  - Probe: Walk me through that step by step.
- Which problems come back week after week?
  - Probe: What did you do the last time it happened?
- Which rules have you added since the group started?
  - Probe: What happened that led to the rule?
- Which parts of the work happen outside the group, such as group texts, spreadsheets or paper?
- What other tools has the group tried?
  - Probe: What made you stay with, or return to, the one you use now?

**Distance (11 min)**

- What area does your group cover?
  - Probe: How was that boundary set?
- Tell me about the last request to join, or post, from outside that area. What did you do?
- In the last few exchanges you saw, how far apart did the two people live?
- Tell me about an exchange in the group that failed because of distance.

**Trust and safety (11 min)**

- Tell me about the last time someone did not follow through on a pickup. How did you handle it?
- How do members arrange where to hand an item over?
  - Probe: What rules does the group have about sharing addresses?
- Tell me about a time you removed someone from the group. What happened?
- What is the most serious thing that has happened in the group?
  - Probe: How did you handle it?

**Closing (5 min)**

- Summarize the main points heard and ask: "What did I get wrong or leave out?"
- "What about exchanging things with neighbors should I have asked about and didn't?"
- Next steps: the gift card arrives by email today, and quotes in the report carry a code in place of a name.
- Thank the participant.

**Notes for interviewer**

- When a session runs behind, cut the last question of each theme, starting with the first theme.
- A theme that has not started by minute 30 gets its first question only.
- The opening consent and the closing are never cut.

---

**Logistics**

- **Tools:** video call with recording and automatic transcription. A participant who prefers a phone call gets one.
- **Recording:** audio, video and transcript, with consent. A participant who declines recording is interviewed with written notes only.
- **Consent:** a consent form goes out with the booking and is confirmed aloud in the opening. It states what the study covers, that the session is recorded, how quotes are used, and that the participant can skip any question or stop and keep the incentive. Questions about exchanges that went wrong or felt unsafe are skipped at any sign of discomfort.
- **Data:** notes and the report use participant codes (S1 to S5, B1 to B5, O1 to O3). Quotes carry no names, street names or group names. Recordings are deleted 30 days after the findings report.
- **Incentive:** a $50 gift card, emailed the day of the session.
- **Observers:** one note-taker per session, camera and microphone off, introduced in the opening. Notes follow one template: timestamp, theme, observation, quote. The interviewer and note-taker debrief for 15 minutes after each session.

## /blueprint
agent: Wren
summary: Mapped the service blueprint: the actors, what each one sees, the work behind it and the dependencies.

A $5 exchange runs on geolocation, notification timing, trust signals and moderation, and ends with a handoff on the sidewalk that the app never sees. The blueprint maps each of those and what happens when one fails.

### Output

**Service blueprint: Nearby item exchange**

**System overview**

An item exchange on Nearby takes one item from a seller's post to a handoff on foot between two neighbors: post, browse, one-tap interest, acceptance, pickup and confirmation [brief]. It serves sellers who want an item gone with little effort, buyers who browse what is within walking distance, and organizers who moderate their neighborhood [project context]. The app coordinates the exchange up to the meeting; the handoff and any payment happen in person [brief].

Out of scope: messaging, payments, delivery and browsing other neighborhoods [brief]. Signup, promoted listings and neighborhood activation are not mapped.

---

**Service blueprint**

Each step says what the person does and what the app shows them. Below the line of visibility are the services and people whose work Sarah and Marcus do not see. Support holds the infrastructure and policy that every stage uses. ◆ marks a step where an exchange stalls.

*Posting and browsing*

Frontstage: Sarah, seller, moving this week. Steps 1 to 4 take under 30 seconds [brief]. The couch has to be gone within 4 to 48 hours.

| Step | Sarah does | Sarah sees |
|---|---|---|
| 1 | Photographs the couch or picks a photo | Camera, then a suggested title and category |
| 2 | Confirms or edits the title, then sets a price or marks the couch free | Price field with a free option |
| 3 | Confirms how pickup works: porch, meet outside or flexible | The choice from her last listing, filled in, and the listing as a neighbor's map shows it |
| 4 ◆ | Posts | Confirmation that the listing is live, with its map pin |

Line of interaction: Sarah's listing reaches Marcus when it falls inside his walking radius.

Frontstage: Marcus, buyer, walking home. Opening the app to pickup takes him 20 minutes to 2 hours.

| Step | Marcus does | Marcus sees |
|---|---|---|
| 5 ◆ | Opens the app and browses the map or the list | Listings inside his walking radius: map pins with thumbnails, or a list sorted by distance |
| 6 | Opens the couch listing | Photo, description, walking time, Sarah's tenure in the neighborhood and the pickup type |

Line of visibility: Hidden from Marcus: Sarah's address and every listing outside his radius. Hidden from Sarah: the moderation check and which neighbors her listing reaches.

Backstage

- **Title and category suggestion.** Step 1. Suggests a title and category from the photo.
- **Content Moderation, automated layer.** Step 4. Classifies the photo and text. Holds prohibited items (weapons, drugs, regulated goods) for review, detects duplicate listings, and flags price anomalies during a declared emergency.
- **Trust Inference Engine.** Step 4. Limits a new account to 3 active listings until its first completed exchange. Step 6. Supplies Sarah's trust signals.
- **Neighborhood Graph Service.** Steps 4 and 5. Computes each person's walking radius and returns the listings inside Marcus's.
- **Notification Service.** Sends each person a daily digest of the 3 to 5 newest items closest to them.

*Interest and acceptance*

Frontstage: Marcus

| Step | Marcus does | Marcus sees |
|---|---|---|
| 1 | Sends interest with one tap | Confirmation, with undo for 5 seconds |
| 2 ◆ | Waits for Sarah | In the activity tab, a waiting status with Sarah's approximate response time |
| 5 | Receives the acceptance | Push and in-app notification with the meeting point and a time window |

Line of interaction: Marcus's interest reaches Sarah as a notification, and her acceptance reaches him as one. They exchange no messages [brief].

Frontstage: Sarah

| Step | Sarah does | Sarah sees |
|---|---|---|
| 3 | Receives the interest notification | Marcus's name, his walking time from the couch and his tenure |
| 4 ◆ | Accepts, or leaves the request unanswered | Pickup screen with a suggested meeting point and time |

Line of visibility: Hidden from Marcus: when Sarah was notified and how many neighbors asked for the couch [project context]. Hidden from Sarah: Marcus's position; she sees a walking time.

Backstage

- **Platform server.** Step 1. Saves the interest when Marcus taps, before any notification is sent. Step 4. Suggests the meeting point and a time window.
- **Notification Service.** Step 3. Holds interest notifications and sends them in one batch every 15 minutes. Step 5. Sends the acceptance to Marcus.
- **Trust Inference Engine.** Step 3. Supplies Marcus's tenure for the notification.
- **Neighborhood Graph Service.** Steps 3 and 4. Computes the walking time and the intersection nearest the couch.

*Pickup and completion*

Frontstage: Sarah

| Step | Sarah does | Sarah sees |
|---|---|---|
| 1 | Gets the pickup reminder | Push notification 1 hour before the agreed time |
| 2 ◆ | Meets Marcus and hands over the couch | Nothing: the handoff happens with the app closed |
| 3 | Marks the couch exchanged | Confirmation with her exchange count in Capitol Hill |

Line of interaction: The handoff and any payment happen in person. The app records neither [brief].

Frontstage: Marcus

| Step | Marcus does | Marcus sees |
|---|---|---|
| 1 | Gets the pickup reminder | Push notification 1 hour before the agreed time |
| 2 ◆ | Walks over, meets Sarah and takes the couch | Nothing: the handoff happens with the app closed |
| 4 | Marks the couch received | An optional choice: as described, or not as described |

Line of visibility: Hidden from Sarah and from other neighbors: Marcus's answer. It changes her as-described rate, which her profile does not show [project context].

Backstage

- **Notification Service.** Step 1. Sends both people a reminder 1 hour before the agreed time.
- **Platform server.** Steps 3 and 4. Closes the listing at the first confirmation and tells the other interested neighbors the couch is gone.
- **Trust Inference Engine.** Steps 3 and 4. Adds the exchange to both people's counts and Marcus's answer to Sarah's as-described rate.

*A flagged listing*

Frontstage: Marcus

| Step | Marcus does |
|---|---|
| 1 | Reports a listing or a person |

Line of visibility: Hidden from every neighbor except the person concerned: holds, warnings and suspensions [project context].

Backstage: Diane, organizer in Capitol Hill for as long as the neighborhood runs. She did this work in a Facebook group before Nearby [project context].

| Step | Diane does | Diane sees |
|---|---|---|
| 2 ◆ | Receives the flag: a held listing, a report or a stale listing | Her moderation queue for Capitol Hill |
| 3 | Reviews it with what she knows of the neighborhood |  |
| 4 | Clears it, hides the listing or warns the person |  |
| 5 | Escalates what she cannot settle |  |

Backstage

- **Content Moderation, automated layer.** Step 2. Sends each held listing to Diane's queue.
- **Platform moderation.** Step 5. Handles legal escalation, account suspension and coordination with law enforcement.

*Support for every stage*

Support

- **Geolocation API.** Positions each person for the radius. Responds in under 100 ms, accurate to under 100 m.
- **Street network graph.** Walking distance and barriers. Updated monthly.
- **Housing density data.** Sets the density tier. Reclassified weekly.
- **Photo storage and CDN.** Item photos and thumbnails. Thumbnails load in under 200 ms.
- **Push notification service.** Delivers interest batches, acceptances, reminders and the digest. A batched send arrives in under 30 seconds.
- **Search index.** Full-text search of titles and descriptions. Answers in under 500 ms.
- **Organizer guidelines.** What an organizer hides, warns about and escalates.
- **Prohibited items policy.** The list the classifier holds listings against.

---

**Ecosystem & dependencies**

| What | Relies on | Failure when it goes |
|---|---|---|
| **Posting and browsing** | The phone's location, through the Geolocation API | Location unavailable; Location inaccurate |
| **Walking radius and walking times** | Street network graph | Street network data unavailable |
| **Walking radius** | Housing density data | Density classification stale |
| **A listing going live** | Photo storage | Photo upload fails |
| **Judging an item before asking for it** | Photo storage and CDN | Photos fail to load |
| **Sarah learning of a request, Marcus learning of the acceptance, pickup reminders** | Push notification service | Push delivery down; Push limit reached |
| **Trust signals on listings and notifications** | Trust Inference Engine | Trust signals unavailable |
| **Search** | Search index | Search unavailable |
| **A listing going live** | Content Moderation's automated layer | Listing held by the classifier |
| **Held and reported items** | Diane, a volunteer | No organizer action; Stale listings |
| **An answer to a request** | Sarah opening the notification or the app | Interest unanswered |
| **The handoff** | Both people arriving at the meeting point | Buyer does not show up |
| **Exchange counts and the completion rate** | Sarah or Marcus confirming in the app | Handoff not confirmed |
| **Every exchange** | Active neighbors inside the walking radius | Neighborhood below density |

- A walking time is computed from each viewer's position. A person who opens one listing from several positions can estimate the seller's address before any acceptance [project context].
- In a newly opened neighborhood every account carries the new-account badge and no exchange count, so its first exchanges run on the weakest trust signals [brief].
- Diane can hide listings and warn people in the neighborhood where she also trades. Her decisions are reviewed only when she escalates, so moderation differs from one neighborhood to the next.
- The daily digest is sent every day by default and is selected by distance and recency alone. The same structure can be tuned for app opens [project context].
- Mutual connections read the contact list, a second permission beside location. Requesting both in one prompt bundles consent [project context].

---

**Process architecture**

*Walking radius*

| Density tier | Households per km² | Walking radius |
|---|---|---|
| **Urban core** | Over 5,000 | 400 m |
| **Medium** | 1,000 to 5,000 | 800 m |
| **Suburban and rural** | Under 1,000 | 1,600 m |

Distance is measured along the street network. Highways, rivers, railways and gated communities are hard boundaries: the radius stops at them even where the straight-line distance qualifies.

*Location disclosure*

Before acceptance a listing shows a walking time and an approximate pin. On acceptance, meet outside and flexible give both people the nearest intersection. Porch gives Sarah's address to Marcus alone [project context].

*Trust signals*

Nearby has no ratings or star scores [brief]. The Trust Inference Engine reads account age, completed exchanges, tenure at the current location, mutual contacts where both people gave permission, and the as-described rate. It shows a person's neighbor-since date, their exchange count in the neighborhood and a mutual connection. An account shows a new-account badge for its first 4 weeks.

*Push notifications*

A person receives at most 5 push notifications a day. Acceptances and pickup reminders are sent first, interest batches next and the digest last.

*Several requests for one item*

Sarah sees requests in the order they arrived and accepts one at a time. The others keep a waiting status until the listing closes or Sarah releases the acceptance.

---

**State & failure analysis**

*System states*

| State | Trigger | Effect |
|---|---|---|
| **Healthy** | Every dependency answers and the neighborhood has 50 or more active users [project context] | Exchanges run as the figures show |
| **Degraded** | Street network data unavailable, Density classification stale, Trust signals unavailable, Photos fail to load or Search unavailable | Exchanges continue with a less accurate radius or less information on a listing |
| **Coordination delayed** | Push delivery down | Exchanges continue; each step waits until the person opens the app |
| **Moderation delayed** | No organizer action | Held listings wait and reported listings stay up |
| **Unavailable to one person** | Location unavailable | That person can neither post nor browse |
| **Below density** | Fewer than 50 active users in the neighborhood [project context] | Listings draw no requests and browsing shows an empty map |

*Failures*

| Failure | What the person experiences | Blast radius | Recovery |
|---|---|---|---|
| **Location unavailable** | The app asks for location access and links to the phone's settings. Sarah cannot post and Marcus cannot browse. | The service, for that person. | Manual: the person turns on location services and retries. |
| **Location inaccurate** | Marcus sees listings outside his walking radius, with wrong walking times. | That person's session. In an urban core a 100 m error is a quarter of the radius. | A fix less accurate than 100 m is discarded. The last accurate position stays in use until a better fix arrives. |
| **Street network data unavailable** | No visible change. Walking distance becomes 1.3 times the straight-line distance, so a radius can cross a highway or a river. | Every radius in the affected area. | Automatic when the data returns. |
| **Density classification stale** | No visible change. A classification older than 7 days keeps its last tier, so people see too many or too few listings. | Every person in the misclassified area. | Automatic at the next weekly reclassification. |
| **Photo upload fails** | Sarah is told the photo did not upload and can retry. The draft stays on her phone. | One listing. | Sarah retries. |
| **Photos fail to load** | Listings appear without photos. Marcus can still send interest, with less to judge the item by. | Every listing viewed during the outage. | Automatic when photo storage or the CDN returns. |
| **Push delivery down** | Marcus's interest is saved, but Sarah gets no alert. Acceptances and pickup reminders arrive late or not at all. | Pickup coordination for every open exchange. | Sarah sees requests the next time she opens the app. Queued notifications go out in one batch when delivery returns. |
| **Push limit reached** | A person who has had 5 push notifications today gets no alert for a new request, acceptance or reminder. | That person's exchanges for the rest of the day. | The notification appears in the activity tab without a push. The limit resets the next day. |
| **Trust signals unavailable** | Profiles show a member label without tenure or exchange count. | Every listing and notification during the outage. Exchanges continue. | Automatic: the signals fill in when the engine returns. |
| **Search unavailable** | Search returns nothing and the app offers browsing. | Low: buyers browse more than they search [project context]. | Automatic when the index returns. |
| **Listing held by the classifier** | Sarah's listing does not go live and she is told it is in review. A listing held in error can outlast her 4 to 48 hours. | One listing. | Diane clears or hides it. Held listings come first in her queue. |
| **No organizer action** | A held listing stays unpublished and a reported listing stays up. A neighborhood without an organizer has no first reviewer. | Every held or reported item in the neighborhood. | Platform moderation takes any item Diane has not acted on within 24 hours, and every item immediately where the neighborhood has no organizer. |
| **Interest unanswered** | Marcus keeps a waiting status. Sarah is notified up to 15 minutes after his tap, and his 20 minutes to 2 hours can pass before she answers. | One request. | The request expires 48 hours after Marcus sent it, and he is told. |
| **Buyer does not show up** | Sarah waits at the meeting point. The other interested neighbors keep a waiting status. | One exchange and every neighbor waiting on that item. | Sarah releases the acceptance and the listing reopens to the neighbors still waiting. |
| **Handoff not confirmed** | The couch changes hands and neither person marks it. The listing stays open and other neighbors keep waiting. | One listing, both people's exchange counts and the completion rate [brief]. | Each person gets one prompt when the time window ends. Either confirmation completes the exchange. With none after 48 hours the listing closes as unconfirmed and adds to no count. |
| **Stale listings** | Marcus sees listings for items that are gone. Hiding them is manual work for Diane that grows with volume. | Browsing across the neighborhood. | Diane hides a stale listing. A listing with no accepted request closes after 14 days, and Sarah can post it again. |
| **Neighborhood below density** | Sarah's listing draws no requests and Marcus opens the app to an empty map. | Every exchange in the neighborhood [brief]. | None inside the exchange. Density comes from activating the neighborhood. |

*How records end*

| Record | Ends when | Data deleted |
|---|---|---|
| **Listing** | Sarah or Marcus confirms the exchange, Diane or platform moderation hides it, or it closes under Stale listings or Handoff not confirmed | Photos, 30 days after the listing closes |
| **Interest request** | Marcus undoes it within 5 seconds, it expires under Interest unanswered, Sarah releases the acceptance, or the listing closes | 30 days after the request ends |
| **Accepted exchange** | Sarah or Marcus confirms it, or it closes under Handoff not confirmed | Meeting point, time window and a porch address, 30 days after the exchange ends. The exchange count and the as-described answer stay while the account exists |

---

**Open questions**

- Is a neighborhood the walking radius around each person, or a named area with a fixed boundary? Browsing uses the radius; the exchange count in Capitol Hill and Diane's queue need a named area [brief].
- Who appoints a neighborhood's organizer, and who can remove one?

### Storytelling

The easy drawing is a straight line from buyer to backend to seller. The service runs across people who don't know each other yet: the buyer, the seller, the moderator catching abuse, and the future buyers whose trust depends on this exchange going well. Where the blueprint flattened the seller into a system role, it went back to who sellers are at each step: Sarah in her moving week, a buy-nothing organizer answering fifteen messages.

## /journey
agent: Wren
summary: Designed the core flows: posting, discovering, buying and messaging.

Each flow takes fewer taps than the alternatives. When the seller lives down the street, paying is the easy part. Finding things and arranging the pickup are the hard ones, and the flows spend their effort there.

### Output

**Nearby: posting, discovering, buying and messaging**

---

**Problem Statement**

A seller lists an item, a neighbor within walking distance finds it, asks for it and collects it on foot. Posting starts at + and ends when the listing is live. Discovering starts when the app opens and ends on an item's detail. Buying starts at "I want this" and ends when either person confirms the exchange and the item leaves the map. Messaging runs between the seller's accept and the pickup. Local exchange completes 20 to 30% of the time on existing platforms, and the hypothesis is 60% or more inside walking distance [brief]. Money changes hands in person: Nearby charges no fee and processes no payment [project context].

---

**User Context & Variations**

- **Seller posting in a burst.** A seller in a moving week lists several items between other tasks, on a weak connection, and abandons a listing that takes more than 60 seconds [project context]. Posting asks for no description, and a listing made offline publishes on reconnect.
- **First listing.** No pickup option is saved, so the pickup step needs a choice. Later listings open it preselected. The target is under 60 seconds for a first listing and under 30 after it [project context] [brief].
- **New account.** An account with no completed exchange holds 3 active listings [blueprint]. With 3 active, + opens the limit notice and the camera stays closed.
- **Buyer with nothing in mind.** A buyer opens the app without a goal and decides on sight [project context]. Home is the map, discovery has no search step, and interest is one tap with no message to write.
- **Organizer.** Organizers bring gift exchanges over from Facebook groups [project context]. Free sits beside the price field and follows the same flow as a sale. A harassment flag in a thread notifies the neighborhood's organizer.
- **Housing density.** The map opens at the walking radius the Neighborhood Graph sets for the address: 400 m in an urban core, 800 m at medium density, 1,600 m in a suburban or rural area [blueprint].
- **Entry from a push notification.** Each push opens the screen it reports and skips the map.
  - Interest in a listing opens that listing's interest screen.
  - An accepted interest opens the pickup screen.
  - A pickup reminder opens the pickup screen.
  - The daily digest opens the digest cards.
- **Entry from a shared link.** The link opens the item's detail.
- **Location off.** No flow starts until geolocation is on. The app asks for location and links to settings [blueprint, Geolocation unavailable].

---

**Screen-by-Screen Flow**

**Posting an item**

*Flow: posting an item*

- Any screen
  - New account with 3 active listings? Limit notice
- Camera: shutter or gallery
  - Camera permission denied? Gallery
- Photo check: use this photo or retake
  - Upload fails? Draft kept, retry
- Details: title, price, category
- Pickup: option and availability
- Preview and publish: listing is live
  - Flagged by moderation? Held, retake or edit
  - Offline? Queued, publishes on reconnect

Under 30 sec from + to live, after a first listing

*Camera*

A photo and a price are all a seller gives [project context], so + opens the camera with no menu before it. The shutter or a gallery photo moves the seller on. With camera permission denied, the gallery opens with a link to settings. A draft left at any step stays on the phone, and + reopens it.

*Photo check*

The seller sees the photo full size with a title suggested from it, and retakes a bad photo before typing anything. "Use this photo" starts the upload and opens the details. When the upload fails, the draft stays and the seller retries from the same screen [blueprint, Photo upload fails].

*Details*

The title and category arrive filled in and editable, so the price is the one field the seller has to set: an amount, Free or Trade. Offline, the title is empty and the seller types it. A price far above similar items nearby shows a notice and does not stop the seller.

*Pickup*

The seller picks porch pickup, meet outside or flexible, and an availability window. The option decides what a buyer is shown when the seller accepts: the address for porch pickup, the nearest intersection for the others.

*Preview and publish*

The listing appears as neighbors will see it, on a map with the seller's approximate location and the radius it reaches. The preview shows the seller that the exact address is not on the listing [project context]. "Post it" publishes. Moderation classifies the photo and text at that moment [blueprint]. A flagged listing is held for review, and the seller retakes the photo or edits the details to submit it again. Offline, the listing queues with a pending mark and publishes on reconnect.

**Discovering nearby items**

*Flow: discovering nearby items*

- App opens
- Map: pins inside the walking radius
  - No listings in the radius? Post an item, or widen to a 20 min walk
  - Switched to the list? Same items by walking time
- Item card: photo, title, price, distance
  - Opened from the daily digest? Digest cards replace the map
- Item detail: buying starts here

*Map*

Home is a map centered on the buyer, because buyers do not know what they want until they see it [project context]. Listings inside the walking radius are pins with thumbnails, listings beyond it are faded pins, and the header names the neighborhood. A pin opens an item card with the photo, title, price and distance, and the card opens the item's detail. Pinching the map or a preset of a 5, 10 or 20 min walk changes the radius. Filters for category, price range with Free and Trade, and posted today or this week apply to the map and the list. With no listings in the radius, the buyer can post an item or widen the radius to a 20 min walk.

*List*

A toggle shows the same listings sorted by distance, then by how recently they were posted, grouped by walking time. The list gives each listing's walking time and the seller's tenure before the buyer opens it. A row opens the item's detail.

*Digest cards*

The daily digest push opens a stack of the 3 to 5 items posted closest to the buyer [blueprint]. The stack holds those items and nothing else from the feed, and a card opens the item's detail.

**Buying**

*Flow: buying*

- Item detail
- Interest sent: buyer taps "I want this"
  - Undo within 5 sec? Interest withdrawn
  - Item taken? Similar items nearby
- Waiting: seen, Accepted or Passed
  - No answer in 48 h? Interest expires
- Accepted: seller taps "It's yours"
- Pickup: meeting point and time window
  - Fell through? Listing takes interest again
- Exchanged: item leaves the map

*Item detail*

The detail gives a buyer what they need to decide without asking the seller: photo, title, price, walking time, the seller's tenure in the neighborhood and the pickup option [brief]. "I want this" sends interest. When the item was accepted for another buyer before the interest arrived, the buyer is told and shown 3 similar items by distance. Offline, the interest queues with a pending mark and sends on reconnect.

*Interest sent*

The button changes to a confirmation on the phone before the server answers, because the seller's notification is batched and the buyer would otherwise wait for a sign that the tap worked [blueprint]. Undo withdraws the interest during the undo window, and the interest goes to the server when the window closes.

*Waiting*

The activity tab lists the interest with the seller's name, a response time estimated from the seller's past answers, and a status of Seen, Accepted or Passed. When an interest expires unanswered, the buyer is told and can ask to hear if the item is listed again, and the seller is asked whether the item is still available.

*Interest in a listing*

The seller sees who is interested, their walking time and their tenure, and chooses on proximity and tenure in place of a rating [brief]. "It's yours" accepts one buyer and opens the pickup screen for both. The listing stops taking interest and the other interested buyers see Passed. A seller who does nothing lets the interest expire.

*Pickup*

Buyer and seller see the same map with the meeting point and the time window. On accept, the seller's phone passes the pickup location to the buyer's: the address for porch pickup, the nearest intersection for meet outside or flexible. No address leaves the seller's phone before accept [project context]. The thread sits on this screen. The seller's "Exchanged" or the buyer's "Yes, got it" moves both on, and "It fell through" from either reopens the listing to interest.

*Exchanged*

One confirmation from either person completes the exchange, because the handoff happens on the sidewalk where the app records nothing [blueprint]. The item leaves the map and each person's exchange count rises by one. The buyer can mark the item as described or not as described [blueprint].

**Messaging**

*Flow: messaging*

- Seller accepts
- Quick replies: on the pickup screen
  - Message reported? Reported person loses messaging
- Free text: after 3 exchanges between the same two people
  - Harassment flag on either account? Quick replies only
- Thread deleted: 48 h after the exchange ends

*Thread*

No thread exists before the seller accepts, because open messaging before a commitment invites spam, lowball offers and harassment [blueprint]. The thread opens on the pickup screen with quick replies: "On my way", "I can pick up now", "Running 10 min late", "Can you hold until tomorrow?", "Need to reschedule" and "Never mind, sorry". "Need to reschedule" reopens the time window for both people. "Never mind, sorry" ends the exchange as fallen through.

*Free text*

A text field joins the quick replies once the same two people have completed 3 exchanges with each other [blueprint].

*Report*

Every message carries a report action. The reported person loses messaging immediately, until the report is reviewed. An account flagged for harassment has quick replies only in every thread, and the neighborhood's organizer is notified without a notice to the flagged person.

---

**Interaction Specifications**

| Moment | Change | Timing |
|---|---|---|
| Details, no price set | Next is disabled until an amount, Free or Trade is set | While the field is empty |
| Switch between map and list | Filter chips and radius stay as set | On the toggle |
| Pull down on the list | List refreshes | On release |
| Tap "I want this" | Button becomes a checkmark and "Interest sent", with a spring animation, before the server answers. This motion must exist: it is the buyer's only confirmation while the seller's notification waits in a batch. | 150 ms |
| Undo | A toast offers Undo. A tap returns the button to "I want this". At expiry the interest goes to the server. | 5 seconds |
| Interest reaches the seller | Push notification, batched | Every 15 minutes |
| Seller opens the interest, accepts it or passes | Buyer's status changes to Seen, Accepted or Passed | On the seller's action |
| Interest unanswered | Interest expires | 48 hours after it was sent |
| Before a pickup | Reminder push | 1 hour before the agreed time |
| Exchange completes or falls through | Thread is deleted | 48 hours after |

---

**Multi-Channel Map**

| Handoff | Where it happens | What passes |
|---|---|---|
| App to the street | Buyer leaves the pickup screen and walks to the meeting point | The meeting point or address, the time window and the price. Payment is made in person and the app records none [project context]. |
| Street to app | Either person confirms on the pickup screen after the handoff | The outcome: exchanged or fell through |
| Missed push to app | A seller whose interest push did not arrive opens the app | The waiting interests, listed in the activity tab [blueprint, Notification service down] |

---

**Open Questions**

- The brief places messaging in v2 and scopes interest as one tap with no message [brief]. Do quick replies ship with the MVP?
- A seller clearing a home has more than 3 items, and a new account holds 3 active listings [blueprint]. Does the limit apply to that seller?

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

**Nearby**

- Explore (default)
  - Map of items within the walking radius
  - Item card on a pin
  - Radius: 5, 10 or 20 min walk
  - Filters: category, price, posted
  - What's new on your block, from the daily push notification
- List (same items)
  - Rows grouped by walking time
  - Search
  - Filters: category, price, posted
- Post (+)
  - Camera and photo check
  - Title, price and category
  - Pickup
  - Preview and post
  - Wanted request, from search and the Wanted filter
- Activity
  - Your listings, each with the interest it received
  - Your interests
  - Pickup: meeting point, time window, quick replies
  - Exchange confirmation
- You
  - How neighbors see you
  - Neighborhood and location
  - Notifications
  - Organizer tools, for organizers
- Item detail (no tab)
  - Photo, price, walking time, seller tenure, pickup type
  - I want this

**Cross-links**

| From | To | When |
|---|---|---|
| Pin card, list row, search result, Activity row, shared link | Item detail | The person taps it [journey, Flow 2] |
| Daily digest push notification | What's new on your block, then Item detail | The person taps the notification [journey, Flow 2] |
| Item detail | Activity, Your interests | The person taps I want this and the undo window ends [journey, Flow 3] |
| Interest push notification | Activity, the listing that received it | A neighbor is interested [blueprint, Seller touchpoints] |
| Accepted and pickup-reminder push notifications | Activity, Pickup | The seller accepts; one hour before the agreed time [blueprint, Notification Service] |
| Preview and post | Explore, with the new pin | The listing is published [blueprint, Seller touchpoints] |
| Explore or List with no listings in the radius | Post; the 20 min walk radius | The neighborhood has nothing listed [journey, Flow 2] |
| Search with no results | The next wider radius; Wanted request | Nothing in the radius matches |
| Wanted filter | Wanted request | The person wants to ask for an item |
| Item detail of an item already taken | Item detail of similar items, nearest first | Another neighbor's interest was accepted first [journey, Flow 3] |
| You, Organizer tools | Item detail of a flagged listing | An organizer reviews a flag [blueprint, Content Moderation System] |

**Decisions**

| Decision | Reason | Depends on |
|---|---|---|
| Explore opens on launch as a map centered on the person. | Buyers arrive without a target and choose from what is near [project context, Buyers]. Walking distance is the product [brief, Guiding Principles]. | Geolocation. Without it no place in the app has content [blueprint, Failure Modes]. |
| List is a tab that shows the items, radius and filters of Explore as rows. | A pin holds a thumbnail. A row holds title, price, walking time and seller tenure, which a person compares across items [journey, Flow 2]. A tab keeps the rows one tap from any screen and gives search a place. | Radius and filter state shared between the two tabs. |
| Post is the center tab and opens the camera with no menu before it. | A seller abandons a post that takes more than 60 seconds [project context, Sellers]. The + is on every screen [journey, Flow 1]. | Camera permission, with the gallery as the fallback [journey, Flow 1]. |
| Activity holds each exchange in progress, for the person as seller and as buyer. | One person posts and takes. Interest, acceptance and pickup arrive as push notifications and need one place to land [blueprint, Notification Service]. | Push notification delivery. When it is down, interest appears here on the next open [blueprint, Failure Modes]. |
| Your listings sit in Activity. You holds the profile and settings. | A listing needs an answer from its seller while it is live. A profile does not. | None. |
| Messages have no destination. Quick replies sit on the Pickup screen of an accepted interest. | Messaging unlocks only after acceptance and deletes 48 hours after the exchange, so no conversation list exists [journey, Flow 4]. General messaging is outside the MVP [brief, Proposed Scope]. | The acceptance step [journey, Flow 3]. |
| Organizer tools sit under You and appear for organizers. | An organizer enters when a listing is flagged or a neighbor is reported [blueprint, Diane]. A tab for those tools would be empty for sellers and buyers. | The organizer role on the account [blueprint, Content Moderation System]. |
| Item detail belongs to no tab. | It is reached from Explore, List, search, Activity, a shared link and a push notification [journey, Flow 2 and Flow 3]. | Deep links that open the item. |
| A category filters Explore and List. No category has a page. | Proximity comes before subject [project context, Design Principles]. A neighborhood can have 50 active users [project context, Hard Constraints], so a category page would often be empty. | The category set on each listing when it is posted [journey, Flow 1]. |
| Free and Wanted sit in the category list beside the subjects. | The goal is 25% or more of listings free [brief, Goals], and an organizer moves a group over when giving has a place of its own [journey, Diane]. A Wanted request shows demand in a neighborhood with few listings [brief, Constraints]. | The price on each listing; a request form. |
| No drawer. Each destination is in the tab bar or inside a tab. | The tab bar holds every destination at phone width, where over 90% of use is expected [project context, Hard Constraints]. | None. |

---

**Navigation Specification**

Global navigation is flat: a bottom tab bar of equal destinations, each reachable from the others in one tap. Browsing, posting, coordinating a pickup and managing an account share no steps, and the + has to be reachable from every screen [journey, Flow 1]. Local navigation on Explore and List is faceted: radius, category, price and posted date combine to narrow one set of items.

**Tab bar**

| Tab | Opens | Badge |
|---|---|---|
| Explore | The map, centered on the person | Dot when items were posted in the radius since the last open |
| List | The items of Explore as rows, nearest first, then newest [journey, Flow 2] | The Explore dot |
| Post (+) | The camera | None |
| Activity | Your listings and Your interests, with those waiting on the person first | Count of unread interest responses and pickup reminders |
| You | The profile as neighbors see it, then settings | Dot when a setting needs attention, such as expired location permission |

- The tab bar shows on each tab and on Item detail. It hides during posting, where the camera is full screen [journey, Flow 1]. Closing a post returns to the tab the person left.
- Each tab keeps its position when the person switches away. Tapping the active tab returns it to its top; on Explore that recenters the map on the person.
- Back from Item detail returns to the place that opened it. From a shared link or a push notification, Back goes to Explore centered on the item.

**Local navigation**

- Explore and List share the radius and the filters. A change in one tab holds in the other [journey, Flow 2].
- Radius: presets of 5, 10 and 20 min walk, and pinch-to-zoom on the map [journey, Flow 2]. The radius starts at 10 min walk and keeps the person's last choice.
- Filters: category, price (Free, Trade or a range) and posted (today or this week), one value each [journey, Flow 2]. Each active filter shows as a chip that removes it.
- Activity has two groups, Your listings and Your interests. A listing opens the interest it received; an accepted interest opens Pickup, from either group.

**Orientation**

- The header of Explore and List names the neighborhood, such as Capitol Hill, and the map shows the person's location [journey, Flow 2].
- A radius label on Explore and List states the walking time in force: Showing items within a 10-min walk [journey, Flow 2].
- Items beyond the radius show on the map as faded pins [journey, Flow 2].
- List groups its rows under On your block, 5-min walk and 10-min walk [journey, Flow 2].
- After more than 24 hours away, Explore opens with a notice of the items posted since the last visit. Tapping it shows them.

**States**

- A tab is active, inactive or badged. The active tab is marked on every screen that shows the tab bar.
- With geolocation off, each tab shows the location request and a link to system settings [blueprint, Failure Modes].
- With the search index down, List has no search and browsing continues [blueprint, Support Processes].
- The phone is the base size. The tab bar holds every destination there, and nothing moves into a menu.

---

**Taxonomy Documentation**

| Category | Holds | Goes elsewhere |
|---|---|---|
| Furniture & Home | Tables, chairs, shelves, lamps, decor | Appliances: Kitchen & Dining |
| Electronics & Gadgets | Phones, laptops, cables, small devices | TVs over 40 inches: Furniture & Home |
| Clothing & Accessories | Wearable items, bags, jewelry | Kids' clothing: Kids & Baby |
| Kids & Baby | Clothing, toys, gear, strollers, cribs | |
| Books & Media | Books, vinyl, games, DVDs | |
| Kitchen & Dining | Appliances, cookware, dishes | |
| Garden & Outdoor | Plants, tools, patio furniture | |
| Sports & Fitness | Equipment, bikes, weights | |
| Free | Every item priced Free | |
| Wanted | Requests for an item | |

- The list is one level deep, with no sub-categories. A walking radius holds few listings per subject [project context, Hard Constraints], and a shorter list is faster to post into [project context, Sellers].
- An item has one subject category. The category is suggested from the photo and the seller can change it [journey, Flow 1]. Where two subjects fit, such as a kid's bike, the seller chooses.
- Free is set by price. An item priced Free has two parents: its subject category and Free. Choosing Free in the category list sets the price filter to Free.
- Wanted is set by listing type. A request sits in Wanted alone and appears among items only when Wanted is the chosen category.
- Trade is a price and has no category [journey, Flow 1].
- A new subject is added as one more category at this level.

---

**Search/Browse Strategy**

People browse first. Buyers open Nearby without an item in mind and decide when they see one [project context, Buyers], so Explore and List carry discovery. Search serves the person who wants one item, and a Wanted request serves that person when the item is not listed.

**Browse entry points**

- Explore: the map of pins within the radius.
- List: the same items, grouped by walking time.
- Filters on both tabs.
- What's new on your block: the daily push notification opens a stack of the 3 to 5 items posted in the closest radius [blueprint, Notification Service].
- Faded pins beyond the radius, and the notice of new items after 24 hours away.

**Search**

- Search is in List, revealed by pulling the list down. Explore has no search field.
- It matches full text in titles and descriptions [blueprint, Support Processes], within the radius in force.
- Results sort by distance, then relevance, and load as the person scrolls.
- Results update as the person types. Search suggests no queries: a radius holds few enough listings to scan.
- The filters in force apply to results and can be changed there.
- A search with no results sends the person to the next wider radius, up to 20 min walk, or to a Wanted request that carries the query.
- Queries with no results are logged by neighborhood. They show which items to seed in a neighborhood with few listings [brief, Constraints].

---

**Open Questions**

- Is giving a mode with a place of its own in the navigation, or is Free a category and a price?
- Does a Wanted request also start from the +, which puts a choice before the camera?

## /wireframe
agent: Wren
summary: Compared posting mechanisms on an idea board, then drew the chosen one as interactive grayscale wireframes and a click-through prototype.

Posting could work in mechanically different ways, so the first artifact was an idea board: each candidate drawn as a small piece of real UI, side by side. Photo-first won and became full wireframes from a grayscale kit where every control works: inputs take typing, chips toggle and buttons press.

### Output

The wireframes above are live markup from the kit: the inputs take typing, the controls are native, and the site's theme flows through them. The idea board holds mechanically different answers to "how does posting work," each a fragment of real UI with its trade-off in the caption. Photo-first won and moved up a rung; the losers stay on the board, so "why isn't it a form?" has an artifact for an answer.

The indigo markers are annotations, each anchored to the element whose decision it records. A few of them:

**Browse ②** Free is a filter chip and, in a row, a filled badge in the price position, the heaviest mark in the row. A quarter of listings are meant to be free [brief, goals]. **③** Rows are grouped by walking time, nearest first, because distance decides whether a person opens an item [project context, design principles].

**Post an item ①** The photo zone is the top of the screen and opens as the camera viewfinder; the frame shows it after capture. The photo suggests the title and category, so the fields below arrive filled [idea board, Photo first]. **④** Who sees the listing, what stays hidden and what it costs sit above Post it, where the seller commits [project context, hard constraints].

**Posted ①** The confirmation gives the audience as a number of neighbors, so the seller knows people within walking distance will see the listing [project context, design principles].

## /articulate
agent: Wren
summary: Set the voice and tone and wrote the copy for empty states, errors and trust signals.

Nearby sounds casual and warm, like a note on a neighborhood bulletin board. The copy covers the hard moments: an empty neighborhood, an error, and deciding to trust a stranger enough to walk to their house.

### Output

**Voice and Tone Framework**

Nearby speaks as one neighbor to another about an item that costs under $20 [project context, design principles].

**Neighborly.** People are neighbors, never users, buyers or members, and a neighbor is named when the name is known. The voice stops before familiarity: no greeting, no nickname, no comment on the item.

- Do: Sarah accepted another neighbor before your interest arrived.
- Don't: This item is no longer available to the requesting user.

**Plain and exact.** Everyday words and contractions carry the exact fact: what failed, what is saved, what the limit is. No emoji, no exclamation marks, no error codes, no joke in an error.

- Do: That photo didn't upload. Your draft is saved on this phone.
- Don't: Oops! Something went wrong.

**Local.** A place is a walking time or the neighborhood's name [brief, guiding principles]. Never "near you", "in your area", miles, a street or an address.

- Do: Nothing within a 10-min walk yet
- Don't: No results found in your area

**Brief.** One sentence. A second sentence carries the next step or what is safe. Brief stops before curt: an error names the next step.

- Do: You're offline. This listing will post when you're back online.
- Don't: We were unable to publish your listing at this time due to a network connectivity issue. Please check your connection and try again later.

**Honest.** The copy states what Nearby knows and what it can't do. A trust signal is a fact about tenure, distance or history, with no adjective and no verdict, because Nearby verifies no identity [project context, constraints]. No urgency, no count of other people looking, no praise for activity [project context, ethical stance].

- Do: New to Nearby
- Don't: Verified neighbor
- Don't: 3 others are looking at this

**Tone by context**

| Context | Tone | Example |
|---|---|---|
| An empty map, list or tab | Inviting: one thing to do and no pressure to do it | Got something you don't need? Neighbors within a 20-min walk will see it. |
| A notice on a field | Matter-of-fact, one sentence, and the person can continue | Similar items nearby are listed for less. You can still post at this price. |
| An error the person can recover from | Calm: what failed, what is saved, the action | That photo didn't upload. Your draft is saved on this phone. |
| A rule or a hold | Direct: the rule and when it ends, with no blame | New accounts can list 3 at a time. The limit ends after your first exchange. |
| An exchange that stalls or falls through | Neutral about both neighbors: what happened and the next step | Sarah didn't answer within 48 hours. |
| A trust signal | A fact in the fewest words | Neighbor since 2021 |

---

**Copy Deck**

Text in braces is filled from data: {radius} is the radius in force, such as 10-min walk; {item} is the listing's title; {seller} and {buyer} are first names.

**Empty states: Explore and List**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| No listings inside the radius [journey, Discovering nearby items] [blueprint, Neighborhood below density] | Nothing within a {radius} yet | Got something you don't need? Neighbors within a 20-min walk will see it. | Post an item. Widen to a 20-min walk | With the radius at a 20-min walk, Post an item is the one action. Both buttons expand in translation. |
| Search with no results [site map, Search] | No match for "{query}" within a {radius} | Look further out, or ask your neighbors for it. | Search a {next radius}. Post a Wanted request | {next radius} is the next preset up. At a 20-min walk the body is "Ask your neighbors for it." and Post a Wanted request is the one action. The request carries {query}. |

**Empty states: Activity**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| Your listings, nothing posted | Nothing posted yet | Got something you don't need? A neighbor might want it. | Post an item | |
| A listing with no interest [wireframes, Posted] | No interest yet | You'll get a notification when a neighbor wants it. | None | With push notifications off, the body is "It will show here when a neighbor wants it." |
| Your interests, nothing sent | Nothing here yet | Tap I want this on an item and the seller's answer shows here. | See what's nearby | Opens Explore. |

**Empty states: Organizer tools**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| Moderation queue cleared [blueprint, A flagged listing] | Nothing to review in {neighborhood} | Held and reported listings show here. | None | |

Each empty state carries one line icon of its subject, such as a map pin, a magnifier or a tag, and no character illustration.

**Errors: every tab**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| Location unavailable [blueprint, Location unavailable] | Location is off for Nearby | Nearby shows what's within walking distance of you, so nothing can load without it. Your location is used for that and never sold. | Open Settings | Opens the app's location permission, or the phone's location services when those are off. |
| Session expired | You were signed out | Your drafts and activity are still here. | Sign in | |

**Errors: Explore and List**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| Search unavailable [blueprint, Search unavailable] | Search isn't working right now | Everything within a {radius} is in the list. | Browse the list | |
| Photos fail to load [blueprint, Photos fail to load] | Photos aren't loading right now | You can still open an item and send interest. | None | One notice per screen. Each empty photo frame has the alt text "Photo didn't load". The notice clears when photos return. |

**Errors: Post**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| New account with 3 active listings [journey, New account] | You have 3 items listed | New accounts can list 3 at a time. The limit ends after your first exchange. | See your listings | Replaces the camera. |
| Camera permission denied [journey, Camera] | Camera is off for Nearby | Pick a photo here, or turn the camera on in Settings. | Open Settings | Shown above the gallery. |
| Photo upload fails [blueprint, Photo upload fails] | That photo didn't upload | Your draft is saved on this phone. | Try again | |
| Offline, no title suggestion [journey, Details] | | You're offline, so there's no suggestion. Type a title. | None | Replaces "Suggested from your photo." under Title. |
| Price far above similar items [journey, Details] | | Similar items nearby are listed for less. You can still post at this price. | None | Under Price. Post it stays enabled. |
| Offline at Post it [journey, Preview and publish] | You're offline | This listing will post when you're back online. | Done | The listing shows "Waiting to post" in Your listings until it publishes. |
| Listing held by the classifier [blueprint, Listing held by the classifier] | This listing is in review | It isn't live yet. A person checks it against what can be listed on Nearby, and the result shows in Activity. Changing the photo or the details sends it for a new check. | Edit listing. Retake photo. What can't be listed | What can't be listed opens the prohibited items policy. |
| Listing closed after 14 days [blueprint, Stale listings] | {item} closed after 14 days | It had no accepted pickup. Post it again to put it back on the map. | Post it again | |

**Errors: Item detail and interest**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| Item taken before the interest arrived [journey, Item detail] | This one's taken | {seller} accepted another neighbor before your interest arrived. | None | Followed by 3 items under the heading "Similar items nearby", nearest first. |
| Offline at I want this [journey, Item detail] | You're offline | Your interest will send when you're back online. | None | The button shows "Waiting to send" until it sends. |
| Interest fails to send | Your interest didn't send | {seller} hasn't been notified. | Try again | |
| Interest expired, buyer [blueprint, Interest unanswered] | Your interest in {item} expired | {seller} didn't answer within 48 hours. | Tell me if it's listed again | The button expands in translation. |
| Interest expired, seller [journey, Waiting] | Is {item} still available? | {buyer}'s interest expired after 48 hours without an answer. | Still available. Take it down | |

**Errors: Pickup**

| State | Headline | Body | Actions | Build notes |
|---|---|---|---|---|
| Either person taps It fell through [journey, Pickup] | Did this pickup fall through? | {item} goes back on the map for other neighbors. | It fell through. Keep the pickup | Confirmation dialog. |
| Time window ended with no confirmation, seller [blueprint, Handoff not confirmed] | Did {buyer} pick up {item}? | | Exchanged. It fell through | Sent once. |
| Time window ended with no confirmation, buyer [blueprint, Handoff not confirmed] | Did you get {item}? | | Yes, got it. It fell through | Sent once. |
| No confirmation after 48 hours [blueprint, Handoff not confirmed] | {item} closed without a confirmation | The pickup wasn't marked within 48 hours, so it isn't in your exchange count. | None | |

**Trust signals**

| Signal | String | Where it shows | Rule |
|---|---|---|---|
| Tenure | Neighbor since {month}. Neighbor since {year} | List rows, item detail, the interest screen and the profile [wireframes, Browse] | Counted from the date the person's current location was set [blueprint, Trust signals]. The month name for under 12 months, the year after that. On the person's own listing: "You · Neighbor since {month}" [wireframes, Posted]. Month names are translated. |
| Walking time | {minutes} min walk | List rows, item detail and the interest screen | Measured along the street network from the viewer [blueprint, Walking radius], rounded to the minute. Under 1 minute shows "1 min walk". Never a distance, a street or an address. |
| A neighbor who is interested | {buyer} · {minutes} min walk · Neighbor since {year} | The interest push notification and the interest screen [blueprint, Interest and acceptance] | Walking time is from the item. |
| New account | New to Nearby | Item detail, the interest screen and the profile, before the tenure | For an account's first 4 weeks [blueprint, Trust signals]. The badge expands in translation. |
| Exchange count | {count} exchanges in {neighborhood} | The profile | Hidden at zero. At one: "1 exchange in {neighborhood}". Plural forms differ by language. Never beside a name in a list, a notification or the interest screen. |
| Trust signals unavailable [blueprint, Trust signals unavailable] | Neighbor | Wherever the tenure shows | Replaces the tenure and hides the exchange count until the signals return. |
| Approximate location | Approximate location. {seller} shares the meeting place after accepting. | Under the map on item detail | Before acceptance [blueprint, Location disclosure]. |
| Private feedback | {seller} won't see your answer. | Under As described and Not as described, after the buyer confirms | [blueprint, Pickup and completion] |

---

**Open Questions**

- Empty states name the walking radius and the exchange count names the neighborhood. Should the empty map name the neighborhood too, as in "Nothing in Capitol Hill yet"?
- The exchange count shows on the profile and nowhere else. Should a seller also see it on the interest screen when choosing between neighbors?

## /evaluate
agent: Vigil
summary: Found the launch blockers, ranked every issue by severity and named the fix for each.

Each issue got its severity, the heuristic it breaks and the change that fixes it. The one launch blocker is in the handoff between neighbors: after the seller accepts, the two people cannot agree when to meet.

### Output

**Nearby's item exchange design**

---

**Anti-Pattern Verdict**

Significant Issues: notification spam and attention bait, in the daily digest and the new-item dot.

---

**Priority Issues**

*Critical (blocks core task completion or violates regulations)*

**After the seller accepts, the two people cannot agree when to meet**

- **What happens:** Acceptance sends both people a meeting point and a time window that the server suggests, and the buyer never confirms a time [blueprint, Interest and acceptance]. The quick replies that carry one, "I can pick up now" and "Need to reschedule", sit in the pickup thread [journey, Messaging], and messaging waits for the second version [brief, Proposed Scope].
- **Why it matters:** At a meet-outside pickup the seller stands at an intersection during a window, the buyer arrives at another time, and the exchange ends with no handoff.
- **Breaks:** user control and freedom, and consistency and standards.
- **Change:** Ship the quick replies with the first version, and add the buyer's choice of a time inside the window to the pickup screen.

**Walking times show where a seller lives before any acceptance**

- **What happens:** A listing's walking time is computed from each viewer's position, so a person who opens it from several places can work out the seller's address [blueprint, Ecosystem & dependencies]. List rows give the time to the minute: "1 min walk" under "On your block" [wireframes, Browse].
- **Why it matters:** Any neighbor in the radius can find the home of a seller who has accepted no pickup, against the line above Post it that the address stays hidden [wireframes, Post an item] [project context, Constraints].
- **Breaks:** error prevention.
- **Change:** Before acceptance, show walking time as a band measured from the approximate pin, and give the time to the minute on the pickup screen.

*Major (significant friction, potential user harm)*

**Posting never sets where the item is**

- **What happens:** Posting has no step for the item's location or for the address a porch pickup releases [journey, Posting an item] [wireframes, Post an item]. Positions come from the phone's geolocation, accurate to 100 m [blueprint, Support for every stage].
- **Why it matters:** A seller who posts from work pins the listing there, and a porch pickup sends the buyer to a position several doors from the item.
- **Breaks:** error prevention.
- **Change:** Add the item's location to the pickup step, confirmed on the first listing and reused after it, with the street address asked for when the seller picks porch pickup.

**The walking radius has a different size in the brief, the blueprint, the site map and the screens**

- **What happens:** Post and Posted give the audience as neighbors within a 20-min walk, and List opens at a 10-min walk [wireframes, Post an item, Posted, Browse] [site map, Local navigation]. The radius is 400 m to 1,600 m by housing density [blueprint, Walking radius], and the seller sets a pickup radius when posting [brief, Proposed Scope].
- **Why it matters:** A seller is told an audience that default browsing does not reach, and a builder has no single rule for which listings a buyer sees.
- **Breaks:** consistency and standards.
- **Change:** Set one rule for which listings a buyer sees, and state the audience on Post and Posted from that rule.

**A listing and a person have no report action**

- **What happens:** Moderation starts when a neighbor reports a listing or a person [blueprint, A flagged listing], and item detail holds the photo, price, walking time, tenure, pickup type and "I want this" [site map, Item detail]. The one report action is on a message, after acceptance [journey, Messaging].
- **Why it matters:** A buyer who sees a prohibited item, or a seller who gets unwanted interest from one neighbor, cannot send it to the organizer's queue.
- **Breaks:** user control and freedom.
- **Change:** Add a report action to item detail and to each interested neighbor in Activity.

**Posted promises a notification the seller may not receive**

- **What happens:** Posted reads "You'll get a notification when a neighbor wants it. Nothing to check until then." [wireframes, Posted]. Push is opt-in and capped at 5 a day, with interest sent after acceptances and reminders [project context, Ethical stance] [blueprint, Push notifications], and posting has no step that asks for the permission [journey, Posting an item].
- **Why it matters:** A seller with push off, or with several listings on a moving day, stays out of Activity as the screen says, and the interest expires after 48 hours [journey, Interaction Specifications].
- **Breaks:** visibility of system status.
- **Change:** Ask for push permission on Posted, and where push is off or the cap is reached, say that interest waits in Activity.

**The daily digest is sent by default**

- **What happens:** The digest of the 3 to 5 newest items goes out every day by default [blueprint, Ecosystem & dependencies], and every push notification is opt-in [project context, Ethical stance]. Explore and List carry a dot whenever an item was posted since the last open, and Explore opens with a notice of new items after 24 hours away [site map, Tab bar, Orientation].
- **Why it matters:** A person who found what they needed is called back every day, where opening the app less often counts as success [project context, Ethical stance].
- **Breaks:** notification spam and attention bait.
- **Change:** Send the digest only to a person who turned it on, and take the new-item dot off the Explore and List tabs.

**The listing limit stops a seller clearing a home**

- **What happens:** An account with no completed exchange holds 3 active listings, and at the limit + opens a notice with the camera closed [journey, User Context & Variations]. In a newly opened neighborhood every account is new [blueprint, Ecosystem & dependencies], and the primary action on Posted is "Post another item" [wireframes, Posted].
- **Why it matters:** A seller in a moving week is refused at the fourth item and leaves the rest on the curb, in the weeks when the neighborhood has the fewest listings [project context, Users] [brief, Constraints].
- **Breaks:** flexibility and efficiency of use.
- **Change:** Raise the limit to fit a clear-out, and state it on Posted, with what lifts it, before the seller reaches it.

**Tenure dates claim more than the app knows**

- **What happens:** Rows read "Neighbor since 2019" and "Neighbor since 2021" [wireframes, Browse]. Signup verifies no identity [project context, Constraints], and the date comes from account age and time at the current location, which start at signup [blueprint, Trust signals].
- **Why it matters:** Tenure is the main trust signal [brief, Guiding Principles], and in a new neighborhood it shows the signup month for a 20-year resident and a newcomer alike.
- **Breaks:** match between system and the real world.
- **Change:** Label the date as time on Nearby in this area.

**Approximate location leaves a person with no position and no message**

- **What happens:** A fix less accurate than 100 m is discarded [blueprint, Failures], so a phone that grants approximate location never supplies one. The location states are location on and location off [journey, User Context & Variations] [site map, States].
- **Why it matters:** A person who chose approximate location for privacy can neither browse nor post, and no screen says why.
- **Breaks:** help users recognize, diagnose, and recover from errors.
- **Change:** Add a state for approximate location that says precise location is needed and why, with the link to settings.

*Minor (degraded experience, recoverable)*

**A buyer cannot withdraw interest and a seller cannot decline it**

- **What happens:** Interest ends by undo within 5 seconds, by expiry at 48 hours or when the listing closes [blueprint, How records end]. The seller's choices are "It's yours" or no answer [journey, Buying].
- **Why it matters:** A buyer who found the item elsewhere stays in the seller's list, the seller accepts a person who no longer wants it, and a buyer the seller will not choose waits 48 hours to hear.
- **Breaks:** user control and freedom.
- **Change:** Add withdraw to an interest in Activity and a pass action to the seller's interest screen.

**The other interested neighbors see Passed in the journey and a waiting status in the blueprint**

- **What happens:** On acceptance the other buyers see Passed [journey, Buying], or keep a waiting status until the listing closes or the seller releases the acceptance [blueprint, Several requests for one item]. When a pickup falls through, the listing reopens to new interest [journey, Buying] or to the neighbors still waiting [blueprint, Failures].
- **Why it matters:** A buyer told Passed stops watching an item that returns an hour later, or a buyer left waiting holds out for an item that is gone.
- **Breaks:** consistency and standards, and visibility of system status.
- **Change:** Keep the other buyers in a waiting status that says the item is promised to another neighbor, and offer it to them in order when the pickup falls through.

**A trade has no step for what is offered in return**

- **What happens:** Trade is a price on Post and a filter on List [wireframes, Post an item, Browse], and interest is one tap with no message [journey, User Context & Variations]. The quick replies after acceptance name no item [journey, Messaging].
- **Why it matters:** The seller accepts without knowing what the buyer brings, and the two find out at the meeting point.
- **Breaks:** match between system and the real world.
- **Change:** Let interest in a Trade listing carry what the buyer offers.

**Neither person learns how payment is made**

- **What happens:** Payment is made in person, and the pickup screen passes the meeting point, the time window and the price [journey, Multi-Channel Map]. Item detail and the quick replies carry no payment method [site map, Item detail] [journey, Messaging].
- **Why it matters:** A buyer arrives with a payment app, the seller takes cash, and the handoff fails.
- **Breaks:** help and documentation.
- **Change:** Let the seller state the payment accepted, and show it on item detail and the pickup screen.

**The preview on Posted has no map**

- **What happens:** The preview on Posted is a card with the photo, title, price, pickup type and tenure [wireframes, Posted]. The preview before publishing showed the listing on a map with the seller's approximate location and the radius it reaches [journey, Posting an item].
- **Why it matters:** The seller never sees the pin neighbors get, which is the seller's one check that the address is off the listing.
- **Breaks:** visibility of system status.
- **Change:** Add the map with the approximate pin and the radius to the preview on Posted.

**A Wanted request has no flow after the form**

- **What happens:** A search with no results and the Wanted filter both open a Wanted request [site map, Cross-links]. The flows cover posting, discovering, buying and messaging [journey, Screen-by-Screen Flow], and the List chips hold no Wanted [wireframes, Browse].
- **Why it matters:** A buyer who sends a request cannot tell who sees it or how a neighbor answers.
- **Breaks:** dead ends.
- **Change:** Add the Wanted flow to the journey: who sees a request, how a neighbor answers and how the requester hears.

**Trust signals read a contact list the first version leaves out**

- **What happens:** The Trust Inference Engine reads mutual contacts and shows a mutual connection [blueprint, Trust signals], and mutual connections wait for a later version [brief, Proposed Scope]. Reading contacts is a second permission beside location [blueprint, Ecosystem & dependencies].
- **Why it matters:** An app built from the blueprint asks for a contact list that no first-version function needs [project context, Ethical stance].
- **Breaks:** consistency and standards.
- **Change:** Remove mutual connections from the first version's trust signals and permissions.

**The header names a neighborhood and browsing uses a radius**

- **What happens:** The header reads "Capitol Hill" over items within a walking radius [wireframes, Browse]. The exchange count and the organizer's queue belong to a named area [blueprint, Open questions].
- **Why it matters:** People in two named areas see a listing near an edge, and a report on it has two organizers' queues to go to.
- **Breaks:** match between system and the real world.
- **Change:** Draw a fixed boundary for each named area, used for the header, the exchange count and the organizer's queue, and keep the radius for browsing.

**The audience count on Posted has no floor**

- **What happens:** Posted reads "842 neighbors within a 20-min walk can see your bookshelf" [wireframes, Posted]. A neighborhood runs with as few as 50 active users [project context, Constraints].
- **Why it matters:** The first sellers in a neighborhood read a count in the tens, or a count of every account in range that overstates who will see the listing.
- **Breaks:** visibility of system status.
- **Change:** Count the neighbors active in the radius, and replace the number with words below a floor.

**The seller never receives "not as described"**

- **What happens:** The buyer's answer changes the seller's as-described rate, and the seller sees neither the answer nor the rate [blueprint, Pickup and completion].
- **Why it matters:** Feedback meant to be constructive [project context, Ethical stance] feeds a rate the seller cannot see, learn from or correct.
- **Breaks:** visibility of system status.
- **Change:** Tell the seller privately when a buyer answers "not as described", with what the answer changes.

*Cosmetic (polish, not blocking)*

**Item detail and search use a description that posting never collects**

- **What happens:** Item detail shows a description and search matches descriptions [blueprint, Posting and browsing, Support for every stage]. Posting asks for none [journey, User Context & Variations] [wireframes, Post an item].
- **Why it matters:** Item detail carries an empty block, and search matches titles alone.
- **Breaks:** consistency and standards.
- **Change:** Remove the description from item detail and from search.

**The pickup reminder is set an hour ahead of pickups that start sooner**

- **What happens:** The reminder goes out 1 hour before the agreed time [journey, Interaction Specifications], and a buyer takes 20 minutes to 2 hours from opening the app to pickup [blueprint, Posting and browsing].
- **Why it matters:** For a pickup inside the hour the reminder arrives with the acceptance and uses one of the day's 5 push notifications [blueprint, Push notifications].
- **Breaks:** aesthetic and minimalist design.
- **Change:** Send the reminder only when the pickup is further off than the reminder's lead time.

**The filter chips read as one set**

- **What happens:** All, Free, Trade, the categories and Posted today sit in one row of chips [wireframes, Browse]. Category, price and posted are separate filters that combine, one value each [site map, Local navigation].
- **Why it matters:** A person cannot tell that Free and Furniture & Home combine while Free and Trade replace each other.
- **Breaks:** consistency and standards.
- **Change:** Group the chips by filter, so each group shows its one active value.

---

**Positive Findings**

- A draft stays on the phone at every posting step, a failed upload retries from the same screen, and an offline listing queues and publishes on reconnect [journey, Posting an item].
- The buyer's tap is confirmed on the phone before the server answers, while the seller's notification waits in a batch [journey, Interaction Specifications].
- List holds every item the map holds, grouped by walking time, so no task depends on reading a map [site map, Decisions].
- Who sees the listing, what stays hidden and "No fees" sit above Post it, where the seller commits [wireframes, Post an item].
- Free is a chip beside the price field and a filled badge in the row, so a gift takes one tap and reads as a first-class price [wireframes, Post an item, Browse].
- A buyer never sees how many neighbors asked for an item, and a pending pickup is a plain stamp, so no screen manufactures competition [blueprint, Interest and acceptance] [wireframes, Browse].
- No thread exists before the seller accepts, which keeps spam, lowball offers and harassment out of a first contact [journey, Messaging].
- Pickup fills in from the seller's last listing, so a seller clearing a home sets it once [wireframes, Post an item].

## /fortify
agent: Vigil
summary: Designed for what goes wrong: ghost sellers, misdescribed items, empty neighborhoods and abuse.

People ghost, misdescribe items and harass neighbors, and every neighborhood starts empty. The design answers with light friction that makes bad behavior harder and good behavior easier.

### Output

**State Inventory**

*Every screen*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| A notice about the person's conduct or a moderation decision: a pickup marked as a no-show, a not-as-described answer, a report, a hold | The person concerned sees it as the first row in Activity, with what happened and one action. Other neighbors' screens do not change: no count, label or status appears on the profile, the listing or a request [project context, ethical stance]. | The row stays until the person opens it. A push notification is sent only inside the daily limit of 5. Past the limit the row waits in Activity [blueprint, Push limit reached]. | No message of its own. | Major |

*Explore and List*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| No listings within a 20-min walk, on first open and on later opens | Explore shows the map centered on the person, the radius outline and no pins. List shows the message in place of rows. Both give the number of neighbors within a 20-min walk, the figure the Posted screen uses [wireframes, Posted]. The person can post an item or ask for one with a Wanted request [site map]. | The message leaves when a listing enters the radius, and the Explore tab shows its dot [site map, Tab bar]. | "No items within a 20-min walk yet. 37 neighbors are within a 20-min walk, and an item you post shows to each of them." Buttons: "Post an item", "Ask for an item". With no neighbors: "No items within a 20-min walk yet, and you are the first neighbor here. An item you post shows to each neighbor who joins." | Critical |
| No listings in the radius in force, and listings within a 20-min walk | Explore shows faded pins beyond the radius [journey, Map]. List shows the message with the number of items within a 20-min walk. The person can widen the radius or post an item [journey, Discovering nearby items]. | The wider radius stays as the person's choice [site map, Local navigation]. | "Nothing within a 10-min walk. 6 items are within a 20-min walk." Buttons: "Show a 20-min walk", "Post an item". | Major |
| Filters leave no listings, and the radius holds listings | The message in place of rows and pins, with the number of listings the filters hide. The filter chips stay in view. | "Clear filters" restores the listings. A chip removes one filter [site map, Local navigation]. | "No Free items within a 10-min walk. 14 other items are." Button: "Clear filters". | Minor |
| Fewer listings than fill the screen | The rows, then a closing line under the last row. A walking-time group with no listings shows no header. | The button widens the radius. It is absent at a 20-min walk. | "That is everything within a 10-min walk." Button: "Show a 20-min walk". | Minor |

*Item detail*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| Report sent about a listing or a person | Item detail and Pickup carry a Report action outside the thread, so reporting does not depend on quick replies [journey, Open Questions]. Reasons: "Prohibited item", "Not a real item", "About a person", "Unsafe behavior". After sending, the person sees the confirmation and can hide the listing from their Explore and List. | The listing stays up for other neighbors until it is reviewed [blueprint, No organizer action]. On return, Activity shows "Your report was reviewed." without the outcome: holds, warnings and suspensions are visible only to the person concerned [blueprint, A flagged listing]. | "Reported. Sarah is not told who reported this." Button: "Hide this listing for me". | Major |
| Listing paused, hidden in review or closed, opened from a shared link, the digest or Activity | The message and 3 similar items by distance, as for an item taken [journey, Item detail]. No reason is given. "I want this" is absent. | A paused listing that its seller shows again opens as normal. | "This item is not available." | Minor |
| Price above the usual during a declared emergency | A notice under the price. The listing stays up and takes interest [blueprint, Content Moderation]. | The notice shows while the price is more than 2 times the category's 90-day average in the neighborhood and the emergency is declared. An organizer can escalate the listing [blueprint, A flagged listing]. | "This price is higher than usual for this item." | Minor |

*Post an item*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| Seller with no-shows marked by 3 different neighbors in the past 30 days | The pickup option and "Available for pickup" arrive empty in place of the values from the last listing [wireframes, Post an item], with the message above them. "Post it" is disabled until both are set. | The fields fill from the last listing again when the 30-day count falls below 3. | "Recent pickups fell through because you were not there. Choose when you can hand this one over." | Major |
| Listing matches one the seller has live | On "Post it", duplicate detection [blueprint, Content Moderation] stops the post and names the first listing. The seller posts it as a new item or opens the first listing. | The draft stays on the phone [journey, Camera]. "Post it as a new item" publishes. | "You have a listing like this: Blue IKEA bookshelf, posted 10 minutes ago. Is this a different item?" Buttons: "Post it as a new item", "Open the first listing". | Minor |
| Seller with not-as-described answers from 3 different neighbors in the past 30 days | A line above the photo zone on the next post. Posting is not blocked. The line names no neighbor and no item. | Shown once, on the first post after the third answer. | "Some neighbors said recent items did not match the listing. A photo that shows wear or damage helps." | Minor |

*Posted*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| Listing held by the classifier | The message in place of "Posted" and of the neighbor count. The seller can edit the listing, which submits it again [journey, Preview and publish], or withdraw it. | An organizer reviews it. Platform moderation takes it after 24 hours without a decision, or immediately where the neighborhood has no organizer [blueprint, No organizer action]. On return, a cleared listing shows in Activity as "Your bookshelf is live." A removed listing shows as "Your bookshelf was removed in review: it is on the prohibited items list." with "Ask Nearby to review", which sends the decision to platform moderation once per listing. | "Your bookshelf is in review and is not live yet. We tell you here when the review is done." Buttons: "Edit listing", "Withdraw". | Major |
| No neighbors within a 20-min walk | The confirmation states that the listing is posted and that no neighbor has joined yet. The preview, "Post another item" and the notification callout stay [wireframes, Posted]. "Share listing" is added; the link opens the item's detail [journey, Entry from a shared link]. | The count line returns when a neighbor is within a 20-min walk. With one neighbor it reads "1 neighbor". | "Your bookshelf is posted. No neighbors within a 20-min walk have joined yet. It shows to each neighbor who joins." | Major |

*Activity, Your interests*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| Waiting longer than the seller's estimated response time | The status line gives how long ago the request was sent, the estimate and the expiry time. 3 similar items by distance show under it. The buyer can withdraw the request. | The line changes when the wait passes the estimate. The request expires 48 hours after it was sent [blueprint, Interest unanswered]. | "Sent 5 hours ago. Sarah usually answers within 2 hours. This request expires Thursday at 6:10 pm." Button: "Withdraw request". | Major |
| Request or pickup ended while the buyer was away | One row for each thing that happened. Request expired: the buyer can ask to hear if the item is listed again [journey, Waiting]. Seller ended the pickup before the time window: the listing takes interest again and the buyer can ask again. Listing removed in review: no reason is given. Each row shows 3 similar items by distance. | The meeting point, the time window and a porch address leave the buyer's Pickup screen when the pickup ends. | Expired: "Sarah did not answer. Your request for the couch expired." Button: "Tell me if it is listed again". Seller ended it: "Sarah ended the pickup for the couch. The couch is listed again." Button: "Ask again". Removed: "The pickup for the couch was cancelled. The couch is no longer listed." | Major |
| Waiting on a seller with no past answers | The status line gives the expiry time in place of an estimate. In a new neighborhood this is every seller [blueprint, Ecosystem & dependencies]. | The estimate appears after the seller's first answer. | "Sarah has not answered a request before. This request expires Thursday at 6:10 pm." | Minor |

*Activity, Your listings*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| Listing paused after a request expired unanswered, seen when the seller returns | The listing pauses when the first request expires, 48 hours after it was sent. A paused listing is hidden from Explore, List and search and takes no new requests. Requests still waiting keep their 48 hours. The row names the request that expired, says the listing is hidden, and lists the requests still waiting. | "I still have it" shows the listing again and opens the waiting requests. "It's gone" closes the listing and tells the waiting neighbors the item is gone. With no answer the listing closes 14 days after it was posted [blueprint, Stale listings]. | "Marcus's request expired after 48 hours without an answer. Your couch is hidden from neighbors until you answer. Do you still have it?" Buttons: "I still have it", "It's gone". | Major |
| Pickup ended while the seller was away | One row for each thing that happened. Buyer marked the seller as not there: the row gives the buyer, the time window and that the listing takes interest again. Buyer marked the item as not as described at the handoff: the listing takes interest again and the row opens "Edit listing". Buyer reported the seller and ended the pickup: the row says the pickup ended and gives no reason. | The listing reopens to interest when the pickup ends [journey, Pickup]. A not-there mark adds to the 30-day count behind the Post an item state. | Not there: "Marcus came for the couch on Tuesday between 5 and 8 pm and marked that you were not there. The couch is listed again." Not as described: "Marcus did not take the couch and said it did not match the listing. The couch is listed again." Button: "Edit listing". Ended: "The pickup with Marcus ended. The couch is listed again." | Major |
| Listing 12 days old with no accepted request | A row in Your listings on day 12, and a push notification where the seller has them on. | "Keep it listed" restarts the 14 days. With no answer the listing closes on day 14 [blueprint, Stale listings]. On return after it closed: "Your couch closed after 14 days without a pickup." with "Post it again", which publishes it in one tap. | "Your couch closes in 2 days. Do you still have it?" Buttons: "Keep it listed", "It's gone". | Minor |

*Pickup*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| Report sent from Pickup | The confirmation, then a choice to end the pickup or keep it. The reported person loses messaging when the report is sent [journey, Report]. | "End this pickup" ends the exchange as fallen through with no mark against either person, removes the meeting point, the time window and a porch address from the reported person's screen, and reopens the listing. A porch address the reported person saw on acceptance cannot be withdrawn, and the message says so. | "Reported. Marcus can no longer message you." After "End this pickup", meet outside or flexible: "The pickup has ended. Marcus no longer sees the meeting point." Porch pickup: "The pickup has ended. Marcus saw your address when you accepted. It is no longer shown to him in Nearby." Buttons: "End this pickup", "Keep the pickup". | Critical |
| The other person is not at the meeting point, or the item does not match the listing | "It fell through" [journey, Pickup] asks for a reason. Buyer: "Sarah was not there", "The item was not on the porch", "It did not match the listing", "I changed my mind". Seller: "Marcus was not there", "I changed my mind". The not-there reasons are offered once the time window has opened. | The listing takes interest again and the meeting point, time window and address leave the buyer's screen. A not-there reason counts as a no-show for the other person. "It did not match the listing" counts as a not-as-described answer. The buyer sees 3 similar items by distance and can ask again. At the end of the time window each person gets one prompt [blueprint, Handoff not confirmed]. | After a not-there reason: "The pickup for the couch has ended. The couch is listed again." Button: "Ask again". Prompt to the buyer: "Did you pick up the couch?" Prompt to the seller: "Did Marcus pick up the couch?" Answers: "Yes, got it" or "Exchanged", and "It fell through". | Major |
| Messaging paused for a reported person | The quick replies and the text field are replaced by the message. The meeting point, the time window, the confirmation and "It fell through" keep working while the pickup stands. The message does not name the reporter or the organizer [journey, Report]. | On return after review, a cleared report shows "The review is finished. Messaging is back." An upheld report shows "The review found a message that broke the neighborhood guidelines. You have quick replies only." [journey, Report]. | "Messaging is paused while a report is reviewed. We tell you the result here." | Major |

*Exchange confirmation*

| State | What the person sees and can do | Recovery and timings | Message | Severity |
|---|---|---|---|---|
| The seller confirmed first, or the buyer finds a fault after confirming | The completed exchange stays in the buyer's Your interests with the choice: as described, not as described [blueprint, Pickup and completion], or not received. The buyer can change the answer. | The choice stays for 48 hours after the first confirmation, the lifetime of the thread [journey, Interaction Specifications]. "I did not get it" takes the exchange off both counts, counts as a no-show for the seller, and leaves the listing closed. | "Sarah marked the couch as exchanged. How was it?" Answers: "As described", "Not as described", "I did not get it". | Major |
| Answer of not as described, or not received, saved | A confirmation that says who sees the answer. The answer changes the seller's as-described rate, which no profile shows [blueprint, Pickup and completion]. | None needed. | "Saved. Your answer is private. Sarah is not told what you answered." | Minor |

Severity: Critical causes confusion or data loss; Major significantly harms the experience; Minor reduces trust or perceived quality.

---

**Edge Case Catalog**

| Scenario | What the design does now | Change | Severity |
|---|---|---|---|
| A person opens one listing from several positions and estimates the seller's address from the walking times | The walking time is computed from each viewer's position to the item [blueprint, Ecosystem & dependencies]. | Before acceptance, the walking time and the pin are computed to the intersection nearest the item, the point meet outside and flexible disclose on acceptance [blueprint, Location disclosure]. | Critical |
| One neighbor sends a request on every listing a seller posts, or a seller does not want requests from a neighbor | Each request reaches the seller with the neighbor's name, walking time and tenure [journey, Interest in a listing]. The seller has no action against the sender. | The interest screen carries "Stop requests from Marcus". That neighbor's later requests to this seller show Passed, and this seller's listings leave that neighbor's Explore, List and search. Neither person is notified. | Major |
| A report concerns the organizer or the organizer's listing | Reports go to the neighborhood organizer's queue [blueprint, A flagged listing]. | A report that names the organizer, or a listing or request of the organizer's, goes to platform moderation and does not enter the organizer's queue. | Major |
| A person reports a neighbor falsely to cut off messaging during a pickup | The reported person loses messaging until the report is reviewed [journey, Report]. | After 3 of a person's reports are cleared in 30 days, that person's later reports are reviewed before messaging is paused. | Major |
| A suspended person signs up again | Signup has no identity verification [project context]. A new account shows a badge for 4 weeks and holds 3 active listings [blueprint, Trust signals]. | An account created on a device that holds a suspended account has its listings and requests held for platform moderation. | Major |
| A day with no new item in the radius | The digest is sent every day with the 3 to 5 newest items [blueprint, Ecosystem & dependencies]. | No digest is sent on a day with no item posted in the radius since the last one. A day with 1 or 2 new items sends those. | Minor |

---

**Open Questions**

- How long does platform moderation take to decide a held listing or a report once it has the item? The in-review messages state no time until this is set, and a seller's item has to be gone within 4 to 48 hours [blueprint, Posting and browsing].
- Does a seller whose listing was removed learn that the neighborhood organizer made the decision? Naming the organizer exposes a volunteer who lives in the neighborhood; leaving the name out hides who decided.
- With no identity verification at signup [project context], does a suspension follow a phone number, a device, or neither?
- Who declares the emergency that turns on the price notice?

## /include
agent: Vigil
summary: Audited accessibility for screen readers, keyboards, cognitive load and motor access.

A map-first interface shuts out people who can't see the map. The audit finds where the list view falls short of it.

### Output

**Accessibility Audit — Per WCAG Principle**

Severity: Critical blocks a task for someone using assistive technology. High makes the task very difficult but possible. Medium fails a WCAG criterion without blocking access. Low meets WCAG and falls short of inclusive design.

**Perceivable**

- **High. The map gives a screen reader pins in no order.** Explore opens on launch as a map of pins with thumbnails [site map, Decisions]. A screen reader user meets each pin as a separate stop, with no nearest-first sequence, on the screen every session starts from.
  - Criterion: 1.3.2 Meaningful Sequence.
  - Change: with a screen reader running, the app opens on List. On Explore the map is one element named "Map of items within a 10-min walk. The List tab has the same items.", with the radius in force in place of 10, and the pins are hidden from assistive technology.
  - Done when: with VoiceOver on and with TalkBack on, a cold launch lands on List, and on Explore one swipe moves from the map to the tab bar.
- **High. Item photos have no text alternative.** Posting asks for a photo and no description [journey, User Context & Variations], so on Item detail a blind buyer judges the item by its title and price.
  - Criterion: 1.1.1 Non-text Content.
  - Change: the title and category suggestion service [blueprint, Posting and browsing] also writes one sentence that names the item, its color and its visible condition. The sentence is the photo's text alternative on Item detail. For a listing made offline it is written when the listing publishes. Posting gains no field. Thumbnails in List rows and digest cards have an empty text alternative, because the title sits beside them.
  - Done when: for a listing posted with a photo and a price, a screen reader on Item detail reads a sentence that names the item, its color and its condition.
- **Medium. Items beyond the radius appear on the map alone.** Explore shows them as faded pins [site map, Orientation] and List has no row for them, so a person who browses in List does not learn that a wider radius holds more items.
  - Criterion: 1.1.1 Non-text Content.
  - Change: List ends with a row, "More items within a 20-min walk", that sets the radius to 20 min. The row is absent at 20 min and where no item lies beyond the radius.
  - Done when: at a 10-min radius with an item 15 minutes away, List shows the row, and activating it lists the item.
- **Medium. List's distance groups are not headings.** "On your block", "5-min walk" and "10-min walk" are styled text [wireframes, Browse], so a screen reader user steps through every row to reach a farther group.
  - Criterion: 1.3.1 Info and Relationships.
  - Change: each group label is a level-2 heading.
  - Done when: the VoiceOver rotor's Headings list on List reads Capitol Hill, On your block, 5-min walk, 10-min walk.
- **Medium. Hints are not tied to their controls.** "Suggested from your photo." under Category and "Filled from your last listing." under the pickup options are separate text [wireframes, Post an item], so a screen reader user who moves from field to field does not hear that the app filled them.
  - Criterion: 1.3.1 Info and Relationships.
  - Change: each hint is the accessible description of its control, read after the name and the value. The pickup hint describes the radio group.
  - Done when: focus on Category reads "Category, Furniture & Home, button, Suggested from your photo."

- Keep: each tab has a text label beside its icon, and the icon is hidden from assistive technology [wireframes, Browse].
- Keep: Free is a word in the price position, and "Pending pickup" is a text stamp on the row [wireframes, Browse].

**Operable**

- **Critical. Search opens by pulling the list down and by no other control.** The app bar has no search field or button [wireframes, Browse] [site map, Search]. A keyboard, a switch and a screen reader have no pull gesture, so their users cannot search.
  - Criterion: 2.1.1 Keyboard; 2.5.7 Dragging Movements.
  - Change: List's app bar has a Search button, 44 by 44 px, named "Search", that opens the search field. Pulling down still opens it. Activating the active List tab returns the list to its top and refreshes it.
  - Done when: with a screen reader on, and with an external keyboard, a person opens search and refreshes List without a drag.
- **Critical. Undo lasts 5 seconds and nothing else withdraws an interest.** The toast offers Undo for 5 seconds, then the interest goes to the server [journey, Interaction Specifications]. A screen reader user has to hear the toast and reach Undo inside that time, and a switch user has to scan to it; afterwards the seller is notified and no screen takes the interest back.
  - Criterion: 2.2.1 Timing Adjustable.
  - Change: each waiting interest in Activity, Your interests has a Withdraw button until the seller accepts. The toast keeps its 5 seconds.
  - Done when: with a screen reader, and with switch control, a person withdraws an interest 1 minute after sending it, and the seller's listing no longer shows it.
- **Low. Controls on the wireframes are smaller than 44 px.** Filter chips, Retake and Add a photo are 32 px high, Close is 32 by 32 px, each pickup option is a 32 px row, and the fields, the Free and Trade chips and Edit listing are 40 px high [wireframes]. On a phone used on the move [project context, Constraints], a person with a tremor, or holding the phone in one hand, hits the neighboring chip.
  - Criterion: meets 2.5.8 Target Size (Minimum), 24 px; misses 2.5.5 Target Size (Enhanced), 44 px.
  - Change: each of these controls is at least 44 px high and 44 px wide. The 8 px gap between neighbors stays.
  - Done when: no touch target on Browse, Post an item or Posted measures under 44 by 44 px, and neighbors are 8 px apart.
- **Low. A keyboard or switch user passes each filter chip before the first item.** The chips sit between the app bar and the list [wireframes, Browse], and each is a separate stop on every visit.
  - Criterion: none failed.
  - Change: the filter chips are one tab stop, and the radius presets are another. Left and Right arrows move inside each. Space toggles a chip, and an arrow selects a preset.
  - Done when: from the Search button, two presses of Tab reach the first row of List.
- **Low. The interest confirmation is a spring animation.** The button changes to a checkmark and "Interest sent" with a spring, in 150 ms [journey, Interaction Specifications], and the motion plays for a person who has turned motion off.
  - Criterion: 2.3.3 Animation from Interactions.
  - Change: with Reduce Motion on, the checkmark and "Interest sent" replace the label in the same 150 ms with no movement.
  - Done when: with Reduce Motion on, tapping "I want this" changes the icon and label and nothing on the screen moves.

- Keep: radius presets of 5, 10 and 20 min walk set what pinching the map sets [journey, Map].
- Keep: the gallery sits beside the shutter and opens when camera permission is denied [journey, Camera].
- Keep: interest is one tap with no message, and a pickup is arranged with quick replies, so neither needs typing [journey, Item detail] [journey, Thread].
- Keep: Free and Trade are single taps beside Price, so a gift needs no typing [wireframes, Post an item].
- Keep: each pickup option is a label that wraps its radio input, so the row is the target [wireframes, Post an item].
- Keep: Post it, Post another item and Done are 48 px high and full width [wireframes].
- Keep: the focus indicator is a 2 px outline in the accent color, 2 px outside the control: 7.9:1 against the light canvas and 4.4:1 against the dark [wireframes].

**Understandable**

- **Medium. Post it is disabled with no reason shown.** The button that follows the price is disabled until an amount, Free or Trade is set [journey, Interaction Specifications], and nothing on Post an item marks Price as required [wireframes, Post an item]. Keyboard focus skips a disabled button, and a person with a cognitive disability cannot tell what is missing.
  - Criterion: 3.3.2 Labels or Instructions.
  - Change: Post it stays enabled. Activating it with no price shows "Set a price, or choose Free or Trade." under the Price field.
  - Done when: activating Post it with Price empty shows the message under Price, and no listing is posted.
- **Low. "Passed" reads as a success.** A buyer whose interest the seller did not choose sees the status Passed [journey, Waiting]. "Passed" also means approved, so the buyer can take it as good news and keep waiting.
  - Criterion: none failed.
  - Change: the status reads "Went to someone else".
  - Done when: Your interests shows "Went to someone else" for a buyer the seller did not choose.

- Keep: the tab bar holds the same destinations in the same order on each tab and on Item detail [site map, Tab bar].
- Keep: Post an item is one screen. The title, category and pickup option arrive filled, and the seller sets the price [wireframes, Post an item].
- Keep: each field on Post an item has a visible label above it [wireframes, Post an item].
- Keep: who sees the listing, what stays hidden and the cost are stated above Post it [wireframes, Post an item].
- Keep: a draft stays on the phone when posting is closed, and + reopens it [journey, Camera].
- Keep: the pickup screen shows the meeting point and the time window, and the reminder push notification opens it [journey, Pickup].
- Keep: no screen shows a countdown or how many neighbors asked for an item [project context, Ethical stance] [blueprint, Interest and acceptance].
- Keep: categories are one level deep [site map, Taxonomy Documentation].

**Robust**

- **High. A change that leaves the person on the same screen is silent.** "Interest sent" is a button change and an animation, the buyer's one confirmation while the seller's notification waits in a batch [journey, Interaction Specifications]. A failed upload, a queued listing and a filter result appear the same way. A screen reader user cannot tell whether the tap worked or the upload failed.
  - Criterion: 4.1.3 Status Messages.
  - Change: each of these changes is announced as a status message, and focus does not move.
  - Done when: with a screen reader on, sending interest, a failed photo upload, a listing queued offline and a filter change are each heard with focus where it was.
- **Medium. Chips, tabs and pickers do not expose their state.** The active filter chip and the active tab are marked by fill, color and weight [wireframes, Browse]. Free and Trade are buttons with no state and no tie to the Price field, and Category and Available for pickup read their label without their value [wireframes, Post an item]. A screen reader user hears "All, button" and "Category, button".
  - Criterion: 4.1.2 Name, Role, Value.
  - Change: filter chips are toggle buttons with a pressed state. The active tab has the selected state. A badged tab adds the badge to its name: "Explore, new items", "Activity, 2 unread", "You, a setting needs attention". Price, Free and Trade are one group named "Price"; Free and Trade are toggle buttons, pressing one empties the amount, and typing an amount releases both. Category and Available for pickup read the label, then the value.
  - Done when: a screen reader reads the All chip as pressed, the List tab as selected, Free as pressed with the amount empty, and "Category, Furniture & Home, button".
- **Medium. Screens have no headings or landmarks.** Capitol Hill, Post an item and Posted are styled text, the tab bar is an unnamed navigation region, and no screen has a main region [wireframes]. A screen reader user cannot jump to the content or to the tabs.
  - Criterion: 1.3.1 Info and Relationships; 2.4.6 Headings and Labels.
  - Change: each screen has a banner that holds the screen title as its level-1 heading, one main region, and the tab bar as a navigation region named "Tabs".
  - Done when: the screen reader's landmark list on Browse reads banner, main and Tabs, and its heading list starts with Capitol Hill at level 1.

- Keep: the controls on the wireframes are native buttons, text inputs and radio inputs [wireframes].
- Keep: the Close button has the name "Close", and decorative icons are hidden from assistive technology [wireframes, Post an item].
- Keep: the pickup options are a radio group named by its question, "How should they pick it up?" [wireframes, Post an item].

---

**Screen Reader Flow Documentation**

**Reading order**

The undo toast appears at the bottom of Item detail. It is read, and reached by Tab, after the "Interest sent" button and before the rest of the screen.

**Live regions**

| Change | Announced | Politeness |
|---|---|---|
| "I want this" is tapped | "Interest sent. Undo is the next control." | Polite |
| Undo, or Withdraw in Activity | "Interest withdrawn." | Polite |
| The item was accepted for another buyer before the interest arrived [journey, Item detail] | "This item went to another neighbor. Similar items nearby follow." | Polite |
| Interest sent offline | "Offline. Your interest sends when you reconnect." | Polite |
| A filter or the radius changes | "12 items within a 10-min walk.", with the count and radius in force; "No items within a 10-min walk." at zero | Polite |
| Search results update | "3 results.", 1 second after the last keystroke | Polite |
| List refreshes | "List updated." | Polite |
| The title and category fill in after the photo | "Title and category suggested from your photo." | Polite |
| Photo upload fails [journey, Photo check] | "The photo did not upload. Your draft is saved. Retry is the next control." | Assertive |
| Post it with no price | The message under Price | Assertive |
| Post it offline | "Offline. Your listing posts when you reconnect." | Polite |
| The listing is held by moderation [journey, Preview and publish] | "Your listing is in review and is not live yet." | Polite |
| A status changes while Activity is open | The item's title and the new status: "Blue IKEA bookshelf: Accepted." | Polite |
| A quick reply arrives while the pickup screen is open | The sender's name and the reply: "Sarah: On my way." | Polite |

---

**Keyboard Navigation Map**

| When | Focus lands on | On close, focus returns to |
|---|---|---|
| The app launches with a screen reader running | The Capitol Hill heading on List | |
| A tab, Item detail, Posted or a screen opened from a push notification opens | The screen's level-1 heading | Back from Item detail: the row, pin card or search result that opened it |
| The Post tab opens the camera | The shutter, named "Take photo". Gallery is the next stop | Close: the Post tab, on the tab the person left |
| A photo is taken or chosen | The Title field | |
| Category or Available for pickup opens its picker | The selected option. Focus stays inside the picker, and Escape closes it | The button that opened it |
| Post it is activated with no price | The Price field | |
| + opens the limit notice | The notice's heading. Focus stays inside the notice, and Escape closes it | The Post tab |
| The Search button is activated | The search field | Escape: the Search button |
| "I want this" is activated | The same button, now "Interest sent". Undo is the next stop for the toast's 5 seconds | When the toast ends with focus on Undo: the "Interest sent" button |
| A row leaves a list: a withdrawn interest, a closed listing | The next row; the previous row when the last one left; the group's heading when the group is empty | |

---

**Open Questions**

- A buyer who cannot walk to a meeting point cannot complete an exchange, and Nearby has no delivery [project context, Constraints]. Can a buyer ask the seller to bring the item to them?
- Is Nearby a native app, a web app or both [project context, Open questions]? A web app cannot detect a screen reader, so opening on List for screen reader users needs a native app.
- Pulling List down reveals search [site map, Search] and refreshes the list [journey, Interaction Specifications]. Which does it do?

## /transpose
agent: Wren
summary: Planned the phone and web experiences, offline use and moving between devices.

Most exchanges happen on a phone, on the move: passing a "FREE" sign, browsing from the porch. The laptop suits posting a weekend's decluttering in one sitting. And the design plans for the sidewalk where the signal drops.

### Output

**Nearby on phone and web**

---

**Platform-specific adaptation specs**

*Phone*

The phone is a native app on iOS and Android. Posting opens the camera [journey, Camera], browsing depends on geolocation [site map, Decisions], and each step of an exchange arrives as a push notification [blueprint, Interest and acceptance]. More than 90% of use is on phones, on the move [project context]. The flows are the journey's, the navigation the site map's and the screens the wireframes'. The rows below are what the two platforms and a person who is walking add to them.

| Change | Forced by |
|---|---|
| The position marker and the radius follow geolocation while Explore is open. Pins reload when the person has moved 100 m. | A buyer browses while walking, and the radius is measured from where the person stands [blueprint, Walking radius]. 100 m is the accuracy of a geolocation fix [blueprint, Support for every stage]. |
| "I want this", "Post it", "It's yours" and the exchange confirmation sit in the lower 60% of the screen. | One hand holds the phone. The other carries a bag or the item. |
| A haptic tap accompanies the change to "Interest sent" [journey, Interaction Specifications]. | A person who is walking is not always looking at the screen when the button changes. |
| Back is the edge swipe on iOS and the system back gesture on Android. In posting it steps to the previous step and keeps the draft [journey, Camera]. From Item detail it returns to the place that opened it [site map, Tab bar]. On Explore, Android back leaves the app. | Both gestures belong to the operating system and work on every screen, including the full-screen camera. |
| Pull-down on the list refreshes it [journey, Interaction Specifications] and does nothing else. Search, which shares the gesture [wireframes, Browse], moves to a control in the bar. | Pull-to-refresh is the list convention on both platforms, and one gesture carries one action. |
| Post stays the center tab on Android, where a floating action button is the convention for creating. | The + is in one place on both platforms and on every tab [site map, Decisions]. |
| Each permission is requested at the first use that needs it: location on first open, camera on the first +, notifications after the first listing posted or interest sent. | Both platforms ask once per permission, every push notification is opt-in [project context], and permissions requested together bundle consent [blueprint, Ecosystem & dependencies]. |

*Phone with no connection*

A sidewalk, a basement or a subway platform drops the connection in the middle of a session. Every action a person can take without a connection goes into an offline queue on the phone and is sent on reconnect, in the order taken. What the person sees in each of these states is the state inventory's.

| Action | With no connection | On reconnect |
|---|---|---|
| Browse Explore and List | The listings from the last load. Their age is shown once the load is 1 hour old. | Refreshes, loading only what changed. |
| Search | Unavailable. The list of stored listings stays [blueprint, Search unavailable]. | Available. |
| Open an item | Item detail, where the person opened it before. An item not opened before shows what its row holds: title, price, walking time and seller tenure. | The detail loads. |
| Post an item | The draft and its photo are saved on the phone and queued with a pending mark. The seller types the title, because the suggestion comes from the server [journey, Details]. | The listing publishes [journey, Preview and publish]. Moderation runs at that moment, so a queued listing can be held. A failed upload follows Photo upload fails [blueprint]. |
| Send interest | Queued with a pending mark on the item [journey, Item detail]. The buyer can withdraw it until it sends. | Sends. Where the item was accepted for another buyer, the buyer is told and shown similar items [journey, Item detail]. |
| Accept an interest | Queued. | Sends. Where the interest expired or was withdrawn, the seller is told and the listing keeps taking interest. |
| Walk to a pickup | The pickup screen is stored on the phone when the acceptance arrives: the meeting point or address, the time window and the thread [journey, Pickup]. | The thread updates. |
| Send a quick reply | Queued. | Sends, in order. |
| Confirm an exchange | Queued. | Sends. The first confirmation to reach the server completes the exchange [journey, Exchanged]. |
| Location | The last accurate position stays in use until a new fix arrives [blueprint, Location inaccurate], and the map is marked as showing it. | A new fix recenters the map and clears the mark. |

*Web*

The web serves a seller or an organizer seated at a laptop, with a keyboard, a wide screen and a session of several minutes. It carries the tasks the phone does badly: listing many items in one sitting, seeing the neighborhood on one screen, and changing settings. It does not match the phone feature for feature.

| Change | Forced by |
|---|---|
| Posting starts from files. The seller drags photos from a folder, each photo becomes a draft with its suggested title and category [journey, Photo check], and the drafts sit in one grid. Tab moves between the price fields, pickup is set once for the batch, and one action posts every draft that has a price. The limit of 3 active listings on a new account applies [blueprint, Posting and browsing]. | A seller clearing a home lists several items in one sitting [project context]. A laptop has a keyboard and a file system, and its camera points at the person. |
| The map and the list are one page, side by side, with one radius and one set of filters. Hover on a pin shows its item card and highlights its row. A click opens Item detail. | The screen holds both and a pointer hovers. The phone splits them into two tabs for lack of width [site map, Decisions]. |
| The map centers on the account's saved location [site map, You]. The browser's geolocation is not requested. | A laptop's position comes from Wi-Fi and is often less accurate than 100 m, a fix that is discarded [blueprint, Location inaccurate]. A laptop stays at home. |
| Each item has a URL, and a shared link opens it [journey, User Context & Variations]. The URL holds the item and nothing about the sender: no position, radius or filters. Signed in, the page is Item detail. Signed out, it shows the photo, title, price and neighborhood name, with no pin and no walking time, and links to the app store. Browser Back and a new tab both work. | The web navigates and shares by URL. Walking times computed from several positions can locate a seller [blueprint, Ecosystem & dependencies], and an address stays hidden until both people agree [project context]. |
| Arrow keys move through the list rows, Enter opens the item, and the + and − keys step the radius through its presets. | A keyboard is under the person's hands. |
| The tab bar becomes a top bar: Explore, Post, Activity and You. | List has merged into Explore, and a pointer reaches the top of a wide screen as easily as the bottom. |
| Organizer tools gain a printable flyer with a QR code. The code opens the app where it is installed and the app store where it is not. | Organizers recruit with paper flyers [project context], and printing is done from a computer. |
| The web sends no push notifications. Activity shows the count that the phone's tab badge shows [site map, Tab bar]. The daily digest goes by email to a person who opts in. | The phone is the device a person carries, and a second alert for one event is notification spam [project context]. |
| The web has no offline queue. A change saves to the server when it is made. | A laptop at home has a stable connection. |

*Moving between phone and web*

The account holds the state and each device loads it on opening. No screen announces a sync.

| Switch | What carries across | Handoff |
|---|---|---|
| Browsing on one device, then on the other | The radius and the filters [site map, Local navigation] | Loaded when Explore opens. |
| Photographing items on the phone, pricing them on the web | Drafts: the photo and any field already set | A draft left on the phone [journey, Camera] appears in the web's draft grid. A draft added on the web with no photo appears under + on the phone, which opens the camera for it. |
| An accepted exchange | The pickup screen and its thread [journey, Pickup] | Both devices show it, and a quick reply goes from either. |
| A shared link opened on a laptop | The item | The web's item page shows a QR code that opens the item in the app. |
| Notifications | What has been read | A push notification goes to the phone. With the app on several phones, it goes to the one used most recently. Opening the event on either device clears the count on both. |

---

**Priority mapping per context**

| Context | Shows first | Demotes | Drops | Because |
|---|---|---|---|---|
| Phone, walking | The map centered on the person, and the camera on + [journey, Map] [journey, Camera] | Search, and the settings under You | Posting a batch, the flyer | Sessions are short and interrupted, with one hand free. |
| Phone, no connection | The list of stored listings with their age, and the pending marks on queued actions | The map, which shows only the area whose tiles are stored | Search, and the title and category suggestions | Stored data is all the phone has, and the person needs to know what has been sent. |
| Web | The map and list together, the draft grid, and settings | The pickup screen | The camera, push notifications, live geolocation and the digest cards | The session is seated, with a keyboard and a wide screen. The handoff happens on the street, with the phone. |

---

**Open questions**

- Phase 1 is scoped as a mobile app [brief]. Does the web ship with it, or after the pilot?
- Can a person hold an account on the web with no phone app? That seller gets no push notification and learns of interest by opening Activity.

## /localize
agent: Wren
summary: Mapped what changes across cultures: trust signals, payment norms, content and right-to-left layouts.

A local marketplace runs on local norms: how people negotiate, how they build trust, what they'll trade with strangers, and what "neighbor" means. The work names the assumptions in the current design and what changes in each market.

### Output

**Localization readiness checklist**

| Gap | Where | Change |
|---|---|---|
| The app's language has no stated source | Every screen | The phone's language sets it, for each person. One walking radius holds neighbors who read different languages, so a market never sets the language. |
| Layout is positioned with left and right | Every screen; the wireframe styles align text left and pad from the left [wireframes] | The root element takes its direction from the person's language, and layout uses logical properties (inline-start, inline-end). Arabic, Hebrew and Urdu follow the lists under this table. |
| Titles and names mix scripts | Listing titles, neighbor names and neighborhood names; an Arabic title can hold "IKEA", and an English title can appear in an Arabic interface [wireframes, Posted] | Each title and name takes its direction from its first strong character and is isolated from the line around it. The row's walking time, tenure and price are separate isolated runs. |
| Sentences are assembled from a count, a distance and an item title | "842 neighbors within a 20-min walk can see your bookshelf" [wireframes, Posted]; the audience line above Post it [wireframes, Post an item] | One ICU message per sentence, with CLDR plural rules: Arabic has six plural forms and Japanese has one. The item title sits outside the sentence, because its gender and case are unknown. |
| The tenure label needs the person's gender | "Neighbor since 2021" on rows, item detail and interest notifications [wireframes, Browse] [blueprint] | German, Portuguese, Spanish, Arabic and Hebrew inflect "neighbor" by gender, and Nearby collects only the data core functions need [project context]. The label is phrased without a noun for the person. |
| Dates and times are fixed English strings | "Today, until 8 pm", "Neighbor since March", "Posted today" [wireframes, Browse and Post an item] | Each is formatted from a timestamp by the person's locale. Relative time is the first choice wherever a moment is shown. |
| The currency is fixed | "$" in the price field and on price badges [wireframes, Post an item and Browse] | The neighborhood's market sets the currency, and the person's locale formats the amount. Free stays a word on a chip and a badge in every market. |
| Labels have no room to grow | Tab bar, filter chips, list rows and buttons at 390 px [wireframes, Browse] | A button label is at most 20 characters in English and 28 translated, and truncates beyond 28. A row's walking time and tenure wrap to a second line before they truncate, and the Pending pickup stamp moves under the title. Line height is set per script: Japanese, Arabic and Urdu need taller lines than Latin. |
| "On your block" names a unit of the US street grid | The nearest list group and the daily digest's name [wireframes, Browse] [site map] | Outside the United States and Canada the nearest group is named by walking time, as the other groups are. |
| The meeting point is the nearest intersection | Pickup, for meet outside and flexible [blueprint, Location disclosure] | Japanese addresses name blocks, and most streets have no name. In Japan the meeting point is a map pin with the nearest named landmark. |
| Quick replies are fixed English sentences | The thread on the pickup screen [journey, Thread] | A quick reply is sent as a message key and rendered in each reader's language, so two neighbors with different languages can arrange a pickup. Free text is shown as written. |

*Right-to-left layout: Arabic, Hebrew, Urdu*

Mirrors:

- The tab bar: Explore at the right edge, You at the left. Post stays in the center [site map].
- List rows: the thumbnail on the right, the price badge and the Pending pickup stamp on the left [wireframes, Browse].
- Filter chips: All starts at the right edge and the row scrolls leftward [wireframes, Browse].
- Radius presets: 5 min at the right, 20 min at the left [site map].
- Back arrows point right, and each posting step enters from the left [journey, Posting an item].
- The digest card stack advances in the opposite direction [journey, Digest cards].
- Map controls sit on the left edge.
- The Undo action sits at the left end of its toast [journey, Interaction Specifications].

Stays:

- The map. Geography has no reading direction.
- Photos.
- Prices, clock times and walking minutes. Digits read left to right inside a right-to-left line.
- The plus on Post, the camera shutter and the checkmark on Interest sent.

Prices use Western digits (0 to 9) in every market. A person reading Arabic or Urdu can choose Eastern Arabic digits (٠ to ٩) for display.

---

**Cultural adaptation brief**

The design as it stands fits the United States and Canada: tenure, exchange count and walking time carry trust [brief], the listed price is the price, neighbors pay in cash or with Venmo at pickup, and the tone is casual.

*Every market*

- **Payment methods at pickup.** The pickup screen names the in-person payment methods the seller takes, chosen from the market's list. Nearby processes and records no payment [project context].
- **Listing photos.** The camera frames the item, and no prompt asks for a face. Whether clothing is shown worn, on a hanger or laid flat is set in each neighborhood's organizer guidelines [blueprint, Support for every stage].

*Japan*

- **Nearby makes the introduction.** Trust attaches to the service that introduces two people before it attaches to either person. Interest reaches the seller as a notification from Nearby with no message between the two [blueprint, Interest and acceptance]. In Japan that notification presents the interest as a request to meet, and the seller accepts the request.
- **Account age and tenure lead.** The item detail and the interest notification show how long the person has been a member before the exchange count [blueprint, Trust signals].
- **Formal register.** Notifications, quick replies and errors use polite forms. "Never mind, sorry" becomes a formal apology.
- **The listed price is final.** "I want this" commits the buyer to the listed price. The pickup screen states the amount, because neighbors pay in cash in an envelope or with PayPay [journey, Multi-Channel Map].
- **Free is written as a word.** ¥0 does not read as a gift.
- **The text carries the confirmation.** The checkmark on Interest sent can read as a mark for a wrong answer, so "Interest sent" is never shown as the mark alone [journey, Interaction Specifications].

*India*

- **Community affiliation is the lead trust signal.** Trust comes from a shared community, and an account with no affiliation reads as low commitment. The profile and the item detail show the organizer-run groups a person belongs to [project context, Organizers].
- **Phone verification is optional and comes after signup.** A verified number shows on the profile. Signup asks for none [project context, Constraints].
- **An interest can carry an offer.** Negotiation is expected, and a listed price is an opening position. The buyer adds an amount to "I want this". The seller sees it beside the walking time and tenure and accepts or passes [journey, Interest in a listing]. The app carries no counter-offer and no message.
- **Payment methods:** UPI (PhonePe, Google Pay) and cash.

*Mexico*

- **An interest can carry an offer on a listing priced above 200 MXN.** Negotiation is expected above that price. The mechanism is India's.
- **Payment methods:** cash and MercadoPago.

*Germany*

- **A listing shows a walking-time group in place of minutes.** Exact walking minutes to a stranger's home read as surveillance. The item detail shows the list group, such as 5-min walk, unless the seller turns on minutes. The group also limits the estimate of a seller's address that walking times from several positions allow [blueprint, Ecosystem & dependencies].
- **Formal address.** Copy uses Sie. A person can switch to du in You.
- **One offer for each buyer on a listing.** A single counter-proposal is acceptable and repeated haggling is not. The mechanism is India's, limited to one amount.
- **Payment methods:** cash, PayPal and bank transfer.

*Brazil*

- **Profile photos are prompted and optional.** Trust comes from seeing and hearing from the person.
- **A thank-you note after an exchange.** Either person can send the other a short note. It goes to that person alone: nothing about a neighbor's conduct is shown publicly [project context, Ethical stance].
- **Warm, informal tone.**

---

**Market-specific requirement matrix**

*Formats*

| Requirement | Market | Value |
|---|---|---|
| Decimal and thousands separators | United States, Canada, Mexico, India, Japan | 1,000.00 |
| Decimal and thousands separators | Germany, Brazil | 1.000,00 |
| Decimal places in a price | Japan | None |
| Clock | United States, Canada, India | 12-hour |
| Clock | Germany, Brazil, Mexico, Japan | 24-hour |
| Date order | United States | Month, day |
| Date order | Canada, Germany, Brazil, Mexico, India | Day, month |
| Date order | Japan | Year, month, day |

*Law*

| Law | Market | Requirement | Change to Nearby |
|---|---|---|---|
| GDPR | EU and EEA | Location is personal data, and processing it needs consent separate from the phone's location permission. A person can delete and export their data. | A consent screen before the map says location is used to show nearby items and that an exact location is never shown to other neighbors. Deleting an account deletes location history, exchange history and the profile, including the exchange count that otherwise stays while the account exists [blueprint, How records end]. A person can export all their data. |
| LGPD | Brazil | Consent is granular. The privacy policy is in Portuguese. A data protection officer is appointed. | Location, notifications and contacts each get a separate consent; the contact list and location never share a prompt [blueprint, Ecosystem & dependencies]. |
| CCPA and CPRA | California | Right to know, to delete and to opt out of sale. Location is personal information. | A "Do Not Sell or Share My Personal Information" link, a disclosure of the data categories collected, and deletion requests answered within 45 days. |
| PIPL | China | Personal data of people in China is stored in China. | Separate infrastructure and a separate legal entity, decided at market entry. |

---

**Localization test plan**

| Test | Risk it catches | Pass line |
|---|---|---|
| Pseudo-localization of Browse, Post an item and Posted at 390 px, strings lengthened to 150% and accented | Labels with no room to grow; strings outside the translation files | No text is clipped or overlaps another element. A button label of up to 28 characters shows in full. No unaccented string appears. |
| Arabic build of Browse, Post an item, Posted and Pickup | Layout positioned with left and right | Every element under Mirrors is mirrored and every element under Stays is unchanged. |
| Mixed-script listings: an Arabic title holding a Latin brand name, an English title in the Arabic interface, each with a price and a walking time | Titles and names that mix scripts | The brand name, digits and currency symbol read in their written order on the list row, the item detail and the interest notification. |
| Plural and gender review by a native speaker in Arabic, German, Portuguese, Spanish and Japanese | Assembled sentences; the gendered tenure label | The audience sentence is grammatical for every CLDR plural category of the language. The tenure label is correct for a person of any gender. |
| Format check in each market's locale | Fixed dates, times and currency | Prices, clock times and dates on Browse, Post an item and Pickup match the formats table. |
| In-context review by a native speaker in each market | Register and tone | Japanese copy is in polite forms throughout. German copy uses Sie until the person switches. No string is flagged as machine translation. |
| Sessions with sellers and buyers in each market: item detail and interest notification | The market's lead trust signal | At least 4 in 5 participants say they would hand over or collect the item, and name the market's lead signal as a reason. |
| Sessions in India, Mexico and Germany: sending and receiving an interest with an offer | An offer amount in place of negotiation | At least 4 in 5 buyers who want a lower price send an offer unprompted. At least 4 in 5 sellers accept or pass without asking for a way to reply. |
| Sessions in Japan and the United States: a listing with no offer | Price shown as final | At most 1 in 5 participants looks for a way to propose a lower price. |
| Sessions with sellers in Germany: the listing preview | Walking-time group in place of minutes | At least 4 in 5 sellers say the listing shows no more about their location than they accept. |
| Sessions in Japan: the pickup screen | Meeting point as a pin and landmark; the checkmark | At least 4 in 5 buyers point to where they would wait. At least 4 in 5 read the Interest sent confirmation as sent. |
| Sessions in Brazil: the thank-you note | A private note in place of a public one | At least 4 in 5 participants who send a note expect it to reach the other person alone. |

---

**Open questions**

- Which market does Nearby enter after the United States, and in what order do the others follow?
- Which languages besides English does the first neighborhood need?

### Philosopher

Does the Western marketplace, with individual sellers, posted prices and two-party exchange, fit other cultures? In many communities, things circulate through family networks, places of worship or community centers and are never listed. A bazaar expects haggling. A gift economy expects favors returned over time. Is a marketplace app importing a frame that fits only some of its users? What would Nearby look like built for circular exchange?

## /measure
agent: Vigil
summary: Defined success by community health and trust, with counter-metrics.

Gross merchandise value is the wrong north star: a neighborhood where everyone gives things away is doing better than one where everyone haggles. The framework tracks exchange density, trust and community health, with counter-metrics that flag growth that harms the product.

### Output

**Measurement framework (GSM map)**

Each metric is computed weekly for each neighborhood over a rolling 4-week window and stored as a neighborhood aggregate with its n. A rate with fewer than 30 cases in the window is reported as a count. Aggregates are computed before interest requests and exchange details are deleted, 30 days after they end [blueprint, How records end].

A neighborhood is the named area that an organizer's queue and a person's exchange count belong to [blueprint, Open questions]. An active person posted, sent an interest or confirmed an exchange in the past 28 days.

*Things change hands every week*

- **Signal:** Neighbors confirm exchanges week after week, whether the item was sold, traded or given [brief, Goals].
- **Metric:** Weekly exchange density.
  - Formula: confirmed exchanges in the week ÷ (households in the neighborhood ÷ 1,000).
  - Source: exchange confirmations on the platform server; households from housing density data [blueprint, Support for every stage].
  - Threshold: 15 or more in a neighborhood open 3 months or longer.
  - Undercount: an accepted exchange that closes unconfirmed after 48 hours adds to no count [blueprint, Handoff not confirmed]. The share of accepted exchanges that close unconfirmed is reported beside density.
- **Counter-metric:** As-described rate.
  - Formula: exchanges the buyer marks as described ÷ exchanges where the buyer answered [blueprint, Pickup and completion].
  - Source: Trust Inference Engine.
  - Floor: 90%.
- **Never a target:** Gross merchandise value, city-wide user totals and blended acquisition cost. Each rises while no neighborhood reaches density [project context, Success], and a free item counts the same as a $40 one.

*Most listings end in an exchange*

- **Signal:** A listing closes with a confirmed exchange before it expires at 14 days [blueprint, Stale listings].
- **Metric:** Listing completion rate.
  - Formula: listings closed by a confirmed exchange ÷ listings closed, excluding listings hidden by moderation.
  - Source: listing records.
  - Threshold: 60% or more [journey, Problem Statement]. The bet that walking distance completes more listings fails at 25% or below, the estimate for local listings on Marketplace [brief, Key Assumptions].
- **Counter-metric:** Posting effort.
  - Formula: posts started at + that publish ÷ posts started; median time from + to live for a seller past their first listing.
  - Source: post events in the app.
  - Floor: 85% publish. Ceiling: 30 seconds [brief, Proposed Scope].

*A listing is exchanged within days*

- **Signal:** The time between a listing going live and its confirmation is short.
- **Metric:** Time to exchange.
  - Formula: median hours from live to confirmed exchange, among exchanged listings.
  - Source: listing records.
  - Threshold: under 48 hours [blueprint, Posting and browsing].
- **Counter-metric:** Push notifications kept on.
  - Formula: people with push notifications on 30 days after opting in ÷ people who opted in.
  - Source: notification settings.
  - Floor: 80%.
- **Never a target:** Notification open rate. It rises with more frequent and more urgent notifications [project context, Ethical stance].

*Giving is a regular part of the market*

- **Signal:** Sellers set the price to Free [wireframes, Post an item].
- **Metric:** Free share.
  - Formula: listings posted as Free ÷ listings posted.
  - Source: listing records.
  - Threshold: 25% or more [site map, Decisions].
- **Counter-metric:** Completion rate of Free listings, computed as the listing completion rate. Floor: 60%.

*A person who found what they need opens the app less*

- **Signal:** A buyer finds an item within minutes of opening the app [project context, Ethical stance].
- **Metric:** Time to first interest.
  - Formula: median time from app open to the first interest, in sessions that send one.
  - Source: session events in the app; interest requests.
  - Threshold: under 3 minutes.
- **Metric:** Browse-to-interest rate.
  - Formula: sessions that send an interest ÷ sessions that open Explore or List.
  - Source: session events in the app; interest requests.
  - Threshold: above 15%.
- **Counter-metric:** Repeat exchange.
  - Formula: active people with 2 or more confirmed exchanges in a calendar month ÷ active people.
  - Source: exchange counts in the Trust Inference Engine.
  - Floor: 30%.
- **Never a target:** Time in app and the ratio of daily to monthly active users. Both rise when discovery fails or when people feel compelled to check every day.

*Living nearby raises trust*

- **Signal:** Buyers ask for items on their block as readily as for items farther away [brief, Key Assumptions].
- **Metric:** Interest rate by walking time.
  - Formula: interests sent ÷ item detail views, for On your block, 5-min walk and 10-min walk [site map, Orientation].
  - Source: interest requests; walking time from the Neighborhood Graph Service.
  - Threshold: the rate for On your block is at or above the rate for 10-min walk.
- **Counter-metric:** Exchanges without a report.
  - Formula: accepted exchanges where neither person reports the other ÷ accepted exchanges.
  - Source: reports [blueprint, A flagged listing].
  - Floor: 99%.

*One tap of interest is enough to arrange a pickup*

- **Signal:** An accepted interest ends in a handoff after few quick replies [brief, Key Assumptions].
- **Metric:** Accepted-to-exchanged rate.
  - Formula: accepted interests confirmed as exchanged ÷ accepted interests.
  - Source: accepted exchange records.
  - Threshold: 70% or more.
- **Metric:** No-show rate.
  - Formula: accepted interests marked "It fell through" after the time window opened ÷ accepted interests [journey, Buying].
  - Source: accepted exchange records.
  - Threshold: under 10%.
- **Metric:** Quick replies per exchange.
  - Formula: median quick replies sent in the thread of a confirmed exchange [journey, Messaging].
  - Source: thread counts, taken before the thread is deleted.
  - Threshold: under 3.
- **Counter-metric:** Interests answered.
  - Formula: interests the seller accepts or passes before the 48-hour expiry ÷ interests sent [journey, Buying].
  - Source: interest requests.
  - Floor: 80%.

*A walking radius holds enough supply*

- **Signal:** A buyer who opens the app sees items inside their walking radius [brief, Key Assumptions].
- **Metric:** Empty-radius rate.
  - Formula: app opens where Explore has no listing inside the person's walking radius ÷ app opens, by density tier [blueprint, Walking radius].
  - Source: Neighborhood Graph Service.
  - Threshold: under half in each tier.
- **Metric:** Active people.
  - Formula: active people in the neighborhood.
  - Source: listing, interest and exchange records.
  - Threshold: 50 or more within 30 days of the neighborhood opening [project context, Constraints].
- **Metric:** Activation.
  - Formula: new accounts that post or send an interest within 7 days ÷ new accounts.
  - Source: account, listing and interest records.
  - Threshold: 40% or more.
- **Counter-metric:** Exchanges within a 10-minute walk.
  - Formula: confirmed exchanges where the buyer's walking time to the item was 10 minutes or less ÷ confirmed exchanges.
  - Source: Neighborhood Graph Service.
  - Floor: 75%.

*Organizers bring their groups*

- **Signal:** A neighborhood's organizer posts and reviews the moderation queue week after week [brief, Key Assumptions].
- **Metric:** Organizer activity.
  - Formula: neighborhoods where an organizer posted or settled a queue item in the past 28 days ÷ open neighborhoods.
  - Source: listing records; moderation queue.
  - Threshold: 50% or more.
- **Counter-metric:** Queue settled by the organizer.
  - Formula: held and reported items the organizer clears, hides, warns on or escalates within 24 hours ÷ items sent to the queue [blueprint, No organizer action].
  - Source: moderation queue.
  - Floor: 80%. Below it the queue is more than a volunteer can carry.

---

**Learning plan**

Product and design read each checkpoint together.

*Weekly review*

- **When:** Every week from the day the first neighborhood opens.
- **Reads:** Every chain.
- **Results:**
  - A counter-metric under its floor: the change that preceded the fall is reversed, and the chain's metric counts as no progress until the floor holds again.
  - A metric that moves in the 2 weeks after a change: read from week 3.

*Day 30*

- **When:** 30 days after a neighborhood opens.
- **Reads:** A walking radius holds enough supply; Organizers bring their groups.
- **Results:**
  - 50 or more active people: the neighborhood runs to week 8 unchanged.
  - Under 50 active people: activation work stays in this neighborhood and no other neighborhood opens.
  - No organizer activity: the neighborhood's queue goes to platform moderation [blueprint, No organizer action], and organizer recruitment restarts.

*Week 8*

- **When:** 8 weeks after a neighborhood opens, with two 4-week windows complete.
- **Reads:** Most listings end in an exchange; One tap of interest is enough to arrange a pickup; Living nearby raises trust; A walking radius holds enough supply.
- **Results:**
  - Listing completion at 60% or more: the walking-distance bet holds.
  - Listing completion between 25% and 60%: interviews with sellers whose listings expired.
  - Listing completion at 25% or below: the designer is asked to reopen the brief.
  - Accepted-to-exchanged under 70%, or no-show at 10% or more: holding messaging until the second version [brief, Proposed Scope] goes back to the designer.
  - Interest rate for On your block below the rate for 10-min walk: interviews with buyers and sellers on exchanging with the closest neighbors.
  - Empty-radius at half or more in a density tier: that tier's walking radius is reviewed [blueprint, Walking radius].

*Month 3*

- **When:** 3 months after a neighborhood opens.
- **Reads:** Things change hands every week; A listing is exchanged within days; Giving is a regular part of the market; A person who found what they need opens the app less.
- **Results:**
  - Density at 15 or more with the as-described rate at 90% or more: the next neighborhood opens [brief, Guiding Principles].
  - Density under 15: no further neighborhood opens.
  - Density at 1.5 or below: the designer is asked to reopen the brief.
  - Free share under 25%: whether giving gets a place in the navigation [site map, Open Questions] goes back to the designer.
  - Time to exchange at 48 hours or more, or time to first interest at 3 minutes or more: interviews at the step where the wait falls.

A request to reopen the brief is made once per iteration. It carries the metric, its counter-metric and the assumption they contradict, and the designer decides.

## /specify
agent: Rune
summary: Packaged the posting scope for the build, with one page that says how the pieces fit.

Posting was approved while browsing and the exchange were still being redesigned, so posting goes to the build first. The handoff is the project's own files: brief, blueprint, flows, site map, wireframes, copy, states, accessibility and metrics. The one new page says how they fit: each screen's flow step, navigation, service and states, and what the builder decides. Before packaging, Rune checked that the brief and the posting screens were approved, and logged the ethical review. Browsing and the exchange get their own package once item detail and the pickup screen are designed.

### Output

**Nearby: posting an item**

Nearby is a mobile marketplace for buying, selling, trading and giving within walking distance [brief]. This package covers posting: a seller photographs an item, sets a price or Free and a pickup option, and the listing is live to neighbors within a 20-min walk, in under 30 seconds after a first listing [brief] [wireframes, Post an item]. Posting is for sellers clearing things out in a burst, who leave the item on the curb when a post takes more than 60 seconds [project context]. Browse is in the package as the screen posting starts from and returns to. A row on Browse opens item detail; item detail, Activity and the pickup screen belong to the exchange, which this package leaves out.

---

**Contents**

| Artifact | What it holds |
|---|---|
| Brief | The gap, the goals, the constraints, the guiding principles, the assumptions and the Phase 1 scope |
| Project context | Users, hard constraints, design principles and the ethical stance the other artifacts cite |
| Service blueprint | What each person does and sees, the services behind each step, the walking radius tiers, location disclosure, failures and their recovery |
| Journey | The posting flow with its branches, the interaction specification, and the discovering, buying and messaging flows the exchange uses |
| Site map | The tab bar, what each tab holds, cross-links, filters, the category taxonomy, search and browse |
| Wireframes | Browse, Post an item and Posted at full page, with the reason for each numbered element and a prototype view of the posting flow |
| Copy deck | Copy the frames do not carry: error messages, empty states, notices and the voice framework |
| State inventory | The state inventory and edge case catalog: what each screen shows when a step fails, waits or has nothing to show |
| Accessibility audit | Findings, the screen reader flow and the keyboard navigation map |
| Adaptation specs | How the screens change across platforms |
| Localization requirements | The market requirement matrix and the cultural adaptation brief |
| Measurement framework | The metrics that read the scope's success and the events that feed them |
| Decision log | Decisions someone might reopen, with the ethical review among them |

---

**How the pieces fit**

| Screen | Wireframe | Journey step | IA node | Blueprint touchpoint | States | Copy |
|---|---|---|---|---|---|---|
| **Browse.** What a neighbor can walk to, nearest first; posting starts at its + and Done returns here. | Browse | Discovering nearby items, List; the "any screen" that posting starts from [journey] | List tab; Post (+) is the center tab; search appears on pull-down [site map] | Posting and browsing, step 5. The Neighborhood Graph Service returns the listings inside the walking radius [blueprint] | In the frame: listings grouped by walking time, one marked Pending pickup. In the state inventory: no listings in the radius, geolocation off, search index down | In the frame. Empty-state and error strings in the copy deck |
| **Post an item.** One screen from photo to commit, because a seller abandons a post that takes more than 60 seconds [project context]. | Post an item | Posting an item: Camera, Photo check, Details and Pickup, on one screen [journey] | Post (+): Camera and photo check; Title, price and category; Pickup. The tab bar is hidden [site map] | Posting and browsing, steps 1 to 4. Title and category suggestion from the photo; photo storage on upload; on Post it, the automated layer of Content Moderation, the Trust Inference Engine's limit of 3 active listings and the Neighborhood Graph Service [blueprint] | In the frame: photo taken, title and category suggested, pickup filled from the last listing. In the state inventory: first listing with no saved pickup, limit notice at 3 active listings, camera permission denied, upload failed with the draft kept, no price set, price far above similar items, offline with an empty title | In the frame, including the line above Post it that states who sees the listing, that the address stays hidden and that there are no fees. Notices and errors in the copy deck |
| **Posted.** Confirms the listing is live, shows it as neighbors see it, and sends the seller to the next item. | Posted | Posting an item: Preview and publish, with the preview shown after publishing [journey] | Post (+): Preview and post. Post another item reopens Post an item; Done opens the List tab [site map] | Posting and browsing, step 4, the confirmation. The Notification Service batches interest push notifications every 15 minutes [blueprint] | In the frame: published. In the state inventory: held by the classifier for review, queued offline until reconnect | In the frame; 842 stands for the number of neighbors inside the listing's 20-min walk [wireframes, Posted]. Held and queued strings in the copy deck |

---

**Left to the builder**

- Visual design: color, type, spacing, and motion beyond the journey's interaction specification
- Technology
- The walking radius computation. The design fixes the density tiers (400 m, 800 m, 1,600 m), measurement along the street network, and the hard boundaries at highways, rivers, railways and gated communities [blueprint, Process architecture]. The isochrone computation and its caching are the builder's.
- The title and category suggestion. The design fixes that both come from the photo and arrive editable, and that the title is empty offline [journey, Posting an item]. The model is the builder's.
- The offline queue. The design fixes that a draft stays on the phone and a listing made offline publishes on reconnect [journey, Posting an item]. Storage and sync are the builder's.

---

**Open questions**

- Does Trade ship in Phase 1? The scope lists a price or Free, and the price field has a Trade chip. (brief; wireframes, Post an item)
- Does a Wanted request start from +? If it does, a choice comes before the camera. (site map)
- Does the limit of 3 active listings apply to a new seller clearing a home? (journey)
- Is a neighborhood the walking radius around each person or a named area with a fixed boundary? Browse's header names Capitol Hill and Posted counts neighbors within a 20-min walk. (blueprint)
- Every push notification is opt-in, and Posted says a notification will come. Where is the seller asked, and what does Posted say to a seller who declined? (project context; wireframes, Posted)
- What does Edit listing on Posted open? (wireframes, Posted)

## /present
agent: Noor
summary: Turned the engagement into a deck asking Nearby's leadership for a go, with the outline approved before any slide was built.

Noor first settled who would be in the room, what they should feel, and the ask: a go on the MVP at Monday's meeting. The material changed that ask. No neighbor has been interviewed yet, so the deck asks to build for one pilot neighborhood and let eight weeks of exchanges test the bet. Competitor rates appear as unmeasured estimates, the unsourced market size stays out, and the lamp on the curb is cited as the team's claim.

### Output

The slides above are the deck's own markup, the file /present produced. The grid and margins come from the skill's theme, and the site's light and dark modes flow through them. Read only the titles, top to bottom, and the argument holds; that's the headlines test a deck passes before it's built.

Every number traces to an earlier chapter, and the source line at the foot of a slide says which. Estimates say they're estimates, and targets don't pretend to have baselines. Missing evidence stays visible: the deck says the first interviews report after the decision. The notes stay at three plain sentences a slide, short enough to read at a glance mid-talk.

**The approved outline**

**Pattern:** What-is / what-could-be (leadership can decide and the deck asks for a go, so it alternates between how neighbors exchange now and what Nearby changes, and ends on what is still unmeasured)

**Governing message:** Build Nearby's first version for one pilot neighborhood, where eight weeks of exchanges show whether walking distance makes more listings end in an exchange.

1. Build Nearby for one neighborhood and measure the bet | Visual: title slide | Source: brief, Key Assumptions; metrics, Learning plan
2. A $10 lamp goes to the curb when posting takes over a minute | Visual: diagram of a seller's two paths, a Marketplace or Craigslist listing and the curb | Source: project context, Users; brief, Gap
3. Nearby lists only what a neighbor can walk to | Visual: the walking radius at each housing density, 400 m, 800 m and 1,600 m | Source: brief, Gap; service blueprint, Walking radius
4. The first version posts, browses and arranges a pickup | Visual: scope diagram of what is in, what waits and what is out | Source: brief, Proposed Scope (Phase 1)
5. A seller posts on one screen with a photo and a price | Visual: the Post an item wireframe | Source: wireframes, Post an item; brief, Proposed Scope
6. One tap asks for the item; acceptance releases the meeting place | Visual: the exchange from interest to confirmation, with what the buyer sees of the seller's location at each step | Source: journey, Buying; service blueprint, Location disclosure
7. The 60% completion goal rests on estimates nobody has measured | Visual: bar chart from zero of the estimated completion on Craigslist, Facebook Marketplace and Buy Nothing beside Nearby's goal | Source: brief, Key Assumptions; journey, Problem Statement
8. The first interviews report on 18 December, after this decision | Visual: research timeline from recruitment on 23 November to the findings report | Source: research plan, Method, Participants, Timeline
9. Pickup timing, address exposure and the daily digest change first | Visual: each finding beside its change, with its severity | Source: evaluation, Priority Issues; project context, Ethical stance
10. Posting is packaged to build; the exchange has no wireframes | Visual: the screens in the handoff package beside the exchange screens that have flows, copy and states | Source: handoff, Contents and How the pieces fit; wireframes
11. Eight weeks in one neighborhood show whether the bet holds | Visual: the pilot checkpoints at day 30, week 8 and month 3, each with its threshold and what follows | Source: metrics, Measurement framework and Learning plan
12. Approve building Nearby's first version for one neighborhood | Visual: the ask, with who decides and when | Source: brief, Proposed Scope; project context, Open questions

**Gaps**

- No neighbor has been interviewed: the research plan reports on 18 December, so no slide carries a quote or a finding.
- The completion figures for Marketplace, Craigslist and Buy Nothing are estimates with no sample.
- Item detail, Activity and the pickup screen have no wireframes.
- The material names no pilot neighborhood, launch date, timeline, budget, team or platform, so the ask cannot say when the build starts or what it costs.

**Refusal checks**

- Won't substitute emotional appeal for evidence. The lamp on the curb comes from the project context, with no interviewed seller behind it, so slide 2 cites it as the team's claim and no slide quotes a neighbor.
- Won't engineer assent by narrative shortcut. The 60% is a goal set against unmeasured estimates, so slide 7 shows it as that, and the $200B market figure is left out because it sizes no neighborhood.
