//get and display all the keys of the settings of an app
const settings = {
    theme:"dark",
    version:"1.3.2",
    betaVersion:false
};
const keys = Object.keys(settings);
keys.forEach(function (key) {
    console.log(settings[key]);
})
console.log(keys);