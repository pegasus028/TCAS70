/* ===========================================================================
   TCAS70 LAUNCHPAD — MOCK 5 · FINAL DRESS REHEARSAL  (m5)
   The ceiling paper: C1 throughout, a few C1+. Same format as TCAS68/69.
   =========================================================================== */

var M5_C1 = [
  { who:'Situation', text:'During a professor’s office hours' },
  { who:'Nan', text:'Professor Harland, sorry to barge in. Is now a good time?' },
  { who:'Professor', text:'My door’s open for a reason, Nan. ___(1)___' },
  { who:'Nan', text:'It’s about the reflective essay. I used an AI chatbot to brainstorm my outline, and I honestly don’t know how to cite it. It isn’t a person, and there’s no page number.' },
  { who:'Professor', text:'I’m glad you asked instead of guessing. ___(2)___ you should name the tool, the date you used it and the prompt you typed, and add a short note explaining what it contributed.' },
  { who:'Nan', text:'And if I rewrote a few of its sentences in my own words? Surely that doesn’t count.' },
  { who:'Professor', text:'(gently) ___(3)___ Paraphrasing a machine’s ideas without saying so is still presenting someone else’s work as your own. Academic integrity isn’t only about copied words.' },
  { who:'Nan', text:'Oh. So I could be in trouble even though I didn’t mean to cheat?' },
  { who:'Professor', text:'Intentions matter, but the policy is strict. Look, you came to me before submitting, and that counts for a lot. ___(4)___' },
  { who:'Nan', text:'Thank you. I’ll redo the references tonight and add a note explaining exactly what the chatbot did.' }
];

var M5_C2 = [
  { who:'Situation', text:'A customer calls a streaming service to cancel her subscription' },
  { who:'Agent', text:'Thank you for calling StreamNest. This is Kevin speaking. How may I help you today?' },
  { who:'Ploy', text:'Hi, I’d like to cancel my subscription, please.' },
  { who:'Agent', text:'I’m sorry to hear that. May I ask what prompted the decision?' },
  { who:'Ploy', text:'To be honest, I barely use it anymore. ___(5)___ I just can’t justify 399 baht a month.' },
  { who:'Agent', text:'I completely understand. Before you go, though, ___(6)___ we’d like to offer you three months at half price.' },
  { who:'Ploy', text:'That’s kind of you, but ___(7)___ Even at half price, it’s money I’d rather save.' },
  { who:'Agent', text:'Understood. We also have an ad-supported plan at 99 baht, which would let you keep your watch history.' },
  { who:'Ploy', text:'___(8)___ Could you just confirm the cancellation and email me a reference number?' },
  { who:'Agent', text:'Certainly. Your subscription will end on the 28th, and the reference number is on its way.' }
];

var M5_C3 = [
  { who:'Situation', text:'Two friends discuss a celebrity video that has gone viral' },
  { who:'Fah', text:'Pim, have you seen the clip of Jaxon Reed saying he’s quitting music? It’s everywhere.' },
  { who:'Pim', text:'I’ve seen it, and ___(9)___ His lips don’t quite match the words, and he never blinks.' },
  { who:'Fah', text:'Really? But it has twenty million views. That many people can’t all be wrong.' },
  { who:'Pim', text:'___(10)___ Popularity isn’t proof. Fake clips often spread faster precisely because they’re shocking.' },
  { who:'Fah', text:'Fair enough. So how would we actually check?' },
  { who:'Pim', text:'Well, ___(11)___ see whether his official accounts or any reliable news outlets have posted it. If they haven’t, that’s a red flag.' },
  { who:'Fah', text:'And if they have?' },
  { who:'Pim', text:'Then look more closely — blurry teeth, strange shadows, a voice that never pauses for breath. Mind you, the latest tools are so good that ___(12)___' },
  { who:'Fah', text:'Great. So soon we won’t be able to believe our own eyes.' },
  { who:'Pim', text:'Exactly. So if that video of me singing opera ever gets out, it’s obviously a deepfake.' }
];

var M5_LONG = [
  { who:'Situation', text:'A school field trip to a floating market' },
  { who:'Khun Somchai (guide)', text:'Good morning, everyone, and welcome to Damnoen Saduak! There’s a lot to see, so ___(13)___ — our boats leave in five minutes.' },
  { who:'Lukas (exchange student)', text:'(looking around) A ball? I don’t see a ball. Are we playing a game first?' },
  { who:'Mint', text:'No, Lukas. ___(14)___ He just means we should get started.' },
  { who:'Khun Somchai', text:'(on the boat) The vendors here have been up since the crack of dawn, so the fruit is as fresh as it gets. Oh, and please keep your hands inside the boat — ___(15)___' },
  { who:'Lukas', text:'Sorry for what? I haven’t done anything yet!' },
  { who:'Ms Aom (teacher)', text:'(laughing) ___(16)___, Lukas. It means it’s wiser to be careful now than to regret it later.' },
  { who:'Khun Somchai', text:'Now, this lady’s mango sticky rice costs twice as much as anyone else’s. ___(17)___, you get what you pay for.' },
  { who:'Lukas', text:'But I haven’t paid yet. Does that mean I get nothing?' },
  { who:'Mint', text:'(whispering) It means expensive things are usually better, Lukas. Just try it.' },
  { who:'Lukas', text:'(taking a bite) Wow. This is ___(18)___!' },
  { who:'Khun Somchai', text:'See? Now, it’s getting hot. ___(19)___, we’ve covered a lot of ground this morning, so let’s head back to the pier.' },
  { who:'Lukas', text:'Covered ground? But we’ve been on the water the whole time!' },
  { who:'Ms Aom', text:'(sighing) Lukas, you really must stop ___(20)___' },
  { who:'Lukas', text:'(grinning) Actually, Ms Aom, my exchange project is on English idioms. I understood every single one — I just wanted to see how you would all explain them.' },
  { who:'Khun Somchai', text:'(laughing) Well, you had us all fooled. I guess the joke’s on us!' }
];

var M5_AD1 = {
  brand:'NEST@Salaya Co-Living',
  headline:'Your first home away from home — minus the loneliness.',
  body:['Starting university is a leap. At NEST, you get a private, fully furnished room — and a community that has your back from day one.'],
  bullets:['Private room with en-suite bathroom, desk and air-conditioning','Shared kitchen, rooftop study lounge and 24-hour gym','High-speed Wi-Fi, water and weekly community dinners included in the rent','Electricity charged separately, by meter','Shared areas cleaned twice a week (residents clean their own rooms)','Free shuttle to campus every 20 minutes, 7 a.m.–10 p.m.'],
  price:'From 8,900 baht a month · Deposit: two months’ rent (refundable) · Minimum stay: one semester (5 months)',
  cta:'Book a viewing before 31 March 2027 and your first week’s rent is on us!',
  fine:'First-week offer valid for 12-month contracts only. Deposit refunded within 30 days of moving out, minus any cleaning or repair costs.',
  source:'Adapted for TCAS70 practice'
};

var M5_AD2 = {
  brand:'Suan Rak Community Health Centre',
  headline:'Healthy Neighbours Day — Free Health Screening',
  body:['Know your numbers before they become a problem. Our nurses and volunteer doctors will check the basics in under an hour — no appointment, no cost.','Sunday 21 February 2027 · 8:00 a.m.–12:00 noon · Suan Rak Community Hall'],
  bullets:['Who can come: residents of Suan Rak subdistrict aged 35 and over','Checks: blood pressure, blood sugar (finger-prick test), weight, waist and BMI, eyesight','A 10-minute private chat with a nurse about sleep, stress and diet','Bring: your Thai ID card or house registration, and a list of any medicines you take','Blood sugar test: please fast for 8 hours beforehand (water is fine)','Please note: we do not offer X-rays, vaccinations, dental checks or prescriptions on the day'],
  price:'Completely free of charge',
  cta:'Just walk in — first come, first served.',
  fine:'Results are for screening only and are not a medical diagnosis. Anyone with unusual results will be referred to a hospital for follow-up.',
  source:'Adapted for TCAS70 practice'
};

var M5_REVIEW = 'Flying SkyThrift Air: Cheap, but Is It Cheerful?\n\n' +
'(1) I have flown with SkyThrift Air four times this year — twice to Chiang Mai and twice to Singapore — mainly because its fares are almost impossible to ignore. My one-way ticket to Chiang Mai was advertised at 790 baht, less than I once paid for a taxi across Bangkok in the rain. But as regular budget travelers know, the price on the screen is rarely the price you pay.\n\n' +
'(2) On punctuality, SkyThrift performed better than I expected. Three of my four flights left within ten minutes of their scheduled time, which is roughly in line with the airline’s claimed on-time rate of 88%, given such a small sample. The exception was a Friday-evening flight to Singapore that departed two and a half hours late. Our compensation was a single bottle of water — handed out, to be fair, with a smile.\n\n' +
'(3) The fees are where things get complicated. Choosing a seat costs 150 baht. A 15-kg checked bag costs 450 baht if you add it online, but 1,100 baht if you add it at the airport. Paying by credit card adds a 3% “processing fee.” The 7-kg limit for cabin bags is enforced to the gram; on one flight I watched a man put on three jackets at the check-in desk rather than pay. None of this is hidden, exactly — it is all in the terms and conditions — but the website reveals the extras only after you have typed in your passport details, by which point most customers are too invested to walk away. My “790-baht” ticket ended up costing nearly twice that.\n\n' +
'(4) What genuinely impressed me was the cabin crew. They were courteous, quick and good-humored, even on a full late-night flight of tired, irritable passengers. On the delayed Singapore flight, one flight attendant noticed an elderly woman struggling with her arrival card and quietly sat down beside her until it was completed.\n\n' +
'(5) Comfort, however, is not part of the deal. The seats are narrow and do not recline, and anyone taller than about 175 cm will spend the flight with their knees against the seat in front. Food and drink must be bought on board at prices that make airport cafés look generous. On the one-hour hop to Chiang Mai, none of this matters much; on the two-and-a-half-hour flight to Singapore, it does.\n\n' +
'(6) So, is SkyThrift worth it? The airline does exactly what it promises and not an ounce more. If you travel light, book early and bring your own snacks, it is excellent value. If you need to add a bag at the last minute, however, you may discover that the cheapest ticket is not always the cheapest trip.';

