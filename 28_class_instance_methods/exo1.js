/*
Write a User class with 2 instance methods: getFullName and canVote.

getFullName should return the prefix (for example, Mrs) followed by a dot character (.), followed by the full name. Check out the sample usage for examples.
canVote() should return true when the age is 18 or above, and false otherwise.
 */
class User{
    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `Mr. ${this.firstName} ${this.lastName}`
    }
    canVote(){
        if(this.age>=18)
            return true;
    }
}
const newUser = new User("Mary","Ashu",90);
console.log(newUser.getFullName());