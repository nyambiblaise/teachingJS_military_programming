/*
the find(callback) method works the same way as the filder, but it returns the first occurence
When you call the .find(callback) method on an array, you will get back the first item that matches the condition that you specify. If no items were found, you will get back undefined.

When this happens, it will stop calling the remaining callbacks and return to you the item for which the callback returned true.
 */
const names = ["Sam", "Alex", "Charlie"];
function findPersonByName(people,search) {
    return people.find((onePerson)=>{
       return onePerson === search;
    });
}
console.log(findPersonByName(names,"Alexa"));
const numbers = [9, 5, 14, 3, 11,20,6];
function findNumbersAboveTen(n) {
    let list = n.find(function (number) {
        return number>10;
    });
    return list;
}
//here, it will return ONLY 14, because it is the first occurrence even though 11 and 20 have met the condition.
console.log(findNumbersAboveTen(numbers));