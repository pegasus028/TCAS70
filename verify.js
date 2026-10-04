/* verify.js — structural checker for TCAS70 content files.
   usage: node verify.js mock-1.js   |   node verify.js topic-t4.js  */
const fs=require('fs'), vm=require('vm');
const TAGS=JSON.parse(fs.readFileSync(__dirname+'/tags.json','utf8'));
const ARTS=['chat','signal','megaphone','news','bulb','chart','lexicon','globe','layers','stack','clock','chip','puzzle'];
const LEVELS=['B1','B1+','B2','B2+','C1','C1+'];
const MCQ=['choose','equiv','gap','cloze','read'];
const ctx={MOCKS:[],TOPICS:[],REMEDIATION:{},console}; vm.createContext(ctx);
let errs=[], warns=[];
const f=process.argv[2];
try{ vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f}); }catch(e){ console.log('PARSE/RUN ERROR',e.message); process.exit(1); }
function len(o){return String(o).replace(/<[^>]+>/g,'').length;}
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
  if(it.visual){ const v=it.visual; if(!['bar','line','pie','table','flow'].includes(v.kind)) errs.push(w+' bad visual kind');
    if((v.kind==='bar'||v.kind==='line')&&(!v.labels||!v.series||v.series.some(s=>s.values.length!==v.labels.length))) errs.push(w+' visual series/labels mismatch');
    if(v.kind==='pie'&&!v.slices) errs.push(w+' pie slices'); if(v.kind==='table'&&(!v.cols||!v.rows)) errs.push(w+' table cols/rows');
    if(v.kind==='flow'&&!v.steps) errs.push(w+' flow steps'); }
}
const ids=new Set();
function uniq(id){ if(ids.has(id)) errs.push('duplicate id '+id); ids.add(id); }
if(ctx.MOCKS.length){
  ctx.MOCKS.forEach(m=>{
    const counts=[12,8,6,6,6,6,16,15,5]; let q=0; const pos=[0,0,0,0]; let longestKey=0, mcq=0;
    if(m.sections.length!==9) errs.push(m.id+' needs 9 sections');
    m.sections.forEach((s,i)=>{ if(s.items.length!==counts[i]) errs.push(m.id+' section '+s.code+' has '+s.items.length+' items, need '+counts[i]);
      s.items.forEach(it=>{ q++; uniq(it.id); if(it.id!==m.id+'-'+q) errs.push('id '+it.id+' should be '+m.id+'-'+q); chkItem(it,m.id,true);
        if(it.options){ mcq++; pos[it.answer]++; const L=it.options.map(len); if(L[it.answer]===Math.max(...L)&&L.filter(x=>x===Math.max(...L)).length===1) longestKey++; } }); });
    console.log(m.id,'items',q,'key positions',pos.join('/'),'key uniquely longest',longestKey+'/'+mcq);
  });
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
    console.log(T.id,'items',n,'key positions',pos.join('/'),'key uniquely longest',longestKey+'/'+mcq,'sub owner tags',own.join(' '));
  });
}
warns.forEach(x=>console.log('WARN',x)); errs.forEach(x=>console.log('ERR',x));
console.log(errs.length?('FAIL '+errs.length+' errors'):'PASS');
