export default function cleanSet(mySet, startString) {
  if (mySet instanceof Set && typeof startString === 'string') {
    const resultArray = [];
    for (const setItem of mySet) {
      if (setItem.startsWith(startString) && startString !== '') {
        resultArray.push(setItem.replace(startString, ''));
        // resultArray.push(setItem.slice(setItem.lastIndexOf(startString)));
      }
    }

    return resultArray.join('-');
  }
  throw Error('Argument types must be \'Set\' and \'String\' respectively');
}
