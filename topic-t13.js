/* ===========================================================================
   TCAS70 — SYSTEM 13 · Paragraph Organization  (topic-t13.js)
   Writing Part II, items 76–80: four sentences A–D, choose the logical order.
   Core technique: the 4-step method — (1) find the opener, (2) find the closer,
   (3) link the middle by reference chains and signal words, (4) USE THE OPTIONS
   (alphabetical; usually a 2+2 opener split: decide the opener, halve the
   choices, then test the one link where the two survivors differ).
   =========================================================================== */

/* ------------------------------------------------ shared sentence blocks */
var T13_B_CELL = '<div class="orderblock"><p>A. Because it needs no phone numbers and no app, this system can reach millions of people within minutes.</p><p>B. Cell broadcast is a warning system that sends one message from mobile phone towers to every phone in a chosen area.</p><p>C. In Bangkok in September 2026, for example, such alerts warned residents across the city about the rising floodwater.</p><p>D. This speed makes it especially valuable during floods, when water levels can change by the hour.</p></div>';

var T13_B_MAYA = '<div class="orderblock"><p>A. As a result, the coral around the bay was badly damaged, and the blacktip reef sharks that once bred there almost disappeared.</p><p>B. In the long run, the case shows that limiting visitors can protect both a natural site and the tourism income that depends on it.</p><p>C. Maya Bay in Krabi became world-famous after appearing in a Hollywood film, and at its peak thousands of visitors arrived every day.</p><p>D. After the bay was closed from 2018 to 2022, the sharks returned, and visitor numbers are now strictly controlled.</p></div>';

var T13_B_COOK = '<div class="orderblock"><p>A. These benefits explain why a growing number of schools are adding cooking to the timetable.</p><p>B. Cooking lessons teach students how to plan, measure and follow instructions under time pressure.</p><p>C. They also encourage healthier eating, since students who cook for themselves tend to eat more vegetables.</p><p>D. Nevertheless, finding kitchen space and trained staff remains a challenge for many schools.</p></div>';

var T13 = {
  id: 't13', n: 13, code: 'System 13', art: 'puzzle',
  name: 'Paragraph Organization',
  cefr: 'B2–C1',
  blurb: 'Four sentences, one logical order. Find the opener, find the closer, follow the pointers and signals, then let the four options do half the work for you.',
  levels: []
};

