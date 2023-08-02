//As we previously studied, the .map() array method allows you to transform an array into another array of the same size.
const names = ["joHn", "mary"];
const convertNameToUpperCase = someNames=>{
    return someNames.map(name =>name.toUpperCase());
}
console.log(convertNameToUpperCase(names))

//The .map() works similarly for arrays of objects. You can transform an array of objects into a new array of objects, or, you can transform it into an array of strings or an array of numbers. This allows you to extract some properties from an array of objects. Here's an example: