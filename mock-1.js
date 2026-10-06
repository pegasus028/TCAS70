/* ===========================================================================
   TCAS70 Launchpad — MOCK 1 · Diagnostic   (m1)
   TCAS68 level: solid B2 core with a few B2+/C1 items. Touches as many
   skills/tags as possible so every miss maps to a lesson.
   Oct 2026 revision (TCAS70 mock profile, SPEC.md §1b): 9 NOT/EXCEPT stems,
   international-style dated source lines, text completion rebalanced towards
   prepositions and connectors, 2+2 / 4x paragraph-order sets, and 20 unscored
   triage extras (items 81–100) so the checklist rests on more evidence.
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
  brand:'Starlight Fridays · Science Discovery Museum',
  headline:'The museum after dark. No crowds, just questions.',
  body:['Every Friday from 6 p.m. to 10 p.m., the Science Discovery Museum stays open late for students. Explore all four floors without school groups, try the new Climate Lab, and catch a 30-minute planetarium show under a sky full of stars.',
        'Bring your friends, bring your questions, and leave with a few new ones.'],
  bullets:['Climate Lab: test how heat, rain and rising seas change a model city',
           'Planetarium shows at 7:00 and 8:30 p.m. (seats on a first-come, first-served basis)',
           'Talk to a Scientist: a different researcher answers visitors’ questions every week',
           'Café open until 9:30 p.m. · free lockers on the ground floor'],
  price:'Student Night Pass ฿150 (normal evening price ฿300) · Groups of five or more: one extra ticket free',
  cta:'Book online and show your e-ticket at the door. Ten minutes’ walk from Riverside MRT station.',
  fine:'The Student Night Pass is for full-time students aged 15–22 and requires a valid student ID at the door. It is not valid on public holidays. Visitors under 15 must come with an adult. Each planetarium show seats 120 people.',
  source:'illustrative advertisement written for TCAS70 practice (a fictional museum), October 2026'
};

var M1_AD2 = [
  { brand:'SunVeil', headline:'Daily Fluid SPF50+ PA++++ · Protection you can’t feel.',
    body:['Most sunscreens feel like a mask. SunVeil Daily Fluid feels like nothing at all. Its water-light texture sinks in within seconds, leaves no white cast and sits perfectly under make-up.'],
    bullets:['Oil-free and non-comedogenic: will not clog pores','Dermatologist-tested on sensitive and acne-prone skin','Water-resistant for up to 40 minutes','50 ml tube fits in any pencil case'],
    price:'฿459 · Buy 2, get the second at half price (until 31 October)',
    cta:'Available at all LifeCare pharmacies nationwide and online.',
    fine:'Reapply every 2 hours and after swimming or towel drying. Not recommended for children under 3.',
    source:'illustrative advertisement written for TCAS70 practice (fictional brands), October 2026' },
  { brand:'AquaShield Sport', headline:'SPF50 PA+++ · Built for the long game.',
    body:['Whether you are running a half-marathon or spending a whole day at the beach, AquaShield Sport stays where you put it. Its sweat-lock formula keeps protecting you even when you are dripping.'],
    bullets:['Water- and sweat-resistant for up to 80 minutes','Reef-friendly: made without oxybenzone and octinoxate','Fragrance-free','Big 100 ml bottle for the whole team'],
    price:'฿590 · Complimentary cooling towel with every bottle, while stocks last',
    cta:'Find it at sports stores and on our official online shop.',
    fine:'Reapply after 80 minutes of swimming or sweating, and immediately after towel drying.',
    source:'illustrative advertisement written for TCAS70 practice (fictional brands), October 2026' }
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
var M1_REVIEW_SRC = 'Source: adapted for TCAS70 practice from a student’s app-review blog, August 2026 (LingoLeap is a fictional app)';

var M1_NEWS = '(1) Bangkok begins to dry out as Central region floods keep rising\nBy Lantern reporter Kanyarat Boonmee\n\n' +
'(2) More than 3.2 million people in about 1.17 million households have now been affected by floods that began in mid-September, the Department of Disaster Prevention and Mitigation said on Sunday, 4 October. At least 31 people have died.\n\n' +
'(3) In Bangkok, which was declared a flood disaster zone on 26 September after more than 300 millimetres of rain fell in 48 hours, the water is now going down. In the Central region, however, levels are still rising, and 27 provinces besides the capital remain flooded.\n\n' +
'(4) Officials point to two causes arriving together: heavy rain that has continued since 16 September, and water released from the Chao Phraya Dam upstream at between 1,500 and 2,500 cubic metres per second.\n\n' +
'(5) “Bangkok sits at the bottom of a funnel,” said Dr Pimchanok Wattanasiri, a hydrologist at a Bangkok university. “When the sky and the river both send you water in the same fortnight, even a good drainage system will struggle.”\n\n' +
'(6) Warnings were reportedly sent to mobile phones by cell broadcast, which pushes an alert to phones in an area without the need for an app. Many residents praised the alerts, but some older people said they had not understood them, or had not noticed them because their phones were on silent.\n\n' +
'(7) “My mother saw the message, but she thought it was an advertisement,” said one resident of Lat Krabang district. “By the time I explained it to her, the water was already at our door.”\n\n' +
'(8) Residents’ groups in some low-lying communities complained that temporary barriers kept main roads dry while pushing water into their narrow sois. “The water has to go somewhere, and it always seems to come to us,” said the head of one community group.\n\n' +
'(9) The floods are also costing the economy. The Federation of Thai Industries estimated that its members lost 1.02 billion baht in the last week of September alone, and a new government disaster-insurance scheme, launched on 1 October, offers an initial flood payout of 10,000 baht.\n\n' +
'(10) Experts say the floods are a warning. “This is no longer a once-in-a-lifetime event,” Dr Pimchanok said. “Cities like Bangkok need to plan for extreme rain as a normal part of life, not as a surprise.”';
var M1_NEWS_SRC = 'Source: The Bangkok Lantern (a fictional newspaper), 5 October 2026, adapted for TCAS70 practice. Figures: Department of Disaster Prevention and Mitigation, 4 October 2026. The expert and the quotations are illustrative.';

/* ------------------------------------------------------------- VISUALS */
var M1_V1 = { kind:'table',
  title:'Average daily screen time of teenagers aged 13–18, by activity, in a national survey, 2026 (minutes per day)',
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
  source:'illustrative data written for TCAS70 practice, 2026' };

