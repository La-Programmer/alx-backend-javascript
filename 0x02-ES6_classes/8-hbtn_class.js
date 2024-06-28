export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this._location;
    }
    return this._size;
  }
}
