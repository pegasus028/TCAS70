/* ===========================================================================
   TCAS70 — SYSTEM 11 · Verb Systems  (topic-t11.js)
   Text Completion items 61–75: when four options are four FORMS OF ONE VERB
   (expand / expanding / is expanded / has expanded), the paper is testing the
   verb system — time, agreement, voice, mood or pattern. About 15 of the 60
   Text Completion items in TCAS66–69 belong to this family.
   Core technique: the FOUR QUESTIONS — (1) What is the time anchor?
   (2) What is the true head of the subject? (3) Does the subject do the action
   or receive it? (4) What does the word before the gap demand (a base form,
   to, -ing, from -ing)?
   =========================================================================== */

/* ---------------------------------------------------------- shared passages */
var T11_P_BAN = 'In December 2025, Australia ___(1)___ a test case for the world when it banned social media accounts for children under 16. Since then, several other governments ___(2)___ similar rules, including France, Denmark and Malaysia. The early results, however, are mixed. About 4.7 million accounts had been removed by January 2026, yet a report published in August 2026 found that, three months after the ban, more than 80 per cent of under-16s were still using social media. Britain, which plans its own under-16 ban for 2027, is watching closely. When that ban ___(3)___ effect, regulators there hope to avoid the same problems.';

var T11_P_AIHW = 'The number of Thai students who use AI chatbots for homework ___(1)___ risen sharply since 2024. Pressure from parents and tutoring schools for top TCAS scores ___(2)___ some students to hand in work they did not write themselves. Teachers are responding. At one Bangkok school, each of the new AI guidelines ___(3)___ a clear example of fair and unfair use, and students who break the rules lose marks.';

var T11_P_SANDBAG = 'By the time the rain finally stopped on 27 September 2026, volunteers from our school ___(1)___ sandbags for three days with hardly a break. Since then, they ___(2)___ food and drinking water to families in flooded districts, and they show no sign of stopping. The student club that organises them is small but ambitious: by the end of this year, its members ___(3)___ more than 2,000 hours of community service.';

var T11_P_SLEEP = 'For more than a decade now, researchers ___(1)___ a steady fall in the amount of sleep that teenagers get. The main cause, according to Dr Pimchanok Wattanasiri of Riverbank University, ___(2)___ not homework but screens. In her study, teenagers who keep a phone beside the bed ___(3)___ about 40 minutes less sleep a night than those who leave it outside the room. By the time the study ended in 2025, its 600 volunteers ___(4)___ more than 90,000 nights of sleep data. Last month, her team ___(5)___ an even bigger project, this time with whole families. By the time the TCAS results come out next year, the researchers ___(6)___ data from over 500 homes.';

var T11_P_FLOOD = 'Bangkok’s flooding began on 24 September 2026, when more than 300 millimetres of rain fell on parts of the city in just 48 hours. Two days later, a flood disaster zone ___(1)___ , and warnings ___(2)___ to phones across the city by cell broadcast. The water came from two directions: heavy local rain and water released from the Chao Phraya Dam upstream. Since the rain stopped, temporary flood barriers in some districts ___(3)___ , but officials say draining will take another two to three days.';

var T11_P_DEEPFAKE = 'Since text-to-video apps spread in 2025, almost any event can ___(1)___ in minutes: a flood that never happened, a speech that was never given. Nobody likes ___(2)___ , yet millions of people share clips every day without checking where they came from. Media-literacy teachers now argue that every viral clip needs ___(3)___ before it is shared.';

var T11_P_GRAD = 'Before her graduation photos, Fah decided to have her hair ___(1)___ at a small salon in Siam Square. Pun’s problem was his phone: the screen was cracked, so he got his older brother ___(2)___ it, which saved him 1,500 baht. On the day, the photographer made everyone ___(3)___ the group shot three times because Pun kept blinking.';

var T11_P_CANTEEN = 'Last year, sugary drinks ___(1)___ from the canteens of several Bangkok schools. The change ___(2)___ by a student survey in which 70 per cent of respondents asked for healthier options. Some parents, however, complained that they ___(3)___ before the decision was made. To win back their trust, one school now has its menu ___(4)___ by a nutritionist every term, and students are given water bottles that can ___(5)___ free of charge at filling stations. The full results of the programme are expected ___(6)___ next year.';

var T11_P_COUNCIL = 'At its October meeting, the student council proposed that the school ___(1)___ a phone-free lunch hour every Friday. Several teachers liked the idea but insisted that the rule ___(2)___ to Grade 10 first, as a one-month trial. The principal has now recommended that parents ___(3)___ about the trial before it begins, so that nobody is surprised when their daughter comes home talking about “No-Phone Friday”.';

var T11_P_RECIPE = 'My grandmother never measured anything; she cooked by smell and memory. If she hadn’t finally written her recipes down in 1998, we ___(1)___ how to make her green curry today. Some of the dishes in her notebook, such as fermented fish, can even be dangerous ___(2)___ . ___(3)___ my aunt, who has translated the whole notebook into English, my cousins in Sydney would know none of these dishes.';

var T11_P_PHONES = 'A growing number of countries no longer allow students ___(1)___ phones during lessons. Supporters say the rules help students avoid ___(2)___ by notifications and push them to talk to each other at break time. Critics warn that schools risk ___(3)___ a tool that many students use for learning, and they point out that no rule can prevent a determined teenager ___(4)___ a second phone.';

var T11_P_ELNINO = 'Forecasters expect a strong El Niño in 2026–27, which usually means a hotter, drier start to the year in Thailand. Farmers’ groups have urged the government ___(1)___ now rather than wait for the dry season. Some experts have even recommended that rice farmers ___(2)___ drought-resistant varieties this year. The concern is real: if more of last year’s rain had been stored, many reservoirs ___(3)___ much fuller now. Water-saving methods, ___(4)___ early, can greatly reduce crop losses, but officials must also discourage farmers ___(5)___ too much groundwater. As one water planner put it, “It is essential that these warnings ___(6)___ seriously before the first field dries out.”';

var T11 = {
  id: 't11', n: 11, code: 'System 11', art: 'clock',
  name: 'Verb Systems',
  cefr: 'B2–C1',
  blurb: 'Four options, one verb, four forms. Find the time anchor, the true head noun, the doer, and what the word before the gap demands — from “has expanded” to “that exams be tailored”.',
  levels: []
};

