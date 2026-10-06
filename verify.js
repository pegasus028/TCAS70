/* verify.js — structural checker for TCAS70 content files.
   usage: node verify.js mock-1.js   |   node verify.js topic-t4.js [--build-all]
          node verify.js mock-*.js --strict     (TCAS70 mock-profile findings become errors)
   Checks structure, hints that contain the key, option length order, mock key balance and runs,
   key length rank, paragraph-order opener splits, positional wording in why, empty sort bins,
   build-item ambiguity, and the TCAS70 MOCK PROFILE (SPEC.md §1b), reported as PROFILE lines.
   Every threshold lives in the constants block below (measured on TCAS66–69, Oct 2026). */
const fs=require('fs'), vm=require('vm');

/* ---------------------------------------------------------------- constants */
const K={
  SECTION_COUNTS:[12,8,6,6,6,6,16,15,5],      /* the nine scored parts */
  TRIAGE_CODE:'T',                            /* optional unscored tenth section (Mock 1) */
  KEY_PER_POSITION:[18,22],                   /* per position over the 80 scored items */
  KEY_MAX_RUN:3,                              /* longest run of one key position seen in TCAS67–69 */
  KEY_WINDOW:16,                              /* every position appears in any 16 consecutive items */
  LEN_TOLERANCE:4,                            /* options shortest→longest within 4 characters */
  UNIQ_LONGEST_MOCK:[0.15,0.27],              /* key uniquely longest: TCAS68–69 16%, TCAS67 27% */
  UNIQ_LONGEST_TOPIC:[0.10,0.27],
  /* the TCAS70 mock profile (SPEC.md §1b) */
  NEG_TARGET:{m1:9,m2:5,m3:10,m4:6,m5:5}, NEG_TOL:1, NEG_ADS:[2,4], NEG_VISUALS:[1,3],
  ARITH:[2,4],
  SEC1:{functional:[8,11],idiom:[3,5],marker:[3,6]},
  NEWS_WORDS:[250,430],
  TC_ROWS:{WF:[2,3],PREP:[2,2],CONN:[2,2],REL:[1,2],PASS:[1,1],NC:[1,1],DET:[1,1],REST:[3,5]},
  INVERSION_MOCK:'m4',
  PO_MIN_NONALPHA:2
};
const TC_ROW_OF={'wf-pos':'WF','wf-family':'WF','wf-confuse':'WF','wf-compare':'WF','wf-edIng':'WF',
  'vc-prep':'PREP','vc-colloc':'PREP','vc-phrasal':'PREP','lk-contrast':'CONN','lk-add':'CONN','lk-cause':'CONN','pl-coord':'CONN',
  'rc-basic':'REL','rc-nondef':'REL','rc-prep':'REL','rc-reduced':'REL','rc-appos':'REL','ac-reduced':'REL',
  'vp-passive':'PASS','vp-passinf':'PASS','nc-embedded':'NC','nc-whether':'NC','nc-it':'NC','dt-other':'DET','dt-quant':'DET','dt-pron':'DET'};
