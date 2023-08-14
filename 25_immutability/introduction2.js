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