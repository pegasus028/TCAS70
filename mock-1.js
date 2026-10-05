/* ===========================================================================
   TCAS70 Launchpad — MOCK 1 · Diagnostic   (m1)
   TCAS68 level: solid B2 core with a few B2+/C1 items. Touches as many
   skills/tags as possible so every miss maps to a lesson.
   =========================================================================== */

/* ---------------------------------------------------------- CONVERSATIONS */
var M1_C1 = [
  {who:'Situation', text:'In the school canteen'},
  {who:'Ploy', text:'Mint, you’ve been smiling at your phone for ten minutes. What’s going on?'},
  {who:'Mint', text:'My TGAT results just came out. I got 92 in the English part!'},
  {who:'Ploy', text:'___(1)___ You were so worried about it last week.'},
  {who:'Mint', text:'Thanks! I honestly thought I’d messed up the reading section. What about you? Have you checked yours?'},
  {who:'Ploy', text:'___(2)___ I’m too nervous to look.'},
  {who:'Mint', text:'Come on, just open the app and look!'},
  {who:'Ploy', text:'___(3)___ My hands are literally shaking. … OK, here goes. (She checks.) Wait … 78! That’s ten points higher than my practice test!'},
  {who:'Mint', text:'___(4)___'},
  {who:'Ploy', text:'True. All those Saturday mornings of practice tests were worth it. Come on, the mango sticky rice is on me.'}
];

var M1_C2 = [
  {who:'Situation', text:'At a hotel front desk'},
  {who:'Guest', text:'Good evening. I’m in Room 614. I’m sorry to bother you so late, but ___(5)___'},
  {who:'Receptionist', text:'Oh, I’m terribly sorry. Is it not cooling at all?'},
  {who:'Guest', text:'Not really. It’s just blowing warm air. And ___(6)___ there’s loud music coming from the room next door.'},
  {who:'Receptionist', text:'I do apologise for the inconvenience. ___(7)___'},
  {who:'Guest', text:'Yes, please. A quieter one would be wonderful. I have an early flight tomorrow.'},
  {who:'Receptionist', text:'Certainly. We have a deluxe room on the 12th floor, far from the lifts. Since this was our fault, there will be no extra charge, and breakfast tomorrow is on us.'},
  {who:'Guest', text:'That’s very generous of you. Thank you so much.'},
  {who:'Receptionist', text:'___(8)___ Here is your new key card. Have a good rest.'}
];

var M1_C3 = [
  {who:'Situation', text:'At the end of a biology class'},
  {who:'Teacher', text:'For your group project, each group will make a five-minute video about an endangered animal in Thailand. It’s due in two weeks.'},
  {who:'Student', text:'___(9)___'},
  {who:'Teacher', text:'You may, but only for brainstorming ideas. The script must be written by your group.'},
  {who:'Student', text:'___(10)___'},
  {who:'Teacher', text:'No. If a tool creates any of your pictures or voices, you must say so in the credits. That’s part of academic integrity.'},
  {who:'Student', text:'That sounds fair. ___(11)___ could we use AI to check our grammar?'},
  {who:'Teacher', text:'Yes, as long as the ideas and the sentences are still your own. Honestly, I’d rather see a simple video full of your own thinking than a perfect one made by a machine.'},
  {who:'Student', text:'___(12)___'}
];

var M1_LONG = [
  {who:'Situation', text:'A video call between Fah in Bangkok and her older cousin Nan, who is studying at a university in Scotland'},
  {who:'Fah', text:'Nan! Finally! You haven’t called for weeks. How’s life in Edinburgh?'},
  {who:'Nan', text:'Sorry, Fah, university keeps me really busy. ___(13)___ I live on my own, I’ve become super independent. I even cooked a three-course dinner for my flatmates last night.'},
  {who:'Fah', text:'You? Cooking? The last time you boiled an egg, the smoke alarm went off!'},
  {who:'Nan', text:'People change, you know. Anyway, don’t you want to hear about my new life?'},
  {who:'Fah', text:'Of course I do! ___(14)___'},
  {who:'Nan', text:'Well, first of all, it’s freezing. It was two degrees this morning. ___(15)___ I’m wearing three sweaters right now.'},
  {who:'Fah', text:'Three? No wonder you look so round on my screen. So what are you doing this weekend?'},
  {who:'Nan', text:'Nothing is fixed yet. My friends want to go hiking in the Highlands, but it might snow, so we’ll just ___(16)___.'},
  {who:'Fah', text:'Sounds amazing. ___(17)___'},
  {who:'Nan', text:'I miss you guys too. Especially Grandma’s green curry. The food here is … well, different. I’d give anything for a plate of som tam right now.'},
  {who:'Fah', text:'___(18)___ You just told me you’re a great cook now!'},
  {who:'Nan', text:'Well … ___(19)___ the “three-course dinner” was instant noodles, a boiled egg and a banana.'},
  {who:'Fah', text:'(laughing) I knew it! But wait … why is there a photo of Grandma and Grandpa on the wall behind you? And that orange cat walking past … that’s Mochi! That’s MY cat! How is my cat in Scotland?'},
  {who:'Nan', text:'Oh no … ___(20)___ Surprise! I flew home last night for your birthday. I’m in your living room right now!'},
  {who:'Fah', text:'WHAT?! Stay right there — I’m coming downstairs!'}
];

/* ---------------------------------------------------------------- ADS */
var M1_AD1 = {
  brand:'The Quiet Hour · Study Café & Co-working Space',
  headline:'Your desk away from home.',
  body:['Exams coming up? Group project falling apart? The Quiet Hour gives you everything you need to get things done — good coffee, fast Wi-Fi and a seat that is yours for as long as you need it.',
        'Join the 8,000+ Bangkok students who have already made The Quiet Hour their second home.'],
  bullets:['Silent Zone: no talking, phones on vibrate, individual desks with reading lamps',
           'Group Zone: 6 bookable rooms with whiteboards and screens (up to 8 people)',
           'Free high-speed Wi-Fi, a charging point at every seat and free drinking water',
           'Open daily 8:00 a.m. – midnight (open 24 hours during exam season, 1–31 March)'],
  price:'Hourly rate ฿40 · Day pass ฿199 · Students: 25% off with a valid student ID',
  cta:'Visit us on Phaya Thai Road, 2 minutes from BTS Ratchathewi, or book a group room on LINE: @quiethourbkk',
  fine:'Student discount applies to hourly rates and day passes on weekdays (Monday–Friday) only and is not valid on public holidays. Group rooms must be booked at least 24 hours in advance. No outside food.',
  source:'Adapted for TCAS70 practice'
};

var M1_AD2 = [
  { brand:'SunVeil', headline:'Daily Fluid SPF50+ PA++++ · Protection you can’t feel.',
    body:['Most sunscreens feel like a mask. SunVeil Daily Fluid feels like nothing at all. Its water-light texture sinks in within seconds, leaves no white cast and sits perfectly under make-up.'],
    bullets:['Oil-free and non-comedogenic: will not clog pores','Dermatologist-tested on sensitive and acne-prone skin','Water-resistant for up to 40 minutes','50 ml tube fits in any pencil case'],
    price:'฿459 · Buy 2, get the second at half price (until 31 October)',
    cta:'Available at all LifeCare pharmacies nationwide and online.',
    fine:'Reapply every 2 hours and after swimming or towel drying. Not recommended for children under 3.',
    source:'Adapted for TCAS70 practice' },
  { brand:'AquaShield Sport', headline:'SPF50 PA+++ · Built for the long game.',
    body:['Whether you are running a half-marathon or spending a whole day at the beach, AquaShield Sport stays where you put it. Its sweat-lock formula keeps protecting you even when you are dripping.'],
    bullets:['Water- and sweat-resistant for up to 80 minutes','Reef-friendly: made without oxybenzone and octinoxate','Fragrance-free','Big 100 ml bottle for the whole team'],
    price:'฿590 · Complimentary cooling towel with every bottle, while stocks last',
    cta:'Find it at sports stores and on our official online shop.',
    fine:'Reapply after 80 minutes of swimming or sweating, and immediately after towel drying.',
    source:'Adapted for TCAS70 practice' }
];

