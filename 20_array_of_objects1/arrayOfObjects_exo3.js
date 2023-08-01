/*
Complete the getSumOfGrades function such that it returns the sum of all grades.
This should work for any array received as a parameter. The array can have 1 or more grade entries in it.
 */
const grades = [
    {
        date:"2023-07-31 18:18",
        grade:14
    },
    {
        date:"2023-08-01 10:21",
        grade:18
    }
]
const getSumofGrades1 = someGrades=>{
    let sum = someGrades.reduce((total,current)=>{
       return total.grade + current.grade;
    });
    return sum;
}
const getSumOfGrades2 = someGrades=>{
    let s = 0;
    someGrades.forEach(result=>{
        console.log(result)
        s = s + result.grade;
    });
    return s;
}
console.log(getSumOfGrades2(grades));