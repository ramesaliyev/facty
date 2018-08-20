const { factorize } = require('../index'); 
const { uniq } = require('../utils/array');

/**
 * GCD Calculating
 * https://www.wikiwand.com/en/Greatest_common_divisor#/Using_prime_factorizations
 * 
 * We're using prime factorizations approach here with fermat factorizer since
 * it does not depends GCD for factorize integers.
 */
const primeGCDCalculator = (a, b) => {
  const factorizeOptions = {
    gcdCalculator: null,
    full: true,
  };

  if (!a || !b) {
    return 0;
  }

  const factorsOfA = factorize(a, factorizeOptions);
  const factorsOfB = factorize(b, factorizeOptions);

  const allFactors = uniq([
    ...factorsOfA,
    ...factorsOfB,
  ]);

  return allFactors.reduce((val, factor) => {
    const minPow = Math.min(
      factorsOfA.filter(f => f === factor).length,  
      factorsOfB.filter(f => f === factor).length,  
    );

    return val * Math.pow(factor, minPow);
  }, 1);
};

module.exports = primeGCDCalculator;