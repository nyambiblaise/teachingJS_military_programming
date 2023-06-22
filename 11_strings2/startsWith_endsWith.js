/*
The .startsWith(substring) method returns true when the substring is found at the beginning of the string, and false otherwise.
The .endsWith(substring) works the same but for the end of the string.
 */
const sentence = "Hello there. Welcome!";
let checkStarter = (someString,search)=>sentence.startsWith(search);
let checkEnder = (someString,search)=>sentence.endsWith(search);
console.log(checkStarter(sentence,"Hello"))
console.log(checkEnder(sentence,"."));

const checkGmail = (someEmail)=>someEmail.endsWith("@gmail.com");

const checkIfGmail = (userEmail) => {
  if(userEmail.endsWith("@gmail.com")){
      return `${userEmail} is a Valid Gmail Address`;
  }else{
      return `${userEmail} is Not a Gmail Address`;
  }
}
console.log(checkIfGmail("john.doe@yahoo.com"))
console.log(checkIfGmail("john.doe@gmail.com"))