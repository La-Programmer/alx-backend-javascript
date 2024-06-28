import Car from './10-car';

export default class EVCar extends Car {
  static get [Symbol.species]() {
    return Car;
  }

  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string' || typeof range === 'undefined') {
      this._range = range;
    }
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    const result = new Species();
    return result;
  }
}