const NEG_RE=/\b(NOT|EXCEPT|FALSE)\b/;
const ARITH_RE=/approximately|times (as|that)|combined|in total|difference|closest|gap between|how many|percentage points|per cent of all|% of all/i;
const DATED_RE=/\b(19|20)\d\d\b/;
const TAGS=JSON.parse(fs.readFileSync(__dirname+'/tags.json','utf8'));
const ARTS=['chat','signal','megaphone','news','bulb','chart','lexicon','globe','layers','stack','clock','chip','puzzle'];
const LEVELS=['B1','B1+','B2','B2+','C1','C1+'];
const MCQ=['choose','equiv','gap','cloze','read'];
const ctx={MOCKS:[],TOPICS:[],REMEDIATION:{},console}; vm.createContext(ctx);
let errs=[], warns=[], prof=[];
const ARGS=process.argv.slice(2); const BUILD_ALL=ARGS.includes('--build-all'); const STRICT=ARGS.includes('--strict');
const files=ARGS.filter(a=>!a.startsWith('--'));
if(!files.length){ console.log('usage: node verify.js <content-file.js> [more files] [--build-all] [--strict]'); process.exit(1); }
const f=files.join(', ');
files.forEach(fn=>{ try{ vm.runInContext(fs.readFileSync(fn,'utf8'),ctx,{filename:fn}); }catch(e){ console.log('PARSE/RUN ERROR',fn,e.message); process.exit(1); } });
function strip(o){return String(o==null?'':o).replace(/<[^>]+>/g,'');}
function len(o){return strip(o).length;}
function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function norm(s){return String(s||'').toLowerCase().replace(/[’']/g,"'").replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();}
const ORDER_OPT=/^[A-D](-[A-D]){3}$/;
/* ---- regression checks added Oct 2026 (audit phase 8) ---- */
function chkHint(it,w){
  if(!it.hint) return;
  const t=it.type||'choose'; let key=null;
  if(MCQ.includes(t)&&Array.isArray(it.options)) key=strip(it.options[it.answer]);
  else if(t==='spot') key=strip(it.fix);
  if(!key) return;
  key=key.trim(); if(!key||ORDER_OPT.test(key)) return;
  const re=new RegExp('(^|[^a-z0-9])'+esc(key.toLowerCase().replace(/[’]/g,"'"))+'($|[^a-z0-9])','i');
  const h=strip(it.hint).toLowerCase().replace(/[’]/g,"'");
  if(re.test(h)){ if(key.replace(/[^a-z0-9]/gi,'').length>=4) errs.push(w+' hint contains the key "'+key+'"'); else warns.push(w+' hint contains the (short) key "'+key+'"'); }
}
function chkOrder(it,w){
  if(!Array.isArray(it.options)||it.options.length!==4) return;
  if(it.options.every(o=>ORDER_OPT.test(o.trim()))){
    /* TCAS66–69 (20 sets): two shared openers (2+2) in 15, one shared opener (4x) in 4, four rotations in 1.
       The true opener is never the only sequence that starts with its letter (rotation sets aside).
       Alphabetical listing is a habit (12 of 20), not a rule, so it is not checked here. */
    const ops=it.options.map(o=>o.trim()), first=ops.map(o=>o[0]);
    const cnt={}; first.forEach(c=>cnt[c]=(cnt[c]||0)+1); const shape=Object.values(cnt).sort().join('+');
    const rot=o=>o.replace(/-/g,''); const isRotation=shape==='1+1+1+1'&&ops.every(o=>{ const a=rot(ops[0]); return (a+a).includes(rot(o)); });
    if(shape!=='2+2'&&shape!=='4'&&!isRotation) prof.push(w+' paragraph-order opener split '+shape+' (TCAS uses 2+2, one shared opener or four rotations)');
    else if(Number.isInteger(it.answer)&&shape==='2+2'&&cnt[ops[it.answer][0]]!==2) errs.push(w+' true opener is not one of the shared openers');
    return;
  }
  if(it.options.every(o=>/^[\d.,%\s]+$/.test(strip(o).trim()))){
    const v=it.options.map(o=>parseFloat(strip(o).replace(/,/g,''))); for(let i=1;i<4;i++){ if(v[i]<v[i-1]){ errs.push(w+' numeric options not in numeric order'); return; } }
    return;
  }
  const L=it.options.map(len);
  for(let i=1;i<4;i++){ if(L[i]<L[i-1]-K.LEN_TOLERANCE){ errs.push(w+' options not shortest→longest ('+L.join('/')+')'); return; } }
}
function chkWhy(it,w){
  const y=strip(it.why||'');
  if(/\b(first|second|third|fourth|last)\s+(option|choice|answer)\b/i.test(y)||/\b(option|choice)\s*\(?[1-4]\)?\b/i.test(y)) warns.push(w+' why refers to an option by position');
}
function chkSort(it,w){
  if((it.type||'')!=='sort'||!Array.isArray(it.bins)||!Array.isArray(it.items)) return;
  it.bins.forEach(b=>{ if(!it.items.some(x=>x.bin===b.key)) errs.push(w+' sort bin "'+b.key+'" is empty'); });
}
function chkBuild(it,w){
  if((it.type||'')!=='build'||!Array.isArray(it.tiles)||!it.solution) return;
  const tiles=it.tiles; const n=tiles.length;
  if(n>8){ warns.push(w+' build has '+n+' tiles; permutation check skipped'); return; }
  const oks=new Set([it.solution].concat(it.alt||[]).map(norm));
  const solN=norm(it.solution);
  if(!tiles.some(()=>true)) return;
  /* the solution itself must be buildable from the tiles */
  const tileN=tiles.map(norm).sort().join('|');
  const solTiles=solN.split(' ');
  const capTiles=tiles.map((t,i)=>/^[A-Z]/.test(t.trim())?i:-1).filter(i=>i>=0);
  const endTiles=tiles.map((t,i)=>/[.!?]$/.test(t.trim())?i:-1).filter(i=>i>=0);
  const seen=new Set(); const extra=[];
  const used=new Array(n).fill(false); const cur=[];
  (function rec(){
    if(cur.length===n){ const s=norm(cur.map(i=>tiles[i]).join(' ')); if(oks.has(s)||seen.has(s)) return; seen.add(s);
      if(capTiles.length&&capTiles.indexOf(cur[0])<0) return;
      if(endTiles.length&&endTiles.indexOf(cur[n-1])<0) return;
      extra.push(s); return; }
    for(let i=0;i<n;i++){ if(used[i]) continue; used[i]=true; cur.push(i); rec(); cur.pop(); used[i]=false; }
  })();
  let buildable=false; const u2=new Array(n).fill(false); const c2=[];
  (function rec2(){ if(buildable) return; if(c2.length===n){ if(norm(c2.map(i=>tiles[i]).join(' '))===solN) buildable=true; return; }
    for(let i=0;i<n;i++){ if(u2[i]) continue; u2[i]=true; c2.push(i); rec2(); c2.pop(); u2[i]=false; } })();
  if(!buildable) errs.push(w+' build solution cannot be made from the tiles');
  if(extra.length){ const show=BUILD_ALL?extra:extra.slice(0,3);
    warns.push(w+' build allows '+extra.length+' other capital-first ordering'+(extra.length>1?'s':'')+' (review): '+show.map(x=>'"'+x+'"').join(' | ')+(extra.length>show.length?' …':'')); }
}
function chkItem(it,where,isMock){
  const w=where+' '+it.id;
  if(!it.id) errs.push(where+' missing id');
  if(!TAGS.includes(it.tag)) errs.push(w+' bad tag '+it.tag);
  if(!LEVELS.includes(it.level)) errs.push(w+' bad level '+it.level);
  if(!it.why||len(it.why)<40) errs.push(w+' why missing/short');
  if(!isMock && !it.hint) errs.push(w+' hint missing');
  if(isMock && it.hint) warns.push(w+' mock item has hint');
  const t=it.type||'choose';
  if(MCQ.includes(t)){
    if(!Array.isArray(it.options)||it.options.length!==4) errs.push(w+' needs 4 options');
    else { if(it.options.some(o=>/<[a-z]/i.test(o))) errs.push(w+' HTML in options');
      if(new Set(it.options.map(o=>o.trim().toLowerCase())).size!==4) errs.push(w+' duplicate options'); }
    if(!(Number.isInteger(it.answer)&&it.answer>=0&&it.answer<4)) errs.push(w+' bad answer');
    if(t==='gap'&&(!it.lines||!it.blank)) errs.push(w+' gap needs lines+blank');
    if(t==='gap'&&it.lines&&!JSON.stringify(it.lines).includes('___'+it.blank+'___')) errs.push(w+' blank '+it.blank+' not in lines');
    if(t==='cloze'&&(!it.passage||!it.passage.includes('___'+it.blank+'___'))) errs.push(w+' cloze blank not in passage');
    if(t==='read'&&!it.passage&&!it.ad&&!it.visual) errs.push(w+' read needs passage/ad/visual');
    if(t==='equiv'&&!it.given) errs.push(w+' equiv needs given');
  } else if(t==='judge'){ if(![0,1,2].includes(it.answer)) errs.push(w+' judge answer'); }
  else if(t==='spot'){ if(!Array.isArray(it.words)||!(it.answer>=0&&it.answer<it.words.length)||!it.fix) errs.push(w+' spot fields'); }
  else if(t==='order'){ if(!Array.isArray(it.items)||it.items.length<3) errs.push(w+' order items'); }
  else if(t==='sort'){ if(!Array.isArray(it.bins)||!Array.isArray(it.items)||it.items.some(x=>!it.bins.some(b=>b.key===x.bin))) errs.push(w+' sort fields'); }
  else if(t==='build'){ if(!Array.isArray(it.tiles)||!it.solution) errs.push(w+' build fields'); }
  else errs.push(w+' unknown type '+t);
  chkHint(it,w); chkOrder(it,w); chkWhy(it,w); chkSort(it,w); chkBuild(it,w);
  if(it.visual){ const v=it.visual; if(!['bar','line','pie','table','flow'].includes(v.kind)) errs.push(w+' bad visual kind');
    if((v.kind==='bar'||v.kind==='line')&&(!v.labels||!v.series||v.series.some(s=>s.values.length!==v.labels.length))) errs.push(w+' visual series/labels mismatch');
    if(v.kind==='pie'&&!v.slices) errs.push(w+' pie slices'); if(v.kind==='table'&&(!v.cols||!v.rows)) errs.push(w+' table cols/rows');
    if(v.kind==='flow'&&!v.steps) errs.push(w+' flow steps'); }
}
const ids=new Set();
function uniq(id){ if(ids.has(id)) errs.push('duplicate id '+id); ids.add(id); }
function words(t){ return (strip(t).match(/[A-Za-z0-9’'\-]+/g)||[]).length; }
function measurable(it){ return it.options && !it.options.every(o=>ORDER_OPT.test(o.trim())) && !it.options.every(o=>/^[\d.,%\s]+$/.test(strip(o).trim())); }
function uniqLongest(it){ const L=it.options.map(len); const mx=Math.max(...L); return L[it.answer]===mx&&L.filter(x=>x===mx).length===1; }
const tcSets={};   /* option sets in text completion, across every mock loaded */
const phrasalMocks=new Set();
if(ctx.MOCKS.length){
  ctx.MOCKS.forEach(m=>{
    let q=0; const pos=[0,0,0,0]; let longestKey=0, meas=0; const scored=[];
    const main=m.sections.filter(s=>s.code!==K.TRIAGE_CODE), tri=m.sections.filter(s=>s.code===K.TRIAGE_CODE);
    if(main.length!==9) errs.push(m.id+' needs 9 scored sections');
    if(m.sections.length>10||(m.sections.length===10&&m.sections[9].code!==K.TRIAGE_CODE)) errs.push(m.id+' only one extra section is allowed, the triage section '+K.TRIAGE_CODE+', and it must come last');
    tri.forEach(s=>{ if(s.points!==0) errs.push(m.id+' triage section must have points:0'); if(!(s.budget>0)) errs.push(m.id+' triage section needs budget (minutes)');
      if(m.minutes<90+s.budget) errs.push(m.id+' minutes should be 90 + the triage budget'); });
    m.sections.forEach((s,i)=>{
      const isTri=s.code===K.TRIAGE_CODE;
      if(!isTri&&s.items.length!==K.SECTION_COUNTS[i]) errs.push(m.id+' section '+s.code+' has '+s.items.length+' items, need '+K.SECTION_COUNTS[i]);
      if(!isTri&&s.points!==1.25) errs.push(m.id+' section '+s.code+' must be worth 1.25 points an item');
      s.items.forEach(it=>{ q++; uniq(it.id); if(it.id!==m.id+'-'+q) errs.push('id '+it.id+' should be '+m.id+'-'+q); chkItem(it,m.id,true);
        if(!isTri&&it.options){ scored.push(it); pos[it.answer]++; if(measurable(it)){ meas++; if(uniqLongest(it)) longestKey++; } } }); });
    pos.forEach((c,i)=>{ if(c<K.KEY_PER_POSITION[0]||c>K.KEY_PER_POSITION[1]) errs.push(m.id+' key position '+(i+1)+' is the key '+c+' times (need '+K.KEY_PER_POSITION.join('–')+')'); });
    /* runs and windows over the 80 scored items, in paper order */
    const keys=scored.map(it=>it.answer); let run=1;
    for(let i=1;i<keys.length;i++){ run=keys[i]===keys[i-1]?run+1:1; if(run===K.KEY_MAX_RUN+1) prof.push(m.id+' key position '+(keys[i]+1)+' runs '+(run)+'+ times ending at item '+(i+1)+' (max '+K.KEY_MAX_RUN+')'); }
    for(let i=0;i+K.KEY_WINDOW<=keys.length;i++){ const win=new Set(keys.slice(i,i+K.KEY_WINDOW)); if(win.size<4){ prof.push(m.id+' a key position is missing from items '+(i+1)+'–'+(i+K.KEY_WINDOW)); break; } }
    const ul=meas?longestKey/meas:0;
    if(meas&&(ul<K.UNIQ_LONGEST_MOCK[0]||ul>K.UNIQ_LONGEST_MOCK[1])) warns.push(m.id+' key is uniquely longest in '+Math.round(100*ul)+'% of measurable items (aim '+K.UNIQ_LONGEST_MOCK.map(x=>Math.round(100*x)).join('–')+'%)');

    /* ---- the TCAS70 mock profile (SPEC.md §1b) ---- */
    const byQ=n=>scored[n-1]; const P=(msg)=>prof.push(m.id+' '+msg);
    const neg=[],negAds=[],negVis=[];
    for(let n=21;n<=60;n++){ const it=byQ(n); if(it&&NEG_RE.test(strip(it.stem))){ neg.push(n); if(n<=26) negAds.push(n); if(n>=39&&n<=44) negVis.push(n); } }
    const tgt=K.NEG_TARGET[m.id];
    if(tgt!=null&&Math.abs(neg.length-tgt)>K.NEG_TOL) P('NOT/EXCEPT/FALSE stems in Reading: '+neg.length+' (target '+tgt+'): '+neg.join(','));
    if(negAds.length<K.NEG_ADS[0]||negAds.length>K.NEG_ADS[1]) P('negative stems in the ads: '+negAds.length+' (aim '+K.NEG_ADS.join('–')+')');
    if(negVis.length<K.NEG_VISUALS[0]||negVis.length>K.NEG_VISUALS[1]) P('negative stems in the visuals: '+negVis.length+' (aim '+K.NEG_VISUALS.join('–')+')');
    let ar=0; for(let n=39;n<=44;n++){ const it=byQ(n); if(it&&(it.tag==='vs-math'||ARITH_RE.test(strip(it.stem)))) ar++; }
    if(ar<K.ARITH[0]||ar>K.ARITH[1]) P('visual arithmetic items: '+ar+' (aim '+K.ARITH.join('–')+')');
    const s1={functional:0,idiom:0,marker:0};
    for(let n=1;n<=20;n++){ const t=(byQ(n)||{}).tag||''; if(t.startsWith('id-')) s1.idiom++; else if(t.startsWith('dm-')) s1.marker++; else s1.functional++; }
    Object.keys(s1).forEach(k=>{ const b=K.SEC1[k]; if(s1[k]<b[0]||s1[k]>b[1]) P('Section I '+k+' keys: '+s1[k]+' (aim '+b.join('–')+')'); });
    const news=byQ(33); if(news&&news.passage){ const wc=words(news.passage); if(wc<K.NEWS_WORDS[0]||wc>K.NEWS_WORDS[1]) P('news report is '+wc+' words (aim '+K.NEWS_WORDS.join('–')+')');
      if(!/\n\s*By\b/.test(news.passage)) P('news report has no by-line'); }
    const rows={WF:0,PREP:0,CONN:0,REL:0,PASS:0,NC:0,DET:0,REST:0}; let inv=0;
    for(let n=61;n<=75;n++){ const it=byQ(n); if(!it) continue; rows[TC_ROW_OF[it.tag]||'REST']++; if(it.tag==='wo-front') inv++; if(it.tag==='vc-phrasal') phrasalMocks.add(m.id);
      const sig=it.options.map(o=>norm(o)).sort().join('|'); (tcSets[sig]=tcSets[sig]||[]).push(it.id); }
    Object.keys(K.TC_ROWS).forEach(r=>{ const b=K.TC_ROWS[r]; if(rows[r]<b[0]||rows[r]>b[1]) P('text completion '+r+': '+rows[r]+' (aim '+(b[0]===b[1]?b[0]:b.join('–'))+')'); });
    if(inv>(m.id===K.INVERSION_MOCK?1:0)) P('text completion has '+inv+' inversion item(s); only '+K.INVERSION_MOCK+' may have one');
    let nonAlpha=0; for(let n=76;n<=80;n++){ const it=byQ(n); if(it&&it.options.slice().sort().join()!==it.options.join()) nonAlpha++; }
    if(nonAlpha<K.PO_MIN_NONALPHA) P('paragraph-order sets out of alphabetical order: '+nonAlpha+' (aim '+K.PO_MIN_NONALPHA+'+)');
    const seenTxt=new Set();
    scored.concat(...tri.map(s=>s.items)).forEach(it=>{
      const srcs=[]; if(it.passage&&it.type==='read'){ srcs.push(['passage',it.passage,it.source]); }
      if(it.ad){ (Array.isArray(it.ad)?it.ad:[it.ad]).forEach(a=>srcs.push(['ad',a.brand,a.source])); }
      if(it.visual) srcs.push(['visual',it.visual.title,it.visual.source]);
      srcs.forEach(([k,txt,src])=>{ const sig=k+String(txt).slice(0,60); if(seenTxt.has(sig)) return; seenTxt.add(sig);
        if(!src||!DATED_RE.test(src)) P(k+' "'+strip(txt).replace(/\s+/g,' ').slice(0,40)+'…" has no dated source line'); });
    });
    console.log(m.id,'items',q,'key positions',pos.join('/'),'key uniquely longest',longestKey+'/'+meas,'negatives',neg.length,'arithmetic',ar,'Section I',s1.functional+'/'+s1.idiom+'/'+s1.marker);
  });
  if(ctx.MOCKS.length>1){
    Object.keys(tcSets).forEach(k=>{ const ids=tcSets[k]; const ms=new Set(ids.map(i=>i.split('-')[0])); if(ms.size>1) prof.push('option set reused across mocks: '+ids.join(', ')); });
    if(ctx.MOCKS.length===5&&phrasalMocks.size<3) prof.push('phrasal-verb option sets in only '+phrasalMocks.size+' mocks (aim 3+)');
  }
}
if(ctx.TOPICS.length){
  ctx.TOPICS.forEach(T=>{
    if(!ARTS.includes(T.art)) errs.push(T.id+' bad art '+T.art);
    if(T.levels.length!==3) errs.push(T.id+' needs 3 levels');
    let n=0; const pos=[0,0,0,0]; let longestKey=0,mcq=0;
    T.levels.forEach(L=>{
      const lv={story:0,chant:0,moves:0};
      if(L.subs.length!==3) errs.push(L.id+' needs 3 subs');
      L.subs.forEach(S=>{ uniq(S.id); const th=S.theory||{};
        ['key','body','simple','thai','examples','trap','analogy','map'].forEach(k=>{ if(!th[k]) errs.push(S.id+' theory.'+k+' missing'); });
        if(th.map&&(!th.map.center||!Array.isArray(th.map.branches)||th.map.branches.length<3)) errs.push(S.id+' map shape');
        ['story','chant','moves'].forEach(k=>{ if(th[k]) lv[k]++; });
        if(th.story&&(!Array.isArray(th.story.panels)||th.story.panels.length<3)) errs.push(S.id+' story panels');
        if(th.chant&&(!Array.isArray(th.chant.lines))) errs.push(S.id+' chant lines');
        if(th.moves&&(!Array.isArray(th.moves))) errs.push(S.id+' moves array');
        if(S.items.length!==5) errs.push(S.id+' needs 5 items');
        const tagHere=S.items.filter(i=>i.tag).map(i=>i.tag);
        S.items.forEach(it=>{ uniq(it.id); chkItem(it,S.id,false); n++; if(it.options){mcq++; pos[it.answer]++; const Ls=it.options.map(len); if(Ls[it.answer]===Math.max(...Ls)&&Ls.filter(x=>x===Math.max(...Ls)).length===1) longestKey++;} });
        if(S.items.filter(i=>MCQ.includes(i.type||'choose')).length<3) errs.push(S.id+' needs >=3 MCQ items');
      });
      ['story','chant','moves'].forEach(k=>{ if(!lv[k]) errs.push(L.id+' level lacks '+k); });
      if(!L.check||L.check.items.length!==6) errs.push(L.id+' check needs 6 items');
      else L.check.items.forEach(it=>{ uniq(it.id); chkItem(it,L.check.id,false); n++; if(it.options){mcq++; pos[it.answer]++;} if(!MCQ.includes(it.type||'choose')) errs.push(it.id+' check items must be MCQ'); });
    });
    const own=[]; T.levels.forEach(L=>L.subs.forEach(S=>{ const t=S.items.map(i=>i.tag); const top=t.sort((a,b)=>t.filter(x=>x===b).length-t.filter(x=>x===a).length)[0]; own.push(top); }));
    const missingRem=TAGS.filter(t=>own.includes(t)&&!ctx.REMEDIATION[t]); if(missingRem.length) errs.push('REMEDIATION missing for '+missingRem.join(','));
    Object.keys(ctx.REMEDIATION).forEach(k=>{ const r=ctx.REMEDIATION[k]; if(!r.name||!r.principle||!r.reteach||!Array.isArray(r.activities)) errs.push('REMEDIATION '+k+' incomplete'); });
    if(mcq&&(longestKey/mcq<K.UNIQ_LONGEST_TOPIC[0]||longestKey/mcq>K.UNIQ_LONGEST_TOPIC[1])) warns.push(T.id+' key is uniquely longest in '+Math.round(100*longestKey/mcq)+'% of MCQs (aim '+K.UNIQ_LONGEST_TOPIC.map(x=>Math.round(100*x)).join('–')+'%)');
    pos.forEach((c,i)=>{ const pct=c/mcq; if(mcq&&(pct<0.18||pct>0.32)) warns.push(T.id+' key position '+(i+1)+' is the key '+Math.round(100*pct)+'% of the time (aim 20–30%)'); });
    console.log(T.id,'items',n,'key positions',pos.join('/'),'key uniquely longest',longestKey+'/'+mcq,'sub owner tags',own.join(' '));
  });
}
warns.forEach(x=>console.log('WARN',x)); prof.forEach(x=>console.log('PROFILE',x)); errs.forEach(x=>console.log('ERR',x));
if(STRICT) errs=errs.concat(prof);
console.log(errs.length?('FAIL '+errs.length+' errors'):'PASS');
