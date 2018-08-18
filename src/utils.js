/**
 * MATH UTILS
 */
const BigNumber = require('bignumber.js');
const { ceil, pow, sqrt } = Math;

/**
 * Extend BigNumber for ease usage.
 */
BigNumber.prototype.ceil = BigNumber.prototype.ceil || function() {
  return BigNumber.prototype.integerValue.call(this, BigNumber.ROUND_CEIL);
};

/**
 * BigNumber wrapper.
 * @param {Number} n 
 */
const bignum = n => n instanceof BigNumber ? n : new BigNumber(n);

/**
 * Checks if provided number is square.
 * @param {Number} n 
 */
const isSquare = n => n > 0 && bignum(n).sqrt().ceil().pow(2).eq(n);

/**
 * Checks if given number isEven.
 */
const isEven = n => !(n % 2);

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
 * EXPORTS
 */
module.exports = {
  bignum,
  ceil,
  flat,
  isEven,
  isSquare,
  pow,
  sort,
  sqrt,
  uniq
};