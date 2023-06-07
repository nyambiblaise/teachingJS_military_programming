//a function can be a property of an object and called accordingly
let person = {
    firstName:"john",
    lastName:"doe",
    age:19,
    canVote:function (g) {
        return g>=18;
    }
}
console.log(person.canVote(person.age))