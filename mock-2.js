/* ===========================================================================
   TCAS70 LAUNCHPAD — MOCK 2 · CHECKPOINT  (m2)
   Pitched at TCAS69 level. Shared texts defined once below.
   =========================================================================== */

var M2_C1 = [
  { who:'Situation', text:'At a pharmacy' },
  { who:'Nan', text:'Excuse me. Since we got back from my aunt’s farm, my eyes have been itchy and I can’t stop sneezing. ___(1)___' },
  { who:'Pharmacist', text:'It sounds like hay fever — an allergy to pollen or dust. Do you have a fever or a sore throat as well?' },
  { who:'Nan', text:'No, just the sneezing and a runny nose.' },
  { who:'Pharmacist', text:'Then an antihistamine should help. This one works well, but it can make you drowsy. ___(2)___' },
  { who:'Nan', text:'Oh no. I have a mock exam tomorrow morning. I can’t afford to fall asleep in the middle of the reading section!' },
  { who:'Pharmacist', text:'___(3)___ This newer tablet is non-drowsy for most people. Take one a day, and don’t take it together with any other allergy medicine.' },
  { who:'Nan', text:'Perfect. Oh, and is it OK to drink coffee with it? I usually have three cups before an exam.' },
  { who:'Pharmacist', text:'Coffee won’t affect the tablet, but three cups might make your hands shake more than the exam does. ___(4)___' },
  { who:'Nan', text:'Fair enough. One cup and a good night’s sleep, then.' }
];

var M2_C2 = [
  { who:'Situation', text:'Two classmates preparing for a debate' },
  { who:'Fah', text:'OK, the motion is “This House would ban phones in schools,” and we’re the opposition. ___(5)___' },
  { who:'Pun', text:'Easy. Phones are useful. Done!' },
  { who:'Fah', text:'That’s a slogan, Pun, not an argument. We need evidence — for example, some teachers use phones for quizzes and research in class.' },
  { who:'Pun', text:'Fine. ___(6)___ they can be a real distraction. Last week I saw three people scrolling through TikTok during chemistry.' },
  { who:'Fah', text:'I’m not saying phones are never a problem. ___(7)___ What matters is how they’re used, not the device itself. Clear classroom rules would work better.' },
  { who:'Pun', text:'So we argue for rules, not a ban. I actually see eye to eye with you on that.' },
  { who:'Fah', text:'Great. Now go and write your three-minute speech.' },
  { who:'Pun', text:'Write it? I thought I’d just stand up and ___(8)___.' },
  { who:'Fah', text:'Absolutely not. The last time you improvised, you spent two minutes talking about your cat.' }
];

var M2_C3 = [
  { who:'Situation', text:'A delivery rider calls a customer' },
  { who:'Rider', text:'Hello, this is your FoodFly rider. I’m in the lobby of Tower A, but the security guard says there’s no Room 1204 in this building.' },
  { who:'Ploy', text:'Oh, ___(9)___ I forgot to put the tower in the address. I’m in Tower B, behind the swimming pool.' },
  { who:'Rider', text:'No problem. I’ll be there in two minutes.' },
  { who:'Ploy', text:'(Two minutes later) Thanks for coming round. Hmm, wait — ___(10)___ I ordered green curry, but this is a pepperoni pizza.' },
  { who:'Rider', text:'I’m terribly sorry. The restaurant must have given me the wrong bag. ___(11)___' },
  { who:'Ploy', text:'That’s kind of you, but I’m allergic to cheese, so I couldn’t eat it anyway.' },
  { who:'Rider', text:'I completely understand. I’ll report it in the app so you get a full refund, and then I’ll go back and collect your curry myself.' },
  { who:'Ploy', text:'___(12)___ That’s really going above and beyond.' },
  { who:'Rider', text:'It’s my job. See you in twenty minutes!' }
];

var M2_LONG = [
  { who:'Situation', text:'A beginners’ Thai cooking class' },
  { who:'Chef Arun', text:'Good morning, everyone, and welcome to “Thai Cooking in Sixty Minutes.” I know most of you skipped breakfast for this, so ___(13)___ let’s get started. Today’s dish is pad kra pao — chicken stir-fried with holy basil.' },
  { who:'Bow', text:'Chef, before we start, is it true you once cooked for a famous football team? I read online that you…' },
  { who:'Chef Arun', text:'That’s a story for another day, Bow. Let’s ___(14)___ — the oil is already heating up.' },
  { who:'Bow', text:'Sorry, Chef.' },
  { who:'Chef Arun', text:'Right. ___(15)___ the pan is hot, add the garlic and the chillies. Just a few chillies, please.' },
  { who:'Bow', text:'Done! Twelve chillies.' },
  { who:'Chef Arun', text:'Twelve?! That’s not a few; that’s a volcano. And ___(16)___ you’ve just poured in sugar instead of fish sauce!' },
  { who:'Bow', text:'But Chef, ___(17)___ cooking is all about balance, isn’t it? Sweet, salty, spicy…' },
  { who:'Chef Arun', text:'Balance, yes. Chaos, no. Now add the holy basil. Bow, where’s yours?' },
  { who:'Bow', text:'You told us to “go easy on the basil,” so I didn’t bring any.' },
  { who:'Chef Arun', text:'___(18)___ “Go easy” means “use a little,” not “use none”! The basil is the whole point of the dish.' },
  { who:'Bow', text:'Oh. In other words, I should have brought some. Sorry, Chef. May I step out for a few minutes?' },
  { who:'Chef Arun', text:'(Fifteen minutes later, Bow returns with a steaming plate. Chef Arun tastes it.) Bow… this is perfect. The heat is just right, the basil is fresh, and there’s even a crispy fried egg on top — plus a plastic spoon. How did you fix it so fast? ___(19)___' },
  { who:'Bow', text:'___(20)___' }
];

var M2_AD1 = { brand:'ZipGo e-Scooters', headline:'Skip the traffic. Ride the city.',
  body:['Stuck in Sukhumvit traffic again? Unlock a ZipGo e-scooter with one tap and glide past the queue. With more than 2,000 scooters parked near 40 BTS and MRT stations, there’s always one waiting around the corner.',
        'Join 150,000 Bangkok riders who have already made the switch.'],
  bullets:['Unlock fee ฿10 + ฿3 per minute','Helmet in every basket — wearing it is required on every ride','Park only in the green zones shown on the app map; rides ending outside a green zone are charged a ฿200 fine','Riders must be 18+ with a valid driving licence'],
  price:'New riders: the first 20 minutes of your first ride are FREE with code ZIPFIRST (unlock fee still applies)',
  cta:'Download ZipGo today from the App Store or Google Play',
  fine:'Maximum speed 25 km/h. Scooters are not permitted on footbridges or in public parks.',
  source:'Adapted for TCAS70 practice' };

var M2_AD2 = { brand:'IronLeaf Fitness', headline:'Your summer. Your strongest self.',
  body:['Exams are over — now it’s time to move. The IronLeaf Student Summer Pass gives you unlimited gym access at all 12 of our Bangkok branches from 1 March to 31 May.',
        'Train between tutoring sessions, meet friends at our group classes, and start the new term fitter than ever.'],
  bullets:['Unlimited gym-floor access, 6 a.m.–10 p.m.','Two free group classes a week (yoga, spinning or boxing)','Free locker and towel service','A body-composition scan at the start and end of your pass'],
  price:'฿2,490 for three months — less than ฿28 a day',
  cta:'Sign up at any IronLeaf branch with your student ID',
  fine:'For full-time students aged 15–24 only. Personal training sessions and the swimming pool are not included. Under-18s need a parent’s signature. The pass cannot be transferred or frozen.',
  source:'Adapted for TCAS70 practice' };

var M2_REVIEW = 'Review: Baan Lanna Loft, a boutique hostel in Chiang Mai\n\n' +
'(1) I spent four nights at Baan Lanna Loft during the Loy Krathong festival last November, and it has quickly become my favorite place to stay in northern Thailand. Housed in a restored teak house just inside the Old City walls, the hostel feels more like a design hotel than a budget stay, yet a bed in a four-person dorm costs only ฿450 a night.\n\n' +
'(2) The first thing I noticed was how spotless everything was. The shared bathrooms were cleaned three times a day, and each bunk had its own curtain, reading light and charging socket. A complimentary breakfast of rice soup, fresh mango and strong local coffee was served on a leafy terrace until 10:30, which is generous for a hostel.\n\n' +
'(3) The staff deserve special mention. When I lost my phone charger on the first night, the receptionist lent me her own without a second thought, and the next morning she drew me a map of the best khao soi stalls nearby. The hostel also offers free bicycles, a small library of travel guides, and a weekly Thai cooking class for ฿300.\n\n' +
'(4) That said, Baan Lanna Loft is not perfect. The rooftop bar is open until midnight, and on Fridays and Saturdays the music could be heard clearly from the second-floor dorms. The earplugs provided at reception helped, but light sleepers should ask for a room on the ground floor.\n\n' +
'(5) The other drawback is the building itself. Because it is a traditional house, there is no lift, and the staircase to the third floor is steep and narrow. I watched two guests struggle to carry large suitcases up it, and the staff were not always free to help.\n\n' +
'(6) Overall, these are minor issues compared with everything the hostel gets right. For backpackers who value character, cleanliness and friendly service, Baan Lanna Loft is excellent value, and I have already booked again for next year’s Yi Peng.';

