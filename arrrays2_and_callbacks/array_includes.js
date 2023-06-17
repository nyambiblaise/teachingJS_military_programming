/*
The array .includes(item) method is one of the simplest array methods as it takes an item rather than a callback and returns true when that item exists in the array and false otherwise. Here's an example:
 */
const fruits = ["Apple", "Peach", "Orange","Tomato"];

function checkIfFruitExist(listOfFruits,toSearch) {
    return listOfFruits.includes(toSearch);
}

console.log(checkIfFruitExist(fruits,"Avocado")); //false
console.log(checkIfFruitExist(fruits,"Orange")); //true

const email = "john.doe@gmail.com";
const email2 = "john.doegmail.com";

function checkIfEmailIsValid(userEmail) {
    return userEmail.includes("@");
}
console.log(checkIfEmailIsValid(email)); //true
console.log(checkIfEmailIsValid(email2)); //false