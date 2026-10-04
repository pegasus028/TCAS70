/* ===========================================================================
   TCAS70 LAUNCHPAD — MOCK 4 · STRETCH  (m4)
   One notch harder than TCAS69: more C1 vocabulary, subtler distractors,
   longer options. All sources are adapted/fictional for TCAS70 practice.
   =========================================================================== */

/* ------------------------------------------------ SECTION I dialogues */
var M4_C1 = [
  {who:'Situation', text:'At a clinic'},
  {who:'Nurse', text:'Good morning. Please have a seat and roll up your sleeve. I’m going to check your blood pressure before you see the doctor.'},
  {who:'Patient', text:'Of course. ___(1)___ My hands are already shaking.'},
  {who:'Nurse', text:'You’re not the first, and you won’t be the last. Just rest your arm on the table and breathe normally. … Hmm, 150 over 95. That’s on the high side.'},
  {who:'Patient', text:'___(2)___ Is something seriously wrong with me?'},
  {who:'Nurse', text:'Not necessarily. Readings are often higher in a clinic than at home. We call it “white-coat anxiety” — your body reacts to the stress of simply being here.'},
  {who:'Patient', text:'So should I start taking medicine right away?'},
  {who:'Nurse', text:'___(3)___ We’ll measure it again in ten minutes, once you’ve had a chance to calm down. If it’s still high, the doctor may ask you to check it at home for a week.'},
  {who:'Patient', text:'Ten minutes? ___(4)___ I’ll sit here and think about beaches.'},
  {who:'Nurse', text:'Good plan. And try not to cross your legs — that can push the number up, too.'}
];

var M4_C2 = [
  {who:'Situation', text:'Two friends after an esports tournament'},
  {who:'Oat', text:'So that’s it. Knocked out in the quarter-finals. Three months of practice, and it was all over in twenty minutes.'},
  {who:'Pun', text:'I watched the whole match. ___(5)___ You were one team fight away from winning.'},
  {who:'Oat', text:'Maybe, but I missed the last skill shot. Everyone saw it. The live chat was brutal.'},
  {who:'Pun', text:'Forget the chat. ___(6)___ Remember last year? You didn’t even get past the group stage.'},
  {who:'Oat', text:'True. I guess we’ve come a long way.'},
  {who:'Pun', text:'Exactly. And the team that beat you went on to win the whole tournament. ___(7)___'},
  {who:'Oat', text:'Ha! I suppose losing to the champions isn’t so bad. But I still feel I let the others down.'},
  {who:'Pun', text:'Come on, it takes five players to lose a match, not one. ___(8)___ the season isn’t over — the national qualifier is in May.'},
  {who:'Oat', text:'You’re right. May it is, then. Now, where’s that bowl of noodles you promised me?'}
];

var M4_C3 = [
  {who:'Situation', text:'Neighbours in a condominium during a flood warning'},
  {who:'Aom', text:'Krit, did you get the cell broadcast on your phone? Heavy rain is expected tonight, and the canal behind us could overflow.'},
  {who:'Krit', text:'I did. ___(9)___ The building manager wants everyone who parks in the basement to move their car up to the fourth floor of the car park by eight o’clock.'},
  {who:'Aom', text:'Oh no, my car’s down there. ___(10)___ I’m hopeless at reversing up those narrow ramps.'},
  {who:'Krit', text:'No problem. Give me your keys, and I’ll do it after I’ve moved mine.'},
  {who:'Aom', text:'You’re a lifesaver. Oh, and ___(11)___ has anyone checked on Grandma Somsri on the ground floor? She lives alone.'},
  {who:'Krit', text:'Good point. She can’t manage the stairs if the lift stops working. The manager is handing out sandbags in the lobby at six — let’s take a few to her door and ask if she’d like to stay with one of us tonight.'},
  {who:'Aom', text:'Great idea. And thanks again for sorting out my car. ___(12)___'},
  {who:'Krit', text:'Don’t mention it. That’s what neighbours are for.'}
];

var M4_LONG = [
  {who:'Situation', text:'A job interview at a café'},
  {who:'Manager', text:'Good afternoon. Please, take a seat. I’m the manager here. Thanks for coming in at such short notice. ___(13)___ let’s start with the obvious question: why do you want to work at Brew & Bloom?'},
  {who:'Nan', text:'(nervously) Well, I’ve always loved coffee. Actually, no — I mean, I love the atmosphere of cafés. And people. I love people. Sorry, ___(14)___.'},
  {who:'Manager', text:'Don’t worry. Take a deep breath. Now, do you have any experience as a barista?'},
  {who:'Nan', text:'Not as a barista, I’m afraid. ___(15)___ I did help at my aunt’s noodle stall every weekend when I was at primary school, so I can handle a lunchtime rush.'},
  {who:'Manager', text:'A noodle stall? Not the little one next to Ban Suan School, by any chance?'},
  {who:'Nan', text:'Yes! Aunt Lek’s. Do you know it?'},
  {who:'Manager', text:'(pausing) Hmm. ___(16)___ let’s get back to the questions. How would you deal with a customer who complains that his latte is cold?'},
  {who:'Nan', text:'I’d apologise, remake it straight away and maybe offer him a free cookie. ___(17)___ the customer should leave happier than when he arrived.'},
  {who:'Manager', text:'Good answer. Last question: what’s your greatest weakness?'},
  {who:'Nan', text:'Um, I can be a bit clumsy. When I was eight, I spilled a whole bowl of red syrup ice over a classmate’s white uniform on Sports Day. ___(18)___ it was also the day of the class photo.'},
  {who:'Manager', text:'(slowly putting down her pen) ___(19)___ Was the girl’s name Pim, by any chance? Skinny, glasses, sitting in the front row?'},
  {who:'Nan', text:'How on earth did you — wait. PIM? From Grade 3? Oh no.'},
  {who:'Manager', text:'The one and only. I still have that photo, you know. The stain looks like an elephant.'},
  {who:'Nan', text:'(covering her face) Well, I suppose that’s the end of my interview, then.'},
  {who:'Manager', text:'___(20)___ Anyone who can remember a Sports Day that clearly has an eye for detail. You start on Monday — but you’re not allowed anywhere near the syrup.'}
];

/* ------------------------------------------------ SECTION II ads */
var M4_AD1 = { brand:'Mirai Bridge Foundation',
  headline:'One semester in Japan. Zero tuition fees.',
  body:['Spend the Spring Semester 2027 (April–August) at one of our partner universities in Osaka, Fukuoka or Sendai. Study Japanese in the morning, take English-taught courses in the afternoon, and live the culture every day.'],
  bullets:['Open to Thai students currently in M5, M6 or the first year of university',
    'Minimum GPA 3.25 — no Japanese required',
    'COVERED: full tuition, return economy flights, dormitory room, monthly living allowance of ¥60,000',
    'NOT COVERED: compulsory travel insurance (approx. 4,500 baht), visa fee, personal travel within Japan'],
  price:'20 scholarships available · each worth up to 450,000 baht',
  cta:'Apply online by 15 December 2026 at mirai-bridge.example/apply',
  fine:'Required documents: academic transcript; a 500-word essay in English, “What I will bring back to Thailand”; one teacher recommendation; a copy of a passport valid until at least March 2028. Shortlisted applicants will be interviewed online in January 2027. Incomplete applications will not be considered.',
  source:'Adapted for TCAS70 practice' };

var M4_AD2 = [
  { brand:'PulseOne S3',
    headline:'Know your body. Own your day.',
    body:['Our slimmest watch yet — 30% lighter than its predecessor, the S2.'],
    bullets:['Up to 14 days’ battery life','Heart-rate, sleep and blood-oxygen tracking','Water-resistant to 50 m — swim-proof','Works with Android and iOS'],
    price:'6,990 baht · Launch offer: FREE extra strap for the first 500 buyers',
    fine:'Blood-oxygen readings are for general wellness only and are not intended for medical diagnosis. 1-year warranty.',
    source:'Adapted for TCAS70 practice' },
  { brand:'Kinetix Band Pro',
    headline:'Train smarter. Recover faster.',
    body:['Recommended by coaches. Built for athletes.'],
    bullets:['Built-in GPS — leave your phone at home','AI Coach designs your weekly training plan','Up to 7 days’ battery (3 days with GPS always on)','Water-resistant to 100 m','Compatible with Android phones only'],
    price:'8,490 baht · or 0% interest instalments over 10 months',
    fine:'AI Coach requires a monthly subscription of 99 baht after a free 3-month trial. 2-year warranty.',
    source:'Adapted for TCAS70 practice' }
];

