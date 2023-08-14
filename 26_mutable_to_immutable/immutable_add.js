/*
The most common use case for array immutability is immutably adding an item to an array. You can do that in one line also using the ... syntax:
 */
const grades = [10, 20];
const newGrades = [...grades,30];
console.log(grades);
console.log(newGrades);