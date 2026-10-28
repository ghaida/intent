---
project: Nearby
tagline: A neighborhood marketplace for buying, selling, and trading within walking distance.
---

## /intent
agent: Noor
summary: Set the project's context: who Nearby serves, its design principles and its constraints.

Nearby is a tool for neighbors, and its trust comes from proximity: the person selling lives down the street. The principles put safety and simplicity first.

### Output

**Project Context Document: Nearby**

**Product & Business Context**
Nearby is a hyperlocal marketplace for buying, selling, and trading within walking distance. It is built as infrastructure for a neighborhood. The business model is density-dependent: value accrues as exchange volume increases per square mile. Revenue comes from optional promoted listings and neighborhood business partnerships, never from transaction fees. The product must reach critical mass within a single neighborhood before expanding geographically; growth is concentric, radiating outward from each activated neighborhood.

**Users**
- **Sellers:** People with stuff they want gone: moving, decluttering, upgrading. They want minimal effort: snap a photo, name a price, done. Key context: most have tried Craigslist or Facebook Marketplace and found it too heavy for a $10 lamp. They post in bursts (moving weekend, garage cleanout). Tolerance for friction is near zero; if posting takes more than 60 seconds, they'll just leave it on the curb with a "FREE" sign.
- **Buyers:** Bargain hunters and convenience seekers. They'd rather walk two blocks than wait two days for shipping. They browse casually and buy impulsively. Key context: discovery is more compelling than search because they don't know what they want until they see it. The walking-distance constraint is the feature. They treat the app like window shopping.
- **Organizers:** Block captains, community garden coordinators, buy-nothing group admins. They facilitate exchanges that aren't strictly transactional: lending, gifting, sharing. Key context: they are currently managing this work through Facebook Groups, group texts, or paper flyers. Their pain is "I need better tools for what I'm already doing." They are the most likely early evangelists and the hardest to disappoint.

**Design Principles**
1. **Proximity is the product.** Everything flows from physical nearness. If a feature doesn't depend on walking distance, it doesn't belong.
2. **Lower the stakes.** This isn't a $500 transaction. Most items are under $20. The UX should match that casualness.
3. **Trust through transparency.** Show the neighborhood. "3 blocks away" builds more trust than "4.8 stars."
4. **Respect the asymmetry.** Sellers want speed. Buyers want discovery. Don't optimize for one at the expense of the other.

**Hard Constraints**
- No identity verification at signup: friction kills adoption in small markets
- Must function in neighborhoods with as few as 50 active users
- No delivery infrastructure: walking distance is the delivery method
- Privacy-first; exact addresses never exposed until both parties agree
- Mobile-first: 90%+ of expected usage is on phones, on the move
- No transaction fees: the platform must never stand between neighbors and their money

**Ethical Stance**
- No engagement tricks. No "3 others are looking at this" urgency. No notification spam. If users open the app less often because they found what they needed quickly, that's success.
- No data harvesting beyond what's needed for core function. Location data is sensitive in a neighborhood context; "where you live" is not a data point to monetize.
- No public shaming. Feedback is private, constructive, and meant to improve behavior.
- No dark patterns. If the business model requires manipulating neighbors into transactions, the business model is wrong.

**Success Definition**
Success is exchange density: the number of completed exchanges per 1,000 households per week within a walkable radius. A neighborhood where 20 things change hands every week (some sold, some traded, some given away) is a successful neighborhood. A city with 100,000 users spread across 50 neighborhoods with no density anywhere is a failure.

## /strategize
agent: Ember
summary: Framed the opportunity, mapped competitors, wrote a testable hypothesis and scoped the MVP.

Marketplace, Craigslist and Nextdoor treat location as a search filter. In Nearby, walking distance is the product, so the opportunity is sized by exchanges per square mile, and the hypothesis names a completion rate a pilot can check.

### Output

**Design Brief: Nearby**

**Situation.** Peer-to-peer exchange is a $200B+ US activity. Existing tools (Marketplace, Craigslist, Buy Nothing groups) use geography only as a filter.

**Complication.** Sub-block exchange completes at 20–30% on these platforms. The tools exist, but they're the wrong shape for walking-distance trust and logistics.

**Resolution.** A marketplace whose only feature is proximity. Trust shifts to neighborhood familiarity. Discovery becomes spatial. Logistics collapse to walking. *Why now:* the hyperlocal shift is accelerating, and the architectural retrofit broad platforms would need takes years.

*Discipline note:* the first draft sized the complication to fit "compete with Marketplace." Evidence trimmed it to "existing tools are wrong-shaped." The resolution stayed the same, and the brief now rests on a claim the team can verify.

**Goals**
1. Achieve 15+ completed exchanges per 1,000 households per week in mature neighborhoods
2. Reach 60%+ listing-to-exchange completion rate (2-3x current platform benchmarks)
3. Maintain median time-to-exchange under 48 hours
4. Build neighborhoods where 25%+ of listings are free: generosity is a core feature

**Constraints**
- Cold start is existential: the product is worthless with zero listings in a neighborhood. Must solve activation before growth.
- Privacy expectations are higher in a neighborhood context than on a general marketplace. "Someone nearby wants your bookshelf" must not become "a stranger knows where you live."
- Revenue model must not depend on transaction volume or engagement optimization.

**Guiding Principles**
1. Density before breadth: one thriving neighborhood is worth more than 100 empty ones
2. The walking radius is the product: every feature decision flows from it
3. Casual over transactional: the UX should feel like putting a sign in your yard
4. Trust is ambient, built from tenure and proximity rather than star ratings

**Key Assumptions & Open Questions**
- *Assumption:* Walking distance is a meaningful enough constraint to create a differentiated experience. *Risk:* In low-density areas, walking distance may be too restrictive to generate sufficient supply.
- *Assumption:* People will trust neighbors more than strangers from the internet. *Risk:* Proximity can increase safety concerns, especially for vulnerable populations.
- *Open question:* What defines a "neighborhood"? Census tract? Zip code? Self-reported? Walking radius from a point? The answer determines the entire product architecture.

**Measurable Hypothesis**
If we constrain a marketplace to walking distance and build trust signals around neighborhood familiarity (tenure, proximity, mutual connections), then exchange completion rates will reach 60%+ (vs. 20-30% on broad platforms), because proximity eliminates logistics friction and neighborhood context reduces trust friction.

**Competitive Landscape & Positioning**

| Platform | Thesis | Exchange completion | Trust model | Local optimization |
|---|---|---|---|---|
| Facebook Marketplace | Scale wins | ~25% estimated | Facebook identity (eroding) | Filter only |
| Nextdoor | Neighborhood social network | Very low (commerce is secondary) | Verified address | Minimal |
| Buy Nothing Groups | Gift economy in communities | High within groups (~60%) | Facebook group membership | Group-level, not spatial |
| Craigslist | Open classifieds | ~15% for local items | None | City-level |
| **Nearby** | **Walkable exchange density** | **Target: 60%+** | **Neighborhood tenure + proximity** | **Core product** |

**Proposed Scope (MVP)**
- Post an item (photo + price + location radius): under 30 seconds
- Browse items within walking distance (map + list view)
- Express interest (one-tap, no messaging required)
- Neighborhood identity (you see your area, scoped to your surroundings)
- Trust signals: account age, neighborhood tenure, approximate distance
- *Explicitly out of scope:* Messaging (v2), payments (platform-agnostic), delivery, multi-neighborhood browsing

### Philosopher

What does "neighborhood" mean? On a dense city block, walking distance might be 0.2 miles, and you can see the seller's building from your window. In a suburb it might be the subdivision, a mile across. In a rural town it might be the whole town. Nearby assumes everyone shares one definition of "nearby", and they don't. Whether it means a radius, a census tract, a zip code or a felt sense of community changes the whole trust model.

### Storytelling

Situation, complication, resolution works only if the complication is checked against evidence before the brief is written. Nearby's first complication was sized to fit a plan to compete with Marketplace. The evidence cut it down to what holds: existing tools are the wrong shape for walking distance.

## /investigate
agent: Ember
summary: Planned the research, with interview scripts for buyers, sellers and community organizers.

Before any design, the research goes to people who already trade locally: neighbors selling furniture from their stoops, buy-nothing admins sorting requests in Facebook comments, and people who walk past "FREE" signs and wonder what they're missing.

### Output

**Research Plan: Understanding Neighborhood Exchange Behavior**

**Objective**
Validate three assumptions from the strategic brief: (1) walking distance is a meaningful constraint that creates differentiated exchange behavior, (2) neighborhood familiarity generates more trust than platform-mediated reputation, and (3) the current tools (Facebook Marketplace, Buy Nothing groups, Craigslist) are failing hyperlocal exchange in specific, designable ways.

**Method Rationale**
Semi-structured interviews. The questions worth asking at scale aren't known yet, and a survey would force structure onto them too early. Interviews let participants tell us things we didn't know to ask about. 45 minutes each, with 5 minutes for warm-up and consent, 35 minutes for core questions, and 5 minutes for open-ended close.

**Participant Criteria**
- **Sellers (n=5):** Must have sold or given away 3+ items locally in the past 6 months. Mix of platforms used (Facebook, Craigslist, curb alerts, word of mouth). Exclude professional resellers and business accounts.
- **Buyers (n=5):** Must have picked up or purchased an item from a local stranger in the past 3 months. Mix of active seekers and casual browsers.
- **Community Organizers (n=3):** Must currently admin or moderate a Buy Nothing group, neighborhood exchange group, or community swap. Must manage a group of 50+ members.
- **Geographic split:** 2 neighborhoods, one urban (density >5,000 hh/km²) and one suburban (density 1,000-3,000 hh/km²). This tests whether "walking distance" means different things in different contexts.

**Recruitment:** Buy Nothing group admin outreach, Nextdoor posts, flyers at coffee shops and community boards. $50 gift card incentive. Screen for recency and frequency of local exchange: we want active practitioners, not people who sold one thing on Craigslist in 2019.

**Timeline**
- Week 1: Recruitment and screening (target 18 recruits for 13 sessions)
- Week 2-3: Conduct interviews (3-4 per day, allow debrief time between sessions)
- Week 4: Synthesis, affinity mapping, findings report

**Interview Guide: Sellers**

*Opening (5 min)*
- Introduce purpose: "We're exploring how people in neighborhoods sell, give away and trade things. We're not testing anything, just learning from your experience. There are no wrong answers."
- Obtain consent for recording. Confirm they can stop at any time.
- Warm-up: "Tell me a bit about your neighborhood. How long have you lived there?"

*Core questions, by theme:*

**Current behavior (10 min)**
1. Tell me about the last thing you sold or gave away locally. Walk me through what happened from the moment you decided to get rid of it.
2. How did you decide where to list it? What other options did you consider and why did you reject them?
3. How long did the whole process take, from "I should get rid of this" to "it's gone"?

**Friction and failure (10 min)**
4. What was the most annoying part of the process?
5. Have you ever decided *not* to sell or give away something locally, even though you wanted to? What stopped you?
6. Have you ever had a bad experience: someone who ghosted, a buyer who found the item wasn't what they expected, anything uncomfortable?

**Trust and proximity (10 min)**
7. Did you know the buyer/recipient beforehand? How did that affect the interaction?
8. How do you feel about strangers knowing approximately where you live? Has that ever made you hesitate?
9. Would knowing someone lives on your block change how you interact with them in an exchange?

**Probing techniques:**
- *Silence:* after each answer, wait 5-7 seconds before the next question. Let them fill the space.
- *"Walk me through that step by step"*: when they summarize, push for the sequential details.
- *"What made you choose that over..."*: surfaces decision criteria they may not articulate unprompted.
- *Reflecting back*: "So it sounds like the hardest part was [X]. Is that right?" Confirms understanding and often triggers correction or elaboration.

*Close (5 min)*
10. If you could change one thing about how you exchange things with neighbors, what would it be?
11. Is there anything I didn't ask about that feels important?

**Interview Guide: Buyers**

*Opening (5 min):* same structure as sellers.

*Core questions, by theme:*

