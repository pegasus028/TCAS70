/* ===========================================================================
   TCAS70 LAUNCHPAD — Code.gs
   Google Apps Script backend for the self-study app (index.html + student.js)
   and the teacher console (teacher.html + teacher.js). The browser side of this
   contract lives in api.js; every action and response field below is the one
   that file, student.js and teacher.js actually send and read.

   ---------------------------------------------------------------------------
   DEPLOYMENT, STEP BY STEP
   ---------------------------------------------------------------------------
   1. Create a new, empty Google Sheet (sheets.new). Name it something you will
      recognise, e.g. "TCAS70 Launchpad — M.6". The teacher console shows this
      name when it connects, so you can tell at a glance which sheet answers.
   2. In that Sheet: Extensions → Apps Script.
   3. Delete whatever is in Code.gs there and paste this whole file. Save.
   4. (Optional, recommended) Project Settings (gear icon) → Script Properties →
      Add property:
        TEACHER_PIN   your PIN for teacher.html        (default is 1234)
        TEACHER_AUTH  strict | open                    (default strict — see
                      "TEACHER SIGN-IN" below before changing it)
   5. Deploy → New deployment → gear next to "Select type" → Web app.
        Description:      anything
        Execute as:       Me
        Who has access:   Anyone
      → Deploy. Authorise the script when Google asks (Advanced → Go to …).
   6. Copy the Web app URL that ends in /exec.
   7. Paste it into BOTH pages, replacing the empty string:
        index.html    <script>window.MC_API_URL = 'https://script.google.com/macros/s/…/exec';</script>
        teacher.html  <script>window.MC_API_URL = 'https://script.google.com/macros/s/…/exec';</script>
      Commit and push to GitHub Pages.
   8. Test: open the /exec URL in a browser — you should see a small JSON ping.
      Then open teacher.html, sign in with the PIN: the top bar should say
      "Connected · <your sheet name>".

   IMPORTANT — SAVING IS NOT DEPLOYING.
   Editing and saving this file does NOT change what the live /exec URL runs.
   After every edit: Deploy → Manage deployments → pencil (Edit) on the active
   deployment → Version: "New version" → Deploy. The /exec URL stays the same.
   (Do not make a *new deployment* — that issues a different URL.)

   ---------------------------------------------------------------------------
   WHAT IS STORED (tabs are created on demand, header row frozen)
   ---------------------------------------------------------------------------
   Students     id, name, pwHash, salt, created, lastSeen, seen, xp,
                progressParts, progress_1, progress_2, …
                The progress JSON is split into 45,000-character slices across
                progress_1…progress_N (a cell holds 50,000).
   Attempts     one row per answer the client queues (engine.recordAttempt +
                given/expected/mode); unknown fields go to "extra" as JSON.
   Tests        one row per finished simulation (the client's kind:'mock' row).
   Sessions     one row per sign-in; the end call fills in logout/duration.
   Assignments  log of every paper the teacher set (the live copy is
                progress.assignment inside the student's progress).
   Tokens       SHA-256 of each issued token, role, student, expiry.
                (The raw token is never stored.)

   Passwords: salted SHA-256 (Utilities.computeDigest), stretched 64 rounds.

   ---------------------------------------------------------------------------
   SAVE RULE — never let an older device overwrite newer progress
   ---------------------------------------------------------------------------
   engine.js keeps one counter that only ever goes up: progress.stats.seen
   (recordAttempt does p.stats.seen++ for every answer, and nothing lowers it).
   On "save":
     • incoming.stats.seen  <  stored.stats.seen  →  the stored progress is
       KEPT. The response is { ok:true, kept:'server', progress:<stored> }.
       The answer rows in the same request are still appended (they are real
       answers), so ok stays true and the client clears its outbox.
     • otherwise the incoming progress replaces the stored one
       ({ ok:true, kept:'client' }), EXCEPT that a paper the teacher set is
       carried over: if the stored progress.assignment has an assignmentId the
       incoming copy lacks (or an older createdAt), the stored assignment wins.
       Without this, the student's next autosave would wipe a freshly set paper
       because their in-memory copy pre-dates it.
     • If the server copy is kept but the incoming copy has completed the same
       assignment, the completion (done/score/completedAt) is copied across.
   Note: the current student.js ignores the body of a save response (sync()
   only uses r.ok), so a stale tab does not adopt the server copy until the
   student signs in again — login always returns the stored progress.

   ---------------------------------------------------------------------------
   TEACHER SIGN-IN
   ---------------------------------------------------------------------------
   teacherLogin checks the PIN and returns { ok, token, teacherToken }.
   The teacher actions (roster with full progress, detail, assign) accept, in
   order: payload.teacherToken, payload.pin, or payload.token if that token is
   a teacher token.
   This app's api.js keeps the teacherLogin token (sessionStorage
   'tc70.tToken') and sends it as payload.teacherToken. So:
     TEACHER_AUTH = strict (default)  teacher actions need a teacher credential.
     TEACHER_AUTH = open              a request with no credential at all is
                                      treated as the teacher console (only for
                                      an older client that sends no token).
   A request carrying a student token is never given the full roster: the class
   board in student.js gets a slim projection (id, name, answered count and
   which rules have been met) — never another student's answers or scores.

   ---------------------------------------------------------------------------
   MAINTENANCE
   ---------------------------------------------------------------------------
   purgeListed()  removes every row for the IDs in TO_PURGE from every tab.
                  Run it from the editor (select purgeListed → Run). It is not
                  reachable from the web app.
   =========================================================================== */

