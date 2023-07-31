//Assuming the code below, where the key temperatures might be undefined:
const data = {
    temperatures: [-3, 14, 4]
}
let firstValue = undefined;
if (data.temperatures) {
    firstValue = data.temperatures[0];
}
//We can refactor it into:
const firstValue = data.temperatures?.[0];
/*
Notice how we used ?. in front of the [0] to access the first item of the array. The benefit of optional chaining here is that if data.temperatures returned null or undefined, your code won't break. It will short-circuit and return undefined. Which is why we were able to get rid of the if condition.

Optional chaining usage with functions
Similarly, we can use optional chaining to call functions by using the ?. operator. Here's the example before optional chaining:
 */
const person = {
    age: 43,
    name: "Sam"
};

let upperCasedName = person.name; // might be undefined
if (person.name) {
    upperCasedName = person.name.toUpperCase();
}
//Which we can refactor into:
const upperCasedName = person.name?.toUpperCase();
//This will only call the .toUpperCase() method if person.name does not evaluate to null or undefined.