/* ============================================================ LEVEL 1 TIME */
T11.levels.push({
  id: 't11l1', n: 1, name: 'Time', cefr: 'B2',
  blurb: 'Every verb gap has a clock and a subject. Find the time anchor, find the true head noun, then choose the shape of the action.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't11l1s1', name: 'Tense from time signals', cefr: 'B2', tag: 'vt-tense',
      theory: {
        key: 'The <strong>time anchor</strong> chooses the tense: a finished time (<em>in 2025, last month, ago</em>) takes the past simple; a period that reaches now (<em>since, for … now, so far, recently</em>) takes the present perfect; a future time clause (<em>when, by the time, as soon as</em>) takes the present simple.',
        body: [
          'Thai marks time with separate words (<em>แล้ว, เคย, จะ, กำลัง</em>) and the verb itself never changes. English does both: the time word <strong>and</strong> the verb form must tell the same story. That is exactly why TCAS can test tense with four forms of one verb. The examiner hides a <strong>time anchor</strong> somewhere nearby, and three of the four options disagree with it.',
          '<strong>The anchor table.</strong> Past simple: <em>yesterday, last year, in 2025, two days ago, when I was a child</em> — a finished box of time. Present perfect: <em>since 2024, since then, for ten years now, so far, recently, over the past decade, already, yet</em> — a box whose right-hand edge is <em>now</em>. Past perfect: an earlier past, before another past event (<em>by the time the boats arrived, the water had risen</em>). Future time clauses: after <em>when, before, after, until, as soon as, by the time, once</em> we use the <strong>present simple</strong> for the future (<em>when the ban takes effect</em>, never “will take”).',
          '<strong>How TCAS tests it.</strong> In TCAS66, a passage said that “more recently, technology and social media have created a new venue for bullying that ___ its reach”; the options were <em>expand / expanding / is expanded / has expanded</em>. The frame “more recently … have created” puts the change in the up-to-now box, and the singular <em>venue</em> needs <em>has</em>: <strong>has expanded</strong>. Notice that the anchor was not next to the gap. It was earlier in the same sentence.',
          '<strong>The procedure.</strong> Step 1: underline every time word in the sentence and the one before it. Step 2: put the action in a box: finished past, up to now, earlier past, or future. Step 3: delete the forms that belong to another box. Step 4: check agreement and voice on whatever is left (that is Level 1.2 and Level 2).'
        ],
        simple: [
          'Look for the time words first. They tell you the tense.',
          '<em>In 2025, last week, ago</em> → past simple (<em>became</em>). <em>Since, for … now, so far, recently</em> → present perfect (<em>have announced</em>).',
          'After <em>when</em> or <em>by the time</em> about the future, use the present simple: <em>when the ban takes effect</em>, not “will take”.'
        ],
        thai: 'ข้อ tense ใน TCAS ตัวเลือกทั้ง 4 เป็นรูปต่าง ๆ ของกริยาตัวเดียวกัน ให้หา “คำบอกเวลา” (time anchor) ก่อน เช่น in 2025, last month, ago ใช้ past simple ส่วน since, since then, for … now, so far, recently ใช้ present perfect กับดักสำคัญคือคำบอกเวลาอาจอยู่ไกลจากช่องว่างหรืออยู่ในประโยคก่อนหน้า และหลัง when / by the time / as soon as ที่พูดถึงอนาคต ต้องใช้ present simple ไม่ใช่ will',
        examples: [
          { s: 'In December 2025, Australia <strong>became</strong> a test case when it banned under-16 accounts.', g: 'A finished date → past simple, never “has become”.' },
          { s: 'Since then, other governments <strong>have announced</strong> similar rules.', g: '“Since then” = from that point up to now → present perfect.' },
          { s: 'By the time the boats reached the village, the water <strong>had risen</strong> to chest height.', g: 'Earlier past before another past event → past perfect.' },
          { s: 'When the new rule <strong>takes</strong> effect next year, parents will get a letter.', g: 'Future time clause → present simple; the “will” goes in the main clause.' },
          { s: 'So far, only two schools <strong>have signed</strong> up for the trial.', g: '“So far” reaches now → present perfect.' }
        ],
        trap: 'Students see a past-looking context and grab the past simple, but the anchor is <em>since</em> or <em>so far</em>, which needs the present perfect. The reverse trap is just as common: “has become” next to <em>in 2025</em>. Dodge: never choose a tense until you have physically underlined the time word, even if it is in the previous sentence.',
        analogy: { title: 'The Grab ride tracker', text: 'Your Grab app says “Driver arrived at 8:05” — a time stamp, so it is over: past simple. It also says “Your driver has arrived” with no time at all, because what matters is the result now: present perfect. And it never says “When your driver will arrive, we will notify you”; it says “When your driver arrives”. The app already knows the tense rules.' },
        map: { center: 'Find the time anchor', branches: [
          { label: 'Finished past', leaves: ['in 2025, last week', 'two days ago', '→ past simple'] },
          { label: 'Up to now', leaves: ['since, since then', 'for … now, so far', 'recently, over the past', '→ has/have + V3'] },
          { label: 'Earlier past', leaves: ['by the time + past', 'before another past', '→ had + V3'] },
          { label: 'Future clause', leaves: ['when / until / once', 'by the time + future', '→ present simple'] }
        ] },
        story: { title: 'Nong Bot’s Report', panels: [
          { who: 'T.Chris', text: 'Nong Bot, did you upload the class photos?' },
          { who: 'Nong Bot', text: 'Yes! I have uploaded them yesterday at 9 p.m. Beep!' },
          { who: 'Fah', text: 'Bot, “yesterday at 9 p.m.” is a time stamp. The box is closed. It’s “I uploaded them yesterday”.' },
          { who: 'Nong Bot', text: 'Correction accepted. I uploaded them yesterday. Since then, 47 people have liked them.' },
          { who: 'Pun', text: 'And since then, I have deleted three of them. My eyes were closed in every one.' },
          { who: 'T.Chris', text: 'Perfect grammar, terrible news. “Since then” reaches now, so present perfect. Bot, please re-upload.' }
        ], moral: 'Time stamp → past simple. “Since then / so far” → present perfect.' }
      },
      items: [
        { id: 't11l1s1-1', type: 'cloze', tag: 'vt-tense', level: 'B2', passage: T11_P_BAN, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['became', 'becomes', 'has become', 'had become'], answer: 0,
          hint: 'Underline the time phrase at the very start of the sentence. Is that box of time open or closed?',
          why: '“In December 2025” is a finished point in time, so the past simple is needed: Australia <em>became</em> a test case. “Has become” is the near miss, but the present perfect cannot take a finished time like “in December 2025”. “Had become” would need a later past event to look back from, and “becomes” is present.' },

        { id: 't11l1s1-2', type: 'cloze', tag: 'vt-tense', level: 'B2', passage: T11_P_BAN, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['announce', 'announced', 'had announced', 'have announced'], answer: 3,
          hint: 'The first two words of the sentence are the anchor. Where does that period of time end?',
          why: '“Since then” means from December 2025 up to now, so the present perfect is needed: governments <em>have announced</em> similar rules. “Announced” is the tempting option, but the past simple cannot follow a “since” period that reaches the present. “Had announced” looks back from a past point, and “announce” is a present habit.' },

        { id: 't11l1s1-3', type: 'cloze', tag: 'vt-tense', level: 'B2', passage: T11_P_BAN, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['took', 'takes', 'will take', 'would take'], answer: 1,
          hint: 'The ban is planned for the future, but look at the word that opens this part of the sentence.',
          why: 'The ban is planned for 2027, but after the time word “When” we use the present simple for the future: when that ban <em>takes</em> effect. “Will take” is the classic trap, since the future meaning pulls students towards “will”, but the future belongs in the main clause, not the time clause. “Took” is past and “would take” does not match the present “hope”.' },

        { id: 't11l1s1-4', type: 'spot', tag: 'vt-tense', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The school', 'has opened', 'its new science building', 'last Monday.'],
          answer: 1, fix: 'opened',
          hint: 'Find the time phrase. Does it describe a finished moment or a period up to now?',
          why: '“Last Monday” is a finished point in time, so the verb must be past simple: the school <em>opened</em> its new building last Monday. The present perfect (“has opened”) is used without a finished time, for example “The school has just opened its new science building.”' },

        { id: 't11l1s1-5', type: 'choose', tag: 'vt-tense', level: 'B2',
          stem: 'By the time the rescue boats reached the village, the floodwater ______ to chest height.',
          options: ['rose', 'rises', 'has risen', 'had risen'], answer: 3,
          hint: 'Two past events: the boats arriving and the water rising. Which one happened first?',
          why: 'The water rose <em>before</em> the boats arrived, and “by the time + past simple” is the classic signal for the earlier past: the water <em>had risen</em>. “Rose” would put both events at the same moment, “has risen” connects to now rather than to a past moment, and “rises” is present.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't11l1s2', name: 'Agreement with long subjects', cefr: 'B2', tag: 'vt-sva',
      theory: {
        key: 'The verb agrees with the <strong>head noun</strong> of the subject, not with the noun nearest the gap: bracket every “of…”, “for…”, “on…” and “who…” phrase until one noun is left.',
        body: [
          'An English subject can be a whole train of words: <em>intense parental pressure on students for good grades</em>. Only one word in that train decides singular or plural: the <strong>head noun</strong>, here <em>pressure</em>. Everything after it (<em>on students, for good grades</em>) is a passenger. Our ears are fooled because the last noun before the gap (<em>grades</em>) is plural, and the brain “agrees” with the nearest noun. TCAS knows this and builds its trap exactly there.',
          '<strong>How TCAS tests it.</strong> TCAS67 gave “In Southeast Asian countries, intense parental pressure on students for good grades ___ change” with the options <em>is prompted / are prompted / is prompting / are prompting</em>. Two decisions in one item: head noun <em>pressure</em> → singular; pressure causes change (it does not receive it) → active. Answer: <strong>is prompting</strong>. Expect TCAS70 to combine agreement with tense or voice in the same way.',
          '<strong>The bracket method.</strong> Step 1: find the verb gap. Step 2: go back to the start of the subject and put brackets around prepositional phrases (<em>of…, on…, for…, from…, in…</em>), relative clauses (<em>who…, that…, which…</em>) and participle phrases (<em>used by…, living in…</em>). Step 3: the noun left outside the brackets is the head. Step 4: choose the verb for that noun.',
          '<strong>Heads with special rules.</strong> <em>The number of</em> + plural → singular (<em>the number of users has risen</em>), but <em>a number of</em> = several → plural. <em>Each / every / one of</em> + plural → singular. A gerund or a clause as subject → singular (<em>Using phones in class distracts</em>). Uncountables (<em>research, evidence, information, equipment</em>) → singular. <em>As well as, along with, together with</em> do not add to the subject. With <em>either … or / neither … nor</em>, the verb agrees with the nearer noun.'
        ],
        simple: [
          'A long subject has one main noun. The verb agrees with that noun only.',
          'Cover the words after <em>of, for, on, who, that</em>. What noun is left? <em>Pressure (on students for good grades) <strong>is</strong> …</em>',
          '<em>The number of</em> students <strong>has</strong> risen. <em>Each of</em> the rules <strong>includes</strong> an example.'
        ],
        thai: 'ประธานยาว ๆ มีคำนามหลัก (head noun) เพียงคำเดียวที่กำหนดว่ากริยาเป็นเอกพจน์หรือพหูพจน์ ให้ใส่วงเล็บวลีที่ขึ้นต้นด้วย of / for / on / who / that ออกไปก่อน แล้วดูคำนามที่เหลือ เช่น Pressure on students for good grades is prompting … กับดักของข้อสอบคือคำนามพหูพจน์ที่อยู่ติดช่องว่าง (grades, students) ซึ่งไม่ใช่ประธานจริง จำด้วยว่า The number of … ใช้กริยาเอกพจน์ และ Each of … ก็ใช้เอกพจน์',
        examples: [
          { s: 'Pressure <em>(from parents and tutoring schools)</em> <strong>is driving</strong> some students to cheat.', g: 'Head = pressure → singular.' },
          { s: 'The number <em>(of students who use chatbots)</em> <strong>has</strong> risen.', g: '“The number” is one number → singular.' },
          { s: 'Each <em>(of the new guidelines)</em> <strong>includes</strong> an example.', g: 'Each = each one → singular.' },
          { s: 'The results <em>(of the survey of 2,000 students)</em> <strong>were</strong> surprising.', g: 'Head = results → plural, even though “survey” is nearer.' },
          { s: 'Neither the principal nor the teachers <strong>want</strong> a total ban.', g: 'Neither … nor → agree with the nearer noun (teachers).' }
        ],
        trap: 'The noun directly before the gap is plural (<em>grades, students, apps</em>) while the real head is singular, or the other way round. Your ear agrees with the nearest noun and picks the wrong form. Dodge: always bracket the “of/for/on/who” phrases and say the head noun and verb aloud together: “pressure … is prompting”.',
        analogy: { title: 'The idol and the fan crowd', text: 'At a fan meeting, the idol is on stage and hundreds of fans stand behind her holding banners. The fans are loud and close to the microphone, but the interviewer only ever asks the idol the question. The head noun is the idol; the “of…” and “for…” phrases are the fan crowd. The verb interviews the idol only.' },
        map: { center: 'Find the head noun', branches: [
          { label: 'Bracket out', leaves: ['of / on / for … phrases', 'who / that / which clauses', 'used by … / living in …'] },
          { label: 'Always singular', leaves: ['The number of …', 'Each / every / one of …', 'gerund subjects', 'research, evidence, information'] },
          { label: 'Always plural', leaves: ['A number of …', 'the elderly, the young', 'both A and B'] },
          { label: 'Nearer noun wins', leaves: ['either … or', 'neither … nor'] }
        ] },
        chant: { title: 'Who’s the Boss?', beat: 'stomp-clap, stomp-clap (4/4)', lines: [
          'Long, long subject, rolling down the line,',
          'Only one noun gets to sign.',
          'Bracket the “of”, bracket the “for”,',
          'Bracket the “who” and close the door.',
          'Pressure on students? Pressure IS!',
          'The number of users? The number HAS!',
          'Each of the rules? Each one, see —',
          'Find the boss, and the verb agrees!'
        ] }
      },
      items: [
        { id: 't11l1s2-1', type: 'cloze', tag: 'vt-sva', level: 'B2', passage: T11_P_AIHW, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['is', 'has', 'are', 'have'], answer: 1,
          hint: 'What is the main noun of the subject? Also look at the word straight after the gap.',
          why: 'The head of the subject is “The number” (the number is one figure), so the verb is singular, and “risen” after the gap needs the perfect auxiliary: the number … <em>has</em> risen. “Have” is the trap, because “students” and “chatbots” are plural, but they are only inside the “of…” and “who…” phrases. “Is” and “are” cannot combine with “risen” to make an active verb.' },

        { id: 't11l1s2-2', type: 'cloze', tag: 'vt-sva', level: 'B2', passage: T11_P_AIHW, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['is driven', 'are driven', 'is driving', 'are driving'], answer: 2,
          hint: 'Two questions: what is the head noun, and is it doing the pushing or being pushed?',
          why: 'Bracket “from parents and tutoring schools for top TCAS scores” and the head noun is <em>pressure</em>, which is singular. Pressure does the action to “some students”, so the verb is active: pressure <em>is driving</em> some students. “Are driving” agrees with the plural nouns inside the brackets, and the passive forms cannot be followed by the object “some students”.' },

        { id: 't11l1s2-3', type: 'cloze', tag: 'vt-sva', level: 'B2', passage: T11_P_AIHW, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['includes', 'is including', 'are including', 'have included'], answer: 0,
          hint: 'Which word opens the subject? And is “include” a verb we normally use in a continuous form?',
          why: '“Each of the … guidelines” means each single guideline, so the verb is singular: each <em>includes</em> an example. “Are including” and “have included” agree with the plural “guidelines”, which is only inside the “of” phrase. “Is including” is singular, but “include” is a state verb here (it describes what the guideline contains), so it does not take the continuous.' },

        { id: 't11l1s2-4', type: 'spot', tag: 'vt-sva', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The quality of', 'the new school buses', 'have improved', 'a lot this year.'],
          answer: 2, fix: 'has improved',
          hint: 'Bracket the “of” phrase. What noun is left?',
          why: 'The head of the subject is <em>quality</em>, which is singular, so the verb must be <em>has improved</em>. “Buses” is plural but sits inside the phrase “of the new school buses”, so it cannot control the verb.' },

        { id: 't11l1s2-5', type: 'build', tag: 'vt-sva', level: 'B2',
          stem: 'Build the sentence: a single student from Mint’s class got a scholarship.',
          tiles: ['One', 'of the students', 'in Mint’s class', 'has won', 'a scholarship', 'to study in Japan.'],
          solution: 'One of the students in Mint’s class has won a scholarship to study in Japan.', alt: [],
          hint: 'The subject starts with a number word. What does the verb agree with?',
          why: 'The head of the subject is <em>One</em>, so the verb is singular: <em>has won</em>. “Of the students in Mint’s class” is a long passenger phrase; the plural “students” does not change the agreement.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't11l1s3', name: 'Perfect & continuous aspects', cefr: 'B2+', tag: 'vt-aspect',
      theory: {
        key: '<strong>Perfect</strong> (have/had/will have + V3) looks back from a reference point; <strong>continuous</strong> (be + -ing) shows an activity in progress; <strong>perfect continuous</strong> (have/had/will have been + -ing) is an activity running up to that point, usually with <em>for</em> or <em>since</em>.',
        body: [
          'Tense tells you <em>when</em>. Aspect tells you <em>how you look at the action</em>. The perfect aspect stands at a reference point and looks back: now (<em>have worked</em>), a past moment (<em>had worked</em>) or a future deadline (<em>will have worked</em>). The continuous aspect zooms into the middle of an activity. Put them together and you get an activity that has been running <strong>up to</strong> the reference point: <em>have / had / will have been working</em>.',
          '<strong>Three reference points.</strong> Now: <em>for several years (up to now), since 2024, all morning</em> → <strong>have been + -ing</strong>. A past moment: <em>by the time the rain stopped, before the exam began</em> → <strong>had (been)</strong>. A future deadline: <em>by the end of this year, by the time the results come out</em> → <strong>will have (been)</strong>.',
          '<strong>Simple perfect or perfect continuous?</strong> Use the simple perfect for a <em>completed amount</em> (she has written three essays; members will have completed 2,000 hours). Use the continuous for the <em>ongoing activity and its duration</em> (she has been writing all morning). State verbs such as <em>know, believe, own, contain, seem, belong</em> do not normally take the continuous at all: <em>I have known Krit for years</em>, never “have been knowing”.',
          '<strong>How TCAS tests it.</strong> TCAS68: “Scientists ___ on developing this toilet for several years, aiming to solve…” with the options <em>had worked / will have worked / have been working / will have been working</em>. No past or future reference point is mentioned, and “for several years” describes an activity continuing up to now: <strong>have been working</strong>. Procedure: Step 1, find the reference point (now, past, future). Step 2, look for duration (<em>for / since</em>) or a completed number. Step 3, check for state verbs.'
        ],
        simple: [
          'Ask two questions. First: up to when? Now → <em>have</em>. A past moment → <em>had</em>. A future deadline → <em>will have</em>.',
          'Second: a finished number or a long activity? Number → <em>has written three essays</em>. Activity + <em>for/since</em> → <em>has been writing for two hours</em>.',
          'Do not use -ing with <em>know, believe, own</em>: <em>I have known her since 2020.</em>'
        ],
        thai: 'Aspect บอก “มุมมอง” ของการกระทำ perfect (have/had/will have + V3) คือมองย้อนจากจุดอ้างอิง ส่วน perfect continuous (have/had/will have been + V-ing) คือการกระทำที่ดำเนินต่อเนื่องมาจนถึงจุดนั้น มักมี for / since ให้หาจุดอ้างอิงก่อน: ปัจจุบันใช้ have, อดีตใช้ had (เช่น by the time + past), อนาคตใช้ will have (เช่น by the end of this year) กับดักคือ ถ้าเป็นจำนวนที่ทำเสร็จแล้วให้ใช้ perfect ธรรมดา และกริยาบอกสภาพ เช่น know, believe ห้ามใช้รูป -ing',
        examples: [
          { s: 'Scientists <strong>have been working</strong> on the project for several years.', g: 'Activity + “for” up to now → present perfect continuous.' },
          { s: 'By the time the rain stopped, volunteers <strong>had been filling</strong> sandbags for three days.', g: 'Duration up to a past moment → past perfect continuous.' },
          { s: 'By the end of this year, members <strong>will have completed</strong> 2,000 hours.', g: 'A completed number at a future deadline → future perfect (simple).' },
          { s: 'Mint <strong>has known</strong> Krit since they were babies.', g: 'State verb → no continuous, even with “since”.' },
          { s: 'Pun <strong>has been playing</strong> the same game all night, and he <strong>has lost</strong> twelve times.', g: 'Activity → continuous; a counted result → simple.' }
        ],
        trap: 'Students see “for” or “since” and automatically pick the present perfect continuous, but the reference point is a past or future moment (<em>by the time the rain stopped</em> → had been; <em>by the end of the year</em> → will have). The second trap is a counted result (<em>2,000 hours, three essays</em>) which needs the simple perfect. Dodge: find the reference point first, then ask “activity or amount?”.',
        analogy: { title: 'The download bar', text: 'Your phone “has downloaded three episodes” — a finished count. It “has been downloading for an hour” — the bar is still moving. Before the plane took off, it “had downloaded” the whole season. And by the time boarding starts, it “will have downloaded” the last one. Same download, four ways of looking at the bar.' },
        map: { center: 'Aspect = how you look', branches: [
          { label: 'Reference point', leaves: ['now → have', 'past moment → had', 'future deadline → will have'] },
          { label: 'Activity + duration', leaves: ['for / since / all day', '→ been + -ing'] },
          { label: 'Finished amount', leaves: ['three essays, 2,000 hours', '→ simple perfect'] },
          { label: 'No continuous', leaves: ['know, believe, own', 'contain, belong, seem'] }
        ] },
        moves: [
          { move: 'Point at the floor under your feet', says: 'Reference point: now, then or later?' },
          { move: 'Throw your thumb back over your shoulder', says: 'Perfect = look back from that point (have / had / will have)' },
          { move: 'Roll your hands over each other', says: 'Continuous = still rolling (been + -ing), for / since' },
          { move: 'Tap three fingers on your palm', says: 'A counted result? Stop rolling: simple perfect' },
          { move: 'Cross your arms like a guard', says: 'know, believe, own: no -ing allowed' }
        ]
      },
      items: [
        { id: 't11l1s3-1', type: 'cloze', tag: 'vt-aspect', level: 'B2+', passage: T11_P_SANDBAG, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['have filled', 'were filling', 'will have filled', 'had been filling'], answer: 3,
          hint: 'The reference point is at the start of the sentence. Is it now, in the past or in the future? Then look for a duration.',
          why: '“By the time the rain finally stopped” sets a past reference point, and “for three days” shows an activity running up to it, so we need the past perfect continuous: volunteers <em>had been filling</em> sandbags. “Were filling” shows an action in progress at that moment but cannot carry “by the time … for three days”. “Have filled” points to now, and “will have filled” to the future.' },

        { id: 't11l1s3-2', type: 'cloze', tag: 'vt-aspect', level: 'B2+', passage: T11_P_SANDBAG, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['delivered', 'had delivered', 'have been delivering', 'will have been delivering'], answer: 2,
          hint: 'Read the sentence to the end. Is the activity finished, or is it still going on?',
          why: '“Since then” runs from 27 September up to now, and “they show no sign of stopping” tells us the activity is still going on, so the present perfect continuous fits: they <em>have been delivering</em> food. “Delivered” is past simple and cannot follow “since then”. “Had delivered” needs a past reference point, and “will have been delivering” needs a future one.' },

        { id: 't11l1s3-3', type: 'cloze', tag: 'vt-aspect', level: 'B2+', passage: T11_P_SANDBAG, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['completed', 'has completed', 'will have completed', 'will have been completing'], answer: 2,
          hint: 'The deadline is in the future. Is the object an ongoing activity or a finished amount?',
          why: '“By the end of this year” is a future deadline, and “more than 2,000 hours” is a completed amount, so we need the future perfect simple: members <em>will have completed</em> 2,000 hours. “Will have been completing” is the near miss: the continuous stresses an ongoing activity and does not sit well with a counted result. “Completed” and “has completed” do not look forward to a future deadline.' },

        { id: 't11l1s3-4', type: 'gap', tag: 'vt-aspect', level: 'B2+', blank: '(1)',
          lines: [
            { who: 'Situation', text: 'Outside a cinema at Siam Paragon' },
            { who: 'Pun', text: 'Sorry, sorry! The BTS was packed. Did I miss much?' },
            { who: 'Mint', text: 'Miss much? By the time you finally texted me, I ___(1)___ here for forty minutes!' },
            { who: 'Pun', text: 'Okay, okay. The popcorn is on me.' }
          ],
          stem: 'Choose the best option for blank (1).',
          options: ['waited', 'have waited', 'was waiting', 'had been waiting'], answer: 3,
          hint: 'Mint measures her waiting up to a moment. Is that moment now, or earlier?',
          why: 'Mint measures her waiting up to a past moment, “by the time you finally texted me”, and “for forty minutes” gives the duration, so the past perfect continuous is right: I <em>had been waiting</em>. “Have waited” measures up to now, not up to the text. “Was waiting” describes the activity in progress but cannot carry a duration that ends at the text, and “waited” loses the connection to that moment.' },

        { id: 't11l1s3-5', type: 'spot', tag: 'vt-aspect', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Mint', 'has been knowing', 'her cousin Krit', 'since they were babies.'],
          answer: 1, fix: 'has known',
          hint: 'Some verbs describe a state, not an activity. Can those verbs take -ing?',
          why: '<em>Know</em> is a state verb, so it does not normally take the continuous, even with “since”: Mint <em>has known</em> Krit since they were babies. Activity verbs such as “work” or “wait” can use “has been + -ing” with “since”, but state verbs such as know, believe and own stay simple.' }
      ]
    }
  ],

  check: { id: 't11l1ck', name: 'Systems Check · Time', items: [
    { id: 't11l1ck-1', type: 'cloze', tag: 'vt-tense', level: 'B2+', passage: T11_P_SLEEP, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['recorded', 'had recorded', 'have recorded', 'have been recorded'], answer: 2,
      hint: 'Check the last word of the time phrase, then check whether the verb has an object.',
      why: '“For more than a decade now” describes a period that reaches the present, so the present perfect is needed: researchers <em>have recorded</em> a fall. “Have been recorded” has the right tense but is passive, and the verb has an object (“a steady fall”), so it must be active. “Recorded” and “had recorded” do not reach “now”.' },
    { id: 't11l1ck-2', type: 'cloze', tag: 'vt-sva', level: 'B2+', passage: T11_P_SLEEP, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['is', 'are', 'were', 'have been'], answer: 0,
      hint: 'Bracket the “according to …” phrase. Which noun opens the sentence? Singular or plural?',
      why: 'The subject is “The main cause”; the phrase “according to Dr Pimchanok Wattanasiri of Riverbank University” is only extra information. One main cause → singular, and the passage is in the present: the main cause <em>is</em> not homework but screens. “Are” is the trap, because the plural “screens” comes after the verb, but the verb agrees with the subject before it.' },
    { id: 't11l1ck-3', type: 'cloze', tag: 'vt-sva', level: 'B2+', passage: T11_P_SLEEP, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['get', 'gets', 'is getting', 'has gotten'], answer: 0,
      hint: 'The noun right before the gap is not the subject. Bracket the “who …” clause first.',
      why: 'Bracket “who keep a phone beside the bed” and the head noun is <em>teenagers</em>, which is plural, and the study describes a general fact in the present simple: teenagers … <em>get</em> less sleep. “Gets”, “is getting” and “has gotten” are all singular, agreeing with “the bed” or “a phone”, which sit inside the relative clause.' },
    { id: 't11l1ck-4', type: 'cloze', tag: 'vt-aspect', level: 'B2+', passage: T11_P_SLEEP, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['log', 'had logged', 'have logged', 'will have logged'], answer: 1,
      hint: 'The reference point is a past event. What form looks back from a past moment?',
      why: '“By the time the study ended in 2025” is a past reference point, and the data were collected before and up to it, so we need the past perfect: the volunteers <em>had logged</em> 90,000 nights. “Have logged” is the near miss: it has the right shape but looks back from now, not from 2025. “Will have logged” looks back from the future, and “log” is present.' },
    { id: 't11l1ck-5', type: 'cloze', tag: 'vt-tense', level: 'B2+', passage: T11_P_SLEEP, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['launch', 'launched', 'has launched', 'had launched'], answer: 1,
      hint: 'Two words at the start of the sentence tell you whether the box of time is open or closed.',
      why: '“Last month” is a finished time, so the past simple is needed: her team <em>launched</em> a new project. “Has launched” is the near miss, because the project is recent, but the present perfect cannot combine with a finished time such as “last month”. “Had launched” needs a later past event to look back from.' },
    { id: 't11l1ck-6', type: 'cloze', tag: 'vt-aspect', level: 'C1', passage: T11_P_SLEEP, blank: '(6)',
      stem: 'Choose the best option for blank (6).',
      options: ['gather', 'will gather', 'have gathered', 'will have gathered'], answer: 3,
      hint: 'The results come out next year. What will be finished by that deadline?',
      why: '“By the time the TCAS results come out next year” is a future deadline, and the data will be complete before it, so we need the future perfect: the researchers <em>will have gathered</em> data. “Will gather” is future but misses the “finished before the deadline” meaning. “Have gathered” looks back from now, and “gather” is present.' }
  ] }
});

/* =========================================================== LEVEL 2 VOICE */
T11.levels.push({
  id: 't11l2', n: 2, name: 'Voice', cefr: 'B2+',
  blurb: 'Does the subject do the action or receive it? One question separates “is activated” from “activating”, “to be questioned” from “to question” and “have it styled” from “style it”.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't11l2s1', name: 'Passive forms in all tenses', cefr: 'B2', tag: 'vp-passive',
      theory: {
        key: 'Ask whether the subject <strong>does</strong> the action or <strong>receives</strong> it. If it receives it, use <em>be</em> in the right tense + the past participle: <em>is sent, was declared, has been reinforced, is being built, will be announced</em>.',
        body: [
          'A passive sentence moves the <strong>receiver</strong> of the action to the front and makes the doer optional: <em>Warnings were sent to phones (by the city)</em>. News writing loves the passive because the event matters more than the person who did it. Thai has <em>ถูก / โดน</em>, but it usually sounds negative, so Thai students often write “A flood zone declared” or “The system activating” where English needs a neutral passive. In English, anything that receives an action — good, bad or neutral — takes the passive.',
          '<strong>The formula.</strong> The tense lives in <em>be</em>; the main verb is always the past participle (V3). Present: <em>is made</em>. Present continuous: <em>is being made</em>. Past: <em>was made</em>. Present perfect: <em>has been made</em>. Past perfect: <em>had been made</em>. Future: <em>will be made</em>. So to choose the passive tense, use Level 1: find the time anchor, then change only the <em>be</em>.',
          '<strong>How TCAS tests it.</strong> In TCAS68 a toilet “uses a special cleaning system that ___ after each use” (<em>activated / activating / is activated / be activated</em>). The system does not switch itself on; it receives the action, and after <em>that</em> we need a full verb: <strong>is activated</strong>. In TCAS66, “It ___ that student superstition is tied to anxiety” needed <strong>has been established</strong>: nobody is named as the doer, and the finding is true up to now.',
          '<strong>The object test.</strong> Step 1: look straight after the gap. If a noun object follows (<em>___ some students</em>), the verb is active. If nothing follows, or only a <em>by</em> phrase, a time or an adverb, it is probably passive. Step 2: choose the tense of <em>be</em> from the anchor. Step 3: check it is complete: <em>be + V3</em>, never <em>be + V1</em> or a bare V3. Remember that verbs with no object at all — <em>happen, occur, arise, rise, emerge, disappear</em> — can never be passive: “was happened” is always wrong.'
        ],
        simple: [
          'Does the subject do it, or does something happen to it? If something happens to it, use the passive.',
          'Passive = <em>be</em> + V3. Change <em>be</em> for the tense: <em>is sent, was sent, has been sent, will be sent, is being sent</em>.',
          'Quick test: is there an object after the gap? Object → active. No object → maybe passive.'
        ],
        thai: 'Passive voice ใช้เมื่อประธาน “ถูกกระทำ” ไม่ใช่ผู้กระทำ รูปคือ be + V3 โดย tense อยู่ที่ be เช่น is sent, was declared, has been reinforced, is being built ในภาษาอังกฤษ passive ใช้ได้ทั้งเรื่องดีและไม่ดี ต่างจาก “ถูก/โดน” ในภาษาไทย วิธีเช็คเร็ว: ถ้าหลังช่องว่างมีกรรม (object) มักเป็น active ถ้าไม่มีกรรม หรือมี by ตามมา มักเป็น passive กับดักคือกริยาที่ไม่มีกรรม เช่น happen, occur, rise ห้ามทำเป็น passive',
        examples: [
          { s: 'Two days later, a flood disaster zone <strong>was declared</strong>.', g: 'The zone receives the action; finished past → was + V3.' },
          { s: 'Since the rain stopped, the barriers <strong>have been reinforced</strong>.', g: '“Since” → present perfect; receiver → has/have been + V3.' },
          { s: 'The new MRT line <strong>is being built</strong> right now.', g: 'In progress now → is being + V3.' },
          { s: 'The winners <strong>will be announced</strong> at Friday’s assembly.', g: 'Future passive: will be + V3.' },
          { s: 'The problem <strong>arose</strong> after the update. (not “was arisen”)', g: '“Arise” has no object, so it cannot be passive.' }
        ],
        trap: 'The passive is disguised as a past simple. “The system activated after each use” looks fine at a glance, but a system cannot activate itself here, and the gap needs a full verb after “that”. Dodge: ask “Who does it?” out loud. If the answer is not the subject, you need a form of <em>be</em> in front of the V3.',
        analogy: { title: 'The Shopee tracking page', text: 'Read your order tracker: “Your order is being packed. It has been shipped. It will be delivered tomorrow.” Every line is passive, because your parcel never does anything; it only has things done to it. And every line changes only the “be” part to show the time. If the verb’s subject is a parcel, think passive.' },
        map: { center: 'Passive = be + V3', branches: [
          { label: 'Do or receive?', leaves: ['receiver as subject', 'doer optional (by …)', 'object after gap → active'] },
          { label: 'Tense lives in be', leaves: ['is / was + V3', 'has been / had been', 'is being / will be'] },
          { label: 'Never passive', leaves: ['happen, occur, arise', 'rise, emerge, disappear'] },
          { label: 'TCAS frames', leaves: ['that ___ after each use', 'It ___ that …', 'news: was declared'] }
        ] },
        chant: { title: 'Be Plus Three', beat: 'clap-clap-snap (4/4)', lines: [
          'Who did it? Not the subject? Then set the passive free:',
          'Take a “be” for the tense, and add the verb in three.',
          'Is sent, was sent, has been sent today,',
          'Is being built, will be built, and it’s on its way.',
          'Look behind the gap: an object in the frame?',
          'Then the subject is the doer: active is the game.',
          'Happen, rise and arise never take a “be” —',
          'No object, no passive: that’s the rule for me!'
        ] }
      },
      items: [
        { id: 't11l2s1-1', type: 'cloze', tag: 'vp-passive', level: 'B2', passage: T11_P_FLOOD, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['declared', 'was declared', 'had declared', 'was declaring'], answer: 1,
          hint: 'Can a zone declare something? Look at what comes straight after the gap.',
          why: 'A zone cannot declare anything; the city declared it, so the zone receives the action. Nothing follows the gap except a comma, and “Two days later” is finished past: a flood disaster zone <em>was declared</em>. “Declared” alone and “had declared” are active forms that would need an object, and “was declaring” makes the zone the doer.' },

        { id: 't11l2s1-2', type: 'cloze', tag: 'vp-passive', level: 'B2', passage: T11_P_FLOOD, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['sent', 'had sent', 'were sent', 'were sending'], answer: 2,
          hint: 'Look at what comes straight after the gap. Is there an object, or only a place and a method?',
          why: 'Warnings do not send anything; someone sends them, and the passage says where they went (“to phones … by cell broadcast”). So the passive past is needed: warnings <em>were sent</em>. “Sent” and “had sent” are active and would need an object such as “messages”, and “were sending” makes the warnings the doers.' },

        { id: 't11l2s1-3', type: 'cloze', tag: 'vp-passive', level: 'B2', passage: T11_P_FLOOD, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['reinforced', 'have reinforced', 'have been reinforced', 'have been reinforcing'], answer: 2,
          hint: 'Two checks: the time anchor at the start of the sentence, and whether barriers can strengthen something themselves.',
          why: '“Since the rain stopped” reaches now, so we need the present perfect, and barriers do not reinforce anything; workers reinforce them, so the verb is passive: barriers <em>have been reinforced</em>. “Have been reinforcing” is the near miss, with the right tense but active voice, which would make the barriers the workers. “Have reinforced” is active too, and “reinforced” alone does not match “since”.' },

        { id: 't11l2s1-4', type: 'choose', tag: 'vp-passive', level: 'B2',
          stem: 'The Orange Line extension ______ right now, so the road outside our school is closed until next year.',
          options: ['is built', 'is building', 'has been built', 'is being built'], answer: 3,
          hint: 'Can a railway line build something? And what do “right now” and “until next year” tell you about the work?',
          why: 'A railway line cannot build anything, so the verb is passive, and “right now … until next year” shows work in progress: the extension <em>is being built</em>. “Has been built” would mean the work is finished, which does not explain why the road is still closed. “Is building” makes the line the builder, and “is built” describes a general fact, not work happening now.' },

        { id: 't11l2s1-5', type: 'spot', tag: 'vp-passive', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The winners of', 'the school’s short-film contest', 'will announce', 'at Friday’s assembly.'],
          answer: 2, fix: 'will be announced',
          hint: 'Who does the announcing, the winners or someone else? Is there an object after the verb?',
          why: 'The winners do not announce anything; the teachers announce them, and there is no object after the verb. So the future passive is needed: the winners <em>will be announced</em> at Friday’s assembly.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't11l2s2', name: 'Passive infinitives & gerunds', cefr: 'B2+', tag: 'vp-passinf',
      theory: {
        key: 'When the word before the gap demands a certain shape, the passive takes that shape: <em>be + V3</em> after a modal, <em>to be + V3</em> after words that need <em>to</em>, and <em>being + V3</em> after prepositions and -ing verbs.',
        body: [
          'Every passive is <em>be</em> + V3. What changes is the form of <em>be</em>, and that form is decided by the word in front of it. After a modal (<em>can, must, should, will</em>) → <strong>be</strong>: <em>can be faked</em>. After anything that needs a to-infinitive (<em>expect, need, want, allow + object, the first / the next / the last + noun</em>) → <strong>to be</strong>: <em>expected to be published</em>. After a preposition or a verb that takes -ing (<em>avoid, like, hate, risk, without, before, after</em>) → <strong>being</strong>: <em>avoid being seen</em>. So you solve these items in two moves: the shape, then the voice.',
          '<strong>How TCAS tests it.</strong> TCAS66: “Some sites, such as Instagram, allow messages to ___ anonymously” (<em>leave / be left / leaving / being left</em>). <em>Allow + object + to</em> gives the shape (base form after <em>to</em>), and messages are left by users — they receive the action — so the answer is <strong>be left</strong>. TCAS69 went one level up: “Eventually, their ideas become ___” with <em>the next foundation to be questioned</em>. The pattern <em>noun + to be + V3</em> means “a noun that will be (or should be) questioned”: the ideas do not question anything; the next generation questions them.',
          '<strong>Useful frames.</strong> <em>needs to be checked, deserves to be heard, is expected to be announced, is said to be, the first student to be chosen, the last group to be told</em>; <em>likes being praised, hates being ignored, avoid being distracted, without being noticed, after being warned</em>. With <em>need</em>, English also allows a short form with active -ing and passive meaning (<em>the clip needs checking</em>), but TCAS prefers the full <em>to be + V3</em>.',
          '<strong>The procedure.</strong> Step 1: look at the word before the gap and name the shape it demands (base / to / -ing). Step 2: ask whether the subject or noun does the action or receives it. Step 3: if it receives it, build shape + <em>be</em> + V3: <em>be faked, to be told, being fooled</em>. Step 4: check that no option mixes shapes, such as “be faking” or “to be questioned the next foundation”.'
        ],
        simple: [
          'First look at the word before the gap. Does it need a base verb, <em>to</em> or <em>-ing</em>?',
          'Then ask: does the thing do the action or receive it? If it receives it, add <em>be</em> + V3.',
          '<em>can <strong>be faked</strong></em> · <em>expected <strong>to be published</strong></em> · <em>hate <strong>being fooled</strong></em>'
        ],
        thai: 'Passive infinitive / gerund คือ passive ที่ต้องเปลี่ยนรูป be ให้เข้ากับคำข้างหน้า: หลัง modal ใช้ be + V3 (can be faked) หลังคำที่ต้องตามด้วย to ใช้ to be + V3 (expected to be published, the next foundation to be questioned) หลังบุพบทหรือกริยาที่ตามด้วย -ing ใช้ being + V3 (avoid being distracted) ให้ดู “รูป” ที่คำข้างหน้าต้องการก่อน แล้วค่อยถามว่าประธานทำเองหรือถูกกระทำ กับดักคือตัวเลือก active ที่รูปถูก เช่น to question หรือ fooling',
        examples: [
          { s: 'Almost any event can <strong>be faked</strong> in minutes.', g: 'Modal → be + V3.' },
          { s: 'Some sites allow messages to <strong>be left</strong> anonymously.', g: 'allow + object + to → to be + V3; messages receive the action.' },
          { s: 'Nobody likes <strong>being fooled</strong>.', g: '“like” + -ing → being + V3.' },
          { s: 'Mint was the last student <strong>to be told</strong> about the new timetable.', g: 'the last + noun + to be + V3.' },
          { s: 'Their ideas become the next foundation <strong>to be questioned</strong>.', g: 'noun + to be + V3 = a thing that will be questioned.' }
        ],
        trap: 'TCAS gives an option with the right shape but the wrong voice: <em>to question</em> instead of <em>to be questioned</em>, <em>fooling</em> instead of <em>being fooled</em>. Both look grammatical, so students stop checking. Dodge: after choosing the shape, always ask “Who does it?” If the noun before the gap is the receiver, you need <em>be / to be / being</em>.',
        analogy: { title: 'The idol’s stage outfits', text: '“Be” is an idol who changes outfits for every stage: on the modal stage she wears <em>be</em>, on the “to” stage she wears <em>to be</em>, on the -ing stage she wears <em>being</em>. Her backup dancer, the V3, wears the same outfit all night. Read the stage first, dress the idol, and never forget the dancer.' },
        map: { center: 'Shape + be + V3', branches: [
          { label: 'After modals', leaves: ['can be faked', 'must be checked', 'will be told'] },
          { label: 'After to', leaves: ['allow X to be left', 'expected to be published', 'the next … to be questioned'] },
          { label: 'After -ing slots', leaves: ['avoid being seen', 'hate being fooled', 'without being noticed'] },
          { label: 'Wrong voice traps', leaves: ['to question vs to be questioned', 'fooling vs being fooled'] }
        ] },
        moves: [
          { move: 'Point at the word before the gap', says: 'What shape does it demand: base, to or -ing?' },
          { move: 'Push your palms forward, then pull them back to your chest', says: 'Doing it (push) or receiving it (pull)?' },
          { move: 'Pull-back again, then hold up three fingers', says: 'Receiving → be + V3 (the third form)' },
          { move: 'Change your hat three times (mime)', says: 'be / to be / being: the idol changes outfits, the V3 never does' }
        ]
      },
      items: [
        { id: 't11l2s2-1', type: 'cloze', tag: 'vp-passinf', level: 'B2+', passage: T11_P_DEEPFAKE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['fake', 'faked', 'faking', 'be faked'], answer: 3,
          hint: 'What kind of word comes before the gap? And can an event fake something?',
          why: 'After the modal “can” we need a base form, and an event does not fake anything; people fake it. So the passive after a modal is needed: any event can <em>be faked</em>. “Fake” is the near miss: it has the right shape but active meaning, which would make the event the faker. “Faked” and “faking” cannot follow “can”.' },

        { id: 't11l2s2-2', type: 'cloze', tag: 'vp-passinf', level: 'B2+', passage: T11_P_DEEPFAKE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['to fool', 'fooling', 'being fooled', 'having fooled'], answer: 2,
          hint: 'The rest of the sentence talks about people sharing fake clips. In that story, are people the tricksters or the victims?',
          why: 'The sentence is about people who share fake clips without checking, so they are the ones who get tricked: nobody likes <em>being fooled</em>. “Fooling” is grammatical after “likes” but active, so it would mean nobody likes tricking others, which does not connect to “yet millions … share clips without checking”. “To fool” is active too, and “having fooled” is active and refers to an earlier action.' },

        { id: 't11l2s2-3', type: 'cloze', tag: 'vp-passinf', level: 'B2+', passage: T11_P_DEEPFAKE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['to check', 'being checked', 'to be checked', 'having been checked'], answer: 2,
          hint: 'Does a clip check something, or is it checked? Then ask which shape “need” takes before a verb.',
          why: 'A clip does not check anything; people check it, so the meaning is passive, and “need” takes a to-infinitive: every clip needs <em>to be checked</em>. “To check” has the right shape but active voice, making the clip the checker. “Being checked” and “having been checked” are not used after “need” in this way.' },

        { id: 't11l2s2-4', type: 'choose', tag: 'vp-passinf', level: 'B2+',
          stem: 'Mint was annoyed. She was the last student in her class ______ about the change to the exam timetable.',
          options: ['to be told', 'having told', 'to have told', 'having been told'], answer: 0,
          hint: 'After “the first / the last + noun”, which shape follows? Then: did Mint tell someone, or did someone tell her?',
          why: 'After “the last + noun”, English uses a to-infinitive, and Mint received the information (someone told her): the last student <em>to be told</em>. “To have told” and “having told” are active, so Mint would be the one telling, and there is no object for her to tell. “Having been told” has the right voice but not the shape that follows “the last student”.' },

        { id: 't11l2s2-5', type: 'build', tag: 'vp-passinf', level: 'B2+',
          stem: 'Build the sentence: people expect that someone will announce the new rule next week.',
          tiles: ['The new rule', 'is', 'expected', 'to be', 'announced', 'next week.'],
          solution: 'The new rule is expected to be announced next week.', alt: ['Next week the new rule is expected to be announced.'],
          hint: 'Two passives are hidden here: people expect it, and someone announces it.',
          why: 'People expect it, so “The new rule is expected”; someone will announce it, so the infinitive is passive too: <em>to be announced</em>. The pattern “is expected / said / thought + to be + V3” is very common in news writing.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't11l2s3', name: 'Causatives: have it done, get someone to do it', cefr: 'B2+', tag: 'vp-causative',
      theory: {
        key: '<em>Have / get + thing + V3</em> means you arrange for someone else to do it (<em>have my hair cut</em>); with a person as the object, use <em>have / make / let + person + base verb</em> but <em>get + person + to + verb</em>.',
        body: [
          'A causative sentence has a boss and a worker. The boss (the subject) causes the action but does not do it with her own hands. “Fah cut her hair” means Fah held the scissors. “Fah <strong>had her hair cut</strong>” means a hairdresser did it. The second verb’s form depends on what comes after <em>have / get</em>: if it is the <strong>thing</strong> that receives the action, use V3 (the hair is cut); if it is the <strong>person</strong> who does the work, use a base verb or <em>to</em>.',
          '<strong>The five frames.</strong> (1) <em>have + thing + V3</em>: I had my phone repaired. (2) <em>get + thing + V3</em>: the same, more informal. (3) <em>have + person + base</em>: I had the technician check it. (4) <em>get + person + to + base</em>: I got my brother to fix it (persuaded him). (5) <em>make + person + base</em> (force) and <em>let + person + base</em> (allow): the photographer made everyone retake the shot. In the passive, <em>make</em> gets its <em>to</em> back: <em>we were made to retake it</em>; <em>let</em> has no passive — use <em>be allowed to</em>.',
          '<strong>How TCAS tests it.</strong> TCAS68 described a school rule: students “are not allowed to dye their hair or ___ in a way that draws attention” with <em>have it style / have it styled / have it to style / have it to styled</em>. The object <em>it</em> (the hair) receives the styling, so the answer is <strong>have it styled</strong>. The distractors mix up the shapes: a base form, <em>to</em>, and <em>to</em> + V3. TCAS70 can easily test the person frames too: <em>get someone to do</em> versus <em>have / make someone do</em>.',
          '<strong>The procedure.</strong> Step 1: find <em>have / get / make / let</em>. Step 2: look at the object — thing or person? Step 3: thing → V3. Person → base after have / make / let; <em>to</em> after get. Step 4: check the word order: <em>have + object + V3</em>. “I have tested my eyes” is present perfect (I tested them myself); “I had my eyes tested” is causative.'
        ],
        simple: [
          '<em>I cut my hair</em> = I did it myself. <em>I had my hair cut</em> = a hairdresser did it.',
          'Thing after have/get → V3: <em>have my phone repaired</em>.',
          'Person after have/make/let → base verb: <em>made us retake</em>. Person after get → to: <em>got my brother to fix it</em>.'
        ],
        thai: 'Causative คือให้คนอื่นทำให้ เช่น I had my hair cut = ไปให้ช่างตัดผมให้ (ไม่ได้ตัดเอง) ดูว่าหลัง have / get เป็น “สิ่งของ” หรือ “คน”: ถ้าเป็นสิ่งของที่ถูกกระทำ ใช้ V3 (have it styled, get my phone repaired) ถ้าเป็นคน ใช้ have / make / let + คน + V1 แต่ get + คน + to + V1 กับดักคือตัวเลือกที่ใส่ to ผิดที่ (have it to style) และการสลับลำดับคำ เช่น have tested my eyes ซึ่งกลายเป็น present perfect',
        examples: [
          { s: 'Fah decided to <strong>have her hair trimmed</strong> before her graduation photos.', g: 'have + thing + V3: the hairdresser trims it.' },
          { s: 'Pun <strong>got his older brother to fix</strong> the screen.', g: 'get + person + to + verb (he persuaded him).' },
          { s: 'The photographer <strong>made everyone retake</strong> the shot.', g: 'make + person + base verb (no “to”).' },
          { s: 'We <strong>were made to retake</strong> it three times.', g: 'Passive of make → “to” comes back.' },
          { s: 'Krit <strong>had his bike stolen</strong> outside the stadium.', g: 'have + thing + V3 can also mean something bad happened to you.' }
        ],
        trap: 'The four options are often the same words with <em>to</em> moved around: <em>have it style / have it styled / have it to style / have it to styled</em>. Students choose by sound. Dodge: say who does the work. If the object is a thing that receives the action, the only possible form is V3, with no <em>to</em> in front of it.',
        analogy: { title: 'Cooking versus ordering on LINE MAN', text: 'If you fry the kaphrao yourself, you “cook dinner”. If you order it, you “have dinner delivered” — the dinner receives the action, so it gets the V3. And if you beg your brother to ride to the shop, you “get your brother to buy it”. The more of a boss you are, the less you do yourself, and the grammar shows it.' },
        map: { center: 'Causatives', branches: [
          { label: 'Thing receives', leaves: ['have it styled', 'get my phone repaired', 'have my eyes tested'] },
          { label: 'Person does', leaves: ['have someone check', 'get someone to fix', 'make / let someone go'] },
          { label: 'Passive of make', leaves: ['was made to retake', 'let → be allowed to'] },
          { label: 'Traps', leaves: ['have it to style', 'have tested my eyes', 'get him fix it'] }
        ] },
        story: { title: 'Pun’s New Haircut', panels: [
          { who: 'Mint', text: 'Pun! Your hair! Did you cut it yourself?' },
          { who: 'Pun', text: 'No way. I had it cut at a salon in Siam. Five hundred baht.' },
          { who: 'Nong Bot', text: 'Analysis: the left side is 3 cm shorter than the right side. Did the salon cut it with its eyes closed? Beep.' },
          { who: 'Pun', text: 'Okay… I had it cut. Then I cut the fringe myself. Then I got my little sister to fix it.' },
          { who: 'T.Chris', text: 'So: you had it cut, you cut it, and you got your sister to fix it. Three structures, one disaster.' },
          { who: 'Fah', text: 'Next time, just have the whole thing done by a professional. And do not let your sister hold scissors.' }
        ], moral: 'Have + thing + V3 = someone else did it. Get + person + to = you persuaded them.' }
      },
      items: [
        { id: 't11l2s3-1', type: 'cloze', tag: 'vp-causative', level: 'B2+', passage: T11_P_GRAD, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['trim', 'trimmed', 'to trim', 'trimming'], answer: 1,
          hint: 'Who holds the scissors: Fah or someone at the salon? What comes straight after “have”?',
          why: 'The object after “have” is a thing, “her hair”, and it receives the action from the hairdresser, so the causative needs the past participle: have her hair <em>trimmed</em>. “Trim” would need a person after “have” (have the hairdresser trim it). “To trim” and “trimming” are not used in the have + thing pattern.' },

        { id: 't11l2s3-2', type: 'cloze', tag: 'vp-causative', level: 'B2+', passage: T11_P_GRAD, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['fix', 'fixed', 'fixing', 'to fix'], answer: 3,
          hint: 'The object after “got” is a person this time, not a thing. Which verb is it, and what does it need?',
          why: 'After “got” the object is a person, “his older brother”, who does the work, and <em>get + person</em> is followed by a to-infinitive: got his older brother <em>to fix</em> it. “Fix” is the near miss, because it is correct after <em>have</em> or <em>make</em> (had his brother fix it) but not after <em>get</em>. “Fixed” would need a thing as the object, and “fixing” does not follow get + person here.' },

        { id: 't11l2s3-3', type: 'cloze', tag: 'vp-causative', level: 'B2+', passage: T11_P_GRAD, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['retake', 'retook', 'retaking', 'to retake'], answer: 0,
          hint: 'The verb before the object is “made”. What follows “make + person” in the active?',
          why: '<em>Make + person + base verb</em> means “force someone to do something”, with no “to” in the active: the photographer made everyone <em>retake</em> the shot. “To retake” is the near miss: “to” returns only in the passive (everyone was made to retake it). “Retook” and “retaking” do not fit the pattern.' },

        { id: 't11l2s3-4', type: 'choose', tag: 'vp-causative', level: 'B2+',
          stem: 'Mint’s mother wants her to ______ before she starts wearing contact lenses.',
          options: ['have her eyes test', 'have her eyes tested', 'have her eyes to test', 'have her eyes testing'], answer: 1,
          hint: 'An optician does the testing. After “have + thing”, what form does the verb take?',
          why: 'An optician will test Mint’s eyes, so this is <em>have + thing + V3</em>: have her eyes <em>tested</em>. “Have her eyes test” uses the base form where a V3 is needed. “Have her eyes to test” and “have her eyes testing” also break the pattern: after a thing that receives the action, only the past participle fits.' },

        { id: 't11l2s3-5', type: 'spot', tag: 'vp-causative', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Krit', 'had his football boots', 'repair', 'before the final.'],
          answer: 2, fix: 'repaired',
          hint: 'After “had” + a thing, who does the work: Krit or someone else? Check the form of each verb.',
          why: 'The object after “had” is a thing, “his football boots”, which receives the action, so the verb must be the past participle: had his boots <em>repaired</em>. The base form “repair” is used only when a person follows “have” (had the shop repair them).' }
      ]
    }
  ],

  check: { id: 't11l2ck', name: 'Systems Check · Voice', items: [
    { id: 't11l2ck-1', type: 'cloze', tag: 'vp-passive', level: 'C1', passage: T11_P_CANTEEN, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['removed', 'had removed', 'were removed', 'were removing'], answer: 2,
      hint: 'What follows the gap: an object, or a phrase telling you where from? Then check the time phrase at the start.',
      why: 'Sugary drinks cannot remove anything; schools removed them, and the gap is followed by “from the canteens”, not an object. With “Last year” (finished past) we need the past passive: drinks <em>were removed</em>. “Removed” and “had removed” are active and need an object, and “were removing” makes the drinks the doers.' },
    { id: 't11l2ck-2', type: 'cloze', tag: 'vp-passive', level: 'C1', passage: T11_P_CANTEEN, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['prompted', 'was prompted', 'has prompted', 'was prompting'], answer: 1,
      hint: 'Look at the small word straight after the gap. Who or what caused the change?',
      why: 'The word “by” introduces the cause (the survey), so the change received the action: the change <em>was prompted</em> by a student survey. “Prompted” and “has prompted” are active and would need an object (the change prompted what?). “Was prompting” makes the change the cause, which reverses the meaning.' },
    { id: 't11l2ck-3', type: 'cloze', tag: 'vp-passive', level: 'C1+', passage: T11_P_CANTEEN, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['did not consult', 'had not consulted', 'were not consulting', 'had not been consulted'], answer: 3,
      hint: 'Parents complained that nobody asked them. Are the parents doing the asking? And which happened first: the asking or the decision?',
      why: 'The parents complain that nobody asked their opinion, so they received the action (passive), and this should have happened before the decision “was made” (earlier past). Together: they <em>had not been consulted</em>. “Had not consulted” has the right time but active voice, which would mean the parents failed to ask someone. “Did not consult” and “were not consulting” are active too.' },
    { id: 't11l2ck-4', type: 'cloze', tag: 'vp-causative', level: 'C1', passage: T11_P_CANTEEN, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['check', 'checked', 'to check', 'checking'], answer: 1,
      hint: 'After “has”, is the object a person or a thing? Who does the work?',
      why: 'The object after “has” is a thing, “its menu”, which receives the action from “a nutritionist”, so the causative needs the past participle: has its menu <em>checked</em> by a nutritionist. “Check” would be correct only with a person after “has” (has a nutritionist check its menu). “To check” and “checking” do not fit the pattern.' },
    { id: 't11l2ck-5', type: 'cloze', tag: 'vp-passinf', level: 'C1', passage: T11_P_CANTEEN, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['be refilled', 'be refilling', 'have refilled', 'being refilled'], answer: 0,
      hint: 'What does the modal “can” need after it? Do the bottles refill anything?',
      why: 'After the modal “can” we need a base form, and bottles do not refill anything; students refill them, so the passive is needed: bottles that can <em>be refilled</em>. “Be refilling” makes the bottles the doers, “have refilled” is active and needs an object, and “being refilled” cannot follow a modal.' },
    { id: 't11l2ck-6', type: 'cloze', tag: 'vp-passinf', level: 'C1', passage: T11_P_CANTEEN, blank: '(6)',
      stem: 'Choose the best option for blank (6).',
      options: ['to publish', 'publishing', 'to be published', 'being published'], answer: 2,
      hint: 'What shape follows “be expected”? And do results publish anything?',
      why: '“Be expected” is followed by a to-infinitive, and results do not publish anything; someone publishes them, so the infinitive is passive: the results are expected <em>to be published</em>. “To publish” has the right shape but active voice, making the results the publisher. “Publishing” and “being published” do not follow “expected”.' }
  ] }
});

/* ================================================= LEVEL 3 MOOD & PATTERNS */
T11.levels.push({
  id: 't11l3', n: 3, name: 'Mood & patterns', cefr: 'C1',
  blurb: 'The C1 end of the verb system: “that exams be tailored”, “we might not know today”, “if not prepared correctly” and “ban students from having”.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't11l3s1', name: 'The subjunctive: suggest that … be', cefr: 'B2+', tag: 'vm-subj',
      theory: {
        key: 'After words of demand, advice and importance (<em>suggest, recommend, insist, demand, propose, It is essential that</em>), the that-clause uses the <strong>bare base form</strong> for every subject and every tense: <em>that she <strong>go</strong></em>, <em>that exams <strong>be tailored</strong></em>.',
        body: [
          'Why does English break its own rules here? Because the that-clause does not describe a fact. It describes something that <em>should</em> happen: a plan, an order, a piece of advice. English marks this “not real yet” meaning with the plain base form — no <em>-s</em>, no past tense, no <em>will</em>. This is the <strong>mandative subjunctive</strong>. You can only see it clearly with he / she / it (<em>that she <strong>arrive</strong></em>), with <em>be</em> (<em>that the rule <strong>be</strong> limited</em>) and with negatives (<em>that he <strong>not</strong> be late</em>).',
          '<strong>The triggers.</strong> Verbs: <em>suggest, recommend, propose, insist, demand, request, require, urge, advise, ask (that)</em>. Adjectives after <em>It is … that</em>: <em>essential, vital, crucial, important, necessary, imperative</em>. Nouns: <em>the suggestion / recommendation / proposal / demand that</em>. The trigger can be in any tense and the base form still does not change: <em>The teachers <strong>insisted</strong> that the rule <strong>be</strong> limited to Grade 10.</em> British English often puts <em>should</em> in front (<em>that the rule should be limited</em>) with the same meaning; TCAS never offers both forms in one item.',
          '<strong>How TCAS tests it.</strong> TCAS67 ended a passage on exams with “It is, therefore, suggested that exams ___ to specific functions” (<em>tailored / be tailored / have tailored / will be tailored</em>). Two steps: the trigger <em>suggested that</em> demands the base form; exams receive the tailoring, so the base form is passive: <strong>be tailored</strong>. The same paper also tested the other route after an adjective: “It is essential, however, ___ a balance” → <strong>to maintain</strong>. So remember both doors: <em>It is essential <strong>to</strong> + base</em> and <em>It is essential <strong>that</strong> + subject + base</em>.',
          '<strong>The procedure and one warning.</strong> Step 1: spot the trigger + <em>that</em>. Step 2: delete every option with -s, a past form, <em>will</em>, <em>to</em> or -ing. Step 3: if the subject receives the action, choose <em>be + V3</em>. Warning: <em>suggest</em> and <em>insist</em> can also report a fact or a claim (<em>The data suggest that sleep <strong>is</strong> falling. He insisted that he <strong>was</strong> innocent.</em>). Use the subjunctive only when the clause says what should be done.'
        ],
        simple: [
          'After <em>suggest, recommend, insist, demand, It is essential that</em>, use the plain base verb: <em>that she <strong>study</strong></em>, <em>that he <strong>be</strong> on time</em>.',
          'No -s, no past, no will — even if the first verb is in the past: <em>They insisted that she <strong>go</strong>.</em>',
          'If the subject receives the action, use <em>be + V3</em>: <em>that exams <strong>be tailored</strong></em>.'
        ],
        thai: 'หลังคำที่แสดงการแนะนำ สั่ง หรือความจำเป็น เช่น suggest, recommend, insist, demand, propose, It is essential/vital that … ประโยค that ต้องใช้กริยาช่อง 1 รูปพื้นฐาน (subjunctive) กับทุกประธาน ไม่เติม -s ไม่ผันอดีต ไม่ใช้ will เช่น that she go, that exams be tailored ถ้าประธานถูกกระทำให้ใช้ be + V3 กับดักคือตัวเลือก will be tailored หรือ tailored ที่ดูเป็นธรรมชาติ และอย่าลืมรูป It is essential to + V1 ที่ข้อสอบก็ออก',
        examples: [
          { s: 'The council proposed that the school <strong>introduce</strong> a phone-free lunch hour.', g: 'Singular subject, but no -s: it is a proposal, not a fact.' },
          { s: 'The teachers insisted that the rule <strong>be limited</strong> to Grade 10.', g: 'Past trigger, still the base form; the rule receives the action → be + V3.' },
          { s: 'It is suggested that exams <strong>be tailored</strong> to specific functions.', g: 'Passive subjunctive after “suggested that”.' },
          { s: 'It is essential <strong>to maintain</strong> a balance.', g: 'The other door: It is essential + to + base.' },
          { s: 'The coach demanded that every speaker <strong>not</strong> use notes.', g: 'Negative subjunctive: not + base, with no “do”.' }
        ],
        trap: 'The options <em>will be tailored</em> and <em>tailored</em> sound natural because the action is in the future, or because the passive “looks done”. But after a trigger + <em>that</em>, only the bare base form is right. Dodge: circle the trigger word, then cross out every option that has -s, a past form, <em>will</em>, <em>to</em> or -ing.',
        analogy: { title: 'The coach’s whiteboard', text: 'A match report says what happened: “She scored twice.” The coach’s whiteboard says what must happen: “Mint — defend left. Fah — be at the net.” Orders on the whiteboard use the plain verb for everyone, with no -s and no tense. A that-clause after <em>suggest</em> or <em>insist</em> is the whiteboard, not the match report.' },
        map: { center: 'Subjunctive', branches: [
          { label: 'Triggers', leaves: ['suggest, recommend, propose', 'insist, demand, urge', 'It is essential / vital that'] },
          { label: 'The form', leaves: ['bare base for all subjects', 'be + V3 if passive', 'not + base (no do)'] },
          { label: 'Other door', leaves: ['It is essential to + base', 'suggest + -ing'] },
          { label: 'Not subjunctive', leaves: ['data suggest a fact', 'insisted he was innocent'] }
        ] },
        story: { title: 'Nong Bot Makes Demands', panels: [
          { who: 'Mint', text: 'The doctor said it is essential that I get eight hours of sleep before the exam.' },
          { who: 'Pun', text: 'Get? Shouldn’t it be “that I gets”? No wait, “that she gets”…' },
          { who: 'Fah', text: 'No -s. It’s an order, not a fact. “It is essential that she get eight hours.”' },
          { who: 'Nong Bot', text: 'New rule learned! I demand that Pun be quiet. I insist that Pun not talk during study time. Beep!' },
          { who: 'Pun', text: 'Then I propose that Nong Bot be switched off.' },
          { who: 'T.Chris', text: 'All three are perfect subjunctives. None of them is going to happen.' }
        ], moral: 'Demand / insist / propose / essential that + bare base form for every subject.' }
      },
      items: [
        { id: 't11l3s1-1', type: 'cloze', tag: 'vm-subj', level: 'B2+', passage: T11_P_COUNCIL, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['introduce', 'introduced', 'to introduce', 'will introduce'], answer: 0,
          hint: 'Find the verb before “that”. Is the council reporting a fact or making a proposal?',
          why: '“Proposed that” introduces something the council wants to happen, so the verb takes the bare base form, even with the singular subject “the school” and the past “proposed”: that the school <em>introduce</em> a lunch hour. “Will introduce” sounds natural because the change is in the future, but <em>will</em> is not used after a trigger + that. “Introduced” and “to introduce” break the pattern too.' },

        { id: 't11l3s1-2', type: 'cloze', tag: 'vm-subj', level: 'B2+', passage: T11_P_COUNCIL, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['limited', 'be limited', 'to be limited', 'being limited'], answer: 1,
          hint: 'Two steps: which form follows “insisted that” when it gives an instruction? Does the rule limit something, or is it limited?',
          why: 'The teachers are saying what should happen (a demand), so the clause after “insisted that” takes the base form, and the rule receives the action, so it is passive: that the rule <em>be limited</em>. “Limited” alone would be an active past verb (the rule limited something), which needs an object and is not the base form required after “insisted that”. “To be limited” and “being limited” cannot follow “that + subject”.' },

        { id: 't11l3s1-3', type: 'cloze', tag: 'vm-subj', level: 'B2+', passage: T11_P_COUNCIL, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['inform', 'be informed', 'have informed', 'to be informed'], answer: 1,
          hint: 'Are the parents telling someone, or is the school telling them? Check what follows the gap.',
          why: '“Recommended that” needs the base form, and the parents receive the information (the school informs them), so the base form is passive: that parents <em>be informed</em> about the trial. “Inform” has the right shape but active voice, and “inform” needs an object (inform someone), which is missing. “Have informed” is active too, and “to be informed” cannot follow “that + subject”.' },

        { id: 't11l3s1-4', type: 'choose', tag: 'vm-subj', level: 'B2+',
          stem: 'Fah’s debate coach demanded that every speaker ______ at the hall by 7 a.m. on the day of the final.',
          options: ['arrive', 'arriving', 'to arrive', 'would arrive'], answer: 0,
          hint: 'The coach is giving an order. What form follows “demanded that” + subject?',
          why: '“Demanded that” introduces an order, so the subjunctive base form is used for every subject, even the singular “every speaker” and the past “demanded”: that every speaker <em>arrive</em>. “To arrive” belongs to a different pattern (demanded to see the manager) and cannot follow “that + subject”. “Would arrive” and “arriving” are not used here.' },

        { id: 't11l3s1-5', type: 'build', tag: 'vm-subj', level: 'B2+',
          stem: 'Build the doctor’s advice to Mint as one formal sentence.',
          tiles: ['The doctor', 'suggested', 'that', 'Mint', 'get', 'more sleep', 'before the exam.'],
          solution: 'The doctor suggested that Mint get more sleep before the exam.', alt: ['Before the exam the doctor suggested that Mint get more sleep.'],
          hint: 'The trigger verb comes before “that”. Why is there no -s on the second verb?',
          why: '“Suggested that” introduces advice, not a fact, so the verb in the that-clause is the bare base form: that Mint <em>get</em> more sleep, not “gets” or “got”. The past tense of “suggested” does not change the base form.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't11l3s2', name: 'Conditionals: mixed & reduced', cefr: 'C1', tag: 'vm-cond',
      theory: {
        key: 'Give each half of a conditional its own clock: a past condition with a present result is a <strong>mixed conditional</strong> (<em>If she hadn’t written them down, we wouldn’t know them today</em>); <em>if</em> + V3 or adjective with no subject is a <strong>reduced conditional</strong> (<em>if not prepared correctly, if necessary</em>).',
        body: [
          'You already know the four conditional types. TCAS tests the variations, and they all come from one principle: <strong>each clause has its own time</strong>. In the if-clause, an unreal past is <em>had + V3</em> and an unreal present is the past simple. In the result clause, an unreal present is <em>would / might / could + base</em> and an unreal past is <em>would / might / could + have + V3</em>. Types 2 and 3 are simply the cases where both clocks agree. A <strong>mixed conditional</strong> is the case where they do not.',
          '<strong>Mixed conditionals.</strong> Past cause → present result: <em>If my grandmother hadn’t written her recipes down (past), we wouldn’t know how to cook her curry today (present).</em> Present state → past result: <em>If I were more organised (always), I would have finished yesterday.</em> TCAS68: “If these traditions hadn’t been passed down through generations, we ___ about them today” (<em>will not even know / might not even know / may not even have known / would not have even known</em>). The word <em>today</em> puts the result in the present: <strong>might not even know</strong>. The option with <em>have known</em> is the type 3 trap.',
          '<strong>Reduced conditionals.</strong> When the if-clause has the same subject as the main clause and its verb is <em>be</em>, English can drop both: <em>Fugu can be dangerous if (it is) not prepared correctly</em> → <strong>if not prepared correctly</strong>. Choose V3 when the subject receives the action (fish is prepared) and -ing only when it does it. Fixed short forms: <em>if necessary, if possible, if in doubt, if so, if not, unless told otherwise, if asked</em>. TCAS68 tested exactly this: <em>if not prepared correctly</em>, with distractors that used the adjective <em>correct</em> or the active -ing form.',
          '<strong>Inverted conditionals (C1).</strong> Formal English drops <em>if</em> and inverts: <em>Had I known</em> = If I had known; <em>Should you need help</em> = If you need help; <em>Were it not for my aunt</em> = If my aunt did not exist or help. Procedure for every conditional item: Step 1, find the time of each clause (look for <em>today, now, yesterday, last year</em>). Step 2, build each half for its own time. Step 3, if there is no subject after <em>if</em>, decide: receives → V3, does → -ing.'
        ],
        simple: [
          'Each part of an if-sentence has its own time. Past “if”, present result: <em>If I had slept more last night, I wouldn’t be tired now.</em>',
          'Look for <em>today / now</em> in the result: then use <em>would + base</em>, not <em>would have + V3</em>.',
          'Short if: <em>if not stored properly</em> (= if it is not stored properly), <em>if necessary</em>.'
        ],
        thai: 'Conditional ใน TCAS ไม่ได้ออกแค่ 4 แบบพื้นฐาน แต่ออก mixed conditional คือเหตุในอดีตส่งผลถึงปัจจุบัน เช่น If she hadn’t written them down, we wouldn’t know them today ให้ดูคำบอกเวลาในแต่ละวรรค (today, now = ปัจจุบัน ใช้ would + V1) และ reduced conditional เช่น if not prepared correctly (ย่อจาก if it is not prepared correctly) ถ้าประธานถูกกระทำใช้ V3 กับดักคือเลือก would have + V3 ทั้งที่มีคำว่า today และเลือกรูป -ing ทั้งที่ประธานถูกกระทำ',
        examples: [
          { s: 'If she hadn’t written the recipes down, we <strong>wouldn’t know</strong> them today.', g: 'Past condition + present result (today) → would + base.' },
          { s: 'If I <strong>had studied</strong> harder last month, I’d feel more confident now.', g: 'The if-clause is about last month → had + V3.' },
          { s: 'Fermented fish can be dangerous <strong>if not stored properly</strong>.', g: 'Reduced: if (it is) not stored → V3, because fish is stored.' },
          { s: '<strong>Were it not for</strong> my aunt, my cousins would know none of these dishes.', g: 'Inverted = If it were not for my aunt.' },
          { s: 'Call the school office <strong>if necessary</strong>.', g: 'Fixed short form = if it is necessary.' }
        ],
        trap: 'The if-clause is clearly past, so students automatically build a type 3 result (<em>would have known</em>) and ignore <em>today</em> or <em>now</em> in the result clause. Dodge: read to the end of the sentence and underline the time word in the result clause before you choose; each half obeys its own clock.',
        analogy: { title: 'The save file', text: 'In a game, a choice you made three levels ago (past) decides what weapons you have right now (present). “If I hadn’t sold the sword in Level 2, I would have it now.” The save file is the past clause; the screen in front of you is the present result. A mixed conditional is just a game with a long memory.' },
        map: { center: 'Two clocks', branches: [
          { label: 'Mixed', leaves: ['had + V3 → would + base', 'look for today / now', 'present state → would have + V3'] },
          { label: 'Reduced', leaves: ['if not prepared correctly', 'if necessary / if possible', 'receives → V3'] },
          { label: 'Inverted', leaves: ['Had I known', 'Should you need', 'Were it not for'] },
          { label: 'Traps', leaves: ['would have + today', 'if not correct prepared', 'unless + noun'] }
        ] },
        chant: { title: 'Two Clocks', beat: 'tick-tock with pen taps, then clap (4/4)', lines: [
          'Tick for the if, and tock for the rest,',
          'Each half has a clock, and each gets tested.',
          'Past in the if? Then “had” plus three,',
          'But “today” in the result? Would plus base, you see!',
          'Drop the “it is” when the subject’s the same:',
          'If not prepared correctly — short and tame.',
          'Were it not for, had I known —',
          'Inverted ifs have a style of their own!'
        ] }
      },
      items: [
        { id: 't11l3s2-1', type: 'cloze', tag: 'vm-cond', level: 'C1', passage: T11_P_RECIPE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['won’t know', 'hadn’t known', 'wouldn’t know', 'wouldn’t have known'], answer: 2,
          hint: 'The if-clause is about 1998. Now read to the end of the sentence: when is the result?',
          why: 'The condition is in the past (“hadn’t … written … in 1998”), but the result is in the present (“today”), so this is a mixed conditional: we <em>wouldn’t know</em> how to make her curry today. “Wouldn’t have known” is the type 3 trap: it ignores “today”. “Won’t know” is for real future conditions, and “hadn’t known” cannot be a result.' },

        { id: 't11l3s2-2', type: 'cloze', tag: 'vm-cond', level: 'C1', passage: T11_P_RECIPE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['if stored properly', 'if not stored properly', 'if not storing properly', 'unless not stored properly'], answer: 1,
          hint: 'Rebuild the full clause with the dishes as the subject. Who does the storing?',
          why: 'The full clause is “if they are not stored properly”; the subject (the dishes) and “are” are dropped because the subject is the same as in the main clause. The dishes receive the action, so the V3 is needed: <em>if not stored properly</em>. “If not storing properly” makes the dishes the storers. “If stored properly” has the opposite meaning (good storage would make them dangerous), and “unless not stored properly” is a double negative that also reverses the meaning.' },

        { id: 't11l3s2-3', type: 'cloze', tag: 'vm-cond', level: 'C1+', passage: T11_P_RECIPE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['Unless', 'Even if', 'Had it not been', 'Were it not for'], answer: 3,
          hint: 'The main clause says “would know”. Which option is a formal way of saying “without my aunt”?',
          why: '<em>Were it not for</em> + noun is an inverted conditional meaning “if it were not for (without) my aunt”, and it matches the result “would know none of these dishes”. “Had it not been” is the near miss: it needs “for” before the noun (had it not been for my aunt). “Unless” and “even if” must be followed by a clause with a verb, not just a noun.' },

        { id: 't11l3s2-4', type: 'gap', tag: 'vm-cond', level: 'C1', blank: '(1)',
          lines: [
            { who: 'Situation', text: 'Two friends after a mock TCAS exam' },
            { who: 'Pun', text: 'How did it go? You look worried.' },
            { who: 'Mint', text: 'Terrible. If I ___(1)___ harder last month, I’d feel far more confident now.' },
            { who: 'Pun', text: 'Well, there’s still time before March. Want to join my study group?' }
          ],
          stem: 'Choose the best option for blank (1).',
          options: ['had studied', 'would be studying', 'would have studied', 'have been studying'], answer: 0,
          hint: 'The if-clause has its own time word. Which clock does “last month” belong to?',
          why: 'The condition is about “last month” (unreal past), so the if-clause needs <em>had + V3</em>: If I <em>had studied</em> harder. The result is about “now” (I’d feel), which makes this a mixed conditional. “Would have studied” puts <em>would</em> inside the if-clause, which standard English does not allow, and the other two forms do not express an unreal past.' },

        { id: 't11l3s2-5', type: 'spot', tag: 'vm-cond', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['If I had known', 'about the storm,', 'I would bring', 'an umbrella yesterday.'],
          answer: 2, fix: 'I would have brought',
          hint: 'Check the time word at the end. Which clock does the result clause belong to?',
          why: 'Both halves are about the past (“had known”, “yesterday”), so the result needs <em>would have + V3</em>: I <em>would have brought</em> an umbrella yesterday. “Would bring” is for a present or future result, which clashes with “yesterday”.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't11l3s3', name: 'Verb patterns: from -ing, object + to, -ing', cefr: 'C1', tag: 'vm-pattern',
      theory: {
        key: 'The verb before the gap chooses the pattern: <em>avoid / risk / consider + -ing</em>; <em>fail / manage / refuse + to</em>; <em>allow / encourage / enable / urge + object + to</em>; <em>ban / prevent / stop / discourage + object + from -ing</em>.',
        body: [
          'Verb patterns feel random, but most follow a loose logic. <strong>To</strong> points towards a future action (<em>encourage someone to talk</em>: push them towards it). <strong>From</strong> means “away from” (<em>prevent someone from bringing</em>: keep them away from it). <strong>-ing</strong> treats the action like a thing you handle (<em>avoid being distracted, risk losing</em>). Use the logic as a memory hook, then learn the families, because TCAS only ever gives you four versions of the same verb.',
          '<strong>The families.</strong> Verb + -ing: <em>avoid, risk, consider, enjoy, mind, deny, suggest, keep, finish, admit</em>. Verb + to: <em>fail, manage, refuse, hope, decide, afford, tend, aim, seem</em>. Verb + object + to: <em>allow, encourage, enable, urge, force, persuade, require, advise, expect, want</em>. Verb + object + from -ing: <em>ban, prevent, stop, discourage, prohibit, protect, keep</em>. Adjective + to: <em>It is essential / important / vital / difficult to maintain</em>.',
          '<strong>How TCAS tests it.</strong> TCAS68: “In the UK, some schools ___ best friends to avoid feelings of exclusion” with <em>stop students to have / prevent students to have / ban students from having / refuse students from having</em>. <em>Stop</em> and <em>prevent</em> are never followed by person + <em>to</em> (British English sometimes drops the <em>from</em>, but TCAS keeps it), and <em>refuse</em> cannot take a person object with <em>from</em>, so only <strong>ban students from having</strong> survives. TCAS67 tested the adjective door: <em>It is essential, however, ___ a balance</em> → <strong>to maintain</strong>. And TCAS67 also used <em>would fail to measure creativity</em>: <em>fail + to</em>.',
          '<strong>The procedure.</strong> Step 1: find the controlling verb just before the gap (it may be two words back, before the person object). Step 2: is there a person object? Step 3: recall the family. Watch the verbs whose meaning changes: <em>stop doing</em> (quit) vs <em>stop to do</em> (pause in order to); <em>remember / forget doing</em> (a past memory) vs <em>remember / forget to do</em> (a task); <em>try doing</em> (an experiment) vs <em>try to do</em> (an effort).'
        ],
        simple: [
          'Each verb has its own pattern. Learn them in groups.',
          '<em>avoid / risk + -ing</em> · <em>fail + to</em> · <em>allow / encourage + person + to</em> · <em>ban / prevent / stop + person + from -ing</em>.',
          'Memory hook: <em>to</em> = towards the action; <em>from</em> = away from the action.'
        ],
        thai: 'Verb pattern คือกริยาแต่ละตัวต้องตามด้วยรูปเฉพาะ ต้องจำเป็นกลุ่ม: avoid / risk / consider + V-ing, fail / manage / refuse + to V1, allow / encourage / enable + คน + to V1, ban / prevent / stop / discourage + คน + from V-ing และ It is essential + to V1 จำง่าย ๆ ว่า to = ไปสู่การกระทำ from = กันออกจากการกระทำ กับดักของ TCAS คือตัวเลือกที่ใช้ prevent/stop + to หรือ refuse + from ให้ดูกริยาหน้าช่องว่างก่อนเสมอ',
        examples: [
          { s: 'Many countries no longer allow students <strong>to use</strong> phones in class.', g: 'allow + object + to.' },
          { s: 'The rules help students avoid <strong>being distracted</strong>.', g: 'avoid + -ing (here a passive -ing).' },
          { s: 'Schools risk <strong>losing</strong> a useful learning tool.', g: 'risk + -ing.' },
          { s: 'No rule can prevent a teenager <strong>from bringing</strong> a second phone.', g: 'prevent + object + from -ing.' },
          { s: 'Traditional exams may fail <strong>to measure</strong> creativity.', g: 'fail + to.' }
        ],
        trap: 'TCAS mixes the families inside one item: <em>prevent students to have</em>, <em>refuse students from having</em>. Each looks half-right, because the verb and the form both exist, just not together. Dodge: say the verb and its pattern as one chunk before you read the options — “ban-someone-from-doing” — and delete anything that breaks the chunk.',
        analogy: { title: 'The travel adaptor', text: 'A Thai plug will not go into a UK socket, however hard you push. Each verb is a socket with its own shape: <em>avoid</em> takes the -ing plug, <em>allow</em> takes the person-plus-to plug, <em>ban</em> takes the person-plus-from-ing plug. Look at the socket first, then choose the plug that fits.' },
        map: { center: 'Verb patterns', branches: [
          { label: '+ -ing', leaves: ['avoid, risk, consider', 'enjoy, mind, deny'] },
          { label: '+ to', leaves: ['fail, manage, refuse', 'It is essential to'] },
          { label: '+ object + to', leaves: ['allow, encourage', 'enable, urge, force'] },
          { label: '+ object + from -ing', leaves: ['ban, prevent, stop', 'discourage, prohibit'] },
          { label: 'Meaning changes', leaves: ['stop doing / stop to do', 'remember doing / to do'] }
        ] },
        moves: [
          { move: 'Point forward with both hands', says: 'allow / encourage / enable + person + TO: towards the action' },
          { move: 'Push both palms out like a stop sign', says: 'ban / prevent / stop + person + FROM -ing: away from the action' },
          { move: 'Spin one finger in a circle', says: 'avoid / risk / consider + -ING: the action as a thing' },
          { move: 'Drop your hand like a failed jump', says: 'fail + TO: you tried to go towards it and missed' }
        ]
      },
      items: [
        { id: 't11l3s3-1', type: 'cloze', tag: 'vm-pattern', level: 'C1', passage: T11_P_PHONES, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['use', 'using', 'to use', 'from using'], answer: 2,
          hint: 'Find the verb before “students”. Which pattern does it take after a person object?',
          why: '<em>Allow + person + to-infinitive</em>: countries no longer allow students <em>to use</em> phones. “From using” is the near miss: it belongs to the opposite family (ban / prevent / stop someone from doing). “Use” without “to” fits <em>let</em>, not <em>allow</em>, and “using” is not used after allow + person.' },

        { id: 't11l3s3-2', type: 'cloze', tag: 'vm-pattern', level: 'C1', passage: T11_P_PHONES, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['distracting', 'to distract', 'being distracted', 'to be distracted'], answer: 2,
          hint: 'Two checks: which form follows “avoid”, and do students distract others or get distracted by notifications?',
          why: '<em>Avoid</em> takes -ing, and the students are distracted <em>by notifications</em> (they receive the action), so the passive -ing is needed: avoid <em>being distracted</em>. “To be distracted” has the right voice but the wrong pattern for “avoid”. “Distracting” is active, which would make the students distract others, and “to distract” is wrong in both ways.' },

        { id: 't11l3s3-3', type: 'cloze', tag: 'vm-pattern', level: 'C1', passage: T11_P_PHONES, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['lose', 'losing', 'to lose', 'to have lost'], answer: 1,
          hint: 'The verb before the gap is “risk”. Which family does it belong to?',
          why: '<em>Risk</em> belongs to the -ing family (like avoid and consider): schools risk <em>losing</em> a useful tool. “To lose” is the near miss, since many verbs of possibility take “to”, but not <em>risk</em>. “Lose” cannot follow “risk” directly, and “to have lost” uses the to-pattern, which risk never takes.' },

        { id: 't11l3s3-4', type: 'cloze', tag: 'vm-pattern', level: 'C1', passage: T11_P_PHONES, blank: '(4)',
          stem: 'Choose the best option for blank (4).',
          options: ['bring', 'to bring', 'for bringing', 'from bringing'], answer: 3,
          hint: 'Find the verb two words before the gap. Does it push towards an action or keep someone away from it?',
          why: '<em>Prevent + person + from -ing</em> means keep someone away from doing something: no rule can prevent a determined teenager <em>from bringing</em> a second phone. “To bring” mixes in the <em>allow</em> pattern, and “for bringing” uses the wrong preposition (it belongs to <em>blame / punish someone for doing</em>). “Bring” cannot follow “prevent + person” at all.' },

        { id: 't11l3s3-5', type: 'sort', tag: 'vm-pattern', level: 'C1',
          stem: 'Which pattern does the verb in each sentence need?',
          bins: [
            { key: 'ing', label: '+ -ing', hint: 'avoid doing' },
            { key: 'to', label: '+ to', hint: 'fail to do' },
            { key: 'objto', label: '+ object + to', hint: 'allow someone to do' },
            { key: 'from', label: '+ object + from -ing', hint: 'ban someone from doing' }
          ],
          items: [
            { text: 'Fah is considering ___ (apply) to Thammasat.', bin: 'ing' },
            { text: 'Pun risked ___ (miss) the bus to finish his game.', bin: 'ing' },
            { text: 'The team failed ___ (reach) the final.', bin: 'to' },
            { text: 'Mint managed ___ (finish) the mock exam on time.', bin: 'to' },
            { text: 'T.Chris encouraged the class ___ (read) the news every day.', bin: 'objto' },
            { text: 'The app enables users ___ (translate) signs instantly.', bin: 'objto' },
            { text: 'Heavy rain prevented the buses ___ (leave) the depot.', bin: 'from' },
            { text: 'High prices discourage students ___ (buy) new textbooks.', bin: 'from' }
          ],
          hint: 'Say the verb and its pattern as one chunk. Is there a person or thing between the verb and the gap?',
          why: '<em>Consider</em> and <em>risk</em> take -ing (applying, missing). <em>Fail</em> and <em>manage</em> take to (to reach, to finish). <em>Encourage</em> and <em>enable</em> take an object + to (the class to read, users to translate). <em>Prevent</em> and <em>discourage</em> take an object + from -ing (the buses from leaving, students from buying).' }
      ]
    }
  ],

  check: { id: 't11l3ck', name: 'Systems Check · Mood & patterns', items: [
    { id: 't11l3ck-1', type: 'cloze', tag: 'vm-pattern', level: 'C1', passage: T11_P_ELNINO, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['act', 'to act', 'acting', 'to be acted'], answer: 1,
      hint: 'The verb before “the government” is “urged”. Which family does it belong to?',
      why: '<em>Urge + person + to-infinitive</em>: farmers’ groups have urged the government <em>to act</em> now. “Act” without “to” fits <em>make</em> or <em>let</em>, not <em>urge</em>. “Acting” does not follow urge + person, and “to be acted” is passive, although the government is the one who must do the acting.' },
    { id: 't11l3ck-2', type: 'cloze', tag: 'vm-subj', level: 'C1', passage: T11_P_ELNINO, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['plant', 'planted', 'to plant', 'will plant'], answer: 0,
      hint: 'What word introduces the clause? Is it a report of a fact or a piece of advice?',
      why: '“Recommended that” introduces advice, so the verb takes the bare base form: experts recommended that rice farmers <em>plant</em> drought-resistant varieties. “Will plant” sounds natural because the planting is in the future, but <em>will</em> does not follow a trigger + that. “Planted” turns the advice into a past fact, and “to plant” cannot follow “that + subject”.' },
    { id: 't11l3ck-3', type: 'cloze', tag: 'vm-cond', level: 'C1+', passage: T11_P_ELNINO, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['will be', 'would be', 'had been', 'would have been'], answer: 1,
      hint: 'The if-clause is about last year. Now find the time word at the end of the result clause.',
      why: 'The condition is an unreal past (“if more of last year’s rain had been stored”), but the result is about the present (“now”), so this is a mixed conditional: reservoirs <em>would be</em> much fuller now. “Would have been” is the type 3 trap, which ignores “now”. “Will be” is for real conditions, and “had been” cannot be the result.' },
    { id: 't11l3ck-4', type: 'cloze', tag: 'vm-cond', level: 'C1', passage: T11_P_ELNINO, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['if adopted', 'if adopting', 'if they adopt', 'if being adopted'], answer: 0,
      hint: 'Rebuild the full clause with the subject “water-saving methods”. Who does the adopting?',
      why: 'The full clause is “if they (the methods) are adopted early”; the subject and “are” are dropped, leaving the reduced conditional <em>if adopted</em>. Methods are adopted by farmers, so the V3 is needed. “If adopting” and “if they adopt” make the methods the doers, and “if being adopted” is not a reduced conditional form.' },
    { id: 't11l3ck-5', type: 'cloze', tag: 'vm-pattern', level: 'C1', passage: T11_P_ELNINO, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['pump', 'to pump', 'pumping', 'from pumping'], answer: 3,
      hint: 'Is “discourage” in the “towards” family or the “away from” family?',
      why: '<em>Discourage + person + from -ing</em> means try to keep someone away from doing something: discourage farmers <em>from pumping</em> too much groundwater. “To pump” is the near miss, borrowed from its opposite, <em>encourage someone to do</em>. “Pump” and “pumping” leave out the “from” that the pattern needs.' },
    { id: 't11l3ck-6', type: 'cloze', tag: 'vm-subj', level: 'C1+', passage: T11_P_ELNINO, blank: '(6)',
      stem: 'Choose the best option for blank (6).',
      options: ['be taken', 'to be taken', 'being taken', 'will be taken'], answer: 0,
      hint: 'Find the “It is … that” trigger. Then ask whether the warnings take something or are taken.',
      why: '“It is essential that” triggers the subjunctive (bare base form), and the warnings receive the action (people take them seriously), so the base form is passive: that these warnings <em>be taken</em> seriously. “Will be taken” has the right voice but <em>will</em> is not used after the trigger. “To be taken” and “being taken” cannot follow “that + subject”.' }
  ] }
});

TOPICS.push(T11);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'vt-tense': {
    name: 'Tense from time signals',
    principle: 'Underline the time anchor before you choose. A finished time (in 2025, last month, ago) takes the past simple; since, so far, recently and for … now take the present perfect; after when / by the time about the future, use the present simple.',
    reteach: 'Draw a timeline on the board with NOW marked. Read out TCAS-style sentences with the verb hidden and ask students to place the time anchor on the line as a box: closed on the right (finished past) or open up to NOW (present perfect). Only then reveal the four options and cross out the forms that belong to the wrong box. Finish with the future time-clause rule (when the ban takes effect) by showing that the “will” lives in the other clause.',
    activities: [
      'Anchor hunt: pairs get a short news paragraph with every verb blanked; one partner circles the time anchors, the other fills the verbs, then they swap on a second paragraph.',
      'Box or line? The teacher calls out a time phrase (since then, in December 2025, so far, two days ago); students show a closed fist (finished) or a pointing finger to “now” (present perfect).'
    ]
  },
  'vt-sva': {
    name: 'Agreement with long subjects',
    principle: 'Bracket every of / for / on / who / that phrase in the subject; the noun left outside is the head, and the verb agrees with it. The number of … and Each of … are singular.',
    reteach: 'Write a very long subject on the board (Pressure from parents and tutoring schools for top TCAS scores …) and physically bracket the passenger phrases in another colour until one noun remains. Have students read the head and verb together aloud (pressure … is driving). Contrast the number of / a number of, and show that the plural noun nearest the gap is the trap in almost every TCAS item.',
    activities: [
      'Bracket race: teams get five long subjects on strips; the first team to bracket every passenger phrase and name the head correctly wins the round.',
      'Stretch the subject: start with “The quality improves.” Each student adds a phrase (of the buses, in our school, that were bought last year) and the class checks that the verb still agrees.'
    ]
  },
  'vt-aspect': {
    name: 'Perfect & continuous aspects',
    principle: 'Find the reference point (now, a past moment, a future deadline), then ask: an ongoing activity with for/since (been + -ing) or a finished amount (simple perfect)? State verbs such as know and believe do not take -ing.',
    reteach: 'Use three chairs labelled NOW, THEN (past) and LATER (future deadline). A student stands on a chair and “looks back” to show have / had / will have. Then mime an activity with rolling hands for the continuous and a counted result with fingers for the simple perfect. Work through one sentence for each chair, then add the state-verb exception with “know”.',
    activities: [
      'Chair shuffle: the teacher reads a time frame (by the time the rain stopped / by the end of this year / for two hours now); students run to the right chair and say the auxiliary (had / will have / have).',
      'Amount or activity? Pairs sort ten sentence cards into “counted result” (has written three essays) and “ongoing activity” (has been writing all morning), then write one of each about their own week.'
    ]
  },
  'vp-passive': {
    name: 'Passive forms in all tenses',
    principle: 'Ask who does the action. If the subject receives it, use be (in the right tense) + V3. An object right after the gap usually means active; verbs like happen and arise are never passive.',
    reteach: 'Show a Shopee-style tracking page (is being packed, has been shipped, will be delivered) and ask why every line is passive. Build a table where only the “be” column changes with tense while the V3 column stays fixed. Then practise the object test on real TCAS frames: “a system that ___ after each use” (no object → passive) versus “pressure ___ some students” (object → active).',
    activities: [
      'News headline rewrite: groups turn five active headlines into passive news sentences in the right tense, then read them aloud as a TV newsreader.',
      'Do-or-receive thumbs: the teacher reads sentences with the verb missing; students show thumbs up (subject does it) or thumbs down (subject receives it) before choosing the form.'
    ]
  },
  'vp-passinf': {
    name: 'Passive infinitives & gerunds',
    principle: 'First find the shape the word before the gap demands (base after a modal, to, or -ing), then add be / to be / being + V3 if the noun receives the action: can be faked, to be told, being fooled.',
    reteach: 'Write three “stages” on the board: MODAL ___, TO ___, -ING ___. Put the same V3 (checked) under each and ask students to dress “be” for each stage: be checked, to be checked, being checked. Then show TCAS-style distractors that have the right shape but active voice (to question, fooling) and have students explain why the noun cannot be the doer.',
    activities: [
      'Stage costume cards: students hold cards reading be / to be / being; the teacher reads a frame (the results are expected ___ published) and students raise the right card.',
      'Fix the fake: pairs get six sentences with active infinitives or gerunds where a passive is needed (Nobody likes fooling) and rewrite them, explaining who the real doer is.'
    ]
  },
  'vp-causative': {
    name: 'Causatives',
    principle: 'After have / get, look at the object. A thing that receives the action → V3 (have it styled). A person who does the work → base after have / make / let, but to after get.',
    reteach: 'Contrast “I cut my hair” and “I had my hair cut” with a quick sketch of who holds the scissors. Build the five frames on the board (have + thing + V3, get + thing + V3, have + person + base, get + person + to, make / let + person + base) and colour-code thing versus person. Finish with the passive of make (was made to) and the TCAS distractor set “have it style / styled / to style / to styled”.',
    activities: [
      'Weekend errands: students list three things they had done for them last month (had my phone repaired, got my eyes tested) and one person they got to help them.',
      'Who holds the scissors? The teacher reads sentences; students point to themselves (they did it) or to the door (someone else did it) and then say the causative version.'
    ]
  },
  'vm-subj': {
    name: 'The subjunctive after suggest / insist / essential that',
    principle: 'After suggest, recommend, insist, demand, propose or It is essential that, use the bare base form for every subject: that she go, that exams be tailored. Delete options with -s, past forms, will, to or -ing.',
    reteach: 'Explain that the that-clause is an order or plan, not a fact, and English marks this with the plain base form. Show the coach’s whiteboard analogy, then write three versions of one sentence (that he goes / that he go / that he will go) and discuss why only the base form fits formal exam English. Add the passive (be + V3) and the other door, It is essential to + base.',
    activities: [
      'Class council: groups write three proposals for school rules using “We propose / insist / recommend that …” and one passive (that phones be collected), then vote.',
      'Trigger slam: cards with triggers (suggest, essential, demand) are placed face down; a student flips one and must finish the sentence correctly within five seconds.'
    ]
  },
  'vm-cond': {
    name: 'Mixed & reduced conditionals',
    principle: 'Give each clause its own clock: a past if-clause (had + V3) can have a present result (would + base) when the result says today or now. Reduced ifs drop “it is”: if not prepared correctly, if necessary.',
    reteach: 'Draw two clocks, one for each clause, and read TCAS68’s pattern aloud (if traditions hadn’t been passed down … today). Ask students to set each clock separately before choosing. Then show reduced forms by crossing out “it is” in full sentences and deciding V3 (receives) or -ing (does). Finish with inversion (Had I known, Were it not for) as the C1 stretch.',
    activities: [
      'Regret chain: each student says one past “if” about a real event (If I hadn’t missed the bus …) and the next student finishes it with a present result (… I wouldn’t be so tired now).',
      'Shrink the if: pairs get six full conditionals and reduce the ones that can be reduced (if it is necessary → if necessary), explaining why the others cannot.'
    ]
  },
  'vm-pattern': {
    name: 'Verb patterns',
    principle: 'The verb before the gap chooses the pattern: avoid / risk / consider + -ing; fail / manage + to; allow / encourage / enable + person + to; ban / prevent / stop / discourage + person + from -ing.',
    reteach: 'Present the four families as four socket shapes on the board and teach the memory hook: to = towards the action, from = away from it. Drill the TCAS68 set (stop students to have / ban students from having …) by having students say each verb with its correct chunk aloud. End with the meaning-changing verbs (stop doing vs stop to do; remember doing vs remember to do).',
    activities: [
      'Socket sort: groups sort 20 verb cards into the four families against the clock, then check with a partner group.',
      'Rule makers: students write five rules for an imaginary school using ban … from, allow … to, encourage … to, avoid and fail to, and the class spots any broken pattern.'
    ]
  }
});
