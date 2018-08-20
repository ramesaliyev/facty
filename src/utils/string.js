/**
 * Replace multiple spaces with one.
 * @param {String} str 
 */
const trimin = str => str.replace(/ +(?= )/g, '');

/**
 * EXPORTS
 */
module.exports = {
  trimin,
};