#!/usr/bin/env node
/* bump-version.js — set one cache-busting ?v= string on every local script
   and stylesheet tag in the four HTML pages.
   usage: node bump-version.js            (uses today's date + 'a')
          node bump-version.js 2026-10-06b */
const fs = require('fs');
const v = process.argv[2] || (new Date().toISOString().slice(0, 10) + 'a');
['index.html', 'teacher.html', 'booklet.html', 'podcasts.html'].forEach(function (f) {
  const p = __dirname + '/' + f;
  if (!fs.existsSync(p)) return;
  let s = fs.readFileSync(p, 'utf8'), n = 0;
  s = s.replace(/((?:src|href)=")([A-Za-z0-9_\-]+\.(?:js|css))(?:\?v=[^"]*)?(")/g, function (m, a, file, b) {
    n++; return a + file + '?v=' + v + b;
  });
  fs.writeFileSync(p, s);
  console.log(f + ': ' + n + ' tags → ?v=' + v);
});
