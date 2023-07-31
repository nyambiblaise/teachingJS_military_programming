/*
Complete the function logValues such that it logs (using console.log) every value in the course object it receives as a parameter.

For example, logValues({id: 3, course: "JS Tutorial"}) should log 3, "JavaScript Tutorial and 2023" to the console.
 */
let courses = {
    id:3,
    name:"JavaScript Tutorial",
    year:2023
};
let logValues = courses =>{
    let key = Object.keys(courses);
    key.forEach(someKey=>{
        console.log(courses[someKey]);
    })
}
logValues(courses);