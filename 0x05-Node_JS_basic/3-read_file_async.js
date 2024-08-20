const fs = require('fs');

const getDataFromCsv = (path) => new Promise(
  (resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data.trim());
      }
    });
  },
);

function displayCsvData(csvRawData) {
  const csvData = csvRawData.split('\n');
  const userCount = csvData.length - 1;
  const fields = {};
  for (const rawEntry of csvData.slice(1)) {
    const entry = rawEntry.split(',');
    const field = entry[entry.length - 1];
    if (field in fields) {
      fields[field].push(entry[0]);
    } else {
      fields[field] = [entry[0]];
    }
  }
  console.log(`Number of students: ${userCount}`);
  for (const key in fields) {
    if (Object.keys(fields).includes(key)) {
      const value = fields[key];
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  }
  return true;
}

const countStudents = (path) => new Promise((resolve, reject) => {
  getDataFromCsv(path)
    .then((data) => resolve(displayCsvData(data)))
    .catch((error) => reject(error));
});

module.exports = countStudents;
