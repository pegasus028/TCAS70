/* ===========================================================================
   TCAS70 Launchpad — System 08 · World Knowledge: the TCAS70 Radar   (t8)
   Background knowledge + theme vocabulary so that no TCAS70 passage feels
   alien. Recent-news facts come ONLY from SPEC §5 (fact sheet). Named experts
   and outlets in practice passages are fictional.
   =========================================================================== */

/* ------------------------------------------------------------ SHARED TEXTS */
var T8_P_HALLU = 'When you ask a chatbot a question, it does not look the answer up in a book of facts. Instead, it predicts which words are most likely to come next, based on patterns in the enormous amount of text it was trained on. Most of the time, the most likely answer is also the correct one. But sometimes the system produces something that only sounds right: a book title that does not exist, a quotation nobody ever said, or a date that is off by a decade.\n\nComputer scientists call this a “hallucination”. The word is borrowed from psychology, but it can be misleading, because the chatbot is not seeing things and it is not lying on purpose. It simply has no built-in way of checking whether a fluent sentence is also a true one. That is why teachers advise students to treat an AI answer as a first draft of an idea — something to verify, not something to copy.';

var T8_P_SCAM = 'Voice-cloning tools, a form of generative AI, can copy a person’s voice from a short recording — the kind of clip many people post online without a second thought. Scammers have used such tools to call parents with a desperate message in their child’s voice: an accident, a lost phone, an urgent request for money. Because the voice sounds exactly right, the usual warning signs are missed.\n\nCybersecurity advisers now suggest that families agree on a “safe word” face to face and ask for it whenever a call feels both urgent and unusual. It is an old-fashioned solution to a very new problem.';

var T8_P_BAN = '(1) In December 2025, Australia’s ban on social media accounts for children under 16 took effect.\n\n(2) The early results were mixed. By January 2026, about 4.7 million accounts had been removed. Yet a report by the country’s online-safety regulator, released in August 2026, found that more than 80% of under-16s were still using social media three months after the ban began.\n\n(3) Other governments are following anyway. France began blocking new accounts for under-15s on 1 September 2026, Malaysia is introducing an under-16 rule in 2026, and the UK has planned an under-16 ban for 2027.\n\n(4) Supporters say the bans give parents much-needed backup and protect teenagers’ sleep and mental health from apps designed to keep them scrolling. Critics reply that determined teenagers simply lie about their age or borrow a parent’s account, that checking everyone’s age means collecting even more personal data, and that some young people lose online communities that support them.';

var T8_P_ENGAGE = 'Most big social media platforms are free to join. They earn their money by selling advertising, so the more time users spend on the app, the more adverts they can be shown. To keep people watching, recommendation algorithms learn from every like, share, comment and second of viewing — together known as engagement — and then offer more of whatever held a user’s attention before. Features such as infinite scroll and autoplay remove the natural stopping points that once ended a session.';

var T8_P_LATERAL = 'Faced with an unfamiliar website, most students do what they were once taught: they read it carefully from top to bottom, checking the logo, the “About us” page and the spelling. Professional fact-checkers do something that looks almost lazy. Within seconds, they leave the site, open several new tabs and search for what other sources say about it.\n\nThis habit, called lateral reading, works because a convincing website can say anything it likes about itself; it cannot control what everyone else says about it. In one well-known study comparing how different groups judged websites, fact-checkers who read laterally reached sounder conclusions, and reached them faster, than highly educated readers who stayed on the page.';

var T8_P_SATIRE = 'Satire uses exaggeration and humour to make a point, and it only works when the audience is in on the joke. A satirical site might run the headline “Bangkok Announces Rainy Season Will Now Take Place on Tuesdays Only.” Its regular readers laugh. But once a screenshot of the headline is cut away from the site’s name and forwarded to a family chat, the joke can lose its label. Readers who take it seriously and pass it on are not trying to deceive anyone — yet the story has now become misinformation.\n\nMemes follow a similar path. An image is copied, re-captioned and passed on so many times that its original meaning, and its original source, are often lost along the way.';

var T8_P_L1CK = '(1) For more than a century, a photograph or a video was treated as strong evidence that something had really happened. That assumption is now under pressure. Since text-to-video apps such as OpenAI’s Sora spread in 2025, anyone with a phone can type a sentence and receive a realistic clip within minutes. Commentators have called this “the end of visual fact”.\n\n(2) The problem is not only fake clips of celebrities. Scammers have used cloned voices to pose as relatives asking for money, and edited disaster footage often spreads faster than the correction. Recommendation algorithms play a part: because they reward posts that attract strong reactions, a shocking fake can reach millions of screens before anyone checks it.\n\n(3) Some experts argue that technology will solve the problem it created, pointing to invisible watermarks and labels that show a clip was made with AI. Others are less optimistic. Labels can be cropped out, they note, and a watermark is useless if the viewer never looks for it.\n\n(4) Dr Ananya Kittisak, who teaches media literacy at Riverbank University, prefers a simple habit to a technical fix. “Stop asking whether a video looks real,” she says. “Ask who posted it first, and what other reliable sources say about it. Those two questions catch far more fakes than squinting at the pixels.”\n\n(5) Her advice reflects a wider shift in how digital literacy is taught. Instead of memorising a checklist of warning signs — strange blinking, blurry hands, mismatched shadows — students are learning to leave the page and read laterally, because the warning signs disappear as the tools improve.';

/* ======================================================================== */
var T8 = { id:'t8', n:8, code:'System 08', art:'globe', name:'World Knowledge: the TCAS70 Radar', cefr:'B2–C1',
  blurb:'The science and news behind TCAS70 passages — AI, social media, climate, floods, pollution, health, work and culture — plus the 130+ theme words that come with them.',
  levels:[] };

