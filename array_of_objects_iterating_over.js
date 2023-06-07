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
console.log(createArrayOfHobbies(listOfUsers))