/* ----------------------------------------------------------------- config */
var TO_PURGE = [
  /* 'm6-test', 'demo1' */
];

var APP_NAME = 'TCAS70 Launchpad';
var CHUNK = 45000;                        // progress slice per cell (limit 50,000)
var STUDENT_TOKEN_DAYS = 120;             // a student stays signed in for a term
var TEACHER_TOKEN_HOURS = 12;
var LOCK_WAIT_MS = 10000;                 // api.js gives up after 14 s
var PW_ROUNDS = 64;
var DETAIL_MAX_ATTEMPTS = 3000;
var DEDUP_WINDOW = 1500;                  // recent Attempts rows checked for duplicates
var ID_RE = /^[a-z0-9._-]{3,24}$/;

/* Column schemas. 's' = text, 'n' = number, 'j' = JSON text. */
var SCHEMA = {
  Students: [['id', 's'], ['name', 's'], ['pwHash', 's'], ['salt', 's'], ['created', 's'],
             ['lastSeen', 's'], ['seen', 'n'], ['xp', 'n'], ['progressParts', 'n'], ['progress_1', 's']],
  Attempts: [['ts', 's'], ['studentId', 's'], ['itemId', 's'], ['topic', 's'], ['level', 's'],
             ['type', 's'], ['tag', 's'], ['cefr', 's'], ['correct', 'n'], ['ms', 'n'],
             ['hinted', 'n'], ['fast', 'n'], ['given', 's'], ['expected', 's'], ['mode', 's'],
             ['received', 's'], ['extra', 'j']],
  Tests:    [['ts', 's'], ['studentId', 's'], ['mockId', 's'], ['marks', 'n'], ['total', 'n'],
             ['pct', 'n'], ['durationSec', 'n'], ['sections', 'j'], ['received', 's']],
  Sessions: [['sessionId', 's'], ['studentId', 's'], ['loginTs', 's'], ['logoutTs', 's'],
             ['durationSec', 'n'], ['items', 'n'], ['correct', 'n']],
  Assignments: [['assignedAt', 's'], ['studentId', 's'], ['assignmentId', 's'], ['topicId', 's'],
                ['n', 'n'], ['itemIds', 'j'], ['createdAt', 's']],
  Tokens:   [['tokenHash', 's'], ['role', 's'], ['studentId', 's'], ['created', 's'], ['expires', 's']]
};
var STUDENT_COL = { Students: 'id', Attempts: 'studentId', Tests: 'studentId', Sessions: 'studentId',
                    Assignments: 'studentId', Tokens: 'studentId' };
var P1 = 10;   // 1-based column of progress_1 in Students

/* =================================================================== HTTP */
function doGet() {
  return json_(ping_());
}

function doPost(e) {
  var out;
  try {
    var body = (e && e.postData && e.postData.contents) || '{}';
    var req = JSON.parse(body);
    var action = String(req.action || '');
    var p = req.payload || {};
    var fn = ACTIONS[action];
    out = fn ? fn(p) : { ok: false, error: 'Unknown action: ' + action };
  } catch (err) {
    out = { ok: false, error: 'Server error: ' + (err && err.message ? err.message : String(err)) };
  }
  return json_(out);
}

var ACTIONS = {
  ping: function () { return ping_(); },
  register: register_,
  login: login_,
  save: save_,
  session: session_,
  teacherLogin: teacherLogin_,
  roster: roster_,
  detail: detail_,
  assign: assign_
};

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/* ================================================================ actions */

