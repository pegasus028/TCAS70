/* ===========================================================================
   TCAS70 LAUNCHPAD — media.js
   One podcast (and optionally slides and a video) per system. The paths are
   pre-wired: record the episode in NotebookLM from podcast-sources/system-NN.md,
   save it as audio/system-NN.mp3, push, and the player appears. Paste a
   YouTube link into `video` when the explainer video exists.
   =========================================================================== */
var MEDIA = {
  t1:  { title: 'Conversation Code',                    podcast: '', slides: '', video: '' },
  t2:  { title: 'Idioms, Sayings & Discourse Markers',  podcast: '', slides: '', video: '' },
  t3:  { title: 'Ads & Reviews',                        podcast: '', slides: '', video: '' },
  t4:  { title: 'News & Articles: Understanding',       podcast: '', slides: '', video: '' },
  t5:  { title: 'Articles: Thinking',                   podcast: '', slides: '', video: '' },
  t6:  { title: 'Visuals & Numbers',                    podcast: '', slides: '', video: '' },
  t7:  { title: 'Vocabulary in Context',                podcast: '', slides: '', video: '' },
  t8:  { title: 'World Knowledge: the TCAS70 Radar',    podcast: '', slides: '', video: '' },
  t9:  { title: 'Word Forms & Word Order',              podcast: '', slides: '', video: '' },
  t10: { title: 'Clause Architecture',                  podcast: '', slides: '', video: '' },
  t11: { title: 'Verb Systems',                         podcast: '', slides: '', video: '' },
  t12: { title: 'Linkers, Determiners & Parallelism',   podcast: '', slides: '', video: '' },
  t13: { title: 'Paragraph Organization',               podcast: '', slides: '', video: '' }
};
var MEDIA_MINUTES = {};
