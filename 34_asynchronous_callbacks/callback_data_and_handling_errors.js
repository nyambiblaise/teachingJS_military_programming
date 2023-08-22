/*
The success callback is able to receive some arguments. For example, let's say there's an expensive calculation happening and you'd like to make it possible for the success callback to receive the answer of that calculation.
 */
const temperatures = [10, 5, 3];
sumTemperatures(temperatures,value=>{
    console.log(value);
});