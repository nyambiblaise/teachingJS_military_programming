/*
The reduce() method is used to calculate a single value from an array. In other terms, you reduce an array into a single value.
Reduce example: sum
We can reduce the array [5, 10, 5] to the number 20.
We can reduce the array [2, 4, 3] to the number 9.
We can reduce the array [10, 2, 2] to the number 40 (10 * 2 * 2 = 40).

This is one of the most common use cases of reduce(), which is summing the array items.

So is the reduce method a sum or a multiplication?
It's neither. That's because the reduce() method accepts the reducer which is a callback that you have to write. That callback can be sum, multiplication, or some other logic that you may think of.

So reduce is a generic function that will reduce an array into a single value. The way it will reduce that array into a single value is configurable by you, the developer. You can configure that in the reducer callback.

NOTE
-----
- The reduce method is taking 2 parameters: The reducer and the initial value.
The reduce() method is used to calculate a single value from an array.
In other terms, the reduce() method reduces an array into a single value.
The most common use cases of reduce (when working with arrays of numbers) are sum & multiplication.
The reduce() method takes a reducer which allows you to configure the logic of how the array will be reduced into a single number.

Passing 0 as initialValue is the same as declaring let sum = 0 when using .forEach() to calculate the sum.
Passing 1 as initialValue is the same as declaring let prod = 0 when using .forEach() to calculate the product of
 factorial.
 */

const numbers = [10, 2, 2];
let findSum = numbers.reduce((total,current)=>{
    return total + current;
},0); //reducer here is 0
const findProduct = numbers.reduce((total,multiplier)=>{
    return total * multiplier;
},1); //reducer here is 1
console.log(findSum);
console.log(findProduct);