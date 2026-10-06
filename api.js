/* ===========================================================================
   MISSION CONTROL — api.js
   One client for both consoles.

   CLOUD MODE   Talks to the Google Apps Script Web App in Code.gs.
                Requests are POST with Content-Type: text/plain so the browser
                treats them as "simple requests" and skips the CORS preflight
                that Apps Script cannot answer. Do not change that header.

   OFFLINE      If the network fails mid-session, everything keeps working
                against localStorage and the answers queue until it is back.
   =========================================================================== */
(function (global) {
  'use strict';

  /* ---- WHERE THE SERVER ADDRESS COMES FROM -------------------------------
     1. A student's own override, saved under Settings (localStorage)
     2. window.MC_API_URL — set in index.html and teacher.html.            */
  var API_URL = (typeof window !== 'undefined' && window.MC_API_URL) || '';

  var LS_URL = 'tc70.apiUrl';
  var LS_LOCAL = 'tc70.local.v1';
  var LS_SESSION = 'tc70.session';
  var LS_OUTBOX = 'tc70.outbox.v1';
  var LS_TOKEN = 'tc70.token';
  var LS_ME = 'tc70.me';            /* {id, name} of the signed-in student */
  var LS_PROG = 'tc70.progress.';   /* + studentId → last progress we held */

  /* A stored address overrides the one built into the page. The sentinel
     'off' means "no server at all" — that is how the teacher console's empty
     address field, and the test harness, ask for the local store instead of
     the class sheet. Without it, clearing the field would simply fall back to
     the built-in URL and there would be no way to reach local data. */
  try {
    var stored = localStorage.getItem(LS_URL);
    if (stored === 'off') API_URL = '';
    else if (stored) API_URL = stored;
  } catch (e) {}

  var state = {
    mode: API_URL ? 'cloud' : 'demo',
    url: API_URL,
    sessionId: null,
    sessionStart: 0,
    token: null,
    lastError: null,
    lastCloudSave: 0               /* ms timestamp of the last save the server acknowledged */
  };
  try { state.token = localStorage.getItem(LS_TOKEN) || null; } catch (e) {}

  /* ------------------------------------------------------------- outbox
     Answers are queued the moment they happen and only cleared once the
     server acknowledges them. Because the queue lives in localStorage it
     survives a reload, a closed lid and a flat battery — which is what lets
     the app stay quiet about a dropped connection instead of alarming a
     sixteen-year-old in the middle of a mock paper. */
  function outbox() {
    try { return JSON.parse(localStorage.getItem(LS_OUTBOX)) || []; } catch (e) { return []; }
  }
  function setOutbox(rows) {
    try { localStorage.setItem(LS_OUTBOX, JSON.stringify(rows.slice(-4000))); } catch (e) {}
  }

  /* -------------------------------------------------------------- storage */
  function db() {
    try { return JSON.parse(localStorage.getItem(LS_LOCAL)) || { students: {}, attempts: [], sessions: [], mocks: [] }; }
    catch (e) { return { students: {}, attempts: [], sessions: [], mocks: [] }; }
  }
  function saveDb(d) {
    try { localStorage.setItem(LS_LOCAL, JSON.stringify(d)); } catch (e) {}
  }
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; }
    return 'h' + h.toString(36);
  }

  /* ---------------------------------------------------------------- cloud */
  var TIMEOUT_MS = 14000;

  function post(action, payload) {
    if (state.token) payload.token = state.token;
    try { var tt = sessionStorage.getItem('tc70.tToken'); if (tt) payload.teacherToken = tt; } catch (e) {}
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer;
    var req = fetch(state.url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: action, payload: payload || {} }),
      redirect: 'follow',
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      /* Mark what really came from the server, so a local fallback can never
         be mistaken for an acknowledgement (that mistake used to delete the
         outbox after a dropped connection). */
      if (j && typeof j === 'object') j._cloud = true;
      return j;
    });
    var guard = new Promise(function (_, reject) {
      timer = setTimeout(function () {
        if (ctrl) { try { ctrl.abort(); } catch (e) {} }
        reject(new Error('Timed out after ' + (TIMEOUT_MS / 1000) + 's'));
      }, TIMEOUT_MS);
    });
    return Promise.race([req, guard]).then(
      function (v) { clearTimeout(timer); return v; },
      function (e) { clearTimeout(timer); throw e; }
    );
  }

  /* Signing in is the one place where a local fallback does harm: a student
     told "No account with that ID" would create a local-only account the
     teacher never sees. So while a server address is configured, a failed
     login or register is reported as unreachable, never answered locally.
     The local store is used only when the address is deliberately 'off'. */
  var UNREACHABLE = 'Can\'t reach the class server. Check your internet and try again.';
  function callStrict(action, payload, localFn) {
    if (!state.url) return Promise.resolve(localFn());
    state.mode = 'cloud';
    return post(action, payload).catch(function (err) {
      state.lastError = String(err.message || err);
      return { ok: false, error: UNREACHABLE, unreachable: true };
    });
  }

  function call(action, payload, localFn) {
    if (state.mode !== 'cloud') return Promise.resolve(localFn());
    return post(action, payload).catch(function (err) {
      state.lastError = String(err.message || err);
      state.mode = 'demo';
      if (global.API && typeof global.API.onModeChange === 'function') global.API.onModeChange('demo', state.lastError);
      return localFn();
    });
  }

  /* ------------------------------------------------------------- students */
  function localRegister(id, pw, name) {
    var d = db();
    if (d.students[id]) return { ok: false, error: 'That student ID is already taken. Try logging in instead.' };
    d.students[id] = { id: id, name: name || id, pw: hash(pw), created: new Date().toISOString() };
    d.students[id].progress = global.Engine.Progress.blank(id, name || id);
    saveDb(d);
    return { ok: true, progress: d.students[id].progress };
  }
  function localLogin(id, pw) {
    var d = db();
    var s = d.students[id];
    if (!s) return { ok: false, error: 'No account with that ID. Create one first.' };
    if (s.pw !== hash(pw)) return { ok: false, error: 'Wrong password.' };
    return { ok: true, progress: s.progress };
  }
  function localSave(progress, attempts) {
    var d = db();
    if (!d.students[progress.studentId]) {
      d.students[progress.studentId] = {
        id: progress.studentId, name: progress.displayName,
        pw: hash('offline'), created: new Date().toISOString()
      };
    }
    /* Same rule as save_ in Code.gs: a paper the teacher set (or a mock they
       opened) after this device last saved is kept, and handed back. */
    var res = { ok: true }, keep = progress, prev = d.students[progress.studentId].progress;
    if (prev && prev.assignment && prev.assignment.assignmentId) {
      var a2 = progress.assignment;
      if (!a2 || !a2.assignmentId ||
          (a2.assignmentId !== prev.assignment.assignmentId &&
           String(prev.assignment.createdAt || '') > String(a2.createdAt || ''))) {
        keep = JSON.parse(JSON.stringify(progress));
        keep.assignment = prev.assignment;
        res.assignment = prev.assignment;
      }
    }
    d.students[progress.studentId].progress = keep;
    d.students[progress.studentId].name = progress.displayName;
    /* A finished simulation arrives as one summary row among the answers. The
       sheet puts it on its own tab; offline we keep the same separation, or the
       teacher console would read it as an unanswered question. */
    if (!d.mocks) d.mocks = [];
    (attempts || []).forEach(function (a) {
      if (a && a.kind === 'mock') d.mocks.push(a); else d.attempts.push(a);
    });
    if (d.attempts.length > 8000) d.attempts = d.attempts.slice(-8000);
    if (d.mocks.length > 2000) d.mocks = d.mocks.slice(-2000);
    saveDb(d);
    return res;
  }
  function localRoster() {
    var d = db();
    return {
      ok: true,
      students: Object.keys(d.students).map(function (k) {
        var s = d.students[k];
        return { id: s.id, name: s.name, created: s.created, progress: s.progress };
      })
    };
  }
  function localDetail(id) {
    var d = db();
    var s = d.students[id];
    if (!s) return { ok: false, error: 'Not found' };
    return {
      ok: true, student: { id: s.id, name: s.name, created: s.created }, progress: s.progress,
      attempts: d.attempts.filter(function (a) { return a.studentId === id; }),
      sessions: d.sessions.filter(function (x) { return x.studentId === id; }),
      mocks: (d.mocks || []).filter(function (x) { return x.studentId === id; })
    };
  }
  function localSession(kind, row) {
    var d = db();
    if (kind === 'start') { d.sessions.push(row); }
    else {
      for (var i = d.sessions.length - 1; i >= 0; i--) {
        if (d.sessions[i].sessionId === row.sessionId) {
          d.sessions[i].logoutTs = row.logoutTs;
          d.sessions[i].durationSec = row.durationSec;
          d.sessions[i].items = row.items;
          d.sessions[i].correct = row.correct;
          break;
        }
      }
    }
    if (d.sessions.length > 3000) d.sessions = d.sessions.slice(-3000);
    saveDb(d);
    return { ok: true };
  }
  function localAssign(id, paper) {
    var d = db();
    if (!d.students[id]) return { ok: false, error: 'Not found' };
    d.students[id].progress.assignment = paper;
    saveDb(d);
    return { ok: true };
  }

  /* ------------------------------------------------------------------ API */
  var API = {
    get mode() { return state.mode; },
    get url() { return state.url; },
    get lastError() { return state.lastError; },
    onModeChange: null,

    retryCloud: function () {
      if (state.url && state.mode !== 'cloud') { state.mode = 'cloud'; return true; }
      return false;
    },
    setUrl: function (u) {
      state.url = (u || '').trim();
      state.mode = state.url ? 'cloud' : 'demo';
      try { localStorage.setItem(LS_URL, state.url || 'off'); } catch (e) {}
      return state.mode;
    },
    ping: function () {
      if (state.mode !== 'cloud') return Promise.resolve({ ok: false, mode: 'demo' });
      return post('ping', {}).then(function (r) { return { ok: !!r.ok, mode: 'cloud', sheet: r.sheet, students: r.students }; })
        .catch(function (e) { return { ok: false, mode: 'cloud', error: String(e.message || e) }; });
    },

    register: function (id, pw, name) {
      return callStrict('register', { id: id, pw: pw, name: name }, function () { return localRegister(id, pw, name); })
        .then(keepToken);
    },
    login: function (id, pw) {
      return callStrict('login', { id: id, pw: pw }, function () { return localLogin(id, pw); })
        .then(keepToken);
    },

    /* ---- staying signed in across a reload ----------------------------
       me() says who was signed in; cachedProgress() is the last progress
       this device held for them. Together with the stored token that is
       enough to re-enter the app without a password; the first save then
       brings back the server's copy if it is newer. */
    me: function () {
      try { return JSON.parse(localStorage.getItem(LS_ME)) || null; } catch (e) { return null; }
    },
    hasToken: function () { return !!state.token; },
    cachedProgress: function (id) {
      try { return JSON.parse(localStorage.getItem(LS_PROG + id)) || null; } catch (e) { return null; }
    },
    cacheProgress: cacheProgress,
    get lastCloudSave() { return state.lastCloudSave; },

    enqueue: function (rows) {
      if (!rows || !rows.length) return;
      setOutbox(outbox().concat(rows));
    },
    pendingCount: function () { return outbox().length; },
    save: function (progress) {
      var rows = outbox();
      var n = rows.length;
      return call('save', { progress: progress, attempts: rows },
        function () { return localSave(progress, rows); })
        .then(function (r) {
          cacheProgress(progress);
          if (r && r.ok && r._cloud) state.lastCloudSave = Date.now();
          /* Remove exactly the rows that were sent (a beacon may have cleared
             or reshaped the queue meanwhile), never "the first n". Only a
             reply from the server counts — or the local store when there is
             deliberately no server at all. A local fallback after a dropped
             connection keeps the rows queued for the next attempt. */
          if (r && r.ok && (r._cloud || !state.url)) {
            var sent = {};
            rows.forEach(function (x) { sent[JSON.stringify(x)] = 1; });
            setOutbox(outbox().filter(function (x) { return !sent[JSON.stringify(x)]; }));
          }
          return r;
        });
    },

    /* fetch() is cancelled on unload; sendBeacon is not. */
    flushBeacon: function (progress) {
      var rows = outbox();
      if (!state.url || state.mode !== 'cloud' || !navigator.sendBeacon) return false;
      try {
        var body = new Blob([JSON.stringify({
          action: 'save', payload: { progress: progress, attempts: rows, token: state.token }
        })], { type: 'text/plain;charset=utf-8' });
        /* A queued beacon is not an acknowledgement, so the outbox is left
           alone; the next successful save() clears it. The server ignores a
           row it has already stored (same timestamp, student, item and mode),
           so a row that goes up twice is harmless. */
        return navigator.sendBeacon(state.url, body);
      } catch (e) { return false; }
    },

    startSession: function (studentId) {
      state.sessionId = 'S' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      state.sessionStart = Date.now();
      var row = { sessionId: state.sessionId, studentId: studentId, loginTs: new Date().toISOString(), logoutTs: '', durationSec: 0, items: 0, correct: 0 };
      try { localStorage.setItem(LS_SESSION, JSON.stringify(row)); } catch (e) {}
      return call('session', { kind: 'start', row: row }, function () { return localSession('start', row); });
    },
    endSession: function (studentId, items, correct) {
      if (!state.sessionId) return Promise.resolve({ ok: true });
      var row = {
        sessionId: state.sessionId, studentId: studentId,
        logoutTs: new Date().toISOString(),
        durationSec: Math.round((Date.now() - state.sessionStart) / 1000),
        items: items || 0, correct: correct || 0
      };
      state.sessionId = null;
      try { localStorage.removeItem(LS_SESSION); } catch (e) {}
      return call('session', { kind: 'end', row: row }, function () { return localSession('end', row); });
    },

    /* teacher */
    teacherLogin: function (pin) {
      return call('teacherLogin', { pin: pin }, function () {
        var d = db();
        var want = d.teacherPin || '1234';
        return want === String(pin) ? { ok: true } : { ok: false, error: 'Wrong teacher PIN. The offline PIN is 1234.' };
      }).then(function (r) {
        try { if (r && r.ok && r.teacherToken) sessionStorage.setItem('tc70.tToken', r.teacherToken); } catch (e) {}
        return r;
      });
    },
    roster: function () { return call('roster', {}, localRoster); },
    detail: function (id) { return call('detail', { id: id }, function () { return localDetail(id); }); },
    assign: function (id, paper) { return call('assign', { id: id, paper: paper }, function () { return localAssign(id, paper); }); },

    localCount: function () { return Object.keys(db().students).length; }
  };

  function cacheProgress(progress) {
    if (!progress || !progress.studentId) return;
    try { localStorage.setItem(LS_PROG + progress.studentId, JSON.stringify(progress)); } catch (e) {}
  }
  function keepToken(r) {
    if (r && r.ok && r.token) {
      state.token = r.token;
      try { localStorage.setItem(LS_TOKEN, r.token); } catch (e) {}
    }
    if (r && r.ok && r.progress && r.progress.studentId) {
      try { localStorage.setItem(LS_ME, JSON.stringify({ id: r.progress.studentId, name: r.progress.displayName || r.progress.studentId })); } catch (e) {}
      cacheProgress(r.progress);
    }
    return r;
  }
  API.clearToken = function () {
    state.token = null;
    state.lastCloudSave = 0;
    try { localStorage.removeItem(LS_TOKEN); localStorage.removeItem(LS_ME); } catch (e) {}
  };

  global.API = API;
})(window);