var M2_NEWS = '(1) Australia’s under-16 social media ban: millions of accounts gone, but most teens still online\n\n' +
'(2) By Nattaya Srisuk, The Bangkok Chronicle\n\n' +
'(3) When Australia’s ban on social media for children under 16 took effect in December 2025, supporters hailed it as a turning point for a generation raised on screens. Almost a year later, the picture is more complicated.\n\n' +
'(4) By January 2026, about 4.7 million accounts had been removed, a figure that supporters of the law pointed to as proof that the law had teeth.\n\n' +
'(5) But a report released in 2026 by the country’s online safety regulator found that more than 80 percent of under-16s were still using social media three months after the ban began.\n\n' +
'(6) So how are so many young people slipping through? Here are some of the questions being asked.\n\n' +
'(7) Parents say many teenagers simply opened new accounts with false birthdays or borrowed an older sibling’s login. “My 14-year-old had a new account within an afternoon,” said a Sydney mother of two. “The ban lasted about as long as her homework does.”\n\n' +
'(8) Others argue that removing every account was never the realistic goal. “No one expected the number to fall to zero overnight,” said Dr Helen Marsh, a digital-wellbeing researcher at Harbourside University. “Laws like this change what is considered normal. Seatbelt rules were not obeyed by everyone at first, either.”\n\n' +
'(9) Critics, however, worry that the ban pushes children into less visible corners of the internet. “When teens hide what they are doing online, they are also less likely to ask an adult for help,” said a school counselor in Melbourne who asked not to be named.\n\n' +
'(10) Despite the mixed results, other governments have been watching closely, and several have decided to follow.\n\n' +
'(11) France’s ban for under-15s took effect on 1 September 2026, and Malaysia has introduced its own limit for under-16s this year.\n\n' +
'(12) Denmark has also chosen an age limit of 15, while Greece will ban under-15s from social media from January 2027.\n\n' +
'(13) The United Kingdom plans to introduce a ban for under-16s in spring 2027.\n\n' +
'(14) For many Australian families, the debate has moved on from whether the ban works to how it can be made to work. “It’s not perfect,” said the Sydney mother. “But it gives me something to point to when I say no.”';

var M2_VIS1 = { kind:'bar', title:'Share of electricity from renewable sources in five ASEAN countries, 2020 vs 2025', unit:'%',
  labels:['Thailand','Vietnam','Malaysia','Indonesia','Philippines'],
  series:[ { name:'2020', values:[12,36,18,16,22] }, { name:'2025', values:[21,41,26,19,20] } ],
  note:'Illustrative data for practice', source:'Adapted for TCAS70 practice' };

var M2_VIS2 = { kind:'pie', title:'How Thai university students mainly use AI tools (survey of 1,200 students)', unit:'%',
  slices:[ { label:'Summarizing readings and lecture notes', value:31 }, { label:'Brainstorming ideas for assignments', value:22 },
           { label:'Checking grammar and translating', value:18 }, { label:'Writing whole assignments', value:12 },
           { label:'Coding and data analysis', value:9 }, { label:'Personal advice and conversation', value:8 } ],
  note:'Of the students who mainly use AI for checking grammar and translating (18% of the whole sample), 11% are female and 7% are male. Illustrative data for practice.',
  source:'Adapted for TCAS70 practice' };

var M2_ART1 = 'El Niño explained: why early 2027 may be hot and dry\n\n' +
'(1) It may seem strange to worry about drought only weeks after floods affected all 50 of Bangkok’s districts. Yet forecasters are warning that the coming months could bring the opposite problem. A strong El Niño — some scientists have even called it a potential “super” El Niño — is expected to develop in the Pacific Ocean, and for Thailand that usually means a hotter, drier start to 2027.\n\n' +
'(2) El Niño is a natural climate pattern centered on the tropical Pacific. In a normal year, steady trade winds blow from east to west along the equator, pushing warm surface water toward Indonesia and northern Australia. This warm pool heats the air above it, which rises, cools and falls as heavy rain over Southeast Asia. Meanwhile, colder water wells up from the deep ocean off the coast of South America.\n\n' +
'(3) Every two to seven years, however, this system falters. The trade winds weaken, and in some cases even reverse, allowing the warm water to drift eastward across the Pacific. The rain clouds follow it. As a result, countries on the western side of the ocean, including Thailand, receive less rain than usual, while parts of South America can be hit by floods. An El Niño typically lasts nine to twelve months and usually peaks around the end of the calendar year, which is why its effects on Thailand tend to be felt most keenly during the following dry season.\n\n' +
'(4) For farmers, the consequences can be severe. Most Thai rice is grown in the rainy season, but many farmers in the Central Plains also plant a second, off-season crop that depends on water released from large reservoirs. In a strong El Niño year, those reservoirs may not be refilled, and authorities often ask farmers to delay or skip the second crop. Those who ignore the advice risk watching their fields dry out before harvest. Some agricultural experts urge farmers to switch to crops that need far less water, such as maize or beans, until conditions improve.\n\n' +
'(5) El Niño can also exacerbate air pollution. PM2.5 — particles small enough to enter the lungs and even the bloodstream — is already a serious problem in the dry season, when smoke from crop burning and forest fires builds up in still air. Rain normally helps to wash these particles out of the atmosphere; with less of it, the haze lingers longer. A hotter, drier landscape also makes fires easier to start and harder to control.\n\n' +
'(6) None of this is set in stone. Forecasts of an El Niño’s strength become more reliable only as it develops, and no two events affect Thailand in exactly the same way. Other factors, such as conditions in the Indian Ocean, also shape rainfall in the region. Climate scientists add that El Niño now arrives on top of long-term global warming, so each event pushes temperatures into record territory more easily than it did a generation ago.\n\n' +
'(7) What, then, can be done? Water managers can start by storing as much of this year’s heavy rain as possible rather than releasing it to protect against further flooding — a difficult balancing act. Households can cut waste, and cities can check that emergency water supplies are ready. At the end of the day, El Niño cannot be stopped, but its impact can be mitigated. The flood season has barely ended; the smart move is to prepare for the dry season now.';

var M2_ART2 = 'Upskill or reskill? Work in the age of AI\n\n' +
'(1) Ask a room of adults what worries them about artificial intelligence, and one question comes up again and again: “Will a machine take my job?” The honest answer is more nuanced than either the pessimists or the cheerleaders suggest. Some tasks will disappear, many will change, and entirely new ones will appear. For most workers, the real question is not whether to learn but what to learn — and here two terms have become ubiquitous: upskilling and reskilling.\n\n' +
'(2) Upskilling means improving or extending the skills you already have so that you can do your current job better. An accountant who learns to use AI software to spot errors in thousands of invoices is upskilling: she is still an accountant, but a more efficient one. Reskilling, by contrast, means learning a substantially new set of skills in order to move into a different role. A factory worker whose job on the assembly line has been automated, and who retrains as a technician to maintain the robots, is reskilling.\n\n' +
'(3) The distinction matters because the two call for different kinds of support. Upskilling can often happen on the job, through short online courses or a few hours of training a month. Reskilling usually takes longer, costs more and carries more risk, since the learner is starting again in an unfamiliar field, often while still paying the bills. Employers are generally keen to fund the first; the second frequently falls to governments or to workers themselves.\n\n' +
'(4) Technical knowledge is only part of the story. As AI takes over routine tasks, employers increasingly prize the skills that machines struggle with: critical thinking, creativity, communication and the ability to collaborate with people from different backgrounds. These so-called soft skills are hard to automate precisely because they depend on judgment and empathy. A chatbot can draft a customer email in seconds; deciding whether that email will calm an angry client or make things worse still requires a human who understands people.\n\n' +
'(5) Nor is learning a one-off event. The half-life of technical skills — the time it takes for half of what you know to become outdated — is shrinking. A degree earned at 22 was once expected to last a whole career; today it is better seen as a foundation on which workers will keep building for decades. This is the idea behind lifelong learning, and it applies as much to a 50-year-old office manager as to a 17-year-old choosing a university course.\n\n' +
'(6) Critics warn against treating training as a magic cure. Not every worker has the time, money or confidence to retrain, and a certificate is worth little if there are no jobs at the end of it. Some economists argue that the burden should not fall on individuals alone: companies that profit from automation, they say, should share the cost of helping the staff it replaces to adapt.\n\n' +
'(7) So, upskill or reskill? For most people, the answer will be both, at different moments in their lives. The workers who thrive in the age of AI are unlikely to be those who know the most today, but rather those who are most willing to keep learning tomorrow. Having said that, willingness is not enough on its own: it must be matched by opportunities that are fair, affordable and open to everyone.';

