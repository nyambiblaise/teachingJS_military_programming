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
function displayName1(xname) { // the ${x} is called string interpolation. ONLY used with ``
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
function getFirstTenCharacters(someString){
    return someString.substring(0,10);
}
//multiline using interpolation
function showInfo1() { //this will work, but using "" or '' won't work with multiline
    return `hi guys, welcome
    to JavaScript programming
    and it is fun`;
}
function renderTableRow(value,label){
    return `<tr>
                <td>${label}</td>
                <td>${value}</td>
            </tr>`;
}
function capitalizeFirstLetter(word) {
    return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
}
console.log(capitalizeFirstLetter("john william doe"));