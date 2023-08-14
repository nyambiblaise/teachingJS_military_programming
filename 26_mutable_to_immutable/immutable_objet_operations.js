//Complete the enableDarkMode function such that it returns a clone of the config object it receives with the property darkTheme set to true.
const config = {
    darkTheme: false
};
const enableDarkMode = someConfig=>{
    return {...someConfig.darkTheme===true}
}
console.log(enableDarkMode(config))