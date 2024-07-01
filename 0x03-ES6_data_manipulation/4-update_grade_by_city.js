export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  if (studentsArray instanceof Array) {
    const result = studentsArray
      .filter((item) => item.location === city)
      .map((item) => {
        let parity = 0;
        let currentValue;
        for (const grade of newGrades) {
          if (grade.studentId === item.id) {
            parity = 1;
            currentValue = ({ ...item, grade: grade.grade });
          }
        }
        if (parity === 0) {
          currentValue = ({ ...item, grade: 'N/A' });
        }
        return currentValue;
      });
    return result;
  }
  return [];
}
