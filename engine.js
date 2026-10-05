/* ===========================================================================
   MISSION CONTROL — engine.js
   Item rendering and checking, the progress model, mastery and unlock rules,
   the Fault List (spaced review), XP, streaks, awards, mock-paper scoring and
   the teacher-report analysis.
   Depends on: window.CONTENT (content.js + topic files + mock files)
   =========================================================================== */
(function (global) {
  'use strict';
  var C = global.CONTENT;

  /* ---------------------------------------------------------------- utils */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function shuffle(a) {
    var r = a.slice();
    for (var i = r.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = r[i]; r[i] = r[j]; r[j] = t;
    }
    return r;
  }
  function norm(s) {
    return String(s || '').toLowerCase().replace(/[’']/g, "'")
      .replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function daysBetween(a, b) {
    return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);
  }

  /* ----------------------------------------------------------------- bank
     One flat index of every item in the app, plus the maps that let a single
     item id answer "which topic, which level, which sub-topic?" */
  var BANK = {}, SUBS = {}, LEVELS = {}, TOPIC_OF = {}, LEVEL_OF = {}, MOCK_OF = {};
  var ALL_LEVELS = [];

  C.TOPICS.forEach(function (t) {
    t.levels.forEach(function (lv) {
      lv.topicId = t.id;
      LEVELS[lv.id] = lv;
      ALL_LEVELS.push(lv);
      lv.subs.forEach(function (s) {
        s.levelId = lv.id; s.topicId = t.id;
        SUBS[s.id] = s;
        s.items.forEach(function (it) {
          BANK[it.id] = it; TOPIC_OF[it.id] = t.id; LEVEL_OF[it.id] = lv.id;
        });
      });
      lv.check.levelId = lv.id; lv.check.topicId = t.id;
      lv.check.items.forEach(function (it) {
        BANK[it.id] = it; TOPIC_OF[it.id] = t.id; LEVEL_OF[it.id] = lv.id;
      });
    });
  });
  (C.MOCKS || []).forEach(function (m) {
    m.sections.forEach(function (sec) {
      sec.mockId = m.id;
      sec.items.forEach(function (it) {
        BANK[it.id] = it; MOCK_OF[it.id] = m.id; it._section = sec.code; it._points = sec.points;
      });
    });
  });

  function mockItems(m) {
    var out = [];
    m.sections.forEach(function (s) { s.items.forEach(function (i) { out.push(i); }); });
    return out;
  }

  /* Which module teaches a given tag? The one that spends the most questions
     on it. This is what turns a wrong answer on a mock paper into a place to
     go and work, which is the whole point of the checklist. */
  var TAG_HOME = {};
  (function () {
    var count = {};
    C.TOPICS.forEach(function (t) {
      t.levels.forEach(function (lv) {
        lv.subs.forEach(function (sb) {
          sb.items.forEach(function (it) {
            if (!it.tag) return;
            var k = it.tag + '|' + sb.id;
            count[k] = (count[k] || 0) + 1;
          });
        });
      });
    });
    var best = {};
    Object.keys(count).forEach(function (k) {
      var parts = k.split('|'), tag = parts[0], subId = parts[1];
      if (!best[tag] || count[k] > best[tag].n) best[tag] = { subId: subId, n: count[k] };
    });
    Object.keys(best).forEach(function (tag) { TAG_HOME[tag] = best[tag].subId; });
  })();

  /* ------------------------------------------------------ the daily drill
     Ten questions, mixed. Three things make it worth more than ten questions
     from one module: they are RETRIEVED rather than recognised in context,
     they are INTERLEAVED so no two in a row test the same rule, and they are
     SPACED, because the review queue feeds it first. Blocked practice — five
     items of one tag, then five of the next — feels far more effective than
     it is, because getting the fifth right proves only that the fourth is
     still in mind.

     The pool, in order of priority:
       1. questions actually due for review today
       2. questions from the tags this student gets wrong most
       3. questions from whatever their exam-plan checklist still holds
       4. anything unseen, to top up
     No mock items: those belong to the papers. */
  /* How much of the paper's ground this student has actually stood on: the
     count of distinct rules they have answered at least one question about.
     With a day and a half left this is the number that matters, far more than
     any score \u2014 a rule never met is a rule that cannot be recognised. */
  function tagsCovered(p) {
    var seen = 0, total = 0;
    Object.keys(C.REMEDIATION).forEach(function (tag) {
      total++;
      var st = p.stats && p.stats.byTag && p.stats.byTag[tag];
      /* Answered correctly at least once. Merely meeting a rule and getting
         it wrong is not cover; one mock at 34% used to show "67 of 117". */
      if (st && st.c) seen++;
    });
    return { seen: seen, total: total };
  }

  /* The speed round: questions chosen to cover NEW ground first. Rules never
     met come before rules met and missed, which come before everything else,
     and no two questions in a row test the same rule. */
  function speedSet(p, n) {
    n = n || 20;
    var byTag = (p.stats && p.stats.byTag) || {};
    var fresh = [], shaky = [], rest = [];
    Object.keys(BANK).forEach(function (id) {
      if (MOCK_OF[id]) return;
      var it = BANK[id], st = byTag[it.tag];
      if (!st || !st.a) fresh.push(id);
      else if (st.c / st.a < 0.7) shaky.push(id);
      else rest.push(id);
    });
    var picked = [], seen = {};
    function take(ids) {
      shuffle(ids).forEach(function (id) {
        if (picked.length >= n || seen[id]) return;
        seen[id] = 1; picked.push(id);
      });
    }
    take(fresh); take(shaky); take(rest);

    var out = [], pool = picked.slice(), lastTag = null;
    while (pool.length) {
      var k = 0;
      for (var j = 0; j < pool.length; j++) {
        if (BANK[pool[j]].tag !== lastTag) { k = j; break; }
      }
      lastTag = BANK[pool[k]].tag;
      out.push(pool.splice(k, 1)[0]);
    }
    return out;
  }

  function dailySet(p, n) {
    n = n || 10;
    var picked = [], seen = {};
    function take(ids) {
      shuffle(ids).forEach(function (id) {
        if (picked.length >= n || seen[id] || !BANK[id] || MOCK_OF[id]) return;
        seen[id] = 1; picked.push(id);
      });
    }

    take(Progress.dueReview(p));

    var weak = Progress.weakTags(p, 6).map(function (w) { return w.tag; });
    if (picked.length < n && weak.length) {
      var byWeak = [];
      Object.keys(BANK).forEach(function (id) {
        if (MOCK_OF[id]) return;
        if (weak.indexOf(BANK[id].tag) >= 0) byWeak.push(id);
      });
      take(byWeak);
    }

    if (picked.length < n) {
      var fromPlan = [];
      Object.keys(p.plans || {}).forEach(function (mockId) {
        (p.plans[mockId].subs || []).forEach(function (subId) {
          var sb = SUBS[subId];
          if (!sb) return;
          var rec = p.subs[subId];
          if (rec && rec.best >= PASS_SUB) return;
          sb.items.forEach(function (it) { fromPlan.push(it.id); });
        });
      });
      take(fromPlan);
    }

    if (picked.length < n) {
      var rest = Object.keys(BANK).filter(function (id) { return !MOCK_OF[id]; });
      take(rest);
    }

    /* Interleave: never two questions in a row on the same rule, so the
       student has to work out WHICH rule applies before applying it. That
       choice is most of what the exam actually asks for. */
    var out = [], pool = picked.slice(), lastTag = null;
    while (pool.length) {
      var k = 0;
      for (var j = 0; j < pool.length; j++) {
        if (BANK[pool[j]].tag !== lastTag) { k = j; break; }
      }
      lastTag = BANK[pool[k]].tag;
      out.push(pool.splice(k, 1)[0]);
    }
    return out;
  }

  var Bank = {
    item: function (id) { return BANK[id]; },
    moduleForTag: function (tag) { return TAG_HOME[tag] ? SUBS[TAG_HOME[tag]] : null; },
    sub: function (id) { return SUBS[id]; },
    level: function (id) { return LEVELS[id]; },
    topic: function (id) {
      for (var i = 0; i < C.TOPICS.length; i++) if (C.TOPICS[i].id === id) return C.TOPICS[i];
      return null;
    },
    mock: function (id) {
      for (var i = 0; i < (C.MOCKS || []).length; i++) if (C.MOCKS[i].id === id) return C.MOCKS[i];
      return null;
    },
    mockItems: mockItems,
    dailySet: function (p, n) { return dailySet(p, n); },
    speedSet: function (p, n) { return speedSet(p, n); },
    practiceIds: function () { return Object.keys(BANK).filter(function (id) { return !MOCK_OF[id]; }); },
    topicOf: function (id) { return TOPIC_OF[id]; },
    levelOf: function (id) { return LEVEL_OF[id]; },
    allLevels: function () { return ALL_LEVELS; },
    all: function () { return BANK; },

    /* A revision paper the teacher can set: pulled from the systems checks,
       weighted towards the tags this student is actually getting wrong, so a
       set paper is a diagnosis rather than a lottery. */
    revisionPaper: function (progress, n, topicId) {
      n = n || 12;
      var weak = {}, w = Progress.weakTags(progress, 6);
      w.forEach(function (r, i) { weak[r.tag] = 6 - i; });
      var pool = [];
      ALL_LEVELS.forEach(function (lv) {
        if (topicId && lv.topicId !== topicId) return;
        lv.check.items.forEach(function (it) { pool.push(it); });
      });
      pool = shuffle(pool);
      pool.sort(function (a, b) { return (weak[b.tag] || 0) - (weak[a.tag] || 0); });
      return pool.slice(0, n);
    }
  };

  /* ------------------------------------------------------------------ art
     Eight scene banners, one per system. Inline SVG so they need no network,
     never pixelate, and re-colour themselves in dark mode. */
  var ART = {
    chat:
      '<rect x="58" y="16" width="120" height="50" rx="14" fill="var(--accent)"/><path d="M84 66 L78 84 L102 66 Z" fill="var(--accent)"/>' +
      '<rect x="146" y="40" width="118" height="46" rx="14" fill="var(--gold)" opacity=".9"/><path d="M238 86 L246 100 L222 86 Z" fill="var(--gold)" opacity=".9"/>' +
      '<g fill="var(--surface)"><circle cx="100" cy="41" r="5"/><circle cx="118" cy="41" r="5"/><circle cx="136" cy="41" r="5"/></g>' +
      '<g stroke="var(--surface)" stroke-width="4" stroke-linecap="round"><line x1="168" y1="58" x2="240" y2="58"/><line x1="168" y1="70" x2="220" y2="70"/></g>',
    megaphone:
      '<path d="M96 40 L196 14 L196 86 L96 60 Z" fill="var(--accent)"/><rect x="72" y="38" width="28" height="24" rx="4" fill="var(--accent)" opacity=".7"/>' +
      '<path d="M104 60 L112 88 L128 88 L122 62 Z" fill="var(--accent)" opacity=".6"/>' +
      '<g stroke="var(--gold)" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M212 36 q14 14 0 28"/><path d="M226 26 q26 24 0 48"/><path d="M240 16 q38 34 0 68"/></g>',
    news:
      '<rect x="70" y="14" width="180" height="80" rx="6" fill="var(--surface)" stroke="var(--accent-line)" stroke-width="2"/>' +
      '<rect x="84" y="24" width="152" height="12" rx="3" fill="var(--accent)"/>' +
      '<rect x="84" y="44" width="62" height="40" rx="3" fill="var(--gold)" opacity=".8"/>' +
      '<g fill="var(--accent)" opacity=".45"><rect x="156" y="46" width="80" height="5" rx="2.5"/><rect x="156" y="58" width="70" height="5" rx="2.5"/><rect x="156" y="70" width="80" height="5" rx="2.5"/></g>',
    bulb:
      '<circle cx="160" cy="44" r="28" fill="var(--gold)"/><rect x="148" y="70" width="24" height="16" rx="3" fill="var(--accent)"/>' +
      '<rect x="152" y="88" width="16" height="6" rx="3" fill="var(--accent)" opacity=".6"/>' +
      '<g stroke="var(--accent-line)" stroke-width="3" stroke-linecap="round"><line x1="112" y1="44" x2="96" y2="44"/><line x1="208" y1="44" x2="224" y2="44"/>' +
      '<line x1="126" y1="14" x2="116" y2="4"/><line x1="194" y1="14" x2="204" y2="4"/></g>' +
      '<path d="M152 52 L160 36 L168 52" stroke="var(--accent)" stroke-width="3" fill="none"/>',
    chart:
      '<g fill="var(--accent)"><rect x="80" y="56" width="26" height="36" rx="3" opacity=".5"/><rect x="118" y="40" width="26" height="52" rx="3" opacity=".7"/>' +
      '<rect x="156" y="26" width="26" height="66" rx="3"/><rect x="194" y="48" width="26" height="44" rx="3" opacity=".6"/></g>' +
      '<polyline points="92,50 130,34 168,18 206,40 244,22" fill="none" stroke="var(--gold)" stroke-width="3.5"/>' +
      '<line x1="68" y1="94" x2="256" y2="94" stroke="var(--accent-line)" stroke-width="2"/>',
    globe:
      '<circle cx="160" cy="52" r="40" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="4"/>' +
      '<ellipse cx="160" cy="52" rx="18" ry="40" fill="none" stroke="var(--accent)" stroke-width="2.5"/>' +
      '<g stroke="var(--accent)" stroke-width="2.5"><line x1="120" y1="52" x2="200" y2="52"/><line x1="128" y1="32" x2="192" y2="32"/><line x1="128" y1="72" x2="192" y2="72"/></g>' +
      '<g fill="var(--gold)"><circle cx="232" cy="26" r="6"/><circle cx="88" cy="80" r="5"/></g>' +
      '<path d="M232 26 Q262 52 214 78" stroke="var(--gold)" stroke-width="2" fill="none" stroke-dasharray="4 4"/>',
    puzzle:
      '<rect x="92" y="18" width="62" height="62" rx="6" fill="var(--accent)"/><rect x="166" y="18" width="62" height="62" rx="6" fill="var(--gold)" opacity=".85"/>' +
      '<circle cx="160" cy="49" r="10" fill="var(--accent)"/><circle cx="123" cy="80" r="9" fill="var(--accent)"/>' +
      '<g fill="var(--surface)" font-family="monospace" font-size="18" font-weight="700"><text x="114" y="56">A</text><text x="190" y="56">B</text></g>' +
      '<g stroke="var(--accent-line)" stroke-width="3" stroke-linecap="round"><line x1="40" y1="49" x2="80" y2="49"/><line x1="240" y1="49" x2="280" y2="49"/></g>',
    chip:
      '<rect x="112" y="24" width="96" height="52" rx="8" fill="var(--accent)"/>' +
      '<rect x="128" y="40" width="64" height="20" rx="4" fill="var(--accent-soft)"/>' +
      '<g stroke="var(--accent)" stroke-width="3" stroke-linecap="round">' +
      '<line x1="112" y1="36" x2="84" y2="36"/><line x1="112" y1="50" x2="84" y2="50"/><line x1="112" y1="64" x2="84" y2="64"/>' +
      '<line x1="208" y1="36" x2="236" y2="36"/><line x1="208" y1="50" x2="236" y2="50"/><line x1="208" y1="64" x2="236" y2="64"/></g>' +
      '<g fill="var(--gold)"><circle cx="78" cy="36" r="4"/><circle cx="78" cy="64" r="4"/><circle cx="242" cy="50" r="4"/></g>' +
      '<g stroke="var(--accent-line)" stroke-width="2"><line x1="20" y1="50" x2="74" y2="50"/><line x1="246" y1="36" x2="300" y2="36"/><line x1="246" y1="64" x2="300" y2="64"/></g>',
    layers:
      '<path d="M160 14 L262 44 L160 74 L58 44 Z" fill="var(--gold)" opacity=".85"/>' +
      '<path d="M160 44 L262 66 L160 92 L58 66 Z" fill="var(--accent)" opacity=".5"/>' +
      '<path d="M160 60 L246 78 L160 96 L74 78 Z" fill="var(--accent)"/>' +
      '<g stroke="var(--accent-line)" stroke-width="1.5" opacity=".7"><line x1="160" y1="14" x2="160" y2="96"/></g>',
    stack:
      '<g fill="var(--accent)"><rect x="60" y="66" width="200" height="16" rx="4"/>' +
      '<rect x="82" y="44" width="156" height="16" rx="4" opacity=".7"/>' +
      '<rect x="104" y="22" width="112" height="16" rx="4" opacity=".45"/></g>' +
      '<g stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round">' +
      '<line x1="160" y1="40" x2="160" y2="20"/><path d="M152 27 L160 18 L168 27" fill="none"/></g>' +
      '<g fill="var(--gold)"><circle cx="46" cy="74" r="5"/><circle cx="274" cy="74" r="5"/></g>',
    clock:
      '<circle cx="160" cy="50" r="34" fill="none" stroke="var(--accent)" stroke-width="4"/>' +
      '<line x1="160" y1="50" x2="160" y2="28" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="160" y1="50" x2="180" y2="60" stroke="var(--gold)" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="160" cy="50" r="4" fill="var(--gold)"/>' +
      '<g stroke="var(--accent-line)" stroke-width="3" stroke-linecap="round">' +
      '<line x1="26" y1="30" x2="96" y2="30"/><line x1="26" y1="50" x2="78" y2="50"/><line x1="26" y1="70" x2="96" y2="70"/>' +
      '<line x1="224" y1="30" x2="294" y2="30"/><line x1="242" y1="50" x2="294" y2="50"/><line x1="224" y1="70" x2="294" y2="70"/></g>',
    signal:
      '<g fill="none" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round">' +
      '<path d="M108 74 a58 58 0 0 1 0 -52"/><path d="M86 84 a86 86 0 0 1 0 -72"/>' +
      '<path d="M212 74 a58 58 0 0 0 0 -52"/><path d="M234 84 a86 86 0 0 0 0 -72"/></g>' +
      '<circle cx="160" cy="48" r="13" fill="var(--gold)"/>' +
      '<rect x="152" y="58" width="16" height="34" rx="4" fill="var(--accent)"/>' +
      '<rect x="134" y="88" width="52" height="8" rx="4" fill="var(--accent)" opacity=".6"/>',
    grid:
      '<g fill="var(--accent)">' +
      '<rect x="36" y="18" width="80" height="12" rx="3"/><rect x="128" y="18" width="156" height="12" rx="3" opacity=".35"/>' +
      '<rect x="36" y="40" width="112" height="12" rx="3" opacity=".7"/><rect x="160" y="40" width="124" height="12" rx="3" opacity=".35"/>' +
      '<rect x="36" y="62" width="64" height="12" rx="3" opacity=".5"/><rect x="112" y="62" width="172" height="12" rx="3" opacity=".35"/></g>' +
      '<rect x="36" y="84" width="140" height="12" rx="3" fill="var(--gold)"/>' +
      '<g stroke="var(--gold)" stroke-width="2" opacity=".8"><path d="M20 24 L28 24 L28 46 L20 46" fill="none"/></g>',
    lexicon:
      '<rect x="52" y="16" width="102" height="72" rx="5" fill="var(--surface)" stroke="var(--accent-line)" stroke-width="2"/>' +
      '<rect x="166" y="16" width="102" height="72" rx="5" fill="var(--surface)" stroke="var(--accent-line)" stroke-width="2"/>' +
      '<g fill="var(--accent)" opacity=".55">' +
      '<rect x="64" y="30" width="60" height="6" rx="3"/><rect x="64" y="44" width="76" height="6" rx="3"/><rect x="64" y="58" width="48" height="6" rx="3"/>' +
      '<rect x="178" y="30" width="72" height="6" rx="3"/><rect x="178" y="44" width="54" height="6" rx="3"/><rect x="178" y="58" width="68" height="6" rx="3"/></g>' +
      '<rect x="64" y="72" width="36" height="6" rx="3" fill="var(--gold)"/>' +
      '<rect x="178" y="72" width="44" height="6" rx="3" fill="var(--gold)"/>' +
      '<path d="M154 52 L166 52" stroke="var(--gold)" stroke-width="3"/>',
    scope:
      '<circle cx="132" cy="48" r="32" fill="none" stroke="var(--accent)" stroke-width="4"/>' +
      '<circle cx="132" cy="48" r="32" fill="var(--accent-soft)"/>' +
      '<line x1="155" y1="71" x2="188" y2="96" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"/>' +
      '<g fill="var(--gold)" opacity=".85"><rect x="112" y="36" width="40" height="5" rx="2.5"/>' +
      '<rect x="112" y="47" width="30" height="5" rx="2.5"/><rect x="112" y="58" width="36" height="5" rx="2.5"/></g>' +
      '<g stroke="var(--accent-line)" stroke-width="3" stroke-linecap="round">' +
      '<line x1="204" y1="26" x2="292" y2="26"/><line x1="204" y1="44" x2="270" y2="44"/><line x1="204" y1="62" x2="292" y2="62"/></g>',
    sim:
      '<rect x="44" y="14" width="232" height="74" rx="8" fill="var(--surface)" stroke="var(--accent-line)" stroke-width="2"/>' +
      '<rect x="44" y="14" width="232" height="16" rx="8" fill="var(--accent)"/>' +
      '<g fill="var(--accent)" opacity=".45">' +
      '<rect x="60" y="42" width="84" height="6" rx="3"/><rect x="60" y="56" width="120" height="6" rx="3"/><rect x="60" y="70" width="64" height="6" rx="3"/></g>' +
      '<g fill="var(--gold)"><circle cx="228" cy="58" r="20" opacity=".2"/><circle cx="228" cy="58" r="20" fill="none" stroke="var(--gold)" stroke-width="3"/>' +
      '<line x1="228" y1="58" x2="228" y2="46" stroke="var(--gold)" stroke-width="3" stroke-linecap="round"/>' +
      '<line x1="228" y1="58" x2="237" y2="64" stroke="var(--gold)" stroke-width="3" stroke-linecap="round"/></g>'
  };
  function artSvg(name) {
    var d = ART[name];
    if (!d) return '';
    return '<svg class="art" viewBox="0 0 320 110" preserveAspectRatio="xMidYMid meet" ' +
      'role="presentation" aria-hidden="true">' + d + '</svg>';
  }
  function artBand(name, cls) {
    if (!ART[name]) return '';
    return '<div class="artband' + (cls ? ' ' + cls : '') + '">' + artSvg(name) + '</div>';
  }

  /* ------------------------------------------------------------ rendering */
  /* Every renderer returns { response, hasResponse, check, lock } */

  function mcqView(host, options, answerIdx) {
    var chosen = -1, btns = [];
    var wrap = el('div', 'opts');
    options.forEach(function (opt, i) {
      var b = el('button', 'opt');
      b.type = 'button';
      b.innerHTML = '<span class="opt-k">' + (i + 1) + '</span><span class="opt-t">' + opt + '</span>';
      b.addEventListener('click', function () {
        if (wrap.dataset.locked) return;
        chosen = i;
        btns.forEach(function (x, j) { x.classList.toggle('sel', j === i); });
        host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
      });
      btns.push(b); wrap.appendChild(b);
    });
    host.appendChild(wrap);
    return {
      response: function () { return chosen; },
      hasResponse: function () { return chosen >= 0; },
      check: function () {
        return {
          correct: chosen === answerIdx,
          givenText: chosen >= 0 ? stripTags(options[chosen]) : '(no answer)',
          expectedText: stripTags(options[answerIdx])
        };
      },
      lock: function () {
        wrap.dataset.locked = '1';
        btns.forEach(function (b, i) {
          b.disabled = true;
          if (i === answerIdx) b.classList.add('right');
          else if (i === chosen) b.classList.add('wrong');
        });
      }
    };
  }

  function stripTags(s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, ''); }

  /* One numbered blank, drawn so it reads as a blank rather than as a number
     dropped into the sentence: ___[7]___, with the gap being asked about lit
     up. Used by the gapped text and by the dialogue alike, so a student moving
     through either one always sees where they are. */
  function gapSpan(n, isThis) {
    /* The underscores go in as entities: the dialogue renderer replaces any
       remaining literal ___ with a plain blank marker, and would eat these. */
    var u = '&#95;&#95;&#95;';
    return '<span class="gapno' + (isThis ? ' on' : '') + '">' +
      '<i>' + u + '</i>[' + n + ']<i>' + u + '</i></span>';
  }

  /* Highlight the gap this item is asking about inside a shared passage, and
     leave the other gap numbers visible exactly as the paper shows them. */
  function markPassage(text, blank) {
    var html = esc(text).replace(/___\((\d+)\)___/g, function (m, n) {
      return gapSpan(n, blank && ('(' + n + ')') === blank);
    });
    /* A passage is escaped before it is inserted, so a literal <br> written
       into the content would be shown to the student as text. Treat it as the
       paragraph break it was meant to be. */
    html = html.replace(/(&lt;br\s*\/?&gt;\s*){2,}/gi, '\n\n').replace(/&lt;br\s*\/?&gt;/gi, '\n');
    return html.replace(/\n\s*\n/g, '</p><p>').replace(/\n/g, ' ');
  }

  /* ============================================================ TCAS70 ADDITIONS
     Ads, charts and mind maps are drawn from data, so content authors never
     hand-write SVG and every visual re-themes itself in dark mode. */
  var PAL = ['var(--accent)', 'var(--gold)', 'var(--ok)', 'var(--no)', 'var(--ink-3, #7a8599)', 'var(--accent-line)', '#8e6bbf'];
  function fmtNum(n) { return (Math.round(n * 100) / 100).toLocaleString('en-US'); }
  function adCard(a, label) {
    var h = '<div class="adcard">' + (label ? '<div class="ad-label">' + esc(label) + '</div>' : '');
    if (a.brand) h += '<div class="ad-brand">' + esc(a.brand) + '</div>';
    if (a.headline) h += '<div class="ad-head">' + esc(a.headline) + '</div>';
    if (a.sub) h += '<div class="ad-sub">' + esc(a.sub) + '</div>';
    (a.body || []).forEach(function (p) { h += '<p class="ad-body">' + esc(p) + '</p>'; });
    if (a.bullets && a.bullets.length) h += '<ul class="ad-list">' + a.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>';
    if (a.price) h += '<div class="ad-price">' + esc(a.price) + '</div>';
    if (a.cta) h += '<div class="ad-cta">' + esc(a.cta) + '</div>';
    if (a.fine) h += '<div class="ad-fine">' + esc(a.fine) + '</div>';
    if (a.source) h += '<div class="ad-src">Source: ' + esc(a.source) + '</div>';
    return h + '</div>';
  }
  function adHtml(ad) {
    if (Array.isArray(ad)) return '<div class="adpair">' + ad.map(function (a, i) { return adCard(a, 'Ad ' + 'AB'[i]); }).join('') + '</div>';
    return adCard(ad);
  }
  function legend(names) {
    return '<div class="vlegend">' + names.map(function (n, i) {
      return '<span><i style="background:' + PAL[i % PAL.length] + '"></i>' + esc(n) + '</span>'; }).join('') + '</div>';
  }
  function xyChart(v) {
    var W = 560, H = 260, L = 46, R = 12, T = 14, B = 44;
    var all = []; v.series.forEach(function (s) { all = all.concat(s.values.filter(function (x) { return x !== null; })); });
    var max = v.ymax || Math.max.apply(null, all), min = v.ymin !== undefined ? v.ymin : Math.min(0, Math.min.apply(null, all));
    var step = Math.pow(10, Math.floor(Math.log(max - min || 1) / Math.LN10)); var ticks = (max - min) / step;
    if (ticks < 3) step /= 2; if (ticks > 8) step *= 2;
    max = Math.ceil(max / step) * step; min = Math.floor(min / step) * step;
    var n = v.labels.length, pw = W - L - R, ph = H - T - B;
    function y(val) { return T + ph - (val - min) / (max - min || 1) * ph; }
    var s = '<svg class="vchart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(v.title || 'chart') + '">';
    for (var g = min; g <= max + 1e-9; g += step) {
      s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(g) + '" y2="' + y(g) + '" class="vgrid"/>' +
        '<text x="' + (L - 6) + '" y="' + (y(g) + 4) + '" class="vtick" text-anchor="end">' + fmtNum(g) + '</text>';
    }
    var slot = pw / n;
    v.labels.forEach(function (lab, i) {
      s += '<text x="' + (L + slot * (i + .5)) + '" y="' + (H - B + 16) + '" class="vtick" text-anchor="middle">' + esc(lab) + '</text>';
    });
    if (v.kind === 'bar') {
      var k = v.series.length, bw = Math.min(34, slot * .8 / k);
      v.series.forEach(function (se, j) {
        se.values.forEach(function (val, i) {
          if (val === null) return;
          var x = L + slot * (i + .5) - bw * k / 2 + bw * j, yy = y(Math.max(val, 0)), h = Math.abs(y(val) - y(0));
          s += '<rect x="' + x + '" y="' + yy + '" width="' + (bw - 2) + '" height="' + h + '" fill="' + PAL[j % PAL.length] + '" rx="2"/>';
          s += '<text x="' + (x + bw / 2 - 1) + '" y="' + (yy - 4) + '" class="vval" text-anchor="middle">' + fmtNum(val) + '</text>';
        });
      });
    } else {
      v.series.forEach(function (se, j) {
        var pts = [];
        se.values.forEach(function (val, i) { if (val !== null) pts.push([L + slot * (i + .5), y(val), val]); });
        s += '<polyline fill="none" stroke="' + PAL[j % PAL.length] + '" stroke-width="2.5" points="' + pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ') + '"/>';
        pts.forEach(function (p) {
          s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="' + PAL[j % PAL.length] + '"/>' +
            '<text x="' + p[0] + '" y="' + (p[1] - 8) + '" class="vval" text-anchor="middle">' + fmtNum(p[2]) + '</text>';
        });
      });
    }
    s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(min) + '" y2="' + y(min) + '" class="vaxis"/></svg>';
    if (v.unit) s = '<div class="vunit">' + esc(v.unit) + '</div>' + s;
    return s + (v.series.length > 1 || v.series[0].name ? legend(v.series.map(function (x) { return x.name || ''; })) : '');
  }
  function pieChart(v) {
    var tot = v.slices.reduce(function (a, b) { return a + b.value; }, 0), a0 = -Math.PI / 2, cx = 130, cy = 120, r = 100;
    var s = '<svg class="vchart pie" viewBox="0 0 480 240" role="img" aria-label="' + esc(v.title || 'pie chart') + '">';
    v.slices.forEach(function (sl, i) {
      var a1 = a0 + sl.value / tot * Math.PI * 2, big = a1 - a0 > Math.PI ? 1 : 0;
      var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      s += '<path d="M' + cx + ',' + cy + ' L' + x0 + ',' + y0 + ' A' + r + ',' + r + ' 0 ' + big + ' 1 ' + x1 + ',' + y1 + ' Z" fill="' + PAL[i % PAL.length] + '" stroke="var(--surface)" stroke-width="2"/>';
      a0 = a1;
    });
    v.slices.forEach(function (sl, i) {
      s += '<rect x="262" y="' + (22 + i * 28) + '" width="14" height="14" rx="3" fill="' + PAL[i % PAL.length] + '"/>' +
        '<text x="284" y="' + (34 + i * 28) + '" class="vlab">' + esc(sl.label) + ' — ' + fmtNum(sl.value) + (v.unit || '') + '</text>';
    });
    return s + '</svg>';
  }
  function tableHtml(v) {
    return '<div class="tbl-scroll"><table class="tbl"><thead><tr>' + v.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + v.rows.map(function (r) {
        return '<tr>' + r.map(function (c, i) { return '<td' + (i && /^[\d,.\s%$฿+\-–µg/³]+$/.test(String(c)) ? ' class="num"' : '') + '>' + esc(c) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }
  function flowHtml(v) {
    function step(st) {
      if (typeof st === 'string') return '<div class="fbox">' + esc(st) + '</div>';
      return '<div class="fbox fq">' + esc(st.q) + '</div><div class="fsplit">' +
        '<div class="fbranch"><div class="fyn">If YES</div>' + (st.yes || []).map(function (x) { return typeof x === 'string' ? '<div class="fbox">' + esc(x) + '</div>' : step(x); }).join('<div class="farrow">↓</div>') + '</div>' +
        '<div class="fbranch"><div class="fyn">If NO</div>' + (st.no || []).map(function (x) { return typeof x === 'string' ? '<div class="fbox">' + esc(x) + '</div>' : step(x); }).join('<div class="farrow">↓</div>') + '</div></div>';
    }
    return '<div class="flow">' + v.steps.map(step).join('<div class="farrow">↓</div>') + '</div>';
  }
  function visualHtml(v) {
    var body = v.kind === 'pie' ? pieChart(v) : v.kind === 'table' ? tableHtml(v) : v.kind === 'flow' ? flowHtml(v) : xyChart(v);
    return '<figure class="visual">' + (v.title ? '<figcaption class="vtitle">' + esc(v.title) + '</figcaption>' : '') + body +
      (v.note ? '<div class="vnote">Note: ' + esc(v.note) + '</div>' : '') + (v.source ? '<div class="vnote">Source: ' + esc(v.source) + '</div>' : '') + '</figure>';
  }
  function mindMapSvg(m) {
    var W = 860, H = 380, cx = W / 2, cy = H / 2, n = m.branches.length;
    var s = '<svg class="mindmap" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Mind map: ' + esc(m.center) + '">';
    var nodes = '';
    m.branches.forEach(function (b, i) {
      var ang = -Math.PI / 2 + i * 2 * Math.PI / n, bx = cx + Math.cos(ang) * 190, by = cy + Math.sin(ang) * 120;
      var col = PAL[i % PAL.length];
      s += '<path d="M' + cx + ',' + cy + ' Q' + (cx + Math.cos(ang) * 80) + ',' + (cy + Math.sin(ang) * 30) + ' ' + bx + ',' + by + '" stroke="' + col + '" stroke-width="4" fill="none" opacity=".75"/>';
      var leaves = b.leaves || [], right = Math.cos(ang) >= -0.05;
      leaves.forEach(function (lf, j) {
        var ly = by - (leaves.length - 1) * 11 + j * 22, lx = bx + (right ? 72 : -72);
        s += '<line x1="' + bx + '" y1="' + by + '" x2="' + lx + '" y2="' + ly + '" stroke="' + col + '" stroke-width="1.5" opacity=".6"/>';
        nodes += '<text x="' + (lx + (right ? 4 : -4)) + '" y="' + (ly + 4) + '" class="mm-leaf" text-anchor="' + (right ? 'start' : 'end') + '">' + esc(lf) + '</text>';
      });
      nodes += '<rect x="' + (bx - 62) + '" y="' + (by - 14) + '" width="124" height="28" rx="14" fill="var(--surface)" stroke="' + col + '" stroke-width="2"/>' +
        '<text x="' + bx + '" y="' + (by + 4) + '" class="mm-branch" text-anchor="middle">' + esc(b.label) + '</text>';
    });
    nodes += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="92" ry="30" fill="var(--accent)"/>' +
      '<text x="' + cx + '" y="' + (cy + 5) + '" class="mm-center" text-anchor="middle">' + esc(m.center) + '</text>';
    return s + nodes + '</svg>';
  }

  function renderStem(host, item) {
    if (item.passage) {
      var box = el('div', 'passage' + (item.type === 'read' ? ' read' : ''));
      box.innerHTML = '<p>' + markPassage(item.passage, item.blank) + '</p>' +
        (item.source ? '<p class="psource">' + esc(item.source) + '</p>' : '');
      host.appendChild(box);
    }
    if (item.ad) { var adb = el('div', 'adwrap'); adb.innerHTML = adHtml(item.ad); host.appendChild(adb); }
    if (item.visual) { var vb = el('div', 'viswrap'); vb.innerHTML = visualHtml(item.visual); host.appendChild(vb); }
    if (item.given) {
      var g = el('div', 'given');
      g.innerHTML = '<span class="given-k">' + (item.type === 'judge' ? 'Text' : item.type === 'equiv' ? 'Given' : 'Read') + '</span><span class="given-t">' + item.given + '</span>';
      host.appendChild(g);
    }
    if (item.lines) {
      var d = el('div', 'dialogue');
      item.lines.forEach(function (l) {
        var row = el('div', 'dline' + (l.who === 'Situation' ? ' dsit' : ''));
        row.appendChild(el('span', 'who', esc(l.who)));
        /* The dialogue tracks the current gap the same way the gapped text
           does, so advancing through questions 6 to 10 moves the highlight
           down the conversation instead of leaving the student to count. */
        var said = esc(String(l.text))
          .replace(/___\((\d+)\)___/g, function (m, n) {
            return gapSpan(n, item.blank && ('(' + n + ')') === item.blank);
          })
          .replace(/___/g, '<span class="blank">?</span>');
        row.appendChild(el('span', 'said', said));
        d.appendChild(row);
      });
      host.appendChild(d);
    }
    if (item.table) {
      var sc = el('div', 'tbl-scroll');
      var t = el('table', 'tbl');
      var thead = el('thead'), hr = el('tr');
      item.table.cols.forEach(function (c) { hr.appendChild(el('th', null, esc(c))); });
      thead.appendChild(hr); t.appendChild(thead);
      var tb = el('tbody');
      item.table.rows.forEach(function (row) {
        var tr = el('tr');
        row.forEach(function (cell, i) { tr.appendChild(el('td', i ? 'num' : null, esc(cell))); });
        tb.appendChild(tr);
      });
      t.appendChild(tb); sc.appendChild(t); host.appendChild(sc);
    }
    if (item.stem) host.appendChild(el('p', 'stem', item.stem));
  }

  var RENDER = {
    choose: function (host, item) { renderStem(host, item); return mcqView(host, item.options, item.answer); },
    equiv: function (host, item) { renderStem(host, item); return mcqView(host, item.options, item.answer); },
    cloze: function (host, item) { renderStem(host, item); return mcqView(host, item.options, item.answer); },
    read: function (host, item) { renderStem(host, item); return mcqView(host, item.options, item.answer); },
    table: function (host, item) { renderStem(host, item); return mcqView(host, item.options, item.answer); },
    gap: function (host, item) { renderStem(host, item); return mcqView(host, item.options, item.answer); },

    judge: function (host, item) {
      renderStem(host, item);
      return mcqView(host, ['True', 'False', 'Can\'t tell'], item.answer);
    },

    spot: function (host, item) {
      renderStem(host, item);
      var chosen = -1, toks = [];
      var line = el('div', 'segs');
      item.words.forEach(function (w, i) {
        var b = el('button', 'seg');
        b.type = 'button';
        b.innerHTML = '<span class="seg-n">' + (i + 1) + '</span>' + esc(w);
        b.addEventListener('click', function () {
          if (line.dataset.locked) return;
          chosen = i;
          toks.forEach(function (x, j) { x.classList.toggle('sel', j === i); });
          host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
        });
        toks.push(b); line.appendChild(b);
      });
      host.appendChild(line);
      return {
        response: function () { return chosen; },
        hasResponse: function () { return chosen >= 0; },
        check: function () {
          return {
            correct: chosen === item.answer,
            givenText: chosen >= 0 ? '(' + (chosen + 1) + ') ' + item.words[chosen] : '(no answer)',
            expectedText: '(' + (item.answer + 1) + ') ' + item.words[item.answer] + ' → ' + item.fix
          };
        },
        lock: function () {
          line.dataset.locked = '1';
          toks.forEach(function (b, i) {
            b.disabled = true;
            if (i === item.answer) b.classList.add('right');
            else if (i === chosen) b.classList.add('wrong');
          });
          host.appendChild(el('div', 'fixnote',
            '<strong>(' + (item.answer + 1) + ')</strong> ' + esc(item.words[item.answer]) +
            ' &nbsp;→&nbsp; ' + esc(item.fix)));
        }
      };
    },

    sort: function (host, item) {
      renderStem(host, item);
      var placed = {};
      var pool = el('div', 'sort-pool');
      var bins = el('div', 'sort-bins');
      bins.style.setProperty('--cols', String(item.bins.length));
      var chips = [], binEls = {}, locked = false, picked = -1;

      function paint() {
        item.bins.forEach(function (b) {
          var drop = binEls[b.key].querySelector('.sort-drop');
          drop.innerHTML = '';
          var any = false;
          item.items.forEach(function (it, i) {
            if (placed[i] !== b.key) return;
            any = true;
            var c = el('button', 'chip-i in');
            c.type = 'button';
            c.innerHTML = it.text;
            if (locked) c.classList.add(it.bin === b.key ? 'right' : 'wrong');
            c.disabled = locked;
            c.addEventListener('click', function () {
              if (locked) return;
              delete placed[i]; paint();
              host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
            });
            drop.appendChild(c);
          });
          if (!any) drop.appendChild(el('span', 'sort-empty', 'tap a card, then this box'));
        });
        chips.forEach(function (c, i) {
          c.classList.toggle('gone', placed[i] != null);
          c.disabled = placed[i] != null || locked;
        });
        var all = Object.keys(placed).length === item.items.length;
        pool.classList.toggle('spent', all);
        var done = pool.querySelector('.sort-done');
        if (all && !done) pool.appendChild(el('span', 'sort-done', 'All placed — press Check'));
        if (!all && done) pool.removeChild(done);
      }
      function selectChip(i) {
        picked = picked === i ? -1 : i;
        chips.forEach(function (c, j) { c.classList.toggle('armed', j === picked); });
        Object.keys(binEls).forEach(function (k) { binEls[k].classList.toggle('ready', picked >= 0); });
      }
      /* The cards are authored bin by bin, which lays them out alternating
         left, right, left, right. A student who spots that can sort the whole
         thing without reading a word of it, which is the opposite of the
         exercise. So shuffle the display order — and throw a shuffle away if
         it still reads as a pattern, either perfectly alternating or with all
         of one bin bunched together.

         Only the ORDER ON SCREEN moves. Each card keeps its own index, so the
         answer key and the marking are untouched. */
      function readsAsAPattern(ord) {
        if (ord.length < 4) return false;
        var seq = ord.map(function (k) { return item.items[k].bin; });
        var kinds = {};
        seq.forEach(function (b) { kinds[b] = 1; });
        var n = Object.keys(kinds).length;
        if (n < 2) return false;
        var alternating = true;
        for (var a = 1; a < seq.length; a++) {
          if (seq[a] === seq[a - 1]) { alternating = false; break; }
        }
        if (alternating) return true;
        var runs = 1;
        for (var b2 = 1; b2 < seq.length; b2++) if (seq[b2] !== seq[b2 - 1]) runs++;
        return runs === n;   /* every bin in one unbroken block */
      }
      var indices = item.items.map(function (t, i) { return i; });
      var shown = shuffle(indices.slice());
      for (var tries = 0; tries < 24 && readsAsAPattern(shown); tries++) {
        shown = shuffle(indices.slice());
      }

      item.items.forEach(function (it, i) {
        var c = el('button', 'chip-i');
        c.type = 'button'; c.innerHTML = it.text;
        c.addEventListener('click', function () { if (!locked) selectChip(i); });
        chips[i] = c;
      });
      shown.forEach(function (i) { pool.appendChild(chips[i]); });
      item.bins.forEach(function (b) {
        var box = el('div', 'sort-bin');
        box.innerHTML = '<div class="sort-h"><b>' + b.label + '</b>' +
          (b.hint ? '<span>' + esc(b.hint) + '</span>' : '') + '</div><div class="sort-drop"></div>';
        box.addEventListener('click', function () {
          if (locked || picked < 0) return;
          placed[picked] = b.key;
          selectChip(picked);
          paint();
          host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
        });
        binEls[b.key] = box; bins.appendChild(box);
      });
      host.appendChild(pool); host.appendChild(bins); paint();

      return {
        response: function () { return JSON.stringify(placed); },
        hasResponse: function () { return Object.keys(placed).length === item.items.length; },
        check: function () {
          var wrong = item.items.filter(function (it, i) { return placed[i] !== it.bin; });
          var label = {};
          item.bins.forEach(function (b) { label[b.key] = b.label; });
          return {
            correct: wrong.length === 0,
            givenText: item.items.map(function (it, i) {
              return stripTags(it.text) + '→' + (label[placed[i]] || '?');
            }).join('; '),
            expectedText: item.bins.map(function (b) {
              return b.label + ': ' + item.items.filter(function (x) { return x.bin === b.key; })
                .map(function (x) { return stripTags(x.text); }).join(', ');
            }).join(' | ')
          };
        },
        lock: function () { locked = true; selectChip(-1); paint(); }
      };
    },

    build: function (host, item) {
      renderStem(host, item);
      var picked = [];
      var slot = el('div', 'slot');
      var pool = el('div', 'tiles');
      var order = shuffle(item.tiles.map(function (t, i) { return i; }));

      function paint() {
        slot.innerHTML = '';
        if (!picked.length) slot.appendChild(el('span', 'slot-hint', 'Tap the parts in order'));
        picked.forEach(function (idx, pos) {
          var b = el('button', 'tile in');
          b.type = 'button'; b.textContent = item.tiles[idx];
          b.addEventListener('click', function () {
            if (slot.dataset.locked) return;
            picked.splice(pos, 1); paint();
            host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
          });
          slot.appendChild(b);
        });
        Array.prototype.forEach.call(pool.children, function (b, i) {
          b.disabled = picked.indexOf(order[i]) >= 0 || !!slot.dataset.locked;
          b.classList.toggle('used', picked.indexOf(order[i]) >= 0);
        });
      }
      order.forEach(function (idx) {
        var b = el('button', 'tile');
        b.type = 'button'; b.textContent = item.tiles[idx];
        b.addEventListener('click', function () {
          if (slot.dataset.locked || picked.indexOf(idx) >= 0) return;
          picked.push(idx); paint();
          host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
        });
        pool.appendChild(b);
      });
      host.appendChild(slot); host.appendChild(pool); paint();

      return {
        response: function () { return picked.map(function (i) { return item.tiles[i]; }).join(' '); },
        hasResponse: function () { return picked.length === item.tiles.length; },
        check: function () {
          var got = picked.map(function (i) { return item.tiles[i]; }).join(' ');
          var oks = [item.solution].concat(item.alt || []);
          return {
            correct: oks.some(function (s) { return norm(s) === norm(got); }),
            givenText: got || '(no answer)',
            expectedText: item.solution
          };
        },
        lock: function () {
          slot.dataset.locked = '1'; paint();
          Array.prototype.forEach.call(slot.children, function (b) { b.disabled = true; });
        }
      };
    },

    order: function (host, item) {
      renderStem(host, item);
      var picked = [];
      var display = shuffle(item.items.map(function (t, i) { return i; }));
      var slot = el('div', 'rank-slot');
      var pool = el('div', 'rank-pool');

      function paint() {
        slot.innerHTML = '';
        if (!picked.length) slot.appendChild(el('span', 'slot-hint', 'Tap the sentences in order'));
        picked.forEach(function (idx, pos) {
          var b = el('button', 'rank in');
          b.type = 'button';
          b.innerHTML = '<span class="rank-n">' + (pos + 1) + '</span>' + esc(item.items[idx]);
          b.addEventListener('click', function () {
            if (slot.dataset.locked) return;
            picked.splice(pos, 1); paint();
            host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
          });
          slot.appendChild(b);
        });
        Array.prototype.forEach.call(pool.children, function (b, i) {
          b.disabled = picked.indexOf(display[i]) >= 0 || !!slot.dataset.locked;
          b.classList.toggle('used', picked.indexOf(display[i]) >= 0);
        });
      }
      display.forEach(function (idx) {
        var b = el('button', 'rank');
        b.type = 'button'; b.textContent = item.items[idx];
        b.addEventListener('click', function () {
          if (slot.dataset.locked || picked.indexOf(idx) >= 0) return;
          picked.push(idx); paint();
          host.dispatchEvent(new CustomEvent('respond', { bubbles: true }));
        });
        pool.appendChild(b);
      });
      host.appendChild(slot); host.appendChild(pool); paint();

      return {
        response: function () { return picked.join(','); },
        hasResponse: function () { return picked.length === item.items.length; },
        check: function () {
          var ok = picked.length === item.items.length &&
            picked.every(function (v, i) { return v === i; });
          /* The cards carry no letters on screen, so "A-B-C-D" meant nothing
             to a student. Name each sentence by its opening words instead. */
          var head = function (i) {
            var w = String(item.items[i]).replace(/<[^>]+>/g, '').split(/\s+/).slice(0, 3).join(' ');
            return '\u201c' + w + '\u2026\u201d';
          };
          return {
            correct: ok,
            givenText: picked.map(head).join(' \u2192 ') || '(no answer)',
            expectedText: item.items.map(function (x, i) { return head(i); }).join(' \u2192 ')
          };
        },
        lock: function () {
          slot.dataset.locked = '1'; paint();
          Array.prototype.forEach.call(slot.children, function (b, i) {
            b.disabled = true;
            b.classList.add(picked[i] === i ? 'right' : 'wrong');
          });
        }
      };
    }
  };

  function mount(item, host) {
    host.innerHTML = '';
    host.dataset.type = item.type;
    var fn = RENDER[item.type] || RENDER.choose;
    var r = fn(host, item);
    markOverflow();
    return r;
  }
  /* Tables that are still wider than the card (a four-column table on a
     narrow phone) get a right-edge fade so the hidden column is signalled. */
  function markOverflow() {
    var run = function () {
      Array.prototype.forEach.call(document.querySelectorAll('.tbl-scroll'), function (sc) {
        sc.classList.toggle('more', sc.scrollWidth > sc.clientWidth + 2);
      });
    };
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(run); else run();
  }
  if (typeof window !== 'undefined') window.addEventListener('resize', markOverflow);

  var TYPE_LABEL = {
    choose: 'Choose the best option',
    equiv: 'Choose the closest meaning',
    cloze: 'Fill the gap in the text',
    read: 'Reading comprehension',
    gap: 'Fill the gap in the conversation',
    judge: 'True / False / Can\'t tell',
    table: 'Read the table',
    spot: 'Identify the error',
    sort: 'Put each one in the right box',
    build: 'Build the sentence',
    order: 'Put them in order'
  };

  /* ------------------------------------------------------------- progress */
  var XP_CORRECT = 10, XP_HINT_PENALTY = 4, XP_SUB = 40, XP_CHECK = 120, XP_MOCK = 250;
  var XP_SPEED = 6, SPEED_MS = 7000;
  /* Five questions a module: 80% means four right. At 60% (three of five) a
     module was ticked off the mock checklist and counted toward opening the
     next paper on what was close to a coin toss. */
  var PASS_SUB = 0.8, PASS_CHECK = 0.75;

  function blank(id, name) {
    return {
      studentId: id, displayName: name || id,
      xp: 0, streak: 0, longestStreak: 0, lastActiveDate: null,
      sessions: 0, runBest: 0, run: 0, reclaimed: 0, speedBonuses: 0,
      subs: {}, checks: {}, mocks: {}, plans: {}, badges: [], review: {},
      stats: { seen: 0, correct: 0, byTag: {} },
      assignment: null, created: new Date().toISOString()
    };
  }

  function checksCleared(p) {
    var n = 0;
    ALL_LEVELS.forEach(function (lv) {
      var r = p.checks[lv.check.id];
      if (r && r.best >= PASS_CHECK) n++;
    });
    return n;
  }
  function rank(p) {
    var n = checksCleared(p), out = C.RANKS[0];
    for (var i = 0; i < C.RANKS.length; i++) if (n >= C.RANKS[i].min) out = C.RANKS[i];
    return out;
  }
  function rankIndex(p) {
    var n = checksCleared(p), idx = 0;
    for (var i = 0; i < C.RANKS.length; i++) if (n >= C.RANKS[i].min) idx = i;
    return idx;
  }

  function subsDone(p, lv) {
    return lv.subs.filter(function (s) {
      var r = p.subs[s.id]; return r && r.best >= PASS_SUB;
    }).length;
  }
  function checkUnlocked(p, lv) { return subsDone(p, lv) === lv.subs.length; }

  /* Every system and every level is open from the first day. A level's own
     systems check still waits for its three modules, because that is a check
     on the level's material, not a lock on where a student may work. */
  function levelPct(p, lv) {
    var sm = 0;
    lv.subs.forEach(function (s) { sm += Math.min(1, (p.subs[s.id] || {}).best || 0); });
    sm = sm / lv.subs.length;
    var cm = Math.min(1, (p.checks[lv.check.id] || {}).best || 0);
    return Math.round((sm * 0.6 + cm * 0.4) * 100);
  }
  function topicPct(p, t) {
    var sum = 0;
    t.levels.forEach(function (lv) { sum += levelPct(p, lv); });
    return Math.round(sum / t.levels.length);
  }
  function readiness(p) {
    var sum = 0;
    ALL_LEVELS.forEach(function (lv) { sum += levelPct(p, lv); });
    return Math.round(sum / ALL_LEVELS.length);
  }
  function accuracy(p) {
    return p.stats.seen ? Math.round(100 * p.stats.correct / p.stats.seen) : 0;
  }

  /* ------------------------------------------------ Fault List (Leitner) */
  /* Spacing runs on DAYS, not on sessions. It used to count sessions, which
     meant a student working through four modules in one evening had every
     missed question come back within the hour — the opposite of spacing, and
     the thing that makes revision feel productive while teaching nothing.
     A question missed today returns tomorrow; got right, three days later;
     right again and it is retired. */
  var BOX_DAYS = { 1: 1, 2: 3 };
  function addDays(iso, n) {
    var d = iso ? new Date(iso + 'T00:00:00') : new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  }
  function scheduleReview(p, itemId, correct) {
    var r = p.review[itemId];
    if (!correct) {
      p.review[itemId] = { box: 1, dueDate: addDays(today(), BOX_DAYS[1]),
                           misses: ((r && r.misses) || 0) + 1 };
    } else if (r) {
      var box = Math.min(3, (r.box || 1) + 1);
      if (box >= 3) { delete p.review[itemId]; p.reclaimed++; }
      else { r.box = box; r.dueDate = addDays(today(), BOX_DAYS[box] || 3); delete r.due; }
    }
  }
  function dueReview(p) {
    var now = today();
    return Object.keys(p.review).filter(function (id) {
      if (!BANK[id] || MOCK_OF[id]) return false;
      var r = p.review[id];
      /* Records written before spacing moved to days carry a session number.
         Treat those as due now: they have all waited long enough. */
      return r.dueDate ? r.dueDate <= now : true;
    });
  }
  /* What is waiting but not yet ripe, so the fault list can say so rather
     than looking empty when there is work queued. */
  function laterReview(p) {
    var now = today();
    return Object.keys(p.review).filter(function (id) {
      var r = p.review[id];
      return BANK[id] && !MOCK_OF[id] && r.dueDate && r.dueDate > now;
    });
  }

  /* ------------------------------------------------------------- recording */
  function recordAttempt(p, item, correct, ms, hinted, fast) {
    p.stats.seen++;
    if (correct) { p.stats.correct++; p.run++; p.runBest = Math.max(p.runBest, p.run); }
    else { p.run = 0; }
    var t = p.stats.byTag[item.tag] || (p.stats.byTag[item.tag] = { a: 0, c: 0 });
    t.a++; if (correct) t.c++;
    var gain = 0;
    if (correct) {
      gain = hinted ? XP_CORRECT - XP_HINT_PENALTY : XP_CORRECT;
      if (fast) { gain += XP_SPEED; p.speedBonuses = (p.speedBonuses || 0) + 1; }
    }
    p.xp += gain;
    p.lastGain = gain;
    scheduleReview(p, item.id, correct);
    return {
      ts: new Date().toISOString(), studentId: p.studentId, itemId: item.id,
      topic: TOPIC_OF[item.id] || MOCK_OF[item.id] || '', level: LEVEL_OF[item.id] || item._section || '',
      type: item.type, tag: item.tag, cefr: item.level,
      correct: correct ? 1 : 0, ms: ms || 0, hinted: hinted ? 1 : 0, fast: fast ? 1 : 0
    };
  }

  function finishSub(p, subId, score) {
    var r = p.subs[subId] || (p.subs[subId] = { best: 0, attempts: 0 });
    r.attempts++;
    if (score > r.best) r.best = score;
    r.last = score; r.at = new Date().toISOString();
    if (score >= PASS_SUB) p.xp += XP_SUB;
  }

  function finishCheck(p, checkId, score, usedHint) {
    var r = p.checks[checkId] || (p.checks[checkId] = { best: 0, attempts: 0, failedOnce: false });
    r.attempts++;
    if (score < PASS_CHECK && r.best < PASS_CHECK) r.failedOnce = true;
    if (score >= PASS_CHECK && r.failedOnce) r.comeback = true;
    if (score >= 1) r.perfect = true;
    if (!usedHint && score >= PASS_CHECK) r.noHint = true;
    if (score > r.best) r.best = score;
    r.last = score; r.at = new Date().toISOString();
    if (score >= PASS_CHECK) p.xp += XP_CHECK;
  }

  /* A mock is marked the way the real paper is: by points, not by item count,
     because Part C is worth twice what Part B is. */
  function scoreMock(mock, results) {
    var got = 0, total = 0, bySection = {};
    results.forEach(function (r) {
      var pts = r.item._points || 1;
      var sec = r.item._section || '?';
      var b = bySection[sec] || (bySection[sec] = { got: 0, total: 0, right: 0, n: 0 });
      total += pts; b.total += pts; b.n++;
      if (r.correct) { got += pts; b.got += pts; b.right++; }
    });
    return { got: Math.round(got * 100) / 100, total: Math.round(total * 100) / 100,
             pct: total ? got / total : 0, bySection: bySection };
  }

  function finishMock(p, mockId, scored) {
    if (!p.mocks) p.mocks = {};
    var r = p.mocks[mockId] || (p.mocks[mockId] = { best: 0, attempts: 0 });
    r.attempts++;
    /* The first sitting is the honest benchmark: a retake of the same paper
       rises from memory, so it is kept apart from best. */
    if (r.first == null) r.first = scored.pct;
    if (scored.pct > r.best) r.best = scored.pct;
    r.last = scored.pct;
    r.marks = scored.got; r.total = scored.total;
    r.bySection = scored.bySection;
    r.at = new Date().toISOString();
    p.xp += XP_MOCK;
  }

  function touchDay(p) {
    var d = today();
    if (p.lastActiveDate === d) return false;
    if (p.lastActiveDate && daysBetween(p.lastActiveDate, d) === 1) p.streak++;
    else p.streak = 1;
    p.longestStreak = Math.max(p.longestStreak || 0, p.streak);
    p.lastActiveDate = d;
    p.sessions++;
    return true;
  }

  /* ---------------------------------------------------------------- awards */
  var BADGE_TESTS = {
    poweron: function (p) { return Object.keys(p.subs).length >= 1; },
    streak3: function (p) { return p.streak >= 3 || p.longestStreak >= 3; },
    streak7: function (p) { return p.streak >= 7 || p.longestStreak >= 7; },
    streak14: function (p) { return p.streak >= 14 || p.longestStreak >= 14; },
    allgreen: function (p) { return Object.keys(p.checks).some(function (k) { return p.checks[k].perfect; }); },
    triple: function (p) {
      return Object.keys(p.checks).filter(function (k) { return p.checks[k].perfect; }).length >= 3;
    },
    nohelp: function (p) { return Object.keys(p.checks).some(function (k) { return p.checks[k].noHint; }); },
    recovered: function (p) { return p.reclaimed >= 5; },
    run10: function (p) { return p.runBest >= 10; },
    reflight: function (p) { return Object.keys(p.checks).some(function (k) { return p.checks[k].comeback; }); },
    quick: function (p) { return (p.speedBonuses || 0) >= 25; },
    sim1: function (p) { return Object.keys(p.mocks || {}).length >= 1; },
    sim70: function (p) {
      var m = p.mocks || {};
      return Object.keys(m).some(function (k) { return m[k].best >= 0.7; });
    },
    simall: function (p) { return Object.keys(p.mocks || {}).length >= (C.MOCKS || []).length; },
    director: function (p) { return checksCleared(p) >= ALL_LEVELS.length; }
  };
  function checkBadges(p) {
    var earned = [];
    C.BADGES.forEach(function (b) {
      if (p.badges.indexOf(b.id) >= 0) return;
      var t = BADGE_TESTS[b.id];
      if (t && t(p)) { p.badges.push(b.id); earned.push(b); }
    });
    return earned;
  }

  /* ------------------------------------------------- teacher-side analysis */
  function weakTags(p, limit) {
    var rows = Object.keys(p.stats.byTag).map(function (tag) {
      var t = p.stats.byTag[tag];
      var rate = t.a ? 1 - t.c / t.a : 0;
      return {
        tag: tag, attempts: t.a, correct: t.c, wrong: t.a - t.c,
        rate: rate, weight: rate * Math.log(1 + t.a),
        info: C.REMEDIATION[tag] || { name: tag }
      };
    }).filter(function (r) { return r.wrong > 0; });
    rows.sort(function (a, b) { return b.weight - a.weight; });
    return limit ? rows.slice(0, limit) : rows;
  }
  function strongTags(p, limit) {
    var rows = Object.keys(p.stats.byTag).map(function (tag) {
      var t = p.stats.byTag[tag];
      return { tag: tag, attempts: t.a, rate: t.a ? t.c / t.a : 0, info: C.REMEDIATION[tag] || { name: tag } };
    }).filter(function (r) { return r.attempts >= 3 && r.rate >= 0.85; });
    rows.sort(function (a, b) { return b.rate - a.rate || b.attempts - a.attempts; });
    return limit ? rows.slice(0, limit) : rows;
  }
  /* Which of the eight systems is costing this student the most? */
  function systemScores(p) {
    return C.TOPICS.map(function (t) {
      return { id: t.id, code: t.code, name: t.name, pct: topicPct(p, t) };
    });
  }

  var Progress = {
    blank: blank, rank: rank, rankIndex: rankIndex, checksCleared: checksCleared,
    subsDone: subsDone, checkUnlocked: checkUnlocked,
    levelPct: levelPct, topicPct: topicPct, readiness: readiness, accuracy: accuracy,
    recordAttempt: recordAttempt, finishSub: finishSub, finishCheck: finishCheck,
    scoreMock: scoreMock, finishMock: finishMock,
    touchDay: touchDay, checkBadges: checkBadges,
    dueReview: dueReview, laterReview: laterReview, tagsCovered: tagsCovered, weakTags: weakTags, strongTags: strongTags, systemScores: systemScores
  };

  global.Engine = {
    el: el, esc: esc, shuffle: shuffle, norm: norm, today: today, daysBetween: daysBetween,
    stripTags: stripTags,
    mount: mount, adHtml: adHtml, visualHtml: visualHtml, mindMapSvg: mindMapSvg, TYPE_LABEL: TYPE_LABEL, Bank: Bank, art: artSvg, artBand: artBand, ART: ART,
    PASS_SUB: PASS_SUB, PASS_CHECK: PASS_CHECK, SPEED_MS: SPEED_MS, XP_SPEED: XP_SPEED,
    Progress: Progress
  };
})(window);
