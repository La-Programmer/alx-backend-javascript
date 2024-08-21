const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const db = process.argv[2];
    readDatabase(db)
      .then((data) => {
        const keys = Object.keys(data);
        keys.sort((a, b) => {
          const textA = a.toUpperCase();
          const textB = b.toUpperCase();
          if (textA < textB) {
            return -1;
          }
          if (textA > textB) {
            return 1;
          }
          return 0;
        });
        let responseText = '';
        responseText += 'This is the list of our students\n';
        for (const key of keys) {
          if (Object.keys(data).includes(key)) {
            const value = data[key];
            responseText += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
          }
        }
        response.send(responseText.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const allowedMajors = ['CS', 'SWE'];
    if (!allowedMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      const db = process.argv[2];
      readDatabase(db)
        .then((data) => {
          response.send(`List: ${data[major].join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

module.exports = StudentsController;
