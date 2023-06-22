const numbers = [4, 2, 5, 8];
const raiseGrade = grades=>{
    return grades.map(grade=>{
       return grade + 1;
    });
}
console.log(raiseGrade(numbers));