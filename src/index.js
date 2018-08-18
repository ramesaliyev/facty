const { getFactorizator } = require('./factorization');
const { getPrimalityTester } = require('./primality');
const { flat, isEven, isSquare, sort, sqrt, uniq } = require('./utils');

/**
 * Recursive integer factorizer.
 * 
 * @param {Function} factorizator 
 * @param {Function} isPrime 
 * @param {Number} n 
 */
const factorizer = (factorizator, isPrime, n) => {
  const recursive = x => factorizer(factorizator, isPrime, x);

  if (n === 1) {
    return [];
  }

  if (factorizator.oddOnly && isEven(n)) {
    return [2, ...recursive(n / 2)]; 
  }

  if (isPrime(n)) {
    return [n];
  }

  if (isSquare(n)) {
    return recursive(sqrt(n));
  }

  return flat(factorizator(n).map(recursive));
};

/**
 * Factorization process entry point.
 * 
 * @param {Number} n 
 * @param {String} fMethod Name of Factorization Method 
 * @param {String} pMethod Name of Primality Tester Method
 */
const factorize = (n, fMethod = 'fermat', pMethod = 'fermat') => {
  const factors = factorizer(
    getFactorizator(fMethod),
    getPrimalityTester(pMethod),
    n
  );

  return sort(uniq(factors));
};

module.exports.factorize = factorize;