var M2_P1 = 'A digital detox — a period in which a person deliberately stays away from phones, computers and social media — has become a common goal among students who feel overwhelmed by constant notifications. The idea is not new, but its ___(61)___ has grown sharply in recent years. The number of hours that the average teenager spends on screens each day ___(62)___ many schools to introduce “phone-free weeks.”\n\n' +
'___(63)___ such breaks produce lasting benefits is still debated. Some researchers find that a week offline improves sleep and mood; others report that participants simply return to their old habits once the week is over. What most experts agree on is that small, regular breaks may ___(64)___ a bigger role than dramatic ones. Practical tips include turning off non-essential notifications, keeping the phone out of the bedroom, and ___(65)___ the first scroll of the morning with a glass of water and a short walk.';

var M2_P2 = 'Few foods are as closely linked to student life as instant noodles, yet their origin story is surprisingly moving. In 1958, Momofuku Ando, ___(66)___ Osaka, introduced the world’s first instant noodles. After the Second World War, Ando had seen long lines of hungry people waiting for noodles at street stalls, and he became convinced that a meal that could be ___(67)___ at home in minutes would change lives. Working alone in a small shed behind his house, he experimented for a year before discovering that flash-frying cooked noodles in hot oil dried them and left tiny holes that let hot water back in.\n\n' +
'The invention was a breakthrough. ___(68)___ it was not an instant success: at first, a packet cost more than a bowl of fresh noodles from a stall. Today, however, instant noodles are sold in almost ___(69)___ country in the world. If Ando ___(70)___ up after his many failed experiments, millions of students might be eating something far less convenient at midnight before an exam.';

var M2_P3 = 'Everyone yawns, and so do cats, dogs, snakes and even fish. Scientists, however, still cannot fully explain ___(71)___. For many years, the most popular idea was that yawning brings extra oxygen into the body. This theory, ___(72)___ in textbooks for decades, has now been largely abandoned: when volunteers breathe air with extra oxygen, they yawn just as often.\n\n' +
'Researchers now argue that a yawn ___(73)___ tiredness; it may also help to cool the brain. The deep stretch of the jaw increases blood flow to the head, and the large breath of air cools that blood. People tend to yawn more often in mild temperatures, ___(74)___ yawning becomes less frequent when the air is either very hot or very cold. Perhaps strangest of all, yawns are contagious: simply reading about yawning can make some people ___(75)___.';

/* ------------------------------------------------ SECTION I, items 1–20 */
var M2_S1 = [
  { id:'m2-1', type:'gap', blank:'(1)', lines:M2_C1, tag:'cv-next', level:'B2',
    stem:'Choose the best option for blank (1).',
    options:['Any idea what’s causing it?','Where can I buy some tissues?','When does the pharmacy close tonight?','What do you recommend for a sore throat?'],
    answer:0,
    why:'The pharmacist replies, “It sounds like hay fever,” which names the <em>cause</em> of Nan’s symptoms, so Nan must have asked what is causing them. The sore-throat question is the trap: the pharmacist then asks whether Nan has a sore throat and she says no. The other two questions would be answered with a place or a time.' },

  { id:'m2-2', type:'gap', blank:'(2)', lines:M2_C1, tag:'cv-advice', level:'B2',
    stem:'Choose the best option for blank (2).',
    options:['It won’t affect your focus at all.','You’ll feel wide awake by the morning.','Its effects can last into the next day.','It usually starts working within about an hour.'],
    answer:2,
    why:'Nan’s reaction — “Oh no. I have a mock exam tomorrow morning” — shows that the pharmacist has just warned her the drowsiness may continue the next day. “It won’t affect your focus” and “You’ll feel wide awake by the morning” remove the problem, so she would have nothing to worry about. How fast the tablet works says nothing about tomorrow’s exam.' },

  { id:'m2-3', type:'gap', blank:'(3)', lines:M2_C1, tag:'cv-register', level:'B2+',
    stem:'Choose the best option for blank (3).',
    options:['Then take two tonight.','It’s only a mock, so relax.','Then let’s try a different one.','In that case, try to sleep earlier.'],
    answer:2,
    why:'The next sentence, “This newer tablet is non-drowsy,” shows the pharmacist is offering another medicine. “In that case, try to sleep earlier” starts with a suitable linker but never leads to a new tablet. “It’s only a mock, so relax” brushes off a customer’s real worry — the wrong tone for a pharmacist — and two tablets would make the drowsiness worse.' },

  { id:'m2-4', type:'gap', blank:'(4)', lines:M2_C1, tag:'cv-advice', level:'B2',
    stem:'Choose the best option for blank (4).',
    options:['I’d cut down, though.','Three should be just right.','Have all three before the tablet.','It will make the tablet work faster.'],
    answer:0,
    why:'Nan answers, “Fair enough. One cup … then,” so the pharmacist must have advised her to drink less coffee. “Three should be just right” approves of three cups, which gives Nan no reason to reduce to one. The last option contradicts “Coffee won’t affect the tablet.”' },

  { id:'m2-5', type:'gap', blank:'(5)', lines:M2_C2, tag:'cv-next', level:'B2',
    stem:'Choose the best option for blank (5).',
    options:['Who’s judging us?','What’s our main argument?','How many speakers do they have?','How long does each speech have to be?'],
    answer:1,
    why:'Pun answers with a claim for their side — “Phones are useful” — and Fah then says it is “a slogan, not an argument,” so she must have asked for their argument. Questions about judges, the number of speakers or speech length would be answered with a name, a number or a time.' },

  { id:'m2-6', type:'gap', blank:'(6)', lines:M2_C2, tag:'dm-contrast', level:'C1',
    stem:'Choose the best option for blank (6).',
    options:['What’s more,','To illustrate,','Having said that,','To put it another way,'],
    answer:2,
    why:'Pun first accepts Fah’s point (“Fine”) and then turns to the other side: phones “can be a real distraction.” <em>Having said that</em> introduces a contrasting point after a concession. <em>What’s more</em> would add another point in favor of phones, <em>To illustrate</em> needs an example of the same idea, and <em>To put it another way</em> would restate it.' },

  { id:'m2-7', type:'gap', blank:'(7)', lines:M2_C2, tag:'cv-agree', level:'B2+',
    stem:'Choose the best option for blank (7).',
    options:['So a ban is the only answer.','But a total ban goes too far.','But they’re rarely useful in class.','So we should agree with the other team.'],
    answer:1,
    why:'Fah concedes that phones can be a problem, then argues that “what matters is how they’re used, not the device itself” — a position against a complete ban. “But they’re rarely useful in class” begins with the right linker yet attacks her own side. The two “So…” options support the motion their team must oppose.' },

  { id:'m2-8', type:'gap', blank:'(8)', lines:M2_C2, tag:'id-situation', level:'C1',
    stem:'Choose the best option for blank (8).',
    options:['draw the line','get cold feet','play it by ear','go the extra mile'],
    answer:2,
    why:'Fah’s reply, “The last time you improvised,” shows that Pun planned to speak without preparing — the meaning of <em>play it by ear</em>. <em>Go the extra mile</em> means making more effort than necessary, the opposite of skipping the writing. <em>Draw the line</em> (set a limit) and <em>get cold feet</em> (lose courage) do not match “improvised.”' },

  { id:'m2-9', type:'gap', blank:'(9)', lines:M2_C3, tag:'cv-thanks', level:'B2',
    stem:'Choose the best option for blank (9).',
    options:['sorry, that’s my fault.','please wait there for me.','you’re at the right tower.','the guard must be new here.'],
    answer:0,
    why:'Ploy goes on to admit, “I forgot to put the tower in the address,” so she is apologizing for her own mistake, and the rider accepts it with “No problem.” Blaming the guard is the near-miss, but the guard was right: Room 1204 is in another tower. “You’re at the right tower” and “please wait there” contradict “I’m in Tower B.”' },

  { id:'m2-10', type:'gap', blank:'(10)', lines:M2_C3, tag:'cv-complain', level:'B2',
    stem:'Choose the best option for blank (10).',
    options:['this is still hot.','you forgot the chopsticks.','I think there’s been a mix-up.','you’re earlier than the app said.'],
    answer:2,
    why:'Ploy immediately explains the problem: she ordered green curry but received a pizza — a <em>mix-up</em>. “You forgot the chopsticks” is also a complaint, but not the one she goes on to describe. The other two options are not complaints at all.' },

  { id:'m2-11', type:'gap', blank:'(11)', lines:M2_C3, tag:'cv-request', level:'B2',
    stem:'Choose the best option for blank (11).',
    options:['Could you pay for it instead?','Would you like to keep the pizza?','Could you come down and fetch it?','Shall I leave it with the guard in Tower A?'],
    answer:1,
    why:'Ploy replies, “That’s kind of you, but I’m allergic to cheese, so I couldn’t eat it anyway,” so the rider must have offered her the pizza. Asking her to pay or to come down is not a kind offer, and leaving the food in Tower A makes no sense when the rider is already at her door.' },

  { id:'m2-12', type:'gap', blank:'(12)', lines:M2_C3, tag:'cv-react', level:'B2',
    stem:'Choose the best option for blank (12).',
    options:['Don’t mention it.','That’s so kind of you!','That’s the least you can do.','I’d rather just cancel the order.'],
    answer:1,
    why:'Ploy is reacting gratefully to the rider’s offer to fetch her curry himself, and she adds, “That’s really going above and beyond.” <em>Don’t mention it</em> is the reply to thanks, not thanks itself — the rider’s “It’s my job” is that reply. “That’s the least you can do” sounds ungrateful, and cancelling contradicts “See you in twenty minutes.”' },

  { id:'m2-13', type:'gap', blank:'(13)', lines:M2_LONG, tag:'dm-frame', level:'C1',
    stem:'Choose the best option for blank (13).',
    options:['By the way,','On the other hand,','Without further ado,','To put it another way,'],
    answer:2,
    why:'The chef is opening the class and wants to begin at once because everyone is hungry. <em>Without further ado</em> means “without any more delay” and is used just before starting something. <em>By the way</em> introduces a side topic, <em>On the other hand</em> needs a contrast, and <em>To put it another way</em> needs an earlier idea to restate.' },

  { id:'m2-14', type:'gap', blank:'(14)', lines:M2_LONG, tag:'dm-meta', level:'C1',
    stem:'Choose the best option for blank (14).',
    options:['call it a day','break the ice','stick to the point','go off on a tangent'],
    answer:2,
    why:'Bow has begun asking about the chef’s past, and he brings the class back to the lesson because the oil is heating up: <em>stick to the point</em> means “stay on the main topic.” <em>Go off on a tangent</em> is the opposite — wandering away from the topic, which is what Bow just did. <em>Call it a day</em> would end a class that has only just started.' },

  { id:'m2-15', type:'gap', blank:'(15)', lines:M2_LONG, tag:'dm-frame', level:'B2+',
    stem:'Choose the best option for blank (15).',
    options:['Unless','In case','Even if','Now that'],
    answer:3,
    why:'<em>Now that</em> means “because this is now true”: the pan is hot, so it is time to add the garlic. <em>In case</em> means “as a precaution,” <em>Unless</em> means “except if,” and <em>Even if</em> suggests the heat does not matter — none of them gives the reason for the next step.' },

  { id:'m2-16', type:'gap', blank:'(16)', lines:M2_LONG, tag:'dm-add', level:'C1',
    stem:'Choose the best option for blank (16).',
    options:['at any rate,','on the contrary,','as far as I know,','to make matters worse,'],
    answer:3,
    why:'The chef adds a second, even bigger problem to the twelve chillies: sugar instead of fish sauce. <em>To make matters worse</em> introduces something that makes a bad situation worse. <em>As far as I know</em> is a hedge, but the chef can see the sugar; <em>on the contrary</em> rejects a previous idea, and <em>at any rate</em> moves on from it.' },

  { id:'m2-17', type:'gap', blank:'(17)', lines:M2_LONG, tag:'dm-rephrase', level:'C1',
    stem:'Choose the best option for blank (17).',
    options:['by the way,','in that case,','out of the blue,','at the end of the day,'],
    answer:3,
    why:'Bow defends her mistakes with a bottom-line claim: cooking is “all about balance.” <em>At the end of the day</em> means “when everything is considered” and introduces exactly this kind of claim. <em>Out of the blue</em> means “unexpectedly,” <em>in that case</em> needs a condition, and <em>by the way</em> changes the subject.' },

  { id:'m2-18', type:'gap', blank:'(18)', lines:M2_LONG, tag:'cv-react', level:'B2+',
    stem:'Choose the best option for blank (18).',
    options:['Count me in!','Good for you!','You can’t be serious!','You can say that again!'],
    answer:2,
    why:'The chef is shocked that Bow brought no basil at all, and he goes on to correct her: “‘Go easy’ means ‘use a little,’ not ‘use none’!” <em>You can’t be serious!</em> expresses this disbelief. <em>You can say that again!</em> is also a reaction, but it means strong agreement; <em>Count me in!</em> and <em>Good for you!</em> accept or praise what she did.' },

  { id:'m2-19', type:'gap', blank:'(19)', lines:M2_LONG, tag:'id-reaction', level:'B2+',
    stem:'Choose the best option for blank (19).',
    options:['I’m all ears.','I’m up to my ears.','It’s all Greek to me.','Keep your fingers crossed.'],
    answer:0,
    why:'The chef has just asked how Bow fixed the dish and is eager to hear the answer: <em>I’m all ears</em> means “I’m listening carefully.” <em>I’m up to my ears</em> looks similar but means “I’m extremely busy.” <em>It’s all Greek to me</em> means “I don’t understand,” and <em>Keep your fingers crossed</em> is a wish for luck.' },

  { id:'m2-20', type:'gap', blank:'(20)', lines:M2_LONG, tag:'cv-twist', level:'C1',
    stem:'Choose the best option for blank (20).',
    options:['I added more sugar.','I just followed your recipe.','I went home to get my basil.','I didn’t. The shop downstairs did.'],
    answer:3,
    why:'The clues are Bow leaving for fifteen minutes and a dish that arrives with a fried egg on top and a plastic spoon — the signs of a takeaway meal. “I didn’t. The shop downstairs did” is the punchline. Fetching basil from home would not explain the perfect heat, the egg or the spoon, and her own cooking contained twelve chillies and sugar.' }
];

