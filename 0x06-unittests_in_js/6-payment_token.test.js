const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe('#getPaymentTokenFromAPI', function () {
  it('should return a json response', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
