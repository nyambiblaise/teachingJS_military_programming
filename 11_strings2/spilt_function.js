/*
The .split(separator) method divides the string into an array of substrings based on the separator you provide.

This is especially useful to convert from CSV (Comma Separated Values) back to an array.
Reminder that the opposite of String.split(separator) would be Array.join(glue).
 */
let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(","); //['Calculator','Phone','Contacts']
console.log(appsArray);

let message = `hello guys, how do you do? hope all good?`;
let messageArray = message.split(" ");
console.log(messageArray);