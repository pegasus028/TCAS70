/* ===========================================================================
   TCAS70 LAUNCHPAD — SYSTEM 03 · Ads & Reviews  (topic-t3.js)
   Reading Part I (Advertisements, items 21–26) and Part II (Product/Service
   Review, items 27–32). Level 1: single ads. Level 2: reviews.
   Level 3: Ad A vs Ad B, the fine print, and consumer vocabulary.
   All brands, people and prices below are fictional.
   =========================================================================== */

/* ------------------------------------------------------------ SHARED ADS */
var T3_AD_HOSTEL = {
  brand:'Lanna Nest Hostel · Chiang Mai Old City',
  headline:'Travel more. Spend less. Meet the world.',
  body:['Backpacking on a student budget? Lanna Nest puts you inside the Old City walls, a five-minute walk from Tha Phae Gate and the Sunday Walking Street — for less than the price of a cinema ticket.',
        'Share a dorm, swap stories on our rooftop, and leave with friends from five continents.'],
  bullets:['Female-only and mixed 6-bed dorms with privacy curtains and personal lockers',
           'Free breakfast (toast, fruit, coffee) 7–10 a.m.',
           'Free walking tour every Monday and a Thai cooking night every Friday',
           'Bicycle rental ฿50 a day'],
  price:'Dorm beds from ฿290 a night · 10% off stays of 3 nights or more',
  cta:'Book on our website or add us on LINE: @lannanest',
  fine:'Guests must be aged 18–35. A valid passport or Thai ID card is required at check-in. ฿200 key deposit, refunded at check-out.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_AUPAIR = {
  brand:'Kangaroo Kids Au Pair Programme',
  headline:'Spend a year in Australia — and live like a local.',
  body:['Love children? Want to use your English every single day? Become an au pair with a friendly Australian host family. You get your own room, meals with the family and weekly pocket money — and your weekends are free to explore.'],
  bullets:['Walking the children to and from school',
           'Helping with homework, dinner and bath time',
           'Light housework such as laundry and tidying the children’s rooms',
           'Up to 30 hours a week, Monday to Friday only'],
  price:'Pocket money: AUD 280 a week · Free 3-day orientation course in Sydney',
  cta:'Apply through LINE @kkaupair — interviews are held in Bangkok every month',
  fine:'Applicants must be aged 18–30, hold a full driving licence and have at least 200 hours of childcare experience. The programme fee (฿25,000) covers insurance and orientation; flights are not included.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_SUN = {
  brand:'DayGuard Sun Milk SPF50+ PA++++',
  headline:'Sweat-proof protection for the whole school day.',
  body:['PE at 2 p.m.? Sports day in April? DayGuard’s light, milky formula sinks in within seconds, leaves no white cast and won’t clog your pores — so your skin stays clear under the hottest Bangkok sun.'],
  bullets:['Water- and sweat-resistant for up to 80 minutes',
           'Fragrance-free and tested on sensitive skin',
           'Reef-friendly: no oxybenzone or octinoxate',
           'Pocket-size 40 ml tube that fits in any pencil case'],
  price:'฿259 a tube · Buy 2, get a free UV-check wristband',
  cta:'Available at all Wellness Plus pharmacies nationwide',
  fine:'Reapply every 2 hours and after towel drying. Free wristband while stocks last.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_SCOOT = {
  brand:'PaiPai e-Scooters',
  headline:'Skip the traffic. Scan, ride, arrive.',
  body:['Stuck between the BTS station and your campus? Find a PaiPai scooter in the app, scan the QR code and go. When you arrive, park in any green PaiPai zone and walk away.'],
  bullets:['฿10 to unlock + ฿3 a minute',
           'Student Pass: unlimited rides of up to 30 minutes for ฿299 a month',
           'A helmet comes with every scooter',
           'Available 6 a.m.–10 p.m. around Siam, Samyan and Silom'],
  price:'Your first ride is FREE (up to 15 minutes) with the code PAIFIRST',
  cta:'Download the PaiPai app today',
  fine:'Riders must be 18 or over and hold a valid driving licence. Parking outside a green zone: ฿100 fine. The Student Pass requires a valid university student ID.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_GYM = {
  brand:'Pulse Lab Fitness · Ari',
  headline:'Stronger starts now.',
  body:['Our certified trainers have already helped more than 3,000 clients at our sister club in Sathorn get fitter, stronger and more confident. Your turn starts today.',
        'Pulse Lab opens its doors on 1 November. Only 50 Founding Member places remain.'],
  bullets:['Founding Members pay ฿990 a month — for life',
           'Free body-scan check every month',
           'Open 6 a.m.–11 p.m., seven days a week'],
  price:'Founding Member rate ends when all 50 places are taken',
  cta:'Reserve your place at the front desk or on our website',
  fine:'Minimum membership: 6 months. Founding Member rate is lost if membership is cancelled.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_BUDS = {
  brand:'Hush Pods Air',
  headline:'Shut out the city. Hear yourself think.',
  body:['Horns on Sukhumvit. Chatter in the canteen. A neighbour who drills at 7 a.m. Hush Pods Air’s active noise cancelling blocks up to 95% of background noise, so the only voice you hear is your own — or your favourite playlist.'],
  bullets:['Up to 30 hours of battery with the charging case',
           'Three sizes of soft ear tips included',
           'Transparency mode for crossing the road safely'],
  price:'Special price ฿1,490 (normal price ฿1,990) until 31 January',
  cta:'Try a pair at any Hush store',
  fine:'Special price available in stores only.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_TUTOR = {
  brand:'Top Mark Academy · A-Level English',
  headline:'Your 80+ starts here.',
  body:['Our eight-week course was designed by Dr Anan Rattanakorn, who has written university entrance tests for fifteen years. He knows exactly how examiners build their traps — and he will show you how to avoid them.',
        '“I jumped from 52 to 84 in eight weeks. The reading tricks alone were worth it!” — Ploy, M6, Nonthaburi'],
  bullets:['Small groups of 10', 'Weekly timed mini-tests', 'Saturday or Sunday classes'],
  price:'฿6,500 for the full course',
  cta:'Book a free trial class: 02-555-0147',
  fine:'Trial class for new students only.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_DELIVERY = {
  brand:'Pinto Go · Food Delivery',
  headline:'Dinner in 25 minutes. Or it’s on us.',
  body:['Hungry after tutoring? Pinto Go brings the city’s best street food, noodles and desserts straight to your door. Join 1.2 million hungry users who have already made the switch.'],
  bullets:['More than 4,000 restaurants across Bangkok',
           'Live rider tracking on the map',
           'Pay by card, QR code or cash'],
  price:'Pinto Go PLUS: free delivery on orders over ฿150 for just ฿49 a month — first month free',
  cta:'Download Pinto Go and use the code HUNGRY25',
  fine:'Late-delivery voucher (฿50) applies only to orders placed between 11 a.m. and 9 p.m. from restaurants within 5 km of the delivery address; one voucher per customer per day. PLUS renews automatically every month unless cancelled.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_CAMP = {
  brand:'Sea Breeze English Camp · Hua Hin',
  headline:'Wanted: English Camp Buddies for summer 2027',
  body:['Do you love English, games and the beach? Join our team of Camp Buddies and help Thai children aged 8–12 build confidence in English through songs, drama and treasure hunts.',
        'Make memories that last a lifetime — and friends who will remember you for just as long.'],
  bullets:['Two camps: 5–9 April and 19–23 April 2027',
           'Free accommodation and all meals at the camp',
           'Certificate of volunteer work (40 hours) for your university portfolio'],
  price:'Daily allowance: ฿400',
  cta:'Send a one-minute self-introduction video to seabreezecamp@mail.com by 31 January',
  fine:'Applicants must be aged 16–22 and have parental permission if under 18.',
  source:'Adapted for TCAS70 practice'
};

/* Level 3 ads */
var T3_AD_PREP = [
  { brand:'Summit Prep · A-Level English Weekend Intensive',
    headline:'Real teachers. Real classrooms. Real results.',
    body:['Twelve Saturday classes at our Siam Square centre, taught by experienced A-Level teachers. A maximum of 12 students per class means your teacher knows your name — and your weak points.'],
    bullets:['4 full timed mock exams with personal score reports',
             'Printed 300-page course book included',
             'Free make-up class if you miss a Saturday'],
    price:'฿8,900 · Early-bird price ฿7,900 if you pay before 30 November',
    cta:'Call 02-555-0192 or visit us at Siam Square Soi 3',
    fine:'Early-bird price not valid with other promotions. Fees are non-refundable once the course has started.',
    source:'Adapted for TCAS70 practice' },
  { brand:'ClickScore · A-Level English Online',
    headline:'Study anywhere. Score everywhere.',
    body:['Short video lessons you can watch on the BTS, in bed or between classes. Our AI coach marks your writing in seconds and tells you exactly what to fix.'],
    bullets:['10 full mock exams with instant scores',
             'Unlimited AI feedback on your writing',
             'Access 24/7 on phone, tablet or laptop'],
    price:'฿2,490 for 6 months · Try it free for 7 days',
    cta:'Download the ClickScore app',
    fine:'The free trial requires card details; the paid plan starts automatically on day 8 unless cancelled. Full refund within 14 days of payment.',
    source:'Adapted for TCAS70 practice' }
];

var T3_AD_LOOP3 = {
  brand:'Loop Buds 3 · Back-to-School Deal',
  headline:'New term. New sound.',
  body:['Meet the successor to our best-selling Loop Buds 2: clearer calls, longer battery life and the same rich sound.'],
  bullets:['Up to 9 hours per charge (36 hours with the case)',
           'Upgraded 3-microphone system for clear online classes',
           'IPX4 sweat- and splash-resistant'],
  price:'Students save 15%: ฿1,699 (normal price ฿1,999)',
  cta:'Buy at any Loop store',
  fine:'Student price: a valid student ID is required at purchase; one pair per student; offer ends 31 October and cannot be combined with other discounts or trade-in credit. The 1-year warranty covers manufacturing faults only. It does not cover loss, water damage from swimming or damage caused by dropping the product. Keep your receipt.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_RIVER = {
  brand:'Riverside Loft Hostel · Tha Tien, Bangkok',
  headline:'Songkran on the river.',
  body:['Celebrate Thailand’s water festival steps from Wat Pho, then watch the sun set behind Wat Arun from our rooftop bar. Modern amenities, old-town charm.'],
  bullets:['Mixed and female-only dorms with air-conditioning',
           'Complimentary welcome drink and waterproof phone pouch',
           'Free luggage storage on your check-out day'],
  price:'Songkran package (11–16 April): ฿1,650 for 3 nights, breakfast included',
  cta:'Book directly on our website for free cancellation',
  fine:'The package requires a minimum stay of 3 consecutive nights, with every night falling between 11 and 16 April. A refundable deposit of ฿500 is charged at check-in. Free cancellation up to 7 days before arrival applies to direct bookings only. Guests must be 18+ and show a passport or Thai ID card.',
  source:'Adapted for TCAS70 practice'
};

var T3_AD_FIT = [
  { brand:'Ember Fitness Club · Lat Phrao',
    headline:'Train harder. Pay less.',
    body:['Train in calm, spacious surroundings: state-of-the-art machines, a full free-weights zone and two air-conditioned studios — now at a price made for students.'],
    bullets:['Student plan: ฿890 a month on a 12-month contract',
             'Joining fee (฿1,000) waived with a valid student ID',
             'Open 5 a.m.–11 p.m. every day'],
    price:'Free induction session with a personal trainer',
    cta:'Sign up at reception',
    fine:'Student plan for full-time students aged 16–24. Early cancellation fee: ฿1,500.',
    source:'Adapted for TCAS70 practice' },
  { brand:'Lotus Flow · Yoga & Pilates, Ari',
    headline:'Find your balance.',
    body:['Stretch away exam stress in calm, air-conditioned studios with certified instructors. Beginners are always welcome.'],
    bullets:['More than 40 classes a week, 7 a.m.–9 p.m.',
             'Mats and towels complimentary',
             'No contract — pay by class pack'],
    price:'10-class pack ฿2,500 · First class ฿199',
    cta:'Book classes in the Lotus Flow app',
    fine:'Class packs expire 3 months after purchase and are non-transferable. Cancel a booking at least 12 hours before the class, or the class is deducted from your pack.',
    source:'Adapted for TCAS70 practice' }
];

/* --------------------------------------------------------- SHARED REVIEWS */
var T3_RV_BUDS = 'Review: Loop Buds 2 wireless earbuds\n\n' +
  '(1) I bought the Loop Buds 2 three months ago to replace my old wired earphones, mainly for online classes and the long bus ride to school. After daily use, I have a clear picture of what they do well and what they don’t.\n\n' +
  '(2) Sound quality is the highlight. The bass is rich without being muddy, and podcasts sound crisp even at low volume. The noise cancelling is good enough to block out bus engines, though not people talking right next to you.\n\n' +
  '(3) Battery life is another plus. I get around seven hours from one charge, and the case adds three more full charges, so I only plug it in twice a week.\n\n' +
  '(4) The microphone, however, is disappointing. In two online classes my teacher said I sounded “like I was underwater”, and I had to switch to my laptop’s microphone. The touch controls are also too sensitive: adjusting the buds in my ears often pauses the music by accident, a small glitch that becomes annoying fast.\n\n' +
  '(5) At ฿1,890, the Loop Buds 2 are fair value for listening, but not for calls. If you mainly listen to music, buy them. If you spend hours on video calls, look elsewhere.';

var T3_RV_CAFE = 'Review: Brew Theory Café, Ari\n\n' +
  '(1) Brew Theory opened near my tutoring school last month, and the photos online looked amazing, so my friends and I went on a Saturday afternoon.\n\n' +
  '(2) I’ll start with the good news: the Thai tea cheesecake is honestly excellent — creamy, not too sweet and beautifully presented.\n\n' +
  '(3) Everything else was a letdown. We waited 40 minutes for three drinks, even though only four other tables were taken. My iced latte was watery, and when I politely asked if it could be remade, the barista just shrugged. The “free Wi-Fi” on the menu board did not work the entire time we were there.\n\n' +
  '(4) One great cake cannot save a café. Unless the service improves dramatically, I won’t be going back — there are better places to spend ฿300 on a Saturday.';

var T3_RV_SABAI = 'Review: Sabai Stay Hostel, Phuket Old Town\n\n' +
  '(1) I spent four nights at Sabai Stay during the school holidays with my older sister, and it was the highlight of our trip.\n\n' +
  '(2) The dorm was spotless, every bed had a privacy curtain and a reading light, and the rooftop looked out over the old town’s colourful shophouses. Breakfast was simple but free.\n\n' +
  '(3) The staff were courteous and went out of their way to help. When my sister lost her phone charger, the receptionist lent us her own for two days.\n\n' +
  '(4) My only complaint is the stairs: there is no lift, and carrying our suitcases to the fourth floor was a workout. Still, for ฿350 a night, I would book again without thinking twice.';

var T3_RV_GYM = 'Review: Ember Fitness Club, Lat Phrao\n\n' +
  '(1) I joined Ember Fitness Club in June on its student plan (฿890 a month) and have trained there four or five times a week since. Overall, it is a well-equipped gym with helpful trainers, but it is not the calm, spacious place its advertisements promise.\n\n' +
  '(2) The equipment is the club’s biggest strength. There are twelve treadmills, a full free-weights area and two squat racks, and everything I have used has been clean and in working order. The club’s app also lets members book group classes up to three days ahead, which makes planning easy.\n\n' +
  '(3) The trainers are another plus. During my free induction session, a trainer named Beam checked my technique on every machine and wrote me a simple four-week plan at no extra cost.\n\n' +
  '(4) Crowding is the main problem. Between 5 and 8 p.m. on weekdays, I have had to queue for a squat rack more than once, and the changing rooms become so busy that they are uncomfortable to use. The air-conditioning also broke down one evening in August, on one of the hottest days of the month.\n\n' +
  '(5) If you can train in the morning or at weekends, Ember is excellent value. If you can only come after school, be ready to wait.';