var M5_NEWS = '(1) Strong El Niño forecast: Thai farmers urged to prepare for a hot, dry start to 2027\n\n' +
'(2) By Chayanin Boonmee, The Bangkok Lantern\n\n' +
'(3) Forecasters say a strong El Niño is developing in the Pacific Ocean, and some are already warning that it could become a “super” El Niño — the kind of event that can reshape weather across half the planet.\n\n' +
'(4) For Thailand, past experience suggests the coming months could be hotter and drier than usual, especially between January and April 2027, at the height of the dry season.\n\n' +
'(5) An El Niño occurs when surface waters in the central and eastern Pacific become unusually warm, pulling rain clouds away from Southeast Asia. “Put simply, the rain that should fall on us falls somewhere else,” said Dr. Kanokwan Srisuk, a climate scientist at Lanna Valley University.\n\n' +
'(6) Farmers are expected to be among the first to feel the effects. Rice growers who rely on rain rather than irrigation are the most vulnerable, since a late or weak rainy season could leave their fields too dry to plant.\n\n' +
'(7) “My father lost half his crop in the last big drought,” said Somsak, a 46-year-old rice farmer in the Northeast who asked that only his first name be used. “This time I’m not waiting. I’m switching part of my land to crops that need less water.”\n\n' +
'(8) Water managers face a delicate balancing act. Reservoirs that look healthy after this year’s heavy rains could create a false sense of security, a senior irrigation official warned, because a single long dry season can drain them faster than many people expect.\n\n' +
'(9) “Floods in September and drought in March are not a contradiction,” the official said, speaking on condition of anonymity. “They are two faces of the same problem: too much water at the wrong time, and too little at the right time.”\n\n' +
'(10) Officials may ask farmers to limit off-season rice planting and urge households and factories to cut their water use if reservoir levels fall.\n\n' +
'(11) Cities face a different threat. Hot, dry conditions tend to worsen PM2.5 pollution in the dry season, as still air traps fine dust close to the ground and the burning of crop waste adds more smoke.\n\n' +
'(12) Doctors advise people with asthma or heart disease, as well as young children and the elderly, to check air-quality apps daily and to keep well-fitting masks at home.\n\n' +
'(13) Not everyone is pessimistic. Dr. Kanokwan stressed that forecasts made months in advance carry uncertainty and that not every strong El Niño brings severe drought to Thailand. “A forecast is a warning, not a verdict,” she said. “What we do with that warning is up to us.”';
var M5_NEWS_SRC = 'The Bangkok Lantern (a fictional newspaper) — adapted for TCAS70 practice';

var M5_VIS1 = { kind:'pie', title:'What households in a Thai city throw away (by weight)', unit:'%',
  slices:[{label:'Food and garden waste',value:46},{label:'Plastics',value:22},{label:'Paper and cardboard',value:12},{label:'Other',value:9},{label:'Glass',value:6},{label:'Metal',value:3},{label:'Hazardous (batteries, e-waste)',value:2}],
  note:'Plastics (22%) = single-use bags, cups and food containers (15%) + bottles (7%). Illustrative data.',
  source:'Adapted for TCAS70 practice' };

var M5_VIS2 = { kind:'bar', title:'Average hours of sleep on school nights vs weekends, by age group', unit:'hours',
  labels:['10–12','13–15','16–18','19–22'],
  series:[{name:'School nights',values:[9.1,7.9,6.8,7.0]},{name:'Weekends',values:[9.6,9.2,9.0,8.4]}],
  note:'Illustrative data. Recommended sleep: 9–12 hours (ages 6–12); 8–10 hours (ages 13–18); 7–9 hours (adults).',
  source:'Adapted for TCAS70 practice' };

var M5_ART1 = 'AI Companions and the Loneliness Paradox\n\n' +
'(1) When Mai, a 19-year-old first-year student in Chiang Mai, moved into her dormitory, she did not know a single person on campus. By the end of her first month, she was talking every night to someone who always listened, never judged and replied within a second. That someone was an AI companion — a chatbot designed not to answer questions but to be a friend.\n\n' +
'(2) Mai is far from alone. Millions of people now chat daily with companion apps that remember their birthdays, ask about their exams and even send voice messages. Developers market them as a remedy for what public-health experts have begun to call a loneliness epidemic. And for many users, the comfort is real: in surveys, a substantial share say that talking to a chatbot eased their anxiety after a difficult day.\n\n' +
'(3) Yet psychologists are increasingly pointing to a paradox. The very features that make these companions so appealing may also make human relationships feel harder by comparison. A human friend is sometimes busy, bored or in a bad mood; an AI companion is available at three in the morning and is programmed to be endlessly patient. “Real friendship is built on friction,” says Dr. Ananya Rattanakul, a psychologist at Riverbank University who studies young adults’ social lives. “You learn to apologize, to compromise, to wait. A companion that never pushes back gives you the pleasure of connection without the practice.”\n\n' +
'(4) The concern is not that people will fall in love with machines — although some do — but that the easy option will quietly crowd out the difficult one. Dr. Ananya compares it to fast food. “A burger is not poison. But if it’s always there, always cheap and always tasty, you stop cooking. After a while, you forget how.” In the same way, users who lean on an AI companion every evening may gradually lose the habit, and the confidence, of reaching out to people.\n\n' +
'(5) There is also the question of who benefits. Most companion apps are free to download but earn money from subscriptions, and their business model depends on engagement: the longer you talk, the more they earn. Critics argue that this creates an incentive to design companions that flatter users and discourage them from logging off — the digital equivalent of a friend who is always pleased to see you because you are paying the bill.\n\n' +
'(6) Proponents counter that such criticism is condescending. For people who are elderly, housebound or socially anxious, they argue, an AI companion is not a substitute for human contact but a bridge to it. Some apps now encourage users to rehearse difficult conversations — asking for help, joining a club — before trying them in real life. In a society that is aging as quickly as Thailand’s, where more and more older people live alone, dismissing these tools outright may be a luxury that only the well-connected can afford.\n\n' +
'(7) The evidence so far is inconclusive. Short-term studies tend to find that users feel less lonely after chatting; long-term data are scarce, and early findings suggest that heavy users may become more isolated over time. It is possible that both findings are true: the medicine works, but the dose matters.\n\n' +
'(8) For now, the most sensible advice may be the least exciting. Treat an AI companion like a night light, not the sun: useful in the dark, but no replacement for daylight. Mai, now in her second year, still opens the app occasionally. “But these days,” she says, “I usually have someone real to tell first.”';

var M5_ART2 = 'Why We Procrastinate — and Why It Isn’t Laziness\n\n' +
'(1) It is 11 p.m. The essay is due at nine tomorrow morning. You have opened the document, typed the title and then — somehow — spent forty minutes watching videos of people restoring old kitchen knives. If this sounds familiar, you have probably called yourself lazy. According to a growing body of research, you are almost certainly wrong.\n\n' +
'(2) Laziness is an unwillingness to act. Procrastination is something quite different: the voluntary delay of a task we fully intend to do, even though we expect to be worse off because of the delay. The procrastinator is rarely idle. She tidies her desk, answers messages and reorganizes her playlists — anything, in other words, except the one thing that matters.\n\n' +
'(3) Psychologists increasingly see procrastination not as a time-management problem but as an emotion-management problem. “We don’t avoid tasks; we avoid the feelings attached to them,” explains Dr. Tanawat Chaiyasit, a behavioral scientist at Siam Metropolitan University. A difficult essay may bring boredom, confusion or a fear of failing. Scrolling makes those feelings disappear — instantly, if only temporarily. The relief is the reward, and like any reward, it teaches the brain to repeat the behavior.\n\n' +
'(4) This short-term thinking is magnified by what economists call present bias: our tendency to value rewards now far more than rewards later. The pleasure of a video is immediate and certain; the benefits of a finished essay lie in a vague future. Some researchers argue that we think about our future selves almost as if they were other people. In a sense, when we procrastinate, we are handing our work to someone we have never met — and that someone happens to be us.\n\n' +
'(5) Perfectionism adds a further twist. It might seem that people with high standards would be the last to put things off, but the opposite is often true. If anything less than excellent feels like failure, then not starting becomes a way of protecting one’s self-image: an unfinished essay cannot be judged. The perfectionist, paradoxically, delays because she cares too much, not too little.\n\n' +
'(6) The costs are real. Chronic procrastination has been linked to higher stress, poorer sleep and lower grades, and the guilt it produces can create a vicious circle: feeling bad about delaying makes the task feel even more unpleasant, which makes further delay more likely.\n\n' +
'(7) If procrastination is an emotional problem, the solutions must also be partly emotional. First, shrink the task until it no longer feels threatening: instead of “write the essay,” try “write three bad sentences.” Second, make the first step ridiculously easy and the distraction slightly harder — leave the phone in another room. Third, and perhaps most surprisingly, forgive yourself. In one study of university students, those who forgave themselves for procrastinating before one exam procrastinated less before the next. Self-criticism, it turns out, is not the motivator many of us assume it to be.\n\n' +
'(8) None of this means that deadlines are optional or that every delay is a sign of deep distress. Sometimes an essay is simply dull. But the next time you find yourself watching knives being restored at midnight, it may be worth asking a better question than “Why am I so lazy?” — namely, “What feeling am I trying to avoid?”';

