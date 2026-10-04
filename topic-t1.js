/* ===========================================================================
   TCAS70 — SYSTEM 01 · Conversation Code  (topic-t1.js)
   Section I, items 1–20: three short conversations (4 blanks each) and one
   long conversation (8 blanks) that ends with a comic twist.
   Core technique: READ THE LINE AFTER THE BLANK. Match its function
   (question → answer, apology → acceptance), polarity (yes/no), tone and
   relationship; delete options that are grammatical but pragmatically wrong.
   =========================================================================== */

/* ------------------------------------------------------ shared dialogues */
var T1_L_SCHOL = [
  { who: 'Situation', text: 'Two friends in the school canteen' },
  { who: 'Ploy', text: 'Guess what? I got the scholarship to study in Japan next year!' },
  { who: 'Nan', text: '___(1)___ When did you find out?' },
  { who: 'Ploy', text: 'This morning. The email arrived in the middle of maths, and I nearly screamed.' },
  { who: 'Nan', text: 'I bet! But wait, doesn\'t that mean you\'ll miss our graduation trip to Chiang Mai?' },
  { who: 'Ploy', text: 'Unfortunately, yes. The programme starts in May.' },
  { who: 'Nan', text: '___(2)___ We\'ve been planning that trip for ages.' },
  { who: 'Ploy', text: 'I know. But I\'ll send you a postcard from Kyoto every single week.' },
  { who: 'Nan', text: '___(3)___' },
  { who: 'Ploy', text: 'Deal. One box a month, I promise.' }
];

var T1_L_FLOOD = [
  { who: 'Situation', text: 'A video call between two cousins' },
  { who: 'Krit', text: 'Mint, guess what? Tomorrow\'s swimming test has been postponed because of the flood warning.' },
  { who: 'Mint', text: '___(4)___ You\'ve been dreading that test all week.' },
  { who: 'Krit', text: 'Exactly. Now I\'ve got two more weeks to practise.' },
  { who: 'Mint', text: 'But wait, isn\'t your street one of the ones near the canal?' },
  { who: 'Krit', text: 'Yes, it is, but the city reinforced the flood barriers yesterday, so we\'re fine for now.' },
  { who: 'Mint', text: 'Thank goodness. Let me know if you need to stay at our place.' },
  { who: 'Krit', text: 'Thanks, I will. Mum\'s already packed a bag, just in case.' }
];

var T1_L_DEBATE = [
  { who: 'Situation', text: 'Two classmates after debate club practice' },
  { who: 'Fah', text: 'That motion was impossible: "Schools should ban phones completely." How do you even argue against that?' },
  { who: 'Bow', text: '___(1)___ I had nothing to say in my rebuttal.' },
  { who: 'Fah', text: 'And honestly, I don\'t think a total ban would even work.' },
  { who: 'Bow', text: '___(2)___ Students would just hide their phones in their bags.' },
  { who: 'Fah', text: 'Mind you, a ban during exams makes sense.' },
  { who: 'Bow', text: '___(3)___ But for the whole school day? That\'s too much.' },
  { who: 'Fah', text: '___(4)___ Next time, that\'s our line: yes to exams, no to a total ban.' },
  { who: 'Bow', text: 'Deal. Now let\'s get some mango sticky rice before the canteen closes.' }
];

var T1_L_LIB = [
  { who: 'Situation', text: 'At the university library help desk' },
  { who: 'Oat', text: 'Excuse me. Do you have "The Science of Sleep" by Dr Pimchanok Wattanasiri?' },
  { who: 'Librarian', text: 'Let me check... I\'m afraid all three copies are out on loan at the moment.' },
  { who: 'Oat', text: '___(1)___' },
  { who: 'Librarian', text: 'Wait, don\'t go yet. You can reserve the next copy. It\'s due back on Friday.' },
  { who: 'Oat', text: 'Oh, that would be great. Thank you so much.' },
  { who: 'Librarian', text: '___(2)___ Just write your student number on this form.' },
  { who: 'Oat', text: '(writing) Here you... oh no! I\'m so sorry. I\'ve knocked your coffee over.' },
  { who: 'Librarian', text: '___(3)___ The cup was nearly empty, and the books are dry.' },
  { who: 'Oat', text: 'Phew. Let me at least get you some tissues.' }
];

var T1_L_BDAY = [
  { who: 'Situation', text: 'A video call between two friends' },
  { who: 'Pim', text: 'Hi, Beam! Can you hear me? The Wi-Fi at my grandma\'s house is terrible.' },
  { who: 'Beam', text: 'Loud and clear. Hey, where were you on Saturday? We waited for you.' },
  { who: 'Pim', text: 'I know. I\'m really sorry I missed your party. My phone died, and I couldn\'t find your condo.' },
  { who: 'Beam', text: '___(4)___ We saved you a slice of cake, by the way.' },
  { who: 'Pim', text: 'Really? You\'re the best!' },
  { who: 'Beam', text: 'Come and get it tomorrow, before my brother eats it.' }
];

var T1_L_RESULTS = [
  { who: 'Situation', text: 'Two friends checking exam results on their phones' },
  { who: 'Mint', text: 'The results are up! Oh my goodness... I passed chemistry!' },
  { who: 'Pun', text: '___(1)___ You revised every single night for that.' },
  { who: 'Mint', text: 'Thanks. What about you? Have you checked yours?' },
  { who: 'Pun', text: 'Yeah... I failed physics. Again.' },
  { who: 'Mint', text: '___(2)___' },
  { who: 'Pun', text: 'It\'s OK. There\'s a resit in March. Physics isn\'t really my subject, is it?' },
  { who: 'Mint', text: '___(3)___ But that\'s what the resit is for. I\'ll help you revise.' },
  { who: 'Pun', text: 'Would you? Thanks, Mint. You\'re a lifesaver.' },
  { who: 'Mint', text: '___(4)___ Just bring the snacks.' }
];

var T1_L_CORRIDOR = [
  { who: 'Situation', text: 'In the school corridor' },
  { who: 'Aom', text: 'Oops! Sorry, Ms Kate. I didn\'t see you there.' },
  { who: 'Ms Kate', text: 'No harm done, Aom. Oh, and well done at the debate yesterday. The judges loved your closing speech.' },
  { who: 'Aom', text: '___(5)___' },
  { who: 'Ms Kate', text: 'I mean it. Are you entering the national round in November?' },
  { who: 'Aom', text: 'I\'d love to, but I don\'t want to miss any classes.' },
  { who: 'Ms Kate', text: 'Isn\'t the national round on a Saturday?' },
  { who: 'Aom', text: '___(6)___' },
  { who: 'Ms Kate', text: 'Then you won\'t miss a thing. I\'ll sign your form this afternoon.' }
];

var T1_L_STUDY = [
  { who: 'Situation', text: 'In a university library study room' },
  { who: 'Tee', text: 'Excuse me, would you mind if I sat here? All the other tables are full.' },
  { who: 'Emma', text: '___(1)___ I\'m leaving in about an hour anyway.' },
  { who: 'Tee', text: 'Thanks. Um, could you keep an eye on my laptop while I get a coffee?' },
  { who: 'Emma', text: '___(2)___ But please don\'t be long.' },
  { who: 'Tee', text: 'I won\'t. Shall I get you something while I\'m there?' },
  { who: 'Emma', text: '___(3)___ An iced lemon tea would be lovely.' },
  { who: 'Tee', text: '(later) By the way, a few of us are going to the jazz night at the student union on Friday. Do you want to come?' },
  { who: 'Emma', text: '___(4)___ What time does it start?' },
  { who: 'Tee', text: 'Eight o\'clock. I\'ll message you the details.' }
];

var T1_L_HOTEL = [
  { who: 'Situation', text: 'At a hotel reception desk' },
  { who: 'Guest', text: 'Good evening. I\'m in Room 512, and I\'m afraid there\'s a problem with the air conditioning.' },
  { who: 'Receptionist', text: 'I\'m sorry to hear that. ___(1)___' },
  { who: 'Guest', text: 'It\'s making a loud rattling noise, and the room is still really hot.' },
  { who: 'Receptionist', text: 'I do apologise. ___(2)___ but I can move you to another room right away.' },
  { who: 'Guest', text: 'That would be great. The only thing is, I\'ve already unpacked everything.' },
  { who: 'Receptionist', text: 'No problem at all. ___(3)___' },
  { who: 'Guest', text: 'Oh, thank you. That\'s very helpful.' },
  { who: 'Receptionist', text: 'And please accept a complimentary breakfast tomorrow for the inconvenience.' },
  { who: 'Guest', text: '___(4)___' },
  { who: 'Receptionist', text: 'You\'re welcome. Enjoy the rest of your stay.' }
];

var T1_L_EXAM = [
  { who: 'Situation', text: 'Two friends, two weeks before the A-Level exam' },
  { who: 'Mint', text: 'The exam is in two weeks, and I still can\'t finish the reading section on time.' },
  { who: 'Fah', text: '___(1)___' },
  { who: 'Mint', text: 'Every night? That sounds exhausting, but I suppose it\'s worth a try.' },
  { who: 'Fah', text: 'And one more thing: ___(2)___ Don\'t spend five minutes on one question.' },
  { who: 'Mint', text: 'Good point. Last time I ran out of time on the visuals.' },
  { who: 'Fah', text: 'So skip anything hard, circle it, and come back to it at the end.' },
  { who: 'Mint', text: 'What about the night before? Should I stay up late and revise everything?' },
  { who: 'Fah', text: '___(3)___ You need at least seven hours of sleep before a big exam.' },
  { who: 'Mint', text: 'OK, OK. Thank you, Doctor Fah.' }
];

var T1_L_DELIVERY = [
  { who: 'Situation', text: 'On the phone with a food delivery app\'s customer service' },
  { who: 'Agent', text: 'Thank you for calling FoodGo. How can I help you today?' },
  { who: 'Nan', text: 'Hi. ___(1)___ My lunch arrived twenty minutes ago, but the som tam is missing.' },
  { who: 'Agent', text: 'I\'m very sorry about that. Would you mind giving me your order number?' },
  { who: 'Nan', text: '___(2)___ It\'s FG-2047.' },
  { who: 'Agent', text: 'Thank you. I can see the problem. ___(3)___' },
  { who: 'Nan', text: 'A refund, please. It\'s too late for lunch now.' },
  { who: 'Agent', text: 'Of course. The money will be back in your account within 24 hours. ___(4)___' },
  { who: 'Nan', text: 'Oh, that\'s kind of you. Thanks for sorting it out so quickly.' }
];

var T1_L_ANKLE = [
  { who: 'Situation', text: 'Two friends at a bubble tea shop' },
  { who: 'Krit', text: 'I think I twisted my ankle at football practice. It\'s really swollen. Should I still play in Saturday\'s final?' },
  { who: 'Pun', text: '___(5)___' },
  { who: 'Krit', text: 'That\'s what the coach said, too. OK, I\'ll go to the clinic this afternoon.' },
  { who: 'Pun', text: 'Good. Better safe than sorry.' },
  { who: 'Krit', text: 'Hey, could you come with me? I hate clinics.' },
  { who: 'Pun', text: '___(6)___' },
  { who: 'Krit', text: 'No worries. I\'ll ask Mint instead. She loves anything medical.' }
];

var T1_L_REPAIR = [
  { who: 'Situation', text: 'At a phone repair shop' },
  { who: 'Staff', text: 'Hi there. ___(1)___' },
  { who: 'Beam', text: 'I dropped my phone in a puddle during the floods, and now the screen won\'t turn on.' },
  { who: 'Staff', text: 'Oh dear. ___(2)___' },
  { who: 'Beam', text: 'About two days ago. I put it in a bag of rice, but nothing happened.' },
  { who: 'Staff', text: 'Rice doesn\'t really work, I\'m afraid. ___(3)___' },
  { who: 'Beam', text: 'Yes, I do. It\'s under my student ID number.' },
  { who: 'Staff', text: 'Great. Then the repair is free. It\'ll take about three days.' },
  { who: 'Beam', text: '___(4)___' },
  { who: 'Staff', text: 'I\'m afraid not. We have to send it to our main service centre in Bang Na.' }
];

var T1_L_PROF = [
  { who: 'Situation', text: 'After a university lecture' },
  { who: 'Ploy', text: 'Excuse me, Professor Wattana. ___(1)___' },
  { who: 'Prof. Wattana', text: 'Of course. What\'s on your mind?' },
  { who: 'Ploy', text: 'I missed the part about the reading list. ___(2)___' },
  {
    who: 'Prof. Wattana',
    text: 'Certainly. I\'ll post it on the course page this evening. By the way, you\'re the student who asked about AI and plagiarism last week, aren\'t you?'
  },
  { who: 'Ploy', text: '___(3)___ I hope it wasn\'t a silly question.' },
  { who: 'Prof. Wattana', text: 'Not at all. It was the best question of the week.' },
  { who: 'Ploy', text: '___(4)___' },
  { who: 'Prof. Wattana', text: 'You\'re welcome. See you on Thursday.' }
];

var T1_L_PARTY = [
  { who: 'Situation', text: 'A group video call on Friday night' },
  { who: 'Pun', text: 'OK, is everyone here? I can see Fah, Krit and someone called "Guest 4" with the camera off.' },
  { who: 'Fah', text: 'Probably Krit\'s little brother again. Anyway, ___(1)___ Mint\'s birthday is on Monday, so we don\'t have much time.' },
  { who: 'Krit', text: 'Right. The plan is a surprise party at Cha Cha Café after class on Monday.' },
  { who: 'Pun', text: '___(2)___ Mint notices everything. Last year she guessed her present from the shape of the box.' },
  { who: 'Fah', text: 'Relax. I\'ve told her we\'re doing a boring revision session on Monday, so she has no idea.' },
  { who: 'Krit', text: 'And I\'ll bring the cake: mango sticky rice flavour, her favourite. ___(3)___' },
  { who: 'Pun', text: 'Leave that to me. I\'m editing a video of her funniest moments.' },
  { who: 'Fah', text: 'Nothing embarrassing, OK? Like the time she fell asleep in the library and snored.' },
  { who: 'Pun', text: 'Too late. That\'s the best part!' },
  { who: 'Guest 4', text: '(unmuting) For the record, I do NOT snore.' },
  { who: 'Pun', text: '___(4)___ Krit, is your brother doing impressions now?' },
  { who: 'Guest 4', text: '(turning on the camera) Hi, everyone. It\'s me, Mint. My phone\'s broken, so I\'m on Mum\'s iPad. So... should I act surprised on Monday?' },
  { who: 'Krit', text: '___(5)___' },
  { who: 'Fah', text: 'Krit! Did you send the link to your family group chat again?' }
];

var T1_L_SINGER = [
  { who: 'Situation', text: 'At a restaurant with live music' },
  { who: 'Customer', text: 'Excuse me. ___(1)___' },
  { who: 'Manager', text: 'I\'m the manager tonight, sir. How can I help?' },
  { who: 'Customer', text: 'It\'s about the singer. ___(2)___ I can\'t even hear my wife across the table.' },
  { who: 'Manager', text: '___(3)___ He\'s new, and I\'m afraid he gets a bit excited when there\'s a full house.' },
  { who: 'Customer', text: 'New? I\'m not surprised. He\'s singing every song in the wrong key, and he keeps waving at a table of university students by the door.' },
  { who: 'Manager', text: 'I\'ll have a word with him at the break. ___(4)___' },
  { who: 'Customer', text: 'That\'s kind, but what I\'d really like is some peace and quiet. By the way, what\'s the singer\'s name?' },
  { who: 'Manager', text: 'It\'s Tee. Tee Wongsakul. He\'s an engineering student, and he sings here at weekends.' },
  { who: 'Customer', text: 'Wongsakul? ___(5)___ He told his mother and me he\'d be at the library tonight.' },
  { who: 'Manager', text: 'Oh dear. Shall I ask him to come to your table?' },
  { who: 'Customer', text: '___(6)___ Look, he\'s already seen us, and he\'s walking over here looking terrified.' }
];

var T1 = {
  id: 't1', n: 1, code: 'System 01', art: 'chat',
  name: 'Conversation Code',
  cefr: 'B1+–C1',
  blurb: 'Section I, items 1–20: every blank is one turn in a conversation. Read the line after the blank, match its function, polarity, tone and relationship, and let the story tell you the answer — right up to the twist.',
  levels: []
};