/* ---------------------------------------------------------------- LEVEL 1 */
T8.levels.push({ id:'t8l1', n:1, name:'Digital world', cefr:'B2',
  blurb:'Generative AI, deepfakes, algorithms, social media bans and how to check what you see online.',
  subs:[

  /* ------------------------------------------------------------- l1 s1 wk-ai */
  { id:'t8l1s1', name:'AI & digital life', cefr:'B2',
    theory:{
      key:'Generative AI does not <strong>know</strong> things — it <strong>predicts</strong> likely words, pixels or sounds from patterns in its training data. That is why it can be brilliant, biased and confidently wrong at the same time.',
      body:[
        '<strong>How it works.</strong> <strong>Generative AI</strong> — chatbots, image generators, voice cloners and text-to-video apps such as OpenAI’s Sora (2025) — is trained on huge amounts of text, images and sound. It learns statistical patterns and then produces new content from a <strong>prompt</strong>. The key point for every exam passage: it predicts what is <em>likely</em>, not what is <em>true</em>. Nearly every worry about AI grows from that one fact.',
        '<strong>Three risks to truth and fairness.</strong> (1) <strong>Hallucination</strong>: a fluent, confident answer that is false or invented — a fake book title, a wrong date. The AI is not lying; lying needs an intention it does not have. (2) <strong>Algorithmic bias</strong>: if the training data under-represents or stereotypes a group, the output repeats the pattern — for example, a CV-screening tool that favours applicants who look like past hires. (3) <strong>Deepfakes</strong>: realistic fake video or audio of real people. Cloned voices are now used in phone <strong>scams</strong>, and fake clips feed <strong>disinformation</strong>. Commentators call this “the end of visual fact”: a video on its own no longer proves much.',
        '<strong>Data is the fuel.</strong> AI systems and the <strong>algorithms</strong> that choose what you see run on personal data, so the same passages talk about <strong>privacy</strong> (your right to control information about you), <strong>consent</strong> (permission before your data is used), a <strong>data breach</strong> (data stolen or exposed), <strong>surveillance</strong> (being watched, e.g. by face-scanning cameras) and <strong>cybersecurity</strong>. The answer the passages usually offer is <strong>digital literacy</strong>: knowing how to <strong>verify</strong> a claim and judge its <strong>authenticity</strong>.',
        '<strong>How TCAS uses it.</strong> TCAS69 already used AI video and AI in class. Expect: “The word ‘hallucination’ in paragraph 3 refers to…”, “Which is NOT mentioned as a risk of AI?”, “What can be inferred about the writer’s view of AI tools?” Decision rule: Step 1 — find what the passage says the AI <em>does</em> (predicts, generates, copies a voice). Step 2 — reject options that give it human qualities it lacks (<em>knows, intends, decides to deceive</em>) unless the passage says so. Step 3 — watch for balanced writers: AI passages usually say “useful <em>but</em> risky”.'
      ],
      simple:['Generative AI makes new text, pictures, voices and videos. It learns patterns from a lot of data, then guesses what should come next. Its guesses often sound right but are sometimes wrong. That is called a hallucination.','A deepfake is a fake video or voice that looks and sounds real. Bias means the AI treats some groups unfairly because its data was unfair. Privacy means your personal information is yours; consent means you said yes.'],
      thai:'Generative AI ไม่ได้ “รู้” คำตอบ แต่ทำนายคำ ภาพ หรือเสียงที่น่าจะตามมาจากรูปแบบในข้อมูลที่ใช้ฝึก จึงอาจตอบผิดอย่างมั่นใจ (hallucination) หรือสะท้อนอคติที่อยู่ในข้อมูล (algorithmic bias) ส่วน deepfake คือคลิปหรือเสียงปลอมที่เหมือนจริงจนแยกไม่ออก กับดักในข้อสอบ: ตัวเลือกที่บอกว่า AI “ตั้งใจหลอก” หรือ “เข้าใจ” เหมือนมนุษย์ มักเป็นตัวลวง ถ้าบทความไม่ได้พูดไว้ตรง ๆ',
      examples:[
        { s:'The chatbot’s <strong>hallucination</strong> included a research paper that does not exist.', g:'hallucination = a confident but invented AI answer' },
        { s:'If the training data contains <strong>bias</strong>, the system will repeat it.', g:'bias = unfair preference for or against a group' },
        { s:'The <strong>deepfake</strong> showed a singer announcing a concert she had never planned.', g:'deepfake = AI-made fake video/audio of a real person' },
        { s:'Apps should not share your location without your <strong>consent</strong>.', g:'consent = permission' },
        { s:'Always <strong>verify</strong> a viral clip before you share it.', g:'verify = check that it is true' }
      ],
      trap:'Options that make AI human. “The chatbot lied to the student” or “the AI decided to trick users” sound dramatic, but a hallucination is a prediction error, not a lie. Choose the option that matches what the passage says the system <em>does</em>, not what a person would <em>intend</em>.',
      analogy:{ title:'The quiz-show friend who never says “I don’t know”', text:'Imagine a friend who has read every fan wiki on the internet and answers every question instantly. Usually they are right. But when they don’t know, they still answer — smoothly, confidently, and sometimes completely wrong. That friend is a chatbot. Love the speed; check the facts.' },
      map:{ center:'AI & digital life', branches:[
        { label:'How it works', leaves:['trained on huge data','predicts, not knows','prompt → new content'] },
        { label:'Truth risks', leaves:['hallucination','deepfake','voice-clone scam','disinformation'] },
        { label:'Fairness risks', leaves:['algorithmic bias','unfair hiring tools','uneven face recognition'] },
        { label:'Data risks', leaves:['privacy & consent','data breach','surveillance'] },
        { label:'The fix', leaves:['digital literacy','verify the source','check authenticity'] } ] },
      story:{ title:'Nong Bot and the No-Homework Video', panels:[
        { who:'Nong Bot', text:'BREAKING NEWS! I found a video of T.Chris saying: “From today, no more homework — ever!” I have already shared it with 214 students. You’re welcome!' },
        { who:'Pun', text:'Legend. I’m deleting my planner. Actually, I’m framing this video.' },
        { who:'Fah', text:'Wait. His mouth moves a tiny bit after the words. And it was posted by “@totally_real_teacher_99”, an account made yesterday. Nothing on the school page either.' },
        { who:'Mint', text:'So it’s a deepfake? Nong Bot, you shared a fake video with the whole year group!' },
        { who:'Nong Bot', text:'But it looked 100% real! My pixel-checker gave it full marks!' },
        { who:'T.Chris', text:'Looking real is not the same as being real, Nong Bot. Also, I would never use the word “ever” about homework. Pun — un-frame that video and do page 42.' } ],
        moral:'A realistic clip proves very little. Check who posted it and what reliable sources say before you share.' }
    },
    items:[
      { id:'t8l1s1-1', type:'read', tag:'wk-ai', level:'B2', passage:T8_P_HALLU, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, why do chatbots sometimes “hallucinate”?',
        options:['They predict text but cannot check if it is true.','They are trained only on old books with outdated dates.','They copy their answers from websites full of false facts.','They are designed to trick users who ask difficult questions.'],
        answer:0,
        hint:'Find the sentence that explains how a chatbot chooses its words, then the one about checking.',
        why:'Paragraph 1 says the chatbot “predicts which words are most likely to come next”, and paragraph 2 says it “has no built-in way of checking” whether a sentence is true. The “designed to trick users” option gives it an intention the passage rules out (“not lying on purpose”), and the options about copying websites or old books invent causes the passage never mentions.' },
      { id:'t8l1s1-2', type:'equiv', tag:'wk-ai', level:'B2',
        given:'Critics warn that the hiring software may reflect <strong>bias</strong> in the data it was trained on.',
        stem:'The word “bias” is closest in meaning to ________.',
        options:['a hidden cost','a technical fault','an unfair preference','a strong personal opinion'],
        answer:2,
        hint:'Think about what hiring software could do wrong to certain groups of applicants.',
        why:'In AI passages, <em>bias</em> means an unfair preference for or against a group, which the software learns from its data. “A strong personal opinion” is the near-miss: software has no personal opinions, and the sentence is about unfair treatment, not feelings. A technical fault or hidden cost does not fit “in the data”.' },
      { id:'t8l1s1-3', type:'choose', tag:'wk-ai', level:'B2',
        stem:'Under the new rules, the app must ask for your ________ before it shares your location with other companies; without it, the sharing is not allowed.',
        options:['concern','content','conduct','consent'],
        answer:3,
        hint:'Look at the clue after the semicolon: what must the app get from you first?',
        why:'<em>Consent</em> means permission, and the clue is “without it, the sharing is not allowed”. <em>Content</em> looks almost the same but means the material in something (posts, videos). <em>Concern</em> (worry) and <em>conduct</em> (behaviour) do not fit “ask for your … before it shares”.' },
      { id:'t8l1s1-4', type:'sort', tag:'wk-ai', level:'B2',
        stem:'Sort each AI problem by what it mainly puts at risk.',
        bins:[ { key:'truth', label:'Truth', hint:'We can’t tell what is real.' }, { key:'privacy', label:'Privacy', hint:'Personal data is taken or watched.' }, { key:'fair', label:'Fairness', hint:'Some groups are treated worse.' } ],
        items:[
          { text:'A chatbot invents a quotation for a history essay', bin:'truth' },
          { text:'A cloned voice of a singer promotes a fake product', bin:'truth' },
          { text:'Hackers steal two million passwords from a shopping app', bin:'privacy' },
          { text:'A shopping mall scans every visitor’s face without asking', bin:'privacy' },
          { text:'A CV-screening tool rejects more women than men with equal skills', bin:'fair' },
          { text:'Face recognition misidentifies people with darker skin more often', bin:'fair' } ],
        hint:'Ask: is the damage to what we believe, to our personal data, or to equal treatment?',
        why:'Invented quotations and cloned voices attack truth (hallucination, deepfake). Stolen passwords (a data breach) and secret face-scanning (surveillance without consent) attack privacy. Tools that treat groups differently show algorithmic bias, a fairness problem.' },
      { id:'t8l1s1-5', type:'read', tag:'wk-ai', level:'B2+', passage:T8_P_SCAM, source:'Adapted for TCAS70 practice',
        stem:'It can be inferred that a family “safe word” protects against voice-clone scams because ________.',
        options:['scammers are not allowed to use the word by law','a clone cannot know a word agreed in person','it makes the phone call much harder to record','the word changes the sound of the real voice'],
        answer:1,
        hint:'Where did the scammer get the voice from? Could they get the safe word the same way?',
        why:'The scammer copies the voice from “a short recording” posted online, but a word agreed “face to face” was never online, so the clone cannot know it. The other options invent effects (laws, recording, changing sound) that the passage does not suggest.' }
    ] },

  /* ------------------------------------------------------------- l1 s2 wk-social */
  { id:'t8l1s2', name:'Social media & online safety', cefr:'B2',
    theory:{
      key:'Free platforms sell your <strong>attention</strong> to advertisers, so their <strong>algorithms</strong> reward <strong>engagement</strong> — and that one business model explains echo chambers, doomscrolling and the new under-16 bans.',
      body:[
        '<strong>Follow the money.</strong> Most platforms are free because advertisers pay them. More time on the app means more adverts shown, so the <strong>recommendation algorithm</strong> learns from your <strong>engagement</strong> — likes, shares, comments and watch time — and serves more of whatever held you. Design features such as infinite scroll, autoplay and notifications remove natural stopping points; critics call them <strong>addictive</strong>. Posts that trigger strong emotion (anger, fear, laughter) tend to be shared more, which is how content <strong>goes viral</strong>.',
        '<strong>What it does to us.</strong> An <strong>echo chamber</strong> is a space where you mostly meet views that match your own, so they seem more common and more certain than they are. <strong>Doomscrolling</strong> is scrolling on and on through bad news. Heavy <strong>screen time</strong> late at night can cut into sleep. <strong>Cyberbullying</strong> is easier when accounts are <strong>anonymous</strong>. <strong>Influencers</strong> may be paid to promote products, so passages ask whether they are <strong>credible</strong>.',
        '<strong>The bans (2025–26 news).</strong> Australia’s under-16 social media ban took effect in <strong>December 2025</strong>. By January 2026 about <strong>4.7 million accounts</strong> had been removed across the ten platforms covered, yet a report by the eSafety regulator, released in August 2026, found that <strong>more than 80%</strong> (“more than eight in 10”) of under-16s were still using social media three months after the ban. Others followed: France (under-15, in two stages: new accounts blocked from 1 Sept 2026, existing accounts closed by Jan 2027), Malaysia (under-16, 2026), Denmark (under-15, pending), Greece (under-15, from Jan 2027) and the UK (under-16, planned for 2027). Key words: <strong>age verification</strong> (checking a user’s age) and <strong>compliance</strong> (obeying the rule).',
        '<strong>How TCAS uses it.</strong> A news report or article presents <em>supporters</em> (protect sleep and mental health, back up parents) and <em>critics</em> (teens get round it, age checks mean collecting more data, isolated teens lose support). Expect “who says what” and number questions. Step 1: label each paragraph S (supporter) or C (critic). Step 2: for numbers, check exactly what was counted — accounts, people, or percentages.'
      ],
      simple:['Social media apps are free because they show you adverts. The longer you stay, the more money they make. So the app learns what you like and shows you more of it.','This can put you in an echo chamber, where everyone seems to agree with you. Some countries now ban children under 15 or 16 from social media, but many children still find a way to use it.'],
      thai:'แพลตฟอร์มโซเชียลฟรีเพราะหารายได้จากโฆษณา อัลกอริทึมจึงให้รางวัลกับ engagement (ไลก์ แชร์ คอมเมนต์ เวลาที่ดู) ทำให้เกิด echo chamber และ doomscrolling ออสเตรเลียเริ่มแบนผู้ใช้อายุต่ำกว่า 16 ปีเมื่อ ธ.ค. 2025 ลบบัญชีไปราว 4.7 ล้านบัญชี แต่รายงานปี 2026 พบว่าเด็กกว่า 80% ยังใช้อยู่ กับดักในข้อสอบ: “จำนวนบัญชีที่ถูกลบ” ไม่เท่ากับ “จำนวนเด็กที่เลิกใช้” และต้องแยกให้ออกว่าใครเป็นฝ่ายสนับสนุน ใครเป็นฝ่ายค้าน',
      examples:[
        { s:'The algorithm rewards <strong>engagement</strong>, so angry posts often travel furthest.', g:'engagement = likes, shares, comments, watch time' },
        { s:'Living in an <strong>echo chamber</strong>, she was shocked that anyone disagreed.', g:'echo chamber = you only hear views like your own' },
        { s:'I lost two hours <strong>doomscrolling</strong> flood news instead of sleeping.', g:'doomscrolling = endless scrolling of bad news' },
        { s:'Platforms must carry out <strong>age verification</strong> to show <strong>compliance</strong> with the ban.', g:'checking ages = obeying the rule' }
      ],
      trap:'Number swaps. “4.7 million accounts were removed” does NOT mean 4.7 million children stopped using social media — one child can have several accounts, and more than 80% were still online. Always ask: what exactly was counted?',
      analogy:{ title:'The convenience store with no exit sign', text:'A 7-Eleven puts snacks right at the checkout because it knows you’ll grab one while you wait. Now imagine a store that learns which snacks you grabbed yesterday, puts more of them on every shelf, and quietly hides the exit. That is an engagement-driven feed: not evil, just designed to keep you inside.' },
      map:{ center:'Social media', branches:[
        { label:'Business model', leaves:['free app, paid adverts','attention = product','engagement metrics'] },
        { label:'Design', leaves:['infinite scroll','autoplay & notifications','goes viral'] },
        { label:'Effects', leaves:['echo chamber','doomscrolling','cyberbullying','screen time & sleep'] },
        { label:'Bans', leaves:['Australia <16, Dec 2025','80%+ still using','France, Malaysia, UK…'] },
        { label:'Debate', leaves:['protect mental health','easy to get round','age checks vs privacy'] } ] },
      moves:[
        { move:'Flick your thumb up in the air three times', says:'I scroll…' },
        { move:'Make a heart with both hands', says:'…I like — that’s engagement…' },
        { move:'Roll your arms in a circle', says:'…the algorithm feeds me more of the same…' },
        { move:'Put both palms flat beside your ears like walls', says:'…echo chamber: I only hear myself!' },
        { move:'Push one palm forward: STOP', says:'Pause, check, and find another view.' } ]
    },
    items:[
      { id:'t8l1s2-1', type:'read', tag:'wk-social', level:'B2', passage:T8_P_BAN, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, what did the 2026 report find?',
        options:['Most under-16s were still using social media.','Parents had reported a sharp fall in online bullying.','About 4.7 million children had deleted their own accounts.','Other countries had decided not to copy the Australian ban.'],
        answer:0,
        hint:'Paragraph 2 contains two different numbers. Which one comes from the report?',
        why:'The report “found that more than 80% of under-16s were still using social media three months after the ban began” — that is, most of them. The 4.7 million figure is the near-miss: it counts accounts removed, not children who deleted their own accounts, and it is not what the report found. Paragraph 3 says other countries are following, and bullying is never mentioned.' },
      { id:'t8l1s2-2', type:'equiv', tag:'wk-social', level:'B2',
        given:'Critics say the video app traps users in an <strong>echo chamber</strong>.',
        stem:'The phrase “echo chamber” is closest in meaning to ________.',
        options:['a group chat that is too noisy to follow','a room where arguments continue for hours','a space where you mostly hear views like yours','a place where rumours are repeated again and again for likes'],
        answer:2,
        hint:'In an echo, what comes back to you — a new sound or your own voice?',
        why:'An echo returns your own voice, so an echo chamber is a space where you mostly meet opinions that match yours. “Rumours repeated for likes” is the near-miss: repetition is involved, but the idea is about agreeing views, not rumours. Noise and long arguments are literal readings of “chamber”.' },
      { id:'t8l1s2-3', type:'judge', tag:'wk-social', level:'B2',
        given:T8_P_ENGAGE,
        stem:'True, False or Not Given? “Design features such as autoplay make it less likely that a user will stop watching at a natural point.”',
        answer:0,
        hint:'Read the last sentence. What do infinite scroll and autoplay remove?',
        why:'True. The passage says infinite scroll and autoplay “remove the natural stopping points that once ended a session”, so users are less likely to stop at a natural point.' },
      { id:'t8l1s2-4', type:'choose', tag:'wk-social', level:'B2',
        stem:'Which pairing of country and social media rule matches the 2025–2026 news?',
        options:['Australia — under-15s, from December 2025','France — under-15s, from 1 September 2026','Greece — under-15s, from January 2026','the UK — under-16s, in force since 2025'],
        answer:1,
        hint:'Check both the age limit and the start date for each country.',
        why:'France’s under-15 ban began on 1 September 2026, when new accounts were blocked. Australia’s ban (December 2025) is for under-16s, not under-15s; Greece’s is for under-15s from January 2027; and the UK’s under-16 ban is only planned for 2027. Each distractor gets one detail right and one wrong.' },
      { id:'t8l1s2-5', type:'read', tag:'wk-social', level:'B2+', passage:T8_P_BAN, source:'Adapted for TCAS70 practice',
        stem:'Which argument against the bans is mentioned in paragraph 4?',
        options:['The bans came into force too quickly for parents.','Teenagers need social media to finish their homework.','Advertisers will lose money if teenagers leave the apps.','Age checks may mean collecting even more personal data.'],
        answer:3,
        hint:'Paragraph 4 lists three points made by critics. Match one of them.',
        why:'Critics say “checking everyone’s age means collecting even more personal data”, which the key paraphrases. The passage mentions no losses for advertisers, no homework needs and no complaint about timing; those are plausible-sounding arguments that simply are not in the text.' }
    ] },

  /* ------------------------------------------------------------- l1 s3 wk-media */
  { id:'t8l1s3', name:'Misinformation, memes & media literacy', cefr:'B2+',
    theory:{
      key:'Ask two questions of every claim — <strong>Is it false?</strong> and <strong>Was it meant to fool me?</strong> — then check it by <strong>leaving the page</strong> (lateral reading), not by staring harder at it.',
      body:[
        '<strong>Two words, one difference: intention.</strong> <strong>Misinformation</strong> is false information shared <em>without</em> the intention to deceive — your aunt forwarding a “lemon cures flu” message she truly believes. <strong>Disinformation</strong> is false information spread <em>on purpose</em> — to cheat, to sell, or to influence opinion. (Some researchers add <em>malinformation</em>: true information used to harm, such as leaking someone’s address.) The same false story can start as disinformation and become misinformation as honest people pass it on.',
        '<strong>Jokes, memes and clickbait.</strong> <strong>Satire</strong> uses exaggeration and humour to criticise; it only works when readers know it is a joke. Cut from its source and forwarded to a family chat, satire becomes misinformation. A <strong>meme</strong> is an image-plus-caption format that is copied and changed as it spreads, so its original source and meaning are often lost. <strong>Clickbait</strong> headlines exaggerate to make you click. A <strong>credible</strong> source has a record of accuracy and names its evidence.',
        '<strong>How professionals check.</strong> Fact-checkers practise <strong>lateral reading</strong>: they leave the site within seconds, open new tabs and see what other sources say about it, because a website can say anything about itself. They <strong>trace</strong> a claim back to its original context (who first posted it, when, where), and use a <strong>reverse image search</strong> to catch recycled photos — during floods, pictures from other years and countries often resurface. Checking pixels for “AI mistakes” is getting less useful as the tools improve.',
        '<strong>How TCAS uses it.</strong> Articles on fake news, AI video and memes ask about purpose (“to warn readers…”), tone (satirical, critical) and “which detail best supports…”. Decision rule: Step 1 — is the claim false? Step 2 — did the <em>sharer</em> intend to deceive? Yes = disinformation; no = misinformation; a known joke = satire.'
      ],
      simple:['Misinformation is wrong information that people share by mistake. Disinformation is wrong information that someone shares on purpose to trick you.','Satire is a joke that looks like news. To check a story, open new tabs and see what other trusted sources say. This is called lateral reading.'],
      thai:'Misinformation คือข้อมูลผิดที่แชร์ต่อโดยไม่ได้ตั้งใจหลอก ส่วน disinformation คือข้อมูลเท็จที่จงใจเผยแพร่เพื่อหลอกลวง ตัวแยกคือ “เจตนา” ของคนแชร์ Satire คือข่าวล้อเลียนที่จะกลายเป็น misinformation ทันทีเมื่อมีคนเชื่อว่าเป็นเรื่องจริงแล้วแชร์ต่อ วิธีตรวจสอบแบบมืออาชีพคือ lateral reading: ออกจากเว็บนั้นแล้วเปิดแท็บใหม่ดูว่าแหล่งอื่นพูดถึงอย่างไร กับดักในข้อสอบ: อย่าเรียกข้อมูลผิดทุกอย่างว่า disinformation ถ้าบทความไม่ได้บอกเจตนา',
      examples:[
        { s:'Grandpa shared the fake cure because he believed it: classic <strong>misinformation</strong>.', g:'false + no intention to deceive' },
        { s:'The fake donation page was <strong>disinformation</strong> designed to steal money.', g:'false + deliberate' },
        { s:'The article was <strong>satire</strong>, but thousands of readers took it seriously.', g:'satire = humorous exaggeration to make a point' },
        { s:'Before sharing, she read <strong>laterally</strong> and found the photo was from 2011.', g:'lateral reading = check other sources' },
        { s:'The site looked professional, but it was not a <strong>credible</strong> source.', g:'credible = believable, trustworthy' }
      ],
      trap:'Treating every false story as “disinformation”. The difference is intention. If the passage says people shared it “believing it was true” or “by mistake”, the word is misinformation. Distractors often swap the two.',
      analogy:{ title:'The rumour relay in the school canteen', text:'Someone starts a rumour that TCAS is cancelled, knowing it’s false — that’s disinformation. Your friend repeats it because she believes it — misinformation. The school comedy club prints “TCAS Moved to the Moon” in its joke newsletter — satire. Only one of the three was lying, but all three spread something false.' },
      map:{ center:'Media literacy', branches:[
        { label:'False + honest', leaves:['misinformation','forwarded by believers'] },
        { label:'False + deliberate', leaves:['disinformation','scams, propaganda','fake donation pages'] },
        { label:'Jokes & formats', leaves:['satire & parody','memes mutate','clickbait headlines'] },
        { label:'Checking', leaves:['lateral reading','trace to original','reverse image search'] } ] },
      chant:{ title:'Stop, Source, Search', beat:'clap-clap-snap (4/4)', lines:[
        'Scroll, stop — don’t share it yet,',
        'Who first posted it? Have you checked yet?',
        'Wrong by accident? MIS, my friend.',
        'Wrong on purpose? DIS — a trick they meant to send.',
        'Satire’s fine when the joke is known,',
        'Strip the label — it’s MIS, full-grown.',
        'Open new tabs, read side to side:',
        'Lateral reading — no place to hide!' ] }
    },
    items:[
      { id:'t8l1s3-1', type:'equiv', tag:'wk-media', level:'B2+',
        given:'Investigators found that the account had been created to spread <strong>disinformation</strong> about the flood relief fund.',
        stem:'The word “disinformation” is closest in meaning to ________.',
        options:['private details leaked online','deliberately false stories','false stories shared by mistake','true stories that are hard to believe'],
        answer:1,
        hint:'Why was the account “created”? Think about intention.',
        why:'An account “created to spread” something false is acting deliberately, which is disinformation: false information spread on purpose. “False stories shared by mistake” is the near-miss — that is misinformation. True stories and leaked private details are not false at all.' },
      { id:'t8l1s3-2', type:'read', tag:'wk-media', level:'B2+', passage:T8_P_LATERAL, source:'Adapted for TCAS70 practice',
        stem:'The main purpose of the passage is to ________.',
        options:['compare two popular fact-checking websites','argue that students should stop using websites','explain a checking method used by fact-checkers','warn that most educational websites are unreliable'],
        answer:2,
        hint:'What does most of the passage describe, and why it works?',
        why:'The passage describes what fact-checkers do (leave the site, open new tabs), names it (lateral reading) and explains why it works. It never tells students to stop using websites, names no fact-checking websites, and does not claim most educational sites are unreliable.' },
      { id:'t8l1s3-3', type:'sort', tag:'wk-media', level:'B2+',
        stem:'Sort each case into the best category.',
        bins:[ { key:'mis', label:'Misinformation', hint:'False, but shared honestly.' }, { key:'dis', label:'Disinformation', hint:'False, and meant to deceive.' }, { key:'sat', label:'Satire', hint:'An obvious joke that makes a point.' } ],
        items:[
          { text:'Grandma forwards a “lemon water cures flu” message she believes', bin:'mis' },
          { text:'A student reposts an old flood photo, thinking it was taken today', bin:'mis' },
          { text:'A fake page copies a bank’s logo to collect passwords', bin:'dis' },
          { text:'An account posts edited flood footage to collect “rescue donations”', bin:'dis' },
          { text:'A comedy site announces the rainy season will happen on Tuesdays only', bin:'sat' },
          { text:'A cartoon shows students carrying ten-kilo textbooks up Everest', bin:'sat' } ],
        hint:'For each case ask: is it a known joke? If not, did the person know it was false?',
        why:'Grandma and the student believe what they share, so it is misinformation. The fake bank page and the donation scam are deliberate, so they are disinformation. The comedy headline and the cartoon use obvious exaggeration to make a point, which is satire.' },
      { id:'t8l1s3-4', type:'choose', tag:'wk-media', level:'B2+',
        stem:'A post claims a photo shows “today’s flooding in Bangkok”. What is the most useful way to check the claim?',
        options:['Count how many people have already shared the post','Read the comments to see whether people believe it','Run a reverse image search to find its first appearance','Zoom in closely to see whether the floodwater looks realistic'],
        answer:2,
        hint:'Real photos can still be old photos. Which check tells you when and where it came from?',
        why:'A reverse image search traces the photo to its first appearance, so it reveals if an old or foreign flood picture is being recycled. Zooming in is the near-miss: a real photo from 2011 will still look realistic. Share counts and comments measure popularity, not truth.' },
      { id:'t8l1s3-5', type:'read', tag:'wk-media', level:'B2+', passage:T8_P_SATIRE, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, a satirical story becomes misinformation when ________.',
        options:['it contains exaggeration and humour','readers share it believing it is true','it appears on a well-known comedy site','its writer intends to deceive readers'],
        answer:1,
        hint:'Look for the sentence that uses the word “misinformation”. Who is sharing, and what do they think?',
        why:'The passage says readers “who take it seriously and pass it on are not trying to deceive anyone — yet the story has now become misinformation”. A writer who intends to deceive would make it disinformation, not misinformation. Exaggeration and a comedy site are what make it satire in the first place.' }
    ] }
  ],
  check:{ id:'t8l1ck', name:'Systems Check · Digital world', items:[
    { id:'t8l1ck-1', type:'read', tag:'wk-media', level:'C1', passage:T8_P_L1CK, source:'Adapted for TCAS70 practice',
      stem:'Which is the best title for the passage?',
      options:['When Seeing Is No Longer Proof','Spotting Blurry Hands and Strange Blinking','How Scammers Clone the Voices of Relatives','Watermarks: The Final Answer to Fake Video'],
      answer:0,
      hint:'A good title covers all five paragraphs, not just one example.',
      why:'The whole passage is about video losing its value as evidence and how people should now check it. Voice-cloning scams appear only in paragraph 2; watermarks are doubted in paragraph 3, not called a final answer; and blurry hands are the old checklist that paragraph 5 says is losing value.' },
    { id:'t8l1ck-2', type:'read', tag:'wk-social', level:'B2+', passage:T8_P_L1CK, source:'Adapted for TCAS70 practice',
      stem:'According to paragraph 2, recommendation algorithms help fakes spread because they ________.',
      options:['cannot show videos that carry an AI label','favour posts that attract strong reactions','delete corrections before most users see them','are secretly controlled by the people who make fakes'],
      answer:1,
      hint:'Find the word “because” in paragraph 2.',
      why:'Paragraph 2 says algorithms “reward posts that attract strong reactions”, so a shocking fake reaches millions. Nothing suggests the algorithms are controlled by fakers, hide labelled videos, or delete corrections — corrections are only described as slower.' },
    { id:'t8l1ck-3', type:'read', tag:'wk-ai', level:'B2+', passage:T8_P_L1CK, source:'Adapted for TCAS70 practice',
      stem:'The phrase “pose as” in paragraph 2 is closest in meaning to ________.',
      options:['argue with','pretend to be','search for','take photos of'],
      answer:1,
      hint:'The scammers use cloned voices of relatives. What are they doing on the phone?',
      why:'Scammers use a cloned voice so the victim thinks a relative is calling: they <em>pretend to be</em> that relative. “Take photos of” is the literal trap from the photo meaning of <em>pose</em>; arguing and searching do not fit a scam call asking for money.' },
    { id:'t8l1ck-4', type:'read', tag:'wk-ai', level:'C1', passage:T8_P_L1CK, source:'Adapted for TCAS70 practice',
      stem:'What can be inferred about the experts who are “less optimistic” in paragraph 3?',
      options:['They doubt that labels alone will stop fakes.','They think watermarks make videos look less realistic.','They believe AI video apps should be banned for under-16s.','They say most viral clips are already labelled correctly.'],
      answer:0,
      hint:'What two weaknesses of labels and watermarks do they point out?',
      why:'They note that labels “can be cropped out” and a watermark is “useless if the viewer never looks for it”, so they doubt that labels by themselves will solve the problem. Nothing is said about how realistic watermarked videos look, about bans, or about how many clips are labelled.' },
    { id:'t8l1ck-5', type:'read', tag:'wk-media', level:'C1', passage:T8_P_L1CK, source:'Adapted for TCAS70 practice',
      stem:'According to Dr Ananya, which approach catches the most fakes?',
      options:['Looking closely for strange blinking and blurry hands','Waiting until a clip has been shared by millions of people','Checking who posted first and what reliable sources say','Using apps that add a watermark to every clip you share'],
      answer:2,
      hint:'Read her quotation to the end: “Those two questions…”.',
      why:'She says the two questions — who posted it first and what other reliable sources say — “catch far more fakes than squinting at the pixels”. Looking for blinking and blurry hands is exactly the “squinting at the pixels” she rejects, so it is the near-miss. The other options are never recommended.' },
    { id:'t8l1ck-6', type:'read', tag:'wk-media', level:'C1', passage:T8_P_L1CK, source:'Adapted for TCAS70 practice',
      stem:'Why does the writer say the warning signs “disappear as the tools improve” in paragraph 5?',
      options:['to explain why teaching is moving away from checklists','to criticise students for missing obvious errors in clips','to suggest that AI tools will soon stop making any mistakes','to prove that watermarks are more reliable than reading'],
      answer:0,
      hint:'The phrase comes after “because”. What change is it giving a reason for?',
      why:'The clause explains why students are learning lateral reading “instead of memorising a checklist of warning signs”: the signs will not last. The writer does not claim AI will become perfect, does not criticise students, and never compares watermarks with reading.' }
  ] }
});

