/*
We saw in the last chapter that assigning an array to a new variable does not make a new copy of it. So, any changes to that new variable will also affect the original variable.

You cannot make an array or an object immutable in JavaScript. However, you can use specific methods to create a new copy which would then preserve the value of the original variable. We're calling that immutable array operations.

For example, we can create a shallow copy of that array using the spread syntax .... Here's how it works:
 */
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy); // [10, 20] (new array, not linked to 'grades')

/*
The way it works is that you're creating a new array with the [ ] syntax, and inside of this array, you're spreading the items from the grades array.

This is why this syntax ends up creating a copy rather than pointing to the same reference.

This is called a shallow copy (in contrast with deep copy, more on that at the end of this chapter).

This technique covers most scenarios for array immutability as with this new array, you will be able to manipulate it without affecting the original array.

Most array methods that you're familiar with will mutate the original array. For example, .push() does mutate the array.
The same applies to lesser used methods such as .sort().

On the other hand, the ones that are immutable are .filter() and .map() because these methods return a new array (rather than modifying the old one). The .reduce() method is also immutable since it returns a new value computed from an array.
 */