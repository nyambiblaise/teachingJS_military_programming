/*
Complete the function getMessage such that it returns the message it receives as a parameter. The message should always end with a full stop (.).

console.log(getMessage("Hello world")); // "Hello world."
console.log(getMessage("Welcome home.")); // "Welcome home."
console.log(getMessage("It works")); // "It works."
console.log(getMessage("Yes. Correct")); // "Yes. Correct."
 */
const getMessage = (message) => {
  if(!message.endsWith(".")){
      return message + ".";
  }else
      return message;
}
console.log(getMessage("Hello world"));
console.log(getMessage("Welcome to JS."));