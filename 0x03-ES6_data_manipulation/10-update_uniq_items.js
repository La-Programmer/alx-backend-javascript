export default function updateUniqueItems(myMap) {
  if (myMap instanceof Map) {
    for (const [key, value] of myMap) {
      if (value === 1) {
        myMap.set(key, 100);
      }
    }
    return myMap;
  }
  throw Error('Cannot process');
}
