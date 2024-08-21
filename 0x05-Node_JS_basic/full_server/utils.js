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

function organizeFields(csvRawData) {
  const csvData = csvRawData.split('\n');
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
  return fields;
}

const readDatabase = (path) => new Promise((resolve, reject) => {
  getDataFromCsv(path)
    .then((data) => resolve(organizeFields(data)))
    .catch((error) => reject(error));
});

module.exports = readDatabase;
