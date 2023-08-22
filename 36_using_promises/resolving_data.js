/*
When a promise completes successfully, you will often hear/read people say that it has resolved.
The reason for this naming will become clearer once we learn about the Promise.resolve() method.

One of the most useful features of promises is when they resolve with some data, an answer of some computation, or some values coming from an external service/API.
 */
const temperatures = [10, 5, 3];
setTemperatures(temperatures).then(data=>{
    console.log(data);
})
//The code above is called a promise resolving data. This means that the promise is giving us an answer after it has
// been completed. This will be especially important when we work with fetch.