var M1_V2 = { kind:'flow',
  title:'Applying for a one-year student exchange programme',
  steps:['Check that you are aged 15–18 and that your grade average is at least 3.00',
    {q:'Do you have an English test score (IELTS 5.5 or equivalent)?',
     yes:['Upload your score certificate to the online form'],
     no:['Book the free placement test at the exchange office','Upload your placement test result when it arrives']},
    'Write a 300-word personal statement and ask a teacher for a reference letter',
    {q:'Will you be under 18 on the day of departure?',
     yes:['Ask a parent or guardian to sign the consent form'],
     no:['Sign the consent form yourself']},
    'Attend a group interview at the exchange office; results are sent by email within three weeks'],
  note:'Illustrative process for practice. Applications for the 2027–28 year close on 15 December 2026.',
  source:'illustrative flowchart written for TCAS70 practice, October 2026' };

/* ------------------------------------------------------------ ARTICLES */
var M1_ART1 = 'Wired at Midnight: Why Teenagers Can’t Fall Asleep Early\n\n' +
'(1) Every parent of a teenager knows the scene. It is 11:30 p.m., the lights are off, and yet a glowing phone screen still lights up the bedroom. The easy explanation is that teenagers are lazy or addicted to their devices. The real explanation is more interesting, and it begins inside the brain.\n\n' +
'(2) All humans have a circadian rhythm, an internal “body clock” that runs on a cycle of roughly 24 hours and tells us when to feel alert and when to feel sleepy. One of its main tools is melatonin, a hormone that the brain releases as evening falls to prepare the body for sleep. In young children, melatonin rises early, which is why a seven-year-old can fall asleep at eight o’clock. During puberty, however, this release shifts later by up to two hours. A typical teenager’s brain is simply not ready for sleep until around 11 p.m. In other words, telling a sixteen-year-old to fall asleep at nine is a little like telling an adult to fall asleep at seven in the evening.\n\n' +
'(3) Modern habits make this natural delay worse. The light from phones, tablets and laptops is rich in blue wavelengths, which the brain reads as daylight. Scrolling in bed therefore sends the body clock a false message that it is still daytime, holding back melatonin even further. The content matters, too. A group chat full of drama or a game that ends in a narrow defeat keeps the mind excited long after the screen goes dark. Screens, in short, do not create the teenage night owl, but they exacerbate a tendency that biology has already set in motion.\n\n' +
'(4) The problem is that school does not follow the teenage clock. Many schools in Thailand begin their day at around 8 a.m., and students who live far away may need to get up before six to beat the traffic. A student who cannot fall asleep before midnight and must wake at six gets about six hours of sleep, while sleep scientists recommend eight to ten hours for this age group. The missing hours do not simply disappear. They build up, night after night, into what researchers call “sleep debt”.\n\n' +
'(5) Like any debt, it must eventually be paid, and the costs are high. Prolonged sleep deprivation has been linked to poorer memory, weaker concentration, low mood and a greater risk of accidents. It also affects appetite: tired teenagers tend to crave sugary, high-energy snacks. Many students try to repay the debt by sleeping until noon at the weekend, but this “catch-up” sleep confuses the body clock further and makes Monday morning even harder. It is a cycle that is easy to enter and difficult to escape.\n\n' +
'(6) What can be done? Some school districts abroad have experimented with starting classes later, and several have reported better attendance and fewer students falling asleep in class. Families can help, too, by keeping phones out of bedrooms at night and keeping wake-up times similar on weekdays and at weekends. Nobody can rewrite biology, but it is possible to stop working against it. Perhaps the next time a teenager is still awake at midnight, the first question should not be “Why are you so lazy?” but “What time does your body think it is?”';

var M1_ART1_SRC = 'Source: adapted for TCAS70 practice from a popular-science feature on teenage sleep, 2026';
var M1_ART2_SRC = 'Source: adapted for TCAS70 practice from a culture feature on Thai soft power, 2026';

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

var M1_TC2 = 'On a hot night in the dry season, the centre of a large tropical city can be several degrees warmer than the rice fields just outside it. Scientists call this the urban heat island ___(66)___. It happens because concrete, asphalt and glass absorb heat during the day and release it slowly at night, ___(67)___ means that the city never fully cools down. In many tropical cities, the number of nights on which the temperature stays above 28°C ___(68)___ steadily over the past few decades. Trees and parks help, since ___(69)___ tree can lower the temperature around it through shade and the water its leaves release. Cool roofs, painted white to reflect sunlight, can also contribute ___(70)___ lower indoor temperatures and smaller electricity bills. For crowded cities in hot countries, small changes like these can make daily life noticeably more comfortable.';

var M1_TC3 = 'Most people think procrastination is simply a sign of laziness or poor planning. Psychologists increasingly disagree: procrastination is ___(71)___ a time-management problem, but an emotional one. When a task makes us feel anxious, bored or unsure of ourselves, delaying it brings instant relief. Instead of starting the essay, we tidy our desks, answer messages or ___(72)___ one more video. The good news is that the habit can be changed. Some study apps now ___(73)___ users from opening social media until a timer has finished, and many psychologists recommend breaking a large task into small, specific steps, such as “write the first paragraph” rather than “write the essay.” The hardest part of any task is usually the moment before we start, which is why a student who keeps ___(74)___ an essay until the night before often finds it takes far less time than she feared. Self-forgiveness helps, too: students who forgive themselves for delaying are less likely to procrastinate again, ___(75)___ guilt only makes the next task feel heavier.';

