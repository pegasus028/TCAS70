/* ===========================================================================
   TCAS70 — SYSTEM 10 · Clause Architecture  (topic-t10.js)
   Text Completion items 61–75: relative clauses, reduced clauses, appositives
   and noun clauses together make up about 10 of the 60 grammar items in
   TCAS66–69 (through which · which is often described · , which has caused ·
   that connect · a trend, known as · if not prepared correctly · what the
   other person says · how nations use · Whether or not · It is essential to).
   Core technique: COUNT THE VERBS. One sentence = one finite main verb per
   clause. If the main verb is already there, the blank must be non-finite or
   relative; if it is missing, the blank must supply it.
   =========================================================================== */

/* ---------------------------------------------------------- shared passages */
var T10_P_SENSOR = 'The students ___(1)___ built the new flood sensors are all members of the school’s robotics club. They tested the sensors in a canal ___(2)___ their club adviser grew up. One team member, ___(3)___ grandmother lives beside that canal, says the text alerts have already helped her family move their motorbikes to higher ground before the water arrived.';

var T10_P_BAN = 'Australia’s ban on social media for under-16s took effect in December 2025. About 4.7 million accounts had been removed by January 2026, ___(1)___ sounded like a clear success. The government safety regulator’s report, ___(2)___ in August 2026, told a different story: more than 80% of under-16s were still using social media three months after the ban. France, ___(3)___ own limit covers under-15s, began blocking new accounts on 1 September 2026.';

var T10_P_SWITCH = 'Code-switching, the habit of moving between two languages in one conversation, is a skill ___(1)___ many bilingual teenagers are quietly proud. A survey of 400 students in Bangkok, most ___(2)___ speak Thai at home and English at school, found that the extent ___(3)___ they switched depended on who was listening. With grandparents, they stayed in Thai; with classmates, they mixed freely.';

var T10_P_FOOD = 'Thai food, ___(1)___ popularity has spread far beyond Asia, is one of the country’s strongest forms of soft power. Thai chefs, many ___(2)___ trained in Bangkok, now run kitchens in London, Tokyo and New York, ___(3)___ has made dishes such as khao soi familiar to millions of diners. Yet the flavours ___(4)___ foreigners fall in love with are not always the real thing: many restaurants cut the chilli by half, a choice ___(5)___ some Thai visitors loudly complain.';

var T10_P_MICRO = 'Microplastics are tiny pieces of plastic ___(1)___ less than five millimetres across. Particles ___(2)___ by car tyres and washing machines reach rivers every time it rains. A study by Riverbank University, ___(3)___ in 2026, found microplastics in nine out of ten bottles of drinking water that its team tested.';

var T10_P_SCROLL = 'Doomscrolling, ___(1)___ endless bad news on a phone, has become a common late-night habit among teenagers. Dr Nattaya Srisuk, ___(2)___ at Riverbank University, says the habit is fed by the feed itself. Behind every app sits an algorithm, ___(3)___ which clips keep each user watching and then shows more of them.';

var T10_P_CAFFEINE = 'Caffeine can sharpen attention when ___(1)___ in small amounts. ___(2)___ late at night, however, it can delay sleep by an hour or more. While ___(3)___ for exams, many students reach for energy drinks without realising that the “boost” they feel at midnight is borrowed from the next morning.';

var T10_P_CELL = 'Cell broadcast, ___(1)___ that sends one alert to every phone in an area at the same time, was used to warn residents during the Bangkok floods of September 2026. Alerts ___(2)___ this way do not depend on phone numbers or apps. ___(3)___ correctly, the system can reach millions of people within seconds. Yet experts point out that a warning, however fast, is only useful when ___(4)___ by clear instructions. Families ___(5)___ in low-lying districts, for example, need to know not just that water is coming but where to go.';

var T10_P_VIRAL = 'When a shocking video appears in their feed, media-literacy teachers want students to pause and ask ___(1)___ before they share it. Since text-to-video apps spread in 2025, the question of ___(2)___ a fake clip has become part of everyday life. Experts say the first step is not to study the clip itself but to check ___(3)___: an account that appeared last week and has posted nothing but “breaking news” deserves suspicion.';

var T10_P_BANDEBATE = 'Parents across Asia are asking ___(1)___ a social media ban for under-16s would really protect their children. ___(2)___ the Australian ban has worked is still unclear: millions of accounts were removed, but most under-16s were still online three months later. The real debate, teachers say, is no longer about ___(3)___ to limit screen time but about how. ___(4)___ governments act or not, families will still need rules of their own.';

var T10_P_SLEEP = 'It ___(1)___ that teenagers need eight to ten hours of sleep a night, partly because their body clocks shift later during puberty. Yet it is common ___(2)___ Thai students to sleep less than seven hours before an exam. Sleep scientists agree on one simple rule: it is essential ___(3)___ the same wake-up time every day, even at weekends.';

var T10_P_AICLASS = 'Schools are still deciding ___(1)___ AI chatbots should be allowed in class at all. It ___(2)___ that students who use chatbots to write whole essays learn less, but few teachers are sure ___(3)___. ___(4)___ AI is banned or welcomed, it is vital ___(5)___ students how to check what a chatbot tells them, because a confident answer is not always a correct one.';

var T10 = {
  id: 't10', n: 10, code: 'System 10', art: 'stack',
  name: 'Clause Architecture',
  cefr: 'B2–C1',
  blurb: 'Count the verbs, then build: relative clauses, shrunken clauses and noun clauses — the grammar behind “Soft power, which is often described as…, plays a vital role”.',
  levels: []
};

