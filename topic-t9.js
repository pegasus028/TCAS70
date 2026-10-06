/* ===========================================================================
   TCAS70 — SYSTEM 09 · Word Forms & Word Order  (topic-t9.js)
   Text Completion items 61–75: the word-form / word-order family is the single
   biggest grammar point on the paper (about 13 of 60 items, TCAS66–69).
   Core technique: SLOT ANALYSIS — read the words around the gap and name the
   job the gap must do before you look at the options.
   =========================================================================== */

/* ---------------------------------------------------------- shared passages */
var T9_P_HAZE = 'Every dry season, a grey haze settles over Chiang Mai. Much of it is PM2.5, dust so fine that it can pass through the lungs and into the blood. Long-term ___(1)___ to this kind of air has been linked to heart and lung disease. On the worst days, the air can become ___(2)___ polluted, especially in the early morning before the wind picks up. Masks cannot protect children completely, but a well-fitted one offers a ___(3)___ level of protection, and many schools now keep students indoors when the air quality index passes 100.';

var T9_P_AIVIDEO = 'Text-to-video apps can now produce clips that look ___(1)___ real. For many viewers, the ___(2)___ between a filmed event and a generated one has almost disappeared. Researchers warn that this could seriously ___(3)___ public trust in all video, including genuine footage of floods and earthquakes. Some platforms now add labels to AI content, but the labels are easy to remove and are applied ___(4)___: one app may label a clip while another shows the same clip with no warning at all. Media-literacy teachers argue that the most ___(5)___ defence is a simple habit: pause, check the source, and ask who benefits before you share.';

var T9_P_WALK = 'Researchers at Riverbank University tracked more than a thousand ___(1)___ through their first year of secondary school. Students who took a ___(2)___ walk before class concentrated better than those who went straight to their desks. They also reported lower levels of smartphone ___(3)___, perhaps because they spent those minutes talking to friends instead of scrolling.';

var T9_P_FLOOD = 'In late September 2026, more than 300 millimetres of rain fell on parts of Bangkok in just ___(1)___. Warnings reached residents through a ___(2)___ system called cell broadcast, which sends one message to every phone in an area at the same time. Emergency planners stress that a flood warning ___(3)___ a message but the start of a countdown. The problem is that many people ___(4)___ read alerts from senders they do not recognise, so the system works only if the public learns to trust it. The city said draining would take two to three days after the rain stopped, and ___(5)___ barriers were reinforced in several districts.';

var T9_P_SURVEY = 'When a survey of 2,000 students at a group of Bangkok schools was published, many teachers were ___(1)___: almost half of the students questioned admitted using chatbots to write assignments. Yet the students themselves seemed ___(2)___ relaxed. “We use it like a dictionary,” one Grade 11 student explained, looking ___(3)___ at the reporter, as if the question itself were strange.';

var T9_P_RAIN = 'More than 300 millimetres of rain fell on parts of Bangkok in 48 hours in late September 2026. Rarely ___(1)___ so much water arrive so quickly, and ___(2)___ the drains that traffic was blocked at 37 locations across the city. Only when the rain finally stopped ___(3)___ to fall, and even then officials warned that draining would take two to three days.';

var T9_P_PHONE = 'A phone does not have to ring to distract you. In one experiment at Riverbank University, students who kept their phones on the desk, even switched off and face down, performed ___(1)___ on memory tests than students who left their phones in another room. The researchers were ___(2)___ by how large the gap was. Not only ___(3)___ lower, but they were also unaware that anything had affected them. It seems that ___(4)___ the phone is to you, the more attention it quietly steals. At the end of the session, the students whose phones were out of sight even looked ___(5)___ than the others.';

var T9 = {
  id: 't9', n: 9, code: 'System 09', art: 'layers',
  name: 'Word Forms & Word Order',
  cefr: 'B2–C1',
  blurb: 'Slot analysis: read the gap’s neighbours, name the job, then pick the form. The biggest grammar family in Text Completion, from “youth violence” to “Rarely has the city seen”.',
  levels: []
};

