/*
The most common use case for array immutability is immutably adding an item to an array. You can do that in one line also using the ... syntax:
 */
const grades = [10, 20];
const newGrades = [...grades,30];
console.log(grades);
console.log(newGrades);

//The reason why this works is that you're creating a new array with the [ ] syntax, and inside this array, you're spreading the items from grades and adding to it a new value which is 15.