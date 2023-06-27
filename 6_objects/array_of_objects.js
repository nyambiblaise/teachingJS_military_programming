//The array of 6_objects is the most common data structure you will use in your development career. That's because it allows us to represent a list of entities from the real world.
//we use the [] in this case
let listOfUsers = [
    {
        firstName:"ashu",
        lastName:"mary",
        isMale: false,
        age:20,
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
function countNumberOfUsers(users) {
    return users.length;
}
//we want to get the full name of the 1st user
console.log(listOfUsers[0].getFullName())
//console.log(listOfUsers[1])
function getFullNamesOfTheLastUser(users) {
    return `${users[users.length-1].firstName} ${users[users.length-1].lastName} `;
    //return `${users[users.length-1].getFullName()}`;
}
console.log(getFullNamesOfTheLastUser(listOfUsers))
//get the gpa of the 2nd user
function getGPA(users) {
    return users[1].examGrades.gpa;
}
console.log(getGPA(listOfUsers))