# TCAS70 Launchpad — A-Level English (82) self-study portal

A stand-alone prep portal for the TCAS70 A-Level English paper (Sunday 14 March 2570 / 2027).
Built on the Mission Control engine. Everything is static (GitHub Pages) plus an optional Apps Script class server.

**What's inside**

| | |
|---|---|
| Diagnostic → checklist | **Mock 1** is the triage paper. Every missed question puts the lesson that teaches it on the student's checklist. |
| Gated mocks | Mock N+1 opens when Mock N is sat **and 80% of its checklist is cleared**, or when the teacher sets it. Everything opens in the last 14 days (`GATE_MOCKS` in `roster.js`). |
| 13 systems | 39 levels, 117 lessons, 819 practice items, 39 Systems Checks. Lessons cover conversations, idioms and markers, ads and reviews, news, inference/tone, visuals and numbers, vocabulary, world knowledge, word forms, clauses, verbs, linkers and paragraph order. |
| Lesson lenses | Each lesson has tabs: Explain · Simple English · ภาษาไทย · Mind map · Story · Chant (with a built-in beat) · Moves. Each also includes an analogy and the exam trap. |
| 5 mock papers | 400 items in the exact A-Level format: 80 items, 4 options, 90 min, options printed shortest→longest, balanced keys. |
| Speed Lab | Six timed sprints at exam pace (Conversation, Text-Completion, Paragraph-Order, Reading, Vocab Blitz, Full-Pace 20). There are also Leitner flashcards for the 280-entry TCAS70 word bank (English → meaning + Thai + example). |
| Teacher console | `teacher.html`: roster, weak tags, mock breakdowns, set a paper, CSV export. |
| Print | `booklet.html?m=m1` (paper + key) · `&key=paper` · `&key=key`. |

## Deploy

1. Create a new GitHub repository (suggested name `TCAS70`), upload every file in this folder, and turn on Pages (Settings → Pages → main / root).
2. **Class server (optional but recommended):**
   - Make a new Google Sheet, then Extensions → Apps Script. Paste `Code.gs` and save.
   - Deploy → New deployment → Web app, with Execute as **Me** and Access **Anyone**. Copy the `/exec` URL.
   - Paste the URL into `window.MC_API_URL = ''` in **both** `index.html` and `teacher.html`.
   - The teacher PIN is `1234` until you set the Script Property `TEACHER_PIN`.
   - Remember: saving the script does not update the live endpoint. Use Deploy → Manage deployments → pencil → New version → Deploy.
3. Without a server the app still works, but progress stays in each student's browser.
4. **Every push:** run `node bump-version.js` (or `node bump-version.js 2026-10-06b`) first. It sets one new `?v=` string on every script and stylesheet tag in `index.html`, `teacher.html`, `booklet.html` and `podcasts.html`, so phones stop serving stale files.

### How saving works (Oct 2026)

- Students stay signed in across a reload. A mock in progress is kept on the device (`tc70.exam.<id>`) with its clock still running; on return the app offers to resume it, or marks it if time has run out.
- Answers queue in `tc70.outbox.v1` and are removed only when the class server acknowledges them. A dropped connection never discards them. The server ignores a row it already holds, so a row that goes up twice is harmless.
- If the server is unreachable at sign-in, the student is told so; no local-only account is created.
- The teacher console flags **sync stuck** for any student who has signed in more than a day after their last successful save (needs the `lastLogin` field, added to `Code.gs` in Oct 2026 — redeploy the script).
- Retakes of a mock alternate Set 1 / Set 2 (options in reverse order, as in the real exam). The first sitting is kept as `first` and shown as the benchmark.
- A module is cleared at 80% (4 of 5); "rules covered" counts only rules answered correctly.

Storage keys are `tc70.*`, so this app never collides with Mission Control or Fine Tuning on the same `pegasus028.github.io` origin.

## Podcasts and videos

`podcast-sources/system-01.md … system-13.md` are NotebookLM briefings, one per system.

1. Generate the episode and save it as `audio/system-NN.mp3`.
2. In `media.js`, set `podcast: 'audio/system-NN.mp3'` for that system (they start empty so no broken players show).
3. Paste a YouTube link into `video` when a video exists.

## Editing content

- Format rules are in `SPEC.md`. Run `node verify.js topic-t4.js` (or `mock-2.js`, or several files at once) after any edit; it must print `PASS`. Besides structure it checks: hints that contain the key, options not in shortest→longest order, mock key-position balance (18–22 each), the longest-option-is-key rate (≤25%), `why` texts that refer to an option by position, empty sort bins, and build items whose tiles allow other orderings (`--build-all` prints them all).
- Each lesson owns one tag. Mock items carry the same tags, which is how a wrong answer finds its lesson.
- Mock items must keep ids `mN-Q` (Q = question number).
