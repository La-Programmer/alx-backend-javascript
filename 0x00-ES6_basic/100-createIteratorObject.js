export default function createIteratorObject(report) {
  const keys = Object.keys(report);
  const max = keys.length;
  report[Symbol.iterator] = function () {
    return {
      current: 0,
      next: function() {
        const value = report[keys[this.current]];
        const done = this.current >= max;
        this.current++;
        return {value, done};
      }
    }
  }
}