/*
Things get even more complicated when you want to handle errors. Some functions might break, for example, if you're trying to get the weather from an API/service, this might break because of a bad Internet connection, or maybe the weather service is down, etc.

Using the callback pattern, we often see the error callback specified after the success callback.
 */
const temperatures = [10, 5, 3];
setTemperatures(temperatures,value=>{
    console.log(value); //(the sum of temperatures)
},reason=>{ //// this callback will run when there's an error
    console.error(reason);
})
//the simplified function can be
setTemperatures(temperatures,successCallback,errorCallback);