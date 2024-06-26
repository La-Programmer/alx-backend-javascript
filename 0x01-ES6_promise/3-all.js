import {uploadPhoto, createUser} from "./utils";

export default function handleProfileSignup () {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
  .then((value) => {
    console.log(value[0].body, value[1].firstName, value[1].lastName);
  })
}
