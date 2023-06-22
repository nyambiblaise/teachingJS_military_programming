/*
Using an arrow function, complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
 */
let temperatures = [1, -3, -2, 4, 10];

const getPositiveTemperatures = (someTemp)=>{
    return someTemp.filter(temp=>{
        return temp>0;
    });
}
console.log(getPositiveTemperatures(temperatures));