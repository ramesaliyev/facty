const { expect } = require('chai');
const { factorize } = require('../src');

const factorizators = ['fermat'];
const primalityTesters = ['fermat', 'aks'];

const numbers = [
  [2, 2],
  [3, 3],
  [9, 3],
  [10, 2, 5],
  [17, 17],
  [25, 5],
  [30, 2, 3, 5],
  [61, 61],
  [120, 2, 3, 5],
  [123, 3, 41],
  [150, 2, 3, 5],
  [169, 13],
  [256, 2],
  [3451, 7, 17, 29],
  [4410, 2, 3, 5, 7],
  [13134, 2, 3, 11, 199],
];

describe('Prime Factorization Testing', () => {
  factorizators.forEach(fMethod => {
    primalityTesters.forEach(pMethod => {
      describe(`Factorizator: ${fMethod}, Primarity Tester: ${pMethod}`, () => {
        numbers.forEach(([number, ...factors]) => {
          it(`should factorize ${number} as ${factors.toString()}`, () => {
            expect(factorize(number, fMethod, pMethod)).to.deep.equal(factors);
          });
        });
      });
    });
  });
});