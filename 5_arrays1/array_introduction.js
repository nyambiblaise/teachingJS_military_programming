const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of 2_numbers
const names = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

/*
- to get the size of an array, we use the .length property.
- we read array elements using the index. indices start at 0 and end at n-1 for an array of size n. ex: (grades[0])
- we can also use the .at() property to return an element at a specific index. array.at(index) => names.at(1);
 */
function getNameAt(index) {
    console.log(`name at position ${index} is ${names.at(index)}`);
}
getNameAt(1);

//you can add an element in an array using the .push() property
console.log("Before Pushing...");
console.log(names);

names.push("Judas");// we are pushing here...

console.log("After Pushing...");
console.log(names);

//to know more on array properties, just type the array name followed by the  (.) operation. => names.
