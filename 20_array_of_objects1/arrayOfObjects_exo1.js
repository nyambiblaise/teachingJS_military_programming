//Complete the function getNumberOfTestsTaken such that it returns the number of tests taken.
const grades = [
    {
        date:"2023-07-31 18:18",
        grade:14
    },
    {
        date:"2023-08-01 10:21",
        grade:10
    }
];
const getNumberOfTestsTaken = someGrades=>{
    return someGrades.length;
}
console.log(getNumberOfTestsTaken(grades));