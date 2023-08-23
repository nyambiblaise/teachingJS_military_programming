/*
We use it to convert from an object into a JSON string: JSON.stringify(object) method:
 */
const person = {
    firstName:"john",
    lastName:"jude",
    age:90,
    hobbies:["football","hockey","soccer"]
};
console.log(JSON.stringify(person));