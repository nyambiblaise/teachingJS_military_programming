let person = {
    firstName:"John",
    lastName:"Paul",
    hobbies:["football","cinema","video game","food"],
    phone:679194380,
    age:89,
    isMale:true,
    marks:[10,45,12,8]
};
//counting an array in an object
function countHobbies(user) {
    return user.hobbies.length;
}
function getFirstMark(user){
    return user.marks[0];
}
function getLastMark(user){
    return user.marks[user.marks.length - 1];
}
//console.log(getFirstMark(person))
function sumAllMarks(user) {
    let k = 0;
    user.marks.forEach(function (s) {
        k = k + s;
    })
    return k;
}
console.log(sumAllMarks(person));