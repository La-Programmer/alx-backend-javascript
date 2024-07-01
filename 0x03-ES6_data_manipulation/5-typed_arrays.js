export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number'
    || typeof position !== 'number'
    || typeof value !== 'number') {
    throw TypeError('All arguments must be numbers');
  }
  if (position > length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value, false);

  return dataView;
}
