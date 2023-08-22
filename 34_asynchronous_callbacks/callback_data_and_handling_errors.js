/*
The success callback is able to receive some arguments. For example, let's say there's an expensive calculation happening and you'd like to make it possible for the success callback to receive the answer of that calculation.
 */
const temperatures = [10, 5, 3];

const sumTemperatures = (temperatures,callback)=>{
    let mySum = 0;
    setTimeout(()=>{
        const sum = temperatures.reduce((total,current)=>{
            mySum = total + current;
        },0);
        callback(sum);
    },1000)
}
console.log(sumTemperatures(temperatures))