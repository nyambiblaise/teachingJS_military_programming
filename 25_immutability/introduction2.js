/*
Arrays & Objects are both considered objects in JavaScript.
When you write [], it's the same as creating a new instance of Array.
When you write {}, it's the same as creating a new instance of Object.
 */
new Array(); // creates []
new Object(); // creates {}

const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
arr1 === arr2; //false

const obj1 = new Object();
obj1.key = "something";
const obj2 = new Object();
obj2.key = "something";
obj1 === obj2; //false

/*
This should make the reason why they're not equal a bit clearer.
new Array() creates a new instance of array.
Every time you call new Array() you get a new instance, which means new Array() is certainly not the same as new Array() because they both are different instances.

So with Arrays & Objects, we need another approach for comparing equality from a values perspective.
As in, we expected [] === [] to be true because they are both empty arrays, but the way JavaScript works is different as it's checking if they are the same instance.

Recap
Arrays are objects in JavaScript.
[] === [] is the same as new Array() === new Array()
{} === {} is the same as new Object() === new Object()
[] === [] is false because it's comparing 2 different instances of arrays
{} === {} is false because it's comparing 2 different instances of objects
When you assign a variable to an object or array, it does NOT copy it. It will only reference its value.

 */