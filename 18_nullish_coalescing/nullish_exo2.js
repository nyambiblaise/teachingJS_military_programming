/*
Complete the function getAge such that it returns the age property from the user object it receives.
When the age is not defined, default to the string "unknown".
 */
let user = {
    name:"john",
    age:15
}
const getAge = someUser=>{
    return `${someUser.age??"Unknown"}`
};
console.log(getAge(user));