/* ------------------------------------------------ SECTION II, items 21–44 */
var M2_S2 = [
  { id:'m2-21', type:'read', passage:'', ad:M2_AD1, tag:'ad-technique', level:'B2+',
    stem:'The sentence “Join 150,000 Bangkok riders who have already made the switch” is an example of which advertising technique?',
    options:['Showing that it is popular','Creating a sense of urgency','Giving a logical reason to buy','Appealing to a desire for peace and quiet'],
    answer:0,
    why:'The line quotes a large number of existing riders so that readers feel they should join them — the “bandwagon” technique of showing that a product is popular. A number can look like a logical reason, but it says nothing about price, speed or safety. Nothing suggests the offer is ending soon or promises peace and quiet.' },

  { id:'m2-22', type:'read', passage:'', ad:M2_AD1, tag:'ad-detail', level:'B2+',
    stem:'A new rider uses the code ZIPFIRST for a 30-minute first ride. How much will she pay?',
    options:['฿30','฿40','฿90','฿100'],
    answer:1,
    why:'The code makes the first 20 minutes free, but “unlock fee still applies.” She pays ฿10 to unlock plus 10 paid minutes × ฿3 = ฿30, so ฿40 in total. ฿30 forgets the unlock fee, and ฿100 ignores the free minutes.' },

  { id:'m2-23', type:'read', passage:'', ad:M2_AD1, tag:'ad-fineprint', level:'B2+',
    stem:'According to the advertisement, a rider will be charged ฿200 if she ______.',
    options:['rides across a footbridge','parks outside a green zone','forgets to wear the helmet','tries to ride faster than 25 km/h'],
    answer:1,
    why:'Only one rule names a penalty: “rides ending outside a green zone are charged a ฿200 fine.” Helmets are required and footbridges are not permitted, but the ad does not say what happens to riders who break those rules. The 25 km/h figure is simply the scooter’s maximum speed.' },

  { id:'m2-24', type:'read', passage:'', ad:M2_AD2, tag:'ad-purpose', level:'B2',
    stem:'The Student Summer Pass is mainly aimed at ______.',
    options:['office workers who train after work','students with free time during the school break','students who want one-to-one coaching with a trainer','parents looking for classes for their young children'],
    answer:1,
    why:'The pass runs from 1 March to 31 May, starts with “Exams are over,” and is sold only to full-time students aged 15–24. Students wanting one-to-one coaching are the trap: “Personal training sessions … are not included.” Office workers and young children fall outside the eligibility rules.' },

  { id:'m2-25', type:'read', passage:'', ad:M2_AD2, tag:'ad-detail', level:'B2',
    stem:'Which of the following is NOT included in the Student Summer Pass?',
    options:['Use of the pool','A towel service','A body-composition scan','Two group classes a week'],
    answer:0,
    why:'The fine print states, “Personal training sessions and the swimming pool are not included.” The towel service, the body-composition scans and two free group classes a week are all listed as benefits.' },

  { id:'m2-26', type:'read', passage:'', ad:M2_AD2, tag:'ad-fineprint', level:'C1',
    stem:'Based on the conditions, which person could buy the pass and use it as planned?',
    options:['A 25-year-old full-time master’s student','A 16-year-old full-time student with her mother’s signature','A 19-year-old who wants to freeze her pass during an April trip','A 17-year-old who plans to share the pass with her older sister'],
    answer:1,
    why:'Under-18s may buy the pass if a parent signs, so the 16-year-old full-time student qualifies. The 25-year-old is above the 15–24 age limit, and the pass “cannot be transferred or frozen,” which rules out pausing it for a trip or sharing it with a sister.' },

  { id:'m2-27', type:'read', passage:M2_REVIEW, source:'Adapted for TCAS70 practice', tag:'rv-attitude', level:'B2+',
    stem:'What is the reviewer’s overall attitude toward Baan Lanna Loft?',
    options:['The reviewer is very positive about it despite noticing two drawbacks.','The reviewer thinks it suits only guests who can afford a design hotel.','The reviewer finds it good value but will not return because of the noise.','The reviewer is mostly disappointed because the staff were rarely available.'],
    answer:0,
    why:'The reviewer calls it “my favorite place to stay in northern Thailand,” describes the noise and the stairs as “minor issues,” and has “already booked again.” That rules out the option saying the reviewer will not return, and a ฿450 dorm bed shows it is not only for people who can afford a design hotel.' },

  { id:'m2-28', type:'read', passage:M2_REVIEW, source:'Adapted for TCAS70 practice', tag:'rd-support', level:'B2',
    stem:'Which detail best shows that the hostel’s staff are helpful?',
    options:['Breakfast is served until 10:30.','A receptionist lent her own charger.','Guests can borrow bicycles for free.','Each bunk has its own curtain and charging socket.'],
    answer:1,
    why:'Paragraph 3 opens with “The staff deserve special mention” and gives the example of the receptionist lending the reviewer her own charger. Breakfast times, free bicycles and bunk curtains are features of the hostel, not evidence of how the staff behave.' },

  { id:'m2-29', type:'read', passage:M2_REVIEW, source:'Adapted for TCAS70 practice', tag:'rv-evidence', level:'B2+',
    stem:'The reviewer mentions two guests carrying large suitcases in order to ______.',
    options:['show that the hostel is popular with tourists','illustrate a drawback caused by the old building','advise travelers to bring smaller bags to Chiang Mai','complain that the staff refused to carry any luggage'],
    answer:1,
    why:'Paragraph 5 explains that the traditional house has “no lift” and a “steep and narrow” staircase; the struggling guests are evidence of this drawback. The staff were “not always free to help,” which is not the same as refusing, and the reviewer gives no advice about luggage.' },

  { id:'m2-30', type:'read', passage:M2_REVIEW, source:'Adapted for TCAS70 practice', tag:'rv-infer', level:'B2+',
    stem:'Based on the review, which guest would be LEAST likely to enjoy a stay at Baan Lanna Loft?',
    options:['A backpacker traveling on a tight budget','A visitor who wants to explore the Old City by bike','A food lover who hopes to learn to cook Thai dishes','A light sleeper in a second-floor dorm at the weekend'],
    answer:3,
    why:'The rooftop music “could be heard clearly from the second-floor dorms” on Fridays and Saturdays, and the reviewer warns light sleepers to ask for the ground floor. Budget travelers, cyclists and food lovers would all benefit from the cheap beds, free bicycles and cooking class.' },

  { id:'m2-31', type:'read', passage:M2_REVIEW, source:'Adapted for TCAS70 practice', tag:'ad-vocab', level:'B2',
    stem:'The word “complimentary” in paragraph 2 is closest in meaning to ______.',
    options:['free','tasty','praised','optional'],
    answer:0,
    why:'<em>Complimentary</em> means “given free of charge”; the reviewer calls the breakfast “generous for a hostel.” <em>Praised</em> is the trap, because it comes from the look-alike noun <em>compliment</em> (words of praise). Nothing suggests the breakfast was optional, and <em>tasty</em> describes the food, not how it is provided.' },

  { id:'m2-32', type:'read', passage:M2_REVIEW, source:'Adapted for TCAS70 practice', tag:'rd-notexcept', level:'B2',
    stem:'Which of the following is NOT mentioned in the review?',
    options:['the price of a dorm bed','the distance to the airport','whether the hostel has a lift','the reviewer’s plans for next year'],
    answer:1,
    why:'The review gives the dorm price (฿450), says there is no lift, and mentions the reviewer’s booking for next year’s Yi Peng. It places the hostel inside the Old City walls but never mentions the airport.' },

  { id:'m2-33', type:'read', passage:M2_NEWS, source:'Adapted for TCAS70 practice', tag:'rd-main', level:'B2+',
    stem:'What is the main idea of the news report?',
    options:['Australia is planning to end its ban after only one year.','Australia’s ban has had mixed results, but others are following it.','Other governments have rejected Australia’s approach as unworkable.','Most Australian parents believe the ban has failed and want it cancelled.'],
    answer:1,
    why:'The report weighs a success (4.7 million accounts removed) against a failure (more than 80% still online), then lists countries that “have decided to follow.” Nobody says the ban will end, the Sydney mother still supports it, and other countries are copying it rather than rejecting it.' },

  { id:'m2-34', type:'read', passage:M2_NEWS, source:'Adapted for TCAS70 practice', tag:'rd-detail', level:'B2+',
    stem:'According to the regulator’s report, three months after the ban began, ______.',
    options:['most platforms had stopped removing accounts','about 4.7 million children had deleted their own accounts','more than four in five under-16s were still using social media','fewer than 20 percent of teenagers had tried to get around the ban'],
    answer:2,
    why:'Paragraph 5 says “more than 80 percent of under-16s were still using social media three months after the ban began,” and 80 percent is four in five. The 4.7 million figure refers to accounts removed by January 2026, not children deleting their own accounts, and nothing is said about platforms stopping removals.' },

  { id:'m2-35', type:'read', passage:M2_NEWS, source:'Adapted for TCAS70 practice', tag:'rd-expression', level:'C1',
    stem:'In paragraph 4, the expression “the law had teeth” suggests that the law ______.',
    options:['was having a real effect','was too harsh on children','was popular with teenagers','was difficult to understand'],
    answer:0,
    why:'A law that “has teeth” has real power to be enforced and to produce results; supporters used the 4.7 million removed accounts “as proof” of this. “Too harsh” is the trap — teeth can bite — but the idiom is about effectiveness, not cruelty.' },

  { id:'m2-36', type:'read', passage:M2_NEWS, source:'Adapted for TCAS70 practice', tag:'rd-views', level:'C1',
    stem:'Dr Helen Marsh compares the ban to seatbelt rules in order to suggest that ______.',
    options:['social media is as dangerous as unsafe driving','parents should be fined when their children break the rules','a rule can change habits slowly even when many ignore it at first','teenagers should be taught road safety in the same lessons as online safety'],
    answer:2,
    why:'Dr Marsh says “no one expected the number to fall to zero overnight” and that laws “change what is considered normal,” just as seatbelt rules were not obeyed by everyone at first. Her point is about how laws work over time, not that social media is literally as dangerous as driving; fines and road-safety lessons are never mentioned.' },

  { id:'m2-37', type:'read', passage:M2_NEWS, source:'Adapted for TCAS70 practice', tag:'rd-cause', level:'B2+',
    stem:'According to critics, what is one possible negative effect of the ban?',
    options:['Teenagers may spend less time on homework.','Schools may be forced to hire more counselors.','Hidden online activity may stop teens asking for help.','Parents may lose access to their own social media accounts.'],
    answer:2,
    why:'Critics worry the ban “pushes children into less visible corners of the internet,” and the counselor adds that teens who hide what they do are “less likely to ask an adult for help.” A counselor is quoted, but nobody says schools must hire more, and homework and parents’ accounts are not presented as effects.' },

  { id:'m2-38', type:'read', passage:M2_NEWS, source:'Adapted for TCAS70 practice', tag:'wk-social', level:'C1',
    stem:'Which country has chosen a lower age limit than Australia’s and will start it in 2027?',
    options:['France','Greece','Denmark','the United Kingdom'],
    answer:1,
    why:'Greece will ban under-15s — a lower limit than Australia’s under-16 — “from January 2027.” France also chose 15, but its ban started on 1 September 2026; the UK’s 2027 plan uses the same limit as Australia; and no start date is given for Denmark.' },

  { id:'m2-39', type:'read', passage:'', visual:M2_VIS1, tag:'vs-math', level:'B2',
    stem:'In 2020, Vietnam’s share of electricity from renewable sources was approximately three times that of ______.',
    options:['Thailand','Malaysia','Indonesia','the Philippines'],
    answer:0,
    why:'In 2020 Vietnam’s share was 36% and Thailand’s was 12%, and 36 ÷ 12 = 3. Indonesia (16%) is the nearest trap, but 36 is only about 2.3 times 16; Malaysia’s 18% is exactly half of Vietnam’s.' },

  { id:'m2-40', type:'read', passage:'', visual:M2_VIS1, tag:'vs-trend', level:'B2',
    stem:'Which was the only country where the share of renewable electricity fell between 2020 and 2025?',
    options:['Vietnam','Malaysia','Indonesia','the Philippines'],
    answer:3,
    why:'The Philippines dropped from 22% to 20%. Every other country rose; Indonesia had the smallest rise (16% to 19%), which makes it tempting, but its share still increased.' },

  { id:'m2-41', type:'read', passage:'', visual:M2_VIS1, tag:'vs-compare', level:'B2+',
    stem:'In 2020, which pair of countries had the closest shares of renewable electricity?',
    options:['Malaysia – Indonesia','Thailand – Indonesia','Vietnam – the Philippines','Malaysia – the Philippines'],
    answer:0,
    why:'In 2020 Malaysia (18%) and Indonesia (16%) differ by only 2 percentage points. Thailand–Indonesia (12% and 16%) and Malaysia–the Philippines (18% and 22%) both differ by 4, and Vietnam–the Philippines by 14.' },

  { id:'m2-42', type:'read', passage:'', visual:M2_VIS2, tag:'vs-math', level:'B2',
    stem:'What is the combined percentage of students who mainly use AI to brainstorm ideas or to write whole assignments?',
    options:['30%','34%','43%','53%'],
    answer:1,
    why:'Brainstorming is 22% and writing whole assignments is 12%, so 22 + 12 = 34%. The distractors come from adding the wrong slices: 43% is summarizing + writing, and 53% is summarizing + brainstorming.' },

  { id:'m2-43', type:'read', passage:'', visual:M2_VIS2, tag:'vs-trap', level:'B2+',
    stem:'Among the whole sample, what is the percentage difference between female and male students who mainly use AI for checking grammar and translating?',
    options:['4%','7%','11%','18%'],
    answer:0,
    why:'The note splits the 18% slice into 11% female and 7% male, so the difference is 11 − 7 = 4 percentage points. 7% and 11% are the two groups themselves, and 18% is the whole slice.' },

  { id:'m2-44', type:'read', passage:'', visual:M2_VIS2, tag:'vs-pie', level:'B2+',
    stem:'How many of the 1,200 students surveyed mainly use AI to summarize readings and lecture notes?',
    options:['216','264','310','372'],
    answer:3,
    why:'The summarizing slice is 31%, and 31% of 1,200 is 0.31 × 1,200 = 372. 310 is the trap of multiplying 31 by 10; 264 and 216 are the brainstorming (22%) and grammar (18%) slices.' }
];

