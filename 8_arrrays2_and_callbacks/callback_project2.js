/*
Create the following functions
-showAllGrades that shows all the grades;
-getNumberOfGrades should return the number of grades.
-getSumGrades should return the sum of all the grades.
-getAverageValue should return the average value of all grades (sum of all grades divided by the total number of
 grades).
-getPassingGrades should return all passing grades (10 and above).
-getFailingGrades should return all failing grades (9 and below).
-getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20).
 */
let grades = [12, 19, 10, 4, 15, 9];
function showAllGrades(grades) {
    return grades;
}
function getNumberOfGrades(grades) {
    return grades.length;
}
function getSumGrades(grades) {
    let sum = 0;
    let k = grades.forEach((grade)=>{
        sum = sum + grade;
    });
    return sum;
}
function getAverageValue(grades) {
    return getSumGrades(grades)/getNumberOfGrades(grades);
}
function getPassingGrades(grades) {
    return grades.filter((grade)=>{
        return grade>=10;
    });
}
function getFailingGrades(grades) {
    return grades.filter((grade)=>{
        return grade<10;
    });
}
function getRaisedGrades(grades) {
    return grades.map((grade)=>{
        if(grade<20)
            return grade+1;
        else
            return grade;
    });
}
console.log(`All Grades: ${showAllGrades(grades)}`);
console.log(`Total Grades: ${getNumberOfGrades(grades)}`);
console.log(`Sum Of Grades: ${getSumGrades(grades)}`);
console.log(`Average Grade: ${getAverageValue(grades)}`);
console.log(`Passing Grades: ${getPassingGrades(grades)}`);
console.log(`Failing Grades: ${getFailingGrades(grades)}`);
console.log(`Grades Increased By 1: ${getRaisedGrades(grades)}`);