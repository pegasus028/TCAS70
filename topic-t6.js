/* ===========================================================================
   TCAS70 LAUNCHPAD — SYSTEM 06 · Visuals & Numbers
   Level 1 Tables (reading & ranking · arithmetic · what the visual shows)
   Level 2 Charts (trend language · pie charts & subgroups · comparing groups)
   Level 3 Diagrams (flowcharts · infographics · NOT provided & footnote traps)
   All data below are ILLUSTRATIVE, written for TCAS70 practice. Every
   figure has been checked for internal consistency and exact arithmetic.
   =========================================================================== */

var T6_SRC = 'Adapted for TCAS70 practice';

/* ---------------------------------------------------------------- LEVEL 1 VISUALS */
var T6_V_TOUR = { kind:'table',
  title:'Foreign visitors to ten Thai provinces, January–June 2026',
  cols:['Rank','Province','Foreign visitors'],
  rows:[['1','Bangkok','5,436,000'],
        ['2','Phuket','2,712,000'],
        ['3','Chonburi','1,905,000'],
        ['4','Chiang Mai','1,086,000'],
        ['5','Krabi','904,000'],
        ['6','Surat Thani','871,000'],
        ['7','Songkhla','452,000'],
        ['8','Prachuap Khiri Khan','318,000'],
        ['9','Phang Nga','297,000'],
        ['10','Udon Thani','118,000']],
  note:'Illustrative data for practice. Figures are rounded to the nearest thousand.',
  source:T6_SRC };

var T6_V_LIB = { kind:'table',
  title:'Library loans by genre at a Bangkok secondary school, January–August 2026',
  cols:['Genre','Number of loans'],
  rows:[['Fantasy','1,240'],
        ['Mystery & thriller','985'],
        ['Biography','298'],
        ['Webtoons & manga','1,615'],
        ['Science & nature','512'],
        ['Romance','760'],
        ['Self-help','430']],
  note:'Illustrative data for practice. One loan = one book borrowed once.',
  source:T6_SRC };

var T6_V_READ = { kind:'table',
  title:'Students who read for pleasure at least once a week, by grade, 2024 and 2026 (% of students in each grade)',
  cols:['Grade','2024','2026'],
  rows:[['M1','62','55'],
        ['M2','58','51'],
        ['M3','54','44'],
        ['M4','49','41'],
        ['M5','45','38'],
        ['M6','40','29']],
  note:'Illustrative data for practice. Survey of about 3,000 students at 12 Bangkok schools in each year.',
  source:T6_SRC };

var T6_V_SLEEP = { kind:'bar',
  title:'Average sleep on school nights, by grade, 2026',
  unit:'hours',
  labels:['M1','M2','M3','M4','M5','M6'],
  series:[{ name:'Average hours of sleep', values:[8.4, 8.1, 7.6, 7.2, 6.8, 6.3] }],
  note:'Illustrative data for practice. Survey of about 3,000 students at 12 Bangkok schools.',
  source:T6_SRC };

var T6_V_ORIGIN = { kind:'table',
  title:'Top ten countries of origin of foreign visitors to Thailand, January–August 2026',
  cols:['Rank','Country','Visitors'],
  rows:[['1','China','3,120,000'],
        ['2','Malaysia','2,640,000'],
        ['3','India','1,380,000'],
        ['4','South Korea','1,050,000'],
        ['5','Russia','1,020,000'],
        ['6','Japan','690,000'],
        ['7','United States','560,000'],
        ['8','United Kingdom','520,000'],
        ['9','Germany','390,000'],
        ['10','Laos','345,000']],
  note:'Illustrative data for practice, not official statistics.',
  source:T6_SRC };

/* ---------------------------------------------------------------- LEVEL 2 VISUALS */
var T6_V_LINE = { kind:'line',
  title:'Average daily time Thai teenagers spent on four online activities, 2019–2026',
  unit:'minutes per day',
  labels:['2019','2020','2021','2022','2023','2024','2025','2026'],
  series:[
    { name:'Short-video apps', values:[35, 58, 86, 102, 106, 108, 109, 109] },
    { name:'Messaging', values:[70, 72, 69, 71, 70, 72, 71, 70] },
    { name:'Online games', values:[52, 78, 66, 60, 54, 49, 45, 41] },
    { name:'Online reading', values:[28, 34, 25, 33, 24, 31, 22, 30] }
  ],
  note:'Illustrative data for practice. Survey of about 2,500 teenagers aged 13–18 each year.',
  source:T6_SRC };

var T6_V_PIE = { kind:'pie',
  title:'How teenagers in Bangkok mainly travel to school (survey of 2,000 students aged 15–18)',
  unit:'%',
  slices:[ { label:'Parents’ car', value:34 }, { label:'BTS / MRT', value:22 },
           { label:'School bus', value:18 }, { label:'Motorcycle taxi', value:11 },
           { label:'Public bus', value:9 }, { label:'Walking or cycling', value:6 } ],
  note:'Of the 22% who mainly use the BTS / MRT, female students make up 14% and male students 8% of the whole sample. Of the 11% who mainly use a motorcycle taxi, female students make up 4% and male students 7% of the whole sample. Illustrative data for practice.',
  source:T6_SRC };

var T6_V_SPEND = { kind:'bar',
  title:'How teenagers spend their monthly pocket money, by gender (% of each group’s total spending)',
  unit:'%',
  labels:['Food & drinks','Clothes','Games & apps','Beauty & personal care','Transport','Books & stationery','Concerts & events','Others'],
  series:[
    { name:'Female', values:[31, 22, 4, 14, 9, 8, 7, 5] },
    { name:'Male', values:[34, 11, 19, 3, 10, 6, 5, 12] }
  ],
  note:'Illustrative data for practice. Survey of 1,600 students aged 15–18. Each group’s figures add up to 100%.',
  source:T6_SRC };

var T6_V_PM = { kind:'line',
  title:'Monthly average PM2.5 levels in Chiang Mai and Bangkok, January–June 2026',
  unit:'µg/m³',
  labels:['Jan','Feb','Mar','Apr','May','Jun'],
  series:[
    { name:'Chiang Mai', values:[48, 72, 118, 96, 41, 18] },
    { name:'Bangkok', values:[52, 44, 36, 30, 22, 17] }
  ],
  note:'Guideline level used in this chart: 37.5 µg/m³. Illustrative data for practice.',
  source:T6_SRC };

var T6_V_PMSRC = { kind:'pie',
  title:'Estimated sources of PM2.5 in Chiang Mai, March 2026',
  unit:'%',
  slices:[ { label:'Open burning', value:55 }, { label:'Smoke from neighbouring countries', value:18 },
           { label:'Vehicles', value:15 }, { label:'Industry', value:7 }, { label:'Other', value:5 } ],
  note:'Of the 55% from open burning, forest fires account for 38% and farm burning for 17% of the total. Illustrative data for practice.',
  source:T6_SRC };

/* ---------------------------------------------------------------- LEVEL 3 VISUALS */
var T6_V_HEAT = { kind:'flow',
  title:'Sports day: what to do if a student shows signs of heat illness',
  steps:[
    'A student feels dizzy, very hot, sick or confused during an outdoor event',
    { q:'Is the student awake and able to answer simple questions?',
      yes:['Help them to a cool, shaded place','Give small sips of cool water','Loosen tight clothing and fan them'],
      no:['Call the emergency hotline at once','Move them into the shade and cool them with wet towels','Do not give them anything to drink'] },
    { q:'After 15 minutes, does the student feel better?',
      yes:['Let them rest; no more sport that day'],
      no:['Call the emergency hotline and the school nurse'] },
    'Record what happened and contact the student’s parents'
  ],
  note:'Illustrative flowchart for practice. Always follow your school’s own first-aid rules.',
  source:T6_SRC };

var T6_G_MICRO =
'<div class="infog">' +
'<p><strong>MICROPLASTICS</strong></p>' +
'<div><p><strong>1 · Sources</strong></p><ul><li>Synthetic clothes (polyester, nylon) shed fibres in the wash</li><li>Car tyres wear down on roads</li><li>Plastic bags and bottles break into small pieces</li><li>Some cosmetics and cleaning products</li></ul></div>' +
'<div><p><strong>2 · Pathways</strong></p><ul><li>Wastewater → rivers → the sea</li><li>Wind carries dust from roads</li><li>Rain washes particles into the soil</li></ul></div>' +
'<div><p><strong>3 · Where they end up</strong></p><ul><li>Fish and shellfish</li><li>Sea salt and drinking water</li><li>Farm soil</li></ul></div>' +
'<div><p><strong>4 · Possible effects (still being studied)</strong></p><ul><li>Animals: blocked stomachs; they eat less</li><li>Soil: changes in how water drains</li><li>Humans: particles have been found in the body; long-term effects are not yet clear</li></ul></div>' +
'<p><em>Illustrative infographic for practice.</em></p>' +
'</div>';

var T6_V_RECYC = { kind:'bar',
  title:'Plastic collected for recycling in a Thai city, 2021–2026',
  unit:'thousand tonnes',
  labels:['2021','2022','2023','2024','2025','2026*'],
  series:[{ name:'Plastic collected', values:[42, 47, 53, 58, 64, 35] }],
  note:'*The 2026 figure covers January–June only. Illustrative data for practice.',
  source:T6_SRC };

var T6_V_APPS = { kind:'table',
  title:'Apps used “almost every day” by M4–M6 students (survey of 1,000 students)',
  cols:['App','% of respondents'],
  rows:[['LINE','92'],['TikTok','78'],['YouTube','71'],['Instagram','64'],['Facebook','23'],['X','12']],
  note:'Respondents could choose more than one app, so the percentages add up to more than 100. Illustrative data for practice.',
  source:T6_SRC };

var T6_V_CLIP = { kind:'flow',
  title:'Before you share: checking a viral video clip',
  steps:[
    'You receive a shocking video clip in a group chat',
    { q:'Can you find the account that first posted it?',
      yes:['Check whether that account is a known news outlet or an official source'],
      no:['Treat the clip as unverified for now'] },
    { q:'Have at least two trusted news outlets reported the same event?',
      yes:['You may share it, together with a link to a news report'],
      no:['Do not share it','Tell the group that the clip has not been verified'] },
    'If the clip seems designed to mislead, report it to the platform'
  ],
  note:'Illustrative flowchart for practice.',
  source:T6_SRC };

var T6_V_WASTE = { kind:'table',
  title:'Where our canteen waste goes: one school’s three-stream system',
  cols:['Waste stream','Step 1','Step 2','End point'],
  rows:[['Food scraps','Collected in green bins','Composted for 8 weeks','Fertiliser for the school vegetable garden'],
        ['Clean plastic bottles and cups','Rinsed by student volunteers','Stored in yellow bins','Collected by a recycling company'],
        ['Everything else','Placed in grey bins','Collected by the district','Landfill']],
  note:'Vegetables from the school garden are cooked in the canteen, so the food-scrap stream returns to the kitchen. Illustrative diagram for practice.',
  source:T6_SRC };

var T6_V_WEEK = { kind:'bar',
  title:'Food scraps collected from the school canteen, 31 August–25 September 2026',
  unit:'kg',
  labels:['Week 1','Week 2','Week 3','Week 4*'],
  series:[{ name:'Food scraps', values:[210, 196, 204, 118] }],
  note:'Weeks 1–3 had five school days each. *Week 4 (21–25 September) had only three school days because the school closed on 24–25 September during the floods. Illustrative data for practice.',
  source:T6_SRC };

var T6 = {
  id:'t6', n:6, code:'System 06', art:'chart',
  name:'Visuals & Numbers',
  cefr:'B1+–B2+',
  blurb:'Reading Part IV: tables, charts and diagrams — read the title, units and notes first, then rank, calculate, describe trends, compare groups, follow flowcharts and spot what the visual does NOT tell you.',
  levels:[]
};

