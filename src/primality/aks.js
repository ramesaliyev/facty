const { add, divide, equal, mod, multiply, subtract } = require('../utils');

/** 
 * Binomial Coefficients
 * https://www.wikiwand.com/en/Binomial_coefficient
 * 
 * Since we're going to check all coefficients by order and n going to be
 * constant; we're using formula which optimized for constant n and instead
 * of running recursively we're taking advantages of generators with result caching.
 * For formula see '/assets/binomial-coefficients-formula.svg'
 * 
 * This named mid because it skips first and last coefficients which are ones.
 * Because we dont care about them.
 */
function* midBinomialCoefficientsGen(n) {
  const coeffs = [1];
  
  for (let k = 1; k < n; k++) {
    yield (coeffs[k] = divide(multiply((subtract(add(n, 1), k)), coeffs[k-1]), k));
  }
}

/**
 * AKS Primality Tester
 * https://www.wikiwand.com/en/AKS_primality_test
 * https://www.youtube.com/watch?v=D7AHbyAlgIA
 * https://www.youtube.com/watch?v=HvMSRWTE2mI
 */
const aksPrimalityTest = p => {
  if (p <= 1) {
    return false;
  }

  const coefficients = midBinomialCoefficientsGen(p);

  let done, value;
  while ({ done, value } = coefficients.next()) {
    if (done) {
      return true;
    }

    if (!equal(mod(value, p), 0)) {
      return false;
    }
  }
};

module.exports = aksPrimalityTest;