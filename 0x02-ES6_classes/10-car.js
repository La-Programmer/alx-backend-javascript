export default class Car {
  constructor(brand, motor, color) {
    const properties = {
      brand,
      motor,
      color,
    };
    for (const [key, value] of Object.entries(properties)) {
      this[`${key}`] = value;
    }
  }

  cloneCar() {
    const Species = this.constructor;
    const result = new Species();
    return result;
  }
}
