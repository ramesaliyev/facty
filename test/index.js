const { expect } = require('chai');
const { hello } = require('../src');

describe('Hello World!', () => {
  it('should say hello to world!', () => {
    expect(hello()).to.equal('world!');
  });
});