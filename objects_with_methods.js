//a function can be a property of an object and called accordingly
let person = {
    firstName:"Ashu",
    lastName:"Nyenti",
    age:19,
    canVote:function (g) {
        return g>=18;
    },
    getFullName:function () {
      return `${this.firstName} ${this.lastName}`;
    },
    marks:[10,80,20],
    getSumOfMarks:function () {
        let k = 0;
        this.marks.forEach(function (s) {
            k = k + s;
        });
        return k;
    }
}
console.log(person.canVote(person.age))
console.log(person.getFullName())
console.log(person.getSumOfMarks())