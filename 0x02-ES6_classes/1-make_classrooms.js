import ClassRoom from "./0-classroom"

export default function initializeRooms () {
  classRoom1 = ClassRoom(19);
  classRoom2 = ClassRoom(20);
  classRoom3 = ClassRoom(34);

  return [classRoom1, classRoom2, classRoom3];
}
