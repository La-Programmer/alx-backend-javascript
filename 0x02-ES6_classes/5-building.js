export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    } else if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    } else {
      this._sqft = sqft;
    }
  }
}
