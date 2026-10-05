/* ===========================================================================
   TCAS70 — SYSTEM 07 · Vocabulary in Context  (topic-t7.js)
   Reading items “closest in meaning / can be best replaced by” (1–2 per
   article: set in stone, ultimate, intake, sedentary, vital, trying times,
   nefarious, upshot, attire) + Text Completion word partners (plays a role,
   contribute to, bring out, focus on, seen as).
   Core technique: FIND THE CLUE → PREDICT → REPLACE AND REREAD.
   =========================================================================== */

/* ---------------------------------------------------------- shared passages */
var T7_P_PHONEBAN = 'Supporters of phone-free schools argue that keeping smartphones out of classrooms can ___(1)___ concentration and ___(2)___ real, face-to-face friendships. Break times, they say, become noisy again: students play, argue and talk instead of scrolling in silence. Critics, however, worry that a total ban may ___(3)___ students’ digital skills, which they will need at university and at work, and make it harder for parents to reach their children in an emergency.';

var T7_P_GLASSES = 'When a clip of a student apparently reading exam answers through a pair of smart glasses went viral, Chao Phraya University came under intense ___(1)___. Parents and journalists asked how such a device could go unnoticed in a hall with six invigilators. After two long meetings, the university council reached a ___(2)___ : from next semester, all smart glasses and watches will be collected at the door. Students who need prescription glasses will have their frames checked by staff before they sit down.';

var T7_P_HEAT = 'Extreme heat is not just uncomfortable; it can ___(1)___ a serious risk to health, especially for young children and the elderly. Doctors say that sleep ___(2)___ a key role in helping the body recover after a hot day, yet many people in crowded city flats struggle to sleep when night-time temperatures stay above 28°C. Public health officials have ___(3)___ concerns that a strong El Niño could make early 2027 even hotter than usual, and they are urging schools to ___(4)___ the heat index into account when planning sports days.';

var T7_P_DENGUE = 'Every rainy season, clinics in Bangkok see a rise in dengue fever. Many cases ___(1)___ standing water in flowerpots, old tyres and blocked drains, where mosquitoes lay their eggs. Last month Krit ___(2)___ a high fever after a football tournament and spent a week in bed. The district office has now launched a campaign to check every home in the area, and volunteers are ___(3)___ door-to-door inspections every weekend, tipping out any container that holds water.';

var T7_P_SCREENS = 'Many parents are concerned ___(1)___ how much time their children spend online, and some schools now ban students ___(2)___ using phones during lessons. In December 2025, Australia’s ban on social media for under-16s took effect. Supporters said young people would benefit ___(3)___ more sleep and more time outdoors. However, a 2026 report by the country’s online-safety regulator found that more than 80% of under-16s were still using social media three months later, and critics argue that such bans may simply result ___(4)___ teenagers hiding what they do online.';

var T7 = {
  id: 't7', n: 7, code: 'System 07', art: 'lexicon',
  name: 'Vocabulary in Context',
  cefr: 'B2–C1+',
  blurb: 'Rare words are not a wall; they are a puzzle with clues. Find the clue, predict the meaning, then replace and reread. Plus the academic verbs, adjectives and nouns TCAS loves, and the word partners that Text Completion tests.',
  levels: []
};

