export default function getListStudentIds(array) {
  if (array instanceof Array) {
    return array.map((item) => item.id);
  }
  return [];
}