/* ------------------------------------------------ SECTION II Part V, items 45–60 */
var M2_S3 = [
  { id:'m2-45', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'rd-purpose', level:'B2+',
    stem:'The primary purpose of the article is to ______.',
    options:['prove that global warming causes every El Niño','explain El Niño and its likely effects on Thailand','persuade Thai farmers to stop growing rice altogether','warn readers that Bangkok will flood again in early 2027'],
    answer:1,
    why:'The article first explains the mechanism (trade winds, warm water, rain clouds) and then its likely effects on Thai farmers, air quality and water supplies. It expects drought, not floods, in early 2027; it suggests switching crops only “until conditions improve”; and it calls El Niño “a natural climate pattern.”' },

  { id:'m2-46', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'wk-climate', level:'B2+',
    stem:'According to the article, which of the following starts the chain of events that leads to an El Niño?',
    options:['The trade winds weaken.','Rain clouds move over Thailand.','Warm water moves west toward Indonesia.','Cold water rises off the coast of South America.'],
    answer:0,
    why:'Paragraph 3 gives the sequence: “The trade winds weaken … allowing the warm water to drift eastward … The rain clouds follow it.” Warm water moving toward Indonesia and cold water rising near South America describe a <em>normal</em> year in paragraph 2, not the start of an El Niño.' },

  { id:'m2-47', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'vc-verbs', level:'C1',
    stem:'The word “falters” in paragraph 3 is closest in meaning to ______.',
    options:['repeats','weakens','reverses','intensifies'],
    answer:1,
    why:'The next sentence shows what “falters” means here: “The trade winds weaken.” <em>Reverses</em> is the near-miss, but the text says the winds reverse only “in some cases,” so it is not the general meaning. <em>Intensifies</em> is the opposite, and <em>repeats</em> does not describe a system that is failing.' },

  { id:'m2-48', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'vc-closest', level:'C1',
    stem:'The word “exacerbate” in paragraph 5 can be best replaced by ______.',
    options:['reduce','spread','worsen','measure'],
    answer:2,
    why:'The paragraph shows El Niño making an existing problem worse: with less rain “the haze lingers longer,” and fires become “easier to start.” <em>Spread</em> is tempting because pollution travels, but the paragraph is about how bad the pollution gets, not how far it goes; <em>reduce</em> is the opposite.' },

  { id:'m2-49', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'vc-polysemy', level:'C1',
    stem:'The sentence “None of this is set in stone” in paragraph 6 means that ______.',
    options:['the predictions could still change','the damage will be impossible to repair','the effects described are certain to happen','scientists have no reliable forecasts at all'],
    answer:0,
    why:'<em>Set in stone</em> means fixed and impossible to change, so the sentence means the forecasts may change; the writer adds that forecasts “become more reliable only as it develops.” The last option goes too far — the forecasts are uncertain, not useless — and “certain to happen” is the opposite meaning.' },

  { id:'m2-50', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'rd-reference', level:'B2+',
    stem:'The word “Those” in “Those who ignore the advice” (paragraph 4) refers to ______.',
    options:['large reservoirs','Thai authorities','agricultural experts','farmers planting a second crop'],
    answer:3,
    why:'The advice is to “delay or skip the second crop,” so the people who might ignore it are the farmers planning that crop, whose “fields dry out before harvest.” The authorities give the advice rather than ignore it, the experts appear only in the next sentence, and reservoirs cannot follow advice.' },

  { id:'m2-51', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'rd-infer', level:'C1',
    stem:'What can be inferred about water managers from paragraph 7?',
    options:['They believe full reservoirs can stop El Niño.','They have already stored enough water for 2027.','They must weigh flood safety now against water needs later.','They plan to release all the stored water to farmers at once.'],
    answer:2,
    why:'Managers are advised to store rain “rather than releasing it to protect against further flooding — a difficult balancing act,” so they must balance flood safety today against water for the dry season. The article says El Niño “cannot be stopped,” and nothing shows that enough water has already been stored.' },

  { id:'m2-52', type:'read', passage:M2_ART1, source:'Adapted for TCAS70 practice', tag:'rd-attitude', level:'B2+',
    stem:'Which best describes the writer’s attitude toward the coming El Niño?',
    options:['Alarmed and hopeless','Calm and indifferent','Concerned but practical','Enthusiastic and optimistic'],
    answer:2,
    why:'The writer takes the risks seriously — drought, crop losses, worse PM2.5 — but stresses that “none of this is set in stone” and that the impact “can be mitigated,” ending with practical steps. That is concern plus practicality, not panic; the writer is clearly neither indifferent nor excited.' },

  { id:'m2-53', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'rd-main', level:'B2+',
    stem:'What is the main idea of the article?',
    options:['Reskilling is always a better choice than upskilling.','Soft skills now matter less than technical knowledge.','Workers will need to keep learning throughout their careers.','AI will soon replace most workers in almost every industry in the world.'],
    answer:2,
    why:'The article defines upskilling and reskilling, stresses soft skills and lifelong learning, and concludes that for most people “the answer will be both.” It says many tasks will change rather than predicting mass replacement, values soft skills highly, and never ranks reskilling above upskilling.' },

  { id:'m2-54', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'wk-work', level:'B2+',
    stem:'Which of the following is an example of reskilling as it is defined in the article?',
    options:['A chef takes a course to improve his knife skills.','A bank teller retrains to become a software tester.','A teacher attends a workshop on using chatbots in class.','A nurse learns to use a new AI system for patient records.'],
    answer:1,
    why:'Reskilling means learning “a substantially new set of skills in order to move into a different role,” and a bank teller who becomes a software tester changes job completely. The chef, the teacher and the nurse all stay in their jobs and do them better — upskilling, like the accountant in paragraph 2.' },

  { id:'m2-55', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'vc-adjs', level:'C1',
    stem:'The word “ubiquitous” in paragraph 1 is closest in meaning to ______.',
    options:['outdated','confusing','widespread','controversial'],
    answer:2,
    why:'<em>Ubiquitous</em> means “found or heard everywhere”; the writer uses it for two terms that everyone now talks about. <em>Controversial</em> is tempting because AI and jobs are debated, but the sentence is about how common the terms are, not about disagreement.' },

  { id:'m2-56', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'vc-clue', level:'C1',
    stem:'The phrase “the half-life of technical skills” in paragraph 5 refers to ______.',
    options:['the age at which most people stop learning','the number of skills a worker loses every year','the time before half of what one knows becomes outdated','the half of a working career that is spent on learning new technical skills'],
    answer:2,
    why:'The writer defines the phrase between the dashes: “the time it takes for half of what you know to become outdated.” The last option takes “half” literally as half of a career, but the phrase measures how quickly knowledge ages, not how a career is divided.' },

  { id:'m2-57', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'rd-org', level:'B2+',
    stem:'How is paragraph 2 organized?',
    options:['Events are described in time order.','A problem is followed by a solution.','Two terms are defined, each with an example.','A claim is made and then supported with statistics.'],
    answer:2,
    why:'Paragraph 2 defines upskilling and illustrates it with the accountant, then defines reskilling “by contrast” and illustrates it with the factory worker. There are no statistics, no time sequence and no problem–solution structure.' },

  { id:'m2-58', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'rd-mention', level:'C1',
    stem:'Why does the writer mention a chatbot drafting a customer email in paragraph 4?',
    options:['to show that chatbots can now do any job','to complain that customers often get angry with chatbots','to suggest that workers should learn to write emails faster','to illustrate why human judgment is still needed alongside AI'],
    answer:3,
    why:'The example contrasts what the chatbot can do (“draft a customer email in seconds”) with what it cannot — judging whether the email will calm an angry client, which “still requires a human.” It supports the paragraph’s point about soft skills; the writer never claims chatbots can do everything.' },

  { id:'m2-59', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'rd-views', level:'B2+',
    stem:'According to paragraph 6, some economists believe that ______.',
    options:['training is a magic cure for job losses','workers should pay for all of their own retraining','firms that profit from automation should share the cost','certificates are now worth more to employers than years of experience'],
    answer:2,
    why:'The economists say “companies that profit from automation … should share the cost” of helping replaced staff adapt. That is the opposite of making workers pay for everything, and the “magic cure” idea is what critics warn <em>against</em>.' },

  { id:'m2-60', type:'read', passage:M2_ART2, source:'Adapted for TCAS70 practice', tag:'rd-conclude', level:'C1',
    stem:'Which statement best reflects the writer’s conclusion?',
    options:['Willingness to learn needs fair opportunities too.','Most people will need to upskill only once in their careers.','Governments should decide whether workers upskill or reskill.','Those who know the most today will be the safest in the age of AI.'],
    answer:0,
    why:'The last paragraph says that thriving workers will be those “most willing to keep learning,” then adds: “willingness is not enough on its own: it must be matched by opportunities that are fair, affordable and open to everyone.” The last option reverses the claim that it is not those “who know the most today,” and the article presents learning as lifelong, not one-off.' }
];

