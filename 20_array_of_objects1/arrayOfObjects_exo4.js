//Complete the getAverageAge function such that it returns the average age from the users parameter.
const users = [
    {
        name:"john doe",
        age:10
    },
    {
        name:"paul heyman",
        age:40
    },
    {
        name:"jonas",
        age:10
    }
];
const getAverageAge = someArray => {
    let nbofUsers = someArray.length;
    let sum = 0;
    someArray.forEach(t=>{
        sum = sum + t.age;
    })
    return sum/nbofUsers;
}
console.log(getAverageAge(users));