/* ============================================================ LEVEL 1 */
T1.levels.push({
  id: 't1l1',
  n: 1,
  name: 'Everyday reactions',
  cefr: 'B1+–B2',
  blurb: 'News, opinions, thanks and apologies: each one opens a door, and only one kind of reply walks through it.',
  subs: [
    {
      id: 't1l1s1',
      name: 'Reacting to news',
      cefr: 'B1+',
      tag: 'cv-react',
      theory: {
        key: 'Before you react, weigh the news: <strong>good</strong> (Congratulations!), <strong>bad</strong> (I\'m so sorry to hear that), <strong>surprising</strong> (You\'re kidding!) or <strong>a weight lifted</strong> (What a relief!) — then check the line after the blank to confirm the feeling.',
        body: [
          'A reaction is a mirror: it shows the other person that you felt what they felt. So every piece of news has an <strong>emotional value</strong>, and English has a ready-made family of phrases for each value. <em>Good news</em> → Congratulations! / That\'s fantastic! / Well done! / You deserve it. <em>Bad news</em> → I\'m so sorry to hear that. / What a shame. / That\'s a pity. / Poor you. <em>Surprising news</em> → You\'re kidding! / No way! / Really? / Are you serious? <em>Relief</em> (a worry has gone) → What a relief! / Thank goodness. / Phew!',
          '<strong>Timing and size matter too.</strong> <em>Good luck</em> goes <em>before</em> an event; <em>Congratulations</em> and <em>Well done</em> go <em>after</em> a success; <em>Better luck next time</em> goes after a failure. Size the reaction to the news: <em>What a shame</em> suits a cancelled trip, but a break-up or an illness needs <em>I\'m so sorry to hear that</em>. And remember that <em>I\'m sorry to hear that</em> is sympathy, not an apology: you are not saying it was your fault.',
          '<strong>How TCAS tests it.</strong> In TCAS68 a K-pop fan tells her friend that a singer has got married to a boy-band member. The friend replies ___ and then says “I thought she was living in the US with that famous football player.” Students who see the word <em>married</em> grab <em>Congratulations!</em>, but the next line shows <strong>disbelief</strong>, so the reaction must be surprise: <em>You\'re kidding!</em>. In the long conversation of the same paper, a friend hears about a break-up and answers “Oh, I\'m so sorry to hear that.” The news decides the family; the next line proves it.',
          '<strong>The procedure.</strong> Step 1: label the news (good / bad / surprising / relief). Step 2: read the line after the blank. Does the speaker continue in joy, disbelief or sadness? Step 3: check timing (before or after?) and size (small or serious?). Step 4: delete options from the wrong family, even if they are perfect English.'
        ],
        simple: [
          'When a friend tells you news, first ask: is it good, bad, surprising, or a relief?',
          'Good → Congratulations! Bad → I\'m sorry to hear that. Surprising → You\'re kidding! Relief → What a relief!',
          '“Good luck” is for before something. “Congratulations” is for after a success.'
        ],
        thai: 'การแสดงปฏิกิริยาต่อข่าว ต้องดู “ค่าอารมณ์” ของข่าวก่อน ข่าวดีใช้ Congratulations! / That\'s great news! ข่าวร้ายใช้ I\'m sorry to hear that. / What a shame. ข่าวน่าตกใจใช้ You\'re kidding! / Really? และข่าวที่ทำให้โล่งใจใช้ What a relief! นอกจากนี้ต้องดูจังหวะเวลา Good luck ใช้ก่อนเหตุการณ์ ส่วน Congratulations ใช้หลังประสบความสำเร็จแล้ว กับดักคือการเลือกตามคำในข่าว (เช่น ได้ยิน married แล้วเลือก Congratulations) ทั้งที่บรรทัดถัดไปแสดงว่าผู้พูด “ไม่เชื่อ” ข่าวนั้น',
        examples: [
          { s: '“I got into Chula Medicine!” — “<strong>Congratulations! You deserve it.</strong>”', g: 'Good news, after the result → congratulate.' },
          { s: '“My grandma is in hospital.” — “<strong>Oh no, I\'m so sorry to hear that.</strong>”', g: 'Serious bad news → full sympathy, not “What a pity”.' },
          { s: '“Our teacher is a famous TikToker.” — “<strong>You\'re kidding!</strong> Since when?”', g: 'Surprise; the follow-up question shows disbelief.' },
          { s: '“The test is postponed.” — “<strong>What a relief!</strong> I haven\'t finished revising.”', g: 'A worry has disappeared → relief.' },
          { s: '“My audition is tomorrow.” — “<strong>Good luck!</strong>”', g: 'Before the event → wish luck, not congratulations.' }
        ],
        trap: 'TCAS plants a “keyword magnet”: the news contains <em>married</em>, <em>won</em> or <em>passed</em>, so <em>Congratulations!</em> looks perfect — but the next line shows the listener doesn\'t believe it, or the news was actually bad for the speaker. Dodge: label the feeling from the <em>next line</em>, not from one word in the news.',
        analogy: {
          title: 'The reaction buttons',
          text: 'Under every message in a group chat there are reaction buttons: a heart, a sad face, a shocked face, a thumbs-up. Nobody sends a laughing face to “my cat is sick”. The four options in a TCAS reaction item are four buttons; the news tells you which one to press, and the next line shows whether you pressed the right one.'
        },
        map: {
          center: 'Reacting to news',
          branches: [
            {
              label: 'Good news',
              leaves: ['Congratulations!', 'Well done! You deserve it.', 'That\'s fantastic!']
            },
            {
              label: 'Bad news',
              leaves: ['I\'m so sorry to hear that.', 'What a shame / pity.', 'Poor you.']
            },
            {
              label: 'Surprise',
              leaves: ['You\'re kidding!', 'No way!', 'Are you serious?']
            },
            {
              label: 'Relief',
              leaves: ['What a relief!', 'Thank goodness.', 'Phew!']
            },
            {
              label: 'Timing',
              leaves: ['Good luck = before', 'Congratulations = after success', 'Better luck next time = after failure']
            }
          ]
        },
        chant: {
          title: 'Weigh the News',
          beat: 'clap-clap-snap (4/4)',
          lines: [
            'Good news? Cheer it — “Congratulations!”',
            'Bad news? Soften — “Sorry, that\'s tough.”',
            'Shocking news? Question it — “You\'re kidding? Really?”',
            'Worry gone? Breathe out — “Phew, what a relief!”',
            'Luck goes before, and congrats come after,',
            'Sorry-to-hear is care, not blame.',
            'Weigh the news, then read the next line:',
            'The feeling that follows will name the game!'
          ]
        }
      },
      items: [
        {
          id: 't1l1s1-1',
          type: 'gap',
          tag: 'cv-react',
          level: 'B1+',
          lines: T1_L_SCHOL,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['What a relief!', 'Oh no, what a shame!', 'Better luck next time!', 'Congratulations! That\'s amazing!'],
          answer: 3,
          hint: 'Is Ploy\'s news good, bad or a relief? And has it already happened?',
          why: 'Ploy has won a scholarship, which is good news that has already happened, so Nan congratulates her: <em>Congratulations! That\'s amazing!</em> “What a relief!” needs a worry that has disappeared, and nobody was worried. “What a shame” and “Better luck next time” are for bad news or a failure.'
        },
        {
          id: 't1l1s1-2',
          type: 'gap',
          tag: 'cv-react',
          level: 'B1+',
          lines: T1_L_SCHOL,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Lucky you!', 'What a pity!', 'What a relief!', 'Congratulations again!'],
          answer: 1,
          hint: 'Read the sentence right after the gap. Is Nan happy about missing the trip?',
          why: 'Nan has just learned that Ploy will miss the trip they planned “for ages”, a small disappointment, so <em>What a pity!</em> fits. “Lucky you!” and “Congratulations again!” celebrate, which clashes with Nan\'s sad follow-up. “What a relief!” would mean Nan is glad Ploy won\'t come.'
        },
        {
          id: 't1l1s1-3',
          type: 'gap',
          tag: 'cv-react',
          level: 'B2',
          lines: T1_L_SCHOL,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: [
            'Don\'t mention it.',
            'Only with matcha KitKats!',
            'I\'m sorry to hear that, Ploy.',
            'Thanks, but I don\'t collect postcards anymore.'
          ],
          answer: 1,
          hint: 'Ploy answers “Deal. One box a month.” What must Nan have asked for?',
          why: '“Deal” accepts a condition, and “one box a month” shows Nan asked for something that comes in boxes: <em>Only with matcha KitKats!</em> (a playful “I\'ll accept your postcards if you send snacks too”). “Thanks, but I don\'t collect postcards” refuses the offer, so “Deal” makes no sense after it. “Don\'t mention it” answers thanks, and “I\'m sorry to hear that” treats a kind promise as bad news.'
        },
        {
          id: 't1l1s1-4',
          type: 'gap',
          tag: 'cv-react',
          level: 'B1+',
          lines: T1_L_FLOOD,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Oh, what a pity!', 'Congratulations!', 'That must be a relief!', 'Did you pass it easily?'],
          answer: 2,
          hint: 'Krit has been “dreading” the test. How does he feel now that it has moved?',
          why: 'Krit was afraid of the test and now has two more weeks, so a worry has been lifted: <em>That must be a relief!</em>. “Congratulations!” is for an achievement, and a postponed test is not one. “Did you pass it easily?” ignores the fact that the test has not happened, and “What a pity!” treats good news as bad.'
        },
        {
          id: 't1l1s1-5',
          type: 'sort',
          tag: 'cv-react',
          level: 'B1+',
          stem: 'Your friend has just told you some news. What kind of reaction is each reply?',
          bins: [
            { key: 'good', label: 'Good news', hint: 'celebrate' },
            { key: 'bad', label: 'Bad news', hint: 'sympathise' },
            { key: 'surp', label: 'Surprise', hint: 'can\'t believe it' },
            { key: 'rel', label: 'Relief', hint: 'a worry has gone' }
          ],
          items: [
            { text: 'That\'s fantastic news!', bin: 'good' },
            { text: 'Well done! You deserve it.', bin: 'good' },
            { text: 'Oh no, I\'m so sorry to hear that.', bin: 'bad' },
            { text: 'What a shame.', bin: 'bad' },
            { text: 'You\'re kidding!', bin: 'surp' },
            { text: 'No way! Are you serious?', bin: 'surp' },
            { text: 'Phew, what a relief!', bin: 'rel' },
            { text: 'Thank goodness for that.', bin: 'rel' }
          ],
          hint: 'Ask how the listener feels: happy for you, sad for you, shocked, or calmer than before.',
          why: 'Celebration phrases (fantastic, well done) answer good news; sympathy phrases (so sorry, what a shame) answer bad news; disbelief phrases (You\'re kidding, No way) answer surprising news; and relief phrases (Phew, Thank goodness) show that a worry has disappeared.'
        }
      ]
    },
    {
      id: 't1l1s2',
      name: 'Agreeing, disagreeing & softening',
      cefr: 'B2',
      tag: 'cv-agree',
      theory: {
        key: 'Agreement is a volume dial, not a switch — <em>You can say that again</em> → <em>I suppose so</em> → <em>I see your point, but…</em> → <em>I\'m afraid I disagree</em> — and to agree with a <strong>negative</strong> you say <strong>Neither do I</strong>, never <em>So do I</em>.',
        body: [
          '<strong>The dial.</strong> Full agreement: <em>Absolutely. / Exactly. / You can say that again. / Tell me about it. / I couldn\'t agree more.</em> (Careful: <em>couldn\'t agree more</em> is the <em>strongest</em> yes, not a no.) Partial agreement: <em>I suppose so. / Fair enough. / That\'s true, but… / I see what you mean, but…</em> Polite disagreement: <em>I\'m not so sure. / I\'m afraid I don\'t agree. / Speak for yourself.</em> Blunt disagreement: <em>No way! / That\'s nonsense.</em> (fine between close friends, rude to a teacher).',
          '<strong>Polarity: the reply must mirror the sentence.</strong> Agreeing with a positive: “I love K-dramas.” — “<em>So do I / Me too.</em>” Agreeing with a negative: “I don\'t like horror films.” — “<em>Neither do I / Me neither / Nor do I.</em>” Disagreeing flips it: “Oh, I do!” / “Really? I don\'t.” With <strong>negative questions and tags</strong>, English answers the <em>fact</em>, not the question: “Isn\'t the test on Friday?” — “<em>Yes, it is</em>” (it IS on Friday). Thai answers the question (“ไม่ใช่”, meaning “your idea is wrong”), which is why Thai students choose the wrong one.',
          '<strong>How TCAS tests it.</strong> The line after the blank reveals the dial position. If it starts with <em>But…</em>, the blank usually agreed only partly (“Fair enough. <em>But</em> for the whole day?”). If the next speaker keeps arguing, the blank disagreed. In TCAS67 two friends at a restaurant entrance: one says “OK, forget it. We\'ll try another place.” The other replies ___, and the first answers “<em>But</em> what if we order something we don\'t like?” That “But” shows the blank <em>pushed back</em> (“No, no. Be brave…”); the tempting option that agrees (“Agreed. We might end up getting something we can\'t eat”) is perfect English and completely wrong.'
        ],
        simple: [
          'Agreement can be strong (Absolutely!), half (I suppose so, but…) or polite no (I\'m not so sure).',
          'If your friend says something negative (“I don\'t like it”), agree with “Neither do I” or “Me neither”.',
          'For “Isn\'t it on Friday?” say “Yes, it is” if it IS on Friday.'
        ],
        thai: 'การเห็นด้วยและไม่เห็นด้วยมีหลายระดับ ตั้งแต่ Absolutely! / You can say that again (เห็นด้วยเต็มที่) ไปจนถึง I suppose so / I see your point, but… (เห็นด้วยบางส่วน) และ I\'m afraid I disagree (ไม่เห็นด้วยอย่างสุภาพ) ถ้าอีกฝ่ายพูดประโยคปฏิเสธ เช่น I don\'t like horror films. ต้องตอบว่า Neither do I / Me neither ไม่ใช่ So do I ส่วนคำถามปฏิเสธ เช่น Isn\'t it on Saturday? ภาษาอังกฤษตอบตามข้อเท็จจริง ถ้าจัดวันเสาร์จริงให้ตอบ Yes, it is. ไม่ใช่ตอบตามความคิดแบบไทยว่า “ไม่ใช่” กับดักสำคัญคือคำว่า But ในบรรทัดถัดไป ซึ่งมักบอกว่าช่องว่างเป็นการเห็นด้วยเพียงบางส่วนหรือเป็นการแย้ง',
        examples: [
          { s: '“This homework is endless.” — “<strong>You can say that again.</strong>”', g: 'Full-volume agreement (I agree so much you could repeat it).' },
          { s: '“I don\'t trust that website.” — “<strong>Neither do I.</strong>”', g: 'Agreeing with a negative → neither / nor / me neither.' },
          { s: '“Exams are useful.” — “<strong>I suppose so.</strong> But not every week!”', g: 'Partial agreement, then “But”.' },
          { s: '“Isn\'t the café closed on Mondays?” — “<strong>Yes, it is.</strong> Let\'s go on Tuesday.”', g: 'Negative question → answer the fact: it IS closed.' },
          { s: '“The quiz was easy.” — “<strong>Speak for yourself!</strong> I got 3 out of 10.”', g: 'Polite-humorous disagreement: that\'s true for you, not me.' }
        ],
        trap: 'The polarity trap: after a negative (“I don\'t think it would work”), <em>So do I</em> looks like agreement but actually agrees with a positive sentence nobody said. Dodge: check whether the first speaker\'s verb is negative; if it is, only <em>Neither / Nor / Me neither</em> agree. And with negative questions, answer the fact, not the grammar.',
        analogy: {
          title: 'The volume slider',
          text: 'Think of a speaker\'s volume slider. At 10: <em>You can say that again!</em> At 6: <em>I suppose so.</em> At 3: <em>I see your point, but…</em> At 0: <em>I\'m afraid I disagree.</em> The next line in the dialogue is the song that plays after your choice: if it sounds quiet and hesitant (“But…”), you set the slider too high.'
        },
        map: {
          center: 'Agree / disagree',
          branches: [
            {
              label: 'Full agreement',
              leaves: ['Absolutely / Exactly', 'You can say that again', 'I couldn\'t agree more']
            },
            {
              label: 'Partial',
              leaves: ['I suppose so', 'Fair enough, but…', 'I see what you mean, but…']
            },
            {
              label: 'Disagreement',
              leaves: ['I\'m not so sure', 'Speak for yourself', 'I\'m afraid I disagree']
            },
            {
              label: 'Polarity',
              leaves: ['+ So do I / Me too', '− Neither do I / Me neither', 'Isn\'t it…? Yes, it is']
            }
          ]
        },
        moves: [
          { move: 'Both thumbs up, arms high', says: 'Volume 10: Absolutely! You can say that again!' },
          { move: 'One thumb sideways, wobble it', says: 'Volume 5: I suppose so… fair enough, but…' },
          { move: 'Palm out, gentle push', says: 'Volume 0, politely: I\'m not so sure / I\'m afraid I disagree' },
          { move: 'Shake head while nodding both fists', says: 'Negative + agree = Neither do I / Me neither' },
          { move: 'Point down at the next line', says: 'The next line shows where the dial was set' }
        ]
      },
      items: [
        {
          id: 't1l1s2-1',
          type: 'gap',
          tag: 'cv-agree',
          level: 'B2',
          lines: T1_L_DEBATE,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['I\'m not so sure.', 'Speak for yourself.', 'You can say that again.', 'Really? I found it quite easy.'],
          answer: 2,
          hint: 'Bow says she “had nothing to say” in her rebuttal. Did she find the motion easy or hard?',
          why: 'Bow also found the motion impossible (“I had nothing to say”), so she agrees strongly: <em>You can say that again.</em> “Speak for yourself” is the near miss: it is an idiom from the same family, but it means “that\'s true for you, not for me”, the opposite of Bow\'s experience. “I\'m not so sure” and “I found it quite easy” also disagree.'
        },
        {
          id: 't1l1s2-2',
          type: 'gap',
          tag: 'cv-agree',
          level: 'B2',
          lines: T1_L_DEBATE,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['I do.', 'So do I.', 'Neither do I.', 'I\'m afraid I disagree.'],
          answer: 2,
          hint: 'Is Fah\'s sentence positive or negative? And does Bow\'s next sentence support Fah?',
          why: 'Fah\'s sentence is negative (“I <strong>don\'t</strong> think a total ban would work”), and Bow supports her with a reason (students would hide their phones). Agreement with a negative needs <em>Neither do I</em>. “So do I” is the polarity trap: it agrees with a positive sentence. “I do” (= I do think it would work) and “I\'m afraid I disagree” say the ban would work, which clashes with Bow\'s reason.'
        },
        {
          id: 't1l1s2-3',
          type: 'gap',
          tag: 'cv-agree',
          level: 'B2',
          lines: T1_L_DEBATE,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Not at all.', 'That\'s nonsense.', 'No, it makes no sense.', 'Fair enough, I suppose.'],
          answer: 3,
          hint: 'Look at the word that starts the sentence after the gap. What does it tell you about the gap?',
          why: 'Bow agrees that an exam ban makes sense, then adds a limit with <strong>But</strong> (“But for the whole school day?”). That pattern needs partial agreement: <em>Fair enough, I suppose.</em> The other three options reject the exam ban completely, so the contrast introduced by “But” would have nothing to contrast with.'
        },
        {
          id: 't1l1s2-4',
          type: 'gap',
          tag: 'cv-agree',
          level: 'B2',
          lines: T1_L_DEBATE,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Exactly!', 'I doubt it.', 'Not necessarily.', 'I\'m not so sure about that.'],
          answer: 0,
          hint: 'Fah then turns Bow\'s idea into “our line” for next time. Is she accepting it or rejecting it?',
          why: 'Fah adopts Bow\'s point as the team\'s new argument (“that\'s our line: yes to exams, no to a total ban”), so she must agree: <em>Exactly!</em> “I doubt it”, “Not necessarily” and “I\'m not so sure about that” all push back, which contradicts her plan to use the idea.'
        },
        {
          id: 't1l1s2-5',
          type: 'sort',
          tag: 'cv-agree',
          level: 'B2',
          stem: 'Your friend says: “I don\'t like horror films.” Sort the replies.',
          bins: [
            { key: 'agree', label: 'Agrees', hint: 'I don\'t like them either' },
            { key: 'dis', label: 'Disagrees', hint: 'I like them' },
            { key: 'bad', label: 'Doesn\'t work as a reply', hint: 'wrong polarity or grammar' }
          ],
          items: [
            { text: 'Neither do I.', bin: 'agree' },
            { text: 'Me neither.', bin: 'agree' },
            { text: 'Nor do I.', bin: 'agree' },
            { text: 'Really? I love them!', bin: 'dis' },
            { text: 'Oh, I do.', bin: 'dis' },
            { text: 'So do I.', bin: 'bad' },
            { text: 'Neither don\'t I.', bin: 'bad' }
          ],
          hint: 'The first sentence is negative. Which short replies mirror a negative?',
          why: 'Agreeing with a negative needs <em>neither</em> or <em>nor</em> with a positive auxiliary (Neither do I / Nor do I / Me neither). “Oh, I do” and “I love them” disagree. “So do I” only works after a positive sentence, and “Neither don\'t I” uses a double negative, so neither works here.'
        }
      ]
    },
    {
      id: 't1l1s3',
      name: 'Thanks, apologies & the right reply',
      cefr: 'B2',
      tag: 'cv-thanks',
      theory: {
        key: 'Every <em>thank you</em> and every <em>sorry</em> has its own family of replies: thanks → <strong>You\'re welcome / My pleasure / Don\'t mention it</strong>; sorry → <strong>Never mind / Don\'t worry about it / No harm done</strong>; someone tried but couldn\'t help → <strong>Thanks anyway</strong>.',
        body: [
          'Some lines in a conversation come in pairs, like a handshake: when one hand goes out, only one kind of hand can meet it. A <strong>thank-you</strong> is answered by making the favour sound small: <em>You\'re welcome. / My pleasure. / Don\'t mention it. / Anytime. / Not at all.</em> An <strong>apology</strong> is answered by making the damage sound small: <em>That\'s OK. / Never mind. / Don\'t worry about it. / No harm done. / These things happen.</em> Two replies fit both: <em>No problem</em> and <em>That\'s all right</em>.',
          '<strong>The confusables TCAS loves.</strong> <em>Don\'t mention it</em> answers thanks only (“don\'t mention your thanks”); said after an apology it sounds like “don\'t talk about your mistake”. <em>Never mind</em> answers an apology, or means “forget it” when you give up (“Never mind, I\'ll ask someone else”). <em>Thanks anyway</em> thanks someone who <em>tried but failed</em> to help; if the help worked, it is wrong. <em>I\'m afraid…</em> has nothing to do with fear: it softens bad news (“I\'m afraid we\'re fully booked”). <em>Excuse me</em> comes <em>before</em> you disturb someone; <em>Sorry</em> comes <em>after</em>.',
          '<strong>How TCAS tests it.</strong> The blank often sits right after a thank-you, an apology or a polite refusal, and all four options are polite formulae from the wrong families. In TCAS69 a restaurant customer ends a complaint with “Thank you for addressing my concerns”, and the waiter answers with thanks of his own (“Thank you for your feedback”). Procedure: Step 1: name the first half of the pair (thanks? apology? polite “no”?). Step 2: choose only from that family. Step 3: check the line after: if the helper keeps helping (“Wait, don\'t go yet…”), your reply must have sounded like goodbye.'
        ],
        simple: [
          'Thank you → You\'re welcome / My pleasure / Don\'t mention it.',
          'Sorry → Never mind / Don\'t worry about it / That\'s OK.',
          'Someone tried to help but couldn\'t → Thanks anyway. “I\'m afraid…” = polite bad news.'
        ],
        thai: 'คำขอบคุณกับคำขอโทษมีคำตอบรับคนละชุด ตอบ Thank you ด้วย You\'re welcome / My pleasure / Don\'t mention it ส่วนตอบ Sorry ด้วย Never mind / Don\'t worry about it / No harm done (No problem กับ That\'s all right ใช้ได้ทั้งสองแบบ) ถ้าอีกฝ่ายพยายามช่วยแต่ช่วยไม่ได้ ให้พูด Thanks anyway และ I\'m afraid… แปลว่า “เสียใจด้วยที่ต้องบอกว่า…” ไม่ได้แปลว่ากลัว กับดักที่ออกบ่อยคือเลือก Don\'t mention it ไปตอบคำขอโทษ ซึ่งเป็นการจับคู่ผิด',
        examples: [
          { s: '“Thanks for lending me your notes.” — “<strong>Don\'t mention it.</strong>”', g: 'Answers thanks: the favour was nothing.' },
          { s: '“Sorry I\'m late.” — “<strong>Don\'t worry about it.</strong> We haven\'t started.”', g: 'Answers an apology: the damage is small.' },
          { s: '“I\'m afraid the blue one is sold out.” — “<strong>Oh well, thanks anyway.</strong>”', g: 'The helper tried and failed.' },
          { s: '“<strong>Excuse me</strong>, is this seat free?”', g: 'Before disturbing someone (not “Sorry”).' },
          { s: '“<strong>I\'m afraid</strong> I can\'t come on Friday.”', g: 'Soft bad news, not fear.' }
        ],
        trap: 'The four options are all polite, so students choose the one that “sounds nicest”. TCAS makes the key depend on the <em>pair</em>: <em>Don\'t mention it</em> after an apology, or <em>Thanks anyway</em> after help that worked, are polite and wrong. Dodge: say the first half of the pair aloud in your head (“Thank you…” or “Sorry…”) and only then look at the options.',
        analogy: {
          title: 'Plugs and sockets',
          text: 'A Thai plug and a UK plug both carry electricity, but only one fits a UK socket. <em>Thank you</em> is one socket shape and <em>Sorry</em> is another. <em>Don\'t mention it</em> is a perfectly good plug; it just doesn\'t fit the apology socket. Check the socket before you pick the plug.'
        },
        map: {
          center: 'Pairs that fit',
          branches: [
            {
              label: 'Thanks →',
              leaves: ['You\'re welcome', 'My pleasure', 'Don\'t mention it', 'Anytime']
            },
            {
              label: 'Sorry →',
              leaves: ['Never mind', 'Don\'t worry about it', 'No harm done']
            },
            {
              label: 'Both',
              leaves: ['No problem', 'That\'s all right']
            },
            {
              label: 'Special cases',
              leaves: ['Tried but failed → Thanks anyway', 'I\'m afraid = soft bad news', 'Excuse me before, Sorry after']
            }
          ]
        },
        story: {
          title: 'Nong Bot Mixes the Sockets',
          panels: [
            { who: 'Mint', text: '(rushing in) Sorry I\'m late, everyone! The BTS was packed.' },
            { who: 'Nong Bot', text: 'Don\'t mention it! Beep!' },
            { who: 'Mint', text: 'Er… I wasn\'t going to mention it again. I was apologising.' },
            { who: 'Fah', text: 'Bot, thanks for booking the study room, by the way.' },
            { who: 'Nong Bot', text: 'Never mind! Beep! Never mind at all!' },
            { who: 'T.Chris', text: 'Bot, thank-you and sorry are different sockets. Try again.' }
          ],
          moral: 'Name the first half of the pair — thanks or sorry — before you choose the reply. (Bot finally said “My pleasure”… to the door.)'
        }
      },
      items: [
        {
          id: 't1l1s3-1',
          type: 'gap',
          tag: 'cv-thanks',
          level: 'B2',
          lines: T1_L_LIB,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['You\'re welcome.', 'Don\'t mention it.', 'Oh well, thanks anyway.', 'Sorry, it\'s all my fault.'],
          answer: 2,
          hint: 'The librarian has just given bad news, and then says “Wait, don\'t go yet.” What was Oat about to do?',
          why: 'The librarian tried to help but could not (“all three copies are out”), and “Wait, don\'t go yet” shows Oat was politely leaving: <em>Oh well, thanks anyway.</em> “You\'re welcome” and “Don\'t mention it” answer thanks, but nobody thanked Oat. “Sorry, it\'s all my fault” apologises for something that is not his fault.'
        },
        {
          id: 't1l1s3-2',
          type: 'gap',
          tag: 'cv-thanks',
          level: 'B2',
          lines: T1_L_LIB,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Never mind.', 'My pleasure.', 'Thanks anyway.', 'I\'m afraid not.'],
          answer: 1,
          hint: 'Oat has just said “Thank you so much.” Which family of replies answers thanks?',
          why: 'Oat thanks the librarian, so she answers from the thank-you family: <em>My pleasure.</em> “Never mind” answers an apology. “Thanks anyway” is for help that failed, but her help worked. “I\'m afraid not” refuses something, yet she immediately gives him the form.'
        },
        {
          id: 't1l1s3-3',
          type: 'gap',
          tag: 'cv-thanks',
          level: 'B2',
          lines: T1_L_LIB,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['You\'re welcome.', 'Don\'t mention it.', 'Thanks, that\'s very kind.', 'Oh, don\'t worry about it at all.'],
          answer: 3,
          hint: 'Oat has just apologised. What does the librarian say next about the cup and the books?',
          why: 'Oat apologises, and the librarian makes the damage sound small (“nearly empty… the books are dry”), so she accepts the apology: <em>Oh, don\'t worry about it at all.</em> “Don\'t mention it” is the near miss: it is from the thank-you family, not the apology family. “You\'re welcome” and “Thanks, that\'s very kind” also answer or give thanks, which nobody has done.'
        },
        {
          id: 't1l1s3-4',
          type: 'gap',
          tag: 'cv-thanks',
          level: 'B2',
          lines: T1_L_BDAY,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Never mind.', 'Thanks anyway.', 'Don\'t mention it, Pim.', 'You\'re welcome, it was fun.'],
          answer: 0,
          hint: 'What did Pim just do: thank Beam, or apologise to her?',
          why: 'Pim apologises for missing the party, and Beam forgives her before mentioning the cake: <em>Never mind.</em> “Don\'t mention it” and “You\'re welcome” answer thanks, not an apology. “Thanks anyway” would mean Pim tried to help Beam and failed, which is not what happened.'
        },
        {
          id: 't1l1s3-5',
          type: 'sort',
          tag: 'cv-thanks',
          level: 'B2',
          stem: 'Which first line does each reply answer?',
          bins: [
            { key: 'thx', label: 'Answers “Thank you”', hint: 'the favour was small' },
            { key: 'sry', label: 'Answers “Sorry”', hint: 'the damage was small' },
            { key: 'both', label: 'Works for both', hint: 'all-purpose' }
          ],
          items: [
            { text: 'Don\'t mention it.', bin: 'thx' },
            { text: 'My pleasure.', bin: 'thx' },
            { text: 'You\'re welcome.', bin: 'thx' },
            { text: 'Never mind.', bin: 'sry' },
            { text: 'No harm done.', bin: 'sry' },
            { text: 'These things happen.', bin: 'sry' },
            { text: 'No problem.', bin: 'both' },
            { text: 'That\'s all right.', bin: 'both' }
          ],
          hint: 'Say “Thank you!” and “I\'m sorry!” before each reply and listen for the one that fits.',
          why: 'Thank-you replies make the favour small (Don\'t mention it, My pleasure, You\'re welcome). Apology replies make the damage small (Never mind, No harm done, These things happen). <em>No problem</em> and <em>That\'s all right</em> are all-purpose and fit both.'
        }
      ]
    }
  ],
  check: {
    id: 't1l1ck',
    name: 'Systems Check · Everyday reactions',
    items: [
      {
        id: 't1l1ck-1',
        type: 'gap',
        tag: 'cv-react',
        level: 'B2',
        lines: T1_L_RESULTS,
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['Well done, Mint!', 'Good luck, Mint!', 'Never mind, Mint.', 'What a pity, Mint!'],
        answer: 0,
        hint: 'The result is already out, and it is a pass. Which reaction fits news that has already happened?',
        why: 'Mint has already passed, so Pun praises a finished success: <em>Well done, Mint!</em> “Good luck” is the timing trap: it wishes success before an event, not after it. “Never mind” and “What a pity” are for bad news, but Pun then praises her hard work.'
      },
      {
        id: 't1l1ck-2',
        type: 'gap',
        tag: 'cv-react',
        level: 'B2',
        lines: T1_L_RESULTS,
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['Don\'t mention it.', 'Oh, Pun, I\'m so sorry.', 'What a relief for you!', 'Congratulations anyway!'],
        answer: 1,
        hint: 'Pun has just failed a subject for the second time. What does he say in the next line?',
        why: 'Failing physics again is bad news, and Pun\'s next words (“It\'s OK. There\'s a resit”) answer sympathy: <em>Oh, Pun, I\'m so sorry.</em> “What a relief” and “Congratulations anyway” treat the failure as good news. “Don\'t mention it” answers thanks, which Pun has not given.'
      },
      {
        id: 't1l1ck-3',
        type: 'gap',
        tag: 'cv-agree',
        level: 'B2+',
        lines: T1_L_RESULTS,
        blank: '(3)',
        stem: 'Choose the best option for blank (3).',
        options: ['Maybe not yet.', 'Yes, it\'s your best.', 'I\'m afraid I disagree.', 'You can say that again.'],
        answer: 0,
        hint: 'Mint wants to be honest but kind. Which reply agrees gently and fits the “But…” that follows?',
        why: 'Mint agrees softly that physics is not Pun\'s subject yet, and “But that\'s what the resit is for” turns to hope: <em>Maybe not yet.</em> “You can say that again” also agrees, but at full volume, which is unkind to a friend who has just failed twice: right meaning, wrong tone. “Yes, it\'s your best” and “I\'m afraid I disagree” claim physics IS his subject, which his two failures contradict.'
      },
      {
        id: 't1l1ck-4',
        type: 'gap',
        tag: 'cv-thanks',
        level: 'B2',
        lines: T1_L_RESULTS,
        blank: '(4)',
        stem: 'Choose the best option for blank (4).',
        options: ['Anytime.', 'Never mind.', 'Thanks anyway.', 'I\'m sorry to hear that.'],
        answer: 0,
        hint: 'Pun has just thanked Mint. Which family of replies answers thanks?',
        why: 'Pun thanks Mint (“Thanks, Mint. You\'re a lifesaver”), so she answers from the thank-you family: <em>Anytime.</em> “Never mind” answers an apology, “Thanks anyway” is for help that failed, and “I\'m sorry to hear that” reacts to bad news.'
      },
      {
        id: 't1l1ck-5',
        type: 'gap',
        tag: 'cv-thanks',
        level: 'B2',
        lines: T1_L_CORRIDOR,
        blank: '(5)',
        stem: 'Choose the best option for blank (5).',
        options: ['Don\'t mention it.', 'Thanks anyway, Ms Kate.', 'I\'m sorry to hear that.', 'Thank you. That means a lot.'],
        answer: 3,
        hint: 'Ms Kate has just praised Aom. What is the natural way to receive a compliment?',
        why: 'A compliment is received with thanks: <em>Thank you. That means a lot.</em> Ms Kate\'s reply, “I mean it”, confirms that Aom thanked her modestly. “Don\'t mention it” answers someone else\'s thanks. “Thanks anyway” is for help that failed, and “I\'m sorry to hear that” treats praise as bad news.'
      },
      {
        id: 't1l1ck-6',
        type: 'gap',
        tag: 'cv-agree',
        level: 'B2+',
        lines: T1_L_CORRIDOR,
        blank: '(6)',
        stem: 'Choose the best option for blank (6).',
        options: ['Yes, it is.', 'No, it isn\'t.', 'No, it\'s on a Monday.', 'Yes, from Monday to Friday.'],
        answer: 0,
        hint: 'Ms Kate says Aom “won\'t miss a thing”. So when is the round, and how does English answer a negative question?',
        why: '“Then you won\'t miss a thing” means the round is not on a school day, so it IS on a Saturday. English answers a negative question by the fact: <em>Yes, it is.</em> “No, it isn\'t” is the Thai-logic trap (“ไม่ใช่” = “you are wrong”) and would mean the round is not on Saturday. The two weekday answers contradict Ms Kate\'s conclusion.'
      }
    ]
  }
});