var T3_RV_COURSE = 'Review: FluentUp Online IELTS Course (12 weeks)\n\n' +
  '(1) My parents paid for FluentUp’s twelve-week online course after I missed Band 6.5 on my first IELTS attempt. I finished the course last month, and my feelings about it are complicated.\n\n' +
  '(2) The video lessons are polished. Each unit is broken into ten-minute clips, so I could watch them on the BTS on my way to school. The reading strategies in particular were eye-opening: my reading score jumped from 5.5 to 7.0.\n\n' +
  '(3) The writing feedback was a different story. The course promised “personal feedback from expert tutors within 48 hours”. In practice, my essays came back after five or six days with comments such as “Good effort!” and “Check grammar.” When I emailed to ask which grammar, I received a link to a video I had already watched.\n\n' +
  '(4) The live speaking sessions were capped at 20 students, which sounds small until you realise that each session lasted 45 minutes. I spoke for about two minutes each time.\n\n' +
  '(5) My overall score on my second attempt was 6.5, so the course did its job — just about. When FluentUp offered me its advanced course at a “loyal student price”, I politely said no.';

var T3_RV_LODGE = 'Review: Misty Hill Eco-Lodge, Khao Yai\n\n' +
  '(1) Our family of four booked two nights at Misty Hill Eco-Lodge for my mother’s birthday, attracted by photos of wooden cabins surrounded by forest. We left with mixed feelings.\n\n' +
  '(2) The setting is breathtaking. Our cabin faced a valley, and at 6 a.m. we watched mist roll over the hills from the balcony. The solar-powered hot water worked perfectly, and the staff proudly explained how the lodge composts all of its food waste on site.\n\n' +
  '(3) The food was a different matter. The dinner menu offered only five dishes, two of which were “not available tonight”, and breakfast on both mornings was exactly the same fried rice and toast.\n\n' +
  '(4) Getting there is also harder than the lodge’s website suggests. The final three kilometres are an unpaved road, and the bottom of our small family car scraped the ground twice. Guests without a high vehicle should book the lodge’s transfer service (฿500 each way).\n\n' +
  '(5) Would I go back? For the view and the silence, perhaps — but next time I would pack snacks and book the transfer.';

var T3_RV_TAB = 'Review: Nimbus Tab 11\n\n' +
  '(1) The Nimbus Tab 11 is 80 grams lighter than its predecessor, the Tab 10, and it finally fixes the older model’s biggest drawback: a battery that barely lasted a school day.\n\n' +
  '(2) It is also remarkably versatile. With the optional keyboard it becomes a laptop for essays; with the stylus it turns into a sketchbook; and in a café it is simply a very good screen for films. Switching between these modes is seamless.\n\n' +
  '(3) Buyers who already own a Tab 10 can redeem a ฿3,000 trade-in voucher at any Nimbus store until 31 December. Students also get six months of Nimbus Cloud storage at no extra cost; after that, the subscription renews at ฿59 a month.';


/* ================================================================ SYSTEM */
var T3 = {
  id:'t3', n:3, code:'System 03', art:'megaphone', name:'Ads & Reviews', cefr:'B1+–B2+',
  blurb:'Twelve marks that reward speed and discipline: scan an ad in 60 seconds, catch the one detail that isn’t there, name the persuasion trick, and weigh a reviewer’s verdict by the last paragraph.',
  levels:[]
};