/* ------------------------------------------------ SECTION III, items 61–80 */
var M2_S4 = [
  { id:'m2-61', type:'cloze', blank:'(61)', passage:M2_P1, tag:'wf-family', level:'B2',
    stem:'Choose the best option for blank (61).',
    options:['popular','popularly','popularize','popularity'],
    answer:3,
    why:'After the possessive <em>its</em>, the blank needs a noun that can be the subject of “has grown”: <em>popularity</em>. <em>Popularize</em> is a verb, and <em>popular</em> and <em>popularly</em> are an adjective and an adverb, so none of them can follow <em>its</em> as a subject.' },

  { id:'m2-62', type:'cloze', blank:'(62)', passage:M2_P1, tag:'vt-sva', level:'B2+',
    stem:'Choose the best option for blank (62).',
    options:['prompt','has prompted','are prompting','have prompted'],
    answer:1,
    why:'The head of the long subject is <em>The number</em> (singular), not <em>hours</em>, so the verb must be singular: <em>has prompted</em>. <em>Have prompted</em>, <em>are prompting</em> and <em>prompt</em> are plural forms that wrongly agree with the nearest plural noun.' },

  { id:'m2-63', type:'cloze', blank:'(63)', passage:M2_P1, tag:'nc-whether', level:'C1',
    stem:'Choose the best option for blank (63).',
    options:['If','Unless','Even if','Whether or not'],
    answer:3,
    why:'The blank begins a noun clause that is the subject of “is still debated,” and it presents two possibilities (lasting benefits or none). <em>Whether or not</em> can introduce a subject clause; <em>If</em> cannot begin a subject clause, and <em>Even if</em> and <em>Unless</em> introduce adverb clauses, which would leave the sentence without a subject.' },

  { id:'m2-64', type:'cloze', blank:'(64)', passage:M2_P1, tag:'vc-colloc', level:'B2+',
    stem:'Choose the best option for blank (64).',
    options:['do','give','make','play'],
    answer:3,
    why:'The fixed collocation is <em>play a role</em> — here, “play a bigger role.” <em>Make</em> is the near-miss, because it collocates with <em>a difference</em> — but English says “make a difference,” not “make a role,” and we do not “give” or “do” a role either.' },

  { id:'m2-65', type:'cloze', blank:'(65)', passage:M2_P1, tag:'pl-parallel', level:'B2',
    stem:'Choose the best option for blank (65).',
    options:['replace','replaced','replaces','replacing'],
    answer:3,
    why:'The list is parallel: “turning off …, keeping …, and ______.” The third item must also be an -ing form: <em>replacing</em>. <em>Replace</em>, <em>replaces</em> and <em>replaced</em> all break the pattern set by the first two items.' },

  { id:'m2-66', type:'cloze', blank:'(66)', passage:M2_P2, tag:'rc-appos', level:'C1',
    stem:'Choose the best option for blank (66).',
    options:['a businessman based in','a businessman was based in','was a businessman based in','who a businessman based in'],
    answer:0,
    why:'The phrase between the commas is an appositive — a noun phrase that renames Momofuku Ando — and <em>based in Osaka</em> is a reduced relative clause inside it. Adding <em>was</em> would create a second main verb in a sentence that already has one (“introduced”), and <em>who</em> cannot be followed directly by a noun phrase.' },

  { id:'m2-67', type:'cloze', blank:'(67)', passage:M2_P2, tag:'vp-passive', level:'B2',
    stem:'Choose the best option for blank (67).',
    options:['prepare','prepared','preparing','to prepare'],
    answer:1,
    why:'A meal does not prepare anything; it receives the action, so <em>could be</em> must be followed by a past participle to form the passive: <em>could be prepared</em>. <em>Preparing</em> would make the meal do the cooking, and <em>prepare</em> or <em>to prepare</em> cannot follow <em>be</em>.' },

  { id:'m2-68', type:'cloze', blank:'(68)', passage:M2_P2, tag:'pl-coord', level:'B2+',
    stem:'Choose the best option for blank (68).',
    options:['So','Yet','Thus','Moreover'],
    answer:1,
    why:'The previous sentence calls the invention “a breakthrough,” but the next part says it was “not an instant success” — a contrast, so <em>Yet</em> is needed. <em>So</em> and <em>Thus</em> signal a result, and <em>Moreover</em> adds a similar point; none fits the change of direction.' },

  { id:'m2-69', type:'cloze', blank:'(69)', passage:M2_P2, tag:'dt-quant', level:'B2+',
    stem:'Choose the best option for blank (69).',
    options:['all','each','some','every'],
    answer:3,
    why:'<em>Almost</em> can modify <em>every</em> but not <em>each</em>, and the singular noun <em>country</em> rules out <em>all</em>, which would need <em>countries</em>. “Almost some country” makes no sense, so <em>almost every country</em> is the only correct choice.' },

  { id:'m2-70', type:'cloze', blank:'(70)', passage:M2_P2, tag:'vm-cond', level:'C1',
    stem:'Choose the best option for blank (70).',
    options:['gave','gives','has given','had given'],
    answer:3,
    why:'This is a mixed conditional: an unreal past condition (Ando giving up in the 1950s) with an unreal present result (students “might be eating” something else today), so the if-clause needs the past perfect <em>had given</em>. <em>Gave</em> would make the condition about the present, while <em>gives</em> and <em>has given</em> describe real possibilities.' },

  { id:'m2-71', type:'cloze', blank:'(71)', passage:M2_P3, tag:'nc-embedded', level:'B2',
    stem:'Choose the best option for blank (71).',
    options:['why we yawn','why do we yawn','why did we yawn','why have we yawned'],
    answer:0,
    why:'After a verb such as <em>explain</em>, a question becomes an embedded question and uses statement word order: <em>why we yawn</em>. The other options keep direct-question order, with an auxiliary before the subject, which is correct only in a real question ending with a question mark.' },

  { id:'m2-72', type:'cloze', blank:'(72)', passage:M2_P3, tag:'rc-reduced', level:'C1',
    stem:'Choose the best option for blank (72).',
    options:['repeated','repeating','was repeated','which repeated'],
    answer:0,
    why:'The words between the commas form a reduced relative clause with a passive meaning — the theory “which was repeated in textbooks” becomes <em>repeated in textbooks</em>. <em>Was repeated</em> would add a second main verb, and <em>repeating</em> and <em>which repeated</em> are active, as if the theory itself did the repeating.' },

  { id:'m2-73', type:'cloze', blank:'(73)', passage:M2_P3, tag:'wo-adverb', level:'C1',
    stem:'Choose the best option for blank (73).',
    options:['simply does not signal','does simply not signal','not simply does signal','does not simply signal'],
    answer:3,
    why:'The word <em>also</em> in “it may also help to cool the brain” shows that tiredness is only part of the story, so the writer means “not only”: <em>does not simply signal</em>. <em>Simply does not signal</em> is grammatical but means “definitely does not,” which contradicts <em>also</em>; the other two word orders are ungrammatical.' },

  { id:'m2-74', type:'cloze', blank:'(74)', passage:M2_P3, tag:'lk-contrast', level:'B2+',
    stem:'Choose the best option for blank (74).',
    options:['while','unless','despite','because of'],
    answer:0,
    why:'The sentence contrasts two facts — more yawning in mild temperatures, less in very hot or very cold air — and <em>while</em> joins two contrasting clauses. <em>Despite</em> and <em>because of</em> must be followed by a noun phrase, not a full clause, and <em>unless</em> would wrongly make one fact a condition for the other.' },

  { id:'m2-75', type:'cloze', blank:'(75)', passage:M2_P3, tag:'vp-causative', level:'B2',
    stem:'Choose the best option for blank (75).',
    options:['yawn','yawned','to yawn','yawning'],
    answer:0,
    why:'The causative verb <em>make</em> is followed by an object and a bare infinitive: <em>make some people yawn</em>. <em>To yawn</em> is the near-miss, because it follows <em>cause</em> or <em>get</em>, but not active <em>make</em>.' },

  { id:'m2-76', type:'choose', tag:'po-process', level:'B2',
    stem:'Rearrange the following statements into a logical paragraph.<div class="orderblock"><p>A. It is then mixed with water and chemicals and broken down into a soft, soupy mixture called pulp.</p><p>B. Finally, this pulp is spread thinly over large rollers, where it is pressed and dried into new sheets of paper.</p><p>C. Recycling paper involves a series of steps that turn yesterday’s waste into a useful product again.</p><p>D. Initially, used paper is collected, sorted by type and cleaned of plastic, staples and other contaminants.</p></div>',
    options:['A-B-C-D','C-A-D-B','C-D-A-B','D-C-A-B'],
    answer:2,
    why:'C is the general topic sentence that introduces “a series of steps.” The signal words then give the order: <em>Initially</em> (D), <em>then</em> (A, where <em>It</em> refers to the used paper), and <em>Finally</em> (B, where <em>this pulp</em> points back to A). C-A-D-B fails because <em>It is then mixed</em> would come before the paper has even been collected.' },

  { id:'m2-77', type:'choose', tag:'po-compare', level:'B2+',
    stem:'Rearrange the following statements into a logical paragraph.<div class="orderblock"><p>A. Working alone allows students to move at their own pace and concentrate without interruption, which is ideal for memorizing facts or practicing calculations.</p><p>B. Consequently, many successful students combine the two, reviewing material on their own before testing their understanding in discussion with others.</p><p>C. Studying alone and studying in a group each suit different kinds of learning.</p><p>D. A study group, in contrast, exposes members to different explanations and forces them to put their understanding into words.</p></div>',
    options:['A-C-D-B','B-D-C-A','C-A-B-D','C-A-D-B'],
    answer:3,
    why:'C names both methods and is the only possible opener. A describes studying alone, and D begins “in contrast,” so it must follow A. B begins <em>Consequently</em> and mentions “the two,” so it can only come once both methods have been described. C-A-B-D is the near-miss, but it concludes before the second method has been explained.' },

  { id:'m2-78', type:'choose', tag:'po-signal', level:'B2+',
    stem:'Rearrange the following statements into a logical paragraph.<div class="orderblock"><p>A. This lack of sleep, in turn, weakens concentration and memory, making it harder to learn the next day.</p><p>B. The bright screen and constant stimulation delay the release of melatonin, the hormone that tells the body it is time to sleep.</p><p>C. Using a smartphone in bed can set off a chain of problems for students.</p><p>D. As a result, students fall asleep later but still have to wake up early for school, losing valuable hours of rest.</p></div>',
    options:['A-C-B-D','B-C-D-A','C-A-B-D','C-B-D-A'],
    answer:3,
    why:'C announces “a chain of problems” and opens the paragraph. B gives the first link (melatonin is delayed), D begins <em>As a result</em> (falling asleep later), and A’s “This lack of sleep, in turn” refers back to the lost hours of rest in D. C-A-B-D puts “This lack of sleep” before any lack of sleep has been mentioned.' },

  { id:'m2-79', type:'choose', tag:'po-argue', level:'B2+',
    stem:'Rearrange the following statements into a logical paragraph.<div class="orderblock"><p>A. One simple solution is to let students choose smaller portions, so that they take only what they will actually eat.</p><p>B. Many school canteens throw away large amounts of food every day.</p><p>C. In addition, leftover food that is still safe can be donated, while scraps can be turned into compost for the school garden.</p><p>D. This waste not only costs money but also adds to the methane released from landfills.</p></div>',
    options:['A-B-D-C','B-D-A-C','B-D-C-A','D-B-A-C'],
    answer:1,
    why:'The paragraph moves from problem to solutions. B states the problem, D (“This waste”) explains why it matters, A offers “One simple solution,” and C adds a second one with <em>In addition</em>. B-D-C-A is the near-miss, but <em>In addition</em> cannot introduce a solution before the first solution has appeared.' },

  { id:'m2-80', type:'choose', tag:'po-ref', level:'C1',
    stem:'Rearrange the following statements into a logical paragraph.<div class="orderblock"><p>A. More useful is summarizing material in one’s own words, since this forces students to process what they have read.</p><p>B. Most powerful of all is self-testing, such as doing past papers without looking at the answers, because recalling information strengthens memory each time.</p><p>C. The least effective is simply rereading or highlighting notes, which feels productive but leaves little in long-term memory.</p><p>D. Not all revision techniques are equally effective, and researchers often group them into three broad levels.</p></div>',
    options:['C-A-B-D','D-A-C-B','D-B-A-C','D-C-A-B'],
    answer:3,
    why:'D introduces “three broad levels” and opens the paragraph. The comparatives then set the order by increasing importance: <em>The least effective</em> (C), <em>More useful</em> (A, more useful than rereading), and <em>Most powerful of all</em> (B), which needs the others to have been mentioned first. D-B-A-C fails because <em>Most powerful of all</em> and <em>More useful</em> both compare with techniques not yet named.' }
];

