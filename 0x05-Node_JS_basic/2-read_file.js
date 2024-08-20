const fs = require('node:fs');

const getCsvData = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    return data;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const display = (path) => {
  const message = getCsvData(path);
  const students = message.split('\n').slice(1);
  const fields = {};
  for (const entry of students) {
    if (entry.trim() !== '') {
      const keys = Object.keys(fields);
      const splitEntry = entry.split(',');
      const lastIndex = splitEntry.length - 1;
      const field = splitEntry[lastIndex];
      const firstName = splitEntry[0];
      if (keys.includes(field)) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    }
  }
  console.log(`Number of students: ${students.length}`);
  for (const key in fields) {
    if (Object.keys(fields).includes(key)) {
      const value = fields[key];
      const sutdentNo = value.length;
      console.log(`Number of students in ${key}: ${sutdentNo}. List: ${value.join(', ')}`);
    }
  }
};

const countStudents = (path) => {
  display(path);
};

module.exports = countStudents;
