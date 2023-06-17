/*
Given an array of strings, complete the function fiveCharactersOrFewerOnly to return a new array that only includes
 those that are 5 characters or fewer in length
 */
const words = ["dog", "wolf", "by", "family", "eaten", "camping"];
function fiveCharactersOrFewerOnly(str) {
    return str.filter((word)=>{
        return word.length<=5;
    });
}
console.log(fiveCharactersOrFewerOnly(words));