/* ping → { ok, app, sheet, students, time }   (teacher.js reads sheet) */
function ping_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Students');
  var n = sh ? Math.max(0, sh.getLastRow() - 1) : 0;
  return { ok: true, app: APP_NAME, sheet: ss.getName(), students: n, time: new Date().toISOString() };
}

/* register {id, pw, name} → { ok, token, progress } | { ok:false, error } */
function register_(p) {
  var id = normId_(p.id), pw = String(p.pw || ''), name = cleanName_(p.name) || id;
  if (!ID_RE.test(id)) return { ok: false, error: 'Use 3-24 letters, numbers, dots or dashes, with no spaces.' };
  if (pw.length < 4) return { ok: false, error: 'Your password needs at least 4 characters.' };
  return withLock_(function () {
    var sh = sheet_('Students');
    if (findRow_(sh, 1, id)) return { ok: false, error: 'That student ID is already taken. Try logging in instead.' };
    var salt = randomHex_(16), now = iso_();
    var progress = blankProgress_(id, name);
    var row = sh.getLastRow() + 1;
    ensureRows_(sh, row);
    writeCells_(sh, row, 1, [[id, name, hashPw_(pw, salt), salt, now, now, 0, 0, 0]], 'Students');
    writeProgress_(sh, row, progress);
    var token = issueToken_('student', id, STUDENT_TOKEN_DAYS * 86400000);
    return { ok: true, token: token, progress: progress };
  });
}

/* login {id, pw} → { ok, token, progress } | { ok:false, error } */
function login_(p) {
  var id = normId_(p.id), pw = String(p.pw || '');
  var cache = CacheService.getScriptCache(), fk = 'fail_' + id;
  var fails = Number(cache.get(fk) || 0);
  if (fails >= 10) return { ok: false, error: 'Too many wrong passwords. Wait 15 minutes and try again.' };
  var sh = sheet_('Students');
  var row = findRow_(sh, 1, id);
  if (!row) return { ok: false, error: 'No account with that ID. Create one first.' };
  var s = readStudent_(sh, row);
  if (s.pwHash !== hashPw_(pw, s.salt)) {
    cache.put(fk, String(fails + 1), 900);
    return { ok: false, error: 'Wrong password.' };
  }
  cache.remove(fk);
  return withLock_(function () {
    writeCells_(sh, row, 6, [[iso_()]], 'Students', 5);
    var token = issueToken_('student', id, STUDENT_TOKEN_DAYS * 86400000);
    return { ok: true, token: token, progress: s.progress || blankProgress_(id, s.name) };
  });
}

/* save {progress, attempts[], token}
   → { ok, kept:'client'|'server', attemptsSaved, mocksSaved, skipped, [progress] } */
function save_(p) {
  var tok = checkToken_(p.token);
  if (!tok || tok.role !== 'student') return { ok: false, error: 'Please sign in again.', auth: false };
  var id = tok.studentId;
  var incoming = p.progress;
  if (!incoming || typeof incoming !== 'object') return { ok: false, error: 'No progress sent.' };
  if (incoming.studentId && normId_(incoming.studentId) !== id) {
    return { ok: false, error: 'This progress belongs to a different account. Please sign in again.', auth: false };
  }
  incoming.studentId = id;

  return withLock_(function () {
    var sh = sheet_('Students');
    var row = findRow_(sh, 1, id);
    if (!row) return { ok: false, error: 'No account with that ID. Create one first.' };
    var s = readStudent_(sh, row);

    /* 1. the answers — always kept, whatever happens to the progress */
    var rows = Array.isArray(p.attempts) ? p.attempts : [];
    var ans = [], mocks = [], skipped = 0;
    rows.forEach(function (a) {
      if (!a || typeof a !== 'object') { skipped++; return; }
      if (a.studentId && normId_(a.studentId) !== id) { skipped++; return; }   // another account's leftovers
      a.studentId = id;
      if (a.kind === 'mock') mocks.push(a); else ans.push(a);
    });
    var nA = appendRows_('Attempts', ans, function (a) { return [a.ts, a.studentId, a.itemId, a.mode].join('|'); }, [1, 2, 3, 15]);
    var nM = appendRows_('Tests', mocks, function (a) { return [a.ts, a.studentId, a.mockId].join('|'); }, [1, 2, 3]);

    /* 2. the progress — never replaced by an older/emptier copy */
    var stored = s.progress;
    var res = { ok: true, attemptsSaved: nA, mocksSaved: nM, skipped: skipped };
    if (stored && seenOf_(incoming) < seenOf_(stored)) {
      var sa = stored.assignment, ia = incoming.assignment;
      if (sa && ia && sa.assignmentId && sa.assignmentId === ia.assignmentId && ia.done && !sa.done) {
        sa.done = true; sa.score = ia.score; sa.completedAt = ia.completedAt;
        writeProgress_(sh, row, stored);
      }
      writeCells_(sh, row, 6, [[iso_()]], 'Students', 5);
      res.kept = 'server';
      res.progress = stored;
      return res;
    }
    if (stored && stored.assignment && stored.assignment.assignmentId) {
      var a2 = incoming.assignment;
      if (!a2 || !a2.assignmentId ||
          (a2.assignmentId !== stored.assignment.assignmentId &&
           String(stored.assignment.createdAt || '') > String(a2.createdAt || ''))) {
        incoming.assignment = stored.assignment;
      }
    }
    if (incoming.displayName) incoming.displayName = cleanName_(incoming.displayName) || s.name;
    writeProgress_(sh, row, incoming);
    writeCells_(sh, row, 2, [[incoming.displayName || s.name]], 'Students', 1);
    writeCells_(sh, row, 6, [[iso_()]], 'Students', 5);
    res.kept = 'client';
    return res;
  });
}

