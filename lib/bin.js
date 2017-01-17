#!/usr/bin/env node

const opts = require('commander');
const app = require('./app');

opts
  .option(
    '-f, --from [from]',
    `This flag specifies the calendar to convert.,
      Choose Calendar:
        christian : Christian Era
        japanese  : Japanese Calendar`,
    /^(christian|japanese)$/i,
    'christian'
  )
  .option(
    '-t, --type [type]',
    `This flag specifies the Japanese calendar to convert.
      Choose Calendar:
        meiji   : Meiji
        taisho  : Taisho
        showa   : Showa
        heisei  : Heisei`,
    /^(m|t|s|h)/i,
    'h'
  )
  .option(
    '-y, --year [year]',
    'This flag specifies the year to be converted.'
  )
  .parse(process.argv);

const from = opts.from.toLowerCase();
const type = opts.type.toLowerCase();
const year = +opts.year;
console.log(app(from, type, year));
