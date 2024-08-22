const calculateNumber = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    const sum = Math.round(a) + Math.round(b);
    return sum;
  }
};

module.exports = calculateNumber;
