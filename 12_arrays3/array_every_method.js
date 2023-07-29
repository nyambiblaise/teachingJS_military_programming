//The Array .every(callback) method returns true when every item in the array satisfies the condition provided in the callback.
const numbers = [2,4,6,8,10,12];
let nbAbove10 = numbers.every(number=>number>=10); //false
let nbBelow13 = numbers.every(number=>number<13); //true

console.log(nbAbove10);
console.log(nbBelow13);