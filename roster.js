/* ===========================================================================
   TCAS70 LAUNCHPAD — roster.js
   ROSTER fills the "Class Fast Access" name picker. Leave it empty to hide
   the tab and have students create their own accounts.
   =========================================================================== */
var ROSTER_CLASS = 'M.6';

/* The A-Level English paper (subject 82): Sunday 14 March 2570 (2027),
   11:00–12:30, as on the official TCAS70 calendar (mytcas.com, updated
   18 Sept 2026). The same slot was used in TCAS68 and TCAS69. */
var EXAM_AT = '2027-03-14T11:00:00+07:00';

/* Mock papers unlock in order: Mock N+1 opens once Mock N is sat and 80% of
   its checklist is cleared, when the teacher opens it for a student, or on
   the class sitting date below. In the last fortnight every paper opens,
   except those in HOLD_TO_DATE. Set GATE_MOCKS to false to open all papers
   from day one. */
var GATE_MOCKS = true;

/* SWEP Semester 2 sitting dates (Bangkok time). Each paper opens for
   everyone on its date. Mock 5 is the dress rehearsal: it is held back until
   Sunday 7 March at 11:00, the real exam slot, a week before the paper. */
var MOCK_DATES = {
  m1: '2026-11-02T08:00:00+07:00',
  m2: '2026-12-14T08:00:00+07:00',
  m3: '2027-01-18T08:00:00+07:00',
  m4: '2027-02-08T08:00:00+07:00',
  m5: '2027-03-07T11:00:00+07:00'
};
var HOLD_TO_DATE = ['m5'];

var ROSTER = [
  /* { id: 'm6-ploy', name: 'Ploy' }, */
];
