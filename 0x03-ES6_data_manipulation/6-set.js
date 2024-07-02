export default function setFromArray(array) {
  if (array instanceof Array) {
    return new Set(array);
  }
  throw Error('Argument must be an Array');
}
