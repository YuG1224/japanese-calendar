/**
 * japanese-calendar-converter
 *
 * @param   {string}  from
 * @param   {string}  type
 * @param   {number}  year
 * @return  {number}  result
 */
module.exports = (from = 'c', type = 'j', year = new Date().getFullYear()) => {
  from = from.toLowerCase().slice(0,1)
  type = type.toLowerCase().slice(0,1)
  year = +year;

  const meiji = 67;
  const taisho = 11;
  const showa = 25;
  const heisei = 88;

  let result;
  if (from === 'j') {
    if (type === 'm') {
      result = year + meiji + 1800;
    } else if (type === 't') {
      result = year + taisho + 1900;
    } else if (type === 's') {
      result = year + showa + 1900;
    } else {
      result = year + heisei + 1900;
    }
  } else {
    if (type === 'm') {
      result = year - meiji - 1800;
    } else if (type === 't') {
      result = year - taisho - 1900;
    } else if (type === 's') {
      result = year - showa - 1900;
    } else {
      result = year - heisei - 1900;
    }
  }

  return result;
}