**Discovery and motivation (10 min)**
1. When was the last time you bought or picked up something from a neighbor? What was it?
2. How did you find out about it? Were you actively looking, or did it just appear?
3. How often do you browse for local items? Is it a habit or occasional?

**The exchange experience (10 min)**
4. Describe the exchange itself. Where did you meet? How did payment work? How did it feel?
5. What made you trust the seller enough to show up?
6. Have you ever been burned: an item not as described, an uncomfortable interaction, a no-show?

**Proximity and behavior (10 min)**
7. If you could browse everything available within a 10-minute walk right now, would you? How often would you check?
8. Does distance change what you'd be willing to pick up? Would you walk 2 blocks for something you wouldn't drive 10 minutes for?
9. Have you ever walked past a "FREE" sign on someone's curb? What happened?

*Close (5 min):* same structure as sellers.

**Interview Guide: Community Organizers**

*Opening (5 min):* same structure, plus: "Tell me about the group you run and how you got involved."

*Core questions, by theme:*

**Operations and process (10 min)**
1. Walk me through a typical week of managing exchanges in your group. What do you actually do?
2. What breaks? What are the recurring problems you solve over and over?
3. What rules have you had to create that surprised you?

**Failure modes and moderation (10 min)**
4. How do you handle people who don't follow through: ghost pickups, no-shows, flaky commitments?
5. Have you ever had to remove someone from the group? What happened?
6. What's the worst thing that's happened in your group, and how did you handle it?

**Tools and opportunity (10 min)**
7. If you could wave a magic wand and fix one thing about how your group works, what would it be?
8. Do you think your community would use a dedicated app, or is "good enough" inside Facebook actually fine?
9. What would a dedicated tool need to do to be worth switching? What's the minimum?

*Close (5 min):* same structure.

**Findings Report Format**
Findings will be organized by theme, not by participant. Each states how many of the 13 interviews showed it, with anonymized quotes and the design implication.

## /blueprint
agent: Wren
summary: Mapped the service blueprint: the actors, what each one sees, the work behind it and the dependencies.

A $5 exchange runs on geolocation, notification timing, trust signals and moderation, and ends with a handoff on the sidewalk that the app never sees. The blueprint maps each of those and what happens when one fails.

### Output

**Service Blueprint: Item Exchange Flow**

**The choreography**

The service lives in the coordination between its actors, who enter and exit at different moments.

- **Sarah, the seller.** Moving-week panicked. Enters the service when she opens the app to post the couch. Stays present through pickup coordination. Exits when the couch is gone. Her arc is 4–48 hours; the service can't slow her down without losing her.
- **Marcus, the buyer.** Casual, ambient. Enters by accident: he opens the app while walking home. Stays present briefly: see, decide, walk over, pick up. His arc is 20 minutes to 2 hours. The service can't ask him to commit upfront.
- **Diane, the community organizer.** Operational, sustained. Always present in the background. Enters reactively when something breaks: a flagged listing, a harassment report, a stale post. Her arc is the lifetime of the neighborhood instance.
- **The neighborhood's density.** The service has no value below a threshold of active users per square mile. Without it, Sarah's post goes unseen and Marcus opens the app to find nothing.
- **Future buyers, present in absence.** Sarah's first exchange affects the third buyer who hasn't joined yet. Trust and tenure compound across handoffs that haven't happened. Their absence is structural; designing for them means designing the service so the first ten exchanges are visibly trustworthy enough to recruit the eleventh.

The systems below (Notification Service, Trust Inference Engine, Content Moderation, Neighborhood Graph) support the people above. Where the blueprint started flattening Sarah and Marcus into "the seller" and "the buyer," it went back to who they are at each step.

**Actors (full list):** Sarah/Marcus/Diane (named representative humans), the buyer-population, the seller-population, Platform (client + server), Neighborhood Graph Service, Trust Inference Engine, Content Moderation System, Notification Service.

---

