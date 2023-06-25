/*
The .replace(search, replace) method returns a new string where the FIRST occurrence of the search parameter you provide
 is replaced by the replace parameter
 */
const username = "john doe";
const message = "you are welcome";
const newUserName = username.replace(" ","_"); //john_doe
const newUserName1 = username.replace(" ",""); //johndoe
const newMessage = message.replace(" ","_");//you_are welcome
console.log(newUserName);
console.log(newUserName1);
console.log(newMessage);