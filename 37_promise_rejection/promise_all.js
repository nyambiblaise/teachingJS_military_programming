/*
Promise.all returns a Promise that fulfills when all the promises it receives have been fulfilled. It rejects when one of these promises fails. This allows you to execute more than one promise at the same time and wait until all of them have fulfilled.

For example, this could be useful if you need to load a JavaScript file and a CSS file before rendering a component and you don't want to render it before both files have loaded.
 */
Promise.all([promise1, promise2]).then(values => {
    console.log(values); // [promise1Result, promise2Result]
}).catch(error => {
    console.error(error);
});