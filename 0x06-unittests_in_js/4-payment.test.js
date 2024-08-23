const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { afterEach } = require('mocha');
const assert = require('assert');

describe('#sendPaymentRequestToApi()', function () {
  beforeEach(function () {
    sinon.spy(sendPaymentRequestToApi);
  });
  afterEach(function () {
    sinon.restore();
  });
  it('should check that Utils.calculateNumber was called', function () {
    const amount = 3000;
    const shipping = 700;
    const consoleSpy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, "calculateNumber").callsFake(() => 10);
    stub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(amount, shipping);
    consoleSpy.calledWith('The total is: 10');
    stub.restore();
  });
});
