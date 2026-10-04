/* ===========================================================================
   TCAS70 LAUNCHPAD — content.js  (core)
   A-Level English (82) · 14 March 2570 (2027)
   Built on the Mission Control engine (pegasus028.github.io/Mission-Control).
   ---------------------------------------------------------------------------
   This file holds the rank ladder and the awards. Everything else loads after
   it and pushes onto the globals below:

     lexicon.js      LEXICON — the 280-entry TCAS70 word bank (flashcards)
     topic-t1..t13   the thirteen systems (each adds its REMEDIATION tags)
     media.js        podcast / video / slides per system
     mock-1..5.js    five full 80-item papers; mock-1 is the DIAGNOSTIC

   Item and theory formats: see SPEC.md in the repository.
   =========================================================================== */

var CEFR = ['B1', 'B1+', 'B2', 'B2+', 'C1', 'C1+'];

/* RANKS — one rung per band of systems checks cleared (39 in total).
   The ladder is the admission journey itself. */
var RANKS = [
  { min: 0,  name: 'Dreamer',        note: 'The paper is in March. The plan starts now.' },
  { min: 1,  name: 'Applicant',      note: 'First level green.' },
  { min: 4,  name: 'Contender',      note: 'The everyday systems hold under pressure.' },
  { min: 8,  name: 'Scorer 50',      note: 'Half the paper is safe ground.' },
  { min: 13, name: 'Scorer 60',      note: 'You can say why the wrong answers are wrong.' },
  { min: 18, name: 'Scorer 70',      note: 'Reading, grammar and dialogue all green in places.' },
  { min: 24, name: 'Scorer 80',      note: 'Faculty cut-offs start to look reachable.' },
  { min: 30, name: 'Scorer 90',      note: 'Very little on the paper can surprise you.' },
  { min: 35, name: 'Top Scorer',     note: 'Nearly every system green.' },
  { min: 39, name: 'Admitted',       note: 'Every system green. Go and sit it.' }
];

/* AWARDS — ids must match BADGE_TESTS in engine.js. */
var BADGES = [
  { id: 'poweron',   name: 'First Step',       perk: 'The launchpad is yours.',               how: 'Finish your first lesson.' },
  { id: 'streak3',   name: 'Three-Day Habit',  perk: 'Momentum is a skill.',                  how: 'Study 3 days in a row.' },
  { id: 'streak7',   name: 'Week Warrior',     perk: 'Seven days, no gap.',                   how: 'Study 7 days in a row.' },
  { id: 'streak14',  name: 'Fortnight Focus',  perk: 'Two weeks without a break.',            how: 'Study 14 days in a row.' },
  { id: 'allgreen',  name: 'Clean Sheet',      perk: 'A perfect systems check.',              how: 'Score 100% on any systems check.' },
  { id: 'triple',    name: 'Hat-Trick',        perk: 'Three perfect checks.',                 how: 'Score 100% on three systems checks.' },
  { id: 'nohelp',    name: 'No Hints Needed',  perk: 'On your own.',                          how: 'Clear a systems check without using a hint.' },
  { id: 'recovered', name: 'Comeback',         perk: 'You fixed what you broke.',             how: 'Fix 5 questions on your Fault List.' },
  { id: 'run10',     name: 'Ten Straight',     perk: 'Ten in a row.',                         how: 'Answer 10 questions correctly in a row.' },
  { id: 'reflight',  name: 'Second Wind',      perk: 'A second attempt, taken.',              how: 'Pass a systems check you previously failed.' },
  { id: 'quick',     name: 'Fast Hands',       perk: '90 minutes for 80 questions: speed counts.', how: 'Earn 25 time bonuses by answering inside 7 seconds.' },
  { id: 'sim1',      name: 'Triage Done',      perk: 'You have seen the whole paper.',        how: 'Finish any full mock paper.' },
  { id: 'sim70',     name: 'Seventy Club',     perk: '70% on a full mock.',                   how: 'Score 70% or more on any full mock.' },
  { id: 'simall',    name: 'Five Papers Down', perk: 'Nothing left to surprise you.',         how: 'Finish all five mock papers.' },
  { id: 'director',  name: 'Admitted',         perk: 'Every system green.',                   how: 'Clear all 39 systems checks.' }
];

/* Filled by the topic files: Object.assign(REMEDIATION, {...}). */
var REMEDIATION = {};
var TOPICS = [];
var MOCKS = [];