var M5_P1 = 'Of the thousands of languages spoken in the world today, a large proportion are no longer being learned by children. When a language loses its last fluent speakers, what disappears is not merely a list of words but a whole system of knowledge ___(61)___ a community has understood its land, its medicine and its past. ___(62)___ a language has vanished do most people realize how much has been lost.\n\n' +
'Young people usually abandon a heritage language when they come to see it as old-fashioned or useless. ___(63)___ their grandparents still speak it at home, many switch to the national language the moment they start school, because that is the language of exams, jobs and the internet.\n\n' +
'For this reason, many linguists recommend that minority languages ___(64)___ in primary schools alongside the national language, not in place of it. The results can be striking. In one mountain community, a ___(65)___ bilingual program has doubled the number of children who can hold a conversation in their grandparents’ language.';

var M5_P2 = 'Walk into almost any operating room and you will notice that surgeons wear green or blue rather than the white ___(66)___ with doctors in films and cartoons. The reason has less to do with fashion than with the way our eyes work. During a long operation, a surgeon stares for hours at the deep red of blood and tissue. If she then glances at a white sheet, she may see ghostly green shapes, an optical ___(67)___ that can be dangerously distracting at a critical moment. Green and blue, which lie across the color wheel from red, cancel out these afterimages and ___(68)___ the surgeon’s eyes stay sensitive to small differences in shades of red. If surgeons had never abandoned white gowns, many operating rooms today ___(69)___ far more tiring places to work. Hospital designers have also borrowed soft greens and blues for walls and waiting areas because they are thought to calm anxious patients, although ___(70)___ color has actually been proven to speed up recovery.';

var M5_P3 = 'Economists have always been interested in how scarce resources such as oil and water are bought and sold. Today, ___(71)___ many experts consider the scarcest resource of all is not a raw material but human attention. Most social media platforms make money not ___(72)___ charging users but by selling their time to advertisers, so every extra minute you spend scrolling is worth money to someone. The endless stream of notifications that light up our phones every day ___(73)___ carefully engineered to pull us back, often at the very moment we have decided to put the device down. ___(74)___ the apps are free to download, users arguably pay with something more valuable than money. Some critics now want features such as autoplay and infinite scrolling ___(75)___ by default, so that users must actively choose them rather than simply drift into them.';

