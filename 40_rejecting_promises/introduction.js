/*
The promise executor function (the function passed to the new Promise(...) call), in fact, receives 2 arguments. The first one we called resolve and we saw in the last lesson. The second one is the function that you can call to move the promise from pending to rejected. We will call this one reject.

Thus, here's what promises will look like:
 */
new Promise((resolve,reject)={
    resolve(); // will resolve the promise (.then(callback) will be called)

    reject(); // will fail the promise (.catch(callback) will be called)
})
//The reject() can also pass some data to the .catch() callback.
const alwaysReject = ()=>{
    return new Promise((resolve,reject)=>{
        reject("This code will reject");
    });
}
alwaysReject().then(()=>{
    //will never execute
}).catch((data)=>{
    console.error(data);//This code will reject
})