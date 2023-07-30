//get and display all the keys of the settings of an app
const settings = {
    theme:"dark",
    version:"1.3.2",
    betaVersion:false
};
const keys = Object.keys(settings);

console.log(keys);