/* session {kind:'start'|'end', row, token} → { ok } */
function session_(p) {
  var tok = checkToken_(p.token);
  if (!tok || tok.role !== 'student') return { ok: false, error: 'Please sign in again.', auth: false };
  var r = p.row || {};
  if (!r.sessionId) return { ok: false, error: 'No session id.' };
  var id = tok.studentId;
  return withLock_(function () {
    var sh = sheet_('Sessions');
    if (p.kind === 'start') {
      appendObjects_('Sessions', [{ sessionId: r.sessionId, studentId: id, loginTs: r.loginTs || iso_(),
                                    logoutTs: '', durationSec: 0, items: 0, correct: 0 }]);
      return { ok: true };
    }
    var row = findRowFromBottom_(sh, 1, String(r.sessionId));
    var dur = Number(r.durationSec) || 0, out = r.logoutTs || iso_();
    if (row) {
      var owner = String(sh.getRange(row, 2).getValue());
      if (owner !== id) return { ok: false, error: 'Not your session.' };
      writeCells_(sh, row, 4, [[out, dur, Number(r.items) || 0, Number(r.correct) || 0]], 'Sessions', 3);
    } else {
      /* the start call never arrived (offline at sign-in) — reconstruct it */
      appendObjects_('Sessions', [{ sessionId: r.sessionId, studentId: id,
        loginTs: new Date(new Date(out).getTime() - dur * 1000).toISOString(),
        logoutTs: out, durationSec: dur, items: Number(r.items) || 0, correct: Number(r.correct) || 0 }]);
    }
    return { ok: true };
  });
}

/* teacherLogin {pin} → { ok, token, teacherToken, expires } | { ok:false, error } */
function teacherLogin_(p) {
  var cache = CacheService.getScriptCache();
  var fails = Number(cache.get('fail_teacher') || 0);
  if (fails >= 10) return { ok: false, error: 'Too many wrong PINs. Wait 15 minutes.' };
  if (!pinOk_(p.pin)) {
    cache.put('fail_teacher', String(fails + 1), 900);
    return { ok: false, error: 'Wrong teacher PIN.' };
  }
  cache.remove('fail_teacher');
  return withLock_(function () {
    pruneTokens_();
    var t = issueToken_('teacher', '', TEACHER_TOKEN_HOURS * 3600000);
    return { ok: true, token: t, teacherToken: t,
             expires: new Date(Date.now() + TEACHER_TOKEN_HOURS * 3600000).toISOString() };
  });
}

/* roster {} → { ok, students:[{id, name, created, lastSeen, progress}] }
   Teacher: full progress. Student (class board): slim projection only. */
function roster_(p) {
  var who = caller_(p);
  if (who === 'denied') return { ok: false, error: 'Teacher sign-in required.' };
  var list = allStudents_();
  if (who === 'teacher') {
    /* lastLogin lets the console spot a stuck sync: a student who has signed
       in since their last successful save has answers that never arrived. */
    var logins = lastLogins_();
    return { ok: true, students: list.map(function (s) {
      return { id: s.id, name: s.name, created: s.created, lastSeen: s.lastSeen,
               lastLogin: logins[s.id] || '',
               progress: s.progress || blankProgress_(s.id, s.name) };
    }) };
  }
  return { ok: true, students: list.map(slim_) };
}

