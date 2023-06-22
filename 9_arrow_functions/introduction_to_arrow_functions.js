/*
There are multiple ways of writing a function in JavaScript.
You could either define a function and give it a name, or you could define a variable and assign it to an anonymous function.
Arrow functions are one of the ways.
 */
function findSum(a,b){
    return a+b;
}
function findSum1(a=0,b=0) {
    return a+b;
}
const findsum2 = function (a,b) {
    return a+b;
}
/*
HOW TO CONVERT A FUNCTION TO AN ARROW FUNCTION
- remove the function keyword
- add an arrow (= and >) between the parameters (a, b) and the opening curly brace {

Note: Arrow functions always start with the parameters, followed by the arrow => and then the function body.
 */
const findSum3 = (a,b)=>{
    return a+b;
}
//write an arrow function : triple that returns the result of its parameter multiplied by 3.
const triple = (a)=>{
    return a*3;
}