/* ================================================================ LEVEL 1 */
T3.levels.push({ id:'t3l1', n:1, name:'Advertisements', cefr:'B1+–B2',
  blurb:'Items 21–26 in one habit: headline → offer → conditions → contact. Who is the ad talking to, what does it want, and what exactly does it promise?',
  subs:[

  /* ------------------------------------------------------------ t3l1s1 */
  { id:'t3l1s1', name:'Purpose & target audience', cefr:'B1+',
    theory:{
      key:'Every ad wants <strong>one kind of reader</strong> to do <strong>one thing</strong>: find WHO it is talking to and WHAT it wants them to do, and you have both the purpose and the audience.',
      body:[
        '<p>An advertisement is paid space. Every word costs the advertiser money, so nothing is there by accident. That gives you a shortcut: the <strong>purpose</strong> of an ad is the action it wants from you — buy, book, apply, download, visit, call — and the <strong>audience</strong> is the person whose problem the ad describes. <em>“Backpacking on a student budget?”</em> names its audience in five words. The call to action at the bottom (<em>“Book on our website”</em>, <em>“Apply through LINE”</em>) names the purpose in one verb.</p>',
        '<p>Read every ad in the same four stops, and you will finish it in about a minute: <strong>1 Headline</strong> (the feeling and the audience) → <strong>2 Offer</strong> (what is being sold or offered, and the price) → <strong>3 Conditions</strong> (the fine print: who can get it, and when) → <strong>4 Contact</strong> (what you are told to do next). Most purpose and audience questions are answered at stops 1 and 4; most detail questions at stops 2 and 3.</p>',
        '<p>TCAS asks this in three shapes: <em>“The main purpose of this advertisement is to ______”</em>, <em>“This product is most attractive for people who ______”</em> and <em>“This advertisement is for ______”</em>. TCAS67 showed an au pair poster, and the key was simply <em>caretakers</em>: the ad was <strong>recruiting</strong>, not selling. Watch for three kinds of distractor: <strong>too narrow</strong> (one bullet point promoted to the whole purpose — “to advertise a walking tour”), <strong>wrong action</strong> (sell vs recruit vs announce), and <strong>reversed audience</strong> (“families who need a babysitter” for an ad that wants people to <em>become</em> babysitters).</p>',
        '<p>Decision procedure. <strong>Step 1:</strong> circle the verb in the call to action. <strong>Step 2:</strong> underline every “you” clue — the opening question, the benefits, the age limit in the fine print. <strong>Step 3:</strong> say it in one line: “This ad wants ___ to ___.” <strong>Step 4:</strong> cross out options that describe one bullet or the wrong “you”. A quick money check helps too: if the reader <em>pays</em>, the ad is selling; if the reader <em>gets paid</em>, it is recruiting.</p>'
      ],
      simple:[
        'An ad wants some people to do something. Ask two questions: Who is it talking to? What does it want them to do?',
        'Look at the first line (it often asks “you” a question) and the last line (it tells you to buy, book, apply or download). That last verb is the purpose.',
        'Be careful: one small part of the ad is not the purpose of the whole ad.'
      ],
      thai:'โฆษณาทุกชิ้นมีเป้าหมายเดียว คือทำให้ผู้อ่านกลุ่มหนึ่งทำสิ่งหนึ่ง ให้ดูว่าโฆษณา “พูดกับใคร” (คำถามบรรทัดแรก และเงื่อนไขอายุใน fine print) และ “อยากให้ทำอะไร” (คำกริยาใน call to action เช่น Apply, Book, Download) กับดักของข้อสอบคือตัวเลือกที่หยิบรายละเอียดข้อเดียวมาเป็นจุดประสงค์ของทั้งชิ้น หรือสลับกลุ่มเป้าหมาย เช่น ประกาศรับสมัคร au pair ไม่ได้ขายบริการให้ครอบครัวที่หาพี่เลี้ยง แต่กำลังรับสมัครคนไปเป็นพี่เลี้ยงเอง',
      examples:[
        { s:'<strong>Backpacking on a student budget?</strong> … Book on our website.', g:'Audience in the first question (budget student travellers); purpose in the last verb (book a stay).' },
        { s:'Pocket money: AUD 280 a week … <strong>Apply</strong> through LINE.', g:'The reader gets paid, so the ad is recruiting, not selling.' },
        { s:'<strong>Open House Saturday:</strong> free taster classes 10 a.m.–4 p.m.', g:'Purpose: to announce an event and get people to come.' },
        { s:'Guests must be aged <strong>18–35</strong>.', g:'Fine print narrows the audience: families with young children are out.' }
      ],
      trap:'The “too narrow” option: a real detail from one bullet (“to promote a Thai cooking night”) dressed up as the purpose of the whole ad. It feels right because you can point at it. Dodge: the purpose must explain the headline AND the call to action, not one line in the middle.',
      analogy:{ title:'The TikTok hook', text:'The first two seconds of a clip decide who keeps watching; the last frame says “follow for part 2”. An ad works the same way: the headline hooks a certain viewer, and the final line tells that viewer what to tap. Hook = audience. Final tap = purpose.' },
      map:{ center:'Purpose & audience', branches:[
        { label:'Four stops', leaves:['Headline','Offer and price','Conditions (fine print)','Contact / call to action'] },
        { label:'Purpose verbs', leaves:['Sell: buy, order, try','Recruit: apply, join our team','Announce: come, register'] },
        { label:'Audience clues', leaves:['Opening question to “you”','Problems it solves','Age or ID limits'] },
        { label:'Wrong options', leaves:['Too narrow: one bullet','Wrong action','Reversed audience'] }
      ]},
      story:{ title:'Nong Bot Adopts a Kangaroo', panels:[
        { who:'Nong Bot', text:'Ad detected: “Kangaroo Kids Au Pair Programme.” Purpose: to sell baby kangaroos. Adding one to cart!' },
        { who:'Pun', text:'Bot, there’s no price for a kangaroo. There’s pocket money of AUD 280 a week. They’re paying <em>you</em>.' },
        { who:'Mint', text:'And the fine print says “Applicants must be aged 18–30.” Nobody “applies” to buy a kangaroo.' },
        { who:'T.Chris', text:'Follow the money and the verb. Who pays whom? What does the last line tell you to do?' },
        { who:'Fah', text:'“Apply through LINE — interviews in Bangkok.” It’s recruiting people to look after children. Purpose: hire.' },
        { who:'Nong Bot', text:'Cart emptied. Application started. Question: do 200 hours of watering houseplants count as childcare?' }
      ], moral:'Purpose = who pays whom + the action verb. If the reader gets paid, the ad is recruiting, not selling.' }
    },
    items:[
      { id:'t3l1s1-1', type:'read', tag:'ad-purpose', level:'B1+', passage:'', ad:T3_AD_HOSTEL,
        stem:'The main purpose of this advertisement is to ______.',
        options:['hire staff for a busy hostel',
                 'sell tickets for a walking tour',
                 'promote the Old City as a place to visit',
                 'attract young budget travellers to stay at the hostel'],
        answer:3,
        hint:'Look at the opening question and the verb in the last line before the fine print.',
        why:'The ad opens with “Backpacking on a student budget?” and ends with “Book on our website”, so it wants budget travellers to book a bed. The walking tour is one free extra, not the purpose, and the Old City is mentioned only to show the hostel’s location.' },

      { id:'t3l1s1-2', type:'read', tag:'ad-purpose', level:'B1+', passage:'', ad:T3_AD_HOSTEL,
        stem:'This advertisement would be most attractive to ______.',
        options:['families with young children',
                 'retired couples looking for luxury',
                 'sociable travellers on a tight budget',
                 'business travellers who need a private room'],
        answer:2,
        hint:'Check who the ad describes, what it costs, and the age rule in the fine print.',
        why:'Cheap dorm beds (“from ฿290”), shared rooftop stories and “friends from five continents” all target sociable budget travellers. Families with young children are excluded by the 18–35 age rule, and the ad offers only dorms, not private rooms or luxury.' },

      { id:'t3l1s1-3', type:'sort', tag:'ad-purpose', level:'B1+',
        stem:'Sort each headline by what the advertiser wants the reader to do.',
        bins:[
          { key:'sell', label:'Buy or use a product', hint:'the reader pays' },
          { key:'hire', label:'Apply for a job or role', hint:'the reader gets paid or joins a team' },
          { key:'event', label:'Come to an event', hint:'a date, a time, a place' }
        ],
        items:[
          { text:'Brighter smile in 7 days — now only ฿99', bin:'sell' },
          { text:'Unlimited mobile data for ฿199 a month', bin:'sell' },
          { text:'Weekend riders wanted: earn up to ฿900 a day', bin:'hire' },
          { text:'Join our summer camp team as an English buddy', bin:'hire' },
          { text:'Open House Saturday: free taster classes, 10 a.m.–4 p.m.', bin:'event' },
          { text:'Night Run Bangkok: registration opens 1 December', bin:'event' }
        ],
        hint:'Ask who pays whom, and whether there is a date for people to turn up.',
        why:'When the reader pays (฿99, ฿199 a month), the ad is selling. When the reader earns money or joins a team, it is recruiting. When the key information is a date, time and place, it is announcing an event. This “who pays whom” test settles most purpose questions in seconds.' },

      { id:'t3l1s1-4', type:'read', tag:'ad-purpose', level:'B1+', passage:'', ad:T3_AD_AUPAIR,
        stem:'This advertisement is mainly for ______.',
        options:['people who want to care for children abroad',
                 'students hoping to enrol at a school in Sydney',
                 'tourists planning a short holiday in Australia',
                 'families in Thailand who need a babysitter at home'],
        answer:0,
        hint:'Who receives the pocket money, and who is told to apply?',
        why:'The reader receives pocket money, does school runs and homework help, and is told to “Apply”, so the ad recruits people to look after children in Australia. The babysitter option reverses the roles: the families in this ad are in Australia and they are the hosts, not the readers.' },

      { id:'t3l1s1-5', type:'read', tag:'ad-purpose', level:'B1+', passage:'', ad:T3_AD_AUPAIR,
        stem:'The advertisement encourages interested readers to ______.',
        options:['pay the programme fee before applying',
                 'take a childcare course in Sydney first',
                 'apply and attend an interview in Bangkok',
                 'book a holiday with a host family in Australia'],
        answer:2,
        hint:'The call to action is the line that tells the reader what to do next.',
        why:'The contact line says “Apply through LINE @kkaupair — interviews are held in Bangkok every month.” The fee is mentioned but never as a first step, the Sydney course is an orientation after you are accepted, and living with a host family is a job, not a holiday booking.' }
    ]
  },

  /* ------------------------------------------------------------ t3l1s2 */
  { id:'t3l1s2', name:'Selling points, conditions & “NOT mentioned”', cefr:'B2',
    theory:{
      key:'For NOT mentioned / NOT true, don’t hunt for the answer: <strong>tick the three options you CAN find</strong> in the ad, and the leftover is the key.',
      body:[
        '<p>Think about how the examiner writes these items. Three options are copied from the ad and paraphrased; one is invented or reversed. So every wrong option has a <strong>home</strong> — a line you can point to — and the key has <strong>no home</strong> (NOT mentioned / NOT provided) or a home that says the <strong>opposite</strong> (NOT true / FALSE). That is why hunting for the key wastes time: you are looking for something that isn’t there. Hunt for the three that are, instead.</p>',
        '<p>The <strong>Tick–Cross–Leftover</strong> method. Step 1: for each option, find its home and write the line next to it (“bullet 2”, “fine print”). Step 2: tick it if the ad says it, even in different words — TCAS68 turned “Promote Blood Circulation” into “It promotes better blood flow”. Step 3: cross it if the ad says the opposite. Step 4: the one option you could not place is the key. Keep the two question types apart: <em>NOT mentioned</em> = absent; <em>NOT true</em> = contradicted.</p>',
        '<p>Be strict about paraphrase. “Tested on sensitive skin” is not the same as “suitable for babies”; “a helmet comes with every scooter” is not “helmets are compulsory”. Your world knowledge is the enemy here: every scooter has a top speed and every product is made somewhere, but if the ad doesn’t say it, it is NOT mentioned. TCAS66 used exactly this with a plant book: its NOT-provided options were details every book ad seems to have — a suitable age group, the number of copies sold, how many people rated it. Only the page can tell you which ones are really there.</p>',
        '<p>Conditions hide at stops 2 and 3: the price line and the fine print. Detail stems such as <em>“Students can get a discount by ______”</em> (TCAS69) or <em>“A rider can avoid the fine by ______”</em> are answered there, not in the headline. And when the headline and the fine print disagree, the fine print wins: “protection for the whole school day” in big letters, “reapply every 2 hours” in small ones.</p>'
      ],
      simple:[
        'Three answers are in the ad. One is not. Find the three first, and tick them. The one you cannot find is the answer.',
        'The ad may use different words, so look for the same meaning, not the same words.',
        'Do not use what you know about the world. Use only the ad. Rules and limits are usually in the small print at the bottom.'
      ],
      thai:'ข้อ NOT mentioned / NOT true อย่าไล่หาคำตอบโดยตรง ให้ติ๊กตัวเลือกที่ “เจอในโฆษณา” ทีละข้อ (อาจถูกเปลี่ยนคำเป็น paraphrase) ตัวเลือกที่เหลือซึ่งหาที่อยู่ไม่ได้คือคำตอบ ต้องแยกให้ออกว่า NOT mentioned คือไม่มีเลย ส่วน NOT true คือโฆษณาบอกตรงกันข้าม กับดักสำคัญคือการใช้ความรู้รอบตัวเติมข้อมูลเอง เช่น คิดว่าโฆษณาสกู๊ตเตอร์ต้องบอกความเร็วสูงสุด ทั้งที่ไม่ได้เขียนไว้ และถ้าหัวโฆษณากับ fine print ขัดกัน ให้เชื่อ fine print',
      examples:[
        { s:'Option: “It promotes better blood flow.” Ad: “<strong>Promote Blood Circulation</strong>”', g:'Same meaning, new words: tick it. It is mentioned.' },
        { s:'Option: “Its top speed.” Ad: price, hours, parking zones, helmet… <strong>no speed</strong>', g:'No home anywhere in the ad: NOT mentioned.' },
        { s:'Headline: “protection for the whole school day” · Fine print: “<strong>Reapply every 2 hours</strong>”', g:'“One layer lasts all day” is NOT true: the small print contradicts it.' },
        { s:'“Free wristband <strong>while stocks last</strong>.”', g:'Buying two tubes does not guarantee a wristband.' }
      ],
      trap:'The “sounds normal” option: a detail every product of this type would have (price, top speed, where it is made, age group). Your brain fills it in, so you tick it. Dodge: tick only what you can point to with your pencil.',
      analogy:{ title:'Taking attendance', text:'The teacher doesn’t search the corridors for the missing student. She reads the class list, ticks everyone who answers “here”, and the name left unticked is the one who is absent. Four options, three answer “here” — the silent one is your key.' },
      map:{ center:'NOT mentioned / NOT true', branches:[
        { label:'Method', leaves:['Find each option’s home','Tick paraphrases too','Cross contradictions','Leftover = key'] },
        { label:'Two question types', leaves:['NOT mentioned = absent','NOT true = opposite'] },
        { label:'Where details hide', leaves:['Bullets','Price line','Fine print'] },
        { label:'Traps', leaves:['World knowledge','Headline vs fine print','Near-paraphrase'] }
      ]},
      chant:{ title:'The Leftover Rap', beat:'clap-clap-snap (4/4), steady walking pace', lines:[
        'Three are in the ad and one is not,',
        'find each option’s home, give it a spot.',
        'Tick it if it’s there, though the words change dress,',
        'cross it if the ad says no instead of yes.',
        'Don’t trust your brain, don’t trust your feed,',
        'trust the page — it’s all you need.',
        'Headline, offer, fine print, call:',
        'the one with no home is the answer — that’s all!'
      ]}
    },
    items:[
      { id:'t3l1s2-1', type:'read', tag:'ad-detail', level:'B2', passage:'', ad:T3_AD_SUN,
        stem:'Which of the following pieces of information is NOT provided in the advertisement?',
        options:['Where it is made',
                 'How much one tube costs',
                 'How long it resists water',
                 'Whether it suits sensitive skin'],
        answer:0,
        hint:'Give each option a home in the ad: price line, bullets, headline or fine print.',
        why:'The price (“฿259 a tube”), water resistance (“up to 80 minutes”) and sensitive skin (“tested on sensitive skin”) all appear in the ad. Nothing says where the sun milk is produced, so that is the leftover. “Available at all Wellness Plus pharmacies” tells you where to buy it, not where it is made.' },

      { id:'t3l1s2-2', type:'read', tag:'ad-detail', level:'B2', passage:'', ad:T3_AD_SUN,
        stem:'Which of the following is NOT true about DayGuard?',
        options:['It contains no oxybenzone.',
                 'One layer protects you all day.',
                 'It leaves no white marks on the skin.',
                 'It is sold in a tube small enough for a pencil case.'],
        answer:1,
        hint:'The headline makes a big promise. Does the smallest print agree with it?',
        why:'The fine print says “Reapply every 2 hours and after towel drying”, which contradicts the idea that one layer lasts all day, even though the headline sounds like it. “No white cast” (no white marks), “no oxybenzone” and the “pocket-size 40 ml tube” are all stated in the ad.' },

      { id:'t3l1s2-3', type:'judge', tag:'ad-detail', level:'B2', ad:T3_AD_SUN,
        given:'Anyone who buys two tubes of DayGuard is sure to get a free UV-check wristband.',
        stem:'According to the advertisement, is this statement True, False or Not given?',
        answer:1,
        hint:'Does the fine print add any condition to the free gift?',
        why:'False. The offer says “Buy 2, get a free UV-check wristband”, but the fine print adds “while stocks last”. Once the wristbands run out, buyers of two tubes get nothing extra, so the free gift is not guaranteed.' },

      { id:'t3l1s2-4', type:'read', tag:'ad-detail', level:'B2', passage:'', ad:T3_AD_SCOOT,
        stem:'According to the advertisement, a rider can avoid a ฿100 charge by ______.',
        options:['parking in a green zone',
                 'wearing the helmet provided',
                 'keeping rides under 30 minutes',
                 'using the code PAIFIRST in the app'],
        answer:0,
        hint:'Find the ฿100 in the ad and read what it is attached to.',
        why:'The fine print says “Parking outside a green zone: ฿100 fine”, so parking inside a green zone avoids it. PAIFIRST gives a free first ride, the 30-minute limit belongs to the Student Pass, and the helmet is simply provided — none of them is linked to the ฿100.' },

      { id:'t3l1s2-5', type:'sort', tag:'ad-detail', level:'B2', ad:T3_AD_SCOOT,
        stem:'Take attendance. Which pieces of information are in the PaiPai ad, and which are NOT mentioned?',
        bins:[
          { key:'yes', label:'Mentioned', hint:'you can point to the line' },
          { key:'no', label:'NOT mentioned', hint:'no home anywhere in the ad' }
        ],
        items:[
          { text:'The cost of unlocking a scooter', bin:'yes' },
          { text:'Where riders should leave the scooter', bin:'yes' },
          { text:'The minimum age of riders', bin:'yes' },
          { text:'Whether a helmet is provided', bin:'yes' },
          { text:'The top speed of the scooters', bin:'no' },
          { text:'What riders should do when it rains', bin:'no' },
          { text:'Which payment methods the app accepts', bin:'no' }
        ],
        hint:'Point with your finger. No line to point at means NOT mentioned.',
        why:'Unlocking (“฿10 to unlock”), parking (“green PaiPai zone”), age (“18 or over”) and helmets (“A helmet comes with every scooter”) all have a home in the ad. Top speed, rain and payment methods are things every scooter service must deal with, which is exactly why they feel mentioned — but the ad says nothing about them.' }
    ]
  },

  /* ------------------------------------------------------------ t3l1s3 */
  { id:'t3l1s3', name:'Persuasion techniques', cefr:'B2',
    theory:{
      key:'Name a technique by what the words <strong>do to you</strong>: rush you, crowd you, reassure you with an expert, move your feelings, reason with facts, quote a happy customer, or promise you peace.',
      body:[
        '<p>There are two roads to “yes”: through the <strong>head</strong> (facts, numbers, price, features) and through the <strong>heart</strong> (feelings, fears, belonging). Advertising techniques are shortcuts along those roads, and each one leaves fingerprints in the language:</p><p><strong>Urgency / scarcity</strong> — now, today only, ends 31 January, only 50 places left, while stocks last. <strong>Bandwagon</strong> — join 1.2 million users, everyone’s switching, best-selling, No. 1. <strong>Expert endorsement</strong> — Dr…, dermatologist-tested, designed by examiners, certified trainers. <strong>Testimonial</strong> — a quotation from an ordinary, named customer. <strong>Logical reason</strong> — measurable facts about the product: 95%, 30 hours, ฿3 a minute. <strong>Emotional appeal</strong> — memories, pride, confidence, fear. <strong>Desire for peace and relaxation</strong> — escape, quiet, calm, breathe, leave the noise behind.</p>',
        '<p>TCAS69 asked which technique a café headline about escaping the rush used, and the options included both “linking the product to positive feelings” and “appealing to a desire for peace and relaxation”. Both touch emotion, but only one names what the words actually offer: <em>escape</em> from a <em>rush</em>. The rule: <strong>choose the most specific label that matches the exact words</strong>, not the general mood of the ad.</p>',
        '<p>Two pairs cause most mistakes. <strong>Expert vs testimonial:</strong> ask who is speaking. A qualified person (Dr Anan, “dermatologists”) = expert; an ordinary user (“Ploy, M6”) = testimonial. <strong>Bandwagon vs logic:</strong> both use numbers. A number of <em>people</em> (“3,000 clients”, “1.2 million users”) = bandwagon; a number about the <em>product</em> (“blocks 95% of noise”) = logical reason.</p>',
        '<p>Procedure. <strong>Step 1:</strong> read only the quoted words. <strong>Step 2:</strong> underline the power word (only, join, Dr, escape, 95%). <strong>Step 3:</strong> ask “What is this trying to make me do — hurry, follow, trust, feel, calculate, or relax?” <strong>Step 4:</strong> match that verb to the label.</p>'
      ],
      simple:[
        'Ads use tricks to make you want to buy. Look at the exact words.',
        '“Only”, “now”, “ends soon” = hurry (urgency). “Join millions” = everyone does it (bandwagon). “Dr” or “experts” = trust the expert. A customer’s words in quotation marks = testimonial. Numbers about the product = a logical reason. “Escape”, “calm”, “quiet” = peace and relaxation.',
        'If two answers look possible, choose the one that matches the words most exactly.'
      ],
      thai:'เทคนิคการโฆษณาดูได้จาก “คำ” ที่ใช้: เร่งให้รีบ (urgency/scarcity เช่น only, ends soon) ชวนให้ทำตามคนส่วนใหญ่ (bandwagon เช่น join 1.2 million users) อ้างผู้เชี่ยวชาญ (expert endorsement) ยกคำพูดลูกค้า (testimonial) ให้เหตุผลด้วยตัวเลขข้อเท็จจริงของสินค้า (logical reason) เร้าอารมณ์ (emotional appeal) หรือสัญญาความสงบผ่อนคลาย (desire for peace เช่น escape, quiet) กับดักคือตัวเลือกที่กว้างเกินไป เช่น “positive feelings” ให้เลือกป้ายที่ตรงกับคำในโฆษณาที่สุด และระวังตัวเลข: ตัวเลขจำนวนคนคือ bandwagon แต่ตัวเลขคุณสมบัติสินค้าคือ logical reason',
      examples:[
        { s:'“<strong>Only 50</strong> Founding Member places remain.”', g:'Scarcity/urgency: act before it runs out.' },
        { s:'“<strong>Join 1.2 million</strong> hungry users.”', g:'Bandwagon: a number of people, not a fact about the product.' },
        { s:'“Blocks up to <strong>95%</strong> of background noise.”', g:'Logical reason: a measurable claim about the product.' },
        { s:'“I jumped from 52 to 84!” — <strong>Ploy, M6</strong>', g:'Testimonial: an ordinary customer speaking, not an expert.' },
        { s:'“<strong>Shut out</strong> the city. Hear yourself think.”', g:'Desire for peace and quiet — more precise than “positive feelings”.' }
      ],
      trap:'Two options both fit the mood (“positive feelings” and “peace and relaxation”), and students pick the broader one because it feels safer. TCAS rewards the precise one. Dodge: quote the exact words and pick the label those words literally describe.',
      analogy:{ title:'The fandom playbook', text:'A comeback teaser uses every trick: “Pre-orders close Friday” (urgency), “10 million streams in 24 hours” (bandwagon), a famous producer’s name (expert), fans’ reaction videos (testimonial), “the most emotional album yet” (feelings). Once you can name the move, it stops working on you — and starts working for you in the exam.' },
      map:{ center:'Persuasion techniques', branches:[
        { label:'Hurry', leaves:['Only / last chance','Ends soon','While stocks last'] },
        { label:'Trust', leaves:['Expert: Dr, certified','Testimonial: named customer','Bandwagon: millions of users'] },
        { label:'Head', leaves:['Logical reason','Numbers about the product','Price and features'] },
        { label:'Heart', leaves:['Emotional appeal','Peace and relaxation','Escape, calm, quiet'] }
      ]},
      moves:[
        { move:'Tap your wrist like a watch, twice', says:'Urgency — time is running out!' },
        { move:'Wave both arms towards you like calling a crowd', says:'Bandwagon — everyone’s joining!' },
        { move:'Push imaginary glasses up your nose', says:'Expert — the doctor says so.' },
        { move:'Point to a friend and give a thumbs-up', says:'Testimonial — a real customer loved it.' },
        { move:'Palms down, breathe out slowly', says:'Peace — escape the noise, relax.' }
      ]
    },
    items:[
      { id:'t3l1s3-1', type:'sort', tag:'ad-technique', level:'B2',
        stem:'Sort each slogan by the technique it uses.',
        bins:[
          { key:'urg', label:'Urgency / scarcity', hint:'hurry' },
          { key:'band', label:'Bandwagon', hint:'everyone does it' },
          { key:'exp', label:'Expert endorsement', hint:'trust a qualified person' },
          { key:'peace', label:'Peace & relaxation', hint:'escape and calm' }
        ],
        items:[
          { text:'Only 20 seats left — register before Friday!', bin:'urg' },
          { text:'Sale ends at midnight.', bin:'urg' },
          { text:'Over 50,000 Bangkok students already use it.', bin:'band' },
          { text:'Thailand’s best-selling study app, three years running.', bin:'band' },
          { text:'Recommended by dermatologists.', bin:'exp' },
          { text:'Designed with sports scientists at Riverbank University.', bin:'exp' },
          { text:'Leave the noise behind. Breathe.', bin:'peace' },
          { text:'Your quiet corner in a busy city.', bin:'peace' }
        ],
        hint:'Underline the power word in each slogan: a time limit, a crowd, a qualification, or calm.',
        why:'Time limits and small numbers of places push you to hurry. Numbers of users and “best-selling” invite you to follow the crowd. Doctors and scientists lend their authority. “Leave the noise behind” and “quiet corner” offer escape and calm — the peace-and-relaxation appeal.' },

      { id:'t3l1s3-2', type:'read', tag:'ad-technique', level:'B2', passage:'', ad:T3_AD_GYM,
        stem:'The sentence “Only 50 Founding Member places remain.” is an example of which advertising technique?',
        options:['Using an expert’s opinion',
                 'Creating a sense of scarcity',
                 'Giving a logical reason to buy',
                 'Showing that many people already use it'],
        answer:1,
        hint:'Focus on the word “Only” and what happens when the places are gone.',
        why:'“Only 50 … places remain” tells readers the offer is limited and may run out, so they should act fast: scarcity. The ad does use a bandwagon line elsewhere (“more than 3,000 clients”), but that is a different sentence. The number 50 is about places left, not a fact that proves the gym is good.' },

      { id:'t3l1s3-3', type:'read', tag:'ad-technique', level:'B2', passage:'', ad:T3_AD_BUDS,
        stem:'The headline “Shut out the city. Hear yourself think.” mainly appeals to the reader’s ______.',
        options:['trust in experts',
                 'fear of missing out',
                 'desire for peace and quiet',
                 'wish to be like everyone else'],
        answer:2,
        hint:'What does the headline promise to take away, and what is left?',
        why:'“Shut out the city” removes noise and “Hear yourself think” promises calm, so the appeal is to a desire for peace and quiet. The special price has a deadline, but that is in the price line, not the headline, so “fear of missing out” describes a different part of the ad.' },

      { id:'t3l1s3-4', type:'read', tag:'ad-technique', level:'B2', passage:'', ad:T3_AD_BUDS,
        stem:'Why does the advertisement include the figure “95%”?',
        options:['To back up a claim with a fact',
                 'To make the discount seem larger',
                 'To show that the product is popular',
                 'To prove that experts have tested the product'],
        answer:0,
        hint:'Is 95% a number of people, a price, or a measurement of what the product does?',
        why:'“Blocks up to 95% of background noise” measures what the earbuds do, giving a logical, factual reason to believe the noise-cancelling claim. It is not a number of users (bandwagon), it has nothing to do with the price, and no expert is named.' },

      { id:'t3l1s3-5', type:'read', tag:'ad-technique', level:'B2', passage:'', ad:T3_AD_TUTOR,
        stem:'The quotation from Ploy is an example of ______.',
        options:['a customer testimonial',
                 'an endorsement by an expert',
                 'an appeal to join the crowd',
                 'a warning that time is short'],
        answer:0,
        hint:'Ask who Ploy is — a qualified professional, or someone who took the course?',
        why:'Ploy is a named M6 student describing her own result, which makes the quotation a customer testimonial. The expert endorsement in this ad is Dr Anan, who designed the course. One student’s story is not a crowd, and nothing in the quotation mentions a deadline.' }
    ]
  }
  ],

  check:{ id:'t3l1ck', name:'Systems Check · Advertisements', items:[
    { id:'t3l1ck-1', type:'read', tag:'ad-purpose', level:'B2', passage:'', ad:T3_AD_DELIVERY,
      stem:'The main purpose of this advertisement is to ______.',
      options:['recruit motorbike riders',
               'introduce a new street-food restaurant',
               'get people to order food through an app',
               'explain how restaurants can join the app'],
      answer:2,
      hint:'What does the call to action tell the reader to download and use?',
      why:'The ad speaks to hungry customers (“Hungry after tutoring?”) and ends with “Download Pinto Go”, so it wants people to order food through the app. It mentions riders and restaurants only as part of the service; it neither recruits riders nor invites restaurants to join.' },

    { id:'t3l1ck-2', type:'read', tag:'ad-technique', level:'B2', passage:'', ad:T3_AD_DELIVERY,
      stem:'The sentence “Join 1.2 million hungry users who have already made the switch.” mainly uses which technique?',
      options:['A bandwagon appeal',
               'A sense of scarcity',
               'An expert endorsement',
               'A logical, factual argument'],
      answer:0,
      hint:'The number counts something. Is it people, or a feature of the service?',
      why:'The figure counts users and invites you to join them, so it is bandwagon. It is tempting to call any number “logical”, but a logical reason would be a fact about the service itself, such as delivery time. Nothing here is running out, and no expert is quoted.' },

    { id:'t3l1ck-3', type:'read', tag:'ad-detail', level:'B2', passage:'', ad:T3_AD_DELIVERY,
      stem:'Which customer would receive the ฿50 late-delivery voucher?',
      options:['Aom, whose 12:30 p.m. order from a café 3 km away arrives late',
               'Ben, whose 10:30 p.m. order arrives 20 minutes later than promised',
               'Nan, whose dinner from a restaurant 8 km away arrives an hour late',
               'Tee, who got a late-delivery voucher at lunch and whose dinner arrives late at 7 p.m.'],
      answer:0,
      hint:'Check each customer against three conditions: time, distance and how many per day.',
      why:'Aom ordered at 12:30 p.m. (inside 11 a.m.–9 p.m.) from 3 km away (inside 5 km), so she qualifies. Ben ordered after 9 p.m., Nan’s restaurant is more than 5 km away, and Tee has already received one voucher that day, while the rule allows only “one voucher per customer per day”.' },

    { id:'t3l1ck-4', type:'read', tag:'ad-purpose', level:'B2', passage:'', ad:T3_AD_CAMP,
      stem:'The Sea Breeze advertisement is aimed mainly at ______.',
      options:['parents of children aged 8–12',
               'teachers looking for summer jobs',
               'young people who love English and children',
               'tourists planning a beach holiday in Hua Hin'],
      answer:2,
      hint:'Look at the age limit in the fine print and the question in the first line.',
      why:'“Do you love English, games and the beach?” plus the 16–22 age limit and the portfolio certificate point to young people who enjoy English and working with children. The children aged 8–12 are the campers, not the readers, so their parents are a reversed audience, and the ad speaks to young English lovers with a portfolio to build, not to working teachers.' },

    { id:'t3l1ck-5', type:'read', tag:'ad-detail', level:'B2', passage:'', ad:T3_AD_CAMP,
      stem:'Which of the following is NOT mentioned in the advertisement?',
      options:['The camp dates',
               'The daily allowance',
               'Transport to the camp',
               'The application deadline'],
      answer:2,
      hint:'Tick each option you can point to in the bullets, the price line or the call to action.',
      why:'The dates (5–9 and 19–23 April), the allowance (฿400 a day) and the deadline (31 January) are all in the ad. It says accommodation and meals are free, but nothing about how Buddies get to Hua Hin, so transport is the leftover.' },

    { id:'t3l1ck-6', type:'read', tag:'ad-technique', level:'B2', passage:'', ad:T3_AD_CAMP,
      stem:'The sentence “Make memories that last a lifetime” is an example of ______.',
      options:['a logical reason',
               'an emotional appeal',
               'an expert endorsement',
               'a testimonial from a past Buddy'],
      answer:1,
      hint:'Does the sentence give a fact, quote a person, or speak to your feelings?',
      why:'The line sells a feeling — lasting, happy memories — rather than a fact, so it is an emotional appeal. It is not a logical reason (no measurable claim), no expert is named, and it is written by the advertiser, not quoted from a former Buddy, so it is not a testimonial.' }
  ]}
});

