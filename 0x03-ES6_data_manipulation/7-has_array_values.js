export default function hasValuesFromArray(set, array) {
  if (set instanceof Set || array instanceof Array) {
    const subset = new Set(array);
    return set.isSupersetOf(subset);
  }
  throw TypeError('Arguments should be of type \'Set\' and \'Array\' respectively');
}