/* detail {id} → { ok, student:{id,name,created,lastSeen}, progress, attempts[], sessions[], mocks[] } */
function detail_(p) {
  if (caller_(p) !== 'teacher') return { ok: false, error: 'Teacher sign-in required.' };
  var id = normId_(p.id);
  var sh = sheet_('Students');
  var row = findRow_(sh, 1, id);
  if (!row) return { ok: false, error: 'Not found' };
  var s = readStudent_(sh, row);
  var attempts = readObjects_('Attempts', id);
  if (attempts.length > DETAIL_MAX_ATTEMPTS) attempts = attempts.slice(-DETAIL_MAX_ATTEMPTS);
  return {
    ok: true,
    student: { id: s.id, name: s.name, created: s.created, lastSeen: s.lastSeen },
    progress: s.progress || blankProgress_(s.id, s.name),
    attempts: attempts,
    sessions: readObjects_('Sessions', id),
    mocks: readObjects_('Tests', id).map(function (m) { m.kind = 'mock'; return m; })
  };
}

/* assign {id, paper} → { ok } — paper becomes progress.assignment */
function assign_(p) {
  if (caller_(p) !== 'teacher') return { ok: false, error: 'Teacher sign-in required.' };
  var id = normId_(p.id), paper = p.paper;
  if (!paper || typeof paper !== 'object') return { ok: false, error: 'No paper sent.' };
  return withLock_(function () {
    var sh = sheet_('Students');
    var row = findRow_(sh, 1, id);
    if (!row) return { ok: false, error: 'Not found' };
    var s = readStudent_(sh, row);
    var prog = s.progress || blankProgress_(id, s.name);
    if (!paper.assignmentId) paper.assignmentId = 'A' + Date.now().toString(36);
    if (!paper.createdAt) paper.createdAt = iso_();
    prog.assignment = paper;
    writeProgress_(sh, row, prog);
    appendObjects_('Assignments', [{ assignedAt: iso_(), studentId: id, assignmentId: paper.assignmentId,
      topicId: paper.topicId || '', n: (paper.itemIds || []).length, itemIds: paper.itemIds || [],
      createdAt: paper.createdAt }]);
    return { ok: true, assignmentId: paper.assignmentId };
  });
}

/* ================================================================ helpers */

function iso_() { return new Date().toISOString(); }
function normId_(x) { return String(x == null ? '' : x).trim().toLowerCase(); }
function cleanName_(x) { return String(x == null ? '' : x).replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 60); }
function seenOf_(p) { return Number(p && p.stats && p.stats.seen) || 0; }

/* Mirrors engine.js Progress.blank() so a new account and a teacher-assigned
   paper on an untouched account have the shape the client expects. */
function blankProgress_(id, name) {
  return {
    studentId: id, displayName: name || id,
    xp: 0, streak: 0, longestStreak: 0, lastActiveDate: null,
    sessions: 0, runBest: 0, run: 0, reclaimed: 0, speedBonuses: 0,
    subs: {}, checks: {}, mocks: {}, plans: {}, badges: [], review: {},
    stats: { seen: 0, correct: 0, byTag: {} },
    assignment: null, created: iso_()
  };
}

/* What the class board in student.js needs and nothing more:
   stats.seen (ranking + class total), which rules have been met at all
   (P.tagsCovered checks byTag[tag].a), and empty subs/checks so
   P.readiness() runs without throwing. No scores, answers or accuracy. */
function slim_(s) {
  var st = (s.progress && s.progress.stats) || {};
  var byTag = {};
  Object.keys(st.byTag || {}).forEach(function (t) { if (st.byTag[t] && st.byTag[t].a) byTag[t] = { a: 1 }; });
  return {
    id: s.id, name: s.name,
    progress: { studentId: s.id, displayName: s.name,
                stats: { seen: Number(st.seen) || 0, correct: 0, byTag: byTag },
                subs: {}, checks: {}, mocks: {} }
  };
}

/* ------------------------------------------------------------------ auth */
function sha256Hex_(s) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { var v = (b < 0 ? b + 256 : b).toString(16); return v.length < 2 ? '0' + v : v; }).join('');
}
function hashPw_(pw, salt) {
  var h = sha256Hex_(salt + ':' + pw);
  for (var i = 1; i < PW_ROUNDS; i++) h = sha256Hex_(salt + h);
  return h;
}
function randomHex_(n) {
  var s = '';
  while (s.length < n) s += Utilities.getUuid().replace(/-/g, '');
  return s.slice(0, n);
}
function pinOk_(pin) {
  var want = PropertiesService.getScriptProperties().getProperty('TEACHER_PIN') || '1234';
  return pin != null && String(pin).trim() === String(want).trim();
}
function teacherAuthMode_() {
  return (PropertiesService.getScriptProperties().getProperty('TEACHER_AUTH') || 'strict').toLowerCase();
}