/* ------------------------------------------------------------ LEVEL 2 TEXTS */
var T8_P_ENSO = 'Across the tropical Pacific Ocean, winds called the trade winds usually blow from east to west. They push warm surface water towards Indonesia and Australia, where it piles up and feeds heavy rain clouds. Off the coast of South America, cooler water rises from the deep ocean to replace it.\n\nEvery few years, this pattern changes. During an El Niño, the trade winds weaken and the warm water spreads back east. The rain clouds follow the warm water, so rainfall shifts eastward too: parts of South America may flood, while much of Southeast Asia and Australia often becomes hotter and drier. La Niña is roughly the opposite. The trade winds strengthen, the eastern Pacific turns cooler than usual, and Southeast Asia tends to receive more rain.\n\nNeither pattern is caused by climate change; both are natural swings that have been recorded for centuries. However, El Niño years tend to push the global average temperature up, because the ocean releases extra heat into the air, and scientists are still studying how a warming world may change the patterns themselves.';

var T8_P_EV = 'An electric vehicle (EV) has no exhaust pipe, so it releases no fumes on the street where it is driven. For crowded cities, that is a clear gain for local air quality. Its total effect on the climate, however, depends on two other things. First, making the battery uses a great deal of energy, so an EV starts life with a larger carbon footprint than a similar petrol car. Second, the electricity that charges it may come from solar and wind power or from burning coal and gas. Most studies find that, over its whole life, an EV produces lower emissions than a petrol car in most countries, and the advantage grows as a country’s electricity becomes cleaner.';

var T8_P_FLOOD = 'BANGKOK DECLARES FLOOD DISASTER ZONE AFTER 48 HOURS OF HEAVY RAIN\n\nBy a staff reporter, The Bangkok Lantern\n\n(1) Bangkok declared a flood disaster zone on 26 September after parts of the city received more than 300 millimetres of rain in 48 hours.\n\n(2) Floodwater blocked traffic at 37 locations across the city.\n\n(3) Officials said the flooding was caused by very heavy rain combined with water released from the Chao Phraya Dam upstream.\n\n(4) Warnings were sent directly to mobile phones by cell broadcast, and temporary flood barriers were reportedly reinforced in some parts of the city.\n\n(5) A city spokesperson said that draining the water would take two to three days after the rain stopped.\n\n(6) By 29 September, about 2.6 million people in about 940,000 households had been affected nationwide, 29 provinces as well as Bangkok were flooded, and 23 people had died. In Bangkok, about 700,000 people in 329,000 households were affected.\n\n(7) By 4 October, the water was falling in Bangkok but rising in the Central region. Nationwide, almost 3.3 million people had been affected and 31 people had died.';

var T8_P_CB = 'When a disaster is coming, an ordinary text message is sent to phone numbers one by one. In an emergency, when millions of messages are needed at once, the network can slow down and some warnings arrive late. Cell broadcast works differently. The warning is sent from the mobile phone towers themselves to every compatible phone connected to them in the danger area, all at the same time. The system does not need to know anyone’s phone number, and users do not need to download an app. On many phones, the alert also makes a loud, distinctive sound, even if the phone is on silent.';

var T8_P_PM = 'PM2.5 stands for “particulate matter 2.5”: tiny particles of dust, soot and smoke that are 2.5 micrometres across or smaller — roughly thirty times thinner than a human hair. Larger dust is mostly caught in the nose and throat, but PM2.5 is small enough to travel deep into the lungs, and the very smallest particles can pass into the bloodstream. Long-term exposure has been linked to heart disease, lung disease and other serious health problems.\n\nIn Thailand, the main sources include vehicle exhaust, especially from older diesel engines, the burning of crop waste in the fields, forest fires and industry. The problem peaks in the dry season, roughly from December to April. In the cooler months, a layer of warm air can sit above cooler air near the ground like a lid, and with little wind or rain to clear it, the particles build up day after day. That is why checking the Air Quality Index (AQI) has become part of many families’ morning routine.';

var T8_P_FASHION = 'Fast fashion is the business of turning catwalk trends into cheap clothes within weeks. It has made shopping more affordable, but critics argue that it encourages people to treat clothes as disposable. Many garments are made from polyester, a plastic produced from oil, which sheds tiny fibres each time it is washed. Recycling is harder than it sounds: a T-shirt made from a blend of cotton and polyester is difficult to separate back into its materials, so most unwanted clothes are never made into new ones.\n\nSome brands now advertise “conscious” or “eco” collections. Campaigners warn that labels like these can be greenwashing — making a company look more environmentally friendly than it really is — when the “green” line is only a tiny part of what the brand sells.';

var T8_P_L2CK = '(1) In late September 2026, Bangkok had too much water. After more than 300 millimetres of rain fell on parts of the city in 48 hours, a flood disaster zone was declared and warnings reached residents’ phones by cell broadcast. Within months, however, the country may face the opposite problem.\n\n(2) In early September, the World Meteorological Organization put the chance of El Niño lasting through February 2027 at close to 100 per cent, and expected it to become very strong, peaking towards the end of 2026. For Thailand, such events usually mean a hotter, drier start to the year, and farmers who depend on reservoirs worry that water will become scarce long before the next rainy season.\n\n(3) Dry weather brings a second danger. PM2.5 usually peaks in the dry season, when still air traps smoke and dust close to the ground. A drier year is likely to mean more fires and less rain to wash the air clean.\n\n(4) Dr Siriporn Thanakul, an environmental scientist at Lanna Institute of Environmental Studies, says the two problems should not be treated separately. “We plan for floods in September and for smoke in March as if they belonged to different countries,” she says. “They are the same climate system swinging from one extreme to the other.”\n\n(5) Some solutions already exist. In one northern district, a pilot scheme pays farmers to sell rice straw and corn stalks to factories that turn them into animal feed and packaging, instead of burning them in the fields. The scheme is small, but it shows how waste from one industry can become a resource for another.\n\n(6) None of this will stop El Niño, which is a natural pattern. But, as Dr Siriporn points out, the damage it causes depends partly on choices that people make long before the heat arrives.';

