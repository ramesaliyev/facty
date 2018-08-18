const { ceil, isSquare, pow, sqrt  } = require('../utils');

/**
 * Fermat's Factorization Method
 * https://www.wikiwand.com/en/Fermat%27s_factorization_method
 * 
 * Since this method is based on the representation of an odd
 * integer as the difference of two squares, we limited to odd numbers.
 * 
 * @param {Number} n 
 */
const fermatsFactorizator = n => {
  for (let x = ceil(sqrt(n)); x <= n; x++) {
    const ySquared = pow(x, 2) - n;
    
    if (isSquare(ySquared)) {
      const y = sqrt(ySquared);

      return [
        x - y,
        x + y
      ];
    }
  }
};

fermatsFactorizator.oddOnly = true;

module.exports = fermatsFactorizator;