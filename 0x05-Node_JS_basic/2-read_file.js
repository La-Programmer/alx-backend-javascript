const fs = require('fs');
const readLine = require('readline');

const getDataFromCsv = (path) => new Promise((resolve, reject) => {
  const csvData = [];
  const readStream = fs.createReadStream(path);
  const readInterface = readLine.createInterface({
    input: readStream,
  });
  readInterface.on('line', (line) => {
    const trimmedLine = line.trim();
    if (trimmedLine !== '') {
      const row = trimmedLine.split(',');
      csvData.push(row);
    }
  });
  readInterface.on('close', () => {
    resolve(csvData);
  });
  readInterface.on('error', () => {
    reject(new Error('Cannot load the database'));
  });
});

async function displayCsvData(path) {
  try {
    const csvData = await getDataFromCsv(path);
    const userCount = csvData.length - 1;
    const fields = {};
    for (const entry of csvData.slice(1)) {
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
  } catch (err) {
    console.log(err.message);
  }
}

const countStudents = (path) => {
  displayCsvData(path);
};

module.exports = countStudents;
