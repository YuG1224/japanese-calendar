'use strict';

const meiji = 1867;
const taisho = 1911;
const showa = 1925;
const heisei = 1988;
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
    result = year + meiji;
  } else if (type === 't') {
    result = year + taisho;
  } else if (type === 's') {
    result = year + showa;
  } else {
    result = year + heisei;
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
    result = year - meiji;
  } else if (type === 't') {
    result = year - taisho;
  } else if (type === 's') {
    result = year - showa;
  } else {
    result = year - heisei;
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
    result = undefined;
  }
  return result;
}

module.exports = app;