/* ================================================================ LEVEL 2 */
var T3_SRC = 'Adapted for TCAS70 practice';
T3.levels.push({ id:'t3l2', n:2, name:'Reviews', cefr:'B2',
  blurb:'Items 27–32: one review, six questions. Find the verdict in the last paragraph, match every claim to its proof, and read what the reviewer means but doesn’t say.',
  subs:[

  /* ------------------------------------------------------------ t3l2s1 */
  { id:'t3l2s1', name:'The reviewer’s overall verdict', cefr:'B2',
    theory:{
      key:'A reviewer’s overall attitude lives in the <strong>first and last paragraphs</strong>; the middle is evidence. Weigh the conclusion, then choose the option that matches its <strong>strength</strong> — not just its direction.',
      body:[
        '<p>Almost every review is built like a sandwich: an opening that hints at the verdict, a middle of evidence (usually one or two strengths, then one or two drawbacks), and a conclusion that states the verdict plainly. TCAS69’s food-delivery review is a perfect model: paragraph 1 says “it helps save time … but it also has some clear drawbacks”, and paragraph 5 ends “useful and convenient in many situations, but improvements … would make the service more reliable”. The key to item 27 was the reviewer “thinks the service works well overall but still clearly needs improvement”.</p>',
        '<p>So why do students miss it? Because the drawbacks paragraph is vivid (waiting an hour, missing drinks) and vivid details feel important. But the question asks for the <strong>overall</strong> attitude, and the reviewer has already weighed the evidence for you in the conclusion. Your job is not to add up good and bad points yourself; it is to report the reviewer’s own verdict.</p>',
        '<p>There are three verdict families, and each has signal language. <strong>Positive</strong>: highlight of our trip, I would book again without thinking twice, worth every baht (small complaints may still appear: “my only complaint is…”). <strong>Mixed / conditional</strong>: good but…, fair value for X but not for Y, if you… buy it; if you… look elsewhere, mixed feelings. <strong>Negative</strong>: a letdown, I won’t be going back, one great X cannot save…, look elsewhere. Then check <strong>strength</strong>: “mostly negative” and “completely unsatisfactory” are different answers. TCAS writes distractors that have the right direction but the wrong strength (“completely”, “should mostly be avoided”).</p>',
        '<p>Procedure. <strong>Step 1:</strong> read paragraph 1 and the last paragraph first. <strong>Step 2:</strong> find the verdict sentence and label it +, ±, or −. <strong>Step 3:</strong> circle any extreme words in the options (completely, always, never, everyone). <strong>Step 4:</strong> choose the option that matches both the direction and the strength of the conclusion.</p>'
      ],
      simple:[
        'Most reviews start with a small hint, give good and bad points in the middle, and say the final opinion at the end.',
        'For “overall attitude” questions, read the last paragraph first. Is it good, mixed or bad?',
        'Be careful with strong words like “completely” and “always”. The answer must be as strong as the review — not stronger.'
      ],
      thai:'ทัศนคติโดยรวมของผู้รีวิวอยู่ที่ย่อหน้าแรกและย่อหน้าสุดท้าย ส่วนตรงกลางเป็นเพียงหลักฐาน ให้อ่านบทสรุปก่อนแล้วตัดสินว่าเป็นบวก ผสม (ดีแต่มีเงื่อนไข) หรือลบ จากนั้นเช็ก “ความแรง” ของตัวเลือกด้วย กับดักของข้อสอบคือตัวเลือกที่ทิศทางถูกแต่แรงเกินไป เช่น completely unsatisfactory ทั้งที่ผู้เขียนแค่บอกว่ายังต้องปรับปรุง และอย่าให้รายละเอียดข้อเสียที่เล่าอย่างเห็นภาพในย่อหน้ากลางมาหลอกให้เลือกคำตอบเชิงลบเกินจริง',
      examples:[
        { s:'“Still, for ฿350 a night, <strong>I would book again without thinking twice</strong>.”', g:'Positive verdict, even after “My only complaint is the stairs”.' },
        { s:'“<strong>If you mainly listen to music, buy them. If you spend hours on video calls, look elsewhere.</strong>”', g:'Mixed / conditional: it depends on the buyer.' },
        { s:'“<strong>One great cake cannot save a café.</strong> … I won’t be going back.”', g:'Negative, despite one strong point.' },
        { s:'Option: “The reviewer feels the service is <strong>completely</strong> unsatisfactory.”', g:'Right direction? Check the strength. “Completely” is usually too strong.' }
      ],
      trap:'The vivid-middle trap: a long, dramatic complaint in paragraph 3 or 4 pulls you towards a negative option, even though the conclusion says “useful overall, but needs improvement”. Dodge: read the last paragraph before you answer, and reject any option stronger than the reviewer’s own words.',
      analogy:{ title:'The judges’ scorecard', text:'On a singing show, a judge may spend a minute on a shaky high note, but what counts is the score she holds up at the end. The middle of a review is the commentary; the conclusion is the scorecard. Answer with the scorecard.' },
      map:{ center:'Overall verdict', branches:[
        { label:'Where to look', leaves:['Paragraph 1 hint','Last paragraph verdict','Middle = evidence only'] },
        { label:'Positive signals', leaves:['Highlight of our trip','Would book again','Only complaint is…'] },
        { label:'Mixed signals', leaves:['Good, but…','Fair value for X','If you… / If you…'] },
        { label:'Negative signals', leaves:['A letdown','Won’t be going back','Look elsewhere'] },
        { label:'Strength check', leaves:['Completely? Always?','Mostly vs totally','Match the conclusion'] }
      ]},
      chant:{ title:'The Scorecard Chant', beat:'stomp-clap, stomp-clap (4/4), medium tempo', lines:[
        'Start at the top, then jump to the end,',
        'the verdict’s the part where the reviewer’s opinion is penned.',
        'The middle’s the evidence, loud as it seems,',
        'a long angry paragraph isn’t the theme.',
        'Plus, minus, or mixed — which one is it?',
        'Then check the strength, don’t overdo it:',
        '“completely”, “never”, “always” — beware,',
        'match the conclusion, and you’ll get there!'
      ]}
    },
    items:[
      { id:'t3l2s1-1', type:'read', tag:'rv-attitude', level:'B2', passage:T3_RV_CAFE, source:T3_SRC,
        stem:'Which best describes the reviewer’s overall attitude toward Brew Theory Café?',
        options:['She is disappointed despite liking one dessert.',
                 'She has mixed feelings but plans to return soon.',
                 'She is delighted with both the food and the service.',
                 'She is unsure because she visited only on a busy day.'],
        answer:0,
        hint:'Read the last paragraph first. Will she go back?',
        why:'Paragraph 3 says “Everything else was a letdown”, and the conclusion says “I won’t be going back”, so her attitude is disappointed, even though she praises the cheesecake. “Mixed feelings” is tempting because of the cake, but she clearly does not plan to return. The café was not busy: only four other tables were taken.' },

      { id:'t3l2s1-2', type:'read', tag:'rv-attitude', level:'B2', passage:T3_RV_SABAI, source:T3_SRC,
        stem:'The reviewer’s overall opinion of Sabai Stay Hostel is ______.',
        options:['mixed', 'neutral', 'critical', 'highly positive'],
        answer:3,
        hint:'Compare the size of the complaint with the words in the first and last sentences.',
        why:'She calls the stay “the highlight of our trip” and says she “would book again without thinking twice”, so her opinion is highly positive. The stairs are her “only complaint”, which is not enough to make the verdict mixed. She gives strong opinions, so she is not neutral.' },

      { id:'t3l2s1-3', type:'sort', tag:'rv-attitude', level:'B2',
        stem:'Sort these closing sentences from reviews by the verdict they give.',
        bins:[
          { key:'pos', label:'Positive', hint:'would buy or go again' },
          { key:'mix', label:'Mixed / it depends', hint:'good for some, not for others' },
          { key:'neg', label:'Negative', hint:'would not buy or go again' }
        ],
        items:[
          { text:'My only complaint is the price, and even that felt fair in the end.', bin:'pos' },
          { text:'I have already booked my next stay.', bin:'pos' },
          { text:'Great for short trips, but pack a power bank for anything longer.', bin:'mix' },
          { text:'If you train in the morning, join today; if not, be ready to queue.', bin:'mix' },
          { text:'Save your money — there are better apps that cost nothing.', bin:'neg' },
          { text:'Friendly staff cannot make up for cold food and a two-hour wait.', bin:'neg' }
        ],
        hint:'Ask one question: would this reviewer spend the money again, and for whom?',
        why:'“Only complaint … fair” and “already booked my next stay” are positive. Sentences that split buyers into groups (“great for short trips, but…”, “if you…; if not…”) are mixed or conditional. “Save your money” and “cannot make up for” reject the product overall, even when one good point is mentioned.' },

      { id:'t3l2s1-4', type:'read', tag:'rv-attitude', level:'B2', passage:T3_RV_BUDS, source:T3_SRC,
        stem:'According to the final paragraph, the reviewer ______.',
        options:['advises all students to avoid them',
                 'recommends them only for listening',
                 'thinks they are perfect for any buyer',
                 'thinks they are too expensive for what they offer'],
        answer:1,
        hint:'The last paragraph splits buyers into two groups. What does it say to each?',
        why:'“If you mainly listen to music, buy them. If you spend hours on video calls, look elsewhere” is a conditional verdict: they are worth buying for listening, not for calls. The reviewer calls them “fair value for listening”, so “too expensive” is wrong, and she recommends them to some buyers, so she does not advise everyone to avoid them.' },

      { id:'t3l2s1-5', type:'equiv', tag:'rv-attitude', level:'B2',
        given:'“<strong>One great cake cannot save a café.</strong>” (Brew Theory Café review)',
        stem:'Which sentence is closest in meaning to the sentence above?',
        options:['The café should stop selling cake.',
                 'A café needs more than one strength to succeed.',
                 'The cake was too good for such an ordinary café.',
                 'The café’s cake is the only reason it is still open.'],
        answer:1,
        hint:'“Save” here means “rescue from failure”. What cannot rescue the café?',
        why:'The reviewer means that a single excellent item cannot make up for slow service, bad drinks and broken Wi-Fi, so a café needs more than one strength. “The café’s cake is the only reason it is still open” sounds close, but the review never says the café stays open because of the cake. She does not suggest removing the cake either.' }
    ]
  },

  /* ------------------------------------------------------------ t3l2s2 */
  { id:'t3l2s2', name:'Strengths, drawbacks & the proof', cefr:'B2',
    theory:{
      key:'Every claim in a review is followed by its <strong>proof</strong>. Match the claim to the sentence that proves it — and read the frequency words (once, more than once, often) exactly.',
      body:[
        '<p>A good review makes a claim and then backs it up: “The trainers are another plus. During my free induction session, a trainer named Beam checked my technique…”. The claim is general; the proof is a specific event, number or example. TCAS tests this link in two directions: “What benefit does the reviewer mention about X?” (find the claim, then its paraphrase) and “Which detail best supports the view that…?” (find the proof for a given claim).</p>',
        '<p>Two first-principles rules make these items easy. <strong>Rule 1: support must be on topic.</strong> A true detail from the wrong paragraph does not support the claim. If the claim is “the trainers are helpful”, the number of treadmills is true but irrelevant: it proves the equipment claim, not the trainer claim. <strong>Rule 2: signposts organise the evidence.</strong> “The biggest strength is…”, “another plus”, “however”, “the main problem”, “also” tell you which paragraph holds which point, so you can jump straight to it.</p>',
        '<p>Read <strong>frequency and quantity words</strong> like a lawyer. TCAS69 asked “Which problem did the reviewer experience more than once?” — the review said “On two occasions, drinks I had paid for were not included”, while the long wait happened “once”. “Once”, “on two occasions”, “more than once”, “often”, “every time”, “sometimes” each make a different option true. The same goes for the TCAS69 app item: the key was the app “remembers customers’ previous orders”, while a distractor added “but does not save past orders” — half true, half reversed, so wrong.</p>',
        '<p>Procedure for “NOT included in the review” items: list the review’s <strong>ingredients</strong> — personal examples? an overall evaluation? suggestions? other users’ opinions? prices? Most reviews are one person’s experience, so “opinions of other users” is a classic leftover.</p>'
      ],
      simple:[
        'A review says something (a claim) and then gives an example (the proof).',
        'When a question asks which detail “supports” an idea, find the paragraph about that idea. A true sentence from another paragraph is not the answer.',
        'Read small words carefully: “once” is not “more than once”.'
      ],
      thai:'รีวิวที่ดีจะมี “ข้อกล่าวอ้าง” ตามด้วย “หลักฐาน” เช่น เทรนเนอร์ใจดี → เล่าว่าเทรนเนอร์เขียนแผนฝึกให้ฟรี ข้อสอบถามทั้งสองทาง คือถามว่าผู้เขียนชมอะไร และถามว่ารายละเอียดใดสนับสนุนความคิดเห็นหนึ่ง ๆ ได้ดีที่สุด หลักการคือหลักฐานต้องอยู่ในหัวข้อเดียวกัน ข้อความที่จริงแต่มาจากย่อหน้าอื่นไม่ใช่คำตอบ และต้องอ่านคำบอกความถี่ให้แม่น เช่น once กับ more than once ต่างกัน ข้อสอบ TCAS69 ออกตรงนี้เลย',
      examples:[
        { s:'Claim: “The trainers are another plus.” Proof: “a trainer named Beam … <strong>wrote me a simple four-week plan at no extra cost</strong>.”', g:'The proof is a specific event on the same topic.' },
        { s:'“I have had to queue for a squat rack <strong>more than once</strong>.” vs “The air-conditioning broke down <strong>one evening</strong>.”', g:'Only the queue happened more than once.' },
        { s:'“<strong>The equipment is the club’s biggest strength.</strong>”', g:'A signpost: “biggest strength” answers “main advantage” questions.' },
        { s:'Option: “It shows clear photos <strong>but does not save past orders</strong>.”', g:'Half true, half reversed = wrong.' }
      ],
      trap:'The true-but-irrelevant option: a correct fact from the review that proves a different point. Because you remember reading it, it feels safe. Dodge: ask “Does this detail prove THIS claim?” — not “Is this detail in the review?”.',
      analogy:{ title:'The Grab receipt', text:'If you tell your parents the Grab ride was expensive, the receipt proves it — not a photo of the car. Every claim needs its own receipt. In “best supports” questions, find the receipt that matches the claim, not just any receipt from the same trip.' },
      map:{ center:'Claims & proof', branches:[
        { label:'Signposts', leaves:['Biggest strength','Another plus','However / main problem'] },
        { label:'Good proof', leaves:['Specific event','Number or example','Same topic as claim'] },
        { label:'Frequency words', leaves:['Once vs more than once','Often / sometimes','On two occasions'] },
        { label:'Review ingredients', leaves:['Personal examples','Overall evaluation','Suggestions','Other users? usually not'] }
      ]},
      moves:[
        { move:'Hold up one finger like making a point', says:'The claim — “the trainers are great.”' },
        { move:'Slap your palm flat on the desk', says:'The proof — a real event, a number, an example.' },
        { move:'Link your two index fingers together', says:'Same topic? Claim and proof must connect.' },
        { move:'Count on your fingers: one… two…', says:'Once or more than once? Count the times.' }
      ]
    },
    items:[
      { id:'t3l2s2-1', type:'read', tag:'rv-evidence', level:'B2', passage:T3_RV_GYM, source:T3_SRC,
        stem:'According to the reviewer, the club’s biggest strength is its ______.',
        options:['location', 'trainers', 'equipment', 'opening hours'],
        answer:2,
        hint:'Look for the signpost phrase that ranks the strengths.',
        why:'Paragraph 2 begins “The equipment is the club’s biggest strength.” The trainers are praised too, but they are called “another plus”, which ranks them after the equipment. The review says nothing about the location or opening hours being a strength.' },

      { id:'t3l2s2-2', type:'read', tag:'rv-evidence', level:'B2', passage:T3_RV_GYM, source:T3_SRC,
        stem:'Which detail best supports the reviewer’s view that the trainers are helpful?',
        options:['Everything she used was clean and working.',
                 'A trainer wrote her a four-week plan for free.',
                 'The club has twelve treadmills and two squat racks.',
                 'The app lets members book classes up to three days ahead.'],
        answer:1,
        hint:'Go to the paragraph about the trainers. Which option describes a person helping her?',
        why:'Paragraph 3 proves the trainer claim with a specific event: Beam checked her technique and “wrote me a simple four-week plan at no extra cost”. The other options are true, but they support the claims about equipment and the app in paragraph 2, not the claim about the trainers.' },

      { id:'t3l2s2-3', type:'read', tag:'rv-evidence', level:'B2', passage:T3_RV_GYM, source:T3_SRC,
        stem:'Which problem does the reviewer say she has experienced more than once?',
        options:['Waiting to use a squat rack',
                 'The air-conditioning breaking down',
                 'Trainers being too busy to help her',
                 'The app failing to book her classes'],
        answer:0,
        hint:'Look for a frequency phrase in paragraph 4.',
        why:'She says “I have had to queue for a squat rack more than once.” The air-conditioning broke down “one evening in August”, which is only once. The review praises the trainers and the booking app, so the other two options are not problems at all.' },

      { id:'t3l2s2-4', type:'sort', tag:'rv-evidence', level:'B2', passage:T3_RV_GYM, source:T3_SRC,
        stem:'Sort the details from the Ember Fitness review into strengths and drawbacks.',
        bins:[
          { key:'plus', label:'Strength', hint:'the reviewer praises it' },
          { key:'minus', label:'Drawback', hint:'the reviewer complains about it' }
        ],
        items:[
          { text:'Clean machines in working order', bin:'plus' },
          { text:'Group classes can be booked three days ahead', bin:'plus' },
          { text:'A free personal plan from a trainer', bin:'plus' },
          { text:'Queues for squat racks in the evening', bin:'minus' },
          { text:'Crowded changing rooms after school hours', bin:'minus' },
          { text:'Air-conditioning failure on a hot day', bin:'minus' }
        ],
        hint:'Use the signposts: “biggest strength”, “another plus”, “the main problem”, “also”.',
        why:'Paragraphs 2 and 3 are signposted as strengths (“biggest strength”, “another plus”): clean equipment, easy class booking and Beam’s free plan. Paragraph 4 opens with “Crowding is the main problem” and adds the air-conditioning with “also”, so those details are drawbacks.' },

      { id:'t3l2s2-5', type:'read', tag:'rv-evidence', level:'B2', passage:T3_RV_GYM, source:T3_SRC,
        stem:'Which type of information is NOT included in the review?',
        options:['Other members’ opinions',
                 'The price of the student plan',
                 'An example of a trainer’s help',
                 'Advice about the best times to train'],
        answer:0,
        hint:'List the review’s ingredients: price, examples, advice… Whose experience is it?',
        why:'The whole review describes the writer’s own experience; no other member is quoted or described. The price appears in paragraph 1 (฿890 a month), the trainer example is Beam’s plan, and the advice about training in the morning or at weekends comes in paragraph 5.' }
    ]
  },

  /* ------------------------------------------------------------ t3l2s3 */
  { id:'t3l2s3', name:'Reading between the lines', cefr:'B2+',
    theory:{
      key:'An inference is a <strong>small, safe step</strong> from what the reviewer wrote — not a leap. If you can’t point to two clues that lead there, it isn’t the answer.',
      body:[
        '<p>Reviewers often let the facts speak instead of stating a judgement. “The course promised personal feedback within 48 hours. In practice, my essays came back after five or six days” never says “the course broke its promise”, but that is exactly what it means. Inference questions (“It can be inferred that…”, “The reviewer would most likely…”, “The phrase X suggests…”) test whether you can take that one small step.</p>',
        '<p>Three kinds of clue do most of the work. <strong>Contrast between promise and reality</strong> — quotation marks around the company’s words (“personal feedback from expert tutors”) usually signal irony. <strong>Hedges and understatement</strong> — “just about”, “perhaps”, “a little”, “not exactly” soften a negative verdict. <strong>Actions</strong> — what the reviewer <em>did</em> (said no to the advanced course, would book the transfer next time) reveals what she thinks.</p>',
        '<p>Then test every option against two limits. <strong>Too far:</strong> the option goes beyond the evidence (“She will never study online again”). <strong>Contradicted:</strong> the option clashes with a stated fact (“She failed to improve her score” when she reached 6.5 after missing it). The right inference sits in between: it is not written word for word, but every word of it can be defended with a line from the text.</p>',
        '<p>Procedure. <strong>Step 1:</strong> find the lines the question points to. <strong>Step 2:</strong> ask “What must be true, given this?” — not “What might be true?”. <strong>Step 3:</strong> for each option, find two supporting clues or cross it out. <strong>Step 4:</strong> distrust absolute words (never, always, all, definitely).</p>'
      ],
      simple:[
        'Sometimes the reviewer does not say her opinion directly. You must understand it from the facts she gives.',
        'The answer is a small step from the text, not a big jump. You should be able to point to the words that prove it.',
        'Watch for quotation marks and small words like “just about” and “perhaps”. They often show what the writer really feels.'
      ],
      thai:'การอนุมาน (inference) คือการก้าวเล็ก ๆ จากสิ่งที่ผู้เขียนเขียนไว้ ไม่ใช่การเดาไกล ต้องชี้หลักฐานในบทความได้ เบาะแสสำคัญในรีวิวมีสามแบบ คือ คำสัญญาของบริษัทที่ผู้เขียนใส่เครื่องหมายคำพูดแล้วเทียบกับความจริง คำพูดแบบลดน้ำหนัก เช่น just about, perhaps และการกระทำของผู้เขียน เช่น ปฏิเสธคอร์สถัดไป กับดักคือตัวเลือกที่ไปไกลเกินหลักฐาน หรือขัดกับข้อเท็จจริงในบทความ และระวังคำเด็ดขาดอย่าง never, always, definitely',
      examples:[
        { s:'The course “did its job — <strong>just about</strong>.”', g:'It only barely succeeded: understatement hides a weak verdict.' },
        { s:'“personal feedback <strong>within 48 hours</strong>” … came back after <strong>five or six days</strong>', g:'Promise vs reality: the course did not keep its promise.' },
        { s:'“When FluentUp offered me its advanced course …, <strong>I politely said no</strong>.”', g:'Her action shows she did not think it was worth paying for again.' },
        { s:'“Guests without a high vehicle <strong>should book the lodge’s transfer</strong>.”', g:'Inference: the road is too rough for ordinary cars — the family learned this the hard way.' }
      ],
      trap:'The “too far” option: it starts from a real clue and then jumps (“She said no to the advanced course” → “She will never study online again”). It feels clever. Dodge: an inference must be something that MUST be true, and absolute words usually push an option too far.',
      analogy:{ title:'Reading a friend’s LINE reply', text:'You ask your friend how the new café was, and she replies “The cake was nice 🙂.” Only the cake? Just “nice”? You instantly know the rest was bad. Reviews work the same way: what is praised, what is left out and the small softening words tell you what the writer really thinks.' },
      map:{ center:'Reading between the lines', branches:[
        { label:'Clues', leaves:['Promise vs reality','Quotation marks = irony','Hedges: just about, perhaps','What the reviewer did'] },
        { label:'Good inference', leaves:['Small, safe step','Two clues support it','Must be true'] },
        { label:'Bad options', leaves:['Too far: never, always','Contradicts a fact','Not connected to text'] }
      ]},
      story:{ title:'Pun’s Five-Star Disaster', panels:[
        { who:'Pun', text:'This gaming chair review says “Comfortable for about twenty minutes. Assembly took only one afternoon and three extra screws of my own.” Five stars! Ordering now.' },
        { who:'Fah', text:'Pun, read it again. Twenty minutes? “Only” one afternoon? Screws <em>of his own</em>?' },
        { who:'Nong Bot', text:'Literal analysis complete: the chair is comfortable. Assembly is possible. Screws exist. Verdict: excellent!' },
        { who:'T.Chris', text:'Nong Bot, what does a reviewer mean when he praises twenty minutes of comfort — for a chair you sit in for five hours?' },
        { who:'Mint', text:'He’s being sarcastic. The chair hurts after twenty minutes and it arrived with missing screws.' },
        { who:'Pun', text:'…Cancelling the order. I’m going back to sitting on my beanbag. It has never lied to me.' }
      ], moral:'Inference = a small step from exact words. “Only”, “about” and odd details are clues to what the reviewer really means.' }
    },
    items:[
      { id:'t3l2s3-1', type:'read', tag:'rv-infer', level:'B2+', passage:T3_RV_COURSE, source:T3_SRC,
        stem:'The phrase “the course did its job — just about” in paragraph 5 suggests that the course ______.',
        options:['was only barely successful',
                 'failed to help her in any way',
                 'went beyond what she had hoped',
                 'helped with writing more than reading'],
        answer:0,
        hint:'What does “just about” add to “did its job”? Think of “I just about caught the bus.”',
        why:'“Just about” means “only barely”: she did reach Band 6.5, but only just. “Failed to help her in any way” ignores the fact that she reached her target, and nothing suggests the course went beyond her hopes. Her reading improved most, while the writing feedback was weak, so “helped with writing more than reading” reverses the evidence.' },

      { id:'t3l2s3-2', type:'read', tag:'rv-infer', level:'B2+', passage:T3_RV_COURSE, source:T3_SRC,
        stem:'Why does the reviewer mention that each speaking session lasted 45 minutes?',
        options:['To complain that the sessions were too long',
                 'To explain why she spoke for so little time',
                 'To show that the sessions were well organised',
                 'To prove that 20 students is a very small group'],
        answer:1,
        hint:'Put the 45 minutes next to the 20 students and her two minutes.',
        why:'Forty-five minutes shared among 20 students leaves only about two minutes each, which is exactly what she experienced, so the detail explains why she spoke so little. She is not complaining that the sessions were long; the problem was too many students. “Sounds small until you realise” shows she thinks 20 is NOT small for speaking practice.' },

      { id:'t3l2s3-3', type:'read', tag:'rv-infer', level:'B2+', passage:T3_RV_COURSE, source:T3_SRC,
        stem:'What can be inferred from paragraph 5?',
        options:['She failed to improve her IELTS score.',
                 'She will take the advanced course next year.',
                 'She thought the “loyal student price” was a bargain.',
                 'She did not think FluentUp was worth paying for again.'],
        answer:3,
        hint:'Look at what she did when FluentUp made its offer, and at her score.',
        why:'She “politely said no” to the advanced course, even at a special price, which shows she did not think another FluentUp course was worth the money. She did improve: she missed Band 6.5 the first time and reached 6.5 the second. Refusing the offer is the opposite of seeing it as a bargain or planning to take it.' },

      { id:'t3l2s3-4', type:'read', tag:'rv-infer', level:'B2+', passage:T3_RV_LODGE, source:T3_SRC,
        stem:'It can be inferred that the lodge’s website ______.',
        options:['shows no photos of the cabins',
                 'warns guests about the unpaved road',
                 'makes the journey sound easier than it is',
                 'offers the transfer service free of charge'],
        answer:2,
        hint:'Paragraph 4 compares the real journey with what the website suggests.',
        why:'“Getting there is also harder than the lodge’s website suggests” means the website makes the trip sound easier than it really is. If the website clearly warned about the road, the family would not have been surprised. The family booked because of photos of the cabins, and the transfer costs ฿500 each way.' },

      { id:'t3l2s3-5', type:'judge', tag:'rv-infer', level:'B2+', passage:T3_RV_LODGE, source:T3_SRC,
        given:'The reviewer’s family drove to Misty Hill Eco-Lodge in their own car.',
        stem:'Based on the review, is this statement True, False or Not given?',
        answer:0,
        hint:'Find two clues in paragraphs 4 and 5 about how the family travelled.',
        why:'True. The review says “the bottom of our small family car scraped the ground twice”, and in paragraph 5 she says that next time she would book the transfer, which shows they did not use it this time. The statement is not written word for word, but two clues make it certain.' }
    ]
  }
  ],

  check:{ id:'t3l2ck', name:'Systems Check · Reviews', items:[
    { id:'t3l2ck-1', type:'read', tag:'rv-attitude', level:'B2+', passage:T3_RV_LODGE, source:T3_SRC,
      stem:'Which statement best describes the reviewer’s overall attitude toward Misty Hill Eco-Lodge?',
      options:['She regrets the trip and warns others to stay away.',
               'She enjoyed everything except the cost of the transfer.',
               'She found the lodge too noisy and crowded to feel peaceful.',
               'She loved the setting but was let down by the food and access.'],
      answer:3,
      hint:'Read paragraphs 1 and 5, then check each option’s details against the middle.',
      why:'She left “with mixed feelings”: the setting is “breathtaking”, but the food was limited and the road was difficult. She would “perhaps” go back, so she does not warn others away. She never complains about the transfer price, and she praises “the silence”, so the lodge was not noisy.' },

    { id:'t3l2ck-2', type:'read', tag:'rv-evidence', level:'B2+', passage:T3_RV_LODGE, source:T3_SRC,
      stem:'Which detail best supports the idea that the lodge cares about the environment?',
      options:['It composts all its food waste on site.',
               'Its cabins look out over a misty valley.',
               'Its dinner menu offers only five dishes.',
               'Its cabins are built of wood and surrounded by forest.'],
      answer:0,
      hint:'Which option describes something the lodge does, not just how it looks?',
      why:'Composting food waste on site is an environmental practice, and the staff “proudly explained” it. Wooden cabins in a forest and a valley view describe the lodge’s appearance and setting, not its care for the environment. The short menu is a drawback, not an environmental policy.' },

    { id:'t3l2ck-3', type:'read', tag:'rv-evidence', level:'B2+', passage:T3_RV_COURSE, source:T3_SRC,
      stem:'According to the review, what was wrong with the writing feedback?',
      options:['It was written by AI instead of tutors.',
               'It arrived late and was too vague to help.',
               'It was detailed but too difficult to follow.',
               'It came quickly but focused only on grammar.'],
      answer:1,
      hint:'Paragraph 3 gives two problems: one about time, one about content.',
      why:'The feedback came “after five or six days” instead of 48 hours, and comments such as “Good effort!” and “Check grammar.” were too general to help. Nothing suggests AI wrote the comments. “Came quickly” reverses the timing, and “detailed” reverses the vague content.' },

    { id:'t3l2ck-4', type:'read', tag:'rv-attitude', level:'B2+', passage:T3_RV_GYM, source:T3_SRC,
      stem:'Which statement best describes the reviewer’s overall view of Ember Fitness Club?',
      options:['It is as calm as its advertisements promise.',
               'It is too crowded to be worth joining at all.',
               'It has poor equipment but excellent trainers.',
               'It is good value if you can avoid the busy hours.'],
      answer:3,
      hint:'The last paragraph gives a conditional verdict. What is the condition?',
      why:'The conclusion says “If you can train in the morning or at weekends, Ember is excellent value. If you can only come after school, be ready to wait.” Paragraph 1 says it is “not the calm, spacious place its advertisements promise”, and the equipment is its “biggest strength”. “Not worth joining at all” is far stronger than the reviewer’s words.' },

    { id:'t3l2ck-5', type:'read', tag:'rv-infer', level:'B2+', passage:T3_RV_BUDS, source:T3_SRC,
      stem:'The reviewer would most likely recommend the Loop Buds 2 to ______.',
      options:['a teacher who gives online classes all day',
               'a gamer who chats with teammates for hours',
               'a student who listens to podcasts on the bus',
               'someone who wants the cheapest earbuds possible'],
      answer:2,
      hint:'Match each person to the reviewer’s “If you…, buy them / look elsewhere” advice.',
      why:'The reviewer praises the sound, says podcasts sound crisp and says the noise cancelling blocks out bus engines, so a podcast listener on the bus fits her advice to buy them. The teacher and the gamer both need a good microphone, which is the product’s main weakness. The review says nothing about the buds being the cheapest option.' },

    { id:'t3l2ck-6', type:'read', tag:'rv-infer', level:'C1', passage:T3_RV_COURSE, source:T3_SRC,
      stem:'The reviewer puts “personal feedback from expert tutors within 48 hours” in quotation marks mainly to ______.',
      options:['praise the tutors’ expertise',
               'quote a satisfied former student',
               'explain how the course was organised',
               'show the gap between the promise and reality'],
      answer:3,
      hint:'Whose words are in the quotation marks, and what happened “in practice”?',
      why:'The quotation marks show these are the course’s own words, and the next sentence begins “In practice…”, describing late, vague feedback. So she quotes the promise to show how far reality fell short. The words come from the company, not a student, and the reviewer is not praising the tutors.' }
  ]}
});

