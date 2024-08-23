const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber()', function () {
  describe('when type is SUM', () => {
    it('should round the first argument', () => {
      expect(calculateNumber('SUM', 10.2, 3)).to.equal(13);
      expect(calculateNumber('SUM', -1.7, 8)).to.equal(6);
    });
    it('should round the second argument', () => {
      expect(calculateNumber('SUM', 10, 3.1)).to.equal(13);
      expect(calculateNumber('SUM', -2, 8.3)).to.equal(6);
    });
    it('should return the right answer', () => {
      expect(calculateNumber('SUM', 13, 4)).to.equal(17);
      expect(calculateNumber('SUM', 13, -44)).to.equal(-31);
      expect(calculateNumber('SUM', 13, 0)).to.equal(13);
    });
  });
  describe('when type is SUBTRACT', () => {
    it('should round the first argument', () => {
      expect(calculateNumber('SUBTRACT', 10.2, 3)).to.equal(7);
      expect(calculateNumber('SUBTRACT', -1.7, 8)).to.equal(-10);
    });
    it('should round the second argument', () => {
      expect(calculateNumber('SUBTRACT', 10, 3.1)).to.equal(7);
      expect(calculateNumber('SUBTRACT', -2, 8.3)).to.equal(-10);
    });
    it('should return the right answer', () => {
      expect(calculateNumber('SUBTRACT', 13, 4)).to.equal(9);
      expect(calculateNumber('SUBTRACT', 13, -44)).to.equal(57);
      expect(calculateNumber('SUBTRACT', 13, 0)).to.equal(13);
    });
  });
  describe('when type is DIVIDE', () => {
    it('should round the first argument', () => {
      expect(calculateNumber('DIVIDE', 10.2, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', -18.3, 9)).to.equal(-2);
    });
    it('should round the second argument', () => {
      expect(calculateNumber('DIVIDE', 10, 2.1)).to.equal(5);
      expect(calculateNumber('DIVIDE', 12, 3.4)).to.equal(4);
    });
    it('should return the right answer', () => {
      expect(calculateNumber('DIVIDE', 40, 8)).to.equal(5);
      expect(calculateNumber('DIVIDE', 144, 144)).to.equal(1);
      expect(calculateNumber('DIVIDE', 121, -11)).to.equal(-11);
    });
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 40, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 144, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 121, 0)).to.equal('Error');
    });
  });
});