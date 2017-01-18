'use strict';

const meiji = 67;
const taisho = 11;
const showa = 25;
const heisei = 88;
const japanese = ['m', 't', 's', 'h'];


/**
 * toChristian
 *
 * @param  {string} type
 * @param  {number} year
 * @return {number}
 */
function toChristian(type, year) {
  let result;

  if (type === 'm') {
    result = year + meiji + 1800;
  } else if (type === 't') {
    result = year + taisho + 1900;
  } else if (type === 's') {
    result = year + showa + 1900;
  } else {
    result = year + heisei + 1900;
  }

  return result;
}


/**
 * toJapanese
 *
 * @param  {string} type
 * @param  {number} year
 * @return {number}
 */
function toJapanese(type, year) {
  let result;

  if (type === 'm') {
    result = year - meiji - 1800;
  } else if (type === 't') {
    result = year - taisho - 1900;
  } else if (type === 's') {
    result = year - showa - 1900;
  } else {
    result = year - heisei - 1900;
  }

  return result;
}

/**
 * app
 *
 * @param  {string} from = 'c'
 * @param  {string} to = 'h'
 * @param  {number|string} year
 * @return {number}
 */
function app(from = 'c', to = 'h', year) {
  from = from.toLowerCase().slice(0,1)
  to = to.toLowerCase().slice(0,1)
  year = +year;

  let result;
  if (['c'].includes(from) && japanese.includes(to)) {
    result = toJapanese(to, year);
  } else if (japanese.includes(from) && ['c'].includes(to)) {
    result = toChristian(from, year)
  } else if (japanese.includes(from) && japanese.includes(to)) {
    result = toJapanese(to, toChristian(from, year));
  } else {
    result = year;
  }

  if (result <= 0) {
    result = year;
  }
  return result;
}

module.exports = app;