/* ============================================================ LEVEL 2 */
T1.levels.push({
  id: 't1l2',
  n: 2,
  name: 'Getting things done',
  cefr: 'B2',
  blurb: 'Asking, offering, inviting, complaining and advising: conversations with a job to do, and a script each speaker is expected to follow.',
  subs: [
    {
      id: 't1l2s1',
      name: 'Requests, offers, permission & invitations',
      cefr: 'B2',
      tag: 'cv-request',
      theory: {
        key: 'Requests, offers, permission and invitations each expect their own answer — and <strong>Would you mind…?</strong> works upside down: <em>No, not at all</em> means <strong>yes, go ahead</strong>.',
        body: [
          '<strong>Four jobs, four kinds of answer.</strong> A <em>request</em> (you want them to do something): <em>Could you…? / Would you mind + -ing?</em> → Sure. / Of course. / No problem. / I\'m afraid I can\'t. An <em>offer</em> (you will do something for them): <em>Shall I…? / Would you like me to…? / Let me…</em> → That would be great. / That\'s kind of you. / Thanks, but I can manage. A request for <em>permission</em> (you want to do something): <em>Can I…? / Is it OK if I…? / Do you mind if I…?</em> → Go ahead. / Sure. / I\'d rather you didn\'t. An <em>invitation</em>: <em>Do you want to…? / Would you like to…? / Are you free on…?</em> → Count me in! / I\'d love to. / I\'d love to, but… / Maybe another time.',
          '<strong>The Would-you-mind logic.</strong> <em>Mind</em> means “object to, be bothered by”. So “Would you mind opening the window?” really asks “Would it bother you?” The helpful answer is therefore <em>negative</em>: <strong>No, not at all. / Of course not. / Not at all, go ahead.</strong> A refusal is <em>Actually, I\'d rather not</em> or (rudely) <em>Yes, I would</em>. Grammar: <em>Would you mind + -ing</em> (you do it) · <em>Would you mind if I + past</em> (I do it) · <em>Do you mind if I + present</em>.',
          '<strong>How TCAS tests it.</strong> The line after the blank shows which job the blank did. In TCAS68 a biology teacher answers a student\'s blank with “<em>Sure.</em> And if you find a short VDO clip, you can use that, <em>too</em>.” “Sure” needs a yes/no request, and “use that, too” shows the student asked permission to use some other material, so the key is a permission question about the assignment. With invitations, a follow-up like “What time does it start?” proves the blank accepted; “Oh well, maybe next time” proves it declined.'
        ],
        simple: [
          'Request: Could you…? → Sure. Offer: Shall I…? → That\'s kind of you. Permission: Can I…? → Go ahead. Invitation: Do you want to…? → Count me in!',
          '“Would you mind…?” means “Is it a problem for you?” So “No, not at all” means “Yes, I\'ll do it / Yes, you can.”'
        ],
        thai: 'ในบทสนทนามี 4 งานหลัก ได้แก่ ขอร้อง (Could you…?) เสนอความช่วยเหลือ (Shall I…? / Would you like me to…?) ขออนุญาต (Can I…? / Do you mind if I…?) และชวน (Would you like to…? / Are you free…?) แต่ละแบบมีคำตอบของตัวเอง ระวัง Would you mind…? เพราะ mind แปลว่า “รังเกียจ/ขัดข้อง” ถ้าตอบ No, not at all. หรือ Of course not. แปลว่า “ไม่ขัดข้อง ทำให้ได้/เชิญเลย” ส่วน Yes, I would. แปลว่า “ขัดข้อง” คือปฏิเสธ รับคำชวนใช้ Count me in! / I\'d love to. ปฏิเสธอย่างสุภาพใช้ I\'d love to, but…',
        examples: [
          { s: '“Would you mind turning the music down?” — “<strong>Not at all.</strong>” (turns it down)', g: 'No = it doesn\'t bother me = I\'ll do it.' },
          { s: '“Would you mind if I opened the window?” — “<strong>Go ahead.</strong>”', g: 'Permission with if + past; answer = yes, you may.' },
          { s: '“Shall I carry that for you?” — “<strong>Thanks, that\'s kind of you.</strong>”', g: 'An offer is accepted with thanks, not “Go ahead”.' },
          { s: '“We\'re making a TikTok about the flood drill. Want to join?” — “<strong>Count me in!</strong>”', g: 'Invitation accepted (include me).' },
          { s: '“Are you free on Saturday?” — “<strong>I\'d love to come, but</strong> I\'ve got tutoring.”', g: 'Polite refusal: warm start + reason.' }
        ],
        trap: '<em>Would you mind…?</em> answered with <em>Yes, of course!</em> Students translate “yes = OK”, but <em>Yes</em> means “Yes, I mind”. TCAS also swaps jobs: an option that answers an <em>offer</em> (“That\'s kind of you”) placed after a <em>request</em>. Dodge: ask “who is going to do the action?” before you choose the reply.',
        analogy: {
          title: 'The “bother meter”',
          text: 'Imagine a Grab driver asks, “Would you mind if I turned the air-con down?” Picture a meter labelled “How much does this bother you?” Saying <em>Not at all</em> sets the meter to zero, so the driver goes ahead. <em>Would you mind</em> never asks “Is it OK?”; it asks “How much does it bother you?”, so zero means yes.'
        },
        map: {
          center: 'Getting people to act',
          branches: [
            {
              label: 'Request',
              leaves: ['Could you…?', 'Would you mind + -ing?', '→ Sure / Not at all']
            },
            {
              label: 'Offer',
              leaves: ['Shall I…?', 'Would you like me to…?', '→ That\'s kind of you']
            },
            {
              label: 'Permission',
              leaves: ['Can I / Is it OK if I…?', 'Do you mind if I…?', '→ Go ahead']
            },
            {
              label: 'Invitation',
              leaves: ['Do you want to…?', '→ Count me in!', '→ I\'d love to, but…']
            }
          ]
        },
        story: {
          title: 'Pun Says Yes',
          panels: [
            { who: 'T.Chris', text: 'Pun, would you mind closing the window? The traffic noise is terrible.' },
            { who: 'Pun', text: '(big smile) Yes! (does not move)' },
            { who: 'Mint', text: '(whispering) Pun, you just told him it bothers you.' },
            { who: 'Pun', text: 'Oh! I mean — no! Not at all! (runs to the window)' },
            { who: 'Nong Bot', text: 'T.Chris, would you mind if I played some music? Beep!' },
            { who: 'T.Chris', text: 'Yes, I would. Very much.' }
          ],
          moral: 'With “Would you mind…?”, no means yes and yes means no. (Nong Bot heard “Yes” and played the music anyway. Some robots learn slowly.)'
        }
      },
      items: [
        {
          id: 't1l2s1-1',
          type: 'gap',
          tag: 'cv-request',
          level: 'B2',
          lines: T1_L_STUDY,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Yes, I would.', 'Not at all. Go ahead.', 'I\'d rather you didn\'t.', 'Sorry, I\'m afraid it\'s taken.'],
          answer: 1,
          hint: 'Emma adds “I\'m leaving in about an hour anyway.” Is she happy to share the table?',
          why: 'Tee asks permission with “Would you mind if I sat here?”, and Emma\'s next sentence shows she is relaxed about it. With <em>would you mind</em>, “no” means “it doesn\'t bother me”: <em>Not at all. Go ahead.</em> “Yes, I would”, “I\'d rather you didn\'t” and “it\'s taken” all refuse, which clashes with her friendly follow-up.'
        },
        {
          id: 't1l2s1-2',
          type: 'gap',
          tag: 'cv-request',
          level: 'B2',
          lines: T1_L_STUDY,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Sure.', 'I\'d rather not.', 'Thanks, I\'d love one.', 'Yes, you may borrow it.'],
          answer: 0,
          hint: 'Emma adds “But please don\'t be long.” Has she agreed to watch the laptop?',
          why: 'Tee makes a request, and Emma agrees but adds a condition (“But please don\'t be long”): <em>Sure.</em> “I\'d rather not” refuses, so the condition makes no sense. “Thanks, I\'d love one” treats the request as an offer of coffee, and “Yes, you may borrow it” misunderstands who is asking for what.'
        },
        {
          id: 't1l2s1-3',
          type: 'gap',
          tag: 'cv-request',
          level: 'B2',
          lines: T1_L_STUDY,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Go ahead.', 'No, thanks. I\'m fine.', 'Sure, help yourself to one.', 'Oh, that\'s really kind of you.'],
          answer: 3,
          hint: '“Shall I get you something?” is an offer. Emma then says what she would like.',
          why: '“Shall I get you something?” is an offer, and Emma accepts it by naming a drink, so she thanks him: <em>Oh, that\'s really kind of you.</em> “No, thanks. I\'m fine” refuses, which contradicts her order. “Go ahead” answers a permission request, and “help yourself” offers Tee something of hers.'
        },
        {
          id: 't1l2s1-4',
          type: 'gap',
          tag: 'cv-request',
          level: 'B2',
          lines: T1_L_STUDY,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Count me in!', 'Maybe another time.', 'I\'m afraid I can\'t make it.', 'Thanks, but jazz isn\'t my thing.'],
          answer: 0,
          hint: 'Emma\'s next question is about the start time. Would she ask that if she were not going?',
          why: 'Asking “What time does it start?” only makes sense if Emma is going, so she accepts the invitation: <em>Count me in!</em> The other three options politely decline, and a person who has just declined would not ask about the start time.'
        },
        {
          id: 't1l2s1-5',
          type: 'sort',
          tag: 'cv-request',
          level: 'B2',
          stem: 'Your classmate asks: “Would you mind opening the window?” What does each reply really mean?',
          bins: [
            { key: 'yes', label: 'I\'ll do it', hint: 'it doesn\'t bother me' },
            { key: 'no', label: 'I won\'t do it', hint: 'it does bother me' }
          ],
          items: [
            { text: 'Not at all.', bin: 'yes' },
            { text: 'Of course not.', bin: 'yes' },
            { text: 'No problem.', bin: 'yes' },
            { text: 'No, not at all. Here you go.', bin: 'yes' },
            { text: 'Actually, I\'d rather not. I\'m freezing.', bin: 'no' },
            { text: 'Well, yes, I would, actually.', bin: 'no' },
            { text: 'Sorry, the window\'s stuck.', bin: 'no' }
          ],
          hint: '“Mind” means “be bothered by”. Does each reply say it bothers the speaker or not?',
          why: '“Would you mind…?” asks whether the action would bother you, so negative answers (<em>Not at all / Of course not / No problem</em>) mean “I\'ll do it”. “I\'d rather not”, “Yes, I would” and an excuse like “the window\'s stuck” all mean the window stays closed.'
        }
      ]
    },
    {
      id: 't1l2s2',
      name: 'Complaints & service recovery',
      cefr: 'B2',
      tag: 'cv-complain',
      theory: {
        key: 'A complaint follows a script — <strong>problem → apology → reason (not an excuse) → fix → something extra → thanks</strong> — so every blank must fit its step <em>and</em> the speaker\'s role.',
        body: [
          '<strong>The customer\'s moves.</strong> A polite opener (<em>Excuse me, I\'m afraid there\'s a problem with… / I\'d like to make a complaint about…</em>), the facts (<em>This is the third time my order has taken 30 minutes</em>), and a request (<em>Could you replace it? / I\'d like a refund</em>). TCAS customers are firm but polite; they never insult anyone. At the end they close warmly: <em>Thank you for sorting it out. / I appreciate it. / That\'s very kind.</em>',
          '<strong>The staff\'s moves (service recovery).</strong> Apologise (<em>I\'m very sorry. / I do apologise.</em>) → empathise (<em>I completely understand your frustration.</em>) → give a reason without hiding behind it (<em>We\'ve been short-staffed lately, but there\'s no excuse.</em>) → fix it (<em>I\'ll replace it right away. / I\'ll send someone up.</em>) → add something extra (<em>a complimentary drink / dessert on the house / a voucher / a refund</em>) → promise (<em>It won\'t happen again. / We\'ll do better.</em>). Staff never blame the customer.',
          '<strong>How TCAS tests it.</strong> TCAS69 opened with exactly this script in a restaurant. The waiter\'s blank came before “<em>but there\'s no excuse</em>”, so it had to be a reason the staff admit to (the pattern “We\'ve been a bit short-staffed lately, <em>but there\'s no excuse</em>”). The customer\'s last blank came before the waiter\'s “Thank you for your feedback. We\'ll do better”, so it had to be a satisfied closing (“Thank you for addressing my concerns”). Procedure: Step 1: find the step of the script. Step 2: check the role (customer or staff?). Step 3: read the next line: an offer you haven\'t heard yet cannot be thanked for.'
        ],
        simple: [
          'Customer: “I\'m afraid there\'s a problem with…” → staff: “I\'m so sorry” → reason → “I\'ll fix it” → a free extra → customer: “Thank you.”',
          'Staff never blame the customer. Customers stay polite.'
        ],
        thai: 'บทสนทนาร้องเรียนมีลำดับค่อนข้างตายตัว ลูกค้าแจ้งปัญหาอย่างสุภาพ → พนักงานขอโทษ → อธิบายสาเหตุโดยไม่แก้ตัว (…but there\'s no excuse) → เสนอทางแก้ → ให้ของชดเชย เช่น complimentary drink → ลูกค้าขอบคุณ ช่องว่างแต่ละช่องต้องตรงกับ “ขั้นตอน” และ “บทบาท” ของผู้พูด กับดักคือตัวเลือกที่ถูกไวยากรณ์แต่เป็นคำพูดของอีกบทบาท เช่น พนักงานโทษลูกค้า หรือลูกค้าขอบคุณสิ่งที่พนักงานยังไม่ได้เสนอ',
        examples: [
          { s: '<strong>I\'m afraid there\'s a problem with</strong> my room key. It doesn\'t open the door.', g: 'Customer: polite opener + fact.' },
          { s: 'We\'ve had a lot of orders tonight, <strong>but there\'s no excuse</strong>.', g: 'Staff: a reason, not an excuse.' },
          { s: '<strong>I\'ll have a new one sent up</strong> right away.', g: 'Staff: the fix (causative “have … sent”).' },
          { s: 'Please accept a <strong>complimentary</strong> dessert for the inconvenience.', g: 'Staff: something extra (complimentary = free).' },
          { s: '<strong>Thank you for sorting it out</strong> so quickly.', g: 'Customer: warm closing.' }
        ],
        trap: 'Role reversal and blame. TCAS offers a perfect sentence in the wrong mouth: a waiter who says “You should have ordered earlier”, or a customer who thanks staff for a voucher two lines before it is offered. Dodge: before choosing, whisper the speaker\'s role (“I am the receptionist”) and check the option against the script step.',
        analogy: {
          title: 'The pit stop',
          text: 'In a Formula 1 pit stop each crew member has one job in a fixed order: lift, wheels off, wheels on, drop, go. A complaint conversation is a pit stop for an unhappy customer: apology, reason, fix, extra, thanks. If someone tries to change the tyres before the car is lifted, the whole stop fails — and so does an option that jumps a step.'
        },
        map: {
          center: 'Complaint script',
          branches: [
            {
              label: 'Customer opens',
              leaves: ['I\'m afraid there\'s a problem', 'facts, not insults', 'Could you… / I\'d like…']
            },
            {
              label: 'Staff recover',
              leaves: ['I do apologise', 'reason, but no excuse', 'I\'ll replace / send up']
            },
            {
              label: 'Something extra',
              leaves: ['complimentary drink', 'on the house', 'voucher / refund']
            },
            {
              label: 'Close',
              leaves: ['Thank you for sorting it out', 'We\'ll do better']
            }
          ]
        },
        moves: [
          { move: 'Raise one hand politely', says: 'Customer: “Excuse me, I\'m afraid there\'s a problem…”' },
          { move: 'Hand on heart', says: 'Staff: “I do apologise.”' },
          { move: 'Small shrug, then shake your head', says: 'A reason… “but there\'s no excuse.”' },
          { move: 'Twist an imaginary spanner', says: 'The fix: “I\'ll replace it right away.”' },
          { move: 'Hold out a gift box, then thumbs up', says: 'Something extra → “Thank you, I appreciate it.”' }
        ]
      },
      items: [
        {
          id: 't1l2s2-1',
          type: 'gap',
          tag: 'cv-complain',
          level: 'B2',
          lines: T1_L_HOTEL,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Is it too cold?', 'How long are you staying?', 'What seems to be the trouble?', 'Would you like a late checkout?'],
          answer: 2,
          hint: 'The guest answers by describing exactly what is wrong. What question gets that answer?',
          why: 'The guest\'s next line describes the fault (a rattling noise, a hot room), so the receptionist must have asked about the problem: <em>What seems to be the trouble?</em> “Is it too cold?” is the near miss: it is about the air conditioning, but a yes/no question would get “No, it\'s too hot”, and the room is hot anyway. The other two questions ignore the complaint.'
        },
        {
          id: 't1l2s2-2',
          type: 'gap',
          tag: 'cv-complain',
          level: 'B2+',
          lines: T1_L_HOTEL,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: [
            'You called too late,',
            'The hotel is fully booked,',
            'Our technician has gone home,',
            'All our rooms have air conditioning,'
          ],
          answer: 2,
          hint: 'The gap comes before “but I can move you to another room right away”. What reason would lead to a room change?',
          why: 'The receptionist gives a reason the fault cannot be fixed tonight, then offers another solution: <em>Our technician has gone home, but I can move you…</em> “The hotel is fully booked” contradicts the offer of another room. “You called too late” blames the guest, which staff never do, and “All our rooms have air conditioning” is not a reason for anything.'
        },
        {
          id: 't1l2s2-3',
          type: 'gap',
          tag: 'cv-complain',
          level: 'B2',
          lines: T1_L_HOTEL,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: [
            'Please check out by noon.',
            'I\'ll switch the air-con off.',
            'You\'ll need to carry your own bags.',
            'I\'ll send someone up to help you pack.'
          ],
          answer: 3,
          hint: 'The guest has just worried about all the things she unpacked. What would solve that?',
          why: 'The guest\'s worry is her unpacked things, and the receptionist fixes it: <em>I\'ll send someone up to help you pack.</em> The guest\'s reply “That\'s very helpful” confirms real help. “You\'ll need to carry your own bags” is unhelpful, “check out by noon” is irrelevant, and switching off the air conditioning leaves her in a hot room.'
        },
        {
          id: 't1l2s2-4',
          type: 'gap',
          tag: 'cv-complain',
          level: 'B2',
          lines: T1_L_HOTEL,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Oh, thank you.', 'Don\'t mention it.', 'That\'s too little, too late.', 'I\'m afraid I can\'t accept it.'],
          answer: 0,
          hint: 'The receptionist answers the gap with “You\'re welcome.” What must the guest have said?',
          why: '“You\'re welcome” answers thanks, so the guest accepts the free breakfast gratefully: <em>Oh, thank you.</em> “Don\'t mention it” is the role-reversal trap: it is what the receptionist would say, not the guest. “That\'s too little, too late” and “I\'m afraid I can\'t accept it” reject the offer, so “You\'re welcome” would not follow.'
        },
        {
          id: 't1l2s2-5',
          type: 'order',
          tag: 'cv-complain',
          level: 'B2',
          stem: 'Put the turns of this restaurant complaint in the most natural order.',
          items: [
            'Customer: Excuse me. I\'m afraid there\'s a problem with my order.',
            'Waiter: I\'m sorry to hear that. What seems to be the problem?',
            'Customer: I ordered the green curry, but this is red curry.',
            'Waiter: I do apologise. I\'ll bring you the right dish right away.',
            'Customer: Thank you. I appreciate it.'
          ],
          hint: 'Follow the script: polite opener, question, facts, apology and fix, thanks.',
          why: 'The customer opens politely, the waiter asks for details, the customer gives the facts, the waiter apologises and offers a fix, and the customer closes with thanks. Every turn answers the one before it: “What seems to be the problem?” needs the curry facts, and “I appreciate it” needs a fix to appreciate.'
        }
      ]
    },
    {
      id: 't1l2s3',
      name: 'Advice, suggestions & warnings',
      cefr: 'B2+',
      tag: 'cv-advice',
      theory: {
        key: 'Advice has strengths — <em>You could…</em> → <em>Why don\'t you…?</em> → <em>You should…</em> → <em>You\'d better… (or else)</em> — and <strong>should have</strong> looks back at a mistake that can no longer be fixed.',
        body: [
          '<strong>The strength scale.</strong> Gentle suggestions: <em>How about + -ing? / Why don\'t you…? / You could… / Have you thought about + -ing? / It might be worth + -ing.</em> Advice: <em>You should… / If I were you, I\'d… / I\'d recommend + -ing.</em> Warnings: <em>You\'d better (not)…</em> (strong: something bad will happen if you don\'t), <em>Make sure you… / Whatever you do, don\'t… / Watch out! / Be careful not to…</em>',
          '<strong>Looking back.</strong> <em>You should have + past participle</em> = you didn\'t do it, and that was a mistake (criticism or regret). <em>You shouldn\'t have + past participle</em> = you did it, and that was a mistake. So these are not advice for the future; they cannot help someone who asks “What should I do?”. (One friendly exception: when someone gives you a gift, “Oh, you shouldn\'t have!” means “how generous!”)',
          '<strong>How TCAS tests it.</strong> The reply to advice usually echoes it. If the next line says “Every night? That sounds exhausting, but I suppose it\'s worth a try”, the blank must have suggested something done every night. Replies to accept: <em>Good idea. / That\'s worth a try. / I\'ll give it a go. / Thanks for the tip.</em> Replies to resist: <em>I\'ve tried that, but… / Hah! Every time I…</em> (in TCAS66 a shopper asked “Have you thought about going on a diet?” jokes that every diet makes him gain weight). In TCAS67 a friend pushes for adventure with a saying: “no risk, no reward. Take a chance!” Also watch the relationship: <em>You\'d better</em> is too strong for advising a teacher.'
        ],
        simple: [
          'Soft: How about…? / Why don\'t you…? Medium: You should… Strong: You\'d better… (or there will be a problem).',
          '“You should have studied” = you didn\'t study, and that was a mistake. It is about the past, not advice for tomorrow.',
          'The next line often repeats a word from the advice. Use it as a clue.'
        ],
        thai: 'คำแนะนำมีหลายระดับ เสนอแนะเบา ๆ ใช้ How about + -ing? / Why don\'t you…? / You could… แนะนำตรง ๆ ใช้ You should… / If I were you, I\'d… และเตือนแรงใช้ You\'d better (not)… (ถ้าไม่ทำจะเกิดผลเสีย) ส่วน should have + V3 พูดถึงอดีตที่ “ควรทำแต่ไม่ได้ทำ” จึงเป็นการตำหนิหรือเสียดาย ไม่ใช่คำแนะนำสำหรับอนาคต กับดักคือการเลือก You should have… ทั้งที่บรรทัดถัดไปตอบรับว่า Good idea, I\'ll try that ซึ่งแสดงว่าช่องว่างต้องเป็นคำแนะนำไปข้างหน้า',
        examples: [
          { s: '<strong>Why don\'t you</strong> join the Saturday study group?', g: 'Gentle suggestion.' },
          { s: '<strong>If I were you, I\'d</strong> check the flood map before driving.', g: 'Personal advice.' },
          { s: '<strong>You\'d better</strong> leave now, or you\'ll miss the last BTS.', g: 'Warning with a consequence.' },
          { s: '<strong>You should have</strong> backed up your files.', g: 'Past criticism: too late now.' },
          { s: '“Try the timed practice.” — “<strong>Good idea. I\'ll give it a go.</strong>”', g: 'Accepting advice.' }
        ],
        trap: 'The time trap: <em>You should have started earlier</em> sounds like advice but only criticises the past. If the next line accepts the idea (“Good idea, I\'ll try that tonight”), the blank must point forward. Second trap: advice that is sensible in general but contradicts the next line (e.g. “Take your time” when the next line says “Don\'t spend five minutes on one question”).',
        analogy: {
          title: 'The GPS voice',
          text: 'A navigation app has three voices. “In 300 metres, you could take the expressway” (suggestion). “Turn left NOW” (warning). And the sad one: “Recalculating… you should have turned left” (should have: the moment is gone). When a friend asks “What should I do?”, only the first two voices can help.'
        },
        map: {
          center: 'Advice strength',
          branches: [
            {
              label: 'Suggest',
              leaves: ['How about + -ing?', 'Why don\'t you…?', 'You could…']
            },
            {
              label: 'Advise',
              leaves: ['You should…', 'If I were you, I\'d…']
            },
            {
              label: 'Warn',
              leaves: ['You\'d better (not)…', 'Whatever you do, don\'t…', 'Make sure you…']
            },
            {
              label: 'Look back',
              leaves: ['should have = didn\'t, a mistake', 'shouldn\'t have = did, a mistake']
            },
            {
              label: 'Replies',
              leaves: ['Good idea / Worth a try', 'I\'ve tried that, but…']
            }
          ]
        },
        chant: {
          title: 'The Advice Ladder',
          beat: 'stomp-clap, stomp-clap (4/4)',
          lines: [
            'How about? Why don\'t you? That\'s the bottom stair,',
            'You should, if I were you — now we\'re halfway there.',
            'You\'d better, or you\'ll see — that\'s the warning bell,',
            'Watch out, make sure, whatever you do — you know it well.',
            'But should have looks behind you, at a chance that\'s gone,',
            'It\'s a sigh about the past, not a road to go on.',
            'Read the reply that follows, find the word it keeps:',
            'The echo tells you which advice the blank repeats!'
          ]
        }
      },
      items: [
        {
          id: 't1l2s3-1',
          type: 'gap',
          tag: 'cv-advice',
          level: 'B2',
          lines: T1_L_EXAM,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: [
            'Did you finish it last night?',
            'How about a break from reading?',
            'You should have started last year.',
            'Why don\'t you do one timed article every night?'
          ],
          answer: 3,
          hint: 'Mint\'s reply begins “Every night?” What must Fah have suggested?',
          why: 'Mint echoes the advice (“Every night? … it\'s worth a try”), so Fah suggested a nightly routine: <em>Why don\'t you do one timed article every night?</em> “You should have started last year” only criticises the past and could not be “worth a try”. “How about taking a break” is advice, but not something done every night.'
        },
        {
          id: 't1l2s3-2',
          type: 'gap',
          tag: 'cv-advice',
          level: 'B2+',
          lines: T1_L_EXAM,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['take your time.', 'watch the clock.', 'read every word twice.', 'never guess an answer.'],
          answer: 1,
          hint: 'Fah immediately adds “Don\'t spend five minutes on one question.” Which advice does that sentence explain?',
          why: 'The sentence after the gap explains the advice, so the advice is about time: <em>watch the clock.</em> “Take your time” is the near miss: it is also about time but says the opposite. “Read every word twice” would waste time, and “never guess” contradicts Fah\'s plan to skip hard questions and come back.'
        },
        {
          id: 't1l2s3-3',
          type: 'gap',
          tag: 'cv-advice',
          level: 'B2+',
          lines: T1_L_EXAM,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['You should have.', 'You\'d better not.', 'Yes, you\'d better.', 'Why not? Go for it.'],
          answer: 1,
          hint: 'Fah then says Mint needs seven hours of sleep. Is Fah for or against staying up late?',
          why: 'Fah warns against staying up late and gives the reason (seven hours of sleep): <em>You\'d better not.</em> “Yes, you\'d better” and “Why not? Go for it” encourage the late night, contradicting the reason. “You should have” looks back at the past, but Mint is asking about the future.'
        },
        {
          id: 't1l2s3-4',
          type: 'equiv',
          tag: 'cv-advice',
          level: 'B2+',
          given: 'Fah to Pun, the morning after he overslept: “You <strong>should have</strong> set an alarm.”',
          stem: 'Which sentence is closest in meaning to what Fah said?',
          options: [
            'Pun set an alarm, and it was a good idea.',
            'Pun didn\'t set an alarm, which was a mistake.',
            'Pun needs to set an alarm before tomorrow\'s exam.',
            'Pun can decide for himself whether to set an alarm.'
          ],
          answer: 1,
          hint: 'Should have + past participle talks about a time that has already passed.',
          why: '<em>Should have + past participle</em> means the action did not happen and that was a mistake: Pun didn\'t set an alarm, which was a mistake. It is not future advice (“needs to set an alarm before tomorrow”), and it does not mean he did it or that it is his free choice.'
        },
        {
          id: 't1l2s3-5',
          type: 'sort',
          tag: 'cv-advice',
          level: 'B2',
          stem: 'Sort the lines: gentle suggestion, strong warning, or looking back at a mistake?',
          bins: [
            { key: 'sug', label: 'Gentle suggestion', hint: 'an idea to try' },
            { key: 'warn', label: 'Strong warning', hint: 'or something bad happens' },
            { key: 'back', label: 'Looking back', hint: 'too late now' }
          ],
          items: [
            { text: 'How about joining a study group?', bin: 'sug' },
            { text: 'Why don\'t you ask T.Chris after class?', bin: 'sug' },
            { text: 'You could try the practice test.', bin: 'sug' },
            { text: 'You\'d better leave now, or you\'ll miss the bus.', bin: 'warn' },
            { text: 'Whatever you do, don\'t forget your ID card.', bin: 'warn' },
            { text: 'You should have told me earlier.', bin: 'back' },
            { text: 'You shouldn\'t have stayed up so late.', bin: 'back' }
          ],
          hint: 'Check two things: how strong the line is, and whether it is about the future or the past.',
          why: '<em>How about / Why don\'t you / You could</em> offer ideas. <em>You\'d better… or</em> and <em>Whatever you do, don\'t</em> warn of a bad result. <em>Should have / shouldn\'t have</em> + past participle judge a past action, so they cannot change anything now.'
        }
      ]
    }
  ],
  check: {
    id: 't1l2ck',
    name: 'Systems Check · Getting things done',
    items: [
      {
        id: 't1l2ck-1',
        type: 'gap',
        tag: 'cv-complain',
        level: 'B2',
        lines: T1_L_DELIVERY,
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: [
          'I\'d like to order som tam.',
          'I\'m calling about an order.',
          'Thanks for the fast delivery.',
          'Can you recommend a good dish?'
        ],
        answer: 1,
        hint: 'Read what Nan says right after the gap. Why is she calling?',
        why: 'Nan goes on to report a missing dish, so her opener introduces a complaint: <em>I\'m calling about an order.</em> “I\'d like to order som tam” is the near miss: it mentions the right dish but makes a new order, and she has called customer service, not the restaurant. Thanking for fast delivery and asking for a recommendation do not lead into a complaint.'
      },
      {
        id: 't1l2ck-2',
        type: 'gap',
        tag: 'cv-request',
        level: 'B2+',
        lines: T1_L_DELIVERY,
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['Not at all.', 'Yes, I would.', 'Don\'t mention it.', 'I\'m afraid I can\'t.'],
        answer: 0,
        hint: 'Nan gives the order number straight after the gap. How do you say yes to “Would you mind…?”',
        why: 'Nan immediately gives the number, so she agrees. After <em>Would you mind…?</em>, agreement is negative: <em>Not at all.</em> “Yes, I would” and “I\'m afraid I can\'t” refuse, which contradicts her giving the number. “Don\'t mention it” answers thanks.'
      },
      {
        id: 't1l2ck-3',
        type: 'gap',
        tag: 'cv-complain',
        level: 'B2+',
        lines: T1_L_DELIVERY,
        blank: '(3)',
        stem: 'Choose the best option for blank (3).',
        options: [
          'How would you rate your driver today?',
          'Would you like a refund or a new one?',
          'Would you like to place another order now?',
          'Is everything else in your order all right?'
        ],
        answer: 1,
        hint: 'Nan answers “A refund, please.” What choice was she offered?',
        why: '“A refund, please” chooses one item from a choice, so the agent offered two solutions: <em>Would you like a refund or a new one?</em> The other questions are yes/no questions or ask about something else; none of them can be answered with “A refund, please.”'
      },
      {
        id: 't1l2ck-4',
        type: 'gap',
        tag: 'cv-complain',
        level: 'B2+',
        lines: T1_L_DELIVERY,
        blank: '(4)',
        stem: 'Choose the best option for blank (4).',
        options: [
          'Please check your bag next time.',
          'We\'ll also add a 50-baht voucher.',
          'Please rate us five stars in the app.',
          'Unfortunately, refunds aren\'t possible.'
        ],
        answer: 1,
        hint: 'Nan says “that\'s kind of you”. What extra step of the service script is she thanking the agent for?',
        why: 'After the fix (the refund), service recovery adds something extra, and Nan thanks the agent for a kindness: <em>We\'ll also add a 50-baht voucher.</em> “Please check your bag next time” blames the customer. “Refunds aren\'t possible” contradicts the refund just promised, and asking for five stars is not a kindness.'
      },
      {
        id: 't1l2ck-5',
        type: 'gap',
        tag: 'cv-advice',
        level: 'B2+',
        lines: T1_L_ANKLE,
        blank: '(5)',
        stem: 'Choose the best option for blank (5).',
        options: [
          'You should have played harder.',
          'Why not? You\'re the best player we\'ve got.',
          'You\'d better practise more before Saturday.',
          'If I were you, I\'d get it checked by a doctor first.'
        ],
        answer: 3,
        hint: 'Krit replies “That\'s what the coach said, too” and decides to go to the clinic. What was Pun\'s advice?',
        why: 'Krit decides to go to the clinic and says the coach gave the same advice, so Pun advised medical help: <em>If I were you, I\'d get it checked by a doctor first.</em> “Why not? You\'re the best player” encourages him to play on a swollen ankle, and “practise more” would make it worse. “You should have played harder” is past criticism, not an answer to “Should I still play?”'
      },
      {
        id: 't1l2ck-6',
        type: 'gap',
        tag: 'cv-request',
        level: 'B2+',
        lines: T1_L_ANKLE,
        blank: '(6)',
        stem: 'Choose the best option for blank (6).',
        options: ['Count me in, let\'s go!', 'Thanks, but I can manage.', 'I wish I could, but I can\'t.', 'Sure, what time should I meet you?'],
        answer: 2,
        hint: 'Krit answers “No worries. I\'ll ask Mint instead.” Did Pun agree to go?',
        why: '“I\'ll ask Mint instead” shows Pun refused, and “No worries” shows he refused politely: <em>I wish I could, but I can\'t.</em> “Count me in” and “Sure, what time…?” accept, so Krit would not need Mint. “Thanks, but I can manage” is how you refuse an <em>offer</em> of help, but here Krit is the one asking for help.'
      }
    ]
  }
});

