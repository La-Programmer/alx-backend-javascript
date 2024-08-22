const assert = require('assert');
const { describe, it } = require('node:test');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber()', function () {
  it('should return the sum of its arguments', function () {
    assert.equal(calculateNumber('SUM', 4, 4), 8);
    assert.equal(calculateNumber('SUM', 4, 8), 12);
    assert.equal(calculateNumber('SUM', 6, 14), 20);
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return the difference of its arguments', function () {
    assert.equal(calculateNumber('SUBTRACT', 12, 9), 3);
    assert.equal(calculateNumber('SUBTRACT', -12, 9), -21);
    assert.equal(calculateNumber('SUBTRACT', 12, -19), 31);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return the quotient of its arguments', function () {
    assert.equal(calculateNumber('DIVIDE', 12, 3), 4);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', -400, 5), -80);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});