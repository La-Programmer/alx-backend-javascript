const { expect } = require("chai");
const { json } = require("express");
const request = require("request");

describe('test the index page', function () {
  const url = 'http://localhost:7865/';
  it('test correct welcome message and status code', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('test responses when :id is a number', (done) => {
    request(url + 'cart/12', (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(body).to.equal('Payment methods for cart 12');
      expect(response.statusCode).to.equal(200);
      done();
    })
  });
  it('test responses when :id is a string', (done) => {
    request(url + 'cart/hello', (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    })
  });
  it('test /login endpoint', (done) => {
    const options = {
      uri: url+'login',
      method: 'POST',
      json: true,
      body: {
        userName: 'Justin'
      }
    }
    request.post(options, (error, response, body) => {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Justin');
      done();
    })
  });
  it('test /available_payments endpoint', (done) => {
    request(url + 'available_payments', (error, response, body) => {
      if (error) {
        done(error);
      }
      expectedResult = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).deep.to.equal(expectedResult);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
