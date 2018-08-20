const { add, mod, number, pow } = require('../utils/math');

/**
 * Pollard's rho Algorithm
 * https://www.wikiwand.com/en/Pollard%27s_rho_algorithm
 * https://www.cs.colorado.edu/~srirams/courses/csci2824-spr14/pollardsRho.html
 * 
 * Here we're using Pollard's rho Algorithm 
 * with Floyd's circle protection.
 * 
 * @param {Number} n 
 */
const MAX_SEED_ITERATION = 10;
const MAX_INTERNAL_ITERATION = 100;

const prng = (base, seed = 1, max) => number(mod(add(pow(base, 2), seed), max));

const iterate = (n, gcd, iteration = 1) => {
  if (iteration > MAX_SEED_ITERATION) {
    throw new Error(`Cannot found factors for ${n} in ${iteration} iteration.`);
  }

  const seed = iteration;
  const rand = x => prng(x, seed, n);
  
  let i = 0,
      p = 2,
      q = 2;

  do {
    i++;
    p = rand(p);
    q = rand(rand(q));
    
    const s = gcd(Math.abs(p - q), n);
    
    if (s > 1) {
      return [s, n / s];
    }
  } while (
    p !== q && i < MAX_INTERNAL_ITERATION
  );

  return iterate(n, gcd, ++iteration);
};

const pollardRhoFactorizator = (n, { gcd }) => {
  return iterate(n, gcd);
};

module.exports = pollardRhoFactorizator;