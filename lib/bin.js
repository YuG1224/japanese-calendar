#!/usr/bin/env node

const opts = require('commander');
const app = require('./app');

opts
  .option(
    '-f, --from [from]',
    `This flag specifies the calendar to convert.,
      Choose Calendar:
        c, Christian : Christian Era
        j, Japanese  : Japanese Calendar`,
    /^(c|j)/i,
    'c'
  )
  .option(
    '-t, --type [type]',
    `This flag specifies the Japanese calendar to convert.
      Choose Calendar:
        m, Meiji  : Meiji
        t, Taisho : Taisho
        s, Showa  : Showa
        h, Heisei : Heisei`,
    /^(m|t|s|h)/i,
    'h'
  )
  .option(
    '-y, --year [year]',
    'This flag specifies the year to be converted.'
  )
  .parse(process.argv);

console.log(app(opts.from, opts.type, opts.year));