/* =========================================================== LEVEL 1 FORMS */
T9.levels.push({
  id: 't9l1', n: 1, name: 'Forms', cefr: 'B2',
  blurb: 'Four options, one word family. The gap’s neighbours tell you which member of the family gets the seat.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't9l1s1', name: 'Slot analysis: which part of speech fits', cefr: 'B2', tag: 'wf-pos',
      theory: {
        key: 'Before you read the options, read the <strong>slot</strong>: the words on each side of the gap tell you whether it needs a noun, an adjective, an adverb or a verb.',
        body: [
          'When TCAS prints four forms of one word (<em>effect / effective / effectively / effectiveness</em>), all four share one root and one core meaning. Meaning cannot separate them; <strong>grammar position</strong> can. Every English sentence is a row of seats, and each seat only takes one kind of word. So the fastest method is to ignore the options at first and ask: <em>what kind of word does this seat need?</em>',
          '<strong>The five slot rules.</strong> (1) <em>a / the / his / adjective</em> + ___ + <em>of / verb / full stop</em> → <strong>noun</strong> (<em>raised concerns about its ___</em> → efficiency). (2) <em>a / the</em> + ___ + <em>noun</em> → <strong>adjective</strong> (<em>a ___ level</em> → reasonable). (3) ___ + <em>adjective</em> → <strong>adverb</strong> (<em>stand out as ___ unusual</em> → truly). (4) <em>verb (+ object)</em> + ___, or ___ + <em>verb</em> → <strong>adverb</strong> (<em>can ___ affect their study</em> → negatively). (5) <em>can / will / to</em> + ___ → <strong>base verb</strong>.',
          '<strong>The procedure.</strong> Step 1: cover the options. Step 2: read three words left and three words right of the gap. Step 3: name the slot (N, Adj, Adv, V). Step 4: uncover the options and delete every form that does not fit. Usually one survives. If two survive (two nouns, say), Step 5: choose by meaning — <em>creation</em> is a thing you made, <em>creativity</em> is the ability to make things.',
          'The skill TCAS rewards is noticing <strong>which word the gap is really attached to</strong>. In “people think and remember ___ when their phones are nearby”, the gap is not describing “when”; it describes <em>how they think and remember</em>, so it needs an adverb. Always find the gap’s partner, even when it is three words away.'
        ],
        simple: [
          'Each gap is a seat for one kind of word. Look left and right of the gap before you look at the answers.',
          '<em>the ___ of</em> → noun. <em>a ___ problem</em> → adjective. <em>___ unusual</em> → adverb. <em>can ___</em> → verb.',
          'If two answers are the same kind of word, choose the one with the right meaning.'
        ],
        thai: 'ข้อ word form ใน Text Completion ตัวเลือกทั้ง 4 มาจากคำตระกูลเดียวกัน ความหมายจึงช่วยน้อย ให้ดู “ตำแหน่ง” ของช่องว่าง (slot analysis) ก่อนดูตัวเลือก: หลัง a/the/คำคุณศัพท์ และก่อน of หรือกริยา ต้องเป็นคำนาม, หลัง a/the และก่อนคำนาม ต้องเป็นคำคุณศัพท์, หน้าคำคุณศัพท์หรือขยายกริยา ต้องเป็นคำกริยาวิเศษณ์ (adverb) กับดักคือช่องว่างอาจขยายคำที่อยู่ห่างออกไปหลายคำ เช่น think and remember ___ ต้องใช้ adverb เพราะขยายกริยา ไม่ใช่คำที่อยู่ติดกัน',
        examples: [
          { s: 'Long-term <strong>exposure</strong> to smoke damages the lungs.', g: 'adjective + ___ + to → noun.' },
          { s: 'The air became <strong>dangerously</strong> polluted.', g: '___ + adjective → adverb.' },
          { s: 'The council gave a <strong>reasonable</strong> explanation.', g: 'a + ___ + noun → adjective.' },
          { s: 'Stress can <strong>negatively</strong> affect sleep.', g: 'can + ___ + verb → adverb sits inside the verb phrase.' },
          { s: 'Students recalled the lesson <strong>less accurately</strong> after a late night.', g: 'the gap describes the verb “recalled”, three words to the left.' }
        ],
        trap: 'The word right next to the gap is not always its partner. In “think and remember ___ when…”, a hasty reader sees “when” and grabs an adjective. Find the word the gap describes (here the verbs), then choose. Dodge: draw an arrow from the gap to the word it modifies before you choose.',
        analogy: { title: 'Tetris seats', text: 'A Tetris gap has a shape, and only one piece fits it, however much you like the other pieces. The four options are the same block turned four ways: noun, adjective, adverb, verb. Look at the hole first, then rotate the word until it fits.' },
        map: { center: 'Slot analysis', branches: [
          { label: 'Noun seat', leaves: ['the ___ of', 'adjective + ___', 'its ___ (end of clause)'] },
          { label: 'Adjective seat', leaves: ['a ___ + noun', 'the most ___ + noun'] },
          { label: 'Adverb seat', leaves: ['___ + adjective', 'verb + object + ___', 'can ___ affect'] },
          { label: 'Procedure', leaves: ['cover the options', 'three words each side', 'name the seat', 'then check meaning'] }
        ] },
        chant: { title: 'Name the Seat', beat: 'clap-clap-snap (4/4)', lines: [
          'Cover the choices, look left, look right,',
          'Name the seat before you bite.',
          'The and of? A noun sits there,',
          'A before a noun? Adjective’s chair.',
          'Before an adjective, the -ly goes,',
          'After a verb, the -ly shows.',
          'Two forms left? Then check the sense,',
          'Seat, then meaning: that’s the defence!'
        ] }
      },
      items: [
        { id: 't9l1s1-1', type: 'cloze', tag: 'wf-pos', level: 'B2', passage: T9_P_HAZE, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['expose', 'exposed', 'exposure', 'exposing'], answer: 2,
          hint: 'Look at the word before the gap and the word after it. What kind of word sits between them?',
          why: 'After the adjective “Long-term” and before “to”, the gap is the subject of “has been linked”, so it must be a noun: <em>exposure</em>. “Exposing” is the near miss, but a gerund would need a direct object (“exposing yourself to…”) and cannot be described by an adjective like “long-term”. “Expose” and “exposed” are verb forms.' },

        { id: 't9l1s1-2', type: 'cloze', tag: 'wf-pos', level: 'B2', passage: T9_P_HAZE, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['danger', 'endanger', 'dangerous', 'dangerously'], answer: 3,
          hint: 'The gap comes straight before an adjective. What kind of word describes an adjective?',
          why: 'The gap describes the adjective “polluted” (how polluted?), so it needs an adverb: <em>dangerously</em> polluted. “Dangerous” is the tempting adjective, but two adjectives cannot stack here after “become” (“dangerous polluted” is not English). “Danger” is a noun and “endanger” is a verb.' },

        { id: 't9l1s1-3', type: 'cloze', tag: 'wf-pos', level: 'B2', passage: T9_P_HAZE, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['reason', 'reasoned', 'reasonable', 'reasonably'], answer: 2,
          hint: 'The gap sits between “a” and a noun. Which seat is that?',
          why: 'Between the article “a” and the noun “level”, we need an adjective: a <em>reasonable</em> level (= a fair, acceptable level). “Reasonably” is an adverb and would need an adjective after it (“a reasonably high level”). “Reasoned” is an adjective but means “based on careful thinking” (a reasoned argument), which does not fit a level of protection.' },

        { id: 't9l1s1-4', type: 'spot', tag: 'wf-pos', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Researchers found that students', 'who slept poorly', 'performed significant worse', 'on memory tests the next day.'],
          answer: 2, fix: 'performed significantly worse',
          hint: 'Check each word that describes another word. Is it the right kind of describer?',
          why: '“Worse” here describes how they performed, and a word that intensifies it must be an adverb: <em>significantly</em> worse. The adjective “significant” can only describe a noun (a significant drop). “Slept poorly” is correct because “poorly” describes the verb “slept”.' },

        { id: 't9l1s1-5', type: 'sort', tag: 'wf-pos', level: 'B2',
          stem: 'What kind of word does each gap need? (The base word is in brackets.)',
          bins: [
            { key: 'n', label: 'Noun', hint: 'the ___ of / adjective + ___' },
            { key: 'adj', label: 'Adjective', hint: 'a ___ + noun / linking verb + ___' },
            { key: 'adv', label: 'Adverb', hint: '___ + adjective / describes a verb' },
            { key: 'v', label: 'Verb', hint: 'after can / must / to' }
          ],
          items: [
            { text: 'the ___ of the haze (thick)', bin: 'n' },
            { text: 'long-term ___ to smoke (expose)', bin: 'n' },
            { text: 'a ___ rise in PM2.5 (sharp)', bin: 'adj' },
            { text: 'The sky looked ___ this morning. (clear)', bin: 'adj' },
            { text: 'PM2.5 rose ___ in March. (sharp)', bin: 'adv' },
            { text: 'a ___ serious problem (surprise)', bin: 'adv' },
            { text: 'Masks can ___ the risk. (less)', bin: 'v' },
            { text: 'Schools must ___ outdoor lessons. (short)', bin: 'v' }
          ],
          hint: 'Name the seat from the neighbours first; the base word only tells you the family.',
          why: 'Nouns: thickness, exposure. Adjectives: sharp (before a noun), clear (after the linking verb “looked”). Adverbs: sharply (describes “rose”), surprisingly (before an adjective). Verbs: lessen, shorten (after a modal). The same family, sharp, needs two different seats in two different sentences.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't9l1s2', name: 'Word families & suffixes', cefr: 'B2', tag: 'wf-family',
      theory: {
        key: 'A suffix is a <strong>part-of-speech label</strong> stuck on the end of a word; read the label, then check the meaning, because two members of a family can wear the same label.',
        body: [
          'English builds families from one root: <em>identity, identical, identically, identify, identification</em>. The root carries the meaning; the <strong>suffix</strong> tells you the job. Noun labels: <em>-tion/-sion, -ment, -ness, -ity, -ance/-ence, -ism, -ship, -er/-or/-ist</em>. Adjective labels: <em>-al, -ous, -ive, -ful, -less, -able/-ible, -ic, -ent/-ant, -y</em>. Verb labels: <em>-ise/-ize, -ify, -en, -ate</em>. Adverb label: <em>-ly</em> added to an adjective (<em>careful → carefully</em>).',
          '<strong>Prefixes are different</strong>: <em>un-, in-, im-, dis-, mis-, ir-</em> change the <em>meaning</em> (often to the opposite) but not the job. That is why TCAS likes a pair such as <em>consistent / inconsistent</em>: both fit the seat, so only the context decides. The exception is <em>en-</em>, which makes verbs: <em>danger → endanger, able → enable, large → enlarge</em>.',
          '<strong>How TCAS tests it.</strong> The four options are usually one family, printed shortest to longest (<em>identity / identical / identically / identification</em>). Slot analysis removes two. The last two often share a label: two nouns (<em>identity</em> = who you are; <em>identification</em> = the act of identifying, or an ID card), or an adjective with and without a negative prefix. Step 5 of slot analysis — meaning — does the rest.',
          '<strong>Two -ly traps.</strong> Some -ly words are adjectives, not adverbs: <em>friendly, lovely, costly, lonely, likely, elderly</em> (<em>a costly mistake</em>). And a few adjectives change spelling before -ly: <em>true → truly, whole → wholly, full → fully</em>; adjectives in -ic add -ally (<em>basic → basically</em>), with the one famous exception <em>publicly</em>.'
        ],
        simple: [
          'The end of a word tells you its job. <em>-tion, -ment, -ness, -ity</em> = noun. <em>-al, -ous, -ive, -able</em> = adjective. <em>-ise, -ify, -en</em> = verb. <em>-ly</em> = usually adverb.',
          'The start of a word (<em>un-, in-, dis-</em>) changes the meaning, not the job.',
          'If two answers have the same job, read the passage again and choose the meaning that fits.'
        ],
        thai: 'คำตระกูลเดียวกันแยกหน้าที่ด้วย suffix ท้ายคำ: -tion, -ment, -ness, -ity เป็นคำนาม; -al, -ous, -ive, -able เป็นคำคุณศัพท์; -ise, -ify, -en เป็นกริยา; -ly มักเป็น adverb ส่วน prefix เช่น un-, in-, dis- เปลี่ยนความหมาย (มักเป็นตรงข้าม) แต่ไม่เปลี่ยนหน้าที่ กับดักของ TCAS คือเหลือตัวเลือกสองตัวที่หน้าที่เดียวกัน เช่น identity กับ identification หรือ consistent กับ inconsistent ต้องตัดสินจากความหมายในบริบท และระวังคำลงท้าย -ly ที่เป็นคำคุณศัพท์ เช่น friendly, costly, likely',
        examples: [
          { s: 'Language is part of a child’s <strong>identity</strong>.', g: 'noun: who you are (not <em>identification</em>, the act of identifying).' },
          { s: 'Parents questioned the <strong>reliability</strong> of the AI detector.', g: 'the ___ of → noun; <em>reliance</em> means dependence, wrong sense.' },
          { s: 'The results were <strong>inconsistent</strong>: some classes improved, others did not.', g: 'adjective seat; the colon explains the negative meaning.' },
          { s: 'It was a <strong>costly</strong> mistake.', g: '-ly, but an adjective: it describes the noun “mistake”.' }
        ],
        trap: 'Two options survive slot analysis and you pick the one that “looks more advanced”. Longer is not smarter: <em>identification</em> is longer than <em>identity</em>, and wrong in “language is part of her ___”. Dodge: paraphrase the sentence in simple Thai or English with each survivor and keep the one that says what the passage means.',
        analogy: { title: 'Name tags at the family party', text: 'Everyone at the party shares a surname (the root), but each wears a name tag saying what they do: -tion the noun, -al the adjective, -ly the adverb. When two cousins wear the same tag, you stop reading tags and ask them a question: what do you actually mean?' },
        map: { center: 'Word families', branches: [
          { label: 'Noun tags', leaves: ['-tion / -sion', '-ment, -ness', '-ity, -ance'] },
          { label: 'Adjective tags', leaves: ['-al, -ous, -ive', '-able, -ful, -less'] },
          { label: 'Verb / adverb tags', leaves: ['-ise, -ify, -en', 'en- makes verbs', '-ly (usually adverb)'] },
          { label: 'Traps', leaves: ['un-/in- flip meaning', 'costly, friendly = adjectives', 'two nouns: check meaning'] }
        ] },
        moves: [
          { move: 'Tap the top of your head', says: 'Root = the meaning (ident-, rely-, create-)' },
          { move: 'Tap your ankle', says: 'Suffix = the job tag at the end (-ity, -al, -ly)' },
          { move: 'Flip your hand palm-down to palm-up', says: 'Prefix un-/in- flips the meaning, not the job' },
          { move: 'Point at the gap, then at your ear', says: 'Seat first, then listen for the meaning' }
        ]
      },
      items: [
        { id: 't9l1s2-1', type: 'cloze', tag: 'wf-family', level: 'B2',
          passage: 'Teachers across the region are asking what happens when students let chatbots write every essay. The worry is not only about cheating. If a machine does all the imagining, students’ own ___(1)___ may slowly weaken, like a muscle that is never used.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['creative', 'creation', 'creativity', 'creatively'], answer: 2,
          hint: 'Name the seat from its neighbours first. If two options survive, let the muscle comparison decide the meaning.',
          why: 'After “students’ own” and before the verb “may weaken”, we need a noun. Both <em>creation</em> and <em>creativity</em> are nouns, but a creation is a thing someone has made; the ability to imagine, which can weaken “like a muscle”, is <em>creativity</em>. “Creative” is an adjective and “creatively” an adverb.' },

        { id: 't9l1s2-2', type: 'cloze', tag: 'wf-family', level: 'B2',
          passage: 'Last term, a Bangkok school tested an AI detector on 300 essays. The tool wrongly flagged 40 honest essays as machine-written, and parents soon began to question the ___(1)___ of the tool.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['reliance', 'reliable', 'reliably', 'reliability'], answer: 3,
          hint: 'The seat is “the ___ of”, a noun seat. Two options are nouns: what exactly are the parents doubting?',
          why: 'The seat “the ___ of” needs a noun, and parents are doubting how trustworthy the detector is: its <em>reliability</em>. “Reliance” is also a noun but means dependence (“our reliance on phones”), which does not fit. “Reliable” is an adjective and “reliably” an adverb.' },

        { id: 't9l1s2-3', type: 'cloze', tag: 'wf-family', level: 'B2',
          passage: 'Songkran began as a quiet ___(1)___ ceremony in which younger people poured scented water over the hands of their elders to ask for blessings. Today it is also a huge street festival that draws visitors from all over the world.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['tradition', 'traditional', 'traditionally', 'traditionalist'], answer: 1,
          hint: 'The gap describes the noun “ceremony”. Which suffix labels a describing word?',
          why: 'Between “a quiet” and the noun “ceremony” we need an adjective with the ordinary meaning “old and customary”: <em>traditional</em>. “Traditionalist” describes a person who wants to keep old ways, not a ceremony. “Tradition” is a noun and “traditionally” an adverb.' },

        { id: 't9l1s2-4', type: 'sort', tag: 'wf-family', level: 'B2',
          stem: 'Read the suffix. Which part of speech is each word?',
          bins: [
            { key: 'n', label: 'Noun', hint: '-ity, -ence, -ment…' },
            { key: 'adj', label: 'Adjective', hint: '-able, -al, -ly (sometimes!)' },
            { key: 'v', label: 'Verb', hint: '-ise, -ate, -en' },
            { key: 'adv', label: 'Adverb', hint: 'adjective + -ly' }
          ],
          items: [
            { text: 'employability', bin: 'n' },
            { text: 'resilience', bin: 'n' },
            { text: 'sustainable', bin: 'adj' },
            { text: 'costly', bin: 'adj' },
            { text: 'friendly', bin: 'adj' },
            { text: 'prioritise', bin: 'v' },
            { text: 'deteriorate', bin: 'v' },
            { text: 'widen', bin: 'v' },
            { text: 'seamlessly', bin: 'adv' },
            { text: 'increasingly', bin: 'adv' }
          ],
          hint: 'Not every -ly word is an adverb. Ask: is the -ly added to an adjective or to a noun?',
          why: '<em>Costly</em> and <em>friendly</em> end in -ly but are adjectives, because -ly is added to the nouns cost and friend (a costly repair, a friendly tutor). <em>Seamlessly</em> and <em>increasingly</em> add -ly to adjectives, so they are adverbs. -ise, -ate and -en make verbs; -ity and -ence make nouns.' },

        { id: 't9l1s2-5', type: 'choose', tag: 'wf-family', level: 'B2+',
          stem: 'Critics say the new phone rule is ______ because teachers cannot check every student’s bag every day.',
          options: ['practical', 'practically', 'impractical', 'practicality'], answer: 2,
          hint: 'Two options fit the seat after “is”. Does the reason after “because” sound positive or negative?',
          why: 'After the linking verb “is” we need an adjective, which leaves <em>practical</em> and <em>impractical</em>. The reason (“teachers cannot check every bag”) is a problem, and “critics” are complaining, so the rule is <em>impractical</em> (not workable in real life). “Practically” is an adverb and “practicality” a noun.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't9l1s3', name: 'Confusables: affect/effect, rise/raise, like/likely', cefr: 'B2+', tag: 'wf-confuse',
      theory: {
        key: 'Confusable pairs are split by <strong>part of speech</strong> or by <strong>“does it take an object?”</strong> — decide the job first and the spelling chooses itself.',
        body: [
          '<strong>affect / effect.</strong> <em>Affect</em> is the verb (A for Action): <em>stress can negatively affect sleep</em>. <em>Effect</em> is the noun (E for End result): <em>have a positive effect on</em>, <em>side effects</em>. So “negatively ___” wants the verb, and “have positive ___s” wants the noun. (Rare exception: the verb <em>effect</em> means “to bring about”, as in <em>effect change</em>; TCAS has not tested it.)',
          '<strong>rise / raise.</strong> <em>Rise</em> (rose, risen) has no object: prices rise, the river rises. <em>Raise</em> (raised, raised) needs an object: the shop raised its prices, students raise their hands, raise concerns. Ask: <em>raise what?</em> If there is no “what”, it must be rise. Same logic for <em>fall</em> (no object: fell, fallen) and <em>fail</em> (fail an exam, fail to notice).',
          '<strong>like / alike / likely.</strong> <em>Like</em> is a preposition (= similar to, or = such as) and needs a noun after it. <em>Alike</em> is an adjective used after a verb (<em>the twins look alike</em>) or means “equally” (<em>students and teachers alike</em>). <em>Likely</em> is an adjective (<em>more likely to catch colds</em>) and can also mean “probably” (<em>the cause was likely environmental</em>).',
          '<strong>economic / economical</strong> (of the economy vs saving money), <strong>historic / historical</strong> (important in history vs about the past), <strong>sensible / sensitive</strong>, <strong>advice (n) / advise (v)</strong>, <strong>lose (v) / loose (adj)</strong>. For every pair, the procedure is the same: name the seat, then ask the one question that splits the pair.'
        ],
        simple: [
          '<em>affect</em> = verb (to change something). <em>effect</em> = noun (the result).',
          '<em>rise</em> = go up by itself. <em>raise</em> = lift something up. Ask “raise what?”',
          '<em>like</em> + noun (similar to). <em>alike</em> = the same. <em>likely to</em> = probably will.'
        ],
        thai: 'คำที่หน้าตาคล้ายกันมักต่างกันที่หน้าที่ทางไวยากรณ์: affect เป็นกริยา (ส่งผลต่อ) ส่วน effect เป็นคำนาม (ผลกระทบ) เช่น negatively affect แต่ have a positive effect on; rise (rose, risen) ไม่มีกรรม ส่วน raise ต้องมีกรรม; like + คำนาม, alike แปลว่าเหมือนกัน, likely to แปลว่ามีแนวโน้มจะ กับดักของ TCAS คือให้ทั้งคำผิดหน้าที่และรูปผสมผิด ๆ เช่น negatively effect ให้ถามก่อนว่าช่องนี้ต้องการกริยาหรือคำนาม และกริยานั้นมีกรรมหรือไม่',
        examples: [
          { s: 'Late nights can <strong>seriously affect</strong> your memory.', g: 'adverb + verb → affect.' },
          { s: 'Exercise has a <strong>positive effect</strong> on mood.', g: 'adjective + noun → effect.' },
          { s: 'Rice prices <strong>have risen</strong> by 20%.', g: 'no object → rise, past participle risen.' },
          { s: 'The canteen <strong>raised</strong> its prices.', g: 'object (its prices) → raise.' },
          { s: 'Tired students are more <strong>likely</strong> to catch colds.', g: 'be likely to + verb.' }
        ],
        trap: 'TCAS mixes the two halves of a phrase: <em>negative affect / negatively effect / negatively affect / negative effect</em>. Each option looks half right. Dodge: fix the verb-or-noun question first (what comes before the gap: <em>can</em> or <em>have</em>?), then make the describer agree: adverb with the verb <em>affect</em>, adjective with the noun <em>effect</em>.',
        analogy: { title: 'The lift and the balloon', text: 'A balloon <em>rises</em> on its own; nobody has to carry it. A lift <em>raises</em> people: it always carries something. If the sentence has passengers (an object), use raise. If it floats up by itself, use rise.' },
        map: { center: 'Confusables', branches: [
          { label: 'affect / effect', leaves: ['affect = verb', 'effect = noun', 'negatively affect', 'have an effect on'] },
          { label: 'rise / raise', leaves: ['rise: no object', 'raise: needs object', 'rose, risen / raised'] },
          { label: 'like family', leaves: ['like + noun', 'look alike', 'likely to + verb'] },
          { label: 'More pairs', leaves: ['economic / economical', 'fail / fall', 'advice / advise'] }
        ] },
        story: { title: 'Nong Bot’s Side Affects', panels: [
          { who: 'Nong Bot', text: 'Daily tip! Energy drinks can have serious side affects. Beep!' },
          { who: 'Fah', text: 'Bot, “side affects”? Effect is the thing. Affect is the action.' },
          { who: 'Nong Bot', text: 'Understood. Energy drinks can seriously effect you. Beep!' },
          { who: 'Pun', text: 'Now it sounds like the drink is going to build me. Like, effect a new Pun.' },
          { who: 'T.Chris', text: 'Try the question test. Is there a “have” or an adjective before it? Noun: effect. Is there a “can” or an adverb? Verb: affect.' },
          { who: 'Nong Bot', text: 'Final version: energy drinks can seriously affect sleep, and too many have serious effects. My circuits feel… affected.' }
        ], moral: 'Adverb + affect (verb); adjective + effect (noun).' }
      },
      items: [
        { id: 't9l1s3-1', type: 'cloze', tag: 'wf-confuse', level: 'B2+',
          passage: 'Gaming until 2 a.m. does not just leave you tired in first period. Sleep scientists say that regular late nights can ___(1)___ your memory, because the brain files away the day’s learning while you sleep.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['serious effect', 'serious affect', 'seriously affect', 'seriously effect'], answer: 2,
          hint: 'The gap comes after “can”. Does “can” need a verb or a noun?',
          why: 'After the modal “can” we need a verb, and the verb meaning “to change or influence” is <em>affect</em>; a verb is described by an adverb, so <em>seriously affect</em>. “Seriously effect” uses the noun spelling (the rare verb <em>effect</em> means “to bring about”, which makes no sense with “your memory”). The two “serious” options put an adjective and noun where a verb must go.' },

        { id: 't9l1s3-2', type: 'cloze', tag: 'wf-confuse', level: 'B2+',
          passage: 'Because of the long dry season, the price of rice ___(1)___ by almost 20% since January, and many families are now buying cheaper brands.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['has rose', 'has risen', 'has raised', 'has arisen'], answer: 1,
          hint: 'Ask “raised what?” Is there an object after the gap?',
          why: 'Nothing is lifted here; the price goes up by itself, so we need the verb with no object, <em>rise</em>, in the present perfect (“since January”): <em>has risen</em>. “Has raised” needs an object (“has raised its prices”). “Has rose” uses the past simple instead of the participle, and “has arisen” means “has appeared” (problems arise), not “has gone up”.' },

        { id: 't9l1s3-3', type: 'cloze', tag: 'wf-confuse', level: 'B2',
          passage: 'Doctors have found that teenagers who sleep less than six hours a night are far more ___(1)___ to catch colds than those who sleep eight hours or more.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['like', 'alike', 'likely', 'likeness'], answer: 2,
          hint: 'Look at what follows the gap: “to catch”. Which word forms the pattern “be ___ to do”?',
          why: 'The pattern is <em>be (more) likely to + verb</em> = to have a greater chance of doing something. “Like” is a preposition and needs a noun after it, “alike” means “similar to each other”, and “likeness” is a noun meaning similarity, so none of them can be followed by “to catch”.' },

        { id: 't9l1s3-4', type: 'spot', tag: 'wf-confuse', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Many students', 'fall to notice', 'how much study time', 'they lose to their phones.'],
          answer: 1, fix: 'fail to notice',
          hint: 'Two verbs in this sentence have famous look-alike twins. Check both.',
          why: '<em>Fail to do</em> something means not to do it; <em>fall</em> means to drop down and is never followed by “to notice”. “Lose” is correct here: it is the verb (to stop having something), while “loose” is an adjective meaning not tight.' },

        { id: 't9l1s3-5', type: 'choose', tag: 'wf-confuse', level: 'B2+',
          stem: 'Which sentence is correct?',
          options: [
            'An economic car uses very little fuel.',
            'Tourism brings great economical benefits.',
            'An economical car uses very little fuel.',
            'The flood caused serious economical damage.'
          ], answer: 2,
          hint: 'One of these words is about money that you save; the other is about a country’s economy.',
          why: '<em>Economical</em> means “saving money or fuel”, so an economical car uses little fuel. <em>Economic</em> means “connected with the economy”, so the second and fourth sentences need <em>economic</em> benefits and <em>economic</em> damage. The first sentence swaps them the other way.' }
      ]
    }
  ],
  check: { id: 't9l1ck', name: 'Systems Check · Forms', items: [
    { id: 't9l1ck-1', type: 'cloze', tag: 'wf-pos', level: 'B2+', passage: T9_P_AIVIDEO, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['complete', 'completion', 'completely', 'completeness'], answer: 2,
      hint: 'The gap is in front of an adjective, after the linking verb “look”.',
      why: 'The gap describes the adjective “real” (how real?), so it needs an adverb: look <em>completely</em> real. “Complete” is an adjective and cannot describe another adjective here; “completion” and “completeness” are nouns.' },
    { id: 't9l1ck-2', type: 'cloze', tag: 'wf-family', level: 'B2+', passage: T9_P_AIVIDEO, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['differ', 'different', 'difference', 'differently'], answer: 2,
      hint: 'The seat is “the ___ between A and B”, and it is the subject of “has disappeared”.',
      why: 'After “the” and before “between”, the gap is the subject of “has almost disappeared”, so it must be a noun: the <em>difference</em> between a filmed event and a generated one. “Differ” is a verb, “different” an adjective and “differently” an adverb.' },
    { id: 't9l1ck-3', type: 'cloze', tag: 'wf-confuse', level: 'B2+', passage: T9_P_AIVIDEO, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['affect', 'effect', 'effective', 'affection'], answer: 0,
      hint: 'After “could seriously”, is this seat a verb or a noun? Then match the spelling.',
      why: 'After “could” and the adverb “seriously” we need a verb meaning “to damage or influence”: <em>affect</em> public trust. “Effect” as a verb means “to bring about”, which makes no sense with “public trust”. “Effective” is an adjective, and “affection” is a noun meaning love.' },
    { id: 't9l1ck-4', type: 'cloze', tag: 'wf-family', level: 'C1', passage: T9_P_AIVIDEO, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['consistent', 'consistently', 'inconsistent', 'inconsistently'], answer: 3,
      hint: 'Two things to decide: the seat after “are applied”, and whether the colon describes something good or bad.',
      why: 'The gap describes how the labels “are applied”, so it needs an adverb. The colon explains that one app labels a clip and another does not, so the labels are applied <em>inconsistently</em>. “Consistently” is the right form with the opposite meaning, and the two adjectives cannot describe the verb.' },
    { id: 't9l1ck-5', type: 'cloze', tag: 'wf-pos', level: 'B2+', passage: T9_P_AIVIDEO, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['power', 'powerful', 'powerless', 'powerfully'], answer: 1,
      hint: 'The seat is “the most ___ + noun”. Then ask whether the teachers praise the habit or criticise it.',
      why: '“The most ___ defence” needs an adjective before the noun, which leaves <em>powerful</em> and <em>powerless</em>. The teachers recommend the habit, so it is the most <em>powerful</em> defence; “powerless” means having no power and contradicts the advice. “Power” is a noun and “powerfully” an adverb.' },
    { id: 't9l1ck-6', type: 'choose', tag: 'wf-confuse', level: 'B2+',
      stem: 'Which sentence is correct?',
      options: [
        'Ticket prices raised again this year.',
        'The organisers rose ticket prices again.',
        'The heavy rain caused the river to rise.',
        'The river has raised by two metres since Monday.'
      ], answer: 2,
      hint: 'For each sentence, ask “raised what?” Does the verb have an object?',
      why: 'A river goes up by itself, with no object, so <em>rise</em> is right: caused the river to rise. Prices do not lift themselves, so the first sentence needs “Ticket prices rose” (or “were raised”). “The organisers rose ticket prices” needs the object verb <em>raised</em>, and “the river has raised” needs <em>has risen</em>.' }
  ] }
});

/* ========================================================== LEVEL 2 PHRASES */
T9.levels.push({
  id: 't9l2', n: 2, name: 'Phrases', cefr: 'B2+',
  blurb: 'Build the noun phrase from right to left, line up adjectives in the right order, and park every adverb in its legal space.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't9l2s1', name: 'Noun phrases & compounds', cefr: 'B2+', tag: 'wo-np',
      theory: {
        key: 'In an English noun phrase the <strong>head noun comes last</strong>; everything in front of it is a describer, and describers do not take a plural -s.',
        body: [
          'English noun phrases grow to the <strong>left</strong>. Start with the head: <em>violence</em>. What kind? <em>youth violence</em>. Where? <em>school youth violence</em>. The last word is the real noun (it controls the verb and takes the plural); the words in front are describers, even when they are nouns themselves. That is why TCAS’s answer was <em>youth violence</em> (noun + noun), not <em>youth violent</em> or <em>young violence</em>: the phrase needs a head noun, and “youth” is the normal noun modifier for this topic.',
          '<strong>Describers are singular.</strong> A noun used as a describer loses its plural: a <em>shoe</em> shop, a <em>ten-minute</em> walk, a <em>five-star</em> hotel, a <em>300-page</em> report. In age compounds the whole thing is hyphenated and only the <em>last</em> word can be plural: <em>a seven-year-old girl</em> (describer, no -s anywhere) vs <em>seven-year-olds</em> (a noun meaning children aged seven, plural on the end). “Seven-years-olds” is impossible.',
          '<strong>Possessives and compound adjectives.</strong> <em>today’s high-tech world, Thailand’s ageing society, the city’s new flood-warning system</em>: the possessive acts like a determiner and comes first. Compound adjectives are hyphenated before a noun: <em>long-term</em> exposure, <em>AI-generated</em> clips, <em>eye-catching</em> ads, <em>state-of-the-art</em> labs.',
          '<strong>Quick test for any NP option:</strong> (1) Which word is the head? Is it a noun? (2) Are all the describers singular? (3) If it is a number compound before a noun, is it hyphenated with no -s? If there is no following noun, is the plural on the last word?'
        ],
        simple: [
          'The main noun is the last word: youth <strong>violence</strong>, smartphone <strong>addiction</strong>.',
          'Words in front of the noun are describers, so no -s: a ten-minute walk, a five-star hotel.',
          '<em>a seven-year-old boy</em> (describer) · <em>seven-year-olds</em> (= children aged seven).'
        ],
        thai: 'noun phrase ภาษาอังกฤษมีคำนามหลัก (head noun) อยู่ท้ายสุด คำที่อยู่ข้างหน้าเป็นตัวขยายทั้งหมด แม้จะเป็นคำนามก็ตาม เช่น youth violence, smartphone addiction และตัวขยายไม่เติม -s เช่น a ten-minute walk, a five-star hotel ส่วนคำบอกอายุ a seven-year-old girl ไม่มี -s เลย แต่ถ้าใช้เป็นคำนามหมายถึงเด็กอายุเจ็ดขวบหลายคน จะเติม -s ที่คำสุดท้ายเท่านั้น คือ seven-year-olds กับดักคือตัวเลือกที่เติม -s ผิดตำแหน่ง เช่น seven-years-olds',
        examples: [
          { s: 'Cyberbullying is a common form of <strong>youth violence</strong>.', g: 'noun + noun; the head is “violence”.' },
          { s: 'China banned written exams for <strong>seven-year-olds</strong>.', g: 'a noun: plural -s only at the end.' },
          { s: 'She has a <strong>seven-year-old</strong> brother.', g: 'a describer before a noun: no -s.' },
          { s: 'The trip includes a <strong>two-hour</strong> boat ride.', g: 'number + singular noun, hyphenated.' },
          { s: '<strong>the city’s new flood-warning system</strong>', g: 'possessive → adjective → compound → head.' }
        ],
        trap: 'The “plural brain”: because there are seven years, students write <em>seven-years-old</em>. Dodge: in any compound, ask “which word is the head?” Only the head can be plural. In <em>a seven-year-old girl</em> the head is “girl”; in <em>seven-year-olds</em> the head is “olds”.',
        analogy: { title: 'The BTS train', text: 'A noun phrase is a Skytrain: the engine (the head noun) is at the front of the journey but at the end of the phrase, and the carriages hook on behind it to the left. Carriages never carry the plural sign; only the engine does. <em>twelve-year-old</em> carriages, <em>students</em> engine.' },
        map: { center: 'Noun phrases', branches: [
          { label: 'Head last', leaves: ['youth violence', 'smartphone addiction', 'head takes plural'] },
          { label: 'Singular describers', leaves: ['a ten-minute walk', 'a five-star hotel', 'a 300-page report'] },
          { label: 'Age compounds', leaves: ['a seven-year-old girl', 'seven-year-olds'] },
          { label: 'Front of the NP', leaves: ['today’s high-tech world', 'the city’s new system'] }
        ] },
        story: { title: 'Pun’s Chair Sale', panels: [
          { who: 'Pun', text: '(posting) “For sale: my two-years-old gaming chair. Only 500 baht!”' },
          { who: 'Nong Bot', text: 'Warning! Your chair contains two years. Years are plural. Chair is singular. My logic board is melting.' },
          { who: 'Fah', text: 'Bot’s right for once. It’s a two-year-old chair. The describer before a noun never takes -s.' },
          { who: 'Pun', text: 'Fine. “For sale: two-year-old chair.” But my little cousins are called two-year-olds, right?' },
          { who: 'T.Chris', text: 'Right: there “olds” is the head noun, so the -s goes on the end. The plural always rides on the last word.' },
          { who: 'Nong Bot', text: 'Logic board cooling. Chair sold to a five-star customer. Not a five-stars one.' }
        ], moral: 'Only the head noun (the last word) can be plural.' }
      },
      items: [
        { id: 't9l2s1-1', type: 'cloze', tag: 'wo-np', level: 'B2+', passage: T9_P_WALK, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['twelve-year-old', 'twelve-years-old', 'twelve-year-olds', 'twelve-years-olds'], answer: 2,
          hint: 'No noun follows the gap. So is the gap a describer, or the noun itself?',
          why: 'Nothing follows the gap, so it must be the head noun itself, meaning “children aged twelve”, and it is plural after “more than a thousand”: <em>twelve-year-olds</em>, with the -s only at the end. “Twelve-year-old” is the singular describer form and would need a noun after it. “Years” can never be plural inside the compound.' },
        { id: 't9l2s1-2', type: 'cloze', tag: 'wo-np', level: 'B2+', passage: T9_P_WALK, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['ten-minute', 'ten-minutes', 'tenth-minute', 'ten minutes’'], answer: 0,
          hint: 'The gap sits between “a” and the noun “walk”. What happens to a number + noun that describes another noun?',
          why: 'A number + noun that describes another noun becomes a hyphenated compound with a singular noun: a <em>ten-minute</em> walk. “Ten-minutes” wrongly keeps the plural. “Ten minutes’ walk” is possible only without “a”, so it cannot follow “a” here. “Tenth-minute” would mean the walk happened in the tenth minute.' },
        { id: 't9l2s1-3', type: 'cloze', tag: 'wo-np', level: 'B2+', passage: T9_P_WALK, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['addict', 'addicted', 'addiction', 'addictive'], answer: 2,
          hint: '“Smartphone” is a describer here. What must the head of “levels of smartphone ___” be?',
          why: '“Smartphone” is only describing, so the gap is the head of the phrase and must be a noun naming a condition that can have levels: smartphone <em>addiction</em>. “Addict” is a noun but names a person, which does not fit “levels of”. “Addicted” and “addictive” are adjectives and leave the phrase without a head.' },
        { id: 't9l2s1-4', type: 'build', tag: 'wo-np', level: 'B2+',
          stem: 'Build one noun phrase that means: the system that the city uses to warn people about floods, and it is new.',
          tiles: ['the', 'city’s', 'new', 'flood-warning', 'system'],
          solution: 'the city’s new flood-warning system', alt: [],
          hint: 'Start from the head noun at the end and add describers to its left.',
          why: 'The head <em>system</em> goes last. The compound describer <em>flood-warning</em> (what kind of system) sits right next to it, the ordinary adjective <em>new</em> goes before that, and the possessive <em>the city’s</em> works like a determiner at the very front.' },
        { id: 't9l2s1-5', type: 'choose', tag: 'wo-np', level: 'B2+',
          stem: 'The A-Level English paper is ______ with 80 multiple-choice items.',
          options: ['a 90-minute test', 'a 90-minutes test', 'a 90-minute’s test', 'a 90 minutes’ test'], answer: 0,
          hint: 'After “a”, is the number part a describer or a possessive?',
          why: 'After “a”, the number + noun describes “test”, so it is a hyphenated compound with a singular noun: <em>a 90-minute test</em>. The plural form “90-minutes” is wrong in a describer, and the possessive forms (“90 minutes’ test”) cannot follow “a”; “90-minute’s” is not a possible form at all.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't9l2s2', name: 'Adjective order', cefr: 'B2+', tag: 'wo-adjorder',
      theory: {
        key: 'Adjectives line up from <strong>opinion</strong> (most personal) to <strong>purpose</strong> (most permanent): opinion–size–age–shape–colour–origin–material–purpose + noun.',
        body: [
          'Why is there an order at all? The closer an adjective is to the noun, the more it is part of <em>what the thing is</em>. <em>Purpose</em> and <em>material</em> almost define the object (a <em>running</em> shoe, a <em>silk</em> scarf), so they sit next to the noun. <em>Opinion</em> is just what you think today, so it goes furthest away. Native speakers feel this without knowing the list; you can learn the list.',
          '<strong>O-S-A-Sh-C-O-M-P:</strong> Opinion (<em>lovely, ugly</em>) → Size (<em>small, huge</em>) → Age (<em>old, brand-new</em>) → Shape (<em>round, square</em>) → Colour (<em>blue, navy</em>) → Origin (<em>Japanese, Thai</em>) → Material (<em>silk, plastic</em>) → Purpose (<em>fishing, sports, water</em>) → NOUN. Words that say how a thing was made, such as <em>handmade</em> or <em>hand-painted</em>, usually come just before origin: TCAS68’s key was <em>a small blue handmade Japanese ceramic dish</em>.',
          '<strong>How TCAS tests it:</strong> one blank, four orders of the same three or four adjectives. The options are the same length, so you cannot guess by length. Label each adjective with its letter (O, S, A, C…) and choose the option whose letters run in list order. You rarely need more than the first two words: once the opinion or size word is in the wrong place, the option is dead.',
          '<strong>Commas:</strong> adjectives from <em>different</em> categories take no commas (<em>a small blue dish</em>). Two adjectives from the <em>same</em> category can take a comma or <em>and</em> (<em>a warm, friendly teacher</em>; <em>a cheap and cheerful café</em>).'
        ],
        simple: [
          'The order is: opinion, size, age, shape, colour, country, material, what it is for, then the noun.',
          '<em>a beautiful long red Thai silk scarf</em> = opinion, size, colour, origin, material, noun.',
          'Give each adjective a letter and check that the letters go in order.'
        ],
        thai: 'คำคุณศัพท์หลายตัวหน้าคำนามต้องเรียงตามลำดับ OSASCOMP: ความเห็น (opinion) – ขนาด (size) – อายุ (age) – รูปทรง (shape) – สี (colour) – แหล่งกำเนิด (origin) – วัสดุ (material) – จุดประสงค์ (purpose) แล้วจึงเป็นคำนาม คำที่บอกว่าทำอย่างไร เช่น handmade มักอยู่หน้า origin ตามข้อ TCAS68 (small blue handmade Japanese) ในข้อสอบตัวเลือกยาวเท่ากันหมด เดาจากความยาวไม่ได้ ให้ติดป้ายตัวอักษรให้คำแต่ละคำแล้วเลือกข้อที่เรียงถูก',
        examples: [
          { s: 'a <strong>beautiful long red Thai silk</strong> scarf', g: 'opinion–size–colour–origin–material.' },
          { s: 'a <strong>huge round white plastic water</strong> tank', g: 'size–shape–colour–material–purpose.' },
          { s: 'an <strong>ugly old black sports</strong> bag', g: 'opinion–age–colour–purpose.' },
          { s: 'a <strong>small blue handmade Japanese</strong> ceramic dish', g: 'size–colour–how made–origin (TCAS68 pattern).' }
        ],
        trap: 'Students put the “most important” word first: <em>a Thai beautiful silk scarf</em>, because Thailand matters most to the story. Importance is not the rule; permanence is. Dodge: opinion words (lovely, stylish, awful) almost always go first, and purpose/material words go last, right before the noun.',
        analogy: { title: 'The concert queue', text: 'At a concert the loudest, most emotional fans (opinion) scream from the back of the hall, while the crew who built the stage (material) and the band’s own staff (purpose) stand right next to the stars. The closer you are to the noun, the more you belong to it.' },
        map: { center: 'Adjective order', branches: [
          { label: 'Far from noun', leaves: ['Opinion: lovely, awful', 'Size: tiny, huge'] },
          { label: 'Middle', leaves: ['Age: old, brand-new', 'Shape: round', 'Colour: navy'] },
          { label: 'Close to noun', leaves: ['Origin: Thai, Korean', 'Material: silk, plastic', 'Purpose: sports, water'] },
          { label: 'Test tricks', leaves: ['label each word', 'check first two words', 'handmade before origin'] }
        ] },
        chant: { title: 'OSASCOMP Line-Up', beat: 'stomp-clap, stomp-clap (4/4)', lines: [
          'Opinion first, I say what I feel,',
          'Size comes next, is it little or big-deal?',
          'Age and shape, then colour on the scene,',
          'Where it’s from, then the stuff in between.',
          'Material, purpose, hugging the noun,',
          'The closer you stand, the more you’re the crown.',
          'Lovely, little, old, round, green,',
          'Thai silk sports bag — the neatest line you’ve seen!'
        ] },
        moves: [
          { move: 'Hand on heart', says: 'Opinion — how I feel (lovely, awful)' },
          { move: 'Hands wide apart', says: 'Size (tiny, huge)' },
          { move: 'Pretend to lean on a walking stick', says: 'Age (old, brand-new)' },
          { move: 'Draw a circle, then flick paint', says: 'Shape, then colour' },
          { move: 'Point at a map, rub your sleeve, then mime using it', says: 'Origin, material, purpose — hugging the noun' }
        ]
      },
      items: [
        { id: 't9l2s2-1', type: 'cloze', tag: 'wo-adjorder', level: 'B2+',
          passage: 'For her grandmother’s eightieth birthday, Ploy chose a ___(1)___ scarf at the weekend market. The seller wrapped it in banana leaves and tied it with a thin gold ribbon.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['beautiful long red Thai silk', 'long beautiful red Thai silk', 'beautiful red long Thai silk', 'Thai beautiful long red silk'], answer: 0,
          hint: 'Give each word a label: opinion, size, colour, origin, material. Which option keeps the labels in order?',
          why: 'The order is opinion (beautiful) – size (long) – colour (red) – origin (Thai) – material (silk): <em>a beautiful long red Thai silk scarf</em>. “Long beautiful red…” puts size before opinion, “beautiful red long…” puts colour before size, and “Thai beautiful…” puts origin first, as if it were an opinion.' },
        { id: 't9l2s2-2', type: 'cloze', tag: 'wo-adjorder', level: 'B2+',
          passage: 'After six seasons, Krit finally replaced his ___(1)___ bag, the one he had carried to every football match since M1. His mother said it smelled like a changing room even after washing.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['black ugly old sports', 'old ugly black sports', 'ugly black old sports', 'ugly old black sports'], answer: 3,
          hint: 'Find the opinion word and the purpose word first. Where must each one stand?',
          why: 'Opinion (ugly) – age (old) – colour (black) – purpose (sports): his <em>ugly old black sports</em> bag. “Sports” tells us what the bag is for, so it hugs the noun. The other options put colour or age before the opinion word, or colour before age.' },
        { id: 't9l2s2-3', type: 'build', tag: 'wo-adjorder', level: 'B2+',
          stem: 'After the floods, shops quickly sold out of this item. Put the words in the natural order.',
          tiles: ['a', 'huge', 'round', 'white', 'plastic', 'water', 'tank'],
          solution: 'a huge round white plastic water tank', alt: [],
          hint: 'Size, shape, colour, material, purpose — then the noun.',
          why: 'Size (huge) – shape (round) – colour (white) – material (plastic) – purpose (water, i.e. a tank for water) + the noun <em>tank</em>. “Water” is a purpose word, so it must stand right next to the noun.' },
        { id: 't9l2s2-4', type: 'sort', tag: 'wo-adjorder', level: 'B2+',
          stem: 'Which slot does each adjective belong to?',
          bins: [
            { key: 'op', label: 'Opinion', hint: 'what you think' },
            { key: 'size', label: 'Size', hint: 'how big' },
            { key: 'age', label: 'Age', hint: 'how old' },
            { key: 'col', label: 'Colour', hint: 'what colour' },
            { key: 'orig', label: 'Origin', hint: 'where from' },
            { key: 'mat', label: 'Material', hint: 'made of' }
          ],
          items: [
            { text: 'gorgeous', bin: 'op' },
            { text: 'awful', bin: 'op' },
            { text: 'tiny', bin: 'size' },
            { text: 'enormous', bin: 'size' },
            { text: 'ancient', bin: 'age' },
            { text: 'brand-new', bin: 'age' },
            { text: 'navy', bin: 'col' },
            { text: 'Korean', bin: 'orig' },
            { text: 'Peruvian', bin: 'orig' },
            { text: 'cotton', bin: 'mat' },
            { text: 'bamboo', bin: 'mat' }
          ],
          hint: 'Ask one question per word: is it a feeling, a measurement, a time, a colour, a place or a substance?',
          why: 'Opinion: gorgeous, awful. Size: tiny, enormous. Age: ancient, brand-new. Colour: navy. Origin: Korean, Peruvian. Material: cotton, bamboo. Knowing the slot is what lets you order them: <em>a gorgeous tiny brand-new navy Korean cotton</em> T-shirt, if you ever needed six.' },
        { id: 't9l2s2-5', type: 'choose', tag: 'wo-adjorder', level: 'C1',
          stem: 'Which phrase follows the natural order of adjectives?',
          options: ['a new stylish Korean skincare brand', 'a stylish new Korean skincare brand', 'a stylish Korean new skincare brand', 'a stylish new skincare Korean brand'], answer: 1,
          hint: 'Label the words: opinion, age, origin, purpose. Then check the order.',
          why: 'Opinion (stylish) – age (new) – origin (Korean) – purpose/type (skincare) + noun: <em>a stylish new Korean skincare brand</em>. “A new stylish…” puts age before opinion, “stylish Korean new…” puts origin before age, and “skincare Korean brand” separates “skincare” from the noun it defines.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't9l2s3', name: 'Adverb placement & negation', cefr: 'C1', tag: 'wo-adverb',
      theory: {
        key: 'Short adverbs like <em>simply, even, probably, never</em> live in the <strong>middle position</strong>: after the first auxiliary or <em>be</em>, before the main verb — and never between a verb and its object.',
        body: [
          '<strong>Mid position.</strong> Picture the verb phrase as a row of carriages: [first auxiliary / be] ▸ <em>adverb</em> ▸ [rest of the verb]. So: <em>is not simply</em>, <em>may even be</em>, <em>has probably forgotten</em>, <em>will also need</em>, <em>They probably feel</em> (no auxiliary → before the main verb). <em>Not</em> takes the same seat: straight after the first auxiliary.',
          '<strong>Not + focus adverb.</strong> <em>not simply / not just / not merely / not only</em> = “not only”: <em>she is not simply practising speech but expressing respect</em>. Put the adverb before <em>not</em> and the meaning changes: <em>she simply is not</em> practising = she definitely is not. That is exactly how TCAS69 separated <em>is not simply</em> from <em>is simply not</em> and <em>simply is not</em>: the <em>but</em> later in the sentence demands “not only X but Y”.',
          '<strong>Other fixed spots.</strong> Degree adverbs go right before the adjective or adverb they strengthen: <em>truly unusual</em>, <em>surprisingly high</em>. <em>Enough</em> goes <em>after</em> an adjective (<em>strong enough</em>) but before a noun (<em>enough time</em>). Manner adverbs never split a verb from its object: <em>speak English fluently</em>, not “speak fluently English”. Frequency expressions have fixed order: <em>hardly ever</em>, not “ever hardly”. <em>Probably</em> goes after <em>will</em> but before <em>not</em>: <em>will probably not notice</em>.',
          '<strong>Focus words move the meaning.</strong> <em>Only Mint passed</em> (nobody else) vs <em>Mint only passed</em> (she did no better than pass). Put <em>only</em> and <em>even</em> right next to the word they focus on.'
        ],
        simple: [
          'Put short adverbs after <em>is/are/has/will/can</em> and before the main verb: <em>is not simply</em>, <em>may even be</em>.',
          'Do not put an adverb between a verb and its object: <em>speak English fluently</em>.',
          '<em>strong enough</em> (adjective + enough), <em>enough time</em> (enough + noun).'
        ],
        thai: 'adverb สั้น ๆ เช่น simply, even, probably, never, also มักอยู่ตำแหน่งกลาง คือหลังกริยาช่วยตัวแรกหรือ verb to be และก่อนกริยาหลัก เช่น is not simply, may even be, will probably not notice ส่วน not simply/not just/not merely มีความหมายว่า “ไม่ใช่แค่” และมักตามด้วย but ถ้าสลับเป็น simply is not ความหมายจะกลายเป็น “ไม่ใช่เลย” นอกจากนี้ enough อยู่หลังคำคุณศัพท์ (strong enough) และห้ามวาง adverb คั่นระหว่างกริยากับกรรม (speak English fluently) กับดักของ TCAS คือให้ตัวเลือกคำเดียวกันสลับตำแหน่งกัน ต้องดูคำอย่าง but ในประโยคเพื่อยืนยันความหมาย',
        examples: [
          { s: 'Bilingualism <strong>is not simply</strong> a skill but a link to family.', g: 'not simply … but = not only … but.' },
          { s: 'The drought <strong>may even</strong> spread to the central plains.', g: 'after the modal, before the main verb.' },
          { s: 'Most students <strong>will probably not</strong> notice the change.', g: 'will ▸ probably ▸ not ▸ verb.' },
          { s: 'Some school rules stand out as <strong>truly unusual</strong>.', g: 'degree adverb right before the adjective.' },
          { s: 'The barriers were not <strong>strong enough</strong>.', g: 'adjective + enough.' }
        ],
        trap: 'All four options contain the same words in different orders, and two of them are grammatical — but with different meanings. Students stop at the first grammatical one. Dodge: read to the end of the sentence. A <em>but (also)</em> later means you need <em>not simply/not just/not only</em>, with <em>not</em> first.',
        analogy: { title: 'The reserved seat on the Skytrain', text: 'Mid-position adverbs have a reserved seat: right behind the driver (the first auxiliary) and in front of the passengers (the main verb). They are not allowed to stand between a passenger and their luggage (a verb and its object).' },
        map: { center: 'Adverb placement', branches: [
          { label: 'Mid position', leaves: ['is not simply', 'may even be', 'will probably not'] },
          { label: 'Before adj/adv', leaves: ['truly unusual', 'surprisingly high'] },
          { label: 'Fixed pairs', leaves: ['strong enough', 'enough time', 'hardly ever'] },
          { label: 'Never here', leaves: ['verb ▸ adverb ▸ object', 'ever hardly'] },
          { label: 'Focus words', leaves: ['Only Mint passed', 'Mint only passed'] }
        ] },
        moves: [
          { move: 'Hold up one finger', says: 'Find the first auxiliary: is, has, will, can' },
          { move: 'Slide your other hand in just behind it', says: 'The short adverb or not sits here' },
          { move: 'Clasp both hands together tightly', says: 'Verb + object: never split them' },
          { move: 'Point forward to the end of the sentence', says: 'Read to the end: a “but” means not simply' }
        ]
      },
      items: [
        { id: 't9l2s3-1', type: 'cloze', tag: 'wo-adverb', level: 'C1',
          passage: 'For many young people, learning to code ___(1)___ a way to get a well-paid job but also a way of training the mind to break big problems into small ones.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['is not just', 'is just not', 'just is not', 'not just is'], answer: 0,
          hint: 'Read to the end of the sentence. Which word later on tells you the meaning you need?',
          why: 'The sentence continues “but also”, so we need the pair <em>not just … but also</em> (= not only … but also), with <em>not</em> after the verb “is”: <em>is not just</em>. “Is just not” and “just is not” mean “is definitely not”, which cannot be followed by “but also”. “Not just is” puts the verb after its negative.' },
        { id: 't9l2s3-2', type: 'cloze', tag: 'wo-adverb', level: 'C1',
          passage: 'The new timetable changes only the order of the afternoon lessons, so most students ___(1)___ the difference until the first week is over.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['will not probably notice', 'will notice probably not', 'probably not will notice', 'will probably not notice'], answer: 3,
          hint: 'Find the first auxiliary. Which comes next: a “sure/unsure” adverb or the negative?',
          why: 'The order is auxiliary ▸ <em>probably</em> ▸ <em>not</em> ▸ main verb: most students <em>will probably not notice</em>. “Probably” must come before a negative, so “will not probably” is wrong; “probably not will” puts the negative before the auxiliary, and “will notice probably not” pushes the negative to the end.' },
        { id: 't9l2s3-3', type: 'cloze', tag: 'wo-adverb', level: 'B2+',
          passage: 'Engineers warn that temporary flood barriers are not always ___(1)___ to hold back the water released from a dam upstream.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['strong enough', 'enough strong', 'strongly enough', 'enough strongly'], answer: 0,
          hint: 'After “are not always” you need an adjective. Where does “enough” stand with an adjective?',
          why: 'After the linking verb “are” we need an adjective, and <em>enough</em> follows an adjective: <em>strong enough</em> to hold back the water. “Enough strong” uses the order for nouns (enough time), and the “strongly” options put an adverb where an adjective is needed.' },
        { id: 't9l2s3-4', type: 'spot', tag: 'wo-adverb', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Many Thai students', 'speak fluently English', 'but still feel nervous', 'in speaking exams.'],
          answer: 1, fix: 'speak English fluently',
          hint: 'Look for an adverb that is standing between a verb and its object.',
          why: 'A manner adverb cannot separate a verb from its object, so the object comes first: <em>speak English fluently</em>. “Still” is correctly placed in mid position before the verb “feel”, and “nervous” is right after the linking verb “feel”.' },
        { id: 't9l2s3-5', type: 'choose', tag: 'wo-adverb', level: 'B2+',
          stem: 'Which sentence means that nobody except Mint passed the test?',
          options: ['Mint only passed the test.', 'Only Mint passed the test.', 'Mint passed only the test.', 'Mint passed the only test.'], answer: 1,
          hint: '“Only” focuses on the word right next to it. Which word do you want it to focus on?',
          why: '<em>Only</em> focuses on the word it stands next to, so <em>Only Mint</em> = Mint and no one else. “Mint only passed the test” means she just passed (she did not do better). “Passed only the test” means the test and nothing else, and “the only test” means there was just one test.' }
      ]
    }
  ],
  check: { id: 't9l2ck', name: 'Systems Check · Phrases', items: [
    { id: 't9l2ck-1', type: 'cloze', tag: 'wo-np', level: 'B2+', passage: T9_P_FLOOD, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['48 hour', '48-hour', '48 hours', '48-hours'], answer: 2,
      hint: 'Does a noun follow the gap? If not, is the phrase a describer or a noun phrase of its own?',
      why: 'After “in just” and with no noun following, the gap is a plain noun phrase of time, so the noun is plural: <em>48 hours</em>. “48-hour” is the describer form and needs a noun after it (a 48-hour period). “48 hour” leaves the noun singular after a number, and “48-hours” wrongly hyphenates a plural.' },
    { id: 't9l2ck-2', type: 'cloze', tag: 'wo-adjorder', level: 'C1', passage: T9_P_FLOOD, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['national new warning', 'warning new national', 'new warning national', 'new national warning'], answer: 3,
      hint: 'Which word says what the system is for? It must stand next to “system”.',
      why: 'Age (new) – origin/scope (national) – purpose (warning) + noun: <em>a new national warning system</em>. “Warning” names the system’s purpose, so it must touch the noun; the other options split it from “system” or put “national” before “new”.' },
    { id: 't9l2ck-3', type: 'cloze', tag: 'wo-adverb', level: 'C1', passage: T9_P_FLOOD, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['merely is not', 'is not merely', 'is merely not', 'not merely is'], answer: 1,
      hint: 'Look for a word later in the same sentence that pairs with a “not …” expression.',
      why: 'The sentence continues “but the start of a countdown”, so we need <em>not merely … but</em> (= not only … but), with <em>not</em> straight after “is”: <em>is not merely</em>. “Merely is not” and “is merely not” mean “is simply not”, which clashes with the “but” clause; “not merely is” puts the verb in the wrong place.' },
    { id: 't9l2ck-4', type: 'cloze', tag: 'wo-adverb', level: 'B2+', passage: T9_P_FLOOD, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['hardly ever', 'ever hardly', 'hardly never', 'never hardly'], answer: 0,
      hint: 'This is a fixed frequency expression meaning “almost never”. Be careful of double negatives.',
      why: 'The fixed expression is <em>hardly ever</em> (= almost never): many people hardly ever read alerts from unknown senders. “Ever hardly” reverses the fixed order, and “hardly never” and “never hardly” combine two negative words, which standard English does not allow.' },
    { id: 't9l2ck-5', type: 'cloze', tag: 'wo-np', level: 'B2+', passage: T9_P_FLOOD, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['temporary flood', 'flood temporary', 'temporary floods', 'floods temporary'], answer: 0,
      hint: 'In front of the head “barriers”, which word is the noun describer and must it be singular?',
      why: 'The head is “barriers”. “Flood” describes what kind of barrier, so it is a noun describer: it stands next to the head and stays singular. The adjective <em>temporary</em> goes in front: <em>temporary flood barriers</em>. “Floods” wrongly makes the describer plural, and “flood temporary” puts the adjective inside the compound.' },
    { id: 't9l2ck-6', type: 'choose', tag: 'wo-adjorder', level: 'C1',
      stem: 'Pim wants to describe her favourite café in Chiang Mai. Which phrase is in the natural order?',
      options: ['a little cosy old wooden café', 'a wooden cosy little old café', 'a little old cosy wooden café', 'a cosy little old wooden café'], answer: 3,
      hint: 'Label each word: opinion, size, age, material. Which comes first?',
      why: 'Opinion (cosy) – size (little) – age (old) – material (wooden): <em>a cosy little old wooden café</em>. The first and third options put size before opinion, and the second puts the material word first, far away from the noun it should stand next to.' }
  ] }
});

/* ===================================================== LEVEL 3 TRICKY PAIRS */
T9.levels.push({
  id: 't9l3', n: 3, name: 'Tricky pairs', cefr: 'C1',
  blurb: '-ed or -ing, look calm or look calmly, less effective or less effectively, and the C1 stretch: inversion after Rarely, Only when and Not only.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't9l3s1', name: '-ed/-ing adjectives & linking verbs', cefr: 'C1', tag: 'wf-edIng',
      theory: {
        key: '<strong>-ed</strong> = how a person feels; <strong>-ing</strong> = what causes the feeling. After a <strong>linking verb</strong> (be, seem, look, feel, sound, remain) use an adjective; after an <strong>action verb</strong> use an adverb.',
        body: [
          '<strong>-ed vs -ing.</strong> Both come from verbs like <em>bore, alarm, confuse, surprise</em>. The <em>-ed</em> form is passive in spirit: the person <em>receives</em> the feeling (<em>the teachers were alarmed</em>). The <em>-ing</em> form is active: the thing <em>produces</em> the feeling (<em>the results were alarming</em>). Test: can you add “by …”? <em>alarmed by the results</em> → -ed.',
          '<strong>Linking verbs take adjectives.</strong> A linking verb does not describe an action; it connects the subject to a description of the subject: <em>be, seem, appear, look, feel, sound, smell, taste, become, get, grow, remain, stay, turn, prove</em>. So <em>men look calmer</em> (the men are calm) — not “look calmly”. This was the TCAS66 item: <em>look calmer</em> beat <em>look calmly</em> and <em>are looking calmer</em>.',
          '<strong>The same verb can do both jobs.</strong> <em>She looked angry</em> (linking: she was angry) vs <em>She looked angrily at him</em> (action: the way she looked at him). <em>The soup tastes salty</em> vs <em>The chef tasted the soup carefully</em>. Test: replace the verb with <em>is</em>. If the sentence still makes sense (<em>she is angry</em>), it is linking → adjective. If <em>at him</em> or an object follows, it is an action → adverb.',
          '<strong>Stacks.</strong> An adverb can still sit <em>inside</em> the adjective after a linking verb: <em>seemed surprisingly relaxed</em> — the adverb describes the adjective, the adjective describes the subject.'
        ],
        simple: [
          '<em>bored</em> = I feel it. <em>boring</em> = it makes me feel it.',
          'After <em>be, look, seem, feel, sound</em>: use an adjective (<em>look calm</em>).',
          'If the verb is an action (<em>look <strong>at</strong> someone</em>), use an adverb (<em>looked calmly at</em>).'
        ],
        thai: 'คำคุณศัพท์ลงท้าย -ed บอกความรู้สึกของคน (alarmed = รู้สึกตกใจ) ส่วน -ing บอกสิ่งที่ทำให้เกิดความรู้สึก (alarming = น่าตกใจ) หลัง linking verb เช่น be, seem, look, feel, sound, remain ต้องใช้คำคุณศัพท์ เช่น look calmer ไม่ใช่ look calmly แต่ถ้า look เป็นกริยาแสดงการกระทำ เช่น look at someone ต้องใช้ adverb เช่น looked curiously at the reporter วิธีทดสอบคือแทนกริยาด้วย is ถ้าความหมายยังเข้าได้แปลว่าเป็น linking verb กับดักของ TCAS คือเอารูป adverb มาล่อหลัง linking verb',
        examples: [
          { s: 'Many teachers were <strong>alarmed</strong> by the survey.', g: 'the teachers feel it → -ed.' },
          { s: 'The survey results were <strong>alarming</strong>.', g: 'the results cause the feeling → -ing.' },
          { s: 'In arguments, men often <strong>look calmer</strong>.', g: 'linking “look” → adjective.' },
          { s: 'She <strong>looked curiously</strong> at the reporter.', g: 'action “look at” → adverb.' },
          { s: 'The students <strong>seemed surprisingly relaxed</strong>.', g: 'adverb inside the adjective after a linking verb.' }
        ],
        trap: 'Students see “look” and automatically add -ly because “look” is a verb, and verbs take adverbs. Linking verbs are the exception, and TCAS knows it. Dodge: the <em>is</em>-test. “Men look calm” → “men are calm”: works, so adjective.',
        analogy: { title: 'The TikTok creator and the viewer', text: 'The <em>-ing</em> word is the creator: the clip is <em>amazing</em>, it sends out the feeling. The <em>-ed</em> word is the viewer: I am <em>amazed</em>, I receive it. A clip can be boring; only a person can be bored. Nobody wants to be the boring one.' },
        map: { center: '-ed / -ing & linking', branches: [
          { label: '-ed = feeler', leaves: ['teachers were alarmed', 'I’m bored', 'test: add “by…”'] },
          { label: '-ing = cause', leaves: ['results were alarming', 'the lesson is boring'] },
          { label: 'Linking → adjective', leaves: ['look calmer', 'seem worried', 'remain calm'] },
          { label: 'Action → adverb', leaves: ['looked curiously at', 'tasted it carefully', 'is-test decides'] }
        ] },
        story: { title: 'Pun Is So Boring', panels: [
          { who: 'Pun', text: '(in the two-hour tax lecture) Psst, Fah. I am SO boring right now.' },
          { who: 'Fah', text: 'I know. You’ve been boring since M1. Did you mean bored?' },
          { who: 'Pun', text: 'Bored! I feel it. The lecture is boring — it gives the feeling. I receive it.' },
          { who: 'Nong Bot', text: 'Update: the lecturer is looking angrily at Pun. The lecturer looks angry. Both sentences are correct. Neither is good news.' },
          { who: 'T.Chris', text: 'Nice, Bot. “Looking angrily at” is an action, so adverb. “Looks angry” links him to his mood, so adjective.' },
          { who: 'Pun', text: 'So now I look nervous… and I’m not boring any more. I’m worried.' }
        ], moral: '-ed feels it, -ing causes it; linking verbs take adjectives.' }
      },
      items: [
        { id: 't9l3s1-1', type: 'cloze', tag: 'wf-edIng', level: 'C1', passage: T9_P_SURVEY, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['alarm', 'alarmed', 'alarming', 'alarmingly'], answer: 1,
          hint: 'Are the teachers causing the feeling or receiving it?',
          why: 'The teachers receive the feeling after reading the survey, so the -ed form is right: many teachers were <em>alarmed</em>. “Alarming” would mean the teachers themselves caused alarm. “Alarm” is a noun or verb, and “alarmingly” is an adverb, which cannot follow “were” on its own here.' },
        { id: 't9l3s1-2', type: 'cloze', tag: 'wf-edIng', level: 'C1', passage: T9_P_SURVEY, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['surprise', 'surprised', 'surprising', 'surprisingly'], answer: 3,
          hint: 'An adjective already follows the gap. What kind of word can describe an adjective?',
          why: 'The linking verb “seemed” is already followed by the adjective “relaxed”, and the gap describes that adjective (how relaxed?), so it needs an adverb: <em>surprisingly</em> relaxed. “Surprised” is the tempting -ed form, but “seemed surprised relaxed” puts two adjectives together with no link. “Surprise” and “surprising” fail for the same reason.' },
        { id: 't9l3s1-3', type: 'cloze', tag: 'wf-edIng', level: 'C1', passage: T9_P_SURVEY, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['curious', 'curiosity', 'incurious', 'curiously'], answer: 3,
          hint: 'Is “look” a linking verb here? Check the words right after the gap.',
          why: 'Here “look” is followed by “at the reporter”, so it is an action verb (directing the eyes), not a linking verb, and the gap describes how the student looked: <em>curiously</em>. “Curious” would be right for a linking “looking curious”, but not with “at the reporter”. “Incurious” means not interested and is also an adjective, and “curiosity” is a noun.' },
        { id: 't9l3s1-4', type: 'sort', tag: 'wf-edIng', level: 'C1',
          stem: 'Does each gap need an ADJECTIVE (linking verb) or an ADVERB (action verb)?',
          bins: [
            { key: 'adj', label: 'Adjective', hint: 'the verb links to a description of the subject' },
            { key: 'adv', label: 'Adverb', hint: 'the verb is an action; describe how' }
          ],
          items: [
            { text: 'The exam paper looked ___. (difficult)', bin: 'adj' },
            { text: 'Mint looked ___ at the exam paper. (careful)', bin: 'adv' },
            { text: 'The milk smells ___. (sour)', bin: 'adj' },
            { text: 'The dog smelled the bag ___. (suspicious)', bin: 'adv' },
            { text: 'Fah remained ___ during the debate. (calm)', bin: 'adj' },
            { text: 'The crowd grew ___ as the rain continued. (restless)', bin: 'adj' },
            { text: 'The rice plants grew ___ after the rain. (rapid)', bin: 'adv' },
            { text: 'Pun sounded ___ on the phone. (nervous)', bin: 'adj' }
          ],
          hint: 'Try the is-test: replace the verb with “is/was”. Does the sentence still make sense?',
          why: 'Linking uses: looked difficult, smells sour, remained calm, grew restless (became restless), sounded nervous — each works with “is/was”. Action uses: looked <em>carefully at</em>, smelled the bag <em>suspiciously</em>, grew <em>rapidly</em> (increased in size). The same verbs “look”, “smell” and “grow” appear in both bins.' },
        { id: 't9l3s1-5', type: 'choose', tag: 'wf-edIng', level: 'C1',
          stem: 'Which sentence is correct?',
          options: [
            'The lecture was so confused that we all looked confused.',
            'The lecture was so confusing that we all looked confused.',
            'The lecture was so confused that we all looked confusing.',
            'The lecture was so confusing that we all looked confusedly.'
          ], answer: 1,
          hint: 'Which one causes the feeling, and which ones feel it? Then check the linking verb.',
          why: 'The lecture causes the feeling (<em>confusing</em>) and the students receive it (<em>confused</em>); “looked” is a linking verb here, so it takes the adjective: we all looked confused. The other options swap the -ed and -ing forms or put an adverb after the linking verb.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't9l3s2', name: 'Comparative forms in context', cefr: 'C1', tag: 'wf-compare',
      theory: {
        key: 'A comparative must match its seat: <strong>less/more + adverb</strong> for verbs, <strong>adjective</strong> for nouns and linking verbs — and <strong>the + comparative, the + comparative</strong> for “as one grows, so does the other”.',
        body: [
          '<strong>Seat first, again.</strong> Comparatives are still adjectives or adverbs, so slot analysis still rules. TCAS69: “people think and remember ___ when their smartphones are nearby” → the gap describes the verbs, so <em>less effectively</em>, not <em>less effective</em>. But after a linking verb: <em>they look calmer</em>. After a noun seat: <em>a more effective method</em>.',
          '<strong>Form rules.</strong> One-syllable words take -er (<em>harder, closer</em>); most longer words take <em>more/less</em> (<em>more accurately</em>). Never both: “more harder” is wrong. Irregulars: good/well → better, bad/badly → worse, far → further. <em>Than</em> needs a comparative; <em>of the two</em> needs a comparative too (<em>the cheaper of the two</em>); superlatives need three or more.',
          '<strong>Patterns TCAS can test.</strong> <em>The more time you spend scrolling, the harder it is to focus</em> — both halves start with <em>the</em> + comparative. <em>twice as high as</em> (as … as, never “twice as higher than”). <em>fewer</em> + plural countable nouns (<em>fewer bottles</em>) vs <em>less</em> + uncountable (<em>less plastic</em>). Intensifiers before a comparative: <em>far, much, even, significantly</em> worse (never “very worse”).',
          '<strong>Procedure:</strong> (1) Name the seat — adjective or adverb? (2) Find the comparison signal: <em>than, as, of the two, the … the</em>. (3) Check the form: -er or more, never both; fewer or less.'
        ],
        simple: [
          'Describing a verb? Use <em>more/less + -ly</em>: <em>think less effectively</em>.',
          'After <em>look/seem/be</em>? Use the adjective: <em>look calmer</em>.',
          '<em>The more …, the more …</em> — both parts start with <em>the</em>. Use <em>fewer</em> with things you can count.'
        ],
        thai: 'รูปเปรียบเทียบยังต้องดูตำแหน่งก่อน ถ้าขยายกริยาใช้ more/less + adverb เช่น think less effectively (ข้อ TCAS69) ถ้าอยู่หลัง linking verb ใช้คำคุณศัพท์ เช่น look calmer ห้ามใช้ more คู่กับ -er (more harder) ถ้ามี than ต้องเป็นขั้นกว่า และถ้าเปรียบเทียบสองสิ่งใช้ the cheaper of the two ไม่ใช่ขั้นสุด รูปแบบ the more…, the more… ต้องมี the ทั้งสองส่วน และใช้ fewer กับนามนับได้ less กับนามนับไม่ได้',
        examples: [
          { s: 'People remember <strong>less effectively</strong> when phones are nearby.', g: 'describes the verb → adverb.' },
          { s: 'The more you scroll, <strong>the harder</strong> it is to focus.', g: 'the + comparative in both halves.' },
          { s: 'The canteen threw away <strong>fewer</strong> bottles.', g: 'countable plural → fewer.' },
          { s: 'Stress before exams was <strong>twice as high as</strong> in the holidays.', g: 'twice + as … as.' },
          { s: 'They chose <strong>the cheaper</strong> of the two proposals.', g: 'two things → comparative.' }
        ],
        trap: 'The comparative word is right but the form is wrong: <em>less effect / less effective / less effectively / less effectiveness</em>. Students grab the first one that “sounds like a comparison”. Dodge: forget <em>less</em> for a second, find what the gap describes, choose the part of speech, then put <em>less</em> back.',
        analogy: { title: 'Upgrading your gear', text: 'A comparative is an upgrade you fit onto the character you already have. If your character is an adverb (describing a verb), you fit “more/less” onto an adverb. You cannot upgrade a sword into a better shield: the seat decides the item, then you add the level.' },
        map: { center: 'Comparatives', branches: [
          { label: 'Seat decides form', leaves: ['verb → less effectively', 'linking → look calmer', 'noun → a more effective way'] },
          { label: 'Form rules', leaves: ['-er OR more, never both', 'bad → worse', 'of the two → -er'] },
          { label: 'Patterns', leaves: ['the more…, the more…', 'twice as high as', 'far / much + -er'] },
          { label: 'Count check', leaves: ['fewer bottles', 'less plastic'] }
        ] },
        chant: { title: 'The More You Scroll', beat: 'finger-snap on 2 and 4', lines: [
          'The more you scroll, the less you read,',
          'Two “the”s in front is the rule you need.',
          'Count the bottles? Fewer, please;',
          'Plastic you can’t count? Less with ease.',
          'Describe the verb? Put -ly on the end,',
          'Less effectively, my friend.',
          'Never “more harder”, never “most best”,',
          'One upgrade only passes the test!'
        ] }
      },
      items: [
        { id: 't9l3s2-1', type: 'cloze', tag: 'wf-compare', level: 'C1',
          passage: 'Short videos train the brain to expect a small reward every few seconds. The more time teenagers spend scrolling, ___(1)___ they find it to stay focused on a long article.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['harder', 'the harder', 'more harder', 'the hardest'], answer: 1,
          hint: 'Look at how the sentence begins. The second half must mirror the first.',
          why: 'The sentence starts with “The more time…”, so the second half must also begin with <em>the</em> + comparative: <em>the harder</em> they find it. “Harder” alone breaks the pattern, “more harder” uses two comparative markers, and “the hardest” is a superlative.' },
        { id: 't9l3s2-2', type: 'cloze', tag: 'wf-compare', level: 'C1',
          passage: 'In the trial, students who practised with past papers answered the questions ___(1)___ than those who simply reread their notes, and they also finished the test sooner.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['more accurate', 'most accurately', 'accurately more', 'more accurately'], answer: 3,
          hint: 'What does the gap describe: the students, the questions, or the way they answered?',
          why: 'The gap describes how the students answered (a verb), so it needs an adverb, and “than” needs a comparative: <em>more accurately</em>. “More accurate” is an adjective, “most accurately” is a superlative that cannot go with “than”, and “accurately more” reverses the order.' },
        { id: 't9l3s2-3', type: 'cloze', tag: 'wf-compare', level: 'C1',
          passage: 'Since the refill stations opened, the school canteen has thrown away far ___(1)___ plastic bottles than it did last year, and students now carry their own flasks.',
          blank: '(1)', stem: 'Choose the best option for blank (1).',
          options: ['less', 'fewer', 'least', 'lesser'], answer: 1,
          hint: 'Can you count the noun after the gap?',
          why: '“Bottles” is a plural countable noun, so the comparative of quantity is <em>fewer</em>. “Less” is used with uncountable nouns (less plastic), “least” is a superlative and cannot go with “than”, and “lesser” means “smaller in importance” (a lesser problem).' },
        { id: 't9l3s2-4', type: 'spot', tag: 'wf-compare', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Of the two proposals,', 'the student council chose', 'the cheapest one', 'because the budget was tight.'],
          answer: 2, fix: 'the cheaper one',
          hint: 'Count how many things are being compared.',
          why: 'Only two proposals are compared, so formal English uses the comparative: <em>the cheaper</em> of the two. The superlative “cheapest” is for three or more. The other parts are correct.' },
        { id: 't9l3s2-5', type: 'choose', tag: 'wf-compare', level: 'C1',
          stem: 'In the survey, the percentage of students who felt stressed before exams was ______ the percentage who felt stressed during the holidays.',
          options: ['twice as high as', 'as twice high as', 'twice as high than', 'twice as higher as'], answer: 0,
          hint: 'The pattern is “twice + a pair of small words around the adjective”.',
          why: 'Multiples use <em>twice / three times + as + adjective + as</em>: <em>twice as high as</em>. “As twice high as” puts “twice” inside the pattern, “as high than” mixes two patterns, and “as higher as” puts a comparative inside “as … as”.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't9l3s3', name: 'Fronting, inversion & emphasis (C1 stretch)', cefr: 'C1+', tag: 'wo-front',
      theory: {
        key: 'When a <strong>negative or limiting</strong> word (Rarely, Not only, Only when, Little, No sooner) is moved to the front, the next clause switches to <strong>question order</strong>: auxiliary + subject + verb.',
        body: [
          '<strong>Why inversion?</strong> Fronting a negative word is a spotlight: the writer wants you to feel the “rarely” or the “little” before anything else. English marks that spotlight by flipping the subject and auxiliary, exactly as in a question: <em>Rarely <u>has the city</u> seen so much rain.</em> If there is no auxiliary, bring in <em>do/does/did</em>: <em>Not only <u>does screen use</u> harm sleep, but it also…</em>',
          '<strong>The triggers.</strong> <em>Rarely, Seldom, Never, Hardly ever</em> · <em>Not only … but (also)</em> · <em>Little</em> (= not at all): <em>Little did we know…</em> · <em>No sooner had … than</em>, <em>Hardly/Scarcely had … when</em> · <em>Under no circumstances / On no account should…</em> · <em>Only when / Only after / Only if / Not until</em> + clause → the inversion is in the <strong>main</strong> clause, not in the time clause: <em>Only when the rain stopped <u>did the water levels</u> begin to fall.</em>',
          '<strong>Emphatic fronting without negatives.</strong> <em>Such was the pressure on the drains that…</em> (Such + be + noun phrase + that). <em>So strong was the wind that…</em> (So + adjective + be + subject + that). Note: <em>so</em> goes with an adjective, <em>such</em> with a noun phrase.',
          '<strong>No inversion when…</strong> <em>only</em> or <em>not only</em> simply modifies the subject or sits mid-sentence: <em>Only Mint passed</em>; <em>She not only sings but also dances</em>. In TCAS text completion, check the options for an auxiliary in front of the subject — if the sentence begins with a trigger, that is almost always the key.'
        ],
        simple: [
          'If a sentence starts with <em>Rarely, Never, Not only, Little, No sooner</em>, use question order next: <em>Rarely <strong>has the city</strong> seen…</em>',
          'No auxiliary? Add <em>do/does/did</em>: <em>Little <strong>did we</strong> know.</em>',
          '<em>Only when / Only after</em> + time clause, then question order in the main clause.'
        ],
        thai: 'เมื่อยกคำปฏิเสธหรือคำจำกัดไว้ต้นประโยค เช่น Rarely, Never, Not only, Little, No sooner, Under no circumstances ประโยคต่อจากนั้นต้องสลับเป็นรูปคำถาม (inversion) คือกริยาช่วย + ประธาน + กริยาหลัก เช่น Rarely has the city seen… ถ้าไม่มีกริยาช่วยให้เติม do/does/did เช่น Little did we know สำหรับ Only when / Only after / Not until ให้สลับในประโยคหลัก ไม่ใช่ในอนุประโยคเวลา ส่วน Such was + นาม + that และ So + คุณศัพท์ + be + ประธาน + that ใช้เน้นความ กับดักคือตัวเลือกเรียงแบบประโยคบอกเล่าปกติ ซึ่งผิดเมื่อขึ้นต้นด้วยคำเหล่านี้',
        examples: [
          { s: 'Rarely <strong>has the city seen</strong> so much rain in two days.', g: 'Rarely + has + subject + participle.' },
          { s: 'Not only <strong>does poor sleep harm</strong> memory, but it also weakens immunity.', g: 'no auxiliary → add does.' },
          { s: 'Only when the rain stopped <strong>did the water levels begin</strong> to fall.', g: 'inversion in the main clause.' },
          { s: '<strong>Such was the pressure</strong> on the drains that roads flooded.', g: 'Such + be + noun phrase + that.' },
          { s: 'No sooner <strong>had we arrived</strong> than the storm began.', g: 'No sooner had … than (not when).' }
        ],
        trap: 'The normal statement order (“the city has seen”) looks perfectly correct because it is correct — in a normal sentence. TCAS hides the trigger word at the start of the sentence, sometimes before the blank and sometimes inside it. Dodge: whenever a sentence begins with a negative or <em>Only</em>, look for the auxiliary <em>before</em> the subject.',
        analogy: { title: 'The VIP entrance', text: 'A negative word at the front of the sentence is a VIP arriving at a Siam Paragon launch. Security (the auxiliary) must jump in front of the crowd (the subject) to open the door: “Rarely HAS the city…”. No security guard on duty? Call one in: do, does or did.' },
        map: { center: 'Inversion', branches: [
          { label: 'Negative triggers', leaves: ['Rarely / Seldom / Never', 'Little did…', 'Under no circumstances'] },
          { label: 'Time triggers', leaves: ['No sooner had … than', 'Hardly had … when', 'Not until … did'] },
          { label: 'Only + clause', leaves: ['Only when … did …', 'Only if … will …', 'invert main clause'] },
          { label: 'Emphasis', leaves: ['Such was the + noun', 'So + adj + was + subject'] }
        ] },
        moves: [
          { move: 'Push both palms forward', says: 'A negative word jumps to the front: Rarely! Never! Little!' },
          { move: 'Swap your hands, left over right', says: 'Auxiliary and subject swap places' },
          { move: 'Knock twice on the desk', says: 'No auxiliary? Knock in do, does or did' },
          { move: 'Hold up “one” finger, then point ahead', says: 'Only when…: wait for the main clause, then swap' }
        ]
      },
      items: [
        { id: 't9l3s3-1', type: 'cloze', tag: 'wo-front', level: 'C1', passage: T9_P_RAIN, blank: '(1)',
          stem: 'Choose the best option for blank (1).',
          options: ['has the city seen', 'the city has seen', 'the city has been seen', 'has the city been seen'], answer: 0,
          hint: 'Look at the word that begins the sentence. What does it do to the word order?',
          why: 'The sentence begins with the negative adverb <em>Rarely</em>, so the auxiliary comes before the subject: Rarely <em>has the city seen</em> so much water arrive. “The city has seen” is normal order, which is wrong after a fronted negative. The two passive options mean the city itself was seen, which makes no sense.' },
        { id: 't9l3s3-2', type: 'cloze', tag: 'wo-front', level: 'C1+', passage: T9_P_RAIN, blank: '(2)',
          stem: 'Choose the best option for blank (2).',
          options: ['so was the pressure on', 'so the pressure was on', 'such the pressure was on', 'such was the pressure on'], answer: 3,
          hint: 'Find the “that” later in the sentence. Which word goes with a noun phrase: so or such?',
          why: 'The pattern is <em>such + be + noun phrase + that</em>: <em>such was the pressure on</em> the drains that traffic was blocked. “So” is used with an adjective (so great was the pressure), not directly before “was the pressure”. “Such the pressure was” keeps normal order, which this fronted pattern does not allow.' },
        { id: 't9l3s3-3', type: 'cloze', tag: 'wo-front', level: 'C1+', passage: T9_P_RAIN, blank: '(3)',
          stem: 'Choose the best option for blank (3).',
          options: ['began the water levels', 'the water levels began', 'the water levels did begin', 'did the water levels begin'], answer: 3,
          hint: 'The time clause after “Only when” is finished. What must happen at the start of the main clause?',
          why: 'After <em>Only when</em> + a time clause, the main clause is inverted, and because “begin” has no auxiliary we add <em>did</em>: <em>did the water levels begin</em> to fall. “The water levels began” and “did begin” keep statement order, and “began the water levels” moves the main verb, not an auxiliary.' },
        { id: 't9l3s3-4', type: 'build', tag: 'wo-front', level: 'C1',
          stem: 'Fact: Pun had no idea that the test had been cancelled. Say it as one sentence beginning “Little”.',
          tiles: ['Little', 'did', 'Pun', 'know', 'that', 'the test', 'had been', 'cancelled'],
          solution: 'Little did Pun know that the test had been cancelled', alt: [],
          hint: 'Little is a negative trigger, and “know” has no auxiliary of its own.',
          why: '<em>Little</em> (= not at all) at the front triggers inversion, and since “know” has no auxiliary, <em>did</em> comes in: Little did Pun know. The that-clause after it keeps normal order.' },
        { id: 't9l3s3-5', type: 'choose', tag: 'wo-front', level: 'C1+',
          stem: 'Which sentence is correct?',
          options: [
            'No sooner had we arrived than the storm began.',
            'No sooner we had arrived than the storm began.',
            'No sooner had we arrived when the storm began.',
            'No sooner did we arrived than the storm began.'
          ], answer: 0,
          hint: 'Two things to check: the order after “No sooner”, and the small word that joins the second part.',
          why: '<em>No sooner</em> needs inversion with the past perfect (<em>had we arrived</em>) and is completed by <em>than</em>. “No sooner we had arrived” keeps normal order, “had we arrived when” uses “when”, which belongs to “Hardly had … when”, and “did we arrived” wrongly uses a past form after “did”.' }
      ]
    }
  ],
  check: { id: 't9l3ck', name: 'Systems Check · Tricky pairs', items: [
    { id: 't9l3ck-1', type: 'cloze', tag: 'wf-compare', level: 'C1', passage: T9_P_PHONE, blank: '(1)',
      stem: 'Choose the best option for blank (1).',
      options: ['bad', 'worse', 'worst', 'the worse'], answer: 1,
      hint: 'There is a comparison signal a few words after the gap.',
      why: 'The word “than” signals a comparison between two groups, so we need the comparative of “badly”: performed <em>worse</em>. “Bad” is not comparative, “worst” is a superlative, and “the worse” is only used in patterns like “the more …, the worse …” or “the worse of the two”.' },
    { id: 't9l3ck-2', type: 'cloze', tag: 'wf-edIng', level: 'C1', passage: T9_P_PHONE, blank: '(2)',
      stem: 'Choose the best option for blank (2).',
      options: ['surprise', 'surprised', 'surprising', 'surprisingly'], answer: 1,
      hint: 'Look at the word after the gap: “by”. Who feels the surprise?',
      why: 'The researchers feel the surprise, and “by how large the gap was” names the cause, so the -ed form is right: were <em>surprised</em> by. “Surprising” would mean the researchers caused surprise. “Surprise” is a noun or verb, and “surprisingly” is an adverb.' },
    { id: 't9l3ck-3', type: 'cloze', tag: 'wo-front', level: 'C1+', passage: T9_P_PHONE, blank: '(3)',
      stem: 'Choose the best option for blank (3).',
      options: ['scored the students', 'the students scored', 'the students did score', 'did the students score'], answer: 3,
      hint: 'How does the sentence start? What does that do to the order of the next words?',
      why: 'A sentence that begins with <em>Not only</em> needs question order, and “score” has no auxiliary, so we add <em>did</em>: Not only <em>did the students score</em> lower, but they were also unaware. Normal order (“the students scored”, “the students did score”) is wrong after the fronted negative, and “scored the students” moves the main verb instead of an auxiliary.' },
    { id: 't9l3ck-4', type: 'cloze', tag: 'wf-compare', level: 'C1', passage: T9_P_PHONE, blank: '(4)',
      stem: 'Choose the best option for blank (4).',
      options: ['closer', 'the closer', 'the closest', 'the more close'], answer: 1,
      hint: 'The second half of the sentence begins “the more attention…”. What must the first half look like?',
      why: 'The second half is “the more attention it steals”, so the first half must mirror it with <em>the</em> + comparative: <em>the closer</em> the phone is to you. “Closer” lacks “the”, “the closest” is a superlative, and “the more close” uses “more” with a one-syllable adjective that takes -er.' },
    { id: 't9l3ck-5', type: 'cloze', tag: 'wf-edIng', level: 'C1', passage: T9_P_PHONE, blank: '(5)',
      stem: 'Choose the best option for blank (5).',
      options: ['calmer', 'calmly', 'calmest', 'more calmly'], answer: 0,
      hint: 'Is “looked” a linking verb here? And what comparison word follows the gap?',
      why: '“Looked” links the students to a description of them (they were calm), so it takes an adjective, and “than the others” needs the comparative: looked <em>calmer</em>. “More calmly” and “calmly” are adverbs, which do not follow a linking verb, and “calmest” is a superlative that cannot go with “than”.' },
    { id: 't9l3ck-6', type: 'choose', tag: 'wo-front', level: 'C1+',
      stem: 'Which sentence is correct?',
      options: [
        'Only if you revise daily will you pass.',
        'Only if you revise daily, you will pass.',
        'Only if do you revise daily will you pass.',
        'Only if do you revise daily, you will pass.'
      ], answer: 0,
      hint: 'With “Only if”, one clause keeps normal order and one inverts. Which one?',
      why: 'After <em>Only if</em> + a condition clause, the <em>main</em> clause is inverted: Only if you revise daily <em>will you pass</em>. “Only if you revise daily, you will pass” keeps normal order in the main clause, and both sentences with “Only if do you revise” wrongly invert the “if” clause instead.' }
  ] }
});

TOPICS.push(T9);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'wf-pos': {
    name: 'Which part of speech fits the slot',
    principle: 'Cover the options and read the words on both sides of the gap. “the ___ of” needs a noun, “a ___ + noun” an adjective, “___ + adjective” or a gap that describes a verb needs an adverb.',
    reteach: 'Write one gapped sentence on the board and ask students to shout the SEAT (N, Adj, Adv, V) before anyone sees the options. Draw an arrow from the gap to the word it describes, deliberately choosing sentences where that word is two or three words away (think and remember ___ when…). Only then reveal the four family members and cross out the ones that do not fit the seat. Finish by showing that two survivors are separated by meaning, not grammar.',
    activities: [
      'Seat Bingo: students hold four cards (N / Adj / Adv / V). You read a TCAS-style sentence with “blank”; they hold up the seat card in three seconds.',
      'Arrow relay: pairs get five gapped sentences; one draws the arrow from the gap to its partner word, the other writes the form. Swap roles each sentence.'
    ]
  },
  'wf-family': {
    name: 'Word families & suffixes',
    principle: 'The suffix is the part-of-speech label (-tion noun, -al adjective, -ise verb, -ly adverb). If two options share a label, choose by meaning in the passage.',
    reteach: 'Build four-column family tables (noun / adjective / verb / adverb) for ten TCAS-likely roots (rely, create, identify, consist, tradition, practice, differ, effect, economy, power). Highlight the suffix in colour. Then show pairs that share a label (identity / identification, reliability / reliance, practical / impractical) and have students write one sentence that only one of them fits. Point out the -ly adjectives (costly, friendly, likely).',
    activities: [
      'Family reunion: each student gets one word card; they find their three “relatives” and stand in noun–adjective–verb–adverb order.',
      'Twin trouble: give two same-label words (creation/creativity); groups write a sentence where only one works and challenge another group.'
    ]
  },
  'wf-confuse': {
    name: 'Confusables (affect/effect, rise/raise, like/likely)',
    principle: 'Decide the job first. Affect is the verb, effect the noun; rise has no object, raise needs one; like + noun, be likely to + verb.',
    reteach: 'Teach each pair with one splitting question: “verb or noun?” (affect/effect, advise/advice), “is there an object?” (rise/raise, fall/fail), “money or the economy?” (economical/economic). Put the four-way TCAS mix on the board (negatively affect / negative effect / negatively effect / negative affect) and have students justify the two halves separately: the seat before the gap (can vs have) picks verb or noun, then the describer must agree.',
    activities: [
      'Balloon or lift: read sentences aloud; students float their hand up (rise, no object) or lift a book (raise, object).',
      'Two-question sort: students sort 12 sentences with affect/effect/rise/raise into a 2×2 grid by “verb or noun?” and “object or not?”.'
    ]
  },
  'wo-np': {
    name: 'Noun phrases & compounds',
    principle: 'The head noun is the last word. Describers in front of it (even nouns) stay singular: a ten-minute walk, a seven-year-old girl, but seven-year-olds.',
    reteach: 'Build noun phrases from right to left on the board: start with the head (system), add a compound (flood-warning), an adjective (new) and a determiner (the city’s). Then contrast a seven-year-old girl / seven-year-olds / seven years old (after be) side by side and ask “where is the head?” each time. Collect real examples from news headlines (youth violence, smartphone addiction, the world’s largest).',
    activities: [
      'Train builder: students get word cards and build the longest correct noun phrase they can, right to left, reading it aloud.',
      'Plural police: show ten phrases with hidden -s errors (a five-stars hotel, two-hours exam); teams race to arrest the wrong -s.'
    ]
  },
  'wo-adjorder': {
    name: 'Adjective order',
    principle: 'Opinion – size – age – shape – colour – origin – material – purpose + noun. The closer to the noun, the more the word defines the thing.',
    reteach: 'Explain the “permanence” logic: purpose and material define what a thing is, opinion is temporary, so they sit at opposite ends. Teach the OSASCOMP letters with the chant, then give four-way reorderings of real objects (a Thai silk scarf, a sports bag) and have students label each word with its letter before choosing. Mention that “how it was made” words (handmade) sit just before origin, as in the TCAS68 item.',
    activities: [
      'Human adjective line: eight students hold adjective cards and must stand in the right order in front of a “noun” student.',
      'Market stall: pairs describe an object from the classroom with three adjectives from different slots; the class checks the order.'
    ]
  },
  'wo-adverb': {
    name: 'Adverb placement & negation',
    principle: 'Short adverbs and not go after the first auxiliary or be and before the main verb (is not simply, will probably not notice). Never split a verb from its object; enough follows an adjective.',
    reteach: 'Draw the verb phrase as carriages: [auxiliary] [adverb/not] [main verb] [object] [manner adverb]. Place simply, even, probably, never and not into the right slot with example sentences. Then contrast is not simply … but (not only) with is simply not (definitely not) and show how a later “but” decides between them. Finish with enough (strong enough / enough time) and focus only (Only Mint passed / Mint only passed).',
    activities: [
      'Slot the adverb: students get a sentence strip and an adverb card and must physically place the card in the only correct gap.',
      'Meaning shift: move “only” to four positions in one sentence; groups draw a quick picture of what each version means.'
    ]
  },
  'wf-edIng': {
    name: '-ed/-ing adjectives & linking verbs',
    principle: '-ed = the person feels it; -ing = the thing causes it. After a linking verb (be, look, seem, feel, remain) use an adjective; after an action verb (look at, smell the bag) use an adverb.',
    reteach: 'Contrast pairs with a creator/viewer image: the clip is amazing (creator), I am amazed (viewer). Then list linking verbs and teach the is-test: if the verb can be replaced by is/was and still make sense, it takes an adjective (men look calmer = men are calmer). Show the same verb in both roles (She looked angry / She looked angrily at him) and ask what changed (the “at him”).',
    activities: [
      'Feeler or cause: students hold up a mirror sign (-ed, I feel it) or a megaphone sign (-ing, it causes it) for ten quick sentences.',
      'Is-test duel: pairs swap sentences with look/smell/grow/taste; each must prove adjective or adverb by saying the is-version aloud.'
    ]
  },
  'wf-compare': {
    name: 'Comparative forms in context',
    principle: 'Name the seat first (adjective or adverb), then add the comparison: think less effectively, look calmer. Use the + comparative twice in “the more …, the more …”, fewer with countable plurals, and never double a comparative.',
    reteach: 'Revisit slot analysis and then “upgrade” each form: effective → less effective (noun seat) vs effectively → less effectively (verb seat). Put the four-way TCAS options on the board and ask students to cover “less” and choose the part of speech first. Then drill the patterns: the + comparative, the + comparative; twice as … as; the cheaper of the two; fewer vs less.',
    activities: [
      'Upgrade shop: students roll a die (1–3 = adjective seat, 4–6 = adverb seat) and must produce the correct comparative of a given word.',
      'Mirror sentences: one student says “The more we practise…”, the partner must finish with “the + comparative …”.'
    ]
  },
  'wo-front': {
    name: 'Fronting, inversion & emphasis',
    principle: 'After a fronted negative or limiting word (Rarely, Not only, Little, No sooner, Only when), use question order: auxiliary + subject + verb, adding do/does/did if needed. With Only when/if/after, invert the main clause.',
    reteach: 'Start with a plain statement and a yes/no question to show the auxiliary–subject swap. Then add a trigger to the front and show that the swap is the same. Build a trigger list in three groups (negative adverbs, time pairs: No sooner … than / Hardly … when, Only + clause) and show where the inversion goes in each. Finish with Such was + noun + that and So + adjective + was + subject + that, and one example where no inversion happens (Only Mint passed).',
    activities: [
      'News headline remix: students rewrite five dramatic news facts starting with Rarely, Never, Little, Not only and Such was.',
      'Swap spotting: display ten sentences starting with a trigger; teams mark the auxiliary and subject and fix the ones in statement order.'
    ]
  }
});
