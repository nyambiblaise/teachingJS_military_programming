///structure
const someFunction = (a,b)=>{
    return new Promise(successCallback=>{
        setTimeout(()=>{
            return a/b;
        },1000);
    });
}
//calling it
someFunction(5,3).then(successCallback=>{

}).catch(errorCallback=>{

});
/*
Chapter Recap
Promises are cleaner because they are clearly marked as successful (with .then()) and erroneous (with .catch()).
The .then(callback) schedules the callback into the future when the promise completes successfully (more on that in the next lesson).
Your JavaScript code always runs top to bottom. However, some parts of the code might be queued for the future.
When a function returns a promise, you can call .then(callback) on its result. The callback will be scheduled in the future when the promise completes successfully.
The .then() has to be chained on the result of the function that returns a promise, so, you should not add a ; in between these two.
 */