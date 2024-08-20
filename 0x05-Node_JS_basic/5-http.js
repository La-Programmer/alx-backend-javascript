const { createServer } = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const db = process.argv[2];

const app = createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      countStudents(db)
        .then((data) => res.end(data))
        .catch((error) => res.end(error.toString()));
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      break;
  }
});

app.listen(port, hostname, () => {
  console.log(`App is running on port ${port} and host ${hostname}`);
});

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
  }
);

const constructString = (data) => {
  const splitData = data.split('\n');
  const splitData2 = splitData.slice(1);
  let result = "";
  const studentNo = splitData2.length;
  result += `Number of students: ${studentNo}\n`;
  const fields = {}
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
  return result;
};

const countStudents = (path) => getCsvData(path)
    .then((data) => constructString(data))
    .catch((error) => error);

module.exports = app;
