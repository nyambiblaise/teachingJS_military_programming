/*
What if you want to execute more than one promise at a time but only care about the first one that successfully resolves? In that case, you can use the Promise.any method. The result you will get will contain the value of the first successful promise (the one that's faster).

The use cases are slightly more advanced here but in general, it lets you show data faster by trying to get data from multiple sources, for example, one from some sort of a cache and one from the network.
 */
Promise.any([promise1, promise2]).then(value => {
    console.log(value); // result of the promise that finishes first
}).catch(error => {
    console.error(error);
});