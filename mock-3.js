/* ===========================================================================
   TCAS70 Launchpad — MOCK 3 · Pressure Test  (m3)
   Difficulty: TCAS69 level, slightly harder reading inference.
   All names, brands, institutions, experts and data are fictional /
   illustrative and written for TCAS70 practice.
   =========================================================================== */

/* ---------------------------------------------------------------- SECTION I */
var M3_C1 = [
  { who: 'Situation', text: 'At an airport check-in counter' },
  { who: 'Agent', text: 'Good morning. May I see your passport and booking reference, please?' },
  { who: 'Passenger', text: 'Here you are. Just the one suitcase to check in. I’m off to Sapporo for a ski trip!' },
  { who: 'Agent', text: 'Lovely. Could you put it on the scale for me? … Hmm, it’s 27 kilos, and your fare comes with a checked baggage ___(1)___ of only 20.' },
  { who: 'Passenger', text: '27? ___(2)___ It said 21 on my bathroom scale this morning!' },
  { who: 'Agent', text: 'I’m afraid our scales are checked every morning, madam.' },
  { who: 'Passenger', text: 'Oh dear. Well, ___(3)___' },
  { who: 'Agent', text: 'You could pay the excess baggage fee, which is 450 baht per kilo, or move a few things into your carry-on bag, as long as it stays under seven kilos.' },
  { who: 'Passenger', text: 'Seven kilos at 450 baht each? That’s more than my ski pass! I’ll repack.' },
  { who: 'Passenger', text: '(Five minutes later) Right. I’m now wearing two sweaters, a jacket and my ski boots. Let’s try again.' },
  { who: 'Agent', text: '19.8 kilos. ___(4)___' },
  { who: 'Passenger', text: 'Wonderful. Now I just have to walk to Gate 47 in ski boots.' }
];

var M3_C2 = [
  { who: 'Situation', text: 'A mother and daughter at home, one week before final exams' },
  { who: 'Mum', text: 'Nan, it’s eleven o’clock. You said you were revising, but I can hear dance music through the door.' },
  { who: 'Nan', text: 'I AM revising, Mum. It’s a biology video. The music is just … in the background.' },
  { who: 'Mum', text: 'A biology video with a dance beat? ___(5)___' },
  { who: 'Nan', text: 'Okay, okay. It WAS biology for the first ten minutes. Then the algorithm took over.' },
  { who: 'Mum', text: 'That’s exactly why I think your phone should stay in the kitchen after nine o’clock until your exams are over.' },
  { who: 'Nan', text: 'After nine?! That’s ___(6)___! All my notes are on my phone! How about ten o’clock, and I keep it on flight mode while I study?' },
  { who: 'Mum', text: 'Hmm. Ten o’clock, flight mode, and it sleeps in the kitchen — not under your pillow. ___(7)___' },
  { who: 'Nan', text: 'Deal. But ___(8)___' },
  { who: 'Mum', text: 'If you ace biology, I’ll let you doomscroll all weekend. I might even join you.' }
];

var M3_C3 = [
  { who: 'Situation', text: 'A meeting of the school volunteer club' },
  { who: 'Fah', text: 'OK, let’s get down to business. The charity fun-run is five weeks away, and we still don’t have permission to use the sports field.' },
  { who: 'Beam', text: 'I emailed the deputy director last week, but she hasn’t replied. ___(9)___' },
  { who: 'Fah', text: 'Good idea. A request made face to face is much harder to ignore. Next: volunteers. How many have signed up?' },
  { who: 'Beam', text: 'Only twelve, and we need at least thirty for the water stations and the finish line.' },
  { who: 'Fah', text: 'Hmm. ___(10)___' },
  { who: 'Beam', text: 'Exactly. If we offer a free T-shirt and a volunteer certificate for their portfolios, the M6s will sign up in no time.' },
  { who: 'Fah', text: 'Which brings us to the budget. The T-shirts cost 150 baht each, and we have 4,000 baht in total.' },
  { who: 'Beam', text: 'So thirty T-shirts would come to 4,500. ___(11)___' },
  { who: 'Fah', text: 'Then let’s ask the snack shops in the canteen to sponsor us. We could print their logos on the back.' },
  { who: 'Beam', text: 'Brilliant. And if they say no, ___(12)___: we’ll print T-shirts for the first twenty volunteers and give everyone else a sticker.' }
];

var M3_LC = [
  { who: 'Situation', text: 'Open day at the Faculty of Communication Arts, Chao Phraya University' },
  { who: 'Mint', text: 'Excuse me, are you one of the student guides? I’m a bit lost.' },
  { who: 'Man', text: 'Well, I do show a lot of people around this building. How can I help?' },
  { who: 'Mint', text: 'I’m looking for the talk on the Communication Arts programme. And ___(13)___ is this faculty actually any good? My sister says the lecturers are a bit old-fashioned.' },
  { who: 'Man', text: 'Old-fashioned? ___(14)___ What makes her say that?' },
  { who: 'Mint', text: 'She studied here a few years ago. She says some lectures were so long that half the class ___(15)___. And the coffee in the faculty canteen tasted like pond water.' },
  { who: 'Man', text: '(laughing) Pond water? That’s a little harsh. ___(16)___ the faculty did install a brand-new coffee machine last year.' },
  { who: 'Mint', text: 'A coffee machine won’t fix boring lectures. ___(17)___ I heard the Dean still uses slides from 2010 and reads every word out loud.' },
  { who: 'Man', text: 'Really? That seems ___(18)___ to me. From what I know, he’s updated his slides at least twice since then.' },
  { who: 'Mint', text: 'Twice in sixteen years! That proves my point. ___(19)___ if I choose this faculty, it’ll be for the film studio, not for the Dean.' },
  { who: 'Man', text: 'Fair enough. The talk starts in five minutes in Hall 2. Let me walk you there.' },
  { who: 'Staff', text: '(hurrying over) Dean Anan! There you are! Everyone’s waiting for your welcome speech, and your slides are already on the screen.' },
  { who: 'Mint', text: 'Dean …? Oh no. ___(20)___' },
  { who: 'Dean', text: 'Don’t worry. After today, I think I’ll update them a third time.' }
];

/* ---------------------------------------------------------------- SECTION II */
var M3_AD1 = {
  brand: 'SONORA',
  headline: 'HushPod Air 2 — Hear only what matters.',
  body: [
    'Crowded BTS carriage? Noisy café? Your little brother’s online game? With HushPod Air 2, the world goes quiet at the touch of a button. Our adaptive noise-cancelling chip listens to your surroundings 200 times per second and blocks up to 95% of background noise, so you can focus on your playlist, your podcast — or your revision.',
    'Join over 500,000 students across Southeast Asia who have already made the switch.'
  ],
  bullets: [
    'Up to 9 hours of listening per charge (36 hours with the charging case)',
    '10-minute quick charge = 2 hours of play',
    'Transparency Mode: hear station announcements without taking your earbuds out',
    'Sweat- and splash-resistant (IPX5)',
    'Crystal-clear calls with 4 built-in microphones'
  ],
  price: 'Launch price ฿2,490 (normally ฿3,290) — this weekend only!',
  cta: 'Available at all Sonora stores and online at sonora-audio.example',
  fine: '18-month warranty covers manufacturing defects only. Loss, or damage caused by dropping the earbuds into water, is not covered. Battery life measured with noise cancelling switched off; actual results may vary.',
  source: 'Adapted for TCAS70 practice'
};

var M3_AD2 = {
  brand: 'BrightPath Online Academy',
  headline: 'Your TCAS and IELTS goals — just one tutor away.',
  body: [
    'Tired of crowded tutoring centres and two-hour journeys across Bangkok? BrightPath brings Thailand’s top exam coaches to your laptop. Every one of our teachers holds a master’s degree in English language teaching and has at least eight years’ experience preparing students for the TCAS A-Level and IELTS exams.',
    'Choose the class style that fits your life:'
  ],
  bullets: [
    'LIVE classes: small groups of up to 8 students, every Tuesday and Thursday, 7–9 p.m. Ask questions and get instant feedback.',
    'FLEX classes: recorded lessons you can watch any time for 6 months, plus one 20-minute personal video check-in with your tutor every week.',
    'Both options include 12 full mock tests with detailed score reports.'
  ],
  price: 'LIVE ฿6,900 per course · FLEX ฿4,500 per course. Sign up with a friend and you BOTH save ฿500!',
  cta: 'Not sure yet? Book a FREE 45-minute trial lesson at brightpath-online.example',
  fine: 'One free trial lesson per student. The friend discount applies to LIVE classes only. Course fees are non-refundable after the second lesson.',
  source: 'Adapted for TCAS70 practice'
};

