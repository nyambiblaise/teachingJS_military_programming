/*
Let's revisit some of the array methods that we learned about and see how we can write the callback with arrow functions and implicit return (when possible). We'll be using the same examples from previous lessons and then re-writing them.
 */
//Array filter(callback)
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
//The .filter(callback) can be re-written as follows:

    const numbersAboveTen = numbers.filter(number => number > 10);
/*Not only is it much shorter, but arguably it's much clearer (at least when you get used to the syntax).
Here's how you can read it: We filter the numbers where the number is bigger than 10.

A common mistake here is writing numbers.filter(number > 10) but this does not work because you need to pass the
 parameter first number and then the arrow function => and then finally specify the function body which is number >
  10.
 */

//Array find(callback)
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
    return name === "Alex";
});
console.log(result); // "Alex"
//The .find(callback) can be re-written as follows:

const result = names.find(name => name === "Alex");
//This can be read as: From the names array, find the name that is equal to the string "Alex".

//Array map(callback)
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
//The .map(callback) can be re-written as follows:

const doubled = numbers.map(number => number * 2);
//This can be read as: Create a new array based on the numbers array, where every number is multiplied by 2.

//If we take a look at the answer of the Classroom project:

const getRaisedGrades = grades => {
        return grades.map(function(grade) {
            if (grade + 1 > 20) {
                return 20;
            }
            return grade + 1;
        }).join(", ");
    }
//Can you use implicit return here?
//The function body is more than one line so you cannot use implicit return. If you'd like, you can re-write it with
// arrow functions:

const getRaisedGrades = grades => {
    return grades.map(grade => {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join(", ");
}