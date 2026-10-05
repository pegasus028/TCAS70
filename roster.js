/* ===========================================================================
   TCAS70 LAUNCHPAD — roster.js
   ROSTER fills the "Class Fast Access" name picker. Leave it empty to hide
   the tab and have students create their own accounts.
   =========================================================================== */
var ROSTER_CLASS = 'M.6';

/* The A-Level English paper (subject 82): Sunday 14 March 2570 (2027).
   The English paper runs 11:00–12:30 (as in TCAS67–69). Check mytcas.com
   for the confirmed TCAS70 time and update if needed. */
var EXAM_AT = '2027-03-14T11:00:00+07:00';

/* Mock papers unlock in order: Mock N+1 opens once Mock N is sat and 80% of
   its checklist is cleared (or the teacher assigns it). In the last fortnight
   every paper opens. Set to false to open all papers from day one. */
var GATE_MOCKS = true;

var ROSTER = [
  /* { id: 'm6-ploy', name: 'Ploy' }, */
];
