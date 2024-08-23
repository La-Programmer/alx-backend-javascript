const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('it round the first argument', () => {
    assert.equal(calculateNumber(2.9, 0), 3);
  });

  it('it round the second argument', () => {
    assert.equal(calculateNumber(0, 0.7), 1);
  });
  it('it should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });
});