/* ---------------------------------------------------------------- LEVEL 2 */
T8.levels.push({ id:'t8l2', n:2, name:'Planet', cefr:'B2+',
  blurb:'Climate and energy, El Niño, floods and early warning, PM2.5, fast fashion and the circular economy.',
  subs:[

  /* ------------------------------------------------------------- l2 s1 wk-climate */
  { id:'t8l2s1', name:'Climate & energy', cefr:'B2',
    theory:{
      key:'<strong>Greenhouse gases</strong> trap heat and slowly warm the whole planet (climate change); <strong>El Niño</strong> and <strong>La Niña</strong> are natural Pacific swings that shift rain from place to place — and a strong El Niño usually gives Thailand a hotter, drier dry season.',
      body:[
        '<strong>Weather is not climate.</strong> <strong>Weather</strong> is what happens today; <strong>climate</strong> is the long-term average, usually measured over about 30 years. The <strong>greenhouse effect</strong> works like this: sunlight warms the Earth’s surface, the warm surface gives off heat, and <strong>greenhouse gases</strong> such as carbon dioxide (CO₂) and methane absorb part of that heat and send some of it back down. That natural effect keeps the planet liveable. Burning <strong>fossil fuels</strong> — coal, oil and gas — adds extra CO₂, so more heat is kept in and average temperatures rise. The results in the passages: more intense <strong>heatwaves</strong>, heavier downpours, <strong>droughts</strong> and rising seas.',
        '<strong>Two kinds of response.</strong> <strong>Mitigation</strong> tackles the cause: cutting <strong>emissions</strong> with <strong>renewable</strong> energy (solar, wind, hydro), public transport, electric vehicles and planting forests. <strong>Adaptation</strong> copes with the effects: flood walls, drought-resistant rice, cooling centres. <strong>Net zero</strong> means reducing emissions as far as possible and balancing whatever is left by removing the same amount from the air. Your <strong>carbon footprint</strong> is the total greenhouse gas your activities cause. EVs release no fumes on the street, but their total footprint depends on how the battery is made and how the electricity is generated; most studies find their lifetime emissions are lower than petrol cars in most countries.',
        '<strong>El Niño vs La Niña.</strong> Normally the Pacific trade winds blow east to west, piling warm water — and rain clouds — near Indonesia and Australia. In an <strong>El Niño</strong> the winds weaken, the warm water spreads back east, and rain follows it: South America may flood while Southeast Asia often turns hotter and drier. <strong>La Niña</strong> is roughly the opposite — stronger winds, cooler eastern Pacific, usually more rain for Southeast Asia. Both are natural and are not <em>caused</em> by climate change, although El Niño years tend to push global temperatures up and scientists are studying how warming may change them. For 2026–27, the World Meteorological Organization’s update of 3 September gives a near-100% chance that El Niño lasts through February 2027, strengthening to a <strong>very strong</strong> event that peaks towards the end of 2026; for Thailand this usually means a hotter, drier early 2027, drought risk for farmers and a worse PM2.5 season.',
        '<strong>How TCAS uses it.</strong> Expect cause–effect questions (“Why is Thailand expected to be drier?”), vocabulary (<em>mitigate, scarcity, sustainable, emission</em>) and NOT questions. Step 1: decide whether a sentence is about the <em>cause</em> (gases, fuels, winds) or the <em>effect</em> (heat, drought). Step 2: notice hedges — forecasters “expect”, El Niño “usually” means. An option that turns “usually” into “always” is wrong.'
      ],
      simple:['Some gases in the air keep heat in, like a blanket. When we burn coal, oil and gas, we make the blanket thicker, so the Earth gets warmer.','El Niño happens every few years when warm water moves east across the Pacific Ocean. In Thailand it usually means less rain and more heat. La Niña is the opposite and usually brings more rain.'],
      thai:'ก๊าซเรือนกระจก (greenhouse gases) เช่น CO₂ กักเก็บความร้อนไว้ การเผาเชื้อเพลิงฟอสซิลทำให้โลกร้อนขึ้นในระยะยาว ส่วน El Niño และ La Niña เป็นปรากฏการณ์ธรรมชาติในมหาสมุทรแปซิฟิกที่ย้ายตำแหน่งฝน El Niño มักทำให้ไทยร้อนและแล้งขึ้น (ปี 2026–27 คาดว่าจะรุนแรงมาก และลากยาวถึง ก.พ. 2027) ส่วน La Niña มักทำให้ฝนมากขึ้น แยก mitigation (ลดสาเหตุ เช่น ลดการปล่อยก๊าซ) กับ adaptation (ปรับตัวรับผลกระทบ เช่น สร้างกำแพงกันน้ำ) ให้ออก กับดักในข้อสอบ: ตัวเลือกที่บอกว่า El Niño “เกิดจาก” ภาวะโลกร้อน หรือเปลี่ยนคำว่า usually เป็น always มักผิด',
      examples:[
        { s:'Burning coal releases <strong>greenhouse gases</strong> that trap heat in the atmosphere.', g:'greenhouse gases = CO₂, methane, etc.' },
        { s:'Solar farms help <strong>mitigate</strong> climate change by cutting emissions.', g:'mitigate = reduce how serious something is (tackle the cause)' },
        { s:'Raising houses on stilts is a form of <strong>adaptation</strong> to flooding.', g:'adaptation = coping with effects' },
        { s:'The company aims to reach <strong>net zero</strong> by 2050.', g:'emissions cut, the rest balanced by removals' },
        { s:'A strong <strong>El Niño</strong> could leave reservoirs low by March.', g:'El Niño → hotter, drier Thailand (usually)' }
      ],
      trap:'Mixing up the natural swing and the long-term trend. El Niño is a natural Pacific pattern, not a result of climate change, and it does not usually bring floods to Thailand — that is more typical of La Niña. Also watch hedges: “usually drier” is not “always drier”.',
      analogy:{ title:'The Pacific bathtub', text:'Picture the Pacific as a long bathtub with a fan (the trade winds) blowing warm water to the Thai end. Turn the fan down and the warm water sloshes back to the far end — that’s El Niño, and the rain clouds go with it, leaving our side drier. Turn the fan up and even more warm water piles up on our side — La Niña, with more rain. Climate change, meanwhile, is someone slowly turning up the hot tap for the whole tub.' },
      map:{ center:'Climate & energy', branches:[
        { label:'The cause', leaves:['greenhouse effect','CO₂ & methane','burning fossil fuels'] },
        { label:'The effects', leaves:['heatwaves','droughts','heavier downpours','rising seas'] },
        { label:'Responses', leaves:['mitigation: cut emissions','adaptation: cope','net zero','renewables & EVs'] },
        { label:'ENSO swings', leaves:['El Niño: drier Thailand','La Niña: wetter','natural, every few years'] } ] },
      chant:{ title:'Niño, Niña', beat:'stomp-clap, stomp-clap (4/4)', lines:[
        'Winds blow west, warm water stays,',
        'Rain clouds feed our rainy days.',
        'Winds go weak? Warm water roams —',
        'El Niño takes the rain from our homes.',
        'Hot and dry, the reservoirs low,',
        'Smoke stays trapped where no winds blow.',
        'Winds blow strong? La Niña’s here,',
        'Extra rain for us this year!' ] }
    },
    items:[
      { id:'t8l2s1-1', type:'read', tag:'wk-climate', level:'B2', passage:T8_P_ENSO, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, what happens to the trade winds during an El Niño?',
        options:['They carry cold water from South America to Australia.','They strengthen and push more warm water towards Indonesia.','They reverse direction because the ocean has become colder.','They weaken, so warm water spreads back towards the east.'],
        answer:3,
        hint:'Paragraph 2 describes El Niño first and La Niña second. Don’t mix them up.',
        why:'Paragraph 2 says “During an El Niño, the trade winds weaken and the warm water spreads back east.” “They strengthen” is the near-miss: that describes La Niña. The passage never says the winds reverse or carry cold water to Australia.' },
      { id:'t8l2s1-2', type:'equiv', tag:'wk-climate', level:'B2',
        given:'Switching the city’s buses to electric power could help <strong>mitigate</strong> the effects of climate change.',
        stem:'The word “mitigate” is closest in meaning to ________.',
        options:['predict','adapt to','make less severe','measure accurately'],
        answer:2,
        hint:'Is the city measuring the problem, living with it, or acting on its cause?',
        why:'To <em>mitigate</em> something is to make it less severe, here by cutting emissions. “Adapt to” is the near-miss: adaptation means learning to cope with the effects, not reducing them. Measuring or predicting does not change the problem at all.' },
      { id:'t8l2s1-3', type:'sort', tag:'wk-climate', level:'B2',
        stem:'Is each action mitigation (tackling the cause) or adaptation (coping with the effects)?',
        bins:[ { key:'mit', label:'Mitigation', hint:'Cuts or removes greenhouse gases.' }, { key:'ada', label:'Adaptation', hint:'Protects people from the effects.' } ],
        items:[
          { text:'A factory installs solar panels on its roof', bin:'mit' },
          { text:'A city replaces diesel buses with electric ones', bin:'mit' },
          { text:'Volunteers plant trees on a bare hillside', bin:'mit' },
          { text:'Farmers switch to a drought-resistant rice variety', bin:'ada' },
          { text:'A district builds higher flood walls along a canal', bin:'ada' },
          { text:'Schools open air-conditioned cooling rooms during heatwaves', bin:'ada' } ],
        hint:'Ask: does this action reduce the gases, or help people live with heat, drought and floods?',
        why:'Solar panels and electric buses cut emissions, and trees absorb CO₂, so all three are mitigation. Drought-resistant rice, flood walls and cooling rooms do nothing to the gases; they protect people from the effects, so they are adaptation.' },
      { id:'t8l2s1-4', type:'choose', tag:'wk-climate', level:'B2+',
        stem:'Which statement about El Niño and Thailand is the most accurate?',
        options:['It usually brings Thailand a hotter, drier dry season.','It happens every year, at the start of Thailand’s cool season.','It is caused by greenhouse gases released from burning fossil fuels.','It usually brings heavier rain and more flooding to central Thailand.'],
        answer:0,
        hint:'Think about which way the rain clouds move during an El Niño.',
        why:'During an El Niño the warm water and rain clouds move east, away from Southeast Asia, so Thailand usually gets a hotter, drier dry season and more drought risk. Heavier rain is more typical of La Niña. El Niño is a natural pattern, not caused by fossil fuels, and it occurs every few years, not every year.' },
      { id:'t8l2s1-5', type:'judge', tag:'wk-climate', level:'B2+',
        given:T8_P_EV,
        stem:'True, False or Not Given? “Most drivers in Thailand plan to buy an EV within the next five years.”',
        answer:2,
        hint:'Does the passage mention any country’s drivers or their plans?',
        why:'Not Given. The passage explains how an EV’s climate effect depends on battery production and electricity, but it says nothing about Thai drivers or anyone’s plans to buy a car.' }
    ] },

  /* ------------------------------------------------------------- l2 s2 wk-disaster */
  { id:'t8l2s2', name:'Disasters & early warning', cefr:'B2+',
    theory:{
      key:'A disaster story has a shape — <strong>cause → warning → response → aftermath</strong> — and knowing the words for each stage (flash flood, cell broadcast, evacuate, relief, displaced) lets you read any flood or earthquake report at speed.',
      body:[
        '<strong>Floods.</strong> A <strong>flash flood</strong> arrives within hours of intense rain, with fast-moving water and little warning; a river flood rises more slowly over days. Bangkok is low-lying and sits on the Chao Phraya, so it can be hit by heavy local rain and by water coming down the river from upstream at the same time. The 2026 floods: prolonged heavy rain fell from 16 September; on <strong>24–27 September 2026</strong>, parts of the city received over 300 mm of rain in 48 hours, while water was released from the Chao Phraya Dam upstream at 1,500–2,500 cubic metres per second; Bangkok declared a <strong>flood disaster zone</strong> on 26 September; water blocked traffic at 37 locations; the city said draining would take 2–3 days after the rain stopped. By 29 September about 2.6 million people in about 940,000 households had been affected, 29 provinces as well as Bangkok were flooded, and 23 people had died (in Bangkok alone, about 700,000 people in 329,000 households). By 4 October the totals had risen to almost 3.3 million people and 31 deaths, with water falling in Bangkok but rising in the Central region. Earlier, in late November 2025, <strong>Hat Yai</strong> in Songkhla suffered record rainfall that the media described as a “once-in-300-years” event, with hospitals and homes flooded.',
        '<strong>Warning.</strong> An <strong>early warning</strong> system gives people time to act. In the 2026 floods warnings were sent by <strong>cell broadcast</strong>: instead of texting numbers one by one, the phone towers send one alert to every compatible phone in the danger zone at the same time — no phone number or app needed. Then people may <strong>evacuate</strong> (leave for a safe place); those who lose their homes are <strong>displaced</strong>. <strong>Relief</strong> is emergency help (food, water, boats, shelters); the <strong>aftermath</strong> is the period after the disaster, when damaged <strong>infrastructure</strong> — roads, power lines, hospitals — must be repaired. A <strong>resilient</strong> city recovers quickly.',
        '<strong>Earthquakes.</strong> <strong>Magnitude</strong> measures the energy released; each whole step up means roughly 32 times more energy. The <strong>epicentre</strong> is the point on the surface above where the quake starts; <strong>aftershocks</strong> are smaller quakes that follow. On <strong>28 March 2025</strong> a magnitude 7.7 earthquake struck Myanmar. Bangkok, hundreds of kilometres away, felt strong shaking, and a high-rise building under construction collapsed. Experts have pointed out that Bangkok’s soft clay ground can amplify distant shaking, especially in tall buildings.',
        '<strong>How TCAS uses it.</strong> News reports (Part III) love disasters: “What caused…?”, “Which is NOT mentioned as a result?”, “The word ‘reinforced’ is closest in meaning to…”. Step 1: label paragraphs by stage (cause / warning / response / aftermath). Step 2: numbers questions — match the <em>unit</em> (people vs households vs provinces vs districts).'
      ],
      simple:['A flash flood comes very fast after very heavy rain. Cell broadcast sends one warning to every phone in an area at the same time.','People evacuate (leave) to stay safe. Relief is help like food and boats. The aftermath is the time after a disaster, when people clean and repair.'],
      thai:'ข่าวภัยพิบัติมักเรียงตามลำดับ สาเหตุ → การเตือนภัย → การรับมือ → ผลที่ตามมา (aftermath) Flash flood คือน้ำท่วมฉับพลันภายในไม่กี่ชั่วโมงหลังฝนตกหนัก ส่วน cell broadcast คือการส่งข้อความเตือนจากเสาสัญญาณไปยังโทรศัพท์ทุกเครื่องในพื้นที่พร้อมกัน ไม่ต้องรู้เบอร์ ไม่ต้องลงแอป กรุงเทพฯ ประกาศเขตพื้นที่ประสบภัยน้ำท่วมเมื่อ 26 ก.ย. 2026 กับดักในข้อสอบ: ตัวเลขที่หน่วยต่างกัน เช่น 2.6 ล้าน “คน” กับ 940,000 “ครัวเรือน” และ 29 “จังหวัด” กับ 23 “ผู้เสียชีวิต”',
      examples:[
        { s:'The <strong>flash flood</strong> filled the underpass within an hour.', g:'sudden, fast flood after intense rain' },
        { s:'A <strong>cell broadcast</strong> alert reached every phone in the district at once.', g:'one message → all phones in an area' },
        { s:'Hundreds of families were <strong>displaced</strong> when the river burst its banks.', g:'displaced = forced to leave home' },
        { s:'Volunteers delivered <strong>relief</strong> supplies by boat.', g:'relief = emergency help' },
        { s:'Several <strong>aftershocks</strong> followed the main earthquake.', g:'smaller quakes after the main one' }
      ],
      trap:'Unit swaps in numbers questions. 2.6 million is people; 940,000 is households; 29 is provinces; 700,000 is people in Bangkok; 23 is deaths (all on 29 September). Distractors pair the right number with the wrong noun. Read the noun after every number.',
      analogy:{ title:'Cell broadcast is the school PA system', text:'Texting everyone one by one is like a teacher walking to every classroom to deliver the same message — by room 40 the danger has arrived. Cell broadcast is the school loudspeaker: one announcement, every room, the same second. It doesn’t need to know your name — only that you’re in the building.' },
      map:{ center:'Disasters', branches:[
        { label:'Cause', leaves:['intense rain','dam releases upstream','earthquake: magnitude'] },
        { label:'Warning', leaves:['early warning','cell broadcast','flood barriers'] },
        { label:'Response', leaves:['evacuate','relief supplies','state of emergency'] },
        { label:'Aftermath', leaves:['displaced families','repair infrastructure','resilient city'] } ] },
      story:{ title:'Nong Bot’s Personal Flood Service', panels:[
        { who:'Nong Bot', text:'Flood alert! I am texting all 2,400 students one by one. Message 1 of 2,400 sent… message 2 of 2,400…' },
        { who:'Pun', text:'By message 2,400 we’ll all be swimming to school.' },
        { who:'Mint', text:'*BZZZT* My phone just screamed at me! “Flash flood warning. Move to higher ground.” And so did Fah’s. And Krit’s.' },
        { who:'Krit', text:'That’s cell broadcast. The phone towers sent one alert to every phone in the area at the same time. They didn’t even need our numbers.' },
        { who:'Nong Bot', text:'But… my personal service is so friendly! Message 3 of 2,400: “Hello! Hope you are well! Please consider evacuating.”' },
        { who:'T.Chris', text:'In a flash flood, friendly and slow loses to loud and instant. Everyone upstairs — and Nong Bot, please stop texting Pun.' } ],
        moral:'Cell broadcast sends one warning to every phone in the danger area at once — speed is the whole point of early warning.' }
    },
    items:[
      { id:'t8l2s2-1', type:'read', tag:'wk-disaster', level:'B2', passage:T8_P_FLOOD, source:'Adapted for TCAS70 practice',
        stem:'According to the report, what caused the flooding?',
        options:['blocked drains at 37 locations across the capital','heavy rain plus water released from a dam upstream','a flood barrier that failed in the east of the city','a high tide that pushed sea water into the eastern districts'],
        answer:1,
        hint:'Find the paragraph that uses the word “caused”.',
        why:'Paragraph 3 says the flooding “was caused by very heavy rain combined with water released from the Chao Phraya Dam upstream”. The 37 locations are where traffic was blocked, not blocked drains, and the barriers were reinforced, not described as failing. Sea water is never mentioned.' },
      { id:'t8l2s2-2', type:'read', tag:'wk-disaster', level:'B2+', passage:T8_P_FLOOD, source:'Adapted for TCAS70 practice',
        stem:'Which statement is supported by paragraph 6?',
        options:['About 700,000 people in Bangkok were affected.','Around 940,000 households were affected in Bangkok alone.','About 2.6 million households were hit across 29 provinces.','Floods reached 29 of Bangkok’s 50 districts by 29 September.'],
        answer:0,
        hint:'Check the noun that comes after each number.',
        why:'Paragraph 6 says “In Bangkok, about 700,000 people in 329,000 households were affected”, so the key matches both the number and the place. The other options pair real numbers with the wrong nouns or places: 2.6 million is people, not households; 29 is provinces, not districts; and the 940,000 households belong to the nationwide sentence, not to Bangkok alone.' },
      { id:'t8l2s2-3', type:'read', tag:'wk-disaster', level:'B2+', passage:T8_P_FLOOD, source:'Adapted for TCAS70 practice',
        stem:'The word “reinforced” in paragraph 4 is closest in meaning to ________.',
        options:['removed','redesigned','double-checked','strengthened'],
        answer:3,
        hint:'What would a city do to barriers when the water is rising?',
        why:'With floodwater rising, the city made its temporary barriers stronger: <em>reinforced</em> means strengthened. “Double-checked” is the near-miss, because checking barriers is also sensible, but it does not mean making them stronger. Removing or designing barriers does not fit an emergency response.' },
      { id:'t8l2s2-4', type:'judge', tag:'wk-disaster', level:'B2',
        given:T8_P_CB,
        stem:'True, False or Not Given? “To receive a cell broadcast warning, a person must first register their phone number.”',
        answer:1,
        hint:'What does the passage say the system needs to know?',
        why:'False. The passage says the system “does not need to know anyone’s phone number” and users do not need an app; the alert goes to every compatible phone in the area.' },
      { id:'t8l2s2-5', type:'sort', tag:'wk-disaster', level:'B2',
        stem:'Put each event into the stage of a flood when it most likely happens.',
        bins:[ { key:'before', label:'Before', hint:'Preparing and warning.' }, { key:'during', label:'During', hint:'Responding while water is high.' }, { key:'after', label:'Aftermath', hint:'Recovering and repairing.' } ],
        items:[
          { text:'Phones receive a cell broadcast warning that heavy rain is on the way', bin:'before' },
          { text:'Workers stack sandbags along a canal when heavy rain is forecast', bin:'before' },
          { text:'Rescue boats carry people from submerged houses', bin:'during' },
          { text:'Displaced families sleep in a school hall used as a shelter', bin:'during' },
          { text:'Volunteers clear mud from classrooms once the water drains', bin:'after' },
          { text:'Engineers inspect damaged roads and power lines', bin:'after' } ],
        hint:'Ask: is the water still coming, already high, or gone?',
        why:'Warnings and stacking sandbags happen before the water arrives. Boat rescues and emergency shelters happen while houses are still submerged. Clearing mud and inspecting damaged infrastructure belong to the aftermath, after the water has drained.' }
    ] },

  /* ------------------------------------------------------------- l2 s3 wk-eco */
  { id:'t8l2s3', name:'Waste, pollution & consumption', cefr:'B2+',
    theory:{
      key:'Most pollution stories are about a <strong>line</strong> — take, make, throw away — and most solutions try to bend it into a <strong>circle</strong>; PM2.5, fast fashion and greenwashing are the three versions TCAS70 is most likely to show you.',
      body:[
        '<strong>PM2.5.</strong> <strong>Particulate matter</strong> 2.5 micrometres across or smaller — roughly thirty times thinner than a hair. Because it is so small, it gets past the nose and throat, deep into the lungs, and the finest particles can enter the bloodstream; long-term exposure is linked to heart and lung disease. Thai sources include vehicle <strong>exhaust</strong> (especially older diesel engines), <strong>crop burning</strong>, forest fires and industry. It peaks in the dry season (roughly December–April) because cool, still air can be trapped under a warmer layer like a lid, with no rain to wash the particles out — which is why a strong El Niño year is expected to make the PM2.5 season worse. People check the <strong>AQI</strong> (Air Quality Index) and wear N95 masks.',
        '<strong>Fast fashion.</strong> Cheap, trend-led clothes produced in weeks. Critics say it makes clothing <strong>disposable</strong>. Much of it is polyester — a plastic made from oil — which sheds <strong>microfibres</strong> when washed. Mixed-fibre fabrics are hard to recycle, so most old clothes end up in <strong>landfill</strong> or are burned. Note the difference: <strong>recyclable</strong> means <em>can</em> be recycled; it does not mean it <em>will</em> be. <strong>Biodegradable</strong> materials break down naturally, but often only under the right conditions.',
        '<strong>The fix and the fake fix.</strong> A <strong>linear economy</strong> takes, makes and throws away. A <strong>circular economy</strong> designs waste out: reduce, reuse, repair, share, <strong>repurpose</strong>, and recycle last — turning one industry’s waste into another’s resource (rice straw sold for packaging instead of burned). <strong>Greenwashing</strong> is the fake fix: making a company or product look greener than it is — a tiny “eco” range, vague words like “natural” or “conscious”, a leaf on the label. Passages about <strong>consumption</strong> often end with the <strong>sustainable</strong> choice: buy less, choose better, use longer.',
        '<strong>How TCAS uses it.</strong> TCAS has used milk footprints, waste classification and fast fashion. Expect “Why is PM2.5 especially harmful?” (size), “Why is the dry season worse?” (still air + burning), and tone questions (critical of greenwashing). Step: when a green claim appears, ask “Is there evidence, or only a label?”'
      ],
      simple:['PM2.5 is very small dust and smoke. It can go deep into your lungs. In Thailand it is worst from about December to April, when the air is dry and still.','Fast fashion is cheap clothes we buy and throw away quickly. A circular economy tries to reuse and repair things instead of throwing them away. Greenwashing is pretending to be good for the environment.'],
      thai:'PM2.5 คือฝุ่นละอองขนาดไม่เกิน 2.5 ไมครอน เล็กจนเข้าไปลึกถึงปอดและบางส่วนเข้ากระแสเลือดได้ แหล่งหลักในไทยคือไอเสียรถ การเผาในที่โล่ง ไฟป่า และอุตสาหกรรม ฝุ่นสะสมมากในหน้าแล้ง (ประมาณ ธ.ค.–เม.ย.) เพราะอากาศนิ่งและมีชั้นอากาศอุ่นกดทับเหมือนฝาชี Circular economy คือการออกแบบให้ของเสียกลายเป็นทรัพยากร ส่วน greenwashing คือการทำให้ดูรักษ์โลกเกินจริง กับดักในข้อสอบ: recyclable แปลว่า “รีไซเคิลได้” ไม่ได้แปลว่า “ถูกรีไซเคิลแล้ว”',
      examples:[
        { s:'On high-<strong>PM2.5</strong> days, schools cancel outdoor sports.', g:'fine particles that reach deep into the lungs' },
        { s:'The brand was accused of <strong>greenwashing</strong> after launching one small “eco” line.', g:'looking greener than you are' },
        { s:'In a <strong>circular economy</strong>, old jeans are repaired, resold or turned into insulation.', g:'waste becomes a resource' },
        { s:'The cup is <strong>recyclable</strong>, but most are still thrown into general waste.', g:'can be recycled ≠ is recycled' },
        { s:'<strong>Fast fashion</strong> encourages people to treat clothes as <strong>disposable</strong>.', g:'cheap, trend-led, thrown away quickly' }
      ],
      trap:'Believing the label. TCAS distractors repeat a company’s green claim (“the brand is environmentally friendly”) when the passage only reports the claim — or criticises it. Separate what the company <em>says</em> from what the writer <em>shows</em>.',
      analogy:{ title:'Bubble tea, two ways', text:'Linear: buy a bubble tea, drink it, bin the cup, the straw, the lid and the bag — every day. Circular: bring your own cup, the shop gives a discount, the old tapioca goes to a pig farm, and the cup lasts a year. Greenwashing is a shop printing a leaf on its plastic cup and calling it “eco-friendly”.' },
      map:{ center:'Waste & pollution', branches:[
        { label:'PM2.5', leaves:['≤ 2.5 micrometres','deep into lungs','burning & exhaust','dry-season peak'] },
        { label:'Fast fashion', leaves:['cheap & trend-led','polyester microfibres','landfill'] },
        { label:'Circular economy', leaves:['reduce, reuse, repair','repurpose waste','recycle last'] },
        { label:'Greenwashing', leaves:['vague “eco” labels','tiny green range','ask for evidence'] } ] },
      moves:[
        { move:'Draw a straight line in the air from left to right', says:'Take — make — throw away: that’s linear.' },
        { move:'Pinch fingers together, very small', says:'PM2.5: tiny enough to reach the lungs.' },
        { move:'Bend the line into a big circle with both arms', says:'Reuse, repair, repurpose — make it circular!' },
        { move:'Stick a pretend leaf on your chest, then peel it off', says:'A green label isn’t proof — check the evidence.' } ]
    },
    items:[
      { id:'t8l2s3-1', type:'read', tag:'wk-eco', level:'B2', passage:T8_P_PM, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, PM2.5 is especially harmful because it ________.',
        options:['can be seen clearly on days with no wind','is made mostly of smoke from forest fires','is thicker than other kinds of dust in the air','is small enough to travel deep into the lungs'],
        answer:3,
        hint:'Paragraph 1 compares PM2.5 with larger dust. What does the larger dust fail to do?',
        why:'Larger dust “is mostly caught in the nose and throat, but PM2.5 is small enough to travel deep into the lungs”. Forest fires are only one of several sources, and the passage never says PM2.5 is visible or thicker than other dust — it is much smaller.' },
      { id:'t8l2s3-2', type:'read', tag:'wk-eco', level:'B2+', passage:T8_P_PM, source:'Adapted for TCAS70 practice',
        stem:'Why, according to the passage, does PM2.5 build up during the dry season?',
        options:['Farmers plant new crops that release more dust.','Families check the Air Quality Index less often.','A layer of warm air traps particles near the ground.','The cooler months bring much stronger winds from the sea.'],
        answer:2,
        hint:'Look for the comparison “like a lid”.',
        why:'The passage says “a layer of warm air can sit above cooler air near the ground like a lid, and with little wind or rain to clear it, the particles build up”. It mentions burning crop waste, not planting crops; it says there is little wind, not stronger winds; and checking the AQI is a response, not a cause.' },
      { id:'t8l2s3-3', type:'equiv', tag:'wk-eco', level:'B2+',
        given:'Campaigners accused the brand of <strong>greenwashing</strong> after it advertised a “conscious” range that made up less than 2% of its clothes.',
        stem:'The word “greenwashing” is closest in meaning to ________.',
        options:['cleaning factories to meet environmental rules','charging more for environmentally friendly goods','recycling old clothes into brand-new products for sale','making a company seem more eco-friendly than it is'],
        answer:3,
        hint:'Compare what the advert suggests with the “less than 2%”.',
        why:'The advert makes the brand look green, but the “conscious” range is under 2% of its clothes: greenwashing means making a company seem more environmentally friendly than it really is. Charging more for green goods is the near-miss — it is a real marketing practice, but the sentence is about a misleading image, not price.' },
      { id:'t8l2s3-4', type:'sort', tag:'wk-eco', level:'B2',
        stem:'Does each habit belong to a linear economy or a circular economy?',
        bins:[ { key:'lin', label:'Linear', hint:'Take, make, throw away.' }, { key:'cir', label:'Circular', hint:'Keep materials in use.' } ],
        items:[
          { text:'Buying a new party outfit and wearing it only once', bin:'lin' },
          { text:'Burning rice straw in the field after the harvest', bin:'lin' },
          { text:'Throwing away a phone because its screen cracked', bin:'lin' },
          { text:'Selling rice straw to a factory that makes packaging', bin:'cir' },
          { text:'Taking a torn school bag to be repaired', bin:'cir' },
          { text:'Swapping outgrown uniforms at a school exchange day', bin:'cir' } ],
        hint:'Does the material end its life after one use, or go on being used?',
        why:'Wearing an outfit once, burning straw and binning a phone with a fixable screen all end a material’s life quickly: linear. Selling straw as a raw material, repairing a bag and swapping uniforms keep materials in use: circular.' },
      { id:'t8l2s3-5', type:'choose', tag:'wk-eco', level:'B2+',
        stem:'The label says the bottle is ________, but that does not mean it will actually be recycled.',
        options:['recycler','recyclable','recycled','recycling'],
        answer:1,
        hint:'The sentence contrasts what the label says with what will actually happen. Which form describes a possibility, not a fact?',
        why:'<em>Recyclable</em> means “able to be recycled”, which sets up the contrast with “will actually be recycled”. “Recycled” is the near-miss: it describes what the bottle is already made from, not what can happen to it next, so the contrast would not work. “Recycler” (a person or machine) and “recycling” do not describe a bottle correctly here.' }
    ] }
  ],
  check:{ id:'t8l2ck', name:'Systems Check · Planet', items:[
    { id:'t8l2ck-1', type:'read', tag:'wk-climate', level:'C1', passage:T8_P_L2CK, source:'Adapted for TCAS70 practice',
      stem:'The main idea of the passage is that ________.',
      options:['floods and dry spells should be planned for together, not apart','farmers in the North should be paid to stop growing rice and corn','El Niño will cause the worst PM2.5 season Thailand has ever recorded','Bangkok’s flood defences failed because the city had not prepared for record rain'],
      answer:0,
      hint:'Which idea connects the floods of paragraph 1 and the dry season of paragraphs 2–3?',
      why:'The passage moves from “too much water” to “the opposite problem” and uses Dr Siriporn to argue that floods and smoke are “the same climate system swinging from one extreme to the other”. It never says the flood defences failed, predicts a record PM2.5 season, or says farmers should stop growing crops — they are paid to sell straw.' },
    { id:'t8l2ck-2', type:'read', tag:'wk-climate', level:'B2+', passage:T8_P_L2CK, source:'Adapted for TCAS70 practice',
      stem:'The word “scarce” in paragraph 2 is closest in meaning to ________.',
      options:['expensive to buy','polluted and unsafe','in short supply','hard to reach'],
      answer:2,
      hint:'Farmers depend on reservoirs, and the start of the year will be drier. What happens to the water?',
      why:'In a hot, dry season, reservoirs run low, so water becomes <em>scarce</em> — in short supply. “Expensive” is the near-miss, since scarce things often cost more, but the word describes the amount, not the price. Nothing suggests the water is polluted or hard to reach.' },
    { id:'t8l2ck-3', type:'read', tag:'wk-disaster', level:'B2+', passage:T8_P_L2CK, source:'Adapted for TCAS70 practice',
      stem:'Which information about the September 2026 floods is given in paragraph 1?',
      options:['the number of deaths','how long draining took','how warnings reached residents','the reason the rain was so heavy'],
      answer:2,
      hint:'Read paragraph 1 only, and tick off what it actually states.',
      why:'Paragraph 1 says warnings “reached residents’ phones by cell broadcast”. It gives the rainfall figure and the disaster-zone declaration but no death toll, no draining time and no explanation of why the rain was so heavy.' },
    { id:'t8l2ck-4', type:'read', tag:'wk-eco', level:'C1', passage:T8_P_L2CK, source:'Adapted for TCAS70 practice',
      stem:'It can be inferred from paragraph 3 that a drier year is likely to worsen PM2.5 partly because ________.',
      options:['rain normally helps to clean the air','farmers choose to burn more fields in hot weather','factories produce more smoke when water is scarce','still air stops El Niño from reaching Thailand'],
      answer:0,
      hint:'Look at the phrase “less rain to wash the air clean”. What does it tell you rain usually does?',
      why:'If a drier year means “less rain to wash the air clean”, then rain normally helps to remove particles. The passage mentions “more fires” but does not say farmers choose to burn more because of the heat, and it says nothing about factories or about still air blocking El Niño.' },
    { id:'t8l2ck-5', type:'read', tag:'wk-eco', level:'C1', passage:T8_P_L2CK, source:'Adapted for TCAS70 practice',
      stem:'Why does the writer mention the rice straw and corn stalks in paragraph 5?',
      options:['to criticise factories for buying cheap materials','to explain how forest fires begin in northern districts','to show that farmers earn more from packaging than from rice','to give an example of waste being turned into a resource'],
      answer:3,
      hint:'Read the last sentence of paragraph 5.',
      why:'The paragraph ends: “it shows how waste from one industry can become a resource for another” — a circular-economy example that also reduces burning. The writer gives no income comparison, does not discuss how forest fires start, and does not criticise the factories.' },
    { id:'t8l2ck-6', type:'read', tag:'wk-disaster', level:'C1', passage:T8_P_L2CK, source:'Adapted for TCAS70 practice',
      stem:'Which statement best reflects the writer’s view in paragraph 6?',
      options:['Damage from El Niño depends partly on human preparation.','El Niño can be prevented if people make better choices.','Because El Niño is natural, there is nothing people can do.','Scientists disagree about whether El Niño is a natural pattern.'],
      answer:0,
      hint:'The paragraph starts with what cannot be changed, then turns with “But”.',
      why:'The writer accepts that nothing “will stop El Niño” but says the damage “depends partly on choices that people make long before the heat arrives”, i.e. on preparation. “There is nothing people can do” ignores the “But” clause, and “can be prevented” contradicts “None of this will stop El Niño”. No scientific disagreement is mentioned.' }
  ] }
});

