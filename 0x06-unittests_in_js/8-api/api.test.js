const { expect } = require("chai");
const request = require("request");

describe('test the index page', function () {
  const url = 'http://localhost:7865';
  it('display correct welcome message', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
