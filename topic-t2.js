/* ===========================================================================
   TCAS70 — SYSTEM 02 · Idioms, Sayings & Discourse Markers  (topic-t2.js)
   Section I conversations (items 1–20): TCAS69 put an idiom or a discourse
   marker in 11 of its 20 dialogue blanks. The examiners' favourite trick is the
   FAMILY TRAP: four real idioms that share a word (ear / rain / ado) or a
   feeling, and only one does the job that this moment in the talk needs.
   Core technique: name the JOB of the blank (listen? agree? add? contrast?
   start? hedge?) from the line before AND the line after, then choose.
   =========================================================================== */

/* ---------------------------------------------------------- shared dialogues */
var T2_L_CHAT = [
  { who: 'Situation', text: 'Two friends on the school bus' },
  { who: 'Ploy', text: 'Fah, have you got a minute? Something happened in the class group chat, and I don’t know what to do.' },
  { who: 'Fah', text: 'Of course. ___(1)___ Start from the beginning.' },
  { who: 'Ploy', text: 'Someone posted my old dance video from M1, and now the whole class is sending laughing stickers. Please don’t tell anyone how upset I am.' },
  { who: 'Fah', text: '___(2)___ I won’t say a word to anyone.' },
  { who: 'Ploy', text: 'Thanks. I just want to stop thinking about it.' },
  { who: 'Fah', text: 'Then forget the chat. Pun and I are planning our sports-day costumes on a video call at eight. Want to join?' },
  { who: 'Ploy', text: '___(3)___ I need something to take my mind off it.' }
];

var T2_L_MIDNIGHT = [
  { who: 'Situation', text: 'A student and her mother in the kitchen' },
  { who: 'Mum', text: 'Mint, why are you still up? It’s after midnight.' },
  { who: 'Mint', text: 'Chemistry. The test is tomorrow, and I’ve only finished half the chapter. Exams are the worst.' },
  { who: 'Mum', text: '___(4)___ When I was your age, I cried over physics every single week.' },
  { who: 'Mint', text: 'Really? You never told me that.' }
];

var T2_L_KHAOYAI = [
  { who: 'Situation', text: 'Two friends planning a weekend trip' },
  { who: 'Krit', text: 'So what time are we leaving for Khao Yai on Saturday?' },
  { who: 'Pun', text: 'No idea yet. It depends on the rain and on whether my dad needs the car. Let’s ___(1)___ and decide on Saturday morning.' },
  { who: 'Krit', text: 'Fine. But I’m not camping in the rain again. I’m happy to share a tent, but I ___(2)___ at sleeping in a wet one.' },
  { who: 'Pun', text: 'Relax. If it rains, we’ll stay in my uncle’s guesthouse.' }
];

var T2_L_TGAT = [
  { who: 'Situation', text: 'Two classmates talking about a practice test' },
  { who: 'Fah', text: 'Did you hear about Beam? She got the top score in the whole school on the TGAT practice test.' },
  { who: 'Oat', text: 'Really? She told everyone she hadn’t studied at all.' },
  { who: 'Fah', text: 'That’s just what she says. She studied every night for three months, so of course she passed ___(3)___' },
  { who: 'Oat', text: 'I guess nobody gets a score like that by accident.' }
];

var T2_L_CANTEEN = [
  { who: 'Situation', text: 'Two friends in the school canteen' },
  { who: 'Nan', text: 'My phone fell into the klong this morning, then the canteen ran out of chicken rice, and now I’ve just found out I left my project at home!' },
  { who: 'Bow', text: 'Oh no. It’s just like they say: ___(1)___' },
  { who: 'Nan', text: 'Wait, there’s a message from Ajarn Suda. She’s moved the project deadline to next week because of the sports day!' },
  { who: 'Bow', text: 'See? ___(2)___ Now you’ve got time to add those extra photos.' }
];

var T2_L_DEBATE = [
  { who: 'Situation', text: 'Two members of the debate team after a practice' },
  { who: 'Fah', text: 'Krit promised three times to help with our research, and he never sent us anything. Mint never promised anything, but she stayed until 9 p.m. to finish our slides.' },
  { who: 'Pun', text: '___(3)___ Next time, let’s ask Mint first.' }
];

var T2_L_RELAY = [
  { who: 'Situation', text: 'Two cousins after sports day' },
  { who: 'Krit', text: 'Coach made us run ten kilometres every morning for a month. My legs still hurt.' },
  { who: 'Mint', text: 'But your team won the relay! ___(4)___' },
  { who: 'Krit', text: 'True. I’d do it all again for that gold medal.' }
];

var T2_L_FILM = [
  { who: 'Situation', text: 'A video call between two friends, one in Bangkok and one in Chiang Mai' },
  { who: 'Beam', text: 'Aom! Finally! I’ve been trying to call you all day.' },
  { who: 'Aom', text: 'Sorry, I’ve been ___(1)___ in project work since Monday. What’s going on?' },
  { who: 'Beam', text: 'Big news. Remember the short film I sent to the youth film festival last year and then forgot about? The organisers called me ___(2)___ this morning. I’m in the final!' },
  { who: 'Aom', text: 'No way! Well, ___(3)___ You spent every weekend for a year on that film.' },
  { who: 'Beam', text: 'Thanks! The only problem is that the final is a live Q&A in front of the judges, and I’m starting to ___(4)___. What if I freeze and can’t say anything?' },
  { who: 'Aom', text: 'Everyone gets nervous. Start with a funny story about your cat to ___(5)___ with the judges, and then talk about the film.' },
  { who: 'Beam', text: 'Good idea. Wait, the final is at the Chiang Mai Arts Centre? Isn’t that where you’re doing your internship?' },
  { who: 'Aom', text: 'Oh. Oh no. I’ve just been chosen as one of the student judges. I really shouldn’t have given you any tips!' },
  { who: 'Beam', text: '___(6)___ Nobody will ever know you helped me.' }
];

var T2 = {
  id: 't2', n: 2, code: 'System 02', art: 'signal',
  name: 'Idioms, Sayings & Discourse Markers',
  cefr: 'B2–C1+',
  blurb: 'Four real idioms, one right moment. Learn what each idiom and marker DOES in a conversation, beat the “same word, wrong job” family traps, and read the line after the blank like an examiner.',
  levels: []
};