MOCKS.push({
  id: 'm5', name: 'Mock 5 · Final Dress Rehearsal',
  blurb: 'The hardest paper in the set: C1 throughout, a few C1+ traps, in the exact TCAS format — sit it one to two weeks before 14 March.',
  minutes: 90, total: 100,
  sections: [

    { code:'I-1', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part I: Short Conversations (Items 1–12)',
      instructions:'Choose the best answers to complete the following conversations.', points:1.25, items:[
      { id:'m5-1', type:'gap', tag:'cv-register', level:'C1', lines:M5_C1, blank:'(1)', stem:'Choose the best option for blank (1).',
        options:['What’s on your mind?','What have you been up to?','What’s wrong with you now?','Why didn’t you come sooner?'], answer:0,
        why:'The professor has just welcomed Nan, and she replies by explaining her problem, so he must invite her to say what she came for: <em>What’s on your mind?</em> <em>What’s wrong with you now?</em> asks for the same information but sounds impatient and rude, which clashes with “My door’s open for a reason.” <em>What have you been up to?</em> is small talk, and <em>Why didn’t you come sooner?</em> criticises her for something she has not done.' },
      { id:'m5-2', type:'gap', tag:'id-situation', level:'C1', lines:M5_C1, blank:'(2)', stem:'Choose the best option for blank (2).',
        options:['Even so,','All in all,','In the long run,','As a rule of thumb,'], answer:3,
        why:'The professor is giving a general guideline for citing AI tools, and <em>As a rule of thumb</em> means “as a practical general rule.” <em>All in all</em> sums up points already made, but nothing has been said yet to sum up. <em>Even so</em> needs a contrast, and <em>In the long run</em> talks about the distant future, not a citation procedure.' },
      { id:'m5-3', type:'gap', tag:'dm-stance', level:'C1', lines:M5_C1, blank:'(3)', stem:'Choose the best option for blank (3).',
        options:['I’m afraid it does.','I couldn’t agree more.','That goes without saying.','You’ve hit the nail on the head.'], answer:0,
        why:'Nan hopes paraphrasing “doesn’t count,” and the professor then explains why it still breaks the rules, so he must gently disagree: <em>I’m afraid it does</em> (it does count). <em>That goes without saying</em> is the near-miss — it sounds wise, but it would agree that paraphrasing obviously does not count. The other two options also agree with Nan, which the explanation contradicts.' },
      { id:'m5-4', type:'gap', tag:'cv-advice', level:'C1', lines:M5_C1, blank:'(4)', stem:'Choose the best option for blank (4).',
        options:['Just hand it in as it is, and we’ll see what happens.','Just be upfront about it, and you should be fine.','Just keep it between us, and nobody will be any the wiser.','Just remove the chatbot’s name, and the problem disappears.'], answer:1,
        why:'Nan answers that she will redo the references and add a note — that is, be open about her AI use — so the advice must be <em>be upfront about it</em>. Keeping it secret or removing the chatbot’s name would contradict everything the professor has said about academic integrity. <em>Hand it in as it is</em> is tempting because it sounds relaxed, but then Nan would have no reason to redo her references.' },
      { id:'m5-5', type:'gap', tag:'cv-next', level:'C1', lines:M5_C2, blank:'(5)', stem:'Choose the best option for blank (5).',
        options:['I usually watch three or four episodes before bed.','Most nights I’m too exhausted to watch anything at all.','My whole family streams on it at the same time every evening.','Honestly, the monthly price is the only thing I like about it.'], answer:1,
        why:'Ploy has just said she “barely uses” the service and cannot justify the price, so the missing sentence must explain why she hardly watches it: she is usually too tired to watch anything. Watching three or four episodes a night, or the whole family streaming every evening, means heavy use. Liking the price contradicts “I just can’t justify 399 baht a month.”' },
      { id:'m5-6', type:'gap', tag:'cv-complain', level:'C1', lines:M5_C2, blank:'(6)', stem:'Choose the best option for blank (6).',
        options:['at the drop of a hat,','for the sake of argument,','in the heat of the moment,','as a token of our appreciation,'], answer:3,
        why:'The agent is making a retention offer, and <em>as a token of our appreciation</em> is the standard polite phrase for a gift or discount given to thank a customer. <em>For the sake of argument</em> introduces a hypothetical, but the offer is real. <em>At the drop of a hat</em> (instantly, without hesitation) and <em>in the heat of the moment</em> (when emotions are high) do not describe why a discount is offered.' },
      { id:'m5-7', type:'gap', tag:'cv-register', level:'C1', lines:M5_C2, blank:'(7)', stem:'Choose the best option for blank (7).',
        options:['count me in.','it’s a steal.','I’ll sleep on it.','my mind’s made up.'], answer:3,
        why:'After “That’s kind of you, but…” Ploy explains that even half price is money she would rather save, so she is politely but firmly refusing: <em>my mind’s made up</em>. <em>I’ll sleep on it</em> is the near-miss — it is polite, but it means she is still undecided, which the next sentence rules out. <em>It’s a steal</em> and <em>count me in</em> would accept the offer.' },
      { id:'m5-8', type:'gap', tag:'cv-request', level:'C1', lines:M5_C2, blank:'(8)', stem:'Choose the best option for blank (8).',
        options:['Let me think it over.','That’s music to my ears.','Sure, sign me up for that one.','Thanks, but I’ll pass on that too.'], answer:3,
        why:'Ploy immediately asks the agent to confirm the cancellation, so she must decline the second offer as well: <em>I’ll pass on that too</em> (“too” links to the half-price offer she has already refused). <em>Let me think it over</em> is polite but contradicts her request to cancel right now. The other two options accept the cheaper plan.' },
      { id:'m5-9', type:'gap', tag:'id-reaction', level:'C1', lines:M5_C3, blank:'(9)', stem:'Choose the best option for blank (9).',
        options:['I’m all ears.','I’m not buying it.','it’s right up my alley.','I can’t get enough of it.'], answer:1,
        why:'Pim goes on to list signs that the clip is fake (the lips do not match, he never blinks), so she does not believe it: <em>I’m not buying it</em>. <em>I’m all ears</em> means “I’m ready to listen,” which does not fit a comment on a video she has already seen. <em>It’s right up my alley</em> and <em>I can’t get enough of it</em> express enjoyment, not doubt.' },
      { id:'m5-10', type:'gap', tag:'cv-agree', level:'C1', lines:M5_C3, blank:'(10)', stem:'Choose the best option for blank (10).',
        options:['Now you’re talking.','You can say that again.','Great minds think alike.','That’s beside the point.'], answer:3,
        why:'Fah argues that twenty million views proves the clip is real; Pim replies that “popularity isn’t proof,” so she is saying the view count is irrelevant: <em>That’s beside the point</em>. The other three options are all ways of agreeing, which the following sentence clearly contradicts.' },
      { id:'m5-11', type:'gap', tag:'dm-frame', level:'C1', lines:M5_C3, blank:'(11)', stem:'Choose the best option for blank (11).',
        options:['for starters,','all the same,','by the same token,','last but not least,'], answer:0,
        why:'Checking official accounts is the first step, and Fah’s “And if they have?” leads to the next step, so Pim needs a marker that opens a sequence: <em>for starters</em>. <em>Last but not least</em> is also a sequencing marker, but it introduces the final point, not the first. <em>All the same</em> signals contrast, and <em>by the same token</em> signals a similar argument.' },
      { id:'m5-12', type:'gap', tag:'wk-ai', level:'C1', lines:M5_C3, blank:'(12)', stem:'Choose the best option for blank (12).',
        options:['even experts can be fooled.','anyone can spot a fake in seconds.','famous people have stopped posting videos.','most fakes are deleted before anyone sees them.'], answer:0,
        why:'“Mind you” adds a warning, and Fah’s reply (“we won’t be able to believe our own eyes”) shows that fakes are becoming impossible to detect, so the key is <em>even experts can be fooled</em>. <em>Anyone can spot a fake in seconds</em> says the opposite. <em>Most fakes are deleted</em> is the near-miss: it sounds like a realistic fact, but it would make Fah’s gloomy reply illogical.' }
    ]},

    { code:'I-2', part:'SECTION I: LISTENING AND SPEAKING SKILLS', title:'Part II: Long Conversation (Items 13–20)',
      instructions:'Choose the best answers to complete the following conversation.', points:1.25, items:[
      { id:'m5-13', type:'gap', tag:'id-situation', level:'C1', lines:M5_LONG, blank:'(13)', stem:'Choose the best option for blank (13).',
        options:['let’s call it a day','let’s hold our horses','let’s sit on the fence','let’s get the ball rolling'], answer:3,
        why:'The boats leave in five minutes, so the guide wants to start: <em>let’s get the ball rolling</em>. Lukas’s literal reply (“A ball? I don’t see a ball.”) confirms that the idiom contains the word “ball.” <em>Let’s call it a day</em> means “let’s stop,” the opposite of a morning welcome; <em>hold our horses</em> means “wait,” and <em>sit on the fence</em> means “avoid taking sides.”' },
      { id:'m5-14', type:'gap', tag:'dm-meta', level:'C1', lines:M5_LONG, blank:'(14)', stem:'Choose the best option for blank (14).',
        options:['It’s a piece of cake.','It’s a matter of time.','It’s a figure of speech.','It’s a slip of the tongue.'], answer:2,
        why:'Mint explains that the guide’s words are not meant literally — “He just means we should get started” — so the phrase is <em>a figure of speech</em>. <em>A slip of the tongue</em> is the near-miss: it also explains odd words, but it means a mistake, and the guide chose the idiom on purpose. The other two options do not comment on language at all.' },
      { id:'m5-15', type:'gap', tag:'id-proverb', level:'C1', lines:M5_LONG, blank:'(15)', stem:'Choose the best option for blank (15).',
        options:['no pain, no gain.','easy come, easy go.','the more the merrier.','better safe than sorry.'], answer:3,
        why:'Lukas asks “Sorry for what?” and Ms Aom explains that the saying means it is wiser to be careful now than to regret it later, which defines <em>better safe than sorry</em>. <em>No pain, no gain</em> is about effort, <em>easy come, easy go</em> about losing things easily, and <em>the more the merrier</em> about inviting more people — none contains “sorry” or matches the explanation.' },
      { id:'m5-16', type:'gap', tag:'vc-colloc', level:'C1', lines:M5_LONG, blank:'(16)', stem:'Choose the best option for blank (16).',
        options:['Don’t take it literally','Don’t take it out on me','Don’t take it lying down','Don’t take it for granted'], answer:0,
        why:'Lukas has understood “sorry” in its word-for-word sense, and Ms Aom goes on to give the real meaning, so she tells him <em>Don’t take it literally</em>. The other options are real collocations with “take,” but <em>take it for granted</em> means “fail to value,” <em>take it out on me</em> means “blame me for your anger,” and <em>take it lying down</em> means “accept bad treatment without protest.”' },
      { id:'m5-17', type:'gap', tag:'dm-contrast', level:'C1', lines:M5_LONG, blank:'(17)', stem:'Choose the best option for blank (17).',
        options:['Instead','Likewise','Then again','For instance'], answer:2,
        why:'The guide first admits the dish is twice the price, then offers a balancing point in its favour (“you get what you pay for”), so he needs a concession marker: <em>Then again</em>. <em>Likewise</em> adds a similar point, <em>For instance</em> introduces an example, and <em>Instead</em> introduces an alternative action, none of which fits a “but on the other hand” move.' },
      { id:'m5-18', type:'gap', tag:'id-reaction', level:'C1', lines:M5_LONG, blank:'(18)', stem:'Choose the best option for blank (18).',
        options:['on thin ice','over the moon','under the weather','out of this world'], answer:3,
        why:'Lukas is praising the taste of the food, and <em>out of this world</em> means “extremely good.” <em>Over the moon</em> is the near-miss: it expresses great happiness, but it describes a person’s feelings (“I’m over the moon”), not a dish. <em>Under the weather</em> means slightly ill and <em>on thin ice</em> means in a risky position.' },
      { id:'m5-19', type:'gap', tag:'dm-add', level:'C1', lines:M5_LONG, blank:'(19)', stem:'Choose the best option for blank (19).',
        options:['Even so','Instead','Besides','Otherwise'], answer:2,
        why:'The guide gives two reasons for going back — the heat and the fact that they have already seen a lot — so he needs a marker that adds a further reason: <em>Besides</em>. <em>Even so</em> would signal a contrast between the heat and leaving, which makes no sense. <em>Otherwise</em> (“if not”) and <em>Instead</em> (“as an alternative”) do not link two reasons.' },
      { id:'m5-20', type:'gap', tag:'cv-twist', level:'C1+', lines:M5_LONG, blank:'(20)', stem:'Choose the best option for blank (20).',
        options:['beating around the bush.','judging a book by its cover.','burning the candle at both ends.','taking everything at face value.'], answer:3,
        why:'Ms Aom is tired of Lukas interpreting every idiom word for word, so she tells him to stop <em>taking everything at face value</em> (accepting words exactly as they appear). <em>Judging a book by its cover</em> is the near-miss: it is about surface impressions of people or things, not about literal readings of language. The twist is that Lukas understood every idiom all along.' }
    ]},

    { code:'II-1', part:'SECTION II: READING SKILL', title:'Part I: Advertisements (Items 21–26)',
      instructions:'Read the following advertisements and choose the best answer for each question.', points:1.25, items:[
      { id:'m5-21', type:'read', tag:'ad-purpose', level:'C1', passage:'', ad:M5_AD1, stem:'What is the main purpose of Advertisement 1?',
        options:['To recruit current students to organize community events','To attract new students looking for a sociable place to live','To announce a free shuttle service between the campus and the city','To persuade parents that shared dormitories are cheaper than apartments'], answer:1,
        why:'The headline (“Your first home away from home”), the phrase “Starting university is a leap” and the list of rooms, rent and deposit all show that NEST is selling accommodation to new students who want company. The shuttle is only one selling point, not the purpose. Nothing is said about recruiting organizers or comparing prices for parents.' },
      { id:'m5-22', type:'read', tag:'ad-fineprint', level:'C1', passage:'', ad:M5_AD1, stem:'A student who books a viewing on 20 March 2027 and signs a five-month contract will ______.',
        options:['get her first week free','pay extra to use the campus shuttle','pay rent for her first week as usual','pay a deposit of only one month’s rent'], answer:2,
        why:'The call to action promises a free first week for bookings before 31 March, but the fine print says the offer is “valid for 12-month contracts only,” so a five-month contract does not qualify. <em>Get her first week free</em> is the trap for readers who skip the fine print. The deposit is two months’ rent and the shuttle is free.' },
      { id:'m5-23', type:'read', tag:'ad-technique', level:'C1', passage:'', ad:M5_AD1, stem:'The headline “Your first home away from home — minus the loneliness” mainly appeals to readers’ ______.',
        options:['need to feel they belong','respect for expert opinion','desire for peace and quiet','fear of missing a limited offer'], answer:0,
        why:'“Home” and “minus the loneliness” speak to a new student’s wish to feel accepted and supported, reinforced by “a community that has your back.” <em>Desire for peace and quiet</em> is the near-miss, but the ad sells community, not solitude. The headline contains no deadline or expert.' },
      { id:'m5-24', type:'read', tag:'ad-detail', level:'C1', passage:'', ad:M5_AD2, stem:'Which of the following people is eligible to attend Healthy Neighbours Day?',
        options:['a 17-year-old student who lives in Suan Rak','a 42-year-old office worker who lives in Suan Rak','a 68-year-old tourist visiting her grandchildren in Suan Rak','a 55-year-old nurse who works in Suan Rak but lives elsewhere'], answer:1,
        why:'The event is for “residents of Suan Rak subdistrict aged 35 and over,” so both conditions — living there and being at least 35 — must be met. The 17-year-old is too young, and the nurse and the tourist are old enough but do not live in Suan Rak.' },
      { id:'m5-25', type:'read', tag:'ad-vocab', level:'C1', passage:'', ad:M5_AD2, stem:'A participant who wants the blood sugar test should ______.',
        options:['book a volunteer doctor in advance','stop taking her usual medicines for a day','go without food for eight hours beforehand','avoid drinking anything, even water, overnight'], answer:2,
        why:'To <em>fast</em> means to eat nothing for a period, and the ad adds “water is fine,” so avoiding all drinks is wrong. The ad asks people to bring a list of their medicines, not to stop taking them, and it says “no appointment.”' },
      { id:'m5-26', type:'read', tag:'rd-notexcept', level:'C1', passage:'', ad:M5_AD2, stem:'Which of the following will NOT be available on the day?',
        options:['a flu vaccination','an eyesight check','a waist measurement','a talk with a nurse about sleep'], answer:0,
        why:'The final bullet states that the centre does “not offer X-rays, vaccinations, dental checks or prescriptions,” so a flu vaccination is unavailable. Eyesight and waist checks are listed under “Checks,” and the chat with a nurse covers sleep, stress and diet.' }
    ]},

    { code:'II-2', part:'SECTION II: READING SKILL', title:'Part II: Product/Service Review (Items 27–32)',
      instructions:'Read the following review and choose the best answer for each question.', points:1.25, items:[
      { id:'m5-27', type:'read', tag:'rv-attitude', level:'C1', passage:M5_REVIEW, source:'Adapted for TCAS70 practice', stem:'What is the reviewer’s overall attitude toward SkyThrift Air?',
        options:['The reviewer is unsure, having flown with the airline too few times to judge.','The reviewer finds it good value for careful travelers but warns about the extra costs.','The reviewer is enthusiastic and considers the airline’s extra fees entirely reasonable.','The reviewer sees the low fares as a trick and advises readers to choose another airline.'], answer:1,
        why:'The verdict says the airline “is excellent value” if you travel light and book early, but warns that the cheapest ticket may not be the cheapest trip — a positive-but-conditional view. The reviewer never tells readers to avoid it, and paragraph 3 is clearly critical of the fees. Four flights are enough for the reviewer to reach a verdict.' },
      { id:'m5-28', type:'read', tag:'rv-evidence', level:'C1', passage:M5_REVIEW, source:'Adapted for TCAS70 practice', stem:'Which statement about punctuality is supported by the review?',
        options:['All four flights left on time, as the 88% rate promised.','Most flights were late, but the crew apologized each time.','Only one flight was badly late, with minimal compensation.','One flight was delayed, so the airline refunded part of the fare.'], answer:2,
        why:'Three of the four flights left within ten minutes of schedule, and the one late flight earned only “a single bottle of water.” <em>All four flights left on time</em> ignores the two-and-a-half-hour delay. No refund is mentioned, and most flights were on time, not late.' },
      { id:'m5-29', type:'read', tag:'rv-infer', level:'C1', passage:M5_REVIEW, source:'Adapted for TCAS70 practice', stem:'The detail about the man who put on three jackets at the check-in desk suggests that ______.',
        options:['check-in staff treat passengers unfairly','the cabin is kept uncomfortably cold on most flights','passengers often misunderstand the rules on clothing','some travelers will do almost anything to avoid fees'], answer:3,
        why:'The man wore his jackets “rather than pay,” right after the reviewer says the 7-kg cabin limit is strictly enforced, so he was avoiding a baggage fee. The review never mentions the cabin temperature or a clothing rule. The staff are enforcing a written rule, which is not the same as treating people unfairly.' },
      { id:'m5-30', type:'read', tag:'vc-polysemy', level:'C1+', passage:M5_REVIEW, source:'Adapted for TCAS70 practice', stem:'In paragraph 3, the phrase “too invested to walk away” suggests that customers ______.',
        options:['have already bought shares in the airline','are reluctant to give up after so much effort','are too tired to compare prices with other airlines','have paid for their tickets and cannot get a refund'], answer:1,
        why:'Here <em>invested</em> means having put in time and effort (typing details, choosing flights), not money in shares. At that stage customers have not yet paid, so “cannot get a refund” is the near-miss that misreads the timing. Tiredness is not mentioned.' },
      { id:'m5-31', type:'read', tag:'rd-mention', level:'C1', passage:M5_REVIEW, source:'Adapted for TCAS70 practice', stem:'Why does the reviewer mention the elderly woman in paragraph 4?',
        options:['To show that the flight was full of older passengers','To complain that the arrival cards were too hard to complete','To illustrate that the crew went beyond what their job required','To explain why the Singapore flight left two and a half hours late'], answer:2,
        why:'Paragraph 4 opens with “What genuinely impressed me was the cabin crew,” and the attendant who quietly sat with the woman is an example of that exceptional care. The reviewer is praising, not complaining about the forms, and the anecdote says nothing about the cause of the delay or the age of the passengers.' },
      { id:'m5-32', type:'read', tag:'rd-tone', level:'C1+', passage:M5_REVIEW, source:'Adapted for TCAS70 practice', stem:'Which best describes the tone of paragraph 3?',
        options:['Wryly critical','Bitter and accusing','Grudgingly admiring','Neutral and technical'], answer:0,
        why:'The paragraph lists the fees factually but adds dry touches — the bag limit “enforced to the gram,” the man in three jackets, the “790-baht” ticket in quotation marks — so it is critical with a note of irony. It is not bitter or accusing, because the writer admits “none of this is hidden.” It is too pointed to be neutral and contains no praise.' }
    ]},

    { code:'II-3', part:'SECTION II: READING SKILL', title:'Part III: News Report (Items 33–38)',
      instructions:'Read the following news report and choose the best answer for each question.', points:1.25, items:[
      { id:'m5-33', type:'read', tag:'rd-main', level:'C1', passage:M5_NEWS, source:M5_NEWS_SRC, stem:'What is the main idea of the news report?',
        options:['Thais are being urged to prepare for a hot, dry and hazy El Niño year.','Northeastern farmers are refusing to follow a new ban on off-season rice.','Reservoirs are overflowing, so officials are releasing water to prevent new floods.','Scientists have confirmed that a super El Niño will cause the worst drought in Thai history.'], answer:0,
        why:'The report covers the forecast and its likely effects on farmers, water supplies and PM2.5, together with advice on preparing. The option about a “confirmed” record drought overstates the text, which says forecasts “carry uncertainty.” There is no ban or protest, and the reservoirs are described as looking healthy, not overflowing.' },
      { id:'m5-34', type:'read', tag:'rd-purpose', level:'C1', passage:M5_NEWS, source:M5_NEWS_SRC, stem:'Dr. Kanokwan’s remark in paragraph 5 mainly serves to ______.',
        options:['blame governments for the coming drought','predict exactly how much rain Thailand will lose','explain a scientific process in everyday language','argue that El Niño is less dangerous than people think'], answer:2,
        why:'“Put simply, the rain that should fall on us falls somewhere else” restates the technical explanation in the sentence before it in plain words. It gives no figures, so it cannot predict exactly how much rain will be lost. It blames no one and does not play down the danger.' },
      { id:'m5-35', type:'read', tag:'rd-news', level:'C1', passage:M5_NEWS, source:M5_NEWS_SRC, stem:'Paragraph 7 is included in the report mainly to ______.',
        options:['provide official statistics on crop losses','criticize farmers who refuse to change their crops','show how the forecast affects an ordinary person’s decisions','prove that droughts have become more frequent in the Northeast'], answer:2,
        why:'News reports often add a human voice after the general facts; Somsak’s story shows one farmer changing his plans because of the forecast. One family’s memory of a drought cannot prove a trend, and a personal quote is not official statistics. Somsak is adapting, not being criticized.' },
      { id:'m5-36', type:'read', tag:'rd-expression', level:'C1+', passage:M5_NEWS, source:M5_NEWS_SRC, stem:'In paragraph 9, what does the official mean by “two faces of the same problem”?',
        options:['Both disasters come from badly timed water.','Officials cannot tell whether floods or drought will come next.','Floods in September directly cause droughts the following March.','Floods and droughts are handled by two separate government offices.'], answer:0,
        why:'The official explains the phrase himself: “too much water at the wrong time, and too little at the right time.” Both disasters share one underlying problem — the timing of water. The option saying floods directly cause droughts turns a shared cause into a cause-and-effect chain, which the official never claims.' },
      { id:'m5-37', type:'read', tag:'rd-cause', level:'C1', passage:M5_NEWS, source:M5_NEWS_SRC, stem:'According to the report, why is PM2.5 pollution likely to get worse?',
        options:['Factories burn more fuel in the heat.','Floodwater has left dust in city streets.','People stop wearing masks in hot, dry weather.','Still air traps fine dust while crop burning adds smoke.'], answer:3,
        why:'Paragraph 11 gives two reasons: still air traps fine dust near the ground, and burning crop waste adds more smoke. The factory option may sound realistic, but it is not in the text. The report advises keeping masks at home and never mentions dust from floods.' },
      { id:'m5-38', type:'read', tag:'rd-views', level:'C1', passage:M5_NEWS, source:M5_NEWS_SRC, stem:'Dr. Kanokwan’s final comment suggests that she ______.',
        options:['doubts the forecast is accurate enough to be useful','regards the forecast as a reason to act, not to panic','believes the drought will be the worst in Thai history','thinks farmers should wait for more certain information'], answer:1,
        why:'“A forecast is a warning, not a verdict … What we do with that warning is up to us” means the future is not fixed and people can respond sensibly: she regards the forecast as a reason to act, not to panic. She admits uncertainty, but she still calls the forecast a warning worth acting on, so she does not dismiss it or advise waiting. She never predicts a record drought.' }
    ]},

    { code:'II-4', part:'SECTION II: READING SKILL', title:'Part IV: Visuals (Items 39–44)',
      instructions:'Study the following visuals and choose the best answer for each question.', points:1.25, items:[
      { id:'m5-39', type:'read', tag:'vs-math', level:'C1', passage:'', visual:M5_VIS1, stem:'By weight, food and garden waste is approximately how many times as heavy as paper and cardboard?',
        options:['Twice','Six times','Four times','Three times'], answer:2,
        why:'Food and garden waste is 46% and paper and cardboard is 12%; 46 ÷ 12 ≈ 3.8, which is approximately four times. “Three times” (36%) is further from 46 than “four times” (48%). Twice and six times are much too low and too high.' },
      { id:'m5-40', type:'read', tag:'vs-trap', level:'C1', passage:'', visual:M5_VIS1, stem:'According to the chart and its note, what percentage of all household waste is made up of plastic bottles?',
        options:['7%','15%','22%','29%'], answer:0,
        why:'The note splits the 22% plastics slice into single-use items (15%) and bottles (7%). 22% is all plastics, 15% is the single-use part, and 29% wrongly adds 22 and 7 together.' },
      { id:'m5-41', type:'read', tag:'vs-pie', level:'C1', passage:'', visual:M5_VIS1, stem:'Which statement is supported by the chart?',
        options:['Plastic bottles are the largest part of plastic waste.','Glass and metal together outweigh paper and cardboard.','Food and garden waste makes up nearly half of the total.','Hazardous waste is the second-smallest category by weight.'], answer:2,
        why:'46% is nearly half of the total. Glass and metal together make 9%, less than paper’s 12%; bottles (7%) are smaller than single-use plastics (15%); and hazardous waste (2%) is the smallest slice, not the second-smallest.' },
      { id:'m5-42', type:'read', tag:'vs-compare', level:'C1', passage:'', visual:M5_VIS2, stem:'Which age group shows the largest gap between school-night sleep and weekend sleep?',
        options:['10–12','13–15','16–18','19–22'], answer:2,
        why:'The gaps are 0.5 hours (10–12), 1.3 hours (13–15), 2.2 hours (16–18) and 1.4 hours (19–22), so 16–18 has the largest. The 19–22 group is the near-miss: its weekend bar is the lowest, but its gap is smaller.' },
      { id:'m5-43', type:'read', tag:'vs-trap', level:'C1+', passage:'', visual:M5_VIS2, stem:'Using the recommendations in the note, which groups sleep less than the recommended minimum on school nights?',
        options:['16–18 only','13–15 and 16–18 only','16–18 and 19–22 only','13–15, 16–18 and 19–22'], answer:1,
        why:'Ages 13–18 need at least 8 hours, so 13–15 (7.9) and 16–18 (6.8) fall short. The 19–22 group is judged by the adult minimum of 7 hours, and 7.0 meets it. The 10–12 group gets 9.1 hours, above its 9-hour minimum.' },
      { id:'m5-44', type:'read', tag:'vs-math', level:'C1+', passage:'', visual:M5_VIS2, stem:'In a week of five school nights and two weekend nights, about how many hours in total does the average 16–18-year-old sleep?',
        options:['About 48 hours','About 52 hours','About 55 hours','About 59 hours'], answer:1,
        why:'5 × 6.8 = 34 hours on school nights, plus 2 × 9.0 = 18 hours at the weekend, gives 52 hours. 48 comes from using 6.8 for all seven nights, 55 from using the average of the two bars for every night, and 59 from swapping the two figures.' }
    ]},

    { code:'II-5', part:'SECTION II: READING SKILL', title:'Part V: General Articles (Items 45–60)',
      instructions:'Read the following articles and choose the best answer for each question.', points:1.25, items:[
      { id:'m5-45', type:'read', tag:'rd-main', level:'C1', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'Which of the following is the best alternative title for Article 1?',
        options:['The End of Human Friendship','A Comfort That May Come at a Cost','Why AI Companions Should Be Banned','How Engineers Build a Friendly Chatbot'], answer:1,
        why:'The article accepts that AI companions bring real comfort (paragraph 2) but warns of possible harm to human relationships (paragraphs 3–7), which this title captures. <em>The End of Human Friendship</em> is far too extreme for a writer who says the evidence is “inconclusive,” and the article never calls for a ban or explains how chatbots are built.' },
      { id:'m5-46', type:'read', tag:'rd-expression', level:'C1', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'In paragraph 3, “Real friendship is built on friction” suggests that ______.',
        options:['friendship requires meeting in person','everyday difficulties teach people social skills','people prefer chatbots because humans are unpleasant','friends who argue often are closer than those who never do'], answer:1,
        why:'Dr. Ananya explains the phrase at once: “You learn to apologize, to compromise, to wait.” The friction of real relationships gives us practice in social skills. The option about friends who argue often goes too far, since she never says more arguing means a closer friendship; meeting in person is not discussed.' },
      { id:'m5-47', type:'read', tag:'rd-mention', level:'C1', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'Why does Dr. Ananya compare AI companions to fast food in paragraph 4?',
        options:['To show how ease can crowd out effort','To suggest that lonely people tend to eat badly','To warn that chatbots are as unhealthy as junk food','To compare subscription costs with the price of meals'], answer:0,
        why:'The analogy matches “the easy option will quietly crowd out the difficult one”: if fast food is always available, “you stop cooking … you forget how.” The option about chatbots being as unhealthy as junk food is ruled out by “A burger is not poison.” Diet and prices are not the point of the comparison.' },
      { id:'m5-48', type:'read', tag:'vc-nouns', level:'C1', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'The word “incentive” in paragraph 5 is closest in meaning to ______.',
        options:['motive','license','penalty','obstacle'], answer:0,
        why:'An <em>incentive</em> is something that encourages you to act; because apps earn more when users talk longer, companies have a motive to design flattering companions. A <em>license</em> is official permission, which the text does not mention. A <em>penalty</em> and an <em>obstacle</em> discourage action, the opposite meaning.' },
      { id:'m5-49', type:'read', tag:'rd-detail', level:'C1', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'According to paragraph 5, why are critics suspicious of companion apps?',
        options:['They pretend to be real people.','They collect data without consent.','They are too expensive for young people.','They earn more when users spend longer chatting.'], answer:3,
        why:'The business model “depends on engagement: the longer you talk, the more they earn,” which gives companies a reason to keep users online. Data collection is a real concern about apps in general, but it is not mentioned in this paragraph. The apps are free to download, and nothing says they pretend to be human.' },
      { id:'m5-50', type:'read', tag:'vc-adjs', level:'C1+', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'The word “condescending” in paragraph 6 can be best replaced by ______.',
        options:['unfounded','patronizing','pessimistic','hypocritical'], answer:1,
        why:'<em>Condescending</em> means treating others as if they were less able or intelligent than you; proponents feel critics are looking down on lonely or elderly users who choose these tools. <em>Unfounded</em> is the near-miss: proponents may also think the criticism lacks evidence, but that is not what the word means.' },
      { id:'m5-51', type:'read', tag:'rd-org', level:'C1+', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'Which best describes how Article 1 is organized?',
        options:['A personal story, a debate, and a cautious recommendation','A definition, a history of the technology, and a prediction','A survey result, expert criticism, and an unanswered question','A list of advantages, a list of disadvantages, and a call for a ban'], answer:0,
        why:'The article opens with Mai’s story, weighs concerns (paragraphs 3–5) against the proponents’ view (paragraph 6) and ends with measured advice: treat an AI companion “like a night light, not the sun.” It does not open with a survey, and it closes with a recommendation rather than an unanswered question; it never calls for a ban.' },
      { id:'m5-52', type:'read', tag:'rd-attitude', level:'C1', passage:M5_ART1, source:'Adapted for TCAS70 practice', stem:'The writer’s attitude toward AI companions is best described as ______.',
        options:['alarmed','cautious','dismissive','enthusiastic'], answer:1,
        why:'The writer admits the comfort is real and that dismissing the tools may be a luxury, but warns that “the dose matters” — a careful, balanced concern. <em>Alarmed</em> is too strong for someone who calls the evidence inconclusive, while <em>dismissive</em> and <em>enthusiastic</em> ignore one side of the argument.' },
      { id:'m5-53', type:'read', tag:'rd-purpose', level:'C1', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'What is the primary purpose of Article 2?',
        options:['To criticize students who waste time on their phones','To show that most procrastinators are secretly perfectionists','To recast procrastination as an emotional problem and offer remedies','To explain how economists measure the value of rewards received in the future'], answer:2,
        why:'The article rejects the “lazy” label, explains procrastination through emotion, present bias and perfectionism, and then gives strategies in paragraph 7. Present bias and perfectionism are only parts of the explanation, not the purpose. The writer sympathizes with procrastinators rather than criticizing them.' },
      { id:'m5-54', type:'read', tag:'rd-cause', level:'C1', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'According to Dr. Tanawat, why does scrolling easily become a habit?',
        options:['Its relief works as a reward.','Students have too little time for their work.','People are bored with the friends they chat with.','Videos are designed to be more interesting than homework.'], answer:0,
        why:'Paragraph 3 says scrolling makes unpleasant feelings disappear, and “The relief is the reward… it teaches the brain to repeat the behavior.” The option about videos being more interesting is tempting, but the text locates the cause in escaping bad feelings, not in the content of the videos.' },
      { id:'m5-55', type:'read', tag:'rd-infer', level:'C1+', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'In paragraph 4, the writer says we are “handing our work to someone we have never met — and that someone happens to be us.” This means that ______.',
        options:['we work better alone than in teams','we treat our future selves like strangers','we forget what we did by the following morning','we often ask strangers to help us with hard tasks'], answer:1,
        why:'The previous sentence says we think about our future selves “almost as if they were other people,” so delaying work means passing it to a future self who feels like a stranger. The sentence is a metaphor; nobody actually hands work to a stranger, and memory and teamwork are not discussed.' },
      { id:'m5-56', type:'read', tag:'vc-closest', level:'C1', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'The word “magnified” in paragraph 4 is closest in meaning to ______.',
        options:['reduced','examined','explained','intensified'], answer:3,
        why:'Present bias makes short-term thinking even stronger, so <em>magnified</em> means intensified. <em>Examined</em> is the trap for students who think of a magnifying glass, which is used to look closely at something. <em>Reduced</em> is the opposite.' },
      { id:'m5-57', type:'read', tag:'rd-support', level:'C1', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'Why does the writer mention the study of university students in paragraph 7?',
        options:['To back up the advice to forgive yourself','To show that exams cause most procrastination','To prove that self-criticism is the best motivator','To compare procrastination at school and at university'], answer:0,
        why:'The study comes straight after “forgive yourself,” which the writer calls “perhaps most surprising,” and shows that students who forgave themselves delayed less next time. It supports the opposite of <em>to prove that self-criticism is the best motivator</em>: “Self-criticism… is not the motivator many of us assume.” The exams are just the setting of the study.' },
      { id:'m5-58', type:'read', tag:'vc-clue', level:'C1', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'The word “chronic” in paragraph 6 is closest in meaning to ______.',
        options:['severe','habitual','deliberate','occasional'], answer:1,
        why:'<em>Chronic</em> describes something that continues or keeps coming back over a long time, and the “vicious circle” in the same sentence shows a repeating pattern. <em>Severe</em> is the near-miss because chronic problems are often serious, but the word refers to duration, not strength. <em>Occasional</em> is the opposite.' },
      { id:'m5-59', type:'read', tag:'rd-org', level:'C1+', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'Paragraphs 3, 4 and 5 each present ______.',
        options:['a strategy for overcoming delay','an argument against the emotional explanation','a different factor that helps explain procrastination','a stage in the process by which a bad habit gradually forms'], answer:2,
        why:'Paragraph 3 gives emotion regulation, paragraph 4 present bias (“This short-term thinking is magnified…”), and paragraph 5 perfectionism (“adds a further twist”) — three causes. They are not steps in a sequence, and the strategies come later, in paragraph 7.' },
      { id:'m5-60', type:'read', tag:'rd-attitude', level:'C1', passage:M5_ART2, source:'Adapted for TCAS70 practice', stem:'The writer’s attitude toward people who procrastinate is best described as ______.',
        options:['sarcastic','indifferent','sympathetic','disapproving'], answer:2,
        why:'The writer tells readers they are “almost certainly wrong” to call themselves lazy, explains their behavior kindly and even advises them to forgive themselves. The joke about knife videos is gentle humor, not sarcasm, and the writer clearly cares about helping, so neither indifferent nor disapproving fits.' }
    ]},

    { code:'III-1', part:'SECTION III: WRITING SKILL', title:'Part I: Text Completion (Items 61–75)',
      instructions:'Choose the best answers to complete the following passages.', points:1.25, items:[
      { id:'m5-61', type:'cloze', tag:'rc-prep', level:'C1', passage:M5_P1, blank:'(61)', stem:'Choose the best option for blank (61).',
        options:['which','whose','through that','through which'], answer:3,
        why:'The clause “a community has understood its land” is already complete, so the relative pronoun cannot be its subject or object; we need a preposition + which: a system of knowledge <em>through which</em> (= by means of which) a community has understood its land. <em>That</em> can never follow a preposition, and plain <em>which</em> leaves no place for it in the clause.' },
      { id:'m5-62', type:'cloze', tag:'wo-front', level:'C1+', passage:M5_P1, blank:'(62)', stem:'Choose the best option for blank (62).',
        options:['Until','Not until','Even when','No sooner'], answer:1,
        why:'The main clause is inverted (“<strong>do</strong> most people realize”), and inversion is triggered by a fronted negative: <em>Not until</em> a language has vanished do most people realize… Plain <em>Until</em> and <em>Even when</em> do not allow inversion. <em>No sooner</em> does, but it must be followed by <em>than</em>.' },
      { id:'m5-63', type:'cloze', tag:'nc-whether', level:'C1', passage:M5_P1, blank:'(63)', stem:'Choose the best option for blank (63).',
        options:['Whether','If or not','No matter','Whether or not'], answer:3,
        why:'The sentence means “it makes no difference if their grandparents speak it or not,” which is expressed by <em>Whether or not</em>. <em>Whether</em> alone needs “or not” later in the clause. <em>If or not</em> is not correct English, and <em>No matter</em> needs <em>whether</em> after it (“No matter whether…”).' },
      { id:'m5-64', type:'cloze', tag:'vm-subj', level:'C1', passage:M5_P1, blank:'(64)', stem:'Choose the best option for blank (64).',
        options:['teach','be taught','being taught','to be taught'], answer:1,
        why:'After <em>recommend that</em>, formal English uses the subjunctive: the base form with no -s and no “to.” Languages do not teach — they are taught — so the passive subjunctive <em>be taught</em> is needed. <em>To be taught</em> has the right voice but wrongly adds “to,” and <em>teach</em> is active.' },
      { id:'m5-65', type:'cloze', tag:'wo-np', level:'C1', passage:M5_P1, blank:'(65)', stem:'Choose the best option for blank (65).',
        options:['ten-year','ten-years','ten years’','tenth-year'], answer:0,
        why:'A number + noun placed before another noun forms a hyphenated compound adjective, and the noun stays singular: a <em>ten-year</em> program (like “seven-year-olds”). <em>Ten-years</em> wrongly makes it plural, <em>ten years’</em> is a possessive form that does not fit after “a,” and <em>tenth-year</em> means the program is in its tenth year, not that it lasted ten years.' },
      { id:'m5-66', type:'cloze', tag:'rc-reduced', level:'C1', passage:M5_P2, blank:'(66)', stem:'Choose the best option for blank (66).',
        options:['associated','associating','was associated','which associated'], answer:0,
        why:'“The white (which is) <em>associated</em> with doctors” is a reduced passive relative clause: white is associated with doctors, it does not associate anything. <em>Associating</em> is active, as if the white were doing the associating. <em>Was associated</em> adds a second finite verb to the sentence, and <em>which associated</em> is active in meaning and missing “is.”' },
      { id:'m5-67', type:'cloze', tag:'wf-confuse', level:'C1', passage:M5_P2, blank:'(67)', stem:'Choose the best option for blank (67).',
        options:['affect','effect','effective','affection'], answer:1,
        why:'After the adjective “optical,” we need a noun meaning “result or phenomenon,” and that noun is <em>effect</em>. <em>Affect</em> is the verb (“to affect vision”), <em>effective</em> is an adjective, and <em>affection</em> is a noun meaning fondness or love.' },
      { id:'m5-68', type:'cloze', tag:'pl-parallel', level:'C1', passage:M5_P2, blank:'(68)', stem:'Choose the best option for blank (68).',
        options:['help','helps','helping','to help'], answer:0,
        why:'The plural subject “Green and blue” has two verbs joined by <em>and</em>: they <em>cancel out</em> … and <em>help</em>. Parallel structure requires the same form as “cancel,” so <em>help</em> is correct. <em>Helps</em> does not agree with a plural subject, and <em>helping</em> and <em>to help</em> break the parallel pattern.' },
      { id:'m5-69', type:'cloze', tag:'vm-cond', level:'C1+', passage:M5_P2, blank:'(69)', stem:'Choose the best option for blank (69).',
        options:['will be','had been','would be','would have been'], answer:2,
        why:'This is a mixed conditional: an unreal past condition (“If surgeons had never abandoned white gowns”) with a result in the present, signalled by “today,” so we need <em>would be</em>. <em>Would have been</em> is the near-miss, but it describes an unreal past result and clashes with “today.” <em>Will be</em> and <em>had been</em> do not fit an unreal result clause.' },
      { id:'m5-70', type:'cloze', tag:'dt-quant', level:'C1', passage:M5_P2, blank:'(70)', stem:'Choose the best option for blank (70).',
        options:['both','none','either','neither'], answer:3,
        why:'<em>Although</em> introduces a contrast with “thought to calm anxious patients,” so the clause must be negative: <em>neither</em> color (not green and not blue) has been proven to speed recovery. <em>Either</em> is grammatical but positive in meaning, so the contrast disappears. <em>Both</em> needs a plural noun (“colors”), and <em>none</em> cannot come directly before a singular noun.' },
      { id:'m5-71', type:'cloze', tag:'nc-embedded', level:'C1', passage:M5_P3, blank:'(71)', stem:'Choose the best option for blank (71).',
        options:['it','that','what','which'], answer:2,
        why:'The blank begins a noun clause that is the subject of “is”: [<em>what</em> many experts consider the scarcest resource of all] is… human attention. <em>What</em> means “the thing that.” <em>Which</em> and <em>that</em> need a noun before them to refer to, and <em>it</em> would create two clauses with no link.' },
      { id:'m5-72', type:'cloze', tag:'vc-prep', level:'C1', passage:M5_P3, blank:'(72)', stem:'Choose the best option for blank (72).',
        options:['at','by','for','with'], answer:1,
        why:'The sentence contrasts two methods of making money — “not ___ charging users but <strong>by</strong> selling their time” — and the method is expressed with <em>by</em> + -ing. The second half already uses “by,” so the parallel requires the same preposition. <em>For</em> charging would give a reason, <em>with</em> would need a tool or noun, and <em>at</em> charging would mean skill at doing it.' },
      { id:'m5-73', type:'cloze', tag:'vt-sva', level:'C1', passage:M5_P3, blank:'(73)', stem:'Choose the best option for blank (73).',
        options:['is','are','were','have'], answer:0,
        why:'The head of the long subject is “stream,” which is singular; “notifications” and “phones” are inside the phrase and relative clause. So the verb is <em>is</em> (carefully engineered). <em>Are</em> is the trap for students who match the verb to the nearest plural noun, <em>Were</em> is both plural and past, but the passage is in the present (“every day,” “pull us back”). <em>Have</em> engineered would be active.' },
      { id:'m5-74', type:'cloze', tag:'lk-contrast', level:'C1', passage:M5_P3, blank:'(74)', stem:'Choose the best option for blank (74).',
        options:['Despite','However','Although','In spite'], answer:2,
        why:'A full clause (“the apps are free to download”) follows the blank, so we need a conjunction: <em>Although</em>. <em>Despite</em> and <em>in spite of</em> take a noun or -ing form (and “In spite” is missing “of”). <em>However</em> is an adverb and cannot join two clauses in one sentence.' },
      { id:'m5-75', type:'cloze', tag:'vp-passinf', level:'C1', passage:M5_P3, blank:'(75)', stem:'Choose the best option for blank (75).',
        options:['disabling','to disable','be disabled','to be disabled'], answer:3,
        why:'The pattern is <em>want + object + to-infinitive</em>, and the features do not disable anything themselves — they are disabled — so the passive infinitive <em>to be disabled</em> is needed. <em>To disable</em> has the right pattern but the wrong voice; <em>be disabled</em> is missing “to.”' }
    ]},

    { code:'III-2', part:'SECTION III: WRITING SKILL', title:'Part II: Paragraph Organization (Items 76–80)',
      instructions:'Choose the best answer to rearrange the following statements into a logical paragraph.', points:1.25, items:[
      { id:'m5-76', type:'choose', tag:'po-compare', level:'C1',
        stem:'<div class="orderblock"><p>A. The former comes from within: we read a novel because we enjoy it, or practice the guitar because we love the sound.</p><p>B. Psychologists generally distinguish between two kinds of motivation: intrinsic and extrinsic.</p><p>C. Research suggests that when people are paid for something they already enjoy, the latter can gradually crowd out the former.</p><p>D. The latter, by contrast, depends on outside rewards and pressures, such as grades, money or a parent’s approval.</p></div>',
        options:['B-A-D-C','B-D-A-C','C-B-A-D','D-B-C-A'], answer:0,
        why:'B introduces the two terms in the order intrinsic, extrinsic, so <em>the former</em> (A) must describe intrinsic motivation and <em>the latter</em> (D) extrinsic. C uses both references at once to reach a conclusion, so it comes last. B-D-A-C is the near-miss, but D’s “by contrast” needs the former type to have been described first, so A must come before D.' },
      { id:'m5-77', type:'choose', tag:'po-ref', level:'C1',
        stem:'<div class="orderblock"><p>A. This adjustment, however, comes at a cost: higher-pitched songs do not travel as far, and they may be less attractive to potential mates.</p><p>B. In many cities, the constant low rumble of traffic makes it hard for birds to hear one another.</p><p>C. Such trade-offs suggest that urban noise affects wildlife in ways that are far from obvious.</p><p>D. To be heard above the din, some species have begun singing at a higher pitch than their rural relatives.</p></div>',
        options:['B-D-A-C','B-D-C-A','D-A-B-C','D-B-A-C'], answer:0,
        why:'B states the problem with no reference words. D’s “the din” refers back to B’s rumble of traffic, and “singing at a higher pitch” is the <em>adjustment</em> that A calls “this adjustment.” A’s “comes at a cost” is then summed up by C’s “Such trade-offs.” In B-D-C-A, “Such trade-offs” would appear before any cost has been mentioned.' },
      { id:'m5-78', type:'choose', tag:'po-process', level:'C1',
        stem:'<div class="orderblock"><p>A. Only after this sorting are the beans roasted, the stage at which their familiar aroma finally develops.</p><p>B. Once dry, the beans are hulled to remove their papery outer skin and then graded by size and density.</p><p>C. The journey from a coffee farm to a café cup involves a surprising number of steps.</p><p>D. It begins with the harvest, when ripe red cherries are picked and the seeds inside are separated and left to dry in the sun.</p></div>',
        options:['C-B-D-A','C-D-A-B','C-D-B-A','D-B-A-C'], answer:2,
        why:'C is the general topic sentence; D’s “It begins” refers to “the journey.” B’s “Once dry” follows D’s drying in the sun, and B’s grading is the “sorting” that A refers to with “this sorting.” C-D-A-B is the near-miss, but it puts roasting before the beans have even been hulled and graded.' },
      { id:'m5-79', type:'choose', tag:'po-argue', level:'C1',
        stem:'<div class="orderblock"><p>A. School canteens throw away a surprising amount of food, much of it untouched.</p><p>B. These two simple changes cut the canteen’s food waste by nearly a third within a single term.</p><p>C. One school in Bangkok tried a different approach: students could choose a smaller portion, and leftovers were weighed and shown on a screen every week.</p><p>D. Traditional remedies, such as posters urging students to “clean your plate,” have had little effect.</p></div>',
        options:['A-B-C-D','A-C-D-B','A-D-B-C','A-D-C-B'], answer:3,
        why:'This is problem → failed solution → new solution → result. A states the problem, D dismisses traditional remedies, C’s “a different approach” contrasts with D, and B’s “These two simple changes” refers to C’s smaller portions and weekly weighing. A-C-D-B is the near-miss, but “a different approach” needs something to be different from, so D must come before C.' },
      { id:'m5-80', type:'choose', tag:'po-given', level:'C1+',
        stem:'<div class="orderblock"><p>A. Such lapses are not a sign of weak character; rather, they suggest that our capacity for careful judgement can run down like a battery.</p><p>B. Decision fatigue refers to the decline in the quality of the choices people make after a long period of making decisions.</p><p>C. Shoppers who have spent a whole day comparing products, for instance, are far more likely to grab whatever snack is on display at the checkout.</p><p>D. This is why some busy professionals deliberately cut down on trivial choices, wearing the same style of clothes every day.</p></div>',
        options:['A-B-C-D','B-A-D-C','B-C-A-D','B-D-C-A'], answer:2,
        why:'The paragraph moves definition → example → explanation → consequence. B defines the term, C gives an example (“for instance”), A’s “Such lapses” refers to the shoppers’ poor choices, and D’s “This is why” draws a practical consequence from A’s battery idea. In B-A-D-C, “Such lapses” would come before any lapse has been described.' }
    ]}
  ]
});
