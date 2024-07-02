const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const endpointValue = weakMap.get(endpoint);
    if (endpointValue >= 5) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endpoint, endpointValue + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}

module.exports = { weakMap, queryAPI };