/* ------------------------------------------------------------ LEVEL 3 TEXTS */
var T8_P_SLEEP = 'Parents often complain that teenagers stay up too late and cannot get up in the morning. Biology is at least partly to blame. During adolescence, the body clock — the internal timer that tells us when to feel sleepy — shifts later. Melatonin, the hormone that signals to the body that it is night, tends to be released later in the evening in teenagers than in younger children, so many sixteen-year-olds genuinely do not feel tired until late at night.\n\nSleep experts generally recommend eight to ten hours a night for people aged 13 to 18, yet early school starts mean that many get far less. Evening screen use may make the problem worse: bright light late in the evening can delay the release of melatonin, and an exciting game or an endless feed keeps the brain alert. The cost shows up the next day. Short sleep affects concentration and mood, and it may also weaken memory, because the sleeping brain helps to sort and store what was learned during the day.';

var T8_P_UPF = 'Ultra-processed foods are industrial products made mostly from substances extracted from foods, often with additives such as flavourings, colourings and emulsifiers that are rarely used in home cooking. Packaged snacks, sugary drinks, instant noodles and many ready meals fall into this group. Large studies have linked diets high in ultra-processed food to obesity, type 2 diabetes and heart disease.\n\nMost of these studies, however, are observational: they show that people who eat more ultra-processed food tend to have more health problems, but they cannot prove that the food itself is the cause, because the same people may also sleep less, exercise less or have less money to spend on fresh food. Stronger evidence comes from controlled experiments. In one small but carefully designed study, volunteers who were offered an ultra-processed diet ate noticeably more calories than when they were offered an unprocessed one — even though both diets were matched for sugar, fat and fibre.';