MOCKS.push({
  id: 'm2', name: 'Mock 2 · Checkpoint',
  blurb: 'A full 80-item paper at TCAS69 level, taken after the lessons your diagnostic assigned: longer reading options, C1 discourse markers, arithmetic on visuals and C1 vocabulary in context.',
  minutes: 90, total: 100,
  sections: [
    { code:'I-1', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part I: Short Conversations (Items 1–12)',
      instructions:'Choose the best answers to complete the following conversations.', points:1.25, items:M2_S1.slice(0,12) },
    { code:'I-2', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part II: Long Conversation (Items 13–20)',
      instructions:'Choose the best answers to complete the following conversation.', points:1.25, items:M2_S1.slice(12,20) },
    { code:'II-1', part:'SECTION II: READING SKILL', title:'Part I: Advertisements (Items 21–26)',
      instructions:'Read the following advertisements and choose the best answer for each question.', points:1.25, items:M2_S2.slice(0,6) },
    { code:'II-2', part:'SECTION II: READING SKILL', title:'Part II: Product/Service Review (Items 27–32)',
      instructions:'Read the following review and choose the best answer for each question.', points:1.25, items:M2_S2.slice(6,12) },
    { code:'II-3', part:'SECTION II: READING SKILL', title:'Part III: News Report (Items 33–38)',
      instructions:'Read the following news report and choose the best answer for each question.', points:1.25, items:M2_S2.slice(12,18) },
    { code:'II-4', part:'SECTION II: READING SKILL', title:'Part IV: Visuals (Items 39–44)',
      instructions:'Study the following visuals and choose the best answer for each question.', points:1.25, items:M2_S2.slice(18,24) },
    { code:'II-5', part:'SECTION II: READING SKILL', title:'Part V: General Articles (Items 45–60)',
      instructions:'Read the following articles and choose the best answer for each question.', points:1.25, items:M2_S3 },
    { code:'III-1', part:'SECTION III: WRITING SKILL', title:'Part I: Text Completion (Items 61–75)',
      instructions:'Choose the best answers to complete the following passages.', points:1.25, items:M2_S4.slice(0,15) },
    { code:'III-2', part:'SECTION III: WRITING SKILL', title:'Part II: Paragraph Organization (Items 76–80)',
      instructions:'Choose the best answer to rearrange the following statements into a logical paragraph.', points:1.25, items:M2_S4.slice(15,20) }
  ]
});
