const assert = require('assert');
const { describe, it } = require('node:test');
const calculateNumber = require('./0-calcul');

describe('#calculateNumber()', function () {
  it('should return a whole integer in all cases', function () {
    assert.equal(calculateNumber(4, 3), 7);
    assert.equal(calculateNumber(-3, 5), 2);
    assert.equal(calculateNumber(3.7, 7), 11);
    assert.equal(calculateNumber(-2.4, 5), 3);
  });
  it('should return 3', function () {
    assert.equal(calculateNumber(1, 2), 3);
    assert.equal(calculateNumber(0, 3), 3);
  });
  it('should return -4', function () {
    assert.equal(calculateNumber(4, -8), -4);
    assert.equal(calculateNumber(-12, 8), -4);
  });
});