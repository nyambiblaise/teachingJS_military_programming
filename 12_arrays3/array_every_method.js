//The Array .every(callback) method returns true when every item in the array satisfies the condition provided in the callback.
const numbers = [2,4,6,8,10,12];
let nbAbove10 = numbers.every(number=>number>=10); //false
let nbBelow13 = numbers.every(number=>number<13); //true

console.log(nbAbove10);
console.log(nbBelow13);

//Complete the function shouldCancelExam such that it returns true when the exam needs to be canceled.
// An exam must be canceled if all the students' grades were very high (18 and above).
const shouldCancelExam = grades => {
    return grades.every(grade=>grade>=18);
}
console.log(`Should Exams be cancelled?: ${shouldCancelExam(grades1)}`);