/*
A Promise is a JavaScript feature that allows us to schedule work in the future and then runs callbacks based on the outcome of the promise (whether it was successful or not).
 */
const wait = milliseconds=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },milliseconds);
    });
}
const time = 1000;
wait(time).then(()=>{
    console.log(`Waited for ${time/1000} seconds`);
});
/*
Because the function wait() returns a new promise, then we can call .then() on its result.
You can only call .then() on functions that return a new Promise.

Several Web APIs (functions in the browser) work with promises, which is why this topic is important. Most importantly:
fetch (explained in a later chapter)
getUserMedia (access camera/audio)

RECAP
- When a function returns a promise, you can call .then(callback) on its result. The callback will be scheduled in
 the future when the promise completes successfully.
- The .then() has to be chained on the result of the function that returns a promise, so, you should not add a ; in
 between these two.
 */