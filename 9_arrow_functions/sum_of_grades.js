/*
create a function sumGrades such that it returns the sum of all the grades it receives as a parameter.
 */
let grades = [10,20,30,40];
let grades1 = [10,50,10];
let sum = 0;
//method 1
let sumGrades = (someGrades)=>{
    someGrades.forEach(grade=>{
        sum = sum + grade;
    });
    return sum;
}
console.log(sumGrades(grades));//100
console.log(sumGrades(grades1));//70

//method 2
function sumGrades1(someGrades) {
    let p=0;
    someGrades.forEach(grade=>{
        p = p + grade;
    });
    return p;
}
console.log(sumGrades1(grades));//100
console.log(sumGrades1(grades1));//70