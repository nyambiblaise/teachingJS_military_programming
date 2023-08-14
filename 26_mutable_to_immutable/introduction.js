/*
We saw in the last chapter that assigning an array to a new variable does not make a new copy of it. So, any changes to that new variable will also affect the original variable.

You cannot make an array or an object immutable in JavaScript. However, you can use specific methods to create a new copy which would then preserve the value of the original variable. We're calling that immutable array operations.

For example, we can create a shallow copy of that array using the spread syntax .... Here's how it works:
 */