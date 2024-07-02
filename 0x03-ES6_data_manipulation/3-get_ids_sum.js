export default function getStudentIdsSum(studentsArray) {
  if (studentsArray instanceof Array) {
    const initailValue = 0;
    return studentsArray.reduce(
      (accumulator, item) => accumulator + item.id, initailValue,
    );
  }
  return [];
}
