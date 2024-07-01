export default function getStudentsByLocation(studentsArray, city) {
  if (studentsArray instanceof Array) {
    return studentsArray.filter((item) => item.location === city);
  }
  return [];
}
