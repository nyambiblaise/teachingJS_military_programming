/*
 .filter() method - When you call this method on an array, you will get back another array that contains some of the
  items from the original array, based on the condition you specify.
  Don't forget the return keyword inside the callback function.

  to understand the "filter" property, you have to understand how "callback" functions work.
A callback is a function which is to be executed after another function has finished execution.
A formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
 */
const numbers = [9, 5, 14, 10, 3, 11,31];

function getEvenNumbers() {
    //normally, newNumbers can be accessed as a variable.
    let newNumbers = numbers.filter(function (number) {
        if(number%2===0){
            return number;
        }
    });
    return newNumbers
}
//console.log(getEvenNumbers());
function getNumbersGreaterThan10() {
    let k = numbers.filter(function (number) {
        return number>10;
    });
    return k;
}
console.log(getNumbersGreaterThan10());