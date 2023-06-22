/*
create the function getStringSizes such that it returns an array of the number of characters for every string it
 receives in the strings parameter.

This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.

Note that the tests will check that you are using an arrow function when iterating over the array (implicit return is optional).
 */
const names = ["Sam", "Alex", "Charlie"];// [3,4,7]
const names1 = ["a", "abc"];//[1,3]

//arrow method
const getStringSizes = (names)=>{
    return names.map(name=>{
        return name.length;
    })
}
console.log(getStringSizes(names));//[1,4,7]

//implicit method
const getStringSizes2 = (names)=>{
    return names.map(str=>str.length);
}
console.log(getStringSizes2(names1));//[1,3]