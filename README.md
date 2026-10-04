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

Storage keys are `tc70.*`, so this app never collides with Mission Control or Fine Tuning on the same `pegasus028.github.io` origin.

## Podcasts and videos

`podcast-sources/system-01.md … system-13.md` are NotebookLM briefings, one per system.

1. Generate the episode and save it as `audio/system-NN.mp3`.
2. In `media.js`, set `podcast: 'audio/system-NN.mp3'` for that system (they start empty so no broken players show).
3. Paste a YouTube link into `video` when a video exists.

## Editing content

- Format rules are in `SPEC.md`. Run `node verify.js topic-t4.js` (or `mock-2.js`) after any edit; it must print `PASS`.
- Each lesson owns one tag. Mock items carry the same tags, which is how a wrong answer finds its lesson.
- Mock items must keep ids `mN-Q` (Q = question number).
