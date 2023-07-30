//You can concatenate/merge several arrays' content into a new array using the ... spread syntax. Here's an example:
const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point); // [5.234, 1.412];
//The new array contains the elements of both arrays.
// Here's another example where we create a new array based on the old one and add new items to it:

const items = ["Tissues", "Oranges"];
const otherItems = [...items, "Tomatoes"];
console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]
//We will revisit array concatenation once we learn about immutability which is an important concept in JavaScript.