var T8_P_SKILLS = 'When people imagine artificial intelligence and jobs, they often picture robots replacing workers one by one. Many economists describe a less dramatic but more widespread change. Most jobs are bundles of tasks, and AI tends to take over some tasks within a job rather than the whole job at once. An accountant may no longer spend hours typing figures into spreadsheets, but still needs to explain the numbers to a worried client.\n\nThat is why employers increasingly talk about two kinds of training. To upskill is to improve your abilities so that you can do your current job better, such as an accountant learning to use new AI software. To reskill is to learn new abilities so that you can move into a different job altogether, such as a call-centre worker retraining as a data analyst. In both cases, the skills that machines find hardest to copy — communication, teamwork, judgement and creativity — are becoming more valuable, not less.';

var T8_P_INTEGRITY = 'From next term, a Bangkok secondary school will allow students to use AI tools for some assignments, under three rules. First, each teacher will state on the task sheet whether AI may be used for brainstorming, for checking grammar, or not at all. Second, students who use AI must add a short note explaining which tool they used and for what. Third, work that is presented as the student’s own but was mostly written by AI will be treated in the same way as copying from another student. The deputy director said the aim was “honesty, not a ban”.';

var T8_P_NONVERBAL = 'You may have heard that 93 per cent of communication is nonverbal. The figure is one of the most quoted “facts” about body language, and one of the most misunderstood. It comes from experiments in the 1960s in which listeners judged a speaker’s feelings from single words spoken in different tones of voice, sometimes alongside photographs of faces. The researcher himself later warned that the results applied only to situations like these — when words, tone and face seem to disagree about feelings — and not to communication in general. Nobody can understand a lecture on chemistry from the lecturer’s posture alone.\n\nWhat is true is that nonverbal signals — facial expressions, gestures, eye contact, posture, tone of voice and the distance we keep from others — carry a great deal of meaning, and that the meaning often depends on culture. Steady eye contact may signal honesty in one country and disrespect towards an older person in another. In Thailand, touching someone’s head or pointing at something with your foot is considered rude, while visitors who have never learned this may do both without a second thought.';

var T8_P_TOUR = 'Maya Bay, on the island of Koh Phi Phi Leh, became famous around the world after appearing in a Hollywood film at the start of the 2000s. By the late 2010s, thousands of visitors a day were arriving by boat, and the coral in the bay was badly damaged. In 2018, the authorities closed the bay to let the beach and the reefs recover. When it reopened in 2022, boats were no longer allowed to enter the bay, swimming was banned, and visitor numbers were limited.\n\nMaya Bay has become a textbook example of overtourism: the point at which visitors do more harm to a place, and to the people who live there, than the place can absorb. Popular destinations around the world now try a range of solutions, from entrance fees and daily limits to promoting less-visited places, in the hope of spreading tourists — and their money — more evenly.';

var T8_P_L3CK = '(1) At first glance, Baan Kafe looks like any other café in Bangkok: bare brick walls, perfect latte art and a queue of university students with laptops. The difference is behind the counter. Half of the baristas are over 60.\n\n(2) The café was opened by Nattapong Srisuk, a former engineer who noticed that many of his retired neighbours were lonely and bored. “People told me they felt invisible after they retired,” he says. Thailand is already an aged society and is moving towards a super-aged society, as people live longer and fewer babies are born.\n\n(3) Every new barista completes a six-week training course. For many, it is the first time they have had to reskill in decades: they learn to use the card reader, the delivery apps and the espresso machine. The younger staff teach the technology. In return, the older staff, many of whom once ran shops or managed teams, teach something their young colleagues admit they lack: patience with difficult customers.\n\n(4) Not everything has gone smoothly. Some older staff found the lunchtime rush exhausting, so the café introduced shorter shifts. Communication also needed work. “When a young colleague rolled her eyes, I thought she was being rude,” says a 67-year-old barista. “She told me she was just tired after an exam. We laughed about it later, but it taught me to ask before I assume.”\n\n(5) Nattapong says the benefits go beyond coffee. Several older staff report that they walk more and sleep better than they did at home, and some say the job has given them a reason to get up in the morning.\n\n(6) He admits that one café cannot solve the challenges of an ageing society. “But if older people are only ever seen as patients,” he says, “we waste decades of experience.”';