/* ============================================================ LEVEL 3 */
T1.levels.push({
  id: 't1l3',
  n: 3,
  name: 'Reading the turn',
  cefr: 'B2+–C1',
  blurb: 'The exam technique level: let the next line choose for you, hear who is speaking to whom, and track a long conversation all the way to its twist.',
  subs: [
    {
      id: 't1l3s1',
      name: 'The line after the blank decides',
      cefr: 'B2+',
      tag: 'cv-next',
      theory: {
        key: 'The line <strong>after</strong> the blank is your answer key: if it answers, the blank asked (and its first words — <em>Yes, I do</em> / a time / a place / a reason — tell you <em>which</em> question); if it reacts, the blank said something worth reacting to.',
        body: [
          '<strong>Why it works.</strong> A conversation is a chain: every turn answers the one before and sets up the one after. The examiners remove one link but leave both neighbours, and the <em>following</em> line is the more useful one, because it was written as a reply to the missing words. It is like reading an answer and working out the question.',
          '<strong>The fit table.</strong> <em>Yes, I do / No, I haven\'t</em> → a yes/no question with the <strong>same auxiliary</strong> (Do you…? / Have you…?). <em>About two days ago / Since Monday</em> → When…? / How long…? <em>At the café near the BTS</em> → Where…? <em>Because… / a reason</em> → Why…? <em>Medium.</em> → What size…? (TCAS66: a one-word size answer proves the blank asked about size). <em>Why? What happened?</em> → the blank was a statement hinting at a problem (TCAS66: “How are you feeling?” — blank — “Why? Did you stay up late?”, so the blank must admit to being tired). <em>Huh? You didn\'t sleep at all?</em> (TCAS67) → the blank said something that sounded like no sleep. <em>I\'m afraid not</em> → a request or a yes/no question that hoped for yes.',
          '<strong>Auxiliary echo and polarity.</strong> Short answers copy the auxiliary: <em>Would you…? → I would. Did you…? → I did. Do you…? → I do.</em> So if the reply is “Yes, I do”, an option that starts “Would you like…?” is wrong even if its topic is perfect. And in TCAS68 a professor answers a student\'s blank with “Oh, for me personally?”, which shows the student asked about <em>his</em> taste (“which style of music do you prefer?”), not about people in general.',
          '<strong>The procedure.</strong> Step 1: cover the options. Step 2: read the next line and label it (answer to yes/no · answer to wh- · reaction · agreement). Step 3: predict the blank in your own words. Step 4: uncover the options and match shape first, topic second. Step 5: check the line <em>before</em> too; the blank must fit both neighbours.'
        ],
        simple: [
          'Read the line after the gap first. It is the answer to the gap, or a reaction to it.',
          '“Yes, I do” → the gap was a “Do you…?” question. “Two days ago” → “When…?”. “Why? What happened?” → the gap said there was a problem.',
          'Pick the option with the right shape, not only the right topic.'
        ],
        thai: 'บรรทัด “หลัง” ช่องว่างคือกุญแจสำคัญที่สุด ถ้าบรรทัดถัดไปเป็นคำตอบ แสดงว่าช่องว่างเป็นคำถาม และคำแรกของคำตอบบอกชนิดของคำถาม เช่น Yes, I do. → คำถาม yes/no ที่ใช้กริยาช่วยตัวเดียวกัน (Do you…?) ถ้าตอบเป็นเวลา สถานที่ หรือเหตุผล → คำถาม When / Where / Why ถ้าบรรทัดถัดไปเป็นปฏิกิริยา เช่น Why? What happened? แสดงว่าช่องว่างเป็นประโยคบอกเล่าที่มีปัญหาให้ถาม กับดักคือตัวเลือกที่ “หัวข้อถูก แต่รูปคำถามผิด” เช่น ถาม What\'s your number? แต่คำตอบขึ้นต้นด้วย Yes, I do.',
        examples: [
          { s: 'A: ___ &nbsp; B: <strong>Yes, I did.</strong> Twice, actually.', g: 'Did-question (Did you watch the finale?).' },
          { s: 'A: ___ &nbsp; B: <strong>Since March.</strong>', g: 'How long…? / Since when…? (How long have you lived here?)' },
          { s: 'A: ___ &nbsp; B: <strong>Why? What\'s wrong with it?</strong>', g: 'The blank was a doubtful statement (I\'m not sure about this dress).' },
          { s: 'A: ___ &nbsp; B: <strong>I\'m afraid not.</strong> We\'re fully booked.', g: 'A request hoping for yes (Do you have a table for two?).' },
          { s: 'A: ___ &nbsp; B: <strong>Medium, usually.</strong>', g: 'What size…? (the answer\'s shape gives it away).' }
        ],
        trap: 'The right-topic, wrong-shape option. After “Yes, I do. It\'s under my student ID”, TCAS will offer “What is your warranty number?” (right topic, but a wh-question cannot be answered “Yes, I do”) and “Would you like a warranty?” (right topic, wrong auxiliary). Dodge: match the <em>first two words</em> of the reply before you think about meaning.',
        analogy: {
          title: 'The jigsaw edge',
          text: 'A missing jigsaw piece has two edges to match, but one edge usually has the strange bump that only one piece fits. In a TCAS dialogue that bump is the line after the blank. Find the piece that clicks into that edge, then check that the other side fits too.'
        },
        map: {
          center: 'Read the next line',
          branches: [
            {
              label: 'It answers',
              leaves: ['Yes/No → same auxiliary', 'time → When / How long', 'place → Where', 'reason → Why']
            },
            {
              label: 'It reacts',
              leaves: ['Why? What happened? → a problem', 'Really? → surprising news', 'Me neither → a negative']
            },
            {
              label: 'It refuses',
              leaves: ['I\'m afraid not → request / hope', 'Sorry, I can\'t → invitation']
            },
            {
              label: 'Procedure',
              leaves: ['cover options', 'label the next line', 'predict, then match', 'check the line before']
            }
          ]
        },
        moves: [
          { move: 'Cover your eyes with one hand', says: 'Step 1: hide the options' },
          { move: 'Point down one line', says: 'Step 2: read the line AFTER the blank' },
          { move: 'Hold up two fingers', says: 'Step 3: match its first two words (Yes, I do / Since March)' },
          { move: 'Click two fists together', says: 'Step 4: the blank clicks into both neighbours' }
        ]
      },
      items: [
        {
          id: 't1l3s1-1',
          type: 'gap',
          tag: 'cv-next',
          level: 'B2',
          lines: T1_L_REPAIR,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Is it new?', 'How much is it?', 'What can I do for you?', 'Would you like a new case?'],
          answer: 2,
          hint: 'Beam answers by explaining her problem. What kind of question invites a customer to do that?',
          why: 'Beam\'s reply explains why she has come, so the staff member asked an open service question: <em>What can I do for you?</em> “Is it new?” is a yes/no question, and Beam doesn\'t answer yes or no. “How much is it?” is a customer\'s question, and “Would you like a new case?” would need a yes or a no.'
        },
        {
          id: 't1l3s1-2',
          type: 'gap',
          tag: 'cv-next',
          level: 'B2',
          lines: T1_L_REPAIR,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['When was that?', 'How did it happen?', 'Why did you do that?', 'Where were you at the time?'],
          answer: 0,
          hint: 'Beam\'s answer begins “About two days ago.” Which question word asks for that?',
          why: '“About two days ago” is a time, so the question asked <em>when</em>: <em>When was that?</em> “How did it happen?” is the near miss: it is on the right topic, but Beam has already explained how (she dropped it in a puddle), and a time does not answer “how”. “Why” needs a reason and “Where” needs a place.'
        },
        {
          id: 't1l3s1-3',
          type: 'gap',
          tag: 'cv-next',
          level: 'B2+',
          lines: T1_L_REPAIR,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Did you buy it here?', 'Do you have a warranty?', 'What is your warranty number?', 'Would you like to buy a warranty?'],
          answer: 1,
          hint: 'Look at the first three words of Beam\'s reply. Which auxiliary must the question use?',
          why: 'The reply “Yes, I <strong>do</strong>” echoes a <em>Do</em>-question: <em>Do you have a warranty?</em> “Did you buy it here?” would get “Yes, I did”. “Would you like to buy a warranty?” would get “Yes, I would” and makes no sense with “It\'s under my student ID number”. “What is your warranty number?” is a wh-question, so it cannot be answered with “Yes”.'
        },
        {
          id: 't1l3s1-4',
          type: 'gap',
          tag: 'cv-next',
          level: 'B2+',
          lines: T1_L_REPAIR,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: [
            'Is there a faster option?',
            'Who is going to do the repair?',
            'Why does it take so long to fix?',
            'How much is that going to cost me?'
          ],
          answer: 0,
          hint: 'The reply starts “I\'m afraid not.” What kind of question can be answered that way?',
          why: '“I\'m afraid not” answers a yes/no question that hoped for yes, and the reason given (it goes to Bang Na) explains why it is slow: <em>Is there a faster option?</em> “Why does it take so long to fix?” is the near miss: the reason fits, but a why-question cannot be answered “I\'m afraid not”. The cost question was already answered (it is free), and “Who…?” needs a person.'
        },
        {
          id: 't1l3s1-5',
          type: 'sort',
          tag: 'cv-next',
          level: 'B2',
          stem: 'Each line below comes straight AFTER a blank. What must the blank be?',
          bins: [
            { key: 'yn', label: 'A yes/no question', hint: 'Do/Did/Have/Can you…?' },
            { key: 'wh', label: 'A wh- question', hint: 'When/Where/Why/How long…?' },
            { key: 'st', label: 'A statement', hint: 'news, a problem, an opinion' }
          ],
          items: [
            { text: 'No, I haven\'t. Is it any good?', bin: 'yn' },
            { text: 'Yes, but only at weekends.', bin: 'yn' },
            { text: 'At the café near the BTS station.', bin: 'wh' },
            { text: 'Nearly two hours!', bin: 'wh' },
            { text: 'Oh no! What happened?', bin: 'st' },
            { text: 'Really? Since when?', bin: 'st' }
          ],
          hint: 'Does the line give an answer that starts with Yes/No, give a fact like a time or place, or react to news?',
          why: 'Replies starting with <em>Yes/No</em> answer yes/no questions (Have you seen…? / Do you work…?). A place or an amount of time answers a wh-question (Where…? / How long…?). Reactions like “Oh no! What happened?” and “Really? Since when?” respond to a statement: bad news or surprising news.'
        }
      ]
    },
    {
      id: 't1l3s2',
      name: 'Who is talking to whom: tone & register',
      cefr: 'C1',
      tag: 'cv-register',
      theory: {
        key: 'Before you judge <em>what</em> a line says, check <em>who</em> says it to <em>whom</em>: the right option matches the relationship — polite enough for a professor, relaxed enough for a best friend, and in character for a teacher, a waiter or a parent.',
        body: [
          '<strong>Register is a relationship choice.</strong> Three dials set it: <em>distance</em> (stranger, teacher ↔ close friend), <em>power</em> (professor → student, customer ↔ staff) and <em>setting</em> (office hours ↔ canteen). The same request climbs a ladder: <em>Gimme a sec.</em> → <em>Hang on a second.</em> → <em>Could you give me a moment?</em> → <em>I was wondering if you could possibly…</em> Softeners (<em>could, would, possibly, Do you think…, Sorry to bother you, May I ask…</em>) push a line up the ladder. Too casual to a professor sounds rude; too formal to a best friend sounds sarcastic or cold (“I would be most grateful if you passed the chips”).',
          '<strong>Characters have voices.</strong> TCAS writers keep each role consistent. Staff stay polite even with difficult customers. Students ask professors, they don\'t instruct or criticise them (“You should post it online” is advice to a superior, which is out of place). Teachers correct, encourage, and sometimes use dry irony: in TCAS67 two students caught watching TikTok claim they were “looking up a new word”, and the teacher\'s blank is a polite-sounding but ironic task (look up “inattentive” and explain it to the whole class). Parents worry; friends tease.',
          '<strong>Hearing irony.</strong> When the words are positive but the situation is bad, suspect irony: “Oh, great. Just great.” after a phone falls in a puddle. TCAS usually signals it with the situation, a stage direction (<em>(irritated)</em>, <em>(sighing)</em>) or the listener\'s reaction.',
          '<strong>The procedure.</strong> Step 1: label the roles from the Situation line, names and titles (Professor, Sir, Ms). Step 2: notice the politeness level of the lines around the blank. Step 3: delete options that are too blunt, too stiff, or out of character, even when their meaning is right.'
        ],
        simple: [
          'Ask: who is speaking, and to whom? A student to a professor must be polite: “Could you possibly…?”, “May I ask…?”.',
          'Friends can be relaxed. Staff are always polite. Teachers sometimes joke.',
          'An option can have the right meaning but the wrong voice.'
        ],
        thai: 'ก่อนตัดสินว่าประโยคไหนถูก ให้ดูก่อนว่า “ใครพูดกับใคร” (register) นักศึกษาพูดกับอาจารย์ต้องสุภาพ ใช้ Could you possibly…? / May I ask…? / I was wondering if… ส่วนเพื่อนสนิทพูดกันสบาย ๆ ได้ ถ้าสุภาพเกินไปกับเพื่อนจะฟังดูประชดหรือเย็นชา ตัวละครแต่ละบทบาทมีน้ำเสียงของตัวเอง ครูอาจประชดเบา ๆ เมื่อจับได้ว่านักเรียนแก้ตัว พนักงานต้องสุภาพเสมอ กับดักคือตัวเลือกที่ “เนื้อหาถูก แต่น้ำเสียงผิด” เช่น สั่งหรือแนะนำอาจารย์ตรง ๆ ว่า You should…',
        examples: [
          { s: 'Student → professor: “<strong>May I ask</strong> which style of music you prefer?”', g: 'Polite, embedded question.' },
          { s: 'Friend → friend: “<strong>Got a sec?</strong> I need to show you something.”', g: 'Fine between friends, too casual for a professor.' },
          { s: 'Staff → customer: “<strong>I do apologise, sir.</strong>”', g: 'Staff stay formal and polite.' },
          { s: 'Teacher → students on TikTok: “Oh, really? Then <strong>explain “inattentive” to the class</strong>.”', g: 'Dry teacher irony.' },
          { s: 'Friend → friend: “<strong>I would be most grateful</strong> if you passed the chips.”', g: 'Too formal: sounds sarcastic.' }
        ],
        trap: '“Right content, wrong voice”: two options mean the same thing, but one is an order (“Send me the list”) or advice to a superior (“You should post it online”). Students choose on meaning and fall in. Dodge: after choosing, read the line aloud in the character\'s voice; if you would be embarrassed to say it to that person, it is wrong.',
        analogy: {
          title: 'The dress code',
          text: 'You wear pyjamas at home, a uniform at school and a gown at graduation. Language has dress codes too. Walking into a professor\'s office in “pyjama language” (“Got a sec?”) breaks the code, and so does turning up to a sleepover in a graduation gown (“I would be most grateful…”). Match the outfit to the room.'
        },
        map: {
          center: 'Tone & register',
          branches: [
            {
              label: 'Up to a superior',
              leaves: ['May I ask…?', 'Could you possibly…?', 'I was wondering if…']
            },
            {
              label: 'Between friends',
              leaves: ['Got a sec?', 'Wanna…?', 'teasing is OK']
            },
            {
              label: 'Roles have voices',
              leaves: ['staff: always polite', 'teacher: ironic sometimes', 'student: asks, never orders']
            },
            {
              label: 'Irony signals',
              leaves: ['positive words, bad situation', '(irritated) / (sighing)', 'the listener\'s reaction']
            }
          ]
        },
        chant: {
          title: 'Who\'s Talking?',
          beat: 'snap-snap-clap (4/4)',
          lines: [
            'Who\'s talking, who\'s listening? Check before you choose,',
            'Pyjama words for friends, but a professor needs shoes.',
            '“Could you possibly…”, “May I ask…”, go up the stair,',
            '“Got a sec?” in office hours? Nobody talks like that there!',
            'Waiters stay polite, even when the soup is cold,',
            'Teachers love a bit of irony when an excuse gets old.',
            'Same meaning, different voice? Read it out loud:',
            'If it\'s wrong for the person, it\'s wrong for the crowd!'
          ]
        }
      },
      items: [
        {
          id: 't1l3s2-1',
          type: 'gap',
          tag: 'cv-register',
          level: 'B2+',
          lines: T1_L_PROF,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['Got a sec?', 'Listen to me first.', 'May I ask you something?', 'I need you to answer something.'],
          answer: 2,
          hint: 'Ploy is a student speaking to a professor. Which option is polite enough for that relationship?',
          why: 'A student opening a conversation with a professor needs a polite request: <em>May I ask you something?</em> “Got a sec?” is the near miss: it does the same job, and “Of course. What\'s on your mind?” could follow it, but it is chat between friends, not how a student addresses a professor. “Listen to me first” and “I need you to answer something” give the professor orders.'
        },
        {
          id: 't1l3s2-2',
          type: 'gap',
          tag: 'cv-register',
          level: 'C1',
          lines: T1_L_PROF,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: [
            'Why didn\'t you post it?',
            'Just send it to me tonight, OK?',
            'You should really post it online.',
            'Could you possibly post it online?'
          ],
          answer: 3,
          hint: 'The professor replies “Certainly.” Which option is a polite request, rather than an order, advice or a complaint?',
          why: '“Certainly” answers a polite request, and a student asking a professor needs softeners: <em>Could you possibly post it online?</em> “You should really post it online” asks for the same thing, but advising a professor sounds out of place. “Just send it to me tonight, OK?” is an order, and “Why didn\'t you…?” sounds like an accusation.'
        },
        {
          id: 't1l3s2-3',
          type: 'gap',
          tag: 'cv-register',
          level: 'B2+',
          lines: T1_L_PROF,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Yes, I am.', 'Yes, you are.', 'No, it was me.', 'Whatever, I can\'t remember.'],
          answer: 0,
          hint: 'The question tag is “aren\'t you?”, and Ploy then hopes her question wasn\'t silly. So did she ask it?',
          why: 'Ploy did ask the question (she hopes “it wasn\'t a silly question”), so she confirms the tag “aren\'t you?” with <em>Yes, I am.</em> “Yes, you are” uses the wrong pronoun, and “No, it was me” contradicts itself. “Whatever, I can\'t remember” is far too rude for a professor and contradicts her next sentence.'
        },
        {
          id: 't1l3s2-4',
          type: 'gap',
          tag: 'cv-register',
          level: 'C1',
          lines: T1_L_PROF,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: [
            'Same to you, Professor.',
            'Don\'t mention it, Professor.',
            'Thank you. That\'s very kind.',
            'Obviously. I always ask the best ones.'
          ],
          answer: 2,
          hint: 'The professor answers “You\'re welcome.” What did Ploy say, and how modest should a student be?',
          why: '“You\'re welcome” answers thanks, and a student receives praise modestly: <em>Thank you. That\'s very kind.</em> “Don\'t mention it” is what the professor would say, not Ploy. “Same to you” answers a wish (“Have a nice weekend”), and “Obviously. I always ask the best ones” is an arrogant tone no student would use with a professor.'
        },
        {
          id: 't1l3s2-5',
          type: 'sort',
          tag: 'cv-register',
          level: 'B2+',
          stem: 'Who would you say each line to?',
          bins: [
            { key: 'up', label: 'A professor or a stranger', hint: 'distance, respect' },
            { key: 'friend', label: 'A close friend', hint: 'relaxed, casual' }
          ],
          items: [
            { text: 'I was wondering if you could check my outline.', bin: 'up' },
            { text: 'Could you possibly repeat the last point?', bin: 'up' },
            { text: 'Would it be all right if I left a little early?', bin: 'up' },
            { text: 'Gimme a sec.', bin: 'friend' },
            { text: 'Wanna grab some noodles?', bin: 'friend' },
            { text: 'Hey, check this out!', bin: 'friend' }
          ],
          hint: 'Look for softeners like “possibly” and “I was wondering”, and for casual forms like “wanna” and “gimme”.',
          why: 'Softened, indirect requests (<em>I was wondering if…, Could you possibly…, Would it be all right if…</em>) show respect and distance, so they suit a professor or a stranger. Short, casual forms (<em>Gimme, Wanna, Hey, check this out</em>) belong between close friends.'
        }
      ]
    },
    {
      id: 't1l3s3',
      name: 'Long conversations: story, irony & the twist',
      cefr: 'C1',
      tag: 'cv-twist',
      theory: {
        key: 'A TCAS long conversation is a short story with a punchline: <strong>read the ending first</strong>, track who knows what, choose early options that stay true <em>after</em> the twist, and choose a final option that reacts <em>to</em> it.',
        body: [
          '<strong>The shape.</strong> Part II (items 13–20) is one long conversation that builds a situation and then flips it near the end. TCAS67: a dramatic balcony scene between “Rome” and “Julie”, a teenage parody of Shakespeare, full of true love, disapproving parents and promises to text every day, until Rome asks if he can take another girl to the party, and Julie\'s last blank is a two-word explosion. TCAS68: on a FaceTime call, Pum tells her Japanese friend Miko that her boyfriend Oak dumped her for a girl in Tokyo; Miko sees Pum\'s ring, recognises it, and the two girls realise Oak has been dating both of them. TCAS69: a professor lectures for an hour on Beethoven, gets irritated by “irrelevant” questions and lectures the class on listening and understanding, then discovers he is in a Chemistry class in the wrong room.',
          '<strong>How the options exploit the twist.</strong> (1) <em>Before-twist options</em>: lines that match the mood of the opening but not the ending. When the two girls discover the same ring, options like “We\'re so lucky!” or “He\'s a dream come true” fit the romance, not the betrayal; the key is the fact behind the discovery (he gave them the same ring). (2) <em>Dramatic irony</em>: one character understands less than the reader. The TCAS69 professor scolds students for not understanding while he is the one in the wrong room, so his blanks must sound confident (<em>Now that…, To make an analogy…</em>) even though we can see the joke coming. (3) <em>The final blank</em> reacts to the new reality: once the professor has apologised, a polite student cannot talk as if he were still their teacher next week.',
          '<strong>The procedure.</strong> Step 1: read the Situation and the <em>last five lines</em> before any blank. Step 2: draw a mini character map (who, relationship, what each knows, what each wants). Step 3: answer the blanks in order, but test each option against the ending: would this line still make sense to someone who knows the twist? Step 4: for the final blank ask “How does THIS character feel NOW?”, and match the size of the reaction to the size of the shock. (The idioms and discourse markers inside long conversations are trained in System 02.)'
        ],
        simple: [
          'The long conversation is a funny story with a surprise at the end. Read the end first.',
          'Remember who knows what. Some options only fit the story before the surprise.',
          'The last blank is a reaction to the surprise.'
        ],
        thai: 'บทสนทนายาว (ข้อ 13–20) เป็นเรื่องสั้นที่มี “หักมุม” ตอนท้ายเสมอ เช่น TCAS67 ความรักแบบโรมิโอกับจูเลียตที่จบด้วย Rome ขอพาผู้หญิงอื่นไปงานปาร์ตี้ TCAS68 สาวสองคนพบว่าแฟนคนเดียวกันให้แหวนเหมือนกัน และ TCAS69 อาจารย์บรรยายทั้งชั่วโมงแล้วพบว่าเข้าห้องผิด เทคนิคคืออ่าน Situation และ 5 บรรทัดสุดท้ายก่อน ติดตามว่าใครรู้อะไร แล้วเลือกคำตอบที่ยังจริงอยู่หลังหักมุม กับดักคือตัวเลือกที่เข้ากับอารมณ์ช่วงต้นเรื่อง (เช่น We\'re so lucky!) แต่ขัดกับตอนจบ',
        examples: [
          {
            s: 'Set-up: “You\'re the most important thing in my life.” → Twist: “Can I take another girl to the party?”',
            g: 'The romance makes the betrayal funnier (TCAS67 pattern).'
          },
          { s: 'Discovery: “Our rings are <strong>identical</strong>!”', g: 'The key states the fact behind the twist, not the old mood.' },
          { s: 'Irony: the professor says “Stop wasting our time!” — in the wrong room.', g: 'The character who scolds is the one who is wrong.' },
          { s: 'After the twist: “<strong>So much for our surprise.</strong>”', g: '“So much for X” = X has failed; a reaction sized to the shock.' }
        ],
        trap: 'The before-twist option: a warm, grammatical line that matches the first half of the story (love, excitement, respect) but is contradicted by the ending. Students who answer blank by blank without reading ahead choose it every time. Dodge: spoil the ending on purpose, then check every option against it.',
        analogy: {
          title: 'Rewatching a twist movie',
          text: 'The second time you watch a film with a twist, you notice every clue: the glance, the ring, the wrong room number. TCAS lets you “watch the ending first”, because the whole conversation is on the page. Read the last lines, then go back and answer like a viewer who knows the secret.'
        },
        map: {
          center: 'Long conversation',
          branches: [
            {
              label: 'Shape',
              leaves: ['set-up', 'build-up', 'twist near the end', 'final reaction']
            },
            {
              label: 'Track',
              leaves: ['who is who', 'who knows what', 'what each wants']
            },
            {
              label: 'Option traps',
              leaves: ['before-twist mood', 'reveals the twist too early', 'wrong character\'s knowledge']
            },
            {
              label: 'Past twists',
              leaves: ['Rome & Julie (TCAS67)', 'two rings, one Oak (TCAS68)', 'wrong room (TCAS69)']
            }
          ]
        },
        story: {
          title: 'Pun Refuses Spoilers',
          panels: [
            { who: 'Pun', text: 'Part II, blank 20: two girls talking about their boyfriend. “We\'re so lucky!” Easy. So romantic.' },
            { who: 'Fah', text: 'Did you read the ending first?' },
            { who: 'Pun', text: 'No way. I never read spoilers.' },
            { who: 'Fah', text: 'The examiners already spoiled it. Look: the two girls have the same ring. It\'s the same boyfriend.' },
            { who: 'Pun', text: '…So “lucky” is now “LOL”. Fine. I\'m reading the last five lines first.' },
            { who: 'Nong Bot', text: 'I always read the last page of every book first. Beep!' }
          ],
          moral: 'For once, Nong Bot is right: in Part II, spoil the ending on purpose, then choose options that are still true after the twist.'
        }
      },
      items: [
        {
          id: 't1l3s3-1',
          type: 'gap',
          tag: 'cv-twist',
          level: 'B2+',
          lines: T1_L_PARTY,
          blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['let\'s take our time.', 'let\'s play it by ear.', 'let\'s wait for Mint to join.', 'let\'s get straight to the point.'],
          answer: 3,
          hint: 'Fah continues “we don\'t have much time”. What does someone in a hurry say?',
          why: 'Fah is in a hurry (“we don\'t have much time”), so she moves the meeting forward: <em>let\'s get straight to the point.</em> “Let\'s take our time” and “let\'s play it by ear” (decide later, without a plan) contradict the hurry. “Let\'s wait for Mint to join” would ruin a surprise party, and it is the option that exploits the twist: Mint is in fact already there.'
        },
        {
          id: 't1l3s3-2',
          type: 'gap',
          tag: 'cv-twist',
          level: 'C1',
          lines: T1_L_PARTY,
          blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Is her cousin invited?', 'Does Mint even like cafés?', 'I\'m worried she\'ll find out.', 'Let\'s tell her about it tomorrow.'],
          answer: 2,
          hint: 'Pun then says Mint “notices everything”, and Fah answers “Relax”. What is Pun feeling?',
          why: 'Pun\'s reason (“Mint notices everything”) and Fah\'s reply (“Relax… she has no idea”) show that Pun is worried the secret will leak: <em>I\'m worried she\'ll find out.</em> “Is her cousin invited?” fails the tracking test: Krit, her cousin, is already on the call. “Let\'s tell her tomorrow” destroys the surprise, and “Does Mint even like cafés?” does not match “Relax”.'
        },
        {
          id: 't1l3s3-3',
          type: 'gap',
          tag: 'cv-twist',
          level: 'C1',
          lines: T1_L_PARTY,
          blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Should we cancel?', 'Pun, what about a present?', 'Pun, can you bring the cake?', 'Does Mint like chocolate cake?'],
          answer: 1,
          hint: 'Pun answers “Leave that to me” and describes a video. What job was he just given?',
          why: 'Pun takes on a job and describes a gift (a video of Mint\'s funniest moments), so Krit asked about a present: <em>Pun, what about a present?</em> “Pun, can you bring the cake?” fails the tracking test, because Krit has just said he will bring the cake. “Does Mint like chocolate cake?” ignores the mango cake already chosen, and cancelling the party contradicts the whole plan.'
        },
        {
          id: 't1l3s3-4',
          type: 'gap',
          tag: 'cv-twist',
          level: 'C1',
          lines: T1_L_PARTY,
          blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['Great, thanks for joining.', 'Hang on. I know that voice.', 'Mint! Happy early birthday!', 'Sorry, I\'ll delete that part.'],
          answer: 1,
          hint: 'Pun then asks whether Krit\'s brother is “doing impressions”. Does Pun know yet who Guest 4 is?',
          why: 'Pun recognises the voice but thinks it is someone imitating Mint (“is your brother doing impressions now?”): <em>Hang on. I know that voice.</em> “Mint! Happy early birthday!” reveals the twist too early; if Pun knew it was Mint, he would not ask about the brother. “Sorry, I\'ll delete that part” apologises to someone he thinks is the brother, and “thanks for joining” ignores the snoring protest.'
        },
        {
          id: 't1l3s3-5',
          type: 'gap',
          tag: 'cv-twist',
          level: 'C1',
          lines: T1_L_PARTY,
          blank: '(5)',
          stem: 'Choose the best option for blank (5).',
          options: ['Count me in!', 'What a relief!', 'So much for our surprise.', 'Don\'t worry, she\'ll never find out.'],
          answer: 2,
          hint: 'Mint has heard the whole plan. How does Krit feel about the “surprise” now?',
          why: 'Mint has heard everything, so the surprise has failed; <em>So much for our surprise</em> means exactly that, with a sigh. “Don\'t worry, she\'ll never find out” is the before-twist trap: it fits the plan, but Mint is the one asking. “What a relief!” and “Count me in!” do not react to a ruined secret.'
        }
      ]
    }
  ],
  check: {
    id: 't1l3ck',
    name: 'Systems Check · Reading the turn',
    items: [
      {
        id: 't1l3ck-1',
        type: 'gap',
        tag: 'cv-next',
        level: 'B2+',
        lines: T1_L_SINGER,
        blank: '(1)',
        stem: 'Choose the best option for blank (1).',
        options: ['Is this table free?', 'Is the manager here?', 'Could I see the dessert menu?', 'How long have you worked here?'],
        answer: 1,
        hint: 'The reply begins “I\'m the manager tonight, sir.” Who was the customer looking for?',
        why: '“I\'m the manager tonight” answers a question about the manager: <em>Is the manager here?</em> “Is this table free?” and “Could I see the dessert menu?” would get very different replies, and “How long have you worked here?” needs a length of time.'
      },
      {
        id: 't1l3ck-2',
        type: 'gap',
        tag: 'cv-next',
        level: 'C1',
        lines: T1_L_SINGER,
        blank: '(2)',
        stem: 'Choose the best option for blank (2).',
        options: ['He\'s far too loud.', 'He has a lovely voice.', 'Could he sing a bit louder?', 'Does he know any Thai songs?'],
        answer: 0,
        hint: 'The customer adds that he can\'t even hear his wife. Is the music too quiet or too noisy?',
        why: 'Not being able to hear his wife means the music is too noisy: <em>He\'s far too loud.</em> “Could he sing a bit louder?” is the polarity trap: it is about volume, but it asks for the opposite. “He has a lovely voice” praises the singer, and a question about Thai songs has nothing to do with the problem that follows.'
      },
      {
        id: 't1l3ck-3',
        type: 'gap',
        tag: 'cv-register',
        level: 'C1',
        lines: T1_L_SINGER,
        blank: '(3)',
        stem: 'Choose the best option for blank (3).',
        options: [
          'Don\'t mention it, sir.',
          'I\'m glad you like him, sir.',
          'Thank you for your support.',
          'I\'m terribly sorry about that, sir.'
        ],
        answer: 3,
        hint: 'The manager is staff answering an unhappy customer. Which option fits that role and that moment?',
        why: 'A manager answering a complaint apologises first, and then explains (“He\'s new…”): <em>I\'m terribly sorry about that, sir.</em> “Don\'t mention it” answers thanks, not a complaint. “I\'m glad you like him” and “Thank you for your support” misread the customer\'s tone completely.'
      },
      {
        id: 't1l3ck-4',
        type: 'gap',
        tag: 'cv-next',
        level: 'C1',
        lines: T1_L_SINGER,
        blank: '(4)',
        stem: 'Choose the best option for blank (4).',
        options: [
          'Would you mind leaving now?',
          'Did you enjoy your main course?',
          'Could I offer you a free dessert?',
          'Could you keep your voice down, sir?'
        ],
        answer: 2,
        hint: 'The customer answers “That\'s kind, but…”. What did the manager just offer?',
        why: '“That\'s kind, but…” politely declines an offer, so the manager offered something extra: <em>Could I offer you a free dessert?</em> Asking the customer to leave or to keep his voice down is not “kind”, and staff would never say it to a complaining customer. “Did you enjoy your main course?” is a yes/no question that “That\'s kind” does not answer.'
      },
      {
        id: 't1l3ck-5',
        type: 'gap',
        tag: 'cv-twist',
        level: 'C1+',
        lines: T1_L_SINGER,
        blank: '(5)',
        stem: 'Choose the best option for blank (5).',
        options: ['Then he\'s gifted.', 'Then that\'s my son.', 'Then give him a pay rise.', 'Then I\'d like his autograph.'],
        answer: 1,
        hint: 'Read the rest of the customer\'s sentence: “He told his mother and me…”. Who is Tee?',
        why: 'The customer recognises the family name, and “He told his mother and me he\'d be at the library” reveals the twist: <em>Then that\'s my son.</em> The complaining customer is the singer\'s father, and the “wife” he couldn\'t hear is Tee\'s mother. The other options react to a stranger\'s talent, which does not connect to “his mother and me”.'
      },
      {
        id: 't1l3ck-6',
        type: 'gap',
        tag: 'cv-twist',
        level: 'C1+',
        lines: T1_L_SINGER,
        blank: '(6)',
        stem: 'Choose the best option for blank (6).',
        options: ['Yes, go and get him.', 'Please turn his mic up.', 'Only after his last song.', 'There\'s no need, thank you.'],
        answer: 3,
        hint: 'Look at what Tee is already doing in the customer\'s next sentence.',
        why: 'Tee has already seen his parents and is walking over, so there is nothing for the manager to do: <em>There\'s no need, thank you.</em> “Yes, go and get him” and “Only after his last song” ask for something that is already happening. “Please turn his mic up” contradicts the customer\'s complaint about the noise, and the terrified son completes the joke.'
      }
    ]
  }
});