var M3_REVIEW =
  'Review: The Orbis Nova X5\n\n' +
  '(1) Mid-range phones rarely get people excited, but the Orbis Nova X5 has been generating a surprising amount of noise online. At ฿12,990, it costs less than half the price of most flagship models, yet its makers claim it can compete with them where it matters most: the camera. After three weeks of using it as my only phone, I can say that claim is only half true.\n\n' +
  '(2) Let’s start with the good news. The 50-megapixel main camera is genuinely impressive. Photos taken in daylight are sharp and natural-looking, with none of the oversaturated colors that plague many cheaper phones. Even at night, on a dimly lit street in Ari, Night Mode produced shots that my friends assumed had been taken on a phone costing three times as much. In short, this is a camera that punches well above its weight.\n\n' +
  '(3) The design is also a step up from its predecessor, the Nova X4. The plastic back has been replaced with frosted glass, and the phone feels solid without being heavy. The 6.5-inch screen is bright enough to read in direct sunlight, and scrolling is smooth thanks to its 120Hz refresh rate.\n\n' +
  '(4) Unfortunately, the battery tells a different story. Orbis promises “all-day power,” but on a typical day of messaging, social media and around an hour of video, I was hunting for a charger by 6 p.m. On days when I used the camera heavily, the battery dropped below 20% by mid-afternoon. To make matters worse, there is no charger in the box, and the included cable supports only 18W charging, so a full charge takes almost two hours.\n\n' +
  '(5) There are a few smaller irritations, too. The phone arrives with nine pre-installed games and shopping apps, most of which cannot be deleted, and the fingerprint sensor occasionally fails to recognize a slightly damp finger.\n\n' +
  '(6) So, is it worth buying? If photography is your priority and you rarely spend a long day away from a power socket, the Nova X5 is hard to beat at this price. Heavy users, however, may want to wait for Orbis to fix the battery — or keep a power bank permanently in their bag.';

var M3_NEWS =
  'Northern schools switch to online classes as PM2.5 soars\n' +
  'By Chronicle reporter Naree Suksawat\n\n' +
  '(1) Hundreds of schools across three northern provinces moved their lessons online this week after levels of fine dust particles, known as PM2.5, climbed to more than ten times the limit recommended by the World Health Organization.\n\n' +
  '(2) In Chiang Mai, provincial officials ordered more than 400 state and private schools to stop face-to-face teaching for at least five days, while neighboring Chiang Rai and Lampang issued similar instructions for schools in their worst-affected districts.\n\n' +
  '(3) On Tuesday morning, a thick gray haze hid Doi Suthep from the city center, and air-quality monitors in several districts recorded PM2.5 readings above 200 micrograms per cubic meter.\n\n' +
  '(4) “The air is simply not safe for children to breathe on the way to school, let alone during outdoor activities,” a provincial health official told reporters. “Keeping them at home is the least bad option we have.”\n\n' +
  '(5) The haze is caused largely by the burning of forests and farmland, both in Thailand and in neighboring countries, during the dry season. Still air and a lack of rain trap the smoke close to the ground, sometimes for weeks.\n\n' +
  '(6) Doctors say the tiny particles, about 30 times thinner than a human hair, can travel deep into the lungs and even enter the bloodstream. Children, older people and those with asthma or heart disease face the greatest risk.\n\n' +
  '(7) Hospitals in the region reported a sharp rise in patients with breathing problems over the weekend. One clinic in Mueang district said it had treated nearly twice as many children with coughs and eye irritation as it had at the same time last year.\n\n' +
  '(8) Not everyone welcomed the decision to close classrooms. Some parents said they had no choice but to leave young children at home alone or take unpaid leave from work.\n\n' +
  '(9) “My daughter is eight. She can’t follow lessons on a phone for six hours, and I can’t stay home every time the sky turns gray,” said one mother, who runs a noodle stall near a market in the city.\n\n' +
  '(10) Teachers, too, raised concerns. Many said that students from poorer families did not have laptops or a reliable internet connection, and that attendance at online classes had dropped to around 60 percent in some rural schools.\n\n' +
  '(11) Some experts argue that sending children home does not necessarily protect them. “A house with open windows and no air purifier may be no cleaner than a classroom,” said Dr Kittipong Rattanachai, an environmental health researcher at Lanna Valley University. “Schools with sealed classrooms and proper filters could actually be the safest place for many children.”\n\n' +
  '(12) Several schools have already taken this approach. One private school in Chiang Mai has installed air purifiers in every classroom and turned its sports hall into a “clean-air zone” where students can exercise indoors.\n\n' +
  '(13) Provincial officials said they would review the closures on Friday, depending on the weather forecast. They added that fines for illegal burning would be strictly enforced and that drones were being used to spot fires in remote areas.\n\n' +
  '(14) Meanwhile, forecasters warned that the haze could get worse before it gets better. With a strong El Niño expected to bring hotter, drier conditions in the months ahead, some fear that this year’s smoke season could last longer than usual.';

var M3_V1 = {
  kind: 'line',
  title: 'Monthly average PM2.5 (µg/m³): Chiang Mai vs Bangkok',
  unit: 'µg/m³',
  labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    { name: 'Chiang Mai', values: [22, 30, 41, 58, 96, 74, 28, 12] },
    { name: 'Bangkok', values: [27, 38, 45, 36, 29, 24, 16, 11] },
    { name: 'WHO 24-hour guideline', values: [15, 15, 15, 15, 15, 15, 15, 15] }
  ],
  note: 'The WHO 24-hour guideline for PM2.5 is 15 µg/m³. Illustrative data for practice.',
  source: 'Adapted for TCAS70 practice'
};

var M3_V2 = {
  kind: 'table',
  title: 'Top 10 countries by electric-car sales, 2025',
  cols: ['Rank', 'Country', 'Electric cars sold (thousands)'],
  rows: [
    ['1', 'China', '11,300'],
    ['2', 'United States', '1,560'],
    ['3', 'Germany', '620'],
    ['4', 'United Kingdom', '480'],
    ['5', 'France', '390'],
    ['6', 'Canada', '260'],
    ['7', 'South Korea', '230'],
    ['8', 'Belgium', '190'],
    ['9', 'Norway', '150'],
    ['10', 'Thailand', '110']
  ],
  note: 'Illustrative data for practice.',
  source: 'Adapted for TCAS70 practice'
};

var M3_ART1 =
  'The Hidden Cost of a Cheap T-shirt\n\n' +
  '(1) A T-shirt for 99 baht can feel like a bargain. You wear it to a concert, post one photo, and forget about it. But the true cost of that shirt is not printed on the price tag. It is paid elsewhere — by rivers, by landfills, and by the people who sewed it. This is the business model known as fast fashion: trend-led clothing that is produced quickly, sold cheaply and, more often than not, thrown away after only a handful of wears.\n\n' +
  '(2) The scale of the problem is difficult to grasp. According to widely cited estimates, the fashion industry now produces well over 100 billion garments a year, while the number of times each item is worn has fallen sharply. Much of what we discard is never recycled. Because most cheap clothing is made from blends of cotton and plastic-based fibers such as polyester, it is extremely hard to separate and repurpose. The upshot is that the equivalent of a garbage truck full of textiles is burned or dumped in a landfill every second.\n\n' +
  '(3) The damage begins long before a garment reaches the bin. Growing cotton requires vast amounts of water — around 2,700 liters for a single T-shirt, by one common estimate, which is roughly what one person drinks in two and a half years. Dyeing and finishing fabric, meanwhile, releases chemicals into rivers near factories, turning some of them the color of the season’s trends. And every time a polyester shirt is washed, it sheds tiny plastic fibers that eventually find their way into the ocean.\n\n' +
  '(4) Then there is the human cost. To keep prices low and new collections arriving every week, brands rely on factories in countries where labor is cheap. Garment workers, most of them women, often work long hours for wages that barely cover food and rent. Critics argue that as long as shoppers expect a new outfit for the price of a sandwich, someone further down the supply chain will pay the difference.\n\n' +
  '(5) In response, a growing movement is promoting what economists call a circular economy. In a traditional “linear” model, we take resources, make a product, and throw it away. A circular model aims to keep materials in use for as long as possible. For clothing, that means buying second-hand, repairing rather than replacing, renting outfits for one-off events, and designing garments that can be fully recycled. Resale apps have made pre-loved clothes fashionable among young shoppers, and some brands now offer free repairs for their own products. Renting a dress for a school dance, for instance, can cost a fraction of buying one that will be worn only once.\n\n' +
  '(6) However, not every green promise can be taken at face value. Some fast-fashion companies have launched “conscious” collections that contain only a small share of recycled material, while continuing to release thousands of new designs each year. Environmental groups call this greenwashing: using the language of sustainability to sell more of the very products that cause the problem. A recycling bin at the shop entrance, they point out, does little good if it simply helps customers feel less guilty about buying more.\n\n' +
  '(7) Ultimately, experts agree that the most sustainable garment is the one already hanging in your closet. Fashion researcher Dr Anchalee Srisuk of Chao Phraya University puts it simply: “Recycling is the last resort, not the first. The real revolution is wearing what we own thirty times, not three.” For a generation that has grown up with endless online hauls, that may be the hardest trend of all to follow.';