/* ------------------------------------------------ SECTION II review */
var M4_REVIEW = 'Review: FreshCrate Meal Kits — Three Months in My Kitchen\n\n' +
'(1) When my flatmate signed us up for FreshCrate, a meal-kit subscription that delivers pre-measured ingredients and illustrated recipe cards twice a week, I was skeptical. I am, by my own admission, someone whose cooking repertoire begins and ends with instant noodles. Three months and twenty-four boxes later, here is my honest verdict.\n\n' +
'(2) First, the good news. The recipes are genuinely excellent. Each card breaks a dish down into six or seven clearly photographed steps, and even the more ambitious meals — a green curry with homemade paste, a Japanese-style salmon rice bowl — rarely took me more than 35 minutes. For someone who once managed to burn rice in a rice cooker, that is no small achievement.\n\n' +
'(3) The ingredients arrive fresh and precisely portioned, so very little ends up in the bin. Before FreshCrate, we routinely threw away half-used bunches of herbs and wilted vegetables; now our food waste has noticeably shrunk.\n\n' +
'(4) Having said that, the packaging tells a different story. Every carrot and every spoonful of fish sauce arrives in its own plastic bag or tiny bottle, and the insulated liners and ice packs pile up faster than we can reuse them. The company insists the liners are recyclable, but the nearest drop-off point is on the other side of the city.\n\n' +
'(5) Then there is the price. At 1,590 baht for three dinners for two people, each portion costs about 265 baht — less than most restaurants, but roughly double what the same dish costs when I buy the ingredients at the market myself. Skipping a week takes two taps in the app; cancelling altogether, however, requires a phone call, something the website mentions only in the small print.\n\n' +
'(6) So would I recommend FreshCrate? Surprisingly, yes — but not for the reason it advertises. It is not a sensible way to eat every night; it is an expensive but remarkably effective cooking course. Last weekend I cooked a three-course dinner for my parents without a single recipe card, and on Monday I cancelled our subscription. That, I think, is the best compliment I can pay it: it worked so well that I no longer need it.';

/* ------------------------------------------------ SECTION II news */
var M4_NEWS = '(1) Cracks, checklists and a city that learned to look up: Bangkok’s building-safety lessons\nBy Chronicle reporter Napat Sornsuwan\n\n' +
'(2) When a magnitude 7.7 earthquake struck Myanmar on 28 March 2025, few people in Bangkok, hundreds of kilometres away, expected to feel it.\n\n' +
'(3) Yet within seconds, tall buildings across the capital began to sway, and office workers hurried down emergency stairs into the streets.\n\n' +
'(4) Most shocking of all, a high-rise that was still under construction collapsed — a sight that stunned a city which had long considered itself safely distant from earthquake zones.\n\n' +
'(5) More than a year on, engineers, residents and officials are still asking what the disaster revealed, and what has changed since.\n\n' +
'(6) The first lesson, experts say, is that distance offers less protection than people assume. “Bangkok sits on soft clay, which behaves a little like jelly,” explained Dr Worawit Kaewmanee, a structural engineer at Chao Phraya University. “Long, slow waves from a distant earthquake can be amplified, and tall buildings are the ones that feel it most.”\n\n' +
'(7) The second lesson concerns inspection. In the weeks after the quake, building managers were flooded with requests from residents worried about cracks in their walls.\n\n' +
'(8) Many of those cracks turned out to be cosmetic: damage to plaster and partition walls rather than to the columns and beams that hold a building up. But telling the two apart requires a trained eye, and qualified inspectors were in short supply.\n\n' +
'(9) “People photographed every hairline crack and posted it online,” said a condominium manager in the east of the city, who asked not to be named. “Some residents refused to go home for a week, even after an engineer had declared the building safe.”\n\n' +
'(10) A Chronicle survey of 500 condominium residents this year found that 62 percent now know where their building’s emergency exits are, compared with 29 percent who said they had known before the earthquake.\n\n' +
'(11) Yet only one in five said they had ever taken part in an evacuation drill.\n\n' +
'(12) Critics argue that awareness is not the same as preparedness. “Knowing where the stairs are is a start,” said Dr Worawit. “But in a real emergency, people follow habits, not posters. Drills build habits.”\n\n' +
'(13) Engineers also warn against complacency now that the headlines have faded. Buildings designed before modern earthquake-resistant standards may need to be strengthened, a process known as retrofitting, which is costly and disruptive.\n\n' +
'(14) Some owners, particularly of older mid-rise blocks, have postponed such work, arguing that another quake of that size may not happen for decades.\n\n' +
'(15) “That is exactly the wrong conclusion to draw,” Dr Worawit said. “Earthquakes don’t make appointments. The best time to prepare was before 2025. The second-best time is now.”';
var M4_NEWS_SRC = 'The Bangkok Chronicle (fictional) — adapted for TCAS70 practice';

/* ------------------------------------------------ SECTION II visuals */
var M4_VIS1 = { kind:'line', title:'Global average temperature compared with 1850–1900, 2015–2025 (selected years)', unit:'°C',
  labels:['2015','2016','2018','2020','2022','2023','2024','2025'],
  series:[ {name:'Global average', values:[1.1, 1.3, 1.1, 1.3, 1.2, 1.5, 1.6, 1.5]},
           {name:'Thailand', values:[0.9, 1.4, 1.0, 1.2, 1.0, 1.4, 1.9, 1.4]} ],
  note:'Figures show how much warmer each year was than the 1850–1900 average. Values are rounded and approximate, for illustration and practice only; they are not official data.',
  source:'Adapted for TCAS70 practice' };

var M4_VIS2 = { kind:'flow', title:'Sorting household waste',
  steps:[ 'Pick up the item you want to throw away.',
    {q:'1. Is it food or garden waste (e.g. peels, leftovers, leaves)?', yes:['ORGANIC → green bin, or add it to a compost heap'], no:['Go to question 2']},
    {q:'2. Is it paper, glass, metal, or plastic marked 1, 2 or 5?', yes:['Can it be cleaned of food and grease? YES → rinse, dry, sort by material → yellow bin','NO → treat it as general waste → grey bin'], no:['Go to question 3']},
    {q:'3. Does it contain chemicals or a battery (e.g. batteries, paint, medicine, light bulbs)?', yes:['HAZARDOUS → seal it in a bag; take it to a special collection point (first Saturday of each month)'], no:['GENERAL → grey bin']},
    'Close the bin lid to keep animals and rain out.' ],
  note:'Never put hazardous waste in any household bin.',
  source:'Adapted for TCAS70 practice' };

/* ------------------------------------------------ SECTION II articles */
var M4_ART1 = 'Ultra-processed food: convenient, cheap and quietly risky\n\n' +
'(1) Walk down the aisles of any convenience store in Bangkok and you will find shelves stacked with food that would have puzzled your great-grandparents: flavored crackers that never go stale, sausages in a perfect pastel pink, instant noodles with a sachet of powder that tastes of tom yum without containing a single stalk of lemongrass. Nutrition scientists have a name for such products — ultra-processed foods — and a growing body of research suggests that we should think twice before making them the backbone of our diet.\n\n' +
'(2) The term comes from the NOVA classification, a system developed by Brazilian researchers in the late 2000s. Instead of sorting food by nutrients such as fat or sugar, NOVA sorts it by how much it has been processed. Group 1 contains unprocessed or minimally processed foods: fresh fruit, eggs, rice and plain milk. Group 2 covers cooking ingredients such as oil, salt and sugar. Group 3, processed foods, includes simple products made by combining the first two groups, such as cheese, canned fish and freshly baked bread. Group 4, the ultra-processed category, is different in kind rather than degree: these are industrial formulations built largely from substances extracted from foods, such as starches, protein isolates and hydrogenated oils, and held together by additives rarely found in a home kitchen.\n\n' +
'(3) Those additives are the clearest fingerprint of ultra-processing. Emulsifiers keep oil and water from separating; flavor enhancers make cheap ingredients taste rich; colorings make them look fresh; and sweeteners deliver sweetness without sugar. None of these is necessarily dangerous on its own, and most have been approved by food-safety authorities. The concern is rather what they make possible: food that is engineered to be eaten quickly, in large amounts, and without ever making us feel quite full.\n\n' +
'(4) The evidence against such products is striking. Large observational studies on several continents have linked diets high in ultra-processed food to higher rates of obesity, type 2 diabetes, heart disease and depression. In one small but influential experiment, volunteers who were given ultra-processed meals for two weeks ate roughly 500 more calories a day than when they were given unprocessed meals, even though the two diets had been carefully matched for sugar, fat and fiber.\n\n' +
'(5) Yet the science is not as settled as some headlines suggest. Observational studies can show that two things occur together, but they cannot prove that one causes the other: people who eat a lot of instant food may also sleep less, exercise less or have less money to spend on fresh produce. Critics also point out that NOVA lumps together products with very different nutritional value. A packet of wholegrain sliced bread and a bottle of fizzy drink may both land in Group 4, but few nutritionists would argue that they are equally harmful.\n\n' +
'(6) What, then, should a sensible eater do? Not panic, for one thing. Ultra-processed food is not poison, and for busy families on a tight budget it can be a genuine lifeline. A more realistic goal is to shift the balance rather than to chase perfection. Dr Kanokwan Suksawat, a nutrition researcher at Siam Metropolitan University, suggests a simple rule: “If the ingredient list reads like a chemistry textbook, treat the product as an occasional snack, not a daily staple.”\n\n' +
'(7) Other small steps can make a big difference: cooking a double portion of rice or curry to eat the next day, keeping fruit and nuts within easy reach, and buying plain yogurt and adding your own fruit rather than choosing the flavored kind. None of these habits requires a cooking course or an expensive trip to an organic market.\n\n' +
'(8) Convenience, after all, is not the enemy. The problem arises when convenience quietly becomes the default, and the default quietly becomes our diet. Ultra-processed food is here to stay; the challenge is to make sure that it stays on the side of the plate, not in the middle of it.';

