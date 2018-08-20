const { expect } = require('chai');

const { factorize } = require('../src');
const { trimin } = require('../src/utils/string');

const factorizators = ['fermat', 'pollard-rho'];
const primalityTesters = ['fermat', 'aks'];
const gcdCalculators = ['prime'];

const numbers = [
  [2, 2],
  [3, 3],
  [8, 2],
  [9, 3],
  [10, 2, 5],
  [17, 17],
  [18, 2, 3],
  [19, 19],
  [20, 2, 5],
  [21, 3, 7],
  [22, 2, 11],
  [23, 23],
  [24, 2, 3],
  [25, 5],
  [30, 2, 3, 5],
  [31, 31],
  [61, 61],
  [81, 3],
  [120, 2, 3, 5],
  [123, 3, 41],
  [144, 2, 3],
  [150, 2, 3, 5],
  [169, 13],
  [195, 3, 5, 13],
  [256, 2],
  [266, 2, 7, 19],
  [3451, 7, 17, 29],
  [4410, 2, 3, 5, 7],
  [13134, 2, 3, 11, 199],
];

describe('Testing: Prime Factorization', () => {
  factorizators.forEach(factorizator => {
    primalityTesters.forEach(primalityTester => {
      gcdCalculators.forEach(gcdCalculator => {
        describe(trimin(`
          ··· Factorizator: ${factorizator}
          ··· Primarity Tester: ${primalityTester}
          ··· GCD Calculator: ${gcdCalculator}
        `), () => {
          numbers.forEach(([number, ...factors]) => {
            it(`should factorize ${number} as ${factors.toString()}`, () => {
              expect(factorize(number, {
                factorizator,
                primalityTester,
                gcdCalculator,
              })).to.deep.equal(factors);
            });
          });
        });
      });  
    });
  });
});