/* =========================================================== LEVEL 1 CLUES */
T7.levels.push({
  id: 't7l1', n: 1, name: 'Clues', cefr: 'B2',
  blurb: 'Writers leave a trail around every hard word. Learn the four clue types, the replace-and-reread test, and the familiar words that wear a second meaning on exam day.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't7l1s1', name: 'Context clues: the four types', cefr: 'B2', tag: 'vc-clue',
      theory: {
        key: 'When a word is new, don’t stop at the word: look <strong>around</strong> it, because the writer almost always leaves a clue — a <strong>definition</strong>, a <strong>contrast</strong>, an <strong>example</strong> or a <strong>restatement</strong>.',
        body: [
          'A writer who uses a rare word wants to be understood, so good writers build a ramp up to it. Examiners choose their vocabulary items from exactly those spots: in TCAS66 the phrase <em>set in stone</em> sat in a sentence that went on “<em>whereas</em> their Eastern counterparts … take a more flexible view”. You did not need to know the idiom; you needed to notice that <em>whereas</em> flips it into the opposite of <em>flexible</em>. That is a context clue, and there are four families of them.',
          '<strong>1 Definition</strong> — the text tells you: <em>is, means, refers to, is known as, that is, or</em>, or a pair of commas straight after the word (<em>burnout, a state of total exhaustion, …</em>). <strong>2 Contrast</strong> — <em>but, unlike, whereas, while, however, instead of, rather than</em>: the new word means roughly the <em>opposite</em> of what sits on the other side. <strong>3 Example</strong> — <em>such as, for example, including, like</em>: ask what the examples have in common (rice, canned fish, noodles → food that lasts). <strong>4 Restatement</strong> — the next phrase or sentence says the same thing in easier words: a dash, a colon, <em>in other words, i.e.</em>, or simply the next sentence (TCAS68: memes help people <em>cope with difficult situations</em> … find humour in <em>trying times</em>).',
          '<strong>The procedure.</strong> Step 1: box the unknown word. Step 2: scan one sentence before and one after for a signal word or punctuation (dash, colon, pair of commas). Step 3: name the clue type. Step 4: write your own simple meaning in the margin <em>before</em> you read the options. Step 5: choose the option closest to your note. Predicting first protects you from options that are designed to sound clever.',
          'Clues can hide inside the word too. Parts you already know — <em>chrono-</em> (time), <em>non-</em> (not), <em>-less</em> (without), <em>bio-</em> (life) — narrow the meaning, and the context confirms it. Word parts are the torch; the context is the map. Use both.'
        ],
        simple: [
          'Don’t panic at a new word. Read the words around it.',
          'Look for four kinds of help: a definition (“X is…”), an opposite (“but”, “unlike”), examples (“such as…”) or the same idea again in easy words (a dash, “in other words”).',
          'Guess the meaning yourself first. Then look at the answers.'
        ],
        thai: 'เจอคำศัพท์ที่ไม่รู้จัก อย่าหยุดอยู่ที่คำนั้น ให้มองประโยคก่อนและหลัง เพราะผู้เขียนมักทิ้ง “context clue” ไว้ 4 แบบ: definition (is, means, refers to, that is), contrast (but, unlike, whereas — ความหมายตรงข้ามกับอีกฝั่ง), example (such as, including — ดูว่าตัวอย่างมีอะไรเหมือนกัน) และ restatement (ขีด –, colon, in other words หรือประโยคถัดไปพูดซ้ำด้วยคำง่าย) ให้เดาความหมายเองก่อนดูตัวเลือก กับดักคือรีบเลือกตัวเลือกที่ “ฟังดูเกี่ยวข้อง” โดยไม่ดูคำสัญญาณอย่าง whereas ที่กลับความหมาย',
        examples: [
          { s: '<strong>Burnout</strong>, a state of complete physical and emotional exhaustion, is common in the weeks before TCAS.', g: 'Definition: the pair of commas holds the meaning.' },
          { s: 'Unlike her talkative brother, Aom is quite <strong>reticent</strong> in class.', g: 'Contrast: reticent = the opposite of talkative (quiet, reserved).' },
          { s: 'Shelters asked for <strong>non-perishable</strong> food, such as rice, canned fish and instant noodles.', g: 'Example: what do the examples share? They keep for months.' },
          { s: 'Many office workers lead <strong>sedentary</strong> lives; in other words, they sit for most of the day.', g: 'Restatement: “in other words” translates the hard word for you.' }
        ],
        trap: 'You find a clue but read it the wrong way round. After a contrast signal (<em>whereas, unlike, rather than</em>), the new word means the opposite of the other side, so if the other side says “flexible”, the answer is “unchangeable”, not “flexible”. Dodge: circle the signal word and draw an arrow: = for definition/restatement, ≠ for contrast.',
        analogy: { title: 'Detective at the crime scene', text: 'A detective does not need the thief’s name to solve the case; she reads the footprints around the window. The unknown word is the missing thief. The commas, dashes, “such as” and “whereas” around it are the footprints — and they always point somewhere.' },
        map: { center: 'Four context clues', branches: [
          { label: 'Definition', leaves: ['is / means / refers to', 'that is, or …', 'pair of commas after'] },
          { label: 'Contrast', leaves: ['but, whereas, unlike', 'rather than, instead of', 'meaning = opposite side'] },
          { label: 'Example', leaves: ['such as, including', 'for example, like', 'what do examples share?'] },
          { label: 'Restatement', leaves: ['dash or colon', 'in other words, i.e.', 'the next sentence repeats'] }
        ] },
        story: { title: 'Nong Bot Reads the Menu', panels: [
          { who: 'Nong Bot', text: 'Menu says: “Our khao soi is piquant — we add extra chilli and sour pickled mustard.” Word not in my database. Ordering it for Pun anyway. Beep!' },
          { who: 'Pun', text: 'Bot, I asked for something mild! My mouth is on fire!' },
          { who: 'Mint', text: 'The dash was a restatement clue. Extra chilli and sour pickles — piquant means spicy and sharp.' },
          { who: 'Nong Bot', text: 'Updating… Rule saved: when a word is missing from my database, read the words next to it.' },
          { who: 'T.Chris', text: 'Exactly. You don’t need the dictionary if the writer has already translated it for you.' },
          { who: 'Pun', text: 'Next time, Bot, read the clue before you order for me. Water, please!' }
        ], moral: 'The answer is often one dash away: read the words beside the unknown word.' }
      },
      items: [
        { id: 't7l1s1-1', type: 'read', tag: 'vc-clue', level: 'B2',
          passage: 'Are you a lark or an owl? Sleep scientists say that each of us has a chronotype — the time of day when our body naturally wants to sleep and wake up. Larks feel sharp at 7 a.m., while owls do their best thinking late at night. Some researchers now argue that schools should start later, because most teenagers are temporary owls.',
          stem: 'The word “chronotype” in the passage refers to ________.',
          options: ['a common sleep disorder', 'a method for waking up earlier', 'a person’s natural daily timing for sleep', 'the total number of hours a person sleeps each night'], answer: 2,
          hint: 'Look at what comes straight after the dash. The writer is explaining the word for you.',
          why: 'This is a restatement clue: the dash introduces “the time of day when our body naturally wants to sleep and wake up”, i.e. a person’s natural daily timing. The word part <em>chrono-</em> (time) supports it. “The number of hours a person sleeps” is about amount, not timing, and nothing in the passage calls larks or owls a disorder.' },

        { id: 't7l1s1-2', type: 'read', tag: 'vc-clue', level: 'B2',
          passage: 'Nan and Fah are twins, but in class you would never guess it. Unlike her outspoken sister, who runs the debate club, Nan is rather reticent: in group discussions she listens far more than she speaks, and she only raises her hand when she is completely sure.',
          stem: 'The word “reticent” is closest in meaning to ________.',
          options: ['bored', 'reserved', 'nervous', 'confident'], answer: 1,
          hint: 'Find the word “Unlike”. Nan is being compared with someone. What is that person like?',
          why: '“Unlike her outspoken sister” is a contrast clue, so Nan is the opposite of outspoken; the restatement “listens far more than she speaks” confirms it: <em>reserved</em>. “Nervous” is the near miss, but the passage never says Nan is afraid; she chooses to speak only when she is sure. “Confident” goes the wrong way, and nothing suggests she is bored.' },

        { id: 't7l1s1-3', type: 'equiv', tag: 'vc-clue', level: 'B2',
          given: 'After the floods, the relief centre asked for <strong>non-perishable</strong> food, such as rice, canned fish, dried noodles and biscuits.',
          stem: 'The word in bold is closest in meaning to ________.',
          options: ['cheap', 'ready to eat', 'grown locally', 'long-lasting'], answer: 3,
          hint: 'Look at the examples after “such as”. What do all four have in common?',
          why: 'This is an example clue: rice, canned fish, dried noodles and biscuits all last for months without a fridge, so <em>non-perishable</em> means long-lasting: able to keep for a long time (non- = not; perish = go bad). “Ready to eat” is the near miss, but rice and dried noodles must be cooked. The examples say nothing about price or where food is grown.' },

        { id: 't7l1s1-4', type: 'sort', tag: 'vc-clue', level: 'B2',
          stem: 'Which kind of clue helps you with the word in CAPITALS?',
          bins: [
            { key: 'def', label: 'Definition', hint: 'is / means / commas after the word' },
            { key: 'con', label: 'Contrast', hint: 'but / unlike / whereas' },
            { key: 'ex', label: 'Example', hint: 'such as / including / for instance' },
            { key: 'res', label: 'Restatement', hint: 'dash / in other words / next sentence' }
          ],
          items: [
            { text: 'BURNOUT, a state of complete physical and emotional exhaustion, is common before exams.', bin: 'def' },
            { text: 'BIODEGRADABLE packaging is packaging that breaks down naturally in soil.', bin: 'def' },
            { text: 'Pun was SCEPTICAL about the diet app, but his mother trusted it completely.', bin: 'con' },
            { text: 'Whereas the old rule was LENIENT, the new one punishes every late arrival.', bin: 'con' },
            { text: 'NONVERBAL signals, including eye contact, posture and gestures, carry much of our meaning.', bin: 'ex' },
            { text: 'Table ETIQUETTE differs across cultures; for instance, Thais eat with a spoon and use the fork only to push food.', bin: 'ex' },
            { text: 'Mint felt AMBIVALENT about the offer — part of her wanted it and part of her did not.', bin: 'res' },
            { text: 'The storm was CATASTROPHIC; in other words, it destroyed almost everything in its path.', bin: 'res' }
          ],
          hint: 'Find the signal word or punctuation first, then decide what job it does.',
          why: 'Definition clues say what the word IS (“a state of…”, “is packaging that…”). Contrast clues use <em>but</em> or <em>whereas</em>, so the word means the opposite of the other side. Example clues list members (<em>including, for instance</em>). Restatement clues say the same thing again after a dash or “in other words”.' },

        { id: 't7l1s1-5', type: 'read', tag: 'vc-clue', level: 'B2',
          passage: 'By the third hour of the online revision class, most of the students had become lethargic. They were so tired and slow that even T.Chris’s famous quiz game, with prizes, failed to wake them up. He ended the session early and told everyone to go for a walk.',
          stem: 'The word “lethargic” is closest in meaning to ________.',
          options: ['restless', 'confused', 'impatient', 'sluggish'], answer: 3,
          hint: 'The sentence after the word describes the students again in simpler words.',
          why: 'The next sentence is a restatement clue: “so tired and slow that even … failed to wake them up”. That is <em>sluggish</em> (lacking energy). “Restless” is the opposite (too much energy to sit still), and “impatient” and “confused” describe feelings or thinking, not the tiredness the passage describes.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't7l1s2', name: 'Closest in meaning: replace and reread', cefr: 'B2', tag: 'vc-closest',
      theory: {
        key: 'For “closest in meaning / can be best replaced by”, <strong>predict</strong> a meaning from the context, then <strong>put each option into the sentence and reread it</strong>: the key keeps both the grammar and the message; distractors break one of them.',
        body: [
          'TCAS vocabulary items look like dictionary questions, but they are really <em>substitution</em> questions. The examiner asks: which option could sit in the writer’s sentence and say the same thing? A word can have five dictionary meanings; only one is switched on in this sentence. In TCAS68, the options for <em>vital</em> were all adjectives (<em>regular, abstract, changing, important</em>), so grammar alone could not decide. Only the replace-and-reread test does.',
          '<strong>The procedure.</strong> Step 1: find the word and read the whole sentence, plus the one before and after (clues from 1.1). Step 2: cover the options and predict a simple meaning in your own words. Step 3: slot each option into the sentence and reread aloud in your head. Step 4: keep the one that (a) fits the grammar — same part of speech, same partner words (<em>convey feelings</em> works; <em>talk feelings</em> does not) — and (b) keeps the writer’s message at the same strength.',
          '<strong>Know the three distractor types.</strong> (1) <em>Another sense of the same word</em>: <em>convey</em> also means “transport”, <em>address</em> also means “speak to an audience”. (2) <em>Right field, wrong strength</em>: for <em>alleviate the pain</em>, “remove” is too strong and “ease” is right; for <em>ubiquitous</em>, “popular” is too weak. (3) <em>Fits the sentence, changes the message</em>: “Interest <em>grew</em> after the first month” is perfect English, but it says the opposite of <em>diminished</em>. Every distractor is grammatical — that is the TCAS rule — so meaning and strength decide.',
          'A final check: the key is often a plain, short word (<em>result, inactive, evil, important</em> in TCAS67–69). Do not reject an option for being too simple; reject it only if it fails the reread.'
        ],
        simple: [
          'First guess the meaning from the sentence. Then put each answer into the sentence and read it again.',
          'The right answer sounds correct AND says the same thing, not more and not less.',
          'Be careful: some answers are another meaning of the same word, or they are too strong or too weak.'
        ],
        thai: 'ข้อ “closest in meaning / can be best replaced by” คือข้อทดแทนคำ ให้เดาความหมายจากบริบทก่อน แล้วลองแทนตัวเลือกลงในประโยคและอ่านซ้ำ (replace-and-reread) คำตอบที่ถูกต้องต้องเข้ากับไวยากรณ์และคงความหมายเดิมในระดับความเข้มเท่าเดิม กับดักมี 3 แบบ: ความหมายอื่นของคำเดียวกัน (convey = ขนส่ง), คำในกลุ่มความหมายเดียวกันแต่แรงหรืออ่อนเกินไป (remove แทน alleviate) และคำที่เข้ากับประโยคแต่เปลี่ยนสาร (grew แทน diminished)',
        examples: [
          { s: 'Gentle swimming can <strong>alleviate</strong> the pain, although it will not cure it.', g: 'ease ✓ · remove ✗ (too strong: “will not cure it”).' },
          { s: 'Emojis help us <strong>convey</strong> feelings that are hard to put into words.', g: 'express ✓ · transport ✗ (another sense of convey).' },
          { s: 'Students must learn to <strong>prioritise</strong> — maths first, the group chat later.', g: 'put things in order of importance ✓ · organise ✗ (too vague).' },
          { s: 'Interest in the app <strong>diminished</strong> after the first month.', g: 'lessened ✓ · disappeared ✗ (too strong) · grew ✗ (opposite message).' }
        ],
        trap: 'You recognise the word and pick its most famous dictionary meaning without rereading. <em>Convey</em> in a physics lesson means “carry”; in a passage about emojis it means “express”. Dodge: never answer from memory alone. Put the option into the sentence and reread the whole line — if it changes the message or the strength, it is out.',
        analogy: { title: 'The substitute in a K-pop line-up', text: 'When one member of a group is ill, the replacement must fit the choreography (grammar) and sing the same part in the same key (meaning and strength). A great rapper who cannot hit the high note is not the right substitute, however famous. Replace and rehearse: that is replace and reread.' },
        map: { center: 'Replace and reread', branches: [
          { label: 'Predict first', leaves: ['cover the options', 'read sentence before/after', 'own simple meaning'] },
          { label: 'Test each option', leaves: ['slot it in', 'reread the whole line', 'grammar still works?'] },
          { label: 'Distractor types', leaves: ['another sense of word', 'right field, wrong strength', 'fits but changes message'] },
          { label: 'Keep the key', leaves: ['same message', 'same strength', 'simple words are fine'] }
        ] },
        moves: [
          { move: 'Cover your eyes with one hand', says: 'Cover the options — predict first' },
          { move: 'Pinch the air and drop it into your other palm', says: 'Drop each option into the sentence' },
          { move: 'Trace a line across the air, left to right', says: 'Reread the whole line' },
          { move: 'Hands as a balance scale, level', says: 'Same strength — not heavier, not lighter' },
          { move: 'Thumbs up', says: 'Grammar fits AND message stays: that’s the key' }
        ]
      },
      items: [
        { id: 't7l1s2-1', type: 'read', tag: 'vc-closest', level: 'B2',
          passage: 'Tee’s grandmother has arthritis in both knees. Her doctor explained that gentle swimming three times a week could alleviate the pain, although it would not cure the condition. She now swims at the community pool every Monday, Wednesday and Friday morning.',
          stem: 'The word “alleviate” can be best replaced by ________.',
          options: ['ease', 'remove', 'explain', 'increase'], answer: 0,
          hint: 'Read the words after “although”. How much can swimming do for the pain?',
          why: '“Although it would not cure the condition” tells us swimming makes the pain less, not gone: <em>ease</em>. “Remove” is the near miss: it is the right idea but too strong, because the pain does not disappear. “Increase” reverses the message, and “explain” fits the grammar but not the meaning.' },

        { id: 't7l1s2-2', type: 'read', tag: 'vc-closest', level: 'B2',
          passage: 'After a prolonged dry season, the reservoirs in Nakhon Sawan were almost empty. Farmers who normally plant rice in May had to wait until October for the rains, and many switched to crops that need less water.',
          stem: 'The word “prolonged” is closest in meaning to ________.',
          options: ['lengthy', 'severe', 'sudden', 'seasonal'], answer: 0,
          hint: 'The farmers waited from May to October. Which idea does that detail support?',
          why: '<em>Prolonged</em> means lasting longer than usual, and the passage proves it: farmers waited from May until October: <em>lengthy</em>. “Severe” is the near miss — a long dry season may be severe, but severity is about how bad it is, not how long. “Sudden” contradicts the long wait, and every dry season is “seasonal”, so that adds nothing.' },

        { id: 't7l1s2-3', type: 'equiv', tag: 'vc-closest', level: 'B2',
          given: 'Engineers have not yet been able to <strong>pinpoint</strong> the exact cause of the power cut that hit three districts last night.',
          stem: 'The word in bold is closest in meaning to ________.',
          options: ['fix', 'report', 'look into', 'identify precisely'], answer: 3,
          hint: 'Notice “not yet been able” and “the exact cause”. What have the engineers failed to do so far?',
          why: 'To <em>pinpoint</em> is to find or identify something exactly, which matches “the exact cause”. “Look into” is the near miss: engineers are probably investigating already, but the sentence says they cannot yet <em>find</em> the cause. “Fix” would be about the power cut, not its cause, and “report” changes the message.' },

        { id: 't7l1s2-4', type: 'sort', tag: 'vc-closest', level: 'B2',
          stem: 'Original sentence: “Emojis help us CONVEY feelings that are hard to put into words.” Replace and reread: which words could take the place of CONVEY?',
          bins: [
            { key: 'ok', label: 'Passes the reread', hint: 'grammar AND meaning stay' },
            { key: 'no', label: 'Fails the reread', hint: 'wrong sense or wrong grammar' }
          ],
          items: [
            { text: 'express', bin: 'ok' },
            { text: 'communicate', bin: 'ok' },
            { text: 'show', bin: 'ok' },
            { text: 'transport', bin: 'no' },
            { text: 'talk', bin: 'no' },
            { text: 'inform', bin: 'no' }
          ],
          hint: 'Say the full sentence aloud with each word. Does it still sound like English and mean the same?',
          why: '“Help us express / communicate / show feelings” all keep the message. <em>Transport</em> is another sense of convey (carry goods), so the meaning breaks. <em>Talk</em> and <em>inform</em> fail the grammar: we talk <em>about</em> feelings and inform <em>someone of</em> something.' },

        { id: 't7l1s2-5', type: 'read', tag: 'vc-closest', level: 'B2',
          passage: 'When the StudyPal app launched in June, thousands of Grade 12 students downloaded it in a single week. Interest diminished after the first month, however, when users discovered that most of the practice tests were locked behind a monthly fee. By September the app still had a small group of loyal users, but few new ones.',
          stem: 'The word “diminished” can be best replaced by ________.',
          options: ['grew', 'changed', 'lessened', 'disappeared'], answer: 2,
          hint: 'Check the last sentence. Did every user leave?',
          why: 'Interest became smaller after the hidden fees appeared, but the app “still had a small group of loyal users”, so <em>lessened</em> is right. “Disappeared” is the near miss — right direction, wrong strength. “Grew” fits the grammar but reverses the message, and “changed” is too vague to replace the word.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't7l1s3', name: 'Familiar words, exam meanings', cefr: 'B2+', tag: 'vc-polysemy',
      theory: {
        key: 'TCAS loves words you <strong>think</strong> you know: <em>trying, address, sound, novel, thanks to, set in stone</em>. When an easy word is being tested, its everyday meaning is usually the <strong>trap</strong> — look for the second sense that fits the context.',
        body: [
          'English recycles its short words. <em>Trying</em> is the -ing form of “try”, but <em>trying times</em> means difficult, exhausting times (TCAS68). <em>Intake</em> does not mean taking in just anything; in a health text it is the amount you eat or drink (TCAS67: vitamin D <em>intake</em> → consumption). <em>Thanks to</em> sounds grateful, but it simply means “because of” — even for bad news (<em>thanks to the traffic, we missed the start</em>). This is <strong>polysemy</strong>: one word, several related meanings.',
          '<strong>Why examiners choose these words.</strong> A rare word like <em>nefarious</em> tests whether you know it. A familiar word tests whether you <em>read</em>. The examiner puts the everyday meaning among the options as the trap: for <em>set in stone</em>, a literal option about rock or carving; for <em>thanks to</em>, “grateful for”; for <em>address</em>, “write the location on”.',
          '<strong>The procedure.</strong> Step 1: if the tested word is easy, get suspicious — why would TCAS test it? Step 2: ask what the word is doing <em>here</em> (with what subject, object, topic?). <em>Address</em> + a problem = deal with it; <em>address</em> + an audience = speak to it. Step 3: predict, then replace and reread (1.2). Useful second senses: <em>sound</em> advice (reliable), a <em>novel</em> idea (new, original), safety <em>measures</em> (actions), a <em>fine</em> (money penalty), <em>summoned</em> (ordered to come), <em>ill-</em> in <em>ill-prepared</em> (badly), a <em>staple</em> food (basic, main).'
        ],
        simple: [
          'Some easy words have a second meaning. In the exam, the easy meaning is often the wrong answer.',
          '“Trying times” = difficult times. “Thanks to the rain” = because of the rain. “Sound advice” = good, reliable advice.',
          'Always ask: what does the word mean in THIS sentence?'
        ],
        thai: 'TCAS ชอบออกคำง่ายที่มีความหมายที่สอง (polysemy) เช่น trying times = ช่วงเวลาที่ยากลำบาก, thanks to = เพราะ (ใช้กับเรื่องร้ายก็ได้), intake = ปริมาณที่รับประทาน, sound advice = คำแนะนำที่เชื่อถือได้, address a problem = จัดการปัญหา ถ้าข้อสอบถามคำง่าย ให้สงสัยไว้ก่อนว่าความหมายที่คุ้นเคยคือ “กับดัก” ให้ดูว่าคำนั้นทำงานกับคำไหนในประโยค แล้วลองแทนตัวเลือกและอ่านซ้ำ',
        examples: [
          { s: 'Memes helped many people laugh through <strong>trying</strong> times.', g: 'trying = difficult, stressful (not “attempting”).' },
          { s: 'Doctors advise a lower daily salt <strong>intake</strong>.', g: 'intake = the amount you consume.' },
          { s: 'The new principal promised to <strong>address</strong> complaints about the canteen.', g: 'address + a problem = deal with it.' },
          { s: '<strong>Thanks to</strong> a burst pipe, the exam was moved to the library.', g: 'thanks to = because of — no gratitude involved.' },
          { s: 'The team was <strong>ill</strong>-prepared for such heavy rain.', g: 'ill- = badly (not sick).' }
        ],
        trap: 'The literal or everyday meaning is always one of the options, and it is always grammatical. For “the plan is not set in stone”, an option like “written down” matches the picture of carving words in stone, but the idiom means fixed, unchangeable. Dodge: if the tested word is easy, cross out the everyday meaning first and look for the one that fits the topic of the sentence.',
        analogy: { title: 'Your friend with two jobs', text: 'You know Krit as a footballer. But on Saturday mornings he works at his aunt’s noodle shop. If someone asks “What is Krit doing at 9 a.m. on Saturday?”, “playing football” is the answer that feels right — and it is wrong. Easy words have second jobs too; the context tells you which shift they are working.' },
        map: { center: 'Easy word, exam meaning', branches: [
          { label: 'Adjectives', leaves: ['trying = difficult', 'sound = reliable', 'novel = new, original'] },
          { label: 'Nouns', leaves: ['intake = amount consumed', 'measures = actions', 'a fine = penalty', 'staple = basic item'] },
          { label: 'Verbs', leaves: ['address = deal with', 'summon = order to come'] },
          { label: 'Phrases', leaves: ['thanks to = because of', 'set in stone = fixed', 'ill- = badly'] }
        ] },
        chant: { title: 'Second Job', beat: 'stomp-clap-stomp-clap (4/4)', lines: [
          'Easy word on the test? Don’t relax, be smart,',
          'The meaning that you know is the trap from the start.',
          'Trying times are tough, not a test you retake,',
          'Intake is the food and the drink that you take.',
          'Thanks to means because, even when it’s bad,',
          'Sound advice is solid, not a noise that you had.',
          'Set in stone means fixed; address? Deal with it,',
          'Ask what it’s doing here, and the meaning will fit!'
        ] }
      },
      items: [
        { id: 't7l1s3-1', type: 'read', tag: 'vc-polysemy', level: 'B2',
          passage: 'During the trying weeks after the Hat Yai floods, a group of volunteer cooks set up a kitchen in a temple car park. Every evening they served free khanom jeen to anyone who needed a hot meal, and many families who had lost their kitchens came back night after night.',
          stem: 'The word “trying” is closest in meaning to ________.',
          options: ['busy', 'hopeful', 'difficult', 'experimental'], answer: 2,
          hint: 'Think about what life was like for families who had lost their kitchens.',
          why: 'After a flood, families had lost their kitchens and needed free meals, so the weeks were hard and stressful: <em>difficult</em>. “Experimental” is the trap: it comes from the everyday meaning of <em>try</em> (to test something). The weeks may have been busy for the volunteers, but <em>trying</em> describes how hard the period was, not how full.' },

        { id: 't7l1s3-2', type: 'equiv', tag: 'vc-polysemy', level: 'B2+',
          given: 'At the first assembly, the new principal promised to <strong>address</strong> students’ complaints about the canteen within a month.',
          stem: 'The word in bold can be best replaced by ________.',
          options: ['deal with', 'write down', 'give a talk about', 'forward to others'], answer: 0,
          hint: 'What would students want the principal to DO about their complaints within a month?',
          why: 'When the object of <em>address</em> is a problem or a complaint, it means <em>deal with</em> it — take action. “Give a talk about” uses the other sense (address an audience), and “forward to others” echoes putting an address on a letter. “Write down” fits the grammar, but a promise to fix things “within a month” is about action, not note-taking.' },

        { id: 't7l1s3-3', type: 'read', tag: 'vc-polysemy', level: 'B2+',
          passage: 'The day after a video of their prank went viral, the principal summoned the two Grade 10 boys to her office. They waited outside for twenty minutes, and when they finally came out, both had agreed to write a public apology to the teacher they had filmed.',
          stem: 'The word “summoned” is closest in meaning to ________.',
          options: ['praised', 'invited', 'walked along with', 'ordered to come'], answer: 3,
          hint: 'Were the boys free to say no? Look at what they had done and what happened next.',
          why: '<em>Summon</em> means to officially order someone to come, and here the boys had done something wrong and were called in: <em>ordered to come</em>. “Invited” is the near miss — right idea, wrong strength, because an invitation can be refused. “Praised” contradicts the apology, and nothing says the principal walked with them.' },

        { id: 't7l1s3-4', type: 'sort', tag: 'vc-polysemy', level: 'B2+',
          stem: 'Is the word in CAPITALS used in its everyday meaning or its second (exam) meaning?',
          bins: [
            { key: 'day', label: 'Everyday meaning', hint: 'the first meaning you learnt' },
            { key: 'exam', label: 'Second meaning', hint: 'the sense TCAS likes to test' }
          ],
          items: [
            { text: 'We heard a strange SOUND in the dark corridor.', bin: 'day' },
            { text: 'The nurse gave us SOUND advice about the heat.', bin: 'exam' },
            { text: 'She is reading a NOVEL by a Thai author.', bin: 'day' },
            { text: 'The café has a NOVEL way of recycling cups.', bin: 'exam' },
            { text: 'The city took new safety MEASURES after the floods.', bin: 'exam' },
            { text: 'Littering on the beach brings a FINE of 2,000 baht.', bin: 'exam' },
            { text: 'She said THANKS TO the bus driver.', bin: 'day' },
            { text: 'THANKS TO early warnings, nobody was hurt.', bin: 'exam' }
          ],
          hint: 'For each word, ask: is it the meaning you learnt first, or does it mean something like reliable, new, actions, penalty or because of?',
          why: '<em>Sound advice</em> = reliable; <em>a novel way</em> = new and original; <em>safety measures</em> = actions taken; <em>a fine</em> = money paid as a penalty; <em>thanks to early warnings</em> = because of. A strange sound, a novel by an author and saying thanks to the driver are the everyday meanings.' },

        { id: 't7l1s3-5', type: 'read', tag: 'vc-polysemy', level: 'B2+',
          passage: 'Thanks to a burst water pipe on the third floor, the Grade 11 mid-term exam was moved to the library at the last minute. There were not enough desks, so forty students had to write on their laps, and nobody could hear the invigilator’s announcements over the air conditioners.',
          stem: 'The phrase “Thanks to” can be best replaced by ________.',
          options: ['Because of', 'Instead of', 'Grateful for', 'In spite of'], answer: 0,
          hint: 'Is the burst pipe good news? What is the relationship between the pipe and the move?',
          why: 'The burst pipe caused the move, so <em>thanks to</em> means <em>because of</em> — it can introduce bad news as well as good. “Grateful for” is the trap: the everyday meaning of “thanks”, which makes no sense for a broken pipe. “In spite of” would mean the move happened although the pipe burst, which reverses the cause.' }
      ]
    }
  ],
  check: { id: 't7l1ck', name: 'Systems Check · Clues', items: [
    { id: 't7l1ck-1', type: 'read', tag: 'vc-clue', level: 'B2+',
      passage: 'Krit’s older brother Kan is famously frugal. While his friends spend their first salaries on concert tickets and new phones, Kan cooks at home, takes the bus instead of Grab and puts half of every pay cheque into a savings account.',
      stem: 'The word “frugal” is closest in meaning to ________.',
      options: ['poor', 'lazy', 'careful with money', 'hard-working and ambitious'], answer: 2,
      hint: 'The word “While” sets Kan against his friends. Then look at the three things he does.',
      why: '“While his friends spend…” is a contrast clue, and the examples (cooking at home, taking the bus, saving half his pay) all show someone who avoids wasting money: <em>careful with money</em>. “Poor” is the near miss, but Kan has a salary and savings; he chooses not to spend. Nothing suggests he is lazy, and the passage says nothing about how hard he works or what he wants from his career.' },

    { id: 't7l1ck-2', type: 'read', tag: 'vc-clue', level: 'B2+',
      passage: 'Farmers in the Northeast are preparing for an arid start to 2027. Forecasters expect a strong El Niño, which usually brings weeks without rain, falling river levels and cracked, dusty fields. Some villages have already started rationing water from their ponds.',
      stem: 'The word “arid” can be best replaced by ________.',
      options: ['windy', 'very dry', 'very hot', 'uncertain'], answer: 1,
      hint: 'The next sentence lists what El Niño usually brings. What do those three things have in common?',
      why: 'The next sentence lists what El Niño brings — “weeks without rain, falling river levels and cracked, dusty fields” — an example clue that restates the idea, and villages are rationing water: <em>very dry</em>. “Very hot” is the near miss, because El Niño often brings heat too, but every clue in the passage is about the lack of water, not temperature. Wind and uncertainty are not mentioned.' },

    { id: 't7l1ck-3', type: 'equiv', tag: 'vc-closest', level: 'B2+',
      given: 'Flooded underpasses and stalled cars <strong>hampered</strong> rescue teams trying to reach families in the eastern districts, but by midnight every family had been reached.',
      stem: 'The word in bold is closest in meaning to ________.',
      options: ['guided', 'slowed down', 'endangered', 'stopped completely'], answer: 1,
      hint: 'Read the end of the sentence. Did the rescue teams get there in the end?',
      why: 'To <em>hamper</em> is to make something slower or more difficult, and the teams did reach every family by midnight: <em>slowed down</em>. “Stopped completely” is the wrong-strength trap, contradicted by the ending. “Endangered” changes the message (the text is about delay, not danger), and “guided” reverses it.' },

    { id: 't7l1ck-4', type: 'read', tag: 'vc-closest', level: 'B2+',
      passage: 'During the April heatwave, clean drinking water became scarce in several villages in Buri Ram. Families queued for up to two hours at the one working well, and the district office sent a water truck every other day.',
      stem: 'The word “scarce” is closest in meaning to ________.',
      options: ['dirty', 'unavailable', 'in short supply', 'too expensive to buy'], answer: 2,
      hint: 'There was still one working well. Was there no water at all?',
      why: 'Families queued at “the one working well” and a truck came every other day, so water existed but there was too little of it: <em>in short supply</em>. “Unavailable” is the wrong-strength trap, because some water was available. “Too expensive to buy” and “dirty” describe other water problems that the passage never mentions.' },

    { id: 't7l1ck-5', type: 'read', tag: 'vc-polysemy', level: 'B2+',
      passage: 'The route for the Grade 11 study trip is not set in stone yet. If the flooding in the North continues into November, the school may replace the visit to Chiang Rai with three days in Hua Hin. Parents will be told the final plan by 20 October.',
      stem: 'The phrase “set in stone” is closest in meaning to ________.',
      options: ['final', 'popular', 'difficult', 'written down'], answer: 0,
      hint: 'Read the second sentence. What could still happen to the plan before 20 October?',
      why: 'The route could still change (Chiang Rai may be replaced), so it is not yet <em>final</em>, i.e. fixed and unchangeable. “Written down” is the literal trap, from the picture of carving words into stone. Neither popularity nor difficulty is discussed.' },

    { id: 't7l1ck-6', type: 'read', tag: 'vc-polysemy', level: 'B2+',
      passage: 'Sticky rice is a staple of the Isan diet. In many homes in Khon Kaen and Udon Thani it appears at almost every meal, from breakfast to dinner, rolled into small balls and dipped into som tam, larb or grilled chicken sauce.',
      stem: 'The word “staple” is closest in meaning to ________.',
      options: ['a side dish', 'a basic food', 'a special treat', 'a local invention'], answer: 1,
      hint: 'How often is sticky rice eaten, according to the second sentence?',
      why: 'Sticky rice appears “at almost every meal”, so it is a main, basic food: a <em>staple</em>. “A side dish” is the near miss, but sticky rice is eaten with everything, at almost every meal, which makes it the central food, not an extra. “A special treat” contradicts “every meal”, and the passage says nothing about where the dish was invented.' }
  ] }
});

/* =================================================== LEVEL 2 ACADEMIC WORDS */
T7.levels.push({
  id: 't7l2', n: 2, name: 'Academic words', cefr: 'B2+–C1',
  blurb: 'The verbs, adjectives and nouns that make articles sound serious. Learn them in families, decode them with word parts, and judge their strength.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't7l2s1', name: 'Academic verbs: which way does it push?', cefr: 'B2+', tag: 'vc-verbs',
      theory: {
        key: 'Academic verbs mostly say one thing: what a cause <strong>does</strong> to a situation — makes it <strong>better or stronger</strong> (enhance, foster), <strong>worse or weaker</strong> (undermine, exacerbate), <strong>slower</strong> (impede, hinder) or <strong>less severe</strong> (mitigate, alleviate). Know the direction and you know most of the meaning.',
        body: [
          'Articles in TCAS Part V are full of cause-and-effect: screens and sleep, heat and health, AI and learning. So the verbs that link a cause to an effect are the ones examiners test. The good news: you do not need a dictionary definition for each one. Put them on a compass. <strong>↑ Better/stronger:</strong> <em>enhance</em> (improve quality), <em>foster</em> (help something grow over time: foster friendship, creativity), <em>reinforce, bolster</em> (make stronger). <strong>↓ Worse/weaker:</strong> <em>undermine</em> (weaken gradually, often trust or confidence), <em>exacerbate, aggravate</em> (make an existing problem worse), <em>erode</em> (wear away slowly). <strong>✋ Slower/blocked:</strong> <em>impede, hinder, hamper</em> (slow or block progress), <em>curb</em> (limit, restrain). <strong>↘ Less severe:</strong> <em>mitigate, alleviate</em> (reduce the harm without removing it).',
          '<strong>Word parts help.</strong> <em>En-</em> makes verbs from adjectives or nouns (<em>enrich, enable, enlarge</em>). <em>Under-mine</em> is literally digging a tunnel under a wall until it falls: slow, hidden weakening. <em>Im-pede</em> contains <em>ped</em> (foot, as in pedestrian): something getting under your feet. <em>Ex-acerbate</em> has <em>acerb</em> (bitter, sharp): making a sore problem sharper.',
          '<strong>Three checks for the exam.</strong> (1) Direction: does the context say things got better or worse? (2) Timing: <em>exacerbate</em> and <em>mitigate</em> need a problem that <em>already exists</em>; you cannot exacerbate something that has not started. (3) Partners: <em>attribute</em> X <em>to</em> Y (say Y caused X), <em>derive</em> X <em>from</em> Y (get X from a source), <em>encroach on</em> (take over little by little — TCAS67: gaming <em>encroaches on</em> other vital areas of life). Reversing these partners is a classic distractor.',
          'Two more that feel harder than they are: <em>constitute</em> = make up, form (<em>women constitute 60% of the students</em>); <em>perceive</em> = see or understand in a certain way (<em>teenagers perceive risk differently</em>).'
        ],
        simple: [
          'Many academic verbs just tell you a direction: better (enhance, foster), worse (undermine, exacerbate), slower (impede, hinder), or less bad (mitigate, alleviate).',
          'Exacerbate and mitigate need a problem that is already there.',
          'Attribute X to Y = say Y caused X.'
        ],
        thai: 'กริยาวิชาการส่วนใหญ่บอก “ทิศทาง” ของผลกระทบ: ทำให้ดีขึ้น/แข็งแรงขึ้น (enhance, foster, reinforce), ทำให้แย่ลง/อ่อนลง (undermine, exacerbate, erode), ขัดขวาง/ชะลอ (impede, hinder, hamper, curb) และบรรเทา (mitigate, alleviate) ให้ดูบริบทก่อนว่าสถานการณ์ดีขึ้นหรือแย่ลง กับดักคือตัวเลือกที่ทิศทางกลับกัน หรือคำอย่าง cause แทน exacerbate ทั้งที่ปัญหามีอยู่แล้ว และระวังคำบุพบทคู่ เช่น attribute X to Y = บอกว่า Y เป็นสาเหตุของ X',
        examples: [
          { s: 'Group projects can <strong>foster</strong> teamwork and trust.', g: '↑ help it grow over time.' },
          { s: 'Late-night scrolling can <strong>exacerbate</strong> existing sleep problems.', g: '↓ make an existing problem worse.' },
          { s: 'Extra pumps helped <strong>mitigate</strong> the effects of the floods.', g: '↘ reduce the harm, not prevent it.' },
          { s: 'Many sleep experts <strong>attribute</strong> teenage tiredness <strong>to</strong> early school start times.', g: 'attribute X to Y: Y is the cause.' },
          { s: 'Much of Thailand’s soft power is <strong>derived from</strong> its food and music.', g: 'derive from = get from a source.' }
        ],
        trap: 'An option has the right direction but the wrong timing. In “scrolling can exacerbate the sleep problems many teenagers <em>already</em> have”, “cause” looks fine, but the problem already exists, so the verb must mean “make worse”. Dodge: before choosing, ask two questions — which way (better/worse)? and did the problem exist before?',
        analogy: { title: 'The Skytrain control room', text: 'Imagine a BTS controller with five buttons: SPEED UP (enhance), BUILD MORE TRAINS (foster), SLOW DOWN (impede), DAMAGE THE TRACK (undermine) and MAKE THE DELAY WORSE (exacerbate). Every academic verb is one of those buttons. In any passage, ask which button the cause just pressed.' },
        map: { center: 'Academic verbs', branches: [
          { label: '↑ Better / stronger', leaves: ['enhance', 'foster', 'reinforce, bolster'] },
          { label: '↓ Worse / weaker', leaves: ['undermine', 'exacerbate', 'erode'] },
          { label: '✋ Slow / block', leaves: ['impede, hinder', 'hamper', 'curb = limit'] },
          { label: '↘ Less severe', leaves: ['mitigate', 'alleviate'] },
          { label: 'Partners', leaves: ['attribute X to Y', 'derive from', 'encroach on'] }
        ] },
        chant: { title: 'Verb Compass', beat: 'clap-clap-stomp (4/4)', lines: [
          'Enhance and foster, push it up high,',
          'Reinforce the wall so it touches the sky.',
          'Undermine digs from under the ground,',
          'Exacerbate takes a bad thing further down!',
          'Impede and hinder put a foot in the way,',
          'Mitigate the damage, make it lighter today.',
          'Attribute to — that’s pointing at the cause,',
          'Find the direction, then answer. Applause!'
        ] }
      },
      items: [
        { id: 't7l2s1-1', type: 'read', tag: 'vc-verbs', level: 'B2+',
          passage: 'The September floods could not be prevented, but the city worked hard to mitigate their effects. Extra pumps were installed at the worst-hit underpasses, temporary barriers in eastern districts were reinforced, and warnings were sent to every phone by cell broadcast.',
          stem: 'The word “mitigate” is closest in meaning to ________.',
          options: ['study', 'reduce', 'prevent', 'measure'], answer: 1,
          hint: 'The first half of the sentence tells you what the city could NOT do.',
          why: '“The floods could not be prevented”, so the city made their effects less severe with pumps, barriers and warnings: <em>reduce</em>. “Prevent” is the trap — the passage directly rules it out. “Study” and “measure” fit the grammar but describe research, not the practical steps listed.' },

        { id: 't7l2s1-2', type: 'cloze', tag: 'vc-verbs', level: 'B2+', passage: T7_P_PHONEBAN, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['impede', 'enhance', 'undermine', 'exacerbate'], answer: 1,
          hint: 'Who is speaking in this sentence, supporters or critics? What would they claim a phone-free school does?',
          why: 'Supporters argue for phone-free schools, so they claim the ban makes concentration better: <em>enhance</em>. The other three all push in the negative direction: <em>impede</em> (slow down), <em>undermine</em> (weaken) and <em>exacerbate</em> (make a problem worse) — and concentration is not a problem that can be exacerbated.' },

        { id: 't7l2s1-3', type: 'equiv', tag: 'vc-verbs', level: 'B2+',
          given: 'Scrolling on your phone in bed can <strong>exacerbate</strong> the sleep problems that many teenagers already have.',
          stem: 'The word in bold is closest in meaning to ________.',
          options: ['hide', 'cause', 'make worse', 'draw attention to'], answer: 2,
          hint: 'Notice the word “already”. Does the problem start with the scrolling?',
          why: 'The sleep problems “already” exist, and scrolling makes them more serious: <em>make worse</em>. “Cause” is the near miss: it has the right negative direction but the wrong timing, since you cannot cause a problem that is already there. “Draw attention to” and “hide” change the message completely.' },

        { id: 't7l2s1-4', type: 'sort', tag: 'vc-verbs', level: 'B2+',
          stem: 'Which way does each verb push the situation?',
          bins: [
            { key: 'up', label: '↑ Better / stronger', hint: 'improve, help grow, strengthen' },
            { key: 'down', label: '↓ Worse / weaker', hint: 'damage, weaken, make worse' },
            { key: 'block', label: '✋ Slow / limit', hint: 'get in the way, hold back' }
          ],
          items: [
            { text: 'enhance your memory', bin: 'up' },
            { text: 'foster creativity', bin: 'up' },
            { text: 'bolster her confidence', bin: 'up' },
            { text: 'reinforce the barriers', bin: 'up' },
            { text: 'undermine public trust', bin: 'down' },
            { text: 'exacerbate the shortage', bin: 'down' },
            { text: 'erode the coastline', bin: 'down' },
            { text: 'impede the rescue', bin: 'block' },
            { text: 'hinder progress', bin: 'block' },
            { text: 'curb plastic use', bin: 'block' }
          ],
          hint: 'Imagine each verb as a button on a control panel. Does it push up, push down, or put on the brakes?',
          why: '<em>Enhance, foster, bolster</em> and <em>reinforce</em> strengthen or improve. <em>Undermine, exacerbate</em> and <em>erode</em> weaken or worsen. <em>Impede</em> and <em>hinder</em> slow things down, and <em>curb</em> limits or holds something back (curb plastic use = use less of it).' },

        { id: 't7l2s1-5', type: 'read', tag: 'vc-verbs', level: 'C1',
          passage: 'Short-sightedness is rising fast among Thai schoolchildren. Eye specialists at Chao Phraya University attribute the increase to long hours of close-up screen time and, above all, too little time outdoors in daylight. They recommend at least two hours of outdoor play a day.',
          stem: 'In the passage, the specialists “attribute the increase to” screen time and too little time outdoors. This means they ________.',
          options: ['compare the increase with these habits', 'say the increase is caused by these habits', 'hope these habits will reduce the increase', 'predict that the increase will cause these habits'], answer: 1,
          hint: 'Look at their recommendation in the last sentence. Why would they recommend more outdoor play?',
          why: 'To <em>attribute X to Y</em> is to say that Y causes X, which is why the specialists recommend more outdoor play: they believe these habits cause the rise. The near miss reverses the direction (the increase causing the habits). “Compare with” fits the grammar but loses the idea of cause, and nothing suggests the habits reduce the problem.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't7l2s2', name: 'Evaluative adjectives & word parts', cefr: 'C1', tag: 'vc-adjs',
      theory: {
        key: 'Evaluative adjectives carry the writer’s <strong>judgement</strong> and its <strong>strength</strong>: decode them with word parts (<em>un-, in-, dis-, mis-, bene-, mal-, -ous, -ity</em>), then check that your answer is exactly as strong as the original.',
        body: [
          'TCAS’s rarest words are often adjectives: <em>sedentary</em> (TCAS67), <em>vital</em> (TCAS68), <em>nefarious</em> (TCAS69). They matter because they tell you what the writer thinks: <em>commendable</em> praises, <em>nefarious</em> condemns, <em>ubiquitous</em> says “everywhere”. Two things decide the answer: the <strong>direction</strong> (positive or negative judgement) and the <strong>strength</strong> (<em>ubiquitous</em> is stronger than “common”; <em>vital</em> is stronger than “useful”).',
          '<strong>Morphology is a decoder.</strong> Prefixes: <em>un-, in-, im-, dis-</em> = not (<em>unprecedented</em> = without a precedent, never happened before; <em>inconclusive</em> = not leading to a conclusion); <em>mis-</em> = wrongly (<em>misleading</em>); <em>bene-</em> = good, well (<em>beneficial, benevolent</em>); <em>mal-</em> = bad, badly (<em>malicious, malfunction</em>). Suffixes tell the job: <em>-ous, -ive, -al, -able</em> = adjective; <em>-ity, -ness</em> = noun (<em>ubiquity, integrity</em>). Knowing <em>sede-</em> (sit, as in sediment) makes <em>sedentary</em> = involving lots of sitting.',
          '<strong>How TCAS tests them.</strong> The options are usually four simple adjectives, and one distractor is from the <em>right field but the wrong strength</em> (<em>popular</em> for <em>ubiquitous</em>; <em>unexpected</em> for <em>unprecedented</em>; <em>serious</em> for <em>adverse</em>). Procedure: Step 1 — positive or negative? Step 2 — decode the word parts. Step 3 — check the passage for the strength (examples, numbers, “almost every…”). Step 4 — replace and reread.',
          'Word parts give a first guess, not a guarantee: <em>invaluable</em> means extremely valuable, not “not valuable”. Always let the context have the final word.'
        ],
        simple: [
          'These adjectives show what the writer thinks: good or bad, and how much.',
          'Use word parts: un-/in-/dis- = not; mis- = wrongly; bene- = good; mal- = bad.',
          'Choose the answer that is exactly as strong as the word: “ubiquitous” means everywhere, not just popular.'
        ],
        thai: 'คำคุณศัพท์เชิงประเมิน (evaluative adjectives) บอกความเห็นของผู้เขียนทั้ง “ทิศทาง” (บวก/ลบ) และ “ระดับความเข้ม” ใช้รากศัพท์ช่วยเดา: un-, in-, dis- = ไม่; mis- = ผิด; bene- = ดี; mal- = ไม่ดี; sede- = นั่ง (sedentary = นั่งมาก ไม่ค่อยเคลื่อนไหว) กับดักที่พบบ่อยคือคำในกลุ่มความหมายเดียวกันแต่อ่อนหรือแรงเกินไป เช่น popular แทน ubiquitous หรือ unexpected แทน unprecedented และระวังข้อยกเว้นอย่าง invaluable ที่แปลว่ามีค่ามาก',
        examples: [
          { s: 'QR payment is now <strong>ubiquitous</strong> at Thai street stalls.', g: 'found everywhere — stronger than “popular”.' },
          { s: 'A <strong>sedentary</strong> lifestyle raises the risk of heart disease.', g: 'sede- = sit: involving lots of sitting, inactive.' },
          { s: 'Clean water is <strong>vital</strong> after a flood.', g: 'absolutely necessary — stronger than “useful”.' },
          { s: 'Scammers use <strong>nefarious</strong> tricks, such as fake bank texts.', g: 'wicked, criminal — a strong negative judgement.' },
          { s: 'The results of the study were <strong>inconclusive</strong>.', g: 'in- + conclusive: they did not prove anything either way.' }
        ],
        trap: 'You choose the option that points the right way but is weaker or stronger than the original. “Unprecedented” is not “unexpected”: a record crowd can be expected and still unprecedented. Dodge: after picking, ask “Is my answer as strong as the word?” and look for the passage detail (numbers, “never”, “almost every”) that proves the strength.',
        analogy: { title: 'The volume knob', text: 'Evaluative adjectives come with a volume setting. “Common” is volume 4; “ubiquitous” is volume 10. “Useful” is 5; “vital” is 10. The replacement must play at the same volume, or the song changes. Word parts tell you which song; the context tells you the volume.' },
        map: { center: 'Evaluative adjectives', branches: [
          { label: 'Direction', leaves: ['praise: commendable', 'blame: nefarious', 'harm: adverse'] },
          { label: 'Strength', leaves: ['ubiquitous > common', 'vital > useful', 'unprecedented > unusual'] },
          { label: 'Prefix decoder', leaves: ['un-/in-/dis- = not', 'mis- = wrongly', 'bene- good, mal- bad'] },
          { label: 'Suffix decoder', leaves: ['-ous, -ive = adjective', '-ity, -ness = noun'] }
        ] },
        moves: [
          { move: 'Thumbs up or thumbs down', says: 'Direction: praise or blame?' },
          { move: 'Turn an imaginary volume knob', says: 'Strength: same volume as the original?' },
          { move: 'Chop the air in front of you twice', says: 'Chop the word into parts: un- | precedent | -ed' },
          { move: 'Point back at the passage', says: 'Context has the final word (invaluable!)' }
        ]
      },
      items: [
        { id: 't7l2s2-1', type: 'read', tag: 'vc-adjs', level: 'C1',
          passage: 'Five years ago, paying by QR code was a novelty at Thai street stalls. Today it is ubiquitous: from noodle carts in Yaowarat to fruit sellers on country roads in Nan, almost every vendor displays a code, and many no longer keep much change.',
          stem: 'The word “ubiquitous” is closest in meaning to ________.',
          options: ['modern', 'popular', 'found everywhere', 'convenient to use'], answer: 2,
          hint: 'Look at the examples after the colon: from where to where, and how many vendors?',
          why: 'The colon introduces the evidence: from city noodle carts to country fruit sellers, “almost every vendor” uses QR codes, so it is <em>found everywhere</em>. “Popular” is the wrong-strength trap: something can be popular in one place without being everywhere. “Convenient” and “modern” may be true of QR payment, but they are not what the word means.' },

        { id: 't7l2s2-2', type: 'read', tag: 'vc-adjs', level: 'C1',
          passage: 'Chao Phraya University’s open day drew an unprecedented 40,000 visitors this year, more than double the previous record. The organisers had planned for a big crowd, but the car parks were full by 8 a.m. and the campus shuttle buses ran non-stop until evening.',
          stem: 'The word “unprecedented” can be best replaced by ________.',
          options: ['welcome', 'unexpected', 'disappointing', 'never seen before'], answer: 3,
          hint: 'Find the comparison with earlier years in the first sentence.',
          why: '“More than double the previous record” shows that nothing like this had happened before: <em>never seen before</em> (un- + precedent, an earlier example). “Unexpected” is the near miss, but the organisers “had planned for a big crowd”, and the word is about history, not surprise. “Welcome” and “disappointing” are judgements, not the meaning of the word.' },

        { id: 't7l2s2-3', type: 'equiv', tag: 'vc-adjs', level: 'C1',
          given: 'Bow’s decision to hand the lost wallet — with all 5,000 baht still inside — to the security guard was truly <strong>commendable</strong>.',
          stem: 'The word in bold is closest in meaning to ________.',
          options: ['admirable', 'surprising', 'profitable', 'understandable'], answer: 0,
          hint: 'Is the writer praising, criticising or simply describing Bow’s action?',
          why: '<em>Commendable</em> means deserving praise (to commend = to praise), and returning a wallet full of money is exactly that: <em>admirable</em>. “Understandable” is the near miss: it is positive but weak, meaning only “easy to understand the reasons for”. “Surprising” adds an idea that is not there, and “profitable” reverses the point, since Bow gained nothing.' },

        { id: 't7l2s2-4', type: 'sort', tag: 'vc-adjs', level: 'C1',
          stem: 'Use the word parts. What does the first part of each word add to the meaning?',
          bins: [
            { key: 'good', label: 'good / well', hint: 'bene-' },
            { key: 'bad', label: 'bad / wrongly', hint: 'mal-, mis-' },
            { key: 'not', label: 'not / opposite', hint: 'un-, in-, dis-' }
          ],
          items: [
            { text: 'benevolent', bin: 'good' },
            { text: 'beneficial', bin: 'good' },
            { text: 'malicious', bin: 'bad' },
            { text: 'malfunctioning', bin: 'bad' },
            { text: 'misleading', bin: 'bad' },
            { text: 'unprecedented', bin: 'not' },
            { text: 'inconclusive', bin: 'not' },
            { text: 'dishonest', bin: 'not' }
          ],
          hint: 'Cover the end of each word and look only at the first two or three letters.',
          why: '<em>Bene-</em> means good or well: benevolent (kind), beneficial (helpful). <em>Mal-</em> and <em>mis-</em> mean bad or wrongly: malicious (wanting to harm), malfunctioning (working badly), misleading (giving the wrong idea). <em>Un-, in-</em> and <em>dis-</em> mean not: unprecedented, inconclusive, dishonest.' },

        { id: 't7l2s2-5', type: 'read', tag: 'vc-adjs', level: 'C1',
          passage: 'Most people who receive this year’s flu vaccine feel completely normal afterwards. Some, however, report adverse effects, such as a sore arm, a headache or a mild fever that disappears within a day. Doctors say these reactions are a sign that the immune system is responding.',
          stem: 'The word “adverse” is closest in meaning to ________.',
          options: ['serious', 'unwanted', 'surprising', 'permanent'], answer: 1,
          hint: 'Look at the examples after “such as”. How bad are they, and how long do they last?',
          why: '<em>Adverse</em> effects are negative, unwanted ones — here a sore arm or mild fever: <em>unwanted</em>. “Serious” is the wrong-strength trap, because the examples are mild. “Permanent” is contradicted by “disappears within a day”, and doctors present the effects as normal, not surprising.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't7l2s3', name: 'Abstract nouns that sum things up', cefr: 'C1', tag: 'vc-nouns',
      theory: {
        key: 'Abstract nouns are <strong>labels for ideas</strong> — a result (<em>upshot, repercussion</em>), a weakness (<em>drawback</em>), a check (<em>scrutiny</em>), an agreement (<em>consensus</em>), a quality (<em>integrity</em>). Ask which idea the label is sticking onto, and the meaning appears.',
        body: [
          'Writers use abstract nouns to <strong>package</strong> a whole situation into one word. In TCAS69, <em>upshot</em> packaged a chain of events into one word: the final result (the key was simply <em>result</em>). So the fastest way to understand an abstract noun is to find what it is packaging. <em>The drawback is the battery</em> → the battery is a weakness. <em>The decision came under scrutiny</em> → people were examining it closely.',
          '<strong>Group them by job.</strong> Results: <em>upshot</em> (final result, often after a story), <em>outcome</em>, <em>repercussion</em> (an unexpected, usually bad effect that comes later — often plural). Minus and plus: <em>drawback</em> (disadvantage), <em>trade-off</em> (you gain one thing, lose another), <em>incentive</em> (something that encourages action). People: <em>proponent/advocate</em> (supporter), <em>critic, sceptic</em> (doubter). Checking and agreeing: <em>scrutiny</em> (close examination), <em>consensus</em> (general agreement). Qualities and tendencies: <em>integrity</em> (honesty), <em>propensity</em> (natural tendency), <em>phenomenon</em> (an event or fact that can be observed), <em>aspiration</em> (strong hope or ambition).',
          '<strong>Partners give them away.</strong> Nouns come with fixed verbs: <em>come under</em> scrutiny, <em>reach</em> a consensus, <em>face</em> repercussions, <em>have a</em> propensity <em>to</em>, <em>the</em> upshot <em>was that</em>. When a noun is tested in a cloze, the verb partner is the biggest clue (more in Level 3). In a reading item, look for the sentence the noun summarises — usually just before it.'
        ],
        simple: [
          'Abstract nouns are one-word labels for ideas: a result, a problem, a check, an agreement.',
          'Find what the noun is talking about in the sentence before or after it.',
          'Upshot = result. Drawback = disadvantage. Scrutiny = close checking. Consensus = everybody agrees.'
        ],
        thai: 'คำนามนามธรรม (abstract nouns) เป็น “ป้ายชื่อ” ที่สรุปทั้งสถานการณ์ในคำเดียว เช่น upshot = ผลสุดท้าย, repercussion = ผลกระทบ (มักไม่ดี) ที่ตามมา, drawback = ข้อเสีย, scrutiny = การตรวจสอบอย่างละเอียด, consensus = ความเห็นพ้องกัน, integrity = ความซื่อสัตย์ ให้หาว่าคำนามนั้นสรุปเรื่องอะไรในประโยคก่อนหน้า และสังเกตกริยาคู่ เช่น come under scrutiny, reach a consensus กับดักคือเลือกคำที่อยู่ในเรื่องเดียวกันแต่ทำหน้าที่ต่างกัน เช่น target หรือ reason แทน result',
        examples: [
          { s: 'The <strong>upshot</strong> was that the school cut its plastic waste by only 8%.', g: 'upshot = the final result of the story before it.' },
          { s: 'The earbuds’ one real <strong>drawback</strong> is the battery.', g: 'drawback = disadvantage, weakness.' },
          { s: 'The exam board’s decision came under intense <strong>scrutiny</strong>.', g: 'come under scrutiny = be examined closely and critically.' },
          { s: 'There is a growing <strong>consensus</strong> that teenagers need more sleep.', g: 'consensus = general agreement.' },
          { s: 'Copying an AI essay is a question of academic <strong>integrity</strong>.', g: 'integrity = honesty and strong moral principles.' }
        ],
        trap: 'The distractor belongs to the same story but does a different job. For “the upshot was that waste fell by only 8%”, options like “target” (the hoped-for 40%) and “reason” (why it happened) are in the story, but only “outcome” is the thing the noun labels. Dodge: ask “result, cause, goal or person?” before you look at the options.',
        analogy: { title: 'Folder labels on your laptop', text: 'You don’t open every file to know what’s inside; the folder name tells you: “Results”, “Problems”, “Checks”. Abstract nouns are folder labels for ideas. Upshot is the “Final result” folder; scrutiny is the “Under inspection” folder. Read the label, then peek at the files around it to confirm.' },
        map: { center: 'Abstract nouns', branches: [
          { label: 'Results', leaves: ['upshot = final result', 'outcome', 'repercussions (bad, later)'] },
          { label: 'Plus & minus', leaves: ['drawback', 'trade-off', 'incentive'] },
          { label: 'People', leaves: ['proponent, advocate', 'critic, sceptic'] },
          { label: 'Checks & agreement', leaves: ['scrutiny', 'consensus'] },
          { label: 'Qualities', leaves: ['integrity', 'propensity', 'aspiration'] }
        ] },
        story: { title: 'The Upshot of the Shot', panels: [
          { who: 'Pun', text: 'I kicked the ball at the window, the window broke, and the upshot is… I’m aiming better next time!' },
          { who: 'Fah', text: 'That’s not an upshot, that’s an aspiration. The upshot is the final result.' },
          { who: 'Krit', text: 'The upshot is that your mum is paying for the window and you are banned from the pitch for a week.' },
          { who: 'Nong Bot', text: 'Calculating repercussions: one window, one week, zero pocket money. Beep.' },
          { who: 'T.Chris', text: 'And that, class, is why “upshot” is closest in meaning to “result”, not “target”.' },
          { who: 'Pun', text: 'Fine. My new aspiration is a sport with no windows.' }
        ], moral: 'Ask what job the noun does: result (upshot), hope (aspiration) or later effect (repercussion).' }
      },
      items: [
        { id: 't7l2s3-1', type: 'read', tag: 'vc-nouns', level: 'C1',
          passage: 'In June the school canteen switched to reusable trays and banned plastic bags. However, many students simply bought their snacks in plastic bags from the shop across the road. The upshot was that the school’s plastic waste fell by only 8% in the first term, far less than the 40% it had hoped for.',
          stem: 'The word “upshot” is closest in meaning to ________.',
          options: ['reason', 'target', 'purpose', 'outcome'], answer: 3,
          hint: 'The sentence with “upshot” comes at the end of a story. What does it tell you?',
          why: '“The upshot was that…” reports what finally happened after the ban and the students’ reaction: an 8% fall. That is the <em>outcome</em>. “Target” is the near miss — the 40% the school hoped for is in the same sentence, but it is the goal, not the result. “Reason” and “purpose” describe why things happened, not what happened in the end.' },

        { id: 't7l2s3-2', type: 'read', tag: 'vc-nouns', level: 'C1',
          passage: 'The Pulse 5 earbuds are light, clear and surprisingly cheap at 990 baht. Their one real drawback is the battery, which lasts barely three hours — not enough for a long bus ride to Hua Hin, let alone a full school day. If you can live with that, they are a bargain.',
          stem: 'The word “drawback” can be best replaced by ________.',
          options: ['danger', 'mistake', 'selling point', 'disadvantage'], answer: 3,
          hint: 'Look at how the reviewer describes the battery, and the words “If you can live with that”.',
          why: 'The reviewer praises the earbuds but names the short battery life as the one weak point: a <em>disadvantage</em>. “Selling point” reverses the reviewer’s judgement, since a three-hour battery is a weakness. “Mistake” suggests someone did something wrong, and “danger” suggests risk to safety, which the review never mentions.' },

        { id: 't7l2s3-3', type: 'cloze', tag: 'vc-nouns', level: 'C1', passage: T7_P_GLASSES, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['integrity', 'consensus', 'scrutiny', 'aspiration'], answer: 2,
          hint: 'The next sentence says what parents and journalists did. Which noun fits “came under intense ___”?',
          why: 'After the viral clip, parents and journalists were asking questions, so the university was being examined closely: it “came under intense <em>scrutiny</em>”, a fixed partnership. <em>Integrity</em> is the near miss — the case is about honesty — but you cannot “come under integrity”. <em>Consensus</em> (agreement) and <em>aspiration</em> (ambition) do not fit the partner verb or the meaning.' },

        { id: 't7l2s3-4', type: 'equiv', tag: 'vc-nouns', level: 'C1',
          given: 'Psychologists say teenagers have a natural <strong>propensity</strong> to take bigger risks when their friends are watching.',
          stem: 'The word in bold is closest in meaning to ________.',
          options: ['tendency', 'fear', 'ability', 'permission'], answer: 0,
          hint: 'Think about what “natural” adds. Is this about skill, or about what people are likely to do?',
          why: 'A <em>propensity</em> is a natural tendency to behave in a certain way, so teenagers are more likely to take risks with friends watching: <em>tendency</em>. “Ability” is the near miss: “a natural ability to take risks” would be about skill, not about what they typically do. “Fear” reverses the idea, and “permission” changes the message.' },

        { id: 't7l2s3-5', type: 'sort', tag: 'vc-nouns', level: 'C1',
          stem: 'Put each abstract noun in the folder that matches its job.',
          bins: [
            { key: 'res', label: 'A result', hint: 'what happens after' },
            { key: 'ppl', label: 'A person who takes a side', hint: 'for or against' },
            { key: 'chk', label: 'Checking or agreeing', hint: 'examining, deciding together' },
            { key: 'pm', label: 'Weighing plus and minus', hint: 'gains, losses, reasons to act' }
          ],
          items: [
            { text: 'upshot', bin: 'res' },
            { text: 'repercussion', bin: 'res' },
            { text: 'proponent', bin: 'ppl' },
            { text: 'critic', bin: 'ppl' },
            { text: 'sceptic', bin: 'ppl' },
            { text: 'scrutiny', bin: 'chk' },
            { text: 'consensus', bin: 'chk' },
            { text: 'drawback', bin: 'pm' },
            { text: 'trade-off', bin: 'pm' },
            { text: 'incentive', bin: 'pm' }
          ],
          hint: 'For each noun, ask: is it something that happens, someone, a process, or a reason to choose?',
          why: '<em>Upshot</em> and <em>repercussion</em> are results (a repercussion is usually a bad one that comes later). A <em>proponent</em> supports an idea; a <em>critic</em> and a <em>sceptic</em> doubt or attack it. <em>Scrutiny</em> is close checking and <em>consensus</em> is agreement. A <em>drawback</em> is a minus, a <em>trade-off</em> balances a plus against a minus, and an <em>incentive</em> is a reason to act.' }
      ]
    }
  ],
  check: { id: 't7l2ck', name: 'Systems Check · Academic words', items: [
    { id: 't7l2ck-1', type: 'cloze', tag: 'vc-verbs', level: 'C1', passage: T7_P_PHONEBAN, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['foster', 'hinder', 'diminish', 'exacerbate'], answer: 0,
      hint: 'Read the next sentence about break times. What happens between students when the phones are gone?',
      why: 'Supporters say that without phones students “play, argue and talk”, so the ban helps real friendships grow: <em>foster</em>. <em>Hinder</em> and <em>diminish</em> push in the opposite direction. <em>Exacerbate</em> is doubly wrong: it means make worse, and it needs an existing problem, but friendships are not a problem.' },

    { id: 't7l2ck-2', type: 'cloze', tag: 'vc-verbs', level: 'C1', passage: T7_P_PHONEBAN, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['bolster', 'mitigate', 'exacerbate', 'undermine'], answer: 3,
      hint: 'The paragraph now turns to the critics. What are they afraid will happen to students’ digital skills?',
      why: '“Critics, however, worry…” signals a negative effect on skills students will need later, so the ban may weaken them: <em>undermine</em>. <em>Exacerbate</em> is the near miss: it is negative too, but it means make an existing <em>problem</em> worse, and digital skills are not a problem. <em>Mitigate</em> fails for the same reason (it reduces a problem that already exists), and <em>bolster</em> means strengthen, the supporters’ direction.' },

    { id: 't7l2ck-3', type: 'read', tag: 'vc-adjs', level: 'C1',
      passage: 'In February the smell of smoke from burning sugarcane fields was pervasive in the town. It reached classrooms, buses and even the inside of the new shopping mall, and several schools cancelled outdoor lessons for a week.',
      stem: 'The word “pervasive” is closest in meaning to ________.',
      options: ['unpleasant', 'temporary', 'present everywhere', 'harmful to people’s health'], answer: 2,
      hint: 'The second sentence lists where the smell went. What do the places show?',
      why: 'The smell reached classrooms, buses and even inside the shopping mall, so it had spread through everything: <em>present everywhere</em>. “Unpleasant” and “harmful to people’s health” may well be true of smoke, but they are not what the word means (right topic, wrong meaning). “Temporary” is not supported: the passage is about how far the smell spread, not how long it lasted.' },

    { id: 't7l2ck-4', type: 'equiv', tag: 'vc-adjs', level: 'C1+',
      given: 'Office workers who lead <strong>sedentary</strong> lives are advised to stand up and walk for a few minutes every hour.',
      stem: 'The word in bold can be best replaced by ________.',
      options: ['busy', 'inactive', 'stressful', 'unhealthy'], answer: 1,
      hint: 'What does the advice ask these workers to start doing? That tells you what they are not doing now.',
      why: 'The advice is to stand up and walk, so these workers spend most of the day sitting: <em>inactive</em> (sede- = sit). “Unhealthy” is the near miss — a sedentary life is often unhealthy, but that is a result, not the meaning. “Busy” and “stressful” describe the workload, not the lack of movement.' },

    { id: 't7l2ck-5', type: 'cloze', tag: 'vc-nouns', level: 'C1', passage: T7_P_GLASSES, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['drawback', 'consensus', 'scrutiny', 'repercussion'], answer: 1,
      hint: 'The council met twice and then announced one rule. What did its members “reach”?',
      why: 'After two meetings the council agreed on a single rule, so it “reached a <em>consensus</em>” (general agreement), the natural partner of <em>reach</em>. <em>Scrutiny</em> was what the university faced, not what the council reached. A <em>drawback</em> and a <em>repercussion</em> are negative results, and the colon introduces a decision, not a problem.' },

    { id: 't7l2ck-6', type: 'read', tag: 'vc-nouns', level: 'C1+',
      passage: 'For many Grade 12 students, a weekend job at a café involves a trade-off. They earn their own money and gain real work experience, but they lose two days that could be spent revising — and, often, sleeping.',
      stem: 'The word “trade-off” is closest in meaning to ________.',
      options: ['a type of contract', 'a difficult decision', 'a balance of gains and losses', 'a fair exchange of goods between sellers'], answer: 2,
      hint: 'Read the second sentence. What do the students get, and what do they give up?',
      why: 'The second sentence lists what students gain (money, experience) and what they lose (revision time, sleep): a <em>balance of gains and losses</em>. “A fair exchange of goods” is the literal trap, built on the everyday meaning of <em>trade</em>. “A difficult decision” is related but misses the idea of gaining one thing by losing another.' }
  ] }
});

/* ==================================================== LEVEL 3 WORD PARTNERS */
T7.levels.push({
  id: 't7l3', n: 3, name: 'Word partners', cefr: 'C1',
  blurb: 'Some words refuse to go out alone. Collocations, phrasal verbs and dependent prepositions are fixed partnerships, and Text Completion tests whether you know who goes with whom.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't7l3s1', name: 'Collocations: the noun picks its verb', cefr: 'B2+', tag: 'vc-colloc',
      theory: {
        key: 'English pairs words by <strong>habit, not logic</strong>: we <em>play</em> a role, <em>pose</em> a risk, <em>raise</em> concerns and <em>take</em> something into account. In a collocation gap, read the <strong>noun</strong> first — it chooses its verb.',
        body: [
          'Why “<em>play</em> a role” and not “do a role” or “make a role”? There is no deep reason; it is simply the partnership that millions of speakers have repeated. That is what a <strong>collocation</strong> is: a pair that sounds right because it is common. Because logic cannot help, TCAS gives four verbs that all mean roughly “do” and asks which one the noun accepts. In TCAS Text Completion, <em>plays a role</em> and <em>contribute to</em> have both appeared as keys.',
          '<strong>The core partnerships for articles.</strong> <em>play</em> a role / a part; <em>pose</em> a risk / a threat / a challenge; <em>raise</em> concerns / questions / awareness; <em>take</em> X into account, <em>take</em> measures / action / steps; <em>draw</em> a conclusion; <em>reach</em> a consensus / an agreement / a decision; <em>meet</em> a deadline / a need; <em>bridge</em> the gap. Adjective partners too: <em>heavy</em> rain, <em>strong</em> evidence, <em>high</em> risk, <em>key</em> role.',
          '<strong>The delexical verbs</strong> — make, do, take, pay — carry almost no meaning of their own, so you must learn their nouns. <em>Make</em>: an effort, a decision, progress, a mistake. <em>Do</em>: research, harm, damage, your best. <em>Take</em>: action, a break, measures, responsibility. <em>Pay</em>: attention, a compliment, the price.',
          '<strong>The procedure.</strong> Step 1: find the noun (or noun phrase) that the gap attaches to — it may be after the gap or, in the passive, before it (<em>a risk is posed</em>). Step 2: say the four options with that noun quietly in your head. Step 3: if two sound possible, check the rest of the phrase (<em>take ___ into account</em> needs <em>into account</em>). Keep a notebook of partnerships, not single words.'
        ],
        simple: [
          'Some words always go together: play a role, pose a risk, raise concerns, take something into account.',
          'Look at the noun first. Then choose the verb that usually goes with it.',
          'Learn words in pairs, not alone: make an effort, do research, take action, pay attention.'
        ],
        thai: 'Collocation คือคำที่ใช้คู่กันเป็นนิสัยของภาษา ไม่ได้มาจากตรรกะ เช่น play a role, pose a risk, raise concerns, take … into account, reach a consensus, draw a conclusion ในข้อ Text Completion ตัวเลือกมักเป็นกริยาที่ความหมายใกล้กันหมด (do/make/play/take) ให้ดูคำนามหลังช่องว่างก่อน เพราะคำนามเป็นตัวเลือกกริยา กับดักคือเลือกตามการแปลภาษาไทย เช่น “ทำบทบาท” → do a role ซึ่งผิด ต้องเป็น play a role',
        examples: [
          { s: 'Sleep <strong>plays a key role</strong> in memory.', g: 'play + role (never do/make a role).' },
          { s: 'PM2.5 <strong>poses a serious risk</strong> to children’s lungs.', g: 'pose + risk / threat / challenge.' },
          { s: 'Teachers have <strong>raised concerns</strong> about AI homework tools.', g: 'raise + concerns / questions / awareness.' },
          { s: 'Planners must <strong>take</strong> rising sea levels <strong>into account</strong>.', g: 'take X into account = consider X.' },
          { s: 'The council <strong>reached a consensus</strong> after two meetings.', g: 'reach + consensus / agreement / decision.' }
        ],
        trap: 'Translating from Thai. “ทำ” becomes “do” or “make”, so students write “do a role” or “make a risk”. All four options are real verbs, so the wrong ones still look fine on paper. Dodge: never translate the verb; say the whole partnership aloud (“pose a risk”, “make a risk”) and trust the one you have heard in real English.',
        analogy: { title: 'Fixed duos', text: 'Some duos just belong together: mango and sticky rice, som tam and sticky rice, BTS and ARMY. Put mango with fried rice and nobody will arrest you, but everyone will stare. Collocations are the same: “do a role” is not illegal, but every examiner will stare.' },
        map: { center: 'Collocations', branches: [
          { label: 'Article favourites', leaves: ['play a role', 'pose a risk', 'raise concerns', 'take into account'] },
          { label: 'make / do', leaves: ['make an effort, progress', 'do research, harm'] },
          { label: 'take / pay', leaves: ['take action, measures', 'pay attention, the price'] },
          { label: 'Method', leaves: ['find the noun first', 'say the pair aloud', 'check the whole phrase'] }
        ] },
        story: { title: 'Pun Does a Role', panels: [
          { who: 'Pun', text: 'Big news! I will do a role in the school play. I make a risk every time I go on stage.' },
          { who: 'Fah', text: 'You PLAY a role. And you TAKE a risk. Or the stage POSES a risk to you.' },
          { who: 'Pun', text: 'English is so random. Who decides?' },
          { who: 'T.Chris', text: 'Millions of speakers, by habit. Nobody “does” a role, the same way nobody eats mango with fried rice.' },
          { who: 'Nong Bot', text: 'Searching one million sentences… “do a role”: 0 results. “play a role”: 1,000,000. Beep!' },
          { who: 'Pun', text: 'OK. I will play a role, take a risk, and pay attention to my lines. Happy?' }
        ], moral: 'Collocations are habits, not logic: learn the noun with its verb.' }
      },
      items: [
        { id: 't7l3s1-1', type: 'cloze', tag: 'vc-colloc', level: 'B2+', passage: T7_P_HEAT, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['does', 'makes', 'plays', 'takes'], answer: 2,
          hint: 'Look at the noun right after the gap: “a key role”. Which verb normally goes with it?',
          why: 'The fixed partnership is <em>play a role</em> (or <em>play a part</em>), so sleep <em>plays</em> a key role. “Does” and “makes” are the translation traps from Thai “ทำ”, and “takes” is used with role only when a person accepts a part (she took a leading role); for a factor like sleep, the partnership is always <em>play</em> a role.' },

        { id: 't7l3s1-2', type: 'cloze', tag: 'vc-colloc', level: 'B2+', passage: T7_P_HEAT, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['do', 'pose', 'have', 'make'], answer: 1,
          hint: 'The noun is “a serious risk”, and heat is the cause of the danger. Say each verb with “a risk” aloud.',
          why: 'Something that creates danger <em>poses</em> a risk (also: poses a threat, poses a challenge). “Have” is the near miss: a person can <em>have</em> a high risk of an illness, but heat, the cause, <em>poses</em> the risk to others. “Do” and “make” do not combine with <em>risk</em>.' },

        { id: 't7l3s1-3', type: 'cloze', tag: 'vc-colloc', level: 'B2+', passage: T7_P_HEAT, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['put', 'grown', 'lifted', 'raised'], answer: 3,
          hint: 'Say each option with “concerns” in your head. Which pair do news reports use?',
          why: 'Officials <em>raise concerns</em> (or raise questions, raise awareness) when they express worry publicly. “Lifted” is the near miss, because lift and raise can both mean “move up”, but only <em>raise</em> partners with concerns. “Put” and “grown” do not form this collocation.' },

        { id: 't7l3s1-4', type: 'sort', tag: 'vc-colloc', level: 'B2+',
          stem: 'Which verb goes with each noun phrase?',
          bins: [
            { key: 'make', label: 'make', hint: 'make ___' },
            { key: 'do', label: 'do', hint: 'do ___' },
            { key: 'take', label: 'take', hint: 'take ___' },
            { key: 'pay', label: 'pay', hint: 'pay ___' }
          ],
          items: [
            { text: 'an effort', bin: 'make' },
            { text: 'a mistake', bin: 'make' },
            { text: 'progress', bin: 'make' },
            { text: 'research', bin: 'do' },
            { text: 'harm', bin: 'do' },
            { text: 'your best', bin: 'do' },
            { text: 'action', bin: 'take' },
            { text: 'safety measures', bin: 'take' },
            { text: 'a break', bin: 'take' },
            { text: 'attention', bin: 'pay' },
            { text: 'a fine', bin: 'pay' },
            { text: 'the price', bin: 'pay' }
          ],
          hint: 'Say each pair aloud with all four verbs. Only one will sound like something you have heard before.',
          why: 'We <em>make</em> an effort, a mistake and progress; <em>do</em> research, harm and our best; <em>take</em> action, safety measures and a break; <em>pay</em> attention, a fine and the price. These are habits of English, so learn each noun together with its verb.' },

        { id: 't7l3s1-5', type: 'choose', tag: 'vc-colloc', level: 'B2+',
          stem: 'After analysing 600 survey replies, the debate team ______ the conclusion that most Grade 12 students sleep less than seven hours a night.',
          options: ['drew', 'took', 'gave', 'pulled'], answer: 0,
          hint: 'The team studied the data and then arrived at an idea. Which verb partners “a conclusion” in that sense?',
          why: 'We <em>draw a conclusion</em> from evidence (we can also <em>reach</em> or <em>come to</em> one). “Pulled” is the near miss, because draw and pull can both mean “move towards you”, but only <em>draw</em> is used with conclusion. “Took” and “gave” do not form this partnership.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't7l3s2', name: 'Phrasal verbs: the particle changes everything', cefr: 'C1', tag: 'vc-phrasal',
      theory: {
        key: 'A phrasal verb is <strong>one word written as two or three</strong>: <em>bring out, stem from, come down with</em>. The small particle changes the meaning completely, so learn each one as a single unit with a one-word formal equivalent.',
        body: [
          '<em>Come</em> is easy and <em>down</em> is easy, but <em>come down with</em> means “catch an illness”. You cannot add the parts together; the particle has changed the whole word. That is why TCAS keeps the verb the same and changes the particle (<em>came down with / came up with / came across / came out with</em>), or keeps the meaning family and changes the direction (<em>stem from / result in / lead to</em>).',
          '<strong>Learn them with a formal twin.</strong> Articles use phrasal verbs, and reading items ask for the formal equivalent: <em>carry out</em> = conduct; <em>look into</em> = investigate; <em>cut down on</em> = reduce; <em>come down with</em> = catch (an illness); <em>bring out</em> = reveal, make visible (<em>competition brings out the best in her</em>) — or launch a product; <em>stem from</em> = originate in, be caused by; <em>rely on</em> = depend on; <em>phase out</em> = remove gradually; <em>turn down</em> = refuse; <em>figure out</em> = understand, solve.',
          '<strong>The direction trap.</strong> Cause–effect phrasal verbs point two ways. <em>Stem from</em> and <em>result from</em> look back to the cause (<em>many cases stem from standing water</em>). <em>Lead to, result in, give rise to</em> look forward to the effect (<em>standing water leads to many cases</em>). Step 1: find the cause and the effect in the sentence. Step 2: check which is the subject. Step 3: choose the verb that points the right way.',
          'Grammar note: some phrasal verbs are <strong>separable</strong> (<em>phase out plastic cups / phase plastic cups out / phase them out</em>), others are not (<em>look into the claims</em>, never “look the claims into”). With a pronoun object, separable verbs must split: <em>phase them out</em>.'
        ],
        simple: [
          'A phrasal verb is verb + small word, and together they have a new meaning: come down with = get sick with.',
          'Learn one formal word for each: carry out = do/conduct, look into = investigate, cut down on = reduce.',
          'Stem from looks back to the cause. Lead to looks forward to the result.'
        ],
        thai: 'Phrasal verb คือกริยา + particle ที่รวมกันเป็นความหมายใหม่ แยกแปลทีละคำไม่ได้ เช่น come down with = ป่วยเป็น, carry out = ดำเนินการ, look into = สืบสวน/ตรวจสอบ, cut down on = ลดปริมาณ, stem from = เกิดจาก, bring out = ทำให้ปรากฏ/ดึงออกมา ข้อสอบมักให้กริยาตัวเดิมแต่เปลี่ยน particle หรือให้กริยาเหตุ-ผลที่ทิศทางกลับกัน (stem from ย้อนไปหาสาเหตุ, lead to/result in ไปหาผล) ให้หาเหตุกับผลในประโยคก่อนเลือก',
        examples: [
          { s: 'Many dengue cases <strong>stem from</strong> standing water.', g: 'stem from = be caused by (points back to the cause).' },
          { s: 'Krit <strong>came down with</strong> a fever after the tournament.', g: 'come down with = catch an illness.' },
          { s: 'Researchers <strong>carried out</strong> a survey of 2,000 students.', g: 'carry out = conduct, do.' },
          { s: 'The debate final <strong>brought out</strong> the best in Fah.', g: 'bring out = reveal, make visible.' },
          { s: 'The canteen will <strong>phase out</strong> plastic straws by March.', g: 'phase out = remove gradually.' }
        ],
        trap: 'Keeping the verb and ignoring the particle. “Came up with a high fever” and “came across a high fever” both start with <em>came</em>, and a nervous student grabs the first one. Dodge: cover the verb and read only the particle options; ask which particle-word, as one unit, gives the meaning the sentence needs.',
        analogy: { title: 'Emoji combos', text: '👍 alone means OK. 👍 + 🙄 means “sure… whatever.” The small extra emoji flips the whole message. Particles are the extra emoji: <em>turn</em> is neutral, <em>turn down</em> is a refusal, <em>turn up</em> is an arrival. Read the combo, not the first symbol.' },
        map: { center: 'Phrasal verbs', branches: [
          { label: 'Formal twins', leaves: ['carry out = conduct', 'look into = investigate', 'cut down on = reduce'] },
          { label: 'Health & life', leaves: ['come down with = catch', 'rely on = depend on', 'bring out = reveal'] },
          { label: 'Direction', leaves: ['stem from ← cause', 'lead to → effect', 'result in → effect'] },
          { label: 'Grammar', leaves: ['phase them out (split)', 'look into it (no split)'] }
        ] },
        chant: { title: 'Particle Power', beat: 'snap-snap-clap (4/4)', lines: [
          'Same old verb, but the particle’s new,',
          'The little word changes the meaning for you.',
          'Carry out a survey, look into the case,',
          'Cut down on the sugar, keep a healthy pace.',
          'Come down with a fever? Straight back to bed,',
          'Stem from looks back to the cause instead.',
          'Lead to looks forward, where the story goes,',
          'Read the whole combo — that’s how it flows!'
        ] }
      },
      items: [
        { id: 't7l3s2-1', type: 'cloze', tag: 'vc-phrasal', level: 'C1', passage: T7_P_DENGUE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['lead to', 'result in', 'stem from', 'give rise to'], answer: 2,
          hint: 'The subject is “many cases”. Is standing water the cause of the cases or their result?',
          why: 'Standing water is where mosquitoes breed, so it is the cause and “many cases” is the effect. With the effect as subject, we need a verb that points back to the cause: cases <em>stem from</em> standing water. “Lead to”, “result in” and “give rise to” all point forward to an effect, so they would mean the cases produced the standing water.' },

        { id: 't7l3s2-2', type: 'cloze', tag: 'vc-phrasal', level: 'C1', passage: T7_P_DENGUE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['came across', 'came up with', 'came out with', 'came down with'], answer: 3,
          hint: 'Krit then “spent a week in bed”. Which combination means catching an illness?',
          why: 'Krit caught a fever and stayed in bed, so he <em>came down with</em> it (= became ill with). “Came up with” means thought of an idea, “came across” means found by chance, and “came out with” means said something suddenly. All four share the verb; only the particles decide.' },

        { id: 't7l3s2-3', type: 'equiv', tag: 'vc-phrasal', level: 'C1',
          given: 'The pressure of the debate final really <strong>brought out</strong> the best in Fah: she was calmer and sharper than she had ever been in practice.',
          stem: 'The phrase in bold is closest in meaning to ________.',
          options: ['revealed', 'reduced', 'removed', 'published'], answer: 0,
          hint: 'The part after the colon tells you what the pressure did to Fah’s abilities.',
          why: 'Under pressure Fah became “calmer and sharper than she had ever been”, so the final made her best qualities visible: <em>revealed</em>. “Published” is the other-sense trap: a company can <em>bring out</em> a new book or phone, but that meaning needs a product. “Reduced” and “removed” reverse the message.' },

        { id: 't7l3s2-4', type: 'build', tag: 'vc-phrasal', level: 'C1',
          stem: 'Build the sentence: the school will gradually stop using single-use plastic cups, with the last ones gone by the end of the year.',
          tiles: ['The school', 'will', 'phase', 'out', 'single-use', 'plastic cups', 'by the end of the year.'],
          solution: 'The school will phase out single-use plastic cups by the end of the year.',
          alt: ['The school will phase single-use plastic cups out by the end of the year.'],
          hint: 'Which two tiles together mean “remove gradually”?',
          why: '<em>Phase out</em> means remove or stop using something gradually. It is separable, so both “phase out single-use plastic cups” and “phase single-use plastic cups out” are correct, though with a long object the particle usually comes straight after the verb. With a pronoun it must split: <em>phase them out</em>.' },

        { id: 't7l3s2-5', type: 'read', tag: 'vc-phrasal', level: 'C1',
          passage: 'After her annual check-up, Mint’s doctor told her to cut down on sugary drinks. She used to buy a large bubble tea every day after school; now she has one small cup on Saturdays and drinks water the rest of the week.',
          stem: 'The phrase “cut down on” means ________.',
          options: ['stop completely', 'drink more slowly', 'reduce the amount of', 'switch to healthier types of'], answer: 2,
          hint: 'Does Mint still drink bubble tea at all? Check the second sentence.',
          why: '<em>Cut down on</em> means reduce the amount of something. Mint went from a large tea every day to one small cup a week. “Stop completely” is the wrong-strength trap, because she still has one on Saturdays (that would be <em>cut out</em>). Nothing says she drinks more slowly or switches to healthier versions.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't7l3s3', name: 'Dependent prepositions', cefr: 'C1', tag: 'vc-prep',
      theory: {
        key: 'Many verbs, adjectives and nouns bring <strong>their own preposition</strong>: <em>focus on, concerned about, benefit from, ban X from -ing, seen as</em>. Find the head word before the gap — it owns the preposition — and remember that a preposition is followed by a noun or <strong>-ing</strong>.',
        body: [
          'Prepositions in English are mostly not about meaning; they are about <strong>ownership</strong>. <em>Focus</em> owns <em>on</em>; <em>prone</em> owns <em>to</em>; <em>capable</em> owns <em>of</em>. TCAS Text Completion keeps testing this: <em>focus on</em>, <em>contribute to</em>, <em>seen as</em>, and a reading item in TCAS68 asked what <em>concerned about</em> meant. The four options are usually four short prepositions, all real, so only the head word can decide.',
          '<strong>Four patterns.</strong> Verb + prep: <em>focus on, rely on, insist on, benefit from, contribute to, consist of, cope with</em>. Adjective + prep: <em>concerned about, aware of, capable of, responsible for, prone to, good/better at</em>. Verb + object + prep: <em>ban/prevent/stop X from -ing, protect X from, see/regard X as, attribute X to</em>. Noun + prep: <em>impact on, access to, demand for, reason for</em>.',
          '<strong>When the preposition changes the meaning.</strong> <em>Concerned about</em> = worried; <em>concerned with</em> = dealing with, about (a book concerned with history). <em>Result in</em> points to the effect; <em>result from</em> points to the cause. <em>Seen as</em> + a role (“seen as a leader”); never “seen like”. So after finding the head word, check the meaning of the whole sentence.',
          '<strong>The -ing rule.</strong> Because <em>to</em> in <em>contribute to, look forward to, be used to, be committed to</em> is a preposition, it takes -ing: <em>contribute to reducing waste</em>, not “contribute to reduce”. The same is true after every other preposition: <em>ban students from using</em>, <em>capable of solving</em>.'
        ],
        simple: [
          'Some words always take the same small word after them: focus ON, depend ON, concerned ABOUT, benefit FROM, seen AS.',
          'Look at the word before the gap. It chooses the preposition.',
          'After a preposition, use a noun or a verb + -ing: ban students from using phones.'
        ],
        thai: 'คำกริยา คำคุณศัพท์ และคำนามหลายคำมีคำบุพบทประจำตัว (dependent prepositions) เช่น focus on, rely on, benefit from, contribute to, concerned about, prone to, ban … from + -ing, be seen as ให้ดูคำหลักที่อยู่หน้าช่องว่าง เพราะคำนั้นเป็นตัวกำหนดคำบุพบท กับดักคือคำบุพบทที่เปลี่ยนความหมาย เช่น result in (นำไปสู่ผล) กับ result from (เป็นผลมาจาก), concerned about (กังวล) กับ concerned with (เกี่ยวข้องกับ) และหลังคำบุพบทต้องใช้ -ing เช่น contribute to reducing',
        examples: [
          { s: 'Many parents are <strong>concerned about</strong> screen time.', g: 'adjective + about = worried.' },
          { s: 'Some schools <strong>ban</strong> students <strong>from using</strong> phones in lessons.', g: 'ban X from + -ing.' },
          { s: 'Teenagers <strong>benefit from</strong> more time outdoors.', g: 'verb + from: the source of the good effect.' },
          { s: 'Fah is widely <strong>seen as</strong> the best speaker in the club.', g: 'see X as + role (never “seen like”).' },
          { s: 'Recycling can <strong>contribute to reducing</strong> landfill waste.', g: '“to” is a preposition here, so -ing follows.' }
        ],
        trap: 'Two prepositions both look possible because both exist with the head word, but they mean different things: <em>result in</em> vs <em>result from</em>, <em>concerned about</em> vs <em>concerned with</em>. Dodge: after choosing, turn the sentence into a simple “cause → effect” or “worry about X” statement and check that it matches the passage.',
        analogy: { title: 'Phone and charger', text: 'Every phone has its own charger port. A USB-C cable will not go into a Lightning port, however hard you push. Head words are phones; prepositions are cables. <em>Focus</em> takes the ON cable, <em>prone</em> takes the TO cable. Check the port before you plug in.' },
        map: { center: 'Dependent prepositions', branches: [
          { label: 'Verb + prep', leaves: ['focus on, rely on', 'benefit from', 'contribute to + -ing'] },
          { label: 'Adjective + prep', leaves: ['concerned about', 'prone to, aware of', 'good at, capable of'] },
          { label: 'Verb + object + prep', leaves: ['ban X from -ing', 'see X as', 'attribute X to'] },
          { label: 'Meaning shifters', leaves: ['result in vs from', 'concerned about vs with'] }
        ] },
        moves: [
          { move: 'Point left, at the word before the gap', says: 'Find the head word — it owns the preposition' },
          { move: 'Mime plugging a cable into a phone', says: 'Plug in its own preposition' },
          { move: 'Roll your hands forward like a wheel', says: 'After the preposition: noun or -ing' },
          { move: 'Point forward, then back over your shoulder', says: 'result in → effect; result from ← cause' }
        ]
      },
      items: [
        { id: 't7l3s3-1', type: 'cloze', tag: 'vc-prep', level: 'C1', passage: T7_P_SCREENS, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['on', 'at', 'for', 'about'], answer: 3,
          hint: 'The head word is “concerned”, and the parents are worried. Which preposition gives that meaning?',
          why: 'When <em>concerned</em> means worried, it takes <em>about</em>: parents are <em>concerned about</em> how much time children spend online. “For” is the near miss: you can be concerned <em>for</em> a person’s safety, but it does not introduce a <em>how much</em> clause like this. “On” and “at” are not used with concerned.' },

        { id: 't7l3s3-2', type: 'cloze', tag: 'vc-prep', level: 'C1', passage: T7_P_SCREENS, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['to', 'of', 'from', 'against'], answer: 2,
          hint: 'The pattern is ban + person + preposition + -ing. Which preposition means “stop them doing it”?',
          why: 'The pattern is <em>ban somebody from doing something</em> (like prevent/stop somebody from doing). “Against” is the near miss because a ban is <em>against</em> something, but with a person as the object and an -ing verb, only <em>from</em> works. “To” and “of” do not follow ban in this pattern.' },

        { id: 't7l3s3-3', type: 'cloze', tag: 'vc-prep', level: 'C1', passage: T7_P_SCREENS, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['at', 'to', 'for', 'from'], answer: 3,
          hint: 'More sleep is the source of the good effect. Which preposition does “benefit” take for that?',
          why: 'We <em>benefit from</em> something that gives us an advantage: young people would <em>benefit from</em> more sleep. “To” is the near miss, because a thing can be <em>of benefit to</em> someone, but the verb <em>benefit</em> takes <em>from</em>. “For” and “at” do not partner the verb.' },

        { id: 't7l3s3-4', type: 'spot', tag: 'vc-prep', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Fah is widely seen', 'like the most', 'confident speaker', 'in the whole debate club.'],
          answer: 1, fix: 'as the most',
          hint: 'Check the preposition that belongs to “seen”.',
          why: 'The pattern is <em>see / regard somebody as</em> + a role: Fah is widely seen <em>as</em> the most confident speaker. <em>Like</em> compares two different things (she speaks like a lawyer), but here Fah <em>is</em> the most confident speaker, so <em>as</em> is needed.' },

        { id: 't7l3s3-5', type: 'choose', tag: 'vc-prep', level: 'C1',
          stem: 'Teenagers who sleep less than six hours a night are more prone ______ accidents on the way to school.',
          options: ['to', 'of', 'for', 'with'], answer: 0,
          hint: 'Find the head word just before the gap. It owns the preposition.',
          why: 'The adjective <em>prone</em> (likely to suffer from something) takes <em>to</em>: prone to accidents, prone to headaches. “Of” is tempting after words like capable of or aware of, but prone never takes it; “for” and “with” are not used either.' }
      ]
    }
  ],
  check: { id: 't7l3ck', name: 'Systems Check · Word partners', items: [
    { id: 't7l3ck-1', type: 'cloze', tag: 'vc-colloc', level: 'C1', passage: T7_P_HEAT, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['put', 'take', 'keep', 'hold'], answer: 1,
      hint: 'Read past the gap: “___ the heat index into account”. Which verb completes this fixed phrase?',
      why: 'The fixed expression is <em>take something into account</em> (= consider it). “Keep” is the near miss because we <em>keep something in mind</em>, which means something similar, but it cannot combine with <em>into account</em>. “Put” and “hold” do not form this phrase.' },

    { id: 't7l3ck-2', type: 'choose', tag: 'vc-colloc', level: 'C1',
      stem: 'After three hours of discussion, the student council finally ______ a consensus on the new rules for the school’s social media page.',
      options: ['did', 'made', 'kept', 'reached'], answer: 3,
      hint: 'Say each verb aloud with “a consensus”. Which pair have you heard in news reports?',
      why: 'A group <em>reaches</em> a consensus (or an agreement, or a decision) after discussion. “Made” is tempting because we <em>make</em> a decision, but it does not partner consensus. “Did” and “kept” do not form this collocation.' },

    { id: 't7l3ck-3', type: 'cloze', tag: 'vc-phrasal', level: 'C1', passage: T7_P_DENGUE, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['giving off', 'putting off', 'turning down', 'carrying out'], answer: 3,
      hint: 'The volunteers are part of a campaign to check every home. What are they doing with the inspections?',
      why: 'Volunteers <em>carry out</em> (= conduct, do) inspections as part of the campaign. “Putting off” (postponing) contradicts a campaign to check every home. “Turning down” (refusing) contradicts it too, and “giving off” is for smells, heat or light.' },

    { id: 't7l3ck-4', type: 'equiv', tag: 'vc-phrasal', level: 'C1+',
      given: 'The university is <strong>looking into</strong> claims that some applicants used AI tools to write their personal statements.',
      stem: 'The phrase in bold is closest in meaning to ________.',
      options: ['rejecting', 'reporting', 'expecting', 'investigating'], answer: 3,
      hint: 'What does an organisation do with claims it has just received but not yet judged?',
      why: '<em>Look into</em> means examine the facts: <em>investigating</em>. “Expecting” is the particle trap: it is close to <em>look forward to</em> or <em>look for</em>, different phrasal verbs with the same verb. “Rejecting” would mean the university has already decided the claims are false, and “reporting” changes the message.' },

    { id: 't7l3ck-5', type: 'cloze', tag: 'vc-prep', level: 'C1+', passage: T7_P_SCREENS, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['in', 'of', 'to', 'from'], answer: 0,
      hint: 'Ask what comes first: the bans, or teenagers hiding what they do online?',
      why: 'Critics fear that the bans will produce a new behaviour, so the hiding is the effect: bans may <em>result in</em> teenagers hiding their activity. “From” is the near miss: <em>result from</em> points back to a cause, which would mean the bans were caused by the hiding. “Of” and “to” do not follow the verb result.' },

    { id: 't7l3ck-6', type: 'choose', tag: 'vc-prep', level: 'C1+',
      stem: 'Contrary to a popular myth, bilingual children are not confused by two languages; if anything, some studies suggest they may be better ______ switching between tasks than their monolingual classmates.',
      options: ['in', 'at', 'for', 'with'], answer: 1,
      hint: 'The head word is “better”, used here for a skill. Which preposition does that adjective take before an activity?',
      why: 'For skills and abilities, <em>good</em> and <em>better</em> take <em>at</em>: better at switching between tasks. “With” is the near miss: we say “good with children” or “good with numbers”, but not before an -ing activity like this. “In” and “for” do not form the pattern.' }
  ] }
});

TOPICS.push(T7);

/* ============================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'vc-clue': {
    name: 'Context clues',
    principle: 'Don’t stop at the unknown word: read one sentence before and after it. Look for a definition (is, means, that is), a contrast (but, whereas, unlike), examples (such as, including) or a restatement (dash, in other words).',
    reteach: 'Put four short sentences on the board, each with a nonsense word (“The zorbent — a small, round biscuit — was delicious”). Students guess each meaning and circle the signal that helped. Name the four clue types from their circles, then add the arrow code: = for definition and restatement, ≠ for contrast, “what do they share?” for examples. Finish with a real TCAS-style item (set in stone … whereas … flexible) and ask students to predict before showing the options.',
    activities: [
      'Nonsense-word detective: pairs write sentences with an invented word and one clue type; the class guesses the meaning and the clue type.',
      'Signal sweep: give out a news article; in three minutes, teams highlight every definition, contrast, example and restatement signal in four colours.'
    ]
  },
  'vc-closest': {
    name: 'Closest in meaning: replace and reread',
    principle: 'Predict a simple meaning first, then put each option into the sentence and reread. The key keeps the grammar, the message and the strength; distractors are another sense of the word, too strong or too weak, or change the message.',
    reteach: 'Model the test aloud with one sentence (“swimming could alleviate the pain, although it would not cure it”): cover the options, predict (“make less”), then drop each option in and reread in full. Label each distractor on the board as “other sense”, “wrong strength” or “changes the message”. Students then write their own distractors of each type for a new word, which makes the pattern stick.',
    activities: [
      'Distractor factory: groups get a sentence and a target word and must write one distractor of each of the three types; other groups identify which is which.',
      'Strength line: arrange cards (common, widespread, ubiquitous; useful, important, vital) on a line from weak to strong on the classroom wall.'
    ]
  },
  'vc-polysemy': {
    name: 'Familiar words, exam meanings',
    principle: 'If TCAS tests an easy word, its everyday meaning is probably the trap. Ask what the word is doing in this sentence: trying times = difficult, thanks to = because of, address a problem = deal with it.',
    reteach: 'Write one easy word (sound, address, fine, novel) in the middle of the board and brainstorm every meaning students know. Then give three sentences and ask which meaning is switched on in each and which word partner switched it on (sound + advice, address + complaints). Show how TCAS always puts the everyday meaning among the options, and practise crossing it out first.',
    activities: [
      'Two-job cards: each card has an easy word; students must say two sentences showing two different meanings within 20 seconds.',
      'Trap spotting: show a TCAS-style item with the everyday meaning as an option; pairs race to name the trap and explain it in one sentence.'
    ]
  },
  'vc-verbs': {
    name: 'Academic verbs',
    principle: 'Work out the direction first: better (enhance, foster), worse (undermine, exacerbate), slower (impede, hinder) or less severe (mitigate, alleviate). Then check timing (exacerbate/mitigate need an existing problem) and partners (attribute X to Y).',
    reteach: 'Draw a compass on the board with four directions and have students place ten academic verbs on it, justifying each with a word part (under-mine, im-pede, en-hance). Then give cause–effect sentences from news topics (floods, screens, heat) and ask for the direction before any options are shown. Contrast cause vs exacerbate and prevent vs mitigate with timelines.',
    activities: [
      'Control panel: students hold up arrow cards (↑ ↓ ✋ ↘) as the teacher reads sentences with academic verbs.',
      'Headline rewrite: groups turn plain headlines (“Heat makes asthma worse”) into academic versions using the verbs, then swap and check direction.'
    ]
  },
  'vc-adjs': {
    name: 'Evaluative adjectives & word parts',
    principle: 'Decide the direction (praise or blame) and the strength, using word parts (un-/in-/dis- = not, mis- = wrongly, bene- = good, mal- = bad). Choose the option at the same strength: ubiquitous means everywhere, not just popular.',
    reteach: 'Teach a prefix bank with one example each, then give students unknown adjectives to decode (malnourished, benefactor, irreversible) before checking a dictionary. Build a volume scale for three families (common → ubiquitous, useful → vital, unusual → unprecedented). Finish with passages where students must find the detail that proves the strength (“almost every vendor”, “more than double the previous record”).',
    activities: [
      'Word-part surgery: students cut adjective cards into prefix, root and suffix and guess the meaning before the teacher confirms.',
      'Volume knob: pairs rank sets of four adjectives from weakest to strongest and defend their order to another pair.'
    ]
  },
  'vc-nouns': {
    name: 'Abstract nouns',
    principle: 'An abstract noun labels an idea. Ask which job it does — result (upshot, repercussion), weakness (drawback), check (scrutiny), agreement (consensus), quality (integrity) — and find the sentence it summarises.',
    reteach: 'Tell a short story (a school ban that went wrong) and pause to label each stage with an abstract noun: the incentive, the proponents, the critics, the scrutiny, the upshot, the repercussions. Students then retell the story using the labels. Highlight the verb partners (come under scrutiny, reach a consensus, face repercussions) because cloze items use them as clues.',
    activities: [
      'Label the story: groups receive a six-sentence news story and must attach six noun labels to the right sentences.',
      'Folder sort: students sort 16 nouns into result / people / checking / plus-and-minus folders and add one verb partner for each.'
    ]
  },
  'vc-colloc': {
    name: 'Collocations',
    principle: 'The noun chooses its verb: play a role, pose a risk, raise concerns, take X into account, reach a consensus, draw a conclusion. Say the full pair aloud and never translate the verb from Thai.',
    reteach: 'Show why translation fails: “ทำ” becomes do, make, play or take depending on the noun. Give a noun column and a verb column and let students connect them, then check with example sentences from news reports. Group the delexical verbs (make, do, take, pay) with their nouns and recycle them in a short speaking task so the pairs are heard, not just seen.',
    activities: [
      'Collocation dominoes: each domino has a verb on one end and a noun on the other; students build a chain of correct pairs.',
      'Wrong-pair hunt: a short article has six broken collocations (make a role, do a risk); teams race to find and fix them.'
    ]
  },
  'vc-phrasal': {
    name: 'Phrasal verbs',
    principle: 'Treat the verb and particle as one word with its own meaning, and learn a formal twin (carry out = conduct, look into = investigate, cut down on = reduce). For cause–effect verbs, check direction: stem from looks back to the cause; lead to and result in look forward.',
    reteach: 'Take one verb (come, bring or look) and show four particles with four meanings, so students feel how the particle takes over. Pair each phrasal verb with a formal twin on a two-column chart. Then draw cause → effect arrows for a dengue or flood story and place stem from, result in and lead to on the correct arrow.',
    activities: [
      'Particle swap: the teacher says a sentence; students change only the particle and explain the new meaning (turn down / turn up / turn over).',
      'Formal twin match: cards with phrasal verbs and formal equivalents are hidden around the room; pairs find and match them.'
    ]
  },
  'vc-prep': {
    name: 'Dependent prepositions',
    principle: 'The word before the gap owns the preposition: focus on, concerned about, benefit from, prone to, ban X from -ing, seen as. After any preposition, use a noun or -ing (contribute to reducing).',
    reteach: 'Sort common head words into verb + prep, adjective + prep and verb + object + prep, and have students chant each pair. Then show the meaning shifters (result in / result from, concerned about / concerned with) with cause–effect arrows. Close with the -ing rule after to-prepositions: contribute to, look forward to, be used to, be committed to.',
    activities: [
      'Charger match: students hold head-word “phones” and preposition “cables” and must find their partner in the room.',
      'Gap sprint: a 10-gap paragraph on social media bans; teams fill the prepositions against the clock and justify each by naming the head word.'
    ]
  }
});