/* ================================================== LEVEL 1 RELATIVE CLAUSES */
T10.levels.push({
  id: 't10l1', n: 1, name: 'Relative clauses', cefr: 'B2',
  blurb: 'A relative clause is a sentence folded into a noun. Choose the joining word by what the noun is and what job it does inside the clause.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't10l1s1', name: 'Who, which, that, whose, where — and counting the verbs', cefr: 'B2', tag: 'rc-basic',
      theory: {
        key: 'A relative word <strong>replaces a noun inside its own clause</strong>: pick it by asking what the noun is (person, thing, place) and what job it does in the clause (subject, object, owner, place).',
        body: [
          'A relative clause is two sentences welded together. <em>The students built the sensors. The students are in the robotics club.</em> becomes <em>The students <strong>who</strong> built the sensors are in the robotics club.</em> The relative word is a hinge: it stands for the noun (<em>the students</em>) and does that noun’s job inside the small clause. So you choose it with two questions. <strong>What is the noun?</strong> People → <em>who/that</em>; things → <em>which/that</em>. <strong>What job does it do in the clause?</strong> Subject or object → <em>who / which / that</em>; owner of the next noun → <em>whose</em>; a place or time with no gap in the clause → <em>where / when</em>.',
          '<strong>The gap test for where vs which.</strong> Cover the relative word and read the clause alone. If something is missing (a subject or object), you need <em>which/that</em>: <em>the canal <strong>which</strong> they tested</em> (tested what? → the canal). If the clause is complete, the noun is only a location, so you need <em>where</em> (= in which): <em>the canal <strong>where</strong> their adviser grew up</em> (grew up is complete). <em>Whose</em> is always followed straight away by a noun it owns: <em>a student <strong>whose grandmother</strong> lives there</em>, and it works for things too: <em>a city whose drains overflowed</em>.',
          '<strong>Count the verbs — the TCAS master key.</strong> Every clause has one finite verb (a verb with tense: <em>connect, is, has caused</em>). A relative clause brings its own verb, so the sentence ends up with two: one for the main clause and one for the relative clause. TCAS69 tested exactly this: <em>it is deeply tied to … the cultural threads ___ generations</em>, with the options <em>connect / that connect / are connected / that are connected</em>. The main verb <em>is</em> is already there, so a bare <em>connect</em> or <em>are connected</em> would give the sentence a second main verb with no joint. The blank needs a relative clause, and threads <em>do</em> the connecting, so the active <em>that connect</em> wins over <em>that are connected</em>.',
          '<strong>Procedure.</strong> Step 1: find the main verb of the sentence and underline it. Step 2: if it is already there, the blank must start a relative clause (or be a reduced one — Level 2). Step 3: person or thing? Step 4: gap or no gap? Owner? Step 5: active or passive — does the noun do the action or receive it?'
        ],
        simple: [
          'Who is for people. Which is for things. That is for both. Whose means “his / her / its / their”. Where means “in that place”.',
          'Cover the relative word. If the rest of the clause is complete, use where. If a subject or object is missing, use which, who or that.',
          'Count the verbs. If the sentence already has its main verb, the gap needs a relative clause like “that connect”, not a second main verb.'
        ],
        thai: 'relative pronoun ทำหน้าที่แทนคำนามในอนุประโยคของมันเอง เลือกโดยถามสองข้อ: คำนามเป็นคนหรือสิ่งของ (who/which/that) และทำหน้าที่อะไรในอนุประโยค — เป็นประธานหรือกรรม (who/which/that), เป็นเจ้าของคำนามถัดไป (whose + นาม) หรือเป็นแค่สถานที่ที่อนุประโยคสมบูรณ์แล้ว (where) เทคนิคหลักของ TCAS คือ “นับกริยา”: ถ้าประโยคหลักมีกริยาแท้แล้ว ช่องว่างต้องเป็น relative clause เช่น that connect ไม่ใช่กริยาแท้ตัวที่สองอย่าง connect หรือ are connected',
        examples: [
          { s: 'Language is tied to the cultural threads <strong>that connect</strong> generations.', g: 'Main verb “is” already exists → the blank starts a relative clause; threads do the connecting (active).' },
          { s: 'They tested the sensors in a canal <strong>where</strong> their adviser grew up.', g: '“their adviser grew up” is complete → where (= in which).' },
          { s: 'They tested the sensors in a canal <strong>which</strong> they had mapped by drone.', g: '“they had mapped ___” is missing an object → which.' },
          { s: 'A student <strong>whose grandmother</strong> lives by the canal helped test them.', g: 'whose + noun = her grandmother.' },
          { s: 'Bangkok is a city <strong>whose drains</strong> were built for less rain.', g: 'whose also works for things.' }
        ],
        trap: 'The blank sits right after a noun and the options include a bare verb (<em>connect</em>) and a relative version (<em>that connect</em>). Students read locally, see “threads connect generations” and pick the bare verb. Dodge: underline the main verb of the whole sentence first. If it already exists, a bare finite verb in the blank breaks the sentence.',
        analogy: { title: 'The Skytrain interchange', text: 'A relative word is an interchange station like Siam: it belongs to two lines at once. It sits in the main sentence as part of the noun, and it runs the small clause as that noun’s subject, object or owner. Choose the station by checking which job it does on the second line.' },
        map: { center: 'Relative words', branches: [
          { label: 'People', leaves: ['who (subject)', 'whom (formal object)', 'that (defining only)'] },
          { label: 'Things', leaves: ['which', 'that (defining only)', 'whose + noun too'] },
          { label: 'Places & times', leaves: ['where = in which', 'when = at which', 'only if clause complete'] },
          { label: 'Count the verbs', leaves: ['find the main verb', 'main verb there → relative', 'active or passive?'] }
        ] },
        story: { title: 'Nong Bot’s Extra Verb', panels: [
          { who: 'Nong Bot', text: 'Announcement! The students built the sensors are in the robotics club. Beep!' },
          { who: 'Pun', text: 'Bot, who built what? You gave one sentence two drivers and no steering wheel.' },
          { who: 'Mint', text: 'Count the verbs: “built” and “are”. Two finite verbs need a hinge between them.' },
          { who: 'T.Chris', text: 'Put in the hinge. “The students who built the sensors are in the club.” Now “who built the sensors” is one passenger riding inside the noun.' },
          { who: 'Nong Bot', text: 'Updated! The robot that is very clever is Nong Bot.' },
          { who: 'Fah', text: 'Grammatically perfect. Factually… under review.' }
        ], moral: 'Two finite verbs in one sentence? You need a relative word (or a conjunction) to join them.' },
        moves: [
          { move: 'Hold up one finger per verb you find', says: 'Count the verbs: main verb first' },
          { move: 'Link your two index fingers like a chain', says: 'Two verbs need a hinge: who / which / that' },
          { move: 'Point to a person, then to a book', says: 'Who for people, which for things' },
          { move: 'Grab something from a friend’s desk', says: 'Whose + noun: it owns the next word' },
          { move: 'Draw a circle on the floor with your foot', says: 'Where: the clause is already complete' }
        ]
      },
      items: [
        { id: 't10l1s1-1', type: 'cloze', tag: 'rc-basic', level: 'B2', passage: T10_P_SENSOR, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['who', 'whom', 'whose', 'which'], answer: 0,
          hint: 'The noun before the gap is people, and the clause after it has no subject.',
          why: '“The students” are people and they are the subject of “built”, so we need <em>who</em>. “Whom” is an object form (the students whom we met), “whose” must be followed by a noun it owns, and “which” is for things.' },

        { id: 't10l1s1-2', type: 'cloze', tag: 'rc-basic', level: 'B2', passage: T10_P_SENSOR, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['that', 'where', 'which', 'whose'], answer: 1,
          hint: 'Cover the gap and read “their club adviser grew up”. Is anything missing?',
          why: '“Their club adviser grew up” is already a complete clause; the canal is only the place, so we need <em>where</em> (= in which). “Which” and “that” would need a gap in the clause, as in “a canal which they mapped”. “Whose” needs a noun it owns after it.' },

        { id: 't10l1s1-3', type: 'cloze', tag: 'rc-basic', level: 'B2', passage: T10_P_SENSOR, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['who', 'whom', 'who’s', 'whose'], answer: 3,
          hint: 'Look at the word straight after the gap. What is the relationship between that noun and the team member?',
          why: 'The gap is followed by a noun, “grandmother”, which belongs to the team member: <em>whose</em> grandmother = her grandmother. “Who’s” sounds the same but means “who is”, which makes no sense here. “Who” and “whom” cannot be followed by a noun like this.' },

        { id: 't10l1s1-4', type: 'cloze', tag: 'rc-basic', level: 'B2+',
          passage: 'Thailand has already become an aged society, and many families now depend on community volunteers. In Bangkok, many of the volunteers ___(1)___ elderly residents with shopping and hospital visits are university students themselves.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['help', 'that help', 'are helping', 'that are helped'], answer: 1,
          hint: 'Find the main verb of the second sentence first. Is it already there?',
          why: 'The main verb of the sentence is “are” (the volunteers … <strong>are</strong> university students), so the gap must start a relative clause: <em>that help</em>. A bare “help” or “are helping” would give the sentence a second main verb with no joint. “That are helped” has the right shape but the wrong voice: the volunteers give the help, they do not receive it.' },

        { id: 't10l1s1-5', type: 'sort', tag: 'rc-basic', level: 'B2',
          stem: 'Which relative word completes each phrase?',
          bins: [
            { key: 'who', label: 'who / that', hint: 'a person doing the action' },
            { key: 'which', label: 'which / that', hint: 'a thing with a gap in the clause' },
            { key: 'whose', label: 'whose', hint: 'owner + noun' },
            { key: 'where', label: 'where', hint: 'place; clause already complete' }
          ],
          items: [
            { text: 'the nurse ___ explained the results', bin: 'who' },
            { text: 'a volunteer ___ speaks three languages', bin: 'who' },
            { text: 'the app ___ my sister downloaded', bin: 'which' },
            { text: 'a rule ___ nobody follows', bin: 'which' },
            { text: 'a singer ___ fans filled the stadium', bin: 'whose' },
            { text: 'a province ___ rice fields dried up', bin: 'whose' },
            { text: 'the café ___ we revise after school', bin: 'where' },
            { text: 'the district ___ the flood barriers failed', bin: 'where' }
          ],
          hint: 'For each phrase, cover the gap and ask: is a subject or object missing, or is a noun owned?',
          why: 'People doing the action take who/that. Things with a missing object (downloaded ___, follows ___) take which/that. When a noun follows that belongs to the head noun (fans, rice fields), use whose. When the clause is already complete (we revise after school; the barriers failed), the head noun is just a place, so use where.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't10l1s2', name: 'Non-defining clauses & sentence-level which', cefr: 'B2', tag: 'rc-nondef',
      theory: {
        key: 'After a comma, the relative clause only adds extra information, so use <strong>which / who / whose — never that</strong>; and <strong>, which</strong> can point back to a whole idea.',
        body: [
          'A <strong>defining</strong> clause tells you <em>which one</em>: <em>the students who built the sensors</em> (not the other students). A <strong>non-defining</strong> clause adds a fact about something already identified: <em>The report, which was published in 2026, told a different story.</em> Remove it and the sentence still works. Commas mark it as removable, like brackets. Because it is an extra, it cannot use <em>that</em>, and it cannot drop its relative word. So a comma followed by <em>that</em> is almost always a TCAS distractor.',
          '<strong>Sentence-level which.</strong> After a comma, <em>which</em> can refer back to the whole previous clause, not one noun: <em>4.7 million accounts were removed, <strong>which</strong> sounded like a clear success</em> (what sounded like a success? the removal of the accounts). TCAS68 tested this with dress codes that require specific colours, ___ debates about privacy: <em>that has caused / that it has caused / which has caused / which it has caused</em>. <em>That</em> is out because of the comma; <em>which it has caused</em> is out because <em>which</em> is already the subject — adding <em>it</em> gives the verb two subjects. TCAS67 used the same idea: adrenaline, ___ helps improve cognitive function → <em>which</em>.',
          '<strong>The comma-splice trap.</strong> Options like <em>, it has caused</em> or <em>, this makes</em> look fine in speech, but in writing two sentences cannot be joined with only a comma. <em>Which</em> is the glue that makes the second half legally part of the first.',
          '<strong>Procedure.</strong> Step 1: is there a comma before the gap? If yes, delete <em>that</em>. Step 2: does the clause after the gap already have a subject? If yes, <em>which</em> must be an object (<em>, which many parents had not expected</em>); if not, <em>which</em> is the subject — do not add another one. Step 3: is a noun right after the gap? Then it is <em>whose</em> (<em>France, whose own limit covers under-15s</em>).'
        ],
        simple: [
          'Commas around a relative clause = extra information. Use which or who. Never use that after a comma.',
          '“, which” can mean “and this whole thing”: <em>I failed the quiz, which made me sad.</em>',
          'Do not join two sentences with only a comma and “it”. Use which.'
        ],
        thai: 'non-defining relative clause คืออนุประโยคที่ให้ข้อมูลเพิ่มเติมและมีเครื่องหมายจุลภาคคั่น ตัดทิ้งได้โดยประโยคยังสมบูรณ์ ใช้ which/who/whose เท่านั้น ห้ามใช้ that หลัง comma และ “, which” ยังใช้แทนความทั้งประโยคข้างหน้าได้ (sentence-level which) เช่น …, which has caused debates กับดักของ TCAS คือตัวเลือกที่มี that หลัง comma หรือ which it has caused ที่มีประธานซ้อนสองตัว และ comma + it ซึ่งเป็น comma splice',
        examples: [
          { s: 'The toilet is also expensive, <strong>which makes</strong> it less practical.', g: 'which = the fact that it is expensive (sentence-level).' },
          { s: 'Stress releases adrenaline, <strong>which helps</strong> improve alertness.', g: 'which = adrenaline; subject of “helps”.' },
          { s: 'The report, <strong>which was published in 2026</strong>, told a different story.', g: 'extra information in commas; no “that”.' },
          { s: 'France, <strong>whose</strong> own limit covers under-15s, began on 1 September 2026.', g: 'comma + whose + noun.' },
          { s: 'Mint got up at 4 a.m. to revise, <strong>which</strong> her mother had never seen before.', g: 'which is the object; the clause already has a subject (her mother).' }
        ],
        trap: 'A comma before the gap and a smooth-sounding <em>that</em> option (<em>, that has caused</em>). It sounds natural aloud, so students pick it. Dodge: the moment you see a comma before the gap, cross out every option starting with <em>that</em>, then check that <em>which</em> is not given a second subject (<em>which it has caused</em>).',
        analogy: { title: 'The fan-cam caption', text: 'A defining clause is the name on the jersey: without it you do not know which member it is. A non-defining clause is the fan caption under a photo of someone everybody already knows — fun extra, removable. Captions come in brackets (commas), and that never gets a caption.' },
        map: { center: 'Comma + relative', branches: [
          { label: 'Defining', leaves: ['no commas', 'tells which one', 'that allowed'] },
          { label: 'Non-defining', leaves: ['commas like brackets', 'extra, removable', 'never that'] },
          { label: 'Sentence which', leaves: ['refers to whole idea', '…, which has caused', '…, which makes it'] },
          { label: 'Traps', leaves: ['comma + that', 'which it (two subjects)', 'comma + it (splice)'] }
        ] },
        chant: { title: 'Comma, Which', beat: 'stomp-clap, stomp-clap (4/4)', lines: [
          'Comma on the left? Then that must go,',
          'Which or who or whose — that’s all you know.',
          'Which can point back to the whole idea,',
          '“…which caused debates” — the link is clear.',
          'Don’t add “it” when which is already there,',
          'One subject, one verb, that’s fair and square.',
          'Comma plus it? That’s a splice, my friend —',
          'Put which in the joint and the sentence won’t bend!'
        ] }
      },
      items: [
        { id: 't10l1s2-1', type: 'cloze', tag: 'rc-nondef', level: 'B2', passage: T10_P_BAN, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['it', 'that', 'what', 'which'], answer: 3,
          hint: 'What sounded like a success: one noun, or the whole fact before the comma?',
          why: 'The gap refers to the whole previous idea (4.7 million accounts being removed), and it follows a comma, so we need sentence-level <em>which</em>. “That” cannot follow a comma in a relative clause. “It” would join two sentences with only a comma (a comma splice). “What” introduces a noun clause, not an add-on after a comma.' },

        { id: 't10l1s2-2', type: 'cloze', tag: 'rc-nondef', level: 'B2', passage: T10_P_BAN, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['was published', 'which published', 'that was published', 'which was published'], answer: 3,
          hint: 'Count the verbs in the sentence first, then look at the commas and at who did the publishing.',
          why: 'The sentence already has its main verb, “told”, so the gap cannot be another main verb like “was published”. It is inside commas, which rules out “that was published”. A report does not publish anything itself; it is published, so we need the passive: <em>which was published</em>.' },

        { id: 't10l1s2-3', type: 'cloze', tag: 'rc-nondef', level: 'B2', passage: T10_P_BAN, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['its', 'which', 'whose', 'that its'], answer: 2,
          hint: 'The gap is followed straight away by a noun phrase, “own limit”. Also check the comma before the gap.',
          why: 'The gap is followed by the noun phrase “own limit”, which belongs to France, so we need the possessive relative <em>whose</em>. “Its” would create a second sentence inside the first with no joint (“France, its own limit covers…, began”). “Which” cannot be followed directly by a noun here, and “that” can never follow a comma.' },

        { id: 't10l1s2-4', type: 'spot', tag: 'rc-nondef', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The Hat Yai floods of November 2025,', 'that the media called a once-in-300-years event,', 'swept through homes and hospitals', 'across the city.'],
          answer: 1, fix: 'which the media called a once-in-300-years event,',
          hint: 'Look at the punctuation around the middle of the sentence.',
          why: 'The clause sits between commas, so it is non-defining: it adds information about floods we have already identified. Non-defining clauses cannot use <em>that</em>; they need <em>which</em>. The main verb “swept through” and the rest of the sentence are correct.' },

        { id: 't10l1s2-5', type: 'build', tag: 'rc-nondef', level: 'B2',
          stem: 'Build one sentence meaning: Mint revised until 2 a.m. This explains why she fell asleep in the exam.',
          tiles: ['Mint', 'revised', 'until 2 a.m.,', 'which', 'explains', 'why', 'she fell asleep', 'in the exam.'],
          solution: 'Mint revised until 2 a.m., which explains why she fell asleep in the exam.', alt: [],
          hint: 'The second idea refers to the whole first sentence. Which word can do that after a comma?',
          why: 'Sentence-level <em>which</em> after a comma refers back to the whole idea “Mint revised until 2 a.m.” and becomes the subject of “explains”. This joins the two ideas legally in one sentence without a comma splice (“…2 a.m., this explains…”).' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't10l1s3', name: 'Preposition + which/whom, most of whom', cefr: 'B2+', tag: 'rc-prep',
      theory: {
        key: 'When the clause’s verb or noun needs a preposition, the preposition can move to the front: <strong>through which, on whom, to which, most of whom</strong> — but never <em>through that</em> or <em>on who</em>.',
        body: [
          'Some verbs and nouns come with a fixed preposition: <em>rely <strong>on</strong>, be proud <strong>of</strong>, communicate <strong>through</strong>, the extent <strong>to</strong> which</em>. When such a phrase goes into a relative clause, the preposition has two possible seats. Informal: at the end (<em>the app <strong>which</strong> I rely <strong>on</strong></em>). Formal, and loved by TCAS: at the front, glued to the relative word (<em>the app <strong>on which</strong> I rely</em>). After a preposition only <em>which</em> (things) and <em>whom</em> (people) are allowed — never <em>that</em>, never <em>who</em>.',
          '<strong>How TCAS tests it.</strong> TCAS66: <em>Body language is a major factor through ___ men and women communicate differently</em> — options <em>why / what / when / which</em>. Only <em>which</em> can follow a preposition as a relative. To choose the preposition itself, take the relative clause out and rebuild it as a normal sentence: <em>men and women communicate differently <strong>through</strong> body language</em> → <em>through which</em>. <em>They are proud <strong>of</strong> a skill</em> → <em>a skill of which they are proud</em>. <em>They switched <strong>to</strong> an extent</em> → <em>the extent to which they switched</em>.',
          '<strong>Quantity + of whom / of which.</strong> After a comma, a quantity word can lead the clause: <em>400 students, <strong>most of whom</strong> speak Thai at home</em>; <em>three apps, <strong>none of which</strong> worked</em>. The near-miss is <em>most of them speak</em>: it sounds fine but creates a second sentence joined only by a comma. <em>Whom</em> is the joint; <em>them</em> is not.',
          '<strong>The double-preposition trap.</strong> Use the preposition once. <em>The flavours with which foreigners fall in love <strong>with</strong></em> is wrong; either <em>the flavours (which) foreigners fall in love with</em> or <em>the flavours with which foreigners fall in love</em>.'
        ],
        simple: [
          'Some words need a partner preposition: rely on, proud of, through. In a relative clause the preposition can jump to the front: <em>on which, of which, through which</em>.',
          'After a preposition, use which (things) or whom (people). Never that. Never who.',
          '<em>most of whom, some of which</em> join the sentence. <em>most of them</em> does not.'
        ],
        thai: 'เมื่อกริยาหรือคำนามในอนุประโยคต้องใช้ preposition คู่กัน (rely on, proud of, communicate through, the extent to) เราย้าย preposition ไปไว้หน้า relative pronoun ได้ เช่น through which, on whom, to which หลัง preposition ใช้ได้แค่ which (สิ่งของ) และ whom (คน) ห้ามใช้ that หรือ who วิธีหา preposition ที่ถูกคือแยก relative clause ออกมาเขียนเป็นประโยคธรรมดา นอกจากนี้ most of whom / some of which ใช้เชื่อมประโยคได้ แต่ most of them ทำให้เกิด comma splice และอย่าใส่ preposition ซ้ำสองที่',
        examples: [
          { s: 'Body language is a major factor <strong>through which</strong> men and women communicate differently.', g: 'communicate through a factor → through which.' },
          { s: 'Code-switching is a skill <strong>of which</strong> many teenagers are proud.', g: 'proud of a skill → of which.' },
          { s: 'The survey asked 400 students, <strong>most of whom</strong> speak Thai at home.', g: 'quantity + of whom; one sentence.' },
          { s: 'The extent <strong>to which</strong> they switched depended on the listener.', g: 'the extent to which = how much.' },
          { s: 'The teacher <strong>on whom</strong> we rely most is retiring. / The teacher (who) we rely <strong>on</strong> most is retiring.', g: 'formal front preposition vs informal end preposition.' }
        ],
        trap: 'Four options that all contain <em>which</em> with different prepositions (<em>which / in which / of which / to which</em>). Students pick the preposition that “sounds nice”. Dodge: rebuild the clause as a plain sentence with the head noun back inside it; the verb or adjective will demand its own preposition.',
        analogy: { title: 'The carry-on bag', text: 'The preposition is a carry-on bag that belongs to the verb (rely on, proud of). When the relative clause boards, the bag can travel at the back of the plane (the app I rely on) or be carried up front by which (on which I rely). It can’t be in both places, and only which and whom are allowed to carry it.' },
        map: { center: 'Preposition + relative', branches: [
          { label: 'Find the partner', leaves: ['rely on → on which', 'proud of → of which', 'the extent to which'] },
          { label: 'Allowed after prep', leaves: ['which (things)', 'whom (people)', 'never that / who'] },
          { label: 'Quantity + of', leaves: ['most of whom', 'some / none of which', 'not: most of them'] },
          { label: 'Traps', leaves: ['preposition twice', 'wrong preposition', 'in which = where'] }
        ] },
        story: { title: 'Pun’s Double Bag', panels: [
          { who: 'Pun', text: 'My speech: “Gaming is a hobby with which I am obsessed with.” Very formal, right?' },
          { who: 'Fah', text: 'Formal and doubled. You packed the preposition twice.' },
          { who: 'Pun', text: 'Fine. “Gaming is a hobby that I am obsessed.”' },
          { who: 'Mint', text: 'Now you lost the bag completely. Obsessed with what?' },
          { who: 'T.Chris', text: 'Rebuild it: “I am obsessed with gaming.” So: “a hobby with which I am obsessed” or “a hobby I am obsessed with”. One bag, one seat.' },
          { who: 'Nong Bot', text: 'Correction logged. Pun is a student with whom teachers are patient. Beep.' }
        ], moral: 'Find the preposition in the plain sentence, then put it in one place only.' }
      },
      items: [
        { id: 't10l1s3-1', type: 'cloze', tag: 'rc-prep', level: 'B2+', passage: T10_P_SWITCH, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['which', 'of that', 'in which', 'of which'], answer: 3,
          hint: 'Rebuild the clause: many bilingual teenagers are quietly proud ___ a skill.',
          why: 'We say “proud <strong>of</strong> something”, so the preposition <em>of</em> moves to the front: a skill <em>of which</em> they are proud. “Which” alone leaves “proud” without its preposition, “in which” uses the wrong preposition, and “that” can never follow a preposition.' },

        { id: 't10l1s3-2', type: 'cloze', tag: 'rc-prep', level: 'B2+', passage: T10_P_SWITCH, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['whom', 'of them', 'of whom', 'of which'], answer: 2,
          hint: 'The sentence already has a main verb later (“found”). The gap must join, not start a new sentence.',
          why: '<em>Most of whom</em> joins the extra information about the 400 students to the sentence, whose main verb is “found”. “Most of them speak” sounds natural but makes a second sentence joined only by a comma. “Of which” is for things, not students, and “most whom” is not English.' },

        { id: 't10l1s3-3', type: 'cloze', tag: 'rc-prep', level: 'B2+', passage: T10_P_SWITCH, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['which', 'to which', 'in which', 'of which'], answer: 1,
          hint: 'Rebuild the clause as a plain sentence: they switched ___ a certain extent. Which preposition does “extent” take?',
          why: 'We say “<strong>to</strong> a large extent” or “<strong>to</strong> what extent”, so the relative form is the extent <em>to which</em> they switched (= how much they switched). “Which” alone leaves the preposition out; “in which” and “of which” use prepositions that “extent” does not take.' },

        { id: 't10l1s3-4', type: 'choose', tag: 'rc-prep', level: 'B2+',
          stem: 'Which sentence is correct?',
          options: [
            'The coach on whom the team relies has retired.',
            'The coach on who the team relies has retired.',
            'The coach on that the team relies has retired.',
            'The coach on whom the team relies on has retired.'
          ], answer: 0,
          hint: 'Two checks: which relative words may follow a preposition, and how many times can the preposition appear?',
          why: 'After a preposition, a person takes <em>whom</em>: the coach <em>on whom</em> the team relies. “On who” and “on that” are not possible after a preposition. The last sentence uses the preposition twice (on whom … relies on), which is a classic error.' },

        { id: 't10l1s3-5', type: 'spot', tag: 'rc-prep', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The flood barriers,', 'most of them had been reinforced', 'after last year’s floods,', 'held back the water for two days.'],
          answer: 1, fix: 'most of which had been reinforced',
          hint: 'Find the main verb of the whole sentence. How is the middle part joined to it?',
          why: 'The main verb is “held back”, so the middle part must be a relative clause: <em>most of which</em> had been reinforced. “Most of them had been reinforced” is a complete sentence dropped in between commas with no joint. Barriers are things, so the form is “of which”, not “of whom”.' }
      ]
    }
  ],
  check: { id: 't10l1ck', name: 'Systems Check · Relative clauses', items: [
    { id: 't10l1ck-1', type: 'cloze', tag: 'rc-basic', level: 'B2+', passage: T10_P_FOOD, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['its', 'whom', 'which', 'whose'], answer: 3,
      hint: 'Look at the word right after the gap, and at the commas around the clause.',
      why: '“Popularity” belongs to Thai food, so we need <em>whose</em> popularity. “Its” would place a full sentence inside the subject with no joint, “which” cannot be followed directly by a noun like this, and “whom” is for people as objects.' },
    { id: 't10l1ck-2', type: 'cloze', tag: 'rc-prep', level: 'B2+', passage: T10_P_FOOD, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['who', 'of them', 'of whom', 'of which'], answer: 2,
      hint: 'Chefs are people. The sentence’s main verb (“run”) comes later.',
      why: 'After “many”, the joint for people is <em>of whom</em>: Thai chefs, many of whom trained in Bangkok, now run kitchens… “Many of them trained” would drop a second full sentence between commas. “Of which” is for things, and “many who” is not the standard pattern after a quantity word.' },
    { id: 't10l1ck-3', type: 'cloze', tag: 'rc-nondef', level: 'B2+', passage: T10_P_FOOD, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['it', 'this', 'that', 'which'], answer: 3,
      hint: 'What has made khao soi familiar: one noun, or the whole situation before the comma?',
      why: 'The gap follows a comma and refers to the whole idea (Thai chefs running kitchens abroad), so we need sentence-level <em>which</em>. “That” cannot follow a comma here, and “it” or “this” would create a comma splice by joining two sentences with only a comma.' },
    { id: 't10l1ck-4', type: 'cloze', tag: 'rc-prep', level: 'C1', passage: T10_P_FOOD, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['which', 'whose', 'in which', 'with which'], answer: 0,
      hint: 'Read to the end of the clause. Is the preposition already there?',
      why: 'The clause already ends with its preposition: foreigners fall in love <strong>with</strong> the flavours. So we need plain <em>which</em>. “With which” would put the preposition in twice (with which … fall in love with). “In which” adds a wrong preposition, and “whose” needs a noun after it.' },
    { id: 't10l1ck-5', type: 'cloze', tag: 'rc-prep', level: 'C1', passage: T10_P_FOOD, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['which', 'about that', 'about what', 'about which'], answer: 3,
      hint: 'Rebuild it: some Thai visitors loudly complain ___ a choice.',
      why: 'We complain <strong>about</strong> something, and the clause has no preposition at the end, so the preposition moves to the front: a choice <em>about which</em> visitors complain. “That” cannot follow a preposition, “about what” starts a noun clause rather than describing “a choice”, and plain “which” leaves “complain” without its preposition.' },
    { id: 't10l1ck-6', type: 'choose', tag: 'rc-basic', level: 'C1',
      stem: 'Which sentence is grammatically correct?',
      options: [
        'Many of the apps teenagers use them every day collect personal data.',
        'Many of the apps that teenagers use every day collect personal data.',
        'Many of the apps teenagers use every day they collect personal data.',
        'Many of the apps which teenagers use them every day collect personal data.'
      ], answer: 1,
      hint: 'Count the verbs and count the objects of “use”. Nothing should appear twice.',
      why: 'In the correct sentence the relative clause “that teenagers use every day” has its object gap (use ___ = the apps), and “collect” is the single main verb. Adding “them” fills the gap twice, and adding “they” gives the main verb a second subject. Relative clauses never repeat the noun they replace.' }
  ] }
});

/* ================================================== LEVEL 2 SHRINKING CLAUSES */
T10.levels.push({
  id: 't10l2', n: 2, name: 'Shrinking clauses', cefr: 'B2+',
  blurb: 'Take out the relative word and “be”, and a clause shrinks to -ing, -ed or a bare noun phrase. The trick is to know what is left and who is doing what.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't10l2s1', name: 'Reduced relatives: -ing (active) vs -ed (passive)', cefr: 'B2+', tag: 'rc-reduced',
      theory: {
        key: 'A reduced relative is a relative clause with <strong>who/which + be</strong> taken out (or with <em>who/which</em> + active verb shrunk to -ing): the noun <strong>does</strong> the action → <strong>-ing</strong>; the noun <strong>receives</strong> it → <strong>-ed / past participle</strong>.',
        body: [
          'You already use participle clauses in your own writing (<em>Having finished the test, Mint…</em>). A reduced relative is the same machine attached to a noun instead of a sentence. Start with the full clause and delete the relative word and its <em>be</em>: <em>particles <s>which are</s> released by tyres</em> → <strong>particles released by tyres</strong>; <em>a trend <s>which is</s> known as the Flynn Effect</em> → <strong>a trend known as</strong>; <em>Pun, <s>who is</s> sleeping in class</em> → <strong>Pun sleeping in class</strong>. Even clauses without <em>be</em> can shrink: an active verb turns into -ing: <em>pieces of plastic <s>which measure</s> less than 5 mm</em> → <strong>pieces of plastic measuring</strong>; <em>students <s>who live</s></em> → <strong>students living</strong> in dorms.',
          '<strong>Active or passive?</strong> Turn the phrase back into a sentence with the noun as subject. <em>The particles release…?</em> No — something releases the particles, so they are <strong>released</strong>. <em>The pieces measure less than 5 mm?</em> Yes — active, so <strong>measuring</strong>. A study <em>published</em> in 2026 (someone published it); students <em>living</em> in dorms (they live there). The -ed form is not about the past here; it is about <strong>receiving</strong> the action.',
          '<strong>Count the verbs.</strong> The reduced form has no tense, so it can never be the main verb. TCAS67 opened Passage 1 with a two-blank sentence: <em>Soft power, ___(61)___ as the ability to influence others…, ___(62)___ a vital role</em>. Options for 61: <em>often describes / is often described / which often describes / which is often described</em>. Blank 62 must be the main verb (<em>plays</em>), so 61 cannot be finite: <em>is often described</em> is out. Soft power does not describe anything; it <em>is described</em>, so the active options are out. That leaves <em>which is often described</em>. (The reduced form <em>often described as</em> would also be correct, but it was not offered — take the correct full form when the short one is missing.)',
          '<strong>Procedure.</strong> Step 1: find or predict the main verb. Step 2: if it exists, the blank is non-finite (-ing/-ed) or a full relative (which is …). Step 3: rebuild with the noun as subject: does it do the action or receive it?'
        ],
        simple: [
          'Short clauses can drop “who is / which are”: <em>the rules (that were) introduced last year</em>. An active verb can shrink to -ing too: <em>pieces (which measure) → pieces measuring</em>.',
          'The noun does the action → -ing (<em>students living in dorms</em>). The noun receives the action → -ed (<em>a study published in 2026</em>).',
          'A short -ing or -ed form is never the main verb. Look for the main verb elsewhere.'
        ],
        thai: 'reduced relative clause คือ relative clause ที่ตัด who/which + be ออก เหลือแค่ V-ing หรือ V3 (และ relative clause ที่ไม่มี be ก็ย่อได้ โดยเปลี่ยนกริยา active เป็น V-ing เช่น pieces which measure → pieces measuring) ถ้าคำนามเป็นผู้ทำ ใช้ V-ing (students living in dorms) ถ้าคำนามเป็นผู้ถูกกระทำ ใช้ V3 (a study published in 2026) V3 ตรงนี้ไม่ได้บอกอดีต แต่บอกความหมายแบบ passive เคล็ดลับคือ “นับกริยา” — รูปย่อไม่ใช่กริยาแท้ ดังนั้นประโยคต้องมีกริยาหลักอยู่ที่อื่น เช่น Soft power, which is often described as …, plays a vital role',
        examples: [
          { s: 'Microplastics are pieces of plastic <strong>measuring</strong> less than five millimetres.', g: 'which measure → measuring: the pieces have that size (active) → -ing; main verb “are”.' },
          { s: 'Particles <strong>released</strong> by car tyres reach rivers.', g: 'tyres release the particles (passive) → -ed.' },
          { s: 'Soft power, <strong>which is often described</strong> as the ability to attract, plays a vital role.', g: 'main verb “plays” → blank is a relative clause, passive.' },
          { s: 'The rules <strong>introduced</strong> last year ban phones in class.', g: 'the rules were introduced → -ed; main verb “ban”.' },
          { s: 'Students <strong>living</strong> in dorms sleep less than those at home.', g: 'who live → living; main verb “sleep”.' }
        ],
        trap: 'Students treat -ed as “past” and -ing as “now”, so a past-tense passage pulls them towards -ed even when the noun is doing the action, and a present-tense passage pulls them towards -ing (<em>particles releasing by tyres</em> ✗). Dodge: ignore time completely; turn the phrase into “The noun ___s …” and ask whether the noun does or receives the action.',
        analogy: { title: 'The shrink ray', text: 'A reduced relative is a relative clause zapped by a shrink ray: “which are” disappears and only the verb’s costume is left. The costume tells you the role: -ing is the player on the pitch (doing), -ed is the ball (being kicked). A shrunken clause can ride along with a noun, but it can never drive the sentence.' },
        map: { center: 'Reduced relatives', branches: [
          { label: 'Active → -ing', leaves: ['which measure → measuring', 'students living in dorms', 'noun does the action'] },
          { label: 'Passive → -ed', leaves: ['a study published in 2026', 'a trend known as', 'noun receives action'] },
          { label: 'Count the verbs', leaves: ['short form ≠ main verb', 'main verb elsewhere', 'Soft power … plays'] },
          { label: 'Full form OK', leaves: ['which is often described', 'pick it if short missing'] }
        ] },
        story: { title: 'The Shrink Ray', panels: [
          { who: 'Nong Bot', text: 'New gadget: Shrink Ray! Watch. “The study which was published in 2026” … ZAP!' },
          { who: 'Nong Bot', text: '“The study publishing in 2026.” Perfectly shrunk. Beep!' },
          { who: 'Fah', text: 'You shrank it into a study that publishes things. Studies don’t publish; they are published.' },
          { who: 'Pun', text: 'Zap me next. “Pun, who is sleeping in class” → “Pun sleeping in class.” Accurate, sadly.' },
          { who: 'T.Chris', text: 'The ray deletes “which was”; it doesn’t change who does the action. The study was published → published. Pun is sleeping → sleeping.' },
          { who: 'Mint', text: 'So the costume stays honest: -ing for doers, -ed for receivers.' }
        ], moral: 'Reducing a clause never changes active into passive, or passive into active.' },
        moves: [
          { move: 'Point your finger forward like a laser', says: 'Zap “who is / which are” out of the clause' },
          { move: 'Kick an imaginary ball', says: '-ing: the noun does the action' },
          { move: 'Duck as if the ball hits you', says: '-ed: the noun receives the action' },
          { move: 'Hold the steering wheel, then shake your head', says: 'A shrunken clause never drives: find the main verb' }
        ]
      },
      items: [
        { id: 't10l2s1-1', type: 'cloze', tag: 'rc-reduced', level: 'B2+', passage: T10_P_MICRO, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['measure', 'measured', 'measuring', 'are measuring'], answer: 2,
          hint: 'The main verb is “are”. Rebuild the clause with “pieces” as subject: do they do this, or is it done to them?',
          why: 'The sentence already has its main verb, “are”, so the gap is a reduced relative. The full clause is “which measure less than five millimetres”: the pieces themselves have that size, which is active, so the clause shrinks to <em>measuring</em>. “Measured” would mean someone measured them. “Measure” and “are measuring” would add a second main verb.' },

        { id: 't10l2s1-2', type: 'cloze', tag: 'rc-reduced', level: 'B2+', passage: T10_P_MICRO, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['release', 'released', 'releasing', 'are released'], answer: 1,
          hint: 'Find the main verb of the sentence. Then ask: who releases whom?',
          why: 'The main verb is “reach”, so the gap must be a reduced relative, not a finite verb like “release” or “are released”. Car tyres and washing machines release the particles, so the particles receive the action: <em>released</em> by car tyres. “Releasing” would mean the particles release something.' },

        { id: 't10l2s1-3', type: 'cloze', tag: 'rc-reduced', level: 'B2+', passage: T10_P_MICRO, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['published', 'publishing', 'was published', 'which published'], answer: 0,
          hint: 'The main verb of this sentence is “found”. Then ask who did the publishing.',
          why: 'The main verb is “found”, so the gap inside the commas cannot be a finite verb like “was published”. A study does not publish anything; it is published, so we need the passive reduced form <em>published</em> (= which was published). “Publishing” and “which published” are both active.' },

        { id: 't10l2s1-4', type: 'sort', tag: 'rc-reduced', level: 'B2+',
          stem: 'Does the gap need -ing (active) or -ed (passive)?',
          bins: [
            { key: 'ing', label: '-ing (the noun does it)', hint: 'students living…' },
            { key: 'ed', label: '-ed (the noun receives it)', hint: 'a study published…' }
          ],
          items: [
            { text: 'Tourists ___ Phuket in the rainy season pay less. (visit)', bin: 'ing' },
            { text: 'Volunteers ___ in first aid joined the rescue. (train)', bin: 'ed' },
            { text: 'The rules ___ last year ban phones in class. (introduce)', bin: 'ed' },
            { text: 'Anyone ___ a mask outdoors breathes in less PM2.5. (wear)', bin: 'ing' },
            { text: 'Clips ___ with AI often look perfectly real. (make)', bin: 'ed' },
            { text: 'Water ___ down the Chao Phraya from the dam raised river levels in Bangkok. (flow)', bin: 'ing' }
          ],
          hint: 'Put the noun in front of the verb as a subject. Does it make sense as an action it performs?',
          why: 'Tourists visit, anyone wears, water flows: the noun does the action, so -ing. Volunteers are trained, rules are introduced, clips are made (by someone else): the noun receives the action, so -ed/past participle. Time has nothing to do with it.' },

        { id: 't10l2s1-5', type: 'cloze', tag: 'rc-reduced', level: 'C1',
          passage: 'Songkran, ___(1)___ as the world’s biggest water fight, has become one of Thailand’s best-known exports. Every April, it draws visitors from all over the world to cities such as Bangkok and Chiang Mai.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['describes', 'is described', 'which describes', 'which is described'], answer: 3,
          hint: 'The main verb of the first sentence is “has become”. Who does the describing?',
          why: 'The main verb is “has become”, so the blank cannot be another main verb (“describes”, “is described”). Songkran does not describe anything; people describe it, so we need a passive relative: <em>which is described</em> as the world’s biggest water fight. “Which describes” has the right shape but the wrong voice — the same trap as TCAS67’s “Soft power, which is often described as…”.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't10l2s2', name: 'Appositives & commas', cefr: 'B2+', tag: 'rc-appos',
      theory: {
        key: 'An appositive is a <strong>noun phrase that renames the noun next to it</strong> — <em>Dr Nattaya, a psychologist, …</em> — so it has <strong>no verb of its own</strong> and sits inside commas.',
        body: [
          'An appositive is the smallest clause of all: a relative clause shrunk until only the noun phrase is left. <em>Dr Nattaya Srisuk, <s>who is</s> a psychologist at Riverbank University, says…</em> → <em>Dr Nattaya Srisuk, <strong>a psychologist at Riverbank University</strong>, says…</em>. The appositive can carry its own describers: a reduced relative (<em>a trend known as the Flynn Effect</em>), a full relative (<em>a system that learns</em>), a gerund phrase (<em>the habit of scrolling</em>).',
          '<strong>How TCAS tests it.</strong> TCAS69 wrote <em>IQ scores rose steadily, ___ as the “Flynn Effect”</em> with options <em>a trend known / a trend, known / a trend is known / a trend, is known</em>. The sentence already has its subject and verb (<em>IQ scores rose</em>), and <em>a trend …</em> sums up that whole idea. Any option containing <em>is</em> adds a second main verb, which turns the sentence into a comma splice. So step one is always the same: <strong>an appositive has no finite verb</strong>. Also watch for appositives that sum up a whole clause (<em>…rose steadily, a trend known as…</em>) — they work like sentence-level which.',
          '<strong>The commas.</strong> A non-defining appositive in the middle of a sentence needs <strong>two</strong> commas, one on each side, like brackets: <em>My cousin, Krit, plays football</em> (I have one cousin). Forgetting the second comma leaves the appositive swallowing the verb: <em>Krit, a keen footballer trains every day</em> ✗. A defining appositive has no commas: <em>my cousin Krit</em> (I have several cousins; this one).',
          '<strong>Procedure.</strong> Step 1: find the main subject and verb. Step 2: delete every option with a finite verb (<em>is, was, has</em>) or a pronoun + verb (<em>it is</em>). Step 3: check that the remaining option is a noun phrase that matches the noun it renames, and that any inner clause is complete (<em>a system that learns</em>).'
        ],
        simple: [
          'An appositive gives a second name to a noun: <em>Fah, our debate captain, won again.</em>',
          'It has no verb of its own. If an option has “is” or “it is”, it cannot be an appositive.',
          'In the middle of a sentence, put commas on both sides.'
        ],
        thai: 'appositive คือนามวลีที่วางต่อจากคำนามเพื่อเรียกหรืออธิบายสิ่งเดียวกันอีกชื่อหนึ่ง เช่น Dr Nattaya, a psychologist, says… ไม่มีกริยาแท้ของตัวเอง และถ้าอยู่กลางประโยคต้องมี comma ปิดหน้า–หลังเหมือนวงเล็บ กับดักของ TCAS คือตัวเลือกที่มี is หรือ it is ซึ่งทำให้ประโยคมีกริยาหลักสองตัว (comma splice) เช่นข้อ a trend, known as the Flynn Effect ตัวเลือกที่มี is ผิดทันที',
        examples: [
          { s: 'IQ scores rose steadily, <strong>a trend known as the Flynn Effect</strong>.', g: 'the appositive sums up the whole clause; no “is”.' },
          { s: 'Dr Nattaya Srisuk, <strong>a psychologist at Riverbank University</strong>, studies sleep.', g: 'two commas; renames the person.' },
          { s: 'Doomscrolling, <strong>the habit of scrolling through bad news</strong>, is spreading.', g: 'appositive with a gerund phrase inside.' },
          { s: 'Behind every app sits an algorithm, <strong>a system that learns</strong> what you watch.', g: 'appositive containing a full relative clause.' },
          { s: 'My friend <strong>Pun</strong> never revises.', g: 'defining appositive: no commas (I have several friends).' }
        ],
        trap: 'An option like <em>is a psychologist</em> or <em>it is a system</em> sounds complete and “more grammatical”, because it has a verb. Dodge: count the verbs. If the sentence already has its main verb, any verb inside the commas must be inside a relative clause (<em>who is</em>, <em>that learns</em>), never loose.',
        analogy: { title: 'The name tag at the fan meet', text: 'An appositive is the name tag the organisers stick on an idol: “Lisa, a member of BLACKPINK”. The tag names the same person and never speaks. If the tag starts talking (“is a member”), it’s no longer a tag — it’s a second sentence shouting over the first.' },
        map: { center: 'Appositives', branches: [
          { label: 'What it is', leaves: ['noun phrase', 'renames the noun', 'no finite verb'] },
          { label: 'Commas', leaves: ['two commas mid-sentence', 'none if defining', 'my cousin Krit'] },
          { label: 'Inside it', leaves: ['a trend known as', 'a system that learns', 'the habit of -ing'] },
          { label: 'Kill options', leaves: ['is + noun', 'it is + noun', 'that after comma'] }
        ] },
        chant: { title: 'Name Tag', beat: 'snap-snap-clap (4/4)', lines: [
          'Name the noun a second time,',
          'Comma, name, comma — keep it in line.',
          'No “is”, no “it”, the tag can’t speak,',
          'The main verb’s there, don’t make it weak.',
          '“A trend known as”, “a system that learns”,',
          'The noun gets renamed — the verb just returns.',
          'Two commas in the middle, like brackets tight,',
          'Name, not sentence — and the answer’s right!'
        ] }
      },
      items: [
        { id: 't10l2s2-1', type: 'cloze', tag: 'rc-appos', level: 'B2+', passage: T10_P_SCROLL, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['the habit of scrolling through', 'is the habit of scrolling through', 'which the habit of scrolling through', 'it is the habit of scrolling through'], answer: 0,
          hint: 'The sentence’s main verb comes after the second comma. What can sit between the commas without a verb?',
          why: 'The main verb is “has become”, so the part between the commas must be an appositive — a noun phrase that renames doomscrolling: <em>the habit of scrolling through</em> endless bad news. “Is the habit” and “it is the habit” add a second main verb, and “which the habit” is a relative word with no verb after it.' },

        { id: 't10l2s2-2', type: 'cloze', tag: 'rc-appos', level: 'B2+', passage: T10_P_SCROLL, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['a psychologist', 'is a psychologist', 'she is a psychologist', 'that is a psychologist'], answer: 0,
          hint: 'Find the main verb that follows the second comma. Then check the punctuation before the gap.',
          why: 'The main verb is “says”, so the gap is an appositive: Dr Nattaya Srisuk, <em>a psychologist</em> at Riverbank University, says… “Is a psychologist” and “she is a psychologist” both drop a second subject-and-verb into a sentence that already has one, and “that is a psychologist” puts “that” after a comma, which a non-defining clause never allows.' },

        { id: 't10l2s2-3', type: 'cloze', tag: 'rc-appos', level: 'C1', passage: T10_P_SCROLL, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['a system learns', 'a system, it learns', 'a system that learns', 'a system that it learns'], answer: 2,
          hint: 'The sentence already has “sits”. The appositive may contain a clause, but that clause needs a proper joint.',
          why: 'The main verb is “sits”, so “an algorithm” is renamed by an appositive, and the appositive can carry its own relative clause: <em>a system that learns</em> which clips keep each user watching. “A system learns” and “a system, it learns” add loose finite verbs. In “a system that it learns”, the subject is doubled: “that” is already the subject of “learns”.' },

        { id: 't10l2s2-4', type: 'choose', tag: 'rc-appos', level: 'B2+',
          stem: 'Mint has only one cousin. Which sentence is punctuated correctly?',
          options: [
            'Mint’s cousin, Krit a keen footballer trains every evening.',
            'Mint’s cousin, Krit, a keen footballer, trains every evening.',
            'Mint’s cousin Krit, a keen footballer trains every evening.',
            'Mint’s cousin, Krit, a keen footballer trains every evening.'
          ], answer: 1,
          hint: 'Each extra name or description in the middle of a sentence needs a comma on both sides.',
          why: 'Both “Krit” (the only cousin, so non-defining) and “a keen footballer” are appositives in the middle of the sentence, so each needs a comma on both sides, leaving “trains” as the main verb: <em>Mint’s cousin, Krit, a keen footballer, trains…</em> The other options forget a closing comma, so the appositive runs straight into the verb. “Mint’s cousin Krit” without a comma would also suggest she has more than one cousin.' },

        { id: 't10l2s2-5', type: 'spot', tag: 'rc-appos', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['In 2025, a new app went viral,', 'it is a tool that turns', 'a one-line prompt', 'into a realistic video.'],
          answer: 1, fix: 'a tool that turns',
          hint: 'The first part already has a subject and main verb. How can the second part rename the app?',
          why: '“A new app went viral” is already a complete clause, so the second part must be an appositive that renames the app: <em>a tool that turns</em> a prompt into a video. “It is a tool” starts a second sentence joined only by a comma — a comma splice.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't10l2s3', name: 'Reduced adverbial clauses: when used, if not prepared', cefr: 'C1', tag: 'ac-reduced',
      theory: {
        key: 'Adverbial clauses can shrink too — <strong>keep the conjunction, drop the subject + be</strong> (<em>when experienced in moderation, if not prepared correctly, while studying</em>) — but only if the hidden subject is the main clause’s subject.',
        body: [
          'You know participle clauses without a conjunction (<em>Feeling tired, Mint went to bed</em>). English also lets you keep the conjunction for a clearer meaning: <em>when, while, if, unless, once, although, before, after, until</em>. The hidden words are <strong>subject + be</strong>: <em>when <s>it is</s> experienced in moderation</em>; <em>if <s>it is</s> not prepared correctly</em>; <em>while <s>they are</s> revising</em>. After <em>before, after, since</em> (which are also prepositions), the -ing form is the normal choice: <em>after finishing the test</em>.',
          '<strong>The dangling check.</strong> The deleted subject must be the <strong>same</strong> as the main clause’s subject. <em>Stress can have positive effects when experienced in moderation</em> — stress is experienced ✓. <em>When cooked too long, Pun’s mother says the noodles go soft</em> ✗ — this says his mother was cooked. In a TCAS item, the main subject is your pronoun: put it into the gap and rebuild.',
          '<strong>-ing or -ed?</strong> Rebuild the full clause with the main subject: <em>fugu can be dangerous if <s>it is</s> not prepared correctly</em> → the fish receives the preparing → <strong>prepared</strong> (TCAS68: <em>if not correct prepared / if not correct preparing / if not prepared correctly / if not preparing correctly</em>; also note the adverb <em>correctly</em> describes the verb). <em>Stress … when <s>it is</s> experienced</em> → passive (TCAS67: <em>experience / experiences / experienced / experiencing</em>). <em>Many students drink coffee while <s>they are</s> revising</em> → they do it → -ing.',
          '<strong>Procedure.</strong> Step 1: find the main clause’s subject. Step 2: plug it in after the conjunction with <em>is/are</em>. Step 3: does it do or receive the action? -ing or -ed. Step 4: kill finite options (<em>when is used, when experiences</em>) — the reduced clause has no tense.'
        ],
        simple: [
          'You can shorten “when it is used” to “when used”, and “while they are studying” to “while studying”. Keep the little word (when, if, while).',
          'The missing subject must be the same as the subject of the main sentence.',
          'Does the subject do the action? Use -ing. Does it receive the action? Use -ed.'
        ],
        thai: 'adverbial clause ย่อได้โดยเก็บคำเชื่อม (when, while, if, unless, once, although) ไว้ แล้วตัด “ประธาน + be” ออก เช่น when (it is) experienced in moderation, if (it is) not prepared correctly, while (they are) studying เงื่อนไขสำคัญคือประธานที่ถูกตัดต้องเป็นตัวเดียวกับประธานของประโยคหลัก (ไม่เช่นนั้นเกิด dangling modifier) เลือก V-ing หรือ V3 โดยเอาประธานประโยคหลักใส่กลับเข้าไป — ถ้าเป็นผู้ทำใช้ V-ing ถ้าถูกกระทำใช้ V3 และห้ามเลือกรูปที่มี tense เช่น when is used',
        examples: [
          { s: 'Stress can have positive effects on students when <strong>experienced</strong> in moderation.', g: 'when stress is experienced → passive.' },
          { s: 'Fugu can be a dangerous gift if not <strong>prepared correctly</strong>.', g: 'if it is not prepared → passive; adverb after the verb.' },
          { s: 'While <strong>revising</strong> for exams, many students drink energy drinks.', g: 'while they are revising → active.' },
          { s: 'Once <strong>installed</strong>, the app sends alerts automatically.', g: 'once it is installed → passive.' },
          { s: '✗ When cooked too long, Pun’s mother says the noodles go soft.', g: 'dangling: the mother was not cooked. ✓ When cooked too long, noodles go soft.' }
        ],
        trap: 'The -ing form looks “active and alive”, so students write <em>if not preparing correctly</em> or <em>when experiencing in moderation</em> about a thing that cannot act. Dodge: put the main subject back in (<em>if fugu is not ___</em>): fugu cannot prepare anything, so it must be <em>prepared</em>.',
        analogy: { title: 'The Grab rider who keeps the address pin', text: 'A shrunken adverbial clause is a Grab rider who travels light: she leaves the subject and “be” at home but always keeps the address pin — the conjunction — so the driver knows the route (when? if? while?). And she can only ride if she is the same person as the account owner: the main subject.' },
        map: { center: 'Reduced adverbials', branches: [
          { label: 'Keep', leaves: ['the conjunction', 'when / while / if / once', 'although / unless'] },
          { label: 'Drop', leaves: ['subject + be', 'no tense left'] },
          { label: '-ing or -ed', leaves: ['subject does → -ing', 'subject receives → -ed', 'if not prepared correctly'] },
          { label: 'Dangling check', leaves: ['hidden subject = main', 'plug it back in'] }
        ] },
        moves: [
          { move: 'Hold up a pin between finger and thumb', says: 'Keep the conjunction: when, if, while' },
          { move: 'Brush off your shoulders twice', says: 'Drop the subject and “be”' },
          { move: 'Point from the gap to the main subject', says: 'Same subject — or it dangles' },
          { move: 'Kick (doing) or duck (receiving)', says: '-ing if it acts, -ed if it is acted on' }
        ]
      },
      items: [
        { id: 't10l2s3-1', type: 'cloze', tag: 'ac-reduced', level: 'C1', passage: T10_P_CAFFEINE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['consume', 'consumed', 'consuming', 'is consumed'], answer: 1,
          hint: 'Which words have been left out after “when”? Put them back and decide whether caffeine does or receives the action.',
          why: 'The hidden words are “it is”: when (caffeine is) <em>consumed</em> in small amounts. Caffeine is taken in by people, so the passive form is needed. “Consuming” would mean caffeine consumes something, “consume” has no subject, and “is consumed” keeps a verb with no subject after the conjunction.' },

        { id: 't10l2s3-2', type: 'cloze', tag: 'ac-reduced', level: 'C1', passage: T10_P_CAFFEINE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['Taken', 'Taking', 'To take', 'Having taken'], answer: 0,
          hint: 'The subject of the main clause is “it” (caffeine). Can caffeine take anything?',
          why: 'The hidden subject is the main subject, caffeine, and caffeine is taken by people: (If it is) <em>taken</em> late at night, it can delay sleep. “Taking” and “Having taken” would mean caffeine took something, which is a dangling modifier. “To take late at night” gives a purpose meaning that does not fit.' },

        { id: 't10l2s3-3', type: 'cloze', tag: 'ac-reduced', level: 'C1', passage: T10_P_CAFFEINE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['revise', 'revised', 'revising', 'they revising'], answer: 2,
          hint: 'Who is doing the action after “While”? Find the subject of the main clause.',
          why: 'The main subject is “many students”, and they are the ones revising: while (they are) <em>revising</em> for exams. The action is active, so -ing. “Revised” would make the students the thing being revised, “revise” has no subject, and “they revising” has a subject but no “are”.' },

        { id: 't10l2s3-4', type: 'choose', tag: 'ac-reduced', level: 'C1',
          stem: 'Which sentence is correct?',
          options: [
            'Once installed, the app sends flood alerts automatically.',
            'Once installing, the app sends flood alerts automatically.',
            'Once it installed, the app sends flood alerts automatically.',
            'Once installed, Krit said the app sends flood alerts automatically.'
          ], answer: 0,
          hint: 'Check two things: who is the hidden subject, and does that subject do or receive the installing?',
          why: 'The hidden subject is the app, and the app is installed by the user: <em>Once installed, the app sends…</em> “Once installing” makes the app do the installing. In “Once installed, Krit said…” the main subject is Krit, so it says Krit was installed — a dangling modifier. “Once it installed” is active: the app installed something.' },

        { id: 't10l2s3-5', type: 'sort', tag: 'ac-reduced', level: 'C1',
          stem: 'Complete each reduced clause: -ing (the subject does it) or -ed (the subject receives it)?',
          bins: [
            { key: 'ing', label: '-ing', hint: 'the main subject does it' },
            { key: 'ed', label: '-ed', hint: 'the main subject receives it' }
          ],
          items: [
            { text: 'Although ___ as a joke, the clip was shared as real news. (post)', bin: 'ed' },
            { text: 'When ___ a new language, children copy sounds first. (learn)', bin: 'ing' },
            { text: 'If ___ properly, rice can be kept for months. (store)', bin: 'ed' },
            { text: 'Before ___ the exam hall, students must switch off their phones. (enter)', bin: 'ing' },
            { text: 'Unless ___ with sunscreen, skin burns within minutes. (protect)', bin: 'ed' },
            { text: 'While ___ home, Fah saw the floodwater rising. (walk)', bin: 'ing' }
          ],
          hint: 'Put the main subject back after the conjunction with “is/are” and test the meaning.',
          why: 'The clip was posted, rice is stored and skin is protected: each subject receives the action, so -ed. Children learn, students enter, Fah walks: each subject does the action, so -ing. The conjunction stays; only the subject and “be” disappear.' }
      ]
    }
  ],
  check: { id: 't10l2ck', name: 'Systems Check · Shrinking clauses', items: [
    { id: 't10l2ck-1', type: 'cloze', tag: 'rc-appos', level: 'C1', passage: T10_P_CELL, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['a technology', 'is a technology', 'it is a technology', 'which a technology'], answer: 0,
      hint: 'The main verb comes after the second comma. What can rename “Cell broadcast” without a verb?',
      why: 'The main verb is “was used”, so the part between the commas is an appositive that renames cell broadcast: <em>a technology</em> that sends one alert… Options with “is” or “it is” add a second main verb (a comma splice), and “which a technology” has a relative word with no verb.' },
    { id: 't10l2ck-2', type: 'cloze', tag: 'rc-reduced', level: 'C1', passage: T10_P_CELL, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['sent', 'sending', 'were sent', 'are sending'], answer: 0,
      hint: 'The main verb is “do not depend”. Who does the sending?',
      why: 'The main verb is “do not depend”, so the gap is a reduced relative. Alerts are sent by the system, so we need the passive <em>sent</em> (= which are sent) this way. “Sending” and “are sending” are active, and “were sent” / “are sending” would add a second main verb.' },
    { id: 't10l2ck-3', type: 'cloze', tag: 'ac-reduced', level: 'C1', passage: T10_P_CELL, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['Use', 'Using', 'If used', 'If using'], answer: 2,
      hint: 'The main subject is “the system”. Who does the using?',
      why: 'The hidden subject is the system, and the system is used by people: <em>If (it is) used</em> correctly, the system can reach millions. “Using” and “If using” make the system the user — a dangling modifier. “Use” turns the start into an instruction to the reader.' },
    { id: 't10l2ck-4', type: 'cloze', tag: 'ac-reduced', level: 'C1', passage: T10_P_CELL, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['follow', 'followed', 'following', 'is followed'], answer: 1,
      hint: 'What has been left out after “when”? Rebuild the full clause and check the word after the gap.',
      why: 'The hidden subject is “a warning”, and the word “by” shows that the instructions do the action: when (it is) <em>followed</em> by clear instructions. “Following by” mixes active form with a passive “by”, and “is followed” keeps a finite verb with no subject after “when”.' },
    { id: 't10l2ck-5', type: 'cloze', tag: 'rc-reduced', level: 'C1', passage: T10_P_CELL, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['live', 'lived', 'living', 'are living'], answer: 2,
      hint: 'The main verb is “need”. Do the families live there themselves?',
      why: 'The main verb is “need”, so the gap is a reduced relative. The families do the living, so the active form is right: families <em>living</em> (= who live) in low-lying districts. “Lived” would be passive, and “live” and “are living” add a second main verb.' },
    { id: 't10l2ck-6', type: 'choose', tag: 'rc-reduced', level: 'C1+',
      stem: 'Choose the option that best completes the sentence: “Muay Thai, ___ as the art of eight limbs, ___ visitors from all over the world to training camps across Thailand.”',
      options: ['known / attracts', 'is known / attracting', 'which knows / attracts', 'is known / attracts'], answer: 0,
      hint: 'The sentence needs exactly one main verb. Which blank should carry it?',
      why: 'The second blank must be the main verb (<em>attracts</em>), so the first blank must be non-finite: <em>known</em> as the art of eight limbs (= which is known). “Is known / attracts” gives two main verbs, “is known / attracting” puts the main verb in the wrong place and leaves the sentence broken, and “which knows” is active — Muay Thai does not know anything.' }
  ] }
});

/* ===================================================== LEVEL 3 NOUN CLAUSES */
T10.levels.push({
  id: 't10l3', n: 3, name: 'Noun clauses', cefr: 'C1',
  blurb: 'A whole clause can sit in a noun’s seat — as subject, object or after a preposition. Inside it, the order is a statement, never a question.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't10l3s1', name: 'Embedded questions: statement order', cefr: 'C1', tag: 'nc-embedded',
      theory: {
        key: 'When a question becomes part of a sentence, it turns into a noun and <strong>loses its question order</strong>: wh-word + subject + verb, with <strong>no do/does/did</strong>.',
        body: [
          'A direct question flips subject and auxiliary to signal “I am asking”: <em>What <strong>does</strong> the other person <strong>say</strong>?</em> Once that question is placed inside another sentence, the outer sentence is doing the asking (or knowing, or wondering), so the inner clause goes back to normal statement order: <em>Women show interest in <strong>what the other person says</strong>.</em> The embedded question now works like a noun — it can be an object (<em>ask where the clip came from</em>), a subject (<em>How nations use soft power matters</em>) or the object of a preposition (<em>the question of how nations use soft power</em>).',
          '<strong>How TCAS tests it.</strong> The four options are the same words in different orders, and usually one agreement error is thrown in. TCAS66: <em>what the other person says / what is the other person say / what does the other person say / what do the other person says</em>. TCAS67: <em>The question of ___ soft power</em> → <em>how nations use / how nation uses / how do nations use / how does nations use</em>. TCAS68: <em>an example of ___ surprising inventions</em> → <em>how creativity and technology can lead to</em>, with the modal kept before the verb. Three checks decide every one: statement order, no <em>do/does/did</em>, and subject–verb agreement inside the clause.',
          '<strong>Subject questions do not change.</strong> When the wh-word is itself the subject, question and statement order are the same: <em>Who posted it?</em> → <em>check who posted it</em>. That is why “who posted it” looks the same in both, and why you should not add <em>did</em> (<em>who did post it</em> is emphatic, not neutral).',
          '<strong>Punctuation follows the outer sentence.</strong> <em>Do you know where the shelter is?</em> takes a question mark because the outer sentence is a question; <em>I wonder where the shelter is.</em> takes a full stop. Procedure: Step 1: spot the wh-word after a verb like <em>ask, know, check, wonder, explain</em> or after a preposition. Step 2: delete options with <em>do/does/did</em> or with the verb before the subject. Step 3: check agreement.'
        ],
        simple: [
          'Question: <em>Where is the shelter?</em> Inside a sentence: <em>Do you know where the shelter <strong>is</strong>?</em>',
          'After ask / know / wonder / the question of, use normal order: wh-word + subject + verb.',
          'No do, does or did inside. <em>I don’t know what she wants</em>, not <em>what does she want</em>.'
        ],
        thai: 'embedded question คือคำถามที่ถูกฝังอยู่ในประโยคอื่นและทำหน้าที่เป็นคำนาม (เป็นกรรมหลัง ask/know/check หรือหลัง preposition เช่น the question of) ต้องเรียงแบบบอกเล่า: wh-word + ประธาน + กริยา และห้ามมี do/does/did เช่น what the other person says, how nations use ตัวเลือกใน TCAS มักเป็นคำชุดเดียวกันสลับลำดับ บวกกับข้อผิดเรื่อง subject–verb agreement ดังนั้นให้ตัดตัวเลือกที่เรียงแบบคำถามก่อน แล้วค่อยเช็ค agreement',
        examples: [
          { s: 'Women show interest in <strong>what the other person says</strong>.', g: 'object of “in”; statement order; says agrees with person.' },
          { s: 'The question of <strong>how nations use</strong> soft power is increasingly relevant.', g: 'after “of”; no do; plural nations → use.' },
          { s: 'It is an example of <strong>how creativity and technology can lead to</strong> surprising inventions.', g: 'modal stays before the verb.' },
          { s: 'Check <strong>who posted</strong> the clip first.', g: 'subject question: same order either way.' },
          { s: 'Do you know <strong>where the nearest shelter is</strong>?', g: 'question mark belongs to the outer question.' }
        ],
        trap: 'Students translate straight from the question they hear in their head (<em>What does she say?</em>) and choose <em>what does the other person say</em>. Dodge: the moment the wh-word follows a verb or preposition inside a sentence, say the clause as an answer (“the other person says…”) and choose that order.',
        analogy: { title: 'The folded paper plane', text: 'A direct question is a paper plane with its wings up, ready to fly at someone. When you tuck it inside a sentence, you fold the wings flat so it fits in the envelope: the subject and verb go back to normal order, and the do/does/did wing is folded away completely.' },
        map: { center: 'Embedded questions', branches: [
          { label: 'Where they sit', leaves: ['after ask / know / check', 'after a preposition', 'as a subject'] },
          { label: 'Order', leaves: ['wh + subject + verb', 'no do / does / did', 'modal before verb'] },
          { label: 'Checks', leaves: ['statement order', 'subject–verb agreement', 'subject questions unchanged'] },
          { label: 'Punctuation', leaves: ['? only if outer question', 'I wonder … .'] }
        ] },
        story: { title: 'Nong Bot Asks Directions', panels: [
          { who: 'Nong Bot', text: 'Excuse me, can you tell me where is the flood shelter? Beep!' },
          { who: 'Krit', text: 'Sure… but you asked two questions at once. “Can you tell me” is already the question.' },
          { who: 'Nong Bot', text: 'Then: can you tell me where does the shelter be?' },
          { who: 'Fah', text: 'Worse! Inside the sentence it’s just information: “where the shelter is”.' },
          { who: 'T.Chris', text: 'One question per sentence, Bot. The outer part asks; the inner part reports, in statement order.' },
          { who: 'Nong Bot', text: 'Can you tell me where the shelter is? … Nobody knows why my battery is flat. Beep.' }
        ], moral: 'Only the outer sentence gets to be a question. The inner clause is a statement.' },
        chant: { title: 'Fold It Flat', beat: 'clap-snap-clap-snap (4/4)', lines: [
          'A question has its wings up high,',
          '“Where is it?” — watch it fly.',
          'Tuck it in a sentence, fold it flat:',
          '“I know where it is” — just like that.',
          'No do, no does, no did inside,',
          'Subject first, then verb beside.',
          'The question of how nations use —',
          'Statement order: you can’t lose!'
        ] }
      },
      items: [
        { id: 't10l3s1-1', type: 'cloze', tag: 'nc-embedded', level: 'C1', passage: T10_P_VIRAL, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['where the clip came from', 'where came the clip from', 'from where came the clip', 'where did the clip come from'], answer: 0,
          hint: 'The question is inside the sentence after “ask”. Which order does an embedded question use?',
          why: 'After “ask”, the question becomes an embedded question, so it needs statement order with no “did”: ask <em>where the clip came from</em>. “Where did the clip come from” is direct-question order, and the other two options put the verb before the subject.' },

        { id: 't10l3s1-2', type: 'cloze', tag: 'nc-embedded', level: 'C1', passage: T10_P_VIRAL, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['how viewer spots', 'how viewers spot', 'how do viewers spot', 'how does viewers spot'], answer: 1,
          hint: 'Two checks after “the question of”: word order, and whether the verb agrees with its subject.',
          why: 'After the preposition “of”, the clause is embedded, so it takes statement order without “do”: the question of <em>how viewers spot</em> a fake clip. “How do viewers spot” is question order, and “how does viewers spot” is also wrong in agreement. “How viewer spots” has the right order but a singular noun with no article, which is not possible here.' },

        { id: 't10l3s1-3', type: 'cloze', tag: 'nc-embedded', level: 'C1', passage: T10_P_VIRAL, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['what did the account post before', 'what has the account posted before', 'what the account has posted before', 'what the account has posted it before'], answer: 2,
          hint: 'After “check”, use the order of an answer, not a question. Then make sure nothing is repeated.',
          why: 'After “check” the question is embedded, so it needs statement order: check <em>what the account has posted before</em>. “What has the account posted” and “what did the account post” keep question order. In “what the account has posted it before”, “it” fills the object slot that “what” already fills, so the object appears twice.' },

        { id: 't10l3s1-4', type: 'build', tag: 'nc-embedded', level: 'C1',
          stem: 'Build a polite question to ask a stranger during a flood.',
          tiles: ['Could you', 'tell me', 'where', 'the nearest', 'flood shelter', 'is?'],
          solution: 'Could you tell me where the nearest flood shelter is?', alt: [],
          hint: 'Only the start of the sentence is a question. What order does the part after “where” take?',
          why: '“Could you tell me” is the real question, so the embedded part goes in statement order: <em>where the nearest flood shelter is</em>. The question mark belongs to the outer question. “Where is the nearest flood shelter” would be a second question inside the first.' },

        { id: 't10l3s1-5', type: 'spot', tag: 'nc-embedded', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Our teacher asked us', 'why did we choose', 'climate migration', 'as our project topic.'],
          answer: 1, fix: 'why we had chosen (or: why we chose)',
          hint: 'The question is being reported inside a statement. Check the order after the wh-word.',
          why: 'The question is embedded after “asked us”, so it must use statement order with no “did”: asked us <em>why we had chosen</em> (or “why we chose”) climate migration. “Why did we choose” keeps direct-question order.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't10l3s2', name: 'Whether vs if, whether or not', cefr: 'C1', tag: 'nc-whether',
      theory: {
        key: '<em>If</em> and <em>whether</em> both mean “yes or no?” after verbs like <em>ask, know, wonder</em>; <strong>everywhere else — at the start, after a preposition, before <em>to</em>, and right before <em>or not</em> — only <em>whether</em> works</strong>.',
        body: [
          'A yes/no question has no wh-word to carry it into a sentence, so English lends it one: <em>Will the ban protect children?</em> → <em>Parents are asking <strong>whether/if</strong> the ban will protect children.</em> After common verbs (<em>ask, know, wonder, see, check, find out</em>), <em>if</em> and <em>whether</em> are both fine. But <em>if</em> is also the conditional word, so English only lets it introduce a noun clause in that one safe seat — right after verbs like <em>ask, know</em> and <em>wonder</em> (or adjectives like <em>not sure</em>). In every other seat, <em>whether</em> is the only choice.',
          '<strong>Whether-only seats.</strong> (1) As the subject at the start: <em><strong>Whether</strong> the ban has worked is still unclear.</em> (2) After a preposition: <em>the debate about <strong>whether</strong> to act</em>, <em>depends on <strong>whether</strong> it rains</em>. (3) Before a to-infinitive: <em>deciding <strong>whether</strong> to apply</em>. (4) Directly before <em>or not</em>: <em><strong>whether or not</strong> it works</em> (you can say <em>if it works or not</em>, but never <em>if or not</em>).',
          '<strong>Whether … or not as a linker.</strong> TCAS69 closed a passage with <em>___ they are effective, exams still…</em> — the key was <em>Whether or not</em>. Here the clause is not a noun at all; it means “it doesn’t matter if…”: <em><strong>Whether</strong> governments act <strong>or not</strong>, families will need their own rules.</em> <em>If</em> cannot do this job, and <em>Unless</em> or <em>Although</em> change the logic.',
          '<strong>Procedure.</strong> Step 1: is the meaning “yes or no?” (not a condition)? Step 2: where is the clause — right after <em>ask/know/wonder</em>? Then either word. At the start, after a preposition, before <em>to</em> or <em>or not</em>? Then <em>whether</em>. Step 3: if the clause means “it doesn’t matter”, look for <em>Whether … or not</em>.'
        ],
        simple: [
          '<em>if</em> and <em>whether</em> both work after ask / know / wonder: <em>I wonder if/whether it will rain.</em>',
          'Use only <em>whether</em> at the start of a sentence, after a preposition, before “to”, and before “or not”.',
          '<em>Whether you like it or not</em> = it doesn’t matter if you like it.'
        ],
        thai: 'if และ whether ใช้นำ noun clause แบบคำถาม yes/no ได้ทั้งคู่เมื่ออยู่หลังกริยาอย่าง ask, know, wonder แต่ตำแหน่งอื่นต้องใช้ whether เท่านั้น ได้แก่ ขึ้นต้นประโยคเป็นประธาน (Whether the ban has worked is unclear), หลัง preposition (about whether), หน้า to-infinitive (whether to apply) และติดกับ or not (whether or not) นอกจากนี้ Whether … or not ยังใช้ในความหมาย “ไม่ว่าจะ…หรือไม่ก็ตาม” ซึ่ง if, unless, although ใช้แทนไม่ได้',
        examples: [
          { s: 'Parents are asking <strong>if</strong> a ban would protect their children.', g: 'after “ask”: if or whether.' },
          { s: '<strong>Whether</strong> the Australian ban has worked is still unclear.', g: 'subject at the start: whether only.' },
          { s: 'The debate is about <strong>whether</strong> to limit screen time.', g: 'after a preposition + before “to”: whether only.' },
          { s: '<strong>Whether or not</strong> they are effective, exams still shape school life.', g: '= it doesn’t matter if; whether only.' },
          { s: 'I’m not sure <strong>if</strong> the test is online <strong>or not</strong>.', g: '“or not” at the end is fine with if; “if or not” never.' }
        ],
        trap: 'The blank is at the very start of the sentence, and students pick <em>If</em> because a sentence starting with If feels familiar (conditionals). Dodge: read on to the main verb. If the clause is the subject of that verb (<em>___ it has worked <strong>is</strong> unclear</em>), it is a noun clause, and only <em>Whether</em> can start it.',
        analogy: { title: 'The VIP wristband', text: '<em>Whether</em> has a VIP wristband: it can go anywhere in the venue — the front row (start of the sentence), backstage (after a preposition), the after-party (before to and or not). <em>If</em> has a general ticket: it is allowed in one zone only, right after verbs like ask, know and wonder.' },
        map: { center: 'whether / if', branches: [
          { label: 'Both OK', leaves: ['after ask / know', 'after wonder / check', 'if … or not (at end)'] },
          { label: 'Whether only', leaves: ['start of sentence', 'after a preposition', 'before to-infinitive', 'whether or not'] },
          { label: 'Linker use', leaves: ['Whether … or not,', '= it doesn’t matter if'] },
          { label: 'Traps', leaves: ['If at the start', 'about if', 'if or not'] }
        ] },
        moves: [
          { move: 'Shrug with both palms up', says: 'Yes or no? — if or whether' },
          { move: 'Point to your lips (after “ask”)', says: 'After ask / know / wonder: both are fine' },
          { move: 'Flash a wristband on your wrist', says: 'Start, after a preposition, before to: whether only' },
          { move: 'Wave both hands “never mind”', says: 'Whether … or not = it doesn’t matter' }
        ]
      },
      items: [
        { id: 't10l3s2-1', type: 'cloze', tag: 'nc-whether', level: 'C1', passage: T10_P_BANDEBATE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['if', 'that', 'what', 'which'], answer: 0,
          hint: 'Parents are asking a yes/no question. Which word carries a yes/no question into a sentence?',
          why: 'The parents’ question is yes/no (Would a ban protect them?), and after “ask” it becomes a noun clause introduced by <em>if</em> (or whether). “That” reports a statement, not a question. “What” and “which” need a missing noun in the clause, but “a ban would protect their children” is already complete.' },

        { id: 't10l3s2-2', type: 'cloze', tag: 'nc-whether', level: 'C1', passage: T10_P_BANDEBATE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['If', 'What', 'Which', 'Whether'], answer: 3,
          hint: 'Read on to the main verb “is”. What is the subject of “is still unclear”?',
          why: 'The whole clause “___ the Australian ban has worked” is the subject of “is still unclear”, so it is a yes/no noun clause at the start of the sentence — a seat only <em>Whether</em> can fill. “If” cannot begin a subject clause. “What” and “which” need a gap in the clause, but the clause is complete.' },

        { id: 't10l3s2-3', type: 'cloze', tag: 'nc-whether', level: 'C1', passage: T10_P_BANDEBATE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['if', 'that', 'which', 'whether'], answer: 3,
          hint: 'Look at the word before the gap and the word after it.',
          why: 'The gap follows the preposition “about” and comes before a to-infinitive (“to limit”). Both positions allow only <em>whether</em>: the debate is about <em>whether</em> to limit screen time. “If” is not possible after a preposition or before “to”, and “that” and “which” cannot introduce “to limit”.' },

        { id: 't10l3s2-4', type: 'cloze', tag: 'nc-whether', level: 'C1+', passage: T10_P_BANDEBATE, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['If', 'Unless', 'Whether', 'Although'], answer: 2,
          hint: 'Notice the words “or not” later in the clause. What does the sentence mean overall?',
          why: 'The clause means “it doesn’t matter if governments act”, and it is paired with “or not”, so we need <em>Whether</em> … or not. “If” does not carry the “it doesn’t matter” meaning, “Unless … or not” is not a pattern, and “Although” would state that governments act, which the sentence does not say.' },

        { id: 't10l3s2-5', type: 'sort', tag: 'nc-whether', level: 'C1',
          stem: 'Can the gap take both if and whether, or only whether?',
          bins: [
            { key: 'both', label: 'if or whether', hint: 'right after ask / know / wonder' },
            { key: 'wh', label: 'whether only', hint: 'start · after a preposition · before to · or not' }
          ],
          items: [
            { text: 'I wonder ___ the BTS will run during the flood.', bin: 'both' },
            { text: 'Ask Krit ___ he can join the volunteer team.', bin: 'both' },
            { text: 'Nobody knows ___ the video is real.', bin: 'both' },
            { text: 'Our trip depends on ___ the rain stops.', bin: 'wh' },
            { text: '___ to apply early is a big decision.', bin: 'wh' },
            { text: '___ AI helps students is still debated.', bin: 'wh' },
            { text: 'She hasn’t decided ___ or not to take the offer.', bin: 'wh' }
          ],
          hint: 'Look at what comes just before and just after each gap.',
          why: 'Right after wonder, ask and know, both words work. “Depends on” ends with a preposition, “___ to apply” is before a to-infinitive, “___ AI helps students is debated” is a subject clause at the start, and “___ or not” needs whether directly before it — all four are whether-only seats.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't10l3s3', name: 'It + passive/adjective + that/to', cefr: 'C1', tag: 'nc-it',
      theory: {
        key: 'English hates heavy subjects, so a long that-clause or to-clause moves to the end and <strong>“It” holds its seat</strong>: <em>It has been established that…, It is essential to…</em>',
        body: [
          'A that-clause can be a subject: <em>That teenagers need more sleep has been established.</em> Grammatical, but top-heavy, like a bus with all the passengers on the roof. English moves the heavy clause to the end and puts a dummy <strong>It</strong> in the subject seat: <em><strong>It</strong> has been established <strong>that teenagers need more sleep</strong>.</em> The <em>It</em> means nothing; it points forward to the real subject at the end.',
          '<strong>Three patterns TCAS uses.</strong> (1) <strong>It + passive reporting verb + that</strong>: <em>It is believed / It has been established / It is suggested that…</em> (TCAS67: <em>It is, therefore, suggested that exams be tailored…</em>). The verb must be passive, because the people who believe or establish are not mentioned: <em>It believes that</em> ✗. (2) <strong>It + be + adjective + to-infinitive</strong>: <em>It is essential <strong>to maintain</strong> a balance</em> (TCAS67: options <em>to maintain / that maintains / to maintaining / that maintaining</em>). Add a doer with <em>for</em>: <em>It is common <strong>for</strong> students <strong>to</strong> sleep late.</em> (3) <strong>It + be + adjective + that</strong>: <em>It is vital that every student <strong>revise</strong></em> — the that-clause needs its own subject and verb.',
          '<strong>The personal passive twin.</strong> <em>It is said that the app reduces screen time</em> = <em>The app <strong>is said to reduce</strong> screen time.</em> For an earlier action use the perfect infinitive: <em>It is believed that the app reduced…</em> = <em>The app is believed <strong>to have reduced</strong>…</em> This makes a favourite “closest in meaning” item.',
          '<strong>Procedure.</strong> Step 1: sentence starts with <em>It</em> and has no earlier noun for it to refer to? It is a dummy. Step 2: after a reporting verb → passive. After an adjective → <em>to + base verb</em>, or <em>for + person + to</em>, or <em>that + full clause</em>. Step 3: <em>that</em> must be followed by a subject; <em>to</em> must be followed by a base verb (not -ing).'
        ],
        simple: [
          'English puts “It” at the start and the long idea at the end: <em>It is important to sleep well.</em>',
          'Reporting verbs are passive after this It: <em>It is believed that…, It has been shown that…</em>',
          'After “It is + adjective” use “to + verb” (<em>to keep</em>) or “that + subject + verb”. Not “that keeps”, not “to keeping”.'
        ],
        thai: 'ภาษาอังกฤษไม่ชอบประธานที่ยาวเป็นประโยค จึงย้าย that-clause หรือ to-clause ไปไว้ท้าย แล้วใช้ It เป็นประธานหลอก (dummy it) เช่น It has been established that…, It is essential to maintain a balance หลัง It + กริยารายงาน ต้องเป็น passive (It is believed that) หลัง It is + adjective ใช้ to + V1 หรือ for + คน + to หรือ that + ประโยคเต็ม กับดักคือ that maintains (ไม่มีประธาน) และ to maintaining และรูปคู่ It is said that X … = X is said to …',
        examples: [
          { s: '<strong>It has been established that</strong> teenagers need eight to ten hours of sleep.', g: 'dummy It + passive reporting verb + that.' },
          { s: 'It is essential <strong>to maintain</strong> a balance.', g: 'adjective + to + base verb.' },
          { s: 'It is common <strong>for</strong> students <strong>to</strong> sleep less before exams.', g: 'for + doer + to.' },
          { s: 'It is suggested that exams <strong>be tailored</strong> to specific functions.', g: 'suggest-type verb → base form in the that-clause.' },
          { s: 'The app <strong>is said to have reduced</strong> screen time. = It is said that the app reduced screen time.', g: 'personal passive twin; perfect infinitive for the past.' }
        ],
        trap: 'After <em>It is essential</em>, the option <em>that maintains</em> looks formal and complete. But <em>that</em> must introduce a full clause with its own subject — <em>that maintains</em> has no subject, so it is broken. Dodge: after <em>It is + adjective</em>, check what follows: <em>to</em> + base verb, or <em>that</em> + subject + verb. Nothing else.',
        analogy: { title: 'The seat-saver bag', text: 'In a crowded canteen, you drop your bag on a seat to save it while you queue for the long, heavy tray. Dummy “It” is that bag: it keeps the subject seat so the heavy that-clause can arrive at the end of the sentence. Nobody thinks the bag is eating lunch — and nobody thinks “It” means anything.' },
        map: { center: 'Dummy It', branches: [
          { label: 'It + passive + that', leaves: ['It is believed that', 'It has been established', 'never: It believes'] },
          { label: 'It + adj + to', leaves: ['It is essential to', 'for + person + to', 'to + base verb'] },
          { label: 'It + adj + that', leaves: ['that + subject + verb', 'It is vital that she revise'] },
          { label: 'Personal twin', leaves: ['X is said to …', 'to have + V3 for past'] }
        ] },
        story: { title: 'Pun’s Headline', panels: [
          { who: 'Pun', text: 'School newspaper headline: “It believes that gaming improves reaction time.”' },
          { who: 'Fah', text: 'Who is “It”? A monster? The school canteen?' },
          { who: 'Pun', text: 'Nobody! That’s the point. It’s… general.' },
          { who: 'T.Chris', text: 'Then the verb must be passive, because the believers aren’t named: “It is believed that gaming improves reaction time.”' },
          { who: 'Mint', text: 'Or the twin version: “Gaming is believed to improve reaction time.”' },
          { who: 'Nong Bot', text: 'Fact check: It is also established that Pun gamed until 3 a.m. Beep!' }
        ], moral: 'Dummy It + passive reporting verb: It is believed / said / established that…' }
      },
      items: [
        { id: 't10l3s3-1', type: 'cloze', tag: 'nc-it', level: 'C1', passage: T10_P_SLEEP, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['establishes', 'has established', 'has been established', 'has been establishing'], answer: 2,
          hint: '“It” here refers to nothing earlier in the text. Who established the fact — are they named?',
          why: 'This “It” is a dummy subject pointing forward to the that-clause, and the people who established the fact (researchers) are not named, so the reporting verb must be passive: It <em>has been established</em> that teenagers need eight to ten hours. The three active options would mean “It” itself did the establishing.' },

        { id: 't10l3s3-2', type: 'cloze', tag: 'nc-it', level: 'C1', passage: T10_P_SLEEP, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['of', 'for', 'that', 'with'], answer: 1,
          hint: 'Thai students are the ones who do the sleeping. Which small word introduces the doer here?',
          why: 'To name who does the action in the pattern “It is + adjective + to-infinitive”, English uses <em>for</em>: it is common <em>for</em> Thai students to sleep less. “That” would need a full clause (that Thai students sleep less), and “of” is used only with adjectives describing a person’s character (It is kind of you to help).' },

        { id: 't10l3s3-3', type: 'cloze', tag: 'nc-it', level: 'C1', passage: T10_P_SLEEP, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['keep', 'to keep', 'keeping', 'that keeps'], answer: 1,
          hint: 'After “It is + adjective”, check each option: does it have a subject, and is the verb form possible?',
          why: 'After “It is + adjective”, we use a to-infinitive: it is essential <em>to keep</em> the same wake-up time. “That keeps” has no subject after “that”, so it is not a full clause. “Keep” and “keeping” cannot follow the adjective directly — the same pattern TCAS67 tested with “It is essential to maintain a balance”.' },

        { id: 't10l3s3-4', type: 'equiv', tag: 'nc-it', level: 'C1+',
          given: 'It is believed that the new screen-time app <strong>reduced</strong> students’ phone use last term.',
          stem: 'Which sentence is closest in meaning?',
          options: [
            'The new screen-time app believes it reduced students’ phone use last term.',
            'The new screen-time app is believed reducing students’ phone use last term.',
            'The new screen-time app is believed to reduce students’ phone use last term.',
            'The new screen-time app is believed to have reduced students’ phone use last term.'
          ], answer: 3,
          hint: 'The reducing happened last term, before the believing. Which infinitive shows an earlier action?',
          why: 'In the personal passive, an action that happened before the time of believing needs the perfect infinitive: <em>is believed to have reduced</em>. “Is believed to reduce” refers to a present or general action and clashes with “last term”. “Is believed reducing” is not a pattern, and “the app believes it reduced” says the app itself believes something.' },

        { id: 't10l3s3-5', type: 'spot', tag: 'nc-it', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['It is essential', 'that every student', 'to revise', 'a little every day.'],
          answer: 2, fix: 'revise (or: It is essential for every student to revise)',
          hint: 'Check what may follow “It is essential that …”. Is every part grammatical?',
          why: 'A that-clause needs a full clause: subject + verb. So after “that every student” we need the base form <em>revise</em> (It is essential that every student revise), not a to-infinitive. If you want the to-infinitive, change “that” to “for”: It is essential for every student to revise.' }
      ]
    }
  ],
  check: { id: 't10l3ck', name: 'Systems Check · Noun clauses', items: [
    { id: 't10l3ck-1', type: 'cloze', tag: 'nc-whether', level: 'C1', passage: T10_P_AICLASS, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['that', 'what', 'which', 'whether'], answer: 3,
      hint: 'Schools are deciding a yes/no question. Which word carries that question?',
      why: 'The schools’ question is yes/no (Should chatbots be allowed?), so after “deciding” we need <em>whether</em>. “That” would state a decision already made, and “what” and “which” need a missing noun, but the clause is complete.' },
    { id: 't10l3ck-2', type: 'cloze', tag: 'nc-it', level: 'C1', passage: T10_P_AICLASS, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['believes', 'is believed', 'has believed', 'is believing'], answer: 1,
      hint: '“It” does not refer to anything earlier. Who holds the belief, and are they named?',
      why: 'This is dummy “It” pointing to the that-clause, and the believers are not named, so the reporting verb must be passive: It <em>is believed</em> that students who use chatbots learn less. “Believes” and “has believed” would make “It” the believer, and “is believing” is active and uses a stative verb in the continuous.' },
    { id: 't10l3ck-3', type: 'cloze', tag: 'nc-embedded', level: 'C1+', passage: T10_P_AICLASS, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['how this problem can solve', 'how can this problem solve', 'how can this problem be solved', 'how this problem can be solved'], answer: 3,
      hint: 'Two checks: is the order a statement or a question, and can a problem solve anything itself?',
      why: 'After “sure”, the question is embedded, so it needs statement order (subject before “can”), and a problem does not solve anything — it is solved: few teachers are sure <em>how this problem can be solved</em>. “How can this problem be solved” keeps question order, and the two options with active “solve” have the wrong voice.' },
    { id: 't10l3ck-4', type: 'cloze', tag: 'nc-whether', level: 'C1+', passage: T10_P_AICLASS, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['If', 'Unless', 'Whether', 'Although'], answer: 2,
      hint: 'Look for the word “or” later in the clause. What does the whole clause mean?',
      why: 'The clause means “it doesn’t matter if AI is banned or welcomed”, and it contains the pair “banned or welcomed”, so it needs <em>Whether</em> … or. “If” cannot carry this “no matter which” meaning, “Unless” makes no sense with two choices, and “Although” would state that AI is both banned and welcomed.' },
    { id: 't10l3ck-5', type: 'cloze', tag: 'nc-it', level: 'C1', passage: T10_P_AICLASS, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['teach', 'to teach', 'teaching', 'that teaches'], answer: 1,
      hint: 'After “it is vital”, which pattern follows an adjective?',
      why: 'After “It is + adjective”, the real subject is a to-infinitive: it is vital <em>to teach</em> students how to check… “That teaches” has no subject after “that”, and “teach” and “teaching” cannot follow the adjective here.' },
    { id: 't10l3ck-6', type: 'choose', tag: 'nc-embedded', level: 'C1+',
      stem: 'Which sentence is grammatically correct?',
      options: [
        'Whether the flood barriers will hold is still not clear.',
        'Nobody could explain why did the alert arrive so late.',
        'The debate about if phones should be banned continues.',
        'It is recommended that residents to move their cars tonight.'
      ], answer: 0,
      hint: 'Check each noun clause: its order, the word that starts it, and what follows “that”.',
      why: 'A yes/no noun clause can be the subject at the start of a sentence only with <em>Whether</em>, so the first sentence is correct. The second keeps question order (should be “why the alert arrived”), the third uses “if” after a preposition (should be “about whether”), and the fourth puts a to-infinitive after “that” (should be “that residents move”).' }
  ] }
});

TOPICS.push(T10);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'rc-basic': {
    name: 'Relative words & counting the verbs',
    principle: 'Count the verbs first: if the sentence already has its main verb, the blank must start a relative clause (that connect), not add a second main verb. Then choose who/which/that by the noun, whose before an owned noun, and where only when the clause is already complete.',
    reteach: 'Write two simple sentences on the board and weld them into one with a relative word, showing that the relative word replaces the repeated noun and does its job (subject, object, owner, place). Then teach “count the verbs”: students underline every finite verb in TCAS-style sentences and circle the main one before looking at options (use the TCAS69 “threads ___ generations” pattern). Finish with the gap test for where vs which: cover the relative word and ask whether the clause is complete.',
    activities: [
      'Sentence welding: pairs get two-sentence cards and must join them with the right relative word, reading the result aloud with one breath.',
      'Verb counters: project five sentences with a blank; students hold up fingers for the finite verbs already present, then vote bare verb vs relative clause.'
    ]
  },
  'rc-nondef': {
    name: 'Non-defining clauses & sentence-level which',
    principle: 'A comma before the relative word means extra information: use which/who/whose, never that. “, which” can refer to the whole previous idea. Do not add “it” after which, and do not join two sentences with only a comma.',
    reteach: 'Contrast a defining and a non-defining sentence and show that the commas work like brackets — cover the clause and the sentence survives. Establish the rule “comma → no that”. Then show sentence-level which with a cause–result pair (The toilet is expensive, which makes it less practical) and ask what “which” refers to. Put the TCAS68 option set (that has caused / that it has caused / which has caused / which it has caused) on the board and eliminate in two steps: comma kills that, double subject kills which it.',
    activities: [
      'Bracket test: students rewrite five non-defining clauses with brackets instead of commas to prove they are removable, then back again with which/who.',
      'Consequence chain: each student adds “…, which …” to the previous student’s sentence to build a funny chain of consequences.'
    ]
  },
  'rc-prep': {
    name: 'Preposition + which/whom, most of whom',
    principle: 'Rebuild the clause as a plain sentence to find the verb’s or adjective’s preposition (rely on, proud of, communicate through, to an extent), then place it once — before which/whom or at the end. After a preposition use only which or whom. Use most of whom / some of which, not most of them.',
    reteach: 'Start with collocations students know (rely on, proud of, interested in) and turn each into a relative clause twice: preposition at the end (informal) and preposition at the front (formal). Show that after a preposition only which/whom survive. Then teach the quantity pattern with numbers from a survey (400 students, most of whom…) and contrast it with the comma splice “most of them”. End with the double-preposition error.',
    activities: [
      'Preposition matching: cards with nouns/verbs (the extent, rely, proud, the speed) and cards with prepositions; pairs build “the ___ + prep + which” phrases and use them in sentences.',
      'Survey reports: groups invent a class survey and report it with most of whom, half of whom and none of which.'
    ]
  },
  'rc-reduced': {
    name: 'Reduced relatives: -ing vs -ed',
    principle: 'A reduced relative drops who/which + be. If the noun does the action, use -ing (students living in dorms); if it receives the action, use -ed (a study published in 2026). A reduced form is never the main verb, so find the main verb elsewhere.',
    reteach: 'Show full relative clauses and physically cross out “which is/are” to produce the reduced form, keeping active and passive unchanged. Drill the do-or-receive test by turning each phrase back into “The noun ___s …”. Then do the TCAS67 two-blank soft power sentence: students first fill the main-verb blank, then decide what kind of form the other blank needs. Stress that -ed here signals passive meaning, not past time.',
    activities: [
      'Shrink ray: students rewrite ten full relative clauses from a news article in reduced form and trade with a partner to check voice.',
      'Doer or receiver: the teacher says a noun + verb (particles / release); students kick (doer, -ing) or duck (receiver, -ed).'
    ]
  },
  'rc-appos': {
    name: 'Appositives & commas',
    principle: 'An appositive is a noun phrase that renames the noun beside it. It has no finite verb, so kill any option with is / it is. In the middle of a sentence it needs a comma on each side; a defining appositive (my friend Pun) takes none.',
    reteach: 'Start from a relative clause (Dr Nattaya, who is a psychologist, …) and delete “who is” to reveal the appositive. Show that appositives can contain describers of their own (a trend known as…, a system that learns…). Then run the TCAS69 “a trend … known as the Flynn Effect” options and eliminate everything with “is”. Finish with punctuation pairs: my cousin Krit vs my cousin, Krit, and the missing-second-comma error.',
    activities: [
      'Name tags: students write celebrity or classmate sentences with an appositive tag between commas, then read them without the tag to show the sentence survives.',
      'Comma surgery: sentences with a missing or extra comma around appositives; teams race to fix them and explain the meaning change.'
    ]
  },
  'ac-reduced': {
    name: 'Reduced adverbial clauses',
    principle: 'Keep the conjunction (when, while, if, once, although), drop subject + be. The hidden subject must be the main clause’s subject. Plug it back in: if it does the action use -ing; if it receives the action use -ed (if not prepared correctly).',
    reteach: 'Link to the participle clauses students already know, then add the conjunction back to show how it clarifies meaning (when, if, although). Model the plug-back test aloud with the TCAS67 stress item and the TCAS68 fugu item. Then show a dangling example (When cooked too long, Pun’s mother says…) and let students explain why it is funny. Finish by ruling out finite forms after the conjunction (when is used).',
    activities: [
      'Dangling cartoons: groups draw the literal meaning of three dangling sentences, then rewrite them correctly.',
      'Instruction labels: students write product labels using once opened, if swallowed, when used, unless stored, and check each hidden subject.'
    ]
  },
  'nc-embedded': {
    name: 'Embedded questions',
    principle: 'Inside a sentence, a question becomes a noun clause with statement order: wh-word + subject + verb, no do/does/did, modal before the verb. Then check subject–verb agreement inside the clause.',
    reteach: 'Write a direct question and the same question after “I don’t know …”, and show the do-support disappearing and the subject moving back before the verb. Practise with the TCAS66/67/68 option sets (what the other person says; how nations use; how creativity and technology can lead to), eliminating question order first and agreement errors second. Point out that subject questions (who posted it) look the same in both forms.',
    activities: [
      'Polite tourist: pairs turn blunt direct questions into polite embedded ones (Could you tell me…? Do you know…?) for a role-play in a Bangkok mall.',
      'Order race: word cards for four versions of one embedded question; the first team to pick and justify the only statement-order version wins.'
    ]
  },
  'nc-whether': {
    name: 'Whether vs if, whether or not',
    principle: 'if and whether both introduce yes/no noun clauses right after ask, know, wonder. Only whether can start a sentence as subject, follow a preposition, come before a to-infinitive or stand directly before “or not”. Whether … or not also means “it doesn’t matter if”.',
    reteach: 'Turn a yes/no question into a noun clause after “ask” with both words, then move the clause into the four whether-only seats (start, after about/on, before to, before or not) and show why “if” fails there. Contrast conditional if (If it rains, we stay) with noun-clause whether. End with Whether or not as a linker, using the TCAS69 exam sentence pattern.',
    activities: [
      'VIP seats: the four whether-only seats are signs around the room; students carry an if/whether sentence strip to the seat where it belongs.',
      'Whether-or-not advice: students write “Whether you … or not, …” tips for M.4 students about exams, sleep and social media.'
    ]
  },
  'nc-it': {
    name: 'It + passive/adjective + that/to',
    principle: 'Dummy It keeps the subject seat for a heavy clause at the end. After It + reporting verb, use the passive (It is believed that). After It is + adjective, use to + base verb, for + person + to, or that + subject + verb. It is said that X … = X is said to …',
    reteach: 'Show a top-heavy sentence with a that-clause subject, then move it to the end and insert It. List reporting verbs (believe, say, establish, suggest, show) and practise the passive form in present and present perfect. Then drill It is + adjective + to / for … to / that + full clause, using the TCAS67 “It is essential ___ a balance” options. End with the personal passive twin and the perfect infinitive for earlier actions.',
    activities: [
      'News rewrite: students turn five “Scientists believe that…” sentences into It is believed that… and then into X is believed to…',
      'Seat-saver chain: one student says “It is essential…”, the next must finish correctly with to or for … to, the next with that + a full clause.'
    ]
  }
});