/* ================================================== LEVEL 1 IDIOMS & SAYINGS */
T2.levels.push({
  id: 't2l1', n: 1, name: 'Idioms & sayings', cefr: 'B2',
  blurb: 'Reaction idioms, situation idioms and proverbs: what each one is FOR, and why the one that shares a word with the story is usually the trap.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't2l1s1', name: 'Reaction idioms: answer the moment', cefr: 'B2', tag: 'id-reaction',
      theory: {
        key: 'A reaction idiom is a <strong>move</strong> in the conversation: decide what the speaker is doing (listening, agreeing, joining in, worrying, keeping a secret), then pick the idiom with that job, not the one that shares a word with the story.',
        body: [
          'An idiom is a chunk whose meaning is not the sum of its words. <em>I’m all ears</em> has nothing to do with ears; it means <em>I’m ready to listen, tell me</em>. In a dialogue, a reaction idiom is not decoration: it is a <strong>move</strong>, like a pass in football. Some moves invite the other person to keep talking (<em>I’m all ears / Go on / Fire away</em>), some agree strongly (<em>You can say that again / Tell me about it</em>), some join or refuse a plan (<em>Count me in / Count me out / I’ll pass</em>), some show concern (<em>That sounds serious</em>), some wish luck (<em>Fingers crossed / Break a leg</em>) and some promise secrecy (<em>My lips are sealed</em>).',
          '<strong>How TCAS tests it.</strong> The examiners love a <strong>family trap</strong>: four real idioms built on the same word. In TCAS69, a stressed friend says she needs someone to talk to, and the reply is “Sure, ___ What’s up?” All four options contain <em>ear</em>: <em>I’m all ears</em> (I’m listening: correct), <em>lend me your ear</em> (YOU listen to ME: wrong direction), <em>I’m up to my ears</em> (I’m too busy: it rejects her), <em>my ears are ringing</em> (I can still hear a loud noise; the idiom for “people are talking about me” is <em>my ears are burning</em>). Because the shared word gives no clue, only the <strong>job</strong> can decide.',
          '<strong>The procedure.</strong> Step 1: read the line before the blank. What just happened: news, an invitation, a complaint, a secret? Step 2: read the line after the blank. Does the speaker keep talking (you invited her), explain something, or change the plan? Step 3: name the job in two words (“invite talk”, “agree strongly”, “join plan”). Step 4: translate each option into plain English and test it against both lines. The option that makes BOTH neighbours sound natural wins.',
          'Watch the idioms that <strong>look</strong> like their literal meaning. <em>Tell me about it</em> after a complaint does NOT mean “please explain”; it means “I know exactly, I’ve suffered the same”, so the next line is usually the speaker’s own story. <em>Beats me</em> means “I have no idea”, not that someone hit you.'
        ],
        simple: [
          'An idiom is a group of words with a special meaning. “I’m all ears” means “I’m listening”.',
          'In a conversation, each idiom has a job: listen, agree, join, say no, worry, keep a secret. First find the job, then find the idiom.',
          'The options often share one word, like “ear”. Do not choose because of the word. Choose because of the job.'
        ],
        thai: 'สำนวนปฏิกิริยา (reaction idioms) คือ “การเดินหมาก” ในบทสนทนา ต้องดูก่อนว่าผู้พูดกำลังทำอะไร เช่น ตั้งใจฟัง (I’m all ears) เห็นด้วยสุด ๆ (You can say that again / Tell me about it) ขอเข้าร่วม (Count me in) ปฏิเสธ (Count me out) หรือสัญญาว่าจะเก็บความลับ (My lips are sealed) กับดักของ TCAS คือให้ตัวเลือกทั้ง 4 ข้อมีคำเดียวกัน เช่น ear ทุกข้อ ดังนั้นอย่าเลือกเพราะคำศัพท์ ให้แปลแต่ละตัวเลือกเป็นภาษาง่าย ๆ แล้วเช็กกับประโยคก่อนและหลังช่องว่าง',
        examples: [
          { s: '“I need to tell you something.” “Sure, <strong>I’m all ears</strong>.”', g: 'Invites the other person to talk. Next line: she tells the story.' },
          { s: '“I can’t come tonight. <strong>I’m up to my ears</strong> in homework.”', g: 'Same word, opposite job: too busy.' },
          { s: '“This heat is unbearable.” “<strong>Tell me about it.</strong> My fan broke yesterday.”', g: 'Strong agreement after a complaint, followed by the speaker’s own experience.' },
          { s: '“Karaoke after the exam?” “<strong>Count me in!</strong>”', g: 'Joins the plan. The opposite is “Count me out.”' },
          { s: '“Don’t tell anyone about the surprise party.” “<strong>My lips are sealed.</strong>”', g: 'A promise to keep a secret.' }
        ],
        trap: 'The same-word family. Four options with “ear” (or “eye”, or “count me”) look equally good because the shared word matches nothing in particular. Dodge: translate every option into plain English first (“I’m listening” / “listen to me” / “I’m too busy” / “I hear a noise”), then test each translation against the line AFTER the blank.',
        analogy: { title: 'Reaction stickers', text: 'Idioms are the stickers of spoken English. On LINE, a crying sticker, a laughing sticker and a heart sticker are all “reactions”, but sending the laughing one after “my cat is sick” is a disaster. Pick the sticker for the message you just received, not the prettiest one.' },
        map: { center: 'Reaction idioms', branches: [
          { label: 'Listening', leaves: ['I’m all ears', 'Go on', 'Fire away'] },
          { label: 'Agreeing', leaves: ['You can say that again', 'Tell me about it', 'You’re telling me'] },
          { label: 'In or out', leaves: ['Count me in', 'Count me out', 'I’ll pass'] },
          { label: 'Care & luck', leaves: ['That sounds serious', 'Fingers crossed', 'Break a leg', 'My lips are sealed'] },
          { label: 'Ear-family traps', leaves: ['lend me your ear = listen to me', 'up to my ears = too busy', 'ears ringing = noise'] }
        ] },
        story: { title: 'Nong Bot Is All Ears', panels: [
          { who: 'Mint', text: 'Bot, I’m so stressed about the chemistry test. I need someone to talk to.' },
          { who: 'Nong Bot', text: 'Sorry! I am up to my ears! (It stands in the school pond, water up to its speakers.) See? Ears. Water. Beep.' },
          { who: 'Pun', text: 'Bot, “up to my ears” means you’re too busy. You just rejected her.' },
          { who: 'Nong Bot', text: 'Correction loaded. Mint, lend me your ear!' },
          { who: 'Mint', text: 'Now you want ME to listen to YOU? Bot, I’m the one with the problem!' },
          { who: 'Nong Bot', text: '(returns with forty paper ears taped to its head) Final version: I am ALL ears. Ninety-eight percent ears. Please begin.' }
        ], moral: 'One word, four jobs. “All ears” listens, “lend me your ear” asks, “up to my ears” refuses. Choose by the job, not the word.' }
      },
      items: [
        { id: 't2l1s1-1', type: 'gap', tag: 'id-reaction', level: 'B2', lines: T2_L_CHAT, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['I’m all ears.', 'Fingers crossed.', 'I’m up to my ears.', 'You can say that again.'], answer: 0,
          hint: 'Ploy wants to talk, and Fah then says “Start from the beginning.” What is Fah ready to do?',
          why: 'Fah invites Ploy to tell her story (“Start from the beginning”), so she needs the listening idiom: <em>I’m all ears</em> (= I’m listening carefully). “I’m up to my ears” shares the word but means “I’m too busy”, which would reject Ploy. “Fingers crossed” wishes for luck, and “You can say that again” agrees with a statement, but Ploy has not given an opinion to agree with.' },

        { id: 't2l1s1-2', type: 'gap', tag: 'id-reaction', level: 'B2', lines: T2_L_CHAT, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Same here.', 'Count me in.', 'Fingers crossed.', 'My lips are sealed.'], answer: 3,
          hint: 'Ploy asks Fah not to tell anyone. What does Fah promise right after the blank?',
          why: 'Ploy says “Please don’t tell anyone”, and Fah adds “I won’t say a word to anyone”, so the blank is a promise of secrecy: <em>My lips are sealed</em>. “Fingers crossed” is a wish for luck, not a promise. “Same here” would mean Fah is upset too, and “Count me in” joins a plan, but nobody has suggested one yet.' },

        { id: 't2l1s1-3', type: 'gap', tag: 'id-reaction', level: 'B2', lines: T2_L_CHAT, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['I’ll pass.', 'Count me in!', 'Count me out.', 'You can say that again.'], answer: 1,
          hint: 'Fah asks a yes/no question. Does Ploy’s last sentence sound like yes or no?',
          why: 'Fah invites Ploy to the video call, and Ploy explains “I need something to take my mind off it”, so she accepts: <em>Count me in!</em> “Count me out” is the near miss from the same family, but it refuses. “I’ll pass” also refuses. “You can say that again” agrees with a statement, and Fah has asked a question, not made a statement.' },

        { id: 't2l1s1-4', type: 'gap', tag: 'id-reaction', level: 'B2', lines: T2_L_MIDNIGHT, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Beats me.', 'I’m all ears.', 'Tell me about it.', 'Easier said than done.'], answer: 2,
          hint: 'Look at what Mum says after the blank. Is she asking Mint to explain, or sharing her own experience?',
          why: 'After a complaint (“Exams are the worst”), <em>Tell me about it</em> means “I completely agree, I’ve been through it too”, and Mum proves it with her own story about physics. It does not mean “please explain”. “I’m all ears” would invite Mint to talk, but Mum then does the talking. “Easier said than done” replies to advice, and “Beats me” means “I don’t know”.' },

        { id: 't2l1s1-5', type: 'sort', tag: 'id-reaction', level: 'B2',
          stem: 'What job does each reaction do? Sort them.',
          bins: [
            { key: 'listen', label: 'Invites you to talk', hint: 'I’m ready to hear it' },
            { key: 'agree', label: 'Agrees strongly', hint: 'I think so too' },
            { key: 'plan', label: 'Joins or refuses a plan', hint: 'yes or no to an invitation' },
            { key: 'care', label: 'Shows concern or wishes luck', hint: 'I care how this ends' }
          ],
          items: [
            { text: 'I’m all ears.', bin: 'listen' },
            { text: 'Fire away.', bin: 'listen' },
            { text: 'You can say that again.', bin: 'agree' },
            { text: 'You’re telling me!', bin: 'agree' },
            { text: 'Count me in.', bin: 'plan' },
            { text: 'I’ll pass, thanks.', bin: 'plan' },
            { text: 'That sounds serious.', bin: 'care' },
            { text: 'Fingers crossed!', bin: 'care' }
          ],
          hint: 'Imagine the line that came just before each reaction: news, a statement, an invitation or a worry?',
          why: '<em>I’m all ears</em> and <em>Fire away</em> invite someone to speak. <em>You can say that again</em> and <em>You’re telling me</em> agree strongly with a statement. <em>Count me in</em> and <em>I’ll pass</em> answer an invitation (yes and no). <em>That sounds serious</em> and <em>Fingers crossed</em> show that you care about the outcome.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't2l1s2', name: 'Situation idioms: what the scene needs', cefr: 'B2', tag: 'id-situation',
      theory: {
        key: 'A situation idiom names a <strong>situation or a behaviour</strong> (no plan yet, a limit, a sudden surprise, a big success, a nervous moment): find the situation in the dialogue first, then the idiom that labels it.',
        body: [
          'Situation idioms are labels. <em>Play it by ear</em> labels a plan that will be decided later, as things happen (a musician playing without sheet music). <em>Draw the line (at)</em> labels a personal limit. <em>Out of the blue</em> labels something sudden and unexpected. <em>With flying colours</em> labels a great success in a test. <em>Get cold feet</em> labels last-minute nerves. <em>Break the ice</em> labels the first move that makes strangers relax. If you can say what is happening in plain English, you can find the label.',
          '<strong>Learn them in families.</strong> <em>Colour</em>: out of the blue (sudden), once in a blue moon (very rarely), with flying colours (excellently), in the red (losing money). <em>Weather</em>: under the weather (a bit ill), a storm in a teacup (a big fuss about nothing), take by storm (become a sudden hit). <em>Food</em>: a piece of cake (very easy), spill the beans (tell a secret), in a pickle (in trouble). <em>Sports</em>: the ball is in your court (it’s your decision now), drop the ball (make a careless mistake), on the ball (alert, quick). <em>Paths & lines</em>: stick to the point, beat around the bush, cut corners, go with the flow, draw the line. Examiners build distractors from one family, so knowing the whole family is how you eliminate.',
          '<strong>How TCAS tests it.</strong> In TCAS69, an irritated professor tells students who keep asking unrelated questions: “Either ___ or be quiet.” The options were <em>draw the line / stick to the point / go with the flow / mind your own business</em>. The situation is “irrelevant questions”, and the label for “talk only about the main subject” is <em>stick to the point</em>. <em>Draw the line</em> needs a limit (“I draw the line at…”), <em>go with the flow</em> means accepting whatever happens, and <em>mind your own business</em> tells someone not to interfere.',
          '<strong>Two pairs to separate.</strong> <em>Play it by ear</em> (we will decide later, when we know more) vs <em>go with the flow</em> (I will accept whatever happens, I won’t resist). <em>Out of the blue</em> (suddenly, once) vs <em>once in a blue moon</em> (very rarely, repeatedly over time). Grammar helps too: <em>draw the line</em> is usually followed by <em>at + noun/-ing</em>; <em>pass with flying colours</em> follows a verb of success.'
        ],
        simple: [
          'Some idioms describe a situation: no plan yet (play it by ear), a limit (draw the line), a surprise (out of the blue), a big success (with flying colours).',
          'First say in easy English what is happening in the dialogue. Then choose the idiom that means that.',
          'Learn idioms in groups: colour, weather, food, sport. The wrong answers often come from the same group.'
        ],
        thai: 'สำนวนสถานการณ์ (situation idioms) ใช้ “ตั้งชื่อ” สิ่งที่กำลังเกิดขึ้น เช่น play it by ear = ค่อยตัดสินใจตามสถานการณ์, draw the line at = ขีดเส้น ไม่ยอมเกินนี้, out of the blue = อยู่ ๆ ก็เกิดขึ้น, with flying colours = ผ่านฉลุย ให้สรุปสถานการณ์ในบทสนทนาเป็นภาษาง่าย ๆ ก่อนแล้วค่อยหาสำนวนที่ตรง ควรจำเป็นกลุ่ม (สี อากาศ อาหาร กีฬา) เพราะตัวลวงมักมาจากกลุ่มเดียวกัน เช่น out of the blue (ทันที) กับ once in a blue moon (นาน ๆ ครั้ง)',
        examples: [
          { s: 'We don’t know if it will rain, so let’s <strong>play it by ear</strong>.', g: 'Decide later, as the situation develops.' },
          { s: 'I’ll lend you my notes, but I <strong>draw the line at</strong> doing your homework.', g: 'A personal limit: “at” + noun or -ing.' },
          { s: 'My cousin called me <strong>out of the blue</strong> after five years.', g: 'Suddenly, with no warning.' },
          { s: 'Beam passed the entrance exam <strong>with flying colours</strong>.', g: 'Excellently, with a high score.' },
          { s: 'I’ve given you all the facts. <strong>The ball is in your court</strong> now.', g: 'Sports family: it is your decision now.' }
        ],
        trap: 'The colour and weather families. “Out of the blue” (suddenly) and “once in a blue moon” (very rarely) both have “blue”; “under the weather” (a little ill) has nothing to do with rain. Dodge: say the situation in plain English (“it happened suddenly”) BEFORE you look at the options, so the shared word cannot pull you.',
        analogy: { title: 'Hashtags for a scene', text: 'A situation idiom works like a hashtag under a photo. A picture of a friend frozen before a speech is #getcoldfeet, not #breaktheice. Look at the photo (the dialogue) first, then choose the tag that describes it.' },
        map: { center: 'Situation idioms', branches: [
          { label: 'Colour', leaves: ['out of the blue = suddenly', 'once in a blue moon = rarely', 'with flying colours = excellently'] },
          { label: 'Weather & food', leaves: ['under the weather = unwell', 'a piece of cake = easy', 'spill the beans = tell a secret'] },
          { label: 'Sports', leaves: ['the ball is in your court', 'drop the ball = careless mistake', 'on the ball = alert'] },
          { label: 'Lines & paths', leaves: ['stick to the point', 'draw the line at', 'play it by ear', 'go with the flow'] },
          { label: 'Nerves & people', leaves: ['get cold feet', 'break the ice', 'see eye to eye', 'hit the books'] }
        ] },
        moves: [
          { move: 'Cup a hand behind your ear and sway', says: 'Play it by ear: decide as you go' },
          { move: 'Draw a line in the air, then show a STOP palm', says: 'Draw the line at: this far and no further' },
          { move: 'Point both hands straight ahead like an arrow', says: 'Stick to the point: no detours' },
          { move: 'Jump back, hands up, eyes wide', says: 'Out of the blue: it came from nowhere' },
          { move: 'Flap your arms like a proud bird', says: 'With flying colours: top marks' }
        ]
      },
      items: [
        { id: 't2l1s2-1', type: 'gap', tag: 'id-situation', level: 'B2', lines: T2_L_KHAOYAI, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['play it by ear', 'bite the bullet', 'mind our own business', 'burn the midnight oil'], answer: 0,
          hint: 'Pun doesn’t know about the rain or the car yet. When will they decide?',
          why: 'Pun cannot plan yet because the rain and the car are unknown, and he wants to “decide on Saturday morning”. That is <em>play it by ear</em>: decide later, as the situation becomes clear. “Bite the bullet” means bravely doing something unpleasant, “burn the midnight oil” means working late into the night, and “mind our own business” means not interfering in other people’s affairs; none of them describes waiting to decide.' },

        { id: 't2l1s2-2', type: 'gap', tag: 'id-situation', level: 'B2', lines: T2_L_KHAOYAI, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['draw the line', 'get cold feet', 'break the ice', 'see eye to eye'], answer: 0,
          hint: 'Krit says yes to one thing and no to another. Name that move before you look at the options.',
          why: 'Krit accepts sharing a tent but refuses a wet one, so he is setting a limit: <em>I draw the line at</em> sleeping in a wet one. The preposition “at” is part of the idiom. “Get cold feet” means becoming nervous before doing something, “break the ice” means helping people relax, and “see eye to eye” means agreeing; none of them takes “at + -ing” here.' },

        { id: 't2l1s2-3', type: 'gap', tag: 'id-situation', level: 'B2', lines: T2_L_TGAT, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['out of the blue.', 'under the weather.', 'with flying colours.', 'once in a blue moon.'], answer: 2,
          hint: 'Beam got the top score after months of study. What does that tell you about HOW she passed?',
          why: 'Beam got the top score in the school, so she passed <em>with flying colours</em> (= excellently). “Out of the blue” (suddenly, unexpectedly) contradicts the three months of study and Oat’s reply “nobody gets a score like that by accident”. “Once in a blue moon” means very rarely, and “under the weather” means slightly ill.' },

        { id: 't2l1s2-4', type: 'equiv', tag: 'id-situation', level: 'B2',
          given: 'The call from the university came <strong>out of the blue</strong>, just as Pim was leaving for school.',
          stem: 'The phrase in bold is closest in meaning to ________.',
          options: ['at last', 'as usual', 'very rarely', 'without warning'], answer: 3,
          hint: 'This idiom belongs to the colour family, which has two ‘blue’ idioms. Check which one is in bold.',
          why: '<em>Out of the blue</em> means suddenly and unexpectedly, so “without warning” is closest. “Very rarely” is the meaning of the look-alike “once in a blue moon”. “At last” suggests Pim had been waiting for the call, and “as usual” suggests it happens regularly, but the idiom says the call was a complete surprise.' },

        { id: 't2l1s2-5', type: 'judge', tag: 'id-situation', level: 'B2',
          given: 'T.Chris: “The debate final is on Friday. I’ve given you all the evidence and every argument I know, Fah. <strong>The ball is in your court</strong> now.”',
          stem: 'T.Chris means that it is now Fah’s responsibility to decide what to do next.',
          answer: 0,
          hint: 'Think of tennis. After the ball lands on your side, who has to hit next?',
          why: 'True. In tennis, when the ball is in your court, it is your turn to act. T.Chris has done his part (evidence and arguments), so the next move and the decision belong to Fah. The idiom does not mean Fah is winning or that she has made a mistake.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't2l1s3', name: 'Proverbs & sayings: the moral of the story', cefr: 'B2+', tag: 'id-proverb',
      theory: {
        key: 'A proverb sums up the <strong>shape</strong> of the whole story (troubles pile up, bad turns good, effort pays, words vs actions): find the shape first, and ignore the option that merely shares a picture (rain, clouds) with the story.',
        body: [
          'A proverb is a tiny story with a moral. When a TCAS speaker says “It’s like the saying: ___”, the saying must summarise <strong>everything</strong> that has happened, so you need the shape of the whole story, not one detail. Common shapes: <strong>pile-up</strong> (bad + bad + bad): <em>When it rains, it pours</em>. <strong>Bad turns good</strong>: <em>Every cloud has a silver lining / A blessing in disguise / Look on the bright side</em>. <strong>Effort pays</strong>: <em>No pain, no gain / Practice makes perfect / Hard work pays off</em>. <strong>Risk</strong>: <em>No risk, no reward</em> vs its opposite <em>Better safe than sorry</em>. <strong>Timing & patience</strong>: <em>The early bird catches the worm / Better late than never / Don’t count your chickens before they hatch / Rome wasn’t built in a day / Good things come to those who wait</em>. <strong>Judging people</strong>: <em>Actions speak louder than words / Don’t judge a book by its cover</em>. <strong>Money</strong>: <em>Easy come, easy go / Save for a rainy day</em>.',
          '<strong>How TCAS tests it.</strong> In TCAS69, Pam oversleeps, gets soaked in the rain, finds school closed and is then dumped by text. Her friend says “It’s like the saying: ___”. The options were four rain sayings: <em>Save for a rainy day</em> (keep money for hard times), <em>When it rains, it pours</em> (troubles come together: correct), <em>It’s raining cats and dogs</em> (it is raining very heavily: a literal trap, because Pam really did get wet!) and <em>Every cloud has a silver lining</em> (there is good in every bad thing: but nothing good has happened). TCAS67 used <em>no risk, no reward</em>; TCAS66 used <em>easy come, easy go</em>.',
          '<strong>The procedure.</strong> Step 1: list the events in the story as + or − (− − − = pile-up; − then + = silver lining; hard work then + = no pain, no gain). Step 2: translate each proverb into its shape. Step 3: match shapes. Step 4: if one option copies a <em>picture</em> from the story (rain, a book, money) but not its <em>shape</em>, it is almost certainly the trap.'
        ],
        simple: [
          'A proverb is a short saying with a lesson. It describes the whole story, not one small part.',
          'Many bad things together → “When it rains, it pours.” Bad thing, then good thing → “Every cloud has a silver lining.” Hard work, then success → “No pain, no gain.”',
          'If the story has rain in it, the rain proverb is not always right. Check the lesson, not the picture.'
        ],
        thai: 'สุภาษิต (proverb) ต้องสรุป “รูปทรง” ของเรื่องทั้งหมด ไม่ใช่ตรงกับรายละเอียดเดียว เช่น เรื่องร้ายซ้อนกันหลายเรื่อง = When it rains, it pours (เคราะห์ซ้ำกรรมซัด), เรื่องร้ายที่มีข้อดีแฝง = Every cloud has a silver lining, ลำบากแล้วสำเร็จ = No pain, no gain กับดักของ TCAS คือตัวลวงที่มี “ภาพ” เหมือนในเรื่อง เช่น ในเรื่องมีฝนตกจริง นักเรียนจึงเลือก It’s raining cats and dogs ซึ่งแปลว่าฝนตกหนักตามตัวอักษรเท่านั้น ไม่ใช่บทเรียนของเรื่อง',
        examples: [
          { s: 'I lost my wallet, missed the bus and then it started to rain. <strong>When it rains, it pours.</strong>', g: 'Pile-up: troubles arrive together.' },
          { s: 'The trip was cancelled, but I finally finished my portfolio. <strong>Every cloud has a silver lining.</strong>', g: 'Bad turns good.' },
          { s: 'He says he’ll help but never does. <strong>Actions speak louder than words.</strong>', g: 'Judge people by what they do.' },
          { s: 'You haven’t got the scholarship yet, so <strong>don’t count your chickens before they hatch</strong>.', g: 'Don’t celebrate a result before it happens.' },
          { s: 'Being rejected by that club was <strong>a blessing in disguise</strong>: I found my real team.', g: 'Something bad that turned out to be good.' }
        ],
        trap: 'The picture trap: an option that repeats an image from the story (rain in a rainy story, money in a shopping story) but not its lesson. “It’s raining cats and dogs” only describes the weather. Dodge: write − or + for each event, name the shape, and only then read the options.',
        analogy: { title: 'The one-line movie review', text: 'A proverb is the one-line review printed on a movie poster. A film where everything goes wrong for the hero is “When it rains, it pours”; a film where the loser becomes champion after two hours of training scenes is “No pain, no gain”. The review describes the whole film, not one scene.' },
        map: { center: 'Proverb shapes', branches: [
          { label: 'Pile-up (− − −)', leaves: ['When it rains, it pours', 'It never rains but it pours'] },
          { label: 'Bad turns good (− +)', leaves: ['Every cloud has a silver lining', 'A blessing in disguise', 'Look on the bright side'] },
          { label: 'Effort pays', leaves: ['No pain, no gain', 'Practice makes perfect', 'Hard work pays off'] },
          { label: 'Risk & timing', leaves: ['No risk, no reward', 'Better safe than sorry', 'Don’t count your chickens', 'Rome wasn’t built in a day'] },
          { label: 'People & money', leaves: ['Actions speak louder than words', 'Don’t judge a book by its cover', 'Easy come, easy go'] }
        ] },
        chant: { title: 'What’s the Shape?', beat: 'stomp-stomp-clap (4/4)', lines: [
          'Bad, then bad, then worse again?',
          'When it rains, it pours: say it then!',
          'Bad that hides a happy lining?',
          'Every cloud has silver shining!',
          'Sweat all month and win the race?',
          'No pain, no gain: put it in place!',
          'Rain in the story? Don’t be fooled,',
          'Find the SHAPE: that’s the rule!'
        ] }
      },
      items: [
        { id: 't2l1s3-1', type: 'gap', tag: 'id-proverb', level: 'B2+', lines: T2_L_CANTEEN, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['No pain, no gain.', 'Better late than never.', 'When it rains, it pours.', 'Every cloud has a silver lining.'], answer: 2,
          hint: 'Mark each of Nan’s events + or −. What shape do they make?',
          why: 'Nan lists three bad things in one day (phone, lunch, project), so the shape is a pile-up: <em>When it rains, it pours</em> (= problems come together). “Every cloud has a silver lining” needs something good inside the bad news, and nothing good has happened YET. “No pain, no gain” is about effort leading to success, and “Better late than never” praises something done late.' },

        { id: 't2l1s3-2', type: 'gap', tag: 'id-proverb', level: 'B2+', lines: T2_L_CANTEEN, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Easy come, easy go.', 'When it rains, it pours.', 'Don’t judge a book by its cover.', 'Every cloud has a silver lining.'], answer: 3,
          hint: 'The story has changed direction. Is the new message good or bad for Nan?',
          why: 'The later deadline turns Nan’s bad day into an opportunity (“Now you’ve got time to add those extra photos”), so the shape is bad → good: <em>Every cloud has a silver lining</em>. “When it rains, it pours” was right a moment ago but now contradicts the good news. “Easy come, easy go” is about losing something you got easily, and “Don’t judge a book by its cover” is about appearances.' },

        { id: 't2l1s3-3', type: 'gap', tag: 'id-proverb', level: 'B2+', lines: T2_L_DEBATE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Better safe than sorry.', 'Great minds think alike.', 'Don’t judge a book by its cover.', 'Actions speak louder than words.'], answer: 3,
          hint: 'Compare what Krit SAID with what Mint DID. Which proverb is about that difference?',
          why: 'Krit made promises but did nothing; Mint made no promises but did the work. The lesson is <em>Actions speak louder than words</em>: judge people by what they do. “Don’t judge a book by its cover” is the near miss, but it is about appearances, and nobody’s appearance is mentioned. “Better safe than sorry” is about caution, and “Great minds think alike” is said when two people have the same idea.' },

        { id: 't2l1s3-4', type: 'gap', tag: 'id-proverb', level: 'B2+', lines: T2_L_RELAY, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['No pain, no gain.', 'Easy come, easy go.', 'Better late than never.', 'When it rains, it pours.'], answer: 0,
          hint: 'Painful training came first. What came after it?',
          why: 'Hard, painful training (“My legs still hurt”) led to success (the relay win), so the shape is effort → reward: <em>No pain, no gain</em>. “When it rains, it pours” needs several bad events together, but the story ends happily. “Easy come, easy go” describes losing something that came easily, the opposite of a medal earned through a month of pain. “Better late than never” is about lateness.' },

        { id: 't2l1s3-5', type: 'sort', tag: 'id-proverb', level: 'B2+',
          stem: 'What shape of story does each saying describe? Sort them.',
          bins: [
            { key: 'pile', label: 'Troubles pile up', hint: 'bad + bad + bad' },
            { key: 'turn', label: 'Bad turns good', hint: 'a hidden benefit' },
            { key: 'effort', label: 'Effort pays off', hint: 'hard work → success' },
            { key: 'wait', label: 'Don’t rush it', hint: 'timing & patience' }
          ],
          items: [
            { text: 'When it rains, it pours.', bin: 'pile' },
            { text: 'It never rains but it pours.', bin: 'pile' },
            { text: 'Every cloud has a silver lining.', bin: 'turn' },
            { text: 'It was a blessing in disguise.', bin: 'turn' },
            { text: 'No pain, no gain.', bin: 'effort' },
            { text: 'Practice makes perfect.', bin: 'effort' },
            { text: 'Good things come to those who wait.', bin: 'wait' },
            { text: 'Don’t count your chickens before they hatch.', bin: 'wait' }
          ],
          hint: 'Ignore the pictures (rain, clouds, chickens). Ask what lesson each saying teaches.',
          why: 'The two rain sayings both mean that troubles come together. A silver lining and a blessing in disguise are good things hidden in bad ones. “No pain, no gain” and “Practice makes perfect” say effort brings success. “Good things come to those who wait” (patience is rewarded) and “Don’t count your chickens before they hatch” (don’t celebrate too early) are about patience and timing.' }
      ]
    }
  ],
  check: { id: 't2l1ck', name: 'Systems Check · Idioms & sayings', items: [
    { id: 't2l1ck-1', type: 'gap', tag: 'id-reaction', level: 'B2+', lines: T2_L_FILM, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['all ears', 'up to my ears', 'on cloud nine', 'under the weather'], answer: 1,
      hint: 'Aom didn’t answer the phone all day. What does the phrase “in project work” suggest?',
      why: 'Aom explains why she missed Beam’s calls: she has been extremely busy, which is <em>up to my ears</em> in project work. “All ears” is the same-family trap: it means “listening”, and it cannot be “in project work”. “On cloud nine” means very happy, and “under the weather” means slightly ill; neither explains the missed calls or fits “in project work”.' },

    { id: 't2l1ck-2', type: 'gap', tag: 'id-situation', level: 'B2+', lines: T2_L_FILM, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['in hot water', 'out of the blue', 'with flying colours', 'once in a blue moon'], answer: 1,
      hint: 'Beam had forgotten about the festival. How did the phone call feel to her?',
      why: 'Beam had forgotten about the film, so the call was sudden and unexpected: they called me <em>out of the blue</em>. “Once in a blue moon” (very rarely) is the colour-family trap; one call this morning is not a rare, repeated event. “With flying colours” describes passing a test excellently, and “in hot water” means in trouble.' },

    { id: 't2l1ck-3', type: 'gap', tag: 'id-proverb', level: 'B2+', lines: T2_L_FILM, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['easy come, easy go.', 'hard work pays off.', 'better safe than sorry.', 'when it rains, it pours.'], answer: 1,
      hint: 'Look at the sentence after the blank. What did Beam do to earn this result?',
      why: 'Aom connects the success to a year of weekend work, so the saying must be about effort leading to success: <em>hard work pays off</em>. “Easy come, easy go” suggests the success came easily and may be lost. “When it rains, it pours” is for a pile-up of problems, and “better safe than sorry” recommends caution.' },

    { id: 't2l1ck-4', type: 'gap', tag: 'id-situation', level: 'B2+', lines: T2_L_FILM, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['cut corners', 'hit the books', 'break the ice', 'get cold feet'], answer: 3,
      hint: 'Read Beam’s question after the blank. What feeling is she describing?',
      why: '“What if I freeze and can’t say anything?” shows last-minute nerves, which is <em>get cold feet</em>. “Break the ice” is the near miss from the same scene: it is the SOLUTION (relaxing people at the start), which Aom suggests next, not Beam’s feeling. “Hit the books” means study hard, and “cut corners” means doing a job carelessly to save time.' },

    { id: 't2l1ck-5', type: 'gap', tag: 'id-situation', level: 'B2+', lines: T2_L_FILM, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['cut corners', 'break the ice', 'draw the line', 'spill the beans'], answer: 1,
      hint: 'Why would you tell a funny story at the very start of a nervous meeting?',
      why: 'A funny opening story makes a tense meeting relaxed, which is exactly <em>break the ice</em> (with someone). “Spill the beans” means reveal a secret, “draw the line” means set a limit, and “cut corners” means save effort by doing a poor job; none of these is the purpose of a funny cat story.' },

    { id: 't2l1ck-6', type: 'gap', tag: 'id-reaction', level: 'B2+', lines: T2_L_FILM, blank: '(6)',
      stem: 'Choose the best option for blank (6).',
      options: ['Count me out.', 'Suit yourself.', 'Tell me about it.', 'My lips are sealed.'], answer: 3,
      hint: 'Aom is worried about what she has done. What does Beam promise in the next sentence?',
      why: 'Aom is now a judge and regrets giving tips, and Beam promises “Nobody will ever know you helped me”, so the blank is a promise of secrecy: <em>My lips are sealed</em>. “Tell me about it” agrees strongly with a complaint, “Suit yourself” means “do what you want” (cold and unhelpful), and “Count me out” refuses an invitation.' }
  ] }
});

/* ---------------------------------------------------------- level 2 dialogues */
var T2_L_PROJECT = [
  { who: 'Situation', text: 'Two classmates talking about a group project' },
  { who: 'Pim', text: 'How’s the group project going? You look exhausted.' },
  { who: 'Tee', text: 'Terrible. Our leader is sick, so I have to write the whole report on my own. ___(1)___ my laptop crashed last night, and I lost two pages.' },
  { who: 'Pim', text: 'Oh no. Did you have a backup?' },
  { who: 'Tee', text: 'No, I didn’t. ___(2)___ I spent the whole night rewriting it, so I’ve had about two hours of sleep.' },
  { who: 'Pim', text: 'Go home and rest. I’ll help you check it tomorrow.' }
];

var T2_L_KHAOSOI = [
  { who: 'Situation', text: 'A tour guide and a tourist in Chiang Mai' },
  { who: 'Tourist', text: 'Is it true that people here eat khao soi for breakfast?' },
  { who: 'Guide', text: 'Some do, but it’s more of a lunch dish. ___(3)___ my grandmother has been selling khao soi near Wat Chedi Luang for forty years, so I’ve eaten more bowls than I can count!' },
  { who: 'Tourist', text: 'Then you’re the perfect person to tell me where to go.' }
];

var T2_L_UNI = [
  { who: 'Situation', text: 'Two friends talking about university choices' },
  { who: 'Mint', text: 'I really want to study Medicine at Chula. It’s the programme I’ve dreamed about since M1. ___(1)___ I’d be happy at any university where I can study medicine.' },
  { who: 'Fah', text: 'That’s a healthy attitude. What about Krit?' },
  { who: 'Mint', text: 'Krit? He hasn’t even opened the application website. He’s so lazy about forms. ___(2)___ he did win the regional science fair last year, so he isn’t lazy about everything.' },
  { who: 'Fah', text: 'True. He just saves his energy for the things he likes.' }
];

var T2_L_RESTAURANT = [
  { who: 'Situation', text: 'A customer talking to a restaurant manager' },
  { who: 'Manager', text: 'I’m so sorry about tonight. Your table waited forty minutes, and the green curry was far too salty.' },
  { who: 'Customer', text: 'Yes, it wasn’t our best evening here. ___(3)___ the mango sticky rice was the best I’ve ever had, so we’ll definitely come back.' },
  { who: 'Manager', text: 'Thank you. Your dessert is on the house tonight.' }
];

var T2_L_TRIP = [
  { who: 'Situation', text: 'A teacher talking to her class before a school trip' },
  { who: 'Ajarn Suda', text: 'The bus company hasn’t confirmed whether the bus will leave at seven or at half past seven. ___(4)___ be at the school gate by 6:45.' },
  { who: 'Oat', text: 'That early? Even if the bus leaves at 7:30?' },
  { who: 'Ajarn Suda', text: 'Even then. I’m not leaving anyone behind in the car park.' }
];

var T2_L_ESSAY = [
  { who: 'Situation', text: 'A student asking her teacher about an essay' },
  { who: 'Bow', text: 'T.Chris, what did you think of my essay?' },
  { who: 'T.Chris', text: 'Your ideas are strong, but your paragraphs jump from one topic to another without any link. ___(1)___ there’s no clear path from one idea to the next.' },
  { who: 'Bow', text: 'So should I rewrite the whole thing?' },
  { who: 'T.Chris', text: 'No. There are a few grammar slips and one weak example, but the argument is clear and original. ___(2)___ it’s a good essay that needs better organisation.' }
];

var T2_L_SLEEP = [
  { who: 'Situation', text: 'Two friends the night before a physics test' },
  { who: 'Pun', text: 'I could stay up all night and memorise every formula, or I could get eight hours of sleep.' },
  { who: 'Krit', text: 'Formulas matter, sure. But ___(3)___ a tired brain can’t use anything it has memorised.' },
  { who: 'Pun', text: 'Fine. Bed at ten. But I’m taking the formula sheet with me.' }
];

var T2_L_HUAHIN = [
  { who: 'Situation', text: 'A family discussing a weekend trip to Hua Hin' },
  { who: 'Dad', text: 'Bad news. The weather app says it will rain all weekend in Hua Hin. ___(1)___ the hotel has just emailed to say the pool is closed for repairs.' },
  { who: 'Mum', text: 'That’s a pity. ___(2)___ the hotel is right on the beach, and it hardly ever rains all day in Hua Hin.' },
  { who: 'Fah', text: 'I don’t mind rain. I only want to eat seafood and sleep. ___(3)___ I’m happy anywhere that sells grilled squid.' },
  { who: 'Dad', text: 'Well, it’s too late to cancel, the hotel is right on the beach, and Fah will be happy with squid. ___(4)___ I think we should still go.' },
  { who: 'Mum', text: 'I agree. ___(5)___ I’ve just checked another app, and it says it will be sunny all weekend.' },
  { who: 'Fah', text: 'Wait. Is Dad’s app the same one that said it would snow in Bangkok last week?' },
  { who: 'Dad', text: '…Yes.' },
  { who: 'Fah', text: 'So, ___(6)___ we’ve been planning our whole weekend around an app that thinks Bangkok gets snow.' }
];

/* ================================================== LEVEL 2 MARKERS THAT STEER */
T2.levels.push({
  id: 't2l2', n: 2, name: 'Markers that steer', cefr: 'B2+',
  blurb: 'Discourse markers are road signs: carry on, add more, turn back, say it again, sum it up. Read the direction of the talk and the sign chooses itself.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't2l2s1', name: 'Adding & intensifying', cefr: 'B2+', tag: 'dm-add',
      theory: {
        key: 'Adding markers keep the talk moving in the <strong>same direction</strong>, but each adds a different kind of extra: a neutral extra (on top of that), a worse extra (to make matters worse), an obvious result (needless to say) or a surprising fact (as a matter of fact).',
        body: [
          'A discourse marker is a road sign at the start of a sentence. It tells the listener how the next idea connects to the last one, before the idea arrives. Adding markers all say “same direction, more to come”, but TCAS separates them by <strong>what kind of extra</strong> follows. <em>On top of that / What’s more / Besides</em> add a neutral extra point. <em>To make matters worse / As if that weren’t enough</em> add a bad thing to a bad situation. <em>Needless to say / As you can imagine</em> add a result the listener could already predict. <em>As a matter of fact / In fact / Actually</em> add a surprising, more specific or stronger fact, often one that corrects or goes beyond what was just said.',
          '<strong>How TCAS tests it.</strong> TCAS69: Pam overslept, got wet, found school closed, “but ___ I then got an SMS from Kirk… he wants to break up with me.” Another disaster added to a disastrous day: <em>to make matters worse</em>. TCAS68: Pum says her ex’s new girlfriend is Japanese; then “___ she lives in Tokyo, like you.” That is a more specific, surprising fact: <em>As a matter of fact</em>. The distractors were <em>In other words</em> (a rephrase, but “lives in Tokyo” is new information), <em>Needless to say</em> (not obvious at all) and <em>On the other hand</em> (no contrast).',
          '<strong>The test.</strong> Ask two questions. (1) Is the next idea the same direction or a turn? If it turns, no adding marker fits. (2) What kind of extra is it: neutral, worse, obvious, or surprising? Then check a grammar detail: <em>let alone</em> follows a <strong>negative</strong> and adds something even bigger (“I can’t boil an egg, let alone cook tom yum”); <em>not to mention</em> is followed by a noun or -ing.'
        ],
        simple: [
          'Adding markers say: “more in the same direction”.',
          'On top of that = one more thing. To make matters worse = one more BAD thing. Needless to say = you can guess this. As a matter of fact = here is a surprising fact.',
          'If the next sentence changes direction (good → bad), do not choose an adding marker.'
        ],
        thai: 'คำเชื่อมประเภทเพิ่มเติม (adding markers) บอกว่าเรื่องยังไปทิศเดิม แต่ต้องดูว่าเพิ่ม “แบบไหน”: On top of that/What’s more = เพิ่มอีกข้อแบบกลาง ๆ, To make matters worse = เรื่องแย่ซ้ำเติมเรื่องแย่, Needless to say = ผลที่เดาได้อยู่แล้ว, As a matter of fact = ข้อเท็จจริงที่น่าแปลกใจหรือเจาะจงกว่า กับดักคือ Needless to say ใช้กับสิ่งที่ “ชัดเจนอยู่แล้ว” เท่านั้น และ let alone ต้องตามหลังประโยคปฏิเสธ',
        examples: [
          { s: 'The hotel was far from the beach. <strong>On top of that</strong>, breakfast wasn’t included.', g: 'Neutral extra point (here also negative, but not a disaster).' },
          { s: 'We got lost in the rain. <strong>To make matters worse</strong>, my phone died.', g: 'A bad thing added to a bad situation.' },
          { s: 'He forgot the concert tickets. <strong>Needless to say</strong>, his sister was furious.', g: 'An obvious, predictable result.' },
          { s: 'You think she’s shy? <strong>As a matter of fact</strong>, she’s the debate captain.', g: 'A surprising fact that goes beyond or corrects the last idea.' },
          { s: 'I can’t even swim, <strong>let alone</strong> dive from ten metres.', g: 'After a negative: adds something even bigger.' }
        ],
        trap: '“Needless to say” is chosen because it sounds advanced. It only fits when the next fact is OBVIOUS from what came before (no backup + lost pages → needless to say, I rewrote it all night). If the next fact is surprising or new, the answer is “As a matter of fact”. Dodge: ask “Could the listener have guessed this?” Yes → needless to say. No → as a matter of fact.',
        analogy: { title: 'Bubble tea toppings', text: 'Every adding marker puts one more topping in the same cup. “On top of that” adds pearls. “To make matters worse” adds a topping you hate. “Needless to say” is the ice everybody expected. “As a matter of fact” is the surprise cheese foam you didn’t know was there. Different toppings, same cup, same direction.' },
        map: { center: 'Adding markers', branches: [
          { label: 'Neutral extra', leaves: ['On top of that', 'What’s more', 'Besides'] },
          { label: 'Worse extra', leaves: ['To make matters worse', 'As if that weren’t enough'] },
          { label: 'Obvious result', leaves: ['Needless to say', 'As you can imagine'] },
          { label: 'Surprising fact', leaves: ['As a matter of fact', 'In fact', 'Actually'] },
          { label: 'Grammar watch', leaves: ['negative + let alone', 'not to mention + noun'] }
        ] },
        story: { title: 'Nong Bot’s Weather Report', panels: [
          { who: 'Nong Bot', text: 'Good morning, M5! Sunny skies, and the school trip to Ayutthaya is ON. To make matters worse, the ice cream is free!' },
          { who: 'Pun', text: 'Bot, “to make matters worse” is for bad news on top of bad news. Free ice cream is not a disaster.' },
          { who: 'Nong Bot', text: 'Recalculating. It is now raining. To make matters worse, the bus is late. Needless to say, Mint has three umbrellas.' },
          { who: 'Mint', text: 'Rude. But… correct. Anyone who knows me could guess that.' },
          { who: 'Nong Bot', text: 'As a matter of fact, I have four umbrellas in my chest compartment. (Four umbrellas pop out.)' },
          { who: 'Fah', text: 'Now THAT is a surprising fact. Bot, you finally used all three right.' }
        ], moral: 'Worse news → to make matters worse. Guessable → needless to say. Surprise → as a matter of fact.' }
      },
      items: [
        { id: 't2l2s1-1', type: 'gap', tag: 'dm-add', level: 'B2+', lines: T2_L_PROJECT, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Even so,', 'Needless to say,', 'On the other hand,', 'To make matters worse,'], answer: 3,
          hint: 'Tee’s first problem is bad. Is the second problem good news, bad news or an obvious result?',
          why: 'Tee has one bad problem (writing the report alone) and adds a second one (the laptop crash), so she needs a marker that stacks bad on bad: <em>To make matters worse</em>. “Needless to say” would mean the crash was predictable from the leader’s illness, which makes no sense. “Even so” and “On the other hand” signal a contrast, but both events are bad.' },

        { id: 't2l2s1-2', type: 'gap', tag: 'dm-add', level: 'B2+', lines: T2_L_PROJECT, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['By the way,', 'In other words,', 'Needless to say,', 'On the other hand,'], answer: 2,
          hint: 'No backup and two lost pages. Read what Tee did next: is it neutral, worse, expected or surprising?',
          why: 'With no backup, the lost pages had to be rewritten, so staying up all night is an obvious, predictable result: <em>Needless to say</em>. “In other words” would restate the same idea, but rewriting all night is a new event. “By the way” starts a side topic, and “On the other hand” needs a contrast.' },

        { id: 't2l2s1-3', type: 'gap', tag: 'dm-add', level: 'B2+', lines: T2_L_KHAOSOI, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Even so,', 'Needless to say,', 'As a matter of fact,', 'To make matters worse,'], answer: 2,
          hint: 'Read the guide’s next sentence. Which kind of extra is it: neutral, worse, expected or surprising?',
          why: 'The guide adds a surprising personal fact that makes him an expert on the dish: <em>As a matter of fact</em>, his grandmother has been selling khao soi for forty years. “Needless to say” fails because the tourist could not have predicted this. “To make matters worse” needs a bad situation, and “Even so” needs a contrast with the previous sentence.' },

        { id: 't2l2s1-4', type: 'choose', tag: 'dm-add', level: 'B2+',
          stem: 'Choose the best option to complete the sentence.<br><em>My little brother can’t even tie his own shoes, ________ ride a bike without help.</em>',
          options: ['in fact', 'let alone', 'what’s more', 'on top of that'], answer: 1,
          hint: 'Is the first half positive or negative? And what verb form comes straight after the gap?',
          why: '<em>Let alone</em> follows a negative statement and adds something even harder, followed by the same verb form: can’t tie his shoes, <em>let alone</em> ride a bike. “What’s more” and “on top of that” add a new point in a new clause (“On top of that, he…”); they cannot be followed by a bare verb, and they do not build on a negative the way “let alone” does. “In fact” would need a new sentence with its own subject and verb.' },

        { id: 't2l2s1-5', type: 'sort', tag: 'dm-add', level: 'B2+',
          stem: 'Each marker adds something. Sort them by the kind of extra they add.',
          bins: [
            { key: 'neutral', label: 'One more point', hint: 'neutral extra' },
            { key: 'worse', label: 'One more BAD thing', hint: 'the situation gets worse' },
            { key: 'obvious', label: 'An obvious result', hint: 'you could have guessed' },
            { key: 'surprise', label: 'A surprising fact', hint: 'you didn’t expect this' }
          ],
          items: [
            { text: 'On top of that,', bin: 'neutral' },
            { text: 'What’s more,', bin: 'neutral' },
            { text: 'To make matters worse,', bin: 'worse' },
            { text: 'As if that weren’t enough,', bin: 'worse' },
            { text: 'Needless to say,', bin: 'obvious' },
            { text: 'As you can imagine,', bin: 'obvious' },
            { text: 'As a matter of fact,', bin: 'surprise' },
            { text: 'Believe it or not,', bin: 'surprise' }
          ],
          hint: 'Ask of each: is the extra neutral, worse, predictable or unexpected?',
          why: '<em>On top of that</em> and <em>What’s more</em> add a neutral extra point. <em>To make matters worse</em> and <em>As if that weren’t enough</em> add a bad thing to a bad situation. <em>Needless to say</em> and <em>As you can imagine</em> introduce a result the listener could predict. <em>As a matter of fact</em> and <em>Believe it or not</em> introduce something unexpected.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't2l2s2', name: 'Contrasting & conceding in talk', cefr: 'C1', tag: 'dm-contrast',
      theory: {
        key: 'Contrast markers turn the talk around, but each turns differently: <em>on the other hand</em> weighs two sides, <em>having said that</em> and <em>mind you</em> add a limit to what you just said, <em>even so</em> keeps a conclusion despite a problem, and <em>at any rate</em> means “whatever happens, this is what matters”.',
        body: [
          'In speech, contrast is rarely just “but”. Speakers soften, weigh, and correct themselves, and each move has its own marker. <em>On the other hand</em> balances two sides of one question (Side A… on the other hand, Side B). <em>Having said that / That said</em> limit your OWN previous point: you still believe it, but here is a fair exception. <em>Mind you</em> is an informal afterthought that qualifies what you said (“He’s lazy. Mind you, he did win the science fair”). <em>Even so / All the same / Still</em> keep going in spite of the problem just mentioned. <em>At any rate / In any case / Anyway</em> sweep aside the details or the uncertainty and go back to what matters: “whatever the answer is, this is true.”',
          '<strong>How TCAS tests it.</strong> TCAS69: a flustered professor learns the course outline was never handed out and says “Oh, I see. Well, ___” with <em>at any rate / play it by ear / all in due time / look on the bright side</em>. He is brushing the problem aside to move on, which is the job of <em>at any rate</em>. Other papers use <em>Nevertheless</em> and <em>On the other hand</em> as distractors whenever the next line does NOT actually turn, so always check that a real contrast exists before choosing a contrast marker.',
          '<strong>The test.</strong> Step 1: is there a turn? (positive → negative, plan → problem, claim → exception). If not, delete every contrast marker. Step 2: what kind of turn? Two sides of a choice → on the other hand. My own point + an exception → having said that / mind you. A problem that doesn’t change the conclusion → even so. Uncertainty swept aside → at any rate.'
        ],
        simple: [
          'Contrast markers mean “but”, but each one is a different kind of “but”.',
          'On the other hand = the other side. Having said that / Mind you = my point has an exception. Even so = there is a problem, but it doesn’t change my plan. At any rate = anyway, whatever happens.',
          'First check: does the conversation really turn? If not, no contrast marker can be right.'
        ],
        thai: 'คำเชื่อมแสดงความขัดแย้งในบทสนทนามีหลายแบบ: On the other hand = อีกด้านหนึ่ง (ชั่งสองฝั่ง), Having said that/Mind you = ยอมรับข้อยกเว้นของสิ่งที่ตัวเองเพิ่งพูด, Even so = ถึงกระนั้นก็ยังยืนยันเหมือนเดิม, At any rate = ไม่ว่าอย่างไรก็ตาม (ตัดความไม่แน่นอนทิ้งแล้วกลับไปเรื่องสำคัญ) ขั้นแรกต้องเช็กว่าบทสนทนา “หักเลี้ยว” จริงไหม ถ้าไม่มีการขัดแย้งเลย ตัวเลือกกลุ่มนี้ผิดทั้งหมด',
        examples: [
          { s: 'Online classes are flexible. <strong>On the other hand</strong>, they can feel lonely.', g: 'Two sides of the same choice.' },
          { s: 'The phone is expensive. <strong>Having said that</strong>, the camera is worth every baht.', g: 'Speaker limits her own first point.' },
          { s: 'It’s a great café. <strong>Mind you</strong>, the Wi-Fi is terrible.', g: 'Informal afterthought that qualifies the praise.' },
          { s: 'The review was harsh. <strong>Even so</strong>, the film sold out.', g: 'A problem that doesn’t change the result.' },
          { s: 'It might be Tuesday or Wednesday. <strong>At any rate</strong>, it’s this week.', g: 'Whatever the details, this is certain.' }
        ],
        trap: 'Choosing a contrast marker when there is no contrast. TCAS places “On the other hand” or “Nevertheless” in front of a sentence that actually continues in the same direction. Dodge: put “but” in the blank. If “but” sounds wrong, every contrast marker is wrong too.',
        analogy: { title: 'Grab driver turns', text: 'Contrast markers are a Grab driver’s turns. “On the other hand” is a full U-turn to look at the other side of the road. “Having said that” is a small lane change. “Even so” means there’s a traffic jam, but we are still going to Siam. “At any rate” means “whichever road we take, we’re getting to Siam”.' },
        map: { center: 'Contrast in talk', branches: [
          { label: 'Two sides', leaves: ['On the other hand', 'Then again'] },
          { label: 'My point + exception', leaves: ['Having said that', 'That said', 'Mind you'] },
          { label: 'Despite the problem', leaves: ['Even so', 'All the same', 'Still'] },
          { label: 'Whatever happens', leaves: ['At any rate', 'In any case', 'Anyway'] },
          { label: 'Test', leaves: ['put “but” in the blank', 'no turn → no contrast'] }
        ] },
        moves: [
          { move: 'Hold out your left hand, then your right hand', says: 'On the other hand: two sides' },
          { move: 'Nod, then tilt your head and raise one finger', says: 'Having said that / mind you: yes, but one exception' },
          { move: 'Push forward against an invisible wall', says: 'Even so: a problem, but I keep going' },
          { move: 'Brush crumbs off the table with both hands', says: 'At any rate: forget the details, here’s what matters' }
        ]
      },
      items: [
        { id: 't2l2s2-1', type: 'gap', tag: 'dm-contrast', level: 'C1', lines: T2_L_UNI, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['In other words,', 'Needless to say,', 'Having said that,', 'To make matters worse,'], answer: 2,
          hint: 'Compare ‘Medicine at Chula’ with ‘any university’. Does Mint’s second sentence repeat, add to, or turn back on her first?',
          why: 'Mint gives a strong preference (Chula) and then a fair exception to it (she’d be happy anywhere she can study medicine). A speaker who limits her own previous point uses <em>Having said that</em>. “In other words” would repeat the same idea, but “any university” is not the same as “Chula”. “Needless to say” and “To make matters worse” continue in the same direction and do not allow this turn.' },

        { id: 't2l2s2-2', type: 'gap', tag: 'dm-contrast', level: 'C1', lines: T2_L_UNI, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Mind you,', 'Otherwise,', 'In that case,', 'To make matters worse,'], answer: 0,
          hint: 'Mint first criticises Krit. Does the next sentence criticise him more or qualify the criticism?',
          why: 'Mint calls Krit lazy, then adds an afterthought that qualifies it (“he isn’t lazy about everything”). That informal “but to be fair” is <em>Mind you</em>. “To make matters worse” would add a worse fact, but winning a science fair is good. “Otherwise” means “if not”, and “In that case” responds to new information from the other speaker.' },

        { id: 't2l2s2-3', type: 'gap', tag: 'dm-contrast', level: 'C1', lines: T2_L_RESTAURANT, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Even so,', 'In that case,', 'In other words,', 'To make matters worse,'], answer: 0,
          hint: 'The evening had two problems. Does the customer’s next point continue the complaint or turn away from it?',
          why: 'The customer admits the evening was bad but then praises the dessert and says they will come back, so the problems do not change her conclusion: <em>Even so</em>. “To make matters worse” would need another complaint, but the next point is praise. “In other words” would restate the complaint, and “In that case” reacts to something the manager has just told her.' },

        { id: 't2l2s2-4', type: 'gap', tag: 'dm-contrast', level: 'C1', lines: T2_L_TRIP, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['At any rate,', 'On the other hand,', 'As a matter of fact,', 'To put it another way,'], answer: 0,
          hint: 'The time is uncertain. Does the instruction depend on which time is correct?',
          why: 'The departure time is uncertain, but the instruction is the same either way (“Even then”). Sweeping aside an uncertainty to say what matters is the job of <em>At any rate</em> (= whatever happens). “On the other hand” needs a second side of a choice, “As a matter of fact” adds a surprising fact rather than an instruction, and “To put it another way” would repeat the same information in different words.' },

        { id: 't2l2s2-5', type: 'judge', tag: 'dm-contrast', level: 'C1',
          given: 'Fah: “The new phone has an amazing camera and a gorgeous screen. <strong>Mind you</strong>, the battery barely lasts a day.”',
          stem: 'Fah has changed her mind and now thinks the phone is a bad buy.',
          answer: 1,
          hint: 'Does “Mind you” cancel everything before it, or add a limit to it?',
          why: 'False. <em>Mind you</em> adds a small warning or exception to what the speaker has just said; it does not cancel it. Fah still praises the camera and screen; she simply adds that the battery is weak. Because “Mind you” keeps her praise and only adds a limit, the statement that she has changed her mind contradicts the text, so it is False.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't2l2s3', name: 'Rephrasing & concluding', cefr: 'C1', tag: 'dm-rephrase',
      theory: {
        key: 'Rephrasing markers say the <strong>same idea again</strong> (in other words), shrinking markers <strong>summarise</strong> (in a nutshell), and concluding markers give the <strong>final verdict</strong> (all things considered = after weighing everything; at the end of the day = what really matters most).',
        body: [
          'Three different jobs sit close together here, and TCAS enjoys confusing them. <strong>Rephrase</strong>: <em>In other words / To put it another way / That is (to say)</em> repeat the SAME idea in simpler or clearer words; no new information is allowed. <strong>Shrink</strong>: <em>In a nutshell / In short / Long story short / To cut a long story short</em> compress a long explanation into one line. <strong>Verdict</strong>: <em>All things considered / On balance</em> come after weighing good and bad points; <em>At the end of the day / When all is said and done</em> point to what matters most in the end, often ending a debate.',
          '<strong>How TCAS tests it.</strong> TCAS69’s professor says “Learning is about questioning what you don’t understand. ___ what good is listening without understanding?” with <em>At all events / Out of the blue / Take it or leave it / At the end of the day</em>. He is stating what ultimately matters, which is <em>At the end of the day</em>. TCAS69 also offered <em>to put it another way</em> as a distractor where the next idea was new, not a rephrase. <strong>A rephrase must not add information</strong>: that is your fastest test.',
          '<strong>The test.</strong> Step 1: compare the sentence after the blank with the sentence before. Same idea, new words? → rephrase. Many details reduced to one line? → shrink. A judgement after pros and cons? → all things considered. The bottom line that matters most? → at the end of the day. Step 2: watch time words. <em>In the end</em> and <em>eventually</em> describe time (what finally happened); <em>at the end of the day</em> usually describes importance, not time.'
        ],
        simple: [
          'In other words = the same idea, easier words. In a nutshell = a short summary.',
          'All things considered = after thinking about the good and the bad. At the end of the day = the most important point is…',
          'Test: if the sentence adds new information, it is NOT “in other words”.'
        ],
        thai: 'กลุ่มนี้มี 3 หน้าที่: พูดซ้ำด้วยคำใหม่ (In other words, To put it another way — ห้ามมีข้อมูลใหม่), สรุปย่อ (In a nutshell, In short) และตัดสินสุดท้าย (All things considered = เมื่อชั่งข้อดีข้อเสียแล้ว, At the end of the day = สิ่งที่สำคัญที่สุดท้ายที่สุดคือ) กับดักคือเลือก In other words ทั้งที่ประโยคหลังช่องว่างมีข้อมูลใหม่ และสับสน At the end of the day (เรื่องความสำคัญ) กับ In the end (เรื่องเวลา)',
        examples: [
          { s: 'The flight is fully booked. <strong>In other words</strong>, there are no seats left.', g: 'Rephrase: same fact, simpler words.' },
          { s: 'Late nights, no breakfast, too much caffeine… <strong>In a nutshell</strong>, you’re not looking after yourself.', g: 'Shrink a long list into one line.' },
          { s: 'It rained, but the food and the people were great. <strong>All things considered</strong>, it was a good trip.', g: 'Verdict after weighing good and bad.' },
          { s: 'Grades matter, but <strong>at the end of the day</strong>, you need to enjoy what you study.', g: 'What matters most.' }
        ],
        trap: '“In other words” before NEW information. Students see a sentence that explains something and choose “In other words”, but if the sentence adds a fact, a result or an example, it is not a rephrase. Dodge: cover the first sentence. If the second sentence tells you something the first didn’t, “in other words” is out.',
        analogy: { title: 'Translate, compress, rate', text: 'Think of a K-drama episode. “In other words” is the subtitle: the same line in words you understand. “In a nutshell” is the 30-second recap on TikTok. “All things considered” is your five-star rating after the finale, and “at the end of the day” is the one reason you would tell a friend to watch it.' },
        map: { center: 'Say it again / sum it up', branches: [
          { label: 'Rephrase (same idea)', leaves: ['In other words', 'To put it another way', 'That is to say'] },
          { label: 'Shrink', leaves: ['In a nutshell', 'In short', 'Long story short'] },
          { label: 'Verdict', leaves: ['All things considered', 'On balance'] },
          { label: 'What matters most', leaves: ['At the end of the day', 'When all is said and done'] },
          { label: 'Tests', leaves: ['new info → not a rephrase', 'in the end = time'] }
        ] },
        chant: { title: 'Same, Short or Sure', beat: 'clap-snap-clap-snap (4/4)', lines: [
          'Same idea in brand-new clothes?',
          '“In other words” is how it goes.',
          'Long story, one line, short and sweet?',
          '“In a nutshell”: job complete.',
          'Weighed the good and weighed the bad?',
          '“All things considered”: best you had.',
          'What matters most when talk is done?',
          '“At the end of the day”: the number one!'
        ] }
      },
      items: [
        { id: 't2l2s3-1', type: 'gap', tag: 'dm-rephrase', level: 'C1', lines: T2_L_ESSAY, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Mind you,', 'In other words,', 'Having said that,', 'On the other hand,'], answer: 1,
          hint: 'Compare the sentence after the blank with the one before it. Is anything new?',
          why: 'Paragraphs that “jump from one topic to another without any link” and “no clear path from one idea to the next” describe the same problem in different words, so T.Chris is rephrasing: <em>In other words</em>. “Mind you” and “Having said that” add an exception, and “On the other hand” introduces another side, but the second sentence simply continues the same criticism.' },

        { id: 't2l2s3-2', type: 'gap', tag: 'dm-rephrase', level: 'C1', lines: T2_L_ESSAY, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Needless to say,', 'On the other hand,', 'All things considered,', 'To make matters worse,'], answer: 2,
          hint: 'T.Chris lists weaknesses and strengths first. What does the final sentence do with them?',
          why: 'T.Chris weighs the weaknesses (slips, a weak example) against the strengths (a clear, original argument) and then gives an overall judgement, so <em>All things considered</em> fits. “On the other hand” would need a new contrasting side, but the verdict combines both sides. “To make matters worse” would need a new problem, and “Needless to say” does not fit a balanced judgement that the student could not have predicted.' },

        { id: 't2l2s3-3', type: 'gap', tag: 'dm-rephrase', level: 'C1', lines: T2_L_SLEEP, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['out of the blue', 'on the other hand', 'to make matters worse', 'at the end of the day'], answer: 3,
          hint: 'Krit admits formulas matter. What kind of point does he make after “But”?',
          why: 'Krit accepts that formulas matter but says what matters most in the end: a tired brain can’t use them. That bottom-line judgement is <em>at the end of the day</em>. “On the other hand” cannot follow “But” here; the contrast is already made, and Krit is not giving a second side of a choice. “To make matters worse” adds a new problem, and “out of the blue” means suddenly.' },

        { id: 't2l2s3-4', type: 'equiv', tag: 'dm-rephrase', level: 'C1',
          given: 'The film was three hours long, the seats were uncomfortable and the ending made no sense. <strong>In a nutshell</strong>, I wouldn’t recommend it.',
          stem: 'The phrase in bold can be best replaced by ________.',
          options: ['In short', 'In contrast', 'In addition', 'In particular'], answer: 0,
          hint: 'Compare the three details before the bold phrase with the sentence after it. What does that sentence do?',
          why: '<em>In a nutshell</em> compresses a long explanation into a short summary, so <em>In short</em> is the best replacement. “In particular” would focus on one detail, “In addition” would add another complaint, and “In contrast” would introduce the opposite view.' },

        { id: 't2l2s3-5', type: 'sort', tag: 'dm-rephrase', level: 'C1',
          stem: 'Sort the markers by their job.',
          bins: [
            { key: 'same', label: 'Same idea, new words', hint: 'no new information' },
            { key: 'shrink', label: 'Shrink to one line', hint: 'a short summary' },
            { key: 'verdict', label: 'Final verdict', hint: 'after weighing / what matters most' }
          ],
          items: [
            { text: 'In other words,', bin: 'same' },
            { text: 'To put it another way,', bin: 'same' },
            { text: 'That is to say,', bin: 'same' },
            { text: 'In a nutshell,', bin: 'shrink' },
            { text: 'Long story short,', bin: 'shrink' },
            { text: 'All things considered,', bin: 'verdict' },
            { text: 'At the end of the day,', bin: 'verdict' },
            { text: 'When all is said and done,', bin: 'verdict' }
          ],
          hint: 'Ask: does the marker repeat, compress or judge?',
          why: '<em>In other words, To put it another way</em> and <em>That is to say</em> repeat the same idea in new words. <em>In a nutshell</em> and <em>Long story short</em> compress a long story into one line. <em>All things considered, At the end of the day</em> and <em>When all is said and done</em> give a final judgement or the point that matters most.' }
      ]
    }
  ],
  check: { id: 't2l2ck', name: 'Systems Check · Markers that steer', items: [
    { id: 't2l2ck-1', type: 'gap', tag: 'dm-add', level: 'C1', lines: T2_L_HUAHIN, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['Even so,', 'In other words,', 'Needless to say,', 'To make matters worse,'], answer: 3,
      hint: 'Dad starts with “Bad news”. Is his second piece of news better or worse?',
      why: 'Dad announces rain all weekend and then adds a second problem, the closed pool, so he stacks bad on bad: <em>To make matters worse</em>. “Needless to say” fails because a closed pool cannot be predicted from a weather forecast. “In other words” would repeat the rain news, and “Even so” would need a contrast.' },

    { id: 't2l2ck-2', type: 'gap', tag: 'dm-contrast', level: 'C1', lines: T2_L_HUAHIN, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['In other words,', 'Needless to say,', 'Having said that,', 'To make matters worse,'], answer: 2,
      hint: 'Mum agrees it’s a pity. Do her next points add to the problem or soften it?',
      why: 'Mum accepts the bad news (“That’s a pity”) and then limits it with positive points: the beach location and the short rain showers. Accepting a point and then adding a fair exception is <em>Having said that</em>. “To make matters worse” would add another problem, “In other words” would repeat Dad’s news, and “Needless to say” would introduce something obvious from what came before.' },

    { id: 't2l2ck-3', type: 'gap', tag: 'dm-rephrase', level: 'C1', lines: T2_L_HUAHIN, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['Even so,', 'In a nutshell,', 'On the other hand,', 'To make matters worse,'], answer: 1,
      hint: 'Fah lists what she wants. Does the last sentence add something new or sum it up?',
      why: 'Fah compresses her wishes (no worries about rain, seafood and sleep) into one line: she is happy anywhere with grilled squid. That summary is <em>In a nutshell</em>. “On the other hand” and “Even so” signal a turn, but her last sentence agrees with what she has just said. “To make matters worse” adds a problem, and Fah has none.' },

    { id: 't2l2ck-4', type: 'gap', tag: 'dm-rephrase', level: 'C1', lines: T2_L_HUAHIN, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['All things considered,', 'On the other hand,', 'As a matter of fact,', 'To make matters worse,'], answer: 0,
      hint: 'Dad lists three reasons in the first sentence. What does he do with them in the second?',
      why: 'Dad weighs everything the family has said (it’s too late to cancel, the beach, Fah’s squid) and gives his overall decision, so <em>All things considered</em> fits. “On the other hand” would introduce another side, but his decision agrees with his reasons. “As a matter of fact” would add a surprising new fact, and “To make matters worse” would need another problem.' },

    { id: 't2l2ck-5', type: 'gap', tag: 'dm-add', level: 'C1', lines: T2_L_HUAHIN, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['As a matter of fact,', 'Needless to say,', 'On the other hand,', 'To make matters worse,'], answer: 0,
      hint: 'Mum says ‘I agree’. Does her next sentence turn against that, or add to it? What kind of extra?',
      why: 'Mum adds a new, surprising fact that makes going even easier: another app says it will be sunny. <em>As a matter of fact</em> introduces a surprising, stronger fact in the same direction. “Needless to say” would mean the family could have predicted the sunny forecast, but the last forecast said rain. “On the other hand” needs a second side, but Mum has just said “I agree”, and “To make matters worse” would need bad news.' },

    { id: 't2l2ck-6', type: 'gap', tag: 'dm-rephrase', level: 'C1', lines: T2_L_HUAHIN, blank: '(6)',
      stem: 'Choose the best option for blank (6).',
      options: ['even so,', 'mind you,', 'at any rate,', 'in other words,'], answer: 3,
      hint: 'Dad has just admitted something with one word. What does Fah do with his “Yes”?',
      why: 'Fah restates what Dad’s “…Yes” really means in plainer, funnier words: they have trusted an app that predicted snow in Bangkok. That is a rephrase, so <em>in other words</em> fits. “Even so” and “mind you” would need a contrast or an exception, and “at any rate” would brush the problem aside, but Fah is pointing straight at it.' }
  ] }
});

/* ---------------------------------------------------------- level 3 dialogues */
var T2_L_FAIR = [
  { who: 'Situation', text: 'The opening of a school science fair' },
  { who: 'Principal', text: 'Good morning, everyone. We have fifteen projects to visit and only one hour, so I’ll keep my speech short. ___(1)___ let’s welcome our first team, who built a flood-warning app!' },
  { who: 'Mint', text: '(whispering) That was the shortest speech she’s ever made.' }
];

var T2_L_COACH = [
  { who: 'Situation', text: 'A football coach talking to his team' },
  { who: 'Coach', text: '___(2)___ the exams are finally over, we can train every evening again.' },
  { who: 'Krit', text: 'Great, Coach. But Pun says he can only come on Tuesdays and Thursdays because of his coding class.' },
  { who: 'Coach', text: '___(3)___ we’ll move the practice matches to Tuesday. I need my goalkeeper.' }
];

var T2_L_MANGO = [
  { who: 'Situation', text: 'Two friends at a café' },
  { who: 'Fah', text: 'This smoothie is amazing. The café gets its mangoes from a farm in Chachoengsao.' },
  { who: 'Mint', text: '___(4)___ mangoes, did you know T.Chris is growing a mango tree on his condo balcony?' },
  { who: 'Fah', text: 'On a balcony? That’s either brilliant or a disaster.' }
];

var T2_L_TEST = [
  { who: 'Situation', text: 'Two students before an English class' },
  { who: 'Oat', text: 'Is the English test still on Friday?' },
  { who: 'Beam', text: '___(1)___ yes, but T.Chris sometimes moves tests. Check the class page to be sure.' },
  { who: 'Oat', text: 'I also heard there’s a listening section this time.' },
  { who: 'Beam', text: 'Really? Who told you that?' },
  { who: 'Oat', text: 'Nobody told me directly. ___(2)___ he mentioned it to the M5/3 class yesterday.' }
];

var T2_L_SHOP = [
  { who: 'Situation', text: 'A customer and a shop assistant at a clothes shop' },
  { who: 'Customer', text: 'Excuse me, I think you charged me twice for the same shirt.' },
  { who: 'Assistant', text: 'Let me check the receipt. Hmm… ___(3)___ you bought two shirts in the same colour, didn’t you? One in size M and one in size L.' },
  { who: 'Customer', text: 'Oh, you’re right. The second one is for my brother. Sorry!' }
];

var T2_L_FLOOD = [
  { who: 'Situation', text: 'A student talking to her teacher after the September floods' },
  { who: 'Pim', text: 'Our house in Lat Krabang was flooded in September. The water came up to our knees, and we had to carry everything upstairs at two in the morning.' },
  { who: 'T.Chris', text: 'That sounds awful, Pim. Is everyone all right?' },
  { who: 'Pim', text: 'Yes, we’re all fine. But ___(4)___ nobody in my family got much sleep that week.' }
];

var T2_L_LECTURE = [
  { who: 'Situation', text: 'A university lecture on climate' },
  { who: 'Lecturer', text: 'Greenhouse gases trap heat near the Earth’s surface. ___(1)___ they work like a thick blanket on a hot night: the heat cannot escape, so you get warmer and warmer.' },
  { who: 'Lecturer', text: 'Now, before we go further, I need to ___(2)___ between weather and climate. Weather is what happens today; climate is the pattern over thirty years or more.' },
  { who: 'Student', text: 'Sorry, Professor, but will El Niño make next year hotter?' },
  { who: 'Lecturer', text: 'Good question. But I don’t want ___(3)___ right now. El Niño is fascinating, but it has its own lecture next week.' }
];

var T2_L_TRAINING = [
  { who: 'Situation', text: 'A coach talking to a player after training' },
  { who: 'Coach', text: 'Krit, I’ve hinted at this three times, and you still haven’t understood, so ___(4)___: if you miss one more training session, you’re off the team.' },
  { who: 'Krit', text: 'Understood, Coach. I’ll be here every evening.' }
];

var T2_L_WEBINAR = [
  { who: 'Situation', text: 'An online webinar about university interviews' },
  { who: 'Dr Nattaya', text: 'Good evening, everyone, and thank you for joining. ___(1)___ everyone has logged in, let’s begin.' },
  { who: 'Dr Nattaya', text: 'The first thing interviewers notice is not your answer but how you listen. ___(2)___ an interview is like a tennis match: if you only think about your next shot, you miss the ball coming towards you.' },
  { who: 'Ploy', text: 'Excuse me, Dr Nattaya. Do interviewers ask about our hobbies?' },
  { who: 'Dr Nattaya', text: '___(3)___ most faculties do, yes, but I can’t speak for every university.' },
  { who: 'Ploy', text: 'My hobby is collecting bottle caps. I have over three thousand.' },
  { who: 'Dr Nattaya', text: '___(4)___ that’s one of the most memorable hobbies I’ve ever heard of. Interviewers love a detail like that.' },
  { who: 'Ploy', text: 'Thank you! And what should I do if I don’t know the answer to a question?' },
  { who: 'Dr Nattaya', text: 'Don’t panic, and don’t talk for five minutes about something unrelated. ___(5)___ is the fastest way to lose an interviewer’s attention.' },
  { who: 'Ploy', text: 'One last question. This is the webinar for the Faculty of Medicine, right?' },
  { who: 'Dr Nattaya', text: 'Oh, no. This is Veterinary Science. Medicine is in the other Zoom room.' },
  { who: 'Ploy', text: '___(6)___ my bottle caps and I will stay here. I think I prefer animals anyway.' }
];

/* ================================================== LEVEL 3 MARKERS THAT FRAME */
T2.levels.push({
  id: 't2l3', n: 3, name: 'Markers that frame', cefr: 'C1',
  blurb: 'Openers, hedges and lecture talk: how speakers start, how sure they are, and how professors explain. TCAS69’s long conversation lived here.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't2l3s1', name: 'Opening & framing', cefr: 'C1', tag: 'dm-frame',
      theory: {
        key: 'Framing markers set up what comes next: <em>without further ado</em> starts the main event, <em>by the way</em> and <em>speaking of</em> open a side topic, <em>in that case</em> answers new information, and <em>now that</em> (+ clause) gives a reason that has just become true. Check both meaning AND grammar.',
        body: [
          'Framing markers are the stage directions of speech. <em>Without further ado</em> (formal, often an MC or a teacher) means “no more delay, let’s start”. <em>First things first</em> puts the most urgent point first. <em>By the way</em> and <em>Before I forget</em> open a side topic. <em>Speaking of + noun</em> jumps to a new topic through a word just mentioned (“Speaking of mangoes…”). <em>In that case</em> reacts to information the OTHER person has just given (“He can only come on Tuesdays.” “In that case, we’ll…”). <em>Anyway</em> closes a side topic and returns to the main one.',
          '<strong>Grammar is half the answer.</strong> TCAS69: after an hour-long lecture the professor says “___ you have a better understanding of Beethoven and his music, are there any questions?” The options were <em>Now that / Otherwise / In that case / As long as</em>. Only a <strong>conjunction</strong> can join the clause “you have a better understanding…” to the question, which removes <em>Otherwise</em> and <em>In that case</em> (they are adverbs that begin a sentence). Between the two conjunctions, <em>as long as</em> sets a condition (“only if”), but the understanding is already a fact, so <em>Now that</em> (= because now) wins. The same professor opened with “___ Ludwig van Beethoven was…”, and <em>Without further ado</em> beat <em>Insofar as / To say the most / On the other hand</em>.',
          '<strong>The procedure.</strong> Step 1: grammar. Is the blank followed by a full clause and then a main clause (conjunction needed: now that, as long as), by a noun (speaking of), or by a whole sentence (adverbs: in that case, otherwise, by the way)? Step 2: meaning. Fact now true → now that. Condition → as long as. Reaction to the other speaker’s news → in that case. Result if not → otherwise. Start of the main event → without further ado.'
        ],
        simple: [
          'Without further ado = let’s start now. By the way = a new, side topic. Speaking of X = X reminds me of something.',
          'In that case = “because of what you just told me”. Now that = because this is true now. As long as = only if.',
          'Look at the grammar after the blank too. “Now that” and “as long as” join two clauses. “In that case” and “otherwise” begin a sentence.'
        ],
        thai: 'คำเปิดและคำจัดกรอบ (framing markers): Without further ado = ไม่พูดพร่ำทำเพลง เริ่มกันเลย, By the way = อ้อ จะว่าไป (เรื่องแทรก), Speaking of + คำนาม = พูดถึง… (ต่อจากคำที่เพิ่งพูด), In that case = ถ้าอย่างนั้น (ตอบข้อมูลที่อีกฝ่ายเพิ่งบอก), Now that + ประโยค = ในเมื่อตอนนี้ (เหตุผลที่เพิ่งเป็นจริง) ต้องดูไวยากรณ์ด้วย: Now that และ As long as เป็น conjunction ที่เชื่อมสองประโยค ส่วน In that case และ Otherwise ใช้ขึ้นต้นประโยคเท่านั้น กับดักคือ As long as แปลว่า “ตราบใดที่/ถ้า” ใช้กับเงื่อนไข ไม่ใช่ข้อเท็จจริงที่เกิดขึ้นแล้ว',
        examples: [
          { s: 'We have a lot to cover, so <strong>without further ado</strong>, let’s meet our first speaker.', g: 'Start the main event now.' },
          { s: '<strong>Now that</strong> the rain has stopped, we can walk to the BTS.', g: 'Conjunction + clause: because this is now true.' },
          { s: '“The museum is closed on Mondays.” “<strong>In that case</strong>, let’s go on Tuesday.”', g: 'Reaction to the other speaker’s information.' },
          { s: '<strong>Speaking of</strong> exams, have you registered for TGAT yet?', g: 'Speaking of + noun just mentioned.' },
          { s: 'You can borrow my notes <strong>as long as</strong> you return them tomorrow.', g: 'Condition: only if.' }
        ],
        trap: '“As long as” for a fact. Because both “now that” and “as long as” join clauses, students treat them as twins. “As long as” means “only if” and sets a condition for the future; “now that” states a reason that is already true. Dodge: if the clause after the blank is already a fact (the exams ARE over, you HAVE understood), choose “now that”.',
        analogy: { title: 'The concert MC', text: 'Framing markers are the MC at a concert. “Without further ado” brings the band on stage. “By the way” is the quick announcement about the lost wallet. “Speaking of” jumps from one song to a story about it. “In that case” is what the MC says when the crew signals the lights have failed: “In that case, let’s do an acoustic song!”' },
        map: { center: 'Framing markers', branches: [
          { label: 'Start', leaves: ['Without further ado', 'First things first', 'Let’s get started'] },
          { label: 'Side topic', leaves: ['By the way', 'Speaking of + noun', 'Before I forget'] },
          { label: 'React to news', leaves: ['In that case', 'If so', 'Then'] },
          { label: 'Join clauses', leaves: ['Now that = because now', 'As long as = only if'] },
          { label: 'Start a sentence (adverbs)', leaves: ['Otherwise = if not', 'In that case', 'By the way'] }
        ] },
        story: { title: 'Nong Bot Hosts English Day', panels: [
          { who: 'Nong Bot', text: 'Welcome to English Day! Before we begin, here are all 347 rules of the school hall. Rule one: the hall is a hall…' },
          { who: 'T.Chris', text: 'Bot, the audience is asleep. Just say “Without further ado” and start the show.' },
          { who: 'Nong Bot', text: 'Without further ado… (whispers) T.Chris, where is the ado? Is it further than the car park? Should I go and get it?' },
          { who: 'Pun', text: 'There’s no ado to fetch, Bot! It means “no more delay”. Just bring on the first act!' },
          { who: 'Nong Bot', text: 'Understood. Speaking of acts, I have prepared a 40-minute slideshow about my charging cable.' },
          { who: 'Fah', text: 'Bot, “speaking of” lets you change topic politely, not hijack the whole show. In that case, I’ll host. Without further ado: Mint’s band!' }
        ], moral: '“Without further ado” means no more delay; “speaking of” opens a side topic; “in that case” reacts to what just happened.' }
      },
      items: [
        { id: 't2l3s1-1', type: 'gap', tag: 'dm-frame', level: 'C1', lines: T2_L_FAIR, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Otherwise,', 'By the way,', 'On the other hand,', 'Without further ado,'], answer: 3,
          hint: 'The principal has just promised to keep her speech short. What does she do next?',
          why: 'The principal has promised a short speech and immediately starts the main event, so she needs <em>Without further ado</em> (= no more delay). “By the way” would open a side topic, but welcoming the first team is the main business. “Otherwise” means “if not”, and “On the other hand” needs a contrasting side.' },

        { id: 't2l3s1-2', type: 'gap', tag: 'dm-frame', level: 'C1', lines: T2_L_COACH, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Now that', 'Otherwise', 'As long as', 'In that case'], answer: 0,
          hint: 'Two clauses need joining. Is “the exams are finally over” a condition or a fact?',
          why: 'The blank must join two clauses, so we need a conjunction: <em>Now that</em> or <em>As long as</em>. The word “finally” shows the exams really are over, which is a fact, so <em>Now that</em> (= because now) fits. “As long as” is the near miss, but it sets a condition (“only if”). “Otherwise” and “In that case” are adverbs that cannot join two clauses.' },

        { id: 't2l3s1-3', type: 'gap', tag: 'dm-frame', level: 'C1', lines: T2_L_COACH, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Now that', 'Otherwise,', 'In that case,', 'Without further ado,'], answer: 2,
          hint: 'Krit has just given the coach new information. How does the coach respond to it?',
          why: 'Krit tells the coach that Pun can only come on Tuesdays and Thursdays, and the coach changes the plan because of this news: <em>In that case</em> (= if that is true). “Now that” is a conjunction and would leave “we’ll move the matches…” without a main clause. “Otherwise” means “if not”, and “Without further ado” starts an event after an introduction.' },

        { id: 't2l3s1-4', type: 'gap', tag: 'dm-frame', level: 'C1', lines: T2_L_MANGO, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Now that', 'Instead of', 'Speaking of', 'According to'], answer: 2,
          hint: 'Which word in Fah’s line does Mint repeat, and is her question about the same thing as Fah’s line?',
          why: 'Mint picks up the word “mangoes” from Fah and uses it to jump to a related story, which is exactly what <em>Speaking of</em> + noun does. “Now that” must be followed by a full clause, not just a noun. “According to” needs a source of information (a person, a report), and “Instead of mangoes” makes no sense before a question about T.Chris’s tree.' },

        { id: 't2l3s1-5', type: 'sort', tag: 'dm-frame', level: 'C1',
          stem: 'What does each marker do in a conversation? Sort them.',
          bins: [
            { key: 'start', label: 'Start the main event', hint: 'let’s begin' },
            { key: 'side', label: 'Open a side topic', hint: 'a new or related subject' },
            { key: 'react', label: 'React to new information', hint: 'because of what you just said' },
            { key: 'join', label: 'Join two clauses', hint: 'reason, condition' }
          ],
          items: [
            { text: 'Without further ado,', bin: 'start' },
            { text: 'First things first,', bin: 'start' },
            { text: 'By the way,', bin: 'side' },
            { text: 'Speaking of exams,', bin: 'side' },
            { text: 'In that case,', bin: 'react' },
            { text: 'If so,', bin: 'react' },
            { text: 'Now that …', bin: 'join' },
            { text: 'As long as …', bin: 'join' }
          ],
          hint: 'Two questions: what is the marker’s job, and can it join two clauses on its own?',
          why: '<em>Without further ado</em> and <em>First things first</em> start the main business. <em>By the way</em> and <em>Speaking of</em> open a side topic. <em>In that case</em> and <em>If so</em> respond to what the other person has just said. <em>Now that</em> and <em>As long as</em> are conjunctions: they join a reason or a condition to a main clause.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't2l3s2', name: 'Hedging & stance', cefr: 'C1', tag: 'dm-stance',
      theory: {
        key: 'Stance markers show <strong>how sure the speaker is and where the information came from</strong>: as far as I know (limited knowledge), apparently (I heard it), if I’m not mistaken (I think so, correct me), to be honest / frankly (my real feeling), as you can imagine (you can guess the feeling).',
        body: [
          'Every statement carries a hidden label: <em>How sure am I? Where did I get this? How do I feel?</em> Stance markers print that label. <strong>Limited knowledge</strong>: <em>As far as I know / As far as I can tell</em> (“this is true, but my information may be incomplete”). <strong>Second-hand</strong>: <em>Apparently / I hear that / According to…</em> (“someone told me, I didn’t see it”). <strong>Polite uncertainty</strong>: <em>If I’m not mistaken / If I remember correctly</em> (“I think so, please correct me”), a great way to correct a customer or a teacher politely. <strong>Honest feeling</strong>: <em>To be honest / Frankly / Honestly</em> (often before an unwelcome truth, but also before sincere praise). <strong>Shared expectation</strong>: <em>As you can imagine</em> (“you can guess how that felt”). <strong>Frequency</strong>: <em>More often than not</em> (= usually).',
          '<strong>How TCAS tests it.</strong> TCAS69 put <em>as far as I know</em> at the end of a sentence (“Some companies won’t ask for a CV, as far as I know”). TCAS68: after being dumped, Pum says “___ I’ve been depressed and crying all night”, and the key <em>As you can imagine</em> beat <em>Nevertheless / More often than not / All things considered</em>. The clue is always in the surrounding lines: a hedge (“but check to be sure”, “I can’t speak for every…”) calls for a limited-knowledge marker; “Nobody told me directly” calls for <em>apparently</em>; a tag question (“didn’t you?”) suits polite uncertainty.',
          '<strong>Separate these look-alikes.</strong> <em>As far as I know</em> (my knowledge) is not <em>as far as I’m concerned</em> (my opinion). <em>Apparently</em> (I heard it) is not <em>obviously</em> (everyone can see it). <em>Frankly</em> can sound blunt; with a stranger or a customer, <em>if I’m not mistaken</em> is safer.'
        ],
        simple: [
          'Stance markers show how sure you are and where your information came from.',
          'As far as I know = I think it’s true, but I’m not 100% sure. Apparently = somebody told me. If I’m not mistaken = I think so, correct me if I’m wrong. To be honest = my real feeling.',
          'Look for clues like “check to be sure” or “nobody told me directly”.'
        ],
        thai: 'Stance markers บอกว่าผู้พูด “มั่นใจแค่ไหน” และ “ได้ข้อมูลมาจากไหน”: As far as I know = เท่าที่ฉันรู้ (อาจไม่ครบ), Apparently = ได้ยินมาว่า (ไม่ได้เห็นเอง), If I’m not mistaken = ถ้าจำไม่ผิด (สุภาพ เปิดให้แก้ได้), To be honest/Frankly = พูดตามตรง, As you can imagine = อย่างที่คุณคงนึกออก ให้หาคำใบ้รอบ ๆ ช่องว่าง เช่น “ช่วยเช็กอีกทีนะ” แปลว่าไม่แน่ใจ อย่าเลือก Obviously ที่แสดงความมั่นใจเต็มที่ และอย่าสับสน as far as I know (ความรู้) กับ as far as I’m concerned (ความคิดเห็น)',
        examples: [
          { s: '<strong>As far as I know</strong>, the library opens at eight, but check the website.', g: 'Limited knowledge; the speaker invites checking.' },
          { s: '<strong>Apparently</strong>, the new canteen will sell sushi.', g: 'Second-hand information.' },
          { s: '<strong>If I’m not mistaken</strong>, you ordered the large size, didn’t you?', g: 'Polite, tentative correction.' },
          { s: '<strong>To be honest</strong>, I didn’t enjoy the film.', g: 'Real feeling, often an unwelcome truth.' },
          { s: 'My flight was cancelled twice. <strong>As you can imagine</strong>, I was exhausted.', g: 'The listener can guess the feeling.' }
        ],
        trap: 'Certainty mismatch. TCAS puts “Obviously” or “Frankly” next to a sentence that is full of doubt (“but check the website”, “I can’t speak for everyone”). Dodge: before choosing, mark the speaker’s certainty from the rest of the line as HIGH, LOW, or HEARD-IT. Then choose the marker with the same label.',
        analogy: { title: 'Signal bars', text: 'Stance markers are the signal bars on your phone. “Obviously” is full bars. “As far as I know” is two bars: it works, but don’t bet your life on it. “Apparently” means you are using a friend’s hotspot: the information came through someone else. Choose the marker that shows the same number of bars as the rest of the sentence.' },
        map: { center: 'Stance & hedging', branches: [
          { label: 'Limited knowledge', leaves: ['As far as I know', 'As far as I can tell'] },
          { label: 'Heard it', leaves: ['Apparently', 'I hear that', 'Rumour has it'] },
          { label: 'Polite doubt', leaves: ['If I’m not mistaken', 'If I remember correctly'] },
          { label: 'Real feeling', leaves: ['To be honest', 'Frankly', 'Honestly'] },
          { label: 'Shared expectation', leaves: ['As you can imagine', 'As you might expect'] },
          { label: 'Look-alikes', leaves: ['far as I know ≠ I’m concerned', 'apparently ≠ obviously'] }
        ] },
        moves: [
          { move: 'Hold your hand flat and wobble it', says: 'As far as I know: probably true, not 100%' },
          { move: 'Cup a hand to your ear and point sideways', says: 'Apparently: somebody told me' },
          { move: 'Raise one finger and tilt your head politely', says: 'If I’m not mistaken: correct me if I’m wrong' },
          { move: 'Put a hand on your heart', says: 'To be honest: my real feeling' },
          { move: 'Open both palms towards the listener', says: 'As you can imagine: you can guess how I felt' }
        ]
      },
      items: [
        { id: 't2l3s2-1', type: 'gap', tag: 'dm-stance', level: 'C1', lines: T2_L_TEST, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Frankly,', 'Obviously,', 'As far as I know,', 'To make matters worse,'], answer: 2,
          hint: 'Beam tells Oat to check the class page. How sure is she about Friday?',
          why: 'Beam believes the test is on Friday but warns that it might move and tells Oat to check, so her knowledge is limited: <em>As far as I know</em>. “Obviously” is the near miss in the wrong direction; it shows complete certainty, which contradicts “Check the class page to be sure”. “Frankly” introduces an honest feeling, and “To make matters worse” adds a bad fact.' },

        { id: 't2l3s2-2', type: 'gap', tag: 'dm-stance', level: 'C1', lines: T2_L_TEST, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Frankly,', 'Apparently,', 'To be fair,', 'If you ask me,'], answer: 1,
          hint: 'Oat says nobody told him directly. How did the information reach him?',
          why: '“Nobody told me directly” shows that Oat heard the news second-hand, which is the job of <em>Apparently</em> (= I have heard / it seems). “If you ask me” introduces an opinion, but a teacher’s announcement is a fact. “Frankly” shows an honest feeling, and “To be fair” defends someone after criticism; neither describes where information came from.' },

        { id: 't2l3s2-3', type: 'gap', tag: 'dm-stance', level: 'C1', lines: T2_L_SHOP, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Frankly,', 'Needless to say,', 'Believe it or not,', 'If I’m not mistaken,'], answer: 3,
          hint: 'The assistant is correcting a customer, and ends with “didn’t you?” How polite and how sure is she?',
          why: 'The assistant politely suggests that the customer is wrong and invites confirmation with the tag “didn’t you?”, which is exactly what <em>If I’m not mistaken</em> does. “Frankly” would sound blunt, even rude, to a customer. “Needless to say” and “Believe it or not” present the fact as obvious or as shocking, which clashes with a tag question that asks for confirmation.' },

        { id: 't2l3s2-4', type: 'gap', tag: 'dm-stance', level: 'C1', lines: T2_L_FLOOD, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['nevertheless,', 'as you can imagine,', 'if I’m not mistaken,', 'more often than not,'], answer: 1,
          hint: 'Read Pim’s flood story again. Is the sentence after ‘But’ a surprise, a doubt, or a result of the story?',
          why: 'After a flood at 2 a.m., anyone could guess that the family slept badly, so Pim uses <em>as you can imagine</em> (= you can guess this). “Nevertheless” signals a contrast, but poor sleep is the expected result, not a surprise. “More often than not” means “usually”, but she is describing one week, and “if I’m not mistaken” would make her sound unsure about her own family.' },

        { id: 't2l3s2-5', type: 'judge', tag: 'dm-stance', level: 'C1',
          given: 'Krit: “<strong>As far as I know</strong>, the match against Suankularb hasn’t been cancelled.”',
          stem: 'Krit is completely certain that the match will take place.',
          answer: 1,
          hint: 'What does “as far as I know” tell you about the limits of Krit’s information?',
          why: 'False. <em>As far as I know</em> means “according to the information I have, which may be incomplete”. Krit believes the match is still on, but he is hedging: he leaves room for news he hasn’t heard. A speaker who was completely certain would simply state the fact or use a marker such as “definitely”.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't2l3s3', name: 'Lecture & argument talk', cefr: 'C1+', tag: 'dm-meta',
      theory: {
        key: 'Meta-markers name the <strong>thinking move</strong> the speaker is about to make: compare to something familiar (to make an analogy), give an example (to illustrate), separate two ideas (to make a distinction), say it very plainly (to spell it out), or leave the main topic (to go off on a tangent). Match the name to the move that follows.',
        body: [
          'Lecturers and debaters often announce what their next sentence will DO. These are meta-markers: talk about the talk. <em>To make an analogy</em> announces a comparison with something familiar, and the next line almost always contains <em>like</em> or <em>as if</em>. <em>To illustrate / To give you an example</em> announce a real case. <em>To make a distinction (between A and B)</em> announces that two things will be separated, so the next line shows how they DIFFER. <em>To spell it out</em> means “to say it so plainly that nobody can miss it”, often after hints have failed. <em>To put it bluntly</em> is similar but warns that the plain truth may sound harsh. <em>To go off on a tangent</em> means to wander away from the main topic, and speakers usually say they DON’T want to do it. <em>For the sake of argument / To play devil’s advocate</em> announce a position the speaker may not really hold.',
          '<strong>How TCAS tests it.</strong> TCAS69’s professor says “___ it’s like walking into a room without knowing where you are!” and the options were <em>To make an analogy / To make a distinction / To compare and contrast / To summarize my main point</em>. The word <em>like</em> gives the analogy away. In the same paper, Pam’s story used <em>to spell it out / to put it another way / to go off on a tangent / to make matters worse</em> as options: three meta-markers as distractors for an adding marker. So the first question is not “which meta-marker?” but “<strong>is the next line a thinking move at all?</strong>”',
          '<strong>The procedure.</strong> Step 1: read the line after the blank and name what it does (compares, gives an example, separates, states bluntly, wanders, returns). Step 2: check for signal words (<em>like</em> → analogy; <em>between… and…</em> + differences → distinction; a warning with no hints → spell it out). Step 3: if the line simply tells the next event of a story, no meta-marker fits.'
        ],
        simple: [
          'Some markers say what the next sentence will do.',
          'To make an analogy → a comparison with “like”. To make a distinction → how two things are different. To spell it out → say it very clearly. To go off on a tangent → talk about something else.',
          'Read the next line. What does it do? Choose the marker with that name.'
        ],
        thai: 'Meta-markers คือคำที่ “บอกล่วงหน้า” ว่าประโยคต่อไปจะทำอะไร: To make an analogy = เปรียบเทียบกับสิ่งที่คุ้นเคย (มักตามด้วย like), To illustrate = ยกตัวอย่าง, To make a distinction = แยกความแตกต่างของสองสิ่ง, To spell it out = พูดให้ชัดแบบไม่ต้องเดา, To go off on a tangent = พูดออกนอกเรื่อง ให้อ่านบรรทัดถัดไปแล้วตั้งชื่อ “การกระทำ” ของมันก่อน กับดักคือ ถ้าประโยคถัดไปเป็นแค่เหตุการณ์ต่อเนื่องในเรื่องเล่า meta-marker จะผิดทั้งหมด',
        examples: [
          { s: '<strong>To make an analogy</strong>, memory is like a muscle: use it or lose it.', g: 'Comparison with something familiar; note “like”.' },
          { s: 'Let me <strong>make a distinction</strong> between weather and climate.', g: 'The next lines show how they differ.' },
          { s: '<strong>To spell it out</strong>: no phones in the exam room, not even in your pocket.', g: 'Said very plainly, so nobody can misunderstand.' },
          { s: 'Sorry, I’m <strong>going off on a tangent</strong>. Back to the main point.', g: 'Wandering from the topic, then returning.' },
          { s: '<strong>To play devil’s advocate</strong>, what if homework actually helps?', g: 'Arguing a side you may not hold, to test an idea.' }
        ],
        trap: '“To compare and contrast” vs “To make an analogy”. Both involve two things, but an analogy explains a hard idea through a familiar one (it’s LIKE…), while compare-and-contrast lists similarities and differences between two things of the same kind. Dodge: if the second thing is an everyday picture (a blanket, a tennis match, a room), it’s an analogy.',
        analogy: { title: 'Game-commentator calls', text: 'A meta-marker is a game commentator naming the play before it happens: “Here comes the counter-attack!” If he shouts “Penalty!” and the next thing you see is a throw-in, he called the wrong play. Listen to the play that follows (compare, example, split, spell out, wander) and choose the call that names it.' },
        map: { center: 'Talk about the talk', branches: [
          { label: 'Compare / show', leaves: ['To make an analogy (like…)', 'To illustrate', 'To give you an example'] },
          { label: 'Separate / clarify', leaves: ['To make a distinction', 'To spell it out', 'To put it bluntly'] },
          { label: 'Leave / return', leaves: ['to go off on a tangent', 'To get back to the point', 'Where was I?'] },
          { label: 'Test an argument', leaves: ['For the sake of argument', 'To play devil’s advocate'] }
        ] },
        chant: { title: 'Name the Move', beat: 'snap-snap-clap (4/4)', lines: [
          'If it’s LIKE a room or like a game,',
          'Make an analogy: that’s its name!',
          'Two things split and shown apart?',
          'Make a distinction: that’s the art.',
          'Hints all failed, so say it plain?',
          'Spell it out, and then again!',
          'Wander off to Pluto’s moon?',
          'That’s a tangent: come back soon!'
        ] }
      },
      items: [
        { id: 't2l3s3-1', type: 'gap', tag: 'dm-meta', level: 'C1+', lines: T2_L_LECTURE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['To make an analogy,', 'To make a distinction,', 'To go off on a tangent,', 'To summarise my main point,'], answer: 0,
          hint: 'Read the sentence after the blank and name its move before you look at the options.',
          why: 'The lecturer explains greenhouse gases through a familiar picture (“they work like a thick blanket on a hot night”), so she is making an analogy. “To make a distinction” would separate two things, but here two things are being connected. “To summarise my main point” fails because this is a new explanation, not a summary, and “To go off on a tangent” means leaving the topic.' },

        { id: 't2l3s3-2', type: 'gap', tag: 'dm-meta', level: 'C1+', lines: T2_L_LECTURE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['spell it out', 'make an analogy', 'make a distinction', 'go off on a tangent'], answer: 2,
          hint: 'The next sentence says what weather is and what climate is. Are they being joined or separated?',
          why: 'The lecturer then shows how weather (today) and climate (thirty years or more) are DIFFERENT, so she needs to <em>make a distinction</em> between them. “Make an analogy” is the near miss: it can also take “between”, but an analogy shows how two things are ALIKE. “Spell it out” doesn’t take “between A and B”, and going off on a tangent is the opposite of what she is doing.' },

        { id: 't2l3s3-3', type: 'gap', tag: 'dm-meta', level: 'C1+', lines: T2_L_LECTURE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['to go off on a tangent', 'to put it in a nutshell', 'to play devil’s advocate', 'to make a long story short'], answer: 0,
          hint: 'El Niño belongs to next week’s lecture. What would answering it now do to today’s topic?',
          why: 'El Niño is a different topic with “its own lecture next week”, so answering now would take the class away from the main subject: she doesn’t want <em>to go off on a tangent</em>. “To put it in a nutshell” and “to make a long story short” would mean summarising, but the lecturer is refusing to discuss the topic at all. “To play devil’s advocate” means arguing a view you don’t hold, which has nothing to do with postponing a question.' },

        { id: 't2l3s3-4', type: 'gap', tag: 'dm-meta', level: 'C1+', lines: T2_L_TRAINING, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['let me digress', 'let me spell it out', 'let me make an analogy', 'let me play devil’s advocate'], answer: 1,
          hint: 'Hints have failed three times. How does the coach deliver the message now?',
          why: 'After three failed hints, the coach states the rule so plainly that Krit cannot misunderstand it, which is exactly <em>let me spell it out</em>. The warning that follows is not a comparison, so “make an analogy” fails. “Digress” means leaving the topic, and “play devil’s advocate” means arguing a view you don’t hold, but the coach clearly means every word.' },

        { id: 't2l3s3-5', type: 'sort', tag: 'dm-meta', level: 'C1+',
          stem: 'What thinking move does each phrase announce? Sort them.',
          bins: [
            { key: 'compare', label: 'Compare or show', hint: 'like… / for example…' },
            { key: 'clarify', label: 'Separate or clarify', hint: 'how they differ / say it plainly' },
            { key: 'path', label: 'Leave or return to the topic', hint: 'wandering and coming back' },
            { key: 'test', label: 'Test an argument', hint: 'a view you may not hold' }
          ],
          items: [
            { text: 'To make an analogy,', bin: 'compare' },
            { text: 'To illustrate,', bin: 'compare' },
            { text: 'To make a distinction,', bin: 'clarify' },
            { text: 'To spell it out,', bin: 'clarify' },
            { text: 'Sorry, I’m going off on a tangent.', bin: 'path' },
            { text: 'To get back to the point,', bin: 'path' },
            { text: 'For the sake of argument,', bin: 'test' },
            { text: 'To play devil’s advocate,', bin: 'test' }
          ],
          hint: 'Imagine the sentence that would follow each phrase. What would it do?',
          why: 'An analogy and an illustration make an idea clearer through a comparison or an example. A distinction separates two ideas, and spelling it out states a point very plainly. Going off on a tangent leaves the main topic, and getting back to the point returns to it. “For the sake of argument” and “to play devil’s advocate” introduce a position the speaker may not really hold, to test an idea.' }
      ]
    }
  ],
  check: { id: 't2l3ck', name: 'Systems Check · Markers that frame', items: [
    { id: 't2l3ck-1', type: 'gap', tag: 'dm-frame', level: 'C1+', lines: T2_L_WEBINAR, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['Now that', 'Otherwise', 'Even though', 'In that case'], answer: 0,
      hint: 'The blank joins two clauses. Is “everyone has logged in” a fact, a condition or a contrast?',
      why: 'The blank must join “everyone has logged in” to “let’s begin”, and the logging in has already happened, so the reason is a present fact: <em>Now that</em>. “Even though” is also a conjunction, but there is no contrast between logging in and beginning. “Otherwise” and “In that case” are adverbs that cannot join the two clauses, and nobody has given Dr Nattaya new information to react to.' },

    { id: 't2l3ck-2', type: 'gap', tag: 'dm-meta', level: 'C1+', lines: T2_L_WEBINAR, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['To be honest,', 'To make an analogy,', 'To make a distinction,', 'To go off on a tangent,'], answer: 1,
      hint: 'Is an interview really a tennis match? What is Dr Nattaya doing with that picture?',
      why: 'Dr Nattaya explains good listening through a familiar picture: an interview “is like a tennis match”. That is <em>To make an analogy</em>. “To make a distinction” would separate two things, but she is connecting them. “To go off on a tangent” would mean leaving the topic, and “To be honest” introduces a personal feeling rather than an explanation.' },

    { id: 't2l3ck-3', type: 'gap', tag: 'dm-stance', level: 'C1+', lines: T2_L_WEBINAR, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['Frankly,', 'Obviously,', 'As far as I know,', 'As you can imagine,'], answer: 2,
      hint: 'Read the end of Dr Nattaya’s answer. Does she claim to know about every university?',
      why: 'Dr Nattaya answers “yes” but immediately limits it (“I can’t speak for every university”), so her knowledge is partial: <em>As far as I know</em>. “Obviously” claims complete certainty, which her own limit contradicts. “As you can imagine” introduces a result the listener could guess, and “Frankly” introduces a blunt personal feeling, not a fact about interviews.' },

    { id: 't2l3ck-4', type: 'gap', tag: 'dm-stance', level: 'C1+', lines: T2_L_WEBINAR, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['To be honest,', 'Apparently,', 'More often than not,', 'If I’m not mistaken,'], answer: 0,
      hint: 'Is Dr Nattaya reporting what someone told her, or giving her own sincere reaction?',
      why: 'Dr Nattaya gives her own sincere reaction to Ploy’s hobby, so <em>To be honest</em> fits: it introduces a real personal feeling. “Apparently” would mean someone else told her the hobby is memorable, but she has only just heard about it. “If I’m not mistaken” adds doubt about a fact, and “More often than not” (usually) cannot describe one hobby.' },

    { id: 't2l3ck-5', type: 'gap', tag: 'dm-meta', level: 'C1+', lines: T2_L_WEBINAR, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['Spelling it out', 'Making an analogy', 'Going off on a tangent', 'Getting back to the point'], answer: 2,
      hint: 'The previous sentence warns against talking about “something unrelated”. What is that habit called?',
      why: 'Talking “for five minutes about something unrelated” is <em>going off on a tangent</em>, and this sentence names it as the habit that loses an interviewer. “Getting back to the point” is the opposite, and it would keep the interviewer’s attention. “Spelling it out” (saying something plainly) and “making an analogy” (comparing) are good habits, not the mistake she is warning about.' },

    { id: 't2l3ck-6', type: 'gap', tag: 'dm-frame', level: 'C1+', lines: T2_L_WEBINAR, blank: '(6)',
      stem: 'Choose the best option for blank (6).',
      options: ['In that case,', 'Before I forget,', 'Speaking of which,', 'Without further ado,'], answer: 0,
      hint: 'Dr Nattaya has just given Ploy surprising news. How does Ploy change her plan because of it?',
      why: 'Ploy reacts to the surprising information that this is the Veterinary Science webinar and changes her plan because of it: <em>In that case</em>, she will stay. “Before I forget” and “Speaking of which” open a side topic, but Ploy is responding directly to the news. “Without further ado” starts the main event after an introduction, which is not what Ploy is doing.' }
  ] }
});

TOPICS.push(T2);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'id-reaction': {
    name: 'Reaction idioms',
    principle: 'A reaction idiom is a move: listen, agree, join, refuse, worry or keep a secret. Name the move from the lines before and after the blank; ignore the word the options share.',
    reteach: 'Put four “ear” idioms on the board (I’m all ears / lend me your ear / I’m up to my ears / my ears are ringing) and ask students to translate each into plain English before any context appears. Then read a two-line dialogue and ask which translation fits BOTH neighbouring lines. Repeat with “count me in/out”, “tell me about it” and “my lips are sealed”, always forcing the plain-English translation first. Finish by showing that “Tell me about it” after a complaint is agreement, not a request.',
    activities: [
      'Sticker reply: read out a message (“I passed!”, “Don’t tell anyone…”, “Karaoke tonight?”); pairs hold up the reaction idiom card that fits in five seconds.',
      'Family line-up: give groups four idioms sharing one word (ear, count, eye) and have them act out each meaning while the class guesses the plain-English job.'
    ]
  },
  'id-situation': {
    name: 'Situation idioms',
    principle: 'Say what is happening in plain English first (no plan yet, a limit, a sudden surprise, a great result), then find the idiom that labels it. Distractors usually come from the same colour, weather, food or sports family.',
    reteach: 'Teach situation idioms in families on a four-column board: colour, weather/food, sports, paths/lines. For each, give the plain-English label and one TCAS-style sentence. Then give short scenes (“They don’t know if it will rain, so…”) and have students write the label BEFORE seeing options. Spend extra time on the pairs play it by ear / go with the flow and out of the blue / once in a blue moon, and on the grammar hook “draw the line at + -ing”.',
    activities: [
      'Hashtag the scene: show a photo or read a mini-scene; groups race to write the idiom hashtag (#getcoldfeet, #breaktheice) and justify it.',
      'Family elimination: give one scene and four idioms from the same family; students cross out three and explain each crossing-out in one sentence.'
    ]
  },
  'id-proverb': {
    name: 'Proverbs & sayings',
    principle: 'A proverb sums up the shape of the whole story: pile-up, bad-turns-good, effort-pays, words-vs-actions. Mark each event + or −, name the shape, and distrust the option that only repeats a picture from the story.',
    reteach: 'Tell a short story (three bad events in one morning) and have students mark each event + or − on mini-whiteboards. Show the shape (− − −) and match it to “When it rains, it pours”. Then change the ending so something good happens and show how the proverb must change to “Every cloud has a silver lining”. Put the literal trap on the board (“It’s raining cats and dogs” in a rainy story) and ask why it describes weather, not the lesson.',
    activities: [
      'Shape cards: each group gets a proverb card and a set of story strips; they build a three-line story whose shape fits their proverb, and the class guesses the proverb.',
      'Movie-poster review: students pick a film or K-drama they know and write the proverb that would be its one-line review.'
    ]
  },
  'dm-add': {
    name: 'Adding & intensifying markers',
    principle: 'Adding markers keep the same direction, but ask what kind of extra follows: neutral (on top of that), worse (to make matters worse), predictable (needless to say) or surprising (as a matter of fact).',
    reteach: 'Draw a road with four lanes going the same way and label them neutral, worse, obvious, surprise. Read pairs of sentences and have students point to the lane. Contrast “Needless to say” and “As a matter of fact” directly by asking “Could the listener have guessed this?”. Add the grammar note: “let alone” only after a negative, and it adds something bigger.',
    activities: [
      'Bad-day chain: in a circle, each student adds one sentence to a disaster story, starting with “To make matters worse,”; then switch to “Needless to say,” for the obvious consequences.',
      'Guess-or-surprise: read a first sentence and a second; students shout “Needless to say!” if the second was guessable, or “As a matter of fact!” if it was a surprise.'
    ]
  },
  'dm-contrast': {
    name: 'Contrasting & conceding in talk',
    principle: 'Check that there is a real turn by putting “but” in the blank. Then choose the kind of turn: two sides (on the other hand), my point + exception (having said that / mind you), despite a problem (even so), whatever happens (at any rate).',
    reteach: 'Start with the “but test”: give five sentence pairs, two of which do not actually contrast, and let students discover that no contrast marker fits those two. Then use four gestures (two hands, one raised finger, pushing a wall, brushing crumbs) for the four kinds of turn and practise with mini-dialogues. Highlight that “Mind you” does not cancel the first statement; it only limits it.',
    activities: [
      'Gesture drill: the teacher reads a two-sentence exchange; students show the gesture for the right kind of turn before saying the marker aloud.',
      'Review remix: groups take a positive product review and add one limit with “Having said that” and one afterthought with “Mind you”, then read it in a TV-shopping voice.'
    ]
  },
  'dm-rephrase': {
    name: 'Rephrasing & concluding markers',
    principle: 'Same idea in new words = in other words. Short summary = in a nutshell. Verdict after weighing = all things considered. What matters most = at the end of the day. A rephrase never adds new information.',
    reteach: 'Write one long, messy explanation on the board. Ask one group to rephrase it (“In other words…”), one to shrink it to a single line (“In a nutshell…”) and one to give a verdict (“All things considered…”). Compare the three outputs to show the three different jobs. Then show the trap: a second sentence with NEW information after “In other words”, and ask students to find what is new.',
    activities: [
      'Subtitle, recap, rating: students watch a 60-second clip and produce three lines, one per marker family.',
      'New-info detector: give pairs of sentences joined by “In other words”; students circle any new information and fix the marker when they find some.'
    ]
  },
  'dm-frame': {
    name: 'Opening & framing markers',
    principle: 'Check the grammar after the blank first (full clause + main clause needs a conjunction such as now that / as long as), then the job: start (without further ado), side topic (by the way, speaking of), react to news (in that case), fact now true (now that).',
    reteach: 'Split the board into “joins two clauses” (now that, as long as) and “starts a sentence” (in that case, otherwise, by the way, without further ado). Give gapped sentences and have students decide the column from the grammar alone. Then separate the pairs by meaning: now that (a fact) vs as long as (a condition); in that case (reacting to the other speaker) vs by the way (a new topic). Role-play an MC opening a school event.',
    activities: [
      'MC challenge: students take turns opening a mock school event in 20 seconds and must use “Without further ado” at the right moment.',
      'Fact or condition: read clauses aloud (“the rain has stopped”, “you return it tomorrow”); students answer “Now that!” or “As long as!”.'
    ]
  },
  'dm-stance': {
    name: 'Hedging & stance markers',
    principle: 'Mark the speaker’s certainty and source from the rest of the line: limited knowledge (as far as I know), heard it (apparently), polite doubt (if I’m not mistaken), real feeling (to be honest), guessable feeling (as you can imagine).',
    reteach: 'Draw phone signal bars and place markers on them: obviously (full bars), as far as I know (two bars), apparently (a friend’s hotspot). Give dialogue lines with clues such as “check to be sure”, “nobody told me directly” or a tag question, and ask students to label the certainty before choosing a marker. Contrast “as far as I know” with “as far as I’m concerned” and “apparently” with “obviously”.',
    activities: [
      'Rumour relay: pass a piece of class news down a line; each student must begin with a stance marker that honestly shows how they got it.',
      'Signal-bar sort: groups place ten markers on a certainty scale and defend any disagreements.'
    ]
  },
  'dm-meta': {
    name: 'Lecture & argument talk',
    principle: 'Read the line after the blank and name the thinking move: compare with “like” (to make an analogy), example (to illustrate), show a difference (to make a distinction), say it plainly (to spell it out), leave the topic (to go off on a tangent).',
    reteach: 'Give a mini-lecture on any topic and deliberately use each meta-marker, pausing after it for students to predict what the next sentence will do. Then run the reverse: read the next sentence only and ask students to name the marker. Spend time on analogy vs distinction (alike vs different) and on the TCAS trap where meta-markers are distractors for a simple story continuation.',
    activities: [
      'Commentator game: one student starts a sentence with a meta-marker; a partner must continue with the matching move within five seconds.',
      'Tangent buzzer: during a one-minute talk, the class buzzes when the speaker goes off on a tangent, and the speaker must return with “To get back to the point…”.'
    ]
  }
});
