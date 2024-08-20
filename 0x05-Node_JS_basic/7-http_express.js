const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const db = process.argv[2];

// Handle CSV file
const getCsvData = (path) => new Promise(
  (resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
      } else {
        resolve(data.trim());
      }
    });
  },
);

const constructString = (data) => {
  const splitData = data.split('\n');
  const splitData2 = splitData.slice(1);
  let result = '';
  const studentNo = splitData2.length;
  result += `Number of students: ${studentNo}\n`;
  const fields = {};
  for (const rawEntry of splitData2) {
    const entry = rawEntry.split(',');
    const field = entry[entry.length - 1];
    if (field in fields) {
      fields[field].push(entry[0]);
    } else {
      fields[field] = [entry[0]];
    }
  }
  for (const key in fields) {
    if (Object.keys(fields).includes(key)) {
      const value = fields[key];
      result += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
    }
  }
  return result.trim();
};

const countStudents = (path) => getCsvData(path)
  .then((data) => constructString(data))
  .catch((error) => error);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  countStudents(db)
    .then((data) => res.end(data))
    .catch((error) => res.end(error));
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;
