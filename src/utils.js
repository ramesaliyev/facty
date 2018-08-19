/**
 * MATH UTILS
 */
const mathjs = require('mathjs');

/**
 * Higher precision; less rounding errors; less performance.
 * Since we dont care about performance...
 */
mathjs.config({
  precision: 2048
});

/**
 * Methods going to extract from MathJS.
 */
const extractMathJS = [
  'add',
  'ceil',
  'divide',
  'equal',
  'larger',
  'mod',
  'multiply',
  'pow',
  'smallerEq',
  'sqrt',
  'subtract',
];

/**
 * Create math methods which automatically wraps
 * every provided arguments with math.bignumber.
 */
const math = extractMathJS.reduce((acc, method) => (
  (acc[method] = (...args) =>
    mathjs[method](...args.map(n => mathjs.bignumber(n)))
  ), acc
), {});

const { ceil, equal, larger, mod,pow, sqrt } = math;
const { number } = mathjs;

/**
 * Checks if provided number is square.
 * @param {Number} n 
 */
const isSquare = n => larger(n, 0) && equal(pow(ceil(sqrt(n)), 2), n);

/**
 * Checks if given number isEven.
 */
const isEven = n => equal(mod(n, 2), 0);

/**
 * ARRAY UTILS
 */

/**
 * Flatten given array.
 */
const flat = arr =>
  arr.reduce((acc, item) =>
    acc.concat(Array.isArray(item) ? item : [item]), []
  );

/**
 * Remove duplicates from given array.
 */
const uniq = arr =>
  arr.filter((value, index) =>
    arr.indexOf(value) === index
  );

/**
 * Sort array of integers.
 */
const sort = arr =>
  arr.sort((a, b) => a - b);

/**
 * MATH UTILS
 */

/**
 * Replace multiple spaces with one.
 * @param {String} str 
 */
const trimin = str => str.replace(/ +(?= )/g, '');

/**
 * EXPORTS
 */
module.exports = {
  ...math,
  flat,
  isEven,
  isSquare,
  number,
  sort,
  trimin,
  uniq
};