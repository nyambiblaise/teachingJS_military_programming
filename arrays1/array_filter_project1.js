/*
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
 */
let temps = [8,35,-10,4,-5,-1,48];
function getPositiveTemperatures(t) {
    return t.filter(function (temperature) {
        return temperature > 0;
    })
}
function getPositiveTemperatures2(t) {
    return t.filter( (temperature) => {
        return temperature > 0;
    })
}
console.log(getPositiveTemperatures2(temps));
/*
Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).
 */
function getFreezingTemperatures(t) {
    const temp = t.filter(function (temperature) {
        return temperature<0;
    });
    return temp;
}