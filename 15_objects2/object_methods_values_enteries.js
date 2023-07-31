/*
Object.values()
If you only need to access object values, then you can use Object.values() which returns an array of the values.

Object.entries()
The Object.entries() method returns an array of arrays representing every key/value pair.
This is especially useful in combination with array destructuring and for..in

 */
let courses = {
    name:"JavaScript Tutorial",
    lecturer:"Jonas"
};
//console.log(Object.values(courses))
//console.log(Object.entries(courses))

//Exo1: Complete the function getUpperCasedValues such that it returns an array containing every property value in the course parameter it receives. Every property value should be in upper case.

const getUpperCasedValues = someCourses=>{
    let k = Object.values(someCourses);
    let done = k.map(values=>{
        return values.toUpperCase();
    })
    return done;
}

console.log(getUpperCasedValues(courses));