//As we previously studied, the .map() array method allows you to transform an array into another array of the same size.
const names = ["joHn", "mary"];
const convertNameToUpperCase = someNames=>{
    return someNames.map(name =>name.toUpperCase());
}
console.log(convertNameToUpperCase(names))