/* =========================================================== LEVEL 1 TABLES */
T6.levels.push({
  id:'t6l1', n:1, name:'Tables', cefr:'B1+',
  blurb:'Read the title, units and note before any number; then rank, calculate and say in one line what the table shows.',
  subs:[

    /* ------------------------------------------------------------ 1.1 */
    {
      id:'t6l1s1', name:'Reading tables & rankings', cefr:'B1+', tag:'vs-table',
      theory:{
        key:'Read the <strong>title, column headings, units and note first</strong>; then find the row the question names and answer only from that row, never from memory.',
        body:[
          'A table is a sentence that has been cut into boxes. The title tells you <strong>what</strong> is being counted, <strong>where</strong> and <strong>when</strong>; the column headings tell you what each number means; the units (people, %, baht, thousands) tell you how big it really is; and the note under the table tells you any rule or exception. If you jump straight to the numbers, you are reading the boxes without the sentence. So spend your first ten seconds on the frame: <em>Foreign visitors · ten provinces · January–June 2026 · rounded to the nearest thousand.</em> Now every number has a meaning.',
          'TCAS tables come in two shapes. A <strong>ranked table</strong> (TCAS69 printed Thai provinces in order of foreign tourists) looks easy, but the options are chosen to make you compare rows that are far apart: “Of the four provinces below, which one had the <em>lowest</em> number?” The trap is that the four options are not the bottom four of the table, so “lowest” means lowest <em>among those four</em>. An <strong>unranked table</strong> (TCAS68’s teen-spending table was not in order for every column) forces you to do the ranking yourself, and a quick misread of one digit (1,086,000 vs 108,600) can flip the answer.',
          '<strong>The four-step table routine.</strong> Step 1: frame — title, headings, units, note. Step 2: read the stem and circle the comparison word (<em>highest, lowest, second-highest, more than, fewer than, between</em>). Step 3: put your finger on each option’s row and write its number next to the option. Step 4: now compare only those numbers. With four numbers on your paper, “second-highest among these four” takes three seconds and cannot be misread.',
          'Watch the size words carefully. <em>More than 1 million</em> excludes 1,000,000 itself; <em>fewer than 300,000</em> excludes 318,000 but includes 297,000. Numbers that sit just above or just below a boundary are placed in the options on purpose.'
        ],
        simple:[
          'First read the title, the column names, the units and the small note. Then read the numbers.',
          'Write the number for each option next to it. Then compare only those numbers.',
          '“Lowest of these four” is not always the lowest in the whole table.'
        ],
        thai:'ก่อนดูตัวเลข ให้อ่านชื่อตาราง หัวคอลัมน์ หน่วย และหมายเหตุใต้ตารางก่อนเสมอ เพราะบอกว่านับอะไร ที่ไหน เมื่อไร และหน่วยเท่าไร จากนั้นวงคำเปรียบเทียบในโจทย์ (highest, lowest, second-highest) แล้วจดตัวเลขของแต่ละตัวเลือกไว้ข้าง ๆ ก่อนเปรียบเทียบ กับดักของ TCAS คือโจทย์ถามว่า “ต่ำสุดในสี่ตัวเลือกนี้” ซึ่งไม่ใช่แถวสุดท้ายของตาราง และตัวเลขที่อยู่ใกล้เส้นแบ่ง (เช่น 297,000 กับ 318,000) มักถูกวางมาหลอก',
        examples:[
          { s:'Title first: <strong>Foreign visitors · ten provinces · January–June 2026</strong>.', g:'What, where, when: now each number has a meaning.' },
          { s:'Of Krabi, Songkhla, Chiang Mai and Surat Thani, the <strong>second-highest</strong> is Krabi.', g:'Chiang Mai 1,086,000 > Krabi 904,000 > Surat Thani 871,000 > Songkhla 452,000.' },
          { s:'Prachuap Khiri Khan (318,000) is <strong>not</strong> “fewer than 300,000”; Phang Nga (297,000) is.', g:'Boundary numbers are placed in options on purpose.' },
          { s:'In an unranked table, <strong>rank it yourself</strong>: Webtoons 1,615 > Fantasy 1,240 > Mystery 985…', g:'Write the order in the margin before answering.' }
        ],
        trap:'The “whole-table” trap: the stem says “Of the four provinces below, which one had the lowest number?” and you choose the province at the bottom of the whole table, which is not even in the options, or the one you remember as small. Dodge: write each option’s number beside it and compare those four numbers only.',
        analogy:{ title:'The BTS map', text:'A table is like the BTS Skytrain map. Before you look for your station, you check which line you are on (the title), which direction the train is going (the column headings) and whether it is the weekday or the weekend timetable (the note). Find your station without doing that, and you may end up at Mo Chit when you wanted Bearing.' },
        map:{ center:'Reading a table', branches:[
          { label:'Frame first', leaves:['title: what, where, when','column headings','units','note under the table'] },
          { label:'Question words', leaves:['highest / lowest','second-highest','more than / fewer than'] },
          { label:'Method', leaves:['finger on each row','write numbers by options','compare only those'] },
          { label:'Traps', leaves:['whole table vs four options','boundary numbers','misread digits'] }
        ] },
        story:{ title:'Nong Bot reads the table', panels:[
          { who:'T.Chris', text:'Of Krabi, Songkhla, Chiang Mai and Surat Thani, which had the second-highest number of foreign visitors?' },
          { who:'Nong Bot', text:'Easy! Phuket is number two in the table. Answer: Phuket.' },
          { who:'Pun', text:'Bot, Phuket isn’t even in the options. You answered a question nobody asked.' },
          { who:'Mint', text:'I’ll write the numbers next to the options: 904, 452, 1,086, 871 thousand. Highest is Chiang Mai, so the second-highest is Krabi.' },
          { who:'Fah', text:'Rank the four you are given, not the ten you can see.' },
          { who:'Nong Bot', text:'Updating software… “Second” now means second among the options. Also, sorry, Phuket.' }
        ], moral:'Rank only the rows the question gives you.' }
      },
      items:[
        { id:'t6l1s1-1', type:'read', tag:'vs-table', level:'B1+', passage:'', visual:T6_V_TOUR,
          stem:'Which province ranked immediately below Chonburi?',
          options:['Krabi','Phuket','Songkhla','Chiang Mai'],
          answer:3,
          hint:'Find Chonburi’s rank first. “Below” in a ranking means a lower number of visitors.',
          why:'Chonburi is third, so the province immediately below it is fourth: Chiang Mai (1,086,000). Phuket is immediately <em>above</em> Chonburi (second), which makes it the trap for students who read the table upwards. Krabi is fifth and Songkhla seventh.' },

        { id:'t6l1s1-2', type:'read', tag:'vs-table', level:'B1+', passage:'', visual:T6_V_TOUR,
          stem:'Of the four provinces below, which one received the second-highest number of foreign visitors?',
          options:['Krabi','Songkhla','Phang Nga','Prachuap Khiri Khan'],
          answer:1,
          hint:'Write each option’s number beside it, then rank only those four.',
          why:'Among these four provinces, Krabi is highest (904,000), Songkhla second (452,000), Prachuap Khiri Khan third (318,000) and Phang Nga lowest (297,000). Krabi is the trap for students who read “highest” and stop, and Phuket, the second-highest in the whole table, is not even an option: rank <em>these four</em> only.' },

        { id:'t6l1s1-3', type:'sort', tag:'vs-table', level:'B1+', visual:T6_V_TOUR,
          stem:'Use the table. Put each province in the correct bin.',
          bins:[
            { key:'high', label:'More than 1 million', hint:'over 1,000,000' },
            { key:'mid', label:'300,000 to 1 million', hint:'check the first digits' },
            { key:'low', label:'Fewer than 300,000', hint:'under 300,000' }
          ],
          items:[
            { text:'Chonburi', bin:'high' },
            { text:'Chiang Mai', bin:'high' },
            { text:'Krabi', bin:'mid' },
            { text:'Songkhla', bin:'mid' },
            { text:'Prachuap Khiri Khan', bin:'mid' },
            { text:'Phang Nga', bin:'low' },
            { text:'Udon Thani', bin:'low' }
          ],
          hint:'Two provinces sit very close to a boundary. Count the digits carefully.',
          why:'Chiang Mai (1,086,000) is just over one million, and Prachuap Khiri Khan (318,000) is just over 300,000, while Phang Nga (297,000) is just under it. Boundary numbers like these are exactly where careless readers slip, so always read every digit.' },

        { id:'t6l1s1-4', type:'order', tag:'vs-table', level:'B1+', visual:T6_V_LIB,
          stem:'This table is NOT in rank order. Put the genres in order from the MOST loans to the FEWEST.',
          items:['Webtoons & manga','Fantasy','Mystery & thriller','Romance','Science & nature','Self-help','Biography'],
          hint:'Write the numbers in the margin first, then order them.',
          why:'The correct order is Webtoons & manga (1,615), Fantasy (1,240), Mystery & thriller (985), Romance (760), Science & nature (512), Self-help (430) and Biography (298). In an unranked table you must build the ranking yourself before answering any “most” or “second-most” question.' },

        { id:'t6l1s1-5', type:'read', tag:'vs-table', level:'B1+', passage:'', visual:T6_V_LIB,
          stem:'Which genre was borrowed more often than Romance but less often than Fantasy?',
          options:['Self-help','Biography','Webtoons & manga','Mystery & thriller'],
          answer:3,
          hint:'Find the Romance and Fantasy numbers first. Your answer must sit between them.',
          why:'Romance has 760 loans and Fantasy has 1,240, so the answer must be between those two numbers: Mystery & thriller (985). Webtoons & manga (1,615) is more than Fantasy, and Self-help (430) and Biography (298) are less than Romance.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id:'t6l1s2', name:'Arithmetic: times as many, combined, difference, closest pair', cefr:'B2', tag:'vs-math',
      theory:{
        key:'Turn every number question into one calculation — <strong>divide</strong> for “times as many”, <strong>add</strong> for “combined”, <strong>subtract</strong> for “difference” and “closest pair” — and work it out on paper, not in your head.',
        body:[
          'TCAS69 asked three arithmetic questions on its visuals: two on a table, <em>“Bangkok has approximately six times as many foreign tourists as which province?”</em> and <em>“Which pair of provinces showed the closest figures?”</em>, and one on a pie chart, <em>“What is the combined percentage…?”</em> None of them needs advanced maths. They need you to recognise which operation the English words are asking for. <strong>Times as many</strong> = divide the big number by the small one. <strong>Combined / together / in total</strong> = add. <strong>Difference / how many more / gap</strong> = subtract. <strong>Closest pair</strong> = subtract inside each pair and choose the smallest result.',
          '“Approximately” questions reward rounding. To test “Bangkok had approximately five times as many as…”, round first: Bangkok ≈ 5.4 million. Five times what is 5.4 million? About 1.1 million, so look for a province near 1.1 million: Chiang Mai (1,086,000). You do not need to divide every option exactly; you need a target number. Krabi (904,000) gives about six times, not five, so it is the near miss.',
          '<strong>Percent vs percentage points.</strong> If 40% of M6 students read weekly in 2024 and 29% did in 2026, the fall is <strong>11 percentage points</strong> (40 − 29). It is not “11 percent”: 11 is about 28% of 40. TCAS69 wrote “percentage difference” loosely, but the options were simple subtractions, so subtract unless the stem clearly asks for a ratio. And <strong>check the year</strong>: when a table has two years, distractors are built by subtracting across the wrong years.',
          '<strong>Multi-step questions</strong> hide two operations in one stem: <em>“How many more visitors did Bangkok receive than Phuket and Chonburi combined?”</em> First add (2,712,000 + 1,905,000 = 4,617,000), then subtract (5,436,000 − 4,617,000 = 819,000). Every wrong option is the result of stopping after one step or choosing the wrong operation, so write each step down.'
        ],
        simple:[
          '“Times as many” means divide. “Combined” means add. “Difference” and “how many more” mean subtract.',
          '“Closest pair” means: subtract inside each pair and choose the smallest answer.',
          'Write the numbers down. Do not calculate in your head.'
        ],
        thai:'ข้อคำนวณจากกราฟ/ตารางใช้แค่บวก ลบ คูณ หาร แต่ต้องแปลงคำถามให้ถูก: times as many = หาร, combined/together = บวก, difference/how many more = ลบ, closest pair = ลบในแต่ละคู่แล้วเลือกผลต่างน้อยสุด ข้อ approximately ให้ปัดตัวเลขก่อนแล้วหา “เป้า” เช่น 5.4 ล้าน ÷ 5 ≈ 1.1 ล้าน กับดักคือเปอร์เซ็นต์ vs percentage points (40% → 29% ลดลง 11 percentage points ไม่ใช่ 11%) และโจทย์หลายขั้นที่ตัวเลือกผิดคือผลลัพธ์ของการคิดแค่ขั้นเดียว',
        examples:[
          { s:'Bangkok (5,436,000) had approximately <strong>five times as many</strong> visitors as Chiang Mai (1,086,000).', g:'5,436,000 ÷ 1,086,000 ≈ 5.0 → divide.' },
          { s:'Phuket and Krabi <strong>combined</strong>: 2,712,000 + 904,000 = 3,616,000.', g:'combined → add.' },
          { s:'The <strong>closest pair</strong>: Phang Nga and Prachuap Khiri Khan (318,000 − 297,000 = 21,000).', g:'Krabi – Surat Thani is 33,000 apart: close, but not closest.' },
          { s:'M6 weekly readers fell from 40% to 29%: a fall of <strong>11 percentage points</strong>.', g:'Subtract percentages → percentage points.' },
          { s:'Bangkok − (Phuket + Chonburi) = 5,436,000 − 4,617,000 = <strong>819,000</strong>.', g:'Two steps: add, then subtract.' }
        ],
        trap:'The one-step trap in a two-step question. “How many more than Phuket and Chonburi combined?” always has options for Bangkok − Phuket and Bangkok − Chonburi, which are the answers you get if you stop halfway. Dodge: underline every operation word in the stem (more than = subtract, combined = add) and tick each one off as you do it.',
        analogy:{ title:'The 7-Eleven receipt', text:'At 7-Eleven you add the prices of everything in the basket (combined), subtract the total from the 100-baht note to get your change (difference), and notice that the big water is about three times the price of the small one (times as many). Visual questions are the same receipt; the only skill is knowing which button to press.' },
        map:{ center:'Numbers on visuals', branches:[
          { label:'Divide', leaves:['times as many','approximately x times','round first, find target'] },
          { label:'Add', leaves:['combined','together, in total'] },
          { label:'Subtract', leaves:['difference, how many more','closest pair = smallest gap','percentage points'] },
          { label:'Two steps', leaves:['add then subtract','wrong options = half-done','write each step'] }
        ] },
        chant:{ title:'Press the Right Button', beat:'clap-clap-snap (4/4)', lines:[
          'Times as many? Divide it, divide it!',
          'Combined together? Add it up, add it up!',
          'How many more? Take it away, take it away!',
          'Closest pair? Smallest gap wins the day!',
          'Forty to twenty-nine, what do you say?',
          'Eleven points, not percent, okay?',
          'Two steps hiding? Write both down,',
          'Half an answer is the trap in town!'
        ] }
      },
      items:[
        { id:'t6l1s2-1', type:'read', tag:'vs-math', level:'B2', passage:'', visual:T6_V_TOUR,
          stem:'Bangkok received approximately five times as many foreign visitors as which province?',
          options:['Krabi','Phuket','Chiang Mai','Surat Thani'],
          answer:2,
          hint:'Round Bangkok’s figure, divide by five, and look for the province nearest your target.',
          why:'5,436,000 ÷ 5 ≈ 1.1 million, and Chiang Mai had 1,086,000 (5,436,000 ÷ 1,086,000 ≈ 5.0). Krabi is the near miss: Bangkok had about six times as many visitors as Krabi (≈ 6.0), and about 6.2 times as many as Surat Thani. Bangkok had only about twice as many as Phuket.' },

        { id:'t6l1s2-2', type:'read', tag:'vs-math', level:'B2', passage:'', visual:T6_V_TOUR,
          stem:'Which pair of provinces had the closest numbers of foreign visitors?',
          options:['Phuket – Chonburi','Krabi – Surat Thani','Phang Nga – Udon Thani','Phang Nga – Prachuap Khiri Khan'],
          answer:3,
          hint:'Subtract inside each pair. The smallest gap wins.',
          why:'Phang Nga (297,000) and Prachuap Khiri Khan (318,000) are only 21,000 apart. Krabi and Surat Thani look close (904,000 vs 871,000), but the gap is 33,000. Phang Nga – Udon Thani is 179,000 apart and Phuket – Chonburi 807,000.' },

        { id:'t6l1s2-3', type:'judge', tag:'vs-math', level:'B2', visual:T6_V_TOUR,
          given:'Use the table of foreign visitors, January–June 2026.',
          stem:'True, False or Not given? <strong>Phuket received more than half as many foreign visitors as Bangkok.</strong>',
          answer:1,
          hint:'Double Phuket’s figure and compare it with Bangkok’s exactly.',
          why:'False. 2,712,000 × 2 = 5,424,000, which is slightly less than Bangkok’s 5,436,000, so Phuket received just under half as many visitors as Bangkok. The numbers look like “about half”, but “more than half” is a precise claim, and precise claims need exact arithmetic.' },

        { id:'t6l1s2-4', type:'read', tag:'vs-math', level:'B2', passage:'', visual:T6_V_TOUR,
          stem:'How many more foreign visitors did Bangkok receive than Phuket and Chonburi combined?',
          options:['819,000','2,724,000','3,531,000','10,053,000'],
          answer:0,
          hint:'Two operations are hidden in the stem. Which comes first?',
          why:'First add Phuket and Chonburi (2,712,000 + 1,905,000 = 4,617,000), then subtract from Bangkok: 5,436,000 − 4,617,000 = 819,000. 2,724,000 is Bangkok minus Phuket only, 3,531,000 is Bangkok minus Chonburi only, and 10,053,000 is all three added together.' },

        { id:'t6l1s2-5', type:'read', tag:'vs-math', level:'B2', passage:'', visual:T6_V_READ,
          stem:'In 2026, the share of M1 students who read for pleasure every week was how many percentage points higher than the share of M6 students?',
          options:['7','22','26','33'],
          answer:2,
          hint:'Use the 2026 column only for both grades.',
          why:'In 2026, M1 = 55% and M6 = 29%, so the gap is 55 − 29 = 26 percentage points. 22 is the gap in 2024 (62 − 40), 33 mixes the two years (62 − 29), and 7 is how much the M1 figure fell between 2024 and 2026.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id:'t6l1s3', name:'What the visual shows & the best title', cefr:'B2', tag:'vs-title',
      theory:{
        key:'A correct “What does the visual show?” answer names <strong>what is measured, for whom, and when</strong>, exactly as the title and units say; a wrong one changes the measure, adds a cause, or narrows it to one row.',
        body:[
          'Every TCAS visual set opens with a big-picture question: <em>“The three bar charts compare ___”</em> (TCAS66), <em>“What is the best title of the diagram?”</em> (TCAS67), <em>“What does the table primarily show?”</em> (TCAS68). The answer is almost always built from the visual’s own frame: the title, the headings and the unit. So the question is really asking, “Did you read the frame?”',
          'The distractors are built in four predictable ways. <strong>Wrong measure</strong>: the table counts <em>visitors</em>, the option says <em>income</em> or <em>spending</em>. <strong>Wrong time</strong>: the table shows one period, the option says <em>changes between 2025 and 2026</em>. <strong>Added cause</strong>: the chart shows <em>that</em> sleep falls with age; the option explains <em>why</em> (“because of phones”), which no chart can show without extra data. <strong>Too narrow</strong>: one row or one group (“Reading habits of M6 students”) instead of the whole picture. TCAS68’s key, “the comparison of teen spending habits between females and males”, beat “the most popular items purchased by teens overall” because the table had two columns: the word <em>between</em> was the frame.',
          '<strong>Units change meaning.</strong> In a table titled “% of students in each grade”, the number 38 in the M5 row means 38% <em>of M5 students</em>, not 38% of all readers and not 38 people. Titles often end in brackets — <em>(minutes per day)</em>, <em>(% of each group’s spending)</em>, <em>(thousand tonnes)</em> — and that bracket is part of the answer.',
          '<strong>Procedure.</strong> Step 1: say the frame in one line: <em>measure + who/where + when</em>. Step 2: for “best title”, also add the overall pattern if there is one (<em>falls in every grade</em>). Step 3: cross out options that change the measure, the time, the group, or add a cause.'
        ],
        simple:[
          'Read the title and the units. They tell you what the visual shows.',
          'Wrong answers change what is measured, change the time, give a reason (why), or talk about only one small part.',
          'A good title says what, who and when, and sometimes the main pattern.'
        ],
        thai:'ข้อ “What does the visual show?” หรือ “best title” คำตอบมาจากกรอบของภาพ คือชื่อ หัวคอลัมน์ และหน่วย ให้สรุปเองหนึ่งบรรทัดว่า “วัดอะไร + ของใคร/ที่ไหน + เมื่อไร” ตัวเลือกหลอกมี 4 แบบ: เปลี่ยนสิ่งที่วัด (จำนวนคน → รายได้), เปลี่ยนช่วงเวลา, ใส่สาเหตุที่กราฟไม่ได้บอก (because of phones) และแคบเกินไป (พูดถึงแถวเดียว) ระวังหน่วยในวงเล็บ เช่น “% of students in each grade” แปลว่า 38 คือ 38% ของนักเรียนชั้นนั้น ไม่ใช่ 38 คน',
        examples:[
          { s:'Frame: <strong>foreign visitors · ten provinces · January–June 2026</strong>.', g:'So an option about tourist income is the wrong measure.' },
          { s:'Best title: <strong>Pleasure Reading Drops Across All Grades</strong>.', g:'Measure + group + pattern; every row fell.' },
          { s:'“Why Thai Teenagers Have Stopped Reading”', g:'Adds a cause and overclaims: the table gives no reasons.' },
          { s:'“38” in the M5 / 2026 cell = <strong>38% of M5 students</strong>.', g:'The heading says % of students in each grade.' }
        ],
        trap:'The “interesting cause” trap. An option like “why older students sleep less than younger ones” feels clever and fits what you already believe, but a chart of averages cannot show a reason. Dodge: if an option contains <em>why, because, due to, reasons</em>, check whether the visual actually lists reasons. If not, cross it out.',
        analogy:{ title:'The concert ticket', text:'A concert ticket says who is performing, where and when, and your seat zone. That is the title and units of a visual. If someone tells you the ticket is for a different artist, a different night or a different zone, you would notice at once. Treat each option like a ticket you are checking at the gate.' },
        map:{ center:'What the visual shows', branches:[
          { label:'Frame', leaves:['what is measured','who / where','when','unit in brackets'] },
          { label:'Wrong measure', leaves:['visitors ≠ income','hours ≠ number of students'] },
          { label:'Wrong scope', leaves:['one row only','wrong years','whole vs group'] },
          { label:'Added cause', leaves:['why, because','no reasons in data'] }
        ] },
        moves:[
          { move:'Point to the top of an imaginary chart', says:'Title first: what, who, when.' },
          { move:'Tap your wrist like a watch', says:'Check the time: which years or months?' },
          { move:'Hold up a measuring hand (thumb and finger apart)', says:'Check the unit: %, minutes, thousands?' },
          { move:'Cross your arms in an X', says:'Why and because? Cross them out.' },
          { move:'Spread your arms wide', says:'Choose the answer that covers the whole picture.' }
        ]
      },
      items:[
        { id:'t6l1s3-1', type:'read', tag:'vs-title', level:'B2', passage:'', visual:T6_V_TOUR,
          stem:'What does the table mainly show?',
          options:[
            'The most popular tourist attractions in Thailand',
            'Foreign visitor numbers in ten provinces, January to June 2026',
            'The amount of money that foreign tourists spent in each of the ten provinces',
            'How the number of foreign visitors to each province changed from 2025 to 2026'
          ],
          answer:1,
          hint:'Check each option against the title: what is counted, where and when?',
          why:'The title and heading say the table counts foreign visitors in ten provinces from January to June 2026. The money option changes the measure (visitors, not spending), the 2025–2026 option adds a comparison the table does not contain, and “tourist attractions” are never listed.' },

        { id:'t6l1s3-2', type:'read', tag:'vs-title', level:'B2', passage:'', visual:T6_V_READ,
          stem:'Which of the following would be the best title for the table?',
          options:[
            'Reading Habits of M6 Students',
            'Why Thai Teenagers Have Stopped Reading',
            'Pleasure Reading Drops Across All Grades',
            'Older Students Now Read More for Pleasure'
          ],
          answer:2,
          hint:'Compare 2024 and 2026 in every row. What do all six rows have in common?',
          why:'Every grade shows a lower figure in 2026 than in 2024, so “drops across all grades” covers the whole table. “M6 students” is too narrow, “Older Students Now Read More” is contradicted (the figures fall as grades rise), and “Why … Stopped Reading” adds a cause and overclaims: most M1 students still read weekly.' },

        { id:'t6l1s3-3', type:'read', tag:'vs-title', level:'B2', passage:'', visual:T6_V_SLEEP,
          stem:'The bar chart shows ________.',
          options:[
            'average school-night sleep in each grade',
            'how many students sleep less than eight hours',
            'why older students sleep less than younger ones',
            'how students’ sleep changed between weekdays and weekends'
          ],
          answer:0,
          hint:'Read the title and the unit. Is the chart counting students, hours or reasons?',
          why:'The title says “Average sleep on school nights, by grade”, and the unit is hours. “How many students” changes the measure to a number of people, “why” adds a cause that the chart cannot show, and weekends are not in the chart at all.' },

        { id:'t6l1s3-4', type:'read', tag:'vs-title', level:'B2', passage:'', visual:T6_V_READ,
          stem:'In the table, the number 38 in the M5 row for 2026 means that ________.',
          options:[
            '38 M5 students read for pleasure every week',
            '38% of M5 students read for pleasure at least weekly',
            '38% of all the students who read weekly were M5 students',
            'the M5 students surveyed read for pleasure for 38 minutes a week'
          ],
          answer:1,
          hint:'Look at the bracket at the end of the title. What is the number a percentage of?',
          why:'The title says the figures are “% of students in each grade”, so 38 means 38% of the M5 students surveyed. It is not 38 people, not minutes, and not a share of all weekly readers; “38% of all the students who read weekly” is the near miss because it keeps the % but changes the group.' },

        { id:'t6l1s3-5', type:'sort', tag:'vs-title', level:'B2', visual:T6_V_SLEEP,
          stem:'These are possible titles for the sleep chart. Put each one in the right bin.',
          bins:[
            { key:'narrow', label:'Too narrow', hint:'one bar only' },
            { key:'right', label:'Good title', hint:'whole chart, right measure' },
            { key:'wrong', label:'Wrong measure or added cause', hint:'not what the chart shows' }
          ],
          items:[
            { text:'M6 Students Sleep 6.3 Hours', bin:'narrow' },
            { text:'M1 Students Get the Most Sleep', bin:'narrow' },
            { text:'School-Night Sleep Falls Grade by Grade', bin:'right' },
            { text:'Average School-Night Sleep from M1 to M6', bin:'right' },
            { text:'Phones Keep Older Students Awake', bin:'wrong' },
            { text:'How Many Students Sleep Eight Hours', bin:'wrong' }
          ],
          hint:'For each title ask: one bar or all six? Hours, people or reasons?',
          why:'The M6 and M1 titles describe one bar each, so they are too narrow. “Phones” adds a cause that the chart never shows, and “How Many Students” turns average hours into a number of people. The two good titles cover all six grades and keep the measure: average hours on school nights.' }
      ]
    }
  ],

  check:{ id:'t6l1ck', name:'Systems Check · Tables', items:[
    { id:'t6l1ck-1', type:'read', tag:'vs-title', level:'B2', passage:'', visual:T6_V_ORIGIN,
      stem:'What does the table primarily show?',
      options:[
        'The Thai provinces most often visited by tourists from abroad',
        'How visitor numbers from each country changed between 2025 and 2026',
        'The leading sources of foreign visitors to Thailand, January–August 2026',
        'How much money visitors from each of the ten countries spent while they were in Thailand'
      ],
      answer:2,
      hint:'Read the title and the column headings. What is counted, and over what period?',
      why:'The table ranks ten countries of origin by the number of visitors they sent to Thailand from January to August 2026. It does not show provinces, it does not compare two years, and it counts people, not money.' },

    { id:'t6l1ck-2', type:'read', tag:'vs-table', level:'B2', passage:'', visual:T6_V_ORIGIN,
      stem:'Of the four countries below, which one sent the third-largest number of visitors to Thailand?',
      options:['India','Japan','Russia','Germany'],
      answer:1,
      hint:'Rank only these four, from largest to smallest.',
      why:'Among these four, India is first (1,380,000), Russia second (1,020,000), Japan third (690,000) and Germany fourth (390,000). India is third in the whole table, which makes it the trap for students who rank all ten rows instead of the four options.' },

    { id:'t6l1ck-3', type:'read', tag:'vs-math', level:'B2+', passage:'', visual:T6_V_ORIGIN,
      stem:'China sent approximately eight times as many visitors to Thailand as ________.',
      options:['Laos','Japan','Germany','the United States'],
      answer:2,
      hint:'Divide China’s figure by eight and look for the country nearest the result.',
      why:'3,120,000 ÷ 8 = 390,000, exactly Germany’s figure. Laos (345,000) is the near miss: China sent about nine times as many visitors as Laos (≈ 9.0). China sent about 4.5 times as many as Japan and about 5.6 times as many as the United States.' },

    { id:'t6l1ck-4', type:'read', tag:'vs-math', level:'B2+', passage:'', visual:T6_V_ORIGIN,
      stem:'Which pair of countries showed the closest visitor numbers?',
      options:['Germany – Laos','South Korea – Russia','Japan – United States','United States – United Kingdom'],
      answer:1,
      hint:'Work out the gap inside each pair before choosing.',
      why:'South Korea (1,050,000) and Russia (1,020,000) are only 30,000 apart. The United States and the United Kingdom are 40,000 apart, Germany and Laos 45,000, and Japan and the United States 130,000. Every pair here is next to each other in the ranking, so only the subtraction tells you which gap is smallest.' },

    { id:'t6l1ck-5', type:'read', tag:'vs-math', level:'B2+', passage:'', visual:T6_V_ORIGIN,
      stem:'Visitors from Malaysia and India combined outnumbered visitors from China by ________.',
      options:['900,000','1,260,000','1,740,000','4,020,000'],
      answer:0,
      hint:'Two steps: first combine, then compare with China.',
      why:'Malaysia + India = 2,640,000 + 1,380,000 = 4,020,000, and 4,020,000 − 3,120,000 = 900,000. 4,020,000 is the half-done answer (the total without subtracting China), 1,260,000 is the gap between Malaysia and India, and 1,740,000 is the gap between China and India.' },

    { id:'t6l1ck-6', type:'read', tag:'vs-title', level:'B2+', passage:'', visual:T6_V_ORIGIN,
      stem:'Which question can NOT be answered from the table?',
      options:[
        'Which country ranked fifth?',
        'How many visitors came from Japan?',
        'How long did visitors from each country stay?',
        'Did more visitors come from the United Kingdom than from Germany?'
      ],
      answer:2,
      hint:'Check each question against the column headings. Which one needs information that has no column?',
      why:'The table has only three columns: rank, country and number of visitors, so the length of stay is not provided. The fifth-ranked country (Russia), the Japanese figure (690,000) and the UK–Germany comparison (520,000 vs 390,000) can all be read directly from the table.' }
  ] }
});

/* =========================================================== LEVEL 2 CHARTS */
T6.levels.push({
  id:'t6l2', n:2, name:'Charts', cefr:'B2',
  blurb:'Describe the shape of a line, handle the parts of a pie (and the note underneath it), and compare two groups without mixing them up.',
  subs:[

    /* ------------------------------------------------------------ 2.1 */
    {
      id:'t6l2s1', name:'Trend language: fluctuate, peak, level off, plummet, surge', cefr:'B2', tag:'vs-trend',
      theory:{
        key:'A trend answer needs <strong>the right direction, the right size and the right time span</strong>: check where the line starts and ends in the years the stem names, then how big and how regular the change is.',
        body:[
          'Trend words are a small, exact vocabulary. <strong>Direction</strong>: rise / increase / grow / climb vs fall / decrease / decline / drop; <em>remain stable / stay flat / level off</em> for no change; <em>fluctuate</em> for going up and down irregularly. <strong>Size and speed</strong>: <em>surge, soar, rocket</em> (a sudden large rise) and <em>plummet, plunge, collapse</em> (a sudden large fall) are the extreme words; <em>sharply, significantly, dramatically</em> mean big; <em>slightly, marginally</em> mean small; <em>steadily, gradually</em> describe an even, regular pace. <strong>Points</strong>: <em>peak / reach a high</em> is the top; <em>hit a low / bottom out</em> is the bottom; <em>overtake</em> means one line crosses above another.',
          'TCAS67 asked: <em>“Since 2018 TikTok engagement has ___: fluctuated / remained stable / risen significantly / increased slightly.”</em> All four are real trend phrases; only one matches both the direction (up) and the size (big). Its NOT-true question then mixed phrases such as <em>a slight decrease</em> and <em>large fluctuations</em>, and each one had to be checked against the line itself. So look at the shape of the line, not at how clever the words sound.',
          '<strong>The span is part of the answer.</strong> On our chart, short-video time <em>surged</em> between 2019 and 2021 (35 → 86 minutes) but <em>levelled off</em> between 2022 and 2026 (102 → 109). Both statements are true of the same line in different years. Examiners set the stem to one span and put the other span’s description in the options. Step 1: put a finger on the first year the stem names and one on the last. Step 2: direction. Step 3: size (compare the change with the scale of the chart). Step 4: regular or irregular (steadily vs fluctuated).',
          '<strong>Steadily vs slightly</strong> is the classic near miss. <em>Steadily</em> is about the pattern (every year, a similar step); <em>slightly</em> is about the size (a small total change). Online games fell from 78 to 41 minutes between 2020 and 2026, a little every year: that is <em>fell steadily</em>, not <em>fell slightly</em> (it almost halved) and not <em>plummeted</em> (no sudden drop).'
        ],
        simple:[
          'Check the years in the question. Look only at that part of the line.',
          'Ask three things: up or down? big or small? regular or up-and-down?',
          'Surge = big fast rise. Plummet = big fast fall. Level off = stop changing. Fluctuate = up and down. Peak = highest point.'
        ],
        thai:'ข้อแนวโน้มต้องถูกทั้ง “ทิศทาง ขนาด และช่วงเวลา” ดูเฉพาะปีที่โจทย์ถาม แล้วถามตัวเองสามข้อ: ขึ้นหรือลง? มากหรือน้อย? สม่ำเสมอหรือขึ้น ๆ ลง ๆ? คำสำคัญ: surge/soar = พุ่งขึ้นเร็วมาก, plummet = ดิ่งลงเร็วมาก, level off = คงที่หลังจากเปลี่ยน, fluctuate = ขึ้นลงไม่แน่นอน, peak = จุดสูงสุด, overtake = แซงเส้นอื่น กับดักคือคำอธิบายที่ถูกแต่เป็นของอีกช่วงปี และการสับสน steadily (สม่ำเสมอ) กับ slightly (เล็กน้อย)',
        examples:[
          { s:'Short-video time <strong>surged</strong> between 2019 and 2021 (35 → 86 minutes).', g:'Big, fast rise.' },
          { s:'Short-video time <strong>levelled off</strong> from 2022 to 2026 (102 → 109).', g:'Same line, different span.' },
          { s:'Online games <strong>peaked</strong> in 2020 and then <strong>fell steadily</strong>.', g:'78 minutes, then down every single year to 41.' },
          { s:'Online reading <strong>fluctuated</strong> between 22 and 34 minutes.', g:'Up, down, up, down: no clear direction.' },
          { s:'Messaging time <strong>remained stable</strong> at about 70 minutes.', g:'Tiny ups and downs are not “large fluctuations”.' }
        ],
        trap:'The wrong-span trap: the stem asks about 2022–2026, but an option describes 2019–2021 of the same line (“surged”). It is true, so it feels safe. Dodge: before reading the options, put your fingers on the two years in the stem and describe only the line between them.',
        analogy:{ title:'The BTS ride and the rollercoaster', text:'A steady rise is the BTS climbing smoothly to the next station; a surge is a rollercoaster’s launch; a plummet is the big drop; levelling off is the flat platform at the top; fluctuating is the ride on a bumpy soi in a songthaew. Before you name the ride, check which part of the journey the question is about.' },
        map:{ center:'Trend language', branches:[
          { label:'Up', leaves:['rise, increase, climb','surge, soar (big + fast)','overtake'] },
          { label:'Down', leaves:['fall, decline, drop','plummet, plunge (big + fast)'] },
          { label:'No clear change', leaves:['remain stable','level off','fluctuate = up and down'] },
          { label:'Size & pace', leaves:['sharply, significantly','slightly, marginally','steadily = regular pace'] },
          { label:'Points', leaves:['peak = top','hit a low'] }
        ] },
        chant:{ title:'Ride the Line', beat:'stomp-stomp-clap (4/4)', lines:[
          'Up in a rush? That’s a surge, that’s a soar!',
          'Down off a cliff? It plummets to the floor!',
          'Up, down, up, down? Fluctuate, fluctuate!',
          'Flat at the top? It levels off, wait!',
          'Highest point? That’s the peak, say it clear,',
          'Step by step is steadily, year after year.',
          'Slightly is small, sharply is wide,',
          'Check the years first, then describe the ride!'
        ] }
      },
      items:[
        { id:'t6l2s1-1', type:'read', tag:'vs-trend', level:'B2', passage:'', visual:T6_V_LINE,
          stem:'Between 2022 and 2026, the time teenagers spent on short-video apps ________.',
          options:['surged','fluctuated','levelled off','fell steadily'],
          answer:2,
          hint:'Put your fingers on 2022 and 2026 only. How much does the line move between them?',
          why:'From 2022 to 2026 the line moves only from 102 to 109 minutes and is flat for the last two years, so it levelled off. “Surged” is true of 2019–2021 (35 → 86), which is the wrong span. The line never fell steadily, and it does not go up and down, so it did not fluctuate.' },

        { id:'t6l2s1-2', type:'read', tag:'vs-trend', level:'B2', passage:'', visual:T6_V_LINE,
          stem:'Which activity peaked in 2020 and then declined every year until 2026?',
          options:['Messaging','Online games','Online reading','Short-video apps'],
          answer:1,
          hint:'Find the line whose highest point is 2020. Then check that it goes down every single year after that.',
          why:'Online games reached their highest point in 2020 (78 minutes) and then fell every year to 41 minutes in 2026. Online reading also has a high point in 2020 (34), but it rises again in 2022 and 2024, so it did not decline every year. Messaging barely changed, and short-video apps kept rising.' },

        { id:'t6l2s1-3', type:'read', tag:'vs-trend', level:'B2', passage:'', visual:T6_V_LINE,
          stem:'Which statement best describes the time spent on messaging from 2019 to 2026?',
          options:[
            'It hardly changed.',
            'It rose sharply at first.',
            'It fluctuated dramatically.',
            'It peaked in 2020 and then plummeted.'
          ],
          answer:0,
          hint:'Look at the highest and lowest points of the messaging line. How far apart are they?',
          why:'Messaging stayed between 69 and 72 minutes for eight years, so it hardly changed. It does move up and down a little, but a three-minute range is not a dramatic fluctuation; that option is the near miss. It did not rise sharply, and although 2020 is one of its highest points (72), it never plummeted.' },

        { id:'t6l2s1-4', type:'sort', tag:'vs-trend', level:'B2', visual:T6_V_LINE,
          stem:'Match each description to the line it describes.',
          bins:[
            { key:'sv', label:'Short-video apps', hint:'the line that ends highest' },
            { key:'msg', label:'Messaging', hint:'the flattest line' },
            { key:'game', label:'Online games', hint:'the line that falls after 2020' },
            { key:'read', label:'Online reading', hint:'the zigzag' }
          ],
          items:[
            { text:'surged between 2019 and 2021, then levelled off', bin:'sv' },
            { text:'overtook messaging in 2021', bin:'sv' },
            { text:'remained roughly stable throughout', bin:'msg' },
            { text:'reached a peak of 78 minutes in 2020', bin:'game' },
            { text:'declined steadily from 2020 to 2026', bin:'game' },
            { text:'fluctuated, rising and falling in alternate years', bin:'read' }
          ],
          hint:'For each description, check the direction, the size and the years.',
          why:'Short-video apps rose from 35 to 86 minutes by 2021, passing messaging (69) that year, and then flattened out. Messaging stayed near 70. Online games peaked at 78 in 2020 and fell a little every year. Online reading went up and down in alternate years between 22 and 34 minutes.' },

        { id:'t6l2s1-5', type:'order', tag:'vs-trend', level:'B2',
          stem:'Put these trend descriptions in order from the BIGGEST RISE to the BIGGEST FALL.',
          items:['surged','rose significantly','rose slightly','levelled off','fell slightly','fell significantly','plummeted'],
          hint:'Start with the most dramatic upward word and finish with the most dramatic downward word.',
          why:'Surge is a sudden large rise, stronger than a significant rise; slightly is a small rise; levelling off means no change; then the falls grow from slight to significant to plummet, a sudden large fall. Knowing this scale lets you reject options that have the right direction but the wrong size.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id:'t6l2s2', name:'Pie charts & parts of a sample', cefr:'B2', tag:'vs-pie',
      theory:{
        key:'Every slice is a percentage of the <strong>whole sample</strong>; read the note to see whether a smaller number is part of the whole or part of one slice, and add or subtract only numbers that share the same whole.',
        body:[
          'A pie chart answers one question: <em>out of everyone asked, how many said each thing?</em> The slices add up to 100%, so every slice is a share of the <strong>whole sample</strong>. That gives you three easy question types: <strong>rank</strong> the slices (third-highest), <strong>combine</strong> slices (add them), and turn a percentage into <strong>people</strong> (34% of 2,000 students = 0.34 × 2,000 = 680).',
          'The hard question comes from the note underneath. TCAS69 showed a pie chart of an LGBT survey and then asked: <em>“Among the total LGBT sample, what percentage difference exists between the women and men who are bisexuals?”</em> The answer depended on the women/men split given for that one group, and the words <strong>“among the total sample”</strong> told you which whole to use. Once you know that both sub-numbers are shares of the same whole, the calculation is a simple subtraction; the danger is using the slice itself, or only one of the two sub-numbers.',
          '<strong>Read the note’s whole.</strong> Our note says: <em>“Of the 22% who mainly use the BTS / MRT, female students make up 14% and male students 8% of the whole sample.”</em> Check: 14 + 8 = 22, so the two sub-numbers are parts of the whole sample and together make the slice. Now the female–male gap among BTS / MRT users is 14 − 8 = <strong>6 percentage points</strong> of the whole sample. And because 14 is more than half of 22, female students are the majority of BTS / MRT users. If a note instead said “60% of BTS / MRT users are female”, that 60% would be a share of the slice, not of the whole, and you could not add it to other slices.',
          '<strong>Procedure.</strong> Step 1: read the title for the sample size (2,000 students). Step 2: read the note and ask, “Percent of what?” Step 3: check the sub-numbers add up to the slice. Step 4: only add or subtract numbers that share the same whole.'
        ],
        simple:[
          'All the slices of a pie together make 100%. Each slice is part of everyone in the survey.',
          'The small note under the pie often splits one slice into two groups. Read it carefully.',
          'Ask “percent of what?” before you add or subtract.'
        ],
        thai:'ในแผนภูมิวงกลม ทุกชิ้นเป็นเปอร์เซ็นต์ของ “กลุ่มตัวอย่างทั้งหมด” รวมกันได้ 100% ข้อที่ออกบ่อยคือจัดอันดับชิ้น, บวกชิ้น (combined) และแปลงเปอร์เซ็นต์เป็นจำนวนคน (34% ของ 2,000 = 680) ข้อยากมาจากหมายเหตุใต้กราฟที่แบ่งชิ้นหนึ่งออกเป็นหญิง/ชาย ต้องถามว่า “เปอร์เซ็นต์ของอะไร” ถ้าเป็นเปอร์เซ็นต์ของทั้งกลุ่ม ตัวเลขย่อยจะบวกกันได้เท่ากับชิ้นนั้น (14 + 8 = 22) กับดักของ TCAS คือตัวเลือกที่เป็นค่าของชิ้นทั้งชิ้นหรือตัวเลขย่อยตัวเดียวแทนผลต่าง',
        examples:[
          { s:'The <strong>third-highest</strong> slice is School bus (18%).', g:'Parents’ car 34 > BTS / MRT 22 > School bus 18.' },
          { s:'BTS / MRT and public bus <strong>combined</strong> = 22 + 9 = 31%.', g:'Slices of the same pie can be added.' },
          { s:'34% of 2,000 students = <strong>680 students</strong>.', g:'Percentage × sample size.' },
          { s:'Female – male gap among BTS / MRT users = 14 − 8 = <strong>6 percentage points</strong>.', g:'Both numbers are shares of the whole sample (note).' }
        ],
        trap:'The slice-for-subgroup trap: asked for the difference between female and male BTS / MRT users, students subtract from the slice (22 − 14 = 8) or simply choose 14 or 22. Dodge: find the two sub-numbers in the note, check they add up to the slice, and subtract them from each other.',
        analogy:{ title:'The pizza and the toppings', text:'A pie chart is one pizza for the whole class. Each slice is how much one group gets. The note is the waiter saying, “In the pepperoni slice, this much has extra cheese and this much doesn’t.” The cheese and no-cheese parts together make the pepperoni slice; they are not new slices, and you must not count them twice.' },
        map:{ center:'Pie charts', branches:[
          { label:'Whole sample', leaves:['slices add to 100%','sample size in title'] },
          { label:'Easy moves', leaves:['rank the slices','combine = add','% × sample = people'] },
          { label:'The note', leaves:['splits one slice','percent of what?','parts add to the slice'] },
          { label:'Traps', leaves:['slice instead of gap','share of slice vs whole','double counting'] }
        ] },
        story:{ title:'The case of the missing six', panels:[
          { who:'T.Chris', text:'Among the whole sample, what is the difference between female and male BTS / MRT users?' },
          { who:'Pun', text:'The slice is 22 and female is 14. 22 minus 14 is 8. Done. Time for lunch.' },
          { who:'Mint', text:'Wait. The note says 14% female and 8% male, of the whole sample. 14 plus 8 is 22, the whole slice.' },
          { who:'Fah', text:'So Pun just found the male number. The question wants the gap: 14 minus 8.' },
          { who:'Nong Bot', text:'Six! I have located the missing six. Also Pun’s lunch.' },
          { who:'T.Chris', text:'Read the note, ask “percent of what?”, then subtract the two parts.' }
        ], moral:'Parts in the note add up to the slice; the difference is between the parts.' }
      },
      items:[
        { id:'t6l2s2-1', type:'read', tag:'vs-pie', level:'B2', passage:'', visual:T6_V_PIE,
          stem:'Which way of travelling to school has the fourth-highest share?',
          options:['BTS / MRT','Public bus','School bus','Motorcycle taxi'],
          answer:3,
          hint:'Rank the slices from largest to smallest and count carefully.',
          why:'The order is Parents’ car (34%), BTS / MRT (22%), School bus (18%), Motorcycle taxi (11%), Public bus (9%) and Walking or cycling (6%), so motorcycle taxi is fourth. Public bus is the near miss: it is fifth, only two points lower.' },

        { id:'t6l2s2-2', type:'read', tag:'vs-pie', level:'B2', passage:'', visual:T6_V_PIE,
          stem:'What is the combined percentage of students who mainly travel by BTS / MRT or by public bus?',
          options:['13%','22%','27%','31%'],
          answer:3,
          hint:'“Combined” tells you which operation to use.',
          why:'Combined means add: 22% + 9% = 31%. 13% is the difference between the two slices, 22% is the BTS / MRT slice alone, and 27% adds the wrong slices (school bus 18% + public bus 9%).' },

        { id:'t6l2s2-3', type:'read', tag:'vs-pie', level:'B2+', passage:'', visual:T6_V_PIE,
          stem:'Among the whole sample, what is the percentage-point difference between female and male students who mainly use the BTS / MRT?',
          options:['6','8','14','22'],
          answer:0,
          hint:'Read the note under the chart. Which two numbers describe female and male users?',
          why:'The note gives female BTS / MRT users as 14% and male users as 8% of the whole sample, so the difference is 14 − 8 = 6 percentage points. 22 is the whole slice, 14 is the female figure alone, and 8 is the male figure (or the result of 22 − 14).' },

        { id:'t6l2s2-4', type:'read', tag:'vs-pie', level:'B2', passage:'', visual:T6_V_PIE,
          stem:'How many of the 2,000 students surveyed mainly travel to school in their parents’ car?',
          options:['34','340','680','1,360'],
          answer:2,
          hint:'Find the sample size in the title, then take the right percentage of it.',
          why:'34% of 2,000 = 0.34 × 2,000 = 680 students. 34 confuses the percentage with a number of people, 340 is 34% of 1,000, and 1,360 is 68% of 2,000 (the percentage doubled by mistake).' },

        { id:'t6l2s2-5', type:'judge', tag:'vs-pie', level:'B2+', visual:T6_V_PIE,
          given:'Use the pie chart and the note underneath it.',
          stem:'True, False or Not given? <strong>Female students make up more than half of the students who mainly use the BTS / MRT.</strong>',
          answer:0,
          hint:'Compare the female figure in the note with half of the BTS / MRT slice.',
          why:'True. The BTS / MRT slice is 22% of the whole sample, and female users are 14% of the whole sample. Half of 22 is 11, and 14 is more than 11, so female students are the majority of BTS / MRT users (about 64%).' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id:'t6l2s3', name:'Comparing groups: largest gap, higher than, only group where…', cefr:'B2+', tag:'vs-compare',
      theory:{
        key:'When a chart compares two groups, <strong>work category by category</strong>: write the gap and who is higher for each row, then answer “largest gap”, “higher than” or “the only…” from your list, not from the height of one bar.',
        body:[
          'TCAS68 printed a table of teen spending with two columns, females and males, and asked two questions: <em>“Which category shows the largest difference in spending between females and males?”</em> and <em>“In which category do females spend a higher percentage than males?”</em> Both are comparison questions, and both punish students who look only at the biggest numbers. The largest <strong>gap</strong> is not the category with the tallest bar; it is the category where the two bars are furthest apart.',
          '<strong>The gap list.</strong> For each category, subtract the smaller from the bigger and write a letter for the higher group: Food 3 M, Clothes 11 F, Games & apps 15 M, Beauty 11 F, Transport 1 M, Books 2 F, Concerts 2 F, Others 7 M. Now every comparison question takes seconds: largest gap = Games & apps; females higher = Clothes, Beauty, Books, Concerts; the only category within one point = Transport. Food & drinks, the tallest bars on the chart, have a gap of only 3.',
          '<strong>Read the unit before you compare.</strong> Our chart shows <em>% of each group’s total spending</em>, not baht. So “females spend a higher percentage on clothes” is true, but “females spend more money on clothes” is not provided: we do not know how much money each group has. Ratio words need care too: “more than four times” means divide (Beauty 14 ÷ 3 ≈ 4.7), and “twice” must be checked exactly (Clothes 22 is exactly twice 11, so it is <em>not</em> “more than twice”).',
          '<strong>“The only …” questions</strong> are traps for people who stop at the first match. To prove that something is the only one, you must check every category. Your gap list does this for you.'
        ],
        simple:[
          'For each category, find the gap between the two groups and note which group is higher.',
          'The biggest gap is where the two bars are furthest apart, not where the bars are tallest.',
          'Check the unit: % of spending is not the same as money.'
        ],
        thai:'ข้อเปรียบเทียบสองกลุ่ม ให้ทำ “รายการส่วนต่าง” ทีละหมวด: ลบค่าน้อยจากค่ามาก แล้วเขียนว่าใครสูงกว่า (F/M) จากนั้นตอบข้อ largest difference, higher than หรือ the only… จากรายการ ไม่ใช่จากแท่งที่สูงที่สุด กับดักคือเลือกหมวดที่แท่งสูงที่สุด (Food) ทั้งที่ช่องว่างน้อย และลืมดูหน่วย: “% of each group’s spending” ไม่ได้บอกจำนวนเงินจริง ส่วนคำว่า more than twice ต้องคำนวณให้ตรง 22 เป็นสองเท่าของ 11 พอดี จึงไม่ใช่ “มากกว่าสองเท่า”',
        examples:[
          { s:'Largest gap: <strong>Games & apps</strong> (19 − 4 = 15 points).', g:'Not Food & drinks, the tallest bars (gap only 3).' },
          { s:'Females spend a higher <strong>percentage</strong> than males on books & stationery (8 vs 6).', g:'A small gap still counts as “higher”.' },
          { s:'Transport is <strong>the only</strong> category where the gap is one point.', g:'Proved by checking all eight rows.' },
          { s:'Clothes: 22 is <strong>exactly</strong> twice 11, so not “more than twice”.', g:'Ratio words need exact checking.' }
        ],
        trap:'The tall-bar trap: asked for the largest difference, students choose the category with the highest bars or the most eye-catching colour. Dodge: never compare bars by eye; write the gap number for every category the options name, then choose the biggest number.',
        analogy:{ title:'The badminton scoreboard', text:'Two players scoring 21–18 have played a close match even though both scores are high; 11–4 is a thrashing even though both scores are low. A group comparison is a scoreboard: what matters is the gap between the two numbers, not how high they are.' },
        map:{ center:'Comparing groups', branches:[
          { label:'Gap list', leaves:['subtract in each row','write F or M','then answer'] },
          { label:'Question types', leaves:['largest difference','X higher than Y','the only group where'] },
          { label:'Units', leaves:['% of spending ≠ baht','% of each group'] },
          { label:'Ratio words', leaves:['twice = exactly × 2','more than four times','divide to check'] }
        ] },
        moves:[
          { move:'Hold two hands flat at different heights', says:'Two groups, two bars.' },
          { move:'Pinch the space between your hands', says:'Measure the gap, not the height.' },
          { move:'Point left, then right', says:'Who is higher? Write F or M.' },
          { move:'Run a finger down an imaginary list', says:'Check every row before you say “only”.' }
        ]
      },
      items:[
        { id:'t6l2s3-1', type:'read', tag:'vs-compare', level:'B2', passage:'', visual:T6_V_SPEND,
          stem:'Which category shows the largest difference between female and male spending?',
          options:['Others','Clothes','Games & apps','Beauty & personal care'],
          answer:2,
          hint:'Subtract inside each of the four categories before choosing.',
          why:'Games & apps has the biggest gap: 19% for males and 4% for females, a difference of 15 points. Clothes and Beauty & personal care are the near misses, with gaps of 11 points each, and Others has a gap of 7. Food & drinks has the tallest bars, but its gap is only 3.' },

        { id:'t6l2s3-2', type:'read', tag:'vs-compare', level:'B2', passage:'', visual:T6_V_SPEND,
          stem:'In which category do females spend a higher percentage than males?',
          options:['Others','Transport','Food & drinks','Books & stationery'],
          answer:3,
          hint:'Check which bar is higher in each of the four categories, even when the bars look almost equal.',
          why:'Females spend 8% on books & stationery, compared with 6% for males. In the other three options males are higher: Others (12% vs 5%), Food & drinks (34% vs 31%) and Transport (10% vs 9%). Transport is the near miss because the gap is only one point, but it goes the other way.' },

        { id:'t6l2s3-3', type:'read', tag:'vs-compare', level:'B2+', passage:'', visual:T6_V_SPEND,
          stem:'In which category is the male share almost five times the female share?',
          options:['Others','Clothes','Transport','Games & apps'],
          answer:3,
          hint:'“Times” means divide. Divide the male figure by the female figure for each option.',
          why:'Games & apps: 19 ÷ 4 ≈ 4.75, almost five times. For Others the male share is only 2.4 times the female share (12 ÷ 5), for Transport it is barely higher (10 vs 9), and for Clothes the female share is higher, so the male share is not a multiple of it at all.' },

        { id:'t6l2s3-4', type:'sort', tag:'vs-compare', level:'B2', visual:T6_V_SPEND,
          stem:'Make a gap list. Put each category in the correct bin.',
          bins:[
            { key:'f', label:'Females higher (by 2+ points)', hint:'female bar clearly taller' },
            { key:'m', label:'Males higher (by 2+ points)', hint:'male bar clearly taller' },
            { key:'eq', label:'Within 1 point', hint:'almost the same' }
          ],
          items:[
            { text:'Clothes', bin:'f' },
            { text:'Beauty & personal care', bin:'f' },
            { text:'Books & stationery', bin:'f' },
            { text:'Games & apps', bin:'m' },
            { text:'Food & drinks', bin:'m' },
            { text:'Others', bin:'m' },
            { text:'Transport', bin:'eq' }
          ],
          hint:'Subtract in every row and note which group is higher.',
          why:'Females are higher in Clothes (22 vs 11), Beauty & personal care (14 vs 3) and Books & stationery (8 vs 6). Males are higher in Games & apps (19 vs 4), Food & drinks (34 vs 31) and Others (12 vs 5). Only Transport (9 vs 10) is within one point. A list like this answers every comparison question on the chart.' },

        { id:'t6l2s3-5', type:'read', tag:'vs-compare', level:'B2+', passage:'', visual:T6_V_SPEND,
          stem:'Which statement is TRUE according to the chart?',
          options:[
            'Males spend more on clothes than females.',
            'Only in transport is the gap a single point.',
            'Games & apps is the biggest category of spending for males.',
            'Females spend more on food & drinks than on clothes and beauty combined.'
          ],
          answer:1,
          hint:'Test each statement with numbers from the chart, and check every category for the word “only”.',
          why:'Transport (9 vs 10) is the only category with a one-point gap; the next smallest gaps are Books & stationery and Concerts & events (2 points each). Males spend a smaller share on clothes (11 vs 22), their biggest category is Food & drinks (34), not Games & apps (19), and clothes plus beauty (22 + 14 = 36) is more than food & drinks (31) for females.' }
      ]
    }
  ],

  check:{ id:'t6l2ck', name:'Systems Check · Charts', items:[
    { id:'t6l2ck-1', type:'read', tag:'vs-trend', level:'B2+', passage:'', visual:T6_V_PM,
      stem:'Which best describes Chiang Mai’s PM2.5 level from March to June?',
      options:['It plummeted.','It fluctuated.','It levelled off.','It rose steadily.'],
      answer:0,
      hint:'Use only March and June, and compare the size of the change with the scale.',
      why:'Chiang Mai’s level fell from 118 in March to 18 in June, losing about 85% in three months, so it plummeted. It did not go up and down in those months (118, 96, 41, 18), so it did not fluctuate, and it certainly did not level off or rise. “Rose steadily” describes nothing in this span; January to March was a sharp rise, not a steady one.' },

    { id:'t6l2ck-2', type:'read', tag:'vs-compare', level:'B2+', passage:'', visual:T6_V_PM,
      stem:'In which month was Bangkok’s PM2.5 level higher than Chiang Mai’s?',
      options:['May','June','January','February'],
      answer:2,
      hint:'Compare the two lines month by month, especially where they come close together.',
      why:'Only in January was Bangkok (52) higher than Chiang Mai (48). June is the near miss: the lines almost meet (Bangkok 17, Chiang Mai 18), but Chiang Mai is still one unit higher. In February and May Chiang Mai is clearly higher.' },

    { id:'t6l2ck-3', type:'read', tag:'vs-compare', level:'B2+', passage:'', visual:T6_V_PM,
      stem:'In March, Chiang Mai’s PM2.5 level was approximately ________ Bangkok’s.',
      options:['twice','four times','five times','three times'],
      answer:3,
      hint:'Divide Chiang Mai’s March figure by Bangkok’s March figure.',
      why:'In March, Chiang Mai was at 118 and Bangkok at 36, and 118 ÷ 36 ≈ 3.3, so approximately three times. Four times would be about 144 and twice would be 72. Students who read Bangkok’s January figure (52) instead of March get about 2.3, closer to “twice”, which is why the month matters.' },

    { id:'t6l2ck-4', type:'read', tag:'vs-compare', level:'B2+', passage:'', visual:T6_V_PM,
      stem:'In how many of the six months was Bangkok’s PM2.5 level above the guideline level given in the note?',
      options:['one','two','four','three'],
      answer:1,
      hint:'Find the guideline number in the note, then check Bangkok month by month.',
      why:'The guideline is 37.5 µg/m³. Bangkok was above it in January (52) and February (44) only; in March it was 36, just below the line, which is the near miss that makes “three” tempting. From April it was lower still.' },

    { id:'t6l2ck-5', type:'read', tag:'vs-pie', level:'B2+', passage:'', visual:T6_V_PMSRC,
      stem:'According to the note, forest fires produced how many percentage points more of the total PM2.5 than farm burning?',
      options:['17','21','38','55'],
      answer:1,
      hint:'Find the two sub-numbers in the note. Do they add up to the open-burning slice?',
      why:'The note splits the 55% open-burning slice into forest fires (38%) and farm burning (17%) of the total; 38 + 17 = 55, so both are shares of the whole. The difference is 38 − 17 = 21 percentage points. 55 is the whole slice, and 38 and 17 are the two parts on their own.' },

    { id:'t6l2ck-6', type:'read', tag:'vs-pie', level:'B2+', passage:'', visual:T6_V_PMSRC,
      stem:'Which statement is supported by the pie chart?',
      options:[
        'Open burning caused over 60% of the PM2.5.',
        'Neighbouring countries contributed more smoke than vehicles did.',
        'Vehicles and industry together caused more than a quarter of it.',
        'Farm burning contributed more than smoke from neighbouring countries did.'
      ],
      answer:1,
      hint:'Check each statement with exact numbers, including the note.',
      why:'Smoke from neighbouring countries (18%) is larger than vehicles (15%). Open burning is 55%, not over 60%; vehicles and industry together are 15 + 7 = 22%, less than a quarter; and farm burning (17% in the note) is just below neighbouring countries’ smoke (18%), which makes the farm-burning statement the closest near miss.' }
  ] }
});

/* =========================================================== LEVEL 3 DIAGRAMS */
T6.levels.push({
  id:'t6l3', n:3, name:'Diagrams', cefr:'B2+',
  blurb:'Follow a flowchart branch by branch, read an infographic as sources → pathways → effects, and catch what a visual does NOT tell you.',
  subs:[

    /* ------------------------------------------------------------ 3.1 */
    {
      id:'t6l3s1', name:'Flowcharts & decision paths', cefr:'B2', tag:'vs-flow',
      theory:{
        key:'A flowchart is a set of <strong>if → then</strong> sentences: find the box the question starts from, take only the branch its condition sends you down, and stop at the next box.',
        body:[
          'Flowcharts look like pictures, but they are really grammar: every diamond is an <em>if</em>-clause, and every arrow is a <em>then</em>. TCAS68 used a smoking-cessation flowchart and asked three things: <em>“What is the first step?”</em> (the top box: asking whether the patient wants to quit), <em>“If the patient agrees to counselling, what is the next step?”</em> (follow the yes-arrow one box only) and <em>“What should be done if the patient does not want to quit?”</em> (the no-branch). Every wrong option was a real box from the <strong>wrong branch</strong> or the <strong>wrong step</strong>.',
          '<strong>The finger method.</strong> Step 1: find the starting box the stem gives you (“If the student cannot answer…” starts you at the first diamond, on the <em>no</em> side). Step 2: put your finger on it and move one arrow at a time. Step 3: read the box your finger lands on, and compare it with the options. Step 4: if the stem says “next”, stop after one move; if it says “in every case”, look for a box that both branches pass through (often the last box).',
          '<strong>Read the negatives.</strong> Flowcharts often contain warnings in the boxes themselves: <em>Do not give them anything to drink.</em> In a NOT question, the key is often an action that is correct in one branch but forbidden in the other: giving water is right for a student who is awake and wrong for one who is not. So the branch matters more than the action.',
          'Finally, a flowchart shows <strong>order</strong>, not time. “After 15 minutes” is a time signal written inside a box; “then” is only the arrow. Do not invent waiting times, reasons or extra steps the chart does not draw.'
        ],
        simple:[
          'A flowchart is a list of “if … then …” steps. The diamond is the question; the arrows are the answers.',
          'Put your finger on the start box. Follow yes or no. Move one box at a time.',
          'Something can be right on one branch and wrong on the other branch.'
        ],
        thai:'ผังงาน (flowchart) คือชุดประโยค if → then กล่องเพชรคือคำถาม ลูกศร yes/no คือเงื่อนไข วิธีทำ: หากล่องเริ่มต้นตามที่โจทย์บอก วางนิ้ว แล้วเดินทีละลูกศรตามเงื่อนไข ถ้าโจทย์ถาม “next” ให้ขยับแค่ขั้นเดียว ถ้าถาม “ทุกกรณี” ให้หากล่องที่ทั้งสองทางผ่าน (มักเป็นกล่องสุดท้าย) กับดักของ TCAS คือตัวเลือกที่เป็นกล่องจริงในผัง แต่มาจากกิ่งผิดหรือขั้นผิด เช่น ให้น้ำดื่มถูกในกรณีรู้สึกตัว แต่ห้ามในกรณีไม่รู้สึกตัว',
        examples:[
          { s:'<strong>If</strong> the student is awake → <strong>then</strong> move them to shade and give sips of water.', g:'Yes-branch of the first diamond.' },
          { s:'<strong>If</strong> the student is not awake → <strong>then</strong> call the hotline; <strong>do not</strong> give a drink.', g:'Same action (water), opposite rule: the branch decides.' },
          { s:'Awake but <strong>not better after 15 minutes</strong> → call the hotline and the school nurse.', g:'Two diamonds, two conditions, one box.' },
          { s:'<strong>In every case</strong>: record what happened and contact the parents.', g:'The box that every path reaches.' }
        ],
        trap:'The wrong-branch trap: the option is a real box from the flowchart, so it looks familiar, but it belongs to the other answer of the diamond (the yes-side action offered for a no-side question). Dodge: say the condition aloud (“not awake, so NO”) before you look at any option, and read only the boxes on that side.',
        analogy:{ title:'The Grab route', text:'A flowchart is like a Grab driver’s route with two possible turns at every junction. If the road is flooded, turn left; if not, go straight. Someone who describes the left-turn streets when the road was clear is describing a real place, just not your trip.' },
        map:{ center:'Flowcharts', branches:[
          { label:'Shapes', leaves:['box = action','diamond = question','arrow = then'] },
          { label:'Finger method', leaves:['find the start box','follow yes or no','one arrow at a time'] },
          { label:'Question words', leaves:['first step = top box','next = one move','in every case = shared box'] },
          { label:'Traps', leaves:['box from wrong branch','next vs later','negatives inside boxes'] }
        ] },
        moves:[
          { move:'Tap the top of your desk', says:'Start at the first box.' },
          { move:'Draw a diamond in the air', says:'A diamond asks a question.' },
          { move:'Thumb up to the right, thumb down to the left', says:'Yes goes one way, no goes the other.' },
          { move:'Take one small step forward', says:'“Next” means one arrow only.' },
          { move:'Bring both hands together at the bottom', says:'Every path meets at the last box.' }
        ]
      },
      items:[
        { id:'t6l3s1-1', type:'read', tag:'vs-flow', level:'B2', passage:'', visual:T6_V_HEAT,
          stem:'According to the flowchart, the first decision depends on ________.',
          options:[
            'whether the student can answer simple questions',
            'whether the student has drunk enough water during the event',
            'whether the school nurse is on duty and able to come at once',
            'whether the student feels better after resting for 15 minutes'
          ],
          answer:0,
          hint:'Find the first diamond in the chart, not the first action.',
          why:'The first diamond asks whether the student is awake and able to answer simple questions, and every later step depends on that answer. “Feels better after 15 minutes” is a real question in the chart, but it is the second decision. Water and the nurse’s availability are never decisions in the flowchart.' },

        { id:'t6l3s1-2', type:'read', tag:'vs-flow', level:'B2', passage:'', visual:T6_V_HEAT,
          stem:'If the student cannot answer simple questions, which of the following should NOT be done?',
          options:['Move them into the shade','Cool them with wet towels','Call the emergency hotline','Give them sips of cool water'],
          answer:3,
          hint:'Follow the NO arrow from the first diamond and read every box on that side.',
          why:'On the no-branch the chart says “Do not give them anything to drink”, so giving sips of water is wrong here, even though it is the right action on the yes-branch. Calling the hotline, moving them into the shade and cooling them with wet towels are all listed on the no-branch.' },

        { id:'t6l3s1-3', type:'read', tag:'vs-flow', level:'B2', passage:'', visual:T6_V_HEAT,
          stem:'A student is awake and answers questions, but she still feels unwell after 15 minutes. What should happen next?',
          options:[
            'She should rest and stop doing sport.',
            'The hotline and the school nurse should be called.',
            'She should be given something cold to drink at once.',
            'Her parents should be asked to take her home immediately.'
          ],
          answer:1,
          hint:'Two diamonds apply here. Follow yes at the first and no at the second.',
          why:'She is awake (yes at the first diamond) but not better after 15 minutes (no at the second), so the next box is “Call the emergency hotline and the school nurse”. Resting is the yes-answer to the second question, so it is the wrong branch. The chart never tells the school to send her home, and a cold drink is not the next step.' },

        { id:'t6l3s1-4', type:'order', tag:'vs-flow', level:'B2', visual:T6_V_HEAT,
          stem:'Put the steps in order for a student who is awake but does NOT feel better after 15 minutes.',
          items:[
            'The student feels dizzy and very hot during an outdoor event.',
            'Someone checks that she is awake and can answer questions.',
            'She is helped to a shaded place and given small sips of water.',
            'After 15 minutes she still feels unwell.',
            'The emergency hotline and the school nurse are called.',
            'What happened is recorded and her parents are contacted.'
          ],
          hint:'Follow the arrows with your finger: yes at the first diamond, no at the second.',
          why:'The path goes: signs of heat illness → first decision (awake: yes) → shade and water → second decision after 15 minutes (better: no) → hotline and nurse → record and contact parents. The last box is reached on every path through the chart.' },

        { id:'t6l3s1-5', type:'read', tag:'vs-flow', level:'B2+', passage:'', visual:T6_V_HEAT,
          stem:'Which action is taken in every case, whatever the answers to the two questions?',
          options:[
            'Contacting the student’s parents',
            'Calling the emergency hotline at once',
            'Loosening the student’s tight clothing',
            'Keeping the student out of sport for the rest of the day'
          ],
          answer:0,
          hint:'Look for a box that every path through the chart must pass through.',
          why:'The final box, “Record what happened and contact the student’s parents”, comes after both diamonds, so every path reaches it. A student who is awake and recovers never needs the hotline; loosening clothing is only on the yes-branch of the first diamond; and staying out of sport for the day is only for students who feel better.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id:'t6l3s2', name:'Infographics: sources, components, effects', cefr:'B2+', tag:'vs-diagram',
      theory:{
        key:'An infographic is organised by <strong>headings</strong> (sources, pathways, effects…); decide which heading a question is about, and answer only from the list under that heading.',
        body:[
          'Infographics mix words, icons and arrows, which makes them look busy. But almost every exam infographic has a skeleton of three to five headings: <em>sources → components → effects</em> (TCAS67’s PM2.5 diagram), or <em>reservoir → way out → transmission → way in</em> (TCAS66’s chain of infection). The questions test whether you can put each detail under the right heading: <em>“Which is NOT a transmission route?”</em> only makes sense once you know which part of the diagram shows the routes.',
          '<strong>Step 1: read the headings first</strong> and say the skeleton aloud: “Where it comes from, how it travels, where it ends up, what it might do.” <strong>Step 2</strong>: for each question, find the heading word in the stem (<em>source, route, found in, effect</em>). <strong>Step 3</strong>: check each option against that one list. An option can appear in the infographic and still be the answer to a NOT question, because it appears under a different heading. Farm soil is where microplastics <em>end up</em>, so it is not a <em>source</em>.',
          '<strong>Best title for an infographic</strong> = the topic + the headings. TCAS67’s key was <em>“PM 2.5: Sources, Components, and Effects”</em>, which simply listed the diagram’s own sections, while the distractors were too narrow (only health risks) or about something else (classification of air pollution). And watch the <strong>hedges</strong>: headings such as <em>Possible effects (still being studied)</em> mean that any option saying <em>proven, always</em> or <em>definitely</em> is not supported.'
        ],
        simple:[
          'Read the headings of the infographic first: for example, Sources, Pathways, Where they end up, Effects.',
          'Find the heading the question asks about. Look only at the list under it.',
          'Something can be in the picture but under a different heading.'
        ],
        thai:'อินโฟกราฟิกจะมีโครงเป็นหัวข้อ เช่น แหล่งที่มา (sources) → เส้นทาง (pathways) → ปลายทาง → ผลกระทบ (effects) ให้อ่านหัวข้อก่อน แล้วดูว่าโจทย์ถามหัวข้อไหน ตอบจากรายการใต้หัวข้อนั้นเท่านั้น กับดักของ TCAS คือข้อ NOT/EXCEPT ที่ตัวเลือกมีอยู่ในภาพจริงแต่อยู่ใต้หัวข้ออื่น เช่น ดินในไร่เป็นปลายทาง ไม่ใช่แหล่งที่มา ข้อ best title ให้ใช้ “หัวข้อเรื่อง + ชื่อหัวข้อย่อย” และระวังคำว่า possible/still being studied ที่แปลว่ายังไม่มีข้อพิสูจน์',
        examples:[
          { s:'Heading <strong>Sources</strong>: synthetic clothes, car tyres, plastic bags and bottles, some cosmetics.', g:'Only these four are sources.' },
          { s:'Farm soil appears under <strong>Where they end up</strong>.', g:'So it is the answer to “Which is NOT a source?”' },
          { s:'Best title: <strong>Microplastics: Sources, Pathways and Possible Effects</strong>.', g:'Topic + the infographic’s own headings.' },
          { s:'<strong>Possible effects (still being studied)</strong>', g:'So “proven damage” is not supported.' }
        ],
        trap:'The right-picture, wrong-heading trap: in a NOT or EXCEPT question, three options are under the heading in the stem and the key is also in the infographic, just in a different section. Students who scan the whole picture think “It’s there, so it can’t be the answer.” Dodge: circle the heading word in the stem and check the options against that heading only.',
        analogy:{ title:'The 7-Eleven shelves', text:'In a 7-Eleven, milk is in the fridge, snacks are on the shelf and medicine is behind the counter. If someone asks “Which of these is NOT in the fridge?”, the answer can still be something the shop sells, just on another shelf. An infographic is a small shop: know which shelf the question is pointing at.' },
        map:{ center:'Infographics', branches:[
          { label:'Skeleton', leaves:['sources','pathways / routes','where it ends up','effects'] },
          { label:'Method', leaves:['read headings first','find heading in stem','check that list only'] },
          { label:'Best title', leaves:['topic + headings','not one section only'] },
          { label:'Traps', leaves:['right item, wrong heading','hedges: possible, studied','overclaims: proven'] }
        ] },
        chant:{ title:'Headings First', beat:'snap-clap-snap-clap (4/4)', lines:[
          'Where does it start? That’s the source, of course!',
          'How does it travel? The path, the route, the force!',
          'Where does it land? That’s the end of the line,',
          'What can it do? The effects, underlined.',
          'In the picture? Fine, but on the wrong shelf?',
          'Check the heading, then check it yourself!',
          '“Possible”, “studied”? Then “proven” is out,',
          'Headings first, and you won’t have a doubt!'
        ] }
      },
      items:[
        { id:'t6l3s2-1', type:'choose', tag:'vs-diagram', level:'B2+', given:T6_G_MICRO,
          stem:'Which of the following is the best title for the infographic?',
          options:[
            'Microplastics: Sources, Pathways and Possible Effects',
            'Why Microplastics Have Been Proven to Damage Human Health',
            'A Classification of the Plastic Waste Produced by Households',
            'How Families Can Stop Using Plastic Bottles and Bags at Home'
          ],
          answer:0,
          hint:'A good infographic title names the topic and the sections. Read the four headings again.',
          why:'The infographic has four sections: sources, pathways, where microplastics end up and possible effects, so the title that names them covers the whole thing. “Proven to Damage Human Health” contradicts the heading “still being studied” and the line saying that long-term effects on humans are not yet clear. The graphic gives no advice to families and does not classify household waste.' },

        { id:'t6l3s2-2', type:'choose', tag:'vs-diagram', level:'B2+', given:T6_G_MICRO,
          stem:'According to the infographic, which of the following is NOT a source of microplastics?',
          options:['Car tyres','Farm soil','Cosmetics','Synthetic clothes'],
          answer:1,
          hint:'Check each option against the Sources heading only.',
          why:'Farm soil appears in the infographic, but under “Where they end up”, not under “Sources”. Car tyres, synthetic clothes and some cosmetics are all listed as sources. This is the classic wrong-heading trap: being in the picture is not the same as being in the right section.' },

        { id:'t6l3s2-3', type:'choose', tag:'vs-diagram', level:'B2+', given:T6_G_MICRO,
          stem:'According to the infographic, microplastics end up in all of the following EXCEPT ________.',
          options:['sea salt','farm soil','shellfish','cooking oil'],
          answer:3,
          hint:'Read the list under “Where they end up” and tick each option you find.',
          why:'The “Where they end up” section lists fish and shellfish, sea salt and drinking water, and farm soil. Cooking oil is not mentioned anywhere, so it is the exception. The other three options are all in that list.' },

        { id:'t6l3s2-4', type:'sort', tag:'vs-diagram', level:'B2+', given:T6_G_MICRO,
          stem:'Put each detail under the correct heading of the infographic.',
          bins:[
            { key:'src', label:'Source', hint:'where it comes from' },
            { key:'path', label:'Pathway', hint:'how it travels' },
            { key:'end', label:'Where it ends up', hint:'where it is found' },
            { key:'eff', label:'Possible effect', hint:'what it might do' }
          ],
          items:[
            { text:'Synthetic clothes shed fibres', bin:'src' },
            { text:'Car tyres wear down', bin:'src' },
            { text:'Wastewater flows to rivers and the sea', bin:'path' },
            { text:'Wind carries road dust', bin:'path' },
            { text:'Fish and shellfish', bin:'end' },
            { text:'Sea salt and drinking water', bin:'end' },
            { text:'Animals eat less', bin:'eff' },
            { text:'Soil drains water differently', bin:'eff' }
          ],
          hint:'Ask of each detail: is it a starting point, a journey, a destination or a result?',
          why:'Clothes and tyres are where microplastics start (sources). Wastewater and wind move them (pathways). Fish, shellfish, salt and water are where they are found (end points). Animals eating less and changes in soil drainage are the possible effects. Sorting details into headings is exactly the skill NOT/EXCEPT questions test.' },

        { id:'t6l3s2-5', type:'choose', tag:'vs-diagram', level:'B2+', given:T6_G_MICRO,
          stem:'What does the infographic say about the effects of microplastics on humans?',
          options:[
            'They are proven to be harmless.',
            'They are not yet fully understood.',
            'They mainly damage the stomach and lungs.',
            'They are the same as the effects on animals.'
          ],
          answer:1,
          hint:'Find the section about effects and read only what it says about humans.',
          why:'The infographic says particles have been found in the body but that long-term effects are not yet clear, and the heading adds “still being studied”. So the effects are not yet fully understood. “Proven to be harmless” and “mainly damage the stomach and lungs” both claim knowledge the graphic says we do not have; blocked stomachs are listed for animals, not humans.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id:'t6l3s3', name:'NOT provided, EXCEPT & the traps in notes, units and footnotes', cefr:'B2+', tag:'vs-trap',
      theory:{
        key:'Before any conclusion, read the <strong>small print</strong> — units, asterisks, notes, “respondents could choose more than one” — and never accept an option that needs information the visual does not give.',
        body:[
          'TCAS66 ended its visuals section with <em>“Which of the following is NOT provided in the figure?”</em> and the key was <em>“When germs are born”</em>: the diagram showed where germs live, how they spread and how they enter the body, but said nothing about time. NOT-provided questions reward one habit: <strong>for each option, point to the exact place in the visual that answers it</strong>. If you cannot point, it is not provided. Being logical, likely or interesting does not count.',
          '<strong>Footnotes change the story.</strong> Our recycling chart shows 64 thousand tonnes in 2025 and 35 in 2026, which looks like a collapse, until you read the asterisk: <em>the 2026 figure covers January–June only</em>. Half a year cannot be compared with a whole year. In fact 35 is more than half of 64 (32), so the first half of 2026 was on a stronger pace than 2025. The option “Plastic collection plummeted in 2026” is exactly what the chart was designed to tempt you into.',
          '<strong>Units multiply.</strong> “Thousand tonnes” means 64 on the bar = 64,000 tonnes. “Minutes per day” is not hours per week. <strong>Amount vs rate</strong>: a chart of how much plastic was collected says nothing about the recycling <em>rate</em> (the share of all plastic waste that is recycled), because we do not know how much plastic waste there was. <strong>Multi-response surveys</strong>: when “respondents could choose more than one app”, percentages add up to more than 100, so you cannot add them, and you cannot know how many people chose two apps together. Any option about overlap (“everyone who uses Instagram also uses LINE”) cannot be drawn.',
          '<strong>Procedure for NOT / EXCEPT / cannot-be-concluded.</strong> Step 1: read the title, the units and every note or asterisk. Step 2: for each option, point to its evidence and mark ✓ (shown), ✗ (contradicted) or ? (not shown). Step 3: for NOT provided or cannot be concluded, the key is the ?; for NOT true, look for the ✗.'
        ],
        simple:[
          'Read the small note and the star (*) under the chart before you answer.',
          'For each option, point to where the chart shows it. If you cannot point to it, it is not provided.',
          'Check units: 64 thousand tonnes = 64,000 tonnes. Half a year is not a whole year.'
        ],
        thai:'ข้อ NOT provided / EXCEPT / สรุปไม่ได้ ให้ชี้หาหลักฐานในภาพของทุกตัวเลือก ถ้าชี้ไม่ได้แปลว่าไม่มีข้อมูล แม้จะฟังดูสมเหตุสมผลก็ตาม ต้องอ่านตัวอักษรเล็กทุกครั้ง: หน่วย (thousand tonnes = คูณพัน), เครื่องหมาย * (เช่น ตัวเลขปี 2026 เป็นแค่ครึ่งปี เทียบกับทั้งปีไม่ได้), ปริมาณ vs อัตรา (เก็บพลาสติกได้มากขึ้น ไม่ได้แปลว่าอัตราการรีไซเคิลสูงขึ้น) และแบบสำรวจที่เลือกได้หลายข้อ (เปอร์เซ็นต์รวมเกิน 100 บวกกันไม่ได้ และไม่รู้ว่าใครใช้ทั้งสองแอป) กับดักคือตัวเลือกที่ดูตรงกับกราฟแต่ขัดกับหมายเหตุ',
        examples:[
          { s:'2026*: <strong>January–June only</strong>.', g:'35 vs 64 is half a year vs a whole year: no “plummet”.' },
          { s:'64 on a chart in <strong>thousand tonnes</strong> = 64,000 tonnes.', g:'The unit multiplies every bar.' },
          { s:'More plastic collected ≠ a higher recycling <strong>rate</strong>.', g:'The rate needs total waste, which is not shown.' },
          { s:'LINE 92% + TikTok 78% = 170%?', g:'Multi-response: percentages cannot be added, and overlap is unknown.' },
          { s:'“When germs are born” (TCAS66-style)', g:'No part of the diagram answers it → NOT provided.' }
        ],
        trap:'The footnote trap: the bar or number looks dramatic, an option describes the drama (“plummeted”, “fell by half”), and the asterisk that cancels it sits in small print under the chart. Dodge: read the notes before the numbers, and when you see a sudden change in the last bar, look for an asterisk first.',
        analogy:{ title:'The ingredients label', text:'A snack packet’s big letters shout “50% LESS SUGAR!” and the small print adds “*compared with our 2019 recipe”. The big letters are the bars; the small print is the note under the chart. Smart shoppers, and smart TCAS students, read the small print before believing the big letters.' },
        map:{ center:'NOT provided & small print', branches:[
          { label:'Point test', leaves:['point to the evidence','✓ shown, ✗ contradicted','? = not provided'] },
          { label:'Footnotes', leaves:['* part-year data','changed survey method','guideline levels'] },
          { label:'Units', leaves:['thousands, millions','minutes vs hours','% vs number of people'] },
          { label:'Logic traps', leaves:['amount ≠ rate','multi-response > 100%','overlap unknown'] }
        ] },
        story:{ title:'The great recycling collapse', panels:[
          { who:'Pun', text:'Breaking news! Recycling crashed in 2026: from 64 to 35. The city has given up!' },
          { who:'Nong Bot', text:'Alarm activated. Recycling has fallen by 45.3 percent. Sending sad emoji to all citizens.' },
          { who:'Fah', text:'Before the emoji: what does the little star next to 2026 say?' },
          { who:'Mint', text:'“The 2026 figure covers January–June only.” So 35 in half a year, and half of 64 is 32.' },
          { who:'T.Chris', text:'So the city is actually ahead of last year’s pace. The chart didn’t lie; the reader skipped the small print.' },
          { who:'Nong Bot', text:'Cancelling sad emoji. Sending thumbs-up. Also adding “read the asterisk” to my software.' }
        ], moral:'Read the notes before you believe the bars.' }
      },
      items:[
        { id:'t6l3s3-1', type:'read', tag:'vs-trap', level:'B2+', passage:'', visual:T6_V_RECYC,
          stem:'Which information is NOT provided in the chart?',
          options:[
            'the amount collected in 2023',
            'the unit used for the figures',
            'the types of plastic that were collected',
            'the months of 2026 that are included in the 2026 figure'
          ],
          answer:2,
          hint:'Try to point to the place in the chart that gives each piece of information.',
          why:'The chart shows how much plastic was collected, not what kinds of plastic, so the types are not provided. The 2023 amount (53) is a bar, the unit (thousand tonnes) is in the chart, and the note under the chart says the 2026 figure covers January–June.' },

        { id:'t6l3s3-2', type:'read', tag:'vs-trap', level:'B2+', passage:'', visual:T6_V_RECYC,
          stem:'Which conclusion is best supported by the chart and its note?',
          options:[
            'Plastic collection plummeted in 2026.',
            'The city collected 58 tonnes of plastic in 2024.',
            'In January–June 2026, the city passed half its 2025 total.',
            'Collection rose by the same amount every year from 2021 to 2025.'
          ],
          answer:2,
          hint:'Read the asterisk first. Then check the unit and the yearly changes.',
          why:'The 2026 bar covers only January–June, and 35 thousand tonnes is more than half of 2025’s 64 (32), so in January–June 2026 alone the city passed half its 2025 total. “Plummeted” ignores the asterisk, “58 tonnes” ignores the unit (it is 58,000 tonnes), and the yearly rises were 5, 6, 5 and 6 thousand tonnes, so not the same every year.' },

        { id:'t6l3s3-3', type:'read', tag:'vs-trap', level:'B2', passage:'', visual:T6_V_RECYC,
          stem:'How much plastic was collected for recycling in 2025?',
          options:['64 tonnes','640 tonnes','64,000 tonnes','6,400,000 tonnes'],
          answer:2,
          hint:'Read the unit on the chart and multiply.',
          why:'The unit is thousand tonnes, so 64 means 64 × 1,000 = 64,000 tonnes. 64 tonnes ignores the unit, and 640 and 6,400,000 tonnes multiply by the wrong amount.' },

        { id:'t6l3s3-4', type:'judge', tag:'vs-trap', level:'B2+', visual:T6_V_RECYC,
          given:'Use the recycling chart and its note.',
          stem:'True, False or Not given? <strong>The city’s recycling rate rose every year from 2021 to 2025.</strong>',
          answer:2,
          hint:'Check exactly what the chart measures, then compare it with the word in the statement.',
          why:'Not given. The chart shows the amount of plastic collected, which rose every year, but a recycling rate is the share of all plastic waste that is recycled. The chart does not tell us how much plastic waste the city produced, so the rate cannot be known. “True” is the trap for students who treat amount and rate as the same thing.' },

        { id:'t6l3s3-5', type:'read', tag:'vs-trap', level:'C1', passage:'', visual:T6_V_APPS,
          stem:'Which conclusion can NOT be drawn from the table?',
          options:[
            'Instagram’s figure is nearly triple Facebook’s.',
            'About three in four students use TikTok almost daily.',
            'Fewer than one in eight respondents use X almost every day.',
            'Every student who uses Instagram daily also uses LINE daily.'
          ],
          answer:3,
          hint:'Read the note under the table, then test each statement against the numbers.',
          why:'The note says respondents could choose more than one app, so the table shows each app separately and says nothing about overlap: we cannot know whether every Instagram user also uses LINE. The other three can be drawn: 12% is fewer than one in eight (12.5%), 64 is nearly three times 23, and 78% is about three in four.' }
      ]
    }
  ],

  check:{ id:'t6l3ck', name:'Systems Check · Diagrams', items:[
    { id:'t6l3ck-1', type:'read', tag:'vs-flow', level:'B2+', passage:'', visual:T6_V_CLIP,
      stem:'According to the flowchart, if no trusted news outlets have reported the event, you should ________.',
      options:[
        'not share it yet',
        'share it with a warning',
        'report it to the platform',
        'find out who first posted it'
      ],
      answer:0,
      hint:'Find the second diamond and follow its NO arrow.',
      why:'The no-branch of “Have at least two trusted news outlets reported the same event?” says “Do not share it” and “Tell the group that the clip has not been verified”, so for now you should not share it. Reporting the clip is only for clips that seem designed to mislead, finding the first poster is the earlier question, and sharing with a warning is not in the chart.' },

    { id:'t6l3ck-2', type:'read', tag:'vs-flow', level:'C1', passage:'', visual:T6_V_CLIP,
      stem:'Which statement is TRUE according to the flowchart?',
      options:[
        'A clip reported by one trusted outlet may be shared.',
        'Every clip should be reported to the platform in the end.',
        'A clip with no known first poster still reaches the second question.',
        'A clip from an official account can be shared without further checks.'
      ],
      answer:2,
      hint:'Follow both branches of the first diamond. Where does each one go next?',
      why:'If you cannot find the first poster, the clip is treated as unverified, but the chart still leads on to the second question about trusted news outlets. A clip needs at least two trusted outlets, not one; an official source still goes through the second question; and only clips that seem designed to mislead are reported.' },

    { id:'t6l3ck-3', type:'read', tag:'vs-diagram', level:'B2+', passage:'', visual:T6_V_WASTE,
      stem:'According to the diagram, what happens to clean plastic bottles and cups?',
      options:[
        'They are rinsed and later recycled.',
        'They are composted and used in the garden.',
        'They are sent to landfill with other waste.',
        'They are put in grey bins and collected by the district.'
      ],
      answer:0,
      hint:'Find the row for this waste stream and read it from left to right.',
      why:'The plastic row says the bottles and cups are rinsed by student volunteers, stored in yellow bins and collected by a recycling company, so they are rinsed and later recycled. Composting belongs to the food-scrap row, and grey bins, the district and landfill belong to the “Everything else” row.' },

    { id:'t6l3ck-4', type:'read', tag:'vs-diagram', level:'B2+', passage:'', visual:T6_V_WASTE,
      stem:'The diagram shows all of the following EXCEPT ________.',
      options:[
        'how much waste each stream produces',
        'which bins are used for each stream',
        'how food scraps return to the canteen',
        'where each type of waste finally ends up'
      ],
      answer:0,
      hint:'For each option, point to the column or note that shows it.',
      why:'The diagram describes the steps each stream goes through but gives no amounts, so how much waste each stream produces is not shown. The bin colours are in the Step columns, the End point column shows where each stream finishes, and the note explains that garden vegetables are cooked in the canteen.' },

    { id:'t6l3ck-5', type:'read', tag:'vs-trap', level:'C1', passage:'', visual:T6_V_WEEK,
      stem:'Which conclusion is best supported by the chart and its note?',
      options:[
        'Students wasted much less food in week 4.',
        'Food scraps fell steadily through September.',
        'Week 4 produced less than half as much as week 1.',
        'Per school day, week 4 produced about as much as week 2.'
      ],
      answer:3,
      hint:'Use the note to find the number of school days in each week, then divide.',
      why:'Week 4 had only three school days: 118 ÷ 3 ≈ 39.3 kg a day, almost the same as week 2 (196 ÷ 5 = 39.2 kg). So the lower bar is explained by the shorter week, not by less waste. Half of week 1 would be 105 kg, and 118 is more than that; and the weekly figures went down, up, then down, so they did not fall steadily.' },

    { id:'t6l3ck-6', type:'read', tag:'vs-trap', level:'B2+', passage:'', visual:T6_V_WEEK,
      stem:'On average, how many kilograms of food scraps were collected per school day in week 1?',
      options:['30 kg','40.8 kg','42 kg','70 kg'],
      answer:2,
      hint:'The note tells you how many school days week 1 had.',
      why:'Week 1 had five school days, so 210 ÷ 5 = 42 kg per school day. 30 kg divides by seven calendar days instead of school days, 40.8 kg is week 3’s daily average (204 ÷ 5), the wrong week, and 70 kg divides by three, the number of school days in week 4, not week 1.' }
  ] }
});

TOPICS.push(T6);

Object.assign(REMEDIATION, {
  'vs-table': {
    name:'Reading tables & rankings',
    principle:'Read the title, column headings, units and note first. Then write each option’s number beside it and compare only those numbers: “lowest of these four” is not the bottom of the whole table.',
    reteach:'Project a ranked table and cover the numbers. Ask students to predict what the table can and cannot answer from the title, headings and note alone. Then uncover it and ask subset questions (“Of these four, which is second-highest?”), modelling the habit of writing numbers next to the options. Finish with an unranked table that students must rank themselves, and one boundary question (just above / just below 300,000).',
    activities:[
      'Frame first: pairs get a table with the numbers blanked out and must write three questions it could answer and one it could not.',
      'Subset sprint: the teacher calls out four rows; the first student to rank them correctly on a mini-whiteboard wins the round.'
    ]
  },
  'vs-math': {
    name:'Arithmetic on visuals',
    principle:'Translate the words into one operation: times as many = divide, combined = add, difference / how many more = subtract, closest pair = the smallest gap. For “approximately”, round first and find a target number. Write every step.',
    reteach:'Put the four operation phrases on the board with their symbols. Solve one TCAS-style item of each type aloud, showing the rounding shortcut for “approximately x times as many”. Then show a two-step item and ask students to identify which wrong options come from stopping after step one. Include one percent vs percentage-point example (40% → 29% = 11 points).',
    activities:[
      'Operation match: students hold up ÷, +, − cards as the teacher reads stems aloud.',
      'Build the distractors: groups write a two-step question for a table and create three wrong options from half-done or wrong-operation answers.'
    ]
  },
  'vs-title': {
    name:'What the visual shows & best title',
    principle:'Say the frame in one line: what is measured + who / where + when (and the unit in brackets). Cross out options that change the measure, change the time, add a cause or cover only one row.',
    reteach:'Show a visual and four titles, each wrong in a different way: wrong measure, wrong time, added cause, too narrow. Ask students to label the fault in each. Then show how a bracketed unit (“% of students in each grade”) changes the meaning of a single cell, and let students explain one number in a full sentence.',
    activities:[
      'Title doctor: each group receives a “sick” title and must diagnose its fault (measure, time, cause, scope) and cure it.',
      'One-line frame: students have 15 seconds per visual to write “measure + who + when”; the class votes on the most exact line.'
    ]
  },
  'vs-trend': {
    name:'Trend language',
    principle:'Check the years the stem names, then the direction (up/down/no change), the size (slightly vs sharply; surge, plummet) and the pattern (steadily vs fluctuated). A description that is true for another span of the same line is still wrong.',
    reteach:'Draw one line on the board and split it into three spans. Ask students to describe each span with a different verb and adverb, so they see that the same line can surge, level off and fall. Contrast steadily (pace) with slightly (size), and show a line with small wobbles to kill the “large fluctuations” trap.',
    activities:[
      'Air graph: the teacher calls a trend word and students trace it in the air with one arm (surge, plummet, level off, fluctuate, peak).',
      'Span swap: pairs write two true sentences about different spans of the same line and test each other with “Which years?”'
    ]
  },
  'vs-pie': {
    name:'Pie charts & parts of a sample',
    principle:'Every slice is a share of the whole sample. Read the note and ask “percent of what?”; sub-numbers that add up to a slice are parts of it, and the difference is between those parts, not between a part and the slice.',
    reteach:'Draw a pie with one slice split by a note. Show that 14 + 8 = 22 proves the sub-numbers are shares of the whole sample, then solve “difference between female and male users” (6 points), “combined slices” (add) and “how many people” (% × sample). Finally show a note written as a share of the slice (“60% of BTS users are female”) and discuss why it cannot be added to other slices.',
    activities:[
      'Pizza maths: groups cut a paper pie into labelled slices and one slice into two toppings, then write three questions for another group.',
      'Percent of what? The teacher reads percentages from notes; students answer “of the whole” or “of the slice” with a hand signal.'
    ]
  },
  'vs-compare': {
    name:'Comparing groups',
    principle:'Make a gap list: for each category write the difference and which group is higher. Answer “largest difference”, “higher than” and “the only…” from the list, not from the tallest bar, and check whether the unit is a share or an amount.',
    reteach:'Project a two-group chart and build the gap list together on the board. Ask a largest-difference question and show that the tallest bars have a small gap. Then ask a “the only category where…” question and insist on checking every row. End with the unit: “% of each group’s spending” says nothing about who spends more money.',
    activities:[
      'Scoreboard: students convert each category into a “match score” (e.g. 19–4) and circle the biggest win.',
      'Only detective: groups must prove or disprove three “only” statements by checking every row, and present their evidence.'
    ]
  },
  'vs-flow': {
    name:'Flowcharts & decision paths',
    principle:'Treat every diamond as an if-clause. Start at the box the stem gives you, follow only the branch its condition chooses, and move one arrow for “next”. An action can be right on one branch and forbidden on the other.',
    reteach:'Turn a flowchart into a list of if → then sentences on the board. Walk three different “patients” through it with a finger, asking “next?” at each box. Then show options taken from the wrong branch and ask students to say which branch each belongs to. Point out warnings (“Do not…”) inside boxes.',
    activities:[
      'Human flowchart: students stand as boxes and diamonds; a “traveller” walks the path as the class calls yes or no.',
      'Branch swap: pairs write a next-step question for a flowchart with one distractor from the other branch and one from two steps later.'
    ]
  },
  'vs-diagram': {
    name:'Infographics: sources, components, effects',
    principle:'Read the headings first and name the skeleton (sources → pathways → end points → effects). Find the heading word in the stem and check options against that list only; something in the picture can still be under the wrong heading.',
    reteach:'Show an infographic with its headings hidden and ask students to guess them from the items. Reveal the headings and sort the items together. Then show a NOT question whose key appears in the infographic under another heading, and model circling the heading word in the stem. Highlight hedges such as “possible” and “still being studied”.',
    activities:[
      'Shelf sort: groups sort item cards from an infographic under heading cards, racing the clock.',
      'Title from headings: students write a best title for three infographics using only the topic plus the headings.'
    ]
  },
  'vs-trap': {
    name:'NOT provided & small-print traps',
    principle:'Read units, notes and asterisks before the numbers. For each option, point to its evidence: ✓ shown, ✗ contradicted, ? not shown. Watch part-year data, amount vs rate, and multi-response percentages that cannot be added.',
    reteach:'Show a chart with a dramatic last bar and hide its asterisk; let students conclude, then reveal the note and discuss. Practise the point test on a NOT-provided item. Contrast amount with rate using one simple example, and show a multi-response table whose percentages add up to 170% to explain why overlap cannot be known.',
    activities:[
      'Asterisk hunt: groups get three charts, each with a hidden footnote, and must predict what the note could say that would change the conclusion.',
      'Point or pass: the teacher reads statements about a visual; students point to the evidence on their copy or hold up a “?” card.'
    ]
  }
});
