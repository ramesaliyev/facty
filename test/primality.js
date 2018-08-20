const { expect } = require('chai');

const { getPrimalityTester } = require('../src/primality');
const { trimin } = require('../src/utils/string');

const primalityTesters = ['fermat', 'aks'];

const numbers = [
  [2, true],
  [3, true],
  [4, false],
  [5, true],
  [7, true],
  [11, true],
  [13, true],
  [17, true],
  [18, false],
  [19, true],
  [41, true],
  [61, true],
  [75, false],
  [199, true],
  [200, false],
];

describe('Testing: Primality Tester', () => {
  primalityTesters.forEach(primeTesterName => {
    const primalityTester = getPrimalityTester(primeTesterName);

    describe(trimin(`
      ··· Primarity Tester: ${primeTesterName}
    `), () => {
      numbers.forEach(([n, answer]) => {
        it(`should answer to primality of ${n} as ${answer}`, () => {
          expect(primalityTester(n)).to.equal(answer);
        });
      });
    });
  });  
});