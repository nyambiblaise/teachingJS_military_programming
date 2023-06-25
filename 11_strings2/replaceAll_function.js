/*
It is same as .replace function but...
If you'd like to replace all the occurrences, then you can use the .replaceAll() method explained below. It is also possible to pass a regular expression as a first parameter (which can be used to match more than one item. Though, generally, using .replaceAll() is easier).
 */
const message = "You are welcome.";
let m1 = message.replace(" ", "_"); // "You_are welcome";
let m2 = message.replaceAll(" ", "_"); // "You_are_welcome";
console.log(message);
console.log(m1);
console.log(m2);