/* ------------------------------------------- TRIAGE EXTRAS (not scored) */
var M1_X1 = [
  {who:'Situation', text:'At a phone repair shop'},
  {who:'Customer', text:'Hi. I picked up my phone here on Monday after you replaced the screen, but ___(81)___'},
  {who:'Assistant', text:'Oh dear. May I have a look? … I see. The touch screen isn’t responding in the bottom corner.'},
  {who:'Customer', text:'Exactly. I can’t even open my messages. ___(82)___'},
  {who:'Assistant', text:'You’re right to be annoyed, and I’m very sorry. ___(83)___ I’ve had a proper look, I can see what went wrong: the part we used came from a new supplier, and a few of them have turned out to be faulty.'},
  {who:'Customer', text:'So what happens now?'},
  {who:'Assistant', text:'___(84)___ We’ll fit a new screen from our usual supplier today, free of charge, and add an extra six months to your warranty.'},
  {who:'Customer', text:'That sounds fair. Thank you.'}
];
var M1_X2 = [
  {who:'Situation', text:'Two friends talking after school'},
  {who:'Bow', text:'Guess what? I got a place at the summer science camp!'},
  {who:'Ice', text:'___(85)___ You applied months ago. I thought you’d given up hope.'},
  {who:'Bow', text:'So did I. The email came completely ___(86)___, while I was eating lunch.'},
  {who:'Ice', text:'So what’s the plan? Have you booked your train?'},
  {who:'Bow', text:'Not yet. The camp hasn’t sent the timetable, so I’ll just ___(87)___ and book when I know the dates.'},
  {who:'Ice', text:'Sensible. ___(88)___ could you ask whether they take students from other schools next year? I’d love to go too.'},
  {who:'Bow', text:'Sure. I’ll email them tonight.'}
];
var M1_X3 = 'On almost every keyboard you have ever used, the letters ___(89)___ in the same strange order, with Q, W, E, R, T, Y at the top left. According to the most popular explanation, the layout was designed in the 1870s for mechanical typewriters, whose metal arms could jam when two neighbouring letters were typed too quickly. Spreading common letter pairs across the keyboard made jams less likely, ___(90)___ it did not make typing any faster. Today’s keyboards cannot jam at all, and several other layouts, some said to be faster, have been invented since. ___(91)___ these alternatives, QWERTY has survived, mainly because millions of people have already learned it and few want to start again. Economists call this kind of situation “lock-in”: once a standard is widely used, switching becomes ___(92)___ expensive, even when a better option exists.';
var M1_X4 = 'Most of us have had a tune stuck in our heads for hours. These repeating tunes are popularly called “earworms,” and surveys suggest that they are ___(93)___ common, especially among people who listen to music every day. Earworms are usually short, catchy sections of a song, often the chorus, ___(94)___ by a simple melody and plenty of repetition. Stress and tiredness seem to make them more likely, and so does hearing a song several times in a row. The good news is that they can ___(95)___: chewing gum, for example, appears to interfere ___(96)___ the silent “rehearsal” in our heads that keeps the tune going.';
var M1_X5 = 'A hiccup begins with a sudden, involuntary tightening of the diaphragm, the muscle ___(97)___ the chest and the stomach. A moment later, the vocal cords snap shut and make the familiar “hic” sound. Most cases are ___(98)___ and stop on their own within minutes. Popular cures include holding your breath and drinking water slowly, ___(99)___ being given a sudden fright. However, scientists have rarely ___(100)___ these cures to a careful test, so nobody knows whether any of them works better than simply waiting.';

