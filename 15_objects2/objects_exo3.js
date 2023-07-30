/*
Complete the function getCountProperties such that it returns the number of keys in the object course it receives. Check the sample usage to see the expected output.

console.log(getCountProperties({id: 1, name: "Learn JavaScript", year: 2021, category: "Programming"})); // 4
 */
let courses = {
    id:1,
    name:"Learn JavaScript",
    year:2023
};
let getCountProperties = someCourses =>{
    return Object.keys(someCourses).length;
}
console.log(getCountProperties(courses))