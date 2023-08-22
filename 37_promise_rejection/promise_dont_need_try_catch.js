/*
The try...catch statement does not work with promises. That's because the promises are asynchronous meaning that they are happening at a later stage.
So, if a promise fails, this is going to be sometime in the future. And, by that time, the try...catch statement has already been completed a long time ago.

Also, you don't need try...catch because promises have .then() and .catch() that act similarly to the try...catch statement.
 */