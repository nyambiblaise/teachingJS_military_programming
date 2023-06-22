//Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
// Use an arrow function (implicit return is optional).

const temperatures = [-9,0,-5,25,-19,19];
const getPositiveTemperatures = temperatures=>{
    return temperatures.filter(temp=>temp>0);
}