var M3_ART2 =
  'Seeing Isn’t Believing: Why Teenagers Struggle to Spot AI Fakes\n\n' +
  '(1) Last month, a short video began circulating in a group chat at a Bangkok secondary school. It appeared to show a famous footballer arriving at the school gate in a golden sports car. Students shared it more than 3,000 times before a teacher pointed out that the player had six fingers on one hand. The clip had been made in under a minute with a free AI app.\n\n' +
  '(2) Incidents like this are becoming routine. Text-to-video tools released since 2025 allow anyone to produce realistic footage simply by typing a description. Many of these apps are free, and the clips they create can be downloaded and shared on any platform within seconds. And contrary to the popular belief that young people, as “digital natives,” are naturally skilled at spotting fakes, research suggests that teenagers are often among the easiest to fool.\n\n' +
  '(3) In one study by the Centre for Media Literacy at Lanna Valley University, 1,200 secondary students were shown a mix of real and AI-generated images and videos. Participants correctly identified only 54 percent of the items — barely better than tossing a coin. More worryingly, the students who rated themselves as “very confident” performed no better than those who admitted they were unsure.\n\n' +
  '(4) Why are teenagers so vulnerable? Part of the answer lies in how they consume content. Most videos are viewed on small screens, at speed, in feeds designed to keep users scrolling. “The algorithm rewards emotion, not accuracy,” explains Dr Supaporn Chaiyaporn, who led the study. “When a clip makes you laugh or makes you angry, the last thing you want to do is stop and check it.” Another factor is social trust: a video forwarded by a close friend feels credible, even though the friend has no more idea where it came from than you do.\n\n' +
  '(5) Many schools still teach students to spot fakes by looking for visual glitches — strange hands, blurry teeth, shadows falling in the wrong direction. The trouble is that each new generation of AI tools fixes these errors, so a checklist that works this year may be useless the next. Some of the clues listed on a popular school handout only two years ago are already out of date. Experts therefore argue that the focus should shift from the image itself to the context around it.\n\n' +
  '(6) This is the idea behind a technique called lateral reading. Instead of studying a suspicious video closely — what fact-checkers call “reading vertically” — students are taught to leave it: to open new tabs and ask who posted it first, whether trusted news outlets have reported it, and what other sources say. In trials, students trained in lateral reading became significantly better at identifying false content after just a few lessons, while those who had practiced hunting for glitches improved only slightly.\n\n' +
  '(7) Simple habits can make a big difference, too. Before sharing anything, the researchers recommend a short pause — even ten seconds — to ask whether a post is designed to trigger a strong emotion. Running a reverse image search, checking the date of the original upload, and looking for the same story from at least two reliable sources are also effective.\n\n' +
  '(8) None of this means that teenagers should distrust everything they see. Constant suspicion, experts warn, can be as damaging as blind belief, because it leads people to dismiss real evidence as “probably AI.” The goal is not cynicism but calibrated trust: knowing when to believe, when to doubt, and how to find out. As Dr Supaporn puts it, “In the age of AI, the most important skill isn’t having sharp eyes. It’s having good questions.”';

/* ---------------------------------------------------------------- SECTION III */
var M3_TC1 =
  'Passage 1\n\n' +
  'Few school rules spark as much debate as the uniform. Supporters say it creates an environment ___(61)___ students are judged by their ideas rather than by their clothes. It ___(62)___ that uniforms save families money, since parents no longer need to buy a new outfit for every passing trend. Critics, ___(63)___, see the uniform as a relic of the past. They point out that a ___(64)___ blazer makes little sense in a country where afternoon temperatures regularly climb above 35°C, and that forcing everyone to dress alike may discourage self-expression at the very age when young people are forming their identities. Last year, one student council in Chiang Mai proposed that the rule ___(65)___ relaxed during the hot season, allowing students to wear the school’s cotton polo shirt instead. To the surprise of many, the school agreed.';

var M3_TC2 =
  'Passage 2\n\n' +
  'A placebo is a “fake” treatment, such as a sugar pill, that contains no active ingredient. ___(66)___, many patients who take one report feeling better. Since the 1950s, doctors ___(67)___ placebos in clinical trials to check whether new drugs really work, but the placebo effect itself has become a fascinating field of research. Scientists are still debating ___(68)___, although brain scans suggest that simply expecting relief can trigger the release of the body’s natural painkillers. The “packaging” matters, too: injections tend to work better than pills, and an ___(69)___ pill often outperforms a plain one, even when both contain nothing but sugar. Most remarkably, placebos can work even when patients know the truth. In so-called “open-label” studies, patients who ___(70)___ that their pills were fake still reported less pain than those who received no treatment at all.';

var M3_TC3 =
  'Passage 3\n\n' +
  'When a honeybee finds a rich patch of flowers, she does not keep the discovery to herself. ___(71)___ to the hive, she performs a “waggle dance” on the honeycomb while her sisters crowd around her in the dark. The dance communicates ___(72)___ the direction of the food but also its distance: the angle of the dancer’s straight “waggle run” shows where the flowers lie in relation to the sun, and the length of the run indicates how far away they are. Some bees follow the dancer for several rounds; ___(73)___ fly off after watching only once. For the message ___(74)___ correctly, the dance is repeated dozens of times, so bees that arrive late can still catch the information. The ability of these tiny insects to share such precise information without a single word ___(75)___ led many scientists to rethink what animal minds are capable of.';

