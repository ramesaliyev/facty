const { getFactorizator } = require('./factorization');
const { getPrimalityTester } = require('./primality');
const { getGCDCalculator } = require('./gcd');
const { isEven, isSquare, number, sqrt } = require('./utils/math');
const { flat, sort, uniq } = require('./utils/array');

/**
 * Recursive integer factorizer.
 * 
 * @param {Function} factorizator 
 * @param {Function} isPrime 
 * @param {Number} n 
 */
const factorizer = (n, options) => {
  const { factorizator, isPrime } = options;
  const recursive = x => factorizer(x, options);
  
  if (!n) {
    return [];
  }

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
    const root = number(sqrt(n));
    return [
      ...recursive(root),
      ...recursive(root)
    ];
  }

  return flat(factorizator(n, options).map(recursive));
};

/**
 * Factorization process entry point.
 * 
 * @param {Number} n 
 * @param {String} fMethod Name of Factorization Method 
 * @param {String} pMethod Name of Primality Tester Method
 */
const factorize = (n, {
  factorizator = 'fermat',
  primalityTester = 'fermat',
  gcdCalculator = 'prime',
  full = false,
} = {}) => {
  let factors = factorizer(n, {
    factorizator: getFactorizator(factorizator),
    isPrime: getPrimalityTester(primalityTester),
    gcd: getGCDCalculator(gcdCalculator),
  });

  if (!full) {
    factors = uniq(factors);
  }

  return sort(factors);
};

module.exports.factorize = factorize;