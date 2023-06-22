//Complete the function getFirstApp such that it returns the first element from the apps array it receives as a parameter.
function getFirstApp(apps) {
    return apps[0];
}
let software = ["Chrome","IDM","NetBeans","WebStorm","MS Office"];
console.log(getFirstApp(software));

//Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.
function getLastApp(apps) {
    return apps[apps.length-1];
}