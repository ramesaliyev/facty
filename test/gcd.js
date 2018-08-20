const { expect } = require('chai');

const { getGCDCalculator } = require('../src/gcd');
const { trimin } = require('../src/utils/string');

const gcdCalculators = ['prime'];

const numbers = [
  [27, 90, 9],
  [48, 372, 12],
  [75, 225, 75],
  [120, 1000, 40],
  [123, 1517, 41],
  [6169, 13134, 199],
];

describe('Testing: GCD Calculation', () => {
  gcdCalculators.forEach(gcdCalcName => {
    const gcdCalculator = getGCDCalculator(gcdCalcName);

    describe(trimin(`
      ··· GCD Calculator: ${gcdCalcName}
    `), () => {
      numbers.forEach(([a, b, gcd]) => {
        it(`should find gcd of ${a} and ${a} as ${gcd}`, () => {
          expect(gcdCalculator(a, b)).to.equal(gcd);
        });
      });
    });
  });  
});