/*
 .filter() method - When you call this method on an array, you will get back another array that contains some of the
  items from the original array, based on the condition you specify.
 */
const numbers = [9, 5, 14, 3, 11];

function getEvenNumbers() {
    //normally, newNumbers can be accessed as a variable.
    let newNumbers = numbers.filter(function (number) {
        if(number%2===0){
            return number;
        }
    });
    return newNumbers
}
console.log(getEvenNumbers());