/* -------------------------------------------------------------- REVIEW */
var M1_REVIEW = 'App Review: LingoLeap — Can a cartoon frog teach you Japanese?\n\n' +
'(1) For the past four months, I have been using LingoLeap, a language-learning app that promises to make you “conversation-ready in 100 days”, to prepare for a school trip to Japan. After more than 110 days of daily practice, I am not conversation-ready, but I have learned a lot — and the app deserves both praise and criticism.\n\n' +
'(2) Let me start with the positives. The lessons are short, usually five to seven minutes, so they fit easily into a bus ride or a break between classes. The app’s mascot, a cheerful green frog called Leapy, sends reminders and celebrates every “streak” of days you practise in a row. It sounds childish, but it works: I have not missed a single day since June.\n\n' +
'(3) The speaking exercises are the real highlight. You record a sentence, and the app’s AI gives you instant feedback on your pronunciation, highlighting the exact sounds you got wrong. My Japanese teacher at school noticed that my pronunciation had improved within a few weeks.\n\n' +
'(4) However, the app has clear weaknesses. The grammar explanations are extremely brief, often just one line, so I frequently had to search online to understand why a sentence was correct. The listening exercises use the same slow, robotic voice, which is nothing like the fast, natural Japanese I hear in anime. On top of that, the app crashed in the middle of a lesson at least three times last month, and each time my progress in that lesson was lost.\n\n' +
'(5) Then there is the price. The free version limits you to five lessons a day and shows an advertisement after every lesson. The Premium plan removes the ads and unlocks the speaking exercises, but it costs ฿349 a month, or ฿2,990 if you pay for a full year in advance. For a student, that is not cheap, especially when some rival apps offer similar features for less.\n\n' +
'(6) So, is LingoLeap worth it? If you need motivation and want to work on your pronunciation, yes — at least for the first few months. But if you want to understand how the language really works, you will need a good textbook or a teacher as well. I will keep my streak going, but I am not sure I will renew my yearly plan.';

/* ---------------------------------------------------------------- NEWS */
var M1_NEWS = '(1) Bangkok under water: capital declared disaster zone after torrential rain\nBy Chronicle reporter Kanyarat Boonmee\n\n' +
'(2) Bangkok has been declared a flood disaster zone after more than 300 millimetres of rain fell on parts of the capital in just 48 hours, leaving roads, homes and schools under water.\n\n' +
'(3) The declaration was made on Saturday, 26 September. A city spokesperson said it would allow help to reach flooded communities more quickly.\n\n' +
'(4) As of Tuesday, 29 September, about 2.6 million people in 29 provinces had been affected by flooding, including residents of all 50 Bangkok districts. At least 22 people have died nationwide, and around 940,000 households have been hit.\n\n' +
'(5) At the height of the storm, floodwater blocked traffic at 37 locations across the city. Some commuters reported long delays getting home.\n\n' +
'(6) So why was the flooding so severe? Experts point to two problems arriving at the same time: extremely heavy rain over the city itself and large volumes of water flowing south from the North.\n\n' +
'(7) “Bangkok is sitting at the bottom of a funnel,” said Dr Pimchanok Wattanasiri, a hydrologist at Chao Phraya University. “When the sky and the river both send you water in the same week, even a good drainage system will struggle.”\n\n' +
'(8) Warnings were sent directly to mobile phones by cell broadcast, a system that pushes an alert to every phone in an area without the need for an app or a phone number.\n\n' +
'(9) Many residents praised the alerts. But some older residents said they had not understood the messages, or had not noticed them because their phones were on silent.\n\n' +
'(10) “My mother saw the message, but she thought it was an advertisement,” said one resident of Lat Krabang district. “By the time I explained it to her, the water was already at our door.”\n\n' +
'(11) In eastern districts, workers reinforced temporary flood barriers to protect homes and main roads from the rising water.\n\n' +
'(12) City officials said draining would take two to three days after the rain stopped. A district official, who asked not to be named, said pumps were running “around the clock”, but warned: “If more rain comes this week, those two to three days will become longer.”\n\n' +
'(13) Not everyone was satisfied. Residents’ groups in some low-lying communities complained that the barriers kept main roads dry while pushing water into their narrow sois. “The water has to go somewhere, and it always seems to come to us,” said the head of one community group.\n\n' +
'(14) Experts say the floods are a warning for the future. “This is no longer a once-in-a-lifetime event,” Dr Pimchanok said. “Cities like Bangkok need to plan for extreme rain as a normal part of life, not as a surprise.”\n\n' +
'(15) For now, many families are simply waiting for the water to go down. “We have moved everything upstairs,” said a shop owner in Min Buri. “Now all we can do is wait — and hope the sky stays dry.”';
var M1_NEWS_SRC = 'Source: Adapted for TCAS70 practice (The Bangkok Chronicle, 29 September 2026; quotations and some local details are illustrative)';

/* ------------------------------------------------------------- VISUALS */
var M1_V1 = { kind:'table',
  title:'Average daily screen time of Thai teenagers (aged 13–18) by activity, 2026 survey (minutes per day)',
  cols:['Activity','Female','Male'],
  rows:[['Short-video apps (TikTok, Reels, Shorts)','118','96'],
        ['Chat & messaging (LINE, Instagram DMs)','84','55'],
        ['Online gaming','22','104'],
        ['Streaming series & films','58','49'],
        ['Online learning & homework','46','41'],
        ['Music & podcasts','36','24'],
        ['Online shopping','32','19'],
        ['Reading e-books & webtoons','28','14'],
        ['Video calls','18','13']],
  note:'Illustrative data for practice. Figures are averages for a school day.',
  source:'Adapted for TCAS70 practice' };

var M1_V2 = { kind:'flow',
  title:'What to do when a flood warning arrives',
  steps:['A flood warning arrives by cell broadcast on your phone or from local officials',
    {q:'Is water already entering your home or street?',
     yes:['Switch off the electricity at the main switch','Move to the highest floor or another safe, high place','Call the emergency hotline if you need to be rescued'],
     no:['Move valuables, documents and medicines upstairs','Pack an emergency bag: water, food, a torch and a power bank','Charge your phone and follow official updates']},
    {q:'Have officials ordered your area to evacuate?',
     yes:['Leave by the recommended route; never walk or drive through fast-moving water'],
     no:['Stay at home and keep checking official alerts']},
    'After the water goes down: return only when officials say it is safe, and take photos of any damage before cleaning'],
  note:'Adapted from general public flood-safety advice.',
  source:'Adapted for TCAS70 practice' };

/* ------------------------------------------------------------ ARTICLES */
var M1_ART1 = 'Wired at Midnight: Why Teenagers Can’t Fall Asleep Early\n\n' +
'(1) Every parent of a teenager knows the scene. It is 11:30 p.m., the lights are off, and yet a glowing phone screen still lights up the bedroom. The easy explanation is that teenagers are lazy or addicted to their devices. The real explanation is more interesting, and it begins inside the brain.\n\n' +
'(2) All humans have a circadian rhythm, an internal “body clock” that runs on a cycle of roughly 24 hours and tells us when to feel alert and when to feel sleepy. One of its main tools is melatonin, a hormone that the brain releases as evening falls to prepare the body for sleep. In young children, melatonin rises early, which is why a seven-year-old can fall asleep at eight o’clock. During puberty, however, this release shifts later by up to two hours. A typical teenager’s brain is simply not ready for sleep until around 11 p.m. In other words, telling a sixteen-year-old to fall asleep at nine is a little like telling an adult to fall asleep at seven in the evening.\n\n' +
'(3) Modern habits make this natural delay worse. The light from phones, tablets and laptops is rich in blue wavelengths, which the brain reads as daylight. Scrolling in bed therefore sends the body clock a false message that it is still daytime, holding back melatonin even further. The content matters, too. A group chat full of drama or a game that ends in a narrow defeat keeps the mind excited long after the screen goes dark. Screens, in short, do not create the teenage night owl, but they exacerbate a tendency that biology has already set in motion.\n\n' +
'(4) The problem is that school does not follow the teenage clock. Many schools in Thailand begin their day at around 8 a.m., and students who live far away may need to get up before six to beat the traffic. A student who cannot fall asleep before midnight and must wake at six gets about six hours of sleep, while sleep scientists recommend eight to ten hours for this age group. The missing hours do not simply disappear. They build up, night after night, into what researchers call “sleep debt”.\n\n' +
'(5) Like any debt, it must eventually be paid, and the costs are high. Prolonged sleep deprivation has been linked to poorer memory, weaker concentration, low mood and a greater risk of accidents. It also affects appetite: tired teenagers tend to crave sugary, high-energy snacks. Many students try to repay the debt by sleeping until noon at the weekend, but this “catch-up” sleep confuses the body clock further and makes Monday morning even harder. It is a cycle that is easy to enter and difficult to escape.\n\n' +
'(6) What can be done? Some school districts abroad have experimented with starting classes later, and several have reported better attendance and fewer students falling asleep in class. Families can help, too, by keeping phones out of bedrooms at night and keeping wake-up times similar on weekdays and at weekends. Nobody can rewrite biology, but it is possible to stop working against it. Perhaps the next time a teenager is still awake at midnight, the first question should not be “Why are you so lazy?” but “What time does your body think it is?”';