function issueToken_(role, studentId, ttlMs) {
  var token = (role === 'teacher' ? 't_' : 's_') + randomHex_(40);
  var now = Date.now();
  var rec = { role: role, studentId: studentId, expires: new Date(now + ttlMs).toISOString() };
  appendObjects_('Tokens', [{ tokenHash: sha256Hex_(token), role: role, studentId: studentId,
                              created: new Date(now).toISOString(), expires: rec.expires }]);
  CacheService.getScriptCache().put('tok_' + sha256Hex_(token), JSON.stringify(rec), 21600);
  return token;
}

/* → { role, studentId } or null. Cache first, sheet second. */
function checkToken_(token) {
  if (!token || typeof token !== 'string' || token.length > 100) return null;
  var h = sha256Hex_(token), cache = CacheService.getScriptCache();
  var hit = cache.get('tok_' + h), rec = null;
  if (hit) rec = JSON.parse(hit);
  else {
    var sh = sheet_('Tokens');
    var row = findRowFromBottom_(sh, 1, h);
    if (!row) return null;
    var v = sh.getRange(row, 1, 1, 5).getValues()[0];
    rec = { role: String(v[1]), studentId: String(v[2]), expires: str_(v[4]) };
    cache.put('tok_' + h, JSON.stringify(rec), 21600);
  }
  if (!rec.expires || new Date(rec.expires).getTime() < Date.now()) return null;
  return rec;
}

/* 'teacher' | 'student' | 'denied' */
function caller_(p) {
  if (p.teacherToken) { var t = checkToken_(p.teacherToken); if (t && t.role === 'teacher') return 'teacher'; }
  if (p.pin != null && pinOk_(p.pin)) return 'teacher';
  if (p.token) {
    var k = checkToken_(p.token);
    if (k && k.role === 'teacher') return 'teacher';
    return 'student';           // any student token, valid or stale, gets the slim view
  }
  return teacherAuthMode_() === 'strict' ? 'denied' : 'teacher';
}

function pruneTokens_() {
  var sh = sheet_('Tokens');
  var n = sh.getLastRow() - 1;
  if (n < 300) return;
  var v = sh.getRange(2, 5, n, 1).getValues(), now = Date.now(), runs = [], start = -1;
  for (var i = 0; i <= n; i++) {
    var dead = i < n && new Date(str_(v[i][0])).getTime() < now;
    if (dead && start < 0) start = i;
    if (!dead && start >= 0) { runs.push([start + 2, i - start]); start = -1; }
  }
  for (var r = runs.length - 1; r >= 0; r--) sh.deleteRows(runs[r][0], runs[r][1]);
}

/* ------------------------------------------------------------------ lock */
function withLock_(fn) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(LOCK_WAIT_MS)) {
    return { ok: false, error: 'The class server is busy. Try again in a moment.', busy: true };
  }
  try {
    var out = fn();
    SpreadsheetApp.flush();
    return out;
  } finally {
    lock.releaseLock();
  }
}

/* ---------------------------------------------------------------- sheets */
function sheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    var head = SCHEMA[name].map(function (c) { return c[0]; });
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function str_(v) {
  if (v instanceof Date) return v.toISOString();
  return v == null ? '' : String(v);
}

/* Text is written with a leading apostrophe so Sheets never turns an ISO
   timestamp into a Date, "1/2" into a fraction or "=…" into a formula.
   getValues() returns the text without the apostrophe. */
function cell_(v, type) {
  if (type === 'n') { var n = Number(v); return isFinite(n) ? n : 0; }
  if (type === 'j') v = (v == null || v === '') ? '' : JSON.stringify(v);
  v = v == null ? '' : String(v);
  return v === '' ? '' : "'" + v;
}
function uncell_(v, type) {
  if (type === 'n') return Number(v) || 0;
  var s = str_(v);
  if (type === 'j') { if (!s) return null; try { return JSON.parse(s); } catch (e) { return s; } }
  return s;
}

/* writeCells_(sheet, row, col, [[values]], tab, schemaOffset) — values are
   typed by the tab's schema starting at schemaOffset (default col-1). */
function writeCells_(sh, row, col, vals, tab, off) {
  var sc = SCHEMA[tab], o = off == null ? col - 1 : off;
  var out = vals.map(function (r) {
    return r.map(function (v, i) { var c = sc[o + i]; return cell_(v, c ? c[1] : 's'); });
  });
  sh.getRange(row, col, out.length, out[0].length).setValues(out);
}

