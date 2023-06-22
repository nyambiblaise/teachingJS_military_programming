/*
The difference has to do with the return type of these 2 methods:
The .filter() method always returns an array.
The .find() method returns the first array item that matches the callback condition or undefined.
 */

const numbers = [9, 5, 14, 3, 11];

// .filter() ALWAYS returns an array
numbers.filter(function(number) {
    return number >= 12;
}); // [14]

// .find() returns the first match or undefined
numbers.find(function(number) {
    return number >= 12;
}); // 14
/*
Notice how the .filter() is returning an array, even if there's only 1 item that matches your condition. In contrast, the .find() method will return the first item that matches the condition.

.filter() always returns an array. Even if it matched one item or no items.
    Now let's take a look at an example where no items satisfy the condition:
 */

const numbers = [9, 5, 14, 3, 11];

// filter() ALWAYS returns an array (even if it's empty)
numbers.filter(function(number) {
    return number >= 15;
}); // []

// .find() returns the first match or undefined (when none of the items satisfy the condition)
numbers.find(function(number) {
    return number >= 15;
}); // undefined
/*
Notice how the .filter() returned an empty array and the .find() returned undefined.

.find(callback) can return undefined. You may have to wrap its result in an if condition to avoid unexpected errors if you end up calling a method on its result.
 */