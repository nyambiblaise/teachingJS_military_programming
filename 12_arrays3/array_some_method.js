//Similarly, the Array .some(callback) method returns true when at least one item in the array satisfies the condition provided in the callback.
const numbers = [2,3,5,7,6];
const above10 = numbers.some(n=>n >= 10);//false
const below10 = numbers.some(n=> n<10)//true

console.log(above10);
console.log(below10);