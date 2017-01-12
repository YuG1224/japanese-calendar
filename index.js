#!/usr/bin/env node

const opts = require('commander');
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
const meiji = 67;
const taisho = 11;
const showa = 25;
const heisei = 88;

if (from === 'japanese') {
  if (type === 'm') {
    console.log(year + meiji + 1800);
  } else if (type === 't') {
    console.log(year + taisho + 1900);
  } else if (type === 's') {
    console.log(year + showa + 1900);
  } else {
    console.log(year + heisei + 1900);
  }
} else {
  if (type === 'm') {
    console.log(year - meiji - 1800);
  } else if (type === 't') {
    console.log(year - taisho - 1900);
  } else if (type === 's') {
    console.log(year - showa - 1900);
  } else {
    console.log(year - heisei - 1900);
  }
}
