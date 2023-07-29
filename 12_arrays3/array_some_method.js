//Similarly, the Array .some(callback) method returns true when at least one item in the array satisfies the condition provided in the callback.
const numbers = [2,3,5,7,6];
const above10 = numbers.some(n=>n >= 10);//false
const below10 = numbers.some(n=> n<10)//true

console.log(above10);
console.log(below10);

//Complete the function shouldAdjustGrades such that it returns true when the grades need to be increased.
// Grades should be increased when at least one of them is failing (10 and above are passing).
const grades1 = [10, 12, 10, 14];
const grades2 = [12, 8, 17];

const shouldAdjustGrades = grades => {
    return grades.some(g => g<10);
}
console.log(shouldAdjustGrades(grades2));