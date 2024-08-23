const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('#sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });
  afterEach(function () {
    sinon.restore();
  });
  it('should print "The total is: 120"', function () {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });
  it('should print "The total is: 20"', function () {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
  });
});
