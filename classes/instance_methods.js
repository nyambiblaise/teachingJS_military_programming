class User{
    constructor(firstName,lastName,age) {
        this.myAge = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.hobbies = ["football","cinema"];
        this.marks = {
            cpp:10,
            java:20,
            web:17
        }
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    isMature(){
        return this.myAge>=18;
    }
}
let user = new User("jOHN","DOE",89);
console.log(user.getFullName());