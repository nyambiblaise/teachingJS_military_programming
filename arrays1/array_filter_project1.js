/*
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
 */
let temps = [8,35,-10,4,-5,-1,48];
function getPositiveTemperatures(t) {
    return t.filter(function (temperature) {
        return temperature > 0;
    })
}
console.log(getPositiveTemperatures(temps));