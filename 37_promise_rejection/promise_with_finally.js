/*
The .finally() callback will execute whenever the promise's state changes from pending to either fulfilled or rejected.
This means that .finally() will execute for both success and error states.
 */
getWeatherIn("Tokyo").then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
}).finally(res=>{
    console.log(res);
})