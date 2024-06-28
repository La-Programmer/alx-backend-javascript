export default class Car {
  static get [Symbol.species]() {
    return this;
  }

  constructor(brand, motor, color) {
    const properties = {
      brand,
      motor,
      color,
    };
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value === 'string' || typeof value === 'undefined') {
        this[`${key}`] = value;
      } else {
        throw new TypeError(`${key.charAt(0).toUpperCase() + key.slice(1)} must be a string`);
      }
    }
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    const result = new Species();
    return result;
  }
}
