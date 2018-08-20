const { equal, mod, pow, subtract } = require('../utils/math');

/**
 * Fermat's Primality Tester
 * https://www.wikiwand.com/en/Fermat_primality_test
 * https://www.youtube.com/watch?v=RcjxwCHRYfE
 */
const fermatsPrimalityTest = p => {
  if (p <= 1) {
    return false;
  }

  for (let i = 1; i < p; i++) {
    const f = subtract(pow(i, p), i);

    if (equal(f, 0)) {
      continue;
    }

    if (!equal(mod(f, p), 0)) {
      return false;
    }
  }

  return true;
};

module.exports = fermatsPrimalityTest;