function ensureRows_(sh, lastNeeded) {
  var max = sh.getMaxRows();
  if (lastNeeded > max) sh.insertRowsAfter(max, Math.max(lastNeeded - max, 100));
}
function ensureCols_(sh, lastNeeded) {
  var max = sh.getMaxColumns();
  if (lastNeeded > max) sh.insertColumnsAfter(max, lastNeeded - max);
}

function findRow_(sh, col, key) {
  var n = sh.getLastRow() - 1;
  if (n < 1) return 0;
  var v = sh.getRange(2, col, n, 1).getValues();
  for (var i = 0; i < n; i++) if (str_(v[i][0]) === key) return i + 2;
  return 0;
}
function findRowFromBottom_(sh, col, key) {
  var n = sh.getLastRow() - 1;
  if (n < 1) return 0;
  var v = sh.getRange(2, col, n, 1).getValues();
  for (var i = n - 1; i >= 0; i--) if (str_(v[i][0]) === key) return i + 2;
  return 0;
}

/* Objects → rows by schema; fields the schema lacks go to "extra". */
function appendObjects_(tab, objs) {
  if (!objs.length) return 0;
  var sc = SCHEMA[tab], names = sc.map(function (c) { return c[0]; });
  var hasExtra = names.indexOf('extra') >= 0, hasRecv = names.indexOf('received') >= 0, now = iso_();
  var rows = objs.map(function (o) {
    var extra = {}, any = false;
    if (hasExtra) Object.keys(o).forEach(function (k) {
      if (names.indexOf(k) < 0 && k !== 'kind') { extra[k] = o[k]; any = true; }
    });
    return sc.map(function (c) {
      var k = c[0], v = o[k];
      if (k === 'extra') v = any ? extra : '';
      if (k === 'received' && hasRecv) v = now;
      return cell_(v, c[1]);
    });
  });
  var sh = sheet_(tab), start = sh.getLastRow() + 1;
  ensureRows_(sh, start + rows.length - 1);
  sh.getRange(start, 1, rows.length, sc.length).setValues(rows);
  return rows.length;
}

/* Append with de-duplication against the recent tail of the tab: the same
   answers can arrive twice (a sendBeacon on pagehide racing an ordinary save). */
function appendRows_(tab, objs, keyFn, keyCols) {
  if (!objs.length) return 0;
  var sh = sheet_(tab), last = sh.getLastRow(), seen = {};
  if (last > 1) {
    var from = Math.max(2, last - DEDUP_WINDOW + 1);
    var maxCol = Math.max.apply(null, keyCols);
    var v = sh.getRange(from, 1, last - from + 1, maxCol).getValues();
    v.forEach(function (r) { seen[keyCols.map(function (c) { return str_(r[c - 1]); }).join('|')] = 1; });
  }
  var fresh = [];
  objs.forEach(function (o) {
    var k = keyFn(o).split('|').map(function (x) { return x == null || x === 'undefined' ? '' : x; }).join('|');
    if (seen[k]) return;
    seen[k] = 1; fresh.push(o);
  });
  return appendObjects_(tab, fresh);
}

/* All rows of a tab for one student, as objects (extra merged back in). */
function readObjects_(tab, studentId) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), sh = ss.getSheetByName(tab);
  if (!sh || sh.getLastRow() < 2) return [];
  var sc = SCHEMA[tab], v = sh.getRange(2, 1, sh.getLastRow() - 1, sc.length).getValues();
  var sidx = sc.map(function (c) { return c[0]; }).indexOf('studentId'), out = [];
  v.forEach(function (r) {
    if (str_(r[sidx]) !== studentId) return;
    var o = {};
    sc.forEach(function (c, i) {
      var val = uncell_(r[i], c[1]);
      if (c[0] === 'extra') { if (val && typeof val === 'object') Object.keys(val).forEach(function (k) { o[k] = val[k]; }); }
      else if (c[0] !== 'received') o[c[0]] = val;
    });
    out.push(o);
  });
  return out;
}

/* ------------------------------------------------------ student records */
function readStudent_(sh, row) {
  var width = Math.max(sh.getLastColumn(), P1);
  var v = sh.getRange(row, 1, 1, width).getValues()[0];
  var parts = Number(v[8]) || 0, json = '';
  for (var i = 0; i < parts; i++) json += str_(v[P1 - 1 + i]);
  var prog = null;
  if (json) { try { prog = JSON.parse(json); } catch (e) { prog = null; } }
  return { id: str_(v[0]), name: str_(v[1]), pwHash: str_(v[2]), salt: str_(v[3]),
           created: str_(v[4]), lastSeen: str_(v[5]), progress: prog };
}

