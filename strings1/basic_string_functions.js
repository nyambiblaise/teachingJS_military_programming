let name = "John PaUL aSHu";
let phone = 679194380;
//counting numbers in a string
function countString(someString) {
    return someString.length;
}
//converting a string to uppercase
function convertToUpperCase(someString) {
    return someString.toUpperCase();
}
//converting to lowercase
function convertToLowerCase(someString) {
    return someString.toLowerCase();
}
function getLastCharacter(someString) {
    return someString[someString.length-1];
}
//different ways to handle strinfs
function displayName1(xname) {
    return `Your name is ${xname}`;
}
function displayName2(xname) {
    return "Your name is "+xname;
}
function displayName3(xname) {
    return 'Your name is '+xname;
}
//SUBSTRING: A substring is a part or a portion of a string. For example, "rain" is a substring of the string "brain" because you can get "rain" by taking the last 4 characters.
//indexStart: the position of the first character you'd like to include
//indexEnd: the position of the first character you'd like to ignore
function getSubstring(someString,start,stop){
    return someString.substring(1,5);
}
console.log(getSubstring(name));