var M1_ART2 = 'Soft Power on a Plate\n\n' +
'(1) In 2022, a young Thai rapper walked onto the stage of one of the world’s most famous music festivals in California and, in the middle of her performance, calmly ate a plate of mango sticky rice. Within days, sales of the dessert in Thailand reportedly jumped, and people around the world were searching online for the recipe. Nobody had signed a trade deal or launched an advertising campaign. A single spoonful had done the work.\n\n' +
'(2) Political scientists have a name for this kind of influence: soft power. The term, made popular by the American scholar Joseph Nye, describes a country’s ability to shape what others want through attraction rather than force or money. Armies and economic pressure are “hard power”. Films, music, food and values that people admire are “soft power”. A country with strong soft power does not need to push; others are pulled towards it.\n\n' +
'(3) For decades, Thailand’s most successful ambassador has been its cuisine. Tom yum, green curry and pad thai are now ubiquitous, appearing on menus from London to Los Angeles, and a Thai restaurant abroad is often a foreigner’s first introduction to the country itself. Thai officials have long promoted what they call the “five Fs” — food, film, fashion, fighting (Muay Thai) and festivals — as the country’s strongest cultural exports. Of these, food remains the most accessible: you may never visit Bangkok, but you can still taste it on a Tuesday night in Berlin.\n\n' +
'(4) Music is catching up. Thai artists have grown in popularity well beyond the country’s borders, and T-pop groups are building fan bases across Asia. The most striking example is a Thai-born member of a K-pop group who has become one of the most followed stars on Instagram. When she shot a music video in Bangkok’s Chinatown, fans from overseas began visiting the street to take photos in the same spots. Earlier, a video of her eating grilled meatballs at a market in her home province sent customers rushing to the stall.\n\n' +
'(5) Perhaps the most unexpected soft-power stars, however, are animals and mascots. In 2024, Moo Deng, a baby pygmy hippo at a zoo in Chonburi, became an international sensation thanks to short videos of her splashing, biting and sulking. Visitor numbers at the zoo rose sharply, and her face appeared on everything from T-shirts to cakes. Around the same time, a chubby bear mascot from a Bangkok bakery attracted huge crowds of fans. These characters succeed precisely because nobody designed them as national symbols. They feel authentic, and that is exactly what makes people share them.\n\n' +
'(6) Yet soft power has its limits. A viral video can make a country fashionable for a month, but attention on social media is famously short-lived. Critics also warn that when governments try too hard to “manage” culture, it can start to feel like an advertisement, and audiences quickly lose interest. There is also a risk of stereotype: a country becomes known only for its spicy food and cute animals, while its scientists, writers and designers remain invisible.\n\n' +
'(7) The lesson, perhaps, is that soft power cannot simply be ordered from above. It grows when people are free to create, share and surprise. Governments can water the garden — by supporting artists, protecting creative freedom and making it easy for visitors to come — but the flowers that bloom are rarely the ones anyone planned. Thailand’s next global sensation may be a dish, a dancer or a very grumpy hippo. The only certainty is that nobody will see it coming.';

/* ----------------------------------------------------- TEXT COMPLETION */
var M1_TC1 = 'Cyberbullying is often described as ordinary bullying that has moved online, but the internet changes it in important ways. One of the biggest differences is that attackers can act ___(61)___. Hidden behind fake usernames, many people say things they would never say face to face, a phenomenon ___(62)___ as the “online disinhibition effect.” ___(63)___ traditional bullying, which usually stops when the school day ends, cyberbullying can follow a victim home and continue all night. Many victims never report what is happening, either because they are afraid of making things worse or because they do not expect the attackers ___(64)___. Experts say that the best protection is not simply blocking the attacker but talking to someone you trust about ___(65)___ and keeping evidence such as screenshots. Schools, too, are starting to teach students what to do when they see someone else being targeted online.';

var M1_TC2 = 'On a hot April afternoon, the centre of Bangkok can be several degrees warmer than the rice fields just outside the city. Scientists call this the urban heat island ___(66)___. It happens because concrete, asphalt and glass absorb heat during the day and release it slowly at night, ___(67)___ means that the city never fully cools down. In many large cities, the number of nights on which the temperature stays above 28°C ___(68)___ steadily over the past few decades. Trees and parks help, since ___(69)___ tree can lower the temperature around it through shade and the water its leaves release. Cool roofs, painted white to reflect sunlight, can also contribute ___(70)___ lower indoor temperatures and smaller electricity bills. For crowded cities in hot countries, small changes like these can make daily life noticeably more comfortable.';

var M1_TC3 = 'Most people think procrastination is simply a sign of laziness. Psychologists increasingly disagree: procrastination is ___(71)___ a time-management problem, but an emotional one. When a task makes us feel anxious, bored or unsure of ourselves, putting it off brings instant relief. Instead of starting the essay, we tidy our desks, answer messages or ___(72)___ one more video. The good news is that the habit can be changed. Many psychologists recommend that a large task ___(73)___ into small, specific steps, such as “write the first paragraph” rather than “write the essay.” If more students had learned this strategy in lower secondary school, many of them ___(74)___ so stressed before exams today. Self-forgiveness helps, too: research suggests that students who forgive themselves for delaying are ___(75)___ to procrastinate again than those who blame themselves.';

