/*
In chapter 37, we saw how a promise can resolve with data. For example, when you ask for weather data, the promise will
 resolve
 with weather data. In this lesson, we'll learn how this works.

 Let's make our previous wait() function resolve with the number of seconds it waited (it still receives milliseconds but it resolves with the number of seconds):
 */
const wait = (milliseconds)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(milliseconds);
        },milliseconds);
    })
}