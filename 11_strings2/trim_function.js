/*
useful when working with the DOM
Users will sometimes, by accident, enter an empty space character at the beginning or the end of a text box.
Say, for example, you ask the user for their name, and they enter " Sam" instead of "Sam". This could cause issues in some scenarios (for example email addresses).

The solution for that is using the .trim() method which removes all leading (at the beginning) and trailing (at the end) space characters.
 */
function sanitizeName(someName) {
    return someName.trim();
}
console.log(sanitizeName("  Sam Blue "));//Sam Blue

const santizeEmail = (someEmail)=>{
    return someEmail.trim();
}
const cleanFullNames = (someName)=>someName.trim();

console.log(santizeEmail("paul@gmail.com "));
console.log(santizeEmail(" joshu@gmail.com"));
console.log(santizeEmail(" mary@gmail.com "));
console.log(cleanFullNames(" John Paul  "));