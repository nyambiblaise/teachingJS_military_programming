/*
since things doesnt always go as planned, a promise can fail. when such occurs, it is called a rejection.

For example, let's say you're trying to connect to a weather service/API, this might fail because of a network connection issue. In that case, the promise will not resolve successfully (it will not be fulfilled). Instead, it will be rejected.

This lets us know that something went wrong which allows us to handle the error by showing an error message or a retry button for example.

In this case, we say that the promise rejected. The reason for this naming will become clearer once we learn about the Promise.reject() method.

The .catch(callback) allows you to handle the rejected state of a promise.
 */

getWeatherIn("Amsterdam").then(data=>{
    console.log(data);
})
    .catch(error=>{
    console.error(error);
})