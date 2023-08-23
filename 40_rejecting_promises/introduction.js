/*
The promise executor function (the function passed to the new Promise(...) call), in fact, receives 2 arguments. The first one we called resolve and we saw in the last lesson. The second one is the function that you can call to move the promise from pending to rejected. We will call this one reject.

Thus, here's what promises will look like:
 */
new Promise((resolve,reject)={
    resolve(); // will resolve the promise (.then(callback) will be called)

    reject(); // will fail the promise (.catch(callback) will be called)
})