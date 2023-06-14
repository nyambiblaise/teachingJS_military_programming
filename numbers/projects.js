//Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
function getNextAge(age){
    return Number.parseInt(age,10)+1;
}
console.log(getNextAge(21));
//Complete the function getBoxWidth such that it returns the width (as a number) from the string it receives.
function getBoxWidth(width){
    return Number.parseInt(width,10);
    //or
    return parseInt(width);
}