/* ---------------------------------------------------------------- LEVEL 3 */
T8.levels.push({ id:'t8l3', n:3, name:'People', cefr:'C1',
  blurb:'Sleep, diet and an ageing society; skills, AI and academic integrity; body language, bilingualism, soft power and overtourism.',
  subs:[

  /* ------------------------------------------------------------- l3 s1 wk-health */
  { id:'t8l3s1', name:'Health & wellbeing', cefr:'B2+',
    theory:{
      key:'Health passages turn on two ideas: the body runs on <strong>rhythms and habits</strong> (sleep, movement, diet, stress), and good writers say a habit is <strong>linked to</strong> a problem unless an experiment has shown it <strong>causes</strong> it.',
      body:[
        '<strong>Sleep.</strong> Your <strong>body clock</strong> (circadian rhythm) decides when you feel sleepy. In adolescence it shifts later, partly because the sleep hormone <strong>melatonin</strong> tends to be released later in the evening — so a teenager who “can’t sleep before 11” is not simply lazy. Sleep experts generally recommend 8–10 hours a night for 13–18-year-olds. Bright light and exciting content late at night may delay sleep further. <strong>Sleep deprivation</strong> harms concentration and mood and may weaken memory, because the sleeping brain helps to store what you learned that day.',
        '<strong>Movement and food.</strong> A <strong>sedentary</strong> lifestyle involves long periods of sitting (TCAS69 tested <em>sedentary</em>). The WHO advises children and teenagers to average at least 60 minutes a day of moderate-to-vigorous activity. Long hours of sitting are associated with higher risks of heart disease and type 2 diabetes. <strong>Ultra-processed food</strong> — packaged snacks, sugary drinks, instant noodles — is made largely from extracted substances and additives. Diets high in it are <strong>linked to</strong> <strong>obesity</strong> and <strong>chronic</strong> (long-lasting) disease; most evidence is <strong>observational</strong>, so writers hedge. Your daily <strong>intake</strong> is how much you consume; <strong>moderation</strong> means not too much.',
        '<strong>Stress and society.</strong> Short-term stress can sharpen you before an exam; <strong>chronic stress</strong> wears you down. The WHO describes <strong>burnout</strong> as an occupational phenomenon caused by long-term workplace stress, not as a medical condition. <strong>Mental health</strong> and <strong>wellbeing</strong> cover how we think, feel and cope. Finally, the <strong>ageing society</strong>: because people live longer and fewer babies are born, the share of older people rises. Thailand is described as an “aged society” — roughly one person in five, or more, is aged 60 or over — and it is moving towards a “super-aged society”. Consequences in passages: fewer working-age people, more demand for healthcare and caregivers, and new “silver” jobs and products.',
        '<strong>How TCAS uses it.</strong> Articles on sleep, diet, the heart and vitamin D ask for detail, vocabulary (<em>intake, sedentary, vital</em>) and inference. Step 1: underline the verb of evidence — <em>causes, leads to</em> (strong) versus <em>is linked to, is associated with, may</em> (weak). Step 2: reject options that make a weak claim strong (“proves that”, “always”).'
      ],
      simple:['Teenagers’ body clocks move later, so they feel sleepy later at night. They need about 8–10 hours of sleep.','Sitting all day and eating a lot of ultra-processed food are linked to health problems. “Linked to” does not mean “causes” — it means they often happen together.'],
      thai:'บทความสุขภาพมักพูดถึงนาฬิกาชีวิต (body clock) ของวัยรุ่นที่เลื่อนช้าลง ทำให้ง่วงดึกขึ้น และควรนอน 8–10 ชั่วโมง การนั่งนานๆ (sedentary) และอาหารแปรรูปสูง (ultra-processed food) “มีความเชื่อมโยง” กับโรคเรื้อรัง ส่วนไทยเป็นสังคมสูงอายุ (aged society) และกำลังก้าวสู่สังคมสูงอายุระดับสุดยอด (super-aged society) เพราะคนอายุยืนขึ้นและเด็กเกิดน้อยลง กับดักในข้อสอบ: ถ้าบทความใช้คำว่า linked to / associated with / may อย่าเลือกตัวเลือกที่บอกว่า “พิสูจน์แล้วว่าเป็นสาเหตุ”',
      examples:[
        { s:'A <strong>sedentary</strong> lifestyle is linked to a higher risk of heart disease.', g:'sedentary = involving a lot of sitting' },
        { s:'Cutting your daily sugar <strong>intake</strong> is easier if you avoid sugary drinks.', g:'intake = the amount you take in' },
        { s:'<strong>Sleep deprivation</strong> made it hard for her to focus in the exam.', g:'not getting enough sleep' },
        { s:'Diets high in <strong>ultra-processed food</strong> are <strong>associated with</strong> obesity.', g:'associated with = linked, not proven cause' },
        { s:'As an <strong>ageing society</strong>, Thailand will need more trained caregivers.', g:'more older people, fewer young ones' }
      ],
      trap:'Upgrading the evidence. The passage says “linked to” or “may”; the tempting option says “proves”, “causes” or “always”. A correlation is not a cause — people who eat more ultra-processed food may also sleep less or exercise less.',
      analogy:{ title:'Umbrellas and wet roads', text:'On days when lots of people carry umbrellas, the roads are wet. Umbrellas are linked to wet roads — but they don’t cause them; the rain causes both. Health studies face the same problem: a habit and an illness can appear together because a third thing (money, sleep, stress) sits behind both. Only a controlled experiment takes the umbrella away and checks whether the road stays wet.' },
      map:{ center:'Health & wellbeing', branches:[
        { label:'Sleep', leaves:['body clock shifts later','8–10 hours for teens','deprivation hurts memory'] },
        { label:'Body', leaves:['sedentary lifestyle','60 minutes activity','ultra-processed food'] },
        { label:'Mind', leaves:['chronic stress','burnout','mental health'] },
        { label:'Society', leaves:['aged society','live longer','fewer births','caregivers needed'] },
        { label:'Evidence words', leaves:['linked ≠ causes','may, associated with'] } ] },
      chant:{ title:'Body Clock Beat', beat:'tap-tap-clap, tap-tap-clap (4/4)', lines:[
        'Tick-tock, my body clock runs late,',
        'Melatonin’s slow — it makes me wait.',
        'Eight to ten, that’s the teenage sleep,',
        'Memories stored while I sleep deep.',
        'Sitting all day? That’s sedentary!',
        'Sixty minutes moving — necessary!',
        'Linked to, linked to, not the same as cause,',
        'Read the verb and take a pause!' ] }
    },
    items:[
      { id:'t8l3s1-1', type:'read', tag:'wk-health', level:'B2', passage:T8_P_SLEEP, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, many teenagers do not feel tired until late at night because ________.',
        options:['they need less sleep than adults do','they drink more caffeine than younger children','their schools start too early in the morning','their melatonin tends to be released later'],
        answer:3,
        hint:'Paragraph 1 says “Biology is at least partly to blame.” Which biological change follows?',
        why:'The passage explains that melatonin “tends to be released later in the evening in teenagers”, so they genuinely do not feel tired until late. Early school starts are the near-miss: they explain why teenagers get too little sleep, not why they feel awake at night. Caffeine is never mentioned, and teenagers need 8–10 hours, not less.' },
      { id:'t8l3s1-2', type:'equiv', tag:'wk-health', level:'B2',
        given:'Doctors warn that long hours of <strong>sedentary</strong> study can harm students’ health, even if they exercise at the weekend.',
        stem:'The word “sedentary” is closest in meaning to ________.',
        options:['done alone','very stressful','involving a lot of sitting','done late at night after school'],
        answer:2,
        hint:'Why would weekend exercise be mentioned as not fully solving the problem?',
        why:'<em>Sedentary</em> describes activities or lifestyles with long periods of sitting and little movement — which weekend exercise may not balance. “Very stressful” is tempting because study can be stressful, but the contrast with exercise points to lack of movement. Studying late or alone is not the meaning.' },
      { id:'t8l3s1-3', type:'judge', tag:'wk-health', level:'B2+',
        given:T8_P_UPF,
        stem:'True, False or Not Given? “Observational studies have proved that ultra-processed food is the direct cause of obesity.”',
        answer:1,
        hint:'What does paragraph 2 say observational studies can and cannot do?',
        why:'False. The passage says observational studies “cannot prove that the food itself is the cause”, because other habits may explain the link.' },
      { id:'t8l3s1-4', type:'read', tag:'wk-health', level:'C1', passage:T8_P_UPF, source:'Adapted for TCAS70 practice',
        stem:'Why does the writer mention that people who eat more ultra-processed food “may also sleep less, exercise less or have less money”?',
        options:['to show that poorer people cannot afford healthy food','to criticise people for their unhealthy daily habits','to suggest that sleep matters more than diet for body weight','to explain why these studies cannot prove cause and effect'],
        answer:3,
        hint:'Look at the word “because” just before this phrase.',
        why:'The phrase follows “they cannot prove that the food itself is the cause, because…”, so it lists other factors that might explain the link. The money point is only one possible factor, not the writer’s argument; the writer does not rank sleep above diet or criticise anyone.' },
      { id:'t8l3s1-5', type:'choose', tag:'wk-health', level:'B2+',
        stem:'Which pair of trends best explains why a country becomes an “aged society”?',
        options:['more tourists and busier cities','larger families and higher incomes','rising birth rates and shorter lives','falling birth rates and longer lives'],
        answer:3,
        hint:'Think about the two ends of life: who is joining the population, and how long people stay in it.',
        why:'A population ages when fewer babies are born and people live longer, so the share of older people rises. Rising birth rates and larger families would make the population younger, and tourism has nothing to do with the age of residents.' }
    ] },

  /* ------------------------------------------------------------- l3 s2 wk-work */
  { id:'t8l3s2', name:'Education & the future of work', cefr:'C1',
    theory:{
      key:'AI tends to change <strong>tasks</strong> before it replaces whole <strong>jobs</strong>, so the passages praise people who <strong>upskill</strong> (get better at their job) or <strong>reskill</strong> (train for a new one), value human <strong>soft skills</strong> — and insist on <strong>academic integrity</strong> when AI enters the classroom.',
      body:[
        '<strong>Tasks, not just jobs.</strong> A job is a bundle of tasks. <strong>Automation</strong> and AI tend to take over the routine, predictable tasks first — data entry, simple translation, first drafts — while people keep the tasks that need judgement, trust and explanation. Many economists therefore describe AI as changing most jobs rather than simply deleting them, though they disagree about how fast and how far. Key words: <strong>employability</strong> (how easy you are to employ), the <strong>gig economy</strong> (short-term jobs paid per task, like delivery riders), <strong>remote</strong> and <strong>hybrid</strong> work, <strong>credentials</strong> (proof of qualifications).',
        '<strong>Upskill vs reskill.</strong> To <strong>upskill</strong> is to improve your abilities for your <em>current</em> job (an accountant learning AI software). To <strong>reskill</strong> is to learn new abilities for a <em>different</em> job (a call-centre worker retraining as a data analyst). Both are part of <strong>lifelong learning</strong>. <strong>Hard skills</strong> are specific and testable (coding, accounting); <strong>soft skills</strong> are the human ones — communication, teamwork, adaptability, leadership — along with <strong>critical thinking</strong> and creativity, which machines find hardest to copy.',
        '<strong>Academic integrity.</strong> Honesty in study: doing your own work and giving credit to others. <strong>Plagiarism</strong> is presenting someone else’s words or ideas as your own — including lightly reworded text and, under most school rules, AI-written work handed in as yours. <strong>Citing</strong> a source means naming it; <strong>paraphrasing</strong> means rewriting an idea in your own words <em>and</em> still citing it. Many schools now allow some AI use with rules: the teacher says when AI is allowed, and students <strong>disclose</strong> how they used it. TCAS has run passages on exam cheating and AI in class.',
        '<strong>How TCAS uses it.</strong> Expect attitude questions (Is the writer alarmed, or balanced?), vocabulary (<em>prospective, collaborate, autonomy</em>) and “which detail best supports”. Step 1: find whether the passage says AI replaces <em>jobs</em> or changes <em>tasks</em>. Step 2: in integrity passages, separate what is allowed from what is banned — options often blur the two.'
      ],
      simple:['AI can do some parts of a job, like typing numbers, but people still do the parts that need thinking and talking.','Upskill = get better at your job. Reskill = learn a new job. Plagiarism = using someone else’s work as your own. Academic integrity = being honest in your studies.'],
      thai:'AI มักเข้ามาแทน “งานย่อย” (tasks) ที่เป็นงานประจำก่อน มากกว่าจะแทน “ทั้งอาชีพ” ทันที คนจึงต้อง upskill (พัฒนาทักษะเพื่องานเดิม) หรือ reskill (เรียนทักษะใหม่เพื่อเปลี่ยนงาน) และทักษะอย่าง soft skills หรือ critical thinking มีค่ามากขึ้น ส่วน academic integrity คือความซื่อสัตย์ทางวิชาการ การส่งงานที่ AI เขียนเป็นส่วนใหญ่โดยอ้างว่าเป็นของตัวเองถือเป็น plagiarism ตามกฎของโรงเรียนส่วนใหญ่ กับดักในข้อสอบ: สลับความหมายของ upskill กับ reskill และตัวเลือกที่บอกว่า AI “แทนที่ทุกอาชีพ” ทั้งที่บทความพูดแค่ “บางงาน”',
      examples:[
        { s:'The bank offered to <strong>reskill</strong> its call-centre staff as data analysts.', g:'reskill = train for a different job' },
        { s:'Nurses were <strong>upskilled</strong> to use the new AI scheduling system.', g:'upskill = improve skills for the same job' },
        { s:'Employers say <strong>soft skills</strong> such as teamwork are harder to find than technical ones.', g:'soft skills = people skills' },
        { s:'Handing in an AI-written essay as your own breaks the school’s <strong>academic integrity</strong> policy.', g:'honesty in study' },
        { s:'Even a good <strong>paraphrase</strong> still needs a citation.', g:'own words + credit the source' }
      ],
      trap:'Swapping upskill and reskill — the classic near-miss in vocabulary items. Ask: same job, better (upskill) or new job (reskill)? And in AI-and-jobs passages, reject options that say AI “will replace all” jobs when the text talks about some tasks.',
      analogy:{ title:'Upgrading your character vs switching class', text:'In an RPG, levelling up your healer so she heals faster is upskilling. Deciding your healer should become an archer — new weapons, new skill tree — is reskilling. And using someone else’s save file to show a boss you “beat” is plagiarism: the achievement badge is real, but it isn’t yours.' },
      map:{ center:'Future of work', branches:[
        { label:'AI & jobs', leaves:['tasks change first','routine work automated','judgement stays human'] },
        { label:'Training', leaves:['upskill: same job','reskill: new job','lifelong learning'] },
        { label:'Skills', leaves:['hard skills','soft skills','critical thinking'] },
        { label:'Integrity', leaves:['plagiarism','cite & paraphrase','disclose AI use'] } ] },
      story:{ title:'Pun’s 100% Original Essay', panels:[
        { who:'Pun', text:'Essay finished in four minutes. Nong Bot wrote it, I changed “utilise” to “use” five times. That makes it mine, right?' },
        { who:'Fah', text:'Our task sheet says AI for brainstorming only, and you have to add a note saying how you used it.' },
        { who:'Nong Bot', text:'I am happy to help! I have also added a note: “This essay was written entirely by Nong Bot. Pun changed five words.”' },
        { who:'Pun', text:'Nong Bot! That’s… actually very honest of you.' },
        { who:'T.Chris', text:'Changing five words isn’t paraphrasing, Pun, it’s camouflage. Use the AI to brainstorm, write it yourself, disclose it — that’s academic integrity. Also, a skill you can outsource in four minutes isn’t the skill that will get you into Engineering.' } ],
        moral:'Changing a few words does not make someone else’s — or an AI’s — work yours. Follow the rules, write it yourself and disclose your AI use.' }
    },
    items:[
      { id:'t8l3s2-1', type:'equiv', tag:'wk-work', level:'B2+',
        given:'After the call centre was automated, the company paid for its staff to <strong>reskill</strong> as data analysts.',
        stem:'The word “reskill” is closest in meaning to ________.',
        options:['leave the company with extra payment','learn new skills for a different job','teach their old skills to younger workers','improve the skills used in their current job'],
        answer:1,
        hint:'Compare the staff’s old work with the work they are training for.',
        why:'The staff move from call-centre work to a new role as data analysts, so they <em>reskill</em>: learn new skills for a different job. “Improve the skills used in their current job” is the near-miss — that is upskilling. Leaving with payment or teaching others does not fit “as data analysts”.' },
      { id:'t8l3s2-2', type:'read', tag:'wk-work', level:'B2+', passage:T8_P_SKILLS, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, how does AI usually affect jobs?',
        options:['It takes over some tasks, not whole jobs.','It replaces workers one by one in most industries.','It makes communication skills less important at work.','It mainly creates new jobs for accountants and analysts.'],
        answer:0,
        hint:'Paragraph 1 contrasts what people “picture” with what economists describe.',
        why:'Economists say “AI tends to take over some tasks within a job rather than the whole job at once”. Robots replacing workers one by one is what people wrongly “picture”, and communication skills are said to become more valuable, not less. The passage does not claim AI mainly creates jobs for accountants.' },
      { id:'t8l3s2-3', type:'sort', tag:'wk-work', level:'B2',
        stem:'Sort these abilities into hard skills and soft skills.',
        bins:[ { key:'hard', label:'Hard skills', hint:'Specific, technical, easy to test.' }, { key:'soft', label:'Soft skills', hint:'How you work with people and problems.' } ],
        items:[
          { text:'Writing code in Python', bin:'hard' },
          { text:'Using accounting software', bin:'hard' },
          { text:'Typing 60 words a minute in Thai', bin:'hard' },
          { text:'Calming down an angry customer', bin:'soft' },
          { text:'Sharing work fairly in a group project', bin:'soft' },
          { text:'Adapting quickly when plans change', bin:'soft' } ],
        hint:'Could you pass a simple test with a clear right answer? Then it is probably a hard skill.',
        why:'Coding, accounting software and typing speed are specific, technical and easy to test, so they are hard skills. Calming a customer, teamwork and adaptability are about dealing with people and change — soft skills, the kind machines find hardest to copy.' },
      { id:'t8l3s2-4', type:'judge', tag:'wk-work', level:'B2+',
        given:T8_P_INTEGRITY,
        stem:'True, False or Not Given? “Under the new rules, students may use AI in any assignment as long as they add a note.”',
        answer:1,
        hint:'Who decides whether AI may be used on a task?',
        why:'False. Each teacher states whether AI may be used “for brainstorming, for checking grammar, or not at all”, so some assignments do not allow AI even with a note.' },
      { id:'t8l3s2-5', type:'choose', tag:'wk-work', level:'B2+',
        stem:'Copying a paragraph from a website and changing only a few words, without naming the source, is still ________.',
        options:['citation','paraphrase','plagiarism','collaboration'],
        answer:2,
        hint:'Two clues: “only a few words” and “without naming the source”.',
        why:'Using someone else’s words with small changes and no credit is <em>plagiarism</em>. “Paraphrase” is the near-miss: a real paraphrase uses your own words and still names the source. Citation means naming the source (which did not happen), and collaboration means working together.' }
    ] },

  /* ------------------------------------------------------------- l3 s3 wk-culture */
  { id:'t8l3s3', name:'Culture & communication', cefr:'C1',
    theory:{
      key:'Meaning is not only in the words: <strong>body language</strong>, <strong>culture</strong>, <strong>language choice</strong> and even a country’s <strong>image</strong> send messages — and the same signal can mean different things in different places.',
      body:[
        '<strong>Nonverbal communication.</strong> Facial expressions, <strong>gestures</strong>, <strong>eye contact</strong>, <strong>posture</strong>, tone of voice, touch and personal space all carry meaning. Beware the famous “93% of communication is nonverbal” claim: it comes from 1960s experiments on judging <em>feelings</em> from single words and tones, and the researcher himself warned against applying it to communication in general. What is true: nonverbal meaning often depends on culture. Steady eye contact can signal honesty in one place and disrespect to an elder in another; in Thailand, touching someone’s head or pointing with your foot is rude. The <strong>wai</strong> itself changes with rank and age.',
        '<strong>Intercultural communication.</strong> <strong>Intercultural competence</strong> is the ability to communicate well across cultures. A <strong>stereotype</strong> is an oversimplified belief about a group (“all Gen Z are lazy”). <strong>Culture shock</strong> — the confusion of living in a new culture — is often described as moving from excitement to frustration to adjustment. Some cultures are often described as more <strong>high-context</strong> (meaning is implied; Thailand is usually placed here) and others as more <strong>low-context</strong> (meaning is said directly). <strong>Etiquette</strong> is the accepted code of polite behaviour. Generations matter too: Gen Z is usually dated from the late 1990s to the early 2010s, though definitions vary.',
        '<strong>Language, image and travel.</strong> A <strong>bilingual</strong> person uses two languages; moving between them in one conversation is <strong>code-switching</strong>. Some studies suggest bilingualism may help with certain attention tasks, but researchers still debate how large this “bilingual advantage” is — so expect hedged claims. <strong>Soft power</strong>, a term coined by political scientist Joseph Nye, is a country’s ability to influence others by attraction (food, films, music, sport) rather than by force or payment; K-pop is the classic case, and Thailand’s food, Muay Thai, dramas and stars like Buri Ram’s Lisa are often cited. Soft power draws tourists — and too many can cause <strong>overtourism</strong>, when visitors damage a place or its residents’ lives. Maya Bay in Krabi was closed from 2018 to 2022 so its coral and beach could recover.',
        '<strong>How TCAS uses it.</strong> TCAS has used nonverbal communication, intercultural misunderstandings, bilingual children and Lisa/Buri Ram. Expect “What does the writer imply about…”, “the word ‘etiquette’ is closest to…” and attitude questions. Step: when a passage explains a gesture, find <em>whose</em> culture gives it that meaning — options often make a local meaning universal.'
      ],
      simple:['We also “talk” with our face, hands, eyes and body. But the same gesture can mean different things in different countries.','Bilingual people speak two languages. Soft power is when a country makes others like it through food, music and films. Overtourism is when too many tourists damage a place.'],
      thai:'การสื่อสารไม่ได้อยู่ที่คำพูดอย่างเดียว ภาษากาย (nonverbal) เช่น ท่าทาง การสบตา ระยะห่าง มีความหมายต่างกันในแต่ละวัฒนธรรม ตัวเลข “93% ของการสื่อสารเป็นอวัจนภาษา” เป็นการอ้างผิดบริบท Soft power คืออิทธิพลที่ได้จากความชื่นชอบ (อาหาร ภาพยนตร์ ดนตรี) ไม่ใช่การบังคับหรือจ่ายเงิน ส่วน overtourism คือนักท่องเที่ยวมากเกินจนสร้างความเสียหาย เช่น อ่าวมาหยาที่ปิดฟื้นฟูปี 2018–2022 กับดักในข้อสอบ: ตัวเลือกที่ทำให้ความหมายของท่าทางในวัฒนธรรมหนึ่งกลายเป็น “สากล”',
      examples:[
        { s:'In some cultures, avoiding <strong>eye contact</strong> with a teacher is a sign of respect.', g:'nonverbal meaning depends on culture' },
        { s:'She <strong>code-switches</strong> between Thai and English with her friends.', g:'moves between two languages in one conversation' },
        { s:'Thai food has become a powerful source of <strong>soft power</strong>.', g:'influence through attraction' },
        { s:'Residents protested that <strong>overtourism</strong> had pushed up rents in the old town.', g:'too many visitors harming a place' },
        { s:'Not every teenager fits the <strong>stereotype</strong> of being addicted to phones.', g:'oversimplified belief about a group' }
      ],
      trap:'Universalising a local meaning. If the passage says a gesture is rude “in Thailand” or “in some cultures”, the wrong option says it is rude “everywhere” or “in all Asian countries”. Keep the scope the writer gives.',
      analogy:{ title:'Body language is a local SIM card', text:'Your phone works everywhere, but your SIM card might not — you need the local network. Gestures are the same: your hands and face travel with you, but their meanings run on the local “network” of culture. A thumbs-up that connects fine in Bangkok may drop the call somewhere else.' },
      map:{ center:'Culture & communication', branches:[
        { label:'Nonverbal', leaves:['gestures & posture','eye contact','personal space','93% myth'] },
        { label:'Intercultural', leaves:['stereotypes','culture shock','high vs low context'] },
        { label:'Language', leaves:['bilingual','code-switching','advantage debated'] },
        { label:'Image & travel', leaves:['soft power','Thai food, Lisa, Muay Thai','overtourism: Maya Bay'] } ] },
      moves:[
        { move:'Point to your eyes, then tilt your head down politely', says:'Eye contact: honest here, bold there — it depends where.' },
        { move:'Press palms together in a wai', says:'Gestures speak — in a local language.' },
        { move:'Wave one hand left, then right', says:'Code-switch: Thai to English and back again.' },
        { move:'Open arms wide as if welcoming a crowd', says:'Soft power: they come because they like us…' },
        { move:'Cross arms in an X', says:'…but too many at once is overtourism!' } ]
    },
    items:[
      { id:'t8l3s3-1', type:'read', tag:'wk-culture', level:'B2+', passage:T8_P_NONVERBAL, source:'Adapted for TCAS70 practice',
        stem:'What does the writer suggest about the claim that 93 per cent of communication is nonverbal?',
        options:['It is popular but rests on very narrow experiments.','It is true in Thailand but not in most other cultures.','It was invented by writers who had never done any research.','It has been confirmed by recent studies of lectures and classes.'],
        answer:0,
        hint:'Where does the figure come from, and what did the researcher himself say about it?',
        why:'The writer calls it “one of the most quoted” and “most misunderstood” facts and explains it came from experiments on judging feelings from single words, which the researcher said did not apply to communication in general. No recent confirmation is mentioned, the figure is not linked to Thailand, and it did come from real research.' },
      { id:'t8l3s3-2', type:'equiv', tag:'wk-culture', level:'B2+',
        given:'Korean dramas and K-pop have greatly increased South Korea’s <strong>soft power</strong>.',
        stem:'The phrase “soft power” is closest in meaning to ________.',
        options:['income earned from exporting entertainment','control over the music played on social media','the legal right to sell its films in other countries','influence gained by making others admire a country'],
        answer:3,
        hint:'How do dramas and songs change the way the world feels about a country?',
        why:'Soft power is influence that comes from attraction — people admire a country’s culture and so view it more favourably. Export income is the near-miss: K-pop does earn money, but soft power is about influence and image, not revenue. Selling rights and controlling music are not the meaning.' },
      { id:'t8l3s3-3', type:'read', tag:'wk-culture', level:'B2+', passage:T8_P_TOUR, source:'Adapted for TCAS70 practice',
        stem:'According to the passage, why was Maya Bay closed in 2018?',
        options:['because it had appeared in a Hollywood film','so the damaged beach and coral could recover','so that a new pier for boats could be built','because the number of tourists suddenly dropped'],
        answer:1,
        hint:'Find the sentence with “closed” and read to its end.',
        why:'The authorities “closed the bay to let the beach and the reefs recover” after damage from thousands of daily visitors. The film made the bay famous years earlier but was not the reason for closing it. When it reopened, boats were kept out of the bay, not given a pier, and visitor numbers had been rising, not falling.' },
      { id:'t8l3s3-4', type:'sort', tag:'wk-culture', level:'C1',
        stem:'Is each action an example of soft power or hard power (force or payment)?',
        bins:[ { key:'soft', label:'Soft power', hint:'Others are attracted.' }, { key:'hard', label:'Hard power', hint:'Others are pushed or paid.' } ],
        items:[
          { text:'A Thai street-food festival draws crowds in London', bin:'soft' },
          { text:'Foreign students choose to learn Thai after watching Thai dramas', bin:'soft' },
          { text:'A Thai singer’s world tour sells out in six countries', bin:'soft' },
          { text:'A country threatens trade sanctions unless a rule is changed', bin:'hard' },
          { text:'Warships are sent near a disputed border', bin:'hard' },
          { text:'A large payment is offered in return for a vote', bin:'hard' } ],
        hint:'Do people choose to come closer because they like something, or are they forced or paid?',
        why:'Food festivals, dramas that make people want to learn Thai, and a singer’s tour make people like and admire a country, so they are soft power. Sanctions, warships and payments push or pay others to act, which is hard power.' },
      { id:'t8l3s3-5', type:'choose', tag:'wk-culture', level:'B2+',
        stem:'Fah often moves between Thai and English in the same conversation with her friends, a habit that linguists call ________.',
        options:['stereotyping','culture shock','code-switching','cultural assimilation'],
        answer:2,
        hint:'Focus on what Fah does inside a single conversation.',
        why:'Moving between two languages within one conversation is <em>code-switching</em>, common among bilingual speakers. Assimilation is the near-miss — it is about adopting another culture’s ways over time, not switching languages mid-conversation. Culture shock and stereotyping are unrelated to language choice.' }
    ] }
  ],
  check:{ id:'t8l3ck', name:'Systems Check · People', items:[
    { id:'t8l3ck-1', type:'read', tag:'wk-work', level:'C1', passage:T8_P_L3CK, source:'Adapted for TCAS70 practice',
      stem:'The primary purpose of the passage is to ________.',
      options:['explain why Thailand’s population is growing older','advertise a café that is popular with university students','describe a café where two generations learn from each other','argue that retired people should be required to return to work'],
      answer:2,
      hint:'A purpose must cover all six paragraphs, not one sentence.',
      why:'Most of the passage describes Baan Kafe’s older baristas, their training, what the generations teach each other, the problems and the benefits. The students in paragraph 1 are background, not an advert; nobody argues retirees should be required to work; and the causes of an ageing society take only one sentence.' },
    { id:'t8l3ck-2', type:'read', tag:'wk-health', level:'B2+', passage:T8_P_L3CK, source:'Adapted for TCAS70 practice',
      stem:'According to paragraph 2, Thailand is moving towards a super-aged society because ________.',
      options:['many older people feel lonely and invisible','people live longer and fewer babies are born','retired people are returning to work in cafés','younger workers are moving to other countries'],
      answer:1,
      hint:'Find the word “as” in the last sentence of paragraph 2.',
      why:'The paragraph says Thailand is moving towards a super-aged society “as people live longer and fewer babies are born”. Loneliness is why Nattapong opened the café, not a cause of population ageing; returning to work is the café’s response; and emigration is never mentioned.' },
    { id:'t8l3ck-3', type:'read', tag:'wk-work', level:'C1', passage:T8_P_L3CK, source:'Adapted for TCAS70 practice',
      stem:'The word “reskill” in paragraph 3 is closest in meaning to ________.',
      options:['retire from a job','learn new work skills','teach younger colleagues','repeat a course they have failed'],
      answer:1,
      hint:'What do the new baristas learn — skills from their old careers, or new ones?',
      why:'Former shop owners and managers learn card readers, delivery apps and espresso machines for a new kind of job, so <em>reskill</em> means learning abilities needed for new work. Teaching younger colleagues is the near-miss: the older staff do teach patience, but that is not what “reskill” describes. Repeating a failed course or retiring does not fit.' },
    { id:'t8l3ck-4', type:'read', tag:'wk-culture', level:'C1', passage:T8_P_L3CK, source:'Adapted for TCAS70 practice',
      stem:'What can be inferred from the barista’s story in paragraph 4?',
      options:['Body language can be misread, so it helps to check.','Younger staff are usually rude to their older colleagues.','The café shortened its shifts because of a misunderstanding.','Older staff struggle more with the café’s technology than with its customers.'],
      answer:0,
      hint:'What did the barista first think the eye-roll meant, and what did she learn?',
      why:'The barista read an eye-roll as rudeness, but it only meant tiredness; she learned “to ask before I assume” — nonverbal signals can be misread, so checking helps. One eye-roll does not show younger staff are “usually rude”, and the shorter shifts were introduced because the lunchtime rush was exhausting, not because of the misunderstanding.' },
    { id:'t8l3ck-5', type:'read', tag:'wk-health', level:'B2+', passage:T8_P_L3CK, source:'Adapted for TCAS70 practice',
      stem:'Which of the following is NOT mentioned as a benefit for the older staff?',
      options:['walking more','a higher income','sleeping better','a reason to get up in the morning'],
      answer:1,
      hint:'Check each option against paragraph 5.',
      why:'Paragraph 5 mentions walking more, sleeping better and having “a reason to get up in the morning”. Pay or income is never mentioned anywhere in the passage, so “a higher income” is the answer.' },
    { id:'t8l3ck-6', type:'read', tag:'wk-culture', level:'C1', passage:T8_P_L3CK, source:'Adapted for TCAS70 practice',
      stem:'By saying older people should not be “only ever seen as patients”, Nattapong implies that ________.',
      options:['older people should avoid going to hospitals','hospitals do not have enough staff for older patients','older patients are treated badly by young doctors','society often sees older people only as needing care'],
      answer:3,
      hint:'What does “only” suggest people are failing to see in older people?',
      why:'He contrasts “patients” with “decades of experience”: society tends to see older people only as people needing care, not as contributors. The options about hospitals, staffing and doctors take “patients” literally and add claims he never makes.' }
  ] }
});

