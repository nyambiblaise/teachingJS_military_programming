/*
A promise can have 3 states:
pending, fulfilled and rejected
When you create a promise, it will start in the pending state. When it has been completed successfully, then it becomes in the fulfilled state.

So, when the promise becomes fulfilled, the callback passed to .then(callback) will execute.

Visualizing the pending state
Assuming a function wait(milliseconds) that returns a promise. Let's try to console.log() the result of wait(1_000):
 */
const wait = milliseconds=>{
    return new Promise(()=>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    })
}
console.log(wait(1000));
