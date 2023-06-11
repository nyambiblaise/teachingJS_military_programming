//we can use the foreach loop to iterate
let listOfUsers = [
    {
        firstName:"ashu",
        lastName:"mary",
        isMale: false,
        age:10,
        hobbies:["movies","food","internet"],
        getFullName:function () {
            return `${this.firstName} ${this.lastName}`;
        },
        examGrades:{
            academicYear:2023,
            gpa:3.1
        }
    },
    {
        firstName: "john",
        lastName:"doe",
        isMale:true,
        age:50,
        hobbies:["makeup","social media","tech"],
        getFullName:function () {
            return `${this.firstName} ${this.lastName}`;
        },
        examGrades:{
            academicYear:2023,
            gpa:3.1
        }
    },
    {
        firstName: "aicha",
        lastName: "mohammadou",
        isMale: false,
        age:19,
        hobbies:["laptops","reading","football","travel"],
        getFullName:function () {
            return `${this.firstName} ${this.lastName}`;
        },
        examGrades:{
            academicYear:2023,
            gpa:3.1
        }
    }
];
function showAllUsers() {
    listOfUsers.forEach(function (singleUser) {
        console.log(singleUser);
    })
}
function showAllFullNames() {
    listOfUsers.forEach(function (singleUser) {
        console.log(singleUser.getFullName());
    })
}
function showAllInfoInATable() {
    let i=0;
    console.log("==============================");
    console.log("No. First Last Age");
    listOfUsers.forEach(function (user) {
        i++;
        console.log(`${i} ${user.firstName} ${user.lastName} ${user.age}`);
    })
}
//here, we create an array of all hobbies into a new array
function createArrayOfHobbies() {
    let hobbs = listOfUsers.map(function (h) {
        return h.hobbies;
    })
    return hobbs;
}
function findSumOfAllAges(){
    let sum = 0;
    let g = listOfUsers.forEach(function (s) {
        sum = sum + s.age
    });
    return sum;
}
function sumAllGPA(){
    let sum = 0;
    let g = listOfUsers.forEach(function (s) {
        sum = sum + s.examGrades.gpa;
    })
    return sum;
}
//here, we return an array of full names by mapping the combination of the first and last names to a scalar in the callback function
function returnAllFullNames() {
    return listOfUsers.map(function (names) {
        return `${names.firstName} ${names.lastName}`;
    })
}
console.log(returnAllFullNames())