/* =========================================================================== */
MOCKS.push({
  id: 'm1', name: 'Mock 1 · Diagnostic',
  blurb: 'The triage paper everyone sits first: a full 80-item TCAS-style exam at TCAS68 level that touches almost every skill, plus 20 unscored extras on the most frequent conversation and grammar points, so each miss points to a specific lesson.',
  minutes: 100, total: 100,
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
      options:['To recruit volunteers to help scientists at night','To advertise a café that stays open late near the museum','To persuade students to visit the museum on Friday evenings','To announce a new climate exhibition for visiting school groups'], answer:2,
      why:'Everything in the ad sells one thing: a late-night visit for students (“Every Friday from 6 p.m. to 10 p.m. … stays open late for students”) with a cheap Student Night Pass. The Climate Lab is one attraction, and the evenings are specifically “without school groups”. The café is a small detail, and nobody is asked to volunteer.' },
    { id:'m1-22', type:'read', passage:'', ad:M1_AD1, tag:'ad-technique', level:'B2',
      stem:'The offer “Groups of five or more: one extra ticket free” mainly uses which advertising technique?',
      options:['Quoting an expert’s opinion','Creating a sense of urgency','Showing that many people already visit','Making the visit cheaper for each person'], answer:3,
      why:'A free extra ticket makes a group visit cheaper per person, so the offer persuades through price and value. Nothing in this line sets a deadline (urgency), names an expert, or claims that crowds of people already go (bandwagon); the ad even promises “No crowds”.' },
    { id:'m1-23', type:'read', passage:'', ad:M1_AD1, tag:'ad-fineprint', level:'B2',
      stem:'According to the fine print, which visitor could NOT buy a Student Night Pass?',
      options:['Pim, 16, who brings a valid student ID on a Friday','Tee, 21, a full-time university student with a valid ID','Beam, 14, who comes with her father and shows her school ID','Oat, 19, who books online and shows his student ID at the door'], answer:2,
      why:'The pass is only for full-time students “aged 15–22”, so Beam, at 14, cannot buy it, even though she follows the rule that under-15s must come with an adult. That rule lets her visit, not buy the student pass. Pim, Tee and Oat are all within the age range and show a valid ID.' },
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
    { id:'m1-27', type:'read', passage:M1_REVIEW, source:M1_REVIEW_SRC, tag:'rv-attitude', level:'B2',
      stem:'What is the reviewer’s overall opinion of LingoLeap?',
      options:['It is useful in some areas but not enough on its own.','It is fun to use but too expensive to recommend to anyone at all.','It completely keeps its promise of making learners conversation-ready.','It is designed mainly for young children because of its cartoon mascot.'], answer:0,
      why:'The verdict is mixed: the app is good for motivation and pronunciation, but “you will need a good textbook or a teacher as well”. The reviewer says she is <em>not</em> conversation-ready, does recommend it to some learners, and says the mascot “sounds childish, but it works”.' },
    { id:'m1-28', type:'read', passage:M1_REVIEW, source:M1_REVIEW_SRC, tag:'rv-evidence', level:'B2',
      stem:'According to the review, what is the app’s greatest strength?',
      options:['Its grammar explanations are short and easy to follow.','Its AI gives instant feedback on the learner’s pronunciation.','Its listening exercises use natural voices from Japanese anime.','Its lessons can be downloaded and used without an internet connection.'], answer:1,
      why:'Paragraph 3 calls the speaking exercises “the real highlight”: the AI gives instant feedback on pronunciation. The grammar explanations are criticised for being too brief, the listening voice is slow and robotic, and offline use is never mentioned.' },
    { id:'m1-29', type:'read', passage:M1_REVIEW, source:M1_REVIEW_SRC, tag:'rv-infer', level:'B2',
      stem:'What can be inferred about Leapy, the app’s mascot?',
      options:['It helped the reviewer build a daily study habit.','It is the main reason why the Premium plan is expensive.','It annoyed the reviewer so much that she turned off its reminders.','It makes the app suitable only for learners who are young children.'], answer:0,
      why:'The reviewer says the frog’s reminders and streaks “work: I have not missed a single day since June”, so Leapy helped her study regularly. She admits it “sounds childish”, but she never says the app is only for children, and the mascot is not linked to price or to annoying her.' },
    { id:'m1-30', type:'read', passage:M1_REVIEW, source:M1_REVIEW_SRC, tag:'rv-evidence', level:'B2+',
      stem:'Which detail best shows that the app is not always reliable?',
      options:['Its lessons last only five to seven minutes.','It lost the reviewer’s progress when it crashed.','Its listening exercises use a slow, robotic voice.','Its free version shows an advert after every lesson.'], answer:1,
      why:'“Reliable” means working properly every time. Crashing in the middle of lessons and losing progress (paragraph 4) shows the app sometimes fails. The robotic voice is a problem of quality, not reliability; short lessons are a strength, and adverts are part of the free plan’s design.' },
    { id:'m1-31', type:'read', passage:M1_REVIEW, source:M1_REVIEW_SRC, tag:'rd-detail', level:'B2+',
      stem:'Which statement about LingoLeap’s free and paid plans is TRUE?',
      options:['Premium users still see adverts after each lesson.','The speaking exercises are available only to paying users.','Paying for a full year costs more than paying month by month.','The free version offers unlimited lessons but no speaking practice.'], answer:1,
      why:'Paragraph 5 says the Premium plan “unlocks the speaking exercises”, so free users cannot use them. Twelve months at ฿349 is ฿4,188, which is more than ฿2,990, so the yearly plan is cheaper. Premium removes the ads, and the free version is limited to five lessons a day.' },
    { id:'m1-32', type:'read', passage:M1_REVIEW, source:M1_REVIEW_SRC, tag:'rd-notexcept', level:'B2',
      stem:'Which of the following does the reviewer NOT do?',
      options:['Name a rival app and compare it in detail','Describe a technical problem she experienced','Say who would benefit most from using the app','Mention another person who noticed her progress'], answer:0,
      why:'The review mentions that “some rival apps offer similar features for less” but never names one or compares it in detail. She does describe the crashes, says the app suits people who need motivation and pronunciation practice, and mentions her Japanese teacher noticing her progress.' }
  ]},

  /* ------------------------------------------------ II-3 News */
  { code:'II-3', part:'SECTION II: READING SKILL', title:'Part III: News Report (Items 33–38)',
    instructions:'Read the following news report and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-33', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-main', level:'B2',
      stem:'What is the main idea of the news report?',
      options:['Bangkok’s drainage system has now solved the flood problem.','Older residents were the main victims of the floods nationwide.','A new insurance scheme will pay for all flood damage from now on.','The floods have hit millions and are easing in Bangkok but rising elsewhere.'], answer:3,
      why:'The headline (“Bangkok begins to dry out as Central region floods keep rising”) and paragraphs 2–3 give the main idea: millions affected, water going down in Bangkok but rising in the Central region. The drainage system “will struggle”, older residents appear in one detail (paragraph 6), and the insurance scheme offers only an “initial” payout.' },
    { id:'m1-34', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-notexcept', level:'B2',
      stem:'Which of the following is NOT mentioned as a problem with the flood warnings?',
      options:['Some people did not understand them.','Some phones were set to silent mode.','Some people mistook them for adverts.','Some alerts arrived after the rain had stopped.'], answer:3,
      why:'Paragraph 6 says some older people “had not understood them, or had not noticed them because their phones were on silent”, and paragraph 7 tells of a mother who thought the alert “was an advertisement”. Nobody says an alert arrived after the rain stopped; the Lat Krabang family lost time because of a misunderstanding, not a late alert.' },
    { id:'m1-35', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-infer', level:'B2+',
      stem:'What can be inferred from the Lat Krabang resident’s words in paragraph 7?',
      options:['Adverts on mobile phones increase during floods.','The alert was sent too late to be useful to anyone.','Misreading the alert reduced the family’s time to prepare.','The family’s mobile phones did not receive the alert at all.'], answer:2,
      why:'The mother saw the alert but thought it was an advert, and by the time her child explained it, “the water was already at our door”. So the misunderstanding cost them valuable time. The phone did receive the message, and one family’s story does not prove the alert was useless for everyone.' },
    { id:'m1-36', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-cause', level:'B2',
      stem:'According to the report, what has caused the flooding?',
      options:['Heavy rain plus water from a dam','A sudden rise in the level of the sea','Pumps that stopped working in the capital','Barriers that failed in low-lying communities'], answer:0,
      why:'Paragraph 4 names “two causes arriving together”: heavy rain “since 16 September” and “water released from the Chao Phraya Dam upstream”. The sea and broken pumps are never mentioned, and the barrier complaint in paragraph 8 is about where the water went, not why the flood happened.' },
    { id:'m1-37', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-views', level:'B2',
      stem:'What opinion do some residents’ groups in low-lying communities express?',
      options:['They think the cell broadcast alerts were sent too often.','They want the city to build more barriers along main roads.','They believe the insurance payout is too small to help them.','They feel the barriers moved the flood problem into their neighbourhoods.'], answer:3,
      why:'Paragraph 8: the barriers kept main roads dry “while pushing water into their narrow sois”, and “it always seems to come to us”. They are unhappy that the water was moved onto them. They do not ask for more barriers, and they say nothing about the alerts or the insurance payout.' },
    { id:'m1-38', type:'read', passage:M1_NEWS, source:M1_NEWS_SRC, tag:'rd-support', level:'B2+',
      stem:'Which detail best supports the idea that the floods reach far beyond the capital?',
      options:['A disaster zone was declared in Bangkok.','More than 300 mm of rain fell on parts of Bangkok.','Twenty-seven provinces besides Bangkok remain flooded.','Some low-lying communities complained about the barriers.'], answer:2,
      why:'Only the 27 provinces “besides the capital” (paragraph 3) show the flooding outside Bangkok. The disaster zone and the 300 mm of rain are both about Bangkok, and the barrier complaints describe local communities, not the size of the area affected.' }
  ]},

  /* ------------------------------------------------ II-4 Visuals */
  { code:'II-4', part:'SECTION II: READING SKILL', title:'Part IV: Visuals (Items 39–44)',
    instructions:'Study the following visuals and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-39', type:'read', passage:'', visual:M1_V1, tag:'vs-title', level:'B1+',
      stem:'The table gives information about all of the following EXCEPT ______.',
      options:['time spent on online gaming','differences between girls and boys','how screen time has changed since 2020','how long teenagers spend on each activity'], answer:2,
      why:'The title gives one year only (2026), so the table cannot show change since 2020. It does show minutes per activity, separate Female and Male columns, and a row for online gaming. Read the title and the units before the rows.' },
    { id:'m1-40', type:'read', passage:'', visual:M1_V1, tag:'vs-math', level:'B2',
      stem:'Female teenagers spend approximately twice as much time as male teenagers on which activity?',
      options:['Online shopping','Music & podcasts','Chat & messaging','Reading e-books & webtoons'], answer:3,
      why:'Reading e-books and webtoons: 28 ÷ 14 = exactly 2. The near-miss is online shopping (32 ÷ 19 ≈ 1.7). Chat and messaging (84 ÷ 55 ≈ 1.5) and music and podcasts (36 ÷ 24 = 1.5) are further from double.' },
    { id:'m1-41', type:'read', passage:'', visual:M1_V1, tag:'vs-compare', level:'B2',
      stem:'Apart from online gaming, which activity shows the largest difference between female and male teenagers?',
      options:['Online shopping','Music & podcasts','Chat & messaging','Short-video apps'], answer:2,
      why:'Subtract each pair: chat and messaging 84 − 55 = 29 minutes, short-video apps 118 − 96 = 22, online shopping 32 − 19 = 13, and music and podcasts 36 − 24 = 12. Short-video apps have the biggest numbers, which makes them tempting, but the gap is smaller.' },
    { id:'m1-42', type:'read', passage:'', visual:M1_V2, tag:'vs-flow', level:'B1+',
      stem:'After checking that they are eligible, what should an applicant with no English test score do next?',
      options:['Upload a score certificate','Book the free placement test','Ask a teacher for a reference letter','Attend a group interview at the exchange office'], answer:1,
      why:'Follow the “No” path of the first question: an applicant without a score books the free placement test, then uploads the result. Uploading a certificate is the “Yes” path, and the reference letter and interview come later for everyone.' },
    { id:'m1-43', type:'read', passage:'', visual:M1_V2, tag:'vs-flow', level:'B2',
      stem:'Nok will be 18 on the day of departure and already has an IELTS score of 6.0. Which of these is part of her application?',
      options:['Taking the placement test','Signing the consent form herself','Uploading her placement test result','Asking a parent to sign the consent form'], answer:1,
      why:'Nok has a score, so she takes the “Yes” path and never needs the placement test or its result. At 18 she is not “under 18 on the day of departure”, so she follows the second “No” path and signs the form herself. Asking a parent to sign is the near-miss: it applies only to applicants under 18.' },
    { id:'m1-44', type:'read', passage:'', visual:M1_V2, tag:'vs-trap', level:'B2',
      stem:'Which piece of information is NOT given in the flowchart or its note?',
      options:['When applications close','How much the programme costs','How long the personal statement should be','How applicants receive their interview results'], answer:1,
      why:'The note gives the closing date (15 December 2026), the third step says the statement is 300 words, and the last step says results come by email. The cost is never mentioned. Answer from the visual, not from what a real programme might include.' }
  ]},

  /* ------------------------------------------------ II-5 Articles */
  { code:'II-5', part:'SECTION II: READING SKILL', title:'Part V: General Articles (Items 45–60)',
    instructions:'Read the following articles and choose the best answer for each question.', points:1.25, items:[
    { id:'m1-45', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'rd-main', level:'B2',
      stem:'What is the main idea of the article?',
      options:['Teenagers stay up late mainly because they are addicted to their phones.','Schools in Thailand should start classes two hours later from next year.','Sleeping until noon at the weekend is the best way for teenagers to repay the sleep debt they build up.','Teenagers’ late bedtimes are largely biological, and modern habits and school times make them worse.'], answer:3,
      why:'The article says the real explanation “begins inside the brain” (the body clock shifts later in puberty), then shows how screens and early school starts make the problem worse. It rejects the “lazy or addicted” explanation, says weekend catch-up sleep makes things worse, and never demands a specific Thai school start time.' },
    { id:'m1-46', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'rd-cause', level:'B2',
      stem:'According to paragraph 2, why can a young child fall asleep earlier than a teenager?',
      options:['Children produce much more melatonin than teenagers do.','Children look at screens less often before going to bed.','Children’s brains release melatonin earlier in the evening.','Children’s body clocks run on a cycle shorter than 24 hours.'], answer:2,
      why:'Paragraph 2 says “In young children, melatonin rises early, which is why a seven-year-old can fall asleep at eight.” The key is <em>timing</em>, not amount, so “much more melatonin” is wrong. Screens may be true in real life, but they are not the reason given in paragraph 2, and all humans have a cycle of roughly 24 hours.' },
    { id:'m1-47', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'vc-verbs', level:'C1',
      stem:'The word “exacerbate” in paragraph 3 is closest in meaning to ______.',
      options:['cause','reveal','worsen','diminish'], answer:2,
      why:'Paragraph 3 begins “Modern habits make this natural delay <em>worse</em>”, and the last sentence says screens do not create the problem but exacerbate it, so exacerbate = make worse. “Cause” is the near-miss, but the writer clearly says screens do <em>not</em> create the tendency.' },
    { id:'m1-48', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'rd-reference', level:'B2+',
      stem:'In paragraph 5, the word “It” in “It is a cycle that is easy to enter and difficult to escape” refers to ______.',
      options:['the habit of eating sugary snacks when tired','the risk of accidents caused by poor concentration','the shift of the body clock that happens during puberty','losing sleep on weekdays and then sleeping late at weekends'], answer:3,
      why:'The sentences just before describe repaying sleep debt by sleeping until noon at the weekend, which confuses the body clock and makes Monday harder, so the student loses sleep again. That repeating pattern is the “cycle”. Snacks and accidents are single effects, and the puberty shift is from paragraph 2.' },
    { id:'m1-49', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'vc-nouns', level:'B2',
      stem:'The word “deprivation” in paragraph 5 can best be replaced by ______.',
      options:['lack','excess','pattern','disorder'], answer:0,
      why:'Sleep <em>deprivation</em> means not having enough sleep, which matches the “missing hours” and “sleep debt” in paragraph 4. “Excess” is the opposite, “pattern” is too neutral, and “disorder” suggests a medical illness rather than simply too little sleep.' },
    { id:'m1-50', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'rd-org', level:'B2+',
      stem:'How is paragraph 4 mainly organised?',
      options:['It lists several solutions and then chooses the best one.','It compares Thai school timetables with those in other countries.','It describes a mismatch, illustrates it with numbers and names the result.','It tells the story of one particular student’s school week in chronological order.'], answer:2,
      why:'Paragraph 4 states a mismatch (“school does not follow the teenage clock”), gives a numerical example (midnight to six = about six hours instead of eight to ten), and names the result: “sleep debt”. Solutions come only in paragraph 6, other countries are not compared here, and the student is a general example, not a story.' },
    { id:'m1-51', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'rd-infer', level:'B2+',
      stem:'It can be inferred from paragraph 6 that the writer believes ______.',
      options:['parents are the main cause of teenagers’ sleep problems','teenagers should be allowed to use phones in bed at weekends','Thai schools will soon copy the later start times being tried abroad','working with the teenage body clock is wiser than blaming teenagers'], answer:3,
      why:'“Nobody can rewrite biology, but it is possible to stop working against it,” and the final question replaces “Why are you so lazy?” with “What time does your body think it is?” The writer wants adults to work with biology, not blame teens. The writer actually advises keeping phones out of bedrooms and makes no prediction about Thai schools.' },
    { id:'m1-52', type:'read', passage:M1_ART1, source:M1_ART1_SRC, tag:'rd-attitude', level:'B2',
      stem:'What is the writer’s attitude towards teenagers who stay up late?',
      options:['Envious','Sympathetic','Indifferent','Disapproving'], answer:1,
      why:'The writer explains that late bedtimes are mostly biological and asks adults to stop calling teenagers lazy, which shows a <em>sympathetic</em>, understanding attitude. “Disapproving” describes the parents’ easy explanation that the writer rejects, and the writer clearly cares, so “indifferent” is wrong.' },

    { id:'m1-53', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'rd-purpose', level:'B2',
      stem:'What is the primary purpose of the article?',
      options:['To compare Thailand’s soft power with that of South Korea','To give a history of Thai restaurants in Europe and America','To persuade the government to spend more money on T-pop groups','To explain how Thai culture gains influence abroad and what limits that influence'], answer:3,
      why:'The article defines soft power, gives Thai examples (food, music, mascots), then discusses its limits in paragraph 6. K-pop is mentioned only because a Thai star belongs to a K-pop group; restaurants are one example, not a history; and the writer says soft power “cannot simply be ordered from above”, not that the government should spend more.' },
    { id:'m1-54', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'rd-notexcept', level:'B2',
      stem:'Which of the following is NOT given in paragraph 6 as a limit of soft power?',
      options:['Online attention tends to fade quickly.','Viral fame is too expensive to keep up.','A country may be reduced to a few stereotypes.','Government-managed culture may feel like advertising.'], answer:1,
      why:'Paragraph 6 lists three limits: attention is “short-lived”, managed culture can “feel like an advertisement”, and there is “a risk of stereotype”. Cost is never mentioned, so this is the answer.' },
    { id:'m1-55', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'vc-adjs', level:'B2+',
      stem:'The word “ubiquitous” in paragraph 3 is closest in meaning to ______.',
      options:['admired','widespread','affordable','traditional'], answer:1,
      why:'The dishes appear “on menus from London to Los Angeles”, so they are found almost everywhere: <em>widespread</em>. “Admired” is the near-miss because people do like Thai food, but the context clue is about <em>where</em> the food is found, not how people feel about it.' },
    { id:'m1-56', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'rd-reference', level:'B2',
      stem:'In paragraph 6, the word “it” in “it can start to feel like an advertisement” refers to ______.',
      options:['culture','attention','social media','a viral video'], answer:0,
      why:'Read the whole clause: “when governments try too hard to ‘manage’ culture, <em>it</em> can start to feel like an advertisement.” The nearest singular noun that governments manage is <em>culture</em>. “A viral video” and “attention” come from the previous sentence and are not what governments are managing.' },
    { id:'m1-57', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'vc-closest', level:'B2',
      stem:'The word “authentic” in paragraph 5 is closest in meaning to ______.',
      options:['genuine','popular','official','adorable'], answer:0,
      why:'The mascots succeed “because nobody designed them as national symbols”, so they feel real and natural: <em>genuine</em>. “Official” is almost the opposite, and although the characters are popular and cute, those words do not explain the contrast with being “designed”.' },
    { id:'m1-58', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'rd-mention', level:'B2+',
      stem:'Why does the writer mention Moo Deng in paragraph 5?',
      options:['To warn that viral fame can harm animals’ welfare','To argue that zoos are Thailand’s top tourist attractions','To prove that the government’s “five Fs” policy has been a big success','To show that soft power can come from unplanned, unexpected sources'], answer:3,
      why:'Paragraph 5 opens with “the most unexpected soft-power stars” and ends by saying these characters succeed “because nobody designed them as national symbols”. Moo Deng illustrates unplanned soft power. Animal welfare is not discussed, zoo rankings are not given, and a hippo is not part of a government plan.' },
    { id:'m1-59', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'rd-org', level:'C1',
      stem:'Which best describes the organisation of the article?',
      options:['A problem, followed by three solutions and a recommendation','A chronological history of Thai culture from past to present','An opening example, a definition, further examples, limits and a conclusion','A comparison of Thailand with South Korea, followed by the writer’s own personal story'], answer:2,
      why:'The article opens with the mango sticky rice story (1), defines soft power (2), gives examples of food, music and mascots (3–5), discusses limits (6) and ends with a lesson (7). It is not ordered by date, it does not propose solutions to a problem, and it never compares Thailand with South Korea or tells a personal story.' },
    { id:'m1-60', type:'read', passage:M1_ART2, source:M1_ART2_SRC, tag:'rd-tone', level:'B2+',
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
      why:'Here “act” means “do things”, so the blank describes <em>how</em> attackers do them and needs an adverb: <em>anonymously</em>. “Act + adjective” means “behave as if you are” (act normal, act surprised), which is not the meaning here, and “anonymity” and “anonymousness” are nouns.' },
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
      why:'After a preposition (“about”), a wh-question becomes an embedded question with normal statement word order: <em>how you feel</em>. “How do you feel” and “how are you feeling” keep question word order, and “how is your feeling” is a common learner error: English says “how you feel”, and the option also keeps question word order.' },
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
    { id:'m1-73', type:'cloze', passage:M1_TC3, blank:'(73)', tag:'vm-pattern', level:'B2',
      stem:'Choose the best option for blank (73).',
      options:['let','allow','prevent','encourage'], answer:2,
      why:'The blank is followed by <em>users from opening</em>, and only <em>prevent</em> takes the pattern verb + object + <em>from</em> + -ing. “Allow” and “encourage” take <em>to</em> + verb (allow users to open), and “let” takes a bare verb (let users open), so each is correct English elsewhere but not before “from”.' },
    { id:'m1-74', type:'cloze', passage:M1_TC3, blank:'(74)', tag:'vc-phrasal', level:'B2',
      stem:'Choose the best option for blank (74).',
      options:['putting off','taking after','turning down','looking after'], answer:0,
      why:'<em>Put off</em> means to delay, and “until the night before” shows a delay, which is exactly what procrastination is. “Turning down” means refusing, which cannot last “until the night before”; “taking after” means resembling a parent, and “looking after” means caring for someone.' },
    { id:'m1-75', type:'cloze', passage:M1_TC3, blank:'(75)', tag:'lk-cause', level:'B2+',
      stem:'Choose the best option for blank (75).',
      options:['so','since','unless','although'], answer:1,
      why:'The second clause gives the reason why self-forgiveness helps: guilt makes the next task feel heavier. <em>Since</em> here means “because”. “So” would turn guilt into a result of being less likely to procrastinate, “although” needs a contrast that is not there, and “unless” makes a condition that does not make sense.' }
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
      options:['A-B-C-D','A-B-D-C','A-C-B-D','A-C-D-B'], answer:2,
      why:'Every option opens with A, the definition, so the item tests the chain after it. C gives the example (“For example, a student…”), B continues it with “She” and “this small act”, which need the student in C, and D gives the long-term result (“Over time, such behaviour…”). Any order that puts B before C leaves “She” with nobody to refer to, and A-C-D-B separates B from the student it describes.' },
    { id:'m1-78', type:'choose', tag:'po-signal', level:'B2+',
      stem:'<div class="orderblock"><p>A. The most dangerous type is disinformation: false content created deliberately to deceive people, such as AI-generated videos of events that never happened.</p><p>B. The least harmful type is satire, which uses exaggeration for humour and is not meant to be believed, although some readers still take it seriously.</p><p>C. One simple way to classify false information online is to divide it into three types, according to how much harm it can cause.</p><p>D. A more serious type is misinformation: false content shared by people who genuinely believe it is true.</p></div>',
      options:['C-B-D-A','B-D-A-C','C-A-D-B','B-C-D-A'], answer:0,
      why:'C introduces the classification (“three types”), so it opens; B and D cannot, because “The least harmful type” and “A more serious type” need the list C announces. The signal words then climb in importance: <em>The least harmful</em> (B) → <em>A more serious</em> (D) → <em>The most dangerous</em> (A). C-A-D-B reverses the scale, but “A more serious type” must come after a less serious one.' },
    { id:'m1-79', type:'choose', tag:'po-compare', level:'B2',
      stem:'<div class="orderblock"><p>A. In the end, many readers choose screens for convenience and paper for deep, careful study.</p><p>B. E-books are light, cheap and instantly available, allowing a student to carry an entire library on a single phone.</p><p>C. Printed books, on the other hand, give readers a physical sense of where they are in a text, which may help them remember what they read.</p><p>D. Digital and printed books each offer readers clear but different advantages.</p></div>',
      options:['B-C-A-D','B-D-C-A','D-B-C-A','D-C-B-A'], answer:2,
      why:'D states the comparison and opens. B presents the first side (e-books), C presents the second side with <em>on the other hand</em>, which needs a first side before it, and A concludes with <em>In the end</em>. D-C-B-A fails because “on the other hand” cannot come before the first side has been given.' },
    { id:'m1-80', type:'choose', tag:'po-ref', level:'B2+',
      stem:'<div class="orderblock"><p>A. Fast-food chains exploit these associations by decorating their restaurants in red and yellow, colours linked with energy and speed.</p><p>B. The colours around us can quietly change how hungry we feel and how much we eat.</p><p>C. This effect works partly through association: over time, the brain learns to link certain colours with certain foods and moods.</p><p>D. Blue, by contrast, is seldom used in such restaurants: it is uncommon in natural foods and may even make a meal look less appealing.</p></div>',
      options:['B-C-D-A','C-B-A-D','B-C-A-D','C-B-D-A'], answer:2,
      why:'B is the general claim and opens; C cannot, because “This effect” needs B before it. C then explains the mechanism (association). A follows with “these associations”, which points back to C, and D closes with “Blue, by contrast” and “such restaurants”, which need the red-and-yellow fast-food restaurants in A. B-C-D-A fails because “such restaurants” would come before any restaurant is mentioned.' }
  ]},

  /* ------------------------------------- T Triage extras (not scored) */
  { code:'T', part:'TRIAGE EXTRAS (NOT SCORED)', title:'Checklist extras (Items 81–100)',
    instructions:'These 20 questions are not part of your score. They test the points the real paper uses most often, so your checklist is built on more evidence. Choose the best answers.', points:0, budget:10, items:[
    { id:'m1-81', type:'gap', lines:M1_X1, blank:'(81)', tag:'cv-complain', level:'B1+',
      stem:'Choose the best option for blank (81).',
      options:['it’s working perfectly now.','I’d like to buy a phone case.','could you tell me when you close on Fridays?','the new screen has already stopped working properly.'], answer:3,
      why:'The assistant answers “Oh dear. May I have a look?” and finds that the touch screen “isn’t responding”, so the customer has come to complain about the repair. “It’s working perfectly now” contradicts “Oh dear”, and buying a case or asking about opening hours would not lead the assistant to inspect the screen.' },
    { id:'m1-82', type:'gap', lines:M1_X1, blank:'(82)', tag:'cv-complain', level:'B2',
      stem:'Choose the best option for blank (82).',
      options:['Don’t worry, it happens to everyone.','Thanks anyway, I’ll just buy a new phone.','Could you recommend a good screen protector?','I paid good money for this repair, and it’s only been three days.'], answer:3,
      why:'The next line is the clue: “You’re right to be annoyed.” Only a complaint fits. A customer would not comfort the shop (“Don’t worry”), “Thanks anyway” closes the conversation instead of complaining, and a question about screen protectors shows no annoyance.' },
    { id:'m1-83', type:'gap', lines:M1_X1, blank:'(83)', tag:'dm-frame', level:'B2',
      stem:'Choose the best option for blank (83).',
      options:['If so','So that','Now that','Rather than'], answer:2,
      why:'<em>Now that</em> means “because this is now true”: because the assistant has now looked properly, she can explain the fault. “If so” needs a condition to point back to, “So that” introduces a purpose, and “Rather than” compares two choices; none of them can introduce “I’ve had a proper look”.' },
    { id:'m1-84', type:'gap', lines:M1_X1, blank:'(84)', tag:'id-situation', level:'B2+',
      stem:'Choose the best option for blank (84).',
      options:['Let’s call it a day.','Let me put it right.','Let’s play it by ear.','Let’s agree to disagree.'], answer:1,
      why:'The assistant then explains exactly how she will fix the problem, so the blank promises a solution: <em>put it right</em> means “correct a mistake”. “Call it a day” means stop working, “play it by ear” means decide later without a plan (but she has a clear plan), and “agree to disagree” ends an argument nobody is having.' },
    { id:'m1-85', type:'gap', lines:M1_X2, blank:'(85)', tag:'cv-react', level:'B1+',
      stem:'Choose the best option for blank (85).',
      options:['Same to you!','What a shame!','That’s fantastic news!','Never mind, there’s always next year.'], answer:2,
      why:'Bow has just been accepted, which is good news, and Ice adds that she thought Bow “had given up hope”. Only a congratulation fits. “What a shame” and “Never mind…” react to bad news, and “Same to you” answers good wishes.' },
    { id:'m1-86', type:'gap', lines:M1_X2, blank:'(86)', tag:'id-situation', level:'B2',
      stem:'Choose the best option for blank (86).',
      options:['in the red','on the ball','out of the blue','under the weather'], answer:2,
      why:'Bow says she had nearly given up and the email arrived during lunch: it came unexpectedly, <em>out of the blue</em>. “In the red” means owing money, “on the ball” means alert and quick, and “under the weather” means slightly ill, none of which can describe an email arriving.' },
    { id:'m1-87', type:'gap', lines:M1_X2, blank:'(87)', tag:'id-situation', level:'B2',
      stem:'Choose the best option for blank (87).',
      options:['wait and see','hit the books','break the ice','face the music'], answer:0,
      why:'Bow cannot book until “I know the dates”, so she will not decide now: <em>wait and see</em>. “Hit the books” means study hard, “break the ice” means start a friendly conversation, and “face the music” means accept punishment for something; none of them explains why she has not booked yet.' },
    { id:'m1-88', type:'gap', lines:M1_X2, blank:'(88)', tag:'dm-frame', level:'B2',
      stem:'Choose the best option for blank (88).',
      options:['Even so,','In short,','By the way,','As a result,'], answer:2,
      why:'Ice moves from Bow’s plans to a new request about herself, so she needs a marker that opens a new topic: <em>By the way</em>. “In short” summarises, “Even so” introduces a contrast, and “As a result” gives a consequence, but the request is not caused by Bow waiting for the timetable.' },
    { id:'m1-89', type:'cloze', passage:M1_X3, blank:'(89)', tag:'vp-passive', level:'B2',
      stem:'Choose the best option for blank (89).',
      options:['arrange','arranged','are arranged','have arranged'], answer:2,
      why:'The letters do not arrange anything; somebody arranges them, so the verb must be passive: <em>are arranged</em>. “Arrange” and “have arranged” are active and would need an object, and “arranged” alone reads as an active past tense with the letters as the doers.' },
    { id:'m1-90', type:'cloze', passage:M1_X3, blank:'(90)', tag:'lk-contrast', level:'B2',
      stem:'Choose the best option for blank (90).',
      options:['so','unless','because','although'], answer:3,
      why:'The two clauses contrast a gain (fewer jams) with a missing benefit (no faster typing), so the blank needs a concession linker: <em>although</em>. “Because” and “so” would make one clause the cause of the other, and “unless” makes a condition that does not fit.' },
    { id:'m1-91', type:'cloze', passage:M1_X3, blank:'(91)', tag:'lk-contrast', level:'B2+',
      stem:'Choose the best option for blank (91).',
      options:['Despite','Although','Because of','In addition to'], answer:0,
      why:'A noun phrase follows (“these alternatives”), and QWERTY survived even though alternatives exist, so we need a concession word that takes a noun: <em>Despite</em>. “Although” needs a full clause, “Because of” gives the wrong logic (the alternatives did not help QWERTY survive), and “In addition to” adds rather than contrasts.' },
    { id:'m1-92', type:'cloze', passage:M1_X3, blank:'(92)', tag:'wf-pos', level:'B2',
      stem:'Choose the best option for blank (92).',
      options:['extreme','extremely','extremity','extremeness'], answer:1,
      why:'The blank modifies the adjective “expensive”, and only an adverb can do that: <em>extremely expensive</em>. “Extreme” is an adjective (it would need a noun), and “extremity” and “extremeness” are nouns.' },
    { id:'m1-93', type:'cloze', passage:M1_X4, blank:'(93)', tag:'wf-pos', level:'B2',
      stem:'Choose the best option for blank (93).',
      options:['remark','remarked','remarkable','remarkably'], answer:3,
      why:'The blank sits between “are” and the adjective “common”, so it must modify an adjective: the adverb <em>remarkably</em>. “Remarkable” is an adjective and cannot describe another adjective, “remark” is a noun or verb, and “remarked” is a past-tense verb.' },
    { id:'m1-94', type:'cloze', passage:M1_X4, blank:'(94)', tag:'rc-reduced', level:'B2+',
      stem:'Choose the best option for blank (94).',
      options:['marked','marking','are marked','which marked'], answer:0,
      why:'The sentence already has its main verb (“Earworms are …”), so the blank cannot hold a second finite verb such as “are marked”. The sections are marked by a melody, so we need the past participle in a reduced relative clause: (sections) <em>marked</em> by … . “Marking” and “which marked” are active, as if the sections did the marking.' },
    { id:'m1-95', type:'cloze', passage:M1_X4, blank:'(95)', tag:'vp-passive', level:'B2',
      stem:'Choose the best option for blank (95).',
      options:['interrupt','be interrupted','be interrupting','have interrupted'], answer:1,
      why:'Earworms do not interrupt something here; something (chewing gum) interrupts them, so the modal needs a passive infinitive: can <em>be interrupted</em>. “Interrupt”, “be interrupting” and “have interrupted” are active: they would make the earworms do the interrupting, which is not “good news”.' },
    { id:'m1-96', type:'cloze', passage:M1_X4, blank:'(96)', tag:'vc-prep', level:'B2',
      stem:'Choose the best option for blank (96).',
      options:['at','for','over','with'], answer:3,
      why:'The fixed pattern is <em>interfere with</em> something (get in its way). “Interfere in” exists for people’s affairs, but “interfere at/for/over” are not used with this meaning.' },
    { id:'m1-97', type:'cloze', passage:M1_X5, blank:'(97)', tag:'vc-prep', level:'B2',
      stem:'Choose the best option for blank (97).',
      options:['among','beyond','across','between'], answer:3,
      why:'The diaphragm separates two named things, the chest and the stomach, so the preposition is <em>between</em>. “Among” is used for three or more, and “across” and “beyond” do not mean separating two things.' },
    { id:'m1-98', type:'cloze', passage:M1_X5, blank:'(98)', tag:'wf-family', level:'B2',
      stem:'Choose the best option for blank (98).',
      options:['harm','harmless','harmlessly','harmlessness'], answer:1,
      why:'After the linking verb “are”, the blank needs an adjective that describes “cases”: <em>harmless</em>. “Harm” and “harmlessness” are nouns, and “harmlessly” is an adverb, which cannot follow “are” on its own.' },
    { id:'m1-99', type:'cloze', passage:M1_X5, blank:'(99)', tag:'lk-add', level:'B2',
      stem:'Choose the best option for blank (99).',
      options:['such as','as well as','in addition','rather than'], answer:1,
      why:'The sentence adds a third cure to the list, so we need an adding expression that can be followed by an -ing form: <em>as well as</em> being given a fright. “Rather than” would reject the fright as a cure, “such as” introduces examples of something just named (not an extra item at the end of a list), and “in addition” would need “to”.' },
    { id:'m1-100', type:'cloze', passage:M1_X5, blank:'(100)', tag:'vc-colloc', level:'B2+',
      stem:'Choose the best option for blank (100).',
      options:['put','done','made','taken'], answer:0,
      why:'The fixed expression is <em>put something to the test</em> (test it properly). We do not say “do/make/take something to a test”, so only “put” completes the collocation after “have rarely”.' }
  ]}
  ]
});