/* ================================================================ LEVEL 3 */
T3.levels.push({ id:'t3l3', n:3, name:'Two texts & fine print', cefr:'B2+',
  blurb:'The top band of Items 21–32: compare Ad A with Ad B, apply the small print to real people, and know the consumer words that examiners love.',
  subs:[

  /* ------------------------------------------------------------ t3l3s1 */
  { id:'t3l3s1', name:'Comparing Ad A and Ad B', cefr:'B2+',
    theory:{
      key:'Before you read the questions, build a <strong>mini table</strong>: the same four rows (offer, price, conditions, contact) for Ad A and Ad B. Every comparison question is then just a row lookup.',
      body:[
        '<p>When TCAS prints two ads side by side (TCAS69 had two, and other years compare a gym with a yoga studio or a hotel with a hostel), the questions stop being about one ad and start being about the <strong>relationship</strong>: “Which is true of BOTH ads?”, “Unlike Ad A, Ad B…”, “Which ad would suit a person who…?”. Reading each ad separately and then trying to remember both is slow and leaky. Comparison needs a shared frame.</p>',
        '<p>Use the same four stops you already know — <strong>offer, price, conditions, contact</strong> — as rows, and write one or two words for each ad. Ninety seconds of note-making saves three minutes of re-reading. Then learn the three question shapes. <strong>BOTH:</strong> the feature must appear in A <em>and</em> B, in any words (“4 full timed mock exams” and “10 full mock exams” = both include mock exams). <strong>ONLY / UNLIKE:</strong> the feature must be in one ad and absent (or reversed) in the other. <strong>WHO SHOULD CHOOSE:</strong> turn the person’s situation into one need (time, place, money, commitment), then find the row that answers it.</p>',
        '<p>For “who should choose” items, the option has two halves: the ad <em>and</em> the reason. Both must be right. TCAS-style distractors often pick the right ad with a reason that is false (“Ad B, because its AI coach marks speaking”), or the wrong ad with a reason that is true (“Ad A, because it offers a free make-up class” — true, but it doesn’t solve a weekend-travel problem). Check the reason against the ad and against the person’s need.</p>'
      ],
      simple:[
        'When there are two ads, make a small table: what they offer, the price, the rules, and how to contact them.',
        '“Both” means it is in Ad A and in Ad B. “Unlike” means it is in one ad only.',
        'When a question describes a person, find what that person needs most. Then choose the ad AND the reason that match that need.'
      ],
      thai:'เมื่อมีโฆษณาสองชิ้น (Ad A / Ad B) ให้ทำตารางย่อสี่แถวในหัวก่อน ได้แก่ ข้อเสนอ ราคา เงื่อนไข และช่องทางติดต่อ แล้วทุกคำถามจะกลายเป็นการเทียบแถว คำถาม BOTH ต้องมีในทั้งสองชิ้น (แม้ใช้คำต่างกัน) คำถาม UNLIKE/ONLY ต้องมีเพียงชิ้นเดียว ส่วนคำถามว่าใครควรเลือกอะไร ต้องตรวจทั้ง “ชิ้นโฆษณา” และ “เหตุผล” กับดักคือเลือกโฆษณาถูกแต่เหตุผลผิด หรือเหตุผลจริงแต่ไม่ตอบโจทย์ความต้องการของคนในคำถาม',
      examples:[
        { s:'A: “4 full timed mock exams” · B: “10 full mock exams”', g:'Different numbers, same feature: BOTH include mock exams.' },
        { s:'A: “Printed 300-page course book included” · B: (nothing)', g:'Only Ad A: a printed book.' },
        { s:'A: “12-month contract” · B: “<strong>No contract</strong> — pay by class pack”', g:'A reversed feature: a classic “unlike” item.' },
        { s:'Person: studies only late at night → need = <strong>time</strong> → B: “Access 24/7”', g:'Turn the person into one need, then find the row.' }
      ],
      trap:'The right-ad-wrong-reason option. Students see “Ad B” (the answer they expected) and stop reading. Dodge: an option in a “which ad and why” item is correct only if BOTH halves are correct and the reason answers the person’s need.',
      analogy:{ title:'Choosing a phone plan with your parents', text:'Nobody compares two phone plans by reading one brochure and trying to remember it while reading the other. You put them side by side: data, price, contract length, extras. Two ads in TCAS are two phone plans — line them up row by row.' },
      map:{ center:'Ad A vs Ad B', branches:[
        { label:'Four rows', leaves:['Offer','Price','Conditions','Contact'] },
        { label:'Question shapes', leaves:['BOTH: in A and B','ONLY / UNLIKE','Who should choose?'] },
        { label:'Who-should-choose', leaves:['Find the person’s need','Right ad AND reason','Reason fits the need'] },
        { label:'Traps', leaves:['Same feature, new words','Right ad, wrong reason','True reason, wrong need'] }
      ]},
      moves:[
        { move:'Hold your left hand up, then your right', says:'Ad A here, Ad B there — side by side.' },
        { move:'Draw four lines in the air, top to bottom', says:'Offer, price, conditions, contact — four rows.' },
        { move:'Clap both hands together', says:'BOTH — it must be in A and in B.' },
        { move:'Push one hand forward, pull the other back', says:'UNLIKE — only one ad has it.' },
        { move:'Point at a friend, then at one hand', says:'Who should choose? Her need decides the ad.' }
      ]
    },
    items:[
      { id:'t3l3s1-1', type:'read', tag:'ad-compare', level:'B2+', passage:'', ad:T3_AD_PREP,
        stem:'Which of the following is true of BOTH advertisements?',
        options:['Both include full mock exams.',
                 'Both offer a free trial period.',
                 'Both are taught in a classroom.',
                 'Both offer a discount for paying early.'],
        answer:0,
        hint:'Check each option in Ad A, then in Ad B. It must appear in both.',
        why:'Ad A offers “4 full timed mock exams” and Ad B “10 full mock exams”, so both include them. Only Ad B has a free trial, only Ad A is taught in a classroom, and only Ad A has an early-bird price.' },

      { id:'t3l3s1-2', type:'read', tag:'ad-compare', level:'B2+', passage:'', ad:T3_AD_PREP,
        stem:'Pim can only study late at night, and she spends most weekends with her grandparents in Rayong. Which course suits her better, and why?',
        options:['Ad A, because classes are small.',
                 'Ad B, because she can study at any hour.',
                 'Ad A, because it offers a free make-up class.',
                 'Ad B, because its AI coach marks her speaking.'],
        answer:1,
        hint:'What does Pim need most? Find the row in each ad that answers that need.',
        why:'Pim needs a course she can take at night and away from Bangkok, and Ad B offers “Access 24/7 on phone, tablet or laptop”. The AI coach marks writing, not speaking, so that reason is false. Ad A’s make-up class is still a Saturday class at Siam Square, which does not solve her weekend problem.' },

      { id:'t3l3s1-3', type:'read', tag:'ad-compare', level:'B2+', passage:'', ad:T3_AD_PREP,
        stem:'Which feature is offered in Ad A but NOT in Ad B?',
        options:['Mock exams',
                 'Feedback on writing',
                 'A free trial period',
                 'A printed course book'],
        answer:3,
        hint:'Look for a feature that appears in Ad A and has no match anywhere in Ad B.',
        why:'Only Ad A includes a “printed 300-page course book”. Both ads offer mock exams. Feedback on writing and a free trial appear only in Ad B, so they are the reverse of what the question asks.' },

      { id:'t3l3s1-4', type:'sort', tag:'ad-compare', level:'B2+', ad:T3_AD_FIT,
        stem:'Line up the two ads. Sort each feature into the right column.',
        bins:[
          { key:'a', label:'Ad A only (Ember)', hint:'in Ember’s ad only' },
          { key:'b', label:'Ad B only (Lotus Flow)', hint:'in Lotus Flow’s ad only' },
          { key:'both', label:'Both ads', hint:'in both, maybe in different words' }
        ],
        items:[
          { text:'A 12-month contract', bin:'a' },
          { text:'A free-weights zone', bin:'a' },
          { text:'An age limit for the student price', bin:'a' },
          { text:'No long-term contract', bin:'b' },
          { text:'Classes for beginners', bin:'b' },
          { text:'Air-conditioned studios', bin:'both' },
          { text:'A penalty if you cancel (a contract or a class booking)', bin:'both' }
        ],
        hint:'Read each feature against Ad A, then Ad B. Watch for the same idea in different words.',
        why:'Ember alone has the 12-month contract, free weights and the 16–24 student rule; Lotus Flow alone has no contract and welcomes beginners. Both mention air-conditioned studios. Both also charge for cancelling: Ember has a ฿1,500 early cancellation fee, and Lotus Flow deducts a class if you cancel less than 12 hours before.' },

      { id:'t3l3s1-5', type:'read', tag:'ad-compare', level:'B2+', passage:'', ad:T3_AD_FIT,
        stem:'Mint, aged 18, wants to start exercising, but she may move to Chiang Mai for a scholarship in two months. Which choice suits her better, and why?',
        options:['Ember, because its joining fee is waived',
                 'Lotus Flow, because mats and towels are free',
                 'Ember, because the induction session is free',
                 'Lotus Flow, because it does not tie her to a long contract'],
        answer:3,
        hint:'What is Mint’s biggest problem? Which row of each ad deals with it?',
        why:'Mint may leave in two months, so she needs to avoid a long commitment. Lotus Flow has “No contract — pay by class pack”, while Ember requires a 12-month contract with a ฿1,500 early cancellation fee. Free mats are true but do not solve her problem, and Ember’s free extras do not remove the contract.' }
    ]
  },

  /* ------------------------------------------------------------ t3l3s2 */
  { id:'t3l3s2', name:'Fine print: eligibility, validity & warranty', cefr:'B2+',
    theory:{
      key:'The fine print is a list of <strong>gates</strong>. To get the offer, a person must pass <strong>every</strong> gate — who, when, how many, how, with what — and failing one gate is enough to lose it.',
      body:[
        '<p>The big letters of an ad make the promise; the small letters limit it. Advertisers write fine print because they must: it protects them from customers who say “but the ad said…”. That is exactly why examiners love it. TCAS69 asked how students could get a café discount, and the answer lived in one small phrase: <em>with a valid student ID</em>. A student who forgot her card, or whose card had expired, gets nothing.</p>',
        '<p>Learn the five common gates. <strong>WHO</strong> (eligibility): age, students only, new customers only, “must hold a valid driving licence”. <strong>WHEN</strong> (validity): “offer ends 31 October”, “between 11 and 16 April”, “while stocks last”. <strong>HOW MANY</strong>: “one per customer”, “minimum stay of 3 nights”. <strong>HOW</strong>: “in stores only”, “direct bookings only”, “not valid with other promotions / cannot be combined with trade-in credit”. <strong>WITH WHAT</strong>: “valid ID required”, “keep your receipt”. Then there are the money words: a <strong>deposit</strong> is paid first and (if refundable) returned later; <strong>non-refundable</strong> money is never returned; a subscription that <strong>renews automatically</strong> keeps charging until cancelled.</p>',
        '<p>A <strong>warranty</strong> is also a gate list. “Covers manufacturing faults only” means problems caused by the factory. It does not cover what the owner does — dropping, swimming, losing. Scenario items (“Which customer can get…?”, “Which problem would the warranty cover?”) are just gate checks: take each person through every gate, and the one who passes all of them is the key.</p>'
      ],
      simple:[
        'Small print at the bottom of an ad gives the rules. To get the offer, you must follow ALL the rules.',
        'Look for: who can get it, when it ends, how many you can get, where you must buy it, and what you must show.',
        'A warranty repairs problems made by the factory, not problems you caused (like dropping it).'
      ],
      thai:'fine print คือ “ด่าน” หลายด่าน ต้องผ่านครบทุกด่านจึงจะได้สิทธิ์ ได้แก่ ใครมีสิทธิ์ (eligibility เช่น อายุ นักเรียน) ใช้ได้เมื่อไร (validity) กี่ชิ้นต่อคน ซื้อช่องทางไหน (in stores only, direct bookings only, not valid with other promotions) และต้องแสดงอะไร (valid ID, receipt) ส่วน warranty คุ้มครองเฉพาะความบกพร่องจากโรงงาน ไม่รวมความเสียหายที่ผู้ใช้ทำเอง ข้อสอบมักให้หลายคนมาเทียบ ให้พาทีละคนผ่านทุกด่าน คนที่ผ่านครบคือคำตอบ',
      examples:[
        { s:'“A <strong>valid</strong> student ID is required at purchase.”', g:'No card, or an expired card = no student price.' },
        { s:'“<strong>Cannot be combined with</strong> other discounts or trade-in credit.”', g:'One deal at a time.' },
        { s:'“A <strong>refundable deposit</strong> of ฿500 is charged at check-in.”', g:'You pay it now; you get it back later.' },
        { s:'“The warranty covers <strong>manufacturing faults only</strong>.”', g:'Factory problems yes; drops, water and loss no.' },
        { s:'“Free cancellation … applies to <strong>direct bookings only</strong>.”', g:'Booked through a travel app? The gate is closed.' }
      ],
      trap:'The “passes most gates” option: a customer who meets three conditions out of four (right date, valid ID, one pair — but using a trade-in too). It looks nearly perfect, so students choose it. Dodge: a single failed gate means no offer. Check every condition for every person.',
      analogy:{ title:'The BTS ticket gates', text:'You can have money on your Rabbit card and be in a hurry, but if the card has expired, the gate stays shut. Fine print works like a line of ticket gates: an offer is only yours if you pass through every single one.' },
      map:{ center:'Fine print gates', branches:[
        { label:'WHO', leaves:['Age limits','Students / new customers','Licence or ID'] },
        { label:'WHEN', leaves:['Offer ends…','Date range','While stocks last'] },
        { label:'HOW / HOW MANY', leaves:['One per customer','In stores / direct only','Not with other promotions'] },
        { label:'Money words', leaves:['Deposit','Non-refundable','Renews automatically'] },
        { label:'Warranty', leaves:['Manufacturing faults only','Not drops or water','Keep your receipt'] }
      ]},
      story:{ title:'Krit and the Songkran Deal', panels:[
        { who:'Krit', text:'Riverside Loft: Songkran package, ฿1,650 for 3 nights. I booked 10 to 13 April on TripPal. Genius!' },
        { who:'Mint', text:'Krit… the fine print says every night must fall between 11 and 16 April. Your first night is the 10th.' },
        { who:'Krit', text:'No problem, I’ll just cancel for free and book again.' },
        { who:'Fah', text:'“Free cancellation up to 7 days before arrival applies to direct bookings only.” You booked on TripPal.' },
        { who:'Nong Bot', text:'Gate report: WHEN — failed. HOW — failed. Good news: you are over 18! One out of three gates passed.' },
        { who:'T.Chris', text:'That’s the whole lesson, Krit. An offer isn’t yours until you’ve passed every gate. Next time, read the small print before you tap “Book”.' }
      ], moral:'Fine print = a row of gates. Fail one, lose the offer — so check every gate for every person.' }
    },
    items:[
      { id:'t3l3s2-1', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:T3_AD_LOOP3,
        stem:'Who can buy Loop Buds 3 at the student price?',
        options:['Nan, who shows a valid student ID on 25 October',
                 'Bow, who left her student ID at home but wears her uniform',
                 'Krit, who shows his ID and asks for two pairs at the student price',
                 'Fah, who shows her ID and wants to use her trade-in credit as well as the student price'],
        answer:0,
        hint:'Take each person through every gate: ID, date, number of pairs, other deals.',
        why:'Nan passes every gate: a valid student ID, a date before 31 October and one pair. Bow has no ID with her, and a uniform is not a “valid student ID”. Krit asks for two pairs at the student price, but the rule is one pair per student. Fah wants to add her trade-in credit, which “cannot be combined” with the student price.' },

      { id:'t3l3s2-2', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:T3_AD_LOOP3,
        stem:'Which problem would the 1-year warranty most likely cover?',
        options:['A pair left on the BTS and never found',
                 'A bud that stopped working after a swim',
                 'A case that cracked when it fell off a desk',
                 'A bud that stops charging because of a factory fault'],
        answer:3,
        hint:'The warranty names one kind of problem it covers and three it does not.',
        why:'The warranty “covers manufacturing faults only”, so a factory fault that stops a bud charging is covered. Loss, “water damage from swimming” and “damage caused by dropping the product” are all listed as not covered.' },

      { id:'t3l3s2-3', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:T3_AD_RIVER,
        stem:'Which booking qualifies for the Songkran package?',
        options:['Two nights, 13–15 April',
                 'Three nights, 10–13 April',
                 'Three nights, 12–15 April',
                 'Three nights, 15–18 April'],
        answer:2,
        hint:'Check two gates: the number of nights, and whether every night falls inside the date range.',
        why:'Arriving on 12 April and leaving on 15 April gives three nights (12, 13 and 14 April), all between 11 and 16 April. Two nights is below the three-night minimum. The 10–13 booking starts before 11 April, and the 15–18 booking includes the nights of 16 and 17 April, so the last night falls outside the package dates.' },

      { id:'t3l3s2-4', type:'judge', tag:'ad-fineprint', level:'B2+', ad:T3_AD_RIVER,
        given:'A guest who booked the Songkran package through a travel app can cancel for free ten days before arrival.',
        stem:'According to the advertisement, is this statement True, False or Not given?',
        answer:1,
        hint:'Check every condition in the cancellation sentence, not only the number of days.',
        why:'False. Ten days before arrival passes the 7-day gate, but the fine print says free cancellation “applies to direct bookings only”. A booking through a travel app is not a direct booking, so this guest cannot cancel for free.' },

      { id:'t3l3s2-5', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:T3_AD_RIVER,
        stem:'According to the fine print, the ฿500 charged at check-in ______.',
        options:['pays for breakfast',
                 'is kept if the guest cancels',
                 'is returned to the guest later',
                 'covers the free luggage storage'],
        answer:2,
        hint:'Find the ฿500 in the fine print. What kind of payment is it?',
        why:'The ฿500 is a “refundable deposit”, which means the guest pays it now and gets it back later. Breakfast is already included in the package price, and luggage storage is free. The fine print links cancellation to the booking, not to the deposit.' }
    ]
  },

  /* ------------------------------------------------------------ t3l3s3 */
  { id:'t3l3s3', name:'Consumer vocabulary', cefr:'B2+',
    theory:{
      key:'Consumer words come in <strong>families</strong> — free, pay, rules, better, worse. Know which family a word belongs to, and the context will do the rest.',
      body:[
        '<p>Ads and reviews recycle a small, predictable vocabulary, and TCAS tests it through “closest in meaning” and “can best be replaced by” stems. Because the texts are short, one unknown word can cost you two items: the vocabulary item itself and the detail item that depends on it. So it pays to learn these words in families, each tied to a question the consumer asks.</p>',
        '<p><strong>Is it free?</strong> complimentary, at no extra cost, waived (a fee that is cancelled). <strong>What do I pay?</strong> subscription (regular payment), deposit, non-refundable, renews automatically, joining fee. <strong>What are the rules?</strong> eligible, valid, redeem (exchange a voucher or points for something), terms and conditions, non-transferable (only you can use it). <strong>Is it good?</strong> versatile (useful in many ways), durable, seamless, state-of-the-art, amenities (useful facilities), courteous. <strong>What’s wrong with it?</strong> drawback, glitch (a small technical problem), letdown. <strong>Old or new?</strong> predecessor (the model before), successor (the model after), upgraded.</p>',
        '<p>Watch the false friends. <em>Complimentary</em> (free) looks like <em>compliment</em> (praise) — and that near-miss is exactly the distractor TCAS would write. <em>Predecessor</em> is the one <strong>before</strong> (pre- = before), not the newer model. <em>Redeem</em> is to <strong>use</strong> a voucher, not to earn or buy one. Procedure: <strong>Step 1</strong> name the family from context (“a ฿3,000 trade-in voucher” → rules/money); <strong>Step 2</strong> cover the word and predict a simple replacement; <strong>Step 3</strong> choose the option that fits both the meaning and the grammar of the sentence.</p>'
      ],
      simple:[
        'Ads and reviews use the same words again and again. Learn them in groups.',
        'Free: complimentary, at no extra cost. Pay: subscription, deposit. Rules: valid, eligible, redeem. Good: versatile, durable. Problems: drawback, glitch.',
        'Careful: complimentary means free, not “saying nice things”. Predecessor means the older one.'
      ],
      thai:'คำศัพท์ผู้บริโภคในโฆษณาและรีวิวจำได้ง่ายถ้าจัดเป็นกลุ่ม ได้แก่ ฟรี (complimentary, at no extra cost, waived) ต้องจ่าย (subscription, deposit, non-refundable) กฎเงื่อนไข (eligible, valid, redeem = ใช้/แลกคูปอง, non-transferable) คุณภาพดี (versatile, durable, amenities = สิ่งอำนวยความสะดวก) ข้อเสีย (drawback, glitch) และรุ่นเก่า-ใหม่ (predecessor = รุ่นก่อนหน้า, successor = รุ่นถัดไป) กับดักที่พบบ่อยคือคำหน้าตาคล้ายกัน เช่น complimentary (ฟรี) กับ compliment (คำชม)',
      examples:[
        { s:'“<strong>Complimentary</strong> welcome drink”', g:'Free — not “full of praise”.' },
        { s:'“80 grams lighter than its <strong>predecessor</strong>, the Tab 10”', g:'The earlier model (pre- = before).' },
        { s:'“<strong>Redeem</strong> a ฿3,000 trade-in voucher”', g:'Use / cash in the voucher.' },
        { s:'“Joining fee <strong>waived</strong> with a valid student ID”', g:'The fee is cancelled: you do not pay it.' },
        { s:'“the <strong>subscription renews</strong> at ฿59 a month”', g:'You will keep paying monthly unless you stop it.' }
      ],
      trap:'The look-alike distractor: an option that matches a word the key resembles (compliment → “full of praise”, predecessor → “the newest version”). Dodge: split the word into its parts (pre- = before; -ary = relating to) and test your choice in the sentence — does a “full of praise welcome drink” make sense?',
      analogy:{ title:'Your 7-Eleven survival kit', text:'You don’t need every word in the dictionary to shop at 7-Eleven: you need “buy 1 get 1”, “points”, “expires” and “member price”. Consumer English is the same small kit. Pack these twenty words, and every ad in the exam becomes a familiar shop.' },
      map:{ center:'Consumer vocabulary', branches:[
        { label:'Free', leaves:['complimentary','at no extra cost','waived'] },
        { label:'Pay', leaves:['subscription','deposit','non-refundable','renews automatically'] },
        { label:'Rules', leaves:['eligible / valid','redeem','non-transferable','terms and conditions'] },
        { label:'Quality', leaves:['versatile / durable','seamless','amenities'] },
        { label:'Old & new', leaves:['predecessor (before)','successor (after)','upgraded'] }
      ]},
      chant:{ title:'The Shopper’s Word Rap', beat:'snap-snap-clap (4/4), quick and bouncy', lines:[
        'Complimentary? It’s free, not praise,',
        'waived means the fee has gone away.',
        'A deposit comes back, if it’s refundable,',
        'non-transferable? Only you are able.',
        'Redeem your voucher, cash it in,',
        'versatile does many things — you win!',
        'Predecessor came before, successor came after,',
        'read the small print — and skip the disaster!'
      ]}
    },
    items:[
      { id:'t3l3s3-1', type:'read', tag:'ad-vocab', level:'B2+', passage:T3_RV_TAB, source:T3_SRC,
        stem:'The word “predecessor” in paragraph 1 is closest in meaning to ______.',
        options:['rival', 'cheaper copy', 'earlier model', 'newest version'],
        answer:2,
        hint:'Read the rest of paragraph 1: whose drawback does the Tab 11 finally fix?',
        why:'The predecessor is “the Tab 10”, the model that came before the Tab 11, so it means the earlier model (pre- = before). “Newest version” reverses the meaning, and nothing suggests the Tab 10 is a rival brand or a cheaper copy.' },

      { id:'t3l3s3-2', type:'read', tag:'ad-vocab', level:'B2+', passage:T3_RV_TAB, source:T3_SRC,
        stem:'The word “versatile” in paragraph 2 is closest in meaning to ______.',
        options:['fashionable',
                 'long-lasting',
                 'simple to use',
                 'useful in many ways'],
        answer:3,
        hint:'Read the three examples that follow the word: laptop, sketchbook, screen.',
        why:'The paragraph proves the word with three uses — a laptop for essays, a sketchbook and a screen for films — so versatile means useful in many ways. “Long-lasting” describes the battery in paragraph 1, not this paragraph. “Seamless” switching suggests it is easy, but “simple to use” does not explain the list of different uses.' },

      { id:'t3l3s3-3', type:'read', tag:'ad-vocab', level:'B2+', passage:T3_RV_TAB, source:T3_SRC,
        stem:'The word “redeem” in paragraph 3 can best be replaced by ______.',
        options:['buy', 'sell', 'cash in', 'give away'],
        answer:2,
        hint:'Look at who does the action and where it happens: a voucher, a store.',
        why:'To redeem a voucher is to use it and receive its value, which is what “cash in” means. Owners do not buy or sell the voucher at the store: it is a discount they bring to the store. Giving it away is the opposite of using it.' },

      { id:'t3l3s3-4', type:'read', tag:'ad-vocab', level:'B2+', passage:'', ad:T3_AD_RIVER,
        stem:'In the advertisement, the word “complimentary” means ______.',
        options:['costing extra',
                 'free of charge',
                 'served on request',
                 'praising the guest'],
        answer:1,
        hint:'Read the whole bullet point, then compare it with the other bullets in the ad.',
        why:'A complimentary welcome drink is given free as a courtesy, so the word means free of charge. “Praising the guest” is the look-alike trap from “compliment”. Nothing in the ad says the drink costs extra or must be requested.' },

      { id:'t3l3s3-5', type:'sort', tag:'ad-vocab', level:'B2+',
        stem:'Sort these phrases from ads: does the customer pay, or is it free?',
        bins:[
          { key:'pay', label:'The customer pays', hint:'money leaves your wallet' },
          { key:'free', label:'Free for the customer', hint:'nothing to pay' }
        ],
        items:[
          { text:'a monthly subscription', bin:'pay' },
          { text:'a ฿500 deposit', bin:'pay' },
          { text:'an early cancellation fee', bin:'pay' },
          { text:'a complimentary phone pouch', bin:'free' },
          { text:'joining fee waived', bin:'free' },
          { text:'cloud storage at no extra cost', bin:'free' }
        ],
        hint:'Waived and complimentary are the tricky ones: what happens to your money?',
        why:'A subscription, a deposit and a cancellation fee all take money from the customer (a refundable deposit comes back later, but you still pay it first). Complimentary means given free, a waived fee is one you do not have to pay, and “at no extra cost” means free on top of what you already paid.' }
    ]
  }
  ],

  check:{ id:'t3l3ck', name:'Systems Check · Two texts & fine print', items:[
    { id:'t3l3ck-1', type:'read', tag:'ad-compare', level:'C1', passage:T3_RV_BUDS, ad:T3_AD_LOOP3, source:T3_SRC,
      stem:'Read the Loop Buds 2 review and the Loop Buds 3 advertisement. Which weakness mentioned in the review does the new model claim to fix?',
      options:['The short battery life',
               'The weak noise cancelling',
               'The poor microphone on calls',
               'The oversensitive touch controls'],
      answer:2,
      hint:'Find a drawback in the review, then look for an upgrade in the ad that matches it.',
      why:'The review complains that the reviewer sounded “like I was underwater” on calls, and the ad promises an “upgraded 3-microphone system for clear online classes”. The ad does claim longer battery life, but the review praised the battery, so it was not a weakness. The ad says nothing about noise cancelling or touch controls.' },

    { id:'t3l3ck-2', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:T3_AD_PREP,
      stem:'According to Ad B, a student who starts the free trial and forgets to cancel it will ______.',
      options:['lose access after 7 days',
               'get a full refund automatically',
               'have to enter card details on day 8',
               'be charged for the paid plan on day 8'],
      answer:3,
      hint:'Read the fine print of Ad B about what happens when the trial ends.',
      why:'The fine print says “the paid plan starts automatically on day 8 unless cancelled”, so the student will be charged. Card details are needed to start the trial, not on day 8. A refund is possible within 14 days, but only if the student asks; it is not automatic.' },

    { id:'t3l3ck-3', type:'read', tag:'ad-fineprint', level:'B2+', passage:'', ad:T3_AD_FIT,
      stem:'The phrase “non-transferable” in the Lotus Flow fine print tells customers that they ______.',
      options:['cannot let anyone else use the pack',
               'cannot use more than one class a day',
               'cannot change the time of a booked class',
               'cannot get money back for classes they do not use'],
      answer:0,
      hint:'The sentence is about class packs. What might the studio not allow you to do with yours?',
      why:'A non-transferable pack cannot be passed to another person, so only the buyer can use it. The fine print does limit changes to a booking, but that rule is in a different sentence. Refunds for unused classes are not mentioned, and nothing limits the number of classes a day.' },

    { id:'t3l3ck-4', type:'read', tag:'ad-compare', level:'B2+', passage:'', ad:T3_AD_PREP,
      stem:'Unlike ClickScore, Summit Prep ______.',
      options:['gives scores for mock exams',
               'lets students study on their phones',
               'offers unlimited feedback on writing',
               'lets students make up a missed class for free'],
      answer:3,
      hint:'The feature must be in Summit Prep’s ad and missing from ClickScore’s.',
      why:'Only Summit Prep offers a “free make-up class if you miss a Saturday”. Both ads give scores for mock exams (personal score reports and instant scores). Phone study and unlimited writing feedback belong to ClickScore, not Summit Prep.' },

    { id:'t3l3ck-5', type:'read', tag:'ad-vocab', level:'B2+', passage:'', ad:T3_AD_RIVER,
      stem:'In “Modern amenities, old-town charm”, the word “amenities” is closest in meaning to ______.',
      options:['discounts', 'facilities', 'neighbours', 'decorations'],
      answer:1,
      hint:'Look at the bullet points: what do air-conditioning and luggage storage have in common?',
      why:'Amenities are useful facilities and services, such as the air-conditioned dorms and luggage storage in the bullets. “Decorations” is the near miss, because “charm” is about style, but amenities are about comfort and usefulness, not appearance. Discounts and neighbours do not fit the phrase.' },

    { id:'t3l3ck-6', type:'read', tag:'ad-vocab', level:'C1', passage:T3_RV_TAB, source:T3_SRC,
      stem:'The phrase “the subscription renews at ฿59 a month” in paragraph 3 means that after six months, students ______.',
      options:['lose all their files',
               'must redeem a new voucher',
               'will begin paying ฿59 every month',
               'get another six months without charge'],
      answer:2,
      hint:'A subscription is a regular payment. What does “renews” do to it?',
      why:'The storage is free for six months; after that the subscription continues (renews) at a cost of ฿59 a month. The free period does not repeat, and nothing says files are deleted. Vouchers belong to the trade-in offer, not to cloud storage.' }
  ]}
});