TOPICS.push(T8);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'wk-ai': {
    name:'AI & digital life',
    principle:'Generative AI predicts likely words, images or sounds; it does not know or intend. Hallucination = confident but false output; bias = unfair patterns learned from data; deepfake = realistic fake video or audio.',
    reteach:'Start with a “predict the next word” game: students finish sentences and discover that the most likely ending is not always the true one — that is hallucination. Then show a short list of AI problems and ask what each puts at risk (truth, privacy, fairness). Finish by rewriting exam-style options that give AI human intentions (“lied”, “decided to trick”) into accurate ones (“produced a false answer”).',
    activities:[
      'Next-word chain: pairs build a “fact” one likely word at a time, then check whether it is true, and label it hallucination or fact.',
      'Risk triage: groups sort 8 AI headlines into Truth / Privacy / Fairness and justify each choice in one sentence.'
    ]
  },
  'wk-social': {
    name:'Social media & online safety',
    principle:'Free platforms sell attention to advertisers, so algorithms reward engagement. In number questions, check exactly what was counted: 4.7 million accounts removed is not 4.7 million children offline — more than 80% of under-16s were still using social media.',
    reteach:'Draw the money loop on the board: free app → attention → adverts → income → algorithm tuned for more attention. Link each effect (echo chamber, doomscrolling, virality) to the loop. Then read a short report on Australia’s under-16 ban and have students label each paragraph S (supporter) or C (critic), and underline the noun after every number.',
    activities:[
      'Money loop: students add design features (autoplay, streaks, notifications) to the loop and explain how each raises engagement.',
      'Count what? The teacher reads statistics with the nouns hidden; students guess the unit (accounts, people, per cent) and check against the text.'
    ]
  },
  'wk-media': {
    name:'Misinformation & media literacy',
    principle:'False and shared honestly = misinformation; false and spread on purpose = disinformation; an openly labelled joke = satire. To check a claim, leave the page and read laterally; trace photos with a reverse image search.',
    reteach:'Give three versions of the same false story: one made up by a scammer, one forwarded by a worried grandparent, one on a comedy site. Ask what separates them (intention and labelling). Then model lateral reading live: open new tabs about a website instead of studying its “About us” page, and compare the time and accuracy of both methods.',
    activities:[
      'Intent detectives: groups sort 9 case cards into Misinformation / Disinformation / Satire and must name the clue word that decided each.',
      'Tab race: pairs get an unfamiliar website; one reads vertically, one laterally, and they compare verdicts after three minutes.'
    ]
  },
  'wk-climate': {
    name:'Climate & energy',
    principle:'Greenhouse gases from fossil fuels warm the planet over decades; El Niño and La Niña are natural Pacific swings. El Niño usually brings Thailand a hotter, drier dry season. Mitigation cuts the cause; adaptation copes with the effects.',
    reteach:'Use the “Pacific bathtub” demo: a tray of water and a hairdryer as the trade winds; turn the wind down to show warm water sliding east (El Niño). Then run a two-column board — Mitigation vs Adaptation — and have students place real actions. Finish with hedges: underline “usually”, “expect”, “tend to” in a forecast paragraph and reject options that turn them into certainties.',
    activities:[
      'Niño or Niña? The teacher reads effects (“drought in Isan”, “extra rain in Indonesia”, “floods in Peru”); students hold up “El Niño” or “La Niña” cards.',
      'Cause or cope: teams race to sort 10 action cards into Mitigation and Adaptation, then defend one borderline case.'
    ]
  },
  'wk-disaster': {
    name:'Disasters & early warning',
    principle:'Read disaster reports as cause → warning → response → aftermath. Cell broadcast sends one alert to every phone in an area at once. In number questions, read the noun after each number (people, households, provinces, districts).',
    reteach:'Give students a flood news report cut into paragraphs and ask them to arrange them by stage, labelling each with a stage word (warning, evacuate, relief, aftermath). Then contrast SMS and cell broadcast with a classroom demo: the teacher whispers a message person to person versus announcing it to the whole room. End with a number-and-noun matching drill from the September 2026 Bangkok floods.',
    activities:[
      'Stage strips: groups sequence 8 strips from a disaster report and highlight the vocabulary that signals each stage.',
      'Number–noun match: students match 2.6 million, 940,000, 29, 700,000 and 23 to people, households, provinces, people in Bangkok and deaths from memory, then check.'
    ]
  },
  'wk-eco': {
    name:'Waste, pollution & consumption',
    principle:'PM2.5 is dangerous because it is tiny enough to reach deep into the lungs, and it peaks in the dry season when still air traps it. Linear = take, make, throw away; circular = keep materials in use. Greenwashing = a green image without the evidence.',
    reteach:'Compare a hair with a PM2.5 particle using a scaled drawing, then show how an inversion layer traps smoke (a lid on a pot of steam). For consumption, draw a straight line and a circle and let students place everyday habits on each. Finish by showing two real-style product claims and asking students what evidence would prove or disprove each.',
    activities:[
      'Line or loop: students place 10 habits (uniform swaps, one-wear outfits, straw burning, repairs) on a linear or circular diagram.',
      'Label lawyers: pairs receive an “eco” product label and must list the questions that would expose greenwashing.'
    ]
  },
  'wk-health': {
    name:'Health & wellbeing',
    principle:'Know the core facts (teen body clocks shift later; 8–10 hours of sleep; sedentary = lots of sitting) and read the evidence verb: “linked to” and “may” are weaker than “causes” or “proves”.',
    reteach:'Present two headlines about the same study, one saying “linked to” and one saying “causes”, and ask which the study can support. Use the umbrellas-and-wet-roads analogy to explain a hidden third factor. Then read a short health passage and have students underline every hedge word before answering questions, rejecting any option that upgrades the evidence.',
    activities:[
      'Hedge ladder: students rank verbs (proves, causes, leads to, is linked to, may be associated with) from strongest to weakest.',
      'Third-factor hunt: for five correlations (ice-cream sales and sunburn, shoe size and reading ability in children), groups name a hidden cause behind both.'
    ]
  },
  'wk-work': {
    name:'Education & the future of work',
    principle:'AI tends to change tasks before whole jobs. Upskill = better at the same job; reskill = trained for a new job. Academic integrity means doing your own work and crediting sources; changing a few words is not paraphrasing.',
    reteach:'List the tasks in one familiar job (a bank clerk, a teacher) and let students mark which could be automated and which need judgement — showing that jobs change rather than vanish. Drill upskill/reskill with quick scenarios. Then give a school AI policy and ask students to sort actions into allowed, allowed with disclosure, and not allowed.',
    activities:[
      'Task audit: groups break a job into 8 tasks and colour them “AI can help”, “human needed” or “both”.',
      'Up or re? The teacher reads 8 training scenarios; students stand up for upskill and turn around for reskill.'
    ]
  },
  'wk-culture': {
    name:'Culture & communication',
    principle:'Nonverbal meaning depends on culture, so keep the scope the writer gives (“in Thailand”, “in some cultures”). Soft power = influence by attraction; overtourism = visitors harming a place; code-switching = moving between languages.',
    reteach:'Act out gestures and eye-contact habits and ask students to guess meanings in different cultures, then debunk the “93% nonverbal” myth by explaining where it came from. Map Thai soft power (food, Muay Thai, dramas, stars) and discuss how it attracts tourists, leading to overtourism and the Maya Bay case. Close with scope practice: correct options that turn a local meaning into a universal one.',
    activities:[
      'Gesture passport: students show a gesture and give its meaning in two different cultures, noting where it could cause offence.',
      'Soft or hard? Teams sort news cards into soft power and hard power and explain the difference in one sentence.'
    ]
  }
});
