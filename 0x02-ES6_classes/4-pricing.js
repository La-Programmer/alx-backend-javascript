import Currency from './3-currency';

export default class Pricing {
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return (amount * conversionRate);
    }
    throw new TypeError('All inputs must be numbers');
  }

  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of Currency class');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of Currency class');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