TOPICS.push(T3);

/* ================================================================ REMEDIATION */
Object.assign(REMEDIATION, {
  'ad-purpose': {
    name: 'Purpose & target audience',
    principle: 'Find who the ad talks to (the opening question, the benefits, the age rule) and the verb in the call to action. If the reader pays, it sells; if the reader gets paid, it recruits.',
    reteach: 'Project three short ads (a product, a job, an event) with the middle covered. Ask students to predict purpose and audience from the headline and the call to action alone, then uncover the middle to confirm. Introduce the four stops (headline → offer → conditions → contact) and the “who pays whom” test. Finish with option analysis: show a “too narrow” option (one bullet), a “wrong action” option and a “reversed audience” option, and have students name why each fails.',
    activities: [
      'Cover-the-middle: pairs see only the headline and last line of five ads and write “This ad wants ___ to ___” before seeing the full ad.',
      'Reverse the audience: students rewrite a recruiting ad as a selling ad (and vice versa), changing only the audience clues and the call-to-action verb.'
    ]
  },
  'ad-detail': {
    name: 'Selling points, conditions & NOT mentioned',
    principle: 'For NOT mentioned or NOT true, tick the three options you can find in the ad (paraphrases count) and choose the leftover. NOT mentioned means absent; NOT true means contradicted.',
    reteach: 'Model Tick–Cross–Leftover aloud on one ad: for each option, point to its “home” line and write it next to the option. Show a paraphrase that must be ticked (Promote Blood Circulation → better blood flow) and a world-knowledge option that feels mentioned but is not (top speed). Separate NOT mentioned from NOT true with one example of each, and end with a headline-versus-fine-print contradiction.',
    activities: [
      'Attendance call: the teacher reads options aloud; students shout the line number that is the option’s “home”, or “absent!”.',
      'Sneaky examiner: groups write three true paraphrases and one plausible-but-absent detail for an ad; other groups find the absent one.'
    ]
  },
  'ad-technique': {
    name: 'Persuasion techniques',
    principle: 'Name the technique from the exact words: hurry (urgency/scarcity), crowd (bandwagon), qualified person (expert), ordinary customer (testimonial), product facts (logical reason), feelings (emotional appeal), calm and escape (peace and relaxation). Pick the most specific label.',
    reteach: 'Collect real-looking slogans (fictional brands) and sort them on the board into head and heart techniques. Teach the two confusing pairs explicitly: expert vs testimonial (who is speaking?) and bandwagon vs logic (a number of people or a fact about the product?). Then show a TCAS-style item with two emotional labels and model choosing the more specific one by quoting the power word.',
    activities: [
      'Technique charades: students perform the gesture for a technique (watch-tap for urgency, glasses-push for expert) while a partner writes a matching slogan.',
      'Ad makeover: groups rewrite one plain ad five times, each using a different technique, and the class names each version.'
    ]
  },
  'rv-attitude': {
    name: 'The reviewer’s overall verdict',
    principle: 'Read the first and last paragraphs first: the conclusion is the verdict and the middle is evidence. Choose the option that matches both the direction (positive, mixed, negative) and the strength of the conclusion.',
    reteach: 'Give students a review with the last paragraph removed and ask them to guess the verdict; then reveal it and discuss how the middle misled or helped them. Build a board of verdict signals in three columns (positive, mixed/conditional, negative). Finish with strength: show options that differ only in intensity (mostly vs completely) and practise rejecting options stronger than the text.',
    activities: [
      'Scorecard: students read only the final paragraph of four reviews and hold up +, ± or − cards, then justify with one phrase.',
      'Strength ladder: arrange six attitude sentences from “completely satisfied” to “completely unsatisfied” and place a review’s verdict on the ladder.'
    ]
  },
  'rv-evidence': {
    name: 'Strengths, drawbacks & the proof',
    principle: 'Match each claim to the specific detail that proves it, in the same paragraph and on the same topic. A true detail about a different point is not support. Read frequency words (once, more than once) exactly.',
    reteach: 'Colour-code a review: claims in one colour, proof in another, signposts (biggest strength, another plus, however) in a third. Show that each claim has its own proof and that “best supports” questions are about the link, not just truth. Then highlight frequency and quantity words and write two options that differ only in “once” vs “more than once”.',
    activities: [
      'Receipt match: cut a review into claim cards and proof cards; pairs race to match each claim with its receipt.',
      'Ingredient list: students list what a review contains (examples, prices, advice, other users?) and write one “NOT included” item for a partner.'
    ]
  },
  'rv-infer': {
    name: 'Reading between the lines in reviews',
    principle: 'An inference is a small step that must be true, supported by at least two clues. Watch for promise-versus-reality contrasts, quotation marks, hedges (just about, perhaps) and what the reviewer did. Reject options that go too far or contradict a fact.',
    reteach: 'Start with a friend’s short text message (“The cake was nice.”) and ask what it implies about the rest of the café. Transfer the idea to a review: list its hedges, quoted promises and actions, and ask what each must mean. Then test four options against two limits — too far and contradicted — and show why the key is the smallest safe step.',
    activities: [
      'Must, might or can’t: students sort statements about a review into “must be true”, “might be true” and “can’t be true”.',
      'Hedge detectives: groups underline every softening word in a review and rewrite the review without them to see how the verdict changes.'
    ]
  },
  'ad-compare': {
    name: 'Comparing Ad A and Ad B',
    principle: 'Build a mini table with the same rows for both ads (offer, price, conditions, contact). BOTH means in A and B; UNLIKE means in one only. For “which ad and why”, both the ad and the reason must be right and must answer the person’s need.',
    reteach: 'Put two ads side by side and build the four-row table together on the board. Show the three question shapes and answer each by pointing at a row. Then present a “which ad suits this person” item and model turning the person into one need; analyse right-ad-wrong-reason and true-reason-wrong-need distractors.',
    activities: [
      'Table race: teams get two ads and 90 seconds to fill a four-row table; the most accurate table wins.',
      'Customer cards: each student draws a persona card (budget, schedule, location) and argues which of two ads fits, citing the table row.'
    ]
  },
  'ad-fineprint': {
    name: 'Fine print: eligibility, validity & warranty',
    principle: 'Treat the fine print as gates: who, when, how many, how and with what. A person gets the offer only by passing every gate. A warranty covers factory faults, not damage or loss the owner causes.',
    reteach: 'Rewrite a fine-print paragraph as a checklist of gates on the board. Walk four fictional customers through the checklist, ticking or crossing each gate. Teach the money words (deposit, refundable, non-refundable, renews automatically) and the warranty limits with quick yes/no scenarios.',
    activities: [
      'Gatekeeper: one student reads a customer scenario, the class votes pass/fail at each gate, and the last gate decides.',
      'Fine-print writers: pairs write fine print for a class event (age, date, ID, one per person) and test it on another pair’s tricky customers.'
    ]
  },
  'ad-vocab': {
    name: 'Consumer vocabulary',
    principle: 'Learn consumer words in families: free (complimentary, waived), pay (subscription, deposit), rules (eligible, valid, redeem, non-transferable), quality (versatile, amenities), old and new (predecessor, successor). Beware look-alikes such as complimentary vs compliment.',
    reteach: 'Present the word families as five boxes and have students place twenty words in them from context sentences. Teach word parts (pre- = before, non- = not, trans- = across) and the look-alike traps. Finish with “closest in meaning” items: cover the word, predict a simple replacement, then choose.',
    activities: [
      'Family sort: word cards go into the free / pay / rules / quality / old-and-new boxes; each placement must be defended with a sentence.',
      'Fake ad challenge: students write a 40-word ad that uses five target words correctly; partners underline and define them.'
    ]
  }
});