var M4_ART2 = 'Five myths about introverts\n\n' +
'(1) In a culture that celebrates the loudest voice in the room, introverts are often misunderstood — sometimes even by themselves. The word, popularized by the psychiatrist Carl Jung about a century ago, describes people who tend to direct their energy inward rather than outward. Estimates of how many of us fit that description vary widely, but introverts are hardly a rare species. Here are five common myths about them, and what research actually suggests.\n\n' +
'(2) Myth 1: Introverts don’t like people. Introverts often enjoy company as much as anyone else; the difference lies in what social interaction costs them. After a long party, an extravert may feel recharged, while an introvert may feel like a phone on 5% battery — not unhappy, simply in need of a quiet corner to recharge. Many introverts would choose one deep conversation with a close friend over small talk with twenty strangers. Psychologists sometimes describe this as a difference in each person’s ideal level of stimulation: the same noisy party that energizes one guest can exhaust another.\n\n' +
'(3) Myth 2: Introverts are shy. The two words are often used interchangeably, but they describe different things. Shyness is a fear of social judgment; introversion is a preference for less stimulation. A shy person may long to join a conversation but hold back out of anxiety, whereas an introvert may simply choose not to. Plenty of introverts give confident presentations, and some extraverts are painfully shy.\n\n' +
'(4) Myth 3: Introverts make poor leaders. Loud, charismatic bosses may dominate our idea of leadership, but the picture is more complicated. Studies of teams have found that when employees are proactive and full of ideas, introverted leaders can outperform extraverted ones, partly because they are more inclined to listen and to let other people’s suggestions flourish. Extraverted leaders, by contrast, tend to do better with teams that need clear direction.\n\n' +
'(5) Myth 4: Introverts can’t thrive in the modern workplace. The open-plan office, with its constant noise and interruptions, was hardly designed with introverts in mind. Nor was the endless round of brainstorming meetings in which the first idea spoken aloud tends to win. Yet the workplace is changing. Remote and hybrid work, written collaboration tools and quiet zones have given introverts more control over their environment, and many companies now ask staff to submit ideas in writing before a meeting — a practice that tends to produce a wider range of suggestions. Written tools also reward careful thought over quick reactions, a style that suits many introverts.\n\n' +
'(6) Myth 5: Introverts should try to become extraverts. Perhaps the most damaging myth of all is the idea that introversion is a flaw to be fixed. Introverts can and do act in an extraverted way when a situation demands it: giving a speech, leading a debate, or meeting new people at a conference. Many successful teachers, performers and salespeople describe themselves as introverts who have simply learned when to switch on and when to switch off. What matters is that they are given time afterwards to restore their energy. Forcing a personality to change is neither realistic nor necessary.\n\n' +
'(7) None of this means that introverts are superior, of course. Most people fall somewhere in the middle of the spectrum, and some researchers use the term “ambivert” to describe them. The point is not to rank personalities but to recognize that the quiet student at the back of the class may not be bored, anxious or unfriendly. She may simply be thinking — and, given the chance, she may have the best idea in the room.';
var M4_ART_SRC = 'Adapted for TCAS70 practice';

/* ------------------------------------------------ SECTION III passages */
var M4_TC1 = 'Many parents of Generation Alpha, the children born between roughly 2010 and 2024, worry about how much time their sons and daughters spend on screens. ___(61)___ they started kindergarten, many of these children had learned to swipe a tablet long before they could turn the pages of a book. Researchers, however, are divided over ___(62)___ screens are really as harmful as the headlines suggest. Some studies link heavy use to shorter attention spans and poorer sleep; ___(63)___ find that the type of content matters far more than the number of hours. A video call with a grandparent, ___(64)___, is very different from an hour of scrolling through short clips chosen by an algorithm. Experts therefore recommend that parents ___(65)___ screen time into family life rather than ban it altogether, and that devices be kept out of bedrooms at night.';

var M4_TC2 = 'On the roof of a shopping mall in central Bangkok, rows of kale, basil and morning glory now grow where air-conditioning units once stood. Rooftop farms like this one are spreading across the city, ___(66)___ has surprised even their most enthusiastic supporters. Their appeal is easy to understand. Vegetables grown on a roof travel only a few floors to the restaurant below instead of hundreds of kilometres by truck, and the plants help ___(67)___ the heat that concrete absorbs during the day. Not only ___(68)___ the city’s food supply, but they also give office workers a green place to relax. Yet rooftop farming is not without problems. Many older buildings were never designed to carry the weight of wet soil, water tanks and visitors, so every roof needs ___(69)___ by an engineer before planting begins. Supporters argue that the city was slow to act: if Bangkok had offered tax breaks for green roofs ten years ago, it ___(70)___ one of the greenest capitals in Asia today.';

var M4_TC3 = 'Can hot water freeze faster than cold water? The idea sounds absurd, yet it has a name: the Mpemba effect, ___(71)___ Erasto Mpemba, a Tanzanian schoolboy who noticed in the 1960s that his warm ice-cream mixture froze before his classmates’ cold ones. When he asked his teacher for an explanation, he was told that he must be confused. Physicists have been arguing about ___(72)___ ever since. Several explanations have been proposed. Hot water evaporates faster, so there is less of it left to freeze, and it contains fewer dissolved gases, which may change the way ice crystals form. ___(73)___ these explanations sound convincing, none of them has been proven. In fact, careful experiments have produced ___(74)___ results: some detect the effect, while others find no difference at all. Much depends on small details such as the shape of the container and the temperature of the freezer. The Mpemba effect is a reminder that science is ___(75)___ a collection of settled facts than an ongoing conversation.';

/* =========================================================================== */
MOCKS.push({
  id: 'm4', name: 'Mock 4 · Stretch',
  blurb: 'One notch harder than TCAS69: more C1 vocabulary, subtler distractors and longer options — the level TCAS70 is expected to reach.',
  minutes: 90, total: 100,
  sections: [

  { code:'I-1', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part I: Short Conversations (Items 1–12)',
    instructions:'Choose the best answers to complete the following conversations.', points:1.25, items:[

    { id:'m4-1', type:'gap', tag:'cv-next', level:'B2', lines:M4_C1, blank:'(1)',
      stem:'Choose the best option for blank (1).',
      options:['I feel completely at ease.','Could you use my other arm?','I must admit I’m a little on edge.','I’d rather wait until the doctor can do it himself.'],
      answer:2,
      why:'The patient adds “My hands are already shaking,” and the nurse replies “You’re not the first,” so the blank must confess nervousness: <em>on edge</em> means nervous. “I feel completely at ease” says the opposite, and neither a request for the other arm nor a wish to wait for the doctor explains the nurse’s reassuring reply.' },

    { id:'m4-2', type:'gap', tag:'cv-react', level:'B2', lines:M4_C1, blank:'(2)',
      stem:'Choose the best option for blank (2).',
      options:['That’s a relief.','Oh dear, I was afraid of that.','So it’s lower than last time, then.','Great, so I can go home now, can’t I?'],
      answer:1,
      why:'The nurse has just said the reading is “on the high side,” and the patient goes on to ask whether something is seriously wrong, so the reaction must be worried. “That’s a relief” and “Great, so I can go home” are happy reactions, and “lower than last time” contradicts a high reading.' },

    { id:'m4-3', type:'gap', tag:'cv-advice', level:'C1', lines:M4_C1, blank:'(3)',
      stem:'Choose the best option for blank (3).',
      options:['Yes, right away.','Let’s not jump the gun just yet.','Yes, I’ll write you a prescription now.','You’d better go straight to the hospital, just in case.'],
      answer:1,
      why:'<em>Jump the gun</em> means to act too early. The nurse’s next words, “We’ll measure it again in ten minutes,” show she wants to wait before deciding anything. The other three options all rush into treatment, which contradicts the plan to re-check first.' },

    { id:'m4-4', type:'gap', tag:'cv-agree', level:'B2', lines:M4_C1, blank:'(4)',
      stem:'Choose the best option for blank (4).',
      options:['Fair enough.','Can’t you do it again now?','That’s completely out of the question.','Sorry, but I have to leave in five minutes.'],
      answer:0,
      why:'The patient then says “I’ll sit here and think about beaches,” so he accepts the ten-minute wait: <em>Fair enough</em> signals reasonable agreement. The other three options all reject or resist the wait, which clashes with his decision to sit and relax.' },

    { id:'m4-5', type:'gap', tag:'id-situation', level:'C1', lines:M4_C2, blank:'(5)',
      stem:'Choose the best option for blank (5).',
      options:['It was a walk in the park.','You were completely outclassed.','I switched off after the first round.','It was neck and neck right up to the end.'],
      answer:3,
      why:'<em>Neck and neck</em> means extremely close, which matches “You were one team fight away from winning.” <em>A walk in the park</em> means easy, which does not fit a loss; “completely outclassed” means the other team was far better; and switching off contradicts “I watched the whole match.”' },

    { id:'m4-6', type:'gap', tag:'cv-register', level:'B2', lines:M4_C2, blank:'(6)',
      stem:'Choose the best option for blank (6).',
      options:['Nobody noticed it anyway.','You deserved every word of it.','You’re being too hard on yourself.','Maybe you should have practised a bit harder.'],
      answer:2,
      why:'Pun is comforting a friend and then reminds him how much he has improved since last year, so the line must be kind and supportive. “You deserved every word” and “you should have practised harder” are too harsh for a consoling friend, and “Nobody noticed it” contradicts Oat’s point that everyone saw it.' },

    { id:'m4-7', type:'gap', tag:'id-proverb', level:'B2+', lines:M4_C2, blank:'(7)',
      stem:'Choose the best option for blank (7).',
      options:['Talk about beginner’s luck!','There’s no shame in losing to the best.','They obviously had an off day, didn’t they?','Lightning never strikes twice in the same place.'],
      answer:1,
      why:'Oat answers, “I suppose losing to the champions isn’t so bad,” which directly echoes <em>no shame in losing to the best</em>. The champions did not have “an off day” (they won everything), were not beginners, and the saying about lightning is about rare events repeating, which has nothing to do with the loss.' },

    { id:'m4-8', type:'gap', tag:'dm-add', level:'B2+', lines:M4_C2, blank:'(8)',
      stem:'Choose the best option for blank (8).',
      options:['Besides,','Otherwise,','In other words,','Having said that,'],
      answer:0,
      why:'Pun adds a second, separate reason for Oat to cheer up: the season is not over. <em>Besides</em> adds a further point in the same direction. <em>Having said that</em> would introduce a contrast, <em>In other words</em> would restate the first point, and <em>Otherwise</em> expresses a condition.' },

    { id:'m4-9', type:'gap', tag:'dm-stance', level:'B2+', lines:M4_C3, blank:'(9)',
      stem:'Choose the best option for blank (9).',
      options:['Apparently, it’s serious this time.','Luckily, the rain has already stopped.','As far as I know, it’s just a false alarm.','If I’m not mistaken, it was sent to us by mistake.'],
      answer:0,
      why:'Krit goes on to report that the manager wants every car moved out of the basement, so he must be treating the warning as real: <em>Apparently</em> introduces what he has heard. The other options play the danger down or say the rain has stopped, which would make moving the cars pointless — and Aom said the rain is expected tonight.' },

    { id:'m4-10', type:'gap', tag:'cv-request', level:'B2', lines:M4_C3, blank:'(10)',
      stem:'Choose the best option for blank (10).',
      options:['Shall I move yours too?','Would you mind giving me a hand?','Could I borrow your car for the evening?','Would you mind if I parked in your space instead?'],
      answer:1,
      why:'Aom explains that she is “hopeless at reversing,” and Krit offers to move her car for her, so she must be asking for help. Offering to move <em>his</em> car makes no sense for someone who cannot reverse, and borrowing his car or taking his space does not match his reply, “Give me your keys.”' },

    { id:'m4-11', type:'gap', tag:'dm-frame', level:'B2+', lines:M4_C3, blank:'(11)',
      stem:'Choose the best option for blank (11).',
      options:['as a result,','in that case,','before I forget,','all things considered,'],
      answer:2,
      why:'Aom suddenly raises a new, important topic, the elderly neighbour, so she needs a marker that opens a new point: <em>before I forget</em>. <em>As a result</em> and <em>in that case</em> require a logical link to what came before, and <em>all things considered</em> introduces a final judgement, not a question.' },

    { id:'m4-12', type:'gap', tag:'cv-thanks', level:'B2+', lines:M4_C3, blank:'(12)',
      stem:'Choose the best option for blank (12).',
      options:['You can say that again.','It’s the least I can do for you.','I honestly don’t know what I’d do without you.','Let’s not make a mountain out of a molehill, shall we?'],
      answer:2,
      why:'Aom is thanking Krit, and his reply “Don’t mention it” is the standard response to thanks. “It’s the least I can do” is a near miss: it is what the <em>helper</em> says, not the person being helped. “You can say that again” shows agreement, and the molehill idiom means someone is overreacting.' }
  ]},

  { code:'I-2', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part II: Long Conversation (Items 13–20)',
    instructions:'Choose the best answers to complete the following conversation.', points:1.25, items:[

    { id:'m4-13', type:'gap', tag:'dm-frame', level:'C1', lines:M4_LONG, blank:'(13)',
      stem:'Choose the best option for blank (13).',
      options:['Without further ado,','All things considered,','To make matters worse,','To put it another way,'],
      answer:0,
      why:'The manager moves straight from greetings to the first question, so she needs <em>Without further ado</em> (= without wasting more time). <em>All things considered</em> introduces a final judgement, <em>To put it another way</em> restates something already said, and <em>To make matters worse</em> adds a problem — none can open the first question.' },

    { id:'m4-14', type:'gap', tag:'id-situation', level:'C1', lines:M4_LONG, blank:'(14)',
      stem:'Choose the best option for blank (14).',
      options:['I’m all ears','I’m on cloud nine','I’m breaking the ice','I’m tying myself in knots'],
      answer:3,
      why:'Nan has just contradicted herself three times, so she apologises for getting confused: <em>tie yourself in knots</em> means to become muddled when trying to explain something. <em>I’m all ears</em> means “I’m listening,” <em>on cloud nine</em> means extremely happy, and <em>breaking the ice</em> means starting a friendly conversation.' },

    { id:'m4-15', type:'gap', tag:'dm-contrast', level:'C1', lines:M4_LONG, blank:'(15)',
      stem:'Choose the best option for blank (15).',
      options:['Mind you,','As a result,','What’s more,','In other words,'],
      answer:0,
      why:'Nan first admits a weakness (no barista experience) and then adds a point in her favour, so she needs a marker that qualifies what she has just said: <em>Mind you</em>. <em>What’s more</em> would add another point in the same negative direction, <em>As a result</em> suggests cause and effect, and <em>In other words</em> restates.' },

    { id:'m4-16', type:'gap', tag:'dm-contrast', level:'C1', lines:M4_LONG, blank:'(16)',
      stem:'Choose the best option for blank (16).',
      options:['At any rate,','Out of the blue,','To make an analogy,','As a matter of fact,'],
      answer:0,
      why:'The manager pauses, puts aside her private thought about the noodle stall and returns to the main business: <em>At any rate</em> (= anyway) does exactly this. <em>As a matter of fact</em> introduces a surprising fact, <em>Out of the blue</em> means unexpectedly, and <em>To make an analogy</em> introduces a comparison, none of which follows.' },

    { id:'m4-17', type:'gap', tag:'dm-rephrase', level:'B2+', lines:M4_LONG, blank:'(17)',
      stem:'Choose the best option for blank (17).',
      options:['By the way,','To begin with,','On the contrary,','At the end of the day,'],
      answer:3,
      why:'After listing her actions, Nan states the most important overall aim, so she needs <em>At the end of the day</em> (= what really matters is). <em>To begin with</em> would start a list she has already finished, <em>On the contrary</em> rejects a previous statement, and <em>By the way</em> changes the topic.' },

    { id:'m4-18', type:'gap', tag:'dm-add', level:'B2+', lines:M4_LONG, blank:'(18)',
      stem:'Choose the best option for blank (18).',
      options:['In short,','By the same token,','On the bright side,','To make matters worse,'],
      answer:3,
      why:'Spilling red syrup on a white uniform is bad; it being class-photo day makes it even worse, so <em>To make matters worse</em> fits. <em>On the bright side</em> is the near miss: it would need a positive detail. <em>In short</em> summarises, and <em>By the same token</em> means “for the same reason.”' },

    { id:'m4-19', type:'gap', tag:'id-reaction', level:'B2+', lines:M4_LONG, blank:'(19)',
      stem:'Choose the best option for blank (19).',
      options:['That rings a bell.','Let’s call it a day.','That’s the last straw!','That’s beside the point.'],
      answer:0,
      why:'The manager slowly realises the story sounds familiar and then asks whether the girl was called Pim: <em>That rings a bell</em> means “that seems familiar.” Ending the interview, losing patience (<em>the last straw</em>) or calling the story irrelevant would not lead to her curious follow-up question.' },

    { id:'m4-20', type:'gap', tag:'cv-twist', level:'B2+', lines:M4_LONG, blank:'(20)',
      stem:'Choose the best option for blank (20).',
      options:['Absolutely.','Not so fast.','I’m afraid so.','Better luck next time.'],
      answer:1,
      why:'Nan expects to be rejected, but the manager then hires her, so her first words must stop Nan’s conclusion: <em>Not so fast</em> means “don’t be too quick to assume.” “Absolutely,” “I’m afraid so” and “Better luck next time” all confirm the rejection, which the twist — “You start on Monday” — contradicts.' }
  ]},

  { code:'II-1', part:'SECTION II: READING SKILL', title:'Part I: Advertisements (Items 21–26)',
    instructions:'Read the following advertisements and choose the best answer for each question.', points:1.25, items:[

    { id:'m4-21', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:M4_AD1,
      stem:'Advertisement 1: Which applicant is eligible to apply for the scholarship?',
      options:['A second-year university student with a GPA of 3.60','An M5 student with a GPA of 3.10 who has passed a Japanese test','An M6 student with a GPA of 3.40 who has never studied Japanese','An M4 student with a GPA of 3.80 who already speaks fluent Japanese'],
      answer:2,
      why:'The ad is open to students in M5, M6 or the first year of university with a minimum GPA of 3.25, and says “no Japanese required,” so the M6 student with 3.40 qualifies. The second-year student and the M4 student are at the wrong level, and a GPA of 3.10 is below the minimum however good the student’s Japanese is.' },

    { id:'m4-22', type:'read', tag:'ad-detail', level:'B2', passage:'', ad:M4_AD1,
      stem:'Advertisement 1: Which cost is NOT covered by the scholarship?',
      options:['university tuition fees','the compulsory insurance policy','the student’s return flights to Japan','the student’s day-to-day living costs in Japan'],
      answer:1,
      why:'The “NOT COVERED” line lists compulsory travel insurance (about 4,500 baht), the visa fee and personal travel. Tuition, return economy flights and a monthly living allowance of ¥60,000 are all listed under “COVERED.”' },

    { id:'m4-23', type:'read', tag:'ad-technique', level:'B2+', passage:'', ad:M4_AD1,
      stem:'Advertisement 1: The headline “One semester in Japan. Zero tuition fees.” attracts readers mainly by ________.',
      options:['quoting a satisfied former student','warning that places are about to run out','appealing to a desire for peace and relaxation abroad','highlighting a major financial benefit of the programme'],
      answer:3,
      why:'“Zero tuition fees” puts the money saved at the centre of the headline, so the technique is a financial benefit. The ad mentions 20 places but the headline creates no urgency, no former student is quoted, and nothing in it suggests relaxation.' },

    { id:'m4-24', type:'read', tag:'rd-notexcept', level:'B2+', passage:'', ad:M4_AD2,
      stem:'Advertisement 2: Which of the following is FALSE about Ad A?',
      options:['It weighs less than its predecessor.','It can be used with Android and iOS phones.','Not every buyer will receive the free extra strap.','Its blood-oxygen readings can be used to diagnose illness.'],
      answer:3,
      why:'The fine print says blood-oxygen readings “are not intended for medical diagnosis,” so option 4 is false. The watch is “30% lighter than its predecessor,” works with Android and iOS, and the free strap goes only to the first 500 buyers — all true.' },

    { id:'m4-25', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:M4_AD2,
      stem:'Advertisement 2: Which of the following is FALSE about Ad B?',
      options:['iPhone users cannot use it.','Its warranty is twice as long as Ad A’s.','The AI Coach is free for as long as you own the watch.','Buyers can spread the cost over ten months without paying interest.'],
      answer:2,
      why:'The fine print says the AI Coach needs a 99-baht monthly subscription after a free three-month trial, so it is not free forever. It is Android-only, its two-year warranty is double Ad A’s one year, and “0% interest instalments over 10 months” confirms the last option.' },

    { id:'m4-26', type:'read', tag:'ad-compare', level:'C1', passage:'', ad:M4_AD2,
      stem:'Advertisement 2: All of the following can be inferred from the two advertisements EXCEPT that ________.',
      options:['both watches can be worn while swimming','Ad B is aimed more at athletes than Ad A is','Ad A lasts longer on one charge than Ad B does','Ad A measures heart rate less accurately than Ad B does'],
      answer:3,
      why:'Neither ad compares the accuracy of heart-rate readings, so this cannot be inferred. Both are water-resistant (50 m and 100 m), Ad B targets athletes (“Built for athletes,” “Recommended by coaches”), and Ad A’s 14 days is longer than Ad B’s 7 days.' }
  ]},

  { code:'II-2', part:'SECTION II: READING SKILL', title:'Part II: Product/Service Review (Items 27–32)',
    instructions:'Read the following review and choose the best answer for each question.', points:1.25, items:[

    { id:'m4-27', type:'read', tag:'rv-evidence', level:'B2', passage:M4_REVIEW, source:'Adapted for TCAS70 practice',
      stem:'According to paragraph 2, what does the reviewer praise about the recipe cards?',
      options:['They make even ambitious dishes manageable in a short time.','They can be downloaded and reused after the subscription ends.','They include dishes from many countries, including Italy and Korea.','They suggest cheaper ingredients that can be bought at local markets.'],
      answer:0,
      why:'The reviewer says the cards break dishes into “six or seven clearly photographed steps” and even ambitious meals “rarely took me more than 35 minutes.” Nothing is said about downloading cards, cheaper market ingredients, or Italian and Korean dishes — the examples given are Thai and Japanese.' },

    { id:'m4-28', type:'read', tag:'rv-infer', level:'B2+', passage:M4_REVIEW, source:'Adapted for TCAS70 practice',
      stem:'What can be inferred about the reviewer’s cooking before using FreshCrate?',
      options:['The reviewer had very little experience of cooking real meals.','The reviewer was a confident cook who simply wanted new recipes.','The reviewer cooked often for the family but wasted too much money.','The reviewer cooked quickly but could not follow written instructions.'],
      answer:0,
      why:'A cooking repertoire that “begins and ends with instant noodles” and a history of burning rice in a rice cooker show very limited skill. Nothing suggests confidence, frequent family cooking, or trouble with written instructions — in fact the cards helped.' },

    { id:'m4-29', type:'read', tag:'vc-closest', level:'B2+', passage:M4_REVIEW, source:'Adapted for TCAS70 practice',
      stem:'The word “routinely” in paragraph 3 is closest in meaning to ________.',
      options:['secretly','regularly','carelessly','occasionally'],
      answer:1,
      why:'<em>Routinely</em> means as a normal, regular habit: before FreshCrate, throwing away herbs was something that happened all the time. <em>Occasionally</em> is the near miss but means only sometimes; <em>carelessly</em> and <em>secretly</em> describe manner, not frequency.' },

    { id:'m4-30', type:'read', tag:'rd-support', level:'B2+', passage:M4_REVIEW, source:'Adapted for TCAS70 practice',
      stem:'Which detail best supports the reviewer’s criticism of FreshCrate’s environmental impact?',
      options:['Skipping a week takes only two taps in the app.','Very little of the food ends up being thrown away.','Most meals take no more than 35 minutes to prepare.','Every ingredient arrives in its own plastic bag or bottle.'],
      answer:3,
      why:'Paragraph 4 criticises the packaging: “Every carrot and every spoonful of fish sauce arrives in its own plastic bag or tiny bottle.” Reduced food waste is an environmental point too, but it is a strength, not a criticism; the other two details concern convenience.' },

    { id:'m4-31', type:'read', tag:'rd-mention', level:'C1', passage:M4_REVIEW, source:'Adapted for TCAS70 practice',
      stem:'Why does the reviewer mention that cancelling is explained “only in the small print”?',
      options:['To show that the website is hard for older customers to read','To explain why the reviewer never managed to cancel the service','To suggest that the company does not make leaving easy or obvious','To warn that customers can only cancel after a minimum of three months'],
      answer:2,
      why:'Contrasting “two taps” to skip with a phone call to cancel, hidden in the small print, implies the company makes quitting deliberately harder. The reviewer did cancel (paragraph 6), and nothing is said about older customers or a minimum period.' },

    { id:'m4-32', type:'read', tag:'rv-attitude', level:'C1', passage:M4_REVIEW, source:'Adapted for TCAS70 practice',
      stem:'Which statement best describes the reviewer’s overall attitude towards FreshCrate?',
      options:['The reviewer values it as a way to learn to cook rather than a long-term way to eat.','The reviewer regrets using it because its packaging and price outweigh its benefits.','The reviewer recommends it mainly to busy people who have no time to go to the market.','The reviewer finds it convenient enough to justify paying its high price every single week.'],
      answer:0,
      why:'The surprising conclusion is that FreshCrate is “not a sensible way to eat every night” but “an expensive but remarkably effective cooking course” — it worked so well that the reviewer no longer needs it. The reviewer does recommend it, so “regrets” is wrong, and the other two options repeat the convenience claim the reviewer rejects.' }
  ]},

  { code:'II-3', part:'SECTION II: READING SKILL', title:'Part III: News Report (Items 33–38)',
    instructions:'Read the following news report and choose the best answer for each question.', points:1.25, items:[

    { id:'m4-33', type:'read', tag:'rd-news', level:'B2+', passage:M4_NEWS, source:M4_NEWS_SRC,
      stem:'What is the main idea of the news report?',
      options:['A new earthquake in Myanmar has damaged several tall buildings in Bangkok.','Bangkok is still learning lessons about building safety from the 2025 quake.','Scientists predict that another major earthquake will hit Bangkok within a decade.','Bangkok has now strengthened all of its older buildings to modern earthquake standards.'],
      answer:1,
      why:'The report looks back “more than a year on” and lists lessons about distance, inspection, drills and retrofitting. There is no new earthquake, no scientific prediction, and paragraph 14 says some owners have postponed strengthening work.' },

    { id:'m4-34', type:'read', tag:'rd-cause', level:'B2+', passage:M4_NEWS, source:M4_NEWS_SRC,
      stem:'According to Dr Worawit, why did tall buildings in Bangkok shake so strongly?',
      options:['The soft clay under the city amplified distant waves.','Many of them were still under construction at the time.','They were built too close to the centre of the earthquake.','They had weaker foundations than the smaller buildings nearby.'],
      answer:0,
      why:'Dr Worawit says Bangkok “sits on soft clay” and that “long, slow waves from a distant earthquake can be amplified.” The quake was hundreds of kilometres away, so the buildings were not close to its centre, and only one building was under construction.' },

    { id:'m4-35', type:'read', tag:'rd-detail', level:'C1', passage:M4_NEWS, source:M4_NEWS_SRC,
      stem:'What does paragraph 8 suggest about many of the cracks reported by residents?',
      options:['They were caused by residents, not by the earthquake.','They were too small to be seen without special equipment.','They affected how buildings looked, not how they stood up.','They were found mainly in the columns and beams of new buildings.'],
      answer:2,
      why:'<em>Cosmetic</em> damage affects only how something looks: the cracks were in “plaster and partition walls rather than … the columns and beams that hold a building up.” The column-and-beam option reverses this, and nothing suggests the cracks were invisible or caused by residents.' },

    { id:'m4-36', type:'read', tag:'rd-infer', level:'C1', passage:M4_NEWS, source:M4_NEWS_SRC,
      stem:'What can be inferred from the survey results in paragraphs 10 and 11?',
      options:['Fewer than a third of residents now know where the exits are.','Most residents had practised evacuating before the earthquake.','More residents know the exits, but few have ever practised using them.','The number of residents who know where the exits are has more than tripled.'],
      answer:2,
      why:'Knowledge of exits rose from 29% to 62%, yet “only one in five” has ever joined a drill. The rise is roughly double, not triple (the arithmetic trap), 62% is well over a third, and one in five is not “most.”' },

    { id:'m4-37', type:'read', tag:'rd-expression', level:'C1', passage:M4_NEWS, source:M4_NEWS_SRC,
      stem:'In paragraph 12, what does Dr Worawit mean by “people follow habits, not posters”?',
      options:['In a crisis, people do what they have practised.','People ignore safety posters because they are badly designed.','Buildings should put up more posters to change people’s habits.','Habits are harder to change after an emergency than before one.'],
      answer:0,
      why:'He contrasts reading information (posters) with practised behaviour (habits) and concludes, “Drills build habits.” He does not criticise poster design, call for more posters, or compare habits before and after an emergency.' },

    { id:'m4-38', type:'read', tag:'rd-views', level:'C1', passage:M4_NEWS, source:M4_NEWS_SRC,
      stem:'Why does Dr Worawit say, “That is exactly the wrong conclusion to draw”?',
      options:['He thinks retrofitting is too costly to be worthwhile.','He is certain that a quake of the same size will strike next year.','He thinks owners should not delay safety work because a big quake seems far off.','He denies that the earthquake caused any damage at all to the older buildings in the city.'],
      answer:2,
      why:'He is replying to owners who postpone retrofitting because another big quake “may not happen for decades”; “Earthquakes don’t make appointments” means the timing cannot be predicted. He is not certain about next year, does not reject retrofitting on cost, and says nothing about damage to older buildings.' }
  ]},

  { code:'II-4', part:'SECTION II: READING SKILL', title:'Part IV: Visuals (Items 39–44)',
    instructions:'Study the following visuals and choose the best answer for each question.', points:1.25, items:[

    { id:'m4-39', type:'read', tag:'vs-trend', level:'B2+', passage:'', visual:M4_VIS1,
      stem:'Visual 1: Which statement best describes the global average line?',
      options:['It rose steadily in every year shown.','It fell in 2025 to below its 2015 level.','It fluctuated until 2022, then rose sharply to a peak in 2024.','It peaked in 2016 and then levelled off for the rest of the period.'],
      answer:2,
      why:'The global line goes up and down between 1.1 and 1.3 °C from 2015 to 2022, jumps to 1.5 in 2023 and peaks at 1.6 in 2024. It did not rise every year, 2016 (1.3) was not the peak, and 2025 (1.5) is still well above 2015 (1.1).' },

    { id:'m4-40', type:'read', tag:'vs-math', level:'C1', passage:'', visual:M4_VIS1,
      stem:'Visual 1: By approximately what percentage did the global figure increase from 2015 to 2024?',
      options:['0.5%','15%','45%','50%'],
      answer:2,
      why:'The figure rose from 1.1 to 1.6 °C, an increase of 0.5 °C; 0.5 ÷ 1.1 ≈ 0.45, or about 45%. “0.5%” confuses degrees with a percentage, and “50%” divides by 1.0 instead of the starting value of 1.1.' },

    { id:'m4-41', type:'read', tag:'vs-compare', level:'B2+', passage:'', visual:M4_VIS1,
      stem:'Visual 1: In which year was the difference between Thailand and the global average the greatest?',
      options:['2015','2016','2022','2024'],
      answer:3,
      why:'In 2024 Thailand was 1.9 °C and the world 1.6 °C, a gap of 0.3 °C. The gaps in 2015 (0.9 vs 1.1) and 2022 (1.0 vs 1.2) are only 0.2, and in 2016 the two lines are just 0.1 apart.' },

    { id:'m4-42', type:'read', tag:'vs-flow', level:'B2', passage:'', visual:M4_VIS2,
      stem:'Visual 2: According to the chart, what should you do with a used battery?',
      options:['Put it in the green bin.','Take it to a special collection point.','Put it in the grey bin with general waste.','Rinse it and place it in the yellow recycling bin.'],
      answer:1,
      why:'A battery answers YES to question 3 (“chemicals or a battery”), which leads to “HAZARDOUS → seal it in a bag; take it to a special collection point.” The note also says hazardous waste must never go in any household bin, which rules out the three bin options.' },

    { id:'m4-43', type:'read', tag:'vs-trap', level:'B2+', passage:'', visual:M4_VIS2,
      stem:'Visual 2: A plastic box marked “5” with greasy curry sauce that cannot be washed off should go ________.',
      options:['into the grey bin','to a special collection point','into the yellow bin after rinsing','into the green bin with food waste'],
      answer:0,
      why:'Plastic 5 answers YES to question 2, but the chart then asks whether it can be cleaned; if not, “treat it as general waste → grey bin.” The yellow bin is the trap for students who stop at the material, and the food on it does not make the box organic or hazardous.' },

    { id:'m4-44', type:'read', tag:'vs-diagram', level:'C1', passage:'', visual:M4_VIS2,
      stem:'Visual 2: Which item would reach the grey bin only after passing through ALL three questions?',
      options:['a banana peel','a clean glass jar','a broken ceramic mug','an old battery from a TV remote'],
      answer:2,
      why:'A ceramic mug is not food, is not paper, glass, metal or plastic 1/2/5, and contains no chemicals or battery, so it reaches “GENERAL → grey bin” only at the end of question 3. The peel stops at question 1, the jar at question 2, and the battery answers YES to question 3 and goes to special collection.' }
  ]},

  { code:'II-5', part:'SECTION II: READING SKILL', title:'Part V: General Articles (Items 45–60)',
    instructions:'Read the following articles and choose the best answer for each question.', points:1.25, items:[

    { id:'m4-45', type:'read', tag:'rd-main', level:'B2+', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: What is the main idea of the article?',
      options:['Its risks are real, but moderation beats total avoidance.','The NOVA system is the most accurate way to judge any food.','Food additives cause obesity and should be banned by the authorities.','Busy families should rely on ultra-processed food because it is cheap.'],
      answer:0,
      why:'The article presents the evidence of risk (paragraph 4), its limits (paragraph 5) and then advises shifting “the balance rather than to chase perfection.” It says additives are approved and not necessarily dangerous, criticises NOVA, and calls ultra-processed food a lifeline, not something to rely on.' },

    { id:'m4-46', type:'read', tag:'rd-detail', level:'B2', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: According to paragraph 2, how does NOVA differ from other ways of classifying food?',
      options:['It divides food into healthy and unhealthy groups.','It groups food by degree of processing, not by nutrients.','It judges food mainly by its fat, sugar and salt content.','It was designed by food companies to label their own products.'],
      answer:1,
      why:'Paragraph 2 says “Instead of sorting food by nutrients such as fat or sugar, NOVA sorts it by how much it has been processed.” The fat-and-sugar option describes exactly what NOVA does <em>not</em> do; it was developed by researchers, and it has four groups, not two.' },

    { id:'m4-47', type:'read', tag:'vc-polysemy', level:'C1', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: The word “fingerprint” in paragraph 3 is closest in meaning to ________.',
      options:['hidden danger','main ingredient','identifying sign','legal requirement'],
      answer:2,
      why:'Additives are called “the clearest fingerprint of ultra-processing” because, like a fingerprint, they show which products belong to Group 4. The same paragraph says additives are not necessarily dangerous, so “hidden danger” is the near miss; they are not the main ingredient or a legal requirement.' },

    { id:'m4-48', type:'read', tag:'rd-infer', level:'C1', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: What can be inferred about the experiment described in paragraph 4?',
      options:['It proved that ultra-processed food causes depression.','The volunteers preferred the taste of the unprocessed meals.','The volunteers ate more because the meals contained more sugar.','The extra calories could not be explained by sugar, fat or fiber.'],
      answer:3,
      why:'Because the diets “had been carefully matched for sugar, fat and fiber,” those nutrients cannot explain the extra 500 calories; something about processing must. The sugar option contradicts the matching, taste is never mentioned, and a small two-week study could not prove anything about depression.' },

    { id:'m4-49', type:'read', tag:'rd-org', level:'C1', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: What is the function of paragraph 5?',
      options:['It explains the history of the NOVA system in more detail.','It gives more evidence that ultra-processed food causes disease.','It introduces practical tips for cutting down on processed food.','It qualifies the evidence in paragraph 4 by pointing out its limits.'],
      answer:3,
      why:'Paragraph 5 opens with “Yet the science is not as settled…” and explains why observational studies cannot prove cause and why NOVA groups are too broad. It does not add evidence of harm, the history is in paragraph 2, and practical tips begin in paragraph 6.' },

    { id:'m4-50', type:'read', tag:'rd-mention', level:'B2+', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: Why does the author mention wholegrain bread and fizzy drinks in paragraph 5?',
      options:['To give examples of Group 3 processed foods','To show that bread is as harmful as sugary drinks','To suggest replacing fizzy drinks with wholegrain bread','To show that one NOVA group can contain very different foods'],
      answer:3,
      why:'Both products “may both land in Group 4,” yet few nutritionists would call them equally harmful, which illustrates the criticism that NOVA “lumps together” very different foods. They are Group 4, not Group 3, and the author says the opposite of “equally harmful.”' },

    { id:'m4-51', type:'read', tag:'vc-nouns', level:'C1', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: The word “lifeline” in paragraph 6 is closest in meaning to ________.',
      options:['a cheap luxury','a long-term health risk','a rope used to rescue swimmers','something that gives essential support'],
      answer:3,
      why:'For busy families on a tight budget, ultra-processed food can be something they really depend on: a <em>lifeline</em> in its figurative sense. The rope is the literal meaning, which does not fit food; “health risk” contradicts the author’s point, and it is described as cheap, not a luxury.' },

    { id:'m4-52', type:'read', tag:'rd-attitude', level:'B2+', passage:M4_ART1, source:M4_ART_SRC,
      stem:'Article 1: The author’s attitude towards ultra-processed food can best be described as ________.',
      options:['fearful','balanced','admiring','dismissive'],
      answer:1,
      why:'The author weighs striking evidence against its limits and concludes that convenience “is not the enemy” while warning against letting it become the default — a balanced view. “Fearful” ignores the “Not panic” advice, and the author neither admires nor dismisses these foods.' },

    { id:'m4-53', type:'read', tag:'rd-purpose', level:'B2+', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: The primary purpose of the article is to ________.',
      options:['teach introverts how to overcome their shyness','prove that introverts succeed more often than extraverts','challenge popular beliefs about introverts using research','describe the history of personality research since Carl Jung'],
      answer:2,
      why:'The article lists “five common myths” and explains “what research actually suggests” about each. It says introverts are <em>not</em> superior, separates introversion from shyness, and mentions Jung only in passing.' },

    { id:'m4-54', type:'read', tag:'rd-detail', level:'B2+', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: According to paragraph 3, what is the key difference between shyness and introversion?',
      options:['Shyness is a fear; introversion is a preference.','Shy people enjoy company, whereas introverts prefer to avoid it.','Shyness is common among extraverts, but introverts are never shy.','Introversion can be cured, whereas shyness usually lasts for life.'],
      answer:0,
      why:'Paragraph 3 states: “Shyness is a fear of social judgment; introversion is a preference for less stimulation.” It says some extraverts are shy but never that introverts cannot be, paragraph 2 says introverts enjoy company, and nothing is said about a cure.' },

    { id:'m4-55', type:'read', tag:'rd-expression', level:'B2+', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: The comparison with “a phone on 5% battery” in paragraph 2 suggests that, after a party, an introvert ________.',
      options:['has spent too long on the phone','is unhappy and wants to leave at once','feels drained and needs time to recover','wants to keep talking until completely tired'],
      answer:2,
      why:'A phone on 5% is almost empty and needs recharging, just as the introvert needs “a quiet corner to recharge.” The text says “not unhappy,” so that option is the trap, and the image has nothing to do with actual phone use.' },

    { id:'m4-56', type:'read', tag:'vc-verbs', level:'C1', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: The word “flourish” in paragraph 4 is closest in meaning to ________.',
      options:['be tested','grow and succeed','be approved quickly','compete with each other'],
      answer:1,
      why:'Introverted leaders listen and let other people’s suggestions <em>flourish</em> — develop fully and successfully. “Be approved quickly” is the near miss, but flourishing is about growth, not speed of approval; testing and competing are not implied.' },

    { id:'m4-57', type:'read', tag:'rd-infer', level:'C1', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: It can be inferred from paragraph 5 that asking staff to submit ideas in writing before a meeting ________.',
      options:['gives quieter staff a fairer hearing','is mainly designed to make meetings shorter','shows that introverts write better than extraverts','has replaced brainstorming meetings in most companies'],
      answer:0,
      why:'In spoken brainstorming “the first idea spoken aloud tends to win,” while written submission produces “a wider range of suggestions” — so quieter people’s ideas are more likely to count. Meeting length is not mentioned, nobody claims introverts write better, and “most companies” overstates “many companies.”' },

    { id:'m4-58', type:'read', tag:'rd-reference', level:'B2+', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: In paragraph 7, the word “them” in “to describe them” refers to ________.',
      options:['introverts','researchers','most people','all extraverts'],
      answer:2,
      why:'“Most people fall somewhere in the middle of the spectrum, and some researchers use the term ‘ambivert’ to describe them” — an ambivert is someone in the middle, so <em>them</em> = most people. “Researchers” is the nearest noun but they are the ones doing the describing.' },

    { id:'m4-59', type:'read', tag:'rd-notexcept', level:'B2', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: Which of the following is NOT mentioned as a change that helps introverts at work?',
      options:['quiet zones','shorter working hours','remote and hybrid work','written collaboration tools'],
      answer:1,
      why:'Paragraph 5 lists “Remote and hybrid work, written collaboration tools and quiet zones.” Shorter working hours are never mentioned.' },

    { id:'m4-60', type:'read', tag:'rd-conclude', level:'C1', passage:M4_ART2, source:M4_ART_SRC,
      stem:'Article 2: Which conclusion is best supported by the final paragraph?',
      options:['Quiet students should be made to speak first in every class.','Most people are either clearly introverted or clearly extraverted.','Introverts are generally more intelligent than extraverts and ambiverts.','A person’s quietness should not be mistaken for a lack of interest or ability.'],
      answer:3,
      why:'The quiet student “may not be bored, anxious or unfriendly” and “may have the best idea in the room.” The paragraph denies that introverts are superior, says most people are in the middle, and never recommends forcing anyone to speak.' }
  ]},

  { code:'III-1', part:'SECTION III: WRITING SKILL', title:'Part I: Text Completion (Items 61–75)',
    instructions:'Choose the best answers to complete the following passages.', points:1.25, items:[

    { id:'m4-61', type:'cloze', tag:'vt-tense', level:'B2+', passage:M4_TC1, blank:'(61)',
      stem:'Choose the best option for blank (61).',
      options:['Once','Since','Until','By the time'],
      answer:3,
      why:'The main clause uses the past perfect (“had learned”), which describes something completed <em>before</em> a past point: <em>By the time</em> they started kindergarten. <em>Since</em> needs the present perfect, <em>Once</em> (= after) clashes with an action already finished, and <em>Until</em> makes no sense with “long before.”' },

    { id:'m4-62', type:'cloze', tag:'nc-whether', level:'B2+', passage:M4_TC1, blank:'(62)',
      stem:'Choose the best option for blank (62).',
      options:['that','what','which','whether'],
      answer:3,
      why:'After the preposition <em>over</em>, a yes/no question becomes a noun clause with <em>whether</em>: researchers disagree about whether screens are harmful. <em>That</em> cannot follow a preposition, <em>what</em> would need a missing subject or object in the clause, which is already complete, and <em>which</em> needs a noun to refer to.' },

    { id:'m4-63', type:'cloze', tag:'dt-other', level:'B2', passage:M4_TC1, blank:'(63)',
      stem:'Choose the best option for blank (63).',
      options:['other','others','another','the other'],
      answer:1,
      why:'“Some studies … ; <em>others</em> find …” uses <em>others</em> as a plural pronoun meaning “other studies,” matching the plural verb <em>find</em>. <em>Other</em> needs a noun after it, <em>another</em> is singular, and <em>the other</em> would mean one specific remaining study.' },

    { id:'m4-64', type:'cloze', tag:'lk-add', level:'B2+', passage:M4_TC1, blank:'(64)',
      stem:'Choose the best option for blank (64).',
      options:['as a result','for instance','nevertheless','on the contrary'],
      answer:1,
      why:'The video call versus scrolling contrast is an example proving that “the type of content matters,” so <em>for instance</em> fits. Nothing here is a result, a concession (<em>nevertheless</em>), or a rejection of a negative statement (<em>on the contrary</em>).' },

    { id:'m4-65', type:'cloze', tag:'vm-subj', level:'C1', passage:M4_TC1, blank:'(65)',
      stem:'Choose the best option for blank (65).',
      options:['build','builds','to build','are building'],
      answer:0,
      why:'After <em>recommend that</em>, formal English uses the subjunctive — the base form — so “parents <em>build</em>,” just as the parallel clause says “devices <em>be</em> kept.” <em>To build</em> cannot follow <em>that</em>, and <em>builds</em>/<em>are building</em> state facts rather than a recommendation.' },

    { id:'m4-66', type:'cloze', tag:'rc-nondef', level:'C1', passage:M4_TC2, blank:'(66)',
      stem:'Choose the best option for blank (66).',
      options:['it','what','which','whereas'],
      answer:2,
      why:'The blank refers to the whole previous idea (farms are spreading), so a sentence-level <em>which</em> after a comma is needed: “…, which has surprised even their supporters.” <em>It</em> would create a comma splice, <em>what</em> cannot follow a comma this way, and <em>whereas</em> needs a subject of its own.' },

    { id:'m4-67', type:'cloze', tag:'vm-pattern', level:'B2+', passage:M4_TC2, blank:'(67)',
      stem:'Choose the best option for blank (67).',
      options:['reduce','reduced','reducing','reduction'],
      answer:0,
      why:'<em>Help</em> is followed by a bare infinitive (or <em>to</em> + infinitive): the plants help <em>reduce</em> the heat. <em>Reducing</em> is the tempting form but <em>help</em> does not take -ing here; <em>reduced</em> and <em>reduction</em> are not verb forms that can follow <em>help</em>.' },

    { id:'m4-68', type:'cloze', tag:'wo-front', level:'C1', passage:M4_TC2, blank:'(68)',
      stem:'Choose the best option for blank (68).',
      options:['rooftop farms strengthen','strengthen rooftop farms','do rooftop farms strengthen','rooftop farms do strengthen'],
      answer:2,
      why:'When a sentence begins with <em>Not only</em>, the subject and auxiliary are inverted, as in a question: “Not only <em>do rooftop farms strengthen</em> …, but they also …”. The normal word order (with or without emphatic <em>do</em>) is wrong after a fronted negative, and “strengthen rooftop farms” changes the meaning.' },

    { id:'m4-69', type:'cloze', tag:'vp-passinf', level:'C1', passage:M4_TC2, blank:'(69)',
      stem:'Choose the best option for blank (69).',
      options:['to check','be checked','to be checked','being checked'],
      answer:2,
      why:'The roof does not check anything; it is checked by an engineer, so a passive infinitive is needed after <em>needs</em>: “needs <em>to be checked</em>.” <em>To check</em> is active, <em>be checked</em> lacks <em>to</em>, and <em>needs being checked</em> is not standard English.' },

    { id:'m4-70', type:'cloze', tag:'vm-cond', level:'C1', passage:M4_TC2, blank:'(70)',
      stem:'Choose the best option for blank (70).',
      options:['will be','would be','had been','would have been'],
      answer:1,
      why:'This is a mixed conditional: a past condition (“had offered … ten years ago”) with a present result (“today”), so <em>would be</em> is correct. <em>Would have been</em> is the near miss — it would describe a past result and clashes with “today.” <em>Will be</em> and <em>had been</em> do not form a conditional result.' },

    { id:'m4-71', type:'cloze', tag:'rc-reduced', level:'B2+', passage:M4_TC3, blank:'(71)',
      stem:'Choose the best option for blank (71).',
      options:['named after','naming after','was named after','which named after'],
      answer:0,
      why:'The effect <em>was named</em> by others, so a reduced passive relative clause is needed: “the Mpemba effect, (which was) <em>named after</em> Erasto Mpemba.” <em>Naming</em> is active, <em>was named</em> would need a subject, and <em>which named</em> is active and missing <em>was</em>.' },

    { id:'m4-72', type:'cloze', tag:'nc-embedded', level:'B2+', passage:M4_TC3, blank:'(72)',
      stem:'Choose the best option for blank (72).',
      options:['why it happen','why it happens','why does it happen','why is it happening'],
      answer:1,
      why:'An embedded question uses statement word order and normal agreement: “arguing about <em>why it happens</em>.” <em>Why does it happen</em> and <em>why is it happening</em> keep question word order, and <em>it happen</em> breaks subject–verb agreement.' },

    { id:'m4-73', type:'cloze', tag:'lk-contrast', level:'B2', passage:M4_TC3, blank:'(73)',
      stem:'Choose the best option for blank (73).',
      options:['Even','Despite','However','Although'],
      answer:3,
      why:'A full clause follows (“these explanations sound convincing”), and the two ideas contrast, so the conjunction <em>Although</em> is needed. <em>Despite</em> must be followed by a noun or -ing form, <em>However</em> cannot join two clauses in one sentence, and <em>Even</em> alone is an adverb, not a conjunction (it would need <em>though</em>).' },

    { id:'m4-74', type:'cloze', tag:'wf-family', level:'B2+', passage:M4_TC3, blank:'(74)',
      stem:'Choose the best option for blank (74).',
      options:['consistent','inconsistent','consistently','inconsistency'],
      answer:1,
      why:'An adjective is needed before the noun <em>results</em>, and the colon explains that some experiments find the effect while others do not — results that disagree, i.e. <em>inconsistent</em>. <em>Consistent</em> is the right form but the opposite meaning; the adverb and the noun cannot modify <em>results</em>.' },

    { id:'m4-75', type:'cloze', tag:'wf-compare', level:'C1', passage:M4_TC3, blank:'(75)',
      stem:'Choose the best option for blank (75).',
      options:['less','least','fewer','the less'],
      answer:0,
      why:'The pattern “<em>less</em> X <em>than</em> Y” means “not so much X as Y”: science is not settled facts but an ongoing conversation. <em>Fewer</em> is for countable plurals, <em>least</em> is superlative and cannot go with <em>than</em>, and <em>the less</em> belongs to “the less …, the more …”.' }
  ]},

  { code:'III-2', part:'SECTION III: WRITING SKILL', title:'Part II: Paragraph Organization (Items 76–80)',
    instructions:'Choose the best answer to rearrange the following statements into a logical paragraph.', points:1.25, items:[

    { id:'m4-76', type:'choose', tag:'po-process', level:'B2+',
      stem:'<div class="orderblock"><p>A. Within seconds, every phone connected to those towers receives the message, even if its owner has never downloaded an app.</p><p>B. When forecasters detect a serious threat, such as a flash flood, they write a short warning and choose the area it should reach.</p><p>C. Cell broadcast is a technology that allows authorities to send emergency alerts to all mobile phones in a particular area at once.</p><p>D. The message is then passed to mobile network operators, who send it through the cell towers covering that area.</p></div>',
      options:['B-C-D-A','C-A-B-D','C-B-D-A','D-B-C-A'],
      answer:2,
      why:'C defines cell broadcast, so it opens. The process then runs in time order: B (forecasters write the warning) → D (“then passed to” network operators and towers) → A (“those towers” deliver it within seconds). A cannot come before D because “those towers” needs D’s “cell towers.”' },

    { id:'m4-77', type:'choose', tag:'po-compare', level:'B2+',
      stem:'<div class="orderblock"><p>A. Group study, on the other hand, exposes students to different ways of solving the same problem, although it can easily drift into gossip.</p><p>B. Studying alone allows students to work at their own pace and concentrate without distractions.</p><p>C. Ultimately, many successful students combine the two, working alone to learn new material and meeting a group to test what they know.</p><p>D. Students preparing for major exams often debate whether it is better to study alone or in a group.</p></div>',
      options:['A-B-D-C','D-B-A-C','D-C-A-B','D-C-B-A'],
      answer:1,
      why:'D introduces both options, B describes the first (studying alone), A contrasts with it (“on the other hand”), and C concludes with “Ultimately … combine the two.” “On the other hand” in A needs the first side (B) before it, and C’s “Ultimately” must come last.' },

    { id:'m4-78', type:'choose', tag:'po-argue', level:'C1',
      stem:'<div class="orderblock"><p>A. This lack of rain leaves rice fields and reservoirs short of water, putting farmers’ incomes at risk.</p><p>B. Forecasters expect a strong El Niño to develop in 2026–27, bringing unusually warm and dry conditions to Thailand.</p><p>C. Dry conditions also allow smoke and dust to linger in the air, so the dry-season PM2.5 haze is likely to be worse than usual.</p><p>D. As a result, early 2027 is expected to bring less rainfall than normal to much of the country.</p></div>',
      options:['B-A-C-D','B-D-A-C','C-B-D-A','D-A-B-C'],
      answer:1,
      why:'This is a cause–effect chain. B names the cause (El Niño), D gives its result (“As a result … less rainfall”), A follows with “This lack of rain” referring back to D, and C adds a second effect with “also.” In B-A-C-D, “This lack of rain” would have nothing to refer to.' },

    { id:'m4-79', type:'choose', tag:'po-ref', level:'C1',
      stem:'<div class="orderblock"><p>A. This sensation, known as “phantom vibration syndrome,” is surprisingly common among heavy smartphone users.</p><p>B. Many people have felt their phone vibrate in their pocket, only to discover that it was not ringing at all.</p><p>C. Such false alarms are usually harmless, but researchers see them as a sign of how closely our brains have become tuned to our devices.</p><p>D. One study found that it was reported by the majority of hospital staff who carried a phone or pager at work.</p></div>',
      options:['B-A-D-C','B-C-A-D','C-B-A-D','D-A-B-C'],
      answer:0,
      why:'B describes the experience with no reference word, so it opens. “This sensation” (A) names it, “it was reported” (D) needs the syndrome from A, and “Such false alarms” (C) sums up and closes. In B-C-A-D, D’s “it” would wrongly point to “a sign” or “our devices.”' },

    { id:'m4-80', type:'choose', tag:'po-signal', level:'B2+',
      stem:'<div class="orderblock"><p>A. Next, they should switch to timed practice papers, which reveal whether they can apply that knowledge under pressure.</p><p>B. Finally, in the last few days, they should reduce their workload and prioritize sleep so that the brain can consolidate what it has learned.</p><p>C. Experts recommend that students divide the final month before a major exam into three distinct stages.</p><p>D. First, students should review the topics they find hardest, making sure the basic ideas are clear.</p></div>',
      options:['A-C-D-B','B-C-D-A','C-A-D-B','C-D-A-B'],
      answer:3,
      why:'C announces “three distinct stages,” and the signal words order the rest: D (“First”) → A (“Next”; “that knowledge” refers to D’s basic ideas) → B (“Finally”). C-A-D-B puts “Next” before “First,” and A’s “that knowledge” would have nothing to refer to.' }
  ]}
  ]
});
