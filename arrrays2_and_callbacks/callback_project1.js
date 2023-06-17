/*
Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.
 */
const apps = ["WhatsApp","Facebook","Twitter","YoutTube"];
function isAppUsed(list,app) {
    return list.includes(app);
}
console.log(isAppUsed(apps,"Facebook1"));

/*
Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.
 */
const string1 = ["Sam", "Alex", "Charlie"];
const string2 = ["Hello", "Blue"];
const string3 = ["a", "abc"];

function getStringSizes(strings) {
    return strings.map(function (s) {
        return s.length;
    });
}
console.log(getStringSizes(string1));
console.log(getStringSizes(string2));
console.log(getStringSizes(string3));