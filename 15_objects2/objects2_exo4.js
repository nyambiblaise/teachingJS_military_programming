//Complete the function getUpperCasedProperties such that it returns an array containing every property in the course parameter it receives. Every key should be in upper case. Check the sample usage to see the expected output.
let courses = {
    id:1,
    name:"Learn JavaScript",
    year:2023
};
const getUpperCasedProperties = someCourse =>{
    let keys = Object.keys(someCourse);
    let upperCased = keys.map(newKey=>{
        return newKey.toUpperCase();
    });
    return upperCased;
}
console.log(getUpperCasedProperties(courses))