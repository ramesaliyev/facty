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
  flat,
  sort,
  uniq
};