/*
getNumberOfGrades should return the number of grades.
getSumGrades should return the sum of all the grades.
getAverageValue should return the average value of all grades (sum of all grades divided by the total number of grades).
getPassingGrades should return all passing grades (10 and above).
getFailingGrades should return all failing grades (9 and below).
getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20).
 */
let grades = [12, 19, 10, 4, 15, 9];

//implicit method way to do things
const getNumberOfGrades = grades=>grades.length;
const getAverageValue1 = someGrades=>getSumGrades(someGrades)/getNumberOfGrades(someGrades);
const getPassingGrades1 = someGrades=>someGrades.filter(g=>g>=10);
const getFailingGrades1 = someGrades=>someGrades.filter(g=>g<10);
const getRaisedGrades1 = someGrades=>someGrades.map(g=>g+1);

//arrow method
const getNumberOfGrades1 = someGrades=>{
    return someGrades.length;
}
const getSumGrades = someGrades=>{ //not possible to use implicit method here because of multiple statements
    let t=0;
    someGrades.forEach(grade=>{
        t = t + grade;
    });
    return t;
}
const getAverageValue = someGrades=>{
    return getSumGrades(someGrades)/getNumberOfGrades(someGrades);
}
const getPassingGrades = (someGrades) => {
  return someGrades.filter(grade=>{
      return grade>=10;
  })
}
const getFailingGrades = (someGrades) => {
  return someGrades.filter(grade=>{
      return grade<10;
  })
}
const getRaisedGrades = (someGrades)=>{
    return someGrades.map(grade=>{
        return grade+1;
    })
}
console.log(getNumberOfGrades1(grades))
console.log(getSumGrades(grades))
console.log(getAverageValue1(grades))
console.log(getPassingGrades(grades))
console.log(getFailingGrades(grades))
console.log(getRaisedGrades(grades))