/* studentId → latest loginTs on the Sessions tab (one read of two columns). */
function lastLogins_() {
  var out = {};
  try {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sessions');
    if (!sh || sh.getLastRow() < 2) return out;
    var v = sh.getRange(2, 2, sh.getLastRow() - 1, 2).getValues();
    v.forEach(function (r) {
      var id = str_(r[0]), ts = str_(r[1]);
      if (id && ts && (!out[id] || ts > out[id])) out[id] = ts;
    });
  } catch (e) {}
  return out;
}

function allStudents_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), sh = ss.getSheetByName('Students');
  if (!sh || sh.getLastRow() < 2) return [];
  var width = Math.max(sh.getLastColumn(), P1);
  var v = sh.getRange(2, 1, sh.getLastRow() - 1, width).getValues();
  return v.filter(function (r) { return str_(r[0]); }).map(function (r) {
    var parts = Number(r[8]) || 0, json = '', prog = null;
    for (var i = 0; i < parts; i++) json += str_(r[P1 - 1 + i]);
    if (json) { try { prog = JSON.parse(json); } catch (e) { prog = null; } }
    return { id: str_(r[0]), name: str_(r[1]), created: str_(r[4]), lastSeen: str_(r[5]), progress: prog };
  });
}

/* Splits the JSON into 45,000-char slices across progress_1…progress_N,
   adding header columns as needed and blanking slices left over from a
   longer earlier version. Also refreshes the seen / xp summary columns. */
function writeProgress_(sh, row, prog) {
  var json = JSON.stringify(prog), parts = [];
  for (var i = 0; i < json.length; i += CHUNK) parts.push(json.slice(i, i + CHUNK));
  if (!parts.length) parts.push('');
  var oldParts = Number(sh.getRange(row, 9).getValue()) || 0;
  var need = P1 - 1 + Math.max(parts.length, oldParts);
  ensureCols_(sh, need);
  if (str_(sh.getRange(1, P1 - 1 + parts.length).getValue()) !== 'progress_' + parts.length) {
    var heads = [];
    for (var k = 1; k <= parts.length; k++) heads.push('progress_' + k);
    sh.getRange(1, P1, 1, heads.length).setValues([heads]).setFontWeight('bold');
  }
  var cells = [];
  for (var j = 0; j < Math.max(parts.length, oldParts); j++) cells.push(j < parts.length ? cell_(parts[j], 's') : '');
  sh.getRange(row, P1, 1, cells.length).setValues([cells]);
  sh.getRange(row, 7, 1, 3).setValues([[seenOf_(prog), Number(prog.xp) || 0, parts.length]]);
}

/* ============================================================ maintenance */
/* Run from the editor only (not exposed through doPost). Removes every row
   belonging to the IDs in TO_PURGE from every tab, and forgets their tokens. */
function purgeListed() {
  var ids = {};
  TO_PURGE.forEach(function (x) { var k = normId_(x); if (k) ids[k] = 1; });
  if (!Object.keys(ids).length) { Logger.log('TO_PURGE is empty — nothing to do.'); return; }
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet(), report = [];
    Object.keys(STUDENT_COL).forEach(function (tab) {
      var sh = ss.getSheetByName(tab);
      if (!sh || sh.getLastRow() < 2) return;
      var col = SCHEMA[tab].map(function (c) { return c[0]; }).indexOf(STUDENT_COL[tab]) + 1;
      var n = sh.getLastRow() - 1, v = sh.getRange(2, col, n, 1).getValues();
      var cache = CacheService.getScriptCache(), hashes = [];
      if (tab === 'Tokens') hashes = sh.getRange(2, 1, n, 1).getValues();
      var runs = [], start = -1, removed = 0;
      for (var i = 0; i <= n; i++) {
        var hit = i < n && ids[str_(v[i][0]).toLowerCase()];
        if (hit) { removed++; if (tab === 'Tokens') cache.remove('tok_' + str_(hashes[i][0])); }
        if (hit && start < 0) start = i;
        if (!hit && start >= 0) { runs.push([start + 2, i - start]); start = -1; }
      }
      for (var r = runs.length - 1; r >= 0; r--) sh.deleteRows(runs[r][0], runs[r][1]);
      report.push(tab + ': ' + removed);
    });
    SpreadsheetApp.flush();
    Logger.log('Purged ' + Object.keys(ids).join(', ') + ' → ' + report.join(' · '));
  } finally {
    lock.releaseLock();
  }
}
