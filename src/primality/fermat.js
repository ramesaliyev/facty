const { bignum } = require('../utils');

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
    const f = bignum(i).pow(p).minus(i);

    if (f.eq(0)) {
      continue;
    }

    if (!f.mod(p).eq(0)) {
      return false;
    }
  }

  return true;
};

module.exports = fermatsPrimalityTest;