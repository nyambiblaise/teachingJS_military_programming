//Reading dynamic object property. here, we can read an object's property by passing it as parameter unto a function.
const person = {
    name:"john",
    age:16
};
const getPersonByKey = (somePerson,someKey)=>{
    return somePerson[someKey];
}
console.log(getPersonByKey(person,"name"));

/*
Object.keys()
The Object.keys(obj) method returns an array of all the keys in the obj that you provide.
Note that we have Object here, which is a global variable available in JavaScript. It is similar to Number on which we called Number.parseInt() before.

The Object global variable contains methods that are relevant to objects. One of them is the keys() which accepts any object.
 */
console.log(Object.keys(person)) //["name","age"]