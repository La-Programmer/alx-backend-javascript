export default function sigUpUser(firstName, lastName) {
  return new Promise(resolve => {
    resolve({
      'firstName': firstName,
      'lastName': lastName 
    })
  })
}