TOPICS.push(T1);

Object.assign(REMEDIATION, {
  'cv-react': {
    name: 'Reacting to news',
    principle: 'Label the news first: good (Congratulations!), bad (I\'m so sorry to hear that), surprising (You\'re kidding!) or a relief (What a relief!). Then check the next line to confirm the feeling. Good luck comes before an event; Congratulations comes after a success.',
    reteach: 'Put four emoji cards on the board (party, sad face, shocked face, sigh of relief) and read out ten pieces of teen news; students hold up the matching emoji, then give a phrase from that family. Next, show a TCAS-style blank where the news contains a “magnet word” (married, won, passed) but the next line shows disbelief or sadness, and ask students to justify the reaction from the next line only. Finish with timing pairs: Good luck / Congratulations / Better luck next time.',
    activities: [
      'News relay: one student reads a headline-style piece of news, the next must react with the right family and one follow-up question.',
      'Magnet-word hunt: students get four dialogues with a tempting word in the news and must circle the line that decides the real reaction.'
    ]
  },
  'cv-agree': {
    name: 'Agreeing, disagreeing & softening',
    principle: 'Set the agreement dial from the next line: a following “But…” means partial agreement. Agree with a negative sentence using Neither do I / Me neither, and answer negative questions by the facts (Isn\'t it Friday? Yes, it is).',
    reteach: 'Draw a volume slider from 0 to 10 and place phrases on it (No way, I\'m not so sure, I suppose so, Fair enough but, Exactly, You can say that again). Show how the next line reveals the position: “But…” pulls the dial down; a new supporting reason pushes it up. Then drill polarity with rapid pairs (I love it / I don\'t like it) answered with So do I / Neither do I, and contrast Thai and English logic for negative questions with a yes/no card game.',
    activities: [
      'Dial duel: pairs read a controversial school opinion; the partner must reply at a volume the teacher calls out (2, 5 or 10).',
      'Negative-question stand-up: students stand if the true answer begins “Yes” and sit if it begins “No” to questions like “Isn\'t Bangkok the capital of Thailand?”'
    ]
  },
  'cv-thanks': {
    name: 'Thanks, apologies & the right reply',
    principle: 'Name the first half of the pair before choosing. Thanks → You\'re welcome / My pleasure / Don\'t mention it. Sorry → Never mind / Don\'t worry about it / No harm done. Help that failed → Thanks anyway. I\'m afraid… = polite bad news.',
    reteach: 'Teach the idea of pairs with a handshake demonstration: a thank-you and an apology are two different hands. Build three columns (thanks / sorry / both) with the class, then show the confusables in context: Don\'t mention it after an apology, Thanks anyway after help that worked, Never mind used to give up. Finish with a TCAS-style blank where the next line (Wait, don\'t go yet…) shows that the reply was a polite goodbye.',
    activities: [
      'Socket match: cards with first lines (thanks, sorry, bad news, failed help) and reply cards; groups race to match every socket with a plug.',
      'Freeze frame: two students act a mini-scene (spilled drink, borrowed pen, sold-out book); the class freezes it and votes on the best reply.'
    ]
  },
  'cv-request': {
    name: 'Requests, offers, permission & invitations',
    principle: 'Decide who will do the action: them (request), you for them (offer), you (permission), or both of you (invitation). Would you mind…? works upside down: No, not at all = yes, go ahead; Yes, I would = no.',
    reteach: 'Write four question frames on the board and ask “Who does the action?” for each: Could you…? / Shall I…? / Can I…? / Do you want to…? Pair each with its replies. Then teach mind = be bothered by, drawing a “bother meter” so that Not at all sets it to zero. Test with quick classroom requests (Would you mind opening the door?) where students must act out the meaning of the reply they hear.',
    activities: [
      'Act the answer: the teacher asks Would you mind…? questions, students answer with a card (Not at all / I\'d rather not) and must act accordingly.',
      'Invitation chain: each student invites the next to a school event; the reply must accept or decline in a way that fits a follow-up the teacher reads out.'
    ]
  },
  'cv-complain': {
    name: 'Complaints & service recovery',
    principle: 'Follow the script: polite complaint → apology → reason (but no excuse) → fix → something extra → thanks. Check the speaker\'s role: staff never blame the customer, and nobody thanks an offer that hasn\'t been made yet.',
    reteach: 'Put the six script steps on cards and have the class order them. Read a TCAS69-style restaurant dialogue and label each line with its step and role. Then show role-reversal distractors (a waiter saying “You should have ordered earlier”, a customer saying “We\'ll do better”) and have students explain the mismatch. Stress the “___, but there\'s no excuse” pattern: the blank before it is always a reason the staff admit to.',
    activities: [
      'Pit-stop role-play: pairs perform a hotel or delivery complaint and must hit all six script steps in order within ninety seconds.',
      'Wrong mouth: the teacher reads lines aloud; students shout “customer” or “staff” and correct any line placed in the wrong mouth.'
    ]
  },
  'cv-advice': {
    name: 'Advice, suggestions & warnings',
    principle: 'Match the strength (How about / Why don\'t you → You should → You\'d better) and the time: should have + past participle criticises the past and cannot answer “What should I do?”. The reply to advice usually echoes a word from it.',
    reteach: 'Build a ladder on the board from gentle suggestions to strong warnings, then draw a timeline showing that should have points backwards. Present a dialogue where the next line echoes the advice (Every night? … worth a try) and train students to find the echo word before reading the options. Finish with register: which advice forms are too strong for a teacher or a stranger?',
    activities: [
      'Problem clinic: students write a teen problem on a slip; classmates give advice at three strengths, and the writer replies using an echo word.',
      'Too late or not yet: the teacher reads situations; students answer with should (still possible) or should have (too late) and explain the difference.'
    ]
  },
  'cv-next': {
    name: 'The line after the blank decides',
    principle: 'Cover the options and read the next line first. If it answers, match its shape (Yes, I do → a Do-question; a time → When; a place → Where; I\'m afraid not → a hopeful yes/no question). If it reacts, the blank said something worth reacting to.',
    reteach: 'Show only answers on the board (Yes, I did. / About two days ago. / Why? What happened? / Medium.) and have students write the questions. Then add four options per item and point out the right-topic, wrong-shape distractor (wh-question before “Yes, I do”, “Would you” before “I do”). Practise the five-step routine aloud with one TCAS short conversation, always checking the line before the blank last.',
    activities: [
      'Jeopardy answers: teams get answers and must produce the exact question, scoring a bonus when the auxiliary matches.',
      'Cover-and-predict: in pairs, one covers the options while the other reads only the next line; the first predicts the blank before uncovering.'
    ]
  },
  'cv-register': {
    name: 'Who is talking to whom: tone & register',
    principle: 'Label the roles first (student–professor, customer–staff, friends, teacher–class). Choose the option whose politeness and voice fit that relationship; delete lines with the right meaning but the wrong voice, such as orders or advice to a superior.',
    reteach: 'Draw a politeness ladder (Gimme a sec → Hang on → Could you give me a moment? → I was wondering if you could possibly…) and have students place new lines on it. Discuss character voices: staff stay polite, students ask rather than instruct, teachers may use dry irony. Use a TCAS67-style teacher line to show how irony works: positive or polite words in a situation where the teacher clearly isn\'t fooled.',
    activities: [
      'Dress-code swap: students rewrite casual texts to a friend as emails to a professor, and vice versa, then read both aloud.',
      'Voice line-up: the class hears one request said in four ways and ranks them by politeness for a named listener (friend, teacher, stranger, boss).'
    ]
  },
  'cv-twist': {
    name: 'Long conversations: story, irony & the twist',
    principle: 'Read the Situation and the last five lines first. Track who knows what. Reject options that fit only the mood before the twist or reveal the twist too early; the final blank reacts to the new reality.',
    reteach: 'Retell the three recent TCAS long conversations as stories (Rome and Julie, the two rings, the professor in the wrong room) and ask where the twist appears and which clues come before it. Then give a new long conversation with the ending covered, let students answer, uncover the ending and ask them to revise. Finish by building a character map (who / relationship / knows / wants) on the board for the same dialogue.',
    activities: [
      'Spoiler first: groups receive only the last five lines of a long conversation and must predict the story before seeing the rest.',
      'Twist writers: pairs write an eight-turn conversation with a twist, blank four lines, and write one before-twist distractor for each blank.'
    ]
  }
});
