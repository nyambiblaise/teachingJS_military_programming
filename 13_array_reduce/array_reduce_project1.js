/*
For the array of grades, display the current value and total after each iteration. At the end, display the sum of the array elements
the value of total starts at 0 (which is given by the initialValue)
the value of current a single item of the array for every iteration.
the value of total is the result of the last run of the reducer (the ongoing sum)
 */

let grades = [10, 5, 15, 20];
let sumOfGrades = grades.reduce((total,current)=>{
    console.log(`Current Value: ${current}`);
    console.log(`Total: ${total}`);
    console.log(`=========`);
    return total + current;
},0);
console.log(sumOfGrades);

//Complete the function such that it returns the sum of the numbers it receives as a parameter.
// use implicit functions and normal functions

//method 1
let sum1 = grades.reduce((total,current)=>{
    return total+current;
});
console.log(sum1);

//method2
const sum2 = someGrades=>{
    let s = someGrades.reduce((total,current)=>{
        return total + current;
    });
    return s;
}
console.log(sum2(grades));