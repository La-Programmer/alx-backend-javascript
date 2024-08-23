const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber()', function () {
  describe('when type is SUM', () => {
    it('should round the first argument', () => {
      assert.equal(calculateNumber('SUM', 10.2, 3), 13);
      assert.equal(calculateNumber('SUM', -1.7, 8), 6);
    });
    it('should round the second argument', () => {
      assert.equal(calculateNumber('SUM', 10, 3.1), 13);
      assert.equal(calculateNumber('SUM', -2, 8.3), 6);
    });
    it('should return the right answer', () => {
      assert.equal(calculateNumber('SUM', 13, 4), 17);
      assert.equal(calculateNumber('SUM', 13, -44), -31);
      assert.equal(calculateNumber('SUM', 13, 0), 13);
    });
  });
  describe('when type is SUBTRACT', () => {
    it('should round the first argument', () => {
      assert.equal(calculateNumber('SUBTRACT', 10.2, 3), 7);
      assert.equal(calculateNumber('SUBTRACT', -1.7, 8), -10);
    });
    it('should round the second argument', () => {
      assert.equal(calculateNumber('SUBTRACT', 10, 3.1), 7);
      assert.equal(calculateNumber('SUBTRACT', -2, 8.3), -10);
    });
    it('should return the right answer', () => {
      assert.equal(calculateNumber('SUBTRACT', 13, 4), 9);
      assert.equal(calculateNumber('SUBTRACT', 13, -44), 57);
      assert.equal(calculateNumber('SUBTRACT', 13, 0), 13);
    });
  });
  describe('when type is DIVIDE', () => {
    it('should round the first argument', () => {
      assert.equal(calculateNumber('DIVIDE', 10.2, 2), 5);
      assert.equal(calculateNumber('DIVIDE', -18.3, 9), -2);
    });
    it('should round the second argument', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 2.1), 5);
      assert.equal(calculateNumber('DIVIDE', 12, 3.4), 4);
    });
    it('should return the right answer', () => {
      assert.equal(calculateNumber('DIVIDE', 40, 8), 5);
      assert.equal(calculateNumber('DIVIDE', 144, 144), 1);
      assert.equal(calculateNumber('DIVIDE', 121, -11), -11);
    });
    it('should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 40, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 144, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 121, 0), 'Error');
    });
  });
});