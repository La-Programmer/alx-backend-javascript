const fs = require('fs');

const getDataFromCsv = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    return data.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

function displayCsvData(path) {
  const csvRawData = getDataFromCsv(path);
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
}

const countStudents = (path) => {
  displayCsvData(path);
};

module.exports = countStudents;