/* ============================================================ LEVEL 1 ENDS */
T13.levels.push({
  id: 't13l1', n: 1, name: 'Ends', cefr: 'B2',
  blurb: 'Fix the two ends of the paragraph first. The opener stands alone; the closer looks back at everything.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't13l1s1', name: 'Finding the opener', cefr: 'B2', tag: 'po-open',
      theory: {
        key: 'The opener is the one sentence that <strong>makes sense with nothing before it</strong>: the most general idea, with no pointer (this, these, such, it, they) and no connector (However, Additionally, Therefore) that needs an earlier sentence.',
        body: [
          'A paragraph is a conversation with a reader who knows nothing yet. The first sentence cannot lean on anything, so it must <strong>introduce</strong> the topic: it names the subject in full (<em>Cell broadcast is a warning system that…</em>), defines a term (<em>Fast fashion is a business model…</em>) or makes the broad claim that the rest will support (<em>Ideation has become a highly sought-after skill…</em>). Every other sentence is a <em>reply</em> to something already said. That is why the opener is so easy to test: ask of each sentence, <em>“Could a reader understand this if it were the very first line?”</em>',
          '<strong>The three “lean-back” signs.</strong> A sentence cannot open if it contains (1) a <strong>pointer</strong> to something not yet mentioned: <em>This ability…, These benefits…, Such practices…, It…, They…, The former…, The term…</em>; (2) a <strong>connector</strong> that answers an earlier sentence: <em>However, Additionally, For example, Consequently, Lastly, Ultimately</em>; or (3) a <strong>hidden link</strong> in the middle of the sentence: <em>Bilingual children, for instance, must…; Some researchers therefore believe…; Colour preferences also influence…</em>. Scan the whole sentence, not only its first word.',
          '<strong>How TCAS tests it.</strong> In TCAS69, one item gave “Ideation has become a highly sought-after skill among employers” alongside sentences starting “Employees who possess <em>this ability</em>…”, “<em>For example</em>, a marketing team member…” and “Having <em>this ability</em>, they…”. Three sentences lean back; only one stands alone. In TCAS66, the tempting sentence was “While <em>these signals</em> can be so subtle…”: it looks like a big general statement, but <em>these signals</em> points back, so it cannot open.',
          '<strong>Procedure.</strong> Step 1: read the four sentences and circle every pointer and connector, including those hidden mid-sentence. Step 2: cross out every sentence with a circle. Step 3: if one sentence is left, it is the opener. If two are left, pick the <strong>more general</strong> one: the sentence that the other one could be an example or a detail of.'
        ],
        simple: [
          'The first sentence must make sense alone. It tells the reader the topic.',
          'If a sentence has <em>this, these, such, it, they</em> or starts with <em>However, For example, Additionally, Therefore</em>, it needs a sentence before it. It cannot be first.',
          'Look inside the sentence too: <em>also, for instance, therefore</em> can hide in the middle.'
        ],
        thai: 'ประโยคเปิด (opener) คือประโยคเดียวที่อ่านรู้เรื่องได้โดยไม่ต้องมีประโยคอื่นมาก่อน มักเป็นประโยคที่กว้างที่สุด บอกหัวข้อหรือให้นิยาม ประโยคที่มีคำชี้กลับ (this, these, such, it, they, the former) หรือคำเชื่อมอย่าง However, For example, Additionally, Therefore เปิดไม่ได้ กับดักของข้อสอบคือคำเชื่อมที่ซ่อนอยู่กลางประโยค เช่น “Bilingual children, for instance, …” หรือ “Some researchers therefore believe…” จึงต้องอ่านทั้งประโยค ไม่ใช่ดูแค่คำแรก',
        examples: [
          { s: 'Fast fashion <strong>is</strong> a business model built on speed and low prices.', g: 'Defines the topic in full: a natural opener.' },
          { s: '<strong>This ability</strong> helps companies stay ahead of their rivals.', g: 'Which ability? The pointer needs an earlier sentence.' },
          { s: '<strong>However</strong>, the low price hides a high environmental cost.', g: 'However answers an earlier idea, so it cannot open.' },
          { s: 'Bilingual children, <strong>for instance</strong>, switch languages many times a day.', g: 'The connector is hidden mid-sentence: still not an opener.' },
          { s: 'Many teenagers check their phones more than a hundred times a day.', g: 'Stands alone and states a general fact: a possible opener.' }
        ],
        trap: 'TCAS puts the topic word (the name of the thing) into a sentence that cannot open: “<em>Bilingual children, for instance, …</em>” or “<em>While these signals…</em>”. Students see the topic word and grab it. Dodge: the topic word is not enough. The opener must also be free of every pointer and connector, including those hidden in the middle.',
        analogy: { title: 'The first episode', text: 'Open a K-drama at episode 7 and you meet lines like “After what she did to him…” — who? what? You are lost because the scene leans on earlier episodes. The opener is episode 1: it introduces the characters by name. Any sentence that makes you ask “who? which? what?” is a later episode.' },
        map: { center: 'Finding the opener', branches: [
          { label: 'What openers do', leaves: ['name the topic in full', 'define a term', 'make the broad claim'] },
          { label: 'Pointers = not first', leaves: ['this / these / such + noun', 'it, they, the former', 'the term, that time'] },
          { label: 'Connectors = not first', leaves: ['However, Additionally', 'For example, Therefore', 'Lastly, Ultimately'] },
          { label: 'Hidden links', leaves: ['…, for instance, …', '… therefore …', '… also …'] }
        ] },
        story: { title: 'Nong Bot’s Big Announcement', panels: [
          { who: 'Nong Bot', text: '(on the school speaker) Good morning! These changes start on Monday. Beep!' },
          { who: 'Pun', text: 'What changes? Is lunch cancelled? Is the exam cancelled? Please say the exam is cancelled.' },
          { who: 'Mint', text: 'I have no idea, and now I’m anxious about something that doesn’t exist yet.' },
          { who: 'T.Chris', text: 'Bot, you started with “these”. “These” points back to something we already know. Nobody knows anything yet.' },
          { who: 'Nong Bot', text: 'Rebooting. Good morning! The school library will open at 7 a.m. from Monday. These changes will give you more time to study.' },
          { who: 'Pun', text: 'Clear, logical, and deeply disappointing. The exam is still on.' }
        ], moral: 'An opener introduces; a pointer like “these” can only come later.' }
      },
      items: [
        { id: 't13l1s1-1', type: 'choose', tag: 'po-open', level: 'B2',
          stem: '<div class="orderblock"><p>A. This shift means that a 10 p.m. bedtime can feel as unnatural to a sixteen-year-old as an 8 p.m. bedtime would feel to an adult.</p><p>B. The reason is biological: during puberty, the body starts releasing melatonin, the hormone that makes us sleepy, up to two hours later than in childhood.</p><p>C. Teenagers who struggle to fall asleep before midnight are often not being lazy; their body clocks are simply running on a later schedule.</p><p>D. As a result, some schools have moved their first lesson later, and several studies report better attendance and alertness.</p></div><p>Which sentence should open the paragraph?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 2,
          hint: 'Circle every word that points back or answers an earlier sentence. How many sentences are left?',
          why: 'Only C stands alone: it states the general idea (teenagers’ body clocks run late). A starts with the pointer “This shift”, D with the connector “As a result”, and B is the near miss: it contains science, but “The reason” means the reason for something already said, so it must follow C.' },

        { id: 't13l1s1-2', type: 'choose', tag: 'po-open', level: 'B2',
          stem: '<div class="orderblock"><p>A. Such mental switching has been compared to a daily workout for the brain’s control system.</p><p>B. Growing up with two languages appears to shape the brain in ways that go far beyond vocabulary.</p><p>C. Bilingual children, for instance, must constantly choose which language to use and block out the other one.</p><p>D. Some researchers therefore believe that bilingualism may even delay the first signs of memory loss in old age.</p></div><p>Which sentence should open the paragraph?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 1,
          hint: 'Two sentences hide their link word in the middle. Read every sentence to the end.',
          why: 'B is the general claim and has no pointer or connector. C is the trap: it begins with the topic word “Bilingual children”, but “for instance” shows it is an example of an earlier claim. A starts with the pointer “Such mental switching”, and D hides “therefore” in the middle.' },

        { id: 't13l1s1-3', type: 'sort', tag: 'po-open', level: 'B2',
          stem: 'Could each sentence open a paragraph, or does it need a sentence before it?',
          bins: [
            { key: 'open', label: 'Could open', hint: 'makes sense with nothing before it' },
            { key: 'lean', label: 'Needs a sentence before it', hint: 'has a pointer or a connector' }
          ],
          items: [
            { text: 'Street food is one of Thailand’s strongest sources of soft power.', bin: 'open' },
            { text: 'Fast fashion is a business model built on speed and low prices.', bin: 'open' },
            { text: 'Microplastics have now been found in human blood.', bin: 'open' },
            { text: 'Many teenagers check their phones more than a hundred times a day.', bin: 'open' },
            { text: 'These stalls are often run by the same family for decades.', bin: 'lean' },
            { text: 'However, the price tag hides the real cost.', bin: 'lean' },
            { text: 'The latter group reported fewer headaches.', bin: 'lean' },
            { text: 'Such alerts can reach every phone in a district at once.', bin: 'lean' },
            { text: 'Doctors therefore recommend a short walk every hour.', bin: 'lean' }
          ],
          hint: 'Check the first word, then read to the end for a hidden “therefore” or “also”.',
          why: 'The four openers name their topic in full and lean on nothing. The others need an earlier sentence: “These stalls” and “Such alerts” point back, “The latter” needs two groups already named, “However” answers an earlier idea, and “therefore” (hidden in the middle) needs a reason that came before.' },

        { id: 't13l1s1-4', type: 'choose', tag: 'po-open', level: 'B2',
          stem: T13_B_CELL,
          options: ['A-B-D-C', 'A-D-C-B', 'B-A-D-C', 'B-D-A-C'], answer: 2,
          hint: 'Only one sentence names the system in full. After that, follow each pointer to what it needs.',
          why: 'B opens because it names and defines cell broadcast. A follows with “this system” and adds the point about speed (“within minutes”), D picks that up with “This speed”, and C gives an example with “such alerts”. A cannot open because “this system” has nothing to point to, and B-D-A-C fails because “This speed” comes before any speed is mentioned.' },

        { id: 't13l1s1-5', type: 'choose', tag: 'po-open', level: 'B2',
          stem: T13_B_CELL + '<p>Sentence A mentions the key fact that the system can reach “millions of people within minutes”. Why can it still NOT open the paragraph?</p>',
          options: [
            '“This system” points to something not yet named.',
            'It is too long and detailed to be a topic sentence.',
            'It begins with “Because”, which cannot start a sentence.',
            'It contains a number, and openers never contain numbers.'
          ], answer: 0,
          hint: 'Test each reason against the theory: can a sentence start with “Because”? Do openers really avoid numbers?',
          why: '“This system” is a pointer: the reader would ask “which system?”, so a sentence that names it (B) must come first. “Because” can start a sentence when the main clause follows, as it does here, so that is not the problem. Length and numbers do not decide the opener either; TCAS openers are often long and may contain figures.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't13l1s2', name: 'Finding the closer', cefr: 'B2', tag: 'po-close',
      theory: {
        key: 'The closer <strong>looks back at the whole paragraph</strong> and answers “so what?”: it concludes (Ultimately, Thus, Therefore, In the long run), recommends (should, it is crucial to) or weighs everything together (both, these benefits and challenges).',
        body: [
          'If the opener is a door, the closer is the view from the top of the stairs: the reader has climbed through the details and now sees what they add up to. A closer therefore does one of three jobs. It <strong>concludes</strong>: <em>Ultimately, the fast fashion cycle encourages a disposable culture…</em>; it <strong>recommends</strong>: <em>Students are thus cautioned to…; it’s crucial for schools to establish fair exam environments</em>; or it <strong>balances</strong>: <em>Balancing the positive effects of EVs with these challenges is crucial…</em>, <em>Ultimately, both approaches can be highly effective…</em>.',
          '<strong>Signals of a closer.</strong> Conclusion words: <em>Ultimately, Thus, Therefore, Hence, In the long run, In the end, Overall</em>. Recommendation words: <em>should, need to, it is essential/crucial/vital to</em>. Whole-paragraph pointers: <em>both approaches, these options, this combination of features, these challenges</em>. Notice the last group: a closer often points back at <strong>several</strong> earlier sentences at once, which is why its pointer is plural or a “combination”.',
          '<strong>How TCAS tests it.</strong> In TCAS68 the introvert item ended “<em>In the long run</em>, embracing one’s introverted nature… can foster personal growth”; in TCAS67 the cheating item ended “<em>Therefore</em>, it’s crucial for schools and teachers to establish fair and secure exam environments”. In the four options, look at the <strong>last letter</strong>: often two options end with the true closer and two do not. Checking the closer is the fastest way to confirm your choice.',
          '<strong>Careful with result words.</strong> <em>As a result</em> and <em>Consequently</em> say “this happened because of that”. In a cause-and-effect chain they can sit in the <em>middle</em> of the paragraph. A true closer steps back from the chain and draws the lesson; a result word may simply be the next link.'
        ],
        simple: [
          'The last sentence sums up the paragraph or says what we should do.',
          'Look for <em>Ultimately, Thus, Therefore, In the long run, In the end</em>, or <em>should / it is important to</em>.',
          'Be careful: <em>As a result</em> can be in the middle. Ask: “Does this sentence talk about the whole paragraph?”'
        ],
        thai: 'ประโยคปิด (closer) มองย้อนกลับไปที่ทั้งย่อหน้าและตอบคำถามว่า “แล้วยังไง” โดยสรุป (Ultimately, Thus, Therefore, In the long run) ให้คำแนะนำ (should, it is crucial to) หรือชั่งน้ำหนักทุกอย่างรวมกัน (both approaches, these benefits and challenges) กับดักคือ As a result หรือ Consequently ไม่จำเป็นต้องอยู่ท้ายเสมอ ในย่อหน้าแบบเหตุ-ผลต่อเนื่อง มันอาจเป็นแค่ข้อต่อกลางย่อหน้า ให้ถามว่าประโยคนี้พูดถึงภาพรวมหรือแค่ผลของประโยคก่อนหน้า',
        examples: [
          { s: '<strong>Ultimately</strong>, both approaches can work; the best choice depends on the learner.', g: 'Conclusion word + “both” looks back at the whole paragraph.' },
          { s: 'Schools <strong>should therefore</strong> teach students how to check a source.', g: 'A recommendation: a natural last line.' },
          { s: '<strong>In the long run</strong>, small daily habits matter more than one big effort.', g: 'Steps back from the details to the lesson.' },
          { s: '<strong>As a result</strong>, the coral was badly damaged.', g: 'A result word, but only the next link in a chain, not the closer.' }
        ],
        trap: 'Students grab the first sentence with a “result” word (As a result, Consequently) and put it last. But in a chain, the result can be followed by a solution or a lesson. Dodge: the closer must talk about the WHOLE paragraph (both, these, the case shows, should), not only about the sentence just before it.',
        analogy: { title: 'The final whistle', text: 'A goal in the 60th minute is exciting, but it is not the end of the match. The final whistle comes after everything, and the commentator sums up: “In the end, the better team won.” Result words are goals; the closer is the final whistle and the summary.' },
        map: { center: 'Finding the closer', branches: [
          { label: 'Concludes', leaves: ['Ultimately, Thus', 'Therefore, Hence', 'In the long run'] },
          { label: 'Recommends', leaves: ['should, need to', 'it is crucial to', 'are thus cautioned to'] },
          { label: 'Balances', leaves: ['both approaches', 'these benefits and challenges', 'this combination of features'] },
          { label: 'Careful', leaves: ['As a result = maybe middle', 'Consequently = maybe middle', 'check the last letters'] }
        ] },
        chant: { title: 'Final Whistle', beat: 'stomp-stomp-clap (4/4)', lines: [
          'Opener opens, details climb,',
          'Closer comes at closing time.',
          'Ultimately, thus, therefore,',
          'In the long run, shut the door.',
          'Should and crucial, both and these,',
          'Look back over all of the pieces.',
          'As a result can sit in the middle,',
          'The whistle blows when it solves the riddle!'
        ] }
      },
      items: [
        { id: 't13l1s2-1', type: 'choose', tag: 'po-close', level: 'B2',
          stem: '<div class="orderblock"><p>A. The most effective type, the N95, filters at least 95 percent of fine particles when it fits tightly around the nose and chin.</p><p>B. Not all face masks offer the same protection against PM2.5.</p><p>C. Thus, the best mask is not the most expensive one but the one that fits the wearer’s face and is worn correctly.</p><p>D. Cloth and surgical masks, by contrast, leave gaps at the sides, so much of the polluted air simply flows around them.</p></div><p>Which sentence should close the paragraph?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 2,
          hint: 'Which sentence draws a lesson from all the details about different masks?',
          why: 'C begins with the conclusion word “Thus” and gives the lesson of the whole paragraph (fit matters more than price). B is the opener, A gives the first detail and D is a detail that contrasts with A (“by contrast”), so the order is B-A-D-C.' },

        { id: 't13l1s2-2', type: 'choose', tag: 'po-close', level: 'B2',
          stem: '<div class="orderblock"><p>A. Therefore, workers who treat learning as a lifelong habit are likely to be the ones who benefit most from new technology.</p><p>B. Instead, it usually takes over particular tasks inside a job, such as drafting reports or checking data.</p><p>C. Artificial intelligence rarely replaces whole jobs overnight, despite what many headlines suggest.</p><p>D. When this happens, employees who upskill, learning to use the new tools, can move on to more valuable work.</p></div>',
          options: ['B-C-D-A', 'B-D-C-A', 'C-B-A-D', 'C-B-D-A'], answer: 3,
          hint: 'Two options start with a sentence beginning “Instead”. Then check which option ends with the “so what?” sentence.',
          why: 'C opens with the general claim, B corrects it (“Instead, it usually takes over particular tasks”), D says what workers can do “when this happens”, and A closes with “Therefore” and a lesson for all workers. B cannot open because “Instead” answers an earlier idea. C-B-A-D puts the conclusion third, leaving “When this happens” at the end with nothing clear to point to.' },

        { id: 't13l1s2-3', type: 'sort', tag: 'po-close', level: 'B2',
          stem: 'Is each sentence a likely closer, or does it belong in the middle of a paragraph?',
          bins: [
            { key: 'close', label: 'Likely closer', hint: 'concludes, recommends or balances' },
            { key: 'mid', label: 'Middle', hint: 'adds, contrasts, gives an example or a step' }
          ],
          items: [
            { text: 'Ultimately, the choice depends on each student’s goals.', bin: 'close' },
            { text: 'In the long run, these small habits add up to better health.', bin: 'close' },
            { text: 'Schools should therefore teach students how to check a source.', bin: 'close' },
            { text: 'Balancing these benefits with the risks is therefore crucial.', bin: 'close' },
            { text: 'Additionally, the app sends a reminder every evening.', bin: 'mid' },
            { text: 'For example, one user lost 3,000 baht to a fake shop.', bin: 'mid' },
            { text: 'However, this approach has a hidden cost.', bin: 'mid' },
            { text: 'Initially, the beans are dried in the sun.', bin: 'mid' }
          ],
          hint: 'A closer looks back at everything. Does the sentence sum up, advise, or balance?',
          why: 'The closers conclude (Ultimately, In the long run), recommend (should therefore) or balance (these benefits with the risks). The others open a new step in the middle: Additionally adds a point, For example illustrates, However introduces a problem that still needs discussing, and Initially starts a sequence.' },

        { id: 't13l1s2-4', type: 'choose', tag: 'po-close', level: 'B2',
          stem: T13_B_MAYA + '<p>Which sentence should close the paragraph?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 1,
          hint: 'One sentence has a result word but only reports damage. Which one draws a lesson from the whole story?',
          why: 'B begins with “In the long run” and draws a lesson from the whole case (limiting visitors protects nature and income). A is the trap: “As a result” is a result word, but it is only the next link after the crowds in C, and the story still needs the closure and recovery in D. The order is C-A-D-B.' },

        { id: 't13l1s2-5', type: 'choose', tag: 'po-close', level: 'B2',
          stem: T13_B_MAYA,
          options: ['C-A-B-D', 'C-A-D-B', 'C-B-A-D', 'C-D-A-B'], answer: 1,
          hint: 'All four options open with the same sentence. Check what each one puts last.',
          why: 'C sets the scene, A gives the result of the crowds (“As a result, the coral… was badly damaged”), D reports the closure and recovery, and B closes with the lesson (“In the long run, the case shows…”). C-A-B-D draws the lesson before the recovery that proves it, and C-D-A-B reports the sharks returning before they had disappeared.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't13l1s3', name: 'Using the four options', cefr: 'B2', tag: 'po-options',
      theory: {
        key: 'The options are a map, not a menu: <strong>decide the opener, cross out half the options, then test only the one link where the two survivors differ</strong>.',
        body: [
          'You do not have to build the paragraph from nothing. Of the 24 possible orders, TCAS shows you only four, printed in <strong>alphabetical order</strong> (A-B-C-D, A-C-D-B, B-A-C-D, B-D-C-A). Very often the four split <strong>2 + 2</strong> by their first letter: two options start with the real opener, two start with a decoy. So one decision (the opener) removes half the options in a few seconds. In TCAS69, item 76 offered A-B-C-D, A-C-D-B, B-A-C-D and B-D-C-A: once you see that B (“The waste… generally falls into three major classifications”) is the opener, only two options remain.',
          '<strong>Step 2: find where the survivors differ.</strong> Put the two remaining options side by side: <em>B-A-C-D</em> and <em>B-D-C-A</em>. They differ at the second place (A or D). Now test only that link: which sentence can follow B? In the waste item, D begins “The most basic category”, and a list climbing in importance starts from the most basic. One test, one answer.',
          '<strong>When all four share the opener.</strong> TCAS68 sometimes gave four options with the same first letter (C-B-A-D, C-B-D-A, C-D-A-B, C-D-B-A). Then the opener does not help, so jump to the second position, split the options again (two with B second, two with D second), and test that link. You can also use a <strong>locked pair</strong>: if sentence A must directly follow D (because of “Following fermentation” or “these benefits”), cross out every option where A is not right after D.',
          '<strong>Finish with a check.</strong> Read your chosen order once, quickly, from start to finish. Every pointer should point back, every connector should answer the sentence before it, and the last sentence should look back at the whole paragraph.'
        ],
        simple: [
          'You only have four choices. Find the first sentence. Usually this removes two choices.',
          'Look at the two choices that are left. Find the first place where they are different. Test only that place.',
          'Then read your order once from the beginning to the end.'
        ],
        thai: 'ตัวเลือกคือแผนที่ ไม่ต้องเรียงเองจากศูนย์ ตัวเลือกเรียงตามตัวอักษร และมักแบ่ง 2+2 ตามตัวอักษรแรก หาประโยคเปิดให้ได้ก่อน ตัดตัวเลือกได้ครึ่งหนึ่งทันที แล้วดูว่าตัวเลือกที่เหลือสองข้อต่างกันที่ตำแหน่งไหน ทดสอบแค่จุดนั้นจุดเดียว ถ้าทั้ง 4 ข้อเปิดด้วยประโยคเดียวกัน ให้ข้ามไปแบ่งที่ตำแหน่งที่สองแทน หรือหา “คู่ที่ล็อกกัน” เช่น these benefits ต้องตามหลังประโยคที่พูดถึงประโยชน์ทันที กับดักคือรีบเลือกข้อแรกที่ขึ้นต้นด้วยประโยคเปิดถูก โดยไม่ตรวจลิงก์ที่เหลือ',
        examples: [
          { s: 'Options: A-B-C-D · A-C-D-B · <strong>B</strong>-A-C-D · <strong>B</strong>-D-C-A', g: 'Opener = B, so two options go at once.' },
          { s: 'Survivors: B-<strong>A</strong>-C-D vs B-<strong>D</strong>-C-A', g: 'They differ at place 2: test only “A or D after B?”' },
          { s: 'Options: C-B-A-D · C-B-D-A · C-D-A-B · C-D-B-A', g: 'Same opener in all four: split at place 2 (B or D).' },
          { s: 'Locked pair: “Following fermentation…” must come right after “…they are fermented”.', g: 'Cross out every option that separates the pair.' }
        ],
        trap: 'Students find the right opener and then pick the FIRST option that starts with it, without testing the second link. TCAS always gives at least two options with the correct opener, so the opener alone never finishes the job. Dodge: after the opener, always compare the two survivors and test the place where they differ.',
        analogy: { title: 'The group-stage table', text: 'In a football tournament you do not play every team; the draw cuts the field. The opener is the group stage: half the options go home. Then there is one knockout match between the two survivors, played at the one position where they differ. Win that match and you have your champion.' },
        map: { center: 'Using the options', branches: [
          { label: 'Step 1: opener', leaves: ['usually a 2+2 split', 'cross out two options'] },
          { label: 'Step 2: differ point', leaves: ['compare the survivors', 'test one link only'] },
          { label: 'Same opener ×4', leaves: ['split at place 2', 'or find a locked pair'] },
          { label: 'Step 3: check', leaves: ['pointers point back', 'closer looks back'] }
        ] },
        moves: [
          { move: 'Hold up four fingers', says: 'Four options, printed A to Z' },
          { move: 'Fold down two fingers', says: 'Opener found: half the options go' },
          { move: 'Put the two fingers side by side, then tap the first place they split', says: 'Find where the survivors differ' },
          { move: 'Point one finger forward like a referee', says: 'Test that one link, then read it through' }
        ]
      },
      items: [
        { id: 't13l1s3-1', type: 'choose', tag: 'po-options', level: 'B2',
          stem: 'A student has decided that sentence B is the opener. The options are <strong>1) A-B-D-C &nbsp; 2) A-D-C-B &nbsp; 3) B-C-A-D &nbsp; 4) B-D-A-C</strong>. What is the ONE thing she still needs to check?',
          options: [
            'Whether C or D comes second',
            'Whether A should come third as well',
            'Whether A or B should open the paragraph',
            'Which of the four sentences is the longest'
          ], answer: 0,
          hint: 'Write the two surviving options one above the other. Where do they first differ?',
          why: 'With B as the opener, only B-C-A-D and B-D-A-C survive. Both have A in third place, so checking A is useless; they first differ at place two (C or D), so that is the one link to test. The opener question is already decided, and length never decides the order.' },

        { id: 't13l1s3-2', type: 'choose', tag: 'po-options', level: 'B2',
          stem: '<div class="orderblock"><p>A. It is produced when sunlight hits the skin, which is why it is often called the “sunshine vitamin”.</p><p>B. Surprisingly, a lack of this vitamin is common even in sunny countries like Thailand.</p><p>C. Vitamin D plays a key role in keeping bones strong and the immune system healthy.</p><p>D. The main reasons are that many people work indoors all day and cover their skin or avoid the sun when they do go out.</p></div>',
          options: ['C-A-B-D', 'C-B-D-A', 'D-A-C-B', 'D-C-A-B'], answer: 0,
          hint: 'Halve the options with the opener first. Then ask what makes sentence B “surprising”.',
          why: 'C names Vitamin D and opens; D cannot open because “The main reasons” needs something to explain. A explains where the vitamin comes from (sunlight), which makes B’s point “surprising” (a lack of it even in sunny countries), and D gives the reasons for that lack. C-B-D-A puts “Surprisingly” before we know the vitamin comes from sunlight, so there is nothing to be surprised about, and A’s “It” ends up far from Vitamin D.' },

        { id: 't13l1s3-3', type: 'choose', tag: 'po-options', level: 'B2',
          stem: T13_B_COOK + '<p>Which two sentences must sit side by side, in this order, in the correct paragraph?</p>',
          options: ['A then B', 'A then C', 'C then A', 'D then A'], answer: 2,
          hint: 'Find a plural pointer. It needs more than one of something directly before it.',
          why: '“These benefits” in A needs benefits listed immediately before it. B gives one benefit and C adds the second (“They also encourage healthier eating”), so C must come directly before A. A then C reverses the pair, and D cannot come before A because D introduces a problem, not a benefit.' },

        { id: 't13l1s3-4', type: 'choose', tag: 'po-options', level: 'B2',
          stem: T13_B_COOK,
          options: ['B-A-C-D', 'B-C-A-D', 'C-A-B-D', 'C-B-D-A'], answer: 1,
          hint: 'Which sentence can open? Then use the pair you must keep together.',
          why: 'B opens (it names cooking lessons), C adds a second benefit (“They also…”), A sums up “These benefits”, and D closes with the remaining challenge (“Nevertheless…”). Options starting with C fail because “They also” has nothing to refer to, and B-A-C-D uses “These benefits” when only one benefit has been given.' },

        { id: 't13l1s3-5', type: 'order', tag: 'po-options', level: 'B2',
          stem: 'Put the steps of the options method in the right order.',
          items: [
            'Find the opener: the sentence with no pointer or connector.',
            'Cross out the options that start with any other sentence.',
            'Compare the two survivors and find the first place they differ.',
            'Test only that link: which sentence can really follow?',
            'Read the chosen order once, checking the closer.'
          ],
          hint: 'Start with the decision that removes the most options.',
          why: 'The opener comes first because it usually removes two options at once. Then you compare the survivors, test the single link where they differ, and finish with one quick read-through to confirm that every pointer points back and the last sentence closes.' }
      ]
    }
  ],
  check: { id: 't13l1ck', name: 'Systems Check · Ends', items: [
    { id: 't13l1ck-1', type: 'choose', tag: 'po-open', level: 'B2+',
      stem: '<div class="orderblock"><p>A. The term describes the habit of scrolling endlessly through bad news, even when it makes a person feel worse.</p><p>B. “Doomscrolling” became a popular word during the pandemic, when many people spent hours each night reading alarming headlines.</p><p>C. To break the habit, experts suggest setting a time limit on news apps and keeping the phone out of the bedroom.</p><p>D. Psychologists believe it is driven by the brain’s natural alertness to threats, which makes negative information hard to ignore.</p></div>',
      options: ['A-B-D-C', 'A-D-B-C', 'B-A-D-C', 'B-C-A-D'], answer: 2,
      hint: 'A definition sounds like an opener, but check what “The term” points to.',
      why: 'B introduces the word “Doomscrolling”, so it opens. A defines “The term”, D explains what drives “it”, and C closes with advice on how “To break the habit”. A is the decoy opener: it sounds like a definition, but “The term” points back to a word not yet given. B-C-A-D gives the solution before the habit has even been defined.' },
    { id: 't13l1ck-2', type: 'choose', tag: 'po-close', level: 'B2+',
      stem: '<div class="orderblock"><p>A. However, most of these devices estimate sleep from movement and heart rate, so their numbers can be surprisingly inaccurate.</p><p>B. Sleep-tracking watches promise to show students exactly how well they sleep each night.</p><p>C. Some users even become so anxious about achieving a “perfect score” that the worry itself keeps them awake.</p><p>D. Ultimately, a tracker is best used as a rough guide, and how rested a person feels in the morning still matters more than any number.</p></div>',
      options: ['B-A-C-D', 'B-A-D-C', 'B-C-D-A', 'B-D-C-A'], answer: 0,
      hint: 'Every option opens the same way. Look at what each option puts last.',
      why: 'B states the promise, A contrasts it with “However… surprisingly inaccurate”, C adds a worse problem with “even”, and D closes with “Ultimately” and a balanced lesson. B-A-D-C puts the conclusion before the last problem. B-C-D-A and B-D-C-A both leave “However” in A until the end, where it contrasts with the conclusion instead of with the watches’ promise.' },
    { id: 't13l1ck-3', type: 'choose', tag: 'po-options', level: 'B2+',
      stem: '<div class="orderblock"><p>A. Yet the same things that make these jokes harmless fun — humour and easy sharing — also let memes spread a political or health claim much faster than a news article.</p><p>B. A meme is an image, video or phrase, usually humorous, that is copied and changed as it spreads online.</p><p>C. This speed becomes a problem when the claim inside the joke is false, because few people stop to check a picture they are laughing at.</p><p>D. Most are harmless jokes about school, pets or everyday life.</p></div>',
      options: ['B-A-C-D', 'B-D-A-C', 'D-A-B-C', 'D-B-A-C'], answer: 1,
      hint: 'Decide the opener to halve the options. Then ask what “Yet” in A is contrasting with.',
      why: 'B defines a meme and opens. D says most are harmless, A turns with “Yet the same things that make these jokes harmless fun… also let memes spread a political or health claim”, and C picks up “This speed” and explains the danger. D cannot open because “Most” needs a group already named. B-A-C-D puts A straight after the definition, where “these jokes” and “harmless” have nothing to point back to, and ends with the weak “Most are harmless jokes”.' },
    { id: 't13l1ck-4', type: 'choose', tag: 'po-close', level: 'B2+',
      stem: '<div class="orderblock"><p>A. As a result, thousands of broken bicycles ended up piled in empty lots, and several companies went out of business.</p><p>B. In the late 2010s, bike-sharing companies filled many Asian cities with millions of brightly coloured bicycles.</p><p>C. Many were parked carelessly or damaged, because riders felt no responsibility for bikes they did not own.</p><p>D. Cities that want the benefits of shared bikes need to limit the number of bikes and make riders pay a deposit.</p></div><p>Which sentence should close the paragraph?</p>',
      options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 3,
      hint: 'One sentence has a result word, but is it the end of the chain or only the next link?',
      why: 'D closes: it steps back from the story and recommends a solution (“Cities… need to limit… and make riders pay a deposit”). A is the trap: “As a result” is only the next link in the chain (careless parking → piles of broken bikes), and the lesson still has to follow. The order is B-C-A-D.' },
    { id: 't13l1ck-5', type: 'choose', tag: 'po-close', level: 'B2+',
      stem: '<div class="orderblock"><p>A. Playing also teaches a lesson that textbooks rarely do: that steady practice turns something impossible into something ordinary.</p><p>B. Learning to play a musical instrument trains far more than the fingers.</p><p>C. Reading music, keeping time and listening to other players all exercise memory and attention at once.</p><p>D. Thus, schools that cut music lessons to make room for exam preparation may be removing one of their most effective learning tools.</p></div>',
      options: ['A-B-C-D', 'A-C-B-D', 'B-C-A-D', 'B-C-D-A'], answer: 2,
      hint: 'After the opener, the two survivors differ only in the last two places. Which sentence can close?',
      why: 'B opens with the broad claim, C gives the first set of benefits, A adds another with “also”, and D closes with “Thus” and a lesson for schools. B-C-D-A draws the conclusion too early and then adds a new benefit after it. A cannot open, because “also” needs an earlier benefit.' },
    { id: 't13l1ck-6', type: 'choose', tag: 'po-options', level: 'B2+',
      stem: '<div class="orderblock"><p>A. Kittens do this while feeding, pressing their mother’s belly to help the milk flow in a moment of warmth and safety.</p><p>B. Many cat owners have noticed their pets rhythmically pushing their paws into a soft blanket or a lap, a behaviour known as “kneading”.</p><p>C. Adult cats seem to keep the habit because it reminds them of that early comfort, which is why they often knead when they are relaxed.</p><p>D. Some experts also believe it marks territory, since cats have scent glands in the pads of their paws.</p></div>',
      options: ['B-A-C-D', 'B-A-D-C', 'B-C-A-D', 'B-D-C-A'], answer: 0,
      hint: 'The opener will not help here. Find a pointer that must sit right after its partner.',
      why: 'All four options open with B, so test the links. “That early comfort” in C must come right after A, which describes kittens feeding, so A-C is a locked pair: only B-A-C-D keeps it. D adds a second explanation with “also” and ends the paragraph. B-A-D-C and B-D-C-A separate A from C, and B-C-A-D mentions “that early comfort” before it has been described.' }
  ] }
});

/* ========================================================== LEVEL 2 CHAINS */
var T13_B_CURIOUS = '<div class="orderblock"><p>A. Curiosity, the urge to find out how things work, is one of the strongest predictors of success at university.</p><p>B. Students with this trait tend to ask more questions, which helps them remember what they learn.</p><p>C. Moreover, they are more likely to keep going when a topic becomes difficult, because the puzzle itself feels rewarding.</p><p>D. Teachers can therefore encourage it simply by rewarding good questions, not only correct answers.</p></div>';

var T13_B_PHONE = '<div class="orderblock"><p>A. Under this rule, students lock their phones in a pouch at the start of the day and can only open it at the school gate.</p><p>B. A growing number of schools around the world have introduced a “phone-free day” rule.</p><p>C. Supporters say that these pouches have made break times noisier, in a good way, because students talk and play instead of scrolling.</p><p>D. Critics, however, reply that such a strict ban leaves students unable to contact their parents in an emergency.</p></div>';

var T13_B_COLOUR = '<div class="orderblock"><p>A. Warm colours such as red and orange tend to make people feel lively and energetic.</p><p>B. Cool colours such as blue and green, by contrast, are linked with calm and are therefore popular in bedrooms and hospitals.</p><p>C. Interior designers often choose paint colours according to the mood they want a room to create.</p><p>D. This is why many fast-food restaurants decorate with red and orange, hoping customers will eat quickly and leave.</p></div>';

var T13_B_ONION = '<div class="orderblock"><p>A. When the onion is cut, its cells break open and release enzymes that turn these compounds into a gas.</p><p>B. Onions store sulfur compounds, which they build from nutrients taken up from the soil.</p><p>C. This gas drifts upward and irritates the nerves on the surface of the eyes.</p><p>D. To protect themselves, the eyes produce tears to wash the irritant away, which is why chopping onions makes people cry.</p></div>';

T13.levels.push({
  id: 't13l2', n: 2, name: 'Chains', cefr: 'B2+',
  blurb: 'The middle of the paragraph is held together by pointers, signal words and a steady flow from old information to new.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't13l2s1', name: 'Reference chains', cefr: 'B2+', tag: 'po-ref',
      theory: {
        key: 'Every pointer (<strong>this ability, these benefits, such practices, they, the former</strong>) must point back to something that is <strong>already on the page</strong>, usually in the sentence just before it.',
        body: [
          'Writers avoid repeating the same noun, so they use <strong>pointers</strong>: pronouns (<em>it, they, she, their</em>), demonstrative + noun (<em>this shift, these fibres</em>), <em>such + noun</em> (<em>such practices, such a system</em>), and ordering words (<em>the former, the latter, both, another</em>). A pointer is a promise: “you have already met this”. In a paragraph-order item, every pointer is therefore a free clue about what must come <strong>before</strong> it.',
          '<strong>The summary noun.</strong> The most powerful pointer is <em>this/these/such + a new noun that labels an earlier idea</em>. In TCAS69, “Ideation has become a highly sought-after skill” was followed by “Employees who possess <strong>this ability</strong>…”: <em>ability</em> relabels <em>ideation</em>. In TCAS66, “Language generally evolves from the complex to the simple” and “one of the least grammatically complex languages” led to “<strong>This simplicity</strong> makes English easily usable…”. In TCAS69, “the anxiety a patient experiences” led to “<strong>This anxiety</strong> causes an increase in stress hormones”. The noun changes; the idea does not. Train yourself to ask: <em>which earlier sentence is this label describing?</em>',
          '<strong>Singular or plural?</strong> The form of the pointer tells you what it needs. <em>These benefits</em> needs at least two benefits before it; <em>this benefit</em> needs one. <em>The former … the latter</em> needs exactly two things already named, in that order. <em>Such a system</em> needs a system to have been described (TCAS66: a system of rationing → “Such a system is illegal and is called the black market”).',
          '<strong>Procedure.</strong> Step 1: underline every pointer. Step 2: for each one, find the sentence that holds its partner and draw an arrow. Step 3: arrows can only point backwards, so each arrow gives you a fixed pair (partner first, pointer after). Two or three fixed pairs usually leave only one option standing.'
        ],
        simple: [
          '<em>This, these, such, it, they, the former</em> point back. The thing they point to must come first.',
          'The noun can change: “ideation” can become “this ability”. Ask: “Which sentence is this talking about?”',
          '<em>These</em> needs two or more things. <em>The former</em> and <em>the latter</em> need two things, named in order.'
        ],
        thai: 'คำชี้กลับ (reference words) เช่น it, they, this ability, these benefits, such practices, the former/the latter ต้องชี้ไปยังสิ่งที่พูดถึงไปแล้ว ส่วนใหญ่อยู่ในประโยคก่อนหน้าทันที ให้ขีดเส้นใต้คำชี้กลับทุกคำแล้วลากลูกศรกลับไปหาคู่ของมัน จะได้คู่ประโยคที่ต้องเรียงติดกัน กับดักคือคำนามที่ใช้ชี้กลับมักเปลี่ยนคำ เช่น ideation กลายเป็น this ability หรือ least complex กลายเป็น this simplicity และต้องดูเอกพจน์/พหูพจน์ด้วย these benefits ต้องมีประโยชน์อย่างน้อยสองข้อมาก่อน',
        examples: [
          { s: 'Ideation is a sought-after skill. Employees with <strong>this ability</strong> adapt quickly.', g: 'Summary noun: “ability” relabels “ideation”.' },
          { s: 'Governments ration goods at legal prices. <strong>Such a system</strong> needs strict control.', g: '“Such a system” = the rationing just described.' },
          { s: 'Students use flashcards or read stories. <strong>The former</strong> is fast; <strong>the latter</strong> lasts longer.', g: 'Former = first named (flashcards); latter = second (stories).' },
          { s: 'Cooking teaches planning. It also improves diet. <strong>These benefits</strong> explain its popularity.', g: 'Plural pointer needs two benefits before it.' }
        ],
        trap: 'The summary noun uses a DIFFERENT word from its partner, so students search for a repeated word and find none. “This simplicity” never appears next to the word “simple”; it points to “least grammatically complex”. Dodge: match the IDEA, not the spelling. Ask “which sentence would I describe with this label?”',
        analogy: { title: 'Grab driver pins', text: 'A Grab driver cannot pick you up from “there” unless a pin has already been dropped on the map. A pointer like “this ability” is the driver saying “I’m at the pin”: the pin (the partner sentence) must already exist. If no pin has been dropped yet, the pointer is lost, and so is the paragraph.' },
        map: { center: 'Reference chains', branches: [
          { label: 'Pronouns', leaves: ['it, they, she', 'their, its'] },
          { label: 'Summary nouns', leaves: ['this ability', 'these benefits', 'this anxiety, such practices'] },
          { label: 'Ordering words', leaves: ['the former / the latter', 'both, another, the same'] },
          { label: 'Checks', leaves: ['arrows only point back', 'plural needs two or more', 'match idea, not spelling'] }
        ] },
        moves: [
          { move: 'Point your thumb back over your shoulder', says: '“This, these, such” point back' },
          { move: 'Draw an arrow in the air, right to left', says: 'Find the partner sentence before it' },
          { move: 'Hold up one finger, then two', says: 'This needs one; these needs two or more' },
          { move: 'Clasp your hands together', says: 'Partner first, pointer after: a locked pair' }
        ]
      },
      items: [
        { id: 't13l2s1-1', type: 'choose', tag: 'po-ref', level: 'B2+',
          stem: T13_B_CURIOUS + '<p>In sentence B, the phrase “this trait” refers to ________.</p>',
          options: [
            'asking more questions',
            'success at university',
            'a difficult university topic',
            'the urge to find out how things work'
          ], answer: 3,
          hint: 'A trait is a quality of a person. Which quality has the paragraph already named and explained?',
          why: '“This trait” relabels curiosity, which A defines as “the urge to find out how things work”. Asking more questions is the near miss: it is what students with the trait DO, not the trait itself. Success at university is a result, and a difficult topic is not a quality of a person.' },

        { id: 't13l2s1-2', type: 'choose', tag: 'po-ref', level: 'B2+',
          stem: '<div class="orderblock"><p>A. The latter is slower, but words met in a story tend to stay in the memory much longer.</p><p>B. The former is fast and efficient for memorising large numbers of words before an exam.</p><p>C. Students usually learn new vocabulary in one of two ways: with flashcard apps or through extensive reading.</p><p>D. The best approach may therefore be to combine them, using apps for speed and books for depth.</p></div>',
          options: ['A-B-C-D', 'A-C-B-D', 'C-A-D-B', 'C-B-A-D'], answer: 3,
          hint: '“The former” and “the latter” need two things already named. Which comes first in that list?',
          why: 'C names two methods in order (flashcards, then reading), so “The former” (B, flashcards) must come before “The latter” (A, reading), and D combines them with “therefore”. Options starting with A fail because “The latter” has nothing to refer to. C-A-D-B mentions the latter before the former and puts the conclusion before the second method has been described.' },

        { id: 't13l2s1-3', type: 'order', tag: 'po-ref', level: 'B2+',
          stem: 'Put the sentences in order. Follow the pointers.',
          items: [
            'Paying for street food in Bangkok used to mean digging through your bag for coins and small notes.',
            'This changed when QR-code payments spread quickly during the pandemic, as customers wanted to avoid touching cash.',
            'Today, even the smallest noodle stalls display a code next to their menus.',
            'For such small businesses, the code means no more running out of change and a clear record of every sale.'
          ],
          hint: 'Find what “This changed”, “Today” and “such small businesses” each need before them.',
          why: 'The first sentence describes the old situation. “This changed” points back to it, “Today” moves the story forward to the present, and “such small businesses” points back to “the smallest noodle stalls”, so it must come last.' },

        { id: 't13l2s1-4', type: 'choose', tag: 'po-ref', level: 'B2+',
          stem: T13_B_PHONE + '<p>In sentence D, the phrase “such a strict ban” refers to ________.</p>',
          options: [
            'the pouches',
            'the phone-free day rule',
            'the noise at break time',
            'contacting parents in an emergency'
          ], answer: 1,
          hint: '“Such” relabels an idea already described. Is a ban an object, a policy, or a result?',
          why: '“Such a strict ban” relabels the “phone-free day” rule in B, described in A. The pouches are the near miss: they are the tool the rule uses, not the ban itself. The noise at break time is a result, and contacting parents is what the critics say the ban prevents.' },

        { id: 't13l2s1-5', type: 'choose', tag: 'po-ref', level: 'B2+',
          stem: T13_B_PHONE,
          options: ['B-A-C-D', 'B-A-D-C', 'B-C-A-D', 'B-D-A-C'], answer: 0,
          hint: 'Every option opens with B. Follow “this rule”, “these pouches” and “reply” to their partners.',
          why: 'B introduces the rule, A explains it (“Under this rule… a pouch”), C gives the supporters’ view of “these pouches”, and D gives the critics’ reply. B-C-A-D mentions “these pouches” before any pouch appears, and B-A-D-C has the critics “reply” to supporters who have not yet spoken.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't13l2s2', name: 'Signal words', cefr: 'B2+', tag: 'po-signal',
      theory: {
        key: 'Every signal word makes a <strong>demand on the sentence before it</strong>: <em>However</em> needs an opposite idea, <em>For example</em> needs a general claim, <em>Additionally</em> needs a first point, <em>Consequently</em> needs a cause, <em>Lastly</em> needs earlier steps.',
        body: [
          'Signal words (connectors) are traffic signs between sentences. Each one tells you the <strong>relationship</strong> with the previous sentence, so each one also tells you what kind of sentence must stand just before it. Learn them as families: <strong>addition</strong> (<em>Additionally, In addition, Moreover, Furthermore, also, another</em>); <strong>contrast</strong> (<em>However, Nevertheless, Despite this, On the other hand, By contrast, Yet</em>); <strong>example</strong> (<em>For example, For instance, To illustrate</em>); <strong>result</strong> (<em>Consequently, As a result, Therefore, Thus</em>); <strong>sequence</strong> (<em>Initially, First, Then, After that, Following X, Lastly, Finally</em>).',
          '<strong>Read the demand.</strong> <em>However</em> demands a sentence going the other way (TCAS68: “Being an introvert can present challenges… <strong>However</strong>, recognizing this trait can lead to effective strategies”). <em>For example</em> demands a general statement it can illustrate (TCAS69: “Employees who possess this ability can generate fresh concepts…” → “<strong>For example</strong>, a marketing team member…”). <em>Additionally</em> demands a first point of the same kind. <em>Lastly</em> demands a list already in progress (TCAS67: <em>Initially… additionally… Lastly</em>).',
          '<strong>Hidden signals.</strong> TCAS often puts the signal inside the sentence: “Prospective students should <strong>additionally</strong> consider…”, “Colour preferences <strong>also</strong> exert influence…”, “It has <strong>therefore</strong> been suggested…”, “<strong>In addition to its visual appeal</strong>, Instagram’s interface…”. The last type is a gift: it names the previous point for you (“visual appeal”), so you know exactly which sentence comes before.',
          '<strong>Procedure.</strong> Step 1: circle every signal word, including hidden ones. Step 2: name its family. Step 3: ask what the sentence before it must be (an opposite? a general claim? a first point? a cause?). Step 4: find that sentence and lock the pair.'
        ],
        simple: [
          'Signal words show how two sentences are connected.',
          '<em>However</em> → the sentence before says the opposite. <em>For example</em> → the sentence before is general. <em>Additionally / also</em> → the sentence before gives a first point. <em>Consequently</em> → the sentence before is the cause.',
          'Look for signal words in the middle of sentences too.'
        ],
        thai: 'คำเชื่อม (signal words) บอกความสัมพันธ์กับประโยคก่อนหน้า จึงบอกด้วยว่าประโยคก่อนหน้าต้องเป็นแบบไหน However ต้องมีความคิดตรงข้ามมาก่อน, For example ต้องมีประโยคกว้างๆ ให้ยกตัวอย่าง, Additionally/also ต้องมีประเด็นแรกมาก่อน, Consequently ต้องมีสาเหตุมาก่อน, Lastly ต้องมีขั้นตอนก่อนหน้า กับดักคือคำเชื่อมที่ซ่อนอยู่กลางประโยค เช่น should additionally consider หรือ also exert influence และ In addition to its visual appeal ซึ่งบอกชัดเลยว่าประโยคก่อนหน้าพูดเรื่องอะไร',
        examples: [
          { s: 'Online learning is flexible. <strong>However</strong>, it can feel lonely.', g: 'However demands an opposite idea before it.' },
          { s: 'AI can explain grammar. <strong>For example</strong>, it can show why “an hour” takes “an”.', g: 'For example demands a general claim before it.' },
          { s: '<strong>In addition to its low price</strong>, the app is easy to use.', g: 'Names the previous point (price) for you.' },
          { s: 'Students should <strong>also</strong> check the campus facilities.', g: 'Hidden addition signal: a first point must come before.' },
          { s: 'The drains overflowed. <strong>Consequently</strong>, traffic was blocked at 37 locations.', g: 'Consequently demands a cause before it.' }
        ],
        trap: 'The signal is hidden in the middle of the sentence (“should additionally consider”, “also exert influence”, “has therefore been suggested”), so students treat the sentence as an opener or place it too early. Dodge: read every sentence to the end and circle signals wherever they are.',
        analogy: { title: 'BTS Skytrain announcements', text: 'On the Skytrain, “Next station: Siam, interchange station” only makes sense if the train has just left the station before Siam. Signal words are the station announcements: “However” is announced only after a station going one way; “Lastly” only near the end of the line. Hear the announcement, and you know where the train has just been.' },
        map: { center: 'Signal words', branches: [
          { label: 'Addition', leaves: ['Additionally, Moreover', 'also, another', 'In addition to X'] },
          { label: 'Contrast', leaves: ['However, Yet', 'Despite this', 'By contrast'] },
          { label: 'Example / result', leaves: ['For example, To illustrate', 'Consequently, As a result', 'Therefore, Thus'] },
          { label: 'Sequence', leaves: ['Initially, First', 'Then, Following X', 'Lastly, Finally'] }
        ] },
        chant: { title: 'Every Signal Makes a Demand', beat: 'snap-clap, snap-clap (4/4)', lines: [
          'However needs the other side,',
          'For example needs a claim to ride,',
          'Additionally needs point one,',
          'Consequently needs a cause that’s done.',
          'Initially starts, then Lastly ends,',
          'Also hides where the sentence bends.',
          'Circle the signal, ask what came before,',
          'Lock the pair and close the door!'
        ] }
      },
      items: [
        { id: 't13l2s2-1', type: 'sort', tag: 'po-signal', level: 'B2+',
          stem: 'Sort the signal words by the job they do.',
          bins: [
            { key: 'add', label: 'Addition', hint: 'one more point of the same kind' },
            { key: 'con', label: 'Contrast', hint: 'the opposite direction' },
            { key: 'ex', label: 'Example', hint: 'a specific case of a general claim' },
            { key: 'res', label: 'Result', hint: 'what happened because of it' },
            { key: 'seq', label: 'Sequence', hint: 'a step in time order' }
          ],
          items: [
            { text: 'Additionally', bin: 'add' },
            { text: 'Moreover', bin: 'add' },
            { text: 'Nevertheless', bin: 'con' },
            { text: 'By contrast', bin: 'con' },
            { text: 'To illustrate', bin: 'ex' },
            { text: 'For instance', bin: 'ex' },
            { text: 'Consequently', bin: 'res' },
            { text: 'As a result', bin: 'res' },
            { text: 'Initially', bin: 'seq' },
            { text: 'Following this stage', bin: 'seq' }
          ],
          hint: 'For each word, ask: what does the sentence before it have to say?',
          why: 'Additionally and Moreover add a point of the same kind; Nevertheless and By contrast turn the other way; To illustrate and For instance introduce an example; Consequently and As a result give a result; Initially and Following this stage mark steps in time. Knowing the family tells you what must come before each one.' },

        { id: 't13l2s2-2', type: 'choose', tag: 'po-signal', level: 'B2+',
          stem: '<div class="orderblock"><p>A. Additionally, students should mix different subjects in one session, because switching topics strengthens long-term memory.</p><p>B. Lastly, a full night’s sleep before the exam allows the brain to store everything that has been practised.</p><p>C. First, it is wise to test yourself instead of rereading notes, as recalling an answer makes it easier to find again.</p><p>D. Research on learning suggests that a few simple habits can make revision far more effective.</p></div>',
          options: ['C-A-D-B', 'C-D-A-B', 'D-A-C-B', 'D-C-A-B'], answer: 3,
          hint: 'Three sentences carry sequence or addition signals. Which one has none?',
          why: 'D is the only sentence without a signal, so it opens by announcing “a few simple habits”. Then the signals give the order: First (C) → Additionally (A) → Lastly (B). Options starting with C fail because “First” needs a topic to belong to, and D-A-C-B puts “Additionally” before the first habit.' },

        { id: 't13l2s2-3', type: 'choose', tag: 'po-signal', level: 'B2+',
          stem: T13_B_COLOUR + '<p>Which word or phrase in sentence B shows that another sentence must come before it?</p>',
          options: ['therefore', 'by contrast', 'Cool colours', 'bedrooms and hospitals'], answer: 1,
          hint: 'One signal in B links two parts of the same sentence. The other one links B to a different sentence.',
          why: '“By contrast” compares cool colours with something already described (warm colours in A), so a sentence must come before B. “Therefore” is the near miss: it is a signal, but it links two halves of B itself (linked with calm → therefore popular in bedrooms). “Cool colours” and “bedrooms and hospitals” are content, not links.' },

        { id: 't13l2s2-4', type: 'choose', tag: 'po-signal', level: 'B2+',
          stem: T13_B_COLOUR,
          options: ['C-A-B-D', 'C-A-D-B', 'C-B-A-D', 'C-D-A-B'], answer: 1,
          hint: 'All options open with C. Ask what “This is why” and “by contrast” each need right before them.',
          why: 'C introduces colour and mood, A describes warm colours, D gives a result of that (“This is why… red and orange”), and B turns to cool colours “by contrast”. C-A-B-D places “This is why… red and orange” after the calm, cool colours, so the reason no longer fits. C-B-A-D uses “by contrast” with nothing to contrast, and C-D-A-B gives “This is why” before the reason.' },

        { id: 't13l2s2-5', type: 'choose', tag: 'po-signal', level: 'B2+',
          stem: '<p>“Chatbots can explain a grammar mistake in seconds, at any time of day. ________, they sometimes give confident explanations that are simply wrong. Students should therefore check any rule a chatbot gives them against a reliable grammar book.”</p><p>Which signal word best fills the blank?</p>',
          options: ['However', 'Moreover', 'As a result', 'For instance'], answer: 0,
          hint: 'Is the second sentence adding another strength, giving an example, or turning the other way?',
          why: 'The first sentence praises chatbots and the second reveals a weakness, so the link is contrast: <em>However</em>. “Moreover” is the near miss, but it adds a point in the same direction, and a wrong explanation is not another strength. “As a result” would make the errors a result of speed, and “For instance” would make them an example of the praise.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't13l2s3', name: 'Given → new flow', cefr: 'B2+', tag: 'po-given',
      theory: {
        key: 'Each sentence <strong>starts with something the reader already knows</strong> and <strong>ends with something new</strong>; the next sentence picks up that new ending as its starting point.',
        body: [
          'English sentences have a natural shape: the beginning is the <strong>given</strong> (the topic we already share) and the end is the <strong>new</strong> (the information the writer wants to add). Good writers chain them: the new end of sentence 1 becomes the given start of sentence 2. <em>“…they are <strong>fermented</strong> to develop their rich flavor.” → “<strong>Following fermentation</strong>, the beans are dried and roasted, … revealing the valuable <strong>nibs</strong> inside.” → “Ultimately, these <strong>nibs</strong> are ground…”</em> (TCAS68). Each link hooks onto the one before.',
          '<strong>This is the tool for items with no connectors.</strong> Some TCAS paragraphs have almost no signal words. Then compare the <strong>end</strong> of each sentence with the <strong>start</strong> of the others. In TCAS69’s white coat syndrome item: the opener ends with “<em>the anxiety a patient experiences</em>” → “<em>This anxiety</em> causes an increase in stress hormones, which… leads to a temporary elevation in <em>blood pressure</em>” → “Because the <em>blood pressure reading</em> is artificially high…”. End → start, end → start.',
          '<strong>The echo can be disguised.</strong> The start of the next sentence may repeat the word (<em>fibres → These fibres</em>), change its form (<em>fermented → fermentation</em>), use a synonym (<em>tuition → fees</em>), or summarise (<em>blocked at 37 locations → Such widespread disruption</em>). Look for the <em>idea</em>, not the exact word.',
          '<strong>Procedure.</strong> Step 1: after finding the opener, underline the last few words (the new information) of each sentence. Step 2: look for another sentence whose first few words pick that up. Step 3: chain end → start until all four sentences are linked. If two sentences could follow, choose the one whose start echoes the <em>end</em> of the previous sentence, not just a word in its middle.'
        ],
        simple: [
          'A sentence starts with old information and ends with new information.',
          'The next sentence starts with that new information. It is like a chain: the end of one sentence holds the start of the next.',
          'If there are no signal words, match the end of one sentence with the beginning of another.'
        ],
        thai: 'หลัก given → new คือ ประโยคภาษาอังกฤษขึ้นต้นด้วยข้อมูลที่ผู้อ่านรู้แล้ว และจบด้วยข้อมูลใหม่ ประโยคถัดไปจะหยิบข้อมูลใหม่ท้ายประโยคก่อนมาเป็นจุดเริ่มต้น เช่น …are fermented → Following fermentation… ใช้วิธีนี้กับโจทย์ที่แทบไม่มีคำเชื่อม ให้จับคู่ “ท้ายประโยค” กับ “ต้นประโยค” กับดักคือคำที่เชื่อมกันอาจเปลี่ยนรูป (ferment → fermentation) หรือเปลี่ยนเป็นคำสรุป (such disruption) และอย่าจับคู่จากคำที่อยู่กลางประโยค',
        examples: [
          { s: 'Synthetic clothes shed tiny <strong>fibres</strong>. <strong>These fibres</strong> are too small for filters.', g: 'New at the end → given at the start.' },
          { s: 'The beans are <strong>fermented</strong>. <strong>Following fermentation</strong>, they are dried.', g: 'The echo changes form: verb → noun.' },
          { s: '…traffic was blocked at <strong>37 locations</strong>. <strong>Such widespread disruption</strong> led to…', g: 'A summary noun picks up the new end.' },
          { s: '…a sudden rise in <strong>demand</strong>. <strong>This demand</strong> puts pressure on the grid.', g: 'Each sentence hooks onto the last one.' }
        ],
        trap: 'Students link two sentences because they share a word somewhere in the middle. But the strongest link is END of one sentence → START of the next. Dodge: underline only the last few words of each sentence and the first few words of the others, and match those.',
        analogy: { title: 'Train carriages', text: 'Each Skytrain carriage has a hook at the back and a coupling at the front. The new information at the end of a sentence is the hook; the given information at the start of the next is the coupling. Only matching hooks and couplings make one train — the others leave a carriage stranded on the platform.' },
        map: { center: 'Given → new', branches: [
          { label: 'Sentence shape', leaves: ['start = given (known)', 'end = new (added)'] },
          { label: 'The echo', leaves: ['same word', 'new form (ferment → fermentation)', 'synonym or summary noun'] },
          { label: 'When to use', leaves: ['few or no connectors', 'two sentences could follow'] },
          { label: 'Procedure', leaves: ['underline the endings', 'match to beginnings', 'chain end → start'] }
        ] },
        story: { title: 'Pun’s Relay Story', panels: [
          { who: 'T.Chris', text: 'Relay story. Each person starts with the last thing the person before said. Mint?' },
          { who: 'Mint', text: 'Every night, I make a revision timetable.' },
          { who: 'Fah', text: 'That timetable is colour-coded by subject and deadline.' },
          { who: 'Pun', text: 'Penguins cannot fly, but they are excellent swimmers.' },
          { who: 'Nong Bot', text: 'Error! Previous ending: “subject and deadline”. Your beginning: “Penguins”. Coupling failed. Train derailed. Beep!' },
          { who: 'Pun', text: 'Fine. The deadline scared me so much that I thought about penguins. Happy now?' }
        ], moral: 'Start each sentence with what the last one ended on.' }
      },
      items: [
        { id: 't13l2s3-1', type: 'choose', tag: 'po-given', level: 'B2+',
          stem: '<div class="orderblock"><p>A. In the sea, they are swallowed by fish and shellfish, and some eventually return to our dinner plates.</p><p>B. From the waste water, many of them pass through treatment plants and end up in rivers and the sea.</p><p>C. Every time synthetic clothes are washed, they shed thousands of tiny plastic fibres.</p><p>D. These fibres are too small to be caught by most washing-machine filters, so they flow out with the waste water.</p></div>',
          options: ['B-C-D-A', 'B-D-C-A', 'C-D-A-B', 'C-D-B-A'], answer: 3,
          hint: 'Underline the last words of each sentence. Which sentence begins with them?',
          why: 'Each sentence starts with the new ending of the one before: C ends with “plastic fibres” → D starts “These fibres” and ends with “waste water” → B starts “From the waste water” and ends with “the sea” → A starts “In the sea”. B cannot open because “many of them” needs a noun before it. C-D-A-B jumps to the sea before the fibres have reached it.' },

        { id: 't13l2s3-2', type: 'spot', tag: 'po-given', level: 'B2+',
          stem: 'The sentences are in the right order, but one breaks the given → new flow by putting its known information at the end. Find it.',
          words: [
            'In late September 2026, more than 300 millimetres of rain fell on parts of Bangkok in just 48 hours.',
            'Traffic at 37 locations across the city was blocked by this water.',
            'Amid such widespread disruption, the city declared a flood disaster zone on 26 September.',
            'A declaration of this kind allows officials to move emergency staff and equipment more quickly.'
          ],
          answer: 1, fix: 'This water blocked traffic at 37 locations across the city.',
          hint: 'Which sentence starts with brand-new information and leaves the known part until the end?',
          why: 'Sentence 2 begins with new information (traffic at 37 locations) and hides the known information (“this water”) at the end. Rewritten as “This water blocked traffic at 37 locations”, it starts with the rain from sentence 1 and ends with the disruption that sentence 3 picks up with “such widespread disruption”.' },

        { id: 't13l2s3-3', type: 'choose', tag: 'po-given', level: 'B2+',
          stem: '<div class="orderblock"><p>A. This sudden rise in demand puts heavy pressure on the power grid, especially in the late afternoon.</p><p>B. When temperatures climb above 40°C, millions of homes switch on their air conditioners at almost the same time.</p><p>C. If the grid cannot handle this pressure, some areas may face power cuts at the very moment people most need cooling.</p><p>D. Such cuts are especially dangerous for elderly people, whose bodies struggle to control their temperature in extreme heat.</p></div><p>Which sentence should come second in the correct order?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 0,
          hint: 'Find the opener first, then underline its last words. Which sentence starts from them?',
          why: 'B opens, because it is the only sentence with no pointer. It ends with millions of air conditioners going on at once, and A begins by summarising exactly that: “This sudden rise in demand”. C is the near miss because it mentions the grid, but its start (“this pressure”) needs A’s ending (“heavy pressure on the power grid”). D’s “Such cuts” needs C. The order is B-A-C-D.' },

        { id: 't13l2s3-4', type: 'choose', tag: 'po-given', level: 'B2+',
          stem: '<div class="orderblock"><p>A. A single rumour posted in a large group chat can reach hundreds of people within minutes.</p><p>B. Each of those people may forward it to several other groups without checking whether it is true.</p><p>C. By the time a correction is posted, the original rumour has already travelled far beyond the first chat.</p><p>D. Within an hour, a rumour forwarded in this way can reach tens of thousands of phones.</p></div>',
          options: ['A-B-D-C', 'A-D-B-C', 'B-A-C-D', 'B-C-A-D'], answer: 0,
          hint: 'Halve the options with the opener. Then ask what “in this way” in D needs right before it.',
          why: 'A opens: it introduces the rumour and “hundreds of people”. B picks them up (“Each of those people”) and describes forwarding, D picks that up (“forwarded in this way”) and ends with the huge reach, and C closes with the late correction. B cannot open because “those people” points back. A-D-B-C uses “in this way” before any forwarding has been described.' },

        { id: 't13l2s3-5', type: 'choose', tag: 'po-given', level: 'B2+',
          stem: '<p>“Every year, Thai farmers are left with millions of tonnes of rice straw after the harvest.”</p><p>Which sentence continues the paragraph most smoothly?</p>',
          options: [
            'However, rice is the most important crop in Thailand.',
            'Farmers in the North also grow maize, which leaves waste too.',
            'Much of this straw is burned in the fields, adding to the smoke.',
            'Smoke fills northern skies partly because farmers burn this straw.'
          ], answer: 2,
          hint: 'The first sentence ends with rice straw. Which option starts from there?',
          why: 'The first sentence ends with its new information, “rice straw”, so the smoothest next sentence starts from it: “Much of this straw is burned…”. The near miss says the same thing but starts with new information (smoke) and hides “this straw” at the end, which breaks the flow. The maize sentence drifts off topic, and “However” contrasts with nothing.' }
      ]
    }
  ],
  check: { id: 't13l2ck', name: 'Systems Check · Chains', items: [
    { id: 't13l2ck-1', type: 'choose', tag: 'po-ref', level: 'C1',
      stem: '<div class="orderblock"><p>A. This flexibility is one reason the method has spread from technology companies to schools and hospitals.</p><p>B. Design thinking is a problem-solving method that starts by observing the people who will use a solution.</p><p>C. Instead of following a fixed plan, teams build quick, cheap prototypes and change them after every round of feedback.</p><p>D. Critics warn, however, that without clear goals such constant changes can waste time and money.</p></div>',
      options: ['B-A-C-D', 'B-C-A-D', 'C-A-B-D', 'C-B-D-A'], answer: 1,
      hint: '“This flexibility” is a label. Which sentence describes something flexible?',
      why: 'B defines design thinking and opens. C describes the flexible part (changing prototypes after feedback), A relabels it as “This flexibility”, and D turns to the critics with “however… such constant changes”. B-A-C-D uses “This flexibility” before anything flexible has been described. C cannot open, because “teams” and “a fixed plan” belong to a method that has not been named.' },
    { id: 't13l2ck-2', type: 'choose', tag: 'po-signal', level: 'C1',
      stem: '<div class="orderblock"><p>A. The first consideration is cost: food, vaccinations and vet visits can add up to thousands of baht a year.</p><p>B. In addition to cost, owners must think honestly about time, since a dog needs daily walks and cannot be left alone for long hours.</p><p>C. Finally, families should ask whether everyone at home, and the neighbours if they live in a condo, will accept a dog.</p><p>D. Adopting a rescue dog is rewarding, but it is a decision that should be made carefully.</p></div>',
      options: ['D-A-B-C', 'D-A-C-B', 'D-B-A-C', 'D-C-B-A'], answer: 0,
      hint: 'One signal names the point that must come directly before it.',
      why: 'D opens, A gives “The first consideration” (cost), B continues with “In addition to cost”, which names the previous point, and C ends the list with “Finally”. D-B-A-C mentions “In addition to cost” before cost is discussed, and the other two options place “Finally” before the list is complete.' },
    { id: 't13l2ck-3', type: 'choose', tag: 'po-given', level: 'C1',
      stem: T13_B_ONION,
      options: ['A-B-C-D', 'A-C-B-D', 'B-A-C-D', 'B-C-D-A'], answer: 2,
      hint: 'Very few signal words here. Match the end of each sentence to the start of another.',
      why: 'B opens with onions and ends with “sulfur compounds”; A picks up “these compounds” and ends with “a gas”; C starts “This gas” and ends with the eyes; D explains the tears. A cannot open because “these compounds” points back. B-C-D-A mentions “This gas” before any gas has been produced.' },
    { id: 't13l2ck-4', type: 'choose', tag: 'po-ref', level: 'C1',
      stem: T13_B_ONION + '<p>In sentence A, the phrase “these compounds” refers to ________.</p>',
      options: ['enzymes', 'sulfur compounds', 'the onion’s cells', 'nutrients in the soil'], answer: 1,
      hint: 'Look at the end of the opener. What does the onion store?',
      why: '“These compounds” points back to the “sulfur compounds” that onions store (B). Nutrients in the soil are the near miss: they are mentioned in the same sentence, but they are what the compounds are built from, not the compounds themselves. The enzymes and the cells appear in A itself, and the enzymes act on the compounds.' },
    { id: 't13l2ck-5', type: 'choose', tag: 'po-signal', level: 'C1',
      stem: '<div class="orderblock"><p>A. Despite these benefits, the high upfront cost means that many schools cannot install the panels without government support.</p><p>B. Solar panels on school roofs can cut electricity bills by a third, and they turn the building into a science lesson.</p><p>C. Some schools also sell extra electricity back to the grid at weekends and during the holidays.</p><p>D. Low-interest loans for schools could therefore be one of the simplest ways to speed up the country’s move to clean energy.</p></div>',
      options: ['A-B-C-D', 'A-C-B-D', 'B-A-C-D', 'B-C-A-D'], answer: 3,
      hint: 'After the opener, test the two survivors at the point where they differ. What must “Despite these benefits” follow?',
      why: 'B opens with two benefits, C adds a third (“also”), A turns with “Despite these benefits” to the cost problem, and D gives a solution to that cost with “therefore”. Options starting with A fail because “these benefits” points back. B-A-C-D puts a new benefit after the problem, which leaves “therefore” in D with no cost problem directly before it.' },
    { id: 't13l2ck-6', type: 'choose', tag: 'po-given', level: 'C1',
      stem: '<div class="orderblock"><p>A. When the water stays too warm for several weeks, corals push out the tiny algae that live inside their tissues.</p><p>B. Without these algae, the corals lose both their colour and their main source of food.</p><p>C. Coral reefs owe their bright colours to a partnership with microscopic algae.</p><p>D. Pale and starving, the weakened corals may die if cooler water does not return soon enough.</p></div>',
      options: ['C-A-B-D', 'C-A-D-B', 'C-B-A-D', 'C-D-B-A'], answer: 0,
      hint: 'The opener is the same in every option. What does “Pale and starving” pick up from?',
      why: 'C opens; A ends with the algae being pushed out; B starts “Without these algae” and ends with the loss of colour and food; D picks that up with “Pale and starving”. C-B-A-D says the corals are “without these algae” before they lose them, and the options with D earlier describe the corals as pale and starving before the reason is given.' }
  ] }
});

/* ======================================================== LEVEL 3 PATTERNS */
var T13_B_SILK = '<div class="orderblock"><p>A. Once the cocoons are complete, they are dropped into hot water, which loosens the fine thread.</p><p>B. Thai silk is produced through a slow process that begins with silkworms feeding on mulberry leaves.</p><p>C. Ultimately, this thread is unwound, dyed and woven by hand on wooden looms into the shimmering fabric the country is famous for.</p><p>D. After several weeks of feeding, the worms spin cocoons made of a single, continuous thread.</p></div>';

var T13_B_HONEY = '<div class="orderblock"><p>A. Back in the hive, worker bees pass the nectar from mouth to mouth, adding enzymes that begin to change it into honey.</p><p>B. Honey begins its life as nectar, a sugary liquid that bees collect from flowers.</p><p>C. Finally, the bees seal each cell with a cap of wax, and the honey can be stored for months.</p><p>D. This watery mixture is then spread across the cells of the honeycomb, where the bees fan it with their wings until most of the water evaporates.</p></div>';

var T13_B_RRR = '<div class="orderblock"><p>A. The most effective strategy of all is to reduce waste in the first place, for instance by refusing plastic bags and single-use straws.</p><p>B. Recycling, although useful, is the least effective of the three, because breaking materials down and remaking them still uses a great deal of energy.</p><p>C. Environmental experts rank the three “Rs” of waste management according to how much they help the planet.</p><p>D. A better choice is to reuse items such as glass jars and cloth bags, which saves the energy needed to make new ones.</p></div>';

var T13_B_GREEN = '<div class="orderblock"><p>A. For example, a clothing brand might advertise a small “eco” collection made from recycled fabric while most of its products are still made in the old, wasteful way.</p><p>B. Greenwashing is the practice of making a company appear more environmentally friendly than it really is.</p><p>C. Over time, such misleading claims can leave shoppers cynical about all green labels, even honest ones.</p><p>D. At the moment of purchase, customers who choose the collection may believe they are helping the planet, when in fact they are supporting the same wasteful business.</p></div>';

T13.levels.push({
  id: 't13l3', n: 3, name: 'Patterns', cefr: 'C1',
  blurb: 'Recognise the shape of the paragraph (process, comparison, classification, cause and effect, problem and solution) and the order almost writes itself.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't13l3s1', name: 'Process & chronology', cefr: 'C1', tag: 'po-process',
      theory: {
        key: 'In a process or a story, <strong>each step starts from the result of the step before</strong>: time words (Initially, After X, Following X, Once X, Since that time, Ultimately) name the step that must come just before them.',
        body: [
          'A process paragraph copies the order of reality: you cannot roast beans that have not been harvested. So the key question for every sentence is <em>“what must already have happened?”</em>. The time words answer it for you, because many of them <strong>name the previous step</strong>: <em>After the beans are collected…</em> needs collecting; <em>Following fermentation…</em> needs fermenting; <em>Once the cocoons are complete…</em> needs cocoons being spun; <em>Since that time…</em> needs a time (TCAS66: “began with the 1872 publication…” → “Since that time, abundant research has been conducted”).',
          '<strong>The opener names the whole process</strong>, often with its first step inside it: “Chocolate is made through a fascinating process that <em>begins with harvesting cacao beans</em>” (TCAS68). Careful: because the first step is already in the opener, the next sentence is step two (“After the beans are collected…”). And in a process, <em>Ultimately</em> or <em>Finally</em> marks the <strong>last step</strong> (“Ultimately, these nibs are ground into a liquid form…”), not an opinion.',
          '<strong>How TCAS makes it hard.</strong> In TCAS68 all four options began with the same opener: C-B-A-D, C-B-D-A, C-D-A-B, C-D-B-A. The opener gave nothing away, so students had to test place two: “After the beans are collected” (B) or “Following fermentation” (D)? Fermentation had not happened yet, so B came second. Then “Following fermentation” (D) had to follow B, where the beans “are fermented”, and “these nibs” (A) had to follow D, where the nibs are revealed: C-B-D-A.',
          '<strong>Procedure.</strong> Step 1: find the opener (it names the whole process or sets the starting point in time). Step 2: for every time word, write the step it needs before it. Step 3: follow the <em>product</em> of each step — beans → fermented beans → nibs → liquid — like a relay baton. Step 4: <em>Ultimately / Finally / Today</em> goes last.'
        ],
        simple: [
          'In a process, step 2 cannot come before step 1. Ask: “What must happen first?”',
          'Words like <em>After the beans are collected</em> or <em>Following fermentation</em> tell you the step just before.',
          '<em>Ultimately</em> and <em>Finally</em> show the last step.'
        ],
        thai: 'ย่อหน้าแบบกระบวนการ (process) หรือลำดับเวลา เรียงตามความจริง ขั้นตอนหลังต้องเริ่มจากผลของขั้นตอนก่อน คำบอกเวลาอย่าง After the beans are collected, Following fermentation, Once the cocoons are complete, Since that time จะบอกชื่อขั้นตอนก่อนหน้าให้เลย ประโยคเปิดมักบอกชื่อกระบวนการและขั้นแรกไว้ในตัว ส่วน Ultimately/Finally คือขั้นสุดท้าย กับดักคือข้อสอบให้ตัวเลือกทั้ง 4 ขึ้นต้นเหมือนกัน ต้องทดสอบตำแหน่งที่สองแทน และติดตาม “ผลผลิต” ของแต่ละขั้น เช่น เมล็ด → หมัก → nibs → ของเหลว',
        examples: [
          { s: 'Silk production <strong>begins with</strong> silkworms feeding on mulberry leaves.', g: 'The opener names the process and its first step.' },
          { s: '<strong>After several weeks of feeding</strong>, the worms spin cocoons.', g: 'Names the step before it: feeding.' },
          { s: '<strong>Once the cocoons are complete</strong>, they are dropped into hot water.', g: 'Needs the cocoon-spinning step first.' },
          { s: 'Research began in 1872. <strong>Since that time</strong>, many studies have followed.', g: 'Chronology: “that time” needs a date before it.' },
          { s: '<strong>Ultimately</strong>, the thread is woven into fabric.', g: 'In a process, Ultimately = the final step.' }
        ],
        trap: 'All four options begin with the same opener, and students freeze. Or they put the “After…” step second without checking that its step has already happened. Dodge: for every time word, name the step it needs (“Following fermentation” needs “are fermented”), then test the second position of the options.',
        analogy: { title: 'Mama noodle instructions', text: 'Boil the water, add the noodles, add the seasoning, wait three minutes. Nobody adds seasoning to an empty bowl before the water. Every process sentence is a cooking step: “After the water boils…” tells you exactly which step you must already have done.' },
        map: { center: 'Process & chronology', branches: [
          { label: 'Opener', leaves: ['names the whole process', 'often includes step 1'] },
          { label: 'Step names', leaves: ['After X / Following X', 'Once X is complete', 'This mixture is then…'] },
          { label: 'Chronology', leaves: ['In 1872… Since that time', 'Two years later', 'Today'] },
          { label: 'Last step', leaves: ['Ultimately, Finally', 'the finished product'] }
        ] },
        chant: { title: 'Follow the Baton', beat: 'tap-tap-clap (4/4)', lines: [
          'Harvest first, then let it ferment,',
          'Following fermentation, that’s where it went.',
          'Roast it, crack it, nibs inside,',
          'These nibs are ground till they’re liquefied.',
          'After, once, and since that time,',
          'Each one names the step behind.',
          'Follow the baton, step by step,',
          'Ultimately’s the final prep!'
        ] }
      },
      items: [
        { id: 't13l3s1-1', type: 'choose', tag: 'po-process', level: 'C1',
          stem: T13_B_SILK,
          options: ['B-A-C-D', 'B-A-D-C', 'B-D-A-C', 'B-D-C-A'], answer: 2,
          hint: 'All four options start the same way. What must already exist before “Once the cocoons are complete”?',
          why: 'B names the process and its first step (feeding). D follows “After several weeks of feeding” and produces cocoons; A begins “Once the cocoons are complete” and loosens the thread; C ends with “Ultimately, this thread is… woven”. The options with A second put the cocoons in hot water before they exist, and B-D-C-A weaves “this thread” before it has been loosened.' },

        { id: 't13l3s1-2', type: 'choose', tag: 'po-process', level: 'C1',
          stem: '<div class="orderblock"><p>A. Two years later, crabs and small fish had returned to the young forest, and local fishing families were earning a steady income again.</p><p>B. Since then, the project has become a model for other coastal communities facing the same problem.</p><p>C. When the sea began swallowing its shoreline, a small fishing village in Samut Prakan decided to plant mangroves instead of building a concrete wall.</p><p>D. In the first year, volunteers from nearby schools planted more than ten thousand seedlings in the soft mud.</p></div>',
          options: ['A-C-D-B', 'A-D-C-B', 'C-A-B-D', 'C-D-A-B'], answer: 3,
          hint: 'Put the time phrases on a timeline. Which one must come before “Two years later”?',
          why: 'C sets the starting point (the decision to plant mangroves). Then the time phrases run in order: “In the first year” (D) → “Two years later” (A) → “Since then” (B). A cannot open because “Two years later” needs an earlier event. C-A-B-D jumps to “Two years later” before any planting and leaves “In the first year” stranded at the end.' },

        { id: 't13l3s1-3', type: 'order', tag: 'po-process', level: 'C1',
          stem: 'Put the stages of recycling a plastic bottle in order.',
          items: [
            'Used bottles are collected from homes, shops and recycling bins.',
            'At the plant, they are sorted by type and colour of plastic.',
            'The sorted bottles are washed and shredded into small flakes.',
            'These flakes are melted and formed into tiny pellets.',
            'Finally, manufacturers turn the pellets into new products such as T-shirts and bags.'
          ],
          hint: 'Follow the material: bottles → sorted bottles → flakes → pellets → products.',
          why: 'Each stage starts from the product of the one before: collected bottles are sorted, “the sorted bottles” are shredded into flakes, “these flakes” become pellets, and “Finally” the pellets become new products.' },

        { id: 't13l3s1-4', type: 'choose', tag: 'po-process', level: 'C1',
          stem: T13_B_HONEY + '<p>Which sentence comes third in the correct order?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 3,
          hint: 'Find the opener, then follow the nectar: what does each sentence do to it, and in what order?',
          why: 'B opens with the nectar, A brings it “Back in the hive” and ends with enzymes changing it, and D comes third because it picks that up with the label “This watery mixture”, which is “then” dried in the honeycomb. C is the near miss: it has “Finally”, but it seals “each cell”, and the cells only appear in D, so it must come last. The order is B-A-D-C.' },

        { id: 't13l3s1-5', type: 'choose', tag: 'po-process', level: 'C1',
          stem: T13_B_HONEY,
          options: ['A-B-D-C', 'A-D-B-C', 'B-A-D-C', 'B-D-A-C'], answer: 2,
          hint: 'Decide the opener to halve the options, then follow what happens to the nectar.',
          why: 'B opens with nectar collected from flowers. A brings it “Back in the hive” and adds enzymes, D spreads “This watery mixture” in the cells, and C seals the cells “Finally”. A cannot open because “Back in the hive” needs an earlier trip away from the hive. B-D-A-C calls the nectar a “watery mixture” before the enzymes have been added.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't13l3s2', name: 'Compare–contrast & classification', cefr: 'C1', tag: 'po-compare',
      theory: {
        key: 'A comparison moves <strong>frame → side 1 → side 2 (On the other hand / whereas / by contrast) → balance</strong>; a classification moves <strong>frame (“three types”) → types in ranked order</strong>, usually from the most basic to the most important.',
        body: [
          '<strong>Compare–contrast.</strong> The opener announces two things and promises a comparison: “Online and classroom-based learning each provide distinct advantages” (TCAS69); “Studying at public and private universities presents both similarities and differences” (TCAS68). Then side 1, then side 2, marked by a contrast signal (<em>on the other hand, by contrast, whereas, unlike X</em>). The closer balances the two: “Ultimately, <em>both approaches</em> can be highly effective…”; “Choosing between <em>these options</em> ultimately depends on…”. A contrast signal can never introduce the <em>first</em> side, because there is nothing yet to contrast with.',
          '<strong>Classification.</strong> The opener announces the number of groups: “The waste produced through everyday human activity generally falls into <em>three major classifications</em>” (TCAS69). Then the groups arrive in an order that the <strong>ranking words</strong> reveal: “The most basic category…” → “A more resource-focused category…” → “The most critical and regulated category…”. Writers usually climb from the simplest or least important to the most important, so the “most critical” group comes <strong>last</strong>, not first.',
          '<strong>Read the comparatives.</strong> <em>A more…, A better choice…, A second kind…, Another type…</em> all need a first item before them. <em>The most…</em> and <em>the least…</em> mark the ends of the scale. <em>Both, these options, the two</em> need both sides already described. So in a classification item, line up the ranking words on a scale and the order appears.',
          '<strong>The whereas trap.</strong> A sentence containing both sides (“Students at public universities may also benefit from lower fees, <em>whereas</em> those at private institutions often enjoy smaller classes”) looks like a summary, but it is a <strong>detail</strong> in the middle: it gives one specific difference. The opener names the comparison in general terms, without the details.'
        ],
        simple: [
          'Comparison: first say what you compare, then side 1, then side 2 (<em>on the other hand, by contrast</em>), then a balanced ending (<em>both</em>).',
          'Classification: first say how many groups, then the groups. Words like <em>the most basic, a more serious, the most important</em> show the order.',
          '<em>A better / A second / Another</em> cannot come first in a list.'
        ],
        thai: 'ย่อหน้าเปรียบเทียบ: ประโยคเปิดบอกว่าจะเปรียบเทียบสองสิ่ง ตามด้วยด้านที่ 1 ด้านที่ 2 (on the other hand, by contrast, whereas) และปิดด้วยการชั่งน้ำหนัก (both approaches, these options) ย่อหน้าจำแนกประเภท: ประโยคเปิดบอกจำนวนกลุ่ม แล้วเรียงกลุ่มตามคำจัดอันดับ เช่น The most basic → A more… → The most critical มักไล่จากพื้นฐานไปสำคัญที่สุด กับดักคือประโยคที่มี whereas พูดถึงทั้งสองฝั่งดูเหมือนประโยคสรุป แต่จริงๆ เป็นรายละเอียดกลางย่อหน้า และคำว่า most critical ไม่ได้แปลว่าต้องมาก่อน',
        examples: [
          { s: 'Online and classroom learning <strong>each provide distinct advantages</strong>.', g: 'Opener: announces the comparison.' },
          { s: 'Group study, <strong>on the other hand</strong>, reveals gaps in understanding.', g: 'Side 2: needs side 1 before it.' },
          { s: 'Waste <strong>falls into three major classifications</strong>.', g: 'Classification opener: announces the number of groups.' },
          { s: '<strong>A better choice</strong> is to reuse glass jars.', g: 'A comparative: a weaker item must come before it.' },
          { s: 'Ultimately, <strong>both approaches</strong> can be effective.', g: 'Closer: balances the two sides.' }
        ],
        trap: 'Two traps. In classification, students put “The most critical category” first because it sounds important, but TCAS paragraphs usually build UP to it. In comparison, students open with the “whereas” sentence because it mentions both sides, but it is a detail. Dodge: the opener names the comparison or the number of groups in general words; ranking words then climb up the scale.',
        analogy: { title: 'A cooking-show final', text: 'The host first announces the two finalists (the opener). Then chef one cooks, then chef two — “on the other hand, her dish is…” — and the judges weigh both. In a classification it is the talent-show results read in reverse: third place, then second, and the winner is saved for last.' },
        map: { center: 'Compare & classify', branches: [
          { label: 'Compare opener', leaves: ['each offer advantages', 'similarities and differences'] },
          { label: 'Side 2 signals', leaves: ['on the other hand', 'by contrast, whereas', 'unlike X'] },
          { label: 'Classify', leaves: ['falls into three types', 'most basic → more → most', 'A better / A second'] },
          { label: 'Closer', leaves: ['both approaches', 'these options', 'depends on the individual'] }
        ] },
        story: { title: 'Fah Ranks the Snacks', panels: [
          { who: 'Fah', text: 'Presentation: there are three kinds of exam-night snack. The most important is the one that keeps you awake…' },
          { who: 'Pun', text: 'Wait, you started with the winner? Where’s the suspense? Where’s the drama?' },
          { who: 'Nong Bot', text: 'Analysis: humans prefer lists that climb. Most basic, more useful, most important. Also known as “saving the best for last”. Beep!' },
          { who: 'Fah', text: 'Fine. The most basic snack is crisps. A more useful one is fruit. And the most important…' },
          { who: 'Mint', text: '…is sleep, isn’t it. You’re going to say sleep.' },
          { who: 'T.Chris', text: 'Classic TCAS classification: announce three types, then climb from basic to critical.' }
        ], moral: 'Classifications usually climb: most basic → more → most important.' }
      },
      items: [
        { id: 't13l3s2-1', type: 'choose', tag: 'po-compare', level: 'C1',
          stem: T13_B_RRR,
          options: ['B-C-A-D', 'B-D-A-C', 'C-A-D-B', 'C-B-D-A'], answer: 3,
          hint: 'The opener announces a ranking. Then line up “least”, “better” and “most” on a scale.',
          why: 'C announces the ranking and opens. The ranking words then climb: “the least effective of the three” (B) → “A better choice” (D) → “The most effective strategy of all” (A). B cannot open because “of the three” needs the three to be introduced first. C-A-D-B starts at the top, so “A better choice” in D would have to be better than the most effective strategy, which is impossible.' },

        { id: 't13l3s2-2', type: 'choose', tag: 'po-compare', level: 'C1',
          stem: T13_B_RRR + '<p>When the sentences are in the correct order, the three strategies are presented ________.</p>',
          options: [
            'from newest to oldest',
            'from most to least effective',
            'from least to most effective',
            'in the order the opener lists them'
          ], answer: 2,
          hint: 'Find the three ranking words and put them in the paragraph’s order.',
          why: 'The correct order is C-B-D-A, so the strategies climb from recycling (“the least effective”) to reusing (“A better choice”) to reducing (“The most effective strategy of all”). “From most to least effective” is the reverse, the opener does not list the three Rs at all, and nothing in the paragraph is about dates.' },

        { id: 't13l3s2-3', type: 'choose', tag: 'po-compare', level: 'C1',
          stem: '<div class="orderblock"><p>A. Studying alone allows a student to set her own pace and avoid the distractions of social chat.</p><p>B. Group study, on the other hand, exposes students to different explanations and quickly reveals gaps in their understanding.</p><p>C. Ultimately, the most successful students often combine the two, reviewing alone first and then testing themselves with friends.</p><p>D. Students preparing for TCAS often debate whether it is better to revise alone or in a group.</p></div>',
          options: ['A-B-D-C', 'A-D-B-C', 'D-A-B-C', 'D-B-A-C'], answer: 2,
          hint: 'Two sentences could stand alone. Which one announces BOTH sides?',
          why: 'D frames the comparison (alone or in a group), A gives side 1, B gives side 2 “on the other hand”, and C balances them with “Ultimately… combine the two”. A is the decoy opener: it stands alone, but it describes only one side, and in A-B-D-C the framing question would appear after both answers. D-B-A-C uses “on the other hand” before side 1.' },

        { id: 't13l3s2-4', type: 'choose', tag: 'po-compare', level: 'C1',
          stem: '<div class="orderblock"><p>A. Online shoppers can compare prices in seconds, whereas in-store shoppers can touch and try a product before paying.</p><p>B. Shopping online and shopping in a store each appeal to different kinds of customers.</p><p>C. In the end, many people now combine the two, checking reviews on their phones while standing in the shop.</p><p>D. These differences explain why most large retailers now sell through both channels.</p></div><p>Which sentence should open the paragraph?</p>',
          options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 1,
          hint: 'One sentence gives a specific difference; another names the comparison in general words.',
          why: 'B names the comparison in general terms (“each appeal to different kinds of customers”) without any detail, so it opens. A is the whereas trap: it mentions both sides, but it gives specific details (prices in seconds, touching the product) that support B. D points back with “These differences”, and C concludes with “In the end”.' },

        { id: 't13l3s2-5', type: 'sort', tag: 'po-compare', level: 'C1',
          stem: 'Which paragraph pattern does each phrase usually belong to?',
          bins: [
            { key: 'cc', label: 'Compare–contrast', hint: 'two sides weighed against each other' },
            { key: 'cl', label: 'Classification', hint: 'groups in a ranked order' }
          ],
          items: [
            { text: 'On the other hand, …', bin: 'cc' },
            { text: '…, whereas private universities …', bin: 'cc' },
            { text: 'Unlike e-books, printed books …', bin: 'cc' },
            { text: 'Ultimately, both approaches …', bin: 'cc' },
            { text: '… falls into three major types.', bin: 'cl' },
            { text: 'The most basic category is …', bin: 'cl' },
            { text: 'A more serious type is …', bin: 'cl' },
            { text: 'The most critical group is …', bin: 'cl' }
          ],
          hint: 'Is the phrase weighing two sides, or placing a group on a scale?',
          why: '“On the other hand”, “whereas”, “Unlike” and “both approaches” weigh two sides, so they belong to compare–contrast. “Falls into three major types” announces a classification, and “most basic”, “more serious” and “most critical” place each group on a ranked scale.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't13l3s3', name: 'Cause–effect chains & problem–solution', cefr: 'C1', tag: 'po-argue',
      theory: {
        key: 'In a chain, <strong>each effect becomes the next cause</strong> (A → B → C); in problem–solution, the order is <strong>problem → cause → solution → result or recommendation</strong>, and a solution must come after the cause it fixes.',
        body: [
          '<strong>Cause–effect chains.</strong> Think of dominoes. TCAS69’s white coat item: the opener says the syndrome is triggered by <em>anxiety</em> → “<em>This anxiety</em> causes an increase in stress hormones, which… leads to a temporary elevation in blood pressure” → “<em>Because</em> the blood pressure reading is artificially high…, it can lead to an inaccurate diagnosis” → “<em>Consequently</em>, this phenomenon might result in unnecessary prescription…”. Each sentence starts with the effect named at the end of the one before. Result signals (<em>Consequently, As a result, This leads to, In turn</em>) sit in the middle as well as at the end.',
          '<strong>Problem–solution.</strong> The problem comes first, then usually its cause or scale, then the solution (<em>One promising solution…, To address this…, Schools should…</em>), then the result or a recommendation (<em>If such schemes are expanded…, Therefore, it’s crucial…</em>). The solution must come <strong>after the cause it targets</strong>: “make the alternative cheaper” only makes sense once you know farmers burn straw because burning is cheap. TCAS67’s cheating item followed this shape: methods of cheating → <em>Such cheating</em> undermines integrity → <em>Therefore</em>, schools should establish secure exams.',
          '<strong>Definition → example → consequence.</strong> A third argument shape: a term is defined (<em>Fast fashion is a business model…</em>), explained or illustrated (<em>For example… / This speed is achieved by…</em>), and then its consequences follow (<em>However, this approach has severe negative consequences… Ultimately…</em>). The definition always opens; the widest consequence closes.',
          '<strong>Procedure.</strong> Step 1: decide the pattern from the opener (a term to define? a problem? a trigger?). Step 2: for a chain, match each “this + effect” at the start of a sentence to the sentence that produced that effect. Step 3: for problem–solution, check that the solution answers the specific cause mentioned before it. Step 4: the result, evaluation or recommendation goes last.'
        ],
        simple: [
          'Cause and effect: one thing causes the next, like dominoes. Each sentence starts with the result of the sentence before.',
          'Problem and solution: problem → why it happens → solution → result.',
          'The solution must come after the cause it fixes.'
        ],
        thai: 'ย่อหน้าเหตุ-ผลต่อเนื่อง (cause-effect chain) เหมือนโดมิโน ผลของประโยคหนึ่งกลายเป็นเหตุของประโยคถัดไป เช่น anxiety → This anxiety causes… blood pressure → Because the blood pressure reading is high… ส่วนย่อหน้าปัญหา-ทางแก้ เรียงเป็น ปัญหา → สาเหตุ → ทางแก้ → ผลลัพธ์หรือคำแนะนำ และทางแก้ต้องมาหลังสาเหตุที่มันแก้ อีกแบบคือ นิยาม → ตัวอย่าง → ผลที่ตามมา กับดักคือคำอย่าง Consequently หรือ As a result อาจอยู่กลางโซ่ ไม่ใช่ท้ายเสมอ',
        examples: [
          { s: 'The syndrome is triggered by <strong>anxiety</strong>. <strong>This anxiety</strong> raises stress hormones.', g: 'Chain: the effect at the end becomes the cause at the start.' },
          { s: 'Farmers burn fields because it is <strong>cheapest</strong>. One solution is to make the alternative <strong>cheaper</strong>.', g: 'The solution targets the cause just before it.' },
          { s: '<strong>Consequently</strong>, this phenomenon might lead to unnecessary medication.', g: 'A result signal, here at the end of a chain.' },
          { s: 'Greenwashing <strong>is</strong> making a firm look greener than it is. <strong>For example</strong>, …', g: 'Definition → example.' },
          { s: '<strong>Over time</strong>, such claims leave shoppers cynical.', g: 'The widest, long-term consequence closes.' }
        ],
        trap: 'In a chain, two or three sentences carry result signals, and students put the first one they find at the end. Dodge: follow the dominoes. Each sentence must begin with the effect named at the END of the sentence before; the last domino is the widest, longest-term effect or the recommendation.',
        analogy: { title: 'Domino run', text: 'A domino run on TikTok only works if every tile is hit by the one before it. Pull one tile out of line and the run stops. In a cause–effect paragraph, “This anxiety”, “Because the reading is high” and “Consequently” are tiles; each must stand exactly where the previous tile falls.' },
        map: { center: 'Argument patterns', branches: [
          { label: 'Cause–effect chain', leaves: ['effect → next cause', 'This X causes…', 'In turn, Consequently'] },
          { label: 'Problem–solution', leaves: ['problem → cause', 'solution → result', 'solution fits the cause'] },
          { label: 'Definition pattern', leaves: ['definition opens', 'For example / This is achieved by', 'widest consequence closes'] },
          { label: 'Careful', leaves: ['result words in the middle', 'follow the dominoes'] }
        ] },
        moves: [
          { move: 'Line up your fingers like dominoes', says: 'Each effect becomes the next cause' },
          { move: 'Tip the first finger into the next', says: '“This anxiety…” starts where the last sentence ended' },
          { move: 'Hold up a hand like a stop sign, then open it', says: 'Problem first, then the solution that fits its cause' },
          { move: 'Sweep both arms wide', says: 'The widest result or the recommendation goes last' }
        ]
      },
      items: [
        { id: 't13l3s3-1', type: 'choose', tag: 'po-argue', level: 'C1',
          stem: '<div class="orderblock"><p>A. This lost sleep, in turn, leaves them tired and less productive the next day, so they finish work even later.</p><p>B. “Revenge bedtime procrastination” describes the habit of staying up late to enjoy free time that a busy day did not allow.</p><p>C. As a result, the cycle repeats itself night after night unless the lack of free time is addressed.</p><p>D. People who do it are not unaware of the cost; they simply trade sleep for a few hours that feel truly their own.</p></div>',
          options: ['B-A-C-D', 'B-C-A-D', 'B-D-A-C', 'B-D-C-A'], answer: 2,
          hint: 'The opener is fixed. Which sentence produces the “lost sleep” that A picks up? Which one needs a cycle already?',
          why: 'B defines the habit, D explains that people “trade sleep”, A picks up “This lost sleep, in turn” and ends with finishing work later, and C closes with “the cycle repeats”. B-A-C-D mentions “This lost sleep” before any sleep is traded, B-C-A-D gives “the cycle” before it exists, and B-D-C-A describes the cycle before the link that creates it.' },

        { id: 't13l3s3-2', type: 'choose', tag: 'po-argue', level: 'C1',
          stem: '<div class="orderblock"><p>A. One promising solution, therefore, is to make the alternative cheaper by paying farmers to turn leftover rice straw into animal feed or fuel pellets.</p><p>B. Every dry season, the burning of crop waste in northern Thailand adds heavily to the region’s dangerous PM2.5 levels.</p><p>C. If such schemes are expanded, they could clean the air and create a new source of rural income at the same time.</p><p>D. Many farmers burn their fields simply because it is the cheapest and fastest way to clear them before the next planting.</p></div>',
          options: ['B-A-D-C', 'B-D-A-C', 'D-B-C-A', 'D-C-A-B'], answer: 1,
          hint: 'A solution must come after the cause it targets. What is A making “cheaper” than?',
          why: 'B states the problem, D gives its cause (burning is cheapest), A offers a solution aimed at that cause (“make the alternative cheaper”), and C evaluates it (“If such schemes are expanded…”). B-A-D-C gives the solution before the cause, so “cheaper” and “therefore” have nothing to refer to. Both options starting with D put C’s “such schemes” before any scheme is described.' },

        { id: 't13l3s3-3', type: 'choose', tag: 'po-argue', level: 'C1',
          stem: T13_B_GREEN + '<p>Which pattern best describes the paragraph when it is correctly ordered?</p>',
          options: [
            'cause → effect → cause → effect',
            'problem → solution → evaluation',
            'definition → example → consequence',
            'comparison → contrast → conclusion'
          ], answer: 2,
          hint: 'What does the opener do with the word “Greenwashing”? What does “For example” do next?',
          why: 'B defines greenwashing, A gives an example (“For example, a clothing brand…”), and D and C give the consequences, first at the moment of purchase and then “Over time”. No solution is offered, so problem → solution is wrong, and there are not two things being compared.' },

        { id: 't13l3s3-4', type: 'choose', tag: 'po-argue', level: 'C1',
          stem: T13_B_GREEN,
          options: ['A-C-B-D', 'A-D-B-C', 'B-A-C-D', 'B-A-D-C'], answer: 3,
          hint: 'After the opener, the survivors differ at the end. Which consequence is immediate and which is long-term?',
          why: 'B defines the term, A illustrates it (“For example”), D gives the immediate consequence (“At the moment of purchase”), and C gives the long-term one (“Over time, such misleading claims…”). A cannot open because “For example” needs a claim before it. B-A-C-D moves from “Over time” back to “the moment of purchase”, which runs time backwards.' },

        { id: 't13l3s3-5', type: 'sort', tag: 'po-argue', level: 'C1',
          stem: 'A paragraph on school canteen waste: which job does each sentence do?',
          bins: [
            { key: 'prob', label: 'Problem', hint: 'what is wrong' },
            { key: 'cause', label: 'Cause', hint: 'why it happens' },
            { key: 'sol', label: 'Solution', hint: 'what was done or could be done' },
            { key: 'res', label: 'Result', hint: 'what happened after the solution' }
          ],
          items: [
            { text: 'School canteens throw away a surprising amount of food every day.', bin: 'prob' },
            { text: 'Portions are fixed, so students cannot ask for less rice.', bin: 'cause' },
            { text: 'Many students also skip vegetables they have never tasted before.', bin: 'cause' },
            { text: 'One school let students choose their own portion size.', bin: 'sol' },
            { text: 'Another introduced free tasting spoons for new dishes.', bin: 'sol' },
            { text: 'Within a term, food waste fell by nearly half.', bin: 'res' },
            { text: 'The canteen also spent less on ingredients.', bin: 'res' }
          ],
          hint: 'Ask of each sentence: is it what is wrong, why, what was done, or what changed afterwards?',
          why: 'The problem is the wasted food; the causes explain why (fixed portions, unfamiliar vegetables); the solutions answer those exact causes (choose your portion, tasting spoons); and the results come after the solutions (less waste, lower costs). In an ordering item the same four jobs normally appear in this order.' }
      ]
    }
  ],
  check: { id: 't13l3ck', name: 'Systems Check · Patterns', items: [
    { id: 't13l3ck-1', type: 'choose', tag: 'po-process', level: 'C1+',
      stem: '<div class="orderblock"><p>A. Once the sheets arrive at the marking centre, they are scanned by machines that read the shaded circles.</p><p>B. After each exam session, the answer sheets are sealed in envelopes and sent to the marking centre.</p><p>C. Large national exams are marked through a carefully controlled process designed to keep every result secure.</p><p>D. Finally, the scores are checked for errors before being published online, usually several weeks later.</p></div>',
      options: ['C-B-A-D', 'C-B-D-A', 'C-D-A-B', 'C-D-B-A'], answer: 0,
      hint: 'The opener is the same in every option. Which step does “Once the sheets arrive” need before it?',
      why: 'C names the process. B sends the sheets to the marking centre, A begins “Once the sheets arrive at the marking centre”, and D is the last step (“Finally”). C-B-D-A publishes the scores before the sheets are scanned, and the options with D second put “Finally” at the start of the process.' },
    { id: 't13l3ck-2', type: 'choose', tag: 'po-compare', level: 'C1+',
      stem: '<div class="orderblock"><p>A. The most overlooked kind, however, is mental rest: short breaks from all information, such as a walk without headphones.</p><p>B. Some wellbeing experts divide rest into several types, and most students get only one of them.</p><p>C. The most familiar is physical rest, which the body gets mainly through sleep.</p><p>D. A second kind is social rest: time away from group chats and crowds, which many teenagers rarely get.</p></div>',
      options: ['B-C-D-A', 'B-D-A-C', 'C-B-A-D', 'C-D-B-A'], answer: 0,
      hint: 'Which sentence announces the groups? Then look for words that number or rank them.',
      why: 'B announces the classification (“several types”) and opens. C gives the first and most familiar type, D “A second kind”, and A the most overlooked kind, contrasting with “most familiar” through “however”. C cannot open because “The most familiar” needs the types to be introduced. B-D-A-C puts “A second kind” before the first.' },
    { id: 't13l3ck-3', type: 'choose', tag: 'po-argue', level: 'C1+',
      stem: '<div class="orderblock"><p>A. This extra warmth forces people to run air conditioners for longer, which pumps even more heat into the streets.</p><p>B. As a result, city neighbourhoods can stay several degrees warmer than the countryside long into the night.</p><p>C. These dark surfaces absorb sunlight during the day and release the stored heat slowly after sunset.</p><p>D. In a big city like Bangkok, much of the ground is covered with concrete, asphalt and dark roofs instead of trees and soil.</p></div>',
      options: ['B-A-D-C', 'B-D-C-A', 'D-B-C-A', 'D-C-B-A'], answer: 3,
      hint: 'Find the only sentence with no pointer or result word. Then follow the dominoes.',
      why: 'D describes the city surfaces and opens. C picks them up (“These dark surfaces”) and ends with heat released after sunset; B gives the result (warmer nights); A picks that up (“This extra warmth”) and adds a further effect. B cannot open because “As a result” needs a cause. D-B-C-A gives the result before the surfaces have absorbed any heat.' },
    { id: 't13l3ck-4', type: 'choose', tag: 'po-argue', level: 'C1+',
      stem: '<div class="orderblock"><p>A. By the end of the day, the bins held barely a third of the usual number of bottles, and the school had saved money on drinks as well.</p><p>B. Most of them come from the free drinks handed out at every stall, since few students bring a bottle of their own.</p><p>C. Instead of handing out bottles, one school installed water-refill stations and gave every visitor a reusable cup at the gate.</p><p>D. School sports days leave behind thousands of empty plastic bottles.</p></div>',
      options: ['A-B-C-D', 'A-C-D-B', 'D-B-A-C', 'D-B-C-A'], answer: 3,
      hint: 'Problem, cause, solution, result: which option keeps the result after the solution?',
      why: 'D states the problem, B gives its cause (“Most of them come from the free drinks handed out”), C offers a solution aimed at that cause (“Instead of handing out bottles…”), and A reports the result (“By the end of the day… barely a third”). A cannot open because “the usual number” and “the school” need a situation already described. D-B-A-C reports the result before the solution that produced it.' },
    { id: 't13l3ck-5', type: 'choose', tag: 'po-compare', level: 'C1+',
      stem: '<div class="orderblock"><p>A. In contrast to this Thai habit, many Western speakers see a direct “no” as honest rather than rude.</p><p>B. Cultures differ greatly in how they refuse an invitation politely.</p><p>C. Both styles aim at the same goal, protecting the relationship, but they reach it by opposite routes.</p><p>D. In Thailand, people often avoid saying “no” directly and prefer a softer phrase such as “I’ll see”, which keeps everyone’s feelings safe.</p></div>',
      options: ['B-A-D-C', 'B-D-A-C', 'D-A-B-C', 'D-B-C-A'], answer: 1,
      hint: 'Two sentences could stand alone. Which one frames the whole comparison? Then find what “this Thai habit” needs.',
      why: 'B frames the comparison, D gives the Thai side, A the Western side (“In contrast to this Thai habit”), and C balances “Both styles”. D is the decoy opener: it stands alone but gives only one side, and in D-A-B-C the framing sentence ends up in the middle. B-A-D-C uses “this Thai habit” before it has been described.' },
    { id: 't13l3ck-6', type: 'choose', tag: 'po-process', level: 'C1+',
      stem: '<div class="orderblock"><p>A. When schools closed in 2020, lessons moved online almost overnight, and many students struggled with weak internet connections.</p><p>B. Since then, most schools have returned to classrooms, but many have kept useful online tools such as digital homework platforms.</p><p>C. Before the pandemic, online learning in Thai schools was mostly limited to optional extra courses.</p><p>D. Over the following year, teachers gradually learned to use video calls, shared documents and online quizzes more effectively.</p></div><p>Which sentence comes third in the correct order?</p>',
      options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'], answer: 3,
      hint: 'Put the time phrases on a timeline: before, when, over the following year, since then.',
      why: 'The time phrases give a timeline: “Before the pandemic” (C) → “When schools closed in 2020” (A) → “Over the following year” (D) → “Since then” (B), so D is third. B is the near miss: “Since then” could seem to follow 2020 directly, but “the following year” must come straight after the year it follows, and B describes a return to classrooms that only makes sense after the online year in D. The order is C-A-D-B.' }
  ] }
});

TOPICS.push(T13);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'po-open': {
    name: 'Finding the opener',
    principle: 'The opener makes sense with nothing before it. Cross out every sentence with a pointer (this, these, such, it, they) or a connector (However, For example, therefore), even one hidden mid-sentence.',
    reteach: 'Project four TCAS-style sentences and have students circle every pointer and connector, reading each sentence to the end. Cross out the circled sentences together; the survivor is the opener. Then show a decoy: a sentence that contains the topic word but hides “for instance” or starts with “While these…”. Ask “Could this be the first line of a news article?” for each one. Finish with the TCAS69 ideation pattern: one general claim, three sentences that lean back on it.',
    activities: [
      'Episode 1: give groups ten sentences; they hold up a green card (could open) or red card (needs an earlier sentence) and must name the word that decides it.',
      'Opener rewrite: students take a sentence starting with “This ability…” and rewrite it so it could open a paragraph.'
    ]
  },
  'po-close': {
    name: 'Finding the closer',
    principle: 'The closer looks back at the whole paragraph: it concludes (Ultimately, Thus, In the long run), recommends (should, it is crucial to) or balances (both approaches). As a result or Consequently can sit in the middle.',
    reteach: 'Sort ten sentences into “closer” and “middle” on the board. Emphasise the three jobs of a closer (conclude, recommend, balance) and the whole-paragraph pointers (both, these options, this combination). Then show a cause-and-effect set where “As a result” appears in the middle and the real closer is a recommendation with no signal word. Train students to check the last letter of each option as a quick confirmation.',
    activities: [
      'Final whistle: read four sentences aloud; students blow an imaginary whistle only on the closer and explain the word that proves it.',
      'Closer writing: pairs get three middle sentences and write two different closers, one that concludes and one that recommends.'
    ]
  },
  'po-options': {
    name: 'Using the four options',
    principle: 'Decide the opener to cross out half the options, compare the two survivors, and test only the first place where they differ. If all four share an opener, split at place two or use a locked pair.',
    reteach: 'Show only the four options first, with the sentences hidden, and ask: “Which decision would remove the most options?” Reveal the sentences, decide the opener, and cross out two options. Write the survivors one above the other and circle where they first differ; test only that link. Repeat with a TCAS68-style item where all four options share the opener, and show how a locked pair (“these benefits” right after the benefits) removes options instead.',
    activities: [
      'Two-question race: teams may ask only two yes/no questions about the sentences (e.g. “Can B open?”) before choosing an option.',
      'Locked pairs: students scan sets for pointer pairs and cross out every option that separates a pair, without reading the rest.'
    ]
  },
  'po-ref': {
    name: 'Reference chains',
    principle: 'Every pointer (this ability, these benefits, such a system, the former) must point back to something already said, usually in the sentence just before. Match the idea, not the spelling.',
    reteach: 'Underline every pointer in a TCAS paragraph and draw an arrow back to its partner. Highlight summary nouns that change the word (ideation → this ability; least complex → this simplicity; rationing → such a system). Check number: “these benefits” needs two benefits, “the former/the latter” needs exactly two things in order. Each arrow gives a fixed pair; show how two fixed pairs usually decide the item.',
    activities: [
      'Label maker: give a sentence (“Students who cook eat more vegetables.”) and ask students to write three possible summary nouns for it (this habit, this benefit, such lessons).',
      'Arrow hunt: in pairs, students draw arrows from pointers to partners on a printed set, then build the order from the arrows alone.'
    ]
  },
  'po-signal': {
    name: 'Signal words',
    principle: 'Every signal makes a demand on the sentence before it: However needs an opposite, For example a general claim, Additionally a first point, Consequently a cause, Lastly earlier steps. Look for hidden signals mid-sentence.',
    reteach: 'Teach signals in five families (addition, contrast, example, result, sequence) and, for each, the question “what must the previous sentence be?”. Model hidden signals from TCAS (should additionally consider; also exert influence; has therefore been suggested; In addition to its visual appeal). Then give a four-sentence set and have students write the demand of each signal in the margin before ordering.',
    activities: [
      'Signal demands: one student reads a signal word; the partner must say a sentence that could come right before it.',
      'Hide and seek: students rewrite sentences to move the signal into the middle (Therefore, schools… → Schools therefore…) and swap with another pair to find it.'
    ]
  },
  'po-given': {
    name: 'Given → new flow',
    principle: 'Each sentence starts with known information and ends with new information; the next sentence picks up that new ending. When there are few connectors, match the END of one sentence to the START of another.',
    reteach: 'Use the TCAS68 chocolate paragraph: highlight the last words of each sentence in one colour and the first words of the next in another (fermented → Following fermentation; nibs → these nibs). Point out that the echo can change form or become a summary noun. Then give a set with no connectors and have students chain it using only endings and beginnings. Contrast a sentence that puts “this water” at the end and show how rewriting it restores the flow.',
    activities: [
      'Relay story: each student must start a sentence with the last idea of the previous speaker.',
      'Couplings: cut sentences into “start” and “end” halves; groups rebuild the paragraph by matching each end to the next start.'
    ]
  },
  'po-process': {
    name: 'Process & chronology',
    principle: 'Each step starts from the result of the step before. After X, Following X, Once X and Since that time name the step or time that must come just before; Ultimately or Finally marks the last step.',
    reteach: 'Draw the TCAS68 chocolate process as a chain of products (beans → fermented beans → nibs → chocolate liquor) and link each sentence to its product. Show that the opener often contains step 1, so the next sentence is step 2. For chronology, build a timeline (In 1872 → Since that time; When schools closed in 2020 → Over the following year → Since then). Practise the all-same-opener format by testing place two only.',
    activities: [
      'Human process line: students hold step cards (silk, honey, recycling) and must justify their place by naming the product they receive from the student before.',
      'Timeline pins: students pin time phrases (Before, In the first year, Two years later, Since then, Today) on a board line, then order a paragraph from the pins.'
    ]
  },
  'po-compare': {
    name: 'Compare–contrast & classification',
    principle: 'Comparison: frame → side 1 → side 2 (on the other hand, by contrast) → balance (both). Classification: frame (three types) → groups in ranked order, usually most basic → most important.',
    reteach: 'Put two skeletons on the board: compare (frame, side 1, side 2 with a contrast signal, balance) and classify (frame with a number, ranked groups). Take TCAS69’s waste item and line up its ranking words on a scale from “most basic” to “most critical”. Show the “whereas” trap from TCAS68: a sentence mentioning both sides is a detail, not the opener. Stress that contrast and comparative words (on the other hand, A better…, A second…) can never introduce the first item.',
    activities: [
      'Ranking ladder: give groups five ranking phrases (the least, a more, a second, the most basic, the most critical) and have them place each on a ladder, then order a classification set.',
      'Frame or detail: students decide whether each of eight sentences frames a comparison or gives a specific difference.'
    ]
  },
  'po-argue': {
    name: 'Cause–effect chains & problem–solution',
    principle: 'In a chain, each effect becomes the next cause, so each sentence starts where the last one ended. In problem–solution: problem → cause → solution → result or recommendation, and the solution must fit the cause before it.',
    reteach: 'Model TCAS69’s white coat item as a row of dominoes: anxiety → stress hormones → high blood pressure reading → wrong diagnosis → unnecessary medication. Show that result signals appear in the middle as well as at the end. Then build a problem–solution skeleton and ask why the solution (“make the alternative cheaper”) must follow its cause (“burning is cheapest”). Finish with definition → example → consequence using a fast-fashion or greenwashing paragraph.',
    activities: [
      'Domino chain: groups write a five-link cause–effect chain on a topic (heatwaves, phones at night), cut it up and swap for another group to rebuild.',
      'Fix the fit: give three problems with their causes and six solutions; students match each solution to the cause it answers.'
    ]
  }
});
