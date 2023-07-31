//Complete the function visualizeEntries such that it returns the entries from the course object it receives as a parameter.
let courses = {
    id:1,
    name:"JavaScript Tutorial",
    lecturer:"Jonas"
};
const visualizeEntries = someCourses=>{
    return Object.entries(someCourses);
}
console.log(visualizeEntries(courses))