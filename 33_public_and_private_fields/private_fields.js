//private class members cannot be accessed out of the class in which they were created
//To mark an instance variable or method as private, you have to prefix it with the # (hash sign).
//methods can also be set as private using the #
class User{
    #age = 16; //private
    name = "Paul"; //public

    showAge(){
        return this.#age;
    }
    #showPassword(){
        return `Your password is 123`;
    }
}
const user = new User();
console.log(user.age); //undefined because age is private
console.log(user.name);
console.log(user.showAge());

class Human{
    #firstName;
    constructor() {
        this.#firstName = "JONES"; //works
    }
}
class Person{
    constructor() {
        //this.#firstName = "Judas"; //error here....
    }
}