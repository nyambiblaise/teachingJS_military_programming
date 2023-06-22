/*
The .map(callback) method allows you to transform an array into another one. Here are some common examples:

[4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array.
["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.

Notice that you always get back an array containing the same number of items compared to the original array, but every item has most likely undergone some transformation.
 */
const numbers = [4, 2, 5, 8];
const names = ["sam", "Alex","Paul","Ashu"];
function doubleNumbers(set) {
    let result = set.map((number)=>{
       return number*2;
    });
    return result;
}
function transformNamesToUpperCase(list) {
    let newNames = list.map(function (name) {
        return name.toUpperCase();
    });
    return newNames;
}
//here, we transform just a single name and return a new array with only that change made.
function transformSingleNamesToUpperCase(list,toTransform) {
    let newNames = list.map(function (name) {
        if(toTransform===name)
            return name.toUpperCase();
        else
            return list;
    });
    return newNames;
}
console.log(doubleNumbers(numbers));
console.log(transformSingleNamesToUpperCase(names,"Paul"));
console.log(transformNamesToUpperCase(names));