MOCKS.push({
  id: 'm3',
  name: 'Mock 3 · Pressure Test',
  blurb: 'A full 80-item paper at TCAS69 difficulty with sharper reading inference: haze and online schools, fast fashion, AI fakes and a Dean in disguise.',
  minutes: 90,
  total: 100,
  sections: [

    /* ============================================ I-1 Short Conversations 1–12 */
    { code: 'I-1', part: 'SECTION I: LISTENING AND SPEAKING SKILLS', title: 'Part I: Short Conversations (Items 1–12)',
      instructions: 'Choose the best answers to complete the following conversations.', points: 1.25,
      items: [
        { id: 'm3-1', type: 'gap', lines: M3_C1, blank: '(1)', tag: 'vc-colloc', level: 'B2',
          stem: 'Choose the best option for blank (1).',
          options: ['charge', 'deposit', 'allowance', 'reservation'], answer: 2,
          why: 'The fixed partnership is <em>baggage allowance</em>: the amount of luggage your ticket lets you take free. A <em>charge</em> is money you pay, so “a baggage charge of only 20” cannot mean 20 kilos; <em>deposit</em> and <em>reservation</em> do not collocate with a weight limit at all.' },

        { id: 'm3-2', type: 'gap', lines: M3_C1, blank: '(2)', tag: 'cv-react', level: 'B1+',
          stem: 'Choose the best option for blank (2).',
          options: ['No way!', 'Fair enough.', 'What a relief!', 'I saw that coming.'], answer: 0,
          why: 'The passenger immediately protests that her own scale showed 21 kilos, so she refuses to believe the number: <em>No way!</em> <em>Fair enough</em> would accept the weight, <em>I saw that coming</em> says she expected it, and <em>What a relief!</em> is the wrong emotion for bad news.' },

        { id: 'm3-3', type: 'gap', lines: M3_C1, blank: '(3)', tag: 'cv-next', level: 'B2',
          stem: 'Choose the best option for blank (3).',
          options: ['what can I do about it?', 'where can I pay the fee?', 'could I speak to your manager?', 'which gate does my flight leave from?'], answer: 0,
          why: 'The agent’s reply offers two choices (“You could pay the excess baggage fee … or move a few things into your carry-on”), so the passenger must have asked what she can do. <em>Where can I pay the fee?</em> is the near miss: it would be answered with a place, not with a choice between paying and repacking.' },

        { id: 'm3-4', type: 'gap', lines: M3_C1, blank: '(4)', tag: 'cv-next', level: 'B1+',
          stem: 'Choose the best option for blank (4).',
          options: ['Nice try.', 'Try again.', 'Still too heavy.', 'You’re good to go.'], answer: 3,
          why: '19.8 kilos is under the 20-kilo allowance, and the passenger answers “Wonderful” and talks about walking to the gate, so the bag has been accepted: <em>You’re good to go</em>. <em>Still too heavy</em> and <em>Try again</em> would mean she has to repack again, and <em>Nice try</em> means the attempt failed.' },

        { id: 'm3-5', type: 'gap', lines: M3_C2, blank: '(5)', tag: 'id-reaction', level: 'C1',
          stem: 'Choose the best option for blank (5).',
          options: ['Fair enough.', 'Count me in.', 'Good for you.', 'Pull the other one.'], answer: 3,
          why: '<em>Pull the other one</em> is an idiom meaning “I don’t believe you”, and Nan’s next line (“Okay, okay. It WAS biology for the first ten minutes”) admits that Mum was right to doubt her. <em>Fair enough</em> would mean Mum accepts the excuse, so Nan would have nothing to confess.' },

        { id: 'm3-6', type: 'gap', lines: M3_C2, blank: '(6)', tag: 'cv-agree', level: 'B2',
          stem: 'Choose the best option for blank (6).',
          options: ['a win-win', 'a no-brainer', 'a piece of cake', 'out of the question'], answer: 3,
          why: 'Nan strongly rejects the nine o’clock rule and immediately makes a counter-offer, so she calls it <em>out of the question</em> (completely impossible). <em>A win-win</em> and <em>a no-brainer</em> would mean she thinks the plan is obviously good, and <em>a piece of cake</em> would mean it is easy for her.' },

        { id: 'm3-7', type: 'gap', lines: M3_C2, blank: '(7)', tag: 'id-situation', level: 'B2+',
          stem: 'Choose the best option for blank (7).',
          options: ['Suit yourself.', 'Take it or leave it.', 'Easier said than done.', 'Mind your own business.'], answer: 1,
          why: 'Mum states her final conditions and Nan answers “Deal”, so Mum has made a last offer: <em>Take it or leave it</em>. <em>Suit yourself</em> is the near miss, but it means “do whatever you want”, the opposite of setting firm terms.' },

        { id: 'm3-8', type: 'gap', lines: M3_C2, blank: '(8)', tag: 'cv-next', level: 'B2',
          stem: 'Choose the best option for blank (8).',
          options: ['can we discuss it tomorrow?', 'who invented exams, anyway?', 'what do I get if I ace biology?', 'can the phone sleep under my pillow?'], answer: 2,
          why: 'Mum’s answer begins “If you ace biology, I’ll let you …”, which describes a reward, so Nan must have asked what she will get. Asking about the pillow reopens a point Mum has just ruled out, and Mum’s reply does not address it.' },

        { id: 'm3-9', type: 'gap', lines: M3_C3, blank: '(9)', tag: 'cv-request', level: 'B2',
          stem: 'Choose the best option for blank (9).',
          options: ['Shall we assume that’s a yes?', 'Shall I send her another email?', 'Shall I go and see her in person?', 'Shall we just move it to the car park?'], answer: 2,
          why: 'Fah approves the idea because “a request made face to face is much harder to ignore”, so Beam has offered to visit the deputy director in person. Sending another email is the near miss: it is a sensible offer, but it is not face to face.' },

        { id: 'm3-10', type: 'gap', lines: M3_C3, blank: '(10)', tag: 'cv-advice', level: 'B2',
          stem: 'Choose the best option for blank (10).',
          options: ['So we need an incentive?', 'So twelve is enough after all?', 'So the M6s are too busy to help?', 'So we should cut some water stations?'], answer: 0,
          why: 'Beam says “Exactly” and then describes rewards (a free T-shirt and a certificate) to attract volunteers, so Fah has suggested that people need an incentive. Beam also predicts the M6s “will sign up in no time”, which rules out the idea that they are too busy.' },

        { id: 'm3-11', type: 'gap', lines: M3_C3, blank: '(11)', tag: 'cv-next', level: 'B2',
          stem: 'Choose the best option for blank (11).',
          options: ['That leaves us 500 spare.', 'We’re 500 baht short, then.', 'That’s well within our budget.', 'We could even afford forty of them.'], answer: 1,
          why: 'Thirty T-shirts cost 4,500 baht but the club has only 4,000, so it is 500 baht short, which is why Fah immediately looks for sponsors. <em>That leaves us 500 spare</em> uses the right number but gets the direction wrong.' },

        { id: 'm3-12', type: 'gap', lines: M3_C3, blank: '(12)', tag: 'id-situation', level: 'B2+',
          stem: 'Choose the best option for blank (12).',
          options: ['it’s the last straw', 'there’s always Plan B', 'it’s back to square one', 'the ball is in their court'], answer: 1,
          why: 'After the colon Beam describes a backup plan (fewer T-shirts, stickers for the rest), so the missing phrase must introduce an alternative: <em>there’s always Plan B</em>. <em>It’s back to square one</em> is the near miss, but it means starting again from nothing, and Beam clearly has a plan ready.' }
      ] },

    /* ============================================ I-2 Long Conversation 13–20 */
    { code: 'I-2', part: 'SECTION I: LISTENING AND SPEAKING SKILLS', title: 'Part II: Long Conversation (Items 13–20)',
      instructions: 'Choose the best answers to complete the following conversation.', points: 1.25,
      items: [
        { id: 'm3-13', type: 'gap', lines: M3_LC, blank: '(13)', tag: 'dm-stance', level: 'C1',
          stem: 'Choose the best option for blank (13).',
          options: ['in a nutshell,', 'between you and me,', 'as a matter of fact,', 'without further ado,'], answer: 1,
          why: 'Mint is about to ask a frank, slightly cheeky question she would not ask in public, so she uses <em>between you and me</em> (= speaking privately and honestly). <em>As a matter of fact</em> introduces a surprising fact, not a question, and <em>without further ado</em> opens a speech or an event.' },

        { id: 'm3-14', type: 'gap', lines: M3_LC, blank: '(14)', tag: 'id-reaction', level: 'B2',
          stem: 'Choose the best option for blank (14).',
          options: ['Same here.', 'Good for her.', 'Congratulations.', 'That’s news to me.'], answer: 3,
          why: 'The man is surprised by the claim and asks “What makes her say that?”, so he has not heard this opinion before: <em>That’s news to me</em>. <em>Same here</em> would mean he agrees that the lecturers are old-fashioned, which does not fit his follow-up question.' },

        { id: 'm3-15', type: 'gap', lines: M3_LC, blank: '(15)', tag: 'vc-phrasal', level: 'B2',
          stem: 'Choose the best option for blank (15).',
          options: ['set off', 'nodded off', 'showed off', 'dropped by'], answer: 1,
          why: 'Long, boring lectures make students fall asleep, and <em>nod off</em> means exactly that. <em>Showed off</em> looks similar but means “tried to impress people”, while <em>set off</em> (started a journey) and <em>dropped by</em> (visited briefly) do not describe a reaction to a long lecture.' },

        { id: 'm3-16', type: 'gap', lines: M3_LC, blank: '(16)', tag: 'dm-contrast', level: 'C1',
          stem: 'Choose the best option for blank (16).',
          options: ['As a result,', 'In other words,', 'For what it’s worth,', 'To make matters worse,'], answer: 2,
          why: '<em>For what it’s worth</em> politely introduces a small point against someone’s view: the man gently defends the faculty by mentioning the new coffee machine. <em>To make matters worse</em> would add another complaint, and <em>As a result</em> and <em>In other words</em> make no logical link to calling the comment harsh.' },

        { id: 'm3-17', type: 'gap', lines: M3_LC, blank: '(17)', tag: 'dm-add', level: 'B2+',
          stem: 'Choose the best option for blank (17).',
          options: ['Besides,', 'By contrast,', 'In that case,', 'Having said that,'], answer: 0,
          why: 'Mint adds a second complaint (the Dean’s old slides) to the first (boring lectures), so she needs an adding marker: <em>Besides</em>. <em>Having said that</em> is the near miss, but it introduces a point that goes against what was just said, and Mint is not softening her criticism at all.' },

        { id: 'm3-18', type: 'gap', lines: M3_LC, blank: '(18)', tag: 'id-situation', level: 'C1',
          stem: 'Choose the best option for blank (18).',
          options: ['a piece of cake', 'a bit of a stretch', 'right on the money', 'the tip of the iceberg'], answer: 1,
          why: 'The man doubts Mint’s story and corrects it (“he’s updated his slides at least twice”), so he calls the claim an exaggeration: <em>a bit of a stretch</em>. <em>Right on the money</em> means exactly correct, and <em>the tip of the iceberg</em> would suggest the problem is even bigger, the opposite of his reply.' },

        { id: 'm3-19', type: 'gap', lines: M3_LC, blank: '(19)', tag: 'dm-rephrase', level: 'C1',
          stem: 'Choose the best option for blank (19).',
          options: ['For instance,', 'Out of the blue,', 'To make an analogy,', 'At the end of the day,'], answer: 3,
          why: 'Mint is summing up and giving her final position after weighing everything, which is what <em>At the end of the day</em> signals. <em>To make an analogy</em> would need a comparison that never comes, and <em>For instance</em> would need an example of something already said.' },

        { id: 'm3-20', type: 'gap', lines: M3_LC, blank: '(20)', tag: 'cv-twist', level: 'B2+',
          stem: 'Choose the best option for blank (20).',
          options: ['Where is the coffee machine?', 'Is the talk in Hall 2 or Hall 3?', 'I take back what I said about your slides.', 'I’ll tell my sister you’re a great student guide.'], answer: 2,
          why: 'Mint realises she has been criticising the Dean to his face, so she apologises for her remark about his slides, and he replies with a joke about updating them “a third time”. The other lines ignore the twist, and none of them explains why the Dean answers by talking about his slides.' }
      ] },

    /* ============================================ II-1 Advertisements 21–26 */
    { code: 'II-1', part: 'SECTION II: READING SKILL', title: 'Part I: Advertisements (Items 21–26)',
      instructions: 'Read the following advertisements and choose the best answer for each question.', points: 1.25,
      items: [
        { id: 'm3-21', type: 'read', passage: '', ad: M3_AD1, tag: 'ad-detail', level: 'B1+',
          stem: 'Which feature of HushPod Air 2 is NOT mentioned in the advertisement?',
          options: ['quick charging', 'sweat resistance', 'clear phone calls', 'a choice of colours'], answer: 3,
          why: 'The ad mentions a “10-minute quick charge”, “Sweat- and splash-resistant (IPX5)” and “Crystal-clear calls with 4 built-in microphones”, but it never says the earbuds come in different colours. Every other option is taken almost word for word from the bullet points.' },

        { id: 'm3-22', type: 'read', passage: '', ad: M3_AD1, tag: 'ad-technique', level: 'B2',
          stem: 'The sentence “Join over 500,000 students across Southeast Asia who have already made the switch.” is an example of which advertising technique?',
          options: ['Following the crowd', 'Using expert endorsement', 'Creating a sense of urgency', 'Appealing to a desire for peace'], answer: 0,
          why: 'Telling readers that half a million other students have already bought the product persuades them to do what everyone else is doing: the bandwagon technique. Urgency (“this weekend only”) and peace (the headline) do appear elsewhere in the ad, but not in this sentence.' },

        { id: 'm3-23', type: 'read', passage: '', ad: M3_AD1, tag: 'ad-fineprint', level: 'B2+',
          stem: 'Which of the following problems would be covered by the warranty?',
          options: ['A buyer loses the charging case on the BTS.', 'A buyer drops an earbud into a swimming pool.', 'A faulty part stops one earbud charging after six months.', 'The earbuds last only seven hours when noise cancelling is switched on.'], answer: 2,
          why: 'The warranty lasts 18 months and “covers manufacturing defects only”, so a faulty part after six months is covered. Loss and water damage are excluded by name, and the small print warns that battery life was measured with noise cancelling off, so shorter battery life with it on is not a defect.' },

        { id: 'm3-24', type: 'read', passage: '', ad: M3_AD2, tag: 'ad-purpose', level: 'B1+',
          stem: 'Advertisement 2 is mainly aimed at ______.',
          options: ['students with big English exams ahead', 'teachers hoping to earn a master’s degree', 'parents who want a tutoring centre near home', 'office workers who need English for business meetings'], answer: 0,
          why: 'The headline speaks to “your TCAS and IELTS goals”, and every class includes mock tests, so the target is students preparing for major exams. The master’s degree belongs to the tutors, not the customers, and the ad presents online study as an escape from tutoring centres.' },

        { id: 'm3-25', type: 'read', passage: '', ad: M3_AD2, tag: 'ad-compare', level: 'B2',
          stem: 'Which statement about the FLEX classes is correct?',
          options: ['They cost less if two friends sign up together.', 'They include a weekly one-to-one video check-in.', 'They come without the mock tests and score reports.', 'Students can watch them only on Tuesdays and Thursdays.'], answer: 1,
          why: 'FLEX includes “one 20-minute personal video check-in with your tutor every week”. The friend discount is the near miss: the small print says it “applies to LIVE classes only”. The fixed Tuesday and Thursday times also belong to LIVE, and both options include the 12 mock tests.' },

        { id: 'm3-26', type: 'read', passage: '', ad: M3_AD2, tag: 'ad-fineprint', level: 'C1',
          stem: 'Pim and her best friend sign up for the LIVE course together. Pim decides to quit after her third lesson. Which of the following is true?',
          options: ['She pays ฿6,900 but gets a full refund.', 'She pays ฿6,400 and cannot get a refund.', 'She pays ฿4,000 and gets half of it back.', 'She pays ฿6,400 and is refunded for unused lessons.'], answer: 1,
          why: 'LIVE costs ฿6,900 and signing up with a friend saves ฿500 (valid for LIVE), so Pim pays ฿6,400. Fees are “non-refundable after the second lesson” and she leaves after the third, so she gets nothing back; the last option has the right price but ignores this condition.' }
      ] },

    /* ============================================ II-2 Review 27–32 */
    { code: 'II-2', part: 'SECTION II: READING SKILL', title: 'Part II: Product/Service Review (Items 27–32)',
      instructions: 'Read the following review and choose the best answer for each question.', points: 1.25,
      items: [
        { id: 'm3-27', type: 'read', passage: M3_REVIEW, tag: 'rv-attitude', level: 'B2',
          stem: 'Which statement best describes the reviewer’s overall opinion of the Nova X5?',
          options: ['It suits some users well but has one serious flaw.', 'It is the best smartphone on the market at any price.', 'It is poor value because its camera fails to impress.', 'It is not worth buying until Orbis improves both its camera and design.'], answer: 0,
          why: 'The verdict in paragraph 6 is mixed: the phone is “hard to beat at this price” for photographers, but heavy users should wait because of the battery. The reviewer praises the camera and the design, so the options criticising them are wrong, and nothing suggests it beats every phone at any price.' },

        { id: 'm3-28', type: 'read', passage: M3_REVIEW, tag: 'rd-expression', level: 'B2+',
          stem: 'In paragraph 2, the expression “punches well above its weight” means that the camera ______.',
          options: ['is more powerful than it needs to be', 'tries too hard to copy expensive phones', 'is heavier than cameras on similar phones', 'performs better than its price would suggest'], answer: 3,
          why: 'The idiom comes from boxing: a light fighter who hits as hard as a heavier one. The context confirms it, because friends thought the photos came from “a phone costing three times as much”. The option about being heavier is a literal reading of “weight” and misses the point.' },

        { id: 'm3-29', type: 'read', passage: M3_REVIEW, tag: 'rv-evidence', level: 'B2+',
          stem: 'Which detail best supports the reviewer’s claim that the battery is disappointing?',
          options: ['Its screen is easy to read in sunlight.', 'Orbis promises that it offers all-day power.', 'The phone arrives with nine pre-installed apps.', 'It needed a charger by 6 p.m. on an ordinary day.'], answer: 3,
          why: 'Evidence is what actually happened in the test: on a typical day the reviewer “was hunting for a charger by 6 p.m.” Orbis’s promise of “all-day power” is the near miss: it is only the company’s claim, which the test then disproves. The screen and the pre-installed apps have nothing to do with the battery.' },

        { id: 'm3-30', type: 'read', passage: M3_REVIEW, tag: 'ad-vocab', level: 'B2',
          stem: 'The word “predecessor” in paragraph 3 refers to ______.',
          options: ['an older model of the same phone', 'the first phone Orbis ever produced', 'a more expensive version of the phone', 'a rival phone made by another company'], answer: 0,
          why: 'A <em>predecessor</em> is the thing that came before, and the review names it: “the Nova X4”, the previous model in the same series. Nothing says it was Orbis’s very first phone (the near miss), and it is neither a rival brand nor a pricier version.' },

        { id: 'm3-31', type: 'read', passage: M3_REVIEW, tag: 'rv-infer', level: 'C1',
          stem: 'According to the review, which user would most likely be disappointed with the Nova X5?',
          options: ['a tour guide who films all day, far from a socket', 'a buyer who wants a stylish phone that feels solid', 'a student who takes a few photos of friends each day', 'an office worker who can charge her phone at her desk'], answer: 0,
          why: 'Heavy camera use drained the battery “below 20% by mid-afternoon”, and the reviewer warns people who spend “a long day away from a power socket”. A tour guide filming all day meets both problems, while the other users rely on the phone’s strengths (camera, design) or can charge easily.' },

        { id: 'm3-32', type: 'read', passage: M3_REVIEW, tag: 'rd-notexcept', level: 'B2+',
          stem: 'Which type of information is NOT included in the review?',
          options: ['the price of the phone', 'advice for different kinds of buyers', 'the results of laboratory battery tests', 'a comparison with the phone’s earlier model'], answer: 2,
          why: 'All the battery information comes from the reviewer’s own three weeks of everyday use, not from laboratory tests. The price (฿12,990), the comparison with the Nova X4 and the advice for photographers versus heavy users all appear in the review.' }
      ] },

    /* ============================================ II-3 News 33–38 */
    { code: 'II-3', part: 'SECTION II: READING SKILL', title: 'Part III: News Report (Items 33–38)',
      instructions: 'Read the following news report and choose the best answer for each question.', points: 1.25,
      items: [
        { id: 'm3-33', type: 'read', passage: M3_NEWS, source: 'Adapted for TCAS70 practice (The Bangkok Chronicle)', tag: 'rd-news', level: 'B2',
          stem: 'What is the main idea of the news report?',
          options: ['Parents in Chiang Mai have protested against the closure of private schools.', 'Officials have banned all farming in the North to reduce dangerous PM2.5 levels.', 'Hospitals in the North are struggling to treat children made ill by forest fires.', 'Severe haze has pushed northern schools online, a decision that has drawn mixed reactions.'], answer: 3,
          why: 'The headline and lead report the school closures, and paragraphs 8–12 give the views of parents, teachers and experts who question them, hence “mixed reactions”. The hospital rise is only a supporting detail, parents complained but did not protest, and officials are fining illegal burning, not banning farming.' },

        { id: 'm3-34', type: 'read', passage: M3_NEWS, source: 'Adapted for TCAS70 practice (The Bangkok Chronicle)', tag: 'rd-cause', level: 'B2',
          stem: 'According to paragraph 5, what keeps the smoke close to the ground?',
          options: ['Heavy traffic in the city', 'Factories across the border', 'Fires that start in people’s homes', 'Still weather conditions and a lack of rain'], answer: 3,
          why: 'Paragraph 5 says “Still air and a lack of rain trap the smoke close to the ground.” Neighbouring countries are mentioned as a place where burning happens, not as a source of factory smoke, and the fires are in forests and farmland, not homes; traffic is never mentioned.' },

        { id: 'm3-35', type: 'read', passage: M3_NEWS, source: 'Adapted for TCAS70 practice (The Bangkok Chronicle)', tag: 'rd-detail', level: 'B2',
          stem: 'Which statement about the health effects of PM2.5 is TRUE according to the report?',
          options: ['Only people with asthma are harmed by the particles.', 'The particles can pass from the lungs into the blood.', 'A clinic treated half as many children as it did last year.', 'The particles are too large to get past the nose and throat.'], answer: 1,
          why: 'Paragraph 6 says the particles “can travel deep into the lungs and even enter the bloodstream”. The clinic treated “nearly twice as many” children, not half as many, and the report lists several groups at risk, not only people with asthma.' },

        { id: 'm3-36', type: 'read', passage: M3_NEWS, source: 'Adapted for TCAS70 practice (The Bangkok Chronicle)', tag: 'rd-views', level: 'B2+',
          stem: 'What point does Dr Kittipong Rattanachai make in paragraph 11?',
          options: ['Filtered classrooms may be safer than many homes.', 'Schools should cancel exams until the burning season ends.', 'Online lessons are more effective than face-to-face lessons.', 'Children should be kept at home until the haze has fully cleared.'], answer: 0,
          why: 'He argues that a home with open windows “may be no cleaner than a classroom” and that sealed classrooms with filters “could actually be the safest place”. Keeping children at home is the officials’ policy, the very view he questions, so that option reverses his point.' },

        { id: 'm3-37', type: 'read', passage: M3_NEWS, source: 'Adapted for TCAS70 practice (The Bangkok Chronicle)', tag: 'rd-infer', level: 'C1',
          stem: 'What can be inferred from paragraphs 8–10?',
          options: ['Parents want schools closed for longer.', 'The burden of the closures does not fall equally on all families.', 'Teachers have refused to teach online until every student has a laptop.', 'Online classes have been more popular in rural schools than in city schools.'], answer: 1,
          why: 'Working parents must take unpaid leave or leave children alone, and poorer students lack laptops and internet, so the closures hurt some families far more than others. Rural attendance actually dropped to about 60 percent, and teachers raised concerns but did not refuse to teach.' },

        { id: 'm3-38', type: 'read', passage: M3_NEWS, source: 'Adapted for TCAS70 practice (The Bangkok Chronicle)', tag: 'rd-support', level: 'B2+',
          stem: 'Which detail best suggests that the pollution problem may continue for some time?',
          options: ['Officials will review the closures on Friday.', 'Drones are being used to find fires in remote areas.', 'One private school has turned its sports hall into a clean-air zone.', 'A weather pattern is expected to bring hotter, drier conditions in the months ahead.'], answer: 3,
          why: 'Paragraph 14 links the expected El Niño to fears that “this year’s smoke season could last longer than usual”. The Friday review is the near miss: it tells us when a decision will be made, not whether the haze will continue.' }
      ] },

    /* ============================================ II-4 Visuals 39–44 */
    { code: 'II-4', part: 'SECTION II: READING SKILL', title: 'Part IV: Visuals (Items 39–44)',
      instructions: 'Study the following visuals and choose the best answer for each question.', points: 1.25,
      items: [
        { id: 'm3-39', type: 'read', passage: '', visual: M3_V1, tag: 'vs-trend', level: 'B2',
          stem: 'Which statement best describes the trend for Chiang Mai?',
          options: ['It stayed above Bangkok’s level in every month shown.', 'It peaked in January and then levelled off until June.', 'It climbed steadily to a peak in March, then fell sharply.', 'It fluctuated widely but ended the period higher than it began.'], answer: 2,
          why: 'Chiang Mai rises every month from 22 (Nov) to 96 (Mar) and then drops to 74, 28 and 12. It was below Bangkok from November to January, its January figure (41) is not the peak, and it ended (12) lower than it began (22).' },

        { id: 'm3-40', type: 'read', passage: '', visual: M3_V1, tag: 'vs-math', level: 'B2',
          stem: 'In March, Chiang Mai’s average PM2.5 level was approximately ______ the WHO guideline.',
          options: ['six times', 'four times', 'three times', 'eight times'], answer: 0,
          why: '96 ÷ 15 = 6.4, so about six times the guideline. <em>Three times</em> comes from comparing Chiang Mai with Bangkok (96 ÷ 29), and <em>four times</em> matches February (58 ÷ 15), so both are near misses from reading the wrong line or the wrong month.' },

        { id: 'm3-41', type: 'read', passage: '', visual: M3_V1, tag: 'vs-compare', level: 'B2',
          stem: 'In which month was the difference between the two cities’ PM2.5 levels the smallest?',
          options: ['May', 'June', 'January', 'November'], answer: 1,
          why: 'The gaps are November 5, January 4, May 12 and June only 1 (12 vs 11). January is the near miss because its two points look close together, but a gap of 4 is still larger than 1.' },

        { id: 'm3-42', type: 'read', passage: '', visual: M3_V2, tag: 'vs-table', level: 'B2',
          stem: 'Which country ranked immediately above the country that sold about 230,000 electric cars?',
          options: ['France', 'Canada', 'Norway', 'Belgium'], answer: 1,
          why: 'The figures are in thousands, so 230,000 cars is South Korea (230) in 7th place, and the country directly above it, in 6th place, is Canada. Belgium (8th) is immediately below South Korea, the trap for students who read the table in the wrong direction.' },

        { id: 'm3-43', type: 'read', passage: '', visual: M3_V2, tag: 'vs-math', level: 'B2+',
          stem: 'Which pair of countries had the closest sales figures?',
          options: ['Belgium – Norway', 'Norway – Thailand', 'Canada – South Korea', 'Germany – United Kingdom'], answer: 2,
          why: 'Canada (260) and South Korea (230) differ by only 30 thousand. Belgium–Norway and Norway–Thailand look close because they are next to each other in the ranking, but each pair differs by 40 thousand, and Germany–United Kingdom differ by 140 thousand.' },

        { id: 'm3-44', type: 'read', passage: '', visual: M3_V2, tag: 'vs-math', level: 'B2',
          stem: 'The United States sold approximately ______ as many electric cars as Norway.',
          options: ['twice', 'ten times', 'five times', 'fifteen times'], answer: 1,
          why: '1,560 ÷ 150 ≈ 10.4, so roughly ten times as many. Make sure you divide the United States figure (1,560), not China’s, and read the comma correctly: 1,560 thousand is more than ten times Norway’s 150 thousand.' }
      ] },

    /* ============================================ II-5 Articles 45–60 */
    { code: 'II-5', part: 'SECTION II: READING SKILL', title: 'Part V: General Articles (Items 45–60)',
      instructions: 'Read the following articles and choose the best answer for each question.', points: 1.25,
      items: [
        { id: 'm3-45', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'rd-purpose', level: 'B2',
          stem: 'What is the primary purpose of Article 1?',
          options: ['To compare garment factories in different countries', 'To persuade readers to stop buying clothes from any large brand', 'To describe how recyclable clothing is produced in modern factories', 'To explain fast fashion’s hidden costs and some possible alternatives'], answer: 3,
          why: 'Paragraphs 2–4 set out the environmental and human costs, and paragraphs 5–7 present the circular economy as a response. The writer never tells readers to boycott every large brand; the closing advice is simply to wear what we already own more often.' },

        { id: 'm3-46', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'vc-closest', level: 'B1+',
          stem: 'The word “discard” in paragraph 2 is closest in meaning to ______.',
          options: ['sell', 'donate', 'repair', 'throw away'], answer: 3,
          why: '“Much of what we <em>discard</em> is never recycled” links back to clothes “thrown away after only a handful of wears” in paragraph 1. <em>Donate</em> is the near miss because donated clothes also leave our closets, but the sentence goes on to landfills and burning, not to people who receive them.' },

        { id: 'm3-47', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'rd-detail', level: 'B2',
          stem: 'According to paragraph 2, why is most cheap clothing difficult to recycle?',
          options: ['It is often a blend of cotton and plastic fibers.', 'It contains chemical dyes that damage recycling machines.', 'It is worn so many times that the fabric becomes too weak.', 'It is burned or dumped before it can reach a recycling center.'], answer: 0,
          why: 'The text says “Because most cheap clothing is made from blends of cotton and plastic-based fibers … it is extremely hard to separate and repurpose.” Burning and dumping are the <em>result</em> of this difficulty, not its cause, and the article says clothes are worn fewer times, not more.' },

        { id: 'm3-48', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'rd-mention', level: 'B2+',
          stem: 'Why does the writer mention “what one person drinks in two and a half years” in paragraph 3?',
          options: ['To compare the costs of water and cotton', 'To make a large amount of water easier to imagine', 'To show that people should drink more water every day', 'To prove that cotton farmers use too much drinking water'], answer: 1,
          why: 'A figure like 2,700 liters means little on its own, so the writer translates it into something readers can picture: years of personal drinking water. The comparison is about scale, not about whether farmers use drinking water or how much water people should drink.' },

        { id: 'm3-49', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'rd-expression', level: 'C1',
          stem: 'In paragraph 3, the phrase “turning some of them the color of the season’s trends” suggests that ______.',
          options: ['brands choose colors that match local rivers', 'factories take natural dyes from nearby rivers', 'dye waste is visibly changing the color of rivers', 'rivers near factories attract fashion photographers'], answer: 2,
          why: '“Them” refers to the rivers, and the chemicals released during dyeing make the water take on whatever colors are fashionable that season. The phrase is ironic criticism of pollution; it does not say brands copy river colors or that factories take dyes from rivers.' },

        { id: 'm3-50', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'rd-views', level: 'B2+',
          stem: 'Which statement best summarizes the critics’ view in paragraph 4?',
          options: ['Cheap clothing depends on underpaid workers.', 'Garment workers should be allowed to set their own wages.', 'Most garment workers prefer long hours to earn extra money.', 'Factories in poorer countries produce lower-quality clothes.'], answer: 0,
          why: 'Critics say that if shoppers expect an outfit “for the price of a sandwich”, “someone further down the supply chain will pay the difference”: low prices are paid for by workers on low wages. The paragraph says nothing about workers setting their own wages, preferring long hours, or the quality of the clothes.' },

        { id: 'm3-51', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'rd-reference', level: 'B2',
          stem: 'The word “they” in paragraph 6 (“they point out”) refers to ______.',
          options: ['customers', 'environmental groups', 'conscious collections', 'fast-fashion companies'], answer: 1,
          why: 'The previous sentence names “Environmental groups”, who criticise greenwashing, and it is they who point out that a recycling bin does little good. Fast-fashion companies are the ones being criticised, so they would hardly make this point against themselves.' },

        { id: 'm3-52', type: 'read', passage: M3_ART1, source: 'Adapted for TCAS70 practice', tag: 'wk-eco', level: 'C1',
          stem: 'Which of the following would the writer most likely regard as an example of greenwashing?',
          options: ['A student sells her old dresses on a popular resale app.', 'A shop repairs clothes it sold several years ago for free.', 'A brand promotes a tiny “eco” range while doubling its output.', 'A factory cuts its water use and publishes independent test results.'], answer: 2,
          why: 'Greenwashing is “using the language of sustainability to sell more of the very products that cause the problem”, exactly like a small eco range that hides a bigger output. Resale and free repairs are praised in paragraph 5 as part of the circular economy, and verified water savings are genuine improvements.' },

        { id: 'm3-53', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'rd-main', level: 'B2',
          stem: 'What is the main idea of Article 2?',
          options: ['Teens are easily fooled by AI fakes, but new habits can help.', 'Young people are naturally better than adults at spotting fake videos.', 'AI video apps should be banned for all users under the age of eighteen.', 'Schools should teach students to look for glitches in AI-generated images.'], answer: 0,
          why: 'Paragraphs 1–4 show that teenagers are easily fooled, and paragraphs 5–8 offer better habits such as lateral reading and pausing before sharing. The article rejects the “digital natives” belief and argues that glitch-hunting is becoming useless, so those options reverse its message; a ban is never proposed.' },

        { id: 'm3-54', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'rd-infer', level: 'C1',
          stem: 'What can be inferred from the finding that “very confident” students performed no better than unsure ones?',
          options: ['Most teenagers underestimate their ability to spot fakes.', 'Confident students were shown easier items than the others.', 'Unsure students spent more time checking each video carefully.', 'Feeling sure about a judgement is not a reliable sign of being right.'], answer: 3,
          why: 'If confident and unsure students scored the same, confidence tells us nothing about accuracy. The first option is the reverse trap: the confident students overestimated themselves rather than underestimating, and the study says nothing about easier items or checking time.' },

        { id: 'm3-55', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'vc-adjs', level: 'B2',
          stem: 'The word “credible” in paragraph 4 can be best replaced by ______.',
          options: ['urgent', 'amusing', 'familiar', 'believable'], answer: 3,
          why: 'A video from a close friend <em>feels credible</em> (believable), “even though the friend has no more idea where it came from than you do”: the point is trust, not truth. <em>Familiar</em> is the near miss because the friend is familiar, but the adjective describes how true the video seems.' },

        { id: 'm3-56', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'rd-cause', level: 'B2+',
          stem: 'According to paragraph 5, why is teaching students to look for visual glitches unlikely to work in the long term?',
          options: ['Newer AI tools keep fixing those errors.', 'Teachers cannot agree on which glitches matter most.', 'Real videos often contain more glitches than AI-generated ones.', 'Most students do not have screens large enough to see small errors.'], answer: 0,
          why: 'The writer explains that “each new generation of AI tools fixes these errors, so a checklist that works this year may be useless the next.” Small screens are mentioned in paragraph 4 as a reason for fast viewing, not as the reason glitch-spotting fails.' },

        { id: 'm3-57', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'wk-media', level: 'C1',
          stem: 'In paragraph 6, the phrase “reading vertically” refers to ______.',
          options: ['scrolling quickly down a social media feed', 'examining the content itself in close detail', 'opening new tabs to see what other sources say', 'reading headlines from the top of a page to the bottom'], answer: 1,
          why: 'The text defines it: “studying a suspicious video closely — what fact-checkers call ‘reading vertically’”. Opening new tabs to check other sources is lateral reading, the opposite technique, and scrolling down a feed is a literal misreading of “vertically”.' },

        { id: 'm3-58', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'rd-org', level: 'B2+',
          stem: 'How is paragraph 6 mainly organized?',
          options: ['By defining a term and tracing its history', 'By describing a problem and its many causes', 'By listing the steps of a process in time order', 'By contrasting two methods and showing which works better'], answer: 3,
          why: 'Paragraph 6 contrasts lateral reading with “reading vertically” and then gives trial results showing that lateral reading improved students far more than glitch-hunting. Lateral reading is defined, but its history is never given, and the questions students ask are not a time-ordered process.' },

        { id: 'm3-59', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'rd-notexcept', level: 'B2',
          stem: 'Which of the following is NOT one of the habits recommended in paragraph 7?',
          options: ['pausing before sharing', 'checking the original upload date', 'zooming in to look for strange hands', 'looking for the story from two reliable sources'], answer: 2,
          why: 'Paragraph 7 recommends a short pause, a reverse image search, checking the original upload date and finding two reliable sources. Looking for strange hands is glitch-hunting, which paragraph 5 describes as an out-of-date method, so it is mentioned in the article but not recommended.' },

        { id: 'm3-60', type: 'read', passage: M3_ART2, source: 'Adapted for TCAS70 practice', tag: 'rd-conclude', level: 'C1',
          stem: 'Which conclusion can be drawn from paragraph 8?',
          options: ['Most online videos should now be treated as fake.', 'The aim is to trust wisely, not to doubt everything.', 'Sharp eyesight is the most useful skill in the age of AI.', 'Teenagers should avoid social media until they are older.'], answer: 1,
          why: 'The writer warns that “constant suspicion … can be as damaging as blind belief” and calls for “calibrated trust”. Treating most videos as fake is exactly the cynicism the paragraph rejects, and the final quotation says good questions matter more than sharp eyes.' }
      ] },

    /* ============================================ III-1 Text Completion 61–75 */
    { code: 'III-1', part: 'SECTION III: WRITING SKILL', title: 'Part I: Text Completion (Items 61–75)',
      instructions: 'Choose the best answers to complete the following passages.', points: 1.25,
      items: [
        { id: 'm3-61', type: 'cloze', passage: M3_TC1, blank: '(61)', tag: 'rc-prep', level: 'B2+',
          stem: 'Choose the best option for blank (61).',
          options: ['which', 'whose', 'in which', 'for which'], answer: 2,
          why: 'The clause after the blank is already complete (“students are judged by their ideas”), so the relative word must carry a preposition: students are judged <em>in</em> the environment, hence <em>in which</em>. Plain <em>which</em> would need a gap in the clause, and <em>for which</em> gives the wrong meaning.' },

        { id: 'm3-62', type: 'cloze', passage: M3_TC1, blank: '(62)', tag: 'nc-it', level: 'B2+',
          stem: 'Choose the best option for blank (62).',
          options: ['also claims', 'is also claimed', 'has also claimed', 'is also claiming'], answer: 1,
          why: 'This is the impersonal pattern <em>It + passive + that</em> (“It is also claimed that …” = people also claim that …). With an active verb, <em>it</em> would have to be a speaker, but <em>it</em> here refers to the uniform, which cannot claim anything.' },

        { id: 'm3-63', type: 'cloze', passage: M3_TC1, blank: '(63)', tag: 'lk-contrast', level: 'B2',
          stem: 'Choose the best option for blank (63).',
          options: ['however', 'moreover', 'therefore', 'similarly'], answer: 0,
          why: 'Critics hold the opposite view to the supporters just described, so a contrast marker is needed: <em>Critics, however, see …</em>. <em>Moreover</em> and <em>similarly</em> would add a matching view, and <em>therefore</em> would make the critics’ view a result of the supporters’ arguments.' },

        { id: 'm3-64', type: 'cloze', passage: M3_TC1, blank: '(64)', tag: 'wo-adjorder', level: 'C1',
          stem: 'Choose the best option for blank (64).',
          options: ['dark-blue thick woollen', 'woollen thick dark-blue', 'thick woollen dark-blue', 'thick dark-blue woollen'], answer: 3,
          why: 'English adjectives follow the order opinion–size/physical quality–age–shape–colour–origin–material–purpose, so <em>thick</em> (quality) comes before <em>dark-blue</em> (colour), which comes before <em>woollen</em> (material). The material adjective sits closest to the noun, which rules out every other order.' },

        { id: 'm3-65', type: 'cloze', passage: M3_TC1, blank: '(65)', tag: 'vm-subj', level: 'C1',
          stem: 'Choose the best option for blank (65).',
          options: ['be', 'to be', 'will be', 'is being'], answer: 0,
          why: 'After verbs of proposing or demanding (<em>propose, suggest, insist, recommend</em>) formal English uses the subjunctive: <em>that + subject + base verb</em>, here the passive <em>be relaxed</em>. <em>To be</em> cannot follow a that-clause subject, and <em>will be</em> and <em>is being</em> report facts rather than a proposal.' },

        { id: 'm3-66', type: 'cloze', passage: M3_TC2, blank: '(66)', tag: 'wf-pos', level: 'B2',
          stem: 'Choose the best option for blank (66).',
          options: ['Surprise', 'Surprised', 'Surprising', 'Surprisingly'], answer: 3,
          why: 'The blank stands alone before a comma and comments on the whole sentence, so it needs a sentence adverb: <em>Surprisingly</em>, many patients feel better. <em>Surprising</em> and <em>Surprised</em> are adjectives and <em>Surprise</em> is a noun or verb, so none of them can modify a whole clause.' },

        { id: 'm3-67', type: 'cloze', passage: M3_TC2, blank: '(67)', tag: 'vt-tense', level: 'B2',
          stem: 'Choose the best option for blank (67).',
          options: ['use', 'used', 'have used', 'were using'], answer: 2,
          why: '<em>Since the 1950s</em> describes a period from the past up to now, which requires the present perfect: <em>have used</em>. The past simple <em>used</em> and the past continuous <em>were using</em> would place the action in a finished past time, which clashes with <em>since</em>.' },

        { id: 'm3-68', type: 'cloze', passage: M3_TC2, blank: '(68)', tag: 'nc-embedded', level: 'B2+',
          stem: 'Choose the best option for blank (68).',
          options: ['how a sugar pill reduces pain', 'how does a sugar pill reduce pain', 'how is a sugar pill reducing pain', 'how a sugar pill does it reduce pain'], answer: 0,
          why: 'After <em>debating</em>, the question becomes an embedded noun clause, which uses statement word order: <em>how + subject + verb</em>. Question word order (<em>does a sugar pill reduce</em>, <em>is a sugar pill reducing</em>) is only used in direct questions, and the last option adds an extra subject.' },

        { id: 'm3-69', type: 'cloze', passage: M3_TC2, blank: '(69)', tag: 'wo-np', level: 'C1',
          stem: 'Choose the best option for blank (69).',
          options: ['expensive-looked', 'expensive-looking', 'expensively-looked', 'expensively-looking'], answer: 1,
          why: 'Compound adjectives of appearance are formed with <em>adjective + present participle</em>: <em>good-looking, expensive-looking</em> (= that looks expensive). The pill is not “looked” by anyone, so the -ed forms are wrong, and <em>look</em> is a linking verb that takes an adjective, not an adverb like <em>expensively</em>.' },

        { id: 'm3-70', type: 'cloze', passage: M3_TC2, blank: '(70)', tag: 'vp-passive', level: 'B2',
          stem: 'Choose the best option for blank (70).',
          options: ['told', 'had told', 'were told', 'were telling'], answer: 2,
          why: 'The patients received the information from the researchers, so the verb must be passive: patients who <em>were told</em> that their pills were fake. <em>Had told</em> and <em>were telling</em> are active and would make the patients the ones giving the information.' },

        { id: 'm3-71', type: 'cloze', passage: M3_TC3, blank: '(71)', tag: 'ac-reduced', level: 'B2+',
          stem: 'Choose the best option for blank (71).',
          options: ['Return', 'Returned', 'Returning', 'Being returned'], answer: 2,
          why: 'This is a reduced adverbial clause (= <em>When she returns</em> to the hive). The bee does the action herself, so the active participle <em>Returning</em> is needed. <em>Returned</em> and <em>Being returned</em> are passive and would mean someone else carries her back to the hive.' },

        { id: 'm3-72', type: 'cloze', passage: M3_TC3, blank: '(72)', tag: 'pl-correl', level: 'B2',
          stem: 'Choose the best option for blank (72).',
          options: ['both', 'either', 'neither', 'not only'], answer: 3,
          why: 'The second half of the pair is <em>but also its distance</em>, which can only complete <em>not only … but also</em>. <em>Both</em> needs <em>and</em>, <em>either</em> needs <em>or</em>, and <em>neither</em> needs <em>nor</em>.' },

        { id: 'm3-73', type: 'cloze', passage: M3_TC3, blank: '(73)', tag: 'dt-other', level: 'B2',
          stem: 'Choose the best option for blank (73).',
          options: ['other', 'others', 'another', 'the other'], answer: 1,
          why: '<em>Some bees … ; others …</em> is the standard pattern, and the blank must be a plural pronoun because the verb is <em>fly</em>. <em>Other</em> needs a noun after it, <em>another</em> is singular, and <em>the other</em> would refer to one specific remaining bee.' },

        { id: 'm3-74', type: 'cloze', passage: M3_TC3, blank: '(74)', tag: 'vp-passinf', level: 'C1',
          stem: 'Choose the best option for blank (74).',
          options: ['to understand', 'understanding', 'to be understood', 'being understood'], answer: 2,
          why: 'The pattern <em>for + noun + to-infinitive</em> expresses purpose, and a message does not understand anything; it is understood by the bees. So the passive infinitive <em>to be understood</em> is needed. The -ing forms cannot follow <em>for the message</em> to express purpose.' },

        { id: 'm3-75', type: 'cloze', passage: M3_TC3, blank: '(75)', tag: 'vt-sva', level: 'B2+',
          stem: 'Choose the best option for blank (75).',
          options: ['has', 'have', 'having', 'have been'], answer: 0,
          why: 'The subject is <em>The ability</em> (singular); “of these tiny insects to share such precise information without a single word” only describes it. So the verb is <em>has</em> (led). <em>Have</em> agrees wrongly with the nearby plural <em>insects</em>, and <em>have been led</em> would also make the sentence passive.' }
      ] },

    /* ============================================ III-2 Paragraph Organization 76–80 */
    { code: 'III-2', part: 'SECTION III: WRITING SKILL', title: 'Part II: Paragraph Organization (Items 76–80)',
      instructions: 'Choose the best answer to rearrange the following statements into a logical paragraph.', points: 1.25,
      items: [
        { id: 'm3-76', type: 'choose', tag: 'po-process', level: 'B2',
          stem: 'Choose the best order for statements A–D.<div class="orderblock">' +
            '<p>A. After about three months, the mixture turns into dark, crumbly compost that can be spread on gardens to enrich the soil.</p>' +
            '<p>B. Turning kitchen waste into compost at home is a simple process that requires little more than patience.</p>' +
            '<p>C. These scraps are then mixed with dry materials such as fallen leaves or shredded newspaper, which allow air to circulate.</p>' +
            '<p>D. First, fruit peels, vegetable scraps and coffee grounds are collected in a covered bin, while meat and oily food are left out.</p></div>',
          options: ['B-C-D-A', 'B-D-A-C', 'B-D-C-A', 'D-B-C-A'], answer: 2,
          why: 'B is the general topic sentence, and the process follows its signals: <em>First</em> (D) → <em>These scraps … then</em> (C, which needs the scraps from D) → <em>After about three months</em> (A). B-C-D-A fails because “These scraps” in C would have nothing to refer to.' },

        { id: 'm3-77', type: 'choose', tag: 'po-compare', level: 'B2',
          stem: 'Choose the best order for statements A–D.<div class="orderblock">' +
            '<p>A. Psychologists often describe the difference between introverts and extroverts in terms of how each group recharges its energy.</p>' +
            '<p>B. Introverts, by contrast, tend to find large gatherings draining and recover their energy through quiet time alone.</p>' +
            '<p>C. Neither style is better than the other; knowing which one describes you can simply help you plan your week more wisely.</p>' +
            '<p>D. Extroverts typically feel energised by social contact, so a busy party can leave them feeling livelier than before.</p></div>',
          options: ['A-B-D-C', 'A-D-B-C', 'D-A-B-C', 'D-B-A-C'], answer: 1,
          why: 'A introduces the comparison, D describes the first group, B contrasts the second group (<em>by contrast</em> needs D before it), and C concludes about both. A-B-D-C is the near miss, but “by contrast” in B would then have nothing to contrast with.' },

        { id: 'm3-78', type: 'choose', tag: 'po-argue', level: 'B2+',
          stem: 'Choose the best order for statements A–D.<div class="orderblock">' +
            '<p>A. This delay in melatonin release makes it harder to fall asleep, so many teenagers end up getting far less rest than they need.</p>' +
            '<p>B. Over time, such a lack of sleep can weaken concentration, memory and mood, which in turn affects performance at school.</p>' +
            '<p>C. The blue light from phone screens can delay the body’s release of melatonin, a hormone that signals when it is time to sleep.</p>' +
            '<p>D. Using a smartphone in bed late at night may seem harmless, yet it can set off a chain of effects that begins with a single hormone.</p></div>',
          options: ['C-A-B-D', 'C-D-A-B', 'D-A-C-B', 'D-C-A-B'], answer: 3,
          why: 'D announces “a chain of effects”, and each sentence then causes the next: blue light delays melatonin (C) → <em>This delay</em> means less sleep (A) → <em>such a lack of sleep</em> harms school performance (B). D-A-C-B fails because “This delay” in A needs the delay introduced in C.' },

        { id: 'm3-79', type: 'choose', tag: 'po-ref', level: 'B2+',
          stem: 'Choose the best order for statements A–D.<div class="orderblock">' +
            '<p>A. One solution that several cities have tried is a small entry fee for day visitors, which is used to pay for cleaning and repairs.</p>' +
            '<p>B. Popular destinations around the world are struggling to cope with overtourism, as record numbers of visitors crowd into small historic areas.</p>' +
            '<p>C. Such crowding not only damages old buildings and fragile natural sites but also pushes up rents for the people who live there.</p>' +
            '<p>D. Others have limited the number of cruise ships or banned new hotels in their most crowded districts.</p></div>',
          options: ['A-B-C-D', 'A-D-B-C', 'B-C-A-D', 'B-C-D-A'], answer: 2,
          why: 'This is problem → effects → solutions. B states the problem, <em>Such crowding</em> (C) describes its effects, and the solutions follow: <em>One solution</em> (A) and then <em>Others</em> (D), which only makes sense after “several cities” have been mentioned in A. B-C-D-A reverses this reference chain.' },

        { id: 'm3-80', type: 'choose', tag: 'po-signal', level: 'B2+',
          stem: 'Choose the best order for statements A–D.<div class="orderblock">' +
            '<p>A. For example, a survey of university students found that many felt anxious within minutes of being separated from their phones.</p>' +
            '<p>B. Nomophobia, short for “no-mobile-phone phobia,” is the fear of being without a working mobile phone.</p>' +
            '<p>C. As a result, some universities now run “digital detox” workshops to help students reduce their dependence on their devices.</p>' +
            '<p>D. Although it is not yet an official medical diagnosis, the condition appears to be surprisingly common among young adults.</p></div>',
          options: ['B-D-A-C', 'B-D-C-A', 'D-A-B-C', 'D-B-A-C'], answer: 0,
          why: 'B defines the term, D (<em>the condition</em>) says it is common, A (<em>For example</em>) gives evidence of how common it is, and C (<em>As a result</em>) gives the consequence. B-D-C-A is the near miss, but the survey in A illustrates the claim in D, not the workshops in C, so A must follow D directly.' }
      ] }
  ]
});