/* =========================================================================== */
MOCKS.push({
  id: 'm1', name: 'Mock 1 · Diagnostic',
  blurb: 'The triage paper everyone sits first: a full 80-item TCAS-style exam at TCAS68 level that touches almost every skill, so each miss points to a specific lesson.',
  minutes: 90, total: 100,
  sections: [

  /* ------------------------------------------------ I-1 Short Conversations */
  { code:'I-1', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part I: Short Conversations (Items 1–12)',
    instructions:'Choose the best answers to complete the following conversations.', points:1.25, items:[
    { id:'m1-1', type:'gap', lines:M1_C1, blank:'(1)', tag:'cv-react', level:'B1+',
      stem:'Choose the best option for blank (1).',
      options:['No way! That’s amazing!','Really? Who told you that?','Oh no, I’m so sorry to hear that.','Never mind. There’s always next year.'], answer:0,
      why:'Mint has just shared very good news (92 in English), so Ploy should congratulate her with surprise and delight: <em>No way! That’s amazing!</em> “I’m so sorry” and “Never mind” are reactions to bad news. “Who told you that?” shows surprise, but Mint saw the result herself, so nobody “told” her.' },
    { id:'m1-2', type:'gap', lines:M1_C1, blank:'(2)', tag:'cv-next', level:'B1+',
      stem:'Choose the best option for blank (2).',
      options:['Not yet.','Yes, twice.','Of course I have.','I got the same score.'], answer:0,
      why:'Always read the line after the blank: <em>I’m too nervous to look.</em> So Ploy has not checked her results yet. “Yes, twice”, “Of course I have” and “I got the same score” all mean she has already looked, which contradicts the next sentence.' },
    { id:'m1-3', type:'gap', lines:M1_C1, blank:'(3)', tag:'id-reaction', level:'B2',
      stem:'Choose the best option for blank (3).',
      options:['Count me in.','I’m all ears.','Easier said than done.','You can say that again.'], answer:2,
      why:'Mint gives advice (“just open the app and look”), and Ploy replies that it is hard to do because her hands are shaking. <em>Easier said than done</em> means “that is easy to say but hard to do”. “You can say that again” agrees with an opinion, not an instruction; “Count me in” accepts an invitation; “I’m all ears” means “I’m ready to listen”.' },
    { id:'m1-4', type:'gap', lines:M1_C1, blank:'(4)', tag:'id-proverb', level:'B2',
      stem:'Choose the best option for blank (4).',
      options:['See? No pain, no gain.','Oh well, better late than never.','Never mind. It’s not the end of the world.','Don’t worry. Every cloud has a silver lining.'], answer:0,
      why:'Ploy’s score is ten points higher than her practice test, and she answers <em>True. All those Saturday mornings of practice tests were worth it.</em> That matches <em>No pain, no gain</em>: hard work brings results. “Never mind” and “Every cloud has a silver lining” comfort someone after bad news, and “better late than never” is about something that happens late.' },
    { id:'m1-5', type:'gap', lines:M1_C2, blank:'(5)', tag:'cv-complain', level:'B1+',
      stem:'Choose the best option for blank (5).',
      options:['could you recommend a good restaurant nearby?','I seem to have locked my key card in the room.','I’d like to extend my stay for one more night.','the air-conditioner in my room isn’t working properly.'], answer:3,
      why:'The receptionist’s reply is the clue: <em>Is it not cooling at all?</em> Only an air-conditioner “cools”, so the guest must be complaining about it. The other options are normal hotel requests, but none of them connects to “cooling”.' },
    { id:'m1-6', type:'gap', lines:M1_C2, blank:'(6)', tag:'dm-add', level:'B2',
      stem:'Choose the best option for blank (6).',
      options:['in other words,','as far as I know,','having said that,','to make matters worse,'], answer:3,
      why:'The guest adds a second problem (loud music) on top of the first (warm air). <em>To make matters worse</em> adds a new, worse problem. “Having said that” introduces a contrast, “in other words” repeats the same idea differently, and “as far as I know” shows uncertainty, but the guest can clearly hear the music.' },
    { id:'m1-7', type:'gap', lines:M1_C2, blank:'(7)', tag:'cv-request', level:'B2',
      stem:'Choose the best option for blank (7).',
      options:['Have you tried opening the windows instead?','Shall I send a technician to fix it tomorrow?','Would you like me to move you to another room?','Could you ask your neighbours to turn it down?'], answer:2,
      why:'The guest answers <em>Yes, please. A quieter one would be wonderful.</em> “One” must replace a noun that can be “quieter”, so it means a room. Only the offer to move the guest to another room fits. Sending a technician tomorrow would not solve the noise, and asking the guest to deal with the neighbours is not an offer of help.' },
    { id:'m1-8', type:'gap', lines:M1_C2, blank:'(8)', tag:'cv-thanks', level:'B2',
      stem:'Choose the best option for blank (8).',
      options:['Same to you.','No, thanks. I’m fine.','I accept your apology.','It’s the least we can do.'], answer:3,
      why:'The guest thanks the hotel for a free upgrade. Because the problem was the hotel’s fault, the receptionist modestly replies <em>It’s the least we can do</em> (= we should do at least this much). “Same to you” answers good wishes, “No, thanks” refuses an offer, and “I accept your apology” is wrong because the guest did not apologise.' },
    { id:'m1-9', type:'gap', lines:M1_C3, blank:'(9)', tag:'cv-next', level:'B1+',
      stem:'Choose the best option for blank (9).',
      options:['Could we have three weeks instead of two?','Are we allowed to use AI tools like chatbots?','Do we have to present it in front of the class?','Can we each work alone instead of in a group of four?'], answer:1,
      why:'The teacher replies <em>You may, but only for brainstorming ideas. The script must be written by your group.</em> This limit only makes sense if the student asked about using AI tools. Working alone, getting more time or presenting in class cannot be “only for brainstorming”.' },
    { id:'m1-10', type:'gap', lines:M1_C3, blank:'(10)', tag:'wk-work', level:'B2',
      stem:'Choose the best option for blank (10).',
      options:['Is it OK if we record our own voices?','Do we need to write the script in English?','Can we use AI pictures without mentioning it?','Should we list the websites we got facts from?'], answer:2,
      why:'The teacher says <em>No. If a tool creates any of your pictures … you must say so in the credits</em>, which is about academic integrity. So the student asked whether AI images can be used without saying so. Listing websites would get a “Yes”, and recording your own voices or writing in English has nothing to do with crediting a tool.' },
    { id:'m1-11', type:'gap', lines:M1_C3, blank:'(11)', tag:'dm-contrast', level:'B2+',
      stem:'Choose the best option for blank (11).',
      options:['As a result,','For example,','In other words,','Having said that,'], answer:3,
      why:'The student accepts the rule (“That sounds fair”) but then asks for a small exception. <em>Having said that</em> means “although I agree with what was just said…”. “As a result” wrongly shows a consequence, “In other words” repeats the same idea, and checking grammar is not an example of brainstorming, so “For example” fails.' },
    { id:'m1-12', type:'gap', lines:M1_C3, blank:'(12)', tag:'cv-agree', level:'B2',
      stem:'Choose the best option for blank (12).',
      options:['So we can skip the credits, then?','Sorry, could you repeat the deadline?','Great, so grammar checkers are banned too?','Understood. Our own ideas matter more than perfection.'], answer:3,
      why:'The teacher has just said she would rather see a simple video “full of your own thinking” than a perfect machine-made one, so the student’s reply should show that the message has been understood: <em>Our own ideas matter more than perfection.</em> “Great, so grammar checkers are banned too?” contradicts the teacher’s “Yes” one line earlier, “So we can skip the credits, then?” contradicts the rule about credits, and asking about the deadline ignores what the teacher has just said.' }
  ]},

  /* ------------------------------------------------ I-2 Long Conversation */
  { code:'I-2', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part II: Long Conversation (Items 13–20)',
    instructions:'Choose the best answers to complete the following conversation.', points:1.25, items:[
    { id:'m1-13', type:'gap', lines:M1_LONG, blank:'(13)', tag:'dm-frame', level:'B2',
      stem:'Choose the best option for blank (13).',
      options:['In case','Now that','As long as','Even though'], answer:1,
      why:'<em>Now that</em> means “because this is now true”: because Nan now lives alone, she has become independent. “Even though” sets up a contrast that makes no sense here, “In case” is about preparing for something possible, and “As long as” is a condition, which does not fit a change that has already happened (“I’ve become”).' },
    { id:'m1-14', type:'gap', lines:M1_LONG, blank:'(14)', tag:'id-reaction', level:'B2',
      stem:'Choose the best option for blank (14).',
      options:['I’m all ears.','I’m up to my ears.','Keep your ears open.','It’s music to my ears.'], answer:0,
      why:'Nan asks if Fah wants to hear about her new life, and Fah is eager to listen: <em>I’m all ears</em> = I’m listening carefully. “I’m up to my ears” means very busy, “Keep your ears open” tells someone else to listen for news, and “music to my ears” reacts to good news that Nan has not told yet.' },
    { id:'m1-15', type:'gap', lines:M1_LONG, blank:'(15)', tag:'dm-add', level:'B2',
      stem:'Choose the best option for blank (15).',
      options:['Even so,','Out of the blue,','Needless to say,','On the other hand,'], answer:2,
      why:'If it is two degrees, it is obvious that she will wear lots of clothes. <em>Needless to say</em> introduces something the listener can already guess. “Even so” and “On the other hand” introduce a contrast, but wearing sweaters in the cold is not a contrast; “Out of the blue” means unexpectedly.' },
    { id:'m1-16', type:'gap', lines:M1_LONG, blank:'(16)', tag:'id-situation', level:'B2+',
      stem:'Choose the best option for blank (16).',
      options:['draw the line','break the ice','play it by ear','stick to the point'], answer:2,
      why:'“Nothing is fixed yet” and “it might snow” tell us Nan will decide later, depending on the weather. <em>Play it by ear</em> means to decide as things happen instead of planning. “Break the ice” means to start a friendly conversation, “draw the line” means to set a limit, and “stick to the point” means not to change the topic.' },
    { id:'m1-17', type:'gap', lines:M1_LONG, blank:'(17)', tag:'cv-next', level:'B2',
      stem:'Choose the best option for blank (17).',
      options:['Have you made many new friends?','Do you ever feel homesick there?','When are you coming back to visit?','Everyone here misses you, you know.'], answer:3,
      why:'Nan answers <em>I miss you guys too.</em> The word <em>too</em> shows that Fah has just said that she and the family miss Nan. A question about homesickness would get “Yes, I do”, not “I miss you too”, and the other two questions would need completely different answers.' },
    { id:'m1-18', type:'gap', lines:M1_LONG, blank:'(18)', tag:'dm-contrast', level:'B2',
      stem:'Choose the best option for blank (18).',
      options:['Hold on.','Likewise.','Fair enough.','Good for you.'], answer:0,
      why:'Fah notices a contradiction: Nan misses Thai food, but earlier she said she was a great cook. <em>Hold on</em> is used to stop someone because something doesn’t make sense. “Fair enough” accepts what someone said, “Likewise” means “the same for me”, and “Good for you” congratulates someone, which does not fit a challenge.' },
    { id:'m1-19', type:'gap', lines:M1_LONG, blank:'(19)', tag:'dm-stance', level:'B2',
      stem:'Choose the best option for blank (19).',
      options:['by the way,','to be honest,','as far as I know,','on the other hand,'], answer:1,
      why:'Nan finally admits the truth about her “three-course dinner”. <em>To be honest</em> introduces a confession. “As far as I know” suggests she is unsure about her own dinner, “by the way” changes the topic, and “on the other hand” gives a contrasting point, not a confession.' },
    { id:'m1-20', type:'gap', lines:M1_LONG, blank:'(20)', tag:'cv-twist', level:'B2+',
      stem:'Choose the best option for blank (20).',
      options:['You got me.','The connection is bad.','My flatmate has a cat too.','That photo came with the flat.'], answer:0,
      why:'Nan is caught: the grandparents’ photo and Fah’s cat prove she is in Fah’s house, and she immediately shouts “Surprise!” <em>You got me</em> means “you caught me / found out my secret”. The other options are excuses that try to hide the truth, which contradicts “Surprise! I flew home last night.”' }
  ]},

  /* ------------------------------------------------ II-1 Advertisements */
  { code:'II-1', part:'SECTION II: READING SKILL', title:'Part I: Advertisements (Items 21–26)',
    instructions:'Read the following advertisements and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-21', type:'read', passage:'', ad:M1_AD1, tag:'ad-purpose', level:'B1+',
      stem:'What is the main purpose of this advertisement?',
      options:['To recruit students to work part-time in a café','To promote a place where students can study alone or in groups','To announce that the café will now open 24 hours a day all year','To encourage students to bring snacks and hold parties in group rooms'], answer:1,
      why:'The ad sells study space: a Silent Zone for studying alone and a Group Zone with bookable rooms. It is not a job advert. It opens 24 hours only during exam season (1–31 March), not all year, and outside food is not allowed.' },
    { id:'m1-22', type:'read', passage:'', ad:M1_AD1, tag:'ad-technique', level:'B2',
      stem:'The sentence “Join the 8,000+ Bangkok students who have already made The Quiet Hour their second home” mainly uses which advertising technique?',
      options:['Quoting an expert who recommends the café','Showing that many people already use the café','Warning readers that a special offer will end soon','Comparing the café’s prices with those of its rivals'], answer:1,
      why:'Mentioning that thousands of other students already use the café is the <em>bandwagon</em> technique: “everyone is doing it, so you should too”. There is no expert, no deadline in this sentence and no price comparison.' },
    { id:'m1-23', type:'read', passage:'', ad:M1_AD1, tag:'ad-fineprint', level:'B2',
      stem:'Which student would be able to get the student discount?',
      options:['Pim, who shows her student ID card on a Sunday afternoon','Oat, who shows an expired student ID card on a Tuesday morning','Beam, who buys a day pass on a Wednesday and shows her student ID','Nan, who studies there with her student ID on a Monday public holiday'], answer:2,
      why:'The fine print says the discount needs a <em>valid</em> student ID and works on weekdays only, not on public holidays. Beam meets every condition. Pim goes on a weekend, Oat’s ID has expired, and Nan’s Monday is a public holiday.' },
    { id:'m1-24', type:'read', passage:'', ad:M1_AD2, tag:'ad-detail', level:'B2',
      stem:'Which statement about Ad A is FALSE?',
      options:['Its discount is available for a limited time.','It stays water-resistant for more than an hour.','It is suitable for people whose skin gets spots easily.','It can be bought both in pharmacies and on the internet.'], answer:1,
      why:'SunVeil is water-resistant for only <em>40 minutes</em>, so “more than an hour” is false. It is sold at LifeCare pharmacies and online, the half-price offer ends on 31 October, and it was tested on acne-prone skin, so the other three statements are true.' },
    { id:'m1-25', type:'read', passage:'', ad:M1_AD2, tag:'ad-vocab', level:'B2+',
      stem:'Which statement about Ad B is FALSE?',
      options:['Buyers must pay extra to get the cooling towel.','The towel offer may end before all the bottles are sold.','It avoids certain ingredients that can harm coral reefs.','It is aimed mainly at people who exercise or stay outdoors.'], answer:0,
      why:'<em>Complimentary</em> means free, so buyers do not pay extra for the towel. “While stocks last” means the towel offer can end early, “reef-friendly” means it avoids ingredients that harm reefs, and the runners and beach users show who it is for.' },
    { id:'m1-26', type:'read', passage:'', ad:M1_AD2, tag:'ad-compare', level:'B2+',
      stem:'All of the following can be inferred from BOTH advertisements EXCEPT that both products ______.',
      options:['can be bought online','are free from fragrance','offer a high level of sun protection','should be reapplied after towel drying'], answer:1,
      why:'Only Ad B says “fragrance-free”; Ad A does not mention fragrance at all, so this cannot be inferred for both. Both ads mention online sales, both tell users to reapply after towel drying, and both have SPF50 or higher.' }
  ]},

  /* ------------------------------------------------ II-2 Review */
  { code:'II-2', part:'SECTION II: READING SKILL', title:'Part II: Product/Service Review (Items 27–32)',
    instructions:'Read the following review and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-27', type:'read', passage:M1_REVIEW, tag:'rv-attitude', level:'B2',
      stem:'What is the reviewer’s overall opinion of LingoLeap?',
      options:['It is useful in some areas but not enough on its own.','It is fun to use but too expensive to recommend to anyone at all.','It completely keeps its promise of making learners conversation-ready.','It is designed mainly for young children because of its cartoon mascot.'], answer:0,
      why:'The verdict is mixed: the app is good for motivation and pronunciation, but “you will need a good textbook or a teacher as well”. The reviewer says she is <em>not</em> conversation-ready, does recommend it to some learners, and says the mascot “sounds childish, but it works”.' },
    { id:'m1-28', type:'read', passage:M1_REVIEW, tag:'rv-evidence', level:'B2',
      stem:'According to the review, what is the app’s greatest strength?',
      options:['Its grammar explanations are short and easy to follow.','Its AI gives instant feedback on the learner’s pronunciation.','Its listening exercises use natural voices from Japanese anime.','Its lessons can be downloaded and used without an internet connection.'], answer:1,
      why:'Paragraph 3 calls the speaking exercises “the real highlight”: the AI gives instant feedback on pronunciation. The grammar explanations are criticised for being too brief, the listening voice is slow and robotic, and offline use is never mentioned.' },
    { id:'m1-29', type:'read', passage:M1_REVIEW, tag:'rv-infer', level:'B2',
      stem:'What can be inferred about Leapy, the app’s mascot?',
      options:['It helped the reviewer build a daily study habit.','It is the main reason why the Premium plan is expensive.','It annoyed the reviewer so much that she turned off its reminders.','It makes the app suitable only for learners who are young children.'], answer:0,
      why:'The reviewer says the frog’s reminders and streaks “work: I have not missed a single day since June”, so Leapy helped her study regularly. She admits it “sounds childish”, but she never says the app is only for children, and the mascot is not linked to price or to annoying her.' },
    { id:'m1-30', type:'read', passage:M1_REVIEW, tag:'rv-evidence', level:'B2+',
      stem:'Which detail best shows that the app is not always reliable?',
      options:['Its lessons last only five to seven minutes.','It lost the reviewer’s progress when it crashed.','Its listening exercises use a slow, robotic voice.','Its free version shows an advert after every lesson.'], answer:1,
      why:'“Reliable” means working properly every time. Crashing in the middle of lessons and losing progress (paragraph 4) shows the app sometimes fails. The robotic voice is a problem of quality, not reliability; short lessons are a strength, and adverts are part of the free plan’s design.' },
    { id:'m1-31', type:'read', passage:M1_REVIEW, tag:'rd-detail', level:'B2+',
      stem:'Which statement about LingoLeap’s free and paid plans is TRUE?',
      options:['Premium users still see adverts after each lesson.','The speaking exercises are available only to paying users.','Paying for a full year costs more than paying month by month.','The free version offers unlimited lessons but no speaking practice.'], answer:1,
      why:'Paragraph 5 says the Premium plan “unlocks the speaking exercises”, so free users cannot use them. Twelve months at ฿349 is ฿4,188, which is more than ฿2,990, so the yearly plan is cheaper. Premium removes the ads, and the free version is limited to five lessons a day.' },
    { id:'m1-32', type:'read', passage:M1_REVIEW, tag:'rd-notexcept', level:'B2',
      stem:'Which of the following does the reviewer NOT do?',
      options:['Name a rival app and compare it in detail','Describe a technical problem she experienced','Say who would benefit most from using the app','Mention another person who noticed her progress'], answer:0,
      why:'The review mentions that “some rival apps offer similar features for less” but never names one or compares it in detail. She does describe the crashes, says the app suits people who need motivation and pronunciation practice, and mentions her Japanese teacher noticing her progress.' }
  ]},

  /* ------------------------------------------------ II-3 News */
  { code:'II-3', part:'SECTION II: READING SKILL', title:'Part III: News Report (Items 33–38)',
    instructions:'Read the following news report and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-33', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-main', level:'B2',
      stem:'What is the main idea of the news report?',
      options:['Older residents were the main victims of the floods.','Bangkok’s drainage system is now the best in the region.','Heavy rain forced Bangkok to declare a flood disaster zone.','The city plans to stop using cell broadcast after the floods.'], answer:2,
      why:'The headline and paragraph 2 give the main idea: very heavy rain flooded Bangkok, the city was declared a disaster zone, and life was disrupted. Older residents appear only in one detail (paragraph 9), the drainage system is said to “struggle”, and nothing says cell broadcast will be stopped.' },
    { id:'m1-34', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'wk-disaster', level:'B2',
      stem:'According to the report, what problem did some people have with the flood warnings?',
      options:['The alerts arrived only after the rain had stopped.','Some older residents misunderstood or did not notice them.','The warnings were sent to the wrong districts of the city.','The alerts could be received only by people who had an app.'], answer:1,
      why:'Paragraph 9 says some older residents “had not understood the messages, or had not noticed them because their phones were on silent.” Paragraph 8 says cell broadcast works “without the need for an app”, and nothing suggests the alerts were late or sent to the wrong districts.' },
    { id:'m1-35', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-infer', level:'B2+',
      stem:'What can be inferred from the Lat Krabang resident’s words in paragraph 10?',
      options:['Adverts on mobile phones increase during floods.','The alert was sent too late to be useful to anyone.','The family’s mobile phones did not receive the alert at all.','Misreading the alert reduced the family’s time to prepare.'], answer:3,
      why:'The mother saw the alert but thought it was an advert, and by the time her child explained it, “the water was already at our door”. So the misunderstanding cost them valuable time. The phone did receive the message, and one family’s story does not prove the alert was useless for everyone.' },
    { id:'m1-36', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-cause', level:'B2',
      stem:'According to the report, why was the flooding so severe?',
      options:['The city’s pumps stopped working during the storm.','The sea level in the Gulf of Thailand suddenly rose.','Heavy local rain coincided with water flowing from the North.','Barriers in the eastern districts pushed water into the city centre.'], answer:2,
      why:'Paragraph 6 names two causes “arriving at the same time”: heavy rain over the city and water flowing south from the North. The pumps were running “around the clock”, the sea is not mentioned, and the barrier complaint (paragraph 13) is about water in low-lying sois, not the cause of the whole flood.' },
    { id:'m1-37', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-views', level:'B2',
      stem:'What opinion do some residents’ groups in low-lying communities express?',
      options:['They think the cell broadcast alerts were sent too often.','They want the city to build more barriers along main roads.','They believe draining the water will take far less than two to three days.','They feel the barriers moved the flood problem into their neighbourhoods.'], answer:3,
      why:'Paragraph 13: the barriers kept main roads dry “while pushing water into their narrow sois”, and “it always seems to come to us.” They are unhappy that the water was moved onto them. They do not ask for more barriers or comment on the alerts or the draining time.' },
    { id:'m1-38', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-support', level:'B2+',
      stem:'Which detail best supports the idea that the floods affected far more than just the capital?',
      options:['All 50 Bangkok districts were affected.','Floodwater blocked traffic at 37 locations in the city.','About 2.6 million people in 29 provinces were affected.','Workers reinforced flood barriers in eastern districts.'], answer:2,
      why:'Only the figure of 2.6 million people in <em>29 provinces</em> shows that the flooding reached far beyond Bangkok. “All 50 Bangkok districts” sounds big, but it is still only the capital, and the traffic and barrier details are also about Bangkok.' }
  ]},

  /* ------------------------------------------------ II-4 Visuals */
  { code:'II-4', part:'SECTION II: READING SKILL', title:'Part IV: Visuals (Items 39–44)',
    instructions:'Study the following visuals and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-39', type:'read', passage:'', visual:M1_V1, tag:'vs-title', level:'B1+',
      stem:'What does the table mainly show?',
      options:['Which apps Thai teenagers download most often','How screen time among Thai teenagers has changed since 2020','How many Thai teenagers use each type of screen activity every day','How long female and male Thai teenagers spend on different screen activities each day'], answer:3,
      why:'The title and the unit (“minutes per day”) show that the table measures <em>time</em>, split into Female and Male columns. It does not count how many teenagers use each activity, and it gives only one year (2026), so it cannot show change since 2020. Downloads are not mentioned.' },
    { id:'m1-40', type:'read', passage:'', visual:M1_V1, tag:'vs-math', level:'B2',
      stem:'Female teenagers spend approximately twice as much time as male teenagers on which activity?',
      options:['Online shopping','Music & podcasts','Chat & messaging','Reading e-books & webtoons'], answer:3,
      why:'Reading e-books and webtoons: 28 ÷ 14 = exactly 2. The near-miss is online shopping (32 ÷ 19 ≈ 1.7). Chat and messaging (84 ÷ 55 ≈ 1.5) and music and podcasts (36 ÷ 24 = 1.5) are further from double.' },
    { id:'m1-41', type:'read', passage:'', visual:M1_V1, tag:'vs-compare', level:'B2',
      stem:'Apart from online gaming, which activity shows the largest difference between female and male teenagers?',
      options:['Online shopping','Music & podcasts','Chat & messaging','Short-video apps'], answer:2,
      why:'Subtract each pair: chat and messaging 84 − 55 = 29 minutes, short-video apps 118 − 96 = 22, online shopping 32 − 19 = 13, and music and podcasts 36 − 24 = 12. Short-video apps have the biggest numbers, which makes them tempting, but the gap is smaller.' },
    { id:'m1-42', type:'read', passage:'', visual:M1_V2, tag:'vs-flow', level:'B1+',
      stem:'According to the flowchart, what should people do FIRST if water is already entering their home?',
      options:['Pack an emergency bag','Switch off the electricity','Move valuables and documents upstairs','Leave by the route recommended by officials'], answer:1,
      why:'On the “Yes” path of the first question, the first action is to switch off the electricity at the main switch. Packing a bag and moving valuables upstairs belong to the “No” path (water not yet inside), and leaving by the recommended route comes only if officials order an evacuation.' },
    { id:'m1-43', type:'read', passage:'', visual:M1_V2, tag:'vs-flow', level:'B2',
      stem:'If water has not reached their street and officials have not ordered an evacuation, people should ______.',
      options:['call the hotline and wait to be rescued','leave the area immediately by the recommended route','switch off the main electricity switch and go to the highest floor','prepare an emergency bag and stay at home while checking alerts'], answer:3,
      why:'Follow both “No” paths: water not yet in the street → move valuables, pack an emergency bag, charge your phone; no evacuation order → stay at home and keep checking official alerts. The other three options belong to the “Yes” paths.' },
    { id:'m1-44', type:'read', passage:'', visual:M1_V2, tag:'vs-trap', level:'B2',
      stem:'Which piece of advice is NOT given in the flowchart?',
      options:['Charge your phone','Boil tap water before drinking it','Avoid walking through fast-moving water','Take photos of damage before cleaning up'], answer:1,
      why:'Boiling tap water is sensible flood advice, but it does not appear anywhere in this flowchart, so it is the answer. Charging your phone, avoiding fast-moving water and photographing damage are all in the chart. Answer from the visual, not from general knowledge.' }
  ]},

  /* ------------------------------------------------ II-5 Articles */
  { code:'II-5', part:'SECTION II: READING SKILL', title:'Part V: General Articles (Items 45–60)',
    instructions:'Read the following articles and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-45', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'rd-main', level:'B2',
      stem:'What is the main idea of the article?',
      options:['Teenagers stay up late mainly because they are addicted to their phones.','Schools in Thailand should start classes two hours later from next year.','Sleeping until noon at the weekend is the best way for teenagers to repay the sleep debt they build up.','Teenagers’ late bedtimes are largely biological, and modern habits and school times make them worse.'], answer:3,
      why:'The article says the real explanation “begins inside the brain” (the body clock shifts later in puberty), then shows how screens and early school starts make the problem worse. It rejects the “lazy or addicted” explanation, says weekend catch-up sleep makes things worse, and never demands a specific Thai school start time.' },
    { id:'m1-46', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'rd-cause', level:'B2',
      stem:'According to paragraph 2, why can a young child fall asleep earlier than a teenager?',
      options:['Children produce much more melatonin than teenagers do.','Children look at screens less often before going to bed.','Children’s brains release melatonin earlier in the evening.','Children’s body clocks run on a cycle shorter than 24 hours.'], answer:2,
      why:'Paragraph 2 says “In young children, melatonin rises early, which is why a seven-year-old can fall asleep at eight.” The key is <em>timing</em>, not amount, so “much more melatonin” is wrong. Screens may be true in real life, but they are not the reason given in paragraph 2, and all humans have a cycle of roughly 24 hours.' },
    { id:'m1-47', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'vc-verbs', level:'C1',
      stem:'The word “exacerbate” in paragraph 3 is closest in meaning to ______.',
      options:['cause','reveal','worsen','diminish'], answer:2,
      why:'Paragraph 3 begins “Modern habits make this natural delay <em>worse</em>”, and the last sentence says screens do not create the problem but exacerbate it, so exacerbate = make worse. “Cause” is the near-miss, but the writer clearly says screens do <em>not</em> create the tendency.' },
    { id:'m1-48', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'rd-reference', level:'B2+',
      stem:'In paragraph 5, the word “It” in “It is a cycle that is easy to enter and difficult to escape” refers to ______.',
      options:['the habit of eating sugary snacks when tired','the risk of accidents caused by poor concentration','the shift of the body clock that happens during puberty','losing sleep on weekdays and then sleeping late at weekends'], answer:3,
      why:'The sentences just before describe repaying sleep debt by sleeping until noon at the weekend, which confuses the body clock and makes Monday harder, so the student loses sleep again. That repeating pattern is the “cycle”. Snacks and accidents are single effects, and the puberty shift is from paragraph 2.' },
    { id:'m1-49', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'vc-nouns', level:'B2',
      stem:'The word “deprivation” in paragraph 5 can best be replaced by ______.',
      options:['lack','excess','pattern','disorder'], answer:0,
      why:'Sleep <em>deprivation</em> means not having enough sleep, which matches the “missing hours” and “sleep debt” in paragraph 4. “Excess” is the opposite, “pattern” is too neutral, and “disorder” suggests a medical illness rather than simply too little sleep.' },
    { id:'m1-50', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'rd-org', level:'B2+',
      stem:'How is paragraph 4 mainly organised?',
      options:['It lists several solutions and then chooses the best one.','It compares Thai school timetables with those in other countries.','It describes a mismatch, illustrates it with numbers and names the result.','It tells the story of one particular student’s school week in chronological order.'], answer:2,
      why:'Paragraph 4 states a mismatch (“school does not follow the teenage clock”), gives a numerical example (midnight to six = about six hours instead of eight to ten), and names the result: “sleep debt”. Solutions come only in paragraph 6, other countries are not compared here, and the student is a general example, not a story.' },
    { id:'m1-51', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'rd-infer', level:'B2+',
      stem:'It can be inferred from paragraph 6 that the writer believes ______.',
      options:['parents are the main cause of teenagers’ sleep problems','teenagers should be allowed to use phones in bed at weekends','Thai schools will soon copy the later start times being tried abroad','working with the teenage body clock is wiser than blaming teenagers'], answer:3,
      why:'“Nobody can rewrite biology, but it is possible to stop working against it,” and the final question replaces “Why are you so lazy?” with “What time does your body think it is?” The writer wants adults to work with biology, not blame teens. The writer actually advises keeping phones out of bedrooms and makes no prediction about Thai schools.' },
    { id:'m1-52', type:'read', passage:M1_ART1, source:'Source: Adapted for TCAS70 practice', tag:'rd-attitude', level:'B2',
      stem:'What is the writer’s attitude towards teenagers who stay up late?',
      options:['Envious','Sympathetic','Indifferent','Disapproving'], answer:1,
      why:'The writer explains that late bedtimes are mostly biological and asks adults to stop calling teenagers lazy, which shows a <em>sympathetic</em>, understanding attitude. “Disapproving” describes the parents’ easy explanation that the writer rejects, and the writer clearly cares, so “indifferent” is wrong.' },

    { id:'m1-53', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'rd-purpose', level:'B2',
      stem:'What is the primary purpose of the article?',
      options:['To compare Thailand’s soft power with that of South Korea','To give a history of Thai restaurants in Europe and America','To persuade the government to spend more money on T-pop groups','To explain how Thai culture gains influence abroad and what limits that influence'], answer:3,
      why:'The article defines soft power, gives Thai examples (food, music, mascots), then discusses its limits in paragraph 6. K-pop is mentioned only because a Thai star belongs to a K-pop group; restaurants are one example, not a history; and the writer says soft power “cannot simply be ordered from above”, not that the government should spend more.' },
    { id:'m1-54', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'rd-notexcept', level:'B2',
      stem:'Which of the following is NOT given in paragraph 6 as a limit of soft power?',
      options:['Online attention tends to fade quickly.','Viral fame is too expensive to keep up.','A country may be reduced to a few stereotypes.','Government-managed culture may feel like advertising.'], answer:1,
      why:'Paragraph 6 lists three limits: attention is “short-lived”, managed culture can “feel like an advertisement”, and there is “a risk of stereotype”. Cost is never mentioned, so this is the answer.' },
    { id:'m1-55', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'vc-adjs', level:'B2+',
      stem:'The word “ubiquitous” in paragraph 3 is closest in meaning to ______.',
      options:['admired','widespread','affordable','traditional'], answer:1,
      why:'The dishes appear “on menus from London to Los Angeles”, so they are found almost everywhere: <em>widespread</em>. “Admired” is the near-miss because people do like Thai food, but the context clue is about <em>where</em> the food is found, not how people feel about it.' },
    { id:'m1-56', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'rd-reference', level:'B2',
      stem:'In paragraph 6, the word “it” in “it can start to feel like an advertisement” refers to ______.',
      options:['culture','attention','social media','a viral video'], answer:0,
      why:'Read the whole clause: “when governments try too hard to ‘manage’ culture, <em>it</em> can start to feel like an advertisement.” The nearest singular noun that governments manage is <em>culture</em>. “A viral video” and “attention” come from the previous sentence and are not what governments are managing.' },
    { id:'m1-57', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'vc-closest', level:'B2',
      stem:'The word “authentic” in paragraph 5 is closest in meaning to ______.',
      options:['genuine','popular','official','adorable'], answer:0,
      why:'The mascots succeed “because nobody designed them as national symbols”, so they feel real and natural: <em>genuine</em>. “Official” is almost the opposite, and although the characters are popular and cute, those words do not explain the contrast with being “designed”.' },
    { id:'m1-58', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'rd-mention', level:'B2+',
      stem:'Why does the writer mention Moo Deng in paragraph 5?',
      options:['To warn that viral fame can harm animals’ welfare','To argue that zoos are Thailand’s top tourist attractions','To prove that the government’s “five Fs” policy has been a big success','To show that soft power can come from unplanned, unexpected sources'], answer:3,
      why:'Paragraph 5 opens with “the most unexpected soft-power stars” and ends by saying these characters succeed “because nobody designed them as national symbols”. Moo Deng illustrates unplanned soft power. Animal welfare is not discussed, zoo rankings are not given, and a hippo is not part of a government plan.' },
    { id:'m1-59', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'rd-org', level:'C1',
      stem:'Which best describes the organisation of the article?',
      options:['A problem, followed by three solutions and a recommendation','A chronological history of Thai culture from past to present','An opening example, a definition, further examples, limits and a conclusion','A comparison of Thailand with South Korea, followed by the writer’s own personal story'], answer:2,
      why:'The article opens with the mango sticky rice story (1), defines soft power (2), gives examples of food, music and mascots (3–5), discusses limits (6) and ends with a lesson (7). It is not ordered by date, it does not propose solutions to a problem, and it never compares Thailand with South Korea or tells a personal story.' },
    { id:'m1-60', type:'read', passage:M1_ART2, source:'Source: Adapted for TCAS70 practice', tag:'rd-tone', level:'B2+',
      stem:'What is the tone of the final paragraph?',
      options:['Angry and accusing','Formal and technical','Reflective and lightly humorous','Anxious and deeply pessimistic about the future'], answer:2,
      why:'The writer reflects on a lesson (“perhaps”), uses a gentle garden metaphor and jokes about “a very grumpy hippo”, so the tone is reflective and lightly humorous. Nobody is blamed, the language is not technical, and “nobody will see it coming” sounds playful, not anxious or pessimistic.' }
  ]},

  /* ------------------------------------------------ III-1 Text Completion */
  { code:'III-1', part:'SECTION III: WRITING SKILL', title:'Part I: Text Completion (Items 61–75)',
    instructions:'Choose the best answers to complete the following passages.', points:1.25, items:[
    { id:'m1-61', type:'cloze', passage:M1_TC1, blank:'(61)', tag:'wf-pos', level:'B2',
      stem:'Choose the best option for blank (61).',
      options:['anonymous','anonymity','anonymously','anonymousness'], answer:2,
      why:'The blank describes <em>how</em> attackers act, so it modifies the verb “act” and needs an adverb: <em>anonymously</em>. “Anonymous” is an adjective (it would need “act as anonymous users”), and “anonymity/anonymousness” are nouns.' },
    { id:'m1-62', type:'cloze', passage:M1_TC1, blank:'(62)', tag:'rc-reduced', level:'B2+',
      stem:'Choose the best option for blank (62).',
      options:['known','knows','knowing','is known'], answer:0,
      why:'“A phenomenon known as …” is a reduced relative clause (= a phenomenon <em>which is</em> known as …). The sentence already has its main verb (“say”), so a full verb such as “is known” or “knows” would create a second clause with no connector. “Knowing” is the near-miss: it is active, but the phenomenon does not know anything; it <em>is known</em>, so the past participle is needed.' },
    { id:'m1-63', type:'cloze', passage:M1_TC1, blank:'(63)', tag:'lk-contrast', level:'B2',
      stem:'Choose the best option for blank (63).',
      options:['Unlike','Despite','However','Although'], answer:0,
      why:'The blank is followed by a noun phrase (“traditional bullying”) and compares two things that behave differently, so we need <em>Unlike</em>. “Although” needs a full clause, “However” cannot join a noun phrase to a clause, and “Despite” shows concession, not a difference between two things.' },
    { id:'m1-64', type:'cloze', passage:M1_TC1, blank:'(64)', tag:'vp-passinf', level:'B2+',
      stem:'Choose the best option for blank (64).',
      options:['to identify','identifying','to be identified','being identified'], answer:2,
      why:'The pattern is <em>expect + object + to-infinitive</em>, and the attackers receive the action (someone identifies them), so we need the passive infinitive <em>to be identified</em>. “To identify” is active and leaves the verb without an object; the -ing forms do not follow “expect + object”.' },
    { id:'m1-65', type:'cloze', passage:M1_TC1, blank:'(65)', tag:'nc-embedded', level:'B2',
      stem:'Choose the best option for blank (65).',
      options:['how you feel','how do you feel','how is your feeling','how are you feeling'], answer:0,
      why:'After a preposition (“about”), a wh-question becomes an embedded question with normal statement word order: <em>how you feel</em>. “How do you feel” and “how are you feeling” keep question word order, and “how is your feeling” is a common learner error: “feel” is a verb here, not a noun, and it still has question word order.' },
    { id:'m1-66', type:'cloze', passage:M1_TC2, blank:'(66)', tag:'wf-confuse', level:'B2',
      stem:'Choose the best option for blank (66).',
      options:['affect','effect','effective','affection'], answer:1,
      why:'The blank needs a noun naming the phenomenon: the urban heat island <em>effect</em>. “Affect” is normally a verb, “effective” is an adjective, and “affection” means love or fondness.' },
    { id:'m1-67', type:'cloze', passage:M1_TC2, blank:'(67)', tag:'rc-nondef', level:'B2+',
      stem:'Choose the best option for blank (67).',
      options:['it','that','what','which'], answer:3,
      why:'After a comma, <em>which</em> can refer to the whole previous idea (heat being released slowly at night). “That” cannot follow a comma in a relative clause, “what” does not refer back to anything, and “it” would join two sentences with only a comma.' },
    { id:'m1-68', type:'cloze', passage:M1_TC2, blank:'(68)', tag:'vt-sva', level:'B2',
      stem:'Choose the best option for blank (68).',
      options:['has risen','have risen','has been risen','have been risen'], answer:0,
      why:'The subject is “the number”, which is singular (“of nights” is only a description), so the verb is singular. “Over the past few decades” needs the present perfect: <em>has risen</em>. “Rise” is intransitive, so it has no passive form.' },
    { id:'m1-69', type:'cloze', passage:M1_TC2, blank:'(69)', tag:'dt-quant', level:'B1+',
      stem:'Choose the best option for blank (69).',
      options:['all','both','many','every'], answer:3,
      why:'“Tree” is a singular countable noun, and the verb phrase continues with “around <em>it</em>” and “<em>its</em> leaves”, so we need <em>every</em>. “All”, “both” and “many” need a plural noun (all trees, both trees, many trees).' },
    { id:'m1-70', type:'cloze', passage:M1_TC2, blank:'(70)', tag:'vc-prep', level:'B2',
      stem:'Choose the best option for blank (70).',
      options:['on','to','for','with'], answer:1,
      why:'The fixed pattern is <em>contribute to</em> something (help to cause it). “Contribute for/with/on” are not used with this meaning.' },
    { id:'m1-71', type:'cloze', passage:M1_TC3, blank:'(71)', tag:'wo-adverb', level:'B2+',
      stem:'Choose the best option for blank (71).',
      options:['not merely','merely not','not merely is','merely is not'], answer:0,
      why:'The pattern is “<em>not merely</em> X, but Y”: procrastination is not only a time problem but an emotional one. The adverb follows “is”, and “not” comes before “merely”. “Merely not” changes the meaning, and the options with “is” repeat the verb that is already before the blank.' },
    { id:'m1-72', type:'cloze', passage:M1_TC3, blank:'(72)', tag:'pl-parallel', level:'B2',
      stem:'Choose the best option for blank (72).',
      options:['watch','watched','watching','to watch'], answer:0,
      why:'The list must be parallel: “we <em>tidy</em> our desks, <em>answer</em> messages or <em>watch</em> one more video” — three present-tense verbs after “we”. “Watched”, “watching” and “to watch” break the pattern.' },
    { id:'m1-73', type:'cloze', passage:M1_TC3, blank:'(73)', tag:'vm-subj', level:'C1',
      stem:'Choose the best option for blank (73).',
      options:['broken','breaking','be broken','to be broken'], answer:2,
      why:'After <em>recommend that</em>, formal English uses the subjunctive: the base form of the verb for every subject. The task is broken by someone, so it is passive: <em>be broken</em>. “Broken” alone has no verb, and “breaking” and “to be broken” cannot be the main verb after “that a large task”.' },
    { id:'m1-74', type:'cloze', passage:M1_TC3, blank:'(74)', tag:'vm-cond', level:'C1',
      stem:'Choose the best option for blank (74).',
      options:['had not felt','will not feel','would not feel','would not have felt'], answer:2,
      why:'This is a mixed conditional: a past condition (“had learned … in lower secondary school”) with a present result (“today”). The present result uses <em>would + base verb</em>: would not feel. “Would not have felt” is for a past result, which clashes with “today”.' },
    { id:'m1-75', type:'cloze', passage:M1_TC3, blank:'(75)', tag:'wf-compare', level:'B2',
      stem:'Choose the best option for blank (75).',
      options:['less likely','least likely','less likelier','the less likely'], answer:0,
      why:'The word “than” shows a comparison between two groups, so we need the comparative <em>less likely</em>. “Least” is superlative, “less likelier” uses two comparatives, and “the less likely” is only used in “the more …, the less …” patterns.' }
  ]},

  /* ------------------------------------------------ III-2 Paragraph Organization */
  { code:'III-2', part:'SECTION III: WRITING SKILL', title:'Part II: Paragraph Organization (Items 76–80)',
    instructions:'Choose the best answer to rearrange the following statements into a logical paragraph.', points:1.25, items:[
    { id:'m1-76', type:'choose', tag:'po-process', level:'B2',
      stem:'<div class="orderblock"><p>A. The pulp is then cleaned to remove ink, glue and plastic, and it is sometimes bleached to make it whiter.</p><p>B. Turning used paper into new paper involves a surprisingly careful series of steps.</p><p>C. Finally, the clean pulp is spread onto large screens, pressed and dried into long sheets of new paper.</p><p>D. First, collected paper is sorted by type and mixed with water in a huge machine that breaks it down into a soft pulp.</p></div>',
      options:['B-A-D-C','B-D-A-C','D-A-B-C','D-B-A-C'], answer:1,
      why:'B is the general topic sentence, so it opens. Then the process markers give the order: <em>First</em> (D, making the pulp) → <em>then</em> (A, cleaning “the pulp”) → <em>Finally</em> (C, “the clean pulp” becomes paper). D cannot open because “First” needs a topic to belong to, and A needs the pulp to exist before it can be cleaned.' },
    { id:'m1-77', type:'choose', tag:'po-given', level:'B2+',
      stem:'<div class="orderblock"><p>A. “Phubbing”, a blend of “phone” and “snubbing”, is the habit of ignoring the person you are with in order to look at your phone.</p><p>B. She may think this small act is harmless, but her friend usually notices it immediately.</p><p>C. For example, a student who checks her messages while a friend is sharing a problem is phubbing, even if she is still half-listening.</p><p>D. Over time, such behaviour can damage relationships, as people who are repeatedly phubbed report feeling less valued and less close to their friends.</p></div>',
      options:['A-C-B-D','A-C-D-B','C-A-B-D','C-A-D-B'], answer:0,
      why:'The pattern is definition → example → consequence. A defines the new term, C gives an example (“For example, a student…”), B continues with “She” and “this small act”, which need the student in C, and D gives the long-term result (“Over time, such behaviour…”). Putting D before B breaks the example: B still describes the student in C (“She”, “this small act”), so it must follow C directly, while D moves to the long-term consequence and closes the paragraph.' },
    { id:'m1-78', type:'choose', tag:'po-signal', level:'B2+',
      stem:'<div class="orderblock"><p>A. The most dangerous type is disinformation: false content created deliberately to deceive people, such as AI-generated videos of events that never happened.</p><p>B. The least harmful type is satire, which uses exaggeration for humour and is not meant to be believed, although some readers still take it seriously.</p><p>C. One simple way to classify false information online is to divide it into three types, according to how much harm it can cause.</p><p>D. A more serious type is misinformation: false content shared by people who genuinely believe it is true.</p></div>',
      options:['B-C-D-A','B-D-A-C','C-A-D-B','C-B-D-A'], answer:3,
      why:'C introduces the classification (“three types”) and opens. The signal words then climb in importance: <em>The least harmful</em> (B) → <em>A more serious</em> (D) → <em>The most dangerous</em> (A). C-A-D-B reverses the scale, but “A more serious type” must come after a less serious one, so D cannot follow A.' },
    { id:'m1-79', type:'choose', tag:'po-compare', level:'B2',
      stem:'<div class="orderblock"><p>A. In the end, many readers choose screens for convenience and paper for deep, careful study.</p><p>B. E-books are light, cheap and instantly available, allowing a student to carry an entire library on a single phone.</p><p>C. Printed books, on the other hand, give readers a physical sense of where they are in a text, which may help them remember what they read.</p><p>D. Digital and printed books each offer readers clear but different advantages.</p></div>',
      options:['B-C-A-D','B-D-C-A','D-B-C-A','D-C-B-A'], answer:2,
      why:'D states the comparison and opens. B presents the first side (e-books), C presents the second side with <em>on the other hand</em>, which needs a first side before it, and A concludes with <em>In the end</em>. D-C-B-A fails because “on the other hand” cannot come before the first side has been given.' },
    { id:'m1-80', type:'choose', tag:'po-argue', level:'B2+',
      stem:'<div class="orderblock"><p>A. As a result, fewer students can take part in sports and outdoor lessons, which reduces their physical activity.</p><p>B. In northern Thailand, the burning of farm waste in the dry season releases large amounts of fine dust into the air.</p><p>C. This dust, known as PM2.5, is small enough to enter the lungs, so schools often keep students indoors when levels are high.</p><p>D. In the long run, this lack of activity may affect not only students’ fitness but also their concentration in class.</p></div>',
      options:['A-C-B-D','A-D-C-B','B-C-A-D','B-D-A-C'], answer:2,
      why:'This is a cause → effect chain. B gives the first cause (burning farm waste), C picks up “This dust” and leads to students kept indoors, A gives the result (“As a result, fewer students … physical activity”), and D ends with the long-term effect of “this lack of activity”. D cannot come second because “this lack of activity” has not been mentioned yet.' }
  ]}
  ]
});
