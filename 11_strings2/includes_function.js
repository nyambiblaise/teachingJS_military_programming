/*
The .includes(substring) method returns true when the substring can be found anywhere in the string, and false otherwise.
 */
const sentence = "Hello there. Welcome to JavaScript Programming!";
const checkIfStringExists = (someString,search)=>someString.includes(search);

console.log(checkIfStringExists(sentence,"java"));