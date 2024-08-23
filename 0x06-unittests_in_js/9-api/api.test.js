const { expect } = require("chai");
const request = require("request");

describe('test the index page', function () {
  const url = 'http://localhost:7865/';
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
  it('Check responses when :id', (done) => {
    request(url + 'cart/12', (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(body).to.equal('Payment methods for cart 12');
      expect(response.statusCode).to.equal(200);
      done();
    })
  });
  it('Check responses when :id is a string', (done) => {
    request(url + 'cart/hello', (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    })
  });
});
