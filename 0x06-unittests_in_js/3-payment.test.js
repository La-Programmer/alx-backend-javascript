const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { afterEach } = require('mocha');
const assert = require('assert');

describe('#sendPaymentRequestToApi()', function () {
  beforeEach(function () {
    sinon.spy(Utils);
  });
  afterEach(function () {
    sinon.restore();
  });
  it('should check that Utils.calculateNumber was called', function () {
    const amount = 3000;
    const shipping = 700;
    sendPaymentRequestToApi(amount, shipping);
    assert(Utils.calculateNumber.calledOnce);
  });
});