**Frontstage: Seller Touchpoints (Sarah's arc)**

| Step | User action | Sees/hears | Channel |
|---|---|---|---|
| 1. Post item | Opens camera or selects photo | Camera UI, then AI-suggested title and category | Mobile app |
| 2. Set details | Confirms/edits title, sets price or "Free" | Price input, pickup preference (porch / meet outside / flexible) | Mobile app |
| 3. Set availability | Pickup preference auto-fills from last listing | Preview of how listing appears on neighbor's map | Mobile app |
| 4. Publish | Taps "Post" | Confirmation: "Live in your neighborhood" + map pin preview | Mobile app |
| 5. Receive interest | Gets batched notification | "[Name], 4 min walk away, is interested" with buyer tenure | Push notification |
| 6. Accept/decline | Taps "It's yours" or ignores | Pickup coordination screen with suggested meeting point and time | Mobile app |
| 7. Complete exchange | Meets buyer in person, taps "Exchanged" | "Nice, that's your 8th exchange in Capitol Hill" | Mobile app |

**Frontstage: Buyer Touchpoints (Marcus's arc)**

| Step | User action | Sees/hears | Channel |
|---|---|---|---|
| 1. Browse | Opens app, views map or feed | Items as map pins with thumbnails, or list sorted by distance | Mobile app |
| 2. View item | Taps item card | Photo, description, distance ("2 min walk"), seller tenure, pickup type | Mobile app |
| 3. Express interest | Taps "I want this" | Immediate: checkmark + "Interest sent." Undo toast for 5 seconds | Mobile app |
| 4. Wait for response | Checks activity tab | Status: "Waiting for [Seller]" with approximate response time | Mobile app |
| 5. Coordinate pickup | Gets notification when accepted | Suggested meeting point (nearest intersection) + time window | Push + in-app |
| 6. Complete exchange | Meets seller, taps "Got it" | Optional feedback prompt: "As described" / "Not as described" | Mobile app |

---

**Backstage: Organizational Processes (Diane's arc + system actors)**

**Neighborhood Graph Service**
- Determines walking radius per user based on housing density, street network graph, and physical barriers
- Density tiers: Urban core (>5,000 hh/km²) = 400m radius; Medium density = 800m; Suburban/rural (<1,000 hh/km²) = 1,600m
- Barrier detection: highways, rivers, railways, gated communities treated as hard boundaries. Radius does not cross even if straight-line distance qualifies.
- Updates density classification weekly; barrier data monthly
- Fallback: if street network data unavailable, straight-line distance at 1.3x multiplier

**Trust Inference Engine**
- No ratings. No star scores. Trust is ambient, built through proximity and tenure.
- Inputs: account age, completed exchanges, neighborhood tenure (how long at current location), mutual contacts (with permission), "as described" feedback rate
- Outputs surfaced to users: "Your neighbor since March 2025" / "12 exchanges in Capitol Hill" / "Also known to [mutual connection]"
- Cold start: new accounts show "New to Nearby" badge for first 4 weeks. Limited to 3 active listings until first completed exchange.

**Content Moderation System**
- *Automated layer:* Photo + text classification at post time. Prohibited items (weapons, drugs, regulated goods) flagged and held for review. Duplicate listing detection. Price anomaly flagging during declared emergencies.
- *Community layer:* Organizers get moderation tools for their neighborhood. Can hide listings, warn users, escalate to platform. First line of defense for ambiguous cases.
- *Platform layer:* Legal escalation, account suspension, law enforcement coordination. Only engaged when community moderation is insufficient.

**Notification Service**
- Interest notifications batched every 15 minutes to prevent alert fatigue
- Pickup reminders 1 hour before agreed time
- Daily digest: "What's new on your block," 3-5 items posted in closest radius
- Notification budget: max 5 push notifications per day per user, regardless of activity

---

**Support Processes: Infrastructure**

| System | Purpose | SLA | Failure impact |
|---|---|---|---|
| Geolocation API | User positioning, radius calculation | <100ms response, <100m accuracy | Core product broken; listings shown to wrong neighborhoods |
| Street network graph | Walking distance calculation, barrier detection | Updated monthly | Radius defaults to straight-line fallback (degraded but functional) |
| Photo storage + CDN | Item images, thumbnails | <200ms load for thumbnails | Listings appear without images; functional but trust-degraded |
| Push notification service | Interest alerts, pickup reminders, digest | <30s delivery for batched sends | Users miss time-sensitive coordination; exchange completion drops |
| Search index | Full-text search across titles and descriptions | <500ms query response | Search fails gracefully to browse-only; most users browse anyway |

---

**System States & Failure Modes**

| Failure mode | User sees | Blast radius | Recovery |
|---|---|---|---|
| Geolocation unavailable | "We need your location to show what's nearby" + settings link | Full: app is non-functional without location | Manual retry after enabling location services |
| Notification service down | Interest still sent (server-side) but seller not alerted | High; pickup coordination delayed | Seller sees interests on next app open; batch retry on service recovery |
| Photo upload fails | "That photo didn't make it. Try again" + retry button | Low; single listing affected | Retry; draft preserved locally |
| Neighborhood Graph stale (>7 days) | No visible change; radius uses last-known density | Medium; users may see too many or too few items | Automatic resolution on next graph update |
| Trust Engine unavailable | Profiles show "Nearby member" without tenure/exchange details | Low; trust signals degraded but still present | Graceful degradation; trust data populated on recovery |

**Decision Documentation**
- *Why batched notifications instead of real-time?* Real-time interest alerts in a marketplace create urgency anxiety. 15-minute batching lets sellers respond thoughtfully. Trade-off: buyer doesn't get instant confirmation. Mitigation: immediate client-side feedback ("Interest sent").
- *Why no messaging until mutual interest?* Unstructured messaging before commitment invites spam, lowball negotiation, and harassment. Pre-structured quick replies reduce friction and abuse simultaneously. Trade-off: less flexibility. Mitigation: free-text unlocks after 3 successful exchanges between two users.
- *Why community organizers as first-line moderators?* They already do this work in Facebook Groups and know their neighborhoods. Platform moderation at the neighborhood level would require local context we don't have. Trade-off: moderation quality varies by neighborhood. Mitigation: platform escalation path + organizer guidelines.

### Storytelling

The easy drawing is a straight line from buyer to backend to seller. The service runs across people who don't know each other yet: the buyer, the seller, the moderator catching abuse, and the future buyers whose trust depends on this exchange going well. Where the blueprint flattened the seller into a system role, it went back to who sellers are at each step: Sarah in her moving week, a buy-nothing organizer answering fifteen messages.

## /journey
agent: Wren
summary: Designed the core flows: posting, discovering, buying and messaging.

Each flow takes fewer taps than the alternatives. When the seller lives down the street, paying is the easy part. Finding things and arranging the pickup are the hard ones, and the flows spend their effort there.

### Output

**The user arcs**

Sarah, Marcus and Diane each have their own arc, because the differences between them are the design constraint.

*Sarah, seller, moving-week.* It's Thursday. Parents arrive Saturday. There's a couch, a coffee table, and three lamps that need to be gone, at any price. She's standing in a hallway with bad reception, moving boxes piling up around her, opening her phone in spare moments between packing. *Goal:* clear the apartment before Saturday. *Obstacle:* every existing tool wants her to write a description, set up a meet-up, message back and forth. *Turning point:* the app posts in 30 seconds and her downstairs neighbor messages "I'll come by at 6." *Resolution:* the couch is gone before dinner; she never had to leave the building.

*Marcus, buyer, casual.* He's walking home from the train. He opens Nearby out of habit, the way he checks Twitter. He's not shopping for anything. *Goal:* none, until the app shows him something. *Obstacle:* discovery has to compete with passive scrolling, not a search query. *Turning point:* a $15 desk lamp two blocks away, posted twenty minutes ago, picture good enough. *Resolution:* he taps "interested," walks the long way home, and carries it back.

*Diane, organizer, buy-nothing veteran.* She runs the neighborhood Facebook group with 800 members. She is drowning in DMs, missing handoffs, and tired of being the only moderator. *Goal:* keep the gift economy alive without losing her weekends to it. *Obstacle:* the platform must support generosity as a first-class flow, not just commerce-with-a-free-checkbox. *Turning point:* she sees the "Free" pickup-prefs flow and recognizes her work in it. *Resolution:* she moves her group's exchanges into Nearby and recruits two co-organizers within the first month.

Sarah's experience is panicked and time-bound, Marcus's ambient and serendipitous, Diane's operational and sustained. Each flow below was designed against every arc; where they diverge, the flow names the arc it favors.

---

**Flow 1: Posting an Item**

*Primary arc: Sarah's. The flow is optimized for speed under stress.*

*Entry:* Tap "+" from any screen. Camera opens immediately, no intermediate menu.

| Step | Screen | Layout & Key Elements | Copy | CTA |
|---|---|---|---|---|
| 1. Capture | Camera viewfinder | Full-screen camera, gallery shortcut (bottom-left), flash toggle (top-right) | None | Shutter button |
| 2. Confirm photo | Photo preview | Full-bleed photo, retake (top-left), AI-suggested title below: *"Blue IKEA bookshelf"* | "Looks right?" | "Use this photo" / "Retake" |
| 3. Set details | Item form | Title field (pre-filled, editable), price input with "Free" and "Trade" quick-select, category auto-suggested | "What are you getting rid of?" | "Next" |
| 4. Pickup prefs | Pickup options | Three options: "Porch pickup" / "Meet outside" / "Flexible," auto-filled from last listing. Date/time picker for availability window. | "How should they pick it up?" | "Preview" |
| 5. Preview & publish | Map preview | Item card as it will appear to neighbors, overlaid on map showing your approximate location and radius | "This is what your neighbors will see" | "Post it" |

**Decision gates:**
- *Photo rejected by moderation?* → Inline message: "This photo was flagged. Make sure it shows the item clearly and doesn't include prohibited content." User can retake or edit.
- *Price anomaly detected?* → Soft warning: "This seems higher than similar items nearby. Totally fine, just making sure it's intentional." No blocking.

**Error paths:**
- *Camera permission denied:* "Nearby needs camera access to photograph items. You can also choose from your gallery." + Settings link + gallery fallback.
- *Photo upload fails:* Draft saved locally. "That photo didn't make it. Tap to retry. Your listing is saved." Retry button + offline queue.
- *Network lost mid-post:* Full draft preserved. "You're offline. Your listing will go live as soon as you're back." Pending indicator on the listing.

**Flow metrics:** Total taps to post: 4 (photo, confirm title, set price, publish). Target time to post: under 30 seconds for returning users, under 60 for first-time.

---

**Flow 2: Discovering Nearby Items**

*Primary arc: Marcus's. The flow is built for ambient browsing.*

*Entry:* App launch defaults to map view. Deep links from notifications or shares land on item detail.

**Screen: Map View (Default Home)**
- Map centered on user's location. Items appear as pins with tiny thumbnail previews.
- Radius indicator: subtle circle showing current walking radius, with label: "Showing items within a 10-min walk"
- Radius adjustment: pinch-to-zoom adjusts radius, or tap preset buttons (5 / 10 / 20 min)
- Items beyond current radius shown as faded pins, visible but clearly "further away"
- Neighborhood name in header: "Capitol Hill" / "Your Neighborhood"
- Tap any pin to see item card overlay (photo, title, price, distance). Tap card to open detail.

**Screen: List View (Toggle)**
- Sorted by distance first, then recency. Shows walking time ("4 min walk"), not miles.
- Each card: thumbnail (64x64), title, price, distance, seller tenure
- Pull-to-refresh. Infinite scroll with distance grouping: "On your block" / "5-min walk" / "10-min walk"

**Filters:** Category, price range (including Free and Trade), posted today / this week. Filter chips persist across map/list toggle.

**Branch: Empty state (no listings nearby)**
- "Your neighborhood is quiet right now. Post something and get it started. Someone nearby probably wants it."
- Secondary: "Expand your radius?" with one-tap to 20 min walk.

**Branch: Serendipity digest**
- Daily push notification: "What's new on your block," 3-5 items posted in closest walking radius.
- Tapping the notification opens a curated card stack, not the full feed.

---

**Flow 3: Expressing Interest & Coordination**

*Primary arc: Marcus's into Sarah's. The flow has to land lightly for Marcus and clearly for Sarah at the same moment.*

*Entry:* Tap any item card from map, list, or notification.

| Step | Screen | What happens | State transitions |
|---|---|---|---|
| 1. View item | Item detail | Full photo, description, price, distance ("2 min walk"), seller tenure ("Your neighbor since March"), pickup type | None |
| 2. Express interest | Same screen | Tap "I want this" → button transitions to checkmark + "Interest sent" (150ms spring animation) | Optimistic update. Undo toast for 5 seconds. |
| 3. Undo window | Toast overlay | "Interest sent. Undo" with 5-second countdown | If tapped: reverts to pre-interest state. If expired: interest confirmed server-side. |
| 4. Waiting | Activity tab | "Waiting for [Seller name]" with approximate response time based on seller's historical pattern | Status updates: "Seen" / "Accepted" / "Passed" |
| 5. Accepted | Push notification + in-app | "Good news, [item] is yours!" + pickup coordination screen | Both parties see suggested meeting point (nearest intersection) + time window |
| 6. Coordinate | Pickup screen | Map with meeting point pin. Quick replies: "On my way" / "Running 10 min late" / "Need to reschedule" | Free-text only if both parties have 3+ prior exchanges |
| 7. Exchange | Confirmation prompt | "Did you get the [item]?" → "Yes, got it" / "It fell through" | If confirmed: item leaves map, both get completion count incremented |

**Error paths:**
- *Item no longer available when interest sent:* "Someone got there first. Here's what else is nearby." + 3 similar items by distance.
- *Seller never responds (48h timeout):* Interest auto-expires. Buyer: "This one didn't work out. We'll let you know if it re-lists." Seller: "You have an unanswered interest from [Buyer]. Still want to do this?"
- *Network failure on interest:* Queued locally. "Interest will be sent when you're back online" + pending indicator.

**Success criteria:** Listing-to-exchange completion >60%. Median messages per exchange <3. Ghost rate (accepted but not completed) <10%.

---

**Flow 4: Messaging (Unlocked After Mutual Interest)**

*Primary arc: all three. Diane's organizer arc shapes the moderation defaults; Sarah's seller arc shapes the quick-reply set; Marcus's buyer arc shapes the unlock progression.*

**Interaction spec:**
- Messaging is *not* a general chat feature. It unlocks only after seller accepts a buyer's interest.
- **Default: quick replies only.** Pre-written options: "On my way" / "I can pick up now" / "Can you hold until tomorrow?" / "Need to reschedule" / "Never mind, sorry"
- **Free-text unlocks** after 3 successful exchanges between the same two users. Trust is earned through repeated, completed interactions.
- **Auto-delete:** Messages delete 48 hours after exchange completes. No conversation history to mine.
- **Report button** on every message. Reported users lose messaging immediately, pending review.
- **State: messaging disabled.** If either party has been flagged for harassment, messaging reverts to quick replies only with a silent flag to community organizer.

### Philosopher

Buying and selling assume every exchange has a price. In real neighborhoods, the most common exchange is a gift: lemons from someone's tree, a bike a kid outgrew, moving boxes. If Nearby only supports buying and selling, it misses the giving that builds trust between neighbors. Should Free be a price, or should giving be its own mode with its own social rules?

### Storytelling

The protagonist arc keeps the journey honest about whose experience it is. Sarah moved in three weeks ago, needs her couch gone before her parents visit on Saturday, and is posting from a hallway with bad reception, hoping someone in her building saves her a trip to Goodwill. Other sellers are excited, or anxious, or not moving at all and have a bike to pass on. Each kept its own arc, since one blended arc would hide the differences the team needs to see.

## /organize
agent: Wren
summary: Defined the information architecture: categories, navigation, search and wayfinding.

People open Nearby to see what's around, so proximity comes first and category second. The map is the main navigation, categories filter it, and search is a second way in.

### Output

**Navigation Specification**

**Pattern selected: Hub-and-spoke with spatial primary**
- **Why this pattern:** Nearby's tasks are distinct and self-contained (browse, post, coordinate, manage). Hub-and-spoke keeps each mode clean. The spatial twist: the "hub" is a map, with the user's physical location as the organizing principle.
- **Trade-off analysis:** Hub-and-spoke means users return to the map between tasks. This is intentional; the map reorients them spatially. But it adds one tap when moving between activity and posting. Acceptable because these transitions are infrequent (most sessions are browse-only or post-only, rarely both).
- **Rejected alternative:** Flat tab bar with no hierarchy (like Instagram). Rejected because Nearby's modes have different interaction models: map browsing vs. feed scrolling vs. form entry. Flat tabs would force visual consistency where interaction divergence is needed.

**Bottom tab bar:** 5 items. Map is leftmost and default. Post (+) is center with elevated visual treatment (FAB-style).

| Tab | Label | Icon | Badge behavior |
|---|---|---|---|
| Map | Explore | Map pin | Dot when new items posted in radius since last open |
| Feed | List | List icon | Same badge logic as Map |
| Post | + | Plus circle (elevated) | Never |
| Activity | Activity | Bell | Count of unread interest responses and pickup reminders |
| Profile | You | Avatar silhouette | Dot when settings need attention (e.g., location expired) |

**No hamburger menu.** Everything lives in the tab bar or within a screen. Nothing is hidden behind a drawer.

**Category Taxonomy**

| Category | What belongs | What doesn't | Notes |
|---|---|---|---|
| Furniture & Home | Tables, chairs, shelves, lamps, decor | Appliances (see Kitchen) | Largest category in pilot data |
| Electronics & Gadgets | Phones, laptops, cables, small devices | TVs over 40" (see Furniture) | Condition important; prompt for "working?" |
| Clothing & Accessories | Wearable items, bags, jewelry | Kids' clothing (see Kids) | Low exchange rate in pilot; monitor |
| Kids & Baby | Clothing, toys, gear, strollers, cribs | None | High free-item rate; combine with "Free Stuff" tag often |
| Books & Media | Books, vinyl, games, DVDs | None | Lightweight, high-volume, ideal for porch pickup |
| Kitchen & Dining | Appliances, cookware, dishes | None | Often bundled ("moving, take it all") |
| Garden & Outdoor | Plants, tools, patio furniture | None | Seasonal variation significant |
| Sports & Fitness | Equipment, bikes, weights | None | Bikes are the #1 individual item; may need sub-treatment |
| Free Stuff | Anything priced at $0 | None | **Elevated to top-level** rather than buried as a price filter. |
| Wanted | Reverse listings: "Looking for X" | None | Demand signal. Helps cold-start neighborhoods. |

**Hierarchy rules:** Maximum one level deep. No sub-categories. Items belong to exactly one category. If an item could be two categories (a kid's bike), seller chooses; the system doesn't force polyhierarchy on a 10-category taxonomy. Fewer choices, faster posting.

**Search & Browse Strategy**

**Primary discovery mode: spatial browsing (map).** This is a deliberate choice. Most Nearby users don't come looking for a specific item; they come to see what's around. The map serves browse behavior; search serves intent behavior. Browsing is primary.

- **Search bar:** Available but not prominent. Appears on pull-down in feed view (hidden by default). Not visible on map view; map browsing is the intended path.
- **Search behavior:** Full-text across titles and descriptions. Results always distance-sorted first, relevance second. No pagination; list loads as you scroll.
- **Search empty state:** "Nothing matching within walking distance. Try a wider radius, or post a Wanted listing and let it come to you."
- **Search analytics:** Track what people search for in neighborhoods with no results. This is demand signal for cold-start seeding.

**Browse enhancements:**
- Filter chips on feed view: category, price range (including Free), posted today / this week. Chips persist across map/list toggle.
- "What's new on your block" daily digest: 3-5 items posted within closest radius. Push notification links to curated card stack.
- Distance grouping in list view: "On your block" / "5-min walk" / "10-min walk," giving spatial structure to a flat list.

**Wayfinding Design**

Users must always know three things: *where they are, what they're seeing, and how to see more.*

- **Where they are:** Neighborhood name in header ("Capitol Hill"). Map centered on their location with subtle location dot.
- **What they're seeing:** Radius label always visible: "Showing items within a 10-min walk." Item count: "23 items nearby."
- **How to see more:** Radius adjustment via pinch-to-zoom on map, or tap presets (5 / 10 / 20 min). Items beyond current radius shown as faded pins, visible but clearly "further away," inviting expansion without cluttering the primary view.
- **Orientation cue on return:** When opening the app after >24 hours, brief overlay: "3 new items since you last checked" with a tap to see them.

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

**Voice Framework: Nearby**

**Product Voice Attributes**

| Attribute | Spectrum | Where Nearby lands | Example |
|---|---|---|---|
| Formality | Formal ←→ Casual | 80% toward casual | "Hey, someone nearby wants your bookshelf" not "You have received an offer on your listing" |
| Warmth | Clinical ←→ Warm | 70% toward warm | "Nice, that's your 8th exchange" over "Transaction #8 complete" |
| Specificity | Generic ←→ Local | 90% toward local | "New in Capitol Hill" not "New near you" |
| Humor | Serious ←→ Playful | 40% toward playful | Light touches, never forced. "It was probably great" over "LOL sorry!" |
| Brevity | Detailed ←→ Terse | 75% toward terse | These are sidewalk transactions. Copy matches the stakes. |

**Voice Principles**
1. **Neighborly.** The app is a bulletin board. It speaks like a friendly neighbor.
2. **Casual but precise.** Friendly tone with clear information. Contractions are fine. Emoji are absent; warmth comes from words.
3. **Local.** Use neighborhood names whenever available. "New in Capitol Hill" over "New near you." The specificity builds belonging.
4. **Brief.** Nobody reads instructions in a marketplace app. Say it in one sentence. If you need two, the first one better be worth it.
5. **Honest about limitations.** Don't pretend the app can do things it can't. "We need your location. That's kind of the whole point" is better than a generic permissions dialog.

---

**Copy Deck: Key Screens**

**Onboarding (first launch)**
- Screen 1: "Nearby shows you what's for sale, for free, or for trade within walking distance of where you live."
- Screen 2: "No star ratings. No shipping. Just neighbors exchanging things."
- Screen 3: "We need your location to show what's nearby." [Allow location] / [Not now: "Without location, Nearby can't show you anything. You can enable it later in Settings."]

**Posting flow**
- Camera screen: No copy needed. Camera speaks for itself.
- AI title suggestion: "Looks right?" [pre-filled title]
- Price input placeholder: "Name your price, or tap Free"
- Pickup options header: "How should they pick it up?"
- Preview header: "This is what your neighbors will see"
- Publish confirmation: "Live in your neighborhood."

**Browse / discovery**
- Map header: "[Neighborhood Name]" + "23 items nearby"
- Radius label: "Showing items within a 10-min walk"
- Daily digest notification: "What's new on your block. 4 items posted today"

---

**Empty State Copy**

| Location | Headline | Body | CTA |
|---|---|---|---|
| Map: no listings | "Your neighborhood is quiet right now." | "Post something and get it started. Someone nearby probably wants it." | "Post an item" |
| Search: no results | "Nothing matching within walking distance." | "Try a wider radius, or post a Wanted listing and let it come to you." | "Expand radius" / "Post a Wanted" |
| Activity: no exchanges | "No exchanges yet." | "Your first one is the hardest. After that, you'll wonder why you ever drove to Goodwill." | "Browse what's nearby" |
| Cold start: new neighborhood | "You're early." | "Nearby works best when neighbors join together. Share with 3 people on your block and watch what happens." | "Invite neighbors" |
| My listings: empty | "Nothing posted yet." | "Got anything you don't need? Your neighbors might." | "Post your first item" |

---

**Error Message Design**

Each error message has three components: what happened, why it matters, and what to do.

| Error | What happened | Why it matters | What to do |
|---|---|---|---|
| Location unavailable | "We can't determine your location." | "Nearby needs your location to show what's around you. That's the whole point." | "Enable location in Settings." [Settings link] |
| Photo upload failed | "That photo didn't make it." | "No worries. Your listing draft is saved." | "Try again. Good lighting helps it sell faster anyway." [Retry button] |
| Network lost mid-post | "You're offline." | "Your listing is saved as a draft." | "It'll go live as soon as you're back online." [Pending indicator] |
| Item no longer available | "This item is no longer available." | "Someone got there first." | "Here's what else is nearby." [3 similar items by distance] |
| Interest send failed | "Your interest didn't go through." | "The seller hasn't been notified yet." | "Tap to retry." [Retry button, with offline queue fallback] |
| Session expired | "You were signed out." | "Your drafts and activity are still here." | "Sign back in to pick up where you left off." [Sign in button] |

---

**Trust Signal Copy**

These replace traditional reputation systems. No stars, no scores, no public reviews.

- **Neighborhood tenure:** "Your neighbor since March 2025." Displayed on profile cards and item detail. Communicates stability without surveillance.
- **Proximity:** "Lives about a 3-minute walk from you." Distance without address. Precision: round to nearest minute. Never show exact distance under 1 minute ("nearby" instead).
- **Exchange history:** "12 exchanges in Capitol Hill." Activity as a count, no rating attached.
- **Mutual connection:** "Also known to Sarah M." Shown only when mutual contact exists, with both parties' permission. The strongest trust signal available.
- **New user:** "New to Nearby." Honest badge for accounts under 4 weeks. Transparency builds trust faster than hiding newness.

---

**Microcopy Pattern Library**

| Pattern | Template | Example |
|---|---|---|
| Confirmation (action taken) | "[Action] [object]." | "Interest sent." / "Posted." / "Exchange complete." |
| Waiting state | "[Waiting for] [actor] [context]." | "Waiting for Jake to respond. Most sellers reply within a few hours." |
| Gentle nudge | "[Observation]. [Suggestion]." | "You have an unanswered interest from 6 hours ago. Want to respond?" |
| Undo opportunity | "[Action taken]. [Undo]" | "Interest sent. Undo" (5-second toast) |
| Time reference | "[Relative time], not [absolute time]" | "Posted 2 hours ago" over "Posted at 3:47 PM" |
| Distance reference | "[Walking time] ([distance])" | "4 min walk (0.2 mi)": always time first, distance in parentheses |

## /evaluate
agent: Vigil
summary: Found the launch blockers, ranked every issue by severity and named the fix for each.

Each heuristic got a verdict in words, and each issue its severity, the heuristic it breaks and its fix. Both launch blockers are in the handoff between neighbors: the strategy, the flows and the wireframes each start an exchange a different way, and no step gets the buyer to the seller's door.

### Output

Two findings block launch, both in the handoff between neighbors. Five more cause real friction, seven degrade the experience, and two are polish.

---

**Anti-Pattern Verdict**

**Minor Issues.** No deceptive, consent or urgency pattern: there are no fees, no fabricated scarcity, Free is a first-class price, and a Pending pickup badge reports status without applying pressure. The daily "What's new on your block" push and the new-item dots on both browse tabs have no stated default (Medium): opt-in, they inform; on by default, they become the re-engagement the ethical stance rules out. "842 neighbors within 1 mile can see your listing right now" is Low: honest if it counts active neighbors, inflated if it counts every account in range. From the catalog's common failures, declining location is a dead end, and harassment reports and over-budget notifications fail silently.

---

**Priority Issues**

*Critical: blocks a core task or violates a regulation*

**The artifacts disagree on how an exchange starts.** The brief's MVP has one-tap interest and defers messaging to v2; Flows 3 and 4 run interest through an Activity tab and unlock quick replies only after the seller accepts; the wireframes replace Activity with a Messages tab, and Posted tells sellers that interested neighbors "message you directly". No screen shows where an interest lands or where the seller says "It's yours", and the drawn version brings back the open messaging the blueprint ruled out to stop spam, lowballing and harassment. *Violates consistency and standards, and visibility of system status. Decide whether any messaging ships in the MVP, then draw one way for an exchange to start, from the interest landing to "It's yours".*

**A pickup at the seller's door can't be arranged.** Flow 3 sends both people to the "nearest intersection" whatever the pickup type, and although the constraints keep addresses hidden "until both parties agree", no step marks that agreement or releases an address. No quick reply can carry one, and free text unlocks only after three exchanges (each person's in Flow 3, the same pair's in Flow 4), so no first exchange ever qualifies. Porch pickup can't complete, and Sarah's arc, where "she never had to leave the building", ends with her carrying a couch to the corner. *Violates match between system and the real world. Add the step where both agree and the address is released, and a quick reply that can carry it.*

*Major: significant friction or potential harm*

**Browse is drawn as the marketplace the brief argues against.** The wireframe opens on a search bar and a newest-first grid, with no map, no radius control and distances in miles ("0.2 mi"), where Flow 2 and the IA make the map home, sort by distance, speak in walking minutes, put seller tenure on every card and keep search out of the way. Its tab bar swaps the IA's Explore, List and Activity for Browse, Saved and Messages, and Saved has no flow behind it. Geography becomes a filter, the failure the brief pins on existing tools. *Violates consistency and standards, and match between system and the real world. Redraw Browse from Flow 2 with the map as home, distances in walking minutes, seller tenure on every card, and the IA's tab bar.*

**The post screen invites the seller's street into public text.** On Post an item, the description hint asks for "a line on size, wear, and pickup" and the sample answer ends "Porch pickup on Birch St."; Flow 1's pickup-preference step, and its map preview of the location neighbors will see, are both missing. The product's own example teaches sellers to name their street in public, the outcome the brief warns against: "a stranger knows where you live". *Violates error prevention. Restore the pickup step and the location preview on Post, and rewrite the description hint so it never asks for a street.*

**Sarah's moving week hits two limits the design did not cover.** New accounts are capped at 3 active listings until a first exchange completes, and every account at 5 pushes a day, while the seller the posting flow is built for posts in bursts: Sarah, three weeks in the neighborhood, has a couch, a coffee table and three lamps to clear by Saturday, each with its own interests and pickup reminder. Neither limit has copy, a screen or a priority order, so her fourth listing fails without explanation and a pickup reminder can drop silently on the day she needs it most. *Violates error recovery, and visibility of system status. Give the listing cap and the push cap copy, a screen and a priority order, with pickup reminders ranked above the digest.*

**Reports go to an organizer with no screen.** The blueprint makes organizers the first line of moderation and Flow 4 flags harassment to them silently, but no flow, tab or wireframe gives Diane a place to see a flag, hide a listing or warn a user, and the only safety control anyone else has is the report button on messages. Reported users lose messaging "pending review" that nobody can perform, and the people most likely to bring their neighborhood onto Nearby find no place for their work. *Violates user control and freedom, and visibility of system status. Give organizers a place to see a flag, hide a listing and warn a user, and let anyone report a listing.*

**Only a busy neighborhood is drawn.** Browse shows 38 listings and Posted counts 842 neighbors and promises a first reply that "usually arrives within a day", yet every neighborhood launches below the density the blueprint calls a precondition, and the quiet states ("You're early", "Your neighborhood is quiet right now") exist only as copy. The first sellers, the ones a cold start depends on, get a promise no data supports yet. *Violates visibility of system status. Draw the quiet states, and promise a reply time only once the interviews say what to promise.*

*Minor: degraded but recoverable*

**Trade and Wanted can't be posted.** Onboarding promises things "for sale, for free, or for trade" and the search empty state offers "Post a Wanted", but the drawn price field has only a Free chip (Flow 1's Trade option is gone), and a camera-first form can't photograph something you're looking for. Wanted is the IA's own cold-start lever, and the buyer who follows that empty state lands on a camera. *Violates consistency and standards. Decide whether Trade and Wanted ship; if they do, give the price field its Trade option and give Wanted a form that does not start with a camera.*

**Between "I want this" and "It's yours", nobody can say no.** Once the 5-second undo closes, a buyer can't withdraw, and an undo that lasts 5 seconds is a time limit WCAG 2.2.1 asks to be adjustable. The seller's documented choices are "It's yours" or silence, so a pass costs the buyer the 48-hour timeout (Flow 3 shows a "Passed" status no step produces), and nothing says how a seller chooses among several interested neighbors or what the others see. Marcus's whole arc lasts 20 minutes to 2 hours, so two days of silence reads as a dead app, and unwanted interests become the ghosted pickups the success criteria cap at 10%. *Violates user control and freedom, and visibility of system status. Let a buyer withdraw interest after the toast closes, make the undo adjustable, and give the seller a pass and a way to choose among several neighbors.*

**Nothing says how a neighbor gets paid.** Payments are out of scope as "platform-agnostic", but no listing, pickup screen or quick reply says whether a seller takes cash or an app. With free text locked, that gets settled on the sidewalk, or not at all. *Violates help and documentation, and match between system and the real world. Say on the listing or the pickup screen whether the seller takes cash or an app, with a quick reply that can carry it.*

**Location is all or nothing.** "Not now" on onboarding screen 3 leaves an app that "can't show you anything", and nothing covers a phone sharing only approximate location, which can't meet the blueprint's 100-meter accuracy, let alone a 400-meter urban radius. Privacy-minded neighbors, the people a privacy-first product courts, must hand over precise location or leave, and approximate location quietly shows the wrong blocks. *Violates user control and freedom, and error recovery. Design the approximate-location state and a path that works after "Not now".*

**"Neighborhood" is a name on screen and a radius underneath.** The brief left "what defines a neighborhood?" open; the blueprint answers with a per-person walking radius that stops at highways and rivers, while the screens answer with a name ("Post to Maplewood") and a flat "within 1 mile". A listing posted to Maplewood reaches people outside it and misses residents across a barrier, and organizers moderating "for their neighborhood" have no boundary to apply. *Violates match between system and the real world, and consistency and standards. Settle one definition of neighborhood, then say on screen what the radius covers.*

**Trust signals claim to know where people live.** "Your neighbor since March 2025" and "Lives about a 3-minute walk from you" state residence, but signup has no verification by design, so the system knows only where a phone has been. Tenure carries the trust model, and whether it builds trust at all is the research plan's second assumption, untested until the interviews run. *Violates match between system and the real world. Reword tenure as time on Nearby and distance as where the phone has been, and test the trust model in the interviews.*

**Engagement mechanics have no defaults.** The daily "What's new on your block" push, new-item dots on both the Explore and List tabs, and the "3 new items since you last checked" overlay have no stated default, and no notification settings are designed. Opt-in, they serve Marcus; on by default, they are the re-engagement loop the ethical stance rules out, and this finding becomes major. *Violates flexibility and efficiency of use. Set the digest and the new-item dots to opt-in, and design the notification settings.*

*Cosmetic: polish*

**Category names drift.** Browse chips read "Plants & garden", "Electronics" and "Free"; the taxonomy says "Garden & Outdoor", "Electronics & Gadgets" and "Free Stuff". Settle one vocabulary before filters and posting are built from different lists. *Violates consistency and standards. Use one category vocabulary for filters and posting.*

**Two error messages misdiagnose.** The upload failure ends "Good lighting helps it sell faster anyway", blaming the photo for a network fault, and "This photo was flagged" doesn't say which rule it broke. Both leave the seller guessing what to fix. *Violates error recovery. Make the upload failure name the network and the flagged-photo message name the rule.*

---

**Heuristic Verdicts**

- **Visibility of system status: Broken.** Posted tells sellers to expect messages while interests go to an Activity tab the wireframes don't have; silent limits, unbacked promises and a 48-hour quiet add to it.
- **Match between system and the real world: Broken.** A pickup at someone's door is routed to the nearest intersection, and neighborhoods and residence are described in terms the system can't back.
- **User control and freedom: Broken.** No one can report a listing, and organizers can't act on the reports that exist; the undo window and the location prompt strain it further.
- **Consistency and standards: Broken.** Messaging means something different in the brief, the flows and the wireframes, and the drift repeats in navigation and labels.
- **Error prevention: Broken.** The description hint walks sellers into publishing their street.
- **Recognition rather than recall: Holds.** Labeled tabs, quick replies and filter chips that persist across map and list keep options in view. If the IA's pull-down-only search wins over the wireframe's visible bar, this strains.
- **Flexibility and efficiency of use: Strained.** No notification settings and no digest default. Flow 1's pickup autofill from the last listing is the right accelerator for repeat sellers, and it went missing with the pickup step.
- **Aesthetic and minimalist design: Holds.** One primary action per screen, and cards carry only price, title, seller, distance and age.
- **Help users recognize, diagnose, and recover from errors: Broken.** The listing cap fails with no message. Everywhere else this is the material's strongest heuristic (see Positive Findings), and the two misdiagnosing messages are polish.
- **Help and documentation: Strained.** Nothing tells either neighbor how payment works. Onboarding and field hints otherwise carry what a casual app needs.

---

**Cognitive Walkthrough Results**

*Task: Sarah gets the couch picked up before Saturday without leaving her building.* Steps follow Flow 1, Flow 3 and the blueprint's seller arc, on the drawn screens where they exist.

1. **Start a listing. Pass.** The raised Post tab sits in every drawn tab bar and opens Post an item with the camera zone first.
2. **Photograph and describe the couch. Pass.** The fields follow the photo, and the Cover badge and "2 of 8" confirm the shots took.
3. **Say how pickup works. Failure.** Visibility: no, Post an item has no pickup field. Understanding: no, the hint points her to the description, which publishes her building to everyone.
4. **Post. Pass.** "You're live in Maplewood" confirms it and names the audience.
5. **Find out who wants it. Failure.** Visibility: no, no drawn screen shows an incoming interest. Understanding: no, Posted told her to watch Messages, and under Flow 4 no one can message her before she accepts.
6. **Pick a buyer. Hesitation.** Visibility: no, "It's yours" exists only in the blueprint's seller table, with no way to compare several interested neighbors.
7. **Get the buyer to her door. Failure.** Visibility: no, the pickup screen offers the nearest intersection. Understanding: no, no quick reply can carry her address or a time, and free text is locked.
8. **Close it out. Pass.** "Did you get the [item]?" offers "Yes, got it" or "It fell through", and a confirmed exchange leaves the map.

Sarah gets the couch listed and then can't finish what she came to do: on Saturday it is still in the apartment, or out on the corner. Each failure sits on a seam where two artifacts disagree. The story breaks differently for the others: Marcus's at the 48-hour silence after "I want this", Diane's before it starts, because nothing in the product is hers.

Task success: posting completes and recovers well from network failures; the exchange stops at step 7 for any pickup at the seller's door. The drawn form adds Condition and Description to Flow 1's four-tap path, so time-to-post needs instrumenting before anyone quotes the 30-second target.

---

**Positive Findings**

- **Posting fails gracefully.** A failed upload keeps the draft, a lost connection queues the listing with a pending indicator, a denied camera falls back to the gallery, and every error message says what happened, why it matters and what to do. Give the pickup step the same treatment.
- **The buyer gets instant feedback despite batching.** The checkmark and "Interest sent" toast land at once while sellers hear in 15-minute batches, and the blueprint records that trade-off instead of hiding it.
- **Trust without scores.** Tenure, distance and exchange counts replace star ratings, and newness is labeled ("New to Nearby") rather than hidden. Keep the model; fix the wording of the residence claims.
- **The ethics show up at the moment of decision.** "Visible to neighbors within 1 mile · no fees" sits directly above the commit button (Post ④), Free has its own badge and filter chip (Browse ②), and Pending listings stay visible as plain status (Browse ③).
- **Browsing has an end.** List view groups items by walking distance ("On your block", "5-min walk", "10-min walk") inside the radius, so the scroll can't turn into an endless feed, and every empty state ends in an action.

---

**Recommended Actions**

Sequenced so both blocking findings clear first. The interviews can start today, in parallel.

1. **Decide whether any messaging ships in the MVP, and whether Trade and Wanted do.** The flows, IA and screens all wait on these answers.
2. **Write one coordination flow from interest to handoff:** where interests land, how a seller passes or chooses, when the address is released, how payment is agreed. Then an organizer flow for flags, hidden listings and warnings.
3. **Set the rules those flows need:** when an address is released and when it expires, limits that survive a moving week with pickup reminders ranked above the digest, moderation where no organizer exists yet, behavior under approximate location, one definition of neighborhood, and the digest default.
4. **Redraw Browse from Flow 2** with the map as home and the IA's tab bar, restore the pickup step and location preview on Post, and draw what exists only as tables or copy: item detail, Activity, the pickup screen and the quiet-neighborhood states.
5. **Cover the limit states, the cold start, the 48-hour wait and the location fallbacks.**
6. **Rewrite the description hint and the reply-time promise,** add payment wording, say what the radius covers, reword tenure as time on Nearby, and fix the two error messages.
7. **Settle one tab bar, give moderation a home, and use one category vocabulary.**
8. **Let a buyer withdraw interest from Activity after the toast closes.**
9. **Run the interviews the research plan already describes:** the trust model, the reply-time promise and the pickup safety questions rest on what they were written to test.
10. **Judge the digest by the exchanges it leads to, not by opens,** and instrument time-to-post and time-to-exchange against the 30-second and 48-hour targets.

## /fortify
agent: Vigil
summary: Designed for what goes wrong: ghost sellers, misdescribed items, empty neighborhoods and abuse.

People ghost, misdescribe items and harass neighbors, and every neighborhood starts empty. The design answers with light friction that makes bad behavior harder and good behavior easier.

### Output

**State Inventory Matrix: Item Card Component**

Every state the item card can be in, across the full lifecycle: every messy in-between state that real usage produces.

| State | What the user sees | What the user can do | How they recover/progress |
|---|---|---|---|
| Default | Photo, title, price, distance, seller tenure | Tap to view detail, swipe to express interest | None |
| Loading | Skeleton placeholder (gray shapes matching card layout) | Wait | Auto-resolves in <2s; timeout at 5s → error state |
| Partial load | Photo loaded but text pending (or vice versa) | Tap to view detail (data will load in detail view) | Text populates on load; stale after 10s → show "Refresh" |
| Empty (no photo) | Placeholder image + title and price | Tap to view detail | Seller prompted to add photo in notification |
| Error (failed to load) | "Couldn't load this item. Tap to retry." | Tap to retry | Retry fetches fresh data; 3 failures → hide card + log |
| Expired | Grayed card, "No longer available" overlay | Tap to see "similar items nearby" | Link to 3 nearest items in same category |
| Interest sent | Checkmark overlay, "Interest sent" label | Tap to view detail, see interest status | Undo toast for 5 seconds; after that, view status in Activity |
| Offline (cached) | Normal appearance + subtle "Last updated 2h ago" badge | Tap to view cached detail | Badge clears on reconnect; stale data may show unavailable items |
| Flagged/held | Not visible to browsers. Seller sees: "Under review" | Seller can edit or withdraw | Review resolves within 2 hours; auto-publish or rejection notice |

---

**State Inventory Matrix: Posting Flow**

| State | What the user sees | What the user can do | How they recover/progress |
|---|---|---|---|
| Default | Camera viewfinder | Take photo or select from gallery | None |
| Photo captured | Photo preview with AI-suggested title | Confirm, edit, or retake | Retake returns to camera |
| Photo upload in progress | Upload spinner on photo thumbnail | Cancel upload | Cancel preserves photo locally, can retry |
| Photo upload failed | "That photo didn't make it" + retry icon | Retry or select different photo | Draft preserved; offline queue if no connection |
| Draft saved (offline) | Full form with pending indicator | Edit all fields; view "will post when online" message | Auto-publish on reconnection |
| Moderation hold | "Your listing is being reviewed" | Wait, edit, or withdraw | Review within 2 hours; edit resubmits to review |
| Published | "Live in your neighborhood" confirmation | Share, view on map, post another | None |
| Duplicate detected | "You posted something similar 10 minutes ago. Is this different?" | Confirm as different item, or cancel | Confirm publishes; cancel returns to listing management |

---

**Error Recovery Design**

**Principle:** Every error message answers three questions: what happened, why it matters, and what to do next. No generic "Something went wrong." No error codes. No blame.

| Error scenario | Recovery pattern | User sees | Automatic behavior |
|---|---|---|---|
| Network lost during browse | Graceful degradation | Cached items shown + "Last updated [time]. Connect to refresh." | Auto-refresh on reconnect |
| Network lost during post | Draft preservation | "You're offline. Your listing will go live as soon as you're back." | Auto-publish on reconnect |
| Network lost during interest | Offline queue | "Interest will be sent when you're back online" + pending indicator | Auto-send on reconnect; rollback if item no longer available |
| Photo upload timeout | Retry with backoff | "That photo didn't make it. Tap to retry." | Automatic retry once; manual retry after that |
| Item unavailable when interest sent | Redirect | "Someone got there first. Here's what else is nearby." | Show 3 similar items by distance |
| Server error (500) | Retry + report | "Something's not working on our end. Tap to retry." | Automatic retry with exponential backoff (1s, 3s, 9s) |
| GPS accuracy degraded | Transparent fallback | "Your location is approximate. Items shown may be slightly further than indicated." | Use last-known accurate location; clear when GPS recovers |

---

**First-Run Experience Design**

The current design drops new users onto an empty map with no guidance. Here's the fix:

**Progressive onboarding (3 screens, then value):**
1. "Nearby shows you what's for sale, for free, or for trade within walking distance." (Map illustration)
2. "No star ratings. No shipping. Just neighbors exchanging things." (Trust signal illustration)
3. Location permission request with honest framing: "We need your location to show what's nearby. That's the whole point."

**Then immediately:** Show the map. If items exist nearby, highlight the 3 closest. If no items exist (cold start), show the seeded content or jump to:

**Cold start first-run (empty neighborhood):**
- "You're early, and that matters. The first neighbors to join set the tone."
- "Post your first item and we'll feature it at the top of your neighbors' feeds for 24 hours."
- Contact import: "See if anyone you know is already on Nearby." (Optional)
- Fallback: Show items from the nearest active neighborhood with transparency: "Nothing in [your neighborhood] yet. Here's what's happening in [nearby neighborhood], 15 min away."

---

**Stress Test Results**

| Scenario | Expected behavior | Result | Notes |
|---|---|---|---|
| User posts item with 200-character title | Title truncates at display, full title in detail view | **Pass** | Ellipsis at 60 chars in card view; full title in detail |
| 500 items within walking radius | Map clusters pins; list view uses virtualized scroll | **Pass** | Cluster at 50+ pins per screen; performance <16ms frame time |
| User with 0 contacts, new neighborhood, no listings | First-run experience triggers; seed content shown; post CTA prominent | **Fail** | Currently drops to empty map. Fix: implement first-run flow above. |
| Seller ghosts after accepting interest | Item auto-relists after 2 hours; buyer notified; seller nudged | **Pass** | 3 ghost events in 30 days triggers "Slow mode" on seller account |
| Photo is 25MB raw file from modern phone | Client-side compression before upload; max 2MB transmitted | **Pass** | HEIF/HEIC converted to JPEG; quality 80% |
| User moves to new neighborhood | Neighborhood reassignment after 7 days of consistent new geolocation | **Pass** | Old neighborhood data preserved; new neighborhood cold-start mitigated by existing account history |
| 100 simultaneous interest expressions on one item | First interest served; others queued; server batches notifications | **Pass** | Race condition handled by optimistic locking; "Someone got there first" for others |
| User reports harassment via messaging | Reported user loses messaging immediately; community organizer notified | **Pass** | Quick-reply-only messaging makes free-text harassment impossible for users with <3 mutual exchanges |
| Emergency declared (power outage) + generator listed at $2,000 | Price anomaly detection flags; transparency notice shown to buyers | **Pass** | "This price is higher than usual for this item." No blocking. |
| Listing sits for 14 days with no interest | Day 12: "Still available?" push notification. No response triggers auto-archive. | **Pass** | One-tap re-post available from archive |

---

**Edge Case Catalog**

**1. Seller Ghosts After Accepting**
- *Trigger:* Seller accepts buyer's interest but doesn't show up or respond to coordination messages.
- *Design:* If seller doesn't confirm exchange within 2 hours of agreed time, item auto-relists. Buyer gets "This one fell through. We've re-opened it so others can claim it." Seller gets gentle nudge: "Heads up, [Buyer] came by and you weren't available. Want to reschedule or pass it to someone else?"
- *Escalation:* 3 ghost events in 30 days triggers "Slow mode." Seller's future listings require explicit availability confirmation before going live.

**2. Item Misrepresentation**
- *Trigger:* Buyer picks up item and it doesn't match the listing description or photos.
- *Design:* Post-exchange feedback is optional and binary: "As described" or "Not as described." No public reviews. No star ratings. Three "Not as described" flags in 30 days surface a private prompt to seller: "A few neighbors felt items didn't match descriptions. Adding detailed photos helps build trust."
- *No public shaming.* This is a neighborhood. Escalation is private and constructive.

**3. Cold Start: New Neighborhood**
- *Trigger:* User signs up in a neighborhood with zero active users and zero listings.
- *Design:* Three-layer seed strategy:
  - **Personal:** Contact import to surface existing Nearby users. "3 of your neighbors are already here."
  - **Content:** Partnership with local Buy Nothing groups to import existing listings (with admin permission and attribution).
  - **Incentive:** "Post your first item and we'll feature it at the top of your neighbors' feeds for 24 hours."
  - **Fallback:** Show items from nearest active neighborhood with distance transparency.

**4. Harassment via Messaging**
- *Trigger:* User sends inappropriate content through the messaging system.
- *Design:* Structurally prevented for most interactions: quick replies only until 3 successful mutual exchanges. Free-text is a privilege earned through trust. Report button on every message. Reported users lose messaging immediately pending review; no appeals process delays the protection.

**5. Price Gouging During Emergencies**
- *Trigger:* Declared emergency (power outage, weather event) + item listed at significantly above historical average.
- *Design:* Price anomaly detection compares to 90-day rolling average for category. Flagged items get visible notice to buyers: "This price is higher than usual for this item." No automatic blocking, but full transparency. Community organizers can escalate.

**6. Duplicate Accounts / Sybil Attacks**
- *Trigger:* Bad actor creates multiple accounts to manipulate listings or evade moderation.
- *Design:* One account per phone number. Neighborhood assignment based on consistent geolocation over 7 days rather than self-reported address. Multiple accounts from same device flagged for review.

**7. Abandoned Listings**
- *Trigger:* Item posted but seller becomes inactive.
- *Design:* Listings expire after 14 days. Seller gets "Still available?" prompt at day 12. No response = auto-archive. Re-posting takes one tap from the archive screen. Expired listings don't count against exchange completion metrics.

## /include
agent: Vigil
summary: Audited accessibility for screen readers, keyboards, cognitive load and motor access.

A map-first interface shuts out people who can't see the map. The list view does everything the map does, so either one carries the whole experience.

### Output

**Accessibility Audit: Nearby**

---

**Screen Reader Experience Design**

As the primary experience, the map shuts out screen reader users, and the fix is architectural. The list view must be promoted from "toggle alternative" to "equal citizen." When VoiceOver or TalkBack is active, the app should default to list view.

**Item card announcement order:**
`[Item name], [price or "Free"], [walking time] away, posted by [neighbor name], [neighborhood tenure]. [Pickup type].`

Example: "Blue IKEA bookshelf, free, 4 minutes away, posted by Jake, your neighbor since March 2025. Porch pickup."

**Screen-by-screen screen reader spec:**

| Screen | Landmark structure | Key announcements | Focus management |
|---|---|---|---|
| Map view | Banner: "[Neighborhood], [count] items nearby". Alert on view load: "Map view. Switch to list view for screen reader optimized browsing." | Map pins are not individually focusable. Nearby items list announced as summary: "[X] items within [Y]-minute walk." | Focus on "Switch to list view" link at top |
| List view | Banner: same as map. Main: item list grouped by distance. | Group headers announced: "On your block, 3 items" / "5-minute walk, 7 items" | Focus on first item card |
| Item detail | Banner: item name. Main: description, price, distance, seller info. | Full details read in order: name, price, distance, seller tenure, pickup type, description | Focus on "I want this" button |
| Interest sent | Live region (aria-live="polite") | "Interest sent for [item name]. You'll be notified when [seller name] responds." Immediate; does not wait for 15-minute batch. | Focus returns to item card in list |
| Posting flow | Step indicator: "Step [N] of 5: [step name]" | Each field labeled. AI-suggested title announced: "Suggested title: [title]. Edit or confirm." | Focus on first editable field per step |
| Activity tab | Banner: "Activity". Sections: "My Listings", "My Interests" | Status announced per item: "Waiting for response" / "Accepted, coordinate pickup" / "Completed" | Focus on first unread item |

**Critical requirement:** The undo toast ("Interest sent. Undo") must be announced via aria-live and the undo button must be keyboard-focusable for its full 5-second duration. If screen reader users can't reach it in time, they have no undo.

---

**Keyboard Navigation Specification**

| Context | Key | Action |
|---|---|---|
| Global | Tab | Move focus to next interactive element |
| Global | Shift+Tab | Move focus to previous interactive element |
| Global | Skip link (first Tab) | Jump to main content, bypass tab bar |
| List view | Arrow Down/Up | Navigate between item cards |
| List view | Enter | Open item detail |
| Item detail | Escape | Close detail, return focus to originating card |
| Item detail | Enter on "I want this" | Express interest (triggers undo toast) |
| Posting flow | Enter | Advance to next step |
| Posting flow | Escape | Go back one step (preserving input) |
| Modals (pickup, messaging) | Focus trap | Tab cycles within modal only |
| Modals | Escape | Close modal, return focus to trigger element |
| Filters | Space | Toggle filter chip on/off |
| Radius presets | Arrow Left/Right | Move between 5 / 10 / 20 min presets |

**Focus management rules:**
- Focus is never lost. When a modal closes, focus returns to the element that opened it. When an item is removed from a list, focus moves to the next item.
- No focus trap outside of modals. Users can always Tab out of any non-modal component.
- Focus indicators are visible in both light and dark mode (3:1 contrast minimum, 2px solid outline).

---

**Cognitive Accessibility**

**Language simplification:**
- All interface copy at 6th-grade reading level or below. Tested via Hemingway Editor.
- No jargon: "listing" becomes "item," "express interest" becomes "I want this," "transaction" never appears.
- Instructions use active voice and short sentences: "Tap the photo to retake it." Over "The photo can be retaken by tapping on it."

**Predictable layout:**
- Tab bar never moves, never reorders, never hides.
- Map/list toggle is always in the same position (top-right of map view).
- No layout shifts after content loads. Skeleton screens match final layout dimensions exactly.
- Back navigation always returns to the previous screen in the expected state: no re-scrolling, no lost context.

**Reduced decision load:**
- Maximum 10 categories. No sub-categories. Fewer choices, faster decisions.
- Posting flow: 5 steps maximum. Each step has one primary decision.
- Interest expression: one tap. No message required. The social friction of "what do I say?" is eliminated by design.

**Explicit feedback for every action:**
- "Posted." "Interest sent." "Exchange complete." No ambiguity.
- No silent state changes. If something happened, the user knows.

**No time pressure. Anywhere.**
- No countdown timers (the 5-second undo is the one exception, and it's not destructive if missed).
- No "3 others are interested" urgency messaging. Ever. This is a design principle.
- Batched notifications keep sellers from feeling rushed to respond.

---

**Motor Accessibility**

| Requirement | Specification | Measurement |
|---|---|---|
| Minimum tap target | 44x44px (WCAG 2.2 AA) | All interactive elements measured. Smallest current target: filter chips at 44x32px. **Must increase to 44x44px.** |
| Gesture alternatives | Every swipe gesture has a tap alternative | Swipe-to-interest has "I want this" button. Pinch-to-zoom radius has tap presets (5/10/20 min). |
| Touch target spacing | Minimum 8px between adjacent targets | Measured across item cards, filter chips, tab bar items |
| One-handed reachability | Primary actions in thumb zone (bottom 60% of screen) | "I want this" button: bottom-aligned on item detail. Post FAB: center of tab bar. |
| Camera alternative | Gallery upload available on all photo inputs | Camera permission denial gracefully falls back to gallery picker |
| No drag interactions | Radius slider replaced with tap presets | No drag-to-reorder, no drag-to-dismiss. All interactions are tap or swipe (with tap alternative). |
| Reduced motion | `prefers-reduced-motion` respected | Spring animations become instant transitions. Map panning becomes jump-to-location. Skeleton shimmer becomes static placeholder. |

---

**Location-Specific Accessibility Concerns**

- **Physical mobility:** Users who cannot walk to pickups can set "Delivery welcome" flag on their profile. Visible to sellers as: "This neighbor has requested delivery. Can you bring it to them?" Optional for sellers, never required.
- **Spatial cognition:** Distance shown in both time and distance: "4 min walk (0.2 mi)," serving users who process spatial information differently. On map view, distance is also represented visually by the radius circle.
- **Low vision and map readability:** Map pins use high-contrast colors with luminance differentiation, not just hue. Price labels on pins use minimum 14px text. "Free" items use a distinct pin shape to be distinguishable without color perception.

## /transpose
agent: Wren
summary: Planned the phone and web experiences, offline use and moving between devices.

Most exchanges happen on a phone, on the move: passing a "FREE" sign, browsing from the porch. The laptop suits posting a weekend's decluttering in one sitting. And the design plans for the sidewalk where the signal drops.

### Output

**Platform Strategy: Nearby**

| Platform | Role | Expected usage share | Core value proposition on this platform |
|---|---|---|---|
| **Mobile native (iOS + Android)** | Primary | 90% | Camera-first posting, GPS-powered map, push notifications, on-the-move browsing |
| **Web (nearby.app)** | Secondary | 8% | Batch posting from desktop, larger map canvas, account management, print materials |
| **Notifications (push + digest)** | Tertiary | 2% (entry point) | Daily digest drives re-engagement; pickup coordination nudges drive exchange completion |

---

**Mobile (Primary Platform)**

Mobile is the product. Nearby is designed for someone walking through their neighborhood, phone in hand, glancing at what's around them. The interaction model is built for this context:

- **Camera-first posting:** Tap "+", camera opens instantly. No menu, no screen selection, no "what kind of post?" The phone's camera is the listing creation tool; everything else (title, price, category) is supporting metadata.
- **GPS-powered map:** The primary interface uses the one thing phones do that laptops can't: know where you are in real time. Map pins update as you walk.
- **Push notifications:** Interest alerts, pickup reminders, daily digest. Notification budget: max 5/day. Batch interest notifications every 15 minutes to prevent alert fatigue.
- **Thumb-zone optimization:** "I want this" button bottom-aligned on item detail. Post FAB center of tab bar. All primary actions reachable one-handed. No interactions require top-of-screen reach.
- **Deep links:** "Check out this bookshelf near you" from iMessage/WhatsApp opens directly to item detail. If recipient doesn't have the app, opens web preview with app store link.

**What mobile doesn't do well:** Long-form descriptions (keyboard is awkward), batch operations (posting 15 items one by one is painful), account management (settings are fine on desktop).

---

**Web (Secondary Platform)**

The web experience is a complement. Feature parity is explicitly not a goal. The web version exists for three use cases that mobile handles poorly:

1. **Batch posting:** Upload 10 photos from a desktop folder, write descriptions with a full keyboard. Drag-and-drop photo upload. Multi-item posting flow with "Post another" shortcut.
2. **Larger map canvas:** Show more of the neighborhood at once. Hover previews on pins (vs. tap on mobile). Zoom controls + keyboard shortcuts for power browsing.
3. **Account management:** Settings, notification preferences, privacy controls, exchange history. These are configure-once tasks better served by a larger screen.

**Web-specific features:**
- Print-friendly view for community boards: "Post this QR code at your coffee shop" generates a branded flyer with QR link to the neighborhood's Nearby page.
- Embeddable widget for neighborhood websites and HOA pages: live feed of recent listings in a specific radius.

**What web doesn't do:** Push notifications (email digest only). Camera-first posting (file upload instead). Real-time location (address-based, not GPS).

---

**Offline Design Patterns**

Nearby must work on sidewalks, in basements, and on subway platforms, where losing signal is normal.

| Action | Online behavior | Offline behavior | Transition back |
|---|---|---|---|
| Browse items | Live feed from server | Cached items from last fetch. Stale badge after 1 hour: "Last updated 2h ago." | Auto-refresh on reconnect. Diff-only update (don't re-fetch everything). |
| View item detail | Live data | Cached detail if previously viewed. If not cached: "You're offline. This item's details will load when you're back." | Auto-load on reconnect |
| Post an item | Photo upload → server processing → publish | Full draft saved locally (photo + all metadata). "Your listing will go live as soon as you're back online." Pending indicator. | Auto-publish on reconnect. If photo upload fails, retry with backoff. |
| Express interest | Immediate server call + optimistic UI | Queued locally. "Interest will be sent when you're back online." Pending indicator on item card. | Auto-send on reconnect. If item no longer available, notify: "This item was taken while you were offline." |
| Messaging | Real-time delivery | Quick replies queued. "Message will send when you're back online." | Auto-send in order on reconnect |
| Location | Live GPS | Last-known location used. Badge: "Showing items near your last known location." | GPS lock clears badge; map re-centers on current position |

**Offline design principle:** Never lose user work. Never silently fail. Always show what's happening and what will happen when connectivity returns. The user should trust that their actions are preserved, even without signal.

---

**Cross-Device Continuity**

| Scenario | How it works | Sync mechanism |
|---|---|---|
| Browse on phone, continue on laptop | Viewed items, saved items, and current radius sync across devices. Open laptop → see same neighborhood view, same filter state. | Server-side session state, synced on load |
| Draft listing on desktop, photos from phone | Desktop creates listing with title, price, description. Phone photos auto-attach via cloud photo library integration (iCloud, Google Photos). | Cloud photo library API + draft sync |
| Pickup coordination | Active exchange visible on all devices. Quick replies sent from whichever device is in hand. | Real-time sync via server |
| Notifications | Phone gets push. Desktop gets none. Only one device notifies to avoid alert duplication. | Device priority: most-recently-active device gets push; others get in-app badge only |

**Cross-device anti-pattern avoided:** No "continue where you left off" interstitials. The state just syncs. If you open the laptop and the app shows your neighborhood, you don't need a modal telling you it synced.

## /localize
agent: Wren
summary: Mapped what changes across cultures: trust signals, payment norms, content and right-to-left layouts.

A local marketplace runs on local norms: how people negotiate, how they build trust, what they'll trade with strangers, and what "neighbor" means. The work names the assumptions in the current design and what changes in each market.

### Output

**Cultural Adaptation Matrix: Nearby**

---

**Trust Signals by Market**

What builds trust between strangers in Portland, Oregon destroys it in Osaka, Japan. Each market needs its trust model rebuilt for local norms.

| Market | Primary trust signal | Secondary trust signals | What to avoid | Design adaptation |
|---|---|---|---|---|
| **US/Canada** | Neighborhood tenure ("Your neighbor since 2024") | Mutual connections, exchange count, approximate distance | Star ratings (too transactional) | Default design. Casual tone. Direct contact acceptable. |
| **Japan** | Platform mediation (the platform vouches for users) | Account verification level, membership duration, formality of communication | Direct contact before platform introduction. Casual first-message tone. | Add honorific-aware messaging. Platform sends the first introduction message. Seller "accepts meeting request" rather than "responds to interest." |
| **India** | Community/family references ("Also known in [community name]") | Phone number verification, UPI payment linked, mutual community memberships | Anonymity (signals low investment/trust) | Phone verification weighted more heavily. Community group affiliations visible on profile. Negotiation built into the flow (counter-offer option). |
| **Germany** | Data minimalism + explicit consent | Account age, verified email, GDPR-compliant data handling badge | Showing proximity without consent ("3 min walk" feels surveillant) | Distance shown only after explicit opt-in. Privacy controls on first screen of onboarding. Default radius display: "In your neighborhood" (no distance). |
| **Brazil** | Social warmth (profile photos, friendly notes) | Exchange count, post-exchange notes ("Adorei! Obrigada!"), responsiveness rating | Cold, transactional interfaces | Profile photos encouraged (not required). Post-exchange note option: short freeform "thanks" visible on profile. Social layer is the trust layer. |

---

**Payment Patterns**

Nearby is platform-agnostic on payment by design. The platform does not process, mediate, or record payments. "Arrange with seller" is the universal default. But payment norms shape the entire exchange experience, and the UI must accommodate them:

| Market | Dominant payment method | Negotiation norm | UI adaptation |
|---|---|---|---|
| **US** | Venmo, cash at pickup | Rare for items under $20. Listed price = actual price. | Price displayed as final. No counter-offer flow in MVP. |
| **India** | UPI (PhonePe, Google Pay), cash | Expected and healthy. First offer is opening position. | Add "Make an offer" button alongside "I want this." Counter-offer flow: buyer suggests price → seller accepts/counters/declines. |
| **Japan** | Cash in envelope, PayPay | Almost nonexistent. Listed price is the price. | Price displayed with no negotiation affordance. "I want this" = commitment to listed price. |
| **Mexico** | Cash, MercadoPago | Expected for items over ~200 MXN | Same as India: counter-offer flow enabled by market. |
| **Germany** | Bank transfer, cash, PayPal | Mild; one counter-offer acceptable, haggling is not. | "Suggest a different price" (singular) rather than ongoing negotiation. |

---

**RTL Support & Layout Mirroring**

Full layout mirroring for Arabic, Hebrew, and Urdu. The whole spatial model flips along with the text:

- Navigation: tab bar order reverses (Map on right, Profile on left)
- Map controls: zoom buttons move to left side. Radius presets read right-to-left.
- Item cards: thumbnail moves to right, text aligns right
- Posting flow: step indicator reads right-to-left. "Next" button on left, "Back" on right.
- Swipe gestures: swipe-to-interest reverses direction (swipe left instead of right)
- Numbers: Western Arabic numerals (0-9) for prices in all markets. Eastern Arabic numerals (٠-٩) available as user preference for display.

**Text expansion budget:**
- German: 30-40% longer than English. "I want this" becomes "Interesse bekunden" (18 to 20 chars, manageable). But "Your neighbor since March 2025" becomes "Ihr Nachbar seit März 2025" or "Dein Nachbar seit..." (formal vs. informal address decision required per market).
- Japanese: Generally shorter in character count but may require different line-height for readability.
- Button labels: designed with 40% expansion headroom. Max English label length: 20 characters; max translated: 28 characters before truncation.

---

**Content & Communication Adaptation**

| Dimension | US baseline | Adaptation needed |
|---|---|---|
| Iconography | Handshake icon = exchange complete | Handshake doesn't resonate universally. Use checkmark as universal fallback. Test per market. |
| Photo norms | Item-centric (faces incidental) | In some markets, showing faces is avoided. Default to item-focused camera framing. No face detection prompts. |
| Modesty in listings | Clothing shown on hangers or flat-lay | Conservative markets need content guidelines: no mannequin photos, no body-showing for clothing. Community organizers set local norms. |
| Notification tone | Casual: "Hey, someone wants your bookshelf" | Japan: formal register. "お客様の本棚に興味を持った方がいます。" Germany: formal unless user selects "du" (informal). |
| Time formats | 12-hour, Month/Day | 24-hour in most markets. Day/Month in EU, Latin America. Relative time ("2 hours ago") is universal; use as primary. |
| Currency display | $15, $0 = "Free" | Localized currency symbol + format. "Free" translated per market. "¥0" is not equivalent to "Free" in Japan; use the word. |

---

**Regulatory Compliance by Market**

| Regulation | Market | Impact on Nearby | Required changes |
|---|---|---|---|
| **GDPR** | EU/EEA | Location data is personal data under GDPR. Processing requires explicit consent beyond app-level location permission. | Explicit consent flow: "Nearby uses your location to show items near you. Your exact location is never shared with other users. [Allow] / [Learn more]". Right to deletion includes all location history, exchange history, and profile data. Data portability: user can export all their data. |
| **PIPL** | China | Data localization required. All data from Chinese users must be stored on servers within China. | Separate infrastructure and a separate legal entity, decided at market entry. |
| **LGPD** | Brazil | Similar scope to GDPR. Portuguese-language privacy policy required. Consent must be granular. | Portuguese privacy policy. Granular consent: location, notifications, contacts (each separate). DPO (Data Protection Officer) appointment required. |
| **CCPA/CPRA** | California | Right to know, right to delete, right to opt out of sale. Location data is "personal information." | "Do Not Sell My Personal Information" link. Disclosure of data categories collected. 45-day response window for deletion requests. |
| **Digital Markets Act** | EU | If Nearby reaches gatekeeper status (unlikely near-term), interoperability requirements apply. | Monitor. Not actionable at current scale. |

### Philosopher

Does the Western marketplace, with individual sellers, posted prices and two-party exchange, fit other cultures? In many communities, things circulate through family networks, places of worship or community centers and are never listed. A bazaar expects haggling. A gift economy expects favors returned over time. Is a marketplace app importing a frame that fits only some of its users? What would Nearby look like built for circular exchange?

## /measure
agent: Vigil
summary: Defined success by community health and trust, with counter-metrics.

Gross merchandise value is the wrong north star: a neighborhood where everyone gives things away is doing better than one where everyone haggles. The framework tracks exchange density, trust and community health, with counter-metrics that flag growth that harms the product.

### Output

**Measurement Framework: Nearby**

---

**North Star Metric**

**Weekly Exchange Density:** Completed exchanges per 1,000 households per week, measured per neighborhood.

- **Formula:** (Completed exchanges in neighborhood N in week W) / (Estimated households in neighborhood N / 1,000)
- **Target:** 15+ exchanges/1k households/week in neighborhoods active for 3+ months
- **Data source:** Server-side exchange completion events, census household estimates per defined neighborhood boundary
- **Measurement frequency:** Weekly, with 4-week rolling average for trend
- **Why this metric:** It asks the question that matters: are neighbors exchanging things? Unlike MAU (which rewards browsing without action), GMV (which values expensive items over community health), or listing count (which rewards posting without outcomes), exchange density measures completed value delivery.

---

**Primary Metrics**

| Metric | Definition | Target | Signal it tracks | Data source |
|---|---|---|---|---|
| Activation rate | % of signups who post or express interest within 7 days | 40% | New users finding value quickly | Server: account creation → first post or interest event |
| Listing-to-exchange rate | % of posted items that result in a completed exchange | 60% | Supply-side health: are listings useful? | Server: listing created → exchange completed events |
| Time to exchange | Median hours from listing to completed pickup | <48 hours | Speed of the exchange loop | Server: listing timestamp → exchange completion timestamp |
| Repeat engagement | % of users with 2+ exchanges per month | 30% | Sustained value: people coming back | Server: exchange events per user per calendar month |

**Goal-Signal-Metric chains:**

1. **Goal:** Neighbors can quickly find useful items nearby.
   **Signal:** Users browse and express interest within a single session.
   **Metric:** Browse-to-interest rate >15% per session; median time from app open to first interest expression <3 minutes.

2. **Goal:** Posting an item is effortless.
   **Signal:** Users who start posting complete it.
   **Metric:** Post-start-to-publish completion rate >85%; median time to post <45 seconds for returning users.

3. **Goal:** Exchanges happen after interest is expressed.
   **Signal:** Accepted interests convert to completed exchanges.
   **Metric:** Interest-to-completion rate >70%; ghost rate <10%.

---

**Secondary Metrics: Trust & Community Health**

| Metric | Definition | Target | Why it matters |
|---|---|---|---|
| "As described" rate | % of exchanges where optional feedback = "As described" | 90%+ | Proxy for listing quality and honest representation |
| Ghost rate | % of accepted interests where pickup doesn't happen | <10% | Measures reliability; ghosts destroy trust faster than anything |
| Message-to-exchange ratio | Average messages exchanged per completed transaction | <3 | Fewer messages means better coordination design; more messages means friction |
| Neighborhood coverage | % of city neighborhoods with 10+ active users | Grow 5%/month | Growth must be measured by neighborhood. 10 users per neighborhood is minimum viable density. |
| Free item ratio | % of listings priced at $0 | 25%+ | Generosity is a health indicator. A neighborhood where nobody gives anything away is not a community |
| Organizer engagement | % of neighborhoods with at least one active organizer | 50% | Organizers are the immune system: they moderate, seed, and set norms |
| Cold start survival rate | % of newly launched neighborhoods that reach 10+ active users within 30 days | 40% | If cold start kills neighborhoods, growth is a leaky bucket |

---

**Counter-Metrics (What We Refuse to Optimize)**

These are guardrails. If a primary metric improves while a counter-metric degrades, something is wrong. Counter-metrics are reviewed alongside primary metrics in every measurement review. They are not optional.

| Counter-metric | Why we refuse to optimize it | What it would do if we did |
|---|---|---|
| **Time in app** | More time means the UX is failing. If someone browses for 20 minutes, discovery is broken. | Optimizing time-in-app leads to infinite scroll, algorithmic feeds, and engagement traps. The opposite of what Nearby should be. |
| **Notification open rate** | Optimizing this leads to spam. Batch notifications exist for a reason. | We'd send more frequent, more urgent notifications. "3 people want your item!" urgency tactics. Notification fatigue. |
| **GMV (Gross Merchandise Value)** | A free item exchanged is as valuable as a $50 item sold. | GMV-chasing would push us to promote expensive items, discourage free listings, and add transaction fees. We'd become eBay. |
| **DAU/MAU ratio** | High DAU/MAU means people feel compelled to check daily. That's addiction. | We'd add streaks, daily rewards, FOMO triggers. The opposite of respecting user time. |
| **Blended user acquisition cost** | Must track per-neighborhood, not aggregate. | A cheap user in an empty neighborhood is worth nothing. Blended CAC hides geographic waste. |

---

**Experimentation Plan**

| Experiment | Hypothesis | Metric | Method | Duration | Min sample |
|---|---|---|---|---|---|
| Walking radius default: 10 min vs 15 min | Wider default radius increases exchange density in low-density neighborhoods without diluting trust | Exchange density, browse-to-interest rate, "as described" rate | A/B test by neighborhood (everyone in a neighborhood sees the same radius) | 4 weeks | 20 neighborhoods per arm |
| Quick replies only vs free-text messaging from start | Quick-reply-only messaging reduces ghost rate and harassment without reducing exchange completion | Ghost rate, exchange completion rate, report rate | A/B test by user | 6 weeks | 500 users per arm |
| Daily digest holdback | Daily digest increases browse sessions without increasing time-in-app | Browse sessions per week, time-in-app per session, exchange density | Holdback test (10% of users don't receive digest) | 4 weeks | 1,000 users in holdback |
| Post confirmation: minimal vs celebratory | Stronger post-publish confirmation improves first-time poster retention | 7-day retention for first-time posters, second-post rate within 14 days | A/B test by user | 4 weeks | 300 first-time posters per arm |
| Cold start seed strategy: imported listings vs organic only | Seeding neighborhoods with imported Buy Nothing listings accelerates cold start survival | Cold start survival rate (10+ active users in 30 days), exchange density at day 30 | A/B test by neighborhood | 8 weeks | 10 neighborhoods per arm |

**Experiment governance:** No experiment ships without a pre-registered hypothesis, primary metric, counter-metric, and minimum sample size. Results are reviewed by product and design together: "did it go up for the right reasons?" matters as much as "did the number go up?"

## /specify
agent: Rune
summary: Packaged the posting scope for the build, with one page that says how the pieces fit.

Posting was approved while browsing and the exchange were still being redesigned, so posting goes to the build first. The handoff is the project's own files: brief, blueprint, flows, site map, wireframes, copy, states, accessibility and metrics. The one new page says how they fit: each screen's flow step, navigation, service and states, and what the builder decides. Before packaging, Rune checked that the brief and the posting screens were approved, and logged the ethical review. Browsing and the exchange get their own package once item detail and the pickup screen are drawn.

### Output

# Nearby: posting

Nearby is a hyperlocal marketplace for the people within walking distance: neighbors post what they are getting rid of, neighbors nearby see it on a map and in a list, and an exchange ends at someone's door. This package covers posting, for sellers clearing a home under time pressure, and Browse as the home the flow returns to. Browsing in full and the exchange from interest to pickup are packaged separately once item detail and the coordination flow are settled.

## Contents

| Artifact | Path | What it holds |
|---|---|---|
| Brief | ../brief-nearby.md | The opportunity, the hypothesis, the MVP scope, the guiding principles |
| Service blueprint | ../blueprint-nearby.html | Actors, frontstage and backstage, the walking radius, moderation, dependencies |
| Flows | ../journey-nearby.html | Posting, with the three arcs it was designed against; discovering, buying and messaging, still moving |
| Site map | ../sitemap-nearby.html | The tab bar, the category taxonomy, search and browse |
| Wireframes | ../wireframes-nearby.html | Post an item with its pickup step and preview, Posted, and Browse, with the prototype view of the posting flow |
| Copy deck | ../copy-nearby.md | Voice, empty states, errors, trust signals |
| State inventory | ../states-nearby.md | Ghost sellers, misrepresentation, cold start, abuse, limits, offline |
| Accessibility audit | ../accessibility-nearby.md | Screen reader flow, keyboard map, remediation plan |
| Adaptation specs | ../adaptation-nearby.md | Mobile-first and web, offline, cross-device continuity |
| Localization requirements | ../localization-nearby.md | Trust signals, payment norms, content, RTL |
| Measurement framework | ../metrics-nearby.md | Community health and trust density, counter-metrics, the learning plan |
| Decision log | ../decisions.md | What was decided, defaulted and rejected, and the ethical review |

## How the pieces fit

| Screen | Wireframe | Flow step | Navigation | Service behind it | States | Copy |
|---|---|---|---|---|---|---|
| Browse | Browse, map and list | Home; Flow 2's entry, the rest of discovering waits on item detail | Explore and List tabs | Walking-radius query; the listing feed | Empty neighborhood, approximate location, offline | Empty states; the Free badge; Pending as plain status |
| Post an item | Post an item, with pickup and preview | Flow 1, steps 1 to 5 | Post tab | Photo upload; listing creation; the listing cap | Failed upload, lost connection, denied camera, cap reached | Field hints; the audience line above the commit button |
| Posted | Posted | Flow 1, confirmation | Post tab | Seller notification batching | Quiet neighborhood | The confirmation that names the audience |

## Left to the builder

- Visual design: color, type, spacing, and motion beyond what the flows specify
- The stack
- The walking-radius implementation: the design fixes its inputs (location, density, street network, barriers) and its tiers (400, 800 and 1,600 meters); the isochrone computation and its caching are the builder's
- Payment: out of scope by the brief; the product moves no money

## Open questions

- Which messaging ships in the MVP: one-tap interest alone, or quick replies after the seller accepts? (brief; flows 3 and 4)
- Do Trade and Wanted ship? (brief; Flow 1, step 3)
- What defines a neighborhood: the walking radius or the named area? (blueprint; site map)
- Are the daily digest and the new-item dots opt-in? (blueprint; measurement framework)
- When are item detail, Activity and the pickup screen drawn, so browsing and the exchange can be packaged? (evaluation; flows 2 to 4)

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
8. **Decide today: quick replies once the seller accepts, no open messaging** | Visual: the recommended option beside the drawn one | Source: /blueprint decision documentation; /journey flow 4; /evaluate, both blocking findings
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
