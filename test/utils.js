const { expect } = require('chai');

const { isEven, isSquare } = require('../src/utils/math');
const { flat, sort, uniq } = require('../src/utils/array');
const { trimin } = require('../src/utils/string');

describe('Testing: Utils', () => {
  describe('Array Utils', () => {
    describe('flat', () => {
      it(`should flatten given array`, () => {
        expect(flat([1, [2], [3], 4])).to.deep.equal([1, 2, 3, 4]);
      });
    });

    describe('sort', () => {
      it(`should sort given array`, () => {
        expect(sort([3, 4, 1, 2, 6])).to.deep.equal([1, 2, 3, 4, 6]);
      });
    });

    describe('uniq', () => {
      it(`should remove duplicates from given array`, () => {
        expect(uniq([4, 1, 1, 3, 4, 5, 5])).to.deep.equal([4, 1, 3, 5]);
      });
    });
  });

  describe('Math Utils', () => {
    describe('isEven', () => {
      [ [2, true],
        [7, false],
        [288, true],
        [1091, false],
      ].forEach(([n, answer]) => {
        it(`should mark if ${n} being even as ${answer}`, () => {
          expect(isEven(n)).to.equal(answer);
        });
      });
    });

    describe('isSquare', () => {
      [ [2, false],
        [4, true],
        [25, true],
        [37, false],
        [75, false],
        [169, true],
      ].forEach(([n, answer]) => {
        it(`should mark if ${n} being square as ${answer}`, () => {
          expect(isSquare(n)).to.equal(answer);
        });
      });
    });
  });

  describe('String Utils', () => {
    describe('trimin', () => {
      it(`should replace all multi spaces with one space`, () => {
        expect(trimin('  vat   ar  yu   ')).to.deep.equal(' vat ar yu ');
      });
    });
  });
});