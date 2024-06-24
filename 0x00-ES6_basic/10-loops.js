export default function appendToEachArrayValue(array, appendString) {
  let counter = 0
  for (let idx of array) {
    let value = idx;
    array[counter] = appendString + value;
    counter++;
  }

  return array;
}