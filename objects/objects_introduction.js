/*
An object is a data type that allows you to group several variables together into one variable that contains keys and values. This is often used to represent or describe an entity. For example, a person, a user, a product, etc.
used to store multiple values of diverse datatypes
 */

let person = {
    name:"john",
    lastName:"Ashu",
    age:89,
    gender:"male"
}
function canVote(user){
    return user.age >= 18;
    /*if(user.age>=18)
        return true;
    else
        return false;*/
}
console.log(canVote(person))
function showPerson(p) {
    console.log(p)
}
showPerson(person)
//reading object keys
function showInfo(s) {
    console.log(`${s.name} is ${s.age} years old`)
}
function getFullName(user) {
    return `${user.name} ${user.lastName}`;
}
//adding a new member to the object
function addPhone(user,number) {
    return user.phone = number;
}
addPhone(person,679194380);
console.log(person);