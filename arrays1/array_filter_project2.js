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

/*
Given an array of people objects, compelte the function peopleWhoBelongToAClub return a new array that has filtered out
 all those who don't belong to the club.
 */
const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];
function peopleWhoBelongToAClub(club) {
    return club.filter((belong)=>{
        return belong.member===true;
    });
};
function peopleWhoBelongToAClub2(club) {
    return club.filter(function(belong){
        return belong.member===true;
    });
};
//both functions will return the same thing, but the first is using THE ARROW OPERATOR. both are using callbacks.
console.log(peopleWhoBelongToAClub2(people));