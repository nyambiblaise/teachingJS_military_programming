class User{
    constructor(name,age) {
        this.myAge = age;
        this.firstName = name;
        this.hobbies = ["football","cinema"];
        this.marks = {
            cpp:10,
            java:20,
            web:17
        }
    }
}
let user = new User("john",90);
console.log(user);