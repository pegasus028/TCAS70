/* ===========================================================================
   TCAS70 — SYSTEM 12 — Linkers, Determiners & Parallelism
   The small words that wire a passage together. Level 1: linkers (the double
   check — meaning + grammar). Level 2: determiners (count, then point).
   Level 3: balance (parallel forms, correlative pairs, FANBOYS).
   =========================================================================== */

var T12 = {
  id: 't12', n: 12, code: 'System 12', art: 'chip',
  name: 'Linkers, Determiners & Parallelism',
  cefr: 'B2–C1',
  blurb: 'The small words that wire a passage together: linkers that must fit both the meaning and the grammar, determiners that count and point, and the balance rule that keeps lists and pairs in the same shape.',
  levels: []
};

/* ---------------------------------------------------------------- shared passages */
var T12_P11 = 'Some Thai schools now collect students’ phones at the gate each morning. ___(1)___ the rule is unpopular with some students, teachers report calmer classrooms and fewer missing assignments. Reactions differ: some students say they feel anxious without their devices, ___(2)___ others admit that they now talk to their friends more at lunch.';

var T12_P12 = 'In late September 2026, parts of Bangkok received more than 300 mm of rain in just 48 hours. ___(1)___ the downpour and the water released upstream along the Chao Phraya, floodwater blocked traffic at 37 locations. Warnings were sent to phones by cell broadcast ___(2)___ residents could move their cars to higher ground. The city said draining would take two to three days after the rain stopped; ___(3)___, many families could not start cleaning their homes until the water had gone.';

var T12_P13 = 'Fast-fashion brands release new styles almost every week. The clothes are cheap and fun to buy, but they create huge amounts of textile waste ___(1)___ serious water pollution. ___(2)___, the low prices hide the real cost paid by the workers who make the clothes. Some young shoppers are now turning to second-hand options ___(3)___ online swap groups and weekend flea markets.';

var T12_PL1 = 'Sleep scientists have long warned that teenagers need eight to ten hours of sleep a night. ___(1)___ this advice, a survey of 1,200 Bangkok students found that most slept fewer than seven hours on school nights, largely ___(2)___ late-night scrolling. ___(3)___ the researchers, bright screens and endless feeds keep the brain alert long after the lights go out. Short sleep does more than cause yawning in first period. It weakens memory and mood, ___(4)___ raising the risk of weight gain. Some schools have responded by starting classes thirty minutes later ___(5)___ students can get the extra sleep their bodies need. Early results look promising. ___(6)___, a few parents worry that a later start will simply lead to later bedtimes.';

