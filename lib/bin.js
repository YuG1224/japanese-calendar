#!/usr/bin/env node

const opts = require('commander');
const app = require('./app');

opts
  .option(
    '-f, --from [from]',
    `This flag specifies the calendar before conversion.
      Choose Calendar:
        c, Christian  : Christian Era
        m, Meiji      : Meiji
        t, Taisho     : Taisho
        s, Showa      : Showa
        h, Heisei     : Heisei`,
    /^(c|m|t|s|h)/i,
    'c'
  )
  .option(
    '-t, --to [to]',
    `This flag specifies the calendar after conversion.
      Choose Calendar:
        c, Christian  : Christian Era
        m, Meiji      : Meiji
        t, Taisho     : Taisho
        s, Showa      : Showa
        h, Heisei     : Heisei`,
    /^(c|m|t|s|h)/i,
    'h'
  )
  .option(
    '-y, --year [year]',
    'This flag specifies the year to be converted.'
  )
  .parse(process.argv);

console.log(app(opts.from, opts.to, opts.year));