/* ============================================================== LEVEL 1 */
T12.levels.push({
  id: 't12l1', n: 1, name: 'Linkers: the double check', cefr: 'B2',
  blurb: 'Every linker must fit twice: the logical relation between the two ideas, and the grammar that follows the blank — a clause, a noun/-ing, or a new sentence.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't12l1s1', name: 'Contrast & concession', cefr: 'B2', tag: 'lk-contrast',
      theory: {
        key: 'A linker must pass a <strong>double check</strong>: the right <strong>meaning</strong> (surprise or opposite?) and the right <strong>grammar</strong> after it (a clause, a noun/-ing, or a new sentence).',
        body: [
          'Think of a linker as a joint between two ideas. Every joint has two properties. The first is <strong>meaning</strong>: is the second idea a <em>surprise</em> after the first (concession — <em>although, even though, despite</em>), or simply the <em>other side</em> of a comparison (contrast — <em>while, whereas, unlike, on the other hand</em>)? The second is <strong>grammar</strong>: what kind of thing does the linker plug into? There are only three sockets. <em>Although, even though, though, while, whereas</em> take a full <u>clause</u> (subject + verb). <em>Despite, in spite of, unlike</em> are prepositions, so they take a <u>noun phrase or an -ing form</u>. <em>However, nevertheless, on the other hand, in contrast</em> are sentence linkers: they start a <u>new sentence</u> or follow a semicolon, and they carry a comma.',
          'TCAS builds its four options so that each one fails a different check. In a blank like <em>“___ these problems, the app has been praised for its design”</em>, all four options may take a noun, so grammar cannot decide — meaning must. The praise is a surprise after problems, so you need concession (<em>Despite</em>), not cause (<em>Owing to</em>), not time (<em>Since</em>) and not addition (<em>In addition to</em>). In a blank like <em>“Some students loved the trip, ___ others found it exhausting”</em>, the options may all belong to the contrast family (<em>while / unlike / however / although</em>), so grammar and precision decide: a clause follows a comma, which rules out <em>unlike</em> (needs a noun) and <em>however</em> (needs a semicolon or full stop), and two groups set side by side is exactly the job of <em>while/whereas</em>.',
          '<strong>The procedure.</strong> Step 1 — cover the options and name the relation in one word: <em>surprise? opposite? cause? extra?</em> Step 2 — look to the right of the blank: a clause, a noun/-ing, or a comma and a new sentence? Step 3 — keep the only option that passes both checks. Two special cases are worth memorising. <em>Unlike</em> compares two things of the same kind (<em>Unlike paper maps, GPS apps update themselves</em>). <em>Contrary to</em> goes with ideas people hold: <em>contrary to popular belief / expectations / the rumours</em>.'
        ],
        simple: [
          'Linkers join two ideas. Check two things. <strong>Meaning:</strong> is the second idea a surprise, or the opposite side? <strong>Grammar:</strong> what comes after the blank?',
          '<em>Although / while / whereas</em> + subject + verb. <em>Despite / unlike</em> + a noun or -ing. <em>However</em> starts a new sentence and has a comma after it.'
        ],
        thai: 'คำเชื่อมทุกตัวต้องผ่าน “การตรวจสองชั้น” (1) ความหมาย — ประโยคหลังขัดแย้งแบบคาดไม่ถึง (concession เช่น although, despite) หรือเป็นอีกฝั่งของการเปรียบเทียบ (contrast เช่น while, whereas, unlike) (2) ไวยากรณ์ — หลังช่องว่างเป็นอนุประโยคที่มีประธาน+กริยา (although, while, whereas) เป็นคำนาม/-ing (despite, in spite of, unlike) หรือขึ้นประโยคใหม่หลังจุดหรือ semicolon (However, On the other hand ตามด้วย comma) กับดักที่เจอบ่อยที่สุดคือ despite + ประธาน + กริยา ซึ่งผิด ต้องใช้ although แทน และไม่มีคำว่า despite of',
        examples: [
          { s: '<strong>Although</strong> the rule is unpopular, classrooms are calmer.', g: 'although + clause (subject + verb); concession — a surprise.' },
          { s: '<strong>Despite</strong> the rule’s unpopularity, classrooms are calmer.', g: 'same meaning, but despite needs a noun phrase.' },
          { s: 'Some students thrived, <strong>while</strong> others struggled.', g: 'while + clause; two sides of one comparison.' },
          { s: 'The rule is unpopular<strong>; however,</strong> classrooms are calmer.', g: 'however starts a new sentence: semicolon before, comma after.' },
          { s: '<strong>Unlike</strong> paper maps, GPS apps update themselves.', g: 'unlike + noun; compares two things of the same kind.' }
        ],
        trap: 'TCAS puts a clause after the blank and offers <em>Despite</em> next to <em>Although</em>; students who check only the meaning pick the one that “sounds more formal”. Dodge: before you read the options, underline the first verb after the blank. A verb with its own subject → <em>although / while / whereas</em>; no verb, just a noun → <em>despite / unlike</em>. And <em>despite of</em> does not exist (<em>in spite of</em> does).',
        analogy: { title: 'Plugs and sockets', text: 'A travel adaptor has to match two things: the voltage and the shape of the socket. Meaning is the voltage — plug a “cause” linker into a “surprise” sentence and the lamp blows. Grammar is the plug shape — <em>despite</em> has a noun-shaped plug, and it simply will not go into a clause-shaped socket, however hard you push.' },
        map: { center: 'Contrast & concession', branches: [
          { label: '+ clause', leaves: ['although / even though', 'while / whereas', 'though'] },
          { label: '+ noun / -ing', leaves: ['despite / in spite of', 'unlike (same kind)', 'contrary to (beliefs)'] },
          { label: 'New sentence', leaves: ['However,', 'Nevertheless,', 'On the other hand,', 'In contrast,'] },
          { label: 'Double check', leaves: ['1 meaning: surprise or opposite?', '2 grammar: what follows?'] }
        ] },
        story: { title: 'Despite the Robot', panels: [
          { who: 'Pun', text: 'Essay done! “Despite it rained, our team won the match.” Nong Bot, check it for me.' },
          { who: 'Nong Bot', text: 'Plugging DESPITE into “it rained”… socket mismatch! Sparks detected. DESPITE accepts nouns only. Beep.' },
          { who: 'Pun', text: 'Fine. “Although the rain, our team won.” Better?' },
          { who: 'Nong Bot', text: 'Plugging ALTHOUGH into “the rain”… no verb found. More sparks. My eyebrows are smoking.' },
          { who: 'Fah', text: 'Swap the plugs, Pun. “Despite the rain” or “Although it rained”. Same meaning, different sockets.' },
          { who: 'T.Chris', text: 'And that, class, is why we check the grammar after the blank — for the sake of Nong Bot’s eyebrows.' }
        ], moral: 'Same meaning, different sockets: despite + noun, although + clause.' }
      },
      items: [
        { id: 't12l1s1-1', type: 'cloze', passage: T12_P11, blank: '(1)', tag: 'lk-contrast', level: 'B2',
          stem: 'Choose the best option for blank (1).',
          options: ['Unlike', 'Despite', 'However', 'Although'],
          answer: 3,
          hint: 'Find the verb after the blank. Does it have its own subject?',
          why: 'After the blank comes a full clause: <em>the rule <u>is</u> unpopular</em>, and the idea that follows is a surprise (calmer classrooms). Only <em>Although</em> takes a clause and signals concession. <em>Despite</em> has the right meaning but needs a noun (<em>Despite the rule’s unpopularity</em>); <em>However</em> must start its own sentence; <em>Unlike</em> compares two nouns of the same kind.' },

        { id: 't12l1s1-2', type: 'cloze', passage: T12_P11, blank: '(2)', tag: 'lk-contrast', level: 'B2',
          stem: 'Choose the best option for blank (2).',
          options: ['unlike', 'despite', 'whereas', 'therefore'],
          answer: 2,
          hint: 'Two groups of students are placed side by side. What joins two clauses like that?',
          why: 'The sentence sets two groups side by side — <em>some students</em> feel anxious, <em>others</em> talk more — and a full clause follows the comma. <em>Whereas</em> joins two contrasting clauses. <em>Unlike</em> and <em>despite</em> are prepositions and need a noun, not <em>others admit</em>; <em>therefore</em> signals a result, and the second group’s habit is not caused by the first group’s anxiety.' },

        { id: 't12l1s1-3', type: 'choose', tag: 'lk-contrast', level: 'B2',
          stem: '______ popular belief, drinking coffee late at night does not help most students remember more; it simply keeps them awake.',
          options: ['Unlike', 'Owing to', 'Instead of', 'Contrary to'],
          answer: 3,
          hint: 'The sentence corrects something many people believe. Does the blank compare two things, give a cause, or do another job?',
          why: 'The sentence says a common belief is wrong, and the fixed partner for ideas people hold is <em>contrary to</em>: <em>contrary to popular belief / expectations</em>. <em>Unlike</em> is the near miss, but it compares two things of the same kind (<em>Unlike tea, coffee…</em>), not a fact with a belief. <em>Owing to</em> gives a cause, and <em>Instead of</em> means “in place of”.' },

        { id: 't12l1s1-4', type: 'sort', tag: 'lk-contrast', level: 'B2',
          stem: 'Sort each contrast linker by the grammar that must follow it.',
          bins: [
            { key: 'cl', label: '+ clause', hint: 'subject + verb follows' },
            { key: 'np', label: '+ noun / -ing', hint: 'a preposition' },
            { key: 'ns', label: 'New sentence', hint: 'after . or ; with a comma' }
          ],
          items: [
            { text: 'although', bin: 'cl' },
            { text: 'whereas', bin: 'cl' },
            { text: 'even though', bin: 'cl' },
            { text: 'despite', bin: 'np' },
            { text: 'in spite of', bin: 'np' },
            { text: 'unlike', bin: 'np' },
            { text: 'However,', bin: 'ns' },
            { text: 'Nevertheless,', bin: 'ns' },
            { text: 'On the other hand,', bin: 'ns' }
          ],
          hint: 'Ask what each word can be followed by: a subject and verb, a noun, or a comma.',
          why: 'Conjunctions (<em>although, whereas, even though</em>) introduce a clause. Prepositions (<em>despite, in spite of, unlike</em>) introduce a noun or -ing form. Sentence linkers (<em>However, Nevertheless, On the other hand</em>) cannot join two clauses with only a comma; they start a new sentence or follow a semicolon.' },

        { id: 't12l1s1-5', type: 'spot', tag: 'lk-contrast', level: 'B2',
          stem: 'One part is wrong. Find it.',
          words: ['Despite the new canteen', 'offers healthier meals,', 'many students still buy', 'fried snacks outside the gate.'],
          answer: 0,
          fix: 'Although the new canteen',
          hint: 'Look at what follows the first linker: a noun, or a subject with a verb?',
          why: 'The canteen <em>offers</em> — that is a full clause with a subject and a verb, so it needs <em>Although</em>. <em>Despite</em> takes a noun only: <em>Despite the new canteen’s healthier meals, many students…</em>' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't12l1s2', name: 'Cause, result & purpose', cefr: 'B2', tag: 'lk-cause',
      theory: {
        key: 'Ask which way the arrow points: <em>because / owing to</em> introduce the <strong>cause</strong>, <em>so / therefore</em> introduce the <strong>result</strong>, <em>so that / in order to</em> introduce the <strong>purpose</strong> — then check the grammar socket.',
        body: [
          'Cause and result are the same fact seen from two ends: <em>heavy rain → floods</em>. If the linker sits in front of the rain, it must mean <u>cause</u>: <em>because, since, as</em> (+ clause) or <em>because of, owing to, due to, as a result of, thanks to</em> (+ noun). If it sits in front of the floods, it must mean <u>result</u>: <em>so</em> (after a comma, joining two clauses) or <em>therefore, thus, consequently, as a result</em> (new sentence or after a semicolon, with a comma). <em>Thanks to</em> is a cause with a good result: <em>Thanks to the early warning, nobody was hurt.</em>',
          '<u>Purpose</u> is different: the second event has not happened yet — it is the aim. <em>So that</em> + clause, usually with <em>can / could / will / would</em> (<em>so that residents could move their cars</em>); <em>in order to / so as to / to</em> + base verb (<em>in order to avoid the water</em>); <em>for</em> + noun (<em>for safety</em>). If a subject follows the blank, you need <em>so that</em>; if a bare verb follows, you need <em>(in order) to</em>.',
          'How TCAS tests it: often all four options take a noun (<em>Owing to / Contrary to / According to / In addition to</em>), so the meaning decides; or the options share a meaning but not a socket (<em>because / because of</em>). One word needs extra care: <em>since</em> means “because” before a clause, but before a noun it usually means “from that time” — <em>Since the flood, the road has been closed</em> — so <em>Since + noun</em> is rarely a cause.'
        ],
        simple: [
          'Cause comes first, result comes after. <em>Because / owing to</em> = the reason. <em>So / therefore</em> = what happened because of it.',
          '<em>Because</em> + subject + verb. <em>Because of / owing to / due to</em> + noun. <em>Therefore</em> starts a new sentence. <em>So that</em> + subject + can/could = the aim.'
        ],
        thai: 'ถามก่อนว่าลูกศรชี้ทางไหน: because, owing to, due to นำ “สาเหตุ” ส่วน so, therefore, thus, as a result นำ “ผลลัพธ์” และ so that, in order to นำ “จุดประสงค์” จากนั้นตรวจไวยากรณ์: because / since / as + อนุประโยค, because of / owing to / due to + คำนาม, therefore ขึ้นประโยคใหม่หรือตามหลัง semicolon, so that + ประธาน + can/could, in order to + กริยาช่องที่ 1 กับดักคือ because of ตามด้วยประโยค การสลับทิศเหตุ–ผล และ since + คำนาม ที่มักแปลว่า “ตั้งแต่”',
        examples: [
          { s: '<strong>Owing to</strong> the heavy rain, traffic was blocked at 37 locations.', g: 'owing to + noun; introduces the cause.' },
          { s: 'Traffic was blocked<strong>; therefore,</strong> many students arrived late.', g: 'therefore introduces the result, after a semicolon.' },
          { s: 'Warnings were sent by phone <strong>so that</strong> residents could move their cars.', g: 'so that + subject + could = purpose.' },
          { s: 'She left early <strong>in order to</strong> avoid the floodwater.', g: 'in order to + base verb = purpose.' },
          { s: '<strong>Thanks to</strong> the early warning, nobody on our street was hurt.', g: 'thanks to = a cause with a good result.' }
        ],
        trap: 'The arrow trap. <em>Because</em> and <em>therefore</em> are in the same family but point in opposite directions, and TCAS will offer both. Dodge: draw “→” between the two ideas. If the blank is on the cause side, you need <em>because / owing to</em>; if it is on the result side, <em>so / therefore</em>. Then check the socket: <em>because of</em> never takes a clause.',
        analogy: { title: 'The Grab pin', text: 'A Grab ride has a pickup and a drop-off. <em>Because / owing to</em> mark the pickup — where the story starts. <em>So / therefore / as a result</em> mark the drop-off — where it ends. <em>So that / in order to</em> are the destination you typed in before the ride began: not what has happened, but what you are aiming for. Put the pin in the wrong place and the ride runs backwards.' },
        map: { center: 'Cause, result & purpose', branches: [
          { label: 'Cause', leaves: ['because / since / as + clause', 'because of / owing to + noun', 'due to / thanks to + noun'] },
          { label: 'Result', leaves: [', so + clause', 'Therefore, / Thus,', 'Consequently, / As a result,'] },
          { label: 'Purpose', leaves: ['so that + can/could', 'in order to + verb', 'for + noun'] },
          { label: 'Traps', leaves: ['because of + clause ✗', 'since + noun = time', 'arrow backwards'] }
        ] },
        chant: { title: 'Point the Arrow', beat: 'stomp-clap, stomp-clap (4/4)', lines: [
          'Cause on the left and result on the right,',
          'BECAUSE takes a clause — subject, verb, tight!',
          'Because OF a noun, owing TO the rain,',
          'Due to the traffic, I missed the train.',
          'THEREFORE, AS A RESULT — a brand-new start,',
          'A full stop before and a comma apart.',
          'SO THAT I can? That’s the aim, the goal —',
          'IN ORDER TO plus a verb: you’re in control!'
        ] }
      },
      items: [
        { id: 't12l1s2-1', type: 'cloze', passage: T12_P12, blank: '(1)', tag: 'lk-cause', level: 'B2',
          stem: 'Choose the best option for blank (1).',
          options: ['Since', 'Because', 'Owing to', 'Therefore'],
          answer: 2,
          hint: 'Is the rain the cause or the result here? Then check: noun or clause after the blank?',
          why: 'The rain and the water released upstream are the <em>cause</em> of the blocked traffic, and a noun phrase follows (<em>the downpour and the water…</em>), so you need <em>Owing to</em>. <em>Because</em> is the near miss: it has the right meaning but needs <em>of</em> before a noun. <em>Since</em> + noun means “from that time”, and <em>Therefore</em> introduces a result, not a cause.' },

        { id: 't12l1s2-2', type: 'cloze', passage: T12_P12, blank: '(2)', tag: 'lk-cause', level: 'B2',
          stem: 'Choose the best option for blank (2).',
          options: ['so that', 'because', 'therefore', 'in order to'],
          answer: 0,
          hint: 'Was moving the cars already done, or the aim of the warnings? What follows: a subject, or a bare verb?',
          why: 'Moving the cars is the <em>aim</em> of the warnings, and a subject + <em>could</em> follows (<em>residents could move</em>), which is the pattern of <em>so that</em>. <em>In order to</em> also shows purpose but needs a bare verb (<em>in order to warn residents</em>). <em>Because</em> would make the moving the cause of the warnings, and <em>therefore</em> needs a semicolon and a comma.' },

        { id: 't12l1s2-3', type: 'cloze', passage: T12_P12, blank: '(3)', tag: 'lk-cause', level: 'B2',
          stem: 'Choose the best option for blank (3).',
          options: ['because', 'however', 'therefore', 'nevertheless'],
          answer: 2,
          hint: 'Put an arrow between the slow draining and the delay in cleaning homes. Which way does it point?',
          why: 'Slow draining → families could not start cleaning: the second idea is the <em>result</em>, and the linker sits after a semicolon with a comma, so <em>therefore</em> fits. <em>However</em> and <em>nevertheless</em> fit the punctuation but signal a contrast that is not there — the delay follows naturally from the slow draining. <em>Because</em> points the arrow backwards and cannot follow a semicolon with a comma.' },

        { id: 't12l1s2-4', type: 'build', tag: 'lk-cause', level: 'B2',
          stem: 'Join the ideas with a cause linker that takes a noun: “Sports day was cancelled.” + “the dangerous PM2.5 level”.',
          tiles: ['Sports day', 'was cancelled', 'owing to', 'the dangerous', 'PM2.5 level'],
          solution: 'Sports day was cancelled owing to the dangerous PM2.5 level',
          alt: ['Owing to the dangerous PM2.5 level sports day was cancelled'],
          hint: 'The result comes first; the cause linker goes directly in front of the noun phrase.',
          why: 'The result (<em>Sports day was cancelled</em>) comes first and the cause follows as a noun phrase, so the preposition-type linker <em>owing to</em> goes directly in front of it. <em>Because</em> would need a clause: <em>because the PM2.5 level was dangerous</em>.' },

        { id: 't12l1s2-5', type: 'spot', tag: 'lk-cause', level: 'B2',
          stem: 'One part is wrong. Find it.',
          words: ['The bridge was closed', 'because of', 'the water was', 'rising too fast.'],
          answer: 1,
          fix: 'because',
          hint: 'Check what follows the linker: just a noun, or a subject with its verb?',
          why: '<em>The water was rising</em> is a full clause, so the linker must be <em>because</em>. <em>Because of</em> is a preposition and takes a noun: <em>because of the rising water</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't12l1s3', name: 'Addition, example & source', cefr: 'B2+', tag: 'lk-add',
      theory: {
        key: 'Addition linkers stack another idea on top, example linkers zoom in, and <em>according to</em> names the source — and each still has its own socket: <em>as well as / in addition to / such as</em> + noun or -ing; <em>Moreover, / In addition, / For example,</em> + new sentence.',
        body: [
          'The addition family has four members with four different grammars. <em>And</em> joins two things of the same form. <em>Also</em> is an adverb that sits <u>inside</u> a clause, near the verb (<em>it also raises the risk</em>); it cannot join two nouns by itself — <em>waste also pollution</em> is not English. <em>As well as, in addition to, besides, along with</em> are prepositions: + noun or -ing (<em>as well as raising the risk</em>). <em>Moreover, furthermore, what is more, in addition</em> are sentence linkers: new sentence, comma. Notice the twins: <em>in addition,</em> (sentence linker) versus <em>in addition to</em> + noun (preposition).',
          'The example family zooms in on a case. <em>Such as</em> and <em>like</em> (in exams, <em>like</em> often means “such as”) come straight before the example nouns: <em>defining events like wars and crises</em>. <em>For example, / For instance,</em> usually start a new sentence or sit between commas. <em>Including</em> + noun works like <em>such as</em>.',
          'Then there is <em>according to</em> + a source (a person, a study, a report): it tells you <u>whose</u> information this is. TCAS loves to line it up with other noun-taking linkers — <em>Owing to / Contrary to / According to / In addition to</em>. Grammar cannot choose between them, so ask what the noun after the blank <em>is</em>: a <strong>source</strong> of information (<em>according to</em>), a <strong>cause</strong> (<em>owing to</em>), an <strong>idea being corrected</strong> (<em>contrary to</em>) or an <strong>extra item</strong> (<em>in addition to</em>)? In a list slot such as <em>“changes in diet and education, ___ reduced reading”</em>, a noun phrase follows in mid-sentence, so only a preposition-type linker (<em>as well as</em>) fits — not <em>also</em>, not <em>in addition</em>.'
        ],
        simple: [
          '<em>And, also, as well as, moreover</em> add more. <em>Such as, like, for example</em> give examples.',
          '<em>As well as / in addition to</em> + noun or -ing. <em>Moreover, / In addition,</em> start a new sentence. <em>According to</em> + a person or a study = “this is what they say”.'
        ],
        thai: 'คำเชื่อมบอกการเพิ่มเติมมี “ช่องเสียบ” ต่างกัน: as well as, in addition to, besides + คำนาม/-ing; Moreover, Furthermore, In addition (ไม่มี to) ขึ้นประโยคใหม่ตามด้วย comma; also เป็น adverb อยู่ในประโยค ใช้เชื่อมคำนามสองคำเองไม่ได้ ส่วนการยกตัวอย่างใช้ such as / like + คำนาม และ For example, ขึ้นประโยคใหม่ ระวัง According to = “ตามที่…กล่าว/รายงาน” บอกแหล่งข้อมูล ไม่ใช่สาเหตุ ถ้าตัวเลือกทุกข้อตามด้วยคำนามได้ ให้ดูว่าคำนามนั้นเป็นแหล่งข้อมูล สาเหตุ หรือสิ่งที่เพิ่มเข้ามา',
        examples: [
          { s: 'Fast fashion creates waste <strong>as well as</strong> water pollution.', g: 'as well as + noun, in the middle of a clause.' },
          { s: 'It weakens memory, <strong>as well as</strong> raising the risk of weight gain.', g: 'as well as + -ing.' },
          { s: 'The clothes are cheap. <strong>Moreover,</strong> they are designed to go out of style fast.', g: 'Moreover starts a new sentence, with a comma.' },
          { s: 'Try second-hand options <strong>such as</strong> swap groups and flea markets.', g: 'such as + example nouns, no comma after it.' },
          { s: '<strong>According to</strong> the school nurse, headaches doubled in March.', g: 'according to + source: whose information it is.' }
        ],
        trap: 'The “in addition” twin trap. <em>In addition</em> (no <em>to</em>) is a sentence linker with a comma; <em>in addition to</em> is a preposition that needs a noun or -ing. TCAS offers <em>also / in addition / as well as</em> for a list slot. Dodge: if the blank sits in the middle of a clause and a noun follows, only a preposition-type linker (<em>as well as, in addition to</em>) fits.',
        analogy: { title: '7-Eleven add-ons', text: 'At the counter, <em>as well as</em> is the toastie you add to the same order: same bag, same receipt (+ noun). <em>Moreover,</em> is a brand-new order: new receipt, new sentence. <em>Such as</em> is the cashier pointing at the shelf to show you examples. And <em>according to</em> is the label on the packet — it tells you whose information you are reading.' },
        map: { center: 'Addition, example & source', branches: [
          { label: 'Add + noun/-ing', leaves: ['as well as', 'in addition to', 'besides / along with'] },
          { label: 'Add: new sentence', leaves: ['Moreover,', 'Furthermore,', 'In addition,', 'What is more,'] },
          { label: 'Example', leaves: ['such as / like + noun', 'including + noun', 'For example, (new sentence)'] },
          { label: 'Source', leaves: ['according to + person/study', 'not a cause!'] }
        ] },
        moves: [
          { move: 'Stack one fist on top of the other', says: 'Addition: as well as, moreover — one more thing!' },
          { move: 'Make a magnifying glass with finger and thumb', says: 'Example: such as, for example — zoom in.' },
          { move: 'Tap your ear twice', says: 'According to — who said it? The source.' },
          { move: 'Chop the air flat, then raise one finger', says: 'Full stop, then Moreover, — new sentence, comma!' }
        ]
      },
      items: [
        { id: 't12l1s3-1', type: 'cloze', passage: T12_P13, blank: '(1)', tag: 'lk-add', level: 'B2+',
          stem: 'Choose the best option for blank (1).',
          options: ['also', 'as well as', 'in addition', 'furthermore'],
          answer: 1,
          hint: 'The blank is in the middle of a clause and a noun phrase follows. Which linker takes a noun?',
          why: 'The blank joins two noun phrases inside one clause — <em>textile waste</em> and <em>serious water pollution</em> — so it needs a preposition-type linker: <em>as well as</em>. <em>In addition</em> is the near miss: it would need <em>to</em> to take a noun. <em>Furthermore</em> starts a new sentence, and <em>also</em> is an adverb that cannot join two nouns.' },

        { id: 't12l1s3-2', type: 'cloze', passage: T12_P13, blank: '(2)', tag: 'lk-add', level: 'B2+',
          stem: 'Choose the best option for blank (2).',
          options: ['Moreover', 'As well as', 'In contrast', 'For example'],
          answer: 0,
          hint: 'Is the sentence about workers a new problem, an example of waste, or an opposite idea?',
          why: 'The writer has listed two problems (waste and pollution) and now adds a third, different one — the hidden cost to workers — in a new sentence with a comma: <em>Moreover</em>. <em>For example</em> is the near miss, but the hidden cost to workers is not an example of waste or pollution. <em>In contrast</em> would need an opposite idea, and <em>As well as</em> needs a noun or -ing, not a clause.' },

        { id: 't12l1s3-3', type: 'cloze', passage: T12_P13, blank: '(3)', tag: 'lk-add', level: 'B2+',
          stem: 'Choose the best option for blank (3).',
          options: ['such as', 'for example', 'as a result', 'in addition'],
          answer: 0,
          hint: 'Are swap groups and flea markets extra items, results, or examples of the options just mentioned? Check the punctuation too.',
          why: 'Swap groups and flea markets are <em>examples</em> of the second-hand options just mentioned, and they follow directly as nouns, so <em>such as</em> fits. <em>For example</em> is the near miss: it has the right meaning, but it needs commas or a new sentence (<em>…options, for example, online swap groups</em>) and cannot sit bare before a list of nouns. <em>In addition</em> would need <em>to</em>; <em>as a result</em> signals a consequence and needs a new clause.' },

        { id: 't12l1s3-4', type: 'choose', tag: 'lk-add', level: 'B2+',
          stem: '______ the school nurse, the number of students reporting headaches doubled during the PM2.5 season.',
          options: ['Owing to', 'Thanks to', 'According to', 'In addition to'],
          answer: 2,
          hint: 'All four take a noun. What is the nurse here: a cause, an extra item, or something else?',
          why: 'The nurse is the <em>source</em> of the information, not the cause of the headaches, so the sentence needs <em>According to</em>. <em>Owing to</em> and <em>Thanks to</em> would blame (or thank) the nurse for the headaches, and <em>In addition to</em> would add the nurse to a list that does not exist.' },

        { id: 't12l1s3-5', type: 'sort', tag: 'lk-add', level: 'B2+',
          stem: 'Sort the linkers by MEANING. (You met the grammar sockets in 1.1 — the double check needs both.)',
          bins: [
            { key: 'con', label: 'Contrast / concession', hint: 'opposite or surprise' },
            { key: 'cau', label: 'Cause / result / purpose', hint: 'why, so what, what for' },
            { key: 'add', label: 'Addition', hint: 'one more thing' },
            { key: 'exa', label: 'Example', hint: 'zoom in on a case' }
          ],
          items: [
            { text: 'despite', bin: 'con' },
            { text: 'whereas', bin: 'con' },
            { text: 'owing to', bin: 'cau' },
            { text: 'consequently', bin: 'cau' },
            { text: 'so that', bin: 'cau' },
            { text: 'as well as', bin: 'add' },
            { text: 'furthermore', bin: 'add' },
            { text: 'such as', bin: 'exa' },
            { text: 'for instance', bin: 'exa' }
          ],
          hint: 'Ask what the linker says about the second idea: opposite, reason, extra, or example.',
          why: '<em>Despite</em> and <em>whereas</em> signal contrast; <em>owing to</em> (cause), <em>consequently</em> (result) and <em>so that</em> (purpose) all belong to the cause family; <em>as well as</em> and <em>furthermore</em> add; <em>such as</em> and <em>for instance</em> introduce examples. Meaning is only half of the double check — each one also has its grammar socket.' }
      ]
    }
  ],

  check: { id: 't12l1ck', name: 'Systems Check · Linkers: the double check', items: [
    { id: 't12l1ck-1', type: 'cloze', passage: T12_PL1, blank: '(1)', tag: 'lk-contrast', level: 'B2+',
      stem: 'Choose the best option for blank (1).',
      options: ['Despite', 'However', 'Although', 'Because of'],
      answer: 0,
      hint: 'Is the survey result a surprise after the advice? And what follows the blank?',
      why: 'Students sleeping less than advised is a surprise after the advice (concession), and a noun phrase follows (<em>this advice</em>), so <em>Despite</em> fits. <em>Although</em> has the right meaning but needs a clause (<em>Although scientists advise this</em>); <em>However</em> must be followed by a comma and a full sentence; <em>Because of</em> would make the advice the cause of the short sleep.' },

    { id: 't12l1ck-2', type: 'cloze', passage: T12_PL1, blank: '(2)', tag: 'lk-cause', level: 'B2+',
      stem: 'Choose the best option for blank (2).',
      options: ['so', 'because', 'therefore', 'because of'],
      answer: 3,
      hint: 'Scrolling is the reason. Is it written as a clause or as a noun phrase?',
      why: 'Late-night scrolling is the <em>cause</em> of short sleep, and it is a noun phrase with no verb, so the preposition <em>because of</em> is needed. <em>Because</em> has the right meaning but needs a clause (<em>because they scrolled late</em>). <em>So</em> and <em>therefore</em> point the arrow the wrong way: they introduce results.' },

    { id: 't12l1ck-3', type: 'cloze', passage: T12_PL1, blank: '(3)', tag: 'lk-add', level: 'B2+',
      stem: 'Choose the best option for blank (3).',
      options: ['Unlike', 'Owing to', 'Instead of', 'According to'],
      answer: 3,
      hint: 'All four take a noun. What are the researchers here: a cause, a thing being compared, or something else?',
      why: 'The sentence reports the researchers’ explanation, so they are the <em>source</em>: <em>According to</em>. <em>Owing to</em> would make the researchers the cause of alert brains; <em>Unlike</em> would compare the researchers with screens; <em>Instead of</em> would mean the screens replace the researchers. All four take a noun, so only meaning decides.' },

    { id: 't12l1ck-4', type: 'cloze', passage: T12_PL1, blank: '(4)', tag: 'lk-add', level: 'B2+',
      stem: 'Choose the best option for blank (4).',
      options: ['and', 'also', 'moreover', 'as well as'],
      answer: 3,
      hint: 'Look at the form right after the blank: an -ing word. Which linker can take it?',
      why: 'An -ing form follows (<em>raising</em>), so the linker must be a preposition that takes -ing: <em>as well as</em>. <em>And</em> is the near miss, but <em>and</em> would need a matching verb (<em>weakens … and raises</em>), not <em>raising</em>. <em>Also</em> cannot join on its own, and <em>moreover</em> starts a new sentence.' },

    { id: 't12l1ck-5', type: 'cloze', passage: T12_PL1, blank: '(5)', tag: 'lk-cause', level: 'B2+',
      stem: 'Choose the best option for blank (5).',
      options: ['so that', 'because', 'as a result', 'in order to'],
      answer: 0,
      hint: 'Is extra sleep the reason, the result, or the aim? Then look: subject + can, or a bare verb?',
      why: 'Extra sleep is the <em>aim</em> of starting later, and a subject + <em>can</em> follows (<em>students can get</em>), so <em>so that</em> fits. <em>In order to</em> shows purpose too but needs a bare verb (<em>in order to give students…</em>). <em>Because</em> would make the extra sleep the cause of the change, and <em>as a result</em> needs a new sentence with a comma.' },

    { id: 't12l1ck-6', type: 'cloze', passage: T12_PL1, blank: '(6)', tag: 'lk-contrast', level: 'B2+',
      stem: 'Choose the best option for blank (6).',
      options: ['However', 'Moreover', 'Therefore', 'For example'],
      answer: 0,
      hint: 'The results are promising. Is the parents’ worry an extra point, a result, or a turn?',
      why: 'The paragraph turns from good news (<em>Early results look promising</em>) to a worry, so the new sentence needs a contrast linker: <em>However</em>. <em>Moreover</em> would add another positive point, <em>Therefore</em> would make the worry a result of the good news, and <em>For example</em> would present the worry as an example of the promising results.' }
  ] }
});

/* ---------------------------------------------------------------- level 2 passages */
var T12_P21 = 'When twenty exchange students from Japan arrived at a school in Chiang Mai last term, the Thai students were nervous at first. Within a month, however, the two groups were visiting ___(1)___ homes at weekends and swapping slang in three languages. Some visitors joined the Thai dance club; ___(2)___ preferred the robotics team, where they built a flood-warning sensor with their hosts. One visitor, Hana, enjoyed the school so much that she asked to stay for ___(3)___ six months. Her host sister, Ploy, has already applied to study in Osaka, and two other girls in her class hope to follow her.';

var T12_P22 = 'A new survey asked 800 Thai families how they use their phones at dinner. ___(1)___ family in the study kept a meal diary for two weeks. The results were mixed: in some homes, phones stayed on the table throughout the meal, while in others a “phone basket” waited by the door. ___(2)___ argue that such rules are unrealistic in a digital age, but the researchers disagree. Parents and teenagers ___(3)___ reported that meals felt longer and warmer without screens. However, ___(4)___ group was willing to give up phones completely: parents needed them for work messages, and teenagers needed them for homework chats.';

var T12_P23 = 'Sirin Academy, a group of twelve private schools, has changed ___(1)___ rules on sugary drinks. From next term, soft drinks will disappear from the canteens, and each student will be given a refillable bottle with ___(2)___ name printed on it. The decision follows a study at Riverbank University which found that the sugar in a large bubble tea is almost double ___(3)___ in a can of cola. “Nobody is banning treats,” a spokesperson for the group said. “But one should know what ___(4)___ is drinking.”';

var T12_PL2 = 'In December 2025, Australia banned social media accounts for under-16s. ___(1)___ countries soon followed, and France, Malaysia, Denmark and Greece have all announced age limits of ___(2)___ own. Supporters say the bans give children back time for sleep, sport and real conversations. Critics are less sure. A government report in 2026 found that more than 80% of under-16s were still using social media three months later. Some teenagers told reporters that they had simply borrowed older siblings’ accounts; ___(3)___ said they had never been asked their age at all. ___(4)___ side of the debate, however, believes that children should be left online with no protection at all. In Thailand, where there is no national ban, ___(5)___ school is free to set its own phone rules. One Bangkok school collects phones at the gate but hands them back for a “phone hour” at lunch. Like any new rule, the phone hour has ___(6)___ critics.';

/* ============================================================== LEVEL 2 */
T12.levels.push({
  id: 't12l2', n: 2, name: 'Determiners: count, then point', cefr: 'B2+',
  blurb: 'The little words in front of nouns carry three pieces of information: how many (one or more), which kind of noun (countable or not), and how known it is (any one, or the one we mean). Read the noun first, then choose.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't12l2s1', name: 'Other, another, the other, others, each other', cefr: 'B2', tag: 'dt-other',
      theory: {
        key: 'Read the noun first: <strong>another</strong> + singular (one more), <strong>other</strong> + plural (more of a kind), <strong>the other(s)</strong> = the rest of a known set, <strong>others</strong> = a pronoun with no noun after it, <strong>each other</strong> = a two-way action.',
        body: [
          'The “other” family looks like five random words, but it is really a grid with three questions. <strong>Number:</strong> one thing or more than one? <strong>Definiteness:</strong> any extra one, or the rest of a set we already know? <strong>Noun:</strong> does a noun follow, or is the word standing alone as a pronoun? <em>Another</em> is literally <em>an + other</em>, so it behaves like <em>an</em>: singular countable noun (<em>another term</em>), or alone (<em>Pun ate one and asked for another</em>). <em>Other</em> is an adjective: it needs a plural or uncountable noun after it (<em>other countries, other information</em>). Put <em>the</em> in front and you point at a known set: <em>the other hand</em> (the second of two), <em>the other students</em> (all the rest).',
          'Now the pronouns — the forms with no noun after them. Plural and “any”: <em>others</em> (<em>Some visitors joined the dance club; others preferred robotics</em>). Plural and “the rest”: <em>the others</em>. The -s only appears when the word stands alone, so <em>others students</em> is always wrong. Two special cases carry a lot of marks. First, <em>another</em> can come before a <u>number + plural noun</u> when the group is treated as one amount: <em>another six months, another 20 baht</em>. Second, <em>each other / one another</em> describe a two-way action (A → B and B → A): <em>they help each other</em>, and the possessive is <em>each other’s</em>: <em>visiting each other’s homes</em>.',
          '<strong>The procedure.</strong> Step 1 — look right of the blank: singular noun, plural noun, number + plural, or nothing at all? Step 2 — look left and around: is there <em>Some … </em> earlier (→ <em>others</em>), a set of two (→ <em>the other</em>), or a two-way action (→ <em>each other</em>)? Step 3 — choose. TCAS writes this point as <em>“___ children”</em> with <em>other / others / another / the others</em>: only one form can sit directly in front of a plural noun.'
        ],
        simple: [
          '<em>Another</em> = one more + singular noun: <em>another book</em>. <em>Other</em> + plural noun: <em>other books</em>. <em>Others</em> stands alone — no noun after it.',
          '<em>The other</em> = the last one of two. <em>The others</em> = all the rest. <em>Each other</em> = A helps B and B helps A.'
        ],
        thai: 'ให้ดูคำนามหลังช่องว่างก่อนเสมอ: another (= an + other) + คำนามเอกพจน์ หรือ + ตัวเลข + พหูพจน์ (another six months) / other + คำนามพหูพจน์หรือนามนับไม่ได้ / the other = อีกอันหนึ่งในชุดที่รู้กัน (เช่น ในสองอัน) / the others และ others เป็น pronoun ห้ามมีคำนามตาม (others students ผิดเสมอ) / each other = ต่างฝ่ายต่างทำให้กัน รูปแสดงความเป็นเจ้าของคือ each other’s กับดักข้อสอบคือ another + พหูพจน์ และ others + คำนาม',
        examples: [
          { s: 'Hana asked to stay for <strong>another</strong> term.', g: 'another + singular countable noun = one more.' },
          { s: 'She asked to stay for <strong>another</strong> six months.', g: 'another + number + plural: the six months are one amount of time.' },
          { s: 'Some students chose drama; <strong>others</strong> chose robotics.', g: 'others = pronoun (other students); no noun after it.' },
          { s: 'Two robots were built. One works; <strong>the other</strong> is still broken.', g: 'the other = the second of a known pair.' },
          { s: 'The two classes visited <strong>each other’s</strong> exhibitions.', g: 'each other’s = two-way + possessive.' }
        ],
        trap: 'TCAS puts a plural noun after the blank and offers <em>others</em> or <em>another</em> next to <em>other</em>. Students hear “more than one” and grab the form with an -s. Dodge: the -s belongs to the pronoun only. If a noun follows, the answer is never <em>others</em> — it is <em>other</em> (plural noun) or <em>another</em> (singular noun, or a number + plural).',
        analogy: { title: 'The photocard binder', text: 'You collect T-pop photocards. <em>Another card</em> is one more from the shop — any one. <em>Other cards</em> are more of the kind, still unspecified. <em>The other card</em> is the last one in the pair you already hold, and <em>the others</em> are all the rest of your set. <em>Others</em> are cards somebody else has, mentioned without the word “cards”. And when you and your best friend swap duplicates, you are trading with <em>each other</em>.' },
        map: { center: 'The “other” grid', branches: [
          { label: 'another', leaves: ['+ singular noun', '+ number + plural', 'alone: one more'] },
          { label: 'other', leaves: ['+ plural noun', '+ uncountable noun', 'never alone'] },
          { label: 'the other(s)', leaves: ['the other + noun', 'the others = the rest', 'the other hand'] },
          { label: 'others / each other', leaves: ['others: no noun after', 'Some … others …', 'each other’s + noun'] }
        ] },
        moves: [
          { move: 'Hold up one finger, then pop up a second', says: 'ANOTHER — one more, and it’s singular!' },
          { move: 'Wave your open hand across a crowd', says: 'OTHER + plural — other people, other places.' },
          { move: 'Hold two fists, then open the second one', says: 'THE OTHER — the last one of a pair we know.' },
          { move: 'Sweep your arm and stop with an empty palm', says: 'OTHERS — stands alone, no noun in my hand.' },
          { move: 'Point at a partner while they point back at you', says: 'EACH OTHER — the arrow goes both ways.' }
        ]
      },
      items: [
        { id: 't12l2s1-1', type: 'cloze', passage: T12_P21, blank: '(1)', tag: 'dt-other', level: 'B2',
          stem: 'Choose the best option for blank (1).',
          options: ['others', 'another', 'each other', 'each other’s'],
          answer: 3,
          hint: 'The Thai and Japanese students visit in both directions. What does the noun “homes” need in front of it?',
          why: 'The visiting goes both ways (the Thai students visit the Japanese students and vice versa), so we need <em>each other</em>, and because <em>homes</em> belongs to them, the possessive <em>each other’s</em>. <em>Each other</em> without ’s is the near miss: it cannot sit directly before a noun. <em>Others</em> would need an apostrophe and loses the two-way meaning, and <em>another</em> cannot go before a plural noun.' },

        { id: 't12l2s1-2', type: 'cloze', passage: T12_P21, blank: '(2)', tag: 'dt-other', level: 'B2',
          stem: 'Choose the best option for blank (2).',
          options: ['other', 'others', 'another', 'the other'],
          answer: 1,
          hint: 'Is there a noun after the blank? And how many visitors does the second group contain?',
          why: 'The pattern <em>Some visitors …; others …</em> contrasts two parts of a group, and nothing follows the blank, so we need the plural pronoun <em>others</em> (= other visitors). <em>Other</em> must have a noun after it. <em>Another</em> and <em>the other</em> are singular, but the next words say <em>they built … with their hosts</em>.' },

        { id: 't12l2s1-3', type: 'cloze', passage: T12_P21, blank: '(3)', tag: 'dt-other', level: 'B2',
          stem: 'Choose the best option for blank (3).',
          options: ['other', 'others', 'another', 'the others'],
          answer: 2,
          hint: 'The noun is plural, but “six months” is one amount of time. Which option can sit before a number?',
          why: 'With a number + plural noun that works as one amount (<em>six months</em> = one period), English uses <em>another</em>: <em>another six months</em>, like <em>another 20 baht</em>. <em>Other</em> is the near miss because <em>months</em> is plural, but <em>other six months</em> is not English. <em>Others</em> and <em>the others</em> are pronouns and cannot stand before a noun.' },

        { id: 't12l2s1-4', type: 'sort', tag: 'dt-other', level: 'B2',
          stem: 'Sort the phrases: correct English or wrong?',
          bins: [
            { key: 'ok', label: 'Correct', hint: 'the word fits the noun after it' },
            { key: 'no', label: 'Wrong', hint: 'number or noun does not match' }
          ],
          items: [
            { text: 'another student', bin: 'ok' },
            { text: 'another three days', bin: 'ok' },
            { text: 'other countries', bin: 'ok' },
            { text: 'help each other', bin: 'ok' },
            { text: 'on the other hand', bin: 'ok' },
            { text: 'another students', bin: 'no' },
            { text: 'others countries', bin: 'no' },
            { text: 'the others student', bin: 'no' },
            { text: 'visit each other house', bin: 'no' }
          ],
          hint: 'For each phrase, look at the noun after the “other” word: singular, plural, a number, or nothing?',
          why: '<em>Another</em> takes a singular noun or a number + plural (<em>another three days</em>); <em>other</em> takes a plural; the -s forms (<em>others, the others</em>) never stand before a noun; and before a noun, the reciprocal needs the possessive <em>each other’s house</em>. <em>On the other hand</em> is the second of two hands — a known pair.' },

        { id: 't12l2s1-5', type: 'spot', tag: 'dt-other', level: 'B2',
          stem: 'One part is wrong. Find it.',
          words: ['The two robots', 'were programmed', 'to talk to another', 'in simple Thai.'],
          answer: 2,
          fix: 'to talk to each other',
          hint: 'How many robots are there, and which way does the talking go?',
          why: 'Two robots talking to one another is a two-way action, so English needs <em>each other</em> (or <em>one another</em>). <em>Another</em> means “one more”, so <em>talk to another</em> suggests a third, unknown robot.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't12l2s2', name: 'Both, either, neither, every, all, some, each, most', cefr: 'B2+', tag: 'dt-quant',
      theory: {
        key: 'Each quantifier has a noun it must match: <strong>every / each / either / neither</strong> + <u>singular</u> noun (singular verb); <strong>both</strong> + plural (exactly two); <strong>all / most / some</strong> + plural or uncountable — and <em>Some</em> alone can mean “some people”.',
        body: [
          'Quantifiers answer “how many?”, and each one is built for a particular kind of noun. <strong>Every</strong> and <strong>each</strong> look at a group one member at a time, so they take a singular noun and a singular verb: <em>every generation challenges the old</em>, <em>each family keeps a diary</em>. <strong>Both, either, neither</strong> only work for <u>two</u>. <em>Both</em> means the two together (plural: <em>both groups agree</em>); <em>either</em> means one or the other (singular: <em>either answer is fine</em>); <em>neither</em> means not one and not the other (singular: <em>neither group was willing</em>). <strong>All, most, some</strong> take a plural or uncountable noun (<em>most teenagers, some research</em>). With <em>of the</em>, the noun is plural: <em>each of the girls <u>has</u></em>, <em>neither of the answers <u>is</u></em> (formal).',
          'Two exam favourites. First, <em>Some</em> and <em>Others</em> can stand alone as pronouns meaning “some people”: <em>Some argue that such rules are unrealistic</em>. A singular word cannot do this job with a plural verb — <em>Each argue, Everyone argue, Another argue</em> all fail. Second, <em>both</em> can float after a plural subject or after <em>be</em>: <em>Parents and teenagers both reported…</em>, <em>They are both tired</em>. <em>Every</em> can’t float, and <em>either/neither</em> need a noun, <em>of</em>, or a clear two-item context.',
          '<strong>The procedure.</strong> Step 1 — count the noun: how many things, and is it singular, plural or uncountable? Step 2 — check the verb: <em>is/has</em> or <em>are/have</em>? Step 3 — check the logic: exactly two (both/either/neither) or a larger group (all/every/most)? Is the sentence positive or negative? A sentence that goes on to give reasons why nobody did something needs <em>neither</em> or <em>no</em>, not <em>either</em>.'
        ],
        simple: [
          '<em>Every, each, either, neither</em> + one thing: <em>every student is</em>. <em>Both</em> = two things together: <em>both students are</em>.',
          '<em>All, most, some</em> + many things: <em>most students are</em>. <em>Some argue…</em> = some people argue.'
        ],
        thai: 'ตัวบอกปริมาณแต่ละตัวต้องจับคู่กับคำนามให้ถูก: every, each, either, neither + คำนามเอกพจน์และกริยาเอกพจน์ / both + พหูพจน์ ใช้กับ “สอง” เท่านั้น / all, most, some + พหูพจน์หรือนามนับไม่ได้ / Some argue… แปลว่า “บางคนแย้งว่า” ใช้เป็น pronoun ได้ ส่วน either = อันใดอันหนึ่งในสอง neither = ไม่ทั้งสอง (ความหมายปฏิเสธ) กับดักคือ every + พหูพจน์ และการเลือก either ในประโยคที่มีความหมายปฏิเสธ',
        examples: [
          { s: '<strong>Every</strong> generation challenges the one before it.', g: 'every + singular noun + singular verb.' },
          { s: '<strong>Some</strong> argue that phone bans are unrealistic.', g: 'Some alone = some people; plural verb argue.' },
          { s: 'Parents and teenagers <strong>both</strong> enjoyed the phone-free meals.', g: 'both floats after a plural subject of two groups.' },
          { s: '<strong>Neither</strong> group was willing to give up phones completely.', g: 'neither = not one and not the other; singular noun.' },
          { s: '<strong>Each of</strong> the girls <strong>has</strong> her own laptop.', g: 'each of + plural noun, but the verb agrees with each: singular.' }
        ],
        trap: 'The positive–negative trap. TCAS offers <em>either</em> and <em>neither</em> side by side; both take a singular noun, so grammar cannot decide. Dodge: read what comes next. If the passage explains why nobody did it (<em>parents needed them for work, teenagers for homework</em>), the meaning is negative → <em>neither</em>.',
        analogy: { title: 'Two bowls of noodles', text: 'The waiter puts two bowls in front of you. <em>Both</em> = you eat the two. <em>Either</em> = you may choose one, it doesn’t matter which. <em>Neither</em> = you push both away. <em>Each</em> = you taste them one by one. And <em>every</em> is the whole restaurant menu, dish by dish — always one plate at a time.' },
        map: { center: 'Quantifiers', branches: [
          { label: 'One at a time', leaves: ['every + singular', 'each + singular', 'each of the + plural'] },
          { label: 'Exactly two', leaves: ['both + plural', 'either = one of two', 'neither = not one, not the other'] },
          { label: 'Groups & amounts', leaves: ['all / most + plural', 'some + plural/uncountable', 'Some argue… (pronoun)'] },
          { label: 'Check', leaves: ['count the noun', 'match the verb', 'positive or negative?'] }
        ] },
        story: { title: 'The Dessert Dilemma', panels: [
          { who: 'Pun', text: 'Nong Bot, order me either the mango sticky rice or the bubble tea. I can’t decide.' },
          { who: 'Nong Bot', text: 'EITHER = one of two. Randomising… Congratulations! You get the bubble tea.' },
          { who: 'Pun', text: 'Noooo, I wanted the two of them!' },
          { who: 'Nong Bot', text: 'Then say BOTH + plural: both desserts. Order updated.' },
          { who: 'Mint', text: 'Pun, you have exactly twenty baht.' },
          { who: 'Nong Bot', text: 'Recalculating… NEITHER dessert is affordable. Singular noun, singular verb, zero dessert. Beep.' }
        ], moral: 'Either = one of two; both = the two together (plural); neither = not one and not the other.' }
      },
      items: [
        { id: 't12l2s2-1', type: 'cloze', passage: T12_P22, blank: '(1)', tag: 'dt-quant', level: 'B2+',
          stem: 'Choose the best option for blank (1).',
          options: ['All', 'Both', 'Each', 'Most'],
          answer: 2,
          hint: 'Is the noun after the blank singular or plural? Check the verb too.',
          why: 'The noun <em>family</em> is singular, and only <em>each</em> (or <em>every</em>) can come before a singular countable noun: <em>Each family … kept a diary</em>. <em>All</em> and <em>Most</em> are the near misses — they have the right “whole group” meaning, but need a plural (<em>all families</em>). <em>Both</em> also needs a plural and refers to exactly two, not 800 families.' },

        { id: 't12l2s2-2', type: 'cloze', passage: T12_P22, blank: '(2)', tag: 'dt-quant', level: 'B2+',
          stem: 'Choose the best option for blank (2).',
          options: ['Some', 'Each', 'Anyone', 'Everyone'],
          answer: 0,
          hint: 'No noun follows the blank. Look at the verb straight after it: singular or plural?',
          why: 'The blank stands alone as a pronoun with the plural verb <em>argue</em>, so we need <em>Some</em> (= some people). <em>Everyone</em> is the near miss: it can stand alone, but it is singular (<em>Everyone argues</em>) and would also mean that all people hold this view, while the next clause says the researchers disagree. <em>Each</em> and <em>Anyone</em> also need a singular verb.' },

        { id: 't12l2s2-3', type: 'cloze', passage: T12_P22, blank: '(3)', tag: 'dt-quant', level: 'B2+',
          stem: 'Choose the best option for blank (3).',
          options: ['both', 'every', 'either', 'neither'],
          answer: 0,
          hint: 'The subject names two groups. Which word can come after such a subject and before the verb?',
          why: 'The subject is two groups (<em>Parents and teenagers</em>), and <em>both</em> can float after a plural subject to say “the two together”. <em>Every</em> must come before a singular noun, and <em>either/neither</em> cannot float after a subject like this — <em>neither reported</em> would also need a negative idea that the sentence does not have.' },

        { id: 't12l2s2-4', type: 'cloze', passage: T12_P22, blank: '(4)', tag: 'dt-quant', level: 'B2+',
          stem: 'Choose the best option for blank (4).',
          options: ['all', 'both', 'either', 'neither'],
          answer: 3,
          hint: 'Read the reasons after the colon. Did the parents give up phones? Did the teenagers?',
          why: 'The colon gives a reason why each group kept its phones, so the meaning is negative for both groups: <em>neither group was willing</em>. <em>Either</em> is the near miss — it also takes a singular noun, but <em>either group was willing</em> is positive and contradicts the reasons. <em>All</em> and <em>both</em> need a plural noun (<em>both groups</em>).' },

        { id: 't12l2s2-5', type: 'sort', tag: 'dt-quant', level: 'B2+',
          stem: 'Which verb comes next: singular (is / has) or plural (are / have)?',
          bins: [
            { key: 'sg', label: 'Singular verb', hint: 'is / has / was' },
            { key: 'pl', label: 'Plural verb', hint: 'are / have / were' }
          ],
          items: [
            { text: 'Every student …', bin: 'sg' },
            { text: 'Each of the girls …', bin: 'sg' },
            { text: 'Either answer …', bin: 'sg' },
            { text: 'Everyone in the room …', bin: 'sg' },
            { text: 'Both options …', bin: 'pl' },
            { text: 'Most teenagers …', bin: 'pl' },
            { text: 'All the classrooms …', bin: 'pl' },
            { text: 'Some (= some people) …', bin: 'pl' }
          ],
          hint: 'Find the word the verb really agrees with. After “each of the …”, is it “each” or the plural noun?',
          why: '<em>Every, each, either</em> and <em>everyone</em> treat the group one member at a time, so the verb is singular — even in <em>Each of the girls has</em>, where the verb agrees with <em>each</em>. <em>Both, most, all</em> and the pronoun <em>Some</em> refer to more than one, so the verb is plural.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't12l2s3', name: 'Pronoun reference & agreement', cefr: 'C1', tag: 'dt-pron',
      theory: {
        key: 'A pronoun must agree with the noun it points back to: one organisation → <strong>its</strong>; people → <strong>their</strong> (also for one unknown person); generic <em>one</em> → <strong>one’s</strong>; and in comparisons, <strong>that of / those of</strong> replace a singular / plural noun.',
        body: [
          'Every pronoun is an arrow pointing back to a noun. To choose it, first find the target, then read its <strong>number</strong> and its <strong>kind</strong> (person or thing). A company, a school group, a government or an app is a single thing: <em>Sirin Academy has changed <u>its</u> rules</em>, even though many people work there. Plural nouns take <em>they/their</em>. For one person whose gender is unknown or unimportant (<em>each student, someone, a user</em>), modern English uses <em>they/their</em>: <em>each student gets a bottle with their name on it</em> (formal writing may also use <em>his or her</em>). The generic pronoun <em>one</em> keeps its own set: <em>one should know what one is drinking</em>.',
          'Two small spelling traps cost marks every year. <em>Its</em> is possessive (<em>its rules</em>); <em>it’s</em> means <em>it is / it has</em>. <em>Their</em> is possessive; <em>theirs</em> stands alone (<em>the choice is theirs</em>); <em>there</em> is a place. And a C1 point: when you compare two things of the same kind, you don’t repeat the noun — you use <em>that of</em> (singular or uncountable) or <em>those of</em> (plural): <em>The sugar in bubble tea is double <u>that</u> in cola</em>; <em>The prices in Siam are higher than <u>those</u> in Bang Na</em>.',
          '<strong>The procedure.</strong> Step 1 — draw the arrow: which noun does the blank point to? Skip the nearest noun if it doesn’t make sense (<em>a group of twelve schools has changed its rules</em> points to <em>group</em>, not <em>schools</em> — the verb <em>has</em> proves it). Step 2 — number and kind: one thing (<em>it/its</em>), people (<em>they/their</em>), generic <em>one</em>. Step 3 — check the verb after the pronoun: <em>one is</em>, <em>they are</em>, <em>we are</em>.'
        ],
        simple: [
          'A pronoun points back to a noun. One company or school → <em>its</em>. People → <em>their</em>. One person, boy or girl → <em>their</em> is fine.',
          '<em>Its</em> = belonging to it. <em>It’s</em> = it is. To compare, use <em>that of</em> (one thing) or <em>those of</em> (many things).'
        ],
        thai: 'สรรพนามต้องสอดคล้องกับคำนามที่อ้างถึง: องค์กร บริษัท โรงเรียน แอป = สิ่งเดียว ใช้ its (ไม่ใช่ their แม้จะมีคนทำงานหลายคน) / คนหลายคน ใช้ their และคนหนึ่งคนที่ไม่ระบุเพศใช้ their ได้ / one ต้องคู่กับ one’s และ one is / ในการเปรียบเทียบใช้ that of (เอกพจน์/นับไม่ได้) และ those of (พหูพจน์) แทนการพูดคำนามซ้ำ กับดักคือ its กับ it’s และการชี้กลับไปที่คำนามที่อยู่ใกล้ที่สุดแทนที่จะเป็นประธานจริง ให้ดูกริยา has/have ช่วยยืนยัน',
        examples: [
          { s: 'The school group has changed <strong>its</strong> rules on sugary drinks.', g: 'one organisation = it/its; the verb has confirms singular.' },
          { s: 'Each student will receive a bottle with <strong>their</strong> name on it.', g: 'singular they for one person of unknown gender.' },
          { s: 'The sugar in bubble tea is double <strong>that</strong> in cola.', g: 'that = the sugar (uncountable), not repeated.' },
          { s: 'The prices in Siam are higher than <strong>those</strong> in Bang Na.', g: 'those = the prices (plural).' },
          { s: 'One should know what <strong>one</strong> is drinking.', g: 'generic one keeps one / one’s and a singular verb.' }
        ],
        trap: 'The nearest-noun trap: <em>A group of twelve private schools has changed ___ rules.</em> The nearest noun is <em>schools</em>, so students choose <em>their</em>. Dodge: find the real subject (<em>a group</em>) — the singular verb <em>has</em> is your proof — and match the pronoun to it: <em>its</em>.',
        analogy: { title: 'The Grab pin, again', text: 'A pronoun is a pin dropped on a map: it only works if it lands on the right building. Drop <em>their</em> on “the company” and your driver goes to the wrong address. Before you drop the pin, read the address carefully — one building (<em>its</em>), a whole street of people (<em>their</em>), or the generic “one” who lives everywhere (<em>one’s</em>).' },
        map: { center: 'Pronoun agreement', branches: [
          { label: 'One thing / organisation', leaves: ['it / its', 'its ≠ it’s', 'the company has its…'] },
          { label: 'People', leaves: ['they / their / theirs', 'singular they: each student…', 'their ≠ there'] },
          { label: 'Generic one', leaves: ['one … one’s', 'one is (singular verb)'] },
          { label: 'Comparisons', leaves: ['that of + singular', 'those of + plural', 'don’t repeat the noun'] }
        ] },
        chant: { title: 'Point It Right', beat: 'snap-snap-clap (3 beats, repeat)', lines: [
          'A company, a school, a government — IT,',
          'One organisation: its rules, its kit!',
          'Two or more people? THEIR takes the stage,',
          'Each student gets their own name on the page.',
          'IT’S with an apostrophe? That means IT IS —',
          'ITS for belonging: no apostrophe, that’s the quiz!',
          'Compare like with like: say THAT OF, THOSE OF,',
          'One minds ONE’S pronouns — that’s what we’re made of!'
        ] }
      },
      items: [
        { id: 't12l2s3-1', type: 'cloze', passage: T12_P23, blank: '(1)', tag: 'dt-pron', level: 'C1',
          stem: 'Choose the best option for blank (1).',
          options: ['it', 'its', 'it’s', 'their'],
          answer: 1,
          hint: 'Which noun owns the rules? Let the verb “has changed” tell you whether it is singular.',
          why: 'The rules belong to <em>Sirin Academy, a group …</em> — one organisation, and the singular verb <em>has changed</em> confirms it — so the possessive is <em>its</em>. <em>Their</em> is the near miss: it matches the nearest noun, <em>schools</em>, but that is not the subject. <em>It’s</em> means “it is”, and <em>it</em> is not possessive.' },

        { id: 't12l2s3-2', type: 'cloze', passage: T12_P23, blank: '(2)', tag: 'dt-pron', level: 'C1',
          stem: 'Choose the best option for blank (2).',
          options: ['its', 'their', 'one’s', 'theirs'],
          answer: 1,
          hint: 'Whose name is printed on the bottle? Is that owner a person or a thing?',
          why: 'The name belongs to <em>each student</em>, one person whose gender is not given, and modern English uses possessive <em>their</em> for this (formal writing may also say <em>his or her</em>). <em>Its</em> is for things, not people; <em>one’s</em> belongs to the generic pronoun <em>one</em>; and <em>theirs</em> stands alone and cannot come before a noun.' },

        { id: 't12l2s3-3', type: 'cloze', passage: T12_P23, blank: '(3)', tag: 'dt-pron', level: 'C1',
          stem: 'Choose the best option for blank (3).',
          options: ['it', 'that', 'this', 'those'],
          answer: 1,
          hint: 'The writer compares the sugar in one drink with the sugar in another. Is “sugar” singular or plural?',
          why: 'The sentence compares <em>the sugar</em> in bubble tea with <em>the sugar</em> in cola, and instead of repeating the noun English uses <em>that</em> for a singular or uncountable noun: <em>double that in a can of cola</em>. <em>Those</em> is the near miss, but it replaces a plural noun. <em>It</em> and <em>this</em> cannot be followed by a phrase like <em>in a can of cola</em> in a comparison.' },

        { id: 't12l2s3-4', type: 'cloze', passage: T12_P23, blank: '(4)', tag: 'dt-pron', level: 'C1',
          stem: 'Choose the best option for blank (4).',
          options: ['we', 'one', 'you', 'they'],
          answer: 1,
          hint: 'Look at the subject of the sentence and at the verb right after the blank.',
          why: 'The sentence starts with the generic pronoun <em>one</em>, so it must continue with <em>one</em>, and the singular verb <em>is drinking</em> agrees only with <em>one</em>. <em>You</em> is the near miss, since it can also be generic, but the verb would be <em>are</em> and the switch from <em>one</em> to <em>you</em> is inconsistent. <em>We</em> and <em>they</em> also need <em>are</em>.' },

        { id: 't12l2s3-5', type: 'spot', tag: 'dt-pron', level: 'C1',
          stem: 'One part is wrong. Find it.',
          words: ['The new study app is popular,', 'but their privacy settings', 'are surprisingly difficult', 'to find.'],
          answer: 1,
          fix: 'but its privacy settings',
          hint: 'Draw an arrow from the pronoun back to the noun it refers to. One thing or many people?',
          why: 'The settings belong to <em>the new study app</em> — one thing — so the possessive must be <em>its</em>. <em>Their</em> would need a plural noun or a group of people to point back to, and there is none in this sentence.' }
      ]
    }
  ],

  check: { id: 't12l2ck', name: 'Systems Check · Determiners: count, then point', items: [
    { id: 't12l2ck-1', type: 'cloze', passage: T12_PL2, blank: '(1)', tag: 'dt-other', level: 'C1',
      stem: 'Choose the best option for blank (1).',
      options: ['Other', 'Others', 'Another', 'Every other'],
      answer: 0,
      hint: 'A plural noun follows the blank. Which form can sit directly in front of it?',
      why: 'A plural noun follows (<em>countries</em>), and the only form that can stand before a plural noun is <em>Other</em>. <em>Others</em> is the near miss, but the -s form is a pronoun and never comes before a noun. <em>Another</em> and <em>Every other</em> both need a singular noun (<em>another country, every other country</em>).' },

    { id: 't12l2ck-2', type: 'cloze', passage: T12_PL2, blank: '(2)', tag: 'dt-pron', level: 'C1',
      stem: 'Choose the best option for blank (2).',
      options: ['its', 'it’s', 'their', 'theirs'],
      answer: 2,
      hint: 'Whose age limits are they? Count the countries in the list.',
      why: 'The age limits belong to the four countries just listed — a plural subject — so the possessive is <em>their</em>: <em>of their own</em>. <em>Its</em> is the near miss for students who think only of the last country, Greece. <em>It’s</em> means “it is”, and <em>theirs</em> cannot come before <em>own</em>.' },

    { id: 't12l2ck-3', type: 'cloze', passage: T12_PL2, blank: '(3)', tag: 'dt-other', level: 'C1',
      stem: 'Choose the best option for blank (3).',
      options: ['other', 'others', 'each other', 'every other'],
      answer: 1,
      hint: 'The sentence began with “Some teenagers”. Is there a noun after the blank?',
      why: 'After <em>Some teenagers …</em>, a second part of the same group is introduced, and no noun follows the blank, so we need the plural pronoun <em>others</em>. <em>Other</em> and <em>every other</em> must be followed by a noun, and <em>each other</em> describes a two-way action, not a second group.' },

    { id: 't12l2ck-4', type: 'cloze', passage: T12_PL2, blank: '(4)', tag: 'dt-quant', level: 'C1',
      stem: 'Choose the best option for blank (4).',
      options: ['Both', 'Each', 'Either', 'Neither'],
      answer: 3,
      hint: 'Two sides. Read what the supporters and the critics each want. Is the sentence positive or negative for them?',
      why: 'Supporters want bans and critics doubt them, but no one argues for zero protection, so the meaning is negative for both sides: <em>Neither side … believes</em>. <em>Each</em> and <em>Either</em> fit the grammar (singular noun, singular verb) but would say that one or both sides want children unprotected, which the passage never suggests. <em>Both</em> needs a plural noun (<em>both sides</em>).' },

    { id: 't12l2ck-5', type: 'cloze', passage: T12_PL2, blank: '(5)', tag: 'dt-quant', level: 'C1',
      stem: 'Choose the best option for blank (5).',
      options: ['all', 'both', 'most', 'every'],
      answer: 3,
      hint: 'Look at the noun after the blank and at the verb: singular or plural?',
      why: 'The noun <em>school</em> is singular and the verb is <em>is</em>, so only <em>every</em> fits: <em>every school is free to set its own rules</em>. <em>All</em> and <em>most</em> have a similar meaning but need a plural (<em>all schools are</em>). <em>Both</em> needs a plural and means only two.' },

    { id: 't12l2ck-6', type: 'cloze', passage: T12_PL2, blank: '(6)', tag: 'dt-pron', level: 'C1',
      stem: 'Choose the best option for blank (6).',
      options: ['it', 'its', 'it’s', 'their'],
      answer: 1,
      hint: 'Who or what has critics here? Draw the arrow back to the subject of the sentence.',
      why: 'The critics belong to <em>the phone hour</em>, one thing, so the possessive is <em>its</em>: <em>the phone hour has its critics</em>. <em>It’s</em> is the near miss: it sounds the same but means “it is”. <em>Their</em> has no plural noun to point back to, and <em>it</em> is not possessive.' }
  ] }
});

/* ---------------------------------------------------------------- level 3 passages */
var T12_P31 = 'Last month, our school ran a “Green Week” to cut waste. The winning class, M.5/3, earned the prize by collecting old uniforms, repairing broken desk fans and ___(1)___ a swap shop in the library. The judges looked at three things: the amount of waste saved, the number of students involved and ___(2)___. M.5/3’s project was praised as practical, cheap and fun. For many students, the biggest surprise was that repairing things turned out to be easier than ___(3)___ new ones.';

var T12_P32 = 'Many students join the debate club ___(1)___ to win trophies but also to learn how to think under pressure. At our club, members must be ready to argue ___(2)___ for a motion or against it, depending on a coin toss. Our captain, Fah, likes to remind new members that ___(3)___ the coin nor the judges care what you personally believe. Good debaters, she says, need both quick thinking and ___(4)___.';

var T12_P33 = 'On the morning of the storm, many families in Hat Yai carried their furniture upstairs, ___(1)___ the radio had warned that the canals were rising fast. Older residents did not panic, ___(2)___ did they rush to leave their homes. They had lived through high water many times, ___(3)___ they trusted their own experience. ___(4)___ this time, experience was no match for the rain. The floods of late November 2025 were later described in the media as a “once-in-300-years” event.';

var T12_PL3 = 'Chatbots have changed the way students study. Used well, they can explain a hard idea, suggest a plan for an essay and ___(1)___ your grammar. Used badly, they do the thinking for you, ___(2)___ you learn nothing. Teachers at one Bangkok school decided ___(3)___ to ban the tools nor to ignore them. Instead, students must now hand in both their chatbot conversation and ___(4)___. The rule seems strict, ___(5)___ most students say it has made them more honest. As one M.6 student put it, the aim is not to hide the chatbot but ___(6)___ it wisely.';

/* ============================================================== LEVEL 3 */
T12.levels.push({
  id: 't12l3', n: 3, name: 'Balance: parallel shapes & joining', cefr: 'C1',
  blurb: 'Whatever sits on one side of <em>and</em>, <em>or</em>, <em>but</em>, <em>than</em> or a correlative pair must have the same shape as what sits on the other side — and two full sentences need a proper joint, not just a comma.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't12l3s1', name: 'Parallel structure', cefr: 'B2+', tag: 'pl-parallel',
      theory: {
        key: 'Items joined by <em>and / or / but / than</em> must have the <strong>same grammatical shape</strong>: -ing with -ing, to + verb with to + verb, noun phrase with noun phrase, adjective with adjective.',
        body: [
          'A list is a promise. When a writer starts <em>by collecting old uniforms, repairing broken fans and …</em>, the first two items have set a pattern (-ing forms after <em>by</em>), and the reader expects the third to keep it: <em>… and <u>opening</u> a swap shop</em>. Breaking the pattern (<em>and opened a swap shop</em>) makes the sentence limp, and in an exam it makes the option wrong. The rule works because <em>and / or / but</em> join <u>equal</u> things: both sides must be able to fill the same slot. Test it by reading each item alone after the shared start: <em>by collecting … / by repairing … / by opening …</em>.',
          'TCAS tests this in lists of three (<em>promoting …, building …, and championing …</em>) and in comparisons. <em>Than</em> and <em>as</em> also join equals: <em>Repairing things is easier than <u>buying</u> new ones</em>, not <em>than to buy</em>. The shapes to match are: verb forms (-ing / to + verb / base verb after a modal), noun phrases (<em>the amount of …, the number of …, the creativity of …</em>), adjectives (<em>practical, cheap and fun</em>) and whole clauses (<em>that … and that …</em>).',
          '<strong>The procedure.</strong> Step 1 — find the joining word nearest the blank (<em>and, or, but, than</em>). Step 2 — find the first item in the list, not just the one next to the blank; the first item sets the shape. Step 3 — choose the option with exactly that shape. With modals, the shared word does the work: <em>they can explain, suggest and <u>check</u></em> — each verb is a base form because <em>can</em> governs all three.'
        ],
        simple: [
          'Words joined by <em>and, or, but, than</em> should look the same. <em>Reading, writing and speaking</em> — all -ing. <em>Quick, clever and kind</em> — all adjectives.',
          'Look at the FIRST item in the list and copy its shape.'
        ],
        thai: 'สิ่งที่เชื่อมด้วย and, or, but, than ต้องมี “รูปแบบไวยากรณ์เดียวกัน” (parallel structure) เช่น -ing คู่กับ -ing, to + V คู่กับ to + V, นามวลีคู่กับนามวลี, adjective คู่กับ adjective ให้ดูสมาชิกตัวแรกของ list เพราะตัวแรกกำหนดรูปแบบ ไม่ใช่ดูแค่คำที่อยู่ติดช่องว่าง กับดักคือ ตัวเลือกที่ความหมายถูกแต่รูปไม่ตรง เช่น by collecting…, repairing… and opened (ผิด) ต้องเป็น opening และ easier than buying ไม่ใช่ than to buy',
        examples: [
          { s: 'They won by collecting uniforms, repairing fans and <strong>opening</strong> a swap shop.', g: 'three -ing forms after by.' },
          { s: 'The judges looked at the amount of waste, the number of students and <strong>the creativity of the idea</strong>.', g: 'three noun phrases with the same shape: the + noun + of …' },
          { s: 'Repairing things is easier than <strong>buying</strong> new ones.', g: 'than joins equals: -ing and -ing.' },
          { s: 'Chatbots can explain an idea, suggest a plan and <strong>check</strong> your grammar.', g: 'can + three base verbs.' },
          { s: 'The project was practical, cheap and <strong>fun</strong>.', g: 'three adjectives after was.' }
        ],
        trap: 'The last-neighbour trap: students match the blank to the word right before <em>and</em> instead of to the first item in the list. In <em>by collecting …, repairing … and ___</em>, the tempting option is often a past verb (<em>opened</em>) that seems to match an earlier verb in the sentence (<em>earned</em>). Dodge: go back to the word that starts the list (<em>by</em>) and test each item after it.',
        analogy: { title: 'The dance line', text: 'A K-pop group in a line dance only looks sharp if every member does the same move at the same time. One member doing a different move — however good — ruins the formation. In a list, <em>and</em> is the choreographer: whatever move the first member makes (-ing, to + verb, noun), the others must copy.' },
        map: { center: 'Parallel structure', branches: [
          { label: 'Joiners', leaves: ['and / or / but', 'than / as', 'lists of three'] },
          { label: 'Shapes', leaves: ['-ing, -ing, -ing', 'to + V, to + V', 'noun phrase ×3', 'adjective ×3'] },
          { label: 'Method', leaves: ['find the joiner', 'find the FIRST item', 'copy its shape'] },
          { label: 'Traps', leaves: ['easier than to buy ✗', 'and opened ✗', 'shape changes mid-list'] }
        ] },
        chant: { title: 'Same Shape', beat: 'clap-clap-stomp (4/4)', lines: [
          'Same shape, same shape, line them up in a row,',
          'Collecting, repairing, opening — that’s the -ING flow!',
          'To read, to write, to think — keep the TO in line,',
          'Practical, cheap and fun: three adjectives, fine!',
          'After AND, look back to the start of the chain,',
          'Match the first in the list and it won’t break again.',
          'Easier than BUYING? Yes — not “than to buy”,',
          'Compare like with like and the marks go high!'
        ] }
      },
      items: [
        { id: 't12l3s1-1', type: 'cloze', passage: T12_P31, blank: '(1)', tag: 'pl-parallel', level: 'B2+',
          stem: 'Choose the best option for blank (1).',
          options: ['open', 'opened', 'opening', 'to open'],
          answer: 2,
          hint: 'Go back to the word that starts the list of things the class did. What form follows it?',
          why: 'The list starts after <em>by</em>: <em>by collecting …, repairing … and ___</em>. All items must share the -ing shape, so the answer is <em>opening</em>. <em>Opened</em> is the near miss because it matches <em>earned</em>, but it is not part of the <em>by</em> list. <em>Open</em> and <em>to open</em> break the pattern too.' },

        { id: 't12l3s1-2', type: 'cloze', passage: T12_P31, blank: '(2)', tag: 'pl-parallel', level: 'B2+',
          stem: 'Choose the best option for blank (2).',
          options: ['creative', 'to be creative', 'the idea was creative', 'the creativity of the idea'],
          answer: 3,
          hint: 'The judges looked at three things. What shape do the first two things have?',
          why: 'The first two items are noun phrases built the same way — <em>the amount of waste saved, the number of students involved</em> — so the third must be a noun phrase too: <em>the creativity of the idea</em>. <em>Creative</em> is an adjective, <em>to be creative</em> is an infinitive, and <em>the idea was creative</em> is a full clause; none of them can be a “thing” the judges looked at in this list.' },

        { id: 't12l3s1-3', type: 'cloze', passage: T12_P31, blank: '(3)', tag: 'pl-parallel', level: 'B2+',
          stem: 'Choose the best option for blank (3).',
          options: ['buy', 'buying', 'bought', 'to buy'],
          answer: 1,
          hint: '“Than” joins two things being compared. What form is the first one?',
          why: '<em>Than</em> compares two equal things, and the first is an -ing form: <em>repairing things</em>. So the second must be <em>buying</em> new ones. <em>To buy</em> is the near miss — it is a noun-like form too, but it does not match <em>repairing</em>. <em>Buy</em> and <em>bought</em> are verbs without a subject here.' },

        { id: 't12l3s1-4', type: 'build', tag: 'pl-parallel', level: 'B2+',
          stem: 'Build a balanced sentence: the new canteen rule has three aims.',
          tiles: ['The new rule aims to', 'cut sugar,', 'save money', 'and', 'reduce plastic waste'],
          solution: 'The new rule aims to cut sugar, save money and reduce plastic waste',
          alt: ['The new rule aims to cut sugar, reduce plastic waste and save money'],
          hint: '“Aims to” is shared by all three items. What form must each item take after it?',
          why: 'The shared start <em>aims to</em> is followed by three base verbs in the same shape: <em>cut …, save … and reduce …</em>. Each item reads correctly on its own after the shared start (<em>aims to cut, aims to save, aims to reduce</em>), which is the test for parallel structure.' },

        { id: 't12l3s1-5', type: 'spot', tag: 'pl-parallel', level: 'B2+',
          stem: 'One part is wrong. Find it.',
          words: ['Our English club helps students', 'build confidence,', 'make new friends', 'and improving their accents.'],
          answer: 3,
          fix: 'and improve their accents.',
          hint: 'After “helps students”, what form do the first two items take?',
          why: 'After <em>helps students</em>, the list uses base verbs: <em>build confidence, make new friends</em>. The third item must copy that shape: <em>and improve their accents</em>. <em>Improving</em> breaks the pattern.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't12l3s2', name: 'Correlatives: not only … but also, either … or', cefr: 'C1', tag: 'pl-correl',
      theory: {
        key: 'Correlatives come in fixed pairs — <strong>not only … but also, either … or, neither … nor, both … and</strong> — and what follows each half must have the same shape; with <em>or/nor</em> the verb agrees with the nearer subject.',
        body: [
          'Correlatives are two-part linkers, and the pairs are fixed: <em>both → and</em>, <em>either → or</em>, <em>neither → nor</em>, <em>not only → but (also)</em>, <em>whether → or</em>. When TCAS prints the second half in the passage (<em>… but also to learn</em>, <em>… nor the judges</em>), the second half chooses the first. So the fastest move is to look to the <u>right</u> of the blank for the partner word: see <em>nor</em>, answer <em>neither</em>; see <em>but also</em>, answer <em>not only</em>.',
          'Then the balance rule from 3.1 applies, but stricter: the words after each half must be the same kind of thing. <em>not only <u>to win</u> trophies but also <u>to learn</u></em> (two infinitives); <em>either <u>for</u> a motion or <u>against</u> it</em> (two prepositional phrases); <em>both <u>quick thinking</u> and <u>calm nerves</u></em> (two noun phrases). Place the first half directly in front of the first matched element: <em>She is good not only at gaming but also at debating</em>, not <em>She is not only good at gaming but also at debating</em>.',
          'Agreement: with <em>both … and</em> the verb is plural. With <em>either … or</em> and <em>neither … nor</em>, the verb agrees with the <u>nearer</u> subject: <em>Neither the coach nor the players <u>were</u> ready</em>; <em>Neither the players nor the coach <u>was</u> ready</em>. And remember the difference in meaning: <em>either … or</em> offers a choice; <em>neither … nor</em> rules both out.'
        ],
        simple: [
          'Some linkers come in pairs: <em>both … and, either … or, neither … nor, not only … but also</em>. Never mix the partners.',
          'After each half, use the same kind of words: <em>not only <u>to win</u> but also <u>to learn</u></em>.'
        ],
        thai: 'correlative conjunctions มาเป็นคู่ตายตัว: both … and, either … or, neither … nor, not only … but (also) ห้ามจับคู่ผิด เคล็ดลับคือดูคำคู่ที่อยู่ด้านหลังช่องว่าง เช่น เห็น nor ตอบ neither เห็น but also ตอบ not only จากนั้นสิ่งที่ตามหลังแต่ละครึ่งต้องมีรูปแบบเดียวกัน (to + V คู่กับ to + V) และกับ either … or / neither … nor กริยาจะผันตามประธานตัวที่อยู่ใกล้กริยามากที่สุด',
        examples: [
          { s: 'Students join the club <strong>not only</strong> to win trophies <strong>but also</strong> to learn.', g: 'to + verb after both halves.' },
          { s: 'Members must argue <strong>either</strong> for a motion <strong>or</strong> against it.', g: 'either … or offers a choice; for / against match.' },
          { s: '<strong>Neither</strong> the coin <strong>nor</strong> the judges care what you believe.', g: 'the verb agrees with the nearer subject, judges → care.' },
          { s: 'Good debaters need <strong>both</strong> quick thinking <strong>and</strong> calm nerves.', g: 'two noun phrases.' },
          { s: 'She is good <strong>not only</strong> at gaming <strong>but also</strong> at debating.', g: 'the pair sits right before the matching phrases.' }
        ],
        trap: 'Mixed partners. TCAS offers <em>both</em> or <em>either</em> for a blank whose partner in the passage is <em>nor</em> or <em>but also</em>, and students choose by feel. Dodge: before you read the options, scan right of the blank for the second half of a pair (<em>and / or / nor / but also</em>). The partner decides; meaning only confirms.',
        analogy: { title: 'Earrings and chopsticks', text: 'Correlatives are like earrings or chopsticks: they only work as a matching pair. Wear one gold hoop and one plastic star and people notice. <em>Neither</em> must go with <em>nor</em>, <em>either</em> with <em>or</em> — and the things they hold must match as well: one chopstick for rice and the other for soup does not work.' },
        map: { center: 'Correlative pairs', branches: [
          { label: 'The pairs', leaves: ['both … and', 'either … or', 'neither … nor', 'not only … but also'] },
          { label: 'Find the partner', leaves: ['look RIGHT of blank', 'nor → neither', 'but also → not only'] },
          { label: 'Balance', leaves: ['to V … to V', 'noun … noun', 'prep … prep'] },
          { label: 'Agreement', leaves: ['both … and → plural', 'or / nor → nearer subject'] }
        ] },
        story: { title: 'The Unbalanced Boast', panels: [
          { who: 'Pun', text: 'Fah, I want to join debate. I am not only good at gaming but also at arguing.' },
          { who: 'Nong Bot', text: 'Balance check… LEFT side: “good at gaming”. RIGHT side: “at arguing”. The seesaw has tipped over. Beep.' },
          { who: 'Fah', text: 'Put “not only” right before “at”, Pun: good not only at gaming but also at arguing. Same shape on both sides.' },
          { who: 'Pun', text: 'Fine. But neither my coach nor my parents believes I can debate.' },
          { who: 'T.Chris', text: '“Neither … nor” — the verb follows the nearer subject. Your parents believe, Pun. Well… grammatically.' }
        ], moral: 'Put each half of the pair in front of matching words, and with nor/or let the nearer subject choose the verb.' }
      },
      items: [
        { id: 't12l3s2-1', type: 'cloze', passage: T12_P32, blank: '(1)', tag: 'pl-correl', level: 'C1',
          stem: 'Choose the best option for blank (1).',
          options: ['only', 'not only', 'as well as', 'rather than'],
          answer: 1,
          hint: 'Scan to the right of the blank. Which partner word appears later in the sentence?',
          why: 'The second half of the pair is already in the sentence: <em>but also to learn</em>. Its fixed partner is <em>not only</em>, and both halves are followed by <em>to</em> + verb. <em>Only</em> is the near miss, but <em>only to win trophies but also</em> says the opposite of what the second half adds. <em>As well as</em> and <em>rather than</em> cannot pair with <em>but also</em>.' },

        { id: 't12l3s2-2', type: 'cloze', passage: T12_P32, blank: '(2)', tag: 'pl-correl', level: 'C1',
          stem: 'Choose the best option for blank (2).',
          options: ['both', 'either', 'rather', 'neither'],
          answer: 1,
          hint: 'Find the word that links “for a motion” and “against it”. Which first half does it need?',
          why: 'The partner word is <em>or</em> (<em>for a motion or against it</em>), and the coin toss means the debater gets one side or the other — a choice — so <em>either</em> is right. <em>Both</em> needs <em>and</em>, <em>neither</em> needs <em>nor</em>, and <em>rather</em> would need <em>than</em>.' },

        { id: 't12l3s2-3', type: 'cloze', passage: T12_P32, blank: '(3)', tag: 'pl-correl', level: 'C1',
          stem: 'Choose the best option for blank (3).',
          options: ['both', 'either', 'neither', 'whether'],
          answer: 2,
          hint: 'Look for the second half of the pair to the right of the blank.',
          why: 'The partner <em>nor</em> appears after <em>the coin</em>, so the first half must be <em>neither</em>: <em>neither the coin nor the judges care</em>. The verb <em>care</em> is plural because it agrees with the nearer subject, <em>the judges</em>. <em>Either</em> is the near miss, but it pairs with <em>or</em>; <em>both</em> pairs with <em>and</em>, and <em>whether</em> with <em>or</em>.' },

        { id: 't12l3s2-4', type: 'cloze', passage: T12_P32, blank: '(4)', tag: 'pl-correl', level: 'C1',
          stem: 'Choose the best option for blank (4).',
          options: ['calmer', 'calmly', 'calm nerves', 'to stay calm'],
          answer: 2,
          hint: 'What comes after “both”? Copy its shape after “and”.',
          why: 'After <em>both</em> comes a noun phrase (<em>quick thinking</em> — an adjective + a noun), so after <em>and</em> we need the same shape: <em>calm nerves</em>. <em>To stay calm</em> is the near miss: the meaning is right, but an infinitive does not balance a noun phrase. <em>Calmer</em> and <em>calmly</em> are not nouns and cannot be things that debaters need.' },

        { id: 't12l3s2-5', type: 'spot', tag: 'pl-correl', level: 'C1',
          stem: 'One part is wrong. Find it.',
          words: ['Neither the students', 'nor their teacher', 'were told', 'about the fire drill.'],
          answer: 2,
          fix: 'was told',
          hint: 'With “neither … nor”, which subject does the verb agree with?',
          why: 'With <em>neither … nor</em>, the verb agrees with the nearer subject. Here the nearer subject is <em>their teacher</em> (singular), so the verb must be <em>was told</em>. If the order were reversed (<em>Neither the teacher nor the students</em>), <em>were</em> would be correct.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't12l3s3', name: 'Coordinators (FANBOYS) & joining sentences', cefr: 'C1', tag: 'pl-coord',
      theory: {
        key: 'Two full sentences can be joined by a comma + a <strong>FANBOYS</strong> word (for, and, nor, but, or, yet, so) — never by a comma alone — and each coordinator has a precise meaning: <em>for</em> = because, <em>yet</em> = but surprisingly, <em>nor</em> = and not (+ question order).',
        body: [
          'An independent clause is a complete sentence. You can join two of them in only three correct ways: a full stop, a semicolon, or a comma + one of the seven coordinators, <strong>F-A-N-B-O-Y-S</strong>: <em>for, and, nor, but, or, yet, so</em>. A comma on its own is too weak — <em>The rain stopped at noon, the water kept rising</em> is a <u>comma splice</u>. Sentence linkers like <em>however</em> and <em>therefore</em> are not coordinators, so they cannot do the job after a comma either: <em>…at noon; however, the water kept rising</em>.',
          'Each coordinator carries a relation. <em>And</em> adds; <em>but</em> contrasts; <em>yet</em> contrasts with surprise and, like <em>but</em>, can open a sentence (<em>Yet this pride often comes with pressure</em>). <em>So</em> gives a result (the arrow points forward); <em>for</em> gives a reason (the arrow points backward) and is formal: it must follow a comma and a complete clause, and it cannot open a sentence as a reason word. <em>Or</em> gives an alternative. <em>Nor</em> adds a second negative and uses question order: <em>They did not panic, <u>nor did they</u> rush to leave.</em>',
          '<strong>The procedure.</strong> Step 1 — check both sides: are they both full clauses? Step 2 — name the relation: extra, contrast, surprise, result, reason, alternative, second negative? Step 3 — check the shape after the coordinator: <em>nor</em> needs auxiliary + subject; <em>for</em> needs a reason that really explains the first clause. The most useful test for <em>so</em> vs <em>for</em>: swap the clauses and put <em>because</em> in — the one that makes sense tells you the direction.'
        ],
        simple: [
          'Join two full sentences with a comma + <em>for, and, nor, but, or, yet, so</em>. A comma alone is not enough.',
          '<em>So</em> = result. <em>For</em> = because. <em>Yet</em> = but (surprising). <em>Nor</em> = and not: <em>nor did they</em>.'
        ],
        thai: 'การเชื่อมประโยคสมบูรณ์สองประโยคทำได้สามวิธี: จุด, semicolon หรือ comma + FANBOYS (for, and, nor, but, or, yet, so) การใช้ comma อย่างเดียวผิด (comma splice) และ however ไม่ใช่ coordinator จึงต้องใช้ ; however, ความหมาย: for = เพราะ (เหตุ อยู่หลัง comma เท่านั้น) so = ดังนั้น (ผล) yet = แต่ (อย่างน่าแปลกใจ ขึ้นต้นประโยคได้) nor = และไม่ ต้องกลับกริยาช่วยไว้หน้าประธาน (nor did they) กับดักคือ so กับ for ที่ทิศทางเหตุ–ผลกลับกัน',
        examples: [
          { s: 'Families carried their furniture upstairs, <strong>for</strong> the radio had warned of rising canals.', g: 'for = because; the reason comes second.' },
          { s: 'They had lived through floods before, <strong>so</strong> they trusted their experience.', g: 'so = result; the arrow points forward.' },
          { s: 'Older residents did not panic, <strong>nor</strong> did they rush to leave.', g: 'nor + auxiliary + subject (question order).' },
          { s: '<strong>Yet</strong> this time, experience was no match for the rain.', g: 'Yet can open a sentence: a surprising contrast.' },
          { s: 'The rain stopped at noon<strong>; however,</strong> the water kept rising.', g: 'however needs a semicolon or a full stop, not a comma.' }
        ],
        trap: 'The arrow trap with <em>so</em> and <em>for</em>: both join a cause and a result, but in opposite directions, and TCAS offers both. Dodge: read the second clause and ask, “Is this the reason for the first, or what happened because of it?” Reason → <em>for</em>; result → <em>so</em>. Then check <em>nor</em>: it must be followed by question order.',
        analogy: { title: 'The BTS coupling', text: 'Two Skytrain carriages can only travel together if they are joined by a proper coupling. A comma is a piece of sticky tape — the train will split at the first curve. The seven FANBOYS are the real couplings, and each one has a label: <em>so</em> pulls the train forward to a result, <em>for</em> points back to the station it came from, <em>yet</em> takes a surprising turn.' },
        map: { center: 'FANBOYS', branches: [
          { label: 'Add / choose', leaves: ['and = extra', 'or = alternative', 'nor + did they (neg.)'] },
          { label: 'Contrast', leaves: ['but = contrast', 'yet = surprise', 'Yet can open a sentence'] },
          { label: 'Cause & result', leaves: ['so = result →', 'for = because ←', 'for never opens a sentence'] },
          { label: 'Joining', leaves: ['comma + FANBOYS ✓', 'comma alone ✗ (splice)', '; however, ✓'] }
        ] },
        moves: [
          { move: 'Hand on heart, then point backwards over your shoulder', says: 'FOR = because — the reason comes from behind.' },
          { move: 'Point both hands forward like an arrow', says: 'SO = the result — the train moves on.' },
          { move: 'Cross your arms in an X, then flip your hands over', says: 'NOR = one more NO — flip it: nor DID they.' },
          { move: 'Swerve your hand sharply to the side', says: 'YET = a surprise turn — it can start a sentence.' },
          { move: 'Draw a comma in the air, then clasp your hands together', says: 'Comma + FANBOYS locks two sentences together.' }
        ]
      },
      items: [
        { id: 't12l3s3-1', type: 'cloze', passage: T12_P33, blank: '(1)', tag: 'pl-coord', level: 'C1',
          stem: 'Choose the best option for blank (1).',
          options: ['so', 'for', 'nor', 'yet'],
          answer: 1,
          hint: 'Does the radio warning explain why the families acted, or describe what happened next?',
          why: 'The radio warning explains <em>why</em> families carried their furniture upstairs, so the coordinator must give a reason: <em>for</em> (= because). <em>So</em> is the near miss — it links cause and result too, but points the other way (the furniture did not cause the warning). <em>Yet</em> needs a surprising contrast, and <em>nor</em> needs a negative first clause.' },

        { id: 't12l3s3-2', type: 'cloze', passage: T12_P33, blank: '(2)', tag: 'pl-coord', level: 'C1',
          stem: 'Choose the best option for blank (2).',
          options: ['or', 'so', 'nor', 'yet'],
          answer: 2,
          hint: 'The first clause is negative. Look at the word order right after the blank: “___ did they rush”.',
          why: 'The first clause is negative (<em>did not panic</em>), and the second adds another negative in question order (<em>did they rush</em>). Only <em>nor</em> does both: it means “and not” and is followed by auxiliary + subject. <em>Or</em> and <em>yet</em> cannot be followed by question order here, and <em>so did they</em> would mean “they did too”, which contradicts the first clause.' },

        { id: 't12l3s3-3', type: 'cloze', passage: T12_P33, blank: '(3)', tag: 'pl-coord', level: 'C1',
          stem: 'Choose the best option for blank (3).',
          options: ['so', 'or', 'for', 'yet'],
          answer: 0,
          hint: 'Draw an arrow between the two clauses: living through floods → trusting experience?',
          why: 'Living through high water many times is the reason, and trusting their experience is the <em>result</em>, so the coordinator is <em>so</em>. <em>For</em> reverses the arrow: their trust did not cause the earlier floods. <em>Yet</em> would need a surprise, and <em>or</em> an alternative.' },

        { id: 't12l3s3-4', type: 'cloze', passage: T12_P33, blank: '(4)', tag: 'pl-coord', level: 'C1',
          stem: 'Choose the best option for blank (4).',
          options: ['So', 'For', 'Nor', 'Yet'],
          answer: 3,
          hint: 'The residents trusted their experience. What happened “this time”? Is that expected or a turn?',
          why: 'The residents trusted their experience, but this time it failed — a surprising contrast — and <em>Yet</em> is the coordinator that can open a sentence with that meaning. <em>So</em> would make the failure a logical result of their trust, <em>For</em> cannot open a sentence as a reason word, and <em>Nor</em> needs a negative idea before it and question order after it.' },

        { id: 't12l3s3-5', type: 'spot', tag: 'pl-coord', level: 'C1',
          stem: 'One part is wrong. Find it.',
          words: ['The rain stopped', 'at noon, however', 'the water kept rising', 'until late evening.'],
          answer: 1,
          fix: 'at noon, but',
          hint: 'Are there two full sentences here? What is joining them?',
          why: '<em>The rain stopped at noon</em> and <em>the water kept rising</em> are two full sentences, and <em>however</em> is not a coordinator, so a comma before it makes a comma splice. Use a coordinator (<em>…at noon, but the water…</em>) or a semicolon with <em>however</em> (<em>…at noon; however, the water…</em>).' }
      ]
    }
  ],

  check: { id: 't12l3ck', name: 'Systems Check · Balance: parallel shapes & joining', items: [
    { id: 't12l3ck-1', type: 'cloze', passage: T12_PL3, blank: '(1)', tag: 'pl-parallel', level: 'C1',
      stem: 'Choose the best option for blank (1).',
      options: ['check', 'checked', 'checking', 'to check'],
      answer: 0,
      hint: 'Which word controls all the verbs in this list? What form does it need?',
      why: 'The modal <em>can</em> governs the whole list — <em>can explain …, suggest … and ___</em> — so each verb is a base form: <em>check</em>. <em>Checking</em> is the near miss: lists often end in -ing, but here the list starts with <em>explain</em>, a base form after <em>can</em>. <em>To check</em> and <em>checked</em> cannot follow <em>can</em>.' },

    { id: 't12l3ck-2', type: 'cloze', passage: T12_PL3, blank: '(2)', tag: 'pl-coord', level: 'C1',
      stem: 'Choose the best option for blank (2).',
      options: ['so', 'or', 'for', 'nor'],
      answer: 0,
      hint: 'Is learning nothing the reason for the chatbot doing the thinking, or the result?',
      why: 'When the chatbot does the thinking, the <em>result</em> is that you learn nothing, so the coordinator is <em>so</em>. <em>For</em> reverses the arrow: learning nothing is not the reason the chatbot does the thinking. <em>Or</em> offers an alternative, and <em>nor</em> needs a negative clause before it and question order after it.' },

    { id: 't12l3ck-3', type: 'cloze', passage: T12_PL3, blank: '(3)', tag: 'pl-correl', level: 'C1',
      stem: 'Choose the best option for blank (3).',
      options: ['both', 'either', 'neither', 'not only'],
      answer: 2,
      hint: 'Scan right of the blank for the second half of a pair.',
      why: 'The partner <em>nor</em> appears later (<em>nor to ignore them</em>), so the first half is <em>neither</em>, and both halves are followed by <em>to</em> + verb. The next sentence (<em>Instead, …</em>) confirms that the teachers chose a third way. <em>Either</em> needs <em>or</em>, <em>both</em> needs <em>and</em>, and <em>not only</em> needs <em>but also</em>.' },

    { id: 't12l3ck-4', type: 'cloze', passage: T12_PL3, blank: '(4)', tag: 'pl-parallel', level: 'C1',
      stem: 'Choose the best option for blank (4).',
      options: ['drafting by hand', 'their own first draft', 'to write a first draft', 'they wrote a first draft'],
      answer: 1,
      hint: 'After “both” comes one thing students hand in. What shape is it?',
      why: 'After <em>both</em> comes a noun phrase (<em>their chatbot conversation</em>), so after <em>and</em> the second thing handed in must also be a noun phrase: <em>their own first draft</em>. <em>To write a first draft</em> is the near miss — right idea, wrong shape (an infinitive). <em>They wrote a first draft</em> is a clause, and <em>drafting by hand</em> is an activity, not something you can hand in.' },

    { id: 't12l3ck-5', type: 'cloze', passage: T12_PL3, blank: '(5)', tag: 'pl-coord', level: 'C1',
      stem: 'Choose the best option for blank (5).',
      options: ['so', 'for', 'nor', 'yet'],
      answer: 3,
      hint: 'A strict rule, and students still like it. Is that expected, or a surprise?',
      why: 'A strict rule would normally be unpopular, so students praising it is a surprising contrast: <em>yet</em>. <em>So</em> would make their praise a logical result of the strictness, and <em>for</em> would make it the reason the rule seems strict. <em>Nor</em> needs a negative first clause and question order.' },

    { id: 't12l3ck-6', type: 'cloze', passage: T12_PL3, blank: '(6)', tag: 'pl-correl', level: 'C1',
      stem: 'Choose the best option for blank (6).',
      options: ['used', 'using', 'to use', 'for using'],
      answer: 2,
      hint: 'Look at what follows “not” in the first half of the pair, and copy it.',
      why: 'The pair is <em>not … but</em>, and the first half is followed by <em>to</em> + verb (<em>not to hide the chatbot</em>), so the second half needs the same shape: <em>but to use it wisely</em>. <em>Using</em> is the near miss, but an -ing form does not balance <em>to hide</em>. <em>Used</em> and <em>for using</em> break the pattern as well.' }
  ] }
});

TOPICS.push(T12);

Object.assign(REMEDIATION, {
  'lk-contrast': {
    name: 'Contrast & concession linkers',
    principle: 'Do the double check: is the second idea a surprise or the other side of a comparison (meaning), and is it followed by a clause, a noun/-ing, or a new sentence (grammar)? Although/while/whereas + clause; despite/unlike + noun; However, + new sentence.',
    reteach: 'Write one idea pair on the board (the rule is unpopular / classrooms are calmer) and join it four ways: Although + clause, Despite + noun phrase, ; however, + sentence, and while for side-by-side contrast (some students…, while others…). Make students circle the first verb after each linker to see the socket. Then show unlike (same-kind comparison) and contrary to (+ belief/expectation). Finish with TCAS-style options where grammar eliminates two and meaning decides between the last two.',
    activities: [
      'Socket sort race: teams get linker cards and sentence halves and must build grammatical joins; every wrong socket costs a point.',
      'One idea, four joints: pairs rewrite the same sentence with although, despite, however and whereas, then swap and check punctuation.'
    ]
  },
  'lk-cause': {
    name: 'Cause, result & purpose linkers',
    principle: 'Draw the arrow cause → result. Because/owing to/due to introduce the cause; so/therefore/as a result introduce the result; so that/in order to introduce the aim. Because + clause, because of + noun, so that + subject + can/could, in order to + base verb.',
    reteach: 'Draw a cause → result arrow for a real event (heavy rain → blocked roads) and place each linker on the correct end. Then add a third, dotted arrow for purpose (warnings → so that people could move cars). Contrast because/because of and so that/in order to with minimal pairs, and show that since + noun usually means time. Give students items where all four options take a noun so that only meaning can decide.',
    activities: [
      'Arrow cards: students hold up ← (cause) or → (result) or ⇢ (purpose) for each linker the teacher calls out.',
      'Headline chains: groups turn a news headline into a three-sentence chain using one cause, one result and one purpose linker.'
    ]
  },
  'lk-add': {
    name: 'Addition, example & source linkers',
    principle: 'As well as/in addition to + noun or -ing; Moreover,/In addition, + new sentence; also sits inside a clause and cannot join two nouns. Such as/like + example nouns. According to + a source, not a cause.',
    reteach: 'Show one list slot (waste ___ water pollution) and test also, in addition, furthermore and as well as in it: only the preposition-type linker survives. Then show the same idea as two sentences to license Moreover, and In addition,. Teach such as/like as “zoom-in” linkers and according to as a source label, contrasting it with owing to, contrary to and in addition to in a four-option item where all take a noun.',
    activities: [
      'Same bag or new receipt: students decide whether each addition linker adds to the same clause (+ noun) or starts a new sentence.',
      'Source detective: from a short news text, students underline every according to phrase and replace wrong linkers in a doctored version.'
    ]
  },
  'dt-other': {
    name: 'other / another / the other / others / each other',
    principle: 'Read the noun first. Another + singular (or number + plural); other + plural or uncountable; the other(s) = the rest of a known set; others alone as a pronoun, never before a noun; each other(’s) for a two-way action.',
    reteach: 'Build the grid on the board with three questions: one or more? any or the rest of a known set? noun after or not? Fill it with another, other, the other, the others, others. Use physical objects (two pens, then five pens) to act out the other vs the others. Add the special cases another six months and each other’s homes, and finish with the Some …; others … pattern.',
    activities: [
      'Photocard grid: students place cards on a grid and must describe them with the correct other-word.',
      'Error auction: students bid on phrases like “others students” and “another three days” and win points only for the correct ones.'
    ]
  },
  'dt-quant': {
    name: 'Quantifiers: both, either, neither, every, each, all, most, some',
    principle: 'Every/each/either/neither + singular noun and singular verb; both + plural (exactly two); all/most/some + plural or uncountable. Some alone can mean some people (Some argue…). Either is positive, neither is negative.',
    reteach: 'Sort quantifiers into three boxes: one at a time (every, each), exactly two (both, either, neither), groups and amounts (all, most, some). Drill the verb that follows each, including each of the + plural + singular verb. Then present paired sentences where either and neither are both grammatical and let the following context decide. Show Some argue… as a pronoun use.',
    activities: [
      'Two bowls: with two real objects, students act out both, either and neither while saying a full sentence.',
      'Verb vote: the teacher reads a quantifier + noun; students show a card with is or are.'
    ]
  },
  'dt-pron': {
    name: 'Pronoun reference & agreement',
    principle: 'Draw the arrow back to the real noun. One organisation or thing → it/its; people → they/their (also one person of unknown gender); generic one → one’s. Its ≠ it’s. In comparisons use that of (singular) and those of (plural).',
    reteach: 'Take a sentence with a distracting nearest noun (a group of twelve schools has changed ___ rules) and draw the arrow from the pronoun to the true subject, using the verb as proof. Contrast its/it’s and their/there/theirs with quick dictation. Then introduce that of / those of in comparisons with a price or sugar example, and practise keeping the generic one consistent.',
    activities: [
      'Arrow drawing: students draw arrows from every pronoun in a short news text to its noun and fix the two that point wrong.',
      'Compare without repeating: pairs rewrite comparisons (the sugar in tea vs the sugar in cola) using that of or those of.'
    ]
  },
  'pl-parallel': {
    name: 'Parallel structure',
    principle: 'Items joined by and/or/but/than must share one shape. Find the first item in the list (not just the neighbour before and) and copy its form: -ing, to + verb, base verb after a modal, noun phrase or adjective.',
    reteach: 'Write a list with a shared start (by collecting…, repairing… and ___) and show the “read each item alone after the shared start” test. Repeat with a noun-phrase list, an adjective list and a comparison with than. Then show a tempting non-parallel option that matches a different verb in the sentence, and ask students to find the true start of the list.',
    activities: [
      'Dance-line lists: groups receive a list with one broken item and must fix it before the music stops.',
      'Shared-start test: students cover the shared words and read each item aloud after them to prove the list is balanced.'
    ]
  },
  'pl-correl': {
    name: 'Correlatives: both … and, either … or, neither … nor, not only … but also',
    principle: 'The pairs are fixed. Look right of the blank for the partner (nor → neither, but also → not only), then match the shapes after each half. With or/nor, the verb agrees with the nearer subject.',
    reteach: 'Put the four pairs on the board and show that the second half chooses the first. Then give sentences where each half is followed by a different shape (not only to win … but also learning) and let students fix them. Finish with nearer-subject agreement using neither … nor with the singular and plural subject in both orders.',
    activities: [
      'Partner hunt: students get half-pair cards and must find their partner in the room, then make a balanced sentence together.',
      'Seesaw sentences: pairs write a correlative sentence; the class checks that both sides of the seesaw have the same shape.'
    ]
  },
  'pl-coord': {
    name: 'Coordinators (FANBOYS) & joining sentences',
    principle: 'Join two full sentences with a comma + for/and/nor/but/or/yet/so, a semicolon or a full stop — never a comma alone. So = result, for = reason, yet = surprising contrast, nor = second negative with question order.',
    reteach: 'Show a comma splice and its three fixes (full stop, semicolon, comma + coordinator). Then map each FANBOYS word to a relation, spending the most time on so vs for (arrow direction) and nor (question order). Show that however is not a coordinator and needs a semicolon, and that Yet can open a sentence in formal writing.',
    activities: [
      'Coupling cards: students join pairs of sentence strips using only FANBOYS cards and must justify the relation.',
      'Splice doctor: groups find and fix comma splices in a short paragraph using three different repairs.'
    ]
  }
});
